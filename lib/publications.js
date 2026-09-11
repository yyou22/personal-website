import { cv } from './cv'

const presentation = {
  'https://arxiv.org/abs/2608.12605': {
    citationId: 'C5',
    year: 2026,
    label: 'UIST 2026 · Accepted',
    image: '/images/works/test-kitchen/workflow.png',
    position: '50% 50%'
  },
  'https://www.microsoft.com/en-us/research/publication/engaging-communities-meaningfully-in-defining-disability-representation-for-ai-image-generation/': {
    citationId: 'C4',
    year: 2026,
    label: 'CHI 2026',
    image: '/images/publications/community-library.png',
    position: '50% 23%'
  },
  'https://doi.org/10.1016/j.ait.2026.100046': {
    citationId: 'J2',
    year: 2026,
    label: 'AI for Transportation · 2026',
    image: '/images/publications/traffic-forecasting.png',
    position: '70% 50%'
  },
  'https://dl.acm.org/doi/full/10.1145/3746059.3747655': {
    citationId: 'C3',
    year: 2025,
    label: 'UIST 2025',
    image: '/images/publications/macedon.png',
    position: '50% 0%'
  },
  'https://www.jeffjianzhao.com/papers/vatra.pdf': {
    citationId: 'C2',
    year: 2025,
    label: 'Graphics Interface 2025',
    image: '/images/works/vatra/vatra1_thumbnail_.gif',
    position: '50% 50%'
  },
  'https://dl.acm.org/doi/10.1145/3725739': {
    citationId: 'J1',
    year: 2025,
    label: 'ACM TiiS 2025',
    image: '/images/works/advex/advex2_thumbnail.gif',
    position: '50% 50%'
  },
  'https://doi.org/10.1145/3706599.3719795': {
    citationId: 'W2',
    year: 2025,
    label: 'CHI EA 2025',
    image: '/images/works/gamification/gamification3_thumbnail_.gif',
    position: '50% 50%'
  },
  'https://visxai-aml.vercel.app/': {
    citationId: 'W1',
    year: 2024,
    label: 'VISxAI 2024',
    image: '/images/works/visxai/visxai7_thumbnail_.gif',
    position: '50% 50%'
  },
  'https://arxiv.org/abs/2310.09235': {
    citationId: 'C1',
    year: 2024,
    label: 'CHI 2024',
    image: '/images/works/coprompt4.jpeg',
    position: '50% 40%'
  }
}

export const publications = cv.publications.map(paper => ({
  ...paper,
  ...presentation[paper.href]
}))
