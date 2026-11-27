# Microsoft Project basics

*Practical · EEU 08106 Engineering Project Management*

**Microsoft Project** is scheduling software that does the network calculations of the previous chapters for you: you enter tasks, durations and links, and it draws the Gantt chart and network, finds the critical path and tracks progress. These notes follow the older menu-based versions used in the lab handout; newer versions have the same commands on a ribbon.

## Getting started

- **Start:** double-click the MS Project icon, or Start → Programs → Project.
- **Help:** Help → Microsoft Project Help, or press **F1**. Older versions also have the **Office Assistant** (the animated paper clip), which offers tips and answers questions in plain language.

### The screen

| Element | Purpose |
|---|---|
| **Menus** | Always shown; some options depend on the current view. |
| **Toolbars** | Buttons for common commands (Standard, Formatting, Project Guide); can be customised. |
| **Task pane** | Help when getting started, and other panes. |
| **Entry bar** | Where text is typed, with the outlining buttons. |
| **Status bar** | Current mode, warnings, key states (e.g. Num Lock). |
| **Working area** | One or two views, resizable. |

The **default view is the Gantt Chart**: a **Gantt table** (rows and columns, like a spreadsheet) on the left and a **Gantt bar chart** (the schedule on a time line) on the right, separated by a movable **divider bar**.

## Views

Choose a view from the **View menu** or the vertical **View bar**; **More Views** gives combinations. Each view is basically a **chart, a form or a sheet**.

| View | Shows |
|---|---|
| **Gantt Chart** | Tasks against the time scale, with links and the critical path. |
| **Network Diagram** | Each task as a box; the lines show the structure (an activity-on-node network). |
| **Tracking Gantt** | Two bars per task: the **baseline** (lower) and the **scheduled or actual** dates (upper). |
| **Calendar** | Tasks on a calendar. |
| **Task Usage** | Tasks with their assigned resources underneath. |
| **Resource Sheet** | A list of all resources. |
| **Resource Usage** | Hours per day for each resource. |
| **Resource Graph** | One resource's use over time. |

> **Note.** The handout describes the Network Diagram as "an acronym for Programme Evaluation Review Technique". It is the **PERT chart** of older versions that the name stood for; in current versions it is called the **Network Diagram** and shows an activity-on-node network.

### Tracking Gantt

After you **save a baseline**, the Tracking Gantt shows the original plan beneath the current schedule. If a task slips 2 days, its (red) scheduled bar extends 2 days past the baseline bar, and because tasks are linked, its **successors slip too** (the ripple effect). Use it to see slippage, completion percentages and the effect of a change on the finish date.

## Menus in brief

| Menu | Project-specific commands |
|---|---|
| **File** | Properties (basic project information). |
| **Edit** | **Link Tasks**, **Unlink Tasks**, Go To. |
| **Insert** | New task rows, columns, Task Information. |
| **Format** | Gantt: bar styles, **timescale**, gridlines, Gantt Chart Wizard. Network Diagram: box styles, layout. |
| **Tools** | Assign Resources, **Level Resources**, **Change Working Time** (calendars), **Tracking**, links between projects. |
| **Project** | Project Information (e.g. **start date**), task and resource details. |

## Entering tasks

Project keeps two databases, **tasks** and **resources**. It cross-checks the data and corrects inconsistencies itself, so keep an eye on what it changes.

The **Task Sheet** columns are:

| Column | Meaning |
|---|---|
| **ID** | Task identification number |
| **Name** | Task name |
| **Duration** | Time with units: **m** minutes, **h** hours, **d** days (default), **w** weeks |
| **Start / Finish** | Scheduled dates (calculated from the links if not entered) |
| **Predecessors** | IDs of the linked preceding tasks |
| **Resources** | Who or what does the task |

Type the name, press **Tab**, type the duration, press **Enter**. The **Task Entry** view (View → More Views → Task Entry) shows the Gantt chart above a **Task Form** with extra fields: *Fixed* start, *% Complete*, and tables of **resources** (units, work) and **predecessors** (type and lag).

Tasks can also be added with Insert → New Task, by double-clicking a task to open **Task Information**, or by drawing a box in the **Network Diagram**.

- A task with **0 d** duration becomes a **milestone**.
- Indenting tasks under another makes it a **summary task**. Use the outline buttons to **promote/demote** and **expand/collapse**.

## Linking tasks

Links tell Project which tasks depend on which.

| Link | Meaning | Example |
|---|---|---|
| **Finish-to-Start (FS)** | B starts when A finishes (the default). | Pour concrete → then strip formwork |
| **Start-to-Start (SS)** | B starts when (or after) A starts. | Building can start once the first batch of bricks is ready: SS with a **lag** |
| **Finish-to-Finish (FF)** | B finishes when A finishes. | All courses of a banquet must be ready together |
| **Start-to-Finish (SF)** | B cannot finish until A starts (rare). | Old shift ends only when the new shift starts |

A **lag** delays the successor; a **lead** (negative lag) lets it overlap. Link tasks by selecting them (**Ctrl/Shift + click**) and clicking the **Link** button or Edit → Link Tasks, or by typing predecessor IDs. Project **warns you** if a link is illogical, e.g. a circular link between a summary task and its own subtask.

## Practical: Training Course project

1. Enter the tasks: *Course Development* (milestone, **0d**); summary *Preparation* with subtasks *Install Software* (**2h**) and *Studies and Specifications* (1d); summary *Section Development* with subtasks *Section 1* to *Section 8*.
2. Indent the subtasks and **link** them in sequence.
3. Insert *Backup Installation* (1h) before *Studies and Specifications* (right-click → New Task).
4. Add *Slide Development* (5d) after Section 8, outdent it and link it to Section 8.
5. Change durations (2d for each module; 1.5d for the rest via Task Information).
6. Try linking *Slide Development* to *Module 1* and work out from the Gantt chart why Project calls it illogical.
7. Save as **Training Course** and **save a baseline** (Tools → Tracking → Save Baseline).

Other useful steps: change the **project start date** (Project → Project Information), update progress (Tools → Tracking → Update Project), zoom the timescale (View → Zoom), and jump to the project start with **Ctrl+Home** / **Alt+Home**.
