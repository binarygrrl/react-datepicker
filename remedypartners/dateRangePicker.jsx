/* Examples to Include
Default
Custom Date Format
Custom CLass Name
Custom Calendar Classname
Placeholder Text

Disable
Fixed Height
Custom Input
Multiple Months
/

/*  Examples to Include: Default  |  Custom Date Format  |  Custom CLass Name  |  Custom Calendar Classname  |  Placeholder Text  |  Date Range  |  Disable  |   Fixed Height  |  Custom Input  |  Multiple Months  */

import React from 'react'
import DatePicker from 'react-datepicker'
import moment from 'moment'

export default class DateRangePicker extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      startDate: moment('2017-06-08'),
      endDate: moment('2017-06-10')
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
                onChange={this.handleChangeStart} />
            <DatePicker
                selected={this.state.endDate}
                selectsEnd
                startDate={this.state.startDate}
                endDate={this.state.endDate}
                onChange={this.handleChangeEnd}/>
            // Custom date range picker selection
            <DatePicker
                // customInput={<ExampleCustomInput />}
                dateFormat="MMM, d YYYY"
                selected={this.state.startDate}
                onChange={this.handleChange}
                className="red-border"
                calendarClassName="rasta-stripes"
                disabled
                placeholderText="Select Start Date"
                fixedHeight
                monthsShown={2}/>
        </div>
    </div>
  }
}
