import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container } from 'reactstrap';
import { FormattedMessage } from 'react-intl';
import Slider from 'react-slick';
import specialtyImg from '../../../assets/images/specialty/1.jpg'
import './HomeFooter.scss';

class HomeFooter extends Component {

    render() {

        return (
            <><div className="home-footer">
                <Container className="">
                    <p>&copy; 2022 Learning REACT</p>
                </Container>

            </div>
            </>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);
