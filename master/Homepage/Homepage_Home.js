_element.PageToolbar.option("items[1].text", 'Home');
_element.PageToolbar.option("items[2].visible", false);
_main.arrVarGlobal._ParentPageContains = "/master/Homepage/Homepage_Home.html";

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
        collapsible: true,
        itemTitleTemplate: (devdata, devindex, develement) => {
            return `
                <div class = "HomeLinkedPlatform-dev">
                    <b>${devdata.key.toUpperCase()}</b><br>
                </div>
            `;
        },
        itemTemplate: function (devdata, devindex, develement) {
            if (devindex == 0) {
                 develement.append(`<br><div data-behold-id="Zi34hTXiKqwACPkXEx0G"></div>`);
            }
            else {
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
            };
        },
    });
    // ===============================================================================================

    /*
    const newForm = addPageForm(
        "#MediaSosial",
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
                        template: (element) => {
                                                       
                            eltile = $(`
                                <tilecontains 
                                    style= "
                                        display:flex;
                                        
                                        width: inherit;
                                        height: inherit;
                                        overflow: hidden;">
                                </tilecontains>
                            `);
     
                            fetch(_main.appConfig.YtApi.url)
                                .then(res => res.json())
                                .then(data => {
     
                                    data.items.forEach((_rowItems, _rowIndex) => {
                                        document.querySelector("tilecontains").innerHTML += `
                                            <div class="pageButton">
     
                                                <div class="itemPageButton">
     
                                                    <img class="itemPageButtonIcon" src="${_rowItems.snippet.thumbnails.maxres.url}"></img>
     
                                                    <div class="itemPageButtonCaption">${_rowItems.snippet.title}</div>
                                                </div>
     
                                            </div>
     
                                        `
                                    });
                                });
                            //     // <a href="https://www.youtube.com/watch/?v=${_rowItems.snippet.resourceId.videoId}" target="_blank"></a>
     
                            return eltile;
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
    const d = document, s = d.createElement("script"); s.type = "module";
    s.src = "https://w.behold.so/widget.js"; d.head.append(s);
    // ===============================================================================================
    $("#HomePagesMain").dxScrollView({
        scrollByContent: true,
        scrollByThumb: true,
        useNative: false,
        showScrollbar: 'onHover',
    });

});