import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

export function AddScript(scriptSource) {
  const script = document.createElement('script');
  script.src = scriptSource;
  script.async = true;
  document.body.appendChild(script);
}

export function AddModule(scriptSource) {
  const script = document.createElement('script');
  script.src = scriptSource;
  script.async = true;
  script.type = "module"
  
  document.body.appendChild(script);
}



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App>
        {AddScript('./assets/JS/main.js')}
        {AddModule('./assets/JS/autoLangSelect.js')}
        </App>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
