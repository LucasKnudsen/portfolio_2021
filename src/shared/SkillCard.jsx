import React from 'react'
import { fullStackVariants } from '../styles/animations'
import { motion } from 'framer-motion'

const SkillCard = ({ title, image, content }) => {
  return (
    <motion.div style={styles.cardWrapper} whileHover='hover' >
      <motion.img src={image} variants={fullStackVariants} />
      <div style={styles.title}>{title}</div>
      <p style={styles.content}>{content}</p>
    </motion.div>
  )
}

export default SkillCard

const styles = {
  cardWrapper: {
    display: 'flex',
    backgroundColor: 'rgb(22, 33, 41)',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: '50px 25px',
    color: 'white',
    flexDirection: 'column',
    height: '100%',
  },
  title: {
    fontSize: 25,
    margin: '25px 0',
    fontWeight: 'bold'
  },
  content: {
    fontSize: 17
  }
}