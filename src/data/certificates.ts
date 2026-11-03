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
    name: 'Claude 101',
    issuer: 'Anthropic Academy',
    url: 'https://anthropic.skilljar.com/claude-101',
    phase: 'now',
    status: 'done',
    credential: 'https://academy.claude.com/verify/f5697003c32fb9f8186c0f3e2979250f',
    topic: { de: 'Grundlagen der Arbeit mit Claude', en: 'The basics of working with Claude' },
  },
  {
    name: 'Claude Code 101',
    issuer: 'Anthropic Academy',
    url: 'https://anthropic.skilljar.com/claude-code-101',
    phase: 'now',
    status: 'done',
    credential: 'https://academy.claude.com/verify/c8c86eb6659097e7e36d12aea9e51d7d',
    topic: { de: 'Einstieg in Claude Code', en: 'Getting started with Claude Code' },
  },
  {
    name: 'Introduction to Claude Cowork',
    issuer: 'Anthropic Academy',
    url: 'https://anthropic.skilljar.com/introduction-to-claude-cowork',
    phase: 'now',
    status: 'done',
    credential: 'https://academy.claude.com/verify/c80b60e5c16e209273036165ab7e5402',
    topic: { de: 'Aufgaben an Claude als Mitarbeiter übergeben', en: 'Handing off work to Claude as a coworker' },
  },
  {
    name: 'Claude Code in Action',
    issuer: 'Anthropic Academy',
    url: 'https://anthropic.skilljar.com/claude-code-in-action',
    phase: 'now',
    status: 'done',
    credential: 'https://academy.claude.com/verify/4e6d5e9836195d7fb36dc896c8ef79fd',
    topic: { de: 'Software mit Coding-Agenten bauen', en: 'Building software with coding agents' },
  },
  {
    name: 'GitHub Foundations (GH-900)',
    issuer: 'GitHub',
    url: 'https://learn.microsoft.com/en-us/credentials/certifications/github-foundations/',
    phase: 'now',
    status: 'planned',
    topic: { de: 'Git und GitHub, offiziell geprüft', en: 'Git and GitHub, officially certified' },
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
    topic: { de: 'Grundlagen von KI-Diensten in der Cloud', en: 'The basics of cloud AI services' },
  },
  {
    name: 'Java Foundations (1Z0-811)',
    issuer: 'Oracle',
    url: 'https://education.oracle.com/java-foundations/pexam_1Z0-811',
    phase: 'next',
    status: 'planned',
    topic: { de: 'Java aus der HTL nachweisen', en: 'Certifying the Java I learn at HTL' },
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
