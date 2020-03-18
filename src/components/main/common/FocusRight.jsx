import React from 'react'
import PropTypes from 'prop-types'

class FocusRight extends React.Component {

    render() {
        return (
            <div className="focus-right">
                <ul className="scroller">
                    {this.props.dataNews.map(item => {
                        return (
                            <li
                                className="item"
                                onClick={() => { this.props.handleClickNews(item) }}
                            >
                                <span className="dot"></span>{item.Title}
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

FocusRight.propTypes = {
    dataNews: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            Title: PropTypes.string,
            SubTitle: PropTypes.string,
            Image: PropTypes.string,
            UpdateTime: PropTypes.instanceOf(Date)
        })
    ),
    handleClickNews: PropTypes.func,
}

export default FocusRight