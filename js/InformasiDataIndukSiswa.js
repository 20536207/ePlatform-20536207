//=========================================================================================================
$(function () {
    var
        _TbDataSiswa = [
            {
                caption: 'Identitas Peserta Didik',
                fixed: true,
                columns: [
                    // {
                    //     caption: 'Tahun Akademik',
                    //     dataField: 'a02',
                    //     groupIndex: 0,
                    // }, {
                    //     caption: 'Rombel',
                    //     dataField: 'a03',
                    //     groupIndex: 0,
                    // }, 
                    // {
                    //     caption: 'ID Rombel',
                    //     dataField: 'a01',
                    //     sortOrder: 'asc',
                    //     // hidingPriority: 0,
                    // },
                    {
                        caption: 'NIPD',
                        dataField: 'b01',
                        sortOrder: 'asc',
                        // // hidingPriority: 1,
                    }, {
                        caption: 'NISN',
                        dataField: 'b02',
                        // hidingPriority: 2,
                    }, {
                        caption: 'Nama Lengkap',
                        dataField: 'b03',
                    }],
            },
            {
                caption: 'Catatan Sipil Peserta Didik',
                columns: [{
                    caption: 'NIK',
                    dataField: 'c01',
                }, {
                    caption: 'No. Register',
                    dataField: 'c02',

                }, {
                    caption: 'No. Akta Kelahiran',
                    dataField: 'c03',

                }, {
                    caption: 'Tertanggal',
                    dataField: 'c04',
                    dataType: 'date',
                    format: "dd MMMM yyyy",

                }, {
                    caption: 'Gender',
                    dataField: 'c05',

                }, {
                    caption: 'Tempat Lahir',
                    dataField: 'c06',

                }, {
                    caption: 'Tanggal Lahir',
                    dataField: 'c07',
                    dataType: 'date',
                    format: "dd MMMM yyyy",

                }, {
                    caption: 'Anak Ke-',
                    dataField: 'c08',

                }],
            },
            {
                caption: 'Catatan Kependudukan Peserta Didik',
                columns: [{
                    caption: 'No. KK',
                    dataField: 'd01',

                }, {
                    caption: 'Tertanggal',
                    dataField: 'd02',
                    dataType: 'date',
                    format: "dd MMMM yyyy",

                }, {
                    caption: 'Alamat',
                    dataField: 'd03',

                }, {
                    caption: 'RT',
                    dataField: 'd04',

                }, {
                    caption: 'RW',
                    dataField: 'd05',

                }, {
                    caption: 'Desa/Kelurahan',
                    dataField: 'd06',

                }, {
                    caption: 'Kecamatan',
                    dataField: 'd07',

                }, {
                    caption: 'Pemerintah Daerah',
                    dataField: 'd08',

                }, {
                    caption: 'Pemerintah Propinsi',
                    dataField: 'd09',

                }, {
                    caption: 'Kode Pos',
                    dataField: 'd10',

                }, {
                    caption: 'Agama',
                    dataField: 'd11',

                }],
            },
            {
                caption: 'Keterangan Tempat Tinggal Peserta DIdik',
                columns: [{
                    caption: 'Dokumen',
                    dataField: 'e01',

                }, {
                    caption: 'Nomor',
                    dataField: 'e02',

                }, {
                    caption: 'Tertanggal',
                    dataField: 'e03',
                    dataType: 'date',
                    format: "dd MMMM yyyy",

                }, {
                    caption: 'Alamat',
                    dataField: 'e04',

                }, {
                    caption: 'RT',
                    dataField: 'e05',

                }, {
                    caption: 'RW',
                    dataField: 'e06',

                }, {
                    caption: 'Desa/Kelurahan',
                    dataField: 'e07',

                }, {
                    caption: 'Kecamatan',
                    dataField: 'e08',

                }, {
                    caption: 'Pemerintah Daerah',
                    dataField: 'e09',

                }, {
                    caption: 'Pemerintah Propinsi',
                    dataField: 'e10',

                }, {
                    caption: 'Kode Pos',
                    dataField: 'e11',

                }, {
                    caption: 'Koordinat',
                    dataField: 'e12',

                }, {
                    caption: 'Jarak (Km)',
                    dataField: 'e13',
                    type: 'number',
                    format: '0.000'

                }, {
                    caption: 'Waktu (Menit)',
                    dataField: 'e14',

                }],
            },
            {
                caption: 'Keterangan Ayah Kandung',
                columns: [{
                    caption: 'Nama Lengkap',
                    dataField: 'f01',

                }, {
                    caption: 'Gelar Depan',
                    dataField: 'f02',

                }, {
                    caption: 'Gelar Belakang',
                    dataField: 'f03',

                }, {
                    caption: 'NIK',
                    dataField: 'f04',

                }, {
                    caption: 'Tempat Lahir',
                    dataField: 'f05',

                }, {
                    caption: 'Tanggal Lahir',
                    dataField: 'f06',
                    dataType: 'date',
                    format: "dd MMMM yyyy",

                }, {
                    caption: 'Agama',
                    dataField: 'f07',

                }, {
                    caption: 'Pendidikan',
                    dataField: 'f08',

                }, {
                    caption: 'Pekerjaan',
                    dataField: 'f09',

                }, {
                    caption: 'Status Perkawinan',
                    dataField: 'f10',

                }, {
                    caption: 'Tanggal Meninggal',
                    dataField: 'f11',
                    dataType: 'date',
                    format: "dd MMMM yyyy",

                }],
            },
            {
                caption: 'Keterangan Ibu Kandung',
                columns: [{
                    caption: 'Nama Lengkap',
                    dataField: 'g01',

                }, {
                    caption: 'Gelar Depan',
                    dataField: 'g02',

                }, {
                    caption: 'Gelar Belakang',
                    dataField: 'g03',

                }, {
                    caption: 'NIK',
                    dataField: 'g04',

                }, {
                    caption: 'Tempat Lahir',
                    dataField: 'g05',

                }, {
                    caption: 'Tanggal Lahir',
                    dataField: 'g06',
                    dataType: 'date',
                    format: "dd MMMM yyyy",

                }, {
                    caption: 'Agama',
                    dataField: 'g07',

                }, {
                    caption: 'Pendidikan',
                    dataField: 'g08',

                }, {
                    caption: 'Pekerjaan',
                    dataField: 'g09',

                }, {
                    caption: 'Status Perkawinan',
                    dataField: 'g10',

                }, {
                    caption: 'Tanggal Meninggal',
                    dataField: 'g11',
                    dataType: 'date',
                    format: "dd MMMM yyyy",

                }],
            },
            {
                caption: 'Keterangan Wali',
                columns: [{
                    caption: 'Hubungan Keluarga',
                    dataField: 'h01',

                }, {
                    caption: 'Nama Lengkap',
                    dataField: 'h02',

                }, {
                    caption: 'Gelar Depan',
                    dataField: 'h03',

                }, {
                    caption: 'Gelar Belakang',
                    dataField: 'h04',

                }, {
                    caption: 'NIK',
                    dataField: 'h05',

                }, {
                    caption: 'Tempat Lahir',
                    dataField: 'h06',

                }, {
                    caption: 'Tanggal Lahir',
                    dataField: 'h07',
                    dataType: 'date',
                    format: "dd MMMM yyyy",

                }, {
                    caption: 'Agama',
                    dataField: 'h08',

                }, {
                    caption: 'Pendidikan',
                    dataField: 'h09',

                }, {
                    caption: 'Pekerjaan',
                    dataField: 'h10',

                }]
            },
            {
                caption: 'Keterangan Dinamis Peserta Didik',
                columns: [{
                    caption: 'No. Telpon',
                    dataField: 'i01',

                }, {
                    caption: 'Tinggi Badan (Cm)',
                    dataField: 'i02',

                }, {
                    caption: 'Berat Badan (Kg)',
                    dataField: 'i03',

                }, {
                    caption: 'Lingkar Kepala (Cm)',
                    dataField: 'i04',

                }, {
                    caption: 'Hobi',
                    dataField: 'i05',
                }, {
                    caption: 'Cita-cita',
                    dataField: 'i06',

                }, {
                    caption: 'Bakat',
                    dataField: 'i07',

                }, {
                    caption: 'Berkebutuhan Khusus',
                    dataField: 'i08',

                }, {
                    caption: 'Jml. Sdr. Kandung',
                    dataField: 'i09',

                }, {
                    caption: 'Jml. Sdr. Tiri',
                    dataField: 'i10',

                }, {
                    caption: 'Jml. Sdr. Angkat',
                    dataField: 'i11',

                }]
            },
            {
                caption: 'Keterangan Jaminan Sosial Pendidikan',
                columns: [{
                    caption: 'Jenis Jamsos',
                    dataField: 'j01',

                }, {
                    caption: 'Nomor Jamsos',
                    dataField: 'j02',

                }, {
                    caption: 'Nomor Rekening PIP',
                    dataField: 'j03',

                }, {
                    caption: 'Nama Bank PIP',
                    dataField: 'j04',
                }]
            },
            {
                caption: 'Keterangan Penerimaan Peserta Didik',
                columns: [{
                    caption: 'Jalur Penerimaan',
                    dataField: 'k01',

                }, {
                    caption: 'Nomor Dokumen',
                    dataField: 'k02',

                }, {
                    caption: 'Tertanggal',
                    dataField: 'k03',
                    dataType: 'date',
                    format: "dd MMMM yyyy",

                }, {
                    caption: 'Classical',
                    dataField: 'k04',
                }]
            },
            {
                caption: 'Keterangan Pendidikan Tingkat Sebelumnya',
                columns: [{
                    caption: 'Identitas Satuan Pendidikan',
                    dataField: 'l01',

                }, {
                    caption: 'Nomor Dokumen',
                    dataField: 'l02',

                }, {
                    caption: 'Tertanggal',
                    dataField: 'l03',
                    dataType: 'date',
                    format: "dd MMMM yyyy",

                }]
            },
            {
                caption: 'Keterangan Satuan Pendidikan Pindahan',
                columns: [{
                    caption: 'Identitas Satuan Pendidikan',
                    dataField: 'l04',

                }]
            },
            {
                caption: 'Akun Belajar Id',
                columns: [{
                    caption: 'Email',
                    dataField: 'm01',

                }]
            }
            // {
            //     caption: 'Riwayat Rombongan Belajar',
            //     columns: [{
            //         caption: 'Usia',
            //         dataField: 'n01',

            //     }, {
            //         caption: 'Status',
            //         dataField: 'n02',

            //     }, {
            //         caption: 'Nomor Dokumen Non Aktif',
            //         dataField: 'n03',

            //     }, {
            //         caption: 'Tertanggal Non Aktif',
            //         dataField: 'n04',
            //         dataType: 'date',
            //         format: "dd MMMM yyyy",

            //     }, {
            //         caption: 'Satuan Pendidikan Lanjutan',
            //         dataField: 'n05',
            //     }]
            // }
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
        _TbDataRombel = [
            {
                caption: 'Riwayat Rombongan Belajar',
                columns: [
                    {
                        caption: 'NIPD',
                        dataField: 'B01',
                        visible: false,
                        // groupIndex: 0
                        // // hidingPriority: 1,
                    }, {
                        caption: 'ID Rombel',
                        dataField: 'A01',
                        sortOrder: 'asc',
                        // hidingPriority: 0,
                    }, {
                        caption: 'Usia',
                        dataField: 'N01',

                    }, {
                        caption: 'Status',
                        dataField: 'N02',

                    }, {
                        caption: 'Nomor Dokumen Non Aktif',
                        dataField: 'N03',

                    }, {
                        caption: 'Tertanggal Non Aktif',
                        dataField: 'N04',
                        dataType: 'date',
                        format: "dd MMMM yyyy",

                    }, {
                        caption: 'Satuan Pendidikan Lanjutan',
                        dataField: 'N05',
                    }
                ]
            }
        ],

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
            masterDetail: {
                enabled: true,
                template(container, options) {
                    $("<div>").dxDataGrid({
                        dataSource: 'data/InformasiRombonganBelajar.json',
                        //============
                        // dataSource: $.getJSON("data/InformasiDataIndukSiswa.json", function (jsondata) {
                        //   jsondata = jsondata.filter(function (obj) {
                        //     return obj.A01.includes(options.data.A01);
                        //   });
                        // }),
                        //============
                        // dataSource: DevExpress.data.query($.getJSON("./data/InformasiDataIndukSiswa.json")
                        // .filter([["A01", "contains", options.data.A01], "and", ["N02", "=", "Aktif"]])
                        //     .sortBy("birthYear")
                        //     .select("name", "birthYear")
                        //     .toArray()
                        // ),
                        columns: _TbDataRombel,
                        filterValue: [["B01", "=", options.data.b01]],
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
                        hoverStateEnabled: false,
                        paging: {
                            pageSize: 'null',
                        },
                        pager: {
                            allowedPageSizes: [5, 10, 15, 20, 25, 50, 100, 'all'],
                            displayMode: "compact",
                            showInfo: true,
                            showNavigationButtons: true,
                            showPageSizeSelector: true,
                            visible: false,
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
                        filterPanel: { visible: false },
                        headerFilter: { visible: false },
                        groupPanel: { visible: false },
                        grouping: {
                            autoExpandAll: true,
                        },
                        wordWrapEnabled: false,
                        //sortByGroupSummaryInfo: [{ summaryItem: 'count' }],
                        //summary: _TBSummaryDashboard,
                        //toolbar: undefined,
                        rowAlternationEnabled: false,

                    }).appendTo(container);
                }
            },
        }).dxDataGrid('instance');

});