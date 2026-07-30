import { DateTimePicker } from '@syncfusion/ej2-calendars';

let datetimepickerObject: DateTimePicker = new DateTimePicker({
  placeholder: "Select Date Time",
  value: new Date(),
  width: "250px",
  serverTimezoneOffset: 5.5 
});
datetimepickerObject.appendTo('#element');