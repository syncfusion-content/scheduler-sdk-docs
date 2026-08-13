---
layout: post
title: Customize Overlap Popup Message in React Scheduler | Syncfusion
description: Learn different ways to customize the popup shown when overlapping appointments are dragged and dropped in the Syncfusion React Scheduler.
control: Scheduler
platform: react
documentation: ug
domainurl: https://help.syncfusion.com/scheduler-sdk
---

# Customize the Overlap Popup Message in React Scheduler

When the React Scheduler is configured with [`allowOverlap`](https://ej2.syncfusion.com/react/documentation/api/schedule#allowoverlap) set to `false`, any drag-and-drop, resize, or create action that would cause an appointment to overlap with an existing one is rejected. By default, the Scheduler displays the built-in warning dialog whose title is taken from the [`alert`](https://ej2.syncfusion.com/react/documentation/api/base/l10n#alert) localization key and whose body is taken from the [`overlapAlert`](https://ej2.syncfusion.com/react/documentation/api/base/l10n#overlapalert) key (default text: *"Events cannot overlap"*). Choose one of the approaches below based on how much of that default experience you want to replace.

The simplest hook for any of the approaches is the [`popupOpen`](https://ej2.syncfusion.com/react/documentation/api/schedule#popupopen) event. The `args.type` is set to `'OverlapAlert'` whenever the Scheduler opens the overlap alert, so you can target that one type without affecting the editor, quick info, or other popups. For the default alert, `args.element` is the wrapping dialog HTMLElement and `args.data` is the array of overlapping appointments.

The four sections below range from the lightest (translation only) to the heaviest (a fully custom dialog). Pick the one that matches your scenario.

| Approach | What you replace | When to use |
|---|---|---|
| [Custom Dialog](#show-a-custom-dialog) | The whole alert | You need a themed dialog with custom buttons |
| [Toast](#show-a-toast-notification) | The alert with a non-blocking toast | You want a subtle, auto-dismissing notification |
| [Mutate default dialog](#mutate-the-default-alert-content) | Only the default alert's body text | You want to keep the default dialog layout |
| [Localization](#customize-via-localization) | Only the alert strings | You need translation or copy-only changes |


## Show a Custom Dialog

Use the [`popupOpen`](https://ej2.syncfusion.com/react/documentation/api/schedule#popupopen) event to cancel the default alert and show your own Syncfusion [`DialogComponent`](https://ej2.syncfusion.com/react/documentation/api/dialog) with a custom title, message, and buttons. This is the recommended approach when you need a fully styled, themed dialog.

Setting `args.cancel = true` prevents the default popup from rendering. Use `setDialogVisible(true)` (or the dialog ref's `show()` method) to display your custom dialog instead.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/scheduler-sdk/react/schedule/events-cs54/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/scheduler-sdk/react/schedule/events-cs54/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/react/schedule/events-cs54/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/react/schedule/events-cs54" %}

## Show a Toast Notification

If you prefer a lighter, non-blocking notification, cancel the default alert in `popupOpen` and call a notification API (for example, [`ToastUtility.show`](https://ej2.syncfusion.com/react/documentation/api/toast#show) or your custom component) with a custom title and content. The toast auto-dismisses after a configurable timeout and does not interrupt the user's workflow.

Common options supported by `ToastUtility.show`:

| Option | Description |
|---|---|
| `title` | Heading shown above the content |
| `content` | Body text (string or HTML) |
| `timeOut` | Auto-dismiss delay in milliseconds (`0` to require manual close) |
| `cssClass` | `e-toast-success`, `e-toast-info`, `e-toast-warning`, or `e-toast-danger` |
| `position` | `{ X: 'Right' \| 'Left' \| 'Center', Y: 'Top' \| 'Bottom' }` |
| `showCloseButton` | Whether the close (×) icon is shown |


{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/scheduler-sdk/react/schedule/events-cs55/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/scheduler-sdk/react/schedule/events-cs55/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/react/schedule/events-cs55/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/react/schedule/events-cs55" %}

## Mutate the Default Alert Content

If you want to keep the default alert dialog and only change the text, hook the `popupOpen` event, locate the inner content area, and replace its `innerHTML` with your own markup. The `.e-dlg-content` selector targets the body of the Syncfusion Dialog; the fallback `.e-popup-content` selector is included for compatibility with the older popup class.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/scheduler-sdk/react/schedule/events-cs56/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/scheduler-sdk/react/schedule/events-cs56/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/react/schedule/events-cs56/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/react/schedule/events-cs56" %}


## Customize via Localization

If you only need to change the text of the default alert (and support multiple languages), use Syncfusion's [`L10n`](https://ej2.syncfusion.com/react/documentation/api/base/l10n) loader to override the `schedule.overlapAlert` (body) and `schedule.alert` (title) keys for the desired culture. The Scheduler then uses your strings inside the default dialog.

`L10n.load` must be called **before** the ScheduleComponent renders, so place the call at module scope (outside the component). Only the keys you specify are overridden; default strings remain for any key omitted from the loaded object.

To switch languages at runtime, set the [`locale`](https://ej2.syncfusion.com/react/documentation/api/schedule#locale) property of the Scheduler to the matching culture code (for example, `'fr'`, `'de'`, `'ar'`).

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/scheduler-sdk/react/schedule/events-cs57/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/scheduler-sdk/react/schedule/events-cs57/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/react/schedule/events-cs57/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/react/schedule/events-cs57" %}

