const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const trips = [
  // Africa
  {
    id: 1,
    name: "Safari Adventure",
    continent: "Africa",
    country: 'Zimbabwe',
    continent_id: 1,
    price: 1000,
    description: "An exhilarating safari experience in the heart of Africa.",
    about: "At Safari Adventures Worldwide, we’re passionate about creating unforgettable African safaris that are completely unique and customized for you, your family or group of friends. Our family has been immersed in safari planning and African Wildlife Conservation since 1962. We share our knowledge and expertise of the Africa we love, ensuring you get to enjoy Africa in comfort and style with absolute confidence and safety.",
    smallImageURL: "https://images.unsplash.com/photo-1619025005045-c91b0f7d879d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2FmYXJpJTIwYWR2ZW50dXJlc3xlbnwwfHwwfHx8MA%3D%3D",
    bigImageURL: "https://images.unsplash.com/photo-1619025005045-c91b0f7d879d?w=2070&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2FmYXJpJTIwYWR2ZW50dXJlc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 2,
    name: "Serengeti Expedition",
    continent: "Africa",
    country: 'Tanzania',
    continent_id: 1,
    price: 5000,
    description: "Explore the vast landscapes and wildlife of the Serengeti.",
    about: `The Serengeti is home to the iconic "Big Five" (lion, leopard, elephant, buffalo, and rhinoceros) and offers visitors an opportunity to witness these majestic creatures in their natural habitat amidst sweeping savannas, woodlands, and rivers. It's a haven for wildlife enthusiasts and photographers seeking unforgettable encounters with Africa's astounding biodiversity.`,
    smallImageURL: "https://images.unsplash.com/photo-1689174989585-3d8c5382abc1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8U2VyZW5nZXRpJTIwRXhwZWRpdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
    bigImageURL: "https://images.unsplash.com/photo-1689174989585-3d8c5382abc1?w=2070&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8U2VyZW5nZXRpJTIwRXhwZWRpdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 3,
    name: "Nile River Cruise",
    continent: "Africa",
    country: "Egypt",
    continent_id: 1,
    price: 3000,
    description: "Embark on a scenic cruise along the historic Nile River.",
    about: `A cruise along the Nile offers a unique journey through Egypt's rich history, passing by iconic landmarks such as the temples of Luxor and Karnak, the Valley of the Kings, and the majestic pyramids of Giza. Travelers can immerse themselves in the allure of ancient Egyptian civilization, exploring archaeological sites, experiencing local cultures, and witnessing breathtaking landscapes along the riverbanks. The cruise provides a fascinating blend of history, culture, and natural beauty, offering a memorable and educational adventure through the heart of Egypt's historical legacy.`,
    smallImageURL: "https://images.unsplash.com/photo-1620966528923-fd41bcde8bc4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TmlsZSUyMFJpdmVyJTIwQ3J1aXNlfGVufDB8fDB8fHww",
    bigImageURL: "https://images.unsplash.com/photo-1620966528923-fd41bcde8bc4?w=2070&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TmlsZSUyMFJpdmVyJTIwQ3J1aXNlfGVufDB8fDB8fHww",
  },
  {
    id: 4,
    name: "African Wilderness Trek",
    continent: "Africa",
    country: 'Namibia',
    continent_id: 1,
    price: 4000,
    description: "Trek through the untamed wilderness of Africa's heartland.",
    about: `The African Wilderness Trek invites adventurers to explore the untamed heartland of Africa, offering a thrilling journey through some of the continent's most remote and diverse landscapes. This expedition often involves immersive trekking experiences that could take place in various regions across Africa, such as the rugged terrains of national parks in Kenya, Tanzania, or Uganda, or even in more remote areas like the Okavango Delta in Botswana or the Namib Desert in Namibia.`,
    smallImageURL: "https://images.unsplash.com/photo-1597027269597-943ab36bab88?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fEFmcmljYW4lMjBXaWxkZXJuZXNzJTIwVHJla3xlbnwwfHwwfHx8MA%3D%3D",
    bigImageURL: 'https://images.unsplash.com/photo-1597027269597-943ab36bab88?w=2070&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fEFmcmljYW4lMjBXaWxkZXJuZXNzJTIwVHJla3xlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    id: 5,
    name: "Victoria Falls Discovery",
    continent: "Africa",
    country: 'Zimbabwe',
    continent_id: 1,
    price: 2000,
    description: "Witness the awe-inspiring beauty of Victoria Falls.",
    about: `The Victoria Falls Discovery is an opportunity to behold the breathtaking wonder of Victoria Falls, one of the most magnificent natural spectacles in Africa. Located on the border between Zambia and Zimbabwe, Victoria Falls is recognized as one of the largest and most awe-inspiring waterfalls in the world. The falls, locally known as "Mosi-oa-Tunya" (the Smoke that Thunders), cascade dramatically over a width of more than a kilometer, creating a thunderous roar and a mist that can be seen and felt from a distance. Visitors can experience the sheer power and beauty of the falls from various viewpoints, taking in the immense volumes of water plunging into the gorge below.`,
    smallImageURL: "https://images.unsplash.com/photo-1627597989502-3a4c8527d949?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8VmljdG9yaWElMjBGYWxscyUyMERpc2NvdmVyeXxlbnwwfHwwfHx8MA%3D%3D",
    bigImageURL: 'https://images.unsplash.com/photo-1627597989502-3a4c8527d949?w=2070&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8VmljdG9yaWElMjBGYWxscyUyMERpc2NvdmVyeXxlbnwwfHwwfHx8MA%3D%3D',

  },
  // Asia
  {
    id: 6,
    name: "Zen Garden Retreat",
    continent: "Asia",
    continent_id: 2,
    price: 4000,
    country:'Japan',
    description: "Relax and rejuvenate in tranquil Asian Zen gardens.",
    about: `The Zen Garden Retreat offers a serene escape into the tranquility of Asian Zen gardens, providing an oasis of peace and rejuvenation. Visitors to a Zen Garden Retreat can expect to immerse themselves in a peaceful environment characterized by carefully arranged rocks, raked gravel or sand, moss, and meticulously pruned trees and shrubs. The design principles aim to evoke a sense of calmness, simplicity, and contemplation.`,
    smallImageURL: "https://images.unsplash.com/photo-1461766705442-58d58276121a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8WmVuJTIwR2FyZGVuJTIwUmV0cmVhdHxlbnwwfHwwfHx8MA%3D%3D",
    bigImageURL: 'https://images.unsplash.com/photo-1461766705442-58d58276121a?w=2070&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8WmVuJTIwR2FyZGVuJTIwUmV0cmVhdHxlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    id: 7,
    name: "Asian Cultural Immersion",
    continent: "Asia",
    continent_id: 2,
    price: 1000,
    country: 'India',
    description: "Immerse yourself in the diverse cultures of Asia.",
    about: `The Asian Cultural Immersion experience invites participants to delve into the rich tapestry of cultures across the diverse continent of Asia. With its multitude of countries, each with its own unique traditions, languages, cuisines, and histories, Asia offers a kaleidoscope of cultural experiences. This immersion could involve traveling through various countries in Asia, engaging with local communities, experiencing traditional festivals, exploring historical sites and landmarks, trying authentic cuisines, and participating in cultural activities unique to each region.`,
    smallImageURL: "https://images.unsplash.com/photo-1622279486466-e0e3bfdd0a01?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QXNpYW4lMjBDdWx0dXJhbCUyMEltbWVyc2lvbnxlbnwwfHwwfHx8MA%3D%3D",
    bigImageURL: 'https://images.unsplash.com/photo-1622279486466-e0e3bfdd0a01?w=2070&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QXNpYW4lMjBDdWx0dXJhbCUyMEltbWVyc2lvbnxlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    id: 8,
    name: "Ancient Temples Discovery",
    continent: "Asia",
    country: 'Cambodia',
    continent_id: 2,
    price: 3000,
    description: "Discover ancient temples steeped in history and mystique.",
    about: `Embarking on a journey to explore ancient temples is an immersive adventure through time and culture, offering a glimpse into the magnificent architectural wonders and spiritual legacies of civilizations past. Prepare to be spellbound by the grandeur of the world's largest religious monument. Angkor Wat's intricate stone carvings, towering spires, and vast corridors stand as a testament to the Khmer Empire's glory.`,
    smallImageURL: "https://images.unsplash.com/photo-1517775040268-83cbbbd76cf0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8QW5jaWVudCUyMFRlbXBsZXMlMjBEaXNjb3Zlcnl8ZW58MHx8MHx8fDA%3D",
    bigImageURL: 'https://images.unsplash.com/photo-1517775040268-83cbbbd76cf0?w=2070&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8QW5jaWVudCUyMFRlbXBsZXMlMjBEaXNjb3Zlcnl8ZW58MHx8MHx8fDA%3D',
  },
  {
    id: 9,
    name: "Himalayan Adventure",
    continent: "Asia",
    country: 'India',
    continent_id: 2,
    price: 2000,
    description: "Embark on a thrilling adventure amidst the Himalayas.",
    about: `A Himalayan Adventure offers an unforgettable journey through the world's highest mountain range, promising breathtaking treks amidst snow-capped peaks, immersive cultural encounters, spiritual discoveries at ancient monasteries, and awe-inspiring vistas of Mount Everest and other legendary peaks. This expedition invites adventurers to embrace challenging trails, diverse landscapes, and the rich cultural tapestry of the Himalayas, creating an experience that blends adventure, spirituality, and natural beauty into an unforgettable adventure.`,
    smallImageURL: "https://images.unsplash.com/photo-1607602014822-8a126e0d3de4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8SGltYWxheWFuJTIwQWR2ZW50dXJlfGVufDB8fDB8fHww",
    bigImageURL: 'https://images.unsplash.com/photo-1607602014822-8a126e0d3de4?w=2070&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8SGltYWxheWFuJTIwQWR2ZW50dXJlfGVufDB8fDB8fHww',
  },
  {
    id: 10,
    name: "Tropical Paradise Escape",
    continent: "Asia",
    country: 'Hawaii',
    continent_id: 2,
    price: 5000,
    description: "Experience paradise in the stunning Asian tropics.",
    about: `A Tropical Paradise Escape beckons with its promise of sun-kissed beaches, crystalline waters, and lush landscapes. Whether it's the Maldives, Hawaii, the Caribbean, or Southeast Asia, these destinations offer a harmonious blend of relaxation and adventure amidst stunning natural beauty. Each country, from the Maldives' serene atolls to Hawaii's volcanic landscapes, holds its own unique paradise within its borders.`,
    smallImageURL: "https://images.unsplash.com/photo-1668487103999-2779c50c6c0c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VHJvcGljYWwlMjBQYXJhZGlzZSUyMEVzY2FwZXxlbnwwfHwwfHx8MA%3D%3D",
    bigImageURL: 'https://images.unsplash.com/photo-1668487103999-2779c50c6c0c?w=2070&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VHJvcGljYWwlMjBQYXJhZGlzZSUyMEVzY2FwZXxlbnwwfHwwfHx8MA%3D%3D',
  },
  // Europe
  {
    id: 11,
    name: "Romantic Paris Getaway",
    continent: "Europe",
    country: 'France',
    continent_id: 3,
    price: 1000,
    description:
      "Experience the romance and charm of Paris, the City of Lights.",
    about: `Indulge in a Romantic Paris Getaway, where love intertwines with art, culture, and timeless allure. Paris, the City of Lights, unveils iconic landmarks, world-renowned museums, and exquisite culinary delights. This romantic escapade unfolds amidst the charm of France, inviting couples to create cherished moments in a city steeped in history, elegance, and undeniable romance.`,
    smallImageURL: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Um9tYW50aWMlMjBQYXJpcyUyMEdldGF3YXl8ZW58MHx8MHx8fDA%3D",
    bigImageURL: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=2070&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Um9tYW50aWMlMjBQYXJpcyUyMEdldGF3YXl8ZW58MHx8MHx8fDA%3D',
  },
  {
    id: 12,
    name: "Historic Rome Tour",
    continent: "Europe",
    country: 'Italy',
    continent_id: 3,
    price: 5000,
    description: "Explore the ancient ruins and historic landmarks of Rome.",
    about: `Absolutely, Rome is a treasure trove of ancient history and modern charm. As the capital of Italy, it's a city where millennia of history come alive. You'll walk amidst the remnants of the mighty Roman Empire, exploring iconic landmarks like the Colosseum, the Roman Forum, and the Pantheon. Marvel at the architectural genius of the Vatican City, home to St. Peter's Basilica and the Sistine Chapel, adorned with Michelangelo's masterpieces. Wander through charming piazzas, sip on authentic Italian espresso, and savor delicious pasta dishes while taking in the vibrant atmosphere of this timeless city.`,
    smallImageURL: "https://images.unsplash.com/photo-1529154166925-574a0236a4f4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8SGlzdG9yaWMlMjBSb21lJTIwVG91cnxlbnwwfHwwfHx8MA%3D%3D",
    bigImageURL: 'https://images.unsplash.com/photo-1529154166925-574a0236a4f4?w=2070&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8SGlzdG9yaWMlMjBSb21lJTIwVG91cnxlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    id: 13,
    name: "Nordic Fjord Expedition",
    continent: "Europe",
    country: 'Norway',
    continent_id: 3,
    price: 8000,
    description:
      "Discover the breathtaking fjords and landscapes of the Nordic countries.",
    about: `Embark on an unforgettable Nordic Fjord Expedition, immersing yourself in the breathtaking natural beauty of Norway. Sail through deep, narrow fjords flanked by towering cliffs, their edges dusted with snow even in summer. Witness the majesty of cascading waterfalls plunging into crystal-clear waters below. Explore charming villages nestled along the coastline, where colorful houses stand against the dramatic backdrop of the fjords. Hike along scenic trails offering panoramic views of the surrounding landscapes or take a thrilling kayak adventure, gliding through serene waters surrounded by stunning vistas. Encounter diverse wildlife, from seabirds to seals, in their natural habitats. Experience the midnight sun or the elusive Northern Lights, adding a magical touch to this expedition through Norway's fjords.`,
    smallImageURL: "https://images.unsplash.com/photo-1473160330398-3aa3dbdf3117?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Tm9yZGljJTIwRmpvcmQlMjBFeHBlZGl0aW9ufGVufDB8fDB8fHww",
    bigImageURL: 'https://images.unsplash.com/photo-1473160330398-3aa3dbdf3117?w=2070&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Tm9yZGljJTIwRmpvcmQlMjBFeHBlZGl0aW9ufGVufDB8fDB8fHww',
  },
  {
    id: 14,
    name: "Greek Island Hopping",
    continent: "Europe",
    country: 'Greece',
    continent_id: 3,
    price: 3000,
    description:
      "Sail between the stunning islands of Greece, enjoying the sun and sea.",
    about: `Embark on an enchanting journey through the Greek Islands, where ancient history meets stunning landscapes and vibrant cultures. Start in Athens, soaking in the rich history of the Acropolis and the Parthenon before setting sail for the islands. Each island offers its own unique charm: Santorini captivates with its iconic whitewashed buildings and breathtaking sunsets over the caldera. Mykonos beckons with its cosmopolitan flair, bustling streets, and pristine beaches. Delve into the historical wonders of Crete, where the Minoan civilization once thrived, and explore the labyrinthine streets of Chania's Old Town.`,
    smallImageURL: "https://images.unsplash.com/photo-1674242927243-9508ffa04ce6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8R3JlZWslMjBJc2xhbmQlMjBIb3BwaW5nfGVufDB8fDB8fHww",
    bigImageURL: 'https://images.unsplash.com/photo-1674242927243-9508ffa04ce6?w=2070&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8R3JlZWslMjBJc2xhbmQlMjBIb3BwaW5nfGVufDB8fDB8fHww',
  },
  {
    id: 15,
    name: "Alpine Ski Adventure",
    continent: "Europe",
    country: 'Austria',
    continent_id: 3,
    price: 7000,
    description: "Enjoy thrilling ski experiences in the majestic Alps.",
    about: `Prepare for an exhilarating Alpine ski adventure, where snow-capped peaks and pristine slopes await in some of Europe's most renowned ski destinations. Whether you choose the Swiss Alps, the French Alps, or venture into Austria or Italy, each promises an unforgettable winter escapade. Experience the thrill of gliding down powdery slopes surrounded by breathtaking mountain scenery. From beginners to seasoned skiers, there are runs and trails suited for every skill level. Explore charming alpine villages nestled among snow-covered peaks, offering cozy chalets, delicious cuisine, and warm hospitality.`,
    smallImageURL: "https://images.unsplash.com/photo-1523287409476-a9e70a25af3f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QWxwaW5lJTIwU2tpJTIwQWR2ZW50dXJlfGVufDB8fDB8fHww",
    bigImageURL: 'https://images.unsplash.com/photo-1523287409476-a9e70a25af3f?w=2070&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QWxwaW5lJTIwU2tpJTIwQWR2ZW50dXJlfGVufDB8fDB8fHww',
  },

  // North America
  {
    id: 16,
    name: "New York City Explorer",
    continent: "North America",
    country: 'United States',
    continent_id: 4,
    price: 6000,
    description:
      "Discover the vibrant culture and iconic landmarks of New York City.",
    about: `Embark on an electrifying adventure in the bustling metropolis of New York City, a vibrant mosaic of culture, art, and iconic landmarks. Start by exploring the heart of Manhattan, where the towering skyscrapers of Times Square dazzle with bright lights and Broadway shows await. Visit the world-famous Central Park, an urban oasis offering a serene contrast to the city's hustle. Wander through museums like the Metropolitan Museum of Art, the MoMA, or the Guggenheim, showcasing a myriad of artistic masterpieces. Take in the awe-inspiring views from atop the Empire State Building or the Top of the Rock observation deck at Rockefeller Center.`,
    smallImageURL: "https://images.unsplash.com/photo-1687368438605-fdb81465b899?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8TmV3JTIwWW9yayUyMENpdHklMjBFeHBsb3JlcnxlbnwwfHwwfHx8MA%3D%3D",
    bigImageURL: 'https://images.unsplash.com/photo-1687368438605-fdb81465b899?w=2070&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8TmV3JTIwWW9yayUyMENpdHklMjBFeHBsb3JlcnxlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    id: 17,
    name: "Canadian Rockies Journey",
    continent: "North America",
    country: 'Cananda',
    continent_id: 4,
    price: 3000,
    description:
      "Explore the natural beauty of the Canadian Rockies and its wildlife.",
    about: `Embark on an awe-inspiring journey through the Canadian Rockies, a land of rugged wilderness, towering peaks, and pristine alpine beauty. Begin in Banff National Park, where turquoise lakes like Lake Louise and Moraine Lake reflect the grandeur of the surrounding mountains, inviting you to explore their tranquil shores. Travel the Icefields Parkway, considered one of the most scenic drives in the world, winding through jagged mountain passes, glaciers, and picturesque valleys. Marvel at the Columbia Icefield, where you can even step onto the Athabasca Glacier, a rare opportunity to walk on ancient ice.`,
    smallImageURL: "https://images.unsplash.com/photo-1697451735047-52198f30103d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fENhbmFkaWFuJTIwUm9ja2llcyUyMEpvdXJuZXl8ZW58MHx8MHx8fDA%3D",
    bigImageURL: 'https://images.unsplash.com/photo-1697451735047-52198f30103d?w=2070&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fENhbmFkaWFuJTIwUm9ja2llcyUyMEpvdXJuZXl8ZW58MHx8MHx8fDA%3D',
  },
  {
    id: 18,
    name: "Californian Road Trip",
    continent: "North America",
    country: 'United States',
    continent_id: 4,
    price: 2000,
    description: "Embark on a scenic road trip along the California coastline.",
    about: `Embark on an epic Californian road trip, a journey that winds through diverse landscapes, from stunning coastlines to iconic cities and natural wonders. Start in San Francisco, where the Golden Gate Bridge welcomes you to the city's vibrant energy and eclectic culture. Drive along the Pacific Coast Highway (Highway 1), hugging the rugged coastline with breathtaking views of the Pacific Ocean. Stop in charming towns like Monterey and Carmel-by-the-Sea, exploring the beauty of the Monterey Bay Aquarium or indulging in gourmet cuisine. Continue southward to Big Sur, where sheer cliffs meet the crashing waves, offering spectacular vistas and hiking opportunities. Marvel at the grandeur of Hearst Castle, a testament to opulence nestled in the hills.`,
    smallImageURL: "https://plus.unsplash.com/premium_photo-1681318976366-5525e2cb4b46?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Q2FsaWZvcm5pYW4lMjBSb2FkJTIwVHJpcHxlbnwwfHwwfHx8MA%3D%3D",
    bigImageURL: 'https://plus.unsplash.com/premium_photo-1681318976366-5525e2cb4b46?w=2070&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Q2FsaWZvcm5pYW4lMjBSb2FkJTIwVHJpcHxlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    id: 19,
    name: "Alaskan Wilderness Adventure",
    continent: "North America",
    country: 'United States',
    continent_id: 4,
    price: 4000,
    description: "Experience the rugged beauty and wildlife of Alaska.",
    about: `Embark on an unforgettable Alaskan wilderness adventure, where untamed landscapes and majestic wildlife await in one of the last frontiers of true wilderness. Begin your journey in Anchorage, a gateway to the wonders of Alaska, surrounded by stunning mountain ranges. Explore Denali National Park, home to North America's tallest peak, Mount Denali. Witness grizzly bears, moose, caribou, and other wildlife roaming in their natural habitat. Take a scenic flight over the park for awe-inspiring views of the rugged terrain and icy glaciers.`,
    smallImageURL: "https://images.unsplash.com/photo-1590053404184-ce4ee04f3d58?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QWxhc2thbiUyMFdpbGRlcm5lc3MlMjBBZHZlbnR1cmV8ZW58MHx8MHx8fDA%3D",
    bigImageURL: 'https://images.unsplash.com/photo-1590053404184-ce4ee04f3d58?w=2070&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QWxhc2thbiUyMFdpbGRlcm5lc3MlMjBBZHZlbnR1cmV8ZW58MHx8MHx8fDA%3D',
  },
  {
    id: 20,
    name: "Caribbean Cruise",
    continent: "North America",
    country: 'United States',
    continent_id: 4,
    price: 8000,
    description: "Sail through the tropical paradise of the Caribbean islands.",
    about: `Embark on a luxurious and relaxing Caribbean cruise, setting sail through the azure waters of the Caribbean Sea and exploring a tapestry of tropical paradises. Start your journey from vibrant ports such as Miami, Fort Lauderdale, or San Juan, Puerto Rico. Cruise through crystalline waters, stopping at various islands and destinations each with its unique allure. Visit the Bahamas, where you can bask in the sun on pristine beaches, swim with dolphins, or explore the vibrant markets and historic sites. Head to the Eastern Caribbean, where stops in islands like St. Thomas, St. Maarten, and Barbados offer opportunities for duty-free shopping, water sports, and cultural immersion. Discover the beauty of the Virgin Islands with their lush landscapes and turquoise bays.`,
    smallImageURL: "https://plus.unsplash.com/premium_photo-1663050763676-82ff02c5e02c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q2FyaWJiZWFuJTIwQ3J1aXNlfGVufDB8fDB8fHww",
    bigImageURL: 'https://plus.unsplash.com/premium_photo-1663050763676-82ff02c5e02c?w=2070&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q2FyaWJiZWFuJTIwQ3J1aXNlfGVufDB8fDB8fHww',
  },

  // South America
  {
    id: 21,
    name: "Amazon Rainforest Expedition",
    continent: "South America",
    country: 'Brazil',
    continent_id: 5,
    price: 1000,
    description: "Venture into the heart of the Amazon Rainforest.",
    about: `Embark on a mesmerizing expedition into the heart of the Amazon Rainforest, an unparalleled ecosystem teeming with biodiversity and natural wonders. Begin your adventure in gateway cities like Manaus, Brazil, or Iquitos, Peru, where the lush greenery of the rainforest awaits. Navigate the winding waterways of the Amazon River aboard a traditional riverboat, immersing yourself in the sights and sounds of the jungle. Explore remote tributaries and hidden lagoons, encountering diverse wildlife such as colorful macaws, playful river dolphins, and elusive jaguars.`,
    smallImageURL: "https://plus.unsplash.com/premium_photo-1673288455700-77c2708f1e46?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QW1hem9uJTIwUmFpbmZvcmVzdHxlbnwwfHwwfHx8MA%3D%3D",
    bigImageURL: 'https://plus.unsplash.com/premium_photo-1673288455700-77c2708f1e46?w=2070&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QW1hem9uJTIwUmFpbmZvcmVzdHxlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    id: 22,
    name: "Inca Trail to Machu Picchu",
    continent: "South America",
    country: 'Peru',
    continent_id: 5,
    price: 7000,
    description: "Hike the historic Inca Trail to the ancient city of Machu Picchu.",
    about: `Embark on an awe-inspiring journey along the legendary Inca Trail to the ancient citadel of Machu Picchu, a UNESCO World Heritage Site nestled high in the Andes Mountains of Peru. The trek begins in Cusco, the historic capital of the Inca Empire, where you'll acclimate to the altitude and prepare for the adventure ahead. The Inca Trail winds through breathtaking mountain scenery, traversing diverse landscapes from cloud forests to high-altitude passes. Along the way, you'll encounter ancient Incan ruins, such as the mesmerizing archaeological site of Wiñay Wayna, with its terraces and ceremonial structures.`,
    smallImageURL: "https://images.unsplash.com/photo-1531065208531-4036c0dba3ca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8SW5jYSUyMFRyYWlsJTIwdG8lMjBNYWNodSUyMFBpY2NodXxlbnwwfHwwfHx8MA%3D%3D",
    bigImageURL: 'https://images.unsplash.com/photo-1531065208531-4036c0dba3ca?w=2070&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8SW5jYSUyMFRyYWlsJTIwdG8lMjBNYWNodSUyMFBpY2NodXxlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    id: 23,
    name: "Rio de Janeiro Carnival",
    continent: "South America",
    country: 'Brazil',
    continent_id: 5,
    price: 5000,
    description: "Experience the vibrant and colorful Carnival in Rio de Janeiro.",
    about: `The Rio de Janeiro Carnival is an exuberant celebration that transforms the vibrant city of Rio into a pulsating carnival of music, dance, and colorful festivities. Held annually before Lent, it's one of the world's largest and most famous carnivals, attracting millions of visitors from around the globe. The carnival kicks off with electrifying samba parades featuring elaborate floats, extravagant costumes, and samba schools showcasing their incredible dance routines. These parades take place in the Sambadrome, where competing samba schools, each with its own theme, rhythm, and energy, vie for the title of champion.`,
    smallImageURL: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8UmlvJTIwZGUlMjBKYW5laXJvJTIwQ2Fybml2YWx8ZW58MHx8MHx8fDA%3D",
    bigImageURL: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=2070&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8UmlvJTIwZGUlMjBKYW5laXJvJTIwQ2Fybml2YWx8ZW58MHx8MHx8fDA%3D',
  },
  {
    id: 24,
    name: "Patagonia Trekking",
    continent: "South America",
    country: 'Chile',
    continent_id: 5,
    price: 3000,
    description: "Trek through the stunning landscapes of Patagonia.",
    about: `Embark on an epic adventure through the wild and untamed landscapes of Patagonia, a region of stunning natural beauty that spans both Chile and Argentina. Begin your journey in the picturesque towns of El Calafate or Puerto Natales, gateways to this remote and breathtaking wilderness. Discover the awe-inspiring beauty of Torres del Paine National Park in Chile or Los Glaciares National Park in Argentina. Trek along rugged trails that wind through towering peaks, azure lakes, and sprawling glaciers. Marvel at the iconic granite spires of Torres del Paine or the majestic Perito Moreno Glacier, a UNESCO World Heritage Site.`,
    smallImageURL: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8UGF0YWdvbmlhJTIwVHJla2tpbmd8ZW58MHx8MHx8fDA%3D",
    bigImageURL: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=2070&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8UGF0YWdvbmlhJTIwVHJla2tpbmd8ZW58MHx8MHx8fDA%3D',
  },
  {
    id: 25,
    name: "Galapagos Islands Adventure",
    continent: "South America",
    country: 'Ecuador',
    continent_id: 5,
    price: 8000,
    description: "Explore the unique wildlife and ecosystems of the Galapagos Islands.",
    about: `Embark on an extraordinary adventure to the Galapagos Islands, an archipelago that's a living museum of evolution and a haven for unique wildlife. Begin your journey in Ecuador, usually departing from Quito or Guayaquil, before flying to the Galapagos. Explore this volcanic archipelago aboard a cruise ship or through island-hopping tours, discovering its incredible biodiversity and endemic species. Encounter giant tortoises, marine iguanas, blue-footed boobies, and other fascinating creatures, many of which are found nowhere else on Earth. Snorkel or dive in crystal-clear waters alongside playful sea lions, sea turtles, and a dazzling array of colorful fish. Explore lava tunnels, pristine beaches, and volcanic landscapes that showcase the islands' geological marvels.`,
    smallImageURL: "https://images.unsplash.com/photo-1668805216753-89d2f2b5447c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEdhbGFwYWdvcyUyMElzbGFuZHMlMjBBZHZlbnR1cmV8ZW58MHx8MHx8fDA%3D",
    bigImageURL: 'https://images.unsplash.com/photo-1668805216753-89d2f2b5447c?w=2070&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEdhbGFwYWdvcyUyMElzbGFuZHMlMjBBZHZlbnR1cmV8ZW58MHx8MHx8fDA%3D',
  },
  // Australia
  {
    id: 26,
    name: "Great Barrier Reef Diving",
    continent: "Australia",
    country: 'Australia',
    continent_id: 6,
    price: 2000,
    description: "Dive in the Great Barrier Reef, a world-renowned marine paradise.",
    about: `Diving into the Great Barrier Reef is an unparalleled underwater adventure, offering a glimpse into one of the world's most diverse and vibrant ecosystems. Begin your journey in Cairns or Port Douglas, gateways to this natural wonder in northeastern Australia. Explore the kaleidoscope of marine life as you descend into crystal-clear waters. Encounter a dazzling array of colorful fish, majestic sea turtles, and graceful manta rays amid the intricate coral formations. Witness the breathtaking beauty of the reef, its vibrant colors and teeming biodiversity an awe-inspiring sight.`,
    smallImageURL: "https://images.unsplash.com/photo-1682687982134-2ac563b2228b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8R3JlYXQlMjBCYXJyaWVyJTIwUmVlZiUyMERpdmluZ3xlbnwwfHwwfHx8MA%3D%3D",
    bigImageURL: 'https://images.unsplash.com/photo-1682687982134-2ac563b2228b?w=2070&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8R3JlYXQlMjBCYXJyaWVyJTIwUmVlZiUyMERpdmluZ3xlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    id: 27,
    name: "Sydney Explorer",
    continent: "Australia",
    country: 'Australia',
    continent_id: 6,
    price: 7000,
    description: "Discover the landmarks and beaches of Sydney.",
    about: `Welcome to Sydney, a captivating city where modern urban landscapes meet iconic landmarks and natural beauty. Begin your exploration at the Sydney Opera House, an architectural marvel set against the stunning backdrop of Sydney Harbour. Take a guided tour to delve into its history and design. Stroll along the vibrant waterfront of Circular Quay, where ferries crisscross the harbor and street performers entertain passersby. Wander through the historic Rocks district, tracing the city's origins and discovering its charming cobblestone streets, galleries, and markets.`,
    smallImageURL: "https://images.unsplash.com/photo-1501159606039-efa80afc41f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8U3lkbmV5JTIwRXhwbG9yZXJ8ZW58MHx8MHx8fDA%3D",
    bigImageURL: 'https://images.unsplash.com/photo-1501159606039-efa80afc41f8?w=2070&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8U3lkbmV5JTIwRXhwbG9yZXJ8ZW58MHx8MHx8fDA%3D',
  },
  {
    id: 28,
    name: "Outback Wilderness Safari",
    continent: "Australia",
    country: 'Australia',
    continent_id: 6,
    price: 3000,
    description: "Experience the rugged beauty of the Australian Outback.",
    about: `Embark on a thrilling Outback Wilderness Safari, delving into the rugged and remote landscapes that define Australia's iconic outback. Begin your journey in Alice Springs, a central hub for outback adventures, or in Darwin if you're exploring the Top End. Venture into the Red Centre, where the iconic Uluru (Ayers Rock) rises from the desert, a sacred site for indigenous Australians. Witness the changing hues of Uluru at sunrise or sunset, an awe-inspiring sight against the vast desert backdrop. Explore Kata Tjuta (The Olgas), a series of ancient rock formations with hiking trails winding through stunning gorges and valleys. Learn about the cultural significance of these sacred sites to the Anangu people.`,
    smallImageURL: "https://images.unsplash.com/photo-1527073620320-77635188c627?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8T3V0YmFjayUyMFdpbGRlcm5lc3MlMjBTYWZhcml8ZW58MHx8MHx8fDA%3D",
    bigImageURL: 'https://images.unsplash.com/photo-1527073620320-77635188c627?w=2070&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8T3V0YmFjayUyMFdpbGRlcm5lc3MlMjBTYWZhcml8ZW58MHx8MHx8fDA%3D',
  },
  {
    id: 29,
    name: "Tasmanian Wilderness Adventure",
    continent: "Australia",
    country: 'Australia',
    continent_id: 6,
    price: 1000,
    description: "Explore the pristine wilderness of Tasmania.",
    about: `Embark on a mesmerizing Tasmanian Wilderness Adventure, exploring an untamed paradise of rugged landscapes, ancient forests, and diverse wildlife. Begin your journey in Hobart or Launceston, the gateways to Tasmania's pristine wilderness. Discover the UNESCO World Heritage-listed wilderness of Southwest National Park, where ancient rainforests, wild rivers, and towering peaks await. Take a hike along the Overland Track, one of Australia's most famous treks, winding through stunning landscapes, alpine plateaus, and pristine lakes. Explore the pristine shores of Freycinet National Park, home to Wineglass Bay with its crescent-shaped beach offering panoramic views of turquoise waters. Kayak along the coastline, discovering hidden coves and encountering marine life such as dolphins and seals.`,
    smallImageURL: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fFRhc21hbmlhbiUyMFdpbGRlcm5lc3MlMjBBZHZlbnR1cmV8ZW58MHx8MHx8fDA%3D",
    bigImageURL: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=2070&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fFRhc21hbmlhbiUyMFdpbGRlcm5lc3MlMjBBZHZlbnR1cmV8ZW58MHx8MHx8fDA%3D',
  },
  {
    id: 30,
    name: "Kangaroo Island Wildlife",
    continent: "Australia",
    country: 'Australia',
    continent_id: 6,
    price: 5000,
    description: "Get up close with the unique wildlife of Kangaroo Island.",
    about: `Kangaroo Island, off the coast of South Australia, is a wildlife paradise teeming with diverse and unique species. Begin your adventure by taking a short ferry or flight from Adelaide to this natural haven. Encounter iconic Australian wildlife in their natural habitats. Witness colonies of Australian sea lions basking on pristine beaches, offering an up-close look at these playful and inquisitive creatures. Visit Flinders Chase National Park, home to the Remarkable Rocks, astonishing granite formations sculpted by nature, and Admirals Arch, where fur seals frolic amid natural rock archways.`,
    smallImageURL: "https://images.unsplash.com/photo-1618131886834-146a58847008?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8S2FuZ2Fyb28lMjBJc2xhbmQlMjBXaWxkbGlmZXxlbnwwfHwwfHx8MA%3D%3D",
    bigImageURL: 'https://images.unsplash.com/photo-1618131886834-146a58847008?w=2070&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8S2FuZ2Fyb28lMjBJc2xhbmQlMjBXaWxkbGlmZXxlbnwwfHwwfHx8MA%3D%3D',
  },
  // Antarctica
  {
    id: 31,
    name: "Antarctic Expedition Cruise",
    continent: "Antarctica",
    country: 'Antarctica',
    continent_id: 7,
    price: 4000,
    description: "Embark on a once-in-a-lifetime cruise to the Antarctic Peninsula.",
    about: `Embark on an extraordinary Antarctic Expedition Cruise, setting sail to the frozen continent at the bottom of the world, a place of immense natural beauty and unparalleled wilderness. Depart from Ushuaia, Argentina, the southernmost city in the world, and cross the infamous Drake Passage. Navigate through icy waters aboard a purpose-built expedition vessel, surrounded by towering glaciers, icebergs, and stunning landscapes. Encounter incredible wildlife, including whales, seals, penguins, and seabirds, thriving in this extreme environment. Land on the Antarctic Peninsula, exploring a land of ice and snow, where towering peaks and vast ice shelves create a mesmerizing panorama. Venture ashore for guided walks among colonies of penguins, witnessing their comical antics and experiencing the sheer grandeur of the icy landscape.`,
    smallImageURL: "https://images.unsplash.com/photo-1511316695145-4992006ffddb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8QW50YXJjdGljJTIwRXhwZWRpdGlvbiUyMENydWlzZXxlbnwwfHwwfHx8MA%3D%3D",
    bigImageURL: 'https://images.unsplash.com/photo-1511316695145-4992006ffddb?w=2070&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8QW50YXJjdGljJTIwRXhwZWRpdGlvbiUyMENydWlzZXxlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    id: 32,
    name: "South Pole Adventure",
    continent: "Antarctica",
    country: 'Antarctica',
    continent_id: 7,
    price: 8000,
    description: "Experience the extreme environment of the South Pole.",
    about: `A journey to the South Pole is an unparalleled adventure to the most remote and extreme place on Earth. Begin your expedition by flying from Punta Arenas, Chile, to the Union Glacier Camp in Antarctica, where many South Pole expeditions commence. From there, embark on an epic trek across the vast Antarctic wilderness. Traverse icy plains, navigate through crevasse fields, and endure challenging weather conditions in an unforgiving environment. The journey typically involves a multi-day ski traverse or an awe-inspiring flight to the South Pole itself. Experience the mesmerizing, vast expanse of the polar plateau, surrounded by unending white horizons.`,
    smallImageURL: "https://images.unsplash.com/photo-1561479731-662ffdb1c640?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8U291dGglMjBQb2xlJTIwQWR2ZW50dXJlfGVufDB8fDB8fHww",
    bigImageURL: 'https://images.unsplash.com/photo-1561479731-662ffdb1c640?w=2070&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8U291dGglMjBQb2xlJTIwQWR2ZW50dXJlfGVufDB8fDB8fHww',
  },
  {
    id: 33,
    name: "Penguin Colony Visit",
    continent: "Antarctica",
    country: 'Antarctica',
    continent_id: 7,
    price: 6000,
    description: "Visit remote penguin colonies in their natural habitat.",
    about: `Visiting a penguin colony offers a chance to see these charming creatures in their natural habitat. Explore colonies in places like Antarctica, Falkland Islands, South Georgia Island, New Zealand, and Australia. Respect guidelines, maintain distance, and enjoy observing their behaviors while appreciating conservation efforts for their protection.`,
    smallImageURL: "https://images.unsplash.com/photo-1551415923-a2297c7fda79?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8UGVuZ3VpbiUyMENvbG9ueSUyMFZpc2l0fGVufDB8fDB8fHww",
    bigImageURL: 'https://images.unsplash.com/photo-1551415923-a2297c7fda79?w=2070&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8UGVuZ3VpbiUyMENvbG9ueSUyMFZpc2l0fGVufDB8fDB8fHww',
  },
];

const continents = [
  {
    id: 1,
    name: "Africa",
    description:
      "Known for its vast and diverse landscapes, Africa is home to numerous cultures, languages, and wildlife. Notable features include the Sahara Desert, the Nile River, and a wealth of biodiversity.",
    displayImage:
      "https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YWZyaWNhfGVufDB8fDB8fHww",
    coverImage:
      "https://images.unsplash.com/photo-1484318571209-661cf29a69c3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    adventureIntros: "Embark on an African escapade like never before!",
  },
  {
    id: 2,
    name: "Asia",
    description:
      "The largest continent, Asia is known for its rich history, diverse cultures, and rapid modernization. It includes ancient civilizations, bustling cities, and varied landscapes.",
    displayImage:
      "https://images.unsplash.com/photo-1464817739973-0128fe77aaa1?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    coverImage:
      "https://images.unsplash.com/photo-1585631474537-46643eea8df2?w=2070&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njd8fEFzaWF8ZW58MHx8MHx8fDA%3D",
    adventureIntros:
      "Ready to explore the wonders of the world's largest continent?",
  },
  {
    id: 3,
    name: "Europe",
    description:
      "Europe is renowned for its historical significance and cultural diversity, home to many famous landmarks including the Eiffel Tower, the Colosseum, and numerous medieval castles.",
    displayImage:
      "https://images.unsplash.com/photo-1485081669829-bacb8c7bb1f3?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    coverImage:
      "https://images.unsplash.com/photo-1473951574080-01fe45ec8643?q=80&w=1808&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    adventureIntros: "Discover the charm of Europe's timeless treasures",
  },
  {
    id: 4,
    name: "North America",
    description:
      "Featuring diverse landscapes and cultural influences, North America includes bustling cities, the Grand Canyon, Niagara Falls, and more.",
    displayImage:
      "https://images.unsplash.com/photo-1603015245012-68988952fc73?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bm9ydGglMjBhbWVyaWNhfGVufDB8fDB8fHww",
    coverImage:
      "https://images.unsplash.com/photo-1575552286163-7ca796f555a9?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    adventureIntros:
      "Venture into the heart of North America's diverse landscapes!",
  },
  {
    id: 5,
    name: "South America",
    description:
      "Celebrated for its vibrant cultures, tropical rainforests, and ancient ruins, South America is home to the Amazon Rainforest, the Andes Mountains, and historical sites like Machu Picchu.",
    displayImage:
      "https://images.unsplash.com/photo-1580619305218-8423a7ef79b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8U291dGglMjBBbWVyaWNhfGVufDB8fDB8fHww",
    coverImage: "",
    adventureIntros:
      "Get ready for a South American odyssey of culture and nature!",
  },
  {
    id: 6,
    name: "Australia",
    description:
      "Known for its unique wildlife and natural wonders, Australia and Oceania comprise diverse islands and the vast Australian Outback, with attractions like the Great Barrier Reef and Ayers Rock.",
    displayImage:
      "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    coverImage:
      "https://images.unsplash.com/photo-1579288626050-a94bd5178925?w=2070&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTcxfHxzb3V0aCUyMGFtZXJpY2F8ZW58MHx8MHx8fDA%3D",
    adventureIntros:
      "Explore Australia's unique landscapes and vibrant wildlife!",
  },
  {
    id: 7,
    name: "Antarctica",
    description:
      "The most remote and least populated continent, Antarctica is a land of extremes, known for its vast ice sheets and unique wildlife like penguins.",
    displayImage:
      "https://images.unsplash.com/photo-1493328967571-819121ed5085?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8QW50YXJjdGljYXxlbnwwfHwwfHx8MA%3D%3D",
    coverImage:
      "https://images.unsplash.com/photo-1687904536125-29aebeee69c8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fEFudGFydGljYXxlbnwwfHwwfHx8MA%3D%3D",
    adventureIntros:
      "Unleash your adventurous spirit in the remote wonders of Antarctica!",
  },
];

app.get('/api/continents', (req, res) => {
  const { name } = req.query;
  if (!name) {
    return res.json(continents);
  }
  const regex = new RegExp(name, 'i');
  const searchResults = continents.filter(country =>
    regex.test(country.name)
  );
  res.json(searchResults);
});

app.get("/api/continents/:id", (req, res) => {
  const { name } = req.query;
  let data;
  const continent = continents.find((t) => t.id === parseInt(req.params.id));
  if (!continent) res.status(404).send("Continent not found");
  const continent_trips = trips.filter(trip => trip.continent_id === continent.id) 
  data = {
    continent,
    trips: continent_trips
  }
  if (!name) {
    res.json(data);
  }
  const regex = new RegExp(name, 'i');
  const searchResults = continent_trips.filter(trip =>
    regex.test(trip.name) || regex.test(trip.country)
  );
  data = {
    continent,
    trips: searchResults
  }
  res.json(data);
  
});

app.get("/api/continents/:countryid/trips/:tripid", (req, res) => {
  const continent = continents.find((t) => t.id === parseInt(req.params.countryid));
  if (!continent) res.status(404).send("Continent not found");
  const continent_trips = trips.filter(trip => trip.continent_id === continent.id) 
  const trip_details = continent_trips.filter(trip => trip.id === parseInt(req.params.tripid))
  const data = {
    ...trip_details[0]
  }
  res.json(data);
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
