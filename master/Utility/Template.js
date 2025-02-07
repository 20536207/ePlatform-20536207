  // ===============================================================================================
    // _main.navigator.dashboard.items.forEach(function (itemData) {
    //     addPageButton(
    //         "#Publishing", //itemElement,
    //         itemData,
    //         itemData.text,  //itemBDataCaption,
    //         itemData.target,    //actPageContains,
    //         "/master/Homepage/Homepage_Home.html", //ParentPageContains
    //         // "/master/AIOPdfPageContains/PdfPageContains/" + itemData.text.replace(" ", "") + ".pdf" //pdfFileContains
    //         itemData.fileId //pdffileContains
    //     );
    // });

// ===============================================================================================
    /*
    const newForm = addPageForm(
        "#Publishing",
        1,
        undefined,
        [
            {
                itemType: "tabbed",
                tabPanelOptions: {
                    hoverStateEnabled: false,
                    focusStateEnabled: false,
                    activeStateEnabled: true,
                    scrollByContent: true,
                    scrollingEnabled: true,
                    showNavButtons: false,
                    stylingMode: "secondary",
                    swipeEnabled: true,
                },
                tabs: [
                    {
                        title: "#sdntisnonegaran1probolinggo",
                        template: `<div data-behold-id="Zi34hTXiKqwACPkXEx0G"></div>`
                    },
                    {
                        title: "#20536207Talenta",
                        template: `<div data-behold-id="Ukh5TwJ9HnHOEO3dpcOj"></div>`
                    },
                    {
                        title: "#20536207Adiwiyata",
                        template: `<div data-behold-id="bbbEMFcoHtRs9szh9x8H"></div>`
                    },

                    {
                        title: "Youtube Channel",
                        template: (develement) => {

                            // eltile = $(`
                            //     <tilecontains 
                            //         style= "

                            //             display: flex;
                            //             width: 100%;
                            //             height: 100%;
                            //             overflow: hidden;">
                            //     </tilecontains>
                            // `);

                            fetch(_main.appConfig.YtApi.url)
                                .then(res => res.json())
                                .then(data => {

                                    data.items.forEach(function (itemdata, itemindex) {
                                        
                                        develement.append(function () {
                                            `
                                            <div class="pageButton">

                                                <div class="itemPageButton">

                                                    <img class="itemPageButtonIcon" src="${itemdata.snippet.thumbnails.maxres.url}"></img>

                                                    <div class="itemPageButtonCaption">${itemdata.snippet.title}</div>
                                                </div>

                                            </div>

                                            `
                                        });

                                    });
                                });
                            //     // <a href="https://www.youtube.com/watch/?v=${_rowItems.snippet.resourceId.videoId}" target="_blank"></a>

                            // return eltile;
                        },

                    },
                    // {
                    //     title: "#20536207News",
                    //     template: '<div style="text-align: center;align-content: center;width: 100%"><image class="bannerimage" src="https://lh3.googleusercontent.com/d/13tw6S8CGnrRoN1SAbCeBK8T2pGev5JYR" /></div>'
                    // },
                    // {
                    //     title: "#20536207Storage",
                    //     template:
                    //         '<div><embed type="text/html" src="https://drive.google.com/embeddedfolderview?id=1uh3G7-cDTjuLbNSU07yFdq2agnNQYn_2#list" width="100%" height="1028rem"></embed></div>'
                    // }
                ]

            }
        ],
    );
    */


    // $('#MediaSosial').dxGallery({
    //     // dataSource: _main.navigator.banner,
    //     height: 'innerWidth',
    //     width: 'innerWidth',
    //     focusStateEnabled: false,
    //     loop: true,
    //     slideshowDelay: 6000,
    //     // showNavButtons: true,
    //     showIndicator: false,
    //     items: [
    //         {
    //             // "title": "#sdntisnonegaran1probolinggo",
    //             // template: '<div data-behold-id="Zi34hTXiKqwACPkXEx0G"></div>'
    //             template: '<div data-behold-id="bbbEMFcoHtRs9szh9x8H"></div>'

    //         },
    //         {
    //             // "title": "#20536207Talenta",
    //             // template: '<div data-behold-id="Ukh5TwJ9HnHOEO3dpcOj"></div>'
    //             template: '<div data-behold-id="bbbEMFcoHtRs9szh9x8H"></div>'

    //         },
    //         {
    //             // "title": "#20536207Adiwiyata",
    //             template: '<div data-behold-id="bbbEMFcoHtRs9szh9x8H"></div>'

    //         },
    //     ]
    // }).dxGallery('instance');
    
  // ===============================================================================================
  // _Authentication.CurrentUser().forEach(function (itemData) {
  //   addPageButton(
  //     "#UserPage", //itemElement,
  //     itemData,
  //     itemData.tabs,  //itemBDataCaption,
  //     "/master/AIOFormPageContains/AIO_FormPageContains.html",    //actPageContains,
  //     "/master/User/User_MainPage.html", //ParentPageContains
  //     "" //pdfFileContains
  //   );
  // })

  
//  $("#UserAuthentication").dxTabPanel({
//     dataSource: _Authentication.CurrentUser(),
//     collapsible: true,
//     hoverStateEnabled: false,
//     focusStateEnabled: false,
//     activeStateEnabled: true,
//     swipeEnabled: true,
//     stylingMode: "primary",
//     tabsPosition: $(window).width() <= 960 ? "top" : "left",
//     itemTitleTemplate: (itemData) => { return itemData.tabs},
//     itemTemplate: function () {
//       return addPageForm(
//         "<div>",
//         _main.account.user,
//         _Authentication.Authorized
//       )
//     },
//   }).dxTabPanel("instance");
  
  // ===============================================================================================
  // $("#UserAuthorized").append(
  //   $(
  //     "<div " +
  //     "data-client_id='" + _main.appConfig.gapi.clientId + "' " +
  //     "data-context='use' " +
  //     "data-ux_mode='popup' " +
  //     "data-callback='onSignIn' " +
  //     "data-use_fedcm_for_prompt='true' " +
  //     "data-auto_select='true' " +
  //     "data-itp_support='true' " +
  //     "data-auto_prompt='true' " +
  //     "data-cancel_on_tap_outside:'false' " +
  //     "id='g_id_onload'>" +
  //     "</div>"+

  //     "<img id='UserPict' style='object-fit:scale-down;width:125px;height:125px;'>" +
  //     "<div id='UserAccount' style='margin: 5px 0 5px 0;'></div>" +

  //     "<div " +
  //     "class='g_id_signin' " +
  //     "data-type='standart' " +
  //     "data-shape='pill' " +
  //     "data-theme='outline' " +
  //     "data-text='continue_with' " +
  //     "data-size='medium' " +
  //     "data-logo_alignment='left' >" +
  //     "</div>"
  //   )
  // );



  //=====================
  // google.accounts.id.initialize({
  //   client_id: "'"+_main.appConfig.gapi.clientId+"'",
  //   prompt_parent_id: 'elHeader-002',
  //   context: "use",
  //   ux_mode: "popup",
  //   callback: "onSignIn",
  //   use_fedcm_for_prompt: true,
  //   auto_select: true,
  //   itp_support: true,
  //   auto_prompt: true,
  //   cancel_on_tap_outside: false
  // });
  // google.accounts.id.prompt();


  //=======================
  // google.accounts.id.renderButton(
  //   document.getElementById("btnSignInOut"),
  //   {
  //     type: "standart",
  //     shape: "pill",
  //     theme: "outline",
  //     text: "continue_with",
  //     size: "medium",
  //     logo_alignment: "left",
  //     // click_listener: onClickHandler
  //   }
  // );


  // if (_main.account.user.cred == null) {
  //   document.getElementById("UserPict").style.display = 'none';
  //   document.getElementById("UserAccount").style.display = 'none';
  // } else {
    // onSignIn(_main.account.user.cred);
  // };

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



// function GetJsonData(_DBId, _TBId, _Range, _Query) {

//     var _Url = (
//         "https://docs.google.com/spreadsheets/d/" + _DBId + "/gviz/tq?" +
//         "&gid=" + _TBId +
//         "&range=" + _Range +
//         "&tq=" + _Query
//     );

//     var _JsonData = [];

//     return fetch(_Url)
//         .then(res => {
//             return res.text().then(rep => {
//                 var _data = JSON.parse(rep.substring(47).slice(0, -2));

//                 _data.table.rows.forEach((_rowItems, _rowIndex) => {
//                     var _arr = {};

//                     _rowItems.c.forEach((_cItems, _cIndex) => {
//                         var _field = _data.table.cols[_cIndex].label;
//                         var _value = _data.table.cols[_cIndex].type == 'date' ? (_cItems == null ? "" : _cItems.f) : (_cItems == null ? "" : _cItems.v);
//                         _arr[_field] = _value == null ? "" : _value;
//                     });

//                     _JsonData.push(_arr);
//                 });
//                 return JSON.stringify(_JsonData);
//             });
//         });
// };





// "credentials": {
//     "access_token": "ya29.GlsSBIA_hMKZIDE_wqJAJS0vrHD_Wd2HfwRTTvLISv0i1uFICCqz4JdEZcL09mFFlGdt71D9pW80SLShHgyeSOZgnWcL5piL5m0jYo1TMU6o0fDLnqGAWm6BY-Wl",
//     "token_type": "Bearer",
//     "expires_in": 3600,
//     "refresh_token": "1\/az_TmhPRaYG5NDH6L9gBeNo6STOD9EbTt1VkkBmp3IQ",
//     "id_token": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjBlNmExN2I2YjU4MGIzNTFmMGQ5YmEzMzY2YTU0Y2U1NmViOWIxN2UifQ.eyJhenAiOiIxMDAzMjk3NzQ4MDc1LWsxdml0OGMxMHJ1ZnM4cjZpYmZyYmxlZmJhamFoZmllLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiMTAwMzI5Nzc0ODA3NS1rMXZpdDhjMTBydWZzOHI2aWJmcmJsZWZiYWphaGZpZS5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsInN1YiI6IjExNjgwNzU1MTIzNzk2OTc0Njc3NCIsImVtYWlsIjoiNzA0MzA2N0BnbWFpbC5jb20iLCJlbWFpbF84PIXpZmllZCI6dHJ1ZSwiYXRfaGFzaCI6IkdrOHFjMTdCcEVGVGZmWkpKbkh6NGciLCJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJpYXQiOjE0ODk4MTIxMzksImV4cCI6MTQ4OTgxNTczOSwibmFtZSI6IkFudG9uIEFsZWtzYW5kcm92IiwicGljdHVyZSI6Imh0dHBzOi8vbGg0Lmdvb2dsZXVzZXJjb250ZW50LmNvbS8tTEJuMTlWX1NEN3cvQUFBQUFBQUFBQUkvQUFBQUFBQUFBQUEvQUFvbXZWMTRMVFIycUgtOXJ5S2dScjIxd3A1Z1FZRGNmUS9zOTYtYy9waG90by5qcGciLCJnaXZlbl9uYW1lIjoiQW50b24iLCJmYW1pbHlfbmFtZSI6IkFsZWtzYW5kcm92IiwibG9jYWxlIjoiZW4ifQ.BHv5BP3ZsagvunfMzGLwmxkBdtoRocPa_PXdq2lrd4D9BoFGkK06eJVbNNbcPOFdAMba3V5lIIG_L499gIy3TTz_PIHBPi6DMSp6uyfkCwf2n-PspZtTbTRlUm5ZvRdAyPEEyLLkWllKkMsRk-Nwp3vhyOLnExzH7SXiEefU4kaXXCpjsHV3GvZ-yhrmNlicEY3TPLwI-tl_lydXTBXRRiPZBGWjHK75hqvQzUktC2Flimd7JnCLhF0FOS3yFKc5D11WPKMOO4YkIQDbBrKY64vyxQAd-Zb2KfvXZi6Dorq7IJF6sK2GAfI3edSaoMZBMa0-x2V7FuFIBLtTgGRnsw"
//   }

// aud: "641473140302-3a81n79atvb0rv3jov0da59ip7o2navp.apps.googleusercontent.com"
// azp: "641473140302-3a81n79atvb0rv3jov0da59ip7o2navp.apps.googleusercontent.com"
// exp: 1710506637
// iat: 1710503037
// iss: "https://accounts.google.com"
// jti: "dcde7ed59cda2c4a1661e2f09aca723c6d9f01f6"
// nbf: 1710502737


// const _pdffile = "./pages/Dashboard/pageContains/PenerimaPIP.pdf";
    // pdfjsLib.getDocument(_pdffile).promise.then(_pdfDocument => {

//     const _pdfPageContains = document.getElementById("pdfPageContains");
//     let _renderTask;

//     for (let npage = 1; npage <= _pdfDocument.numPages; npage++) {
//         _pdfDocument.getPage(npage).then(function (_pdfPage) {

//             var _scaleCanvas = (_pdfPageContains.offsetWidth / _pdfPage.getViewport({ scale: 1 }).width).toFixed(1);

//             const _viewport = _pdfPage.getViewport({ scale: _scaleCanvas > 1.7 ? 1.5 : _scaleCanvas });
//             const _idPage = "pdfPage" + npage;
//             $(_pdfPageContains).append("<canvas id='" + _idPage + "'></canvas>");
//             const _pdfCanvas = document.getElementById(_idPage);
//             _pdfCanvas.width = _viewport.width;
//             _pdfCanvas.height = _viewport.height;

//             _renderTask = _pdfPage.render({
//                 canvasContext: _pdfCanvas.getContext('2d'),
//                 viewport: _viewport,
//             }).promise;
//         });
//     }
//     return _renderTask;
// });

// ,
//       {
//         visible: false,
//         disabled: true,
//         widget: 'dxButtonGroup',
//         location: 'after',
//         locateInMenu: 'auto',
//         cssClass: undefined,
//         text: null,
//         options: {
//           hoverStateEnabled: true,
//           focusStateEnabled: false,
//           activeStateEnabled: true,
//           selectionMode: 'none',
//           type: 'normal',
//           stylingMode: "text",
//           height: undefined,
//           width: undefined,
//           items:
//             [
//               {
//                 text: "Home", icon: "fas fa-home fa-2xl",
//               },
//               {
//                 text: "Program",
//               },
//               { text: "Dokumentasi", visible: false },
//               { text: "Literasi", visible: false },
//               { text: "Referensi", visible: false }
//             ],

//           // items: () => {
//           //   return $.getJSON("./data/NavHeader.json", function (result) {
//           //   //   item = result.filter(function (obj) {
//           //   //     return obj.key == "Home";
//           //   //   });
//           //   //   return item;
//           //   // }),
//           //     // buttonTemplate: function (itemData, itemElement) {
//           //     return $(`<div>${itemData.key}</div>`);
//           //     }
//           // },

//           onItemClick(e) {
//             if (e.itemIndex == 0) {
//               $.getJSON("./data/NavHeader.json", function (result) {
//                 $("#PageContains").load(result[0].items[0].target);
//                 _PageToolbar.option("items[0].text", result[0].items[0].text);
//               });

//             } else {
//               $.getJSON("./data/NavHeader.json", function (result) {

//                 _ActionSheet.option('dataSource', result[e.itemIndex].items);
//                 // $("#PageContains").load(e.itemData.target);

//                 _ActionSheet.option('usePopover', $(window).width() < 600 ? false : true);
//                 _ActionSheet.option('width', $(window).width() < 600 ? undefined : 'auto');
//                 _ActionSheet.option('showTitle', $(window).width() < 600 ? true : false);
//                 _ActionSheet.option('target', e.itemElement);
//                 _ActionSheet.option('title', result[e.itemIndex].key);
//                 _ActionSheet.option('visible', true);
//               });
//             }
//           },
//         }
//       }




// const apiEndpoint = "https://jsonplaceholder.typicode.com/users";

// const getData = async() => {
//   const res = await fetch(apiEndpoint);
//   const data = await res.json();
//   console.log(data);
//   return data;
// }
// getData();

// for (var i = 1; i < 8; i++) {
//     $("#UserPage").append(
//       $("<div />").dxButton({
//         text: 'Contained',
//         type: 'normal',
//         icon: 'fas fa-gear fa-xl',
//         stylingMode: 'contained',
//         width: 176,
//         height: 176,
//         onClick() {
//           DevExpress.ui.notify('The Contained button was clicked');
//         },
//       })
//     )
//   };



// for (var i = 1; i < 8; i++) {
//     $("#UserPage").append(
//       $("<img style='object-fit: cover; border-radius:50%'/>")
//         .attr("src", "./Images/4003.jpg")
//         .attr("height", "176px")
//         .attr("width", "176px")
//     )
//   };





// //==========================================================================================
//   _UserPage = $("#UserPage")
//     .dxForm({
//       // minColWidth: '200px',
//       colCount: 'auto',
//       // width: '100%',
//       colCountByScreen: {
//         lg: 5,
//         md: 4,
//         sm: 2,
//         xs: 1,
//       },
//       screenByWidth(width) {
//         return width < 480 ? 'xs' : width < 840 ? 'sm' : width < 1024 ? 'md' : 'lg';
//       },
//       items: undefined,
//     }).dxForm("instance");


// _getitems = GoItems("./data/NavMain.json");
//   //===================================================================
//   function GoItems(_objItems) {
//     _new = [];
//     $.getJSON(_objItems, function (result) {
//       result.forEach(function (rowData) {
//         _new.push({
//           'itemType': 'button',
//           'buttonOptions': {
//             'text': rowData.key,
//             'icon': 'fas fa-comment fa-xl',
//             'type': 'default',
//             'width': '200px',
//             'height': '200px',
//             'focusStateEnabled': false,
//           },
//         });
//       });
//       _UserPage.option('items', _new);
//     });
//   }





// _TabUserPage = $('#TabUserPage')
//     .dxTabs({
//       iconPosition: "top",
//       stylingMode: "primary",
//       hoverStateEnabled: true,
//       focusStateEnabled: false,
//       selectionMode: 'single',
//       activeStateEnabled: true,
//       scrollByContent: true,
//       scrollingEnabled: true,
//       showNavButtons: true,
//       selectedIndex: -1,
//       items: [
//         {
//           text: 'Authentication',
//           icon: 'fas fa-user',
//           // template: function (itemData, itemIndex, element) {
//           //   _FormSysTab = $("<div>").appendTo(element)
//           //     .dxForm({
//           //       labelMode: 'floating',
//           //       items: [
//           //         'ID', {
//           //           itemType: 'group',
//           //           caption: 'Main Information',
//           //           items: ['FirstName', 'LastName', 'HireDate', 'Position', 'OfficeNo'],
//           //         },
//           //       ],
//           //     }).dxForm('instance');
//           // },
//         },
//         {
//           text: 'Personal Data',
//           icon: 'fas fa-user',
//           // items: ['BirthDate', {
//           //   itemType: 'group',
//           //   caption: 'Home Address',
//           //   items: ['Address', 'City', 'State', 'Zipcode'],
//           // }],
//         },
//         {
//           text: 'Phone',
//           icon: 'fas fa-user',
//           // items: ['Phone'],
//         }, {
//           text: 'Skype',
//           icon: 'fas fa-user',
//           // items: ['Skype'],
//         }, {
//           text: 'Email',
//           icon: 'fas fa-user',
//           // items: ['Email'],
//         }
//       ],
//     })
//     .dxScrollView({
//       scrollByContent: true,
//       scrollByThumb: true,
//       useNative: false,
//       showScrollbar: 'onHover',
//       height: '100%',
//       width: "100%",
//     });




// _UserAuth = $('#Authentication').dxPopup({
//       title: "Authentication",
//       visible: true,
//       dragEnabled: false,
//       showCloseButton: false,
//       // container: '.dx-viewport',
//       width: () => {
//         return () => {
//           if ($(window).width() <= 480) { return "90%" } else
//             if ($(window).width() >= 481 && $(window).width() <= 640) { return "70%" } else
//               if ($(window).width() >= 641 && $(window).width() <= 980) { return "50%" } else { return "25%" };
//         };
//       },
//       height: "auto",
//       contentTemplate: () => {
//         return $("<div style='text-align: center'/>")
//           .append(
//             $("<img style='object-fit: cover; border-radius:50%'/>")
//               .attr("src", "./Images/002.jpg")
//               .attr("height", "102px")
//               .attr("width", "102px")
//           ).append(
//             $("<div />").dxForm({
//               labelMode: 'floating',
//               formData: {
//                 photo: null,
//                 username: null,
//                 password: null
//               },
//               items: [
//                 "username", "password"
//               ],
//             })
//           );
//       },
//       toolbarItems: [
//         {
//           widget: "dxButton",
//           location: "after",
//           toolbar: "top",
//           location: "right",
//           options: {
//             text: null,
//             icon: 'close',
//             stylingMode: "text",
//             activeStateEnabled: false,
//             focusStateEnabled: false,
//             onClick() {
//               _UserAuth.hide();
//             }
//           }
//         },
//         {
//           widget: "dxButton",
//           location: "after",
//           toolbar: "bottom",
//           location: "center",
//           options: {
//             text: 'LOGIN',
//             // type: 'default',
//             activeStateEnabled: false,
//             focusStateEnabled: false,
//             onClick() {
//               _UserAuth.option(
//                 'toolbarItems[1].options.type',
//                 _UserAuth.option('toolbarItems[1].options.type') === 'default' ? 'danger' : 'default'
//               );
//               _UserAuth.option(
//                 'toolbarItems[1].options.text',
//                 _UserAuth.option('toolbarItems[1].options.text') === 'LOGIN' ? 'LOGOUT' : 'LOGIN'
//               );
//               _LayoutHeader.option(
//                 'items[1].options.type',
//                 _LayoutHeader.option('items[1].options.type') === 'default' ? 'danger' : 'default'
//               );
//               _UserAuth.hide();
//             }
//           }
//         }],
//     }).dxPopup("instance");



// $("#popup").dxPopup({
//        height: 300,
//        contentTemplate: function(container){
//          var scrollView = $("<div id='scrollView'></div>");
//          var content = $("<div></div>"); 
//          scrollView.append(content);
//          content.text("test content").height(1000);
//          scrollView.dxScrollView({
//              height: '100%',
//              width: '100%'
//          });
//          container.append(scrollView);
//          return container;
//        }
// })



// const PopupAIO = $('#PopupAIO').dxPopup({
//     accessKey: undefined,
//     animation: {
//         hide: "{ type: 'slide', duration: 400, from: { position: { my: 'center', at: 'center', of: window } }, to: { position: { my: 'top', at: 'bottom', of: window } }} (iOS)",
//         show: "{ type: 'slide', duration: 400, from: { position: { my: 'top', at: 'bottom', of: window } }, to: { position: { my: 'center', at: 'center', of: window } }} (iOS)"
//     },
//     container: undefined,
//     contentComponent: null,
//     contentRender: null,
//     contentTemplate: "content",
//     copyRootClassesToWrapper: false,
//     deferRendering: true,
//     disabled: false,
//     dragAndResizeArea: undefined,
//     dragEnabled: true,
//     dragOutsideBoundary: false,
//     focusStateEnabled: true,
//     fullScreen: false,
//     height: "80vh",
//     hideOnOutsideClick: false,
//     hideOnParentScroll: false,
//     hint: undefined,
//     hoverStateEnabled: false,
//     maxHeight: null,
//     maxWidth: null,
//     minHeight: null,
//     minWidth: null,
//     onContentReady: null,
//     onDisposing: null,
//     onHidden: null,
//     onHiding: null,
//     onInitialized: null,
//     onOptionChanged: null,
//     onResize: null,
//     onResizeEnd: null,
//     onResizeStart: null,
//     onShowing: null,
//     onShown: null,
//     onTitleRendered: null,
//     position: { my: 'center', at: 'center', collision: 'fit' },
//     //{ my: 'center', at: 'center', of: window },
//     //{ my: 'center', at: 'center', of: '#target' },
//     resizeEnabled: false,
//     restorePosition: true,
//     rtlEnabled: false,
//     shading: true,
//     shadingColor: "",
//     showCloseButton: true,
//     showTitle: true,
//     tabIndex: 0,
//     title: "",
//     titleComponent: null,
//     titleRender: null,
//     titleTemplate: "title",
//     toolbarItems: [
//         {
//             component: null,
//             cssClass: undefined,
//             disabled: false,
//             html: null,
//             locateInMenu: "never",
//             location: "center",
//             menuItemComponent: null,
//             menuItemRender: null,
//             menuItemTemplate: null,
//             options: null,
//             render: null,
//             showText: "always",
//             template: null,
//             text: null,
//             toolbar: "top",
//             visible: true,
//             widget: null
//         }
//     ],
//     visible: true,
//     width: "80vw",
//     wrapperAttr: {}
// });



// //=========================================================================================================
// const GridAIO = $('#GridAIO').dxDataGrid({
//     accessKey: undefined,
//     activeStateEnabled: false,
//     allowColumnReordering: true,
//     allowColumnResizing: true,
//     autoNavigateToFocusedRow: true,
//     cacheEnabled: true,
//     cellHintEnabled: true,
//     columnAutoWidth: true,
//     columnChooser: {
//         allowSearch: false,
//         emptyPanelText: "Drag a column here to hide it",
//         enabled: true,
//         height: 260,
//         mode: "select",
//         searchTimeout: 500,
//         sortOrder: undefined,
//         title: "Column Chooser",
//         width: 250
//     },
//     columnFixing: {
//         enabled: true,
//         texts: {
//             fix: "Fix",
//             leftPosition: "To the left",
//             rightPosition: "To the right",
//             unfix: "Unfix"
//         },
//     },
//     columnHidingEnabled: false,
//     columnMinWidth: undefined,
//     columnResizingMode: "nextColumn",
//     columns: [
//         {
//             alignment: undefined,
//             allowEditing: true,
//             allowExporting: true,
//             allowFiltering: true,
//             allowFixing: true,
//             allowGrouping: true,
//             allowHeaderFiltering: true,
//             allowHiding: true,
//             allowReordering: true,
//             allowResizing: true,
//             allowSearch: true,
//             allowSorting: true,
//             autoExpandGroup: true,
//             buttons: [
//                 {
//                     component: null,
//                     cssClass: null,
//                     disabled: false,
//                     hint: null,
//                     icon: null,
//                     name: null,
//                     onClick: null,
//                     render: null,
//                     template: null,
//                     text: null,
//                     visible: true
//                 }
//             ],
//             calculateCellValue: null,
//             calculateDisplayValue: null,
//             calculateFilterExpression: null,
//             calculateGroupValue: null,
//             calculateSortValue: null,
//             caption: undefined,
//             cellComponent: null,
//             cellRender: null,
//             cellTemplate: null,
//             columns: undefined,
//             cssClass: undefined,
//             customizeText: null,
//             dataField: undefined,
//             dataType: undefined,
//             editCellComponent: null,
//             editCellRender: null,
//             editCellTemplate: null,
//             editorOptions: null,
//             encodeHtml: true,
//             falseText: false,
//             filterOperations: undefined,
//             filterType: "include",
//             filterValue: undefined,
//             filterValues: undefined,
//             fixed: false,
//             fixedPosition: undefined,
//             format: "",
//             formItem: null,
//             groupCellComponent: null,
//             groupCellRender: null,
//             groupCellTemplate: null,
//             groupIndex: undefined,
//             headerCellComponent: null,
//             headerCellRender: null,
//             headerCellTemplate: null,
//             headerFilter: {
//                 allowSearch: false,
//                 dataSource: Edit,
//                 groupInterval: undefined,
//                 height: undefined,
//                 searchMode: "contains",
//                 width: undefined
//             },
//             hidingPriority: undefined,
//             isBand: undefined,
//             lookup: {
//                 allowClearing: false,
//                 dataSource: Edit,
//                 displayExpr: undefined,
//                 valueExpr: undefined
//             },
//             minWidth: undefined,
//             name: undefined,
//             ownerBand: undefined,
//             renderAsync: false,
//             selectedFilterOperation: undefined,
//             setCellValue: null,
//             showEditorAlways: false,
//             showInColumnChooser: true,
//             showWhenGrouped: false,
//             sortIndex: undefined,
//             sortingMethod: undefined,
//             sortOrder: undefined,
//             trueText: true,
//             type: null,
//             validationRules: null,
//             visible: true,
//             visibleIndex: undefined,
//             width: undefined
//         }
//     ],
//     columnWidth: undefined,
//     customizeColumns: function (columns) {
//         columns.forEach(function (col) {
//             col.calculateDisplayValue = function (rowData) {
//                 return rowData[col.dataField] == 0 ? "-" : rowData[col.dataField];
//             };
//         });
//     },
//     dataRowComponent: null,
//     dataRowRender: null,
//     dataRowTemplate: null,
//     dataSource: [{}],
//     dateSerializationFormat: null,
//     disabled: false,
//     editing: {
//         allowAdding: false,
//         allowDeleting: false,
//         allowUpdating: false,
//         changes: [
//             {
//                 data: "",
//                 insertAfterKey: null,
//                 insertBeforeKey: null,
//                 key: null,
//                 type: null
//             }
//         ],
//         confirmDelete: true,
//         editColumnName: null,
//         editRowKey: null,
//         form: null,
//         mode: "form",
//         newRowPosition: "viewportTop",
//         popup: null,
//         refreshMode: "full",
//         selectTextOnEditStart: false,
//         startEditAction: "click",
//         texts: {
//             addRow: "Add a row",
//             cancelAllChanges: "Discard changes",
//             cancelRowChanges: "Cancel",
//             confirmDeleteMessage: "Are you sure you want to delete this record?",
//             confirmDeleteTitle: "",
//             deleteRow: "Delete",
//             editRow: "Edit",
//             saveAllChanges: "Save changes",
//             saveRowChanges: "Save",
//             undeleteRow: "Undelete",
//             validationCancelChanges: "Cancel changes"
//         },
//         useIcons: false
//     },
//     elementAttr: {},
//     errorRowEnabled: true,
//     export: {
//         allowExportSelectedData: true,
//         enabled: true,
//         formats: ['xlsx', 'pdf'],
//         texts: {
//             exportAll: "Export all data to {0}",
//             exportSelectedRows: "Export selected rows to {0}",
//             exportTo: "Export"
//         },
//     },
//     filterBuilder: {},
//     filterBuilderPopup: {},
//     filterPanel: {
//         customizeText: null,
//         filterEnabled: true,
//         texts: {
//             clearFilter: "Clear",
//             createFilter: "Create Filter",
//             filterEnabledHint: "Enable the filter"
//         },
//         visible: true
//     },
//     filterRow: {
//         applyFilter: "auto",
//         applyFilterText: "Apply filter",
//         betweenEndText: "End",
//         betweenStartText: "Start",
//         operationDescriptions: {
//             between: "Between",
//             contains: "Contains",
//             endsWith: "Ends with",
//             equal: "Equals",
//             greaterThan: "Greater than",
//             greaterThanOrEqual: "Greater than or equal to",
//             lessThan: "Less than",
//             lessThanOrEqual: "Less than or equal to",
//             notContains: "Does not contain",
//             notEqual: "Does not equal",
//             startsWith: "Starts with"
//         },
//         resetOperationText: "Reset",
//         showAllText: "",
//         showOperationChooser: true,
//         visible: true
//     },
//     filterSyncEnabled: "auto",
//     filterValue: null,
//     focusedColumnIndex: -1,
//     focusedRowEnabled: false,
//     focusedRowIndex: -1,
//     focusedRowKey: undefined,
//     grouping: {
//         allowCollapsing: true,
//         autoExpandAll: true,
//         contextMenuEnabled: false,
//         expandMode: "buttonClick",
//         texts: {},
//     },
//     groupPanel: {
//         allowColumnDragging: true,
//         emptyPanelText: "Drag a column header here to group by that column",
//         visible: true
//     },
//     headerFilter: {
//         allowSearch: false,
//         height: 325,
//         searchTimeout: 500,
//         texts: {
//             cancel: "Cancel",
//             emptyValue: "",
//             ok: "Ok"
//         },
//         visible: true,
//         width: 252
//     },
//     height: undefined,
//     highlightChanges: false,
//     hint: undefined,
//     hoverStateEnabled: true,
//     keyboardNavigation: {
//         editOnKeyPress: false,
//         enabled: true,
//         enterKeyAction: "startEdit",
//         enterKeyDirection: "none"
//     },
//     keyExpr: undefined,
//     loadPanel: {
//         enabled: "auto",
//         height: 90,
//         indicatorSrc: "",
//         shading: false,
//         shadingColor: "",
//         showIndicator: true,
//         showPane: true,
//         text: "Loading...",
//         width: 200
//     },
//     masterDetail: {
//         autoExpandAll: false,
//         component: null,
//         enabled: false,
//         render: null,
//         template: null
//     },
//     noDataText: "No data",
//     onAdaptiveDetailRowPreparing: null,
//     onCellClick: null,
//     onCellDblClick: null,
//     onCellHoverChanged: null,
//     onCellPrepared: null,
//     onContentReady: null,
//     onContextMenuPreparing: null,
//     onDataErrorOccurred: null,
//     onDisposing: null,
//     onEditCanceled: null,
//     onEditCanceling: null,
//     onEditingStart: null,
//     onEditorPrepared: null,
//     onEditorPreparing: null,
//     onExporting(e) {
//         if (e.format === 'xlsx') {
//             const workbook = new ExcelJS.Workbook();
//             const worksheet = workbook.addWorksheet('Report');
//             DevExpress.excelExporter.exportDataGrid({
//                 component: e.component,
//                 worksheet,
//                 autoFilterEnabled: true,
//             }).then(() => {
//                 workbook.xlsx.writeBuffer().then((buffer) => {
//                     saveAs(new Blob([buffer], { type: 'application/octet-stream' }), 'report.xlsx');
//                 });
//             });
//             e.cancel = true;
//         }
//         else if (e.format === 'pdf') {
//             const doc = new jsPDF('l', 'pt');
//             DevExpress.pdfExporter.exportDataGrid({
//                 jsPDFDocument: doc,
//                 component: e.component,
//             }).then(() => {
//                 doc.save('report.pdf');
//             });
//         }
//     },
//     onFocusedCellChanged: null,
//     onFocusedCellChanging: null,
//     onFocusedRowChanged: null,
//     onFocusedRowChanging: null,
//     onInitialized: null,
//     onInitNewRow: null,
//     onKeyDown: null,
//     onOptionChanged: null,
//     onRowClick: null,
//     onRowCollapsed: null,
//     onRowCollapsing: null,
//     onRowDblClick: null,
//     onRowExpanded: null,
//     onRowExpanding: null,
//     onRowInserted: null,
//     onRowInserting: null,
//     onRowPrepared: null,
//     onRowRemoved: null,
//     onRowRemoving: null,
//     onRowUpdated: null,
//     onRowUpdating: null,
//     onRowValidating: null,
//     onSaved: null,
//     onSaving: null,
//     onSelectionChanged: null,
//     onToolbarPreparing: null,
//     pager: {
//         allowedPageSizes: [5, 10, 15, 20, 25, 50, 100, 'all'],
//         displayMode: "compact",
//         infoText: "Page {0} of {1} ({2} items)",
//         label: "Page Navigation",
//         showInfo: true,
//         showNavigationButtons: true,
//         showPageSizeSelector: true,
//         visible: "true"
//     },
//     paging: {
//         enabled: true,
//         pageIndex: 0,
//         pageSize: 20
//     },
//     remoteOperations: {
//         filtering: false,
//         grouping: false,
//         groupPaging: false,
//         paging: false,
//         sorting: false,
//         summary: false
//     },
//     renderAsync: false,
//     repaintChangesOnly: false,
//     rowAlternationEnabled: false,
//     rowDragging: {
//         allowDropInsideItem: false,
//         allowReordering: false,
//         autoScroll: true,
//         boundary: undefined,
//         container: undefined,
//         cursorOffset: {
//             x: 0,
//             y: 0
//         },
//         data: Edit,
//         dragComponent: null,
//         dragDirection: "both",
//         dragRender: null,
//         dragTemplate: undefined,
//         dropFeedbackMode: "indicate",
//         group: undefined,
//         handle: "",
//         onAdd: null,
//         onDragChange: null,
//         onDragEnd: null,
//         onDragMove: null,
//         onDragStart: null,
//         onRemove: null,
//         onReorder: null,
//         scrollSensitivity: 60,
//         scrollSpeed: 30,
//         showDragIcons: true
//     },
//     rtlEnabled: false,
//     scrolling: {
//         columnRenderingMode: "standard",
//         mode: "standard",
//         preloadEnabled: false,
//         renderAsync: undefined,
//         rowRenderingMode: "standard",
//         scrollByContent: true,
//         scrollByThumb: false,
//         showScrollbar: "onHover",
//         useNative: "auto"
//     },
//     searchPanel: {
//         highlightCaseSensitive: false,
//         highlightSearchText: true,
//         placeholder: "Search...",
//         searchVisibleColumnsOnly: false,
//         text: "",
//         visible: true,
//         width: 160
//     },
//     selectedRowKeys: null,
//     selection: {
//         allowSelectAll: true,
//         deferred: false,
//         mode: "muliple",
//         selectAllMode: "allPages",
//         showCheckBoxesMode: "Click"
//     },
//     selectionFilter: [],
//     showBorders: true,
//     showColumnHeaders: true,
//     showColumnLines: true,
//     showRowLines: true,
//     sortByGroupSummaryInfo: [
//         {
//             groupColumn: undefined,
//             sortOrder: undefined,
//             summaryItem: 'count'
//         }
//     ],
//     sorting: {
//         ascendingText: "Sort Ascending",
//         clearText: "Clear Sorting",
//         descendingText: "Sort Descending",
//         mode: "multiple",
//         showSortIndexes: true
//     },
//     stateStoring: {
//         customLoad: null,
//         customSave: null,
//         enabled: false,
//         savingTimeout: 2000,
//         storageKey: null,
//         type: "localStorage"
//     },
//     summary: {
//         calculateCustomSummary: null,
//         groupItems: [
//             {
//                 alignByColumn: false,
//                 column: undefined,
//                 customizeText: null,
//                 displayFormat: undefined,
//                 name: undefined,
//                 showInColumn: undefined,
//                 showInGroupFooter: false,
//                 skipEmptyValues: null,
//                 summaryType: undefined,
//                 valueFormat: undefined
//             }
//         ],
//         recalculateWhileEditing: false,
//         skipEmptyValues: true,
//         texts: {
//             avg: "Avg={0}",
//             avgOtherColumn: "Avg of {1} is {0}",
//             count: "Count={0}",
//             max: "Max={0}",
//             maxOtherColumn: "Max of {1} is {0}",
//             min: "Min={0}",
//             minOtherColumn: "Min of {1} is {0}",
//             sum: "Sum={0}",
//             sumOtherColumn: "Sum of {1} is {0}"
//         },
//         totalItems: [
//             {
//                 alignment: undefined,
//                 column: undefined,
//                 cssClass: undefined,
//                 customizeText: null,
//                 displayFormat: undefined,
//                 name: undefined,
//                 showInColumn: undefined,
//                 skipEmptyValues: null,
//                 summaryType: undefined,
//                 valueFormat: undefined
//             }
//         ],
//     },
//     syncLookupFilterValues: true,
//     tabIndex: 0,
//     toolbar: {
//         disabled: false,
//         items: Edit,
//         visible: undefined
//     },
//     twoWayBindingEnabled: true,
//     visible: true,
//     width: undefined,
//     wordWrapEnabled: false
// });



// //========================================================================================================
// const _userauth = $('#userauth').dxTextBox({
//     accessKey: undefined,
//     activeStateEnabled: false,
//     buttons: [
//       {
//         location: "after",
//         name: "passwordBtn",
//         options: {
//           icon: 'lock',
//           type: 'default',
//           onClick: function (e) {
//             var button = e.component;
//             button.option('icon', button.option('icon') === 'lock' ? 'unlock' : 'lock');
//             _userauth.option('mode', _userauth.option('mode') === 'text' ? 'password' : 'text');
//           },
//         }
//       },
//       {
//         name: 'login',
//         location: 'after',
//         options: {
//           icon: 'arrowright',
//           text: 'Next',
//           type: 'default',
//           useSubmitBehavior: true,
//           /*
//           onClick: function () {
//             $("#boxOptions").remove();
//             $("body").prepend("<div id='gridContainer'></div>");
//             DevExpress.ui.notify(
//               {
//                 message: _userauth.option('value'),
//                 maxWidth: 300,
//                 displayTime: 3000,
//                 animation: {
//                   show: { type: 'fade', duration: 400, from: 0, to: 1 },
//                   hide: { type: 'fade', duration: 40, to: 0 },
//                 },
//               },
//               {position: "top right", direction: "down-push"}
//             );
//           },
//           */
//         }
//       }
//     ],
//     disabled: false,
//     elementAttr: {},
//     focusStateEnabled: true,
//     height: undefined,
//     hint: undefined,
//     hoverStateEnabled: true,
//     inputAttr: {},
//     isValid: true,
//     label: "User Authentication",
//     labelMode: "floating",
//     mask: "",
//     maskChar: "_",
//     maskInvalidMessage: "Value is invalid",
//     maskRules: {},
//     maxLength: null,
//     mode: "password",
//     name: "",
//     onChange: null,
//     onContentReady: null,
//     onCopy: null,
//     onCut: null,
//     onDisposing: null,
//     onEnterKey: null,
//     onFocusIn: null,
//     onFocusOut: null,
//     onInitialized: null,
//     onInput: null,
//     onKeyDown: null,
//     onKeyUp: null,
//     onOptionChanged: null,
//     onPaste: null,
//     onValueChanged: null,
//     placeholder: "",
//     readOnly: false,
//     rtlEnabled: false,
//     showClearButton: true,
//     showMaskMode: "always",
//     spellcheck: false,
//     stylingMode: "outlined",
//     tabIndex: 0,
//     useMaskedValue: true,
//     validationError: null,
//     validationErrors: null,
//     validationMessageMode: "auto",
//     validationMessagePosition: "bottom",
//     validationStatus: "valid",
//     value: null,
//     valueChangeEvent: "change",
//     visible: true,
//     width: 300
//   }).dxTextBox('instance');



//   //========================================================================================================
//   $('#MasterGridContainer').dxDataGrid({
//     keyExpr: 'A01',
//     columns: _TbDashboard,
//     columnHidingEnabled: false,
//     allowColumnReordering: true,
//     allowColumnResizing: true,
//     columnResizingMode: 'widget',
//     columnAutoWidth: true,
//     columnChooser: {
//       allowSearch: false,
//       //emptyPanelText: "Drag a column here to hide it",
//       enabled: true,
//       //height:260,
//       mode: "select",
//       searchTimeout: null,
//       sortOrder: undefined,
//       title: "Column Chooser",
//       //width:250,
//     },
//     columnFixing: {
//       enabled: true,
//     },
//     customizeColumns: function (columns) {
//       columns.forEach(function (col) {
//         // col.calculateDisplayValue = function (rowData) {
//         //   return rowData[col.dataField] == 0 ? "-" : rowData[col.dataField];
//         // };
//         col.cellTemplate = (container, options) => {
//           return $('<div />').dxButton({
//             stylingMode: 'text',
//             activeStateEnabled: true,
//             hoverStateEnabled: false,
//             focusStateEnabled: false,
//             disabled: options.value == 0 ? true : false,
//             text: options.value == 0 ? "-" : options.value,
//             type: options.value == 0 ? 'normal' : 'default',
//             onClick(e) {
//               DevExpress.ui.notify(col.dataField + ' : ' + options.value);
//             }
//           });
//         };
//       });
//     },
//     dataSource: 'data/Dashboard.json',
//     editing: {
//       mode: 'form',
//       allowUpdating: false,
//       allowAdding: false,
//       allowDeleting: false,
//       confirmDelete: true,
//       useIcons: true,
//     },
//     export: {
//       enabled: true,
//       formats: ['xlsx', 'pdf'],
//       allowExportSelectedData: true,
//     },
//     filterRow: { visible: false },
//     filterPanel: { visible: false },
//     focusedRowIndex: null,
//     focusedRowEnabled: false,
//     focusedRowKey: null,
//     groupPanel: { visible: false },
//     grouping: {
//       autoExpandAll: true,
//     },
//     hoverStateEnabled: false,
//     headerFilter: { visible: false },
//     onExporting(e) {
//       if (e.format === 'xlsx') {
//         const workbook = new ExcelJS.Workbook();
//         const worksheet = workbook.addWorksheet('Report');
//         DevExpress.excelExporter.exportDataGrid({
//           component: e.component,
//           worksheet,
//           autoFilterEnabled: true,
//         }).then(() => {
//           workbook.xlsx.writeBuffer().then((buffer) => {
//             saveAs(new Blob([buffer], { type: 'application/octet-stream' }), 'report.xlsx');
//           });
//         });
//         e.cancel = true;
//       }
//       else if (e.format === 'pdf') {
//         const doc = new jsPDF('l', 'pt');
//         DevExpress.pdfExporter.exportDataGrid({
//           jsPDFDocument: doc,
//           component: e.component,
//         }).then(() => {
//           doc.save('report.pdf');
//         });
//       }
//     },
//     // onCellClick: function (e) {
//     //   e.value == 0 ? "" : DevExpress.ui.notify(e.value);
//     // },
//     // onRowExpanding: function(e){
//     //   e.component.collapseAll(-1);
//     // },
//     paging: {
//       pageSize: 20,
//     },
//     pager: {
//       allowedPageSizes: [5, 10, 15, 20, 25, 50, 100, 'all'],
//       displayMode: "compact",
//       showInfo: true,
//       showNavigationButtons: true,
//       showPageSizeSelector: true,
//       visible: true,
//     },
//     remoteOperations: false,
//     rowAlternationEnabled: false,
//     sorting: {
//       mode: 'multiple',
//     },
//     searchPanel: {
//       visible: false,
//       highlightCaseSensitive: false,
//     },
//     selection: {
//       allowSelectAll: false,
//       deferred: false,
//       mode: "multiple",
//       selectAllMode: "allPages",
//       showCheckBoxesMode: "click"
//     },
//     showBorders: true,
//     showColumnHeaders: true,
//     showColumnLines: true,
//     showRowLines: true,
//     sortByGroupSummaryInfo: [{ summaryItem: 'count' }],
//     summary: _TBSummaryDashboard,
//     toolbar: undefined,
//     wordWrapEnabled: false,
//     // masterDetail: {
//     //   enabled: true,
//     //   template(container, options) {
//     //     $("<div>").dxDataGrid({
//     //       dataSource: 'data/info_pd.json',
//     //       // dataSource: $.getJSON("data/info_pd.json", function (jsondata) {
//     //       //   jsondata = jsondata.filter(function (obj) {
//     //       //     return obj.A01.includes(options.data.A01);
//     //       //   });
//     //       // }),
//     //       columns: _TbInfoPd,
//     //       filterValue: ["A01", "contains", options.data.A01],
//     //       showBorders: true,
//     //       showColumnHeaders: true,
//     //       showColumnLines: true,
//     //       showRowLines: true,
//     //       columnHidingEnabled: false,
//     //       allowColumnReordering: true,
//     //       allowColumnResizing: true,
//     //       columnResizingMode: 'widget',
//     //       columnAutoWidth: true,
//     //       wordWrapEnabled: false,
//     //       columnChooser: {
//     //         allowSearch: false,
//     //         //emptyPanelText:"Drag a column here to hide it",
//     //         enabled: true,
//     //         //height:260,
//     //         mode: "select",
//     //         //searchTimeout:500,
//     //         sortOrder: undefined,
//     //         title: "Column Chooser",
//     //         //width:250,
//     //       },
//     //       columnFixing: {
//     //         enabled: true,
//     //       },
//     //       hoverStateEnabled: false,
//     //       paging: {
//     //         pageSize: 5,
//     //       },
//     //       pager: {
//     //         allowedPageSizes: [5, 10, 15, 20, 25, 50, 100, 'all'],
//     //         displayMode: "compact",
//     //         showInfo: true,
//     //         showNavigationButtons: true,
//     //         showPageSizeSelector: true,
//     //         visible: true,
//     //       },
//     //       editing: {
//     //         mode: 'row',
//     //         allowUpdating: false,
//     //         allowAdding: false,
//     //         allowDeleting: false,
//     //         confirmDelete: true,
//     //         useIcons: true,
//     //       },
//     //       export: {
//     //         enabled: true,
//     //         formats: ['xlsx', 'pdf'],
//     //         allowExportSelectedData: true,
//     //       },
//     //       onExporting(e) {
//     //         if (e.format === 'xlsx') {
//     //           const workbook = new ExcelJS.Workbook();
//     //           const worksheet = workbook.addWorksheet('Report');
//     //           DevExpress.excelExporter.exportDataGrid({
//     //             component: e.component,
//     //             worksheet,
//     //             autoFilterEnabled: true,
//     //           }).then(() => {
//     //             workbook.xlsx.writeBuffer().then((buffer) => {
//     //               saveAs(new Blob([buffer], { type: 'application/octet-stream' }), 'report.xlsx');
//     //             });
//     //           });
//     //           e.cancel = true;
//     //         }
//     //         else if (e.format === 'pdf') {
//     //           const doc = new jsPDF('l', 'pt');
//     //           DevExpress.pdfExporter.exportDataGrid({
//     //             jsPDFDocument: doc,
//     //             component: e.component,
//     //           }).then(() => {
//     //             doc.save('report.pdf');
//     //           });
//     //         }
//     //       },
//     //       remoteOperations: false,
//     //       sorting: {
//     //         mode: 'multiple',
//     //       },
//     //       searchPanel: {
//     //         visible: true,
//     //         highlightCaseSensitive: false,
//     //       },
//     //       selection: {
//     //         allowSelectAll: true,
//     //         deferred: false,
//     //         mode: "multiple",
//     //         selectAllMode: "allPages",
//     //         showCheckBoxesMode: "click"
//     //       },
//     //       filterRow: { visible: true },
//     //       filterPanel: { visible: false },
//     //       headerFilter: { visible: false },
//     //       groupPanel: { visible: false },
//     //       grouping: {
//     //         autoExpandAll: true,
//     //       },
//     //       wordWrapEnabled: false,
//     //       //sortByGroupSummaryInfo: [{ summaryItem: 'count' }],
//     //       //summary: _TBSummaryDashboard,
//     //       //toolbar: undefined,
//     //       rowAlternationEnabled: false,
//     //     }).appendTo(container);
//     //   }
//     // },
//   //});.dxDataGrid('instance');



// //===========================================================================================
// /*
// masterDetail: {
//       enabled: true,
//       template(container, options) {
//         $("<div>").dxDataGrid({
//           dataSource: 'data/info_pd.json',
//           // dataSource: $.getJSON("data/info_pd.json", function (jsondata) {
//           //   jsondata = jsondata.filter(function (obj) {
//           //     return obj.A01.includes(options.data.A01);
//           //   });
//           // }),
//           columns: _TbInfoPd,
//           filterValue: ["A01", "contains", options.data.A01],
//           showBorders: true,
//           showColumnHeaders: true,
//           showColumnLines: true,
//           showRowLines: true,
//           columnHidingEnabled: false,
//           allowColumnReordering: true,
//           allowColumnResizing: true,
//           columnResizingMode: 'widget',
//           columnAutoWidth: true,
//           wordWrapEnabled: false,
//           columnChooser: {
//             allowSearch: false,
//             //emptyPanelText:"Drag a column here to hide it",
//             enabled: true,
//             //height:260,
//             mode: "select",
//             //searchTimeout:500,
//             sortOrder: undefined,
//             title: "Column Chooser",
//             //width:250,
//           },
//           columnFixing: {
//             enabled: true,
//           },
//           hoverStateEnabled: true,
//           paging: {
//             pageSize: 5,
//           },
//           pager: {
//             allowedPageSizes: [5, 10, 15, 20, 25, 50, 100, 'all'],
//             displayMode: "compact",
//             showInfo: true,
//             showNavigationButtons: true,
//             showPageSizeSelector: true,
//             visible: true,
//           },
//           editing: {
//             mode: 'row',
//             allowUpdating: false,
//             allowAdding: false,
//             allowDeleting: false,
//             confirmDelete: true,
//             useIcons: true,
//           },
//           export: {
//             enabled: true,
//             formats: ['xlsx', 'pdf'],
//             allowExportSelectedData: true,
//           },
//           onExporting(e) {
//             if (e.format === 'xlsx') {
//               const workbook = new ExcelJS.Workbook();
//               const worksheet = workbook.addWorksheet('Report');
//               DevExpress.excelExporter.exportDataGrid({
//                 component: e.component,
//                 worksheet,
//                 autoFilterEnabled: true,
//               }).then(() => {
//                 workbook.xlsx.writeBuffer().then((buffer) => {
//                   saveAs(new Blob([buffer], { type: 'application/octet-stream' }), 'report.xlsx');
//                 });
//               });
//               e.cancel = true;
//             }
//             else if (e.format === 'pdf') {
//               const doc = new jsPDF('l', 'pt');
//               DevExpress.pdfExporter.exportDataGrid({
//                 jsPDFDocument: doc,
//                 component: e.component,
//               }).then(() => {
//                 doc.save('report.pdf');
//               });
//             }
//           },

//           remoteOperations: false,
//           sorting: {
//             mode: 'multiple',
//           },
//           searchPanel: {
//             visible: true,
//             highlightCaseSensitive: false,
//           },
//           selection: {
//             allowSelectAll: true,
//             deferred: false,
//             mode: "multiple",
//             selectAllMode: "allPages",
//             showCheckBoxesMode: "click"
//           },
//           filterRow: { visible: true },
//           filterPanel: { visible: false },
//           headerFilter: { visible: false },
//           groupPanel: { visible: false },
//           grouping: {
//             autoExpandAll: true,
//           },
//           wordWrapEnabled: false,
//           //sortByGroupSummaryInfo: [{ summaryItem: 'count' }],
//           //summary: _TBSummaryDashboard,
//           //toolbar: undefined,
//           rowAlternationEnabled: false,
          
//         }).appendTo(container);
//       }
//     }


// //============================================================================================
// $(function() {
// var customDataSource = new DevExpress.data.CustomStore({
//   key: "ID",
//   load: function() {
//     var d = $.Deferred();
//     return $.getJSON(
//       "https://raw.githubusercontent.com/20536207/Informasi-Peserta-Didik/main/data/info_pd.json", 
//       { 
//         "param1": "value1",
//         "param2": "value2"
//       }
//     )
//     .done(function(result) {
//         // You can process the response here
//         d.resolve(result);
//     })
//     .fail(function() {
//       throw "Data loading error";
//     });
// },
//   insert: function(values) {
//       var deferred = $.Deferred();
//       $.ajax({
//           url: "data/info_pd.json",
//           method: "POST",
//           data: JSON.stringify(values)
//       })
//       .done(deferred.resolve)
//       .fail(function(e){
//           deferred.reject("Insertion failed");
//       });
//       return deferred.promise();
//   },
//   remove: function(key) {
//       var deferred = $.Deferred();
//       $.ajax({
//           url: "data/info_pd.json" + encodeURIComponent(key),
//           method: "DELETE"
//       })
//       .done(deferred.resolve)
//       .fail(function(e){
//           deferred.reject("Deletion failed");
//       });
//       return deferred.promise();
//   },
//   update: function(key, values) {
//       var deferred = $.Deferred();
//       $.ajax({
//           url: "data/info_pd.json" + encodeURIComponent(key),
//           method: "PUT",
//           data: JSON.stringify(values)
//       })
//       .done(deferred.resolve)
//       .fail(function(e){
//           deferred.reject("Update failed");
//       });
//       return deferred.promise();
//   }
// }
// });



// //==========================================================================
// ToolbarInfoPD = [
//         {
//             location: 'before',
//             widget: 'dxTextBox',
//             options: {
//                 accessKey: undefined,
//                 activeStateEnabled: true,
//                 component: null,
//                 disabled: false,
//                 elementAttr: {},
//                 focusStateEnabled: true,
//                 height: undefined,
//                 hint: undefined,
//                 hoverStateEnabled: true,
//                 icon: "unlock",
//                 onClick(e){
//                     const _secure = e.component.option('icon') === 'lock';
//                     //dataGrid.option('grouping.autoExpandAll', _secure);
//                     e.component.option('text', _secure ? 'unlock' : 'lock');
//                     e.component.option('icon', _secure ? 'unlock' : 'lock');
//                     DevExpress.ui.notify('button has been clicked!');
//                 },
//                 onContentReady: null,
//                 onDisposing: null,
//                 onInitialized: null,
//                 onOptionChanged: null,
//                 render: null,
//                 rtlEnabled: false,
//                 stylingMode: "contained",
//                 tabIndex: 1,
//                 template: "",
//                 text: "unlocked",
//                 type: "default",
//                 useSubmitBehavior: true,
//                 validationGroup: undefined,
//                 visible: true,
//                 width: undefined
//             },
//         },
//     ]
// */

// _popup = function () {
  //   $("<div>").dxPopup({
  //     contentTemplate: function () {
  //       return $("<div id='Gallerian' />").dxGallery({
  //         dataSource: [
  //           'images/001.jpg',
  //           'images/002.jpg',
  //           'images/003.jpg',
  //         ],
  //         loop: true,
  //         slideshowDelay: 2000,
  //         showNavButtons: false,
  //         showIndicator: false,
  //       })
  //         .dxScrollView({
  //           height: "100%",
  //           width: "100%"
  //         });
  //     },
  //     hideOnOutsideClick: true,
  //     hideOnParentScroll: true,
  //     showTitle: true,
  //     title: "Information",
  //     resizeEnabled: false,
  //     dragEnabled: false,
  //     position: { my: 'center', at: 'center', collision: 'fit' },
  //     width: 325,
  //     height: 265,
  //     visible: true,
  //   }).dxPopup("instance");
  // };

  // _ActionSheet = $('#ActionSheet').dxActionSheet({
  //   dataSource: undefined,
  //   title: null,
  //   showTitle: true,
  //   showCancelButton: true,
  //   visible: false,
  //   usePopover: true,
  //   width: undefined,
  //   onCancelClick() {
  //     this.option('dataSource', undefined);
  //     this.option('title', null);
  //     return false;
  //   },
  //   onItemClick(value) {
  //     DevExpress.ui.notify(
  //       {
  //         message: value.itemData.text,
  //         maxWidth: 300,
  //         displayTime: 1000,
  //         animation: {
  //           show: { type: 'fade', duration: 400, from: 0, to: 1 },
  //           hide: { type: 'fade', duration: 40, to: 0 },
  //         },
  //       },
  //       { position: "top right", direction: "down-push" }
  //     );
  //   }
  // }).dxActionSheet('instance');

  // ,{
      //   widget: 'dxButton',
      //   location: 'after',
      //   locateInMenu: 'never',
      //   cssClass: undefined,
      //   text: null,
      //   visible: true,
      //   options: {
      //     text: 'locked',
      //     icon: 'lock',
      //     // template: '<div class="fas fa-lock"></div>',
      //     hoverStateEnabled: true,
      //     focusStateEnabled: false,
      //     activeStateEnabled: true,
      //     selectionMode: 'none',
      //     type: 'normal',
      //     stylingMode: "text",
      //     // height: undefined,
      //     // width: undefined,
      //     onClick() {
      //       // _LayoutContains.toggle();
      //     },
      //   }
      // }


      // const _PageContains = $('#PageContains').dxScrollView({
  //   direction: 'both',
  //   scrollByContent: true,
  //   scrollByThumb: true,
  //   showScrollbar: 'onHover',
  //   usenative: true,
  //   width: 'inherit',
  //   height: 'inherit',
  // }).dxScrollView('instance');

  //========================================================================================================
  // _LayoutFooter = $('#LayoutFooter').dxTabs({
  //   dataSource: "./data/NavTaskbar.json",
  //   hoverStateEnabled: true,
  //   focusStateEnabled: false,
  //   selectionMode: 'none',
  //   selectedIndex: -2,
  //   onItemClick(e) { //itemData, itemIndex, itemElement
  //     switch (e.itemIndex) {
  //       case -1:
  //         _LayoutContains.toggle();
  //         break;
  //       case 0:
  //         $("#PageContains").load(e.itemData.loadpage);
  //         _PageToolbar.option("items[-1].text", e.itemData.text);
  //         break;
  //       case 1:
  //         data = $.getJSON("./data/NavTaskbar.json", function (jsondata) {
  //           jsondata.forEach((element, index) => {
  //             DevExpress.ui.notify(item);
  //           });
  //         });
  //         _PageToolbar.option("items[-1].text", data.itemData.text);
  //         break;
  //       default:
  //         break;
  //     }
  //     // if (e.itemIndex == -1) {
  //     //   _LayoutContains.toggle();
  //     // } else {
  //     //   $("#PageContains").load(e.itemData.loadpage);
  //     //   _PageToolbar.option("items[-1].text", e.itemData.text);
  //     // }

  //     // _ActionSheet.option('usePopover', $(window).width() < 599 ? false : true);
  //     // _ActionSheet.option('target', e.itemElement);
  //     // _ActionSheet.option('title', e.itemData.text);
  //     // _ActionSheet.option('visible', true);
  //     // _LayoutFooter.option('selectedIndex', -2);

  //   },
  // }).dxTabs('instance');


  // _ListPlatform = $("<div>").dxList({
    //     dataSource: "./data/HomeLinkedPlatform.json",
    //     focusStateEnabled: false,
    //     activeStateEnabled: false,
    //     grouped: true,
    //     collapsibleGroups: false,
    //     showSelectionControls: false,
    //     useNativeScrolling: false,
    //     groupTemplate(data) {
    //         return $(`<div style="color: rgba(28, 168, 221, 1)">${data.dev}</div>`);
    //     },
    //     itemTemplate(data) {
    //         return $(`<div>${data.product}</div>`);
    //     },
    //     width: '100%',
    //     selectionMode: "none",
    //     onItemClick(e) {
    //         window.open(e.itemData.target, '_blank')
    //     },
    // });



// _HomeLinkedPlatform = $('#HomeLinkedPlatform').dxMultiView({
//         dataSource: "./data/HomeLinkedPlatform.json",
//         onContentReady: function (e) {
//             $.getJSON(e.component.option('dataSource'), function (jsondata) {
//                 $('.HomeLinkedPlatform-item-count').text(jsondata.length);
//             });
//         },
//         // selectedIndex: 0,
//         loop: true,
//         // animationEnabled: true,
//         onSelectionChanged(e) {
//             $('.selected-index')
//                 .text(e.component.option('selectedIndex') + 1);
//         },
//         itemTemplate: function (devdata, devindex, develement) {
//             develement.append(
//                 "<div class='HomeLinkedPlatform-dev'>" +
//                 "<b>" + devdata.dev + "</b><br>" +
//                 "<i>" + devdata.detail + "</i>" +
//                 "</div>"
//             );

//             devdata.items.forEach(function (productdata, productindex, productelement) {
//                 develement.append(
//                     $("<div>").dxButton({
//                         stylingMode: 'text',
//                         type: 'normal',
//                         width: '100%',
//                         focusStateEnabled: false,
//                         activeStateEnabled: true,
//                         onClick() {
//                             window.open(productdata.target, '_blank')
//                         },
//                         template() {
//                             return (
//                                 "<div class='HomeLinkedPlatform-item-detail'>" +
//                                 "<a>" + productdata.product + "</a>" +
//                                 "<br><i>" + productdata.detail + "</i>" +
//                                 "</div>"
//                             );
//                         },
//                     })
//                 )
//             });
//         },
//     });



    // b = ""
            // devdata.items.forEach(function (productdata, productindex, productelement) {
            // b = b +
            //     "<div class='HomeLinkedPlatform-layout'>" +
            //     "<div class='HomeLinkedPlatform-item'>" +
            //     //===========================================================
            //     // "<a target='_blank' href=" + productdata.target + ">" +
            //     // "<img src=" + productdata.icon + " />" +
            //     // "</a>" +
            //     // "<div class='HomeLinkedPlatform-item-detail'>" +
            //     // "<div>" + productdata.product + "</div>" +
            //     // "<br><i>" + productdata.detail + "</i><br><br>"+
            //     // "</div>" +
            //     //===========================================================
            //     // "<a target='_blank' href=" + productdata.target + ">" +productdata.product+"</a>"+
            //     // "<br><i>" + productdata.detail + "</i><br><br>"+
            //     //===========================================================

            //     //===========================================================
            //     "</div>" +
            //     "</div>"
            // });
            // develement.append(a);


// <!-- <div class="HomeLinkedPlatform-paging">
//     <b>Pintasan Manajemen Data : </b>
//     <span class="selected-index">1</span> of <span class="HomeLinkedPlatform-item-count"></span>
// </div> -->



// <!-- <iframe class='Introduction' src='https://pubhtml5.com/bookcase/ssxdv/silver' seamless='seamless' scrolling='no'
//     frameborder='0' allowtransparency='true' allowfullscreen>
// </iframe> -->

// <!-- src="https://www.youtube.com/embed/videoseries?list=PLasucyBLR_zCPhyGpg0n4X6jfYfI23zBW&autoplay=0&mute=1&loop=1" -->
// <!-- src="https://googledriveembedder.collegefam.com/?key=AIzaSyB8nuwb4z7YOFftmhwzCVmYduqTwvvNfpg&folderid=1jRia9a9LhFbNTLMGhKDK7bm0fOq2CBJ4" -->

/*===================================================================================*/
// function GoEncrypt(_Contains, _Key) {
//   return CryptoJS.TripleDES.encrypt(_Contains.toString(), _Key).toString();
// }

/*===================================================================================*/
// function GoDecrypt(_Contains, _Key) {
//   return CryptoJS.TripleDES.decrypt(_Contains, _Key).toString(CryptoJS.enc.Utf8);
// }


//===============================================================================
// const _ActionSheet = $('#ActionSheet').dxActionSheet({
//     dataSource: undefined,
//     title: null,
//     showTitle: true,
//     showCancelButton: true,
//     visible: false,
//     usePopover: true,
//     width: undefined,
//     onCancelClick() {
//         this.option('dataSource', undefined);
//         this.option('title', null);
//         return false;
//     },
//     onItemClick(e) {
//         _PageToolbar.option("items[1].text", e.itemData.text);
//         _PageToolbar.option("items[2].visible", false);

//         // _LayoutHeader.option("items[0].options.disabled", true);
//         $("#PageContains").empty();
//         _actPageContains = e.itemData["target"];
//         return $("#PageContains").load(_actPageContains);
//     }
// }).dxActionSheet('instance');

//===============================================================================



//   <!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.0.379/pdf_viewer.mjs" type="module"></script> -->
//   <!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.2.10/pdfmake.min.js"></script> -->

//   <!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/devextreme-quill/1.7.0/dx-quill.min.js"></script> -->
//   <!-- <script src="https://unpkg.com/devextreme-quill@1.6.2/dist/dx-quill.min.js"></script> -->

//   <!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/7.12.1/polyfill.min.js"></script> -->