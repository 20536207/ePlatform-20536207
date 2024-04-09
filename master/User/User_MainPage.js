$(document).ready(function () {

  _main.arrVarGlobal._ParentPageContains = "/master/Homepage/Homepage_Home.html";
  document.getElementById("UserPict").src = _main.account.user.pict;
  document.getElementById("UserAccount").innerHTML = _main.account.user.name + '<br>' + _main.account.user.email;
  
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