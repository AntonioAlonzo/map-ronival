const markers = [
  {
    name: "Laiva",
    lat: 23.061425415818608,
    lng: -109.69591993777205,
    logo: "https://www.findmexicohouses.com/files/2023/10/logo-removebg-preview-c6a5e00bb05d84653aa523c885bad38e55a53dab.png",
    description:
      "LAIVA Art Walk in vibrant downtown San Jose del Cabo, is a sanctuary that elevates modern comfort with cultural richness. The thoughtfully designed apartments are more than homes; they are your personal retreats with panoramic views of the city. Located in sunny Baja California Sur, enjoy a variety of outdoor activities, from water sports to golf to whale watching. LAIVA Art Walk is an extraordinary living experience that combines the luxury and cultural richness of the area. With state of the Art amenities just an elevator ride away, invest in a lifestyle full of glamour and sophistication. At LAIVA Art Walk, your exceptional new life is ready to begin.",
    gallery: [
      "https://www.findmexicohouses.com/files/2023/12/laiva-art_FACH-01-adjusted-b37de9584a575e9bf6afd5ad1e252b897291397c.webp",
      "https://www.findmexicohouses.com/files/2023/12/laiva-art_FACH-02-adjusted-84f2fbe1d59cc653b3906e302c0df5a255064d0b.webp",
      "https://www.findmexicohouses.com/files/2023/12/laiva-art_PISC-01-adjusted-cd6b0f5b2bdededea2a489e942d57477b8481d77.webp",
      "https://www.findmexicohouses.com/files/2023/12/laiva-art_CONJUNTO-02-adjusted-03a7164910812bfd4c20b7f658b1ecea40ca3a91-scaled.webp",
    ],
  },
  {
    name: "Oceana",
    lat: 22.921559894586164,
    lng: -109.88846614837406,
    logo: "https://www.findmexicohouses.com/files/2023/09/11OCENA_LOGO_FINAL_NOVIEMBRE_Mesa-de-trabajo-1-copia1-ce8cdf78b8a62fa5f3cdd29bc80ba1489bf63e86.png",
    description:
      "Oceana at Cabo San Lucas, a unique blend of comfort and luxury in a five-tower oceanfront complex and Cabo's iconic arch. Setting new standards in wellness, each three-bedroom, 3.5-bathroom residence features a modern kitchen, terraces with ocean views and high-end appliances for an elevated lifestyle. In addition to a private spa, the development offers a variety of amenities, including a swimming pool, fitness center, children's room and tennis court, to meet the needs of every member of the family. Join the Oceana community and elevate your life today.",
    gallery: [
      "https://www.findmexicohouses.com/files/2023/12/oceana_OCEANA_18-adjusted-b34ffff5d4cfb13017308dbad7ac4cf4e9e9627f-scaled.webp",
      "https://www.findmexicohouses.com/files/2023/12/oceana_OCEANA_12-adjusted-d610c8b943d3da6e0adf7a2d86e45a3a87be554c-scaled.webp",
      "https://www.findmexicohouses.com/files/2023/12/oceana_OCEANA_13-adjusted-c1f38145a69dccade9c14902f0c7cdcb6014c215-scaled.webp",

      "https://www.findmexicohouses.com/files/2023/12/oceana_OCEANA_LOBBY-adjusted-cc8d2f24450795e5ecac789bbe72c8cc1cb0e46f-scaled.webp",
    ],
  },
  {
    name: "Costa Palmas",
    lat: 23.629383548321545,
    lng: -109.59056249405741,
    logo: "https://www.findmexicohouses.com/files/2023/09/costa-palmas-removebg-preview-cc1305e25a514589e14affd7a0d86da764c7f927.png",
    description:
      "Costa Palmas, a 1,500-acre paradise on Baja's scenic East Cape, where the Sea of Cortez is your backyard. More than a blissful destination, it's a lifestyle-complete with a private marina, a walking village and a golf course ready to dominate. This unique location offers not only world-class Four Seasons Resort and Residences, but also the exclusive Casa Blake. Being an owner here grants access to unparalleled amenities and services, setting a new standard of luxury for this unique and untamed part of Baja California. Casa Blake, located in Marina Village, defines casual glamour with its inspired design and sophistication. Be part of a community that thrives on discovery, whether it's active mornings at the Costa Palmas Beach & Yacht Club, afternoons exploring the Sea of Cortez or evenings of seaside fire-side ambience. For those ready to embrace the extraordinary, Costa Palmas offers a lifetime of elemental luxury and lively adventure on a tranquil, swimmable coastline. Make Costa Palmas more than just a visit; make it your home.",
    gallery: [
      "https://boomtown-production-consumer-backup.s3.amazonaws.com/4780/files/2023/09/6.-The-Costa-Palmas-Beach-Bar-is-in-your-backyard-and-the-perfect-gathering-place-adjusted-93d46b35594c606360b67109782db338f5e0664a-1024x581.webp",
      "https://boomtown-production-consumer-backup.s3.amazonaws.com/4780/files/2023/09/10.-Live-in-the-heart-of-the-first-luxury-Marina-in-Baja-Four-Seasons-Residences-adjusted-847eddfe952be2fe6984d1154f0b6cc154b89a98-1024x621.webp",
      "https://boomtown-production-consumer-backup.s3.amazonaws.com/4780/files/2023/09/11.-Casa-Blake-Endless-views-of-the-marina-and-Sea-of-Cortez-adjusted-88bc201a52f3b63e126a6838604af86230e66e5a-1024x683.webp",
      "https://boomtown-production-consumer-backup.s3.amazonaws.com/4780/files/2023/09/8.-Views-of-the-Sea-of-Cortes-and-the-Sierra-de-la-Laguna-Mountains-adjusted-2f8c95dc2ea777a71403ad83d12821f4a4deaee2-1024x683.webp",
      "https://boomtown-production-consumer-backup.s3.amazonaws.com/4780/files/2023/09/5.-Where-the-mountains-and-desert-meet-the-sea-the-stunning-location-of-Costa-Palmas-adjusted-1497b51d4212eca707644cc5bc343ac4ff65a708-1024x512.webp",
      "https://boomtown-production-consumer-backup.s3.amazonaws.com/4780/files/2023/09/7.-Residences-and-Villas-along-two-miles-of-calm-pristine-beach-adjusted-a923d70924d851333557174eb1979c5950bbe1cc-1024x683.webp",
      "https://boomtown-production-consumer-backup.s3.amazonaws.com/4780/files/2023/09/Casa-Blake-Residences-2BD-adjusted-79cb7a81b9df824607a27e1a2d90178c4600c8a2-1024x640.webp",
      "https://boomtown-production-consumer-backup.s3.amazonaws.com/4780/files/2023/09/14.-Lounge-at-the-Casa-Blake-pool-and-take-in-the-views-of-the-marina-adjusted-cd5210efde4a8f6f3b9388bb3a2ac3dd5693a487-1024x683.webp",
      "https://boomtown-production-consumer-backup.s3.amazonaws.com/4780/files/2023/09/15.-Marina-Village-at-Costa-Palmas-offers-a-contemporary-setting-with-stunning-views-adjusted-21a4f845d0ee53d6d1f40bca32e784ae88f5997d-1024x683.webp",
      "https://boomtown-production-consumer-backup.s3.amazonaws.com/4780/files/2023/09/16.-World-class-dining-and-entertainment-with-an-East-Cape-twist-adjusted-cd40c2aa6ebf1a3b0787ada6a153c1b638f45003-1024x683.webp",
    ],
  },
  {
    name: "Casa Nima",
    lat: 23.047923255564754,
    lng: -109.70303818998822,
    logo: "https://www.findmexicohouses.com/files/2023/10/CN_logo_horizontal_cafe-f5e01c07465a6d45eb420065dba560e5e48adc76.png",
    description:
      "Casa Nima, an exquisite residential retreat in San Jose del Cabo that promises not just a home, but a lifestyle. Located in the most desired area of Los Cabos, this luxurious development places you in the heart of comfort, beauty and prime tourist destinations. Offering much more than high-end living spaces, Casa Nima combines modern and Mediterranean aesthetics seamlessly to provide an ambiance of warmth and elegance. But what sets Casa Nima apart is its wide range of amenities: swimming pool, coworking spaces, kids club, pickleball court, barbecues and even a dog park. So, whether for business, leisure or a perfect mix of both, Casa Nima has it all. Don't just find a residence, join a community that enhances every aspect of your life. Choose Casa Nima and elevate your standard of living today.",
    gallery: [
      "https://boomtown-production-consumer-backup.s3.amazonaws.com/4780/files/2023/10/Casa-Nima-16-adjusted-1a9ed1eeb7c284f40716f71aeaef84bdfd29a973-1024x768.webp",
      "https://boomtown-production-consumer-backup.s3.amazonaws.com/4780/files/2023/10/Casa-Nima-25-adjusted-70210e824754b068af787d1bd4ef0b215d4b956d-1024x768.webp",
      "https://boomtown-production-consumer-backup.s3.amazonaws.com/4780/files/2023/10/CASA-NIMA-2-BED_0001_Screen-Shot-2021-08-17-at-13.37.59-adjusted-cbf0da3373bedf2c9325e6784f7be1951369c092-1024x683.webp",
      "https://boomtown-production-consumer-backup.s3.amazonaws.com/4780/files/2023/10/CASA-NIMA-2-BED_0002_0A7A4508-Edit.tif-adjusted-d0af3fe7a145f0019a3e2d3e248184fbab12369e-1024x683.webp",
      "https://boomtown-production-consumer-backup.s3.amazonaws.com/4780/files/2023/10/CASA-NIMA-2-BED_0005_0A7A4556-Edit.tif-adjusted-f7d6323eee32f16deb547b4b003ecd21c7eb5b4f-1024x683.webp",
      "https://boomtown-production-consumer-backup.s3.amazonaws.com/4780/files/2023/10/CASA-NIMA-2-BED_0009_0A7A4600-Edit.tif-adjusted-254adce52ec7a922f67b305fd420f8103c454d7b-1024x683.webp",
      "https://boomtown-production-consumer-backup.s3.amazonaws.com/4780/files/2023/10/11-53ec7f78645c92724f4c5a5ba9951531602e82bf.jpg",
      "https://boomtown-production-consumer-backup.s3.amazonaws.com/4780/files/2023/10/10-f20192c8a0fc5d1c14a739b15f1ad6a570511646.jpg",
      "https://boomtown-production-consumer-backup.s3.amazonaws.com/4780/files/2023/10/9-c9c4f9fce2f202b5c1cc8601f44ecdfaba845dc1.jpg",
      "https://boomtown-production-consumer-backup.s3.amazonaws.com/4780/files/2023/10/8-15e64c9561a28c3e169c047fb7697b0c1b108f2d.jpg",
      "https://boomtown-production-consumer-backup.s3.amazonaws.com/4780/files/2023/10/PH-TERRAZA.2-adjusted-1882feb4b3f5117beb1335212c8f7f81c3a83216-1024x1024.webp",
      "https://boomtown-production-consumer-backup.s3.amazonaws.com/4780/files/2023/10/PH.TERRAZA.3-adjusted-ec8522fc83a0578c3cc7c7c0a3771938db4fc830-1024x1024.webp",
      "https://boomtown-production-consumer-backup.s3.amazonaws.com/4780/files/2023/10/PH.TERRAZA-adjusted-48648e897f4d45d306ffef38901bef2e1b503fe4-1024x1024.webp",
      "https://boomtown-production-consumer-backup.s3.amazonaws.com/4780/files/2023/10/CASA-NIMA-2-BED_0018_0A7A4699-HDR.dng-adjusted-76157ca38cc68f5cb26b46fd9e8b2650b6c230a6-1024x683.webp",
    ],
  },
  {
    name: "One Marina Place",
    lat: 23.065643044314783,
    lng: -109.66995603231707,
    logo: "https://www.findmexicohouses.com/files/2023/10/logo-removebg-preview-c6a5e00bb05d84653aa523c885bad38e55a53dab.png",
    description:
      "ONE MARINA PLACE, where comfort meets luxury right in the heart of Marina San Jose. This isn't just another housing development, it's a lifestyle upgrade. Wake up to amazing marina views and stay connected to all the local events and fun activities the area has to offer. Our focus here is on you. Our services are designed to make your life easier and more enjoyable. Want to stay healthy and fit? Head to our fully equipped fitness center. Fancy a night of sophistication? Enjoy it in our exclusive wine lounge. Our private clubhouse is the perfect place to relax and have fun. This project has been developed in partnership with Baja Capstone Development Group and Pueblo Bonito to bring this vision to life. Our goal is to offer you not only a great place to live, but an exceptional lifestyle experience. Don't just live, thrive. Choose ONE MARINA PLACE today.",
    gallery: [
      "https://www.findmexicohouses.com/files/2023/12/one_marina_ONE-MARINA-PLACE-IMAGES-FOR-AGENCY-NOT-TO-SHARE-W-BUYERS_page-0005-adjusted-69d2aea6f7febfbb92cc06088499f8234c93d529-scaled.webp",
      "https://www.findmexicohouses.com/files/2023/12/one_marina_ONE-MARINA-PLACE-IMAGES-FOR-AGENCY-NOT-TO-SHARE-W-BUYERS_page-0041-adjusted-85a37fb441c9e5f642ebbda463e2987747715111-scaled.webp",
      "https://www.findmexicohouses.com/files/2023/12/one_marina_ONE-MARINA-PLACE-IMAGES-FOR-AGENCY-NOT-TO-SHARE-W-BUYERS_page-0006-adjusted-38a821ad85f74dd04e75116d13318ea759b3ffb1-scaled.webp",
      "https://www.findmexicohouses.com/files/2023/12/one_marina_ONE-MARINA-PLACE-IMAGES-FOR-AGENCY-NOT-TO-SHARE-W-BUYERS_page-0024-adjusted-b2acedb34edc6dc2657409b8eb010bda424ea479-scaled.webp",
    ],
  },
  {
    name: "Palisades",
    lat: 23.716771565482162,
    lng: -109.70821378254671,
    logo: "https://www.findmexicohouses.com/files/2023/10/logo-removebg-preview-c6a5e00bb05d84653aa523c885bad38e55a53dab.png",
    description:
      "The Palisades, your modern sanctuary located in the heart of Los Barriles on the East Cape. Far from just another residence, The Palisades offers an exceptional blend of sophistication and tranquility. Designed with your diverse lifestyle needs in mind, our collection of single-family homes offers a unique opportunity in an area with limited similar offerings. At The Palisades, we've challenged traditional Baja architectural norms to bring you a fresh perspective on luxury living. Every detail has been thoughtfully crafted to elevate your daily experience. With the flexibility of three different home designs, you have the freedom to customize your space according to your personal taste and aspirations. Begin each day with panoramic views and let the peaceful atmosphere of the East Cape refresh your senses. The Palisades isn't just a place to live; it's a haven where you can unwind in a setting that combines natural beauty with top-tier amenities and exquisite finishes. Join an elite community that sets a new standard for luxury living in Los Barriles. Don't miss this unique opportunity to be among the select few who can call this exceptional place home. Make The Palisades your destination for unmatched luxury today.",
    gallery: [
      "https://www.findmexicohouses.com/files/2023/12/palisades_1TKS7-adjusted-7ac6073eeae188644d567dd9071ab65ccc8f128c-scaled.webp",
      "https://www.findmexicohouses.com/files/2023/12/palisades_2TKS-INTERIOR8-adjusted-a7105671030dc588b9e2c750e8fc17000eeb0981.webp",
      "https://www.findmexicohouses.com/files/2023/12/palisades_1TKS2-adjusted-01dba8bd6c47b9a6b78c36a20d9ba62d6496433f-scaled.webp",
      "https://www.findmexicohouses.com/files/2023/12/palisades_2-adjusted-0f1e3bb9c8a3e2f745445679c1a605e9eb260e2b-scaled.webp",
    ],
  },
  {
    name: "Todos Santos Town Houses",
    lat: 23.45538005100768,
    lng: -110.22898829325305,
    logo: "https://www.findmexicohouses.com/files/2023/10/logo-removebg-preview-c6a5e00bb05d84653aa523c885bad38e55a53dab.png",
    description:
      "Todos Santos Town Houses,  located in the energetic heart of Baja California Sur. We are just a three minute drive from bustling downtown Todos Santos, close enough to enjoy all the amenities, but far enough away to create your own oasis. \nOur boutique community is selective, with only five thoughtfully designed townhouses. With three spacious bedrooms and a terrace in each unit, there's plenty of room to stretch out, whether you're moving in with the family or planning your next big investment. \nSecurity is a priority for us; that's why we've protected the community with a gated entrance. Our reasonable community fees guarantee you unlimited access to a tranquil pool and lush garden area, perfect for those weekends when you just want to relax. \nDesigned by renowned Baja Sur architects, each home offers a touch of local essence. And because we know one size does not fit all, we offer customization options: choose your finishes and tailor the layout to your individual style.\nMake Todos Santos Town Houses your next move today!",
    gallery: [
      "https://boomtown-production-consumer-backup.s3.amazonaws.com/4780/files/2022/11/Render_Vista-76b7c8fdb5d0711b556942603e6b0378908f090b-1024x636.jpg",
      "https://boomtown-production-consumer-backup.s3.amazonaws.com/4780/files/2022/03/Cenit-Renders-2022-2-3-Br-STD-01-de618b3a3db5b4af0cacd21b23e6bfcd0377a094-1024x576.jpg",
      "https://boomtown-production-consumer-backup.s3.amazonaws.com/4780/files/2022/11/Render_Amenities_Firepit-3ae52daa16cc2336d209372b8d85ec04493970ed-1024x576.jpg",
      "https://boomtown-production-consumer-backup.s3.amazonaws.com/4780/files/2022/05/3_FINAL-1-e5e1d771764005889fec4d5dfe36eff797803cd0-1024x576.jpg",
      "https://boomtown-production-consumer-backup.s3.amazonaws.com/4780/files/2022/11/Carrusel_PoolClub_Foto1-49dd58a9c2b046c47645840ddd63df20567c0e3c-1024x577.jpg",
      "https://boomtown-production-consumer-backup.s3.amazonaws.com/4780/files/2022/11/Carrusel_PoolClub_Foto2-4d0eb64667f6d4fffb76608dfbc5e7db333a7239-1024x577.jpg",
      "https://boomtown-production-consumer-backup.s3.amazonaws.com/4780/files/2022/11/pano_b1-37f67712c8bf6f9944015f635817a03b35b293f1-1024x1024.jpg",
      "https://boomtown-production-consumer-backup.s3.amazonaws.com/4780/files/2022/11/pano_f-04f1a1ad8846e63bfa36564982ed124367f21ccf-1024x1024.jpg",
      "https://boomtown-production-consumer-backup.s3.amazonaws.com/4780/files/2022/11/pano_l-6e40d897bef57823ce35a634638171782c8baee4-1024x1024.jpg",
      "https://boomtown-production-consumer-backup.s3.amazonaws.com/4780/files/2022/11/image-9cb6b8e1f46bb5464e3ae5cd29b47be9ed06ec4c.png",
    ],
  },
  {
    name: "Cenit",
    lat: 23.050781679341533,
    lng: -109.70057364581129,
    logo: "https://www.findmexicohouses.com/files/2023/10/logo-removebg-preview-c6a5e00bb05d84653aa523c885bad38e55a53dab.png",
    description:
      "Looking to elevate your daily life? Meet Cenit, your new home in San Jose del Cabo, brought to life by Baja Capstone. Situated at the highest point in the area between the highway and the Sea of Cortez, our condos and penthouses offer a daily spectacular in stunning views. Imagine drinking coffee on your private terrace as the sun rises over the Sea of Cortez, or enjoying an evening by your fire pit as the city lights blink below.\nOur two and three bedroom homes are more than just a place to live; they are designed for those who appreciate the finer things in life. Every detail, from the finishes to the design of the interior layout, is thoughtfully designed to make you feel special. But Cenit is more than just luxurious living spaces: it's a community that's vibrant and close-knit. With the help of our Cenit Life team, you don't just live here, you truly thrive here. Whether toasting life's special moments at the Skybar, working up a sweat in our panoramic fitness center, or grilling out in our outdoor kitchen, every amenity is designed to enrich your daily life.\nWe have also thought about the practical aspects. We offer assigned parking, private storage rooms and, for work from home days, a fully equipped business center. Planning for a sustainable future? You'll appreciate our electric vehicle charging stations and eco-friendly transportation options, such as scooters and electric bicycles. At Cenit, we make every day extraordinary.",
    gallery: [
      "https://boomtown-production-consumer-backup.s3.amazonaws.com/4780/files/2022/11/Render_Vista-76b7c8fdb5d0711b556942603e6b0378908f090b-1024x636.jpg",
      "https://boomtown-production-consumer-backup.s3.amazonaws.com/4780/files/2022/03/Cenit-Renders-2022-2-3-Br-STD-01-de618b3a3db5b4af0cacd21b23e6bfcd0377a094-1024x576.jpg",
      "https://boomtown-production-consumer-backup.s3.amazonaws.com/4780/files/2022/11/Render_Amenities_Firepit-3ae52daa16cc2336d209372b8d85ec04493970ed-1024x576.jpg",
      "https://boomtown-production-consumer-backup.s3.amazonaws.com/4780/files/2022/05/3_FINAL-1-e5e1d771764005889fec4d5dfe36eff797803cd0-1024x576.jpg",
      "https://boomtown-production-consumer-backup.s3.amazonaws.com/4780/files/2022/11/Carrusel_PoolClub_Foto1-49dd58a9c2b046c47645840ddd63df20567c0e3c-1024x577.jpg",
      "https://boomtown-production-consumer-backup.s3.amazonaws.com/4780/files/2022/11/Carrusel_PoolClub_Foto2-4d0eb64667f6d4fffb76608dfbc5e7db333a7239-1024x577.jpg",
      "https://boomtown-production-consumer-backup.s3.amazonaws.com/4780/files/2022/11/pano_b1-37f67712c8bf6f9944015f635817a03b35b293f1-1024x1024.jpg",
      "https://boomtown-production-consumer-backup.s3.amazonaws.com/4780/files/2022/11/pano_f-04f1a1ad8846e63bfa36564982ed124367f21ccf-1024x1024.jpg",
      "https://boomtown-production-consumer-backup.s3.amazonaws.com/4780/files/2022/11/pano_l-6e40d897bef57823ce35a634638171782c8baee4-1024x1024.jpg",
      "https://boomtown-production-consumer-backup.s3.amazonaws.com/4780/files/2022/11/image-9cb6b8e1f46bb5464e3ae5cd29b47be9ed06ec4c.png",
    ],
  },
  {
    name: "Mantarraya",
    lat: 25.716855330023627,
    lng: -111.23905085274755,
    logo: "https://www.findmexicohouses.com/files/2023/10/logo-removebg-preview-c6a5e00bb05d84653aa523c885bad38e55a53dab.png",
    description:
      "Welcome to Mantarraya Residences in Loreto, one of the expansive community of Danzante Bay. Here, luxury condos and penthouses are set against the beautiful Sierra de La Giganta Mountains and Sea of Cortez views. And with the Loreto International Airport just a short drive away, your transportation will be a breeze.\nBeyond the impressive views, Mantarraya focuses on your well-being. Our Biophilic wellness center offers a sanctuary for mind and body, while nearby outdoor activities keep your adventurous spirit alive. Golf enthusiasts will be drawn to the exclusive TPC Danzante Bay course, designed by the famous Rees Jones. The course takes you through diverse terrain and offers amazing views, including the Islands of Loreto and the Sierra de la Giganta Mountains.\nMantarraya Residences is more than a home; it's a lifestyle. The life of your dreams is waiting for you.",
    gallery: [
      "https://www.findmexicohouses.com/files/2023/12/mantarraya_Copia-de-EXTERIOR-1.A-adjusted-f81e090e6032957a0ad870919053486ac25c2196.webp",
      "https://www.findmexicohouses.com/files/2023/12/mantarraya_Copia-de-3R-LIVINGROOM-2-adjusted-c1d739cd75678fa43f4a6fc06ccdb137d1161eb8-scaled.webp",
      "https://www.findmexicohouses.com/files/2023/12/mantarraya_Copia-de-3R-BEDROOMS-1-adjusted-69b93b9ae5f68f5ed8a323a3c267a620bce16dd7-scaled.webp",
      "https://www.findmexicohouses.com/files/2023/12/mantarraya_Copia-de-EXTERIOR-1.A-adjusted-f81e090e6032957a0ad870919053486ac25c2196.webp",
    ],
  },
  {
    name: "Monteluna",
    lat: 22.881499230476365,
    lng: -109.92007172883537,
    logo: "https://www.findmexicohouses.com/files/2023/10/logo-removebg-preview-c6a5e00bb05d84653aa523c885bad38e55a53dab.png",
    description:
      "Welcome to Monteluna, a sanctuary of wellness and sustainability located in the prestigious Pedregal de Cabo San Lucas. This is not just another real estate development; this is a lifestyle transformation. Every aspect of Monteluna, from the architecture to the amenities, has been carefully designed to nourish your well-being while minimizing environmental impact.\nOur luxury condominiums offer a perfect blend of comfort and responsible living. Located in the heart of Los Cabos, Monteluna ensures you're never far from the city's conveniences, yet secluded enough to provide peace and tranquility. Immerse yourself in a community that truly cares, offering amenities that cater to both your lifestyle and wellness.\nEducation is an integral part of this exceptional community with an international bilingual K-12 school right within the complex. For your physical well-being and leisure, we have Tennis and Pickleball courts. Ensuring that the community is eco-conscious, we have our own desalination water plant and a regular Farmer’s Market to support local produce. In addition, enjoy your daily coffee at our in-community café.\nMonteluna invites you to be part of a community that champions well-being and sustainability. Here, you’ll find not just a residence, but a lifestyle that you can be proud of. Come and make Monteluna your home, and be a part of the future of living.",
    gallery: [
      "https://www.findmexicohouses.com/files/2023/12/monteluna_Copia-de-20220606_DAY_FACADE-adjusted-612f5d633ea895c0e58338df9a65b8f5f6dba027-scaled.webp",
      "https://www.findmexicohouses.com/files/2023/12/monteluna_Copia-de-20220606_Z_EXT-adjusted-2a072006db4dc8b5af87c4bc5d52ddd1b2c59f49.webp",
      "https://www.findmexicohouses.com/files/2023/12/monteluna_Copia-de-20220606_RENDER_AMENITIES_03-adjusted-30c3f8ff7a7ae66de55f199fe0b37240baa6b0d7.webp",
      "https://www.findmexicohouses.com/files/2023/12/monteluna_Copia-de-20220606_RENDER_INTERIOR_01-adjusted-e739121605cefbb7e9fce749d2a55af9324ceb85.webp",
    ],
  },
  {
    name: "Punta Mirante",
    lat: 22.926263775475316,
    lng: -109.87753171697895,
    logo: "https://www.findmexicohouses.com/files/2023/10/logo-removebg-preview-c6a5e00bb05d84653aa523c885bad38e55a53dab.png",
    description:
      "Welcome to Punta Mirante, perched atop Cabo Bay for unmatched views of Lands End and Cabo San Lucas. Choose from luxurious 3- and 4-bedroom homes, all within a secure gated community. Our residences feature high ceilings, large terraces, and modern amenities, including a full suite of appliances and a 10,000-liter water cistern.\nThe community amenities aim to elevate your lifestyle. Benefit from our dual-level clubhouse, two pools, and a scenic central park. If you crave more personalization, we offer customizable packages to make your home truly yours.\nOur low-density design ensures that each resident enjoys more amenities and open spaces. Roads are safe and family-friendly, enhancing the overall sense of community. The architectural style effortlessly blends modern sophistication with practicality, designed for both comfort and visual appeal.\nAmenities include Open Spaces, Swimming Pools, Clubhouse TV Room, Kids Playground, Fitness Center, and Social Terrace. Contact us today to discover your dream home at Punta Mirante.",
    gallery: [
      "https://www.findmexicohouses.com/files/2023/12/punta_mirante_01-PRPM-fraccionamiento-adjusted-f51987a5df1bc2e687cacf64fc85e2cb987ff0b1-scaled.webp",
      "https://www.findmexicohouses.com/files/2023/12/punta_mirante_09-PRPM-PS-adjusted-5eaf3c19c0d7b86646d21140d6ebf340129dccd6-scaled.webp",
      "https://www.findmexicohouses.com/files/2023/12/punta_mirante_10-PRPM-PS-adjusted-1c9f98eb99731b4eee33ae06143d5920021526e4-scaled.webp",
      "https://www.findmexicohouses.com/files/2023/12/punta_mirante_01A_Casa_Cerralvo_Tren_fachada-adjusted-3bc6110c3e6ff162f5a26c3bca8b9accbb88cb6d-scaled.webp",
    ],
  },
  {
    name: "Rivieri",
    lat: 22.920401015753868,
    lng: -109.88611358047139,
    logo: "https://www.findmexicohouses.com/files/2023/10/logo-removebg-preview-c6a5e00bb05d84653aa523c885bad38e55a53dab.png",
    description:
      "Discover the best of both worlds at Rivieri, situated near the peak of El Tezal and offering jaw-dropping views of Medano Bay and Land's End. This unique location provides a tranquil retreat, while still granting easy access to the vibrant lifestyle Cabo San Lucas has to offer. With Mediterranean-inspired architecture, this master-planned community elevates modern living and provides a rare opportunity to own a House or Duplex in a market leaning towards condos. Our array of amenities includes a community pool, clubhouse, pickleball court, and thoughtfully designed garden spaces—ideal for walking your pet or enjoying a serene evening stroll. All of this comes backed by experienced Cabo developers with a proven track record. Don't miss the chance to experience life at its peak. Contact us today to explore what Rivieri has to offer.",
    gallery: [
      "https://www.findmexicohouses.com/files/2023/12/rivieri_Duplex_1_2-adjusted-63eb7acbc6dac38335e0972680a0d0db6e19ca5b-scaled.webp",
      "https://www.findmexicohouses.com/files/2023/12/rivieri_Render_7-adjusted-07fada92b5baa6fd19d1eb8c5d9537c5de1d42f5-scaled.webp",
      "https://www.findmexicohouses.com/files/2023/12/rivieri_Duplex_2-adjusted-312425a3aa01cc8aae4b97dc1d968d2f645715cb-scaled.webp",
      "https://www.findmexicohouses.com/files/2023/12/rivieri_Render_1-adjusted-473352646c8ae137eefd8cc5916f60c0b9e1f81f-scaled.webp",
    ],
  },
  {
    name: "Vistasol",
    lat: 23.342875042673814,
    lng: -110.17694981277671,
    logo: "https://www.findmexicohouses.com/files/2023/10/logo-removebg-preview-c6a5e00bb05d84653aa523c885bad38e55a53dab.png",
    description:
      "Privada Vistasol, where dream homes meet the beautiful surroundings of Cerritos Beach. Located in the heart of Baja California Sur, this exclusive community envelops a lifestyle of relaxed luxury. Twelve thoughtfully designed single family homes blend perfectly with the natural beauty, with stone walls and wooden pergolas complementing the amazing views of the mountains and green landscapes. Just steps away, you can enjoy a variety of outdoor activities such as surfing, kayaking or peaceful strolls along the beach. Privada Vistasol is more than a residence; it is a lifestyle waiting to be embraced.",
    gallery: [
      "https://www.findmexicohouses.com/files/2023/12/vistasol_FACHADA-FRONTAL-2-adjusted-d45c30f4b88eb8a6fb457dfc14c7dfe6cec25324-scaled.webp",
      "https://www.findmexicohouses.com/files/2023/12/vistasol_VISTASOL_RF_05-adjusted-2ab38f723b29d1ac1704ade3220b895069aa475c-scaled.webp",
      "https://www.findmexicohouses.com/files/2023/12/vistasol_fachada-posterior_01-1-adjusted-3f0739ac536341a9edfa2f77760c7b6b06aa388b.webp",
      "https://www.findmexicohouses.com/files/2023/12/vistasol_VISTASOL_RF_02-adjusted-d12779706ecffc69a6045d6efad1a79d45a75fdb-scaled.webp",
    ],
  },
  {
    name: "Turquesa",
    lat: 22.921550012910455,
    lng: -109.88844469070331,
    logo: "https://www.findmexicohouses.com/files/2023/10/logo-removebg-preview-c6a5e00bb05d84653aa523c885bad38e55a53dab.png",
    description:
      "Turquesa, Designed to live your best life. Located in El Tezal, Cabo San Lucas, this haven of modern living is a fusion of vanguard architecture and the peaceful essence of nature. With 42 towers and 328 apartments, Turquesa is more than a place to live: it is an environment carefully designed to bring balance and harmony to your life.\nWhy only invest in a home when you can invest in an exceptional lifestyle in the most desirable area of Los Cabos? Amenities including dual pools, social terraces and an outdoor grilling area are more than just conveniences, they are extensions of your living space, designed to make every day extraordinary. And for the youngest members of our community, a dedicated playground guarantees hours of fun in a safe environment.\nTurquesa is not simply a place to live, it's a statement of the life you want to lead. With a wealth of local amenities at your doorstep, and a quiet retreat waiting for you at home, the best living experience is just a phone call away. ",
    gallery: [
      "https://boomtown-production-consumer-backup.s3.amazonaws.com/4780/files/2023/11/Turquesa-Development-0c2c8120b13bfafded0623005f8dbd1469a96095-1024x432.webp",
      "https://boomtown-production-consumer-backup.s3.amazonaws.com/4780/files/2023/11/RENDER-ADICIONAL-ALBERCA-1-TURQUESA-CABOS-21-ABR-23-SEC.2-adjusted-cf7528fc5c619bf1239f4accc5b0ddab015a2506-1024x557.webp",
      "https://www.findmexicohouses.com/files/2023/11/VISTA-DESDE-SALA-4TO-NIVEL-TORRE-30-19-ABR-2023-SEC.1-adjusted-53946c899d8ef8a81a45f92cc6742b7b7e5d8077-2048x1152.webp",
      "https://www.findmexicohouses.com/files/2023/11/Vista-desde-balcon-adjusted-769868ebeaa44f27457c6c6d9356a27147ce1988-2048x1152.webp",
    ],
  },
];

export default markers;
