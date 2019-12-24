import React from "react";
import { Table } from "antd";

class ContentTable extends React.Component{
    componentDidMount() {
        setTimeout(this.props.getTracksAll(1), 5000);
    }

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

    mappedDataSource = this.props.data.map(track => {
        return [{
            id: Math.random(),
            track: track.name,
            artist: track.artistName
        }]
    });

    render() {
        console.log(this.mappedDataSource);
        return (
            <Table dataSource={this.mappedDataSource} columns={this.columns} />
        )
    }
}

export default ContentTable