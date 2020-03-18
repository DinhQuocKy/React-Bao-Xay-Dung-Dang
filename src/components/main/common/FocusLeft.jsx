import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import PropTypes from 'prop-types'


class FocusLeft extends React.Component {

    getData = () => {
        return this.props.dataNews.map((item) => {
            return (
                <Carousel.Item onClick={() => this.props.handleClickNews(item)}>
                    <div className="carousel-detail">
                        <img
                            className="d-block w-100"
                            src={item.Image}
                            alt={item.Title}
                        />
                        <h3>{item.Title}</h3>
                    </div>
                    
                </Carousel.Item>
            )
        })
    }

    render() {
        return (
            <div className="focus-left">
                <Carousel indicators={false}>
                    {this.getData()}
                </Carousel>

            </div>
        )
    }
}

FocusLeft.propTypes = {
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

export default FocusLeft