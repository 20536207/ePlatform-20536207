window.jsPDF = window.jspdf.jsPDF;

$(() => {

  const navigation = [
    {
      key: 'Dashboard',
      items: [
        { id: 01 - 01, text: 'Profil Sekolah', icon: 'tags', badge: 'new', disabled: false, visible: true },
        { id: 01 - 02, text: 'Peserta Didik', icon: 'tags', badge: 'new', disabled: false, visible: true },
        { id: 01 - 03, text: 'Pegawai', icon: 'tags', badge: 'new', disabled: false, visible: true },
        { id: 01 - 04, text: 'Sarana Prasarana', icon: 'tags', badge: 'new', disabled: false, visible: true },
        { id: 01 - 05, text: 'Anggaran', icon: 'tags', badge: 'new', disabled: false, visible: true },
      ]
    },
    {
      key: 'Informasi Kesiswaan',
      items: [
        { id: 02 - 01, text: 'Data Induk Peserta Didik', icon: 'tags', badge: 'new', disabled: false, visible: true },
        { id: 02 - 02, text: 'Rombongan Belajar', icon: 'tags', badge: 'new', disabled: false, visible: true },
        { id: 02 - 03, text: 'Penghargaan/ Prestasi', icon: 'tags', badge: 'new', disabled: false, visible: true },
      ]
    },
    {
      key: 'Informasi Kepegawaian',
      items: [
        { id: 01 - 01, text: 'Data Induk Pegawai', icon: 'tags', badge: 'new', disabled: false, visible: true },
        { id: 01 - 02, text: 'Putusan Non-ASN', icon: 'tags', badge: 'new', disabled: false, visible: true },
        { id: 01 - 03, text: 'Putusan ASN', icon: 'tags', badge: 'new', disabled: false, visible: true },
        { id: 01 - 04, text: 'Putusan Kepangkatan', icon: 'tags', badge: 'new', disabled: false, visible: true },
        { id: 01 - 05, text: 'Putusan Gaji Berkala', icon: 'tags', badge: 'new', disabled: false, visible: true },
      ]
    },
    {
      key: 'Informasi Sarana Prasarana',
      items: [
        { id: 01 - 01, text: 'Data Induk Pegawai', icon: 'tags', badge: 'new', disabled: false, visible: true },
        { id: 01 - 02, text: 'Putusan Non-ASN', icon: 'tags', badge: 'new', disabled: false, visible: true },
        { id: 01 - 03, text: 'Putusan ASN', icon: 'tags', badge: 'new', disabled: false, visible: true },
        { id: 01 - 04, text: 'Putusan Kepangkatan', icon: 'tags', badge: 'new', disabled: false, visible: true },
        { id: 01 - 05, text: 'Putusan Gaji Berkala', icon: 'tags', badge: 'new', disabled: false, visible: true },
      ]
    },
  ];

  //========================================================================================================
  // const drawer = $('#Main-Contenta').dxDrawer({
  //   opened: true,
  //   revealMode: "slide", //expand
  //   openedStateMode: "shrink", //shrink //overlap
  //   position: 'left', //right
  //   closeOnOutsideClick: false,
  //   template() {
  //     const list = $('<div>')
  //       .addClass('content-sidebar');

  //     return list.dxList({
  //       dataSource: navigation,
  //       hoverStateEnabled: true,
  //       focusStateEnabled: true,
  //       activeStateEnabled: false,
  //       grouped: true,
  //       collapsibleGroups: true,
  //       groupTemplate(data) {
  //         return $(`<div style="color: orange">${data.key}</div>`);
  //       },
  //       width: 250,
  //     });
  //   },
  // }).dxDrawer('instance');

  // $('#Content-Toolbar').dxToolbar({
  //   items: [{
  //     widget: 'dxButton',
  //     location: 'before',
  //     options: {
  //       icon: 'menu',
  //       onClick() {
  //         drawer.toggle();
  //       },
  //     },
  //   }],
  // });
  
});

  