import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const WorkCard = ({ project }) => {
  const [hover, setHover] = useState(false)
  const { backgroundColor, backgroundImage, title, content, url, madeWith } = project

  const styles = {
    cardContainer: {
      borderRadius: 10,
      margin: '0 auto',
      minWidth: '30%',
      maxWidth: 500,
      height: '18vw',
      maxHeight: 300,
      backgroundImage: backgroundImage,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      marginBottom: 25,
    },
    titleContainer: {
      borderRadius: 10,
      fontSize: '2vw',
      fontWeight: 'bold',
      textTransform: 'uppercase',
      height: '100%',
      width: '100%',
      backgroundColor: backgroundColor,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      color: 'white',
      padding: 60,

    },
    contentContainer: {
      position: 'relative',
      borderRadius: 10,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      height: '100%',
      width: '100%',
      color: 'white',
      fontSize: '1vw',
      background: "#141c3a",
      padding: 15

    },
    title: {
      lineHeight: 1.1
    },
    button: {
      cursor: 'pointer',
      border: '2px solid #fff',
      padding: 15,
      borderRadius: 20,
      fontSize: '0.8vw',
      fontWeight: 'bold',
    }

  }

  return (
    <div style={styles.cardContainer} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <AnimatePresence exitBeforeEnter>
        {hover ? (
          <motion.div style={styles.contentContainer} initial={{ opacity: 0 }}
            animate={{ opacity: 1 }} exit={{ opacity: 0 }} key='hovering'
          >
            <p>{content}</p>
            <motion.div style={styles.button} whileHover={{ color: '#333', background: 'aquamarine', transition: { duration: 0.2 } }}>
              Visit project
            </motion.div>
            <p style={{position: 'absolute', top: '85%', fontSize: 12}}>Made with: {madeWith}</p>
          </motion.div>
        ) : (
            <motion.div style={styles.titleContainer} initial={false}
              animate={{ opacity: 1 }} exit={{ opacity: 0 }} key='initial'
            >
              <div style={styles.title}>{title}</div>
            </motion.div>
          )}
      </AnimatePresence>
    </div >
  )
}

export default WorkCard

