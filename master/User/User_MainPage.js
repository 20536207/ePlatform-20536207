$(document).ready(function () {

  _main.arrVarGlobal._ParentPageContains = "/master/Homepage/Homepage_Home.html";

  //==========================================================================================
  // $('#UserContains').dxTabPanel({
  //   dataSource: _main.navigator.main,
  //   itemTitleTemplate: (itemData, itemIndex, element)=>{
  //     return itemData.key;
  //   },
  //   focusStateEnabled:false,
  //   hoverStateEnabled:false,
  //   width: "100%",
  //   animationEnabled: true,
  //   swipeEnabled: true,
  //   tabsPosition: $(window).width() < 960 ? "top" : "left",
  //   stylingMode: "secondary",
  //   iconPosition: 'top',
  //   // itemTemplate: ({ tasks }) => taskList(tasks),
  // }).dxTabPanel('instance');

  //==========================================================================================
  $("#UserAuthorized")
    .dxForm({
      formData: _main.account.user,
      readOnly: true,
      // disabled: true,
      labelLocation: "left",
      labelMode: "outside",
      colCount: "auto",
      colCountByScreen: {
        lg: 9,
        md: 9,
        sm: 1,
        xs: 1,
      },
      screenByWidth(width) {
        return width < 960 ? 'sm' : 'lg';
        // return width < 480 ? 'xs' : width < 840 ? 'sm' : width < 1024 ? 'md' : 'lg';
      },
      items: [
        {
          itemType: 'group',
          items: [
            {
              template: `<img id="UserPict" src=${_main.account.user.photo} style="display:'inline-flex';object-fit:scale-down;width:98px;height:98px;">`
            },
          ],
        },
        {
          itemType: 'group',
          caption: 'User Info',
          colSpan: 4,
          items: ['nama', 'organisasi', 'keterangan', "id"]
        },
        {
          itemType: 'group',
          caption: 'Account Info',
          colSpan: 4,
          items: ['email', 'sub']
        },
      ],
    }).dxForm("instance");

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
          return `
            <div style="display:flex;flex-direction: column;padding: 5px">
            <i class="fas fa-user-shield fa-4x"></i>
            <span>Authentication, Management and Information</span></div>
          `;
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