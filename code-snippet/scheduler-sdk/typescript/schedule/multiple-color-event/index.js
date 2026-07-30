function eventTemplate(data) {
    return [
      "<div class='template-wrap'>",
        data.SubCount.map(function(item) {
          return [
            "<div style='background:" + item.background + "; height:" + item.height + "'>",
              "<div class=\"subject\">" + data.Subject + "</div>",
            "</div>"
          ].join('');
        }).join(''),
      "</div>"
    ].join('');
}

var data = [{
    Id: 1,
    Subject: 'Environment Day',
    Description: 'A day that creates awareness to promote the healthy planet and reduce the air pollution crisis on nature earth.',
    StartTime: new Date(2024, 1, 15, 9, 0),
    EndTime: new Date(2024, 1, 15, 14, 0),
    SubCount: [
        { background: 'darkblue', height: '50%' },
        { background: 'lightblue', height: '50%' },
    ],
},
{
    Id: 2,
    Subject: 'Health Day',
    Description: 'A day that raises awareness on different health issues. It marks the anniversary of the foundation of WHO.',
    StartTime: new Date(2024, 1, 16, 9, 0),
    EndTime: new Date(2024, 1, 16, 14, 0),
    SubCount: [
        { background: 'yellow', height: '33.3%' },
        { background: 'yellowgreen', height: '33.3%' },
        { background: 'green', height: '33.3%' },
    ],
},
{
    Id: 3,
    Subject: 'Cancer Day',
    Description: 'A day that raises awareness on cancer and its preventive measures. Early detection saves life.',
    StartTime: new Date(2024, 1, 17, 9, 0),
    EndTime: new Date(2024, 1, 17, 14, 0),
    SubCount: [
        { background: 'pink', height: '50%' },
        { background: 'red', height: '50%' },
    ],
}];

var scheduleObj = new ej.schedule.Schedule({
    width: '100%',
    height: '650px',
    selectedDate: new Date(2024, 1, 15),
    views: [{ option: "Week" }],
    eventSettings: {
        dataSource: data,
        template: eventTemplate
    }
});
scheduleObj.appendTo('#Schedule');