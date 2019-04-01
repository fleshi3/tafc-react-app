// TEST src/App2.js

import React from "react";
import List from "./components/List";
import Form from "./components/Form";

const App2 = () => {
  return (
    <div>
      <div className="container">
        <h2>Articles</h2>
        <List />
      </div>
      <div className="container">
        <h2>Add New Article</h2>
        <Form />
      </div>
    </div>
  );
};

export default App2;
