import React from "react";
import { Button } from "antd";
import LoginWindow from "../loginWindow";

class LoginButtons extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isClicked: false
        }
    }

    handleButtonClick = () => {
        this.setState({
            isClicked: true
        });
        console.log('clicked!');
    };

    renderLogin = () => {
        if(this.state.isClicked)
            return (
              <LoginWindow isClicked="false"/>
            )
    };

    render() {
        return(
            <div>
                <Button onClick={this.handleButtonClick} type="primary"> Log in </Button>
                <Button> Sign in </Button>
                { this.renderLogin() }
            </div>
        )
    }
}

export default LoginButtons