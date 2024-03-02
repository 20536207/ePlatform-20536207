// $(() => {
$(document).ready(function () {    
    // ===============================================================================================
    _ViewHome = $('#HomePagesHome')
        .dxResponsiveBox({
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
            screenByWidth(width) {
                return (width < 601) ? 'sm' : 'lg';
            },
        }).dxResponsiveBox('instance');

    // ===============================================================================================
    _NavbarLayout04 = $('#NavbarLayout04').dxTabs({
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
    _BannerImage = $('#BannerImage').dxGallery({
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
            // $('<div>').addClass('banner-image-title').text(item.Title).appendTo(result);
            // $('<div>').addClass('banner-image-keterangan').text(item.Keterangan).appendTo(result);
            return result;
        },
    });

    // ===============================================================================================
    _HomeLinkedPlatform = $('#HomeLinkedPlatform').dxAccordion({
        dataSource: "./data/HomeLinkedPlatform.json",
        activeStateEnabled: true,
        focusStateEnabled: false,
        hoverStateEnabled: false,
        animationDuration: 0,
        collapsible: true,
        // onContentReady: function (e) {
        //     $.getJSON(e.component.option('dataSource'), function (jsondata) {
        //         $('.HomeLinkedPlatform-item-count').text(jsondata.length);
        //     });
        // },
        // onSelectionChanged(e) {
        //     $('.selected-index')
        //         .text(e.component.option('selectedIndex') + 1);
        // },
        itemTitleTemplate: function (devdata, devindex, develement) {
            develement.append(
                "<div class='HomeLinkedPlatform-dev'>" +
                "<b>" + devdata.dev + "</b><br>" +
                "<i>" + devdata.detail + "</i>" +
                "</div>"
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
                        template() {
                            return (
                                "<div class='HomeLinkedPlatform-item-detail'>" +
                                "<a>" + productdata.product + "</a>" +
                                "<br><i>" + productdata.detail + "</i>" +
                                "</div>"
                            );
                        },
                    })
                )
            });
        },
    });

    // ===============================================================================================
    for (var i = 1; i <= 50; i++) {
        $("#PageLayout").append(
            $("<div />").dxButton({
                elementAttr: { class: 'btnPageLayout' },
                type: 'normal',
                stylingMode: 'contained',
                hoverStateEnabled: false,
                focusStateEnabled: false,
                activeStateEnabled: true,
                // width: () => {
                //     return $(window).width() > 1024 ? '20%' : $(window).width() > 960 ? '25%' : $(window).width() > 600 ? '33.3%' : $(window).width() > 480 ? '50%' : '100%';
                // },
                // height: undefined,
                template: () => {
                    return $(
                        "<div style='display:flex;display: flex; flex-direction: column;padding: 7px 5px 5px 5px'>" +
                        "<i class='fas fa-layer-group fa-4x'></i>" +
                        "<span>Layanan satuan pendidikan satu data kualitas terjaga</span></div>"
                    )
                },
                onClick() {
                    DevExpress.ui.notify(
                        {
                            message: 'masih dalam proses ritual', //this.option('text'),
                            maxWidth: 300,
                            displayTime: 1000,
                            animation: {
                                show: { type: 'fade', duration: 400, from: 0, to: 1 },
                                hide: { type: 'fade', duration: 40, to: 0 },
                            },
                        },
                        { position: "top right", direction: "down-push" }
                    );
                },
            })
            // .dxButton("instance")
        )
    };

    $('#PageContains').dxScrollView({
        scrollByContent: true,
        scrollByThumb: true,
        useNative: false,
        showScrollbar: 'onHover',
    });

});
