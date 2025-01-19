var _zoomScaleCanvas = 0;

$(document).ready(function () {

    //==================================================================================================================
    GoPdfJsViewer(
        _main.arrVarGlobal._PdfFilePageContains,
        document.getElementById("pdfPageContains")
    );
    // $("#pdfPageContains").append(
    //     `  
    //             <div style="display: flex; flex-direction: column; width: 100%;">
    //                 <iframe frameborder="no"
    //                     src="https://drive.google.com/file/d/1ttBhpssaUpe8FM9RVUefgR5hoiUs7VYd/preview"
    //                     style="overflow:hidden;overflow-x:hidden;overflow-y:hidden;height:100%;width:100%;position:absolute;top:0px;left:0px;right:0px;bottom:0px"
    //                     height="100%" width="100%"
    //                 </iframe>
    //             </div>
           
    // `
    // )
    //==================================================================================================================
    $("#pdfMainPage").dxScrollView({
        scrollByContent: true,
        scrollByThumb: true,
        useNative: false,
        showScrollbar: 'onHover',
        direction: 'both',
    });

});