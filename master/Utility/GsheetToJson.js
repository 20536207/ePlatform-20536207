
function GetJsonData(_this, _DBId, _TBId, _Range, _Query) {

    var _Url = (
        "https://docs.google.com/spreadsheets/d/" + _DBId + "/gviz/tq?" +
        "&gid=" + _TBId +
        "&range=" + _Range
        // + "&tq=" + _Query
    );

    var query = new google.visualization.Query(_Url);
    query.setQuery(_Query);
    query.send(response => {

        if (!(response.isError())) {
            var data = response.getDataTable();
            data = JSON.parse(data.toJSON());

            //GetJSONData Structure==================================
            var
                _DataSource = [],
                _Column = [];

            data.rows.forEach((_rowItems, _rowIndex) => {
                var _arrRow = {};

                _rowItems.c.forEach((_cItems, _cIndex) => {
                    var _field = data.cols[_cIndex],
                        _value = _field.type == 'date' ? (_cItems == null ? "" : _cItems.f) : (_cItems == null ? "" : _cItems.v),
                        _arrCol = {};

                    _arrRow[_field.label] = _value == null ? "" : _value;

                    // set column ===========================================
                    if (_rowIndex == 0) {
                        _arrCol["caption"] = _field.label;
                        _arrCol["fixed"] = _cIndex == 0 ? true : false;
                        _arrCol["dataField"] = _field.label;
                        _arrCol["sortOrder"] = _cIndex == 0 ? "asc" : "";
                        _arrCol["dataType"] = _field.type;
                        _arrCol["format"] = _field.pattern;
                        _Column.push(_arrCol);
                    };

                });
                _DataSource.push(_arrRow);
            });
            _this.option("dataSource", _DataSource);
            return;
        } else {
            _notify('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
            return;
        }
    });

};