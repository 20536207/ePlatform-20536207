function onSignIn(googleUser) {
  var profile = googleUser.json();
  console.log(googleUser);
  console.log(profile);
  console.log(JSON.stringify(googleUser));
  console.log(JSON.stringify(profile));

  // console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  // console.log('Name: ' + profile.getName());
  // console.log('Image URL: ' + profile.getImageUrl());
  // console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
}


function signOut() {
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
    console.log('User signed out.');
  });
}

$(document).ready(function () {

  _ParentPageContains = "./master/Homepage/Homepage_Home.html";

  _Auth = $(

    "<div style='width:300px; text-align: center; justify-content: center; margin:auto;'>"+
        "<div style='justify-self: flex-start; display:flex;flex-direction: column;padding: 5px;text-align: center;justify-content: center;'>" +
            "<i class='fas fa-circle-user fa-4x'></i>" +
            "<div id='useraccount' style='margin: 5px 0 5px 0;'>User Authentication</div>" +

            '<div id = "g_id_onload" data-client_id="641473140302-3a81n79atvb0rv3jov0da59ip7o2navp.apps.googleusercontent.com"' +
              'data-context="signin" data-ux_mode="popup" data-callback="onSignIn" data-auto_prompt="false" >' +
            '</div>' +
  
            '<div class="g_id_signin" data-type="standart" data-shape="pill" data-theme="outline" data-text="signin_with"' +
              'data-size="large" data-logo_alignment="left">' +
            '</div>' +
        "</div>"+
    '</div>'
    
  );
  // ===============================================================================================

  $("#UserPage").append($(_Auth));

  for (let i = 1; i <= 20; i++) {
    $("#UserPage").append(
      $("<div />").dxButton({
        elementAttr: { id: "box" + i, class: "btnPageLayout", },
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