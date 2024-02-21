$(function () {
  var
    _UserPage = $('#UserPage')
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
        height: undefined,
        // width: "100%",
      });


});