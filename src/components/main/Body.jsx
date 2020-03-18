import React from 'react'
import { DataPost } from '../../model/dataPost'
import MainSite from './MainSite'
import Home from './Home'
import Post from './post/Post'
import { TYPE } from '../../Enum'
import PropTypes from 'prop-types'

export default class Body extends React.Component {
    render() {
        let menuCurrent = this.props.menuCurrent
        let index = menuCurrent.Display
        if (TYPE[index] == "SCREENHOME") {
            return (
                <Home
                    handleClickNews={this.props.handleClickNews}
                    dataNews={this.props.dataNews.filter(item => item.id != menuCurrent.Id)}
                    handleClickMenu={this.props.handleClickMenu}
                    handleClickNews={this.props.handleClickNews}
                    menuCurrent = {this.props.menuCurrent}
                />
            )
        }
        else if (TYPE[index] == "SCREENPOST") {
            return (
                <Post
                    data={DataPost}
                />
            )
        }

        return (
            <MainSite
                handleClickNews={this.props.handleClickNews}
                dataNews={this.props.dataNews.filter(item => item.id == menuCurrent.Id)}
                handleClickMenu={this.props.handleClickMenu}
                menuCurrent = {this.props.menuCurrent}
                newsCurrent = {this.props.newsCurrent}
            />
        )
    }
}

Body.propTypes = {
    handleClickMenu: PropTypes.func,
    handleClickNews: PropTypes.func,
    listNews: PropTypes.arrayOf(
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