import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HomeHeader.scss'
import { Container } from 'reactstrap';
import { FormattedMessage } from 'react-intl';
import { LANGUAGES } from '../../utils'
import { changeLanguageApp } from "../../store/actions"

class HomeHeader extends Component {

    changeLanguage = (language) => {
        console.log(language)
        this.props.changeLanguageAppRedux(language)
    }

    render() {
        let language = this.props.language
        return (
            <>
                <div className="home-header-container">
                    <Container className="home-header-content">
                        <div className="left-content">
                            <i className="fas fa-bars"></i>
                            <div className="logo">
                                <img src="../../assets/images/images.png" alt="" />
                            </div>
                        </div>
                        <div className="center-content">
                            <div className="child-content">
                                <div className="name">
                                    <FormattedMessage id="homeheader.specialty" />
                                </div>
                                <div className="description">
                                    <FormattedMessage id="homeheader.searchDoctor" />
                                </div>
                            </div>
                            <div className="child-content">
                                <div className="name"><FormattedMessage id="homeheader.health-facility" /></div>
                                <div className="description"><FormattedMessage id="homeheader.select-room" /></div>
                            </div>
                            <div className="child-content">
                                <div className="name"><FormattedMessage id="homeheader.doctor" /></div>
                                <div className="description"><FormattedMessage id="homeheader.select-doctor" /></div>
                            </div>
                            <div className="child-content">
                                <div className="name"><FormattedMessage id="homeheader.fee" /></div>
                                <div className="description"><FormattedMessage id="homeheader.health-check" /></div>
                            </div>
                        </div>
                        <div className="right-content">
                            <div className="support">
                                <i className="fas fa-question-circle"></i>
                                <div className="support-text"><FormattedMessage id="homeheader.support" /></div>
                            </div>
                            <div className="language-vi"><span className={language === LANGUAGES.VI ? "active" : ""} onClick={() => { this.changeLanguage(LANGUAGES.VI) }}>VN</span></div>
                            <div className="language-en"><span className={language === LANGUAGES.EN ? "active" : ""} onClick={() => { this.changeLanguage(LANGUAGES.EN) }}>EN</span></div>
                        </div>
                    </Container>
                </div>
                <div className="home-header-banner">
                    <div className="top-content">
                        <div className="top-title"><FormattedMessage id="banner.top-title" /></div>
                        <div className="bot-title"><FormattedMessage id="banner.bottom-title" /></div>
                        <div className="search">
                            <i className="fa fa-search"></i>
                            <input className="search-input" type="text" placeholder="Tìm kiếm" />
                        </div>
                    </div>
                    <div className="bot-content">
                        <div className="options">
                            <div className="option-child">
                                <div className="icon">
                                    <i className="far fa-hospital"></i>
                                </div>
                                <div className="text"><FormattedMessage id="banner.specialist-check" /></div>
                            </div>
                            <div className="option-child">
                                <div className="icon">
                                    <i className="fas fa-mobile-alt"></i>
                                </div>
                                <div className="text"><FormattedMessage id="banner.remote-check" /></div>
                            </div>
                            <div className="option-child">
                                <div className="icon">
                                    <i className="fas fa-hospital"></i>
                                </div>
                                <div className="text"><FormattedMessage id="banner.health-check" /></div>
                            </div>
                            <div className="option-child">
                                <div className="icon">
                                    <i className="fas fa-flask"></i>
                                </div>
                                <div className="text"><FormattedMessage id="banner.medical-check" /></div>
                            </div>
                            <div className="option-child">
                                <div className="icon">
                                    <i className="fas fa-user-md"></i>
                                </div>
                                <div className="text"><FormattedMessage id="banner.mental-check" /></div>
                            </div>
                            <div className="option-child">
                                <div className="icon">
                                    <i className="fas fa-briefcase-medical"></i>
                                </div>
                                <div className="text"><FormattedMessage id="banner.dental-check" /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        changeLanguageAppRedux: (language) => dispatch(changeLanguageApp(language))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
