window.jsPDF = window.jspdf.jsPDF;

$(document).ready(function () {
  //$("#PageContains").load("./pages/DashboardPesertaDidik.html");

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

  const _popup = function () {
    $("<div>").dxPopup({
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
  };

  //==============================================================================
  const _LayoutHeader = $('#LayoutHeader').dxToolbar({
    items: [{
      widget: 'dxButton',
      location: 'before',
      locateInMenu: 'never',
      cssClass: 'DevApp-Menu',
      options: {
        text: 'e-Platform',
        icon: 'menu',
        hoverStateEnabled: true,
        focusStateEnabled: true,
        activeStateEnabled: true,
        type: 'normal',
        stylingMode: "text",
        height: undefined,
        width: undefined,
        onClick() {
          _LayoutContains.toggle();
        },
      },
    }, {
      location: 'before',
      locateInMenu: 'never',
      text: 'SD NEGERI TISNONEGARAN 1 PROBOLINGGO',
      template(e) {
        return $("<div class='DevApp-Customer'>" + e.text + "</div>");
      },
    }],
  }).dxToolbar("instance");

  //===============================================================================
  const _LayoutContains = $('#LayoutContent').dxDrawer({
    opened: false,
    revealMode: "slide", //expand
    openedStateMode: "shrink", //shrink //overlap
    position: 'left', //right
    shading: false,
    closeOnOutsideClick: false,
    template() {
      const _ListWidget = $('<div>').addClass('ContainsSidebar');

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
            return $(`<b style="color: rgba(28, 168, 221, 1)">${data.key}</b>`);
          },
          width: 265,
          selectionMode: "single",
          onItemClick(e) {
            $("#PageContains")
              .empty()
              .load("./pages/" + e.itemData["filepath"] + ".html");
            _LayoutContains.toggle();

            //_MainPageToolbar.itemElement.index(0).option('text', e.itemData['text']);
            //DevExpress.ui.notify(_DashboardPesertaDidik.option('columnHidingEnabled'));
            //$('#view').prepend(_DashboardPesertaDidik);
            //$("#view").load(_PageLoad);
          },
        }).addClass('ContainsSidebar');


      // list.collapsed;
      // return _ListWidget;
    },
  }).dxDrawer('instance');

  const _PageToolbar = $('#PageToolbar').dxToolbar({
    items: [{
      location: 'before',
      text: '',
      template(e) {
        return $("<div class='Page-Title'>" + e.text + "</div>");
      },
    }, {
      widget: 'dxSelectBox',
      valueExpr: this,
      location: 'after',
      locateInMenu: 'auto',
      options: {
        width: '250px',
      }

    }],
  }).dxToolbar('instance');

  const _PageContains = $('#PageContains').dxScrollView({
    direction: 'both',
    scrollByContent: true,
    scrollByThumb: false,
    showScrollbar: 'onHover',
    usenative: false,
    width: '100%',
    height: '100%',
  }).dxScrollView('instance');

  //========================================================================================================
  const _LayoutFooter = $('#LayoutFooter').dxTabs({
    dataSource: [
      {
        id: 0,
        text: 'About',
        icon: 'info',
        content: 'User tab content',
      },
      {
        id: 1,
        text: 'Home',
        icon: 'comment',
        content: 'Comment tab content',
      },
      {
        id: 2,
        text: 'Referensi',
        icon: 'bookmark',
        content: 'Find tab content',
      },
    ],
    hoverStateEnabled: false,
    focusStateEnabled: false,
    activeStateEnabled: false,
    onItemClick(e) {
      alert(e.itemData.text);
    },
  }).dxTabs('instance');
});

