import React from 'react'
import hljs from 'highlight.js'

import Default from './examples/default'
import CodeExampleComponent from './code_example_component'

import CustomDateFormat from './examples/custom_date_format'
import CustomClassName from './examples/custom_class_name'
import CustomCalendarClassName from './examples/custom_calendar_class_name'
import PlaceholderText from './examples/placeholder_text'
import Disabled from './examples/disabled'
import DateRange from './examples/date_range'
import FixedCalendar from './examples/fixed_calendar'
import CustomInput from './examples/custom_input'
import MultiMonth from './examples/multi_month'
import MultiMonthDrp from './examples/multi_month_drp'

import 'react-datepicker/dist/react-datepicker.css'
import './style.scss'
//import './remedystyles.scss'

export default class exampleComponents extends React.Component {
  componentDidMount () {
    hljs.initHighlightingOnLoad()
  }

  examples = [{
    title: 'Default',
    component: <Default />
  },
  {
    title: 'Custom date format',
    component: <CustomDateFormat />
  },
  {
    title: 'Custom class name',
    component: <CustomClassName />
  },
  {
    title: 'Custom calendar class name',
    component: <CustomCalendarClassName />
  },
  {
    title: 'Placeholder text',
    component: <PlaceholderText />
  },
  {
    title: 'Date Range',
    component: <DateRange />
  },
  {
    title: 'Disable datepicker',
    component: <Disabled />
  },
  {
    title: 'Fixed height of Calendar',
    component: <FixedCalendar />
  },
  {
    title: 'Custom input',
    component: <CustomInput />
  },
  {
    title: 'Multiple months',
    component: <MultiMonth />
  }]

  renderExamples = () =>
    this.examples.map((example, index) =>
      <CodeExampleComponent key={`example-${index}`} id={index} title={example.title}>
        {example.component}
      </CodeExampleComponent>
    )

  renderLeftColumn = () =>
    this.examples.map((example, index) =>
      <li className="examples__navigation-item" key={`link-${index}`}>
        <a href={`#example-${index}`}>
          {example.title}
        </a>
      </li>
    )

  render () {
    return <div>
      <h1>Examples</h1>
      <ul className="examples__navigation">
        {this.renderLeftColumn()}
      </ul>
      <div className="examples">
        {this.renderExamples()}
      </div>
    </div>
  }
}
