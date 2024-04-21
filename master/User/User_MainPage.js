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

    case "Pendidik" && "Kependidikan":

      getQuery = GetVisualizationQuery(
        _main.appConfig.dataSource.Kepegawaian,                   //SpreadsheetID
        1523976848,                                               //SheetID
        "A4:LP",                                                  //Range
        "SELECT * WHERE A  = '" + _main.account.user.userid + "'"  //Filter or Query
      );

      getQuery.send(response => {
        GetJsonData(response);

        if (_main.arrVarGlobal._dataArray.length != 0) {
          _Authentication.formData.dataPersonal = _main.arrVarGlobal._dataArray;

          formPegawai(_Authentication.formData);
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
                      dataField: "B01", label: {
                        text: "NIPD",
                      },
                    },
                    {
                      dataField: "B02", label: {
                        text: "NISN",
                      },
                    },
                    {
                      dataField: "B03", label: {
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
                      dataField: "A01", label: {
                        text: "Id Kelas",
                      },
                    },
                    {
                      dataField: "A02", label: {
                        text: "Tahun Akademik",
                      },
                    },
                    {
                      dataField: "A03", label: {
                        text: "Rombel",
                      },
                    },
                    {
                      dataField: "A04", label: {
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
                  editorOptions: {
                    format: "000",
                  },
                  label: {
                    text: "RT",
                  },
                },
                {
                  dataField: "D05",
                  editorOptions: {
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
                  editorOptions: {
                    format: "000",
                  },
                  label: {
                    text: "RT",
                  },
                },
                {
                  dataField: "E06",
                  editorOptions: {
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
                  editorOptions: {
                    format: "#0.000 Km",
                  },
                  label: {
                    text: "Jarak",
                  },
                },
                {
                  dataField: "E14",
                  editorOptions: {
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
                      dataField: "L01", label: {
                        text: "Identitas Satuan Pendidikan",
                      },
                    },
                    {
                      dataField: "L02", label: {
                        text: "Nomor Dokumen",
                      },
                    },
                    {
                      dataField: "L03",
                      editorType: "dxDateBox",
                      editorOptions: {
                        displayFormat: "dd/MM/yyyy",
                      }, label: {
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
                      dataField: "L04", label: {
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

// ===============================================================================================
function formPegawai(dataSource) {

  _main.arrVarGlobal._data = [
    // ===============================================================================================
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

    // ===============================================================================================
    {
      title: "Kepegawaian",
      items: [
        {
          itemType: "group",
          colCount: "auto",
          items: [
            {
              itemType: "group",
              items: [
                // ===============================================================================================
                {
                  itemType: "group",
                  caption: "Identitas Pegawai",
                  items: [
                    {
                      dataField: "A01",
                      label: {
                        text: "Nama Pegawai",
                      },
                    },
                    {
                      itemType: "group",
                      colCount: "auto",
                      items: [
                        {
                          dataField: "F01",
                          label: {
                            text: "NIP",
                          },
                        },
                        {
                          dataField: "F02",
                          label: {
                            text: "KARPEG",
                          },
                        },
                        {
                          dataField: "F03",
                          label: {
                            text: "NPWP",
                          },
                        },
                        {
                          dataField: "F04",
                          label: {
                            text: "NUPTK",
                          },
                        },
                      ],
                    },
                  ],
                },
                {
                  itemType: "group",
                  caption: "Catatan Sipil",
                  items: [
                    {
                      itemType: "group",
                      colCount: "auto",
                      items: [
                        {
                          dataField: "A02",
                          label: {
                            text: "NIK",
                          },
                        },
                        {
                          dataField: "A03",
                          label: {
                            text: "Nama",
                          },
                        },
                      ],
                    },
                    {
                      itemType: "group",
                      colCount: "auto",
                      items: [
                        {
                          dataField: "A04",
                          label: {
                            text: "Gender",
                          },
                        },
                        {
                          dataField: "A05",
                          label: {
                            text: "Tempat Lahir",
                          },
                        },
                        {
                          dataField: "A06",
                          editorType: "dxDateBox",
                          editorOptions: {
                            displayFormat: "dd/MM/yyyy",
                          },
                          label: {
                            text: "Tanggal Lahir",
                          },
                        },
                        {
                          dataField: "A07",
                          editorOptions: {
                            format: "#0 Tahun",
                          },
                          label: {
                            text: "Usia",
                          },
                        },
                        {
                          dataField: "A08",
                          label: {
                            text: "Agama",
                          },
                        },
                        {
                          dataField: "A09",
                          label: {
                            text: "Gol. Darah",
                          },
                        },
                      ]
                    },
                    {
                      itemType: "group",
                      colCount: "auto",
                      items: [
                        {
                          dataField: "A10",
                          label: {
                            text: "Ayah Kandung",
                          },
                        },
                        {
                          dataField: "A11",
                          label: {
                            text: "Ibu Kandung",
                          },
                        },
                      ],
                    },
                  ],
                },
                // ===============================================================================================
                {
                  itemType: "group",
                  caption: "Contact Person",
                  items: [
                    {
                      itemType: "group",
                      colCount: "auto",
                      items: [
                        {
                          dataField: "D01",
                          label: {
                            text: "Nomor Telepon",
                          },
                        },
                        {
                          dataField: "D02",
                          label: {
                            text: "Nomor Whatsapp",
                          },
                        },
                      ],
                    },
                    {
                      itemType: "group",
                      items: [
                        {
                          dataField: "D03",
                          label: {
                            text: "Email PTK",
                          },
                        },
                        {
                          dataField: "D04",
                          label: {
                            text: "Akun Belajar Id",
                          },
                        },
                      ],
                    },
                    {
                      dataField: "",
                      itemType: "group",
                      items: [
                        {
                          dataField: "C04",
                          editorType: "dxTextArea",
                          editorOptions: {
                            value: _main.arrVarGlobal._dataArray[0].C04 + "\r\n" +
                              "RT." + String(_main.arrVarGlobal._dataArray[0].C05).padStart(3, "0") +
                              "/RW." + String(_main.arrVarGlobal._dataArray[0].C06).padStart(3, "0") + "\r\n" +
                              "Desa/Kelurahan " + _main.arrVarGlobal._dataArray[0].C07 + "\r\n" +
                              "Kecamatan " + _main.arrVarGlobal._dataArray[0].C08 + "\r\n" +
                              _main.arrVarGlobal._dataArray[0].C09 + "\r\n" +
                              "Propinsi " + _main.arrVarGlobal._dataArray[0].C10 + "\r\n" +
                              "Kode Pos " + _main.arrVarGlobal._dataArray[0].C11,
                            height: "140px",
                          },
                          label: {
                            text: "Domisili",
                          },
                        },
                      ],
                    },
                  ],
                },
                // ===============================================================================================
                {
                  itemType: "group",
                  colCount: "auto",
                  caption: "Pendidikan",
                  items: [
                    {
                      dataField: "E13",
                      label: {
                        text: "Lulusan",
                      },
                    },
                    {
                      dataField: "E06",
                      editorType: "dxDateBox",
                      editorOptions: {
                        displayFormat: "yyyy",
                      },
                      label: {
                        text: "Tahun",
                      },
                    },
                  ],
                },

              ],
            },
            // ===============================================================================================
            // ===============================================================================================
            {
              itemType: "group",
              items: [
                // ===============================================================================================
                {
                  itemType: "group",
                  colCount: "auto",
                  caption: "Unsur Pegawai",
                  items: [
                    {
                      dataField: "P06", label: {
                        text: "Status",
                      },
                    },
                    {
                      dataField: "P07", label: {
                        text: "Jenis",
                      },
                    },
                  ],
                },
                // ===============================================================================================
                {
                  itemType: "group",
                  colCount: "auto",
                  caption: "Unsur Ketenagaan",
                  items: [
                    {
                      dataField: "P08", label: {
                        text: "Kategori",
                      },
                    },
                    {
                      dataField: "P09", label: {
                        text: "Jenis",
                      },
                    },
                    {
                      dataField: "P19", label: {
                        text: "Penugasan",
                      },
                    },
                  ],
                },
                // ===============================================================================================
                {
                  itemType: "group",
                  colCount: "auto",
                  caption: "Kepangkatan",
                  items: [
                    {
                      dataField: "P10", label: {
                        text: "Gol./Ruang",
                      },
                    },
                    {
                      dataField: "P12", label: {
                        text: "Pangkat",
                      },
                    },
                    {
                      dataField: "P13",
                      editorOptions: {
                        value: parseInt(_main.arrVarGlobal._dataArray[0].P13.substr(0, 2)) + " Tahun, "
                          .concat(parseInt(_main.arrVarGlobal._dataArray[0].P13.substr(3, 2)) + " Bulan"),
                      }, label: {
                        text: "Masa Kerja",
                      },
                    },
                  ],
                },

                // ===============================================================================================
                {
                  itemType: "group",
                  colCount: "auto",
                  caption: "Jabatan",
                  items: [
                    {
                      dataField: "P14", label: {
                        text: "Jabatan ASN",
                      },
                    },
                    {
                      dataField: "P15", label: {
                        text: "Jenjang Jabatan",
                      },
                    },
                  ],
                },

                // ===============================================================================================
                {
                  itemType: "group",
                  colCount: "auto",
                  caption: "Angka Kredit JF",
                  items: [
                    {
                      dataField: "P16",
                      editorOptions: {
                        format: "#0.000",
                      }, label: {
                        text: "Nilai A.K",
                      },
                    },
                    {
                      dataField: "P17",
                      editorType: "dxDateBox",
                      editorOptions: {
                        displayFormat: "dd/MM/yyyy",
                      }, label: {
                        text: "T.m.t Penilaian",
                      },
                    },
                    {
                      dataField: "P18",
                      editorType: "dxDateBox",
                      editorOptions: {
                        displayFormat: "dd/MM/yyyy",
                      }, label: {
                        text: "T.s.t Penilaian",
                      },
                    },
                  ],
                },

                // ===============================================================================================
                {
                  itemType: "group",
                  caption: "Gaji/ Penghasilan",
                  items: [
                    {
                      dataField: "P01", label: {
                        text: "Keputusan Pejabat",
                      },
                    },
                    {
                      itemType: "group",
                      colCount: "auto",
                      items: [
                        {
                          dataField: "P02",
                          label: {
                            text: "Nomor Dokumen",
                          },
                        },
                        {
                          dataField: "P03",
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
                      colCount: "auto",
                      items: [
                        {
                          dataField: "P04",
                          label: {
                            text: "Perihal Putusan",
                          },
                        },
                        {
                          dataField: "P05",
                          editorType: "dxDateBox",
                          editorOptions: {
                            displayFormat: "dd/MM/yyyy",
                          },
                          label: {
                            text: "T.m.t Berlaku",
                          },
                        },
                        {
                          dataField: "P22",
                          label: {
                            text: "Gaji/Penghasilan",
                          },
                        },
                      ],
                    },

                    {
                      dataField: "P23", label: {
                        text: "Terbilang",
                      },
                    },
                    {
                      dataField: "P24", label: {
                        text: "Dasar Peraturan",
                      },
                    },
                    {
                      itemType: "group",
                      colCount: "auto",
                      items: [
                        {
                          dataField: "P25", label: {
                            text: "Peraturan Berlaku",
                          },
                        },
                        {
                          dataField: "P26",
                          label: {
                            text: "Gaji/Penghasilan",
                          },
                        },
                      ],
                    },
                    {
                      dataField: "P27",
                      label: {
                        text: "Terbilang",
                      },
                    },
                  ],
                },

              ],
            },
          ],
        },
      ],
    },

    // ===============================================================================================
    {
      title: "Catatan Kependudukan",
      items: [
        {
          itemType: "group",
          colCount: "auto",
          items: [

            {
              itemType: "group",
              caption: "Kartu Keluarga",
              items: [
                {
                  itemType: "group",
                  colCount: "auto",
                  items: [
                    {
                      dataField: "B01",
                      label: {
                        text: "Nomor",
                      },
                    },
                    {
                      dataField: "B02",
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
                  items: [
                    {
                      dataField: "B03",
                      label: {
                        text: "Alamat",
                      },
                    },
                  ]
                },
                {
                  itemType: "group",
                  colCount: "auto",
                  items: [
                    {
                      dataField: "B04",
                      editorOptions: {
                        format: "000",
                      },
                      label: {
                        text: "RT",
                      },
                    },
                    {
                      dataField: "B05",
                      editorOptions: {
                        format: "000",
                      },
                      label: {
                        text: "RW",
                      },
                    },
                    {
                      dataField: "B06",
                      label: {
                        text: "Desa/Kelurahan",
                      },
                    },
                    {
                      dataField: "B07",
                      label: {
                        text: "Kecamatan",
                      },
                    },
                    {
                      dataField: "B08",
                      label: {
                        text: "Pemerintah Daerah",
                      },
                    },
                    {
                      dataField: "B09",
                      label: {
                        text: "Pemerintah Propinsi",
                      },
                    },
                    {
                      dataField: "B10",
                      label: {
                        text: "Kode Pos",
                      },
                    },
                    {
                      dataField: "B11",
                      label: {
                        text: "Status Perkawinan",
                      },
                    },
                  ]
                },
              ],
            },
            // ===============================================================================================
            // ===============================================================================================
            {
              itemType: "group",
              caption: "Tempat Tinggal",
              items: [
                {
                  itemType: "group",
                  colCount: "auto",
                  items: [
                    {
                      dataField: "C01",
                      label: {
                        text: "Dokumen",
                      },
                    },
                    {
                      dataField: "C02",
                      label: {
                        text: "Nomor",
                      },
                    },
                    {
                      dataField: "C03",
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
                  items: [
                    {
                      dataField: "C04",
                      label: {
                        text: "Alamat",
                      },
                    },
                  ],
                },
                {
                  itemType: "group",
                  colCount: "auto",
                  items: [
                    {
                      dataField: "C05",
                      editorOptions: {
                        format: "000",
                      },
                      label: {
                        text: "RT",
                      },
                    },
                    {
                      dataField: "C06",
                      editorOptions: {
                        format: "000",
                      },
                      label: {
                        text: "RW",
                      },
                    },
                    {
                      dataField: "C07",
                      label: {
                        text: "Desa/Kelurahan",
                      },
                    },
                    {
                      dataField: "C08",
                      label: {
                        text: "Kecamatan",
                      },
                    },
                    {
                      dataField: "C09",
                      label: {
                        text: "Pemerintah Daerah",
                      },
                    },
                    {
                      dataField: "C10",
                      label: {
                        text: "Pemerintah Propinsi",
                      },
                    },
                    {
                      dataField: "C11",
                      label: {
                        text: "Kode Pos",
                      },
                    },
                    {
                      dataField: "C12",
                      label: {
                        text: "Koordinat",
                      },
                    },
                    {
                      dataField: "C13",
                      editorOptions: {
                        format: "#0.000 Km",
                      },
                      label: {
                        text: "Jarak",
                      },
                    },
                    {
                      dataField: "C14",
                      editorOptions: {
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
      ]
    },

    // ===============================================================================================
    {
      title: "Pendidikan",
      items: [
        {
          itemType: "group",
          colCount: "auto",
          items: [

            {
              itemType: "group",
              caption: "Keterangan Ijasah",
              items: [
                {
                  dataField: "E02",
                  label: {
                    text: "Satuan Pendidikan",
                  }
                },
                {
                  dataField: "E03",
                  label: {
                    text: "Nomor",
                  }
                },
                {
                  dataField: "E04",
                  editorType: "dxDateBox",
                  editorOptions: {
                    displayFormat: "dd/MM/yyyy",
                  },
                  label: {
                    text: "Tertanggal",
                  }
                },

                {
                  itemType: "group",
                  colCount: "auto",
                  items: [
                    {
                      dataField: "E01",
                      label: {
                        text: "Jenjang",
                      }
                    },
                    {
                      dataField: "E05",
                      label: {
                        text: "NIS/NIM",
                      }
                    },
                  ]
                }

              ]
            },
            // ===============================================================================================
            // ===============================================================================================
            {
              itemType: "group",
              caption: "Keterangan Lulusan",
              items: [
                {
                  dataField: "E06",
                  editorType: "dxDateBox",
                  editorOptions: {
                    displayFormat: "dd/MM/yyyy",
                  },
                  label: {
                    text: "Tanggal",
                  }
                },
                {
                  dataField: "E07",
                  label: {
                    text: "Jurusan/ Program Studi",
                  }
                },
                {
                  dataField: "E08",
                  label: {
                    text: "Fakultas",
                  }
                },
                {
                  itemType: "group",
                  colCount: "auto",
                  items: [
                    {
                      dataField: "E09",
                      label: {
                        text: "Gelar Depan",
                      }
                    },
                    {
                      dataField: "E10",
                      label: {
                        text: "Gelar Belakang",
                      }
                    },
                    {
                      dataField: "E11",
                      editorOptions: {
                        format: "0.000",
                      },
                      label: {
                        text: "Nilai/IPK",
                      }
                    },
                  ]
                }
              ]
            }

          ]
        }
      ],
    },

    // ===============================================================================================
    {
      title: "Putusan Non ASN",
      items: [
      ],
    },

    {
      title: "Putusan CPNS",
      items: [
      ]
    },

    {
      title: "Putusan ASN",
      items: [
      ]
    },

    {
      title: "Putusan Kepangkatan",
      items: [
      ]
    },

    {
      title: "Putusan Gaji Berkala",
      items: [
      ]
    },

    {
      title: "Putusan Jabatan",
      items: [
      ]
    },

    {
      title: "Peniaian Angka Kredit",
      items: [
      ]
    },

    {
      title: "Penugasan",
      items: [
      ]
    },

    {
      title: "Arsip Dokumen",
      items: [
      ]
    },
  ]

}