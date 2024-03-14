//==============================================================================
function _notify(_message) {
  return DevExpress.ui.notify(
    {
      message: _message,
      maxWidth: 300,
      displayTime: 1000,
      animation: {
        show: { type: 'fade', duration: 400, from: 0, to: 1 },
        hide: { type: 'fade', duration: 40, to: 0 },
      },
    },
    { position: "top right", direction: "down-push" }
  );
};

$(document).ready(function () {
  //==============================================================================
  window.jsPDF = window.jspdf.jsPDF;
  //==============================================================================
  _toolbarSeparatorBefore = {
    locateInMenu: 'never',
    location: "before",
    template(itemData, itemIndex, element) {
      $('<div>')
        .addClass('separator-before')
        .appendTo(element);
    },
    menuItemTemplate(itemData, itemIndex, element) {
      $('<div>')
        .addClass('toolbar-menu-separator')
        .appendTo(element);
    },

  };
  _toolbarSeparatorAfter = {
    locateInMenu: 'never',
    location: "after",
    template(itemData, itemIndex, element) {
      $('<div>')
        .addClass('separator-after')
        .appendTo(element);
    },
  };

  //==============================================================================
  _actPageContains = null;
  _PdfFilePageContains = null;
  _ParentPageContains = null;

  //==============================================================================
  _LayoutHeader = $('#LayoutHeader').dxToolbar({
    items: [
      {
        widget: 'dxButton',
        location: 'before',
        locateInMenu: 'never',
        cssClass: undefined,
        text: "",
        options: {
          //disabled: true,
          text: "",
          icon: null,
          template:
            "<div class='fab fa-windows fa-xl'><span class='DevApp-Menu'> e-Platform AIO<br>" +
            "ver. 20536207.1</span></div>",
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
          template: '<a class="fas fa-circle-user fa-3x"></a>',
          hoverStateEnabled: true,
          focusStateEnabled: false,
          activeStateEnabled: false,
          selectionMode: 'none',
          type: 'normal',
          stylingMode: "text",
          height: undefined,
          width: undefined,
          onClick() {
            _PageToolbar.option("items[1].text", "e-Platform Account");
            _PageToolbar.option("items[2].visible", false);

            $("#PageContains").empty();
            _actPageContains = "./master/User/User_MainPage.html";
            $("#PageContains").load(_actPageContains);
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
            return $(`<b style="color: rgba(28, 168, 221, 1)">${data.key}</b>`);
          },
          width: 265,
          selectionMode: "single",
          onItemClick(e) {
            _PageToolbar.option("items[1].text", e.itemData.text);
            _PageToolbar.option("items[2].visible", false);
            _LayoutContains.toggle();

            $("#PageContains").empty();
            _actPageContains = e.itemData["target"];
            _PdfFilePageContains = "./master/AIOPdfPageContains/PdfPageContains/" + e.itemData["text"].replace(" ", "") + ".pdf";
            $("#PageContains").load(_actPageContains);
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
      _PageToolbar.option("items[2].visible", false);

      // _LayoutHeader.option("items[0].options.disabled", true);
      $("#PageContains").empty();
      _actPageContains = e.itemData["target"];
      return $("#PageContains").load(_actPageContains);
    }
  }).dxActionSheet('instance');

  //===============================================================================
  _PageToolbar = $('#PageToolbar').dxToolbar({
    items: [
      {
        location: 'before',
        locateInMenu: 'never',
        visible: true,
        widget: 'dxButton',
        cssClass: 'items-before',
        text: "",
        options: {
          icon: "fas fa-right-from-bracket fa-rotate-180",
          stylingMode: "text",
          hoverStateEnabled: true,
          focusStateEnabled: false,
          activeStateEnabled: true,
          onClick() {
            _PageToolbar.option("items[2].visible", false);
            $("#PageContains").empty();
            _actPageContains = _ParentPageContains;
            $("#PageContains").load(_actPageContains);
          },
        },
      },
      // _toolbarSeparatorBefore,
      {
        location: 'before',
        locateInMenu: 'never',
        cssClass: 'Page-Title',
        text: "",
      },
      {
        location: 'after',
        locateInMenu: 'auto',
        visible: false,
        cssClass: 'items-after',
        widget: 'dxButtonGroup',
      },
      {
        location: 'after',
        locateInMenu: 'never',
        visible: true,
        cssClass: 'items-after',
        widget: 'dxButton',
        options: {
          icon: "fas fa-refresh",
          stylingMode: "text",
          hoverStateEnabled: true,
          focusStateEnabled: false,
          activeStateEnabled: true,
          onClick() {
            _PageToolbar.option("items[2].visible", false);

            $("#PageContains").empty();
            $("#PageContains").load(_actPageContains);
          },
        },
      }
    ],

  }).dxToolbar('instance');

  //===============================================================================
  _actPageContains = "./master/Homepage/Homepage_Home.html";
  $("#PageContains").load(_actPageContains);
  //===============================================================================
  $(window).resize(function () {
    _LayoutContains.option('openedStateMode', $(window).width() < 960 ? "overlap" : "shrink");
  });

});