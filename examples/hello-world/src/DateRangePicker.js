/*  Examples to Include: Default  |  Custom Date Format  |  Custom CLass Name  |  Custom Calendar Classname  |  Placeholder Text  |  Date Range  |  Disable  |   Fixed Height  |  Custom Input  |  Multiple Months  */
import React from 'react'
import DatePicker from 'react-datepicker'
//import moment from 'moment'

export default class DateRangePicker extends React.Component {
   state = {
    startDate: null,
    endDate: null
  }

  //react-datepicker__day react-datepicker__day--range-end react-datepicker__day--in-range

/*  constructor (props) {
    super(props)
    this.state = {
      startDate: moment(),
      endDate: moment()
    }
  }*/

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
              dateFormat="MMM, D YYYY"
              className="startDateInput"
              calendarClassName="dateRangeCalendar"
            />
            <DatePicker
              selected={this.state.endDate}
              selectsEnd
              startDate={this.state.startDate}
              endDate={this.state.endDate}
              onChange={this.handleChangeEnd}
              placeholderText="Select End Date"
              dateFormat="MMM, D YYYY"
              className="endDateInput"
              calendarClassName="dateRangeCalendar"
            />
        </div>
    </div>
  }
}

export default DateRangePicker;



  /* <div className="row">
    <div className="column">

      <h3>App Range Picker</h3>
        <DatePicker
            selected={this.state.startDate}
            selectsStart
            startDate={this.state.startDate}
            endDate={this.state.endDate}
            onChange={this.handleChangeStart}
            dateFormat="MMM, D YYYY"
            className="appRange"
            calendarClassName=""
            placeholderText="Select Start Date"
        />
        <DatePicker
            placeholderText="Select End Date"
            selected={this.state.endDate}
            selectsEnd
            startDate={this.state.startDate}
            endDate={this.state.endDate}
            onChange={this.handleChangeEnd}
            dateFormat="MMM, D YYYY"
            className=""
            calendarClassName=""
        />
    </div>
  </div> */



/*  1st Attempt to Make one Input for a Range
  <div className="row">
    <div className="column">
        <h3>Multi Date View</h3>
        <DatePicker
            placeholderText="Select Date"
            selected={this.state.startDate}
            onSelect={this.state.startDate}
            onChange={this.handleChange}
            startDate={this.state.startDate}
            endDate={this.state.endDate}
            dateFormat="MMM, D YYYY"
            className=""
            calendarClassName=""                
            monthsShown={2}
            />
    </div>
  </div>
*/