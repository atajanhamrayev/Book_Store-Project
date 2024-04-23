let initialState = {
  dashboard: [
    {
      id: 1,
      imgSrc: "./images/photo.png",
      name: "Sila Voli",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic non veniam obcaecati, minus soluta quos, possimus ipsam,eligendi dolorum officia earum voluptate perferendis exlaboriosam ipsa nostrum tempora odit itaque!",
    },
    {
      id: 2,
      imgSrc: "./images/photo.png",
      name: "Sila Nenovesti",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic non veniam obcaecati, minus soluta quos, possimus ipsam,eligendi dolorum officia earum voluptate perferendis exlaboriosam ipsa nostrum tempora odit itaque!",
    },
    {
      id: 3,
      imgSrc: "./images/photo.png",
      name: "Sila Prirody",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic non veniam obcaecati, minus soluta quos, possimus ipsam,eligendi dolorum officia earum voluptate perferendis exlaboriosam ipsa nostrum tempora odit itaque!",
    },
    {
      id: 4,
      imgSrc: "./images/photo.png",
      name: "Sila Kabluka",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic non veniam obcaecati, minus soluta quos, possimus ipsam,eligendi dolorum officia earum voluptate perferendis exlaboriosam ipsa nostrum tempora odit itaque!",
    },
    {
      id: 5,
      imgSrc: "./images/photo.png",
      name: "Sila Sovesti",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic non veniam obcaecati, minus soluta quos, possimus ipsam,eligendi dolorum officia earum voluptate perferendis exlaboriosam ipsa nostrum tempora odit itaque!",
    },
  ],
  categories: [
    {
      id: 1,
      imgSrc: "./images/categories1.png",
      name: "Higher Education",
    },
    {
      id: 2,
      imgSrc: "./images/categories2.png",
      name: "Management Books",
    },
    {
      id: 3,
      imgSrc: "./images/categories3.png",
      name: "Engineering Books",
    },
    {
      id: 4,
      imgSrc: "./images/categories1.png",
      name: "Higher Education",
    },
    {
      id: 5,
      imgSrc: "./images/categories2.png",
      name: "Management Books",
    },
    {
      id: 6,
      imgSrc: "./images/categories3.png",
      name: "Engineering Books",
    },
  ],
  newBooks: [
    {
      id: 1,
      imgSrc: "./images/books/book34.png",
      name: "Simple way of piece life",
      author: "Armor Ramsey",
    },
    {
      id: 2,
      imgSrc: "./images/books/book4 4.png",
      name: "Great travel at desert",
      author: "Sanchit Howdy",
    },
    {
      id: 3,
      imgSrc: "./images/books/book5.png",
      name: "The lady beauty Scarlett",
      author: "Arthur Doyle",
    },
    {
      id: 4,
      imgSrc: "./images/books/book16 1.png",
      name: "Once upon a time",
      author: "Klien Marry",
    },
    {
      id: 5,
      imgSrc: "./images/books/book34.png",
      name: "Simple way of piece life",
      author: "Armor Ramsey",
    },
    {
      id: 6,
      imgSrc: "./images/books/book4 4.png",
      name: "Great travel at desert",
      author: "Sanchit Howdy",
    },
    {
      id: 7,
      imgSrc: "./images/books/book5.png",
      name: "The lady beauty Scarlett",
      author: "Arthur Doyle",
    },
    {
      id: 8,
      imgSrc: "./images/books/book16 1.png",
      name: "Once upon a time",
      author: "Klien Marry",
    },
  ],
  articles: [
    {
      id: 1,
      imgSrc: "./images/articlesPhoto/first.png",
      article: "Reading books always makes the moments happy",
      author: "David Shvimmer",
    },
    {
      id: 2,
      imgSrc: "./images/articlesPhoto/second.png",
      article: "Reading books always makes the moments happy",
      author: "David Shvimmer",
    },
    {
      id: 3,
      imgSrc: "./images/articlesPhoto/third.png",
      article: "Reading books always makes the moments happy",
      author: "David Shvimmer",
    },
    {
      id: 1,
      imgSrc: "./images/articlesPhoto/first.png",
      article: "Reading books always makes the moments happy",
      author: "David Shvimmer",
    },
    {
      id: 2,
      imgSrc: "./images/articlesPhoto/second.png",
      article: "Reading books always makes the moments happy",
      author: "David Shvimmer",
    },
    {
      id: 3,
      imgSrc: "./images/articlesPhoto/third.png",
      article: "Reading books always makes the moments happy",
      author: "David Shvimmer",
    },
    {
      id: 1,
      imgSrc: "./images/articlesPhoto/first.png",
      article: "Reading books always makes the moments happy",
      author: "David Shvimmer",
    },
    {
      id: 2,
      imgSrc: "./images/articlesPhoto/second.png",
      article: "Reading books always makes the moments happy",
      author: "David Shvimmer",
    },
    {
      id: 3,
      imgSrc: "./images/articlesPhoto/third.png",
      article: "Reading books always makes the moments happy",
      author: "David Shvimmer",
    },
  ],
};

const HomeReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default HomeReducer;
