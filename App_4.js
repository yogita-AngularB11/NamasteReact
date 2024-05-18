
    {/* just creating h1 element in react */}

    const heading=React.createElement("h1",{id:"heading"},"Hello World From React..!!");
    {/* put h1 on dom / browser */}

    const root=ReactDOM.createRoot(document.getElementById("root"));
    root.render(heading);
