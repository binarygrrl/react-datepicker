/*   Examples to Include: Default  |  Custom Date Format  |  Custom CLass Name  |  Custom Calendar Classname  |  Placeholder Text  |  Disable  |   Fixed Height  |  Custom Input  */
import React from 'react'
import DatePicker from 'react-datepicker'
import moment from 'moment'

export default class SingleDatePicker extends React.Component {
  //constructor (props) {
    //super(props)
  constructor () {
    super()
    this.state = {
      startDate: moment()
      //selected: "Select date"
    }
  }

  //On Change update value in the input

  handleChange = (date) => {
    //let startDate = this.state.startDate;
    this.setState({
      startDate: date
      //selected: startDate
    })
  }

  render () {
    return <div className="row">
        <div className="column">
            <DatePicker          
              dateFormat="MMM, D YYYY"
              //selected={this.state.selected}
              //selected={this.state.startDate}
              onChange={this.handleChange}
              className="singleDatePicker"
              calendarClassName="singleCalendar"
              placeholderText="Select Date"                 
            />
        </div>
    </div>
  }
}

export default SingleDatePicker;


/* render () {
    return <div className="row">
        <div className="column">
            <DatePicker
                dateFormat="MMM, D YYYY"
                selected={this.state.startDate}
                onChange={this.handleChange}
                className=""
                calendarClassName=""
                placeholderText="Select Date" />
        </div>
    </div>
  }*/