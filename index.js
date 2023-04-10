window.jsPDF = window.jspdf.jsPDF;

$(() => {

  const navigation = [
    {
      key: 'Dashboard',
      items: [
        { id: 01 - 01, text: 'Profil Sekolah', icon: 'tags', badge: 'new', disabled: false, visible: true, filepath: "DashboardProfilSekolah" },
        { id: 01 - 02, text: 'Peserta Didik', icon: 'tags', badge: 'new', disabled: false, visible: true, filepath: "DashboardPesertaDidik" },
        { id: 01 - 03, text: 'Pegawai', icon: 'tags', badge: 'new', disabled: false, visible: true, filepath: "DashboardPegawai" },
        { id: 01 - 04, text: 'Sarana Prasarana', icon: 'tags', badge: 'new', disabled: false, visible: true, filepath: "DashboardSaranaPrasarana" },
        { id: 01 - 05, text: 'Anggaran', icon: 'tags', badge: 'new', disabled: false, visible: true, filepath: "DashboardAnggaran" },
      ]
    },
    {
      key: 'Informasi Kesiswaan',
      items: [
        { id: 02 - 01, text: 'Data Induk Peserta Didik', icon: 'tags', badge: 'new', disabled: false, visible: true, filepath: "DashboardProfilSekolah" },
        { id: 02 - 02, text: 'Rombongan Belajar', icon: 'tags', badge: 'new', disabled: false, visible: true, filepath: "DashboardProfilSekolah" },
        { id: 02 - 03, text: 'Data Prestasi', icon: 'tags', badge: 'new', disabled: false, visible: true, filepath: "DashboardProfilSekolah" },
      ]
    },
    {
      key: 'Informasi Kepegawaian',
      items: [
        { id: 01 - 01, text: 'Data Induk Pegawai', icon: 'tags', badge: 'new', disabled: false, visible: true, filepath: "DashboardProfilSekolah" },
        { id: 01 - 02, text: 'Putusan Non-ASN', icon: 'tags', badge: 'new', disabled: false, visible: true, filepath: "DashboardProfilSekolah" },
        { id: 01 - 03, text: 'Putusan ASN', icon: 'tags', badge: 'new', disabled: false, visible: true, filepath: "DashboardProfilSekolah" },
        { id: 01 - 04, text: 'Putusan Kepangkatan', icon: 'tags', badge: 'new', disabled: false, visible: true, filepath: "DashboardProfilSekolah" },
        { id: 01 - 05, text: 'Putusan Gaji Berkala', icon: 'tags', badge: 'new', disabled: false, visible: true, filepath: "DashboardProfilSekolah" },
      ]
    },
    {
      key: 'Informasi Sarana Prasarana',
      items: [
        { id: 01 - 01, text: 'Data Induk Pegawai', icon: 'tags', badge: 'new', disabled: false, visible: true, filepath: "DashboardProfilSekolah" },
        { id: 01 - 02, text: 'Putusan Non-ASN', icon: 'tags', badge: 'new', disabled: false, visible: true, filepath: "DashboardProfilSekolah" },
        { id: 01 - 03, text: 'Putusan ASN', icon: 'tags', badge: 'new', disabled: false, visible: true, filepath: "DashboardProfilSekolah" },
        { id: 01 - 04, text: 'Putusan Kepangkatan', icon: 'tags', badge: 'new', disabled: false, visible: true, filepath: "DashboardProfilSekolah" },
        { id: 01 - 05, text: 'Putusan Gaji Berkala', icon: 'tags', badge: 'new', disabled: false, visible: true, filepath: "DashboardProfilSekolah" },
      ]
    },
  ];

  const _popup = $("#popup").dxPopup({
    contentTemplate: () => {
      return $("<div id='gallery' />").dxGallery({
        dataSource: [
          'images/ePlatform.png',
          'images/TutWuriHandayani.png',
          'images/PemkotProbolinggo.png',
          'images/LOGO20536207.png',
          'images/AWARD.png',
          'images/adiwiyata.png',
          'images/SRA.png',
        ],
        loop: true,
        slideshowDelay: 2000,
        showNavButtons: false,
        showIndicator: false,
      }).dxScrollView({
        height: "100%",
        width: "100%"
      });
    },
    hideOnOutsideClick: true,
    showTitle: true,
    title: "Information",
    resizeEnabled: false,
    dragEnabled: false,
    position: "center",
    width: undefined,
    height: undefined,
  }).dxPopup("instance");


  //========================================================================================================
  $("#view").load("./pages/DashboardPesertaDidik.html");

  $('#MainToolbar').dxToolbar({
    items: [{
      widget: 'dxButton',
      location: 'before',
      options: {
        text: "e-PLATFORM",
        icon: 'menu',
        focusStateEnabled: false,
        activeStateEnabled: true,
        type: 'default',
        onClick() {
          _MainLayout.toggle();
        },
      },
    }, {
      location: 'before',
      text: "SD NEGERI TISNONEGARAN 1 PROBOLINGGO ( 20536207 )",
    }, {
      widget: 'dxButton',
      location: 'after',
      options: {
        text: null,
        icon: 'user',
        focusStateEnabled: false,
        activeStateEnabled: true,
        type: 'success',
        onClick() {
          _popup.show();
        },
      },
    }],
  });

  const _MainLayout = $('#MainLayout').dxDrawer({
    opened: true,
    revealMode: "slide", //expand
    openedStateMode: "shrink", //shrink //overlap
    position: 'left', //right
    closeOnOutsideClick: false,
    template() {
      const list = $('<div>')
        .addClass('MainSidebar');

      return list.dxList({
        dataSource: navigation,
        hoverStateEnabled: true,
        focusStateEnabled: true,
        activeStateEnabled: false,
        grouped: true,
        collapsibleGroups: true,
        groupTemplate(data) {
          return $(`<div style="color: orange">${data.key}</div>`);
        },
        width: 250,
        selectionMode: "single",
        onSelectionChanged: function (e) {
          $("#view").load("./pages/" + e.addedItems[0].filepath + ".html");
          drawer.hide();
        }
      });
    },
  }).dxDrawer('instance');

});

