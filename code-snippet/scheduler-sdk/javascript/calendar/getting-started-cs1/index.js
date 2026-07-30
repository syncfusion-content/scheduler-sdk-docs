   ej.base.enableRipple(true);
   
   var calendar = new ej.calendars.Calendar({  
    });
    document.onkeyup = function (e) {
    if (e.altKey && e.keyCode === 84) {
        // press alt+t to focus the control.
       calendar.element.querySelectorAll('.e-content table')[0].focus()
    }
    }
    calendar.appendTo('#element');

