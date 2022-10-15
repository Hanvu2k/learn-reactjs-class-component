import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container } from 'reactstrap';
import { FormattedMessage } from 'react-intl';
import './Specialty.scss'
import Slider from 'react-slick';
import specialtyImg from '../../../assets/images/specialty/1.jpg'


class Specialty extends Component {

    render() {

        return (
            <>
                <div className="section specialty">
                    <Container className="section-container">
                        <div className="section-header">
                            <span className="title-section">Chuyên khoa phổ biến</span>
                            <button className="btn-section">Xem thêm</button>
                        </div>
                        <div className="section-content">
                            <Slider {...this.props.settings}>
                                <div className="section-body">
                                    <img src={specialtyImg} alt="" />
                                    <div>Cơ xương khớp</div>
                                </div>
                                <div className="section-body">
                                    <img src={specialtyImg} alt="" />
                                    <div></div>
                                </div>
                                <div className="section-body">
                                    <img src={specialtyImg} alt="" />
                                    <div></div>
                                </div>
                                <div className="section-body">
                                    <img src={specialtyImg} alt="" />
                                    <div></div>
                                </div>
                                <div className="section-body">
                                    <img src={specialtyImg} alt="" />
                                    <div></div>
                                </div>
                                <div className="section-body">
                                    <img src={specialtyImg} alt="" />
                                    <div></div>
                                </div>
                            </Slider>
                        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Specialty);
