import React from "react";
import ForwardCounter from './components/ForwardCounter'
import BackwardCounter from './components/BackwardCounter'
function App() {
  return (
    <React.Fragment>
     <h1> Let's start! </h1>
     <ForwardCounter/>
     <BackwardCounter/>
    </React.Fragment>
  );
}

export default App;
