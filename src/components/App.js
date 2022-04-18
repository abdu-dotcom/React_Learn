import React from "react";
import Header from "./Header";
import List from "./List";

class App extends React.Component {

    render() {
        return (
        <div>
            <Header/>
                Hello World
                <p> Nama {this.state.nama} </p>
                <p> Nama {this.state.umur} </p>
                 {this.state.books.map(item => (  
          <li>  
            {item}  
          </li>  
        ))}  
                <List/>
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