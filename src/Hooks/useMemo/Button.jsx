import { memo } from "react"

function Button({ handleClick, children }) {
  console.log('rendering button', children)
  return <button style={{ padding: 15, backgroundColor: 'slateblue', color: 'white', fontWeight: 'bold', fontSize: '1.2rem' }} onClick={handleClick}>
    {children}
  </button>
}

export default memo(Button)