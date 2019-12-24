import React from 'react';
import ContentTable from "../components/table";

class Container extends React.Component {
    render() {
        return (
            <div className="container" style={{ margin: 0 }}>
                <ContentTable />
            </div>
        )
    }
}

export default Container;