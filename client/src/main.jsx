import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import "./index.css";
import { Auth0ProviderWithNavigate } from "./auth0-provider-with-navigate.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
 
    <BrowserRouter> 
    <Provider store={store}>
      <Auth0ProviderWithNavigate>      
      <App /> 
      </Auth0ProviderWithNavigate>
      </Provider>
    </BrowserRouter>
 
);