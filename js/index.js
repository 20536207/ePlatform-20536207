
/*===================================================================================*/
// function GoEncrypt(_Contains, _Key) {
//   return CryptoJS.TripleDES.encrypt(_Contains.toString(), _Key).toString();
// }

/*===================================================================================*/
// function GoDecrypt(_Contains, _Key) {
//   return CryptoJS.TripleDES.decrypt(_Contains, _Key).toString(CryptoJS.enc.Utf8);
// }

$(document).ready(function () {
  window.jsPDF = window.jspdf.jsPDF;
  //==============================================================================
  _toolbarSeparator = {
    locateInMenu: 'never',
    location: 'before',
    template(itemData, itemIndex, element) {
      $('<div>')
        .addClass('toolbar-separator')
        .appendTo(element);
    },
    // menuItemTemplate(itemData, itemIndex, element) {
    //   $('<div>')
    //     .addClass('toolbar-menu-separator')
    //     .appendTo(element);
    // },
  };

  //==============================================================================
  _LayoutHeader = $('#LayoutHeader').dxToolbar({
    height: '62px',
    items: [
      {
        widget: 'dxButton',
        location: 'before',
        locateInMenu: 'never',
        cssClass: undefined,
        text: null,
        options: {
          //disabled: true,
          text: null,
          icon: undefined,
          template: '<div style="padding: 5px 5px 0 5px" class="fab fa-windows fa-xl"><span class="DevApp-Menu"> e-Platform AIO<br>ver. 20536207.1</div>',
          hoverStateEnabled: true,
          focusStateEnabled: false,
          activeStateEnabled: true,
          selectionMode: 'none',
          type: 'normal',
          stylingMode: "text",
          height: undefined,
          width: undefined,
          onClick: () => {
            _LayoutContains.toggle();
          },
        }
      }, {
        widget: 'dxButton',
        location: 'after',
        locateInMenu: 'never',
        cssClass: undefined,
        text: null,
        options: {
          disabled: false,
          text: null,
          icon: null,
          template: '<div style="padding: 1px 15px 0 15px" class="fas fa-circle-user fa-3x"></div>',
          hoverStateEnabled: true,
          focusStateEnabled: false,
          activeStateEnabled: false,
          selectionMode: 'none',
          type: 'danger',
          stylingMode: "text",
          height: undefined,
          width: undefined,
          onClick() {
            _PageToolbar.option("items[1].text", "e-Platform Account"),
              $("#PageContains").empty();
            $("#PageContains").load("./pages/UserManage/UserMainPage.html");

          },
        }
      }
    ]
  }).dxToolbar("instance");

  //===============================================================================
  _LayoutContains = $('#LayoutContent').dxDrawer({
    opened: false,
    animationEnabled: false,
    revealMode: "slide", //"slide | expand"
    openedStateMode: $(window).width() < 980 ? "overlap" : "shrink", //shrink //overlap
    position: 'left', //right
    shading: $(window).width() < 600 ? true : false,
    closeOnOutsideClick: true,
    template() {
      const _ListWidget = $("<div>");
      return _ListWidget
        .dxList({
          keyExpr: "key",
          dataSource: "./data/NavMain.json",
          // items: _itemNavMain,
          hoverStateEnabled: false,
          focusStateEnabled: true,
          activeStateEnabled: true,
          grouped: true,
          collapsible: false,
          collapsibleGroups: true,
          showSelectionControls: false,
          scrollByContent: true,
          scrollByThumb: true,
          useNativeScrolling: false,
          groupTemplate(data) {
            return $(`<b style="color: rgba(28, 168, 221, 1)">${data.key}</b>`);
          },
          width: 265,
          selectionMode: "single",
          onItemClick(e) {

            _PageToolbar.option("items[1].text", e.itemData.text);
            _PageToolbar.option("items[0].options.icon", 'fas fa-home');
            _PageToolbar.option("items[0].visible", true);

            _LayoutContains.toggle();

            $("#PageContains").empty();
            $("#PageContains").load(e.itemData["target"]);


          },
        }).addClass('ContainsSidebar');
    },
  }).dxDrawer('instance');

  //===============================================================================
  _ActionSheet = $('#ActionSheet').dxActionSheet({
    dataSource: undefined,
    title: null,
    showTitle: true,
    showCancelButton: true,
    visible: false,
    usePopover: true,
    width: undefined,
    onCancelClick() {
      this.option('dataSource', undefined);
      this.option('title', null);
      return false;
    },
    onItemClick(e) {
      _PageToolbar.option("items[1].text", e.itemData.text);

      // _LayoutHeader.option("items[0].options.disabled", true);
      $("#PageContains").empty();
      return $("#PageContains").load(e.itemData["target"]);
    }
  }).dxActionSheet('instance');

  //===============================================================================
  _PageToolbarItem = [
    {
      location: 'before',
      locateInMenu: 'never',
      visible: false,
      widget: 'dxButton',
      options: {
        icon: "fas fa-right-from-bracket",
        stylingMode: "text",
        hoverStateEnabled: true,
        focusStateEnabled: false,
        activeStateEnabled: true,
        onClick() {
          _PageToolbar.option("items[1].text", 'Home');
          _PageToolbar.option("items[0].options.icon", _PageToolbar.option("items[0].options.icon") === 'fas fa-right-from-bracket fa-rotate-180' ? 'fas fa-home' : 'fas fa-right-from-bracket fa-rotate-180');
          _PageToolbar.option("items[0].visible", _PageToolbar.option("items[1].text") !== 'Home' ? true : false);

          $("#PageContains").empty();
          $("#PageContains").load("./pages/HomePagesHome.html");
        },
      },
    },
    {
      location: 'center',
      locateInMenu: 'never',
      cssClass: 'Page-Title',
      text: '',
    },_toolbarSeparator
  ];


  _PageToolbar = $('#PageToolbar').dxToolbar({
    dataSource: _PageToolbarItem,
    options: {
      elementAttr: { id: "ToolbarAddNewButton" },
    },
  }).dxToolbar('instance');

  //===============================================================================
  _PageToolbar.option("items[1].text", 'Home');
  // _PageToolbar.option("items[0].options.icon", 'fas fa-home');
  $("#PageContains").load("./pages/HomePagesHome.html");
  //_LayoutHeader.option("items[0].options.disabled", false);

  //===============================================================================
  $(window).resize(function () {
    _LayoutContains.option('openedStateMode', $(window).width() < 960 ? "overlap" : "shrink");
  });


});