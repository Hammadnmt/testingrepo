/* eslint-disable no-unused-vars */
import { loggingAndDispatch } from "./logging"
function logger(store) {
    // Must point to the function returned by the previous middleware:
    const next = store.dispatch
  
    return function loggingAndDispatch(action) {
      console.log('dispatching', action)
      let result = next(action)
      console.log('next state', store.getState())
      return result
    }
  }