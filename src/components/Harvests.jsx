import React from 'react'
import Harvest from 'cozy-harvest'

console.log('AAAAAAAAAAAAAAAAAAAAAAAa', Harvest) // eslint-disable-line no-console

const styles = {
  grid: {
    display: 'grid',
    gridGap: 10,
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px,1fr))'
  }
}

const Harvests = () => {
  return (
    <div style={styles.grid}>
      re :
      <Harvest />
    </div>
  )
}

export default Harvests
