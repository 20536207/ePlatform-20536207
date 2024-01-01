window.jsPDF = window.jspdf.jsPDF;
/*===================================================================================*/
function GoEncrypt(_Contains, _Key)
/*===================================================================================*/ {
  return CryptoJS.TripleDES.encrypt(_Contains.toString(), _Key).toString();
}

/*===================================================================================*/
function GoDecrypt(_Contains, _Key)
/*===================================================================================*/ {
  return CryptoJS.TripleDES.decrypt(_Contains, _Key).toString(CryptoJS.enc.Utf8);
}

$(document).ready(function () {

  toolbarSeparator = {
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
    items: [
      {
        widget: 'dxButton',
        location: 'before',
        locateInMenu: 'never',
        cssClass: undefined,
        text: null,
        options: {
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
          onClick() {
            _LayoutContains.toggle();
          },
        }
      },
      {
        widget: 'dxButtonGroup',
        location: 'after',
        locateInMenu: 'auto',
        cssClass: undefined,
        text: null,
        options: {
          hoverStateEnabled: true,
          focusStateEnabled: false,
          activeStateEnabled: true,
          selectionMode: 'none',
          type: 'normal',
          stylingMode: "text",
          height: undefined,
          width: undefined,
          items:
            [
              {
                text: "Home",
                icon: "fas fa-home fa-2xl",
              },
              { text: "Program", visible: false },
              { text: "Dokumentasi", visible: false },
              { text: "Literasi", visible: false },
              { text: "Referensi", visible: false }
            ],
          // $.getJSON("./data/NavHeader.json", function (result) {
          //   item = result.filter(function (obj) {
          //     return obj.key == "Home";
          //   });
          //   return item;
          // }),
          // buttonTemplate: function (itemData, itemElement) {
          //   return $(`<div>${itemData.key}</div>`);
          // },
          onItemClick(e) {
            if (e.itemIndex == 0) {
              $.getJSON("./data/NavHeader.json", function (result) {
                $("#PageContains").load(result[0].items[0].target);
                _PageToolbar.option("items[0].text", result[0].items[0].text);
              });

              // DevExpress.ui.notify(GoEncrypt(pass, key));

            } else {
              $.getJSON(
                GoDecrypt("U2FsdGVkX19Mn/M47FB35sSQvPhOj1+LejvxpIUdeuC0gaMMaYrrxg==", "TripleDES"),
                function (result) {
                  _ActionSheet.option('dataSource', result[e.itemIndex].items);
                });
              // $("#PageContains").load(e.itemData.target);
              _ActionSheet.option('usePopover', $(window).width() < 600 ? false : true);
              _ActionSheet.option('width', $(window).width() < 600 ? undefined : 'auto');
              _ActionSheet.option('showTitle', $(window).width() < 600 ? true : false);
              _ActionSheet.option('target', e.itemElement);
              _ActionSheet.option('title', e.itemData.text);
              _ActionSheet.option('visible', true);
            }
          },
        }
      }
    ]
  }).dxToolbar("instance");

  //===============================================================================
  _LayoutContains = $('#LayoutContent').dxDrawer({
    opened: false,
    revealMode: "slide", //expand
    openedStateMode: $(window).width() < 600 ? "overlap" : "shrink", //shrink //overlap
    position: 'left', //right
    shading: $(window).width() < 600 ? true : false,
    closeOnOutsideClick: true,
    template() {
      const _ListWidget = $("<div>").addClass('ContainsSidebar');
      return _ListWidget
        .dxList({
          keyExpr: "key",
          dataSource: "./data/NavMain.json",
          hoverStateEnabled: true,
          focusStateEnabled: true,
          activeStateEnabled: false,
          grouped: true,
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

            // DevExpress.ui.notify(e.groupItem.key);
            _PageToolbar.option("items[0].text", e.itemData.text);

            _LayoutContains.toggle();

            $("#PageContains").empty();
            $("#PageContains").load(e.itemData["target"]);


          },
        }).addClass('ContainsSidebar');
    },
  }).dxDrawer('instance');

  _PageToolbar = $('#PageToolbar').dxToolbar({
    items: [
      {
        location: 'center',
        locateInMenu: 'never',
        // cssClass: 'Page-Title',
        text: '',
        template(e) {
          return $("<div class='Page-Title'>" + e.text + "</div>");
        },
      }
      
    ],
  }).dxToolbar('instance');

  

  $("#PageContains").load("./pages/HomePagesHome.html");

  _PageToolbar.option("items[0].text", 'Home');

});