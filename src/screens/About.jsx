import React from 'react'
import { Grid, Icon } from 'semantic-ui-react'
import frontEnd from '../assets/front-end.png'
import backEnd from '../assets/back-end.png'
import reactLogo from '../assets/react-logo.png'
import railsLogo from '../assets/rails-logo.png'
import nativeLogo from '../assets/native-logo.png'
import awsLogo from '../assets/aws-logo.png'
import nodeLogo from '../assets/node-logo.png'
import folder from '../assets/folder-icon.jpg'
import { motion } from 'framer-motion'
import {
  languageReactVariants, folderVariants, arrowVariants, languageContainerVariants,
  languageRailsVariants, languageAwsVariants, languageNodeVariants, languageNativeVariants
} from '../styles/animations'
import SkillCard from '../shared/SkillCard'

const About = () => {

  const frontEndParagraph = "The UI is becoming increasingly more important as a main component in tomorrow's web applications. With an eye for detail and fluency in React & React Native, I'm here to create modern and user-friendly interfaces."
  const backEndParagraph = "Any application would be bland without the orchestration of under-the-hood functionality. With proficiency in the workings of a backend and databases, I'm able to build complex applications that involves both client-side and server-side aspects."

  return (
    <div style={styles.aboutContainer}>
      <div id='about'></div>
      <Grid >
        <Grid.Row style={styles.wrapper} columns={2}>
          <div style={styles.title}>Fizzy Creativity & Bold Functionality</div>
          <Grid.Column>
            <div style={styles.body}>
              I’m a focused individual with a positive outlook on life and a passion for creating value. I’m a curious, hardworking, and people-loving person who enjoys a challenge. I get a kick out of improvement and betterment - whether it's within myself, my work, or my projects.
           </div>
            <div style={styles.body}>
              I work with an open mind and treat people with an open heart, and some of my strongest abilities are a great eye for detail, I seek and enjoy responsibility, that I always give it my all, and that I put up high standards for myself.
           </div>
            <div style={styles.body}>
              I dream of a project-oriented workspace where my creative intentions can flourish and where change matters. I aim to reach this through becoming a proficient developer - one way or the other!
           </div>
          </Grid.Column>

          <Grid.Column textAlign='center' centered>
            <h3>Languages</h3>
            <Icon size='huge' name='long arrow alternate down' as={motion.i} style={{ marginTop: 25 }} variants={arrowVariants} animate='animate' />
            <motion.div style={styles.centerContainer} variants={languageContainerVariants} whileHover='hover' initial='initial'>
              <motion.img src={folder} alt='folder' style={styles.folder} variants={folderVariants} />
              <motion.img src={reactLogo} alt='react' style={styles.languages} variants={languageReactVariants} />
              <motion.img src={railsLogo} alt='rails' style={styles.languages} variants={languageRailsVariants} />
              <motion.img src={awsLogo} alt='aws' style={styles.languages} variants={languageAwsVariants} />
              <motion.img src={nodeLogo} alt='node' style={styles.languages} variants={languageNodeVariants} />
              <motion.img src={nativeLogo} alt='native' style={styles.languages} variants={languageNativeVariants} />
            </motion.div>
          </Grid.Column>

        </Grid.Row >
        <Grid.Row centered columns={2} style={styles.wrapper}>
          <div style={styles.title}>Full Stack!</div>
          <Grid.Column textAlign='center'>
            <SkillCard title='Front-End' image={frontEnd} content={frontEndParagraph} />
          </Grid.Column >
          <Grid.Column textAlign='center'>
            <SkillCard title='Back-End' image={backEnd} content={backEndParagraph} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  )
}

export default About

const styles = {
  aboutContainer: {
    backgroundColor: 'white',
    padding: '0 20%'
  },
  wrapper: {
    marginTop: 120
  },
  title: {
    fontSize: 40,
    marginBottom: 75
  },
  body: {
    marginBottom: 20,
    fontSize: 17,
  },
  languages: {
    position: 'absolute',
    width: 120,
    height: 100,
  },
  folder: {
    zIndex: 1,
    position: 'absolute',
    width: 200,
    height: 200,
  },
  centerContainer: {
    marginTop: 75,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

}
