import BlogPosts from './BlogPosts.js'
import Clearline7 from './Clearline7.js'
import ClericalOfficePro from './ClericalOfficePro.js'
import ClerkRoomStandard from './ClerkRoomStandard.js'
import FederalFlow from './FederalFlow.js'
import TechDocs from './TechDocs.js'
import WikiGuidelines from './WikiGuidelines.js'
import SetDefinition from './SetDefinition.js'

import { BoxKit, ElementSeven, TechLaw } from './brand-aesthetics/index.js'

export interface EditionMeta {
  name: string
  slug: string
  tagline: string
  hero: string
  description: string
  features: string[]
  icon: string
}

export interface EditionEntry extends EditionMeta {
  definition: SetDefinition
}

export const editions: Record<string, EditionEntry> = {
  federal: {
    name: 'Federal Flow',
    slug: 'federal',
    tagline: 'Strict compliance standards.',
    hero: 'Federal Flow',
    description: 'Trusted by federal agencies and legal teams.',
    features: ['Serif-first typography', 'Compliance-ready spacing', 'Multi-level clearance marks'],
    icon: '🏛️',
    definition: FederalFlow,
  },
  tech: {
    name: 'Tech Docs',
    slug: 'tech',
    tagline: 'API & architectural clarity.',
    hero: 'Tech Documentation',
    description: 'Code blocks, syntax highlighting, and technical clarity.',
    features: ['Monospaced code blocks', 'Syntax palette', 'Callout styles for APIs'],
    icon: '💻',
    definition: TechDocs,
  },
  clerk: {
    name: 'Clerk Room',
    slug: 'clerk',
    tagline: 'Standard administrative logging.',
    hero: 'Clerk Room Standard',
    description: 'Perfect for forms, reports, and administrative tasks.',
    features: ['Compact layouts', 'Clear form elements', 'High information density'],
    icon: '🗄️',
    definition: ClerkRoomStandard,
  },
  wiki: {
    name: 'Wiki Guidelines',
    slug: 'wiki',
    tagline: 'Collaborative knowledge base.',
    hero: 'Wiki Guidelines',
    description: 'Inclusive design for team wikis and documentation.',
    features: ['Accessible color palette', 'TOC emphasis', 'Collaborative formatting'],
    icon: '📚',
    definition: WikiGuidelines,
  },
  blog: {
    name: 'Blog Posts',
    slug: 'blog',
    tagline: 'External comms & announcements.',
    hero: 'Blog & Comms',
    description: 'Craft compelling blog posts with ease.',
    features: ['Optimized for web readability', 'Rich media support', 'Engaging typography'],
    icon: '✍️',
    definition: BlogPosts,
  },
  pro: {
    name: 'Clerical Pro',
    slug: 'pro',
    tagline: 'Executive summaries & briefs.',
    hero: 'Clerical Pro',
    description: 'Clean, contemporary style for corporate teams.',
    features: ['Modern sans-serif', 'Subtle color accents', 'Quick style sets'],
    icon: '💼',
    definition: ClericalOfficePro,
  },
  base: {
    name: 'Clearline Base',
    slug: 'base',
    tagline: 'The universal foundation.',
    hero: 'Clearline Base',
    description: 'A versatile and balanced style for general use.',
    features: ['Clean typography', 'Neutral color palette', 'Standard document layouts'],
    icon: '✨',
    definition: Clearline7,
  },
  boxkit: {
    name: 'BoxKit',
    slug: 'boxkit',
    tagline: 'Brand-aligned corporate style.',
    hero: 'BoxKit',
    description: 'Sleek and professional documents for corporate branding.',
    features: ['Brand colors', 'Modern typography', 'Professional layouts'],
    icon: '📦',
    definition: BoxKit,
  },
  element7: {
    name: 'Element Seven',
    slug: 'element7',
    tagline: 'Creative and dynamic designs.',
    hero: 'Element Seven',
    description: 'Vibrant and engaging style for creative projects.',
    features: ['Bold colors', 'Dynamic typography', 'Innovative layouts'],
    icon: '🎨',
    definition: ElementSeven,
  },
  techlaw: {
    name: 'TechLaw',
    slug: 'techlaw',
    tagline: 'Legal documents for tech firms.',
    hero: 'TechLaw',
    description: 'Precise and clear style for legal documentation in the tech industry.',
    features: ['Clear typography', 'Structured layouts', 'Legal formatting'],
    icon: '⚖️',
    definition: TechLaw,
  },
}

export type EditionKey = keyof typeof editions
