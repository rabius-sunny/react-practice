import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import HOC from './HOC/HOC'
import RENDER_PROPS from './RENDER_PROPS/RENDER_PROPS'
import Counter from './RENDER_PROPS/Counter'
import UseMemo from './Hooks/useMemo_useCallback'
import I18Next from './i18n'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/hoc' element={<HOC />} />
        <Route path='/i18next' element={<I18Next />} />

        {/* Render Props pattern */}
        <Route
          path='/render-props'
          element={
            <Counter
              render={(count, incrementCount) => (
                <RENDER_PROPS count={count} incrementCount={incrementCount} />
              )}
            />
          }
        />
        {/* Another Render Props wrapper pattern 
      <Route path='/render-props' element={<Counter>
        {(count, incrementCount) => <RENDER_PROPS count={count} incrementCount={incrementCount} />}
      </Counter>} />
    */}

        <Route path='/usememo' element={<UseMemo />} />
      </Routes>
    </BrowserRouter>
  )
}
