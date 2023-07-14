import React from 'react'

function Player(props) {
  return (
    <div>
        <h2>Player: {props.whichPlayer}</h2>
        <h3>Win: {props.score}</h3>
    </div>
  )
}

export default Player