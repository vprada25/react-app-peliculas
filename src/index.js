import React from "react";
import ReactDOM from "react-dom";



import List from "./container/List";
import Navbar from "./components/navbar/navbar.js";

import "bootswatch/dist/cosmo/bootstrap.min.css";
/* import "./index.css";
 */
const App = () => {
  return (



    <div>
      <div>
        <Navbar></Navbar>
      </div>
      <div className="">
        <div className="container">
          <List />
        </div>
      </div>

    </div>

  );
};

ReactDOM.render(<App />, document.getElementById("root"));