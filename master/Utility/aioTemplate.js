import * as aioFontAwesomeCSS from "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.css";
import * as aioWidgetCSS from "https://cdn3.devexpress.com/jslib/23.2.5/css/dx.dark.compact.css";
//   <script src="https://cdn3.devexpress.com/jslib/23.2.5/js/dx.all.js"></script>
// Notfy Message ========================================================
function _notify(_message) {
    return DevExpress.ui.notify(
        {
            message: _message,
            maxWidth: 300,
            displayTime: 1000,
            animation: {
                show: { type: 'fade', duration: 400, from: 0, to: 1 },
                hide: { type: 'fade', duration: 40, to: 0 },
            },
        },
        { position: "top right", direction: "down-push" }
    );
};


