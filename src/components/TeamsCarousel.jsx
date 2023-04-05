import React from 'react'
import { Carousel } from 'react-bootstrap'
import './styles/TeamsCarousel.css'

export const TeamsCarousel = () => {
  const links = [
    'https://i.kym-cdn.com/photos/images/newsfeed/001/865/673/cc9.png',
    'https://i.kym-cdn.com/entries/icons/original/000/001/030/DButt.jpg',
    'https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Trollface_non-free.png/220px-Trollface_non-free.png',
    'https://i.kym-cdn.com/entries/icons/original/000/010/496/Overly_attached_GF.jpg',
    'https://i.kym-cdn.com/entries/icons/mobile/000/009/515/BadLuckBryan.jpg',
    'https://dafunda.com/wp-content/uploads/2022/12/Alasan-Kenapa-Bocchi-The-Rock-Jadi-Anime-Komedi-Terbaik.jpg',
    'https://vulkk.com/wp-content/uploads/2020/12/panam-palmer-03-480x480.jpg',
    'https://assets.reedpopcdn.com/cyberpunk-2077-romance-options-judy-5077-1607603211095.jpg/BROK/thumbnail/1200x1200/quality/100/cyberpunk-2077-romance-options-judy-5077-1607603211095.jpg',
    'https://i.pinimg.com/originals/fd/7f/4d/fd7f4d69f41224005b5018d42142997b.png',
    'https://i1.sndcdn.com/artworks-000124032539-aq9bce-t500x500.jpg'
  ]

  return (
    <Carousel indicators={false}>
      {links.map((item, index) => {
        return (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src={links[index]}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
        )
      })}
    </Carousel>
  )
}
