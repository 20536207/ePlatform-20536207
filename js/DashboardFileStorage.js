$(function () {
  var
    _DataFileStorage =
      [
        {
          name: "01-Dokumen",
          isDirectory: true,
          items: [
            {
              name: "01-01-SubDokumen",
              isDirectory: true,
              items: [
                {
                  name: "File-01",
                  isDirectory: false,
                },
                {
                  name: "File-02",
                  isDirectory: false,
                },
                {
                  "name": "File-03",
                  "isDirectory": false,
                },
              ],
            },
            {
              name: "01-02-SubDokumen",
              isDirectory: true,
              items: [
                {
                  name: "File-01",
                  isDirectory: false,
                },
                {
                  name: "File-02",
                  isDirectory: false,
                },
                {
                  "name": "File-03",
                  "isDirectory": false,
                },
              ],
            },
          ],
        },
        {
          name: "02-Dokumen",
          isDirectory: true,
          items: [
            {
              name: "02-01-SubDokumen",
              isDirectory: true,
              items: [
                {
                  name: "File-01",
                  isDirectory: false,
                },
                {
                  name: "File-02",
                  isDirectory: false,
                },
                {
                  "name": "File-03",
                  "isDirectory": false,
                },
              ],
            },
            {
              name: "02-02-SubDokumen",
              isDirectory: true,
              items: [
                {
                  name: "File-01",
                  isDirectory: false,
                },
                {
                  name: "File-02",
                  isDirectory: false,
                },
                {
                  "name": "File-03",
                  "isDirectory": false,
                },
              ],
            },
          ],
        },
      ],

    _UrlPathStorage =
      new DevExpress.fileManagement.RemoteFileSystemProvider({
        endpointUrl: 'https://js.devexpress.com/Demos/Mvc/api/file-manager-file-system-images',
      }),

    _DashboardFileStorage = $('#DashboardFileStorage').dxFileManager({
      name: 'File-Manager',
      fileSystemProvider: _UrlPathStorage,
      height: '98%',
      permissions: {
        create: true,
        copy: true,
        move: true,
        delete: true,
        rename: true,
        upload: true,
        download: true,
      },
      onSelectedFileOpened(e) {
        const popup = $('#photo-popup').dxPopup('instance');
        popup.option({
          title: e.file.name,
          contentTemplate: `<img src="${e.file.dataItem.url}" class="photo-popup-image" />`,
        });
        popup.show();
      },
    }).dxFileManager('instance');

  $('#photo-popup').dxPopup({
    maxHeight: 600,
    hideOnOutsideClick: true,
    onContentReady(e) {
      const $contentElement = e.component.content();
      $contentElement.addClass('photo-popup-content');
    },
  });
  
})