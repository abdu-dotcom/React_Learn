import React from "react";
import Header from "./Header";
import List from "./List";

class App extends React.Component {
    state = {
        name: "12-04-2022",
        text: "",
    }

    click = () => {
        this.setState({
            name: this.state.text,
            text: ""
        })
    }

    change = e => {
        this.setState({
            text: e.target.value
        })
    }
    render() {
        return (

        <div>
            <Header/>
                Hello World
                <input type="text" value={this.state.text} onChange={this.change}/>
                <button onClick={this.click}> click </button>
                <p>{this.state.name }</p>
                <List name="Props name list" date={this.state.date}>this children form List </List>
        </div>
        )
    }
}

// untuk pembuat component di React bisa menggunakan class atau function

// const App = () => {
// return (
//     <div>
//         Hello World
//         </div>
//     )
// }

export default App;