

import { Calendar } from '@syncfusion/ej2-calendars';
// creates a Calendar with today and clear buttons.
let calendarObject: Calendar = new Calendar({
    created: onCreate
});
calendarObject.appendTo('#element');
function onCreate() {
    //creates the custom element for clear button.
    let clearBtn: HTMLElement = document.createElement('button');
    let footerElement: HTMLElement = document.getElementsByClassName('e-footer-container')[0];
    clearBtn.className = 'e-btn e-clear e-flat';
    clearBtn.textContent = 'Clear';
    footerElement.prepend(clearBtn);
    this.element.appendChild(footerElement);
}
// custom click handler to update the value property with current date object.
document.querySelector('.e-footer-container .e-clear').addEventListener('click', function () {
    calendarObject.value = new Date();
    calendarObject.dataBind();
});


