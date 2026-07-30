   var calendarObject = new ej.calendars.Calendar({
        dayHeaderFormat: "Short"
    });
    calendarObject.appendTo('#element');

    var formatLabel = new ej.dropdowns.DropDownList({
        // set the height of the popup element
        popupHeight: '200px',
        // bind the change event
            change: function(args) {
                 calendarObject.dayHeaderFormat = args.value;
            }
    });
    formatLabel.appendTo('#select');

