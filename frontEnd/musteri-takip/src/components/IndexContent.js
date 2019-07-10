import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteSeans } from '../actions/seansListAction';
import { Table, Button } from 'semantic-ui-react';
import moment from 'moment'
import 'moment/locale/tr'

class IndexContent extends Component {
    constructor(props){
        super(props);
        this.onDeleteCard = this.onDeleteCard.bind(this);
    }
    onDeleteCard = () => {
        const { id } = this.props.users;
        this.props.deleteSeans(id);
    }
    render() {
        const { id, ad, phone, address, createdAt, description, seansDate, count, seansPrice, nextSeans, paymentMethod, seansPaid, userBalance } = this.props.users;
        const detailContent = (
            <div id="detailContent">
                <Button
                    style={{flex: 1, alignSelf: 'center', marginRight: 10,}}
                    onClick={this.onDeleteCard}
                    inverted color='red'>Sil</Button>
            </div>
        )
        return (
            <div>
                <Table selectable columns="14" celled>
                    <Table.Row>
                        <Table.Cell textAlign="center">{id}</Table.Cell>
                        <Table.Cell textAlign="center">{ad}</Table.Cell>
                        <Table.Cell textAlign="center">{phone}</Table.Cell>
                        <Table.Cell textAlign="center">{address}</Table.Cell>
                        <Table.Cell textAlign="center">{moment(createdAt).format('LL')}</Table.Cell>
                        <Table.Cell textAlign="center">{description}</Table.Cell>
                        <Table.Cell textAlign="center">{moment(seansDate).format('LL')}</Table.Cell>
                        <Table.Cell textAlign="center">{count}</Table.Cell>
                        <Table.Cell textAlign="center">{moment(nextSeans).format('LL')}</Table.Cell>
                        <Table.Cell textAlign="center">{seansPrice}</Table.Cell>
                        <Table.Cell textAlign="center">{paymentMethod}</Table.Cell>
                        <Table.Cell textAlign="center">{seansPaid}</Table.Cell>
                        <Table.Cell textAlign="center">{userBalance}</Table.Cell>
                        <Table.Cell textAlign="center">{detailContent}</Table.Cell>
                    </Table.Row>
                </Table>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {}
}

export default connect(
    mapStateToProps,
    {
        deleteSeans
    }
)(IndexContent);