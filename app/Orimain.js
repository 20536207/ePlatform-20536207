//=======================================================
$(document).ready(function () {
    window.jsPDF = window.jspdf.jsPDF;

    _main = {
        appConfig: {
            app: {
                title: "e-Platform ( 20536207 )",
                iconUrl: "/assets/images/LOGO20536207.png",
                appname: "e-Platform AIO",
                appver: "20536207.01",
                owner: "SD NEGERI TISNONEGARAN 1 PROBOLINGGO",
                createdYear: "2022",
            },
            gapi: {
                clientId: "237444192144-2gf7p8ombdcbtl6ti7udeu7pkd8m7d6j.apps.googleusercontent.com",
                apiKey: "AIzaSyD3AQeI27SHVw8W9lhw864Vq85e83n9TyI",
                discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"],
                scope: "https://www.googleapis.com/auth/drive",
            },
            dataSource: {
                Kesiswaan: "15SkVrus9I9rb79E3Hf6EninYthneYxIKJfw8OvIMMUc", //SpreadsheetID
                Kepegawaian: "1CKt_wRc7-pJ9mCvyASKJ9TK11lDqMllZfXzVIsm5mgg",
                User: "1oWTnHGFKF8X-YgnAZjT2YwtXuRpVSfBnCVtKHxFBEWY",
            },
        },
        account: {
            user: {
                id: null,
                name: null,
                email: null,
                org: null,
                desc: null,
                pict: null,
                cred: null,
            },
            initialize: {
                client_id: "237444192144-2gf7p8ombdcbtl6ti7udeu7pkd8m7d6j.apps.googleusercontent.com",
                auto_select: true,
                callback: onSignIn,
                // login_uri:"./login",
                // native_callback:"onSignIn",
                cancel_on_tap_outside: false,
                // prompt_parent_id: "elHeader-002",
                auto_prompt: true,
                // nonce:"_*keyunique",
                context: "use",
                // state_cookie_domain:"_*.domain",
                // ux_mode: "popup",
                // allowed_parent_origin: "_*.domain",
                // intermediate_iframe_close_callback:"logBeforeClose",
                itp_support: true,
                // login_hint:"",
                // hd:"*",
                use_fedcm_for_prompt: true,
            },
        },
        arrVarGlobal: {
            _actPageContains: null,
            _PdfFilePageContains: null,
            _ParentPageContains: null,
            _data: null,
            _dataArray: [],
            _dataObject: {},
        },
    };

    //App Head =================================================
    let _titleApp = document.createElement('title');
    _titleApp.innerHTML = _main.appConfig.app.title;
    document.head.appendChild(_titleApp);

    let _iconApp = document.createElement('link');
    _iconApp.rel = "icon";
    _iconApp.type = "image/icon type";
    _iconApp.href = _main.appConfig.app.iconUrl;
    document.head.appendChild(_iconApp);
    document.getElementById("LayoutFooter").innerHTML = "<i class='far fa-copyright'></i> " + _main.appConfig.app.createdYear + " " + _main.appConfig.app.owner;

    _element = {
        //Item Header =================================================
        LayoutHeader:
            $("#LayoutHeader").dxToolbar({
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
                            text: _main.appConfig.app.appname,
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
                                if (_main.account.user.email != null && _main.account.user.name != null) {
                                    _element.LayoutContains.toggle();
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
                            text: "ver. " + _main.appConfig.app.appver,
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
                                google.accounts.id.initialize(_main.account.initialize);
                                google.accounts.id.prompt();

                                // _element.PageToolbar.option("items[1].text", "e-Platform Account");
                                // _element.PageToolbar.option("items[2].visible", false);

                                // $("#PageContains").empty();
                                // _main.arrVarGlobal._actPageContains = "/master/User/User_MainPage.html";
                                // $("#PageContains").load(_main.arrVarGlobal._actPageContains);

                                
                                // _element.PageToolbar.option("items[1].text", "e-Platform Account");
                                // _element.PageToolbar.option("items[2].visible", false);

                                // $("#PageContains").empty();
                                // _main.arrVarGlobal._actPageContains = "/master/User/User_MainPage.html";
                                // $("#PageContains").load(_main.arrVarGlobal._actPageContains);
                            },
                        },
                    },
                ]
            }).dxToolbar("instance"),

        //Layout Contains =================================================
        LayoutContains: $('#LayoutContent').dxDrawer({
            opened: false,
            animationEnabled: false,
            revealMode: "slide", //"slide | expand"
            openedStateMode: $(window).width() < 980 ? "overlap" : "shrink", //shrink //overlap
            position: 'left', //right
            shading: $(window).width() < 600 ? true : false,
            closeOnOutsideClick: true,
        }).dxDrawer('instance'),

        //Item PageToolbar =================================================
        PageToolbar: $("#PageToolbar").dxToolbar({
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
                            _element.PageToolbar.option("items[2].visible", false);
                            $("#PageContains").empty();
                            _main.arrVarGlobal._actPageContains = _main.arrVarGlobal._ParentPageContains;
                            $("#PageContains").load(_main.arrVarGlobal._actPageContains);
                        },
                    },
                },
                {
                    location: "before", //before|center|after
                    // widget: "dxButton", //dxButton|dxButtonGroup|dxToolbar|dxTabs
                    locateInMenu: "never", //auto|never|always
                    visible: true,
                    text: "",
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
                            _element.PageToolbar.option("items[2].visible", false);

                            $("#PageContains").empty();
                            $("#PageContains").load(_main.arrVarGlobal._actPageContains);
                        },
                    },
                },
            ]
        }).dxToolbar("instance"),
    };

    //==============================================================================
    _PageSidebar("/data/NavMain.json");
    _main.arrVarGlobal._actPageContains = "/master/Homepage/Homepage_Home.html";
    $("#PageContains").empty();
    $("#PageContains").load(_main.arrVarGlobal._actPageContains);
    $(window).resize(function () {
        _element.LayoutContains.option('openedStateMode', $(window).width() < 960 ? "overlap" : "shrink");
    });

});

//=== Sidebar ======================================================================
function _PageSidebar(_dataSource) {
    _element.LayoutContains.option("template",
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
                    _element.PageToolbar.option("items[1].text", e.itemData.text);
                    _element.PageToolbar.option("items[2].visible", false);
                    _element.LayoutContains.toggle();

                    $("#PageContains").empty();
                    _main.arrVarGlobal._actPageContains = e.itemData["target"];
                    _main.arrVarGlobal._PdfFilePageContains = "/master/AIOPdfPageContains/PdfPageContains/" + e.itemData["text"].replace(" ", "") + ".pdf";
                    $("#PageContains").load(_main.arrVarGlobal._actPageContains);
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

//=== USER AUTHENTICATION ======================================================================
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
};

function onSignIn(response) {
    const
        responsePayload = decodeJwtResponse(response.credential),
        getQuery = GetVisualizationQuery(
            _main.appConfig.dataSource.User,    //SpreadsheetID
            1181780988,                         //SheetID
            "A1:E",                            //Range
            "SELECT * WHERE C = '" + responsePayload.email + "'"            //Filter or Query
        );
    getQuery.send(response => { 
        GetJsonData(response);
        _main.account.user.id = _main.arrVarGlobal._dataArray.length != 0 ? _main.arrVarGlobal._dataArray[0].ID : null;
        _main.account.user.name = _main.arrVarGlobal._dataArray.length != 0 ? _main.arrVarGlobal._dataArray[0].name : null;
        _main.account.user.email = _main.arrVarGlobal._dataArray.length != 0 ? _main.arrVarGlobal._dataArray[0].email : null;
        _main.account.user.org = _main.arrVarGlobal._dataArray.length != 0 ? _main.arrVarGlobal._dataArray[0].org : null;
        _main.account.user.desc = _main.arrVarGlobal._dataArray.length != 0 ? _main.arrVarGlobal._dataArray[0].desc : null;
        _main.account.user.pict = _main.arrVarGlobal._dataArray.length != 0 ? responsePayload.picture : null;
        _main.account.user.cred = response;

    });
    delete getQuery;
    delete responsePayload;
    _main.arrVarGlobal._dataArray = [];

};

//=== VISUALIZATION QUERY ======================================================================
function GetVisualizationQuery(_DBId, _TBId, _Range, _Query) {
    var
        query = new google.visualization.Query(
            "https://docs.google.com/spreadsheets/d/" + _DBId + "/gviz/tq?" +
            "&gid=" + _TBId +
            "&range=" + _Range +
            "&headers=1"
            // + "&tq=" + _Query
        );

    query.setQuery(_Query);
    return query;
}

function GetJsonData(response) {
    _main.arrVarGlobal._dataArray = [];

    if (!(response.isError())) {
        var
            data = response.getDataTable(),
            // _dataSource = [],
            _column = [];

        //GetJSONData Structure==================================
        data = JSON.parse(data.toJSON());
        data.rows.forEach((_rowItems, _rowIndex) => {
            var _arrRow = {};
            _rowItems.c.forEach((_cItems, _cIndex) => {
                var _field = data.cols[_cIndex],
                    _value = _field.type == 'date' ? (_cItems == null ? "" : _cItems.f) : (_cItems == null ? "" : _cItems.v),
                    _arrCol = {};

                _arrRow[_field.label] = _value == null ? "" : _value;

                // set column ===========================================
                if (_rowIndex == 0) {
                    _arrCol["caption"] = _field.label;
                    _arrCol["fixed"] = _cIndex == 0 ? true : false;
                    _arrCol["dataField"] = _field.label;
                    _arrCol["sortOrder"] = _cIndex == 0 ? "asc" : "";
                    _arrCol["dataType"] = _field.type;
                    _arrCol["format"] = _field.pattern;
                    _column.push(_arrCol);
                };

            });
            _main.arrVarGlobal._dataArray.push(_arrRow);
        });

        delete data;
        delete _field;
        delete _column;
        delete _arrCol;
        delete _arrRow;
        return;
    } else {
        _notify('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
        return;
    };

};