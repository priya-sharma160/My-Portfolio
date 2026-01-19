import { useState } from "react";

const Profile = () => {
  const [showBio, setShowBio] = useState(false);

  return (
    <>
      <button onClick={() => setShowBio(!showBio)}>
        {showBio ? "Hide Bio" : "Show Bio"}
      </button>

      {showBio && <p>Student and aspiring web developer skilled in JavaScript.</p>}
    </>
  );
};

export default Profile;
