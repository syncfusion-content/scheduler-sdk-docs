import {
    Schedule, Day, Week, WorkWeek, Month, Agenda, TimelineViews, TimelineMonth,
    Resize, DragAndDrop, MonthAgenda
} from '@syncfusion/ej2-schedule';
import { loadCldr, setCulture, L10n } from '@syncfusion/ej2-base';
import { Calendar, Islamic } from '@syncfusion/ej2-calendars';
import { scheduleData } from './datasource.ts';
import arNumberData from '@syncfusion/ej2-cldr-data/main/ar/numbers.json';
import artimeZoneData from '@syncfusion/ej2-cldr-data/main/ar/timeZoneNames.json';
import arGregorian from '@syncfusion/ej2-cldr-data/main/ar/ca-gregorian.json';
import arIslamic from '@syncfusion/ej2-cldr-data/main/ar/ca-islamic.json';
import arNumberingSystem from '@syncfusion/ej2-cldr-data/supplemental/numberingSystems.json';

Schedule.Inject(Day, Week, WorkWeek, Month, TimelineViews, TimelineMonth, Agenda, MonthAgenda, Resize, DragAndDrop);
Calendar.Inject(Islamic);

loadCldr(arNumberData, artimeZoneData, arGregorian, arIslamic, arNumberingSystem);
L10n.load({
    "ar": {
        "schedule": {
            "day": "يوم",
            "week": "أسبوع",
            "workWeek": "أسبوع العمل",
            "month": "شهر",
            "year": "سنة",
            "agenda": "جدول أعمال",
            "weekAgenda": "الأسبوع جدول الأعمال",
            "workWeekAgenda": "جدول أعمال أسبوع العمل",
            "monthAgenda": "شهر جدول الأعمال",
            "today": "اليوم",
            "noEvents": "لا أحداث",
            "emptyContainer": "لا توجد أحداث مجدولة في هذا اليوم.",
            "allDay": "طوال اليوم",
            "start": "بداية",
            "end": "النهاية",
            "more": "أكثر",
            "close": "قريب",
            "cancel": "إلغاء",
            "noTitle": "(بلا ​​عنوان)",
            "delete": "حذف",
            "deleteEvent": "حذف الحدث",
            "deleteMultipleEvent": "حذف أحداث متعددة",
            "selectedItems": "العناصر المحددة",
            "deleteSeries": "حذف السلسلة",
            "edit": "تصحيح",
            "editSeries": "تحرير السلسلة",
            "editEvent": "تعديل الحدث",
            "createEvent": "خلق",
            "subject": "موضوع",
            "addTitle": "أضف عنوانا",
            "moreDetails": "المزيد من التفاصيل",
            "moreEvents": "المزيد من الحدث",
            "save": "حفظ",
            "editContent": "كيف تريد تغيير الموعد في السلسلة؟",
            "deleteContent": "هل أنت متأكد من حذف هذا الحدث؟",
            "deleteMultipleContent": "هل أنت متأكد من أنك تريد حذف الأحداث المختارة؟",
            "newEvent": "حدث جديد",
            "title": "عنوان",
            "location": "موقعك",
            "description": "وصف",
            "timezone": "وحدة زمنية",
            "startTimezone": "بدء المنطقة الزمنية",
            "endTimezone": "نهاية المنطقة الزمنية",
            "repeat": "كرر",
            "saveButton": "حفظ",
            "cancelButton": "إلغاء",
            "deleteButton": "حذف",
            "recurrence": "تكرار",
            "wrongPattern": "نمط التكرار غير صالح.",
            "seriesChangeAlert": "هل تريد إلغاء التغييرات التي تم إجراؤها على مثيلات معينة من هذه السلسلة ومطابقتها مع السلسلة بأكملها مرة أخرى؟",
            "createError": "يجب أن تكون مدة الحدث أقصر من عدد مرات حدوثها. اختصر المدة ، أو غيّر نمط التكرار في محرر حدث التكرار.",
            "sameDayAlert": "لا يمكن أن يحدث تواجد الحدثين في نفس اليوم.",
            "occurenceAlert": "لا يمكن إعادة جدولة تكرار الموعد المتكرر إذا تخطى تكرارًا لاحقًا للموعد نفسه.",
            "editRecurrence": "تحرير تكرار",
            "repeats": "يكرر",
            "alert": "إنذار",
            "startEndError": "ويحدث تاريخ الانتهاء المحدد قبل تاريخ البدء.",
            "invalidDateError": "قيمة التاريخ المدخلة غير صالحة.",
            "blockAlert": "لا يمكن جدولة الأحداث ضمن النطاق الزمني المحظور.",
            "ok": "حسنا",
            "of": "ل",
            "yes": "نعم",
            "no": "لا",
            "occurrence": "حادثة",
            "series": "سلسلة",
            "previous": "السابق",
            "next": "التالى",
            "timelineDay": "يوم المخطط الزمني",
            "timelineWeek": "الأسبوع الزمني للأسبوع",
            "timelineWorkWeek": "الجدول الزمني لأسبوع العمل",
            "timelineMonth": "الجدول الزمني الشهر",
            "timelineYear": "الجدول الزمني العام",
            "editFollowingEvent": "الأحداث التالية",
            "deleteTitle": "حذف الحدث",
            "editTitle": "تحرير الحدث",
            "beginFrom": "تبدأ من",
            "endAt": "يغلق عند مستوى",
            "expandAllDaySection": "قم بتوسيع القسم طوال اليوم",
            "collapseAllDaySection": "طي القسم طوال اليوم",
            "searchTimezone": "البحث عن المنطقة الزمنية",
            "noRecords": "لا توجد سجلات",
            "deleteRecurrenceContent": "هل تريد حذف هذا الحدث فقط أو السلسلة بأكملها؟",
            "recurrenceDateValidation": "بعض الأشهر لديها أقل من التاريخ المحدد. في هذه الأشهر ، سيقع الحدوث في التاريخ الأخير من الشهر."
        },
        "recurrenceeditor": {
            "none": "لا شيء",
            "daily": "اليومي",
            "weekly": "أسبوعي",
            "monthly": "شهريا",
            "month": "شهر",
            "yearly": "سنوي",
            "never": "أبدا",
            "until": "حتى",
            "count": "عد",
            "first": "أول",
            "second": "ثانيا",
            "third": "الثالث",
            "fourth": "رابع",
            "last": "الاخير",
            "repeat": "كرر",
            "repeatEvery": "تكرار كل",
            "on": "كرر",
            "end": "النهاية",
            "onDay": "يوم",
            "days": "يوم",
            "weeks": "أسبوع",
            "months": "الشهور",
            "years": "سنوات",
            "every": "كل",
            "summaryTimes": "مرات",
            "summaryOn": "على",
            "summaryUntil": "حتى",
            "summaryRepeat": "يكرر",
            "summaryDay": "أيام",
            "summaryWeek": "أسابيع",
            "summaryMonth": "الشهور",
            "summaryYear": "سنوات",
            "monthWeek": "شهر اسبوع",
            "monthPosition": "موقف الشهر",
            "monthExpander": "المتوسع الشهر",
            "yearExpander": "المتوسع العام",
            "repeatInterval": "أعد الفترة"
        }
    }
});

let scheduleObj: Schedule = new Schedule({
    width: '100%',
    height: '550px',
    selectedDate: new Date(2018, 1, 15),
    enableRtl: true,
    calendarMode: 'Islamic',
    views: [
        { option: 'Day' },
        { option: 'TimelineDay' },
        { option: 'Week' },
        { option: 'TimelineWeek' },
        { option: 'Month' },
        { option: 'TimelineMonth' },
        { option: 'Agenda' },
        { option: 'MonthAgenda' }
    ],
    eventSettings: { dataSource: scheduleData }
});
scheduleObj.appendTo('#Schedule');
setCulture('ar');