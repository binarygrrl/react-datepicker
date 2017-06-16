import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';

class App extends Component {
/*  constructor() {
    super();
    this.state = {
      startDate: moment()
    };
  }*/

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
                onChange={this.handleChangeStart} 
                dateFormat="MMM, d YYYY"
                className=""
                calendarClassName=""                
                placeholderText="Select Start Date"
            />
            <DatePicker
                selected={this.state.endDate}
                selectsEnd
                startDate={this.state.startDate}
                endDate={this.state.endDate}
                onChange={this.handleChangeEnd}
                dateFormat="MMM, d YYYY"
                className=""
                calendarClassName=""                
                placeholderText="Select End Date"
            />
        </div>
        <div className="column">
            <h3>Custom Date Picker</h3>
            <DatePicker
                selected={this.state.startDate}
                onChange={this.handleChange}
                dateFormat="MMM, d YYYY"
                className=""
                calendarClassName=""                
                placeholderText="Select Date"                
                monthsShown={2}/>
        </div>
    </div>
  }

}

export default App;
