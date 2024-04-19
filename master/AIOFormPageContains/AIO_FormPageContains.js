$(document).ready(function () {

    //==================================================================================================================
    addPageForm(
        _main.arrVarGlobal._FormPageContains,
        document.getElementById("FormPageContains")
    );
    addPageForm(
    "#UserAuthentication",
    _main.account.user,
    _Authentication.Authorized
  )

    //==================================================================================================================
    $("#FormMainPage").dxScrollView({
        scrollByContent: true,
        scrollByThumb: true,
        useNative: false,
        showScrollbar: 'onHover',
        direction: 'both',
    });

});