import React from 'react'
import { motion } from 'framer-motion'
import { heroButtonVariants, heroFadeInVariants } from '../styles/animations'
import profilePicture from '../assets/profile.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = (props) => {

  const bubbles = () => {
    let bubbles = []
    let count = 100
    let i = 0
    while (i < count) {

      let x = Math.floor(Math.random() * window.innerWidth)
      let y = Math.floor(Math.random() * window.innerHeight)
      let size = Math.random()*8

      bubbles.push(<motion.i animate={{opacity: [0,1,1,0], y: [0, -200]}} transition={{delay: 1+size, repeat: Infinity, duration: 10+size, times: [0,0.1,0.9,1]}}
        style={{ left: x, top: y, width: 1+size, height: 1+size, 
        background: i % 2 === 0 ? 'aquamarine' : 'transparent',
        border: i % 2 === 0 ? 'none' : '1px solid aquamarine',
        ...styles.bubbles
      }}
      ></motion.i>)
      i++
    }
    return bubbles
  }

  return (
    <motion.div style={styles.heroContainer}
      variants={heroFadeInVariants} initial='initial' animate='animate'
    >
      <div>
      {bubbles()}
      </div>
      <motion.img src={profilePicture} alt="me!" style={styles.heroImage}
        initial='initial' animate='animate'
      />

      <motion.div style={styles.heroText}
        initial='initial' animate='animate'
      >
        Hi there! My name is <span style={{ color: 'aquamarine' }}>Lucas Knudsen.</span>
      </motion.div>
      <motion.div style={styles.heroText}
        initial='initial' animate='animate'
      >
        I'm a full-stack software craftsman.
      </motion.div>
      <AnchorLink href="#about" style={{ textDecoration: 'none' }}>
        <motion.div style={styles.heroButton}
          variants={heroButtonVariants}
          initial='initial' animate='animate'
          whileHover='hover'
        >
          <div style={styles.buttonText}>
            Wanna learn more?
          </div>
          <div style={styles.buttonIcon}>
            <FontAwesomeIcon icon={faChevronDown} />
          </div>
        </motion.div>
      </AnchorLink>
    </motion.div>
  )
}

export default Hero

const styles = {
  heroContainer: {
    height: '102vh',
    backgroundColor: 'rgb(22, 33, 41)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  heroText: {
    color: '#fff',
    fontSize: 40,
    lineHeight: '1.5em',
    fontWeight: 'light',
  },
  heroImage: {
    marginBottom: 45,
    borderRadius: '50%',
    height: '30vh',
    width: '30vh',
    zIndex: 1
  },
  heroButton: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 25,
    padding: 15,
    border: '1px solid #fff',
    cursor: 'pointer',
    color: '#fff',
  },
  buttonText: {
    fontSize: 20,
    marginRight: 15,
  },
  bubbles: {
    position: 'absolute',
    borderRadius: '100%',
  }
}