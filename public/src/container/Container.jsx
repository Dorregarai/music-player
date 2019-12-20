import React from 'react';
import Header from '../components/header';
import ContentTable from "../components/table";

class Container extends React.Component {
    render() {
        return (
            <div className="container" style={{ margin: 0 }}>
                <Header />
                <ContentTable />
            </div>
        )
    }
}

export default Container;