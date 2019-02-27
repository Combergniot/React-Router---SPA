import React from "react";
import Article from "../components/Article";

const articles = [
  {
    id: 1,
    title: "Czym jest teoria strun?",
    author: "Jan Nowak",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, accusamus. Laboriosam, eos perferendis ipsam labore sed, blanditiis, voluptatibus minus velit omnis at hic cupiditate sit obcaecati optio? Officiis, reiciendis fugiat?"
  },
  {
    id: 2,
    title: "Czym jest paradoks fermiego?",
    author: "Marek Kowalski",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, accusamus. Laboriosam, eos perferendis ipsam labore sed, blanditiis, voluptatibus minus velit omnis at hic cupiditate sit obcaecati optio? Officiis, reiciendis fugiat?"
  },
  {
    id: 3,
    title: "Ciemna materia i ciemna energia",
    author: "Urszula Wernerowicz",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, accusamus. Laboriosam, eos perferendis ipsam labore sed, blanditiis, voluptatibus minus velit omnis at hic cupiditate sit obcaecati optio? Officiis, reiciendis fugiat?"
  }
];

const HomePage = () => {
  const artList = articles.map(article => (
    <Article key={article.id} {...article} />
  ));

  return <div className="home">{artList}</div>;
};

export default HomePage;
