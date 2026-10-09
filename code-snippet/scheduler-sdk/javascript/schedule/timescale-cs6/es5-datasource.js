var currentDate = new Date();

var scheduleData = [
    {
        Id: 1,
        Subject: 'Team Standup Meeting',
        StartTime: new Date(
            currentDate.getFullYear(),
            currentDate.getMonth(),
            currentDate.getDate(),
            9,
            0
        ),
        EndTime: new Date(
            currentDate.getFullYear(),
            currentDate.getMonth(),
            currentDate.getDate(),
            9,
            30
        ),
        CategoryColor: '#357cd2'
    },
    {
        Id: 2,
        Subject: 'Client Presentation - Q4 Strategy',
        StartTime: new Date(
            currentDate.getFullYear(),
            currentDate.getMonth(),
            currentDate.getDate(),
            10,
            0
        ),
        EndTime: new Date(
            currentDate.getFullYear(),
            currentDate.getMonth(),
            currentDate.getDate(),
            11,
            30
        ),
        CategoryColor: '#1aaa55'
    },
    {
        Id: 3,
        Subject: 'Lunch Break',
        StartTime: new Date(
            currentDate.getFullYear(),
            currentDate.getMonth(),
            currentDate.getDate(),
            12,
            0
        ),
        EndTime: new Date(
            currentDate.getFullYear(),
            currentDate.getMonth(),
            currentDate.getDate(),
            13,
            0
        ),
        CategoryColor: '#ea7a57'
    },
    {
        Id: 4,
        Subject: 'Project Review & Sprint Planning',
        StartTime: new Date(
            currentDate.getFullYear(),
            currentDate.getMonth(),
            currentDate.getDate(),
            13,
            30
        ),
        EndTime: new Date(
            currentDate.getFullYear(),
            currentDate.getMonth(),
            currentDate.getDate(),
            14,
            45
        ),
        CategoryColor: '#00bdae'
    },
    {
        Id: 5,
        Subject: 'One-on-One with Manager',
        StartTime: new Date(
            currentDate.getFullYear(),
            currentDate.getMonth(),
            currentDate.getDate(),
            15,
            0
        ),
        EndTime: new Date(
            currentDate.getFullYear(),
            currentDate.getMonth(),
            currentDate.getDate(),
            15,
            30
        ),
        CategoryColor: '#7fa900'
    },
    {
        Id: 6,
        Subject: 'Technical Sync - Development Team',
        StartTime: new Date(
            currentDate.getFullYear(),
            currentDate.getMonth(),
            currentDate.getDate(),
            16,
            0
        ),
        EndTime: new Date(
            currentDate.getFullYear(),
            currentDate.getMonth(),
            currentDate.getDate(),
            17,
            0
        ),
        CategoryColor: '#f57f17'
    }
];
