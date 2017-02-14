### Introduction ###
Use this plugin if you are using a custom input for datatable.

### Dependencies ###
Requires the following libraries to work:
1. jQuery 1.10-1.11
2. dataTables (legacy)

### Quickstart ###

~~~~
<!-- HTML -->
<input type="text" id="customSearchFilterInput" />
~~~~

~~~~
//Javascript

var myDataTable = $(...).dataTable();

$("#customSearchFilterInput").customDataTableSearch({
    dataTable: myDataTable,
    hideDefault: true
})
~~~~

Options
- dataTable :   The datatable object to filter
- hideDefault:  Whether to hide the default filter. (Default false)