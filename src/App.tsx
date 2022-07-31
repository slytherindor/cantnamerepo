import * as React from "react";
import { render } from 'react-dom';
const App = () => {
  return(
    <h1 className={"text-red-600"}>Hello World</h1>
  );
}
render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root'),
)
