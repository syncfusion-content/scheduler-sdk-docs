var scheduleObj = new ej.schedule.Schedule({
  width: '100%',
  height: '550px',
  selectedDate: new Date(),
  eventSettings: { dataSource: dataManager },
  views: ['Day', 'Week', 'WorkWeek', 'Month'],
  actionBegin: function (args) {
    if (args.requestType === 'toolbarItemRendering') {
      var printItem = {
        align: 'Right', showTextOn: 'Both', prefixIcon: 'e-icon-schedule-print',
        text: 'Print', cssClass: 'e-schedule-print', click: onPrintIconClick
      };
      args.items.push(printItem);
    }
  },
  beforePrint: function (args) {
    var headerElement = document.createElement('div');
    headerElement.innerHTML = "\n            <h1>" + department + " Department Schedule</h1>\n            <p>Printed by: " + userRole + "</p>\n            <p>Date: " + new Date().toLocaleString() + "</p>\n        ";
    headerElement.style.backgroundColor = getDepartmentColor(department);
    headerElement.style.color = 'white';
    headerElement.style.padding = '10px';
    args.printElement.insertBefore(headerElement, args.printElement.firstChild);
    var highPriorityEvents = args.printElement.querySelectorAll('.e-appointment.high-priority');
    highPriorityEvents.forEach(function (event) {
      event.style.border = '2px solid red';
    });
    var events = scheduleObj.getEvents();
    var summaryElement = document.createElement('div');
    summaryElement.innerHTML = "\n            <p>Total Events: " + events.length + "</p>\n            <p>High Priority Events: " + events.filter(function (e) { return e.priority === 'high'; }).length + "</p>\n        ";
    args.printElement.appendChild(summaryElement);
    if (userRole === 'Manager') {
      var managerNote = document.createElement('div');
      managerNote.textContent = 'Confidential - For managerial use only';
      managerNote.style.color = 'red';
      args.printElement.appendChild(managerNote);
    }
  }
});
scheduleObj.appendTo('#Schedule');
function onPrintIconClick() {
  scheduleObj.print();
}
function getDepartmentColor(dept) {
  var colors = {
      'Sales': '#4CAF50',
      'Marketing': '#2196F3',
      'Engineering': '#FF9800',
      'HR': '#9C27B0'
  };
  return colors[dept] || '#607D8B';
}
function getCurrentUserInfo() {
  return { department: 'Sales', userRole: 'Manager' };
}