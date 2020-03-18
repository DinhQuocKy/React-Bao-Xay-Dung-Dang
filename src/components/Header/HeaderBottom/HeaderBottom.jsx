import React from 'react'
import TitleMenu from './TitleMenu'
import PropTypes from 'prop-types';
import {dictionary} from '../../../model/dictionary'
import { FaHome } from "react-icons/fa"

class HeaderBottom extends React.Component {

    checkActive = (itemMenuParrent) => {
        let key = this.props.menuCurrent.Id;
        
        if(key == itemMenuParrent.Id){
            return true
        }
        
        while (dictionary[key] != undefined) {
            if(dictionary[key].Id == itemMenuParrent.Id){
                return true
            }
            key = dictionary[key].Id
        }
        return false
    }

    subMenu = (ListSub) => {
        return (
            <ul
                class="sub-menu"
            >
                {
                    ListSub.map((item) => {
                        return (
                            <div>
                                <div className="title">
                                    <li
                                        key={item.Id}
                                        onClick={() => { this.props.handleClickMenu(item) }}
                                    >
                                        <a>{item.Content}</a>
                                    </li>
                                    {item.SubMenu != null ? this.subMenu(item.SubMenu) : ''}
                                </div>
                            </div>
                        )
                    })
                }
            </ul>
        )
    }

    Menu = () => {
        let fisrtItem = this.props.dataMenu[0]

        return this.props.dataMenu.map((item) => {
            if(!item.HiddenMenu){
                return (
                    <div>
                        <div className="title">
                            <li
                                key={item.Id}
                                onClick={() => { this.props.handleClickMenu(item) }}
                                className = {this.checkActive(item)?'active':''}
                            >
                                <a>{fisrtItem==item?<FaHome style={{width: '40px'}}/>:item.Content}</a>
                            </li>
                            {item.SubMenu != null ? this.subMenu(item.SubMenu) : ''}
                        </div>
                    </div>

                )
            }
            
        })
    }

    render() {
        return (
            <div className="header-bottom">
                <div className="menu-top">
                    <ul className="nav">
                        {this.Menu()}
                    </ul>
                </div>
                <TitleMenu 
                    Titles = {this.props.titles}
                    handleClickMenu = {this.props.handleClickMenu}
                />
            </div>
        )
    }
}

HeaderBottom.propTypes = {
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
    titles: PropTypes.arrayOf({
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
};

export default HeaderBottom


