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
    { Id: 1, Subject: 'Planning', StartTime: new Date(2026, 10, 30, 9, 0), EndTime: new Date(2026, 10, 30, 11, 0), BuildingId: 1, RoomId: 11 },
    { Id: 2, Subject: 'Review', StartTime: new Date(2026, 10, 31, 13, 0), EndTime: new Date(2026, 10, 31, 14, 30), BuildingId: 1, RoomId: 12 },
    { Id: 3, Subject: 'Training', StartTime: new Date(2026, 11, 1, 10, 0), EndTime: new Date(2026, 11, 1, 12, 0), BuildingId: 2, RoomId: 21 }
];
