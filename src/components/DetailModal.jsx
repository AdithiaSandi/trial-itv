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
            <span>{data[profile].email}</span>
          </a>
        </div>
        <div>
          <img
            src={houseIcon}
            alt=""
            style={{ width: '20px', height: '20px' }}
          />{' '}
          <span>{data[profile].address.city}</span>
          <span> City</span>
        </div>
        <div>
          <a href={'tel:+' + data[profile].phone}>
            <img
              src={phoneIcon}
              alt=""
              style={{ width: '20px', height: '20px' }}
            />{' '}
            <span>{data[profile].phone}</span>
          </a>
        </div>
        <div>
          <a href={data[profile].website}>
            <img
              src={webIcon}
              alt=""
              style={{ width: '20px', height: '20px' }}
            />{' '}
            <span>My Website</span>
          </a>
        </div>
        <div>
          <img
            src={companyIcon}
            alt=""
            style={{ width: '20px', height: '20px' }}
          />{' '}
          <span>{data[profile].company.name}</span>
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
