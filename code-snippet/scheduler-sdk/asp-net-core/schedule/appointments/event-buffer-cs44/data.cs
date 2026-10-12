private static readonly int CurrentYear = DateTime.Now.Year;

public ActionResult Index()
{
    ViewBag.appointments = GetScheduleData();
    return View();
}

public List<AppointmentData> GetScheduleData()
{
    List<AppointmentData> appData = new List<AppointmentData>();
    appData.Add(new AppointmentData
    {
        Id = 1,
        Subject = "Therapy Session - John Smith",
        StartTime = new DateTime(CurrentYear, 1, 22, 9, 0, 0),
        EndTime = new DateTime(CurrentYear, 1, 22, 10, 30, 0),
        BufferBefore = 30,  // 30 min to review session notes
        BufferAfter = 25,  // 25 min to document observations
        EventType = "development",
        Location = "Counseling Room 2"
    });
    appData.Add(new AppointmentData
    {
        Id = 2,
        Subject = "Board Strategy Meeting",
        StartTime = new DateTime(CurrentYear, 1, 22, 11, 0, 0),
        EndTime = new DateTime(CurrentYear, 1, 22, 12, 0, 0),
        BufferBefore = 30,  // 30 min to prepare briefing materials
        BufferAfter = 20,  // 20 min for executive follow-up
        EventType = "executive",
        Location = "Boardroom"
    });
    appData.Add(new AppointmentData
    {
        Id = 3,
        Subject = "Personal Break",
        StartTime = new DateTime(CurrentYear, 1, 22, 12, 30, 0),
        EndTime = new DateTime(CurrentYear, 1, 22, 13, 30, 0),
        BufferBefore = 0,
        BufferAfter = 0,
        EventType = "personal",
        Location = "Office"
    });
    appData.Add(new AppointmentData
    {
        Id = 4,
        Subject = "Legal Consultation - Patent Filing",
        StartTime = new DateTime(CurrentYear, 1, 22, 14, 0, 0),
        EndTime = new DateTime(CurrentYear, 1, 22, 15, 0, 0),
        BufferBefore = 45,  // 45 min to gather all technical documents
        BufferAfter = 30,  // 30 min to review legal advice
        EventType = "client",
        Location = "Law Firm - Suite 500"
    });
    return appData;
}

public class AppointmentData
{
    public int Id { get; set; }
    public string Subject { get; set; }
    public DateTime StartTime { get; set; }
    public DateTime EndTime { get; set; }
    public int BufferBefore { get; set; }
    public int BufferAfter { get; set; }
    public string EventType { get; set; }
    public string Location { get; set; }
}