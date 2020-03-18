import React from 'react'

class HeaderTop extends React.Component{
    render(){
        return (
            <div className="container"> 
                <div className="item logo">
                    <img src="http://dangbo.saigonco-op.vn/Content/Image/logo-1.png" alt=""/>
                </div>
                <div className="items link">
                    <div className="container-form">
                        <div className="form">
                            <select>
                                <option>Tin tức</option>
                                <option>Văn bản</option>
                            </select>
                        </div>
                        <div className="form">
                            <input type="text"/>
                            <input type="submit"/>
                        </div>
                    </div>
                </div>
                
            </div>
        )   
    }
}

export default HeaderTop