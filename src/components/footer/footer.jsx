import React from 'react'
import '../../assets/footer.css'
import PropTypes from 'prop-types'

class Footer extends React.Component {
    render() {
        return (
            <div className="main container-footer">
                <div className="footer">
                    <div className="menu-footer">
                        <ul className="container-menu-item">
                            {this.props.list.map((item) => {
                                return (
                                    <li
                                        className="menu-item"
                                        onClick={() => { this.props.handleClickMenu(item) }}
                                    >
                                        {item.Content}
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className="info-footer">
                        <strong>
                            TRANG TIN ĐIỆN TỬ ĐẢNG BỘ LIÊN HIỆP HỢP TÁC XÃ THƯƠNG MẠI TP HỒ CHÍ MINH
                            </strong>
                    </div>
                </div>

            </div>
        )
    }
}

Footer.propTypes = {
    list: PropTypes.array,
    handleClickMenu: PropTypes.func
}
export default Footer

