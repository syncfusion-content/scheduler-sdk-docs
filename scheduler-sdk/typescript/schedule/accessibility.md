---
layout: post
title: Accessibility and keyboard navigation for TypeScript Syncfusion
description: Learn here all about Accessibility in Syncfusion TypeScript Schedule control of Syncfusion Essential JS 2 and more.
platform: scheduler-sdk
control: Accessibility 
publishingplatform: scheduler-sdk
documentation: ug
domainurl: https://help.syncfusion.com/scheduler-sdk
---

# Accessibility in TypeScript Schedule control

The Scheduler component is designed following WAI-ARIA specifications, applying appropriate ARIA roles, states, and properties to all interactive elements. This ensures compatibility with assistive technologies such as screen readers. The component includes built-in keyboard navigation support, enabling users who rely on assistive technologies or keyboard-only navigation to interact with all Scheduler features effectively. Assistive technologies announce navigated dates, view changes, and interactive actions performed within the Scheduler, providing clear feedback to users.

The Scheduler implements essential ARIA attributes including `aria-label` and `role` to ensure comprehensive accessibility support. For optimal accessibility, use the Scheduler with ARIA-compliant browsers in conjunction with screen readers.

The accessibility compliance for the Schedule control is outlined below.

| Accessibility Criteria | Compatibility |
| -- | -- |
| [WCAG 2.2](https://www.w3.org/TR/WCAG22/) Support | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| [Section 508](https://www.section508.gov/) Support | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| Screen Reader Support | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| Right-To-Left Support | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| Color Contrast | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| Mobile Device Support | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| Keyboard Navigation Support | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| [Accessibility Checker](https://www.npmjs.com/package/accessibility-checker) Validation | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| [Axe-core](https://www.npmjs.com/package/axe-core) Accessibility Validation | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |

<style>
    .post .post-content img {
        display: inline-block;
        margin: 0.5em 0;
    }
</style>

<div><img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> - All features of the control meet the requirement.</div>

<div><img src="https://cdn.syncfusion.com/content/images/documentation/partial.png" alt="Intermediate"> - Some features of the control do not meet the requirement.</div>

<div><img src="https://cdn.syncfusion.com/content/images/documentation/not-supported.png" alt="No"> - The control does not meet the requirement.</div>

## ARIA attributes

The Scheduler's parent element is assigned with the role of `main`, identifying it as the primary content area of the control and a unique element within the document structure. These ARIA attributes provide essential context for assistive technologies to interpret the Scheduler's structure and functionality.

The following ARIA attributes are implemented in the Scheduler to ensure comprehensive accessibility:

| Attributes | Description |
|-------|---------|
| role="main" | Applied to the Scheduler's parent element to identify it as the main content area and primary interactive region of the control. |
| role="button" | Assigned to appointment elements within the Scheduler, indicating they are interactive and clickable elements that users can select to view or edit appointment details. |
| aria-label | Applied to the Scheduler's parent element with a default value reflecting the current date. This attribute updates dynamically as users navigate to different dates. Also assigned to navigation buttons (previous/next), the date range display in the header bar, and appointment elements to provide descriptive labels for assistive technologies. |
| aria-labelledby | References the editor dialog's title element, enabling assistive technologies to announce the dialog's purpose when opened. |
| aria-describedby | References the editor dialog's content description, providing detailed context about the dialog to assistive technology users. |
| aria-disabled | Applied to appointment elements when they are in a disabled state, informing assistive technology users that the appointment cannot be interacted with. |

The Syncfusion® Scheduler component uses a complex table structure to render calendar views (such as day, week, and month). As a result, automated accessibility tools (such as IBM Equal Access Accessibility Checker) may report the following warnings:

- **Table has no headers identified:** Some tables rendered by the Scheduler do not have headers explicitly identified, which may trigger warnings in accessibility checkers.
- **Complex table does not have headers for each cell properly defined with 'header' or 'scope':** The Scheduler's internal table structure may not define headers for every cell using the `header` or `scope` attributes, leading to additional warnings.

- **Label text is located after its associated text input or &lt;select&gt; element:** Certain form fields and dropdowns within the built-in editor windows place the label after the input control, which may flag standard layout order validation.

- **The 'for' attribute is not the 'id' of a valid element:** In the built-in scheduler editor window with multiple resources enabled, internal reference links between a label and its input component may trigger missing reference warnings in automated checkers.

- **Accessible name does not match or contain the visible label text:** Certain interactive elements within the component may have mismatched programmatic names compared to their displayed labels, which can be flagged by label-matching verification tools. This behavior occurs specifically in the Month View date headers and the Agenda View appointment elements.

- **Text contrast does not meet the minimum WCAG AA requirements:** Certain elements with specific text sizes and weights may fail standard color contrast ratio checks under default theme settings. This behavior occurs specifically in Adaptive Mode when utilizing Multiple Resources.

- **The combobox 'aria-expanded' attribute is false, but the combobox popup is visible:** The aria-expanded attribute remains false even when the combobox popup is visible in the Editor Window drop-down components because the component uses a custom composite layout to render standard dropdown elements, which automated verification tools flag as a layout or state mismatch.

- **The tabbable element's role 'cell' is not a widget role:**  
The tabbable element's role cell is not a widget role, which can trigger errors in automated accessibility checkers because a standard cell role is not recognized as an interactive widget by default. This behavior occurs specifically in the multiple resource Timeline views.

## Keyboard interaction

The Scheduler provides comprehensive keyboard navigation support through the `allowKeyboardInteraction` property, which is enabled by default. This feature allows users to perform all Scheduler operations using keyboard shortcuts, ensuring full accessibility for keyboard-only users. The following keyboard shortcuts enable efficient navigation and interaction with the Scheduler:

| Keys | Description |
|-----|-----|
| <kbd>Alt</kbd> + <kbd>j</kbd> | Focuses the Scheduler element. This shortcut must be implemented at the application level to direct focus to the Scheduler. |
| <kbd>Tab</kbd> | Moves focus to the first or currently active item in the Scheduler header bar, then progressively to each appointment element in the visible view. When no appointments are present, focus moves beyond the control. |
| <kbd>Shift</kbd> + <kbd>Tab</kbd> | Reverses the Tab key's focus order, moving backward through appointment elements, then to the active or first item in the header bar, and finally out of the control. |
| <kbd>Enter</kbd> | Opens the quick info popup for the currently selected cell or appointment, providing details and action options. |
| <kbd>Escape</kbd> | Closes any of the popup that are in open state. |
| <kbd>Arrow</kbd> | Navigates to adjacent cells in the current view. Use Left/Right arrows for horizontal navigation and Up/Down arrows for vertical navigation across time slots or dates. |
| <kbd>Shift</kbd> + <kbd>Arrow</kbd> | Extends the selection to multiple cells in the direction of the arrow key, enabling multi-cell selection for creating appointments spanning multiple time slots or days. |
| <kbd>Delete</kbd> | Deletes the currently selected appointment or multiple selected appointments. |
| <kbd>Ctrl</kbd> + <kbd>Click</kbd> on events | Enables selection of multiple appointments simultaneously. |
| <kbd>Alt</kbd> + <kbd>Number</kbd> (from 1 to 6) | Switches between available Scheduler views. The number corresponds to the view order defined in the views configuration. |
| <kbd>Ctrl</kbd> + <kbd>Left Arrow</kbd> | Navigates to the previous date period based on the current view (previous day, week, or month). |
| <kbd>Ctrl</kbd> + <kbd>Right Arrow</kbd> | Navigates to the next date period based on the current view (next day, week, or month). |
| <kbd>Left</kbd> or <kbd>Right Arrow</kbd> | When focus is on the Scheduler header bar, moves focus to the previous or next interactive element in the header (such as view switcher buttons or date navigation controls). |
| <kbd>Space</kbd> or <kbd>Enter</kbd> | Activates the currently focused element. |
| <kbd>Page Up</kbd> & <kbd>Page Down</kbd> | To scroll through the work cells area. |
| <kbd>Home</kbd> | Moves the selection to the first cell in the Scheduler. |
| <kbd>Shift</kbd> + <kbd>Alt</kbd> + <kbd>Y</kbd> | Navigates to today's date. |
| <kbd>Shift</kbd> + <kbd>Alt</kbd> + <kbd>N</kbd> | Opens the appointment editor window to create a new appointment. |

> You can refer to our [JavaScript Scheduler](https://www.syncfusion.com/javascript-ui-controls/js-scheduler) feature tour page for its groundbreaking feature representations. You can also explore our [JavaScript Scheduler example](https://ej2.syncfusion.com/demos/#/tailwind3/schedule/overview.html) to knows how to present and manipulate data.

## Ensuring accessibility

The accessibility compliance of the Scheduler control is validated using [accessibility-checker](https://www.npmjs.com/package/accessibility-checker) and [axe-core](https://www.npmjs.com/package/axe-core) tools during automated testing to ensure adherence to accessibility standards.

The accessibility compliance of the Scheduler control is shown in the following sample. Open the [sample](https://ej2.syncfusion.com/accessibility/schedule.html) in a new window to evaluate the accessibility of the Scheduler control with accessibility tools.

{% previewsample "https://ej2.syncfusion.com/accessibility/schedule.html" %}

## See also

- [Accessibility in JavaScript Scheduler](../common/accessibility)
