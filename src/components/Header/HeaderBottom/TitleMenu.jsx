import React from 'react'
import Clock from './Clock'
import PropTypes from 'prop-types';

class TitleMenu extends React.Component {
    showTitle = (Title) => {
        if (Title != undefined) {
            return (
                this.props.Titles.map((item) => {
                    return (
                        <li
                            key={item.Id}
                            style={{ backgroundColor: "#e5e5e5" }}
                            className="current-focus"
                            onClick={() => this.props.handleClickMenu(item)}
                        >{item.Content}</li>
                    )
                })
            )
        }
    }

    render() {
        return (
            <div className="focus-content">
                <ul>
                    {this.showTitle(this.props.Titles)}
                </ul>
                <Clock />
            </div>
        )
    }
}

TitleMenu.propTypes = {
    Title: PropTypes.arrayOf({
        Id: PropTypes.number,
        Content: PropTypes.string,
        SubMenu: PropTypes.arrayOf({
            Id: PropTypes.string,
            Content: PropTypes.string,
            SubMenu: PropTypes.array
        }),
        display: PropTypes.number
    }),
    handleClickMenu: PropTypes.func
}

export default TitleMenu