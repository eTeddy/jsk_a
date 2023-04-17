import './Anime.css'
import { useState } from "react";

export const Anime = () => {

  const [animeData, setAnimeData] = useState({
    
    imgUrl: "https://cdn.catboys.com/images/image_103.jpg",
    name: "Anime Name",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleGetAnime = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("https://api.catboys.com/img");
      const data = await response.json();
      setIsLoading(false);
      setAnimeData({ imgUrl: data.url, name: data.artist });
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      setError("An error happened, please try again");
    }
  };

  return (
    <div className="container">
      <h3 className="anime-name">Name: {error || animeData.name}</h3>
      <button className="anime_btn" onClick={handleGetAnime} disabled={isLoading}>
        {isLoading ? "Loading..." : "Click for more Anime"}
      </button>
      <div className="anime_container">
        <img className="anime-img" src={animeData.imgUrl} alt={animeData.name} />
      </div>
    </div>
  );
};
