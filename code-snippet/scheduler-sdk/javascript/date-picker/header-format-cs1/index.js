   var datepickerObject = new ej.calendars.DatePicker({
        dayHeaderFormat: "Short"
    });
    datepickerObject.appendTo('#element');

    var formatLabel = new ej.dropdowns.DropDownList({
        // set the height of the popup element
        popupHeight: '200px',
        // bind the change event
            change: function(args) {
                 datepickerObject.dayHeaderFormat = args.value;
            }
    });
    formatLabel.appendTo('#select');

