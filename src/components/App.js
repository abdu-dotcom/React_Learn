import React from "react";
import Header from "./Header";
import List from "./List";
import "../style/App.css";

const App = () => {

    return (
        <div className="container">
            <Header/>
            <h1 style={mystyle}>Hello World</h1>
            <List/>
        </div>
    )
}
const mystyle = {
    color: "blue",
    fontSize: "20px"
}

export default App;