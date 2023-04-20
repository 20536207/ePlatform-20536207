window.jsPDF = window.jspdf.jsPDF;
$(document).ready(function () {
  const

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
    },

    _ActionSheet = $('#ActionSheet').dxActionSheet({
      dataSource: undefined,
      title: 'Choose action',
      showTitle: true,
      showCancelButton: true,
      visible: false,
      usePopover: true,
      onCancelClick() {
        alert('Cancel');
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
      },
    }).dxActionSheet('instance'),

    //==============================================================================
    _LayoutHeader = $('#LayoutHeader').dxToolbar({
      items: [
        {
          // widget: 'dxButton',
          location: 'before',
          locateInMenu: 'never',
          // cssClass: 'DevApp-Menu',
          text: $('<div></div>'),
          // options: {
          //   text: 'e-Platform',
          //   icon: 'menu',
          //   hoverStateEnabled: true,
          //   focusStateEnabled: false,
          //   activeStateEnabled: true,
          //   type: 'normal',
          //   stylingMode: "text",
          //   height: undefined,
          //   width: undefined,
          //   onClick() {
          //     _LayoutContains.toggle();
          //   },
          // },
          template(e) {
            return $('<div class="fab fa-windows"><span class="DevApp-Menu"> e-Platform All In One <br> Ver. 20536207.1</span></div>')
          }
        },
        {
          location: 'after',
          // location: $(window).width() < 600 ? "after" : 'before',
          locateInMenu: 'never', //ayuto never always
          text: $(window).width() < 480 ? "NPSN : 20536207" : "SD NEGERI TISNONEGARAN 1 PROBOLINGGO",
          template(e) {
            return $("<div class='DevApp-Customer'>" + e.text + "</div>");
          },
        }],
    }).dxToolbar("instance"),

    //===============================================================================
    _LayoutContains = $('#LayoutContent').dxDrawer({
      opened: false,
      revealMode: "slide", //expand
      openedStateMode: "shrink", //shrink //overlap
      position: 'left', //right
      shading: false,
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
              $("#PageContains").load("./pages/" + e.itemData["filepath"] + ".html");


            },
          }).addClass('ContainsSidebar');
      },
    }).dxDrawer('instance'),

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
    }).dxToolbar('instance'),

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
    _LayoutFooter = $('#LayoutFooter').dxTabs({
      dataSource: "./data/NavTaskbar.json",
      hoverStateEnabled: true,
      focusStateEnabled: false,
      selectionMode: 'none',
      selectedIndex: -1,
      onItemClick(e) { //itemData, itemIndex, itemElement
        if (e.itemIndex == 0) {
          _LayoutContains.toggle();
        } else {
          $("#PageContains").load(e.itemData.loadpage);
          _PageToolbar.option("items[0].text", e.itemData.text);
        }

        // _ActionSheet.option('usePopover', $(window).width() < 600 ? false : true);
        // _ActionSheet.option('target', e.itemElement);
        // _ActionSheet.option('title', e.itemData.text);
        // _ActionSheet.option('visible', true);
        // _LayoutFooter.option('selectedIndex', -1);

      },
    }).dxTabs('instance');

  $("#PageContains").load("./pages/ViewHome.html");

  _PageToolbar.option("items[0].text", 'Home');

});