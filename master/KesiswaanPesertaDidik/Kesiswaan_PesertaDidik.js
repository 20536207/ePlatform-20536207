$(document).ready(async function () {

    _main.arrVarGlobal._ParentPageContains = "/master/Homepage/Homepage_Home.html";

    // ===============================================================================================
    const
        _objData = {
            Tingkat: {
                caption: 'Kelas',
                fixed: true,
                dataField: 'Z01',
                sortOrder: 'asc',
                alignment: 'left',
                groupIndex: 0,
            },

            Rombel: {
                caption: 'Rombel',
                fixed: true,
                dataField: 'A01',
                sortOrder: 'asc',
                alignment: 'left',
                masterField: 'A02',
            },

            AnggotaRombel: {
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

            BerkebutuhanKhusus: {
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

            StatusSosialAnak: {
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

            RekomendasiPIP: {
                caption: 'Rekomendasi PIP',
                alignment: 'left',
                columns: [
                    {
                        caption: 'KIP',
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
                        caption: 'PENDALUNGAN',
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
                        caption: 'BESTARI',
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
                        caption: 'PYBK',
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
                        caption: 'USP',
                        alignment: 'center',
                        columns: [{
                            caption: 'L',
                            dataField: 'E22',
                            alignment: 'center',

                        }, {
                            caption: 'P',
                            dataField: 'E23',
                            alignment: 'center',
                        }, {
                            caption: 'JML',
                            dataField: 'E24',
                            alignment: 'center',
                        }],
                    },
                    {
                        caption: 'L',
                        dataField: 'E25',
                        alignment: 'center',

                    },
                    {
                        caption: 'P',
                        dataField: 'E26',
                        alignment: 'center',
                    },
                    {
                        caption: 'JML',
                        dataField: 'E27',
                        alignment: 'center',
                    }
                ]
            },

            PenerimaPIP: {
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

            Domisili: {
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

            Agama: {
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

            AsalSekolahLulusan: {
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

            Usia: {
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

            TotalRombel: {
                column: 'Z01',
                summaryType: 'count',
                displayFormat: 'Total : ( {0} Rombel )',
                alignByColumn: false,
                showInColumn: 'A01',
                showInGroupFooter: true,
            },
            SumRombel: {
                column: 'Z01',
                summaryType: 'count',
                displayFormat: ' {0} Rombel ',
                alignByColumn: false,
                showInColumn: 'A01',
                showInGroupFooter: false,
            },

            SumAnggotaRombel: [{
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

            SumBerkebutuhanKhusus: [{
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

            SumYatim: [{
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

            SumPiatu: [{
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

            SumYatimPiatu: [{
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

            SumKIP: [{
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

            SumPKH: [{
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

            SumKPS: [{
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

            SumKKS: [{
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

            SumPendalungan: [{
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

            SumBestari: [{
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

            SumPYBK: [{
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

            SumUSP: [{
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

            SumRekomPIP: [{
                column: 'E25',
                summaryType: 'sum',
                showInGroupFooter: true,
                alignByColumn: true,
                displayFormat: '{0}',
                customizeText: function (e) {
                    return e.value <= 0 ? "-" : e.value;
                },
            },
            {
                column: 'E26',
                summaryType: 'sum',
                showInGroupFooter: true,
                alignByColumn: true,
                displayFormat: '{0}',
                customizeText: function (e) {
                    return e.value <= 0 ? "-" : e.value;
                },
            },
            {
                column: 'E27',
                summaryType: 'sum',
                showInGroupFooter: true,
                alignByColumn: true,
                displayFormat: '{0}',
                customizeText: function (e) {
                    return e.value <= 0 ? "-" : e.value;
                },
            }],

            SumPIP: [{
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

            SumDomDalamDaerah: [{
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

            SumDomLuarDaerah: [{
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

            SumIslam: [{
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

            SumKristen: [{
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

            SumKatolik: [{
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

            SumHindu: [{
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

            SumBudha: [{
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

            SumKongHuCu: [{
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

            SumKepercayaan: [{
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

            SumTK: [{
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

            SumKB: [{
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

            SumTPA: [{
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

            SumLess6Th: [{
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

            Sum6Th: [{
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

            Sum7Th: [{
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

            Sum8Th: [{
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

            Sum9Th: [{
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

            Sum10Th: [{
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

            Sum11Th: [{
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

            Sum12Th: [{
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

            SumUp12Th: [{
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

            TbColumns: [
                {
                    caption: 'ID Anggota Rombel',
                    fixed: true,
                    dataField: 'A01',
                    sortOrder: 'asc',
                    dataType: 'string',
                },
                {
                    caption: 'Identitas Peserta Didik',
                    columns: [
                        {
                            caption: 'NIPD',
                            dataField: 'B01',
                            sortOrder: 'asc',
                            dataType: 'string',
                            cellTemplate(container, options) {
                                if (options.data.O01 != "") {
                                    return $('<a>', { href: 'https://drive.google.com/file/d/' + options.data.O01, target: '_blank' }).text(options.value);
                                } else {
                                    return $('<div>').text(options.value);
                                }
                            },
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
                            cellTemplate(container, options) {
                                if (options.data.O02 != "") {
                                    return $('<a>', { href: 'https://drive.google.com/file/d/' + options.data.O02, target: '_blank' }).text(options.value);
                                } else {
                                    return $('<div>').text(options.value);
                                }
                            },
                        }
                    ],
                },
                {
                    caption: 'Catatan Sipil Peserta Didik',
                    columns: [{
                        caption: 'NIK',
                        dataField: 'C01',
                        dataType: 'string',
                        cellTemplate(container, options) {
                            if (options.data.O03 != "") {
                                return $('<a>', { href: 'https://drive.google.com/file/d/' + options.data.O03, target: '_blank' }).text(options.value);
                            } else {
                                return $('<div>').text(options.value);
                            }
                        },
                        // format: function (value) {
                        //     return value.replace(value.substr(1, 13), "*".repeat(13));
                        // },
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
                        // format: function (value) {
                        //     return value.replace(value.substr(1, 13), "*".repeat(13));
                        // },

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
                        format: { type: "fixedPoint", precision: 3, },
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
                        // format: function (value) {
                        //     return value.replace(value.substr(1, 13), "*".repeat(13));
                        // },
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
                        // format: function (value) {
                        //     return value.replace(value.substr(1, 13), "*".repeat(13));
                        // },
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
                        // format: function (value) {
                        //     return value.replace(value.substr(1, 13), "*".repeat(13));
                        // },
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
                        // format: function (value) {
                        //     return value.replace(value.substr(3, 5), "*".repeat(5));
                        // },
                    }, {
                        caption: 'Tinggi Badan (Cm)',
                        dataField: 'I02',
                        dataType: 'number',

                    }, {
                        caption: 'Berat Badan (Kg)',
                        dataField: 'I03',
                        dataType: 'number',
                        format: { type: "fixedPoint", precision: 3, },
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

                    }, {
                        caption: 'Status Sosial Anak',
                        dataField: 'I12',
                        dataType: 'string',

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
                        cellTemplate(container, options) {
                            if (options.data.O04 != "") {
                                return $('<a>', { href: 'https://drive.google.com/file/d/' + options.data.O04, target: '_blank' }).text(options.value);
                            } else {
                                return $('<div>').text(options.value);
                            }
                        },

                    }, {
                        caption: 'Nomor Rekening PIP',
                        dataField: 'J03',
                        dataType: 'string',
                        cellTemplate(container, options) {
                            if (options.data.O05 != "") {
                                return $('<a>', { href: 'https://drive.google.com/file/d/' + options.data.O05, target: '_blank' }).text(options.value);
                            } else {
                                return $('<div>').text(options.value);
                            }
                        },
                        // format: function (value) {
                        //     return value.replace(value.substr(3, 10), "*".repeat(10));
                        // },
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
                        cellTemplate(container, options) {
                            if (options.data.O06 != "") {
                                return $('<a>', { href: 'https://drive.google.com/file/d/' + options.data.O06, target: '_blank' }).text(options.value);
                            } else {
                                return $('<div>').text(options.value);
                            }
                        },

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

        _objDashboard = {
            TbDashboard: [
                _objData.Tingkat,
                _objData.Rombel,
                _objData.AnggotaRombel,
                _objData.BerkebutuhanKhusus,
                _objData.StatusSosialAnak,
                _objData.RekomendasiPIP,
                _objData.PenerimaPIP,
                _objData.Domisili,
                _objData.Agama,
                _objData.AsalSekolahLulusan,
                _objData.Usia
            ],

            TBSummaryDashboard: {
                groupItems: [
                    _objData.SumRombel,
                    _objData.SumAnggotaRombel[0], _objData.SumAnggotaRombel[1], _objData.SumAnggotaRombel[2],
                    _objData.SumBerkebutuhanKhusus[0], _objData.SumBerkebutuhanKhusus[1], _objData.SumBerkebutuhanKhusus[2],
                    _objData.SumYatim[0], _objData.SumYatim[1], _objData.SumYatim[2],
                    _objData.SumPiatu[0], _objData.SumPiatu[1], _objData.SumPiatu[2],
                    _objData.SumYatimPiatu[0], _objData.SumYatimPiatu[1], _objData.SumYatimPiatu[2],
                    _objData.SumKIP[0], _objData.SumKIP[1], _objData.SumKIP[2],
                    _objData.SumPKH[0], _objData.SumPKH[1], _objData.SumPKH[2],
                    _objData.SumKPS[0], _objData.SumKPS[1], _objData.SumKPS[2],
                    _objData.SumKKS[0], _objData.SumKKS[1], _objData.SumKKS[2],
                    _objData.SumPendalungan[0], _objData.SumPendalungan[1], _objData.SumPendalungan[2],
                    _objData.SumBestari[0], _objData.SumBestari[1], _objData.SumBestari[2],
                    _objData.SumPYBK[0], _objData.SumPYBK[1], _objData.SumPYBK[2],
                    _objData.SumUSP[0], _objData.SumUSP[1], _objData.SumUSP[2],
                    _objData.SumRekomPIP[0], _objData.SumRekomPIP[1], _objData.SumRekomPIP[2],
                    _objData.SumPIP[0], _objData.SumPIP[1], _objData.SumPIP[2],
                    _objData.SumDomDalamDaerah[0], _objData.SumDomDalamDaerah[1], _objData.SumDomDalamDaerah[2],
                    _objData.SumDomLuarDaerah[0], _objData.SumDomLuarDaerah[1], _objData.SumDomLuarDaerah[2],
                    _objData.SumIslam[0], _objData.SumIslam[1], _objData.SumIslam[2],
                    _objData.SumKristen[0], _objData.SumKristen[1], _objData.SumKristen[2],
                    _objData.SumKatolik[0], _objData.SumKatolik[1], _objData.SumKatolik[2],
                    _objData.SumHindu[0], _objData.SumHindu[1], _objData.SumHindu[2],
                    _objData.SumBudha[0], _objData.SumBudha[1], _objData.SumBudha[2],
                    _objData.SumKongHuCu[0], _objData.SumKongHuCu[1], _objData.SumKongHuCu[2],
                    _objData.SumKepercayaan[0], _objData.SumKepercayaan[1], _objData.SumKepercayaan[2],
                    _objData.SumTK[0], _objData.SumTK[1], _objData.SumTK[2],
                    _objData.SumKB[0], _objData.SumKB[1], _objData.SumKB[2],
                    _objData.SumTPA[0], _objData.SumTPA[1], _objData.SumTPA[2],
                    _objData.SumLess6Th[0], _objData.SumLess6Th[1], _objData.SumLess6Th[2],
                    _objData.Sum6Th[0], _objData.Sum6Th[1], _objData.Sum6Th[2],
                    _objData.Sum7Th[0], _objData.Sum7Th[1], _objData.Sum7Th[2],
                    _objData.Sum8Th[0], _objData.Sum8Th[1], _objData.Sum8Th[2],
                    _objData.Sum9Th[0], _objData.Sum9Th[1], _objData.Sum9Th[2],
                    _objData.Sum10Th[0], _objData.Sum10Th[1], _objData.Sum10Th[2],
                    _objData.Sum11Th[0], _objData.Sum11Th[1], _objData.Sum11Th[2],
                    _objData.Sum12Th[0], _objData.Sum12Th[1], _objData.Sum12Th[2],
                    _objData.SumUp12Th[0], _objData.SumUp12Th[1], _objData.SumUp12Th[2]
                ],
                totalItems: [
                    _objData.TotalRombel,
                    _objData.SumAnggotaRombel[0], _objData.SumAnggotaRombel[1], _objData.SumAnggotaRombel[2],
                    _objData.SumBerkebutuhanKhusus[0], _objData.SumBerkebutuhanKhusus[1], _objData.SumBerkebutuhanKhusus[2],
                    _objData.SumYatim[0], _objData.SumYatim[1], _objData.SumYatim[2],
                    _objData.SumPiatu[0], _objData.SumPiatu[1], _objData.SumPiatu[2],
                    _objData.SumYatimPiatu[0], _objData.SumYatimPiatu[1], _objData.SumYatimPiatu[2],
                    _objData.SumKIP[0], _objData.SumKIP[1], _objData.SumKIP[2],
                    _objData.SumPKH[0], _objData.SumPKH[1], _objData.SumPKH[2],
                    _objData.SumKPS[0], _objData.SumKPS[1], _objData.SumKPS[2],
                    _objData.SumKKS[0], _objData.SumKKS[1], _objData.SumKKS[2],
                    _objData.SumPendalungan[0], _objData.SumPendalungan[1], _objData.SumPendalungan[2],
                    _objData.SumBestari[0], _objData.SumBestari[1], _objData.SumBestari[2],
                    _objData.SumPYBK[0], _objData.SumPYBK[1], _objData.SumPYBK[2],
                    _objData.SumUSP[0], _objData.SumUSP[1], _objData.SumUSP[2],
                    _objData.SumRekomPIP[0], _objData.SumRekomPIP[1], _objData.SumRekomPIP[2],
                    _objData.SumPIP[0], _objData.SumPIP[1], _objData.SumPIP[2],
                    _objData.SumDomDalamDaerah[0], _objData.SumDomDalamDaerah[1], _objData.SumDomDalamDaerah[2],
                    _objData.SumDomLuarDaerah[0], _objData.SumDomLuarDaerah[1], _objData.SumDomLuarDaerah[2],
                    _objData.SumIslam[0], _objData.SumIslam[1], _objData.SumIslam[2],
                    _objData.SumKristen[0], _objData.SumKristen[1], _objData.SumKristen[2],
                    _objData.SumKatolik[0], _objData.SumKatolik[1], _objData.SumKatolik[2],
                    _objData.SumHindu[0], _objData.SumHindu[1], _objData.SumHindu[2],
                    _objData.SumBudha[0], _objData.SumBudha[1], _objData.SumBudha[2],
                    _objData.SumKongHuCu[0], _objData.SumKongHuCu[1], _objData.SumKongHuCu[2],
                    _objData.SumKepercayaan[0], _objData.SumKepercayaan[1], _objData.SumKepercayaan[2],
                    _objData.SumTK[0], _objData.SumTK[1], _objData.SumTK[2],
                    _objData.SumKB[0], _objData.SumKB[1], _objData.SumKB[2],
                    _objData.SumTPA[0], _objData.SumTPA[1], _objData.SumTPA[2],
                    _objData.SumLess6Th[0], _objData.SumLess6Th[1], _objData.SumLess6Th[2],
                    _objData.Sum6Th[0], _objData.Sum6Th[1], _objData.Sum6Th[2],
                    _objData.Sum7Th[0], _objData.Sum7Th[1], _objData.Sum7Th[2],
                    _objData.Sum8Th[0], _objData.Sum8Th[1], _objData.Sum8Th[2],
                    _objData.Sum9Th[0], _objData.Sum9Th[1], _objData.Sum9Th[2],
                    _objData.Sum10Th[0], _objData.Sum10Th[1], _objData.Sum10Th[2],
                    _objData.Sum11Th[0], _objData.Sum11Th[1], _objData.Sum11Th[2],
                    _objData.Sum12Th[0], _objData.Sum12Th[1], _objData.Sum12Th[2],
                    _objData.SumUp12Th[0], _objData.SumUp12Th[1], _objData.SumUp12Th[2]
                ],
            },
        };

    // _objElement = {
    //     InformasiPesertaDidik:
    $('#InformasiPesertaDidik').dxDataGrid({
        onContentReady: function (e) {
            if (!e.component._isReady) {
                const getQuery = GetVisualizationQuery(
                    _main.appConfig.dataSource.Kesiswaan, //SpreadsheetID
                    1957628809,                                     //SheetID
                    "A1:DF",                                        //Range
                    "SELECT * WHERE A <> ''"                        //Filter or Query
                );
                getQuery.send(response => {
                    GetJsonData(response);
                    this.option("dataSource", _main.arrVarGlobal._dataArray.length != 0 ? _main.arrVarGlobal._dataArray : null);
                });
                e.component._isReady = true;
                //delete getQuery;
                _main.arrVarGlobal._columnArray = [];
                _main.arrVarGlobal._dataArray = [];
            };
        },
        // keyExpr: 'A01',
        columns: _objDashboard.TbDashboard,
        columnHidingEnabled: false,
        allowColumnReordering: true,
        allowColumnResizing: true,
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
                        onClick(e) { _notify(this.option('text')); },
                    });
                };
            });
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
                DevExpress.pdfExporter.exportDataGrid({
                    jsPDFDocument: doc,
                    component: e.component,
                }).then(() => {
                    doc.save(_nmfile + '.pdf');
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
            allowedPageSizes: [5, 10, 15, 20, 25, 50, 100],
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
        summary: _objDashboard.TBSummaryDashboard,
        toolbar: undefined,
        wordWrapEnabled: false,
        masterDetail: {
            enabled: true,
            template(container, options) {
                $("<div>").dxDataGrid({
                    onContentReady: function (e) {
                        if (!e.component._isReady) {
                            const getQuery = GetVisualizationQuery(
                                _main.appConfig.dataSource.Kesiswaan,           //SpreadsheetID
                                1300103800,                                     //SheetID
                                "A1:DD",                                        //Range
                                "SELECT * WHERE (CU = 'Aktif') AND (A CONTAINS '" + options.data.A01 + "')"   //Filter or Query
                            );
                            getQuery.send(response => {
                                GetJsonData(response);
                                this.option("dataSource", _main.arrVarGlobal._dataArray.length != 0 ? _main.arrVarGlobal._dataArray : null);
                            });
                            e.component._isReady = true;
                            //delete getQuery;
                            _main.arrVarGlobal._columnArray = [];
                            _main.arrVarGlobal._dataArray = [];
                        }
                    },
                    columns: _objData.TbColumns,
                    // filterValue: [["A01", "contains", options.data.A01]],
                    //"and", ["N02", "=", "Aktif"]],
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
                    hoverStateEnabled: false,
                    paging: {
                        pageSize: 5,
                    },
                    pager: {
                        allowedPageSizes: [5, 10, 15, 20, 25, 50, 100],
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
                            DevExpress.pdfExporter.exportDataGrid({
                                jsPDFDocument: doc,
                                component: e.component,
                            }).then(() => {
                                doc.save(_nmfile + '.pdf');
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
            },
        },
    }).dxDataGrid('instance');

    // };

});