import React from "react";
import ReactDOM from "react-dom/client";

import "./index.scss";
import Header from "./components/header";
import Footer from "./components/footer";

const App = () => (
  <>
    <h1>App remote 131212</h1>
    <Header />
    <Footer />
  </>
);
const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(<App />);
