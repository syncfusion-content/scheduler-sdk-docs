import * as React from 'react';
import { useRef, useState } from 'react';
import { ScheduleComponent, ViewsDirective, ViewDirective, Day, Week, WorkWeek, Month, Agenda, Inject, Resize, DragAndDrop } from '@syncfusion/ej2-react-schedule';
import { extend } from '@syncfusion/ej2-base';
import { DialogComponent } from '@syncfusion/ej2-react-popups';

function App() {
	const scheduleObj = useRef<ScheduleComponent>(null);
	const dialogObj = useRef<DialogComponent>(null);
	const [dialogVisible, setDialogVisible] = useState<boolean>(false);
	const [dialogMessage, setDialogMessage] = useState<string>('');

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
		if (args.type !== 'OverlapAlert') return;
		// Cancel the default overlap alert popup.
		args.cancel = true;

		const eventData: Record<string, any> = Array.isArray(args.data) ? args.data[0] : args.data;
		setDialogMessage(
			`\u23F0 "${eventData && eventData.Subject ? eventData.Subject : 'This event'}" overlaps with an existing event.\n` +
			`Please pick a different time slot.`
		);
		setDialogVisible(true);
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
								Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop,
							]}
						/>
					</ScheduleComponent>

					<DialogComponent
						ref={dialogObj}
						width="400px"
						header="Scheduling Conflict"
						visible={dialogVisible}
						isModal={true}
						showCloseIcon={true}
						closeOnEscape={true}
						animationSettings={{ effect: 'FadeZoom' }}
						close={() => setDialogVisible(false)}
						buttons={[{
							click: () => setDialogVisible(false),
							buttonModel: { content: 'OK', isPrimary: true },
						}]}
					>
						<p style={{ margin: 0, fontSize: '14px', lineHeight: 1.5, whiteSpace: 'pre-line' }}>
							{dialogMessage}
						</p>
					</DialogComponent>
				</div>
			</div>
		</div>
	);
}

export default App;
