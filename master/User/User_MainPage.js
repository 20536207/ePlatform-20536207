function decodeJwtResponse(token) {
  var base64Url = token.split(".")[1];
  var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  var jsonPayload = decodeURIComponent(
    atob(base64)
      .split("")
      .map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );

  return JSON.parse(jsonPayload);
}

function onSignIn(response) {
  console.log(response);
  const responsePayload = decodeJwtResponse(response.credential);
  _Authorized = {
    "user": {
      "id": responsePayload.sub,
      "email": responsePayload.email,
      "verified_email": responsePayload.email_verified,
      "name": responsePayload.name,
      "given_name": responsePayload.given_name,
      "family_name": responsePayload.family_name,
      "picture": responsePayload.picture,
      "locale": responsePayload.locale,
    }
  };
  
  console.log(_Authorized.user);

  document.getElementById("UserPict").src = _Authorized.user.picture;
  document.getElementById("UserAccount").innerHTML = _Authorized.user.name; // + '<br>' + _Authorized.user.email;
  // "https://lh3.googleusercontent.com/d/1_T-tcD6DfYqBEU79etn9JtrSF8leuOby"

}

function signOut() {
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
    console.log('User signed out.');
  });
}


$(document).ready(function () {

  _ParentPageContains = "./master/Homepage/Homepage_Home.html";

  // ===============================================================================================
  $("#UserAuthorized").append(
    $('<div id="g_id_onload" data-client_id="641473140302-3a81n79atvb0rv3jov0da59ip7o2navp.apps.googleusercontent.com"' +
      'data-context="signin" data-ux_mode="popup" data-callback="onSignIn" data-auto_prompt="false" >' +
      '</div>' +

      "<img id='UserPict' style='object-fit:scale-down;width:125px;height:125px>"+

      "<div id='UserAccount' style='margin: 5px 0 5px 0;'>user</div>" +

      '<div class="g_id_signin" data-type="standart" data-shape="pill" data-theme="outline" data-text="signin_with"' +
      'data-size="large" data-logo_alignment="left">' +
      '</div>'
    )
  );

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


  // ===============================================================================================
  $("#UserMainPage").dxScrollView({
    scrollByContent: true,
    scrollByThumb: true,
    useNative: false,
    showScrollbar: 'onHover',
  });
});