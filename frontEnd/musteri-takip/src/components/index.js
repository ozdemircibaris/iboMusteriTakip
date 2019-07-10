import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchSeans } from '../actions/seansListAction';
import { Table } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'
import IndexContent from './IndexContent';

class Index extends Component {
    componentDidMount() {
        this.props.fetchSeans()
    }
    render() {
        return (
            <div>
                <Table columns="14" celled inverted>
                    <Table.Header>
                        <Table.Cell textAlign="center">id</Table.Cell>
                        <Table.Cell textAlign="center">Ad</Table.Cell>
                        <Table.Cell textAlign="center">Telefon</Table.Cell>
                        <Table.Cell textAlign="center">Adres</Table.Cell>
                        <Table.Cell textAlign="center">Kayıt T.</Table.Cell>
                        <Table.Cell textAlign="center">Seans İçerik</Table.Cell>
                        <Table.Cell textAlign="center">İlk Seans</Table.Cell>
                        <Table.Cell textAlign="center">Seans Adet</Table.Cell>
                        <Table.Cell textAlign="center">Sonraki Seans</Table.Cell>
                        <Table.Cell textAlign="center">Tutar</Table.Cell>
                        <Table.Cell textAlign="center">Ödeme Şekli</Table.Cell>
                        <Table.Cell textAlign="center">Ödenen</Table.Cell>
                        <Table.Cell textAlign="center">Kalan Bakiye</Table.Cell>
                        <Table.Cell textAlign="center"> </Table.Cell>
                    </Table.Header>
                </Table>
                {this.props.SeansList.map((data) => <IndexContent
                    key={data.id}
                    users={data} />)}
            </div>
        )
    }
}

const mapStateToProps = state => {
    const SeansList = state.SeansListReducer.fetchSeansList;
    return {
        SeansList
    }
}

export default connect(
    mapStateToProps,
    {
        fetchSeans
    }
)(Index);
