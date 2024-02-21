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
    height: '56px',
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
            // $("#popup").dxPopup({
            //   // ...
            //   showTitle: true,
            //   title: "Information",
            //   visble: true,
            //   hideOnOutsideClick: true,
            // });

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
          template: '<div style="padding: 5px 40px 5px 40px" class="fas fa-user fa-xl"></div>',
          hoverStateEnabled: true,
          focusStateEnabled: false,
          activeStateEnabled: false,
          selectionMode: 'none',
          type: 'danger',
          stylingMode: "text",
          height: undefined,
          width: undefined,
          onClick() {
            _PageToolbar.option("items[0].text", "e-Pltaform Account"),
              $("#PageContains").empty();
            $("#PageContains").load("./pages/UserManage/UserMainPage.html");
           
          },
        }
      },
      {
        visible: false,
        disabled: true,
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
                text: "Home", icon: "fas fa-home fa-2xl",
              },
              {
                text: "Program",
              },
              { text: "Dokumentasi", visible: false },
              { text: "Literasi", visible: false },
              { text: "Referensi", visible: false }
            ],

          // items: () => {
          //   return $.getJSON("./data/NavHeader.json", function (result) {
          //   //   item = result.filter(function (obj) {
          //   //     return obj.key == "Home";
          //   //   });
          //   //   return item;
          //   // }),
          //     // buttonTemplate: function (itemData, itemElement) {
          //     return $(`<div>${itemData.key}</div>`);
          //     }
          // },

          onItemClick(e) {
            if (e.itemIndex == 0) {
              $.getJSON("./data/NavHeader.json", function (result) {
                $("#PageContains").load(result[0].items[0].target);
                _PageToolbar.option("items[0].text", result[0].items[0].text);
              });

            } else {
              $.getJSON("./data/NavHeader.json", function (result) {

                _ActionSheet.option('dataSource', result[e.itemIndex].items);
                // $("#PageContains").load(e.itemData.target);

                _ActionSheet.option('usePopover', $(window).width() < 600 ? false : true);
                _ActionSheet.option('width', $(window).width() < 600 ? undefined : 'auto');
                _ActionSheet.option('showTitle', $(window).width() < 600 ? true : false);
                _ActionSheet.option('target', e.itemElement);
                _ActionSheet.option('title', result[e.itemIndex].key);
                _ActionSheet.option('visible', true);
              });
            }
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
    openedStateMode: $(window).width() < 600 ? "overlap" : "shrink", //shrink //overlap
    position: 'left', //right
    shading: $(window).width() < 600 ? true : false,
    closeOnOutsideClick: true,
    template() {
      const _ListWidget = $("<div>");
      return _ListWidget
        .dxList({
          keyExpr: "key",
          dataSource: "./data/NavMain.json",
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
      $("#PageContains").load(e.itemData["target"]);


    }
  }).dxActionSheet('instance');

  //===============================================================================
  _PageToolbar = $('#PageToolbar').dxToolbar({
    // visible: true,
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

  //===============================================================================
  $("#PageContains").load("./pages/HomePagesHome.html");
  _PageToolbar.option("items[0].text", 'Home');
  //_LayoutHeader.option("items[0].options.disabled", false);
  //===============================================================================


});