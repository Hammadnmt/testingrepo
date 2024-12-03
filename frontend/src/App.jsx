import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout, reset } from "./features/auth/authSlice";
import Button from "./components/Button";
// import { NavBar } from "./components/NavBar";
import "./NavBar.css";
function App() {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function logoutButton() {
    dispatch(logout());
    dispatch(reset());
    navigate("/login");

    // Navigate to login page or reset the state if needed.
  }
  return (
    <>
      <h1>Bro Code</h1>
      <Button onClick={logoutButton} desc={"Logout"} />

      {/* <nav className="navbar">
        <ul>
          <li>
            <NavLink to={"/login"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/About"}>About</NavLink>
          </li>
          <li>
            <NavLink to={"/Contact"}>Contact</NavLink>
          </li>
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
        </ul>
      </nav>

      <main>
        <h3>This is the Home page</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam minus
          eveniet recusandae dicta similique numquam voluptas quos tempore
          cupiditate pariatur, laudantium fugit alias quia veritatis nesciunt
          quaerat molestias adipisci assumenda.
        </p>
      </main> */}
    </>
  );
}
export default App;
