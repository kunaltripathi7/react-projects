import { useDispatch } from "react-redux";
import Button from "../components/Button";
import { useState } from "react";
import { updateUser } from "../slices/menuSlice";

function Login() {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  return (
    <div className="h-screen w-screen bg-stone-950 flex items-center justify-center">
      <div className="bg-stone-700 h-52 w-72 rounded text-center flex flex-col items-center">
        <h1 className="text-stone-100 text-2xl py-5">
          What should we call you?
        </h1>
        <input
          defaultValue="xyz"
          className="border-2 border-stone-50 rounded-lg px-2 py-1 focus:outline-none mb-6 focus:border-stone-900 bg-stone-200"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Button
          type="primary"
          to="/home"
          onClick={() => dispatch(updateUser(username))}
        >
          Login
        </Button>
      </div>
    </div>
  );
}

export default Login;
