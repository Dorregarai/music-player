import React from 'react';
import { Button } from "antd";

class LogoutButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isVisible: false
        }
    }

    isRender = () => {
        if(this.state.isVisible) return (<Button type="primary" >Log out!</Button>)
    };

    render() {
        return (
            <div>
                {this.isRender()}
            </div>
        )
    }
}

export default LogoutButton