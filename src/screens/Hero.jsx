import React from 'react'
import { motion } from 'framer-motion'
import { heroButtonVariants, heroFadeInVariants } from '../styles/animations'
import profilePicture from '../assets/profile.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = (props) => {

  return (
    <motion.div style={styles.heroContainer}
      variants={heroFadeInVariants} initial='initial' animate='animate'
    >
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
    width: '30vh'
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
  buttonIcon: {

  }
}