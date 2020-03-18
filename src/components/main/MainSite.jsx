import React from 'react'
import ListNews from './common/ListNews'
import News from './common/News'
import PropTypes from 'prop-types'

class MainSite extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            newsCurrent: this.props.newsCurrent,
        }
    }

    // set newsCurrent
    _handleClickNews = (item) => {
        this.state.newsCurrent = item
        this.props.handleClickNews(this.props.menuCurrent)
    }

    render() {
        if (Object.entries(this.props.newsCurrent).length==0) {
            return (
                <ListNews
                    dataNews={this.props.dataNews}
                    handleClickNews={this._handleClickNews}
                    handleClickMenu={this.props.handleClickMenu}
                    menuCurrent = {this.props.menuCurrent}
                />
            )
        }

        return (
            <News
                dataNews={this.props.dataNews}
                newsCurrent={this.state.newsCurrent}
            />
        )
    }
}

MainSite.propTypes = {
    dataNews: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            Title: PropTypes.string,
            SubTitle: PropTypes.string,
            Image: PropTypes.string,
            UpdateTime: PropTypes.instanceOf(Date)
        })
    ),

    /*
        function handleClickMenu update Title, ListMenuSub, OptionNews
        Props: PropTypes.objectOf({
            Id: PropTypes.number,
            Content: PropTypes.string,
            SubMenu: PropTypes.arrayOf(
                PropTypes.shape({
                    Id: PropTypes.string,
                    Content: PropTypes.string,
                    SubMenu: PropTypes.array
                })
            )
        })
    */
    handleClickMenu: PropTypes.func,
    /*
        function handleClickNews set lại option 
        purepose: chuyển hướng vào trang chi tiết tin tức
    */
    handleClickNews: PropTypes.func,
    listMenuSub: PropTypes.arrayOf(
        PropTypes.shape({
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
        })
    ),
    optionNews: PropTypes.bool
}

export default MainSite