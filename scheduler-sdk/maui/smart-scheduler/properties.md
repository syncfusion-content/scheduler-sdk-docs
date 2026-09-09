---
layout: post
title: Properties of .NET MAUI Smart Scheduler control | Syncfusion®
description: This section explains the properties, events and methods with Syncfusion® MAUI SfSmartScheduler control.
platform: maui
control: SfSmartScheduler
documentation: ug
---

# API Reference for .NET MAUI Smart Scheduler

## Properties

<table>
<tr>
    <th>Name</th>
    <th>Type</th>
    <th>Description</th>
</tr>

<tr valign="top">
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.SmartScheduler.SfSmartScheduler.html#Syncfusion_Maui_SmartScheduler_SfSmartScheduler_AssistButtonTemplate" aria-label="View AssistButtonTemplate property in API reference">AssistButtonTemplate</a></td>
    <td><a href="https://learn.microsoft.com/dotnet/api/microsoft.maui.controls.datatemplate" aria-label="View DataTemplate type in API reference">DataTemplate</a></td>
    <td>Customizes the appearance of the AI assistance button displayed within the scheduler by replacing the default layout with a custom <code>DataTemplate</code>.</td>
</tr>

<tr valign="top">
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.SmartScheduler.SfSmartScheduler.html#Syncfusion_Maui_SmartScheduler_SfSmartScheduler_AssistViewSettings" aria-label="View AssistViewSettings property in API reference">AssistViewSettings</a></td>
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.SmartScheduler.SchedulerAssistViewSettings.html" aria-label="View SchedulerAssistViewSettings type in API reference">SchedulerAssistViewSettings</a></td>
    <td>Configures the appearance and behavior of the AI assist view that suggests appointments users can accept or edit.</td>
</tr>

<tr valign="top">
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.SmartScheduler.SfSmartScheduler.html#Syncfusion_Maui_SmartScheduler_SfSmartScheduler_EnableAssistButton" aria-label="View EnableAssistButton property in API reference">EnableAssistButton</a></td>
    <td><a href="https://learn.microsoft.com/dotnet/api/system.boolean" aria-label="View Boolean type in API reference">bool</a></td>
    <td>Shows or hides the AI assistance button used to open the assist view. Default is true.</td>
</tr>
</table>

## Methods

<table>
<tr>
    <th>Name</th>
    <th>Type</th>
    <th>Description</th>
</tr>

<tr valign="top">
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.SmartScheduler.SfSmartScheduler.html#Syncfusion_Maui_SmartScheduler_SfSmartScheduler_CloseAssistView" aria-label="View CloseAssistView method in API reference">CloseAssistView()</a></td>
    <td><a href="https://learn.microsoft.com/dotnet/api/system.void" aria-label="View Void type in API reference">void</a></td>
    <td>Dismisses the AI assist view if it is currently open.</td>
</tr>

<tr valign="top">
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.SmartScheduler.SfSmartScheduler.html#Syncfusion_Maui_SmartScheduler_SfSmartScheduler_OpenAssistView" aria-label="View OpenAssistView method in API reference">OpenAssistView()</a></td>
    <td><a href="https://learn.microsoft.com/dotnet/api/system.void" aria-label="View Void type in API reference">void</a></td>
    <td>Displays the AI assist view so users can interact with appointment suggestions.</td>
</tr>

<tr valign="top">
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.SmartScheduler.SfSmartScheduler.html#Syncfusion_Maui_SmartScheduler_SfSmartScheduler_ResetAssistView" aria-label="View ResetAssistView method in API reference">ResetAssistView()</a></td>
    <td><a href="https://learn.microsoft.com/dotnet/api/system.void" aria-label="View Void type in API reference">void</a></td>
    <td>Restores the AI assist view to its initial state, discarding the current conversation and any generated responses.</td>
</tr>
</table>

## Events

<table>
<tr>
    <th>Name</th>
    <th>Type</th>
    <th>Description</th>
</tr>

<tr valign="top">
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.SmartScheduler.SfSmartScheduler.html#Syncfusion_Maui_SmartScheduler_SfSmartScheduler_AssistAppointmentResponseCompleted" aria-label="View AssistAppointmentResponseCompleted event in API reference">AssistAppointmentResponseCompleted</a></td>
    <td><a href="https://learn.microsoft.com/dotnet/api/system.eventhandler-1" aria-label="View EventHandler type in API reference">EventHandler&lt;<a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.SmartScheduler.AssistAppointmentResponseCompletedEventArgs.html" aria-label="View AssistAppointmentResponseCompletedEventArgs type in API reference">AssistAppointmentResponseCompletedEventArgs&gt;</a></a></td>
    <td>Raised after the AI finishes processing a request, providing the appointment action (create or modify) and the response result so the caller can apply or inspect the outcome.</td>
</tr>
</table>

