function GoPdfJsViewer(_pdffile, _pdfPageContains) {

    const _pdfToolItems = {
        items: [
            {
                index: 0,
                icon: 'fas fa-magnifying-glass-plus fa-2px',
                text: 'Zoom in',
                label: 'Zoom in',
                hint: 'Zoom-In',
                stylingMode: 'contained',
                onClick(e) { _zoomScaleCanvas += 0.1; OnRenderPage(_pdffile, _pdfPageContains); },
            },
            {
                index: 1,
                icon: 'fas fa-magnifying-glass-minus fa-2px',
                text: 'Zoom Out',
                label: 'Zoom Out',
                hint: 'Zoom-Out',
                stylingMode: 'contained',
                onClick(e) { _zoomScaleCanvas -= 0.1; OnRenderPage(_pdffile, _pdfPageContains); },
            },
            {
                index: 2,
                icon: 'fas fa-download fa-2px',
                text: 'Download',
                label: 'Download',
                hint: 'Download',
                stylingMode: 'contained',
                onClick(e) {
                    _notify('option of ' + _pdfToolItems.items[2].hint + ' masih proses ritual');
                },
            },
            {
                index: 3,
                icon: 'fas fa-print fa-2px',
                text: 'Print',
                label: 'Print',
                hint: 'Print',
                stylingMode: 'contained',
                onClick(e) {
                    _notify('option of ' + _pdfToolItems.items[3].hint + ' masih proses ritual');
                },
            }
        ],
        stylingMode: 'contained',
        focusStateEnabled: false,
        selectionMode: "none",
    };

    //========================================================================================
    let _pdfPageContainsToolbar = $("#pdfPageContainsToolbar").dxButtonGroup(_pdfToolItems).dxButtonGroup("instance"); // OR 
    _pdfPageContainsToolbar.option("visible", $(window).width() > 480 && $(window).width() < 980 ? true : false);

    _PageToolbar.option("items[2].options", _pdfToolItems);
    _PageToolbar.option("items[2].visible", $(window).width() > 980 ? true : false);
    _PageToolbar.option("items[2].options.stylingMode", "text");

    //reconfig of tool options items
    for (let ii = 0; ii < _pdfToolItems.items.length; ii++) {
        _pdfPageContainsToolbar.option("items[" + ii + "].text", "");

        $("#action-" + _pdfToolItems.items[ii].hint).dxSpeedDialAction({
            index: _pdfToolItems.items[ii].index,
            label: _pdfToolItems.items[ii].label,
            icon: _pdfToolItems.items[ii].icon,
            onClick: _pdfToolItems.items[ii].onClick,
            visible: $(window).width() < 480 ? true : false,
        }).dxSpeedDialAction('instance');

    };

    //===================================================================================
    OnRenderPage(_pdffile, _pdfPageContains);

    //===================================================================================
    DevExpress.config({
        floatingActionButtonConfig: {
            label: "Options",
            icon: 'fas fa-layer-group',
            shading: true,
            direction: 'up',
            position: {
                of: "#pdfMainPage",
                my: 'center bottom',
                at: 'center bottom',
                offset: '0 -20',
            },
        },
    });
    DevExpress.ui.repaintFloatingActionButton();

}

function OnRenderPage(_pdffile, _pdfPageContains) {

    //===================================================================================
    pdfjsLib.getDocument(_pdffile).promise.then(_pdfInfo => {

        let _renderTask;
        let _scaleCanvas;

        for (let npage = 1; npage <= _pdfInfo.numPages; npage++) {
            let _idPage = "pdfPage" + npage;
            $(_pdfPageContains).append("<canvas id=" + _idPage + "></canvas>");

            _pdfInfo.getPage(npage).then(function (_pdfPage) {
                _scaleCanvas = (_pdfPageContains.offsetWidth / _pdfPage.getViewport({ scale: 1 }).width).toFixed(1);
                let _viewport = _pdfPage.getViewport({ scale: ((_scaleCanvas > 1 ? 1 : _scaleCanvas - 0.05) + _zoomScaleCanvas).toFixed(1) });
                let _pdfCanvas = document.getElementById(_idPage);

                _pdfCanvas.width = _viewport.width;
                _pdfCanvas.height = _viewport.height;
                _renderTask = _pdfPage.render({
                    canvasContext: _pdfCanvas.getContext('2d'),
                    viewport: _viewport,
                }).promise;
            });

        };
    });
}