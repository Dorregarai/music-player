import React from "react";
import Header from '../../components/header';
import { Table } from "antd";

class ContentTable extends React.Component{
    componentDidMount() {
        setTimeout(this.props.getTracksAll(1), 5000);
    }

    columns = [
        {
            title: 'Track',
            dataIndex: 'name',
            key: 'track'
        },
        {
            title: 'Artist',
            dataIndex: 'artistName',
            key: 'artist'
        }
    ];

    render() {
        console.log(this.props);
        return (
            <div>
                <Header />
                <Table dataSource={this.props.data} columns={this.columns} />
            </div>
        )
    }
}

export default ContentTable