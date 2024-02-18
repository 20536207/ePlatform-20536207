$(function () {
  var
    _UserAuth = $("#UserAuthentication").dxPopup({
      hideOnParentScroll: true,
      title: "User Authentication",
      visible: true,
      width: () => {
        return () => {
          if ($(window).width() <= 480) { return "90%" } else
            if ($(window).width() >= 481 && $(window).width() <= 640) { return "70%" } else
              if ($(window).width() >= 641 && $(window).width() <= 980) { return "50%" } else { "100%" };
        };
      },
      height: "auto",
      contentTemplate: () => {
        return $("<div />").dxForm({
          formData: {
            username: null,
            password: null
          },
        })
      },
      toolbarItems: [{
        widget: "dxButton",
        location: "after",
        toolbar: "bottom",
        location: "center",
        options: {
          text: "Login",
          onClick: function (e) { /* ... */ }
        }
      }],

    });

});

// // //========================================================================================================
// _UserAuthentication1 = $('#UtilityUserAuthentication1').dxTextBox({
//   accessKey: undefined,
//   activeStateEnabled: false,
//   buttons: [
//     {
//       location: "after",
//       name: "passwordBtn",
//       options: {
//         icon: 'lock',
//         type: 'default',
//         onClick: function (e) {
//           var button = e.component;
//           button.option('icon', button.option('icon') === 'lock' ? 'unlock' : 'lock');
//           _userauth.option('mode', _userauth.option('mode') === 'text' ? 'password' : 'text');
//         },

//       }
//     },
//     {
//       name: 'login',
//       location: 'after',
//       options: {
//         icon: 'arrowright',
//         text: 'Next',
//         type: 'default',
//         useSubmitBehavior: true,
//         /*
//         onClick: function () {
//           $("#boxOptions").remove();
//           $("body").prepend("<div id='gridContainer'></div>");

//           DevExpress.ui.notify(
//             {
//               message: _userauth.option('value'),
//               maxWidth: 300,
//               displayTime: 3000,
//               animation: {
//                 show: { type: 'fade', duration: 400, from: 0, to: 1 },
//                 hide: { type: 'fade', duration: 40, to: 0 },
//               },
//             },
//             {position: "top right", direction: "down-push"}
//           );
//         },
//         */
//       }
//     }
//   ],
//   disabled: false,
//   elementAttr: {},
//   focusStateEnabled: true,
//   height: undefined,
//   hint: undefined,
//   hoverStateEnabled: true,
//   inputAttr: {},
//   isValid: true,
//   label: "User Authentication",
//   labelMode: "floating",
//   mask: "",
//   maskChar: "_",
//   maskInvalidMessage: "Value is invalid",
//   maskRules: {},
//   maxLength: null,
//   mode: "password",
//   name: "",
//   onChange: null,
//   onContentReady: null,
//   onCopy: null,
//   onCut: null,
//   onDisposing: null,
//   onEnterKey: null,
//   onFocusIn: null,
//   onFocusOut: null,
//   onInitialized: null,
//   onInput: null,
//   onKeyDown: null,
//   onKeyUp: null,
//   onOptionChanged: null,
//   onPaste: null,
//   onValueChanged: null,
//   placeholder: "",
//   readOnly: false,
//   rtlEnabled: false,
//   showClearButton: true,
//   showMaskMode: "always",
//   spellcheck: false,
//   stylingMode: "outlined",
//   tabIndex: 0,
//   useMaskedValue: true,
//   validationError: null,
//   validationErrors: null,
//   validationMessageMode: "auto",
//   validationMessagePosition: "bottom",
//   validationStatus: "valid",
//   value: null,
//   valueChangeEvent: "change",
//   visible: true,
//   width: 300
// }).dxTextBox('instance');