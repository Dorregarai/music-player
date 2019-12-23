import React from "react";
import { Table } from "antd";

class ContentTable extends React.Component{
    componentDidMount() {
        this.props.getTracksAll(1);
        //console.log(this.props);
        console.log(this.props);
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
        //console.log('track');
        console.log(track);
        return {
            id: Math.random(),
            track: track.name,
            artist: track.artistName
        }
    });

    render() {
        return (
            <Table dataSource={this.mappedDataSource} columns={this.columns} />
        )
    }
}

export default ContentTable