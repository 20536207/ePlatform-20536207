//=========================================================================================================
$(document).ready(function () {

    _main.arrVarGlobal._ParentPageContains = "/master/Homepage/Homepage_Home.html";
    // ===============================================================================================
    const
        _objData = {

            TBSummaryInfo: {
                groupItems: [{
                    // column: 'A01',
                    summaryType: 'count',
                    displayFormat: 'Total : ( {0} Pegawai )',
                    alignByColumn: true,
                    showInColumn: 'ID',
                    showInGroupFooter: true,
                },],

                totalItems: [{
                    // column: 'A01',
                    summaryType: 'count',
                    displayFormat: 'Total : ( {0} Pegawai )',
                    alignByColumn: true,
                    showInColumn: 'ID',
                    showInGroupFooter: true,
                },]
            },

            TbColumns: [
                {
                    caption: "ID Pegawai",
                    fixed: true,
                    dataField: "ID",
                    dataType: "string",
                }, {
                    caption: "Nama Pegawai",
                    dataField: "A01",
                    dataType: "string",
                    // format: undefined,
                },
                {
                    caption: 'Nomor Identitas :',
                    columns: [
                        {
                            caption: "NIP",
                            dataField: "F01",
                            dataType: "string",
                        }, {
                            caption: "KARPEG",
                            dataField: "F02",
                            dataType: "string",
                        }, {
                            caption: "NPWP",
                            dataField: "F03",
                            dataType: "string",
                        }, {
                            caption: "NUPTK",
                            dataField: "F04",
                            dataType: "string",
                        },
                    ],
                },
                {
                    caption: 'Data Pokok Kepegawaian :',
                    columns: [
                        {
                            caption: "Penetapan/Putusan Penghasilan",
                            dataField: "P01",
                            dataType: "string",
                        }, {
                            caption: "Nomor",
                            dataField: "P02",
                            dataType: "string",
                        }, {
                            caption: "Tertanggal",
                            dataField: "P03",
                            dataType: "date",
                            format: "dd/MM/yyyy",
                        }, {
                            caption: "Perihal",
                            dataField: "P04",
                            dataType: "string",
                        }, {
                            caption: "TMT Berlaku",
                            dataField: "P05",
                            dataType: "date",
                            format: "dd/MM/yyyy",
                        }, {
                            caption: "Status Pegawai",
                            dataField: "P06",
                            dataType: "string",
                        }, {
                            caption: "Jenis Pegawai",
                            dataField: "P07",
                            dataType: "string",
                        }, {
                            caption: "Kategori PTK",
                            dataField: "P08",
                            dataType: "string",
                        }, {
                            caption: "Jenis PTK",
                            dataField: "P09",
                            dataType: "string",
                        }, {
                            caption: "Gol./Ruang",
                            dataField: "P10",
                            dataType: "string",
                        }, {
                            caption: "GolRuang",
                            dataField: "P11",
                            dataType: "string",
                        }, {
                            caption: "Pangkat",
                            dataField: "P12",
                            dataType: "string",
                        }, {
                            caption: "Masa Kerja",
                            dataField: "P13",
                            dataType: "string",
                        }, {
                            caption: "Jabatan ASN",
                            dataField: "P14",
                            dataType: "string",
                        }, {
                            caption: "Jenjang Jabatan",
                            dataField: "P15",
                            dataType: "string",
                        }, {
                            caption: "Angka Kredit",
                            dataField: "P16",
                            dataType: "number",
                            format: {
                                type: "fixedPoint",
                                precision: 3,
                            },
                        }, {
                            caption: "P.A.K TMT",
                            dataField: "P17",
                            dataType: "date",
                            format: "dd/MM/yyyy",
                        }, {
                            caption: "P.A.K TST",
                            dataField: "P18",
                            dataType: "date",
                            format: "dd/MM/yyyy",
                        }, {
                            caption: "Penugasan",
                            dataField: "P19",
                            dataType: "string",
                        }, {
                            caption: "Unit / Satuan Kerja",
                            dataField: "P20",
                            dataType: "string",
                        }, {
                            caption: "Instansi Pemerintahan",
                            dataField: "P21",
                            dataType: "string",
                        }, {
                            caption: "Gaji",
                            dataField: "P22",
                            dataType: "number",
                            format: {
                                type: "fixedPoint",
                            },
                        }, {
                            caption: "Gaji Terbilang",
                            dataField: "P23",
                            dataType: "string",
                        }, {
                            caption: "Peraturan Dasar Gaji",
                            dataField: "P24",
                            dataType: "string",
                        }, {
                            caption: "Peraturan Gaji Berlaku",
                            dataField: "P25",
                            dataType: "string",
                        }, {
                            caption: "Gaji Berlaku",
                            dataField: "P26",
                            dataType: "number",
                            format: {
                                type: "fixedPoint",
                            },
                        }, {
                            caption: "Gaji Berlaku Terbilang",
                            dataField: "P27",
                            dataType: "string",
                        },
                    ],
                },
                {
                    caption: 'Putusan/Penetapan Penugasan Pegawai :',
                    columns: [
                        {
                            caption: "Pejabat",
                            dataField: "O01",
                            dataType: "string",
                        }, {
                            caption: "Nomor",
                            dataField: "O02",
                            dataType: "string",
                        }, {
                            caption: "Tertanggal",
                            dataField: "O03",
                            dataType: "date",
                            format: "dd/MM/yyyy",
                        }, {
                            caption: "Perihal",
                            dataField: "O04",
                            dataType: "string",
                        }, {
                            caption: "TMT Berlaku",
                            dataField: "O05",
                            dataType: "date",
                            format: "dd/MM/yyyy",
                        }, {
                            caption: "Status Pegawai",
                            dataField: "O06",
                            dataType: "string",
                        }, {
                            caption: "Jenis Pegawai",
                            dataField: "O07",
                            dataType: "string",
                        }, {
                            caption: "Kategori PTK",
                            dataField: "O08",
                            dataType: "string",
                        }, {
                            caption: "Jenis PTK",
                            dataField: "O09",
                            dataType: "string",
                        }, {
                            caption: "Gol./Ruang",
                            dataField: "O10",
                            dataType: "string",
                        }, {
                            caption: "GolRuang",
                            dataField: "O11",
                            dataType: "string",
                        }, {
                            caption: "Pangkat",
                            dataField: "O12",
                            dataType: "string",
                        }, {
                            caption: "Jabatan ASN",
                            dataField: "O14",
                            dataType: "string",
                        }, {
                            caption: "Jenjang Jabatan",
                            dataField: "O15",
                            dataType: "string",
                        }, {
                            caption: "Penugasan",
                            dataField: "O19",
                            dataType: "string",
                        },
                    ],
                },
                {
                    caption: 'Catatan Sipil :',
                    columns: [
                        {
                            caption: "NIK",
                            dataField: "A02",
                            dataType: "string",
                            // format: function (value) {
                            //     return value.replace(value.substr(1, 13), "*".repeat(13));
                            // },
                        }, {
                            caption: "Nama",
                            dataField: "A03",
                            dataType: "string",
                        }, {
                            caption: "Gender",
                            dataField: "A04",
                            dataType: "string",
                        }, {
                            caption: "Tempat Lahir",
                            dataField: "A05",
                            dataType: "string",
                        }, {
                            caption: "Tanggal Lahir",
                            dataField: "A06",
                            dataType: "date",
                            format: "dd/MM/yyyy",
                        }, {
                            caption: "Umur",
                            dataField: "A07",
                            dataType: "number",
                        }, {
                            caption: "Agama",
                            dataField: "A08",
                            dataType: "string",
                        }, {
                            caption: "Gol. Darah",
                            dataField: "A09",
                            dataType: "string",
                        }, {
                            caption: "Ayah Kandung",
                            dataField: "A10",
                            dataType: "string",
                        }, {
                            caption: "Ibu Kandung",
                            dataField: "A11",
                            dataType: "string",
                        },
                    ],
                },
                {
                    caption: 'Catatan Kependudukan :',
                    columns: [
                        {
                            caption: "No. KK",
                            dataField: "B01",
                            dataType: "string",
                            // format: function (value) {
                            //     return value.replace(value.substr(1, 13), "*".repeat(13));
                            // },
                        }, {
                            caption: "Tertanggal",
                            dataField: "B02",
                            dataType: "date",
                            format: "dd/MM/yyyy",
                        }, {
                            caption: "Alamat",
                            dataField: "B03",
                            dataType: "string",
                        }, {
                            caption: "RT",
                            dataField: "B04",
                            dataType: "string",
                            format: "000",
                        }, {
                            caption: "RW",
                            dataField: "B05",
                            dataType: "string",
                            format: "000",
                        }, {
                            caption: "Desa/Kelurahan",
                            dataField: "B06",
                            dataType: "string",
                        }, {
                            caption: "Kecamatan",
                            dataField: "B07",
                            dataType: "string",
                        }, {
                            caption: "Pemerintah Daerah",
                            dataField: "B08",
                            dataType: "string",
                        }, {
                            caption: "Pemerintah Propinsi",
                            dataField: "B09",
                            dataType: "string",
                        }, {
                            caption: "Kode Pos",
                            dataField: "B10",
                            dataType: "string",
                        }, {
                            caption: "Status",
                            dataField: "B11",
                            dataType: "string",
                        },
                    ],
                },
                {
                    caption: 'Tempat Tinggal :',
                    columns: [
                        {
                            caption: "Dokumen",
                            dataField: "C01",
                            dataType: "string",
                        }, {
                            caption: "Nomor",
                            dataField: "C02",
                            dataType: "string",
                            format: function (value) {
                                return value.replace(value.substr(1, 13), "*".repeat(13));
                            },
                        }, {
                            caption: "Tertanggal",
                            dataField: "C03",
                            dataType: "date",
                            format: "dd/MM/yyyy",
                        }, {
                            caption: "Alamat",
                            dataField: "C04",
                            dataType: "string",
                        }, {
                            caption: "RT",
                            dataField: "C05",
                            dataType: "string",
                            format: "000",
                        }, {
                            caption: "RT",
                            dataField: "C06",
                            dataType: "string",
                            format: "000",
                        }, {
                            caption: "Desa/Kelurahan",
                            dataField: "C07",
                            dataType: "string",
                        }, {
                            caption: "Kecamatan",
                            dataField: "C08",
                            dataType: "string",
                        }, {
                            caption: "Pemerintah Daerah",
                            dataField: "C09",
                            dataType: "string",
                        }, {
                            caption: "Pemerintah Propinsi",
                            dataField: "C10",
                            dataType: "string",
                        }, {
                            caption: "Kode Pos",
                            dataField: "C11",
                            dataType: "string",
                        }, {
                            caption: "Koordinat",
                            dataField: "C12",
                            dataType: "string",
                        }, {
                            caption: "Jarak ( Km )",
                            dataField: "C13",
                            dataType: "number",
                            format: {
                                type: "fixedPoint",
                                precision: 3,
                            },
                        }, {
                            caption: "Waktu ( Menit )",
                            dataField: "C14",
                            dataType: "number",
                        },
                    ],
                },
                {
                    caption: 'Contact Person :',
                    columns: [
                        {
                            caption: "Telepon",
                            dataField: "D01",
                            dataType: "string",
                        }, {
                            caption: "Whatsapp",
                            dataField: "D02",
                            dataType: "string",
                        }, {
                            caption: "Email PTK",
                            dataField: "D03",
                            dataType: "string",
                        }, {
                            caption: "Belajar Id",
                            dataField: "D04",
                            dataType: "string",
                        },
                    ],
                },
                {
                    caption: 'Keterangan Ijasah :',
                    columns: [
                        {
                            caption: "Jenjang",
                            dataField: "E01",
                            dataType: "string",
                        }, {
                            caption: "Satuan Pendidikan",
                            dataField: "E02",
                            dataType: "string",
                        }, {
                            caption: "Nomor",
                            dataField: "E03",
                            dataType: "string",
                        }, {
                            caption: "Tertanggal",
                            dataField: "E04",
                            dataType: "date",
                            format: "dd/MM/yyyy",
                        }, {
                            caption: "NIM",
                            dataField: "E05",
                            dataType: "string",
                        },
                    ],
                },
                {
                    caption: 'Keterangan Lulusan :',
                    columns: [
                        {
                            caption: "Tanggal",
                            dataField: "E06",
                            dataType: "date",
                            format: "dd/MM/yyyy",
                        }, {
                            caption: "Jurusan/ Program Studi",
                            dataField: "E07",
                            dataType: "string",
                        }, {
                            caption: "Fakultas",
                            dataField: "E08",
                            dataType: "string",
                        }, {
                            caption: "Gelar Depan",
                            dataField: "E09",
                            dataType: "string",
                        }, {
                            caption: "Gelar Belakang",
                            dataField: "E10",
                            dataType: "string",
                        }, {
                            caption: "Nilai Ujian/ IPK",
                            dataField: "E11",
                            dataType: "number",
                            format: {
                                type: "fixedPoint",
                                precision: 3,
                            },
                        }, {
                            caption: "Akta Mengajar",
                            dataField: "E12",
                            dataType: "string",
                        }, {
                            caption: "Keterangan Pendidikan",
                            dataField: "E13",
                            dataType: "string",
                        },
                    ],
                },
                {
                    caption: 'Penetapan/Putusan Non ASN ( Awal ) :',
                    columns: [
                        {
                            caption: "Pejabat",
                            dataField: "G01",
                            dataType: "string",
                        }, {
                            caption: "Nomor",
                            dataField: "G02",
                            dataType: "string",
                        }, {
                            caption: "Tertanggal",
                            dataField: "G03",
                            dataType: "date",
                            format: "dd/MM/yyyy",
                        }, {
                            caption: "Perihal",
                            dataField: "G04",
                            dataType: "string",
                        }, {
                            caption: "TMT Berlaku",
                            dataField: "G05",
                            dataType: "date",
                            format: "dd/MM/yyyy",
                        }, {
                            caption: "Status Pegawai",
                            dataField: "G06",
                            dataType: "string",
                        }, {
                            caption: "Jenis Pegawai",
                            dataField: "G07",
                            dataType: "string",
                        }, {
                            caption: "Kategori PTK",
                            dataField: "G08",
                            dataType: "string",
                        }, {
                            caption: "Jenis PTK",
                            dataField: "G09",
                            dataType: "string",
                        }, {
                            caption: "Masa Kerja",
                            dataField: "G13",
                            dataType: "string",
                        }, {
                            caption: "Penugasan",
                            dataField: "G19",
                            dataType: "string",
                        }, {
                            caption: "Unit / Satuan Kerja",
                            dataField: "G20",
                            dataType: "string",
                        }, {
                            caption: "Instansi Pemerintahan",
                            dataField: "G21",
                            dataType: "string",
                        }, {
                            caption: "Gaji",
                            dataField: "G22",
                            dataType: "number",
                            format: {
                                type: "fixedPoint",
                            },
                        }, {
                            caption: "Gaji Terbilang",
                            dataField: "G23",
                            dataType: "string",
                        },
                    ],
                },
                {
                    caption: 'Penetapan/Putusan Non ASN ( Akhir ) :',
                    columns: [
                        {
                            caption: "Pejabat",
                            dataField: "H01",
                            dataType: "string",
                        }, {
                            caption: "Nomor",
                            dataField: "H02",
                            dataType: "string",
                        }, {
                            caption: "Tertanggal",
                            dataField: "H03",
                            dataType: "date",
                            format: "dd/MM/yyyy",
                        }, {
                            caption: "Perihal",
                            dataField: "H04",
                            dataType: "string",
                        }, {
                            caption: "TMT Berlaku",
                            dataField: "H05",
                            dataType: "date",
                            format: "dd/MM/yyyy",
                        }, {
                            caption: "Status Pegawai",
                            dataField: "H06",
                            dataType: "string",
                        }, {
                            caption: "Jenis Pegawai",
                            dataField: "H07",
                            dataType: "string",
                        }, {
                            caption: "Kategori PTK",
                            dataField: "H08",
                            dataType: "string",
                        }, {
                            caption: "Jenis PTK",
                            dataField: "H09",
                            dataType: "string",
                        }, {
                            caption: "Masa Kerja",
                            dataField: "H13",
                            dataType: "string",
                        }, {
                            caption: "Penugasan",
                            dataField: "H19",
                            dataType: "string",
                        }, {
                            caption: "Unit / Satuan Kerja",
                            dataField: "H20",
                            dataType: "string",
                        }, {
                            caption: "Instansi Pemerintahan",
                            dataField: "H21",
                            dataType: "string",
                        }, {
                            caption: "Gaji",
                            dataField: "H22",
                            dataType: "number",
                            format: {
                                type: "fixedPoint",
                            },
                        }, {
                            caption: "Gaji Terbilang",
                            dataField: "H23",
                            dataType: "string",
                        },
                    ],
                },
                {
                    caption: 'Penetapan/Putusan CPNS :',
                    columns: [
                        {
                            caption: "Pejabat",
                            dataField: "I01",
                            dataType: "string",
                        }, {
                            caption: "Nomor",
                            dataField: "I02",
                            dataType: "string",
                        }, {
                            caption: "Tertanggal",
                            dataField: "I03",
                            dataType: "date",
                            format: "dd/MM/yyyy",
                        }, {
                            caption: "Perihal",
                            dataField: "I04",
                            dataType: "string",
                        }, {
                            caption: "TMT Berlaku",
                            dataField: "I05",
                            dataType: "date",
                            format: "dd/MM/yyyy",
                        }, {
                            caption: "Status Pegawai",
                            dataField: "I06",
                            dataType: "string",
                        }, {
                            caption: "Jenis Pegawai",
                            dataField: "I07",
                            dataType: "string",
                        }, {
                            caption: "Kategori PTK",
                            dataField: "I08",
                            dataType: "string",
                        }, {
                            caption: "Jenis PTK",
                            dataField: "I09",
                            dataType: "string",
                        }, {
                            caption: "Gol./Ruang",
                            dataField: "I10",
                            dataType: "string",
                        }, {
                            caption: "GolRuang",
                            dataField: "I11",
                            dataType: "string",
                        }, {
                            caption: "Pangkat",
                            dataField: "I12",
                            dataType: "string",
                        }, {
                            caption: "Masa Kerja",
                            dataField: "I13",
                            dataType: "string",
                        }, {
                            caption: "Penugasan",
                            dataField: "I19",
                            dataType: "string",
                        }, {
                            caption: "Unit / Satuan Kerja",
                            dataField: "I20",
                            dataType: "string",
                        }, {
                            caption: "Instansi Pemerintahan",
                            dataField: "I21",
                            dataType: "string",
                        }, {
                            caption: "Gaji",
                            dataField: "I22",
                            dataType: "number",
                            format: {
                                type: "fixedPoint",
                            },
                        }, {
                            caption: "Gaji Terbilang",
                            dataField: "I23",
                            dataType: "string",
                        }, {
                            caption: "Peraturan Dasar Gaji",
                            dataField: "I24",
                            dataType: "string",
                        },
                    ],
                },
                {
                    caption: 'Penetapan/Putusan ASN :',
                    columns: [
                        {
                            caption: "Pejabat",
                            dataField: "J01",
                            dataType: "string",
                        }, {
                            caption: "Nomor",
                            dataField: "J02",
                            dataType: "string",
                        }, {
                            caption: "Tertanggal",
                            dataField: "J03",
                            dataType: "date",
                            format: "dd/MM/yyyy",
                        }, {
                            caption: "Perihal",
                            dataField: "J04",
                            dataType: "string",
                        }, {
                            caption: "TMT Berlaku",
                            dataField: "J05",
                            dataType: "date",
                            format: "dd/MM/yyyy",
                        }, {
                            caption: "Status Pegawai",
                            dataField: "J06",
                            dataType: "string",
                        }, {
                            caption: "Jenis Pegawai",
                            dataField: "J07",
                            dataType: "string",
                        }, {
                            caption: "Kategori PTK",
                            dataField: "J08",
                            dataType: "string",
                        }, {
                            caption: "Jenis PTK",
                            dataField: "J09",
                            dataType: "string",
                        }, {
                            caption: "Gol./Ruang",
                            dataField: "J10",
                            dataType: "string",
                        }, {
                            caption: "GolRuang",
                            dataField: "J11",
                            dataType: "string",
                        }, {
                            caption: "Pangkat",
                            dataField: "J12",
                            dataType: "string",
                        }, {
                            caption: "Masa Kerja",
                            dataField: "J13",
                            dataType: "string",
                        }, {
                            caption: "Jabatan ASN",
                            dataField: "J14",
                            dataType: "string",
                        }, {
                            caption: "Jenjang Jabatan",
                            dataField: "J15",
                            dataType: "string",
                        }, {
                            caption: "Angka Kredit",
                            dataField: "J16",
                            dataType: "number",
                            format: {
                                type: "fixedPoint",
                                precision: 3,
                            },
                        }, {
                            caption: "Penugasan",
                            dataField: "J19",
                            dataType: "string",
                        }, {
                            caption: "Unit / Satuan Kerja",
                            dataField: "J20",
                            dataType: "string",
                        }, {
                            caption: "Instansi Pemerintahan",
                            dataField: "J21",
                            dataType: "string",
                        }, {
                            caption: "Gaji",
                            dataField: "J22",
                            dataType: "number",
                            format: {
                                type: "fixedPoint",
                            },
                        }, {
                            caption: "Gaji Terbilang",
                            dataField: "J23",
                            dataType: "string",
                        }, {
                            caption: "Peraturan Dasar Gaji",
                            dataField: "J24",
                            dataType: "string",
                        },
                    ],
                },
                {
                    caption: 'Penetapan/Putusan Kepangkatan :',
                    columns: [
                        {
                            caption: "Pejabat",
                            dataField: "K01",
                            dataType: "string",
                        }, {
                            caption: "Nomor",
                            dataField: "K02",
                            dataType: "string",
                        }, {
                            caption: "Tertanggal",
                            dataField: "K03",
                            dataType: "date",
                            format: "dd/MM/yyyy",
                        }, {
                            caption: "Perihal",
                            dataField: "K04",
                            dataType: "string",
                        }, {
                            caption: "TMT Berlaku",
                            dataField: "K05",
                            dataType: "date",
                            format: "dd/MM/yyyy",
                        }, {
                            caption: "Status Pegawai",
                            dataField: "K06",
                            dataType: "string",
                        }, {
                            caption: "Jenis Pegawai",
                            dataField: "K07",
                            dataType: "string",
                        }, {
                            caption: "Kategori PTK",
                            dataField: "K08",
                            dataType: "string",
                        }, {
                            caption: "Jenis PTK",
                            dataField: "K09",
                            dataType: "string",
                        }, {
                            caption: "Gol./Ruang",
                            dataField: "K10",
                            dataType: "string",
                        }, {
                            caption: "GolRuang",
                            dataField: "K11",
                            dataType: "string",
                        }, {
                            caption: "Pangkat",
                            dataField: "K12",
                            dataType: "string",
                        }, {
                            caption: "Masa Kerja",
                            dataField: "K13",
                            dataType: "string",
                        }, {
                            caption: "Jabatan ASN",
                            dataField: "K14",
                            dataType: "string",
                        }, {
                            caption: "Jenjang Jabatan",
                            dataField: "K15",
                            dataType: "string",
                        }, {
                            caption: "Angka Kredit",
                            dataField: "K16",
                            dataType: "number",
                            format: {
                                type: "fixedPoint",
                                precision: 3,
                            },
                        }, {
                            caption: "Penugasan",
                            dataField: "K19",
                            dataType: "string",
                        }, {
                            caption: "Unit / Satuan Kerja",
                            dataField: "K20",
                            dataType: "string",
                        }, {
                            caption: "Instansi Pemerintahan",
                            dataField: "K21",
                            dataType: "string",
                        }, {
                            caption: "Gaji",
                            dataField: "K22",
                            dataType: "number",
                            format: {
                                type: "fixedPoint",
                            },
                        }, {
                            caption: "Gaji Terbilang",
                            dataField: "K23",
                            dataType: "string",
                        }, {
                            caption: "Peraturan Dasar Gaji",
                            dataField: "K24",
                            dataType: "string",
                        },
                    ],
                },
                {
                    caption: 'Penetapan/Putusan Kenaikan Gaji Berkala :',
                    columns: [
                        {
                            caption: "Pejabat",
                            dataField: "L01",
                            dataType: "string",
                        }, {
                            caption: "Nomor",
                            dataField: "L02",
                            dataType: "string",
                        }, {
                            caption: "Tertanggal",
                            dataField: "L03",
                            dataType: "date",
                            format: "dd/MM/yyyy",
                        }, {
                            caption: "Perihal",
                            dataField: "L04",
                            dataType: "string",
                        }, {
                            caption: "TMT Berlaku",
                            dataField: "L05",
                            dataType: "date",
                            format: "dd/MM/yyyy",
                        }, {
                            caption: "Status Pegawai",
                            dataField: "L06",
                            dataType: "string",
                        }, {
                            caption: "Jenis Pegawai",
                            dataField: "L07",
                            dataType: "string",
                        }, {
                            caption: "Kategori PTK",
                            dataField: "L08",
                            dataType: "string",
                        }, {
                            caption: "Jenis PTK",
                            dataField: "L09",
                            dataType: "string",
                        }, {
                            caption: "Gol./Ruang",
                            dataField: "L10",
                            dataType: "string",
                        }, {
                            caption: "GolRuang",
                            dataField: "L11",
                            dataType: "string",
                        }, {
                            caption: "Pangkat",
                            dataField: "L12",
                            dataType: "string",
                        }, {
                            caption: "Masa Kerja",
                            dataField: "L13",
                            dataType: "string",
                        }, {
                            caption: "Jabatan ASN",
                            dataField: "L14",
                            dataType: "string",
                        }, {
                            caption: "Jenjang Jabatan",
                            dataField: "L15",
                            dataType: "string",
                        }, {
                            caption: "Penugasan",
                            dataField: "L19",
                            dataType: "string",
                        }, {
                            caption: "Unit / Satuan Kerja",
                            dataField: "L20",
                            dataType: "string",
                        }, {
                            caption: "Instansi Pemerintahan",
                            dataField: "L21",
                            dataType: "string",
                        }, {
                            caption: "Gaji",
                            dataField: "L22",
                            dataType: "number",
                            format: {
                                type: "fixedPoint",
                            },
                        }, {
                            caption: "Gaji Terbilang",
                            dataField: "L23",
                            dataType: "string",
                        }, {
                            caption: "Peraturan Dasar Gaji",
                            dataField: "L24",
                            dataType: "string",
                        },
                    ],
                },
                {
                    caption: 'Penetapan/Putusan Jabatan :',
                    columns: [
                        {
                            caption: "Pejabat",
                            dataField: "M01",
                            dataType: "string",
                        }, {
                            caption: "Nomor",
                            dataField: "M02",
                            dataType: "string",
                        }, {
                            caption: "Tertanggal",
                            dataField: "M03",
                            dataType: "date",
                            format: "dd/MM/yyyy",
                        }, {
                            caption: "Perihal",
                            dataField: "M04",
                            dataType: "string",
                        }, {
                            caption: "TMT Berlaku",
                            dataField: "M05",
                            dataType: "date",
                            format: "dd/MM/yyyy",
                        }, {
                            caption: "Status Pegawai",
                            dataField: "M06",
                            dataType: "string",
                        }, {
                            caption: "Jenis Pegawai",
                            dataField: "M07",
                            dataType: "string",
                        }, {
                            caption: "Kategori PTK",
                            dataField: "M08",
                            dataType: "string",
                        }, {
                            caption: "Jenis PTK",
                            dataField: "M09",
                            dataType: "string",
                        }, {
                            caption: "Gol./Ruang",
                            dataField: "M10",
                            dataType: "string",
                        }, {
                            caption: "GolRuang",
                            dataField: "M11",
                            dataType: "string",
                        }, {
                            caption: "Pangkat",
                            dataField: "M12",
                            dataType: "string",
                        }, {
                            caption: "Jabatan ASN",
                            dataField: "M14",
                            dataType: "string",
                        }, {
                            caption: "Jenjang Jabatan",
                            dataField: "M15",
                            dataType: "string",
                        }, {
                            caption: "Angka Kredit",
                            dataField: "M16",
                            dataType: "number",
                            format: {
                                type: "fixedPoint",
                                precision: 3,
                            },
                        }, {
                            caption: "Penugasan",
                            dataField: "M19",
                            dataType: "string",
                        }, {
                            caption: "Unit / Satuan Kerja",
                            dataField: "M20",
                            dataType: "string",
                        }, {
                            caption: "Instansi Pemerintahan",
                            dataField: "M21",
                            dataType: "string",
                        },
                    ],
                },
                {
                    caption: 'Penetapan/Putusan Angka Kredit :',
                    columns: [
                        {
                            caption: "Pejabat",
                            dataField: "N01",
                            dataType: "string",
                        }, {
                            caption: "Nomor",
                            dataField: "N02",
                            dataType: "string",
                        }, {
                            caption: "Tertanggal",
                            dataField: "N03",
                            dataType: "date",
                            format: "dd/MM/yyyy",
                        }, {
                            caption: "Perihal",
                            dataField: "N04",
                            dataType: "string",
                        }, {
                            caption: "TMT Berlaku",
                            dataField: "N05",
                            dataType: "date",
                            format: "dd/MM/yyyy",
                        }, {
                            caption: "Status Pegawai",
                            dataField: "N06",
                            dataType: "string",
                        }, {
                            caption: "Jenis Pegawai",
                            dataField: "N07",
                            dataType: "string",
                        }, {
                            caption: "Kategori PTK",
                            dataField: "N08",
                            dataType: "string",
                        }, {
                            caption: "Jenis PTK",
                            dataField: "N09",
                            dataType: "string",
                        }, {
                            caption: "Gol./Ruang",
                            dataField: "N10",
                            dataType: "string",
                        }, {
                            caption: "GolRuang",
                            dataField: "N11",
                            dataType: "string",
                        }, {
                            caption: "Pangkat",
                            dataField: "N12",
                            dataType: "string",
                        }, {
                            caption: "Jabatan ASN",
                            dataField: "N14",
                            dataType: "string",
                        }, {
                            caption: "Jenjang Jabatan",
                            dataField: "N15",
                            dataType: "string",
                        }, {
                            caption: "Angka Kredit",
                            dataField: "N16",
                            dataType: "number",
                            format: {
                                type: "fixedPoint",
                                precision: 3,
                            },
                        }, {
                            caption: "P.A.K TMT",
                            dataField: "N17",
                            dataType: "date",
                            format: "dd/MM/yyyy",
                        }, {
                            caption: "P.A.K TST",
                            dataField: "N18",
                            dataType: "date",
                            format: "dd/MM/yyyy",
                        }, {
                            caption: "Penugasan",
                            dataField: "N19",
                            dataType: "string",
                        }, {
                            caption: "Unit / Satuan Kerja",
                            dataField: "N20",
                            dataType: "string",
                        }, {
                            caption: "Instansi Pemerintahan",
                            dataField: "N21",
                            dataType: "string",
                        },
                    ],
                },
            ],

        };

    // _objElement = {
    //     InformasiInstrumenDataPegawai:
    $('#InformasiInstrumenDataPegawai').dxDataGrid({
        onContentReady: function (e) {
            if (!e.component._isReady) {
                const getQuery = GetVisualizationQuery(
                    _main.appConfig.dataSource.Kepegawaian, //SpreadsheetID
                    1523976848,                                     //SheetID
                    "A4:LP",                                        //Range
                    "SELECT * WHERE A <> ''"                         //Filter or Query
                );
                getQuery.send(response => {
                    GetJsonData(response);
                    this.option("dataSource", _main.arrVarGlobal._dataArray.length != 0 ? _main.arrVarGlobal._dataArray : null);
                });
                delete getQuery;
                _main.arrVarGlobal._columnArray = [];
                _main.arrVarGlobal._dataArray = [];
                e.component._isReady = true;
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

});