import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './TableManageUser.scss';
import { Table } from 'reactstrap';
import * as actions from '../../../store/actions'

class TableManageUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: []
        }
    }

    componentDidMount() {
        this.props.fetchUser()
    }

    componentDidUpdate(prevProps, prevState, Snapshot) {
        if (prevProps.users !== this.props.users) {
            this.setState({
                user: this.props.users
            })
        }
    }

    handleDeleteUser = (user) => {
        this.props.deleteUser(user.id)
    }

    handleEditUser = (user) => {
        this.props.handleEditUserPR(user)
    }
    render() {
        let arrUsers = this.state.user
        return (
            <table id="tableManage" className="container my-5">
                <tbody>
                    <tr>
                        <th>Email</th>
                        <th>Firstname</th>
                        <th>Lastname</th>
                        <th>Address</th>
                        <th>Actions</th>
                    </tr>
                    {arrUsers && arrUsers.length > 0 &&
                        arrUsers.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{item.email}</td>
                                    <td>{item.firstName}</td>
                                    <td>{item.lastName}</td>
                                    <td>{item.address}</td>
                                    <td>
                                        <button className="btn btn-edit"
                                            onClick={() => this.handleEditUser(item)}
                                        ><i className="fa fa-pencil-alt"></i></button>
                                        <button className="btn btn-delete"
                                            onClick={() => this.handleDeleteUser(item)}
                                        ><i className="fa fa-trash"></i></button>
                                    </td>
                                </tr>
                            )
                        })
                    }

                    <tr />
                </tbody>
            </table>
        );
    }

}

const mapStateToProps = state => {
    return {
        users: state.admin.users
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchUser: () => dispatch(actions.fetchAllUserStart()),
        deleteUser: (id) => dispatch(actions.deleteUser(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TableManageUser);
