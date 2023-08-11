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
        endpointUrl: 'https://js.devexpress.com/Demos/Mvc/api/file-manager-file-system-scripts',
      });

  _DashboardFileStorage = $('#DashboardFileStorage').dxFileManager({
    name: 'File-Manager',
    fileSystemProvider: _DataFileStorage,
    height: '100%',
    permissions: {
      create: true,
      copy: true,
      move: true,
      delete: true,
      rename: true,
      upload: true,
      download: true,
    },
  }).dxFileManager('instance');
})