window.onload = () => {
    google.accounts.id.initialize(
        {
            client_id: '666683014815-5urr0akccfc5scgfm1ao6r5e5kn63707.apps.googleusercontent.com',
            // auto_select: true,
            callback: onSignIn,
            // login_uri: "https://www.sdntisnonegaran1probolinggo.sch.id/login",
            // native_callback:"onSignIn",
            cancel_on_tap_outside: false,
            // prompt_parent_id: "PageContains",
            // auto_prompt: true,
            // nonce: "ePlatform20536207",
            context: "signin",
            // state_cookie_domain:"_*.domain",
            // ux_mode: "redirect", //popup,redirect
            // allowed_parent_origin: "https://www.sdntisnonegaran1probolinggo.sch.id",
            // intermediate_iframe_close_callback:"logBeforeClose",
            itp_support: true,
            // login_hint:"",
            // hd: "*",
            use_fedcm_for_prompt: true,
        },
    );
    // google.accounts.id.prompt();
};

//=======================================================
$(document).ready(function () {
    window.jsPDF = window.jspdf.jsPDF;

    _main = {
        appConfig: {
            app: {
                title: "e-Platform ( 20536207 )",
                iconUrl: "/assets/images/LOGO20536207.png",
                appname: "e-Platform AIO",
                appver: "20536207.01",
                owner: "SD NEGERI TISNONEGARAN 1 PROBOLINGGO",
                createdYear: "2022",
            },
            gapi: {
                clientId: "666683014815-5urr0akccfc5scgfm1ao6r5e5kn63707.apps.googleusercontent.com",
                apiKey: "AIzaSyCAXrx4H2jplyt2O7MAI1Q0bX60V2QoP9Q",
                discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"],
                scope: "https://www.googleapis.com/auth/drive",
            },
            dataSource: {
                Kesiswaan: "15SkVrus9I9rb79E3Hf6EninYthneYxIKJfw8OvIMMUc", //SpreadsheetID
                Kepegawaian: "1CKt_wRc7-pJ9mCvyASKJ9TK11lDqMllZfXzVIsm5mgg",
                User: "1oWTnHGFKF8X-YgnAZjT2YwtXuRpVSfBnCVtKHxFBEWY",
            },
        },
        account: {
            user: {
                cred: null,
                sub: null,
                userid: null,
                username: null,
                useremail: null,
                userstate: null,
                userdept: null,
                photo: null,
            },
        },
        arrVarGlobal: {
            _actPageContains: null,
            _PdfFilePageContains: null,
            _ParentPageContains: null,
            _data: null,
            _columnArray: [],
            _dataArray: [],
            _dataObject: {},
        },
        navigator: {
            main: [
                {
                    "key": "Dashboard",
                    "items": [
                        {
                            "id": "01-01",
                            "text": "Profil Sekolah",
                            "icon": "tags",
                            "badge": "",
                            "disabled": false,
                            "visible": true,
                            "target": "./master/AIOPdfPageContains/AIO_PdfPageContains.html"
                        },
                        {
                            "id": "01-02",
                            "text": "Peserta Didik",
                            "icon": "tags",
                            "badge": "",
                            "disabled": false,
                            "visible": true,
                            "target": "./master/AIOPdfPageContains/AIO_PdfPageContains.html"
                        },
                        {
                            "id": "01-03",
                            "text": "Pegawai",
                            "icon": "tags",
                            "badge": "",
                            "disabled": false,
                            "visible": true,
                            "target": "./master/AIOPdfPageContains/AIO_PdfPageContains.html"
                        },
                        {
                            "id": "01-04",
                            "text": "Sarana dan Prasarana",
                            "icon": "tags",
                            "badge": "",
                            "disabled": false,
                            "visible": true,
                            "target": "./master/AIOPdfPageContains/AIO_PdfPageContains.html"
                        },
                        {
                            "id": "01-05",
                            "text": "Program Kegiatan",
                            "icon": "tags",
                            "badge": "",
                            "disabled": false,
                            "visible": true,
                            "target": "./master/AIOPdfPageContains/AIO_PdfPageContains.html"
                        }
                    ]
                },
                {
                    "key": "Informasi Kesiswaan",
                    "items": [
                        {
                            "id": "02-01",
                            "text": "Daftar Induk Siswa",
                            "icon": "tags",
                            "badge": "",
                            "disabled": false,
                            "visible": true,
                            "target": "./master/KesiswaanDataIndukSiswa/Kesiswaan_DataIndukSiswa.html"
                        },
                        {
                            "id": "02-02",
                            "text": "Daftar Rombongan Belajar",
                            "icon": "tags",
                            "badge": "",
                            "disabled": false,
                            "visible": true,
                            "target": "./master/KesiswaanRombonganBelajar/Kesiswaan_RombonganBelajar.html"
                        },
                        {
                            "id": "02-03",
                            "text": "Daftar Peserta Didik",
                            "icon": "tags",
                            "badge": "",
                            "disabled": false,
                            "visible": true,
                            "target": "./master/KesiswaanPesertaDidik/Kesiswaan_PesertaDidik.html"
                        },
                        {
                            "id": "02-04",
                            "text": "Daftar Prestasi Siswa",
                            "icon": "tags",
                            "badge": "",
                            "disabled": false,
                            "visible": true,
                            "target": "./master/KesiswaanPrestasi/Kesiswaan_Prestasi.html"
                        }
                    ]
                },
                {
                    "key": "Informasi Kepegawaian",
                    "items": [
                        {
                            "id": "03-01",
                            "text": "Instrumen Data Pegawai",
                            "icon": "tags",
                            "badge": "",
                            "disabled": false,
                            "visible": true,
                            "target": "./master/KepegawaianInstrumenDataPegawai/Kepegawaian_InstrumenDataPegawai.html"
                        },
                        {
                            "id": "03-02",
                            "text": "Putusan Non-ASN",
                            "icon": "tags",
                            "badge": "",
                            "disabled": true,
                            "visible": true,
                            "target": "./master/KepegawaianPutusanNonASN/Kepegawaian_PutusanNonASN.html"
                        },
                        {
                            "id": "03-03",
                            "text": "Putusan ASN",
                            "icon": "tags",
                            "badge": "",
                            "disabled": true,
                            "visible": true,
                            "target": "./master/KepegawaianPutusanASN/Kepegawaian_PutusanASN.html"
                        },
                        {
                            "id": "03-04",
                            "text": "Putusan Kepangkatan",
                            "icon": "tags",
                            "badge": "",
                            "disabled": true,
                            "visible": true,
                            "target": "./master/KepegawaianPutusanKepangkatan/Kepegawaian_PutusanKepangkatan.html"
                        },
                        {
                            "id": "03-05",
                            "text": "Putusan Gaji Berkala",
                            "icon": "tags",
                            "badge": "",
                            "disabled": true,
                            "visible": true,
                            "target": "./master/KepegawaianGajiBerkala/Kepegawaian_PutusanGajiBerkala.html"
                        }
                    ]
                },
                {
                    "key": "Informasi Sarana Prasarana",
                    "items": [
                        {
                            "id": "04-01",
                            "text": "Data Aset Bangunan",
                            "icon": "tags",
                            "badge": "",
                            "disabled": true,
                            "visible": true,
                            "target": "./master/SaranaPrasaranaDataAsetBangunan/SaranaPrasarana_DataAsetBangunan.html"
                        },
                        {
                            "id": "04-02",
                            "text": "Data Aset Peralatan",
                            "icon": "tags",
                            "badge": "",
                            "disabled": true,
                            "visible": true,
                            "target": "./master/SaranaPrasaranaDataAsetPeralatan/SaranaPrasarana_DataAsetPeralatan.html"
                        },
                        {
                            "id": "04-03",
                            "text": "Data Aset Lainnya",
                            "icon": "tags",
                            "badge": "",
                            "disabled": true,
                            "visible": true,
                            "target": "./master/SaranaPrasaranaDataAsetLainnya/SaranaPrasarana_DataAsetLainnya.html"
                        },
                        {
                            "id": "04-04",
                            "text": "Data Persediaan Barang",
                            "icon": "tags",
                            "badge": "",
                            "disabled": true,
                            "visible": true,
                            "target": "./master/SaranaPrasaranaDataPersediaanBarang/SaranaPrasarana_DataPersediaanBarang.html"
                        }
                    ]
                },
                {
                    "key": "Cloud Storage",
                    "items": [
                        {
                            "id": "05-01",
                            "text": "Utility",
                            "icon": "tags",
                            "badge": null,
                            "disabled": false,
                            "visible": true,
                            "target": "./master/DashboardFileStorage/DashboardFileStorage.html"
                        }
                    ]
                }
            ],
            linkedInfo: [
                {
                    "id": 0,
                    "parentid": "00",
                    "text": null,
                    "icon": "fab fa-whatsapp",
                    "loadpage": "https://api.whatsapp.com/send?phone=6285330307971"
                },
                {
                    "id": 1,
                    "parentid": "00",
                    "text": null,
                    "icon": "fab fa-instagram",
                    "loadpage": "https://instagram.com/sdntisnonegaran1probolinggo/"
                },
                {
                    "id": 2,
                    "parentid": "00",
                    "text": null,
                    "icon": "fab fa-youtube",
                    "loadpage": "https://www.youtube.com/@sdntisnonegaran1probolinggo/playlists"
                },
                {
                    "id": 3,
                    "parentid": "00",
                    "text": null,
                    "icon": "fab fa-twitter",
                    "loadpage": "https://twitter.com/id20536207"
                },
                {
                    "id": 4,
                    "parentid": "00",
                    "text": null,
                    "icon": "fas fa-location-dot",
                    "loadpage": "https://goo.gl/maps/w4mRN8DQVqaUcJtj6"
                },
                {
                    "id": 5,
                    "parentid": "00",
                    "text": null,
                    "icon": "fas fa-envelope",
                    "loadpage": "mailto:e.20536207@gmail.com"
                }
            ],
            linkedPlatform: [
                {
                    "id": 0,
                    "dev": "SATDIK 20536207",
                    "detail": "Satuan Pendidikan SD Negeri Tisnonegaran 1",
                    "items": [
                        {
                            "product": "Database Peserta Didik",
                            "detail": "Manajemen Database Internal Peserta Didik",
                            "icon": "tags",
                            "target": "https://docs.google.com/spreadsheets/d/1wRpAJIQs6rzrlq_dGzuInUGk5Hb4BLwDdeN6MRdtE6g/edit?usp=sharing"
                        },
                        {
                            "product": "Database Pegawai",
                            "detail": "Manajemen Database Internal Kepegawaian",
                            "icon": "tags",
                            "target": "https://docs.google.com/spreadsheets/d/1N1XhNYsLjkzSRinGy_OsmH_K5WHmT3-7KhZORKOMpzo/edit?usp=sharing"
                        },
                        {
                            "product": "Dapodik",
                            "detail": "Manajemen Data Pokok Pendidikan",
                            "icon": "tags",
                            "target": "http://20536207.ip-dynamic.com:5774"
                        },
                        {
                            "product": "e-Rapor SD-KM",
                            "detail": "Manajemen Rapor Kurikulum Merdeka",
                            "icon": "tags",
                            "target": "http://20536207.ip-dynamic.com:7231"
                        },
                        {
                            "product": "e-Rapor SP",
                            "detail": "Manajemen Rapor Alternatif",
                            "icon": "tags",
                            "target": "http://20536207.ip-dynamic.com:7252"
                        }
                    ]
                },
                {
                    "id": 1,
                    "dev": "DISDIKBUD",
                    "detail": "Dinas Pendidikan dan Kebudayaan",
                    "items": [
                        {
                            "product": "SI-IJOL",
                            "detail": "Manajemen Sistem Informasi Ijasah Online",
                            "icon": "tags",
                            "target": "https://siijol.probolinggokota.go.id"
                        }
                    ]
                },
                {
                    "id": 2,
                    "dev": "BKPSDM",
                    "detail": "Badan Kepegawaian dan Pengembangan Sumber Daya Manusia",
                    "items": [
                        {
                            "product": "SIMPEG",
                            "detail": "Manajemen Sistem Informasi Pegawai Kota Probolinggo",
                            "icon": "tags",
                            "target": "https://simpeg.probolinggokota.go.id/lite/4.4/index.php/login/index/Dashboard"
                        },
                        {
                            "product": "G-Kinerja",
                            "detail": "Manajemen Sistem Informasi Pegawai Kota Probolinggo",
                            "icon": "tags",
                            "target": "https://e-pasprohandal.probolinggokota.go.id"
                        },
                        {
                            "product": "SIAP",
                            "detail": "Manajemen Sistem Informasi Absensi Presensi Pegawai",
                            "icon": "tags",
                            "target": "https://siap.probolinggokota.go.id"
                        }
                    ]
                },
                {
                    "id": 3,
                    "dev": "BPPKAD",
                    "detail": "Badan Pendapatan, Pengelolaan Keuangan dan Aset Daerah",
                    "items": [
                        {
                            "product": "SIMRAL",
                            "detail": "Manajemen Sistem Informasi Perencanaan, Penganggaran dan Pelaporan",
                            "icon": "tags",
                            "target": "https://simral.probolinggokota.go.id/2021/"
                        },
                        {
                            "product": "SIMPATDA",
                            "detail": "Manajemen Sistem Pendapatan Asli Daerah",
                            "icon": "tags",
                            "target": "http://esptpd.probolinggokota.go.id/"
                        }
                    ]
                },
                {
                    "id": 4,
                    "dev": "KEMENDIKBUD RISTEK",
                    "detail": "Kementerian Pendidikan, Kebudayaan, Riset dan Teknologi",
                    "items": [
                        {
                            "product": "DAPODIK-SP",
                            "detail": "Integrasi pengelolaan Dapodik satuan pendidikan",
                            "icon": "tags",
                            "target": "https://sp.datadik.kemdikbud.go.id"
                        },
                        {
                            "product": "DAPODIK-PTK",
                            "detail": "Integrasi pengelolaan Dapodik PTK",
                            "icon": "tags",
                            "target": "https://ptk.datadik.kemdikbud.go.id"
                        },
                        {
                            "product": "DAPODIK-PD",
                            "detail": "Integrasi pengelolaan Dapodik Peserta Didik",
                            "icon": "tags",
                            "target": "https://pd.data.kemdikbud.go.id"
                        },
                        {
                            "product": "Verval-SP",
                            "detail": "Manajemen Verifikasi Validasi data pokok satuan satuan pendidikan",
                            "icon": "tags",
                            "target": "https://vervalsp.data.kemdikbud.go.id"
                        },
                        {
                            "product": "Verval-PTK",
                            "detail": "Manajemen Verifikasi Validasi data pokok Pendidik dan Tenaga Kependidikan",
                            "icon": "tags",
                            "target": "https://vervalptk.data.kemdikbud.go.id"
                        },
                        {
                            "product": "Verval-PD",
                            "detail": "Manajemen Verifikasi Validasi data Peserta Didik",
                            "icon": "tags",
                            "target": "https://vervalpd.data.kemdikbud.go.id/"
                        }
                    ]
                },
                {
                    "id": 5,
                    "dev": "BKN",
                    "detail": "Badan Kepegawaian Negara Republik Indonesia",
                    "items": [
                        {
                            "product": "MyASN",
                            "detail": "Platform Layanan Integrasi Data ASN",
                            "icon": "tags",
                            "target": "https://myasn.bkn.go.id"
                        },
                        {
                            "product": "e-Kinerja",
                            "detail": "Platform Pengelolaan eKinerja ASN",
                            "icon": "tags",
                            "target": "https://kinerja.bkn.go.id"
                        },
                        {
                            "product": "DISPAKATI",
                            "detail": "Platform Penilaian Angka Kredit",
                            "icon": "tags",
                            "target": "https://dispakati.bkn.go.id"
                        }

                    ]
                },
                {
                    "id": 6,
                    "dev": "KEMENPANRB",
                    "detail": "Kementerian Pendayagunaan Aparatur Negara dan Reformasi Birokrasi Republik Indonesia",
                    "items": [
                        {
                            "product": "SRIKANDI",
                            "detail": "Platform Layanan Arsip dan Persuratan",
                            "icon": "tags",
                            "target": "https://srikandi.arsip.go.id/auth/login"
                        }

                    ]
                }
            ],
            banner: [
                {
                    "ID": "1",
                    "Title": "SD NEGERI TISNONEGARAN 1",
                    "Keterangan": "Satuan Pendidikan Dasar",
                    "Image": "./master/Homepage/Assets/bannerimage/1.png"
                },
                {
                    "ID": "2",
                    "Title": "PEMERINTAH KOTA PROBOLINGGO",
                    "Keterangan": "Pemerintahan Daerah",
                    "Image": "./master/Homepage/Assets/bannerimage/2.png"
                },
                {
                    "ID": "3",
                    "Title": "KEMENDIKBUDRISTEK",
                    "Keterangan": "Kementerian Negara R.I",
                    "Image": "./master/Homepage/Assets/bannerimage/3.png"
                },
                {
                    "ID": "4",
                    "Title": "SEKOLAH ADIWIYATA NASIONAL",
                    "Keterangan": "Penganugerahan Satuan Pendidikan",
                    "Image": "./master/Homepage/Assets/bannerimage/4.png"
                },
                {
                    "ID": "5",
                    "Title": "SEKOLAH RAMAH ANAK",
                    "Keterangan": "Penganugerahan Satuan Pendidikan",
                    "Image": "./master/Homepage/Assets/bannerimage/5.png"
                },
                {
                    "ID": "6",
                    "Title": "",
                    "Keterangan": "",
                    "Image": "./master/Homepage/Assets/bannerimage/6.png"
                },
                {
                    "ID": "8",
                    "Title": "",
                    "Keterangan": "",
                    "Image": "./master/Homepage/Assets/bannerimage/8.png"
                }
            ],
            header: [
                {
                    "key": "Home",
                    "text": "Home",
                    "visible": true,
                    "items": [
                        {
                            "id": 1,
                            "text": "Home",
                            "icon": "tags",
                            "badge": "",
                            "disabled": false,
                            "visible": true,
                            "target": "./Master/Homepage/Home.html"
                        }
                    ]
                },
                {
                    "key": "Program",
                    "visible": true,
                    "items": [
                        {
                            "id": 0,
                            "text": "Visi dan Misi",
                            "icon": "tags",
                            "badge": "",
                            "disabled": false,
                            "visible": true,
                            "target": "./Master/Program/Program_VisiDanMisi.html"
                        },
                        {
                            "id": 1,
                            "text": null,
                            "icon": null,
                            "badge": null,
                            "disabled": false,
                            "visible": true,
                            "target": null,
                            "template": "<hr class='separator' />"
                        },
                        {
                            "id": 2,
                            "text": "Standar Kelulusan",
                            "icon": "tags",
                            "badge": "",
                            "disabled": false,
                            "visible": true,
                            "target": "./Master/Program/Program_StandarKelulusan.html"
                        },
                        {
                            "id": 3,
                            "text": "Standar Isi",
                            "icon": "tags",
                            "badge": "",
                            "disabled": false,
                            "visible": true,
                            "target": "./Master/Program/Program_StandarIsi.html"
                        },
                        {
                            "id": 4,
                            "text": "Standar Proses",
                            "icon": "tags",
                            "badge": "",
                            "disabled": false,
                            "visible": true,
                            "target": "./Master/Program/Program_StandarProses.html"
                        },
                        {
                            "id": 5,
                            "text": "Standar Sarana Prasarana",
                            "icon": "tags",
                            "badge": "",
                            "disabled": false,
                            "visible": true,
                            "target": "./Master/Program/Program_StandarSaranaPrasarana.html"
                        },
                        {
                            "id": 6,
                            "text": "Standar Pendidik dan Tenaga Kependidikan",
                            "icon": "tags",
                            "badge": "",
                            "disabled": false,
                            "visible": true,
                            "target": "./Master/Program/Program_StandarPTK.html"
                        },
                        {
                            "id": 7,
                            "text": "Standar Pembiayaan",
                            "icon": "tags",
                            "badge": "",
                            "disabled": false,
                            "visible": true,
                            "target": "./Master/Program/Program_StandarPembiayaan.html"
                        },
                        {
                            "id": 8,
                            "text": "Standar Penilaian",
                            "icon": "tags",
                            "badge": "",
                            "disabled": false,
                            "visible": true,
                            "target": "./Master/Program/Program_StandarPenilaian.html"
                        },
                        {
                            "id": 9,
                            "text": "Standar Pengelolaan",
                            "icon": "tags",
                            "badge": "",
                            "disabled": false,
                            "visible": true,
                            "target": "./Master/Program/Program_StandarPengelolaan.html"
                        }
                    ]
                },
                {
                    "key": "Dokumentasi",
                    "visible": false,
                    "items": [
                        {
                            "id": 1,
                            "text": "Sub 001",
                            "icon": "tags",
                            "badge": "",
                            "disabled": false,
                            "visible": false,
                            "target": "./Master/Dokumentasi/Dokumentasi_Sub001.html"
                        },
                        {
                            "id": 2,
                            "text": "Sub 002",
                            "icon": "tags",
                            "badge": "",
                            "disabled": false,
                            "visible": false,
                            "target": "./Master/Dokumentasi/Dokumentasi_Sub002.html"
                        }
                    ]
                },
                {
                    "key": "Literasi",
                    "visible": false,
                    "items": [
                        {
                            "id": 1,
                            "text": "Sub 001",
                            "icon": "tags",
                            "badge": "",
                            "disabled": false,
                            "visible": false,
                            "target": "./Master/Literasi/Literasi_Sub001.html"
                        },
                        {
                            "id": 2,
                            "text": "Sub 002",
                            "icon": "tags",
                            "badge": "",
                            "disabled": false,
                            "visible": false,
                            "target": "./Master/Literasi/Literasi_Sub002.html"
                        }
                    ]
                },
                {
                    "key": "Referensi",
                    "visible": false,
                    "items": [
                        {
                            "id": 1,
                            "text": "Sub 001",
                            "icon": "tags",
                            "badge": "",
                            "disabled": false,
                            "visible": false,
                            "target": "./Master/Referensi/Referensi_Sub001.html"
                        },
                        {
                            "id": 2,
                            "text": "Sub 002",
                            "icon": "tags",
                            "badge": "",
                            "disabled": false,
                            "visible": false,
                            "target": "./Master/Referensi/Referensi_Sub002.html"
                        }
                    ]
                }
            ],
        },
    };

    //App Head =================================================
    let _titleApp = document.createElement('title');
    _titleApp.innerHTML = _main.appConfig.app.title;
    document.head.appendChild(_titleApp);

    let _iconApp = document.createElement('link');
    _iconApp.rel = "icon";
    _iconApp.type = "image/icon type";
    _iconApp.href = _main.appConfig.app.iconUrl;
    document.head.appendChild(_iconApp);
    document.getElementById("LayoutFooter").innerHTML = `<i class="far fa-copyright"></i>${_main.appConfig.app.createdYear} ${_main.appConfig.app.owner}`;

    _element = {
        //Item Header =================================================
        LayoutHeader:
            $("#LayoutHeader").dxToolbar({
                items: [
                    {
                        location: "before", //before|center|after
                        widget: "dxButton", //dxButton|dxButtonGroup|dxToolbar|dxTabs
                        locateInMenu: "never", //auto|never|always
                        visible: true,
                        options: {
                            index: 0,
                            elementAttr: { id: "elHeader-" + (0).toString().padStart(3, "0"), },
                            icon: "fab fa-windows",
                            text: _main.appConfig.app.appname,
                            template: undefined,
                            label: "",
                            hint: "",
                            stylingMode: "text", //text|outlined|contained
                            type: "normal", //normal|default|danger|success
                            hoverStateEnabled: false,
                            focusStateEnabled: false,
                            activeStateEnabled: true,
                            disabled: false,
                            visible: true,
                            onClick: () => {
                                if (_main.account.user.cred != null) {
                                    _element.LayoutContains.toggle();
                                };
                            }
                        },
                    },
                    {
                        location: "before", //before|center|after
                        widget: "dxButton", //dxButton|dxButtonGroup|dxToolbar|dxTabs
                        locateInMenu: "auto", //auto|never|always
                        visible: true,
                        options: {
                            index: 1,
                            elementAttr: { id: "elHeader-" + (1).toString().padStart(3, "0"), },
                            icon: "",
                            text: "ver. " + _main.appConfig.app.appver,
                            template: undefined,
                            label: "",
                            hint: "",
                            stylingMode: "outlined", //text|outlined|contained
                            type: "normal", //normal|default|danger|success
                            hoverStateEnabled: false,
                            focusStateEnabled: false,
                            activeStateEnabled: true,
                            disabled: false,
                            visible: true,
                            onClick: undefined,
                        },
                    },
                    {
                        location: "after", //before|center|after
                        widget: "dxButton", //dxButton|dxButtonGroup|dxToolbar|dxTabs
                        locateInMenu: "never", //auto|never|always
                        visible: true,
                        options: {
                            index: 2,
                            elementAttr: { id: "elHeader-" + (2).toString().padStart(3, "0"), },
                            // icon: "fas fa-circle-user",
                            text: "",
                            template: '<a class="fas fa-circle-user fa-2x"></a>',
                            label: "",
                            hint: "",
                            stylingMode: "text", //text|outlined|contained
                            type: "noramal", //normal|default|danger|success
                            hoverStateEnabled: false,
                            focusStateEnabled: false,
                            activeStateEnabled: true,
                            disabled: false,
                            visible: true,
                            onClick() {
                                if (_main.account.user.cred == null) {
                                    google.accounts.id.prompt();
                                } else {
                                    _element.PageToolbar.option("items[1].text", "e-Platform Authentication");
                                    _element.PageToolbar.option("items[2].visible", false);

                                    $("#PageContains").empty();
                                    _main.arrVarGlobal._actPageContains = "/master/User/User_MainPage.html";
                                    $("#PageContains").load(_main.arrVarGlobal._actPageContains);
                                }
                            },
                        },
                    },
                ]
            }).dxToolbar("instance"),

        //Layout Contains =================================================
        LayoutContains:
            $('#LayoutContent').dxDrawer({
                opened: false,
                animationEnabled: false,
                revealMode: "slide", //"slide | expand"
                openedStateMode: $(window).width() < 980 ? "overlap" : "shrink", //shrink //overlap
                position: 'left', //right
                shading: $(window).width() < 600 ? true : false,
                closeOnOutsideClick: true,
            }).dxDrawer('instance'),

        //Item PageToolbar =================================================
        PageToolbar:
            $("#PageToolbar").dxToolbar({
                items: [
                    {
                        location: "before", //before|center|after
                        widget: "dxButton", //dxButton|dxButtonGroup|dxToolbar|dxTabs
                        locateInMenu: "never", //auto|never|always
                        visible: true,
                        cssClass: "items-before",
                        options: {
                            index: 0,
                            elementAttr: { id: "elPageToolbar-" + (0).toString().padStart(3, "0"), },
                            icon: "fas fa-right-from-bracket fa-rotate-180",
                            text: "",
                            template: undefined,
                            label: "",
                            hint: "",
                            stylingMode: "text", //text|outlined|contained
                            type: "normal", //normal|default|danger|success
                            hoverStateEnabled: false,
                            focusStateEnabled: false,
                            activeStateEnabled: true,
                            disabled: false,
                            visible: true,
                            onClick() {
                                _element.PageToolbar.option("items[2].visible", false);
                                $("#PageContains").empty();
                                _main.arrVarGlobal._actPageContains = _main.arrVarGlobal._ParentPageContains;
                                $("#PageContains").load(_main.arrVarGlobal._actPageContains);
                            },
                        },
                    },
                    {
                        location: "before", //before|center|after
                        // widget: "dxButton", //dxButton|dxButtonGroup|dxToolbar|dxTabs
                        locateInMenu: "never", //auto|never|always
                        visible: true,
                        text: "",
                        cssClass: "Page-Title",
                        options: {
                        },
                    },
                    {
                        location: "after", //before|center|after
                        widget: "dxButtonGroup", //dxButton|dxButtonGroup|dxToolbar|dxTabs
                        locateInMenu: "auto", //auto|never|always
                        visible: false,
                        cssClass: "items-after",
                        options: {},
                    },
                    {
                        location: "after", //before|center|after
                        widget: "dxButton", //dxButton|dxButtonGroup|dxToolbar|dxTabs
                        locateInMenu: "never", //auto|never|always
                        visible: true,
                        cssClass: "items-after",
                        options: {
                            index: 3,
                            elementAttr: { id: "elPageToolbar-" + (3).toString().padStart(3, "0"), },
                            icon: "fas fa-refresh",
                            text: "",
                            template: undefined,
                            label: "",
                            hint: "",
                            stylingMode: "text", //text|outlined|contained
                            type: "normal", //normal|default|danger|success
                            hoverStateEnabled: false,
                            focusStateEnabled: false,
                            activeStateEnabled: true,
                            disabled: false,
                            visible: true,
                            onClick() {
                                _element.PageToolbar.option("items[2].visible", false);

                                $("#PageContains").empty();
                                $("#PageContains").load(_main.arrVarGlobal._actPageContains);
                            },
                        },
                    },
                ]
            }).dxToolbar("instance"),

        //Toast info =================================================
        Toast:
            $('#ShowMessage').dxToast({
                displayTime: 5000,
            }).dxToast('instance'),

        //Toast info =================================================
        Popup:
            $('#ShowMessage').dxPopup({
                height: "auto",
                showCloseButton: false,
                hideOnOutsideClick: true,
                hideOnParentScroll: true,
                visible: false,
                width: $(window).width() < 368 ? "90%" : "25%",
            }).dxPopup("instance"),
    };

    //==============================================================================
    _PageSidebar(_main.navigator.main);
    _main.arrVarGlobal._actPageContains = "/master/Homepage/Homepage_Home.html";
    $("#PageContains").empty();
    $("#PageContains").load(_main.arrVarGlobal._actPageContains);
    $(window).resize(function () {
        _element.LayoutContains.option('openedStateMode', $(window).width() < 960 ? "overlap" : "shrink");
    });
});

//=== Sidebar ======================================================================
function _PageSidebar(_dataSource) {
    _element.LayoutContains.option("template",
        () => {
            return $("<div>").dxList({
                keyExpr: "key",
                dataSource: _dataSource,
                elementAttr: { class: "ContainsSidebar", },
                hoverStateEnabled: false,
                focusStateEnabled: false,
                activeStateEnabled: true,
                grouped: true,
                collapsible: false,
                collapsibleGroups: true,
                showSelectionControls: false,
                scrollByContent: true,
                scrollByThumb: true,
                useNativeScrolling: false,
                groupTemplate(data) {
                    return `<a>${data.key}</a>`;
                },
                width: 265,
                selectionMode: "single",
                onItemClick(e) {
                    _element.PageToolbar.option("items[1].text", e.itemData.text);
                    _element.PageToolbar.option("items[2].visible", false);
                    _element.LayoutContains.toggle();

                    $("#PageContains").empty();
                    _main.arrVarGlobal._actPageContains = e.itemData["target"];
                    _main.arrVarGlobal._PdfFilePageContains = "/master/AIOPdfPageContains/PdfPageContains/" + e.itemData["text"].replace(" ", "") + ".pdf";
                    $("#PageContains").load(_main.arrVarGlobal._actPageContains);
                },
            });
        }
    );

}

//=== NOTIFY ======================================================================
function _notify(_message) {
    return DevExpress.ui.notify(
        {
            message: _message,
            maxWidth: 300,
            displayTime: 2500,
            animation: {
                show: { type: 'fade', duration: 400, from: 0, to: 1 },
                hide: { type: 'fade', duration: 40, to: 0 },
            },
        },
        { position: "top right", direction: "down-push" }
    );
}

//=== USER AUTHENTICATION ======================================================================
function decodeJwtResponse(token) {
    var base64Url = token.split(".")[1];
    var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    var jsonPayload = decodeURIComponent(
        atob(base64)
            .split("")
            .map(function (c) {
                return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
            })
            .join("")
    );

    return JSON.parse(jsonPayload);
}

function onSignIn(currentAccount) {

    const
        responsePayload = decodeJwtResponse(currentAccount.credential),
        getQuery = GetVisualizationQuery(
            _main.appConfig.dataSource.User,    //SpreadsheetID
            1181780988,                         //SheetID
            "A1:E",                            //Range
            "SELECT * WHERE C = '" + responsePayload.email + "'"            //Filter or Query
        );

    getQuery.send(VisualizationQuery => {
        GetJsonData(VisualizationQuery);
        _main.account.user.cred = _main.arrVarGlobal._dataArray.length != 0 ? currentAccount.credential : null;
        _main.account.user.sub = _main.arrVarGlobal._dataArray.length != 0 ? responsePayload.sub : null;
        _main.account.user.userid = _main.arrVarGlobal._dataArray.length != 0 ? _main.arrVarGlobal._dataArray[0].userid : null;
        _main.account.user.username = _main.arrVarGlobal._dataArray.length != 0 ? _main.arrVarGlobal._dataArray[0].username : null;
        _main.account.user.useremail = _main.arrVarGlobal._dataArray.length != 0 ? _main.arrVarGlobal._dataArray[0].useremail : null;
        _main.account.user.userstate = _main.arrVarGlobal._dataArray.length != 0 ? _main.arrVarGlobal._dataArray[0].userstate : null;
        _main.account.user.userdept = _main.arrVarGlobal._dataArray.length != 0 ? _main.arrVarGlobal._dataArray[0].userdept : null;
        _main.account.user.photo = _main.arrVarGlobal._dataArray.length != 0 ? responsePayload.picture : null;

        //https://lh3.googleusercontent.com/d/FILE_ID

        if (_main.account.user.cred != null) {
            _element.PageToolbar.option("items[1].text", "e-Platform Authentication ");
            _element.PageToolbar.option("items[2].visible", false);

            $("#PageContains").empty();
            _main.arrVarGlobal._actPageContains = "/master/User/User_MainPage.html";
            $("#PageContains").load(_main.arrVarGlobal._actPageContains);
        } else {
            _element.Popup.option(
                "contentTemplate",
                function (contentElement) {
                    contentElement.append(

                        `<p>
                        <div id=UserPict style="text-align: center; vertical-align: middle;">
                            <img src=${responsePayload.picture} style="display:inline-flex;object-fit:scale-down;border-radius:100%;max-width:198px;"></img>
                        </div>
                        <div div id = "UserAccount" style = "font-size: large;margin: 5px 0 5px 0; text-align: center;" >${responsePayload.name}</div>
                        <div style = "padding: 4px; margin: 5px 0 5px 0; text-align: center;" >${responsePayload.email}</div>
                        <div style = "padding: 4px; background-color: rgba(100,100,100,0.7); margin: 5px 0 5px 0; text-align: center;" >as user guest</div>`
                    );
                }
            );
            _element.Popup.option("title", "Authentication");
            _element.Popup.option("visible", true);
        }

    });
    delete getQuery;
    delete responsePayload;
    _main.arrVarGlobal._columnArray = [];
    _main.arrVarGlobal._dataArray = [];
}

//=== VISUALIZATION QUERY ======================================================================
function GetVisualizationQuery(_DBId, _TBId, _Range, _Query) {
    var
        query = new google.visualization.Query(
            "https://docs.google.com/spreadsheets/d/" + _DBId + "/gviz/tq?" +
            "&gid=" + _TBId +
            "&range=" + _Range +
            "&headers=1"
            // + "&tq=" + _Query
        );

    query.setQuery(_Query);
    return query;
}

function GetJsonData(response) {
    _main.arrVarGlobal._columnArray = [];
    _main.arrVarGlobal._dataArray = [];

    if (!(response.isError())) {
        var
            data = response.getDataTable();
        // _dataSource = [],
        // _column = [];

        //GetJSONData Structure==================================
        data = JSON.parse(data.toJSON());
        data.rows.forEach((_rowItems, _rowIndex) => {
            var _arrRow = {};
            _rowItems.c.forEach((_cItems, _cIndex) => {
                var _field = data.cols[_cIndex],
                    _value = _field.type == 'date' ? (_cItems == null ? "" : _cItems.f) : (_cItems == null ? "" : _cItems.v),
                    _arrCol = {};

                _arrRow[_field.label] = _value == null ? "" : _value;

                // set column ===========================================
                if (_rowIndex == 0) {
                    _arrCol["caption"] = _field.label;
                    _arrCol["fixed"] = _cIndex == 0 ? true : false;
                    _arrCol["dataField"] = _field.label;
                    _arrCol["sortOrder"] = _cIndex == 0 ? "asc" : "";
                    _arrCol["dataType"] = _field.type;
                    _arrCol["format"] = _field.pattern;
                    _main.arrVarGlobal._columnArray.push(_arrCol);
                };
            });
            _main.arrVarGlobal._dataArray.push(_arrRow);
        });

        delete data;
        delete _field;
        delete _arrCol;
        delete _arrRow;
        return;
    } else {
        _notify('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
        return;
    };

}

function addPageButton(itemElement, itemData, itemDataCaption, actPageContains, ParentPageContains, pdfFileContains) {

    $(itemElement).append(
        $("<div />").dxButton({
            elementAttr: { class: 'pageButton' },
            type: 'normal',
            stylingMode: 'contained',
            hoverStateEnabled: false,
            focusStateEnabled: false,
            activeStateEnabled: true,
            height: '130px',
            template: () => {
                return `
                    <div div class= "itemPageButtton" >
                            <div class="itemPageButtonIcon"><i class="fas fa-layer-group fa-4x"></i></div>
                            <div class="itemPageButtonCaption">
                                ${itemDataCaption}
                            </div>
                        </div>
                        `;
            },
            onClick() {
                _element.PageToolbar.option("items[1].text", itemDataCaption);
                _element.PageToolbar.option("items[2].visible", false);

                $("#PageContains").empty();
                _main.arrVarGlobal._actPageContains = actPageContains;
                _main.arrVarGlobal._ParentPageContains = ParentPageContains;
                _main.arrVarGlobal._PdfFilePageContains = pdfFileContains;
                return $("#PageContains").load(_main.arrVarGlobal._actPageContains);
            },
        })
    );
}

// ===============================================================================================
function addPageForm(element, formColCount, itemData, itemContent) {
    $(element).dxForm({
        readOnly: true,
        labelLocation: "top",
        labelMode: "static",
        showColonAfterLabel: true,
        colCount: formColCount,
        // colCountByScreen: { lg: 2, md: 2, sm: 1, xs: 1, },
        // screenByWidth(width) { return width < 960 ? 'sm' : 'lg'; },
        formData: itemData,
        items: itemContent,
    }).dxForm("instance");

}