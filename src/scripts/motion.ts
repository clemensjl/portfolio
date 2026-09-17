// Scroll-Engine der Seite. Bewusst ohne Bibliothek und ohne scroll-Listener:
// alles haengt an IntersectionObserver, kontinuierliche Effekte laufen ueber
// CSS scroll-driven animations (siehe global.css, @supports animation-timeline).
//
// Drei Aufgaben:
//  1. [data-reveal]      -> bekommt .is-in, sobald es in den Viewport kommt (einmalig)
//  2. [data-preview]     -> bekommt .is-live, solange es sichtbar ist (Dauer-Animationen pausieren sonst)
//  3. [data-story]       -> Textschritte [data-story-step="n"] setzen data-step="n" auf der
//                           zugehoerigen Vorschau und .is-current auf dem aktiven Schritt
//  4. [data-autoplay]    -> Vorschau ohne Geschichte: schaltet ihre vier Schritte selbst durch,
//                           solange sie sichtbar ist

function initReveal() {
  const els = document.querySelectorAll<HTMLElement>('[data-reveal]:not(.is-in)');
  if (!els.length) return;
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (!e.isIntersecting) continue;
        e.target.classList.add('is-in');
        io.unobserve(e.target);
      }
    },
    { rootMargin: '0px 0px -12% 0px', threshold: 0.01 },
  );
  els.forEach((el) => io.observe(el));
}

function initLive() {
  const els = document.querySelectorAll<HTMLElement>('[data-preview]');
  if (!els.length) return;
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) e.target.classList.toggle('is-live', e.isIntersecting);
    },
    { threshold: 0.2 },
  );
  els.forEach((el) => io.observe(el));
}

function initStories() {
  const mq = matchMedia('(max-width: 900px)');
  let observers: IntersectionObserver[] = [];

  const build = () => {
    document.querySelectorAll<HTMLElement>('[data-story]').forEach((story) => {
      const preview = story.querySelector<HTMLElement>('[data-preview]');
      const steps = [...story.querySelectorAll<HTMLElement>('[data-story-step]')];
      if (!preview || !steps.length) return;

      const setStep = (el: HTMLElement) => {
        preview.dataset.step = el.dataset.storyStep ?? '0';
        steps.forEach((s) => s.classList.toggle('is-current', s === el));
      };

      // Aktiv ist der Schritt, der ein schmales Band des Viewports kreuzt: die Mitte, solange
      // die Vorschau daneben steht; liegt sie gepinnt oben (Buehne, Mobil), rutscht das Band
      // in den freien Bereich darunter.
      const stacked = getComputedStyle(story).display === 'block';
      // Jeder Observer-Treffer ist nur der Anlass: gewaehlt wird immer der Schritt, dessen Mitte
      // dem Band am naechsten liegt. So stimmt der Zustand auch nach Spruengen (Ankerlinks,
      // Bild-auf/ab), bei denen einzelne Schritte das Band nie kreuzen.
      // Lage des Bandes: neben der Vorschau die Viewport-Mitte; liegt sie gepinnt oben, dann das
      // obere Drittel des freien Bereichs unter ihr (haengt von ihrer Hoehe ab, also messen).
      const pin = story.querySelector<HTMLElement>('.pin');
      const pinBottom = stacked && pin ? pin.getBoundingClientRect().height + pin.offsetTop - story.offsetTop + parseFloat(getComputedStyle(pin).top || '0') : 0;
      const frac = stacked ? Math.min(0.85, (pinBottom + (innerHeight - pinBottom) * 0.38) / innerHeight) : 0.5;
      const pick = () => {
        const band = innerHeight * frac;
        let best = steps[0];
        let dist = Infinity;
        for (const el of steps) {
          const r = el.getBoundingClientRect();
          const d = Math.abs(r.top + r.height / 2 - band);
          if (d < dist) { dist = d; best = el; }
        }
        setStep(best);
      };
      const pct = (n: number) => `${Math.round(n * 100)}%`;
      const io = new IntersectionObserver(pick, {
        rootMargin: `-${pct(frac - 0.05)} 0px -${pct(1 - frac - 0.05)} 0px`,
        threshold: 0,
      });
      // Zweiter Anlass: die Geschichte selbst kommt ins Bild oder verlaesst es.
      const ioStory = new IntersectionObserver(pick, { threshold: [0, 0.25, 0.5, 0.75, 1] });
      ioStory.observe(story);
      observers.push(ioStory);
      steps.forEach((s) => io.observe(s));
      observers.push(io);
      pick();
    });
  };

  build();
  // Layoutwechsel (Drehen, Fenstergroesse): das Band liegt dann woanders, Observer neu aufbauen.
  mq.addEventListener('change', () => {
    observers.forEach((o) => o.disconnect());
    observers = [];
    build();
  });
}

function initAutoplay() {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)');
  document.querySelectorAll<HTMLElement>('[data-autoplay]').forEach((host) => {
    const preview = host.querySelector<HTMLElement>('[data-preview]');
    if (!preview) return;
    let timer: number | undefined;
    let held = false; // Zeiger oder Fokus auf der Kachel: nichts unter der Hand umschalten

    const sync = () => {
      const run = preview.classList.contains('is-live') && !document.hidden && !held && !reduce.matches;
      if (run && timer === undefined) {
        timer = window.setInterval(() => {
          preview.dataset.step = String((Number(preview.dataset.step ?? 0) + 1) % 4);
        }, 3200);
      } else if (!run && timer !== undefined) {
        clearInterval(timer);
        timer = undefined;
      }
    };

    new MutationObserver(sync).observe(preview, { attributes: true, attributeFilter: ['class'] });
    document.addEventListener('visibilitychange', sync);
    reduce.addEventListener('change', sync);
    for (const [on, off] of [['pointerenter', 'pointerleave'], ['focusin', 'focusout']] as const) {
      host.addEventListener(on, () => { held = true; sync(); });
      host.addEventListener(off, () => { held = false; sync(); });
    }
    sync();
  });
}

export function initMotion() {
  // Base.astro nimmt html.js wieder weg, wenn dieses Flag nach dem Laden fehlt.
  (window as typeof window & { __motion?: boolean }).__motion = true;
  document.documentElement.classList.add('js');
  initReveal();
  initLive();
  initStories();
  initAutoplay();
}
