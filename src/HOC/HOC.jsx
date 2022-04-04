import React from 'react'
import { Link } from 'react-router-dom'
import withCounter from './withCounter'

const HOC = ({ count, incrementCount }) => {

  return <>
    <h1>HOC</h1>
    <button onClick={incrementCount}>clicked {count} times</button>
    <h2><Link to="/">Home</Link></h2>
  </>
}

export default withCounter(HOC)