import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container } from 'reactstrap';
import { FormattedMessage } from 'react-intl';
import Slider from 'react-slick';
import specialtyImg from '../../../assets/images/specialty/1.jpg'
import './About.scss';

class About extends Component {

    render() {

        return (
            <>
                <div className="section about">
                    <Container>
                        <div className="about-header">
                            Truyền thông nói về Tít Ở Trên Mây
                        </div>
                        <div className="about-content">
                            <div className="conten-left">
                                <iframe width="100%" height="400px"
                                    src="https://www.youtube.com/embed/iDfKYKnb4Rs"
                                    title="nồi phở ấm cả Hà Lan và những người bạn mới 🍲/ tít ở trên mây"
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen>
                                </iframe>
                            </div>
                            <div className="conten-right">
                                <p>
                                    nói tiếng Anh siêu mượt hơn cùng ELSA với mã 🎀QUYNHTIT🎀 tại link này nhó: https://bit.ly/tit-elsa
                                    ELSA Pro trọn đời: chỉ còn 1595k, giảm 400k
                                    ELSA Pro 1 năm: chỉ còn 795k, giảm gần 200k
                                    ELSA for Students: chỉ 149k/lớp/năm, giảm 111k
                                    #ELSASpeak #voiELSA #ELSAforStudents

                                </p>
                            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(About);
