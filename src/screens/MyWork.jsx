import React, { useState, useEffect } from 'react'
import { Grid } from 'semantic-ui-react'
import axios from 'axios'
import WorkCard from '../shared/WorkCard'

const MyWork = () => {
  const [myWork, setMyWork] = useState([])
  const [update] = useState()

  useEffect(() => {
    axios.get('portfolio_info.json').then(res => setMyWork(res.data))
  }, [update])

  const projectsList = myWork.map((project, i) => {
    return (
      <Grid.Column key={i} centered>
        <WorkCard project={project} />
      </Grid.Column>
    )
  })

  return (
    <div style={styles.myWorkContainer}>
      <Grid textAlign='center' stackable={true}>
        <Grid.Row style={styles.title}>My Work!</Grid.Row>
        <Grid.Row columns={3} style={{ maxWidth: 1500 }}>
          {projectsList}
        </Grid.Row>
      </Grid>
    </div>
  )
}

export default MyWork

const styles = {
  myWorkContainer: {
    marginTop: 120,
    padding: '0 25px 50px 25px',
    backgroundColor: 'rgb(22, 33, 41)',

  },
  title: {
    fontSize: 40,
    color: '#fff',
    marginBottom: 75,
    marginTop: 75
  },
}

// background: "linear-gradient(to right, #e66465, #9198e5)"