/*import React from 'react'
  import DatePicker from 'react-datepicker'
  import moment from 'moment'

  export default class MultiMonth extends React.Component {
    constructor (props) {
      super(props)
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
        <pre className="column example__code">
          <code className="jsx">{`
  <DatePicker
      selected={this.state.startDate}
      onChange={this.handleChange}
      monthsShown={2}
  />
  `}
          </code>
        </pre>
        <div className="column">
          <DatePicker
              monthsShown={2}
              onChange={this.handleChange}
              selected={this.state.startDate} />
        </div>
      </div>
    }
  }
*/
/*  Examples to Include: Default  |  Custom Date Format  |  Custom CLass Name  |  Custom Calendar Classname  |  Placeholder Text  |  Date Range  |  Disable  |   Fixed Height  |  Custom Input  |  Multiple Months  */
import React from 'react'
import DatePicker from 'react-datepicker'
import moment from 'moment'
import PropTypes from 'prop-types'

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

  // Custom date range picker selection
  // customInput={<ExampleCustomInput />}
  // disabled

  render () {
    return <div className="multiWrap">
        <div className="row">
          <div className="column">
              <DatePicker
                  selected={this.state.startDate}
                  selectsStart
                  startDate={this.state.startDate}
                  endDate={this.state.endDate}
                  onChange={this.handleChangeStart}
                  dateFormat="MMM, D YYYY"
                  className=""
                  calendarClassName=""
                  placeholderText="Select Start Date" />
              <DatePicker
                  selected={this.state.endDate}
                  selectsEnd
                  startDate={this.state.startDate}
                  endDate={this.state.endDate}
                  onChange={this.handleChangeEnd}
                  dateFormat="MMM, D YYYY"
                  className=""
                  calendarClassName=""
                  placeholderText="Select Start Date" />
          </div>
        </div>
    </div>
  }
}

