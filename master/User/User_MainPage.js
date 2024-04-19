_element.PageToolbar.option("items[1].text", "e-Platform Authentication");
_element.PageToolbar.option("items[2].visible", false);
_main.arrVarGlobal._ParentPageContains = "/master/Homepage/Homepage_Home.html";

$(document).ready(function () {

  var
    _Authentication = {
      formData: {
        currentUser: _main.account.user,
        dataPersonal: null,
      },
      formOption: [
        {
          itemType: "group",
          caption: "Instrumen Data Personal",
          items: [{
            itemType: "tabbed",
            tabPanelOptions: {
              hoverStateEnabled: false,
              focusStateEnabled: false,
              activeStateEnabled: true,
              scrollByContent: true,
              scrollingEnabled: true,
              showNavButtons: false,
              stylingMode: "primary",
              swipeEnabled: true,
            },
            tabs: undefined,
          }],
        },
      ],

    },
    getQuery = null;

  switch (_main.account.user.userstate) {
    case "Peserta Didik":
      getQuery = GetVisualizationQuery(
        _main.appConfig.dataSource.Kesiswaan,           //SpreadsheetID
        1300103800,                                     //SheetID
        "A1:CX",                                        //Range
        "SELECT * WHERE E = '" + _main.account.user.userid + "'"   //Filter or Query
      );
      getQuery.send(response => {
        GetJsonData(response);
        if (_main.arrVarGlobal._dataArray.length != 0) {
          _Authentication.formData.dataPersonal = _main.arrVarGlobal._dataArray;

          formPesertaDidik(_Authentication.formData);
          _Authentication.formOption[0].items[0].tabs = _main.arrVarGlobal._data;

          const newForm = addPageForm(
            "#UserAuthentication",
            1,
            _Authentication.formData.dataPersonal[0],
            _Authentication.formOption,
          );

          // newForm.option("formData",newForm.option("selectedIndex") == 0 ? _Authentication.formData.currentUser : _Authentication.formData.dataPersonal);
        }
      });
      break;

    case "Pendidik":
      getQuery = GetVisualizationQuery(
        _main.appConfig.dataSource.Kepegawaian,                   //SpreadsheetID
        1523976848,                                               //SheetID
        "A4:LP",                                                  //Range
        "SELECT * WHERE A  '" + _main.account.user.userid + "')"  //Filter or Query
      );
      getQuery.send(response => {
        GetJsonData(response);
        if (_main.arrVarGlobal._dataArray.length != 0) {
          formPendidik(getQuery);
        }
      });
      break;

    case "Kependidikan":
      getQuery = GetVisualizationQuery(
        _main.appConfig.dataSource.Kepegawaian,                   //SpreadsheetID
        1523976848,                                               //SheetID
        "A4:LP",                                                  //Range
        "SELECT * WHERE A  '" + _main.account.user.userid + "')"  //Filter or Query
      );
      getQuery.send(response => {
        GetJsonData(response);
        if (_main.arrVarGlobal._dataArray.length != 0) {
          formKependidikan(getQuery);
        }
      });
      break;

    default:
      break;
  };

  delete _Authentication;
  delete getQuery;
  _main.arrVarGlobal._data = null;
  _main.arrVarGlobal._columnArray = [];
  _main.arrVarGlobal._dataArray = [];

  // ===============================================================================================
  $("#UserMainPage").dxScrollView({
    scrollByContent: true,
    scrollByThumb: true,
    useNative: false,
    showScrollbar: 'onHover',
  });

});

// ===============================================================================================
function formPesertaDidik(dataSource) {

  _main.arrVarGlobal._data = [
    {
      title: "User Account",
      items: [
        {
          itemType: "group",
          colCount: "auto",
          items: [
            {
              itemType: "group",
              items: [
                {
                  template: `
                    <div id=UserPict style="text-align: center; vertical-align: middle;">
                      <img src=${dataSource.currentUser.photo} style="display:inline-flex;object-fit:scale-down;max-width:198px;"></img>
                    </div>`
                },
              ],
            },

            {
              itemType: "group",
              caption: "User Info",
              items: [
                {
                  dataField: "",
                  editorOptions: {
                    value: dataSource.currentUser.username,
                  },
                  label: {
                    text: "Username",
                  },
                },
                {
                  dataField: "",
                  editorOptions: {
                    value: dataSource.currentUser.userstate,
                  },
                  label: {
                    text: "Group",
                  },
                },
                {
                  dataField: "",
                  editorOptions: {
                    value: dataSource.currentUser.userdept,
                  },
                  label: {
                    text: "sub-Group",
                  },
                },
              ]
            },

            {
              itemType: "group",
              caption: "Account Info",
              items: [
                {
                  dataField: "",
                  editorOptions: {
                    value: dataSource.currentUser.useremail,
                  },
                  label: {
                    text: "Email",
                  },
                },
                {
                  dataField: "",
                  editorOptions: {
                    value: dataSource.currentUser.sub,
                  },
                  label: {
                    text: "Account Id",
                  },
                }
              ]
            },

          ],

        },
      ],
    },

    {
      title: "Identitas Peserta Didik",
      items: [
        {
          itemType: "group",
          colCount: "auto",
          items: [
            {
              itemType: "group",
              items: [
                {
                  itemType: "group",
                  caption: "Data Induk",
                  items: [
                    {
                      dataField: "B01",
                      label: {
                        text: "NIPD",
                      },
                    },
                    {
                      dataField: "B02",
                      label: {
                        text: "NISN",
                      },
                    },
                    {
                      dataField: "B03",
                      label: {
                        text: "Nama Lengkap",
                      },
                    },
                  ],
                },
                {
                  itemType: "group",
                  caption: "Rombongan Belajar",
                  items: [
                    {
                      dataField: "A01",
                      label: {
                        text: "Id Kelas",
                      },
                    },
                    {
                      dataField: "A02",
                      label: {
                        text: "Tahun Akademik",
                      },
                    },
                    {
                      dataField: "A03",
                      label: {
                        text: "Rombel",
                      },
                    },
                    {
                      dataField: "A04",
                      label: {
                        text: "No. Urut",
                      },
                    },
                  ]
                },
              ],
            },
            {
              itemType: "group",
              caption: "Catatan Sipil",
              items: [
                {
                  dataField: "C01",
                  label: {
                    text: "NIK",
                  },
                },
                {
                  dataField: "C02",
                  label: {
                    text: "No. Register",
                  },
                },
                {
                  dataField: "C03",
                  label: {
                    text: "No. Akta Kelahiran",
                  },
                },
                {
                  dataField: "C04",
                  editorType: "dxDateBox",
                  editorOptions: {
                    displayFormat: "dd/MM/yyyy",
                  },
                  label: {
                    text: "Tertanggal",
                  },
                },
                {
                  dataField: "C05",
                  label: {
                    text: "Gender",
                  },
                },
                {
                  dataField: "C06",
                  label: {
                    text: "Tempat Lahir",
                  },
                },
                {
                  dataField: "C07",
                  editorType: "dxDateBox",
                  editorOptions: {
                    displayFormat: "dd/MM/yyyy",
                  },
                  label: {
                    text: "Tanggal Lahir",
                  },
                },
                {
                  dataField: "C08",
                  label: {
                    text: "Anak Ke-",
                  },
                },

              ],
            },
          ],
        },
      ]
    },

    {
      title: "Catatan Kependudukan",
      items: [
        {
          itemType: "group",
          colCount: "auto",
          items: [
            {
              itemType: "group",
              items: [
                {
                  dataField: "D01",
                  label: {
                    text: "No. KK",
                  },
                },
                {
                  dataField: "D02",
                  // editorType: "dxDateBox",
                  editorOptions: {
                    format: "dd/MM/yyyy",
                  },
                  label: {
                    text: "Tertanggal",
                  },
                },
                {
                  dataField: "D03",
                  label: {
                    text: "Alamat",
                  },
                },
                {
                  dataField: "D04",
                  editorOptions:{
                    format: "000",
                  },
                  label: {
                    text: "RT",
                  },
                },
                {
                  dataField: "D05",
                  editorOptions:{
                    format: "000",
                  },
                  label: {
                    text: "RW",
                  },
                },
                {
                  itemType: "empty",
                },

              ]
            },

            {
              itemType: "group",
              items: [
                {
                  dataField: "D06",
                  label: {
                    text: "Desa/Kelurahan",
                  },
                },
                {
                  dataField: "D07",
                  label: {
                    text: "Kecamatan",
                  },
                },
                {
                  dataField: "D08",
                  label: {
                    text: "Pemerintah Daerah",
                  },
                },
                {
                  dataField: "D09",
                  label: {
                    text: "Pemerintah Propinsi",
                  },
                },
                {
                  dataField: "D10",
                  label: {
                    text: "Kode Pos",
                  },
                },
                {
                  dataField: "D11",
                  label: {
                    text: "Agama",
                  },
                },

              ],
            },
          ],
        },
      ],
    },

    {
      title: "Keterangan Tempat Tinggal",
      items: [
        {
          itemType: "group",
          colCount: "auto",
          items: [
            {
              itemType: "group",
              items: [
                {
                  dataField: "E01",
                  label: {
                    text: "Dokumen",
                  },
                },
                {
                  dataField: "E02",
                  label: {
                    text: "No. Dokumen",
                  },
                },
                {
                  dataField: "E03",
                  editorType: "dxDateBox",
                  editorOptions: {
                    displayFormat: "dd/MM/yyyy",
                  },
                  label: {
                    text: "Tertanggal",
                  },
                },
                {
                  dataField: "E04",
                  label: {
                    text: "Alamat",
                  },
                },
                {
                  dataField: "E05",
                  editorOptions:{
                    format: "000",
                  },
                  label: {
                    text: "RT",
                  },
                },
                {
                  dataField: "E06",
                  editorOptions:{
                    format: "000",
                  },
                  label: {
                    text: "RW",
                  },
                },
                {
                  itemType: "empty",
                },

              ]
            },

            {
              itemType: "group",
              items: [
                {
                  dataField: "E07",
                  label: {
                    text: "Desa/Kelurahan",
                  },
                },
                {
                  dataField: "E08",
                  label: {
                    text: "Kecamatan",
                  },
                },
                {
                  dataField: "E09",
                  label: {
                    text: "Pemerintah Daerah",
                  },
                },
                {
                  dataField: "E10",
                  label: {
                    text: "Pemerintah Propinsi",
                  },
                },
                {
                  dataField: "E11",
                  label: {
                    text: "Kode Pos",
                  },
                },
                {
                  dataField: "E12",
                  label: {
                    text: "Koordinat",
                  },
                },
                {
                  dataField: "E13",
                  editorOptions:{
                    format: "#0.000 Km",
                  },
                  label: {
                    text: "Jarak",
                  },
                },
                {
                  dataField: "E14",
                  editorOptions:{
                    format: "#0 menit",
                  },
                  label: {
                    text: "Waktu Tempuh",
                  },
                },

              ],
            },
          ],
        },
      ],
    },

    {
      title: "Keterangan Ayah Kandung",
      items: [
        {
          itemType: "group",
          colCount: "auto",
          items: [
            {
              itemType: "group",
              items: [
                {
                  dataField: "F01",
                  label: {
                    text: "Nama Lengkap",
                  },
                },
                {
                  dataField: "F02",
                  label: {
                    text: "Gelar Depan",
                  },
                },
                {
                  dataField: "F03",
                  label: {
                    text: "Gelar Belakang",
                  },
                },
                {
                  dataField: "F04",
                  label: {
                    text: "NIK",
                  },
                },
                {
                  dataField: "F05",
                  label: {
                    text: "Tempat Lahir",
                  },
                },
                {
                  dataField: "F06",
                  editorType: "dxDateBox",
                  editorOptions: {
                    displayFormat: "dd/MM/yyyy",
                  },
                  label: {
                    text: "Tanggal Lahir",
                  },
                },
                {
                  itemType: "empty",
                },

              ]
            },

            {
              itemType: "group",
              items: [
                {
                  dataField: "F07",
                  label: {
                    text: "Agama",
                  },
                },
                {
                  dataField: "F08",
                  label: {
                    text: "Pendidikan",
                  },
                },
                {
                  dataField: "F09",
                  label: {
                    text: "Pekerjaan",
                  },
                },
                {
                  dataField: "F10",
                  label: {
                    text: "Status Perkawinan",
                  },
                },
                {
                  dataField: "F11",
                  editorType: "dxDateBox",
                  editorOptions: {
                    displayFormat: "dd/MM/yyyy",
                  },
                  label: {
                    text: "Tanggal Meninggal",
                  },
                },

              ],
            },
          ],
        },
      ],
    },

    {
      title: "Keterangan Ibu Kandung",
      items: [
        {
          itemType: "group",
          colCount: "auto",
          items: [
            {
              itemType: "group",
              items: [
                {
                  dataField: "G01",
                  label: {
                    text: "Nama Lengkap",
                  },
                },
                {
                  dataField: "G02",
                  label: {
                    text: "Gelar Depan",
                  },
                },
                {
                  dataField: "G03",
                  label: {
                    text: "Gelar Belakang",
                  },
                },
                {
                  dataField: "G04",
                  label: {
                    text: "NIK",
                  },
                },
                {
                  dataField: "G05",
                  label: {
                    text: "Tempat Lahir",
                  },
                },
                {
                  dataField: "G06",
                  editorType: "dxDateBox",
                  editorOptions: {
                    displayFormat: "dd/MM/yyyy",
                  },
                  label: {
                    text: "Tanggal Lahir",
                  },
                },
                {
                  itemType: "empty",
                },

              ]
            },

            {
              itemType: "group",
              items: [
                {
                  dataField: "G07",
                  label: {
                    text: "Agama",
                  },
                },
                {
                  dataField: "G08",
                  label: {
                    text: "Pendidikan",
                  },
                },
                {
                  dataField: "G09",
                  label: {
                    text: "Pekerjaan",
                  },
                },
                {
                  dataField: "G10",
                  label: {
                    text: "Status Perkawinan",
                  },
                },
                {
                  dataField: "G11",
                  editorType: "dxDateBox",
                  editorOptions: {
                    displayFormat: "dd/MM/yyyy",
                  },
                  label: {
                    text: "Tanggal Meninggal",
                  },
                },

              ],
            },
          ],
        },
      ],
    },

    {
      title: "Keterangan Wali",
      items: [
        {
          itemType: "group",
          colCount: "auto",
          items: [
            {
              itemType: "group",
              items: [
                {
                  dataField: "H01",
                  label: {
                    text: "Hubungan Keluarga",
                  },
                },
                {
                  dataField: "H02",
                  label: {
                    text: "Nama Lengkap",
                  },
                },
                {
                  dataField: "H03",
                  label: {
                    text: "Gelar Depan",
                  },
                },
                {
                  dataField: "H04",
                  label: {
                    text: "Gelar Belakang",
                  },
                },
                {
                  itemType: "empty",
                },

              ]
            },

            {
              itemType: "group",
              items: [
                {
                  dataField: "H05",
                  label: {
                    text: "NIK",
                  },
                },
                {
                  dataField: "H06",
                  label: {
                    text: "Tempat Lahir",
                  },
                },
                {
                  dataField: "H07",
                  editorType: "dxDateBox",
                  editorOptions: {
                    displayFormat: "dd/MM/yyyy",
                  },
                  label: {
                    text: "Tanggal Lahir",
                  },
                },
                {
                  dataField: "H08",
                  label: {
                    text: "Agama",
                  },
                },
                {
                  dataField: "H09",
                  label: {
                    text: "Pendidikan",
                  },
                },
                {
                  dataField: "H10",
                  label: {
                    text: "Pekerjaan",
                  },
                },
              ],
            },
          ],
        },
      ],
    },

    {
      title: "Keterangan Data Dinamis",
      items: [
        {
          itemType: "group",
          colCount: "auto",
          items: [
            {
              itemType: "group",
              items: [
                {
                  dataField: "I01",
                  label: {
                    text: "No. Telpon",
                  },
                },
                {
                  dataField: "I02",
                  label: {
                    text: "Tinggi Badan ( Cm )",
                  },
                },
                {
                  dataField: "I03",
                  label: {
                    text: "Berat Badan ( Kg )",
                  },
                },
                {
                  dataField: "I04",
                  label: {
                    text: "Lingkar Kepala ( Cm )",
                  },
                },
                {
                  dataField: "I05",
                  label: {
                    text: "Hobi",
                  },
                },
                {
                  dataField: "I06",
                  label: {
                    text: "Cita-cita",
                  },
                },
                {
                  dataField: "I07",
                  label: {
                    text: "Bakat",
                  },
                },
                {
                  itemType: "empty",
                },

              ]
            },

            {
              itemType: "group",
              items: [
                {
                  dataField: "I08",
                  label: {
                    text: "Berkebutuhan Khusus",
                  },
                },
                {
                  dataField: "I09",
                  label: {
                    text: "Jml. Sdr. Kandung",
                  },
                },
                {
                  dataField: "I10",
                  label: {
                    text: "Jml. Sdr. Tiri",
                  },
                },
                {
                  dataField: "I11",
                  label: {
                    text: "Jml. Sdr. Angkat",
                  },
                },
                {
                  dataField: "I12",
                  label: {
                    text: "Status Sosial Anak",
                  },
                },

              ],
            },
          ],
        },
      ],
    },

    {
      title: "Jaminan Sosial Pendidikan",
      items: [
        {
          itemType: "group",
          items: [
            {
              dataField: "J01",
              label: {
                text: "Jenis Jamsos",
              },
            },
            {
              dataField: "J02",
              label: {
                text: "No. Jamsos",
              },
            },
            {
              dataField: "J03",
              label: {
                text: "Nomor Rekening PIP",
              },
            },
            {
              dataField: "J04",
              label: {
                text: "Nama Bank PIP",
              },
            },
          ]
        },
      ],
    },

    {
      title: "Penerimaan Peserta Didik",
      items: [
        {
          itemType: "group",
          colCount: "auto",
          items: [
            {
              itemType: "group",
              caption: "Registrasi",
              items: [
                {
                  dataField: "K01",
                  label: {
                    text: "Jalur Penerimaan",
                  },
                },
                {
                  dataField: "K02",
                  label: {
                    text: "Nomor Daftar / Dokumen",
                  },
                },
                {
                  dataField: "K03",
                  editorType: "dxDateBox",
                  editorOptions: {
                    displayFormat: "dd/MM/yyyy",
                  },
                  label: {
                    text: "Tertanggal",
                  },
                },
                {
                  dataField: "K04",
                  label: {
                    text: "Classical",
                  },
                },
              ]
            },
            {
              itemType: "group",
              items: [
                {
                  itemType: "group",
                  caption: "Asal Sekolah Lulusan",
                  items: [
                    {
                      dataField: "L01",
                      label: {
                        text: "Identitas Satuan Pendidikan",
                      },
                    },
                    {
                      dataField: "L02",
                      label: {
                        text: "Nomor Dokumen",
                      },
                    },
                    {
                      dataField: "L03",
                      editorType: "dxDateBox",
                      editorOptions: {
                        displayFormat: "dd/MM/yyyy",
                      },
                      label: {
                        text: "Tertanggal",
                      },
                    },
                  ],
                },
                {
                  itemType: "group",
                  caption: "Asal Sekolah Pindahan",
                  items: [
                    {
                      dataField: "L04",
                      label: {
                        text: "Identitas Satuan Pendidikan",
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
      ]
    },
  ]

}      