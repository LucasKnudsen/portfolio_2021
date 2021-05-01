import React from 'react'
import { motion } from 'framer-motion'
import { heroButtonVariants, heroContentFadeInVariants, heroFadeInVariants } from '../styles/animations'
import { bubbles } from '../modules/helperFunctions'
import profilePicture from '../assets/profile.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = (props) => {

  return (
    <motion.div style={styles.heroContainer}
      variants={heroFadeInVariants} initial='initial' animate='animate'
    >
      <div>
        {bubbles(-200)}
        {bubbles(200)}
      </div>
      <motion.img src={profilePicture} alt="me!" style={styles.heroImage}
         initial={{opacity: 0}} animate={{opacity: 1, transition: {duration: 1.5}}}
      />
      <motion.div style={styles.heroText}
        variants={heroContentFadeInVariants}
      >
        Hi there! My name is <span style={{ color: 'aquamarine' }}>Lucas Knudsen.</span>
      </motion.div>
      <motion.div style={styles.heroText}
        variants={heroContentFadeInVariants}
      >
        I'm a full-stack software craftsman.
      </motion.div>
      <AnchorLink href="#about" style={{ textDecoration: 'none', background: 'transparent' }}>
        <motion.div style={styles.heroButton}
          variants={heroButtonVariants}
          whileHover='hover'
          initial='initial' animate='animate'
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
    width: '15%',
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
}