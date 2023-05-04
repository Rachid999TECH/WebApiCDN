function CertFileManAdd() {

    var ActionBtnId = new String('ParamActionBtnId');
    var IsMargin = true;
    var Icon = 'fas fa-plus-circle';

    ActionSpin(ActionBtnId, IsMargin);

    //var DhmNowString = new String(DateTimeNowGet()).replace("/", "").replace("/", "").replace(" ", "").replace(":", "").replace(":", "");
    var files = $("#FileId").get(0).files;
    var data = new FormData();
    for (var i = 0; i < files.length; i++) {
        data.append("FileId", files[i]);
    };

    HideReport('CertFileTableReportId');
    $.ajax({
        url: "/Cert/CertFileManAdd",
        method: "POST",
        contentType: false,
        processData: false,
        data: data,
        //contentType: "application/json; charset=utf-8",
        //dataType: "text",
        success: function (data) {

            if (data == '0') {
                DataTableActionBtnIconSet(ActionBtnId, Icon);
                alert('Vous n\'avez pas les autorisations nécessaires pour effectuer cette action!')
            }
            else {
                
                ActionBtnSet(ActionBtnId, Icon, IsMargin);
                //DataTableActionBtnIconSet(ActionBtnId, Icon);
                CertFileManDisplay(data);
            }
        },
        error: function (request, status, error) {
            //DataTableActionBtnIconSet(ActionBtnId, Icon);
            alert("Problème de connexion.");
        }
    });
};

function CertFileManPlay(CertFileId) {
    var ActionBtnId = 'CertFileManPlay' + 'BtnId' + CertFileId;
    $('#' + ActionBtnId).find('span').attr('class', 'fa fa-spinner fa-spin');

    var Icon = 'fas fa-check';
    var obj = {};
    obj.CertFileId = CertFileId;
    $.ajax({
        url: "/Cert/CertFileManPlay",
        method: "POST",
        contentType: "application/json; charset=utf-8",
        dataType: "text",
        data: JSON.stringify(obj),
        success: function (data) {
            //if (data != '') {
            //    $('#' + ActionBtnId).find('span').attr('class', 'fas fa-exclamation-triangle');
            //    alert(data);
            //}
            //else {
            //    $('#' + ActionBtnId).find('span').attr('class', 'fa fa-spinner fa-spin');
            //}
        },
        error: function (request, status, error) {
            alert('Le proessus s\'est arrêté');
        }
    });
}

function CertFileManDisplay(CertFileId) {

    var ActionBtnId = 'ParamActionBtnId';
    var IsMargin = true;
    var Icon = 'fas fa-eye';

    ActionSpin(ActionBtnId, IsMargin);

    var DateStringStart = GetDateStringFromDatePicker('DateStartId');
    var DateStringEnd = GetDateStringFromDatePicker('DateEndId');

    HideReport('CertFile' + 'TableReportId');
    $('#CertFile' + 'TableId').DataTable().destroy();;
    $('#CertFile' + 'TableId').DataTable({
        "initComplete": function (settings, json) {
            ShowReport('CertFile' + 'TableReportId');
            ActionBtnSet(ActionBtnId, Icon, IsMargin);

            if (CertFileId != '0') {
                CertFileManPlay(CertFileId);
            }

            //CertFileManRestart();
        },
        "ajax": {
            "url": "/Cert/CertFileManDisplay",
            "type": "GET",
            "datatype": "json",
            "data": {
                DateStringStart: DateStringStart,
                DateStringEnd: DateStringEnd,
                CertFileId: CertFileId
            }
        },
        "columns": [
            { "data": "SourceName" }, //0
            { "data": "FileTypeName" }, //1
            { "data": "FileNameOrigin" }, //2
            { "data": "DhmCreation" },//3
            { "data": "DhmModification" },//4

            { "data": "LinesNumber" },//5
            { "data": "CurrentLineNumber" },//6

            { "data": "CertFileId" },//7 Progress
            { "data": "CertFileId" },//8

            { "data": "FullName" },//9

            { "data": "CertFileId" },//10 Handle
            { "data": "CertFileId" },//11 Delete
        ],        
        "columnDefs": [
            { "width": "3%", "className": "text-left", "targets": 0 },
            { "width": "3%", "className": "text-left", "targets": 1 },
            { "width": "3%", "className": "text-left", "targets": 2 },
            { "width": "3%", "className": "text-center", "targets": 3 },
            { "width": "3%", "className": "text-center", "targets": 4 },

            { "width": "3%", "className": "text-right", "targets": 5 },
            { "width": "3%", "className": "text-right", "targets": 6 },

            { "width": "3%", "className": "text-right", "targets": 7 },
            { "width": "3%", "className": "text-left", "targets": 8 },

            { "width": "3%", "className": "text-left", "targets": 9 },
            
            { "width": "3%", "className": "text-center", "targets": 10 },
            { "width": "3%", "className": "text-center", "targets": 11 },

            { "targets": 0, "render": function (data, type, row) { return data; } },
            { "targets": 1, "render": function (data, type, row) { return data; } },
            { "targets": 2, "render": function (data, type, row) { return data; } },
            { "targets": 3, "render": function (data, type, row) { return GetDhmValueFromDataTableDate(data) } },
            { "targets": 4, "render": function (data, type, row) { return GetDhmValueFromDataTableDate(data) } },

            { "targets": 5, "render": function (data, type, row) { return DataTableGetElementId('LinesNumberId', row['CertFileId'], data); } },
            { "targets": 6, "render": function (data, type, row) { return DataTableGetElementId('CurrentLineNumberId', row['CertFileId'], data); } },
                      
            { "targets": 7, "render": function (data, type, row) { return DataTableProgressPercentGet(row['CertFileId'], row['LinesNumber'], row['CurrentLineNumber']); } },
            { "targets": 8, "render": function (data, type, row) { return DataTableProgressBarGet(row['CertFileId'], row['LinesNumber'], row['CurrentLineNumber']); } },
            
            { "targets": 9, "render": function (data, type, row) { return data; } },

            {
                "targets": 10, "render": function (data, type, row) {

                    var online = '<span class="fa fa-circle" style="' +
                        'font-size: 8px;' +
                        'margin-right: 4px;' +
                        'background: #fe1200;' +
                        'margin: -2px 0 0 -2px;' +
                        'border-radius: 50%;' +
                        'color: #fe1200;' +
                        'margin-top: 8px;' +
                        '"></span>';

                    if (row['IsFinnished'] == true) {
                        online = '<span class="fa fa-circle" style="' +
                            'font-size: 8px;' +
                            'margin-right: 4px;' +
                            'background: #A5A5A5;' +
                            'margin: -2px 0 0 -2px;' +
                            'border-radius: 50%;' +
                            'color: #A5A5A5;' +
                            'margin-top: 8px;' +
                            '"></span>';
                        return online + ' ' + DataTableGetButton('CertFileManRestart', row['CertFileId'], 'fas fa-step-backward', '0048ff');
                    }
                    else {
                        if (row['IsRunning']) {
                            online = '<span class="fa fa-circle" style="' +
                                'font-size: 8px;' +
                                'margin-right: 4px;' +
                                'background: #5cb85c;' +
                                'margin: -2px 0 0 -2px;' +
                                'border-radius: 50%;' +
                                'color: #5cb85c;' +
                                'margin-top: 8px;' +
                                '"></span>';
                            return online + ' ' + DataTableGetButton('', row['CertFileId'], 'fa fa-spinner fa-spin', '0048ff');
                        }
                        else {
                            return online + ' ' + DataTableGetButton('CertFileManPlay', row['CertFileId'], 'far fa-play-circle', '0048ff');
                        }

                    }
                }
            },
            { "targets": 11, "render": function (data, type, row) { return DataTableGetButton('CertFileManDelete', data, 'far fa-trash-alt', 'fe1200'); } },
        ],
        "iDisplayLength": 10,
        "language": {
            "lengthMenu": "Afficher _MENU_ lignes par page",
            "zeroRecords": "Aucun résultat",
            "info": "Page _PAGE_ / _PAGES_ &nbsp;<i>(Nombre de lignes : _TOTAL_)</i>",
            "infoEmpty": "---",
            "infoFiltered": "(Nombre de lignes filtrées : _MAX_ total)",
            "search": "Filtrer ",
            "oPaginate": {
                "sNext": "Suivant",
                "sPrevious": "Précédent"
            }
        },
        "processing": false,
        "responsive": true,
        "bFilter": false,
        "autoWidth": false,
        "searching": false,
        "lengthChange": true,
        "showNEntries": true,
        "bInfo": true,
        "bPaginate": true,
        "ordering": true,
        "footerCallback": function (row, data, start, end, display) {

            var api = this.api(), data;
            var intVal = function (i) {
                return typeof i === 'string' ?
                    i.replace(/[\$,]/g, '') * 1 :
                    typeof i === 'number' ?
                        i : 0;
            };

            DataTableTotalIntGet(api, intVal, 5);
        }
    });
}

function CertFileManDelete(CertFileId) {

    var ActionBtnId = 'CertFileManDeleteBtnId' + CertFileId;
    var Icon = 'far fa-trash-alt';

    var obj = {};
    obj.CertFileId = CertFileId;

    $('#' + ActionBtnId).find('span').attr('class', 'fa fa-spinner fa-spin');

    $.ajax({
        url: "/Cert/CertFileManDelete",
        method: "POST",
        data: JSON.stringify(obj),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            $('#' + ActionBtnId).find('span').attr('class', 'fa fa-spinner fa-spin');
            $('#' + ActionBtnId).find('span').attr('class', 'fas fa-minus-circle');
            $('#' + ActionBtnId).find('span').attr('style', 'color:#ff0000');
            $('#' + ActionBtnId).attr('onclick', '');
        },
        error: function (request, status, error) {
            alert('Vous ne disposez pas des autorisations nécessaires pour effectuer cette action');
            $('#' + ActionBtnId).find('span').attr('class', Icon);
        }
    });
}

function CertFileManRestart() {
    $.ajax({
        url: "/Cert/CertFileManToRestartGet",
        method: "POST",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: true,
        success: function (data) {
            jQuery.each(data, function (index, itemData) {

                var imax = itemData.length;

                for (let i = 0; i < imax; i++) {
                    var CertFileId = itemData[i].CertFileId;
                    //alert(CertFilePlanId);
                    JsSleep(2000);
                    CertFileManPlay(CertFileId);
                }
            });
        }
    })
}

function CertFileReadTrxLane(ActionBtnId, Icon, CertFilePlanId, FilePath) {
    $('#' + ActionBtnId).find('span').attr('class', 'fa fa-spinner fa-spin');

    var Pattern = 'CertFileTrxLane';
    var PatternTableId = Pattern + 'TableId';
    var PatternTableReportId = Pattern + 'TableReportId';

    HideReport(PatternTableReportId);


    //$('#CertFileTrxLaneTableId tfoot th').each(function () {
    //    var title = $(this).text();
    //    $(this).html('<input type="text" placeholder="Search ' + title + '" />');
    //});

    $('#' + PatternTableId).DataTable().destroy();
    $('#' + PatternTableId).DataTable({
        "initComplete": function (settings, json) {
            $('#' + ActionBtnId).find('span').attr('class', Icon);
            ShowReport(PatternTableReportId);




        },
        "ajax": {
            "url": "/Cert/CertFileRead",
            "type": "GET",
            "datatype": "json",
            "data": {
                "CertFilePlanId": CertFilePlanId,
                "FilePath": FilePath
            }
        },
        "columns": [
            { "data": "SiteName" }, //0
            { "data": "StationNumber" }, //1
            { "data": "LaneName" }, //2
            { "data": "BillingId" },//3            
            { "data": "CategoryPostDacId" },//4
            { "data": "CashierNumber" },//5

            { "data": "DhmValuePostStart" },//6
            { "data": "DhmValue" },//7
            { "data": "TrxNumber" },//8
            { "data": "TrxIndex" },//9
            { "data": "PartialPrice" },//10           

            { "data": "ProductNumber" },//11      
            { "data": "ObsPassId" },//12
            { "data": "ObsTickId" },//13
            { "data": "ObsMpId" },//14
            { "data": "ObsSequId" },//15
            { "data": "ObsOcrId" },//16
            { "data": "CategoryPreDacId" },//17

            { "data": "CertTrxLaneRecoId" },//18
        ],
        "columnDefs": [
            { "width": "3%", "className": "text-center", "targets": 0 },
            { "width": "3%", "className": "text-center", "targets": 1 },
            { "width": "3%", "className": "text-center", "targets": 2 },
            { "width": "3%", "className": "text-center", "targets": 3 },
            { "width": "3%", "className": "text-center", "targets": 4 },
            { "width": "3%", "className": "text-center", "targets": 5 },

            { "width": "3%", "className": "text-center none", "targets": 6 },
            { "width": "3%", "className": "text-center", "targets": 7 },
            { "width": "3%", "className": "text-center", "targets": 8 },
            { "width": "3%", "className": "text-center", "targets": 9 },
            { "width": "3%", "className": "text-center", "targets": 10 },

            { "width": "3%", "className": "text-center none", "targets": 11 },
            { "width": "3%", "className": "text-center none", "targets": 12 },
            { "width": "3%", "className": "text-center none", "targets": 13 },
            { "width": "3%", "className": "text-center none", "targets": 14 },
            { "width": "3%", "className": "text-center none", "targets": 15 },
            { "width": "3%", "className": "text-center none", "targets": 16 },
            { "width": "3%", "className": "text-center none", "targets": 17 },

            { "width": "3%", "className": "text-center", "targets": 18 },

            { "targets": 6, "render": function (data, type, row) { return GetDhmValueNullableFromDataTableDate(data); } },
            { "targets": 7, "render": function (data, type, row) { return GetDhmValueFromDataTableDate(data); } },

            { "targets": 8, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 9, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 10, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },

            { "targets": 18, "render": function (data, type, row) { return DataTableGetButton('CertLaneTrxLaneSearch', data, 'fas fa-search', '0048ff'); } },
        ],
        "language": {
            "lengthMenu": "Afficher _MENU_ lignes par page",
            "zeroRecords": "Aucun résultat",
            "info": "Page _PAGE_ / _PAGES_ &nbsp;<i>(Nombre de lignes : _TOTAL_)</i>",
            "infoEmpty": "---",
            "infoFiltered": "(Nombre de lignes filtrées : _MAX_ total)",
            "search": "Filtrer ",
            "oPaginate": {
                "sNext": "Suivant",
                "sPrevious": "Précédent"
            }
        },
        "iDisplayLength": 100,
        "processing": false,
        "responsive": true,
        "bFilter": true,
        "autoWidth": false,
        "searching": true,
        "lengthChange": true,
        "showNEntries": true,
        "bInfo": true,
        "bPaginate": true,
        "ordering": true,
        "footerCallback": function (row, data, start, end, display) {
            var api = this.api(), data;
            var intVal = function (i) {
                return typeof i === 'string' ?
                    i.replace(/[\$,]/g, '') * 1 :
                    typeof i === 'number' ?
                        i : 0;
            };

            DoubleTotal1 = api.column(10).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);
            //DoubleTotal2 = api.column(25).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);
            //IntTotal1 = api.column(8).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);
            //IntTotal2 = api.column(10).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);

            $(api.column(10).footer()).html(numFormat(DoubleTotal1));
            //$(api.column(25).footer()).html(numFormat(DoubleTotal2));

            //$(api.column(8).footer()).html(numShortFormat(IntTotal1));
            //$(api.column(10).footer()).html(numShortFormat(IntTotal2));
        }
    });
}



function CertFileReadPost(ActionBtnId, Icon, CertFilePlanId, FilePath) {

    $('#' + ActionBtnId).find('span').attr('class', 'fa fa-spinner fa-spin');

    var Pattern = 'CertFilePost';
    var PatternTableId = Pattern + 'TableId';
    var PatternTableReportId = Pattern + 'TableReportId';

    HideReport(PatternTableReportId);

    $('#' + PatternTableId).DataTable().destroy();
    $('#' + PatternTableId).DataTable({
        "initComplete": function (settings, json) {
            $('#' + ActionBtnId).find('span').attr('class', Icon);
            ShowReport(PatternTableReportId);
        },
        "ajax": {
            "url": "/Cert/CertFileRead",
            "type": "GET",
            "datatype": "json",
            "data": {
                "CertFilePlanId": CertFilePlanId,
                "FilePath": FilePath
            }
        },
        "columns": [

            { "data": "SiteName" },//0
            { "data": "StationNumber" },//1
            { "data": "LaneName" },//2
            { "data": "DhmValueStart" },//3
            { "data": "DhmValue" },//4
            { "data": "CashierNumber" },//5

            { "data": "MpNumber" },//6

            { "data": "ReceiptLane" },//7
            { "data": "ReceiptCe" },//8
            { "data": "ReceiptGap" },//9

            { "data": "IsLane" },//10
            { "data": "IsOpe" },//11
            { "data": "IsCe" },//12

            { "data": "CertPostRecoId" },//13 Trx
            { "data": "CertPostRecoId" },//14 Msg
            { "data": "CertPostRecoId" },//15 Zip
            { "data": "CertPostRecoId" },//16 Lane

            { "data": "Mp01C1Receipt" },//17
            { "data": "Mp01C2Receipt" },//14
            { "data": "Mp01C3Receipt" },//15
            { "data": "Mp01Receipt" },//16
            { "data": "Mp01C1Number" },//17
            { "data": "Mp01C2Number" },//18
            { "data": "Mp01C3Number" },//19
            { "data": "Mp01Number" },//20

            { "data": "Mp28C1Receipt" },//21
            { "data": "Mp28C2Receipt" },//22
            { "data": "Mp28C3Receipt" },//23
            { "data": "Mp28Receipt" },//24
            { "data": "Mp28C1Number" },//25
            { "data": "Mp28C2Number" },//26
            { "data": "Mp28C3Number" },//27
            { "data": "Mp28Number" },//28

            { "data": "Mp40C1Receipt" },//29
            { "data": "Mp40C2Receipt" },//30
            { "data": "Mp40C3Receipt" },//31
            { "data": "Mp40Receipt" },//32
            { "data": "Mp40C1Number" },//33
            { "data": "Mp40C2Number" },//34
            { "data": "Mp40C3Number" },//35
            { "data": "Mp40Number" },//36

            { "data": "Mp29C1Receipt" },//37
            { "data": "Mp29C2Receipt" },//38
            { "data": "Mp29C3Receipt" },//39
            { "data": "Mp29Receipt" },//40
            { "data": "Mp29C1Number" },//41
            { "data": "Mp29C2Number" },//42
            { "data": "Mp29C3Number" },//43
            { "data": "Mp29Number" },//44

            { "data": "Mp05C1Receipt" },//45
            { "data": "Mp05C2Receipt" },//46
            { "data": "Mp05C3Receipt" },//47
            { "data": "Mp05Receipt" },//48
            { "data": "Mp05C1Number" },//49
            { "data": "Mp05C2Number" },//50
            { "data": "Mp05C3Number" },//51
            { "data": "Mp05Number" },//52

            { "data": "Mp06C1Receipt" },//53
            { "data": "Mp06C2Receipt" },//54
            { "data": "Mp06C3Receipt" },//55
            { "data": "Mp06Receipt" },//56
            { "data": "Mp06C1Number" },//57
            { "data": "Mp06C2Number" },//58
            { "data": "Mp06C3Number" },//59
            { "data": "Mp06Number" },//60

            { "data": "Mp07C1Receipt" },//
            { "data": "Mp07C2Receipt" },//
            { "data": "Mp07C3Receipt" },//
            { "data": "Mp07Receipt" },//
            { "data": "Mp07C1Number" },//
            { "data": "Mp07C2Number" },//
            { "data": "Mp07C3Number" },//
            { "data": "Mp07Number" },//

            { "data": "Mp08C1Receipt" },//
            { "data": "Mp08C2Receipt" },//
            { "data": "Mp08C3Receipt" },//
            { "data": "Mp08Receipt" },//
            { "data": "Mp08C1Number" },//
            { "data": "Mp08C2Number" },//
            { "data": "Mp08C3Number" },//
            { "data": "Mp08Number" },//

            { "data": "Mp09C1Receipt" },//
            { "data": "Mp09C2Receipt" },//
            { "data": "Mp09C3Receipt" },//
            { "data": "Mp09Receipt" },//
            { "data": "Mp09C1Number" },//
            { "data": "Mp09C2Number" },//
            { "data": "Mp09C3Number" },//
            { "data": "Mp09Number" },//

            { "data": "Mp15C1Receipt" },//
            { "data": "Mp15C2Receipt" },//
            { "data": "Mp15C3Receipt" },//
            { "data": "Mp15Receipt" },//
            { "data": "Mp15C1Number" },//
            { "data": "Mp15C2Number" },//
            { "data": "Mp15C3Number" },//
            { "data": "Mp15Number" },//

            { "data": "Mp16C1Receipt" },//
            { "data": "Mp16C2Receipt" },//
            { "data": "Mp16C3Receipt" },//
            { "data": "Mp16Receipt" },//
            { "data": "Mp16C1Number" },//
            { "data": "Mp16C2Number" },//
            { "data": "Mp16C3Number" },//
            { "data": "Mp16Number" },//

            { "data": "Mp12C1Receipt" },//
            { "data": "Mp12C2Receipt" },//
            { "data": "Mp12C3Receipt" },//
            { "data": "Mp12Receipt" },//
            { "data": "Mp12C1Number" },//
            { "data": "Mp12C2Number" },//
            { "data": "Mp12C3Number" },//
            { "data": "Mp12Number" },//

            { "data": "Mp41C1Receipt" },//
            { "data": "Mp41C2Receipt" },//
            { "data": "Mp41C3Receipt" },//
            { "data": "Mp41Receipt" },//
            { "data": "Mp41C1Number" },//
            { "data": "Mp41C2Number" },//
            { "data": "Mp41C3Number" },//
            { "data": "Mp41Number" },//

            { "data": "Mp13C1Receipt" },//
            { "data": "Mp13C2Receipt" },//
            { "data": "Mp13C3Receipt" },//
            { "data": "Mp13Receipt" },//
            { "data": "Mp13C1Number" },//
            { "data": "Mp13C2Number" },//
            { "data": "Mp13C3Number" },//
            { "data": "Mp13Number" },//

            { "data": "Mp30C1Receipt" },//
            { "data": "Mp30C2Receipt" },//
            { "data": "Mp30C3Receipt" },//
            { "data": "Mp30Receipt" },//
            { "data": "Mp30C1Number" },//
            { "data": "Mp30C2Number" },//
            { "data": "Mp30C3Number" },//
            { "data": "Mp30Number" },//

            { "data": "Mp31C1Receipt" },//
            { "data": "Mp31C2Receipt" },//
            { "data": "Mp31C3Receipt" },//
            { "data": "Mp31Receipt" },//
            { "data": "Mp31C1Number" },//
            { "data": "Mp31C2Number" },//
            { "data": "Mp31C3Number" },//
            { "data": "Mp31Number" },//

            { "data": "Mp32C1Receipt" },//
            { "data": "Mp32C2Receipt" },//
            { "data": "Mp32C3Receipt" },//
            { "data": "Mp32Receipt" },//
            { "data": "Mp32C1Number" },//
            { "data": "Mp32C2Number" },//
            { "data": "Mp32C3Number" },//
            { "data": "Mp32Number" },

            { "mData": function vehicle(data, type, dataToSet) { return data.ModeId + '-' + data.ModeNameToll; } },//1
            //{ "data": "ModeNameToll" },//
            { "data": "IsZip" },//

            { "data": "MpReceipt" },//

            { "data": "ReceiptLaneAll" },//
            { "data": "ReceiptCeAll" },//
            { "data": "ReceiptAllGap" },//

            { "data": "BagNumber" },
        ],
        "columnDefs": [
            { "width": "3%", "className": "text-center", "targets": 0 },//SiteName
            { "width": "3%", "className": "text-center", "targets": 1 },//StationNumber
            { "width": "3%", "className": "text-center", "targets": 2 },//LaneName
            { "width": "3%", "className": "text-center", "targets": 3 },//DhmValueStart
            { "width": "3%", "className": "text-center", "targets": 4 },//DhmValue
            { "width": "3%", "className": "text-center", "targets": 5 },//CashierNumber

            { "width": "3%", "className": "text-center none", "targets": 6 },//MpNumber

            { "width": "3%", "className": "text-right", "targets": 7 },//ReceiptLane
            { "width": "3%", "className": "text-right none", "targets": 8 },//ReceiptCe
            { "width": "3%", "className": "text-center none", "targets": 9 },//ReceiptGap

            { "width": "3%", "className": "text-center none", "targets": 10 },//IsLane
            { "width": "3%", "className": "text-center none", "targets": 11 },//IsOpe
            { "width": "3%", "className": "text-center none", "targets": 12 },//IsCe

            { "width": "3%", "className": "text-center none", "targets": 13 },//Trx
            { "width": "3%", "className": "text-center none", "targets": 14 },//Msg
            { "width": "3%", "className": "text-center none", "targets": 15 },//Zip
            { "width": "3%", "className": "text-center none", "targets": 16 },//Lane

            //MP
            { "width": "0%", "className": "text-center none", "targets": 17 },
            { "width": "0%", "className": "text-center none", "targets": 18 },
            { "width": "0%", "className": "text-center none", "targets": 19 },
            { "width": "0%", "className": "text-center none", "targets": 20 },
            { "width": "0%", "className": "text-center none", "targets": 21 },
            { "width": "0%", "className": "text-center none", "targets": 22 },
            { "width": "0%", "className": "text-center none", "targets": 23 },
            { "width": "3%", "className": "text-center none", "targets": 24 },

            { "width": "0%", "className": "text-center none", "targets": 25 },
            { "width": "0%", "className": "text-center none", "targets": 26 },
            { "width": "0%", "className": "text-center none", "targets": 27 },
            { "width": "0%", "className": "text-center none", "targets": 28 },
            { "width": "0%", "className": "text-center none", "targets": 29 },
            { "width": "0%", "className": "text-center none", "targets": 30 },
            { "width": "0%", "className": "text-center none", "targets": 31 },
            { "width": "3%", "className": "text-center none", "targets": 32 },

            { "width": "0%", "className": "text-center none", "targets": 33 },
            { "width": "0%", "className": "text-center none", "targets": 34 },
            { "width": "0%", "className": "text-center none", "targets": 35 },
            { "width": "0%", "className": "text-center none", "targets": 36 },
            { "width": "0%", "className": "text-center none", "targets": 37 },
            { "width": "0%", "className": "text-center none", "targets": 38 },
            { "width": "0%", "className": "text-center none", "targets": 39 },
            { "width": "0%", "className": "text-center none", "targets": 40 },

            { "width": "0%", "className": "text-center none", "targets": 41 },
            { "width": "0%", "className": "text-center none", "targets": 42 },
            { "width": "0%", "className": "text-center none", "targets": 43 },
            { "width": "0%", "className": "text-center none", "targets": 44 },
            { "width": "0%", "className": "text-center none", "targets": 45 },
            { "width": "0%", "className": "text-center none", "targets": 46 },
            { "width": "0%", "className": "text-center none", "targets": 47 },
            { "width": "0%", "className": "text-center none", "targets": 48 },

            { "width": "0%", "className": "text-center none", "targets": 49 },
            { "width": "0%", "className": "text-center none", "targets": 50 },
            { "width": "0%", "className": "text-center none", "targets": 51 },
            { "width": "0%", "className": "text-center none", "targets": 52 },
            { "width": "0%", "className": "text-center none", "targets": 53 },
            { "width": "0%", "className": "text-center none", "targets": 54 },
            { "width": "0%", "className": "text-center none", "targets": 55 },
            { "width": "0%", "className": "text-center none", "targets": 56 },

            { "width": "0%", "className": "text-center none", "targets": 57 },
            { "width": "0%", "className": "text-center none", "targets": 58 },
            { "width": "0%", "className": "text-center none", "targets": 59 },
            { "width": "0%", "className": "text-center none", "targets": 60 },
            { "width": "0%", "className": "text-center none", "targets": 61 },
            { "width": "0%", "className": "text-center none", "targets": 62 },
            { "width": "0%", "className": "text-center none", "targets": 63 },
            { "width": "0%", "className": "text-center none", "targets": 64 },

            { "width": "0%", "className": "text-center none", "targets": 65 },
            { "width": "0%", "className": "text-center none", "targets": 66 },
            { "width": "0%", "className": "text-center none", "targets": 67 },
            { "width": "0%", "className": "text-center none", "targets": 68 },
            { "width": "0%", "className": "text-center none", "targets": 69 },
            { "width": "0%", "className": "text-center none", "targets": 70 },
            { "width": "0%", "className": "text-center none", "targets": 71 },
            { "width": "0%", "className": "text-center none", "targets": 72 },

            { "width": "0%", "className": "text-center none", "targets": 73 },
            { "width": "0%", "className": "text-center none", "targets": 74 },
            { "width": "0%", "className": "text-center none", "targets": 75 },
            { "width": "0%", "className": "text-center none", "targets": 76 },
            { "width": "0%", "className": "text-center none", "targets": 77 },
            { "width": "0%", "className": "text-center none", "targets": 78 },
            { "width": "0%", "className": "text-center none", "targets": 79 },
            { "width": "0%", "className": "text-center none", "targets": 80 },

            { "width": "0%", "className": "text-center none", "targets": 81 },
            { "width": "0%", "className": "text-center none", "targets": 82 },
            { "width": "0%", "className": "text-center none", "targets": 83 },
            { "width": "0%", "className": "text-center none", "targets": 84 },
            { "width": "0%", "className": "text-center none", "targets": 85 },
            { "width": "0%", "className": "text-center none", "targets": 86 },
            { "width": "0%", "className": "text-center none", "targets": 87 },
            { "width": "0%", "className": "text-center none", "targets": 88 },

            { "width": "0%", "className": "text-center none", "targets": 89 },
            { "width": "0%", "className": "text-center none", "targets": 90 },
            { "width": "0%", "className": "text-center none", "targets": 91 },
            { "width": "0%", "className": "text-center none", "targets": 92 },
            { "width": "0%", "className": "text-center none", "targets": 93 },
            { "width": "0%", "className": "text-center none", "targets": 94 },
            { "width": "0%", "className": "text-center none", "targets": 95 },
            { "width": "0%", "className": "text-center none", "targets": 96 },

            { "width": "0%", "className": "text-center none", "targets": 97 },
            { "width": "0%", "className": "text-center none", "targets": 98 },
            { "width": "0%", "className": "text-center none", "targets": 99 },
            { "width": "0%", "className": "text-center none", "targets": 100 },
            { "width": "0%", "className": "text-center none", "targets": 101 },
            { "width": "0%", "className": "text-center none", "targets": 102 },
            { "width": "0%", "className": "text-center none", "targets": 103 },
            { "width": "0%", "className": "text-center none", "targets": 104 },

            { "width": "0%", "className": "text-center none", "targets": 105 },
            { "width": "0%", "className": "text-center none", "targets": 106 },
            { "width": "0%", "className": "text-center none", "targets": 107 },
            { "width": "0%", "className": "text-center none", "targets": 108 },
            { "width": "0%", "className": "text-center none", "targets": 109 },
            { "width": "0%", "className": "text-center none", "targets": 110 },
            { "width": "0%", "className": "text-center none", "targets": 111 },
            { "width": "0%", "className": "text-center none", "targets": 112 },

            { "width": "0%", "className": "text-center none", "targets": 113 },
            { "width": "0%", "className": "text-center none", "targets": 114 },
            { "width": "0%", "className": "text-center none", "targets": 115 },
            { "width": "0%", "className": "text-center none", "targets": 116 },
            { "width": "0%", "className": "text-center none", "targets": 117 },
            { "width": "0%", "className": "text-center none", "targets": 118 },
            { "width": "0%", "className": "text-center none", "targets": 119 },
            { "width": "0%", "className": "text-center none", "targets": 120 },

            { "width": "0%", "className": "text-center none", "targets": 121 },
            { "width": "0%", "className": "text-center none", "targets": 122 },
            { "width": "0%", "className": "text-center none", "targets": 123 },
            { "width": "0%", "className": "text-center none", "targets": 124 },
            { "width": "0%", "className": "text-center none", "targets": 125 },
            { "width": "0%", "className": "text-center none", "targets": 126 },
            { "width": "0%", "className": "text-center none", "targets": 127 },
            { "width": "0%", "className": "text-center none", "targets": 128 },

            { "width": "0%", "className": "text-center none", "targets": 129 },
            { "width": "0%", "className": "text-center none", "targets": 130 },
            { "width": "0%", "className": "text-center none", "targets": 131 },
            { "width": "0%", "className": "text-center none", "targets": 132 },
            { "width": "0%", "className": "text-center none", "targets": 133 },
            { "width": "0%", "className": "text-center none", "targets": 134 },
            { "width": "0%", "className": "text-center none", "targets": 135 },
            { "width": "0%", "className": "text-center none", "targets": 136 },

            { "width": "0%", "className": "text-center none", "targets": 137 },
            { "width": "0%", "className": "text-center none", "targets": 138 },
            { "width": "0%", "className": "text-center none", "targets": 139 },
            { "width": "0%", "className": "text-center none", "targets": 140 },
            { "width": "0%", "className": "text-center none", "targets": 141 },
            { "width": "0%", "className": "text-center none", "targets": 142 },
            { "width": "0%", "className": "text-center none", "targets": 143 },
            { "width": "0%", "className": "text-center none", "targets": 144 },

            { "width": "0%", "className": "text-center none", "targets": 145 },
            { "width": "0%", "className": "text-center none", "targets": 146 },
            { "width": "0%", "className": "text-center none", "targets": 147 },
            { "width": "0%", "className": "text-center none", "targets": 148 },
            { "width": "0%", "className": "text-center none", "targets": 149 },
            { "width": "0%", "className": "text-center none", "targets": 150 },
            { "width": "0%", "className": "text-center none", "targets": 151 },
            { "width": "0%", "className": "text-center none", "targets": 152 },

            { "width": "3%", "className": "text-center none", "targets": 153 },//ModeNameToll
            { "width": "3%", "className": "text-center none", "targets": 154 },//IsZip

            { "width": "3%", "className": "text-right none", "targets": 155 },//MpReceipt

            { "width": "3%", "className": "text-right", "targets": 156 },//ReceiptLaneAll
            { "width": "3%", "className": "text-right none", "targets": 157 },//ReceiptCeAll
            { "width": "3%", "className": "text-right none", "targets": 158 },//ReceiptAllGap

            { "width": "3%", "className": "text-center none", "targets": 159 },//BagNumber

            //{ "targets": 1, "render": function (data, type, row) { return DataTableDataWithButtonGet(CertCtrFlagBooleanGet(row['IsOpe'], row['IsCe'], 1, 1), data); } },

            { "targets": 3, "render": function (data, type, row) { return GetDhmValueNullableFromDataTableDate(data); } },
            { "targets": 4, "render": function (data, type, row) { return GetDhmValueFromDataTableDate(data); } },

            { "targets": 7, "render": function (data, type, row) { return DataTableFormatDoubleGet(data); } },
            { "targets": 8, "render": function (data, type, row) { return DataTableFormatDoubleGet(data); } },
            { "targets": 9, "render": function (data, type, row) { return GetGapDoubleFromDataTable(data); } },



            { "targets": 10, "render": function (data, type, row) { return GetGapBooleanFromDataTable(data); } },
            { "targets": 11, "render": function (data, type, row) { return GetGapBooleanFromDataTable(data); } },
            { "targets": 12, "render": function (data, type, row) { return GetGapBooleanFromDataTable(data); } },

            { "targets": 13, "render": function (data, type, row) { return DataTableGetButton('CertPostTrxLaneSearch', data, 'fas fa-gem', '0048ff'); } },
            { "targets": 14, "render": function (data, type, row) { return DataTableGetButton('CertMsgPostSearch', data, 'fas fa-search', '0048ff'); } },
            { "targets": 15, "render": function (data, type, row) { return DataTableGetButton('CertPostZipSearch', data, 'fas fa-search', '0048ff'); } },
            { "targets": 16, "render": function (data, type, row) { return DataTableGetButton('CertPostLaneSearch', data, 'fas fa-search', '0048ff'); } },

            { "targets": 154, "render": function (data, type, row) { return GetGapBooleanFromDataTable(data); } },

            { "targets": 155, "render": function (data, type, row) { return DataTableFormatDoubleGet(data); } },

            { "targets": 156, "render": function (data, type, row) { return DataTableFormatDoubleGet(data); } },
            { "targets": 157, "render": function (data, type, row) { return DataTableFormatDoubleGet(data); } },
            { "targets": 158, "render": function (data, type, row) { return GetGapDoubleFromDataTable(data); } },

            { "targets": 159, "render": function (data, type, row) { return GetGapPostWithoutReceiptFromDataTable(data, row['CashierNumber']); } },
        ],
        "language": {
            "lengthMenu": "Afficher _MENU_ lignes par page",
            "zeroRecords": "Aucun résultat",
            "info": "Page _PAGE_ / _PAGES_ &nbsp;<i>(Nombre de lignes : _TOTAL_)</i>",
            "infoEmpty": "---",
            "infoFiltered": "(Nombre de lignes filtrées : _MAX_ total)",
            "search": "Filtrer ",
            "oPaginate": {
                "sNext": "Suivant",
                "sPrevious": "Précédent"
            }
        },
        "iDisplayLength": 100,
        "processing": false,
        "responsive": true,
        "bFilter": false,
        "autoWidth": false,
        "searching": true,
        "lengthChange": false,
        "showNEntries": false,
        "bInfo": false,
        "bPaginate": false,
        "ordering": false,
        "footerCallback": function (row, data, start, end, display) {
            var api = this.api(), data;
            var intVal = function (i) {
                return typeof i === 'string' ?
                    i.replace(/[\$,]/g, '') * 1 :
                    typeof i === 'number' ?
                        i : 0;
            };

            Total1 = api.column(6).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);
            $(api.column(6).footer()).html(DataTableFormatDoubleGet(Total1));

            Total2 = api.column(155).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);
            $(api.column(155).footer()).html(DataTableFormatDoubleGet(Total2));

            Total3 = api.column(156).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);
            $(api.column(156).footer()).html(DataTableFormatDoubleGet(Total3));

            Total4 = api.column(157).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);
            $(api.column(157).footer()).html(DataTableFormatDoubleGet(Total4));

            //Total3 = api.column(12).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);



            //$(api.column(12).footer()).html(numShortFormat(Total3));

        }
    });
}


function CertFileVisualizeBoj(CertFilePlanId, FilePath) {

    //$('#' + ActionBtnId).find('span').attr('class', 'fa fa-spinner fa-spin');

    //ParamMessageReset();

    var Pattern = 'CertFileTrxLane';
    var PatternTableId = Pattern + 'TableId';
    var PatternTableReportId = Pattern + 'TableReportId';

    HideReport(PatternTableReportId);


    //$('#CertFileTrxLaneTableId tfoot th').each(function () {
    //    var title = $(this).text();
    //    $(this).html('<input type="text" placeholder="Search ' + title + '" />');
    //});

    $('#' + PatternTableId).DataTable().destroy();
    $('#' + PatternTableId).DataTable({
        "initComplete": function (settings, json) {
            $('#' + ActionBtnId).find('span').attr('class', Icon);
            ShowReport(PatternTableReportId);




        },
        "ajax": {
            "url": "/Cert/CertFileVisualize",
            "type": "GET",
            "datatype": "json",
            "data": {
                "CertFilePlanId": CertFilePlanId,
                "FilePath": FilePath
            }
        },
        "columns": [
            { "data": "SiteName" }, //0
            { "data": "StationNumber" }, //1
            { "data": "LaneName" }, //2
            { "data": "BillingId" },//3            
            { "data": "CategoryPostDacId" },//4
            { "data": "CashierNumber" },//5

            { "data": "DhmValuePostStart" },//6
            { "data": "DhmValue" },//7
            { "data": "TrxNumber" },//8
            { "data": "TrxIndex" },//9
            { "data": "PartialPriceCe" },//10           

            { "data": "ProductNumber" },//11      
            { "data": "ObsPassId" },//12
            { "data": "ObsTickId" },//13
            { "data": "ObsMpId" },//14
            { "data": "ObsSequId" },//15
            { "data": "ObsOcrId" },//16
            { "data": "CategoryPreDacId" },//17

            { "data": "CertTrxLaneRecoId" },//18
        ],
        "columnDefs": [
            { "width": "3%", "className": "text-center", "targets": 0 },
            { "width": "3%", "className": "text-center", "targets": 1 },
            { "width": "3%", "className": "text-center", "targets": 2 },
            { "width": "3%", "className": "text-center", "targets": 3 },
            { "width": "3%", "className": "text-center", "targets": 4 },
            { "width": "3%", "className": "text-center", "targets": 5 },

            { "width": "3%", "className": "text-center", "targets": 6 },
            { "width": "3%", "className": "text-center", "targets": 7 },
            { "width": "3%", "className": "text-center", "targets": 8 },
            { "width": "3%", "className": "text-center", "targets": 9 },
            { "width": "3%", "className": "text-center", "targets": 10 },

            { "width": "3%", "className": "text-center none", "targets": 11 },
            { "width": "3%", "className": "text-center none", "targets": 12 },
            { "width": "3%", "className": "text-center none", "targets": 13 },
            { "width": "3%", "className": "text-center none", "targets": 14 },
            { "width": "3%", "className": "text-center none", "targets": 15 },
            { "width": "3%", "className": "text-center none", "targets": 16 },
            { "width": "3%", "className": "text-center none", "targets": 17 },

            { "width": "3%", "className": "text-center", "targets": 18 },

            { "targets": 6, "render": function (data, type, row) { return GetDhmValueNullableFromDataTableDate(data); } },
            { "targets": 7, "render": function (data, type, row) { return GetDhmValueFromDataTableDate(data); } },

            { "targets": 8, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 9, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 10, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },

            { "targets": 18, "render": function (data, type, row) { return DataTableGetButton('CertLaneTrxLaneSearch', data, 'fas fa-search', '0048ff'); } },
        ],
        "language": {
            "lengthMenu": "Afficher _MENU_ lignes par page",
            "zeroRecords": "Aucun résultat",
            "info": "Page _PAGE_ / _PAGES_ &nbsp;<i>(Nombre de lignes : _TOTAL_)</i>",
            "infoEmpty": "---",
            "infoFiltered": "(Nombre de lignes filtrées : _MAX_ total)",
            "search": "Filtrer ",
            "oPaginate": {
                "sNext": "Suivant",
                "sPrevious": "Précédent"
            }
        },
        "iDisplayLength": 100,
        "processing": false,
        "responsive": true,
        "bFilter": true,
        "autoWidth": false,
        "searching": true,
        "lengthChange": true,
        "showNEntries": true,
        "bInfo": true,
        "bPaginate": true,
        "ordering": true,
        "footerCallback": function (row, data, start, end, display) {
            var api = this.api(), data;
            var intVal = function (i) {
                return typeof i === 'string' ?
                    i.replace(/[\$,]/g, '') * 1 :
                    typeof i === 'number' ?
                        i : 0;
            };

            DoubleTotal1 = api.column(10).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);
            //DoubleTotal2 = api.column(25).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);
            //IntTotal1 = api.column(8).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);
            //IntTotal2 = api.column(10).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);

            $(api.column(10).footer()).html(numFormat(DoubleTotal1));
            //$(api.column(25).footer()).html(numFormat(DoubleTotal2));

            //$(api.column(8).footer()).html(numShortFormat(IntTotal1));
            //$(api.column(10).footer()).html(numShortFormat(IntTotal2));
        }
    });
}


function CertFileReadReceipt(ActionBtnId, Icon, CertFilePlanId, FilePath) {

    $('#' + ActionBtnId).find('span').attr('class', 'fa fa-spinner fa-spin');

    var Pattern = 'CertFileReceipt';
    var PatternTableId = Pattern + 'TableId';
    var PatternTableReportId = Pattern + 'TableReportId';

    HideReport(PatternTableReportId);

    $('#' + PatternTableId).DataTable().destroy();
    $('#' + PatternTableId).DataTable({
        "initComplete": function (settings, json) {
            $('#' + ActionBtnId).find('span').attr('class', Icon);
            ShowReport(PatternTableReportId);
        },
        "ajax": {
            "url": "/Cert/CertFileRead",
            "type": "GET",
            "datatype": "json",
            "data": {
                "CertFilePlanId": CertFilePlanId,
                "FilePath": FilePath
            }
        },
        "columns": [
            { "data": "DhmValue" },//0            
            { "data": "NetworkId" },//1
            { "data": "SiteName" },//2
            { "data": "StationNumber" },//3

            { "data": "CashierNumber" },//4
            { "data": "BagNumber" },//5

            { "data": "ReceiptTCash" },//6
            { "data": "ReceiptTCheck" },//7
            { "data": "ReceiptTDevise" },//8

            { "data": "ReceiptDCash" },//9
            { "data": "ReceiptDCheck" },//10
            { "data": "ReceiptDDevise" },//11

            { "data": "ReceiptGCash" },//12
            { "data": "ReceiptGCheck" },//13
            { "data": "ReceiptGDevise" },//14
        ],
        "columnDefs": [
            { "width": "3%", "className": "text-center", "targets": 0 },
            { "width": "3%", "className": "text-center", "targets": 1 },
            { "width": "3%", "className": "text-center", "targets": 2 },
            { "width": "3%", "className": "text-center", "targets": 3 },

            { "width": "3%", "className": "text-center", "targets": 3 },
            { "width": "3%", "className": "text-center", "targets": 4 },

            { "width": "3%", "className": "text-right", "targets": 6 },
            { "width": "3%", "className": "text-right none", "targets": 7 },
            { "width": "3%", "className": "text-right none", "targets": 8 },

            { "width": "3%", "className": "text-right", "targets": 9 },
            { "width": "3%", "className": "text-right none", "targets": 10 },
            { "width": "3%", "className": "text-right none", "targets": 11 },

            { "width": "3%", "className": "text-right", "targets": 12 },
            { "width": "3%", "className": "text-right none", "targets": 13 },
            { "width": "3%", "className": "text-right none", "targets": 14 },

            { "targets": 0, "render": function (data, type, row) { return GetDhmValueFromDataTableDate(data); } },

            { "targets": 6, "render": function (data, type, row) { return DataTableFormatDoubleGet(data); } },
            { "targets": 7, "render": function (data, type, row) { return DataTableFormatDoubleGet(data); } },
            { "targets": 8, "render": function (data, type, row) { return DataTableFormatDoubleGet(data); } },

            { "targets": 9, "render": function (data, type, row) { return DataTableFormatDoubleGet(data); } },
            { "targets": 10, "render": function (data, type, row) { return DataTableFormatDoubleGet(data); } },
            { "targets": 11, "render": function (data, type, row) { return DataTableFormatDoubleGet(data); } },

            { "targets": 12, "render": function (data, type, row) { return GetGapDoubleFromDataTable(data); } },
            { "targets": 13, "render": function (data, type, row) { return GetGapDoubleFromDataTable(data); } },
            { "targets": 14, "render": function (data, type, row) { return GetGapDoubleFromDataTable(data); } },
        ],
        "language": {
            "lengthMenu": "Afficher _MENU_ lignes par page",
            "zeroRecords": "Aucun résultat",
            "info": "Page _PAGE_ / _PAGES_ &nbsp;<i>(Nombre de lignes : _TOTAL_)</i>",
            "infoEmpty": "---",
            "infoFiltered": "(Nombre de lignes filtrées : _MAX_ total)",
            "search": "Filtrer ",
            "oPaginate": {
                "sNext": "Suivant",
                "sPrevious": "Précédent"
            }
        },
        "iDisplayLength": 100,
        "processing": false,
        "responsive": true,
        "bFilter": false,
        "autoWidth": false,
        "searching": true,
        "lengthChange": false,
        "showNEntries": false,
        "bInfo": false,
        "bPaginate": false,
        "ordering": false,
        "footerCallback": function (row, data, start, end, display) {
            var api = this.api(), data;
            var intVal = function (i) {
                return typeof i === 'string' ?
                    i.replace(/[\$,]/g, '') * 1 :
                    typeof i === 'number' ?
                        i : 0;
            };

            Total1 = api.column(6).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);
            $(api.column(6).footer()).html(DataTableFormatDoubleGet(Total1));

            Total2 = api.column(7).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);
            $(api.column(7).footer()).html(DataTableFormatDoubleGet(Total2));

            Total3 = api.column(8).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);
            $(api.column(8).footer()).html(DataTableFormatDoubleGet(Total3));

            Total4 = api.column(9).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);
            $(api.column(9).footer()).html(DataTableFormatDoubleGet(Total4));

            Total5 = api.column(10).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);
            $(api.column(10).footer()).html(DataTableFormatDoubleGet(Total5));

            Total6 = api.column(11).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);
            $(api.column(11).footer()).html(DataTableFormatDoubleGet(Total6));

            Total7 = api.column(12).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);
            $(api.column(12).footer()).html(DataTableFormatDoubleGet(Total7));

            Total8 = api.column(13).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);
            $(api.column(13).footer()).html(DataTableFormatDoubleGet(Total8));

            Total9 = api.column(14).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);
            $(api.column(14).footer()).html(DataTableFormatDoubleGet(Total9));
        }
    });
}


function CertFileReadTrafic(ActionBtnId, Icon, CertFilePlanId, FilePath) {

    $('#' + ActionBtnId).find('span').attr('class', 'fa fa-spinner fa-spin');

    //ParamMessageReset();

    var Pattern = 'CertFileTrafic';
    var PatternTableId = Pattern + 'TableId';
    var PatternTableReportId = Pattern + 'TableReportId';

    HideReport(PatternTableReportId);


    //$('#CertFileTrxLaneTableId tfoot th').each(function () {
    //    var title = $(this).text();
    //    $(this).html('<input type="text" placeholder="Search ' + title + '" />');
    //});

    $('#' + PatternTableId).DataTable().destroy();;
    $('#' + PatternTableId).DataTable({
        "initComplete": function (settings, json) {
            $('#' + ActionBtnId).find('span').attr('class', Icon);
            ShowReport(PatternTableReportId);
        },
        "ajax": {
            "url": "/Cert/CertFileRead",
            "type": "GET",
            "datatype": "json",
            "data": {
                "CertFilePlanId": CertFilePlanId,
                "FilePath": FilePath
            }
        },
        "columns": [
            { "data": "StationNumber" }, //0
            { "data": "DhmValue" },//1
            { "data": "LaneName" },//2
            { "data": "Trafic", "render": $.fn.dataTable.render.number(' ', '', 0) },//3
            { "data": "DataLine" },//4
            { "data": "TraficDataId" }//5
        ],
        "columnDefs": [
            { "width": "10%", "className": "text-left", "targets": 0 }, //StationNumber
            { "width": "20%", "className": "text-center", "targets": 1 }, //DhmValue
            { "width": "10%", "className": "text-center", "targets": 2 }, //LaneName
            { "width": "10%", "className": "text-center", "targets": 3 },//Trafic
            { "width": "20%", "className": "text-center", "targets": 4 },//DataLine
            { "width": "5%", "className": "text-center", "targets": 5 },//button download
            {
                "targets": 1,
                "render": function (value) {
                    if (value === null) return "";
                    var pattern = /Date\(([^)]+)\)/;//date format from server side
                    var results = pattern.exec(value);
                    var dt = new Date(parseFloat(results[1]));

                    return dt.toLocaleDateString() + " " + dt.toLocaleTimeString();
                }
            },
            {
                "targets": 4,
                "render": function (data, type, row) {
                    return data.substr(0, 35);
                }
            },
            {
                "targets": 5, "searchable": false, "orderable": false,
                "render": function (data, type, full, meta) {
                    return '<button id="DownloadTraficDataBtn' + data + '" type="button" style="font-size: 16px"" ' +
                        'onclick="DownloadTraficDataExecute(\'' + data + '\')" >' +
                        '<span class="glyphicon glyphicon-save" ></span></button>';
                }
            }
        ],
        "iDisplayLength": 20,
        "language": {
            "lengthMenu": "Afficher _MENU_ lignes par page",
            "zeroRecords": "---",
            "info": "Page _PAGE_ / _PAGES_ &nbsp;<i>(Nombre de lignes : _TOTAL_)</i>",
            "infoEmpty": "Veuillez patienter",
            "infoFiltered": "(Nombre de lignes filtrées : _MAX_ total)",
            "search": "Filtrer ",
            "oPaginate": {
                "sNext": "Suivant",
                "sPrevious": "Précédent"
            }
        },
        "bFilter": false,
        "autoWidth": false,
        "searching": false,
        "lengthChange": false,
        "showNEntries": true,
        "bInfo": false,
        "bPaginate": false,
        "bFilter": false,
        "footerCallback": function (row, data, start, end, display) {
            var api = this.api(), data;
            var intVal = function (i) {
                return typeof i === 'string' ?
                    i.replace(/[\$,]/g, '') * 1 :
                    typeof i === 'number' ?
                        i : 0;
            };

            TraficTotal = api.column(3).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);
            $(api.column(3).footer()).html(numShortFormat(TraficTotal));
        }
    });
}

function CertFileAllReportsHide() {
    HideReport('nb-report-id');
    HideReport('HomeReportId');
    HideReport('ParamReportId');

    HideReport('CertFile' + 'TableReportId');
    HideReport('CertFileLane' + 'TableReportId');
    HideReport('CertFileNr' + 'TableReportId');
    HideReport('CertFilePlan' + 'TableReportId');
    HideReport('CertFileCron' + 'TableReportId');
    HideReport('CertFileAdd' + 'TableReportId');
    HideReport('CertFileGenerate' + 'TableReportId');
    HideReport('CertFileTrxLane' + 'TableReportId');
    HideReport('CertFilePost' + 'TableReportId');
    HideReport('CertFileBoj' + 'TableReportId');
    HideReport('CertFileReceipt' + 'TableReportId');
    HideReport('CertFileTrafic' + 'TableReportId');
    HideReport('CertFileCheck' + 'TableReportId');

    HideReport('CertFileAdd' + 'TableReportId');
    HideReport('CertFileThread' + 'TableReportId');
    HideReport('CertFileDay' + 'TableReportId');
    HideReport('CertFileZip' + 'TableReportId');
    HideReport('CertFileMsg' + 'TableReportId');
    HideReport('CertFileLogs' + 'TableReportId');
    HideReport('CertReportId');

};

function CertFileAllParametersHide() {

    HideReport('TaskId' + 'Parent');
    HideReport('SourceId' + 'Parent');
    HideReport('FileTypeId' + 'Parent');
    HideReport('SiteId' + 'Parent');
    HideReport('LSId' + 'Parent');
    HideReport('BagContainerId' + 'Parent');
    HideReport('StationNumberId' + 'Parent');
    HideReport('Sens' + 'Parent');
    HideReport('LaneNameId' + 'Parent');
    HideReport('PdvId' + 'Parent');


    HideReport('IsRunningId' + 'Parent');
    HideReport('DateStartId' + 'Parent');
    HideReport('DateEndId' + 'Parent');
    HideReport('DatePlanId' + 'Parent');
    HideReport('FileId' + 'Parent');
    HideReport('IsEveryDayId' + 'Parent');
    HideReport('IsEveryHourId' + 'Parent');
    HideReport('IsPlannedId' + 'Parent');
    HideReport('CtrId' + 'Parent');

    HideReport('BillingId' + 'Parent');
    HideReport('CashierNumberId' + 'Parent');

    HideReport('AddDaysStartId' + 'Parent');
    HideReport('AddDaysEndId' + 'Parent');

    HideReport('ParamActionContainerId1');
    HideReport('ParamActionContainerId2');
    HideReport('ParamActionContainerId3');
}



function CertFileHomeOpen() {
    CertFileAllReportsHide();
    CertFileAllParametersHide();
    MenuBarHighlight(0, 7);

    ShowReport('HomeReportId');
    ParamTasksGet();
    ParamGetSites();
    ParamBillingIdGet();
    HtmlDropDownListFill('Sens', '0', '/Param/GetSens', 'Sens', 'Sens');
    HtmlDropDownListFill('AddDaysStartId', '0', '/Param/CertParamRayonsGet', 'RayonId', 'RayonName');
    HtmlDropDownListFill('AddDaysEndId', '0', '/Param/CertParamRayonsGet', 'RayonId', 'RayonName');

    //OnChange
    document.getElementById('SiteId').setAttribute("onChange", "ParamGetLS(0)");
    document.getElementById('LSId').setAttribute("onChange", "ParamBagContainersFromLSGet()");
    document.getElementById('BagContainerId').setAttribute("onChange", "ParamGetStations()");
    document.getElementById('StationNumberId').setAttribute("onChange", "ParamLanesGet()");

    //Reset DDL
    ParamResetDropDownList('LSId');
    ParamResetDropDownList('BagContainerId');
    ParamResetDropDownList('StationNumberId');
    ParamResetDropDownList('LaneNameId');
    ParamResetDropDownList('PdvId');
    ParamResetDropDownList('BillingId');

    JsSleep(2000);
    CertFileAutoOpen();
}


function CertFileManOpen() {
    CertFileAllReportsHide();
    CertFileAllParametersHide();
    MenuBarHighlight(1, 7);

    ShowReport('ParamReportId');

    document.getElementById('ParamActionBtnId').setAttribute("onClick", "CertFileManDisplay('0')");
    document.getElementById('ParamActionIconId').setAttribute('Class', 'fas fa-eye btn-icon-m-cl gc-c1-cl');
    $('#ParamActionTextId').text("Afficher");

    ShowReport('ParamActionContainerId1');
    document.getElementById('ParamActionBtnId1').setAttribute("onClick", "CertFileManAdd()");
    document.getElementById('ParamActionIconId1').setAttribute('Class', 'fas fa-plus-circle btn-icon-m-cl gc-c1-cl');
    $('#ParamActionTextId1').text("Charger");

    ShowReport('DateStartId' + 'Parent');
    ShowReport('DateEndId' + 'Parent');
    ShowReport('FileId' + 'Parent');

    CertFileManDisplay('');
}

function CertFileAutoOpen() {
    CertFileAllReportsHide();
    CertFileAllParametersHide();
    MenuBarHighlight(2, 7);

    ParamResetToZeroDropDownList('TaskId');

    ShowReport('ParamReportId');
    $('#ParamTitleId').text("Chargement automatique des fichiers");

    document.getElementById('ParamActionBtnId').setAttribute("onClick", "CertFileAutoDisplay()");
    document.getElementById('ParamActionIconId').setAttribute('Class', 'fas fa-eye btn-icon-m-cl gc-c1-cl');
    $('#ParamActionTextId').text("Afficher");

    ShowReport('ParamActionContainerId1');
    document.getElementById('ParamActionBtnId1').setAttribute("onClick", "CertFileAutoAdd()");
    document.getElementById('ParamActionIconId1').setAttribute('Class', 'fas fa-plus-circle btn-icon-m-cl gc-c1-cl');
    $('#ParamActionTextId1').text("Charger");

    ShowReport('TaskId' + 'Parent');
    ShowReport('DateStartId' + 'Parent');
    ShowReport('DateEndId' + 'Parent');

    $.ajax({
        url: "/Common/RoleNameListGet",
        method: "POST",
        contentType: "application/json; charset=utf-8",
        async: true,
        success: function (data) {
            if (data.includes('Administrateur')) {
                ShowReport('IsPlannedId' + 'Parent');
                ShowReport('ParamActionContainerId');
                DateValueDefaultSet('DateStartId', 2);
                DateValueDefaultSet('DateEndId', 0);
                CertFileAutoDisplay();
            }
            else {
                if (data.includes('Fatourati')) {
                    ShowReport('IsPlannedId' + 'Parent');
                    ShowReport('ParamActionContainerId');
                    DateValueDefaultSet('DateStartId', 2);
                    DateValueDefaultSet('DateEndId', 0);
                    CertFileAutoDisplay();
                }
                else {
                    if (data.includes('CertRelay') || data.includes('QualifPath')) {
                        ShowReport('ParamActionContainerId');
                        DateValueDefaultSet('DateStartId', 0);
                        DateValueDefaultSet('DateEndId', 0);
                        CertFileAutoDisplay();
                    }
                }
            }
        }
    });


}

function CertFilePlanOpen() {
    CertFileAllReportsHide();
    CertFileAllParametersHide();
    MenuBarHighlight(3, 7);

    $('#ParamTitleId').text("Liste des jobs planifiés");

    ShowReport('ParamReportId');

    document.getElementById('ParamActionBtnId').setAttribute("onClick", "CertFilePlanDisplay()");
    document.getElementById('ParamActionIconId').setAttribute('Class', 'fas fa-eye btn-icon-m-cl gc-c1-cl');
    $('#ParamActionTextId').text("Afficher");

    //ShowReport('ParamActionContainerId1');
    //document.getElementById('ParamActionBtnId1').setAttribute("onClick", "CertFilePlanAllPlay()");
    //document.getElementById('ParamActionIconId1').setAttribute('Class', 'far fa-play-circle btn-icon-m-cl gc-c1-cl');
    //$('#ParamActionTextId1').text("Lancer tous les jobs");

    CertFilePlanDisplay();
}

function CertFileBackupOpen() {
    CertFileAllReportsHide();
    CertFileAllParametersHide();
    MenuBarHighlight(4, 7);

    ShowReport('ParamReportId');
    document.getElementById('ParamActionBtnId').setAttribute("onClick", "CertFileBackup()");
    $('#ParamTitleId').text("Sauveguarde des fichiers");
    document.getElementById('ParamActionIconId').setAttribute('Class', 'far fa-save btn-icon-cl gc-c1-cl');
    $('#ParamActionTextId').text("Sauveguarder");

    ShowReport('DateStartId' + 'Parent');
    ShowReport('DateEndId' + 'Parent')
    ShowReport('ParamActionBtnId1');
}

function CertFilePurgeOpen() {
    CertFileAllReportsHide();
    CertFileAllParametersHide();
    MenuBarHighlight(5, 7);

    ShowReport('ParamReportId');
    document.getElementById('ParamActionBtnId').setAttribute("onClick", "CertFilePurge()");
    document.getElementById('ParamActionIconId').setAttribute('Class', 'far fa-trash-alt btn-icon-cl gc-c1-cl');
    $('#ParamActionTextId').text("Purger");
    $('#ParamTitleId').text("Purge des fichiers");

    ShowReport('ParamActionContainerId1');
}

function CertFileGenerateOpen() {
    CertFileAllReportsHide();
    CertFileAllParametersHide();
    MenuBarHighlight(6, 7);

    ShowReport('ParamReportId');
    document.getElementById('ParamActionBtnId').setAttribute("onClick", "CertFileGenerate()");
    document.getElementById('ParamActionIconId').setAttribute('Class', 'fas fa-neuter btn-icon-cl gc-c1-cl');
    $('#ParamActionTextId').text("Générer");
    $('#ParamTitleId').text("Génération de scripts");

    ShowReport('SourceId' + 'Parent');
    ShowReport('DateStartId' + 'Parent');
    ShowReport('ParamActionContainerId1');
}

function CertFileVisualizeOpen() {
    CertFileAllReportsHide();
    CertFileAllParametersHide();
    MenuBarHighlight(7, 7);

    ShowReport('ParamReportId');

    DropDownListSet('TaskId', '03');
    ParamSourcesGet();
    document.getElementById('TaskId').disabled = true;
    //DropDownListSet('SourceId', '04');
    ParamFileTypeGet();

    ShowReport('TaskId' + 'Parent');
    HideReport('CertFileUploadId' + 'Parent');
    ShowReport('FileTypeId' + 'Parent');

    HideReport('ParamActionContainerId');
    HideReport('ParamActionContainerId1');
    HideReport('ParamActionContainerId2');
    HideReport('ParamActionContainerId3');



}

function CertFileIsPalnnedSwitch() {
    var IsPlanned = new Boolean($("#IsPlannedId").is(":checked"));
    if (IsPlanned == true) {
        ShowReport('IsEveryDayId' + 'Parent');
        ShowReport('IsEveryHourId' + 'Parent');
        ShowReport('DatePlanId' + 'Parent');
        HideReport('DateStartId' + 'Parent');
        HideReport('DateEndId' + 'Parent');
        ShowReport('AddDaysStartId' + 'Parent');
        ShowReport('AddDaysEndId' + 'Parent');
        $('#ParamTitleId').text("Planification des jobs");

        ShowReport('ParamActionContainerId1');
        document.getElementById('ParamActionBtnId1').setAttribute("onClick", "CertFileAutoAdd()");
        document.getElementById('ParamActionIconId1').setAttribute('Class', 'fas fa-plus-circle btn-icon-m-cl gc-c1-cl');
        $('#ParamActionTextId1').text("Ajouter le Job");
    }
    else {
        HideReport('IsEveryDayId' + 'Parent');
        HideReport('IsEveryHourId' + 'Parent');
        ShowReport('DatePlanId' + 'Parent');
        ShowReport('DateStartId' + 'Parent');
        ShowReport('DateEndId' + 'Parent');
        HideReport('AddDaysStartId' + 'Parent');
        HideReport('AddDaysEndId' + 'Parent');
        $('#ParamTitleId').text("Chargement automatique");

        ShowReport('ParamActionContainerId1');
        document.getElementById('ParamActionBtnId1').setAttribute("onClick", "CertFileAutoAdd()");
        document.getElementById('ParamActionIconId1').setAttribute('Class', 'fas fa-plus-circle btn-icon-m-cl gc-c1-cl');
        $('#ParamActionTextId1').text("Charger");
    }

}


function CertFileDayVisualize() {

    var ActionBtnId = 'ParamActionBtnId1';
    var Icon = 'fas fa-eye btn-icon-m-cl gc-c1-cl';
    var SourceId = GetElementValue('SourceId');
    var DateStringStart = GetDateStringFromDatePicker('DateStartId');
    var DateStringEnd = GetDateStringFromDatePicker('DateEndId');
    if (DateStringStart - DateStringEnd == 0) {
        if (SourceId != '0') {
            if (SourceId == '04') {
                var TaskId = '00';
                var SourceId = SourceId;
                var FileTypeId = TextParamValueDashGet(GetElementValue('FileTypeId'));
                var DateString = GetDateStringFromDatePicker('DateStartId');
                var SiteId = TextParamValueDashGet(GetElementValue('SiteId'));
                var LSId = TextParamValueDashGet(GetElementValue('LSId'));
                var BagContainerId = TextParamValueDashGet(GetElementValue('BagContainerId'));
                var StationNumber = TextParamValueDashGet(GetElementValue('StationNumberId'));
                var LaneName = '---';
                var PdvId = '--';
                var BillingId = '--';
                var CategoryId = '--';
                var ParamId = TaskId + SourceId + FileTypeId + DateString + SiteId + LSId + BagContainerId + StationNumber + LaneName + PdvId + BillingId + CategoryId;

                CertTaskVisualizeMsgGet(ActionBtnId, Icon, ParamId);
            }
            else {
                if (SourceId == '05') {
                    var TaskId = '00';
                    var SourceId = SourceId;
                    var FileTypeId = TextParamValueDashGet(GetElementValue('FileTypeId'));
                    var DateString = GetDateStringFromDatePicker('DateStartId');
                    var SiteId = TextParamValueDashGet(GetElementValue('SiteId'));
                    var LSId = TextParamValueDashGet(GetElementValue('LSId'));
                    var BagContainerId = '--';
                    var StationNumber = '--';
                    var LaneName = '---';
                    var PdvId = '--';
                    var BillingId = '--';
                    var CategoryId = '--';
                    var ParamId = TaskId + SourceId + FileTypeId + DateString + SiteId + LSId + BagContainerId + StationNumber + LaneName + PdvId + BillingId + CategoryId;

                    CertTaskVisualizeZipGet(ActionBtnId, Icon, ParamId);
                }
                else {
                    if (SourceId == '31') {//Logs
                        var TaskId = '00';//Visualize
                        var SourceId = SourceId;
                        var FileTypeId = TextParamValueDashGet(GetElementValue('FileTypeId'));
                        var DateString = GetDateStringFromDatePicker('DateStartId');
                        var SiteId = '--';
                        var LSId = '--';
                        var BagContainerId = '--';
                        var StationNumber = '--';
                        var LaneName = '---';
                        var PdvId = '--';
                        var BillingId = '--';
                        var CategoryId = '--';
                        var ParamId = TaskId + SourceId + FileTypeId + DateString + SiteId + LSId + BagContainerId + StationNumber + LaneName + PdvId + BillingId + CategoryId;

                        CertTaskVisualizeLogsGet(ActionBtnId, Icon, ParamId);
                    }
                    else {
                        alert('Action non prise en compte');
                    }
                }
            }
        }
        else {
            ParamMessageErrorDisplay('Le champ Source est obligatoire');
        }
    }
    else {
        ParamMessageErrorDisplay('La date de début doit être égale à la date de fin');
    }
}

function CertFileZipDownload(Id) {

    var ActionBtnId = 'CertFileZipDownloadBtnId' + Id;
    $('#' + ActionBtnId).find('span').attr('class', 'fa fa-spinner fa-spin');

    var Icon = 'fas fa-download';

    var ZipdataFileName = new String(Id).substr(0, 28);
    var IpAddress = new String(Id).substr(28, new String(Id).length - 28);

    var obj = {};
    obj.ZipdataFileName = ZipdataFileName;
    obj.IpAddress = IpAddress;
    $.ajax({
        url: "/Cert/CertFileZipDownload",
        method: "POST",
        async: true,
        data: JSON.stringify(obj),
        dataType: "text",
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            var ZipFolderName = data;
            CertFileZipOpen(ZipFolderName);
            $('#CertFileZipDownloadBtnId' + Id).find('span').attr('class', 'far fa-folder-open btn-icon-cl gc-c1-cl');
            //document.getElementById('MyDocumentsPathId').value = TargetFileName;
            //document.getElementById('DocFileDownloadBtnId' + Id).setAttribute('onClick', 'CertFileZipOpen(\'' + ZipdataFileName + '\')') 

        }
    });
}

function CertFileLogsDownload(LogFileName, ServerName) {

    var ActionBtnId = 'CertFileLogsDownloadBtnId' + LogFileName;
    var Icon = 'fas fa-download';
    var IsMargin = false;

    ActionSpin(ActionBtnId, IsMargin);

    var obj = {};
    obj.LogFileName = LogFileName;
    obj.ServerName = ServerName;
    $.ajax({
        url: "/Cert/CertFileLogsDownload",
        method: "POST",
        async: true,
        data: JSON.stringify(obj),
        dataType: "text",
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            var LogFileName = data;
            window.open('..\\Files\\' + LogFileName, '_blank');
            ActionBtnSet(ActionBtnId, Icon, IsMargin);
        }
    });
}

function CertFileZipDelete(Id) {
    var ActionBtnId = 'CertFileZipDeleteBtnId' + Id;
    var Icon = 'fas fa-minus-circle';

    ActionSpin(ActionBtnId, false);

    var ZipdataFileName = new String(Id).substr(0, 28);
    var IpAddress = new String(Id).substr(28, new String(Id).length - 28);

    var obj = {};
    obj.ZipdataFileName = ZipdataFileName;
    obj.IpAddress = IpAddress;
    $.ajax({
        url: "/Cert/CertFileZipDelete",
        method: "POST",
        async: true,
        data: JSON.stringify(obj),
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            ActionBtnSet(ActionBtnId, Icon, false);
        }
    });
}


function CertFileLogsDelete(LogFileName, ServerName) {
    var ActionBtnId = 'CertFileLogsDeleteBtnId' + LogFileName;
    var Icon = 'fas fa-minus-circle';
    var IsMargin = false;

    ActionSpin(ActionBtnId, IsMargin);

    var obj = {};
    obj.LogFileName = LogFileName;
    obj.ServerName = ServerName;
    $.ajax({
        url: "/Cert/CertFileLogsDelete",
        method: "POST",
        async: true,
        data: JSON.stringify(obj),
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            ActionBtnSet(ActionBtnId, Icon, IsMargin);
        }
    });
}

function CertFileZipOpen(ZipFolderName) {
    window.open('..\\Files\\' + ZipFolderName, '_blank');
}


function CertFileMsgDownload(MsgFileName, IpAddress) {

    var ActionBtnId = 'CertFileMsgDownloadBtnId' + MsgFileName + IpAddress;
    $('#' + ActionBtnId).find('span').attr('class', 'fa fa-spinner fa-spin');

    var Icon = 'fas fa-download';

    var obj = {};
    obj.MsgFileName = MsgFileName;
    obj.IpAddress = IpAddress;
    $.ajax({
        url: "/Cert/CertFileMsgDownload",
        method: "POST",
        async: true,
        data: JSON.stringify(obj),
        dataType: "text",
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            var MsgFileName = data;
            CertFileMsgOpen(MsgFileName);
            $('#CertFileMsgDownloadBtnId' + Id).find('span').attr('class', 'far fa-folder-open btn-icon-cl gc-c1-cl');
        }
    });
}


function CertFileMsgOpen(MsgFileName) {
    window.open('..\\Files\\' + MsgFileName, '_blank');
}

function CertFileRead() {
    //Get inputs
    var SourceId = GetElementValue('SourceId');
    var FileTypeId = GetElementValue('FileTypeId');

    if (SourceId != '0') {
        if (FileTypeId != '0') {
            CertFileAutoAdd();
        }
        else {
            ParamMessageErrorDisplay('Le champ type est obligatoire');
        }
    }
    else {
        ParamMessageErrorDisplay('Le champ Source est obligatoire');
    }
}

function CertFileThreadSearch(CertFilePlanId) {

    var ActionBtnId = new String('CertFileThreadSearchBtnId' + CertFilePlanId);
    var Icon = 'fas fa-eye';
    var Pattern = 'CertFileThread';
    var PatternTableId = Pattern + 'TableId';
    var PatternTableReportId = Pattern + 'TableReportId';

    $('#' + ActionBtnId).find('span').attr('class', 'fa fa-spinner fa-spin');

    HideReport(PatternTableReportId);

    $('#' + PatternTableId).DataTable().destroy();;
    $('#' + PatternTableId).DataTable({
        "initComplete": function (settings, json) {
            ShowReport(PatternTableReportId);
            $('#' + ActionBtnId).find('span').attr('class', Icon);
        },
        "ajax": {
            "url": "/Cert/CertFileThreadSearch",
            "type": "GET",
            "datatype": "json",
            "data": {
                CertFilePlanId: CertFilePlanId
            }
        },
        "columns": [
            { "data": "TaskName" },//0
            { "data": "SourceName" },//1
            { "mData": function vehicle(data, type, dataToSet) { return data.FirstName + data.LastName; } },//2

            { "data": "CertFileIdHeader" },//3  Date
            { "data": "CertFileIdHeader" },//4 Type
            { "data": "SiteName" },//5 SiteName
            { "data": "CertFileIdHeader" },//6 StationNumber
            { "data": "CertFileIdHeader" },//7 LaneName
            { "data": "CertFileIdHeader" },//8 BillingId
            { "data": "CertFileIdHeader" },//9 CategoryId

            { "data": "DhmCreation" },//10
            { "data": "CertFileIdHeader" },//11
            { "data": "CertFileIdHeader" },//12
        ],
        "columnDefs": [
            { "width": "5%", "className": "text-center", "targets": 0 },
            { "width": "5%", "className": "text-center", "targets": 1 },
            { "width": "5%", "className": "text-center none", "targets": 2 },

            { "width": "3%", "className": "text-center", "targets": 3 },
            { "width": "3%", "className": "text-center", "targets": 4 },
            { "width": "3%", "className": "text-center", "targets": 5 },
            { "width": "3%", "className": "text-center", "targets": 6 },
            { "width": "3%", "className": "text-center", "targets": 7 },
            { "width": "3%", "className": "text-center", "targets": 8 },
            { "width": "3%", "className": "text-center", "targets": 9 },

            { "width": "3%", "className": "text-center", "targets": 10 },
            { "width": "3%", "className": "text-center", "targets": 11 },
            { "width": "3%", "className": "text-center", "targets": 12 },

            { "targets": 3, "render": function (data, type, row) { return DataTableDateValueFromDateStringGet(CertFileDateStringFromCertFileIdHeader(data)); } },
            { "targets": 4, "render": function (data, type, row) { return CertFileFileTypeIdFromCertFileIdHeader(data); } },
            { "targets": 6, "render": function (data, type, row) { return CertFileStationNumberFromCertFileIdHeader(data); } },
            { "targets": 7, "render": function (data, type, row) { return CertFileLaneNameFromCertFileIdHeader(data); } },
            { "targets": 8, "render": function (data, type, row) { return CertFileBillingIdFromCertFileIdHeader(data); } },
            { "targets": 9, "render": function (data, type, row) { return CertFileCategoryIdFromCertFileIdHeader(data); } },

            { "targets": 10, "render": function (data, type, row) { return GetDhmValueFromDataTableDate(data); } },
            {
                "targets": 11, "render": function (data, type, row) {

                    if (row['IsFinnished'] == true) {
                        return DataTableGetButton('', row['CertFilePlanId'], 'fas fa-check-circle', '0048ff');
                    }
                    else {
                        return '';
                    }

                }
            },
            {
                "targets": 12, "render": function (data, type, row) {

                    if (row['IsFinnished'] == true) {
                        return DataTableProgressBarGet(row['CertFilePlanId'], 1, 1)
                    }
                    else {
                        return DataTableProgressBarGet(row['CertFilePlanId'], 0, 0);
                    }
                }
            }
        ],
        "iDisplayLength": 10,
        "language": {
            "lengthMenu": "Afficher _MENU_ lignes par page",
            "zeroRecords": "Aucun résultat",
            "info": "Page _PAGE_ / _PAGES_ &nbsp;<i>(Nombre de lignes : _TOTAL_)</i>",
            "infoEmpty": "---",
            "infoFiltered": "(Nombre de lignes filtrées : _MAX_ total)",
            "search": "Filtrer ",
            "oPaginate": {
                "sNext": "Suivant",
                "sPrevious": "Précédent"
            }
        },
        "processing": false,
        "responsive": true,
        "bFilter": false,
        "autoWidth": false,
        "searching": true,
        "lengthChange": true,
        "showNEntries": true,
        "bInfo": true,
        "bPaginate": true,
        "ordering": false,
        "footerCallback": function (row, data, start, end, display) {

            var api = this.api(), data;
            var intVal = function (i) {
                return typeof i === 'string' ?
                    i.replace(/[\$,]/g, '') * 1 :
                    typeof i === 'number' ?
                        i : 0;
            };

            //IntTotal1 = api.column(5).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);
            //IntTotal2 = api.column(6).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);
            //IntTotal3 = api.column(7).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);

            //IntTotal4 = api.column(14).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);

            //$(api.column(5).footer()).html(numShortFormat(IntTotal1));
            //$(api.column(6).footer()).html(numShortFormat(IntTotal2));
            //$(api.column(7).footer()).html(numShortFormat(IntTotal3));

            //$(api.column(14).footer()).html(numShortFormat(IntTotal4) + ' Min');

            //if (IntTotal3 !== 0)
            //    $(api.column(7).footer()).html('<span  class="badge badge-danger">' + numShortFormat(IntTotal3) + '</span>');
            //else $(api.column(7).footer()).html('<span  class="badge badge-success">' + numShortFormat(IntTotal3) + '</span>');
        }
    });
}



function CertFileDateStringFromCertFileIdHeader(CertFileIdHeader) {
    return new String(CertFileIdHeader).substr(0, 8);
}

function CertFileStationNumberFromCertFileIdHeader(CertFileIdHeader) {
    return new String(CertFileIdHeader).substr(10, 2);
}

function CertFileLaneNameFromCertFileIdHeader(CertFileIdHeader) {
    return new String(CertFileIdHeader).substr(12, 3);
}

function CertFileFileTypeIdFromCertFileIdHeader(CertFileIdHeader) {
    return new String(CertFileIdHeader).substr(15, 2);
}

function CertFileSourceFromCertFileIdHeader(CertFileIdHeader) {
    return new String(CertFileIdHeader).substr(17, 2);
}

function CertFileBillingIdFromCertFileIdHeader(CertFileIdHeader) {
    return new String(CertFileIdHeader).substr(19, 2);
}

function CertFileCategoryIdFromCertFileIdHeader(CertFileIdHeader) {
    return new String(CertFileIdHeader).substr(21, 2);
}

function CertFileAdd(ActionBtnId,
    Icon,
    TaskId,
    Source,
    FileTypeId,
    RegionId,
    LSId,
    AxleId,
    StationNumber,
    LaneName,
    PdvId,
    DateStringStart,
    DateStringEnd,

    HMPlanString,
    IsEveryDay,
    IsEveryHour,
    IsPlanned,
    IsCron,
    BillingId,
    CategoryId,
    AddDaysStart,
    AddDaysEnd) {
    ParamMessageReset();

    HideReport('CertFile' + 'TableReportId');
    //HideReport('CertTrxLane' + 'TableReportId');
    HideReport('CertRecoTrxLane' + 'TableReportId');
    HideReport('CertTrxLaneSpecificLane' + 'TableReportId');

    //Spin
    DataTableActionBtnSpin(ActionBtnId);

    var obj = {};
    obj.TaskId = TaskId;
    obj.Source = Source;
    obj.FileTypeId = FileTypeId;

    obj.RegionId = RegionId;
    obj.LSId = LSId;
    obj.AxleId = AxleId;
    obj.StationNumber = StationNumber;
    obj.LaneName = LaneName;
    obj.PdvId = PdvId;

    obj.DateStringStart = DateStringStart;
    obj.DateStringEnd = DateStringEnd;
    obj.HMPlanString = HMPlanString;

    obj.IsEveryDay = IsEveryDay;
    obj.IsEveryHour = IsEveryHour;
    obj.IsPlanned = IsPlanned;
    obj.IsCron = IsCron;

    obj.BillingId = BillingId;
    obj.CategoryId = CategoryId;
    obj.AddDaysStart = AddDaysStart;
    obj.AddDaysEnd = AddDaysEnd;

    $.connection.hub.start({ jsonp: true }).done(function () {
        obj.ConnectionId = $.connection.hub.id;
        $.ajax({
            url: "/Cert/CertFileAutoAdd",
            method: "POST",
            contentType: "application/json; charset=utf-8",
            dataType: "text",
            data: JSON.stringify(obj),
            success: function (data) {
                if (data == '0') {
                    DataTableActionBtnIconSet(ActionBtnId, Icon);
                    alert('Vous n\'avez pas les autorisations nécessaires pour effectuer cette action!');
                }
                else {
                    DataTableActionBtnIconSet(ActionBtnId, Icon);
                    CertFileAddDisplay(data);
                }

            },
            error: function (request, status, error) {
                //DataTableActionBtnIconSet(ActionBtnId, Icon);
                alert("Problème de connexion.");
            }
        });
    });

    //$.ajax({
    //    url: "/Cert/CertFileAutoAdd",
    //    method: "POST",
    //    contentType: "application/json; charset=utf-8",
    //    dataType: "text",
    //    data: JSON.stringify(obj),
    //    success: function (data) {
    //        if (data == '0') {
    //            DataTableActionBtnIconSet(ActionBtnId, Icon);
    //            alert('Vous n\'avez pas les autorisations nécessaires pour effectuer cette action!')
    //        }
    //        else {
    //            DataTableActionBtnIconSet(ActionBtnId, Icon);
    //            CertFileAddDisplay(data);
    //        }

    //    },
    //    error: function (request, status, error) {
    //        //DataTableActionBtnIconSet(ActionBtnId, Icon);
    //        alert("Problème de connexion.");
    //    }
    //});
}


function CertFileUpload(ActionBtnId, Icon, TaskId, Source, FileTypeId, DateStringStart, DateStringEnd, RegionId, LSId, AxleId, StationNumber, LaneName) {

    ActionBtnMarginSpin(ActionBtnId);

    var obj = {};
    obj.TaskId = TaskId;
    obj.Source = Source;
    obj.FileTypeId = FileTypeId;
    obj.RegionId = RegionId;
    obj.LSId = LSId;
    obj.AxleId = AxleId;
    obj.StationNumber = StationNumber;
    obj.LaneName = LaneName;
    obj.PdvId = '0';
    obj.DateStringStart = DateStringStart;
    obj.DateStringEnd = DateStringEnd;

    obj.HMPlanString = '2359';
    obj.IsEveryDay = false;
    obj.IsEveryHour = false;
    obj.IsPlanned = false;
    obj.IsCron = false;
    obj.BillingId = '0';
    obj.CategoryId = '0';
    obj.AddDaysStart = 0;
    obj.AddDaysEnd = 0;

    //if (FileTypeId != '0') {
    //    obj.IsTrxLane = true;
    //}


    $.connection.hub.start({ jsonp: true }).done(function () {
        obj.ConnectionId = $.connection.hub.id;
        $.ajax({
            url: "/Cert/CertFileAutoAdd",
            method: "POST",
            contentType: "application/json; charset=utf-8",
            dataType: "text",
            data: JSON.stringify(obj),
            success: function (data) {
                if (data == '0') {
                    DataTableActionBtnIconSet(ActionBtnId, Icon);
                    alert('Vous n\'avez pas les autorisations nécessaires pour effectuer cette action!')
                }
                else {
                    DataTableActionBtnIconSet(ActionBtnId, Icon);
                    CertFileAddDisplay(data);
                }

            },
            error: function (request, status, error) {
                //DataTableActionBtnIconSet(ActionBtnId, Icon);
                alert("Problème de connexion.");
            }
        });
    });







    //$.ajax({
    //    url: "/Cert/CertFileAutoAdd",
    //    method: "POST",
    //    contentType: "application/json; charset=utf-8",
    //    dataType: "text",
    //    data: JSON.stringify(obj),
    //    success: function (data) {           
    //        CertFileAddDisplay(data);
    //        ActionBtnIconMarginSet(ActionBtnId, Icon);
    //    },
    //    error: function (request, status, error) {
    //        $('#' + ActionBtnId).find('span').attr('class', Icon);
    //        alert("Problème de connexion");
    //    }
    //});
}

function CertFileAutoAdd() {
    ParamMessageReset();
    var ActionBtnId = 'ParamActionBtnId1';
    var Icon = 'fas fa-plus-circle btn-icon-cl cg-c-cl';

    var TaskId = GetElementValue('TaskId');
    var Source = GetElementValue('SourceId');
    var FileTypeId = GetElementValue('FileTypeId');
    var RegionId = '0';
    var LSId = GetElementValue('LSId');
    var AxleId = '0';
    var StationNumber = GetElementValue('StationNumberId');
    var LaneName = GetElementValue('LaneNameId');
    var PdvId = GetElementValue('PdvId');
    var DateStringStart = GetDateStringFromDatePicker('DateStartId');
    var DateStringEnd = GetDateStringFromDatePicker('DateEndId');

    var HMPlanString = "2359";
    var IsEveryDay = false;
    var IsEveryHour = false;
    var IsPlanned = new Boolean($("#IsPlannedId").is(":checked"));
    var IsCron = false;
    var BillingId = GetElementValue('BillingId');;
    var CategoryId = "0";
    var AddDaysStart = 0;
    var AddDaysEnd = 0;

    HideReport('CertReportId');
    HideReport('CertFilePlan' + 'TableReportId');

    if (IsPlanned == true) {
        HMPlanString = GetDhmStringFromDatePicker('DatePlanId');
        IsEveryDay = new Boolean($("#IsEveryDayId").is(":checked"));
        IsEveryHour = new Boolean($("#IsEveryHourId").is(":checked"));
        AddDaysStart = GetElementValue('AddDaysStartId');
        AddDaysEnd = GetElementValue('AddDaysEndId');
    }

    if (TaskId != '0') {
        if (Source != '0') {

            //Upload
            if (TaskId == '00') {
                if (DateStringStart != '' && DateStringEnd != '') {
                    CertFileAdd(ActionBtnId,
                        Icon,
                        TaskId,
                        Source,
                        FileTypeId,
                        RegionId,
                        LSId,
                        AxleId,
                        StationNumber,
                        LaneName,
                        PdvId,
                        DateStringStart,
                        DateStringEnd,

                        HMPlanString,
                        IsEveryDay,
                        IsEveryHour,
                        IsPlanned,
                        IsCron,
                        BillingId,
                        CategoryId,
                        AddDaysStart,
                        AddDaysEnd);

                    ShowReport('CertReportId');
                    $("#ParamMessageTextId").html("");
                }
                else {
                    ParamMessageErrorDisplay("Les dates de début et de fin sont obligatoires")
                };
            }
            else {
                //Generate
                if (TaskId == '01') {
                    if (DateStringStart != '' && DateStringEnd != '') {
                        CertFileAdd(ActionBtnId,
                            Icon,
                            TaskId,
                            Source,
                            FileTypeId,
                            RegionId,
                            LSId,
                            AxleId,
                            StationNumber,
                            LaneName,
                            PdvId,
                            DateStringStart,
                            DateStringEnd,

                            HMPlanString,
                            IsEveryDay,
                            IsEveryHour,
                            IsPlanned,
                            IsCron,
                            BillingId,
                            CategoryId,
                            AddDaysStart,
                            AddDaysEnd);
                    }
                    else {
                        ParamMessageErrorDisplay("Les dates de début et de fin sont obligatoires")
                    };
                }
                else {
                    //Visualize
                    if (TaskId == '03') {
                        if (DateStringStart != '' && DateStringEnd != '') {
                            //Msg
                            if (Source == '04') {
                                CertFileAdd(ActionBtnId,
                                    Icon,
                                    TaskId,
                                    Source,
                                    FileTypeId,
                                    RegionId,
                                    LSId,
                                    AxleId,
                                    StationNumber,
                                    LaneName,
                                    PdvId,
                                    DateStringStart,
                                    DateStringEnd,

                                    HMPlanString,
                                    IsEveryDay,
                                    IsEveryHour,
                                    IsPlanned,
                                    IsCron,
                                    BillingId,
                                    CategoryId,
                                    AddDaysStart,
                                    AddDaysEnd);
                            }
                        }
                        else {
                            ParamMessageErrorDisplay("Les dates de début et de fin sont obligatoires")
                        };
                    }
                    else {
                        //Calculate
                        if (TaskId == '04') {
                            if (DateStringStart != '' && DateStringEnd != '') {
                                CertFileAdd(ActionBtnId,
                                    Icon,
                                    TaskId,
                                    Source,
                                    FileTypeId,
                                    RegionId,
                                    LSId,
                                    AxleId,
                                    StationNumber,
                                    LaneName,
                                    PdvId,
                                    DateStringStart,
                                    DateStringEnd,

                                    HMPlanString,
                                    IsEveryDay,
                                    IsEveryHour,
                                    IsPlanned,
                                    IsCron,
                                    BillingId,
                                    CategoryId,
                                    AddDaysStart,
                                    AddDaysEnd);
                            }
                            else {
                                ParamMessageErrorDisplay("Les dates de début et de fin sont obligatoires")
                            };
                        }
                        else {
                            //Update
                            if (TaskId == '05' || TaskId == '08' || TaskId == '13') {
                                if (DateStringStart != '' && DateStringEnd != '') {
                                    CertFileAdd(ActionBtnId,
                                        Icon,
                                        TaskId,
                                        Source,
                                        FileTypeId,
                                        RegionId,
                                        LSId,
                                        AxleId,
                                        StationNumber,
                                        LaneName,
                                        PdvId,
                                        DateStringStart,
                                        DateStringEnd,

                                        HMPlanString,
                                        IsEveryDay,
                                        IsEveryHour,
                                        IsPlanned,
                                        IsCron,
                                        BillingId,
                                        CategoryId,
                                        AddDaysStart,
                                        AddDaysEnd);
                                }
                                else {
                                    ParamMessageErrorDisplay("Les dates de début et de fin sont obligatoires")
                                };
                            }
                            else {
                                //Read
                                if (TaskId == '06') {
                                    //Msg
                                    if (Source == '04') {
                                        CertFileAdd(ActionBtnId,
                                            Icon,
                                            TaskId,
                                            Source,
                                            FileTypeId,
                                            RegionId,
                                            LSId,
                                            AxleId,
                                            StationNumber,
                                            LaneName,
                                            PdvId,
                                            DateStringStart,
                                            DateStringEnd,

                                            HMPlanString,
                                            IsEveryDay,
                                            IsEveryHour,
                                            IsPlanned,
                                            IsCron,
                                            BillingId,
                                            CategoryId,
                                            AddDaysStart,
                                            AddDaysEnd);
                                    }
                                }
                                else {
                                    //Upload
                                    if (TaskId == '11' || TaskId == '08' || TaskId == '12' || TaskId == '09' || TaskId == '01') {//Backup or Purge, Restaure, Notif, Batch
                                        if (DateStringStart != '' && DateStringEnd != '') {
                                            CertFileAdd(ActionBtnId,
                                                Icon,
                                                TaskId,
                                                Source,
                                                FileTypeId,
                                                RegionId,
                                                LSId,
                                                AxleId,
                                                StationNumber,
                                                LaneName,
                                                PdvId,
                                                DateStringStart,
                                                DateStringEnd,

                                                HMPlanString,
                                                IsEveryDay,
                                                IsEveryHour,
                                                IsPlanned,
                                                IsCron,
                                                BillingId,
                                                CategoryId,
                                                AddDaysStart,
                                                AddDaysEnd);
                                            $("#ParamMessageTextId").html("");
                                        }
                                        else {
                                            ParamMessageErrorDisplay("Les dates de début et de fin sont obligatoires")
                                        };
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        else {
            ParamMessageErrorDisplay("La source est obligatoire")
        };
    }
    else {
        ParamMessageErrorDisplay("La tâche est obligatoire")
    };
}

function CertFileUpdateAdd(CertFileUpdateId) {

    HideReport('CertCtrTrxEojDiff' + 'TableReportId');

    HideReport('CertPostBillingId' + 'TableReportId');
    HideReport('CertPost' + 'TableReportId');

    //HideReport('CertTrxLaneStation' + 'TableReportId');
    //HideReport('CertTrxLaneLane' + 'TableReportId');
    //HideReport('CertTrxLaneSpecificLane' + 'TableReportId');
    //HideReport('CertTrxLaneSpecificBillingId' + 'TableReportId');
    //HideReport('CertTrxLaneBillingId' + 'TableReportId');
    //HideReport('CertTrxLane' + 'TableReportId');

    HideReport('CertRecoReceipt' + 'TableReportId');
    HideReport('CertRecoPost' + 'TableReportId');
    HideReport('CertRecoTrxLane' + 'TableReportId');

    //HideReport('CertFilePlan' + 'TableReportId');



    var ActionBtnId = new String('CertFileUpdateAdd' + 'BtnId' + CertFileUpdateId);
    var Icon = 'fas fa-redo-alt';

    var TaskId = '00';
    var Source = new String(CertFileUpdateId).substr(0, 2);
    var FileTypeId = new String(CertFileUpdateId).substr(2, 2);
    var RegionId = '0';
    var LSId = '0';
    var AxleId = '0';
    var StationNumber = '0';
    var LaneName = '0';
    var PdvId = '0';

    var DateStringStart = new String(CertFileUpdateId).substr(4, 8);
    var DateStringEnd = new String(CertFileUpdateId).substr(4, 8);

    var HMPlanString = '2359';
    var IsEveryDay = false;
    var IsEveryHour = false;
    var IsPlanned = false;
    var IsCron = false;
    var BillingId = '0';
    var CategoryId = '0';
    var AddDaysStart = 0;
    var AddDaysEnd = 0;

    var FlowId = '';
    var FlowCategoryId = '';


    if (Source == "10")//Toll
    {
        TaskId = '04';
        if (FileTypeId == '00') {
            if (new String(CertFileUpdateId).length == 12) {
                DateStringEnd = new String(CertFileUpdateId).substr(4, 8);
                DateStringStart = DateStringEnd;
                AddDaysStart = 0;
                AddDaysEnd = 0;
                FileTypeId = '0';
            }
        }
        if (FileTypeId == 'D0') {
            if (new String(CertFileUpdateId).length == 12) {
                DateStringEnd = new String(CertFileUpdateId).substr(4, 8);
                DateStringStart = DateStringEnd;
                AddDaysStart = 0;
                AddDaysEnd = 0;
            }
        }
        if (FileTypeId == 'M0') {
            if (new String(CertFileUpdateId).length == 12) {
                DateStringEnd = new String(CertFileUpdateId).substr(4, 8);
                DateStringStart = DateStringEnd;
                AddDaysStart = 0;
                AddDaysEnd = 0;
            }
        }
        if (FileTypeId == 'C0') {
            if (new String(CertFileUpdateId).length == 12) {
                DateStringEnd = new String(CertFileUpdateId).substr(4, 8);
                DateStringStart = DateStringEnd;
                AddDaysStart = 0;
                AddDaysEnd = 0;
            }
        }
        if (FileTypeId == "E1") {
            if (new String(CertFileUpdateId).length == 12) {
                DateStringEnd = new String(CertFileUpdateId).substr(4, 8);
                DateStringStart = DateStringEnd;
                AddDaysStart = 0;
                AddDaysEnd = 0;
            }
            if (new String(CertFileUpdateId).length == 16) {
                DateStringEnd = new String(CertFileUpdateId).substr(4, 8);
                DateStringStart = DateStringEnd;
                RegionId = new String(CertFileUpdateId).substr(12, 2);
                StationNumber = new String(CertFileUpdateId).substr(14, 2);
            }
        }
        if (FileTypeId == "K1") {
            if (new String(CertFileUpdateId).length == 12) {
                DateStringEnd = new String(CertFileUpdateId).substr(4, 8);
                DateStringStart = DateStringEnd;
                AddDaysStart = 0;
                AddDaysEnd = 0;
            }
            if (new String(CertFileUpdateId).length == 16) {
                DateStringEnd = new String(CertFileUpdateId).substr(4, 8);
                DateStringStart = DateStringEnd;
                RegionId = new String(CertFileUpdateId).substr(12, 2);
                StationNumber = new String(CertFileUpdateId).substr(14, 2);
            }
        }
        if (FileTypeId == "C1") {
            if (new String(CertFileUpdateId).length == 12) {//CertInterfaceDay
                DateStringEnd = new String(CertFileUpdateId).substr(4, 8);
                DateStringStart = DateStringEnd;
                AddDaysStart = 0;
                AddDaysEnd = 0;
            }
            if (new String(CertFileUpdateId).length == 14) {//CertInterfaceFlow
                DateStringEnd = new String(CertFileUpdateId).substr(4, 8);
                DateStringStart = DateStringEnd;
                FlowId = new String(CertFileUpdateId).substr(12, 2);
            }
            if (new String(CertFileUpdateId).length == 16) {//
                DateStringEnd = new String(CertFileUpdateId).substr(4, 8);
                DateStringStart = DateStringEnd;
                RegionId = new String(CertFileUpdateId).substr(12, 2);
                StationNumber = new String(CertFileUpdateId).substr(14, 2);
            }
            if (new String(CertFileUpdateId).length == 20) {//CertInterfaceStation
                DateStringEnd = new String(CertFileUpdateId).substr(4, 8);
                DateStringStart = DateStringEnd;
                FlowId = new String(CertFileUpdateId).substr(12, 2);
                FlowCategoryId = new String(CertFileUpdateId).substr(14, 2);
                BillingId = FlowCategoryId;
                RegionId = new String(CertFileUpdateId).substr(16, 2);
                StationNumber = new String(CertFileUpdateId).substr(18, 2);
                AddDaysStart = 0;
                AddDaysEnd = 0;
            }
        }
        if (FileTypeId == "C2") {
            if (new String(CertFileUpdateId).length == 12) {//NrTrxLaneDay
                DateStringEnd = new String(CertFileUpdateId).substr(4, 8);
                DateStringStart = DateStringEnd;
            }
            if (new String(CertFileUpdateId).length == 16) {//NrTrxLaneStation
                DateStringEnd = new String(CertFileUpdateId).substr(4, 8);
                DateStringStart = DateStringEnd;
                RegionId = new String(CertFileUpdateId).substr(12, 2);
                StationNumber = new String(CertFileUpdateId).substr(14, 2);
            }
            if (new String(CertFileUpdateId).length == 18) {//NrTrxLaneMp
                DateStringEnd = new String(CertFileUpdateId).substr(4, 8);
                DateStringStart = DateStringEnd;
                RegionId = new String(CertFileUpdateId).substr(12, 2);
                StationNumber = new String(CertFileUpdateId).substr(14, 2);
                BillingId = new String(CertFileUpdateId).substr(16, 2);
                AddDaysStart = 0;
                AddDaysEnd = 0;
            }
        }
        if (FileTypeId == "C3") {
            if (new String(CertFileUpdateId).length == 12) {
                DateStringEnd = new String(CertFileUpdateId).substr(4, 8);
                DateStringStart = DateStringEnd;
                AddDaysStart = 0;
                AddDaysEnd = 0;
            }
            if (new String(CertFileUpdateId).length == 14) {
                DateStringEnd = new String(CertFileUpdateId).substr(4, 8);
                DateStringStart = DateStringEnd;
                BillingId = new String(CertFileUpdateId).substr(12, 2);
                AddDaysStart = 0;
                AddDaysEnd = 0;
            }
            if (new String(CertFileUpdateId).length == 18) {
                DateStringEnd = new String(CertFileUpdateId).substr(4, 8);
                DateStringStart = DateStringEnd;
                RegionId = new String(CertFileUpdateId).substr(12, 2);
                StationNumber = new String(CertFileUpdateId).substr(14, 2);
                BillingId = new String(CertFileUpdateId).substr(16, 2);
                AddDaysStart = 0;
                AddDaysEnd = 0;
            }
        }
        if (FileTypeId == "M1" || FileTypeId == "M2" || FileTypeId == "M3" || FileTypeId == "M4" || FileTypeId == "D1" || FileTypeId == "D2" || FileTypeId == "D3") {
            if (new String(CertFileUpdateId).length == 12) {//CertInterfaceDay
                DateStringEnd = new String(CertFileUpdateId).substr(4, 8);
                DateStringStart = DateStringEnd;
            }
            if (new String(CertFileUpdateId).length == 16) {//CertInterfaceStation
                DateStringEnd = new String(CertFileUpdateId).substr(4, 8);
                DateStringStart = DateStringEnd;
                StationNumber = new String(CertFileUpdateId).substr(14, 2);
            }
        }

        if (FileTypeId == "C4" || FileTypeId == "C5" || FileTypeId == "C7" || FileTypeId == "C8" || FileTypeId == "C9" || FileTypeId == "CA") {
            if (new String(CertFileUpdateId).length == 12) {
                DateStringEnd = new String(CertFileUpdateId).substr(4, 8);
                DateStringStart = DateStringEnd;
                AddDaysStart = 0;
                AddDaysEnd = 0;
            }
            if (new String(CertFileUpdateId).length == 16) {
                DateStringEnd = new String(CertFileUpdateId).substr(4, 8);
                DateStringStart = DateStringEnd;
                RegionId = new String(CertFileUpdateId).substr(12, 2);
                StationNumber = new String(CertFileUpdateId).substr(14, 2);
                AddDaysStart = 0;
                AddDaysEnd = 0;
            }
        }
        if (FileTypeId == "CC" || FileTypeId == "CD" || FileTypeId == "CE" || FileTypeId == "CB" || FileTypeId == "CK" || FileTypeId == "CL" ||
            FileTypeId == "CM" || FileTypeId == "CN" || FileTypeId == "CG" || FileTypeId == "CQ" || FileTypeId == "CJ" || FileTypeId == "CI" ||
            FileTypeId == "CR" || FileTypeId == "CO" || FileTypeId == "CP" || FileTypeId == "CS" || FileTypeId == "CT" || FileTypeId == "CV" ||
            FileTypeId == "CW" || FileTypeId == "CX" || FileTypeId == "CY" || FileTypeId == "D4" || FileTypeId == "D5" || FileTypeId == "D7" ||
            FileTypeId == "D8" || FileTypeId == "D7" || FileTypeId == "D9" || FileTypeId == "DA") {
            if (new String(CertFileUpdateId).length == 12) {
                DateStringEnd = new String(CertFileUpdateId).substr(4, 8);
                DateStringStart = DateStringEnd;
                AddDaysStart = 0;
                AddDaysEnd = 0;
            }
            if (new String(CertFileUpdateId).length == 16) {
                DateStringEnd = new String(CertFileUpdateId).substr(4, 8);
                DateStringStart = DateStringEnd;
                RegionId = new String(CertFileUpdateId).substr(12, 2);
                StationNumber = new String(CertFileUpdateId).substr(14, 2);
                AddDaysStart = 0;
                AddDaysEnd = 0;
            }
        }
    }
    else {
        if (Source == "07")//Ce
        {
            if (FileTypeId == "N2")//Interface
            {
                if (new String(CertFileUpdateId).length == 12) {
                    DateStringEnd = new String(CertFileUpdateId).substr(4, 8);
                    DateStringStart = DateStringEnd;
                    AddDaysStart = 0;
                    AddDaysEnd = 0;
                }
                if (new String(CertFileUpdateId).length == 16) {//NbrTrxLaneStation
                    DateStringEnd = new String(CertFileUpdateId).substr(4, 8);
                    DateStringStart = DateStringEnd;
                    RegionId = new String(CertFileUpdateId).substr(12, 2);
                    StationNumber = new String(CertFileUpdateId).substr(14, 2);
                    AddDaysStart = 0;
                    AddDaysEnd = 0;
                }
            }
            if (FileTypeId == "78")//Vers Pdv
            {
                //Day
                if (new String(CertFileUpdateId).length == 12) {
                    DateStringEnd = new String(CertFileUpdateId).substr(4, 8);
                    DateStringStart = DateStringEnd;
                    AddDaysStart = 0;
                    AddDaysEnd = 0;
                }
                //Station
                if (new String(CertFileUpdateId).length == 16) {
                    DateStringEnd = new String(CertFileUpdateId).substr(4, 8);
                    DateStringStart = DateStringEnd;
                    RegionId = new String(CertFileUpdateId).substr(12, 2);
                    StationNumber = new String(CertFileUpdateId).substr(14, 2);
                    AddDaysStart = 0;
                    AddDaysEnd = 0;
                }
            }
            if (FileTypeId == "P0")//Reddition PDV
            {
                if (new String(CertFileUpdateId).length == 12) {
                    DateStringEnd = new String(CertFileUpdateId).substr(4, 8);
                    DateStringStart = DateStringEnd;
                    AddDaysStart = 0;
                    AddDaysEnd = 0;
                }
                if (new String(CertFileUpdateId).length == 16 || new String(CertFileUpdateId).length == 20) {
                    DateStringEnd = new String(CertFileUpdateId).substr(4, 8);
                    DateStringStart = DateStringEnd;
                    RegionId = new String(CertFileUpdateId).substr(12, 2);
                    StationNumber = new String(CertFileUpdateId).substr(14, 2);
                    AddDaysStart = 0;
                    AddDaysEnd = 0;
                }
            }
            if (FileTypeId == "00")//
            {
                if (new String(CertFileUpdateId).length == 12) {//NbrTrxLaneDay
                    DateStringEnd = new String(CertFileUpdateId).substr(4, 8);
                    DateStringStart = DateStringEnd;
                    AddDaysStart = 0;
                    AddDaysEnd = 0;
                    FileTypeId = '0';
                }
            }
            if (FileTypeId == "N1")//NbrTrxLane
            {
                if (new String(CertFileUpdateId).length == 12) {//NbrTrxLaneDay
                    DateStringEnd = new String(CertFileUpdateId).substr(4, 8);
                    DateStringStart = DateStringEnd;
                    AddDaysStart = 0;
                    AddDaysEnd = 0;
                }
                if (new String(CertFileUpdateId).length == 16) {//NbrTrxLaneStation
                    DateStringEnd = new String(CertFileUpdateId).substr(4, 8);
                    DateStringStart = DateStringEnd;
                    RegionId = new String(CertFileUpdateId).substr(12, 2);
                    StationNumber = new String(CertFileUpdateId).substr(14, 2);
                    AddDaysStart = 0;
                    AddDaysEnd = 0;
                }
                if (new String(CertFileUpdateId).length == 18) {//NbrTrxLaneNbrTrxMp
                    DateStringEnd = new String(CertFileUpdateId).substr(4, 8);
                    DateStringStart = DateStringEnd;
                    RegionId = new String(CertFileUpdateId).substr(12, 2);
                    StationNumber = new String(CertFileUpdateId).substr(14, 2);
                    BillingId = new String(CertFileUpdateId).substr(16, 2);
                    AddDaysStart = 0;
                    AddDaysEnd = 0;
                }
            }
            if (FileTypeId == "P1")//TrxPdv
            {
                if (new String(CertFileUpdateId).length == 14) {//TrxPdv
                    DateStringEnd = new String(CertFileUpdateId).substr(4, 8);
                    DateStringStart = DateStringEnd;
                    PdvId = new String(CertFileUpdateId).substr(12, 2);
                }
                if (new String(CertFileUpdateId).length == 16) {//TrxPdv
                    DateStringEnd = new String(CertFileUpdateId).substr(4, 8);
                    DateStringStart = DateStringEnd;
                    RegionId = new String(CertFileUpdateId).substr(12, 2);
                    StationNumber = new String(CertFileUpdateId).substr(14, 2);
                }
            }

            if (FileTypeId == "T1" || FileTypeId == "72" || FileTypeId == "76")//Receipt, CheckStation, TraficOdStation,
            {
                if (new String(CertFileUpdateId).length == 16) {//ReceiptStation
                    DateStringEnd = new String(CertFileUpdateId).substr(4, 8);
                    DateStringStart = DateStringEnd;
                    RegionId = new String(CertFileUpdateId).substr(12, 2);
                    StationNumber = new String(CertFileUpdateId).substr(14, 2);

                    AddDaysStart = 0;
                    AddDaysEnd = 0;
                }
            }

            if (FileTypeId == "71")//Nr  
            {
                if (new String(CertFileUpdateId).length == 16) {//NrSite
                    DateStringEnd = new String(CertFileUpdateId).substr(4, 8);
                    DateStringStart = DateStringEnd;
                    RegionId = new String(CertFileUpdateId).substr(12, 2);

                    AddDaysStart = 0;
                    AddDaysEnd = 0;
                }
            }
            if (FileTypeId == "72") {//CeWeb LaneGap
                DateStringStart = new String(CertFileUpdateId).substr(4, 8);
                DateStringEnd = new String(CertFileUpdateId).substr(4, 8);
                RegionId = new String(CertFileUpdateId).substr(12, 2);
                StationNumber = new String(CertFileUpdateId).substr(14, 2);
            }
            if (FileTypeId == "73")//Post 
            {
                if (new String(CertFileUpdateId).length == 16) {//PostStation
                    DateStringEnd = new String(CertFileUpdateId).substr(4, 8);
                    DateStringStart = DateStringEnd;
                    RegionId = new String(CertFileUpdateId).substr(12, 2);
                    StationNumber = new String(CertFileUpdateId).substr(14, 2);

                    AddDaysStart = 0;
                    AddDaysEnd = 0;
                }
                if (new String(CertFileUpdateId).length == 17) {//NrSite
                    DateStringEnd = new String(CertFileUpdateId).substr(4, 8);
                    DateStringStart = DateStringEnd;
                    RegionId = new String(CertFileUpdateId).substr(12, 2);

                    AddDaysStart = 0;
                    AddDaysEnd = 1;
                }
            }

            if (FileTypeId == "77")//Vers 
            {
                if (new String(CertFileUpdateId).length == 12) {//VersDay
                    DateStringEnd = new String(CertFileUpdateId).substr(4, 8);
                    DateStringStart = DateStringEnd;

                    AddDaysStart = 0;
                    AddDaysEnd = 0;
                }
                if (new String(CertFileUpdateId).length == 16) {//Vers
                    DateStringEnd = new String(CertFileUpdateId).substr(4, 8);
                    DateStringStart = DateStringEnd;
                    RegionId = new String(CertFileUpdateId).substr(12, 2);

                    AddDaysStart = 0;
                    AddDaysEnd = 0;
                }
            }

            if (FileTypeId == "70")//Vers 
            {
                if (new String(CertFileUpdateId).length == 16) {//TraficStation
                    DateStringEnd = new String(CertFileUpdateId).substr(4, 8);
                    DateStringStart = DateStringEnd;
                    RegionId = new String(CertFileUpdateId).substr(12, 2);
                    StationNumber = new String(CertFileUpdateId).substr(14, 2);

                    AddDaysStart = 0;
                    AddDaysEnd = 0;
                }
            }

            if (FileTypeId == "64")  //OpeWeb TrxLane
            {
                if (new String(CertFileUpdateId).length == 19) {//CtrCohBojSansEoj
                    DateStringStart = new String(CertFileUpdateId).substr(4, 8);
                    DateStringEnd = DateStringStart;

                    RegionId = new String(CertFileUpdateId).substr(12, 2);
                    StationNumber = new String(CertFileUpdateId).substr(14, 2);
                    LaneName = new String(CertFileUpdateId).substr(16, 3);
                    BillingId = '0';
                    CategoryId = '0';

                    AddDaysStart = 0;
                    AddDaysEnd = 0;
                }

                if (new String(CertFileUpdateId).length == 20) {//CtrTrxExhaustivité
                    DateStringStart = new String(CertFileUpdateId).substr(4, 8);
                    DateStringEnd = DateStringStart;
                    StationNumber = new String(CertFileUpdateId).substr(14, 2);
                    LaneName = new String(CertFileUpdateId).substr(16, 3);
                    BillingId = '0';
                    CategoryId = '0';

                    AddDaysStart = -1;
                    AddDaysEnd = 0;
                }

                if (new String(CertFileUpdateId).length == 21) {//CtrTrxEoj
                    DateStringEnd = new String(CertFileUpdateId).substr(4, 8);
                    DateStringStart = new String(CertFileUpdateId).substr(4, 8);
                    StationNumber = new String(CertFileUpdateId).substr(14, 2);
                    LaneName = new String(CertFileUpdateId).substr(16, 3);
                    BillingId = new String(CertFileUpdateId).substr(19, 2);

                    AddDaysStart = -1;
                    AddDaysEnd = 0;
                }

                if (new String(CertFileUpdateId).length == 23) {//CtrTrxLaneBillingIdAll
                    DateStringEnd = new String(CertFileUpdateId).substr(4, 8);
                    DateStringStart = new String(CertFileUpdateId).substr(4, 8);
                    StationNumber = new String(CertFileUpdateId).substr(14, 2);
                    LaneName = new String(CertFileUpdateId).substr(16, 3);
                    BillingId = new String(CertFileUpdateId).substr(19, 2);
                    CategoryId = new String(CertFileUpdateId).substr(21, 2);

                    AddDaysStart = 0;
                    AddDaysEnd = 0;
                }

                if (new String(CertFileUpdateId).length == 25) {//TrxLaneOpe
                    DateStringStart = new String(CertFileUpdateId).substr(4, 12) + '00';
                    DateStringEnd = new String(CertFileUpdateId).substr(4, 12) + '59';
                    StationNumber = new String(CertFileUpdateId).substr(20, 2);
                    LaneName = new String(CertFileUpdateId).substr(22, 3);

                    AddDaysStart = 0;
                    AddDaysEnd = 0;
                }
                if (new String(CertFileUpdateId).length == 43) {
                    DateStringEnd = new String(CertFileUpdateId).substr(4, 14);
                    //DateStringStart = new String(CertFileUpdateId).substr(18, 14);
                    DateStringStart = DateStringEnd;
                    StationNumber = new String(CertFileUpdateId).substr(34, 2);
                    LaneName = new String(CertFileUpdateId).substr(36, 3);
                    BillingId = new String(CertFileUpdateId).substr(39, 2);
                    CategoryId = new String(CertFileUpdateId).substr(41, 2);
                }
            }

            if (FileTypeId == "65") {//CeWeb CtrTrxEojDiff
                DateStringStart = new String(CertFileUpdateId).substr(4, 14);
                DateStringEnd = new String(CertFileUpdateId).substr(18, 14);
                StationNumber = new String(CertFileUpdateId).substr(34, 2);
                LaneName = new String(CertFileUpdateId).substr(36, 3);
                BillingId = new String(CertFileUpdateId).substr(39, 2);
                CategoryId = '0';
            }

            if (FileTypeId == "74" || FileTypeId == "Y8")//TrxLane, Ce, ZIP
            {
                if (new String(CertFileUpdateId).length == 12)//TrxLaneStation
                {
                    DateStringEnd = new String(CertFileUpdateId).substr(4, 8);
                    DateStringStart = new String(CertFileUpdateId).substr(4, 8);
                }
                if (new String(CertFileUpdateId).length == 16)//TrxLaneStation
                {
                    DateStringEnd = new String(CertFileUpdateId).substr(4, 8);
                    DateStringStart = new String(CertFileUpdateId).substr(4, 8);
                    StationNumber = new String(CertFileUpdateId).substr(14, 2);
                }
                if (new String(CertFileUpdateId).length == 19)//TrxLaneLane, CtrCohBojSansEoj
                {
                    DateStringEnd = new String(CertFileUpdateId).substr(4, 8);
                    DateStringStart = new String(CertFileUpdateId).substr(4, 8);
                    StationNumber = new String(CertFileUpdateId).substr(14, 2);
                    LaneName = new String(CertFileUpdateId).substr(16, 3);

                    AddDaysStart = -1;
                    AddDaysEnd = 0;
                }
                if (new String(CertFileUpdateId).length == 20) {//CtrTrxExhaustivité
                    DateStringStart = new String(CertFileUpdateId).substr(4, 8);
                    DateStringEnd = DateStringStart;
                    StationNumber = new String(CertFileUpdateId).substr(14, 2);
                    LaneName = new String(CertFileUpdateId).substr(16, 3);
                    BillingId = '0';
                    CategoryId = '0';

                    AddDaysStart = -1;
                    AddDaysEnd = 0;
                }
                if (new String(CertFileUpdateId).length == 21)//TrxLaneBillingId or NrTrxLaneLane, CtrTrxEoj
                {
                    DateStringEnd = new String(CertFileUpdateId).substr(4, 8);
                    DateStringStart = new String(CertFileUpdateId).substr(4, 8);
                    StationNumber = new String(CertFileUpdateId).substr(14, 2);

                    var Select = LaneName = new String(CertFileUpdateId).substr(16, 1);
                    if (Select == 'E' || Select == 'S') {
                        LaneName = new String(CertFileUpdateId).substr(16, 3);
                        BillingId = new String(CertFileUpdateId).substr(19, 2);
                        AddDaysStart = -1;
                        AddDaysEnd = 0;
                    }
                    else {
                        BillingId = new String(CertFileUpdateId).substr(16, 2);
                        LaneName = new String(CertFileUpdateId).substr(18, 3);
                    }
                }
                if (new String(CertFileUpdateId).length == 23) {//CtrTrxLaneBillingIdAll

                    if (new String(CertFileUpdateId).length == 23) {
                        DateStringEnd = new String(CertFileUpdateId).substr(4, 8);
                        DateStringStart = new String(CertFileUpdateId).substr(4, 8);

                        var Select = new String(CertFileUpdateId).substr(16, 1);
                        if (Select == 'E' || Select == 'S') {//CtrTrxLaneBillingIdAll
                            StationNumber = new String(CertFileUpdateId).substr(14, 2);
                            LaneName = new String(CertFileUpdateId).substr(16, 3);
                            BillingId = new String(CertFileUpdateId).substr(19, 2);
                            CategoryId = new String(CertFileUpdateId).substr(21, 2);

                            AddDaysStart = 0;
                            AddDaysEnd = 0;
                        }
                        else {//CertInterfaceLane
                            DateStringEnd = new String(CertFileUpdateId).substr(4, 8);
                            DateStringStart = new String(CertFileUpdateId).substr(4, 8);
                            FlowId = new String(CertFileUpdateId).substr(12, 2);
                            FlowCategoryId = new String(CertFileUpdateId).substr(14, 2);
                            StationNumber = new String(CertFileUpdateId).substr(18, 2);
                            LaneName = new String(CertFileUpdateId).substr(20, 3);
                            BillingId = FlowCategoryId;

                            AddDaysStart = 0;
                            AddDaysEnd = 0;
                        }
                    }

                }
                if (new String(CertFileUpdateId).length == 25) {//TrxLaneOpe
                    DateStringStart = new String(CertFileUpdateId).substr(4, 12) + '00';
                    DateStringEnd = new String(CertFileUpdateId).substr(4, 12) + '59';
                    StationNumber = new String(CertFileUpdateId).substr(20, 2);
                    LaneName = new String(CertFileUpdateId).substr(22, 3);

                    AddDaysStart = 0;
                    AddDaysEnd = 0;
                }
                if (new String(CertFileUpdateId).length == 43) {
                    DateStringEnd = new String(CertFileUpdateId).substr(4, 14);
                    //DateStringStart = new String(CertFileUpdateId).substr(18, 14);
                    DateStringStart = DateStringEnd;
                    StationNumber = new String(CertFileUpdateId).substr(34, 2);
                    LaneName = new String(CertFileUpdateId).substr(36, 3);
                    BillingId = new String(CertFileUpdateId).substr(39, 2);
                    CategoryId = new String(CertFileUpdateId).substr(41, 2);
                }
            }
            if (FileTypeId == "Q1") {//CeWeb Qualif
                DateStringStart = new String(CertFileUpdateId).substr(4, 8);
                DateStringEnd = new String(CertFileUpdateId).substr(4, 8);
                StationNumber = new String(CertFileUpdateId).substr(14, 2);
            }
            if (FileTypeId == "P4") {//CeWeb pDVGap
                if (new String(CertFileUpdateId).length == 12) {
                    DateStringEnd = new String(CertFileUpdateId).substr(4, 8);
                    DateStringStart = DateStringEnd;
                    AddDaysStart = 0;
                    AddDaysEnd = 0;
                }
                if (new String(CertFileUpdateId).length == 16) {
                    DateStringEnd = new String(CertFileUpdateId).substr(4, 8);
                    DateStringStart = DateStringEnd;
                    StationNumber = new String(CertFileUpdateId).substr(14, 2);
                    AddDaysStart = 0;
                    AddDaysEnd = 0;
                }
            }
        }
        else {
            if (Source == '05') {
                if (FileTypeId == "00")// 
                {
                    if (new String(CertFileUpdateId).length == 12) {
                        DateStringEnd = new String(CertFileUpdateId).substr(4, 8);
                        DateStringStart = DateStringEnd;
                        AddDaysStart = 0;
                        AddDaysEnd = 0;
                        FileTypeId = '0';
                    }
                }
                if (FileTypeId == "53")//Post 
                {
                    if (new String(CertFileUpdateId).length == 16) {//PostStation
                        DateStringEnd = new String(CertFileUpdateId).substr(4, 8);
                        DateStringStart = DateStringEnd;
                        StationNumber = new String(CertFileUpdateId).substr(14, 2);

                        AddDaysStart = 0;
                        AddDaysEnd = 0;
                    }
                    if (new String(CertFileUpdateId).length == 17) {//NrSite
                        DateStringEnd = new String(CertFileUpdateId).substr(4, 8);
                        DateStringStart = DateStringEnd;

                        AddDaysStart = 0;
                        AddDaysEnd = 1;
                    }
                    if (new String(CertFileUpdateId).length == 19) {
                        DateStringEnd = new String(CertFileUpdateId).substr(4, 8);
                        DateStringStart = new String(CertFileUpdateId).substr(4, 8);
                        StationNumber = new String(CertFileUpdateId).substr(14, 2);
                        LaneName = new String(CertFileUpdateId).substr(16, 3);
                        BillingId = '0';
                        CategoryId = '0';
                    }
                }

                if (FileTypeId == "54" || FileTypeId == "58")  //OpeWeb TrxLane
                {
                    if (new String(CertFileUpdateId).length == 16)//TrxLaneStation
                    {
                        DateStringEnd = new String(CertFileUpdateId).substr(4, 8);
                        DateStringStart = new String(CertFileUpdateId).substr(4, 8);
                        StationNumber = new String(CertFileUpdateId).substr(14, 2);
                    }

                    if (new String(CertFileUpdateId).length == 19) {//CtrCohBojSansEoj, TrxLaneLane
                        DateStringStart = new String(CertFileUpdateId).substr(4, 8);
                        DateStringEnd = DateStringStart;
                        StationNumber = new String(CertFileUpdateId).substr(14, 2);
                        LaneName = new String(CertFileUpdateId).substr(16, 3);
                        AddDaysStart = -1;
                        AddDaysEnd = 0;
                    }

                    if (new String(CertFileUpdateId).length == 21)//TrxLaneBillingId or NrTrxLaneLane, CtrTrxEoj
                    {
                        DateStringEnd = new String(CertFileUpdateId).substr(4, 8);
                        DateStringStart = new String(CertFileUpdateId).substr(4, 8);
                        StationNumber = new String(CertFileUpdateId).substr(14, 2);

                        var Select = new String(CertFileUpdateId).substr(16, 1);
                        if (Select == 'E' || Select == 'S') {
                            LaneName = new String(CertFileUpdateId).substr(16, 3);
                            BillingId = new String(CertFileUpdateId).substr(19, 2);
                            AddDaysStart = -1;
                            AddDaysEnd = 0;
                        }
                        else {
                            BillingId = new String(CertFileUpdateId).substr(16, 2);
                            LaneName = new String(CertFileUpdateId).substr(18, 3);
                        }
                    }
                    if (new String(CertFileUpdateId).length == 23) {
                        DateStringEnd = new String(CertFileUpdateId).substr(4, 8);
                        DateStringStart = new String(CertFileUpdateId).substr(4, 8);


                        var Select = new String(CertFileUpdateId).substr(16, 1);
                        if (Select == 'E' || Select == 'S') {//CtrTrxLaneBillingIdAll
                            StationNumber = new String(CertFileUpdateId).substr(14, 2);
                            LaneName = new String(CertFileUpdateId).substr(16, 3);
                            BillingId = new String(CertFileUpdateId).substr(19, 2);
                            CategoryId = new String(CertFileUpdateId).substr(21, 2);

                            AddDaysStart = 0;
                            AddDaysEnd = 0;
                        }
                        else {//CertInterfaceLane
                            DateStringEnd = new String(CertFileUpdateId).substr(4, 8);
                            DateStringStart = new String(CertFileUpdateId).substr(4, 8);
                            FlowId = new String(CertFileUpdateId).substr(12, 2);
                            FlowCategoryId = new String(CertFileUpdateId).substr(14, 2);
                            StationNumber = new String(CertFileUpdateId).substr(18, 2);
                            LaneName = new String(CertFileUpdateId).substr(20, 3);
                            BillingId = FlowCategoryId;

                            AddDaysStart = 0;
                            AddDaysEnd = 0;
                        }
                    }

                    if (new String(CertFileUpdateId).length == 25) {//TrxLaneOpe
                        DateStringStart = new String(CertFileUpdateId).substr(4, 12) + '00';
                        DateStringEnd = new String(CertFileUpdateId).substr(4, 12) + '59';
                        StationNumber = new String(CertFileUpdateId).substr(20, 2);
                        LaneName = new String(CertFileUpdateId).substr(22, 3);

                        AddDaysStart = 0;
                        AddDaysEnd = 0;
                    }

                    //if (new String(CertFileUpdateId).length == 25) {//CtrCohBojSansEoj + CtrCohEojDouble

                    //    DateStringEnd = new String(CertFileUpdateId).substr(0, 14);
                    //    DateStringStart = new String(CertFileUpdateId).substr(4, 14);
                    //    StationNumber = new String(CertFileUpdateId).substr(20, 2);
                    //    LaneName = new String(CertFileUpdateId).substr(22, 3);
                    //}

                    if (new String(CertFileUpdateId).length == 43) {
                        DateStringEnd = new String(CertFileUpdateId).substr(4, 14);
                        //DateStringStart = new String(CertFileUpdateId).substr(18, 14);
                        DateStringStart = DateStringEnd;
                        StationNumber = new String(CertFileUpdateId).substr(34, 2);
                        LaneName = new String(CertFileUpdateId).substr(36, 3);
                        BillingId = new String(CertFileUpdateId).substr(39, 2);
                        CategoryId = new String(CertFileUpdateId).substr(41, 2);
                    }
                }

                if (FileTypeId == "57")//Vers   
                {
                    if (new String(CertFileUpdateId).length == 16) {
                        DateStringEnd = new String(CertFileUpdateId).substr(4, 8);
                        DateStringStart = new String(CertFileUpdateId).substr(4, 8);
                    }
                }

                if (FileTypeId == "65") {//CeWeb CtrTrxEojDiff
                    DateStringStart = new String(CertFileUpdateId).substr(4, 14);
                    DateStringEnd = new String(CertFileUpdateId).substr(18, 14);
                    StationNumber = new String(CertFileUpdateId).substr(34, 2);
                    LaneName = new String(CertFileUpdateId).substr(36, 3);
                    BillingId = new String(CertFileUpdateId).substr(39, 2);
                    CategoryId = '0';
                }
            }
            else {
                if (Source == '08') {//Ope

                    if (FileTypeId == "81" || FileTypeId == "85")//Receipt, CheckStation, TraficOdStation,
                    {
                        if (new String(CertFileUpdateId).length == 16) {//ReceiptStation
                            DateStringEnd = new String(CertFileUpdateId).substr(4, 8);
                            DateStringStart = DateStringEnd;
                            StationNumber = new String(CertFileUpdateId).substr(14, 2);

                            AddDaysStart = 0;
                            AddDaysEnd = 0;
                        }
                    }

                    if (FileTypeId == "83")//Nr  
                    {
                        if (new String(CertFileUpdateId).length == 16) {//NrSite
                            DateStringEnd = new String(CertFileUpdateId).substr(4, 8);
                            DateStringStart = DateStringEnd;

                            AddDaysStart = 0;
                            AddDaysEnd = 0;
                        }
                    }

                    if (FileTypeId == "82")//Post 
                    {
                        if (new String(CertFileUpdateId).length == 16) {//PostStation


                            DateStringEnd = new String(CertFileUpdateId).substr(4, 8);
                            DateStringStart = DateStringEnd;
                            StationNumber = new String(CertFileUpdateId).substr(14, 2);

                            AddDaysStart = 0;
                            AddDaysEnd = 0;


                        }
                        if (new String(CertFileUpdateId).length == 17) {//NrSite
                            DateStringEnd = new String(CertFileUpdateId).substr(4, 8);
                            DateStringStart = DateStringEnd;

                            AddDaysStart = 0;
                            AddDaysEnd = 1;
                        }
                    }

                    if (FileTypeId == "87")//Vers 
                    {
                        if (new String(CertFileUpdateId).length == 16) {//VersStation
                            DateStringEnd = new String(CertFileUpdateId).substr(4, 8);
                            DateStringStart = DateStringEnd;

                            AddDaysStart = 0;
                            AddDaysEnd = 0;
                        }
                    }

                    if (FileTypeId == "80")//Vers 
                    {
                        if (new String(CertFileUpdateId).length == 16) {//TraficStation
                            DateStringEnd = new String(CertFileUpdateId).substr(4, 8);
                            DateStringStart = DateStringEnd;
                            StationNumber = new String(CertFileUpdateId).substr(14, 2);

                            AddDaysStart = 0;
                            AddDaysEnd = 0;
                        }
                    }

                    if (FileTypeId == "84")  //OpeWeb TrxLane
                    {
                        if (new String(CertFileUpdateId).length == 19) {//CtrCohBojSansEoj
                            DateStringStart = new String(CertFileUpdateId).substr(4, 8);
                            DateStringEnd = DateStringStart;
                            StationNumber = new String(CertFileUpdateId).substr(14, 2);
                            LaneName = new String(CertFileUpdateId).substr(16, 3);
                            BillingId = '0';
                            CategoryId = '0';

                            AddDaysStart = 0;
                            AddDaysEnd = 0;
                        }

                        if (new String(CertFileUpdateId).length == 20) {//CtrTrxExhaustivité
                            DateStringStart = new String(CertFileUpdateId).substr(4, 8);
                            DateStringEnd = DateStringStart;
                            StationNumber = new String(CertFileUpdateId).substr(14, 2);
                            LaneName = new String(CertFileUpdateId).substr(16, 3);
                            BillingId = '0';
                            CategoryId = '0';

                            AddDaysStart = -1;
                            AddDaysEnd = 0;
                        }

                        if (new String(CertFileUpdateId).length == 21) {//CtrTrxEoj
                            DateStringEnd = new String(CertFileUpdateId).substr(4, 8);
                            DateStringStart = new String(CertFileUpdateId).substr(4, 8);
                            StationNumber = new String(CertFileUpdateId).substr(14, 2);
                            LaneName = new String(CertFileUpdateId).substr(16, 3);
                            BillingId = new String(CertFileUpdateId).substr(19, 2);

                            AddDaysStart = -1;
                            AddDaysEnd = 0;
                        }

                        if (new String(CertFileUpdateId).length == 23) {//CtrTrxLaneBillingIdAll
                            DateStringEnd = new String(CertFileUpdateId).substr(4, 8);
                            DateStringStart = new String(CertFileUpdateId).substr(4, 8);
                            StationNumber = new String(CertFileUpdateId).substr(14, 2);
                            LaneName = new String(CertFileUpdateId).substr(16, 3);
                            BillingId = new String(CertFileUpdateId).substr(19, 2);
                            CategoryId = new String(CertFileUpdateId).substr(21, 2);

                            AddDaysStart = 0;
                            AddDaysEnd = 0;
                        }

                        if (new String(CertFileUpdateId).length == 25) {//TrxLaneOpe
                            DateStringStart = new String(CertFileUpdateId).substr(4, 12) + '00';
                            DateStringEnd = new String(CertFileUpdateId).substr(4, 12) + '59';
                            StationNumber = new String(CertFileUpdateId).substr(20, 2);
                            LaneName = new String(CertFileUpdateId).substr(22, 3);

                            AddDaysStart = 0;
                            AddDaysEnd = 0;
                        }

                        if (new String(CertFileUpdateId).length == 43) {
                            DateStringEnd = new String(CertFileUpdateId).substr(4, 14);
                            //DateStringStart = new String(CertFileUpdateId).substr(18, 14);
                            DateStringStart = DateStringEnd;
                            StationNumber = new String(CertFileUpdateId).substr(34, 2);
                            LaneName = new String(CertFileUpdateId).substr(36, 3);
                            BillingId = new String(CertFileUpdateId).substr(39, 2);
                            CategoryId = new String(CertFileUpdateId).substr(41, 2);
                        }
                    }
                }
                else {
                    if (Source == '11') {//Data
                        var TaskId = '05';//Update
                        if (FileTypeId == "U1")//
                        {
                            if (new String(CertFileUpdateId).length == 12) {//Day
                                DateStringEnd = new String(CertFileUpdateId).substr(4, 8);
                                DateStringStart = DateStringEnd;
                            }
                        }
                    }
                    else {
                        if (Source == '04') {
                            if (FileTypeId == "00")// 
                            {
                                if (new String(CertFileUpdateId).length == 12) {
                                    DateStringEnd = new String(CertFileUpdateId).substr(4, 8);
                                    DateStringStart = DateStringEnd;
                                    AddDaysStart = 0;
                                    AddDaysEnd = 0;
                                    FileTypeId = '0';
                                }
                            }
                            if (FileTypeId == "40")//Trafic   
                            {
                                if (new String(CertFileUpdateId).length == 16) {
                                    DateStringEnd = new String(CertFileUpdateId).substr(4, 8);
                                    DateStringStart = new String(CertFileUpdateId).substr(4, 8);
                                }
                            }
                            if (FileTypeId == "41")//Red   
                            {
                                if (new String(CertFileUpdateId).length == 16) {
                                    DateStringEnd = new String(CertFileUpdateId).substr(4, 8);
                                    DateStringStart = new String(CertFileUpdateId).substr(4, 8);
                                }
                            }
                            if (FileTypeId == "43")//Post 
                            {
                                if (new String(CertFileUpdateId).length == 16) {//PostStation
                                    DateStringEnd = new String(CertFileUpdateId).substr(4, 8);
                                    DateStringStart = DateStringEnd;
                                    StationNumber = new String(CertFileUpdateId).substr(14, 2);

                                    AddDaysStart = 0;
                                    AddDaysEnd = 0;
                                }
                                if (new String(CertFileUpdateId).length == 17) {//NrSite
                                    DateStringEnd = new String(CertFileUpdateId).substr(4, 8);
                                    DateStringStart = DateStringEnd;

                                    AddDaysStart = 0;
                                    AddDaysEnd = 1;
                                }
                                if (new String(CertFileUpdateId).length == 19) {
                                    DateStringEnd = new String(CertFileUpdateId).substr(4, 8);
                                    DateStringStart = new String(CertFileUpdateId).substr(4, 8);
                                    StationNumber = new String(CertFileUpdateId).substr(14, 2);
                                    LaneName = new String(CertFileUpdateId).substr(16, 3);
                                    BillingId = '0';
                                    CategoryId = '0';
                                }
                            }
                            if (FileTypeId == "44")  //TrxLane
                            {
                                if (new String(CertFileUpdateId).length == 16)//Station
                                {
                                    DateStringEnd = new String(CertFileUpdateId).substr(4, 8);
                                    DateStringStart = new String(CertFileUpdateId).substr(4, 8);
                                    StationNumber = new String(CertFileUpdateId).substr(14, 2);
                                }
                                if (new String(CertFileUpdateId).length == 19) {//Lane
                                    DateStringStart = new String(CertFileUpdateId).substr(4, 8);
                                    DateStringEnd = DateStringStart;
                                    StationNumber = new String(CertFileUpdateId).substr(14, 2);
                                    LaneName = new String(CertFileUpdateId).substr(16, 3);
                                    AddDaysStart = -1;
                                    AddDaysEnd = 0;
                                }
                                if (new String(CertFileUpdateId).length == 21)//BillingId
                                {
                                    DateStringEnd = new String(CertFileUpdateId).substr(4, 8);
                                    DateStringStart = new String(CertFileUpdateId).substr(4, 8);
                                    StationNumber = new String(CertFileUpdateId).substr(14, 2);

                                    var Select = new String(CertFileUpdateId).substr(16, 1);
                                    if (Select == 'E' || Select == 'S') {
                                        LaneName = new String(CertFileUpdateId).substr(16, 3);
                                        BillingId = new String(CertFileUpdateId).substr(19, 2);
                                        AddDaysStart = -1;
                                        AddDaysEnd = 0;
                                    }
                                    else {
                                        BillingId = new String(CertFileUpdateId).substr(16, 2);
                                        LaneName = new String(CertFileUpdateId).substr(18, 3);
                                    }
                                }
                            }

                            if (FileTypeId == "45")//Vers   
                            {
                                if (new String(CertFileUpdateId).length == 16) {
                                    DateStringEnd = new String(CertFileUpdateId).substr(4, 8);
                                    DateStringStart = new String(CertFileUpdateId).substr(4, 8);
                                }
                            }
                        }
                        else {
                            //Lane
                            if (Source == '03') {
                                if (FileTypeId == "34")// 
                                {
                                    if (new String(CertFileUpdateId).length == 16)//Station
                                    {
                                        DateStringEnd = new String(CertFileUpdateId).substr(4, 8);
                                        DateStringStart = new String(CertFileUpdateId).substr(4, 8);
                                        StationNumber = new String(CertFileUpdateId).substr(14, 2);
                                    }
                                    if (new String(CertFileUpdateId).length == 19) {//Lane
                                        DateStringStart = new String(CertFileUpdateId).substr(4, 8);
                                        DateStringEnd = DateStringStart;
                                        StationNumber = new String(CertFileUpdateId).substr(14, 2);
                                        LaneName = new String(CertFileUpdateId).substr(16, 3);
                                        AddDaysStart = -1;
                                        AddDaysEnd = 0;
                                    }
                                    if (new String(CertFileUpdateId).length == 21)//BillingId
                                    {
                                        DateStringEnd = new String(CertFileUpdateId).substr(4, 8);
                                        DateStringStart = new String(CertFileUpdateId).substr(4, 8);
                                        StationNumber = new String(CertFileUpdateId).substr(14, 2);

                                        var Select = new String(CertFileUpdateId).substr(16, 1);
                                        if (Select == 'E' || Select == 'S') {
                                            LaneName = new String(CertFileUpdateId).substr(16, 3);
                                            BillingId = new String(CertFileUpdateId).substr(19, 2);
                                            AddDaysStart = -1;
                                            AddDaysEnd = 0;
                                        }
                                        else {
                                            BillingId = new String(CertFileUpdateId).substr(16, 2);
                                            LaneName = new String(CertFileUpdateId).substr(18, 3);
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    CertFileAdd(ActionBtnId,
        Icon,
        TaskId,
        Source,
        FileTypeId,
        RegionId,
        LSId,
        AxleId,
        StationNumber,
        LaneName,
        PdvId,
        DateStringStart,
        DateStringEnd,

        HMPlanString,
        IsEveryDay,
        IsEveryHour,
        IsPlanned,
        IsCron,
        BillingId,
        CategoryId,
        AddDaysStart,
        AddDaysEnd);
}

function CertFileUpdateAll(Source, FileTypeId) {

    var ActionBtnId = 'CertFileUpdateAllBtnId';
    var Icon = 'fas fa-redo-alt';

    var TaskId = '01';//Upload

    var SiteId = GetElementValue('SiteId');
    var LSId = '0';
    var BagContainerId = GetElementValue('BagContainerId');
    var StationNumber = GetElementValue('StationNumberId');
    var LaneName = '0';
    var PdvId = '0';
    var DateStringStart = GetDateStringFromDatePicker('DateStartId');
    var DateStringEnd = GetDateStringFromDatePicker('DateEndId');

    var HMPlanString = "2359";
    var IsEveryDay = false;
    var IsPlanned = false;
    var IsCron = false;
    var BillingId = '0';

    HideReport('CertReportId');
    HideReport('CertCtrTrxStation' + 'TableReportId');
    HideReport('CertCtrTrxLane' + 'TableReportId');
    HideReport('CertCtrTrxBillingId' + 'TableReportId');
    HideReport('CertCtrTrxEoj' + 'TableReportId');
    HideReport('CertCtrTrxEojDiff' + 'TableReportId');

    HideReport('CertReceiptStation' + 'TableReportId');
    HideReport('CertNrSite' + 'TableReportId');
    HideReport('CertPostStation' + 'TableReportId');

    HideReport('CertTrxLaneStation' + 'TableReportId');
    HideReport('CertTrxLaneLane' + 'TableReportId');
    HideReport('CertTrxLaneSpecificLane' + 'TableReportId');
    HideReport('CertTrxLaneSpecificBillingId' + 'TableReportId');
    HideReport('CertTrxLaneBillingId' + 'TableReportId');
    HideReport('CertTrxLane' + 'TableReportId');

    HideReport('CertRecoReceipt' + 'TableReportId');
    HideReport('CertRecoPost' + 'TableReportId');
    HideReport('CertRecoTrxLane' + 'TableReportId');

    HideReport('CertFilePlan' + 'TableReportId');

    if (DateStringStart != '' && DateStringEnd != '') {
        CertFileAdd(ActionBtnId,
            Icon,
            TaskId,
            Source,
            FileTypeId,
            SiteId,
            LSId,
            BagContainerId,
            StationNumber,
            LaneName,
            PdvId,
            DateStringStart,
            DateStringEnd,

            HMPlanString,
            IsEveryDay,
            IsPlanned,
            IsTrxLane,
            BillingId);

        ShowReport('CertReportId');
    }
    else {
        ParamMessageErrorDisplay();
    };
}


function CertFilePlayDisplay(CertFilePlanId) {

    var ActionBtnId = 'CertFileAutoPlay' + 'BtnId' + CertFilePlanId;
    var Icon = 'far fa-play-circle';

    $('#' + ActionBtnId).find('span').attr('class', 'fa fa-spinner fa-spin');

    HideReport('CertFile' + 'TableReportId');

    $('#CertFile' + 'TableId').DataTable().destroy();;
    $('#CertFile' + 'TableId').DataTable({
        "initComplete": function (settings, json) {
            ShowReport('CertFile' + 'TableReportId');
            $('#' + ActionBtnId).find('span').attr('class', Icon);
        },
        "ajax": {
            "url": "/Cert/CertFilePlayDisplay",
            "type": "GET",
            "datatype": "json",
            "data": {
                "CertFilePlanId": CertFilePlanId
            }
        },
        "columns": [
            { "data": "SourceName" }, //0
            { "data": "SiteName" }, //1
            { "data": "StationNumber" }, //2
            { "data": "LaneName" }, //3
            { "data": "FileTypeName" }, //4
            { "data": "DhmValue" },//5            

            { "data": "LinesNumber" },//6
            { "data": "CurrentLineNumber" },//7
            { "data": "LinesGap" },//8       

            { "data": "CertFileId" },//9 Percentage
            { "data": "CertFileId" },//10 ProgressBar
            { "data": "DhmCreation" },//11 
            { "data": "CertFileId" },//12 Handle
            { "data": "CertFileId" },//13 Export
            { "data": "CertFileId" }//14 Contact
        ],
        "columnDefs": [
            { "width": "5%", "className": "text-center", "targets": 0 },//Source
            { "width": "5%", "className": "text-center", "targets": 1 },//SiteName
            { "width": "3%", "className": "text-center", "targets": 2 },//StationNumber  
            { "width": "3%", "className": "text-center", "targets": 3 },//LaneName 
            { "width": "8%", "className": "text-left", "targets": 4 },//FileTypeName
            { "width": "8%", "className": "text-center", "targets": 5 },//DhmValue            

            { "width": "5%", "className": "text-right", "targets": 6 },//LinesNumber
            { "width": "5%", "className": "text-right", "targets": 7 },//CurrentLineNumber
            { "width": "5%", "className": "text-right", "targets": 8 },//LinesGap

            { "width": "5%", "className": "text-center", "targets": 9 },//Percentage
            { "width": "8%", "className": "text-center", "targets": 10 },//ProgressBar
            { "width": "8%", "className": "text-center", "targets": 11 },//DhmCreation
            { "width": "3%", "className": "text-center", "targets": 12 },//Handle            
            { "width": "3%", "className": "text-center", "targets": 13 },//Export 
            { "width": "0%", "className": "text-center none", "targets": 14 },//Contact

            { "targets": 3, "render": function (data, type, row) { return CertFileLaneNameGet(data) } },
            { "targets": 5, "render": function (data, type, row) { return GetDateValueFromDataTableDate(data) } },

            { "targets": 6, "render": function (data, type, row) { return DataTableGetElementId('LinesNumberId', row['CertFileId'], data); } },
            { "targets": 7, "render": function (data, type, row) { return DataTableGetElementId('CurrentLineNumberId', row['CertFileId'], data); } },
            { "targets": 8, "render": function (data, type, row) { return DataTableGetElementId('LinesGapId', row['CertFileId'], GetGapNumberFromDataTable(data)); } },

            { "targets": 9, "render": function (data, type, row) { return DataTableProgressPercentGet(row['CertFileId'], row['LinesNumber'], row['CurrentLineNumber']); } },
            { "targets": 10, "render": function (data, type, row) { return DataTableProgressBarGet(row['CertFileId'], row['LinesNumber'], row['CurrentLineNumber']); } },
            { "targets": 11, "render": function (data, type, row) { return GetDhmValueFromDataTableDate(data) } },
            { "targets": 12, "render": function (data, type, row) { return DataTableButtonFileHandleGet(row['CertFileId'], row['IsRunning'], row['IsHandled']); } },
            { "targets": 13, "render": function (data, type, row) { return DataTableGetButton('CertFileCeExport', row['CertFileId'], 'far fa-file-excel', '0048ff'); } },
            { "targets": 14, "render": function (data, type, row) { return DataTableGetContact(row, row['CertFileId']); } },
        ],
        "iDisplayLength": 100,
        "language": {
            "lengthMenu": "Afficher _MENU_ lignes par page",
            "zeroRecords": "Aucun résultat",
            "info": "Page _PAGE_ / _PAGES_ &nbsp;<i>(Nombre de lignes : _TOTAL_)</i>",
            "infoEmpty": "---",
            "infoFiltered": "(Nombre de lignes filtrées : _MAX_ total)",
            "search": "Filtrer ",
            "oPaginate": {
                "sNext": "Suivant",
                "sPrevious": "Précédent"
            }
        },
        "processing": false,
        "responsive": true,
        "bFilter": false,
        "autoWidth": false,
        "searching": false,
        "lengthChange": true,
        "showNEntries": true,
        "bInfo": true,
        "bPaginate": true,
        "ordering": true,
        "footerCallback": function (row, data, start, end, display) {

            var api = this.api(), data;
            var intVal = function (i) {
                return typeof i === 'string' ?
                    i.replace(/[\$,]/g, '') * 1 :
                    typeof i === 'number' ?
                        i : 0;
            };

            //IntTotal1 = api.column(5).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);
            //IntTotal2 = api.column(6).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);
            //IntTotal3 = api.column(7).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);

            //IntTotal4 = api.column(14).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);

            //$(api.column(5).footer()).html(numShortFormat(IntTotal1));
            //$(api.column(6).footer()).html(numShortFormat(IntTotal2));
            //$(api.column(7).footer()).html(numShortFormat(IntTotal3));

            //$(api.column(14).footer()).html(numShortFormat(IntTotal4) + ' Min');

            //if (IntTotal3 !== 0)
            //    $(api.column(7).footer()).html('<span  class="badge badge-danger">' + numShortFormat(IntTotal3) + '</span>');
            //else $(api.column(7).footer()).html('<span  class="badge badge-success">' + numShortFormat(IntTotal3) + '</span>');
        }
    });
}

function CertFilePlay(CertFilePlanId) {
    var ActionBtnId = 'CertFilePlay' + 'BtnId' + CertFilePlanId;
    $('#' + ActionBtnId).find('span').attr('class', 'fa fa-spinner fa-spin');

    var Icon = 'fas fa-check';

    var obj = {};
    obj.CertFilePlanId = CertFilePlanId;

    $.ajax({
        url: "/Cert/CertFileTaskIdGet",
        method: "POST",
        contentType: "application/json; charset=utf-8",
        async: true,
        dataType: "text",
        data: JSON.stringify(obj),
        success: function (data) {
            var TaskId = data;

            //Read
            if (TaskId == '06') {
                var files = $("#FileId").get(0).files;
                var data = new FormData();
                if (files != null) {
                    for (var i = 0; i < files.length; i++) {
                        data.append('FileId', files[i]);
                    };
                }

                data.append('CertFilePlanId', CertFilePlanId);

                $.ajax({
                    url: "/Cert/CertFileReadFilePathGet",
                    method: "POST",
                    contentType: false,
                    processData: false,
                    data: data,
                    success: function (data) {
                        var FilePath = data;
                        var obj = {};
                        obj.CertFilePlanId = CertFilePlanId;

                        $.ajax({
                            url: "/Cert/CertFileFileTypeIdGet",
                            method: "POST",
                            contentType: "application/json; charset=utf-8",
                            async: true,
                            dataType: "text",
                            data: JSON.stringify(obj),
                            success: function (data) {
                                var FileTypeId = data;

                                //TrxLane
                                if (FileTypeId == '44') {
                                    CertFileReadTrxLane(ActionBtnId, Icon, CertFilePlanId, FilePath);
                                }
                                //Post
                                if (FileTypeId == '43') {
                                    CertFileReadPost(ActionBtnId, Icon, CertFilePlanId, FilePath);
                                }
                                //Receipt
                                if (FileTypeId == '41') {
                                    CertFileReadReceipt(ActionBtnId, Icon, CertFilePlanId, FilePath);
                                }
                                //Trafic
                                if (FileTypeId == '40') {
                                    CertFileReadTrafic(ActionBtnId, Icon, CertFilePlanId, FilePath);
                                }
                            }
                        });
                    },
                    error: function (request, status, error) {
                        alert('Le proessus s\'est arrêté');
                    }
                });
            }
            else {
                if (TaskId == '05')//Update
                {
                    //var obj = {};
                    //obj.CertFilePlanId = CertFilePlanId;
                    //$.ajax({
                    //    url: "/Cert/CertFileGapUpdate",
                    //    method: "POST",
                    //    contentType: "application/json; charset=utf-8",
                    //    dataType: "text",
                    //    data: JSON.stringify(obj),
                    //    success: function (data) {
                    //        $('#' + ActionBtnId).find('span').attr('class', Icon);
                    //    },
                    //    error: function (request, status, error) {
                    //        alert('Le proessus s\'est arrêté');
                    //    }
                    //});

                    var obj = {};
                    obj.CertFilePlanId = CertFilePlanId;
                    $.ajax({
                        url: "/Cert/CertFilePlay",
                        method: "POST",
                        contentType: "application/json; charset=utf-8",
                        dataType: "text",
                        data: JSON.stringify(obj),
                        success: function (data) {
                            if (data != '') {
                                $('#' + ActionBtnId).find('span').attr('class', 'fas fa-exclamation-triangle');
                                alert(data);
                            }
                            else {
                                $('#' + ActionBtnId).find('span').attr('class', 'fa fa-spinner fa-spin');
                            }
                        },
                        error: function (request, status, error) {
                            alert('Le proessus s\'est arrêté');
                        }
                    });
                }
                else {
                    var obj = {};
                    obj.CertFilePlanId = CertFilePlanId;
                    $.ajax({
                        url: "/Cert/CertFilePlay",
                        method: "POST",
                        contentType: "application/json; charset=utf-8",
                        dataType: "text",
                        data: JSON.stringify(obj),
                        success: function (data) {
                            if (data != '') {
                                $('#' + ActionBtnId).find('span').attr('class', 'fas fa-exclamation-triangle');
                                alert(data);
                            }
                            //else {
                            //    $('#' + ActionBtnId).find('span').attr('class', 'fa fa-spinner fa-spin');
                            //}
                        },
                        error: function (request, status, error) {
                            alert('Le proessus s\'est arrêté');
                        }
                    });
                }
            }
        }
    });
}


function CertFileRestart(CertFilePlanId) {
    var ActionBtnId = 'CertFileRestart' + 'BtnId' + CertFilePlanId;
    $('#' + ActionBtnId).find('span').attr('class', 'fa fa-spinner fa-spin');

    var obj = {};
    obj.CertFilePlanId = CertFilePlanId;
    $.ajax({
        url: "/Cert/CertFileRestart",
        method: "POST",
        contentType: "application/json; charset=utf-8",
        dataType: "text",
        data: JSON.stringify(obj),
        success: function (data) {
            CertFileAddDisplay(data);
        },
        error: function (request, status, error) {
            alert('Le proessus s\'est arrêté');
        }
    });

}


function CertFilePlanRecover(CertFilePlanId) {
    var ActionBtnId = 'CertFilePlanRecover' + 'BtnId' + CertFilePlanId;
    $('#' + ActionBtnId).find('span').attr('class', 'fa fa-spinner fa-spin');

    var obj = {};
    obj.CertFilePlanId = CertFilePlanId;
    $.ajax({
        url: "/Cert/CertFilePlanRecover",
        method: "POST",
        contentType: "application/json; charset=utf-8",
        dataType: "text",
        data: JSON.stringify(obj),
        success: function (data) {
            CertFileAddDisplay(data);
        },
        error: function (request, status, error) {
            alert('Le proessus s\'est arrêté');
        }
    });
}


function CertFileGenerateDisplay(ActionBtnId, Icon, Source, SiteId, LSId, BagContainerId, StationNumber, LaneName, PdvId, DateStringStart, DateStringEnd) {
    $('#' + ActionBtnId).find('span').attr('class', 'fa fa-spinner fa-spin');

    var Pattern = 'CertFileGenerate';
    var PatternTableId = Pattern + 'TableId';
    var PatternTableReportId = Pattern + 'TableReportId';

    HideReport(PatternTableReportId);
    HideReport('CertFilePlan' + 'TableReportId');

    $('#' + PatternTableId).DataTable().destroy();;
    $('#' + PatternTableId).DataTable({
        "initComplete": function (settings, json) {
            ShowReport(PatternTableReportId);
            $('#' + ActionBtnId).find('span').attr('class', Icon);
        },
        "ajax": {
            "url": "/Cert/CertFileGenerateDisplay",
            "type": "GET",
            "datatype": "json",
            "data": {
                "Source": Source,
                "SiteId": SiteId,
                "LSId": LSId,
                "BagContainerId": BagContainerId,
                "StationNumber": StationNumber,
                "LaneName": LaneName,
                "PdvId": PdvId,
                "DateStringStart": DateStringStart,
                "DateStringEnd": DateStringEnd
            }
        },
        "columns": [
            { "data": "SourceId" }, //0
            { "data": "SiteId" }, //1
            { "data": "LSId" }, //2
            { "data": "StationNumber" }, //3

            { "data": "LaneName" },//4
            { "data": "PdvId" },//5
            { "data": "DhmValue" },//6                  
            { "data": "FileName" },//7
        ],
        "columnDefs": [
            { "width": "3%", "className": "text-center", "targets": 0 },
            { "width": "3%", "className": "text-center", "targets": 1 },
            { "width": "3%", "className": "text-center", "targets": 2 },
            { "width": "3%", "className": "text-center", "targets": 3 },

            { "width": "3%", "className": "text-center", "targets": 4 },
            { "width": "3%", "className": "text-center", "targets": 5 },
            { "width": "3%", "className": "text-center", "targets": 6 },
            { "width": "3%", "className": "text-center", "targets": 7 },

            { "targets": 6, "render": function (data, type, row) { return GetDateValueFromDataTableDate(data); } },
        ],
        "iDisplayLength": 100,
        "language": {
            "lengthMenu": "Afficher _MENU_ lignes par page",
            "zeroRecords": "Aucun résultat",
            "info": "Page _PAGE_ / _PAGES_ &nbsp;<i>(Nombre de lignes : _TOTAL_)</i>",
            "infoEmpty": "---",
            "infoFiltered": "(Nombre de lignes filtrées : _MAX_ total)",
            "search": "Filtrer ",
            "oPaginate": {
                "sNext": "Suivant",
                "sPrevious": "Précédent"
            }
        },
        //"processing": true,
        "responsive": true,
        "bFilter": false,
        "autoWidth": false,
        "searching": false,
        "lengthChange": false,
        "showNEntries": true,
        "bInfo": false,
        "bPaginate": false,
        "bFilter": false,
        //"footerCallback": function (row, data, start, end, display) {

        //    var api = this.api(), data;
        //    var intVal = function (i) {
        //        return typeof i === 'string' ?
        //            i.replace(/[\$,]/g, '') * 1 :
        //            typeof i === 'number' ?
        //                i : 0;
        //    };

        //    IntTotal1 = api.column(5).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);
        //    IntTotal2 = api.column(6).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);
        //    IntTotal3 = api.column(7).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);

        //    IntTotal4 = api.column(14).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);

        //    $(api.column(5).footer()).html(numShortFormat(IntTotal1));
        //    $(api.column(6).footer()).html(numShortFormat(IntTotal2));
        //    $(api.column(7).footer()).html(numShortFormat(IntTotal3));

        //    $(api.column(14).footer()).html(numShortFormat(IntTotal4) + ' Min');

        //    if (IntTotal3 !== 0)
        //        $(api.column(7).footer()).html('<span  class="badge badge-danger">' + numShortFormat(IntTotal3) + '</span>');
        //    else $(api.column(7).footer()).html('<span  class="badge badge-success">' + numShortFormat(IntTotal3) + '</span>');
        //}
    });
}

function CertFilePlanPlay(CertFilePlanId) {

    var ActionBtnId = 'CertFilePlanPlay' + 'BtnId' + CertFilePlanId;
    var Icon = 'fas fa-upload';

    $('#' + ActionBtnId).find('span').attr('class', 'fa fa-spinner fa-spin');
    var obj = {};
    obj.CertFilePlanId = CertFilePlanId;
    $.ajax({
        url: "/Cert/CertFilePlanPlay",
        method: "POST",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: JSON.stringify(obj),
        success: function (data) {
            //$('#' + ActionBtnId).find('span').attr('class', Icon);                  
            //CertFileAutoDisplay(); 

            $('#StatusId').text('En cours');
        },
        error: function (request, status, error) {
            $('#' + ActionBtnId).find('span').attr('class', Icon);
            alert("Erreur");
        }
    });
}

function CertFilePlanAllPlay() {

    var ActionBtnId = 'ParamActionBtnId1';
    var Icon = 'far fa-play-circle btn-icon-m-cl gc-c1-cl';

    $('#' + ActionBtnId).find('span').attr('class', 'fa fa-spinner fa-spin btn-icon-m-cl gc-c1-cl');
    $.ajax({
        url: "/Cert/CertFilePlanAllPlay",
        method: "POST",
        contentType: "application/json; charset=utf-8",
        //dataType: "json",
        //data: JSON.stringify(obj),
        success: function (data) {
            $('#' + ActionBtnId).find('span').attr('class', Icon);
        },
        error: function (request, status, error) {
            $('#' + ActionBtnId).find('span').attr('class', Icon);
            alert("Erreur");
        }
    });
}

function CertFilePlanCronPlay() {
    $.ajax({
        url: "/Cert/CertFilePlanAllPlay",
        method: "POST",
        contentType: "application/json; charset=utf-8",
        //dataType: "json",
        //data: JSON.stringify(obj),
        success: function (data) {
            /*$('#' + ActionBtnId).find('span').attr('class', Icon);*/
        },
        error: function (request, status, error) {
            //$('#' + ActionBtnId).find('span').attr('class', Icon);
            //alert("Erreur");
        }
    });
}

function CertFilePlanUploadDisplay(CertFilePlanId) {

    var ActionBtnId = new String('CertFilePlanUploadBtnId' + CertFilePlanId);

    var DateStringStart = new String(CertNrDaysHandledId).substr(0, 8);
    var DateStringEnd = new String(CertNrDaysHandledId).substr(8, 8);
    var SiteId = new String(CertNrDaysHandledId).substr(16, 2);

    CertFileAutoGet(ActionBtnId,
        Source,
        FileTypeId,
        SiteId,
        LSId,
        BagContainerId,
        StationNumber,
        LaneName,
        PdvId,
        DateStringStart,
        DateStringEnd,
        IsRunning,
        Icon);
}

function CertFileNrAutoDisplay() {

    var ActionBtnId = 'ParamActionBtnId';
    var SiteId = GetElementValue('SiteId');
    var BagContainerId = GetElementValue('BagContainerId');
    var StationNumber = GetElementValue('StationNumberId');
    var DateStringStart = GetDateStringFromDatePicker('DateStartId');
    var DateStringEnd = GetDateStringFromDatePicker('DateEndId');
    var Source = GetElementValue('SourceId');
    var FileTypeId = GetElementValue('FileTypeId');
    var IsRunning = new Boolean($("#IsRunningId").is(":checked"));
    var Icon = 'fas fa-eye';

    if (SiteId != null && SiteId != '' &&
        BagContainerId != null && BagContainerId != '' &&
        StationNumber != null && StationNumber != '' &&
        DateStringStart != null && DateStringStart != '' &&
        DateStringEnd != null && DateStringEnd != '') {
        CertFileNrGet(ActionBtnId, Source, SiteId, BagContainerId, StationNumber, FileTypeId, IsRunning, DateStringStart, DateStringEnd, Icon)
    }
    else {
        ParamMessageErrorDisplay();
    };
}

function CertFileBackup() {

    var ActionBtnId = 'ParamActionBtnId';
    var DateStringStart = GetDateStringFromDatePicker('DateStartId');
    var DateStringEnd = GetDateStringFromDatePicker('DateEndId');
    var Icon = new String('far fa-save');

    if (DateStringStart != null && DateStringStart != "" &&
        DateStringEnd != null && DateStringEnd != "") {

        $('#' + ActionBtnId).find('span').attr('class', 'fa fa-spinner fa-spin');

        var obj = {};
        obj.DateStringStart = DateStringStart;
        obj.DateStringEnd = DateStringEnd;

        $.ajax({
            url: "/Cert/CertFileBackup",
            method: "POST",
            data: JSON.stringify(obj),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {
                $('#' + ActionBtnId).find('span').attr('class', Icon);
            },
            error: function (request, status, error) {
                $('#' + ActionBtnId).find('span').attr('class', Icon);
                alert("Error : " + error);
            }
        });

    }
    else {
        ParamMessageErrorDisplay();
    };


}

function CertFileBackupDisplay() {

    var ActionBtnId = 'ParamActionBtnId';
    var SiteId = GetElementValue('SiteId');
    var BagContainerId = GetElementValue('BagContainerId');
    var StationNumber = GetElementValue('StationNumberId');
    var DateStringStart = GetDateStringFromDatePicker('DateStartId');
    var DateStringEnd = GetDateStringFromDatePicker('DateEndId');
    var Source = GetElementValue('SourceId');
    var FileTypeId = GetElementValue('FileTypeId');
    var IsRunning = new Boolean($("#IsRunningId").is(":checked"));
    var Icon = 'fas fa-eye';

    if (SiteId != null && SiteId != '' &&
        BagContainerId != null && BagContainerId != '' &&
        StationNumber != null && StationNumber != '' &&
        DateStringStart != null && DateStringStart != '' &&
        DateStringEnd != null && DateStringEnd != '') {

        if (FileTypeId == '71') {
            HideReport('CertFile' + 'TableReportId');
            CertFileNrGet(ActionBtnId, Source, SiteId, BagContainerId, StationNumber, FileTypeId, IsRunning, DateStringStart, DateStringEnd, Icon);
        }
        if (FileTypeId != '71' && FileTypeId != '0') {
            HideReport('CertFileNr' + 'TableReportId');
            CertFileGet(ActionBtnId, Source, SiteId, BagContainerId, StationNumber, FileTypeId, IsRunning, DateStringStart, DateStringEnd, Icon);
        }
        if (FileTypeId == '0') {
            CertFileGet(ActionBtnId, Source, SiteId, BagContainerId, StationNumber, FileTypeId, IsRunning, DateStringStart, DateStringEnd, Icon);
            CertFileNrGet(ActionBtnId, Source, SiteId, BagContainerId, StationNumber, FileTypeId, IsRunning, DateStringStart, DateStringEnd, Icon);
        }
    }
    else {
        ParamMessageErrorDisplay();
    };
}

function CertFilePurge() {

    var ActionBtnId = 'ParamActionBtnId';
    var Icon = 'far fa-trash-alt';
    $('#' + ActionBtnId).find('span').attr('class', 'fa fa-spinner fa-spin');
    $.ajax({
        url: "/Cert/CertFilePurge",
        method: "POST",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            $('#' + ActionBtnId).find('span').attr('class', Icon);
        },
        error: function (request, status, error) {
            $('#' + ActionBtnId).find('span').attr('class', Icon);
            alert("Error : " + error);
        }
    });

}

function CertFilePurgeDisplay() {

    var ActionBtnId = 'ParamActionBtnId';
    var SiteId = GetElementValue('SiteId');
    var BagContainerId = GetElementValue('BagContainerId');
    var StationNumber = GetElementValue('StationNumberId');
    var DateStringStart = GetDateStringFromDatePicker('DateStartId');
    var DateStringEnd = GetDateStringFromDatePicker('DateEndId');
    var Source = GetElementValue('SourceId');
    var FileTypeId = GetElementValue('FileTypeId');
    var IsRunning = new Boolean($("#IsRunningId").is(":checked"));
    var Icon = 'fas fa-eye';

    if (SiteId != null && SiteId != '' &&
        BagContainerId != null && BagContainerId != '' &&
        StationNumber != null && StationNumber != '' &&
        DateStringStart != null && DateStringStart != '' &&
        DateStringEnd != null && DateStringEnd != '') {

        if (FileTypeId == '71') {
            HideReport('CertFile' + 'TableReportId');
            CertFileNrGet(ActionBtnId, Source, SiteId, BagContainerId, StationNumber, FileTypeId, IsRunning, DateStringStart, DateStringEnd, Icon);
        }
        if (FileTypeId != '71' && FileTypeId != '0') {
            HideReport('CertFileNr' + 'TableReportId');
            CertFileGet(ActionBtnId, Source, SiteId, BagContainerId, StationNumber, FileTypeId, IsRunning, DateStringStart, DateStringEnd, Icon);
        }
        if (FileTypeId == '0') {
            CertFileGet(ActionBtnId, Source, SiteId, BagContainerId, StationNumber, FileTypeId, IsRunning, DateStringStart, DateStringEnd, Icon);
            CertFileNrGet(ActionBtnId, Source, SiteId, BagContainerId, StationNumber, FileTypeId, IsRunning, DateStringStart, DateStringEnd, Icon);
        }
    }
    else {
        ParamMessageErrorDisplay();
    };
}

function CertFilePdvAutoUpload() {

    var ActionBtnId = 'ParamActionBtnId1';
    var SiteId = GetElementValue('SiteId');
    var BagContainerId = GetElementValue('BagContainerId');
    var StationNumber = GetElementValue('StationNumberId');
    var PdvId = GetElementValue('PdvId');
    var DateStringStart = GetDateStringFromDatePicker('DateStartId');
    var DateStringEnd = GetDateStringFromDatePicker('DateEndId');
    var Source = GetElementValue('SourceId');
    var FileTypeId = GetElementValue('FileTypeId');
    var IsRunning = new Boolean($("#IsRunningId").is(":checked"));
    var Icon = 'fas fa-upload';

    if (SiteId != null && SiteId != '' &&
        BagContainerId != null && BagContainerId != '' &&
        StationNumber != null && StationNumber != '' &&
        PdvId != null && PdvId != '' &&
        DateStringStart != null && DateStringStart != '' &&
        DateStringEnd != null && DateStringEnd != '' &&
        Source != null &&
        FileTypeId != null &&
        IsRunning != null
    ) {

        $('#' + ActionBtnId).find('span').attr('class', 'fa fa-spinner fa-spin');
        var obj = {};
        obj.SiteId = SiteId;
        obj.BagContainerId = BagContainerId;
        obj.StationNumber = StationNumber;
        obj.PdvId = PdvId;
        obj.Source = Source;
        obj.FileTypeId = FileTypeId;
        obj.IsRunning = IsRunning;
        obj.DateStringStart = DateStringStart;
        obj.DateStringEnd = DateStringEnd;
        $.ajax({
            url: "/Cert/CertFilePdvAutoUpload",
            method: "POST",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            data: JSON.stringify(obj),
            success: function (data) {
                $('#' + ActionBtnId).find('span').attr('class', Icon);
                CertFilePdvAutoDisplay();
            },
            error: function (request, status, error) {
                $('#' + ActionBtnId).find('span').attr('class', Icon);
                alert("Merci de vérifier que le système central est accessible");
            }
        });

    }
    else {
        ParamMessageErrorDisplay();
    };
}

function CertFileGenerate() {

    var ActionBtnId = 'ParamActionBtnId';
    var Source = GetElementValue('SourceId');
    var DateStringStart = GetDateStringFromDatePicker('DateStartId');

    var Icon = 'fas fa-neuter';

    if (Source != null && Source != '' &&
        DateStringStart != null) {

        $('#' + ActionBtnId).find('span').attr('class', 'fa fa-spinner fa-spin');
        var obj = {};
        obj.Source = Source;
        obj.DateStringStart = DateStringStart;
        $.ajax({
            url: "/Cert/CertFileGenerate",
            method: "POST",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            data: JSON.stringify(obj),
            success: function (data) {
                $('#' + ActionBtnId).find('span').attr('class', Icon);
                //CertFileAutoDisplay();
            },
            error: function (request, status, error) {
                $('#' + ActionBtnId).find('span').attr('class', Icon);
                //alert("Problème de connexion");
            }
        });

    }
    else {
        ParamMessageErrorDisplay();
    };
}



function CertFileGet(ActionBtnId, Source, FileTypeId, SiteId, LSId, BagContainerId, StationNumber, LaneName, PdvId, DateStringStart, DateStringEnd, Icon) {
    $('#' + ActionBtnId).find('span').attr('class', 'fa fa-spinner fa-spin');

    HideReport('CertFile' + 'TableReportId');

    $('#CertFile' + 'TableId').DataTable().destroy();;
    $('#CertFile' + 'TableId').DataTable({
        "initComplete": function (settings, json) {
            ShowReport('CertFile' + 'TableReportId');
            $('#' + ActionBtnId).find('span').attr('class', Icon);
        },
        "ajax": {
            "url": "/Cert/CertFileGet",
            "type": "GET",
            "datatype": "json",
            "data": {
                "Source": Source,
                "FileTypeId": FileTypeId,
                "SiteId": SiteId,
                "LSId": LSId,
                "BagContainerId": BagContainerId,
                "StationNumber": StationNumber,
                "LaneName": LaneName,
                "PdvId": PdvId,
                "DateStringStart": DateStringStart,
                "DateStringEnd": DateStringEnd
            }
        },
        "columns": [
            { "data": "SourceName" }, //0
            { "data": "SiteName" }, //1
            { "data": "StationNumber" }, //2
            { "data": "LaneName" }, //3
            { "data": "FileTypeName" }, //4
            { "data": "DhmValue" },//5            

            { "data": "LinesNumber" },//6
            { "data": "CurrentLineNumber" },//7
            { "data": "LinesGap" },//8       



            { "data": "CertFileId" },//9 Percentage
            { "data": "CertFileId" },//10 ProgressBar
            { "data": "DhmCreation" },//11 
            { "data": "CertFileId" },//12 Handle
            { "data": "CertFileId" },//13 Export
            { "data": "CertFileId" }//14 Contact
        ],
        "columnDefs": [
            { "width": "5%", "className": "text-center", "targets": 0 },//Source
            { "width": "5%", "className": "text-center", "targets": 1 },//SiteName
            { "width": "3%", "className": "text-center", "targets": 2 },//StationNumber  
            { "width": "3%", "className": "text-center", "targets": 3 },//LaneName 
            { "width": "8%", "className": "text-left", "targets": 4 },//FileTypeName
            { "width": "8%", "className": "text-center", "targets": 5 },//DhmValue            

            { "width": "5%", "className": "text-right", "targets": 6 },//LinesNumber
            { "width": "5%", "className": "text-right", "targets": 7 },//CurrentLineNumber
            { "width": "5%", "className": "text-right", "targets": 8 },//LinesGap

            { "width": "5%", "className": "text-center", "targets": 9 },//Percentage
            { "width": "8%", "className": "text-center", "targets": 10 },//ProgressBar
            { "width": "8%", "className": "text-center", "targets": 11 },//DhmCreation
            { "width": "3%", "className": "text-center", "targets": 12 },//Handle            
            { "width": "3%", "className": "text-center", "targets": 13 },//Export 
            { "width": "0%", "className": "text-center none", "targets": 14 },//Contact

            { "targets": 3, "render": function (data, type, row) { return CertFileLaneNameGet(data) } },
            { "targets": 5, "render": function (data, type, row) { return GetDateValueFromDataTableDate(data) } },

            { "targets": 6, "render": function (data, type, row) { return DataTableGetElementId('LinesNumberId', row['CertFileId'], data); } },
            { "targets": 7, "render": function (data, type, row) { return DataTableGetElementId('CurrentLineNumberId', row['CertFileId'], data); } },
            { "targets": 8, "render": function (data, type, row) { return DataTableGetElementId('LinesGapId', row['CertFileId'], GetGapNumberFromDataTable(data)); } },

            { "targets": 9, "render": function (data, type, row) { return DataTableProgressPercentGet(row['CertFileId'], row['LinesNumber'], row['CurrentLineNumber']); } },
            { "targets": 10, "render": function (data, type, row) { return DataTableProgressBarGet(row['CertFileId'], row['LinesNumber'], row['CurrentLineNumber']); } },
            { "targets": 11, "render": function (data, type, row) { return GetDhmValueFromDataTableDate(data) } },
            { "targets": 12, "render": function (data, type, row) { return DataTableButtonFileHandleGet(row['CertFileId'], row['IsRunning'], row['IsHandled']); } },
            { "targets": 13, "render": function (data, type, row) { return DataTableGetButton('CertFileCeExport', row['CertFileId'], 'far fa-file-excel', '0048ff'); } },
            { "targets": 14, "render": function (data, type, row) { return DataTableGetContact(row, row['CertFileId']); } },
        ],
        "iDisplayLength": 100,
        "language": {
            "lengthMenu": "Afficher _MENU_ lignes par page",
            "zeroRecords": "Aucun résultat",
            "info": "Page _PAGE_ / _PAGES_ &nbsp;<i>(Nombre de lignes : _TOTAL_)</i>",
            "infoEmpty": "---",
            "infoFiltered": "(Nombre de lignes filtrées : _MAX_ total)",
            "search": "Filtrer ",
            "oPaginate": {
                "sNext": "Suivant",
                "sPrevious": "Précédent"
            }
        },
        "processing": false,
        "responsive": true,
        "bFilter": false,
        "autoWidth": false,
        "searching": false,
        "lengthChange": true,
        "showNEntries": true,
        "bInfo": true,
        "bPaginate": true,
        "ordering": true,
        "footerCallback": function (row, data, start, end, display) {

            var api = this.api(), data;
            var intVal = function (i) {
                return typeof i === 'string' ?
                    i.replace(/[\$,]/g, '') * 1 :
                    typeof i === 'number' ?
                        i : 0;
            };

            //IntTotal1 = api.column(5).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);
            //IntTotal2 = api.column(6).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);
            //IntTotal3 = api.column(7).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);

            //IntTotal4 = api.column(14).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);

            //$(api.column(5).footer()).html(numShortFormat(IntTotal1));
            //$(api.column(6).footer()).html(numShortFormat(IntTotal2));
            //$(api.column(7).footer()).html(numShortFormat(IntTotal3));

            //$(api.column(14).footer()).html(numShortFormat(IntTotal4) + ' Min');

            //if (IntTotal3 !== 0)
            //    $(api.column(7).footer()).html('<span  class="badge badge-danger">' + numShortFormat(IntTotal3) + '</span>');
            //else $(api.column(7).footer()).html('<span  class="badge badge-success">' + numShortFormat(IntTotal3) + '</span>');
        }
    });
}


function CertFileNrGet(ActionBtnId, Source, FileTypeId, SiteId, DateStringStart, DateStringEnd, Icon) {
    $('#' + ActionBtnId).find('span').attr('class', 'fa fa-spinner fa-spin');

    HideReport('CertFileNr' + 'TableReportId');

    $('#CertFileNr' + 'TableId').DataTable().destroy();;
    $('#CertFileNr' + 'TableId').DataTable({
        "initComplete": function (settings, json) {
            ShowReport('CertFileNr' + 'TableReportId');
            $('#' + ActionBtnId).find('span').attr('class', Icon);
        },
        "ajax": {
            "url": "/Cert/CertFileNrGet",
            "type": "GET",
            "datatype": "json",
            "data": {
                "Source": Source,
                "FileTypeId": FileTypeId,
                "SiteId": SiteId,
                "DateStringStart": DateStringStart,
                "DateStringEnd": DateStringEnd
            }
        },
        "columns": [
            { "data": "SourceName" }, //0
            { "data": "SiteName" }, //1
            { "data": "StationNumber" }, //2
            { "data": "LaneName" }, //3
            { "data": "FileTypeName" }, //4
            { "data": "DhmValue" },//5            

            { "data": "LinesNumber" },//6
            { "data": "CurrentLineNumber" },//7
            { "data": "LinesGap" },//8       



            { "data": "CertFileId" },//9 Percentage
            { "data": "CertFileId" },//10 ProgressBar
            { "data": "DhmCreation" },//11 
            { "data": "CertFileId" },//12 Handle
            { "data": "CertFileId" },//13 Export
            { "data": "CertFileId" }//14 Contact
        ],
        "columnDefs": [
            { "width": "5%", "className": "text-center", "targets": 0 },//Source
            { "width": "5%", "className": "text-center", "targets": 1 },//SiteName
            { "width": "3%", "className": "text-center none", "targets": 2 },//StationNumber  
            { "width": "3%", "className": "text-center none", "targets": 3 },//LaneName 
            { "width": "0%", "className": "text-left", "targets": 4 },//FileTypeName
            { "width": "8%", "className": "text-center", "targets": 5 },//DhmValue            

            { "width": "5%", "className": "text-right", "targets": 6 },//LinesNumber
            { "width": "5%", "className": "text-right", "targets": 7 },//CurrentLineNumber
            { "width": "5%", "className": "text-right", "targets": 8 },//LinesGap

            { "width": "5%", "className": "text-center", "targets": 9 },//Percentage
            { "width": "8%", "className": "text-center", "targets": 10 },//ProgressBar
            { "width": "8%", "className": "text-center none", "targets": 11 },//DhmCreation
            { "width": "3%", "className": "text-center", "targets": 12 },//Handle            
            { "width": "3%", "className": "text-center", "targets": 13 },//Export 
            { "width": "0%", "className": "text-center none", "targets": 14 },//Contact

            { "targets": 3, "render": function (data, type, row) { return CertFileLaneNameGet(data) } },
            { "targets": 5, "render": function (data, type, row) { return GetDateValueFromDataTableDate(data) } },

            { "targets": 6, "render": function (data, type, row) { return DataTableGetElementId('LinesNumberId', row['CertFileId'], data); } },
            { "targets": 7, "render": function (data, type, row) { return DataTableGetElementId('CurrentLineNumberId', row['CertFileId'], data); } },
            { "targets": 8, "render": function (data, type, row) { return DataTableGetElementId('LinesGapId', row['CertFileId'], GetGapNumberFromDataTable(data)); } },

            { "targets": 9, "render": function (data, type, row) { return DataTableProgressPercentGet(row['CertFileId'], row['LinesNumber'], row['CurrentLineNumber']); } },
            { "targets": 10, "render": function (data, type, row) { return DataTableProgressBarGet(row['CertFileId'], row['LinesNumber'], row['CurrentLineNumber']); } },
            { "targets": 11, "render": function (data, type, row) { return GetDhmValueFromDataTableDate(data) } },
            { "targets": 12, "render": function (data, type, row) { return DataTableButtonFileHandleGet(row['CertFileId'], row['IsRunning'], row['IsHandled']); } },
            { "targets": 13, "render": function (data, type, row) { return DataTableGetButton('CertFileCeExport', row['CertFileId'], 'far fa-file-excel', '0048ff'); } },
            { "targets": 14, "render": function (data, type, row) { return DataTableGetContact(row, row['CertFileId']); } },
        ],
        "iDisplayLength": 50,
        "language": {
            "lengthMenu": "Afficher _MENU_ lignes par page",
            "zeroRecords": "Aucun résultat",
            "info": "Page _PAGE_ / _PAGES_ &nbsp;<i>(Nombre de lignes : _TOTAL_)</i>",
            "infoEmpty": "---",
            "infoFiltered": "(Nombre de lignes filtrées : _MAX_ total)",
            "search": "Filtrer ",
            "oPaginate": {
                "sNext": "Suivant",
                "sPrevious": "Précédent"
            }
        },
        "processing": false,
        "responsive": true,
        "bFilter": false,
        "autoWidth": false,
        "searching": false,
        "lengthChange": true,
        "showNEntries": true,
        "bInfo": true,
        "bPaginate": true,
        "ordering": true,
        "footerCallback": function (row, data, start, end, display) {

            var api = this.api(), data;
            var intVal = function (i) {
                return typeof i === 'string' ?
                    i.replace(/[\$,]/g, '') * 1 :
                    typeof i === 'number' ?
                        i : 0;
            };

            //IntTotal1 = api.column(5).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);
            //IntTotal2 = api.column(6).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);
            //IntTotal3 = api.column(7).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);

            //IntTotal4 = api.column(14).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);

            //$(api.column(5).footer()).html(numShortFormat(IntTotal1));
            //$(api.column(6).footer()).html(numShortFormat(IntTotal2));
            //$(api.column(7).footer()).html(numShortFormat(IntTotal3));

            //$(api.column(14).footer()).html(numShortFormat(IntTotal4) + ' Min');

            //if (IntTotal3 !== 0)
            //    $(api.column(7).footer()).html('<span  class="badge badge-danger">' + numShortFormat(IntTotal3) + '</span>');
            //else $(api.column(7).footer()).html('<span  class="badge badge-success">' + numShortFormat(IntTotal3) + '</span>');
        }
    });
}

function CertFileUploadDisplay() {
    var ActionBtnId = 'ParamActionBtnId';
    var Icon = 'fas fa-eye';

    $('#' + ActionBtnId).find('span').attr('class', 'fa fa-spinner fa-spin');

    HideReport('CertFilePlan' + 'TableReportId');

    $('#CertFilePlan' + 'TableId').DataTable().destroy();;
    $('#CertFilePlan' + 'TableId').DataTable({
        "initComplete": function (settings, json) {
            ShowReport('CertFilePlan' + 'TableReportId');
            $('#' + ActionBtnId).find('span').attr('class', Icon);
        },
        "ajax": {
            "url": "/Cert/CertFileUploadDisplay",
            "type": "GET",
            "datatype": "json"
        },
        "columns": [
            { "data": "TaskName" },//0
            { "data": "SourceName" },//1
            { "data": "FileTypeName" },//2
            { "data": "SiteId" },//3
            { "data": "LSId" },//4
            { "data": "BagContainerId" },//5
            { "data": "StationNumber" },//6
            { "data": "LaneName" },//7
            { "data": "PdvId" },//8
            { "data": "BillingId" },//9
            { "data": "CategoryId" },//10

            { "data": "DhmValueStart" },//11    
            { "data": "DhmValueEnd" },//12
            { "data": "DhmPlan" },//13
            { "data": "Periodicity" },//14

            { "data": "Statut" },//15
            { "data": "CertFilePlanId" },//16

            { "data": "CertFileId" },//17
            { "data": "CertFileId" },//18
            { "data": "CertFileId" },//19
        ],
        "columnDefs": [
            { "width": "5%", "className": "text-center", "targets": 0 },//TaskName
            { "width": "5%", "className": "text-center", "targets": 1 },//SourceName
            { "width": "5%", "className": "text-center", "targets": 2 },//FileTypeId
            { "width": "3%", "className": "text-center", "targets": 3 },//SiteId  
            { "width": "3%", "className": "text-center", "targets": 4 },//LSId
            { "width": "3%", "className": "text-center", "targets": 5 },//BagContainerId
            { "width": "3%", "className": "text-center", "targets": 6 },//StationNumber          
            { "width": "3%", "className": "text-center", "targets": 7 },//LaneName  
            { "width": "3%", "className": "text-center none", "targets": 8 },//PdvName  
            { "width": "3%", "className": "text-center", "targets": 9 },//BillingId
            { "width": "3%", "className": "text-center", "targets": 10 },//CategoryId

            { "width": "3%", "className": "text-center", "targets": 11 },//DhmValueStart  
            { "width": "3%", "className": "text-center", "targets": 12 },//DhmValueEnd  
            { "width": "3%", "className": "text-center", "targets": 13 },//DhmPlan 

            { "width": "3%", "className": "text-center none", "targets": 14 },//Periodicity

            { "width": "0%", "className": "text-center none", "targets": 15 },//Statut   
            { "width": "3%", "className": "text-center", "targets": 16 },//CertFilePlay  

            { "width": "3%", "className": "text-center", "targets": 17 },//ProgressBar
            { "width": "3%", "className": "text-center", "targets": 18 },//LinesNumberId
            { "width": "3%", "className": "text-center", "targets": 19 },//ProgressPercent 

            { "targets": 2, "render": function (data, type, row) { return DataTableGetElementId('FileTypeId', row['CertFilePlanId'], data); } },
            { "targets": 3, "render": function (data, type, row) { return DataTableGetElementId('SiteId', row['CertFilePlanId'], data); } },
            { "targets": 4, "render": function (data, type, row) { return DataTableGetElementId('LSId', row['CertFilePlanId'], data); } },
            { "targets": 5, "render": function (data, type, row) { return DataTableGetElementId('BagContainerId', row['CertFilePlanId'], data); } },
            { "targets": 6, "render": function (data, type, row) { return DataTableGetElementId('StationNumber', row['CertFilePlanId'], data); } },
            { "targets": 7, "render": function (data, type, row) { return DataTableGetElementId('LaneName', row['CertFilePlanId'], data); } },
            { "targets": 8, "render": function (data, type, row) { return DataTableGetElementId('PdvName', row['CertFilePlanId'], data); } },
            { "targets": 9, "render": function (data, type, row) { return DataTableGetElementId('BillingId', row['CertFilePlanId'], data); } },
            { "targets": 10, "render": function (data, type, row) { return DataTableGetElementId('CategoryId', row['CertFilePlanId'], data); } },

            { "targets": 11, "render": function (data, type, row) { return DataTableGetElementId('DhmValueStartId', row['CertFilePlanId'], GetDhmValueNullableFromDataTableDate(data)); } },
            { "targets": 12, "render": function (data, type, row) { return DataTableGetElementId('DhmValueEndId', row['CertFilePlanId'], GetDhmValueNullableFromDataTableDate(data)); } },
            { "targets": 13, "render": function (data, type, row) { return GetHmFromDataTableDate(data) } },

            { "targets": 15, "render": function (data, type, row) { return DataTableGetElementId('StatusId', row['CertFilePlanId'], data); } },
            { "targets": 16, "render": function (data, type, row) { return DataTableGetButton('CertFilePlay', row['CertFilePlanId'], 'far fa-play-circle', '0048ff'); } },

            { "targets": 17, "render": function (data, type, row) { return DataTableProgressBarGet(row['CertFilePlanId'], 0, 0); } },
            { "targets": 18, "render": function (data, type, row) { return DataTableGetElementId('LinesNumberId', row['CertFilePlanId'], 1); } },
            { "targets": 19, "render": function (data, type, row) { return DataTableProgressPercentGet(row['CertFilePlanId'], 1, 0); } },
        ],
        "iDisplayLength": 50,
        "language": {
            "lengthMenu": "Afficher _MENU_ lignes par page",
            "zeroRecords": "Aucun résultat",
            "info": "Page _PAGE_ / _PAGES_ &nbsp;<i>(Nombre de lignes : _TOTAL_)</i>",
            "infoEmpty": "---",
            "infoFiltered": "(Nombre de lignes filtrées : _MAX_ total)",
            "search": "Filtrer ",
            "oPaginate": {
                "sNext": "Suivant",
                "sPrevious": "Précédent"
            }
        },
        "processing": false,
        "responsive": true,
        "bFilter": false,
        "autoWidth": false,
        "searching": false,
        "lengthChange": true,
        "showNEntries": true,
        "bInfo": true,
        "bPaginate": true,
        "ordering": false,
        "footerCallback": function (row, data, start, end, display) {

            var api = this.api(), data;
            var intVal = function (i) {
                return typeof i === 'string' ?
                    i.replace(/[\$,]/g, '') * 1 :
                    typeof i === 'number' ?
                        i : 0;
            };

            //IntTotal1 = api.column(5).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);
            //IntTotal2 = api.column(6).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);
            //IntTotal3 = api.column(7).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);

            //IntTotal4 = api.column(14).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);

            //$(api.column(5).footer()).html(numShortFormat(IntTotal1));
            //$(api.column(6).footer()).html(numShortFormat(IntTotal2));
            //$(api.column(7).footer()).html(numShortFormat(IntTotal3));

            //$(api.column(14).footer()).html(numShortFormat(IntTotal4) + ' Min');

            //if (IntTotal3 !== 0)
            //    $(api.column(7).footer()).html('<span  class="badge badge-danger">' + numShortFormat(IntTotal3) + '</span>');
            //else $(api.column(7).footer()).html('<span  class="badge badge-success">' + numShortFormat(IntTotal3) + '</span>');
        }
    });
}


function CertFileCheckGet(ActionBtnId, DateStringStart, DateStringEnd, Icon) {
    $('#' + ActionBtnId).find('span').attr('class', 'fa fa-spinner fa-spin');

    HideReport('CertFileCheck' + 'TableReportId');

    $('#CertFileCheck' + 'TableId').DataTable().destroy();;
    $('#CertFileCheck' + 'TableId').DataTable({
        "initComplete": function (settings, json) {
            ShowReport('CertFileCheck' + 'TableReportId');
            $('#' + ActionBtnId).find('span').attr('class', Icon);
        },
        "ajax": {
            "url": "/Cert/CertFileCheckGet",
            "type": "GET",
            "datatype": "json",
            "data": {
                "DateStringStart": DateStringStart,
                "DateStringEnd": DateStringEnd
            }
        },
        "columns": [
            { "data": "SourceName" }, //0
            { "data": "SiteName" }, //1
            { "data": "StationNumber" }, //2
            { "data": "LaneName" }, //3
            { "data": "FileTypeName" }, //4
            { "data": "DhmValue" },//5            

            { "data": "LinesNumber" },//6
            { "data": "CurrentLineNumber" },//7
            { "data": "LinesGap" },//8       



            { "data": "CertFileId" },//9 Percentage
            { "data": "CertFileId" },//10 ProgressBar
            { "data": "DhmCreation" },//11 
            { "data": "CertFileId" },//12 Handle
            { "data": "CertFileId" },//13 Export
            { "data": "CertFileId" }//14 Contact
        ],
        "columnDefs": [
            { "width": "5%", "className": "text-center", "targets": 0 },//Source
            { "width": "5%", "className": "text-center", "targets": 1 },//SiteName
            { "width": "3%", "className": "text-center none", "targets": 2 },//StationNumber  
            { "width": "3%", "className": "text-center none", "targets": 3 },//LaneName 
            { "width": "0%", "className": "text-left", "targets": 4 },//FileTypeName
            { "width": "8%", "className": "text-center", "targets": 5 },//DhmValue            

            { "width": "5%", "className": "text-right", "targets": 6 },//LinesNumber
            { "width": "5%", "className": "text-right", "targets": 7 },//CurrentLineNumber
            { "width": "5%", "className": "text-right", "targets": 8 },//LinesGap

            { "width": "5%", "className": "text-center", "targets": 9 },//Percentage
            { "width": "8%", "className": "text-center", "targets": 10 },//ProgressBar
            { "width": "8%", "className": "text-center none", "targets": 11 },//DhmCreation
            { "width": "3%", "className": "text-center", "targets": 12 },//Handle            
            { "width": "3%", "className": "text-center", "targets": 13 },//Export 
            { "width": "0%", "className": "text-center none", "targets": 14 },//Contact

            { "targets": 3, "render": function (data, type, row) { return CertFileLaneNameGet(data) } },
            { "targets": 5, "render": function (data, type, row) { return GetDateValueFromDataTableDate(data) } },

            { "targets": 6, "render": function (data, type, row) { return DataTableGetElementId('LinesNumberId', row['CertFileId'], data); } },
            { "targets": 7, "render": function (data, type, row) { return DataTableGetElementId('CurrentLineNumberId', row['CertFileId'], data); } },
            { "targets": 8, "render": function (data, type, row) { return DataTableGetElementId('LinesGapId', row['CertFileId'], GetGapNumberFromDataTable(data)); } },

            { "targets": 9, "render": function (data, type, row) { return DataTableProgressPercentGet(row['CertFileId'], row['LinesNumber'], row['CurrentLineNumber']); } },
            { "targets": 10, "render": function (data, type, row) { return DataTableProgressBarGet(row['CertFileId'], row['LinesNumber'], row['CurrentLineNumber']); } },
            { "targets": 11, "render": function (data, type, row) { return GetDhmValueFromDataTableDate(data) } },
            { "targets": 12, "render": function (data, type, row) { return DataTableButtonFileHandleGet(row['CertFileId'], row['IsRunning'], row['IsHandled']); } },
            { "targets": 13, "render": function (data, type, row) { return DataTableGetButton('CertFileCeExport', row['CertFileId'], 'far fa-file-excel', '0048ff'); } },
            { "targets": 14, "render": function (data, type, row) { return DataTableGetContact(row, row['CertFileId']); } },
        ],
        "iDisplayLength": 50,
        "language": {
            "lengthMenu": "Afficher _MENU_ lignes par page",
            "zeroRecords": "Aucun résultat",
            "info": "Page _PAGE_ / _PAGES_ &nbsp;<i>(Nombre de lignes : _TOTAL_)</i>",
            "infoEmpty": "---",
            "infoFiltered": "(Nombre de lignes filtrées : _MAX_ total)",
            "search": "Filtrer ",
            "oPaginate": {
                "sNext": "Suivant",
                "sPrevious": "Précédent"
            }
        },
        "processing": false,
        "responsive": true,
        "bFilter": false,
        "autoWidth": false,
        "searching": false,
        "lengthChange": true,
        "showNEntries": true,
        "bInfo": true,
        "bPaginate": true,
        "ordering": true,
        "footerCallback": function (row, data, start, end, display) {

            var api = this.api(), data;
            var intVal = function (i) {
                return typeof i === 'string' ?
                    i.replace(/[\$,]/g, '') * 1 :
                    typeof i === 'number' ?
                        i : 0;
            };

            //IntTotal1 = api.column(5).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);
            //IntTotal2 = api.column(6).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);
            //IntTotal3 = api.column(7).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);

            //IntTotal4 = api.column(14).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);

            //$(api.column(5).footer()).html(numShortFormat(IntTotal1));
            //$(api.column(6).footer()).html(numShortFormat(IntTotal2));
            //$(api.column(7).footer()).html(numShortFormat(IntTotal3));

            //$(api.column(14).footer()).html(numShortFormat(IntTotal4) + ' Min');

            //if (IntTotal3 !== 0)
            //    $(api.column(7).footer()).html('<span  class="badge badge-danger">' + numShortFormat(IntTotal3) + '</span>');
            //else $(api.column(7).footer()).html('<span  class="badge badge-success">' + numShortFormat(IntTotal3) + '</span>');
        }
    });
}

function CertFileHandle(CertFileId) {
    $('#CertFileHandleBtnId' + CertFileId).find('span').attr('class', 'fa fa-spinner fa-spin');
    var obj = {};
    obj.CertFileId = CertFileId;
    $.ajax({
        url: "/Cert/CertFileHandle",
        method: "POST",
        data: JSON.stringify(obj),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: true
    });
}

function CertFileUnhandle(CertFileId) {
    $('#CertFileUnhandleBtnId' + CertFileId).find('span').attr('class', 'fa fa-spinner fa-spin');
    var obj = {};
    obj.CertFileId = CertFileId;
    $.ajax({
        url: "/Cert/CertFileUnhandle",
        method: "POST",
        data: JSON.stringify(obj),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: true,
        success: function (data) {
            $('#CertFileUnhandleBtnId' + CertFileId).find('span').attr('class', 'fas fa-clock');
            $('#CertFileUnhandleBtnId' + CertFileId).find('span').attr('style', 'color:#a3a3a3');
            $('#CertFileUnhandleBtnId' + CertFileId).attr('onclick', 'CertFileHandle(\'' + CertFileId + '\')');
            $('#CertFileUnhandleBtnId' + CertFileId).attr('id', 'CertFileHandleBtnId' + CertFileId);
        },
        error: function (request, status, error) {
            alert('Veuiller contacter votre administrateur pour dévalider .');
            $('#CertFileUnhandleBtnId' + CertFileId).find('span').attr('class', 'fas fa-unlock-alt');
        }
    });
}

function CertFileLaneNameGet(data) {
    if (data === "ELL") return "E**";
    if (data === "SLL") return "S**";
    else {
        return data;
    }
}


function CertTaskAdd(RowId, ParamId) {


    var ActionBtnId = new String('CertTaskAdd' + 'BtnId' + RowId);
    var Icon = 'far fa-check-circle';

    //Spin
    DataTableActionBtnSpin(ActionBtnId);

    var TaskId = TextParamValueGet(new String(ParamId).substr(0, 2));
    var Source = TextParamValueGet(new String(ParamId).substr(2, 2));

    //Visualize
    if (TaskId == '03') {
        if (Source == '04') {//Msg
            CertTaskVisualizeMsgGet(ActionBtnId, Icon, ParamId);
        }
        else {
            if (Source == '05') {//Zip
                CertTaskVisualizeZipGet(ActionBtnId, Icon, ParamId);
            }
            else {
                if (Source == '19') {//Images
                    CertTaskVisualizeImageGet(ActionBtnId, Icon, ParamId);
                }
                else {
                    alert('Action non prise en compte');
                }
            }
        }
    }
    else {
        var FileTypeId = TextParamValueGet(new String(ParamId).substr(4, 2));
        var DateString = TextParamValueGet(new String(ParamId).substr(6, 8));
        var RegionId = TextParamValueGet(new String(ParamId).substr(14, 2));
        var LSId = TextParamValueGet(new String(ParamId).substr(16, 2));
        var AxleId = TextParamValueGet(new String(ParamId).substr(18, 2));
        var StationNumber = TextParamValueGet(new String(ParamId).substr(20, 2));
        var LaneName = TextParamValueGet(new String(ParamId).substr(22, 3));
        var PdvId = TextParamValueGet(new String(ParamId).substr(25, 2));
        var BillingId = TextParamValueGet(new String(ParamId).substr(27, 2));
        var CategoryId = TextParamValueGet(new String(ParamId).substr(29, 2));

        var DateStringStart = DateString;
        var DateStringEnd = DateString;

        var HMPlanString = '2359';
        var IsEveryDay = false;
        var IsEveryHour = false;
        var IsPlanned = false;
        var IsCron = false;
        var AddDaysStart = 0;
        var AddDaysEnd = 0;

        CertFileAdd(ActionBtnId,
            Icon,
            TaskId,
            Source,
            FileTypeId,
            RegionId,
            LSId,
            AxleId,
            StationNumber,
            LaneName,
            PdvId,
            DateStringStart,
            DateStringEnd,

            HMPlanString,
            IsEveryDay,
            IsEveryHour,
            IsPlanned,
            IsCron,
            BillingId,
            CategoryId,
            AddDaysStart,
            AddDaysEnd
        );
    }
}

function CertUploadManFileHandleNext(CertUploadManFileId, LinesNumber, CurrentLineNumberNew) {
    $('#CertUploadManFileHandleBtnId' + CertUploadManFileId).find('span').attr('class', 'fa fa-spinner fa-spin');
    var DateOld = Date.now();
    var CurrentLineNumberOld = CurrentLineNumberNew;
    var obj = {};
    obj.CertUploadManFileId = CertUploadManFileId;
    $.ajax({
        url: "/Cert/CertUploadManFileHandleNextThreadLaunch",
        method: "POST",
        data: JSON.stringify(obj),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: true,
        success: function (data) {
            var CurrentLineNumberNew = parseInt(data);
            var TimeRemainingNew = GetTimeRemaining(DateOld, LinesNumber, CurrentLineNumberOld, CurrentLineNumberNew);

            if (CurrentLineNumberNew < LinesNumber) {
                UpdateProgressBar(CertUploadManFileId, LinesNumber, CurrentLineNumberNew, TimeRemainingNew);
                CertUploadManFileHandleNext(CertUploadManFileId, LinesNumber, CurrentLineNumberNew);
            }
            if (CurrentLineNumberNew == LinesNumber) {
                TimeRemainingNew = "Terminé";
                $('#CertUploadManFileHandleBtnId' + CertUploadManFileId).find('span').attr('class', 'fas fa-unlock-alt');
                $('#CertUploadManFileHandleBtnId' + CertUploadManFileId).find('span').attr('style', 'color:#28a745');
                $('#CertUploadManFileHandleBtnId' + CertUploadManFileId).attr('onclick', 'CertUploadManFileUnvalidate(\'' + CertUploadManFileId + '\')');
                $('#CertUploadManFileHandleBtnId' + CertUploadManFileId).attr('id', 'CertUploadManFileUnvalidateBtnId' + CertUploadManFileId);
                UpdateProgressBar(CertUploadManFileId, LinesNumber, CurrentLineNumberNew, TimeRemainingNew);
            }
        }
    });
}

function GetTimeRemaining(DateOld, LinesNumber, CurrentLineNumberOld, CurrentLineNumberNew) {
    var TimeRemainingNew = "En instance";
    var DateNew = Date.now();
    var diffInSeconds = Math.floor(((Math.abs(DateNew - DateOld) / 1000) / (CurrentLineNumberNew - CurrentLineNumberOld)) * (LinesNumber - CurrentLineNumberNew));
    var hours = Math.floor(diffInSeconds / 60 / 60);
    var minutes = Math.floor(diffInSeconds / 60);


    if (hours > 0) {
        TimeRemainingNew = hours + ' Heure(s)';
    }
    else {
        if (minutes > 0) {
            TimeRemainingNew = minutes + ' Minutes(s)';
        }
        else {
            TimeRemainingNew = diffInSeconds + ' Secondes(s)';
        }
    }
    return TimeRemainingNew;
}

function CertUploadManFileHandle(CertUploadManFileId) {
    $('#CertUploadManFileHandleBtnId' + CertUploadManFileId).find('span').attr('class', 'fa fa-spinner fa-spin');
    var obj = {};
    obj.CertUploadManFileId = CertUploadManFileId;
    $.ajax({
        url: "/Cert/CertUploadManFileHandle",
        method: "POST",
        data: JSON.stringify(obj),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: true,
        success: function (data) {
        }
    });

}

function CertUploadManFileDisplay() {
    HideReport('CertUploadManFileTableReportId');
    $('#CertUploadManFileTableId').DataTable().destroy();;
    $('#CertUploadManFileTableId').DataTable({





        "initComplete": function (settings, json) {
            ShowReport('CertUploadManFileTableReportId');

            elements = document.getElementsByClassName('CertUploadManFileHandle');
            //alert(elements.length);
            for (var i = 0; i < elements.length; i++) {
                //var CertUploadManFileId = new String(elements.item(i).getAttribute('id')).replace('CertUploadManFileHandleBtnId', '');
                //CertUploadManFileHandle('\'' + CertUploadManFileId + '\'');
                var ButtonHandleId = new String(elements.item(i).getAttribute('id'));
                //alert(ButtonHandleId);
                //$('#' + ButtonHandleId).click();

            }
            $("#CertUploadManFileUploadBtnId").find('span').attr('class', 'fas fa-upload');
        },
        "ajax": {
            "url": "/Cert/CertUploadManFileDisplay",
            "type": "GET",
            "datatype": "json"
        },
        "columns": [
            { "data": "FileName" }, //0     
            { "data": "FileTypeName" }, //1
            { "data": "LinesNumber" },//2
            {
                "mData": function vehicle(data, type, dataToSet) {
                    var DhmModificaton = new Date(data.YearM, data.MonthM - 1, data.DayM, data.HourM, data.MinuteM, data.SecondM);
                    var DhmNow = Date.now();
                    var diffInSeconds = Math.abs(DhmNow - DhmModificaton) / 1000;

                    if (diffInSeconds < 120) {
                        return 1;
                    }
                    else {
                        return 0;
                    }
                }
            },//3 Handle        
            { "data": "CertUploadManFileId" },//4 ProgressBar
            { "data": "CurrentLineNumber" },//5  CurrentLineNumber
            { "data": "CurrentLineNumber" },//6 Percent
            { "data": "CertUploadManFileId" }//7 Delete 
        ],
        "columnDefs": [
            { "width": "20%", "className": "text-left", "targets": 0 }, //FileName
            { "width": "10%", "className": "text-left", "targets": 1 },//FileTypeName
            { "width": "10%", "className": "text-right", "targets": 2 },//LinesNumber
            { "width": "5%", "className": "text-center", "targets": 3 },//Handle            
            { "width": "10%", "className": "text-center", "targets": 4 },//ProgressBar
            { "width": "5%", "className": "text-right", "targets": 5 },//CurrentLineNumber
            { "width": "5%", "className": "text-right", "targets": 6 },//Percent
            { "width": "5%", "className": "text-center", "targets": 7 },//Delete
            {
                "targets": 2,
                "render": function (data, type, row) {
                    return '<span id="LinesNumberId' + $('<div/>').text(row['CertUploadManFileId']).html() + '">' + data + '</span>'
                }
            },

            { "targets": 3, "render": function (data, type, row) { return DataTableButtonFileHandleGet(row['CertUploadManFileId'], row['IsRunning'], row['IsHandled']); } },
            {
                "targets": 4,
                "render": function (data, type, row) {

                    var ProgressValue = ((row['CurrentLineNumber'] / row['LinesNumber']) * 100).toFixed(0);
                    return '<div class="progress">' +
                        '<div id="ProgressValueId' + $('<div/>').text(row['CertUploadManFileId']).html() + '"' +
                        'class="progress-bar progress-bar-striped " role = "progressbar" style = "width: ' + ProgressValue + '%; background-color:#09c70d" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100" ></div>' +
                        '</div>'
                }
            },
            { "targets": 5, "render": function (data, type, row) { return DataTableGetElementId('CurrentLineNumberId', row['CertUploadManFileId'], data); } },
            {
                "targets": 6,
                "render": function (data, type, row) {
                    var ProgressValue = ((row['CurrentLineNumber'] / row['LinesNumber']) * 100).toFixed(0);
                    var ProgressPercent = new String(ProgressValue) + '%';
                    return '<span id="ProgressPercentId' + row['CertUploadManFileId'] + '">' + ProgressPercent + '</span>';
                }
            },
            { "targets": 7, "render": function (data, type, row) { return DataTableGetButton('CertUploadManFileDelete', data, 'far fa-trash-alt', 'red'); } }
        ],
        "iDisplayLength": 50,
        "language": {
            "lengthMenu": "Afficher _MENU_ lignes par page",
            "zeroRecords": "Aucun résultat",
            "info": "Page _PAGE_ / _PAGES_ &nbsp;<i>(Nombre de lignes : _TOTAL_)</i>",
            "infoEmpty": "---",
            "infoFiltered": "(Nombre de lignes filtrées : _MAX_ total)",
            "search": "Filtrer ",
            "oPaginate": {
                "sNext": "Suivant",
                "sPrevious": "Précédent"
            }
        },
        //"processing": true,
        "ordering": false,
        "responsive": true,
        "bFilter": false,
        "autoWidth": false,
        "searching": false,
        "lengthChange": false,
        "showNEntries": true,
        "bInfo": false,
        "bPaginate": false,
        "bFilter": false
    });
};

function CertUploadManFileDelete(CertUploadManFileId) {
    $('#CertUploadManFileDeleteBtnId' + CertUploadManFileId).find('span').attr('class', 'fa fa-spinner fa-spin');

    var obj = {};
    obj.CertUploadManFileId = CertUploadManFileId;

    $.ajax({
        url: "/Cert/CertUploadManFileDelete",
        method: "POST",
        data: JSON.stringify(obj),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            $('#CertUploadManFileDeleteBtnId' + CertUploadManFileId).find('span').attr('class', 'fa fa-spinner fa-spin');

            $('#CertUploadManFileHandleBtnId' + CertUploadManFileId).find('span').attr('class', 'fas fa-minus-circle');
            $('#CertUploadManFileDeleteBtnId' + CertUploadManFileId).find('span').attr('class', 'fas fa-minus-circle');

            $('#CertUploadManFileHandleBtnId' + CertUploadManFileId).find('span').attr('style', 'color:#ff0000');
            $('#CertUploadManFileDeleteBtnId' + CertUploadManFileId).find('span').attr('style', 'color:#ff0000');

            $('#CertUploadManFileHandleBtnId' + CertUploadManFileId).attr('onclick', '');
            $('#CertUploadManFileDeleteBtnId' + CertUploadManFileId).attr('onclick', '');
        }
    });

}

function CertUploadManDisplay(PluginId, RequestId) {
    ShowReport('CertUploadManTableReportId');
    $("#CeFilesUploadBtn").find('span').attr('class', 'fa fa-spinner fa-spin');
    $('#CertUploadManTableId').DataTable().destroy();
    $('#CertUploadManTableId').DataTable({
        "initComplete": function (settings, json) {
            //$("#CeFilesUploadBtn").find('span').attr('class', 'fas fa-eye');
            //ShowReport('CertUploadManTableReportId');
            CertUploadManFileDisplay();
        },
        "ajax": {
            "url": "/Cert/CertUploadManDisplay",
            "type": "GET",
            "datatype": "json",
            "data": {
                "PluginId": PluginId,
                "RequestId": RequestId,
            }
        },
        "columns": [
            { "data": "UploadPattern" }, //0 ImportBtn
            { "data": "UploadPattern" }, //1 UploadBtn
            { "data": "UploadPattern" } //1 UploadBtn
        ],
        "columnDefs": [
            { "width": "25%", "className": "text-left", "targets": 0 },
            { "width": "10%", "className": "text-center", "targets": 1 },
            { "width": "10%", "className": "text-center", "targets": 2 },
            {
                "targets": 0, "searchable": false, "orderable": false, "className": 'dt-body-center',
                "render": function (data, type, full, meta) {
                    return '<input type="file" multiple="multiple" id="CertUploadManFileInputId" style="font-size: 0.9rem">'
                }
            },
            {
                "targets": 1, "searchable": false, "orderable": false, "className": 'dt-body-center',
                "render": function (data, type, full, meta) {
                    return '<button type = "button" id="CertUploadManFileUploadBtnId"' +
                        'onclick="CertUploadManFileUpload()"' +
                        'class= "btn btn-default btn-sm" >' +
                        '<span class="fas fa-upload" style="font-size: 0.9rem">' +
                        '</span ></button >'
                }
            },
            {
                "targets": 2, "searchable": false, "orderable": false, "className": 'dt-body-center',
                "render": function (data, type, full, meta) {
                    return '<button type = "button" id="CertUploadManFileDisplayBtnId"' +
                        'onclick="CertUploadManFileDisplay()"' +
                        'class= "btn btn-default btn-sm" >' +
                        '<span class="fas fa-eye" style="font-size: 0.9rem">' +
                        '</span ></button >'
                }
            }
        ],
        "bFilter": false,
        "processing": false,
        "responsive": true,
        "bFilter": false,
        "autoWidth": false,
        "searching": false,
        "lengthChange": true,
        "showNEntries": true,
        "bInfo": false,
        "bPaginate": false,
        "ordering": false,
    });

};

function CertUploadAutoPdvDisplay() {

    var SiteId = GetElementValue('SiteId');
    var StationNumber = GetElementValue('StationNumberId');
    var PdvId = GetElementValue('PdvId');

    var DateStringStart = GetDateStringFromDatePicker('DateStartId');
    var DateStringEnd = GetDateStringFromDatePicker('DateEndId');

    if (SiteId != null && SiteId != '' &&
        StationNumber != null && StationNumber != '' &&
        PdvId != null && PdvId != '' &&
        DateStringStart != null && DateStringStart != '' &&
        DateStringEnd != null && DateStringEnd != '') {

        $('#ActionBtnId').find('span').attr('class', 'fa fa-spinner fa-spin');
        HideReport('CertUploadAutoPdvTableReportId');
        HideReport('DataTableActionReportId');

        $('#CertUploadAutoPdvTableId').DataTable().destroy();;
        $('#CertUploadAutoPdvTableId').DataTable({
            "initComplete": function (settings, json) {
                $('#ActionBtnId').find('span').attr('class', 'fas fa-eye');
                ShowReport('CertUploadAutoPdvTableReportId');
                ShowReport('DataTableActionReportId');
            },
            "ajax": {
                "url": "/Cert/CertUploadAutoPdvDisplay",
                "type": "GET",
                "datatype": "json",
                "data": {
                    "SiteId": SiteId,
                    "StationNumber": StationNumber,
                    "PdvId": PdvId,
                    "DateStringStart": DateStringStart,
                    "DateStringEnd": DateStringEnd
                }
            },
            "columns": [
                { "data": "SiteName" }, //0
                { "data": "StationNumber" }, //1
                { "data": "PdvName" }, //2
                { "data": "DhmValue" },//3                    
                { "data": "FileName" },//4
                { "data": "CertPdvFileId" }//5

            ],
            "columnDefs": [

                { "width": "5%", "className": "text-center", "targets": 0, "searchable": false, "orderable": false },//SiteName
                { "width": "5%", "className": "text-center", "targets": 1, "searchable": false, "orderable": false },//StationNumber
                { "width": "5%", "className": "text-center", "targets": 2, "searchable": false, "orderable": false },//PdvName     
                { "width": "15%", "className": "text-center", "targets": 3, "searchable": false, "orderable": false },//DhmValue
                { "width": "30%", "className": "text-center", "targets": 4, "searchable": false, "orderable": false },//FileName
                { "width": "5%", "className": "text-center", "targets": 5, "searchable": false, "orderable": false },//Handle

                { "targets": 3, "render": function (data, type, row) { return GetDhmValueFromDataTableDate(data) } },
                {
                    "targets": 5,
                    "render": function (data, type, row) {
                        if (row['IsHandled'] == true) {

                            return DataTableGetButton('CertUploadAutoPdvUnhandle', row['CertPdvFileId'], 'fas fa-unlock-alt', '28a745');
                        }
                        else {
                            return DataTableGetButton('CertUploadAutoPdvHandle', row['CertPdvFileId'], 'fas fa-clock', 'ff6000');
                        }
                    }
                }
            ],
            "iDisplayLength": 50,
            "language": {
                "lengthMenu": "Afficher _MENU_ lignes par page",
                "zeroRecords": "Aucun résultat",
                "info": "Page _PAGE_ / _PAGES_ &nbsp;<i>(Nombre de lignes : _TOTAL_)</i>",
                "infoEmpty": "---",
                "infoFiltered": "(Nombre de lignes filtrées : _MAX_ total)",
                "search": "Filtrer ",
                "oPaginate": {
                    "sNext": "Suivant",
                    "sPrevious": "Précédent"
                }
            },
            //"processing": true,
            "responsive": true,
            "autoWidth": false,
            "searching": false,
            "lengthChange": true,
            "showNEntries": true,
            "bInfo": false,
            "bPaginate": true,
            "bFilter": true
            //"footerCallback": function (row, data, start, end, display) {

            //    var api = this.api(), data;
            //    var intVal = function (i) {
            //        return typeof i === 'string' ?
            //            i.replace(/[\$,]/g, '') * 1 :
            //            typeof i === 'number' ?
            //                i : 0;
            //    };

            //IntTotal1 = api.column(5).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);
            //IntTotal2 = api.column(6).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);
            //IntTotal3 = api.column(7).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);

            //IntTotal4 = api.column(14).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);

            //$(api.column(5).footer()).html(numShortFormat(IntTotal1));
            //$(api.column(6).footer()).html(numShortFormat(IntTotal2));
            //$(api.column(7).footer()).html(numShortFormat(IntTotal3));

            //$(api.column(14).footer()).html(numShortFormat(IntTotal4) + ' Min');

            //if (IntTotal3 !== 0)
            //    $(api.column(7).footer()).html('<span  class="badge badge-danger">' + numShortFormat(IntTotal3) + '</span>');
            //else $(api.column(7).footer()).html('<span  class="badge badge-success">' + numShortFormat(IntTotal3) + '</span>');
            //}
        });
    }
    else {
        ParamMessageErrorDisplay();
    };
}

function CertUploadAutoPdvHandle(CertPdvFileId) {
    $('#CertUploadAutoPdvHandleBtnId' + CertPdvFileId).find('span').attr('class', 'fa fa-spinner fa-spin');
    var obj = {};
    obj.CertPdvFileId = CertPdvFileId;
    $.ajax({
        url: "/Cert/CertUploadAutoPdvHandle",
        method: "POST",
        data: JSON.stringify(obj),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: true,
        success: function (data) {
            $('#CertUploadAutoPdvHandleBtnId' + CertPdvFileId).find('span').attr('class', 'fas fa-unlock-alt');
            $('#CertUploadAutoPdvHandleBtnId' + CertPdvFileId).find('span').attr('style', 'color:#28a745');
            $('#CertUploadAutoPdvHandleBtnId' + CertPdvFileId).attr('onclick', 'CertUploadAutoPdvUnhandleBtnId(\'' + CertPdvFileId + '\')');
            $('#CertUploadAutoPdvHandleBtnId' + CertPdvFileId).attr('id', 'CertUploadAutoPdvUnhandleBtnId' + CertPdvFileId);
        }
    });
}

function CertUploadAutoPdvSend(CertPdvFileId) {
    $('#CertUploadAutoPdvSendBtnId' + CertPdvFileId).find('span').attr('class', 'fa fa-spinner fa-spin');
    //var DateOld = Date.now();
    var obj = {};
    obj.CertPdvFileId = CertPdvFileId;
    $.ajax({
        url: "/Cert/CertUploadAutoPdvSend",
        method: "POST",
        data: JSON.stringify(obj),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: true,
        success: function (data) {
            $('#CertUploadAutoPdvSendBtnId' + CertPdvFileId).find('span').attr('class', 'fas fa-upload');
        }
    });
}

function CertUploadAutoPdvHandleAll() {

    var SiteId = GetElementValue('SiteId');
    var StationNumber = GetElementValue('StationNumberId');
    var PdvId = GetElementValue('PdvId');

    var DateStringStart = GetDateStringFromDatePicker('DateStartId');
    var DateStringEnd = GetDateStringFromDatePicker('DateEndId');

    if (SiteId != null && SiteId != '' &&
        StationNumber != null && StationNumber != '' &&
        PdvId != null && PdvId != '' &&
        DateStringStart != null && DateStringStart != '' &&
        DateStringEnd != null && DateStringEnd != '') {

        $('#DataTableActionBtnId').find('span').attr('class', 'fa fa-spinner fa-spin');
        HideReport('CertUploadAutoPdvTableReportId');
        var obj = {};
        obj.SiteId = SiteId;
        obj.StationNumber = StationNumber;
        obj.PdvId = PdvId;
        obj.DateStringStart = DateStringStart;
        obj.DateStringEnd = DateStringEnd;

        $.ajax({
            url: "/Cert/CertUploadAutoPdvHandleAll",
            method: "POST",
            data: JSON.stringify(obj),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: true,
            success: function (data) {
                $('#DataTableActionBtnId' + CertPdvFileId).find('span').attr('class', 'fas fa-check-circle');
                CertUploadAutoPdvDisplay();
            }
        });

















        $('#CertUploadAutoPdvTableId').DataTable().destroy();;
        $('#CertUploadAutoPdvTableId').DataTable({


            "initComplete": function (settings, json) {
                $('#ActionBtnId').find('span').attr('class', 'fas fa-eye');
                ShowReport('CertUploadAutoPdvTableReportId');
            },
            "ajax": {
                "url": "/Cert/CertUploadAutoPdvDisplay",
                "type": "GET",
                "datatype": "json",
                "data": {
                    "SiteId": SiteId,
                    "StationNumber": StationNumber,
                    "PdvId": PdvId,
                    "DateStringStart": DateStringStart,
                    "DateStringEnd": DateStringEnd
                }
            },
            "columns": [
                { "data": "SiteName" }, //0
                { "data": "StationNumber" }, //1
                { "data": "PdvName" }, //2
                { "data": "DhmValue" },//3                    
                { "data": "FileName" },//4
                { "data": "CertPdvFileId" }//5

            ],
            "columnDefs": [

                { "width": "5%", "className": "text-center", "targets": 0, "searchable": false, "orderable": false },//SiteName
                { "width": "5%", "className": "text-center", "targets": 1, "searchable": false, "orderable": false },//StationNumber
                { "width": "5%", "className": "text-center", "targets": 2, "searchable": false, "orderable": false },//PdvName     
                { "width": "15%", "className": "text-center", "targets": 3, "searchable": false, "orderable": false },//DhmValue
                { "width": "30%", "className": "text-center", "targets": 4, "searchable": false, "orderable": false },//FileName
                { "width": "5%", "className": "text-center", "targets": 5, "searchable": false, "orderable": false },//Handle

                { "targets": 3, "render": function (data, type, row) { return GetDhmValueFromDataTableDate(data) } },
                {
                    "targets": 5,
                    "render": function (data, type, row) {
                        if (row['IsHandled'] == true) {

                            return DataTableGetButton('CertUploadAutoPdvUnhandle', row['CertPdvFileId'], 'fas fa-unlock-alt', '28a745');
                        }
                        else {
                            return DataTableGetButton('CertUploadAutoPdvHandle', row['CertPdvFileId'], 'fas fa-clock', 'ff6000');
                        }
                    }
                }
            ],
            "iDisplayLength": 50,
            "language": {
                "lengthMenu": "Afficher _MENU_ lignes par page",
                "zeroRecords": "Aucun résultat",
                "info": "Page _PAGE_ / _PAGES_ &nbsp;<i>(Nombre de lignes : _TOTAL_)</i>",
                "infoEmpty": "---",
                "infoFiltered": "(Nombre de lignes filtrées : _MAX_ total)",
                "search": "Filtrer ",
                "oPaginate": {
                    "sNext": "Suivant",
                    "sPrevious": "Précédent"
                }
            },
            //"processing": true,
            "responsive": true,
            "autoWidth": false,
            "searching": false,
            "lengthChange": true,
            "showNEntries": true,
            "bInfo": false,
            "bPaginate": true,
            "bFilter": true
            //"footerCallback": function (row, data, start, end, display) {

            //    var api = this.api(), data;
            //    var intVal = function (i) {
            //        return typeof i === 'string' ?
            //            i.replace(/[\$,]/g, '') * 1 :
            //            typeof i === 'number' ?
            //                i : 0;
            //    };

            //IntTotal1 = api.column(5).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);
            //IntTotal2 = api.column(6).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);
            //IntTotal3 = api.column(7).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);

            //IntTotal4 = api.column(14).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);

            //$(api.column(5).footer()).html(numShortFormat(IntTotal1));
            //$(api.column(6).footer()).html(numShortFormat(IntTotal2));
            //$(api.column(7).footer()).html(numShortFormat(IntTotal3));

            //$(api.column(14).footer()).html(numShortFormat(IntTotal4) + ' Min');

            //if (IntTotal3 !== 0)
            //    $(api.column(7).footer()).html('<span  class="badge badge-danger">' + numShortFormat(IntTotal3) + '</span>');
            //else $(api.column(7).footer()).html('<span  class="badge badge-success">' + numShortFormat(IntTotal3) + '</span>');
            //}
        });
    }
    else {
        ParamMessageErrorDisplay();
    };
}

function FilesManHandle(Source) {

    $('#FilesManBtnId' + Source).find('span').attr('class', 'fa fa-spinner fa-spin');
    var obj = {};
    obj.Source = Source;
    $.ajax({
        url: "/Async/FilesManHandle",
        method: "POST",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: JSON.stringify(obj),
        success: function (data) {
            $('#FilesManBtnId' + Source).find('span').attr('class', 'fas fa-eye');
        },
        error: function (request, status, error) {
            $('#FilesManBtnId' + Source).find('span').attr('class', 'fas fa-eye');
            alert("Error : " + error);
        }
    });
}

function FilesConHandle(Source) {
    $('#FilesConBtnId' + Source).find('span').attr('class', 'fa fa-spinner fa-spin');
    var obj = {};
    obj.Source = Source;
    $.ajax({
        url: "/Async/FilesConHandle",
        method: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(obj)
    });
}

function FilesPlanHandle(Source, Hour1, Hour2, Hour3) {
    $('#FilesPlanBtnId' + Source).find('span').attr('class', 'fa fa-spinner fa-spin');
    var obj = {};
    obj.Source = Source;
    obj.FileTypeId = FileTypeId;
    obj.Hour1 = Hour1;
    obj.Hour2 = Hour2;
    obj.Hour3 = Hour3;
    $.ajax({
        url: "/Async/FilesPlanHandle",
        method: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(obj)
    });
}

function CertFileUpdate(UpdateId) {

    //UpdateId = Source + FileTypeId + CertValidateStationId
    //CertValidateStationId = DateString + SiteId + StationNumber

    var ActionBtnId = 'CertFileUpdate' + 'BtnId' + UpdateId;
    $('#' + ActionBtnId).find('span').attr('class', 'fa fa-spinner fa-spin');
    var Icon = 'fas fa-redo-alt';







    var obj = {};
    obj.UpdateId = UpdateId;
    $.ajax({
        url: "/Cert/CertFileUpdate",
        method: "POST",
        data: JSON.stringify(obj),
        contentType: "application/json; charset=utf-8",
        //dataType: "text",
        async: true,
        success: function (data) {
            $('#' + ActionBtnId).find('span').attr('class', Icon);
        }
    });
}

function CertFileTypeUpdateAdd(CertFileUpdateId) {

    var ActionBtnId = new String('CertFileUpdateAdd' + 'BtnId' + CertFileUpdateId);
    var Icon = 'fas fa-plus-circle';

    var TaskId = '00';
    var Source = new String(CertFileUpdateId).substr(0, 2);
    var FileTypeId = new String(CertFileUpdateId).substr(2, 2);
    var SiteId = new String(CertFileUpdateId).substr(12, 2);
    var LSId = '0';
    var BagContainerId = '0';
    var StationNumber = new String(CertFileUpdateId).substr(14, 2);
    var LaneName = new String(CertFileUpdateId).substr(16, 3);
    var PdvId = '0';

    var DateStringStart = new String(CertFileUpdateId).substr(4, 8);
    var DateStringEnd = new String(CertFileUpdateId).substr(4, 8);

    var HMPlanString = "2359";
    var IsEveryDay = false;
    var IsPlanned = true;
    var IsTrxLane = true;

    CertFileAdd(ActionBtnId,
        Icon,
        TaskId,
        Source,
        FileTypeId,
        SiteId,
        LSId,
        BagContainerId,
        StationNumber,
        LaneName,
        PdvId,
        DateStringStart,
        DateStringEnd,

        HMPlanString,
        IsEveryDay,
        IsPlanned,
        IsTrxLane);
}

function CertUpdate(Pattern) {
    var ActionBtnId = 'ParamActionBtnId2';
    var Icon = 'fas fa-redo-alt';
    ActionBtnMarginSpin(ActionBtnId);

    $('#' + ActionBtnId).find('span').attr('class', 'fa fa-spinner fa-spin');

    var RegionId = '0';
    var LSId = '0';
    var AxleId = '0';
    var StationNumber = '0';
    var LaneName = '0';
    var DateStringStart = '';
    var DateStringEnd = '';
    var TaskId = '00';
    var Source = '';

    var DateStringStart = '';
    var DateStringEnd = '';

    if (Pattern == 'CertLaneCtr') {
        Source = '07';
        FileTypeId = 'V2';
        DateStringStart = GetDateStringFromDatePicker('DateStartId');
        DateStringEnd = GetDateStringFromDatePicker('DateEndId');
    }
    if (Pattern == 'CertPdvCtr') {
        DateStringStart = GetDateStringFromDatePicker('DateStartId');
        DateStringEnd = GetDateStringFromDatePicker('DateEndId');
        Source = '07';
        FileTypeId = 'P2';
    }
    if (Pattern == 'CertTraficOdOpe') {
        DateStringStart = GetDateStringFromDatePicker('DateStartId');
        DateStringEnd = GetDateStringFromDatePicker('DateEndId');
        Source = '08';
        FileTypeId = '85';
    }
    if (Pattern == 'CertTraficOdCe') {
        DateStringStart = GetDateStringFromDatePicker('DateStartId');
        DateStringEnd = GetDateStringFromDatePicker('DateEndId');
        Source = '07';
        FileTypeId = 'T1';
    }

    if (Pattern == 'CertTraficOpe') {
        DateStringStart = GetDateStringFromDatePicker('DateStartId');
        DateStringEnd = GetDateStringFromDatePicker('DateEndId');
        Source = '08';
        FileTypeId = '80';
    }
    if (Pattern == 'CertTraficCe') {
        DateStringStart = GetDateStringFromDatePicker('DateStartId');
        DateStringEnd = GetDateStringFromDatePicker('DateEndId');
        Source = '07';
        FileTypeId = '70';
    }

    if (Pattern == 'CertVersOpe') {
        DateStringStart = GetDateStringFromDatePicker('DateStartId');
        DateStringEnd = GetDateStringFromDatePicker('DateEndId');
        Source = '08';
        FileTypeId = '87';
    }
    if (Pattern == 'CertVersCe') {
        DateStringStart = GetDateStringFromDatePicker('DateStartId');
        DateStringEnd = GetDateStringFromDatePicker('DateEndId');
        Source = '07';
        FileTypeId = '77';
    }

    if (Pattern == 'CertPostOpe') {
        DateStringStart = GetDateStringFromDatePicker('DateStartId');
        DateStringEnd = GetDateStringFromDatePicker('DateEndId');
        Source = '08';
        FileTypeId = '82';
    }
    if (Pattern == 'CertPostCe') {
        DateStringStart = GetDateStringFromDatePicker('DateStartId');
        DateStringEnd = GetDateStringFromDatePicker('DateEndId');
        Source = '07';
        FileTypeId = '73';
    }

    if (Pattern == 'CertNrOpe') {
        DateStringStart = GetDateStringFromDatePicker('DateStartId');
        DateStringEnd = GetDateStringFromDatePicker('DateEndId');
        Source = '08';
        FileTypeId = '83';
    }
    if (Pattern == 'CertNrCe') {
        DateStringStart = GetDateStringFromDatePicker('DateStartId');
        DateStringEnd = GetDateStringFromDatePicker('DateEndId');
        Source = '07';
        FileTypeId = '71';
    }

    if (Pattern == 'CertReceiptOpe') {
        DateStringStart = GetDateStringFromDatePicker('DateStartId');
        DateStringEnd = GetDateStringFromDatePicker('DateEndId');
        Source = '08';
        FileTypeId = '81';
    }
    if (Pattern == 'CertReceiptCe') {
        DateStringStart = GetDateStringFromDatePicker('DateStartId');
        DateStringEnd = GetDateStringFromDatePicker('DateEndId');
        Source = '07';
        FileTypeId = '72';
    }
    if (Pattern == 'MaintFeatures') {
        Source = '24';
        RegionId = '0';
        AxleId = '0';
        StationNumber = GetElementDropDownListValue('StationNumberId');
        LaneName = GetElementDropDownListValue('LaneNameId');
        var ItemCategoryId = GetElementDropDownListValue('ItemCategoryId');

        if (ItemCategoryId == '01') {
            FileTypeId = 'G1';
        }
        if (ItemCategoryId == '02') {
            FileTypeId = 'G2';
        }
        if (ItemCategoryId == '03') {
            FileTypeId = 'G3';
        }
        if (ItemCategoryId == '04') {
            FileTypeId = 'G4';
        }
        if (ItemCategoryId == '05') {
            FileTypeId = 'G5';
        }
    }
    if (Pattern == 'MaintPing') {
        TaskId = '10';
        Source = '29';
        FileTypeId = 'F1';
        RegionId = '0';
        AxleId = '0';
        StationNumber = GetElementDropDownListValue('StationNumberId');
        LaneName = GetElementDropDownListValue('LaneNameId');
        LSId = GetElementDropDownListValue('LSId');
    }
    if (Pattern == 'MaintPath') {
        TaskId = '00';
        Source = '08';
        FileTypeId = '89';
        RegionId = '0';
        AxleId = '0';
        StationNumber = GetElementDropDownListValue('StationNumberId');
        LaneName = '0';
        LSId = GetElementDropDownListValue('LSId');
    }
    if (Pattern == 'MaintTollPrice') {
        TaskId = '00';
        Source = '08';
        FileTypeId = '8B';
        RegionId = '0';
        AxleId = '0';
        StationNumber = GetElementDropDownListValue('StationNumberId');
        LaneName = '0';
        LSId = GetElementDropDownListValue('LSId');
    }
    if (Pattern == 'MaintPerso') {
        TaskId = '00';
        Source = '08';
        FileTypeId = '8A';
        RegionId = '0';
        AxleId = '0';
        StationNumber = GetElementDropDownListValue('StationNumberId');
        LaneName = '0';
        LSId = GetElementDropDownListValue('LSId');
    }
    if (Pattern == 'RepoSpcAff') {
        DateStringStart = GetDateStringFromDatePicker('DateId');
        DateStringEnd = GetDateStringFromDatePicker('DateId');
        TaskId = '00';
        Source = '08';
        FileTypeId = '8A';
        RegionId = GetElementDropDownListValue('RegionId');
        AxleId = '0';
        StationNumber = '0';
        LaneName = '0';
        LSId = GetElementDropDownListValue('CellId');
    }

    CertFileUpload(ActionBtnId, Icon, TaskId, Source, FileTypeId, DateStringStart, DateStringEnd, RegionId, LSId, AxleId, StationNumber, LaneName);

}



