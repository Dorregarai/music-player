import React from "react";
import { PageHeader } from "antd";
import LoginButtons from "../loginButtons";
import LogoutButton from "../logoutBuuton";

class Header extends React.Component {
    render() {
        return (
            <div>
                <PageHeader
                    title="Main"
                    subTitle="This is the main page"
                    extra={[
                        <LoginButtons />,
                        <LogoutButton />
                    ]}
                />
            </div>
        )
    }
}

export default Header;