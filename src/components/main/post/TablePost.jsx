import React from 'react'

import IconDown from '../../../assets/image/icon_down.png'

class TablePost extends React.Component {
    render(){
        return (
            <div className="table_vanban">
                <div className="form_table">
                    <table>
                        <thead>
                            <tr>
                                <th className="stt">STT</th>
                                <th className="des">Mô tả</th>
                                <th className="kind">Loại văn bản</th>
                                <th className="down"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.props.dataDoc.map((item, index)=>{
                                    return (
                                        <tr>
                                            <td>{index+1}</td>
                                            <td className="des">
                                                <i>{item.itali}</i>
                                                {item.content.map((cont)=>{
                                                    return <p dangerouslySetInnerHTML={{__html: cont}}></p>
                                                })}
                                            </td>
                                            <td>{item.kind}</td>
                                            <td>
                                                <img src={IconDown}/>
                                            </td>
                                        </tr>
                                    )
                                })
                            } 
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default TablePost