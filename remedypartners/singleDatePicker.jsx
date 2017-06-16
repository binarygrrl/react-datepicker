/*   Examples to Include: Default  |  Custom Date Format  |  Custom CLass Name  |  Custom Calendar Classname  |  Placeholder Text  |  Disable  |   Fixed Height  |  Custom Input  */
import React from 'react'
import PropTypes from 'prop-types'
import DatePicker from 'react-datepicker'
import moment from 'moment'

/* eslint-disable react/no-multi-comp */
class ExampleCustomInput extends React.Component {
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

export default class SingleDatePicker extends React.Component {
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
                customInput={<ExampleCustomInput />}
                dateFormat="MMM, d YYYY"
                selected={this.state.startDate}
                onChange={this.handleChange}
                className="red-border"
                calendarClassName="rasta-stripes"
                disabled
                placeholderText="Select Date"
                fixedHeight />
      </div>
    </div>
  }
}
