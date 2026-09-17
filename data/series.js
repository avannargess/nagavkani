// Central place for book/series data so every page stays in sync.

export const paintSeries = {
  slug: 'paint-me-a-different-color',
  title: 'Paint Me a Different Color',
  tagline: 'A short story series — an allegory of war',
  description:
    "A five-part allegorical series about war, identity, free will, and the fragile differences that divide us. Told through soldiers, commanders, and lovers caught in a conflict none of them chose.",
  coverImage: '/Paint Me a Different Color.TIFF',
  books: [
    {
      slug: 'paint-me-a-different-color',
      order: 1,
      title: 'Paint Me a Different Color',
      status: 'published',
      statusLabel: 'Available now',
      buyUrl:
        'https://www.amazon.com/Paint-Me-Different-Color-Obedience-ebook/dp/B0HK1X8BL2',
      description:
        'Commanded to fight, warriors enter a brutal conflict where obedience determines every step — and compassion carries a terrible price. As soldiers, commanders, and lovers confront loss, they begin questioning the unseen powers controlling their lives. Why must people who share the same fears and hopes become enemies? Can anyone resist a fate chosen for them? Paint Me a Different Color is a haunting allegorical tale about war, identity, free will, and the fragile differences that divide us.',
    },
    {
      slug: 'call-me-a-different-name',
      order: 2,
      title: 'Call Me a Different Name',
      status: 'coming-soon',
      statusLabel: 'Coming soon',
      description:
        'Book Two in the Paint Me a Different Color series. Details coming soon.',
    },
    {
      slug: 'dub-me-a-different-title',
      order: 3,
      title: 'Dub Me a Different Title',
      status: 'planned',
      statusLabel: 'Planned',
      description: 'Book Three in the Paint Me a Different Color series.',
    },
    {
      slug: 'write-me-a-different-fate',
      order: 4,
      title: 'Write Me a Different Fate',
      status: 'planned',
      statusLabel: 'Planned',
      description: 'Book Four in the Paint Me a Different Color series.',
    },
    {
      slug: 'build-me-a-different-world',
      order: 5,
      title: 'Build Me a Different World',
      status: 'planned',
      statusLabel: 'Planned',
      description: 'Book Five in the Paint Me a Different Color series.',
    },
  ],
}

export const dragonDaffodilSeries = {
  slug: 'dragon-and-daffodil',
  title: 'Dragon & Daffodil',
  tagline: 'YA Fantasy trilogy',
  description:
    'A YA fantasy trilogy about courage, the pursuit of truth, and the price and promise of integrity, in a realm where the fates of humans and dragons are entwined.',
  coverImage: '/Cover3.jpg',
  books: [
    {
      slug: 'the-beginning',
      order: 1,
      title: 'The Beginning',
      status: 'unpublished',
      statusLabel: 'Manuscript complete',
      description:
        'In a kingdom where the fates of humans and dragons coil tightly together, a young protagonist uncovers a secret capable of unmaking centuries of harmony. Their journey is shaped by hidden trials and the brave, integral choices that carve a path toward a deeper freedom.',
    },
    {
      slug: 'the-journey',
      order: 2,
      title: 'The Journey',
      status: 'planned',
      statusLabel: 'In progress',
      description: 'The characters face newfound challenges as the world expands.',
    },
    {
      slug: 'the-end',
      order: 3,
      title: 'The End',
      status: 'planned',
      statusLabel: 'Planned',
      description: 'The trilogy conclusion.',
    },
  ],
}

export const allSeries = [paintSeries, dragonDaffodilSeries]

export function findBook(slug) {
  for (const series of allSeries) {
    const book = series.books.find((b) => b.slug === slug)
    if (book) return { book, series }
  }
  return null
}
