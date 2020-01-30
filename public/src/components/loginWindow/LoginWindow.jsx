import React, { useState } from "react";
import Window from './styled';
import { PageHeader, Input, Button } from "antd";

export default function LogInWindow(props) {
    const [ isLogged, setIsLogged ] = useState(false);

    /*function logging() {
    }*/     // TODO: logging!

    function loginWindowRender() {
        if(props.child === 'Log In') {
            return (
                <div>
                    <Window>
                        <PageHeader
                            title='Log in'
                            subTitle='Input your login and password'
                        />
                        <Input
                            size='large'
                            placeholder='Login'
                        />
                        <Input
                            size='large'
                            placeholder='Password'
                            type='password'
                        />
                        <Button
                            onClick={() => {
                            }}
                            style={{'max-width': '100px'}}
                            type='primary'>{props.child}
                        </Button>
                    </Window>
                </div>
            )
        }
        return (
            <div>
                <Window>
                    <PageHeader
                        title='Log in'
                        subTitle='Input your login and password'
                    />
                    <Input
                        size='large'
                        placeholder='Login'
                    />
                    <Input
                        size='large'
                        placeholder='Password'
                        type='password'
                    />
                    <Input
                        size='large'
                        placeholder='Confirm Password'
                        type='password'
                    />
                    <Button
                        onClick={() => {
                        }}
                        style={{'max-width': '100px'}}
                        type='primary'>{props.child}
                    </Button>
                </Window>
            </div>
        )
    }

    return(
        loginWindowRender()
    )
}