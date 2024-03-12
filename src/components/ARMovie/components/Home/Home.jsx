import { useState } from 'react'
import { PictureSlider, HomeMovies, HomeActors } from '../../pages'

export default function Home() {
  const [images] = useState([
    'https://images8.alphacoders.com/547/547394.jpg',
    'https://4kwallpapers.com/images/walls/thumbs_3t/13940.jpg',
    'https://images5.alphacoders.com/125/1257951.jpeg',
    'https://images8.alphacoders.com/131/1319119.png',
    'https://images3.alphacoders.com/131/1319517.jpeg',
    'https://images3.alphacoders.com/131/1310689.jpg',
    'https://images2.alphacoders.com/268/268352.jpg',
    'https://images4.alphacoders.com/653/653613.jpg',
    'https://images7.alphacoders.com/133/1337622.jpg'
  ])

 
  return (
    <div className="Home">
      <PictureSlider images={images} />
      <HomeMovies />
      <HomeActors />
    </div>
  )
}
