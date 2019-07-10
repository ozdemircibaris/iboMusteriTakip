import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    usernameChange,
    userPhoneChange,
    userAddressChange,
    descriptionChange,
    seansDateChange,
    countChange,
    nextSeansChange,
    seansPriceChange,
    paymentMethodChange,
    seansPaid,
    userBalanceChange,
    addSeans
} from '../actions/seansListAction';
import { Container, Form, Button } from 'semantic-ui-react';
import DatetimePicker from 'react-semantic-datetime';
import moment from 'moment';
import 'moment/locale/tr';
import 'semantic-ui-css/semantic.min.css';
import '../App.css';
import { Link } from 'react-router-dom';

class NewSeans extends Component {
    constructor(){
        super();
        this.state = {
            myDate: moment(),
            dateTimeOpen1: false,
            dateTimeOpen2: false,
            valueDay: '',
            valueLesson: '',
        }
        this.onNameChanged = this.onNameChanged.bind(this);
        this.onPhoneChanged = this.onPhoneChanged.bind(this);
        this.onAddressChanged = this.onAddressChanged.bind(this);
        this.onDescriptionChanged = this.onDescriptionChanged.bind(this);
        this.onSeansDateChanged = this.onSeansDateChanged.bind(this);
        this.onCountChanged = this.onCountChanged.bind(this);
        this.onNextSeansChanged = this.onNextSeansChanged.bind(this);
        this.onSeansPriceChanged = this.onSeansPriceChanged.bind(this);
        this.onPaymentMethodChange = this.onPaymentMethodChange.bind(this);
        this.onSeansPaidChange = this.onSeansPaidChange.bind(this);
        this.onUserBalanceChange = this.onUserBalanceChange.bind(this);
        this.onAddSeans = this.onAddSeans.bind(this);
    }

    onNameChanged = (event) => {
        this.props.usernameChange(event.target.value);
        this.setState({dateTimeOpen1: false, dateTimeOpen2: false})
    }
    onPhoneChanged = (event) => {
        this.props.userPhoneChange(event.target.value);
        this.setState({dateTimeOpen1: false, dateTimeOpen2: false})
    }
    onAddressChanged = (event) => {
        this.props.userAddressChange(event.target.value);
        this.setState({dateTimeOpen1: false, dateTimeOpen2: false})
    }
    onDescriptionChanged = (event) => {
        this.props.descriptionChange(event.target.value);
        this.setState({dateTimeOpen1: false, dateTimeOpen2: false})
    }
    onSeansDateChanged = (seansDate) => {
        this.props.seansDateChange(seansDate);
        this.setState({dateTimeOpen1: false, dateTimeOpen2: false})
    }
    onCountChanged = (event) => {
        this.props.countChange(event.target.value);
        this.setState({dateTimeOpen1: false, dateTimeOpen2: false})
    }
    onNextSeansChanged = (value2) => {
        this.props.nextSeansChange(value2);
        this.setState({dateTimeOpen1: false, dateTimeOpen2: false})
    }
    onSeansPriceChanged = (event) => {
        this.props.seansPriceChange(event.target.value);
        this.setState({dateTimeOpen1: false, dateTimeOpen2: false})
    }
    onPaymentMethodChange = (event) => {
        this.props.paymentMethodChange(event.target.value);
        this.setState({dateTimeOpen1: false, dateTimeOpen2: false})
    }
    onSeansPaidChange = (event) => {
        this.props.seansPaid(event.target.value);
        this.setState({dateTimeOpen1: false, dateTimeOpen2: false})
    }
    onUserBalanceChange = (event) => {
        this.props.userBalanceChange(event.target.value);
        this.setState({dateTimeOpen1: false, dateTimeOpen2: false})
    }

    onAddSeans() {
        this.props.addSeans(
            this.props.usernameInput,
            this.props.userPhoneInput,
            this.props.userAddressInput,
            this.props.descriptionInput,
            this.props.seansDateInput,
            this.props.countInput,
            this.props.nextSeansInput,
            this.props.seansPriceInput,
            this.props.paymentMethodInput,
            this.props.seansPaidInput,
            this.props.userBalanceInput,
        )
    }

    render() {
        const { value } = this.state;
        return (
            <div>
                <Container textAlign="center">
                <div id="programContainer">
                    <h1>Create Program!</h1>
                    <div id="programContent">
                    <Form>
                        <Form.Field
                            className="formWidth"
                            control='input'
                            placeholder='Ad'
                            onChange={this.onNameChanged}
                            onClick={this.onNameChanged}
                            value={this.props.usernameInput} />
                        <Form.Field
                            className="formWidth"
                            control='input'
                            placeholder='Telefon'
                            onChange={this.onPhoneChanged}
                            onChange={this.onPhoneChanged}
                            onClick={this.onChangeAbsent}
                            value={this.props.userPhoneInput} />
                        <Form.Field
                            className="formWidth"
                            control='input'
                            placeholder='Adres'
                            onChange={this.onAddressChanged}
                            onClick={this.onAddressChanged}
                            value={this.props.userAddressInput} />
                        <Form.Field
                            className="formWidth"
                            control='input'
                            placeholder='Seans İçerik'
                            onChange={this.onDescriptionChanged}
                            onClick={this.onDescriptionChanged}
                            value={this.props.descriptionInput} />
                        <Form.Input
                            action={{color:"teal",icon:"calendar",onClick:()=>this.setState({dateTimeOpen1:true})}}
                            actionPosition="left"
                            value={moment(this.props.seansDateInput).format('LL')}
                            onClick={() => this.setState({dateTimeOpen1:true})}
                            disabled={this.state.dateTimeOpen1}
                            fluid />
                        {this.state.dateTimeOpen1 && <DatetimePicker
                            onChange={this.onSeansDateChanged}
                            moment={this.props.seansDateInput} />}
                        <Form.Field
                            className="formWidth"
                            control='input'
                            placeholder='Seans Adeti'
                            onChange={this.onCountChanged}
                            onClick={this.onCountChanged}
                            value={this.props.countInput} />

                        <Form.Input
                            action={{color:"teal",icon:"calendar",onClick:()=>this.setState({dateTimeOpen2:true})}}
                            actionPosition="left"
                            value={moment(this.props.nextSeansInput).format('LL')}
                            onClick={()=>this.setState({dateTimeOpen2:true})}
                            disabled={this.state.dateTimeOpen2}
                            fluid />
                        {this.state.dateTimeOpen2 && <DatetimePicker
                            onChange={this.onNextSeansChanged}
                            moment={this.props.nextSeansInput} />}
                       <Form.Field
                            className="formWidth"
                            control='input'
                            placeholder='Tutar'
                            onChange={this.onSeansPriceChanged}
                            onClick={this.onSeansPriceChanged}
                            value={this.props.seansPriceInput} />

                        <Form.Field
                            className="formWidth"
                            control='input'
                            placeholder='Ödeme şekli'
                            onChange={this.onPaymentMethodChange}
                            onClick={this.onPaymentMethodChange}
                            value={this.props.paymentMethodInput} />
                        <Form.Field
                            className="formWidth"
                            control='input'
                            placeholder='Ödenen'
                            onChange={this.onSeansPaidChange}
                            onClick={this.onSeansPaidChange}
                            value={this.props.seansPaidInput} />
                        <Form.Field
                            className="formWidth"
                            control='input'
                            placeholder='Kalan Bakiye'
                            onChange={this.onUserBalanceChange}
                            onClick={this.onUserBalanceChange}
                            value={this.props.userBalanceInput} />
                        <Button as={Link} to="/" onClick={this.onAddSeans} inverted color="green">
                            Ekle
                        </Button>
                    </Form>
                    </div>
                </div>
            </Container>
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log(state.SeansListReducer)
    const {
        usernameInput,
        userPhoneInput,
        userAddressInput,
        descriptionInput,
        seansDateInput,
        countInput,
        nextSeansInput,
        seansPriceInput,
        paymentMethodInput,
        seansPaidInput,
        userBalanceInput,
    } = state.SeansListReducer;
    return {
        usernameInput,
        userPhoneInput,
        userAddressInput,
        descriptionInput,
        seansDateInput,
        countInput,
        nextSeansInput,
        seansPriceInput,
        paymentMethodInput,
        seansPaidInput,
        userBalanceInput,
    }
}
export default connect(
    mapStateToProps,
    {
        usernameChange,
        userPhoneChange,
        userAddressChange,
        descriptionChange,
        seansDateChange,
        countChange,
        nextSeansChange,
        seansPriceChange,
        paymentMethodChange,
        seansPaid,
        userBalanceChange,
        addSeans
    }

)(NewSeans);