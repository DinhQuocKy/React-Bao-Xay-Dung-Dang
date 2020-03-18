import React from 'react'
import SearchPost from './SearchPost'
import TablePost from './TablePost'
import PropTypes from 'prop-types'

class PostRight extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            input: "",
            isFind: false,
            listFind: null
        }
    }

    change_alias = (alias) => {
        var str = alias;
        str = str.toLowerCase();
        str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g,"a"); 
        str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g,"e"); 
        str = str.replace(/ì|í|ị|ỉ|ĩ/g,"i"); 
        str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g,"o"); 
        str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g,"u"); 
        str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g,"y"); 
        str = str.replace(/đ/g,"d");
        str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g," ");
        str = str.replace(/ + /g," ");
        str = str.trim(); 
        return str;
    }

    handleOnchangeKeyword = (e) =>{
        this.setState({input: e.target.value})
    }

    handleFindKeyword = () =>{
        let list = []
        this.props.data.map((item)=>{
            if(this.change_alias(item.itali).search(this.change_alias(this.state.input))!=-1){
                list.push(item)
            }
        })
        this.setState({
            listFind: list,
            isFind: true
        })
    }

    render(){
        return (
            <div className="vanban_colR">
                <div className="container_vanban">
                    <SearchPost
                        handleOnchangeKeyword = {this.handleOnchangeKeyword}
                        handleFindKeyword = {this.handleFindKeyword}
                    />
                    <TablePost 
                        dataDoc = {this.state.isFind?this.state.listFind:this.props.data} 
                    />
                </div>
            </div>
        )
    }
}

PostRight.propTypes = {
    data : PropTypes.array,
}

export default PostRight