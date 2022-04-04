import React from 'react'
import { Link } from 'react-router-dom'

const RENDER_PROPS = ({ count, incrementCount }) => {

  return <>
    <h1>Render Props</h1>
    <button onClick={incrementCount}>clicked {count} times</button>
    <h2><Link to="/">Home</Link></h2>
  </>
}

export default RENDER_PROPS