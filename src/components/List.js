import React from "react";
import ListItem from "./ListItem";

class List extends React.Component {
    render() {
        return (
            <div>
                <h2> List Component</h2>
                <h3>{this.props.date}</h3>
                <ListItem/> 
            </div>
        )
    }
}

export default List;