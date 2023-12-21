// Importa React correctamente
import React from "react";
import { createRoot } from "react-dom";

const root = document.querySelector("#root");

const app = <div>My wishlist from React</div>;

const rootElement = createRoot(root);
rootElement.render(app);