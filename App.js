import React from "react";
import ReactDOM from "react-dom/client"; 

const parent = React.createElement(
    "div",
    { id: "parent" },
    [React.createElement("div", { id: "child1" },
        [React.createElement('h1', {}, "This is namaste react"), 
         React.createElement('h2', {}, "Lets learn React From Scratch")]), 
    React.createElement("div", { id: "child2" },
            [React.createElement('h1', {}, "I am in h1 tag"), 
             React.createElement('h2', {}, "I am in h2 tag")])]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);