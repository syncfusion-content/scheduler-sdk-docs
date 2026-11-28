// Events are generated from the current date so the sample always shows fresh data.
const weekStart: Date = new Date();
weekStart.setHours(0, 0, 0, 0);
weekStart.setDate(weekStart.getDate() - weekStart.getDay());

function at(dayOffset: number, hour: number, minute: number = 0): Date {
    return new Date(weekStart.getFullYear(), weekStart.getMonth(), weekStart.getDate() + dayOffset, hour, minute);
}

export let buildings: Object[] = [
    { text: 'Building A', id: 1 },
    { text: 'Building B', id: 2 }
];

export let rooms: Object[] = [
    { text: 'Room A1', id: 11, buildingId: 1 },
    { text: 'Room A2', id: 12, buildingId: 1 },
    { text: 'Room B1', id: 21, buildingId: 2 }
];

export let groupSummaryData: Object[] = [
    { Id: 1, Subject: 'Planning', StartTime: at(1, 9), EndTime: at(1, 11), BuildingId: 1, RoomId: 11 },
    { Id: 2, Subject: 'Review', StartTime: at(2, 13), EndTime: at(2, 14, 30), BuildingId: 1, RoomId: 12 },
    { Id: 3, Subject: 'Workshop', StartTime: at(2, 10), EndTime: at(2, 12), BuildingId: 1, RoomId: 11 },
    { Id: 4, Subject: 'Training', StartTime: at(3, 10), EndTime: at(3, 12), BuildingId: 2, RoomId: 21 },
    { Id: 5, Subject: 'Client visit', StartTime: at(4, 14), EndTime: at(4, 15, 30), BuildingId: 2, RoomId: 21 }
];
