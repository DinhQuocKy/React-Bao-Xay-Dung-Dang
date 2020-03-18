import React from 'react'
import PostLeft from './PostLeft'
import PostRight from './PostRight'
import PropTypes from 'prop-types'


import '../../../assets/doc.css'

class Post extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            dataFilter: {}
        }
    }

    setItem = ()=>{
        let kinds = [...new Set(this.props.data.map(item=>item.kind))]
        return kinds
    }

    handleFilter = (kind) => {
        const dataFilter = this.props.data.filter(item=>item.kind===kind)
        this.setState({dataFilter: dataFilter})
    }

    getDataPost = () =>{
        return Object.entries(this.state.dataFilter).length == 0? this.props.data : this.state.dataFilter
    }

    render(){
        return (
            <div className="home">
                <div className="main-file">
                    <div className="file-list file-list-left">
                        <PostLeft 
                            data = {this.setItem()}
                            handleFilter = {this.handleFilter}
                        />
                    </div>
                    <div className="file-list file-list-right">
                        <PostRight data = {this.getDataPost()}/>
                    </div>
                </div>
            </div>
        )
    }
}

Post.propTypes = {
    data : PropTypes.array
}


export default Post