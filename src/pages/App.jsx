import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Container, Row } from 'react-bootstrap'
import { ProfileCard } from '../components/ProfileCard.jsx'
import { DetailModal } from '../components/DetailModal'
import { useSelector, useDispatch } from 'react-redux'
import { addFavorite, selectFavorite } from '../state/reducer/favoriteSlice'
import { MenuBar } from '../components/MenuBar'
import { Banner } from '../components/Banner'
import { Products } from '../components/Products'
import { Footer } from '../components/Footer'
import { ScrollTop } from '../components/ScrollTop'

function App () {
  const [data, setData] = useState([])
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
      })
      .catch((err) => {
        alert(err.response)
      })
  }, [])

  return (
    <div className="App">
      <MenuBar />
      <Banner />
      <Products />
      <ScrollTop />
      <Container className='cards'>
        <Row className="m-auto cards-row">
          {data.map((item, index) => {
            return (
              <ProfileCard
                item={item}
                index={index}
                key={index}
                fav={fav}
                handleFav={handleFav}
                handleShow={handleShow}
              />
            )
          })}
        </Row>
      </Container>
      <Footer />

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
    </div>
  )
}

export default App
