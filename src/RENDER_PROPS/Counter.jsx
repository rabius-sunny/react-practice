import { useState } from "react"

export default function Counter({ render }) {

  const [count, setCount] = useState(0)
  const incrementCount = () => setCount((prev) => prev + 1)

  return render(count, incrementCount)
  /* 
  if we use children method defined in App.jsx, we should receive children as props and use children(count, incrementCount)
  */
}
