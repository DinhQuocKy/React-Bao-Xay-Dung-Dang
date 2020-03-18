import React from 'react'
import PropTypes from 'prop-types'


class NewsCate extends React.Component{
    render(){
        return(
            <div className="container-focus-main">
                {this.props.newsCate.map((item)=>{
                    const time = new Date(item.UpdateTime)
                    return (
                        <div key={item.id} className="focus-main" onClick= {()=>this.props.handleClickNews(item)}>
                            <img 
                                className="img-focus-main" 
                                alt="" 
                                width="228px" 
                                height="128" 
                                src={item.Image}
                            />
                            <div className="item-news">
                                <span>Cập nhật {time.toLocaleDateString()} {time.toLocaleTimeString()} </span>
                                <b>{item.Title}</b>
                                <p>{item.SubTitle}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}

NewsCate.propTypes = {
    newsCate : PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            Title: PropTypes.string,
            SubTitle: PropTypes.string,
            Image: PropTypes.string,
            UpdateTime: PropTypes.instanceOf(Date)
        })
    ),
    handleClickNews : PropTypes.func
}

export default NewsCate