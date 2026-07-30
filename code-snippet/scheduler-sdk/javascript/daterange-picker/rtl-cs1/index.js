   ej.base.enableRipple(true);        
     loadCultureFiles('he');

  var L10n = ej.base.L10n;

     L10n.load({
    'he': {
        'daterangepicker': {
            placeholder: 'בחר טווח',
            startLabel: 'תווית התחלה',
            endLabel: 'ח',
            applyText: 'להחיל טקסט',
            cancelText: 'בטל טקסט',
            selectedDays: 'ימים נבחרים',
            days: 'أימים',
            customRange: 'טווח מותאם אישית',
            startDate: 'תאריך התחלה',
            endDate: 'תאריך סיום'
        }
    }
    });

   var daterangepicker = new ej.calendars.DateRangePicker({
       locale: 'he',enableRtl:true
    });
    daterangepicker.appendTo('#element');
 
function loadCultureFiles(name) {
        var files = ['ca-gregorian.json', 'numbers.json', 'timeZoneNames.json'];
        if (name === 'he') {
            files.push('numberingSystems.json');
        }
        var loader = ej.base.loadCldr;
        var loadCulture = function (prop) {
            var val, ajax;
            if (name === 'he' && prop === files.length - 1) {
                ajax = new ej.base.Ajax('https://ej2.syncfusion.com/javascript/demos/src/common/cldr-data/supplemental/' + files[prop], 'GET', false);
            } else {
                ajax = new ej.base.Ajax('https://ej2.syncfusion.com/javascript/demos/src/common/cldr-data/main/' + name + '/' + files[prop], 'GET', false);
            }
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


