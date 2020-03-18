import React from 'react'
import HeaderTop from './HeaderTop/HeaderTop'
import HeaderBottom from './HeaderBottom/HeaderBottom'
import '../../assets/header/header-bottom.css'
import '../../assets/style.css'
import PropTypes from 'prop-types'

class Header extends React.Component {
    render() {
        return (
            <div className="main" id="header">
                <HeaderTop />
                <HeaderBottom
                    dataMenu={this.props.dataMenu}
                    menuCurrent = {this.props.menuCurrent}
                    handleClickMenu={this.props.handleClickMenu}
                    titles={this.props.titles}
                />
            </div>
        )
    }
}


Header.propTypes = {
    dataMenu: PropTypes.arrayOf({
        Id: PropTypes.number,
        Content: PropTypes.string,
        SubMenu: PropTypes.arrayOf({
            Id: PropTypes.string,
            Content: PropTypes.string,
            SubMenu: PropTypes.array
        }),
        display: PropTypes.number
    }),
    handleClickMenu: PropTypes.func,
    title: PropTypes.arrayOf({
        Id: PropTypes.number,
        Content: PropTypes.string,
        SubMenu: PropTypes.arrayOf({
            Id: PropTypes.string,
            Content: PropTypes.string,
            SubMenu: PropTypes.array
        })
    }),
}

export default Header