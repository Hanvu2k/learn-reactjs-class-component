import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Doctor.scss';
import Slider from 'react-slick';
import { Container } from 'reactstrap';
import DoctorImg from '../../../assets/images/doctor/1.jpg'

class Doctor extends Component {

    render() {
        return (
            <>
                <div className="section doctor">
                    <Container className="section-container">
                        <div className="section-header">
                            <span className="title-section">Bác sĩ nổi bật tuần qua</span>
                            <button className="btn-section">Xem thêm</button>
                        </div>
                        <div className="section-content">
                            <Slider {...this.props.settings}>
                                <div className="section-body ">
                                    <div className="doctor-infor">
                                        <img className="img-doctor" src={DoctorImg} alt="" />
                                        <div className="infor">
                                            <div>name</div>
                                            <div>Chuyên ngành</div>
                                        </div>

                                    </div>
                                </div>
                                <div className="section-body ">
                                    <div className="doctor-infor">
                                        <img className="img-doctor" src={DoctorImg} alt="" />
                                        <div className="infor">
                                            <div>name</div>
                                            <div>Chuyên ngành</div>
                                        </div>

                                    </div>
                                </div>
                                <div className="section-body ">
                                    <div className="doctor-infor">
                                        <img className="img-doctor" src={DoctorImg} alt="" />
                                        <div className="infor">
                                            <div>name</div>
                                            <div>Chuyên ngành</div>
                                        </div>

                                    </div>
                                </div>
                                <div className="section-body ">
                                    <div className="doctor-infor">
                                        <img className="img-doctor" src={DoctorImg} alt="" />
                                        <div className="infor">
                                            <div>name</div>
                                            <div>Chuyên ngành</div>
                                        </div>

                                    </div>
                                </div>
                                <div className="section-body ">
                                    <div className="doctor-infor">
                                        <img className="img-doctor" src={DoctorImg} alt="" />
                                        <div className="infor">
                                            <div>name</div>
                                            <div>Chuyên ngành</div>
                                        </div>

                                    </div>
                                </div>
                                <div className="section-body ">
                                    <div className="doctor-infor">
                                        <img className="img-doctor" src={DoctorImg} alt="" />
                                        <div className="infor">
                                            <div>Chuyên ngành</div>
                                            <div></div>
                                        </div>

                                    </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Doctor);
