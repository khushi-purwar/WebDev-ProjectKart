import React from "react";

import NowPlaying from "../../components/now-playing/now-playing.component";
import FeaturedToday from "../../components/featured-today/featured-today.component";
import FanFavorites from "../../components/fan-favorites/fan-favorites.component";

function HomePage() {
  return (
    <div className="homepage">
      <NowPlaying />
      <FeaturedToday />
      <FanFavorites />
    </div>
  );
}

export default HomePage;
