import React from 'react'
import Card from "./Card"
import Data from './Data'
import Coding from './CodingPlatforms'
import Learning from './LearningPlatforms'

const favs = 'Coding';

// const FavP = (fav) => {
//   if(fav.favs === 'coding'){
//     return <Coding />
//   }
//   else return <Learning />
// }

function App() {
  return (
    <>
      <h1 className="main_heading">Top 5 Coding Platforms</h1>
      <div className="container">
        {/* <FavP favs = {'coding'}/>  */}
        {favs === 'Coding' ? <Coding /> : <Learning />}
      </div>
    </>
  );
}

export default App;
