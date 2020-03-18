import React from 'react'

export default class Clock extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            time : new Date()
        }
    }

    tick() {
        this.setState({
          time: new Date()
        });
    }

    componentDidMount() {
        this.intervalID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.intervalID);
    }

    getDate = () => {
        const days = {
            '0': "Chủ nhật",
            '1': "Thứ hai",
            "2": "Thứ ba",
            "3": "Thứ tư",
            "4": "Thứ năm",
            "5": "Thứ sáu",
            "6": "Thứ bảy"
        }
        
        const today = this.state.time
        const dd = String(today.getDate()).padStart(2, '0');
        const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        const yyyy = today.getFullYear();
        return `${days[today.getDay()]}, ngày ${dd} tháng ${mm} năm ${yyyy}`
    }

    render(){
        return (
            <div className="dateTime">
                <p>{this.getDate()}</p>
            </div>
        )
    }
}