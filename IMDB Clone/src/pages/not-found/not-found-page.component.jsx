import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import Container from "react-bootstrap/Container";

const content = [
  {
    message: "Yeah... I'm gonna need you to go ahead and find another page.",
    author: "Bill Lumbergh,",
    movie: "Office Space (1999)",
  },
  {
    message: "Where's the page, Lebowski? Where's the page?",
    author: "Blond Thug,",
    movie: "The Big Lebowski (1998)",
  },
  {
    message: "It's the one that says 'Page not found'.",
    author: "Jules Winnfield,",
    movie: "Pulp Fiction (1994)",
  },
  {
    message: "Dude, where's my webpage?",
    author: "Jesse Montgomery III,",
    movie: "Dude, Where's My Car? (2000)",
  },
  {
    message: "I am Jack's missing page.",
    author: "The Narrator,",
    movie: "Fight Club (1999)",
  },
  {
    message: "The page did a Peter Pan right off of this website, right here.",
    author: "Deputy Marshal Samuel Gerard,",
    movie: "The Fugitive (1993)",
  },
  {
    message: "This is not the webpage you're looking for.",
    author: "Obi-Wan,",
    movie: "Star Wars: Episode IV - A New Hope (1977)",
  },
].sort(() => Math.random() - 0.5);

const NotFoundPage = () => (
  <Container>
    <div className="error_code_404">
      <Helmet>
        <body class="light-bg"></body>
      </Helmet>
      <div className="error_message">
        The requested URL was not found on our server.
        <Link to="/"> Go to the homepage</Link> »
      </div>
      <div className="error_bubble">
        <div className="error_code">
          404
          <br />
          <span>ERROR</span>
        </div>
        <div className="error_quote">{content[0].message}</div>
      </div>
      <div className="error_arrow"></div>
      <div className="error_attrib">
        <span>{content[0].author} </span>
        <a href="/">{content[0].movie}</a>
      </div>
      <div className="clear"></div>
    </div>
  </Container>
);

export default NotFoundPage;
