
// const PopupAIO = $('#PopupAIO').dxPopup({
//     accessKey: undefined,
//     animation: {
//         hide: "{ type: 'slide', duration: 400, from: { position: { my: 'center', at: 'center', of: window } }, to: { position: { my: 'top', at: 'bottom', of: window } }} (iOS)",
//         show: "{ type: 'slide', duration: 400, from: { position: { my: 'top', at: 'bottom', of: window } }, to: { position: { my: 'center', at: 'center', of: window } }} (iOS)"
//     },
//     container: undefined,
//     contentComponent: null,
//     contentRender: null,
//     contentTemplate: "content",
//     copyRootClassesToWrapper: false,
//     deferRendering: true,
//     disabled: false,
//     dragAndResizeArea: undefined,
//     dragEnabled: true,
//     dragOutsideBoundary: false,
//     focusStateEnabled: true,
//     fullScreen: false,
//     height: "80vh",
//     hideOnOutsideClick: false,
//     hideOnParentScroll: false,
//     hint: undefined,
//     hoverStateEnabled: false,
//     maxHeight: null,
//     maxWidth: null,
//     minHeight: null,
//     minWidth: null,
//     onContentReady: null,
//     onDisposing: null,
//     onHidden: null,
//     onHiding: null,
//     onInitialized: null,
//     onOptionChanged: null,
//     onResize: null,
//     onResizeEnd: null,
//     onResizeStart: null,
//     onShowing: null,
//     onShown: null,
//     onTitleRendered: null,
//     position: { my: 'center', at: 'center', collision: 'fit' },
//     //{ my: 'center', at: 'center', of: window },
//     //{ my: 'center', at: 'center', of: '#target' },
//     resizeEnabled: false,
//     restorePosition: true,
//     rtlEnabled: false,
//     shading: true,
//     shadingColor: "",
//     showCloseButton: true,
//     showTitle: true,
//     tabIndex: 0,
//     title: "",
//     titleComponent: null,
//     titleRender: null,
//     titleTemplate: "title",
//     toolbarItems: [
//         {
//             component: null,
//             cssClass: undefined,
//             disabled: false,
//             html: null,
//             locateInMenu: "never",
//             location: "center",
//             menuItemComponent: null,
//             menuItemRender: null,
//             menuItemTemplate: null,
//             options: null,
//             render: null,
//             showText: "always",
//             template: null,
//             text: null,
//             toolbar: "top",
//             visible: true,
//             widget: null
//         }
//     ],
//     visible: true,
//     width: "80vw",
//     wrapperAttr: {}
// });

// //=========================================================================================================
// const GridAIO = $('#GridAIO').dxDataGrid({
//     accessKey: undefined,
//     activeStateEnabled: false,
//     allowColumnReordering: true,
//     allowColumnResizing: true,
//     autoNavigateToFocusedRow: true,
//     cacheEnabled: true,
//     cellHintEnabled: true,
//     columnAutoWidth: true,
//     columnChooser: {
//         allowSearch: false,
//         emptyPanelText: "Drag a column here to hide it",
//         enabled: true,
//         height: 260,
//         mode: "select",
//         searchTimeout: 500,
//         sortOrder: undefined,
//         title: "Column Chooser",
//         width: 250
//     },
//     columnFixing: {
//         enabled: true,
//         texts: {
//             fix: "Fix",
//             leftPosition: "To the left",
//             rightPosition: "To the right",
//             unfix: "Unfix"
//         },
//     },
//     columnHidingEnabled: false,
//     columnMinWidth: undefined,
//     columnResizingMode: "nextColumn",
//     columns: [
//         {
//             alignment: undefined,
//             allowEditing: true,
//             allowExporting: true,
//             allowFiltering: true,
//             allowFixing: true,
//             allowGrouping: true,
//             allowHeaderFiltering: true,
//             allowHiding: true,
//             allowReordering: true,
//             allowResizing: true,
//             allowSearch: true,
//             allowSorting: true,
//             autoExpandGroup: true,
//             buttons: [
//                 {
//                     component: null,
//                     cssClass: null,
//                     disabled: false,
//                     hint: null,
//                     icon: null,
//                     name: null,
//                     onClick: null,
//                     render: null,
//                     template: null,
//                     text: null,
//                     visible: true
//                 }
//             ],
//             calculateCellValue: null,
//             calculateDisplayValue: null,
//             calculateFilterExpression: null,
//             calculateGroupValue: null,
//             calculateSortValue: null,
//             caption: undefined,
//             cellComponent: null,
//             cellRender: null,
//             cellTemplate: null,
//             columns: undefined,
//             cssClass: undefined,
//             customizeText: null,
//             dataField: undefined,
//             dataType: undefined,
//             editCellComponent: null,
//             editCellRender: null,
//             editCellTemplate: null,
//             editorOptions: null,
//             encodeHtml: true,
//             falseText: false,
//             filterOperations: undefined,
//             filterType: "include",
//             filterValue: undefined,
//             filterValues: undefined,
//             fixed: false,
//             fixedPosition: undefined,
//             format: "",
//             formItem: null,
//             groupCellComponent: null,
//             groupCellRender: null,
//             groupCellTemplate: null,
//             groupIndex: undefined,
//             headerCellComponent: null,
//             headerCellRender: null,
//             headerCellTemplate: null,
//             headerFilter: {
//                 allowSearch: false,
//                 dataSource: Edit,
//                 groupInterval: undefined,
//                 height: undefined,
//                 searchMode: "contains",
//                 width: undefined
//             },
//             hidingPriority: undefined,
//             isBand: undefined,
//             lookup: {
//                 allowClearing: false,
//                 dataSource: Edit,
//                 displayExpr: undefined,
//                 valueExpr: undefined
//             },
//             minWidth: undefined,
//             name: undefined,
//             ownerBand: undefined,
//             renderAsync: false,
//             selectedFilterOperation: undefined,
//             setCellValue: null,
//             showEditorAlways: false,
//             showInColumnChooser: true,
//             showWhenGrouped: false,
//             sortIndex: undefined,
//             sortingMethod: undefined,
//             sortOrder: undefined,
//             trueText: true,
//             type: null,
//             validationRules: null,
//             visible: true,
//             visibleIndex: undefined,
//             width: undefined
//         }
//     ],
//     columnWidth: undefined,
//     customizeColumns: function (columns) {
//         columns.forEach(function (col) {
//             col.calculateDisplayValue = function (rowData) {
//                 return rowData[col.dataField] == 0 ? "-" : rowData[col.dataField];
//             };
//         });
//     },
//     dataRowComponent: null,
//     dataRowRender: null,
//     dataRowTemplate: null,
//     dataSource: [{}],
//     dateSerializationFormat: null,
//     disabled: false,
//     editing: {
//         allowAdding: false,
//         allowDeleting: false,
//         allowUpdating: false,
//         changes: [
//             {
//                 data: "",
//                 insertAfterKey: null,
//                 insertBeforeKey: null,
//                 key: null,
//                 type: null
//             }
//         ],
//         confirmDelete: true,
//         editColumnName: null,
//         editRowKey: null,
//         form: null,
//         mode: "form",
//         newRowPosition: "viewportTop",
//         popup: null,
//         refreshMode: "full",
//         selectTextOnEditStart: false,
//         startEditAction: "click",
//         texts: {
//             addRow: "Add a row",
//             cancelAllChanges: "Discard changes",
//             cancelRowChanges: "Cancel",
//             confirmDeleteMessage: "Are you sure you want to delete this record?",
//             confirmDeleteTitle: "",
//             deleteRow: "Delete",
//             editRow: "Edit",
//             saveAllChanges: "Save changes",
//             saveRowChanges: "Save",
//             undeleteRow: "Undelete",
//             validationCancelChanges: "Cancel changes"
//         },
//         useIcons: false
//     },
//     elementAttr: {},
//     errorRowEnabled: true,
//     export: {
//         allowExportSelectedData: true,
//         enabled: true,
//         formats: ['xlsx', 'pdf'],
//         texts: {
//             exportAll: "Export all data to {0}",
//             exportSelectedRows: "Export selected rows to {0}",
//             exportTo: "Export"
//         },
//     },
//     filterBuilder: {},
//     filterBuilderPopup: {},
//     filterPanel: {
//         customizeText: null,
//         filterEnabled: true,
//         texts: {
//             clearFilter: "Clear",
//             createFilter: "Create Filter",
//             filterEnabledHint: "Enable the filter"
//         },
//         visible: true
//     },
//     filterRow: {
//         applyFilter: "auto",
//         applyFilterText: "Apply filter",
//         betweenEndText: "End",
//         betweenStartText: "Start",
//         operationDescriptions: {
//             between: "Between",
//             contains: "Contains",
//             endsWith: "Ends with",
//             equal: "Equals",
//             greaterThan: "Greater than",
//             greaterThanOrEqual: "Greater than or equal to",
//             lessThan: "Less than",
//             lessThanOrEqual: "Less than or equal to",
//             notContains: "Does not contain",
//             notEqual: "Does not equal",
//             startsWith: "Starts with"
//         },
//         resetOperationText: "Reset",
//         showAllText: "",
//         showOperationChooser: true,
//         visible: true
//     },
//     filterSyncEnabled: "auto",
//     filterValue: null,
//     focusedColumnIndex: -1,
//     focusedRowEnabled: false,
//     focusedRowIndex: -1,
//     focusedRowKey: undefined,
//     grouping: {
//         allowCollapsing: true,
//         autoExpandAll: true,
//         contextMenuEnabled: false,
//         expandMode: "buttonClick",
//         texts: {},
//     },
//     groupPanel: {
//         allowColumnDragging: true,
//         emptyPanelText: "Drag a column header here to group by that column",
//         visible: true
//     },
//     headerFilter: {
//         allowSearch: false,
//         height: 325,
//         searchTimeout: 500,
//         texts: {
//             cancel: "Cancel",
//             emptyValue: "",
//             ok: "Ok"
//         },
//         visible: true,
//         width: 252
//     },
//     height: undefined,
//     highlightChanges: false,
//     hint: undefined,
//     hoverStateEnabled: true,
//     keyboardNavigation: {
//         editOnKeyPress: false,
//         enabled: true,
//         enterKeyAction: "startEdit",
//         enterKeyDirection: "none"
//     },
//     keyExpr: undefined,
//     loadPanel: {
//         enabled: "auto",
//         height: 90,
//         indicatorSrc: "",
//         shading: false,
//         shadingColor: "",
//         showIndicator: true,
//         showPane: true,
//         text: "Loading...",
//         width: 200
//     },
//     masterDetail: {
//         autoExpandAll: false,
//         component: null,
//         enabled: false,
//         render: null,
//         template: null
//     },
//     noDataText: "No data",
//     onAdaptiveDetailRowPreparing: null,
//     onCellClick: null,
//     onCellDblClick: null,
//     onCellHoverChanged: null,
//     onCellPrepared: null,
//     onContentReady: null,
//     onContextMenuPreparing: null,
//     onDataErrorOccurred: null,
//     onDisposing: null,
//     onEditCanceled: null,
//     onEditCanceling: null,
//     onEditingStart: null,
//     onEditorPrepared: null,
//     onEditorPreparing: null,
//     onExporting(e) {
//         if (e.format === 'xlsx') {
//             const workbook = new ExcelJS.Workbook();
//             const worksheet = workbook.addWorksheet('Report');
//             DevExpress.excelExporter.exportDataGrid({
//                 component: e.component,
//                 worksheet,
//                 autoFilterEnabled: true,
//             }).then(() => {
//                 workbook.xlsx.writeBuffer().then((buffer) => {
//                     saveAs(new Blob([buffer], { type: 'application/octet-stream' }), 'report.xlsx');
//                 });
//             });
//             e.cancel = true;
//         }
//         else if (e.format === 'pdf') {
//             const doc = new jsPDF('l', 'pt');
//             DevExpress.pdfExporter.exportDataGrid({
//                 jsPDFDocument: doc,
//                 component: e.component,
//             }).then(() => {
//                 doc.save('report.pdf');
//             });
//         }
//     },
//     onFocusedCellChanged: null,
//     onFocusedCellChanging: null,
//     onFocusedRowChanged: null,
//     onFocusedRowChanging: null,
//     onInitialized: null,
//     onInitNewRow: null,
//     onKeyDown: null,
//     onOptionChanged: null,
//     onRowClick: null,
//     onRowCollapsed: null,
//     onRowCollapsing: null,
//     onRowDblClick: null,
//     onRowExpanded: null,
//     onRowExpanding: null,
//     onRowInserted: null,
//     onRowInserting: null,
//     onRowPrepared: null,
//     onRowRemoved: null,
//     onRowRemoving: null,
//     onRowUpdated: null,
//     onRowUpdating: null,
//     onRowValidating: null,
//     onSaved: null,
//     onSaving: null,
//     onSelectionChanged: null,
//     onToolbarPreparing: null,
//     pager: {
//         allowedPageSizes: [5, 10, 15, 20, 25, 50, 100, 'all'],
//         displayMode: "compact",
//         infoText: "Page {0} of {1} ({2} items)",
//         label: "Page Navigation",
//         showInfo: true,
//         showNavigationButtons: true,
//         showPageSizeSelector: true,
//         visible: "true"
//     },
//     paging: {
//         enabled: true,
//         pageIndex: 0,
//         pageSize: 20
//     },
//     remoteOperations: {
//         filtering: false,
//         grouping: false,
//         groupPaging: false,
//         paging: false,
//         sorting: false,
//         summary: false
//     },
//     renderAsync: false,
//     repaintChangesOnly: false,
//     rowAlternationEnabled: false,
//     rowDragging: {
//         allowDropInsideItem: false,
//         allowReordering: false,
//         autoScroll: true,
//         boundary: undefined,
//         container: undefined,
//         cursorOffset: {
//             x: 0,
//             y: 0
//         },
//         data: Edit,
//         dragComponent: null,
//         dragDirection: "both",
//         dragRender: null,
//         dragTemplate: undefined,
//         dropFeedbackMode: "indicate",
//         group: undefined,
//         handle: "",
//         onAdd: null,
//         onDragChange: null,
//         onDragEnd: null,
//         onDragMove: null,
//         onDragStart: null,
//         onRemove: null,
//         onReorder: null,
//         scrollSensitivity: 60,
//         scrollSpeed: 30,
//         showDragIcons: true
//     },
//     rtlEnabled: false,
//     scrolling: {
//         columnRenderingMode: "standard",
//         mode: "standard",
//         preloadEnabled: false,
//         renderAsync: undefined,
//         rowRenderingMode: "standard",
//         scrollByContent: true,
//         scrollByThumb: false,
//         showScrollbar: "onHover",
//         useNative: "auto"
//     },
//     searchPanel: {
//         highlightCaseSensitive: false,
//         highlightSearchText: true,
//         placeholder: "Search...",
//         searchVisibleColumnsOnly: false,
//         text: "",
//         visible: true,
//         width: 160
//     },
//     selectedRowKeys: null,
//     selection: {
//         allowSelectAll: true,
//         deferred: false,
//         mode: "muliple",
//         selectAllMode: "allPages",
//         showCheckBoxesMode: "Click"
//     },
//     selectionFilter: [],
//     showBorders: true,
//     showColumnHeaders: true,
//     showColumnLines: true,
//     showRowLines: true,
//     sortByGroupSummaryInfo: [
//         {
//             groupColumn: undefined,
//             sortOrder: undefined,
//             summaryItem: 'count'
//         }
//     ],
//     sorting: {
//         ascendingText: "Sort Ascending",
//         clearText: "Clear Sorting",
//         descendingText: "Sort Descending",
//         mode: "multiple",
//         showSortIndexes: true
//     },
//     stateStoring: {
//         customLoad: null,
//         customSave: null,
//         enabled: false,
//         savingTimeout: 2000,
//         storageKey: null,
//         type: "localStorage"
//     },
//     summary: {
//         calculateCustomSummary: null,
//         groupItems: [
//             {
//                 alignByColumn: false,
//                 column: undefined,
//                 customizeText: null,
//                 displayFormat: undefined,
//                 name: undefined,
//                 showInColumn: undefined,
//                 showInGroupFooter: false,
//                 skipEmptyValues: null,
//                 summaryType: undefined,
//                 valueFormat: undefined
//             }
//         ],
//         recalculateWhileEditing: false,
//         skipEmptyValues: true,
//         texts: {
//             avg: "Avg={0}",
//             avgOtherColumn: "Avg of {1} is {0}",
//             count: "Count={0}",
//             max: "Max={0}",
//             maxOtherColumn: "Max of {1} is {0}",
//             min: "Min={0}",
//             minOtherColumn: "Min of {1} is {0}",
//             sum: "Sum={0}",
//             sumOtherColumn: "Sum of {1} is {0}"
//         },
//         totalItems: [
//             {
//                 alignment: undefined,
//                 column: undefined,
//                 cssClass: undefined,
//                 customizeText: null,
//                 displayFormat: undefined,
//                 name: undefined,
//                 showInColumn: undefined,
//                 skipEmptyValues: null,
//                 summaryType: undefined,
//                 valueFormat: undefined
//             }
//         ],
//     },
//     syncLookupFilterValues: true,
//     tabIndex: 0,
//     toolbar: {
//         disabled: false,
//         items: Edit,
//         visible: undefined
//     },
//     twoWayBindingEnabled: true,
//     visible: true,
//     width: undefined,
//     wordWrapEnabled: false
// });

// //========================================================================================================
// const _userauth = $('#userauth').dxTextBox({
//     accessKey: undefined,
//     activeStateEnabled: false,
//     buttons: [
//       {
//         location: "after",
//         name: "passwordBtn",
//         options: {
//           icon: 'lock',
//           type: 'default',
//           onClick: function (e) {
//             var button = e.component;
//             button.option('icon', button.option('icon') === 'lock' ? 'unlock' : 'lock');
//             _userauth.option('mode', _userauth.option('mode') === 'text' ? 'password' : 'text');
//           },

//         }
//       },
//       {
//         name: 'login',
//         location: 'after',
//         options: {
//           icon: 'arrowright',
//           text: 'Next',
//           type: 'default',
//           useSubmitBehavior: true,
//           /*
//           onClick: function () {
//             $("#boxOptions").remove();
//             $("body").prepend("<div id='gridContainer'></div>");
            
//             DevExpress.ui.notify(
//               {
//                 message: _userauth.option('value'),
//                 maxWidth: 300,
//                 displayTime: 3000,
//                 animation: {
//                   show: { type: 'fade', duration: 400, from: 0, to: 1 },
//                   hide: { type: 'fade', duration: 40, to: 0 },
//                 },
//               },
//               {position: "top right", direction: "down-push"}
//             );
//           },
//           */
//         }
//       }
//     ],
//     disabled: false,
//     elementAttr: {},
//     focusStateEnabled: true,
//     height: undefined,
//     hint: undefined,
//     hoverStateEnabled: true,
//     inputAttr: {},
//     isValid: true,
//     label: "User Authentication",
//     labelMode: "floating",
//     mask: "",
//     maskChar: "_",
//     maskInvalidMessage: "Value is invalid",
//     maskRules: {},
//     maxLength: null,
//     mode: "password",
//     name: "",
//     onChange: null,
//     onContentReady: null,
//     onCopy: null,
//     onCut: null,
//     onDisposing: null,
//     onEnterKey: null,
//     onFocusIn: null,
//     onFocusOut: null,
//     onInitialized: null,
//     onInput: null,
//     onKeyDown: null,
//     onKeyUp: null,
//     onOptionChanged: null,
//     onPaste: null,
//     onValueChanged: null,
//     placeholder: "",
//     readOnly: false,
//     rtlEnabled: false,
//     showClearButton: true,
//     showMaskMode: "always",
//     spellcheck: false,
//     stylingMode: "outlined",
//     tabIndex: 0,
//     useMaskedValue: true,
//     validationError: null,
//     validationErrors: null,
//     validationMessageMode: "auto",
//     validationMessagePosition: "bottom",
//     validationStatus: "valid",
//     value: null,
//     valueChangeEvent: "change",
//     visible: true,
//     width: 300
//   }).dxTextBox('instance');

//   //========================================================================================================
//   $('#MasterGridContainer').dxDataGrid({
//     keyExpr: 'A01',
//     columns: _TbDashboard,
//     columnHidingEnabled: false,
//     allowColumnReordering: true,
//     allowColumnResizing: true,
//     columnResizingMode: 'widget',
//     columnAutoWidth: true,
//     columnChooser: {
//       allowSearch: false,
//       //emptyPanelText: "Drag a column here to hide it",
//       enabled: true,
//       //height:260,
//       mode: "select",
//       searchTimeout: null,
//       sortOrder: undefined,
//       title: "Column Chooser",
//       //width:250,
//     },
//     columnFixing: {
//       enabled: true,
//     },
//     customizeColumns: function (columns) {
//       columns.forEach(function (col) {
//         // col.calculateDisplayValue = function (rowData) {
//         //   return rowData[col.dataField] == 0 ? "-" : rowData[col.dataField];
//         // };
//         col.cellTemplate = (container, options) => {
//           return $('<div />').dxButton({
//             stylingMode: 'text',
//             activeStateEnabled: true,
//             hoverStateEnabled: false,
//             focusStateEnabled: false,
//             disabled: options.value == 0 ? true : false,
//             text: options.value == 0 ? "-" : options.value,
//             type: options.value == 0 ? 'normal' : 'default',
//             onClick(e) {
//               DevExpress.ui.notify(col.dataField + ' : ' + options.value);
//             }
//           });
//         };
//       });
//     },
//     dataSource: 'data/Dashboard.json',
//     editing: {
//       mode: 'form',
//       allowUpdating: false,
//       allowAdding: false,
//       allowDeleting: false,
//       confirmDelete: true,
//       useIcons: true,
//     },
//     export: {
//       enabled: true,
//       formats: ['xlsx', 'pdf'],
//       allowExportSelectedData: true,
//     },
//     filterRow: { visible: false },
//     filterPanel: { visible: false },
//     focusedRowIndex: null,
//     focusedRowEnabled: false,
//     focusedRowKey: null,
//     groupPanel: { visible: false },
//     grouping: {
//       autoExpandAll: true,
//     },
//     hoverStateEnabled: false,
//     headerFilter: { visible: false },

//     onExporting(e) {
//       if (e.format === 'xlsx') {
//         const workbook = new ExcelJS.Workbook();
//         const worksheet = workbook.addWorksheet('Report');
//         DevExpress.excelExporter.exportDataGrid({
//           component: e.component,
//           worksheet,
//           autoFilterEnabled: true,
//         }).then(() => {
//           workbook.xlsx.writeBuffer().then((buffer) => {
//             saveAs(new Blob([buffer], { type: 'application/octet-stream' }), 'report.xlsx');
//           });
//         });
//         e.cancel = true;
//       }
//       else if (e.format === 'pdf') {
//         const doc = new jsPDF('l', 'pt');
//         DevExpress.pdfExporter.exportDataGrid({
//           jsPDFDocument: doc,
//           component: e.component,
//         }).then(() => {
//           doc.save('report.pdf');
//         });
//       }
//     },
//     // onCellClick: function (e) {
//     //   e.value == 0 ? "" : DevExpress.ui.notify(e.value);
//     // },
//     // onRowExpanding: function(e){
//     //   e.component.collapseAll(-1);
//     // },

//     paging: {
//       pageSize: 20,
//     },
//     pager: {
//       allowedPageSizes: [5, 10, 15, 20, 25, 50, 100, 'all'],
//       displayMode: "compact",
//       showInfo: true,
//       showNavigationButtons: true,
//       showPageSizeSelector: true,
//       visible: true,
//     },

//     remoteOperations: false,
//     rowAlternationEnabled: false,

//     sorting: {
//       mode: 'multiple',
//     },
//     searchPanel: {
//       visible: false,
//       highlightCaseSensitive: false,
//     },
//     selection: {
//       allowSelectAll: false,
//       deferred: false,
//       mode: "multiple",
//       selectAllMode: "allPages",
//       showCheckBoxesMode: "click"
//     },
//     showBorders: true,
//     showColumnHeaders: true,
//     showColumnLines: true,
//     showRowLines: true,
//     sortByGroupSummaryInfo: [{ summaryItem: 'count' }],
//     summary: _TBSummaryDashboard,

//     toolbar: undefined,
//     wordWrapEnabled: false,
//     // masterDetail: {
//     //   enabled: true,
//     //   template(container, options) {
//     //     $("<div>").dxDataGrid({
//     //       dataSource: 'data/info_pd.json',
//     //       // dataSource: $.getJSON("data/info_pd.json", function (jsondata) {
//     //       //   jsondata = jsondata.filter(function (obj) {
//     //       //     return obj.A01.includes(options.data.A01);
//     //       //   });
//     //       // }),
//     //       columns: _TbInfoPd,
//     //       filterValue: ["A01", "contains", options.data.A01],
//     //       showBorders: true,
//     //       showColumnHeaders: true,
//     //       showColumnLines: true,
//     //       showRowLines: true,
//     //       columnHidingEnabled: false,
//     //       allowColumnReordering: true,
//     //       allowColumnResizing: true,
//     //       columnResizingMode: 'widget',
//     //       columnAutoWidth: true,
//     //       wordWrapEnabled: false,
//     //       columnChooser: {
//     //         allowSearch: false,
//     //         //emptyPanelText:"Drag a column here to hide it",
//     //         enabled: true,
//     //         //height:260,
//     //         mode: "select",
//     //         //searchTimeout:500,
//     //         sortOrder: undefined,
//     //         title: "Column Chooser",
//     //         //width:250,
//     //       },
//     //       columnFixing: {
//     //         enabled: true,
//     //       },
//     //       hoverStateEnabled: false,
//     //       paging: {
//     //         pageSize: 5,
//     //       },
//     //       pager: {
//     //         allowedPageSizes: [5, 10, 15, 20, 25, 50, 100, 'all'],
//     //         displayMode: "compact",
//     //         showInfo: true,
//     //         showNavigationButtons: true,
//     //         showPageSizeSelector: true,
//     //         visible: true,
//     //       },
//     //       editing: {
//     //         mode: 'row',
//     //         allowUpdating: false,
//     //         allowAdding: false,
//     //         allowDeleting: false,
//     //         confirmDelete: true,
//     //         useIcons: true,
//     //       },
//     //       export: {
//     //         enabled: true,
//     //         formats: ['xlsx', 'pdf'],
//     //         allowExportSelectedData: true,
//     //       },
//     //       onExporting(e) {
//     //         if (e.format === 'xlsx') {
//     //           const workbook = new ExcelJS.Workbook();
//     //           const worksheet = workbook.addWorksheet('Report');
//     //           DevExpress.excelExporter.exportDataGrid({
//     //             component: e.component,
//     //             worksheet,
//     //             autoFilterEnabled: true,
//     //           }).then(() => {
//     //             workbook.xlsx.writeBuffer().then((buffer) => {
//     //               saveAs(new Blob([buffer], { type: 'application/octet-stream' }), 'report.xlsx');
//     //             });
//     //           });
//     //           e.cancel = true;
//     //         }
//     //         else if (e.format === 'pdf') {
//     //           const doc = new jsPDF('l', 'pt');
//     //           DevExpress.pdfExporter.exportDataGrid({
//     //             jsPDFDocument: doc,
//     //             component: e.component,
//     //           }).then(() => {
//     //             doc.save('report.pdf');
//     //           });
//     //         }
//     //       },

//     //       remoteOperations: false,
//     //       sorting: {
//     //         mode: 'multiple',
//     //       },
//     //       searchPanel: {
//     //         visible: true,
//     //         highlightCaseSensitive: false,
//     //       },
//     //       selection: {
//     //         allowSelectAll: true,
//     //         deferred: false,
//     //         mode: "multiple",
//     //         selectAllMode: "allPages",
//     //         showCheckBoxesMode: "click"
//     //       },
//     //       filterRow: { visible: true },
//     //       filterPanel: { visible: false },
//     //       headerFilter: { visible: false },
//     //       groupPanel: { visible: false },
//     //       grouping: {
//     //         autoExpandAll: true,
//     //       },
//     //       wordWrapEnabled: false,
//     //       //sortByGroupSummaryInfo: [{ summaryItem: 'count' }],
//     //       //summary: _TBSummaryDashboard,
//     //       //toolbar: undefined,
//     //       rowAlternationEnabled: false,

//     //     }).appendTo(container);
//     //   }
//     // },
//   //});.dxDataGrid('instance');

// //===========================================================================================
// /*
// masterDetail: {
//       enabled: true,
//       template(container, options) {
//         $("<div>").dxDataGrid({
//           dataSource: 'data/info_pd.json',
//           // dataSource: $.getJSON("data/info_pd.json", function (jsondata) {
//           //   jsondata = jsondata.filter(function (obj) {
//           //     return obj.A01.includes(options.data.A01);
//           //   });
//           // }),
//           columns: _TbInfoPd,
//           filterValue: ["A01", "contains", options.data.A01],
//           showBorders: true,
//           showColumnHeaders: true,
//           showColumnLines: true,
//           showRowLines: true,
//           columnHidingEnabled: false,
//           allowColumnReordering: true,
//           allowColumnResizing: true,
//           columnResizingMode: 'widget',
//           columnAutoWidth: true,
//           wordWrapEnabled: false,
//           columnChooser: {
//             allowSearch: false,
//             //emptyPanelText:"Drag a column here to hide it",
//             enabled: true,
//             //height:260,
//             mode: "select",
//             //searchTimeout:500,
//             sortOrder: undefined,
//             title: "Column Chooser",
//             //width:250,
//           },
//           columnFixing: {
//             enabled: true,
//           },
//           hoverStateEnabled: true,
//           paging: {
//             pageSize: 5,
//           },
//           pager: {
//             allowedPageSizes: [5, 10, 15, 20, 25, 50, 100, 'all'],
//             displayMode: "compact",
//             showInfo: true,
//             showNavigationButtons: true,
//             showPageSizeSelector: true,
//             visible: true,
//           },
//           editing: {
//             mode: 'row',
//             allowUpdating: false,
//             allowAdding: false,
//             allowDeleting: false,
//             confirmDelete: true,
//             useIcons: true,
//           },
//           export: {
//             enabled: true,
//             formats: ['xlsx', 'pdf'],
//             allowExportSelectedData: true,
//           },
//           onExporting(e) {
//             if (e.format === 'xlsx') {
//               const workbook = new ExcelJS.Workbook();
//               const worksheet = workbook.addWorksheet('Report');
//               DevExpress.excelExporter.exportDataGrid({
//                 component: e.component,
//                 worksheet,
//                 autoFilterEnabled: true,
//               }).then(() => {
//                 workbook.xlsx.writeBuffer().then((buffer) => {
//                   saveAs(new Blob([buffer], { type: 'application/octet-stream' }), 'report.xlsx');
//                 });
//               });
//               e.cancel = true;
//             }
//             else if (e.format === 'pdf') {
//               const doc = new jsPDF('l', 'pt');
//               DevExpress.pdfExporter.exportDataGrid({
//                 jsPDFDocument: doc,
//                 component: e.component,
//               }).then(() => {
//                 doc.save('report.pdf');
//               });
//             }
//           },

//           remoteOperations: false,
//           sorting: {
//             mode: 'multiple',
//           },
//           searchPanel: {
//             visible: true,
//             highlightCaseSensitive: false,
//           },
//           selection: {
//             allowSelectAll: true,
//             deferred: false,
//             mode: "multiple",
//             selectAllMode: "allPages",
//             showCheckBoxesMode: "click"
//           },
//           filterRow: { visible: true },
//           filterPanel: { visible: false },
//           headerFilter: { visible: false },
//           groupPanel: { visible: false },
//           grouping: {
//             autoExpandAll: true,
//           },
//           wordWrapEnabled: false,
//           //sortByGroupSummaryInfo: [{ summaryItem: 'count' }],
//           //summary: _TBSummaryDashboard,
//           //toolbar: undefined,
//           rowAlternationEnabled: false,
          
//         }).appendTo(container);
//       }
//     }


// //============================================================================================
// $(function() {
// var customDataSource = new DevExpress.data.CustomStore({
//   key: "ID",
//   load: function() {
//     var d = $.Deferred();
//     return $.getJSON(
//       "https://raw.githubusercontent.com/20536207/Informasi-Peserta-Didik/main/data/info_pd.json", 
//       { 
//         "param1": "value1",
//         "param2": "value2"
//       }
//     )
//     .done(function(result) {
//         // You can process the response here
//         d.resolve(result);
//     })
//     .fail(function() {
//       throw "Data loading error";
//     });
// },
//   insert: function(values) {
//       var deferred = $.Deferred();
//       $.ajax({
//           url: "data/info_pd.json",
//           method: "POST",
//           data: JSON.stringify(values)
//       })
//       .done(deferred.resolve)
//       .fail(function(e){
//           deferred.reject("Insertion failed");
//       });
//       return deferred.promise();
//   },
//   remove: function(key) {
//       var deferred = $.Deferred();
//       $.ajax({
//           url: "data/info_pd.json" + encodeURIComponent(key),
//           method: "DELETE"
//       })
//       .done(deferred.resolve)
//       .fail(function(e){
//           deferred.reject("Deletion failed");
//       });
//       return deferred.promise();
//   },
//   update: function(key, values) {
//       var deferred = $.Deferred();
//       $.ajax({
//           url: "data/info_pd.json" + encodeURIComponent(key),
//           method: "PUT",
//           data: JSON.stringify(values)
//       })
//       .done(deferred.resolve)
//       .fail(function(e){
//           deferred.reject("Update failed");
//       });
//       return deferred.promise();
//   }
// }
// });



// //==========================================================================
// ToolbarInfoPD = [
//         {
//             location: 'before',
//             widget: 'dxTextBox',
//             options: {
//                 accessKey: undefined,
//                 activeStateEnabled: true,
//                 component: null,
//                 disabled: false,
//                 elementAttr: {},
//                 focusStateEnabled: true,
//                 height: undefined,
//                 hint: undefined,
//                 hoverStateEnabled: true,
//                 icon: "unlock",
//                 onClick(e){
//                     const _secure = e.component.option('icon') === 'lock';
//                     //dataGrid.option('grouping.autoExpandAll', _secure);
//                     e.component.option('text', _secure ? 'unlock' : 'lock');
//                     e.component.option('icon', _secure ? 'unlock' : 'lock');
//                     DevExpress.ui.notify('button has been clicked!');
//                 },
//                 onContentReady: null,
//                 onDisposing: null,
//                 onInitialized: null,
//                 onOptionChanged: null,
//                 render: null,
//                 rtlEnabled: false,
//                 stylingMode: "contained",
//                 tabIndex: 1,
//                 template: "",
//                 text: "unlocked",
//                 type: "default",
//                 useSubmitBehavior: true,
//                 validationGroup: undefined,
//                 visible: true,
//                 width: undefined
//             },
//         },
//     ]
// */
