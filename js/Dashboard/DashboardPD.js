$(() => {

    $('#PesertaDidikPivotGrid').dxPivotGrid({
        allowExpandAll: false,
        allowFiltering: false,
        allowSorting: false,
        allowSortingBySummary: false,
        dataFieldArea: "column", //column | row
        dataSource: Edit,
        disabled: false,
        elementAttr: {},
        encodeHtml: true,
        export: {
            enabled: false
        },
        fieldChooser: {
            allowSearch: false,
            applyChangesMode: "instantly", //instantly | onDemand
            enabled: true,
            height: 600,
            layout: "0", // 0 | 1 | 2 // 

                        // "0"     Col1                    Col2
                        // Row1:   A — All Fields          R — Row Fields
                        // Row2:                           C — Column Fields
                        // Row3:   F — Filter Fields       D — Data Fields

                        // "1"     Col1                    Col2
                        // Row1:   A — All Fields          F — Filter Fields
                        // Row2:                           R — Row Fields
                        // Row3:                           C — Column Fields
                        // Row4:                           D — Data Fields
                        
                        // "2"     Col1                    Col2
                        // Row1:   A — All Fields
                        // Row2:   F — Filter Fields       C — Column Fields
                        // Row3:   R — Row Fields          D — Data Fields

            searchTimeout: 500,
            texts: {
                allFields: "All Fields",
                columnFields: "Column Fields",
                dataFields: "Data Fields",
                filterFields: "Filter Fields",
                rowFields: "Row Fields"
            },
            title: "Field Chooser",
            width: 400
        },
        fieldPanel: {
            allowFieldDragging: true,
            showColumnFields: true,
            showDataFields: true,
            showFilterFields: true,
            showRowFields: true,
            texts: {
                columnFieldArea: "Drop Column Fields Here",
                dataFieldArea: "Drop Data Fields Here",
                filterFieldArea: "Drop Filter Fields Here",
                rowFieldArea: "Drop Row Fields Here"
            },
            visible: false
        },
        headerFilter: {
            allowSelectAll: true,
            height: 325,
            search: {
                editorOptions: {},
                enabled: false,
                mode: "contains", // contains | startwith | equals
                timeout: 500
            },
            showRelevantValues: false,
            texts: {
                cancel: "Cancel",
                emptyValue: "",
                ok: "Ok"
            },
            width: 252
        },
        height: undefined,
        hideEmptySummaryCells: true,
        hint: undefined,
        loadPanel: {
            enabled: true,
            height: 70,
            indicatorSrc: "",
            shading: false,
            shadingColor: "",
            showIndicator: true,
            showPane: true,
            text: "Loading...",
            width: 200
        },
        onCellClick: null,
        onCellPrepared: null,
        onContentReady: null,
        onContextMenuPreparing: null,
        onDisposing: null,
        onExporting: null,
        onInitialized: null,
        onOptionChanged: null,
        rowHeaderLayout: "standard", // standart | tree
        rtlEnabled: false,
        scrolling: {
            mode: "standard",
            useNative: "auto"
        },
        showBorders: true,
        showColumnGrandTotals: true,
        showColumnTotals: true,
        showRowGrandTotals: true,
        showRowTotals: true,
        showTotalsPrior: "none", // both | columns | rows | none 
        stateStoring: {
            customLoad: null,
            customSave: null,
            enabled: false,
            savingTimeout: 2000,
            storageKey: null,
            type: "localStorage" // custom | localStorage | sessionStorage
        },
        tabIndex: 0,
        texts: {
            collapseAll: "Collapse All",
            dataNotAvailable: "N/A",
            expandAll: "Expand All",
            exportToExcel: "Export to Excel file",
            grandTotal: "Grand Total",
            noData: "No data",
            removeAllSorting: "Remove All Sorting",
            showFieldChooser: "Show Field Chooser",
            sortColumnBySummary: "Sort {0} by This Column",
            sortRowBySummary: "Sort {0} by This Row",
            total: "{0} Total"
        },
        visible: true,
        width: undefined,
        wordWrapEnabled: true
    }).dxPivotGrid("instance");

    // =========================================================================================================
    const salesFieldChooser = $('#sales-fieldchooser').dxPivotGridFieldChooser({
        dataSource: salesPivotGrid.getDataSource(),
        texts: {
            allFields: 'All',
            columnFields: 'Columns',
            dataFields: 'Data',
            rowFields: 'Rows',
            filterFields: 'Filter',
        },
        width: 400,
        height: 400,
    }).dxPivotGridFieldChooser('instance');

});