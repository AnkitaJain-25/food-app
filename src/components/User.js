import { useState } from "react";

const User = ({ name }) => {
  const [count, setCount] = useState(0);
  const [count2] = useState(2);

  useEffect(() => {
    getUserInfo();
  }, []);

  const getUserInfo = async () => {
    const data = await fetch("https://api.github.com/users/AnkitaJain-25");
  };

  return (
    <div className="user-card">
      <h1>Count: {count}</h1>
      <h1>Count2: {count2}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Count Increase
      </button>
      <h2>Name: {name}</h2>
      <h3>Location: Indore</h3>
      <h4>Contact: ankita.jain25@outlook.com</h4>
    </div>
  );
};

export default User;
