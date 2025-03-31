import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as client from "./client";
import { setCurrentUser } from "./reducer";

export default function Profile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const [profile, setProfile] = useState<any>(currentUser || {});

  const updateProfile = async () => {
    const updatedProfile = await client.updateUser(profile);
    dispatch(setCurrentUser(updatedProfile));
    setProfile(updatedProfile);
  };

  const signout = async () => {
    await client.signout();
    dispatch(setCurrentUser(null));
    navigate("/Kambaz/Account/Signin");
  };

  return (
    <div id="wd-profile-screen">
      <h3>Profile</h3>
      {profile && (
        <div>
          <label>Username</label>
          <input
            value={profile.username || ""}
            onChange={(e) =>
              setProfile({ ...profile, username: e.target.value })
            }
            className="form-control mb-2"
          />
          <label>Password</label>
          <input
            type="password"
            value={profile.password || ""}
            onChange={(e) =>
              setProfile({ ...profile, password: e.target.value })
            }
            className="form-control mb-2"
          />
          <button onClick={updateProfile} className="btn btn-primary w-100 mb-2">
            Update
          </button>
          <button onClick={signout} className="wd-signout-btn btn btn-danger w-100">
            Sign out
          </button>
        </div>
      )}
    </div>
  );
}
