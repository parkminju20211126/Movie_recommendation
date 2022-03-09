import {useParams} from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./Detail.module.css";

function Detail() {
  const {id} = useParams();
  const [movie, setMovie] = useState([]);

  const getMovie = async() => {
    const json = await(
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    //console.log(json.data.movie);
    setMovie(json.data.movie);
  }
  useEffect(()=> {
    getMovie();
  },[]); //처음만 나타남
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.li1}>Login</div>
        <div className={styles.li1}>Notice</div>
        <div className={styles.li1}>Movie</div>
        <div className={styles.li1}>Map</div>
      </div>
    
    
      <img className={styles.image}src={movie.medium_cover_image}/>
      <div className={styles.sub}>
      <h1>{movie.title}({movie.year})</h1>
      <div className={styles.subcat}>
        <li>Rating ★{movie.rating}</li>
        <li>Runtime {movie.runtime}</li>
        <li>LikeCount {movie.like_count}</li>
        <li>Genres
          <ul>{movie.genres}</ul>
        </li>
      </div>
    
    
    </div>
    </div>
    
  );
}

  export default Detail;
