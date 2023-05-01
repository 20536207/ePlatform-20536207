$(() => {
    _ViewHome = $('#HomePagesHome').dxResponsiveBox({
        rows: [
            { ratio: 0, screen: 'sm lg' }, //01
            { ratio: 0, screen: 'sm lg' }, //02
            { ratio: 0, screen: 'sm lg' }, //03
            { ratio: 0, screen: 'sm lg' }, //04
            { ratio: 1, screen: 'sm lg' }, //05
        ],
        cols: [
            { ratio: 3 },
            { ratio: 1, screen: 'lg' },
        ],
        singleColumnScreen: 'sm',
        screenByWidth(width) {
            return (width < 601) ? 'sm' : 'lg';
        },
    })
        .dxScrollView({
            scrollByContent: true,
            scrollByThumb: true,
            useNative: false,
            showScrollbar: 'onHover',
            height: "100%",
            width: "100%",

        });

    _NavbarLayout03 = $('#NavbarLayout03').dxTabs({
        dataSource: "./data/NavLayout03.json",
        hoverStateEnabled: false,
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

    _BannerImage = $('#BannerImage').dxGallery({
        dataSource: './data/BannerImage.json',
        height: 'innerWidth',
        width: 'innerWidth',
        loop: true,
        slideshowDelay: 6000,
        showNavButtons: false,
        showIndicator: false,
        itemTemplate(item) {
            const result = $('<div>');
            $('<img class="bannerimage">').attr('src', item.Image).appendTo(result);
            $('<div>').addClass('banner-image-title').text(item.Title).appendTo(result);
            $('<div>').addClass('banner-image-keterangan').text(item.Keterangan).appendTo(result);
            return result;
        },
    });
    
    _HomeLinkedPlatform = $('#HomeLinkedPlatform').dxMultiView({
        dataSource: "./data/HomeLinkedPlatform.json",
        onContentReady: function(e){
            $.getJSON(e.component.option('dataSource'),function(jsondata){
                $('.HomeLinkedPlatform-item-count').text(jsondata.length);
            });
        },
        selectedIndex: 0,
        loop: true,
        animationEnabled: true,
        onSelectionChanged(e) {
            $('.selected-index')
                .text(e.component.option('selectedIndex') + 1);
        },
        itemTemplate: function (devdata, devindex, develement) {
            a = 
                "<div class='HomeLinkedPlatform-dev'>" +
                "<b>" + devdata.dev + "</b><br>" +
                "<i>" + devdata.detail + "</i>" +
                "</div>"

            b="";

            devdata.items.forEach(function (productdata, productindex, productelement) {
                b= b+
                "<div class='HomeLinkedPlatform-layout'>"+
                    "<div class='HomeLinkedPlatform-item'>"+
                        "<a target='_blank' href="+productdata.target+">"+
                            "<img src="+productdata.icon+" />"+
                        "</a>"+
                        "<div class='HomeLinkedPlatform-item-detail'>"+
                            "<div>" + productdata.product + "</div>"+
                            // "<br/><p>" + productdata.detail + "</p>"+
                        "</div>"+
                    "</div>"+
                "</div>"
            });
            develement.append(a+b); //"<div class='clearfix'></div>"
        },
    });


});
