import {
  BrowserRouter, Routes, Route
} from 'react-router-dom'
import Home from './Home'
import HOC from './HOC/HOC'
import RENDER_PROPS from './RENDER_PROPS/RENDER_PROPS'
import Counter from './RENDER_PROPS/Counter'
import UseMemo from './Hooks/useMemo'

export default function App() {

  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/hoc" element={<HOC />} />

      {/* Render Props pattern */}
      <Route path="/render-props" element={<Counter
        render={(count, incrementCount) => <RENDER_PROPS count={count} incrementCount={incrementCount} />}
      />} />
      {/* Another Render Props pattern 
      <Route path='/render-props' element={<Counter>
        {(count, incrementCount) => <RENDER_PROPS count={count} incrementCount={incrementCount} />}
      </Counter>} />
    */}

      <Route path="/usememo" element={<UseMemo />} />
    </Routes>
  </BrowserRouter>
}
