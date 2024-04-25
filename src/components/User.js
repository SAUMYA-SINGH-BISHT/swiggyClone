import { useState } from "react";

const User = (props) => {
  const [count, setCount] = useState(0);

  const inc = () => {
    setCount(count + 1);
  };
  return (
    <div className="user-card">
      <h2>count:{count}</h2>
      <button onClick={inc}>Click me</button>
      <h2> Name: {props.name}</h2>
      <h2> Location :Columbia</h2>
      <h3> contact: Mat karo</h3>
      <h3>Age:{props.age}</h3>
    </div>
  );
};
export default User;
