window.jsPDF = window.jspdf.jsPDF;

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

  _popup = function () {
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
    },
    onItemClick(value) {
      DevExpress.ui.notify(
        {
          message: value.itemData.text,
          maxWidth: 300,
          displayTime: 3000,
          animation: {
            show: { type: 'fade', duration: 400, from: 0, to: 1 },
            hide: { type: 'fade', duration: 40, to: 0 },
          },
        },
        { position: "top right", direction: "down-push" }
      );
    }
  }).dxActionSheet('instance');

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
          items: [
            { text: "Home" },
            { text: "Program" },
            { text: "Dokumentasi" },
            { text: "Literasi" },
            { text: "Referensi" }
          ],
          // items: $.getJSON("./data/NavHeader.json", function (result) {
          //   var items = result;
          //   items = result.filter(function (obj) {
          //     return obj.text != "Home";
          //   });
          //   DevExpress.ui.notify(NavHeader);
          // }),
          // buttonTemplate: function (itemData, $buttonContent) {
          //   $buttonContent.append(
          //     // Custom jQuery elements go here
          //   )
          //   // ===== or =====
          //   return /* your markup goes here */
          // },
          onItemClick(e) {
            if (e.itemIndex == 0) {
              $.getJSON("./data/NavHeader.json", function (result) {
                $("#PageContains").load(result[0].items[0].target);
              });
            } else {
              $.getJSON("./data/NavHeader.json", function (result) {
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
      const _ListWidget = $('<div>').addClass('ContainsSidebar');

      return _ListWidget
        .dxList({
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

            _PageToolbar.option("items[0].text", e.itemData.text);
            _LayoutContains.toggle();

            $("#PageContains").empty();
            $("#PageContains").load(e.itemData["target"]);


          },
        }).addClass('ContainsSidebar');
    },
  }).dxDrawer('instance');

  _PageToolbar = $('#PageToolbar').dxToolbar({
    items: [{
      location: 'center',
      locateInMenu: 'never',
      // cssClass: 'Page-Title',
      text: '',
      template(e) {
        return $("<div class='Page-Title'>" + e.text + "</div>");
      },
    }],
  }).dxToolbar('instance');

  // const _PageContains = $('#PageContains').dxScrollView({
  //   direction: 'both',
  //   scrollByContent: true,
  //   scrollByThumb: true,
  //   showScrollbar: 'onHover',
  //   usenative: true,
  //   width: 'inherit',
  //   height: 'inherit',
  // }).dxScrollView('instance');

  //========================================================================================================
  // _LayoutFooter = $('#LayoutFooter').dxTabs({
  //   dataSource: "./data/NavTaskbar.json",
  //   hoverStateEnabled: true,
  //   focusStateEnabled: false,
  //   selectionMode: 'none',
  //   selectedIndex: -1,
  //   onItemClick(e) { //itemData, itemIndex, itemElement
  //     switch (e.itemIndex) {
  //       case 0:
  //         _LayoutContains.toggle();
  //         break;
  //       case 1:
  //         $("#PageContains").load(e.itemData.loadpage);
  //         _PageToolbar.option("items[0].text", e.itemData.text);
  //         break;
  //       case 2:
  //         data = $.getJSON("./data/NavTaskbar.json", function (jsondata) {
  //           jsondata.forEach((element, index) => {
  //             DevExpress.ui.notify(item);
  //           });
  //         });
  //         _PageToolbar.option("items[0].text", data.itemData.text);
  //         break;
  //       default:
  //         break;
  //     }
  //     // if (e.itemIndex == 0) {
  //     //   _LayoutContains.toggle();
  //     // } else {
  //     //   $("#PageContains").load(e.itemData.loadpage);
  //     //   _PageToolbar.option("items[0].text", e.itemData.text);
  //     // }

  //     // _ActionSheet.option('usePopover', $(window).width() < 600 ? false : true);
  //     // _ActionSheet.option('target', e.itemElement);
  //     // _ActionSheet.option('title', e.itemData.text);
  //     // _ActionSheet.option('visible', true);
  //     // _LayoutFooter.option('selectedIndex', -1);

  //   },
  // }).dxTabs('instance');

  $("#PageContains").load("./pages/HomePagesHome.html");

  _PageToolbar.option("items[0].text", 'Home');

});