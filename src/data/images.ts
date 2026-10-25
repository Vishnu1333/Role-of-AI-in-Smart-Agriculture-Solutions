// ============================================================
// FIELDWISE AI — Image references
// Sources: Unsplash (free to use, unsplash.com/license)
//          Pexels (free to use, pexels.com/license)
// All images are loaded remotely. Fallback colours provided.
// ============================================================

export interface ImageRef {
  id: string;
  url: string;
  alt: string;
  credit: string;
  creditUrl: string;
  fallbackColor: string;
}

export const images: Record<string, ImageRef> = {
  hero: {
    id: 'hero',
    url: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1600&q=80',
    alt: 'Aerial view of precision agriculture crop fields with tractor tracks',
    credit: 'Roman Synkevych on Unsplash',
    creditUrl: 'https://unsplash.com/@synkevych',
    fallbackColor: '#1a1040',
  },
  cropField: {
    id: 'cropField',
    url: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=900&q=80',
    alt: 'Golden wheat crop field at sunset representing crop yield prediction',
    credit: 'Federico Respini on Unsplash',
    creditUrl: 'https://unsplash.com/@federicorespini',
    fallbackColor: '#3d2c0a',
  },
  drone: {
    id: 'drone',
    url: 'https://images.unsplash.com/photo-1508614999368-9260051292e5?w=900&q=80',
    alt: 'Agricultural drone flying over farmland for crop monitoring and spraying',
    credit: 'Pexels',
    creditUrl: 'https://www.pexels.com',
    fallbackColor: '#0a1a2e',
  },
  disease: {
    id: 'disease',
    url: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=900&q=80',
    alt: 'Close-up of plant leaves showing disease symptoms for AI detection',
    credit: 'Markus Spiske on Unsplash',
    creditUrl: 'https://unsplash.com/@markusspiske',
    fallbackColor: '#0f2310',
  },
  soilSensor: {
    id: 'soilSensor',
    url: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=900&q=80',
    alt: 'Soil moisture sensor installed in agricultural field for smart irrigation',
    credit: 'Jed Owen on Unsplash',
    creditUrl: 'https://unsplash.com/@jed_owen',
    fallbackColor: '#1a0f00',
  },
  livestock: {
    id: 'livestock',
    url: 'https://images.unsplash.com/photo-1596733430284-f7437764b1a9?w=900&q=80',
    alt: 'Dairy cattle in a modern farm equipped with health monitoring technology',
    credit: 'Pexels',
    creditUrl: 'https://www.pexels.com',
    fallbackColor: '#1a1200',
  },
  robotics: {
    id: 'robotics',
    url: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=900&q=80',
    alt: 'Agricultural robot harvesting crops in an automated farming operation',
    credit: 'Owen Beard on Unsplash',
    creditUrl: 'https://unsplash.com/@owenbeard',
    fallbackColor: '#0a0a1a',
  },
  satellite: {
    id: 'satellite',
    url: 'https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=900&q=80',
    alt: 'Satellite imagery of agricultural land showing NDVI vegetation patterns',
    credit: 'NASA on Unsplash',
    creditUrl: 'https://unsplash.com/@nasa',
    fallbackColor: '#00051a',
  },
  dashboard: {
    id: 'dashboard',
    url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80',
    alt: 'Digital agricultural dashboard showing farm data analytics and visualisations',
    credit: 'Luke Chesser on Unsplash',
    creditUrl: 'https://unsplash.com/@lukechesser',
    fallbackColor: '#050a18',
  },
};
