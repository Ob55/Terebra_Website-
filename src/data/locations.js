// Where we work — county list + map points (matches the mockup).
// `x`/`y` are percentage coordinates inside the KenyaMap SVG viewBox.
export const locations = [
  {
    name: 'Matiliku, Makueni County',
    note: 'Agri services and utilities in active delivery.',
    status: 'in-service',
    x: 55,
    y: 62,
  },
  {
    name: 'Kigogoini, Nyeri County',
    note: 'Farm management and produce handling operations.',
    status: 'in-service',
    x: 52,
    y: 47,
  },
  {
    name: 'Kiptangwanyi, Nakuru County',
    note: 'Site services and production support.',
    status: 'in-service',
    x: 44,
    y: 45,
  },
  {
    name: 'Galana (Kilifi / Tana River), Kano Plains (Kisumu), Trans Nzoia, Laikipia, Kibwezi (Makueni)',
    note: 'Regions where Terebra has identified potential production areas for agricultural development. Speak to us about siting your next programme.',
    status: 'under-assessment',
    x: 62,
    y: 55,
  },
]

export const locationStatusLabels = {
  'in-service': 'In service',
  'under-assessment': 'Under assessment',
}
