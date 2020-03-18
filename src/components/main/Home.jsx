import React from 'react'
import Focus from './common/Focus'
import NewsCateBox from './common/NewsCateBox'
import PropTypes from 'prop-types'
import FocusCarousel from './common/FocusCarousel'

export default class Home extends React.Component {
    render() {
        return (
            <div className="main container-main-content">
                <div className="home">
                    <Focus
                        dataNews={this.props.dataNews}
                        handleClickNews={this.props.handleClickNews}
                        handleClickMenu={this.props.handleClickMenu}
                        menuCurrent = {this.props.menuCurrent}
                    />
                </div>
                <div className="home">
                    <FocusCarousel 
                        dataNews={this.props.dataNews}
                        handleClickNews={this.props.handleClickNews}
                    />
                </div>
                <div className="home">
                    <img style={{ width: '1220px' }} src="http://dangbo.saigonco-op.vn/hinh_anh/3259-3229148BannerBodyminmin" />
                </div>
                <div className="home">
                    <NewsCateBox 
                        dataNews={this.props.dataNews}
                        handleClickNews={this.props.handleClickNews}
                        handleClickMenu={this.props.handleClickMenu}
                    />
                </div>
            </div>
        )
    }
}

Home.propTypes = {
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
    menuCurrent: PropTypes.objectOf({
        Id: PropTypes.number,
        Content: PropTypes.string,
        SubMenu: PropTypes.arrayOf(
            PropTypes.shape({
                Id: PropTypes.string,
                Content: PropTypes.string,
                SubMenu: PropTypes.array
            })
        ),
        display: PropTypes.number
    }),
    newsCurrent: PropTypes.objectOf({
        id: PropTypes.number,
            Title: PropTypes.string,
            SubTitle: PropTypes.string,
            Image: PropTypes.string,
            UpdateTime: PropTypes.instanceOf(Date)
    })
}