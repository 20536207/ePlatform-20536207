
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
    locateInMenu: 'auto',
    location: 'after',
    template(itemData, itemIndex, element) {
      $('<div>')
        .addClass('toolbar-separator')
        .appendTo(element);
    },
    menuItemTemplate(itemData, itemIndex, element) {
      $('<div>')
        .addClass('toolbar-menu-separator')
        .appendTo(element);
    },
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
            _PageToolbar.option("items[0].text", "e-Platform Account"),
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
          hoverStateEnabled: true,
          focusStateEnabled: false,
          activeStateEnabled: false,
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

            //DevExpress.ui.notify(e.itemData.text);
            _PageToolbar.option("items[0].text", e.itemData.text);

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
      _PageToolbar.option("items[0].text", e.itemData.text);

      // _LayoutHeader.option("items[0].options.disabled", true);
      $("#PageContains").empty();
      return $("#PageContains").load(e.itemData["target"]);
    }
  }).dxActionSheet('instance');

  //===============================================================================
  _PageToolbar = $('#PageToolbar').dxToolbar({
    // visible: false,
    // elementAttr: { class: 'Page-Title' },
    items: [
      {
        location: 'center',
        locateInMenu: 'never',
        cssClass: 'Page-Title',
        text: '',
        // template(e) {
        //   return $("<div class='Page-Title'>" + e.text + "</div>");
        // },
      }

    ],
  }).dxToolbar('instance');

  //===============================================================================
  $("#PageContains").load("./pages/HomePagesHome.html");
  _PageToolbar.option("items[0].text", 'Home');
  //_LayoutHeader.option("items[0].options.disabled", false);

  //===============================================================================
  $(window).resize(function () {
    _LayoutContains.option('openedStateMode', $(window).width() < 960 ? "overlap" : "shrink");
  });


});