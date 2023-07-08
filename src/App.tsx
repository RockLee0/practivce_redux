// import {useSelector,useDispatch} from "react-redux"
// import type { RootState } from './redux/store'
import { decrement, increment, incrementByAmount } from "./redux/features/counter/counterSlice"
import { useAppDispatch, useAppSelector } from "./redux/hook"

function App() {
  // const {count} = useSelector((state: RootState) => state.count)
  const {count} = useAppSelector((state) => state.count)
  // const dispatch = useDispatch()
  const dispatch = useAppDispatch()


  return (
    <div>
      <div>
       <button aria-label="Increment value" onClick={() => dispatch(increment())}>
        increment
       </button>
       <div>{count}</div>
       <button aria-label="Decrement value" onClick={() => dispatch(decrement())}>
        decrement
       </button>
       <button onClick={() => dispatch(incrementByAmount(5))}>
        Incliment by payload
       </button>
      </div>      
    </div>
  )
}

export default App
