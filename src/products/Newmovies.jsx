const Newmovies = [
  {
    id: 132,
    title: "Dune: Part Two",
    img: "https://i.pinimg.com/736x/77/03/8e/77038e7555ce7c1401b1bb5ec9768a67.jpg",
    rating: 9.1,
    genre: "Sci-Fi",
    year: 2024
  },
  {
    id: 133,
    title: "Deadpool & Wolverine",
    img: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Deadpool_%26_Wolverine_poster.jpg/250px-Deadpool_%26_Wolverine_poster.jpg",
    rating: 8.7,
    genre: "Action",
    year: 2024
  },
  {
    id: 134,
    title: "Kingdom of the Planet of the Apes",
    img: "https://image.tmdb.org/t/p/w500/gKkl37BQuKTanygYQG1pyYgLVgf.jpg",
    rating: 7.9,
    genre: "Sci-Fi",
    year: 2024
  },
  {
    id: 135,
    title: "Furiosa: A Mad Max Saga",
    img: "https://upload.wikimedia.org/wikipedia/en/3/34/Furiosa_A_Mad_Max_Saga.jpg",
    rating: 8.2,
    genre: "Action",
    year: 2024
  },
  {
    id: 136,
    title: "Inside Out 2",
    img: "https://lumiere-a.akamaihd.net/v1/images/p_insideout2_now_available_disneyplus_d24c051c.jpeg",
    rating: 8.5,
    genre: "Animation",
    year: 2024
  },
  {
    id: 137,
    title: "Bad Boys: Ride or Die",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkac2-0vIqCRbvMsFX_4o_sdqK4Oit0V5KeQ&s",
    rating: 7.2,
    genre: "Action",
    year: 2024
  },
  {
    id: 138,
    title: "Godzilla x Kong: The New Empire",
    img: "https://m.media-amazon.com/images/S/pv-target-images/adee7690c6d6455b655a5dbc4d58899a763285cab13491519b0b03470d4bd7f8.jpg",
    rating: 7.8,
    genre: "Action",
    year: 2024
  },
  {
    id: 139,
    title: "Civil War",
    img: "https://image.tmdb.org/t/p/w500/sh7Rg8Er3tFcN9BpKIPOMvALgZd.jpg",
    rating: 7.1,
    genre: "Thriller",
    year: 2024
  },
  {
    id: 140,
    title: "The Beekeeper",
    img: "https://upload.wikimedia.org/wikipedia/en/8/82/The_Beekeeper_poster.jpg",
    rating: 7.3,
    genre: "Action",
    year: 2024
  },
  {
    id: 141,
    title: "The Fall Guy",
    img: "https://upload.wikimedia.org/wikipedia/en/1/1f/The_Fall_Guy_%282024%29_poster.jpg",
    rating: 8.0,
    genre: "Action",
    year: 2024
  },
  {
    id: 142,
    title: "Rebel Moon Part 2",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbjj1c4jSs7znOqxExLx_2_6gATdL9k3WeJg&s",
    rating: 6.9,
    genre: "Sci-Fi",
    year: 2024
  },
  {
    id: 143,
    title: "The Garfield Movie",
    img: "https://image.tmdb.org/t/p/w500/p6AbOJvMQhBmffd0PIv0u8ghWeY.jpg",
    rating: 7.4,
    genre: "Animation",
    year: 2024
  },
  {
    id: 144,
    title: "Challengers",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCE0PnRcMQgCK_7ah6exp5mv9qK3N5VkIBnw&s",
    rating: 7.8,
    genre: "Drama",
    year: 2024
  },
  {
    id: 145,
    title: "Atlas",
    img: "https://image.tmdb.org/t/p/w500/bcM2Tl5HlsvPBnL8DKP9Ie6vU4r.jpg",
    rating: 6.5,
    genre: "Sci-Fi",
    year: 2024
  },
  {
    id: 146,
    title: "Ghostbusters: Frozen Empire",
    img: "https://upload.wikimedia.org/wikipedia/en/3/31/Ghostbusters_%282024%29_poster.jpg",
    rating: 7.0,
    genre: "Fantasy",
    year: 2024
  },
  {
    id: 147,
    title: "Mean Girls",
    img: "https://m.media-amazon.com/images/S/pv-target-images/b290a86f373d0e4e96e9280f6bb5e8d50a80670788cf93edbc611394654e6aa0.jpg",
    rating: 6.8,
    genre: "Comedy",
    year: 2024
  },
  {
    id: 148,
    title: "Anyone But You",
    img: "https://preview.redd.it/anyone-but-you-review-v0-gdvfwogtiz7c1.jpeg?auto=webp&s=8c6a1a77fdf6ff94a299fb86792624530d2096f5",
    rating: 7.4,
    genre: "Romance",
    year: 2023
  },
  {
    id: 149,
    title: "Aquaman and the Lost Kingdom",
    img: "https://image.tmdb.org/t/p/w500/8xV47NDrjdZDpkVcCFqkdHa3T0C.jpg",
    rating: 6.7,
    genre: "Action",
    year: 2023
  },
  {
    id: 150,
    title: "Wonka",
    img: "https://image.tmdb.org/t/p/w500/qhb1qOilapbapxWQn9jtRCMwXJF.jpg",
    rating: 8.0,
    genre: "Fantasy",
    year: 2023
  },
  {
    id: 151,
    title: "Napoleon",
    img: "https://upload.wikimedia.org/wikipedia/en/2/2e/Napoleon_Film_poster.jpg",
    rating: 7.1,
    genre: "Drama",
    year: 2023
  },
  {
    id: 152,
    title: "Rebel Moon Part 1",
    img: "https://image.tmdb.org/t/p/w500/ui4DrH1cKk2vkHshcUcGt2lKxCm.jpg",
    rating: 6.8,
    genre: "Sci-Fi",
    year: 2023
  },
  {
    id: 153,
    title: "The Creator",
    img: "https://image.tmdb.org/t/p/w500/vBZ0qvaRxqEhZwl6LWmruJqWE8Z.jpg",
    rating: 7.7,
    genre: "Sci-Fi",
    year: 2023
  },
  {
    id: 154,
    title: "The Marvels",
    img: "https://cdn.marvel.com/content/1x/marvels_imax_digital_supplemental_v3_lg.jpg",
    rating: 6.4,
    genre: "Action",
    year: 2023
  },
  {
    id: 155,
    title: "The Equalizer 3",
    img: "https://image.tmdb.org/t/p/w500/b0Ej6fnXAP8fK75hlyi2jKqdhHz.jpg",
    rating: 7.5,
    genre: "Action",
    year: 2023
  },
  {
    id: 156,
    title: "Barbie",
    img: "https://images-cdn.ubuy.co.in/660f9e73afccd7049644a2bc-poster-2023-movie-posters-prints-bedroom.jpg",
    rating: 8.1,
    genre: "Comedy",
    year: 2023
  },
  {
    id: 157,
    title: "Oppenheimer",
    img: "https://www.hollywoodreporter.com/wp-content/uploads/2022/07/Oppenheimer-Movie-Poster-Universal-Publicity-EMBED-2022-.jpg?w=1000",
    rating: 9.0,
    genre: "Biography",
    year: 2023
  },
  {
    id: 158,
    title: "Spider-Man: Across the Spider-Verse",
    img: "https://i.pinimg.com/736x/d7/d3/5c/d7d35c40aa5bf6d2cf925b2757b07837.jpg",
    rating: 9.2,
    genre: "Animation",
    year: 2023
  },
  {
    id: 159,
    title: "Mission: Impossible – Dead Reckoning",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAls650jGpgWJN_qb4tcoMeoJXfYTLyGJQ-Q&s",
    rating: 8.1,
    genre: "Action",
    year: 2023
  },
  {
    id: 160,
    title: "The Hunger Games: The Ballad of Songbirds & Snakes",
    img: "https://image.tmdb.org/t/p/w500/mBaXZ95R2OxueZhvQbcEWy2DqyO.jpg",
    rating: 7.5,
    genre: "Drama",
    year: 2023
  },
  {
    id: 161,
    title: "Blue Beetle",
    img: "https://image.tmdb.org/t/p/w500/mXLOHHc1Zeuwsl4xYKjKh2280oL.jpg",
    rating: 6.8,
    genre: "Action",
    year: 2023
  }
];
export default Newmovies;