import React, { useEffect, useState } from 'react'
import { Carousel, Button } from 'react-bootstrap'
import './styles/TeamsCarousel.css'
import PropTypes from 'prop-types'

export const TeamsCarousel = ({ data, range, fav, handleFav, handleShow }) => {
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

  const [index, setIndex] = useState(0)

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex)
  }

  useEffect(() => {
    setIndex(0)
  }, [range])

  return (
    <Carousel indicators={false} activeIndex={index} onSelect={handleSelect}>
      {data.slice(range, range + 4).map((item, index) => {
        return (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src={links.slice(range, range + 4)[index]}
              alt="First slide"
              onClick={() => handleShow(index + range)}
            />
            <Carousel.Caption>
              <h3 onClick={() => handleShow(index + range)}>{item.username}</h3>
              <Button
                variant={
                  fav.find((item) => item === index) >= 0
                    ? 'danger'
                    : 'outline-danger'
                }
                onClick={() => handleFav(index)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-heart-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                  />
                </svg>
              </Button>
            </Carousel.Caption>
          </Carousel.Item>
        )
      })}
    </Carousel>
  )
}

TeamsCarousel.propTypes = {
  data: PropTypes.array,
  range: PropTypes.number,
  fav: PropTypes.array,
  handleFav: PropTypes.func,
  handleShow: PropTypes.func
}
