//=========================================================================================================
$(document).ready(function () {

    _main.arrVarGlobal._ParentPageContains = "/master/Homepage/Homepage_Home.html";
    // ===============================================================================================
    const
        _objData = {
            SumIDRombel: {
                column: 'A01',
                summaryType: 'count',
                displayFormat: 'Total : ( {0} Peserta Didik )',
                alignByColumn: true,
                showInColumn: 'A01',
                showInGroupFooter: true,
            },

            TBSummaryInfo: {
                groupItems: [{
                    column: 'A01',
                    summaryType: 'count',
                    displayFormat: 'Total : ( {0} Peserta Didik )',
                    alignByColumn: true,
                    showInColumn: 'A01',
                    showInGroupFooter: true,
                },],

                totalItems: [{
                    column: 'A01',
                    summaryType: 'count',
                    displayFormat: 'Total : ( {0} Peserta Didik )',
                    alignByColumn: true,
                    showInColumn: 'A01',
                    showInGroupFooter: true,
                },]
            },

            TbDataRombel: [
                {
                    caption: 'ID Anggota Rombel',
                    fixed: true,
                    dataField: 'A01',
                    dataType: 'string',
                    sortOrder: 'asc',
                },
                {
                    caption: 'Tahun Akademik',
                    dataField: 'A02',
                    dataType: 'string',
                    groupIndex: 0,
                },
                {
                    caption: 'Rombel',
                    dataField: 'A03',
                    dataType: 'string',
                    groupIndex: 0,
                },
                {
                    caption: 'Identitas Peserta Didik',
                    columns: [
                        {
                            caption: 'NIPD',
                            dataField: 'B01',
                            sortOrder: 'asc',
                            dataType: 'string',
                            // // hidingPriority: 1,
                        }, {
                            caption: 'NISN',
                            dataField: 'B02',
                            dataType: 'string',
                            // hidingPriority: 2,
                        }, {
                            caption: 'Nama Lengkap',
                            dataField: 'B03',
                            dataType: 'string',
                        }
                    ],
                },
                {
                    caption: 'Catatan Sipil Peserta Didik',
                    columns: [{
                        caption: 'NIK',
                        dataField: 'C01',
                        dataType: 'string',
                        format: function (value) {
                            return value.replace(value.substr(1, 13), "*".repeat(13));
                        },
                    }, {
                        caption: 'No. Register',
                        dataField: 'C02',
                        dataType: 'string',

                    }, {
                        caption: 'No. Akta Kelahiran',
                        dataField: 'C03',
                        dataType: 'string',

                    }, {
                        caption: 'Tertanggal',
                        dataField: 'C04',
                        dataType: 'date',
                        format: "dd/MM/yyyy",

                    }, {
                        caption: 'Gender',
                        dataField: 'C05',
                        dataType: 'string',

                    }, {
                        caption: 'Tempat Lahir',
                        dataField: 'C06',
                        dataType: 'string',

                    }, {
                        caption: 'Tanggal Lahir',
                        dataField: 'C07',
                        dataType: 'date',
                        format: "dd/MM/yyyy",

                    }, {
                        caption: 'Anak Ke-',
                        dataField: 'C08',
                        dataType: 'number',

                    }],
                },
                {
                    caption: 'Catatan Kependudukan Peserta Didik',
                    columns: [{
                        caption: 'No. KK',
                        dataField: 'D01',
                        dataType: 'string',
                        format: function (value) {
                            return value.replace(value.substr(1, 13), "*".repeat(13));
                        },

                    }, {
                        caption: 'Tertanggal',
                        dataField: 'D02',
                        dataType: 'date',
                        format: "dd/MM/yyyy",

                    }, {
                        caption: 'Alamat',
                        dataField: 'D03',
                        dataType: 'string',

                    }, {
                        caption: 'RT',
                        dataField: 'D04',
                        dataType: 'string',
                        format: function (value) { return String(value).padStart(3, '0'); },

                    }, {
                        caption: 'RW',
                        dataField: 'D05',
                        dataType: 'string',
                        format: function (value) { return String(value).padStart(3, '0'); },

                    }, {
                        caption: 'Desa/Kelurahan',
                        dataField: 'D06',
                        dataType: 'string',

                    }, {
                        caption: 'Kecamatan',
                        dataField: 'D07',
                        dataType: 'string',

                    }, {
                        caption: 'Pemerintah Daerah',
                        dataField: 'D08',
                        dataType: 'string',

                    }, {
                        caption: 'Pemerintah Propinsi',
                        dataField: 'D09',
                        dataType: 'string',

                    }, {
                        caption: 'Kode Pos',
                        dataField: 'D10',
                        dataType: 'string',

                    }, {
                        caption: 'Agama',
                        dataField: 'D11',
                        dataType: 'string',

                    }],
                },
                {
                    caption: 'Keterangan Tempat Tinggal Peserta DIdik',
                    columns: [{
                        caption: 'Dokumen',
                        dataField: 'E01',
                        dataType: 'string',

                    }, {
                        caption: 'Nomor',
                        dataField: 'E02',
                        dataType: 'string',

                    }, {
                        caption: 'Tertanggal',
                        dataField: 'E03',
                        dataType: 'date',
                        format: "dd/MM/yyyy",

                    }, {
                        caption: 'Alamat',
                        dataField: 'E04',
                        dataType: 'string',

                    }, {
                        caption: 'RT',
                        dataField: 'E05',
                        dataType: 'string',
                        format: function (value) { return String(value).padStart(3, '0'); },

                    }, {
                        caption: 'RW',
                        dataField: 'E06',
                        dataType: 'string',
                        format: function (value) { return String(value).padStart(3, '0'); },

                    }, {
                        caption: 'Desa/Kelurahan',
                        dataField: 'E07',
                        dataType: 'string',

                    }, {
                        caption: 'Kecamatan',
                        dataField: 'E08',
                        dataType: 'string',

                    }, {
                        caption: 'Pemerintah Daerah',
                        dataField: 'E09',
                        dataType: 'string',

                    }, {
                        caption: 'Pemerintah Propinsi',
                        dataField: 'E10',
                        dataType: 'string',

                    }, {
                        caption: 'Kode Pos',
                        dataField: 'E11',
                        dataType: 'string',

                    }, {
                        caption: 'Koordinat',
                        dataField: 'E12',
                        dataType: 'string',

                    }, {
                        caption: 'Jarak (Km)',
                        dataField: 'E13',
                        dataType: 'number',
                        format: '0.000'

                    }, {
                        caption: 'Waktu (Menit)',
                        dataField: 'E14',
                        dataType: 'number',

                    }],
                },
                {
                    caption: 'Keterangan Ayah Kandung',
                    columns: [{
                        caption: 'Nama Lengkap',
                        dataField: 'F01',
                        dataType: 'string',

                    }, {
                        caption: 'Gelar Depan',
                        dataField: 'F02',
                        dataType: 'string',

                    }, {
                        caption: 'Gelar Belakang',
                        dataField: 'F03',
                        dataType: 'string',

                    }, {
                        caption: 'NIK',
                        dataField: 'F04',
                        dataType: 'string',
                        format: function (value) {
                            return value.replace(value.substr(1, 13), "*".repeat(13));
                        },
                    }, {
                        caption: 'Tempat Lahir',
                        dataField: 'F05',
                        dataType: 'string',

                    }, {
                        caption: 'Tanggal Lahir',
                        dataField: 'F06',
                        dataType: 'date',
                        format: "dd/MM/yyyy",

                    }, {
                        caption: 'Agama',
                        dataField: 'F07',
                        dataType: 'string',

                    }, {
                        caption: 'Pendidikan',
                        dataField: 'F08',
                        dataType: 'string',

                    }, {
                        caption: 'Pekerjaan',
                        dataField: 'F09',
                        dataType: 'string',

                    }, {
                        caption: 'Status Perkawinan',
                        dataField: 'F10',
                        dataType: 'string',

                    }, {
                        caption: 'Tanggal Meninggal',
                        dataField: 'F11',
                        dataType: 'date',
                        format: "dd/MM/yyyy",

                    }],
                },
                {
                    caption: 'Keterangan Ibu Kandung',
                    columns: [{
                        caption: 'Nama Lengkap',
                        dataField: 'G01',
                        dataType: 'string',

                    }, {
                        caption: 'Gelar Depan',
                        dataField: 'G02',
                        dataType: 'string',

                    }, {
                        caption: 'Gelar Belakang',
                        dataField: 'G03',
                        dataType: 'string',

                    }, {
                        caption: 'NIK',
                        dataField: 'G04',
                        dataType: 'string',
                        format: function (value) {
                            return value.replace(value.substr(1, 13), "*".repeat(13));
                        },
                    }, {
                        caption: 'Tempat Lahir',
                        dataField: 'G05',
                        dataType: 'string',

                    }, {
                        caption: 'Tanggal Lahir',
                        dataField: 'G06',
                        dataType: 'date',
                        format: "dd/MM/yyyy",

                    }, {
                        caption: 'Agama',
                        dataField: 'G07',
                        dataType: 'string',

                    }, {
                        caption: 'Pendidikan',
                        dataField: 'G08',
                        dataType: 'string',

                    }, {
                        caption: 'Pekerjaan',
                        dataField: 'G09',
                        dataType: 'string',

                    }, {
                        caption: 'Status Perkawinan',
                        dataField: 'G10',
                        dataType: 'string',

                    }, {
                        caption: 'Tanggal Meninggal',
                        dataField: 'G11',
                        dataType: 'date',
                        format: "dd/MM/yyyy",

                    }],
                },
                {
                    caption: 'Keterangan Wali',
                    columns: [{
                        caption: 'Hubungan Keluarga',
                        dataField: 'H01',
                        dataType: 'string',

                    }, {
                        caption: 'Nama Lengkap',
                        dataField: 'H02',
                        dataType: 'string',

                    }, {
                        caption: 'Gelar Depan',
                        dataField: 'H03',
                        dataType: 'string',

                    }, {
                        caption: 'Gelar Belakang',
                        dataField: 'H04',
                        dataType: 'string',

                    }, {
                        caption: 'NIK',
                        dataField: 'H05',
                        dataType: 'string',
                        format: function (value) {
                            return value.replace(value.substr(1, 13), "*".repeat(13));
                        },
                    }, {
                        caption: 'Tempat Lahir',
                        dataField: 'H06',
                        dataType: 'string',

                    }, {
                        caption: 'Tanggal Lahir',
                        dataField: 'H07',
                        dataType: 'date',
                        format: "dd/MM/yyyy",

                    }, {
                        caption: 'Agama',
                        dataField: 'H08',
                        dataType: 'string',

                    }, {
                        caption: 'Pendidikan',
                        dataField: 'H09',
                        dataType: 'string',

                    }, {
                        caption: 'Pekerjaan',
                        dataField: 'H10',
                        dataType: 'string',

                    }]
                },
                {
                    caption: 'Keterangan Dinamis Peserta Didik',
                    columns: [{
                        caption: 'No. Telpon',
                        dataField: 'I01',
                        dataType: 'string',
                        format: function (value) {
                            return value.replace(value.substr(3, 5), "*".repeat(5));
                        },
                    }, {
                        caption: 'Tinggi Badan (Cm)',
                        dataField: 'I02',
                        dataType: 'number',

                    }, {
                        caption: 'Berat Badan (Kg)',
                        dataField: 'I03',
                        dataType: 'number',
                        // format: '0.000',

                    }, {
                        caption: 'Lingkar Kepala (Cm)',
                        dataField: 'I04',
                        dataType: 'number',

                    }, {
                        caption: 'Hobi',
                        dataField: 'I05',
                        dataType: 'string',
                    }, {
                        caption: 'Cita-cita',
                        dataField: 'I06',
                        dataType: 'string',

                    }, {
                        caption: 'Bakat',
                        dataField: 'I07',
                        dataType: 'string',

                    }, {
                        caption: 'Berkebutuhan Khusus',
                        dataField: 'I08',
                        dataType: 'string',

                    }, {
                        caption: 'Jml. Sdr. Kandung',
                        dataField: 'I09',
                        dataType: 'number',

                    }, {
                        caption: 'Jml. Sdr. Tiri',
                        dataField: 'I10',
                        dataType: 'number',

                    }, {
                        caption: 'Jml. Sdr. Angkat',
                        dataField: 'I11',
                        dataType: 'number',

                    }]
                },
                {
                    caption: 'Keterangan Jaminan Sosial Pendidikan',
                    columns: [{
                        caption: 'Jenis Jamsos',
                        dataField: 'J01',
                        dataType: 'string',

                    }, {
                        caption: 'Nomor Jamsos',
                        dataField: 'J02',
                        dataType: 'string',

                    }, {
                        caption: 'Nomor Rekening PIP',
                        dataField: 'J03',
                        dataType: 'string',
                        format: function (value) {
                            return value.replace(value.substr(3, 10), "*".repeat(10));
                        },
                    }, {
                        caption: 'Nama Bank PIP',
                        dataField: 'J04',
                        dataType: 'string',
                    }]
                },
                {
                    caption: 'Keterangan Penerimaan Peserta Didik',
                    columns: [{
                        caption: 'Jalur Penerimaan',
                        dataField: 'K01',
                        dataType: 'string',

                    }, {
                        caption: 'Nomor Dokumen',
                        dataField: 'K02',
                        dataType: 'string',

                    }, {
                        caption: 'Tertanggal',
                        dataField: 'K03',
                        dataType: 'date',
                        format: "dd/MM/yyyy",

                    }, {
                        caption: 'Classical',
                        dataField: 'K04',
                        dataType: 'string',
                    }]
                },
                {
                    caption: 'Keterangan Pendidikan Tingkat Sebelumnya',
                    columns: [{
                        caption: 'Identitas Satuan Pendidikan',
                        dataField: 'L01',
                        dataType: 'string',

                    }, {
                        caption: 'Nomor Dokumen',
                        dataField: 'L02',
                        dataType: 'string',

                    }, {
                        caption: 'Tertanggal',
                        dataField: 'L03',
                        dataType: 'date',
                        format: "dd/MM/yyyy",

                    }]
                },
                {
                    caption: 'Keterangan Satuan Pendidikan Pindahan',
                    columns: [{
                        caption: 'Identitas Satuan Pendidikan',
                        dataField: 'L04',
                        dataType: 'string',

                    }]
                },
                {
                    caption: 'Akun Belajar Id',
                    columns: [{
                        caption: 'Email',
                        dataField: 'M01',
                        dataType: 'string',

                    }]
                },
                {
                    caption: 'Riwayat Rombongan Belajar',
                    columns: [{
                        caption: 'Usia',
                        dataField: 'N01',
                        dataType: 'number',

                    }, {
                        caption: 'Status',
                        dataField: 'N02',
                        dataType: 'string',

                    }, {
                        caption: 'Nomor Dokumen Non Aktif',
                        dataField: 'N03',
                        dataType: 'string',

                    }, {
                        caption: 'Tertanggal Non Aktif',
                        dataField: 'N04',
                        dataType: 'date',
                        format: "dd/MM/yyyy",

                    }, {
                        caption: 'Satuan Pendidikan Lanjutan',
                        dataField: 'N05',
                        dataType: 'string',
                    }]
                },

            ],
        },

        _objElement = {
            InformasiRombonganBelajar:
                $('#InformasiRombonganBelajar').dxDataGrid({
                    onContentReady: function (e) {
                        if (!e.component.__ready) {
                            GetJsonData(
                                this,
                                "15SkVrus9I9rb79E3Hf6EninYthneYxIKJfw8OvIMMUc", //SpreadsheetID
                                1316011922,                                     //SheetID
                                "A1:CX",                                        //Range
                                "SELECT * WHERE A <> ''"                         //Filter or Query
                            );
                            e.component.__ready = true;
                        };
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
                    columns: _objData.TbDataRombel,
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
                        const _nmfile = 'Data Rombongan Belajar';
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

                    groupPanel: { visible: false },
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
                }).dxDataGrid('instance'),
        };

});