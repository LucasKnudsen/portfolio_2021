import React from 'react'
import { Grid } from 'semantic-ui-react'

const Craftmanship = () => {
  return (
    <div style={styles.craftContainer}>
      <Grid style={styles.wrapper}>
      <p style={styles.title}>Software Craftmanship</p>
      </Grid>
    </div>
  )
}

export default Craftmanship

const styles = {
  craftContainer: {
    height: 500
  },
  wrapper: {
    justifyContent: 'center',
    marginTop: 75
  },
  title: {
    fontSize: 40,
    marginBottom: 75
  }
}