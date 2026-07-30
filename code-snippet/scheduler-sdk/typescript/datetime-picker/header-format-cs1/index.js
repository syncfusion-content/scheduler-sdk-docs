   var datetimepickerObj = new ej.calendars.DateTimePicker({
        dayHeaderFormat: "Short"
    });
    datetimepickerObj.appendTo('#element');

    var formatLabel = new ej.dropdowns.DropDownList({
        // set the height of the popup element
        popupHeight: '200px',
        // bind the change event
            change: function(args) {
                 datetimepickerObj.dayHeaderFormat = args.value;
            }
    });
    formatLabel.appendTo('#select');

