import React from "react";
import ReactDOM from "react-dom/client";

// JSX (transpiled before it reaches the JS Engine) - Parcel - Babel

// JSX => React.createElement => ReactElement-JS Object => HTMLElement(render)
// React Element 

const elem = <span>React Element</span>;
const title = (
  <h1 className="head">
    { elem }
    Namaste React using JSX
  </h1>
);

// React Component
// Class Based Component - OLD React
// Functional Component - New React

// React Functional Component
// const Title = () => (
//   <h1 className="head">Namaste React</h1>
// )

// Component composition - Component inside another component
const HeadingComponent = () => (
  <div id="container">
    {/* <Title /> Component inside a component */}
    { title /*React element inside a component */ }
    <h1 className="head">Namaste React using Functional Component</h1>
  </div>
);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
