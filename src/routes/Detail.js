import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

function Detail() {
  const [movie, setMovie] = useState([])
  const [genres, getGenres] = useState([])

  const {id} = useParams()
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json()
    console.log(json)
    setMovie(json.data.movie)
    getGenres(json.data.movie.genres)
  }
  useEffect(() => {
    getMovie()
  },[])
  return(
    <div>
      <h1>Detail ({id})</h1>
      <h2>{movie.title}</h2>
      <img src={movie.background_image_original} alt={movie.title} />
      <div>
        {genres.map((g) => (
          <span key={g}>{g}</span>
        ))}
      </div>
    </div>
    
  ) 
}

export default Detail;