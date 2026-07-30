   ej.base.enableRipple(true);
  
  var L10n = ej.base.L10n;

   L10n.load({
    'de': {
        'datepicker': { placeholder: 'Wählen Sie ein Datum aus',
         today:'heute'}
    }
});

     loadCultureFiles('de');
   var datepicker = new ej.calendars.DatePicker({
       locale: 'de'
    });
    datepicker.appendTo('#element');

  function loadCultureFiles(name) {
        var files = ['ca-gregorian.json', 'numbers.json', 'timeZoneNames.json'];
        var loader = ej.base.loadCldr;
        var loadCulture = function (prop) {
            var val, ajax;
            ajax = new ej.base.Ajax('https://ej2.syncfusion.com/javascript/demos/' + 'src/common/cldr-data/main/' + name + '/' + files[prop], 'GET', false);
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

