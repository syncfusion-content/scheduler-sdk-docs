// Events are generated from the current date so the sample always shows fresh data.
const weekStart: Date = new Date();
weekStart.setHours(0, 0, 0, 0);
weekStart.setDate(weekStart.getDate() - weekStart.getDay());

function at(dayOffset: number, hour: number, minute: number = 0): Date {
    return new Date(weekStart.getFullYear(), weekStart.getMonth(), weekStart.getDate() + dayOffset, hour, minute);
}

export let summaryData: Object[] = [
    { Id: 1, Subject: 'Project planning', StartTime: at(1, 9), EndTime: at(1, 11) },
    { Id: 2, Subject: 'Daily stand-up', StartTime: at(1, 10), EndTime: at(1, 10, 30) },
    { Id: 3, Subject: 'Review meeting', StartTime: at(2, 13), EndTime: at(2, 14, 30) },
    { Id: 4, Subject: 'Release preparation', StartTime: at(3, 10), EndTime: at(3, 12) },
    { Id: 5, Subject: 'Customer demo', StartTime: at(4, 15), EndTime: at(4, 16) }
];
