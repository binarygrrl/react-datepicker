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
import PropTypes from 'prop-types'
import DatePicker from 'react-datepicker'
import moment from 'moment'

export default class Default extends React.Component {
//export default class DateRangePicker extends React.Component {
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
          <h1>Custom Date Picker</h1>
          <div className="column">
              <DatePicker
                  dateFormat="MMM, D YYYY"
                  selected={this.state.startDate}
                  onChange={this.handleChange}
                  className=""
                  calendarClassName=""
                  placeholderText="Select Start Date"
                  fixedHeight
                  monthsShown={2}/>
          </div>
      </div>
    </div>
  }
}



/*import React from 'react'
import DatePicker from 'react-datepicker'
import moment from 'moment'

export default class Default extends React.Component {
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
/>
`}
        </code>
      </pre>
      <div className="column">
        <DatePicker
            selected={this.state.startDate}
            onChange={this.handleChange} />
      </div>
    </div>
  }
}
*/
/*   Examples to Include: Default  |  Custom Date Format  |  Custom CLass Name  |  Custom Calendar Classname  |  Placeholder Text  |  Disable  |   Fixed Height  |  Custom Input  */
/*import React from 'react'
import PropTypes from 'prop-types'
import DatePicker from 'react-datepicker'
import moment from 'moment'*/

/* eslint-disable react/no-multi-comp */
/*class ExampleCustomInput extends React.Component {
  static propTypes = {
    onClick: PropTypes.func,
    value: PropTypes.string
  }

  render () {
    return (
      <button
          className="example-custom-input"
          onClick={this.props.onClick}>
          {this.props.value}
      </button>
    )
  }
}
export default class Default extends React.Component {
//export default class SingleDatePicker extends React.Component {
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
        <div className="column">
            <DatePicker
                //customInput={<ExampleCustomInput />}
                dateFormat="MMM, D YYYY"
                selected={this.state.startDate}
                onChange={this.handleChange}
                className="singleDatePicker"
                calendarClassName="calendar"
                //disabled
                placeholderText="Select Date"
                fixedHeight />
      </div>
    </div>
  }
}*/
