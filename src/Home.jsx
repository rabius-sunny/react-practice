import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
      <h1>Home</h1>
      <h1>
        <Link to='/hoc'>HOC</Link>
      </h1>
      <h1>
        <Link to='/render-props'>RENDER PROPS</Link>
      </h1>
      <h1>
        <Link to='/usememo'>Use Memo</Link>
      </h1>
      <h1>
        <Link to='/i18next'>I18Next</Link>
      </h1>
    </>
  )
}
