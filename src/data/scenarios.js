const scenarios = [
  {
    name: "Forest",
    slug: "forest",
    creator_id: 1,
    color_scheme: [],
    is_public: true,
    likes: 0,
    sounds: [
      {
        id: 519,
        slug: "smallstream",
        volume: 0.7,
        pan: 0.5
      },
      {
        id: 521,
        slug: "summerambience",
        volume: 0.55,
        pan: -0.3
      },
      {
        id: 23,
        slug: "woodpecker",
        volume: 0.7,
        pan: 0,
        frequency: 0.2
      },
      {
        id: 22,
        slug: "woodpidgeon",
        volume: 0.7,
        pan: -0.43,
        frequency: 0.5
      },
      {
        id: 2,
        slug: "blackbird",
        volume: 0.47,
        pan: 0.4,
        frequency: 0.5
      },
      {
        id: 1,
        slug: "bee",
        volume: 0.45,
        pan: 0,
        frequency: 0.2
      }
      // {
      //   id: 19,
      //   slug: "treefalling",
      //   volume: 0.7,
      //   pan: 0,
      //   frequency: 0.5
      // }
    ]
  },
  {
    name: "Beach",
    slug: "beach",
    creator_id: 1,
    color_scheme: [],
    is_public: true,
    likes: 0,
    sounds: [
      {
        id: 513,
        slug: "oceanwaves1",
        volume: 0.82,
        pan: -0.65
      },
      {
        id: 514,
        slug: "oceanwaves2",
        volume: 0.9,
        pan: 0.5
      },
      // {
      //   id: 515,
      //   slug: "parrots",
      //   volume: 0.7,
      //   pan: 0
      // },
      {
        id: 14,
        slug: "seagull",
        volume: 0.85,
        pan: 0.25,
        frequency: 0.5
      },
      {
        id: 21,
        slug: "watersplash",
        volume: 0.5,
        pan: 0,
        frequency: 0.5
      },
      {
        id: 13,
        slug: "sailflapping",
        volume: 0.8,
        pan: 0.3,
        frequency: 0.15
      },
      {
        id: 12,
        slug: "parrot",
        volume: 0.8,
        pan: 0.4,
        frequency: 0.5
      }
    ]
  },
  {
    name: "City",
    slug: "city",
    creator_id: 1,
    color_scheme: [],
    is_public: true,
    likes: 0,
    sounds: [
      {
        id: 504,
        slug: "citytraffic",
        volume: 0.7,
        pan: 0
      },
      {
        id: 503,
        slug: "cityrumbling",
        volume: 0.7,
        pan: 0
      },
      // {
      //   id: 24,
      //   slug: "construction",
      //   volume: 0.7,
      //   pan: 0,
      //   frequency: 0.3
      // },
      {
        id: 18,
        slug: "traffic",
        volume: 0.7,
        pan: 0,
        frequency: 0.5
      },
      {
        id: 7,
        slug: "cyclist",
        volume: 0.7,
        pan: 0,
        frequency: 0.5
      }
    ]
  },
  {
    name: "Woodland Camp",
    slug: "woodland",
    creator_id: 1,
    color_scheme: [],
    is_public: true,
    likes: 0,
    sounds: [
      {
        id: 505,
        slug: "crickets",
        volume: 0.7,
        pan: 0
      },
      {
        id: 501,
        slug: "campfire",
        volume: 0.7,
        pan: 0
      },
      {
        id: 518,
        slug: "rumblingfire",
        volume: 0.7,
        pan: 0
      },
      {
        id: 9,
        slug: "fireburst",
        volume: 0.7,
        pan: 0,
        frequency: 0.3
      },
      {
        id: 1,
        slug: "bee",
        volume: 0.7,
        pan: 0,
        frequency: 0.5
      },
      {
        id: 10,
        slug: "frog",
        volume: 0.7,
        pan: 0,
        frequency: 0.5
      }
    ]
  },
  {
    name: "Birdsong",
    slug: "birdsong",
    creator_id: 1,
    color_scheme: [],
    is_public: true,
    likes: 0,
    sounds: [
      {
        id: 512,
        slug: "morningbirds",
        volume: 0.7,
        pan: 0
      },
      {
        id: 521,
        slug: "summerambience",
        volume: 0.7,
        pan: 0
      },
      {
        id: 2,
        slug: "blackbird",
        volume: 0.7,
        pan: 0,
        frequency: 0.3
      },
      {
        id: 4,
        slug: "chaffinch",
        volume: 0.7,
        pan: 0,
        frequency: 0.5
      },
      {
        id: 6,
        slug: "cuckoo",
        volume: 0.7,
        pan: 0,
        frequency: 0.5
      },
      {
        id: 22,
        slug: "woodpidgeon",
        volume: 0.7,
        pan: 0,
        frequency: 0.5
      },
      {
        id: 16,
        slug: "songthrush",
        volume: 0.7,
        pan: 0,
        frequency: 0.5
      }
    ]
  },
  {
    name: "Waterfall",
    slug: "waterfall",
    creator_id: 1,
    color_scheme: [],
    is_public: true,
    likes: 0,
    sounds: [
      {
        id: 511,
        slug: "largewaterfall",
        volume: 0.7,
        pan: 0
      },
      {
        id: 520,
        slug: "snowstorm",
        volume: 0.7,
        pan: 0
      },
      {
        id: 20,
        slug: "waterdrops",
        volume: 0.7,
        pan: 0,
        frequency: 0.3
      },
      {
        id: 21,
        slug: "watersplash",
        volume: 0.7,
        pan: 0,
        frequency: 0.5
      }
    ]
  },
  {
    name: "Farmyard",
    slug: "farmyard",
    creator_id: 1,
    color_scheme: [],
    is_public: true,
    likes: 0,
    sounds: [
      {
        id: 506,
        slug: "englishsheep",
        volume: 0.7,
        pan: 0
      },
      {
        id: 508,
        slug: "italianbirds",
        volume: 0.7,
        pan: 0
      },
      {
        id: 15,
        slug: "sheep",
        volume: 0.7,
        pan: 0,
        frequency: 0.3
      },
      {
        id: 5,
        slug: "cow",
        volume: 0.7,
        pan: 0,
        frequency: 0.5
      },
      {
        id: 11,
        slug: "horse",
        volume: 0.7,
        pan: 0,
        frequency: 0.5
      },
      {
        id: 3,
        slug: "bull",
        volume: 0.7,
        pan: 0,
        frequency: 0.5
      },
      {
        id: 8,
        slug: "deer",
        volume: 0.7,
        pan: 0,
        frequency: 0.5
      }
    ]
  },
  {
    name: "Rainstorm",
    slug: "rainstorm",
    creator_id: 1,
    color_scheme: [],
    is_public: true,
    likes: 0,
    sounds: [
      {
        id: 516,
        slug: "rain1",
        volume: 0.7,
        pan: 0
      },
      {
        id: 517,
        slug: "rain2",
        volume: 0.7,
        pan: 0
      },
      {
        id: 17,
        slug: "thunder",
        volume: 0.7,
        pan: 0,
        frequency: 0.3
      },
      {
        id: 20,
        slug: "waterdrops",
        volume: 0.7,
        pan: 0,
        frequency: 0.5
      }
    ]
  }
];

export default scenarios;
