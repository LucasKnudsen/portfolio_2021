export const heroButtonVariants = {
  initial: {
    opacity: 0,
    y: 50
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 1.5,
      duration: 2,
    }
  },
  hover: {
    backgroundColor: 'aquamarine',
    color: 'rgb(22, 33, 41)',
    scale: 1.08,
    transition: {
      duration: 0.8,
      ease: [0.43, 0.13, 0.23, 0.96]
    }
  }
}

export const heroFadeInVariants = {
  animate: {
    transition: {
      duration: 1,
      staggerChildren: 0.4,
      when: "beforeChildren"
    },
  }
}

export const heroContentFadeInVariants = {
  initial: {
    opacity: 0,
    y: 50
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.5,

    }
  }
}

export const languageContainerVariants = {
  hover: {
    transition: {
      staggerChildren: 0.3
    }
  },
  initial: {

  }
}

export const folderVariants = {
  initial: {

  },
  hover: {
    scale: 1.1
  }
}

export const languageReactVariants = {
  initial: {
    x: 0,
  },
  hover: {
    x: [null, 160],
    y: [null, -75, 35],
    transition: {
      duration: 0.3, times: [0, 0.2, 1],
      type: 'spring',
    }
  }
}

export const languageRailsVariants = {
  initial: {
    x: 0,
  },
  hover: {
    x: [null, -170],
    y: [null, -65, 25],
    transition: {
      duration: 0.3, times: [0, 0.2, 1],
      type: 'spring',
    }
  }
}

export const languageAwsVariants = {
  initial: {
    x: 0,
  },
  hover: {
    x: [null, 150],
    y: [null, -100, -90],
    transition: {
      duration: 0.3, times: [0, 0.4, 1],
      type: 'spring',
    }
  }
}

export const languageNodeVariants = {
  initial: {
    x: 0,
  },
  hover: {
    x: [null, -150],
    y: [null, -105, -70],
    transition: {
      duration: 0.3, times: [0, 0.3, 1],
      type: 'spring',
    }
  }
}

export const languageNativeVariants = {
  initial: {
    x: 0,
  },
  hover: {
    x: [null, -20],
    y: [null, -80, 115],
    zIndex: 1,
    transition: {
      duration: 0.3, times: [0, 0.4, 1],
      type: 'spring',
    }
  }
}

export const arrowVariants = {

  animate: {
    y: [null, -10, 0],
    transition: {
      duration: 1.3,
      repeat: Infinity
    }
  }
}

export const fullStackVariants = {
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.6
    }
  }
}

export const portfolioHoverVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 }
}