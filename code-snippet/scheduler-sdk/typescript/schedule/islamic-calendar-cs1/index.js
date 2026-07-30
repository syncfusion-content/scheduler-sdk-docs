ej.base.setCulture('ar');
loadCultureFiles();

var localeTexts;
var localeAjax = new ej.base.Ajax('https://helpej2.syncfusion.com/javascript/documentation/code-snippet/schedule/islamic-calendar-cs1/locale.json', 'GET', false);
localeAjax.onSuccess = function (value) {
  localeTexts = value;
};
localeAjax.send();

ej.base.L10n.load(JSON.parse(localeTexts));

function loadCultureFiles() {
  var files = ['https://helpej2.syncfusion.com/javascript/documentation/code-snippet/schedule/islamic-calendar-cs1/ca-gregorian.json', 'https://helpej2.syncfusion.com/javascript/documentation/code-snippet/schedule/islamic-calendar-cs1/numbers.json', 'https://helpej2.syncfusion.com/javascript/documentation/code-snippet/schedule/islamic-calendar-cs1/numberingSystems.json', 'https://helpej2.syncfusion.com/javascript/documentation/code-snippet/schedule/islamic-calendar-cs1/timeZoneNames.json'];
  var loader = ej.base.loadCldr;
  var loadCulture = function (prop) {
    var val, ajax;
    ajax = new ej.base.Ajax(files[prop], 'GET', false);
    ajax.onSuccess = function (value) {
      val = value;
    };
    ajax.send();
    loader(JSON.parse(val));
  };
  for (var prop = 0; prop < files.length; prop++) {
    loadCulture(prop);
  }
}

var scheduleObj = new ej.schedule.Schedule({
  width: '100%',
  height: '550px',
  views: ['Day', 'Week', 'WorkWeek', 'Month'],
  selectedDate: new Date(2018, 1, 15),
  eventSettings: { dataSource: scheduleData }
});
scheduleObj.appendTo('#Schedule');