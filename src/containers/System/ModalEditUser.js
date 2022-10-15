import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { emitter } from '../../utils/emitter'
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import _ from 'lodash';

class ModalEditUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            address: '',
        }
    }

    componentDidMount() {
        let user = this.props.userEdit;
        if (user && !_.isEmpty(user)) {
            this.setState({
                id: user.id,
                email: user.email,
                password: 'password',
                firstName: user.firstName,
                lastName: user.lastName,
                address: user.address
            })
        }
    }


    handleOnChangeInput = (e, id) => {
        let copyState = { ...this.state }
        copyState[id] = e.target.value
        this.setState({ ...copyState })
    }

    checkValidateInput = () => {
        let isValid = true
        let arrInput = ['email', 'password', 'firstName', 'lastName', 'address']
        for (let i = 0; i < arrInput.length; i++) {
            if (!this.state[arrInput[i]]) {
                isValid = false
                alert('Missing parameter: ' + arrInput[i])
                break;
            }

        }
        return isValid
    }

    handleSaveUser = () => {
        let isValid = this.checkValidateInput()
        if (isValid === true) {
            this.props.eidtUser(this.state)
        }
    }

    toggle = () => {
        this.props.toggleEditUserModal()
    }

    render() {
        return (
            <Modal
                isOpen={this.props.isOpen}
                toggle={() => { this.toggle() }}
                className={'modal-user-container'}
                size="lg"
            >
                <ModalHeader>
                    Edit new user
                </ModalHeader>
                <ModalBody>
                    <div className="modal-user-body">
                        <div className="input-container">
                            <label htmlFor="">Email</label>
                            <input type="email"
                                onChange={(e) => { this.handleOnChangeInput(e, 'email') }}
                                value={this.state.email}
                                disabled
                            />
                        </div>
                        <div className="input-container">
                            <label htmlFor="">Password</label>
                            <input type="password"
                                onChange={(e) => { this.handleOnChangeInput(e, 'password') }}
                                value={this.state.password}
                                disabled
                            />
                        </div>
                    </div>
                    <div className="modal-user-body">
                        <div className="input-container">
                            <label htmlFor="">Firstname</label>
                            <input type="text"
                                onChange={(e) => { this.handleOnChangeInput(e, 'firstName') }}
                                value={this.state.firstName}
                            />
                        </div>
                        <div className="input-container">
                            <label htmlFor="">Lastname</label>
                            <input type="text"
                                onChange={(e) => { this.handleOnChangeInput(e, 'lastName') }}
                                value={this.state.lastName}
                            />
                        </div>
                    </div>
                    <div className="modal-user-body ">
                        <div className="input-container max-width-input">
                            <label htmlFor="">Address</label>
                            <input type="text"
                                onChange={(e) => { this.handleOnChangeInput(e, 'address') }}
                                value={this.state.address}
                            />
                        </div>
                    </div>

                </ModalBody>
                <ModalFooter>
                    <Button
                        color="primary"
                        className="px-2"
                        onClick={() => { this.handleSaveUser() }}>Save change</Button>
                    <Button color="secondary" className="px-2" onClick={() => { this.toggle() }}>Close</Button>
                </ModalFooter>
            </Modal>
        )
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalEditUser);
