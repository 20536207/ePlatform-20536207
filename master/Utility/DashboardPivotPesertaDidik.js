$(document).ready(function () {

    _ParentPageContains = "./master/Homepage/Homepage_Home.html";

    // ===============================================================================================
    const
        _TBPivotPesertaDidik = {
            fields: [
                // {
                //     caption: 'ID Anggota Rombel',
                //     fixed: true,
                //     dataField: 'A01',
                //     sortOrder: 'asc',
                // },
                // {
                //     caption: 'Tahun Akademik',
                //     dataField: 'A02',
                //     groupIndex: 0,
                // },
                // {
                //     caption: 'Rombel',
                //     dataField: 'A03',
                //     groupIndex: 0,
                // },

                {
                    caption: 'Rombel',
                    // width: 120,
                    dataField: 'A03',
                    area: 'row',
                    headerFilter: {
                        search: {
                            enabled: true,
                        },
                    },
                    // selector(data) {
                    //     return `${data.city} (${data.country})`;
                    // },
                }, {
                    groupName: 'Gender',
                    groupInterval: 'month',
                    visible: false,
                },
                {
                    caption: 'Gender',
                    dataField: 'C05',
                    dataType: 'number',
                    summaryType: 'counta',
                    format: 'currency',
                    area: 'data',
                }
            ],
            store: './data/PesertaDidik.json',
        };

    $('#DashboardPesertaDidik').dxPivotGrid({
        allowExpandAll: false,
        allowFiltering: false,
        allowSorting: false,
        allowSortingBySummary: false,
        dataFieldArea: "column", //column | row
        dataSource: _TBPivotPesertaDidik,
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
            height: '90%',
            layout: "0", // 0 | 1 | 2
            searchTimeout: 500,
            texts: {
                allFields: "All Fields",
                columnFields: "Column Fields",
                dataFields: "Data Fields",
                filterFields: "Filter Fields",
                rowFields: "Row Fields"
            },
            title: "Field Chooser",
            width: '90%'
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