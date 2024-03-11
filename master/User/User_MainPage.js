$(document).ready(function () {

  _ParentPageContains = "./master/Homepage/Homepage_Home.html";

  // ===============================================================================================
  for (let i = 1; i <= 50; i++) {
    $("#UserPage").append(
      $("<div />").dxButton({
        elementAttr: { id: "box" + i, class: 'btnPageLayout' },
        type: 'normal',
        stylingMode: 'contained',
        hoverStateEnabled: false,
        focusStateEnabled: false,
        activeStateEnabled: true,
        template: () => {
          return $(
            "<div style='display:flex;flex-direction: column;padding: 5px'>" +
            "<i class='fas fa-user-shield fa-4x'></i>" +
            "<span>Authentication, Management and Information</span></div>"
          )
        },
        onClick(e) {
          // e.indexOf( liNodeReference );
          _notify('option ' + $('div').index(this) + ' masih proses ritual');
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
    // direction: 'both',
    // height: '100%',
    // width: '100%', 
  });

});