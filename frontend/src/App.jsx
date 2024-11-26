import { useEffect, useState } from "react";
import Counter from "./components/Counter";
import axios from "axios";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";

function App() {
  const [message, setMessage] = useState(null);
  useEffect(() => {
    axios
      .get("/api/product/")
      .then((response) => {
        console.log(response);
        setMessage(response.data.data);
      })
      .catch((error) => setMessage(error.message));
  }, []);
  return (
    <>
      <Login />
      <Counter />
      <Counter />
    </>
  );
}
export default App;
