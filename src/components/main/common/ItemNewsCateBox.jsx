import React from 'react'
import ItemContentNewsCateBox from './ItemContentNewsCateBox'

export default class ItemNewsCateBox extends React.Component {
    render() {
        return (
            <React.Fragment>
                {this.props.dataMenu.map((itemMenu, index) => {
                    if ((index % 2 == 0 && this.props.position) || (index % 2 != 0 && !this.props.position)) {
                        return (
                            <ItemContentNewsCateBox
                                optionDisplay={itemMenu.DisplayShowOnCateBoxHome}
                                itemMenu={itemMenu}
                                dataNews={this.props.dataNews.filter(e => e.id == itemMenu.Id)}
                                handleClickMenu={this.props.handleClickMenu}
                                handleClickNews={this.props.handleClickNews}
                            />
                        )
                    }
                })}
            </React.Fragment>
        )
    }
}