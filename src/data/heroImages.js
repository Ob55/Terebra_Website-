// Photographs that cycle behind the hero.
//
// PLACEHOLDERS: these are openly-licensed Kenyan agriculture photographs,
// standing in until Terebra supplies its own site photography. To swap one,
// drop `<slug>-1600.webp` and `<slug>-800.webp` into `public/hero/`, update the
// entry below, and remove its credit. Credits are listed on /credits and in
// public/hero/CREDITS.txt — the CC-BY licences require attribution while these
// images are in use.

export const heroImages = [
  {
    slug: 'tea-rows',
    alt: 'Tea rows running over a hillside under an open sky in Kenya',
    credit: {
      title: "Tea Farm in Kenya.jpg",
      artist: "SeanTwice",
      license: "CC0",
      licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/deed.en",
      source: "https://commons.wikimedia.org/wiki/File:Tea_Farm_in_Kenya.jpg",
    },
  },
  {
    slug: 'maize-beans',
    alt: 'Maize intercropped with beans in neat rows on a Kenyan smallholding',
    credit: {
      title: "School farm, Beans and Maize (6908799835).jpg",
      artist: "SuSanA Secretariat",
      license: "CC BY 2.0",
      licenseUrl: "https://creativecommons.org/licenses/by/2.0",
      source: "https://commons.wikimedia.org/wiki/File:School_farm,_Beans_and_Maize_(6908799835).jpg",
    },
  },
  {
    slug: 'tea-landscape',
    alt: 'A wide tea plantation edged with trees in Kiambu County',
    credit: {
      title: "Tea plantation landscape in Cianda, Kiambu County 01.jpg",
      artist: "Lebu Ayiga",
      license: "CC BY 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by/4.0",
      source: "https://commons.wikimedia.org/wiki/File:Tea_plantation_landscape_in_Cianda,_Kiambu_County_01.jpg",
    },
  },
  {
    slug: 'intercrop',
    alt: 'Young maize planted between banana stands on red soil',
    credit: {
      title: "Small-cropping-kenya (52428136678).jpg",
      artist: "USDAgov",
      license: "Public domain",
      licenseUrl: "",
      source: "https://commons.wikimedia.org/wiki/File:Small-cropping-kenya_(52428136678).jpg",
    },
  },
]

/** srcset/sizes for a hero photograph, which always spans the viewport. */
export function heroSrcSet(slug) {
  return {
    src: `/hero/${slug}-1600.webp`,
    srcSet: `/hero/${slug}-800.webp 800w, /hero/${slug}-1600.webp 1600w`,
    sizes: '100vw',
  }
}
