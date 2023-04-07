$('#GridAIO').dxDataGrid({
    accessKey: undefined,
    activeStateEnabled: false,
    allowColumnReordering: true,
    allowColumnResizing: true,
    autoNavigateToFocusedRow: true,
    cacheEnabled: true,
    cellHintEnabled: true,
    columnAutoWidth: true,
    columnChooser: {
        allowSearch: false,
        emptyPanelText: "Drag a column here to hide it",
        enabled: true,
        height: 260,
        mode: "select",
        searchTimeout: 500,
        sortOrder: undefined,
        title: "Column Chooser",
        width: 250
    },
    columnFixing: {
        enabled: true,
        texts: {
            fix: "Fix",
            leftPosition: "To the left",
            rightPosition: "To the right",
            unfix: "Unfix"
        },
    },
    columnHidingEnabled: false,
    columnMinWidth: undefined,
    columnResizingMode: "nextColumn",
    columns: [
        {
            alignment: undefined,
            allowEditing: true,
            allowExporting: true,
            allowFiltering: true,
            allowFixing: true,
            allowGrouping: true,
            allowHeaderFiltering: true,
            allowHiding: true,
            allowReordering: true,
            allowResizing: true,
            allowSearch: true,
            allowSorting: true,
            autoExpandGroup: true,
            buttons: [
                {
                    component: null,
                    cssClass: null,
                    disabled: false,
                    hint: null,
                    icon: null,
                    name: null,
                    onClick: null,
                    render: null,
                    template: null,
                    text: null,
                    visible: true
                }
            ],
            calculateCellValue: null,
            calculateDisplayValue: null,
            calculateFilterExpression: null,
            calculateGroupValue: null,
            calculateSortValue: null,
            caption: undefined,
            cellComponent: null,
            cellRender: null,
            cellTemplate: null,
            columns: undefined,
            cssClass: undefined,
            customizeText: null,
            dataField: undefined,
            dataType: undefined,
            editCellComponent: null,
            editCellRender: null,
            editCellTemplate: null,
            editorOptions: null,
            encodeHtml: true,
            falseText: false,
            filterOperations: undefined,
            filterType: "include",
            filterValue: undefined,
            filterValues: undefined,
            fixed: false,
            fixedPosition: undefined,
            format: "",
            formItem: null,
            groupCellComponent: null,
            groupCellRender: null,
            groupCellTemplate: null,
            groupIndex: undefined,
            headerCellComponent: null,
            headerCellRender: null,
            headerCellTemplate: null,
            headerFilter: {
                allowSearch: false,
                dataSource: Edit,
                groupInterval: undefined,
                height: undefined,
                searchMode: "contains",
                width: undefined
            },
            hidingPriority: undefined,
            isBand: undefined,
            lookup: {
                allowClearing: false,
                dataSource: Edit,
                displayExpr: undefined,
                valueExpr: undefined
            },
            minWidth: undefined,
            name: undefined,
            ownerBand: undefined,
            renderAsync: false,
            selectedFilterOperation: undefined,
            setCellValue: null,
            showEditorAlways: false,
            showInColumnChooser: true,
            showWhenGrouped: false,
            sortIndex: undefined,
            sortingMethod: undefined,
            sortOrder: undefined,
            trueText: true,
            type: null,
            validationRules: null,
            visible: true,
            visibleIndex: undefined,
            width: undefined
        }
    ],
    columnWidth: undefined,
    customizeColumns: function (columns) {
      columns.forEach(function (col) {
        col.calculateDisplayValue = function (rowData) {
          return rowData[col.dataField] == 0 ? "-" : rowData[col.dataField];
        };
      });
    },
    dataRowComponent: null,
    dataRowRender: null,
    dataRowTemplate: null,
    dataSource: [{}],
    dateSerializationFormat: null,
    disabled: false,
    editing: {
        allowAdding: false,
        allowDeleting: false,
        allowUpdating: false,
        changes: [
            {
                data: "",
                insertAfterKey: null,
                insertBeforeKey: null,
                key: null,
                type: null
            }
        ],
        confirmDelete: true,
        editColumnName: null,
        editRowKey: null,
        form: null,
        mode: "form",
        newRowPosition: "viewportTop",
        popup: null,
        refreshMode: "full",
        selectTextOnEditStart: false,
        startEditAction: "click",
        texts: {
            addRow: "Add a row",
            cancelAllChanges: "Discard changes",
            cancelRowChanges: "Cancel",
            confirmDeleteMessage: "Are you sure you want to delete this record?",
            confirmDeleteTitle: "",
            deleteRow: "Delete",
            editRow: "Edit",
            saveAllChanges: "Save changes",
            saveRowChanges: "Save",
            undeleteRow: "Undelete",
            validationCancelChanges: "Cancel changes"
        },
        useIcons: false
    },
    elementAttr: {},
    errorRowEnabled: true,
    export: {
        allowExportSelectedData: true,
        enabled: true,
        formats: ['xlsx', 'pdf'],
        texts: {
            exportAll: "Export all data to {0}",
            exportSelectedRows: "Export selected rows to {0}",
            exportTo: "Export"
        },
    },
    filterBuilder: {},
    filterBuilderPopup: {},
    filterPanel: {
        customizeText: null,
        filterEnabled: true,
        texts: {
            clearFilter: "Clear",
            createFilter: "Create Filter",
            filterEnabledHint: "Enable the filter"
        },
        visible: true
    },
    filterRow: {
        applyFilter: "auto",
        applyFilterText: "Apply filter",
        betweenEndText: "End",
        betweenStartText: "Start",
        operationDescriptions: {
            between: "Between",
            contains: "Contains",
            endsWith: "Ends with",
            equal: "Equals",
            greaterThan: "Greater than",
            greaterThanOrEqual: "Greater than or equal to",
            lessThan: "Less than",
            lessThanOrEqual: "Less than or equal to",
            notContains: "Does not contain",
            notEqual: "Does not equal",
            startsWith: "Starts with"
        },
        resetOperationText: "Reset",
        showAllText: "",
        showOperationChooser: true,
        visible: true
    },
    filterSyncEnabled: "auto",
    filterValue: null,
    focusedColumnIndex: -1,
    focusedRowEnabled: false,
    focusedRowIndex: -1,
    focusedRowKey: undefined,
    grouping: {
        allowCollapsing: true,
        autoExpandAll: true,
        contextMenuEnabled: false,
        expandMode: "buttonClick",
        texts: {},
    },
    groupPanel: {
        allowColumnDragging: true,
        emptyPanelText: "Drag a column header here to group by that column",
        visible: true
    },
    headerFilter: {
        allowSearch: false,
        height: 325,
        searchTimeout: 500,
        texts: {
            cancel: "Cancel",
            emptyValue: "",
            ok: "Ok"
        },
        visible: true,
        width: 252
    },
    height: undefined,
    highlightChanges: false,
    hint: undefined,
    hoverStateEnabled: true,
    keyboardNavigation: {
        editOnKeyPress: false,
        enabled: true,
        enterKeyAction: "startEdit",
        enterKeyDirection: "none"
    },
    keyExpr: undefined,
    loadPanel: {
        enabled: "auto",
        height: 90,
        indicatorSrc: "",
        shading: false,
        shadingColor: "",
        showIndicator: true,
        showPane: true,
        text: "Loading...",
        width: 200
    },
    masterDetail: {
        autoExpandAll: false,
        component: null,
        enabled: false,
        render: null,
        template: null
    },
    noDataText: "No data",
    onAdaptiveDetailRowPreparing: null,
    onCellClick: null,
    onCellDblClick: null,
    onCellHoverChanged: null,
    onCellPrepared: null,
    onContentReady: null,
    onContextMenuPreparing: null,
    onDataErrorOccurred: null,
    onDisposing: null,
    onEditCanceled: null,
    onEditCanceling: null,
    onEditingStart: null,
    onEditorPrepared: null,
    onEditorPreparing: null,
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
    onFocusedCellChanged: null,
    onFocusedCellChanging: null,
    onFocusedRowChanged: null,
    onFocusedRowChanging: null,
    onInitialized: null,
    onInitNewRow: null,
    onKeyDown: null,
    onOptionChanged: null,
    onRowClick: null,
    onRowCollapsed: null,
    onRowCollapsing: null,
    onRowDblClick: null,
    onRowExpanded: null,
    onRowExpanding: null,
    onRowInserted: null,
    onRowInserting: null,
    onRowPrepared: null,
    onRowRemoved: null,
    onRowRemoving: null,
    onRowUpdated: null,
    onRowUpdating: null,
    onRowValidating: null,
    onSaved: null,
    onSaving: null,
    onSelectionChanged: null,
    onToolbarPreparing: null,
    pager: {
        allowedPageSizes: [5, 10, 15, 20, 25, 50, 100, 'all'],
        displayMode: "compact",
        infoText: "Page {0} of {1} ({2} items)",
        label: "Page Navigation",
        showInfo: true,
        showNavigationButtons: true,
        showPageSizeSelector: true,
        visible: "true"
    },
    paging: {
        enabled: true,
        pageIndex: 0,
        pageSize: 20
    },
    remoteOperations: {
        filtering: false,
        grouping: false,
        groupPaging: false,
        paging: false,
        sorting: false,
        summary: false
    },
    renderAsync: false,
    repaintChangesOnly: false,
    rowAlternationEnabled: false,
    rowDragging: {
        allowDropInsideItem: false,
        allowReordering: false,
        autoScroll: true,
        boundary: undefined,
        container: undefined,
        cursorOffset: {
            x: 0,
            y: 0
        },
        data: Edit,
        dragComponent: null,
        dragDirection: "both",
        dragRender: null,
        dragTemplate: undefined,
        dropFeedbackMode: "indicate",
        group: undefined,
        handle: "",
        onAdd: null,
        onDragChange: null,
        onDragEnd: null,
        onDragMove: null,
        onDragStart: null,
        onRemove: null,
        onReorder: null,
        scrollSensitivity: 60,
        scrollSpeed: 30,
        showDragIcons: true
    },
    rtlEnabled: false,
    scrolling: {
        columnRenderingMode: "standard",
        mode: "standard",
        preloadEnabled: false,
        renderAsync: undefined,
        rowRenderingMode: "standard",
        scrollByContent: true,
        scrollByThumb: false,
        showScrollbar: "onHover",
        useNative: "auto"
    },
    searchPanel: {
        highlightCaseSensitive: false,
        highlightSearchText: true,
        placeholder: "Search...",
        searchVisibleColumnsOnly: false,
        text: "",
        visible: true,
        width: 160
    },
    selectedRowKeys: null,
    selection: {
        allowSelectAll: true,
        deferred: false,
        mode: "muliple",
        selectAllMode: "allPages",
        showCheckBoxesMode: "Click"
    },
    selectionFilter: [],
    showBorders: true,
    showColumnHeaders: true,
    showColumnLines: true,
    showRowLines: true,
    sortByGroupSummaryInfo: [
        {
            groupColumn: undefined,
            sortOrder: undefined,
            summaryItem: 'count'
        }
    ],
    sorting: {
        ascendingText: "Sort Ascending",
        clearText: "Clear Sorting",
        descendingText: "Sort Descending",
        mode: "multiple",
        showSortIndexes: true
    },
    stateStoring: {
        customLoad: null,
        customSave: null,
        enabled: false,
        savingTimeout: 2000,
        storageKey: null,
        type: "localStorage"
    },
    summary: {
        calculateCustomSummary: null,
        groupItems: [
            {
                alignByColumn: false,
                column: undefined,
                customizeText: null,
                displayFormat: undefined,
                name: undefined,
                showInColumn: undefined,
                showInGroupFooter: false,
                skipEmptyValues: null,
                summaryType: undefined,
                valueFormat: undefined
            }
        ],
        recalculateWhileEditing: false,
        skipEmptyValues: true,
        texts: {
            avg: "Avg={0}",
            avgOtherColumn: "Avg of {1} is {0}",
            count: "Count={0}",
            max: "Max={0}",
            maxOtherColumn: "Max of {1} is {0}",
            min: "Min={0}",
            minOtherColumn: "Min of {1} is {0}",
            sum: "Sum={0}",
            sumOtherColumn: "Sum of {1} is {0}"
        },
        totalItems: [
            {
                alignment: undefined,
                column: undefined,
                cssClass: undefined,
                customizeText: null,
                displayFormat: undefined,
                name: undefined,
                showInColumn: undefined,
                skipEmptyValues: null,
                summaryType: undefined,
                valueFormat: undefined
            }
        ],
    },
    syncLookupFilterValues: true,
    tabIndex: 0,
    toolbar: {
        disabled: false,
        items: Edit,
        visible: undefined
    },
    twoWayBindingEnabled: true,
    visible: true,
    width: undefined,
    wordWrapEnabled: false
});