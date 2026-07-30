   var daterangepickerObj = new ej.calendars.DateRangePicker({
        dayHeaderFormat: "Short",
        cssClass: "format-wide"
    });
    daterangepickerObj.appendTo('#element');

    var formatLabel = new ej.dropdowns.DropDownList({
        // set the height of the popup element
        popupHeight: '200px',
        // bind the change event
            change: function(args) {
                 daterangepickerObj.dayHeaderFormat = args.value;
            }
    });
    formatLabel.appendTo('#select');

