import { motion } from 'framer-motion'

export const bubbles = (directionNum, parent) => {
  let bubbles = []
  let count = 50
  let i = 0
  while (i < count) {
    let y = Math.floor(Math.random() * window.innerHeight)
    let x = Math.floor(Math.random() * window.innerWidth)
    let size = Math.random()*8

    bubbles.push(<motion.i animate={{opacity: [0,1,1,0], y: [0, directionNum]}} transition={{delay: 1+size, repeat: Infinity, duration: 10+size, times: [0,0.1,0.9,1]}}
      style={{ left: x, top: y, width: 1+size, height: 1+size, 
      background: i % 2 === 0 ? 'aquamarine' : 'transparent',
      border: i % 2 === 0 ? 'none' : '1px solid aquamarine',
      position: 'absolute', borderRadius: '100%',
    }}
    ></motion.i>)
    i++
  }
  return bubbles
}