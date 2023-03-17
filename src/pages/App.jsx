import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row } from "react-bootstrap";
import { ProfileCard } from "../components/ProfileCard.jsx";
import { DetailModal } from "../components/DetailModal";

function App() {
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
  const [profile, setProfile] = useState();
  const [fav, setFav] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = (index) => {
    setShow(true);
    setProfile(index);
  };

  const handleFav = (int) => {
    let temp = fav;
    if (temp.indexOf(int) !== -1) {
      temp = temp.filter((item) => item !== int);
      setFav(temp);
      alert("unfaved");
    } else {
      temp.push(int);
      temp = temp.filter((item) => typeof item !== String);
      setFav(temp);
      alert("faved");
    }
  };

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        alert(err.response);
      });
  }, []);

  return (
    <div className="App">
      <Container>
        <Row className="m-auto">
          {data.map((item, index) => {
            return (
              <ProfileCard
                item={item}
                index={index}
                fav={fav}
                handleFav={handleFav}
                handleShow={handleShow}
              />
            );
          })}
        </Row>
      </Container>

      {profile == 0 || profile ? (
        <DetailModal
          show={show}
          handleClose={handleClose}
          data={data}
          profile={profile}
        />
      ) : (
        <></>
      )}
    </div>
  );
}

export default App;
