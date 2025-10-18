var _zoomScaleCanvas = 0;

$(document).ready(async function () {
    $("#pdfMainPage").dxScrollView({
        scrollByContent: true,
        scrollByThumb: true,
        useNative: false,
        showScrollbar: 'onHover',
        direction: 'both',
    }).dxScrollView('instance');

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
    
});