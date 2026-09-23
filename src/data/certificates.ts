// Lernpfad mit Zertifikaten. Recherche Stand 2026-09-23 (Anbieterseiten, Kosten grob in EUR).
// Status ehrlich halten: erst auf 'done' stellen, wenn das Zertifikat wirklich vorliegt,
// und dann `credential` mit dem Nachweis-Link (Credly, Anthropic, Microsoft Learn, LinkedIn) setzen.
import type { Lang } from '../i18n';

export type CertStatus = 'planned' | 'learning' | 'done';
export type CertPhase = 'now' | 'next' | 'later';

export interface Certificate {
  name: string;
  issuer: string;
  url: string;
  phase: CertPhase;
  status: CertStatus;
  credential?: string;
  topic: Record<Lang, string>;
}

export const certificates: Certificate[] = [
  {
    name: 'AI Fluency: Framework & Foundations',
    issuer: 'Anthropic Academy',
    url: 'https://anthropic.skilljar.com/ai-fluency-framework-foundations',
    phase: 'now',
    status: 'planned',
    topic: { de: 'Mit KI sinnvoll und verantwortungsvoll arbeiten', en: 'Working with AI effectively and responsibly' },
  },
  {
    name: 'Claude Code in Action',
    issuer: 'Anthropic Academy',
    url: 'https://anthropic.skilljar.com/claude-code-in-action',
    phase: 'now',
    status: 'planned',
    topic: { de: 'Software mit Coding-Agenten bauen', en: 'Building software with coding agents' },
  },
  {
    name: 'GitHub Foundations (GH-900)',
    issuer: 'GitHub',
    url: 'https://learn.microsoft.com/en-us/credentials/certifications/github-foundations/',
    phase: 'now',
    status: 'planned',
    topic: { de: 'Git und GitHub, offiziell geprüft', en: 'Git and GitHub, officially examined' },
  },
  {
    name: 'AWS Certified AI Practitioner',
    issuer: 'Amazon Web Services',
    url: 'https://aws.amazon.com/certification/certified-ai-practitioner/',
    phase: 'next',
    status: 'planned',
    topic: { de: 'KI und generative KI in echten Produkten', en: 'AI and generative AI in real products' },
  },
  {
    name: 'Azure AI Fundamentals (AI-901)',
    issuer: 'Microsoft',
    url: 'https://learn.microsoft.com/en-us/credentials/certifications/exams/ai-901/',
    phase: 'next',
    status: 'planned',
    topic: { de: 'Grundlagen von KI-Diensten in der Cloud', en: 'Foundations of AI services in the cloud' },
  },
  {
    name: 'Java Foundations (1Z0-811)',
    issuer: 'Oracle',
    url: 'https://education.oracle.com/java-foundations/pexam_1Z0-811',
    phase: 'next',
    status: 'planned',
    topic: { de: 'Die drei Jahre Java aus der HTL nachweisen', en: 'Proof of three years of Java at HTL' },
  },
  {
    name: 'GitHub Actions (GH-200)',
    issuer: 'GitHub',
    url: 'https://learn.microsoft.com/en-us/credentials/certifications/github-actions/',
    phase: 'later',
    status: 'planned',
    topic: { de: 'Automatisierung und Deploys', en: 'Automation and deploys' },
  },
];
