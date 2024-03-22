_PageToolbar.option("items[1].text", 'Home');
_PageToolbar.option("items[2].visible", false);
_arrVarGlobal._ParentPageContains = "./master/Homepage/Homepage_Home.html";

// ===============================================================================================
$(document).ready(function () {
    $("#HomePagesContains").dxResponsiveBox({
        rows: [
            { ratio: 0, screen: 'sm lg' }, //01
            { ratio: 0, screen: 'sm lg' }, //02
            { ratio: 0, screen: 'sm lg' }, //03
            { ratio: 0, screen: 'sm lg' }, //04
            { ratio: 0, screen: 'sm lg' }, //05
            { ratio: 0, screen: 'sm lg' }, //06
            { ratio: 1, screen: 'sm lg' }, //07
        ],
        cols: [
            { ratio: 3 },
            { ratio: 1, screen: 'lg' },
        ],
        singleColumnScreen: 'sm',
        screenByWidth() {
            return $(window).width() < 601 ? 'sm' : 'lg';
        },
    }).dxResponsiveBox("instance");

    // ===============================================================================================
    $('#NavbarLayout04').dxTabs({
        dataSource: "./data/NavLayout03.json",
        hoverStateEnabled: true,
        focusStateEnabled: false,
        selectionMode: 'none',
        activeStateEnabled: false,
        scrollByContent: true,
        scrollingEnabled: true,
        showNavButtons: true,
        selectedIndex: -1,
        onItemClick(e) { //itemData, itemIndex, itemElement
            window.open(e.itemData.loadpage, '_blank');
        },
    }).dxTabs('instance');

    // ===============================================================================================
    $('#BannerImage').dxGallery({
        dataSource: './data/BannerImage.json',
        height: 'innerWidth',
        width: 'innerWidth',
        focusStateEnabled: false,
        loop: true,
        slideshowDelay: 6000,
        showNavButtons: false,
        showIndicator: false,
        itemTemplate(item) {
            const result = $('<div>');
            $('<img class="bannerimage" />').attr('src', item.Image).appendTo(result);
            return result;
        },
    });

    // ===============================================================================================
    $('#HomeLinkedPlatform').dxAccordion({
        dataSource: "./data/HomeLinkedPlatform.json",
        activeStateEnabled: true,
        focusStateEnabled: false,
        hoverStateEnabled: false,
        animationDuration: 0,
        collapsible: true,
        itemTitleTemplate: function (devdata, devindex, develement) {
            develement.append(
                $("<div class='HomeLinkedPlatform-dev'>" +
                    "<b>" + devdata.dev + "</b><br>" +
                    "<i>" + devdata.detail + "</i>" +
                    "</div>")
            );
        },
        itemTemplate: function (devdata, devindex, develement) {
            devdata.items.forEach(function (productdata, productindex, productelement) {
                develement.append(
                    $("<div>").dxButton({
                        stylingMode: 'text',
                        type: 'normal',
                        width: '100%',
                        activeStateEnabled: true,
                        focusStateEnabled: false,
                        hoverStateEnabled: false,
                        onClick() {
                            window.open(productdata.target, '_blank')
                        },
                        template: () => {
                            return (
                                "<div class='HomeLinkedPlatform-item-detail'>" +
                                "<a>" + productdata.product + "</a><br>" +
                                "<i>" + productdata.detail + "</i>" +
                                "</div>"
                            );
                        },
                    })
                )
            });
        },
    });

    // ===============================================================================================
    $.getJSON("./data/NavMain.json", function (result) {
        result[0].items.forEach(function (itemData) {

            $("#HomePageContains").append(
                $("<div />").dxButton({
                    elementAttr: { class: 'btnHomePageContains' },
                    type: 'normal',
                    stylingMode: 'contained',
                    hoverStateEnabled: false,
                    focusStateEnabled: false,
                    activeStateEnabled: true,
                    height: '130px',
                    template: () => {
                        return $(
                            "<div class='itembtnpage'>" +
                            "<div class='itemicon'><i class='fas fa-layer-group fa-4x'></i></div>" +
                            "<div class='itemdev'><div>" + itemData.text + "</div></div>" +
                            "</div>"
                        )
                    },
                    onClick(e) {
                        _PageToolbar.option("items[1].text", itemData.text);
                        _PageToolbar.option("items[2].visible", false);

                        $("#PageContains").empty();
                        _arrVarGlobal._actPageContains = itemData.target;
                        _arrVarGlobal._PdfFilePageContains = "./master/AIOPdfPageContains/PdfPageContains/" + itemData.text.replace(" ", "") + ".pdf";
                        _arrVarGlobal._ParentPageContains = "./master/Homepage/Homepage_Home.html";
                        return $("#PageContains").load(_arrVarGlobal._actPageContains);
                    },
                })
            )

        });
    });

    $("#HomePagesMain").dxScrollView({
        scrollByContent: true,
        scrollByThumb: true,
        useNative: false,
        showScrollbar: 'onHover',
    });
    
});