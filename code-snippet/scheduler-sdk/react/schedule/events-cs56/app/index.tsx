import * as React from 'react';
import { useRef } from 'react';
import { ScheduleComponent, ViewsDirective, ViewDirective, Day, Week, WorkWeek, Month, Agenda, Inject, Resize, DragAndDrop } from '@syncfusion/ej2-react-schedule';
import { extend } from '@syncfusion/ej2-base';

function App() {
	const scheduleObj = useRef<ScheduleComponent>(null);

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

	const onPopupOpen = (args: Record<string, any>): void => {
		if (args.type === 'OverlapAlert') {
			// Customize the default overlap alert by rewriting its DOM content.
			if (args.element) {
				const content: HTMLElement = args.element.querySelector('.e-dlg-content, .e-popup-content');
				if (content) {
					content.innerHTML = `
						<div style="padding:8px 4px; font-size:14px; line-height:1.5;">
							&#9200; The selected time slot conflicts with an existing event.
							<br/>Please choose a different time.
						</div>
					`;
				}
			}
		}
	};

	return (
		<div className="schedule-control-section">
			<div className="col-lg-12 control-section">
				<div className="control-wrapper">
					<ScheduleComponent
						ref={scheduleObj}
						width="100%"
						height="550px"
						selectedDate={new Date(2025, 1, 12)}
						eventSettings={{ dataSource: data }}
						popupOpen={onPopupOpen}
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
