import christmas from "./christmas.JPG";
// import collection from "./collection.jpg";
import cross from "./cross.jpg";
import graduation from "./graduation.JPG";
import rainbow from "./rainbow.jpg";
import worship from "./worship.jpg";

export const images = [
  christmas,
  // collection,
  cross,
  graduation,
  rainbow,
  worship,
];

export const imagesWithDetails = [
  {
    img: christmas,
    alt: "christmas",
    header: "Thai Church DC",
    description: "คริสตจักรไทยดีซี",
  },

  {
    img: worship,
    alt: "worship",
    header: "Sunday Service: 11am (ET)",
    description: "3910 Lorcom Lane, Arlington, Virginia 22207",
  },
  {
    img: rainbow,
    alt: "I will be with you. Joshua 1:5",
    header: "I will be with you.",
    description: "- Joshua 1:5",
  },
];

export const totalImageWithDetails = imagesWithDetails.length;
