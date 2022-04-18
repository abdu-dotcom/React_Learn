import React from "react";

class Button extends React.Component {
    state = {
        namaDepan: "abduh",
    }
    changeButton = () => {
        this.setState({
            namaDepan: "Muhammad Abdu",
        })
        console.log("tombol berhasil diklik");
}

    render() {
        return (
            <div>
                <h1>{this.state.namaDepan}</h1>
                <button onClick={this.changeButton}> click </button>
            </div>
        )
    }
}

export default Button;