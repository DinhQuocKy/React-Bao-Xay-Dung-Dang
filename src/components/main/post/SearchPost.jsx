import React from 'react'
import IconFind from '../../../assets/image/icon_find.png'

class SearchPost extends React.Component{
    render(){
        return (
            <div className="search_vanban">
                <div className="form_search">
                    <div className="search title">
                        <p>Tìm kiếm</p>
                    </div>
                    <div className="search input">
                        <input placeholder="Nhập tên file hoặc mô tả" type="text" onChange = {(e) => this.props.handleOnchangeKeyword(e)}/>
                    </div>
                    <div className="search" onClick = {this.props.handleFindKeyword}>
                        <img src={IconFind}/>
                    </div>
                </div>
            </div>
        )
    }
}


export default SearchPost 