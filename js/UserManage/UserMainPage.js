$(() => {

  for (var i = 1; i < 21; i++) {
    $("#UserPage").append(
      $("<div />").dxButton({
        // text: 'Contained',
        type: 'normal',
        // icon: 'fas fa-user-shield fa-4x',
        stylingMode: 'contained',
        hoverStateEnabled: true,
        focusStateEnabled: false,
        activeStateEnabled: true,
        width: 176,
        height: 176,
        template: () => {
          return $("<i class='fas fa-user-shield fa-4x' />");
        },
        onClick() {
          DevExpress.ui.notify(
            {
              message: 'masih dalam proses ritual', //this.option('text'),
              maxWidth: 300,
              displayTime: 1000,
              animation: {
                show: { type: 'fade', duration: 400, from: 0, to: 1 },
                hide: { type: 'fade', duration: 40, to: 0 },
              },
            },
            { position: "top right", direction: "down-push" }
          );
        },
      })
    )
  };

  // $("#UserPage").append(
  //   $("<div />").dxToolbar({
  //     height: '100%',
  //     item: undefined,
  //   })
  // );

  // _new = [];

  // for (var i = 1; i < 15; i++) {
  //    _new.push(
  //       {
  //         'widget': 'dxButton',
  //         'location': 'before',
  //         'locateInMenu': 'never',
  //         'cssClass': undefined,
  //         'text': null,
  //         'options': {
  //           'text': null,
  //           'icon': undefined,
  //           'template': "() => {"
  //             'return $("<i class='fas fa-user-shield fa-4x' />");
  //           },
  //           'hoverStateEnabled': true,
  //           'focusStateEnabled': false,
  //           'activeStateEnabled': true,
  //           'selectionMode': 'none',
  //           'type': 'normal',
  //           'stylingMode': "text",
  //           'height': '176px',
  //           'width': '176px',
  //           'onClick': () => {
  //           },
  //         }
  //       }
  //    )
  // };


  $("#UserPage").dxScrollView({
    scrollByContent: true,
    scrollByThumb: true,
    useNative: false,
    showScrollbar: 'onHover',
    height: '100%',
    width: "100%",
  })

});