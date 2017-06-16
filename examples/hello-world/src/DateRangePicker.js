/*  Examples to Include: Default  |  Custom Date Format  |  Custom CLass Name  |  Custom Calendar Classname  |  Placeholder Text  |  Date Range  |  Disable  |   Fixed Height  |  Custom Input  |  Multiple Months  */
import React from 'react'
import DatePicker from 'react-datepicker'
import moment from 'moment'

export default class DateRangePicker extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      startDate: moment(),
      endDate: moment()
    }
  }

  handleChange = ({ startDate, endDate }) => {
    startDate = startDate || this.state.startDate
    endDate = endDate || this.state.endDate

    if (startDate.isAfter(endDate)) {
      var temp = startDate
      startDate = endDate
      endDate = temp
    }

    this.setState({ startDate, endDate })
  }

  handleChangeStart = (startDate) => this.handleChange({ startDate })

  handleChangeEnd = (endDate) => this.handleChange({ endDate })

  render () {
    return <div className="row">
        <div className="column">
            <DatePicker
                selected={this.state.startDate}
                selectsStart
                startDate={this.state.startDate}
                endDate={this.state.endDate}
                onChange={this.handleChangeStart}
                placeholderText="Select Start Date"
                dateFormat="MMM, d YYYY"
                className=""
                calendarClassName=""
            />
            <DatePicker
                selected={this.state.endDate}
                selectsEnd
                endDate={this.state.endDate}
                onChange={this.handleChangeEnd}
                placeholderText="Select Start Date"
                dateFormat="MMM, d YYYY"
                className=""
                calendarClassName=""
            />
        </div>
    </div>
  }
}

export default DateRangePicker;
