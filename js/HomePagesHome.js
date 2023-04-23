$(() => {
    _ViewHome = $('#HomePagesHome').dxResponsiveBox({
        rows: [
            { ratio: 0, screen: 'sm lg' }, //01
            { ratio: 0, screen: 'sm lg' }, //02
            { ratio: 0, screen: 'sm lg' }, //03
            { ratio: 1, screen: 'sm lg' }, //04
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
});
