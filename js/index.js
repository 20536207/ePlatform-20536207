
window.jsPDF = window.jspdf.jsPDF;

$(() => {

  //========================================================================================================
  $('#boxOptions').dxBox({
    direction: 'row',
    width: '100%',
    height: '100%',
    align: 'center',
    crossAlign: 'center',
  });

  //========================================================================================================
  const _userauth = $('#userauth').dxTextBox({
    accessKey: undefined,
    activeStateEnabled: false,
    buttons: [
      {
        location: "after",
        name: "passmode",
        options: {
          icon: 'lock',
          type: 'default',
          onClick: function (e) {
            var button = e.component;
            button.option('icon', button.option('icon') === 'lock' ? 'unlock' : 'lock');
            _userauth.option('mode', _userauth.option('mode') === 'text' ? 'password' : 'text');
          },

        }
      },
      {
        name: 'login',
        location: 'after',
        options: {
          icon: 'arrowright',
          text: 'Next',
          type: 'default',
          useSubmitBehavior: true,
          /*
          onClick: function () {
            $("#boxOptions").remove();
            $("body").prepend("<div id='gridContainer'></div>");
            
            DevExpress.ui.notify(
              {
                message: _userauth.option('value'),
                maxWidth: 300,
                displayTime: 3000,
                animation: {
                  show: { type: 'fade', duration: 400, from: 0, to: 1 },
                  hide: { type: 'fade', duration: 40, to: 0 },
                },
              },
              {position: "top right", direction: "down-push"}
            );
          },
          */
        }
      }
    ],
    disabled: false,
    elementAttr: {},
    focusStateEnabled: true,
    height: undefined,
    hint: undefined,
    hoverStateEnabled: true,
    inputAttr: {},
    isValid: true,
    label: "User Authentication",
    labelMode: "floating",
    mask: "",
    maskChar: "_",
    maskInvalidMessage: "Value is invalid",
    maskRules: {},
    maxLength: null,
    mode: "password",
    name: "",
    onChange: null,
    onContentReady: null,
    onCopy: null,
    onCut: null,
    onDisposing: null,
    onEnterKey: null,
    onFocusIn: null,
    onFocusOut: null,
    onInitialized: null,
    onInput: null,
    onKeyDown: null,
    onKeyUp: null,
    onOptionChanged: null,
    onPaste: null,
    onValueChanged: null,
    placeholder: "",
    readOnly: false,
    rtlEnabled: false,
    showClearButton: true,
    showMaskMode: "always",
    spellcheck: false,
    stylingMode: "outlined",
    tabIndex: 0,
    useMaskedValue: true,
    validationError: null,
    validationErrors: null,
    validationMessageMode: "auto",
    validationMessagePosition: "bottom",
    validationStatus: "valid",
    value: null,
    valueChangeEvent: "change",
    visible: true,
    width: 300
  }).dxTextBox('instance');

  //========================================================================================================
  $('#MasterGridContainer').dxDataGrid({
    keyExpr: 'A01',
    showBorders: true,
    showColumnHeaders: true,
    showColumnLines: true,
    showRowLines: true,
    dataSource: 'data/Dashboard.json',
    columnHidingEnabled: false,
    allowColumnReordering: true,
    allowColumnResizing: true,
    columnResizingMode: 'widget',
    columnAutoWidth: true,
    wordWrapEnabled: false,
    columnChooser: {
      allowSearch: false,
      //emptyPanelText:"Drag a column here to hide it",
      enabled: true,
      //height:260,
      mode: "select",
      //searchTimeout:500,
      sortOrder: undefined,
      title: "Column Chooser",
      //width:250,
    },
    columnFixing: {
      enabled: true,
    },
    hoverStateEnabled: true,
    paging: {
      pageSize: 15,
    },
    pager: {
      allowedPageSizes: [5, 10, 15, 20, 25, 50, 100, 'all'],
      displayMode: "compact",
      showInfo: true,
      showNavigationButtons: true,
      showPageSizeSelector: true,
      visible: true,
    },
    editing: {
      mode: 'form',
      allowUpdating: false,
      allowAdding: false,
      allowDeleting: false,
      confirmDelete: true,
      useIcons: true,
    },
    export: {
      enabled: true,
      formats: ['xlsx', 'pdf'],
      allowExportSelectedData: true,
    },
    onExporting(e) {
      if (e.format === 'xlsx') {
        const workbook = new ExcelJS.Workbook();
        const worksheet = workbook.addWorksheet('Report');
        DevExpress.excelExporter.exportDataGrid({
          component: e.component,
          worksheet,
          autoFilterEnabled: true,
        }).then(() => {
          workbook.xlsx.writeBuffer().then((buffer) => {
            saveAs(new Blob([buffer], { type: 'application/octet-stream' }), 'report.xlsx');
          });
        });
        e.cancel = true;
      }
      else if (e.format === 'pdf') {
        const doc = new jsPDF('l', 'pt');
        DevExpress.pdfExporter.exportDataGrid({
          jsPDFDocument: doc,
          component: e.component,
        }).then(() => {
          doc.save('report.pdf');
        });
      }
    },

    remoteOperations: false,
    sorting: {
      mode: 'multiple',
    },
    searchPanel: {
      visible: true,
      highlightCaseSensitive: false,
    },
    selection: {
      allowSelectAll: true,
      deferred: false,
      mode: "multiple",
      selectAllMode: "allPages",
      showCheckBoxesMode: "click"
    },
    filterRow: { visible: true },
    filterPanel: { visible: true },
    headerFilter: { visible: true },
    groupPanel: { visible: false },
    grouping: {
      autoExpandAll: false,
    },
    wordWrapEnabled: false,
    columns: _TbDashboard,
    sortByGroupSummaryInfo: [{ summaryItem: 'count' }],
    summary: _TBSummaryDashboard,
    toolbar: undefined,
    masterDetail: {
      enabled: true,
      template(container, options) {
        $("<div>").dxDataGrid({
          /*
          dataSource: new DevExpress.data.CustomStore({
            key: "A01",
            loadMode: "raw", // omit in the DataGrid, TreeList, PivotGrid, and Scheduler
            load: function () {
              return $.getJSON(
                "data/info_pd.json"
              );
            },
          }),
          */
          showBorders: true,
          showColumnHeaders: true,
          showColumnLines: true,
          showRowLines: true,
          columnHidingEnabled: false,
          allowColumnReordering: true,
          allowColumnResizing: true,
          columnResizingMode: 'widget',
          columnAutoWidth: true,
          wordWrapEnabled: false,
          columnChooser: {
            allowSearch: false,
            //emptyPanelText:"Drag a column here to hide it",
            enabled: true,
            //height:260,
            mode: "select",
            //searchTimeout:500,
            sortOrder: undefined,
            title: "Column Chooser",
            //width:250,
          },
          columnFixing: {
            enabled: true,
          },
          hoverStateEnabled: true,
          paging: {
            pageSize: 15,
          },
          pager: {
            allowedPageSizes: [5, 10, 15, 20, 25, 50, 100, 'all'],
            displayMode: "compact",
            showInfo: true,
            showNavigationButtons: true,
            showPageSizeSelector: true,
            visible: true,
          },
          editing: {
            mode: 'row',
            allowUpdating: false,
            allowAdding: false,
            allowDeleting: false,
            confirmDelete: true,
            useIcons: true,
          },
          export: {
            enabled: true,
            formats: ['xlsx', 'pdf'],
            allowExportSelectedData: true,
          },
          onExporting(e) {
            if (e.format === 'xlsx') {
              const workbook = new ExcelJS.Workbook();
              const worksheet = workbook.addWorksheet('Report');
              DevExpress.excelExporter.exportDataGrid({
                component: e.component,
                worksheet,
                autoFilterEnabled: true,
              }).then(() => {
                workbook.xlsx.writeBuffer().then((buffer) => {
                  saveAs(new Blob([buffer], { type: 'application/octet-stream' }), 'report.xlsx');
                });
              });
              e.cancel = true;
            }
            else if (e.format === 'pdf') {
              const doc = new jsPDF('l', 'pt');
              DevExpress.pdfExporter.exportDataGrid({
                jsPDFDocument: doc,
                component: e.component,
              }).then(() => {
                doc.save('report.pdf');
              });
            }
          },

          remoteOperations: false,
          sorting: {
            mode: 'multiple',
          },
          searchPanel: {
            visible: true,
            highlightCaseSensitive: false,
          },
          selection: {
            allowSelectAll: true,
            deferred: false,
            mode: "multiple",
            selectAllMode: "allPages",
            showCheckBoxesMode: "click"
          },
          filterRow: { visible: true },
          filterPanel: { visible: true },
          headerFilter: { visible: true },
          groupPanel: { visible: false },
          grouping: {
            autoExpandAll: false,
          },
          wordWrapEnabled: false,
          //sortByGroupSummaryInfo: [{ summaryItem: 'count' }],
          //summary: _TBSummaryDashboard,
          //toolbar: undefined,
          columns: [
            {
              caption: 'Identitas Peserta Didik',
              fixed: true,
              columns: [
                {
                  caption: 'ID Kelas',
                  dataField: 'A01',
                  sortOrder: 'asc',

                }, {
                  caption: 'NIPD',
                  dataField: 'B01',

                }, {
                  caption: 'NISN',
                  dataField: 'B02',

                }, {
                  caption: 'Nama Lengkap',
                  dataField: 'B03',

                }
              ],
            },
          ],
          dataSource: new DevExpress.data.CustomStore({
            key: "A01",
            loadMode: "raw", // omit in the DataGrid, TreeList, PivotGrid, and Scheduler
            load: function () {
              var d = $.Deferred();
              return $.getJSON(
                "data/info_pd.json",
              )
                .done(function (result) {
                  // You can process the response here
                  d.resolve(result);
                })
                .fail(function () {
                  throw "Data loading error";
                });
            },
            insert: function (values) {
              var deferred = $.Deferred();
              $.ajax({
                url: "data/info_pd.json",
                method: "POST",
                data: JSON.stringify(values)
              })
                .done(deferred.resolve)
                .fail(function (e) {
                  deferred.reject("Insertion failed");
                });
              return deferred.promise();
            },
            remove: function (key) {
              var deferred = $.Deferred();
              $.ajax({
                url: "data/info_pd.json" + encodeURIComponent(key),
                method: "DELETE"
              })
                .done(deferred.resolve)
                .fail(function (e) {
                  deferred.reject("Deletion failed");
                });
              return deferred.promise();
            },
            update: function (key, values) {
              var deferred = $.Deferred();
              $.ajax({
                url: "data/info_pd.json" + encodeURIComponent(key),
                method: "PUT",
                dataType: "json",
                data: JSON.stringify(values)
              })
                .done(deferred.resolve)
                .fail(function (e) {
                  deferred.reject("failed update");
                });
              return deferred.promise();
            }
          }),
        }).appendTo(container);
      },
    },
  }).dxDataGrid('instance');
});
//===========================================================================================
/*
$(function() {
  var customDataSource = new DevExpress.data.CustomStore({
      key: "ID",
      load: function() {
        var d = $.Deferred();
        return $.getJSON(
          "https://raw.githubusercontent.com/20536207/Informasi-Peserta-Didik/main/data/info_pd.json", 
          { 
            "param1": "value1",
            "param2": "value2"
          }
        )
        .done(function(result) {
           // You can process the response here
           d.resolve(result);
        })
        .fail(function() {
          throw "Data loading error";
        });
    },
      insert: function(values) {
          var deferred = $.Deferred();
          $.ajax({
              url: "data/info_pd.json",
              method: "POST",
              data: JSON.stringify(values)
          })
          .done(deferred.resolve)
          .fail(function(e){
              deferred.reject("Insertion failed");
          });
          return deferred.promise();
      },
      remove: function(key) {
          var deferred = $.Deferred();
          $.ajax({
              url: "data/info_pd.json" + encodeURIComponent(key),
              method: "DELETE"
          })
          .done(deferred.resolve)
          .fail(function(e){
              deferred.reject("Deletion failed");
          });
          return deferred.promise();
      },
      update: function(key, values) {
          var deferred = $.Deferred();
          $.ajax({
              url: "data/info_pd.json" + encodeURIComponent(key),
              method: "PUT",
              data: JSON.stringify(values)
          })
          .done(deferred.resolve)
          .fail(function(e){
              deferred.reject("Update failed");
          });
          return deferred.promise();
      }
  });

  // ...
});
*/