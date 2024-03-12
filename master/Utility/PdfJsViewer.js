function GoPdfJsViewer(_pdffile, _pdfPageContains) {

    let _pdfToolItems = {
        items: [
            {
                index: 1,
                icon: 'fas fa-magnifying-glass-plus fa-2px',
                text: 'Zoom in',
                label: 'Zoom in',
                hint: 'Zoom-In',
                stylingMode: 'contained',
            },
            {
                index: 2,
                icon: 'fas fa-magnifying-glass-minus fa-2px',
                text: 'Zoom Out',
                label: 'Zoom Out',
                hint: 'Zoom-Out',
                stylingMode: 'contained',
            },
            {
                index: 3,
                icon: 'fas fa-download fa-2px',
                text: 'Download',
                label: 'Download',
                hint: 'Download',
                stylingMode: 'contained',
            },
            {
                index: 4,
                icon: 'fas fa-print fa-2px',
                text: 'Print',
                label: 'Print',
                hint: 'Print',
                stylingMode: 'contained',
            }
        ],
        stylingMode: 'contained',
        focusStateEnabled: false,
        selectionMode: "none",
        onItemClick(e) {
            switch (e.itemIndex) {
                case 0:
                    _zoomScaleCanvas += 0.3;
                    OnRenderPage(_pdffile, _pdfPageContains);
                    break;
                case 1:
                    _zoomScaleCanvas -= 0.3;
                    OnRenderPage(_pdffile, _pdfPageContains);
                    break;
                case 2:
                    _notify('option ' + e.itemIndex + ' of ' + e.itemData.hint + ' masih proses ritual');
                    break;
                case 3:
                    _notify('option ' + e.itemIndex + ' of ' + e.itemData.hint + ' masih proses ritual');
                    break;
                default:
                    break;
            }
        },
    };

    //========================================================================================
    let _pdfPageContainsToolbar = $("#pdfPageContainsToolbar").dxButtonGroup(_pdfToolItems).dxButtonGroup("instance"); // OR 

    _PageToolbar.option("items[2].options", _pdfToolItems);
    _PageToolbar.option("items[2].visible", true);
    _PageToolbar.option("items[2].options.stylingMode", "text");

    //reconfig of tool options items
    for (let ii = 0; ii < _pdfToolItems.items.length; ii++) {
        _pdfPageContainsToolbar.option("items[" + ii + "].text", "");

        $("#action-" + _pdfToolItems.items[ii].hint).dxSpeedDialAction({
            index: _pdfToolItems.items[ii].index,
            label: _pdfToolItems.items[ii].label,
            icon: _pdfToolItems.items[ii].icon,
            // onClick(){_pdfToolItems.onItemClick();},
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