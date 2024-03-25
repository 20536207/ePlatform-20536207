window.jsPDF = window.jspdf.jsPDF;

_arrVarGlobal = {
    _actPageContains: null,
    _PdfFilePageContains: null,
    _ParentPageContains: null
};

_appInfo = {
    dev: undefined,
    title: undefined,
    ver: undefined,
    icon: undefined
};

//=== NOTIFY
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

$(document).ready(function () {
    console.log(_arrVarGlobal._actPageContains);
    _appInfo.dev = "e-Platform ( 20536207 )";
    _appInfo.title = "e-Platform AIO";
    _appInfo.ver = "20536207.1";

    //=== TOOLBAR SEPARATOR
    _toolbarSeparatorBefore = {
        locateInMenu: 'never',
        location: "before",
        template(itemData, itemIndex, element) {
            $('<div>')
                .addClass('separator-before')
                .appendTo(element);
        },
        menuItemTemplate(itemData, itemIndex, element) {
            $('<div>')
                .addClass('toolbar-menu-separator')
                .appendTo(element);
        },

    };
    _toolbarSeparatorAfter = {
        locateInMenu: 'never',
        location: "after",
        template(itemData, itemIndex, element) {
            $('<div>')
                .addClass('separator-after')
                .appendTo(element);
        },
    };

    //=== LAYOUT HEADER
    _LayoutHeader = $('#LayoutHeader').dxToolbar({
        items: [
            {
                widget: 'dxButton',
                location: 'before',
                locateInMenu: 'never',
                cssClass: undefined,
                text: "",
                options: {
                    //disabled: true,
                    text: "",
                    icon: null,
                    // template:
                    //     "<div class='fab fa-windows fa-xl'><span class='DevApp-Menu'>${_appInfo.title}<br>ver. $(_appInfo.ver)</span></div>",
                    hoverStateEnabled: true,
                    focusStateEnabled: false,
                    activeStateEnabled: true,
                    selectionMode: 'none',
                    type: 'normal',
                    stylingMode: "text",
                    height: undefined,
                    width: undefined,
                    onClick: () => {
                        _LayoutContains.toggle();
                    },
                }
            }, {
                widget: 'dxButton',
                location: 'after',
                locateInMenu: 'never',
                cssClass: undefined,
                text: null,
                options: {
                    disabled: false,
                    text: null,
                    icon: null,
                    template: '<a class="fas fa-circle-user fa-3x"></a>',
                    hoverStateEnabled: true,
                    focusStateEnabled: false,
                    activeStateEnabled: false,
                    selectionMode: 'none',
                    type: 'normal',
                    stylingMode: "text",
                    height: undefined,
                    width: undefined,
                    onClick() {
                        _PageToolbar.option("items[1].text", "e-Platform Account");
                        _PageToolbar.option("items[2].visible", false);

                        $("#PageContains").empty();
                        _arrVarGlobal._actPageContains = "/master/User/User_MainPage.html";
                        $("#PageContains").load(_arrVarGlobal._actPageContains);
                    },
                }
            }
        ]
    }).dxToolbar("instance");


    //=== LAYOUT CONTAINS
    _LayoutContains = $('#LayoutContent').dxDrawer({
        opened: false,
        animationEnabled: false,
        revealMode: "slide", //"slide | expand"
        openedStateMode: $(window).width() < 980 ? "overlap" : "shrink", //shrink //overlap
        position: 'left', //right
        shading: $(window).width() < 600 ? true : false,
        closeOnOutsideClick: true,
        template() {
            const _ListWidget = $("<div>");
            return _ListWidget
                .dxList({
                    keyExpr: "key",
                    dataSource: "/data/NavMain.json",
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
                        return $(`<b style="color: rgba(28, 168, 221, 1)">${data.key}</b>`);
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
                }).addClass('ContainsSidebar');
        },
    }).dxDrawer('instance');

    //=== PAGE TOOLBAR
    _PageToolbar = $('#PageToolbar').dxToolbar({
        items: [
            {
                location: 'before',
                locateInMenu: 'never',
                visible: true,
                widget: 'dxButton',
                cssClass: 'items-before',
                text: "",
                options: {
                    icon: "fas fa-right-from-bracket fa-rotate-180",
                    stylingMode: "text",
                    hoverStateEnabled: true,
                    focusStateEnabled: false,
                    activeStateEnabled: true,
                    onClick() {
                        _PageToolbar.option("items[2].visible", false);
                        $("#PageContains").empty();
                        _arrVarGlobal._actPageContains = _arrVarGlobal._ParentPageContains;
                        $("#PageContains").load(_arrVarGlobal._actPageContains);
                    },
                },
            },
            // _toolbarSeparatorBefore,
            {
                location: 'before',
                locateInMenu: 'never',
                cssClass: 'Page-Title',
                text: "",
            },
            {
                location: 'after',
                locateInMenu: 'auto',
                visible: false,
                cssClass: 'items-after',
                widget: 'dxButtonGroup',
            },
            {
                location: 'after',
                locateInMenu: 'never',
                visible: true,
                cssClass: 'items-after',
                widget: 'dxButton',
                options: {
                    icon: "fas fa-refresh",
                    stylingMode: "text",
                    hoverStateEnabled: true,
                    focusStateEnabled: false,
                    activeStateEnabled: true,
                    onClick() {
                        _PageToolbar.option("items[2].visible", false);

                        $("#PageContains").empty();
                        $("#PageContains").load(_arrVarGlobal._actPageContains);
                    },
                },
            }
        ],

    }).dxToolbar('instance');

    //==============================================================================
    _LayoutHeader.option("items[0].options.template",
        "<div class='fab fa-windows fa-xl'><span class='DevApp-Menu'>" +
        _appInfo.title + "<br>ver. " + _appInfo.ver + "</span></div>"
    );
    _arrVarGlobal._actPageContains = "/master/Homepage/Homepage_Home.html";
    $("#PageContains").empty();
    $("#PageContains").load(_arrVarGlobal._actPageContains);

    $(window).resize(function () {
        _LayoutContains.option('openedStateMode', $(window).width() < 960 ? "overlap" : "shrink");
    });

});