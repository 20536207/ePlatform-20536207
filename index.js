window.jsPDF = window.jspdf.jsPDF;

$(function () {

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
    contentTemplate: function () {
      return $("<div id='Gallerian' />").dxGallery({
        dataSource: [
          'images/001.jpg',
          'images/002.jpg',
          'images/003.jpg',
        ],
        loop: true,
        slideshowDelay: 2000,
        showNavButtons: false,
        showIndicator: false,
      })
        .dxScrollView({
          height: "100%",
          width: "100%"
        });
    },
    hideOnOutsideClick: true,
    hideOnParentScroll: true,
    showTitle: true,
    title: "Information",
    resizeEnabled: false,
    dragEnabled: false,
    position: { my: 'center', at: 'center', collision: 'fit' },
    width: 325,
    height: 265,
    visible: false,
  }).dxPopup("instance");

  //========================================================================================================
  $('#DevApp').dxToolbar({
    elementAttr: {
      id: "IdDevApp",
      class: "DevApp"
    },
    items: [{
      widget: 'dxButton',
      location: 'before',
      locateInMenu: 'never',
      cssClass: 'DevApp-Menu',
      options: {
        text: 'e-Platform',
        icon: 'menu',
        focusStateEnabled: false,
        activeStateEnabled: true,
        type: 'normal',
        stylingMode: "text",
        onClick() {
          _MainLayout.toggle();
        },
      },
    }, {
      location: 'before',
      locateInMenu: 'auto',
      text: 'SD NEGERI TISNONEGARAN 1 PROBOLINGGO',
      template(e) {
        return $("<div class='DevApp-Customer'>" + e.text + "</div>");
      },
    }, {
      widget: 'dxButton',
      location: 'after',
      locateInMenu: 'auto',
      options: {
        text: null,
        icon: 'user',
        focusStateEnabled: false,
        activeStateEnabled: true,
        type: 'default',
        stylingMode: "text",
        onClick: () => {
          // _popup.hide();
          // _popup.option('disabled', _popup.option('disabled') === true ? true : true);
          // _popup.option('visible', _popup.option('visible') === true ? false : true);
          _popup.show();
        },
      },
    }],
  });

  //========================================================================================================
  //$("#view").load("./pages/DashboardPesertaDidik.html");

  const _MainPageToolbar = $('#MainPageToolbar').dxToolbar({
    elementAttr: {
      id: "IdMainPage",
      class: "MainPageToolbar"
    },
    items: [{
      location: 'before',
      text: '',
      template(e) {
        return $("<div class='Page-Title'>" + e.text + "</div>");
      },
    }],
  }).dxToolbar('instance');

  
  //===============================================================================
  const _MainLayout = $('#MainLayout').dxDrawer({
    opened: true,
    revealMode: "slide", //expand
    openedStateMode: "shrink", //shrink //overlap
    position: 'left', //right
    shading: false,
    closeOnOutsideClick: false,
    template() {
      const _ListWidget = $('<div>').addClass('MainSidebar');

        return _ListWidget
        .dxList({
          dataSource: navigation,
          hoverStateEnabled: true,
          focusStateEnabled: true,
          activeStateEnabled: false,
          grouped: true,
          collapsibleGroups: true,
          showSelectionControls: false,
          groupTemplate(data) {
            return $(`<div style="color: goldenrod">${data.key}</div>`);
          },
          width: 250,
          selectionMode: "single",
          onItemClick(e) {
            // const _PageLoad = "./pages/"+e.itemData['filepath']+'.html';
            //_MainPageToolbar.itemElement.index(0).option('text', e.itemData['text']);
            DevExpress.ui.notify(_MainPageToolbar.menuItem[1]);
            //$("#view").load("./pages/"+e.itemData['filepath']+'.html');
          },
        }).addClass('MainSidebar');

      return list;
    },
  }).dxDrawer('instance');

});

