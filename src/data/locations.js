// Where we work. Coordinates are real (geocoded via OpenStreetMap Nominatim)
// and are projected onto the map in KenyaMap.jsx — no hand-placed pins.
export const locations = [
  {
    name: 'Matiliku, Makueni County',
    county: 'Makueni',
    note: 'Agri services and utilities in active delivery.',
    status: 'in-service',
    lon: 37.5364,
    lat: -1.9482,
    // Label sits below the pin so it clears the Nairobi marker.
    labelDy: 5.2,
  },
  {
    name: 'Kigogoini, Nyeri County',
    county: 'Nyeri',
    note: 'Farm management and produce handling operations.',
    status: 'in-service',
    lon: 36.8837,
    lat: -0.458,
  },
  {
    name: 'Kiptangwanyi, Nakuru County',
    county: 'Nakuru',
    note: 'Site services and production support.',
    status: 'in-service',
    lon: 36.1167,
    lat: -0.5644,
  },
  {
    name: 'Galana (Kilifi / Tana River), Kano Plains (Kisumu), Trans Nzoia, Laikipia, Kibwezi (Makueni)',
    note: 'Regions where Terebra has identified potential production areas for agricultural development. Speak to us about siting your next programme.',
    status: 'under-assessment',
    // Plotted individually on the map from the list above.
    areas: [
      { name: 'Galana', lon: 39.2876, lat: -2.9758 },
      { name: 'Kano Plains', lon: 34.919, lat: -0.1725 },
      { name: 'Trans Nzoia', lon: 34.979, lat: 1.0455 },
      { name: 'Laikipia', lon: 36.8258, lat: 0.2858 },
      { name: 'Kibwezi', lon: 37.9655, lat: -2.4103 },
    ],
  },
]

/** The city marker that gives the map a familiar reference point. */
export const reference = { name: 'Nairobi', lon: 36.8173, lat: -1.289 }

export const locationStatusLabels = {
  'in-service': 'In service',
  'under-assessment': 'Under assessment',
}
