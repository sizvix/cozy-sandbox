import React from 'react'
import Harvest from 'cozy-harvest'

const styles = {
  grid: {
    display: 'grid',
    gridGap: 10,
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px,1fr))'
  }
}

const Intents = () => {
  return (
    <div style={styles.grid}>
      <Harvest />
    </div>
  )
}

export default Intents
