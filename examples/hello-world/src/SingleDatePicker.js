/*   Examples to Include: Default  |  Custom Date Format  |  Custom CLass Name  |  Custom Calendar Classname  |  Placeholder Text  |  Disable  |   Fixed Height  |  Custom Input  */
import React from 'react'
//import PropTypes from 'prop-types'
import DatePicker from 'react-datepicker'
import moment from 'moment'

export default class SingleDatePicker extends React.Component {
  //constructor (props) {
    //super(props)
  constructor () {
    super()
    this.state = {
      startDate: moment()
    }
  }

  handleChange = (date) => {
    this.setState({
      startDate: date
    })
  }

  render () {
    return <div className="row">
        <div className="column">
            <DatePicker
                dateFormat="MMM, d YYYY"
                selected={this.state.startDate}
                onChange={this.handleChange}
                className=""
                calendarClassName=""
                placeholderText="Select Date" />
        </div>
    </div>
  }
}

export default SingleDatePicker;
