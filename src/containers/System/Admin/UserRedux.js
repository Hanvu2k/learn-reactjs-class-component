import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { LANGUAGES, CRUD_ACTIONS, CommonUtils } from '../../../utils'
import * as actions from '../../../store/actions'
import "./UserRedux.scss"
import Lightbox from 'react-image-lightbox'
import 'react-image-lightbox/style.css'
import TableManageUser from './TableManageUser';

class UserRedux extends Component {
    constructor(props) {
        super(props);
        this.state = {
            genderArr: [],
            positionArr: [],
            roleArr: [],
            prvImage: '',
            isOpen: false,
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            phoneNumber: '',
            address: '',
            gender: '',
            position: '',
            role: '',
            avatar: '',
            action: '',
            userId: '',
        }
    }

    async componentDidMount() {
        this.props.getGenderStart()
        this.props.getPositionStart()
        this.props.getRoleStart()

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.gender !== this.props.gender) {
            let arrGenders = this.props.gender
            this.setState({
                genderArr: arrGenders,
                gender: arrGenders && arrGenders.length > 0 ? arrGenders[0].key : ''
            })
        }
        if (prevProps.position !== this.props.position) {
            let arrPosition = this.props.position
            this.setState({
                positionArr: arrPosition,
                position: arrPosition && arrPosition.length > 0 ? arrPosition[0].key : ''
            })
        }
        if (prevProps.role !== this.props.role) {
            let arrRole = this.props.role
            this.setState({
                roleArr: arrRole,
                role: arrRole && arrRole.length > 0 ? arrRole[0].key : ''
            })
        }
        if (prevProps.users !== this.props.users) {
            let arrGenders = this.props.gender
            let arrPosition = this.props.position
            let arrRole = this.props.role
            this.setState({
                email: '',
                password: '',
                firstName: '',
                lastName: '',
                phoneNumber: '',
                address: '',
                gender: arrGenders && arrGenders.length > 0 ? arrGenders[0].key : '',
                position: arrPosition && arrPosition.length > 0 ? arrPosition[0].key : '',
                role: arrRole && arrRole.length > 0 ? arrRole[0].key : '',
                avatar: '',
                action: CRUD_ACTIONS.CREATE,
                prvImage: ''
            })
        }

    }

    handleOnChangeImage = async (e) => {
        let data = e.target.files
        let file = data[0]
        if (file) {
            let base64 = await CommonUtils.getBase64(file)
            console.log(base64)
            let objectUrl = URL.createObjectURL(file)
            this.setState({
                prvImage: objectUrl,
                avatar: base64
            })
        }
    }

    openPrvImg = () => {
        if (!this.state.prvImage) return;
        this.setState({
            isOpen: true,
        })
    }

    handSaveUser = () => {
        let isValid = this.checkValidateInput()
        if (isValid === false) return

        let action = this.state.action
        if (action === CRUD_ACTIONS.CREATE) {
            //fire action create user
            this.props.createNewUser({
                email: this.state.email,
                password: this.state.password,
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                address: this.state.address,
                phoneNumber: this.state.phoneNumber,
                gender: this.state.gender,
                roleID: this.state.role,
                positionId: this.state.position,
                avatar: this.state.avatar
            })
        }
        if (action === CRUD_ACTIONS.EDIT) {
            //fire action edit user
            this.props.editUser({
                id: this.state.userId,
                email: this.state.email,
                password: this.state.password,
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                address: this.state.address,
                phoneNumber: this.state.phoneNumber,
                gender: this.state.gender,
                roleID: this.state.role,
                positionId: this.state.position,
                avatar: this.state.avatar
            })
        }
    }

    checkValidateInput = () => {
        let isValid = true;
        let arrCheck = ['email', 'password', 'firstName', 'lastName', 'phoneNumber', 'address']
        for (let i = 0; i < arrCheck.length; i++) {
            if (!this.state[arrCheck[i]]) {
                isValid = false;
                alert(`Please enter ${arrCheck[i]}`)
                break;
            }
        }
        return isValid
    }

    onChangInput = (e, id) => {
        let copyState = { ...this.state }
        copyState[id] = e.target.value
        this.setState({
            ...copyState,
        })
    }

    handleEditUserPR = (user) => {
        let imageBase64 = ''
        if (user.image) {
            imageBase64 = new Buffer(user.image, 'base64').toString('binary')
        }


        this.setState({
            email: user.email,
            password: 'user.password',
            firstName: user.firstName,
            lastName: user.lastName,
            address: user.address,
            phoneNumber: user.phoneNumber,
            gender: user.gender,
            roleID: user.role,
            positionId: user.position,
            action: CRUD_ACTIONS.EDIT,
            userId: user.id,
            avatar: '',
            prvImage: imageBase64
        })
    }

    render() {
        let genders = this.state.genderArr
        let positions = this.state.positionArr
        let roles = this.state.roleArr
        let language = this.props.language
        let { email, password, firstName, lastName, phoneNumber, address, gender, position, role } = this.state

        return (
            <div className="user-redux-container" >
                <div className="title">
                    User Redux
                </div>
                <div className="user-reudux-body">
                    <div className="container">
                        <div className="my-3"> <FormattedMessage id="manage-user.add" /></div>
                        <div className="row">
                            <div className="col-3">
                                <label htmlFor=""><FormattedMessage id="manage-user.email" /></label>
                                <input className="form-control" type="email"
                                    value={email}
                                    onChange={(e) => { this.onChangInput(e, 'email') }}
                                    disabled={this.state.action === CRUD_ACTIONS.EDIT}
                                />
                            </div>
                            <div className="col-3">
                                <label htmlFor=""><FormattedMessage id="manage-user.password" /></label>
                                <input className="form-control" type="password"
                                    value={password}
                                    onChange={(e) => { this.onChangInput(e, 'password') }}
                                    disabled={this.state.action === CRUD_ACTIONS.EDIT}
                                />
                            </div>
                            <div className="col-3">
                                <label htmlFor=""><FormattedMessage id="manage-user.firstName" /></label>
                                <input className="form-control" type="text"
                                    value={firstName}
                                    onChange={(e) => { this.onChangInput(e, 'firstName') }}
                                />
                            </div>
                            <div className="col-3">
                                <label htmlFor=""><FormattedMessage id="manage-user.lastName" /></label>
                                <input className="form-control" type="text"
                                    value={lastName}
                                    onChange={(e) => { this.onChangInput(e, 'lastName') }}
                                />
                            </div>
                            <div className="col-3">
                                <label htmlFor=""><FormattedMessage id="manage-user.phoneNumber" /></label>
                                <input className="form-control" type="text"
                                    value={phoneNumber}
                                    onChange={(e) => { this.onChangInput(e, 'phoneNumber') }}
                                />
                            </div>
                            <div className="col-9">
                                <label htmlFor=""><FormattedMessage id="manage-user.address" /></label>
                                <input className="form-control" type="text"
                                    value={address}
                                    onChange={(e) => { this.onChangInput(e, 'address') }}
                                />
                            </div>
                            <div className="col-3">
                                <label htmlFor=""><FormattedMessage id="manage-user.gender" /></label>
                                <select name="" className="form-control"
                                    value={gender} onChange={(e) => { this.onChangInput(e, 'gender') }}
                                >
                                    {genders && genders.length > 0 &&
                                        genders.map((item, index) => {
                                            return (
                                                <option value={item.key} key={index}>{language == LANGUAGES.VI ? item.valueVi
                                                    : item.valueEn
                                                }</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                            <div className="col-3">
                                <label htmlFor=""><FormattedMessage id="manage-user.position" /> </label>
                                <select name="" className="form-control"
                                    value={position} onChange={(e) => { this.onChangInput(e, 'position') }}
                                >
                                    {positions && positions.length > 0 &&
                                        positions.map((item, index) => {
                                            return (
                                                <option value={item.key} key={index}>{language == LANGUAGES.VI ? item.valueVi
                                                    : item.valueEn
                                                }</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                            <div className="col-3">
                                <label htmlFor=""><FormattedMessage id="manage-user.roleId" /> </label>
                                <select name="" className="form-control"
                                    value={role} onChange={(e) => { this.onChangInput(e, 'role') }}
                                >
                                    {roles && roles.length > 0 &&
                                        roles.map((item, index) => {
                                            return (
                                                <option value={item.key} key={index}>{language == LANGUAGES.VI ? item.valueVi
                                                    : item.valueEn
                                                }</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                            <div className="col-3">
                                <label htmlFor=""><FormattedMessage id="manage-user.image" /> </label>
                                <div >
                                    <input id="image"
                                        type="file"
                                        className="form-control"
                                        hidden
                                        onChange={(e) => { this.handleOnChangeImage(e) }}
                                    />
                                    <label className="lable-upload" htmlFor="image"  >Tải ảnh <i className="fas fa-upload"></i></label>
                                    <div className="prev-image"
                                        style={{ backgroundImage: `url(${this.state.prvImage})` }}
                                        onClick={() => { this.openPrvImg() }}
                                    >
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 mt-3">
                                <button className={this.state.action === CRUD_ACTIONS.EDIT ? "btn btn-warning" : "btn btn-primary"}
                                    onClick={() => { this.handSaveUser() }}
                                >
                                    {this.state.action === CRUD_ACTIONS.EDIT ? <FormattedMessage id="manage-user.edit" /> : <FormattedMessage id="manage-user.save" />}

                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <TableManageUser
                    handleEditUserPR={this.handleEditUserPR}
                    actions={this.state.action}
                />
                {this.state.isOpen == true &&
                    <Lightbox
                        mainSrc={this.state.prvImage}
                        onCloseRequest={() => this.setState({ isOpen: false })}
                    />
                }
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        language: state.app.language,
        gender: state.admin.genders,
        position: state.admin.positions,
        role: state.admin.roles,
        isLoadingGender: state.admin.isLoadingGender,
        users: state.admin.users
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getGenderStart: () => dispatch(actions.fetchGenderStart()),
        getPositionStart: () => dispatch(actions.fetchPositionStart()),
        getRoleStart: () => dispatch(actions.fetchRoleStart()),
        createNewUser: (data) => dispatch(actions.createNewUser(data)),
        fetchUser: () => dispatch(actions.fetchAllUserStart()),
        editUser: (data) => dispatch(actions.editUser(data))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);
