import React from "react";

function Home(props) {
  return (
    <div>
      <h1>
        Hello Page with top {props.name} = {props.age}
        {props.info.name} {props.info.age} {props.info.gender}
      </h1>
    </div>
  );
}

export default Home;
