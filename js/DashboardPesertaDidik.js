//=========================================================================================================
$(function () {
    var
        _ColTingkat = {
            caption: 'Kelas',
            fixed: true,
            dataField: 'Z01',
            sortOrder: 'asc',
            alignment: 'left',
            groupIndex: 0,
        },

        //=========================================================================
        _ColRombel = {
            caption: 'Rombel',
            fixed: true,
            dataField: 'A01',
            sortOrder: 'asc',
            alignment: 'left',
            masterField: 'A02',
        },

        //=========================================================================
        _ColAnggotaRombel = {
            caption: 'Anggota Rombel',
            alignment: 'left',
            columns: [{
                caption: 'L',
                dataField: 'B01',
                alignment: 'center',
                // cellTemplate(container, options) {
                //     return options.value == 0 ? "-" :
                //         $('<a>').dxButton({
                //             stylingMode: 'text',
                //             text: options.value,
                //             type: 'default',
                //             onClick() {
                //                 DevExpress.ui.notify( + 'was clicked');
                //             }
                //         })
                // },
            }, {
                caption: 'P',
                dataField: 'B02',
                alignment: 'center',

            }, {
                caption: 'JML',
                dataField: 'B03',
                alignment: 'center',
            }],
        },

        //=========================================================================
        _ColBerkebutuhanKhusus = {
            caption: 'Berkebutuhan Khusus',
            alignment: 'left',
            columns: [{
                caption: 'L',
                dataField: 'C01',
                alignment: 'center',
            }, {
                caption: 'P',
                dataField: 'C02',
                alignment: 'center',
            }, {
                caption: 'JML',
                dataField: 'C03',
                alignment: 'center',
            }],
        },

        //=========================================================================
        _ColStatusSosialAnak = {
            caption: 'Status Sosial Anak',
            alignment: 'left',
            columns: [
                {
                    caption: 'Yatim',
                    alignment: 'center',
                    columns: [{
                        caption: 'L',
                        dataField: 'D01',
                        alignment: 'center',
                    }, {
                        caption: 'P',
                        dataField: 'D02',
                        alignment: 'center',
                    }, {
                        caption: 'JML',
                        dataField: 'D03',
                        alignment: 'center',
                    }],
                },
                {
                    caption: 'Piatu',
                    alignment: 'center',
                    columns: [{
                        caption: 'L',
                        dataField: 'D04',
                        alignment: 'center',

                    }, {
                        caption: 'P',
                        dataField: 'D05',
                        alignment: 'center',
                    }, {
                        caption: 'JML',
                        dataField: 'D06',
                        alignment: 'center',
                    }],
                },
                {
                    caption: 'Yatim Piatu',
                    alignment: 'center',
                    columns: [{
                        caption: 'L',
                        dataField: 'D07',
                        alignment: 'center',

                    }, {
                        caption: 'P',
                        dataField: 'D08',
                        alignment: 'center',
                    }, {
                        caption: 'JML',
                        dataField: 'D09',
                        alignment: 'center',
                    }],
                }
            ],
        },

        //=========================================================================
        _ColRekomendasiPIP = {
            caption: 'Rekomendasi PIP',
            alignment: 'left',
            columns: [
                {
                    caption: 'PIP',
                    alignment: 'center',
                    columns: [{
                        caption: 'L',
                        dataField: 'E01',
                        alignment: 'center',
                    }, {
                        caption: 'P',
                        dataField: 'E02',
                        alignment: 'center',

                    }, {
                        caption: 'JML',
                        dataField: 'E03',
                        alignment: 'center',
                    }],
                },
                {
                    caption: 'PKH',
                    alignment: 'center',
                    columns: [{
                        caption: 'L',
                        dataField: 'E04',
                        alignment: 'center',

                    }, {
                        caption: 'P',
                        dataField: 'E05',
                        alignment: 'center',
                    }, {
                        caption: 'JML',
                        dataField: 'E06',
                        alignment: 'center',
                    }],
                },
                {
                    caption: 'KPS',
                    alignment: 'center',
                    columns: [{
                        caption: 'L',
                        dataField: 'E07',
                        alignment: 'center',

                    }, {
                        caption: 'P',
                        dataField: 'E08',
                        alignment: 'center',
                    }, {
                        caption: 'JML',
                        dataField: 'E09',
                        alignment: 'center',
                    }],
                },
                {
                    caption: 'KKS',
                    alignment: 'center',
                    columns: [{
                        caption: 'L',
                        dataField: 'E10',
                        alignment: 'center',

                    }, {
                        caption: 'P',
                        dataField: 'E11',
                        alignment: 'center',
                    }, {
                        caption: 'JML',
                        dataField: 'E12',
                        alignment: 'center',
                    }],
                },
                {
                    caption: 'BESTARI',
                    alignment: 'center',
                    columns: [{
                        caption: 'L',
                        dataField: 'E13',
                        alignment: 'center',

                    }, {
                        caption: 'P',
                        dataField: 'E14',
                        alignment: 'center',
                    }, {
                        caption: 'JML',
                        dataField: 'E15',
                        alignment: 'center',
                    }],
                },
                {
                    caption: 'PYBK',
                    alignment: 'center',
                    columns: [{
                        caption: 'L',
                        dataField: 'E16',
                        alignment: 'center',

                    }, {
                        caption: 'P',
                        dataField: 'E17',
                        alignment: 'center',
                    }, {
                        caption: 'JML',
                        dataField: 'E18',
                        alignment: 'center',
                    }],
                },
                {
                    caption: 'USP',
                    alignment: 'center',
                    columns: [{
                        caption: 'L',
                        dataField: 'E19',
                        alignment: 'center',

                    }, {
                        caption: 'P',
                        dataField: 'E20',
                        alignment: 'center',
                    }, {
                        caption: 'JML',
                        dataField: 'E21',
                        alignment: 'center',
                    }],
                },
                {
                    caption: 'L',
                    dataField: 'E22',
                    alignment: 'center',

                },
                {
                    caption: 'P',
                    dataField: 'E23',
                    alignment: 'center',
                },
                {
                    caption: 'JML',
                    dataField: 'E24',
                    alignment: 'center',
                }
            ]
        },

        //=========================================================================
        _ColPenerimaPIP = {
            caption: 'Penerima PIP',
            alignment: 'left',
            columns: [{
                caption: 'L',
                dataField: 'F01',
                alignment: 'center',

            }, {
                caption: 'P',
                dataField: 'F02',
                alignment: 'center',

            }, {
                caption: 'JML',
                dataField: 'F03',
                alignment: 'center',
            }],
        },

        //=========================================================================
        _ColDomisili = {
            caption: 'Domisili',
            alignment: 'left',
            columns: [
                {
                    caption: 'Dalam Daerah',
                    alignment: 'center',
                    columns: [{
                        caption: 'L',
                        dataField: 'G01',
                        alignment: 'center',

                    }, {
                        caption: 'P',
                        dataField: 'G02',
                        alignment: 'center',
                    }, {
                        caption: 'JML',
                        dataField: 'G03',
                        alignment: 'center',
                    }],
                },
                {
                    caption: 'Luar Daerah',
                    alignment: 'center',
                    columns: [{
                        caption: 'L',
                        dataField: 'G04',
                        alignment: 'center',

                    }, {
                        caption: 'P',
                        dataField: 'G05',
                        alignment: 'center',
                    }, {
                        caption: 'JML',
                        dataField: 'G06',
                        alignment: 'center',
                    }],
                }
            ]
        },

        //=========================================================================
        _ColAgama = {
            caption: 'Agama',
            alignment: 'left',
            columns: [
                {
                    caption: 'Islam',
                    alignment: 'center',
                    columns: [{
                        caption: 'L',
                        dataField: 'H01',
                        alignment: 'center',

                    }, {
                        caption: 'P',
                        dataField: 'H02',
                        alignment: 'center',
                    }, {
                        caption: 'JML',
                        dataField: 'H03',
                        alignment: 'center',
                    }],
                },
                {
                    caption: 'Kristen',
                    alignment: 'center',
                    columns: [{
                        caption: 'L',
                        dataField: 'H04',
                        alignment: 'center',

                    }, {
                        caption: 'P',
                        dataField: 'H05',
                        alignment: 'center',
                    }, {
                        caption: 'JML',
                        dataField: 'H06',
                        alignment: 'center',
                    }],
                },
                {
                    caption: 'Katolik',
                    alignment: 'center',
                    columns: [{
                        caption: 'L',
                        dataField: 'H07',
                        alignment: 'center',

                    }, {
                        caption: 'P',
                        dataField: 'H08',
                        alignment: 'center',
                    }, {
                        caption: 'JML',
                        dataField: 'H09',
                        alignment: 'center',
                    }],
                },
                {
                    caption: 'Hindu',
                    alignment: 'center',
                    columns: [{
                        caption: 'L',
                        dataField: 'H10',
                        alignment: 'center',

                    }, {
                        caption: 'P',
                        dataField: 'H11',
                        alignment: 'center',
                    }, {
                        caption: 'JML',
                        dataField: 'H12',
                        alignment: 'center',
                    }],
                },
                {
                    caption: 'Budha',
                    alignment: 'center',
                    columns: [{
                        caption: 'L',
                        dataField: 'H13',
                        alignment: 'center',

                    }, {
                        caption: 'P',
                        dataField: 'H14',
                        alignment: 'center',
                    }, {
                        caption: 'JML',
                        dataField: 'H15',
                        alignment: 'center',
                    }],
                },
                {
                    caption: 'Kong Hu Cu',
                    alignment: 'center',
                    columns: [{
                        caption: 'L',
                        dataField: 'H16',
                        alignment: 'center',

                    }, {
                        caption: 'P',
                        dataField: 'H17',
                        alignment: 'center',
                    }, {
                        caption: 'JML',
                        dataField: 'H18',
                        alignment: 'center',
                    }],
                },
                {
                    caption: 'Kepercayaan',
                    alignment: 'center',
                    columns: [{
                        caption: 'L',
                        dataField: 'H19',
                        alignment: 'center',

                    }, {
                        caption: 'P',
                        dataField: 'H20',
                        alignment: 'center',
                    }, {
                        caption: 'JML',
                        dataField: 'H21',
                        alignment: 'center',
                    }],
                }
            ]
        },

        //=========================================================================
        _ColAsalSekolahLulusan = {
            caption: 'Asal Sekolah Lulusan',
            alignment: 'left',
            columns: [
                {
                    caption: 'TK',
                    alignment: 'center',
                    columns: [{
                        caption: 'L',
                        dataField: 'I01',
                        alignment: 'center',

                    }, {
                        caption: 'P',
                        dataField: 'I02',
                        alignment: 'center',
                    }, {
                        caption: 'JML',
                        dataField: 'I03',
                        alignment: 'center',
                    }],
                },
                {
                    caption: 'KB',
                    alignment: 'center',
                    columns: [{
                        caption: 'L',
                        dataField: 'I04',
                        alignment: 'center',

                    }, {
                        caption: 'P',
                        dataField: 'I05',
                        alignment: 'center',
                    }, {
                        caption: 'JML',
                        dataField: 'I06',
                        alignment: 'center',
                    }],
                },
                {
                    caption: 'TPA',
                    alignment: 'center',
                    columns: [{
                        caption: 'L',
                        dataField: 'I07',
                        alignment: 'center',

                    }, {
                        caption: 'P',
                        dataField: 'I08',
                        alignment: 'center',
                    }, {
                        caption: 'JML',
                        dataField: 'I09',
                        alignment: 'center',
                    }],
                },
            ]
        },

        //=========================================================================
        _ColUsia = {
            caption: 'Usia',
            alignment: 'left',
            columns: [
                {
                    caption: '<6 Tahun',
                    alignment: 'center',
                    columns: [{
                        caption: 'L',
                        dataField: 'J01',
                        alignment: 'center',

                    }, {
                        caption: 'P',
                        dataField: 'J02',
                        alignment: 'center',
                    }, {
                        caption: 'JML',
                        dataField: 'J03',
                        alignment: 'center',
                    }],
                },
                {
                    caption: '6 Tahun',
                    alignment: 'center',
                    columns: [{
                        caption: 'L',
                        dataField: 'J04',
                        alignment: 'center',

                    }, {
                        caption: 'P',
                        dataField: 'J05',
                        alignment: 'center',
                    }, {
                        caption: 'JML',
                        dataField: 'J06',
                        alignment: 'center',
                    }],
                },
                {
                    caption: '7 Tahun',
                    alignment: 'center',
                    columns: [{
                        caption: 'L',
                        dataField: 'J07',
                        alignment: 'center',

                    }, {
                        caption: 'P',
                        dataField: 'J08',
                        alignment: 'center',
                    }, {
                        caption: 'JML',
                        dataField: 'J09',
                        alignment: 'center',
                    }],
                },
                {
                    caption: '8 Tahun',
                    alignment: 'center',
                    columns: [{
                        caption: 'L',
                        dataField: 'J10',
                        alignment: 'center',

                    }, {
                        caption: 'P',
                        dataField: 'J11',
                        alignment: 'center',
                    }, {
                        caption: 'JML',
                        dataField: 'J12',
                        alignment: 'center',
                    }],
                },
                {
                    caption: '9 Tahun',
                    alignment: 'center',
                    columns: [{
                        caption: 'L',
                        dataField: 'J13',
                        alignment: 'center',

                    }, {
                        caption: 'P',
                        dataField: 'J14',
                        alignment: 'center',
                    }, {
                        caption: 'JML',
                        dataField: 'J15',
                        alignment: 'center',
                    }],
                },
                {
                    caption: '10 Tahun',
                    alignment: 'center',
                    columns: [{
                        caption: 'L',
                        dataField: 'J16',
                        alignment: 'center',

                    }, {
                        caption: 'P',
                        dataField: 'J17',
                        alignment: 'center',
                    }, {
                        caption: 'JML',
                        dataField: 'J18',
                        alignment: 'center',
                    }],
                },
                {
                    caption: '11 Tahun',
                    alignment: 'center',
                    columns: [{
                        caption: 'L',
                        dataField: 'J19',
                        alignment: 'center',

                    }, {
                        caption: 'P',
                        dataField: 'J20',
                        alignment: 'center',
                    }, {
                        caption: 'JML',
                        dataField: 'J21',
                        alignment: 'center',
                    }],
                },
                {
                    caption: '12 Tahun',
                    alignment: 'center',
                    columns: [{
                        caption: 'L',
                        dataField: 'J22',
                        alignment: 'center',

                    }, {
                        caption: 'P',
                        dataField: 'J23',
                        alignment: 'center',
                    }, {
                        caption: 'JML',
                        dataField: 'J24',
                        alignment: 'center',
                    }],
                },
                {
                    caption: '>12 Tahun',
                    alignment: 'center',
                    columns: [{
                        caption: 'L',
                        dataField: 'J25',
                        alignment: 'center',

                    }, {
                        caption: 'P',
                        dataField: 'J26',
                        alignment: 'center',
                    }, {
                        caption: 'JML',
                        dataField: 'J27',
                        alignment: 'center',
                    }],
                }
            ]
        },

        //========================================================================================================
        _SumRombel = {
            column: 'Z01',
            summaryType: 'count',
            displayFormat: 'Total : ( {0} Rombel )',
            alignByColumn: true,
            showInColumn: 'A01',
            showInGroupFooter: true,
        },

        //=========================================================================
        _SumAnggotaRombel = [{
            //L
            column: 'B01',
            summaryType: 'sum',
            showInGroupFooter: true,
            alignByColumn: true,
            displayFormat: '{0}',
            customizeText: function (e) {
                return e.value <= 0 ? "-" : e.value;
            },
        },
        {
            //P
            column: 'B02',
            summaryType: 'sum',
            showInGroupFooter: true,
            alignByColumn: true,
            displayFormat: '{0}',
            customizeText: function (e) {
                return e.value <= 0 ? "-" : e.value;
            },
        },
        {
            //JML
            column: 'B03',
            summaryType: 'sum',
            showInGroupFooter: true,
            alignByColumn: true,
            displayFormat: '{0}',
            customizeText: function (e) {
                return e.value <= 0 ? "-" : e.value;
            },
        }],

        //=========================================================================
        _SumBerkebutuhanKhusus = [{
            column: 'C01',
            summaryType: 'sum',
            showInGroupFooter: true,
            alignByColumn: true,
            displayFormat: '{0}',
            customizeText: function (e) {
                return e.value <= 0 ? "-" : e.value;
            },
        },
        {
            column: 'C02',
            summaryType: 'sum',
            showInGroupFooter: true,
            alignByColumn: true,
            displayFormat: '{0}',
            customizeText: function (e) {
                return e.value <= 0 ? "-" : e.value;
            },
        },
        {
            column: 'C03',
            summaryType: 'sum',
            showInGroupFooter: true,
            alignByColumn: true,
            displayFormat: '{0}',
            customizeText: function (e) {
                return e.value <= 0 ? "-" : e.value;
            },
        }],

        //=========================================================================
        _SumYatim = [{
            column: 'D01',
            summaryType: 'sum',
            showInGroupFooter: true,
            alignByColumn: true,
            displayFormat: '{0}',
            customizeText: function (e) {
                return e.value <= 0 ? "-" : e.value;
            },
        },
        {
            column: 'D02',
            summaryType: 'sum',
            showInGroupFooter: true,
            alignByColumn: true,
            displayFormat: '{0}',
            customizeText: function (e) {
                return e.value <= 0 ? "-" : e.value;
            },
        },
        {
            column: 'D03',
            summaryType: 'sum',
            showInGroupFooter: true,
            alignByColumn: true,
            displayFormat: '{0}',
            customizeText: function (e) {
                return e.value <= 0 ? "-" : e.value;
            },
        }],

        //=========================================================================
        _SumPiatu = [{
            column: 'D04',
            summaryType: 'sum',
            showInGroupFooter: true,
            alignByColumn: true,
            displayFormat: '{0}',
            customizeText: function (e) {
                return e.value <= 0 ? "-" : e.value;
            },
        },
        {
            column: 'D05',
            summaryType: 'sum',
            showInGroupFooter: true,
            alignByColumn: true,
            displayFormat: '{0}',
            customizeText: function (e) {
                return e.value <= 0 ? "-" : e.value;
            },
        },
        {
            column: 'D06',
            summaryType: 'sum',
            showInGroupFooter: true,
            alignByColumn: true,
            displayFormat: '{0}',
            customizeText: function (e) {
                return e.value <= 0 ? "-" : e.value;
            },
        }],

        //=========================================================================
        _SumYatimPiatu = [{
            column: 'D07',
            summaryType: 'sum',
            showInGroupFooter: true,
            alignByColumn: true,
            displayFormat: '{0}',
            customizeText: function (e) {
                return e.value <= 0 ? "-" : e.value;
            },
        },
        {
            column: 'D08',
            summaryType: 'sum',
            showInGroupFooter: true,
            alignByColumn: true,
            displayFormat: '{0}',
            customizeText: function (e) {
                return e.value <= 0 ? "-" : e.value;
            },
        },
        {
            column: 'D09',
            summaryType: 'sum',
            showInGroupFooter: true,
            alignByColumn: true,
            displayFormat: '{0}',
            customizeText: function (e) {
                return e.value <= 0 ? "-" : e.value;
            },
        }],

        //=========================================================================
        _SumKIP = [{
            column: 'E01',
            summaryType: 'sum',
            showInGroupFooter: true,
            alignByColumn: true,
            displayFormat: '{0}',
            customizeText: function (e) {
                return e.value <= 0 ? "-" : e.value;
            },
        },
        {
            column: 'E02',
            summaryType: 'sum',
            showInGroupFooter: true,
            alignByColumn: true,
            displayFormat: '{0}',
            customizeText: function (e) {
                return e.value <= 0 ? "-" : e.value;
            },
        },
        {
            column: 'E03',
            summaryType: 'sum',
            showInGroupFooter: true,
            alignByColumn: true,
            displayFormat: '{0}',
            customizeText: function (e) {
                return e.value <= 0 ? "-" : e.value;
            },
        }],

        //=========================================================================
        _SumPKH = [{
            column: 'E04',
            summaryType: 'sum',
            showInGroupFooter: true,
            alignByColumn: true,
            displayFormat: '{0}',
            customizeText: function (e) {
                return e.value <= 0 ? "-" : e.value;
            },
        },
        {
            column: 'E05',
            summaryType: 'sum',
            showInGroupFooter: true,
            alignByColumn: true,
            displayFormat: '{0}',
            customizeText: function (e) {
                return e.value <= 0 ? "-" : e.value;
            },
        },
        {
            column: 'E06',
            summaryType: 'sum',
            showInGroupFooter: true,
            alignByColumn: true,
            displayFormat: '{0}',
            customizeText: function (e) {
                return e.value <= 0 ? "-" : e.value;
            },
        }],

        //=========================================================================
        _SumKPS = [{
            column: 'E07',
            summaryType: 'sum',
            showInGroupFooter: true,
            alignByColumn: true,
            displayFormat: '{0}',
            customizeText: function (e) {
                return e.value <= 0 ? "-" : e.value;
            },
        },
        {
            column: 'E08',
            summaryType: 'sum',
            showInGroupFooter: true,
            alignByColumn: true,
            displayFormat: '{0}',
            customizeText: function (e) {
                return e.value <= 0 ? "-" : e.value;
            },
        },
        {
            column: 'E09',
            summaryType: 'sum',
            showInGroupFooter: true,
            alignByColumn: true,
            displayFormat: '{0}',
            customizeText: function (e) {
                return e.value <= 0 ? "-" : e.value;
            },
        }],

        //=========================================================================
        _SumKKS = [{
            column: 'E10',
            summaryType: 'sum',
            showInGroupFooter: true,
            alignByColumn: true,
            displayFormat: '{0}',
            customizeText: function (e) {
                return e.value <= 0 ? "-" : e.value;
            },
        },
        {
            column: 'E11',
            summaryType: 'sum',
            showInGroupFooter: true,
            alignByColumn: true,
            displayFormat: '{0}',
            customizeText: function (e) {
                return e.value <= 0 ? "-" : e.value;
            },
        },
        {
            column: 'E12',
            summaryType: 'sum',
            showInGroupFooter: true,
            alignByColumn: true,
            displayFormat: '{0}',
            customizeText: function (e) {
                return e.value <= 0 ? "-" : e.value;
            },
        }],

        //=========================================================================
        _SumBestari = [{
            column: 'E13',
            summaryType: 'sum',
            showInGroupFooter: true,
            alignByColumn: true,
            displayFormat: '{0}',
            customizeText: function (e) {
                return e.value <= 0 ? "-" : e.value;
            },
        },
        {
            column: 'E14',
            summaryType: 'sum',
            showInGroupFooter: true,
            alignByColumn: true,
            displayFormat: '{0}',
            customizeText: function (e) {
                return e.value <= 0 ? "-" : e.value;
            },
        },
        {
            column: 'E15',
            summaryType: 'sum',
            showInGroupFooter: true,
            alignByColumn: true,
            displayFormat: '{0}',
            customizeText: function (e) {
                return e.value <= 0 ? "-" : e.value;
            },
        }],

        //=========================================================================
        _SumPYBK = [{
            column: 'E16',
            summaryType: 'sum',
            showInGroupFooter: true,
            alignByColumn: true,
            displayFormat: '{0}',
            customizeText: function (e) {
                return e.value <= 0 ? "-" : e.value;
            },
        },
        {
            column: 'E17',
            summaryType: 'sum',
            showInGroupFooter: true,
            alignByColumn: true,
            displayFormat: '{0}',
            customizeText: function (e) {
                return e.value <= 0 ? "-" : e.value;
            },
        },
        {
            column: 'E18',
            summaryType: 'sum',
            showInGroupFooter: true,
            alignByColumn: true,
            displayFormat: '{0}',
            customizeText: function (e) {
                return e.value <= 0 ? "-" : e.value;
            },
        }],

        //=========================================================================
        _SumUSP = [{
            column: 'E19',
            summaryType: 'sum',
            showInGroupFooter: true,
            alignByColumn: true,
            displayFormat: '{0}',
            customizeText: function (e) {
                return e.value <= 0 ? "-" : e.value;
            },
        },
        {
            column: 'E20',
            summaryType: 'sum',
            showInGroupFooter: true,
            alignByColumn: true,
            displayFormat: '{0}',
            customizeText: function (e) {
                return e.value <= 0 ? "-" : e.value;
            },
        },
        {
            column: 'E21',
            summaryType: 'sum',
            showInGroupFooter: true,
            alignByColumn: true,
            displayFormat: '{0}',
            customizeText: function (e) {
                return e.value <= 0 ? "-" : e.value;
            },
        }],

        //=========================================================================
        _SumRekomPIP = [{
            column: 'E22',
            summaryType: 'sum',
            showInGroupFooter: true,
            alignByColumn: true,
            displayFormat: '{0}',
            customizeText: function (e) {
                return e.value <= 0 ? "-" : e.value;
            },
        },
        {
            column: 'E23',
            summaryType: 'sum',
            showInGroupFooter: true,
            alignByColumn: true,
            displayFormat: '{0}',
            customizeText: function (e) {
                return e.value <= 0 ? "-" : e.value;
            },
        },
        {
            column: 'E24',
            summaryType: 'sum',
            showInGroupFooter: true,
            alignByColumn: true,
            displayFormat: '{0}',
            customizeText: function (e) {
                return e.value <= 0 ? "-" : e.value;
            },
        }],

        //=========================================================================
        _SumPIP = [{
            column: 'F01',
            summaryType: 'sum',
            showInGroupFooter: true,
            alignByColumn: true,
            displayFormat: '{0}',
            customizeText: function (e) {
                return e.value <= 0 ? "-" : e.value;
            },
        },
        {
            column: 'F02',
            summaryType: 'sum',
            showInGroupFooter: true,
            alignByColumn: true,
            displayFormat: '{0}',
            customizeText: function (e) {
                return e.value <= 0 ? "-" : e.value;
            },
        },
        {
            column: 'F03',
            summaryType: 'sum',
            showInGroupFooter: true,
            alignByColumn: true,
            displayFormat: '{0}',
            customizeText: function (e) {
                return e.value <= 0 ? "-" : e.value;
            },
        }],

        //=========================================================================
        _SumDomDalamDaerah = [{
            column: 'G01',
            summaryType: 'sum',
            showInGroupFooter: true,
            alignByColumn: true,
            displayFormat: '{0}',
            customizeText: function (e) {
                return e.value <= 0 ? "-" : e.value;
            },
        },
        {
            column: 'G02',
            summaryType: 'sum',
            showInGroupFooter: true,
            alignByColumn: true,
            displayFormat: '{0}',
            customizeText: function (e) {
                return e.value <= 0 ? "-" : e.value;
            },
        },
        {
            column: 'G03',
            summaryType: 'sum',
            showInGroupFooter: true,
            alignByColumn: true,
            displayFormat: '{0}',
            customizeText: function (e) {
                return e.value <= 0 ? "-" : e.value;
            },
        }],

        //=========================================================================
        _SumDomLuarDaerah = [{
            column: 'G04',
            summaryType: 'sum',
            showInGroupFooter: true,
            alignByColumn: true,
            displayFormat: '{0}',
            customizeText: function (e) {
                return e.value <= 0 ? "-" : e.value;
            },
        },
        {
            column: 'G05',
            summaryType: 'sum',
            showInGroupFooter: true,
            alignByColumn: true,
            displayFormat: '{0}',
            customizeText: function (e) {
                return e.value <= 0 ? "-" : e.value;
            },
        },
        {
            column: 'G06',
            summaryType: 'sum',
            showInGroupFooter: true,
            alignByColumn: true,
            displayFormat: '{0}',
            customizeText: function (e) {
                return e.value <= 0 ? "-" : e.value;
            },
        }],

        //=========================================================================
        _SumIslam = [{
            column: 'H01',
            summaryType: 'sum',
            showInGroupFooter: true,
            alignByColumn: true,
            displayFormat: '{0}',
            customizeText: function (e) {
                return e.value <= 0 ? "-" : e.value;
            },
        },
        {
            column: 'H02',
            summaryType: 'sum',
            showInGroupFooter: true,
            alignByColumn: true,
            displayFormat: '{0}',
            customizeText: function (e) {
                return e.value <= 0 ? "-" : e.value;
            },
        },
        {
            column: 'H03',
            summaryType: 'sum',
            showInGroupFooter: true,
            alignByColumn: true,
            displayFormat: '{0}',
            customizeText: function (e) {
                return e.value <= 0 ? "-" : e.value;
            },
        }],

        //=========================================================================
        _SumKristen = [{
            column: 'H04',
            summaryType: 'sum',
            showInGroupFooter: true,
            alignByColumn: true,
            displayFormat: '{0}',
            customizeText: function (e) {
                return e.value <= 0 ? "-" : e.value;
            },
        },
        {
            column: 'H05',
            summaryType: 'sum',
            showInGroupFooter: true,
            alignByColumn: true,
            displayFormat: '{0}',
            customizeText: function (e) {
                return e.value <= 0 ? "-" : e.value;
            },
        },
        {
            column: 'H06',
            summaryType: 'sum',
            showInGroupFooter: true,
            alignByColumn: true,
            displayFormat: '{0}',
            customizeText: function (e) {
                return e.value <= 0 ? "-" : e.value;
            },
        }],

        //=========================================================================
        _SumKatolik = [{
            column: 'H07',
            summaryType: 'sum',
            showInGroupFooter: true,
            alignByColumn: true,
            displayFormat: '{0}',
            customizeText: function (e) {
                return e.value <= 0 ? "-" : e.value;
            },
        },
        {
            column: 'H08',
            summaryType: 'sum',
            showInGroupFooter: true,
            alignByColumn: true,
            displayFormat: '{0}',
            customizeText: function (e) {
                return e.value <= 0 ? "-" : e.value;
            },
        },
        {
            column: 'H09',
            summaryType: 'sum',
            showInGroupFooter: true,
            alignByColumn: true,
            displayFormat: '{0}',
            customizeText: function (e) {
                return e.value <= 0 ? "-" : e.value;
            },
        }],

        //=========================================================================
        _SumHindu = [{
            column: 'H10',
            summaryType: 'sum',
            showInGroupFooter: true,
            alignByColumn: true,
            displayFormat: '{0}',
            customizeText: function (e) {
                return e.value <= 0 ? "-" : e.value;
            },
        },
        {
            column: 'H11',
            summaryType: 'sum',
            showInGroupFooter: true,
            alignByColumn: true,
            displayFormat: '{0}',
            customizeText: function (e) {
                return e.value <= 0 ? "-" : e.value;
            },
        },
        {
            column: 'H12',
            summaryType: 'sum',
            showInGroupFooter: true,
            alignByColumn: true,
            displayFormat: '{0}',
            customizeText: function (e) {
                return e.value <= 0 ? "-" : e.value;
            },
        }],

        //=========================================================================
        _SumBudha = [{
            column: 'H13',
            summaryType: 'sum',
            showInGroupFooter: true,
            alignByColumn: true,
            displayFormat: '{0}',
            customizeText: function (e) {
                return e.value <= 0 ? "-" : e.value;
            },
        },
        {
            column: 'H14',
            summaryType: 'sum',
            showInGroupFooter: true,
            alignByColumn: true,
            displayFormat: '{0}',
            customizeText: function (e) {
                return e.value <= 0 ? "-" : e.value;
            },
        },
        {
            column: 'H15',
            summaryType: 'sum',
            showInGroupFooter: true,
            alignByColumn: true,
            displayFormat: '{0}',
            customizeText: function (e) {
                return e.value <= 0 ? "-" : e.value;
            },
        }],

        //=========================================================================
        _SumKongHuCu = [{
            column: 'H16',
            summaryType: 'sum',
            showInGroupFooter: true,
            alignByColumn: true,
            displayFormat: '{0}',
            customizeText: function (e) {
                return e.value <= 0 ? "-" : e.value;
            },
        },
        {
            column: 'H17',
            summaryType: 'sum',
            showInGroupFooter: true,
            alignByColumn: true,
            displayFormat: '{0}',
            customizeText: function (e) {
                return e.value <= 0 ? "-" : e.value;
            },
        },
        {
            column: 'H18',
            summaryType: 'sum',
            showInGroupFooter: true,
            alignByColumn: true,
            displayFormat: '{0}',
            customizeText: function (e) {
                return e.value <= 0 ? "-" : e.value;
            },
        }],

        //=========================================================================
        _SumKepercayaan = [{
            column: 'H19',
            summaryType: 'sum',
            showInGroupFooter: true,
            alignByColumn: true,
            displayFormat: '{0}',
            customizeText: function (e) {
                return e.value <= 0 ? "-" : e.value;
            },
        },
        {
            column: 'H20',
            summaryType: 'sum',
            showInGroupFooter: true,
            alignByColumn: true,
            displayFormat: '{0}',
            customizeText: function (e) {
                return e.value <= 0 ? "-" : e.value;
            },
        },
        {
            column: 'H21',
            summaryType: 'sum',
            showInGroupFooter: true,
            alignByColumn: true,
            displayFormat: '{0}',
            customizeText: function (e) {
                return e.value <= 0 ? "-" : e.value;
            },
        }],

        //=========================================================================
        _SumTK = [{
            column: 'I01',
            summaryType: 'sum',
            showInGroupFooter: true,
            alignByColumn: true,
            displayFormat: '{0}',
            customizeText: function (e) {
                return e.value <= 0 ? "-" : e.value;
            },
        },
        {
            column: 'I02',
            summaryType: 'sum',
            showInGroupFooter: true,
            alignByColumn: true,
            displayFormat: '{0}',
            customizeText: function (e) {
                return e.value <= 0 ? "-" : e.value;
            },
        },
        {
            column: 'I03',
            summaryType: 'sum',
            showInGroupFooter: true,
            alignByColumn: true,
            displayFormat: '{0}',
            customizeText: function (e) {
                return e.value <= 0 ? "-" : e.value;
            },
        }],

        //=========================================================================
        _SumKB = [{
            column: 'I04',
            summaryType: 'sum',
            showInGroupFooter: true,
            alignByColumn: true,
            displayFormat: '{0}',
            customizeText: function (e) {
                return e.value <= 0 ? "-" : e.value;
            },
        },
        {
            column: 'I05',
            summaryType: 'sum',
            showInGroupFooter: true,
            alignByColumn: true,
            displayFormat: '{0}',
            customizeText: function (e) {
                return e.value <= 0 ? "-" : e.value;
            },
        },
        {
            column: 'I06',
            summaryType: 'sum',
            showInGroupFooter: true,
            alignByColumn: true,
            displayFormat: '{0}',
            customizeText: function (e) {
                return e.value <= 0 ? "-" : e.value;
            },
        }],

        //=========================================================================
        _SumTPA = [{
            column: 'I07',
            summaryType: 'sum',
            showInGroupFooter: true,
            alignByColumn: true,
            displayFormat: '{0}',
            customizeText: function (e) {
                return e.value <= 0 ? "-" : e.value;
            },
        },
        {
            column: 'I08',
            summaryType: 'sum',
            showInGroupFooter: true,
            alignByColumn: true,
            displayFormat: '{0}',
            customizeText: function (e) {
                return e.value <= 0 ? "-" : e.value;
            },
        },
        {
            column: 'I09',
            summaryType: 'sum',
            showInGroupFooter: true,
            alignByColumn: true,
            displayFormat: '{0}',
            customizeText: function (e) {
                return e.value <= 0 ? "-" : e.value;
            },
        }],

        //=========================================================================
        _SumLess6Th = [{
            column: 'J01',
            summaryType: 'sum',
            showInGroupFooter: true,
            alignByColumn: true,
            displayFormat: '{0}',
            customizeText: function (e) {
                return e.value <= 0 ? "-" : e.value;
            },
        },
        {
            column: 'J02',
            summaryType: 'sum',
            showInGroupFooter: true,
            alignByColumn: true,
            displayFormat: '{0}',
            customizeText: function (e) {
                return e.value <= 0 ? "-" : e.value;
            },
        },
        {
            column: 'J03',
            summaryType: 'sum',
            showInGroupFooter: true,
            alignByColumn: true,
            displayFormat: '{0}',
            customizeText: function (e) {
                return e.value <= 0 ? "-" : e.value;
            },
        }],

        //=========================================================================
        _Sum6Th = [{
            column: 'J04',
            summaryType: 'sum',
            showInGroupFooter: true,
            alignByColumn: true,
            displayFormat: '{0}',
            customizeText: function (e) {
                return e.value <= 0 ? "-" : e.value;
            },
        },
        {
            column: 'J05',
            summaryType: 'sum',
            showInGroupFooter: true,
            alignByColumn: true,
            displayFormat: '{0}',
            customizeText: function (e) {
                return e.value <= 0 ? "-" : e.value;
            },
        },
        {
            column: 'J06',
            summaryType: 'sum',
            showInGroupFooter: true,
            alignByColumn: true,
            displayFormat: '{0}',
            customizeText: function (e) {
                return e.value <= 0 ? "-" : e.value;
            },
        }],

        //=========================================================================
        _Sum7Th = [{
            column: 'J07',
            summaryType: 'sum',
            showInGroupFooter: true,
            alignByColumn: true,
            displayFormat: '{0}',
            customizeText: function (e) {
                return e.value <= 0 ? "-" : e.value;
            },
        },
        {
            column: 'J08',
            summaryType: 'sum',
            showInGroupFooter: true,
            alignByColumn: true,
            displayFormat: '{0}',
            customizeText: function (e) {
                return e.value <= 0 ? "-" : e.value;
            },
        },
        {
            column: 'J09',
            summaryType: 'sum',
            showInGroupFooter: true,
            alignByColumn: true,
            displayFormat: '{0}',
            customizeText: function (e) {
                return e.value <= 0 ? "-" : e.value;
            },
        }],

        //=========================================================================
        _Sum8Th = [{
            column: 'J10',
            summaryType: 'sum',
            showInGroupFooter: true,
            alignByColumn: true,
            displayFormat: '{0}',
            customizeText: function (e) {
                return e.value <= 0 ? "-" : e.value;
            },
        },
        {
            column: 'J11',
            summaryType: 'sum',
            showInGroupFooter: true,
            alignByColumn: true,
            displayFormat: '{0}',
            customizeText: function (e) {
                return e.value <= 0 ? "-" : e.value;
            },
        },
        {
            column: 'J12',
            summaryType: 'sum',
            showInGroupFooter: true,
            alignByColumn: true,
            displayFormat: '{0}',
            customizeText: function (e) {
                return e.value <= 0 ? "-" : e.value;
            },
        }],

        //=========================================================================
        _Sum9Th = [{
            column: 'J13',
            summaryType: 'sum',
            showInGroupFooter: true,
            alignByColumn: true,
            displayFormat: '{0}',
            customizeText: function (e) {
                return e.value <= 0 ? "-" : e.value;
            },
        },
        {
            column: 'J14',
            summaryType: 'sum',
            showInGroupFooter: true,
            alignByColumn: true,
            displayFormat: '{0}',
            customizeText: function (e) {
                return e.value <= 0 ? "-" : e.value;
            },
        },
        {
            column: 'J15',
            summaryType: 'sum',
            showInGroupFooter: true,
            alignByColumn: true,
            displayFormat: '{0}',
            customizeText: function (e) {
                return e.value <= 0 ? "-" : e.value;
            },
        }],

        //=========================================================================
        _Sum10Th = [{
            column: 'J16',
            summaryType: 'sum',
            showInGroupFooter: true,
            alignByColumn: true,
            displayFormat: '{0}',
            customizeText: function (e) {
                return e.value <= 0 ? "-" : e.value;
            },
        },
        {
            column: 'J17',
            summaryType: 'sum',
            showInGroupFooter: true,
            alignByColumn: true,
            displayFormat: '{0}',
            customizeText: function (e) {
                return e.value <= 0 ? "-" : e.value;
            },
        },
        {
            column: 'J18',
            summaryType: 'sum',
            showInGroupFooter: true,
            alignByColumn: true,
            displayFormat: '{0}',
            customizeText: function (e) {
                return e.value <= 0 ? "-" : e.value;
            },
        }],

        //=========================================================================
        _Sum11Th = [{
            column: 'J19',
            summaryType: 'sum',
            showInGroupFooter: true,
            alignByColumn: true,
            displayFormat: '{0}',
            customizeText: function (e) {
                return e.value <= 0 ? "-" : e.value;
            },
        },
        {
            column: 'J20',
            summaryType: 'sum',
            showInGroupFooter: true,
            alignByColumn: true,
            displayFormat: '{0}',
            customizeText: function (e) {
                return e.value <= 0 ? "-" : e.value;
            },
        },
        {
            column: 'J21',
            summaryType: 'sum',
            showInGroupFooter: true,
            alignByColumn: true,
            displayFormat: '{0}',
            customizeText: function (e) {
                return e.value <= 0 ? "-" : e.value;
            },
        }],

        //=========================================================================
        _Sum12Th = [{
            column: 'J22',
            summaryType: 'sum',
            showInGroupFooter: true,
            alignByColumn: true,
            displayFormat: '{0}',
            customizeText: function (e) {
                return e.value <= 0 ? "-" : e.value;
            },
        },
        {
            column: 'J23',
            summaryType: 'sum',
            showInGroupFooter: true,
            alignByColumn: true,
            displayFormat: '{0}',
            customizeText: function (e) {
                return e.value <= 0 ? "-" : e.value;
            },
        },
        {
            column: 'J24',
            summaryType: 'sum',
            showInGroupFooter: true,
            alignByColumn: true,
            displayFormat: '{0}',
            customizeText: function (e) {
                return e.value <= 0 ? "-" : e.value;
            },
        }],

        //=========================================================================
        _SumUp12Th = [{
            column: 'J25',
            summaryType: 'sum',
            showInGroupFooter: true,
            alignByColumn: true,
            displayFormat: '{0}',
            customizeText: function (e) {
                return e.value <= 0 ? "-" : e.value;
            },
        },
        {
            column: 'J26',
            summaryType: 'sum',
            showInGroupFooter: true,
            alignByColumn: true,
            displayFormat: '{0}',
            customizeText: function (e) {
                return e.value <= 0 ? "-" : e.value;
            },
        },
        {
            column: 'J27',
            summaryType: 'sum',
            showInGroupFooter: true,
            alignByColumn: true,
            displayFormat: '{0}',
            customizeText: function (e) {
                return e.value <= 0 ? "-" : e.value;
            },
        }],


        //========================================================================================================
        _TbDashboard = [
            _ColTingkat,
            _ColRombel,
            _ColAnggotaRombel,
            _ColBerkebutuhanKhusus,
            _ColStatusSosialAnak,
            _ColRekomendasiPIP,
            _ColPenerimaPIP,
            _ColDomisili,
            _ColAgama,
            _ColAsalSekolahLulusan,
            _ColUsia
        ],


        _TBSummaryDashboard = {

            groupItems: [
                _SumRombel,
                _SumAnggotaRombel[0], _SumAnggotaRombel[1], _SumAnggotaRombel[2],
                _SumBerkebutuhanKhusus[0], _SumBerkebutuhanKhusus[1], _SumBerkebutuhanKhusus[2],
                _SumYatim[0], _SumYatim[1], _SumYatim[2],
                _SumPiatu[0], _SumPiatu[1], _SumPiatu[2],
                _SumYatimPiatu[0], _SumYatimPiatu[1], _SumYatimPiatu[2],
                _SumKIP[0], _SumKIP[1], _SumKIP[2],
                _SumPKH[0], _SumPKH[1], _SumPKH[2],
                _SumKPS[0], _SumKPS[1], _SumKPS[2],
                _SumKKS[0], _SumKKS[1], _SumKKS[2],
                _SumBestari[0], _SumBestari[1], _SumBestari[2],
                _SumPYBK[0], _SumPYBK[1], _SumPYBK[2],
                _SumUSP[0], _SumUSP[1], _SumUSP[2],
                _SumRekomPIP[0], _SumRekomPIP[1], _SumRekomPIP[2],
                _SumPIP[0], _SumPIP[1], _SumPIP[2],
                _SumDomDalamDaerah[0], _SumDomDalamDaerah[1], _SumDomDalamDaerah[2],
                _SumDomLuarDaerah[0], _SumDomLuarDaerah[1], _SumDomLuarDaerah[2],
                _SumIslam[0], _SumIslam[1], _SumIslam[2],
                _SumKristen[0], _SumKristen[1], _SumKristen[2],
                _SumKatolik[0], _SumKatolik[1], _SumKatolik[2],
                _SumHindu[0], _SumHindu[1], _SumHindu[2],
                _SumBudha[0], _SumBudha[1], _SumBudha[2],
                _SumKongHuCu[0], _SumKongHuCu[1], _SumKongHuCu[2],
                _SumKepercayaan[0], _SumKepercayaan[1], _SumKepercayaan[2],
                _SumTK[0], _SumTK[1], _SumTK[2],
                _SumKB[0], _SumKB[1], _SumKB[2],
                _SumTPA[0], _SumTPA[1], _SumTPA[2],
                _SumLess6Th[0], _SumLess6Th[1], _SumLess6Th[2],
                _Sum6Th[0], _Sum6Th[1], _Sum6Th[2],
                _Sum7Th[0], _Sum7Th[1], _Sum7Th[2],
                _Sum8Th[0], _Sum8Th[1], _Sum8Th[2],
                _Sum9Th[0], _Sum9Th[1], _Sum9Th[2],
                _Sum10Th[0], _Sum10Th[1], _Sum10Th[2],
                _Sum11Th[0], _Sum11Th[1], _Sum11Th[2],
                _Sum12Th[0], _Sum12Th[1], _Sum12Th[2],
                _SumUp12Th[0], _SumUp12Th[1], _SumUp12Th[2]
            ],
            totalItems: [
                _SumRombel,
                _SumAnggotaRombel[0], _SumAnggotaRombel[1], _SumAnggotaRombel[2],
                _SumBerkebutuhanKhusus[0], _SumBerkebutuhanKhusus[1], _SumBerkebutuhanKhusus[2],
                _SumYatim[0], _SumYatim[1], _SumYatim[2],
                _SumPiatu[0], _SumPiatu[1], _SumPiatu[2],
                _SumYatimPiatu[0], _SumYatimPiatu[1], _SumYatimPiatu[2],
                _SumKIP[0], _SumKIP[1], _SumKIP[2],
                _SumPKH[0], _SumPKH[1], _SumPKH[2],
                _SumKPS[0], _SumKPS[1], _SumKPS[2],
                _SumKKS[0], _SumKKS[1], _SumKKS[2],
                _SumBestari[0], _SumBestari[1], _SumBestari[2],
                _SumPYBK[0], _SumPYBK[1], _SumPYBK[2],
                _SumUSP[0], _SumUSP[1], _SumUSP[2],
                _SumRekomPIP[0], _SumRekomPIP[1], _SumRekomPIP[2],
                _SumPIP[0], _SumPIP[1], _SumPIP[2],
                _SumDomDalamDaerah[0], _SumDomDalamDaerah[1], _SumDomDalamDaerah[2],
                _SumDomLuarDaerah[0], _SumDomLuarDaerah[1], _SumDomLuarDaerah[2],
                _SumIslam[0], _SumIslam[1], _SumIslam[2],
                _SumKristen[0], _SumKristen[1], _SumKristen[2],
                _SumKatolik[0], _SumKatolik[1], _SumKatolik[2],
                _SumHindu[0], _SumHindu[1], _SumHindu[2],
                _SumBudha[0], _SumBudha[1], _SumBudha[2],
                _SumKongHuCu[0], _SumKongHuCu[1], _SumKongHuCu[2],
                _SumKepercayaan[0], _SumKepercayaan[1], _SumKepercayaan[2],
                _SumTK[0], _SumTK[1], _SumTK[2],
                _SumKB[0], _SumKB[1], _SumKB[2],
                _SumTPA[0], _SumTPA[1], _SumTPA[2],
                _SumLess6Th[0], _SumLess6Th[1], _SumLess6Th[2],
                _Sum6Th[0], _Sum6Th[1], _Sum6Th[2],
                _Sum7Th[0], _Sum7Th[1], _Sum7Th[2],
                _Sum8Th[0], _Sum8Th[1], _Sum8Th[2],
                _Sum9Th[0], _Sum9Th[1], _Sum9Th[2],
                _Sum10Th[0], _Sum10Th[1], _Sum10Th[2],
                _Sum11Th[0], _Sum11Th[1], _Sum11Th[2],
                _Sum12Th[0], _Sum12Th[1], _Sum12Th[2],
                _SumUp12Th[0], _SumUp12Th[1], _SumUp12Th[2],
            ],
        },

        _TbInfoPd = [
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
                    {
                        caption: 'ID Rombel',
                        dataField: 'a01',
                        sortOrder: 'asc',
                        // hidingPriority: 0,
                    },
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
            },
            {
                caption: 'Riwayat Rombongan Belajar',
                columns: [{
                    caption: 'Usia',
                    dataField: 'n01',

                }, {
                    caption: 'Status',
                    dataField: 'n02',

                }, {
                    caption: 'Nomor Dokumen Non Aktif',
                    dataField: 'n03',

                }, {
                    caption: 'Tertanggal Non Aktif',
                    dataField: 'n04',
                    dataType: 'date',
                    format: "dd MMMM yyyy",

                }, {
                    caption: 'Satuan Pendidikan Lanjutan',
                    dataField: 'n05',
                }]
            },
            {
                caption: 'Verval Peserta Didik',
                columns: [{
                    caption: 'NISN',
                    dataField: 'o01',

                }, {
                    caption: 'Nama',
                    dataField: 'o02',

                }, {
                    caption: 'NIK',
                    dataField: 'o03',

                }, {
                    caption: 'Tempat Lahir',
                    dataField: 'o04',

                }, {
                    caption: 'Tanggal Lahir',
                    dataField: 'o05',

                }]
            },
            {
                caption: 'Verval Ibu Kandung',
                columns: [{
                    caption: 'Nama',
                    dataField: 'p01',

                }, {
                    caption: 'NIK',
                    dataField: 'p02',

                }]
            },
            {
                caption: 'Verval Ayah Kandung',
                columns: [{
                    caption: 'Nama',
                    dataField: 'q01',

                }, {
                    caption: 'NIK',
                    dataField: 'q02',

                }]
            },
            {
                caption: 'Status Verval',
                dataField: 'r01',
            }
        ],

        //===============================================================================
        _DashboardPesertaDidik = $('#DashboardPesertaDidik').dxDataGrid({
            keyExpr: 'A01',
            columns: _TbDashboard,
            columnHidingEnabled: false,
            allowColumnReordering: true,
            allowColumnResizing: true,
            columnResizingMode: 'widget',
            columnAutoWidth: true,
            columnChooser: {
                allowSearch: false,
                //emptyPanelText: "Drag a column here to hide it",
                enabled: true,
                //height:260,
                mode: "select",
                searchTimeout: null,
                sortOrder: undefined,
                title: "Column Chooser",
                //width:250,
            },
            columnFixing: {
                enabled: true,
            },
            customizeColumns: function (columns) {
                columns.forEach(function (DataCell, DataIndex) {
                    // col.calculateDisplayValue = function (rowData) {
                    //   return rowData[col.dataField] == 0 ? "-" : rowData[col.dataField];
                    // };
                    DataCell.cellTemplate = (container, options) => {
                        return $('<div>').dxButton({
                            stylingMode: 'text',
                            activeStateEnabled: true,
                            hoverStateEnabled: false,
                            focusStateEnabled: false,
                            disabled: options.value == 0 ? true : false,
                            text: options.value == 0 ? "-" : options.value,
                            type: options.value == 0 ? 'normal' : 'default',
                            onClick(e) {

                                DevExpress.ui.notify(
                                    {
                                        // message: DataCell.dataField + " = " + DataIndex,
                                        message: this.option('text'),
                                        maxWidth: 300,
                                        displayTime: 1000,
                                        animation: {
                                            show: { type: 'fade', duration: 400, from: 0, to: 1 },
                                            hide: { type: 'fade', duration: 40, to: 0 },
                                        },
                                    },
                                    { position: "top right", direction: "down-push" }
                                );
                                //DevExpress.ui.notify(col.dataField + ' : ' + options.value);
                            }
                        });
                    };
                });
            },
            dataSource: './data/DashboardPesertaDidik.json',
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
            filterRow: { visible: false },
            filterPanel: { visible: false },
            focusedRowIndex: null,
            focusedRowEnabled: false,
            focusedRowKey: null,
            groupPanel: { visible: false },
            grouping: {
                autoExpandAll: true,
            },
            hoverStateEnabled: false,
            headerFilter: { visible: false },

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
            // onCellClick: function (e) {
            //   e.value == 0 ? "" : DevExpress.ui.notify(e.value);
            // },
            // onRowExpanding: function(e){
            //   e.component.collapseAll(-1);
            // },

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
            rowAlternationEnabled: false,

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
                visible: false,
                highlightCaseSensitive: false,
            },
            selection: {
                allowSelectAll: false,
                deferred: false,
                mode: "single", //none ; single ; multiple
                selectAllMode: "allPages",
                showCheckBoxesMode: "click"
            },
            // onSelectionChanged(e) {
            //     e.component.collapseAll(-1);
            //     e.component.expandRow(e.currentSelectedRowKeys[0]);
            //   },
            showBorders: true,
            showColumnHeaders: true,
            showColumnLines: true,
            showRowLines: true,
            sortByGroupSummaryInfo: [{ summaryItem: 'count' }],
            summary: _TBSummaryDashboard,
            toolbar: undefined,
            wordWrapEnabled: false,
            masterDetail: {
                enabled: true,
                template(container, options) {
                    $("<div>").dxDataGrid({
                        dataSource: './data/InformasiDataIndukSiswa.json',
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
                        columns: _TbInfoPd,
                        filterValue: [["a01", "contains", options.data.A01],"and",["N02", "=", "Aktif"]],
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
                            pageSize: 5,
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