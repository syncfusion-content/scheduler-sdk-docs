---
layout: post
title: Salesforce Integration in JavaScript Scheduler | Syncfusion
description: Learn how to integrate the Syncfusion JavaScript Scheduler into Salesforce apps to schedule and manage appointments within Salesforce.
platform: scheduler-sdk
control: Scheduler
documentation: ug
domainurl: https://help.syncfusion.com/scheduler-sdk
---

# Salesforce Integration in JavaScript Scheduler

This topic provides a step-by-step guide to integrating the [JavaScript Scheduler](https://www.syncfusion.com/scheduler-sdk/javascript-scheduler) into Salesforce.

## Prerequisites

Before getting started, make sure the following prerequisite is installed:

- [Salesforce CLI](https://developer.salesforce.com/tools/salesforcecli)

## Configuring Salesforce

To begin, configure Salesforce:

- If you don't have a Salesforce developer account, sign up at https://www.salesforce.com/form/developer-signup/.
- Sign in at https://login.salesforce.com/.
- In Setup, search for **Dev Hub** and enable the **Enable Dev Hub** option.

![Enable Dev Hub](../images/Salesforce-enable-dev-hub.png)

## Creating a Salesforce project

With Salesforce configured, create a [Salesforce project](https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_intro.htm) for the integration.

Create a base directory (for example, `salesforceApp`):

```bash
mkdir salesforceApp 
```

Navigate to that directory and generate a Salesforce DX project:

```bash
sf project:generate -n scheduler-salesforce-app
```

![Salesforce App](../images/Salesforce-app.png)

## Authorizing the Salesforce project

Before proceeding further, you need to authorize your Salesforce project by following these steps

Authorize the project with your Salesforce account in the browser:

```bash
sf org:login:web -d
```

![Salesforce Authorization](../images/Salesforce-authorization.png)

Open the `sfdx-project.json` file located in `salesforceApp/scheduler-salesforce-app` and update the `sfdcLoginUrl` with the domain URL of your Salesforce account as shown in image (fig 2). You can obtain the domain URL from the `My Domain` setup tab in Salesforce as shown in image (fig 1). 

fig 1
![Salesforce project1](../images/Salesforce-project-fig1.png)

fig 2
![Salesforce project2](../images/Salesforce-project-fig2.png)

## Create scratch organization 

To facilitate development and testing, the creation of a scratch organization will be done using the following steps.

Create a scratch organization for development and testing:

```bash
sf org:create:scratch -f config/project-scratch-def.json
```

![Salesforce create scratch organization](../images/Salesforce-create-scratch.png)

## Adding static resources 

To integrate the Syncfusion<sup style="font-size:70%">&reg;</sup> scripts and styles as static resource files within Salesforce, follow these steps.  
 
Open the scratch org in the browser:

```bash
sf org:open -o <scratch_org_username>
```

Replace `<scratch_org_username>` with the username generated for your scratch org.
 
In the Salesforce setup menu, search for `Static Resources` and click on **New** button in the static resources tab. 

![Salesforce Setup menu](../images/Salesforce-setup-menu.png)

Load the Syncfusion<sup style="font-size:70%">&reg;</sup> scripts and styles as a zip static resource (obtain from the [CRG](https://crg.syncfusion.com/)).

In the static resource tab, provide a name for the static resource files, upload the zip file, and change the cache control to `Public`. Click **Save** button to add the static resources to your Salesforce project.

![Salesforce Static Resource](../images/Salesforce-static-resource.png)

## Adding CSP trusted sites 

To ensure seamless integration and prevent content security policy issues, follow these steps. 

In the Salesforce setup menu, search for `CSP Trusted Sites` and click New Trusted Site button.

![Salesforce CSP trusted sites](../images/Salesforce-CSP-trusted-sites.png)

Enter the trusted site name and URL (for example, `https://fonts.googleapis.com` if required). Enable the following options and save:

- Allow site for `font-src`
- Allow site for `style-src`

![CSP trusted sites](../images/CSP-trusted-sites.png)

## Creating a data model for appointment 

To begin, navigate to the Object Manager in Salesforce and select Create followed by `Custom Object`.

![Salesforce Object manager](../images/Salesforce-object-manager.png)

In the custom object section, enter a meaningful label for your custom object. For this example, let's name it `SchedulerEvent`. Once done, click **Save** to create the custom object. 

![Salesforce New custom Object](../images/Salesforce-new-custom-object.png)

## Defining fields and relationships 

let's configure the fields and relationships for the `SchedulerEvent` object. To do so click **New** button to create a new field. 

![Salesforce Field and Relationship](../images/Salesforce-field-relationship.png)

1. Setting the Data Type for `StartTime`. Choose DateTime as the data type for the `StartTime` field. This field will store the starting time of each appointment.

![Salesforce Scheduler Events](../images/Salesforce-scheduler-events.png)

2. Provide a clear label for the `StartTime` field and click **Next** button. Once you've reviewed the settings, click **Save** & **New** button to proceed.

![Salesforce New custom field](../images/Salesforce-setting-starttime-field.png)

3. Repeat the same steps as above to create the `EndTime` field, which will store the ending time of each appointment. Creating the `EndTime` Field. Once you've reviewed the settings, click **Save** & **New** button to proceed.

![Salesforce setting allday field](../images/Salesforce-setting-endtime-field.png)

4. Choose Checkbox as the data type for the `IsAllDay` field. This field will be marked when an appointment is scheduled for the entire day. 

![Salesforce New custom field](../images/Salesforce-setting-isallday-field.png)

5. Assign an appropriate label, such as `IsAllDay`, to the checkbox field. Click **Next** button to review the settings and then click **Save** & **New** button to proceed. 

![Salesforce New custom field](../images/Salesforce-setting-isallday-field.png)

6. Choose Text as the data type for the `Location/Recurrence Rule/Recurrence Id /Recurrence Exception` field to store the location field and recurrence rule for each appointment as shown in the image respectively. Click **Next** to review the settings and then click **Save** button to proceed. 

![Salesforce New custom field](../images/Salesforce-setting-location-field.png)

7. Based on your specific requirements, you can add more fields to the `SchedulerEvent` object by following the same steps outlined above.

![Salesforce New custom field](../images/Salesforce-custom-field.png)

## Creating a Lightning web component 

To integrate the **JavaScript Scheduler** into your Salesforce project, we will create a [Lightning web component](https://developer.salesforce.com/docs/platform/lwc/guide/get-started-introduction.html).

1. Generate an LWC named `scheduler`:

```bash
sf lightning:generate:component --type lwc -n scheduler -d force-app/main/default/lwc
```

![Salesforce Creating Lightning web component](../images/Salesforce-creating-lightning-web.png)

2. Open the `scheduler.js-meta.xml` file located in `force-app/main/default/lwc/scheduler` and modify the component definition to expose it in the Lightning App Builder. Here's an example of the modified file. 

```xml
<?xml version="1.0" encoding="UTF-8"?>
<LightningComponentBundle xmlns="http://soap.sforce.com/2006/04/metadata">
  <apiVersion>57.0</apiVersion>
  <isExposed>true</isExposed>
  <targets>
    <target>lightning__AppPage</target>
  </targets>
  <targetConfigs>
    <targetConfig targets="lightning__AppPage">
      <property name="height" label="Height" type="Integer" default="800" />
    </targetConfig>
  </targetConfigs>
</LightningComponentBundle>
```

3. Open the `scheduler.html` file located in `force-app/main/default/lwc/scheduler` and add an element with a class name to append the scheduler. Here's an example of the modified file.

```html
<template>
  <div class="syncfusionscheduler" lwc:dom="manual" style="width:100%;"></div>
</template>
```

4. Open the `scheduler.js` file located in `force-app/main/default/lwc/scheduler` and implement the scheduler code in renderedCallback function. The static scripts and styles are loaded using the `loadScript` and `loadStyle` imports. Here's an example of the modified file.

```js
import { LightningElement, api } from 'lwc'; 
import { ShowToastEvent } from "lightning/platformShowToastEvent"; 
import { loadStyle, loadScript } from "lightning/platformResourceLoader"; 
import { createRecord, updateRecord, deleteRecord } from "lightning/uiRecordApi"; 
// Static resources 
import schedulerFiles from "@salesforce/resourceUrl/syncfusionscheduler"; 

// Controllers 
import getEvents from "@salesforce/apex/SchedulerData.getEvents";
function getEventsData(eventData) { 
    const data = eventData.events.map((a) => ({ 
        Id: a.Id, 
        Subject: a.Name, 
        Location: a.Location__c, 
        StartTime: a.Start_Time__c, 
        EndTime: a.End_Time__c, 
        IsAllDay: a.IsAllDay__c, 
        RecurrenceRule: a.RecurrenceRule__c, 
        RecurrenceID: a.Recurrence_Id__c, 
        RecurrenceException: a.RecurrenceException__c 
    })); 
    return data; 
} 

export default class Scheduler extends LightningElement { 
    static delegatesFocus = true;   
    @api height; 
    schedulerInitialized = false;  
    renderedCallback() { 
        if (this.schedulerInitialized) { 
            return; 
        } 
        this.schedulerInitialized = true;  
        Promise.all([ 
            loadScript(this, schedulerFiles + "/syncscheduler.js"), 
            loadStyle(this, schedulerFiles + "/syncscheduler.css") 
        ]) 
            .then(() => { 
                this.initializeUI(); 
            }) 
            .catch((error) => { 
                this.dispatchEvent( 
                    new ShowToastEvent({ 
                        title: "Error loading scheduler", 
                        message: error.message, 
                        variant: "error" 
                    }) 
                ); 
            }); 
    } 
    initializeUI() { 
        const root = this.template.querySelector(".syncfusionscheduler"); 
        root.style.height = this.height + "px"; 
        const scheduleOptions = { 
            height: this.height + "px", 
            selectedDate: new Date(), 
            actionComplete: function (args) { 
                //To perform CRUD in salesforce backend 
                if (args.addedRecords && args.addedRecords.length > 0) { 
                    var data = args.addedRecords[0]; 
                    var insert = { 
                        apiName: "SchedulerEvent__c", 
                        fields: { 
                            Name: data.Subject, 
                            Location__c: data.Location, 
                            Start_Time__c: data.StartTime, 
                            End_Time__c: data.EndTime, 
                            IsAllDay__c: data.IsAllDay, 
                            RecurrenceRule__c: data.RecurrenceRule, 
                            Recurrence_Id__c: data.RecurrenceID, 
                            RecurrenceException__c: data.RecurrenceException 
                        } 
                    }; 
                    createRecord(insert).then((res) => { 
                        if (scheduleObj) 
                        { 
                            scheduleObj.eventSettings.dataSource[scheduleObj.eventSettings.dataSource.length - 1].Id = res.id; 
                            scheduleObj.refreshEvents(); 
                        } 
                        return { tid: res.id, ...res }; 
                    }); 
                } 
                if (args.changedRecords && args.changedRecords.length > 0) { 
                    var data = args.changedRecords[0]; 
                    var update = { 
                        fields: { 
                            Id: data.Id, 
                            Name: data.Subject, 
                            Location__c: data.Location, 
                            Start_Time__c: data.StartTime, 
                            End_Time__c: data.EndTime, 
                            IsAllDay__c: data.IsAllDay, 
                            RecurrenceRule__c: data.RecurrenceRule, 
                            RecurrenceException__c: data.RecurrenceException, 
                            Recurrence_Id__c: data.RecurrenceID 
                        } 
                    }; 
                    updateRecord(update).then(() => ({})); 
                } 
                if (args.deletedRecords && args.deletedRecords.length > 0) { 
                    args.deletedRecords.forEach(event => { 
                        deleteRecord(event.Id).then(() => ({})); 
                    }); 
                } 
            } 
        }; 
        const scheduleObj = new ej.schedule.Schedule(scheduleOptions, root); 
        getEvents().then((data) => { 
            const eventData = getEventsData(data); 
            scheduleObj.eventSettings.dataSource = eventData; 
            scheduleObj.dataBind(); 
        }); 
    } 
} 
```

## Creating apex class 

Apex class that facilitates smooth interactions between your Lightning component and the data model. By following these steps, you will be able to fetch and manipulate data from the `SchedulerEvent` custom object effortlessly. 

Use the following command to create Apex class with the name `SchedulerData`. 

```bash
sf apex:generate:class -n SchedulerData -d force-app/main/default/classes	 
```

![Salesforce Creating Apex Class](../images/Salesforce-creating-apex.png)

Open the **SchedulerData.cls** file located in `force-app/main/default/classes/SchedulerData.cls`. 
This will fetch the event data from salesforce backend. Here's an example of the modified file. 

```c#
public with sharing class SchedulerData { 
    @RemoteAction 
    @AuraEnabled(cacheable=true) 
    public static Map<String, Object> getEvents() {  
        // fetching the Records via SOQL 
        List<SchedulerEvent__c> Events = new List<SchedulerEvent__c>(); 
        Events = [SELECT Id, Name, Start_Time__c, End_Time__c, IsAllDay__c, 
            Location__c, RecurrenceRule__c, Recurrence_Id__c, RecurrenceException__c FROM SchedulerEvent__c];
        Map<String, Object> result = new Map<String, Object>{'events' => Events }; 
        return result; 
   } 
} 
```

## Pull scratch organization 

To retrieve the changes made in the scratch organization and sync them with your local Salesforce project, use the following command. 

```bash
sf project:retrieve:start -o <scratch org use name> 
```

Replace <scratch org username> with the username of your scratch organization.

![Salesforce Pull Scratch](../images/Salesforce-pull-scratch.png)

## Push scratch organization 

To push the changes made in your local Salesforce project to the scratch organization, use the following command. 

```bash
sf project:deploy:start -o <scratch org use name> 
```

Replace <scratch org username> with the username of your scratch organization.

![Salesforce Push Scratch](../images/Salesforce-push-scratch.png)

## Creating lightning page 

To display the **JavaScript Scheduler** on a Lightning page, follow these steps. 

1. In your scratch organization, search for `Lightning App Builder` in the quick find setup, select `Lightning App Builder` and click **New** button. 

![Search Scheduler page](../images/Salesforce-create-lightning-page.png)

2. Choose **App** Page and click **Next** button. 

![Search Scheduler page](../images/Salesforce-add-lightning-page.png) 

3. Provide a label name for the app page and click **Next** button. For example, here you can name it `SyncfusionScheduler`. 

![Search Scheduler page](../images/Salesforce-provide-name-lightning-page.png)

4. Choose One **Region** and click **Finish** button. 

![Search Scheduler page](../images/Salesforce-select-region-lightning-page.png)

5. In the Lightning App Builder, under the `Add Components Here` section, drag and drop the scheduler component. The scheduler will be 
rendered inside the content body. Click **Save** to activate the custom component. 

![Search Scheduler page](../images/Salesforce-add-component.png)

![Search Scheduler page](../images/Salesforce-save-component.png)

6. Activate the custom component with name `SyncfusionScheduler` and click the **Save** button. 

![Search Scheduler page](../images/Salesforce-activate-custom-component.png)

## Launching scheduler in home page 

To access the integrated **JavaScript Scheduler** on the home page, follow these steps. 

Click on the app launcher icon in Salesforce and Search for `SyncfusionScheduler`, which was registered earlier in the Lightning App Builder.

![Search Scheduler page](../images/Salesforce-search-scheduler.png)

Click on the `SyncfusionScheduler` app, and the scheduler will load on the home page.

![Click Scheduler page](../images/Salesforce-click-scheduler.png)

N> You can also explore our [**JavaScript Scheduler**](https://www.syncfusion.com/scheduler-sdk/javascript-scheduler) example to knows about the Salesforce integration.
