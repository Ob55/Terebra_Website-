// Canonical site details used for <title>, meta descriptions, canonical URLs
// and the sitemap.
//
// SITE_URL is the canonical home of the site. Canonicals, og:url and the
// sitemap are all built from it, so it must match the domain visitors and
// crawlers actually reach.
//
// Changing domains means changing it here AND in index.html,
// public/robots.txt and public/sitemap.xml.
export const SITE_URL = 'https://www.terebra.africa'
export const SITE_NAME = 'Terebra Agri Services'

export const pageMeta = {
  '/': {
    title: 'Terebra Agri Services | Integrated agriculture in Kenya',
    description:
      'Farm in Kenya without building a farming company. Terebra runs land strategy, tenure, utilities, farm management and post-harvest delivery as one service.',
  },
  '/about': {
    title: 'About — Terebra Agri Services',
    description:
      'One accountable partner for agriculture in Kenya: how Terebra strategises, delivers and manages working agricultural operations, with every parcel on the record.',
  },
  '/services': {
    title: 'Services — Terebra Agri Services',
    description:
      'Land strategy and tenure, utilities and infrastructure, farm management, post-harvest delivery, outgrower programmes and compliance across the whole value chain.',
  },
  '/platform': {
    title: 'Platform — Terebra Agri Services',
    description:
      'The Terebra platform runs farm operations, outgrower programmes, metered utilities and tenure records with full traceability from parcel to consignment.',
  },
  '/where-we-work': {
    title: 'Where we work — Terebra Agri Services',
    description:
      'Terebra services are in use in Matiliku (Makueni), Kigogoini (Nyeri) and Kiptangwanyi (Nakuru), with further production areas under assessment across Kenya.',
  },
  '/contact': {
    title: 'Contact — Terebra Agri Services',
    description:
      'Tell us what you want to grow. Terebra replies to investors, institutions, landowners and producers within two working days.',
  },
  '/scoping-call': {
    title: 'Book a scoping call — Terebra Agri Services',
    description:
      'Book a scoping call and we will turn your goal into a costed plan: what land, what utilities, what targets and what it takes to deliver.',
  },
  '/privacy': {
    title: 'Privacy notice — Terebra Agri Services',
    description:
      'How Terebra Agri Services collects, uses and protects personal data submitted through this website, under Kenya’s Data Protection Act, 2019.',
  },
  '/credits': {
    title: 'Credits — Terebra Agri Services',
    description:
      'Attribution for the photography and map data used on the Terebra Agri Services website.',
  },
  '/terms': {
    title: 'Terms of use — Terebra Agri Services',
    description:
      'The terms on which Terebra Agri Services Ltd makes this website and its content available.',
  },
}
