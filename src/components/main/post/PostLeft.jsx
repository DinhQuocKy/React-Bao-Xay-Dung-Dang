import React from 'react'
import PropTypes from 'prop-types'


class PostLeft extends React.Component{
    render(){
        return (
            <div className="danhmucvanban">
                <h4>Văn bản</h4>
                {this.props.data.map((item)=>{
                    return <p key={item} onClick={()=>{this.props.handleFilter(item)}}>{item}</p>
                })}
            </div>
        )
    }
}

PostLeft.propTypes = {
    data : PropTypes.array,
    handleFilter: PropTypes.func
}

export default PostLeft