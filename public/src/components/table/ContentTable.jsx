import React from "react";
import { Table } from "antd";

class ContentTable extends React.Component{
    columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id'
        },
        {
            title: 'Track',
            dataIndex: 'track',
            key: 'track'
        },
        {
            title: 'Artist',
            dataIndex: 'artist',
            key: 'artist'
        }
    ];

    dataSource = [
        {
            id: 1,
            track: 'Sonne',
            artist: 'Rammstein'
        },
        {
            id: 2,
            track: 'Deutchland',
            artist: 'Rammstein'
        }
    ];

    render() {
        return (
            <Table dataSource={this.dataSource} columns={this.columns} />
        )
    }
}

export default ContentTable