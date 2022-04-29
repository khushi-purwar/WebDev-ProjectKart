import React from 'react'
import Data from "./Data";

import Card from "./Card";

const Learning = () => {
  return (
    <Card 
      key={Data[4].id} 
      img={Data[4].img} 
      title={Data[4].title} 
      link={Data[4].link} 
    />
  );
};

export default Learning;
