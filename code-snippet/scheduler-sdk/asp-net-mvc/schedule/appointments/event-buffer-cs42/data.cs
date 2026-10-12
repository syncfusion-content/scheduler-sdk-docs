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
        Subject = "Patient Consultation - Sarah Johnson",
        StartTime = new DateTime(CurrentYear, 1, 21, 10, 0, 0),
        EndTime = new DateTime(CurrentYear, 1, 21, 11, 30, 0),
        BufferBefore = 30,  // 30 min to review patient history
        BufferAfter = 45,  // 45 min to update medical records
        Location = "Exam Room 3",
        Description = "Follow-up consultation for hypertension management"
    });
    appData.Add(new AppointmentData
    {
        Id = 2,
        Subject = "Surgical Procedure - Knee Arthroscopy",
        StartTime = new DateTime(CurrentYear, 1, 22, 10, 30, 0),
        EndTime = new DateTime(CurrentYear, 1, 22, 12, 0, 0),
        BufferBefore = 45,  // 45 min OR setup and anesthesia prep
        BufferAfter = 30,  // 30 min recovery and post-op notes
        Location = "Operating Room 2",
        Description = "Outpatient knee arthroscopy for Mr. Robert Chen"
    });
    appData.Add(new AppointmentData
    {
        Id = 3,
        Subject = "Lunch & Rounds",
        StartTime = new DateTime(CurrentYear, 1, 22, 12, 30, 0),
        EndTime = new DateTime(CurrentYear, 1, 22, 13, 30, 0),
        BufferBefore = 0,  // Direct transition
        BufferAfter = 0,  // Direct transition
        Location = "Hospital Cafeteria",
        Description = "Working lunch with department heads"
    });
    appData.Add(new AppointmentData
    {
        Id = 4,
        Subject = "Patient Consultation - Michael Davis",
        StartTime = new DateTime(CurrentYear, 1, 22, 14, 30, 0),
        EndTime = new DateTime(CurrentYear, 1, 22, 15, 15, 0),
        BufferBefore = 25,  // 25 min to prep exam room
        BufferAfter = 20,  // 20 min to complete documentation
        Location = "Exam Room 1",
        Description = "New patient intake and physical examination"
    });
    appData.Add(new AppointmentData
    {
        Id = 5,
        Subject = "Telehealth Consultation - Emma Wilson",
        StartTime = new DateTime(CurrentYear, 1, 19, 11, 0, 0),
        EndTime = new DateTime(CurrentYear, 1, 19, 16, 30, 0),
        BufferBefore = 35,  // 35 min to test video connection and prepare
        BufferAfter = 20,  // 20 min to send e-prescription and notes
        Location = "Virtual - Zoom",
        Description = "Virtual follow-up for diabetes management"
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
    public string Location { get; set; }
    public string Description { get; set; }
}