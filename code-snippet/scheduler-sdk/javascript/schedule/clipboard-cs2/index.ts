

import { closest, isNullOrUndefined, remove } from '@syncfusion/ej2-base';
import { Schedule, Day, Week, WorkWeek, Month, Resize, DragAndDrop, TimelineViews, TimelineMonth } from '@syncfusion/ej2-schedule';
import {
    ContextMenu, MenuItemModel, BeforeOpenCloseMenuEventArgs, MenuEventArgs
} from '@syncfusion/ej2-navigations';
import { scheduleData } from './datasource.ts';

Schedule.Inject(Week, DragAndDrop, Resize, WorkWeek, Day, Month, TimelineViews, TimelineMonth);

let scheduleObj: Schedule = new Schedule({
    width: '100%',
    height: '550px',
    views: [
        { option: 'Week' },
        { option: 'Day' },
        { option: 'Month' },
        { option: 'TimelineDay' },
        { option: 'TimelineWeek' },
        { option: 'TimelineWorkWeek' },
        { option: 'TimelineMonth' },
    ],
    currentView: 'Week',
    selectedDate: new Date(2024, 1, 15),
    allowClipboard: true,
    showQuickInfo: false,
    eventSettings: { dataSource: scheduleData },
    destroyed: () => {
        menuObj.destroy();
    }
});
scheduleObj.appendTo('#Schedule');

let selectedTarget: Element;
let targetElement: HTMLElement;
let menuObj: ContextMenu;
let menuItems: MenuItemModel[] = [
    { text: 'Cut Event', iconCss: 'e-icons e-cut', id: 'Cut' },
    { text: 'Copy Event', iconCss: 'e-icons e-copy', id: 'Copy' },
    { text: 'Paste', iconCss: 'e-icons e-paste', id: 'Paste' }
];

menuObj = new ContextMenu({
    target: '.e-schedule',
    items: menuItems,
    beforeOpen: onContextMenuBeforeOpen,
    select: onMenuItemSelect,
    cssClass: 'schedule-context-menu'
});
menuObj.appendTo('#ScheduleContextMenu');

function onContextMenuBeforeOpen(args: BeforeOpenCloseMenuEventArgs): void {
    let newEventElement: HTMLElement = document.querySelector('.e-new-event') as HTMLElement;
    if (newEventElement) {
        remove(newEventElement);
    }
    scheduleObj.closeQuickInfoPopup();
    targetElement = <HTMLElement>args.event.target;
    if (closest(targetElement, '.e-contextmenu')) {
        return;
    }
    selectedTarget = closest(targetElement, '.e-appointment,.e-work-cells,' +
        '.e-vertical-view .e-date-header-wrap .e-all-day-cells,.e-vertical-view .e-date-header-wrap .e-header-cells');
    if (isNullOrUndefined(selectedTarget)) {
        args.cancel = true;
        return;
    }
    if (selectedTarget.classList.contains('e-appointment')) {
        menuObj.showItems(['Cut', 'Copy'], true);
        menuObj.hideItems(['Paste'], true);
    } else {
        menuObj.showItems(['Paste'], true);
        menuObj.hideItems(['Cut', 'Copy'], true);
    }
}

function onMenuItemSelect(args: MenuEventArgs): void {
    let selectedMenuItem: string = args.item.id;
    switch (selectedMenuItem) {
        case 'Cut':
            scheduleObj.cut([selectedTarget] as HTMLElement[]);
            break;
        case 'Copy':
            scheduleObj.copy([selectedTarget] as HTMLElement[]);
            break;
        case 'Paste':
            scheduleObj.paste(targetElement);
            break;
    }
}