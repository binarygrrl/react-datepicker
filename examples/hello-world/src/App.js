import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import SingleDatePicker from './SingleDatePicker'
import DateRangePicker from './DateRangePicker'

import 'react-datepicker/dist/react-datepicker.css';
import './remedyStyles.css';

class App extends Component {
/*  constructor() {
    super();
    this.state = {
      startDate: moment()
    };
  }*/

   constructor (props) {
    super(props)
    let today = new Date()
    this.state = {      
      startDate: moment(today),
      endDate: moment(today),
      placeholder: 'Select Date'
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
    return <div class="datePickWrap">
        <div className="row">
          <div className="column">

            <h3>App Range Picker</h3>
              <DatePicker
                  selected={this.state.startDate}
                  selectsStart
                  startDate={this.state.startDate}
                  endDate={this.state.endDate}
                  onChange={this.handleChangeStart}
                  dateFormat="MMM, D YYYY"
                  className=""
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
        </div>
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
        <div className="row">
          <div className="column">
            <h3>Single Date Picker</h3>
            <SingleDatePicker></SingleDatePicker>
          </div>
        </div>
        <div className="row">
          <div className="column">
            <h3>Date Range Picker</h3>
            <DateRangePicker></DateRangePicker>
          </div>
        </div>
    </div>
  }

}

export default App;
