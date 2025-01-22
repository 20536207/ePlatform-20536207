var _zoomScaleCanvas = 0;

$(document).ready(function () {

    //==================================================================================================================
    // GoPdfJsViewer(
    //     _main.arrVarGlobal._PdfFilePageContains,
    //     document.getElementById("pdfPageContains")
    // );
    $("#pdfPageContains").append(
        `  
            <iframe frameborder="no"
                src="${_main.arrVarGlobal._PdfFilePageContains}"
                class="pdfframe"
                
            </iframe>
        `
    )
    //==================================================================================================================
    $("#pdfMainPage").dxScrollView({
        scrollByContent: true,
        scrollByThumb: true,
        useNative: false,
        showScrollbar: 'onHover',
        direction: 'both',
    });

});