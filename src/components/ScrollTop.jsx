import React, { useState } from 'react'
import './ScrollTop.css'
import { Button } from 'react-bootstrap'

export const ScrollTop = () => {
  const [isScrolled, setIsScrolled] = useState(window.scrollY > 300)
  const Scrolled = () => {
    const y = window.scrollY
    if (y >= 300) {
      setIsScrolled(true)
    } else {
      setIsScrolled(false)
    }
  }

  window.addEventListener('scroll', Scrolled)

  return (
    <Button
      variant="info"
      className={
        isScrolled
          ? 'btn-scroll-top primary scrolled'
          : 'btn-scroll-top primary'
      }
      onClick={() => window.scrollTo(0, 0)}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="bi bi-arrow-up text-white"
        viewBox="0 0 16 16"
      >
        <path
          fillRule="evenodd"
          d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"
        />
      </svg>
    </Button>
  )
}
