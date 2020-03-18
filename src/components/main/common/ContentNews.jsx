import React from 'react'

export default class ContentNews extends React.Component {
    render() {
        const item = this.props.item
        const time = new Date(item.UpdateTime)
        return (
            <div>
                <div className="news">
                    <h1>{item.Title}</h1>
                </div>
                <div className="news updateDate">
                    <i>Cập nhật {time.toLocaleDateString()} {time.toLocaleTimeString()}</i>
                </div>
                <div className="news">
                    <b>{item.SubTitle}</b>
                </div>
                <div>
                    <div>
                        <p>
                            <em dangerouslySetInnerHTML={{ __html: item.Content ? item.Content : "Chưa có nội dung" }}>
                            </em>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

