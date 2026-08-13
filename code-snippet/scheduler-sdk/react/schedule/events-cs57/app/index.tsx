import * as React from 'react';
import { ScheduleComponent, ViewsDirective, ViewDirective, Day, Week, WorkWeek, Month, Agenda, Inject, Resize, DragAndDrop } from '@syncfusion/ej2-react-schedule';
import { extend, L10n } from '@syncfusion/ej2-base';

// Override the default English locale strings used by the Scheduler's
// built-in overlap alert dialog.
L10n.load({
	'en-US': {
		schedule: {
			overlapAlert: 'This appointment conflicts with another booking.',
			alert: 'Scheduling Conflict',
		},
	},
});

function App() {
	const scheduleOverlapData: Record<string, any>[] = [
		{
			Id: 1,
			Subject: 'Board Meeting',
			StartTime: new Date(2025, 1, 12, 9, 0),
			EndTime: new Date(2025, 1, 12, 11, 0)
		},
		{
			Id: 2,
			Subject: 'Annual Conference',
			StartTime: new Date(2025, 1, 13, 10, 0),
			EndTime: new Date(2025, 1, 13, 11, 0)
		},
		{
			Id: 3,
			Subject: 'Tech Symposium',
			StartTime: new Date(2025, 1, 13, 10, 30),
			EndTime: new Date(2025, 1, 13, 11, 30)
		},
		{
			Id: 4,
			Subject: 'Project Review',
			StartTime: new Date(2025, 1, 14, 11, 0),
			EndTime: new Date(2025, 1, 14, 13, 0)
		},
		{
			Id: 5,
			Subject: 'Client Meeting',
			StartTime: new Date(2025, 1, 15, 9, 30),
			EndTime: new Date(2025, 1, 15, 10, 30)
		}
	];
	const data: Record<string, any>[] = extend([], scheduleOverlapData, null, true);

	return (
		<div className="schedule-control-section">
			<div className="col-lg-12 control-section">
				<div className="control-wrapper">
					<ScheduleComponent
						width="100%"
						height="550px"
						selectedDate={new Date(2025, 1, 12)}
						eventSettings={{ dataSource: data }}
						allowOverlap={false}
					>
						<ViewsDirective>
							<ViewDirective option="Day" />
							<ViewDirective option="Week" />
							<ViewDirective option="WorkWeek" />
							<ViewDirective option="Month" />
							<ViewDirective option="Agenda" />
						</ViewsDirective>
						<Inject
							services={[
								Day,
								Week,
								WorkWeek,
								Month,
								Agenda,
								Resize,
								DragAndDrop,
							]}
						/>
					</ScheduleComponent>
				</div>
			</div>
		</div>
	);
}

export default App;
