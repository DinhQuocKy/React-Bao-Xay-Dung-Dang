import React from 'react'
import Focus from './Focus'
import NewsCate from './NewsCate'
import '../../../assets/home/home.css'
import PropTypes from 'prop-types'


class ListNews extends React.Component{
    render(){
        return (
            <div className="main container-main-content">
                <div className="home">
                    <Focus
                        dataNews = {this.props.dataNews} 
                        handleClickNews = {this.props.handleClickNews}
                        handleClickMenu={this.props.handleClickMenu}
                        menuCurrent = {this.props.menuCurrent}
                    />
                </div>
                <div className="home">
                    <NewsCate 
                        newsCate = {this.props.dataNews}
                        handleClickNews={this.props.handleClickNews}
                    />
                </div>
            </div>
        )
    }
}

ListNews.propTypes = {
    dataNews: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            Title: PropTypes.string,
            SubTitle: PropTypes.string,
            Image: PropTypes.string,
            UpdateTime: PropTypes.instanceOf(Date)
        })
    ),
    handleClickMenu: PropTypes.func,
    handleClickNews: PropTypes.func,
    ListMenuSub: PropTypes.arrayOf(
        PropTypes.shape({
            Id: PropTypes.number,
            Content: PropTypes.string,
            SubMenu: PropTypes.arrayOf(
                PropTypes.shape({
                Id: PropTypes.string,
                Content: PropTypes.string,
                SubMenu: PropTypes.array
            })),
            display: PropTypes.number
        })
    ),
}

export default ListNews