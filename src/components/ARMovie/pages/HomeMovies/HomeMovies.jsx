import './HomeMovies.scss'
import { useContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Modal from '../../Modal/Modal'
import { MyContext } from '../../../../App'
import axios from 'axios'
import YouTube from 'react-youtube'

HomeMovies.propTypes = {
  movies: PropTypes.array
}

export default function HomeMovies() {
  const API_KEY = 'cb7e0d3c7220c3ae45ecd18c759bc537'
  const [trailerID, setTrailerID] = useState(null)
  const [videos,setVideos] = useState([])
  
  const [newMovies,setNewMovies] = useState([])
  
  const context = useContext(MyContext)
  const { toggleModal, isOpen } = context
  
  useEffect(() => {
    axios(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`)
    .then(res => setNewMovies(res.data.results))
  }, [])

  const showTrailer = (id) => {
    setTrailerID(id)
    toggleModal();
  }

useEffect(() => {
  axios(`https://api.themoviedb.org/3/movie/${trailerID}/videos?api_key=${API_KEY}&language=en-US`)
    .then(res => setVideos(res.data.results))
}, [trailerID])

  return (
    <>
      {isOpen
        ? <Modal toggleModal={toggleModal} isOpen={isOpen}>
          <div className="Modal__trailer">
            <YouTube videoId={videos[0]?.key} />
            <button onClick={toggleModal}><i className="bi bi-x-lg"></i></button>
          </div>
        </Modal>
        : null
      }
      <div className='HomeMovies'>
        <h1>Famous Movies</h1>
        <div className="HomeMovies__movies">
          {
            newMovies.map(movie => {
              return (
                <div className="HomeMovies__card" key={movie.id}>
                  <div className="HomeMovies__img">
                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                    <div className="buttons">
                      <i className="bi bi-film" onClick={() => showTrailer(movie.id)}></i>
                    </div>
                  </div>
                  <div className="HomeMovies__content">
                    <h2>{movie.original_title}</h2>
                    <p>Release Date: {movie.release_date}</p>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  )
}
