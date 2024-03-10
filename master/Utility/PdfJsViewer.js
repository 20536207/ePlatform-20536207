function GoPdfJsViewer(_pdffile, _pdfPageContains) {

    $('#action-zoom-in').dxSpeedDialAction({
        label: 'Zoom In',
        icon: "fas fa-magnifying-glass-plus",
        index: 1,
        onClick() {
            _zoomScaleCanvas += 0.3;
            OnRenderPage(_pdffile, _pdfPageContains);
        },
    }).dxSpeedDialAction('instance');

    $('#action-zoom-out').dxSpeedDialAction({
        icon: 'fas fa-magnifying-glass-minus',
        label: 'Zoom Out',
        index: 2,
        // visible: false,
        onClick() {
            _zoomScaleCanvas -= 0.3;
            OnRenderPage(_pdffile, _pdfPageContains);
        },
    }).dxSpeedDialAction('instance');

    $('#action-print').dxSpeedDialAction({
        icon: 'fas fa-print',
        label: 'Print',
        index: 3,
        // visible: false,
        onClick() {
            window.open(_pdffile);
        },
    }).dxSpeedDialAction('instance');

    //===================================================================================
    OnRenderPage(_pdffile, _pdfPageContains);

    //===================================================================================
    DevExpress.config({
        floatingActionButtonConfig: {
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


};

function OnRenderPage(_pdffile, _pdfPageContains) {
    //===================================================================================

    pdfjsLib.getDocument(_pdffile).promise.then(_pdfDocument => {

        let _renderTask;
        let _scaleCanvas;

        for (let npage = 1; npage <= _pdfDocument.numPages; npage++) {
            let _idPage = "pdfPage" + npage;
            $(_pdfPageContains).append("<canvas id=" + _idPage + "></canvas>");
            
            _pdfDocument.getPage(npage).then(function (_pdfPage) {
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

        }
    });
};