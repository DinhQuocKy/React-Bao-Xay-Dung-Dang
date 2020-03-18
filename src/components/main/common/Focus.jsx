import React from 'react'
import FocusLeft from './FocusLeft'
import FocusRight from './FocusRight'
import PropTypes from 'prop-types'

class Focus extends React.Component {

    render() {
        return (
            <div className="top-slide">
                <div>
                    <ul>
                        {
                            this.props.menuCurrent.SubMenu!=null?this.props.menuCurrent.SubMenu.map(item=>{
                                return (
                                    <li className="fs-content" onClick={()=>{this.props.handleClickMenu(item)}}><span className="dot"></span>{item.Content}</li>
                                )
                            }):''
                        }
                    </ul>
                </div>
                <div className="container-focus-new focus-new">
                    <FocusLeft
                        dataNews={this.props.dataNews}
                        handleClickNews={this.props.handleClickNews}
                    />
                    <FocusRight
                        dataNews={this.props.dataNews}
                        handleClickNews={this.props.handleClickNews}
                    />
                </div>
            </div>
        )
    }
}

Focus.propTypes = {
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
                })
            )
        })
    ),
}

export default Focus