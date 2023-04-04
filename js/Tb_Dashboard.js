var
    _ColTingkat = {
        caption: 'Kelas',
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
    },

    //=========================================================================
    _ColAnggotaRombel = {
        caption: 'Anggota Rombel',
        alignment: 'left',
        columns: [{
            caption: 'L',
            dataField: 'B01',
            alignment: 'center',
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
        displayFormat: ' {0} Rombel ',
    },

    //=========================================================================
    _SumAnggotaRombel_L = {
        column: 'B01',
        summaryType: 'sum',
        showInGroupFooter: false,
        alignByColumn: true,
        displayFormat: '{0}',
    },
    _SumAnggotaRombel_P = {
        column: 'B02',
        summaryType: 'sum',
        showInGroupFooter: false,
        alignByColumn: true,
        displayFormat: '{0}',
    },
    _SumAnggotaRombel_JML = {
        column: 'B03',
        summaryType: 'sum',
        showInGroupFooter: false,
        alignByColumn: true,
        displayFormat: '{0}',
    },

    //=========================================================================
    _SumBerkebutuhanKhusus_L = {
        column: 'C01',
        summaryType: 'sum',
        showInGroupFooter: false,
        alignByColumn: true,
        displayFormat: '{0}',
    },
    _SumBerkebutuhanKhusus_P = {
        column: 'C02',
        summaryType: 'sum',
        showInGroupFooter: false,
        alignByColumn: true,
        displayFormat: '{0}',
    },
    _SumBerkebutuhanKhusus_JML = {
        column: 'C03',
        summaryType: 'sum',
        showInGroupFooter: false,
        alignByColumn: true,
        displayFormat: '{0}',
    },
    
    //=========================================================================
    _SumYatim_L = {
        column: 'D01',
        summaryType: 'sum',
        showInGroupFooter: false,
        alignByColumn: true,
        displayFormat: '{0}',
    },
    _SumYatim_P = {
        column: 'D02',
        summaryType: 'sum',
        showInGroupFooter: false,
        alignByColumn: true,
        displayFormat: '{0}',
    },
    _SumYatim_JML = {
        column: 'D03',
        summaryType: 'sum',
        showInGroupFooter: false,
        alignByColumn: true,
        displayFormat: '{0}',
    },
    
    //=========================================================================
    _SumPiatu_L = {
        column: 'D04',
        summaryType: 'sum',
        showInGroupFooter: false,
        alignByColumn: true,
        displayFormat: '{0}',
    },
    _SumPiatu_P = {
        column: 'D05',
        summaryType: 'sum',
        showInGroupFooter: false,
        alignByColumn: true,
        displayFormat: '{0}',
    },
    _SumPiatu_JML = {
        column: 'D06',
        summaryType: 'sum',
        showInGroupFooter: false,
        alignByColumn: true,
        displayFormat: '{0}',
    },
    
    //=========================================================================
    _SumYatimPiatu_L = {
        column: 'D07',
        summaryType: 'sum',
        showInGroupFooter: false,
        alignByColumn: true,
        displayFormat: '{0}',
    },
    _SumYatimPiatu_P = {
        column: 'D08',
        summaryType: 'sum',
        showInGroupFooter: false,
        alignByColumn: true,
        displayFormat: '{0}',
    },
    _SumYatimPiatu_JML = {
        column: 'D09',
        summaryType: 'sum',
        showInGroupFooter: false,
        alignByColumn: true,
        displayFormat: '{0}',
    },
    
    //=========================================================================
    _SumKIP_L = {
        column: 'E01',
        summaryType: 'sum',
        showInGroupFooter: false,
        alignByColumn: true,
        displayFormat: '{0}',
    },
    _SumKIP_P = {
        column: 'E02',
        summaryType: 'sum',
        showInGroupFooter: false,
        alignByColumn: true,
        displayFormat: '{0}',
    },
    _SumKIP_JML = {
        column: 'E03',
        summaryType: 'sum',
        showInGroupFooter: false,
        alignByColumn: true,
        displayFormat: '{0}',
    },
    
    //=========================================================================
    _SumPKH_L = {
        column: 'E04',
        summaryType: 'sum',
        showInGroupFooter: false,
        alignByColumn: true,
        displayFormat: '{0}',
    },
    _SumPKH_P = {
        column: 'E05',
        summaryType: 'sum',
        showInGroupFooter: false,
        alignByColumn: true,
        displayFormat: '{0}',
    },
    _SumPKH_JML = {
        column: 'E06',
        summaryType: 'sum',
        showInGroupFooter: false,
        alignByColumn: true,
        displayFormat: '{0}',
    },
    
    //=========================================================================
    _SumKPS_L = {
        column: 'E07',
        summaryType: 'sum',
        showInGroupFooter: false,
        alignByColumn: true,
        displayFormat: '{0}',
    },
    _SumKPS_P = {
        column: 'E08',
        summaryType: 'sum',
        showInGroupFooter: false,
        alignByColumn: true,
        displayFormat: '{0}',
    },
    _SumKPS_JML = {
        column: 'E09',
        summaryType: 'sum',
        showInGroupFooter: false,
        alignByColumn: true,
        displayFormat: '{0}',
    },
    
    //=========================================================================
    _SumKKS_L = {
        column: 'E10',
        summaryType: 'sum',
        showInGroupFooter: false,
        alignByColumn: true,
        displayFormat: '{0}',
    },
    _SumKKS_P = {
        column: 'E11',
        summaryType: 'sum',
        showInGroupFooter: false,
        alignByColumn: true,
        displayFormat: '{0}',
    },
    _SumKKS_JML = {
        column: 'E12',
        summaryType: 'sum',
        showInGroupFooter: false,
        alignByColumn: true,
        displayFormat: '{0}',
    },
    
    //=========================================================================
    _SumBestari_L = {
        column: 'E13',
        summaryType: 'sum',
        showInGroupFooter: false,
        alignByColumn: true,
        displayFormat: '{0}',
    },
    _SumBestari_P = {
        column: 'E14',
        summaryType: 'sum',
        showInGroupFooter: false,
        alignByColumn: true,
        displayFormat: '{0}',
    },
    _SumBestari_JML = {
        column: 'E15',
        summaryType: 'sum',
        showInGroupFooter: false,
        alignByColumn: true,
        displayFormat: '{0}',
    },
    
    //=========================================================================
    _SumPYBK_L = {
        column: 'E16',
        summaryType: 'sum',
        showInGroupFooter: false,
        alignByColumn: true,
        displayFormat: '{0}',
    },
    _SumPYBK_P = {
        column: 'E17',
        summaryType: 'sum',
        showInGroupFooter: false,
        alignByColumn: true,
        displayFormat: '{0}',
    },
    _SumPYBK_JML = {
        column: 'E18',
        summaryType: 'sum',
        showInGroupFooter: false,
        alignByColumn: true,
        displayFormat: '{0}',
    },
    
    //=========================================================================
    _SumUSP_L = {
        column: 'E19',
        summaryType: 'sum',
        showInGroupFooter: false,
        alignByColumn: true,
        displayFormat: '{0}',
    },
    _SumUSP_P = {
        column: 'E20',
        summaryType: 'sum',
        showInGroupFooter: false,
        alignByColumn: true,
        displayFormat: '{0}',
    },
    _SumUSP_JML = {
        column: 'E21',
        summaryType: 'sum',
        showInGroupFooter: false,
        alignByColumn: true,
        displayFormat: '{0}',
    },
    
    //=========================================================================
    _SumRekomPIP_L = {
        column: 'E22',
        summaryType: 'sum',
        showInGroupFooter: false,
        alignByColumn: true,
        displayFormat: '{0}',
    },
    _SumRekomPIP_P = {
        column: 'E23',
        summaryType: 'sum',
        showInGroupFooter: false,
        alignByColumn: true,
        displayFormat: '{0}',
    },
    _SumRekomPIP_JML = {
        column: 'E24',
        summaryType: 'sum',
        showInGroupFooter: false,
        alignByColumn: true,
        displayFormat: '{0}',
    },
    
    //=========================================================================
    _SumPIP_L = {
        column: 'F01',
        summaryType: 'sum',
        showInGroupFooter: false,
        alignByColumn: true,
        displayFormat: '{0}',
    },
    _SumPIP_P = {
        column: 'F02',
        summaryType: 'sum',
        showInGroupFooter: false,
        alignByColumn: true,
        displayFormat: '{0}',
    },
    _SumPIP_JML = {
        column: 'F03',
        summaryType: 'sum',
        showInGroupFooter: false,
        alignByColumn: true,
        displayFormat: '{0}',
    },
    
    //=========================================================================
    _SumDomDalamDaerah_L = {
        column: 'G01',
        summaryType: 'sum',
        showInGroupFooter: false,
        alignByColumn: true,
        displayFormat: '{0}',
    },
    _SumDomDalamDaerah_P = {
        column: 'G02',
        summaryType: 'sum',
        showInGroupFooter: false,
        alignByColumn: true,
        displayFormat: '{0}',
    },
    _SumDomDalamDaerah_JML = {
        column: 'G03',
        summaryType: 'sum',
        showInGroupFooter: false,
        alignByColumn: true,
        displayFormat: '{0}',
    },
    
    //=========================================================================
    _SumDomLuarDaerah_L = {
        column: 'G04',
        summaryType: 'sum',
        showInGroupFooter: false,
        alignByColumn: true,
        displayFormat: '{0}',
    },
    _SumDomLuarDaerah_P = {
        column: 'G05',
        summaryType: 'sum',
        showInGroupFooter: false,
        alignByColumn: true,
        displayFormat: '{0}',
    },
    _SumDomLuarDaerah_JML = {
        column: 'G06',
        summaryType: 'sum',
        showInGroupFooter: false,
        alignByColumn: true,
        displayFormat: '{0}',
    },
    
    //=========================================================================
    _SumIslam_L = {
        column: 'H01',
        summaryType: 'sum',
        showInGroupFooter: false,
        alignByColumn: true,
        displayFormat: '{0}',
    },
    _SumIslam_P = {
        column: 'H02',
        summaryType: 'sum',
        showInGroupFooter: false,
        alignByColumn: true,
        displayFormat: '{0}',
    },
    _SumIslam_JML = {
        column: 'H03',
        summaryType: 'sum',
        showInGroupFooter: false,
        alignByColumn: true,
        displayFormat: '{0}',
    },
    
    //=========================================================================
    _SumKristen_L = {
        column: 'H04',
        summaryType: 'sum',
        showInGroupFooter: false,
        alignByColumn: true,
        displayFormat: '{0}',
    },
    _SumKristen_P = {
        column: 'H05',
        summaryType: 'sum',
        showInGroupFooter: false,
        alignByColumn: true,
        displayFormat: '{0}',
    },
    _SumKristen_JML = {
        column: 'H06',
        summaryType: 'sum',
        showInGroupFooter: false,
        alignByColumn: true,
        displayFormat: '{0}',
    },
    
    //=========================================================================
    _SumKatolik_L = {
        column: 'H07',
        summaryType: 'sum',
        showInGroupFooter: false,
        alignByColumn: true,
        displayFormat: '{0}',
    },
    _SumKatolik_P = {
        column: 'H08',
        summaryType: 'sum',
        showInGroupFooter: false,
        alignByColumn: true,
        displayFormat: '{0}',
    },
    _SumKatolik_JML = {
        column: 'H09',
        summaryType: 'sum',
        showInGroupFooter: false,
        alignByColumn: true,
        displayFormat: '{0}',
    },
    
    //=========================================================================
    _SumHindu_L = {
        column: 'H10',
        summaryType: 'sum',
        showInGroupFooter: false,
        alignByColumn: true,
        displayFormat: '{0}',
    },
    _SumHindu_P = {
        column: 'H11',
        summaryType: 'sum',
        showInGroupFooter: false,
        alignByColumn: true,
        displayFormat: '{0}',
    },
    _SumHindu_JML = {
        column: 'H12',
        summaryType: 'sum',
        showInGroupFooter: false,
        alignByColumn: true,
        displayFormat: '{0}',
    },
    
    //=========================================================================
    _SumBudha_L = {
        column: 'H13',
        summaryType: 'sum',
        showInGroupFooter: false,
        alignByColumn: true,
        displayFormat: '{0}',
    },
    _SumBudha_P = {
        column: 'H14',
        summaryType: 'sum',
        showInGroupFooter: false,
        alignByColumn: true,
        displayFormat: '{0}',
    },
    _SumBudha_JML = {
        column: 'H15',
        summaryType: 'sum',
        showInGroupFooter: false,
        alignByColumn: true,
        displayFormat: '{0}',
    },
    
    //=========================================================================
    _SumKongHuCu_L = {
        column: 'H16',
        summaryType: 'sum',
        showInGroupFooter: false,
        alignByColumn: true,
        displayFormat: '{0}',
    },
    _SumKongHuCu_P = {
        column: 'H17',
        summaryType: 'sum',
        showInGroupFooter: false,
        alignByColumn: true,
        displayFormat: '{0}',
    },
    _SumKongHuCu_JML = {
        column: 'H18',
        summaryType: 'sum',
        showInGroupFooter: false,
        alignByColumn: true,
        displayFormat: '{0}',
    },
    
    //=========================================================================
    _SumKepercayaan_L = {
        column: 'H19',
        summaryType: 'sum',
        showInGroupFooter: false,
        alignByColumn: true,
        displayFormat: '{0}',
    },
    _SumKepercayaan_P = {
        column: 'H20',
        summaryType: 'sum',
        showInGroupFooter: false,
        alignByColumn: true,
        displayFormat: '{0}',
    },
    _SumKepercayaan_JML = {
        column: 'H21',
        summaryType: 'sum',
        showInGroupFooter: false,
        alignByColumn: true,
        displayFormat: '{0}',
    },
    
    //=========================================================================
    _SumTK_L = {
        column: 'I01',
        summaryType: 'sum',
        showInGroupFooter: false,
        alignByColumn: true,
        displayFormat: '{0}',
    },
    _SumTK_P = {
        column: 'I02',
        summaryType: 'sum',
        showInGroupFooter: false,
        alignByColumn: true,
        displayFormat: '{0}',
    },
    _SumTK_JML = {
        column: 'I03',
        summaryType: 'sum',
        showInGroupFooter: false,
        alignByColumn: true,
        displayFormat: '{0}',
    },
    
    //=========================================================================
    _SumKB_L = {
        column: 'I04',
        summaryType: 'sum',
        showInGroupFooter: false,
        alignByColumn: true,
        displayFormat: '{0}',
    },
    _SumKB_P = {
        column: 'I05',
        summaryType: 'sum',
        showInGroupFooter: false,
        alignByColumn: true,
        displayFormat: '{0}',
    },
    _SumKB_JML = {
        column: 'I06',
        summaryType: 'sum',
        showInGroupFooter: false,
        alignByColumn: true,
        displayFormat: '{0}',
    },
    
    //=========================================================================
    _SumTPA_L = {
        column: 'I07',
        summaryType: 'sum',
        showInGroupFooter: false,
        alignByColumn: true,
        displayFormat: '{0}',
    },
    _SumTPA_P = {
        column: 'I08',
        summaryType: 'sum',
        showInGroupFooter: false,
        alignByColumn: true,
        displayFormat: '{0}',
    },
    _SumTPA_JML = {
        column: 'I09',
        summaryType: 'sum',
        showInGroupFooter: false,
        alignByColumn: true,
        displayFormat: '{0}',
    },
    
    //=========================================================================
    _SumLess6Th_L = {
        column: 'J01',
        summaryType: 'sum',
        showInGroupFooter: false,
        alignByColumn: true,
        displayFormat: '{0}',
    },
    _SumLess6Th_P = {
        column: 'J02',
        summaryType: 'sum',
        showInGroupFooter: false,
        alignByColumn: true,
        displayFormat: '{0}',
    },
    _SumLess6Th_JML = {
        column: 'J03',
        summaryType: 'sum',
        showInGroupFooter: false,
        alignByColumn: true,
        displayFormat: '{0}',
    },
    
    //=========================================================================
    _Sum6Th_L = {
        column: 'J04',
        summaryType: 'sum',
        showInGroupFooter: false,
        alignByColumn: true,
        displayFormat: '{0}',
    },
    _Sum6Th_P = {
        column: 'J05',
        summaryType: 'sum',
        showInGroupFooter: false,
        alignByColumn: true,
        displayFormat: '{0}',
    },
    _Sum6Th_JML = {
        column: 'J06',
        summaryType: 'sum',
        showInGroupFooter: false,
        alignByColumn: true,
        displayFormat: '{0}',
    },
    
    //=========================================================================
    _Sum7Th_L = {
        column: 'J07',
        summaryType: 'sum',
        showInGroupFooter: false,
        alignByColumn: true,
        displayFormat: '{0}',
    },
    _Sum7Th_P = {
        column: 'J08',
        summaryType: 'sum',
        showInGroupFooter: false,
        alignByColumn: true,
        displayFormat: '{0}',
    },
    _Sum7Th_JML = {
        column: 'J09',
        summaryType: 'sum',
        showInGroupFooter: false,
        alignByColumn: true,
        displayFormat: '{0}',
    },
    
    //=========================================================================
    _Sum8Th_L = {
        column: 'J10',
        summaryType: 'sum',
        showInGroupFooter: false,
        alignByColumn: true,
        displayFormat: '{0}',
    },
    _Sum8Th_P = {
        column: 'J11',
        summaryType: 'sum',
        showInGroupFooter: false,
        alignByColumn: true,
        displayFormat: '{0}',
    },
    _Sum8Th_JML = {
        column: 'J12',
        summaryType: 'sum',
        showInGroupFooter: false,
        alignByColumn: true,
        displayFormat: '{0}',
    },
    
    //=========================================================================
    _Sum9Th_L = {
        column: 'J13',
        summaryType: 'sum',
        showInGroupFooter: false,
        alignByColumn: true,
        displayFormat: '{0}',
    },
    _Sum9Th_P = {
        column: 'J14',
        summaryType: 'sum',
        showInGroupFooter: false,
        alignByColumn: true,
        displayFormat: '{0}',
    },
    _Sum9Th_JML = {
        column: 'J15',
        summaryType: 'sum',
        showInGroupFooter: false,
        alignByColumn: true,
        displayFormat: '{0}',
    },
    
    //=========================================================================
    _Sum10Th_L = {
        column: 'J16',
        summaryType: 'sum',
        showInGroupFooter: false,
        alignByColumn: true,
        displayFormat: '{0}',
    },
    _Sum10Th_P = {
        column: 'J17',
        summaryType: 'sum',
        showInGroupFooter: false,
        alignByColumn: true,
        displayFormat: '{0}',
    },
    _Sum10Th_JML = {
        column: 'J18',
        summaryType: 'sum',
        showInGroupFooter: false,
        alignByColumn: true,
        displayFormat: '{0}',
    },
    
    //=========================================================================
    _Sum11Th_L = {
        column: 'J19',
        summaryType: 'sum',
        showInGroupFooter: false,
        alignByColumn: true,
        displayFormat: '{0}',
    },
    _Sum11Th_P = {
        column: 'J20',
        summaryType: 'sum',
        showInGroupFooter: false,
        alignByColumn: true,
        displayFormat: '{0}',
    },
    _Sum11Th_JML = {
        column: 'J21',
        summaryType: 'sum',
        showInGroupFooter: false,
        alignByColumn: true,
        displayFormat: '{0}',
    },
    
    //=========================================================================
    _Sum12Th_L = {
        column: 'J22',
        summaryType: 'sum',
        showInGroupFooter: false,
        alignByColumn: true,
        displayFormat: '{0}',
    },
    _Sum12Th_P = {
        column: 'J23',
        summaryType: 'sum',
        showInGroupFooter: false,
        alignByColumn: true,
        displayFormat: '{0}',
    },
    _Sum12Th_JML = {
        column: 'J24',
        summaryType: 'sum',
        showInGroupFooter: false,
        alignByColumn: true,
        displayFormat: '{0}',
    },
    
    //=========================================================================
    _SumUp12Th_L = {
        column: 'J25',
        summaryType: 'sum',
        showInGroupFooter: false,
        alignByColumn: true,
        displayFormat: '{0}',
    },
    _SumUp12Th_P = {
        column: 'J26',
        summaryType: 'sum',
        showInGroupFooter: false,
        alignByColumn: true,
        displayFormat: '{0}',
    },
    _SumUp12Th_JML = {
        column: 'J27',
        summaryType: 'sum',
        showInGroupFooter: false,
        alignByColumn: true,
        displayFormat: '{0}',
    },


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
            _SumAnggotaRombel_L, _SumAnggotaRombel_P, _SumAnggotaRombel_JML,
            _SumBerkebutuhanKhusus_L, _SumBerkebutuhanKhusus_P, _SumBerkebutuhanKhusus_JML,
            _SumYatim_L, _SumYatim_P, _SumYatim_JML,
            _SumPiatu_L, _SumPiatu_P, _SumPiatu_JML,
            _SumYatimPiatu_L, _SumYatimPiatu_P, _SumYatimPiatu_JML,
            _SumKIP_L, _SumKIP_P, _SumKIP_JML,
            _SumPKH_L, _SumPKH_P, _SumPKH_JML,
            _SumKPS_L, _SumKPS_P, _SumKPS_JML,
            _SumKKS_L, _SumKKS_P, _SumKKS_JML,
            _SumBestari_L, _SumBestari_P, _SumBestari_JML,
            _SumPYBK_L, _SumPYBK_P, _SumPYBK_JML,
            _SumUSP_L, _SumUSP_P, _SumUSP_JML,
            _SumRekomPIP_L, _SumRekomPIP_P, _SumRekomPIP_JML,
            _SumPIP_L, _SumPIP_P, _SumPIP_JML,
            _SumDomDalamDaerah_L, _SumDomDalamDaerah_P, _SumDomDalamDaerah_JML,
            _SumDomLuarDaerah_L, _SumDomLuarDaerah_P, _SumDomLuarDaerah_JML,
            _SumIslam_L, _SumIslam_P, _SumIslam_JML,
            _SumKristen_L, _SumKristen_P, _SumKristen_JML,
            _SumKatolik_L, _SumKatolik_P, _SumKatolik_JML,
            _SumHindu_L, _SumHindu_P, _SumHindu_JML,
            _SumBudha_L, _SumBudha_P, _SumBudha_JML,
            _SumKongHuCu_L, _SumKongHuCu_P, _SumKongHuCu_JML,
            _SumKepercayaan_L, _SumKepercayaan_P, _SumKepercayaan_JML,
            _SumTK_L, _SumTK_P, _SumTK_JML,
            _SumKB_L, _SumKB_P, _SumKB_JML,
            _SumTPA_L, _SumTPA_P, _SumTPA_JML,
            _SumLess6Th_L, _SumLess6Th_P, _SumLess6Th_JML,
            _Sum6Th_L, _Sum6Th_P, _Sum6Th_JML,
            _Sum7Th_L, _Sum7Th_P, _Sum7Th_JML,
            _Sum8Th_L, _Sum8Th_P, _Sum8Th_JML,
            _Sum9Th_L, _Sum9Th_P, _Sum9Th_JML,
            _Sum10Th_L, _Sum10Th_P, _Sum10Th_JML,
            _Sum11Th_L, _Sum11Th_P, _Sum11Th_JML,
            _Sum12Th_L, _Sum12Th_P, _Sum12Th_JML,
            _SumUp12Th_L, _SumUp12Th_P, _SumUp12Th_JML
        ],
    }