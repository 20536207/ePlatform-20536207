_main = {
    appConfig: {
        app: {
            title: "e-Platform ( 20536207 )",
            iconUrl: "/assets/images/LOGO20536207.png",
            appname: "e-Platform AIO",
            appver: new Date().getFullYear() + "." + (new Date().getMonth()+1),
            owner: "SD NEGERI TISNONEGARAN 1 PROBOLINGGO",
            createdYear: "2022-" + new Date().getFullYear(),
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
        YtApi: {
            apiKey: "AIzaSyCUc3W_Mt5LHvhYrmC6h8GvGjXb7IqOSG4",
            channelId: "UCtAfyg6GOiDibAakAiMJFqQ",
            uploadId: "UUtAfyg6GOiDibAakAiMJFqQ",
            url: "https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=6&playlistId=UUtAfyg6GOiDibAakAiMJFqQ&key=AIzaSyCUc3W_Mt5LHvhYrmC6h8GvGjXb7IqOSG4",
        },
    },
    account: {
        user: {
            client: null,
            cred: null,
            token: null,
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
        dashboard: [
            {
                "key": "01. Arteji Album",
                "items": [
                ]
            },
            {
                "key": "02. Profil Sekolah",
                "items": [
                    {
                        "id": "",
                        "text": "Identitas",
                        "icon": "fas fa-school-flag fa-4x",
                        "badge": "",
                        "disabled": false,
                        "visible": true,
                        "target": "./master/AIOPdfPageContains/AIO_PdfPageContains.html",
                        "fileId": "https://drive.google.com/file/d/1-cUWD2-IfQtj5nGloGOfPGnQ0xBqr55U/preview"
                    },
                    {
                        "id": "",
                        "text": "Visi dan Misi",
                        "icon": "fas fa-school-flag fa-4x",
                        "badge": "",
                        "disabled": false,
                        "visible": true,
                        "target": "./master/AIOPdfPageContains/AIO_PdfPageContains.html",
                        "fileId": "https://drive.google.com/file/d/1-Xg7kVBrwIa3ktUikpRPBhZU2IyJuwP3/preview"
                    },
                    {
                        "id": "",
                        "text": "Sejarah dan Riwayat",
                        "icon": "fas fa-school-flag fa-4x",
                        "badge": "",
                        "disabled": false,
                        "visible": true,
                        "target": "./master/AIOPdfPageContains/AIO_PdfPageContains.html",
                        "fileId": "https://drive.google.com/file/d/1-XNAH6aLPJC-nIpX7xvkexcJNdo3BVg4/preview"
                    },
                    {
                        "id": "",
                        "text": "Struktur Organisasi",
                        "icon": "fas fa-school-flag fa-4x",
                        "badge": "",
                        "disabled": false,
                        "visible": true,
                        "target": "./master/AIOPdfPageContains/AIO_PdfPageContains.html",
                        "fileId": "https://drive.google.com/file/d/1-RaayCQ-bfo2SKJIS5jgSLJHU51D0JGD/preview"
                    },
                    {
                        "id": "",
                        "text": "Fasilitas",
                        "icon": "fas fa-school-flag fa-4x",
                        "badge": "",
                        "disabled": false,
                        "visible": true,
                        "target": "./master/AIOPdfPageContains/AIO_PdfPageContains.html",
                        "fileId": "https://drive.google.com/file/d/1-NM08wWUaTeOQq6J62lipiCnJ6wLQgWU/preview"
                    },
                    {
                        "id": "",
                        "text": "Penghargaan",
                        "icon": "fas fa-school-flag fa-4x",
                        "badge": "",
                        "disabled": false,
                        "visible": true,
                        "target": "./master/AIOPdfPageContains/AIO_PdfPageContains.html",
                        "fileId": "https://drive.google.com/file/d/1-KsIqEYeueGGWm_i8mZwH3L6XN3xdZNN/preview"
                    },
                    {
                        "id": "",
                        "text": "...",
                        "icon": "fas fa-school-flag fa-4x",
                        "badge": "",
                        "disabled": false,
                        "visible": true,
                        "target": "./master/AIOPdfPageContains/AIO_PdfPageContains.html",
                        "fileId": "https://drive.google.com/file/d/1-J_0-URKQCTEBZb0j2JtSBpXx8OOyR9d/preview"
                    },
                    {
                        "id": "",
                        "text": "...",
                        "icon": "fas fa-school-flag fa-4x",
                        "badge": "",
                        "disabled": false,
                        "visible": true,
                        "target": "./master/AIOPdfPageContains/AIO_PdfPageContains.html",
                        "fileId": "https://drive.google.com/file/d/1-gMRgafZW9F1BoB1LCI6se-14zOzRobJ/preview"
                    },
                ]
            },
            {
                "key": "03. Peserta Didik",
                "items": [
                    {
                        "id": "",
                        "text": "Rekapitulasi Peserta Didik",
                        "icon": "fas fa-layer-group fa-4x",
                        "badge": "",
                        "disabled": false,
                        "visible": true,
                        "target": "./master/AIOPdfPageContains/AIO_PdfPageContains.html",
                        "fileId": "https://drive.google.com/file/d/1tkCXOtac4r8OUSgJz6HAqLLo2BQhs1y2/preview"
                    },
                    {
                        "id": "",
                        "text": "...",
                        "icon": "fas fa-layer-group fa-4x",
                        "badge": "",
                        "disabled": false,
                        "visible": true,
                        "target": "./master/AIOPdfPageContains/AIO_PdfPageContains.html",
                        "fileId": "https://drive.google.com/file/d/02-02/preview"
                    },
                    {
                        "id": "",
                        "text": "...",
                        "icon": "fas fa-layer-group fa-4x",
                        "badge": "",
                        "disabled": false,
                        "visible": true,
                        "target": "./master/AIOPdfPageContains/AIO_PdfPageContains.html",

                        "fileId": "https://drive.google.com/file/d/02-03/preview"
                    },
                    {
                        "id": "",
                        "text": "...",
                        "icon": "fas fa-layer-group fa-4x",
                        "badge": "",
                        "disabled": false,
                        "visible": true,
                        "target": "./master/AIOPdfPageContains/AIO_PdfPageContains.html",
                        "fileId": "https://drive.google.com/file/d/02-04/preview"
                    },
                    {
                        "id": "",
                        "text": "...",
                        "icon": "fas fa-layer-group fa-4x",
                        "badge": "",
                        "disabled": false,
                        "visible": true,
                        "target": "./master/AIOPdfPageContains/AIO_PdfPageContains.html",
                        "fileId": "https://drive.google.com/file/d/02-05/preview"
                    },
                    {
                        "id": "",
                        "text": "...",
                        "icon": "fas fa-layer-group fa-4x",
                        "badge": "",
                        "disabled": false,
                        "visible": true,
                        "target": "./master/AIOPdfPageContains/AIO_PdfPageContains.html",
                        "fileId": "https://drive.google.com/file/d/02-06/preview"
                    },
                ]
            },
            {
                "key": "04. Pegawai",
                "items": [
                    {
                        "id": "",
                        "text": "Rekapitulasi Pegawai",
                        "icon": "fas fa-layer-group fa-4x",
                        "badge": "",
                        "disabled": false,
                        "visible": true,
                        "target": "./master/AIOPdfPageContains/AIO_PdfPageContains.html",
                        "fileId": "https://drive.google.com/file/d/1ttBhpssaUpe8FM9RVUefgR5hoiUs7VYd/preview"
                    },
                    {
                        "id": "",
                        "text": "...",
                        "icon": "fas fa-layer-group fa-4x",
                        "badge": "",
                        "disabled": false,
                        "visible": true,
                        "target": "./master/AIOPdfPageContains/AIO_PdfPageContains.html",
                        "fileId": "https://drive.google.com/file/d/1zxl8ZuYiqcR2K6Yn2fG_4yD92f8dSSDN/preview"
                    },
                    {
                        "id": "",
                        "text": "...",
                        "icon": "fas fa-layer-group fa-4x",
                        "badge": "",
                        "disabled": false,
                        "visible": true,
                        "target": "./master/AIOPdfPageContains/AIO_PdfPageContains.html",
                        "fileId": "https://drive.google.com/file/d/1zxq4FPP0M032tHQ9flQTkcAVLyxpAD0d/preview"
                    },
                    {
                        "id": "",
                        "text": "...",
                        "icon": "fas fa-layer-group fa-4x",
                        "badge": "",
                        "disabled": false,
                        "visible": true,
                        "target": "./master/AIOPdfPageContains/AIO_PdfPageContains.html",
                        "fileId": "https://drive.google.com/file/d/1VYctDVJC3nW8hBEQPXtMVNEElGkB4zkl/preview"
                    },
                    {
                        "id": "",
                        "text": "...",
                        "icon": "fas fa-layer-group fa-4x",
                        "badge": "",
                        "disabled": false,
                        "visible": true,
                        "target": "./master/AIOPdfPageContains/AIO_PdfPageContains.html",
                        "fileId": "https://drive.google.com/file/d/1-40QZKfeMvto3OuXcTZ2LhMy8Cwakppe/preview"
                    },
                    {
                        "id": "",
                        "text": "...",
                        "icon": "fas fa-layer-group fa-4x",
                        "badge": "",
                        "disabled": false,
                        "visible": true,
                        "target": "./master/AIOPdfPageContains/AIO_PdfPageContains.html",
                        "fileId": "https://drive.google.com/file/d/1-3vI4CtFl7zA7Z2yqAN7jo4eKqFI5KAE/preview"
                    },
                ]
            },
            {
                "key": "05. Prasarana",
                "items": [
                    {
                        "id": "",
                        "text": "Ruang Kelas",
                        "icon": "fas fa-landmark fa-4x",
                        "badge": "",
                        "disabled": false,
                        "visible": true,
                        "target": "./master/AIOPdfPageContains/AIO_PdfPageContains.html",
                        "fileId": "https://drive.google.com/file/d/1yxctq5pVBquNr9t5aNrU8_2cyXNKCFZO/preview"
                    },
                    {
                        "id": "",
                        "text": "Perpustakaan",
                        "icon": "fas fa-landmark-dome fa-4x",
                        "badge": "",
                        "disabled": false,
                        "visible": true,
                        "target": "./master/AIOPdfPageContains/AIO_PdfPageContains.html",
                        "fileId": "https://drive.google.com/file/d/1z-dxL_zw4zoQU1yMfyTukhiQ2ANTwXOU/preview"
                        
                    },
                    {
                        "id": "",
                        "text": "Toilet",
                        "icon": "fas fa-toilet-portable fa-4x",
                        "badge": "",
                        "disabled": false,
                        "visible": true,
                        "target": "./master/AIOPdfPageContains/AIO_PdfPageContains.html",
                        "fileId": "https://drive.google.com/file/d/1z0GjeoFuAHFr5tcpS6XL0ATkhP3eThW8/preview"
                    },
                    {
                        "id": "",
                        "text": "Lab. Komputer",
                        "icon": "fas fa-house-laptop fa-4x",
                        "badge": "",
                        "disabled": false,
                        "visible": true,
                        "target": "./master/AIOPdfPageContains/AIO_PdfPageContains.html",
                        "fileId": "https://drive.google.com/file/d/1z3X_jSiOPcGaE3SiB08SLrm7Lvrs7aVN/preview"
                    },
                    {
                        "id": "",
                        "text": "Mushola",
                        "icon": "fas fa-mosque fa-4x",
                        "badge": "",
                        "disabled": false,
                        "visible": true,
                        "target": "./master/AIOPdfPageContains/AIO_PdfPageContains.html",
                        "fileId": "https://drive.google.com/file/d/1-tL3ggPLIH2WaA2LJHrYOko2S-_hNPUk/preview"
                    },
                    {
                        "id": "",
                        "text": "Sirkulasi",
                        "icon": "fas fa-archway fa-4x",
                        "badge": "",
                        "disabled": false,
                        "visible": true,
                        "target": "./master/AIOPdfPageContains/AIO_PdfPageContains.html",
                        "fileId": "https://drive.google.com/file/d/1yuwp4DSXuc4NdnuG845NGRUy7anZbM5G/preview"
                    },
                    {
                        "id": "",
                        "text": "Kantin",
                        "icon": "fas fa-store fa-4x",
                        "badge": "",
                        "disabled": false,
                        "visible": true,
                        "target": "./master/AIOPdfPageContains/AIO_PdfPageContains.html",
                        "fileId": "https://drive.google.com/file/d/1z7YwAfcGCJ1LTB0ZdXXCeM70dEuq0ENV/preview"
                    },
                    {
                        "id": "",
                        "text": "UKS",
                        "icon": "fas fa-house-chimney-medical fa-4x",
                        "badge": "",
                        "disabled": false,
                        "visible": true,
                        "target": "./master/AIOPdfPageContains/AIO_PdfPageContains.html",
                        "fileId": "https://drive.google.com/file/d/1zEpfjMhXiEZAsKlqT0jDeUh9YaImehEo/preview"
                    },
                    {
                        "id": "",
                        "text": "Aula",
                        "icon": "fas fa-building-user fa-4x",
                        "badge": "",
                        "disabled": false,
                        "visible": true,
                        "target": "./master/AIOPdfPageContains/AIO_PdfPageContains.html",
                        "fileId": "https://drive.google.com/file/d/1zHIgmGbawvWB_5HeL-ZRBCwULPnXOCwc/preview"
                    },
                    
                ]
            },
            {
                "key": "06. Program kegiatan",
                "items": [
                    {
                        "id": "",
                        "text": "Rencana Kerja Tahunan",
                        "icon": "fas fa-puzzle-piece fa-4x",
                        "badge": "",
                        "disabled": false,
                        "visible": true,
                        "target": "./master/AIOPdfPageContains/AIO_PdfPageContains.html",
                        "fileId": "https://drive.google.com/file/d/1tevtCQojfl_cBJkeh_iemr5j5r6inPrU/preview"
                    },
                    {
                        "id": "",
                        "text": "...",
                        "icon": "fas fa-puzzle-piece fa-4x",
                        "badge": "",
                        "disabled": false,
                        "visible": true,
                        "target": "./master/AIOPdfPageContains/AIO_PdfPageContains.html",
                        "fileId": "https://drive.google.com/file/d/1zZSutKzP5UhJ4b3A9K2H53zvp2VqKQ2g/preview"
                    },
                    {
                        "id": "",
                        "text": "...",
                        "icon": "fas fa-puzzle-piece fa-4x",
                        "badge": "",
                        "disabled": false,
                        "visible": true,
                        "target": "./master/AIOPdfPageContains/AIO_PdfPageContains.html",
                        "fileId": "https://drive.google.com/file/d/1zenaY66TjGv3cL-PqonRDd8Omnu5Oa94/preview"
                    },
                    {
                        "id": "",
                        "text": "...",
                        "icon": "fas fa-puzzle-piece fa-4x",
                        "badge": "",
                        "disabled": false,
                        "visible": true,
                        "target": "./master/AIOPdfPageContains/AIO_PdfPageContains.html",
                        "fileId": "https://drive.google.com/file/d/1zmSteCtEePZRn5nwLZbOtm9xHncVSkYR/preview"
                    },
                    {
                        "id": "",
                        "text": "...",
                        "icon": "fas fa-puzzle-piece fa-4x",
                        "badge": "",
                        "disabled": false,
                        "visible": true,
                        "target": "./master/AIOPdfPageContains/AIO_PdfPageContains.html",
                        "fileId": "https://drive.google.com/file/d/1znb_3OMEWUImN8SKx6UppzyRV6A68HER/preview"
                    },
                    {
                        "id": "",
                        "text": "...",
                        "icon": "fas fa-puzzle-piece fa-4x",
                        "badge": "",
                        "disabled": false,
                        "visible": true,
                        "target": "./master/AIOPdfPageContains/AIO_PdfPageContains.html",
                        "fileId": "https://drive.google.com/file/d/1znttx2bt3VZ3_sXhKulE9dJNBA3SAdic/preview"
                    },
                ]
            },
            {
                "key": "07. Ekstrakurikuler",
                "items": [
                    {
                        "id": "",
                        "text": "Pramuka",
                        "icon": "fab fa-atlassian fa-4x",
                        "badge": "",
                        "disabled": false,
                        "visible": true,
                        "target": "./master/AIOPdfPageContains/AIO_PdfPageContains.html",
                        "fileId": "https://drive.google.com/file/d/1xuZ-WY6TP9AH8TcZFFbz6_-ODLcE4iqh/preview"
                    },
                    {
                        "id": "",
                        "text": "Basket",
                        "icon": "fab fa-atlassian fa-4x",
                        "badge": "",
                        "disabled": false,
                        "visible": true,
                        "target": "./master/AIOPdfPageContains/AIO_PdfPageContains.html",
                        "fileId": "https://drive.google.com/file/d/1y5oLObuk8dIU1L8O7VsriJeLGd-M2eeC/preview"
                    },
                    {
                        "id": "",
                        "text": "Voli",
                        "icon": "fab fa-atlassian fa-4x",
                        "badge": "",
                        "disabled": false,
                        "visible": true,
                        "target": "./master/AIOPdfPageContains/AIO_PdfPageContains.html",
                        "fileId": "https://drive.google.com/file/d/1y7lM78jslFN_XgT-egiiD_qpMWTdER2D/preview"
                    },
                    {
                        "id": "",
                        "text": "Silat",
                        "icon": "fab fa-atlassian fa-4x",
                        "badge": "",
                        "disabled": false,
                        "visible": true,
                        "target": "./master/AIOPdfPageContains/AIO_PdfPageContains.html",
                        "fileId": "https://drive.google.com/file/d/1y9XdJZU1dI2m8Qd2ZVRegj0zMBeuQtkx/preview"
                    },
                    {
                        "id": "",
                        "text": "Karate",
                        "icon": "fab fa-atlassian fa-4x",
                        "badge": "",
                        "disabled": false,
                        "visible": true,
                        "target": "./master/AIOPdfPageContains/AIO_PdfPageContains.html",
                        "fileId": "https://drive.google.com/file/d/1yBmxQkCr2dpm1163KUxNI-U7EU4uBXC-/preview"
                    },
                    {
                        "id": "",
                        "text": "Taekwondo",
                        "icon": "fab fa-atlassian fa-4x",
                        "badge": "",
                        "disabled": false,
                        "visible": true,
                        "target": "./master/AIOPdfPageContains/AIO_PdfPageContains.html",
                        "fileId": "https://drive.google.com/file/d/1yLNaB5F3XQw6xWMAi4-yKu8rYgtu1e0Q/preview"
                    },
                    {
                        "id": "",
                        "text": "Tari",
                        "icon": "fab fa-atlassian fa-4x",
                        "badge": "",
                        "disabled": false,
                        "visible": true,
                        "target": "./master/AIOPdfPageContains/AIO_PdfPageContains.html",
                        "fileId": "https://drive.google.com/file/d/1yLetqAl7jR5O0cHtLQpP4v-DOZtVDlhU/preview"
                    },
                    {
                        "id": "",
                        "text": "Musik Islami",
                        "icon": "fab fa-atlassian fa-4x",
                        "badge": "",
                        "disabled": false,
                        "visible": true,
                        "target": "./master/AIOPdfPageContains/AIO_PdfPageContains.html",
                        "fileId": "https://drive.google.com/file/d/1yNfFAHtLIfkw38Q8ZBjnsXF8OAnzG0ig/preview"
                    },
                    {
                        "id": "",
                        "text": "Tahfidzul Qur'an",
                        "icon": "fab fa-atlassian fa-4x",
                        "badge": "",
                        "disabled": false,
                        "visible": true,
                        "target": "./master/AIOPdfPageContains/AIO_PdfPageContains.html",
                        "fileId": "https://drive.google.com/file/d/1yOypSgWIYL87sIr6DhdGqT98lHWQcbBL/preview"
                    },
                    {
                        "id": "",
                        "text": "Sains Matematika",
                        "icon": "fab fa-atlassian fa-4x",
                        "badge": "",
                        "disabled": false,
                        "visible": true,
                        "target": "./master/AIOPdfPageContains/AIO_PdfPageContains.html",
                        "fileId": "https://drive.google.com/file/d/1yXDwqUaYKth_AzmbxQNezXofLtenl-dO/preview"
                    },
                    {
                        "id": "",
                        "text": "Sains IPA",
                        "icon": "fab fa-atlassian fa-4x",
                        "badge": "",
                        "disabled": false,
                        "visible": true,
                        "target": "./master/AIOPdfPageContains/AIO_PdfPageContains.html",
                        "fileId": "https://drive.google.com/file/d/1xxU3TOHikap6tsMfFZVNUIfb-gAIAnhO/preview"
                    },
                    {
                        "id": "",
                        "text": "TIK",
                        "icon": "fab fa-atlassian fa-4x",
                        "badge": "",
                        "disabled": false,
                        "visible": true,
                        "target": "./master/AIOPdfPageContains/AIO_PdfPageContains.html",
                        "fileId": "https://drive.google.com/file/d/1-oNlPUl84JuapERQOH1q6XE8w3mWOT5C/preview"
                    },
                ]
            },
            {
                "key": "08. Prestasi",
                "items": [
                    {
                        "id": "",
                        "text": "2025",
                        "icon": "fas fa-medal fa-4x",
                        "badge": "",
                        "disabled": false,
                        "visible": true,
                        "target": "./master/AIOPdfPageContains/AIO_PdfPageContains.html",
                        "fileId": "https://drive.google.com/file/d/1-un-0ff_-drs6vwsJ0zawThmuJhNRIY1/preview"
                    },
                    {
                        "id": "",
                        "text": "2024",
                        "icon": "fas fa-medal fa-4x",
                        "badge": "",
                        "disabled": false,
                        "visible": true,
                        "target": "./master/AIOPdfPageContains/AIO_PdfPageContains.html",
                        "fileId": "https://drive.google.com/file/d/1yZDv6zZrtpzbMAfFWwxoh-C1ITvCEzrE/preview"
                    },
                    {
                        "id": "",
                        "text": "2023",
                        "icon": "fas fa-medal fa-4x",
                        "badge": "",
                        "disabled": false,
                        "visible": true,
                        "target": "./master/AIOPdfPageContains/AIO_PdfPageContains.html",
                        "fileId": "https://drive.google.com/file/d/1ycunzTtOdFfP1WZD_ktIMAFDlEduQrMo/preview"
                    },
                    {
                        "id": "",
                        "text": "2022",
                        "icon": "fas fa-medal fa-4x",
                        "badge": "",
                        "disabled": false,
                        "visible": true,
                        "target": "./master/AIOPdfPageContains/AIO_PdfPageContains.html",
                        "fileId": "https://drive.google.com/file/d/1yeRrNovyvE4cX5unGmhRakFVh7jw2Qjt/preview"
                    },
                    {
                        "id": "",
                        "text": "2021",
                        "icon": "fas fa-medal fa-4x",
                        "badge": "",
                        "disabled": false,
                        "visible": true,
                        "target": "./master/AIOPdfPageContains/AIO_PdfPageContains.html",
                        "fileId": "https://drive.google.com/file/d/1yfWEbwhVY9IxggZcm7cecAEycISV17OP/preview"
                    },
                    {
                        "id": "",
                        "text": "2020",
                        "icon": "fas fa-medal fa-4x",
                        "badge": "",
                        "disabled": false,
                        "visible": true,
                        "target": "./master/AIOPdfPageContains/AIO_PdfPageContains.html",
                        "fileId": "https://drive.google.com/file/d/1ykUWZz1q760p4svdwSRKoWB0xH6zmpkc/preview"
                    },
                    {
                        "id": "",
                        "text": "2019",
                        "icon": "fas fa-medal fa-4x",
                        "badge": "",
                        "disabled": false,
                        "visible": true,
                        "target": "./master/AIOPdfPageContains/AIO_PdfPageContains.html",
                        "fileId": "https://drive.google.com/file/d/1yXb_K7hIB23845zfcAVzZsOpbBZC5gOz/preview"
                    },
                ]
            },
        ],
        main: [
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
                        "visible": false,
                        "target": "./master/KepegawaianPutusanNonASN/Kepegawaian_PutusanNonASN.html"
                    },
                    {
                        "id": "03-03",
                        "text": "Putusan ASN",
                        "icon": "tags",
                        "badge": "",
                        "disabled": true,
                        "visible": false,
                        "target": "./master/KepegawaianPutusanASN/Kepegawaian_PutusanASN.html"
                    },
                    {
                        "id": "03-04",
                        "text": "Putusan Kepangkatan",
                        "icon": "tags",
                        "badge": "",
                        "disabled": true,
                        "visible": false,
                        "target": "./master/KepegawaianPutusanKepangkatan/Kepegawaian_PutusanKepangkatan.html"
                    },
                    {
                        "id": "03-05",
                        "text": "Putusan Gaji Berkala",
                        "icon": "tags",
                        "badge": "",
                        "disabled": true,
                        "visible": false,
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
                "dev": "DISDIKBUD",
                "detail": "Dinas Pendidikan dan Kebudayaan",
                "items": [
                    {
                        "product": "SI-IJOL",
                        "detail": "Manajemen Sistem Informasi Ijasah Online",
                        "icon": "tags",
                        "target": "https://siijol.probolinggokota.go.id"
                    },
                    {
                        "product": "SPMB",
                        "detail": "Sistem Penerimaan Murid Baru",
                        "icon": "tags",
                        "target": "https://spmb.probolinggokota.go.id"
                    }
                ]
            },
            {
                "id": 1,
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
                "id": 2,
                "dev": "BPPKAD",
                "detail": "Badan Pendapatan, Pengelolaan Keuangan dan Aset Daerah",
                "items": [
                    {
                        "product": "SIMRAL",
                        "detail": "Manajemen Sistem Informasi Perencanaan, Penganggaran dan Pelaporan",
                        "icon": "tags",
                        "target": "https://simral.probolinggokota.go.id/2021"
                    },
                    {
                        "product": "SIMPATDA",
                        "detail": "Manajemen Sistem Pendapatan Asli Daerah",
                        "icon": "tags",
                        "target": "http://esptpd.probolinggokota.go.id"
                    }
                ]
            },
            {
                "id": 3,
                "dev": "DISDUKCAPIL",
                "detail": "Dinas Kependudukan dan Pencatatan Sipil",
                "items": [
                    {
                        "product": "DUKCAPIL ONLINE",
                        "detail": "Layanan Administrasi Kependudukan dan Pencatatan Sipil",
                        "icon": "tags",
                        "target": "https://siak.probolinggokota.go.id"
                    }
                ]
            },
            {
                "id": 4,
                "dev": "KEMENDIKDASMEN",
                "detail": "Kementerian Pendidikan Dasar dan Menengah",
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
                        "target": "https://vervalpd.data.kemdikbud.go.id"
                    },
                    {
                        "product": "SIBI",
                        "detail": "Sistem Informasi perBukuan Indonesia",
                        "icon": "tags",
                        "target": "https://buku.kemdikbud.go.id/katalog/buku-kurikulum-merdeka"
                    },
                    {
                        "product": "NISN",
                        "detail": "Nomor Induk Siswa Nasional",
                        "icon": "tags",
                        "target": "https://nisn.data.kemdikbud.go.id"
                    },
                    {
                        "product": "PIP",
                        "detail": "Program Indoensia Pintar",
                        "icon": "tags",
                        "target": "https://pip.kemendikdasmen.go.id"
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
            },
            {
                "id": 7,
                "dev": "KEMENSOS",
                "detail": "Kementerian Sosial Republik Indonesia",
                "items": [
                    {
                        "product": "DTKS",
                        "detail": "Cek Bansos Data Terpadu Kementerian Sosial",
                        "icon": "tags",
                        "target": "https://cekbansos.kemensos.go.id/"
                    },
                ]
            },
        ],
        linkedBlanko: [
            {
                "id": 0,
                "dev": "Blanko",
                "detail": "Lembar Daftar",
                "items": [
                    {
                        "product": "Data Induk Peserta Didik",
                        "detail": "Kesiswaan-Data Induk Siswa",
                        "icon": "tags",
                        "target": "https://drive.google.com/file/d/19T4bRgzZJabeEiAu-b7uuZjJIiYXJnVj"
                    },
                    {
                        "product": "Classical Uniform",
                        "detail": "Kesiswaan-Daftar Anggota Rombel",
                        "icon": "tags",
                        "target": "https://drive.google.com/file/d/1xTdaY-_iRJYhLWx_VOe1R6jK_Yit3jhu"
                    },
                    {
                        "product": "Classical Daftar Hadir",
                        "detail": "Kesiswaan-Daftar Hadir Anggota Rombel",
                        "icon": "tags",
                        "target": "https://drive.google.com/file/d/1F8ytaoBkmI0LiAgvPWnLDVgUMEx-2rZ7"
                    },
                    {
                        "product": "Classical Daftar Hadir Wali Murid",
                        "detail": "Kesiswaan-Daftar Hadir Wali Murid",
                        "icon": "tags",
                        "target": "https://drive.google.com/file/d/1xdWDQSeaQAetCfetfvINOsfrIq-cYAEd"
                    },
                    {
                        "product": "20536207-Daftar Hadir",
                        "detail": "Format Daftar Hadir",
                        "icon": "tags",
                        "target": "https://drive.google.com/file/d/1IiV99TJ151qVADPqVlzdDINh6AoMXJu3"
                    },
                    {
                        "product": "20536207-Notulen",
                        "detail": "Format Notulen Rapat",
                        "icon": "tags",
                        "target": "https://drive.google.com/file/d/15f-YD4rxX2INEgJ4xjbuEGKtltOvZw7e"
                    },
                    {
                        "product": "Kartu Asesmen",
                        "detail": "Kartu Asesmen Pembelajaran",
                        "icon": "tags",
                        "target": "https://drive.google.com/file/d/1Jhm72QKo9XW-Dnaw8aQzTAbDpoFewsTE"
                    },
                    


                ]
            }
        ],
        linkedSatdik: [
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
                        "product": "Persuratan",
                        "detail": "Tata Naskah Kedinasan",
                        "icon": "tags",
                        "target": "https://drive.google.com/drive/folders/15iBnkJbKpcD5fxUsS_kaPKTOmQgXYi3p"
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
        ],
        banner: [
            {
                "ID": "1",
                "Title": "SD NEGERI TISNONEGARAN 1",
                "Keterangan": "Satuan Pendidikan Dasar",
                "Image": "https://drive.google.com/thumbnail?id=15nBcjVEzpRH_JVS1sLKNt8bp4RfIQyhH"
            },
            {
                "ID": "2",
                "Title": "PEMERINTAH KOTA PROBOLINGGO",
                "Keterangan": "Pemerintahan Daerah",
                "Image": "https://drive.google.com/thumbnail?id=15n_VLb_qRzeAcj4TnRueRa6uU1gqp5Fn"
            },
            {
                "ID": "3",
                "Title": "KEMENDIKBUDRISTEK",
                "Keterangan": "Kementerian Negara R.I",
                "Image": "https://drive.google.com/thumbnail?id=15pfdTRaIP8CsZOpyLGi7TV657b1qt0wu"
            },
            {
                "ID": "4",
                "Title": "SEKOLAH ADIWIYATA NASIONAL",
                "Keterangan": "Penganugerahan Satuan Pendidikan",
                "Image": "https://drive.google.com/thumbnail?id=16JdiFujRvKZDqiKM1VB3fGmDqSy4fd3V"
            },
            {
                "ID": "5",
                "Title": "SEKOLAH RAMAH ANAK",
                "Keterangan": "Penganugerahan Satuan Pendidikan",
                "Image": "https://drive.google.com/thumbnail?id=16ClqldgXdPKgBIf1xWGUSraA0MzHM_5v"
            },
            {
                "ID": "6",
                "Title": "",
                "Keterangan": "",
                "Image": "https://drive.google.com/thumbnail?id=15vSWJVH8go3cTSXAWT8J-ynYlQTo9Z3J"
            },
            {
                "ID": "7",
                "Title": "",
                "Keterangan": "",
                "Image": "https://drive.google.com/thumbnail?id=15sMxFv_z1z_rVksvbYBKiGj3IlLJ6I8m"
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

window.onload = () => {
    window.jsPDF = window.jspdf.jsPDF;
    onInitClient();
};

//=======================================================
$(document).ready(function () {

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
                                if (_main.account.user.cred != null && _main.account.user.userstate != "Peserta Didik") {
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
                            type: "normal", //normal|default|danger|success
                            hoverStateEnabled: false,
                            focusStateEnabled: false,
                            activeStateEnabled: true,
                            disabled: false,
                            visible: true,
                            onClick(e) {
                                //=====================================================
                                _element.ActionSheet.option("dataSource",
                                    [
                                        {
                                            text: "Kebijakan dan Ketentuan",
                                            icon: "fas fa-user-shield",
                                            visible: _main.account.user.cred == null ? true : false,
                                            // disabled: _main.account.user.cred == null ? true : false,
                                        },
                                        {
                                            visible: _main.account.user.cred == null ? true : false,
                                            template: `<hr class="separator"></hr>`
                                        },
                                        {
                                            text: _main.account.user.cred == null ? "Login" : "Logout",
                                            icon: "fas fa-circle-user",
                                        },
                                        {
                                            text: "Info Personal",
                                            icon: "fas fa-id-card",
                                            visible: _main.account.user.cred == null ? false : true,
                                            // disabled: _main.account.user.cred == null ? true : false,
                                        },
                                        {
                                            visible: _main.account.user.cred == null ? true : false,
                                            template: `<p></p>`
                                        },
                                        {
                                            visible: _main.account.user.cred == null ? true : false,
                                            template: function () {
                                                return `<div id="google_btn"></div>`;
                                            },
                                        },
                                        {
                                            visible: _main.account.user.cred == null ? ($(window).width() < 680 ? true : false) : false,
                                            template: `<p></p>`
                                        },
                                    ]
                                );

                                _element.ActionSheet.option("onItemClick", value => {

                                    switch (value.itemIndex) {
                                        case 0:
                                            _element.PageToolbar.option("items[1].text", "Kebijakan dan Ketentuan");
                                            _element.PageToolbar.option("items[2].visible", false);

                                            $("#PageContains").empty();
                                            _main.arrVarGlobal._actPageContains = "/privacyandterms/privacyandterms.html";
                                            $("#PageContains").load(_main.arrVarGlobal._actPageContains);
                                            // window.open("https://www.privacypolicyonline.com/live.php?token=QqfzxjmlFgOsdMrTvIaSc6ibbvak1vo1", '_blank');
                                            break;

                                        case 2:
                                            if (_main.account.user.cred == null) {
                                                google.accounts.id.prompt();
                                            } else {
                                                location.reload(true);
                                            };
                                            break;

                                        case 3:
                                            // console.log("hore");
                                            _element.PageToolbar.option("items[1].text", "e-Platform Authentication");
                                            _element.PageToolbar.option("items[2].visible", false);

                                            $("#PageContains").empty();
                                            _main.arrVarGlobal._actPageContains = "/master/User/User_MainPage.html";
                                            $("#PageContains").load(_main.arrVarGlobal._actPageContains);
                                            break;

                                        default:
                                            break;
                                    }

                                });

                                _element.ActionSheet.option("target", e.element);
                                _element.ActionSheet.option("visible", true);
                                google.accounts.id.renderButton(document.getElementById("google_btn"),
                                    {
                                        type: "standard",
                                        text: "signin_with",
                                        shape: "square",
                                        theme: "outline",
                                        size: "medium",
                                        logo_alignment: "left"
                                    }
                                );
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
            $("#ShowMessage").dxToast({
                displayTime: 5000,
            }).dxToast("instance"),

        //Toast info =================================================
        Popup:
            $("#ShowMessage").dxPopup({
                height: "auto",
                showCloseButton: false,
                hideOnOutsideClick: true,
                hideOnParentScroll: true,
                visible: false,
                width: "auto",//$(window).width() < 680 ? "90%" : "25%",
                onHidden: () => {
                    location.reload(true);
                },
            }).dxPopup("instance"),

        //ActionSheet =================================================
        ActionSheet:
            $("#ActionSheet").dxActionSheet({
                dataSource: undefined,
                title: null,
                showTitle: false,
                showCancelButton: true,
                visible: false,
                usePopover: $(window).width() < 680 ? false : true,
                onItemClick: undefined,
                width: "auto",
            }).dxActionSheet("instance"),
    };

    //==============================================================================
    _PageSidebar(_main.navigator.main);
    _main.arrVarGlobal._actPageContains = "/master/Homepage/Homepage_Home.html";
    $("#PageContains").empty();
    $("#PageContains").load(_main.arrVarGlobal._actPageContains);
    $(window).resize(function () {
        _element.LayoutContains.option("openedStateMode", $(window).width() < 960 ? "overlap" : "shrink");
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

//=== CLIENT AUTHENTICATION ======================================================================
function onInitClient() {
    // gapi.load('client', async function () {
    //     gapi.client.init({
    //         apiKey: _main.appConfig.gapi.apiKey,
    //         discoveryDocs: _main.appConfig.gapi.discoveryDocs,
    //     });
    // });
    // google.accounts.oauth2.initTokenClient({
    //     client_id: _main.appConfig.gapi.clientId,
    //     scope: _main.appConfig.gapi.scope,
    //     callback: 'onSignIn',
    // }).requestAccessToken({ prompt: 'consent' });

    google.accounts.id.initialize(
        {
            client_id: _main.appConfig.gapi.clientId,
            callback: onSignIn,
            cancel_on_tap_outside: true,
            context: "signin",
            itp_support: true,
            use_fedcm_for_prompt: true,
            // prompt_parent_id: "google_btn",
            // auto_select: false,
            // login_uri: "https://www.sdntisnonegaran1probolinggo.sch.id/login",
            // native_callback: (moment)=>{console.log(moment)}, //"nativeGSI"
            // auto_prompt: false,
            // nonce: "ePlatform20536207",
            // state_cookie_domain:"_*.domain",
            ux_mode: "popup",//,redirect
            // allowed_parent_origin: "https://www.sdntisnonegaran1probolinggo.sch.id",
            // intermediate_iframe_close_callback: (moment)=>{console.log(moment)}, //"logBeforeClose",
            // login_hint:"",
            // hd: "*",
            scope: _main.appConfig.gapi.scope,
        }
    );
    google.accounts.id.prompt();
}

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

        if (_main.account.user.cred != null && _main.account.user.userstate != null) {

            _element.PageToolbar.option("items[1].text", "e-Platform Authentication ");
            _element.PageToolbar.option("items[2].visible", false);

            $("#PageContains").empty();
            _main.arrVarGlobal._actPageContains = "/master/User/User_MainPage.html";
            $("#PageContains").load(_main.arrVarGlobal._actPageContains);
        }
        else {
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
    delete(getQuery);
    delete(responsePayload);
    // getQuery = null;
    // responsePayload= null;

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

        delete(data);
        delete(_field);
        delete(_value);
        delete(_arrCol);
        delete(_arrRow);

        // data = null;
        // _field = null;
        // _value = null;
        // _arrCol = null;
        // _arrRow = null;

        return;
    } else {
        _notify('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
        return;
    };

}

function addPageButton(itemElement, itemData, itemDataCaption, actPageContains, ParentPageContains, pdfFileContains, iconobj) {

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
                    <div class= "itemPageButton" >
                        <div class="itemPageButtonIcon"><i class="${iconobj}"></i></div>
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

function printPages(elemenOfPage) {
    var dataUrl = elemenOfPage.toDataURL(); //attempt to save base64 string to server using this var  
    var windowContent = '<!DOCTYPE html>';
    windowContent += '<html>'
    windowContent += '<head><title>Print canvas</title></head>';
    windowContent += '<body>';
    windowContent += '<img src="' + dataUrl + '">';
    windowContent += '</body>';
    windowContent += '</html>';
    var printWin = window.open('', '', 'width=auto,height=auto');
    printWin.document.open();
    printWin.document.write(windowContent);
    printWin.document.close();
    printWin.focus();
    printWin.print();
    printWin.close();
}

function onXMLHttpRequest() {
    var xhr = new XMLHttpRequest();

    xhr.open('GET',
        'https://www.googleapis.com/drive/v3/about?fields=user&' +
        'access_token=' + params['access_token']);
    xhr.onreadystatechange = function (e) {
        console.log(xhr.response);
    };
    xhr.send(null);
}

async function searchFile() {
    const { GoogleAuth } = require('google-auth-library');
    const { google } = require('googleapis');

    // Get credentials and build service
    // TODO (developer) - Use appropriate auth mechanism for your app
    const auth = new GoogleAuth({
        scopes: 'https://www.googleapis.com/auth/drive',
    });
    const service = google.drive({ version: 'v3', auth });
    const files = [];
    try {
        const res = await service.files.list({
            q: 'mimeType=\'image/jpeg\'',
            fields: 'nextPageToken, files(id, name)',
            spaces: 'drive',
        });
        Array.prototype.push.apply(files, res.files);
        res.data.files.forEach(function (file) {
            console.log('Found file:', file.name, file.id);
        });
        return res.data.files;
    } catch (err) {
        // TODO(developer) - Handle error
        throw err;
    }
}