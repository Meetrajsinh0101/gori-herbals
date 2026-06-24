export const products = [
  {
    id: '1',
    name: 'Organic Moringa Powder',
    subtitle: "Nature's superfood for vitality & nutrition",
    price: '299',
    originalPrice: '399',
    category: 'Wellness',
    rating: 4.8,
    reviews: 124,
    image: import.meta.env.BASE_URL + 'images/moringa-front.jpg',
    images: [
      import.meta.env.BASE_URL + 'images/moringa-front.jpg',
      import.meta.env.BASE_URL + 'images/moringa-back.jpg',
      import.meta.env.BASE_URL + 'images/moringa-usage.jpg',
    ],
    description: 'Gori Herbals Organic Moringa Powder is made from premium, carefully selected Moringa oleifera leaves, dried and finely milled to preserve their nutrients. It is a potent superfood rich in essential vitamins, minerals, and antioxidants, supporting overall vitality and immune health.',
    benefits: [
      'Digestive Health',
      'Soluble Fiber',
      'Regularity Support',
      'Natural Cleansing'
    ],
    ingredients: '100% Pure Organic Moringa Powder (Moringa oleifera)'
  },
  {
    id: '2',
    name: 'Triphala Herbal Complex',
    subtitle: 'Amla, Haritaki, Bibhitaki Blend',
    price: '349',
    originalPrice: '450',
    category: 'Wellness',
    rating: 4.7,
    reviews: 89,
    image: import.meta.env.BASE_URL + 'images/triphala-front.jpg',
    images: [
      import.meta.env.BASE_URL + 'images/triphala-front.jpg',
      import.meta.env.BASE_URL + 'images/triphala-multi.jpg',
    ],
    description: 'A traditional Ayurvedic formulation combining three potent fruits - Amla, Haritaki, and Bibhitaki. It helps in digestion, detoxifies the body, and supports overall wellness and rejuvenation.',
    benefits: [
      'Improves Digestion',
      'Natural Detox',
      'Boosts Immunity',
      'Tri-Fruit Formula'
    ],
    ingredients: 'Amla, Haritaki, Bibhitaki'
  },
  {
    id: '3',
    name: 'Ashwagandha Root Powder',
    subtitle: 'Natural stress relief & vitality booster',
    price: '499',
    originalPrice: '599',
    category: 'Wellness',
    rating: 4.9,
    reviews: 210,
    image: 'https://images.unsplash.com/photo-1611078810793-138676a086ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1611078810793-138676a086ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Ashwagandha is one of the most important herbs in Ayurveda. It is an adaptogen that helps the body manage stress. Our Ashwagandha Root Powder is organic and sustainably sourced.',
    benefits: [
      'Stress Relief',
      'Improves Sleep',
      'Boosts Energy',
      'Enhances Focus'
    ],
    ingredients: '100% Organic Ashwagandha Root Powder'
  },
  {
    id: '4',
    name: 'Turmeric Curcumin Extract',
    subtitle: 'Potent anti-inflammatory & antioxidant',
    price: '399',
    originalPrice: '499',
    category: 'Skin Care',
    rating: 4.6,
    reviews: 156,
    image: 'https://images.unsplash.com/photo-1615486511484-92e171171f11?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1615486511484-92e171171f11?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Turmeric with high curcumin content, known for its powerful anti-inflammatory and antioxidant properties. Great for skin glowing and immunity.',
    benefits: [
      'Skin Glowing',
      'Anti-inflammatory',
      'Antioxidant',
      'Immune Boost'
    ],
    ingredients: 'Organic Turmeric Root Powder'
  },
  {
    id: '5',
    name: 'Brahmi (Bacopa Monnieri) Powder',
    subtitle: 'Brain tonic for memory & focus',
    price: '299',
    originalPrice: '350',
    category: 'Wellness',
    rating: 4.5,
    reviews: 78,
    image: 'https://images.unsplash.com/photo-1596547609652-9cb5d8d737bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1596547609652-9cb5d8d737bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Brahmi is a classic Ayurvedic herb renowned for its cognitive-enhancing properties. It helps improve concentration, memory, and promotes a calm mind.',
    benefits: [
      'Memory Enhancer',
      'Improves Focus',
      'Reduces Anxiety',
      'Promotes Calmness'
    ],
    ingredients: '100% Pure Brahmi Leaf Powder'
  },
  {
    id: '6',
    name: 'Shilajit Resin',
    subtitle: 'Pure Himalayan vitality enhancer',
    price: '899',
    originalPrice: '1200',
    category: 'Wellness',
    rating: 4.9,
    reviews: 320,
    image: 'https://images.unsplash.com/photo-1587829741301-dc798bf1c9f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1587829741301-dc798bf1c9f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Sourced from the pristine heights of the Himalayas, Shilajit is rich in fulvic acid and trace minerals. It naturally boosts stamina, energy levels, and overall vitality.',
    benefits: [
      'Energy Booster',
      'Rich in Minerals',
      'Improves Stamina',
      'Anti-aging'
    ],
    ingredients: '100% Pure Himalayan Shilajit Resin'
  },
  {
    id: '7',
    name: 'Neem Leaf Powder',
    subtitle: 'Natural detoxifier & skin purifier',
    price: '199',
    originalPrice: '250',
    category: 'Skin Care',
    rating: 4.7,
    reviews: 95,
    image: 'https://images.unsplash.com/photo-1589182373814-10b2df76a26d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1589182373814-10b2df76a26d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Neem is a powerful purifying herb in Ayurveda. It helps cleanse the blood, supports clear and healthy skin, and maintains a healthy immune system.',
    benefits: [
      'Blood Purifier',
      'Skin Health',
      'Immunity Booster',
      'Natural Detox'
    ],
    ingredients: '100% Organic Neem Leaf Powder'
  },
  {
    id: '8',
    name: 'Amla Hair Care Powder',
    subtitle: 'Rich in Vitamin C for strong roots',
    price: '249',
    originalPrice: '300',
    category: 'Hair Care',
    rating: 4.8,
    reviews: 145,
    image: 'https://images.unsplash.com/photo-1608248593842-8021c647b19c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1608248593842-8021c647b19c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Amla powder stimulates hair growth and helps prevent premature greying. It naturally conditions the hair, leaving it smooth and shiny.',
    benefits: [
      'Hair Growth',
      'Prevents Greying',
      'Conditions Hair',
      'Strengthens Roots'
    ],
    ingredients: '100% Organic Amla Powder'
  },
  {
    id: '9',
    name: 'Bhringraj Hair Oil Blend',
    subtitle: 'Ayurvedic secret for thick, luscious hair',
    price: '399',
    originalPrice: '450',
    category: 'Hair Care',
    rating: 4.7,
    reviews: 202,
    image: 'https://images.unsplash.com/photo-1526947425960-945c6e72858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1526947425960-945c6e72858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Known as the "king of herbs" for hair, Bhringraj deeply nourishes the scalp and promotes hair thickness and vitality.',
    benefits: [
      'Scalp Nourishment',
      'Reduces Hair Fall',
      'Improves Thickness',
      'Cooling Effect'
    ],
    ingredients: 'Bhringraj, Coconut Oil, Sesame Oil'
  }
];
