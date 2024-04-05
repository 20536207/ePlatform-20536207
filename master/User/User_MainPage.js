$(document).ready(function () {

  _main.arrVarGlobal._ParentPageContains = "/master/Homepage/Homepage_Home.html";

  // ===============================================================================================
  $("#UserAuthorized").append(
    $(
      "<div "+
          "id='g_id_onload' "+
          "data-client_id='"+_main.appConfig.gapi.clientId+"' "+
          "data-context='signin' "+
          "data-ux_mode='popup' "+
          "data-callback='onSignIn' "+
          "data-auto_prompt='false' "+
      "</div>"+

      "<img id='UserPict' style='object-fit:scale-down;width:125px;height:125px;'>" +
      "<div id='UserAccount' style='margin: 5px 0 5px 0;'></div>"+

      "<div "+ 
          "class='g_id_signin' "+
          "data-type='standart' "+
          "data-shape='pill' "+
          "data-theme='outline' "+
          "data-text='continue_with' "+
          "data-size='medium' "+
          "data-logo_alignment='center' >"+
      "</div>"
    )
  );

  if (_main.userConfig.user.cred == null) {
    document.getElementById("UserPict").style.display = 'none';
  } else {
    onSignIn(_main.userConfig.user.cred);
  };

  // $("#btnSignInOut").dxButton({
  //   type: 'normal',
  //   stylingMode: 'contained',
  //   hoverStateEnabled: false,
  //   focusStateEnabled: false,
  //   activeStateEnabled: true,
  //   elementAttr:{class:"g_id_signin"},
  //   text: "",
  //   onClick(e) {
  //     console.log(document.getElementById("g_id_onload"));
  //     if (this.option("text") == "SIGN IN") {
  //       gapi.auth2.getAuthInstance().signIn();
  //     } else {
  //       gapi.auth2.getAuthInstance().signOut().then(function(){
  //         location.reload();
  //       });
  //       gapi.auth2.getAuthInstance().disconnect();
  //     }
  //   },
  // }).dxButton("instance");

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
          _notify("option " + $('div').index(this) + " masih proses ritual");
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