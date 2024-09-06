//=========================================================================================================
$(document).ready(async function () {

    _main.arrVarGlobal._ParentPageContains = "/master/Homepage/Homepage_Home.html";
    // ===============================================================================================
    const
        _objData = {
            SumIDRombel: {
                column: 'A01',
                summaryType: 'count',
                displayFormat: 'Total : ( {0} Peserta Didik )',
                alignByColumn: true,
                showInColumn: 'B02',
                showInGroupFooter: true,
            },

            TBSummaryInfo: {
                groupItems: [{
                    column: 'A01',
                    summaryType: 'count',
                    displayFormat: 'Jumlah Data : ( {0} Prestasi )',
                    alignByColumn: true,
                    showInColumn: 'B02',
                    showInGroupFooter: true,
                },],

                totalItems: [{
                    column: 'A01',
                    summaryType: 'count',
                    displayFormat: 'Total Data Keseluruhan : ( {0} Prestasi )',
                    alignByColumn: true,
                    showInColumn: 'B02',
                    showInGroupFooter: true,
                },]
            },

            TbColumns: [
                {
                    caption: 'Tahun Perolehan',
                    dataField: 'B01',
                    dataType: 'string',
                    sortOrder: 'asc',
                    groupIndex: 0,
                },
                {
                    caption: 'Rombel Dinamis',
                    dataField: 'A06',
                    dataType: 'string',
                    sortOrder: 'asc',
                    groupIndex: 0,
                },
                {
                    caption: 'Peserta Didik',
                    dataField: 'A01',
                    dataType: 'string',
                    sortOrder: 'asc',
                    groupIndex: 0,
                },
                {
                    caption: 'Identitas Peserta Didik',
                    visible: false,
                    columns: [
                        {
                            caption: 'NIPD',
                            dataField: 'A02',
                            sortOrder: 'asc',
                            dataType: 'string',
                            visible: false,
                        }, {
                            caption: 'NISN',
                            dataField: 'A03',
                            dataType: 'string',
                            visible: false,
                        }, {
                            caption: 'Nama Lengkap',
                            dataField: 'A04',
                            dataType: 'string',
                            visible: false,
                        }, {
                            caption: 'Gender',
                            dataField: 'A05',
                            dataType: 'string',
                            visible: false,
                        }, {
                            caption: 'Status',
                            dataField: 'A07',
                            dataType: 'string',
                            visible: false,
                        }
                    ],
                },
                {
                    caption: 'Catatan Prestasi',
                    columns: [
                        {
                            caption: 'Nomor Piagam/ Sertifikat',
                            dataField: 'B02',
                            dataType: 'string',
                        }, {
                            caption: 'Tertanggal',
                            dataField: 'B03',
                            dataType: 'date',
                            format: "dd/MM/yyyy",
                        }, {
                            caption: 'Penyelenggara',
                            dataField: 'B04',
                            dataType: 'string',
                        }, {
                            caption: 'Penandatangan',
                            dataField: 'B05',
                            dataType: 'string',
                        }, {
                            caption: 'Kategori Prestasi',
                            dataField: 'B06',
                            dataType: 'string',
                        }, {
                            caption: 'Event',
                            dataField: 'B07',
                            dataType: 'string',
                        }, {
                            caption: 'Cabang Kejuaraan',
                            dataField: 'B08',
                            dataType: 'string',
                            cellTemplate(container, options) {
                                if (options.data.B11 !== '') {
                                    return $('<a>', { href: 'https://drive.google.com/file/d/' + options.data.B11, target: '_blank' }).text(options.value);
                                } else {
                                    return $('<div>').text(options.value);
                                }
                            },
                        }, {
                            caption: 'Tingkat',
                            dataField: 'B09',
                            dataType: 'string',
                        }, {
                            caption: 'Perolehan Juara',
                            dataField: 'B10',
                            dataType: 'string',
                        }
                    ],
                },

            ],
        };

    // _objElement = {
    //     InformasiPrestasi:

    $('#InformasiPrestasi').dxDataGrid({
        // dataSource: await _main.arrVarGlobal._dataArray,
        onContentReady: function (e) {
            if (!e.component._isReady) {
                const getQuery = GetVisualizationQuery(
                    _main.appConfig.dataSource.Kesiswaan, //SpreadsheetID
                    1804527068,                                     //SheetID
                    "A1:R",                                        //Range
                    "SELECT * WHERE A <> ''"                         //Filter or Query
                );
                getQuery.send(response => {
                    GetJsonData(response);
                    this.option("dataSource", _main.arrVarGlobal._dataArray.length != 0 ? _main.arrVarGlobal._dataArray : null);
                });
                e.component._isReady = true;
                delete getQuery;
                _main.arrVarGlobal._columnArray = [];
                _main.arrVarGlobal._dataArray = [];
            }
        },
        allowColumnReordering: true,
        allowColumnResizing: true,
        columnHidingEnabled: false,
        columnResizingMode: 'widget',
        columnAutoWidth: true,
        columnChooser: {
            enabled: true,
            mode: "select",
            sortOrder: undefined,
            title: "Column Chooser",
            search: {
                editorOptions: {},
                enabled: true,
                timeout: null,
            },
        },
        columnFixing: {
            enabled: true,
        },
        columns: _objData.TbColumns,
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
            const _nmfile = _element.PageToolbar.option("items[1].text");
            if (e.format === 'xlsx') {
                const workbook = new ExcelJS.Workbook();
                const worksheet = workbook.addWorksheet('Data');
                DevExpress.excelExporter.exportDataGrid({
                    component: e.component,
                    worksheet,
                    autoFilterEnabled: true,
                }).then(() => {
                    workbook.xlsx.writeBuffer().then((buffer) => {
                        saveAs(new Blob([buffer], { type: 'application/octet-stream' }), _nmfile + '.xlsx');
                    });
                });
                e.cancel = true;
            }
            else if (e.format === 'pdf') {
                const doc = new jsPDF('l', 'pt');
                doc.setFont('inherit', 'normal');
                doc.setFontSize('inherit');
                DevExpress.pdfExporter.exportDataGrid({
                    jsPDFDocument: doc,
                    component: e.component,
                }).then(() => {
                    doc.save(_nmfile + '.pdf');
                });
            }
        },

        // filterValue: ["A01", "contains", options.data.A01],
        filterRow: { visible: true },
        filterPanel: { visible: true },

        groupPanel: { visible: true },
        grouping: {
            autoExpandAll: false,
        },

        headerFilter: { visible: true },
        hoverStateEnabled: false,

        paging: {
            pageSize: 20,
        },
        pager: {
            allowedPageSizes: [5, 10, 15, 20, 25, 50],
            displayMode: "compact",
            showInfo: true,
            showNavigationButtons: true,
            showPageSizeSelector: true,
            visible: true,
        },

        remoteOperations: false,

        showBorders: true,
        showColumnHeaders: true,
        showColumnLines: true,
        showRowLines: true,
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
        scrolling: {
            columnRenderingMode: "standard",
            mode: "standard",
            preloadEnabled: false,
            renderAsync: undefined,
            rowRenderingMode: "standard",
            scrollByContent: true,
            scrollByThumb: true,
            showScrollbar: "onHover",
            useNative: false
        },

        wordWrapEnabled: false,
        // sortByGroupSummaryInfo: [{ summaryItem: 'count' }],
        summary: _objData.TBSummaryInfo,
        //toolbar: undefined,
    }).dxDataGrid('instance');

    // };
    //==================================
});