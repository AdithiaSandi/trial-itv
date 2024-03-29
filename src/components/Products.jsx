import React from 'react'
import { Container, Row, Col, Tab, Nav, Carousel } from 'react-bootstrap'
import projImg1 from '../assets/e-commerce.png'
import projImg2 from '../assets/immersive-dashboard.png'
import projImg3 from '../assets/rozhok-app.png'
import { ProductCard } from './ProductCard'
import './styles/Products.css'

export const Products = () => {
  const projects = [
    {
      title: 'E-Commerce Clone',
      description: 'Online shopping site where users can buy things.',
      imgUrl: projImg1
    },
    {
      title: 'Immersive Dashboard',
      description:
        'A website for class instructors to manage data about their students.',
      imgUrl: projImg2
    },
    {
      title: 'Rozhok App',
      description:
        'A platform that connects people that wish to rid their recycle-worthy junk items with recycling businesses.',
      imgUrl: projImg3
    },
    {
      title: 'Rozhok App',
      description:
        'API for flow “client sell junk items” as it is one of the main flow of user “Client”.',
      imgUrl: projImg3
    }
  ]

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p className="section-description">
              Fugiat exercitation tempor dolor enim nulla sunt et adipisicing
              officia consequat in duis quis nulla. Tempor qui in exercitation
              est. Lorem ea ad minim sint Lorem occaecat irure excepteur.
            </p>

            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link className="text-truncate" eventKey="first">FRONTEND</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="text-truncate" eventKey="second">BACKEND</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="text-truncate" eventKey="third">UI/UX</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Carousel indicators={false} variant='dark'>
                    {projects
                      .filter((project, index) => index < 3)
                      .map((project, index) => {
                        return (
                          <Carousel.Item key={index}>
                            <ProductCard project={project} />
                          </Carousel.Item>
                        )
                      })}
                  </Carousel>
                  <Row>
                    {projects
                      .filter((project, index) => index < 3)
                      .map((project, index) => {
                        return <ProductCard key={index} project={project} />
                      })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Row>
                    <ProductCard key={3} project={projects[3]} />
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="third" style={{ color: '#b8b8b8' }}>
                  Consectetur minim tempor cillum nostrud elit nostrud quis
                  consequat eiusmod velit nostrud consectetur do. Veniam minim
                  sint anim est Lorem occaecat officia eu id. Anim duis
                  voluptate ea in excepteur tempor consequat eu in nostrud
                  adipisicing velit do. Est minim non eu sit consectetur culpa
                  esse. Esse mollit veniam commodo ipsum dolore ipsum et aliqua
                  velit. Deserunt aute proident culpa nisi.
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
