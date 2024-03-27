//=======================================================
$(document).ready(function () {
    window.jsPDF = window.jspdf.jsPDF;
    _appConfig = {
        app: {
            title: "e-Platform ( 20536207 )",
            iconUrl: "/assets/images/LOGO20536207.png",
            appname: "e-Platform AIO",
            appver: "20536207.01",
        }
    };
    _userConfig = {
        user: {
            cred: null,
            email: "",
            Pict: "",
            name: "",
            org: "viewer",
            desc: "user non organization",
        }
    };
    _arrVarGlobal = {
        _actPageContains: null,
        _PdfFilePageContains: null,
        _ParentPageContains: null
    };

    //App Head =================================================
    _titleApp = document.createElement('title');
    _titleApp.innerHTML = _appConfig.app.title;
    document.head.appendChild(_titleApp);

    let _iconApp = document.createElement('link');
    _iconApp.rel = "icon";
    _iconApp.type = "image/icon type";
    _iconApp.href = _appConfig.app.iconUrl;
    document.head.appendChild(_iconApp);
    document.getElementById("LayoutFooter").innerHTML = "<i class='far fa-copyright'></i> 2022 SD Negeri Tisnonegaran 1 Probolinggo";

    //Item Header =================================================
    const _LayoutHeader = $("#LayoutHeader").dxToolbar({
        items: [
            {
                location: "before", //before|center|after
                widget: "dxButton", //dxButton|dxButtonGroup|dxToolbar|dxTabs
                locateInMenu: "never", //auto|never|always
                visible: true,
                options: {
                    index: 0,
                    elementAttr: { id: "elHeader-" + (0).toString().padStart(3, "0"), },
                    icon: "fab fa-windows",
                    text: _appConfig.app.appname,
                    template: undefined,
                    label: "",
                    hint: "",
                    stylingMode: "text", //text|outlined|contained
                    type: "normal", //normal|default|danger|success
                    hoverStateEnabled: false,
                    focusStateEnabled: false,
                    activeStateEnabled: true,
                    disabled: false,
                    visible: true,
                    onClick: () => {
                        if (_userConfig.user.email != "" && _userConfig.user.name != "") {
                            _LayoutContains.toggle();
                        };
                    }
                },
            },
            {
                location: "before", //before|center|after
                widget: "dxButton", //dxButton|dxButtonGroup|dxToolbar|dxTabs
                locateInMenu: "auto", //auto|never|always
                visible: true,
                options: {
                    index: 1,
                    elementAttr: { id: "elHeader-" + (1).toString().padStart(3, "0"), },
                    icon: "",
                    text: "ver. " + _appConfig.app.appver,
                    template: undefined,
                    label: "",
                    hint: "",
                    stylingMode: "outlined", //text|outlined|contained
                    type: "normal", //normal|default|danger|success
                    hoverStateEnabled: false,
                    focusStateEnabled: false,
                    activeStateEnabled: true,
                    disabled: false,
                    visible: true,
                    onClick: undefined,
                },
            },
            {
                location: "after", //before|center|after
                widget: "dxButton", //dxButton|dxButtonGroup|dxToolbar|dxTabs
                locateInMenu: "never", //auto|never|always
                visible: true,
                options: {
                    index: 2,
                    elementAttr: { id: "elHeader-" + (2).toString().padStart(3, "0"), },
                    // icon: "fas fa-circle-user",
                    text: "",
                    template: '<a class="fas fa-circle-user fa-2x"></a>',
                    label: "",
                    hint: "",
                    stylingMode: "text", //text|outlined|contained
                    type: "noramal", //normal|default|danger|success
                    hoverStateEnabled: false,
                    focusStateEnabled: false,
                    activeStateEnabled: true,
                    disabled: false,
                    visible: true,
                    onClick() {
                        _PageToolbar.option("items[1].text", "e-Platform Account");
                        _PageToolbar.option("items[2].visible", false);

                        $("#PageContains").empty();
                        _arrVarGlobal._actPageContains = "/master/User/User_MainPage.html";
                        $("#PageContains").load(_arrVarGlobal._actPageContains);
                    },
                },
            },
        ]
    }).dxToolbar("instance");

    //Layout Contains =================================================
    _LayoutContains = $('#LayoutContent').dxDrawer({
        opened: false,
        animationEnabled: false,
        revealMode: "slide", //"slide | expand"
        openedStateMode: $(window).width() < 980 ? "overlap" : "shrink", //shrink //overlap
        position: 'left', //right
        shading: $(window).width() < 600 ? true : false,
        closeOnOutsideClick: true,
    }).dxDrawer('instance');
    _PageSidebar("/data/NavMain.json");


    //Item PageToolbar =================================================
    _PageToolbar = $("#PageToolbar").dxToolbar({
        items: [
            {
                location: "before", //before|center|after
                widget: "dxButton", //dxButton|dxButtonGroup|dxToolbar|dxTabs
                locateInMenu: "never", //auto|never|always
                visible: true,
                cssClass: "items-before",
                options: {
                    index: 0,
                    elementAttr: { id: "elPageToolbar-" + (0).toString().padStart(3, "0"), },
                    icon: "fas fa-right-from-bracket fa-rotate-180",
                    text: "",
                    template: undefined,
                    label: "",
                    hint: "",
                    stylingMode: "text", //text|outlined|contained
                    type: "normal", //normal|default|danger|success
                    hoverStateEnabled: false,
                    focusStateEnabled: false,
                    activeStateEnabled: true,
                    disabled: false,
                    visible: true,
                    onClick() {
                        _PageToolbar.option("items[2].visible", false);
                        $("#PageContains").empty();
                        _arrVarGlobal._actPageContains = _arrVarGlobal._ParentPageContains;
                        $("#PageContains").load(_arrVarGlobal._actPageContains);
                    },
                },
            },
            {
                location: "before", //before|center|after
                // widget: "dxButton", //dxButton|dxButtonGroup|dxToolbar|dxTabs
                locateInMenu: "never", //auto|never|always
                visible: true,
                text: "actPageContains",
                cssClass: "Page-Title",
                options: {
                },
            },
            {
                location: "after", //before|center|after
                widget: "dxButtonGroup", //dxButton|dxButtonGroup|dxToolbar|dxTabs
                locateInMenu: "auto", //auto|never|always
                visible: false,
                cssClass: "items-after",
                options: {},
            },
            {
                location: "after", //before|center|after
                widget: "dxButton", //dxButton|dxButtonGroup|dxToolbar|dxTabs
                locateInMenu: "never", //auto|never|always
                visible: true,
                cssClass: "items-after",
                options: {
                    index: 3,
                    elementAttr: { id: "elPageToolbar-" + (3).toString().padStart(3, "0"), },
                    icon: "fas fa-refresh",
                    text: "",
                    template: undefined,
                    label: "",
                    hint: "",
                    stylingMode: "text", //text|outlined|contained
                    type: "normal", //normal|default|danger|success
                    hoverStateEnabled: false,
                    focusStateEnabled: false,
                    activeStateEnabled: true,
                    disabled: false,
                    visible: true,
                    onClick() {
                        _PageToolbar.option("items[2].visible", false);

                        $("#PageContains").empty();
                        $("#PageContains").load(_arrVarGlobal._actPageContains);
                    },
                },
            },
        ]
    }).dxToolbar("instance");

    //==============================================================================
    _arrVarGlobal._actPageContains = "/master/Homepage/Homepage_Home.html";
    $("#PageContains").empty();
    $("#PageContains").load(_arrVarGlobal._actPageContains);

    //=======================================================
    $(window).resize(function () {
        _LayoutContains.option('openedStateMode', $(window).width() < 960 ? "overlap" : "shrink");
    });

});

//=== Sidebar ======================================================================
function _PageSidebar(_dataSource) {
    _LayoutContains.option("template",
        () => {
            return $("<div>").dxList({
                keyExpr: "key",
                dataSource: _dataSource,
                elementAttr: { class: "ContainsSidebar", },
                hoverStateEnabled: false,
                focusStateEnabled: false,
                activeStateEnabled: true,
                grouped: true,
                collapsible: false,
                collapsibleGroups: true,
                showSelectionControls: false,
                scrollByContent: true,
                scrollByThumb: true,
                useNativeScrolling: false,
                groupTemplate(data) {
                    return $(`<a>${data.key}</a>`);
                },
                width: 265,
                selectionMode: "single",
                onItemClick(e) {
                    _PageToolbar.option("items[1].text", e.itemData.text);
                    _PageToolbar.option("items[2].visible", false);
                    _LayoutContains.toggle();

                    $("#PageContains").empty();
                    _arrVarGlobal._actPageContains = e.itemData["target"];
                    _arrVarGlobal._PdfFilePageContains = "/master/AIOPdfPageContains/PdfPageContains/" + e.itemData["text"].replace(" ", "") + ".pdf";
                    $("#PageContains").load(_arrVarGlobal._actPageContains);
                },
            });
        }
    );

};

//=== NOTIFY ======================================================================
function _notify(_message) {
    return DevExpress.ui.notify(
        {
            message: _message,
            maxWidth: 300,
            displayTime: 2500,
            animation: {
                show: { type: 'fade', duration: 400, from: 0, to: 1 },
                hide: { type: 'fade', duration: 40, to: 0 },
            },
        },
        { position: "top right", direction: "down-push" }
    );
};