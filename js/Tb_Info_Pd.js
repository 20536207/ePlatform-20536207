var
    _TbInfoPd = [
        {
            caption: 'Identitas Peserta Didik',
            fixed: true,
            columns: [
                /*
                {
                    caption: 'Rombel',
                    dataField: 'A02',
                    groupIndex: 0,
                },*/ {
                    caption: 'ID Rombel',
                    dataField: 'A01',
                    sortOrder: 'asc',

                }, {
                    caption: 'NIPD',
                    dataField: 'B01',

                }, {
                    caption: 'NISN',
                    dataField: 'B02',

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

            }],
        },
    ];