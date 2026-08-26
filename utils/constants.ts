/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Category, NewsItem } from './types';

export const CATEGORIES: Category[] = [
  'Home',
  'Spiritual',
  'Ethiopia',
  'Multimedia',
  'Podcast',
  'Social',
  'Arts'
];

export const MOCK_NEWS: NewsItem[] = [
  {
    id: '1',
    title: 'Meskel Celebration in Addis Ababa: A Tapestry of Faith and Heritage',
    excerpt: 'Thousands gathered at Meskel Square to witness the Demera bonfire, a tradition spanning centuries that continues to inspire millions across the Ethiopian diaspora.',
    category: 'Spiritual',
    date: '2026-05-06',
    imageUrl: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=80',
    author: 'Abebe Kebede',
    content: 'The Demera celebration in Addis Ababa brought together over 200,000 faithful, religious scholars, and dignitaries at Meskel Square. Patriarchs delivered messages emphasizing unity, peaceful coexistence, and community stewardship.',
    isBreaking: true
  },
  {
    id: '2',
    title: 'Lalibela Resilience: Restoring the Sacred Rock-Hewn Monolithic Churches',
    excerpt: 'Comprehensive conservation efforts are underway with UNESCO and local craftsmen to preserve the structural integrity of Biete Giyorgis and Biete Medhani Alem.',
    category: 'Ethiopia',
    date: '2026-05-05',
    imageUrl: 'https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?auto=format&fit=crop&w=800&q=80',
    author: 'Selam Tesfaye',
    content: 'The restoration initiative deploys non-invasive laser scanning, drainage rehabilitation, and traditional stone masonry techniques passed down through generations of Lalibela artisans.'
  },
  {
    id: '3',
    title: 'Inter-Faith Youth Peace Accord Signed in Hawassa',
    excerpt: 'Leaders from the Inter-Religious Council of Ethiopia and youth representatives celebrate the conclusion of the 2026 National Unity & Reconciliation Forum.',
    category: 'Social',
    date: '2026-05-04',
    imageUrl: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80',
    author: 'Zeleke Mamo',
    content: 'Over 400 youth ambassadors agreed on joint community welfare projects, tree planting initiatives, and cross-cultural dialogue programs across 12 regional states.'
  },
  {
    id: '4',
    title: 'New Podcast Series: Ancient Ge\'ez Manuscripts and Digital Preservation',
    excerpt: 'Explore the journey of digitizing rare 14th-century illuminated manuscripts preserved in remote Lake Tana island monasteries.',
    category: 'Podcast',
    date: '2026-05-03',
    imageUrl: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=800&q=80',
    author: 'Hanna Goshu',
    content: 'Archivist Kes Dr. Tewodros explains the high-resolution digital scanning process that makes ancient spiritual literature accessible to scholars globally.'
  },
  {
    id: '5',
    title: 'Multimedia Highlights: Gonder\'s Timket Epiphany & Fasilides Baths',
    excerpt: 'A visual celebration of the sacred water blessings, ceremonial umbrellas, and choral hymns that define Epiphany in Ethiopia\'s historical capital.',
    category: 'Multimedia',
    date: '2026-05-02',
    imageUrl: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80',
    author: 'Zema Staff',
    content: 'Experience high-definition panoramic photography and audio recordings of liturgical chants performed by Saint Yared choir ensembles.'
  },
  {
    id: '6',
    title: 'St. Yared Hymnology Conservatory Announces Annual Scholar Grants',
    excerpt: 'Fellowships offered for researchers documenting the distinct Digua and Zema notation systems of Ethiopian classical sacred music.',
    category: 'Arts',
    date: '2026-05-01',
    imageUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80',
    author: 'Mahlet Alemu',
    content: 'The conservatory offers ten fully funded research residencies for composers, musicologists, and heritage specialists.'
  }
];

export const PODCAST_EPISODES = [
  {
    id: 'p1',
    title: 'Episode 42: The Wisdom of Abba Garima Gospels',
    duration: '38:15',
    speaker: 'Dr. Berhanu Gebre',
    listeners: '14.2k',
    date: 'May 04, 2026',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'
  },
  {
    id: 'p2',
    title: 'Episode 41: Fasting, Mindfulness & Contemporary Living',
    duration: '45:20',
    speaker: 'Sister Martha Wolde',
    listeners: '21.8k',
    date: 'Apr 28, 2026',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3'
  },
  {
    id: 'p3',
    title: 'Episode 40: Sacred Architecture of the Debre Damo Cliff Monastery',
    duration: '52:10',
    speaker: 'Arch. Dawit Yohannes',
    listeners: '18.5k',
    date: 'Apr 21, 2026',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3'
  }
];

export const ANNOUNCEMENTS = [
  {
    id: 'a1',
    title: 'Holy Synod Annual Spring Assembly & Pastoral Guidelines',
    date: 'May 12, 2026',
    tag: 'Official Synod',
    urgent: true
  },
  {
    id: 'a2',
    title: 'National Faith-Based Charity Medical Mission in Wolaita',
    date: 'May 18, 2026',
    tag: 'Humanitarian',
    urgent: false
  },
  {
    id: 'a3',
    title: 'Trinity Theological College 2026/2027 Admissions Open',
    date: 'June 01, 2026',
    tag: 'Education',
    urgent: false
  }
];

export const PEACE_STORIES = [
  {
    id: 'peace-1',
    title: 'The Inter-Religious Council of Ethiopia: Building Bridges of Harmony',
    description: 'Joint peace dialogues, inter-faith humanitarian caravans, and conflict mitigation training spanning all regional states.',
    impact: '120+ Communities Reached'
  },
  {
    id: 'peace-2',
    title: 'Youth Ambassadors for Compassion & Shared Values',
    description: 'Equipping the next generation with non-violent communication, cultural literacy, and joint social action initiatives.',
    impact: '4,500 Youth Certified'
  }
];

export const LOCATION_INFO = {
  name: 'Zema Spiritual Media Headquarters & Studios',
  address: 'Kazanchis, Guinea Conakry Street, Addis Ababa, Ethiopia',
  landmark: 'Behind UNECA Conference Center, Next to InterLuxury Plaza',
  coordinates: {
    lat: 9.0177,
    lng: 38.7668
  },
  phone: '+251 11 551 7070 / +251 91 123 4567',
  email: 'info@zemamedia.org',
  broadcastEmail: 'live@zemamedia.org',
  officeHours: 'Monday – Saturday: 8:00 AM – 6:30 PM (EAT)',
  studioHours: '24/7 Broadcast Operations',
  googleMapsUrl: 'https://maps.google.com/?q=9.0177,38.7668',
  embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.5485973977235!2d38.764611!3d9.017700!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85cef049c693%3A0x629571f3793eb128!2sKazanchis%2C%20Addis%20Ababa!5e0!3m2!1sen!2set!4v1700000000000!5m2!1sen!2set'
};
