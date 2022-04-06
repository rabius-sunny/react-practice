import { memo } from "react"

function Title() {
  console.log('rendering title...')

  return (
    <h1>This is the Title</h1>
  )
}

export default memo(Title)