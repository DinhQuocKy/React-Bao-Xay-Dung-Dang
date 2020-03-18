import React from 'react'
import FocusLeft from './FocusLeft'

export default class ItemNewsCateBox extends React.Component {

    showListNews = (list) => {
        let html = []
        if (list.length > 1) {
            for (let i = 1; i < list.length; ++i) {
                html.push(<li onClick={() => { this.props.handleClickNews(list[i]) }}><span className="dot"></span> {list[i].Title} </li>)
            }

        }
        return html
    }

    showItemContent = () => {
        let listNews = this.props.dataNews

        if (this.props.optionDisplay == 2) {
            return (
                <FocusLeft
                    dataNews={listNews}
                    handleClickNews={this.props.handleClickNews}
                />
            )
        }

        return (
            <div className="items-content">
                <div onClick={() => { this.props.handleClickNews(listNews[0]) }}>
                    <img
                        src={listNews[0].Image}
                        width="595px"
                    />
                    <h3>{listNews[0].Title}</h3>
                </div>

                <ul>
                    {this.showListNews(listNews)}
                </ul>
            </div>
        )
    }

    render() {
        return (
            <div className="items">
                <h3 onClick={() => { this.props.handleClickMenu(this.props.itemMenu) }}>{this.props.itemMenu.Content}</h3>
                {this.showItemContent()}
            </div>
        )
    }
}