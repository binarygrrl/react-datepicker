React Datepicker Component Example
==============================

This is a very simple — yet runnable app — showing how to use React Datepicker component.

## Running Example

**In the project directory, run:**
```
$ npm install
$ npm start
```

Or if you're using Yarn:
```
yarn
yarn start
```
**Open [http://localhost:3000](http://localhost:3000) to view it in the browser.**

[User Guide](http://localhost:3000)


//Remedy Updates to Calendar Widget  - JIRA: EC-3609
Also, calendar controls must behave as expected. Issues to look out for here are:
Calendar picker must close when the user presses escape,
Calendar picker must close when the user clicks outside the calendar picker area,
Calendar pickers that are near one another should not obscure one another. If one is open, others on the page should close. (The previous point may cover this issue.)
Users should be able to manually enter a date, which will show a validation failure if the entered text isn't really a date. (We can use moment.js to help us figure that out.)
The calendars need to be ready to drop into any form, with correct visual styling and behaviors. This task is to make those changes to the DatePicker and DateRange components.
