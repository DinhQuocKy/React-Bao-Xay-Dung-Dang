import React from 'react'
import '../../../assets/commomNews.css'
import ContentNews from './ContentNews'
import PropTypes from 'prop-types'


class News extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            NewsCurrent: this.props.newsCurrent
        }
    }

    handleClickNews = (item) => {
        this.setState({ NewsCurrent: item })
    }

    render() {
        let item = this.state.NewsCurrent
        return (
            <div className="home container-commom-news">
                <div className="commom-news">
                    <ContentNews
                        item={item}
                    />
                    <div>
                        <div><hr /></div>
                        <div className="relate">các tin liên quan</div>
                        <ul>
                            {this.props.dataNews.map((item) => {
                                const time = new Date(item.UpdateTime)
                                return (
                                    <li
                                        onClick={() => { this.handleClickNews(item) }}
                                    >
                                        {item.Title}
                                        <i>(Cập nhật {time.toLocaleDateString()} {time.toLocaleTimeString()})</i>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

News.propTypes = {
    data: PropTypes.arrayOf({
        id: PropTypes.number,
        Title: PropTypes.string,
        SubTitle: PropTypes.string,
        Image: PropTypes.string,
        UpdateTime: PropTypes.instanceOf(Date)
    }),
    itemCurrent: PropTypes.objectOf({
        id: PropTypes.number,
        Title: PropTypes.string,
        SubTitle: PropTypes.string,
        Image: PropTypes.string,
        UpdateTime: PropTypes.instanceOf(Date)
    }),
    handleClickNews: PropTypes.func
}

export default News