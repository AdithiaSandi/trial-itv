import React from 'react'
import { Col } from 'react-bootstrap'
import PropTypes from 'prop-types'

export const ProductCard = ({ project }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={project.imgUrl} alt="" />
        <div className="proj-txtx">
          <h4>{project.title}</h4>
          <span>{project.description}</span>
        </div>
      </div>
    </Col>
  )
}

ProductCard.propTypes = {
  project: PropTypes.object
}
