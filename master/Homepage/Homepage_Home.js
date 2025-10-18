_element.PageToolbar.option("items[1].text", 'Home');
_element.PageToolbar.option("items[2].visible", false);
_main.arrVarGlobal._ParentPageContains = "/master/Homepage/Homepage_Home.html";

// ===============================================================================================
$(document).ready(async function () {

    $("#HomePagesMain").dxScrollView({
        scrollByContent: true,
        scrollByThumb: true,
        useNative: false,
        showScrollbar: 'onHover',
        onReachBottom: false,
    }).dxScrollView('instance');

    // ===============================================================================================
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
            { ratio: 4 },
            { ratio: 1, screen: 'lg' },
        ],
        singleColumnScreen: 'sm',
        screenByWidth(width) {
            return width < 601 ? 'sm' : 'lg';
        },
    }).dxResponsiveBox("instance");

    // ===============================================================================================
    $('#NavbarLayout04').dxTabs({
        dataSource: _main.navigator.linkedInfo,
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
        dataSource: _main.navigator.banner,
        height: 'innerWidth',
        width: 'innerWidth',
        focusStateEnabled: false,
        loop: true,
        slideshowDelay: 6000,
        showNavButtons: false,
        showIndicator: false,
        itemTemplate(item) {
            const result = $('<div>');
            $('<image class="bannerimage" />').attr('src', item.Image).appendTo(result);
            return result;
        },
    }).dxGallery('instance');;

    // ===============================================================================================
    $('#HomeLinkedPlatform').dxAccordion({
        dataSource: _main.navigator.linkedPlatform,
        activeStateEnabled: true,
        focusStateEnabled: false,
        hoverStateEnabled: false,
        animationDuration: 0,
        collapsible: true,
        itemTitleTemplate: (devdata, devindex, develement) => {
            return `
                <div class = "HomeLinkedPlatform-dev">
                    <b>${devdata.dev}</b><br>
                    <i>${devdata.detail}</i></br>
                </div>
            `;
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
                            return `
                                <div class = "HomeLinkedPlatform-item-detail">
                                <a>${productdata.product}</a><br>
                                <i>${productdata.detail}</i></br>
                                </div>
                            `;
                        },
                    })
                )
            });
        },
    });

    // ===============================================================================================
    $('#Dashboard').dxAccordion({
        dataSource: _main.navigator.dashboard,
        activeStateEnabled: true,
        focusStateEnabled: false,
        hoverStateEnabled: false,
        animationDuration: 0,
        selectedIndex: -1,
        collapsible: true,
        itemTitleTemplate: function (devdata, devindex, develement) {
            return `
                <div class = "HomeLinkedPlatform-dev">
                    <b>${devdata.key.toUpperCase()}</b><br>
                </div>
            `;
        },
        itemTemplate: function (devdata, devindex, develement) {

            switch (devindex) {
                // case 0:
                //     develement.append(
                //         "wait..next session"
                //     );
                //     break;
                case 0:
                    develement.append(`<br><div data-behold-id="NfjyEti3RoZ6vyms4yCt"></div>`);
                    break;
                default:
                    devdata.items.forEach(function (itemdata, itemindex) {
                        addPageButton(
                            develement, //itemElement,
                            itemdata,
                            itemdata.text,  //itemBDataCaption,
                            itemdata.target,    //actPageContains,
                            "/master/Homepage/Homepage_Home.html", //ParentPageContains
                            // "/master/AIOPdfPageContains/PdfPageContains/" + itemData.text.replace(" ", "") + ".pdf" //pdfFileContains
                            itemdata.fileId, //pdffileContains
                            itemdata.icon //iconobj
                        );

                    });
                    break;
            };
        },
    });
    // ===============================================================================================
    const d = document, e = d.createElement("script"); e.type = "module";
    e.src = "https://w.behold.so/widget.js"; d.head.append(e);

});