import React, { useEffect, useState } from 'react'
import './Banner.css'

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const toRotate = ['WORLD', 'FRIEND', 'BUBBLE']
  const [text, setText] = useState('')
  const [delta, setDelta] = useState(300 - Math.random() * 100)
  const period = 2000
  const [font, setFont] = useState('')
  const family = [
    'serif',
    'sansserif',
    'monospace',
    'cursive',
    'fantasy',
    'emoji',
    'math',
    'fangsong'
  ]

  useEffect(() => {
    const ticker = setInterval(() => {
      tick()
    }, delta)

    return () => {
      clearInterval(ticker)
    }
  }, [text])

  const tick = () => {
    const i = loopNum % toRotate.length
    const fullText = toRotate[i]
    const updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1)
    setText(updatedText)
    setFont(family[Math.floor(Math.random() * family.length)])

    if (isDeleting && delta > 250) {
      setDelta((previous) => previous / 2)
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true)
      setDelta(period)
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false)
      setLoopNum(loopNum + 1)
      setDelta(500)
    }
  }

  return (
    <div className="container banner" id='banner'>
      <div className="wrapper">
        <div className="overlay">
          <div className="content">
            <h1 className='overflow-hidden'>
              HELLO{' '}
              <div
                className={font}
                style={{ textDecoration: 'underline', minHeight: '65px' }}
              >
                {text}
              </div>
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
              amet nihil debitis ea voluptate fugit sequi ex, expedita optio
              ipsum minus dolores sed a excepturi adipisci odit repellendus
              doloribus non.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
