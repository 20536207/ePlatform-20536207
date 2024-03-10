function GoPdfJsViewer(_pdffile, _pdfPageContains) {

    let _pdfToolItems = [
        {
            icon: 'fas fa-magnifying-glass-plus fa-2px',
            hint: 'Zoom In',
            stylingMode: 'contained',
        },
        {
            icon: 'fas fa-magnifying-glass-minus fa-2px',
            hint: 'Zoom Out',
            stylingMode: 'contained',
        },
        {
            icon: 'fas fa-download fa-2px',
            hint: 'Download',
            stylingMode: 'contained',
        },
        {
            icon: 'fas fa-print fa-2px',
            hint: 'Print',
            stylingMode: 'contained',
        }
    ];


    $("#pdfPageContainsToolbar").dxButtonGroup({
        items: _pdfToolItems,
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
    }).dxButtonGroup("instance");

    // _PageToolbar.option("items[3].options", {
    //     items: _pdfToolItems,
    //     stylingMode: 'text',
    //     focusStateEnabled: false,
    //     selectionMode: "none",
    //     onItemClick(e) {
    //         DevExpress.ui.notify({ message: `The "${e.itemData.hint}" button was clicked`, width: 320 }, 'success', 1000);
    //     },
    // });

    //========================================================================================
    // $('#action-zoom-in').dxSpeedDialAction({
    //     label: 'Zoom In',
    //     icon: "fas fa-magnifying-glass-plus",
    //     index: 1,
    //     onClick() {
    //         _zoomScaleCanvas += 0.3;
    //         OnRenderPage(_pdffile, _pdfPageContains);
    //     },
    // }).dxSpeedDialAction('instance');

    // $('#action-zoom-out').dxSpeedDialAction({
    //     icon: 'fas fa-magnifying-glass-minus',
    //     label: 'Zoom Out',
    //     index: 2,
    //     // visible: false,
    //     onClick() {
    //         _zoomScaleCanvas -= 0.3;
    //         OnRenderPage(_pdffile, _pdfPageContains);
    //     },
    // }).dxSpeedDialAction('instance');

    // $('#action-print').dxSpeedDialAction({
    //     icon: 'fas fa-print',
    //     label: 'Print',
    //     index: 3,
    //     // visible: false,
    //     onClick() {
    //         var doc = new jsPDF();

    //         // We'll make our own renderer to skip this editor
    //         var specialElementHandlers = {
    //             '#editor': function (element, renderer) {
    //                 return true;
    //             }
    //         };

    //         // All units are in the set measurement for the document
    //         // This can be changed to "pt" (points), "mm" (Default), "cm", "in"
    //         doc.fromHTML($(_pdfPageContains).get(0), 15, 15, {
    //             'width': 170,
    //             'elementHandlers': specialElementHandlers
    //         });
    //         // _pdffile.substring(0, pdffile.lastIndexOf("/"))
    //         // _pdffile.replace(/^.*[\\\/]/, '')
    //     },
    // }).dxSpeedDialAction('instance');

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