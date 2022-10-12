import React, { Component } from 'react';
import { connect } from 'react-redux';

class HomePage extends Component {

    render() {

        return (
            <></>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
