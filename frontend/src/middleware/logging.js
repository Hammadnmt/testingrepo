export const loggingAndDispatch = (storeAPI) => (next) => (action) => {
  console.log("Dispatching action:", action); // Log the action being dispatched
  const result = next(action); // Pass the action to the next middleware/reducer
  console.log("Next state:", storeAPI.getState()); // Log the updated state
  return result; // Return the result of the action
};
