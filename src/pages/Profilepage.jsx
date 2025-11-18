import React, { useEffect, useState } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";

const ProfilePage = () => {
  const { name } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [profileName, setProfileName] = useState("");

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn");
    if (!loggedIn) {
      navigate("/signin");
      return;
    }

    // Try to get profile name from URL param, then from location state, then localStorage
    const activeProfile =
      name || location.state?.profileName || localStorage.getItem("activeProfile");

    if (activeProfile) {
      setProfileName(activeProfile);
      localStorage.setItem("activeProfile", activeProfile);
    } else {
      navigate("/watch");
    }
  }, [name, location.state, navigate]);

  return (
    <div style={{ color: "white", textAlign: "center", marginTop: "50px" }}>
      <h1 className="hema">Welcome, {profileName} 👋</h1>
      <p>Your movie dashboard is loading...</p>
    </div>
  );
};

export default ProfilePage;
