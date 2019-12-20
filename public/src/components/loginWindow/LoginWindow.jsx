import React from "react";
import Window from './styled';
import { PageHeader, Input, Button } from "antd";


class LoginWindow extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            isLogged: false
        }
    }

    handleLoginClick = () => {
        this.setState({
            isLogged: true
        })
    };

    render() {
        return(
            <div style={ {display: 'flex', 'justify-content': 'space-around'} }>
                <Window>
                    <PageHeader
                        title='Log in'
                        subTitle='Input your login and password'
                    />
                    <Input size='large' placeholder='Login'/>
                    <Input size='large' placeholder='Password' type='password'/>
                    <Button onClick={this.handleLoginClick} style={ {'max-width': '100px'} } type='primary'>Log in!</Button>
                </Window>
            </div>
        )
    }
}

export default LoginWindow