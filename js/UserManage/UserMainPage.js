$(function () {
  var
    _UserAccount = $('#UserPage')
      .dxTabPanel({
        iconPosition: "top",
        stylingMode: "primary",
        scrollByContent: true,
        items: [
          {
            title: 'System Information',
            icon: 'far fa-user',
            template: function (itemData, itemIndex, element) {
              _FormSysTab = $("<div>").appendTo(element)
                .dxForm({
                  labelMode: 'floating',
                  items: [
                    'ID', {
                      itemType: 'group',
                      caption: 'Main Information',
                      items: ['FirstName', 'LastName', 'HireDate', 'Position', 'OfficeNo'],
                    },
                  ],
                }).dxForm('instance');
            },
          },
          {
            title: 'Personal Data',
            icon: 'far fa-user',
            // items: ['BirthDate', {
            //   itemType: 'group',
            //   caption: 'Home Address',
            //   items: ['Address', 'City', 'State', 'Zipcode'],
            // }],
          },
          {
            title: 'Phone',
            icon: 'far fa-user',
            // items: ['Phone'],
          }, {
            title: 'Skype',
            icon: 'far fa-user',
            // items: ['Skype'],
          }, {
            title: 'Email',
            icon: 'far fa-user',
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