//=========================================================================================================
$(function () {
    var
        _TbDataSiswa = [
            {
                caption: 'Identitas Peserta Didik',
                fixed: true,
                columns: [
                    {
                        caption: 'Rombel',
                        dataField: 'A02',
                        groupIndex: 0,
                    }, {
                        caption: 'ID Rombel',
                        dataField: 'A01',
                        sortOrder: 'asc',
                        // hidingPriority: 0,

                    }, {
                        caption: 'NIPD',
                        dataField: 'B01',
                        // hidingPriority: 1,

                    }, {
                        caption: 'NISN',
                        dataField: 'B02',
                        // hidingPriority: 2,

                    }, {
                        caption: 'Nama Lengkap',
                        dataField: 'B03',

                    }],
            },
            {
                caption: 'Catatan Sipil Peserta Didik',
                columns: [{
                    caption: 'NIK',
                    dataField: 'C01',
                }, {
                    caption: 'No. Register',
                    dataField: 'C02',

                }, {
                    caption: 'No. Akta Kelahiran',
                    dataField: 'C03',

                }, {
                    caption: 'Tertanggal',
                    dataField: 'C04',
                    dataType: 'date',
                    format: "dd MMMM yyyy",

                }, {
                    caption: 'Gender',
                    dataField: 'C05',

                }, {
                    caption: 'Tempat Lahir',
                    dataField: 'C06',

                }, {
                    caption: 'Tanggal Lahir',
                    dataField: 'C07',
                    dataType: 'date',
                    format: "dd MMMM yyyy",

                }, {
                    caption: 'Anak Ke-',
                    dataField: 'C08',

                }],
            },
            {
                caption: 'Catatan Kependudukan Peserta Didik',
                columns: [{
                    caption: 'No. KK',
                    dataField: 'D01',

                }, {
                    caption: 'Tertanggal',
                    dataField: 'D02',
                    dataType: 'date',
                    format: "dd MMMM yyyy",

                }, {
                    caption: 'Alamat',
                    dataField: 'D03',

                }, {
                    caption: 'RT',
                    dataField: 'D04',

                }, {
                    caption: 'RW',
                    dataField: 'D05',

                }, {
                    caption: 'Desa/Kelurahan',
                    dataField: 'D06',

                }, {
                    caption: 'Kecamatan',
                    dataField: 'D07',

                }, {
                    caption: 'Pemerintah Daerah',
                    dataField: 'D08',

                }, {
                    caption: 'Pemerintah Propinsi',
                    dataField: 'D09',

                }, {
                    caption: 'Kode Pos',
                    dataField: 'D10',

                }, {
                    caption: 'Agama',
                    dataField: 'D11',

                }],
            },
            {
                caption: 'Keterangan Tempat Tinggal Peserta DIdik',
                columns: [{
                    caption: 'Dokumen',
                    dataField: 'E01',

                }, {
                    caption: 'Nomor',
                    dataField: 'E02',

                }, {
                    caption: 'Tertanggal',
                    dataField: 'E03',
                    dataType: 'date',
                    format: "dd MMMM yyyy",

                }, {
                    caption: 'Alamat',
                    dataField: 'E04',

                }, {
                    caption: 'RT',
                    dataField: 'E05',

                }, {
                    caption: 'RW',
                    dataField: 'E06',

                }, {
                    caption: 'Desa/Kelurahan',
                    dataField: 'E07',

                }, {
                    caption: 'Kecamatan',
                    dataField: 'E08',

                }, {
                    caption: 'Pemerintah Daerah',
                    dataField: 'E09',

                }, {
                    caption: 'Pemerintah Propinsi',
                    dataField: 'E10',

                }, {
                    caption: 'Kode Pos',
                    dataField: 'E11',

                }, {
                    caption: 'Koordinat',
                    dataField: 'E12',

                }, {
                    caption: 'Jarak (Km)',
                    dataField: 'E13',
                    type: 'number',
                    format: '0.000'

                }, {
                    caption: 'Waktu (Menit)',
                    dataField: 'E14',

                }],
            },
            {
                caption: 'Keterangan Ayah Kandung',
                columns: [{
                    caption: 'Nama Lengkap',
                    dataField: 'F01',

                }, {
                    caption: 'Gelar Depan',
                    dataField: 'F02',

                }, {
                    caption: 'Gelar Belakang',
                    dataField: 'F03',

                }, {
                    caption: 'NIK',
                    dataField: 'F04',

                }, {
                    caption: 'Tempat Lahir',
                    dataField: 'F05',

                }, {
                    caption: 'Tanggal Lahir',
                    dataField: 'F06',
                    dataType: 'date',
                    format: "dd MMMM yyyy",

                }, {
                    caption: 'Agama',
                    dataField: 'F07',

                }, {
                    caption: 'Pendidikan',
                    dataField: 'F08',

                }, {
                    caption: 'Pekerjaan',
                    dataField: 'F09',

                }, {
                    caption: 'Status Perkawinan',
                    dataField: 'F10',

                }, {
                    caption: 'Tanggal Meninggal',
                    dataField: 'F11',
                    dataType: 'date',
                    format: "dd MMMM yyyy",

                }],
            },
            {
                caption: 'Keterangan Ibu Kandung',
                columns: [{
                    caption: 'Nama Lengkap',
                    dataField: 'G01',

                }, {
                    caption: 'Gelar Depan',
                    dataField: 'G02',

                }, {
                    caption: 'Gelar Belakang',
                    dataField: 'G03',

                }, {
                    caption: 'NIK',
                    dataField: 'G04',

                }, {
                    caption: 'Tempat Lahir',
                    dataField: 'G05',

                }, {
                    caption: 'Tanggal Lahir',
                    dataField: 'G06',
                    dataType: 'date',
                    format: "dd MMMM yyyy",

                }, {
                    caption: 'Agama',
                    dataField: 'G07',

                }, {
                    caption: 'Pendidikan',
                    dataField: 'G08',

                }, {
                    caption: 'Pekerjaan',
                    dataField: 'G09',

                }, {
                    caption: 'Status Perkawinan',
                    dataField: 'G10',

                }, {
                    caption: 'Tanggal Meninggal',
                    dataField: 'G11',
                    dataType: 'date',
                    format: "dd MMMM yyyy",

                }],
            },
            {
                caption: 'Keterangan Wali',
                columns: [{
                    caption: 'Hubungan Keluarga',
                    dataField: 'H01',

                }, {
                    caption: 'Nama Lengkap',
                    dataField: 'H02',

                }, {
                    caption: 'Gelar Depan',
                    dataField: 'H03',

                }, {
                    caption: 'Gelar Belakang',
                    dataField: 'H04',

                }, {
                    caption: 'NIK',
                    dataField: 'H05',

                }, {
                    caption: 'Tempat Lahir',
                    dataField: 'H06',

                }, {
                    caption: 'Tanggal Lahir',
                    dataField: 'H07',
                    dataType: 'date',
                    format: "dd MMMM yyyy",

                }, {
                    caption: 'Agama',
                    dataField: 'H08',

                }, {
                    caption: 'Pendidikan',
                    dataField: 'H09',

                }, {
                    caption: 'Pekerjaan',
                    dataField: 'H10',

                }]
            }
        ],

        _SumIDRombel = {
            column: 'A01',
            summaryType: 'count',
            displayFormat: 'Total : ( {0} Peserta Didik )',
            alignByColumn: true,
            showInColumn: 'A01',
            showInGroupFooter: true,
        },

        _TBSummaryInfo = {
            groupItems: [_SumIDRombel],
            totalItems: [_SumIDRombel]
        },

        //===============================================================================
        _InformasiDataIndukSiswa = $('#InformasiDataIndukSiswa').dxDataGrid({
            allowColumnReordering: true,
            allowColumnResizing: true,
            columnHidingEnabled: false,
            columnResizingMode: 'widget',
            columnAutoWidth: true,
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
            columns: _TbDataSiswa,

            dataSource: './data/InformasiDataIndukSiswa.json',

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

            // filterValue: ["A01", "contains", options.data.A01],
            filterRow: { visible: true },
            filterPanel: { visible: false },

            groupPanel: { visible: false },
            grouping: {
                autoExpandAll: false,
            },

            headerFilter: { visible: false },
            hoverStateEnabled: false,

            paging: {
                pageSize: 20,
            },
            pager: {
                allowedPageSizes: [5, 10, 15, 20, 25, 50, 100, 'all'],
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
            summary: _TBSummaryInfo,
            //toolbar: undefined,
        }).dxDataGrid('instance');

});