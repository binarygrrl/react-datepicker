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
export default class HeroExample extends React.Component {
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
}



/*import React from 'react'
import DatePicker from 'react-datepicker'
import moment from 'moment'

export default class HeroExample extends React.Component {
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
    return <DatePicker
        autoFocus
        selected={this.state.startDate}
        onChange={this.handleChange} />
  }
}
*/