$(() => {

  _getItems = GoItems("./data/NavMain.json");

  _TabUserPage = $('#TabUserPage')
    .dxTabs({
      iconPosition: "top",
      stylingMode: "primary",
      hoverStateEnabled: true,
      focusStateEnabled: false,
      selectionMode: 'single',
      activeStateEnabled: true,
      scrollByContent: true,
      scrollingEnabled: true,
      showNavButtons: true,
      selectedIndex: -1,
      items: [
        {
          text: 'Authentication',
          icon: 'fas fa-user',
          // template: function (itemData, itemIndex, element) {
          //   _FormSysTab = $("<div>").appendTo(element)
          //     .dxForm({
          //       labelMode: 'floating',
          //       items: [
          //         'ID', {
          //           itemType: 'group',
          //           caption: 'Main Information',
          //           items: ['FirstName', 'LastName', 'HireDate', 'Position', 'OfficeNo'],
          //         },
          //       ],
          //     }).dxForm('instance');
          // },
        },
        {
          text: 'Personal Data',
          icon: 'fas fa-user',
          // items: ['BirthDate', {
          //   itemType: 'group',
          //   caption: 'Home Address',
          //   items: ['Address', 'City', 'State', 'Zipcode'],
          // }],
        },
        {
          text: 'Phone',
          icon: 'fas fa-user',
          // items: ['Phone'],
        }, {
          text: 'Skype',
          icon: 'fas fa-user',
          // items: ['Skype'],
        }, {
          text: 'Email',
          icon: 'fas fa-user',
          // items: ['Email'],
        }
      ],
    })
    .dxScrollView({
      scrollByContent: true,
      scrollByThumb: true,
      useNative: false,
      showScrollbar: 'onHover',
      height: '100%',
      width: "100%",
    });

  //==========================================================================================
  _UserPage = $('#UserPage')
    .dxForm({
      minColWidth: '200px',
      colCount: 'auto',
      width: '100%',
      colCountByScreen: {
        lg: 6,
        md: 4,
        sm: 2,
        xs: 1,
      },
      screenByWidth(width) {
        return width < 480 ? 'xs' : width < 840 ? 'sm' : width < 1024 ? 'md' : 'lg';
      },
      items: _getItems,

    })
    .dxScrollView({
      scrollByContent: true,
      scrollByThumb: true,
      useNative: false,
      showScrollbar: 'onHover',
      height: '100%',
      // width: "100%",
    });

  //===================================================================
  function GoItems(_objItems) {
    _new = [];
    $.getJSON(_objItems, function (result) {
      result.forEach(function (rowData) {
        _new.push({
          'itemType': 'button',
          'buttonOptions': {
            'text': rowData.key,
            'icon': 'fas fa-comment fa-xl',
            'type': 'default',
            'width': '100%',
            'height': '200px',
            'focusStateEnabled': false,
          },
        });
      });
      DevExpress.ui.notify(JSON.stringify(_new));
      return _new;
    });
  }

});