
var _zoomScaleCanvas = 0;
$(document).ready(function () {
    //==================================================================================================================
    GoPdfJsViewer(
        _PdfFilePageContains,
        document.getElementById("pdfPageContains")
    );

    //==================================================================================================================
    $("#pdfMainPage").dxScrollView({
        scrollByContent: true,
        scrollByThumb: true,
        useNative: false,
        showScrollbar: 'onHover',
        direction: 'both',
        // height: '100%',
        // width: '100%',
    });

});