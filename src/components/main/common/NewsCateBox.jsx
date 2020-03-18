import React from 'react'
import { DataMenu } from '../../../model/dataMenu'
import { DataNews } from '../../../model/dataNews'
import ItemNewsCateBox from './ItemNewsCateBox'
import PropTypes from 'prop-types'

export default class NewsCateBox extends React.Component {
    render() {
        return (
            <div className="home-container">
                <div className="col news-cate-left">
                    <ItemNewsCateBox
                        dataNews={DataNews}
                        dataMenu={DataMenu.filter(item => !item.HiddenHomePage)}
                        position={true} // position item even
                        handleClickMenu={this.props.handleClickMenu}
                        handleClickNews={this.props.handleClickNews}
                    />
                </div>
                <div className="col news-cate-right">
                    <ItemNewsCateBox
                        dataNews={DataNews}
                        dataMenu={DataMenu.filter(item => !item.HiddenHomePage)}
                        position={false} // position item odd
                        handleClickMenu={this.props.handleClickMenu}
                        handleClickNews={this.props.handleClickNews}
                    />
                </div>
            </div>
        )
    }
}

NewsCateBox.propTypes = {
    handleClickMenu: PropTypes.func,
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