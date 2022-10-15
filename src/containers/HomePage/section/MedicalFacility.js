import React, { Component } from 'react';
import { connect } from 'react-redux';
import './MedicalFacility.scss';
import Slider from 'react-slick';
import { Container } from 'reactstrap';
import medicalFacilityImg from '../../../assets/images/medicalfacility/1.jpg'

class MedicalFacility extends Component {

    render() {
        return (
            <>
                <div className="section medical-facility">
                    <Container className="section-container">
                        <div className="section-header">
                            <span className="title-section">Cơ sở phổ biên</span>
                            <button className="btn-section">Xem thêm</button>
                        </div>
                        <div className="section-content">
                            <Slider {...this.props.settings}>
                                <div className="section-body">
                                    <img src={medicalFacilityImg} alt="" />
                                    <div>Hệ thống thu cúc</div>
                                </div>
                                <div className="section-body">
                                    <img src={medicalFacilityImg} alt="" />
                                    <div></div>
                                </div>
                                <div className="section-body">
                                    <img src={medicalFacilityImg} alt="" />
                                    <div></div>
                                </div>
                                <div className="section-body">
                                    <img src={medicalFacilityImg} alt="" />
                                    <div></div>
                                </div>
                                <div className="section-body">
                                    <img src={medicalFacilityImg} alt="" />
                                    <div></div>
                                </div>
                                <div className="section-body">
                                    <img src={medicalFacilityImg} alt="" />
                                    <div></div>
                                </div>
                                {/* <div className="special-body">
                                <img src="../../assets/images/specialty/7" alt="" />
                            </div> */}
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

export default connect(mapStateToProps, mapDispatchToProps)(MedicalFacility);
