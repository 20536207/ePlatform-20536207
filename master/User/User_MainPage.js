function onSignIn(response) {
  // _ApiGoogle = {
  //   "user": {
  //     "id": "116807551237969746774",
  //     "email": "123456@gmail.com",
  //     "verified_email": true,
  //     "name": "John Doe",
  //     "given_name": "John",
  //     "family_name": "Doe",
  //     "picture": "https:\/\/lh3.googleusercontent.com\/-XdUIqdMkCWA\/AAAAAAAAAAI\/AAAAAAAAAAA\/4252ldubv5M\/photo.jpg",
  //     "locale": "en"
  //   },
  //   "credentials": {
  //     "access_token": "ya29.GlsSBIA_hMKZIDE_wqJAJS0vrHD_Wd2HfwRTTvLISv0i1uFICCqz4JdEZcL09mFFlGdt71D9pW80SLShHgyeSOZgnWcL5piL5m0jYo1TMU6o0fDLnqGAWm6BY-Wl",
  //     "token_type": "Bearer",
  //     "expires_in": 3600,
  //     "refresh_token": "1\/az_TmhPRaYG5NDH6L9gBeNo6STOD9EbTt1VkkBmp3IQ",
  //     "id_token": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjBlNmExN2I2YjU4MGIzNTFmMGQ5YmEzMzY2YTU0Y2U1NmViOWIxN2UifQ.eyJhenAiOiIxMDAzMjk3NzQ4MDc1LWsxdml0OGMxMHJ1ZnM4cjZpYmZyYmxlZmJhamFoZmllLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiMTAwMzI5Nzc0ODA3NS1rMXZpdDhjMTBydWZzOHI2aWJmcmJsZWZiYWphaGZpZS5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsInN1YiI6IjExNjgwNzU1MTIzNzk2OTc0Njc3NCIsImVtYWlsIjoiNzA0MzA2N0BnbWFpbC5jb20iLCJlbWFpbF84PIXpZmllZCI6dHJ1ZSwiYXRfaGFzaCI6IkdrOHFjMTdCcEVGVGZmWkpKbkh6NGciLCJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJpYXQiOjE0ODk4MTIxMzksImV4cCI6MTQ4OTgxNTczOSwibmFtZSI6IkFudG9uIEFsZWtzYW5kcm92IiwicGljdHVyZSI6Imh0dHBzOi8vbGg0Lmdvb2dsZXVzZXJjb250ZW50LmNvbS8tTEJuMTlWX1NEN3cvQUFBQUFBQUFBQUkvQUFBQUFBQUFBQUEvQUFvbXZWMTRMVFIycUgtOXJ5S2dScjIxd3A1Z1FZRGNmUS9zOTYtYy9waG90by5qcGciLCJnaXZlbl9uYW1lIjoiQW50b24iLCJmYW1pbHlfbmFtZSI6IkFsZWtzYW5kcm92IiwibG9jYWxlIjoiZW4ifQ.BHv5BP3ZsagvunfMzGLwmxkBdtoRocPa_PXdq2lrd4D9BoFGkK06eJVbNNbcPOFdAMba3V5lIIG_L499gIy3TTz_PIHBPi6DMSp6uyfkCwf2n-PspZtTbTRlUm5ZvRdAyPEEyLLkWllKkMsRk-Nwp3vhyOLnExzH7SXiEefU4kaXXCpjsHV3GvZ-yhrmNlicEY3TPLwI-tl_lydXTBXRRiPZBGWjHK75hqvQzUktC2Flimd7JnCLhF0FOS3yFKc5D11WPKMOO4YkIQDbBrKY64vyxQAd-Zb2KfvXZi6Dorq7IJF6sK2GAfI3edSaoMZBMa0-x2V7FuFIBLtTgGRnsw"
  //   }
  // };

  console.log(response.credential);
  const responsePayload = decodeJwtResponse(response.credential);
  console.log(JSON.stringify(responsePayload));

  console.log("ID: " + responsePayload.sub);
  console.log('Full Name: ' + responsePayload.name);
  console.log('Given Name: ' + responsePayload.given_name);
  console.log('Family Name: ' + responsePayload.family_name);
  console.log("Image URL: " + responsePayload.picture);
  console.log("Email: " + responsePayload.email);

}


function signOut() {
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
    console.log('User signed out.');
  });
}

$(document).ready(function () {

  _ParentPageContains = "./master/Homepage/Homepage_Home.html";

  _Auth =
    '<div id="g_id_onload" data-client_id="641473140302-3a81n79atvb0rv3jov0da59ip7o2navp.apps.googleusercontent.com"' +
    'data-context="signin" data-ux_mode="popup" data-callback="onSignIn" data-auto_prompt="false" >' +
    '</div>' +

    "<div>" +

    "<div class='fas fa-circle-user fa-4x'></div>" +

    "<div id='useraccount' style='margin: 5px 0 5px 0;'>Authorized</div>" +

    '<div class="g_id_signin" data-type="standart" data-shape="pill" data-theme="outline" data-text="signin_with"' +
    'data-size="large" data-logo_alignment="left">' +
    '</div>' +

    '</div>';
  // ===============================================================================================

  $("#UserAuthorized").append($(_Auth));

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


  $("#UserMainPage").dxScrollView({
    scrollByContent: true,
    scrollByThumb: true,
    useNative: false,
    showScrollbar: 'onHover',
    // direction: 'both',
    // height: '100%',
    // width: '100%', 
  });
});