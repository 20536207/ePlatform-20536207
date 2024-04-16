_element.PageToolbar.option("items[1].text", "e-Platform Authentication");
_element.PageToolbar.option("items[2].visible", false);
_main.arrVarGlobal._ParentPageContains = "/master/Homepage/Homepage_Home.html";

$(document).ready(function () {
  $("#UserPagesContains").dxResponsiveBox({
    rows: [
      { ratio: 0, screen: 'sm lg' }, //01
      { ratio: 1, screen: 'sm lg' }, //02
    ],
    cols: [
      { ratio: 1 },
      { ratio: 5, screen: 'lg' },
    ],
    singleColumnScreen: 'sm',
    screenByWidth(width) {
      return width < 960 ? 'sm' : 'lg';
    },
  }).dxResponsiveBox("instance");

  _Authentication = {
    Authorized: [
      {
        itemType: 'group',
        colSpan: 2,
        items: [
          {
            template: `
          <div id=UserPict style="text-align: center">
            <img src=${_main.account.user.photo} style="display:inline-flex;object-fit:scale-down;width:106px;height:106px;"></img>
          </div>`
          },
        ],
      },
      {
        itemType: 'group',
        caption: 'User Info',
        items: ['nama', 'organisasi', 'keterangan', "id"]
      },
      {
        itemType: 'group',
        caption: 'Account Info',
        items: ['email', 'sub']
      },
    ],
    CurrentUser: () => {
      var _orgUser = null;

      switch (_main.account.user.organisasi) {
        case "Peserta Didik":
          _orgUser = [
            {
              tabs: "Data Diri",
            },
            {
              tabs: "Catatan Kependudukan",
            },
            {
              tabs: "Keterangan Tempat Tinggal",
            },
            {
              tabs: "Keterangan Ayah Kandung",
            },
            {
              tabs: "Keterangan Ibu Kandung",
            },
            {
              tabs: "Keterangan Wali",
            },
            {
              tabs: "Keterangan Data Dinamis",
            },
            {
              tabs: "Jaminan Sosial Pendidikan",
            },
            {
              tabs: "Penerimaan Peserta Didik",
            },
            {
              tabs: "Pendidikan Sebelumnya",
            },
            {
              tabs: "Satuan Pendidikan Pindahan",
            },
          ];
          break;
        case "Pendidik":
          _orgUser = [
            {
              tabs: "Instrumen Data",
              dataSource: "",
            },
            {
              tabs: "Catatan Sipil",
              dataSource: "",
            },
            {
              tabs: "Catatan Kependudukan",
              dataSource: "",
            },
            {
              tabs: "Keterangan Tempat Tinggal",
              dataSource: "",
            },
            {
              tabs: "Penugasan Pegawai",
              dataSource: "",
            },
            {
              tabs: "Penugasan Pegawai",
              dataSource: "",
            },
            {
              tabs: "Penugasan Pegawai",
              dataSource: "",
            },
            {
              tabs: "Penugasan Pegawai",
              dataSource: "",
            },
            {
              tabs: "Penugasan Pegawai",
              dataSource: "",
            },
            {
              tabs: "Penugasan Pegawai",
              dataSource: "",
            },
            {
              tabs: "Penugasan Pegawai",
              dataSource: "",
            },
            {
              tabs: "Penugasan Pegawai",
              dataSource: "",
            },
          ];
          break;
        case "Kependidikan":
          _orgUser = [
            {

            },
          ];
          break;
        default: break;
      };
      return _orgUser;
    },
  };

  // ===============================================================================================
  addPageForm(
    "#UserAuthentication",
    _main.account.user,
    _Authentication.Authorized
  );

  _Authentication.CurrentUser().forEach(function (itemData) {

    addPageButton(
      "#UserPage", //itemElement,
      itemData.tabs,  //itemBDataCaption,
      "/master/AIOFormPageContains.html",    //actPageContains,
      "/master/User/User_MainPage.html", //ParentPageContains
      "" //pdfFileContains
    );

  })

  // ===============================================================================================
  $("#UserMainPage").dxScrollView({
    scrollByContent: true,
    scrollByThumb: true,
    useNative: false,
    showScrollbar: 'onHover',
  });

});