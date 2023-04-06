import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './styles/Teams.css'
import { TeamsCarousel } from './TeamsCarousel.jsx'
import { Container, Row, Nav } from 'react-bootstrap'
import { ProfileCard } from '../components/ProfileCard.jsx'
import { DetailModal } from '../components/DetailModal'
import { useSelector, useDispatch } from 'react-redux'
import { addFavorite, selectFavorite } from '../state/reducer/favoriteSlice'

export const Teams = () => {
  const [data, setData] = useState([])
  const [shown, setShown] = useState([])
  const [range, setRange] = useState(0)
  const [show, setShow] = useState(false)
  const [profile, setProfile] = useState()

  // REDUX
  const fav = useSelector(selectFavorite)
  const dispatch = useDispatch()

  const handleClose = () => setShow(false)
  const handleShow = (index) => {
    setShow(true)
    setProfile(index)
  }

  const handleFav = (int) => {
    let temp = fav
    if (temp.indexOf(int) !== -1) {
      temp = temp.filter((item) => item !== int)
      dispatch(addFavorite(temp)) /// /////////////REDUX
      alert('unfaved')
    } else {
      temp = temp.filter((item) => typeof item === 'number')
      temp.push(int)
      dispatch(addFavorite(temp)) /// /////////////REDUX
      alert('faved')
    }
  }

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        setData(res.data)
        setShown(res.data.slice(0, 4))
      })
      .catch((err) => {
        alert(err.response)
      })
  }, [])

  const shownProfile = (id) => {
    if (id === 'first') {
      setShown(data.slice(0, 4))
      setRange(0)
    } else if (id === 'second') {
      setShown(data.slice(4, 8))
      setRange(4)
    } else {
      setShown(data.slice(8))
      setRange(8)
    }
  }

  return (
    <Container className="cards" id="team">
      <h1>Teams</h1>
          <Nav
            variant="pills"
            className="nav-pills mb-5 justify-content-center align-items-center"
            id="pills-tab"
            defaultActiveKey="first"
          >
            <Nav.Item
              className="overflow-hidden"
              onClick={(e) => shownProfile(e.target.id)}
            >
              <Nav.Link eventKey="first" id="first">
                FRONTEND
              </Nav.Link>
            </Nav.Item>
            <Nav.Item
              className="overflow-hidden"
              onClick={(e) => shownProfile(e.target.id)}
            >
              <Nav.Link eventKey="second" id="second">
                BACKEND
              </Nav.Link>
            </Nav.Item>
            <Nav.Item
              className="overflow-hidden"
              onClick={(e) => shownProfile(e.target.id)}
            >
              <Nav.Link eventKey="third" id="third">
                UI/UX
              </Nav.Link>
            </Nav.Item>
          </Nav>
      <TeamsCarousel
        data={data}
        range={range}
        fav={fav}
        handleFav={handleFav}
        handleShow={handleShow}
      />
      <Row className="m-auto cards-row">
        {shown.map((item, index) => {
          return (
            <ProfileCard
              item={item}
              index={index + range}
              key={index}
              fav={fav}
              handleFav={handleFav}
              handleShow={handleShow}
            />
          )
        })}
      </Row>

      {profile === 0 || profile
        ? (
        <DetailModal
          show={show}
          handleClose={handleClose}
          data={data}
          profile={profile}
        />
          )
        : (
        <></>
          )}
    </Container>
  )
}
