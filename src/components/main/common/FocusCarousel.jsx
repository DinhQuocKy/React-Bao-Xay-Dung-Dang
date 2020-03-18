import React from 'react'
import PropTypes from 'prop-types'
import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa'

export default class FocusCarousel extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            ind: 0
        }
    }

    checkInd = () => {
        if (this.state.ind >= this.props.dataNews.length) {
            this.state.ind = 0
        }

        if (this.state.ind < 0) {
            this.state.ind = this.props.dataNews.length - 1
        }
    }

    handleClickChevronCircleRight = () => {
        this.state.ind++
        this.checkInd()
        this.setState({ ind: this.state.ind })
    }

    handleClickChevronCircleLeft = () => {
        this.state.ind--
        this.checkInd()
        this.setState({ ind: this.state.ind })
    }

    getListImageFocus = () => {
        let arr = []
        let data = this.props.dataNews
        let ind = this.state.ind
        for (let i = 0; i < 4; ++i) {
            if (ind >= data.length - 1) {
                ind = 0
            }
            arr.push(
                <div className="col" onClick={() => this.props.handleClickNews(data[ind])}>
                    <img
                        alt=""
                        className="img-focus-main"
                        width="270px"
                        height="128"
                        src={data[ind].Image}
                    />
                    <div>{data[ind].Title}</div>

                </div>
            )
            ind++
        }
        return arr
    }


    render() {
        return (
            <React.Fragment>
                <div className="home-container">
                    <div className="title-focus">TIÊU ĐIỂM</div>
                    <div className="a">
                        <FaChevronCircleLeft
                            className="chevron-circle"
                            size={30}
                            style={{ marginRight: '5px', color: 'rgb(0, 156, 215)' }}
                            onClick={this.handleClickChevronCircleLeft}
                        />
                        <FaChevronCircleRight
                            size={30}
                            className="chevron-circle"
                            style={{ color: 'rgb(0, 156, 215)' }}
                            onClick={this.handleClickChevronCircleRight}
                        />
                    </div>
                </div>
                <div className="home-container">
                    {this.getListImageFocus()}
                </div>
            </React.Fragment>
        )
    }
}

FocusCarousel.propTypes = {
    handleClickNews: PropTypes.func,
    dataNews: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            Title: PropTypes.string,
            SubTitle: PropTypes.string,
            Image: PropTypes.string,
            UpdateTime: PropTypes.instanceOf(Date)
        })
    ),
}