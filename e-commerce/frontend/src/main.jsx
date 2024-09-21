
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom"; 
import "slick-carousel/slick/slick.css"; 
import CartProvider  from "./context/CartProvider";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";

import MainLayout from "./layouts/MainLayout";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
  <CartProvider>
        <MainLayout>
      <App />
    </MainLayout>
    </CartProvider>
  </BrowserRouter>
 
);