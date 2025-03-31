import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import * as client from "./client";
import { setCurrentUser } from "./reducer";

export default function Signin() {
  const [credentials, setCredentials] = useState<any>({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signin = async () => {
    const user = await client.signin(credentials);
    if (!user) return;
    dispatch(setCurrentUser(user));
    navigate("/Kambaz/Dashboard");
  };

  return (
    <div className="wd-signin-screen">
      <h1>Sign in</h1>
      <input
        value={credentials.username || ""}
        onChange={(e) =>
          setCredentials({ ...credentials, username: e.target.value })
        }
        className="wd-username form-control mb-2"
        placeholder="username"
      />
      <input
        value={credentials.password || ""}
        onChange={(e) =>
          setCredentials({ ...credentials, password: e.target.value })
        }
        type="password"
        className="wd-password form-control mb-2"
        placeholder="password"
      />
      <button onClick={signin} className="wd-signin-btn btn btn-primary mb-2 w-100">
        Sign in
      </button>
      <br />
      <Link to="/Kambaz/Account/Signup" className="wd-signup-link">
        Sign up
      </Link>
    </div>
  );
}
