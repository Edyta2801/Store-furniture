import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ProductsProvider } from "./context/products_context";
import { FilterProvider } from "./context/filter_context";
import { CartProvider } from "./context/cart_context";
import { UserProvider } from "./context/user_context";
import { Auth0Provider } from "@auth0/auth0-react";
const root = ReactDOM.createRoot(document.getElementById("root"));


// domain={process.env.REACT_APP_AUTH_DOMAIN}
// clientId={process.env.REACT_APP_CLIENT_ID}


root.render(
  <Auth0Provider
    domain="dev-im1wj6ecuropzjst.us.auth0.com"
    clientId="VOmqtRXYVAMyDWC1M8cMfVNo4Gb293uy"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
    cacheLocation="localstorage"
  >
    <UserProvider>
      <ProductsProvider>
        <FilterProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </FilterProvider>
      </ProductsProvider>
    </UserProvider>
  </Auth0Provider>
);
