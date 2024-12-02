import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useLogoutUserMutation, reset } from "./features/auth/authSlice";
import Button from "./components/Button";
function App() {
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [logoutUser] = useLogoutUserMutation();

  async function logoutButton() {
    await logoutUser();
    navigate("/login");
    dispatch(reset());

    // Navigate to login page or reset the state if needed.
  }
  return (
    <>
      {user ? (
        <Button onClick={logoutButton} desc={"Logout"} />
      ) : (
        <i>Not logged in</i>
      )}
      <h3>Hello</h3>
    </>
  );
}
export default App;
