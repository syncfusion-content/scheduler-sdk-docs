/**
 * Schedule datasource spec
 */

var resourceConferenceData = [
    {
        Id: 1,
        Subject: 'Burning Man',
        StartTime: new Date(2018, 5, 1, 15, 0),
        EndTime: new Date(2018, 5, 1, 17, 0),
        ConferenceId: [1, 2, 3]
    }, {
        Id: 2,
        Subject: 'Data-Driven Economy',
        StartTime: new Date(2018, 5, 2, 12, 0),
        EndTime: new Date(2018, 5, 2, 14, 0),
        ConferenceId: [1, 2]
    }, {
        Id: 3,
        Subject: 'Techweek',
        StartTime: new Date(2018, 5, 2, 15, 0),
        EndTime: new Date(2018, 5, 2, 17, 0),
        ConferenceId: [2, 3]
    }, {
        Id: 4,
        Subject: 'Content Marketing World',
        StartTime: new Date(2018, 5, 2, 18, 0),
        EndTime: new Date(2018, 5, 2, 20, 0),
        ConferenceId: [1, 3]
    }, {
        Id: 5,
        Subject: 'B2B Marketing Forum',
        StartTime: new Date(2018, 5, 3, 10, 0),
        EndTime: new Date(2018, 5, 3, 12, 0),
        ConferenceId: [1, 2, 3]
    }, {
        Id: 6,
        Subject: 'Business Innovation Factory',
        StartTime: new Date(2018, 5, 3, 13, 0),
        EndTime: new Date(2018, 5, 3, 15, 0),
        ConferenceId: [1, 2]
    }, {
        Id: 7,
        Subject: 'Grow Conference',
        StartTime: new Date(2018, 5, 3, 16, 0),
        EndTime: new Date(2018, 5, 3, 18, 0),
        ConferenceId: [2, 3]
    }, {
        Id: 8,
        Subject: 'Journalism Interactive',
        StartTime: new Date(2018, 5, 3, 19, 0),
        EndTime: new Date(2018, 5, 3, 21, 0),
        ConferenceId: [1, 3]
    }, {
        Id: 9,
        Subject: 'Blogcademy',
        StartTime: new Date(2018, 5, 4, 10, 0),
        EndTime: new Date(2018, 5, 4, 11, 30),
        ConferenceId: [1, 2, 3]
    }, {
        Id: 10,
        Subject: 'Sustainable Brands',
        StartTime: new Date(2018, 5, 4, 13, 0),
        EndTime: new Date(2018, 5, 4, 15, 30),
        ConferenceId: [1, 2]
    }, {
        Id: 11,
        Subject: 'Fashion Confidential',
        StartTime: new Date(2018, 5, 4, 9, 0),
        EndTime: new Date(2018, 5, 4, 9, 45),
        ConferenceId: [2, 3]
    }, {
        Id: 12,
        Subject: 'Mobile World Conference',
        StartTime: new Date(2018, 5, 5, 12, 0),
        EndTime: new Date(2018, 5, 5, 14, 0),
        ConferenceId: [1, 3]
    }, {
        Id: 13,
        Subject: 'The Human Gathering',
        StartTime: new Date(2018, 5, 5, 15, 0),
        EndTime: new Date(2018, 5, 5, 17, 0),
        ConferenceId: [1, 2, 3]
    }, {
        Id: 14,
        Subject: 'Web Summit',
        StartTime: new Date(2018, 5, 5, 18, 0),
        EndTime: new Date(2018, 5, 5, 20, 0),
        ConferenceId: [1, 2]
    }, {
        Id: 15,
        Subject: 'Funnel Hacking Live',
        StartTime: new Date(2018, 5, 6, 12, 0),
        EndTime: new Date(2018, 5, 6, 14, 0),
        ConferenceId: [1, 3]
    }, {
        Id: 16,
        Subject: 'Data Science Conference',
        StartTime: new Date(2018, 5, 6, 15, 0),
        EndTime: new Date(2018, 5, 6, 17, 0),
        ConferenceId: [2, 3]
    }, {
        Id: 17,
        Subject: 'Powerful Living Experience',
        StartTime: new Date(2018, 5, 6, 21, 0),
        EndTime: new Date(2018, 5, 6, 23, 30),
        ConferenceId: [1, 2, 3]
    }, {
        Id: 18,
        Subject: 'World Domination Summit',
        StartTime: new Date(2018, 5, 7, 12, 0),
        EndTime: new Date(2018, 5, 7, 14, 0),
        ConferenceId: [2, 3]
    }, {
        Id: 19,
        Subject: 'Burning Man',
        StartTime: new Date(2018, 5, 7, 15, 0),
        EndTime: new Date(2018, 5, 7, 17, 0),
        ConferenceId: [1, 3]
    }, {
        Id: 20,
        Subject: 'Data-Driven Economy',
        StartTime: new Date(2018, 5, 7, 18, 0),
        EndTime: new Date(2018, 5, 7, 20, 0),
        ConferenceId: [1, 2]
    }, {
        Id: 21,
        Subject: 'Techweek',
        StartTime: new Date(2018, 5, 8, 12, 0),
        EndTime: new Date(2018, 5, 8, 14, 0),
        ConferenceId: [1, 2, 3]
    }, {
        Id: 22,
        Subject: 'Content Marketing World',
        StartTime: new Date(2018, 5, 8, 15, 0),
        EndTime: new Date(2018, 5, 8, 17, 0),
        ConferenceId: [1, 2, 3]
    }, {
        Id: 23,
        Subject: 'B2B Marketing Forum',
        StartTime: new Date(2018, 5, 8, 20, 30),
        EndTime: new Date(2018, 5, 8, 21, 30),
        ConferenceId: [1, 3]
    }, {
        Id: 24,
        Subject: 'Business Innovation Factory',
        StartTime: new Date(2018, 5, 9, 12, 0),
        EndTime: new Date(2018, 5, 9, 14, 0),
        ConferenceId: [2, 3]
    }, {
        Id: 25,
        Subject: 'Grow Conference',
        StartTime: new Date(2018, 5, 9, 15, 0),
        EndTime: new Date(2018, 5, 9, 17, 0),
        ConferenceId: [1, 2]
    }, {
        Id: 26,
        Subject: 'Journalism Interactive',
        StartTime: new Date(2018, 5, 9, 18, 0),
        EndTime: new Date(2018, 5, 9, 20, 0),
        ConferenceId: [1, 2, 3]
    }, {
        Id: 27,
        Subject: 'Blogcademy',
        StartTime: new Date(2018, 5, 10, 12, 0),
        EndTime: new Date(2018, 5, 10, 14, 0),
        ConferenceId: [1, 3]
    }, {
        Id: 28,
        Subject: 'Sustainable Brands',
        StartTime: new Date(2018, 5, 10, 15, 0),
        EndTime: new Date(2018, 5, 10, 17, 0),
        ConferenceId: [2, 3]
    }, {
        Id: 29,
        Subject: 'Fashion Confidential',
        StartTime: new Date(2018, 5, 10, 18, 0),
        EndTime: new Date(2018, 5, 10, 20, 0),
        ConferenceId: [1, 2]
    }, {
        Id: 30,
        Subject: 'Mobile World Conference',
        StartTime: new Date(2018, 5, 11, 12, 0),
        EndTime: new Date(2018, 5, 11, 14, 0),
        ConferenceId: [1, 2, 3]
    }, {
        Id: 31,
        Subject: 'The Human Gathering',
        StartTime: new Date(2018, 5, 11, 15, 0),
        EndTime: new Date(2018, 5, 11, 17, 0),
        ConferenceId: [1, 2, 3]
    }, {
        Id: 32,
        Subject: 'Web Summit',
        StartTime: new Date(2018, 5, 11, 18, 0),
        EndTime: new Date(2018, 5, 11, 20, 0),
        ConferenceId: [3]
    }, {
        Id: 33,
        Subject: 'Funnel Hacking Live',
        StartTime: new Date(2018, 5, 12, 14, 0),
        EndTime: new Date(2018, 5, 12, 16, 0),
        ConferenceId: [1]
    }, {
        Id: 34,
        Subject: 'Data Science Conference',
        StartTime: new Date(2018, 5, 12, 14, 0),
        EndTime: new Date(2018, 5, 12, 16, 0),
        ConferenceId: [2]
    }, {
        Id: 35,
        Subject: 'Powerful Living Experience',
        StartTime: new Date(2018, 5, 12, 18, 0),
        EndTime: new Date(2018, 5, 12, 20, 0),
        ConferenceId: [1, 2]
    }, {
        Id: 36,
        Subject: 'World Domination Summit',
        StartTime: new Date(2018, 5, 12, 18, 0),
        EndTime: new Date(2018, 5, 12, 20, 0),
        ConferenceId: [3]
    }, {
        Id: 37,
        Subject: 'Burning Man',
        StartTime: new Date(2018, 5, 13, 14, 0),
        EndTime: new Date(2018, 5, 13, 16, 0),
        ConferenceId: [1, 3]
    }, {
        Id: 38,
        Subject: 'Data-Driven Economy',
        StartTime: new Date(2018, 5, 13, 14, 0),
        EndTime: new Date(2018, 5, 13, 16, 0),
        ConferenceId: [1]
    }, {
        Id: 39,
        Subject: 'Techweek',
        StartTime: new Date(2018, 5, 13, 18, 0),
        EndTime: new Date(2018, 5, 13, 20, 0),
        ConferenceId: [2, 3]
    }, {
        Id: 40,
        Subject: 'Content Marketing World',
        StartTime: new Date(2018, 5, 13, 18, 0),
        EndTime: new Date(2018, 5, 13, 20, 0),
        ConferenceId: [1, 2]
    }, {
        Id: 41,
        Subject: 'B2B Marketing Forum',
        StartTime: new Date(2018, 5, 14, 14, 0),
        EndTime: new Date(2018, 5, 14, 16, 0),
        ConferenceId: [1, 2, 3]
    }, {
        Id: 42,
        Subject: 'Business Innovation Factory',
        StartTime: new Date(2018, 5, 14, 14, 0),
        EndTime: new Date(2018, 5, 14, 16, 0),
        ConferenceId: [2, 3]
    }, {
        Id: 43,
        Subject: 'Grow Conference',
        StartTime: new Date(2018, 5, 14, 18, 0),
        EndTime: new Date(2018, 5, 14, 20, 0),
        ConferenceId: [3]
    }, {
        Id: 44,
        Subject: 'Journalism Interactive',
        StartTime: new Date(2018, 5, 14, 18, 0),
        EndTime: new Date(2018, 5, 14, 20, 0),
        ConferenceId: [1, 2, 3]
    }, {
        Id: 45,
        Subject: 'Blogcademy',
        StartTime: new Date(2018, 5, 15, 14, 0),
        EndTime: new Date(2018, 5, 15, 16, 0),
        ConferenceId: [1, 3]
    }, {
        Id: 46,
        Subject: 'Sustainable Brands',
        StartTime: new Date(2018, 5, 15, 14, 0),
        EndTime: new Date(2018, 5, 15, 16, 0),
        ConferenceId: [1, 3]
    }, {
        Id: 47,
        Subject: 'Fashion Confidential',
        StartTime: new Date(2018, 5, 15, 18, 0),
        EndTime: new Date(2018, 5, 15, 20, 0),
        ConferenceId: [1, 2]
    }, {
        Id: 48,
        Subject: 'Mobile World Conference',
        StartTime: new Date(2018, 5, 15, 18, 0),
        EndTime: new Date(2018, 5, 15, 20, 0),
        ConferenceId: [2, 3]
    }
];