import React from 'react'
import Header from './Header/Header'
import Footer from './footer/footer'
import { DataMenu } from '../model/dataMenu'
import { DataNews } from '../model/dataNews'
import { dictionary } from '../model/dictionary'
import Body from './main/Body'
// The State is generally managed outside

class Root extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            dataMenu: DataMenu,         // danh sách menu
            dataNews: DataNews,    // danh sách dữ liệu tin tức
            titles: [],            // danh sách menu con
            menuCurrent: {},
            newsCurrent: {}
        };
    }

    setTitle = (item) => {
        this.state.titles.length = 0
        let key = item.Id;
        while (dictionary[key] != undefined) {
            this.state.titles.push(dictionary[key])
            key = dictionary[key].Id
        }
        this.state.titles.push(item)
    }

    // gắn danh sách titles
    // gắn menu hiện tại
    // set lại news current cho phần tin tức
    handleClickMenu = (item) => {
        this.setTitle(item)
        this.setState({
            titles: this.state.titles,
            menuCurrent: item,
            newsCurrent: {}
        })
    }

    // khởi tạo danh sách Titles lần đầu cho trang đầu tiên
    componentDidMount() {
        let start = this.state.dataMenu[0]
        this.setTitle(start)
        this.setState({
            titles: this.state.titles,
            menuCurrent: start
        })
    }

    handleClickNews = (_item) => {
        let menu = null
        // nếu phần tin tức không thuộc phần hiển thị ở menu sở hữu
        if (_item.Id != this.state.menuCurrent.Id) {
            // tìm menu sở hữu tin tức khi click
            menu = this.state.dataMenu.find(item => item.Id == _item.id)
            // nếu không tìm thấy truy xuất ngược lại phần dictionary chưa menu cha
            // sau đó find menu con chưa tin tức
            if (menu == null) {
                menu = dictionary[_item.id].SubMenu.find(e => e.Id == _item.id)
            }
            this.setTitle(menu)
            this.setState({
                menuCurrent: menu,
                newsCurrent: _item,
                titles: this.state.titles
            })  
        }
        else {
            this.setState({
                newsCurrent: _item
            })
        }
    }

    render() {
        return (
            <div className="main-container">
                <Header
                    dataMenu={this.state.dataMenu}
                    menuCurrent={this.state.menuCurrent}
                    handleClickMenu={this.handleClickMenu}
                    titles={this.state.titles}
                />
                <Body
                    dataNews={this.state.dataNews}
                    handleClickMenu={this.handleClickMenu}
                    handleClickNews={this.handleClickNews}
                    menuCurrent={this.state.menuCurrent}
                    newsCurrent={this.state.newsCurrent}
                />
                <Footer
                    list={this.state.dataMenu}
                    handleClickMenu={this.handleClickMenu}
                />
            </div>
        )
    }
}


export default Root