import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Card, Button, Container, Row } from "react-bootstrap";
import emailIcon from "./assets/email-svgrepo-com.svg";
import webIcon from "./assets/website-ui-web-svgrepo-com.svg";
import companyIcon from "./assets/company-svgrepo-com.svg";

function App() {
  const [data, setData] = useState([]);

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

  const links = [
    "https://i.kym-cdn.com/photos/images/newsfeed/001/865/673/cc9.png",
    "https://i.kym-cdn.com/entries/icons/original/000/001/030/DButt.jpg",
    "https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Trollface_non-free.png/220px-Trollface_non-free.png",
    "https://i.kym-cdn.com/entries/icons/original/000/010/496/Overly_attached_GF.jpg",
    "https://i.kym-cdn.com/entries/icons/mobile/000/009/515/BadLuckBryan.jpg",
    "https://dafunda.com/wp-content/uploads/2022/12/Alasan-Kenapa-Bocchi-The-Rock-Jadi-Anime-Komedi-Terbaik.jpg",
    "https://vulkk.com/wp-content/uploads/2020/12/panam-palmer-03-480x480.jpg",
    "https://assets.reedpopcdn.com/cyberpunk-2077-romance-options-judy-5077-1607603211095.jpg/BROK/thumbnail/1200x1200/quality/100/cyberpunk-2077-romance-options-judy-5077-1607603211095.jpg",
    "https://i.pinimg.com/originals/fd/7f/4d/fd7f4d69f41224005b5018d42142997b.png",
    "https://i1.sndcdn.com/artworks-000124032539-aq9bce-t500x500.jpg",
  ];

  return (
    <div className="App">
      <Container>
        <Row className="m-auto">
          {data.map((item, index) => {
            return (
              <Card className="m-3" style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src={links[index]}
                  style={{ maxHeight: "230px" }}
                />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>
                    <div>
                      <img
                        src={emailIcon}
                        alt=""
                        style={{ width: "20px", height: "20px" }}
                      />
                      {item.email}
                    </div>
                    <div>
                      <a href={item.website} style={{ textDecoration: "none" }}>
                        <img
                          src={webIcon}
                          alt=""
                          style={{ width: "20px", height: "20px" }}
                        />
                        <span> My Website</span>
                      </a>
                    </div>
                    <div>
                      <img
                        src={companyIcon}
                        alt=""
                        style={{ width: "20px", height: "20px" }}
                      />
                      {item.company.name}
                    </div>
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

export default App;
