import React from 'react'
import { Card, Button } from 'react-bootstrap'
import emailIcon from '../assets/email-svgrepo-com.svg'
import webIcon from '../assets/website-ui-web-svgrepo-com.svg'
import companyIcon from '../assets/company-svgrepo-com.svg'
import PropTypes from 'prop-types'

export const ProfileCard = ({ item, index, fav, handleFav, handleShow }) => {
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
    <Card
      className="m-3"
      key={index}
      style={{ width: '18rem', border: 'none' }}
      onMouseOver={() => console.log('hover')}
    >
      <Card.Img variant="top" src={links[index]} style={{ height: '230px' }} />
      <Card.Body>
        <Card.Title>{item.username}</Card.Title>

        <div>
          <img
            src={emailIcon}
            alt=""
            style={{ width: '20px', height: '20px' }}
          />
          {item.email}
        </div>
        <div>
          <a
            href={'https://' + item.website}
            target="_blank"
            style={{ textDecoration: 'none' }} rel="noreferrer"
          >
            <img
              src={webIcon}
              alt=""
              style={{ width: '20px', height: '20px' }}
            />
            <span> My Website</span>
          </a>
        </div>
        <div style={{ marginBottom: '1em' }}>
          <img
            src={companyIcon}
            alt=""
            style={{ width: '20px', height: '20px' }}
          />
          {item.company.name}
        </div>

        <Button onClick={() => handleShow(index)}>Detail</Button>
        <Button className="btn-fav" onClick={() => handleFav(index)}>
          {fav.length === 0
            ? (
            <>Favorite</>
              )
            : (
            <>
              {fav.find((item) => item === index) >= 0
                ? (
                <>Unfavorite</>
                  )
                : (
                <>Favorites</>
                  )}
            </>
              )}
        </Button>
      </Card.Body>
    </Card>
  )
}

ProfileCard.propTypes = {
  item: PropTypes.object,
  index: PropTypes.number,
  fav: PropTypes.array,
  handleFav: PropTypes.func,
  handleShow: PropTypes.func
}
