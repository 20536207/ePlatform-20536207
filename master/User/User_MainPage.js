_element.PageToolbar.option("items[1].text", "e-Platform Authentication");
_element.PageToolbar.option("items[2].visible", false);
_main.arrVarGlobal._ParentPageContains = "/master/Homepage/Homepage_Home.html";

$(document).ready(function () {
  // searchFile("1-crfVPx2u9vnbosWdcYwDoc8vzpsfm04"); //PHOTO PEGAWAI GDRIVE
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

  //=====================================================
  if (_main.account.user.userstate == "Peserta Didik") {

    getQuery = GetVisualizationQuery(
      _main.appConfig.dataSource.Kesiswaan,           //SpreadsheetID
      1300103800,                                     //SheetID
      "A1:CX",                                        //Range
      "SELECT * WHERE E = '" + _main.account.user.userid + "'"   //Filter or Query
    );
    
  } else
    if (
      _main.account.user.userstate == "Pendidik" ||
      _main.account.user.userstate == "Kependidikan"
    ) {
      getQuery = GetVisualizationQuery(
        _main.appConfig.dataSource.Kepegawaian,                   //SpreadsheetID
        1523976848,                                               //SheetID
        "A4:LV",                                                  //Range
        "SELECT * WHERE A  = '" + _main.account.user.userid + "'"  //Filter or Query
      );

    };
  //=====================================================

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
    }

  });

  delete _Authentication;
  delete formOption;
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
                      <img src=${dataSource.currentUser.photo} style="display:inline-flex;object-fit:scale-down;max-width:198px;border-radius:100%;box-shadow: 0 0 10px 0 rgba(100, 100, 100, 0.7);"></img>
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
      title: "Identitas Peserta Didik",
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
                  colCount: "auto",
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
                  ]
                },
                // ===============================================================================================
                {
                  dataField: "B03", label: {
                    text: "Nama Lengkap",
                  },
                },
                // ===============================================================================================
                {
                  itemType: "group",
                  colCount: "auto",
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
            //===================================================================================
            //===================================================================================
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
                  itemType: "group",
                  colCount: "auto",
                  items: [
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
                  ]
                }
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
                      dataField: "D01",
                      label: {
                        text: "No. KK",
                      },
                    },
                    {
                      dataField: "D02",
                      editorType: "dxDateBox",
                      editorOptions: {
                        displayFormat: "dd/MM/yyyy",
                      },
                      label: {
                        text: "Tertanggal",
                      },
                    },
                  ]
                },
                {
                  dataField: "D03",
                  label: {
                    text: "Alamat",
                  },
                },
                {
                  itemType: "group",
                  colCount: "auto",
                  items: [
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
                  ]
                },
                {
                  itemType: "group",
                  colCount: "auto",
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
                  ]
                },
                {
                  dataField: "E04",
                  label: {
                    text: "Alamat",
                  },
                },
                {
                  itemType: "group",
                  colCount: "auto",
                  items: [
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
                  ]
                },
                {
                  itemType: "group",
                  colCount: "auto",
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
                  ]
                }
              ],
            },
          ]
        },
      ]
    },

    // ===============================================================================================
    {
      title: "Orang Tua Kandung",
      items: [
        {
          itemType: "group",
          colCount: "auto",
          items: [
            {
              itemType: "group",
              caption: "Ayah Kandung",
              items: [
                {
                  dataField: "F01",
                  label: {
                    text: "Nama Lengkap",
                  },
                },
                {
                  itemType: "group",
                  colCount: "auto",
                  items: [
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
                  ]
                },
              ]
            },
            {
              itemType: "group",
              caption: "Ibu Kandung",
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
                  ]
                },
                {
                  itemType: "group",
                  colCount: "auto",
                  items: [
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
                  ]
                },

              ],
            },
          ],
        },
      ],
    },

    // ===============================================================================================
    {
      title: "Orang Tua Wali",
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
                  dataField: "H05",
                  label: {
                    text: "NIK",
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

    // ===============================================================================================
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

    // ===============================================================================================
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

    // ===============================================================================================
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
                      <img src=${dataSource.currentUser.photo} style="display:inline-flex;object-fit:scale-down;max-width:198px;border-radius:100%;box-shadow: 0 0 10px 0 rgba(100, 100, 100, 0.7);;"></img>
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

            {
              itemType: "group",
              caption: [_main.navigator.linkedSatdik[0].detail],
              colCount: "auto",
              items: [
                {
                  itemType: "group",
                  caption: "Manajemen Tata Kelola Data",
                  items: [
                    {
                      template: function (data, itemElement) {
                        _main.navigator.linkedSatdik[0].items.forEach(function (productdata, productindex, productelement) {
                          if (_main.account.user.userstate != "Kependidikan" && productindex <= 1) {
                            return false;
                          }
                          itemElement.append(
                            $("<div id='userApp'>").dxButton({
                              stylingMode: 'text',
                              type: 'normal',
                              width: '100%',
                              activeStateEnabled: true,
                              focusStateEnabled: false,
                              hoverStateEnabled: false,
                              onClick() {
                                window.open(productdata.target, '_blank')
                              },
                              template: () => {
                                return `
                              <div class = "UserLinkedPlatform-item-detail">
                                <a>${productdata.product}</a><br>
                                <i>${productdata.detail}</i></br>
                                </div>
                            `;
                              },
                            })
                          )


                        });
                      },
                    },
                  ],
                },
                {
                  itemType: "group",
                  caption: "Referensi Lembar Daftar",
                  items: [
                    {
                      template: function (data, itemElement) {
                        _main.navigator.linkedBlanko[0].items.forEach(function (productdata, productindex, productelement) {
                          itemElement.append(
                            $("<div id='userApp'>").dxButton({
                              stylingMode: 'text',
                              type: 'normal',
                              width: '100%',
                              activeStateEnabled: true,
                              focusStateEnabled: false,
                              hoverStateEnabled: false,
                              onClick() {
                                window.open(productdata.target, '_blank')
                              },
                              template: () => {
                                return `
                              <div class = "UserLinkedPlatform-item-detail">
                                <a>${productdata.product}</a><br>
                                <i>${productdata.detail}</i></br>
                                </div>
                            `;
                              },
                            })
                          )
                        });
                      },
                    },
                  ],
                },
              ]
            },

          ]
        }
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
                      dataField: "Z01",
                      label: {
                        text: "Status",
                      },
                    },
                    {
                      dataField: "Z02",
                      editorType: "dxDateBox",
                      editorOptions: {
                        displayFormat: "dd/MM/yyyy",
                      },
                      label: {
                        text: "T.m.t Status",
                      },
                    },
                    {
                      dataField: "Z03",
                      label: {
                        text: "Jenis",
                      },
                    },
                    {
                      dataField: "Z04",
                      editorType: "dxDateBox",
                      editorOptions: {
                        displayFormat: "dd/MM/yyyy",
                      },
                      label: {
                        text: "T.m.t Jenis",
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
                      dataField: "Z05",
                      label: {
                        text: "Kategori",
                      },
                    },
                    {
                      dataField: "Z06",
                      editorType: "dxDateBox",
                      editorOptions: {
                        displayFormat: "dd/MM/yyyy",
                      },
                      label: {
                        text: "T.m.t Awal Kategori PTK",
                      },
                    },
                    {
                      dataField: "Z07",
                      label: {
                        text: "Jenis",
                      },
                    },
                    {
                      dataField: "Z08",
                      editorType: "dxDateBox",
                      editorOptions: {
                        displayFormat: "dd/MM/yyyy",
                      },
                      label: {
                        text: "T.m.t Awal Jenis PTK",
                      },
                    },
                    {
                      dataField: "Z09",
                      label: {
                        text: "Penugasan",
                      },
                    },
                    {
                      dataField: "Z10",
                      editorType: "dxDateBox",
                      editorOptions: {
                        displayFormat: "dd/MM/yyyy",
                      },
                      label: {
                        text: "T.m.t Penugasan Awal",
                      },
                    },
                    {
                      dataField: "Z11",
                      editorType: "dxDateBox",
                      editorOptions: {
                        displayFormat: "dd/MM/yyyy",
                      },
                      label: {
                        text: "T.m.t Penugasan Akhir",
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
                      dataField: "Z14",
                      label: {
                        text: "Gol./Ruang",
                      },
                    },
                    {
                      dataField: "Z16",
                      label: {
                        text: "Pangkat",
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
                      dataField: "Z17",
                      label: {
                        text: "Jabatan ASN",
                      },
                    },
                    {
                      dataField: "Z18",
                      label: {
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
                      dataField: "Z19",
                      editorOptions: {
                        format: "#0.000",
                      },
                      label: {
                        text: "Nilai A.K",
                      },
                    },
                    {
                      dataField: "Z20",
                      editorType: "dxDateBox",
                      editorOptions: {
                        displayFormat: "dd/MM/yyyy",
                      },
                      label: {
                        text: "T.m.t Penilaian",
                      },
                    },
                    {
                      dataField: "Z21",
                      editorType: "dxDateBox",
                      editorOptions: {
                        displayFormat: "dd/MM/yyyy",
                      },
                      label: {
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
                      dataField: "Z22",
                      label: {
                        text: "Keputusan Pejabat",
                      },
                    },
                    {
                      itemType: "group",
                      colCount: "auto",
                      items: [
                        {
                          dataField: "Z23",
                          label: {
                            text: "Nomor Dokumen",
                          },
                        },
                        {
                          dataField: "Z24",
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
                          dataField: "Z25",
                          label: {
                            text: "Perihal Putusan",
                          },
                        },
                        {
                          dataField: "Z26",
                          editorType: "dxDateBox",
                          editorOptions: {
                            displayFormat: "dd/MM/yyyy",
                          },
                          label: {
                            text: "T.m.t Berlaku",
                          },
                        },
                        {
                          dataField: "Z27",
                          editorOptions: {
                            value: parseInt(_main.arrVarGlobal._dataArray[0].Z27.substr(0, 2)) + " Tahun, "
                              .concat(parseInt(_main.arrVarGlobal._dataArray[0].Z27.substr(3, 2)) + " Bulan"),
                          },
                          label: {
                            text: "Masa Kerja",
                          },
                        },
                        {
                          dataField: "Z28",
                          label: {
                            text: "Gaji/Penghasilan",
                          },
                        },
                      ],
                    },

                    {
                      dataField: "Z29", label: {
                        text: "Terbilang",
                      },
                    },
                    {
                      dataField: "Z30", label: {
                        text: "Peraturan Gaji/Penghasilan",
                      },
                    },
                    {
                      itemType: "group",
                      colCount: "auto",
                      items: [
                        {
                          dataField: "Z31", label: {
                            text: "Peraturan Gaji/Penghasilan Berlaku",
                          },
                        },
                        {
                          dataField: "Z32",
                          label: {
                            text: "Gaji/Penghasilan",
                          },
                        },
                      ],
                    },
                    {
                      dataField: "Z33",
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
        {
          itemType: "group",
          colCount: "auto",
          items: [

            {
              itemType: "group",
              caption: "Penetapan Awal",
              items: [
                {
                  dataField: "G01",
                  label: {
                    text: "oleh Pejabat",
                  },
                },
                {
                  itemType: "group",
                  colCount: "auto",
                  items: [
                    {
                      dataField: "G02",
                      label: {
                        text: "Nomor",
                      },
                    },
                    {
                      dataField: "G03",
                      editorType: "dxDateBox",
                      editorOptions: {
                        displayFormat: "dd/MM/yyyy",
                      },
                      label: {
                        text: "Tertanggal",
                      },
                    },
                    {
                      dataField: "G04",
                      label: {
                        text: "Perihal",
                      },
                    },
                  ]
                },
                {
                  itemType: "group",
                  colCount: "auto",
                  items: [
                    {
                      dataField: "G05",
                      editorType: "dxDateBox",
                      editorOptions: {
                        displayFormat: "dd/MM/yyyy",
                      },
                      label: {
                        text: "T.m.t Berlaku",
                      },
                    },
                    {
                      dataField: "G06",
                      label: {
                        text: "Status Pegawai",
                      },
                    },
                    {
                      dataField: "G07",
                      label: {
                        text: "Jenis Pegawai",
                      },
                    },
                  ]
                },
                {
                  itemType: "group",
                  items: [
                    {
                      itemType: "empty",
                    }
                  ]
                },
                {
                  itemType: "group",
                  colCount: "auto",
                  items: [
                    {
                      dataField: "G08",
                      label: {
                        text: "Kategori PTK",
                      },
                    },
                    {
                      dataField: "G09",
                      label: {
                        text: "Jenis PTK",
                      },
                    },
                    {
                      dataField: "G19",
                      label: {
                        text: "Penugasan",
                      },
                    },
                  ]
                },
                {
                  itemType: "group",
                  colCount: "auto",
                  items: [
                    {
                      dataField: "G20",
                      label: {
                        text: "Unit Kerja",
                      },
                    },
                    {
                      dataField: "G21",
                      label: {
                        text: "Instansi Pemerintahan",
                      },
                    },
                  ]
                },
                {
                  itemType: "group",
                  items: [
                    {
                      itemType: "empty",
                    }
                  ]
                },
                {
                  itemType: "group",
                  colCount: "auto",
                  items: [
                    {
                      dataField: "G24",
                      label: {
                        text: "Peraturan Gaji/Penghasilan",
                      },
                    },
                    {
                      dataField: "G22",
                      label: {
                        text: "Gaji/Penghasilan",
                      },
                    },
                  ]
                },
                {
                  dataField: "G23",
                  label: {
                    text: "Terbilang",
                  },
                },
                {
                  itemType: "group",
                  items: [
                    {
                      itemType: "empty",
                    }
                  ]
                },
                {
                  itemType: "group",
                  colCount: "auto",
                  items: [
                    {
                      dataField: "G25",
                      label: {
                        text: "Peraturan Gaji/Penghasilan Berlaku",
                      },
                    },
                    {
                      dataField: "G26",
                      label: {
                        text: "Gaji/Penghasilan",
                      },
                    },
                  ]
                },
                {
                  dataField: "G27",
                  label: {
                    text: "Terbilang",
                  },
                },

              ]
            },
            // ===============================================================================================
            // ===============================================================================================
            {
              itemType: "group",
              caption: "Penetapan Akhir",
              items: [
                {
                  dataField: "H01",
                  label: {
                    text: "oleh Pejabat",
                  },
                },
                {
                  itemType: "group",
                  colCount: "auto",
                  items: [
                    {
                      dataField: "H02",
                      label: {
                        text: "Nomor",
                      },
                    },
                    {
                      dataField: "H03",
                      editorType: "dxDateBox",
                      editorOptions: {
                        displayFormat: "dd/MM/yyyy",
                      },
                      label: {
                        text: "Tertanggal",
                      },
                    },
                    {
                      dataField: "H04",
                      label: {
                        text: "Perihal",
                      },
                    },
                  ]
                },
                {
                  itemType: "group",
                  colCount: "auto",
                  items: [
                    {
                      dataField: "H05",
                      editorType: "dxDateBox",
                      editorOptions: {
                        displayFormat: "dd/MM/yyyy",
                      },
                      label: {
                        text: "T.m.t Berlaku",
                      },
                    },
                    {
                      dataField: "H06",
                      label: {
                        text: "Status Pegawai",
                      },
                    },
                    {
                      dataField: "H07",
                      label: {
                        text: "Jenis Pegawai",
                      },
                    },
                  ]
                },
                {
                  itemType: "group",
                  items: [
                    {
                      itemType: "empty",
                    }
                  ]
                },
                {
                  itemType: "group",
                  colCount: "auto",
                  items: [
                    {
                      dataField: "H08",
                      label: {
                        text: "Kategori PTK",
                      },
                    },
                    {
                      dataField: "H09",
                      label: {
                        text: "Jenis PTK",
                      },
                    },
                    {
                      dataField: "H19",
                      label: {
                        text: "Penugasan",
                      },
                    },
                  ]
                },
                {
                  itemType: "group",
                  colCount: "auto",
                  items: [
                    {
                      dataField: "H20",
                      label: {
                        text: "Unit Kerja",
                      },
                    },
                    {
                      dataField: "H21",
                      label: {
                        text: "Instansi Pemerintahan",
                      },
                    },
                  ]
                },
                {
                  itemType: "group",
                  items: [
                    {
                      itemType: "empty",
                    }
                  ]
                },
                {
                  itemType: "group",
                  colCount: "auto",
                  items: [
                    {
                      dataField: "H24",
                      label: {
                        text: "Peraturan Gaji/Penghasilan",
                      },
                    },
                    {
                      dataField: "H22",
                      label: {
                        text: "Gaji/Penghasilan",
                      },
                    },
                  ]
                },
                {
                  dataField: "H23",
                  label: {
                    text: "Terbilang",
                  },
                },
                {
                  itemType: "group",
                  items: [
                    {
                      itemType: "empty",
                    }
                  ]
                },
                {
                  itemType: "group",
                  colCount: "auto",
                  items: [
                    {
                      dataField: "H25",
                      label: {
                        text: "Peraturan Gaji/Penghasilan Berlaku",
                      },
                    },
                    {
                      dataField: "H26",
                      label: {
                        text: "Gaji/Penghasilan",
                      },
                    },
                  ]
                },
                {
                  dataField: "H27",
                  label: {
                    text: "Terbilang",
                  },
                },

              ]
            }

          ]
        }
      ],
    },

    // ===============================================================================================
    {
      title: "Putusan ASN",
      items: [
        {
          itemType: "group",
          colCount: "auto",
          items: [

            {
              itemType: "group",
              caption: "Penetapan CPNS",
              items: [
                {
                  dataField: "I01",
                  label: {
                    text: "oleh Pejabat",
                  },
                },
                {
                  itemType: "group",
                  colCount: "auto",
                  items: [
                    {
                      dataField: "I02",
                      label: {
                        text: "Nomor",
                      },
                    },
                    {
                      dataField: "I03",
                      editorType: "dxDateBox",
                      editorOptions: {
                        displayFormat: "dd/MM/yyyy",
                      },
                      label: {
                        text: "Tertanggal",
                      },
                    },
                    {
                      dataField: "I04",
                      label: {
                        text: "Perihal",
                      },
                    },
                  ]
                },
                {
                  itemType: "group",
                  colCount: "auto",
                  items: [
                    {
                      dataField: "I05",
                      editorType: "dxDateBox",
                      editorOptions: {
                        displayFormat: "dd/MM/yyyy",
                      },
                      label: {
                        text: "T.m.t Berlaku",
                      },
                    },
                    {
                      dataField: "I06",
                      label: {
                        text: "Status Pegawai",
                      },
                    },
                    {
                      dataField: "I07",
                      label: {
                        text: "Jenis Pegawai",
                      },
                    },
                  ]
                },
                {
                  itemType: "group",
                  colCount: "auto",
                  items: [
                    {
                      dataField: "I10",
                      label: {
                        text: "Gol./Ruang",
                      },
                    },
                    {
                      dataField: "I12",
                      label: {
                        text: "Pangkat",
                      },
                    },
                    {
                      dataField: "I13",
                      editorOptions: {
                        value: parseInt(_main.arrVarGlobal._dataArray[0].I13.substr(0, 2)) + " Tahun, "
                          .concat(parseInt(_main.arrVarGlobal._dataArray[0].I13.substr(3, 2)) + " Bulan"),
                      },
                      label: {
                        text: "Masa Kerja",
                      },
                    },
                  ]
                },
                {
                  itemType: "group",
                  colCount: "auto",
                  items: [
                    {
                      dataField: "I14",
                      label: {
                        text: "Jabatan",
                      },
                    },
                    {
                      dataField: "I15",
                      label: {
                        text: "Jenjang Jabatan",
                      },
                    },
                  ]
                },
                {
                  itemType: "group",
                  items: [
                    {
                      itemType: "empty",
                    }
                  ]
                },
                {
                  itemType: "group",
                  colCount: "auto",
                  items: [
                    {
                      dataField: "I08",
                      label: {
                        text: "Kategori PTK",
                      },
                    },
                    {
                      dataField: "I09",
                      label: {
                        text: "Jenis PTK",
                      },
                    },
                    {
                      dataField: "I19",
                      label: {
                        text: "Penugasan",
                      },
                    },
                  ]
                },
                {
                  itemType: "group",
                  colCount: "auto",
                  items: [
                    {
                      dataField: "I20",
                      label: {
                        text: "Unit Kerja",
                      },
                    },
                    {
                      dataField: "I21",
                      label: {
                        text: "Instansi Pemerintahan",
                      },
                    },
                  ]
                },
                {
                  itemType: "group",
                  items: [
                    {
                      itemType: "empty",
                    }
                  ]
                },
                {
                  itemType: "group",
                  colCount: "auto",
                  items: [
                    {
                      dataField: "I24",
                      label: {
                        text: "Peraturan Gaji/Penghasilan",
                      },
                    },
                    {
                      dataField: "I22",
                      label: {
                        text: "Gaji/Penghasilan",
                      },
                    },
                  ]
                },
                {
                  dataField: "I23",
                  label: {
                    text: "Terbilang",
                  },
                },
                {
                  itemType: "group",
                  items: [
                    {
                      itemType: "empty",
                    }
                  ]
                },
                {
                  itemType: "group",
                  colCount: "auto",
                  caption: "Penghasilan/Gaji",
                  items: [
                    {
                      dataField: "I25",
                      label: {
                        text: "Peraturan Gaji/Penghasilan Berlaku",
                      },
                    },
                    {
                      dataField: "I26",
                      label: {
                        text: "Gaji/Penghasilan",
                      },
                    },
                  ]
                },
                {
                  dataField: "I27",
                  label: {
                    text: "Terbilang",
                  },
                },

              ]
            },
            // ===============================================================================================
            // ===============================================================================================
            {
              itemType: "group",
              caption: "Penetapan PNS/PPPK",
              items: [
                {
                  dataField: "J01",
                  label: {
                    text: "oleh Pejabat",
                  },
                },
                {
                  itemType: "group",
                  colCount: "auto",
                  items: [
                    {
                      dataField: "J02",
                      label: {
                        text: "Nomor",
                      },
                    },
                    {
                      dataField: "J03",
                      editorType: "dxDateBox",
                      editorOptions: {
                        displayFormat: "dd/MM/yyyy",
                      },
                      label: {
                        text: "Tertanggal",
                      },
                    },
                    {
                      dataField: "J04",
                      label: {
                        text: "Perihal",
                      },
                    },
                  ]
                },
                {
                  itemType: "group",
                  colCount: "auto",
                  items: [
                    {
                      dataField: "J05",
                      editorType: "dxDateBox",
                      editorOptions: {
                        displayFormat: "dd/MM/yyyy",
                      },
                      label: {
                        text: "T.m.t Berlaku",
                      },
                    },
                    {
                      dataField: "J06",
                      label: {
                        text: "Status Pegawai",
                      },
                    },
                    {
                      dataField: "J07",
                      label: {
                        text: "Jenis Pegawai",
                      },
                    },
                  ]
                },
                {
                  itemType: "group",
                  colCount: "auto",
                  items: [
                    {
                      dataField: "J10",
                      label: {
                        text: "Gol./Ruang",
                      },
                    },
                    {
                      dataField: "J12",
                      label: {
                        text: "Pangkat",
                      },
                    },
                    {
                      dataField: "J13",
                      editorOptions: {
                        value: parseInt(_main.arrVarGlobal._dataArray[0].J13.substr(0, 2)) + " Tahun, "
                          .concat(parseInt(_main.arrVarGlobal._dataArray[0].J13.substr(3, 2)) + " Bulan"),
                      },
                      label: {
                        text: "Masa Kerja",
                      },
                    },
                  ]
                },
                {
                  itemType: "group",
                  colCount: "auto",
                  items: [
                    {
                      dataField: "J14",
                      label: {
                        text: "Jabatan",
                      },
                    },
                    {
                      dataField: "J15",
                      label: {
                        text: "Jenjang Jabatan",
                      },
                    },
                  ]
                },
                {
                  itemType: "group",
                  items: [
                    {
                      itemType: "empty",
                    }
                  ]
                },
                {
                  itemType: "group",
                  colCount: "auto",
                  items: [
                    {
                      dataField: "J08",
                      label: {
                        text: "Kategori PTK",
                      },
                    },
                    {
                      dataField: "J09",
                      label: {
                        text: "Jenis PTK",
                      },
                    },
                    {
                      dataField: "J19",
                      label: {
                        text: "Penugasan",
                      },
                    },
                  ]
                },
                {
                  itemType: "group",
                  colCount: "auto",
                  items: [
                    {
                      dataField: "J20",
                      label: {
                        text: "Unit Kerja",
                      },
                    },
                    {
                      dataField: "J21",
                      label: {
                        text: "Instansi Pemerintahan",
                      },
                    },
                  ]
                },
                {
                  itemType: "group",
                  items: [
                    {
                      itemType: "empty",
                    }
                  ]
                },
                {
                  itemType: "group",
                  colCount: "auto",
                  items: [
                    {
                      dataField: "J24",
                      label: {
                        text: "Peraturan Gaji/Penghasilan",
                      },
                    },
                    {
                      dataField: "J22",
                      label: {
                        text: "Gaji/Penghasilan",
                      },
                    },
                  ]
                },
                {
                  dataField: "J23",
                  label: {
                    text: "Terbilang",
                  },
                },
                {
                  itemType: "group",
                  items: [
                    {
                      itemType: "empty",
                    }
                  ]
                },
                {
                  itemType: "group",
                  colCount: "auto",
                  caption: "Penghasilan/Gaji",
                  items: [
                    {
                      dataField: "J25",
                      label: {
                        text: "Peraturan Gaji/Penghasilan Berlaku",
                      },
                    },
                    {
                      dataField: "J26",
                      label: {
                        text: "Gaji/Penghasilan",
                      },
                    },
                  ]
                },
                {
                  dataField: "J27",
                  label: {
                    text: "Terbilang",
                  },
                },

              ]
            }

          ]
        }
      ],
    },

    // ===============================================================================================
    {
      title: "Putusan Kepangkatan",
      items: [
        {
          itemType: "group",
          items: [

            {
              itemType: "group",
              caption: "Ketetapan Putusan",
              items: [
                {
                  dataField: "K01",
                  label: {
                    text: "oleh Pejabat",
                  },
                },
                {
                  itemType: "group",
                  colCount: "auto",
                  items: [
                    {
                      dataField: "K02",
                      label: {
                        text: "Nomor",
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
                        text: "Perihal",
                      },
                    },
                  ]
                },
                {
                  itemType: "group",
                  colCount: "auto",
                  items: [
                    {
                      dataField: "K05",
                      editorType: "dxDateBox",
                      editorOptions: {
                        displayFormat: "dd/MM/yyyy",
                      },
                      label: {
                        text: "T.m.t Berlaku",
                      },
                    },
                    {
                      dataField: "K06",
                      label: {
                        text: "Status Pegawai",
                      },
                    },
                    {
                      dataField: "K07",
                      label: {
                        text: "Jenis Pegawai",
                      },
                    },
                  ]
                },
                {
                  itemType: "group",
                  colCount: "auto",
                  items: [
                    {
                      dataField: "K10",
                      label: {
                        text: "Gol./Ruang",
                      },
                    },
                    {
                      dataField: "K12",
                      label: {
                        text: "Pangkat",
                      },
                    },
                    {
                      dataField: "K13",
                      editorOptions: {
                        value: parseInt(_main.arrVarGlobal._dataArray[0].K13.substr(0, 2)) + " Tahun, "
                          .concat(parseInt(_main.arrVarGlobal._dataArray[0].K13.substr(3, 2)) + " Bulan"),
                      },
                      label: {
                        text: "Masa Kerja",
                      },
                    },
                  ]
                },
                {
                  itemType: "group",
                  colCount: "auto",
                  items: [
                    {
                      dataField: "K14",
                      label: {
                        text: "Jabatan",
                      },
                    },
                    {
                      dataField: "K15",
                      label: {
                        text: "Jenjang Jabatan",
                      },
                    },
                    {
                      dataField: "K16",
                      editorOptions: {
                        format: "0.000",
                      },
                      label: {
                        text: "Angka Kredit",
                      },
                    },
                  ]
                },
                {
                  itemType: "group",
                  items: [
                    {
                      itemType: "empty",
                    }
                  ]
                },
                {
                  itemType: "group",
                  colCount: "auto",
                  items: [
                    {
                      dataField: "K08",
                      label: {
                        text: "Kategori PTK",
                      },
                    },
                    {
                      dataField: "K09",
                      label: {
                        text: "Jenis PTK",
                      },
                    },
                    {
                      dataField: "K19",
                      label: {
                        text: "Penugasan",
                      },
                    },
                  ]
                },
                {
                  itemType: "group",
                  colCount: "auto",
                  items: [
                    {
                      dataField: "K20",
                      label: {
                        text: "Unit Kerja",
                      },
                    },
                    {
                      dataField: "K21",
                      label: {
                        text: "Instansi Pemerintahan",
                      },
                    },
                  ]
                },
                {
                  itemType: "group",
                  items: [
                    {
                      itemType: "empty",
                    }
                  ]
                },
                {
                  itemType: "group",
                  colCount: "auto",
                  items: [
                    {
                      dataField: "K24",
                      label: {
                        text: "Peraturan Gaji/Penghasilan",
                      },
                    },
                    {
                      dataField: "K22",
                      label: {
                        text: "Gaji/Penghasilan",
                      },
                    },
                  ]
                },
                {
                  dataField: "K23",
                  label: {
                    text: "Terbilang",
                  },
                },
                {
                  itemType: "group",
                  items: [
                    {
                      itemType: "empty",
                    }
                  ]
                },
                {
                  itemType: "group",
                  colCount: "auto",
                  caption: "Penghasilan/Gaji",
                  items: [
                    {
                      dataField: "K25",
                      label: {
                        text: "Peraturan Gaji/Penghasilan Berlaku",
                      },
                    },
                    {
                      dataField: "K26",
                      label: {
                        text: "Gaji/Penghasilan",
                      },
                    },
                  ]
                },
                {
                  dataField: "K27",
                  label: {
                    text: "Terbilang",
                  },
                },

              ]
            },
          ]

        }
      ]
    },

    // ===============================================================================================
    {
      title: "Putusan Gaji Berkala",
      items: [
        {
          itemType: "group",
          items: [

            {
              itemType: "group",
              caption: "Ketetapan Putusan",
              items: [
                {
                  dataField: "L01",
                  label: {
                    text: "oleh Pejabat",
                  },
                },
                {
                  itemType: "group",
                  colCount: "auto",
                  items: [
                    {
                      dataField: "L02",
                      label: {
                        text: "Nomor",
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
                    {
                      dataField: "L04",
                      label: {
                        text: "Perihal",
                      },
                    },
                  ]
                },
                {
                  itemType: "group",
                  colCount: "auto",
                  items: [
                    {
                      dataField: "L05",
                      editorType: "dxDateBox",
                      editorOptions: {
                        displayFormat: "dd/MM/yyyy",
                      },
                      label: {
                        text: "T.m.t Berlaku",
                      },
                    },
                    {
                      dataField: "L06",
                      label: {
                        text: "Status Pegawai",
                      },
                    },
                    {
                      dataField: "L07",
                      label: {
                        text: "Jenis Pegawai",
                      },
                    },
                  ]
                },
                {
                  itemType: "group",
                  colCount: "auto",
                  items: [
                    {
                      dataField: "L10",
                      label: {
                        text: "Gol./Ruang",
                      },
                    },
                    {
                      dataField: "L12",
                      label: {
                        text: "Pangkat",
                      },
                    },
                    {
                      dataField: "L13",
                      editorOptions: {
                        value: parseInt(_main.arrVarGlobal._dataArray[0].L13.substr(0, 2)) + " Tahun, "
                          .concat(parseInt(_main.arrVarGlobal._dataArray[0].L13.substr(3, 2)) + " Bulan"),
                      },
                      label: {
                        text: "Masa Kerja",
                      },
                    },
                  ]
                },
                {
                  itemType: "group",
                  colCount: "auto",
                  items: [
                    {
                      dataField: "L14",
                      label: {
                        text: "Jabatan",
                      },
                    },
                    {
                      dataField: "L15",
                      label: {
                        text: "Jenjang Jabatan",
                      },
                    },
                    {
                      dataField: "L16",
                      editorOptions: {
                        format: "0.000",
                      },
                      label: {
                        text: "Angka Kredit",
                      },
                    },
                  ]
                },
                {
                  itemType: "group",
                  items: [
                    {
                      itemType: "empty",
                    }
                  ]
                },
                {
                  itemType: "group",
                  colCount: "auto",
                  items: [
                    {
                      dataField: "L08",
                      label: {
                        text: "Kategori PTK",
                      },
                    },
                    {
                      dataField: "L09",
                      label: {
                        text: "Jenis PTK",
                      },
                    },
                    {
                      dataField: "L19",
                      label: {
                        text: "Penugasan",
                      },
                    },
                  ]
                },
                {
                  itemType: "group",
                  colCount: "auto",
                  items: [
                    {
                      dataField: "L20",
                      label: {
                        text: "Unit Kerja",
                      },
                    },
                    {
                      dataField: "L21",
                      label: {
                        text: "Instansi Pemerintahan",
                      },
                    },
                  ]
                },
                {
                  itemType: "group",
                  items: [
                    {
                      itemType: "empty",
                    }
                  ]
                },
                {
                  itemType: "group",
                  colCount: "auto",
                  items: [
                    {
                      dataField: "L24",
                      label: {
                        text: "Peraturan Gaji/Penghasilan",
                      },
                    },
                    {
                      dataField: "L22",
                      label: {
                        text: "Gaji/Penghasilan",
                      },
                    },
                  ]
                },
                {
                  dataField: "L23",
                  label: {
                    text: "Terbilang",
                  },
                },
                {
                  itemType: "group",
                  items: [
                    {
                      itemType: "empty",
                    }
                  ]
                },
                {
                  itemType: "group",
                  colCount: "auto",
                  caption: "Penghasilan/Gaji",
                  items: [
                    {
                      dataField: "L25",
                      label: {
                        text: "Peraturan Gaji/Penghasilan Berlaku",
                      },
                    },
                    {
                      dataField: "L26",
                      label: {
                        text: "Gaji/Penghasilan",
                      },
                    },
                  ]
                },
                {
                  dataField: "L27",
                  label: {
                    text: "Terbilang",
                  },
                },

              ]
            },
          ]

        }
      ]
    },

    // ===============================================================================================
    {
      title: "Putusan Jabatan",
      items: [
        {
          itemType: "group",
          items: [

            {
              itemType: "group",
              caption: "Ketetapan Putusan",
              items: [
                {
                  dataField: "M01",
                  label: {
                    text: "oleh Pejabat",
                  },
                },
                {
                  itemType: "group",
                  colCount: "auto",
                  items: [
                    {
                      dataField: "M02",
                      label: {
                        text: "Nomor",
                      },
                    },
                    {
                      dataField: "M03",
                      editorType: "dxDateBox",
                      editorOptions: {
                        displayFormat: "dd/MM/yyyy",
                      },
                      label: {
                        text: "Tertanggal",
                      },
                    },
                    {
                      dataField: "M04",
                      label: {
                        text: "Perihal",
                      },
                    },
                  ]
                },
                {
                  itemType: "group",
                  colCount: "auto",
                  items: [
                    {
                      dataField: "M05",
                      editorType: "dxDateBox",
                      editorOptions: {
                        displayFormat: "dd/MM/yyyy",
                      },
                      label: {
                        text: "T.m.t Berlaku",
                      },
                    },
                    {
                      dataField: "M06",
                      label: {
                        text: "Status Pegawai",
                      },
                    },
                    {
                      dataField: "M07",
                      label: {
                        text: "Jenis Pegawai",
                      },
                    },
                  ]
                },
                {
                  itemType: "group",
                  colCount: "auto",
                  items: [
                    {
                      dataField: "M10",
                      label: {
                        text: "Gol./Ruang",
                      },
                    },
                    {
                      dataField: "M12",
                      label: {
                        text: "Pangkat",
                      },
                    },

                  ]
                },
                {
                  itemType: "group",
                  colCount: "auto",
                  items: [
                    {
                      dataField: "M14",
                      label: {
                        text: "Jabatan",
                      },
                    },
                    {
                      dataField: "M15",
                      label: {
                        text: "Jenjang Jabatan",
                      },
                    },
                    {
                      dataField: "M16",
                      editorOptions: {
                        format: "0.000",
                      },
                      label: {
                        text: "Angka Kredit",
                      },
                    },
                  ]
                },
                {
                  itemType: "group",
                  items: [
                    {
                      itemType: "empty",
                    }
                  ]
                },
                {
                  itemType: "group",
                  colCount: "auto",
                  items: [
                    {
                      dataField: "M08",
                      label: {
                        text: "Kategori PTK",
                      },
                    },
                    {
                      dataField: "M09",
                      label: {
                        text: "Jenis PTK",
                      },
                    },
                    {
                      dataField: "M19",
                      label: {
                        text: "Penugasan",
                      },
                    },
                  ]
                },
                {
                  itemType: "group",
                  colCount: "auto",
                  items: [
                    {
                      dataField: "M20",
                      label: {
                        text: "Unit Kerja",
                      },
                    },
                    {
                      dataField: "M21",
                      label: {
                        text: "Instansi Pemerintahan",
                      },
                    },
                  ]
                },
              ]
            },
          ]

        }
      ]
    },

    {
      title: "Peniaian Angka Kredit",
      items: [
        {
          itemType: "group",
          items: [

            {
              itemType: "group",
              caption: "Ketetapan Putusan",
              items: [
                {
                  dataField: "N01",
                  label: {
                    text: "oleh Pejabat",
                  },
                },
                {
                  itemType: "group",
                  colCount: "auto",
                  items: [
                    {
                      dataField: "N02",
                      label: {
                        text: "Nomor",
                      },
                    },
                    {
                      dataField: "N03",
                      editorType: "dxDateBox",
                      editorOptions: {
                        displayFormat: "dd/MM/yyyy",
                      },
                      label: {
                        text: "Tertanggal",
                      },
                    },
                    {
                      dataField: "N04",
                      label: {
                        text: "Perihal",
                      },
                    },
                  ]
                },
                {
                  itemType: "group",
                  colCount: "auto",
                  items: [
                    {
                      dataField: "N05",
                      editorType: "dxDateBox",
                      editorOptions: {
                        displayFormat: "dd/MM/yyyy",
                      },
                      label: {
                        text: "T.m.t Berlaku",
                      },
                    },
                    {
                      dataField: "N06",
                      label: {
                        text: "Status Pegawai",
                      },
                    },
                    {
                      dataField: "N07",
                      label: {
                        text: "Jenis Pegawai",
                      },
                    },
                  ]
                },
                {
                  itemType: "group",
                  colCount: "auto",
                  items: [
                    {
                      dataField: "N10",
                      label: {
                        text: "Gol./Ruang",
                      },
                    },
                    {
                      dataField: "N12",
                      label: {
                        text: "Pangkat",
                      },
                    },

                  ]
                },
                {
                  itemType: "group",
                  colCount: "auto",
                  items: [
                    {
                      dataField: "N14",
                      label: {
                        text: "Jabatan",
                      },
                    },
                    {
                      dataField: "N15",
                      label: {
                        text: "Jenjang Jabatan",
                      },
                    },
                    {
                      dataField: "N16",
                      editorOptions: {
                        format: "0.000",
                      },
                      label: {
                        text: "Angka Kredit",
                      },
                    },
                    {
                      dataField: "N07",
                      editorType: "dxDateBox",
                      editorOptions: {
                        displayFormat: "dd/MM/yyyy",
                      },
                      label: {
                        text: "T.m.t P",
                      },
                    },
                    {
                      dataField: "N18",
                      editorType: "dxDateBox",
                      editorOptions: {
                        displayFormat: "dd/MM/yyyy",
                      },
                      label: {
                        text: "T.s.t Penilaian",
                      },
                    },
                  ]
                },
                {
                  itemType: "group",
                  items: [
                    {
                      itemType: "empty",
                    }
                  ]
                },
                {
                  itemType: "group",
                  colCount: "auto",
                  items: [
                    {
                      dataField: "N08",
                      label: {
                        text: "Kategori PTK",
                      },
                    },
                    {
                      dataField: "N09",
                      label: {
                        text: "Jenis PTK",
                      },
                    },
                    {
                      dataField: "N19",
                      label: {
                        text: "Penugasan",
                      },
                    },
                  ]
                },
                {
                  itemType: "group",
                  colCount: "auto",
                  items: [
                    {
                      dataField: "N20",
                      label: {
                        text: "Unit Kerja",
                      },
                    },
                    {
                      dataField: "N21",
                      label: {
                        text: "Instansi Pemerintahan",
                      },
                    },
                  ]
                },
              ]
            },
          ]

        }
      ]
    },

    {
      title: "Penugasan",
      items: [
        {
          itemType: "group",
          items: [

            {
              itemType: "group",
              caption: "Ketetapan Putusan",
              items: [
                {
                  dataField: "O01",
                  label: {
                    text: "oleh Pejabat",
                  },
                },
                {
                  itemType: "group",
                  colCount: "auto",
                  items: [
                    {
                      dataField: "O02",
                      label: {
                        text: "Nomor",
                      },
                    },
                    {
                      dataField: "O03",
                      editorType: "dxDateBox",
                      editorOptions: {
                        displayFormat: "dd/MM/yyyy",
                      },
                      label: {
                        text: "Tertanggal",
                      },
                    },
                    {
                      dataField: "O04",
                      label: {
                        text: "Perihal",
                      },
                    },
                  ]
                },
                {
                  itemType: "group",
                  colCount: "auto",
                  items: [
                    {
                      dataField: "O05",
                      editorType: "dxDateBox",
                      editorOptions: {
                        displayFormat: "dd/MM/yyyy",
                      },
                      label: {
                        text: "T.m.t Berlaku",
                      },
                    },
                    {
                      dataField: "O06",
                      label: {
                        text: "Status Pegawai",
                      },
                    },
                    {
                      dataField: "O07",
                      label: {
                        text: "Jenis Pegawai",
                      },
                    },
                  ]
                },
                {
                  itemType: "group",
                  colCount: "auto",
                  items: [
                    {
                      dataField: "O10",
                      label: {
                        text: "Gol./Ruang",
                      },
                    },
                    {
                      dataField: "O12",
                      label: {
                        text: "Pangkat",
                      },
                    },
                  ]
                },
                {
                  itemType: "group",
                  colCount: "auto",
                  items: [
                    {
                      dataField: "O14",
                      label: {
                        text: "Jabatan",
                      },
                    },
                    {
                      dataField: "O15",
                      label: {
                        text: "Jenjang Jabatan",
                      },
                    },
                  ]
                },
                {
                  itemType: "group",
                  items: [
                    {
                      itemType: "empty",
                    }
                  ]
                },
                {
                  itemType: "group",
                  colCount: "auto",
                  items: [
                    {
                      dataField: "O08",
                      label: {
                        text: "Kategori PTK",
                      },
                    },
                    {
                      dataField: "O09",
                      label: {
                        text: "Jenis PTK",
                      },
                    },
                    {
                      dataField: "O19",
                      label: {
                        text: "Penugasan",
                      },
                    },
                  ]
                },
                {
                  itemType: "group",
                  colCount: "auto",
                  items: [
                    {
                      dataField: "O20",
                      label: {
                        text: "Unit Kerja",
                      },
                    },
                    {
                      dataField: "O21",
                      label: {
                        text: "Instansi Pemerintahan",
                      },
                    },
                  ]
                },
              ]
            },
          ]

        }
      ]
    },

    {
      title: "Arsip Dokumen",
      items: [
      ]
    },
  ]

}