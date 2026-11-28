// Events are generated from the current date so the sample always shows fresh data.
const weekStart: Date = new Date();
weekStart.setHours(0, 0, 0, 0);
weekStart.setDate(weekStart.getDate() - weekStart.getDay());

function at(dayOffset: number, hour: number, minute: number = 0): Date {
    return new Date(weekStart.getFullYear(), weekStart.getMonth(), weekStart.getDate() + dayOffset, hour, minute);
}

export let ownerData: Object[] = [
    { Id: 1, Text: 'Nancy', Color: '#1aaa55' },
    { Id: 2, Text: 'Steven', Color: '#357cd2' }
];

export let spacingData: Object[] = [
    { Id: 1, Subject: 'Team meeting', StartTime: at(1, 9), EndTime: at(1, 10), OwnerId: 1 },
    { Id: 2, Subject: 'Client call', StartTime: at(1, 9, 30), EndTime: at(1, 11), OwnerId: 1 },
    { Id: 3, Subject: 'Design review', StartTime: at(1, 9, 45), EndTime: at(1, 11, 30), OwnerId: 1 },
    { Id: 4, Subject: 'Development', StartTime: at(2, 11), EndTime: at(2, 13), OwnerId: 2 },
    { Id: 5, Subject: 'Code review', StartTime: at(2, 11, 30), EndTime: at(2, 12, 30), OwnerId: 2 },
    { Id: 6, Subject: 'Bug triage', StartTime: at(2, 12), EndTime: at(2, 13, 30), OwnerId: 2 },
    { Id: 7, Subject: 'Retrospective', StartTime: at(3, 14), EndTime: at(3, 15, 30), OwnerId: 1 },
    { Id: 8, Subject: 'Planning', StartTime: at(3, 14, 30), EndTime: at(3, 16), OwnerId: 1 },
    { Id: 9, Subject: 'Release sync', StartTime: at(3, 14), EndTime: at(3, 15), OwnerId: 2 }
];
