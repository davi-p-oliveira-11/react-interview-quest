import React from "react";

export default function Child({ valueOfProps, changeName }) {
  return (
    <div>
      <h1>{valueOfProps}</h1>

      <button onClick={() => changeName("Hello there")}>Change Name 2</button>
    </div>
  );
}
