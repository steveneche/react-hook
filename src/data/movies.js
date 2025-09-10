const movies = [
  {
    id: 1,
    title: "Return of Mojo Jojo",
    description:
      "Mojo Jojo returns to take over Townsville, but the Powerpuff Girls are ready for him.",
    posterURL:
      "https://i.pinimg.com/736x/22/d9/bc/22d9bcfc3043fd680c7f97000128870c.jpg",
    rating: 4.5,
    trailerURL: `<iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=qTT9SXyEiYTH83O8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
  },
  {
    id: 2,
    title: "The Lion King",
    description:
      "Simba, a young lion prince, flees his kingdom after tragedy, only to learn the true meaning of bravery.",
    posterURL:
      "https://i.pinimg.com/736x/22/d9/bc/22d9bcfc3043fd680c7f97000128870c.jpg",
    rating: 4.9,
    trailerURL: `<iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=qTT9SXyEiYTH83O8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
  },
  {
    id: 3,
    title: "Toy Story",
    description:
      "A group of toys come to life when their owner is away, leading to unexpected adventures.",
    posterURL:
      "https://i.pinimg.com/736x/22/d9/bc/22d9bcfc3043fd680c7f97000128870c.jpg",
    rating: 4.8,
    trailerURL: `<iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=qTT9SXyEiYTH83O8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
  },
  {
    id: 4,
    title: "Shrek",
    description:
      "An ogre named Shrek sets out to rescue a princess with the help of a talkative donkey.",
    posterURL:
      "https://i.pinimg.com/736x/22/d9/bc/22d9bcfc3043fd680c7f97000128870c.jpg",
    rating: 4.7,
    trailerURL: `<iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=qTT9SXyEiYTH83O8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
  },
  {
    id: 5,
    title: "Frozen",
    description:
      "Princess Anna sets off on a journey to find her sister Elsa, whose icy powers trapped their kingdom in winter.",
    posterURL:
      "https://i.pinimg.com/736x/22/d9/bc/22d9bcfc3043fd680c7f97000128870c.jpg",
    rating: 4.6,
    trailerURL: `<iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=qTT9SXyEiYTH83O8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
  },
  {
    id: 6,
    title: "Spider-Man: Into the Spider-Verse",
    description:
      "Teen Miles Morales becomes Spider-Man of his universe and joins others to save the multiverse.",
    posterURL:
      "https://i.pinimg.com/736x/22/d9/bc/22d9bcfc3043fd680c7f97000128870c.jpg",
    rating: 4.8,
    trailerURL: `<iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=qTT9SXyEiYTH83O8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
  },
  {
    id: 7,
    title: "The Incredibles",
    description:
      "A family of superheroes must hide their powers and live a normal life, until danger calls them back.",
    posterURL:
      "https://i.pinimg.com/736x/22/d9/bc/22d9bcfc3043fd680c7f97000128870c.jpg",
    rating: 4.7,
    trailerURL: `<iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=qTT9SXyEiYTH83O8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
  },
  {
    id: 8,
    title: "Finding Nemo",
    description:
      "A timid clownfish sets out on a journey to bring his son back home after he’s captured by divers.",
    posterURL:
      "https://i.pinimg.com/736x/22/d9/bc/22d9bcfc3043fd680c7f97000128870c.jpg",
    rating: 4.8,
    trailerURL: `<iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=qTT9SXyEiYTH83O8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
  },
  {
    id: 9,
    title: "Zootopia",
    description:
      "In a city of anthropomorphic animals, a bunny cop and a cynical fox team up to uncover a conspiracy.",
    posterURL:
      "https://i.pinimg.com/736x/22/d9/bc/22d9bcfc3043fd680c7f97000128870c.jpg",
    rating: 4.6,
    trailerURL: `<iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=qTT9SXyEiYTH83O8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
  },
  {
    id: 10,
    title: "Coco",
    description:
      "A young boy named Miguel dreams of becoming a musician and journeys into the Land of the Dead.",
    posterURL:
      "https://i.pinimg.com/736x/22/d9/bc/22d9bcfc3043fd680c7f97000128870c.jpg",
    rating: 4.9,
    trailerURL: `<iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=qTT9SXyEiYTH83O8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
  },
];

export default movies;
