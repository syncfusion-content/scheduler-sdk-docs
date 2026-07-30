   ej.base.enableRipple(true);

   var calendar = new ej.calendars.Calendar({
      created: onCreate
    });

    function onCreate() {
    //creates the custom element for today button.
    var clearBtn = document.createElement('button');
    var footerElement = document.getElementsByClassName('e-footer-container')[0];
    clearBtn.className = 'e-btn e-clear e-flat';
    clearBtn.textContent = 'Clear';
    footerElement.prepend(clearBtn);
    this.element.appendChild(footerElement);
    // custom click handler to update the value property with null values.
    document.querySelector('.e-footer-container .e-clear').addEventListener('click', function () {
    calendar.value = null;
    calendar.dataBind();
});

}
 calendar.appendTo('#element');

document.getElementById('loader').style.display = "none";
document.getElementById('container').style.visibility = "visible";

