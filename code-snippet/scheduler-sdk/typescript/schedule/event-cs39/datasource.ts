export function generateObject() {
    var data = [];
    for (var a = 0; a < 25; a++) {
        data.push({
            Id: a + 1,
            Subject: 'Testing',
            StartTime: new Date(2021, 3, 28),
            EndTime: new Date(2021, 3, 29),
            IsAllDay: true
        });
    }
    return data;
}