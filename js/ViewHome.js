$(() => {
    $('#responsive-box').dxResponsiveBox({
        rows: [
            { ratio: 0, screen: 'sm lg' },
            { ratio: 0, screen: 'sm lg' },
            { ratio: 0, screen: 'sm lg' },
            { ratio: 1, screen: 'sm lg' },
        ],
        cols: [
            { ratio: 3 },
            { ratio: 1, screen: 'lg' },
        ],
        singleColumnScreen: 'sm',
        screenByWidth(width) {
            return (width < 481) ? 'sm' : 'lg';
        },
    });

    _NavbarLayout03 = $('#NavbarLayout03').dxTabs({
        dataSource: "./data/NavLayout03.json",
        hoverStateEnabled: true,
        focusStateEnabled: true,
        activeStateEnabled: true,
        scrollByContent: true,
        scrollingEnabled: true,
        showNavButtons: true,
        selectedIndex: -1,
        onItemClick(e) { //itemData, itemIndex, itemElement
            $("#Layout04").load(e.itemData.loadpage);
        },
    }).dxTabs('instance');

});
