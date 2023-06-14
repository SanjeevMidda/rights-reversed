import React from 'react'

function Circle({color}) {

    let styles = {
        background: color,
    }

  return (
    <div className="circle" style={styles}></div>
  )
}

export default Circle