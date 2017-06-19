/*   Examples to Include: Default  |  Custom Date Format  |  Custom CLass Name  |  Custom Calendar Classname  |  Placeholder Text  |  Disable  |   Fixed Height  |  Custom Input  */
import React from 'react'
import DatePicker from 'react-datepicker'
//import moment from 'moment'

export default class SingleDatePicker extends React.Component {
   state = {
    startDate: null
  }

  handleChange = (date) => {
    this.setState({
      startDate: date
    })
  }

/*  //constructor (props) {
    //super(props)
  constructor () {
    super()
    this.state = {
      startDate: 'Select date'
      //selected: "Select date"
    }
  }

  //On Change update value in the input

  handleChange = (date) => {
    let startDate = moment(date)
    this.setState({
      startDate: startDate
      //selected: startDate
    })
  }*/

  render () {
    return <div className="row">
        <div className="column">
            <DatePicker          
              selected={this.state.startDate}
              onChange={this.handleChange}
              dateFormat="MMM, D YYYY"
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