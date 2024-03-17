function GetJsonData(_DBId, _TBId, _Range, _Query) {

    let _Url = (
        "https://docs.google.com/spreadsheets/d/" + _DBId + "/gviz/tq?" +
        "&gid=" + _TBId +
        "&range=" + _Range +
        "&tq=" + _Query
    );

    let _JsonData = [];

    return fetch(_Url)
        .then(res => {
            return res.text().then(rep => {
                let _data = JSON.parse(rep.substring(47).slice(0, -2));

                _data.table.rows.forEach((_rowItems, _rowIndex) => {
                    let _arr = {};

                    _rowItems.c.forEach((_cItems, _cIndex) => {
                        let _field = _data.table.cols[_cIndex].label;
                        let _value = _data.table.cols[_cIndex].type == 'date' ? (_cItems == null ? "" : _cItems.f) : (_cItems == null ? "" : _cItems.v);
                        _arr[_field] = _value == null ? "" : _value;
                    });

                    _JsonData.push(_arr);
                });
                return JSON.stringify(_JsonData);
            });
        });
};

// $(document).ready(function () {

//     GetJsonData(
//         "15SkVrus9I9rb79E3Hf6EninYthneYxIKJfw8OvIMMUc", //SpreadsheetID
//         1316011922,                                     //SheetID
//         "A1:CX",                                        //Range
//         "SELECT * WHERE CU = 'Aktif'"                   //Filter or Query
//     ).then(_MyData => {

//     });

// })