
var
    ToolbarInfoPD = [
        {
            location: 'before',
            widget: 'dxTextBox',
            options: {
                accessKey: undefined,
                activeStateEnabled: true,
                component: null,
                disabled: false,
                elementAttr: {},
                focusStateEnabled: true,
                height: undefined,
                hint: undefined,
                hoverStateEnabled: true,
                icon: "unlock",
                onClick(e){
                    const _secure = e.component.option('icon') === 'lock';
                    //dataGrid.option('grouping.autoExpandAll', _secure);
                    e.component.option('text', _secure ? 'unlock' : 'lock');
                    e.component.option('icon', _secure ? 'unlock' : 'lock');
                    DevExpress.ui.notify('button has been clicked!');
                },
                onContentReady: null,
                onDisposing: null,
                onInitialized: null,
                onOptionChanged: null,
                render: null,
                rtlEnabled: false,
                stylingMode: "contained",
                tabIndex: 1,
                template: "",
                text: "unlocked",
                type: "default",
                useSubmitBehavior: true,
                validationGroup: undefined,
                visible: true,
                width: undefined
            },
        },
    ]