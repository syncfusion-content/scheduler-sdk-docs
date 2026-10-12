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
        Subject = "Client Kickoff - Acme Corp",
        StartTime = new DateTime(CurrentYear, 1, 22, 9, 0, 0),
        EndTime = new DateTime(CurrentYear, 1, 22, 10, 0, 0),
        BufferBefore = 30,  // 30 min to set up conference room and test AV
        BufferAfter = 45,  // 45 min to send follow-up materials
        Location = "Boardroom A",
        Description = "Project kickoff meeting with Acme Corp leadership team"
    });
    appData.Add(new AppointmentData
    {
        Id = 2,
        Subject = "Sales Training Workshop",
        StartTime = new DateTime(CurrentYear, 1, 22, 11, 0, 0),
        EndTime = new DateTime(CurrentYear, 1, 22, 13, 0, 0),
        BufferBefore = 45,  // 45 min for room setup and materials distribution
        BufferAfter = 30,  // 30 min for Q&A and feedback collection
        Location = "Training Room",
        Description = "Quarterly sales techniques and product knowledge training"
    });
    appData.Add(new AppointmentData
    {
        Id = 3,
        Subject = "Product Demo - TechStart Inc",
        StartTime = new DateTime(CurrentYear, 1, 22, 14, 0, 0),
        EndTime = new DateTime(CurrentYear, 1, 22, 15, 0, 0),
        BufferBefore = 20,  // 20 min to test demo environment
        BufferAfter = 40,  // 40 min to gather requirements
        Location = "Conference Room B",
        Description = "Live demo of enterprise SaaS platform for TechStart Inc"
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