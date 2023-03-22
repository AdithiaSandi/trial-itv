import React from 'react'
import { Modal } from 'react-bootstrap'
import emailIcon from '../assets/email-svgrepo-com.svg'
import webIcon from '../assets/website-ui-web-svgrepo-com.svg'
import companyIcon from '../assets/company-svgrepo-com.svg'
import houseIcon from '../assets/house-svgrepo-com.svg'
import phoneIcon from '../assets/phone-outgoing-svgrepo-com.svg'
import PropTypes from 'prop-types'

export const DetailModal = ({ show, handleClose, data, profile }) => {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>{data[profile].username}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>{data[profile].name}</div>
        <div>
          <a href={'mailto: abc@example.com' + data[profile].emai}>
            <img
              src={emailIcon}
              alt=""
              style={{ width: '20px', height: '20px' }}
            />{' '}
            {data[profile].email}
          </a>
        </div>
        <div>
          <img
            src={houseIcon}
            alt=""
            style={{ width: '20px', height: '20px' }}
          />{' '}
          {data[profile].address.city}
          <span> City</span>
        </div>
        <div>
          <a href={'tel:+' + data[profile].phone}>
            <img
              src={phoneIcon}
              alt=""
              style={{ width: '20px', height: '20px' }}
            />{' '}
            {data[profile].phone}
          </a>
        </div>
        <div>
          <a href={data[profile].website}>
            <img
              src={webIcon}
              alt=""
              style={{ width: '20px', height: '20px' }}
            />{' '}
            My Website
          </a>
        </div>
        <div>
          <img
            src={companyIcon}
            alt=""
            style={{ width: '20px', height: '20px' }}
          />{' '}
          {data[profile].company.name}
        </div>
      </Modal.Body>
    </Modal>
  )
}

DetailModal.propTypes = {
  show: PropTypes.bool,
  handleClose: PropTypes.func,
  data: PropTypes.array,
  profile: PropTypes.number
}
