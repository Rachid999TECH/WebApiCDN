
//PerfDisply
function QualifCashDisplay() {
    var ActionBtnId = 'ParamActionBtnId0';
    var Icon = 'fas fa-eye btn-icon-m-cl gc-c1-cl';

    QualifCashGet(ActionBtnId, Icon);
}

function QualifCashGet(ActionBtnId, Icon) {

    //Spin
    ActionBtnSpin(ActionBtnId);

    //Hide some datatables
    QualifAllReportsHide();
    //ShowReport('ParamReportId');

    ParamMessageReset();

    var PatternTable = 'QualifCash';
    var PatternTableId = PatternTable + 'TableId'
    var PatternTableReportId = PatternTable + 'TableReportId';

    $('#' + PatternTableId).DataTable().destroy();
    $('#' + PatternTableId).DataTable({
        "dom": 'Bfrtip',
        "buttons": [
            'excel'
        ],
        "initComplete": function (settings, json) {
            ActionBtnIconSet(ActionBtnId, Icon);
            ShowReport(PatternTableReportId);
        },
        "ajax": {
            "url": "/Qualif/QualifCashGet",
            "type": "GET",
            "datatype": "json"
            //"data": {
            //    DateStringStart: DateStringStart,
            //    DateStringEnd: DateStringEnd
            //}
        },
        "columns": [
            { "data": "RegionName" },//0
            { "data": "CashierNumber" },//1

            { "data": "TotalJustifiedPlate" },//2
            { "data": "ReceiptJustifiedPlate" },//3

            { "data": "UserId" },//4
        ],
        "columnDefs": [
            { "width": "3%", "className": "text-center", "targets": 0 },
            { "width": "3%", "className": "text-center", "targets": 1 },

            { "width": "3%", "className": "text-center", "targets": 2 },
            { "width": "3%", "className": "text-right", "targets": 3 },

            { "width": "3%", "className": "text-center", "targets": 4 },

            { "targets": 0, "render": function (data, type, row) { return data; } },
            { "targets": 1, "render": function (data, type, row) { return data; } },

            { "targets": 2, "render": function (data, type, row) { return DataTableFormatIntNullAlertGet(data); } },
            { "targets": 3, "render": function (data, type, row) { return DataTableFormatDoubleNullAlertGet(data); } },

            { "targets": 4, "render": function (data, type, row) { return DataTableButtonGet('QualifCashDaySearch', data, '\'' + data + '\'', '', 'dt-btn-cl gc-bc1-cl', 'fas fa-eye btn-icon-cl gc-c1-cl', '') } },
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
        "iDisplayLength": 31,
        "processing": false,
        "responsive": true,
        "bFilter": true,
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


            //Total0 = api.column(1).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);
            //$(api.column(1).footer()).html(numShortFormat(Total0));

            //Total1 = api.column(3).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);
            //$(api.column(3).footer()).html(numShortFormat(Total1));

            //Total2 = api.column(5).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);
            //$(api.column(5).footer()).html(numShortFormat(Total2));
        }
    });
}




//DayDisplay
function QualifTrxLaneDisplay() {
    var ActionBtnId = 'ParamActionBtnId0';
    var Icon = 'fas fa-eye btn-icon-m-cl gc-c1-cl';
    var IsMargin = false;

    var RegionId = GetElementValue('RegionId');
    var LSId = GetElementValue('LSId');
    var StationNumber = GetElementValue('StationNumberId');
    var LaneName = GetElementValue('LaneNameId');
    var DhmStringStart = GetDhmStringFromDatePicker('DhmStartId');
    var DhmStringEnd = GetDhmStringFromDatePicker('DhmEndId');

    var IsImage = new Boolean($("#IsImageId").is(":checked"));
    var IsImageIapi = new Boolean($("#IsImageIapiId").is(":checked"));

    var BillingId = GetElementValue('BillingId');
    var CategoryId = GetElementValue('CategoryId');

    var ObsPassId = GetElementValue('ObsPassId');
    var ObsTickId = GetElementValue('ObsTickId');
    var ObsMpId = GetElementValue('ObsMpId');

    var LicensePlate = GetElementValue('LicensePlateId');
    var ReadTickNumber = GetElementValue('ReadTickNumberId');
    var ProductNumber = '';
    var SerialNumber = GetElementValue('SerialNumberId');

    if (DhmStringStart != '' && DhmStringEnd != '' && RegionId != '0' && LSId != '0' && StationNumber != '0') {

        QualifTrxLaneGet(ActionBtnId, Icon, IsMargin,
            RegionId, LSId, StationNumber, LaneName, DhmStringStart, DhmStringEnd,            
            BillingId, CategoryId,
            ObsPassId, ObsTickId, ObsMpId,
            LicensePlate, ReadTickNumber, ProductNumber, SerialNumber,
            IsImage, IsImageIapi);
    }
    else {
        ParamMessageErrorDisplay('Les dates de début et de fin, région, LS, gare sont obligatoires');
    };
}

function QualifTrxLaneAllDisplay() {
    //Define
    var ActionBtnId = 'ParamActionBtnId0';
    var Icon = 'fas fa-eye btn-icon-m-cl gc-c1-cl';
    var TimeId = GetElementValue('TimeId');
    var ObsTickId = GetElementValue('ObsTickId');
    var IsMargin = new Boolean(true);

    QualifAllReportsHide();
    ShowReport('ParamReportId');

    if (ObsTickId == 'D' || ObsTickId == 'P' || 
        ObsMpId == '26' || ObsMpId == '01' || ObsMpId == '48' || 
        ObsPassId == '3' || ObsPassId == '6' || ObsPassId == '7' || ObsPassId == 'W' || ObsPassId == 'A' || ObsPassId == 'V'
        ) {
        if (TimeId == '01') {//Day
            QualifTrxLaneDayDisplay(ActionBtnId, Icon, IsMargin, ObsTickId);
        }
        else {
            if (TimeId == '09') {//Region
                QualifTrxLaneRegionDisplay(ActionBtnId, Icon, IsMargin, ObsTickId);
            }
            else {
                if (TimeId == '07') {//Station
                    QualifTrxLaneStationDisplay(ActionBtnId, Icon, IsMargin, ObsTickId);
                }
                else {
                    if (TimeId == '10') {//Od
                        QualifTrxLaneOdDisplay(ActionBtnId, Icon, IsMargin, ObsTickId);
                    }
                    else {
                        if (TimeId == '11') {//Trx 
                            ElementDropDownListSet('ObsMpId', '0')
                            QualifPathRealTimeDisplay(ActionBtnId, Icon, IsMargin, ObsTickId);
                        }
                        else {
                            ParamMessageErrorDisplay('Ce niveau n\'est pas authorisé');
                        }
                    }
                }
            }
        }
    }
    else {
        ParamMessageErrorDisplay('Certaines valeurs ne sont pas acceptées');
    }


    
}

function QualifTrxLaneDayDisplay(ActionBtnId, Icon, IsMargin, ObsTickId) {
    var DateStringStart = GetDateStringFromDatePicker('DateStartId');
    var DateStringEnd = GetDateStringFromDatePicker('DateEndId');

    if (DateStringStart != '' && DateStringEnd != '') {
        QualifTrxLaneDayGet(ActionBtnId, Icon, IsMargin, DateStringStart, DateStringEnd, ObsTickId);
    }
    else {
        ParamMessageErrorDisplay('Les dates de début et de fin sont obligatoires');
    };
}

function QualifTrxLaneDayGet(ActionBtnId, Icon, IsMargin, DateStringStart, DateStringEnd, ObsTickId) {

    //Spin
    ActionSpin(ActionBtnId, IsMargin);

    //init
    ParamMessageReset();

    var PatternTable = 'QualifTrxLaneDay';
    var PatternTableId = PatternTable + 'TableId'
    var PatternTableReportId = PatternTable + 'TableReportId';

    $('#' + PatternTableId).DataTable().destroy();
    $('#' + PatternTableId).DataTable({
        "dom": 'Bfrtip',
        "buttons": [
            'excel'
        ],
        //"dom": 'Bfrtip',
        //"buttons": {
        //    buttons: [
        //        {
        //            text: 'PDF',
        //            action: function (e, dt, node, config) {
        //                var AxleId = '0';
        //                var SiteId = '0';
        //                var BagContainerId = '0';
        //                var StationNumber = '0';
        //                QualifTrxLaneDayExport(AxleId, SiteId, BagContainerId, StationNumber, DateStringStart, DateStringEnd, 'PDF');
        //            }
        //        },
        //        {
        //            text: 'Excel',
        //            action: function (e, dt, node, config) {
        //                var AxleId = '0';
        //                var SiteId = '0';
        //                var BagContainerId = '0';
        //                var StationNumber = '0';
        //                QualifTrxLaneStationExport(AxleId, SiteId, BagContainerId, StationNumber, DateStringStart, DateStringEnd, 'Excel');
        //            }
        //        }
        //    ]
        //},
        "initComplete": function (settings, json) {
            ActionBtnIconSet(ActionBtnId, Icon);
            ShowReport(PatternTableReportId);
        },
        "ajax": {
            "url": "/Qualif/QualifTrxLaneDayGet",
            "type": "GET",
            "datatype": "json",
            "data": {
                DateStringStart: DateStringStart,
                DateStringEnd: DateStringEnd,
                ObsTickId: ObsTickId
            }
        },
        "columns": [
            { "data": "" },//0

            { "data": "ObsTickIdTotal" },//1
            { "data": "ObsTickIdToQualify" },//2
            { "data": "ObsTickIdQualified" },//3
            { "data": "" },//4

            { "mData": function vehicle(data, type, dataToSet) { return GetDigits(data.Day, 2) + GetDigits(data.Month, 2) + data.Year; } },//5 Détail
        ],
        "columnDefs": [
            { "width": "3%", "className": "text-center", "targets": 0 },

            { "width": "3%", "className": "text-right", "targets": 1 },
            { "width": "3%", "className": "text-right", "targets": 2 },
            { "width": "3%", "className": "text-right", "targets": 3 },
            { "width": "3%", "className": "text-right", "targets": 4 },

            { "width": "3%", "className": "text-center", "targets": 5 },

            { "targets": 0, "render": function (data, type, row) { return DataTableCertifiedInfoGet(row['IsCertified']) + ' ' + DataTableDateValueFromRowGet(row); } },
            
            { "targets": 1, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },  
            { "targets": 2, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 3, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 4, "render": function (data, type, row) { return DataTablePercentageTwoThresholdsGet(row['ObsTickIdQualified'], row['ObsTickIdToQualify'], 2, 2, 5); } },
                       
            { "targets": 5, "render": function (data, type, row) { return DataTableButtonGet('QualifTrxLaneRegionSearch', data, '\'' + data + '\'', '', 'dt-btn-cl gc-bc1-cl', 'fas fa-eye btn-icon-cl gc-c1-cl', '') } },

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
        "iDisplayLength": 10,
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

            DataTableTotalIntGet(api, intVal, 1);
            DataTableTotalIntGet(api, intVal, 2);    
            DataTableTotalIntGet(api, intVal, 3); 
            DataTableTotalPercentageGet(api, intVal, 3, 2, 4);                   
        }
    });
}

function QualifTrxLaneStationSearch(Id) {

    var ActionBtnId = new String('QualifTrxLaneStationSearchBtnId' + Id);
    $('#' + ActionBtnId).find('span').attr('class', 'fa fa-spinner fa-spin btn-icon-cl gc-c1-cl');
    var Icon = 'fas fa-eye btn-icon-cl gc-c1-cl';

    //hide some reports
    HideReport('QualifTrxLaneStation' + 'TableReportId');
    HideReport('QualifTrxLaneLane' + 'TableReportId');
    HideReport('QualifTrxLaneHour' + 'TableReportId');
    HideReport('QualifTrxLane' + 'TableReportId');
    HideReport('QualifPath' + 'TableReportId');
    HideReport('CertFilePlan' + 'TableReportId');

    var DateStringStart = new String(Id).substr(0, 8);
    var DateStringEnd = new String(Id).substr(0, 8);
    var RegionId = new String(Id).substr(8, 2);
    var LSId = '0';
    var StationNumber = '0';
    var IsMargin = false;
    QualifTrxLaneStationGet(ActionBtnId, Icon, IsMargin, RegionId, LSId, StationNumber, DateStringStart, DateStringEnd)
}

function QualifTrxLaneLaneDisplay() {
    var ActionBtnId = 'ParamActionBtnId0';
    var Icon = 'fas fa-eye btn-icon-m-cl gc-c1-cl';

    var SiteId = GetElementValue('SiteId');
    var BagContainerId = GetElementValue('BagContainerId');
    var StationNumber = GetElementValue('StationNumberId');
    var LaneName = GetElementValue('LaneNameId');
    var DateStringStart = GetDateStringFromDatePicker('DateStartId');
    var DateStringEnd = GetDateStringFromDatePicker('DateEndId');

    //hide some reports
    HideReport('QualifTrxLaneDay' + 'TableReportId');
    HideReport('QualifTrxLaneStation' + 'TableReportId');
    HideReport('CertFilePlan' + 'TableReportId');

    if (DateStringStart != '' && DateStringEnd != '' && StationNumber != '0') {
        QualifTrxLaneLaneGet(ActionBtnId, Icon, SiteId, BagContainerId, StationNumber, LaneName, DateStringStart, DateStringEnd);
    }
    else {
        ParamMessageErrorDisplay('Les dates de début et de fin, la gare sont obligatoires');
    };
}


function ParamPresetsGet() {
    var PresetId = GetElementValue('PresetId');

    if (PresetId == '0') {

    }
    if (PresetId == '01') {

        //global
        DropDownListSet('BillingId', '01');
        DropDownListSet('CategoryId', '0');
        ElementBooleanSet('IsShortId', false);
        ElementBooleanSet('IsPathOnlyId', true);
        ElementBooleanSet('IsPathQualifiedId', false);

        //out
        DhmValueStartDefaultSet('DhmStartId', 2);
        DhmValueEndDefaultSet('DhmEndId', 2);
        DropDownListSet('RegionId', '01');
        DropDownListSet('LSId', '76');
        DropDownListSet('StationNumberId', '08');
        DropDownListSet('LaneNameId', '0');
        ElementBooleanSet('IsImageId', true);
        ElementBooleanSet('IsImageIapiId', true);

        //In
        DhmValueStartDefaultSet('DhmStartIdO', 3);
        DhmValueEndDefaultSet('DhmEndIdO', 2);
        DropDownListSet('RegionIdO', '01');
        DropDownListSet('LSIdO', '76');
        DropDownListSet('StationNumberIdO', '09');
        DropDownListSet('LaneNameIdO', '0');
        ElementBooleanSet('IsImageIapiOId', true);

        //Obs
        DropDownListSet('ObsPassId', '0');
        DropDownListSet('ObsTickId', 'P');
        DropDownListSet('ObsMpId', '0');

        HideReport('SerialNumberId' + 'Parent'); ElementInputSet('SerialNumberId', '');

        HideParent('IsCyclopeClassDiscId'); ElementBooleanSet('IsCyclopeClassDiscId', false);
        HideParent('IsCyclopePathDiscId'); ElementBooleanSet('IsCyclopePathDiscId', false);
    }
    if (PresetId == '02') {
        //global
        DropDownListSet('BillingId', '01');
        DropDownListSet('CategoryId', '0');
        ElementBooleanSet('IsShortId', false);
        ElementBooleanSet('IsPathOnlyId', true);
        ElementBooleanSet('IsPathQualifiedId', false);

        //out
        DhmValueStartDefaultSet('DhmStartId', 2);
        DhmValueEndDefaultSet('DhmEndId', 2);
        DropDownListSet('RegionId', '01');
        DropDownListSet('LSId', '76');
        DropDownListSet('StationNumberId', '08');
        DropDownListSet('LaneNameId', '0');
        ElementBooleanSet('IsImageId', true);
        ElementBooleanSet('IsImageIapiId', true);

        //In
        DhmValueStartDefaultSet('DhmStartIdO', 3);
        DhmValueEndDefaultSet('DhmEndIdO', 2);
        DropDownListSet('RegionIdO', '01');
        DropDownListSet('LSIdO', '76');
        DropDownListSet('StationNumberIdO', '09');
        DropDownListSet('LaneNameIdO', '0');
        ElementBooleanSet('IsImageIapiOId', true);

        //Obs
        DropDownListSet('ObsPassId', '0');
        DropDownListSet('ObsTickId', 'D');
        DropDownListSet('ObsMpId', '0');

        HideReport('SerialNumberId' + 'Parent'); ElementInputSet('SerialNumberId', '');
        HideParent('IsCyclopeClassDiscId'); ElementBooleanSet('IsCyclopeClassDiscId', false);
        HideParent('IsCyclopePathDiscId'); ElementBooleanSet('IsCyclopePathDiscId', false);
    }
    if (PresetId == '03') {
        //global
        DropDownListSet('BillingId', '40');
        DropDownListSet('CategoryId', '0');
        ElementBooleanSet('IsShortId', true);
        ElementBooleanSet('IsPathOnlyId', false);
        ElementBooleanSet('IsPathQualifiedId', false);

        //out
        DhmValueStartDefaultSet('DhmStartId', 2);
        DhmValueEndDefaultSet('DhmEndId', 2);
        DropDownListSet('RegionId', '01');
        DropDownListSet('LSId', '76');
        DropDownListSet('StationNumberId', '76');
        DropDownListSet('LaneNameId', '0');
        ElementBooleanSet('IsImageId', true);
        ElementBooleanSet('IsImageIapiId', false);

        //In
        DhmValueStartDefaultSet('DhmStartIdO', 3);
        DhmValueEndDefaultSet('DhmEndIdO', 2);
        DropDownListSet('RegionIdO', '01');
        DropDownListSet('LSIdO', '76');
        DropDownListSet('StationNumberIdO', '0');
        DropDownListSet('LaneNameIdO', '0');
        ElementBooleanSet('IsImageIapiOId', false);

        //Obs
        DropDownListSet('ObsPassId', '0');
        DropDownListSet('ObsTickId', '0');
        DropDownListSet('ObsMpId', '26');

        HideReport('SerialNumberId' + 'Parent'); ElementInputSet('SerialNumberId', '');
        HideParent('IsCyclopeClassDiscId'); ElementBooleanSet('IsCyclopeClassDiscId', false);
        HideParent('IsCyclopePathDiscId'); ElementBooleanSet('IsCyclopePathDiscId', false);
    }
    if (PresetId == '04') {//Loyalty

        //global
        ShowParent('BillingId'); DropDownListSet('BillingId', '40');
        ShowParent('CategoryId'); DropDownListSet('CategoryId', '01');
        HideParent('IsShortId');
        HideParent('IsIapiOnlyId');
        HideParent('IsPathOnlyId');
        HideParent('IsPathQualifiedId');
        ShowParent('ClientTypeId');

        //sortie
        //DateValueDefaultFirstDaySet('DhmStartId');
        ShowParent('DhmStartId'); DhmValueStartDefaultSet('DhmStartId', 10);
        ShowParent('DhmEndId'); DhmValueEndDefaultSet('DhmEndId', 1);
        DropDownListSet('RegionId', '01');
        DropDownListSet('LSId', '76');
        ShowParent('StationNumberId'); DropDownListSet('StationNumberId', '04');
        HideParent('LaneNameId');
        HideParent('IsImageId');

        HideParent('LicensePlateId');
        HideParent('ReadTickNumberId');
        HideParent('ProductNumberId');
        HideParent('IsImageId');
        HideParent('IsImageIapiId');

        //In  
        //DateValueDefaultFirstDaySet('DhmStartIdO');
        HideParent('DhmStartIdO'); DhmValueStartDefaultSet('DhmStartIdO', 10);
        HideParent('DhmEndIdO'); DhmValueEndDefaultSet('DhmEndIdO', 1);
        DropDownListSet('RegionIdO', '01');
        DropDownListSet('LSIdO', '76');
        HideParent('StationNumberIdO'); DropDownListSet('StationNumberIdO', '0');
        HideParent('LaneNameIdO'); DropDownListSet('LaneNameIdO', '0');
        HideParent('IsImageIapiOId'); ElementBooleanSet('IsImageIapiOId', false);

        HideParent('LicensePlateOId');
        HideParent('ReadTickNumberOId');
        HideParent('ProductNumberOId');
        HideParent('IsImageOId');
        HideParent('IsImageIapiOId');

        //Obs
        HideParent('ObsPassId');
        HideParent('ObsTickId');
        HideParent('ObsMpId');

        HideParent('IsConvenientContextOId');
        HideParent('IsConvenientIapiOId');
        HideParent('IsConvenientContextId');
        HideParent('IsConvenientIapiId');
        HideParent('IsConvenientClassId');

        HideReport('SerialNumberId' + 'Parent'); ElementInputSet('SerialNumberId', '');
        HideParent('IsCyclopeClassDiscId'); ElementBooleanSet('IsCyclopeClassDiscId', false);
        HideParent('IsCyclopePathDiscId'); ElementBooleanSet('IsCyclopePathDiscId', false);
    }

    if (PresetId == '05') {//Echantilon 07-08

        //global
        ShowParent('AxleId'); DropDownListSet('AxleId', 'A1');
        ShowParent('BillingId'); DropDownListSet('BillingId', '40');
        ShowParent('CategoryId'); DropDownListSet('CategoryId', '01');
        HideParent('IsShortId'); ElementBooleanSet('IsShortId', true);
        HideParent('IsIapiOnlyId'); ElementBooleanSet('IsIapiOnlyId', false);
        ShowParent('IsPathOnlyId'); ElementBooleanSet('IsPathOnlyId', false);
        ShowParent('IsPathQualifiedId'); ElementBooleanSet('IsPathQualifiedId', false);
        HideParent('ClientTypeId');

        //sortie
        ShowParent('DhmStartId'); DhmValue12Set('DhmStartId', 2021, 11, 2, 10, 0);
        ShowParent('DhmEndId'); DhmValue12Set('DhmEndId', 2021, 11, 2, 10, 1);
        DropDownListSet('RegionId', '01');
        DropDownListSet('LSId', '76');
        ShowParent('StationNumberId'); DropDownListSet('StationNumberId', '08');
        ShowParent('LaneNameId'); DropDownListSet('LaneNameId', 'S07');
        ShowParent('IsImageId'); ElementBooleanSet('IsImageId', true);

        ShowParent('LicensePlateId');
        ShowParent('ReadTickNumberId');
        ShowParent('ProductNumberId');
        ShowParent('IsImageId'); ElementBooleanSet('IsImageId', true);
        ShowParent('IsImageIapiId'); ElementBooleanSet('IsImageIapiId', false);

        //In  
        //DateValueDefaultFirstDaySet('DhmStartIdO');
        ShowParent('DhmStartIdO'); DhmValue12Set('DhmStartIdO', 2021, 11, 1, 0, 0);
        ShowParent('DhmEndIdO'); DhmValue12Set('DhmEndIdO', 2021, 11, 2, 23, 59);
        DropDownListSet('RegionIdO', '01');
        DropDownListSet('LSIdO', '76');
        ShowParent('StationNumberIdO'); DropDownListSet('StationNumberIdO', '0');
        ShowParent('LaneNameIdO'); DropDownListSet('LaneNameIdO', '0');
        ShowParent('IsImageIapiOId'); ElementBooleanSet('IsImageIapiOId', false);

        ShowParent('LicensePlateOId');
        ShowParent('ReadTickNumberOId');
        ShowParent('ProductNumberOId');
        ShowParent('IsImageOId'); ElementBooleanSet('IsImageOId', false);
        ShowParent('IsImageIapiOId'); ElementBooleanSet('IsImageIapiOId', false);

        //Obs
        ShowParent('ObsPassId'); DropDownListSet('ObsPassId', '0');
        ShowParent('ObsTickId'); DropDownListSet('ObsTickId', '0');
        ShowParent('ObsMpId'); DropDownListSet('ObsMpId', '0');

        HideParent('IsConvenientContextOId'); ElementBooleanSet('IsConvenientContextOId', false);
        HideParent('IsConvenientIapiOId'); ElementBooleanSet('IsConvenientIapiOId', false);
        HideParent('IsConvenientContextId'); ElementBooleanSet('IsConvenientContextId', false);
        HideParent('IsConvenientIapiId'); ElementBooleanSet('IsConvenientIapiId', false);
        HideParent('IsConvenientClassId'); ElementBooleanSet('IsConvenientClassId', false);

        HideReport('SerialNumberId' + 'Parent'); ElementInputSet('SerialNumberId', '');
        HideParent('IsCyclopeClassDiscId'); ElementBooleanSet('IsCyclopeClassDiscId', false);
        HideParent('IsCyclopePathDiscId'); ElementBooleanSet('IsCyclopePathDiscId', false);
    }


    if (PresetId == '06') {//Labelisation

        //global
        HideParent('AxleId'); DropDownListSet('AxleId', '0');
        HideParent('BillingId'); DropDownListSet('BillingId', '0');
        ShowParent('CategoryId'); DropDownListSet('CategoryId', '03'); ElementDisable('CategoryId');

        HideParent('IsContextOnlyId'); ElementBooleanSet('IsContextOnlyId', false);
        HideParent('IsIapiOnlyId'); ElementBooleanSet('IsIapiOnlyId', false);
        HideParent('IsPathOnlyId'); ElementBooleanSet('IsPathOnlyId', false);
        ShowParent('IsSortieOnlyId'); ElementBooleanSet('IsSortieOnlyId', true);

        HideParent('IsPathQualifiedId'); ElementBooleanSet('IsPathQualifiedId', false);

        ShowParent('IsLabelId'); ElementBooleanSet('IsLabelId', true);
        HideParent('IsCyclopeClassifyId'); ElementBooleanSet('IsCyclopeClassifyId', false);
        HideParent('IsCyclopePathId'); ElementBooleanSet('IsCyclopePathId', false);

        HideParent('ClientTypeId');

        ShowParent('OctalCodeId'); DropDownListSet('OctalCodeId', '77');

        //sortie
        ShowParent('DhmStartId'); DhmValue12Set('DhmStartId', 2021, 11, 19, 0, 0);
        ShowParent('DhmEndId'); DhmValue12Set('DhmEndId', 2021, 11, 19, 23, 59);
        SDropDownListSet('RegionId', '01');
        DropDownListSet('LSId', '76');
        ShowParent('StationNumberId'); DropDownListSet('StationNumberId', '14');
        ShowParent('LaneNameId'); DropDownListSet('LaneNameId', '0');
        ShowParent('IsImageId'); ElementBooleanSet('IsImageId', true);

        HideParent('LicensePlateId'); ElementInputSet('LicensePlateId', '');
        HideParent('ReadTickNumberId'); ElementInputSet('ReadTickNumberId', '');
        HideParent('ProductNumberId'); ElementInputSet('ProductNumberId', '');

        HideParent('IsImageIapiId'); ElementBooleanSet('IsImageIapiId', false);

        //In  
        //DateValueDefaultFirstDaySet('DhmStartIdO');
        HideParent('DhmStartIdO'); DhmValue12Set('DhmStartIdO', 1900, 1, 1, 0, 0);
        HideParent('DhmEndIdO'); DhmValue12Set('DhmEndIdO', 2023, 12, 1, 23, 59);
        DropDownListSet('RegionIdO', '01');
        DropDownListSet('LSIdO', '76');
        HideParent('StationNumberIdO'); DropDownListSet('StationNumberIdO', '0');
        HideParent('LaneNameIdO'); DropDownListSet('LaneNameIdO', '0');
        HideParent('IsImageIapiOId'); ElementBooleanSet('IsImageIapiOId', false);

        HideParent('LicensePlateOId'); ElementInputSet('LicensePlateOId', '');
        HideParent('ReadTickNumberOId'); ElementInputSet('ReadTickNumberOId', '');
        HideParent('ProductNumberOId'); ElementInputSet('ProductNumberOId', '');

        HideParent('IsImageOId'); ElementBooleanSet('IsImageOId', false);
        HideParent('IsImageIapiOId'); ElementBooleanSet('IsImageIapiOId', false);

        //Obs
        HideParent('ObsPassId'); DropDownListSet('ObsPassId', '0');
        HideParent('ObsTickId'); DropDownListSet('ObsTickId', '0');
        HideParent('ObsMpId'); DropDownListSet('ObsMpId', '0');

        HideParent('IsConvenientContextOId'); ElementBooleanSet('IsConvenientContextOId', false);
        HideParent('IsConvenientIapiOId'); ElementBooleanSet('IsConvenientIapiOId', false);
        HideParent('IsConvenientContextId'); ElementBooleanSet('IsConvenientContextId', false);
        HideParent('IsConvenientIapiId'); ElementBooleanSet('IsConvenientIapiId', false);
        HideParent('IsConvenientClassId'); ElementBooleanSet('IsConvenientClassId', false);

        HideReport('SerialNumberId' + 'Parent'); ElementInputSet('SerialNumberId', '');
        HideParent('IsCyclopeClassDiscId'); ElementBooleanSet('IsCyclopeClassDiscId', false);
        HideParent('IsCyclopePathDiscId'); ElementBooleanSet('IsCyclopePathDiscId', false);
    }
    if (PresetId == '07') {//Discordances de classe

        //global
        HideParent('AxleId'); DropDownListSet('AxleId', '0');
        HideParent('BillingId'); DropDownListSet('BillingId', '0');
        HideParent('CategoryId'); DropDownListSet('CategoryId', '0');

        HideParent('IsContextOnlyId'); ElementBooleanSet('IsContextOnlyId', true);
        HideParent('IsIapiOnlyId'); ElementBooleanSet('IsIapiOnlyId', false);
        HideParent('IsPathOnlyId'); ElementBooleanSet('IsPathOnlyId', false);
        HideParent('IsSortieOnlyId'); ElementBooleanSet('IsSortieOnlyId', true);

        HideParent('IsPathQualifiedId'); ElementBooleanSet('IsPathQualifiedId', false);

        HideParent('IsLabelId'); ElementBooleanSet('IsLabelId', false);
        HideParent('IsCyclopeClassifyId'); ElementBooleanSet('IsCyclopeClassifyId', false);
        HideParent('IsCyclopePathId'); ElementBooleanSet('IsCyclopePathId', false);

        HideParent('ClientTypeId');

        HideParent('OctalCodeId'); DropDownListSet('OctalCodeId', '0');
        

        //sortie
        ShowParent('DhmStartId'); DhmValue12Set('DhmStartId', 2022, 2, 2, 0, 0);
        ShowParent('DhmEndId'); DhmValue12Set('DhmEndId', 2022, 2, 2, 23, 59);
        DropDownListSet('RegionIdO', '01');
        DropDownListSet('LSIdO', '76');
        ShowParent('StationNumberId'); DropDownListSet('StationNumberId', '76');
        ShowParent('LaneNameId'); DropDownListSet('LaneNameId', '0');
        HideParent('IsImageId'); ElementBooleanSet('IsImageId', false);

        ShowParent('LicensePlateId'); ElementInputSet('LicensePlateId', '');
        HideParent('ReadTickNumberId'); ElementInputSet('ReadTickNumberId', '');
        HideParent('ProductNumberId'); ElementInputSet('ProductNumberId', '');

        HideParent('IsImageIapiId'); ElementBooleanSet('IsImageIapiId', false);
        ShowParent('SerialNumberId'); ElementInputSet('SerialNumberId', '');

        //In  
        //DateValueDefaultFirstDaySet('DhmStartIdO');
        HideParent('DhmStartIdO'); DhmValue12Set('DhmStartIdO', 1900, 1, 1, 0, 0);
        HideParent('DhmEndIdO'); DhmValue12Set('DhmEndIdO', 2040, 12, 1, 23, 59);
        DropDownListSet('RegionIdO', '01');
        DropDownListSet('LSIdO', '76');
        HideParent('StationNumberIdO'); DropDownListSet('StationNumberIdO', '0');
        HideParent('LaneNameIdO'); DropDownListSet('LaneNameIdO', '0');
        HideParent('IsImageIapiOId'); ElementBooleanSet('IsImageIapiOId', false);

        HideParent('LicensePlateOId'); ElementInputSet('LicensePlateOId', '');
        HideParent('ReadTickNumberOId'); ElementInputSet('ReadTickNumberOId', '');
        HideParent('ProductNumberOId'); ElementInputSet('ProductNumberOId', '');
        

        HideParent('IsImageOId'); ElementBooleanSet('IsImageOId', false);
        HideParent('IsImageIapiOId'); ElementBooleanSet('IsImageIapiOId', false);

        //Obs
        HideParent('ObsPassId'); DropDownListSet('ObsPassId', '0');
        HideParent('ObsTickId'); DropDownListSet('ObsTickId', '0');
        HideParent('ObsMpId'); DropDownListSet('ObsMpId', '0');

        HideParent('IsConvenientContextOId'); ElementBooleanSet('IsConvenientContextOId', false);
        HideParent('IsConvenientIapiOId'); ElementBooleanSet('IsConvenientIapiOId', false);
        HideParent('IsConvenientContextId'); ElementBooleanSet('IsConvenientContextId', false);
        HideParent('IsConvenientIapiId'); ElementBooleanSet('IsConvenientIapiId', false);
        HideParent('IsConvenientClassId'); ElementBooleanSet('IsConvenientClassId', false);

        HideParent('IsCyclopeClassDiscId'); ElementBooleanSet('IsCyclopeClassDiscId', false);
        HideParent('IsCyclopePathDiscId'); ElementBooleanSet('IsCyclopePathDiscId', false);
    }

    if (PresetId == '08') {//Classe labélisée

        //global
        HideParent('AxleId'); DropDownListSet('AxleId', '0');
        HideParent('BillingId'); DropDownListSet('BillingId', '0');
        HideParent('CategoryId'); DropDownListSet('CategoryId', '0');

        ShowParent('IsContextOnlyId'); ElementBooleanSet('IsContextOnlyId', true);
        HideParent('IsIapiOnlyId'); ElementBooleanSet('IsIapiOnlyId', false);
        HideParent('IsPathOnlyId'); ElementBooleanSet('IsPathOnlyId', false);
        ShowParent('IsSortieOnlyId'); ElementBooleanSet('IsSortieOnlyId', true);

        HideParent('IsPathQualifiedId'); ElementBooleanSet('IsPathQualifiedId', false);

        ShowParent('IsLabelId'); ElementBooleanSet('IsLabelId', true);
        HideParent('IsCyclopeClassifyId'); ElementBooleanSet('IsCyclopeClassifyId', false);
        HideParent('IsCyclopePathId'); ElementBooleanSet('IsCyclopePathId', false);

        HideParent('ClientTypeId');

        ShowParent('IsLabeledId'); ElementBooleanSet('IsLabeledId', true);

        HideParent('OctalCodeId'); DropDownListSet('OctalCodeId', '0');

        //sortie
        ShowParent('DhmStartId'); DhmValue12Set('DhmStartId', 2021, 12, 1, 10, 0);
        ShowParent('DhmEndId'); DhmValue12Set('DhmEndId', 2021, 12, 1, 10, 15);
        DropDownListSet('RegionId', '01');
        DropDownListSet('LSId', '76');
        ShowParent('StationNumberId'); DropDownListSet('StationNumberId', '14');
        ShowParent('LaneNameId'); DropDownListSet('LaneNameId', '0');
        HideParent('IsImageId'); ElementBooleanSet('IsImageId', false);

        HideParent('LicensePlateId'); ElementInputSet('LicensePlateId', '');
        HideParent('ReadTickNumberId'); ElementInputSet('ReadTickNumberId', '');
        HideParent('ProductNumberId'); ElementInputSet('ProductNumberId', '');
        HideParent('SerialNumberId'); ElementInputSet('SerialNumberId', '');

        ShowParent('IsImageIapiId'); ElementBooleanSet('IsImageIapiId', false);

        //In  
        //DateValueDefaultFirstDaySet('DhmStartIdO');
        HideParent('DhmStartIdO'); DhmValue12Set('DhmStartIdO', 1900, 1, 1, 0, 0);
        HideParent('DhmEndIdO'); DhmValue12Set('DhmEndIdO', 2040, 12, 1, 23, 59);
        DropDownListSet('RegionIdO', '01');
        DropDownListSet('LSIdO', '76');
        HideParent('StationNumberIdO'); DropDownListSet('StationNumberIdO', '0');
        HideParent('LaneNameIdO'); DropDownListSet('LaneNameIdO', '0');
        HideParent('IsImageIapiOId'); ElementBooleanSet('IsImageIapiOId', false);

        HideParent('LicensePlateOId'); ElementInputSet('LicensePlateOId', '');
        HideParent('ReadTickNumberOId'); ElementInputSet('ReadTickNumberOId', '');
        HideParent('ProductNumberOId'); ElementInputSet('ProductNumberOId', '');

        HideParent('IsImageOId'); ElementBooleanSet('IsImageOId', false);
        HideParent('IsImageIapiOId'); ElementBooleanSet('IsImageIapiOId', false);

        //Obs
        HideParent('ObsPassId'); DropDownListSet('ObsPassId', '0');
        HideParent('ObsTickId'); DropDownListSet('ObsTickId', '0');
        HideParent('ObsMpId'); DropDownListSet('ObsMpId', '0');

        HideParent('IsConvenientContextOId'); ElementBooleanSet('IsConvenientContextOId', false);
        HideParent('IsConvenientIapiOId'); ElementBooleanSet('IsConvenientIapiOId', false);
        HideParent('IsConvenientContextId'); ElementBooleanSet('IsConvenientContextId', false);
        HideParent('IsConvenientIapiId'); ElementBooleanSet('IsConvenientIapiId', false);
        HideParent('IsConvenientClassId'); ElementBooleanSet('IsConvenientClassId', false);

        HideParent('IsCyclopeClassDiscId'); ElementBooleanSet('IsCyclopeClassDiscId', false);
        HideParent('IsCyclopePathDiscId'); ElementBooleanSet('IsCyclopePathDiscId', false);
    }
    if (PresetId == '09') {//Cyclope - Discordances de classe

        //global
        HideParent('AxleId'); DropDownListSet('AxleId', '0');
        HideParent('BillingId'); DropDownListSet('BillingId', '0');
        HideParent('CategoryId'); DropDownListSet('CategoryId', '0');

        ShowParent('IsContextOnlyId'); ElementBooleanSet('IsContextOnlyId', true);
        HideParent('IsIapiOnlyId'); ElementBooleanSet('IsIapiOnlyId', false);
        HideParent('IsPathOnlyId'); ElementBooleanSet('IsPathOnlyId', false);
        ShowParent('IsSortieOnlyId'); ElementBooleanSet('IsSortieOnlyId', true);

        HideParent('IsPathQualifiedId'); ElementBooleanSet('IsPathQualifiedId', false);

        ShowParent('IsLabelId'); ElementBooleanSet('IsLabelId', true);
        ShowParent('IsCyclopeClassDiscId'); ElementBooleanSet('IsCyclopeClassDiscId', true);
        HideParent('IsCyclopePathDiscId'); ElementBooleanSet('IsCyclopePathDiscId', false);

        HideParent('ClientTypeId');

        ShowParent('IsLabeledId'); ElementBooleanSet('IsLabeledId', true);

        HideParent('OctalCodeId'); DropDownListSet('OctalCodeId', '0');

        //sortie
        ShowParent('DhmStartId'); DhmValue12Set('DhmStartId', 2021, 12, 1, 0, 0);
        ShowParent('DhmEndId'); DhmValue12Set('DhmEndId', 2021, 12, 1, 0, 59);
        DropDownListSet('RegionId', '0');
        DropDownListSet('LSId', '0');
        ShowParent('StationNumberId'); DropDownListSet('StationNumberId', '0');
        ShowParent('LaneNameId'); DropDownListSet('LaneNameId', '0');
        HideParent('IsImageId'); ElementBooleanSet('IsImageId', false);

        HideParent('LicensePlateId'); ElementInputSet('LicensePlateId', '');
        HideParent('ReadTickNumberId'); ElementInputSet('ReadTickNumberId', '');
        HideParent('ProductNumberId'); ElementInputSet('ProductNumberId', '');
        HideParent('SerialNumberId'); ElementInputSet('SerialNumberId', '');

        HideParent('IsImageIapiId'); ElementBooleanSet('IsImageIapiId', false);

        //In  
        //DateValueDefaultFirstDaySet('DhmStartIdO');
        HideParent('DhmStartIdO'); DhmValue12Set('DhmStartIdO', 1900, 1, 1, 0, 0);
        HideParent('DhmEndIdO'); DhmValue12Set('DhmEndIdO', 2040, 12, 1, 23, 59);
        HideParent('RegionIdO'); DropDownListSet('RegionIdO', '0');
        HideParent('LSIdO'); DropDownListSet('LSIdO', '0');
        HideParent('StationNumberIdO'); DropDownListSet('StationNumberIdO', '0');
        HideParent('LaneNameIdO'); DropDownListSet('LaneNameIdO', '0');
        HideParent('IsImageIapiOId'); ElementBooleanSet('IsImageIapiOId', false);

        HideParent('LicensePlateIdO'); ElementInputSet('LicensePlateIdO', '');
        HideParent('ReadTickNumberIdO'); ElementInputSet('ReadTickNumberIdO', '');
        HideParent('ProductNumberIdO'); ElementInputSet('ProductNumberIdO', '');

        HideParent('IsImageOId'); ElementBooleanSet('IsImageOId', false);
        HideParent('IsImageIapiOId'); ElementBooleanSet('IsImageIapiOId', false);

        //Obs
        HideParent('ObsPassId'); DropDownListSet('ObsPassId', '0');
        HideParent('ObsTickId'); DropDownListSet('ObsTickId', '0');
        HideParent('ObsMpId'); DropDownListSet('ObsMpId', '0');

        HideParent('IsConvenientContextOId'); ElementBooleanSet('IsConvenientContextOId', false);
        HideParent('IsConvenientIapiOId'); ElementBooleanSet('IsConvenientIapiOId', false);
        HideParent('IsConvenientContextId'); ElementBooleanSet('IsConvenientContextId', false);
        HideParent('IsConvenientIapiId'); ElementBooleanSet('IsConvenientIapiId', false);
        HideParent('IsConvenientClassId'); ElementBooleanSet('IsConvenientClassId', false);

        ShowParent('IsCyclopeClassDiscId'); ElementBooleanSet('IsCyclopeClassDiscId', true);
        HideParent('IsCyclopePathDiscId'); ElementBooleanSet('IsCyclopePathDiscId', false);
    }
    if (PresetId == '10') {//Cyclope - Discordances de parcours

        HideParent('IsCyclopeClassDiscId'); ElementBooleanSet('IsCyclopeClassDiscId', false);
        ShowParent('IsCyclopePathDiscId'); ElementBooleanSet('IsCyclopePathDiscId', true);

        //global
        HideParent('AxleId'); DropDownListSet('AxleId', '0');
        HideParent('BillingId'); DropDownListSet('BillingId', '0');
        HideParent('CategoryId'); DropDownListSet('CategoryId', '0');

        ShowParent('IsContextOnlyId'); ElementBooleanSet('IsContextOnlyId', false);
        HideParent('IsIapiOnlyId'); ElementBooleanSet('IsIapiOnlyId', false);
        ShowParent('IsPathOnlyId'); ElementBooleanSet('IsPathOnlyId', true);
        ShowParent('IsSortieOnlyId'); ElementBooleanSet('IsSortieOnlyId', false);

        HideParent('IsPathQualifiedId'); ElementBooleanSet('IsPathQualifiedId', false);

        ShowParent('IsLabelId'); ElementBooleanSet('IsLabelId', false);
        HideParent('IsCyclopeClassifyId'); ElementBooleanSet('IsCyclopeClassifyId', false);
        HideParent('IsCyclopePathId'); ElementBooleanSet('IsCyclopePathId', false);

        HideParent('ClientTypeId');

        ShowParent('IsLabeledId'); ElementBooleanSet('IsLabeledId', false);

        HideParent('OctalCodeId'); DropDownListSet('OctalCodeId', '0');

        //sortie
        ShowParent('DhmStartId'); DhmValue12Set('DhmStartId', 2022, 1, 21, 0, 0);
        ShowParent('DhmEndId'); DhmValue12Set('DhmEndId', 2022, 1, 21, 10, 36);
        DropDownListSet('RegionId', '01');
        DropDownListSet('LSId', '08');
        ShowParent('StationNumberId'); DropDownListSet('StationNumberId', '08');
        ShowParent('LaneNameId'); DropDownListSet('LaneNameId', 'S11');
        HideParent('IsImageId'); ElementBooleanSet('IsImageId', false);

        HideParent('LicensePlateId'); ElementInputSet('LicensePlateId', '');
        HideParent('ReadTickNumberId'); ElementInputSet('ReadTickNumberId', '');
        HideParent('ProductNumberId'); ElementInputSet('ProductNumberId', '');
        HideParent('SerialNumberId'); ElementInputSet('SerialNumberId', '');

        ShowParent('IsImageIapiId'); ElementBooleanSet('IsImageIapiId', false);

        //In  
        //DateValueDefaultFirstDaySet('DhmStartIdO');
        HideParent('DhmStartIdO'); DhmValue12Set('DhmStartIdO', 1900, 1, 1, 0, 0);
        HideParent('DhmEndIdO'); DhmValue12Set('DhmEndIdO', 2040, 12, 1, 23, 59);
        DropDownListSet('RegionIdO', '0');
        DropDownListSet('LSIdO', '0');
        HideParent('StationNumberIdO'); DropDownListSet('StationNumberIdO', '0');
        HideParent('LaneNameIdO'); DropDownListSet('LaneNameIdO', '0');
        HideParent('IsImageIapiOId'); ElementBooleanSet('IsImageIapiOId', false);

        HideParent('LicensePlateIdO'); ElementInputSet('LicensePlateIdO', '');
        HideParent('ReadTickNumberIdO'); ElementInputSet('ReadTickNumberIdO', '');
        HideParent('ProductNumberIdO'); ElementInputSet('ProductNumberIdO', '');

        HideParent('IsImageOId'); ElementBooleanSet('IsImageOId', false);
        HideParent('IsImageIapiOId'); ElementBooleanSet('IsImageIapiOId', false);

        //Obs
        HideParent('ObsPassId'); DropDownListSet('ObsPassId', '0');
        HideParent('ObsTickId'); DropDownListSet('ObsTickId', '0');
        HideParent('ObsMpId'); DropDownListSet('ObsMpId', '0');

        HideParent('IsConvenientContextOId'); ElementBooleanSet('IsConvenientContextOId', false);
        HideParent('IsConvenientIapiOId'); ElementBooleanSet('IsConvenientIapiOId', false);
        HideParent('IsConvenientContextId'); ElementBooleanSet('IsConvenientContextId', false);
        HideParent('IsConvenientIapiId'); ElementBooleanSet('IsConvenientIapiId', false);
        HideParent('IsConvenientClassId'); ElementBooleanSet('IsConvenientClassId', false);

        
    }
}

function QualifImageAllSend() {
    //Set action button
    var ActionBtnId = 'ParamActionBtnId4';
    var Icon = 'far fa-paper-plane btn-icon-m-cl gc-c1-cl';

    var SiteId = GetElementValue('SiteId');
    var StationNumber = GetElementValue('StationNumberId');
    var LaneName = GetElementValue('LaneNameId');
    var DhmStringStart = GetDhmStringFromDatePicker('DhmStartId');
    var DhmStringEnd = GetDhmStringFromDatePicker('DhmEndId');

    var SiteIdO = GetElementValue('SiteIdO');
    var StationNumberO = GetElementValue('StationNumberIdO');
    var LaneNameO = GetElementValue('LaneNameIdO');
    var DhmStringStartO = GetDhmStringFromDatePicker('DhmStartIdO');
    var DhmStringEndO = GetDhmStringFromDatePicker('DhmEndIdO');

    var IsImage = new Boolean($("#IsImageId").is(":checked"));
    var IsImageIapi = new Boolean($("#IsImageIapiId").is(":checked"));

    var IsImageO = new Boolean($("#IsImageOId").is(":checked"));
    var IsImageIapiO = new Boolean($("#IsImageIapiOId").is(":checked"));

    var BillingId = GetElementValue('BillingId');
    var CategoryId = GetElementValue('CategoryId');

    var PresetId = GetElementValue('PresetId');
    var ObsPassId = GetElementValue('ObsPassId');
    var ObsTickId = GetElementValue('ObsTickId');
    var ObsMpId = GetElementValue('ObsMpId');

    var IsConvenientContext = new Boolean($("#IsConvenientContextId").is(":checked"));
    var IsConvenientIapi = new Boolean($("#IsConvenientIapiId").is(":checked"));
    var IsConvenientClass = new Boolean($("#IsConvenientClassId").is(":checked"));
    var IsPathQualified = new Boolean($("#IsPathQualifiedId").is(":checked"));

    var IsConvenientContextO = new Boolean($("#IsConvenientContextOId").is(":checked"));
    var IsConvenientIapiO = new Boolean($("#IsConvenientIapiOId").is(":checked"));

    var IsShort = new Boolean($("#IsShortId").is(":checked"));
    var IsIapiOnly = new Boolean($("#IsIapiOnlyId").is(":checked"));
    var IsPathOnly = new Boolean($("#IsPathOnlyId").is(":checked"));

    //if (DatastoreId != 0) {
    ParamMessageReset();

    //Spin
    ActionBtnSpin(ActionBtnId);
    var obj = {};

    obj.SiteId = SiteId;
    obj.StationNumber = StationNumber;
    obj.LaneName = LaneName;
    obj.DhmStringStart = DhmStringStart;
    obj.DhmStringEnd = DhmStringEnd;
    obj.IsImage = IsImage;
    obj.IsImageIapi = IsImageIapi;

    obj.SiteIdO = SiteIdO;
    obj.StationNumberO = StationNumberO;
    obj.LaneNameO = LaneNameO;
    obj.DhmStringStartO = DhmStringStartO;
    obj.DhmStringEndO = DhmStringEndO;
    obj.IsImageO = IsImageO;
    obj.IsImageIapiO = IsImageIapiO;

    obj.BillingId = BillingId;
    obj.CategoryId = CategoryId;

    obj.PresetId = PresetId;
    obj.ObsPassId = ObsPassId;
    obj.ObsTickId = ObsTickId;
    obj.ObsMpId = ObsMpId;

    obj.IsConvenientContext = IsConvenientContext;
    obj.IsConvenientIapi = IsConvenientIapi;
    obj.IsConvenientClass = IsConvenientClass;
    obj.IsPathQualified = IsPathQualified;

    obj.IsConvenientContextO = IsConvenientContextO;
    obj.IsConvenientIapiO = IsConvenientIapiO;

    obj.IsShort = IsShort;
    obj.IsIapiOnly = IsIapiOnly;
    obj.IsPathOnly = IsPathOnly;

    $.ajax({
        url: "/Qualif/QualifImageAllSend",
        method: "POST",
        data: JSON.stringify(obj),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            ActionBtnIconSet(ActionBtnId, Icon);
            //QualifTrxLaneDisplay();
        }
    });

    //}
    //else {
    //    ParamMessageErrorDisplay('Le champ Datastore est obligatoire')
    //}
}



function QualifImageBorneSearch(RowIdTrxLane) {
    var ActionBtnId = new String('QualifImageBorneSearch' + 'BtnId' + RowIdTrxLane);
    var Icon = 'fas fa-eye btn-icon-cl gc-c1-cl';

    $('#' + ActionBtnId).find('span').attr('class', 'fa fa-spinner fa-spin btn-icon-cl gc-c1-cl');

    QualifImageBorneGet(ActionBtnId, Icon, RowIdTrxLane);
}

function QualifImageBorneGet(ActionBtnId, Icon, RowIdTrxLane) {
    $('#' + ActionBtnId).find('span').attr('class', 'fa fa-spinner fa-spin btn-icon-cl gc-c1-cl');
    HideReport('QualifImageTableReportId');
    ParamMessageReset();

    //var CerTrxLaneHourFlag = 'none';
    var Responsive = true;
    //if (TableSource == 'CertTrxLaneHour') {
    //    Responsive = false;
    //}
    $('#QualifImageTableId').DataTable().destroy();
    $('#QualifImageTableId').DataTable({
        "initComplete": function (settings, json) {
            $('#' + ActionBtnId).find('span').attr('class', Icon);
            ShowReport('QualifImageTableReportId');
        },
        "ajax": {
            "url": "/Qualif/QualifImageBorneGet",
            "type": "GET",
            "datatype": "json",
            "data": {
                "RowIdTrxLane": RowIdTrxLane
            }
        },
        "columns": [
            { "data": "SiteId" }, //0
            { "data": "StationNumber" }, //1
            { "data": "LaneName" }, //2 
            { "data": "DhmValue" },//3

            { "data": "TrxNumber" }, //4
            { "data": "LicensePlate" }, //5

            { "data": "ImageName" },//6
            { "data": "ImagePath" },//7
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

            { "targets": 0, "render": function (data, type, row) { return data; } },
            { "targets": 1, "render": function (data, type, row) { return data; } },
            { "targets": 2, "render": function (data, type, row) { return data; } },
            { "targets": 3, "render": function (data, type, row) { return GetDateValueFromDataTableDate(data); } },

            { "targets": 4, "render": function (data, type, row) { return data; } },
            { "targets": 5, "render": function (data, type, row) { return data; } },

            { "targets": 6, "render": function (data, type, row) { return data; } },
            { "targets": 7, "render": function (data, type, row) { return QualifImageGet(data); } },
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
        "iDisplayLength": 20,
        "processing": false,
        "responsive": Responsive,
        "bFilter": true,
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

            //Total1 = api.column(8).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);
            //$(api.column(8).footer()).html(numFormat(Total1));

            //IntTotal1 = api.column(8).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);
            //IntTotal2 = api.column(9).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);

            //$(api.column(7).footer()).html(numFormat(DoubleTotal1));

            //$(api.column(9).footer()).html(numShortFormat(IntTotal2));
        }
    });
}

function CertLicensePlateIsCheckedGet(RowId, LicensePlate, IsChecked) {
    //alert(LicensePlate);
    if (LicensePlate != '' && LicensePlate != '               ' && LicensePlate != null) {
        var Id = RowId;
        var argument = RowId;
        var text = '';
        var BtnClass = 'dt-btn-cl gc-bc1-cl';
        var SpanClass = '';
        var TextClass = 'dt-text-cl';

        if (IsChecked) {
            SpanClass = 'fas fa-check btn-icon-cl gc-c1-cl';
        }
        else {
            SpanClass = 'fas fa-exclamation-triangle btn-icon-cl gc-c1-cl';
        }
        return DataTableButtonGet('CertLicensePlateIsCheckedCheck', Id, argument, text, BtnClass, SpanClass, TextClass);
    }
    else {
        return '';
    }
}


function CertLicensePlateIsCheckedCheck(Id) {

    var ActionBtnId = new String('CertLicensePlateIsCheckedCheck' + 'BtnId' + Id);

    //Spin
    ActionBtnSpin(ActionBtnId);

    var obj = {};
    obj.Id = Id;
    $.ajax({
        url: "/Cert/CertLicensePlateIsCheckedCheck",
        method: "POST",
        data: JSON.stringify(obj),
        contentType: "application/json; charset=utf-8",
        dataType: "text",
        async: true,
        success: function (data) {
            var IsChecked = data;
            if (IsChecked == 'True') {
                $('#' + ActionBtnId).find('span').attr('class', 'fas fa-check btn-icon-cl gc-c1-cl');
            }
            else {
                $('#' + ActionBtnId).find('span').attr('class', 'fas fa-exclamation-triangle btn-icon-cl gc-c1-cl');
            }
        }
    });
}

function QualifImageLaneGet(ActionBtnId, Icon, RowIdTrxLane) {
    $('#' + ActionBtnId).find('span').attr('class', 'fa fa-spinner fa-spin btn-icon-cl gc-c1-cl');
    HideReport('QualifImageTableReportId');
    ParamMessageReset();

    //var CerTrxLaneHourFlag = 'none';
    var Responsive = true;
    //if (TableSource == 'CertTrxLaneHour') {
    //    Responsive = false;
    //}
    $('#QualifImageTableId').DataTable().destroy();
    $('#QualifImageTableId').DataTable({
        "initComplete": function (settings, json) {
            $('#' + ActionBtnId).find('span').attr('class', Icon);
            ShowReport('QualifImageTableReportId');
        },
        "ajax": {
            "url": "/Qualif/QualifImageLaneGet",
            "type": "GET",
            "datatype": "json",
            "data": {
                "RowIdTrxLane": RowIdTrxLane
            }
        },
        "columns": [
            { "data": "SiteId" }, //0
            { "data": "StationNumber" }, //1
            { "data": "LaneName" }, //2 
            { "data": "DhmValue" },//3

            { "data": "TrxNumber" }, //4
            { "data": "LicensePlate" }, //5

            { "data": "ImageName" },//6
            { "data": "ImagePath" },//7
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

            { "targets": 0, "render": function (data, type, row) { return data; } },
            { "targets": 1, "render": function (data, type, row) { return data; } },
            { "targets": 2, "render": function (data, type, row) { return data; } },
            { "targets": 3, "render": function (data, type, row) { return GetDateValueFromDataTableDate(data); } },

            { "targets": 4, "render": function (data, type, row) { return data; } },
            { "targets": 5, "render": function (data, type, row) { return data; } },

            { "targets": 6, "render": function (data, type, row) { return data; } },
            { "targets": 7, "render": function (data, type, row) { return QualifImageGet(data); } },
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
        "iDisplayLength": 20,
        "processing": false,
        "responsive": Responsive,
        "bFilter": true,
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

            //Total1 = api.column(8).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);
            //$(api.column(8).footer()).html(numFormat(Total1));

            //IntTotal1 = api.column(8).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);
            //IntTotal2 = api.column(9).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);

            //$(api.column(7).footer()).html(numFormat(DoubleTotal1));

            //$(api.column(9).footer()).html(numShortFormat(IntTotal2));
        }
    });
}

function CertLicensePlateIsCheckedGet(RowId, LicensePlate, IsChecked) {
    //alert(LicensePlate);
    if (LicensePlate != '' && LicensePlate != '               ' && LicensePlate != null) {
        var Id = RowId;
        var argument = RowId;
        var text = '';
        var BtnClass = 'dt-btn-cl gc-bc1-cl';
        var SpanClass = '';
        var TextClass = 'dt-text-cl';

        if (IsChecked) {
            SpanClass = 'fas fa-check btn-icon-cl gc-c1-cl';
        }
        else {
            SpanClass = 'fas fa-exclamation-triangle btn-icon-cl gc-c1-cl';
        }
        return DataTableButtonGet('CertLicensePlateIsCheckedCheck', Id, argument, text, BtnClass, SpanClass, TextClass);
    }
    else {
        return '';
    }
}


function CertLicensePlateIsCheckedCheck(Id) {

    var ActionBtnId = new String('CertLicensePlateIsCheckedCheck' + 'BtnId' + Id);

    //Spin
    ActionBtnSpin(ActionBtnId);

    var obj = {};
    obj.Id = Id;
    $.ajax({
        url: "/Cert/CertLicensePlateIsCheckedCheck",
        method: "POST",
        data: JSON.stringify(obj),
        contentType: "application/json; charset=utf-8",
        dataType: "text",
        async: true,
        success: function (data) {
            var IsChecked = data;
            if (IsChecked == 'True') {
                $('#' + ActionBtnId).find('span').attr('class', 'fas fa-check btn-icon-cl gc-c1-cl');
            }
            else {
                $('#' + ActionBtnId).find('span').attr('class', 'fas fa-exclamation-triangle btn-icon-cl gc-c1-cl');
            }
        }
    });
}

function QualifImageLaneSearch(RowIdTrxLane) {
    var ActionBtnId = new String('QualifImageLaneSearch' + 'BtnId' + RowIdTrxLane);
    var Icon = 'fas fa-eye btn-icon-cl gc-c1-cl';

    $('#' + ActionBtnId).find('span').attr('class', 'fa fa-spinner fa-spin btn-icon-cl gc-c1-cl');

    QualifImageLaneGet(ActionBtnId, Icon, RowIdTrxLane);
}



//AllValidate
function QualifImageAllExport() {
    //Set action button
    var ActionBtnId = 'ParamActionBtnId3';
    var Icon = 'far fa-paper-plane btn-icon-m-cl gc-c1-cl';

    var SiteId = GetElementValue('SiteId');
    var StationNumber = GetElementValue('StationNumberId');
    var LaneName = GetElementValue('LaneNameId');
    var DhmStringStart = GetDhmStringFromDatePicker('DhmStartId');
    var DhmStringEnd = GetDhmStringFromDatePicker('DhmEndId');

    var SiteIdO = GetElementValue('SiteIdO');
    var StationNumberO = GetElementValue('StationNumberIdO');
    var LaneNameO = GetElementValue('LaneNameIdO');
    var DhmStringStartO = GetDhmStringFromDatePicker('DhmStartIdO');
    var DhmStringEndO = GetDhmStringFromDatePicker('DhmEndIdO');

    var IsImage = new Boolean($("#IsImageId").is(":checked"));
    var IsImageIapi = new Boolean($("#IsImageIapiId").is(":checked"));

    var IsImageO = new Boolean($("#IsImageOId").is(":checked"));
    var IsImageIapiO = new Boolean($("#IsImageIapiOId").is(":checked"));

    var BillingId = GetElementValue('BillingId');
    var CategoryId = GetElementValue('CategoryId');

    var PresetId = GetElementValue('PresetId');
    var ObsPassId = GetElementValue('ObsPassId');
    var ObsTickId = GetElementValue('ObsTickId');
    var ObsMpId = GetElementValue('ObsMpId');

    var IsConvenientContext = new Boolean($("#IsConvenientContextId").is(":checked"));
    var IsConvenientIapi = new Boolean($("#IsConvenientIapiId").is(":checked"));
    var IsConvenientClass = new Boolean($("#IsConvenientClassId").is(":checked"));
    var IsPathQualified = new Boolean($("#IsPathQualifiedId").is(":checked"));

    var IsConvenientContextO = new Boolean($("#IsConvenientContextOId").is(":checked"));
    var IsConvenientIapiO = new Boolean($("#IsConvenientIapiOId").is(":checked"));

    var IsShort = new Boolean($("#IsShortId").is(":checked"));
    var IsIapiOnly = new Boolean($("#IsIapiOnlyId").is(":checked"));
    var IsPathOnly = new Boolean($("#IsPathOnlyId").is(":checked"));

    //if (DatastoreId != 0) {
    ParamMessageReset();

    //Spin
    ActionBtnSpin(ActionBtnId);
    var obj = {};

    obj.SiteId = SiteId;
    obj.StationNumber = StationNumber;
    obj.LaneName = LaneName;
    obj.DhmStringStart = DhmStringStart;
    obj.DhmStringEnd = DhmStringEnd;
    obj.IsImage = IsImage;
    obj.IsImageIapi = IsImageIapi;

    obj.SiteIdO = SiteIdO;
    obj.StationNumberO = StationNumberO;
    obj.LaneNameO = LaneNameO;
    obj.DhmStringStartO = DhmStringStartO;
    obj.DhmStringEndO = DhmStringEndO;
    obj.IsImageO = IsImageO;
    obj.IsImageIapiO = IsImageIapiO;

    obj.BillingId = BillingId;
    obj.CategoryId = CategoryId;

    obj.PresetId = PresetId;
    obj.ObsPassId = ObsPassId;
    obj.ObsTickId = ObsTickId;
    obj.ObsMpId = ObsMpId;

    obj.IsConvenientContext = IsConvenientContext;
    obj.IsConvenientIapi = IsConvenientIapi;
    obj.IsConvenientClass = IsConvenientClass;
    obj.IsPathQualified = IsPathQualified;

    obj.IsConvenientContextO = IsConvenientContextO;
    obj.IsConvenientIapiO = IsConvenientIapiO;

    obj.IsShort = IsShort;
    obj.IsIapiOnly = IsIapiOnly;
    obj.IsPathOnly = IsPathOnly;

    $.ajax({
        url: "/Qualif/QualifImageAllExport",
        method: "POST",
        data: JSON.stringify(obj),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            ActionBtnIconSet(ActionBtnId, Icon);
            //QualifTrxLaneDisplay();
        }
    });

    //}
    //else {
    //    ParamMessageErrorDisplay('Le champ Datastore est obligatoire')
    //}
}


function QualifAllReportsHide() {
    // HideReport('HomeReportId');

    HideReport('ParamReportId');

    HideTableReport('QualifTrxLaneDay');
    HideTableReport('QualifTrxLaneRegion');
    HideTableReport('QualifTrxLaneStation');
    HideTableReport('QualifTrxLaneOd');
    HideTableReport('QualifTrxLaneLane');
    HideTableReport('QualifTrxLaneHour');

    HideTableReport('QualifObsMpDay');
    HideTableReport('QualifObsMpRegion');
    HideTableReport('QualifObsMpStation');
    HideTableReport('QualifObsMpOd');
    HideTableReport('QualifObsMpLane');

    HideTableReport('QualifObsPassDay');
    HideTableReport('QualifObsPassRegion');
    HideTableReport('QualifObsPassStation');
    HideTableReport('QualifObsPassOd');
    HideTableReport('QualifObsPassLane');

    HideTableReport('QualifTrxLane');
    HideTableReport('QualifTrxBorne');
    HideTableReport('QualifPath');
    HideTableReport('QualifImage');
    HideTableReport('QualifPathCarousel');

    HideTableReport('CertFilePlan');

    HideTableReport('QualifObsTickIdPPerfCumul');
    HideTableReport('QualifObsTickIdPPerfDay');
    HideTableReport('QualifCash');
    HideTableReport('QualifPerfLabel');

    HideTableReport('QualifOcc');

    HideTableReport('QualifObsTickIdPDay');
    HideTableReport('QualifObsTickIdPRegion');
    HideTableReport('QualifObsTickIdPStation');

    HideTableReport('QualifObsTickIdDScopeCumul');
    HideTableReport('QualifObsTickIdDDay');
    HideTableReport('QualifObsTickIdDRegion');
    HideTableReport('QualifObsTickIdDStation');
    HideTableReport('QualifObsTickIdDLaneDay');

    HideTableReport('QualifSearchRepeatByTagReport');
    HideTableReport('QualifSearchRepeatByTag');
    HideTableReport('QualifSearchRepeatByPlate');

    HideTableReport('QualifMatching');

    HideTableReport('QualifObsTickIdPDayHome');
    HideTableReport('QualifObsTickIdDDayHome');
    HideTableReport('TopBarFixHome');
    HideTableReport('TopBarHistoryHome');
    HideTableReport('QualifSearchRepeatByTagHome');
    HideTableReport('QualifSearchRepeatByPlateHome');
    HideTableReport('QualifObsTickIdDPerfDay');
    HideTableReport('QualifObsTickIdDPerfCumul');

    HideTableReport('QualifMinute');
    HideTableReport('QualifPlan');

    
    //Grid
    HideGridReport('Grid_0000');
    HideGridReport('Grid_0001');
    HideGridReport('Grid_0005');
    HideGridReport('Grid_0006');
    HideGridReport('Grid_0008');

    //Page
    HideReport('Page0_' + 'PageReportId');
}

function QualifAllParametersHide() {

    HideParent('SiteId');
    HideParent('LSId');
    HideParent('LSIdO');
    HideParent('BagContainerId');
    HideParent('StationNumberId');
    HideParent('LaneNameId');
    HideParent('BillingId');
    HideParent('CategoryId');

    HideParent('DhmStartId');
    HideParent('DhmEndId');

    HideParent('DhmStartIdO');
    HideParent('DhmEndIdO');

    HideParent('SiteIdO');
    HideParent('BagContainerIdO');
    HideParent('StationNumberIdO');
    HideParent('LaneNameIdO');

    HideParent('IsImageId');
    HideParent('IsImageOId');
    HideParent('IsImageIapiId');
    HideParent('IsImageIapiOId');
    HideParent('TimeId');
    HideParent('ZoneId');

    HideParent('IsConvenientContextId');
    HideParent('IsConvenientIapiId');
    HideParent('IsConvenientClassId');

    HideParent('IsPathQualifiedId');

    HideParent('PresetId');
    HideParent('ObsPassId');
    HideParent('ObsTickId');
    HideParent('ObsMpId');

    HideParent('LicensePlateId');
    HideParent('LicensePlateIdO');

    HideParent('ReadTickNumberId');
    HideParent('ReadTickNumberIdO');

    HideParent('ProductNumberId');
    HideParent('ProductNumberIdO');

    HideParent('IsConvenientContextOId');
    HideParent('IsConvenientIapiOId');

    HideParent('DateStartId');
    HideParent('DateEndId');

    HideParent('RegionId');
    HideParent('RegionIdO');

    HideParent('IsContextOnlyId');
    HideParent('IsIapiOnlyId');
    HideParent('IsPathOnlyId');
    HideParent('IsSortieOnlyId');

    HideParent('AxleId');
    HideParent('ClientTypeId');

    HideParent('IsLabelId');
    HideParent('IsCyclopeClassifyId');
    HideParent('IsCyclopePathId');

    HideParent('OctalCodeId');
    HideParent('IsLabeledId');

    HideParent('SerialNumberId');
    HideParent('SerialNumberIdO');

    HideParent('IsCyclopeClassDiscId');
    HideParent('IsCyclopePathDiscId');
    HideParent('IsChartId');
    HideParent('ExportId');

    HideParent('OdId');
    HideParent('QualifTypeId');
    HideParent('ControllerId');
    HideParent('TargetNumberId');    

    HideReport('ParamActionContainerId0');
    HideReport('ParamActionContainerId1');
    HideReport('ParamActionContainerId2');
    HideReport('ParamActionContainerId3');
    HideReport('ParamActionContainerId4');




    //DateValueDefaultSet('DhmStartId', 1);
    //DateValueDefaultSet('DhmEndId', 1);

    //DateValueDefaultSet('DhmStartIdO', 1);
    //DateValueDefaultSet('DhmEndIdO', 1);
}


function QualifLaneHomeOpen() {
    QualifAllReportsHide();
    QualifAllParametersHide();
    MenuBarNavHighlight(0, 5, 4);

    ShowReport('Page0_' + 'PageReportId');

    //Test
    

    //Fill
    HtmlDropDownListWithInputNameOnlyLabelFill('ZoneId', 0, '/Param/ParamZonesGet', 'ZoneId', 'ZoneName', '32', 'Périmètre');
    HtmlDropDownListWithInputNameOnlyLabelFill('TimeId', 0, '/Param/ParamTimesGet', 'TimeId', 'TimeName', '32', 'Temps');
    HtmlDropDownListWithInputNameOnlyLabelFill('ExportId', 0, '/Param/ParamExportsGet', 'ExportId', 'ExportName', '32', 'Export');

    HtmlDropDownListWithInputNameOnlyLabelFill('StationNumberId', '0', '/Param/ParamStationFromSiteIdSecGet', 'StationNumber', 'StationName', '0', 'Gare sortie');
    HtmlDropDownListWithTwoInputsNameOnlyLabelFill('LaneNameId', '0', '/Param/ParamLaneSecGet', 'LaneName', 'LaneName', '0', '0', 'Voie');

    HtmlDropDownListLabelFill('CategoryId', 0, '/Param/ParamCategoriesGet', 'CategoryId', 'CategoryName', 'Catégorie');
    HtmlDropDownListLabelFill('BillingId', 0, '/Param/ParamBillingIdGet', 'MpId', 'MpName', 'Code facturation');
    HtmlDropDownListLabelFill('PresetId', 0, '/Param/ParamQualifPresetsGet', 'PresetId', 'PresetName', 'Pré-réglage');
    HtmlDropDownListLabelFill('ObsPassId', 0, '/Param/ParamGetObsPass', 'ObsPassId', 'ObsPassName', 'Obs. Passage');
    HtmlDropDownListLabelFill('ObsTickId', 0, '/Param/ParamGetObsTick', 'ObsTickId', 'ObsTickName', 'Obs. Ticket');
    HtmlDropDownListLabelFill('ObsMpId', 0, '/Param/ParamGetObsMp', 'ObsMpId', 'ObsMpName', 'Obs. MP');
    HtmlDropDownListLabelFill('OctalCodeId', 0, '/Param/ParamOctalCodesGet', 'OctalCode', 'OctalCodeName', 'Code octal');
    HtmlDropDownListWithTwoInputsNameOnlyLabelFill('OdId', 0, '/Param/ParamOdFromStationLSGet', 'OdId', 'OdName', '0', '0', 'Origine-destination');
    

    HtmlDropDownListWithInputNameOnlyLabelFill('StationNumberIdO', '0', '/Param/ParamStationFromSiteIdSecGet', 'StationNumberId', 'StationName', '0', 'Gare entrée');
    HtmlDropDownListWithTwoInputsNameOnlyLabelFill('LaneNameIdO', '0', '/Param/ParamLaneSecGet', 'LaneName', 'LaneName', '0', '0', 'Voie entrée');

    HtmlDropDownListLabelFill('ClientTypeId', 0, '/Param/ParamClientTypesGet', 'ClientTypeId', 'ClientTypeName', 'Type client');
    HtmlDropDownListNameOnlyLabelFill('ControllerId', 0, '/Qualif/QualifControllersListGet', 'UserId', 'FullName', 'Contrôleur');
    HtmlDropDownListNameOnlyLabelFill('QualifTypeId', 0, '/Param/ParamQualifTypesGet', 'QualifTypeId', 'QualifTypeName', 'Type qualification');

    //Reset
    ElementDropDownListLabelReset('LSId', 'LS');
    ElementDropDownListLabelReset('StationNumberId', 'Gare sortie');
    ElementDropDownListLabelReset('LaneNameId', 'Voie sortie');

    ElementDropDownListLabelReset('LSIdO', 'LS Entrée');
    ElementDropDownListLabelReset('StationNumberIdO', 'Gare entrée');
    ElementDropDownListLabelReset('LaneNameIdO', 'Voie entrée');

    //OnChange
    //ElementOnChangeSet('RegionId', 'ParamLSFromRegionSecGet()');
    //ElementOnChangeSet('LSId', 'ParamStationsFromLSGet()');
    //ElementOnChangeSet('StationNumberId', "ParamLanesFromStationLSGet()");

    //ElementOnChangeSet('RegionIdO', 'ParamLSOFromRegionOSecGet()');
    //ElementOnChangeSet('LSIdO', 'ParamStationsOFromLSOGet()');
    //ElementOnChangeSet('StationNumberIdO', "ParamBornesFromStationLSGet()");

    //ElementOnChangeSet('PresetId', "ParamPresetsGet()");
    //ElementOnChangeSet('TimeId', "ParamTimesOnChangeGet()");


    ElementOnClickSet('RegionId', 'ParamLSFromRegionSecGet()');
    ElementOnClickSet('LSId', 'ParamStationsFromLSGet()');
    ElementOnClickSet('StationNumberId', "ParamLanesFromStationLSGet()");
    
    ElementOnClickSet('RegionIdO', 'ParamLSOFromRegionOSecGet()');
    ElementOnClickSet('LSIdO', 'ParamStationsOFromLSOGet()');
    ElementOnClickSet('StationNumberIdO', "ParamBornesFromStationLSGet()");

    ElementOnChangeSet('PresetId', 'ParamPresetsGet()');

    $.ajax({
        url: "/Common/RoleNameListGet",
        method: "POST",
        contentType: "application/json; charset=utf-8",
        async: true,
        success: function (data) {
            if (data.includes('Administrateur')) {
                DateValueDefaultSet('DateStartId', 1);
                DateValueDefaultSet('DateEndId', 1);

                DropDownListSet('TimeId', '01');

                HtmlDropDownListNameOnlyLabelFill('RegionId', '', '/Param/ParamRegionsSecGet', 'RegionId', 'RegionNameShort', 'Région entrée');
                HtmlDropDownListNameOnlyLabelFill('RegionIdO', '', '/Param/ParamRegionsSecGet', 'RegionId', 'RegionNameShort', 'Région sortie');
            }
            else {
                if (data.includes('QualifPathSupervisor')) {
                    DateValueDefaultSet('DateStartId', 1);
                    DateValueDefaultSet('DateEndId', 1);

                    DropDownListSet('TimeId', '09');
                    HtmlDropDownListNameOnlyXorLabelFill('RegionId', '', '/Param/ParamRegionsSecGet', 'RegionId', 'RegionNameShort', 'Région entrée');
                    HtmlDropDownListNameOnlyXorLabelFill('RegionIdO', '', '/Param/ParamRegionsSecGet', 'RegionId', 'RegionNameShort', 'Région sortie');
                }
                else {
                    if (data.includes('QualifPath')) {

                        DateValueDefaultSet('DateStartId', 1);
                        DateValueDefaultSet('DateEndId', 1);

                        DropDownListSet('TimeId', '07');
                        HtmlDropDownListNameOnlyXorLabelFill('RegionId', '', '/Param/ParamRegionsSecGet', 'RegionId', 'RegionNameShort', 'Région entrée');
                        HtmlDropDownListNameOnlyXorLabelFill('RegionIdO', '', '/Param/ParamRegionsSecGet', 'RegionId', 'RegionNameShort', 'Région sortie');
                    }
                }
            }
        }
    });    


    //Form    
    HtmlDropDownListNameOnlyXorLabelFill('SensId1', 'S', '/Param/GetSens', 'SensId', 'SensName', 'Sens');
    HtmlDropDownListNameOnlyLabelFill('CarBrandId1', 0, '/Breach/ParamCarBrandsGet', 'CarBrandId', 'CarBrandName', 'Marque');
    HtmlDropDownListLabelFill('PlateSeriesId1', 0, '/Breach/ParamLettersGet', 'PlateSeries', 'LetterAr', 'Lettre');
    HtmlDropDownListNameOnlyXorLabelFill('EquipmentNumberId1', '34', '/Param/ParamCameraCategoriesGet', 'EquipmentNumber', 'EquipmentName', 'N° Equipement');
}

function QualifInsightDisplay() {
    QualifObsTickIdPDayInsightGet();
    QualifObsTickIdDDayInsightGet();
    TopBarFixInsightDisplay('32');
    TopBarHistoryInsightGet('Qualification');
    QualifSearchRepeatByTagInsightGet();
    QualifSearchRepeatByPlateInsightGet();

    //ShowReport('Page0_' + 'PageReportId');
}

function QualifPathOpen() {
    QualifAllReportsHide();
    QualifAllParametersHide();
    MenuBarNavHighlight(0, 0, 4);

    $('#ParamTitleId').text("Recherche de trajets");

    //gloabl
    HideReport('Page0_' + 'PageReportId');
    ShowReport('ParamReportId');
    ShowReport('PresetId' + 'Parent');

    ShowReport('RegionId' + 'Parent');
    ShowReport('LSId' + 'Parent');
    ShowReport('StationNumberId' + 'Parent');
    ShowReport('LaneNameId' + 'Parent');

    ShowReport('BillingId' + 'Parent');
    ShowReport('CategoryId' + 'Parent');
    ShowReport('DhmStartId' + 'Parent');
    ShowReport('DhmEndId' + 'Parent');

    ShowReport('LicensePlateId' + 'Parent');
    ShowReport('ReadTickNumberId' + 'Parent');
    ShowReport('ProductNumberId' + 'Parent');

    ShowReport('IsImageId' + 'Parent');
    ShowReport('IsImageIapiId' + 'Parent');
    ShowReport('ObsPassId' + 'Parent');
    ShowReport('ObsTickId' + 'Parent');
    ShowReport('ObsMpId' + 'Parent');

    ShowReport('IsConvenientContextId' + 'Parent');
    ShowReport('IsConvenientIapiId' + 'Parent');
    ShowReport('IsConvenientClassId' + 'Parent');
    ShowReport('IsPathQualifiedId' + 'Parent');

    ShowReport('IsContextOnlyId' + 'Parent');
    ShowReport('IsIapiOnlyId' + 'Parent');
    ShowReport('IsPathOnlyId' + 'Parent');
    ShowReport('IsSortieOnlyId' + 'Parent');

    ShowReport('IsLabelId' + 'Parent');
    ShowReport('IsCyclopeClassifyId' + 'Parent');
    ShowReport('IsCyclopePathId' + 'Parent');
    ShowReport('OctalCodeId' + 'Parent');

    ShowReport('DhmStartIdO' + 'Parent');
    ShowReport('DhmEndIdO' + 'Parent');
    ShowReport('RegionIdO' + 'Parent');
    ShowReport('LSIdO' + 'Parent');
    ShowReport('StationNumberIdO' + 'Parent');
    ShowReport('LaneNameIdO' + 'Parent');
    ShowReport('LicensePlateIdO' + 'Parent');
    ShowReport('ReadTickNumberIdO' + 'Parent');
    ShowReport('ProductNumberIdO' + 'Parent');
    ShowReport('IsImageOId' + 'Parent');
    ShowReport('IsImageIapiOId' + 'Parent');
    ShowReport('IsConvenientContextOId' + 'Parent');
    ShowReport('IsConvenientIapiOId' + 'Parent');
    ShowReport('IsCyclopeClassDiscId' + 'Parent');
    ShowReport('IsCyclopePathDiscId' + 'Parent');    

    //OnChange
    //ElementOnChangeSet('StationNumberId', "ParamGetStations()")

    ParamActionBtnGet(0, 'Afficher', 'fas fa-eye', 'QualifPathDisplay()');
    ParamActionBtnGet(1, 'Labéliser', 'fas fa-tag', 'QualifPathCarouselDisplay()');
    ParamActionBtnGet(3, 'Tout exporter', 'far fa-file-excel', 'QualifImageAllExport()');
    ParamActionBtnGet(4, 'Tout envoyer', 'far fa-paper-plane', 'QualifImageAllSend()');
}


function QualifSearchHomeOpen() {
    QualifAllReportsHide();
    QualifAllParametersHide();
    MenuBarNavHighlight(0, 5, 4);

    HideReport('Page0_' + 'PageReportId');
}


function QualifSearchObsTickIdPOpen() {
    QualifAllReportsHide();
    QualifAllParametersHide();
    MenuBarNavHighlight(0, 3, 4);

    $('#ParamTitleId').text("Recherchre de tickets perdus par N° de tag");
    ShowReport('ParamReportId');

    
    ShowParent('SerialNumberId'); ElementInputSet('SerialNumberId', '');

    //global
    HideParent('AxleId'); DropDownListSet('AxleId', '0');
    HideParent('BillingId'); DropDownListSet('BillingId', '0');
    HideParent('CategoryId'); DropDownListSet('CategoryId', '0');

    HideParent('IsContextOnlyId'); ElementBooleanSet('IsContextOnlyId', false);
    HideParent('IsIapiOnlyId'); ElementBooleanSet('IsIapiOnlyId', false);
    HideParent('IsPathOnlyId'); ElementBooleanSet('IsPathOnlyId', false);
    HideParent('IsSortieOnlyId'); ElementBooleanSet('IsSortieOnlyId', true);

    HideParent('IsPathQualifiedId'); ElementBooleanSet('IsPathQualifiedId', false);

    HideParent('IsLabelId'); ElementBooleanSet('IsLabelId', false);
    HideParent('IsCyclopeClassifyId'); ElementBooleanSet('IsCyclopeClassifyId', false);
    HideParent('IsCyclopePathId'); ElementBooleanSet('IsCyclopePathId', false);

    HideParent('ClientTypeId');

    HideParent('OctalCodeId'); DropDownListSet('OctalCodeId', '0');

    //sortie
    var now = new Date();
    var year = now.getFullYear();
    var month = now.getMonth() + 1;
    var day = now.getDate();
    //var hour = now.getHours();
    //var minute = now.getMinutes();
    //var second = now.getSeconds();

    var date = new Date();
    date.setDate(now.getDate() - 10);
    var yearStart = date.getFullYear();
    var monthStart = date.getMonth() + 1;
    var dayStart = date.getDate();

    ShowParent('DhmStartId'); DhmValue12Set('DhmStartId', yearStart, monthStart, dayStart, 0, 0);
    ShowParent('DhmEndId'); DhmValue12Set('DhmEndId', year, month, day, 23, 59);
    HideParent('RegionId'); DropDownListSet('RegionId', '0');
    HideParent('LSId'); DropDownListSet('LSId', '0');
    HideParent('StationNumberId'); DropDownListSet('StationNumberId', '0');
    HideParent('LaneNameId'); DropDownListSet('LaneNameId', '0');
    HideParent('IsImageId'); ElementBooleanSet('IsImageId', false);

    ShowParent('LicensePlateId'); ElementInputSet('LicensePlateId', '');
    HideParent('ReadTickNumberId'); ElementInputSet('ReadTickNumberId', '');
    HideParent('ProductNumberId'); ElementInputSet('ProductNumberId', '');

    HideParent('IsImageIapiId'); ElementBooleanSet('IsImageIapiId', false);

    //In  
    //DateValueDefaultFirstDaySet('DhmStartIdO');
    HideParent('DhmStartIdO'); DhmValue12Set('DhmStartIdO', 1900, 1, 1, 0, 0);
    HideParent('DhmEndIdO'); DhmValue12Set('DhmEndIdO', 2023, 12, 1, 23, 59);
    HideParent('RegionIdO'); DropDownListSet('RegionIdO', '0');
    HideParent('LSIdO'); DropDownListSet('LSIdO', '0');
    HideParent('StationNumberIdO'); DropDownListSet('StationNumberIdO', '0');
    HideParent('LaneNameIdO'); DropDownListSet('LaneNameIdO', '0');

    HideParent('LicensePlateIdO'); ElementInputSet('LicensePlateIdO', '');
    HideParent('ReadTickNumberIdO'); ElementInputSet('ReadTickNumberIdO', '');
    HideParent('ProductNumberIdO'); ElementInputSet('ProductNumberIdO', '');

    HideParent('IsImageOId'); ElementBooleanSet('IsImageOId', false);
    HideParent('IsImageIapiOId'); ElementBooleanSet('IsImageIapiOId', false);

    //Obs
    HideParent('ObsPassId'); DropDownListSet('ObsPassId', '0');
    ShowParent('ObsTickId'); DropDownListSet('ObsTickId', 'I'); 
    HideParent('ObsMpId'); DropDownListSet('ObsMpId', '0');

    HideParent('IsConvenientContextOId'); ElementBooleanSet('IsConvenientContextOId', false);
    HideParent('IsConvenientIapiOId'); ElementBooleanSet('IsConvenientIapiOId', false);
    HideParent('IsConvenientContextId'); ElementBooleanSet('IsConvenientContextId', false);
    HideParent('IsConvenientIapiId'); ElementBooleanSet('IsConvenientIapiId', false);
    HideParent('IsConvenientClassId'); ElementBooleanSet('IsConvenientClassId', false);

    
    HideParent('IsCyclopeClassDiscId'); ElementBooleanSet('IsCyclopeClassDiscId', false);
    HideParent('IsCyclopePathDiscId'); ElementBooleanSet('IsCyclopePathDiscId', false);


    ParamActionBtnGet(0, 'Afficher', 'fas fa-eye', 'QualifPathDisplay()');
}


function QualifSearchObsMpId26Open() {
    QualifAllReportsHide();
    QualifAllParametersHide();
    MenuBarNavHighlight(0, 4, 4);

    $('#ParamTitleId').text("Recherchre de récidiviste avec solde insufisant");
    ShowReport('ParamReportId');


    ShowParent('SerialNumberId'); ElementInputSet('SerialNumberId', '');

    //global
    HideParent('AxleId'); DropDownListSet('AxleId', '0');
    HideParent('BillingId'); DropDownListSet('BillingId', '0');
    HideParent('CategoryId'); DropDownListSet('CategoryId', '0');

    HideParent('IsContextOnlyId'); ElementBooleanSet('IsContextOnlyId', false);
    HideParent('IsIapiOnlyId'); ElementBooleanSet('IsIapiOnlyId', false);
    HideParent('IsPathOnlyId'); ElementBooleanSet('IsPathOnlyId', false);
    HideParent('IsSortieOnlyId'); ElementBooleanSet('IsSortieOnlyId', true);

    HideParent('IsPathQualifiedId'); ElementBooleanSet('IsPathQualifiedId', false);

    HideParent('IsLabelId'); ElementBooleanSet('IsLabelId', false);
    HideParent('IsCyclopeClassifyId'); ElementBooleanSet('IsCyclopeClassifyId', false);
    HideParent('IsCyclopePathId'); ElementBooleanSet('IsCyclopePathId', false);

    HideParent('ClientTypeId');

    HideParent('OctalCodeId'); DropDownListSet('OctalCodeId', '0');

    //sortie
    var now = new Date();
    var year = now.getFullYear();
    var month = now.getMonth() + 1;
    var day = now.getDate();
    //var hour = now.getHours();
    //var minute = now.getMinutes();
    //var second = now.getSeconds();

    var date = new Date();
    date.setDate(now.getDate() - 10);
    var yearStart = date.getFullYear();
    var monthStart = date.getMonth() + 1;
    var dayStart = date.getDate();

    ShowParent('DhmStartId'); DhmValue12Set('DhmStartId', yearStart, monthStart, dayStart, 0, 0);
    ShowParent('DhmEndId'); DhmValue12Set('DhmEndId', year, month, day, 23, 59);
    HideParent('RegionId'); DropDownListSet('RegionId', '0');
    HideParent('LSId'); DropDownListSet('LSId', '0');
    HideParent('StationNumberId'); DropDownListSet('StationNumberId', '0');
    HideParent('LaneNameId'); DropDownListSet('LaneNameId', '0');
    HideParent('IsImageId'); ElementBooleanSet('IsImageId', false);

    ShowParent('LicensePlateId'); ElementInputSet('LicensePlateId', '');
    HideParent('ReadTickNumberId'); ElementInputSet('ReadTickNumberId', '');
    HideParent('ProductNumberId'); ElementInputSet('ProductNumberId', '');

    HideParent('IsImageIapiId'); ElementBooleanSet('IsImageIapiId', false);

    //In  
    //DateValueDefaultFirstDaySet('DhmStartIdO');
    HideParent('DhmStartIdO'); DhmValue12Set('DhmStartIdO', 1900, 1, 1, 0, 0);
    HideParent('DhmEndIdO'); DhmValue12Set('DhmEndIdO', 2023, 12, 1, 23, 59);
    HideParent('RegionIdO'); DropDownListSet('RegionIdO', '0');
    HideParent('LSIdO'); DropDownListSet('LSIdO', '0');
    HideParent('StationNumberIdO'); DropDownListSet('StationNumberIdO', '0');
    HideParent('LaneNameIdO'); DropDownListSet('LaneNameIdO', '0');

    HideParent('LicensePlateIdO'); ElementInputSet('LicensePlateIdO', '');
    HideParent('ReadTickNumberIdO'); ElementInputSet('ReadTickNumberIdO', '');
    HideParent('ProductNumberIdO'); ElementInputSet('ProductNumberIdO', '');

    HideParent('IsImageOId'); ElementBooleanSet('IsImageOId', false);
    HideParent('IsImageIapiOId'); ElementBooleanSet('IsImageIapiOId', false);

    //Obs
    HideParent('ObsPassId'); DropDownListSet('ObsPassId', '0');
    HideParent('ObsTickId'); DropDownListSet('ObsTickId', '0'); 
    ShowParent('ObsMpId'); DropDownListSet('ObsMpId', '26'); 

    HideParent('IsConvenientContextOId'); ElementBooleanSet('IsConvenientContextOId', false);
    HideParent('IsConvenientIapiOId'); ElementBooleanSet('IsConvenientIapiOId', false);
    HideParent('IsConvenientContextId'); ElementBooleanSet('IsConvenientContextId', false);
    HideParent('IsConvenientIapiId'); ElementBooleanSet('IsConvenientIapiId', false);
    HideParent('IsConvenientClassId'); ElementBooleanSet('IsConvenientClassId', false);


    HideParent('IsCyclopeClassDiscId'); ElementBooleanSet('IsCyclopeClassDiscId', false);
    HideParent('IsCyclopePathDiscId'); ElementBooleanSet('IsCyclopePathDiscId', false);


    ParamActionBtnGet(0, 'Afficher', 'fas fa-eye', 'QualifPathDisplay()');
}

function QualifTrxLaneOpen() {
    QualifAllReportsHide();
    QualifAllParametersHide();
    MenuBarNavHighlight(0, 1, 4);

    $('#ParamTitleId').text("Recherchre de transactions de sortie");
    ShowReport('ParamReportId');

    ShowReport('RegionId' + 'Parent');
    ShowReport('LSId' + 'Parent');
    ShowReport('StationNumberId' + 'Parent');
    ShowReport('LaneNameId' + 'Parent');
    //ShowReport('BillingId' + 'Parent');
    //ShowReport('CategoryId' + 'Parent');
    ShowReport('DhmStartId' + 'Parent');
    ShowReport('DhmEndId' + 'Parent');
    ShowReport('IsImageId' + 'Parent');
    ShowReport('IsImageIapiId' + 'Parent');

    //ShowReport('ObsPassId' + 'Parent');
    //ShowReport('ObsTickId' + 'Parent');
    //ShowReport('ObsMpId' + 'Parent');

    ShowReport('LicensePlateId' + 'Parent');
    ShowReport('ReadTickNumberId' + 'Parent');
    //ShowReport('ProductNumberId' + 'Parent');
    ShowReport('SerialNumberId' + 'Parent');

    ParamActionBtnGet(0, 'Afficher', 'fas fa-eye', 'QualifTrxLaneDisplay()');
    ParamActionBtnGet(1, 'Charger Trx 1/2', 'fas fa-upload', 'QualifTrxLaneInterfaceUpload()');
    ParamActionBtnGet(2, 'Charger Trx 2/2', 'fas fa-upload', 'QualifTrxLaneQualifUpload()');
    ParamActionBtnGet(3, 'Charger images', 'fas fa-upload', 'QualifTrxLaneImageUpload()');

    document.getElementById('DhmStartId').value = '2022-02-02T10:00';
    document.getElementById('DhmEndId').value = '2022-02-02T10:59';

    //DropDownListSet('RegionId', '02');
    //DropDownListSet('LSId', '76');
    //DropDownListSet('StationNumberId', '76');
    //DropDownListSet('LaneNameId', 'S01');
}

function QualifTrxLaneInterfaceUpload() {
    var ActionBtnId = 'ParamActionBtnId1';
    var Icon = 'fas fa-upload btn-icon-m-cl gc-c1-cl';
    var IsMargin = false;

    var RegionId = GetElementValue('RegionId');
    var LSId = GetElementValue('LSId');
    var StationNumber = GetElementValue('StationNumberId');
    var LaneName = GetElementValue('LaneNameId');
    var DhmStringStart = GetDhmStringFromDatePicker('DhmStartId').substr(0, 8);
    var DhmStringEnd = GetDhmStringFromDatePicker('DhmEndId').substr(0, 8);
    var TaskId = '00';
    var Source = '05';
    var FileTypeId = '58';
    var AxleId = '0';

    ParamMessageReset();

    if (DhmStringStart != '' && DhmStringEnd != '' && RegionId != '0' && LSId != '0' && StationNumber != '0' && LaneName != '0') {
        CertFileUpload(ActionBtnId, Icon, TaskId, Source, FileTypeId, DhmStringStart, DhmStringEnd, RegionId, LSId, AxleId, StationNumber, LaneName);
    }
    else {
        ParamMessageErrorDisplay('Les dates de début et de fin, région, LS, gare, voie sont obligatoires');
    };
}

function QualifTrxLaneQualifUpload() {
    var ActionBtnId = 'ParamActionBtnId2';
    var Icon = 'fas fa-upload btn-icon-m-cl gc-c1-cl';
    var IsMargin = false;

    var RegionId = GetElementValue('RegionId');
    var LSId = GetElementValue('LSId');
    var StationNumber = GetElementValue('StationNumberId');
    var LaneName = GetElementValue('LaneNameId');
    var DhmStringStart = GetDhmStringFromDatePicker('DhmStartId').substr(0, 8);
    var DhmStringEnd = GetDhmStringFromDatePicker('DhmEndId').substr(0, 8);
    var TaskId = '00';
    var Source = '05';
    var FileTypeId = '5B';
    var AxleId = '0';

    ParamMessageReset();

    if (DhmStringStart != '' && DhmStringEnd != '' && RegionId != '0' && LSId != '0' && StationNumber != '0' && LaneName != '0') {
        CertFileUpload(ActionBtnId, Icon, TaskId, Source, FileTypeId, DhmStringStart, DhmStringEnd, RegionId, LSId, AxleId, StationNumber, LaneName);
    }
    else {
        ParamMessageErrorDisplay('Les dates de début et de fin, région, LS, gare, voie sont obligatoires');
    };
}

function QualifTrxLaneImageUpload() {
    var ActionBtnId = 'ParamActionBtnId3';
    var Icon = 'fas fa-upload btn-icon-m-cl gc-c1-cl';
    var IsMargin = false;

    var RegionId = GetElementValue('RegionId');
    var LSId = GetElementValue('LSId');
    var StationNumber = GetElementValue('StationNumberId');
    var LaneName = GetElementValue('LaneNameId');
    //var DhmStringStart = GetDhmStringFromDatePicker('DhmStartId').substr(0, 8);
    //var DhmStringEnd = GetDhmStringFromDatePicker('DhmEndId').substr(0, 8);
    var DhmStringStart = GetDhmStringFromDatePicker('DhmStartId').substr(0, 12);
    var DhmStringEnd = GetDhmStringFromDatePicker('DhmEndId').substr(0, 12);
    var TaskId = '00';
    var Source = '19';
    var FileTypeId = 'J1';
    var AxleId = '0';

    ParamMessageReset();

    if (DhmStringStart != '' && DhmStringEnd != '' && RegionId != '0' && LSId != '0' && StationNumber != '0' && LaneName != '0') {
        CertFileUpload(ActionBtnId, Icon, TaskId, Source, FileTypeId, DhmStringStart, DhmStringEnd, RegionId, LSId, AxleId, StationNumber, LaneName);
    }
    else {
        ParamMessageErrorDisplay('Les dates de début et de fin, région, LS, gare, voie sont obligatoires');
    };
}

function QualifTrxBorneOpen() {
    QualifAllReportsHide();
    QualifAllParametersHide();
    MenuBarNavHighlight(0, 2, 4);

    $('#ParamTitleId').text("Recherche de transaction d'enrée");
    ShowReport('ParamReportId');

    ShowReport('DhmStartIdO' + 'Parent');
    ShowReport('DhmEndIdO' + 'Parent');
    ShowReport('RegionIdO' + 'Parent');
    ShowReport('LSIdO' + 'Parent');
    ShowReport('StationNumberIdO' + 'Parent');
    ShowReport('LaneNameIdO' + 'Parent');

    ShowReport('IsImageOId' + 'Parent');
    ShowReport('IsImageIapiOId' + 'Parent');

    ShowReport('LicensePlateIdO' + 'Parent');
    ShowReport('ReadTickNumberIdO' + 'Parent');
    ShowReport('ProductNumberIdO' + 'Parent');
    ShowReport('SerialNumberIdO' + 'Parent');

    ParamActionBtnGet(0, 'Afficher', 'fas fa-eye', 'QualifTrxBorneDisplay()');


    document.getElementById('DhmStartIdO').value = '2022-02-02T10:00';
    document.getElementById('DhmEndIdO').value = '2022-02-02T11:59';

    //DropDownListSet('RegionIdO', '02');
    //DropDownListSet('LSIdO', '76');
    //DropDownListSet('StationNumberIdO', '76');
    //DropDownListSet('LaneNameIdO', 'S01');
}

function QualifDashOpen() {
    QualifAllReportsHide();
    QualifAllParametersHide();
    MenuBarNavHighlight(1, 0, 2);

    $('#ParamTitleId').text("Qualification par voie");
    ShowReport('ParamReportId');

    ShowParent('RegionId');
    ShowParent('LSId');
    ShowParent('StationNumberId');

    ShowParent('TimeId');
    ShowParent('DateStartId');
    ShowParent('DateEndId');
    ShowParent('ObsTickId');
    ShowParent('ObsMpId');
    ShowParent('ObsPassId');

    ElementDropDownListSet('ObsTickId', 'D');

    //OnChange
    ElementOnChangeSet('StationNumberId', "");
    ElementOnChangeSet('TimeId', "QualifObsTickIdTimePresetGet()");

    ElementOnChangeSet('ObsTickId', "QualifObsTickIdPresetGet()");
    ElementOnChangeSet('ObsMpId', "QualifObsMpIdPresetGet()");
    ElementOnChangeSet('ObsPassId', "QualifObsPassIdPresetGet()");

    $.ajax({
        url: "/Common/RoleNameListGet",
        method: "POST",
        contentType: "application/json; charset=utf-8",
        async: true,
        success: function (data) {
            if (data.includes('Administrateur')) {
                //Actions
                ParamActionBtnGet(0, 'Afficher', 'fas fa-eye', 'QualifTrxLaneAllDisplay()');
                

                DateValueDefaultSet('DateStartId', 2);
                DateValueDefaultSet('DateEndId', 2);

                //ElementDropDownListReset('RegionId');
                ElementDropDownListReset('LSId');
                ElementDropDownListReset('StationNumberId');

                DropDownListSet('TimeId', '07');
                //QualifTimePreset();
                //QualifTrxLaneAllDisplay();

                QualifObsTickIdTimePresetGet();
            }
            else {
                if (data.includes('QualifPathSupervisor')) {
                    //Actions
                    ParamActionBtnGet(0, 'Afficher', 'fas fa-eye', 'QualifTrxLaneAllDisplay()');
                    

                    DateValueDefaultSet('DateStartId', 2);
                    DateValueDefaultSet('DateEndId', 2);

                    //ElementDropDownListReset('RegionId');
                    ElementDropDownListReset('LSId');
                    ElementDropDownListReset('StationNumberId');

                    DropDownListSet('TimeId', '07');
                    //QualifTimePreset();
                    //QualifTrxLaneAllDisplay();
                    QualifObsTickIdTimePresetGet();
                }
                else {
                    if (data.includes('QualifPath')) {
                        //Actions
                        ParamActionBtnGet(0, 'Afficher', 'fas fa-eye', 'QualifTrxLaneAllDisplay()');
                        

                        DateValueDefaultSet('DateStartId', 2);
                        DateValueDefaultSet('DateEndId', 2);

                        DropDownListSet('TimeId', '07');
                        //QualifTimePreset();
                        //QualifTrxLaneAllDisplay();
                        QualifObsTickIdTimePresetGet();
                    }
                }
            }           
        }
    });

    

    NotiConnectionIdUpdate('Qualification - Dashboard');
}


function QualifObsTickIdPresetGet() {
    ElementDropDownListSet('ObsMpId', '0');
    ElementDropDownListSet('ObsPassId', '0');
}

function QualifObsPassIdPresetGet() {
    ElementDropDownListSet('ObsTickId', '0');
    ElementDropDownListSet('ObsMpId', '0');
}

function QualifObsMpIdPresetGet() {
    ElementDropDownListSet('ObsTickId', '0');
    ElementDropDownListSet('ObsMpId', '0');
}

function AdminAppRecycle() {
    var AppId = 2;
    var TaskName = 'recycle';
    var ActionBtnId = 'ParamActionBtnId1';
    $('#' + ActionBtnId).find('span').attr('class', 'fa fa-spinner fa-spin btn-icon-cl gc-c1-cl');

    var Icon = 'fas fa-redo-alt btn-icon-cl gc-c1-cl';
    var obj = {};
    obj.AppId = AppId;
    obj.TaskName = TaskName;
    $.ajax({
        url: "/Admin/AdminAppTaskRun",
        method: "POST",
        data: JSON.stringify(obj),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            $('#' + ActionBtnId).find('span').attr('class', Icon);
            //AdminMusTrackSearch('', 'Param');
        }
    });

}


function QualifObsTickIdTimePresetGet() {
    var TimeId = GetElementValue('TimeId');

    QualifAllParametersHide();
    ShowParent('TimeId');
    ShowReport('ParamActionContainerId0');

    ShowParent('ObsTickId');
    ShowParent('ObsMpId');
    ShowParent('ObsPassId');

    if (TimeId == '11') {//Trx
        DateValueDefaultSet('DateStartId', 0);
        DateValueDefaultSet('DateEndId', 0);
    }
    else {
        if (TimeId == '01') {//Day            
            ShowParent('DateStartId');
            ShowParent('DateEndId');
        }
        else {
            ShowParent('DateStartId');
            ShowParent('DateEndId');

            ShowParent('RegionId');
            ShowParent('LSId');
            ShowParent('StationNumberId');           
        }
    }
}

function QualifDashNotify() {

    var ActionBtnId = 'ParamActionBtnId1';
    var Icon = 'fas fa-paper-plane btn-icon-m-cl gc-c1-cl';

    ActionBtnMarginSpin(ActionBtnId);

    var RegionId = GetElementValue('RegionId');
    var LSId = GetElementValue('LSId');
    var StationNumber = GetElementValue('StationNumberId');
    var DateStringStart = GetDateStringFromDatePicker('DateStartId');
    var DateStringEnd = GetDateStringFromDatePicker('DateEndId');

    if (DateStringStart - DateStringEnd == 0) {

        var obj = {};
        obj.RegionId = RegionId;
        obj.LSId = LSId;
        obj.StationNumber = StationNumber;
        obj.DateStringStart = DateStringStart;
        obj.DateStringEnd = DateStringEnd;

        $.ajax({
            url: "/Qualif/QualifDashNotify",
            method: "POST",
            data: JSON.stringify(obj),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {
                ActionBtnIconMarginSet(ActionBtnId, Icon);
                //CollabActionDisplay('0')
            }
        });
    }
    else {
        ParamMessageErrorDisplay('La période ne doit pas dépasser une journée')
    };
}

function QualifObsTickIdPPerfOpen() {
    QualifAllReportsHide();
    QualifAllParametersHide();
    MenuBarNavHighlight(4, 0, 2);

    ParamTitleSet('Performance des contrôleurs - Discordances de plaque');
    ShowReport('ParamReportId');

    //gloabl
    ShowReport('ParamReportId');
    ShowParent('DateStartId');
    ShowParent('DateEndId');
    ShowParent('TimeId');

    //Actions
    ParamActionBtnGet(0, 'Afficher', 'fas fa-eye', 'QualifObsTickIdPPerfAllDisplay()');

    $.ajax({
        url: "/Common/RoleNameListGet",
        method: "POST",
        contentType: "application/json; charset=utf-8",
        async: true,
        success: function (data) {
            if (data.includes('Administrateur') || data.includes('QualifPathSupervisor')) {

                DropDownListSet('TimeId', '01');
                DateValueDefaultSet('DateStartId', 1);
                DateValueDefaultSet('DateEndId', 1);                               

                ElementDropDownListReset('RegionId');
                ElementDropDownListReset('LSId');
                ElementDropDownListReset('StationNumberId');                              

                //QualifTimePreset();
            }
            else {
                if (data.includes('QualifPath')) {

                    DropDownListSet('TimeId', '07');
                    DateValueDefaultSet('DateStartId', 1);
                    DateValueDefaultSet('DateEndId', 1);
                    
                    //QualifTimePreset();
                }
            }
        }
    });

    //Connection
    NotiConnectionIdUpdate('Qualification - Performance - Discordances de classe');
}



function QualifObsTickIdPPerfAllDisplay() {
    //Define
    var ActionBtnId = 'ParamActionBtnId0';
    var Icon = 'fas fa-eye btn-icon-m-cl gc-c1-cl';
    var TimeId = GetElementValue('TimeId');
    var IsMargin = new Boolean(true);

    //Display
    if (TimeId == '01') {//Day
        QualifObsTickIdPPerfDayDisplay(ActionBtnId, Icon, IsMargin);
    }
    else {
        if (TimeId == '06') {//Cumul
             QualifObsTickIdPPerfCumulDisplay(ActionBtnId, Icon, IsMargin);
        }
        else {
            ParamMessageErrorDisplay('Ce niveau n\'est pas authorisé');
        }
    }
}


function QualifObsTickIdPPerfDayDisplay(ActionBtnId, Icon, IsMargin) {
    var DateStringStart = GetDateStringFromDatePicker('DateStartId');
    var DateStringEnd = GetDateStringFromDatePicker('DateEndId');

    QualifAllReportsHide();
    ShowReport('ParamReportId');

    if (DateStringStart != '' && DateStringEnd != '') {
        QualifObsTickIdPPerfDayGet(ActionBtnId, Icon, IsMargin, DateStringStart, DateStringEnd);
    }
    else {
        ParamMessageErrorDisplay('Les dates de début et de fin sont obligatoires');
    };
}


function QualifObsTickIdPPerfCumulDisplay(ActionBtnId, Icon, IsMargin) {
    var DateStringStart = GetDateStringFromDatePicker('DateStartId');
    var DateStringEnd = GetDateStringFromDatePicker('DateEndId');

    QualifAllReportsHide();
    ShowReport('ParamReportId');

    if (DateStringStart != '' && DateStringEnd != '') {
        QualifObsTickIdPPerfCumulGet(ActionBtnId, Icon, IsMargin, DateStringStart, DateStringEnd);
    }
    else {
        ParamMessageErrorDisplay('Les dates de début et de fin sont obligatoires');
    };
}

function QualifCashOpen() {
    QualifAllReportsHide();
    QualifAllParametersHide();
    MenuBarNavHighlight(2, 3, 4);

    $('#ParamTitleId').text("Ecarts caissiers");
    ShowReport('ParamReportId');
    ShowReport('RegionId' + 'Parent');

    //Actions
    ParamActionBtnGet(0, 'Afficher', 'fas fa-eye', 'QualifCashDisplay()');

    QualifCashDisplay();

    NotiConnectionIdUpdate('Qualification - Ecarts caissiers');
}


function QualifPerfLabelOpen() {
    QualifAllReportsHide();
    QualifAllParametersHide();
    MenuBarNavHighlight(4, 1, 2);

    $('#ParamTitleId').text("Performance des Labéliseurs");
    ShowReport('ParamReportId');

    //Actions
    ParamActionBtnGet(0, 'Afficher', 'fas fa-eye', 'QualifPerfLabelDisplay()');

    QualifPerfLabelGet();

    //Connection
    NotiConnectionIdUpdate('Qualification - Performance');
}

function QualifOccOpen() {
    QualifAllReportsHide();
    QualifAllParametersHide();
    MenuBarNavHighlight(1, 0, 1);

    $('#ParamTitleId').text("Occurence");

    //gloabl
    ShowReport('ParamReportId');
    ShowReport('SiteId' + 'Parent');
    ShowReport('BagContainerId' + 'Parent');
    ShowReport('StationNumberId' + 'Parent');
    ShowReport('LaneNameId' + 'Parent');
    ShowReport('BillingId' + 'Parent');
    ShowReport('CategoryId' + 'Parent');
    ShowReport('DhmStartId' + 'Parent');
    ShowReport('DhmEndId' + 'Parent');
    ShowReport('DhmStartIdO' + 'Parent');
    ShowReport('DhmEndIdO' + 'Parent');
    ShowReport('SiteIdO' + 'Parent');
    ShowReport('BagContainerIdO' + 'Parent');
    ShowReport('StationNumberIdO' + 'Parent');
    ShowReport('LaneNameIdO' + 'Parent');
    ShowReport('IsImageId' + 'Parent');
    ShowReport('IsImageOId' + 'Parent');
    ShowReport('IsImageIapiId' + 'Parent');
    ShowReport('IsImageIapiOId' + 'Parent');
    ShowReport('ClientTypeId');

    ShowReport('PresetId' + 'Parent');
    ShowReport('ObsPassId' + 'Parent');
    ShowReport('ObsTickId' + 'Parent');
    ShowReport('ObsMpId' + 'Parent');

    ShowReport('IsConvenientContextId' + 'Parent');
    ShowReport('IsConvenientIapiId' + 'Parent');
    ShowReport('IsConvenientClassId' + 'Parent');
    ShowReport('IsPathQualifiedId' + 'Parent');

    ShowReport('IsConvenientContextOId' + 'Parent');
    ShowReport('IsConvenientIapiOId' + 'Parent');

    ShowReport('IsContextOnlyId' + 'Parent');
    ShowReport('IsIapiOnlyId' + 'Parent');
    ShowReport('IsPathOnlyId' + 'Parent');

    ShowReport('LicensePlateId' + 'Parent');
    ShowReport('LicensePlateOId' + 'Parent');

    ShowReport('ReadTickNumberId' + 'Parent');
    ShowReport('ReadTickNumberOId' + 'Parent');

    ShowReport('ProductNumberId' + 'Parent');
    ShowReport('ProductNumberOId' + 'Parent');

    //OnChange
    ElementOnChangeSet('StationNumberId', "ParamGetStations()")

    ParamActionBtnGet(0, 'Afficher', 'fas fa-eye', 'QualifOccDisplay()');
    //ParamActionBtnGet(1, 'Labéliser', 'fas fa-tag', 'QualifPathCarouselDisplay()');
    //ParamActionBtnGet(3, 'Tout exporter', 'far fa-file-excel', 'QualifImageAllExport()');
    //ParamActionBtnGet(4, 'Tout envoyer', 'far fa-paper-plane', 'QualifImageAllSend()');

    //Test
    //document.getElementById('DhmStartIdO').value = '2021-06-06T00:00';
    //document.getElementById('DhmEndIdO').value = '2021-06-06T23:59';
    //document.getElementById('DhmStartId').value = '2021-06-06T00:00';
    //document.getElementById('DhmEndId').value = '2021-06-06T23:59';

    //DropDownListSet('SiteId', '11');
    //DropDownListSet('SiteIdO', '11');

    //DropDownListSet('BagContainerId', '08');
    //DropDownListSet('StationNumberId', '08');


    //DropDownListSet('BagContainerIdO', '17');
    //DropDownListSet('StationNumberIdO', '17');

    //DropDownListSet('LaneNameId', 'S11');
    //DropDownListSet('LaneNameIdO', '0');
}


function QualifLoyHomeOpen() {
    QualifAllReportsHide();
    QualifAllParametersHide();
    MenuBarNavHighlight(1, 1, 0);
}

function ParamSiteFromAxleSecGet() {
    var AxleId = new String($("#AxleId").val());
    $("#SiteId").empty();
    $.get("/Param/ParamSiteFromAxleSecGet", { Input: AxleId }, function (data) {
        $.each(data, function (index, row) {
            $("#SiteId").append("<option value='" + row.SiteId + "'>" + row.SiteName + "</option>")
        });
    });
    //$("#BagContainerId").append("<option value='" + 0 + "'>" + "--" + "</option>");
    //$("#BagContainerId").val('0');

    //$("#StationId").empty();
    //$("#StationId").append("<option value='" + 0 + "'>" + "--" + "</option>");
    //$("#StationId").val('0');

    //var ParamId = GetElementValue('ParamId');
    //if (ParamId == '00' || ParamId == '01')
    //{
    //    ShowReport('BagContainerId' + 'Parent');
    //}

    //var TaskId = GetElementValue('TaskId');
    //if (TaskId == '01' || TaskId == '02' || TaskId == '03' || TaskId == '04') {
    //    var Source = GetElementValue('SourceId');
    //    if (Source != '05') {
    //        ShowReport('BagContainerId' + 'Parent');
    //    }

    //}
    ShowReport('SiteId' + 'Parent');
}

function QualifTimePreset() {
    var TimeId = GetElementValue('TimeId');

    if (TimeId == '01') {//Day
        ParamMessageReset();
        //HideParent('AxleId');
        //HideParent('SiteId');
        //HideParent('LSId');
        //HideParent('BagContainerId');
        //HideParent('StationNumberId');
        //QualifTrxLaneDayDisplay(ActionBtnId, Icon, IsMargin);
    }
    else {
        if (TimeId == '07') {//Station
            ParamMessageReset();

            //ShowParent('LSId');            
            //ShowParent('StationNumberId');
            //ShowParent('SiteId');
            //ShowParent('BagContainerId');
            //ShowParent('AxleId');
            //QualifTrxLaneStationDisplay(ActionBtnId, Icon, IsMargin);
        }
        else {
            ParamMessageErrorDisplay('Ce niveau n\'est pas authorisé');
        }
    }
}




function QualifPathGet(ActionBtnId, Icon,
    RegionId, LSId, StationNumber, LaneName, DhmStringStart, DhmStringEnd, IsImage, IsImageIapi,
    RegionIdO, LSIdO, StationNumberO, LaneNameO, DhmStringStartO, DhmStringEndO, IsImageO, IsImageIapiO,
    BillingId, CategoryId,
    PresetId, ObsPassId, ObsTickId, ObsMpId,
    IsConvenientContext, IsConvenientIapi, IsConvenientClass, IsPathQualified,
    IsConvenientContextO, IsConvenientIapiO,
    IsContextOnly, IsIapiOnly, IsPathOnly, IsSortieOnly,
    RowIdTrxLane,
    ProductNumber,
    IsLabel, IsCyclopeClassify, IsCyclopePath,
    OctalCode,
    IsPathQualifiable,
    IsLabeled,
    SerialNumber, LicensePlate,
    QualifControlId, QualifReasonId,
    IsCyclopeClassDiscId, IsCyclopePathDiscId) {

    var NoneObsTickIdP = '';
    var NoneObsTickIdD = '';
    var NoneIsCyclopePathDiscId = '';

    if (ObsTickId == 'P') {
        NoneObsTickIdP = 'none';
        NoneObsTickIdD = '';
        NoneIsCyclopePathDiscId = '';
    }
    if (ObsTickId == 'D') {
        NoneObsTickIdP = '';
        NoneObsTickIdD = 'none';
        NoneIsCyclopePathDiscId = '';
    }
    if (IsCyclopePathDiscId) {
        NoneObsTickIdP = '';
        NoneObsTickIdD = '';
        NoneIsCyclopePathDiscId = 'none';
    }

    //hide some tables
    HideReport('QualifPathCarousel' + 'TableReportId');

    //Spin
    ActionBtnSpin(ActionBtnId);

    var Pattern = 'QualifPath';
    var PatternTableId = Pattern + 'TableId';
    var PatternTableReportId = Pattern + 'TableReportId';

    //Get
    HideReport(PatternTableReportId);
    $('#' + PatternTableId).DataTable().destroy();;
    $('#' + PatternTableId).DataTable({
        "initComplete": function (settings, json) {
            ActionBtnIconSet(ActionBtnId, Icon);
            ShowReport(PatternTableReportId);
        },
        "ajax": {
            "url": "/Qualif/QualifPathGet",
            "type": "GET",
            "datatype": "json",
            "data": {
                "RegionId": RegionId,
                "LSId": LSId,
                "StationNumber": StationNumber,
                "LaneName": LaneName,
                "DhmStringStart": DhmStringStart,
                "DhmStringEnd": DhmStringEnd,
                "IsImage": IsImage,
                "IsImageIapi": IsImageIapi,

                "RegionIdO": RegionIdO,
                "LSIdO": LSIdO,
                "StationNumberO": StationNumberO,
                "LaneNameO": LaneNameO,
                "DhmStringStartO": DhmStringStartO,
                "DhmStringEndO": DhmStringEndO,
                "IsImageO": IsImageO,
                "IsImageIapiO": IsImageIapiO,

                "BillingId": BillingId,
                "CategoryId": CategoryId,

                "PresetId": PresetId,
                "ObsPassId": ObsPassId,
                "ObsTickId": ObsTickId,
                "ObsMpId": ObsMpId,

                "IsConvenientContext": IsConvenientContext,
                "IsConvenientIapi": IsConvenientIapi,
                "IsConvenientClass": IsConvenientClass,
                "IsPathQualified": IsPathQualified,

                "IsConvenientContextO": IsConvenientContextO,
                "IsConvenientIapiO": IsConvenientIapiO,

                "IsContextOnly": IsContextOnly,
                "IsIapiOnly": IsIapiOnly,
                "IsPathOnly": IsPathOnly,
                "IsSortieOnly": IsSortieOnly,

                "RowIdTrxLane": RowIdTrxLane,
                "ProductNumber": ProductNumber,

                "IsLabel": IsLabel,
                "IsCyclopeClassify": IsCyclopeClassify,
                "IsCyclopePath": IsCyclopePath,

                "OctalCode": OctalCode,
                "IsPathQualifiable": IsPathQualifiable,
                "IsLabeled": IsLabeled,
                "SerialNumber": SerialNumber,
                "LicensePlate": LicensePlate,

                "QualifControlId": QualifControlId,
                "QualifReasonId": QualifReasonId,

                "IsCyclopeClassDiscId": IsCyclopeClassDiscId,
                "IsCyclopePathDiscId": IsCyclopePathDiscId
            }
        },
        "columns": [
            { "data": "NetworkId" }, //0
            { "data": "StationNumber" }, //1
            { "data": "LaneName" }, //2           
            { "data": "DhmValue" },//3            
            { "data": "LicensePlate" },//4            
            { "data": "ProductNumber" },//5
            { "data": "TrxNumber" },//6
            { "data": "TrxIndex" },//7            
            { "data": "CategoryName" },//8
            { "data": "BillingId" },//9
            { "data": "CashierNumber" },//10
            { "data": "OctalCode" },//11
            { "data": "LicensePlate" },//12
            { "data": "ImagePath" },//13
            { "data": "ImageIapiPath" },//14

            { "data": "NetworkIdO" },//15
            { "data": "StationNumberO" },//16
            { "data": "LaneNameO" },//17
            { "data": "DhmValueO" },//18                                      
            { "data": "ReadTickNumber" },//19
            { "data": "LicensePlateO" },//20
            { "data": "ImagePathO" },//21
            { "data": "ImageIapiPathO" },//22

            { "data": "SerialNumber" },//23
            { "data": "SoldBefore" },//24
            { "data": "SoldAfter" },//25

            { "data": "ObsTickId" },//26
            { "data": "ObsMpId" },//27
            { "data": "ObsPassId" },//28

            { "data": "Speed" },//29
            { "data": "Duration" },//30

            { "data": "CertTrxLaneInterfaceRowId" },//31 IsPathQualified
            { "data": "CertTrxLaneInterfaceRowId" },//32 Edit
            { "data": "CertTrxLaneInterfaceRowId" },//33 Export

            { "data": "CertTrxLaneInterfaceRowId" },//34
            { "data": "CertTrxLaneInterfaceRowId" },//35
            { "data": "CertTrxLaneInterfaceRowId" },//36
        ],
        "columnDefs": [
            { "width": "3%", "className": "text-center none", "targets": 0 },
            { "width": "3%", "className": "text-center " + NoneIsCyclopePathDiscId, "targets": 1 },
            { "width": "3%", "className": "text-center " + NoneIsCyclopePathDiscId, "targets": 2 },
            { "width": "3%", "className": "text-center " + NoneIsCyclopePathDiscId, "targets": 3 },
            { "width": "3%", "className": "text-center " + NoneObsTickIdD + ' ' + NoneObsTickIdP + ' ' + NoneIsCyclopePathDiscId, "targets": 4 },
            { "width": "3%", "className": "text-center none", "targets": 5 },
            { "width": "3%", "className": "text-center " + NoneObsTickIdD, "targets": 6 },
            { "width": "3%", "className": "text-center " + NoneObsTickIdP + ' ' + NoneObsTickIdD + ' ' + NoneIsCyclopePathDiscId, "targets": 7 },
            { "width": "3%", "className": "text-center " + NoneObsTickIdP + ' ' + NoneObsTickIdD + ' ' + NoneIsCyclopePathDiscId, "targets": 8 },
            { "width": "3%", "className": "text-center " + NoneIsCyclopePathDiscId, "targets": 9 },
            { "width": "3%", "className": "text-center " + NoneObsTickIdD, "targets": 10 },
            { "width": "3%", "className": "text-center " + NoneObsTickIdP + ' ' + NoneObsTickIdD + ' ' + NoneIsCyclopePathDiscId, "targets": 11 },
            { "width": "3%", "className": "text-center " + NoneIsCyclopePathDiscId, "targets": 12 },
            { "width": "3%", "className": "text-center", "targets": 13 },
            { "width": "3%", "className": "text-center", "targets": 14 },

            { "width": "3%", "className": "text-center none", "targets": 15 },
            { "width": "3%", "className": "text-center " + NoneIsCyclopePathDiscId, "targets": 16 },
            { "width": "3%", "className": "text-center " + NoneIsCyclopePathDiscId, "targets": 17 },
            { "width": "3%", "className": "text-center", "targets": 18 },
            { "width": "3%", "className": "text-center " + NoneObsTickIdP, "targets": 19 },
            { "width": "3%", "className": "text-center", "targets": 20 },
            { "width": "3%", "className": "text-center", "targets": 21 },
            { "width": "3%", "className": "text-center", "targets": 22 },

            { "width": "3%", "className": "text-center", "targets": 23 },
            { "width": "3%", "className": "text-right none", "targets": 24 },
            { "width": "3%", "className": "text-right none", "targets": 25 },

            { "width": "3%", "className": "text-center " + NoneObsTickIdD + ' ' + NoneObsTickIdP + ' ' + NoneIsCyclopePathDiscId, "targets": 26 },
            { "width": "3%", "className": "text-center " + NoneObsTickIdD + ' ' + NoneObsTickIdP + ' ' + NoneIsCyclopePathDiscId, "targets": 27 },
            { "width": "3%", "className": "text-center " + NoneObsTickIdD + ' ' + NoneObsTickIdP + ' ' + NoneIsCyclopePathDiscId, "targets": 28 },

            { "width": "3%", "className": "text-right " + NoneObsTickIdP, "targets": 29 },
            { "width": "3%", "className": "text-right " + NoneObsTickIdP, "targets": 30 },

            { "width": "3%", "className": "text-center " + NoneIsCyclopePathDiscId, "targets": 31 },

            { "width": "3%", "className": "text-center " + NoneIsCyclopePathDiscId, "targets": 32 },
            { "width": "3%", "className": "text-center " + NoneIsCyclopePathDiscId, "targets": 33 },

            { "width": "3%", "className": "text-center", "targets": 34 },
            { "width": "3%", "className": "text-center", "targets": 35 },
            { "width": "3%", "className": "text-center", "targets": 36 },

            { "targets": 0, "render": function (data, type, row) { return data; } },
            { "targets": 1, "render": function (data, type, row) { return data; } },
            { "targets": 2, "render": function (data, type, row) { return data; } },
            { "targets": 3, "render": function (data, type, row) { return GetDhmValueFromDataTableDate(data); } },
            { "targets": 4, "render": function (data, type, row) { return data; } },
            { "targets": 5, "render": function (data, type, row) { return data; } },
            { "targets": 6, "render": function (data, type, row) { return data; } },
            { "targets": 7, "render": function (data, type, row) { return data; } },
            { "targets": 8, "render": function (data, type, row) { return data; } },
            { "targets": 9, "render": function (data, type, row) { return data; } },
            { "targets": 10, "render": function (data, type, row) { return data; } },
            { "targets": 11, "render": function (data, type, row) { return data; } },
            { "targets": 12, "render": function (data, type, row) { return data; } },
            { "targets": 13, "render": function (data, type, row) { return QualifImageGet(data); } },
            { "targets": 14, "render": function (data, type, row) { return QualifImageGet(data); } },

            { "targets": 15, "render": function (data, type, row) { return data; } },
            { "targets": 16, "render": function (data, type, row) { return data; } },
            { "targets": 17, "render": function (data, type, row) { return data; } },
            { "targets": 18, "render": function (data, type, row) { return GetDhmValueNulFromDataTableDate(data); } },
            { "targets": 19, "render": function (data, type, row) { return data; } },
            { "targets": 20, "render": function (data, type, row) { return data; } },
            { "targets": 21, "render": function (data, type, row) { return QualifImageGet(data); } },
            { "targets": 22, "render": function (data, type, row) { return QualifImageGet(data); } },

            { "targets": 23, "render": function (data, type, row) { return data; } },
            { "targets": 24, "render": function (data, type, row) { return data; } },
            { "targets": 25, "render": function (data, type, row) { return data; } },

            { "targets": 26, "render": function (data, type, row) { return data; } },
            { "targets": 27, "render": function (data, type, row) { return QualifObsMpSoldGet(data); } },
            { "targets": 28, "render": function (data, type, row) { return data; } },

            {
                "targets": 29, "render": function (data, type, row) {
                    if (ObsTickId == 'D') {
                        return DataTableDiffIntFourThresholdsLowGet(row['Speed'], 10, 40, 60, 80)
                    }
                    else {
                        return data;
                    }
                }
            },
            { "targets": 30, "render": function (data, type, row) { return data; } },

            {
                "targets": 31, "render": function (data, type, row) {

                    if (ObsTickId == 'P') {
                        return DataTableCheckBoxGet(Pattern, data, row['IsPathQualifiedObsTickIdP'], '');
                    }
                    else {
                        if (ObsTickId == 'D') {
                            return DataTableCheckBoxGet(Pattern, data, row['IsPathQualifiedObsTickIdD'], '');
                        }
                        else {
                            return '';
                        }
                    }
                }
            },
            {
                "targets": 32, "render": function (data, type, row) {

                    var PatternForm = 'Edit';
                    var Icon = 'fas fa-edit';
                    var Label = '';
                    var RowId = data;

                    var OnClick = 'QualifPathFormLoad(\'' +
                        Pattern + '\',\'' +
                        PatternForm + '\', ' +
                        RowId + ',' +
                        '\'' + row['ImagePath'] + '\', ' +
                        '\'' + row['ImageIapiPath'] + '\', ' +
                        '\'' + row['ImagePathO'] + '\', ' +
                        '\'' + row['ImageIapiPathO'] + '\', ' +

                        '\'' + row['StationName'] + '\', ' +
                        '\'' + row['LaneName'] + '\', ' +
                        row['DhmValue'] + ', ' +

                        '\'' + row['MpName'] + '\', ' +
                        '\'' + row['CategoryName'] + '\', ' +

                        '\'' + row['ObsPassName'] + '\', ' +
                        '\'' + row['ObsMpName'] + '\', ' +
                        '\'' + row['ObsTickName'] + '\', ' +

                        '\'' + row['StationNameO'] + '\', ' +
                        '\'' + row['LaneNameO'] + '\', ' +
                        row['DhmValueO'] + ', ' +


                        '\'' + ObsTickId + '\', ' +
                        '\'' + row['SerialNumber'] + '\', ' +
                        '\'' + row['LicensePlate'] + '\'' +
                        ')';


                    return DataTableFormBtnIdGet(Pattern, PatternForm, RowId, Label, OnClick, Icon);
                }
            },
            {
                "targets": 33, "render": function (data, type, row) {
                    //alert(row['QualifControlIdP'] + '-' + row['QualifControlIdD']);
                    if (row['QualifControlIdP'] == '02' || row['QualifControlIdD'] == '06') {
                        
                        var QualifControlTypeId = row['ObsTickId'];
                        var argument = row['CertTrxLaneInterfaceRowId'] + ', ' +
                            '\'' + QualifControlTypeId + '\', ' +
                            '\'' + row['ImagePath'] + '\', ' +
                            '\'' + row['ImageIapiPath'] + '\', ' +
                            '\'' + row['ImagePathO'] + '\', ' +
                            '\'' + row['ImageIapiPathO'] + '\'';
                        /*return DataTableButtonGet('QualifPathExport', data, argument, '', 'dt-btn-cl gc-bc1-cl', 'fas fa-file-pdf btn-icon-cl gc-c1-cl', '');*/
                        //var Btn1 = DataTableButtonGet('QualifPathExport', data, argument, '', 'dt-btn-cl gc-bc1-cl', 'fas fa-cog btn-icon-cl gc-c1-cl', '');

                        
                        var argument1 = row['CertTrxLaneInterfaceRowId'] + ', ' + '\'' + row['TpdMinutePath'] + '\'';
                        var Btn2 = DataTableButtonGet('QualifTpdMinuteExport', row['TpdMinutePath'], argument1, '', 'dt-btn-cl gc-bc3-cl', 'fas fa-file-pdf btn-icon-cl gc-c1-cl', '');

                        //if (row['QualifControlIdD'] == '06') {
                        //    return Btn1 + Btn2;
                        //}
                        //else {
                        //    return Btn1;
                        //}

                        return Btn2;
                    }
                    else {
                        return '';
                    }
                }
            },

            { "targets": 34, "render": function (data, type, row) { return DataTableButtonGet('CertImageFromLaneUpload', data, '\'' + data + '\'', '', 'dt-btn-cl gc-bc1-cl', 'fas fa-upload btn-icon-cl gc-c1-cl', '') } },
            { "targets": 35, "render": function (data, type, row) { return DataTableButtonGet('CertImageFrom165Upload', data, '\'' + data + '\'', '', 'dt-btn-cl gc-bc1-cl', 'fas fa-upload btn-icon-cl gc-c1-cl', '') } },
            { "targets": 36, "render": function (data, type, row) { return DataTableButtonGet('CertImageFrom23Upload', data, '\'' + data + '\'', '', 'dt-btn-cl gc-bc1-cl', 'fas fa-upload btn-icon-cl gc-c1-cl', '') } },

            
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
        "iDisplayLength": 10,
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

            //Total1 = api.column(8).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);
            //$(api.column(8).footer()).html(numFormat(Total1));

            //IntTotal1 = api.column(8).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);
            //IntTotal2 = api.column(9).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);

            //$(api.column(7).footer()).html(numFormat(DoubleTotal1));

            //$(api.column(9).footer()).html(numShortFormat(IntTotal2));
        }
    });
}

function QualifTpdMinuteExport(TpdMinutePath) {

    var PrintLink = TpdMinutePath;

    NavigateTo(PrintLink, true);

}

function QualifPathExport(RowIdTrxLane, QualifControlTypeId,
                          ImagePath, ImageIapiPath, ImagePathO, ImageIapiPathO) {

    if (QualifControlTypeId == 'P') {
        var PrintLink = '/RepoSpc/RepoSpcReportExport?' +
            'SpcReportRowId=' + SpcReportRowId +
            '&FileType=' + FileType;

        NavigateTo(PrintLink, true);
    }

    if (QualifControlTypeId == 'D') {

        var PrintLink = '/Qualif/QualifObsTickIdDExport?' +
            'RowIdTrxLane=' + RowIdTrxLane +
            '&QualifControlTypeId=' + QualifControlTypeId +
            '&ImagePath=' + ImagePath +
            '&ImageIapiPath=' + ImageIapiPath +
            '&ImagePathO=' + ImagePathO +
            '&ImageIapiPathO=' + ImageIapiPathO;

        NavigateTo(PrintLink, true);
    } 
}

function QualifTrxBorneByLicensePlateSearch(CertTrxLaneInterfaceRowId) {
    var ActionBtnId = new String('QualifTrxBorneByLicensePlateSearch' + 'BtnId' + CertTrxLaneInterfaceRowId);
    var Icon = 'fas fa-search';
    var IsMargin = false;
    ActionSpin(ActionBtnId, IsMargin);

    var LicensePlate = GetElementValue('LicensePlateId' + CertTrxLaneInterfaceRowId);
    QualifPathFormAllHide();
    ShowTableReport('QualifPathOpe');
    ShowTableReport('QualifPathLogs');
    ShowTableReport('QualifPathRequests');
    QualifTrxBorneByLicensePlateGet(ActionBtnId, Icon, IsMargin, CertTrxLaneInterfaceRowId, LicensePlate);
}

function QualifPathByLicensePlateSearch(CertTrxLaneInterfaceRowId) {
    var ActionBtnId = new String('QualifPathByLicensePlateSearch' + 'BtnId' + CertTrxLaneInterfaceRowId);
    var Icon = 'fas fa-search';
    var IsMargin = false;
    ActionSpin(ActionBtnId, IsMargin);

    var LicensePlate = GetElementValue('LicensePlateId' + CertTrxLaneInterfaceRowId);

    QualifPathFormAllHide();
    ShowTableReport('QualifPathOpe');
    ShowTableReport('QualifPathLogs');
    ShowTableReport('QualifPathRequests');
    QualifPathByLicensePlateGet(ActionBtnId, Icon, IsMargin, CertTrxLaneInterfaceRowId, LicensePlate);
}

function QualifTrxBorneBySerialNumberSearch(CertTrxLaneInterfaceRowId) {
    var ActionBtnId = new String('QualifTrxBorneBySerialNumberSearch' + 'BtnId' + CertTrxLaneInterfaceRowId);
    var Icon = 'fas fa-search';
    var IsMargin = false;

    ActionSpin(ActionBtnId, IsMargin);

    var SerialNumber = GetElementValue('SerialNumberId' + CertTrxLaneInterfaceRowId);
    QualifPathFormAllHide();
    ShowTableReport('QualifPathOpe');
    ShowTableReport('QualifPathLogs');
    ShowTableReport('QualifPathRequests');
    QualifTrxBorneBySerialNumberGet(ActionBtnId, Icon, IsMargin, CertTrxLaneInterfaceRowId, SerialNumber);
}

function QualifPathBySerialNumberSearch(CertTrxLaneInterfaceRowId) {
    var ActionBtnId = new String('QualifPathBySerialNumberSearch' + 'BtnId' + CertTrxLaneInterfaceRowId);
    var Icon = 'fas fa-search';
    var IsMargin = false;

    ActionSpin(ActionBtnId, IsMargin);

    var SerialNumber = GetElementValue('SerialNumberId' + CertTrxLaneInterfaceRowId);
    QualifPathFormAllHide();
    ShowTableReport('QualifPathOpe');
    ShowTableReport('QualifPathLogs');
    ShowTableReport('QualifPathRequests');
    QualifPathBySerialNumberGet(ActionBtnId, Icon, IsMargin, CertTrxLaneInterfaceRowId, SerialNumber);
}

function QualifPathByLicensePlateGet(ActionBtnId, Icon, IsMargin, CertTrxLaneInterfaceRowId, LicensePlate) {

    //Spin
    //ActionBtnSpin(ActionBtnId);

    var Pattern = 'QualifPathByLicensePlate';
    var PatternTableId = Pattern + 'TableId';
    var PatternTableReportId = Pattern + 'TableReportId';

    //Get
    HideReport(PatternTableReportId);
    $('#' + PatternTableId).DataTable().destroy();;
    $('#' + PatternTableId).DataTable({
        "initComplete": function (settings, json) {
            QualifTrxBorneByLicensePlateGet(ActionBtnId, Icon, IsMargin, CertTrxLaneInterfaceRowId, LicensePlate)
            ActionBtnSet(ActionBtnId, Icon, IsMargin);
            ShowReport(PatternTableReportId);
        },
        "ajax": {
            "url": "/Qualif/QualifPathByLicensePlateGet",
            "type": "GET",
            "datatype": "json",
            "data": {
                "CertTrxLaneInterfaceRowId": CertTrxLaneInterfaceRowId,
                "LicensePlate": LicensePlate
            }
        },
        "columns": [
            { "data": "DhmValue" },//0 
            { "data": "StationNumber" }, //1
            { "data": "LaneName" }, //2 
            { "data": "TrxNumber" },//3
            { "data": "TrxIndex" },//4
                       
            { "data": "LicensePlate" },//5           
            { "data": "ProductNumber" },//6
            { "data": "ReadTickNumber" },//7
            { "data": "SerialNumber" },//8

            { "data": "CategoryName" },//9
            { "data": "BillingId" },//10
            { "data": "CashierNumber" },//11
            { "data": "OctalCode" },//12

            { "data": "ImagePath" },//13
            { "data": "ImageIapiPath" },//14
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
            { "width": "3%", "className": "text-center", "targets": 11 },
            { "width": "3%", "className": "text-center", "targets": 12 },

            { "width": "3%", "className": "text-center", "targets": 13 },
            { "width": "3%", "className": "text-center", "targets": 14 },

            { "targets": 0, "render": function (data, type, row) { return GetDhmValueFromDataTableDate(data); } },
            { "targets": 1, "render": function (data, type, row) { return data; } },
            { "targets": 2, "render": function (data, type, row) { return data; } },
            { "targets": 3, "render": function (data, type, row) { return data; } },
            { "targets": 4, "render": function (data, type, row) { return data; } },

            { "targets": 5, "render": function (data, type, row) { return data; } },
            { "targets": 6, "render": function (data, type, row) { return data; } },
            { "targets": 7, "render": function (data, type, row) { return data; } },
            { "targets": 8, "render": function (data, type, row) { return data; } },

            { "targets": 9, "render": function (data, type, row) { return data; } },
            { "targets": 10, "render": function (data, type, row) { return data; } },
            { "targets": 11, "render": function (data, type, row) { return data; } },
            { "targets": 12, "render": function (data, type, row) { return data; } },

            { "targets": 13, "render": function (data, type, row) { return QualifImageGet(data); } },
            { "targets": 14, "render": function (data, type, row) { return QualifImageGet(data); } },
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
        "iDisplayLength": 10,
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

            //Total1 = api.column(8).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);
            //$(api.column(8).footer()).html(numFormat(Total1));

            //IntTotal1 = api.column(8).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);
            //IntTotal2 = api.column(9).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);

            //$(api.column(7).footer()).html(numFormat(DoubleTotal1));

            //$(api.column(9).footer()).html(numShortFormat(IntTotal2));
        }
    });
}

//1
function QualifTrxBorneByLicensePlateGet(ActionBtnId, Icon, IsMargin, CertTrxLaneInterfaceRowId, LicensePlate) {

    //Spin
    //ActionBtnSpin(ActionBtnId);

    var Pattern = 'QualifTrxBorneByLicensePlate';
    var PatternTableId = Pattern + 'TableId';
    var PatternTableReportId = Pattern + 'TableReportId';

    //Get
    HideReport(PatternTableReportId);
    $('#' + PatternTableId).DataTable().destroy();;
    $('#' + PatternTableId).DataTable({
        "initComplete": function (settings, json) {
            ActionBtnSet(ActionBtnId, Icon, IsMargin);
            ShowReport(PatternTableReportId);
        },
        "ajax": {
            "url": "/Qualif/QualifTrxBorneByLicensePlateGet",
            "type": "GET",
            "datatype": "json",
            "data": {
                "CertTrxLaneInterfaceRowId": CertTrxLaneInterfaceRowId,
                "LicensePlate": LicensePlate
            }
        },
        "columns": [
            { "data": "NetworkId" }, //0
            { "data": "StationNumber" }, //1
            { "data": "LaneName" }, //2 
            { "data": "DhmValue" },//3
            { "data": "TrxNumber" }, //4
            { "data": "TrxIndex" }, //5

            { "data": "LicensePlate" }, //6
            { "data": "TicketNumber" }, //7
            { "data": "SerialNumber" }, //8

            { "data": "ImagePath" }, //9
            { "data": "ImageIapiPath" }, //10
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

            { "width": "3%", "className": "text-left", "targets": 9 },
            { "width": "3%", "className": "text-left", "targets": 10 },

            { "targets": 0, "render": function (data, type, row) { return data; } },
            { "targets": 1, "render": function (data, type, row) { return data; } },
            { "targets": 2, "render": function (data, type, row) { return data; } },
            { "targets": 3, "render": function (data, type, row) { return GetDhmValueFromDataTableDate(data); } },
            { "targets": 4, "render": function (data, type, row) { return data; } },
            { "targets": 5, "render": function (data, type, row) { return data; } },

            { "targets": 6, "render": function (data, type, row) { return data; } },
            { "targets": 7, "render": function (data, type, row) { return data; } },
            { "targets": 8, "render": function (data, type, row) { return data; } },

            { "targets": 9, "render": function (data, type, row) { return QualifImageGet(data); } },
            { "targets": 10, "render": function (data, type, row) { return QualifImageGet(data); } }
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
        "iDisplayLength": 20,
        "processing": false,
        "responsive": true,
        "bFilter": true,
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

            //Total1 = api.column(8).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);
            //$(api.column(8).footer()).html(numFormat(Total1));

            //IntTotal1 = api.column(8).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);
            //IntTotal2 = api.column(9).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);

            //$(api.column(7).footer()).html(numFormat(DoubleTotal1));

            //$(api.column(9).footer()).html(numShortFormat(IntTotal2));
        }
    });
}


function QualifTrxBorneBySerialNumberGet(ActionBtnId, Icon, IsMargin, CertTrxLaneInterfaceRowId, SerialNumber) {

    //Spin
    //ActionBtnSpin(ActionBtnId);

    var Pattern = 'QualifTrxBorneBySerialNumber';
    var PatternTableId = Pattern + 'TableId';
    var PatternTableReportId = Pattern + 'TableReportId';

    //Get
    HideReport(PatternTableReportId);
    $('#' + PatternTableId).DataTable().destroy();
    $('#' + PatternTableId).DataTable({
        "initComplete": function (settings, json) {
            ActionBtnSet(ActionBtnId, Icon, IsMargin);
            ShowReport(PatternTableReportId);
        },
        "ajax": {
            "url": "/Qualif/QualifTrxBorneBySerialNumberGet",
            "type": "GET",
            "datatype": "json",
            "data": {
                "CertTrxLaneInterfaceRowId": CertTrxLaneInterfaceRowId,
                "SerialNumber": SerialNumber
            }
        },
        "columns": [
            { "data": "NetworkId" }, //0
            { "data": "StationNumber" }, //1
            { "data": "LaneName" }, //2 
            { "data": "DhmValue" },//3
            { "data": "TrxNumber" }, //4
            { "data": "TrxIndex" }, //5

            { "data": "LicensePlate" }, //6
            { "data": "TicketNumber" }, //7
            { "data": "SerialNumber" }, //8
            
            { "data": "ImagePath" }, //9
            { "data": "ImageIapiPath" }, //10
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

            { "width": "3%", "className": "text-left", "targets": 9 },
            { "width": "3%", "className": "text-left", "targets": 10 },

            { "targets": 0, "render": function (data, type, row) { return data; } },
            { "targets": 1, "render": function (data, type, row) { return data; } },
            { "targets": 2, "render": function (data, type, row) { return data; } },
            { "targets": 3, "render": function (data, type, row) { return GetDhmValueFromDataTableDate(data); } },
            { "targets": 4, "render": function (data, type, row) { return data; } },
            { "targets": 5, "render": function (data, type, row) { return data; } },

            { "targets": 6, "render": function (data, type, row) { return data; } },
            { "targets": 7, "render": function (data, type, row) { return data; } },
            { "targets": 8, "render": function (data, type, row) { return data; } },

            { "targets": 9, "render": function (data, type, row) { return QualifImageGet(data); } },
            { "targets": 10, "render": function (data, type, row) { return QualifImageGet(data); } }
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
        "iDisplayLength": 20,
        "processing": false,
        "responsive": true,
        "bFilter": true,
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

            //Total1 = api.column(8).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);
            //$(api.column(8).footer()).html(numFormat(Total1));

            //IntTotal1 = api.column(8).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);
            //IntTotal2 = api.column(9).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);

            //$(api.column(7).footer()).html(numFormat(DoubleTotal1));

            //$(api.column(9).footer()).html(numShortFormat(IntTotal2));
        }
    });
}

function QualifPathBySerialNumberGet(ActionBtnId, Icon, IsMargin, CertTrxLaneInterfaceRowId, SerialNumber) {

    //Spin
    //ActionBtnSpin(ActionBtnId);
    var NoneObsTickIdP = 'none';
    var NoneObsTickIdD = 'none';

    var Pattern = 'QualifPathBySerialNumber';
    var PatternTableId = Pattern + 'TableId';
    var PatternTableReportId = Pattern + 'TableReportId';

    //Get
    HideReport(PatternTableReportId);
    $('#' + PatternTableId).DataTable().destroy();;
    $('#' + PatternTableId).DataTable({
        "initComplete": function (settings, json) {
            QualifTrxBorneBySerialNumberGet(ActionBtnId, Icon, IsMargin, CertTrxLaneInterfaceRowId, SerialNumber);
            ActionBtnSet(ActionBtnId, Icon, IsMargin);            
            ShowReport(PatternTableReportId);
        },
        "ajax": {
            "url": "/Qualif/QualifPathBySerialNumberGet",
            "type": "GET",
            "datatype": "json",
            "data": {
                "CertTrxLaneInterfaceRowId": CertTrxLaneInterfaceRowId,
                "SerialNumber": SerialNumber,
            }
        },
        "columns": [
            { "data": "NetworkId" }, //0
            { "data": "StationNumber" }, //1
            { "data": "LaneName" }, //2           
            { "data": "DhmValue" },//3            
            { "data": "LicensePlate" },//4            
            { "data": "ProductNumber" },//5
            { "data": "TrxNumber" },//6
            { "data": "TrxIndex" },//7            
            { "data": "CategoryName" },//8
            { "data": "BillingId" },//9
            { "data": "CashierNumber" },//10
            { "data": "OctalCode" },//11
            { "data": "LicensePlate" },//12
            { "data": "ImagePath" },//13
            { "data": "ImageIapiPath" },//14

            { "data": "NetworkIdO" },//15
            { "data": "StationNumberO" },//16
            { "data": "LaneNameO" },//17
            { "data": "DhmValueO" },//18                                      
            { "data": "ReadTickNumber" },//19
            { "data": "LicensePlateO" },//20
            { "data": "ImagePathO" },//21
            { "data": "ImageIapiPathO" },//22

            { "data": "SerialNumber" },//23
            { "data": "SoldBefore" },//24
            { "data": "SoldAfter" },//25

            { "data": "ObsTickId" },//26
            { "data": "ObsMpId" },//27
            { "data": "ObsPassId" },//28

            { "data": "Speed" },//30
            {
                "mData": function vehicle(data, type, dataToSet) {
                    var diffInSeconds = Math.abs(new Date(data.YearD, data.MonthD - 1, data.DayD, data.HourD, data.MinuteD, data.SecondD) -
                        new Date(data.YearO, data.MonthO - 1, data.DayO, data.HourO, data.MinuteO, data.SecondO)) / 1000;
                    var days = Math.floor(diffInSeconds / 60 / 60 / 24);
                    var hours = Math.floor(diffInSeconds / 60 / 60 % 24);
                    var minutes = Math.floor(diffInSeconds / 60 % 60);

                    return GetDigits(hours, 2) + 'H' + GetDigits(minutes, 2) + 'min';

                }
            },//5
        ],
        "columnDefs": [
            { "width": "3%", "className": "text-center none", "targets": 0 },
            { "width": "3%", "className": "text-center", "targets": 1 },
            { "width": "3%", "className": "text-center none", "targets": 2 },
            { "width": "3%", "className": "text-center", "targets": 3 },
            { "width": "3%", "className": "text-center " + NoneObsTickIdD + ' ' + NoneObsTickIdP, "targets": 4 },
            { "width": "3%", "className": "text-center none", "targets": 5 },
            { "width": "3%", "className": "text-center none", "targets": 6 },
            { "width": "3%", "className": "text-center none", "targets": 7 },
            { "width": "3%", "className": "text-center none", "targets": 8 },
            { "width": "3%", "className": "text-center none", "targets": 9 },
            { "width": "3%", "className": "text-center none", "targets": 10 },
            { "width": "3%", "className": "text-center none", "targets": 11 },
            { "width": "3%", "className": "text-center", "targets": 12 },
            { "width": "3%", "className": "text-center", "targets": 13 },
            { "width": "3%", "className": "text-center", "targets": 14 },

            { "width": "3%", "className": "text-center none", "targets": 15 },
            { "width": "3%", "className": "text-center", "targets": 16 },
            { "width": "3%", "className": "text-center none", "targets": 17 },
            { "width": "3%", "className": "text-center", "targets": 18 },
            { "width": "3%", "className": "text-center", "targets": 19 },
            { "width": "3%", "className": "text-center", "targets": 20 },
            { "width": "3%", "className": "text-center", "targets": 21 },
            { "width": "3%", "className": "text-center", "targets": 22 },

            { "width": "3%", "className": "text-center", "targets": 23 },
            { "width": "3%", "className": "text-right none", "targets": 24 },
            { "width": "3%", "className": "text-right none", "targets": 25 },

            { "width": "3%", "className": "text-center", "targets": 26 },
            { "width": "3%", "className": "text-center", "targets": 27 },
            { "width": "3%", "className": "text-center", "targets": 28 },

            { "width": "3%", "className": "text-right", "targets": 29 },
            { "width": "3%", "className": "text-right", "targets": 30 },

            { "targets": 0, "render": function (data, type, row) { return data; } },
            { "targets": 1, "render": function (data, type, row) { return data; } },
            { "targets": 2, "render": function (data, type, row) { return data; } },
            { "targets": 3, "render": function (data, type, row) { return GetDhmValueFromDataTableDate(data); } },
            { "targets": 4, "render": function (data, type, row) { return data; } },
            { "targets": 5, "render": function (data, type, row) { return data; } },
            { "targets": 6, "render": function (data, type, row) { return data; } },
            { "targets": 7, "render": function (data, type, row) { return data; } },
            { "targets": 8, "render": function (data, type, row) { return data; } },
            { "targets": 9, "render": function (data, type, row) { return data; } },
            { "targets": 10, "render": function (data, type, row) { return data; } },
            { "targets": 11, "render": function (data, type, row) { return data; } },
            { "targets": 12, "render": function (data, type, row) { return data; } },
            { "targets": 13, "render": function (data, type, row) { return QualifImageGet(data); } },
            { "targets": 14, "render": function (data, type, row) { return QualifImageGet(data); } },

            { "targets": 15, "render": function (data, type, row) { return data; } },
            { "targets": 16, "render": function (data, type, row) { return data; } },
            { "targets": 17, "render": function (data, type, row) { return data; } },
            { "targets": 18, "render": function (data, type, row) { return GetDhmValueNulFromDataTableDate(data); } },
            { "targets": 19, "render": function (data, type, row) { return data; } },
            { "targets": 20, "render": function (data, type, row) { return data; } },
            { "targets": 21, "render": function (data, type, row) { return QualifImageGet(data); } },
            { "targets": 22, "render": function (data, type, row) { return QualifImageGet(data); } },

            { "targets": 23, "render": function (data, type, row) { return data; } },
            { "targets": 24, "render": function (data, type, row) { return data; } },
            { "targets": 25, "render": function (data, type, row) { return data; } },

            { "targets": 26, "render": function (data, type, row) { return data; } },
            { "targets": 27, "render": function (data, type, row) { return QualifObsMpSoldGet(data); } },
            { "targets": 28, "render": function (data, type, row) { return data; } },

            { "targets": 29, "render": function (data, type, row) { return data; } },
            { "targets": 30, "render": function (data, type, row) { return data; } },
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
        "iDisplayLength": 10,
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

            //Total1 = api.column(8).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);
            //$(api.column(8).footer()).html(numFormat(Total1));

            //IntTotal1 = api.column(8).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);
            //IntTotal2 = api.column(9).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);

            //$(api.column(7).footer()).html(numFormat(DoubleTotal1));

            //$(api.column(9).footer()).html(numShortFormat(IntTotal2));
        }
    });
}

//1
//function QualifTrxBorneBySerialNumberGet(ActionBtnId, Icon, IsMargin, CertTrxLaneInterfaceRowId, SerialNumber) {

//    //Spin
//    //ActionBtnSpin(ActionBtnId);
//    var NoneObsTickIdP = 'none';
//    var NoneObsTickIdD = 'none';

//    var Pattern = 'QualifTrxBorneBySerialNumber';
//    var PatternTableId = Pattern + 'TableId';
//    var PatternTableReportId = Pattern + 'TableReportId';

//    //Get
//    HideReport(PatternTableReportId);
//    $('#' + PatternTableId).DataTable().destroy();;
//    $('#' + PatternTableId).DataTable({
//        "initComplete": function (settings, json) {
//            ActionBtnSet(ActionBtnId, Icon, IsMargin);
//            ShowReport(PatternTableReportId);
//        },
//        "ajax": {
//            "url": "/Qualif/QualifTrxBorneBySerialNumberGet",
//            "type": "GET",
//            "datatype": "json",
//            "data": {
//                "CertTrxLaneInterfaceRowId": CertTrxLaneInterfaceRowId,
//                "SerialNumber": SerialNumber,
//            }
//        },
//        "columns": [
//            { "data": "NetworkId" }, //0
//            { "data": "StationNumber" }, //1
//            { "data": "LaneName" }, //2           
//            { "data": "DhmValue" },//3            
//            { "data": "LicensePlate" },//4            
//            { "data": "ProductNumber" },//5
//            { "data": "TrxNumber" },//6
//            { "data": "TrxIndex" },//7            
//            { "data": "CategoryName" },//8
//            { "data": "BillingId" },//9
//            { "data": "CashierNumber" },//10
//            { "data": "OctalCode" },//11
//            { "data": "LicensePlate" },//12
//            { "data": "ImagePath" },//13
//            { "data": "ImageIapiPath" },//14

//            { "data": "NetworkIdO" },//15
//            { "data": "StationNumberO" },//16
//            { "data": "LaneNameO" },//17
//            { "data": "DhmValueO" },//18                                      
//            { "data": "ReadTickNumber" },//19
//            { "data": "LicensePlateO" },//20
//            { "data": "ImagePathO" },//21
//            { "data": "ImageIapiPathO" },//22

//            { "data": "SerialNumber" },//23
//            { "data": "SoldBefore" },//24
//            { "data": "SoldAfter" },//25

//            { "data": "ObsTickId" },//26
//            { "data": "ObsMpId" },//27
//            { "data": "ObsPassId" },//28

//            { "data": "Speed" },//30
//            {
//                "mData": function vehicle(data, type, dataToSet) {
//                    var diffInSeconds = Math.abs(new Date(data.YearD, data.MonthD - 1, data.DayD, data.HourD, data.MinuteD, data.SecondD) -
//                        new Date(data.YearO, data.MonthO - 1, data.DayO, data.HourO, data.MinuteO, data.SecondO)) / 1000;
//                    var days = Math.floor(diffInSeconds / 60 / 60 / 24);
//                    var hours = Math.floor(diffInSeconds / 60 / 60 % 24);
//                    var minutes = Math.floor(diffInSeconds / 60 % 60);

//                    return GetDigits(hours, 2) + 'H' + GetDigits(minutes, 2) + 'min';

//                }
//            },//5
//        ],
//        "columnDefs": [
//            { "width": "3%", "className": "text-center none", "targets": 0 },
//            { "width": "3%", "className": "text-center", "targets": 1 },
//            { "width": "3%", "className": "text-center none", "targets": 2 },
//            { "width": "3%", "className": "text-center", "targets": 3 },
//            { "width": "3%", "className": "text-center " + NoneObsTickIdD + ' ' + NoneObsTickIdP, "targets": 4 },
//            { "width": "3%", "className": "text-center none", "targets": 5 },
//            { "width": "3%", "className": "text-center none", "targets": 6 },
//            { "width": "3%", "className": "text-center none", "targets": 7 },
//            { "width": "3%", "className": "text-center none", "targets": 8 },
//            { "width": "3%", "className": "text-center none", "targets": 9 },
//            { "width": "3%", "className": "text-center none", "targets": 10 },
//            { "width": "3%", "className": "text-center none", "targets": 11 },
//            { "width": "3%", "className": "text-center", "targets": 12 },
//            { "width": "3%", "className": "text-center", "targets": 13 },
//            { "width": "3%", "className": "text-center", "targets": 14 },

//            { "width": "3%", "className": "text-center none", "targets": 15 },
//            { "width": "3%", "className": "text-center", "targets": 16 },
//            { "width": "3%", "className": "text-center none", "targets": 17 },
//            { "width": "3%", "className": "text-center", "targets": 18 },
//            { "width": "3%", "className": "text-center", "targets": 19 },
//            { "width": "3%", "className": "text-center", "targets": 20 },
//            { "width": "3%", "className": "text-center", "targets": 21 },
//            { "width": "3%", "className": "text-center", "targets": 22 },

//            { "width": "3%", "className": "text-center", "targets": 23 },
//            { "width": "3%", "className": "text-right none", "targets": 24 },
//            { "width": "3%", "className": "text-right none", "targets": 25 },

//            { "width": "3%", "className": "text-center", "targets": 26 },
//            { "width": "3%", "className": "text-center", "targets": 27 },
//            { "width": "3%", "className": "text-center", "targets": 28 },

//            { "width": "3%", "className": "text-right", "targets": 29 },
//            { "width": "3%", "className": "text-right", "targets": 30 },

//            { "targets": 0, "render": function (data, type, row) { return data; } },
//            { "targets": 1, "render": function (data, type, row) { return data; } },
//            { "targets": 2, "render": function (data, type, row) { return data; } },
//            { "targets": 3, "render": function (data, type, row) { return GetDhmValueFromDataTableDate(data); } },
//            { "targets": 4, "render": function (data, type, row) { return data; } },
//            { "targets": 5, "render": function (data, type, row) { return data; } },
//            { "targets": 6, "render": function (data, type, row) { return data; } },
//            { "targets": 7, "render": function (data, type, row) { return data; } },
//            { "targets": 8, "render": function (data, type, row) { return data; } },
//            { "targets": 9, "render": function (data, type, row) { return data; } },
//            { "targets": 10, "render": function (data, type, row) { return data; } },
//            { "targets": 11, "render": function (data, type, row) { return data; } },
//            { "targets": 12, "render": function (data, type, row) { return data; } },
//            { "targets": 13, "render": function (data, type, row) { return QualifImageGet(data); } },
//            { "targets": 14, "render": function (data, type, row) { return QualifImageGet(data); } },

//            { "targets": 15, "render": function (data, type, row) { return data; } },
//            { "targets": 16, "render": function (data, type, row) { return data; } },
//            { "targets": 17, "render": function (data, type, row) { return data; } },
//            { "targets": 18, "render": function (data, type, row) { return GetDhmValueNulFromDataTableDate(data); } },
//            { "targets": 19, "render": function (data, type, row) { return data; } },
//            { "targets": 20, "render": function (data, type, row) { return data; } },
//            { "targets": 21, "render": function (data, type, row) { return QualifImageGet(data); } },
//            { "targets": 22, "render": function (data, type, row) { return QualifImageGet(data); } },

//            { "targets": 23, "render": function (data, type, row) { return data; } },
//            { "targets": 24, "render": function (data, type, row) { return data; } },
//            { "targets": 25, "render": function (data, type, row) { return data; } },

//            { "targets": 26, "render": function (data, type, row) { return data; } },
//            { "targets": 27, "render": function (data, type, row) { return QualifObsMpSoldGet(data); } },
//            { "targets": 28, "render": function (data, type, row) { return data; } },

//            { "targets": 29, "render": function (data, type, row) { return data; } },
//            { "targets": 30, "render": function (data, type, row) { return data; } },
//        ],
//        "language": {
//            "lengthMenu": "Afficher _MENU_ lignes par page",
//            "zeroRecords": "Aucun résultat",
//            "info": "Page _PAGE_ / _PAGES_ &nbsp;<i>(Nombre de lignes : _TOTAL_)</i>",
//            "infoEmpty": "---",
//            "infoFiltered": "(Nombre de lignes filtrées : _MAX_ total)",
//            "search": "Filtrer ",
//            "oPaginate": {
//                "sNext": "Suivant",
//                "sPrevious": "Précédent"
//            }
//        },
//        "iDisplayLength": 10,
//        "processing": false,
//        "responsive": true,
//        "bFilter": true,
//        "autoWidth": false,
//        "searching": true,
//        "lengthChange": true,
//        "showNEntries": true,
//        "bInfo": true,
//        "bPaginate": true,
//        "ordering": true,
//        "footerCallback": function (row, data, start, end, display) {
//            var api = this.api(), data;
//            var intVal = function (i) {
//                return typeof i === 'string' ?
//                    i.replace(/[\$,]/g, '') * 1 :
//                    typeof i === 'number' ?
//                        i : 0;
//            };

//            //Total1 = api.column(8).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);
//            //$(api.column(8).footer()).html(numFormat(Total1));

//            //IntTotal1 = api.column(8).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);
//            //IntTotal2 = api.column(9).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);

//            //$(api.column(7).footer()).html(numFormat(DoubleTotal1));

//            //$(api.column(9).footer()).html(numShortFormat(IntTotal2));
//        }
//    });
//}

function CertImageUpload(CertTrxLaneInterfaceRowId) {

    var ActionBtnId = 'CertImageUploadBtnId' + CertTrxLaneInterfaceRowId;
    $('#' + ActionBtnId).find('span').attr('class', 'fa fa-spinner fa-spin btn-icon-cl gc-c1-cl');

    var Icon = 'fas fa-upload btn-icon-cl gc-c1-cl';
    var obj = {};
    obj.CertTrxLaneInterfaceRowId = CertTrxLaneInterfaceRowId;
    $.ajax({
        url: "/Cert/CertImageUpload",
        method: "POST",
        data: JSON.stringify(obj),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            $('#' + ActionBtnId).find('span').attr('class', Icon);
            //AdminMusTrackSearch('', 'Param');
        }
    });

}

function CertImageFromLaneUpload(CertTrxLaneInterfaceRowId) {

    var ActionBtnId = 'CertImageFromLaneUploadBtnId' + CertTrxLaneInterfaceRowId;
    $('#' + ActionBtnId).find('span').attr('class', 'fa fa-spinner fa-spin btn-icon-cl gc-c1-cl');

    var Icon = 'fas fa-upload btn-icon-cl gc-c1-cl';
    var obj = {};
    obj.CertTrxLaneInterfaceRowId = CertTrxLaneInterfaceRowId;
    $.ajax({
        url: "/Cert/CertImageFromLaneUpload",
        method: "POST",
        data: JSON.stringify(obj),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            $('#' + ActionBtnId).find('span').attr('class', Icon);
            //AdminMusTrackSearch('', 'Param');
        }
    });
}


function CertImageRestaure(Id, LaneTypeId, IdTrx, From) {

    var ActionBtnId = 'CertImageRestaureBtnId' + Id;
    var IsMargin = false;
    ActionSpin(ActionBtnId, IsMargin);

    var Icon = 'fas fa-upload btn-icon-cl gc-c1-cl';

    var obj = {};
    obj.LaneTypeId = LaneTypeId;
    obj.IdTrx = IdTrx;
    obj.From = From;
    $.ajax({
        url: "/Cert/CertImageRestaure",
        method: "POST",
        data: JSON.stringify(obj),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            ActionBtnSet(ActionBtnId, Icon, IsMargin);
        }
    });
}

function CertImageFrom23Upload(CertTrxLaneInterfaceRowId) {

    var ActionBtnId = 'CertImageFrom23UploadBtnId' + CertTrxLaneInterfaceRowId;
    $('#' + ActionBtnId).find('span').attr('class', 'fa fa-spinner fa-spin btn-icon-cl gc-c1-cl');

    var Icon = 'fas fa-upload btn-icon-cl gc-c1-cl';
    var obj = {};
    obj.CertTrxLaneInterfaceRowId = CertTrxLaneInterfaceRowId;
    $.ajax({
        url: "/Cert/CertImageFrom23Upload",
        method: "POST",
        data: JSON.stringify(obj),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            $('#' + ActionBtnId).find('span').attr('class', Icon);
            //AdminMusTrackSearch('', 'Param');
        }
    });
}


function CertImageFromBackupUpload(CertTrxLaneInterfaceRowId) {

    var ActionBtnId = 'CertImageFromBackupUploadBtnId' + CertTrxLaneInterfaceRowId;
    $('#' + ActionBtnId).find('span').attr('class', 'fa fa-spinner fa-spin btn-icon-cl gc-c1-cl');

    var Icon = 'fas fa-upload btn-icon-cl gc-c1-cl';
    var obj = {};
    obj.CertTrxLaneInterfaceRowId = CertTrxLaneInterfaceRowId;
    $.ajax({
        url: "/Cert/CertImageFromBackupUpload",
        method: "POST",
        data: JSON.stringify(obj),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            $('#' + ActionBtnId).find('span').attr('class', Icon);
            //AdminMusTrackSearch('', 'Param');
        }
    });
}

function CertImageFrom165Upload(CertTrxLaneInterfaceRowId) {

    var ActionBtnId = 'CertImageFrom165UploadBtnId' + CertTrxLaneInterfaceRowId;
    $('#' + ActionBtnId).find('span').attr('class', 'fa fa-spinner fa-spin btn-icon-cl gc-c1-cl');

    var Icon = 'fas fa-upload btn-icon-cl gc-c1-cl';
    var obj = {};
    obj.CertTrxLaneInterfaceRowId = CertTrxLaneInterfaceRowId;
    $.ajax({
        url: "/Cert/CertImageFrom165Upload",
        method: "POST",
        data: JSON.stringify(obj),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            $('#' + ActionBtnId).find('span').attr('class', Icon);
            //AdminMusTrackSearch('', 'Param');
        }
    });
}

//Load
function QualifPathFormLoad(Pattern, PatternForm, RowIdTrxLane,
    ImagePath,
    ImageIapiPath,
    ImagePathO,
    ImageIapiPathO,

    StationName,
    LaneName,
    DhmValue,

    MpName,
    CategoryId,

    ObsPassName,
    ObsMpName,
    ObsTickName,

    StationNameO,
    LaneNameO,
    DhmValueO,

    ObsTickId,
    SerialNumber,
    LicensePlate) {

    //Sert FormIndex
    var FormIndex = 1;

    var ActionBtnId = 'QualifPathEditBtnId' + RowIdTrxLane;
    var Icon = 'fas fa-edit btn-icon-cl gc-c1-cl';

    //Spin
    ActionBtnSpin(ActionBtnId);

    
    HideReport('QualifPathEditModalDialogReportId');

    //HideTableReport
    QualifPathFormAllHide();

    //Hide
    HideParent('QualifControlId' + FormIndex);
    HideParent('QualifReasonId' + FormIndex);
    HideParent('SensId' + FormIndex);




    

    ////initialize
    var HrefId = "ImageId" + FormIndex + "HrefId";
    var HrefIapiId = "ImageIapiId" + FormIndex + "HrefId";
    var ImageId = "ImageId" + FormIndex;
    var ImageIapiId = "ImageIapiId" + FormIndex;

    var HrefIdO = "ImageIdO" + FormIndex + "HrefId";
    var HrefIapiIdO = "ImageIapiIdO" + FormIndex + "HrefId";
    var ImageIdO = "ImageIdO" + FormIndex;
    var ImageIapiIdO = "ImageIapiIdO" + FormIndex;

    document.getElementById(ImageId).src = "";
    document.getElementById(ImageIapiId).src = "";
    document.getElementById(ImageIdO).src = "";
    document.getElementById(ImageIapiIdO).src = "";

    document.getElementById(HrefId).href = "";
    document.getElementById(HrefIapiId).href = "";
    document.getElementById(HrefIdO).href = "";
    document.getElementById(HrefIapiIdO).href = "";

    //Set modal action buttons
    //ModalActionBtnEditGet(Pattern, '\'' + RowIdTrxLane + '\'', FormIndex);

    //Style
    document.getElementById(Pattern + PatternForm + 'ModalDialogReportId').style.width = '95%';
    document.getElementById(Pattern + PatternForm + 'ModalDialogReportId').style.marginLeft = 'auto';
    document.getElementById(Pattern + PatternForm + 'ModalDialogReportId').style.marginTop = 'auto';
    document.getElementById(Pattern + PatternForm + 'ModalDialogReportId').style.maxWidth = '1900px';

    //Fill
    document.getElementById(ImageId).src = ImagePath;
    document.getElementById(ImageIapiId).src = ImageIapiPath;
    document.getElementById(ImageIdO).src = ImagePathO;
    document.getElementById(ImageIapiIdO).src = ImageIapiPathO;

    document.getElementById(HrefId).href = ImagePath;
    document.getElementById(HrefIapiId).href = ImageIapiPath;
    document.getElementById(HrefIdO).href = ImagePathO;
    document.getElementById(HrefIapiIdO).href = ImageIapiPathO;

    var Info = StationName + ' | ' + LaneName + ' | ' + GetDhmValueNullableFromDataTableDate(DhmValue);
    $('#InfoId' + FormIndex).text(Info);

    $('#MpNameId' + FormIndex).text(MpName);
    $('#CategoryId' + FormIndex).text(CategoryId);

    $('#ObsPassNameId' + FormIndex).text(ObsPassName);
    $('#ObsMpNameId' + FormIndex).text(ObsMpName);
    $('#ObsTickNameId' + FormIndex).text(ObsTickName);

    var InfoO = StationNameO + ' | ' + LaneNameO + ' | ' + GetDhmValueNullableFromDataTableDate(DhmValueO);
    $('#InfoIdO' + FormIndex).text(InfoO);      

    //Set inputs
    ElementInputSet('CommentId1', '');
    ElementInputSet('PlateOrderId1', '');
    ElementInputSet('PlatePrefectureId1', '');
    ElementDropDownListReset('PlateSeriesId1');
    
    

    //Test
    var Label = 'Qualifier';
    var IconIn = 'far fa-save';
    var PatternIn = Pattern + 'Edit';//QualifPathEdit
    var RowId = '\'' + RowIdTrxLane + '\'';

    //Action
    var OnClick = PatternIn + '(' + RowId + ', ' + FormIndex + ', \'' + ObsTickId + '\')';
    ModalActionBtnGet(PatternIn, Label, IconIn, OnClick);

    ////Set drop down lists
    HtmlDropDownListNameOnlyXorWithInputFill('QualifControlId' + FormIndex, '01', '/Qualif/QualifControlsGet', 'QualifControlId', 'QualifControlName', ObsTickId);
    HtmlDropDownListNameOnlyXorWithInputFill('QualifReasonId' + FormIndex, '00', '/Qualif/QualifReasonsGet', 'QualifReasonId', 'QualifReasonName', ObsTickId);
    //HtmlDropDownListNameOnlyXorFill('SensId' + FormIndex, 'S', '/Param/GetSens', 'SensId', 'SensName');
    //HtmlDropDownListNameOnlyFill('CarBrandId' + FormIndex, 0, '/Breach/ParamCarBrandsGet', 'CarBrandId', 'CarBrandName');
    //HtmlDropDownListFill('PlateSeriesId' + FormIndex, 0, '/Breach/ParamLettersGet', 'PlateSeries', 'LetterAr');

    //ShowParent
    ShowParent('QualifControlId' + FormIndex);
    ShowParent('QualifReasonId' + FormIndex);
    ShowParent('SensId' + FormIndex);

    //ShowTableReport
    ShowTableReport('QualifPathLogs');
    ShowTableReport('QualifPathRequests');

    //Get
    QualifPathLogsGet(RowIdTrxLane, ObsTickId);

    //Set OnChange
    document.getElementById('QualifReasonId' + FormIndex).setAttribute("onChange", "QualifPathRequestsGet(" + RowIdTrxLane + ", " + FormIndex + ", \'" + ObsTickId + "\')");
    document.getElementById('SensId' + FormIndex).setAttribute("onChange", "QualifPathRequestsGet(" + RowIdTrxLane + ", " + FormIndex + ", \'" + ObsTickId + "\')");

    if (ObsTickId == 'D') {
        ShowTableReport('QualifPathOpe');
        QualifPathOpeGet(RowIdTrxLane);
    }

    if (ObsTickId == 'I') {
        QualifSearchRepeatByTagFormView(SerialNumber);
        QualifSearchRepeatByPlateFormView(LicensePlate);
    }

    ActionBtnIconSet(ActionBtnId, Icon);

    document.getElementById('QualifPathEditModalContentId').style.overflow = 'scroll';
    document.getElementById('QualifPathEditModalContentId').style.height = '1300px';
    ShowReport('QualifPathEditModalDialogReportId');
}

function QualifPathFormAllHide() {
    HideTableReport('QualifPathLogs');
    HideTableReport('QualifPathRequests');
    HideTableReport('QualifPathOpe');
    HideTableReport('QualifPathByLicensePlate');
    HideTableReport('QualifPathBySerialNumber');
    HideTableReport('QualifTrxBorneByLicensePlate');
    HideTableReport('QualifTrxBorneBySerialNumber');
    HideTableReport('QualifSearchRepeatByTagForm');
    HideTableReport('QualifSearchRepeatByPlateForm');
}

function QualifPathFormLoadOld(Pattern, PatternForm, RowIdTrxLane) {

    var ActionBtnId = 'QualifPathEditBtnId' + RowIdTrxLane;
    var Icon = 'fas fa-edit btn-icon-cl gc-c1-cl';

    //Spin
    ActionBtnSpin(ActionBtnId);

    HideReport('QualifPathEditModalDialogReportId');

    //Sert FormIndex
    var FormIndex = 1;



    ////initialize
    var LabelId = "ImageId" + FormIndex + "LabelId";
    var HrefId = "ImageId" + FormIndex + "HrefId";
    var HrefIapiId = "ImageIapiId" + FormIndex + "HrefId";
    var ImageId = "ImageId" + FormIndex;
    var ImageIapiId = "ImageIapiId" + FormIndex;

    var LabelIdO = "ImageIdO" + FormIndex + "LabelId";
    var HrefIdO = "ImageIdO" + FormIndex + "HrefId";
    var HrefIapiIdO = "ImageIapiIdO" + FormIndex + "HrefId";
    var ImageIdO = "ImageIdO" + FormIndex;
    var ImageIapiIdO = "ImageIapiIdO" + FormIndex;

    document.getElementById(ImageId).src = "";
    document.getElementById(ImageIapiId).src = "";
    document.getElementById(ImageIdO).src = "";
    document.getElementById(ImageIapiIdO).src = "";

    document.getElementById(HrefId).href = "";
    document.getElementById(HrefIapiId).href = "";
    document.getElementById(HrefIdO).href = "";
    document.getElementById(HrefIapiIdO).href = "";





    //Load
    var obj = {};
    obj.RowIdTrxLane = RowIdTrxLane;

    $.ajax({
        url: "/Qualif/QualifPathTrxLaneGet",
        method: "POST",
        data: JSON.stringify(obj),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: true,
        success: function (data) {
            jQuery.each(data, function (index, itemData) {

                ////Set modal action buttons
                ModalActionBtnEditGet(Pattern, '\'' + RowIdTrxLane + '\'', FormIndex);

                //Get features
                var ImagePath = itemData[0].ImagePath;
                var ImageIapiPath = itemData[0].ImageIapiPath;

                var ImagePathO = itemData[0].ImagePathO;
                var ImageIapiPathO = itemData[0].ImageIapiPathO;

                var StationName = itemData[0].StationName;
                var LaneName = itemData[0].LaneName;
                var DhmValue = itemData[0].DhmValue;

                var MpName = itemData[0].MpName;
                var CategoryId = itemData[0].CategoryPreDacId;

                var ObsPassName = itemData[0].ObsPassName;
                var ObsMpName = itemData[0].ObsMpName;
                var ObsTickName = itemData[0].ObsTickName;



                var StationNameO = itemData[0].StationNameO;
                var LaneNameO = itemData[0].LaneNameO;
                var DhmValueO = itemData[0].DhmValueO;

                ////initialize
                var LabelId = "ImageId" + FormIndex + "LabelId";
                var HrefId = "ImageId" + FormIndex + "HrefId";
                var HrefIapiId = "ImageIapiId" + FormIndex + "HrefId";
                var ImageId = "ImageId" + FormIndex;
                var ImageIapiId = "ImageIapiId" + FormIndex;

                var LabelIdO = "ImageIdO" + FormIndex + "LabelId";
                var HrefIdO = "ImageIdO" + FormIndex + "HrefId";
                var HrefIapiIdO = "ImageIapiIdO" + FormIndex + "HrefId";
                var ImageIdO = "ImageIdO" + FormIndex;
                var ImageIapiIdO = "ImageIapiIdO" + FormIndex;

                document.getElementById(ImageId).src = "";
                document.getElementById(ImageIapiId).src = "";
                document.getElementById(ImageIdO).src = "";
                document.getElementById(ImageIapiIdO).src = "";

                document.getElementById(HrefId).href = "";
                document.getElementById(HrefIapiId).href = "";
                document.getElementById(HrefIdO).href = "";
                document.getElementById(HrefIapiIdO).href = "";

                //$(LabelId).text("Image entrée");
                //$(LabelIdO).text("Image sortie");

                document.getElementById(Pattern + PatternForm + 'ModalDialogReportId').className = '';
                document.getElementById(Pattern + PatternForm + 'ModalDialogReportId').style.width = '90%';
                document.getElementById(Pattern + PatternForm + 'ModalDialogReportId').style.marginLeft = '5%';
                document.getElementById(Pattern + PatternForm + 'ModalDialogReportId').style.marginTop = '5%';



                document.getElementById(ImageId).src = ImagePath;
                document.getElementById(ImageIapiId).src = ImageIapiPath;
                document.getElementById(ImageIdO).src = ImagePathO;
                document.getElementById(ImageIapiIdO).src = ImageIapiPathO;

                document.getElementById(HrefId).href = ImagePath;
                document.getElementById(HrefIapiId).href = ImageIapiPath;
                document.getElementById(HrefIdO).href = ImagePathO;
                document.getElementById(HrefIapiIdO).href = ImageIapiPathO;

                var Info = StationName + ' | ' + LaneName + ' | ' + GetDhmValueNullableFromDataTableDate(DhmValue);
                $('#InfoId' + FormIndex).text(Info);

                $('#MpNameId' + FormIndex).text(MpName);
                $('#CategoryId' + FormIndex).text(CategoryId);

                $('#ObsPassNameId' + FormIndex).text(ObsPassName);
                $('#ObsMpNameId' + FormIndex).text(ObsMpName);
                $('#ObsTickNameId' + FormIndex).text(ObsTickName);

                var InfoO = StationNameO + ' | ' + LaneNameO + ' | ' + GetDhmValueNullableFromDataTableDate(DhmValueO);
                $('#InfoIdO' + FormIndex).text(InfoO);


                ////Set drop down lists
                HtmlDropDownListNameOnlyXorFill('QualifControlId' + FormIndex, '01', '/Qualif/QualifControlsGet', 'QualifControlId', 'QualifControlName');
                HtmlDropDownListNameOnlyXorFill('QualifReasonId' + FormIndex, '01', '/Qualif/QualifReasonsGet', 'QualifReasonId', 'QualifReasonName');

                ////Set OnChange
                document.getElementById('QualifControlId' + FormIndex).setAttribute("onChange", "QualifReasonsShow(" + FormIndex + ")");
                document.getElementById('QualifReasonId' + FormIndex).setAttribute("onChange", "QualifCommentShow(" + FormIndex + ")");

                ////Set inputs
                document.getElementById('CommentId' + FormIndex).value = '';

                ////Hide some inputs
                HideReport('QualifReasonId' + FormIndex + 'Parent');
                HideReport('CommentId' + FormIndex + 'Parent');

            });
            ShowReport('QualifPathEditModalDialogReportId');
            ActionBtnIconSet(ActionBtnId, Icon);
        }
    });

    QualifPathLogsGet(RowIdTrxLane);
}

function QualifTrxLaneIsConvenientContextSet(RowIdTrxLane, FormIndex) {
    var IsConvenientContext = new Boolean($('#IsConvenientContextId' + FormIndex).is(":checked"));
    //Edit
    var obj = {};
    obj.RowIdTrxLane = RowIdTrxLane;
    obj.IsConvenientContext = IsConvenientContext;

    $.ajax({
        url: "/Qualif/QualifTrxLaneIsConvenientContextSet",
        method: "POST",
        data: JSON.stringify(obj),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            //BiColumnDisplay();
        }
    });
}

function QualifTrxLaneIsConvenientContextOSet(RowIdTrxLane, FormIndex) {
    var IsConvenientContextO = new Boolean($('#IsConvenientContextOId' + FormIndex).is(":checked"));
    //Edit
    var obj = {};
    obj.RowIdTrxLane = RowIdTrxLane;
    obj.IsConvenientContextO = IsConvenientContextO;

    $.ajax({
        url: "/Qualif/QualifTrxLaneIsConvenientContextOSet",
        method: "POST",
        data: JSON.stringify(obj),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            //BiColumnDisplay();
        }
    });
}

function QualifTrxLaneIsConvenientIapiSet(RowIdTrxLane, FormIndex) {
    var IsConvenientIapi = new Boolean($('#IsConvenientIapiId' + FormIndex).is(":checked"));
    //Edit
    var obj = {};
    obj.RowIdTrxLane = RowIdTrxLane;
    obj.IsConvenientIapi = IsConvenientIapi;

    $.ajax({
        url: "/Qualif/QualifTrxLaneIsConvenientIapiSet",
        method: "POST",
        data: JSON.stringify(obj),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            //BiColumnDisplay();
        }
    });
}


function QualifTrxLaneIsConvenientIapiOSet(RowIdTrxLane, FormIndex) {
    var IsConvenientIapiO = new Boolean($('#IsConvenientIapiOId' + FormIndex).is(":checked"));
    //Edit
    var obj = {};
    obj.RowIdTrxLane = RowIdTrxLane;
    obj.IsConvenientIapiO = IsConvenientIapiO;

    $.ajax({
        url: "/Qualif/QualifTrxLaneIsConvenientIapiOSet",
        method: "POST",
        data: JSON.stringify(obj),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            //BiColumnDisplay();
        }
    });
}

function QualifTrxLaneIsConvenientClassSet(RowIdTrxLane, FormIndex) {
    var IsConvenientClass = new Boolean($('#IsConvenientClassId' + FormIndex).is(":checked"));
    //Edit
    var obj = {};
    obj.RowIdTrxLane = RowIdTrxLane;
    obj.IsConvenientClass = IsConvenientClass;

    $.ajax({
        url: "/Qualif/QualifTrxLaneIsConvenientClassSet",
        method: "POST",
        data: JSON.stringify(obj),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            //BiColumnDisplay();
        }
    });
}

function QualifTrxLaneIsConvenientContextGet(RowIdTrxLane, IsConvenientContext) {
    var Id = RowIdTrxLane;
    var onchange = 'QualifTrxLaneIsConvenientContextSet(' + Id + ',' + RowIdTrxLane + ')';
    var Pattern = 'IsConvenientContextId';
    var data = IsConvenientContext;
    return DataTableCheckBoxGet(Pattern, Id, data, onchange);
}

function QualifTrxLaneIsConvenientContextOGet(RowIdTrxLane, IsConvenientContextO) {
    var Id = RowIdTrxLane;
    var onchange = 'QualifTrxLaneIsConvenientContextOSet(' + Id + ',' + RowIdTrxLane + ')';
    var Pattern = 'IsConvenientContextOId';
    var data = IsConvenientContextO;
    return DataTableCheckBoxGet(Pattern, Id, data, onchange);
}

function QualifTrxLaneIsConvenientIapiGet(RowIdTrxLane, IsConvenientIapi) {
    var Id = RowIdTrxLane;
    var onchange = 'QualifTrxLaneIsConvenientIapiSet(' + Id + ',' + RowIdTrxLane + ')';
    var Pattern = 'IsConvenientIapiId';
    var data = IsConvenientIapi;
    return DataTableCheckBoxGet(Pattern, Id, data, onchange);
}

function QualifTrxLaneIsConvenientIapiOGet(RowIdTrxLane, IsConvenientIapiO) {
    var Id = RowIdTrxLane;
    var onchange = 'QualifTrxLaneIsConvenientIapiOSet(' + Id + ',' + RowIdTrxLane + ')';
    var Pattern = 'IsConvenientIapiOId';
    var data = IsConvenientIapiO;
    return DataTableCheckBoxGet(Pattern, Id, data, onchange);
}

function QualifTrxLaneIsConvenientClassGet(RowIdTrxLane, IsConvenientClass) {
    var Id = RowIdTrxLane;
    var onchange = 'QualifTrxLaneIsConvenientClassSet(' + Id + ',' + RowIdTrxLane + ')';
    var Pattern = 'IsConvenientClassId';
    var data = IsConvenientClass;
    return DataTableCheckBoxGet(Pattern, Id, data, onchange);
}

//Edit
function QualifPathEdit(RowId, FormIndex, ObsTickId) {

    document.getElementById("QualifPath" + RowId).checked = true;

    //Get input values
    var Comment = GetElementValue('CommentId' + FormIndex);
    var QualifControlId = GetElementDropDownListValue('QualifControlId' + FormIndex);
    var QualifReasonId = GetElementDropDownListValue('QualifReasonId' + FormIndex);
    var SensId = GetElementDropDownListValue('SensId' + FormIndex);
    var EquipmentNumber = GetElementDropDownListValue('EquipmentNumberId' + FormIndex);
    var ImageId = "ImageId" + FormIndex;
    var ImageIapiId = "ImageIapiId" + FormIndex;
    var ImageIdO = "ImageIdO" + FormIndex;
    var ImageIapiIdO = "ImageIapiIdO" + FormIndex;

    var ImagePath = document.getElementById(ImageId).src;
    var ImageIapiPath = document.getElementById(ImageIapiId).src;
    var ImagePathO = document.getElementById(ImageIdO).src;
    var ImageIapiPathO = document.getElementById(ImageIapiIdO).src;

    var PlateOrder = GetElementValue('PlateOrderId' + FormIndex);
    var PlateSeries = GetElementDropDownListValue('PlateSeriesId' + FormIndex);
    var PlatePrefecture = GetElementValue('PlatePrefectureId' + FormIndex);
    var CarBrandId = GetElementDropDownListValue('CarBrandId' + FormIndex);

    //Edit
    var obj = {};
    obj.RowIdTrxLane = RowId;
    obj.QualifControlId = QualifControlId;
    obj.QualifReasonId = QualifReasonId;
    obj.SensId = SensId;
    obj.EquipmentNumber = EquipmentNumber;    
    obj.Comment = Comment;

    obj.ImagePath = ImagePath;
    obj.ImageIapiPath = ImageIapiPath;
    obj.ImagePathO = ImagePathO;
    obj.ImageIapiPathO = ImageIapiPathO;

    obj.QualifControlTypeId = ObsTickId;

    obj.PlateOrder = PlateOrder;
    obj.PlateSeries = PlateSeries;
    obj.PlatePrefecture = PlatePrefecture;
    obj.CarBrandId = CarBrandId;


    $.ajax({
        url: "/Qualif/QualifPathEdit",
        method: "POST",
        data: JSON.stringify(obj),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            /*document.getElementById("QualifPath" + RowId).checked = true;*/
            //QualifPathSend(RowId, QualifReasonId);

            if (QualifControlId == '02' || QualifControlId == '06') {
                //QualifPathExport(RowId, ObsTickId, ImagePath, ImageIapiPath, ImagePathO, ImageIapiPathO);
            }            
        }
    });

    var onClickValue = document.getElementById('ParamActionBtnId0').getAttribute('onclick');
    if (onClickValue == 'QualifRobotDisplay()') {
        QualifRobotDisplay();
    }
    

    
}


//Edit
function QualifPathSend(RowIdTrxLane, QualifReasonId) {
    //Edit
    var obj = {};
    obj.RowIdTrxLane = RowIdTrxLane;
    obj.QualifReasonId = QualifReasonId;
    $.ajax({
        url: "/Qualif/QualifPathSend",
        method: "POST",
        data: JSON.stringify(obj),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            //document.getElementById("QualifPath" + RowId).checked = true;
        }
    });
}

function QualifReasonsShow(FormIndex) {
    ShowReport('QualifReasonId' + FormIndex + 'Parent');
}

function QualifCommentShow(FormIndex) {
    ShowReport('CommentId' + FormIndex + 'Parent');
}



//PathSearch
function QualifPathSearch(Id) {
    var ActionBtnId = new String('QualifPathSearch' + 'BtnId' + Id);
    var Icon = 'fas fa-eye btn-icon-cl gc-c1-cl';

    $('#' + ActionBtnId).find('span').attr('class', 'fa fa-spinner fa-spin btn-icon-cl gc-c1-cl');



    var SiteId = new String(Id).substr(8, 2);
    var StationNumber = new String(Id).substr(10, 2);
    var LaneName = '0';
    var DhmStringStart = new String(Id).substr(0, 8) + '0000';
    var DhmStringEnd = new String(Id).substr(0, 8) + '2359';

    var IsImage = false;
    var IsImageIapi = false;

    var SiteIdO = '0';
    var StationNumberO = '0';
    var LaneNameO = '0';
    var DhmStringStartO = '0101190000';
    var DhmStringEndO = new String(Id).substr(0, 8) + '2359';
    var IsImageO = false;
    var IsImageIapiO = false;

    var BillingId = '0';
    var CategoryId = '0';

    var PresetId = '01';
    var ObsPassId = '0';
    var ObsTickId = '0';
    var ObsMpId = '0';

    var IsConvenientContext = false;
    var IsConvenientIapi = false;
    var IsConvenientClass = false;
    var IsPathQualified = false;

    var IsConvenientContextO = false;
    var IsConvenientIapiO = false;
    var IsShort = false;
    var IsIapiOnly = false;
    var IsPathOnly = false;
    var OctalCode = '0';
    var IsPathQualifiable = false;
    var IsLabeled = false;
    var SerialNumber = '';
    var LicensePlate = '';
    var QualifControlId = '0';
    var QualifReasonId = '0';
    var IsCyclopeClassDiscId = false;
    var IsCyclopePathDiscId = false;
    //hide some reports
    HideReport('QualifTrxLane' + 'TableReportId');

    QualifPathGet(ActionBtnId, Icon,
        RegionId, LSId, StationNumber, LaneName, DhmStringStart, DhmStringEnd, IsImage, IsImageIapi,
        RegionIdO, LSIdO, StationNumberO, LaneNameO, DhmStringStartO, DhmStringEndO, IsImageO, IsImageIapiO,
        BillingId, CategoryId,
        PresetId, ObsPassId, ObsTickId, ObsMpId,
        IsConvenientContext, IsConvenientIapi, IsConvenientClass, IsPathQualified,
        IsConvenientContextO, IsConvenientIapiO,
        IsContextOnly, IsIapiOnly, IsPathOnly, IsSortieOnly,
        RowIdTrxLane,
        ProductNumber,
        IsLabel, IsCyclopeClassify, IsCyclopePath,
        OctalCode,
        IsPathQualifiable,
        IsLabeled,
        SerialNumber, LicensePlate,
        QualifControlId, QualifReasonId,
        IsCyclopeClassDiscId, IsCyclopePathDiscId);
}


function QualifPathCarouselDisplay() {
    var ActionBtnId = 'ParamActionBtnId1';
    var Icon = 'fas fa-eye btn-icon-m-cl gc-c1-cl';

    var RegionId = GetElementValue('RegionId');
    var LSId = GetElementValue('LSId');
    var StationNumber = GetElementValue('StationNumberId');
    var LaneName = GetElementValue('LaneNameId');
    var DhmStringStart = GetDhmStringFromDatePicker('DhmStartId');
    var DhmStringEnd = GetDhmStringFromDatePicker('DhmEndId');

    var RegionIdO = GetElementValue('RegionIdO');
    var LSIdO = GetElementValue('LSIdO');
    var StationNumberO = GetElementValue('StationNumberIdO');
    var LaneNameO = GetElementValue('LaneNameIdO');
    var DhmStringStartO = GetDhmStringFromDatePicker('DhmStartIdO');
    var DhmStringEndO = GetDhmStringFromDatePicker('DhmEndIdO');

    var IsImage = new Boolean($("#IsImageId").is(":checked"));
    var IsImageIapi = new Boolean($("#IsImageIapiId").is(":checked"));

    var IsImageO = new Boolean($("#IsImageOId").is(":checked"));
    var IsImageIapiO = new Boolean($("#IsImageIapiOId").is(":checked"));

    var BillingId = GetElementValue('BillingId');
    var CategoryId = GetElementValue('CategoryId');

    var PresetId = GetElementValue('PresetId');
    var ObsPassId = GetElementValue('ObsPassId');
    var ObsTickId = GetElementValue('ObsTickId');
    var ObsMpId = GetElementValue('ObsMpId');

    var IsConvenientContext = new Boolean($("#IsConvenientContextId").is(":checked"));
    var IsConvenientIapi = new Boolean($("#IsConvenientIapiId").is(":checked"));
    var IsConvenientClass = new Boolean($("#IsConvenientClassId").is(":checked"));
    var IsPathQualified = new Boolean($("#IsPathQualifiedId").is(":checked"));

    var IsConvenientContextO = new Boolean($("#IsConvenientContextOId").is(":checked"));
    var IsConvenientIapiO = new Boolean($("#IsConvenientIapiOId").is(":checked"));

    var IsContextOnly = new Boolean($("#IsContextOnlyId").is(":checked"));
    var IsIapiOnly = new Boolean($("#IsIapiOnlyId").is(":checked"));
    var IsPathOnly = new Boolean($("#IsPathOnlyId").is(":checked"));
    var IsSortieOnly = new Boolean($("#IsSortieOnlyId").is(":checked"));

    var RowIdTrxLane = 0;
    var ProductNumber = '';

    var IsLabel = new Boolean($("#IsLabelId").is(":checked"));
    var IsCyclopeClassify = new Boolean($("#IsCyclopeClassifyId").is(":checked"));
    var IsCyclopePath = new Boolean($("#IsCyclopePathId").is(":checked"));

    var OctalCode = GetElementDropDownListValue('OctalCodeId');
    var IsPathQualifiable = false;
    var IsLabeled = ElementBooleanGet('IsLabeledId');

    var SerialNumber = GetElementValue('SerialNumberId');
    var LicensePlate = GetElementValue('LicensePlateId');

    var QualifControlId = '0';
    var QualifReasonId = '0';

    var IsCyclopeClassDiscId = ElementBooleanGet('IsCyclopeClassDiscId');
    var IsCyclopePathDiscId = ElementBooleanGet('IsCyclopePathDiscId');

    if (DhmStringStart != '' && DhmStringEnd != '') {

        QualifPathCarouselGet(ActionBtnId, Icon,
            RegionId, LSId, StationNumber, LaneName, DhmStringStart, DhmStringEnd, IsImage, IsImageIapi,
            RegionIdO, LSIdO, StationNumberO, LaneNameO, DhmStringStartO, DhmStringEndO, IsImageO, IsImageIapiO,
            BillingId, CategoryId,
            PresetId, ObsPassId, ObsTickId, ObsMpId,
            IsConvenientContext, IsConvenientIapi, IsConvenientClass, IsPathQualified,
            IsConvenientContextO, IsConvenientIapiO,
            IsContextOnly, IsIapiOnly, IsPathOnly, IsSortieOnly,
            RowIdTrxLane,
            ProductNumber,
            IsLabel, IsCyclopeClassify, IsCyclopePath,
            OctalCode,
            IsPathQualifiable,
            IsLabeled,
            SerialNumber, LicensePlate,
            QualifControlId, QualifReasonId,
            IsCyclopeClassDiscId, IsCyclopePathDiscId);
    }
    else {
        ParamMessageErrorDisplay('Les dates de début et de fin sont obligatoires');
    };
}


function QualifPathCarouselGet(ActionBtnId, Icon,
    RegionId, LSId, StationNumber, LaneName, DhmStringStart, DhmStringEnd, IsImage, IsImageIapi,
    RegionIdO, LSIdO, StationNumberO, LaneNameO, DhmStringStartO, DhmStringEndO, IsImageO, IsImageIapiO,
    BillingId, CategoryId,
    PresetId, ObsPassId, ObsTickId, ObsMpId,
    IsConvenientContext, IsConvenientIapi, IsConvenientClass, IsPathQualified,
    IsConvenientContextO, IsConvenientIapiO,
    IsContextOnly, IsIapiOnly, IsPathOnly, IsSortieOnly,
    RowIdTrxLane,
    ProductNumber,
    IsLabel, IsCyclopeClassify, IsCyclopePath,
    OctalCode,
    IsPathQualifiable,
    IsLabeled,
    SerialNumber, LicensePlate,
    QualifControlId, QualifReasonId,
    IsCyclopeClassDiscId, IsCyclopePathDiscId) {

    var IsCyclopeClassify = false;

    var NoneClassify = '';
    var NoneMatching = '';

    if (IsCyclopeClassify) {
        NoneClassify = 'none';
        NoneMatching = '';
    }
    if (!IsCyclopeClassify) {
        NoneClassify = '';
        NoneMatching = 'none';
    }



    //hide some tables
    HideReport('QualifPath' + 'TableReportId');

    //Spin
    ActionBtnSpin(ActionBtnId);

    //Set datatable patterns
    var Pattern = 'QualifPathCarousel';
    var PatternTableId = Pattern + 'TableId';
    var PatternTableReportId = Pattern + 'TableReportId';



    //Get
    HideReport(PatternTableReportId);
    $('#' + PatternTableId).DataTable().destroy();;
    $('#' + PatternTableId).DataTable({
        "initComplete": function (settings, json) {
            ActionBtnIconSet(ActionBtnId, Icon);
            ShowReport(PatternTableReportId);
        },
        "ajax": {
            "url": "/Qualif/QualifPathGet",
            "type": "GET",
            "datatype": "json",
            "data": {
                "RegionId": RegionId,
                "LSId": LSId,
                "StationNumber": StationNumber,
                "LaneName": LaneName,
                "DhmStringStart": DhmStringStart,
                "DhmStringEnd": DhmStringEnd,
                "IsImage": IsImage,
                "IsImageIapi": IsImageIapi,

                "RegionIdO": RegionIdO,
                "LSIdO": LSIdO,
                "StationNumberO": StationNumberO,
                "LaneNameO": LaneNameO,
                "DhmStringStartO": DhmStringStartO,
                "DhmStringEndO": DhmStringEndO,
                "IsImageO": IsImageO,
                "IsImageIapiO": IsImageIapiO,

                "BillingId": BillingId,
                "CategoryId": CategoryId,

                "PresetId": PresetId,
                "ObsPassId": ObsPassId,
                "ObsTickId": ObsTickId,
                "ObsMpId": ObsMpId,

                "IsConvenientContext": IsConvenientContext,
                "IsConvenientIapi": IsConvenientIapi,
                "IsConvenientClass": IsConvenientClass,
                "IsPathQualified": IsPathQualified,

                "IsConvenientContextO": IsConvenientContextO,
                "IsConvenientIapiO": IsConvenientIapiO,

                "IsContextOnly": IsContextOnly,
                "IsIapiOnly": IsIapiOnly,
                "IsPathOnly": IsPathOnly,
                "IsSortieOnly": IsSortieOnly,

                "RowIdTrxLane": RowIdTrxLane,
                "ProductNumber": ProductNumber,

                "IsLabel": IsLabel,
                "IsCyclopeClassify": IsCyclopeClassify,
                "IsCyclopePath": IsCyclopePath,

                "OctalCode": OctalCode,
                "IsPathQualifiable": IsPathQualifiable,
                "IsLabeled": IsLabeled,
                "SerialNumber": SerialNumber,
                "LicensePlate": LicensePlate,

                "QualifControlId": QualifControlId,
                "QualifReasonId": QualifReasonId,

                "IsCyclopeClassDiscId": IsCyclopeClassDiscId,
                "IsCyclopePathDiscId": IsCyclopePathDiscId
            }
        },
        "columns": [

            { "data": "CertTrxLaneInterfaceRowId" },//0

            { "data": "ImagePath" },//1
            { "data": "CertTrxLaneInterfaceRowId" },//2

            { "data": "ImagePathO" },//3
            { "data": "CertTrxLaneInterfaceRowId" },//4

            { "data": "ImageIapiPath" },//5
            { "data": "CertTrxLaneInterfaceRowId" },//6

            { "data": "ImageIapiPathO" },//7
            { "data": "CertTrxLaneInterfaceRowId" },//8

            { "data": "CategoryPreDacId" },//9
            { "data": "CategoryPostDacId" },//10

            { "data": "ExpertCategoryId" },//11
            { "data": "AxlesNumber" },//12

            { "data": "CyclopeCategoryId" },//13
            { "data": "SeniorCategoryId" },//14

            { "data": "DhmModification" },//15
            { "data": "UserId" },//16

            { "data": "ClassDhmModification" },//17
            { "data": "ClassModifiedBy" },//18

            { "data": "QualityDhmModification" },//19
            { "data": "QualityModifiedBy" },//20

            { "data": "RowIdMatch" },//21
            { "data": "RowIdMatch" },//22
            { "data": "RowIdTrxBorneMatch" },//23
            { "data": "DhmModificationMatch" },//24
            { "data": "UserIdMatch" },//25
            { "data": "RowIdTrxBorneMatch" },//26

            { "data": "CertTrxLaneInterfaceRowId" },//27
            { "data": "CertTrxLaneInterfaceRowId" },//28
            { "data": "CertTrxLaneInterfaceRowId" },//29
        ],
        "columnDefs": [
            { "width": "3%", "className": "text-center", "targets": 0 },

            { "width": "15%", "className": "text-center " + NoneMatching, "targets": 1 },
            { "width": "3%", "className": "text-center " + NoneMatching, "targets": 2 },

            { "width": "15%", "className": "text-center " + NoneClassify + ' ' + NoneMatching, "targets": 3 },
            { "width": "3%", "className": "text-center " + NoneClassify + ' ' + NoneMatching, "targets": 4 },

            { "width": "15%", "className": "text-center " + NoneClassify, "targets": 5 },
            { "width": "3%", "className": "text-center " + NoneClassify, "targets": 6 },

            { "width": "15%", "className": "text-center " + NoneClassify, "targets": 7 },
            { "width": "3%", "className": "text-center " + NoneClassify, "targets": 8 },

            { "width": "3%", "className": "text-center " + NoneMatching, "targets": 9 },
            { "width": "3%", "className": "text-center " + NoneMatching, "targets": 10 },

            { "width": "3%", "className": "text-center " + NoneMatching, "targets": 11 },
            { "width": "3%", "className": "text-center " + NoneMatching, "targets": 12 },

            { "width": "3%", "className": "text-center " + NoneMatching, "targets": 13 },
            { "width": "3%", "className": "text-center " + NoneMatching, "targets": 14 },

            { "width": "3%", "className": "text-center " + NoneClassify + ' ' + NoneMatching, "targets": 15 },
            { "width": "3%", "className": "text-center " + NoneClassify + ' ' + NoneMatching, "targets": 16 },
            { "width": "3%", "className": "text-center " + NoneClassify + ' ' + NoneMatching, "targets": 17 },
            { "width": "3%", "className": "text-center " + NoneClassify + ' ' + NoneMatching, "targets": 18 },
            { "width": "3%", "className": "text-center " + NoneClassify + ' ' + NoneMatching, "targets": 19 },
            { "width": "3%", "className": "text-center " + NoneClassify + ' ' + NoneMatching, "targets": 20 },

            { "width": "3%", "className": "text-center " + NoneClassify, "targets": 21 },
            { "width": "3%", "className": "text-center " + NoneClassify, "targets": 22 },
            { "width": "3%", "className": "text-center " + NoneClassify, "targets": 23 },
            { "width": "3%", "className": "text-center " + NoneClassify + ' ' + NoneMatching, "targets": 24 },
            { "width": "3%", "className": "text-center " + NoneClassify + ' ' + NoneMatching, "targets": 25 },
            { "width": "3%", "className": "text-center " + NoneClassify, "targets": 26 },

            { "width": "3%", "className": "text-center", "targets": 27 },
            { "width": "3%", "className": "text-center", "targets": 28 },
            { "width": "3%", "className": "text-center", "targets": 29 },

            { "targets": 0, "render": function (data, type, row) { return data; } },

            { "targets": 1, "render": function (data, type, row) { return QualifImageBigGet(data); } },
            { "targets": 2, "render": function (data, type, row) { return QualifTrxLaneIsConvenientContextGet(data, row['IsConvenientContext']); } },

            { "targets": 3, "render": function (data, type, row) { return QualifImageBigGet(data); } },
            { "targets": 4, "render": function (data, type, row) { return QualifTrxLaneIsConvenientContextOGet(data, row['IsConvenientContextO']); } },

            { "targets": 5, "render": function (data, type, row) { return QualifImageBigGet(data); } },
            { "targets": 6, "render": function (data, type, row) { return QualifTrxLaneIsConvenientIapiGet(data, row['IsConvenientIapi']); } },

            { "targets": 7, "render": function (data, type, row) { return QualifImageBigGet(data); } },
            { "targets": 8, "render": function (data, type, row) { return QualifTrxLaneIsConvenientIapiOGet(data, row['IsConvenientIapiO']); } },

            { "targets": 9, "render": function (data, type, row) { return data; } },
            { "targets": 10, "render": function (data, type, row) { return data; } },

            {
                "targets": 11, "render": function (data, type, row) {
                    return QualifPathLabelFormGet(row['CertTrxLaneInterfaceRowId'], row['ExpertCategoryId']);
                }
            },
            {
                "targets": 12, "render": function (data, type, row) {
                    return QualifPathAxleFormGet(row['CertTrxLaneInterfaceRowId'], row['AxlesNumber']);
                }
            },

            { "targets": 13, "render": function (data, type, row) { return data; } },
            {
                "targets": 14, "render": function (data, type, row) {
                    return QualifPathSeniorFormGet(row['CertTrxLaneInterfaceRowId'], row['SeniorCategoryId']);
                }
            },

            { "targets": 15, "render": function (data, type, row) { return GetDhmValueFromDataTableDate(data); } },
            { "targets": 16, "render": function (data, type, row) { return data; } },

            { "targets": 17, "render": function (data, type, row) { return GetDhmValueFromDataTableDate(data); } },
            { "targets": 18, "render": function (data, type, row) { return data; } },

            { "targets": 19, "render": function (data, type, row) { return GetDhmValueFromDataTableDate(data); } },
            { "targets": 20, "render": function (data, type, row) { return data; } },

            {
                "targets": 21, "render": function (data, type, row) {
                    return QualifMatchingCyclopeFormGet(row['RowIdMatch'], row['QualifCyclopeId']);
                }
            },
            {
                "targets": 22, "render": function (data, type, row) {
                    return QualifMatchingAdmFormGet(row['RowIdMatch'], row['QualifAdmId']);
                }
            },
            { "targets": 23, "render": function (data, type, row) { return data; } },
            { "targets": 24, "render": function (data, type, row) { return GetDhmValueFromDataTableDate(data); } },
            { "targets": 25, "render": function (data, type, row) { return data; } },
            { "targets": 26, "render": function (data, type, row) { return DataTableDiffIntGet(row['RowIdTrxBorne'], row['RowIdTrxBorneMatch']); } },

            { "targets": 27, "render": function (data, type, row) { return DataTableButtonGet('CertImageFromLaneUpload', data, data, '', 'dt-btn-cl gc-bc1-cl', 'fas fa-upload btn-icon-cl gc-c1-cl', ''); } },
            { "targets": 28, "render": function (data, type, row) { return DataTableButtonGet('CertImageFrom23Upload', data, '\'' + data + '\', \'' + row['IpAddress'] + '\'', '', 'dt-btn-cl gc-bc1-cl', 'fas fa-upload btn-icon-cl gc-c1-cl', '') } },
            { "targets": 29, "render": function (data, type, row) { return DataTableButtonGet('CertImageFrom165Upload', data, '\'' + data + '\', \'' + row['IpAddress'] + '\'', '', 'dt-btn-cl gc-bc1-cl', 'fas fa-upload btn-icon-cl gc-c1-cl', '') } },
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
        "ordering": false,
        "footerCallback": function (row, data, start, end, display) {
            var api = this.api(), data;
            var intVal = function (i) {
                return typeof i === 'string' ?
                    i.replace(/[\$,]/g, '') * 1 :
                    typeof i === 'number' ?
                        i : 0;
            };

            //Total1 = api.column(8).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);
            //$(api.column(8).footer()).html(numFormat(Total1));

            //IntTotal1 = api.column(8).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);
            //IntTotal2 = api.column(9).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);

            //$(api.column(7).footer()).html(numFormat(DoubleTotal1));

            //$(api.column(9).footer()).html(numShortFormat(IntTotal2));
        }
    });
}



function QualifPathLabelFormGet(RowIdTrxLane, ExpertCategoryId) {

    var StatusColor = 'red';
    var selected0 = '';
    var selected01 = '';
    var selected02 = '';
    var selected03 = '';

    if (ExpertCategoryId == '0') {
        selected0 = 'selected';
    }
    if (ExpertCategoryId == '01') {
        selected01 = 'selected';
        StatusColor = 'green';
    }
    if (ExpertCategoryId == '02') {
        selected02 = 'selected';
        StatusColor = 'green';
    }
    if (ExpertCategoryId == '03') {
        selected03 = 'selected';
        StatusColor = 'green';
    }

    var StatusElement = '<p style="text-align: left" >' +
        '<select class="form-control" style="width: 80px;height: 30px;color: white;font-weight: bold;background-color: ' + StatusColor + ';margin-top: 18px;" id="ExpertCategoryId' + RowIdTrxLane + '" onchange="QualifPathExpertCategoryIdEdit(' + RowIdTrxLane + ')">' +
        '<option value="0" ' + selected0 + '>--</option>' +
        '<option value="01" ' + selected01 + '>01</option>' +
        '<option value="02" ' + selected02 + '>02</option>' +
        '<option value="03" ' + selected03 + '>03</option>' +
        '</select>' + '</p>';

    return StatusElement;
}

function QualifPathSeniorFormGet(RowIdTrxLane, SeniorCategoryId) {

    var StatusColor = 'red';
    var selected0 = '';
    var selected01 = '';
    var selected02 = '';
    var selected03 = '';

    if (SeniorCategoryId == '0') {
        selected0 = 'selected';
    }
    if (SeniorCategoryId == '01') {
        selected01 = 'selected';
        StatusColor = 'green';
    }
    if (SeniorCategoryId == '02') {
        selected02 = 'selected';
        StatusColor = 'green';
    }
    if (SeniorCategoryId == '03') {
        selected03 = 'selected';
        StatusColor = 'green';
    }

    var StatusElement = '<p style="text-align: left" >' +
        '<select class="form-control" style="width: 80px;height: 30px;color: white;font-weight: bold;background-color: ' + StatusColor + ';margin-top: 18px;" id="SeniorCategoryId' + RowIdTrxLane + '" onchange="QualifPathSeniorCategoryIdEdit(' + RowIdTrxLane + ')">' +
        '<option value="0" ' + selected0 + '>--</option>' +
        '<option value="01" ' + selected01 + '>01</option>' +
        '<option value="02" ' + selected02 + '>02</option>' +
        '<option value="03" ' + selected03 + '>03</option>' +
        '</select>' + '</p>';

    return StatusElement;
}


function QualifMatchingCyclopeFormGet(RowIdMatch, QualifCyclopeId) {

    var StatusColor = 'red';
    var selected0 = '';
    var selected01 = '';
    var selected02 = '';
    var selected03 = '';
    var selected04 = '';

    if (QualifCyclopeId == '0') {
        selected0 = 'selected';
    }
    if (QualifCyclopeId == '01') {
        selected01 = 'selected';
        StatusColor = 'green';
    }
    if (QualifCyclopeId == '02') {
        selected02 = 'selected';
        StatusColor = 'green';
    }
    if (QualifCyclopeId == '03') {
        selected03 = 'selected';
        StatusColor = 'green';
    }
    if (QualifCyclopeId == '04') {
        selected04 = 'selected';
        StatusColor = 'green';
    }

    var StatusElement = '<p style="text-align: left" >' +
        '<select class="form-control" style="width: 120px;height: 30px;color: white;font-weight: bold;background-color: ' + StatusColor + ';margin-top: 18px;" id="QualifCyclopeId' + RowIdMatch + '" >' +
        '<option value="0" ' + selected0 + '>--</option>' +
        '<option value="01" ' + selected01 + '>matching</option>' +
        '<option value="02" ' + selected02 + '>quality</option>' +
        '<option value="03" ' + selected03 + '>cutting</option>' +
        '<option value="04" ' + selected04 + '>no-matching</option>' +
        '</select>' + '</p>';

    return StatusElement;
}

function QualifMatchingAdmFormGet(RowIdMatch, QualifAdmId) {

    var StatusColor = 'red';
    var selected0 = '';
    var selected01 = '';
    var selected02 = '';
    var selected03 = '';
    var selected04 = '';

    if (QualifAdmId == '0') {
        selected0 = 'selected';
    }
    if (QualifAdmId == '01') {
        selected01 = 'selected';
        StatusColor = 'green';
    }
    if (QualifAdmId == '02') {
        selected02 = 'selected';
        StatusColor = 'green';
    }
    if (QualifAdmId == '03') {
        selected03 = 'selected';
        StatusColor = 'green';
    }
    if (QualifAdmId == '04') {
        selected04 = 'selected';
        StatusColor = 'green';
    }

    var StatusElement = '<p style="text-align: left" >' +
        '<select class="form-control" style="width: 120px;height: 30px;color: white;font-weight: bold;background-color: ' + StatusColor + ';margin-top: 18px;" id="QualifAdmId' + RowIdMatch + '" onchange="QualifAdmIdEdit(' + RowIdMatch + ')">' +
        '<option value="0" ' + selected0 + '>--</option>' +
        '<option value="01" ' + selected01 + '>matching</option>' +
        '<option value="02" ' + selected02 + '>quality</option>' +
        '<option value="03" ' + selected03 + '>cutting</option>' +
        '<option value="04" ' + selected04 + '>no-matching</option>' +
        '</select>' + '</p>';

    return StatusElement;
}

function QualifAdmIdEdit(RowIdMatch) {

    //Get input values
    var QualifAdmId = GetElementValue('QualifAdmId' + RowIdMatch);

    //Edit
    var obj = {};
    obj.RowIdMatch = RowIdMatch;
    obj.QualifAdmId = QualifAdmId;

    $.ajax({
        url: "/Qualif/QualifAdmIdEdit",
        method: "POST",
        data: JSON.stringify(obj),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            //document.getElementById("QualifPath" + RowId).checked = true;
            //QualifPathSend(RowId, QualifReasonId);
            document.getElementById("ExpertCategoryId" + RowIdTrxLane).style.backgroundColor = "green";
        }
    });
}


function QualifPathExpertCategoryIdEdit(RowIdTrxLane) {

    //Get input values
    var ExpertCategoryId = GetElementValue('ExpertCategoryId' + RowIdTrxLane);

    //Edit
    var obj = {};
    obj.RowIdTrxLane = RowIdTrxLane;
    obj.ExpertCategoryId = ExpertCategoryId;

    $.ajax({
        url: "/Qualif/QualifPathExpertCategoryIdEdit",
        method: "POST",
        data: JSON.stringify(obj),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            //document.getElementById("QualifPath" + RowId).checked = true;
            //QualifPathSend(RowId, QualifReasonId);
            document.getElementById("ExpertCategoryId" + RowIdTrxLane).style.backgroundColor = "green";
        }
    });
}


function QualifPathSeniorCategoryIdEdit(RowIdTrxLane) {

    //Get input values
    var SeniorCategoryId = GetElementValue('SeniorCategoryId' + RowIdTrxLane);

    //Edit
    var obj = {};
    obj.RowIdTrxLane = RowIdTrxLane;
    obj.SeniorCategoryId = SeniorCategoryId;

    $.ajax({
        url: "/Qualif/QualifPathSeniorCategoryIdEdit",
        method: "POST",
        data: JSON.stringify(obj),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            //document.getElementById("QualifPath" + RowId).checked = true;
            //QualifPathSend(RowId, QualifReasonId);
            document.getElementById("SeniorCategoryId" + RowIdTrxLane).style.backgroundColor = "green";
        }
    });
}

function QualifPathAxlesNumberEdit(RowIdTrxLane) {

    //Get input values
    var AxlesNumber = GetElementValue('AxlesNumberId' + RowIdTrxLane);

    //Edit
    var obj = {};
    obj.RowIdTrxLane = RowIdTrxLane;
    obj.AxlesNumber = AxlesNumber;

    $.ajax({
        url: "/Qualif/QualifPathAxlesNumberEdit",
        method: "POST",
        data: JSON.stringify(obj),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            //document.getElementById("QualifPath" + RowId).checked = true;
            //QualifPathSend(RowId, QualifReasonId);
            document.getElementById("AxlesNumberId" + RowIdTrxLane).style.backgroundColor = "green";
        }
    });
}

function QualifPathAxleFormGet(RowIdTrxLane, AxlesNumber) {

    var StatusColor = 'red';
    var selected0 = '';
    var selected01 = '';
    var selected02 = '';
    var selected03 = '';

    if (AxlesNumber == 0) {
        selected0 = 'selected';
    }
    if (AxlesNumber == 2) {
        selected01 = 'selected';
        StatusColor = 'green';
    }
    if (AxlesNumber == 3) {
        selected02 = 'selected';
        StatusColor = 'green';
    }
    if (AxlesNumber == 4) {
        selected03 = 'selected';
        StatusColor = 'green';
    }

    var StatusElement = '<p style="text-align: left" >' +
        '<select class="form-control" style="width: 110px;height: 30px;color: white;font-weight: bold;background-color: ' + StatusColor + ';margin-top: 18px;" id="AxlesNumberId' + RowIdTrxLane + '" onchange="QualifPathAxlesNumberEdit(' + RowIdTrxLane + ')">' +
        '<option value="0" ' + selected0 + '>--</option>' +
        '<option value="2" ' + selected01 + '>2 Essieux</option>' +
        '<option value="3" ' + selected02 + '>3 Essieux</option>' +
        '<option value="4" ' + selected03 + '>4 Essieux</option>' +
        '</select>' + '</p>';

    return StatusElement;
}


function QualifPathDisplay() {
    var ActionBtnId = 'ParamActionBtnId0';
    var Icon = 'fas fa-eye btn-icon-m-cl gc-c1-cl';

    var RegionId = GetElementValue('RegionId');
    var LSId = GetElementValue('LSId');
    var StationNumber = GetElementValue('StationNumberId');
    var LaneName = GetElementValue('LaneNameId');
    var DhmStringStart = GetDhmStringFromDatePicker('DhmStartId');
    var DhmStringEnd = GetDhmStringFromDatePicker('DhmEndId');

    var RegionIdO = GetElementValue('RegionIdO');
    var LSIdO = GetElementValue('LSIdO');
    var StationNumberO = GetElementValue('StationNumberIdO');
    var LaneNameO = GetElementValue('LaneNameIdO');
    var DhmStringStartO = GetDhmStringFromDatePicker('DhmStartIdO');
    var DhmStringEndO = GetDhmStringFromDatePicker('DhmEndIdO');

    var IsImage = new Boolean($("#IsImageId").is(":checked"));
    var IsImageIapi = new Boolean($("#IsImageIapiId").is(":checked"));

    var IsImageO = new Boolean($("#IsImageOId").is(":checked"));
    var IsImageIapiO = new Boolean($("#IsImageIapiOId").is(":checked"));

    var BillingId = GetElementValue('BillingId');
    var CategoryId = GetElementValue('CategoryId');

    var PresetId = GetElementValue('PresetId');
    var ObsPassId = GetElementValue('ObsPassId');
    var ObsTickId = GetElementValue('ObsTickId');
    var ObsMpId = GetElementValue('ObsMpId');

    var IsConvenientContext = new Boolean($("#IsConvenientContextId").is(":checked"));
    var IsConvenientIapi = new Boolean($("#IsConvenientIapiId").is(":checked"));
    var IsConvenientClass = new Boolean($("#IsConvenientClassId").is(":checked"));
    var IsPathQualified = new Boolean($("#IsPathQualifiedId").is(":checked"));

    var IsConvenientContextO = new Boolean($("#IsConvenientContextOId").is(":checked"));
    var IsConvenientIapiO = new Boolean($("#IsConvenientIapiOId").is(":checked"));

    var IsContextOnly = new Boolean($("#IsContextOnlyId").is(":checked"));
    var IsIapiOnly = new Boolean($("#IsIapiOnlyId").is(":checked"));
    var IsPathOnly = new Boolean($("#IsPathOnlyId").is(":checked"));
    var IsSortieOnly = new Boolean($("#IsSortieOnlyId").is(":checked"));

    var RowIdTrxLane = 0;
    var ProductNumber = '';

    var IsLabel = new Boolean($("#IsLabelId").is(":checked"));
    var IsCyclopeClassify = new Boolean($("#IsCyclopeClassifyId").is(":checked"));
    var IsCyclopePath = new Boolean($("#IsCyclopePathId").is(":checked"));

    var OctalCode = GetElementDropDownListValue('OctalCodeId');
    var IsPathQualifiable = false;
    var IsLabeled = ElementBooleanGet('IsLabeledId');

    var SerialNumber = GetElementValue('SerialNumberId');
    var LicensePlate = GetElementValue('LicensePlateId');

    var QualifControlId = '0';
    var QualifReasonId = '0';

    var IsCyclopeClassDiscId = ElementBooleanGet('IsCyclopeClassDiscId');
    var IsCyclopePathDiscId = ElementBooleanGet('IsCyclopePathDiscId');

    if (DhmStringStart != '' && DhmStringEnd != '') {

        QualifPathGet(ActionBtnId, Icon,
            RegionId, LSId, StationNumber, LaneName, DhmStringStart, DhmStringEnd, IsImage, IsImageIapi,
            RegionIdO, LSIdO, StationNumberO, LaneNameO, DhmStringStartO, DhmStringEndO, IsImageO, IsImageIapiO,
            BillingId, CategoryId,
            PresetId, ObsPassId, ObsTickId, ObsMpId,
            IsConvenientContext, IsConvenientIapi, IsConvenientClass, IsPathQualified,
            IsConvenientContextO, IsConvenientIapiO,
            IsContextOnly, IsIapiOnly, IsPathOnly, IsSortieOnly,
            RowIdTrxLane,
            ProductNumber,
            IsLabel, IsCyclopeClassify, IsCyclopePath,
            OctalCode,
            IsPathQualifiable,
            IsLabeled,
            SerialNumber, LicensePlate,
            QualifControlId, QualifReasonId,
            IsCyclopeClassDiscId, IsCyclopePathDiscId);
    }
    else {
        ParamMessageErrorDisplay('Les dates de début et de fin sont obligatoires');
    };
}


function QualifPathLogsGet(RowIdTrxLane, QualifControlTypeId) {

    var ActionBtnId = 'ParamActionBtnId0';
    var Icon = 'fas fa-eye btn-icon-m-cl gc-c1-cl';

    //Spin
    ActionBtnSpin(ActionBtnId);

    //Set datatable patterns
    var Pattern = 'QualifPathLogs';
    var PatternTableId = Pattern + 'TableId';
    var PatternTableReportId = Pattern + 'TableReportId';

    //Get
    HideReport(PatternTableReportId);
    $('#' + PatternTableId).DataTable().destroy();;
    $('#' + PatternTableId).DataTable({
        "initComplete": function (settings, json) {
            ActionBtnIconSet(ActionBtnId, Icon);
            ShowReport(PatternTableReportId);
        },
        "ajax": {
            "url": "/Qualif/QualifPathLogsGet",
            "type": "GET",
            "datatype": "json",
            "data": {
                "RowIdTrxLane": RowIdTrxLane,
                "QualifControlTypeId": QualifControlTypeId                
            }
        },
        "columns": [
            { "data": "DhmCreation" }, //0
            { "data": "CreatedBy" }, //1

            { "data": "DhmModification" }, //2           
            { "data": "ModifiedBy" },//3  

            { "data": "DhmValidation" },//4            
            { "data": "ValidatedBy" },//5

            { "data": "QualifControlName" },//6
            { "data": "Sens" },//7
            { "data": "QualifReasonName" },//8
            { "data": "Comment" },//9

            { "data": "RowIdTrxLane" },//10 Valid
            { "data": "RowIdTrxLane" },//11 Delete
        ],
        "columnDefs": [
            { "width": "3%", "className": "text-center none", "targets": 0 },
            { "width": "3%", "className": "text-center none", "targets": 1 },

            { "width": "3%", "className": "text-center", "targets": 2 },
            { "width": "3%", "className": "text-center", "targets": 3 },

            { "width": "3%", "className": "text-center", "targets": 4 },
            { "width": "3%", "className": "text-center", "targets": 5 },

            { "width": "3%", "className": "text-center", "targets": 6 },
            { "width": "3%", "className": "text-center", "targets": 7 },
            { "width": "3%", "className": "text-center", "targets": 8 },
            { "width": "3%", "className": "text-center", "targets": 9 },

            { "width": "3%", "className": "text-center", "targets": 10 },
            { "width": "3%", "className": "text-center", "targets": 11 },

            { "targets": 0, "render": function (data, type, row) { return GetDateValueNullableFromDataTableDate(data); } },
            { "targets": 1, "render": function (data, type, row) { return data; } },

            { "targets": 2, "render": function (data, type, row) { return GetDateValueNullableFromDataTableDate(data); } },
            { "targets": 3, "render": function (data, type, row) { return data; } },

            { "targets": 4, "render": function (data, type, row) { return GetDateValueNullableFromDataTableDate(data); } },
            { "targets": 5, "render": function (data, type, row) { return data; } },

            { "targets": 6, "render": function (data, type, row) { return data; } },
            { "targets": 7, "render": function (data, type, row) { return DataTableStringGet(data, 100); } },
            { "targets": 8, "render": function (data, type, row) { return data; } },
            { "targets": 9, "render": function (data, type, row) { return data; } },

            //{ "targets": 10, "render": function (data, type, row) { return DataTableButtonGet('QualifPathLogsIsValidSwitch', data, '\'' + data + '\'', '', 'dt-btn-cl gc-bc1-cl', 'fas fa-eye btn-icon-cl gc-c1-cl', '') } },

            {
                "targets": 10, "render": function (data, type, row) {
                    var onchange = 'QualifPathLogsIsValidSwitch(' + data + ')';
                    return DataTableCheckBoxGet(Pattern, data, row['IsValid'], onchange);

                    //return DataTableCheckBoxIsValidGet('\'' + Pattern + '\'', '\'' + data + '\'', row['IsValid']);
                }
            },
            { "targets": 11, "render": function (data, type, row) { return DataTableBtnDeleteGet(Pattern, data); } },

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
        "iDisplayLength": 20,
        "processing": false,
        "responsive": true,
        "bFilter": true,
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

            //Total1 = api.column(8).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);
            //$(api.column(8).footer()).html(numFormat(Total1));

            //IntTotal1 = api.column(8).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);
            //IntTotal2 = api.column(9).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);

            //$(api.column(7).footer()).html(numFormat(DoubleTotal1));

            //$(api.column(9).footer()).html(numShortFormat(IntTotal2));
        }
    });
}

function QualifPathOpeGet(CertTrxLaneInterfaceRowId) {

    //var ActionBtnId = 'ParamActionBtnId0';
    //var Icon = 'fas fa-eye btn-icon-m-cl gc-c1-cl';

    //Spin
    //ActionBtnSpin(ActionBtnId);

    //Set datatable patterns
    var Pattern = 'QualifPathOpe';
    var PatternTableId = Pattern + 'TableId';
    var PatternTableReportId = Pattern + 'TableReportId';

    //Get
    HideReport(PatternTableReportId);
    $('#' + PatternTableId).DataTable().destroy();;
    $('#' + PatternTableId).DataTable({
        "initComplete": function (settings, json) {
            //ActionBtnIconSet(ActionBtnId, Icon);
            ShowReport(PatternTableReportId);
        },
        "ajax": {
            "url": "/Qualif/QualifPathOpeGet",
            "type": "GET",
            "datatype": "json",
            "data": {
                "CertTrxLaneInterfaceRowId": CertTrxLaneInterfaceRowId
            }
        },
        "columns": [
            { "data": "RegionNameShort" }, //0
            { "data": "StationNameO" }, //1
            { "data": "StationNameD" }, //2

            { "data": "DhmValueO" }, //3
            { "data": "DhmValueD" }, //4
            {
                "mData": function vehicle(data, type, dataToSet) {
                    var diffInSeconds = Math.abs(new Date(data.YearD, data.MonthD - 1, data.DayD, data.HourD, data.MinuteD, data.SecondD) -
                        new Date(data.YearO, data.MonthO - 1, data.DayO, data.HourO, data.MinuteO, data.SecondO)) / 1000;
                    var days = Math.floor(diffInSeconds / 60 / 60 / 24);
                    var hours = Math.floor(diffInSeconds / 60 / 60 % 24);
                    var minutes = Math.floor(diffInSeconds / 60 % 60);

                    return GetDigits(hours, 2) + ':' + GetDigits(minutes, 2);

                }
            },//5
            { "data": "Speed" }, //6

            { "data": "LicensePlate" }, //7
            { "data": "CertTrxLaneInterfaceRowId" }, //8
            { "data": "CertTrxLaneInterfaceRowId" }, //9

            { "data": "SerialNumber" }, //10
            { "data": "CertTrxLaneInterfaceRowId" }, //11
            { "data": "CertTrxLaneInterfaceRowId" }, //12

            { "data": "DistanceOpe" }, //13
            { "data": "DhmValueMin" }, //14
            { "data": "DhmValueMax" }, //15
        ],
        "columnDefs": [
            { "width": "3%", "className": "text-center none", "targets": 0 },
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
            { "width": "3%", "className": "text-center", "targets": 11 },
            { "width": "3%", "className": "text-center", "targets": 12 },

            { "width": "3%", "className": "text-center", "targets": 13 },
            { "width": "3%", "className": "text-center", "targets": 14 },
            { "width": "3%", "className": "text-center", "targets": 15 },

            { "targets": 0, "render": function (data, type, row) { return data; } },
            { "targets": 1, "render": function (data, type, row) { return data; } },
            { "targets": 2, "render": function (data, type, row) { return data; } },

            { "targets": 3, "render": function (data, type, row) { return GetDhmValueFromDataTableDate(data); } },
            { "targets": 4, "render": function (data, type, row) { return GetDhmValueFromDataTableDate(data); } },
            { "targets": 5, "render": function (data, type, row) { return data; } },
            { "targets": 6, "render": function (data, type, row) { return data + ' Km/h'; } },

            { "targets": 7, "render": function (data, type, row) { return DataTableFormInputTextElementGet('LicensePlateId', CertTrxLaneInterfaceRowId, '', data); } },
            { "targets": 8, "render": function (data, type, row) { return DataTableButtonGet('QualifPathByLicensePlateSearch', data, data, '', 'dt-btn-cl gc-bc1-cl', 'fas fa-search btn-icon-cl gc-c1-cl', '') } },
            { "targets": 9, "render": function (data, type, row) { return DataTableButtonGet('QualifSearchRepeatByPlateFormSearch', data, data, '', 'dt-btn-cl gc-bc1-cl', 'fas fa-search btn-icon-cl gc-c1-cl', '') } },

            { "targets": 10, "render": function (data, type, row) { return DataTableFormInputTextDisabledElementGet('SerialNumberId', CertTrxLaneInterfaceRowId, '', data); } },
            { "targets": 11, "render": function (data, type, row) { return DataTableButtonGet('QualifPathBySerialNumberSearch', data, data, '', 'dt-btn-cl gc-bc1-cl', 'fas fa-search btn-icon-cl gc-c1-cl', '') } },
            { "targets": 12, "render": function (data, type, row) { return DataTableButtonGet('QualifSearchRepeatByTagFormSearch', data, data, '', 'dt-btn-cl gc-bc1-cl', 'fas fa-search btn-icon-cl gc-c1-cl', '') } },

            { "targets": 13, "render": function (data, type, row) { return data + ' Km'; } },
            { "targets": 14, "render": function (data, type, row) { return GetDigits(row['HourMin'], 2) + ':' + GetDigits(row['MinuteMin'], 2); } },
            { "targets": 15, "render": function (data, type, row) { return GetDigits(row['HourMax'], 2) + ':' + GetDigits(row['MinuteMax'], 2); } },
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
        "iDisplayLength": 20,
        "processing": false,
        "responsive": true,
        "bFilter": true,
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

            //Total1 = api.column(8).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);
            //$(api.column(8).footer()).html(numFormat(Total1));

            //IntTotal1 = api.column(8).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);
            //IntTotal2 = api.column(9).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);

            //$(api.column(7).footer()).html(numFormat(DoubleTotal1));

            //$(api.column(9).footer()).html(numShortFormat(IntTotal2));
        }
    });
}

function QualifPathRequestsGet(CertTrxLaneInterfaceRowId, FormIndex, QualifControlTypeId) {
    var ActionBtnId = 'ParamActionBtnId0';
    var Icon = 'fas fa-eye btn-icon-m-cl gc-c1-cl';

    var QualifReasonId = GetElementDropDownListValue('QualifReasonId' + FormIndex);
    var SensId = GetElementDropDownListValue('SensId' + FormIndex);

    //Spin
    ActionBtnSpin(ActionBtnId);

    //Set datatable patterns
    var Pattern = 'QualifPathRequests';
    var PatternTableId = Pattern + 'TableId';
    var PatternTableReportId = Pattern + 'TableReportId';

    //Get
    HideReport(PatternTableReportId);
    $('#' + PatternTableId).DataTable().destroy();;
    $('#' + PatternTableId).DataTable({
        "initComplete": function (settings, json) {
            ActionBtnIconSet(ActionBtnId, Icon);
            ShowReport(PatternTableReportId);
        },
        "ajax": {
            "url": "/Qualif/QualifPathRequestsGet",
            "type": "GET",
            "datatype": "json",
            "data": {
                "CertTrxLaneInterfaceRowId": CertTrxLaneInterfaceRowId,
                "QualifControlTypeId": QualifControlTypeId,
                "QualifReasonId": QualifReasonId,
                "SensId": SensId,
            }
        },
        "columns": [
            { "data": "StationNumber" }, //0
            { "data": "LaneName" }, //1

            { "data": "StationNumberO" }, //2
            { "data": "LaneNameO" },//3

            { "data": "CreatedBy" },//4
            { "data": "SentTo" },//5

            { "data": "Sens" },//6
            { "data": "QualifReasonName" },//7
            { "data": "Comment" },//8
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
            { "width": "3%", "className": "text-left", "targets": 8 },

            { "targets": 0, "render": function (data, type, row) { return data; } },
            { "targets": 1, "render": function (data, type, row) { return data; } },

            { "targets": 2, "render": function (data, type, row) { return data; } },
            { "targets": 3, "render": function (data, type, row) { return data; } },

            { "targets": 4, "render": function (data, type, row) { return data; } },
            { "targets": 5, "render": function (data, type, row) { return data; } },

            { "targets": 6, "render": function (data, type, row) { return data; } },
            { "targets": 7, "render": function (data, type, row) { return data; } },
            { "targets": 8, "render": function (data, type, row) { return data; } },
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
        "iDisplayLength": 20,
        "processing": false,
        "responsive": true,
        "bFilter": true,
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

            //Total1 = api.column(8).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);
            //$(api.column(8).footer()).html(numFormat(Total1));

            //IntTotal1 = api.column(8).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);
            //IntTotal2 = api.column(9).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);

            //$(api.column(7).footer()).html(numFormat(DoubleTotal1));

            //$(api.column(9).footer()).html(numShortFormat(IntTotal2));
        }
    });
}

//Occ

function QualifOccDisplay() {
    var ActionBtnId = 'ParamActionBtnId0';
    var Icon = 'fas fa-eye btn-icon-m-cl gc-c1-cl';

    var DhmStringStart = GetDhmStringFromDatePicker('DhmStartId');
    var DhmStringEnd = GetDhmStringFromDatePicker('DhmEndId');

    var SiteId = GetElementValue('SiteId');
    var StationNumber = GetElementValue('StationNumberId');
    var BillingId = GetElementValue('BillingId');
    var CategoryId = GetElementValue('CategoryId');
    var ClientTypeId = GetElementValue('ClientTypeId');


    if (DhmStringStart != '' && DhmStringEnd != '') {

        QualifOccGet(ActionBtnId, Icon,
            DhmStringStart, DhmStringEnd, SiteId, StationNumber, BillingId, CategoryId, ClientTypeId);
    }
    else {
        ParamMessageErrorDisplay('Les dates de début et de fin sont obligatoires');
    };
}

function QualifOccGet(ActionBtnId, Icon,
    DhmStringStart, DhmStringEnd, SiteId, StationNumber, BillingId, CategoryId, ClientTypeId) {

    //hide some tables
    HideReport('QualifPathCarousel' + 'TableReportId');

    //Spin
    ActionBtnMarginSpin(ActionBtnId);

    //Set datatable patterns
    var Pattern = 'QualifOcc';
    var PatternTableId = Pattern + 'TableId';
    var PatternTableReportId = Pattern + 'TableReportId';

    //Get
    HideReport(PatternTableReportId);
    $('#' + PatternTableId).DataTable().destroy();;
    $('#' + PatternTableId).DataTable({
        "initComplete": function (settings, json) {
            ActionBtnIconSet(ActionBtnId, Icon);
            ShowReport(PatternTableReportId);
        },
        "ajax": {
            "url": "/Qualif/QualifOccGet",
            "type": "GET",
            "datatype": "json",
            "data": {
                "DhmStringStart": DhmStringStart,
                "DhmStringEnd": DhmStringEnd,
                "SiteId": SiteId,
                "StationNumber": StationNumber,
                "BillingId": BillingId,
                "CategoryId": CategoryId,
                "ClientTypeId": ClientTypeId
            }
        },
        "columns": [
            { "data": "DhmValueStart" }, //0
            { "data": "DhmValueEnd" }, //1
            { "data": "Days" }, //2   
            { "data": "Trafic" },//3

            { "data": "ClientCategory" },//4
            { "data": "ClientName" },//5
            { "data": "ClientPhone" },//6
            { "data": "ClientCode" },//7
            { "data": "Email" },//8
            { "data": "Identifiant" },//9

            { "data": "ClientCode" },//10 Search
            { "data": "ClientCode" },//11 Label
        ],
        "columnDefs": [
            { "width": "3%", "className": "text-center", "targets": 0 },
            { "width": "3%", "className": "text-center", "targets": 1 },
            { "width": "3%", "className": "text-center", "targets": 2 },
            { "width": "3%", "className": "text-left", "targets": 3 },

            { "width": "3%", "className": "text-center", "targets": 4 },
            { "width": "3%", "className": "text-left", "targets": 5 },
            { "width": "3%", "className": "text-left", "targets": 6 },
            { "width": "3%", "className": "text-left none", "targets": 7 },
            { "width": "3%", "className": "text-left none", "targets": 8 },
            { "width": "3%", "className": "text-left none", "targets": 9 },

            { "width": "3%", "className": "text-center", "targets": 10 },
            { "width": "3%", "className": "text-center", "targets": 11 },

            { "targets": 0, "render": function (data, type, row) { return GetDhmValueFromDataTableDate(data); } },
            { "targets": 1, "render": function (data, type, row) { return GetDhmValueFromDataTableDate(data); } },
            { "targets": 2, "render": function (data, type, row) { return data; } },
            { "targets": 3, "render": function (data, type, row) { return data; } },

            { "targets": 4, "render": function (data, type, row) { return data; } },
            { "targets": 5, "render": function (data, type, row) { return data; } },
            { "targets": 6, "render": function (data, type, row) { return data; } },
            { "targets": 7, "render": function (data, type, row) { return data; } },
            { "targets": 8, "render": function (data, type, row) { return data; } },
            { "targets": 9, "render": function (data, type, row) { return data; } },

            { "targets": 10, "render": function (data, type, row) { return DataTableButtonGet('LoyOccSearch', new String(data).split(' ').join(''), '\'' + data + '\'', '', 'dt-btn-cl gc-bc1-cl', 'fas fa-eye btn-icon-cl gc-c1-cl', '') } },
            { "targets": 11, "render": function (data, type, row) { return DataTableButtonGet('LoyOccLabelSearch', new String(data).split(' ').join(''), '\'' + data + '\'', '', 'dt-btn-cl gc-bc1-cl', 'fas fa-eye btn-icon-cl gc-c1-cl', '') } },
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
        "iDisplayLength": 10,
        "processing": false,
        "responsive": true,
        "bFilter": true,
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

            //Total1 = api.column(8).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);
            //$(api.column(8).footer()).html(numFormat(Total1));

            //IntTotal1 = api.column(8).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);
            //IntTotal2 = api.column(9).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);

            //$(api.column(7).footer()).html(numFormat(DoubleTotal1));

            //$(api.column(9).footer()).html(numShortFormat(IntTotal2));
        },
        "dom": 'Bfrtip',
        "buttons": [
            'excel'
        ]
    });
}



function LoyOccSearch(ProductNumber) {
    var ActionBtnId = new String('LoyOccSearchBtnId' + new String(ProductNumber).split(' ').join(''));
    var Icon = 'fas fa-eye btn-icon-cl gc-c1-cl';

    ActionBtnSpin(ActionBtnId);

    var SiteId = GetElementValue('SiteId');
    var StationNumber = GetElementValue('StationNumberId');
    var LaneName = GetElementValue('LaneNameId');
    var DhmStringStart = GetDhmStringFromDatePicker('DhmStartId');
    var DhmStringEnd = GetDhmStringFromDatePicker('DhmEndId');

    var SiteIdO = GetElementValue('SiteIdO');
    var StationNumberO = GetElementValue('StationNumberIdO');
    var LaneNameO = GetElementValue('LaneNameIdO');
    var DhmStringStartO = GetDhmStringFromDatePicker('DhmStartIdO');
    var DhmStringEndO = GetDhmStringFromDatePicker('DhmEndIdO');

    var IsImage = new Boolean($("#IsImageId").is(":checked"));
    var IsImageIapi = new Boolean($("#IsImageIapiId").is(":checked"));

    var IsImageO = new Boolean($("#IsImageOId").is(":checked"));
    var IsImageIapiO = new Boolean($("#IsImageIapiOId").is(":checked"));

    var BillingId = GetElementValue('BillingId');
    var CategoryId = GetElementValue('CategoryId');

    var PresetId = GetElementValue('PresetId');
    var ObsPassId = GetElementValue('ObsPassId');
    var ObsTickId = GetElementValue('ObsTickId');
    var ObsMpId = GetElementValue('ObsMpId');

    var IsConvenientContext = new Boolean($("#IsConvenientContextId").is(":checked"));
    var IsConvenientIapi = new Boolean($("#IsConvenientIapiId").is(":checked"));
    var IsConvenientClass = new Boolean($("#IsConvenientClassId").is(":checked"));
    var IsPathQualified = new Boolean($("#IsPathQualifiedId").is(":checked"));

    var IsConvenientContextO = new Boolean($("#IsConvenientContextOId").is(":checked"));
    var IsConvenientIapiO = new Boolean($("#IsConvenientIapiOId").is(":checked"));

    var IsShort = new Boolean($("#IsShortId").is(":checked"));
    var IsIapiOnly = new Boolean($("#IsIapiOnlyId").is(":checked"));
    var IsPathOnly = new Boolean($("#IsPathOnlyId").is(":checked"));

    var RowIdTrxLane = 0;

    var OctalCode = '0';
    var IsPathQualifiable = false;

    var QualifControlId = '0';
    var QualifReasonId = '0';

    var IsCyclopeClassDiscId = false;
    var IsCyclopePathDiscId = false;

    if (DhmStringStart != '' && DhmStringEnd != '' && DhmStringStartO != '' && DhmStringEndO != '') {

        QualifPathGet(ActionBtnId, Icon,
            RegionId, LSId, StationNumber, LaneName, DhmStringStart, DhmStringEnd, IsImage, IsImageIapi,
            RegionIdO, LSIdO, StationNumberO, LaneNameO, DhmStringStartO, DhmStringEndO, IsImageO, IsImageIapiO,
            BillingId, CategoryId,
            PresetId, ObsPassId, ObsTickId, ObsMpId,
            IsConvenientContext, IsConvenientIapi, IsConvenientClass, IsPathQualified,
            IsConvenientContextO, IsConvenientIapiO,
            IsContextOnly, IsIapiOnly, IsPathOnly, IsSortieOnly,
            RowIdTrxLane,
            ProductNumber,
            IsLabel, IsCyclopeClassify, IsCyclopePath,
            OctalCode,
            IsPathQualifiable,
            IsLabeled,
            SerialNumber, LicensePlate,
            QualifControlId, QualifReasonId,
            IsCyclopeClassDiscId, IsCyclopePathDiscId);
    }
    else {
        ParamMessageErrorDisplay('Les dates de début et de fin sont obligatoires');
    };
}


function LoyOccLabelSearch(ProductNumber) {
    var ActionBtnId = new String('LoyOccLabelSearchBtnId' + new String(ProductNumber).split(' ').join(''));
    var Icon = 'fas fa-eye btn-icon-cl gc-c1-cl';

    $('#' + ActionBtnId).find('span').attr('class', 'fa fa-spinner fa-spin btn-icon-cl gc-c1-cl');

    var SiteId = GetElementValue('SiteId');
    var StationNumber = GetElementValue('StationNumberId');
    var LaneName = GetElementValue('LaneNameId');
    var DhmStringStart = GetDhmStringFromDatePicker('DhmStartId');
    var DhmStringEnd = GetDhmStringFromDatePicker('DhmEndId');

    var SiteIdO = GetElementValue('SiteIdO');
    var StationNumberO = GetElementValue('StationNumberIdO');
    var LaneNameO = GetElementValue('LaneNameIdO');
    var DhmStringStartO = GetDhmStringFromDatePicker('DhmStartIdO');
    var DhmStringEndO = GetDhmStringFromDatePicker('DhmEndIdO');

    var IsImage = new Boolean($("#IsImageId").is(":checked"));
    var IsImageIapi = new Boolean($("#IsImageIapiId").is(":checked"));

    var IsImageO = new Boolean($("#IsImageOId").is(":checked"));
    var IsImageIapiO = new Boolean($("#IsImageIapiOId").is(":checked"));

    var BillingId = GetElementValue('BillingId');
    var CategoryId = GetElementValue('CategoryId');

    var PresetId = GetElementValue('PresetId');
    var ObsPassId = GetElementValue('ObsPassId');
    var ObsTickId = GetElementValue('ObsTickId');
    var ObsMpId = GetElementValue('ObsMpId');

    var IsConvenientContext = new Boolean($("#IsConvenientContextId").is(":checked"));
    var IsConvenientIapi = new Boolean($("#IsConvenientIapiId").is(":checked"));
    var IsConvenientClass = new Boolean($("#IsConvenientClassId").is(":checked"));
    var IsPathQualified = new Boolean($("#IsPathQualifiedId").is(":checked"));

    var IsConvenientContextO = new Boolean($("#IsConvenientContextOId").is(":checked"));
    var IsConvenientIapiO = new Boolean($("#IsConvenientIapiOId").is(":checked"));

    var IsShort = new Boolean($("#IsShortId").is(":checked"));
    var IsIapiOnly = new Boolean($("#IsIapiOnlyId").is(":checked"));
    var IsPathOnly = new Boolean($("#IsPathOnlyId").is(":checked"));

    var RowIdTrxLane = 0;

    if (DhmStringStart != '' && DhmStringEnd != '' && DhmStringStartO != '' && DhmStringEndO != '') {

        QualifPathCarouselGet(ActionBtnId, Icon,
            RegionId, LSId, StationNumber, LaneName, DhmStringStart, DhmStringEnd, IsImage, IsImageIapi,
            RegionIdO, LSIdO, StationNumberO, LaneNameO, DhmStringStartO, DhmStringEndO, IsImageO, IsImageIapiO,
            BillingId, CategoryId,
            PresetId, ObsPassId, ObsTickId, ObsMpId,
            IsConvenientContext, IsConvenientIapi, IsConvenientClass, IsPathQualified,
            IsConvenientContextO, IsConvenientIapiO,
            IsContextOnly, IsIapiOnly, IsPathOnly, IsSortieOnly,
            RowIdTrxLane,
            ProductNumber,
            IsLabel, IsCyclopeClassify, IsCyclopePath,
            OctalCode,
            IsPathQualifiable,
            IsLabeled,
            SerialNumber, LicensePlate,
            QualifControlId, QualifReasonId,
            IsCyclopeClassDiscId, IsCyclopePathDiscId);
    }
    else {
        ParamMessageErrorDisplay('Les dates de début et de fin sont obligatoires');
    };
}


function QualifObsTickIdPPerfDayGet(ActionBtnId, Icon, IsMargin, DateStringStart, DateStringEnd) {

    //Spin    
    ActionSpin(ActionBtnId, IsMargin);

    //ParamReset
    ParamMessageReset();

    var PatternTable = 'QualifObsTickIdPPerfDay';
    var PatternTableId = PatternTable + 'TableId'
    var PatternTableReportId = PatternTable + 'TableReportId';

    $('#' + PatternTableId).DataTable().destroy();
    $('#' + PatternTableId).DataTable({
        "dom": 'Bfrtip',
        "buttons": [
            'excel'
        ],
        "initComplete": function (settings, json) {
            ActionBtnIconSet(ActionBtnId, Icon);
            ShowReport(PatternTableReportId);
        },
        "ajax": {
            "url": "/Qualif/QualifObsTickIdPPerfDayGet",
            "type": "GET",
            "datatype": "json",
            "data": {
                DateStringStart: DateStringStart,
                DateStringEnd: DateStringEnd
            }
        },
        "columns": [
            { "data": "" },//0
            { "data": "CreatedBy" },//1
            { "data": "FullName" },//2

            { "data": "ObsTickIdP" },//3

            { "data": "ObsTickIdP01" },//4
            { "data": "ObsTickIdP01" },//5

            { "data": "ObsTickIdP02" },//6
            { "data": "ObsTickIdP02" },//7

            { "data": "ObsTickIdP03" },//8
            { "data": "ObsTickIdP03" },//9
        ],
        "columnDefs": [
            { "width": "3%", "className": "text-center", "targets": 0 },
            { "width": "3%", "className": "text-center", "targets": 1 },
            { "width": "3%", "className": "text-center", "targets": 2 },

            { "width": "3%", "className": "text-right", "targets": 3 },

            { "width": "3%", "className": "text-right", "targets": 4 },
            { "width": "3%", "className": "text-right", "targets": 5 },
            { "width": "3%", "className": "text-right", "targets": 6 },
            { "width": "3%", "className": "text-right", "targets": 7 },
            { "width": "3%", "className": "text-right", "targets": 8 },
            { "width": "3%", "className": "text-right", "targets": 9 },
            
            { "targets": 0, "render": function (data, type, row) { return DataTableDateValueFromRowGet(row); } },
            { "targets": 1, "render": function (data, type, row) { return '<img class="dt-img-cl" src="/Images/Profil/' + data + row['ImageExtension'] + '" />'; } },
            { "targets": 2, "render": function (data, type, row) { return data; } },

            { "targets": 3, "render": function (data, type, row) { return DataTableFormatIntNullAlertGet(data); } },

            { "targets": 4, "render": function (data, type, row) { return DataTableFormatIntNullAlertGet(data); } },
            { "targets": 5, "render": function (data, type, row) { return DataTableRateTwoThresholdsGet(data, row['ObsTickIdP'], 2, 80, 98); } },

            { "targets": 6, "render": function (data, type, row) { return DataTableFormatIntNullAlertGet(data); } },
            { "targets": 7, "render": function (data, type, row) { return DataTableRateTwoThresholdsGet(data, row['ObsTickIdP'], 2, 80, 98); } },

            { "targets": 8, "render": function (data, type, row) { return DataTableFormatIntNullAlertGet(data); } },
            { "targets": 9, "render": function (data, type, row) { return DataTableRateTwoThresholdsGet(data, row['ObsTickIdP'], 2, 80, 98); } },
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
        "iDisplayLength": 31,
        "processing": false,
        "responsive": true,
        "bFilter": true,
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


            //Total0 = api.column(1).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);
            //$(api.column(1).footer()).html(numShortFormat(Total0));

            //Total1 = api.column(3).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);
            //$(api.column(3).footer()).html(numShortFormat(Total1));

            //Total2 = api.column(5).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);
            //$(api.column(5).footer()).html(numShortFormat(Total2));
        }
    });
}


function QualifObsTickIdPPerfCumulGet(ActionBtnId, Icon, IsMargin, DateStringStart, DateStringEnd) {

    //Spin
    ActionSpin(ActionBtnId, IsMargin);

    ParamMessageReset();

    var PatternTable = 'QualifObsTickIdPPerfCumul';
    var PatternTableId = PatternTable + 'TableId'
    var PatternTableReportId = PatternTable + 'TableReportId';

    $('#' + PatternTableId).DataTable().destroy();
    $('#' + PatternTableId).DataTable({
        "dom": 'Bfrtip',
        "buttons": [
            'excel'
        ],
        "initComplete": function (settings, json) {
            ActionBtnIconSet(ActionBtnId, Icon);
            ShowReport(PatternTableReportId);
        },
        "ajax": {
            "url": "/Qualif/QualifObsTickIdPPerfCumulGet",
            "type": "GET",
            "datatype": "json",
            "data": {
                DateStringStart: DateStringStart,
                DateStringEnd: DateStringEnd
            }
        },
        "columns": [
            { "data": "" },//0
            { "data": "" },//1
            { "data": "CreatedBy" },//2
            { "data": "FullName" },//3

            { "data": "ObsTickIdP" },//4

            { "data": "ObsTickIdP01" },//5
            { "data": "ObsTickIdP01" },//6

            { "data": "ObsTickIdP02" },//7
            { "data": "ObsTickIdP02" },//8

            { "data": "ObsTickIdP03" },//9
            { "data": "ObsTickIdP03" },//10
        ],
        "columnDefs": [
            { "width": "3%", "className": "text-center", "targets": 0 },
            { "width": "3%", "className": "text-center", "targets": 1 },
            { "width": "3%", "className": "text-center", "targets": 2 },
            { "width": "3%", "className": "text-center", "targets": 3 },

            { "width": "3%", "className": "text-right", "targets": 4 },

            { "width": "3%", "className": "text-right", "targets": 5 },
            { "width": "3%", "className": "text-right", "targets": 6 },

            { "width": "3%", "className": "text-right", "targets": 7 },
            { "width": "3%", "className": "text-right", "targets": 8 },

            { "width": "3%", "className": "text-right", "targets": 9 },
            { "width": "3%", "className": "text-right", "targets": 10 },

            { "targets": 0, "render": function (data, type, row) { return DataTableDateValueStartFromRowGet(row); } },
            { "targets": 1, "render": function (data, type, row) { return DataTableDateValueEndFromRowGet(row); } },
            { "targets": 2, "render": function (data, type, row) { return '<img class="dt-img-cl" src="/Images/Profil/' + data + row['ImageExtension'] + '" />'; } },
            { "targets": 3, "render": function (data, type, row) { return data; } },

            { "targets": 4, "render": function (data, type, row) { return DataTableFormatIntNullAlertGet(data); } },

            { "targets": 5, "render": function (data, type, row) { return DataTableFormatIntNullAlertGet(data); } },
            { "targets": 6, "render": function (data, type, row) { return DataTableRateTwoThresholdsGet(data, row['ObsTickIdP'], 2, 80, 98); } },

            { "targets": 7, "render": function (data, type, row) { return DataTableFormatIntNullAlertGet(data); } },
            { "targets": 8, "render": function (data, type, row) { return DataTableRateTwoThresholdsGet(data, row['ObsTickIdP'], 2, 80, 98); } },

            { "targets": 9, "render": function (data, type, row) { return DataTableFormatIntNullAlertGet(data); } },
            { "targets": 10, "render": function (data, type, row) { return DataTableRateTwoThresholdsGet(data, row['ObsTickIdP'], 2, 80, 98); } },
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
        "iDisplayLength": 31,
        "processing": false,
        "responsive": true,
        "bFilter": true,
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


            //Total0 = api.column(1).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);
            //$(api.column(1).footer()).html(numShortFormat(Total0));

            //Total1 = api.column(3).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);
            //$(api.column(3).footer()).html(numShortFormat(Total1));

            //Total2 = api.column(5).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);
            //$(api.column(5).footer()).html(numShortFormat(Total2));
        }
    });
}


function QualifPerfLabelGet() {

    var ActionBtnId = 'ParamActionBtnId0';
    var Icon = 'fas fa-eye btn-icon-m-cl gc-c1-cl';

    //Spin
    ActionBtnSpin(ActionBtnId);

    //Hide some datatables
    QualifAllReportsHide();
    //ShowReport('ParamReportId');

    ParamMessageReset();

    var PatternTable = 'QualifPerfLabel';
    var PatternTableId = PatternTable + 'TableId'
    var PatternTableReportId = PatternTable + 'TableReportId';

    $('#' + PatternTableId).DataTable().destroy();
    $('#' + PatternTableId).DataTable({
        "dom": 'Bfrtip',
        "buttons": [
            'excel'
        ],
        "initComplete": function (settings, json) {
            ActionBtnIconSet(ActionBtnId, Icon);
            ShowReport(PatternTableReportId);
        },
        "ajax": {
            "url": "/Qualif/QualifPerfLabelGet",
            "type": "GET",
            "datatype": "json"
            //"data": {
            //    DateStringStart: DateStringStart,
            //    DateStringEnd: DateStringEnd
            //}
        },
        "columns": [
            { "data": "UserId" },//0
            { "data": "FullName" },//1

            { "data": "ContextOk" },//2
            { "data": "IapiOk" },//3

            { "data": "ContextOkO" },//4
            { "data": "IapiOkO" },//5

            { "data": "LabelC1" },//6
            { "data": "LabelC2" },//7
            { "data": "LabelC3" },//8

            { "data": "LabelAxles" },//9

            { "data": "UserId" },//10
        ],
        "columnDefs": [
            { "width": "3%", "className": "text-center", "targets": 0 },
            { "width": "3%", "className": "text-center", "targets": 1 },

            { "width": "3%", "className": "text-right", "targets": 2 },
            { "width": "3%", "className": "text-right", "targets": 3 },

            { "width": "3%", "className": "text-right", "targets": 4 },
            { "width": "3%", "className": "text-right", "targets": 5 },

            { "width": "3%", "className": "text-right", "targets": 6 },
            { "width": "3%", "className": "text-right", "targets": 7 },
            { "width": "3%", "className": "text-right", "targets": 8 },

            { "width": "3%", "className": "text-right", "targets": 9 },

            { "width": "3%", "className": "text-center", "targets": 10 },

            { "targets": 0, "render": function (data, type, row) { return '<img class="dt-img-cl" src="/Images/Profil/' + data + row['ImageExtension'] + '" />'; } },
            { "targets": 1, "render": function (data, type, row) { return data; } },

            { "targets": 2, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 3, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },

            { "targets": 4, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 5, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },

            { "targets": 6, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 7, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 8, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },

            { "targets": 9, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },

            { "targets": 10, "render": function (data, type, row) { return DataTableButtonGet('QualifPerfLabelUserSearch', data, '\'' + data + '\'', '', 'dt-btn-cl gc-bc1-cl', 'fas fa-eye btn-icon-cl gc-c1-cl', '') } },
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
        "iDisplayLength": 31,
        "processing": false,
        "responsive": true,
        "bFilter": true,
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


            Total0 = api.column(2).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);
            $(api.column(2).footer()).html(numShortFormat(Total0));

            Total1 = api.column(3).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);
            $(api.column(3).footer()).html(numShortFormat(Total1));

            Total2 = api.column(4).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);
            $(api.column(4).footer()).html(numShortFormat(Total2));

            Total3 = api.column(5).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);
            $(api.column(5).footer()).html(numShortFormat(Total3));

            Total4 = api.column(6).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);
            $(api.column(6).footer()).html(numShortFormat(Total4));

            Total5 = api.column(7).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);
            $(api.column(7).footer()).html(numShortFormat(Total5));

            Total6 = api.column(8).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);
            $(api.column(8).footer()).html(numShortFormat(Total6));

            Total7 = api.column(9).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);
            $(api.column(9).footer()).html(numShortFormat(Total7));
        }
    });
}



function CertImageNameGet(row) {
    return '<a href="' + row['ImagePath'] + '" target="_blank">' +
        '<img class="dt-img-cl" src="http://localhost:1010/Lanes/' + row['IpAddress'] + '/' + row['ImageName'] + '" />' +
        '</a>';
}

function QualifImageGet(ImagePath) {
    return '<a href="' + ImagePath + '" target="_blank">' +
        '<img class="dt-img-cl" src="' + ImagePath + '" />' +
        '</a>';
}

function QualifImageBigGet(ImagePath) {
    return '<a href="' + ImagePath + '" target="_blank">' +
        '<img class="dt-img-big-cl" src="' + ImagePath + '" />' +
        '</a>';
}

//AllValidate
function QualifIsToSendAllSet() {
    //Set action button
    var ActionBtnId = 'ParamActionBtnId2';
    var Icon = 'fas fa-check btn-icon-m-cl gc-c1-cl';

    var SiteId = GetElementValue('SiteId');
    var BagContainerId = GetElementValue('BagContainerId');
    var StationNumber = GetElementValue('StationNumberId');
    var LaneName = GetElementValue('LaneNameId');

    var SiteIdO = GetElementValue('SiteIdO');
    var BagContainerIdO = GetElementValue('BagContainerIdO');
    var StationNumberO = GetElementValue('StationNumberIdO');
    var LaneNameO = GetElementValue('LaneNameIdO');

    var BillingId = GetElementValue('BillingId');
    var CategoryId = GetElementValue('CategoryId');

    var DhmStringStart = GetDhmStringFromDatePicker('DhmStartId');
    var DhmStringEnd = GetDhmStringFromDatePicker('DhmEndId');

    var DhmStringStartO = GetDhmStringFromDatePicker('DhmStartIdO');
    var DhmStringEndO = GetDhmStringFromDatePicker('DhmEndIdO');

    var IsImageDisc = new Boolean($("#IsImageDiscId").is(":checked"));
    var IsImageDiscO = new Boolean($("#IsImageDiscOId").is(":checked"));

    var ObsPassId = GetElementValue('ObsPassId');

    //Get input values
    var DatastoreId = GetElementValue('DatastoreId');

    if (DatastoreId != 0) {
        ParamMessageReset();

        //Spin
        ActionBtnSpin(ActionBtnId);
        var obj = {};
        obj.SiteId = SiteId;
        obj.BagContainerId = BagContainerId;
        obj.StationNumber = StationNumber;
        obj.LaneName = LaneName;

        obj.SiteIdO = SiteIdO;
        obj.BagContainerIdO = BagContainerIdO;
        obj.StationNumberO = StationNumberO;
        obj.LaneNameO = LaneNameO;

        obj.BillingId = BillingId;
        obj.CategoryId = CategoryId;

        obj.DhmStringStart = DhmStringStart;
        obj.DhmStringEnd = DhmStringEnd;

        obj.DhmStringStartO = DhmStringStartO;
        obj.DhmStringEndO = DhmStringEndO;

        obj.IsImageDisc = IsImageDisc;
        obj.IsImageDiscO = IsImageDiscO;

        obj.ObsPassId = ObsPassId;

        $.ajax({
            url: "/Qualif/QualifTrxLaneIsToSendAllSet",
            method: "POST",
            data: JSON.stringify(obj),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {
                ActionBtnIconSet(ActionBtnId, Icon);
                QualifTrxLaneDisplay();
            }
        });

    }
    else {
        ParamMessageErrorDisplay('Le champ Datastore est obligatoire')
    }
}


function QualifTrxLaneIsToSendGet(Id, IsToSend) {
    var onchange = 'QualifTrxLaneIsConvenientSet(' + Id + ')';
    var Pattern = 'QualifTrxLaneIsToSendSwitch';
    var data = IsToSend;
    return DataTableCheckBoxGet(Pattern, Id, data, onchange);
}

function QualifTrxLaneIsSentGet(Id, IsSent) {
    var onchange = 'QualifTrxLaneIsSentSwitch(' + Id + ')';
    var Pattern = 'QualifTrxLaneIsSentSwitch';
    var data = IsSent;
    return DataTableCheckBoxGet(Pattern, Id, data, onchange);
}


function QualifTrxLaneImageOpen(ImagePath) {
    window.location = ImagePath;
}





function QualifTrxLaneJsFill() {
    var SiteId = GetElementValue('SiteId');
    var BagContainerId = GetElementValue('BagContainerId');
    var StationNumber = GetElementValue('StationNumberId');
    var LaneName = GetElementValue('LaneNameId');

    var SiteIdO = GetElementValue('SiteIdO');
    var BagContainerIdO = GetElementValue('BagContainerIdO');
    var StationNumberO = GetElementValue('StationNumberIdO');
    var LaneNameO = GetElementValue('LaneNameIdO');

    var BillingId = GetElementValue('BillingId');
    var CategoryId = GetElementValue('CategoryId');

    var DhmStringStart = GetDhmStringFromDatePicker('DhmStartId');
    var DhmStringEnd = GetDhmStringFromDatePicker('DhmEndId');

    var DhmStringStartO = GetDhmStringFromDatePicker('DhmStartIdO');
    var DhmStringEndO = GetDhmStringFromDatePicker('DhmEndIdO');

    var IsImageDisc = new Boolean($("#IsImageDiscId").is(":checked"));
    var IsImageDiscO = new Boolean($("#IsImageDiscOId").is(":checked"));

    var ObsPassId = GetElementValue('ObsPassId');

    var IsToSend = new Boolean($("#IsToSendId").is(":checked"));
    var IsSent = new Boolean($("#IsSentId").is(":checked"));

    return new QualifTrxLaneJs(SiteId,
        BagContainerId,
        StationNumber,
        LaneName,

        SiteIdO,
        BagContainerIdO,
        StationNumberO,
        LaneNameO,

        BillingId,
        CategoryId,

        DhmStringStart,
        DhmStringEnd,

        DhmStringStartO,
        DhmStringEndO,

        IsImageDisc,
        IsImageDiscO,

        ObsPassId,

        IsToSend,
        IsSent)
}



//class QualifTrxLaneJs {
//    constructor(SiteId,
//        BagContainerId,
//        StationNumber,
//        LaneName,

//        SiteIdO,
//        BagContainerIdO,
//        StationNumberO,
//        LaneNameO,

//        BillingId,
//        CategoryId,

//        DhmStringStart,
//        DhmStringEnd,

//        DhmStringStartO,
//        DhmStringEndO,

//        IsImageDisc,
//        IsImageDiscO,

//        ObsPassId,

//        IsToSend,
//        IsSent) {

//        this.SiteId = SiteId;
//        this.BagContainerId = BagContainerId;
//        this.StationNumber = StationNumber;
//        this.LaneName = LaneName;

//        this.SiteIdO = SiteIdO;
//        this.BagContainerIdO = BagContainerIdO;
//        this.StationNumberO = StationNumberO;
//        this.LaneNameO = LaneNameO;

//        this.BillingId = BillingId;
//        this.CategoryId = CategoryId;

//        this.DhmStringStart = DhmStringStart;
//        this.DhmStringEnd = DhmStringEnd;

//        this.DhmStringStartO = DhmStringStartO;
//        this.DhmStringEndO = DhmStringEndO;

//        this.IsImageDisc = IsImageDisc;
//        this.IsImageDiscO = IsImageDiscO;

//        this.ObsPassId = ObsPassId;

//        this.IsToSend = IsToSend;
//        this.IsSent = IsSent;
//    }
//}



function QualifTrxBorneDisplay() {
    var ActionBtnId = 'ParamActionBtnId0';
    var Icon = 'fas fa-eye btn-icon-m-cl gc-c1-cl';
    var IsMargin = true;

    var RegionId = GetElementValue('RegionIdO');
    var LSId = GetElementValue('LSIdO');
    var StationNumber = GetElementValue('StationNumberIdO');
    var LaneName = GetElementValue('LaneNameIdO');
    var DhmStringStart = GetDhmStringFromDatePicker('DhmStartIdO');
    var DhmStringEnd = GetDhmStringFromDatePicker('DhmEndIdO');

    var IsImage = new Boolean($("#IsImageOId").is(":checked"));
    var IsImageIapi = new Boolean($("#IsImageIapiOId").is(":checked"));

    var LicensePlate = GetElementValue('LicensePlateIdO');
    var ReadTickNumber = GetElementValue('ReadTickNumberIdO');
    var ProductNumber = GetElementValue('ProductNumberIdO');
    var SerialNumber = GetElementValue('SerialNumberIdO');

    if (DhmStringStart != '' && DhmStringEnd != '') {

        QualifTrxBorneGet(ActionBtnId, Icon, IsMargin,
            RegionId, LSId, StationNumber, LaneName, DhmStringStart, DhmStringEnd, IsImage, IsImageIapi,
            LicensePlate, ReadTickNumber, ProductNumber, SerialNumber);
    }
    else {
        ParamMessageErrorDisplay('Les dates de début et de fin sont obligatoires');
    };
}



function QualifTrxBorneGet(ActionBtnId, Icon, IsMargin,
    RegionId, LSId, StationNumber, LaneName, DhmStringStart, DhmStringEnd, IsImage, IsImageIapi,
    LicensePlate, ReadTickNumber, ProductNumber, SerialNumber) {

    //Spin
    ActionSpin(ActionBtnId, IsMargin);

    //Set datatable patterns
    var Pattern = 'QualifTrxBorne';
    var PatternTableId = Pattern + 'TableId';
    var PatternTableReportId = Pattern + 'TableReportId';

    //Get
    HideReport(PatternTableReportId);
    $('#' + PatternTableId).DataTable().destroy();;
    $('#' + PatternTableId).DataTable({
        "initComplete": function (settings, json) {
            ActionBtnSet(ActionBtnId, Icon, IsMargin);
            ShowReport(PatternTableReportId);
        },
        "ajax": {
            "url": "/Qualif/QualifTrxBorneGet",
            "type": "GET",
            "datatype": "json",
            "data": {
                "RegionId": RegionId,
                "LSId": LSId,
                "StationNumber": StationNumber,
                "LaneName": LaneName,
                "DhmStringStart": DhmStringStart,
                "DhmStringEnd": DhmStringEnd,

                "IsImage": IsImage,
                "IsImageIapi": IsImageIapi,

                "LicensePlate": LicensePlate,
                "ReadTickNumber": ReadTickNumber,
                "ProductNumber": ProductNumber,
                "SerialNumber": SerialNumber                
            }
        },
        "columns": [
            { "data": "NetworkId" }, //0
            { "data": "StationNumber" }, //1
            { "data": "LaneName" }, //2 
            { "data": "DhmValue" },//3
            { "data": "TrxNumber" }, //4
            { "data": "TrxIndex" }, //5

            { "data": "LicensePlate" }, //6
            { "data": "TicketNumber" }, //7
            { "data": "SerialNumber" }, //8

            { "data": "ImagePath" }, //9
            { "data": "ImageIapiPath" }, //10 

            { "data": "RowIdTrxBorne" }, //11
            { "data": "RowIdTrxBorne" }, //12
            { "data": "RowIdTrxBorne" }, //13
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

            { "width": "3%", "className": "text-left", "targets": 9 },
            { "width": "3%", "className": "text-left", "targets": 10 },

            { "width": "3%", "className": "text-center", "targets": 11 },
            { "width": "3%", "className": "text-center", "targets": 12 },
            { "width": "3%", "className": "text-center", "targets": 13 },

            { "targets": 0, "render": function (data, type, row) { return data; } },
            { "targets": 1, "render": function (data, type, row) { return data; } },
            { "targets": 2, "render": function (data, type, row) { return data; } },
            { "targets": 3, "render": function (data, type, row) { return GetDhmValueFromDataTableDate(data); } },
            { "targets": 4, "render": function (data, type, row) { return data; } },
            { "targets": 5, "render": function (data, type, row) { return data; } },

            { "targets": 6, "render": function (data, type, row) { return data; } },
            { "targets": 7, "render": function (data, type, row) { return data; } },
            { "targets": 8, "render": function (data, type, row) { return data; } },

            { "targets": 9, "render": function (data, type, row) { return QualifImageGet(data); } },
            { "targets": 10, "render": function (data, type, row) { return QualifImageGet(data); } },
            //CertImageRestaure(Id, IdTrx, From) 
            { "targets": 11, "render": function (data, type, row) { return DataTableButtonGet('CertImageRestaure', data + '0', data + '0' + ', 6, \'' + data + '\', \'Lane\'', '', 'dt-btn-cl gc-bc1-cl', 'fas fa-upload btn-icon-cl gc-c1-cl', '') } },
            { "targets": 12, "render": function (data, type, row) { return DataTableButtonGet('CertImageRestaure', data + '1', data + '0' + ', 6, \'' + data + '\', \'165\'', '', 'dt-btn-cl gc-bc1-cl', 'fas fa-upload btn-icon-cl gc-c1-cl', '') } },
            { "targets": 13, "render": function (data, type, row) { return DataTableButtonGet('CertImageRestaure', data + '2', data + '0' + ', 6, \'' + data + '\', \'23\'', '', 'dt-btn-cl gc-bc1-cl', 'fas fa-upload btn-icon-cl gc-c1-cl', '') } },

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
        "iDisplayLength": 20,
        "processing": false,
        "responsive": true,
        "bFilter": true,
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

            //Total1 = api.column(8).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);
            //$(api.column(8).footer()).html(numFormat(Total1));

            //IntTotal1 = api.column(8).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);
            //IntTotal2 = api.column(9).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);

            //$(api.column(7).footer()).html(numFormat(DoubleTotal1));

            //$(api.column(9).footer()).html(numShortFormat(IntTotal2));
        }
    });
}

function QualifTrxBorneFromPlateSearch(TrxLaneRowId) {
    var ActionBtnId = 'QualifTrxBorneFromPlateSearchBtnId' + TrxLaneRowId;
    var Icon = 'far fa-check-circle';

    //Spin
    ActionBtnSpin(ActionBtnId);

    //Set datatable patterns
    var Pattern = 'QualifTrxBorne';
    var PatternTableId = Pattern + 'TableId';
    var PatternTableReportId = Pattern + 'TableReportId';

    //Get
    HideReport(PatternTableReportId);
    $('#' + PatternTableId).DataTable().destroy();;
    $('#' + PatternTableId).DataTable({
        "initComplete": function (settings, json) {
            ActionBtnIconSet(ActionBtnId, Icon);
            ShowReport(PatternTableReportId);
        },
        "ajax": {
            "url": "/Qualif/QualifTrxBorneFromPlateGet",
            "type": "GET",
            "datatype": "json",
            "data": {
                "TrxLaneRowId": TrxLaneRowId
            }
        },
        "columns": [
            { "data": "NetworkId" }, //0
            { "data": "StationNumber" }, //1
            { "data": "LaneName" }, //2           
            { "data": "DhmValue" },//3 
            { "data": "TrxNumber" },//4
            { "data": "TrxIndex" },//5 
            { "data": "LicensePlate" },//6           
            { "data": "TicketNumber" },//7

            { "data": "ImagePath" },//8
            { "data": "ImageIapiPath" },//9

            { "data": "RowIdTrxBorne" },//10 ImageLaneSearch
            { "data": "RowIdTrxBorne" },//11 ImageBorneSearch
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
            { "width": "3%", "className": "text-center", "targets": 11 },

            { "targets": 0, "render": function (data, type, row) { return data; } },
            { "targets": 1, "render": function (data, type, row) { return data; } },
            { "targets": 2, "render": function (data, type, row) { return data; } },
            { "targets": 3, "render": function (data, type, row) { return GetDhmValueFromDataTableDate(data); } },
            { "targets": 4, "render": function (data, type, row) { return data; } },
            { "targets": 5, "render": function (data, type, row) { return data; } },
            { "targets": 6, "render": function (data, type, row) { return data; } },
            { "targets": 7, "render": function (data, type, row) { return data; } },

            { "targets": 8, "render": function (data, type, row) { return QualifImageGet(data); } },
            { "targets": 9, "render": function (data, type, row) { return QualifImageGet(data); } },

            {
                "targets": 10, "render": function (data, type, row) {
                    return DataTableButtonGet('QualifImageLaneSearch', data, data, '', 'dt-btn-cl gc-bc1-cl', 'fas fa-eye btn-icon-cl gc-c1-cl', '');
                }
            },
            {
                "targets": 11, "render": function (data, type, row) {
                    return DataTableButtonGet('QualifImageBorneSearch', data, data, '', 'dt-btn-cl gc-bc1-cl', 'fas fa-eye btn-icon-cl gc-c1-cl', '');
                }
            },
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
        "iDisplayLength": 20,
        "processing": false,
        "responsive": true,
        "bFilter": true,
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

            //Total1 = api.column(8).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);
            //$(api.column(8).footer()).html(numFormat(Total1));

            //IntTotal1 = api.column(8).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);
            //IntTotal2 = api.column(9).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);

            //$(api.column(7).footer()).html(numFormat(DoubleTotal1));

            //$(api.column(9).footer()).html(numShortFormat(IntTotal2));
        }
    });
}

//Load
//function QualifPathFormLoad(Pattern, PatternForm, RowIdTrxLane) {
//    //Sert FormIndex
//    var FormIndex = 1;



//    ////initialize
//    var LabelId = "ImageId" + FormIndex + "LabelId";
//    var HrefId = "ImageId" + FormIndex + "HrefId";
//    var HrefIapiId = "ImageIapiId" + FormIndex + "HrefId";
//    var ImageId = "ImageId" + FormIndex;
//    var ImageIapiId = "ImageIapiId" + FormIndex;

//    var LabelIdO = "ImageIdO" + FormIndex + "LabelId";
//    var HrefIdO = "ImageIdO" + FormIndex + "HrefId";
//    var HrefIapiIdO = "ImageIapiIdO" + FormIndex + "HrefId";
//    var ImageIdO = "ImageIdO" + FormIndex;
//    var ImageIapiIdO = "ImageIapiIdO" + FormIndex;

//    document.getElementById(ImageId).src = "";
//    document.getElementById(ImageIapiId).src = "";
//    document.getElementById(ImageIdO).src = "";
//    document.getElementById(ImageIapiIdO).src = "";

//    document.getElementById(HrefId).href = "";
//    document.getElementById(HrefIapiId).href = "";
//    document.getElementById(HrefIdO).href = "";
//    document.getElementById(HrefIapiIdO).href = "";





//    //Load
//    var obj = {};
//    obj.RowIdTrxLane = RowIdTrxLane;



//    $.ajax({
//        url: "/Qualif/QualifPathTrxLaneGet",
//        method: "POST",
//        data: JSON.stringify(obj),
//        contentType: "application/json; charset=utf-8",
//        dataType: "json",
//        async: true,
//        success: function (data) {
//            jQuery.each(data, function (index, itemData) {

//                //Get features
//                var ImagePath = itemData[0].ImagePath;
//                var ImageIapiPath = itemData[0].ImageIapiPath;

//                var ImagePathO = itemData[0].ImagePathO;
//                var ImageIapiPathO = itemData[0].ImageIapiPathO;

//                var StationName = itemData[0].StationName;
//                var LaneName = itemData[0].LaneName;
//                var DhmValue = itemData[0].DhmValue;

//                var MpName = itemData[0].MpName;
//                var CategoryId = itemData[0].CategoryPreDacId;

//                var ObsPassName = itemData[0].ObsPassName;
//                var ObsMpName = itemData[0].ObsMpName;
//                var ObsTickName = itemData[0].ObsTickName;



//                var StationNameO = itemData[0].StationNameO;
//                var LaneNameO = itemData[0].LaneNameO;
//                var DhmValueO = itemData[0].DhmValueO;
//                var IsConvenientContext = itemData[0].IsConvenientContext;
//                var IsConvenientIapi = itemData[0].IsConvenientIapi;
//                var IsConvenientClass = itemData[0].IsConvenientClass;
//                var IsPathQualified = itemData[0].IsPathQualified;



//                ////initialize
//                var LabelId = "ImageId" + FormIndex + "LabelId";
//                var HrefId = "ImageId" + FormIndex + "HrefId";
//                var HrefIapiId = "ImageIapiId" + FormIndex + "HrefId";
//                var ImageId = "ImageId" + FormIndex;
//                var ImageIapiId = "ImageIapiId" + FormIndex;

//                var LabelIdO = "ImageIdO" + FormIndex + "LabelId";
//                var HrefIdO = "ImageIdO" + FormIndex + "HrefId";
//                var HrefIapiIdO = "ImageIapiIdO" + FormIndex + "HrefId";
//                var ImageIdO = "ImageIdO" + FormIndex;
//                var ImageIapiIdO = "ImageIapiIdO" + FormIndex;

//                document.getElementById(ImageId).src = "";
//                document.getElementById(ImageIapiId).src = "";
//                document.getElementById(ImageIdO).src = "";
//                document.getElementById(ImageIapiIdO).src = "";

//                document.getElementById(HrefId).href = "";
//                document.getElementById(HrefIapiId).href = "";
//                document.getElementById(HrefIdO).href = "";
//                document.getElementById(HrefIapiIdO).href = "";

//                //$(LabelId).text("Image entrée");
//                //$(LabelIdO).text("Image sortie");

//                document.getElementById(Pattern + PatternForm + 'ModalDialogReportId').className = '';
//                document.getElementById(Pattern + PatternForm + 'ModalDialogReportId').style.width = '90%';
//                document.getElementById(Pattern + PatternForm + 'ModalDialogReportId').style.marginLeft = '5%';
//                document.getElementById(Pattern + PatternForm + 'ModalDialogReportId').style.marginTop = '5%';



//                document.getElementById(ImageId).src = ImagePath;
//                document.getElementById(ImageIapiId).src = ImageIapiPath;
//                document.getElementById(ImageIdO).src = ImagePathO;
//                document.getElementById(ImageIapiIdO).src = ImageIapiPathO;

//                document.getElementById(HrefId).href = ImagePath;
//                document.getElementById(HrefIapiId).href = ImageIapiPath;
//                document.getElementById(HrefIdO).href = ImagePathO;
//                document.getElementById(HrefIapiIdO).href = ImageIapiPathO;

//                var Info = StationName + ' | ' + LaneName + ' | ' + GetDhmValueNullableFromDataTableDate(DhmValue);
//                $('#InfoId' + FormIndex).text(Info);

//                $('#MpNameId' + FormIndex).text(MpName);
//                $('#CategoryId' + FormIndex).text(CategoryId);

//                $('#ObsPassNameId' + FormIndex).text(ObsPassName);
//                $('#ObsMpNameId' + FormIndex).text(ObsMpName);
//                $('#ObsTickNameId' + FormIndex).text(ObsTickName);

//                var InfoO = StationNameO + ' | ' + LaneNameO + ' | ' + GetDhmValueNullableFromDataTableDate(DhmValueO);
//                $('#InfoIdO' + FormIndex).text(InfoO);


//                ////Set drop down lists
//                HtmlDropDownListNameOnlyXorFill('QualifControlId' + FormIndex, '01', '/Qualif/QualifControlsGet', 'QualifControlId', 'QualifControlName');

//                ////Set OnChange

//                ////Set inputs
//                document.getElementById('CommentId' + FormIndex).value = '';
//                document.getElementById('IsConvenientContextId' + FormIndex).checked = IsConvenientContext;
//                document.getElementById('IsConvenientIapiId' + FormIndex).checked = IsConvenientIapi;
//                document.getElementById('IsConvenientClassId' + FormIndex).checked = IsConvenientClass;

//                document.getElementById('IsConvenientContextId' + FormIndex).setAttribute("onChange", "QualifTrxLaneIsConvenientContextSet(" + RowIdTrxLane + ", " + FormIndex + ")");
//                document.getElementById('IsConvenientIapiId' + FormIndex).setAttribute("onChange", "QualifTrxLaneIsConvenientIapiGet(" + RowIdTrxLane + ", " + FormIndex + ")");
//                document.getElementById('IsConvenientClassId' + FormIndex).setAttribute("onChange", "QualifTrxLaneIsConvenientClassSet(" + RowIdTrxLane + ", " + FormIndex + ")");

//                ////Hide some inputs

//                ////Set modal action buttons
//                ModalActionBtnEditGet(Pattern, '\'' + RowIdTrxLane + '\'', FormIndex);

//            });
//        }
//    });

//    QualifPathLogsGet(RowIdTrxLane);
//}


function QualifTrxLaneIsConvenientClassSet(RowIdTrxLane, FormIndex) {
    var IsConvenientClass = new Boolean($('#IsConvenientClassId' + FormIndex).is(":checked"));
    //Edit
    var obj = {};
    obj.RowIdTrxLane = RowIdTrxLane;
    obj.IsConvenientClass = IsConvenientClass;

    $.ajax({
        url: "/Qualif/QualifTrxLaneIsConvenientClassSet",
        method: "POST",
        data: JSON.stringify(obj),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            //BiColumnDisplay();
        }
    });
}





//Load
//function QualifPathFormLoad(Pattern, PatternForm, RowIdTrxLane) {
//    //Sert FormIndex
//    var FormIndex = 1;



//    ////initialize
//    var LabelId = "ImageId" + FormIndex + "LabelId";
//    var HrefId = "ImageId" + FormIndex + "HrefId";
//    var HrefIapiId = "ImageIapiId" + FormIndex + "HrefId";
//    var ImageId = "ImageId" + FormIndex;
//    var ImageIapiId = "ImageIapiId" + FormIndex;

//    var LabelIdO = "ImageIdO" + FormIndex + "LabelId";
//    var HrefIdO = "ImageIdO" + FormIndex + "HrefId";
//    var HrefIapiIdO = "ImageIapiIdO" + FormIndex + "HrefId";
//    var ImageIdO = "ImageIdO" + FormIndex;
//    var ImageIapiIdO = "ImageIapiIdO" + FormIndex;

//    document.getElementById(ImageId).src = "";
//    document.getElementById(ImageIapiId).src = "";
//    document.getElementById(ImageIdO).src = "";
//    document.getElementById(ImageIapiIdO).src = "";

//    document.getElementById(HrefId).href = "";
//    document.getElementById(HrefIapiId).href = "";
//    document.getElementById(HrefIdO).href = "";
//    document.getElementById(HrefIapiIdO).href = "";





//    //Load
//    var obj = {};
//    obj.RowIdTrxLane = RowIdTrxLane;



//    $.ajax({
//        url: "/Qualif/QualifPathTrxLaneGet",
//        method: "POST",
//        data: JSON.stringify(obj),
//        contentType: "application/json; charset=utf-8",
//        dataType: "json",
//        async: true,
//        success: function (data) {
//            jQuery.each(data, function (index, itemData) {

//                //Get features
//                var ImagePath = itemData[0].ImagePath;
//                var ImageIapiPath = itemData[0].ImageIapiPath;

//                var ImagePathO = itemData[0].ImagePathO;
//                var ImageIapiPathO = itemData[0].ImageIapiPathO;

//                var StationName = itemData[0].StationName;
//                var LaneName = itemData[0].LaneName;
//                var DhmValue = itemData[0].DhmValue;

//                var MpName = itemData[0].MpName;
//                var CategoryId = itemData[0].CategoryPreDacId;

//                var ObsPassName = itemData[0].ObsPassName;
//                var ObsMpName = itemData[0].ObsMpName;
//                var ObsTickName = itemData[0].ObsTickName;



//                var StationNameO = itemData[0].StationNameO;
//                var LaneNameO = itemData[0].LaneNameO;
//                var DhmValueO = itemData[0].DhmValueO;
//                var IsConvenientContext = itemData[0].IsConvenientContext;
//                var IsConvenientIapi = itemData[0].IsConvenientIapi;
//                var IsConvenientClass = itemData[0].IsConvenientClass;
//                var IsPathQualified = itemData[0].IsPathQualified;



//                ////initialize
//                var LabelId = "ImageId" + FormIndex + "LabelId";
//                var HrefId = "ImageId" + FormIndex + "HrefId";
//                var HrefIapiId = "ImageIapiId" + FormIndex + "HrefId";
//                var ImageId = "ImageId" + FormIndex;
//                var ImageIapiId = "ImageIapiId" + FormIndex;

//                var LabelIdO = "ImageIdO" + FormIndex + "LabelId";
//                var HrefIdO = "ImageIdO" + FormIndex + "HrefId";
//                var HrefIapiIdO = "ImageIapiIdO" + FormIndex + "HrefId";
//                var ImageIdO = "ImageIdO" + FormIndex;
//                var ImageIapiIdO = "ImageIapiIdO" + FormIndex;

//                document.getElementById(ImageId).src = "";
//                document.getElementById(ImageIapiId).src = "";
//                document.getElementById(ImageIdO).src = "";
//                document.getElementById(ImageIapiIdO).src = "";

//                document.getElementById(HrefId).href = "";
//                document.getElementById(HrefIapiId).href = "";
//                document.getElementById(HrefIdO).href = "";
//                document.getElementById(HrefIapiIdO).href = "";

//                //$(LabelId).text("Image entrée");
//                //$(LabelIdO).text("Image sortie");

//                document.getElementById(Pattern + PatternForm + 'ModalDialogReportId').className = '';
//                document.getElementById(Pattern + PatternForm + 'ModalDialogReportId').style.width = '90%';
//                document.getElementById(Pattern + PatternForm + 'ModalDialogReportId').style.marginLeft = '5%';
//                document.getElementById(Pattern + PatternForm + 'ModalDialogReportId').style.marginTop = '5%';



//                document.getElementById(ImageId).src = ImagePath;
//                document.getElementById(ImageIapiId).src = ImageIapiPath;
//                document.getElementById(ImageIdO).src = ImagePathO;
//                document.getElementById(ImageIapiIdO).src = ImageIapiPathO;

//                document.getElementById(HrefId).href = ImagePath;
//                document.getElementById(HrefIapiId).href = ImageIapiPath;
//                document.getElementById(HrefIdO).href = ImagePathO;
//                document.getElementById(HrefIapiIdO).href = ImageIapiPathO;

//                var Info = StationName + ' | ' + LaneName + ' | ' + GetDhmValueNullableFromDataTableDate(DhmValue);
//                $('#InfoId' + FormIndex).text(Info);

//                $('#MpNameId' + FormIndex).text(MpName);
//                $('#CategoryId' + FormIndex).text(CategoryId);

//                $('#ObsPassNameId' + FormIndex).text(ObsPassName);
//                $('#ObsMpNameId' + FormIndex).text(ObsMpName);
//                $('#ObsTickNameId' + FormIndex).text(ObsTickName);

//                var InfoO = StationNameO + ' | ' + LaneNameO + ' | ' + GetDhmValueNullableFromDataTableDate(DhmValueO);
//                $('#InfoIdO' + FormIndex).text(InfoO);


//                ////Set drop down lists
//                HtmlDropDownListNameOnlyXorFill('QualifControlId' + FormIndex, '01', '/Qualif/QualifControlsGet', 'QualifControlId', 'QualifControlName');

//                ////Set OnChange

//                ////Set inputs
//                document.getElementById('CommentId' + FormIndex).value = '';
//                document.getElementById('IsConvenientContextId' + FormIndex).checked = IsConvenientContext;
//                document.getElementById('IsConvenientIapiId' + FormIndex).checked = IsConvenientIapi;
//                document.getElementById('IsConvenientClassId' + FormIndex).checked = IsConvenientClass;

//                document.getElementById('IsConvenientContextId' + FormIndex).setAttribute("onChange", "QualifTrxLaneIsConvenientContextSet(" + RowIdTrxLane + ", " + FormIndex + ")");
//                document.getElementById('IsConvenientIapiId' + FormIndex).setAttribute("onChange", "QualifTrxLaneIsConvenientIapiGet(" + RowIdTrxLane + ", " + FormIndex + ")");
//                document.getElementById('IsConvenientClassId' + FormIndex).setAttribute("onChange", "QualifTrxLaneIsConvenientClassSet(" + RowIdTrxLane + ", " + FormIndex + ")");

//                ////Hide some inputs

//                ////Set modal action buttons
//                ModalActionBtnEditGet(Pattern, '\'' + RowIdTrxLane + '\'', FormIndex);

//            });
//        }
//    });

//    QualifPathLogsGet(RowIdTrxLane);
//}


function QualifTrxLaneIsConvenientClassSet(RowIdTrxLane, FormIndex) {
    var IsConvenientClass = new Boolean($('#IsConvenientClassId' + FormIndex).is(":checked"));
    //Edit
    var obj = {};
    obj.RowIdTrxLane = RowIdTrxLane;
    obj.IsConvenientClass = IsConvenientClass;

    $.ajax({
        url: "/Qualif/QualifTrxLaneIsConvenientClassSet",
        method: "POST",
        data: JSON.stringify(obj),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            //BiColumnDisplay();
        }
    });
}

//function QualifTrxLaneIsConvenientContextGet(RowIdTrxLane, IsConvenientContext) {
//    var Id = RowIdTrxLane;
//    var onchange = 'QualifTrxLaneIsConvenientContextSet(' + Id + ',' + RowIdTrxLane + ')';
//    var Pattern = 'IsConvenientContextId';
//    var data = IsConvenientContext;
//    return DataTableCheckBoxGet(Pattern, Id, data, onchange);
//}

//function QualifTrxLaneIsConvenientIapiGet(RowIdTrxLane, IsConvenientIapi) {
//    var Id = RowIdTrxLane;
//    var onchange = 'QualifTrxLaneIsConvenientIapiSet(' + Id + ',' + RowIdTrxLane + ')';
//    var Pattern = 'IsConvenientIapiId';
//    var data = IsConvenientIapi;
//    return DataTableCheckBoxGet(Pattern, Id, data, onchange);
//}

//function QualifTrxLaneIsConvenientClassGet(RowIdTrxLane, IsConvenientClass) {
//    var Id = RowIdTrxLane;
//    var onchange = 'QualifTrxLaneIsConvenientClassSet(' + Id + ',' + RowIdTrxLane + ')';
//    var Pattern = 'IsConvenientClassId';
//    var data = IsConvenientClass;
//    return DataTableCheckBoxGet(Pattern, Id, data, onchange);
//}

function QualifTrxLaneRegionDisplay(ActionBtnId, Icon, IsMargin) {

    var RegionId = GetElementValue('RegionId');
    var DateStringStart = GetDateStringFromDatePicker('DateStartId');
    var DateStringEnd = GetDateStringFromDatePicker('DateEndId');

    QualifAllReportsHide();
    ShowReport('ParamReportId');
    ParamMessageReset();

    if (DateStringStart != '' && DateStringEnd != '') {
        QualifTrxLaneRegionGet(ActionBtnId, Icon, IsMargin, RegionId, DateStringStart, DateStringEnd);
    }
    else {
        ParamMessageErrorDisplay('Les dates de début et de fin sont obligatoires');
    };
}

function QualifTrxLaneRegionSearch(Id) {

    var ActionBtnId = new String('QualifTrxLaneRegionSearchBtnId' + Id);
    var Icon = 'fas fa-eye btn-icon-cl gc-c1-cl';
    var IsMargin = false;

    //hide some reports
    HideTableReport('QualifTrxLaneLane');
    HideTableReport('QualifTrxLane');
    HideTableReport('CertFilePlan');

    var DateStringStart = new String(Id).substr(0, 8);
    var DateStringEnd = new String(Id).substr(0, 8);
    var RegionId = '0';
    
    QualifTrxLaneRegionGet(ActionBtnId, Icon, IsMargin, RegionId, DateStringStart, DateStringEnd);
}

function QualifTrxLaneRegionGet(ActionBtnId, Icon, IsMargin, RegionId, DateStringStart, DateStringEnd) {

    //Spin
    ActionSpin(ActionBtnId, IsMargin);

    //init
    ParamMessageReset();

    var PatternTable = 'QualifTrxLaneRegion';
    var PatternTableId = PatternTable + 'TableId'
    var PatternTableReportId = PatternTable + 'TableReportId';

    $('#' + PatternTableId).DataTable().destroy();
    $('#' + PatternTableId).DataTable({
        "dom": 'Bfrtip',
        "buttons": [
            'excel'
        ],
        //"dom": 'Bfrtip',
        //"buttons": {
        //    buttons: [
        //        {
        //            text: 'PDF',
        //            action: function (e, dt, node, config) {
        //                //alert('Activated!');
        //                QualifTrxLaneStationExport(RegionId, LSId, StationNumber, DateStringStart, DateStringEnd, 'PDF');
        //                //Export(\'RepoTraficStationDayAll\', \'Excel\')
        //            }
        //        },
        //        {
        //            text: 'Excel',
        //            action: function (e, dt, node, config) {
        //                //alert('Activated!');
        //                QualifTrxLaneStationExport(RegionId, LSId, StationNumber, DateStringStart, DateStringEnd, 'Excel');
        //                //Export(\'RepoTraficStationDayAll\', \'Excel\')
        //            }
        //        }
        //    ]
        //},
        "initComplete": function (settings, json) {
            ActionBtnIconSet(ActionBtnId, Icon);
            ShowReport(PatternTableReportId);
        },
        "ajax": {
            "url": "/Qualif/QualifTrxLaneRegionGet",
            "type": "GET",
            "datatype": "json",
            "data": {
                RegionId: RegionId,
                DateStringStart: DateStringStart,
                DateStringEnd: DateStringEnd
            }
        },
        "columns": [
            { "data": "" },//0
            { "data": "RegionNameShort" },//1

            { "data": "ObsTickIdD" },//2
            { "data": "TotalToQualifyObsTickIdD" },//3
            { "data": "ObsTickIdDQualified" },//4
            { "data": "" },//5

            { "mData": function vehicle(data, type, dataToSet) { return GetDigits(data.Day, 2) + GetDigits(data.Month, 2) + data.Year + data.RegionId; } },//6 Station
            { "mData": function vehicle(data, type, dataToSet) { return GetDigits(data.Day, 2) + GetDigits(data.Month, 2) + data.Year + data.RegionId; } },//7 Od
        ],
        "columnDefs": [
            { "width": "3%", "className": "text-center", "targets": 0 },
            { "width": "3%", "className": "text-center", "targets": 1 },

            { "width": "3%", "className": "text-right", "targets": 2 },
            { "width": "3%", "className": "text-right", "targets": 3 },
            { "width": "3%", "className": "text-right", "targets": 4 },
            { "width": "3%", "className": "text-right", "targets": 5 },

            { "width": "3%", "className": "text-center", "targets": 6 },
            { "width": "3%", "className": "text-center", "targets": 7 },

            { "targets": 0, "render": function (data, type, row) { return DataTableCertifiedInfoGet(row['IsCertified']) + ' ' + DataTableDateValueFromRowGet(row); } },
            { "targets": 1, "render": function (data, type, row) { return data; } },

            { "targets": 2, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 3, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 4, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 5, "render": function (data, type, row) { return DataTablePercentageTwoThresholdsGet(row['ObsTickIdDQualified'], row['TotalToQualifyObsTickIdD'], 2, 2, 5); } },
            
            { "targets": 6, "render": function (data, type, row) { return DataTableButtonGet('QualifTrxLaneStationSearch', data, '\'' + data + '\'', '', 'dt-btn-cl gc-bc1-cl', 'fas fa-eye btn-icon-cl gc-c1-cl', '') } },
            { "targets": 7, "render": function (data, type, row) { return DataTableButtonGet('QualifTrxLaneOdSearch', data, '\'' + data + '\'', '', 'dt-btn-cl gc-bc1-cl', 'fas fa-eye btn-icon-cl gc-c1-cl', '') } },
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
        "iDisplayLength": 10,
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

            DataTableTotalIntGet(api, intVal, 2);
            DataTableTotalIntGet(api, intVal, 3);
            DataTableTotalIntGet(api, intVal, 4);
            DataTableTotalPercentageGet(api, intVal, 4, 3, 5);   
        }
    });
}

function QualifTrxLaneStationDisplay(ActionBtnId, Icon, IsMargin) {

    var RegionId = GetElementValue('RegionId');
    var LSId = GetElementValue('LSId');
    var StationNumber = GetElementValue('StationNumberId');
    var DateStringStart = GetDateStringFromDatePicker('DateStartId');
    var DateStringEnd = GetDateStringFromDatePicker('DateEndId');

    //hide some reports
    HideReport('QualifTrxLaneDay' + 'TableReportId');
    HideReport('QualifTrxLaneLane' + 'TableReportId');
    HideReport('QualifTrxLaneHour' + 'TableReportId');
    HideReport('QualifPath' + 'TableReportId');
    HideReport('CertFilePlan' + 'TableReportId');

    if (DateStringStart != '' && DateStringEnd != '') {
        QualifTrxLaneStationGet(ActionBtnId, Icon, IsMargin, RegionId, LSId, StationNumber, DateStringStart, DateStringEnd);
    }
    else {
        ParamMessageErrorDisplay('Les dates de début et de fin sont obligatoires');
    };
}

function QualifTrxLaneStationGet(ActionBtnId, Icon, IsMargin, RegionId, LSId, StationNumber, DateStringStart, DateStringEnd) {

    //Spin
    ActionSpin(ActionBtnId, IsMargin);

    //init
    ParamMessageReset();

    var PatternTable = 'QualifTrxLaneStation';
    var PatternTableId = PatternTable + 'TableId'
    var PatternTableReportId = PatternTable + 'TableReportId';

    $('#' + PatternTableId).DataTable().destroy();
    $('#' + PatternTableId).DataTable({
        //"dom": 'Bfrtip',
        //"buttons": {
        //    buttons: [
        //        {
        //            text: 'PDF',
        //            action: function (e, dt, node, config) {
        //                //alert('Activated!');
        //                QualifTrxLaneStationExport(RegionId, LSId, StationNumber, DateStringStart, DateStringEnd, 'PDF');
        //                //Export(\'RepoTraficStationDayAll\', \'Excel\')
        //            }
        //        },
        //        {
        //            text: 'Excel',
        //            action: function (e, dt, node, config) {
        //                //alert('Activated!');
        //                QualifTrxLaneStationExport(RegionId, LSId, StationNumber, DateStringStart, DateStringEnd, 'Excel');
        //                //Export(\'RepoTraficStationDayAll\', \'Excel\')
        //            }
        //        }
        //    ]
        //},
        "dom": 'Bfrtip',
        "buttons": [
            'excel'
        ],
        "initComplete": function (settings, json) {
            ActionBtnIconSet(ActionBtnId, Icon);
            ShowReport(PatternTableReportId);
        },
        "ajax": {
            "url": "/Qualif/QualifTrxLaneStationGet",
            "type": "GET",
            "datatype": "json",
            "data": {
                RegionId: RegionId,
                LSId: LSId,
                StationNumber: StationNumber,
                DateStringStart: DateStringStart,
                DateStringEnd: DateStringEnd
            }
        },
        "columns": [
            { "data": "" },//0
            { "data": "StationName" },//1

            { "data": "ObsTickIdD" },//2
            { "data": "TotalToQualifyObsTickIdD" },//3
            { "data": "ObsTickIdDQualified" },//4
            { "data": "" },//5

            { "mData": function vehicle(data, type, dataToSet) { return GetDigits(data.Day, 2) + GetDigits(data.Month, 2) + data.Year + data.RegionId + data.LSId + data.StationNumber; } },//6 Détail
        ],
        "columnDefs": [
            { "width": "3%", "className": "text-center", "targets": 0 },
            { "width": "3%", "className": "text-left", "targets": 1 },

            { "width": "3%", "className": "text-right", "targets": 2 },
            { "width": "3%", "className": "text-right", "targets": 3 },
            { "width": "3%", "className": "text-right", "targets": 4 },
            { "width": "3%", "className": "text-right", "targets": 5 },

            { "width": "3%", "className": "text-center", "targets": 6 },

            { "targets": 0, "render": function (data, type, row) { return DataTableCertifiedInfoGet(row['IsCertified']) + ' ' + DataTableDateValueFromRowGet(row); } },
            { "targets": 1, "render": function (data, type, row) { return data; } },

            { "targets": 2, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 3, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 4, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 5, "render": function (data, type, row) { return DataTablePercentageTwoThresholdsGet(row['ObsTickIdDQualified'], row['TotalToQualifyObsTickIdD'], 2, 2, 5); } },
            
            { "targets": 6, "render": function (data, type, row) { return DataTableButtonGet('QualifTrxLaneLaneSearch', data, '\'' + data + '\'', '', 'dt-btn-cl gc-bc1-cl', 'fas fa-eye btn-icon-cl gc-c1-cl', '') } },

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
        "iDisplayLength": 10,
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

            DataTableTotalIntGet(api, intVal, 2);
            DataTableTotalIntGet(api, intVal, 3);
            DataTableTotalIntGet(api, intVal, 4);         
            DataTableTotalPercentageGet(api, intVal, 4, 3, 5);            
        }
    });
}




function QualifTrxLaneStationExport(RegionId, LSId, StationNumber, DateStringStart, DateStringEnd, FileType) {

    var PrintLink = '/Qualif/QualifTrxLaneStationExport?' +
        'RegionId=' + RegionId +
        '&LSId=' + LSId +
        '&StationNumber=' + StationNumber +
        '&DateStringStart=' + DateStringStart +
        '&DateStringEnd=' + DateStringEnd +
        '&FileType=' + FileType;

    NavigateTo(PrintLink, true);
}

function QualifTrxLaneSearch(Id) {
    var ActionBtnId = new String('QualifTrxLaneSearch' + 'BtnId' + Id);
    var Icon = 'fas fa-eye btn-icon-cl gc-c1-cl';
    var IsMargin = false;

    ActionSpin(ActionBtnId, IsMargin);

    var RegionId = new String(Id).substr(8, 2);
    var LSId = new String(Id).substr(10, 2);
    var StationNumber = new String(Id).substr(12, 2);
    var LaneName = new String(Id).substr(14, 3);
    if (LaneName == '---') {
        LaneName = '0';
    }
    var DhmStringStart = new String(Id).substr(0, 8) + '0000';
    var DhmStringEnd = new String(Id).substr(0, 8) + '2359';
    var IsImage = false;
    var IsImageIapi = false;

    var RegionIdO = '0';
    var LSIdO = '0';
    var StationNumberO = '0';
    var LaneNameO = '0';
    var DhmStringStartO = '010120210000';
    var DhmStringEndO = '010120280000';
    var IsImageO = false;
    var IsImageIapiO = false;

    var BillingId = '0';
    var CategoryId = '0';

    var PresetId = '0';
    var ObsPassId = '0';
    var ObsTickId = new String(Id).substr(17, 1);
    var ObsMpId = new String(Id).substr(18, 2);
    if (ObsMpId == '--') {
        ObsMpId = '0';
    }
    
    var QualifControlId = new String(Id).substr(20, 2);
    if (QualifControlId == '--') {
        QualifControlId = '0';
    }

    var QualifReasonId = new String(Id).substr(22, 2);
    if (QualifReasonId == '--') {
        QualifReasonId = '0';
    }
    

    var IsConvenientContext = false;
    var IsConvenientIapi = false;
    var IsConvenientClass = false;
    var IsPathQualified = false;

    var IsConvenientContextO = false;
    var IsConvenientIapiO = false;

    var IsContextOnly = false;
    var IsIapiOnly = false;
    var IsPathOnly = false;
    var IsSortieOnly = false;

    var RowIdTrxLane = 0;
    var ProductNumber = '';

    var IsLabel = false;
    var IsCyclopeClassify = false;
    var IsCyclopePath = false;
    var IsPathQualifiable = false;

    if (ObsTickId == 'P') {
        IsPathQualifiable = true;
    }
    if (ObsTickId == 'D' || ObsTickId == 'I') {
        IsPathQualifiable = true;
        IsPathOnly = false;
        IsSortieOnly = false;
    }

    if (ObsMpId == '26') {
        IsPathQualifiable = false;
        IsPathOnly = false;
        IsSortieOnly = true;
    }

    var OctalCode = '0';
    var IsLabeled = false;

    var SerialNumber = '';
    var LicensePlate = '';

    var IsCyclopeClassDiscId = false;
    var IsCyclopePathDiscId = false;

    //hide some reports
    HideReport('QualifPath' + 'TableReportId');

    QualifPathGet(ActionBtnId, Icon,
        RegionId, LSId, StationNumber, LaneName, DhmStringStart, DhmStringEnd, IsImage, IsImageIapi,
        RegionIdO, LSIdO, StationNumberO, LaneNameO, DhmStringStartO, DhmStringEndO, IsImageO, IsImageIapiO,
        BillingId, CategoryId,
        PresetId, ObsPassId, ObsTickId, ObsMpId,
        IsConvenientContext, IsConvenientIapi, IsConvenientClass, IsPathQualified,
        IsConvenientContextO, IsConvenientIapiO,
        IsContextOnly, IsIapiOnly, IsPathOnly, IsSortieOnly,
        RowIdTrxLane,
        ProductNumber,
        IsLabel, IsCyclopeClassify, IsCyclopePath,
        OctalCode,
        IsPathQualifiable,
        IsLabeled,
        SerialNumber, LicensePlate,
        QualifControlId, QualifReasonId,
        IsCyclopeClassDiscId, IsCyclopePathDiscId);
}


function QualifPathRealTimeGet(ActionBtnId, Icon, IsMargin, DateStringStart, DateStringEnd, RegionId, LSId, StationNumber, LaneName, ObsTickId, ObsMpId) {

    ActionSpin(ActionBtnId, IsMargin);

    var DhmStringStart = DateStringStart + '0000';
    var DhmStringEnd = DateStringEnd + '2359';
    var IsImage = false;
    var IsImageIapi = false;

    var RegionIdO = '0';
    var LSIdO = '0';
    var StationNumberO = '0';
    var LaneNameO = '0';
    var DhmStringStartO = '010120210000';
    var DhmStringEndO = '010120280000';
    var IsImageO = false;
    var IsImageIapiO = false;

    var BillingId = '0';
    var CategoryId = '0';

    var PresetId = '0';
    var ObsPassId = '0';

    //var QualifControlId = new String(Id).substr(20, 2);
    //if (QualifControlId == '--') {
    //    QualifControlId = '0';
    //}
    var QualifControlId = '0';

    //var QualifReasonId = new String(Id).substr(22, 2);
    //if (QualifReasonId == '--') {
    //    QualifReasonId = '0';
    //}
    var QualifReasonId = '0';

    var IsConvenientContext = false;
    var IsConvenientIapi = false;
    var IsConvenientClass = false;
    var IsPathQualified = false;

    var IsConvenientContextO = false;
    var IsConvenientIapiO = false;

    var IsContextOnly = false;
    var IsIapiOnly = false;
    var IsPathOnly = true;
    var IsSortieOnly = false;

    var RowIdTrxLane = 0;
    var ProductNumber = '';

    var IsLabel = false;
    var IsCyclopeClassify = false;
    var IsCyclopePath = false;
    var IsPathQualifiable = false;

    if (ObsTickId == 'P') {
        IsPathQualifiable = true;
    }
    if (ObsTickId == 'D' || ObsTickId == 'I') {
        IsPathQualifiable = false;
        IsPathOnly = false;
        IsSortieOnly = false;
    }

    if (ObsMpId == '26') {
        IsPathQualifiable = false;
        IsPathOnly = false;
        IsSortieOnly = true;
    }

    var OctalCode = '0';
    var IsLabeled = false;

    var SerialNumber = '';
    var LicensePlate = '';

    var IsCyclopeClassDiscId = false;
    var IsCyclopePathDiscId = false;

    //hide some reports
    HideReport('QualifPath' + 'TableReportId');

    QualifPathGet(ActionBtnId, Icon,
        RegionId, LSId, StationNumber, LaneName, DhmStringStart, DhmStringEnd, IsImage, IsImageIapi,
        RegionIdO, LSIdO, StationNumberO, LaneNameO, DhmStringStartO, DhmStringEndO, IsImageO, IsImageIapiO,
        BillingId, CategoryId,
        PresetId, ObsPassId, ObsTickId, ObsMpId,
        IsConvenientContext, IsConvenientIapi, IsConvenientClass, IsPathQualified,
        IsConvenientContextO, IsConvenientIapiO,
        IsContextOnly, IsIapiOnly, IsPathOnly, IsSortieOnly,
        RowIdTrxLane,
        ProductNumber,
        IsLabel, IsCyclopeClassify, IsCyclopePath,
        OctalCode,
        IsPathQualifiable,
        IsLabeled,
        SerialNumber, LicensePlate,
        QualifControlId, QualifReasonId,
        IsCyclopeClassDiscId, IsCyclopePathDiscId);
}


//TrxLaneSearch
function QualifTrxLaneFromOdSearch(Id) {
    var ActionBtnId = new String('QualifTrxLaneFromOdSearch' + 'BtnId' + Id);
    var Icon = 'fas fa-eye btn-icon-cl gc-c1-cl';
    var IsMargin = false;

    ActionSpin(ActionBtnId, IsMargin);

    var DhmStringStart = new String(Id).substr(0, 8) + '0000';
    var DhmStringEnd = new String(Id).substr(0, 8) + '2359';

    var RegionId = new String(Id).substr(8, 2);
    var LSId = new String(Id).substr(10, 2);
    var StationNumber = new String(Id).substr(12, 2);
    var LaneName = '0';


    var RegionIdO = new String(Id).substr(14, 2);
    var LSIdO = new String(Id).substr(16, 2);
    var StationNumberO = new String(Id).substr(18, 2);

    var IsImage = false;
    var IsImageIapi = false;

    var LaneNameO = '0';
    var DhmStringStartO = '010120210000';
    var DhmStringEndO = '010120280000';
    var IsImageO = false;
    var IsImageIapiO = false;

    var BillingId = '0';
    var CategoryId = '0';

    var PresetId = '0';
    var ObsPassId = '0';
    var ObsTickId = new String(Id).substr(20, 1);
    var ObsMpId = new String(Id).substr(21, 2);

    if (ObsMpId == '--') {
        ObsMpId = '0';
    }
    
    var IsConvenientContext = false;
    var IsConvenientIapi = false;
    var IsConvenientClass = false;
    var IsPathQualified = false;

    var IsConvenientContextO = false;
    var IsConvenientIapiO = false;

    var IsContextOnly = false;
    var IsIapiOnly = false;
    var IsPathOnly = true;
    var IsSortieOnly = false;

    var RowIdTrxLane = 0;
    var ProductNumber = '';

    var IsLabel = false;
    var IsCyclopeClassify = false;
    var IsCyclopePath = false;
    var IsPathQualifiable = false;
    if (ObsTickId == 'P') {
        IsPathQualifiable = true;
    }
    if (ObsTickId == 'D') {
        IsPathQualifiable = false;
    }

    var OctalCode = '0';
    var IsLabeled = false;

    var SerialNumber = '';
    var LicensePlate = '';

    var QualifControlId = '0';
    var QualifReasonId = '0';

    var IsCyclopeClassDiscId = false;
    var IsCyclopePathDiscId = false;

    //hide some reports
    HideReport('QualifPath' + 'TableReportId');

    QualifPathGet(ActionBtnId, Icon,
        RegionId, LSId, StationNumber, LaneName, DhmStringStart, DhmStringEnd, IsImage, IsImageIapi,
        RegionIdO, LSIdO, StationNumberO, LaneNameO, DhmStringStartO, DhmStringEndO, IsImageO, IsImageIapiO,
        BillingId, CategoryId,
        PresetId, ObsPassId, ObsTickId, ObsMpId,
        IsConvenientContext, IsConvenientIapi, IsConvenientClass, IsPathQualified,
        IsConvenientContextO, IsConvenientIapiO,
        IsContextOnly, IsIapiOnly, IsPathOnly, IsSortieOnly,
        RowIdTrxLane,
        ProductNumber,
        IsLabel, IsCyclopeClassify, IsCyclopePath,
        OctalCode,
        IsPathQualifiable,
        IsLabeled,
        SerialNumber, LicensePlate,
        QualifControlId, QualifReasonId,
        IsCyclopeClassDiscId, IsCyclopePathDiscId);
}

function QualifTrxLaneNotify(CertTrxLaneInterfaceRowId) {
    var ActionBtnId = new String('QualifTrxLaneNotify' + 'BtnId' + Id);
    var Icon = 'fas fa-paper-plane btn-icon-cl gc-c1-cl';

    ActionBtnSpin(ActionBtnId);

    var obj = {};
    obj.CertTrxLaneInterfaceRowId = CertTrxLaneInterfaceRowId;

    $.ajax({
        url: "/Qualif/QualifTrxLaneNotify",
        method: "POST",
        data: JSON.stringify(obj),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            ActionBtnIconSet(ActionBtnId, Icon);
        }
    });
}

function QualifPathLogsIsValidSwitch(CertTrxLaneInterfaceRowId) {
    var obj = {};
    obj.CertTrxLaneInterfaceRowId = CertTrxLaneInterfaceRowId;
    $.ajax({
        url: "/Qualif/QualifPathLogsIsValidSwitch",
        method: "POST",
        data: JSON.stringify(obj),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
        },
        error: function (request, status, error) {
            alert('Vous ne disposez pas des autorisations nécessaires pour effectuer cette action');
        }
    });
}

function QualifTrxLaneGet(ActionBtnId, Icon, IsMargin,
                          RegionId, LSId, StationNumber, LaneName, DhmStringStart, DhmStringEnd,
                          BillingId, CategoryId,
                          ObsPassId, ObsTickId, ObsMpId,
                          LicensePlate, ReadTickNumber, ProductNumber, SerialNumber,
                          IsImage, IsImageIapi) {

    //Spin
    ActionSpin(ActionBtnId, IsMargin);

    //Set datatable patterns
    var Pattern = 'QualifTrxLane';
    var PatternTableId = Pattern + 'TableId';
    var PatternTableReportId = Pattern + 'TableReportId';

    //Get
    HideReport(PatternTableReportId);
    $('#' + PatternTableId).DataTable().destroy();;
    $('#' + PatternTableId).DataTable({
        "dom": 'Bfrtip',
        "buttons": [
            'copy', 'csv', 'excel', 'pdf', 'print'
        ],
        "initComplete": function (settings, json) {
            ActionBtnSet(ActionBtnId, Icon, IsMargin);
            ShowReport(PatternTableReportId);
        },
        "ajax": {
            "url": "/Qualif/QualifTrxLaneGet",
            "type": "GET",
            "datatype": "json",
            "data": {
                "RegionId": RegionId,
                "LSId": LSId,
                "StationNumber": StationNumber,
                "LaneName": LaneName,
                "DhmStringStart": DhmStringStart,
                "DhmStringEnd": DhmStringEnd,

                "IsImage": IsImage,
                "IsImageIapi": IsImageIapi,

                "BillingId": BillingId,
                "CategoryId": CategoryId,

                "ObsPassId": ObsPassId,
                "ObsTickId": ObsTickId,
                "ObsMpId": ObsMpId,

                "LicensePlate": LicensePlate,
                "ReadTickNumber": ReadTickNumber,
                "ProductNumber": ProductNumber,
                "SerialNumber": SerialNumber
            }
        },
        "columns": [
            { "data": "StationNumber" }, //0
            { "data": "LaneName" }, //1        
            { "data": "DhmValue" },//2        
            { "data": "LicensePlate" },//3       
            { "data": "SerialNumber" },//4
            { "data": "TrxNumber" },//5
            { "data": "TrxIndex" },//6     
            { "data": "CategoryPreDacId" },//7
            { "data": "ObsTickName" },//8
            { "data": "ImagePath" },//9
            { "data": "ImageIapiPath" },//10

            { "data": "StationNumberO" },//11
            { "data": "LaneNameO" },//12 
            { "data": "DhmValueO" },//13
            { "data": "LicensePlateO" },//14                                        
            { "data": "ReadTickNumber" },//15

            { "data": "ImageBackupPath" },//16
            { "data": "ImageBackupIapiPath" },//17
        ],
        "columnDefs": [
            { "width": "3%", "className": "text-center", "targets": 0 },
            { "width": "3%", "className": "text-center", "targets": 1 },
            { "width": "3%", "className": "text-center", "targets": 2 },
            { "width": "3%", "className": "text-center", "targets": 3 },
            { "width": "3%", "className": "text-center", "targets": 4 },
            { "width": "3%", "className": "text-center none", "targets": 5 },
            { "width": "3%", "className": "text-center none", "targets": 6 },
            { "width": "3%", "className": "text-center none", "targets": 7 },
            { "width": "3%", "className": "text-center none", "targets": 8 },
            { "width": "3%", "className": "text-center", "targets": 9 },
            { "width": "3%", "className": "text-center", "targets": 10 },

            { "width": "3%", "className": "text-center", "targets": 11 },
            { "width": "3%", "className": "text-center", "targets": 12 },
            { "width": "3%", "className": "text-center", "targets": 13 },
            { "width": "3%", "className": "text-center", "targets": 14 },
            { "width": "3%", "className": "text-center", "targets": 15 },

            { "width": "3%", "className": "text-center", "targets": 16 },
            { "width": "3%", "className": "text-center", "targets": 17 },

            { "targets": 0, "render": function (data, type, row) { return data; } },
            { "targets": 1, "render": function (data, type, row) { return data; } },
            {
                "targets": 2, "render": function (data, type, row) {  return DataTableDhmValueGet(row['YearD'], row['MonthD'], row['DayD'], row['HourD'], row['MinuteD'], row['SecondD']); } },
            { "targets": 3, "render": function (data, type, row) { return data; } },
            { "targets": 4, "render": function (data, type, row) { return data; } },
            { "targets": 5, "render": function (data, type, row) { return data; } },
            { "targets": 6, "render": function (data, type, row) { return data; } },
            { "targets": 7, "render": function (data, type, row) { return data; } },
            { "targets": 8, "render": function (data, type, row) { return data; } },
            { "targets": 9, "render": function (data, type, row) { return QualifImageGet(data); } },
            { "targets": 10, "render": function (data, type, row) { return QualifImageGet(data); } },

            { "targets": 11, "render": function (data, type, row) { return data; } },
            { "targets": 12, "render": function (data, type, row) { return data; } },
            { "targets": 13, "render": function (data, type, row) { return DataTableDhmValueGet(row['YearO'], row['MonthO'], row['DayO'], row['HourO'], row['MinuteO'], row['SecondO']); } },
            { "targets": 14, "render": function (data, type, row) { return data; } },
            { "targets": 15, "render": function (data, type, row) { return data; } },

            { "targets": 16, "render": function (data, type, row) { return QualifImageGet(data); } },
            { "targets": 17, "render": function (data, type, row) { return QualifImageGet(data); } },

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
        "iDisplayLength": 20,
        "processing": false,
        "responsive": true,
        "bFilter": true,
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

            //Total1 = api.column(8).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);
            //$(api.column(8).footer()).html(numFormat(Total1));

            //IntTotal1 = api.column(8).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);
            //IntTotal2 = api.column(9).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);

            //$(api.column(7).footer()).html(numFormat(DoubleTotal1));

            //$(api.column(9).footer()).html(numShortFormat(IntTotal2));
        }
    });
}

function QualifTrxLaneLaneSearch(Id) {
    var ActionBtnId = new String('QualifTrxLaneLaneSearch' + 'BtnId' + Id);
    var Icon = 'fas fa-eye btn-icon-cl gc-c1-cl';
    var IsMargin = false;

    ActionSpin(ActionBtnId, IsMargin);

    var DateStringStart = new String(Id).substr(0, 8);
    var DateStringEnd = new String(Id).substr(0, 8);
    var RegionId = new String(Id).substr(8, 2);
    var LSId = new String(Id).substr(10, 2);
    var StationNumber = new String(Id).substr(12, 2);
    var LaneName = '0';

    HideReport('QualifPath' + 'TableReportId');

    QualifTrxLaneLaneGet(ActionBtnId, Icon, IsMargin, RegionId, LSId, StationNumber, LaneName, DateStringStart, DateStringEnd);
}

function QualifTrxBorneBorneSearch(Id) {
    var ActionBtnId = new String('QualifTrxBorneBorneSearch' + 'BtnId' + Id);
    var Icon = 'fas fa-eye btn-icon-cl gc-c1-cl';
    $('#' + ActionBtnId).find('span').attr('class', 'fa fa-spinner fa-spin btn-icon-cl gc-c1-cl');

    var DateStringStart = new String(Id).substr(0, 8);
    var DateStringEnd = new String(Id).substr(0, 8);
    var SiteId = new String(Id).substr(8, 2);
    var BagContainerId = '0';
    var StationNumber = new String(Id).substr(10, 2);
    var LaneName = '0';
    var IsMargin = new Boolean(false);
    QualifTrxBorneBorneGet(ActionBtnId, Icon, IsMargin, SiteId, BagContainerId, StationNumber, LaneName, DateStringStart, DateStringEnd);
}

function QualifTrxLaneLaneGet(ActionBtnId, Icon, IsMargin, RegionId, LSId, StationNumber, LaneName, DateStringStart, DateStringEnd) {

    //Spin
    ActionSpin(ActionBtnId, IsMargin);

    //init
    ParamMessageReset();

    var PatternTable = 'QualifTrxLaneLane';
    var PatternTableId = PatternTable + 'TableId'
    var PatternTableReportId = PatternTable + 'TableReportId';

    $('#' + PatternTableId).DataTable().destroy();
    $('#' + PatternTableId).DataTable({
        "dom": 'Bfrtip',
        //"buttons": [
        //    'excel'
        //],
        "buttons": {
            buttons: [
                {
                    text: 'PDF',
                    action: function (e, dt, node, config) {
                        //alert('Activated!');
                        QualifTrxLaneStationExport(AxleId, SiteId, BagContainerId, StationNumber, DateStringStart, DateStringEnd, 'PDF');
                        //Export(\'RepoTraficStationDayAll\', \'Excel\')
                    }
                },
                {
                    text: 'Excel',
                    action: function (e, dt, node, config) {
                        //alert('Activated!');
                        QualifTrxLaneStationExport(AxleId, SiteId, BagContainerId, StationNumber, DateStringStart, DateStringEnd, 'Excel');
                        //Export(\'RepoTraficStationDayAll\', \'Excel\')
                    }
                }
            ]
        },
        "initComplete": function (settings, json) {
            ActionBtnIconSet(ActionBtnId, Icon);
            ShowReport(PatternTableReportId);
        },
        "ajax": {
            "url": "/Qualif/QualifTrxLaneLaneGet",
            "type": "GET",
            "datatype": "json",
            "data": {
                RegionId: RegionId,
                LSId: LSId,
                StationNumber: StationNumber,
                LaneName: LaneName,
                DateStringStart: DateStringStart,
                DateStringEnd: DateStringEnd
            }
        },
        "columns": [
            { "data": "" },//0
            { "data": "StationIdCe" },//1
            { "data": "LaneName" },//2

            { "data": "ObsTickIdD" },//3
            { "data": "TotalToQualifyObsTickIdD" },//4
            { "data": "ObsTickIdDQualified" },//5
            { "data": "" },//6

            { "mData": function vehicle(data, type, dataToSet) { return GetDigits(data.Day, 2) + GetDigits(data.Month, 2) + data.Year + data.RegionId + data.LSId + data.StationNumber + data.LaneName + 'D' + '--' + '--' + '--'; } },//7
           
        ],
        "columnDefs": [
            { "width": "3%", "className": "text-center", "targets": 0 },
            { "width": "3%", "className": "text-center", "targets": 1 },
            { "width": "3%", "className": "text-center", "targets": 2 },

            { "width": "3%", "className": "text-right", "targets": 3 },
            { "width": "3%", "className": "text-right", "targets": 4 },
            { "width": "3%", "className": "text-right", "targets": 5 },
            { "width": "3%", "className": "text-right", "targets": 6 },

            { "width": "3%", "className": "text-center", "targets": 7 },

            { "targets": 0, "render": function (data, type, row) { return DataTableCertifiedInfoGet(row['IsCertified']) + ' ' + DataTableDateValueFromRowGet(row); } },
            { "targets": 1, "render": function (data, type, row) { return data; } },
            { "targets": 2, "render": function (data, type, row) { return data; } },

            { "targets": 3, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 4, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 5, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 6, "render": function (data, type, row) { return DataTablePercentageTwoThresholdsGet(row['ObsTickIdDQualified'], row['TotalToQualifyObsTickIdD'], 2, 2, 5); } },
            {
                "targets": 7, "render": function (data, type, row) {

                    var TaskId = '00';
                    var SourceId = '19';
                    var FileTypeId = 'JA';
                    var DateString = GetDigits(row['Day'], 2) + GetDigits(row['Month'], 2) + row['Year'];
                    var SiteId = row['SiteId'];
                    var LSId = '--';
                    var BagContainerId = '--';
                    var StationNumber = row['StationNumber'];
                    var LaneName = row['LaneName'];
                    var PdvId = '--';
                    var BillingId = '--';
                    var CategoryId = '--';
                    var ParamId = TaskId + SourceId + FileTypeId + DateString + SiteId + LSId + BagContainerId + StationNumber + LaneName + PdvId + BillingId + CategoryId;

                    var Pattern = 'CertTaskAdd';
                    var RowId = data + ParamId;
                    var argument = '\'' + RowId + '\', \'' + ParamId + '\'';
                    var text = '';
                    var BtnClass = 'dt-btn-cl gc-bc1-cl';
                    var SpanClass = 'fas fa-upload btn-icon-cl gc-c1-cl';
                    var TextClass = 'dt-text-cl';

                    return DataTableButtonGet('QualifTrxLaneSearch', data, '\'' + data + '\'', '', 'dt-btn-cl gc-bc1-cl', 'fas fa-eye btn-icon-cl gc-c1-cl', '');
                }
            },
            
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
        "iDisplayLength": 10,
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

            DataTableTotalIntGet(api, intVal, 3);
            DataTableTotalIntGet(api, intVal, 4);
            DataTableTotalIntGet(api, intVal, 5);         
            DataTableTotalPercentageGet(api, intVal, 5, 4, 6);            
        }
    });
}


//function QualifTrxLaneOdDisplay(ActionBtnId, Icon, IsMargin) {

//    var RegionId = GetElementValue('RegionId');
//    var LSId = GetElementValue('LSId');
//    var StationNumber = GetElementValue('StationNumberId');
//    var OdId = '0';
//    var DateStringStart = GetDateStringFromDatePicker('DateStartId');
//    var DateStringEnd = GetDateStringFromDatePicker('DateEndId');

//    //hide some reports
//    HideReport('QualifTrxLaneDay' + 'TableReportId');
//    HideReport('QualifTrxLaneStation' + 'TableReportId');
//    HideReport('QualifTrxLaneOd' + 'TableReportId');
//    HideReport('QualifTrxLaneLane' + 'TableReportId');
//    HideReport('QualifTrxLaneHour' + 'TableReportId');
//    HideReport('QualifPath' + 'TableReportId');
//    HideReport('CertFilePlan' + 'TableReportId');

//    if (DateStringStart != '' && DateStringEnd != '') {
//        QualifTrxLaneOdGet(ActionBtnId, Icon, IsMargin, RegionId, LSId, StationNumber, OdId, DateStringStart, DateStringEnd);
//    }
//    else {
//        ParamMessageErrorDisplay('Les dates de début et de fin sont obligatoires');
//    };
//}


function QualifTrxLaneOdDisplay(ActionBtnId, Icon, IsMargin) {

    var RegionId = GetElementValue('RegionId');
    var LSId = GetElementValue('LSId');
    var StationNumber = GetElementValue('StationNumberId');
    var DateStringStart = GetDateStringFromDatePicker('DateStartId');
    var DateStringEnd = GetDateStringFromDatePicker('DateEndId');
    var OdId = '0';

    QualifAllReportsHide();
    ShowReport('ParamReportId');
    ParamMessageReset();

    QualifTrxLaneOdGet(ActionBtnId, Icon, IsMargin, RegionId, LSId, StationNumber, OdId, DateStringStart, DateStringEnd);
}

function QualifTrxLaneOdSearch(Id) {

    var ActionBtnId = new String('QualifTrxLaneOdSearchBtnId' + Id);
    $('#' + ActionBtnId).find('span').attr('class', 'fa fa-spinner fa-spin btn-icon-cl gc-c1-cl');
    var Icon = 'fas fa-eye btn-icon-cl gc-c1-cl';

    //hide some reports
    HideTableReport('QualifTrxLaneStation');
    HideTableReport('QualifTrxLaneOd');
    HideTableReport('QualifTrxLaneLane');
    HideTableReport('QualifTrxLaneHour');
    HideTableReport('QualifTrxLane');
    HideTableReport('CertFilePlan');

    var DateStringStart = new String(Id).substr(0, 8);
    var DateStringEnd = new String(Id).substr(0, 8);
    var RegionId = new String(Id).substr(8, 2);
    var LSId = '0';
    var StationNumber = '0';
    var IsMargin = false;
    var OdId = '0';
    QualifTrxLaneOdGet(ActionBtnId, Icon, IsMargin, RegionId, LSId, StationNumber, OdId, DateStringStart, DateStringEnd);
}

function QualifTrxLaneOdGet(ActionBtnId, Icon, IsMargin, RegionId, LSId, StationNumber, OdId, DateStringStart, DateStringEnd) {

    //Spin
    ActionSpin(ActionBtnId, IsMargin);

    //init
    ParamMessageReset();

    var PatternTable = 'QualifTrxLaneOd';
    var PatternTableId = PatternTable + 'TableId'
    var PatternTableReportId = PatternTable + 'TableReportId';

    $('#' + PatternTableId).DataTable().destroy();
    $('#' + PatternTableId).DataTable({
        "dom": 'Bfrtip',
        "buttons": [
            'excel'
        ],
        //"buttons": {
        //    buttons: [
        //        {
        //            text: 'PDF',
        //            action: function (e, dt, node, config) {
        //                //alert('Activated!');
        //                QualifTrxLaneStationExport(AxleId, SiteId, BagContainerId, StationNumber, DateStringStart, DateStringEnd, 'PDF');
        //                //Export(\'RepoTraficStationDayAll\', \'Excel\')
        //            }
        //        },
        //        {
        //            text: 'Excel',
        //            action: function (e, dt, node, config) {
        //                //alert('Activated!');
        //                QualifTrxLaneStationExport(AxleId, SiteId, BagContainerId, StationNumber, DateStringStart, DateStringEnd, 'Excel');
        //                //Export(\'RepoTraficStationDayAll\', \'Excel\')
        //            }
        //        }
        //    ]
        //},
        "initComplete": function (settings, json) {
            ActionBtnIconSet(ActionBtnId, Icon);
            ShowReport(PatternTableReportId);
        },
        "ajax": {
            "url": "/Qualif/QualifTrxLaneOdGet",
            "type": "GET",
            "datatype": "json",
            "data": {
                RegionId: RegionId,
                LSId: LSId,
                StationNumber: StationNumber,
                OdId: OdId,
                DateStringStart: DateStringStart,
                DateStringEnd: DateStringEnd
            }
        },
        "columns": [
            { "data": "" },//0
            { "data": "StationIdCeD" },//1
            { "data": "StationIdCeO" },//2
            { "data": "TotalTrafic" },//3

            { "data": "ObsTickIdP" },//4
            { "data": "ObsTickIdP" },//5
            { "mData": function vehicle(data, type, dataToSet) { return GetDigits(data.Day, 2) + GetDigits(data.Month, 2) + data.Year + data.RegionIdD + data.LSIdD + data.StationNumberD + data.RegionIdO + data.LSIdO + data.StationNumberO + 'P' + '--'; } },//6
            { "data": "ObsTickIdPQualified" },//7

            { "data": "ObsTickIdD" },//8
            { "data": "ObsTickIdD" },//9
            { "mData": function vehicle(data, type, dataToSet) { return GetDigits(data.Day, 2) + GetDigits(data.Month, 2) + data.Year + data.RegionIdD + data.LSIdD + data.StationNumberD + data.RegionIdO + data.LSIdO + data.StationNumberO + 'D' + '--'; } },//10
            { "data": "ObsTickIdDQualified" },//11

            { "data": "ObsTickIdI" },//12
            { "data": "ObsTickIdI" },//13
            { "mData": function vehicle(data, type, dataToSet) { return GetDigits(data.Day, 2) + GetDigits(data.Month, 2) + data.Year + data.RegionIdD + data.LSIdD + data.StationNumberD + data.RegionIdO + data.LSIdO + data.StationNumberO + '1' + '--'; } },//14

            { "data": "ObsTickIdM" },//15
            { "data": "ObsTickIdM" },//16
            { "mData": function vehicle(data, type, dataToSet) { return GetDigits(data.Day, 2) + GetDigits(data.Month, 2) + data.Year + data.RegionIdD + data.LSIdD + data.StationNumberD + data.RegionIdO + data.LSIdO + data.StationNumberO + 'M' + '--'; } },//17

            { "data": "ObsTickIdJ" },//18
            { "data": "ObsTickIdJ" },//19
            { "mData": function vehicle(data, type, dataToSet) { return GetDigits(data.Day, 2) + GetDigits(data.Month, 2) + data.Year + data.RegionIdD + data.LSIdD + data.StationNumberD + data.RegionIdO + data.LSIdO + data.StationNumberO + 'J' + '--'; } },//20

            { "data": "ObsTickId1" },//21
            { "data": "ObsTickId1" },//22
            { "mData": function vehicle(data, type, dataToSet) { return GetDigits(data.Day, 2) + GetDigits(data.Month, 2) + data.Year + data.RegionIdD + data.LSIdD + data.StationNumberD + data.RegionIdO + data.LSIdO + data.StationNumberO + '1' + '--'; } },//23

        ],
        "columnDefs": [
            { "width": "3%", "className": "text-center", "targets": 0 },
            { "width": "3%", "className": "text-center", "targets": 1 },
            { "width": "3%", "className": "text-center", "targets": 2 },
            { "width": "3%", "className": "text-right", "targets": 3 },

            { "width": "3%", "className": "text-right", "targets": 4 },
            { "width": "3%", "className": "text-right", "targets": 5 },
            { "width": "3%", "className": "text-center", "targets": 6 },
            { "width": "3%", "className": "text-right", "targets": 7 },

            { "width": "3%", "className": "text-right", "targets": 8 },
            { "width": "3%", "className": "text-right", "targets": 9 },
            { "width": "3%", "className": "text-center", "targets": 10 },
            { "width": "3%", "className": "text-right", "targets": 11 },

            { "width": "3%", "className": "text-right", "targets": 12 },
            { "width": "3%", "className": "text-right", "targets": 13 },
            { "width": "3%", "className": "text-center", "targets": 14 },

            { "width": "3%", "className": "text-right", "targets": 15 },
            { "width": "3%", "className": "text-right", "targets": 16 },
            { "width": "3%", "className": "text-center", "targets": 17 },

            { "width": "3%", "className": "text-right", "targets": 18 },
            { "width": "3%", "className": "text-right", "targets": 19 },
            { "width": "3%", "className": "text-center", "targets": 20 },

            { "width": "3%", "className": "text-right", "targets": 21 },
            { "width": "3%", "className": "text-right", "targets": 22 },
            { "width": "3%", "className": "text-center", "targets": 23 },

            { "targets": 0, "render": function (data, type, row) { return DataTableDateValueFromRowGet(row); } },
            { "targets": 1, "render": function (data, type, row) { return data; } },
            { "targets": 2, "render": function (data, type, row) { return data; } },
            { "targets": 3, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },

            { "targets": 4, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 5, "render": function (data, type, row) { return DataTablePercentageTwoThresholdsGet(data, row['TotalTrafic'], 2, 2, 5); } },
            {
                "targets": 6, "render": function (data, type, row) {

                    var TaskId = '00';
                    var SourceId = '19';
                    var FileTypeId = 'JA';
                    var DateString = GetDigits(row['Day'], 2) + GetDigits(row['Month'], 2) + row['Year'];
                    var SiteId = row['SiteId'];
                    var LSId = '--';
                    var BagContainerId = '--';
                    var StationNumber = row['StationNumber'];
                    var LaneName = row['LaneName'];
                    var PdvId = '--';
                    var BillingId = '--';
                    var CategoryId = '--';
                    var ParamId = TaskId + SourceId + FileTypeId + DateString + SiteId + LSId + BagContainerId + StationNumber + LaneName + PdvId + BillingId + CategoryId;

                    var Pattern = 'CertTaskAdd';
                    var RowId = data + ParamId;
                    var argument = '\'' + RowId + '\', \'' + ParamId + '\'';
                    var text = '';
                    var BtnClass = 'dt-btn-cl gc-bc1-cl';
                    var SpanClass = 'fas fa-upload btn-icon-cl gc-c1-cl';
                    var TextClass = 'dt-text-cl';

                    return DataTableButtonGet('QualifTrxLaneFromOdSearch', data, '\'' + data + '\'', '', 'dt-btn-cl gc-bc1-cl', 'fas fa-eye btn-icon-cl gc-c1-cl', '');
                }
            },
            { "targets": 7, "render": function (data, type, row) { return data; } },

            { "targets": 8, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 9, "render": function (data, type, row) { return DataTablePercentageTwoThresholdsGet(data, row['TotalTrafic'], 2, 2, 5); } },
            { "targets": 10, "render": function (data, type, row) { return DataTableButtonGet('QualifTrxLaneFromOdSearch', data, '\'' + data + '\'', '', 'dt-btn-cl gc-bc1-cl', 'fas fa-eye btn-icon-cl gc-c1-cl', '') } },
            { "targets": 11, "render": function (data, type, row) { return data; } },

            { "targets": 12, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 13, "render": function (data, type, row) { return DataTablePercentageTwoThresholdsGet(data, row['TotalTrafic'], 2, 2, 5); } },
            { "targets": 14, "render": function (data, type, row) { return DataTableButtonGet('QualifTrxLaneFromOdSearch', data, '\'' + data + '\'', '', 'dt-btn-cl gc-bc1-cl', 'fas fa-eye btn-icon-cl gc-c1-cl', '') } },

            { "targets": 15, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 16, "render": function (data, type, row) { return DataTablePercentageTwoThresholdsGet(data, row['TotalTrafic'], 2, 2, 5); } },
            { "targets": 17, "render": function (data, type, row) { return DataTableButtonGet('QualifTrxLaneFromOdSearch', data, '\'' + data + '\'', '', 'dt-btn-cl gc-bc1-cl', 'fas fa-eye btn-icon-cl gc-c1-cl', '') } },

            { "targets": 18, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 19, "render": function (data, type, row) { return DataTablePercentageTwoThresholdsGet(data, row['TotalTrafic'], 2, 2, 5); } },
            { "targets": 20, "render": function (data, type, row) { return DataTableButtonGet('QualifTrxLaneFromOdSearch', data, '\'' + data + '\'', '', 'dt-btn-cl gc-bc1-cl', 'fas fa-eye btn-icon-cl gc-c1-cl', '') } },

            { "targets": 21, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 22, "render": function (data, type, row) { return DataTablePercentageTwoThresholdsGet(data, row['TotalTrafic'], 2, 2, 5); } },
            { "targets": 23, "render": function (data, type, row) { return DataTableButtonGet('QualifTrxLaneFromOdSearch', data, '\'' + data + '\'', '', 'dt-btn-cl gc-bc1-cl', 'fas fa-eye btn-icon-cl gc-c1-cl', '') } },

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
        "iDisplayLength": 10,
        "processing": false,
        "responsive": false,
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

            DataTableTotalIntGet(api, intVal, 4);
            DataTableTotalPercentageGet(api, intVal, 4, 3, 5);
            DataTableTotalIntGet(api, intVal, 7);
            DataTableTotalIntGet(api, intVal, 8);
            DataTableTotalPercentageGet(api, intVal, 8, 3, 9);
            DataTableTotalIntGet(api, intVal, 11);
            DataTableTotalIntGet(api, intVal, 12);
            DataTableTotalPercentageGet(api, intVal, 12, 3, 13);
            DataTableTotalIntGet(api, intVal, 15);
            DataTableTotalPercentageGet(api, intVal, 15, 3, 16);
            DataTableTotalIntGet(api, intVal, 18);
            DataTableTotalPercentageGet(api, intVal, 18, 3, 19);
            DataTableTotalIntGet(api, intVal, 21);
            DataTableTotalPercentageGet(api, intVal, 21, 3, 22);
        }
    });
}

function QualifTrxBorneBorneGet(ActionBtnId, Icon, IsMargin, SiteId, BagContainerId, StationNumber, LaneName, DateStringStart, DateStringEnd) {

    //Spin
    ActionSpin(ActionBtnId, IsMargin);

    //init
    ParamMessageReset();

    var PatternTable = 'QualifTrxLaneLane';
    var PatternTableId = PatternTable + 'TableId'
    var PatternTableReportId = PatternTable + 'TableReportId';

    $('#' + PatternTableId).DataTable().destroy();
    $('#' + PatternTableId).DataTable({
        "dom": 'Bfrtip',
        //"buttons": [
        //    'excel'
        //],
        "buttons": {
            buttons: [
                {
                    text: 'PDF',
                    action: function (e, dt, node, config) {
                        //alert('Activated!');
                        QualifTrxLaneStationExport(AxleId, SiteId, BagContainerId, StationNumber, DateStringStart, DateStringEnd, 'PDF');
                        //Export(\'RepoTraficStationDayAll\', \'Excel\')
                    }
                },
                {
                    text: 'Excel',
                    action: function (e, dt, node, config) {
                        //alert('Activated!');
                        QualifTrxLaneStationExport(AxleId, SiteId, BagContainerId, StationNumber, DateStringStart, DateStringEnd, 'Excel');
                        //Export(\'RepoTraficStationDayAll\', \'Excel\')
                    }
                }
            ]
        },
        "initComplete": function (settings, json) {
            ActionBtnIconSet(ActionBtnId, Icon);
            ShowReport(PatternTableReportId);
        },
        "ajax": {
            "url": "/Qualif/QualifTrxBorneBorneGet",
            "type": "GET",
            "datatype": "json",
            "data": {
                SiteId: SiteId,
                BagContainerId: BagContainerId,
                StationNumber: StationNumber,
                LaneName: LaneName,
                DateStringStart: DateStringStart,
                DateStringEnd: DateStringEnd
            }
        },
        "columns": [
            { "data": "" },//0
            { "data": "StationNumber" },//1
            { "data": "LaneName" },//2
            { "data": "TotalTrafic" },//3

            { "data": "ObsTickIdP" },//4
            { "data": "ObsTickIdP" },//5
            { "mData": function vehicle(data, type, dataToSet) { return GetDigits(data.Day, 2) + GetDigits(data.Month, 2) + data.Year + data.SiteId + data.StationNumber + data.LaneName + 'P' + '00'; } },//6

            { "data": "ObsTickIdD" },//7
            { "data": "ObsTickIdD" },//8
            { "mData": function vehicle(data, type, dataToSet) { return GetDigits(data.Day, 2) + GetDigits(data.Month, 2) + data.Year + data.SiteId + data.StationNumber + data.LaneName + 'D' + '00'; } },//9

            { "data": "ObsTickIdM" },//10
            { "data": "ObsTickIdM" },//11
            { "mData": function vehicle(data, type, dataToSet) { return GetDigits(data.Day, 2) + GetDigits(data.Month, 2) + data.Year + data.SiteId + data.StationNumber + data.LaneName + 'M' + '00'; } },//12

            { "data": "ObsTickIdJ" },//13
            { "data": "ObsTickIdJ" },//14
            { "mData": function vehicle(data, type, dataToSet) { return GetDigits(data.Day, 2) + GetDigits(data.Month, 2) + data.Year + data.SiteId + data.StationNumber + data.LaneName + 'J' + '00'; } },//15

            { "data": "ObsTickId1" },//16
            { "data": "ObsTickId1" },//17
            { "mData": function vehicle(data, type, dataToSet) { return GetDigits(data.Day, 2) + GetDigits(data.Month, 2) + data.Year + data.SiteId + data.StationNumber + data.LaneName + '1' + '00'; } },//18

            { "data": "ObsMpId01" },//19
            { "data": "ObsMpId01" },//20
            { "mData": function vehicle(data, type, dataToSet) { return GetDigits(data.Day, 2) + GetDigits(data.Month, 2) + data.Year + data.SiteId + data.StationNumber + data.LaneName + '0' + '01'; } },//21

            { "data": "ObsMpId26" },//22
            { "data": "ObsMpId26" },//23
            { "mData": function vehicle(data, type, dataToSet) { return GetDigits(data.Day, 2) + GetDigits(data.Month, 2) + data.Year + data.SiteId + data.StationNumber + data.LaneName + '0' + '26'; } },//24

            { "data": "ObsMpId48" },//25
            { "data": "ObsMpId48" },//26
            { "mData": function vehicle(data, type, dataToSet) { return GetDigits(data.Day, 2) + GetDigits(data.Month, 2) + data.Year + data.SiteId + data.StationNumber + data.LaneName + '0' + '48'; } },//27

            { "data": "TotalToQualify" },//28
            { "data": "TotalQualified" },//29

            { "mData": function vehicle(data, type, dataToSet) { return GetDigits(data.Day, 2) + GetDigits(data.Month, 2) + data.Year + data.SiteId + data.StationNumber + data.LaneName; } },//32 Calculate
            { "mData": function vehicle(data, type, dataToSet) { return GetDigits(data.Day, 2) + GetDigits(data.Month, 2) + data.Year + data.SiteId + data.StationNumber + data.LaneName; } },//31 Détail
        ],
        "columnDefs": [
            { "width": "3%", "className": "text-center", "targets": 0 },
            { "width": "3%", "className": "text-center", "targets": 1 },
            { "width": "3%", "className": "text-center", "targets": 2 },
            { "width": "3%", "className": "text-right", "targets": 3 },

            { "width": "3%", "className": "text-right", "targets": 4 },
            { "width": "3%", "className": "text-right", "targets": 5 },
            { "width": "3%", "className": "text-center", "targets": 6 },

            { "width": "3%", "className": "text-right", "targets": 7 },
            { "width": "3%", "className": "text-right", "targets": 8 },
            { "width": "3%", "className": "text-center", "targets": 9 },

            { "width": "3%", "className": "text-right", "targets": 10 },
            { "width": "3%", "className": "text-right", "targets": 11 },
            { "width": "3%", "className": "text-center", "targets": 12 },

            { "width": "3%", "className": "text-right", "targets": 13 },
            { "width": "3%", "className": "text-right", "targets": 14 },
            { "width": "3%", "className": "text-center", "targets": 15 },

            { "width": "3%", "className": "text-right", "targets": 16 },
            { "width": "3%", "className": "text-right", "targets": 17 },
            { "width": "3%", "className": "text-center", "targets": 18 },

            { "width": "3%", "className": "text-right", "targets": 19 },
            { "width": "3%", "className": "text-right", "targets": 20 },
            { "width": "3%", "className": "text-center", "targets": 21 },

            { "width": "3%", "className": "text-right", "targets": 22 },
            { "width": "3%", "className": "text-right", "targets": 23 },
            { "width": "3%", "className": "text-center", "targets": 24 },

            { "width": "3%", "className": "text-right", "targets": 25 },
            { "width": "3%", "className": "text-right", "targets": 26 },
            { "width": "3%", "className": "text-center", "targets": 27 },

            { "width": "3%", "className": "text-right none", "targets": 28 },
            { "width": "3%", "className": "text-right", "targets": 29 },

            { "width": "3%", "className": "text-center", "targets": 30 },
            { "width": "3%", "className": "text-center none", "targets": 31 },

            { "targets": 0, "render": function (data, type, row) { return DataTableDateValueFromRowGet(row); } },
            { "targets": 1, "render": function (data, type, row) { return data; } },
            { "targets": 2, "render": function (data, type, row) { return data; } },
            { "targets": 3, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },

            { "targets": 4, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 5, "render": function (data, type, row) { return DataTablePercentageTwoThresholdsGet(data, row['TotalTrafic'], 2, 2, 5); } },
            {
                "targets": 6, "render": function (data, type, row) {

                    var TaskId = '00';
                    var SourceId = '19';
                    var FileTypeId = 'JA';
                    var DateString = GetDigits(row['Day'], 2) + GetDigits(row['Month'], 2) + row['Year'];
                    var SiteId = row['SiteId'];
                    var LSId = '--';
                    var BagContainerId = '--';
                    var StationNumber = row['StationNumber'];
                    var LaneName = '---';
                    var PdvId = '--';
                    var BillingId = '--';
                    var CategoryId = '--';
                    var ParamId = TaskId + SourceId + FileTypeId + DateString + SiteId + LSId + BagContainerId + StationNumber + LaneName + PdvId + BillingId + CategoryId;

                    var Pattern = 'CertTaskAdd';
                    var RowId = data + ParamId;
                    var argument = '\'' + RowId + '\', \'' + ParamId + '\'';
                    var text = '';
                    var BtnClass = 'dt-btn-cl gc-bc1-cl';
                    var SpanClass = 'fas fa-upload btn-icon-cl gc-c1-cl';
                    var TextClass = 'dt-text-cl';


                    return DataTableButtonGet('QualifTrxLaneSearch', data, '\'' + data + '\'', '', 'dt-btn-cl gc-bc1-cl', 'fas fa-eye btn-icon-cl gc-c1-cl', '') +
                        DataTableButtonGet(Pattern, RowId, argument, text, BtnClass, SpanClass, TextClass);
                }
            },

            { "targets": 7, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 8, "render": function (data, type, row) { return DataTablePercentageTwoThresholdsGet(data, row['TotalTrafic'], 2, 2, 5); } },
            { "targets": 9, "render": function (data, type, row) { return DataTableButtonGet('QualifTrxLaneSearch', data, '\'' + data + '\'', '', 'dt-btn-cl gc-bc1-cl', 'fas fa-eye btn-icon-cl gc-c1-cl', '') } },

            { "targets": 10, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 11, "render": function (data, type, row) { return DataTablePercentageTwoThresholdsGet(data, row['TotalTrafic'], 2, 2, 5); } },
            { "targets": 12, "render": function (data, type, row) { return DataTableButtonGet('QualifTrxLaneSearch', data, '\'' + data + '\'', '', 'dt-btn-cl gc-bc1-cl', 'fas fa-eye btn-icon-cl gc-c1-cl', '') } },

            { "targets": 13, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 14, "render": function (data, type, row) { return DataTablePercentageTwoThresholdsGet(data, row['TotalTrafic'], 2, 2, 5); } },
            { "targets": 15, "render": function (data, type, row) { return DataTableButtonGet('QualifTrxLaneSearch', data, '\'' + data + '\'', '', 'dt-btn-cl gc-bc1-cl', 'fas fa-eye btn-icon-cl gc-c1-cl', '') } },

            { "targets": 16, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 17, "render": function (data, type, row) { return DataTablePercentageTwoThresholdsGet(data, row['TotalTrafic'], 2, 2, 5); } },
            { "targets": 18, "render": function (data, type, row) { return DataTableButtonGet('QualifTrxLaneSearch', data, '\'' + data + '\'', '', 'dt-btn-cl gc-bc1-cl', 'fas fa-eye btn-icon-cl gc-c1-cl', '') } },

            { "targets": 19, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 20, "render": function (data, type, row) { return DataTablePercentageTwoThresholdsGet(data, row['TotalTrafic'], 2, 2, 5); } },
            { "targets": 21, "render": function (data, type, row) { return DataTableButtonGet('QualifTrxLaneSearch', data, '\'' + data + '\'', '', 'dt-btn-cl gc-bc1-cl', 'fas fa-eye btn-icon-cl gc-c1-cl', '') } },

            { "targets": 22, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 23, "render": function (data, type, row) { return DataTablePercentageTwoThresholdsGet(data, row['TotalTrafic'], 2, 2, 5); } },
            { "targets": 24, "render": function (data, type, row) { return DataTableButtonGet('QualifTrxLaneSearch', data, '\'' + data + '\'', '', 'dt-btn-cl gc-bc1-cl', 'fas fa-eye btn-icon-cl gc-c1-cl', '') } },

            { "targets": 25, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 26, "render": function (data, type, row) { return DataTablePercentageTwoThresholdsGet(data, row['TotalTrafic'], 2, 2, 5); } },
            { "targets": 27, "render": function (data, type, row) { return DataTableButtonGet('QualifTrxLaneSearch', data, '\'' + data + '\'', '', 'dt-btn-cl gc-bc1-cl', 'fas fa-eye btn-icon-cl gc-c1-cl', '') } },

            { "targets": 28, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 29, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },

            { "targets": 30, "render": function (data, type, row) { return DataTableButtonGet('QualifTrxBorneBorneSearch', data, '\'' + data + '\'', '', 'dt-btn-cl gc-bc1-cl', 'fas fa-eye btn-icon-cl gc-c1-cl', '') } },
            { "targets": 31, "render": function (data, type, row) { return DataTableButtonGet('QualifTrxLaneLaneSearch', data, '\'' + data + '\'', '', 'dt-btn-cl gc-bc1-cl', 'fas fa-eye btn-icon-cl gc-c1-cl', '') } },

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
        "iDisplayLength": 10,
        "processing": false,
        "responsive": true,
        "bFilter": true,
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


            //Total0 = api.column(1).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);
            //$(api.column(1).footer()).html(numShortFormat(Total0));

            //Total1 = api.column(3).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);
            //$(api.column(3).footer()).html(numShortFormat(Total1));

            //Total2 = api.column(5).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);
            //$(api.column(5).footer()).html(numShortFormat(Total2));
        }
    });
}

//HourSearch
function QualifTrxLaneHourSearch(Id) {
    var ActionBtnId = new String('QualifTrxLaneHourSearch' + 'BtnId' + Id);
    var Icon = 'fas fa-eye btn-icon-cl gc-c1-cl';
    $('#' + ActionBtnId).find('span').attr('class', 'fa fa-spinner fa-spin btn-icon-cl gc-c1-cl');

    var DateStringStart = new String(Id).substr(0, 8);
    var DateStringEnd = new String(Id).substr(0, 8);
    var SiteId = new String(Id).substr(8, 2);
    var BagContainerId = '0';
    var StationNumber = new String(Id).substr(10, 2);
    var LaneName = new String(Id).substr(12, 3);

    QualifTrxLaneHourGet(ActionBtnId, Icon, SiteId, BagContainerId, StationNumber, LaneName, DateStringStart, DateStringEnd);
}


//HourGet
function QualifTrxLaneHourGet(ActionBtnId, Icon, SiteId, BagContainerId, StationNumber, LaneName, DateStringStart, DateStringEnd) {

    //Spin
    ActionBtnSpin(ActionBtnId);

    ParamMessageReset();

    var PatternTable = 'QualifTrxLaneHour';
    var PatternTableId = PatternTable + 'TableId'
    var PatternTableReportId = PatternTable + 'TableReportId';

    $('#' + PatternTableId).DataTable().destroy();
    $('#' + PatternTableId).DataTable({
        "dom": 'Bfrtip',
        "buttons": [
            'excel'
        ],
        "initComplete": function (settings, json) {
            ActionBtnIconSet(ActionBtnId, Icon);
            ShowReport(PatternTableReportId);
        },
        "ajax": {
            "url": "/Qualif/QualifTrxLaneHourGet",
            "type": "GET",
            "datatype": "json",
            "data": {
                SiteId: SiteId,
                BagContainerId: BagContainerId,
                StationNumber: StationNumber,
                LaneName: LaneName,
                DateStringStart: DateStringStart,
                DateStringEnd: DateStringEnd
            }
        },
        "columns": [
            { "data": "" },//0
            { "data": "SiteName" },//1
            { "data": "StationName" },//2
            { "data": "LaneName" },//3
            { "data": "Hour" },//4
            { "data": "TotalZipFull" },//5

            { "data": "TotalToQualify" },//6
            { "mData": function vehicle(data, type, dataToSet) { return GetDigits(data.Day, 2) + GetDigits(data.Month, 2) + data.Year + GetDigits(data.Hour, 2) + data.SiteId + data.StationNumber + data.LaneName; } },//7 GapRelativeToQualify  

            { "data": "TotalQualified" },//8
            { "mData": function vehicle(data, type, dataToSet) { return GetDigits(data.Day, 2) + GetDigits(data.Month, 2) + data.Year + GetDigits(data.Hour, 2) + data.SiteId + data.StationNumber + data.LaneName; } },//9 GapRelativeQualified

            { "mData": function vehicle(data, type, dataToSet) { return GetDigits(data.Day, 2) + GetDigits(data.Month, 2) + data.Year + GetDigits(data.Hour, 2) + data.SiteId + data.StationNumber + data.LaneName; } },//10 Calculate
            { "mData": function vehicle(data, type, dataToSet) { return GetDigits(data.Day, 2) + GetDigits(data.Month, 2) + data.Year + GetDigits(data.Hour, 2) + data.SiteId + data.StationNumber + data.LaneName; } },//11 Détail with E
            { "mData": function vehicle(data, type, dataToSet) { return GetDigits(data.Day, 2) + GetDigits(data.Month, 2) + data.Year + GetDigits(data.Hour, 2) + data.SiteId + data.StationNumber + data.LaneName; } },//12 Detail withou E
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

            { "width": "3%", "className": "text-center none", "targets": 10 },
            { "width": "3%", "className": "text-center", "targets": 11 },
            { "width": "3%", "className": "text-center", "targets": 12 },

            { "targets": 0, "render": function (data, type, row) { return DataTableDateValueFromRowGet(row); } },
            { "targets": 1, "render": function (data, type, row) { return data; } },
            { "targets": 2, "render": function (data, type, row) { return data; } },
            { "targets": 3, "render": function (data, type, row) { return data; } },
            { "targets": 4, "render": function (data, type, row) { return DataTableHourFormatGet(data); } },
            { "targets": 5, "render": function (data, type, row) { return DataTableFormatIntNullAlertGet(data); } },

            { "targets": 6, "render": function (data, type, row) { return DataTableFormatIntNullAlertGet(data); } },
            { "targets": 7, "render": function (data, type, row) { return DataTableRateThresholdHightGet(row['TotalToQualify'], row['TotalZipFull'], 6, 100); } },

            { "targets": 8, "render": function (data, type, row) { return DataTableFormatIntNullAlertGet(data); } },
            { "targets": 9, "render": function (data, type, row) { return DataTableRateThresholdLowGet(row['TotalQualified'], row['TotalToQualify'], 6, 100); } },

            {
                "targets": 10, "render": function (data, type, row) {//Calculate
                    var TaskId = '04';
                    var SourceId = '11';
                    var FileTypeId = 'HF';
                    var DateString = GetDigits(row['Day'], 2) + GetDigits(row['Month'], 2) + row['Year'];
                    var SiteId = row['SiteId'];
                    var LSId = '--';
                    var BagContainerId = '--';
                    var StationNumber = row['StationNumber'];
                    var LaneName = row['LaneName'];
                    var PdvId = '--';
                    var BillingId = '--';
                    var CategoryId = '--';
                    var ParamId = TaskId + SourceId + FileTypeId + DateString + SiteId + LSId + BagContainerId + StationNumber + LaneName + PdvId + BillingId + CategoryId;

                    var Pattern = 'CertTaskAdd';
                    var RowId = data + ParamId;
                    var argument = '\'' + RowId + '\', \'' + ParamId + '\'';
                    var text = '';
                    var BtnClass = 'dt-btn-cl gc-bc1-cl';
                    var SpanClass = 'fas fa-redo-alt btn-icon-cl gc-c1-cl';
                    var TextClass = 'dt-text-cl';
                    return DataTableButtonGet(Pattern, RowId, argument, text, BtnClass, SpanClass, TextClass);
                }
            },
            { "targets": 11, "render": function (data, type, row) { return DataTableButtonGet('QualifPathSearch', data, '\'' + data + '\'', '', 'dt-btn-cl gc-bc1-cl', 'fas fa-eye btn-icon-cl gc-c1-cl', '') } },
            { "targets": 12, "render": function (data, type, row) { return DataTableButtonGet('QualifTrxLaneSearch', data, '\'' + data + '\'', '', 'dt-btn-cl gc-bc1-cl', 'fas fa-eye btn-icon-cl gc-c1-cl', '') } },
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
        "iDisplayLength": 31,
        "processing": false,
        "responsive": true,
        "bFilter": true,
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


            //Total0 = api.column(1).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);
            //$(api.column(1).footer()).html(numShortFormat(Total0));

            //Total1 = api.column(3).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);
            //$(api.column(3).footer()).html(numShortFormat(Total1));

            //Total2 = api.column(5).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);
            //$(api.column(5).footer()).html(numShortFormat(Total2));
        }
    });
}







function QualifAnalyticHomeOpen() {
    QualifAllReportsHide();
    QualifAllParametersHide();
    MenuBarNavHighlight(2, 5, 4);

    HideReport('Page0_' + 'PageReportId');
}

function QualifQualifHomeOpen() {
    QualifAllReportsHide();
    QualifAllParametersHide();
    MenuBarNavHighlight(1, 3, 2);

    HideReport('Page0_' + 'PageReportId');

    
}

function QualifObsTickIdPOpen() {
    QualifAllReportsHide();
    QualifAllParametersHide();
    MenuBarNavHighlight(2, 0, 4);

    $('#ParamTitleId').text("Discordances de plaque justifiées");
    ShowReport('ParamReportId');

    //gloabl
    ShowReport('ParamReportId');
    ShowParent('DateStartId');
    ShowParent('DateEndId');
    ShowParent('TimeId');
    ShowParent('RegionId');
    ShowParent('LSId');
    ShowParent('StationNumberId');

    $.ajax({
        url: "/Common/RoleNameListGet",
        method: "POST",
        contentType: "application/json; charset=utf-8",
        async: true,
        success: function (data) {
            if (data.includes('Administrateur') || data.includes('QualifPathSupervisor')) {

                //Actions
                ParamActionBtnGet(0, 'Afficher', 'fas fa-eye', 'QualifObsTickIdPAllDisplay()');

                //DateValueDefaultFirstDaySet('DateStartId');
                DateValueDefaultSet('DateStartId', 2);
                DateValueDefaultSet('DateEndId', 2);

                ElementDropDownListReset('RegionId');
                ElementDropDownListReset('LSId');
                ElementDropDownListReset('StationNumberId');

                DropDownListSet('TimeId', '01');
                QualifTimePreset();

                //QualifObsTickIdPAllDisplay();
            }
            else {
                if (data.includes('QualifPath')) {

                    //Actions
                    ParamActionBtnGet(0, 'Afficher', 'fas fa-eye', 'QualifObsTickIdPAllDisplay()');

                    DateValueDefaultSet('DateStartId', 2);
                    DateValueDefaultSet('DateEndId', 2);

                    DropDownListSet('TimeId', '07');
                    QualifTimePreset();
                    //QualifObsTickIdPAllDisplay();
                }
            }
        }
    });

    //QualifRateDayDisplay();

    //Connection
    NotiConnectionIdUpdate('Analyses - Discordances de plaques justifiée');
}

function QualifObsTickIdPAllDisplay() {
    //Define
    var ActionBtnId = 'ParamActionBtnId0';
    var Icon = 'fas fa-eye btn-icon-m-cl gc-c1-cl';
    var TimeId = GetElementValue('TimeId');
    var IsMargin = new Boolean(true);

    //Display
    if (TimeId == '01') {//Day
        QualifObsTickIdPDayDisplay(ActionBtnId, Icon, IsMargin);
    }
    else {
        if (TimeId == '09') {//Region
            QualifObsTickIdPRegionDisplay(ActionBtnId, Icon, IsMargin);
        }
        else {
            if (TimeId == '07') {//Station
                QualifObsTickIdPStationDisplay(ActionBtnId, Icon, IsMargin);
            }
            else {
                ParamMessageErrorDisplay('Ce niveau n\'est pas authorisé');
            }
        }
    }
}

function QualifObsTickIdPPerfDayDisplay(ActionBtnId, Icon, IsMargin) {
    var DateStringStart = GetDateStringFromDatePicker('DateStartId');
    var DateStringEnd = GetDateStringFromDatePicker('DateEndId');

    QualifAllReportsHide();
    ShowReport('ParamReportId');

    if (DateStringStart != '' && DateStringEnd != '') {
        QualifObsTickIdPPerfDayGet(ActionBtnId, Icon, IsMargin, DateStringStart, DateStringEnd);
    }
    else {
        ParamMessageErrorDisplay('Les dates de début et de fin sont obligatoires');
    };
}

function QualifObsTickIdPDayGet(ActionBtnId, Icon, IsMargin, DateStringStart, DateStringEnd) {

    //Spin    
    ActionSpin(ActionBtnId, IsMargin);

    //ParamReset
    ParamMessageReset();

    var PatternTable = 'QualifObsTickIdPDay';
    var PatternTableId = PatternTable + 'TableId'
    var PatternTableReportId = PatternTable + 'TableReportId';

    $('#' + PatternTableId).DataTable().destroy();
    $('#' + PatternTableId).DataTable({
        "dom": 'Bfrtip',
        "buttons": [
            'excel'
        ],
        "initComplete": function (settings, json) {
            ActionBtnSet(ActionBtnId, Icon, IsMargin);
            ShowReport(PatternTableReportId);
        },
        "ajax": {
            "url": "/Qualif/QualifObsTickIdPDayGet",
            "type": "GET",
            "datatype": "json",
            "data": {
                DateStringStart: DateStringStart,
                DateStringEnd: DateStringEnd
            }
        },
        "columns": [
            { "data": "" },//0
            { "data": "TotalTrafic" },//1

            { "data": "ObsTickIdP" },//2
            { "data": "ObsTickIdP" },//3                       

            { "data": "ObsTickIdPToQualify" },//4
            { "data": "ObsTickIdPToQualify" },//5

            { "data": "ObsTickIdPQualified" },//6
            { "data": "ObsTickIdPQualified" },//7

            { "data": "ObsTickIdP01" },//8
            { "data": "ObsTickIdP01" },//9

            { "data": "ObsTickIdP02" },//10
            { "data": "ObsTickIdP02" },//11

            { "data": "ObsTickIdP03" },//12
            { "data": "ObsTickIdP03" },//13

            { "mData": function vehicle(data, type, dataToSet) { return GetDigits(data.Day, 2) + GetDigits(data.Month, 2) + data.Year; } },//14 Detail
        ],
        "columnDefs": [
            { "width": "3%", "className": "text-center", "targets": 0 },
            { "width": "3%", "className": "text-right", "targets": 1 },

            { "width": "3%", "className": "text-right", "targets": 2 },
            { "width": "3%", "className": "text-right", "targets": 3 },

            { "width": "3%", "className": "text-right", "targets": 4 },
            { "width": "3%", "className": "text-right", "targets": 5 },

            { "width": "3%", "className": "text-right", "targets": 6 },
            { "width": "3%", "className": "text-right", "targets": 7 },

            { "width": "3%", "className": "text-right", "targets": 8 },
            { "width": "3%", "className": "text-right", "targets": 9 },

            { "width": "3%", "className": "text-right", "targets": 10 },
            { "width": "3%", "className": "text-right", "targets": 11 },

            { "width": "3%", "className": "text-right", "targets": 12 },
            { "width": "3%", "className": "text-right", "targets": 13 },

            { "width": "3%", "className": "text-center", "targets": 14 },

            { "targets": 0, "render": function (data, type, row) { return DataTableCertifiedInfoGet(row['IsCertified']) + ' ' + DataTableDateValueFromRowGet(row); } },
            { "targets": 1, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },

            { "targets": 2, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 3, "render": function (data, type, row) { return DataTablePercentageTwoThresholdsGet(data, row['TotalTrafic'], 2, 1, 3); } },

            { "targets": 4, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 5, "render": function (data, type, row) { return DataTableRateTwoThresholdsGet(data, row['ObsTickIdP'], 2, 70, 90); } },

            { "targets": 6, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 7, "render": function (data, type, row) { return DataTableRateTwoThresholdsGet(data, row['ObsTickIdPToQualify'], 2, 50, 90); } },

            { "targets": 8, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 9, "render": function (data, type, row) { return DataTableRateTwoThresholdsGet(data, row['ObsTickIdPQualified'], 2, 80, 98); } },

            { "targets": 10, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 11, "render": function (data, type, row) { return DataTablePercentageTwoThresholdsGet(data, row['ObsTickIdPQualified'], 2, 1, 3); } },

            { "targets": 12, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 13, "render": function (data, type, row) { return DataTablePercentageTwoThresholdsGet(data, row['ObsTickIdPQualified'], 2, 5, 10); } },

            { "targets": 14, "render": function (data, type, row) { return DataTableButtonGet('QualifObsTickIdPRegionSearch', data, '\'' + data + '\'', '', 'dt-btn-cl gc-bc1-cl', 'fas fa-eye btn-icon-cl gc-c1-cl', '') } },
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
        "iDisplayLength": 10,
        "processing": false,
        "responsive": true,
        "bFilter": true,
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

            DataTableTotalIntGet(api, intVal, 1);
            DataTableTotalIntGet(api, intVal, 2);
            DataTableTotalIntGet(api, intVal, 4);
            DataTableTotalIntGet(api, intVal, 6);
            DataTableTotalIntGet(api, intVal, 8);
            DataTableTotalIntGet(api, intVal, 10);
            DataTableTotalIntGet(api, intVal, 12);

            DataTableTotalPercentageGet(api, intVal, 2, 1, 3);
            DataTableTotalPercentageGet(api, intVal, 4, 2, 5);
            DataTableTotalPercentageGet(api, intVal, 6, 4, 7);

            DataTableTotalPercentageGet(api, intVal, 8, 6, 9);
            DataTableTotalPercentageGet(api, intVal, 10, 6, 11);
            DataTableTotalPercentageGet(api, intVal, 12, 6, 13);
        }
    });
}


function QualifObsTickIdPDayInsightGet() {

    var DateStringStart = DateStringLastWeekGet();
    var DateStringEnd = DateStringYesterdayGet();

    var PatternTable = 'QualifObsTickIdPDayHome';
    var PatternTableId = PatternTable + 'TableId'
    var PatternTableReportId = PatternTable + 'TableReportId';
    var PatternTableCardId = PatternTable + 'TableCardId';

    //style
    document.getElementById(PatternTableCardId).style.height = '700px';
    document.getElementById(PatternTableCardId).style.overflow = 'scroll';

    HideReport(PatternTableReportId);
    $('#' + PatternTableId).DataTable().destroy();
    $('#' + PatternTableId).DataTable({
        "initComplete": function (settings, json) {
            ShowReport(PatternTableReportId);
        },
        "ajax": {
            "url": "/Qualif/QualifObsTickIdPDayGet",
            "type": "GET",
            "datatype": "json",
            "data": {
                DateStringStart: DateStringStart,
                DateStringEnd: DateStringEnd
            }
        },
        "columns": [
            { "data": "" },//0
            { "data": "TotalTrafic" },//1
            { "data": "ObsTickIdP02" },//2
            { "data": "ObsTickIdP02" },//3
            { "data": "PriceLost" },//4
        ],
        "columnDefs": [
            { "width": "3%", "className": "text-center", "targets": 0 },
            { "width": "3%", "className": "text-right", "targets": 1 },
            { "width": "3%", "className": "text-right", "targets": 2 },
            { "width": "3%", "className": "text-right", "targets": 3 },
            { "width": "3%", "className": "text-right", "targets": 4 },
            
            { "targets": 0, "render": function (data, type, row) { return DataTableCertifiedInfoGet(row['IsCertified']) + ' ' + DataTableDateValueFromRowGet(row); } },
            { "targets": 1, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 2, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 3, "render": function (data, type, row) { return DataTablePercentageTwoThresholdsGet(data, row['TotalTrafic'], 2, 1, 3); } },
            { "targets": 4, "render": function (data, type, row) { return DataTableFormatDoubleGet(data); } },
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
        "iDisplayLength": 10,
        "processing": false,
        "responsive": true,
        "bFilter": false,
        "autoWidth": false,
        "searching": false,
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

            DataTableTotalIntGet(api, intVal, 1);
            DataTableTotalIntGet(api, intVal, 2);
            DataTableTotalDoubleGet(api, intVal, 4);
            DataTableTotalPercentageGet(api, intVal, 2, 1, 3);
        }
    });
}

function QualifObsTickIdPRegionDisplay(ActionBtnId, Icon, IsMargin) {
    var RegionId = GetElementValue('RegionId');
    var DateStringStart = GetDateStringFromDatePicker('DateStartId');
    var DateStringEnd = GetDateStringFromDatePicker('DateEndId');

    QualifAllReportsHide();
    ShowReport('ParamReportId');

    if (DateStringStart != '' && DateStringEnd != '') {
        ParamMessageReset();
        QualifObsTickIdPRegionGet(ActionBtnId, Icon, IsMargin, RegionId, DateStringStart, DateStringEnd);
    }
    else {
        ParamMessageErrorDisplay('Les dates de début et de fin sont obligatoires');
    };
}


function QualifObsTickIdPRegionSearch(Id) {
    var ActionBtnId = new String('QualifObsTickIdPRegionSearchBtnId' + Id);

    ActionBtnSpin(ActionBtnId);
    var Icon = 'fas fa-eye btn-icon-cl gc-c1-cl';
    var IsMargin = false;

    var DateStringStart = new String(Id).substr(0, 8);
    var DateStringEnd = new String(Id).substr(0, 8);
    var RegionId = '0';

    QualifObsTickIdPRegionGet(ActionBtnId, Icon, IsMargin, RegionId, DateStringStart, DateStringEnd);
}


function QualifObsTickIdPRegionGet(ActionBtnId, Icon, IsMargin, RegionId, DateStringStart, DateStringEnd) {

    //Spin    
    ActionSpin(ActionBtnId, IsMargin);

    var PatternTable = 'QualifObsTickIdPRegion';
    var PatternTableId = PatternTable + 'TableId'
    var PatternTableReportId = PatternTable + 'TableReportId';

    $('#' + PatternTableId).DataTable().destroy();
    $('#' + PatternTableId).DataTable({
        "dom": 'Bfrtip',
        "buttons": [
            'excel'
        ],
        "initComplete": function (settings, json) {
            ActionBtnSet(ActionBtnId, Icon, IsMargin);
            ShowReport(PatternTableReportId);
        },
        "ajax": {
            "url": "/Qualif/QualifObsTickIdPRegionGet",
            "type": "GET",
            "datatype": "json",
            "data": {
                RegionId: RegionId,
                DateStringStart: DateStringStart,
                DateStringEnd: DateStringEnd
            }
        },
        "columns": [
            { "data": "" },//0
            { "data": "RegionNameShort" },//1
            { "data": "TotalTrafic" },//2

            { "data": "ObsTickIdP" },//3 Anomalie
            { "data": "ObsTickIdP" },//4                       

            { "data": "ObsTickIdPToQualify" },//5 Qualifiable
            { "data": "ObsTickIdPToQualify" },//6
            { "data": "ObsTickIdPToQualify" },//7

            { "data": "ObsTickIdPQualified" },//8 Qualified
            { "data": "ObsTickIdPQualified" },//9

            { "data": "ObsTickIdP01" },//10
            { "data": "ObsTickIdP01" },//11

            { "data": "ObsTickIdP02" },//12
            { "data": "ObsTickIdP02" },//13

            { "data": "ObsTickIdP03" },//14
            { "data": "ObsTickIdP03" },//15

            { "mData": function vehicle(data, type, dataToSet) { return GetDigits(data.Day, 2) + GetDigits(data.Month, 2) + data.Year + data.RegionId; } },//16 Detail
        ],
        "columnDefs": [
            { "width": "3%", "className": "text-center", "targets": 0 },
            { "width": "3%", "className": "text-center", "targets": 1 },
            { "width": "3%", "className": "text-right", "targets": 2 },

            { "width": "3%", "className": "text-right", "targets": 3 },
            { "width": "3%", "className": "text-right", "targets": 4 },

            { "width": "3%", "className": "text-right", "targets": 5 },
            { "width": "3%", "className": "text-right", "targets": 6 },
            { "width": "3%", "className": "text-center", "targets": 7 },

            { "width": "3%", "className": "text-right", "targets": 8 },
            { "width": "3%", "className": "text-right", "targets": 9 },

            { "width": "3%", "className": "text-right", "targets": 10 },
            { "width": "3%", "className": "text-right", "targets": 11 },

            { "width": "3%", "className": "text-right", "targets": 12 },
            { "width": "3%", "className": "text-right", "targets": 13 },

            { "width": "3%", "className": "text-right", "targets": 14 },
            { "width": "3%", "className": "text-right", "targets": 15 },

            { "width": "3%", "className": "text-center", "targets": 16 },

            { "targets": 0, "render": function (data, type, row) { return DataTableCertifiedInfoGet(row['IsCertified']) + ' ' + DataTableDateValueFromRowGet(row); } },
            { "targets": 1, "render": function (data, type, row) { return data; } },
            { "targets": 2, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },

            { "targets": 3, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 4, "render": function (data, type, row) { return DataTablePercentageTwoThresholdsGet(data, row['TotalTrafic'], 2, 1, 3); } },

            { "targets": 5, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 6, "render": function (data, type, row) { return DataTableRateTwoThresholdsGet(data, row['ObsTickIdP'], 2, 70, 90); } },
            {
                "targets": 7, "render": function (data, type, row) {//Calculate-Qualif
                    var TaskId = '04';//Calculate
                    var SourceId = '19';//Counters
                    var FileTypeId = 'JB';//Qualifiable-Station
                    var DateString = GetDigits(row['Day'], 2) + GetDigits(row['Month'], 2) + row['Year'];
                    var SiteId = '--';
                    var LSId = '--';
                    var BagContainerId = '--';
                    var StationNumber = '--';
                    var LaneName = '---';
                    var PdvId = '--';
                    var BillingId = '--';
                    var CategoryId = '--';
                    var ParamId = TaskId + SourceId + FileTypeId + DateString + SiteId + LSId + BagContainerId + StationNumber + LaneName + PdvId + BillingId + CategoryId;

                    var Pattern = 'CertTaskAdd';
                    var RowId = data + ParamId;
                    var argument = '\'' + RowId + '\', \'' + ParamId + '\'';
                    var text = '';
                    var BtnClass = 'dt-btn-cl gc-bc1-cl';
                    var SpanClass = 'fas fa-redo-alt btn-icon-cl gc-c1-cl';
                    var TextClass = 'dt-text-cl';
                    return DataTableButtonGet(Pattern, RowId, argument, text, BtnClass, SpanClass, TextClass);
                }
            },

            { "targets": 8, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 9, "render": function (data, type, row) { return DataTableRateTwoThresholdsGet(data, row['ObsTickIdPToQualify'], 2, 50, 90); } },

            { "targets": 10, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 11, "render": function (data, type, row) { return DataTableRateTwoThresholdsGet(data, row['ObsTickIdPQualified'], 2, 80, 98); } },

            { "targets": 12, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 13, "render": function (data, type, row) { return DataTablePercentageTwoThresholdsGet(data, row['ObsTickIdPQualified'], 2, 1, 3); } },

            { "targets": 14, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 15, "render": function (data, type, row) { return DataTablePercentageTwoThresholdsGet(data, row['ObsTickIdPQualified'], 2, 5, 10); } },

            { "targets": 16, "render": function (data, type, row) { return DataTableButtonGet('QualifObsTickIdPStationSearch', data, '\'' + data + '\'', '', 'dt-btn-cl gc-bc1-cl', 'fas fa-eye btn-icon-cl gc-c1-cl', '') } },
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
        "iDisplayLength": 10,
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


            Total0 = api.column(2).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);
            $(api.column(2).footer()).html(numShortFormat(Total0));

            Total1 = api.column(3).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);
            $(api.column(3).footer()).html(numShortFormat(Total1));

            Total2 = api.column(5).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);
            $(api.column(5).footer()).html(numShortFormat(Total2));

            Total3 = api.column(8).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);
            $(api.column(8).footer()).html(numShortFormat(Total3));

            Total4 = api.column(10).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);
            $(api.column(10).footer()).html(numShortFormat(Total4));

            Total5 = api.column(12).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);
            $(api.column(12).footer()).html(numShortFormat(Total5));

            Total6 = api.column(14).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);
            $(api.column(14).footer()).html(numShortFormat(Total6));
        }
    });
}

function QualifObsTickIdPStationDisplay(ActionBtnId, Icon, IsMargin) {
    var RegionId = GetElementValue('RegionId');
    var LSId = GetElementValue('LSId');
    var StationNumber = GetElementValue('StationNumberId');
    var DateStringStart = GetDateStringFromDatePicker('DateStartId');
    var DateStringEnd = GetDateStringFromDatePicker('DateEndId');

    QualifAllReportsHide();
    ShowReport('ParamReportId');

    if (DateStringStart != '' && DateStringEnd != '') {
        ParamMessageReset();
        QualifObsTickIdPStationGet(ActionBtnId, Icon, IsMargin, RegionId, LSId, StationNumber, DateStringStart, DateStringEnd);
    }
    else {
        ParamMessageErrorDisplay('Les dates de début et de fin sont obligatoires');
    };
}


function QualifObsTickIdPStationSearch(Id) {
    var ActionBtnId = new String('QualifObsTickIdPStationSearchBtnId' + Id);

    ActionBtnSpin(ActionBtnId);
    var Icon = 'fas fa-eye btn-icon-cl gc-c1-cl';
    var IsMargin = false;

    var DateStringStart = new String(Id).substr(0, 8);
    var DateStringEnd = new String(Id).substr(0, 8);
    var RegionId = new String(Id).substr(8, 2);
    var LSId = '0';
    var StationNumber = '0';   

    QualifObsTickIdPStationGet(ActionBtnId, Icon, IsMargin, RegionId, LSId, StationNumber, DateStringStart, DateStringEnd);
}

function QualifObsTickIdPStationGet(ActionBtnId, Icon, IsMargin, RegionId, LSId, StationNumber, DateStringStart, DateStringEnd) {

    //Spin    
    ActionSpin(ActionBtnId, IsMargin);

    var PatternTable = 'QualifObsTickIdPStation';
    var PatternTableId = PatternTable + 'TableId'
    var PatternTableReportId = PatternTable + 'TableReportId';

    $('#' + PatternTableId).DataTable().destroy();
    $('#' + PatternTableId).DataTable({
        "dom": 'Bfrtip',
        "buttons": [
            'excel'
        ],
        "initComplete": function (settings, json) {
            ActionBtnSet(ActionBtnId, Icon, IsMargin);
            ShowReport(PatternTableReportId);
        },
        "ajax": {
            "url": "/Qualif/QualifObsTickIdPStationGet",
            "type": "GET",
            "datatype": "json",
            "data": {
                RegionId: RegionId,
                LSId: LSId,
                StationNumber: StationNumber,
                DateStringStart: DateStringStart,
                DateStringEnd: DateStringEnd
            }
        },
        "columns": [
            { "data": "" },//0
            { "data": "RegionNameShort" },//1
            { "data": "StationName" },//2
            { "data": "TotalTrafic" },//3

            { "data": "ObsTickIdP" },//4 
            { "data": "ObsTickIdP" },//5                       

            { "data": "ObsTickIdPToQualify" },//6 Qualifiable
            { "data": "ObsTickIdPToQualify" },//7
            { "data": "ObsTickIdPToQualify" },//8

            { "data": "ObsTickIdPQualified" },//9 Qualified
            { "data": "ObsTickIdPQualified" },//10

            { "data": "ObsTickIdP01" },//11
            { "data": "ObsTickIdP01" },//12

            { "data": "ObsTickIdP02" },//13
            { "data": "ObsTickIdP02" },//14
            { "mData": function vehicle(data, type, dataToSet) { return GetDigits(data.Day, 2) + GetDigits(data.Month, 2) + data.Year + data.RegionId + data.LSId + data.StationNumber + '---' + 'P' + '--' + '02' + '--'; } },//15

            { "data": "ObsTickIdP03" },//16
            { "data": "ObsTickIdP03" },//17
            { "mData": function vehicle(data, type, dataToSet) { return GetDigits(data.Day, 2) + GetDigits(data.Month, 2) + data.Year + data.RegionId + data.LSId + data.StationNumber + '---' + 'P' + '--' + '03' + '--'; } },//18
        ],
        "columnDefs": [
            { "width": "3%", "className": "text-center", "targets": 0 },
            { "width": "3%", "className": "text-center", "targets": 1 },
            { "width": "3%", "className": "text-left", "targets": 2 },
            { "width": "3%", "className": "text-right", "targets": 3 },

            { "width": "3%", "className": "text-right", "targets": 4 },
            { "width": "3%", "className": "text-right", "targets": 5 },

            { "width": "3%", "className": "text-right", "targets": 6 },
            { "width": "3%", "className": "text-right", "targets": 7 },
            { "width": "3%", "className": "text-center", "targets": 8 },

            { "width": "3%", "className": "text-right", "targets": 9 },
            { "width": "3%", "className": "text-right", "targets": 10 },

            { "width": "3%", "className": "text-right", "targets": 11 },
            { "width": "3%", "className": "text-right", "targets": 12 },

            { "width": "3%", "className": "text-right", "targets": 13 },
            { "width": "3%", "className": "text-right", "targets": 14 },
            { "width": "3%", "className": "text-right", "targets": 15 },

            { "width": "3%", "className": "text-right", "targets": 16 },
            { "width": "3%", "className": "text-right", "targets": 17 },
            { "width": "3%", "className": "text-center", "targets": 18 },

            { "targets": 0, "render": function (data, type, row) { return DataTableCertifiedInfoGet(row['IsCertified']) + ' ' + DataTableDateValueFromRowGet(row); } },
            { "targets": 1, "render": function (data, type, row) { return data; } },
            { "targets": 2, "render": function (data, type, row) { return data; } },
            { "targets": 3, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },

            { "targets": 4, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 5, "render": function (data, type, row) { return DataTablePercentageTwoThresholdsGet(data, row['TotalTrafic'], 2, 1, 3); } },

            { "targets": 6, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 7, "render": function (data, type, row) { return DataTableRateTwoThresholdsGet(data, row['ObsTickIdP'], 2, 70, 90); } },
            {
                "targets": 8, "render": function (data, type, row) {//Calculate-Qualif
                    var TaskId = '04';//Calculate
                    var SourceId = '19';//Counters
                    var FileTypeId = 'JB';//Qualifiable-Station
                    var DateString = GetDigits(row['Day'], 2) + GetDigits(row['Month'], 2) + row['Year'];
                    var SiteId = row['SiteId'];
                    var LSId = '--';
                    var BagContainerId = '--';
                    var StationNumber = row['StationNumber'];
                    var LaneName = '---';
                    var PdvId = '--';
                    var BillingId = '--';
                    var CategoryId = '--';
                    var ParamId = TaskId + SourceId + FileTypeId + DateString + SiteId + LSId + BagContainerId + StationNumber + LaneName + PdvId + BillingId + CategoryId;

                    var Pattern = 'CertTaskAdd';
                    var RowId = data + ParamId;
                    var argument = '\'' + RowId + '\', \'' + ParamId + '\'';
                    var text = '';
                    var BtnClass = 'dt-btn-cl gc-bc1-cl';
                    var SpanClass = 'fas fa-redo-alt btn-icon-cl gc-c1-cl';
                    var TextClass = 'dt-text-cl';
                    return DataTableButtonGet(Pattern, RowId, argument, text, BtnClass, SpanClass, TextClass);
                }
            },

            { "targets": 9, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 10, "render": function (data, type, row) { return DataTableRateTwoThresholdsGet(data, row['ObsTickIdPToQualify'], 2, 50, 90); } },

            { "targets": 11, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 12, "render": function (data, type, row) { return DataTableRateTwoThresholdsGet(data, row['ObsTickIdPQualified'], 2, 80, 98); } },

            { "targets": 13, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 14, "render": function (data, type, row) { return DataTablePercentageTwoThresholdsGet(data, row['ObsTickIdPQualified'], 2, 1, 3); } },
            { "targets": 15, "render": function (data, type, row) { return DataTableButtonGet('QualifTrxLaneSearch', data, '\'' + data + '\'', '', 'dt-btn-cl gc-bc1-cl', 'fas fa-eye btn-icon-cl gc-c1-cl', '') } },

            { "targets": 16, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 17, "render": function (data, type, row) { return DataTablePercentageTwoThresholdsGet(data, row['ObsTickIdPQualified'], 2, 5, 10); } },
            { "targets": 18, "render": function (data, type, row) { return DataTableButtonGet('QualifTrxLaneSearch', data, '\'' + data + '\'', '', 'dt-btn-cl gc-bc1-cl', 'fas fa-eye btn-icon-cl gc-c1-cl', '') } },
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
        "iDisplayLength": 10,
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


            Total0 = api.column(4).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);
            $(api.column(4).footer()).html(numShortFormat(Total0));

            Total1 = api.column(6).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);
            $(api.column(6).footer()).html(numShortFormat(Total1));

            Total2 = api.column(9).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);
            $(api.column(9).footer()).html(numShortFormat(Total2));

            Total3 = api.column(11).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);
            $(api.column(11).footer()).html(numShortFormat(Total3));

            Total4 = api.column(13).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);
            $(api.column(13).footer()).html(numShortFormat(Total4));

            Total5 = api.column(15).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);
            $(api.column(15).footer()).html(numShortFormat(Total5));
        }
    });
}


function QualifObsTickIdDOpen() {
    QualifAllReportsHide();
    QualifAllParametersHide();
    MenuBarNavHighlight(2, 0, 1);

    $('#ParamTitleId').text("Temps de parcours dépassé");
    ShowReport('ParamReportId');

    //gloabl
    ShowReport('ParamReportId');
    ShowParent('TimeId');
    ShowParent('ZoneId'); 
    
    ShowParent('ObsTickId');
    ShowParent('ObsMpId');
    ShowParent('ObsPassId');

    //OnChange
    ElementOnChangeSet('TimeId', 'QualifObsTickIdDPresetGet()');
    ElementOnChangeSet('ZoneId', 'QualifObsTickIdDPresetGet()');

    ElementOnChangeSet('ObsTickId', 'QualifObsTickIdPresetGet()');
    ElementOnChangeSet('ObsMpId', 'QualifObsMpIdPresetGet()');
    ElementOnChangeSet('ObsPassId', 'QualifObsPassIdPresetGet()');       

    $.ajax({
        url: "/Common/RoleNameListGet",
        method: "POST",
        contentType: "application/json; charset=utf-8",
        async: true,
        success: function (data) {
            if (data.includes('Administrateur') || data.includes('TollAdmin') || data.includes('QualifPathSupervisor')) {

                DateValueDefaultSet('DateStartId', 2);
                DateValueDefaultSet('DateEndId', 2);

                ElementDropDownListReset('RegionId');
                ElementDropDownListReset('LSId');
                ElementDropDownListReset('StationNumberId');

                DropDownListSet('TimeId', '01');
                QualifTimePreset();

                //Actions
                ParamActionBtnGet(0, 'Afficher', 'fas fa-eye', 'QualifObsTickIdDAllDisplay()');
            }
            else {
                if (data.includes('QualifPath')) {

                    //Actions
                    ParamActionBtnGet(0, 'Afficher', 'fas fa-eye', 'QualifObsTickIdDAllDisplay()');

                    DateValueDefaultSet('DateStartId', 2);
                    DateValueDefaultSet('DateEndId', 2);

                    DropDownListSet('TimeId', '07');
                    QualifTimePreset();
                    //QualifObsTickIdDAllDisplay();
                }
            }
        }
    });

    //QualifRateDayDisplay();

    //Connection
    NotiConnectionIdUpdate('Qualification - Analyse - Temps de parcours dépassé');
}


function QualifObsTickIdDAllDayOpen() {
    QualifAllReportsHide();
    QualifAllParametersHide();
    MenuBarNavHighlight(2, 1, 4);

    //ParamTitle
    ParamTitleSet('Temps de parcours dépassé global');
    ShowReport('ParamReportId');
    ParamMessageReset();

    //gloabl
    ShowReport('ParamReportId');
    ShowParent('DateStartId');
    ShowParent('DateEndId');
    ShowParent('TimeId');
    ShowParent('ZoneId');
    ShowParent('IsChartId');

    ShowParent('ObsTickId');
    ShowParent('ObsMpId');
    ShowParent('ObsPassId');

    //Action
    ParamActionBtnGet(0, 'Afficher', 'fas fa-eye', "QualifObsTickIdDAllDayDisplay()");
}


function QualifObsTickIdDRegionDayOpen() {
    QualifAllReportsHide();
    QualifAllParametersHide();
    MenuBarNavHighlight(2, 1, 4);

    //ParamTitle
    ParamTitleSet('Temps de parcours dépassé par région');
    ShowReport('ParamReportId');
    ParamMessageReset();

    //gloabl
    ShowReport('ParamReportId');
    ShowParent('DateStartId');
    ShowParent('DateEndId');
    ShowParent('TimeId');
    ShowParent('ZoneId');
    ShowParent('RegionId');
    ShowParent('IsChartId');

    ShowParent('ObsTickId');
    ShowParent('ObsMpId');
    ShowParent('ObsPassId');
    //Action
    ParamActionBtnGet(0, 'Afficher', 'fas fa-eye', "QualifObsTickIdDRegionDayDisplay()");
}


function QualifObsTickIdDStationDayOpen() {
    QualifAllReportsHide();
    QualifAllParametersHide();
    MenuBarNavHighlight(2, 1, 4);

    //ParamTitle
    ParamTitleSet('Temps de parcours dépassé par gare');
    ShowReport('ParamReportId');
    ParamMessageReset();

    //gloabl
    ShowReport('ParamReportId');
    ShowParent('DateStartId');
    ShowParent('DateEndId');
    ShowParent('TimeId');
    ShowParent('ZoneId');
    ShowParent('RegionId');
    ShowParent('LSId');
    ShowParent('StationNumberId');
    ShowParent('IsChartId');

    ShowParent('ObsTickId');
    ShowParent('ObsMpId');
    ShowParent('ObsPassId');
    //Action
    ParamActionBtnGet(0, 'Afficher', 'fas fa-eye', "QualifObsTickIdDStationDayDisplay()");
}


function QualifObsTickIdDScopeCumulOpen() {
    QualifAllReportsHide();
    QualifAllParametersHide();
    MenuBarNavHighlight(2, 1, 4);

    //ParamTitle
    ParamTitleSet('Temps de parcours dépassé par périmètre');
    ShowReport('ParamReportId');
    ParamMessageReset();

    //gloabl
    ShowReport('ParamReportId');
    ShowParent('DateStartId');
    ShowParent('DateEndId');
    ShowParent('TimeId');
    ShowParent('ZoneId');
    ShowParent('IsChartId');

    ShowParent('ObsTickId');
    ShowParent('ObsMpId');
    ShowParent('ObsPassId');

    //Action
    ParamActionBtnGet(0, 'Afficher', 'fas fa-eye', "QualifObsTickIdDScopeCumulDisplay()");
    ParamActionBtnGet(1, 'Exporter', 'fas fa-file-pdf', "QualifPreview()");
    ParamActionBtnGet(2, 'Tester', 'fas fa-paper-plane', "QualifNotify('Me')");
    ParamActionBtnGet(3, 'Notifier Périmètre', 'fas fa-paper-plane', "QualifNotify('Scope')");
}

function QualifNotify(Destination) {

    var ActionBtnId = 'ParamActionBtnId1';

    if (Destination == 'Me') {
        ActionBtnId = 'ParamActionBtnId2';
    }
    else {
        if (Destination == 'Scope') {
            ActionBtnId = 'ParamActionBtnId3';
        }
    }

    var Icon = 'fas fa-paper-plane btn-icon-m-cl gc-c1-cl';
    var IsMargin = true;

    ActionSpin(ActionBtnId, IsMargin);

    var ZoneId = ElementDropDownListValueGet('ZoneId');
    var TimeId = ElementDropDownListValueGet('TimeId');
    var DateStringStart = GetDateStringFromDatePicker('DateStartId');
    var DateStringEnd = GetDateStringFromDatePicker('DateEndId');

    var obj = {};
    obj.ZoneId = ZoneId;
    obj.TimeId = TimeId;
    obj.DateStringStart = DateStringStart;
    obj.DateStringEnd = DateStringEnd;   
    obj.Destination = Destination;

    $.ajax({
        url: "/Qualif/QualifNotify",
        method: "POST",
        data: JSON.stringify(obj),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            ActionBtnSet(ActionBtnId, Icon, IsMargin);
        }
    });
}

function QualifPreview(FileType) {

    var ZoneId = ElementDropDownListValueGet('ZoneId');
    var TimeId = ElementDropDownListValueGet('TimeId');
    var DateStringStart = GetDateStringFromDatePicker('DateStartId');
    var DateStringEnd = GetDateStringFromDatePicker('DateEndId');

    var FileType = 'PDF';
    var PrintLink = '/Qualif/QualifPreview?' +
        'ZoneId=' + ZoneId +
        '&TimeId=' + TimeId +
        '&DateStringStart=' + DateStringStart +
        '&DateStringEnd=' + DateStringEnd +        
        '&FileType=' + FileType;

    NavigateTo(PrintLink, true);
}


function QualifObsTickIdDScopeCumulDisplay() {

    var ActionBtnId = 'ParamActionBtnId0';
    var Icon = 'fas fa-eye';
    var IsMargin = true;

    var DateStringStart = GetDateStringFromDatePicker('DateStartId');
    var DateStringEnd = GetDateStringFromDatePicker('DateEndId');
    var IsChart = ElementBooleanGet('IsChartId');

    QualifAllReportsHide();
    ShowReport('ParamReportId');
    ParamMessageReset();

    var ObsTickId = ElementDropDownListValueGet('ObsTickId');
    var ObsMpId = ElementDropDownListValueGet('ObsMpId');
    var ObsPassId = ElementDropDownListValueGet('ObsPassId');

    QualifObsTickIdDScopeCumulGet(ActionBtnId, Icon, IsMargin, DateStringStart, DateStringEnd, IsChart, ObsTickId, ObsMpId, ObsPassId);
}


function QualifObsTickIdDScopeCumulGet(ActionBtnId, Icon, IsMargin,
    DateStringStart, DateStringEnd, IsChart, ObsTickId, ObsMpId, ObsPassId) {

    ActionSpin(ActionBtnId, IsMargin);

    //HideTableReport('QualifObsTickIdDStation');

    var PatternTable = 'QualifObsTickIdDScopeCumul';
    var PatternTableId = PatternTable + 'TableId'
    var PatternTableReportId = PatternTable + 'TableReportId';

    var data00 = 0;
    var data01 = 0;

    var data10 = 0;
    var data11 = 0;

    var data20 = 0;
    var data21 = 0;
    var data22 = 0;
    var data23 = 0;

    var data30 = 0;
    var data31 = 0;

    var data40 = 0;
    var data41 = 0;

    var data50 = 0;
    var data51 = 0;
    var data52 = 0;
    var data53Bar = 0;
    var data53 = 0;

    var data60 = 0;
    var data61 = 0;
    var data62 = 0;
    var data63Bar = 0;
    var data63 = 0;

    var data70 = 0;
    var data71 = 0;
    var data72 = 0;
    var data73 = 0;
    var data74Bar = 0;
    var data74 = 0;


    $('#' + PatternTableId).DataTable().destroy();
    $('#' + PatternTableId).DataTable({
        //"dom": 'Bfrtip',
        //"buttons": [
        //    'excel'
        //],
        "dom": 'Bfrtip',
        "buttons": {
            buttons: [
                {
                    text: 'PDF',
                    action: function (e, dt, node, config) {
                        var ZoneId = '04';
                        var TimeId = '06';
                        var RegionId = '0';
                        var LSId = '0';
                        var StationNumber = '0';
                        var LaneName = '0';
                        var FileType = 'PDF';
                        QualifObsTickIdDTableExport(ZoneId, TimeId, DateStringStart, DateStringEnd, RegionId, LSId, StationNumber, LaneName, FileType);
                    }
                },
                {
                    text: 'Excel',
                    action: function (e, dt, node, config) {
                        var ZoneId = '04';
                        var TimeId = '06';
                        var RegionId = '0';
                        var LSId = '0';
                        var StationNumber = '0';
                        var LaneName = '0';
                        var FileType = 'Excel';
                        QualifObsTickIdDTableExport(ZoneId, TimeId, DateStringStart, DateStringEnd, RegionId, LSId, StationNumber, LaneName, FileType);
                    }
                }
            ]
        },
        "initComplete": function (settings, json) {
            ActionBtnSet(ActionBtnId, Icon, IsMargin);
            ShowReport(PatternTableReportId);

            if (IsChart == true) {

                if (DateStringStart - DateStringEnd != 0) {
                    var PatternChartCommon = 'QualifObsTickIdD';

                    var Title = 'Temps de parcours dépassé';
                    var PatternChart = PatternChartCommon + 'TotalLine';
                    var labels = GetColumnArray(PatternTableId, 18);
                    var data1 = GetColumnArray(PatternTableId, 4);
                    var data2 = GetColumnArray(PatternTableId, 5);
                    var data3 = GetColumnArray(PatternTableId, 8);

                    var label1 = 'TPD';
                    var label2 = 'Qualifiable';
                    var label3 = 'Qualifié';

                    document.getElementById(PatternChart + 'ChartCardId').style.border = 'transparent';
                    ChartJsLineThreeTraficHourDisplay(Title, PatternChart, labels, label1, data1, label2, data2, label3, data3, false);

                    //
                    var Title = 'Qualification du Temps de parcours dépassé';
                    var PatternChart = PatternChartCommon + 'ControlLine';
                    var labels = GetColumnArray(PatternTableId, 18);
                    var data1 = GetColumnArray(PatternTableId, 10);
                    var data2 = GetColumnArray(PatternTableId, 12);
                    var data3 = GetColumnArray(PatternTableId, 14);
                    var data4 = GetColumnArray(PatternTableId, 16);

                    var label1 = 'TPD justifié';
                    var label2 = 'TPD non-justifié';
                    var label3 = 'Qualification impossible';
                    var label4 = 'Parcours douteux';

                    document.getElementById(PatternChart + 'ChartCardId').style.border = 'transparent';
                    ChartJsLineFourTraficHourDisplay(Title, PatternChart, labels, label1, data1, label2, data2, label3, data3, label4, data4, false);

                    var Title = 'Evolution du taux de fraude au parcours confirmée';
                    var PatternChart = PatternChartCommon + 'RateLine';
                    var labels = GetColumnArray(PatternTableId, 18);
                    var data1 = GetColumnArray(PatternTableId, 11);
                    var data2 = GetColumnArray(PatternTableId, 13);
                    var data3 = GetColumnArray(PatternTableId, 15);

                    var label1 = 'TPD justifié';
                    var label2 = 'TPD non-justifié';
                    var label3 = 'Qualification impossible';

                    document.getElementById(PatternChart + 'ChartCardId').style.border = 'transparent';
                    ChartJsLineThreeTraficHourDisplay(Title, PatternChart, labels, label1, data1, label2, data2, label3, data3, false);

                    ShowGridReport('Grid_0000');
                }

                //Doughnut 0
                var Title = 'Taux du TPD par rapport au trafic';
                var PatternChart = PatternChartCommon + 'TotalDoughnut';
                var label00 = 'Temps de parcours dépassé';
                var label01 = '';

                var data = {
                    datasets: [{
                        data: [data00, data01],
                        backgroundColor: ['#03045e', '#adb5bd'],
                    }],

                    labels: [label00]
                };

                document.getElementById(PatternChart + 'ChartCardId').style.border = 'transparent';
                ChartJsDoughnutOneDisplay(Title, PatternChart, data);

                ////Doughnut 1
                var Title = 'Taux des transactions qualifiables';
                var PatternChart = PatternChartCommon + 'QualifiableDoughnut';
                var label10 = 'A qualier (Vitesse <= 30Km)';
                var label11 = '';
                var data = {
                    datasets: [{
                        data: [data10, data11],
                        backgroundColor: ['#0077b6', '#adb5bd'],
                    }],
                    labels: [label10]
                };
                document.getElementById(PatternChart + 'ChartCardId').style.border = 'transparent';
                ChartJsDoughnutOneDisplay(Title, PatternChart, data);

                //Doughnut 2
                var Title = 'Qualification du Temps de parcours dépassé';
                var PatternChart = PatternChartCommon + 'ControlDoughnut';
                var label20 = 'TPD justifié';
                var label21 = 'TPD non-justifié';
                var label22 = 'Qualification impossible';
                var label23 = 'Parcours douteux';

                var data = {
                    datasets: [{
                        data: [data20, data21, data22, data23],
                        backgroundColor: ['#38b000', '#d90429', '#adb5bd', '#D75F05'],
                    }],

                    labels: [label20, label21, label22, label23]
                };
                document.getElementById(PatternChart + 'ChartCardId').style.border = 'transparent';
                ChartJsDoughnutOneDisplay(Title, PatternChart, data);

                //Doughnut 3
                var Title = 'Taux de fraude par rapport au trafic SF';
                var PatternChart = PatternChartCommon + 'RateDoughnut';
                var label30 = 'TPD non justifié';
                var label31 = '';
                var data = {
                    datasets: [{
                        data: [data30, data31],
                        backgroundColor: ['#d90429', '#adb5bd'],
                    }],
                    labels: [label30]
                };
                document.getElementById(PatternChart + 'ChartCardId').style.border = 'transparent';
                ChartJsDoughnutOneDisplay(Title, PatternChart, data);

                //Doughnut 4
                var Title = 'Taux de fraude par rapport au trafic SF';
                var PatternChart = PatternChartCommon + 'RateSumDoughnut';
                var label40 = 'Fraude confirmée + Qualification impossible + Parcours douteux';
                var label41 = '';
                var data = {
                    datasets: [{
                        data: [data40, data41],
                        backgroundColor: ['#d90429', '#adb5bd'],
                    }],
                    labels: [label40]
                };
                document.getElementById(PatternChart + 'ChartCardId').style.border = 'transparent';
                ChartJsDoughnutOneDisplay(Title, PatternChart, data);

                //Doughnut 5
                var Title = 'Fraude confirmée par classe';
                var PatternChart = PatternChartCommon + 'ControlClDoughnut';
                var label50 = 'VL';
                var label51 = 'PL1';
                var label52 = 'PL2';
                var label53 = '00';

                var data = {
                    datasets: [{
                        data: [data50, data51, data52, data53],
                        backgroundColor: ['#D71A04', '#A104CC', '#257BCC', '#D7A5A5'],
                    }],

                    labels: [label50, label51, label52, label53]
                };
                document.getElementById(PatternChart + 'ChartCardId').style.border = 'transparent';
                ChartJsDoughnutOneDisplay(Title, PatternChart, data);

                //Doughnut 6
                var Title = 'Fraude confirmée par MP';
                var PatternChart = PatternChartCommon + 'ControlMpDoughnut';
                var label60 = 'Espèce';
                var label61 = 'Tlp Pré';
                var label62 = 'Tlp Post';
                var label63 = 'Autres';

                var data = {
                    datasets: [{
                        data: [data60, data61, data62, data63],
                        backgroundColor: ['#EBE31D', '#EB7F35', '#BA5319', '#5E4D4B'],
                    }],

                    labels: [label60, label61, label62, label63]
                };
                document.getElementById(PatternChart + 'ChartCardId').style.border = 'transparent';
                ChartJsDoughnutOneDisplay(Title, PatternChart, data);

                //Doughnut 7
                var Title = 'Fraude confirmée par axe';
                var PatternChart = PatternChartCommon + 'ControlAxleDoughnut';
                var label70 = 'Kénitra Nord - Mdiq';
                var label71 = 'Sidi Allal Bahraoui - Oujda';
                var label72 = 'Agadir-Berrechid-Beni mellal';
                var label73 = 'Nassim-Safi';
                var label74 = 'Autres';

                var data = {
                    datasets: [{
                        data: [data70, data71, data72, data73, data74],
                        backgroundColor: ['#70d6ff', '#ff70a6', '#ff9770', '#5b8e7d', '#e9ff70'],
                    }],

                    labels: [label70, label71, label72, label73, label74]
                };
                document.getElementById(PatternChart + 'ChartCardId').style.border = 'transparent';
                ChartJsDoughnutOneDisplay(Title, PatternChart, data);

                ShowGridReport('Grid_0001');
            }

        },
        "ajax": {
            "url": "/Qualif/QualifObsTickIdDScopeCumulGet",
            "type": "GET",
            "datatype": "json",
            "data": {
                DateStringStart: DateStringStart,
                DateStringEnd: DateStringEnd,
                ObsTickId: ObsTickId,
                ObsMpId: ObsMpId,
                ObsPassId: ObsPassId
            }
        },
        "columns": [
            { "data": "" },//0
            { "data": "" },//1
            { "data": "TotalTrafic" },//2

            { "data": "ObsTotal" },//3
            { "data": "ObsTotal" },//4                       

            { "data": "TotalToQualify" },//5
            { "data": "TotalToQualify" },//6
            { "data": "TotalToQualify" },//7

            { "data": "ObsQualified" },//8 
            { "data": "ObsQualified" },//9

            { "data": "ObsCtr04" },//10
            { "data": "ObsCtr04" },//11

            { "data": "ObsCtr06" },//12
            { "data": "ObsCtr06" },//13

            { "data": "ObsCtr03" },//14
            { "data": "ObsCtr03" },//15

            { "data": "ObsCtr99" },//16
            { "data": "ObsCtr99" },//17

            { "mData": function vehicle(data, type, dataToSet) { return GetDigits(data.Day, 2) + GetDigits(data.Month, 2) + data.Year + data.RegionId + data.LSId + data.StationNumber; } },//18 Detail
            { "data": "PriceLost" },//19

            { "mData": function vehicle(data, type, dataToSet) { return GetDigits(data.Day, 2) + '/' + GetDigits(data.Month, 2); } },//20

            { "data": "ObsC01" },//21
            { "data": "ObsC02" },//22
            { "data": "ObsC03" },//23

            { "data": "ObsM01" },//24
            { "data": "ObsM40" },//25
            { "data": "ObsM41" },//26

            { "data": "ObsA1" },//27
            { "data": "ObsA3" },//28
            { "data": "ObsA4" },//29
            { "data": "ObsA5" },//30
        ],
        "columnDefs": [
            { "width": "3%", "className": "text-center", "targets": 0 },
            { "width": "3%", "className": "text-left", "targets": 1 },
            { "width": "3%", "className": "text-right", "targets": 2 },

            { "width": "3%", "className": "text-right", "targets": 3 },
            { "width": "3%", "className": "text-right", "targets": 4 },

            { "width": "3%", "className": "text-right", "targets": 5 },
            { "width": "3%", "className": "text-right", "targets": 6 },
            { "width": "3%", "className": "text-center", "targets": 7 },

            { "width": "3%", "className": "text-right", "targets": 8 },
            { "width": "3%", "className": "text-right", "targets": 9 },

            { "width": "3%", "className": "text-right", "targets": 10 },
            { "width": "3%", "className": "text-right", "targets": 11 },

            { "width": "3%", "className": "text-right", "targets": 12 },
            { "width": "3%", "className": "text-right", "targets": 13 },

            { "width": "3%", "className": "text-right", "targets": 14 },
            { "width": "3%", "className": "text-right", "targets": 15 },

            { "width": "3%", "className": "text-right", "targets": 16 },
            { "width": "3%", "className": "text-right", "targets": 17 },

            { "width": "3%", "className": "text-center", "targets": 18 },
            { "width": "3%", "className": "text-center", "targets": 19 },

            { "width": "3%", "className": "text-center none", "targets": 20 },

            { "width": "3%", "className": "text-right none", "targets": 21 },
            { "width": "3%", "className": "text-right none", "targets": 22 },
            { "width": "3%", "className": "text-right none", "targets": 23 },

            { "width": "3%", "className": "text-right none", "targets": 24 },
            { "width": "3%", "className": "text-right none", "targets": 25 },
            { "width": "3%", "className": "text-right none", "targets": 26 },

            { "width": "3%", "className": "text-right none", "targets": 27 },
            { "width": "3%", "className": "text-right none", "targets": 28 },
            { "width": "3%", "className": "text-right none", "targets": 29 },
            { "width": "3%", "className": "text-right none", "targets": 30 },

            { "targets": 0, "render": function (data, type, row) { return DataTableCertifiedInfoGet(row['IsValidTrxLane']) + DataTableCertifiedInfoGet(row['IsValidTrxBorne']) + DataTableCertifiedInfoGet(row['IsValidImage']); } },
            { "targets": 1, "render": function (data, type, row) { return 'Du ' + DataTableDateValueStartFromRowGet(row) + ' Au ' + DataTableDateValueEndFromRowGet(row); } },
            { "targets": 2, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },

            { "targets": 3, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 4, "render": function (data, type, row) { return DataTablePercentageTwoThresholdsGet(data, row['TotalTrafic'], 2, 1, 3); } },

            { "targets": 5, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 6, "render": function (data, type, row) { return DataTableRateTwoThresholdsGet(data, row['ObsTotal'], 2, 70, 90); } },
            {
                "targets": 7, "render": function (data, type, row) {//Calculate-Qualif
                    var TaskId = '04';//Calculate
                    var SourceId = '19';//Counters
                    var FileTypeId = 'JB';//Qualifiable-Station
                    var DateString = GetDigits(row['Day'], 2) + GetDigits(row['Month'], 2) + row['Year'];
                    var SiteId = '--';
                    var LSId = row['LSId'];
                    var BagContainerId = '--';
                    var StationNumber = row['StationNumber'];
                    var LaneName = '---';
                    var PdvId = '--';
                    var BillingId = '--';
                    var CategoryId = '--';
                    var ParamId = TaskId + SourceId + FileTypeId + DateString + SiteId + LSId + BagContainerId + StationNumber + LaneName + PdvId + BillingId + CategoryId;

                    var Pattern = 'CertTaskAdd';
                    var RowId = data + ParamId;
                    var argument = '\'' + RowId + '\', \'' + ParamId + '\'';
                    var text = '';
                    var BtnClass = 'dt-btn-cl gc-bc1-cl';
                    var SpanClass = 'fas fa-redo-alt btn-icon-cl gc-c1-cl';
                    var TextClass = 'dt-text-cl';
                    return DataTableButtonGet(Pattern, RowId, argument, text, BtnClass, SpanClass, TextClass);
                }
            },

            { "targets": 8, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 9, "render": function (data, type, row) { return DataTableRateTwoThresholdsGet(data, row['TotalToQualify'], 2, 50, 90); } },

            { "targets": 10, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 11, "render": function (data, type, row) { return DataTableRateTwoThresholdsGet(data, row['ObsQualified'], 2, 80, 98); } },

            { "targets": 12, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 13, "render": function (data, type, row) { return DataTablePercentageTwoThresholdsGet(data, row['ObsQualified'], 2, 1, 3); } },

            { "targets": 14, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 15, "render": function (data, type, row) { return DataTablePercentageTwoThresholdsGet(data, row['ObsQualified'], 2, 5, 10); } },

            { "targets": 16, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 17, "render": function (data, type, row) { return DataTablePercentageTwoThresholdsGet(row['ObsCtr99'], row['ObsQualified'], 2, 5, 10); } },

            { "targets": 18, "render": function (data, type, row) { return DataTableButtonGet('QualifObsTickIdDLaneDaySearch', data, '\'' + data + '\'', '', 'dt-btn-cl gc-bc1-cl', 'fas fa-eye btn-icon-cl gc-c1-cl', '') } },
            { "targets": 19, "render": function (data, type, row) { return DataTableFormatDoubleGet(data); } },

            { "targets": 20, "render": function (data, type, row) { return data; } },

            { "targets": 21, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 22, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 23, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },

            { "targets": 24, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 25, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 26, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },

            { "targets": 27, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 28, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 29, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 30, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
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
        "iDisplayLength": 10,
        "processing": false,
        "responsive": false,
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

            DataTableTotalIntGet(api, intVal, 2);
            DataTableTotalIntGet(api, intVal, 3);
            DataTableTotalIntGet(api, intVal, 5);
            DataTableTotalIntGet(api, intVal, 8);
            DataTableTotalIntGet(api, intVal, 10);
            DataTableTotalIntGet(api, intVal, 12);
            DataTableTotalIntGet(api, intVal, 14);
            DataTableTotalIntGet(api, intVal, 16);

            DataTableTotalIntGet(api, intVal, 21);
            DataTableTotalIntGet(api, intVal, 22);
            DataTableTotalIntGet(api, intVal, 23);
            DataTableTotalIntGet(api, intVal, 24);
            DataTableTotalIntGet(api, intVal, 25);
            DataTableTotalIntGet(api, intVal, 26);
            DataTableTotalIntGet(api, intVal, 27);
            DataTableTotalIntGet(api, intVal, 28);
            DataTableTotalIntGet(api, intVal, 29);
            DataTableTotalIntGet(api, intVal, 30);

            DataTableTotalPercentageGet(api, intVal, 3, 2, 4);
            DataTableTotalPercentageGet(api, intVal, 5, 3, 6);
            DataTableTotalPercentageGet(api, intVal, 8, 5, 9);

            DataTableTotalPercentageGet(api, intVal, 10, 8, 11);
            DataTableTotalPercentageGet(api, intVal, 12, 8, 13);
            DataTableTotalPercentageGet(api, intVal, 14, 8, 15);
            DataTableTotalPercentageGet(api, intVal, 16, 8, 17);

            data00 = DataTableColumnPercentageGet(api, intVal, 3, 2);
            data01 = (100 - data00).toFixed(2);

            data10 = DataTableColumnPercentageGet(api, intVal, 5, 3);
            data11 = (100 - data10).toFixed(2);

            data20 = DataTableColumnPercentageGet(api, intVal, 10, 8);
            data21 = DataTableColumnPercentageGet(api, intVal, 12, 8);
            data22 = DataTableColumnPercentageGet(api, intVal, 14, 8);
            data23 = DataTableColumnPercentageGet(api, intVal, 16, 8);

            data30 = ((api.column(12).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0)) * 100 / (api.column(2).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0))).toFixed(1);
            data31 = (100 - data30).toFixed(2);

            data40 = ((api.column(12).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0)
                + api.column(14).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0)
                + api.column(16).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0)) * 100 / (api.column(2).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0))).toFixed(1);
            data41 = (100 - data40).toFixed(2);

            data50 = DataTableColumnPercentageGet(api, intVal, 21, 12);
            data51 = DataTableColumnPercentageGet(api, intVal, 22, 12);
            data52 = DataTableColumnPercentageGet(api, intVal, 23, 12);

            data53Bar = ((api.column(21).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0)
                + api.column(22).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0)
                + api.column(23).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0)) * 100 / (api.column(12).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0))).toFixed(1);

            data53 = (100 - data53Bar).toFixed(1);

            data60 = DataTableColumnPercentageGet(api, intVal, 24, 12);
            data61 = DataTableColumnPercentageGet(api, intVal, 25, 12);
            data62 = DataTableColumnPercentageGet(api, intVal, 26, 12);
            data63Bar = ((api.column(24).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0)
                + api.column(25).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0)
                + api.column(26).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0)) * 100 / (api.column(12).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0))).toFixed(1);

            data63 = (100 - data63Bar).toFixed(1);

            data70 = DataTableColumnPercentageGet(api, intVal, 27, 12);
            data71 = DataTableColumnPercentageGet(api, intVal, 28, 12);
            data72 = DataTableColumnPercentageGet(api, intVal, 29, 12);
            data73 = DataTableColumnPercentageGet(api, intVal, 30, 12);
            data74Bar = ((api.column(27).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0)
                + api.column(28).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0)
                + api.column(29).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0)
                + api.column(30).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0)) * 100 / (api.column(12).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0))).toFixed(1);

            data74 = (100 - data74Bar).toFixed(1);
        }
    });
}


function QualifObsTickIdDScopeCumulOldGet(ActionBtnId, Icon, IsMargin, DateStringStart, DateStringEnd, IsChart) {

    ActionSpin(ActionBtnId, IsMargin);

    var PatternTable = 'QualifObsTickIdDScopeCumul';
    var PatternTableId = PatternTable + 'TableId'
    var PatternTableReportId = PatternTable + 'TableReportId';

    var data00 = 0;
    var data01 = 0;

    var data10 = 0;
    var data11 = 0;

    var data20 = 0;
    var data21 = 0;
    var data22 = 0;
    var data23 = 0;

    var data30 = 0;
    var data31 = 0;

    var data40 = 0;
    var data41 = 0;

    var data50 = 0;
    var data51 = 0;
    var data52 = 0;
    var data53Bar = 0;
    var data53 = 0;

    var data60 = 0;
    var data61 = 0;
    var data62 = 0;
    var data63Bar = 0;
    var data63 = 0;

    var data70 = 0;
    var data71 = 0;
    var data72 = 0;
    var data73 = 0;
    var data74Bar = 0;
    var data74 = 0;

    $('#' + PatternTableId).DataTable().destroy();
    $('#' + PatternTableId).DataTable({
        "dom": 'Bfrtip',
        "buttons": [
            'excel'
        ],
        "initComplete": function (settings, json) {
            ActionBtnSet(ActionBtnId, Icon, IsMargin);
            ShowReport(PatternTableReportId);

            if (IsChart == true) {
                //
                //var Title = 'Temps de parcours dépassé - Niveau jour';
                //var PatternChart = PatternTable + 'TotalLine';
                //var labels = GetColumnArray(PatternTableId, 17);
                //var data1 = GetColumnArray(PatternTableId, 3);
                //var data2 = GetColumnArray(PatternTableId, 4);
                //var data3 = GetColumnArray(PatternTableId, 7);

                //var label1 = 'TPD';
                //var label2 = 'Qualifiable';
                //var label3 = 'Qualifié';

                //document.getElementById(PatternChart + 'ChartCardId').style.border = 'transparent';
                //ChartJsLineThreeTraficHourDisplay(Title, PatternChart, labels, label1, data1, label2, data2, label3, data3, false);

                ////
                //var Title = 'Qualification du Temps de parcours dépassé - Niveau jour';
                //var PatternChart = PatternTable + 'ControlLine';
                //var labels = GetColumnArray(PatternTableId, 17);
                //var data1 = GetColumnArray(PatternTableId, 9);
                //var data2 = GetColumnArray(PatternTableId, 11);
                //var data3 = GetColumnArray(PatternTableId, 13);
                //var data4 = GetColumnArray(PatternTableId, 15);

                //var label1 = 'TPD justifié';
                //var label2 = 'TPD non-justifié';
                //var label3 = 'Qualification impossible';
                //var label4 = 'Parcours douteux';

                //document.getElementById(PatternChart + 'ChartCardId').style.border = 'transparent';
                //ChartJsLineFourTraficHourDisplay(Title, PatternChart, labels, label1, data1, label2, data2, label3, data3, label4, data4, false);

                //var Title = 'Evolution du taux de fraude au parcours confirmée';
                //var PatternChart = PatternTable + 'RateLine';
                //var labels = GetColumnArray(PatternTableId, 17);
                //var data1 = GetColumnArray(PatternTableId, 10);
                //var data2 = GetColumnArray(PatternTableId, 12);
                //var data3 = GetColumnArray(PatternTableId, 14);

                //var label1 = 'TPD justifié';
                //var label2 = 'TPD non-justifié';
                //var label3 = 'Qualification impossible';

                //document.getElementById(PatternChart + 'ChartCardId').style.border = 'transparent';
                //ChartJsLineThreeTraficHourDisplay(Title, PatternChart, labels, label1, data1, label2, data2, label3, data3, false);

                ////Doughnut 0
                //var Title = 'Taux du TPD par rapport au trafic';
                //var PatternChart = PatternTable + 'TotalDoughnut';
                //var label00 = 'Temps de parcours dépassé';
                //var label01 = '';

                //var data = {
                //    datasets: [{
                //        data: [data00, data01],
                //        backgroundColor: ['#03045e', '#adb5bd'],
                //    }],

                //    labels: [label00]
                //};

                //document.getElementById(PatternChart + 'ChartCardId').style.border = 'transparent';
                //ChartJsDoughnutOneDisplay(Title, PatternChart, data);

                ////Doughnut 1
                //var Title = 'Taux des transactions qualifiables';
                //var PatternChart = PatternTable + 'QualifiableDoughnut';
                //var label10 = 'A qualier (Vitesse <= 30Km)';
                //var label11 = '';
                //var data = {
                //    datasets: [{
                //        data: [data10, data11],
                //        backgroundColor: ['#0077b6', '#adb5bd'],
                //    }],
                //    labels: [label10]
                //};
                //document.getElementById(PatternChart + 'ChartCardId').style.border = 'transparent';
                //ChartJsDoughnutOneDisplay(Title, PatternChart, data);

                ////Doughnut 2
                //var Title = 'Qualification du Temps de parcours dépassé';
                //var PatternChart = PatternTable + 'ControlDoughnut';
                //var label20 = 'TPD justifié';
                //var label21 = 'TPD non-justifié';
                //var label22 = 'Qualification impossible';
                //var label23 = 'Parcours douteux';

                //var data = {
                //    datasets: [{
                //        data: [data20, data21, data22, data23],
                //        backgroundColor: ['#38b000', '#d90429', '#adb5bd', '#D75F05'],
                //    }],

                //    labels: [label20, label21, label22, label23]
                //};
                //document.getElementById(PatternChart + 'ChartCardId').style.border = 'transparent';
                //ChartJsDoughnutOneDisplay(Title, PatternChart, data);

                ////Doughnut 3
                //var Title = 'Taux de fraude par rapport au trafic SF';
                //var PatternChart = PatternTable + 'RateDoughnut';
                //var label30 = 'Fraude confirmée';
                //var label31 = '';
                //var data = {
                //    datasets: [{
                //        data: [data30, data31],
                //        backgroundColor: ['#d90429', '#adb5bd'],
                //    }],
                //    labels: [label30]
                //};
                //document.getElementById(PatternChart + 'ChartCardId').style.border = 'transparent';
                //ChartJsDoughnutOneDisplay(Title, PatternChart, data);

                ////Doughnut 4
                //var Title = 'Taux de fraude par rapport au trafic SF';
                //var PatternChart = PatternTable + 'RateSumDoughnut';
                //var label40 = 'Fraude confirmée + Qualification impossible + Parcours douteux';
                //var label41 = '';
                //var data = {
                //    datasets: [{
                //        data: [data40, data41],
                //        backgroundColor: ['#d90429', '#adb5bd'],
                //    }],
                //    labels: [label40]
                //};
                //document.getElementById(PatternChart + 'ChartCardId').style.border = 'transparent';
                //ChartJsDoughnutOneDisplay(Title, PatternChart, data);

                ////Doughnut 5
                //var Title = 'Fraude confirmée par classe';
                //var PatternChart = PatternTable + 'ControlClDoughnut';
                //var label50 = 'VL';
                //var label51 = 'PL1';
                //var label52 = 'PL2';
                //var label53 = '00';

                //var data = {
                //    datasets: [{
                //        data: [data50, data51, data52, data53],
                //        backgroundColor: ['#D71A04', '#A104CC', '#257BCC', '#D7A5A5'],
                //    }],

                //    labels: [label50, label51, label52, label53]
                //};
                //document.getElementById(PatternChart + 'ChartCardId').style.border = 'transparent';
                //ChartJsDoughnutOneDisplay(Title, PatternChart, data);

                ////Doughnut 6
                //var Title = 'Fraude confirmée par MP';
                //var PatternChart = PatternTable + 'ControlMpDoughnut';
                //var label60 = 'Espèce';
                //var label61 = 'Tlp Pré';
                //var label62 = 'Tlp Post';
                //var label63 = 'Autres';

                //var data = {
                //    datasets: [{
                //        data: [data60, data61, data62, data63],
                //        backgroundColor: ['#EBE31D', '#EB7F35', '#BA5319', '#5E4D4B'],
                //    }],

                //    labels: [label60, label61, label62, label63]
                //};
                //document.getElementById(PatternChart + 'ChartCardId').style.border = 'transparent';
                //ChartJsDoughnutOneDisplay(Title, PatternChart, data);

                ////Doughnut 7
                //var Title = 'Fraude confirmée par axe';
                //var PatternChart = PatternTable + 'ControlAxleDoughnut';
                //var label70 = 'Kénitra Nord - Mdiq';
                //var label71 = 'Sidi Allal Bahraoui - Oujda';
                //var label72 = 'Agadir-Berrechid-Beni mellal';
                //var label73 = 'Nassim-Safi';
                //var label74 = 'Autres';

                //var data = {
                //    datasets: [{
                //        data: [data70, data71, data72, data73, data74],
                //        backgroundColor: ['#70d6ff', '#ff70a6', '#ff9770', '#5b8e7d', '#e9ff70'],
                //    }],

                //    labels: [label70, label71, label72, label73, label74]
                //};
                //document.getElementById(PatternChart + 'ChartCardId').style.border = 'transparent';
                //ChartJsDoughnutOneDisplay(Title, PatternChart, data);

                //ShowGridReport('Grid_0000');
                //ShowGridReport('Grid_0001');
            }
        },
        "ajax": {
            "url": "/Qualif/QualifObsTickIdDScopeCumulGet",
            "type": "GET",
            "datatype": "json",
            "data": {
                DateStringStart: DateStringStart,
                DateStringEnd: DateStringEnd
            }
        },
        "columns": [
            { "data": "IsValidTrxLane" },//0 IsValidTrxLane
            { "data": "IsValidTrxBorne" },//1 IsValidTrxBorne
            { "data": "IsValidImage" },//2 IsValidImage

            { "data": "DhmValueStart" },//3
            { "data": "DhmValueEnd" },//4

            { "data": "TotalTrafic" },//5

            { "data": "ObsTickIdD" },//6
            { "data": "ObsTickIdD" },//7                       

            { "data": "TotalToQualifyObsTickIdD" },//8
            { "data": "TotalToQualifyObsTickIdD" },//9
            { "data": "TotalToQualifyObsTickIdD" },//10

            { "data": "ObsTickIdDQualified" },//11
            { "data": "ObsTickIdDQualified" },//12

            { "data": "ObsTickIdD04" },//13
            { "mData": function vehicle(data, type, dataToSet) { return DataTableRateGet(data.ObsTickIdD04, data.ObsTickIdDQualified, 2); } },//14

            { "data": "ObsTickIdD06" },//15
            { "mData": function vehicle(data, type, dataToSet) { return DataTableRateGet(data.ObsTickIdD06, data.ObsTickIdDQualified, 2); } },//16

            { "data": "ObsTickIdD03" },//17
            { "mData": function vehicle(data, type, dataToSet) { return DataTableRateGet(data.ObsTickIdD03, data.ObsTickIdDQualified, 2); } },//18

            { "data": "ObsTickIdD99" },//19
            { "mData": function vehicle(data, type, dataToSet) { return DataTableRateGet(data.ObsTickIdD03, data.ObsTickIdDQualified, 2); } },//20

            { "mData": function vehicle(data, type, dataToSet) { return GetDigits(data.Day, 2) + GetDigits(data.Month, 2) + data.Year; } },//21

            { "data": "PriceLost" },//22
            { "mData": function vehicle(data, type, dataToSet) { return GetDigits(data.Day, 2) + '/' + GetDigits(data.Month, 2); } },//23

            { "data": "ObsTickIdD06C01" },//24
            { "data": "ObsTickIdD06C02" },//25
            { "data": "ObsTickIdD06C03" },//26

            { "data": "ObsTickIdD06M01" },//27
            { "data": "ObsTickIdD06M40" },//28
            { "data": "ObsTickIdD06M41" },//29

            { "data": "ObsTickIdD06A1" },//30
            { "data": "ObsTickIdD06A3" },//31
            { "data": "ObsTickIdD06A4" },//32
            { "data": "ObsTickIdD06A5" },//33
        ],
        "columnDefs": [
            { "width": "3%", "className": "text-center", "targets": 0 },
            { "width": "3%", "className": "text-center", "targets": 1 },
            { "width": "3%", "className": "text-center", "targets": 2 },

            { "width": "3%", "className": "text-center", "targets": 3 },
            { "width": "3%", "className": "text-center", "targets": 4 },

            { "width": "3%", "className": "text-right", "targets": 5 },

            { "width": "3%", "className": "text-right", "targets": 6 },
            { "width": "3%", "className": "text-right", "targets": 7 },

            { "width": "3%", "className": "text-right", "targets": 8 },
            { "width": "3%", "className": "text-right", "targets": 9 },
            { "width": "3%", "className": "text-right", "targets": 10 },

            { "width": "3%", "className": "text-right", "targets": 11 },
            { "width": "3%", "className": "text-right", "targets": 12 },

            { "width": "3%", "className": "text-right", "targets": 13 },
            { "width": "3%", "className": "text-right", "targets": 14 },

            { "width": "3%", "className": "text-right", "targets": 15 },
            { "width": "3%", "className": "text-right", "targets": 16 },

            { "width": "3%", "className": "text-right", "targets": 17 },
            { "width": "3%", "className": "text-right", "targets": 18 },

            { "width": "3%", "className": "text-right", "targets": 19 },
            { "width": "3%", "className": "text-right", "targets": 20 },

            { "width": "3%", "className": "text-center", "targets": 21 },
            { "width": "3%", "className": "text-center", "targets": 22 },

            { "width": "3%", "className": "text-center none", "targets": 23 },

            { "width": "3%", "className": "text-right none", "targets": 24 },
            { "width": "3%", "className": "text-right none", "targets": 25 },
            { "width": "3%", "className": "text-right none", "targets": 26 },

            { "width": "3%", "className": "text-right none", "targets": 27 },
            { "width": "3%", "className": "text-right none", "targets": 28 },
            { "width": "3%", "className": "text-right none", "targets": 29 },

            { "width": "3%", "className": "text-right none", "targets": 30 },
            { "width": "3%", "className": "text-right none", "targets": 31 },
            { "width": "3%", "className": "text-right none", "targets": 32 },
            { "width": "3%", "className": "text-right none", "targets": 33 },

            { "targets": 0, "render": function (data, type, row) { return DataTableCertifiedInfoGet(data); } },
            { "targets": 1, "render": function (data, type, row) { return DataTableCertifiedInfoGet(data); } },
            { "targets": 2, "render": function (data, type, row) { return DataTableCertifiedInfoGet(data); } },

            { "targets": 3, "render": function (data, type, row) { return DataTableDateValueStartFromRowGet(row); } },
            { "targets": 4, "render": function (data, type, row) { return DataTableDateValueEndFromRowGet(row); } },

            { "targets": 5, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },

            { "targets": 6, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 7, "render": function (data, type, row) { return DataTablePercentageTwoThresholdsGet(data, row['TotalTrafic'], 2, 1, 3); } },

            { "targets": 8, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 9, "render": function (data, type, row) { return DataTableRateTwoThresholdsGet(data, row['ObsTickIdD'], 2, 70, 90); } },
            {
                "targets": 10, "render": function (data, type, row) {//Calculate-Qualif
                    var TaskId = '04';//Calculate
                    var SourceId = '19';//Counters
                    var FileTypeId = 'JB';//Qualifiable-Station
                    var DateString = GetDigits(row['Day'], 2) + GetDigits(row['Month'], 2) + row['Year'];
                    var SiteId = '--';
                    var LSId = '--';
                    var BagContainerId = '--';
                    var StationNumber = '--';
                    var LaneName = '---';
                    var PdvId = '--';
                    var BillingId = '--';
                    var CategoryId = '--';
                    var ParamId = TaskId + SourceId + FileTypeId + DateString + SiteId + LSId + BagContainerId + StationNumber + LaneName + PdvId + BillingId + CategoryId;

                    var Pattern = 'CertTaskAdd';
                    var RowId = data + ParamId;
                    var argument = '\'' + RowId + '\', \'' + ParamId + '\'';
                    var text = '';
                    var BtnClass = 'dt-btn-cl gc-bc1-cl';
                    var SpanClass = 'fas fa-redo-alt btn-icon-cl gc-c1-cl';
                    var TextClass = 'dt-text-cl';
                    return DataTableButtonGet(Pattern, RowId, argument, text, BtnClass, SpanClass, TextClass);
                }
            },

            { "targets": 11, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 12, "render": function (data, type, row) { return DataTableRateTwoThresholdsGet(data, row['TotalToQualifyObsTickIdD'], 2, 50, 90); } },

            { "targets": 13, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 14, "render": function (data, type, row) { return DataTableRateTwoThresholdsGet(row['ObsTickIdD04'], row['ObsTickIdDQualified'], 2, 80, 98); } },

            { "targets": 15, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 16, "render": function (data, type, row) { return DataTablePercentageTwoThresholdsGet(row['ObsTickIdD06'], row['ObsTickIdDQualified'], 2, 1, 3); } },

            { "targets": 17, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 18, "render": function (data, type, row) { return DataTablePercentageTwoThresholdsGet(row['ObsTickIdD03'], row['ObsTickIdDQualified'], 2, 5, 10); } },

            { "targets": 19, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 20, "render": function (data, type, row) { return DataTablePercentageTwoThresholdsGet(row['ObsTickIdD99'], row['ObsTickIdDQualified'], 2, 5, 10); } },

            { "targets": 21, "render": function (data, type, row) { return DataTableButtonGet('QualifObsTickIdDRegionSearch', data, '\'' + data + '\'', '', 'dt-btn-cl gc-bc1-cl', 'fas fa-eye btn-icon-cl gc-c1-cl', '') } },
            { "targets": 22, "render": function (data, type, row) { return DataTableFormatDoubleGet(data); } },

            { "targets": 23, "render": function (data, type, row) { return data; } },

            { "targets": 24, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 25, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 26, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },

            { "targets": 27, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 28, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 29, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },

            { "targets": 30, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 31, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 32, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 33, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
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
        "iDisplayLength": 10,
        "processing": false,
        "responsive": false,
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

            //DataTableTotalIntGet(api, intVal, 1);
            //DataTableTotalIntGet(api, intVal, 2);
            //DataTableTotalIntGet(api, intVal, 4);
            //DataTableTotalIntGet(api, intVal, 7);
            //DataTableTotalIntGet(api, intVal, 9);
            //DataTableTotalIntGet(api, intVal, 11);
            //DataTableTotalIntGet(api, intVal, 13);
            //DataTableTotalIntGet(api, intVal, 15);

            //DataTableTotalIntGet(api, intVal, 23);
            //DataTableTotalIntGet(api, intVal, 24);
            //DataTableTotalIntGet(api, intVal, 25);
            //DataTableTotalIntGet(api, intVal, 26);
            //DataTableTotalIntGet(api, intVal, 27);
            //DataTableTotalIntGet(api, intVal, 28);
            //DataTableTotalIntGet(api, intVal, 29);



            //DataTableTotalPercentageGet(api, intVal, 2, 1, 3);
            //DataTableTotalPercentageGet(api, intVal, 4, 2, 5);
            //DataTableTotalPercentageGet(api, intVal, 7, 4, 8);

            //DataTableTotalPercentageGet(api, intVal, 9, 7, 10);
            //DataTableTotalPercentageGet(api, intVal, 11, 7, 12);
            //DataTableTotalPercentageGet(api, intVal, 13, 7, 14);
            //DataTableTotalPercentageGet(api, intVal, 15, 7, 16);

            //data00 = DataTableColumnPercentageGet(api, intVal, 2, 1);
            //data01 = (100 - data00).toFixed(2);

            //data10 = DataTableColumnPercentageGet(api, intVal, 4, 2);
            //data11 = (100 - data10).toFixed(2);

            //data20 = DataTableColumnPercentageGet(api, intVal, 9, 7);
            //data21 = DataTableColumnPercentageGet(api, intVal, 11, 7);
            //data22 = DataTableColumnPercentageGet(api, intVal, 13, 7);
            //data23 = DataTableColumnPercentageGet(api, intVal, 15, 7);

            //data30 = ((api.column(11).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0)) * 100 / (api.column(1).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0))).toFixed(1);
            //data31 = (100 - data30).toFixed(2);

            //data40 = ((api.column(11).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0)
            //    + api.column(13).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0)
            //    + api.column(15).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0)) * 100 / (api.column(1).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0))).toFixed(1);
            //data41 = (100 - data40).toFixed(2);

            //data50 = DataTableColumnPercentageGet(api, intVal, 20, 11);
            //data51 = DataTableColumnPercentageGet(api, intVal, 21, 11);
            //data52 = DataTableColumnPercentageGet(api, intVal, 22, 11);

            //data53Bar = ((api.column(20).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0)
            //    + api.column(21).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0)
            //    + api.column(22).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0)) * 100 / (api.column(11).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0))).toFixed(1);

            //data53 = (100 - data53Bar).toFixed(1);

            //data60 = DataTableColumnPercentageGet(api, intVal, 23, 11);
            //data61 = DataTableColumnPercentageGet(api, intVal, 24, 11);
            //data62 = DataTableColumnPercentageGet(api, intVal, 25, 11);
            //data63Bar = ((api.column(23).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0)
            //    + api.column(24).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0)
            //    + api.column(25).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0)) * 100 / (api.column(11).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0))).toFixed(1);

            //data63 = (100 - data63Bar).toFixed(1);

            //data70 = DataTableColumnPercentageGet(api, intVal, 26, 11);
            //data71 = DataTableColumnPercentageGet(api, intVal, 27, 11);
            //data72 = DataTableColumnPercentageGet(api, intVal, 28, 11);
            //data73 = DataTableColumnPercentageGet(api, intVal, 29, 11);
            //data74Bar = ((api.column(26).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0)
            //    + api.column(27).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0)
            //    + api.column(28).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0)
            //    + api.column(29).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0)) * 100 / (api.column(11).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0))).toFixed(1);

            //data74 = (100 - data74Bar).toFixed(1);
        }
    });
}

function QualifObsTickIdDPresetGet() {

    var TimeId = ElementDropDownListValueGet('TimeId');
    var ZoneId = ElementDropDownListValueGet('ZoneId');

    QualifAllReportsHide();
    QualifAllParametersHide();
    ShowReport('ParamReportId');

    ShowParent('TimeId');
    ShowParent('ZoneId');

    ShowParent('ObsTickId');
    ShowParent('ObsMpId');
    ShowParent('ObsPassId');

    if (ZoneId == '07') {//All
        if (TimeId == '01') {//Day
            QualifObsTickIdDAllDayOpen();
        }
        else {
            ParamMessageErrorDisplay('Ce pré-réglabe n\'est pas authorisé');
        }
    }
    else {
        if (ZoneId == '05') {//Region
            if (TimeId == '01') {//Day
                QualifObsTickIdDRegionDayOpen();
            }
            else {
                ParamMessageErrorDisplay('Ce pré-réglabe n\'est pas authorisé');
            }
        }
        else {
            if (ZoneId == '01') {//Station
                if (TimeId == '01') {//Day
                    QualifObsTickIdDStationDayOpen();
                }
                else {
                    ParamMessageErrorDisplay('Ce pré-réglabe n\'est pas authorisé');
                }
            }
            else {
                if (ZoneId == '00') {//Lane
                    if (TimeId == '01') {//Day
                        QualifObsTickIdDLaneDayOpen();
                    }
                    else {
                        ParamMessageErrorDisplay('Ce pré-réglabe n\'est pas authorisé');
                    }
                }
                else {
                    if (ZoneId == '04') {//Scope
                        if (TimeId == '06') {//Cumul
                            QualifObsTickIdDScopeCumulOpen();
                        }
                        else {
                            ParamMessageErrorDisplay('Ce pré-réglabe n\'est pas authorisé');
                        }
                    }
                    else {
                        ParamMessageErrorDisplay('Ce pré-réglabe n\'est pas authorisé');
                    }
                }                
            }            
        }
    }
}

function QualifObsTickIdDAllDayDisplay(ActionBtnId, Icon, IsMargin) {

    var ActionBtnId = 'ParamActionBtnId0';
    var Icon = 'fas fa-eye';
    var IsMargin = true;

    var DateStringStart = GetDateStringFromDatePicker('DateStartId');
    var DateStringEnd = GetDateStringFromDatePicker('DateEndId');
    var IsChart = ElementBooleanGet('IsChartId');

    QualifAllReportsHide();
    ShowReport('ParamReportId');
    ParamMessageReset();

    QualifObsTickIdDAllDayGet(ActionBtnId, Icon, IsMargin, DateStringStart, DateStringEnd, IsChart);
}

function QualifObsTickIdDDayInsightGet() {

    var DateStringStart = DateStringLastWeekGet();
    var DateStringEnd = DateStringYesterdayGet();

    var PatternTable = 'QualifObsTickIdDDayHome';
    var PatternTableId = PatternTable + 'TableId'
    var PatternTableReportId = PatternTable + 'TableReportId';
    var PatternTableCardId = PatternTable + 'TableCardId';

    //style
    document.getElementById(PatternTableCardId).style.height = '700px';
    document.getElementById(PatternTableCardId).style.overflow = 'scroll';

    var data00 = 0;
    var data01 = 0;

    var data10 = 0;
    var data11 = 0;

    var data20 = 0;
    var data21 = 0;
    var data22 = 0;

    HideReport(PatternTableReportId);
    $('#' + PatternTableId).DataTable().destroy();
    $('#' + PatternTableId).DataTable({
        //"dom": 'Bfrtip',
        //"buttons": [
        //    'excel'
        //],
        "initComplete": function (settings, json) {
            //ActionBtnSet(ActionBtnId, Icon, IsMargin);
            ShowReport(PatternTableReportId);

            ////
            //var Title = 'Temps de parcours dépassé - Niveau jour';
            //var PatternChart = PatternTable + 'TotalLine';
            //var labels = GetColumnArray(PatternTableId, 17);
            //var data1 = GetColumnArray(PatternTableId, 3);
            //var data2 = GetColumnArray(PatternTableId, 4);
            //var data3 = GetColumnArray(PatternTableId, 7);

            //var label1 = 'TPD';
            //var label2 = 'Qualifiable';
            //var label3 = 'Qualifié';

            //document.getElementById(PatternChart + 'ChartCardId').style.border = 'transparent';
            //ChartJsLineThreeTraficHourDisplay(Title, PatternChart, labels, label1, data1, label2, data2, label3, data3, false);

            ////
            //var Title = 'Qualification du Temps de parcours dépassé - Niveau jour';
            //var PatternChart = PatternTable + 'ControlLine';
            //var labels = GetColumnArray(PatternTableId, 17);
            //var data1 = GetColumnArray(PatternTableId, 9);
            //var data2 = GetColumnArray(PatternTableId, 11);
            //var data3 = GetColumnArray(PatternTableId, 13);

            //var label1 = 'TPD justifié';
            //var label2 = 'TPD non-justifié';
            //var label3 = 'Qualification impossible';

            //document.getElementById(PatternChart + 'ChartCardId').style.border = 'transparent';
            //ChartJsLineThreeTraficHourDisplay(Title, PatternChart, labels, label1, data1, label2, data2, label3, data3, false);

            ////Doughnut 0
            //var Title = 'Taux du TPD par rapport au trafic';
            //var PatternChart = PatternTable + 'TotalDoughnut';
            //var label00 = 'Reste';
            //var label01 = 'Temps de parcours dépassé';

            //var data = {
            //    datasets: [{
            //        data: [data00, data01],
            //        backgroundColor: ['#7400b8', '#f8f9fa'],
            //    }],

            //    labels: [label00, label01]
            //};

            //document.getElementById(PatternChart + 'ChartCardId').style.border = 'transparent';
            //ChartJsDoughnutOneDisplay(Title, PatternChart, data);

            ////Doughnut 1
            //var Title = 'Taux des transactions qualifiables';
            //var PatternChart = PatternTable + 'QualifiableDoughnut';
            //var label10 = 'Reste';
            //var label11 = 'Qualifiables (<= 20Km)';
            //var data = {
            //    datasets: [{
            //        data: [data10, data11],
            //        backgroundColor: ['#0466c8', '#d90429'],
            //    }],
            //    labels: [label10, label11]
            //};
            //document.getElementById(PatternChart + 'ChartCardId').style.border = 'transparent';
            //ChartJsDoughnutOneDisplay(Title, PatternChart, data);

            ////Doughnut 2
            //var Title = 'Qualification du Temps de parcours dépassé';
            //var PatternChart = PatternTable + 'ControlDoughnut';
            //var label20 = 'TPD justifié';
            //var label21 = 'TPD non-justifié';
            //var label22 = 'Qualification impossible';
            //var data = {
            //    datasets: [{
            //        data: [data20, data21, data22],
            //        backgroundColor: ['#38b000', '#d90429', '#000000'],
            //    }],

            //    labels: [label20, label21, label22]
            //};
            //document.getElementById(PatternChart + 'ChartCardId').style.border = 'transparent';
            //ChartJsDoughnutOneDisplay(Title, PatternChart, data);

            //ShowReport('Grid_0000' + 'GridReportId');
            //ShowReport('Grid_0001' + 'GridReportId');
        },
        "ajax": {
            "url": "/Qualif/QualifObsTickIdDDayGet",
            "type": "GET",
            "datatype": "json",
            "data": {
                DateStringStart: DateStringStart,
                DateStringEnd: DateStringEnd
            }
        },
        "columns": [
            { "data": "" },//0
            { "data": "TotalTrafic" },//1
            { "data": "ObsTickIdD06" },//2
            { "data": "ObsTickIdD06" },//3
            { "data": "PriceLost" },//4
        ],
        "columnDefs": [
            { "width": "3%", "className": "text-center", "targets": 0 },
            { "width": "3%", "className": "text-right", "targets": 1 },
            { "width": "3%", "className": "text-right", "targets": 2 },
            { "width": "3%", "className": "text-right", "targets": 3 },
            { "width": "3%", "className": "text-right", "targets": 4 },
            

            { "targets": 0, "render": function (data, type, row) { return DataTableCertifiedInfoGet(row['IsCertified']) + ' ' + DataTableDateValueFromRowGet(row); } },
            { "targets": 1, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },            
            { "targets": 2, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 3, "render": function (data, type, row) { return DataTablePercentageTwoThresholdsGet(data, row['TotalTrafic'], 2, 1, 3); } },            
            { "targets": 4, "render": function (data, type, row) { return DataTableFormatDoubleGet(data); } },
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
        "iDisplayLength": 10,
        "processing": false,
        "responsive": true,
        "bFilter": false,
        "autoWidth": false,
        "searching": false,
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

            //DataTableTotalIntGet(api, intVal, 1);
            //DataTableTotalIntGet(api, intVal, 2);
            //DataTableTotalIntGet(api, intVal, 4);
            //DataTableTotalIntGet(api, intVal, 7);
            //DataTableTotalIntGet(api, intVal, 9);
            //DataTableTotalIntGet(api, intVal, 11);
            //DataTableTotalIntGet(api, intVal, 13);

            //DataTableTotalPercentageGet(api, intVal, 2, 1, 3);
            //DataTableTotalPercentageGet(api, intVal, 4, 2, 5);
            //DataTableTotalPercentageGet(api, intVal, 7, 4, 8);

            //DataTableTotalPercentageGet(api, intVal, 9, 7, 10);
            //DataTableTotalPercentageGet(api, intVal, 11, 7, 12);
            //DataTableTotalPercentageGet(api, intVal, 13, 7, 14);

            //data00 = DataTableColumnPercentageGet(api, intVal, 2, 1);
            //data01 = (100 - data00).toFixed(2);

            //data10 = DataTableColumnPercentageGet(api, intVal, 4, 2);
            //data11 = (100 - data10).toFixed(2);

            //data20 = DataTableColumnPercentageGet(api, intVal, 9, 7);
            //data21 = DataTableColumnPercentageGet(api, intVal, 11, 7);
            //data22 = DataTableColumnPercentageGet(api, intVal, 13, 7);
        }
    });
}

function QualifObsTickIdDAllDayGet(ActionBtnId, Icon, IsMargin, DateStringStart, DateStringEnd, IsChart) {

    ActionSpin(ActionBtnId, IsMargin);

    var PatternTable = 'QualifObsTickIdDDay';
    var PatternTableId = PatternTable + 'TableId'
    var PatternTableReportId = PatternTable + 'TableReportId';

    var data00 = 0;
    var data01 = 0;

    var data10 = 0;
    var data11 = 0;

    var data20 = 0;
    var data21 = 0;
    var data22 = 0;
    var data23 = 0;

    var data30 = 0;
    var data31 = 0;

    var data40 = 0;
    var data41 = 0;

    var data50 = 0;
    var data51 = 0;
    var data52 = 0;
    var data53Bar = 0;
    var data53 = 0;

    var data60 = 0;
    var data61 = 0;
    var data62 = 0;
    var data63Bar = 0;
    var data63 = 0;

    var data70 = 0;
    var data71 = 0;
    var data72 = 0;
    var data73 = 0;
    var data74Bar = 0;
    var data74 = 0;

    $('#' + PatternTableId).DataTable().destroy();
    $('#' + PatternTableId).DataTable({
        //"dom": 'Bfrtip',
        //"buttons": [
        //    'excel'
        //],
        "dom": 'Bfrtip',
        "buttons": {
            buttons: [
                {
                    text: 'PDF',
                    action: function (e, dt, node, config) {
                        var ZoneId = '07';
                        var TimeId = '01';
                        var RegionId = '0';
                        var LSId = '0';
                        var StationNumber = '0';
                        var LaneName = '0';
                        var FileType = 'PDF';
                        QualifObsTickIdDTableExport(ZoneId, TimeId, DateStringStart, DateStringEnd, RegionId, LSId, StationNumber, LaneName, FileType);
                    }
                },
                {
                    text: 'Excel',
                    action: function (e, dt, node, config) {
                        var ZoneId = '07';
                        var TimeId = '01';
                        var RegionId = '0';
                        var LSId = '0';
                        var StationNumber = '0';
                        var LaneName = '0';
                        var FileType = 'Excel';
                        QualifObsTickIdDTableExport(ZoneId, TimeId, DateStringStart, DateStringEnd, RegionId, LSId, StationNumber, LaneName, FileType);
                    }
                }
            ]
        },
        "initComplete": function (settings, json) {
            ActionBtnSet(ActionBtnId, Icon, IsMargin);
            ShowReport(PatternTableReportId);

            if (IsChart == true) {

                if (DateStringStart - DateStringEnd != 0) {
                    //
                    var PatternChartCommon = 'QualifObsTickIdD';
                    var PatternChartDiff = 'Global par jour';
                    var Title = 'Temps de parcours dépassé';
                    var PatternChart = PatternChartCommon + 'TotalLine';
                    var labels = GetColumnArray(PatternTableId, 17);
                    var data1 = GetColumnArray(PatternTableId, 3);
                    var data2 = GetColumnArray(PatternTableId, 4);
                    var data3 = GetColumnArray(PatternTableId, 7);

                    var label1 = 'TPD';
                    var label2 = 'Qualifiable';
                    var label3 = 'Qualifié';

                    document.getElementById(PatternChart + 'ChartCardId').style.border = 'transparent';
                    ChartJsLineThreeTraficHourDisplay(Title, PatternChart, labels, label1, data1, label2, data2, label3, data3, false);

                    //
                    var Title = 'Qualification du Temps de parcours dépassé';
                    var PatternChart = PatternChartCommon + 'ControlLine';
                    var labels = GetColumnArray(PatternTableId, 17);
                    var data1 = GetColumnArray(PatternTableId, 9);
                    var data2 = GetColumnArray(PatternTableId, 11);
                    var data3 = GetColumnArray(PatternTableId, 13);
                    var data4 = GetColumnArray(PatternTableId, 15);

                    var label1 = 'TPD justifié';
                    var label2 = 'TPD non-justifié';
                    var label3 = 'Qualification impossible';
                    var label4 = 'Parcours douteux';

                    document.getElementById(PatternChart + 'ChartCardId').style.border = 'transparent';
                    ChartJsLineFourTraficHourDisplay(Title, PatternChart, labels, label1, data1, label2, data2, label3, data3, label4, data4, false);

                    var Title = 'Evolution du taux de fraude au parcours confirmée';
                    var PatternChart = PatternChartCommon + 'RateLine';
                    var labels = GetColumnArray(PatternTableId, 17);
                    var data1 = GetColumnArray(PatternTableId, 10);
                    var data2 = GetColumnArray(PatternTableId, 12);
                    var data3 = GetColumnArray(PatternTableId, 14);

                    var label1 = 'TPD justifié';
                    var label2 = 'TPD non-justifié';
                    var label3 = 'Qualification impossible';

                    document.getElementById(PatternChart + 'ChartCardId').style.border = 'transparent';
                    ChartJsLineThreeTraficHourDisplay(Title, PatternChart, labels, label1, data1, label2, data2, label3, data3, false);

                    ShowGridReport('Grid_0000');
                }

                //Doughnut 0
                var Title = 'Taux du TPD par rapport au trafic';
                var PatternChart = PatternChartCommon + 'TotalDoughnut';
                var label00 = 'Temps de parcours dépassé';
                var label01 = '';

                var data = {
                    datasets: [{
                        data: [data00, data01],
                        backgroundColor: ['#03045e', '#adb5bd'],
                    }],

                    labels: [label00]
                };

                document.getElementById(PatternChart + 'ChartCardId').style.border = 'transparent';
                ChartJsDoughnutOneDisplay(Title, PatternChart, data);

                //Doughnut 1
                var Title = 'Taux des transactions qualifiables';
                var PatternChart = PatternChartCommon + 'QualifiableDoughnut';
                var label10 = 'A qualier (Vitesse <= 30Km)';
                var label11 = '';
                var data = {
                    datasets: [{
                        data: [data10, data11],
                        backgroundColor: ['#0077b6', '#adb5bd'],
                    }],
                    labels: [label10]
                };
                document.getElementById(PatternChart + 'ChartCardId').style.border = 'transparent';
                ChartJsDoughnutOneDisplay(Title, PatternChart, data);

                //Doughnut 2
                var Title = 'Qualification du Temps de parcours dépassé';
                var PatternChart = PatternChartCommon + 'ControlDoughnut';
                var label20 = 'TPD justifié';
                var label21 = 'TPD non-justifié';
                var label22 = 'Qualification impossible';
                var label23 = 'Parcours douteux';

                var data = {
                    datasets: [{
                        data: [data20, data21, data22, data23],
                        backgroundColor: ['#38b000', '#d90429', '#adb5bd', '#D75F05'],
                    }],

                    labels: [label20, label21, label22, label23]
                };
                document.getElementById(PatternChart + 'ChartCardId').style.border = 'transparent';
                ChartJsDoughnutOneDisplay(Title, PatternChart, data);

                //Doughnut 3
                var Title = 'Taux de fraude par rapport au trafic SF';
                var PatternChart = PatternChartCommon + 'RateDoughnut';
                var label30 = 'Fraude confirmée';
                var label31 = '';
                var data = {
                    datasets: [{
                        data: [data30, data31],
                        backgroundColor: ['#d90429', '#adb5bd'],
                    }],
                    labels: [label30]
                };
                document.getElementById(PatternChart + 'ChartCardId').style.border = 'transparent';
                ChartJsDoughnutOneDisplay(Title, PatternChart, data);

                //Doughnut 4
                var Title = 'Taux de fraude par rapport au trafic SF';
                var PatternChart = PatternChartCommon + 'RateSumDoughnut';
                var label40 = 'Fraude confirmée + Qualification impossible + Parcours douteux';
                var label41 = '';
                var data = {
                    datasets: [{
                        data: [data40, data41],
                        backgroundColor: ['#d90429', '#adb5bd'],
                    }],
                    labels: [label40]
                };
                document.getElementById(PatternChart + 'ChartCardId').style.border = 'transparent';
                ChartJsDoughnutOneDisplay(Title, PatternChart, data);

                //Doughnut 5
                var Title = 'Fraude confirmée par classe';
                var PatternChart = PatternChartCommon + 'ControlClDoughnut';
                var label50 = 'VL';
                var label51 = 'PL1';
                var label52 = 'PL2';
                var label53 = '00';

                var data = {
                    datasets: [{
                        data: [data50, data51, data52, data53],
                        backgroundColor: ['#D71A04', '#A104CC', '#257BCC', '#D7A5A5'],
                    }],

                    labels: [label50, label51, label52, label53]
                };
                document.getElementById(PatternChart + 'ChartCardId').style.border = 'transparent';
                ChartJsDoughnutOneDisplay(Title, PatternChart, data);

                //Doughnut 6
                var Title = 'Fraude confirmée par MP';
                var PatternChart = PatternChartCommon + 'ControlMpDoughnut';
                var label60 = 'Espèce';
                var label61 = 'Tlp Pré';
                var label62 = 'Tlp Post';
                var label63 = 'Autres';

                var data = {
                    datasets: [{
                        data: [data60, data61, data62, data63],
                        backgroundColor: ['#EBE31D', '#EB7F35', '#BA5319', '#5E4D4B'],
                    }],

                    labels: [label60, label61, label62, label63]
                };
                document.getElementById(PatternChart + 'ChartCardId').style.border = 'transparent';
                ChartJsDoughnutOneDisplay(Title, PatternChart, data);

                //Doughnut 7
                var Title = 'Fraude confirmée par axe';
                var PatternChart = PatternChartCommon + 'ControlAxleDoughnut';
                var label70 = 'Kénitra Nord - Mdiq';
                var label71 = 'Sidi Allal Bahraoui - Oujda';
                var label72 = 'Agadir-Berrechid-Beni mellal';
                var label73 = 'Nassim-Safi';
                var label74 = 'Autres';

                var data = {
                    datasets: [{
                        data: [data70, data71, data72, data73, data74],
                        backgroundColor: ['#70d6ff', '#ff70a6', '#ff9770', '#5b8e7d', '#e9ff70'],
                    }],

                    labels: [label70, label71, label72, label73, label74]
                };
                document.getElementById(PatternChart + 'ChartCardId').style.border = 'transparent';
                ChartJsDoughnutOneDisplay(Title, PatternChart, data);

                
                ShowGridReport('Grid_0001');
            }           
        },
        "ajax": {
            "url": "/Qualif/QualifObsTickIdDDayGet",
            "type": "GET",
            "datatype": "json",
            "data": {
                DateStringStart: DateStringStart,
                DateStringEnd: DateStringEnd
            }
        },
        "columns": [
            { "data": "" },//0
            { "data": "TotalTrafic" },//1

            { "data": "ObsTotal" },//2
            { "data": "ObsTotal" },//3                       

            { "data": "TotalToQualify" },//4
            { "data": "TotalToQualify" },//5
            { "data": "TotalToQualify" },//6

            { "data": "ObsQualified" },//7
            { "data": "ObsQualified" },//8

            { "data": "ObsCtr04" },//9
            { "mData": function vehicle(data, type, dataToSet) { return DataTableRateGet(data.ObsTickIdD04, data.ObsTickIdDQualified, 2); } },//10

            { "data": "ObsCtr06" },//11
            { "mData": function vehicle(data, type, dataToSet) { return DataTableRateGet(data.ObsTickIdD06, data.ObsTickIdDQualified, 2); } },//12

            { "data": "ObsCtr03" },//13
            { "mData": function vehicle(data, type, dataToSet) { return DataTableRateGet(data.ObsTickIdD03, data.ObsTickIdDQualified, 2); } },//14

            { "data": "ObsCtr99" },//15
            { "mData": function vehicle(data, type, dataToSet) { return DataTableRateGet(data.ObsTickIdD03, data.ObsTickIdDQualified, 2); } },//16

            { "mData": function vehicle(data, type, dataToSet) { return GetDigits(data.Day, 2) + GetDigits(data.Month, 2) + data.Year; } },//17

            { "data": "ObsPriceLostMaxPath" },//18
            { "mData": function vehicle(data, type, dataToSet) { return GetDigits(data.Day, 2) + '/' + GetDigits(data.Month, 2); } },//19

            { "data": "ObsC01" },//20
            { "data": "ObsC02" },//21
            { "data": "ObsC03" },//22

            { "data": "ObsM01" },//23
            { "data": "ObsM40" },//24
            { "data": "ObsM41" },//25

            { "data": "ObsA1" },//26
            { "data": "ObsA3" },//27
            { "data": "ObsA4" },//28
            { "data": "ObsA5" },//29
        ],
        "columnDefs": [
            { "width": "3%", "className": "text-center", "targets": 0 },
            { "width": "3%", "className": "text-right", "targets": 1 },

            { "width": "3%", "className": "text-right", "targets": 2 },
            { "width": "3%", "className": "text-right", "targets": 3 },

            { "width": "3%", "className": "text-right", "targets": 4 },
            { "width": "3%", "className": "text-right", "targets": 5 },
            { "width": "3%", "className": "text-right", "targets": 6 },

            { "width": "3%", "className": "text-right", "targets": 7 },
            { "width": "3%", "className": "text-right", "targets": 8 },

            { "width": "3%", "className": "text-right", "targets": 9 },
            { "width": "3%", "className": "text-right", "targets": 10 },

            { "width": "3%", "className": "text-right", "targets": 11 },
            { "width": "3%", "className": "text-right", "targets": 12 },

            { "width": "3%", "className": "text-right", "targets": 13 },
            { "width": "3%", "className": "text-right", "targets": 14 },

            { "width": "3%", "className": "text-right", "targets": 15 },
            { "width": "3%", "className": "text-right", "targets": 16 },

            { "width": "3%", "className": "text-center", "targets": 17 },
            { "width": "3%", "className": "text-center", "targets": 18 },

            { "width": "3%", "className": "text-center none", "targets": 19 },

            { "width": "3%", "className": "text-right none", "targets": 20 },
            { "width": "3%", "className": "text-right none", "targets": 21 },
            { "width": "3%", "className": "text-right none", "targets": 22 },

            { "width": "3%", "className": "text-right none", "targets": 23 },
            { "width": "3%", "className": "text-right none", "targets": 24 },
            { "width": "3%", "className": "text-right none", "targets": 25 },

            { "width": "3%", "className": "text-right none", "targets": 26 },
            { "width": "3%", "className": "text-right none", "targets": 27 },
            { "width": "3%", "className": "text-right none", "targets": 28 },
            { "width": "3%", "className": "text-right none", "targets": 29 },

            { "targets": 0, "render": function (data, type, row) { return DataTableCertifiedInfoGet(row['IsCertified']) + ' ' + DataTableDateValueFromRowGet(row); } },
            { "targets": 1, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },

            { "targets": 2, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 3, "render": function (data, type, row) { return DataTablePercentageTwoThresholdsGet(data, row['TotalTrafic'], 2, 1, 3); } },

            { "targets": 4, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 5, "render": function (data, type, row) { return DataTableRateTwoThresholdsGet(data, row['ObsTotal'], 2, 70, 90); } },
            {
                "targets": 6, "render": function (data, type, row) {//Calculate-Qualif
                    var TaskId = '04';//Calculate
                    var SourceId = '19';//Counters
                    var FileTypeId = 'JB';//Qualifiable
                    var DateString = GetDigits(row['Day'], 2) + GetDigits(row['Month'], 2) + row['Year'];
                    var RegionId = '--';
                    var LSId = '--';
                    var AxleId = '--';
                    var StationNumber = '--';
                    var LaneName = '---';
                    var PdvId = '--';
                    var BillingId = '--';
                    var CategoryId = '--';
                    var ParamId = TaskId + SourceId + FileTypeId + DateString + RegionId + LSId + AxleId + StationNumber + LaneName + PdvId + BillingId + CategoryId;

                    var Pattern = 'CertTaskAdd';
                    var RowId = data + ParamId;
                    var argument = '\'' + RowId + '\', \'' + ParamId + '\'';
                    var text = '';
                    var BtnClass = 'dt-btn-cl gc-bc1-cl';
                    var SpanClass = 'fas fa-redo-alt btn-icon-cl gc-c1-cl';
                    var TextClass = 'dt-text-cl';
                    var Btn1 = DataTableButtonGet(Pattern, RowId, argument, text, BtnClass, SpanClass, TextClass);

                    var TaskId = '04';//Calculate
                    var SourceId = '11';//Counters
                    var FileTypeId = 'HL';//QualifTrxLaneObsTickIdD
                    var DateString = GetDigits(row['Day'], 2) + GetDigits(row['Month'], 2) + row['Year'];
                    var RegionId = '--';
                    var LSId = '--';
                    var AxleId = '--';
                    var StationNumber = '--';
                    var LaneName = '---';
                    var PdvId = '--';
                    var BillingId = '--';
                    var CategoryId = '--';
                    var ParamId = TaskId + SourceId + FileTypeId + DateString + RegionId + LSId + AxleId + StationNumber + LaneName + PdvId + BillingId + CategoryId;

                    var Pattern = 'CertTaskAdd';
                    var RowId = data + ParamId;
                    var argument = '\'' + RowId + '\', \'' + ParamId + '\'';
                    var text = '';
                    var BtnClass = 'dt-btn-cl gc-bc1-cl';
                    var SpanClass = 'fas fa-redo-alt btn-icon-cl gc-c1-cl';
                    var TextClass = 'dt-text-cl';
                    var Btn2 = DataTableButtonGet(Pattern, RowId, argument, text, BtnClass, SpanClass, TextClass);

                    return Btn1 + Btn2;
                }
            },

            { "targets": 7, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 8, "render": function (data, type, row) { return DataTableRateTwoThresholdsGet(data, row['TotalToQualify'], 2, 50, 90); } },

            { "targets": 9, "render": function (data, type, row) { return DataTableFormatIntGet(data); } }, 
            { "targets": 10, "render": function (data, type, row) { return DataTableRateTwoThresholdsGet(row['ObsCtr04'], row['ObsQualified'], 2, 80, 98); } },

            { "targets": 11, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 12, "render": function (data, type, row) { return DataTablePercentageTwoThresholdsGet(row['ObsCtr06'], row['ObsQualified'], 2, 1, 3); } },

            { "targets": 13, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 14, "render": function (data, type, row) { return DataTablePercentageTwoThresholdsGet(row['ObsCtr03'], row['ObsQualified'], 2, 5, 10); } },

            { "targets": 15, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 16, "render": function (data, type, row) { return DataTablePercentageTwoThresholdsGet(row['ObsCtr99'], row['ObsQualified'], 2, 5, 10); } },

            { "targets": 17, "render": function (data, type, row) { return DataTableButtonGet('QualifObsTickIdDRegionDaySearch', data, '\'' + data + '\'', '', 'dt-btn-cl gc-bc1-cl', 'fas fa-eye btn-icon-cl gc-c1-cl', '') } },
            { "targets": 18, "render": function (data, type, row) { return DataTableFormatDoubleGet(data); } },

            { "targets": 19, "render": function (data, type, row) { return data; } },

            { "targets": 20, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 21, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 22, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },

            { "targets": 23, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 24, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 25, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },

            { "targets": 26, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 27, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 28, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 29, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
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
        "iDisplayLength": 10,
        "processing": false,
        "responsive": false,
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

            DataTableTotalIntGet(api, intVal, 1);
            DataTableTotalIntGet(api, intVal, 2);
            DataTableTotalIntGet(api, intVal, 4);
            DataTableTotalIntGet(api, intVal, 7);
            DataTableTotalIntGet(api, intVal, 9);
            DataTableTotalIntGet(api, intVal, 11);
            DataTableTotalIntGet(api, intVal, 13);
            DataTableTotalIntGet(api, intVal, 15);

            DataTableTotalIntGet(api, intVal, 23);
            DataTableTotalIntGet(api, intVal, 24);
            DataTableTotalIntGet(api, intVal, 25);
            DataTableTotalIntGet(api, intVal, 26);
            DataTableTotalIntGet(api, intVal, 27);
            DataTableTotalIntGet(api, intVal, 28);
            DataTableTotalIntGet(api, intVal, 29);



            DataTableTotalPercentageGet(api, intVal, 2, 1, 3);
            DataTableTotalPercentageGet(api, intVal, 4, 2, 5);
            DataTableTotalPercentageGet(api, intVal, 7, 4, 8);

            DataTableTotalPercentageGet(api, intVal, 9, 7, 10);
            DataTableTotalPercentageGet(api, intVal, 11, 7, 12);
            DataTableTotalPercentageGet(api, intVal, 13, 7, 14);
            DataTableTotalPercentageGet(api, intVal, 15, 7, 16);

            data00 = DataTableColumnPercentageGet(api, intVal, 2, 1);
            data01 = (100 - data00).toFixed(2);

            data10 = DataTableColumnPercentageGet(api, intVal, 4, 2);
            data11 = (100 - data10).toFixed(2);

            data20 = DataTableColumnPercentageGet(api, intVal, 9, 7);
            data21 = DataTableColumnPercentageGet(api, intVal, 11, 7);
            data22 = DataTableColumnPercentageGet(api, intVal, 13, 7);
            data23 = DataTableColumnPercentageGet(api, intVal, 15, 7);

            data30 = ((api.column(11).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0)) * 100 / (api.column(1).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0))).toFixed(1);
            data31 = (100 - data30).toFixed(2);

            data40 = ((api.column(11).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0)
                + api.column(13).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0)
                + api.column(15).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0)) * 100 / (api.column(1).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0))).toFixed(1);
            data41 = (100 - data40).toFixed(2);

            data50 = DataTableColumnPercentageGet(api, intVal, 20, 11);
            data51 = DataTableColumnPercentageGet(api, intVal, 21, 11);
            data52 = DataTableColumnPercentageGet(api, intVal, 22, 11);

            data53Bar = ((api.column(20).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0)
                + api.column(21).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0)
                + api.column(22).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0)) * 100 / (api.column(11).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0))).toFixed(1);

            data53 = (100 - data53Bar).toFixed(1);

            data60 = DataTableColumnPercentageGet(api, intVal, 23, 11);
            data61 = DataTableColumnPercentageGet(api, intVal, 24, 11);
            data62 = DataTableColumnPercentageGet(api, intVal, 25, 11);
            data63Bar = ((api.column(23).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0)
                + api.column(24).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0)
                + api.column(25).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0)) * 100 / (api.column(11).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0))).toFixed(1);

            data63 = (100 - data63Bar).toFixed(1);

            data70 = DataTableColumnPercentageGet(api, intVal, 26, 11);
            data71 = DataTableColumnPercentageGet(api, intVal, 27, 11);
            data72 = DataTableColumnPercentageGet(api, intVal, 28, 11);
            data73 = DataTableColumnPercentageGet(api, intVal, 29, 11);
            data74Bar = ((api.column(26).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0)
                        + api.column(27).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0)
                        + api.column(28).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0)
                        + api.column(29).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0)) * 100 / (api.column(11).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0))).toFixed(1);

            data74 = (100 - data74Bar).toFixed(1);
        }
    });
}


function QualifObsTickIdDRegionDayDisplay() {

    var ActionBtnId = 'ParamActionBtnId0';
    var Icon = 'fas fa-eye';
    var IsMargin = true;   
  
    var DateStringStart = GetDateStringFromDatePicker('DateStartId');
    var DateStringEnd = GetDateStringFromDatePicker('DateEndId');
    var IsChart = ElementBooleanGet('IsChartId');
    var RegionId = GetElementValue('RegionId');

    QualifAllReportsHide();
    ShowReport('ParamReportId');
    ParamMessageReset();

    QualifObsTickIdDRegionDayGet(ActionBtnId, Icon, IsMargin, IsChart,
                              DateStringStart, DateStringEnd, RegionId);
}


function QualifObsTickIdDRegionDaySearch(Id) {
    var ActionBtnId = new String('QualifObsTickIdDRegionDaySearch' + 'BtnId' + Id);
    var Icon = 'fas fa-eye btn-icon-cl gc-c1-cl';
    var IsMargin = false;
    var IsChart = false;

    ActionSpin(ActionBtnId, IsMargin);    

    HideTableReport('QualifObsTickIdDStation');
    HideTableReport('QualifObsTickIdDLaneDay');
    HideTableReport('QualifPath');

    var DateStringStart = new String(Id).substr(0, 8);
    var DateStringEnd = new String(Id).substr(0, 8);
    var RegionId = '0';

    QualifObsTickIdDRegionDayGet(ActionBtnId, Icon, IsMargin, IsChart,
                              DateStringStart, DateStringEnd, RegionId);
}


function QualifObsTickIdDRegionDayGet(ActionBtnId, Icon, IsMargin, IsChart,
                                   DateStringStart, DateStringEnd, RegionId) {

    ActionSpin(ActionBtnId, IsMargin);

    HideTableReport('QualifObsTickIdDStation');

    var PatternTable = 'QualifObsTickIdDRegion';
    var PatternTableId = PatternTable + 'TableId'
    var PatternTableReportId = PatternTable + 'TableReportId';

    var data00 = 0;
    var data01 = 0;

    var data10 = 0;
    var data11 = 0;

    var data20 = 0;
    var data21 = 0;
    var data22 = 0;
    var data23 = 0;

    var data30 = 0;
    var data31 = 0;

    var data40 = 0;
    var data41 = 0;

    var data50 = 0;
    var data51 = 0;
    var data52 = 0;
    var data53Bar = 0;
    var data53 = 0;

    var data60 = 0;
    var data61 = 0;
    var data62 = 0;
    var data63Bar = 0;
    var data63 = 0;

    var data70 = 0;
    var data71 = 0;
    var data72 = 0;
    var data73 = 0;
    var data74Bar = 0;
    var data74 = 0;


    $('#' + PatternTableId).DataTable().destroy();
    $('#' + PatternTableId).DataTable({
        //"dom": 'Bfrtip',
        //"buttons": [
        //    'excel'
        //],
        "dom": 'Bfrtip',
        "buttons": {
            buttons: [
                {
                    text: 'PDF',
                    action: function (e, dt, node, config) {
                        var ZoneId = '05';
                        var TimeId = '01';
                        var LSId = '0';
                        var StationNumber = '0';
                        var LaneName = '0';
                        var FileType = 'PDF';
                        QualifObsTickIdDTableExport(ZoneId, TimeId, DateStringStart, DateStringEnd, RegionId, LSId, StationNumber, LaneName, FileType);
                    }
                },
                {
                    text: 'Excel',
                    action: function (e, dt, node, config) {
                        var ZoneId = '05';
                        var TimeId = '01';
                        var LSId = '0';
                        var StationNumber = '0';
                        var LaneName = '0';
                        var FileType = 'Excel';
                        QualifObsTickIdDTableExport(ZoneId, TimeId, DateStringStart, DateStringEnd, RegionId, LSId, StationNumber, LaneName, FileType);
                    }
                }
            ]
        },
        "initComplete": function (settings, json) {
            ActionBtnSet(ActionBtnId, Icon, IsMargin);
            ShowReport(PatternTableReportId);

            if (IsChart == true && RegionId != '0') {


                if (DateStringStart - DateStringEnd != 0) {
                    var PatternChartCommon = 'QualifObsTickIdD';
                    var PatternChartDiff = 'Région par jour';

                    var Title = 'Temps de parcours dépassé - ' + PatternChartDiff;
                    var PatternChart = PatternChartCommon + 'TotalLine';
                    var labels = GetColumnArray(PatternTableId, 18);
                    var data1 = GetColumnArray(PatternTableId, 4);
                    var data2 = GetColumnArray(PatternTableId, 5);
                    var data3 = GetColumnArray(PatternTableId, 8);

                    var label1 = 'TPD';
                    var label2 = 'Qualifiable';
                    var label3 = 'Qualifié';

                    document.getElementById(PatternChart + 'ChartCardId').style.border = 'transparent';
                    ChartJsLineThreeTraficHourDisplay(Title, PatternChart, labels, label1, data1, label2, data2, label3, data3, false);

                    //
                    var Title = 'Qualification du Temps de parcours dépassé - ' + PatternChartDiff;
                    var PatternChart = PatternChartCommon + 'ControlLine';
                    var labels = GetColumnArray(PatternTableId, 18);
                    var data1 = GetColumnArray(PatternTableId, 10);
                    var data2 = GetColumnArray(PatternTableId, 12);
                    var data3 = GetColumnArray(PatternTableId, 14);
                    var data4 = GetColumnArray(PatternTableId, 16);

                    var label1 = 'TPD justifié';
                    var label2 = 'TPD non-justifié';
                    var label3 = 'Qualification impossible';
                    var label4 = 'Parcours douteux';

                    document.getElementById(PatternChart + 'ChartCardId').style.border = 'transparent';
                    ChartJsLineFourTraficHourDisplay(Title, PatternChart, labels, label1, data1, label2, data2, label3, data3, label4, data4, false);

                    var Title = 'Evolution du taux de fraude au parcours confirmée - ' + PatternChartDiff;
                    var PatternChart = PatternChartCommon + 'RateLine';
                    var labels = GetColumnArray(PatternTableId, 18);
                    var data1 = GetColumnArray(PatternTableId, 11);
                    var data2 = GetColumnArray(PatternTableId, 13);
                    var data3 = GetColumnArray(PatternTableId, 15);

                    var label1 = 'TPD justifié';
                    var label2 = 'TPD non-justifié';
                    var label3 = 'Qualification impossible';

                    document.getElementById(PatternChart + 'ChartCardId').style.border = 'transparent';
                    ChartJsLineThreeTraficHourDisplay(Title, PatternChart, labels, label1, data1, label2, data2, label3, data3, false);

                    ShowGridReport('Grid_0000');
                }
                
                //Doughnut 0
                var Title = 'Taux du TPD par rapport au trafic - ' + PatternChartDiff;
                var PatternChart = PatternChartCommon + 'TotalDoughnut';
                var label00 = 'Temps de parcours dépassé';
                var label01 = '';

                var data = {
                    datasets: [{
                        data: [data00, data01],
                        backgroundColor: ['#03045e', '#adb5bd'],
                    }],

                    labels: [label00]
                };

                document.getElementById(PatternChart + 'ChartCardId').style.border = 'transparent';
                ChartJsDoughnutOneDisplay(Title, PatternChart, data);

                ////Doughnut 1
                var Title = 'Taux des transactions qualifiables - ' + PatternChartDiff;
                var PatternChart = PatternChartCommon + 'QualifiableDoughnut';
                var label10 = 'A qualier (Vitesse <= 30Km)';
                var label11 = '';
                var data = {
                    datasets: [{
                        data: [data10, data11],
                        backgroundColor: ['#0077b6', '#adb5bd'],
                    }],
                    labels: [label10]
                };
                document.getElementById(PatternChart + 'ChartCardId').style.border = 'transparent';
                ChartJsDoughnutOneDisplay(Title, PatternChart, data);

                //Doughnut 2
                var Title = 'Qualification du Temps de parcours dépassé - ' + PatternChartDiff;
                var PatternChart = PatternChartCommon + 'ControlDoughnut';
                var label20 = 'TPD justifié';
                var label21 = 'TPD non-justifié';
                var label22 = 'Qualification impossible';
                var label23 = 'Parcours douteux';

                var data = {
                    datasets: [{
                        data: [data20, data21, data22, data23],
                        backgroundColor: ['#38b000', '#d90429', '#adb5bd', '#D75F05'],
                    }],

                    labels: [label20, label21, label22, label23]
                };
                document.getElementById(PatternChart + 'ChartCardId').style.border = 'transparent';
                ChartJsDoughnutOneDisplay(Title, PatternChart, data);

                //Doughnut 3
                var Title = 'Taux de fraude par rapport au trafic SF - ' + PatternChartDiff;
                var PatternChart = PatternChartCommon + 'RateDoughnut';
                var label30 = 'Fraude confirmée';
                var label31 = '';
                var data = {
                    datasets: [{
                        data: [data30, data31],
                        backgroundColor: ['#d90429', '#adb5bd'],
                    }],
                    labels: [label30]
                };
                document.getElementById(PatternChart + 'ChartCardId').style.border = 'transparent';
                ChartJsDoughnutOneDisplay(Title, PatternChart, data);

                //Doughnut 4
                var Title = 'Taux de fraude par rapport au trafic SF - ' + PatternChartDiff;
                var PatternChart = PatternChartCommon + 'RateSumDoughnut';
                var label40 = 'Fraude confirmée + Qualification impossible + Parcours douteux';
                var label41 = '';
                var data = {
                    datasets: [{
                        data: [data40, data41],
                        backgroundColor: ['#d90429', '#adb5bd'],
                    }],
                    labels: [label40]
                };
                document.getElementById(PatternChart + 'ChartCardId').style.border = 'transparent';
                ChartJsDoughnutOneDisplay(Title, PatternChart, data);

                //Doughnut 5
                var Title = 'Fraude confirmée par classe - ' + PatternChartDiff;
                var PatternChart = PatternChartCommon + 'ControlClDoughnut';
                var label50 = 'VL';
                var label51 = 'PL1';
                var label52 = 'PL2';
                var label53 = '00';

                var data = {
                    datasets: [{
                        data: [data50, data51, data52, data53],
                        backgroundColor: ['#D71A04', '#A104CC', '#257BCC', '#D7A5A5'],
                    }],

                    labels: [label50, label51, label52, label53]
                };
                document.getElementById(PatternChart + 'ChartCardId').style.border = 'transparent';
                ChartJsDoughnutOneDisplay(Title, PatternChart, data);

                //Doughnut 6
                var Title = 'Fraude confirmée par MP - ' + PatternChartDiff;
                var PatternChart = PatternChartCommon + 'ControlMpDoughnut';
                var label60 = 'Espèce';
                var label61 = 'Tlp Pré';
                var label62 = 'Tlp Post';
                var label63 = 'Autres';

                var data = {
                    datasets: [{
                        data: [data60, data61, data62, data63],
                        backgroundColor: ['#EBE31D', '#EB7F35', '#BA5319', '#5E4D4B'],
                    }],

                    labels: [label60, label61, label62, label63]
                };
                document.getElementById(PatternChart + 'ChartCardId').style.border = 'transparent';
                ChartJsDoughnutOneDisplay(Title, PatternChart, data);

                //Doughnut 7
                var Title = 'Fraude confirmée par axe - ' + PatternChartDiff;
                var PatternChart = PatternChartCommon + 'ControlAxleDoughnut';
                var label70 = 'Kénitra Nord - Mdiq';
                var label71 = 'Sidi Allal Bahraoui - Oujda';
                var label72 = 'Agadir-Berrechid-Beni mellal';
                var label73 = 'Nassim-Safi';
                var label74 = 'Autres';

                var data = {
                    datasets: [{
                        data: [data70, data71, data72, data73, data74],
                        backgroundColor: ['#70d6ff', '#ff70a6', '#ff9770', '#5b8e7d', '#e9ff70'],
                    }],

                    labels: [label70, label71, label72, label73, label74]
                };
                document.getElementById(PatternChart + 'ChartCardId').style.border = 'transparent';
                ChartJsDoughnutOneDisplay(Title, PatternChart, data);

                
                ShowGridReport('Grid_0001');
            }

        },
        "ajax": {
            "url": "/Qualif/QualifObsTickIdDRegionGet",
            "type": "GET",
            "datatype": "json",
            "data": {
                RegionId: RegionId,
                DateStringStart: DateStringStart,
                DateStringEnd: DateStringEnd
            }
        },
        "columns": [
            { "data": "" },//0
            { "data": "RegionNameShort" },//1
            { "data": "TotalTrafic" },//2

            { "data": "ObsTotal" },//3
            { "data": "ObsTotal" },//4                       

            { "data": "TotalToQualify" },//5
            { "data": "TotalToQualify" },//6
            { "data": "TotalToQualify" },//7

            { "data": "ObsQualified" },//8 
            { "data": "ObsQualified" },//9

            { "data": "ObsCtr04" },//10
            { "data": "ObsCtr04" },//11

            { "data": "ObsCtr06" },//12
            { "data": "ObsCtr06" },//13

            { "data": "ObsCtr03" },//14
            { "data": "ObsCtr03" },//15

            { "data": "ObsCtr99" },//16
            { "data": "ObsCtr99" },//17

            { "mData": function vehicle(data, type, dataToSet) { return GetDigits(data.Day, 2) + GetDigits(data.Month, 2) + data.Year + data.RegionId; } },//18 Detail
            { "data": "ObsPriceLostMaxPath" },//19

            { "mData": function vehicle(data, type, dataToSet) { return GetDigits(data.Day, 2) + '/' + GetDigits(data.Month, 2); } },//20

            { "data": "ObsC01" },//21
            { "data": "ObsC02" },//22
            { "data": "ObsC03" },//23

            { "data": "ObsM01" },//24
            { "data": "ObsM40" },//25
            { "data": "ObsM41" },//26

            { "data": "ObsA1" },//27
            { "data": "ObsA3" },//28
            { "data": "ObsA4" },//29
            { "data": "ObsA5" },//30
        ],
        "columnDefs": [
            { "width": "3%", "className": "text-center", "targets": 0 },
            { "width": "3%", "className": "text-center", "targets": 1 },
            { "width": "3%", "className": "text-right", "targets": 2 },

            { "width": "3%", "className": "text-right", "targets": 3 },
            { "width": "3%", "className": "text-right", "targets": 4 },

            { "width": "3%", "className": "text-right", "targets": 5 },
            { "width": "3%", "className": "text-right", "targets": 6 },
            { "width": "3%", "className": "text-center", "targets": 7 },

            { "width": "3%", "className": "text-right", "targets": 8 },
            { "width": "3%", "className": "text-right", "targets": 9 },

            { "width": "3%", "className": "text-right", "targets": 10 },
            { "width": "3%", "className": "text-right", "targets": 11 },

            { "width": "3%", "className": "text-right", "targets": 12 },
            { "width": "3%", "className": "text-right", "targets": 13 },

            { "width": "3%", "className": "text-right", "targets": 14 },
            { "width": "3%", "className": "text-right", "targets": 15 },

            { "width": "3%", "className": "text-right", "targets": 16 },
            { "width": "3%", "className": "text-right", "targets": 17 },

            { "width": "3%", "className": "text-center", "targets": 18 },
            { "width": "3%", "className": "text-center", "targets": 19 },

            { "width": "3%", "className": "text-center none", "targets": 20 },

            { "width": "3%", "className": "text-right none", "targets": 21 },
            { "width": "3%", "className": "text-right none", "targets": 22 },
            { "width": "3%", "className": "text-right none", "targets": 23 },

            { "width": "3%", "className": "text-right none", "targets": 24 },
            { "width": "3%", "className": "text-right none", "targets": 25 },
            { "width": "3%", "className": "text-right none", "targets": 26 },

            { "width": "3%", "className": "text-right none", "targets": 27 },
            { "width": "3%", "className": "text-right none", "targets": 28 },
            { "width": "3%", "className": "text-right none", "targets": 29 },
            { "width": "3%", "className": "text-right none", "targets": 30 },

            { "targets": 0, "render": function (data, type, row) { return DataTableCertifiedInfoGet(row['IsCertified']) + ' ' + DataTableDateValueFromRowGet(row); } },
            { "targets": 1, "render": function (data, type, row) { return data; } },
            { "targets": 2, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },

            { "targets": 3, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 4, "render": function (data, type, row) { return DataTablePercentageTwoThresholdsGet(data, row['TotalTrafic'], 2, 1, 3); } },

            { "targets": 5, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 6, "render": function (data, type, row) { return DataTableRateTwoThresholdsGet(data, row['ObsTotal'], 2, 70, 90); } },
            {
                "targets": 7, "render": function (data, type, row) {//Calculate-Qualif
                    var TaskId = '04';//Calculate
                    var SourceId = '19';//Counters
                    var FileTypeId = 'JB';//Qualifiable-Station
                    var DateString = GetDigits(row['Day'], 2) + GetDigits(row['Month'], 2) + row['Year'];
                    var SiteId = '--';
                    var LSId = '--';
                    var BagContainerId = '--';
                    var StationNumber = '--';
                    var LaneName = '---';
                    var PdvId = '--';
                    var BillingId = '--';
                    var CategoryId = '--';
                    var ParamId = TaskId + SourceId + FileTypeId + DateString + SiteId + LSId + BagContainerId + StationNumber + LaneName + PdvId + BillingId + CategoryId;

                    var Pattern = 'CertTaskAdd';
                    var RowId = data + ParamId;
                    var argument = '\'' + RowId + '\', \'' + ParamId + '\'';
                    var text = '';
                    var BtnClass = 'dt-btn-cl gc-bc1-cl';
                    var SpanClass = 'fas fa-redo-alt btn-icon-cl gc-c1-cl';
                    var TextClass = 'dt-text-cl';
                    return DataTableButtonGet(Pattern, RowId, argument, text, BtnClass, SpanClass, TextClass);
                }
            },

            { "targets": 8, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 9, "render": function (data, type, row) { return DataTableRateTwoThresholdsGet(data, row['TotalToQualify'], 2, 50, 90); } },

            { "targets": 10, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 11, "render": function (data, type, row) { return DataTableRateTwoThresholdsGet(data, row['ObsQualified'], 2, 80, 98); } },

            { "targets": 12, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 13, "render": function (data, type, row) { return DataTablePercentageTwoThresholdsGet(data, row['ObsQualified'], 2, 1, 3); } },

            { "targets": 14, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 15, "render": function (data, type, row) { return DataTablePercentageTwoThresholdsGet(data, row['ObsQualified'], 2, 5, 10); } },

            { "targets": 16, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 17, "render": function (data, type, row) { return DataTablePercentageTwoThresholdsGet(row['ObsCtr99'], row['ObsQualified'], 2, 5, 10); } },

            { "targets": 18, "render": function (data, type, row) { return DataTableButtonGet('QualifObsTickIdDStationDaySearch', data, '\'' + data + '\'', '', 'dt-btn-cl gc-bc1-cl', 'fas fa-eye btn-icon-cl gc-c1-cl', '') } },
            { "targets": 19, "render": function (data, type, row) { return DataTableFormatDoubleGet(data); } },

            { "targets": 20, "render": function (data, type, row) { return data; } },

            { "targets": 21, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 22, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 23, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },

            { "targets": 24, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 25, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 26, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },

            { "targets": 27, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 28, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 29, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 30, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
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
        "iDisplayLength": 10,
        "processing": false,
        "responsive": false,
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

            DataTableTotalIntGet(api, intVal, 2);
            DataTableTotalIntGet(api, intVal, 3);
            DataTableTotalIntGet(api, intVal, 5);
            DataTableTotalIntGet(api, intVal, 8);
            DataTableTotalIntGet(api, intVal, 10);
            DataTableTotalIntGet(api, intVal, 12);
            DataTableTotalIntGet(api, intVal, 14);
            DataTableTotalIntGet(api, intVal, 16);

            DataTableTotalIntGet(api, intVal, 21);
            DataTableTotalIntGet(api, intVal, 22);
            DataTableTotalIntGet(api, intVal, 23);
            DataTableTotalIntGet(api, intVal, 24);
            DataTableTotalIntGet(api, intVal, 25);
            DataTableTotalIntGet(api, intVal, 26);
            DataTableTotalIntGet(api, intVal, 27);
            DataTableTotalIntGet(api, intVal, 28);
            DataTableTotalIntGet(api, intVal, 29);
            DataTableTotalIntGet(api, intVal, 30);

            DataTableTotalPercentageGet(api, intVal, 3, 2, 4);
            DataTableTotalPercentageGet(api, intVal, 5, 3, 6);
            DataTableTotalPercentageGet(api, intVal, 8, 5, 9);

            DataTableTotalPercentageGet(api, intVal, 10, 8, 11);
            DataTableTotalPercentageGet(api, intVal, 12, 8, 13);
            DataTableTotalPercentageGet(api, intVal, 14, 8, 15);
            DataTableTotalPercentageGet(api, intVal, 16, 8, 17);

            data00 = DataTableColumnPercentageGet(api, intVal, 3, 2);
            data01 = (100 - data00).toFixed(2);

            data10 = DataTableColumnPercentageGet(api, intVal, 5, 3);
            data11 = (100 - data10).toFixed(2);

            data20 = DataTableColumnPercentageGet(api, intVal, 10, 8);
            data21 = DataTableColumnPercentageGet(api, intVal, 12, 8);
            data22 = DataTableColumnPercentageGet(api, intVal, 14, 8);
            data23 = DataTableColumnPercentageGet(api, intVal, 16, 8);

            data30 = ((api.column(12).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0)) * 100 / (api.column(2).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0))).toFixed(1);
            data31 = (100 - data30).toFixed(2);

            data40 = ((api.column(12).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0)
                + api.column(14).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0)
                + api.column(16).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0)) * 100 / (api.column(2).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0))).toFixed(1);
            data41 = (100 - data40).toFixed(2);

            data50 = DataTableColumnPercentageGet(api, intVal, 21, 12);
            data51 = DataTableColumnPercentageGet(api, intVal, 22, 12);
            data52 = DataTableColumnPercentageGet(api, intVal, 23, 12);

            data53Bar = ((api.column(21).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0)
                + api.column(22).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0)
                + api.column(23).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0)) * 100 / (api.column(12).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0))).toFixed(1);

            data53 = (100 - data53Bar).toFixed(1);

            data60 = DataTableColumnPercentageGet(api, intVal, 24, 12);
            data61 = DataTableColumnPercentageGet(api, intVal, 25, 12);
            data62 = DataTableColumnPercentageGet(api, intVal, 26, 12);
            data63Bar = ((api.column(24).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0)
                + api.column(25).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0)
                + api.column(26).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0)) * 100 / (api.column(12).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0))).toFixed(1);

            data63 = (100 - data63Bar).toFixed(1);

            data70 = DataTableColumnPercentageGet(api, intVal, 27, 12);
            data71 = DataTableColumnPercentageGet(api, intVal, 28, 12);
            data72 = DataTableColumnPercentageGet(api, intVal, 29, 12);
            data73 = DataTableColumnPercentageGet(api, intVal, 30, 12);
            data74Bar = ((api.column(27).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0)
                + api.column(28).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0)
                + api.column(29).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0)
                + api.column(30).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0)) * 100 / (api.column(12).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0))).toFixed(1);

            data74 = (100 - data74Bar).toFixed(1);
        }
    });
}


function QualifObsTickIdDStationDayDisplay() {

    var ActionBtnId = 'ParamActionBtnId0';
    var Icon = 'fas fa-eye';
    var IsMargin = true;

    var DateStringStart = GetDateStringFromDatePicker('DateStartId');
    var DateStringEnd = GetDateStringFromDatePicker('DateEndId');
    var IsChart = ElementBooleanGet('IsChartId');
    var RegionId = GetElementValue('RegionId');
    var LSId = GetElementValue('LSId');
    var StationNumber = GetElementValue('StationNumberId');

    QualifAllReportsHide();
    ShowReport('ParamReportId');
    ParamMessageReset();

    QualifObsTickIdDStationDayGet(ActionBtnId, Icon, IsMargin,
        DateStringStart, DateStringEnd, IsChart,
        RegionId, LSId, StationNumber);
}


function QualifPathRealTimeDisplay(ActionBtnId, Icon, IsMargin) {

    var ObsTickId = ElementDropDownListValueGet('ObsTickId');
    var ObsMpId = ElementDropDownListValueGet('ObsMpId');

    var RegionId = GetElementValue('RegionId');
    var LSId = GetElementValue('LSId');
    var StationNumber = GetElementValue('StationNumberId');
    var LaneName = GetElementValue('LaneNameId');
    var DateStringStart = GetDateStringFromDatePicker('DateStartId');
    var DateStringEnd = GetDateStringFromDatePicker('DateEndId');

    QualifAllReportsHide();
    ShowReport('ParamReportId');

    if (DateStringStart - DateStringEnd == 0) {
        if (RegionId != '0' && LSId != '0' && StationNumber != '0') {
            ParamMessageReset();
            ActionSpin(ActionBtnId, IsMargin);
            QualifPathRealTimeGet(ActionBtnId, Icon, IsMargin, DateStringStart, DateStringEnd, RegionId, LSId, StationNumber, LaneName, ObsTickId, ObsMpId);
        }
        else {
            ParamMessageErrorDisplay('Région, LS, Gare sont obligatoires');
        };
    }
    else {
        ParamMessageErrorDisplay('La période ne doit pas dépasser une journée');
    };

    
}


function QualifObsTickIdDStationDaySearch(Id) {
    var ActionBtnId = new String('QualifObsTickIdDStationDaySearch' + 'BtnId' + Id);
    var Icon = 'fas fa-eye';
    var IsMargin = false;
    var IsChart = false;  

    var DateStringStart = new String(Id).substr(0, 8);
    var DateStringEnd = new String(Id).substr(0, 8);
    var RegionId = new String(Id).substr(8, 2);
    var LSId = '0';
    var StationNumber = '0';

    QualifObsTickIdDStationDayGet(ActionBtnId, Icon, IsMargin,
        DateStringStart, DateStringEnd, IsChart,
        RegionId, LSId, StationNumber);
}


function QualifObsTickIdDTableExport(ZoneId, TimeId, DateStringStart, DateStringEnd, RegionId, LSId, StationNumber, LaneName, FileType) {

    var PrintLink = '/Qualif/QualifObsTickIdDTableExport?' +
        'ZoneId=' + ZoneId +
        '&TimeId=' + TimeId +
        '&DateStringStart=' + DateStringStart +
        '&DateStringEnd=' + DateStringEnd +
        '&RegionId=' + RegionId +
        '&LSId=' + LSId +
        '&StationNumber=' + StationNumber +    
        '&LaneName=' + LaneName +         
        '&FileType=' + FileType;

    NavigateTo(PrintLink, true);
}

function QualifObsTickIdDStationDayGet(ActionBtnId, Icon, IsMargin,
    DateStringStart, DateStringEnd, IsChart,
    RegionId, LSId, StationNumber) {

    ActionSpin(ActionBtnId, IsMargin);

    //HideTableReport('QualifObsTickIdDStation');

    var PatternTable = 'QualifObsTickIdDStation';
    var PatternTableId = PatternTable + 'TableId'
    var PatternTableReportId = PatternTable + 'TableReportId';

    var data00 = 0;
    var data01 = 0;

    var data10 = 0;
    var data11 = 0;

    var data20 = 0;
    var data21 = 0;
    var data22 = 0;
    var data23 = 0;

    var data30 = 0;
    var data31 = 0;

    var data40 = 0;
    var data41 = 0;

    var data50 = 0;
    var data51 = 0;
    var data52 = 0;
    var data53Bar = 0;
    var data53 = 0;

    var data60 = 0;
    var data61 = 0;
    var data62 = 0;
    var data63Bar = 0;
    var data63 = 0;

    var data70 = 0;
    var data71 = 0;
    var data72 = 0;
    var data73 = 0;
    var data74Bar = 0;
    var data74 = 0;


    $('#' + PatternTableId).DataTable().destroy();
    $('#' + PatternTableId).DataTable({
        //"dom": 'Bfrtip',
        //"buttons": [
        //    'excel'
        //],
        "dom": 'Bfrtip',
        "buttons": {
            buttons: [
                {
                    text: 'PDF',
                    action: function (e, dt, node, config) {
                        var ZoneId = '01';
                        var TimeId = '01';
                        var LaneName = '0';
                        var FileType = 'PDF';
                        QualifObsTickIdDTableExport(ZoneId, TimeId, DateStringStart, DateStringEnd, RegionId, LSId, StationNumber, LaneName, FileType);
                    }
                },
                {
                    text: 'Excel',
                    action: function (e, dt, node, config) {
                        var ZoneId = '01';
                        var TimeId = '01';
                        var LaneName = '0';
                        var FileType = 'Excel';
                        QualifObsTickIdDTableExport(ZoneId, TimeId, DateStringStart, DateStringEnd, RegionId, LSId, StationNumber, LaneName, FileType);
                    }
                }
            ]
        },
        "initComplete": function (settings, json) {
            ActionBtnSet(ActionBtnId, Icon, IsMargin);
            ShowReport(PatternTableReportId);

            if (IsChart == true && RegionId != '0') {

                if (DateStringStart - DateStringEnd != 0) {
                    var PatternChartCommon = 'QualifObsTickIdD';
                    var PatternChartDiff = 'Gare par jour';

                    var Title = 'Temps de parcours dépassé - ' + PatternChartDiff;
                    var PatternChart = PatternChartCommon + 'TotalLine';
                    var labels = GetColumnArray(PatternTableId, 18);
                    var data1 = GetColumnArray(PatternTableId, 4);
                    var data2 = GetColumnArray(PatternTableId, 5);
                    var data3 = GetColumnArray(PatternTableId, 8);

                    var label1 = 'TPD';
                    var label2 = 'Qualifiable';
                    var label3 = 'Qualifié';

                    document.getElementById(PatternChart + 'ChartCardId').style.border = 'transparent';
                    ChartJsLineThreeTraficHourDisplay(Title, PatternChart, labels, label1, data1, label2, data2, label3, data3, false);

                    //
                    var Title = 'Qualification du Temps de parcours dépassé - ' + PatternChartDiff;
                    var PatternChart = PatternChartCommon + 'ControlLine';
                    var labels = GetColumnArray(PatternTableId, 18);
                    var data1 = GetColumnArray(PatternTableId, 10);
                    var data2 = GetColumnArray(PatternTableId, 12);
                    var data3 = GetColumnArray(PatternTableId, 14);
                    var data4 = GetColumnArray(PatternTableId, 16);

                    var label1 = 'TPD justifié';
                    var label2 = 'TPD non-justifié';
                    var label3 = 'Qualification impossible';
                    var label4 = 'Parcours douteux';

                    document.getElementById(PatternChart + 'ChartCardId').style.border = 'transparent';
                    ChartJsLineFourTraficHourDisplay(Title, PatternChart, labels, label1, data1, label2, data2, label3, data3, label4, data4, false);

                    var Title = 'Evolution du taux de fraude au parcours confirmée - ' + PatternChartDiff;
                    var PatternChart = PatternChartCommon + 'RateLine';
                    var labels = GetColumnArray(PatternTableId, 18);
                    var data1 = GetColumnArray(PatternTableId, 11);
                    var data2 = GetColumnArray(PatternTableId, 13);
                    var data3 = GetColumnArray(PatternTableId, 15);

                    var label1 = 'TPD justifié';
                    var label2 = 'TPD non-justifié';
                    var label3 = 'Qualification impossible';

                    document.getElementById(PatternChart + 'ChartCardId').style.border = 'transparent';
                    ChartJsLineThreeTraficHourDisplay(Title, PatternChart, labels, label1, data1, label2, data2, label3, data3, false);

                    ShowGridReport('Grid_0000');
                }
                
                //Doughnut 0
                var Title = 'Taux du TPD par rapport au trafic - ' + PatternChartDiff;
                var PatternChart = PatternChartCommon + 'TotalDoughnut';
                var label00 = 'Temps de parcours dépassé';
                var label01 = '';

                var data = {
                    datasets: [{
                        data: [data00, data01],
                        backgroundColor: ['#03045e', '#adb5bd'],
                    }],

                    labels: [label00]
                };

                document.getElementById(PatternChart + 'ChartCardId').style.border = 'transparent';
                ChartJsDoughnutOneDisplay(Title, PatternChart, data);

                ////Doughnut 1
                var Title = 'Taux des transactions qualifiables - ' + PatternChartDiff;
                var PatternChart = PatternChartCommon + 'QualifiableDoughnut';
                var label10 = 'A qualier (Vitesse <= 30Km)';
                var label11 = '';
                var data = {
                    datasets: [{
                        data: [data10, data11],
                        backgroundColor: ['#0077b6', '#adb5bd'],
                    }],
                    labels: [label10]
                };
                document.getElementById(PatternChart + 'ChartCardId').style.border = 'transparent';
                ChartJsDoughnutOneDisplay(Title, PatternChart, data);

                //Doughnut 2
                var Title = 'Qualification du Temps de parcours dépassé - ' + PatternChartDiff;
                var PatternChart = PatternChartCommon + 'ControlDoughnut';
                var label20 = 'TPD justifié';
                var label21 = 'TPD non-justifié';
                var label22 = 'Qualification impossible';
                var label23 = 'Parcours douteux';

                var data = {
                    datasets: [{
                        data: [data20, data21, data22, data23],
                        backgroundColor: ['#38b000', '#d90429', '#adb5bd', '#D75F05'],
                    }],

                    labels: [label20, label21, label22, label23]
                };
                document.getElementById(PatternChart + 'ChartCardId').style.border = 'transparent';
                ChartJsDoughnutOneDisplay(Title, PatternChart, data);

                //Doughnut 3
                var Title = 'Taux de fraude par rapport au trafic SF - ' + PatternChartDiff;
                var PatternChart = PatternChartCommon + 'RateDoughnut';
                var label30 = 'Fraude confirmée';
                var label31 = '';
                var data = {
                    datasets: [{
                        data: [data30, data31],
                        backgroundColor: ['#d90429', '#adb5bd'],
                    }],
                    labels: [label30]
                };
                document.getElementById(PatternChart + 'ChartCardId').style.border = 'transparent';
                ChartJsDoughnutOneDisplay(Title, PatternChart, data);

                //Doughnut 4
                var Title = 'Taux de fraude par rapport au trafic SF - ' + PatternChartDiff;
                var PatternChart = PatternChartCommon + 'RateSumDoughnut';
                var label40 = 'Fraude confirmée + Qualification impossible + Parcours douteux';
                var label41 = '';
                var data = {
                    datasets: [{
                        data: [data40, data41],
                        backgroundColor: ['#d90429', '#adb5bd'],
                    }],
                    labels: [label40]
                };
                document.getElementById(PatternChart + 'ChartCardId').style.border = 'transparent';
                ChartJsDoughnutOneDisplay(Title, PatternChart, data);

                //Doughnut 5
                var Title = 'Fraude confirmée par classe - ' + PatternChartDiff;
                var PatternChart = PatternChartCommon + 'ControlClDoughnut';
                var label50 = 'VL';
                var label51 = 'PL1';
                var label52 = 'PL2';
                var label53 = '00';

                var data = {
                    datasets: [{
                        data: [data50, data51, data52, data53],
                        backgroundColor: ['#D71A04', '#A104CC', '#257BCC', '#D7A5A5'],
                    }],

                    labels: [label50, label51, label52, label53]
                };
                document.getElementById(PatternChart + 'ChartCardId').style.border = 'transparent';
                ChartJsDoughnutOneDisplay(Title, PatternChart, data);

                //Doughnut 6
                var Title = 'Fraude confirmée par MP - ' + PatternChartDiff;
                var PatternChart = PatternChartCommon + 'ControlMpDoughnut';
                var label60 = 'Espèce';
                var label61 = 'Tlp Pré';
                var label62 = 'Tlp Post';
                var label63 = 'Autres';

                var data = {
                    datasets: [{
                        data: [data60, data61, data62, data63],
                        backgroundColor: ['#EBE31D', '#EB7F35', '#BA5319', '#5E4D4B'],
                    }],

                    labels: [label60, label61, label62, label63]
                };
                document.getElementById(PatternChart + 'ChartCardId').style.border = 'transparent';
                ChartJsDoughnutOneDisplay(Title, PatternChart, data);

                //Doughnut 7
                var Title = 'Fraude confirmée par axe - ' + PatternChartDiff;
                var PatternChart = PatternChartCommon + 'ControlAxleDoughnut';
                var label70 = 'Kénitra Nord - Mdiq';
                var label71 = 'Sidi Allal Bahraoui - Oujda';
                var label72 = 'Agadir-Berrechid-Beni mellal';
                var label73 = 'Nassim-Safi';
                var label74 = 'Autres';

                var data = {
                    datasets: [{
                        data: [data70, data71, data72, data73, data74],
                        backgroundColor: ['#70d6ff', '#ff70a6', '#ff9770', '#5b8e7d', '#e9ff70'],
                    }],

                    labels: [label70, label71, label72, label73, label74]
                };
                document.getElementById(PatternChart + 'ChartCardId').style.border = 'transparent';
                ChartJsDoughnutOneDisplay(Title, PatternChart, data);

                
                ShowGridReport('Grid_0001');
            }

        },
        "ajax": {
            "url": "/Qualif/QualifObsTickIdDStationDayGet",
            "type": "GET",
            "datatype": "json",
            "data": {
                DateStringStart: DateStringStart,
                DateStringEnd: DateStringEnd,
                RegionId: RegionId,
                LSId: LSId,
                StationNumber: StationNumber,
            }
        },
        "columns": [
            { "data": "" },//0
            { "data": "StationName" },//1
            { "data": "TotalTrafic" },//2

            { "data": "ObsTotal" },//3
            { "data": "ObsTotal" },//4                       

            { "data": "TotalToQualify" },//5
            { "data": "TotalToQualify" },//6
            { "data": "TotalToQualify" },//7

            { "data": "ObsQualified" },//8 
            { "data": "ObsQualified" },//9

            { "data": "ObsCtr04" },//10
            { "data": "ObsCtr04" },//11

            { "data": "ObsCtr06" },//12
            { "data": "ObsCtr06" },//13

            { "data": "ObsCtr03" },//14
            { "data": "ObsCtr03" },//15

            { "data": "ObsCtr99" },//16
            { "data": "ObsCtr99" },//17

            { "mData": function vehicle(data, type, dataToSet) { return GetDigits(data.Day, 2) + GetDigits(data.Month, 2) + data.Year + data.RegionId + data.LSId + data.StationNumber; } },//18 Detail
            { "data": "ObsTickIdDPriceLostMaxPath" },//19

            { "mData": function vehicle(data, type, dataToSet) { return GetDigits(data.Day, 2) + '/' + GetDigits(data.Month, 2); } },//20

            { "data": "ObsC01" },//21
            { "data": "ObsC02" },//22
            { "data": "ObsC03" },//23

            { "data": "ObsM01" },//24
            { "data": "ObsM40" },//25
            { "data": "ObsM41" },//26

            { "data": "ObsA1" },//27
            { "data": "ObsA3" },//28
            { "data": "ObsA4" },//29
            { "data": "ObsA5" },//30
        ],
        "columnDefs": [
            { "width": "3%", "className": "text-center", "targets": 0 },
            { "width": "3%", "className": "text-left", "targets": 1 },
            { "width": "3%", "className": "text-right", "targets": 2 },

            { "width": "3%", "className": "text-right", "targets": 3 },
            { "width": "3%", "className": "text-right", "targets": 4 },

            { "width": "3%", "className": "text-right", "targets": 5 },
            { "width": "3%", "className": "text-right", "targets": 6 },
            { "width": "3%", "className": "text-center", "targets": 7 },

            { "width": "3%", "className": "text-right", "targets": 8 },
            { "width": "3%", "className": "text-right", "targets": 9 },

            { "width": "3%", "className": "text-right", "targets": 10 },
            { "width": "3%", "className": "text-right", "targets": 11 },

            { "width": "3%", "className": "text-right", "targets": 12 },
            { "width": "3%", "className": "text-right", "targets": 13 },

            { "width": "3%", "className": "text-right", "targets": 14 },
            { "width": "3%", "className": "text-right", "targets": 15 },

            { "width": "3%", "className": "text-right", "targets": 16 },
            { "width": "3%", "className": "text-right", "targets": 17 },

            { "width": "3%", "className": "text-center", "targets": 18 },
            { "width": "3%", "className": "text-center", "targets": 19 },

            { "width": "3%", "className": "text-center none", "targets": 20 },

            { "width": "3%", "className": "text-right none", "targets": 21 },
            { "width": "3%", "className": "text-right none", "targets": 22 },
            { "width": "3%", "className": "text-right none", "targets": 23 },

            { "width": "3%", "className": "text-right none", "targets": 24 },
            { "width": "3%", "className": "text-right none", "targets": 25 },
            { "width": "3%", "className": "text-right none", "targets": 26 },

            { "width": "3%", "className": "text-right none", "targets": 27 },
            { "width": "3%", "className": "text-right none", "targets": 28 },
            { "width": "3%", "className": "text-right none", "targets": 29 },
            { "width": "3%", "className": "text-right none", "targets": 30 },

            { "targets": 0, "render": function (data, type, row) { return DataTableCertifiedInfoGet(row['IsCertified']) + ' ' + DataTableDateValueFromRowGet(row); } },
            { "targets": 1, "render": function (data, type, row) { return data; } },
            { "targets": 2, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },

            { "targets": 3, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 4, "render": function (data, type, row) { return DataTablePercentageTwoThresholdsGet(data, row['TotalTrafic'], 2, 1, 3); } },

            { "targets": 5, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 6, "render": function (data, type, row) { return DataTableRateTwoThresholdsGet(data, row['ObsTotal'], 2, 70, 90); } },
            {
                "targets": 7, "render": function (data, type, row) {//Calculate-Qualif
                    var TaskId = '04';//Calculate
                    var SourceId = '19';//Counters
                    var FileTypeId = 'JB';//Qualifiable-Station
                    var DateString = GetDigits(row['Day'], 2) + GetDigits(row['Month'], 2) + row['Year'];
                    var SiteId = '--';
                    var LSId = row['LSId'];
                    var BagContainerId = '--';
                    var StationNumber = row['StationNumber'];
                    var LaneName = '---';
                    var PdvId = '--';
                    var BillingId = '--';
                    var CategoryId = '--';
                    var ParamId = TaskId + SourceId + FileTypeId + DateString + SiteId + LSId + BagContainerId + StationNumber + LaneName + PdvId + BillingId + CategoryId;

                    var Pattern = 'CertTaskAdd';
                    var RowId = data + ParamId;
                    var argument = '\'' + RowId + '\', \'' + ParamId + '\'';
                    var text = '';
                    var BtnClass = 'dt-btn-cl gc-bc1-cl';
                    var SpanClass = 'fas fa-redo-alt btn-icon-cl gc-c1-cl';
                    var TextClass = 'dt-text-cl';
                    return DataTableButtonGet(Pattern, RowId, argument, text, BtnClass, SpanClass, TextClass);
                }
            },

            { "targets": 8, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 9, "render": function (data, type, row) { return DataTableRateTwoThresholdsGet(data, row['TotalToQualify'], 2, 50, 90); } },

            { "targets": 10, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 11, "render": function (data, type, row) { return DataTableRateTwoThresholdsGet(data, row['ObsQualified'], 2, 80, 98); } },

            { "targets": 12, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 13, "render": function (data, type, row) { return DataTablePercentageTwoThresholdsGet(data, row['ObsQualified'], 2, 1, 3); } },

            { "targets": 14, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 15, "render": function (data, type, row) { return DataTablePercentageTwoThresholdsGet(data, row['ObsQualified'], 2, 5, 10); } },

            { "targets": 16, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 17, "render": function (data, type, row) { return DataTablePercentageTwoThresholdsGet(row['ObsCtr99'], row['ObsQualified'], 2, 5, 10); } },

            { "targets": 18, "render": function (data, type, row) { return DataTableButtonGet('QualifObsTickIdDLaneDaySearch', data, '\'' + data + '\'', '', 'dt-btn-cl gc-bc1-cl', 'fas fa-eye btn-icon-cl gc-c1-cl', '') } },
            { "targets": 19, "render": function (data, type, row) { return DataTableFormatDoubleGet(data); } },

            { "targets": 20, "render": function (data, type, row) { return data; } },

            { "targets": 21, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 22, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 23, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },

            { "targets": 24, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 25, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 26, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },

            { "targets": 27, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 28, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 29, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 30, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
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
        "iDisplayLength": 10,
        "processing": false,
        "responsive": false,
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

            DataTableTotalIntGet(api, intVal, 2);
            DataTableTotalIntGet(api, intVal, 3);
            DataTableTotalIntGet(api, intVal, 5);
            DataTableTotalIntGet(api, intVal, 8);
            DataTableTotalIntGet(api, intVal, 10);
            DataTableTotalIntGet(api, intVal, 12);
            DataTableTotalIntGet(api, intVal, 14);
            DataTableTotalIntGet(api, intVal, 16);

            DataTableTotalIntGet(api, intVal, 21);
            DataTableTotalIntGet(api, intVal, 22);
            DataTableTotalIntGet(api, intVal, 23);
            DataTableTotalIntGet(api, intVal, 24);
            DataTableTotalIntGet(api, intVal, 25);
            DataTableTotalIntGet(api, intVal, 26);
            DataTableTotalIntGet(api, intVal, 27);
            DataTableTotalIntGet(api, intVal, 28);
            DataTableTotalIntGet(api, intVal, 29);
            DataTableTotalIntGet(api, intVal, 30);

            DataTableTotalPercentageGet(api, intVal, 3, 2, 4);
            DataTableTotalPercentageGet(api, intVal, 5, 3, 6);
            DataTableTotalPercentageGet(api, intVal, 8, 5, 9);

            DataTableTotalPercentageGet(api, intVal, 10, 8, 11);
            DataTableTotalPercentageGet(api, intVal, 12, 8, 13);
            DataTableTotalPercentageGet(api, intVal, 14, 8, 15);
            DataTableTotalPercentageGet(api, intVal, 16, 8, 17);

            data00 = DataTableColumnPercentageGet(api, intVal, 3, 2);
            data01 = (100 - data00).toFixed(2);

            data10 = DataTableColumnPercentageGet(api, intVal, 5, 3);
            data11 = (100 - data10).toFixed(2);

            data20 = DataTableColumnPercentageGet(api, intVal, 10, 8);
            data21 = DataTableColumnPercentageGet(api, intVal, 12, 8);
            data22 = DataTableColumnPercentageGet(api, intVal, 14, 8);
            data23 = DataTableColumnPercentageGet(api, intVal, 16, 8);

            data30 = ((api.column(12).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0)) * 100 / (api.column(2).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0))).toFixed(1);
            data31 = (100 - data30).toFixed(2);

            data40 = ((api.column(12).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0)
                + api.column(14).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0)
                + api.column(16).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0)) * 100 / (api.column(2).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0))).toFixed(1);
            data41 = (100 - data40).toFixed(2);

            data50 = DataTableColumnPercentageGet(api, intVal, 21, 12);
            data51 = DataTableColumnPercentageGet(api, intVal, 22, 12);
            data52 = DataTableColumnPercentageGet(api, intVal, 23, 12);

            data53Bar = ((api.column(21).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0)
                + api.column(22).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0)
                + api.column(23).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0)) * 100 / (api.column(12).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0))).toFixed(1);

            data53 = (100 - data53Bar).toFixed(1);

            data60 = DataTableColumnPercentageGet(api, intVal, 24, 12);
            data61 = DataTableColumnPercentageGet(api, intVal, 25, 12);
            data62 = DataTableColumnPercentageGet(api, intVal, 26, 12);
            data63Bar = ((api.column(24).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0)
                + api.column(25).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0)
                + api.column(26).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0)) * 100 / (api.column(12).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0))).toFixed(1);

            data63 = (100 - data63Bar).toFixed(1);

            data70 = DataTableColumnPercentageGet(api, intVal, 27, 12);
            data71 = DataTableColumnPercentageGet(api, intVal, 28, 12);
            data72 = DataTableColumnPercentageGet(api, intVal, 29, 12);
            data73 = DataTableColumnPercentageGet(api, intVal, 30, 12);
            data74Bar = ((api.column(27).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0)
                + api.column(28).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0)
                + api.column(29).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0)
                + api.column(30).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0)) * 100 / (api.column(12).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0))).toFixed(1);

            data74 = (100 - data74Bar).toFixed(1);
        }
    });
}


function QualifObsMpOpen() {
    QualifAllReportsHide();
    QualifAllParametersHide();
    MenuBarNavHighlight(1, 1, 2);

    $('#ParamTitleId').text("Observation Moyens de paiement");
    ShowReport('ParamReportId');

    ShowReport('RegionId' + 'Parent');
    ShowReport('LSId' + 'Parent');
    ShowReport('StationNumberId' + 'Parent');

    ShowParent('TimeId');
    ShowReport('DateStartId' + 'Parent');
    ShowReport('DateEndId' + 'Parent');

    //OnChange
    ElementOnChangeSet('StationNumberId', "")

    $.ajax({
        url: "/Common/RoleNameListGet",
        method: "POST",
        contentType: "application/json; charset=utf-8",
        async: true,
        success: function (data) {
            if (data.includes('Administrateur')) {
                //Actions
                ParamActionBtnGet(0, 'Afficher', 'fas fa-eye', 'QualifObsMpAllDisplay()');

                DateValueDefaultSet('DateStartId', 2);
                DateValueDefaultSet('DateEndId', 2);

                ElementDropDownListReset('LSId');
                ElementDropDownListReset('StationNumberId');

                DropDownListSet('TimeId', '07');
                QualifTimePreset();
            }
            else {
                if (data.includes('QualifPathSupervisor')) {
                    //Actions
                    ParamActionBtnGet(0, 'Afficher', 'fas fa-eye', 'QualifObsMpAllDisplay()');

                    DateValueDefaultSet('DateStartId', 2);
                    DateValueDefaultSet('DateEndId', 2);

                    ElementDropDownListReset('LSId');
                    ElementDropDownListReset('StationNumberId');

                    DropDownListSet('TimeId', '07');
                    QualifTimePreset();
                }
                else {
                    if (data.includes('QualifPath')) {
                        //Actions
                        ParamActionBtnGet(0, 'Afficher', 'fas fa-eye', 'QualifObsMpAllDisplay()');

                        DateValueDefaultSet('DateStartId', 2);
                        DateValueDefaultSet('DateEndId', 2);

                        DropDownListSet('TimeId', '07');
                        QualifTimePreset();
                    }
                }
            }
        }
    });

    NotiConnectionIdUpdate('Qualification - Dashboard');
}


function QualifObsMpAllDisplay() {
    //Define
    var ActionBtnId = 'ParamActionBtnId0';
    var Icon = 'fas fa-eye btn-icon-m-cl gc-c1-cl';
    var TimeId = GetElementValue('TimeId');
    var IsMargin = new Boolean(true);

    QualifAllReportsHide();
    ShowReport('ParamReportId');

    if (TimeId == '01') {//Day
        QualifObsMpDayDisplay(ActionBtnId, Icon, IsMargin);
    }
    else {
        if (TimeId == '09') {//Region
            QualifObsMpRegionDisplay(ActionBtnId, Icon, IsMargin);
        }
        else {
            if (TimeId == '07') {//Station
                QualifObsMpStationDisplay(ActionBtnId, Icon, IsMargin);
            }
            else {
                if (TimeId == '10') {//Od
                    QualifObsMpOdDisplay(ActionBtnId, Icon, IsMargin);
                }
                else {
                    ParamMessageErrorDisplay('Ce niveau n\'est pas authorisé');
                }
            }
        }
    }
}


function QualifObsMpDayDisplay(ActionBtnId, Icon, IsMargin) {
    var DateStringStart = GetDateStringFromDatePicker('DateStartId');
    var DateStringEnd = GetDateStringFromDatePicker('DateEndId');

    if (DateStringStart != '' && DateStringEnd != '') {
        QualifObsMpDayGet(ActionBtnId, Icon, IsMargin, DateStringStart, DateStringEnd);
    }
    else {
        ParamMessageErrorDisplay('Les dates de début et de fin sont obligatoires');
    };
}


function QualifObsMpDayGet(ActionBtnId, Icon, IsMargin, DateStringStart, DateStringEnd) {

    //Spin
    ActionSpin(ActionBtnId, IsMargin);

    //init
    ParamMessageReset();

    var PatternTable = 'QualifObsMpDay';
    var PatternTableId = PatternTable + 'TableId'
    var PatternTableReportId = PatternTable + 'TableReportId';

    $('#' + PatternTableId).DataTable().destroy();
    $('#' + PatternTableId).DataTable({
        "dom": 'Bfrtip',
        "buttons": [
            'excel'
        ],
        //"dom": 'Bfrtip',
        //"buttons": {
        //    buttons: [
        //        {
        //            text: 'PDF',
        //            action: function (e, dt, node, config) {
        //                var AxleId = '0';
        //                var SiteId = '0';
        //                var BagContainerId = '0';
        //                var StationNumber = '0';
        //                QualifTrxLaneDayExport(AxleId, SiteId, BagContainerId, StationNumber, DateStringStart, DateStringEnd, 'PDF');
        //            }
        //        },
        //        {
        //            text: 'Excel',
        //            action: function (e, dt, node, config) {
        //                var AxleId = '0';
        //                var SiteId = '0';
        //                var BagContainerId = '0';
        //                var StationNumber = '0';
        //                QualifTrxLaneStationExport(AxleId, SiteId, BagContainerId, StationNumber, DateStringStart, DateStringEnd, 'Excel');
        //            }
        //        }
        //    ]
        //},
        "initComplete": function (settings, json) {
            ActionBtnIconSet(ActionBtnId, Icon);
            ShowReport(PatternTableReportId);
        },
        "ajax": {
            "url": "/Qualif/QualifObsMpDayGet",
            "type": "GET",
            "datatype": "json",
            "data": {
                DateStringStart: DateStringStart,
                DateStringEnd: DateStringEnd
            }
        },
        "columns": [
            { "data": "" },//0
            { "data": "TotalTrafic" },//1

            { "data": "ObsMpId26" },//2
            { "data": "ObsMpId26" },//3
            { "data": "ObsMpId26Qualified" },//4

            { "data": "ObsMpId01" },//5
            { "data": "ObsMpId01" },//6

            { "data": "ObsMpId48" },//7
            { "data": "ObsMpId48" },//8      

            { "mData": function vehicle(data, type, dataToSet) { return GetDigits(data.Day, 2) + GetDigits(data.Month, 2) + data.Year; } },//9 Détail
        ],
        "columnDefs": [
            { "width": "3%", "className": "text-center", "targets": 0 },
            { "width": "3%", "className": "text-center", "targets": 1 },

            { "width": "3%", "className": "text-right", "targets": 2 },
            { "width": "3%", "className": "text-right", "targets": 3 },
            { "width": "3%", "className": "text-right", "targets": 4 },

            { "width": "3%", "className": "text-right", "targets": 5 },
            { "width": "3%", "className": "text-right", "targets": 6 },

            { "width": "3%", "className": "text-right", "targets": 7 },
            { "width": "3%", "className": "text-right", "targets": 8 },

            { "width": "3%", "className": "text-center", "targets": 9 },

            { "targets": 0, "render": function (data, type, row) { return DataTableCertifiedInfoGet(row['IsCertified']) + ' ' + DataTableDateValueFromRowGet(row); } },
            { "targets": 1, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },

            { "targets": 2, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 3, "render": function (data, type, row) { return DataTablePercentageTwoThresholdsGet(data, row['TotalTrafic'], 2, 2, 5); } },
            { "targets": 4, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },

            { "targets": 5, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 6, "render": function (data, type, row) { return DataTablePercentageTwoThresholdsGet(data, row['TotalTrafic'], 2, 2, 5); } },

            { "targets": 7, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 8, "render": function (data, type, row) { return DataTablePercentageTwoThresholdsGet(data, row['TotalTrafic'], 2, 2, 5); } },

            { "targets": 9, "render": function (data, type, row) { return DataTableButtonGet('QualifObsMpRegionSearch', data, '\'' + data + '\'', '', 'dt-btn-cl gc-bc1-cl', 'fas fa-eye btn-icon-cl gc-c1-cl', '') } },

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
        "iDisplayLength": 10,
        "processing": false,
        "responsive": true,
        "bFilter": true,
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

            DataTableTotalIntGet(api, intVal, 2);            
            DataTableTotalIntGet(api, intVal, 4);
            DataTableTotalIntGet(api, intVal, 5);
            DataTableTotalIntGet(api, intVal, 7);

            DataTableTotalPercentageGet(api, intVal, 2, 1, 3);
            DataTableTotalPercentageGet(api, intVal, 5, 1, 6);
            DataTableTotalPercentageGet(api, intVal, 7, 1, 8);
        }
    });
}

function QualifObsMpRegionDisplay(ActionBtnId, Icon, IsMargin) {

    var RegionId = GetElementValue('RegionId');
    var DateStringStart = GetDateStringFromDatePicker('DateStartId');
    var DateStringEnd = GetDateStringFromDatePicker('DateEndId');

    QualifAllReportsHide();
    ShowReport('ParamReportId');
    ParamMessageReset();

    if (DateStringStart != '' && DateStringEnd != '') {
        QualifObsMpRegionGet(ActionBtnId, Icon, IsMargin, RegionId, DateStringStart, DateStringEnd);
    }
    else {
        ParamMessageErrorDisplay('Les dates de début et de fin sont obligatoires');
    };
}


function QualifObsMpRegionSearch(Id) {

    var ActionBtnId = new String('QualifObsMpRegionSearchBtnId' + Id);
    var Icon = 'fas fa-eye';
    var IsMargin = false;

    //hide some reports 
    HideTableReport('QualifObsMpStation');
    HideTableReport('QualifObsMpLane');
    HideTableReport('QualifTrxLane');
    HideTableReport('CertFilePlan');

    var DateStringStart = new String(Id).substr(0, 8);
    var DateStringEnd = new String(Id).substr(0, 8);
    var RegionId = '0';

    QualifObsMpRegionGet(ActionBtnId, Icon, IsMargin, RegionId, DateStringStart, DateStringEnd);
}


function QualifObsMpRegionGet(ActionBtnId, Icon, IsMargin, RegionId, DateStringStart, DateStringEnd) {

    //Spin
    ActionSpin(ActionBtnId, IsMargin);

    //init
    ParamMessageReset();

    var PatternTable = 'QualifObsMpRegion';
    var PatternTableId = PatternTable + 'TableId'
    var PatternTableReportId = PatternTable + 'TableReportId';

    $('#' + PatternTableId).DataTable().destroy();
    $('#' + PatternTableId).DataTable({
        "dom": 'Bfrtip',
        "buttons": [
            'excel'
        ],
        //"dom": 'Bfrtip',
        //"buttons": {
        //    buttons: [
        //        {
        //            text: 'PDF',
        //            action: function (e, dt, node, config) {
        //                //alert('Activated!');
        //                QualifTrxLaneStationExport(RegionId, LSId, StationNumber, DateStringStart, DateStringEnd, 'PDF');
        //                //Export(\'RepoTraficStationDayAll\', \'Excel\')
        //            }
        //        },
        //        {
        //            text: 'Excel',
        //            action: function (e, dt, node, config) {
        //                //alert('Activated!');
        //                QualifTrxLaneStationExport(RegionId, LSId, StationNumber, DateStringStart, DateStringEnd, 'Excel');
        //                //Export(\'RepoTraficStationDayAll\', \'Excel\')
        //            }
        //        }
        //    ]
        //},
        "initComplete": function (settings, json) {
            ActionBtnIconSet(ActionBtnId, Icon);
            ShowReport(PatternTableReportId);
        },
        "ajax": {
            "url": "/Qualif/QualifObsMpRegionGet",
            "type": "GET",
            "datatype": "json",
            "data": {
                RegionId: RegionId,
                DateStringStart: DateStringStart,
                DateStringEnd: DateStringEnd
            }
        },
        "columns": [
            { "data": "" },//0
            { "data": "RegionNameShort" },//1
            { "data": "TotalTrafic" },//2

            { "data": "ObsMpId26" },//3
            { "data": "ObsMpId26" },//4
            { "data": "ObsMpId26Qualified" },//5

            { "data": "ObsMpId01" },//6
            { "data": "ObsMpId01" },//7

            { "data": "ObsMpId48" },//8
            { "data": "ObsMpId48" },//9

            { "mData": function vehicle(data, type, dataToSet) { return GetDigits(data.Day, 2) + GetDigits(data.Month, 2) + data.Year + data.RegionId; } },//10 Station

        ],
        "columnDefs": [
            { "width": "3%", "className": "text-center", "targets": 0 },
            { "width": "3%", "className": "text-center", "targets": 1 },
            { "width": "3%", "className": "text-right", "targets": 2 },

            { "width": "3%", "className": "text-right", "targets": 3 },
            { "width": "3%", "className": "text-right", "targets": 4 },
            { "width": "3%", "className": "text-right", "targets": 5 },

            { "width": "3%", "className": "text-right", "targets": 6 },
            { "width": "3%", "className": "text-right", "targets": 7 },

            { "width": "3%", "className": "text-right", "targets": 8 },
            { "width": "3%", "className": "text-right", "targets": 9 },

            { "width": "3%", "className": "text-center", "targets": 10 },

            { "targets": 0, "render": function (data, type, row) { return DataTableCertifiedInfoGet(row['IsCertified']) + ' ' + DataTableDateValueFromRowGet(row); } },
            { "targets": 1, "render": function (data, type, row) { return data; } },
            { "targets": 2, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },

            { "targets": 3, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 4, "render": function (data, type, row) { return DataTablePercentageTwoThresholdsGet(data, row['TotalTrafic'], 2, 2, 5); } },
            { "targets": 5, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },

            { "targets": 6, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 7, "render": function (data, type, row) { return DataTablePercentageTwoThresholdsGet(data, row['TotalTrafic'], 2, 2, 5); } },

            { "targets": 8, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 9, "render": function (data, type, row) { return DataTablePercentageTwoThresholdsGet(data, row['TotalTrafic'], 2, 2, 5); } },

            { "targets": 10, "render": function (data, type, row) { return DataTableButtonGet('QualifObsMpStationSearch', data, '\'' + data + '\'', '', 'dt-btn-cl gc-bc1-cl', 'fas fa-eye btn-icon-cl gc-c1-cl', '') } },
            
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
        "iDisplayLength": 10,
        "processing": false,
        "responsive": true,
        "bFilter": true,
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

            DataTableTotalIntGet(api, intVal, 3);            
            DataTableTotalIntGet(api, intVal, 5);
            DataTableTotalIntGet(api, intVal, 6);
            DataTableTotalIntGet(api, intVal, 8);

            DataTableTotalPercentageGet(api, intVal, 3, 2, 4);
            DataTableTotalPercentageGet(api, intVal, 6, 2, 7);
            DataTableTotalPercentageGet(api, intVal, 8, 2, 9);
        }
    });
}

function QualifObsMpStationDisplay(ActionBtnId, Icon, IsMargin) {

    var RegionId = GetElementValue('RegionId');
    var LSId = GetElementValue('LSId');
    var StationNumber = GetElementValue('StationNumberId');
    var DateStringStart = GetDateStringFromDatePicker('DateStartId');
    var DateStringEnd = GetDateStringFromDatePicker('DateEndId');

    if (DateStringStart != '' && DateStringEnd != '') {
        QualifObsMpStationGet(ActionBtnId, Icon, IsMargin, RegionId, LSId, StationNumber, DateStringStart, DateStringEnd);
    }
    else {
        ParamMessageErrorDisplay('Les dates de début et de fin sont obligatoires');
    };
}

function QualifObsMpStationSearch(Id) {

    var ActionBtnId = new String('QualifObsMpStationSearchBtnId' + Id);
    var Icon = 'fas fa-eye';
    var IsMargin = false;

    //hide some reports
    HideReport('QualifObsMpStation' + 'TableReportId');
    HideReport('QualifObsMpLane' + 'TableReportId');
    HideReport('QualifTrxLane' + 'TableReportId');
    HideReport('CertFilePlan' + 'TableReportId');

    var DateStringStart = new String(Id).substr(0, 8);
    var DateStringEnd = new String(Id).substr(0, 8);
    var RegionId = new String(Id).substr(8, 2);
    var LSId = '0';
    var StationNumber = '0';
    
    QualifObsMpStationGet(ActionBtnId, Icon, IsMargin, RegionId, LSId, StationNumber, DateStringStart, DateStringEnd)
}


function QualifObsMpStationGet(ActionBtnId, Icon, IsMargin, RegionId, LSId, StationNumber, DateStringStart, DateStringEnd) {

    //Spin
    ActionSpin(ActionBtnId, IsMargin);

    //init
    ParamMessageReset();

    var PatternTable = 'QualifObsMpStation';
    var PatternTableId = PatternTable + 'TableId'
    var PatternTableReportId = PatternTable + 'TableReportId';

    $('#' + PatternTableId).DataTable().destroy();
    $('#' + PatternTableId).DataTable({
        "dom": 'Bfrtip',
        "buttons": {
            buttons: [
                {
                    text: 'PDF',
                    action: function (e, dt, node, config) {
                        //alert('Activated!');
                        QualifTrxLaneStationExport(RegionId, LSId, StationNumber, DateStringStart, DateStringEnd, 'PDF');
                        //Export(\'RepoTraficStationDayAll\', \'Excel\')
                    }
                },
                {
                    text: 'Excel',
                    action: function (e, dt, node, config) {
                        //alert('Activated!');
                        QualifTrxLaneStationExport(RegionId, LSId, StationNumber, DateStringStart, DateStringEnd, 'Excel');
                        //Export(\'RepoTraficStationDayAll\', \'Excel\')
                    }
                }
            ]
        },
        "initComplete": function (settings, json) {
            ActionBtnIconSet(ActionBtnId, Icon);
            ShowReport(PatternTableReportId);
        },
        "ajax": {
            "url": "/Qualif/QualifObsMpStationGet",
            "type": "GET",
            "datatype": "json",
            "data": {
                RegionId: RegionId,
                LSId: LSId,
                StationNumber: StationNumber,
                DateStringStart: DateStringStart,
                DateStringEnd: DateStringEnd
            }
        },
        "columns": [
            { "data": "" },//0
            { "data": "StationName" },//1
            { "data": "TotalTrafic" },//2

            { "data": "ObsMpId26" },//3
            { "data": "ObsMpId26" },//4
            { "data": "ObsMpId26Qualified" },//5

            { "data": "ObsMpId01" },//6
            { "data": "ObsMpId01" },//7

            { "data": "ObsMpId48" },//8
            { "data": "ObsMpId48" },//9

            { "mData": function vehicle(data, type, dataToSet) { return GetDigits(data.Day, 2) + GetDigits(data.Month, 2) + data.Year + data.RegionId + data.LSId + data.StationNumber; } },//10
            { "mData": function vehicle(data, type, dataToSet) { return GetDigits(data.Day, 2) + GetDigits(data.Month, 2) + data.Year + data.RegionId + data.LSId + data.StationNumber; } },//11
        ],
        "columnDefs": [
            { "width": "3%", "className": "text-center", "targets": 0 },
            { "width": "3%", "className": "text-left", "targets": 1 },
            { "width": "3%", "className": "text-right", "targets": 2 },

            { "width": "3%", "className": "text-right", "targets": 3 },
            { "width": "3%", "className": "text-right", "targets": 4 },
            { "width": "3%", "className": "text-right", "targets": 5 },

            { "width": "3%", "className": "text-right", "targets": 6 },
            { "width": "3%", "className": "text-right", "targets": 7 },

            { "width": "3%", "className": "text-right", "targets": 8 },
            { "width": "3%", "className": "text-right", "targets": 9 },

            { "width": "3%", "className": "text-center", "targets": 10 },
            { "width": "3%", "className": "text-center", "targets": 11 },

            { "targets": 0, "render": function (data, type, row) { return DataTableCertifiedInfoGet(row['IsCertified']) + ' ' + DataTableDateValueFromRowGet(row); } },
            { "targets": 1, "render": function (data, type, row) { return data; } },
            { "targets": 2, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },

            { "targets": 3, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 4, "render": function (data, type, row) { return DataTablePercentageTwoThresholdsGet(data, row['TotalTrafic'], 2, 2, 5); } },
            { "targets": 5, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },

            { "targets": 6, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 7, "render": function (data, type, row) { return DataTablePercentageTwoThresholdsGet(data, row['TotalTrafic'], 2, 2, 5); } },

            { "targets": 8, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 9, "render": function (data, type, row) { return DataTablePercentageTwoThresholdsGet(data, row['TotalTrafic'], 2, 2, 5); } },

            { "targets": 10, "render": function (data, type, row) { return DataTableButtonGet('QualifObsMpLaneSearch', data, '\'' + data + '\'', '', 'dt-btn-cl gc-bc1-cl', 'fas fa-eye btn-icon-cl gc-c1-cl', '') } },
            { "targets": 11, "render": function (data, type, row) { return DataTableButtonGet('QualifObsMpOdSearch', data, '\'' + data + '\'', '', 'dt-btn-cl gc-bc1-cl', 'fas fa-eye btn-icon-cl gc-c1-cl', '') } },

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
        "iDisplayLength": 10,
        "processing": false,
        "responsive": true,
        "bFilter": true,
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

            DataTableTotalIntGet(api, intVal, 3);
            DataTableTotalIntGet(api, intVal, 5);
            DataTableTotalIntGet(api, intVal, 6);
            DataTableTotalIntGet(api, intVal, 8);

            DataTableTotalPercentageGet(api, intVal, 3, 2, 4);
            DataTableTotalPercentageGet(api, intVal, 6, 2, 7);
            DataTableTotalPercentageGet(api, intVal, 8, 2, 9);
        }
    });
}


function QualifObsMpOdDisplay(ActionBtnId, Icon, IsMargin) {

    var RegionId = GetElementValue('RegionId');
    var LSId = GetElementValue('LSId');
    var StationNumber = GetElementValue('StationNumberId');
    var DateStringStart = GetDateStringFromDatePicker('DateStartId');
    var DateStringEnd = GetDateStringFromDatePicker('DateEndId');
    var OdId = '0';

    QualifAllReportsHide();
    ShowReport('ParamReportId');
    ParamMessageReset();

    if (DateStringStart != '' && DateStringEnd != '') {
        QualifObsMpOdGet(ActionBtnId, Icon, IsMargin, RegionId, LSId, StationNumber, OdId, DateStringStart, DateStringEnd);
    }
    else {
        ParamMessageErrorDisplay('Les dates de début et de fin sont obligatoires');
    };
}


function QualifObsMpOdSearch(Id) {

    var ActionBtnId = new String('QualifObsMpOdSearchBtnId' + Id);
    var Icon = 'fas fa-eye';

    //hide some reports
    HideTableReport('QualifObsMpStation');
    HideTableReport('QualifObsMpOd');
    HideTableReport('QualifObsMpLane');
    HideTableReport('QualifTrxLane');
    HideTableReport('CertFilePlan');

    var DateStringStart = new String(Id).substr(0, 8);
    var DateStringEnd = new String(Id).substr(0, 8);
    var RegionId = new String(Id).substr(8, 2);
    var LSId = new String(Id).substr(10, 2);
    var StationNumber = '0';
    var IsMargin = false;
    var OdId = '0';
    QualifObsMpOdGet(ActionBtnId, Icon, IsMargin, RegionId, LSId, StationNumber, OdId, DateStringStart, DateStringEnd);
}


function QualifObsMpOdGet(ActionBtnId, Icon, IsMargin, RegionId, LSId, StationNumber, OdId, DateStringStart, DateStringEnd) {

    //Spin
    ActionSpin(ActionBtnId, IsMargin);

    //init
    ParamMessageReset();

    var PatternTable = 'QualifObsMpOd';
    var PatternTableId = PatternTable + 'TableId'
    var PatternTableReportId = PatternTable + 'TableReportId';

    $('#' + PatternTableId).DataTable().destroy();
    $('#' + PatternTableId).DataTable({
        //"dom": 'Bfrtip',
        ////"buttons": [
        ////    'excel'
        ////],
        //"buttons": {
        //    buttons: [
        //        {
        //            text: 'PDF',
        //            action: function (e, dt, node, config) {
        //                //alert('Activated!');
        //                QualifTrxLaneStationExport(AxleId, SiteId, BagContainerId, StationNumber, DateStringStart, DateStringEnd, 'PDF');
        //                //Export(\'RepoTraficStationDayAll\', \'Excel\')
        //            }
        //        },
        //        {
        //            text: 'Excel',
        //            action: function (e, dt, node, config) {
        //                //alert('Activated!');
        //                QualifTrxLaneStationExport(AxleId, SiteId, BagContainerId, StationNumber, DateStringStart, DateStringEnd, 'Excel');
        //                //Export(\'RepoTraficStationDayAll\', \'Excel\')
        //            }
        //        }
        //    ]
        //},
        "initComplete": function (settings, json) {
            ActionBtnIconSet(ActionBtnId, Icon);
            ShowReport(PatternTableReportId);
        },
        "ajax": {
            "url": "/Qualif/QualifObsMpOdGet",
            "type": "GET",
            "datatype": "json",
            "data": {
                RegionId: RegionId,
                LSId: LSId,
                StationNumber: StationNumber,
                OdId: OdId,
                DateStringStart: DateStringStart,
                DateStringEnd: DateStringEnd
            }
        },
        "columns": [
            { "data": "" },//0
            { "data": "StationNumberD" },//1
            { "data": "StationNumberO" },//2
            { "data": "TotalTrafic" },//3

            { "data": "ObsMpId26" },//4
            { "data": "ObsMpId26" },//5
            { "mData": function vehicle(data, type, dataToSet) { return GetDigits(data.Day, 2) + GetDigits(data.Month, 2) + data.Year + data.RegionIdD + data.LSIdD + data.StationNumberD + data.RegionIdO + data.LSIdO + data.StationNumberO + 'P' + '--'; } },//6
            { "data": "ObsMpId26Qualified" },//7

            { "data": "ObsMpId01" },//8
            { "data": "ObsMpId01" },//9
            { "mData": function vehicle(data, type, dataToSet) { return GetDigits(data.Day, 2) + GetDigits(data.Month, 2) + data.Year + data.RegionIdD + data.LSIdD + data.StationNumberD + data.RegionIdO + data.LSIdO + data.StationNumberO + 'D' + '--'; } },//10

            { "data": "ObsMpId48" },//12
            { "data": "ObsMpId48" },//13
            { "mData": function vehicle(data, type, dataToSet) { return GetDigits(data.Day, 2) + GetDigits(data.Month, 2) + data.Year + data.RegionIdD + data.LSIdD + data.StationNumberD + data.RegionIdO + data.LSIdO + data.StationNumberO + '1' + '--'; } },//14

        ],
        "columnDefs": [
            { "width": "3%", "className": "text-center", "targets": 0 },
            { "width": "3%", "className": "text-center", "targets": 1 },
            { "width": "3%", "className": "text-center", "targets": 2 },
            { "width": "3%", "className": "text-right", "targets": 3 },

            { "width": "3%", "className": "text-right", "targets": 4 },
            { "width": "3%", "className": "text-right", "targets": 5 },
            { "width": "3%", "className": "text-center", "targets": 6 },
            { "width": "3%", "className": "text-right", "targets": 7 },

            { "width": "3%", "className": "text-right", "targets": 8 },
            { "width": "3%", "className": "text-right", "targets": 9 },
            { "width": "3%", "className": "text-center", "targets": 10 },

            { "width": "3%", "className": "text-right", "targets": 11 },
            { "width": "3%", "className": "text-right", "targets": 12 },
            { "width": "3%", "className": "text-center", "targets": 13 },

            { "targets": 0, "render": function (data, type, row) { return DataTableDateValueFromRowGet(row); } },
            { "targets": 1, "render": function (data, type, row) { return data; } },
            { "targets": 2, "render": function (data, type, row) { return data; } },
            { "targets": 3, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },

            { "targets": 4, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 5, "render": function (data, type, row) { return DataTablePercentageTwoThresholdsGet(data, row['TotalTrafic'], 2, 2, 5); } },
            { "targets": 6, "render": function (data, type, row) { return DataTableButtonGet('QualifTrxLaneFromOdSearch', data, '\'' + data + '\'', '', 'dt-btn-cl gc-bc1-cl', 'fas fa-eye btn-icon-cl gc-c1-cl', '') } },
            { "targets": 7, "render": function (data, type, row) { return data; } },

            { "targets": 8, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 9, "render": function (data, type, row) { return DataTablePercentageTwoThresholdsGet(data, row['TotalTrafic'], 2, 2, 5); } },
            { "targets": 10, "render": function (data, type, row) { return DataTableButtonGet('QualifTrxLaneFromOdSearch', data, '\'' + data + '\'', '', 'dt-btn-cl gc-bc1-cl', 'fas fa-eye btn-icon-cl gc-c1-cl', '') } },

            { "targets": 11, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 12, "render": function (data, type, row) { return DataTablePercentageTwoThresholdsGet(data, row['TotalTrafic'], 2, 2, 5); } },
            { "targets": 13, "render": function (data, type, row) { return DataTableButtonGet('QualifTrxLaneFromOdSearch', data, '\'' + data + '\'', '', 'dt-btn-cl gc-bc1-cl', 'fas fa-eye btn-icon-cl gc-c1-cl', '') } },

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
        "iDisplayLength": 10,
        "processing": false,
        "responsive": false,
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

            DataTableTotalIntGet(api, intVal, 4);
            DataTableTotalIntGet(api, intVal, 7);
            DataTableTotalIntGet(api, intVal, 8);
            DataTableTotalIntGet(api, intVal, 12);

            DataTableTotalPercentageGet(api, intVal, 4, 3, 5);
            DataTableTotalPercentageGet(api, intVal, 8, 3, 9);
            DataTableTotalPercentageGet(api, intVal, 12, 3, 13);
        }
    });
}


function QualifObsMpLaneDisplay(ActionBtnId, Icon, IsMargin) {

    var RegionId = GetElementValue('RegionId');
    var LSId = GetElementValue('LSId');
    var StationNumber = GetElementValue('StationNumberId');
    var LaneName = GetElementValue('LaneNameId');
    var DateStringStart = GetDateStringFromDatePicker('DateStartId');
    var DateStringEnd = GetDateStringFromDatePicker('DateEndId');

    if (DateStringStart != '' && DateStringEnd != '') {
        QualifObsMpLaneGet(ActionBtnId, Icon, IsMargin, RegionId, LSId, StationNumber, LaneName, DateStringStart, DateStringEnd);
    }
    else {
        ParamMessageErrorDisplay('Les dates de début et de fin, la gare sont obligatoires');
    };
}

function QualifObsMpLaneSearch(Id) {
    var ActionBtnId = new String('QualifObsMpLaneSearchBtnId' + Id);
    var Icon = 'fas fa-eye';
    var IsMargin = false;

    var DateStringStart = new String(Id).substr(0, 8);
    var DateStringEnd = new String(Id).substr(0, 8);
    var RegionId = new String(Id).substr(8, 2);
    var LSId = new String(Id).substr(10, 2);
    var StationNumber = new String(Id).substr(12, 2);
    var LaneName = '0';

    QualifObsMpLaneGet(ActionBtnId, Icon, IsMargin, RegionId, LSId, StationNumber, LaneName, DateStringStart, DateStringEnd);
}


function QualifObsMpLaneGet(ActionBtnId, Icon, IsMargin, RegionId, LSId, StationNumber, LaneName, DateStringStart, DateStringEnd) {

    //Spin
    ActionSpin(ActionBtnId, IsMargin);

    //init
    ParamMessageReset();

    var PatternTable = 'QualifObsMpLane';
    var PatternTableId = PatternTable + 'TableId'
    var PatternTableReportId = PatternTable + 'TableReportId';

    $('#' + PatternTableId).DataTable().destroy();
    $('#' + PatternTableId).DataTable({
        "dom": 'Bfrtip',
        //"buttons": [
        //    'excel'
        //],
        //"buttons": {
        //    buttons: [
        //        {
        //            text: 'PDF',
        //            action: function (e, dt, node, config) {
        //                //alert('Activated!');
        //                QualifTrxLaneStationExport(AxleId, SiteId, BagContainerId, StationNumber, DateStringStart, DateStringEnd, 'PDF');
        //                //Export(\'RepoTraficStationDayAll\', \'Excel\')
        //            }
        //        },
        //        {
        //            text: 'Excel',
        //            action: function (e, dt, node, config) {
        //                //alert('Activated!');
        //                QualifTrxLaneStationExport(AxleId, SiteId, BagContainerId, StationNumber, DateStringStart, DateStringEnd, 'Excel');
        //                //Export(\'RepoTraficStationDayAll\', \'Excel\')
        //            }
        //        }
        //    ]
        //},
        "initComplete": function (settings, json) {
            ActionBtnIconSet(ActionBtnId, Icon);
            ShowReport(PatternTableReportId);
        },
        "ajax": {
            "url": "/Qualif/QualifObsMpLaneGet",
            "type": "GET",
            "datatype": "json",
            "data": {
                RegionId: RegionId,
                LSId: LSId,
                StationNumber: StationNumber,
                LaneName: LaneName,
                DateStringStart: DateStringStart,
                DateStringEnd: DateStringEnd
            }
        },
        "columns": [
            { "data": "" },//0
            { "data": "StationIdCe" },//1
            { "data": "LaneName" },//2
            { "data": "TotalTrafic" },//3

            { "data": "ObsMpId26" },//4
            { "data": "ObsMpId26" },//5
            { "mData": function vehicle(data, type, dataToSet) { return GetDigits(data.Day, 2) + GetDigits(data.Month, 2) + data.Year + data.RegionId + data.LSId + data.StationNumber + data.LaneName + '0' + '26' + '--' + '--'; } },//6
            { "data": "ObsMpId26Qualified" },//7

            { "data": "ObsMpId01" },//8
            { "data": "ObsMpId01" },//9
            { "mData": function vehicle(data, type, dataToSet) { return GetDigits(data.Day, 2) + GetDigits(data.Month, 2) + data.Year + data.RegionId + data.LSId + data.StationNumber + data.LaneName + '0' + '01' + '--' + '--'; } },//10

            { "data": "ObsMpId48" },//11
            { "data": "ObsMpId48" },//12
            { "mData": function vehicle(data, type, dataToSet) { return GetDigits(data.Day, 2) + GetDigits(data.Month, 2) + data.Year + data.RegionId + data.LSId + data.StationNumber + data.LaneName + '0' + '48' + '--' + '--'; } },//13

        ],
        "columnDefs": [
            { "width": "3%", "className": "text-center", "targets": 0 },
            { "width": "3%", "className": "text-center", "targets": 1 },
            { "width": "3%", "className": "text-center", "targets": 2 },
            { "width": "3%", "className": "text-right", "targets": 3 },

            { "width": "3%", "className": "text-right", "targets": 4 },
            { "width": "3%", "className": "text-right", "targets": 5 },
            { "width": "3%", "className": "text-center", "targets": 6 },
            { "width": "3%", "className": "text-right", "targets": 7 },

            { "width": "3%", "className": "text-right", "targets": 8 },
            { "width": "3%", "className": "text-right", "targets": 9 },
            { "width": "3%", "className": "text-center", "targets": 10 },

            { "width": "3%", "className": "text-right", "targets": 11 },
            { "width": "3%", "className": "text-right", "targets": 12 },
            { "width": "3%", "className": "text-center", "targets": 13 },

            { "targets": 0, "render": function (data, type, row) { return DataTableCertifiedInfoGet(row['IsCertified']) + ' ' + DataTableDateValueFromRowGet(row); } },
            { "targets": 1, "render": function (data, type, row) { return data; } },
            { "targets": 2, "render": function (data, type, row) { return data; } },
            { "targets": 3, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },

            { "targets": 4, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 5, "render": function (data, type, row) { return DataTablePercentageTwoThresholdsGet(data, row['TotalTrafic'], 2, 2, 5); } },
            { "targets": 6, "render": function (data, type, row) { return DataTableButtonGet('QualifTrxLaneSearch', data, '\'' + data + '\'', '', 'dt-btn-cl gc-bc1-cl', 'fas fa-eye btn-icon-cl gc-c1-cl', '') } },
            { "targets": 7, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },

            { "targets": 8, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 9, "render": function (data, type, row) { return DataTablePercentageTwoThresholdsGet(data, row['TotalTrafic'], 2, 2, 5); } },
            { "targets": 10, "render": function (data, type, row) { return DataTableButtonGet('QualifTrxLaneSearch', data, '\'' + data + '\'', '', 'dt-btn-cl gc-bc1-cl', 'fas fa-eye btn-icon-cl gc-c1-cl', '') } },

            { "targets": 11, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 12, "render": function (data, type, row) { return DataTablePercentageTwoThresholdsGet(data, row['TotalTrafic'], 2, 2, 5); } },
            { "targets": 13, "render": function (data, type, row) { return DataTableButtonGet('QualifTrxLaneSearch', data, '\'' + data + '\'', '', 'dt-btn-cl gc-bc1-cl', 'fas fa-eye btn-icon-cl gc-c1-cl', '') } },

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
        "iDisplayLength": 10,
        "processing": false,
        "responsive": true,
        "bFilter": true,
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

            DataTableTotalIntGet(api, intVal, 4);
            DataTableTotalIntGet(api, intVal, 7);
            DataTableTotalIntGet(api, intVal, 8);
            DataTableTotalIntGet(api, intVal, 11);

            DataTableTotalPercentageGet(api, intVal, 4, 3, 5);
            DataTableTotalPercentageGet(api, intVal, 8, 3, 9);
            DataTableTotalPercentageGet(api, intVal, 11, 3, 13);
        }
    });
}


function QualifSearchRepeatByTagOpen() {
    QualifAllReportsHide();
    QualifAllParametersHide();
    MenuBarNavHighlight(0, 3, 4);

    ShowParent('DateStartId');
    ShowParent('DateEndId');
    ShowParent('SerialNumberId');

    $('#ParamTitleId').text("Recherchre de récidiviste par numéro de tag");
    ShowReport('ParamReportId');

    DateValueDefaultSet('DateStartId', 8);
    DateValueDefaultSet('DateEndId', 0);

    ParamActionBtnGet(0, 'Afficher', 'fas fa-eye', 'QualifSearchRepeatByTagDisplay()');
}


function QualifSearchRepeatByTagDisplay() {

    //Define
    var ActionBtnId = 'ParamActionBtnId0';
    var Icon = 'fas fa-eye btn-icon-m-cl gc-c1-cl';
    var IsMargin = true;

    var DateStringStart = GetDateStringFromDatePicker('DateStartId');
    var DateStringEnd = GetDateStringFromDatePicker('DateEndId');
    var SerialNumber = GetElementValue('SerialNumberId');
    var PatternTable = 'QualifSearchRepeatByTag';

    QualifSearchRepeatByTagGet(ActionBtnId, Icon, IsMargin, PatternTable, DateStringStart, DateStringEnd, SerialNumber);
}

function QualifSearchRepeatByTagFormSearch(CertTrxLaneInterfaceRowId) {

    //Define    
    var ActionBtnId = new String('QualifSearchRepeatByTagFormSearch' + 'BtnId' + CertTrxLaneInterfaceRowId);
    var Icon = 'fas fa-search';
    var IsMargin = false;

    //Spin
    ActionSpin(ActionBtnId, IsMargin);

    //Read
    var SerialNumber = GetElementValue('SerialNumberId' + CertTrxLaneInterfaceRowId);
    var PatternTable = 'QualifSearchRepeatByTagForm';

    //Get
    QualifPathFormAllHide();
    ShowTableReport('QualifPathOpe');
    ShowTableReport('QualifPathLogs');
    ShowTableReport('QualifPathRequests');
    ShowTableReport('QualifSearchRepeatByTagForm');
    QualifSearchRepeatByTagGet(ActionBtnId, Icon, IsMargin, PatternTable, SerialNumber);
}

function QualifSearchRepeatByTagFormView(SerialNumber) {

    if (SerialNumber != '0000000000000000' && SerialNumber != '') {
        //Define    
        var ActionBtnId = new String('QualifPathEditActionBtnId');
        var Icon = 'far fa-save';
        var IsMargin = true;

        //Spin
        ActionSpin(ActionBtnId, IsMargin);

        //Read
        var PatternTable = 'QualifSearchRepeatByTagForm';

        //Get
        //QualifPathFormAllHide();
        //ShowTableReport('QualifPathOpe');
        //ShowTableReport('QualifPathLogs');
        //ShowTableReport('QualifPathRequests');
        //ShowTableReport('QualifSearchRepeatByTagForm');
        QualifSearchRepeatByTagGet(ActionBtnId, Icon, IsMargin, PatternTable, SerialNumber);
    }    
}

function QualifSearchRepeatByTagGet(ActionBtnId, Icon, IsMargin, PatternTable, DateStringStart, DateStringEnd, SerialNumber) {

    var Client = GetElementValue('ClientId');

    //Spin    
    ActionSpin(ActionBtnId, IsMargin);

    //ParamReset
    ParamMessageReset();

    
    var PatternTableId = PatternTable + 'TableId'
    var PatternTableReportId = PatternTable + 'TableReportId';

    $('#' + PatternTableId).DataTable().destroy();
    $('#' + PatternTableId).DataTable({
        //"dom": 'Bfrtip',
        //"buttons": [
        //    'excel'
        //],
        "dom": 'Bfrtip',
        "buttons": {
            buttons: [
                {
                    text: 'PDF',
                    action: function (e, dt, node, config) {
                        var FileType = 'PDF';
                        QualifSearchRepeatByTagExport(DateStringStart, DateStringEnd, SerialNumber, FileType);
                    }
                },
                {
                    text: 'Excel',
                    action: function (e, dt, node, config) {
                        var FileType = 'Excel';
                        QualifSearchRepeatByTagExport(DateStringStart, DateStringEnd, SerialNumber, FileType);
                    }
                }
            ]
        },
        "initComplete": function (settings, json) {
            ActionBtnSet(ActionBtnId, Icon, IsMargin);
            ShowReport(PatternTableReportId);

            var IsChart = true;
            QualifSearchRepeatByTagReportGet(ActionBtnId, Icon, IsMargin, DateStringStart, DateStringEnd, IsChart);
        },
        "ajax": {
            "url": "/Qualif/QualifSearchRepeatByTagGet",
            "type": "GET",
            "datatype": "json",
            "data": {
                DateStringStart: DateStringStart,
                DateStringEnd: DateStringEnd,
                SerialNumber: SerialNumber
            }
        },
        "columns": [
            { "data": "SerialNumber" },//0

            { "data": "ObsTickIdDCount" },//1
            { "data": "ObsTickIdDCount01" },//2
            { "data": "ObsTickIdDCount02" },//3
            { "mData": function vehicle(data, type, dataToSet) { return data.ProductId + '2'; } },//4
                        
            { "data": "BillingId" },//5
            { "data": "DhmExpiration" },//6
            { "data": "ClientCode" },//7
            { "data": "ClientCategory" },//8
            { "data": "ClientName" },//9
            { "data": "ClientPhone" },//10
            { "data": "Identifiant" },//11
            { "data": "IdentifiantType" },//12
            { "data": "ProductTypeCode" },//13
            { "data": "Email" },//14

            { "data": "TagStatus" },//15
            { "data": "ProductId" },//16   
            { "data": "SerialNumber" },//17

            { "data": "RepeatStatusName" },//18
            { "data": "RepeatComment" },//19
            { "data": "CreatedBy" },//20
            { "data": "DhmCreation" },//21
        ],
        "columnDefs": [
            { "width": "3%", "className": "text-center", "targets": 0 },

            { "width": "3%", "className": "text-right", "targets": 1 },
            { "width": "3%", "className": "text-right", "targets": 2 },
            { "width": "3%", "className": "text-right", "targets": 3 },
            { "width": "3%", "className": "text-right", "targets": 4 },

            { "width": "3%", "className": "text-right none", "targets": 5 },
            { "width": "3%", "className": "text-right none", "targets": 6 },
            { "width": "3%", "className": "text-right none", "targets": 7 },
            { "width": "3%", "className": "text-right", "targets": 8 },
            { "width": "3%", "className": "text-right", "targets": 9 },
            { "width": "3%", "className": "text-right", "targets": 10 },
            { "width": "3%", "className": "text-right none", "targets": 11 },
            { "width": "3%", "className": "text-right none", "targets": 12 },
            { "width": "3%", "className": "text-right none", "targets": 13 },
            { "width": "3%", "className": "text-right none", "targets": 14 },

            { "width": "3%", "className": "text-left", "targets": 15 },
            { "width": "3%", "className": "text-center", "targets": 16 },
            { "width": "3%", "className": "text-center", "targets": 17 },

            { "width": "3%", "className": "text-left", "targets": 18 },
            { "width": "3%", "className": "text-left none", "targets": 19 },
            { "width": "3%", "className": "text-left", "targets": 20 },
            { "width": "3%", "className": "text-center", "targets": 21 },

            { "targets": 0, "render": function (data, type, row) { return data; } },

            { "targets": 1, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 2, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 3, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 4, "render": function (data, type, row) { return DataTableButtonGet('QualifSearchRepeatPathGet', data, data + ', \'' + row['SerialNumber'] + '\', \'\', \'D\', \'0\'', '', 'dt-btn-cl gc-bc1-cl', 'fas fa-eye btn-icon-cl gc-c1-cl', '') } },
                        
            { "targets": 5, "render": function (data, type, row) { return data; } },
            { "targets": 6, "render": function (data, type, row) { return GetDhmValueFromDataTableDate(data); } },
            { "targets": 7, "render": function (data, type, row) { return data; } },
            { "targets": 8, "render": function (data, type, row) { return data; } },
            {
                "targets": 9, "render": function (data, type, row) {
                    if (Client == 'Client') {
                        return data
                    }
                    else {
                        return '';
                    }
                }
            },
            {
                "targets": 10, "render": function (data, type, row) {
                    if (Client == 'Client') {
                        return data
                    }
                    else {
                        return '';
                    }
                }
            },
            { "targets": 11, "render": function (data, type, row) { return data; } },
            { "targets": 12, "render": function (data, type, row) { return data; } },
            { "targets": 13, "render": function (data, type, row) { return data; } },
            {
                "targets": 14, "render": function (data, type, row) {
                    if (Client == 'Client') {
                        return data
                    }
                    else {
                        return '';
                    }
                }
            },
            { "targets": 15, "render": function (data, type, row) { return data; } },
            //{ "targets": 16, "render": function (data, type, row) { return DataTableModalFormBtnEditGet(PatternTable, data); } },
            {
                "targets": 16, "render": function (data, type, row) {
                    var QualifControlTypeId = 'D';
                    var PatternForm = 'Edit';
                    var Icon = 'fas fa-edit';
                    var Label = '';
                    var RowId = data;

                    var OnClick = 'QualifSearchRepeatByTagFormLoad(\'' +
                        PatternTable + '\',\'' +
                        PatternForm + '\', ' +
                        row['ProductId'] + ',' +
                        '\'' + row['SerialNumber'] + '\', ' +
                        '\'' + row['BillingId'] + '\', ' +
                        '\'' + row['DhmExpiration'] + '\', ' +
                        '\'' + row['ClientCode'] + '\', ' +
                        '\'' + row['ClientCategory'] + '\', ' +
                        '\'' + row['ClientName'] + '\', ' +
                        '\'' + row['ClientPhone'] + '\', ' +
                        '\'' + row['Identifiant'] + '\', ' +
                        '\'' + row['IdentifiantType'] + '\', ' +
                        '\'' + row['ProductTypeCode'] + '\', ' +
                        '\'' + row['Email'] + '\', ' +
                        '\'' + row['TagStatus'] + '\', ' +
                        '\'' + QualifControlTypeId + '\'' +
                        ')';

                    return DataTableFormBtnIdGet(PatternTable, PatternForm, RowId, Label, OnClick, Icon);
                }
            },
            { "targets": 17, "render": function (data, type, row) { return DataTableButtonGet('ParamProductUpdate', data, '\'' + row['SerialNumber'] + '\'', '', 'dt-btn-cl gc-bc1-cl', 'fas fa-redo-alt btn-icon-cl gc-c1-cl', '') } },

            { "targets": 18, "render": function (data, type, row) { return data; } },
            { "targets": 19, "render": function (data, type, row) { return data; } },
            { "targets": 20, "render": function (data, type, row) { return data; } },
            { "targets": 21, "render": function (data, type, row) { return GetDhmValueNulFromDataTableDate(data); } },

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
        "iDisplayLength": 10,
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

            DataTableTotalIntGet(api, intVal, 1);
            DataTableTotalIntGet(api, intVal, 2);
            DataTableTotalIntGet(api, intVal, 3);
        }
    });
}

function QualifSearchRepeatByTagReportGet(ActionBtnId, Icon, IsMargin, DateStringStart, DateStringEnd, IsChart) {

    ActionSpin(ActionBtnId, IsMargin);

    var PatternTable = 'QualifSearchRepeatByTagReport';
    var PatternTableId = PatternTable + 'TableId'
    var PatternTableReportId = PatternTable + 'TableReportId';

    var data00 = 0;
    var data01 = 0;
    var data02 = 0;

    var data10 = 0;
    var data11 = 0;
    var data12 = 0;
    var data13 = 0;

    var data20 = 0;
    var data21 = 0;

    var data30 = 0;
    var data31 = 0;
    var data32 = 0;

    var data40 = 0;
    var data41 = 0;
    var data42 = 0;

    $('#' + PatternTableId).DataTable().destroy();
    $('#' + PatternTableId).DataTable({
        "dom": 'Bfrtip',
        "buttons": [
            'excel'
        ],
        "initComplete": function (settings, json) {
            ActionBtnSet(ActionBtnId, Icon, IsMargin);
            ShowReport(PatternTableReportId);

            if (IsChart == true) {

                var PatternChartCommon = 'RepeatByTag';
                //Doughnut 0
                var Title = 'Récidivistes Jawaz par catégorie de client';
                var PatternChart = PatternChartCommon + 'ClientCategoryDoughnut';
                var label00 = 'Entreprise';
                var label01 = 'Particulier';
                var label02 = 'Administration';

                var data = {
                    datasets: [{
                        data: [data00, data01, data02],
                        backgroundColor: ['#03045e', '#adb5bd'],
                    }],

                    labels: [label00, label01, label02]
                };

                document.getElementById(PatternChart + 'ChartCardId').style.border = 'transparent';
                ChartJsDoughnutOneDisplay(Title, PatternChart, data);

                //Doughnut 1
                var Title = 'Récidivistes Jawaz par statut de traitement';
                var PatternChart = PatternChartCommon + 'RepeatStatusDoughnut';
                var label10 = 'Client contacté';
                var label11 = 'Montant réglé amiable';
                var label12 = 'Demande MLN';
                var label13 = 'En attente';

                var data = {
                    datasets: [{
                        data: [data10, data11, data12, data13],
                        backgroundColor: ['#0077b6', '#adb5bd', '#000000', '#e29578'],
                    }],
                    labels: [label10, label11, label12, label13]
                };
                document.getElementById(PatternChart + 'ChartCardId').style.border = 'transparent';
                ChartJsDoughnutOneDisplay(Title, PatternChart, data);

                //Doughnut 2
                var Title = 'Récidivistes Jawaz par statut du Tag';
                var PatternChart = PatternChartCommon + 'TagStatusDoughnut';
                var label20 = 'Tag valid';
                var label21 = 'Tag en liste noir';

                var data = {
                    datasets: [{
                        data: [data20, data21],
                        backgroundColor: ['#38b000', '#000000'],
                    }],

                    labels: [label20, label21]
                };
                document.getElementById(PatternChart + 'ChartCardId').style.border = 'transparent';
                ChartJsDoughnutOneDisplay(Title, PatternChart, data);

                //Doughnut 3
                var Title = 'Récidivistes Jawaz par occurence';
                var PatternChart = PatternChartCommon + 'RepeatDoughnut';
                var label30 = '2-4';
                var label31 = '5-9';
                var label32 = '>=10';
                var data = {
                    datasets: [{
                        data: [data30, data31, data32],
                        backgroundColor: ['#ffbe0b', '#fb5607', '#d90429'],
                    }],
                    labels: [label30, label31, label32]
                };
                document.getElementById(PatternChart + 'ChartCardId').style.border = 'transparent';
                ChartJsDoughnutOneDisplay(Title, PatternChart, data);

                //Doughnut 4
                var Title = 'Récidivistes Jawaz traités par région';
                var PatternChart = PatternChartCommon + 'HandleDoughnut';
                var label40 = 'DRNE';
                var label41 = 'DRCS';
                var label42 = 'Non traité';
                var data = {
                    datasets: [{
                        data: [data40, data41, data42],
                        backgroundColor: ['#00bbf9', '#00f5d4', '#adb5bd'],
                    }],
                    labels: [label40, label41, label42]
                };
                document.getElementById(PatternChart + 'ChartCardId').style.border = 'transparent';
                ChartJsDoughnutOneDisplay(Title, PatternChart, data);

                
                ShowGridReport('Grid_0008');
            }
        },
        "ajax": {
            "url": "/Qualif/QualifSearchRepeatByTagReportGet",
            "type": "GET",
            "datatype": "json",
            "data": {
                DateStringStart: DateStringStart,
                DateStringEnd: DateStringEnd
            }
        },
        "columns": [
            { "data": "" },//0
            { "data": "" },//1

            { "data": "Total" },//2

            { "data": "ClientCategoryE" },//3
            { "data": "ClientCategoryP" },//4
            { "data": "ClientCategoryA" },//5

            { "data": "RepeatStatus00" },//6
            { "data": "RepeatStatus02" },//7
            { "data": "RepeatStatus03" },//8
            { "data": "RepeatStatus99" },//9

            { "data": "TagStatusV" },//10
            { "data": "TagStatusLN" },//11

            { "data": "Repeat24" },//12
            { "data": "Repeat59" },//13
            { "data": "Repeat10" },//14

            { "data": "HandleDRNE" },//15
            { "data": "HandleDRCS" },//16
            { "data": "HandleNOT" },//17
        ],
        "columnDefs": [
            { "width": "3%", "className": "text-center", "targets": 0 },
            { "width": "3%", "className": "text-center", "targets": 1 },

            { "width": "3%", "className": "text-right", "targets": 2 },

            { "width": "3%", "className": "text-right", "targets": 3 },
            { "width": "3%", "className": "text-right", "targets": 4 },
            { "width": "3%", "className": "text-right", "targets": 5 },

            { "width": "3%", "className": "text-right", "targets": 6 },
            { "width": "3%", "className": "text-right", "targets": 7 },
            { "width": "3%", "className": "text-right", "targets": 8 },
            { "width": "3%", "className": "text-right", "targets": 9 },

            { "width": "3%", "className": "text-right", "targets": 10 },
            { "width": "3%", "className": "text-right", "targets": 11 },

            { "width": "3%", "className": "text-right", "targets": 12 },
            { "width": "3%", "className": "text-right", "targets": 13 },
            { "width": "3%", "className": "text-right", "targets": 14 },

            { "width": "3%", "className": "text-center", "targets": 15 },
            { "width": "3%", "className": "text-center", "targets": 16 },
            { "width": "3%", "className": "text-center", "targets": 17 },

            { "targets": 0, "render": function (data, type, row) { return DataTableDateValueStartFromRowGet(row); } },
            { "targets": 1, "render": function (data, type, row) { return DataTableDateValueEndFromRowGet(row); } },

            { "targets": 2, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },

            { "targets": 3, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 4, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 5, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },

            { "targets": 6, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 7, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 8, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 9, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },

            { "targets": 10, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 11, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },

            { "targets": 12, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 13, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 14, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },

            { "targets": 15, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 16, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 17, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
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
        "iDisplayLength": 10,
        "processing": false,
        "responsive": false,
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

            DataTableTotalIntGet(api, intVal, 2);

            DataTableTotalIntGet(api, intVal, 3);
            DataTableTotalIntGet(api, intVal, 4);
            DataTableTotalIntGet(api, intVal, 5);

            DataTableTotalIntGet(api, intVal, 6);
            DataTableTotalIntGet(api, intVal, 7);
            DataTableTotalIntGet(api, intVal, 8);
            DataTableTotalIntGet(api, intVal, 9);

            DataTableTotalIntGet(api, intVal, 10);
            DataTableTotalIntGet(api, intVal, 11);

            DataTableTotalIntGet(api, intVal, 12);
            DataTableTotalIntGet(api, intVal, 13);
            DataTableTotalIntGet(api, intVal, 14);

            DataTableTotalIntGet(api, intVal, 15);
            DataTableTotalIntGet(api, intVal, 16);
            DataTableTotalIntGet(api, intVal, 17);

            data00 = DataTableColumnPercentageGet(api, intVal, 3, 2);
            data01 = DataTableColumnPercentageGet(api, intVal, 4, 2);
            data02 = DataTableColumnPercentageGet(api, intVal, 5, 2);

            data10 = DataTableColumnPercentageGet(api, intVal, 6, 2);
            data11 = DataTableColumnPercentageGet(api, intVal, 7, 2);
            data12 = DataTableColumnPercentageGet(api, intVal, 8, 2);
            data13 = DataTableColumnPercentageGet(api, intVal, 9, 2);

            data20 = DataTableColumnPercentageGet(api, intVal, 10, 2);
            data21 = DataTableColumnPercentageGet(api, intVal, 11, 2);

            data30 = DataTableColumnPercentageGet(api, intVal, 12, 2);
            data31 = DataTableColumnPercentageGet(api, intVal, 13, 2);
            data32 = DataTableColumnPercentageGet(api, intVal, 14, 2);

            data40 = DataTableColumnPercentageGet(api, intVal, 15, 2);
            data41 = DataTableColumnPercentageGet(api, intVal, 16, 2);
            data42 = DataTableColumnPercentageGet(api, intVal, 17, 2);
        }
    });
}

function QualifSearchRepeatByTagInsightGet() {

    var PatternTable = 'QualifSearchRepeatByTagHome';
    var PatternTableId = PatternTable + 'TableId'
    var PatternTableReportId = PatternTable + 'TableReportId';
    var PatternTableCardId = PatternTable + 'TableCardId';

    //style
    document.getElementById(PatternTableCardId).style.height = '700px';
    document.getElementById(PatternTableCardId).style.overflow = 'scroll';

    HideReport(PatternTableReportId);

    $('#' + PatternTableId).DataTable().destroy();
    $('#' + PatternTableId).DataTable({
        "initComplete": function (settings, json) {
            ShowReport(PatternTableReportId);
        },
        "ajax": {
            "url": "/Qualif/QualifSearchRepeatByTagHomeGet",
            "type": "GET",
            "datatype": "json"
        },
        "columns": [
            { "data": "SerialNumber" },//0

            { "data": "ObsTickIdPCount" },//1
            { "data": "ObsTickIdDCount" },//2
        ],
        "columnDefs": [
            { "width": "3%", "className": "text-center", "targets": 0 },

            { "width": "3%", "className": "text-right", "targets": 1 },
            { "width": "3%", "className": "text-right", "targets": 2 },

            { "targets": 0, "render": function (data, type, row) { return data; } },

            { "targets": 1, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 2, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },

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
        "iDisplayLength": 7,
        "processing": false,
        "responsive": false,
        "bFilter": false,
        "autoWidth": false,
        "searching": false,
        "lengthChange": false,
        "showNEntries": false,
        "bInfo": false,
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

            DataTableTotalIntGet(api, intVal, 1);
            DataTableTotalIntGet(api, intVal, 2);
        }
    });
}

function QualifSearchRepeatPathGet(ProductId, SerialNumber, LicensePlate, ObsTickId, ObsMpId) {
    var ActionBtnId = new String('QualifSearchRepeatPathGet' + 'BtnId' + ProductId);
    var Icon = 'fas fa-eye btn-icon-cl gc-c1-cl';
    var IsMargin = false;

    ActionSpin(ActionBtnId, IsMargin);

    var RegionId = '0';
    var LSId = '0';
    var StationNumber = '0';
    var LaneName = '0';

    var DhmStringStart = '010320220000';
    var DhmStringEnd = '010120280000';
    var IsImage = false;
    var IsImageIapi = false;

    var RegionIdO = '0';
    var LSIdO = '0';
    var StationNumberO = '0';
    var LaneNameO = '0';
    var DhmStringStartO = '280220220000';
    var DhmStringEndO = '010120280000';
    var IsImageO = false;
    var IsImageIapiO = false;

    var BillingId = '0';
    var CategoryId = '0';

    var PresetId = '0';
    var ObsPassId = '0';
    var ObsTickId = ObsTickId;
    var ObsMpId = ObsMpId;

    var QualifControlId = '0';

    var QualifReasonId = '0';

    var IsConvenientContext = false;
    var IsConvenientIapi = false;
    var IsConvenientClass = false;
    var IsPathQualified = false;

    var IsConvenientContextO = false;
    var IsConvenientIapiO = false;

    var IsContextOnly = false;
    var IsIapiOnly = false;
    var IsPathOnly = true;
    var IsSortieOnly = false;

    var RowIdTrxLane = 0;
    var ProductNumber = '';

    var IsLabel = false;
    var IsCyclopeClassify = false;
    var IsCyclopePath = false;
    var IsPathQualifiable = false;
    if (ObsTickId == 'P') {
        IsPathQualifiable = true;
        QualifControlId = '02';
    }
    if (ObsTickId == 'D') {
        IsPathQualifiable = false;
        IsPathOnly = false;
        IsSortieOnly = false;
        QualifControlId = '06';
    }

    var OctalCode = '0';
    var IsLabeled = false;

    var SerialNumber = SerialNumber;
    var LicensePlate = LicensePlate;

    var IsCyclopeClassDiscId = false;
    var IsCyclopePathDiscId = false;

    //hide some reports
    HideReport('QualifPath' + 'TableReportId');

    QualifPathGet(ActionBtnId, Icon,
        RegionId, LSId, StationNumber, LaneName, DhmStringStart, DhmStringEnd, IsImage, IsImageIapi,
        RegionIdO, LSIdO, StationNumberO, LaneNameO, DhmStringStartO, DhmStringEndO, IsImageO, IsImageIapiO,
        BillingId, CategoryId,
        PresetId, ObsPassId, ObsTickId, ObsMpId,
        IsConvenientContext, IsConvenientIapi, IsConvenientClass, IsPathQualified,
        IsConvenientContextO, IsConvenientIapiO,
        IsContextOnly, IsIapiOnly, IsPathOnly, IsSortieOnly,
        RowIdTrxLane,
        ProductNumber,
        IsLabel, IsCyclopeClassify, IsCyclopePath,
        OctalCode,
        IsPathQualifiable,
        IsLabeled,
        SerialNumber, LicensePlate,
        QualifControlId, QualifReasonId,
        IsCyclopeClassDiscId, IsCyclopePathDiscId);   
}

function QualifSearchRepeatByPlateOpen() {
    QualifAllReportsHide();
    QualifAllParametersHide();
    MenuBarNavHighlight(0, 4, 4);

    ShowParent('DateStartId');
    ShowParent('DateEndId');
    ShowParent('LicensePlateId');

    $('#ParamTitleId').text("Recherchre de récidiviste par plaque d'immatriculation");
    ShowReport('ParamReportId');

    DateValueDefaultSet('DateStartId', 8);
    DateValueDefaultSet('DateEndId', 0);


    ParamActionBtnGet(0, 'Afficher', 'fas fa-eye', 'QualifSearchRepeatByPlateDisplay()');
}

function QualifSearchRepeatByPlateDisplay() {

    //Define
    var ActionBtnId = 'ParamActionBtnId0';
    var Icon = 'fas fa-eye btn-icon-m-cl gc-c1-cl';
    var IsMargin = true;

    var DateStringStart = GetDateStringFromDatePicker('DateStartId');
    var DateStringEnd = GetDateStringFromDatePicker('DateEndId');
    var LicensePlate = GetElementValue('LicensePlateId');
    var PatternTable = 'QualifSearchRepeatByPlate';

    QualifSearchRepeatByPlateGet(ActionBtnId, Icon, IsMargin, PatternTable, DateStringStart, DateStringEnd, LicensePlate);
}

function QualifSearchRepeatByPlateFormSearch(CertTrxLaneInterfaceRowId) {

    //Define    
    var ActionBtnId = new String('QualifSearchRepeatByPlateFormSearch' + 'BtnId' + CertTrxLaneInterfaceRowId);
    var Icon = 'fas fa-search';
    var IsMargin = false;

    //Spin
    ActionSpin(ActionBtnId, IsMargin);

    //Read
    var LicensePlate = GetElementValue('LicensePlateId' + CertTrxLaneInterfaceRowId);
    var PatternTable = 'QualifSearchRepeatByPlateForm';

    //Get
    QualifPathFormAllHide();
    ShowTableReport('QualifPathOpe');
    ShowTableReport('QualifPathLogs');
    ShowTableReport('QualifPathRequests');
    ShowTableReport('QualifSearchRepeatByPlateForm');
    QualifSearchRepeatByPlateGet(ActionBtnId, Icon, IsMargin, PatternTable, LicensePlate);
}


function QualifSearchRepeatByPlateFormView(LicensePlate) {

    if (LicensePlate != '') {
        //Define    
        var ActionBtnId = new String('QualifPathEditActionBtnId');
        var Icon = 'far fa-save';
        var IsMargin = true;

        //Spin
        ActionSpin(ActionBtnId, IsMargin);

        //Read
        var PatternTable = 'QualifSearchRepeatByPlateForm';

        //Get
        //QualifPathFormAllHide();
        //ShowTableReport('QualifPathOpe');
        //ShowTableReport('QualifPathLogs');
        //ShowTableReport('QualifPathRequests');
        //ShowTableReport('QualifSearchRepeatByPlateForm');
        QualifSearchRepeatByPlateGet(ActionBtnId, Icon, IsMargin, PatternTable, LicensePlate);
    }    
}

function QualifSearchRepeatByPlateGet(ActionBtnId, Icon, IsMargin, PatternTable, DateStringStart, DateStringEnd, LicensePlate) {

    //Spin    
    ActionSpin(ActionBtnId, IsMargin);

    //ParamReset
    ParamMessageReset();
    
    var PatternTableId = PatternTable + 'TableId'
    var PatternTableReportId = PatternTable + 'TableReportId';

    $('#' + PatternTableId).DataTable().destroy();
    $('#' + PatternTableId).DataTable({
        "dom": 'Bfrtip',
        "buttons": [
            'excel'
        ],
        "initComplete": function (settings, json) {
            ActionBtnSet(ActionBtnId, Icon, IsMargin);
            ShowReport(PatternTableReportId);
        },
        "ajax": {
            "url": "/Qualif/QualifSearchRepeatByPlateGet",
            "type": "GET",
            "datatype": "json",
            "data": {
                DateStringStart: DateStringStart,
                DateStringEnd: DateStringEnd,
                LicensePlate: LicensePlate
            }
        },
        "columns": [
            { "data": "LicensePlate" },//0

            { "data": "ObsTickIdDCount" },//1
            { "data": "ObsTickIdDCount01" },//2
            { "data": "ObsTickIdDCount02" },//3
            { "data": "PlateId" },//4
        ],
        "columnDefs": [
            { "width": "3%", "className": "text-center", "targets": 0 },

            { "width": "3%", "className": "text-right", "targets": 1 },
            { "width": "3%", "className": "text-right", "targets": 2 },
            { "width": "3%", "className": "text-right", "targets": 3 },
            { "width": "3%", "className": "text-right", "targets": 4 },

            { "targets": 0, "render": function (data, type, row) { return data; } },

            { "targets": 1, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 2, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 3, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 4, "render": function (data, type, row) { return DataTableButtonGet('QualifSearchRepeatPathGet', data, data + ', \'\', \'' + row['LicensePlate'] + '\', \'D\', \'0\'', '', 'dt-btn-cl gc-bc1-cl', 'fas fa-eye btn-icon-cl gc-c1-cl', '') } },

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
        "iDisplayLength": 10,
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

            DataTableTotalIntGet(api, intVal, 1);
            DataTableTotalIntGet(api, intVal, 2);
            DataTableTotalIntGet(api, intVal, 3);
        }
    });
}


function QualifSearchRepeatByPlateInsightGet() {

    var PatternTable = 'QualifSearchRepeatByPlateHome';
    var PatternTableId = PatternTable + 'TableId'
    var PatternTableReportId = PatternTable + 'TableReportId';
    var PatternTableCardId = PatternTable + 'TableCardId';

    //style
    document.getElementById(PatternTableCardId).style.height = '700px';
    document.getElementById(PatternTableCardId).style.overflow = 'scroll';

    HideReport(PatternTableReportId);
    $('#' + PatternTableId).DataTable().destroy();
    $('#' + PatternTableId).DataTable({
        "initComplete": function (settings, json) {
            ShowReport(PatternTableReportId);
        },
        "ajax": {
            "url": "/Qualif/QualifSearchRepeatByPlateHomeGet",
            "type": "GET",
            "datatype": "json"
        },
        "columns": [
            { "data": "LicensePlate" },//0

            { "data": "ObsTickIdPCount" },//1
            { "data": "ObsTickIdDCount" },//2
        ],
        "columnDefs": [
            { "width": "3%", "className": "text-center", "targets": 0 },

            { "width": "3%", "className": "text-right", "targets": 1 },
            { "width": "3%", "className": "text-right", "targets": 2 },

            { "targets": 0, "render": function (data, type, row) { return data; } },

            { "targets": 1, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 2, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },

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
        "iDisplayLength": 7,
        "processing": false,
        "responsive": false,
        "bFilter": false,
        "autoWidth": false,
        "searching": false,
        "lengthChange": false,
        "showNEntries": false,
        "bInfo": false,
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

            DataTableTotalIntGet(api, intVal, 1);
            DataTableTotalIntGet(api, intVal, 2);

        }
    });
}


function QualifObsPassOpen() {
    QualifAllReportsHide();
    QualifAllParametersHide();
    MenuBarNavHighlight(1, 2, 2);

    $('#ParamTitleId').text("Observation Passage");
    ShowReport('ParamReportId');

    ShowReport('RegionId' + 'Parent');
    ShowReport('LSId' + 'Parent');
    ShowReport('StationNumberId' + 'Parent');

    ShowParent('TimeId');
    ShowReport('DateStartId' + 'Parent');
    ShowReport('DateEndId' + 'Parent');

    //OnChange
    ElementOnChangeSet('StationNumberId', "")

    $.ajax({
        url: "/Common/RoleNameListGet",
        method: "POST",
        contentType: "application/json; charset=utf-8",
        async: true,
        success: function (data) {
            if (data.includes('Administrateur')) {
                //Actions
                ParamActionBtnGet(0, 'Afficher', 'fas fa-eye', 'QualifObsPassAllDisplay()');

                DateValueDefaultSet('DateStartId', 2);
                DateValueDefaultSet('DateEndId', 2);

                ElementDropDownListReset('LSId');
                ElementDropDownListReset('StationNumberId');

                DropDownListSet('TimeId', '07');
                QualifTimePreset();
            }
            else {
                if (data.includes('QualifPathSupervisor')) {
                    //Actions
                    ParamActionBtnGet(0, 'Afficher', 'fas fa-eye', 'QualifObsPassAllDisplay()');

                    DateValueDefaultSet('DateStartId', 2);
                    DateValueDefaultSet('DateEndId', 2);

                    ElementDropDownListReset('LSId');
                    ElementDropDownListReset('StationNumberId');

                    DropDownListSet('TimeId', '07');
                    QualifTimePreset();
                }
                else {
                    if (data.includes('QualifPath')) {
                        //Actions
                        ParamActionBtnGet(0, 'Afficher', 'fas fa-eye', 'QualifObsPassAllDisplay()');

                        DateValueDefaultSet('DateStartId', 2);
                        DateValueDefaultSet('DateEndId', 2);

                        DropDownListSet('TimeId', '07');
                        QualifTimePreset();
                    }
                }
            }
        }
    });

    NotiConnectionIdUpdate('Qualification - Observation Passage');
}


function QualifObsPassAllDisplay() {
    //Define
    var ActionBtnId = 'ParamActionBtnId0';
    var Icon = 'fas fa-eye btn-icon-m-cl gc-c1-cl';
    var TimeId = GetElementValue('TimeId');
    var IsMargin = new Boolean(true);

    QualifAllReportsHide();
    ShowReport('ParamReportId');

    if (TimeId == '01') {//Day
        QualifObsPassDayDisplay(ActionBtnId, Icon, IsMargin);
    }
    else {
        if (TimeId == '09') {//Region
            QualifObsPassRegionDisplay(ActionBtnId, Icon, IsMargin);
        }
        else {
            if (TimeId == '07') {//Station
                QualifObsPassStationDisplay(ActionBtnId, Icon, IsMargin);
            }
            else {
                if (TimeId == '10') {//Od
                    QualifObsPassOdDisplay(ActionBtnId, Icon, IsMargin);
                }
                else {
                    ParamMessageErrorDisplay('Ce niveau n\'est pas authorisé');
                }
            }
        }
    }
}

function QualifObsPassDayDisplay(ActionBtnId, Icon, IsMargin) {
    var DateStringStart = GetDateStringFromDatePicker('DateStartId');
    var DateStringEnd = GetDateStringFromDatePicker('DateEndId');

    if (DateStringStart != '' && DateStringEnd != '') {
        QualifObsPassDayGet(ActionBtnId, Icon, IsMargin, DateStringStart, DateStringEnd);
    }
    else {
        ParamMessageErrorDisplay('Les dates de début et de fin sont obligatoires');
    };
}


function QualifObsPassDayGet(ActionBtnId, Icon, IsMargin, DateStringStart, DateStringEnd) {

    //Spin
    ActionSpin(ActionBtnId, IsMargin);

    //init
    ParamMessageReset();

    var PatternTable = 'QualifObsPassDay';
    var PatternTableId = PatternTable + 'TableId'
    var PatternTableReportId = PatternTable + 'TableReportId';

    $('#' + PatternTableId).DataTable().destroy();
    $('#' + PatternTableId).DataTable({
        "dom": 'Bfrtip',
        "buttons": [
            'excel'
        ],
        //"dom": 'Bfrtip',
        //"buttons": {
        //    buttons: [
        //        {
        //            text: 'PDF',
        //            action: function (e, dt, node, config) {
        //                var AxleId = '0';
        //                var SiteId = '0';
        //                var BagContainerId = '0';
        //                var StationNumber = '0';
        //                QualifTrxLaneDayExport(AxleId, SiteId, BagContainerId, StationNumber, DateStringStart, DateStringEnd, 'PDF');
        //            }
        //        },
        //        {
        //            text: 'Excel',
        //            action: function (e, dt, node, config) {
        //                var AxleId = '0';
        //                var SiteId = '0';
        //                var BagContainerId = '0';
        //                var StationNumber = '0';
        //                QualifTrxLaneStationExport(AxleId, SiteId, BagContainerId, StationNumber, DateStringStart, DateStringEnd, 'Excel');
        //            }
        //        }
        //    ]
        //},
        "initComplete": function (settings, json) {
            ActionBtnIconSet(ActionBtnId, Icon);
            ShowReport(PatternTableReportId);
        },
        "ajax": {
            "url": "/Qualif/QualifObsPassDayGet",
            "type": "GET",
            "datatype": "json",
            "data": {
                DateStringStart: DateStringStart,
                DateStringEnd: DateStringEnd
            }
        },
        "columns": [
            { "data": "" },//0
            { "data": "TotalTrafic" },//1

            { "data": "ObsPassId3" },//2
            { "data": "ObsPassId3" },//3

            { "data": "ObsPassId6" },//4
            { "data": "ObsPassId6" },//5

            { "data": "ObsPassId7" },//6
            { "data": "ObsPassId7" },//7

            { "data": "ObsPassIdW" },//8
            { "data": "ObsPassIdW" },//9

            { "data": "ObsPassIdA" },//10
            { "data": "ObsPassIdA" },//11

            { "data": "ObsPassIdV" },//12
            { "data": "ObsPassIdV" },//13

            { "mData": function vehicle(data, type, dataToSet) { return GetDigits(data.Day, 2) + GetDigits(data.Month, 2) + data.Year; } },//14
        ],
        "columnDefs": [
            { "width": "3%", "className": "text-center", "targets": 0 },
            { "width": "3%", "className": "text-center", "targets": 1 },

            { "width": "3%", "className": "text-right", "targets": 2 },
            { "width": "3%", "className": "text-right", "targets": 3 },

            { "width": "3%", "className": "text-right", "targets": 4 },
            { "width": "3%", "className": "text-right", "targets": 5 },

            { "width": "3%", "className": "text-right", "targets": 6 },
            { "width": "3%", "className": "text-right", "targets": 7 },

            { "width": "3%", "className": "text-right", "targets": 8 },
            { "width": "3%", "className": "text-right", "targets": 9 },

            { "width": "3%", "className": "text-right", "targets": 10 },
            { "width": "3%", "className": "text-right", "targets": 11 },

            { "width": "3%", "className": "text-right", "targets": 12 },
            { "width": "3%", "className": "text-right", "targets": 13 },

            { "width": "3%", "className": "text-center", "targets": 14 },

            { "targets": 0, "render": function (data, type, row) { return DataTableCertifiedInfoGet(row['IsCertified']) + ' ' + DataTableDateValueFromRowGet(row); } },
            { "targets": 1, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },

            { "targets": 2, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 3, "render": function (data, type, row) { return DataTablePercentageTwoThresholdsGet(data, row['TotalTrafic'], 2, 2, 5); } },

            { "targets": 4, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 5, "render": function (data, type, row) { return DataTablePercentageTwoThresholdsGet(data, row['TotalTrafic'], 2, 2, 5); } },

            { "targets": 6, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 7, "render": function (data, type, row) { return DataTablePercentageTwoThresholdsGet(data, row['TotalTrafic'], 2, 2, 5); } },

            { "targets": 8, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 9, "render": function (data, type, row) { return DataTablePercentageTwoThresholdsGet(data, row['TotalTrafic'], 2, 2, 5); } },

            { "targets": 10, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 11, "render": function (data, type, row) { return DataTablePercentageTwoThresholdsGet(data, row['TotalTrafic'], 2, 2, 5); } },

            { "targets": 12, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 13, "render": function (data, type, row) { return DataTablePercentageTwoThresholdsGet(data, row['TotalTrafic'], 2, 2, 5); } },

            { "targets": 14, "render": function (data, type, row) { return DataTableButtonGet('QualifObsPassRegionSearch', data, '\'' + data + '\'', '', 'dt-btn-cl gc-bc1-cl', 'fas fa-eye btn-icon-cl gc-c1-cl', '') } },

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
        "iDisplayLength": 10,
        "processing": false,
        "responsive": true,
        "bFilter": true,
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

            DataTableTotalIntGet(api, intVal, 2);
            DataTableTotalIntGet(api, intVal, 4);
            DataTableTotalIntGet(api, intVal, 6);
            DataTableTotalIntGet(api, intVal, 8);
            DataTableTotalIntGet(api, intVal, 10);
            DataTableTotalIntGet(api, intVal, 12);

            DataTableTotalPercentageGet(api, intVal, 2, 1, 3);
            DataTableTotalPercentageGet(api, intVal, 4, 1, 5);
            DataTableTotalPercentageGet(api, intVal, 6, 1, 7);
            DataTableTotalPercentageGet(api, intVal, 8, 1, 9);
            DataTableTotalPercentageGet(api, intVal, 10, 1, 11);
            DataTableTotalPercentageGet(api, intVal, 12, 1, 13);
        }
    });
}


function QualifObsPassRegionDisplay(ActionBtnId, Icon, IsMargin) {

    var RegionId = GetElementValue('RegionId');
    var DateStringStart = GetDateStringFromDatePicker('DateStartId');
    var DateStringEnd = GetDateStringFromDatePicker('DateEndId');

    QualifAllReportsHide();
    ShowReport('ParamReportId');
    ParamMessageReset();

    if (DateStringStart != '' && DateStringEnd != '') {
        QualifObsPassRegionGet(ActionBtnId, Icon, IsMargin, RegionId, DateStringStart, DateStringEnd);
    }
    else {
        ParamMessageErrorDisplay('Les dates de début et de fin sont obligatoires');
    };
}


function QualifObsPassRegionSearch(Id) {

    var ActionBtnId = new String('QualifObsPassRegionSearchBtnId' + Id);
    var Icon = 'fas fa-eye';
    var IsMargin = false;

    //hide some reports 
    HideTableReport('QualifObsPassStation');
    HideTableReport('QualifObsPassLane');
    HideTableReport('QualifTrxLane');
    HideTableReport('CertFilePlan');

    var DateStringStart = new String(Id).substr(0, 8);
    var DateStringEnd = new String(Id).substr(0, 8);
    var RegionId = '0';

    QualifObsPassRegionGet(ActionBtnId, Icon, IsMargin, RegionId, DateStringStart, DateStringEnd);
}


function QualifObsPassRegionGet(ActionBtnId, Icon, IsMargin, RegionId, DateStringStart, DateStringEnd) {

    //Spin
    ActionSpin(ActionBtnId, IsMargin);

    //init
    ParamMessageReset();

    var PatternTable = 'QualifObsPassRegion';
    var PatternTableId = PatternTable + 'TableId'
    var PatternTableReportId = PatternTable + 'TableReportId';

    $('#' + PatternTableId).DataTable().destroy();
    $('#' + PatternTableId).DataTable({
        "dom": 'Bfrtip',
        "buttons": [
            'excel'
        ],
        //"dom": 'Bfrtip',
        //"buttons": {
        //    buttons: [
        //        {
        //            text: 'PDF',
        //            action: function (e, dt, node, config) {
        //                //alert('Activated!');
        //                QualifTrxLaneStationExport(RegionId, LSId, StationNumber, DateStringStart, DateStringEnd, 'PDF');
        //                //Export(\'RepoTraficStationDayAll\', \'Excel\')
        //            }
        //        },
        //        {
        //            text: 'Excel',
        //            action: function (e, dt, node, config) {
        //                //alert('Activated!');
        //                QualifTrxLaneStationExport(RegionId, LSId, StationNumber, DateStringStart, DateStringEnd, 'Excel');
        //                //Export(\'RepoTraficStationDayAll\', \'Excel\')
        //            }
        //        }
        //    ]
        //},
        "initComplete": function (settings, json) {
            ActionBtnIconSet(ActionBtnId, Icon);
            ShowReport(PatternTableReportId);
        },
        "ajax": {
            "url": "/Qualif/QualifObsPassRegionGet",
            "type": "GET",
            "datatype": "json",
            "data": {
                RegionId: RegionId,
                DateStringStart: DateStringStart,
                DateStringEnd: DateStringEnd
            }
        },
        "columns": [
            { "data": "" },//0
            { "data": "RegionNameShort" },//1
            { "data": "TotalTrafic" },//2

            { "data": "ObsPassId3" },//3
            { "data": "ObsPassId3" },//4

            { "data": "ObsPassId6" },//5
            { "data": "ObsPassId6" },//6

            { "data": "ObsPassId7" },//7
            { "data": "ObsPassId7" },//8

            { "data": "ObsPassIdW" },//9
            { "data": "ObsPassIdW" },//10

            { "data": "ObsPassIdA" },//11
            { "data": "ObsPassIdA" },//12

            { "data": "ObsPassIdV" },//13
            { "data": "ObsPassIdV" },//14

            { "mData": function vehicle(data, type, dataToSet) { return GetDigits(data.Day, 2) + GetDigits(data.Month, 2) + data.Year + data.RegionId; } },//10 Station

        ],
        "columnDefs": [
            { "width": "3%", "className": "text-center", "targets": 0 },
            { "width": "3%", "className": "text-center", "targets": 1 },
            { "width": "3%", "className": "text-right", "targets": 2 },

            { "width": "3%", "className": "text-right", "targets": 3 },
            { "width": "3%", "className": "text-right", "targets": 4 },

            { "width": "3%", "className": "text-right", "targets": 5 },
            { "width": "3%", "className": "text-right", "targets": 6 },

            { "width": "3%", "className": "text-right", "targets": 7 },
            { "width": "3%", "className": "text-right", "targets": 8 },

            { "width": "3%", "className": "text-right", "targets": 9 },
            { "width": "3%", "className": "text-right", "targets": 10 },

            { "width": "3%", "className": "text-right", "targets": 11 },
            { "width": "3%", "className": "text-right", "targets": 12 },

            { "width": "3%", "className": "text-right", "targets": 13 },
            { "width": "3%", "className": "text-right", "targets": 14 },

            { "width": "3%", "className": "text-center", "targets": 15 },

            { "targets": 0, "render": function (data, type, row) { return DataTableCertifiedInfoGet(row['IsCertified']) + ' ' + DataTableDateValueFromRowGet(row); } },
            { "targets": 1, "render": function (data, type, row) { return data; } },
            { "targets": 2, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },

            { "targets": 3, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 4, "render": function (data, type, row) { return DataTablePercentageTwoThresholdsGet(data, row['TotalTrafic'], 2, 2, 5); } },

            { "targets": 5, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 6, "render": function (data, type, row) { return DataTablePercentageTwoThresholdsGet(data, row['TotalTrafic'], 2, 2, 5); } },

            { "targets": 7, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 8, "render": function (data, type, row) { return DataTablePercentageTwoThresholdsGet(data, row['TotalTrafic'], 2, 2, 5); } },

            { "targets": 9, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 10, "render": function (data, type, row) { return DataTablePercentageTwoThresholdsGet(data, row['TotalTrafic'], 2, 2, 5); } },

            { "targets": 11, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 12, "render": function (data, type, row) { return DataTablePercentageTwoThresholdsGet(data, row['TotalTrafic'], 2, 2, 5); } },

            { "targets": 13, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 14, "render": function (data, type, row) { return DataTablePercentageTwoThresholdsGet(data, row['TotalTrafic'], 2, 2, 5); } },

            { "targets": 15, "render": function (data, type, row) { return DataTableButtonGet('QualifObsPassStationSearch', data, '\'' + data + '\'', '', 'dt-btn-cl gc-bc1-cl', 'fas fa-eye btn-icon-cl gc-c1-cl', '') } },

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
        "iDisplayLength": 10,
        "processing": false,
        "responsive": true,
        "bFilter": true,
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

            DataTableTotalIntGet(api, intVal, 3);
            DataTableTotalIntGet(api, intVal, 5);
            DataTableTotalIntGet(api, intVal, 7);
            DataTableTotalIntGet(api, intVal, 9);
            DataTableTotalIntGet(api, intVal, 11);
            DataTableTotalIntGet(api, intVal, 13);


            DataTableTotalPercentageGet(api, intVal, 3, 2, 4);
            DataTableTotalPercentageGet(api, intVal, 5, 2, 6);
            DataTableTotalPercentageGet(api, intVal, 7, 2, 8);
            DataTableTotalPercentageGet(api, intVal, 9, 2, 10);
            DataTableTotalPercentageGet(api, intVal, 11, 2, 12);
            DataTableTotalPercentageGet(api, intVal, 13, 2, 14);
        }
    });
}


function QualifObsPassStationDisplay(ActionBtnId, Icon, IsMargin) {

    var RegionId = GetElementValue('RegionId');
    var LSId = GetElementValue('LSId');
    var StationNumber = GetElementValue('StationNumberId');
    var DateStringStart = GetDateStringFromDatePicker('DateStartId');
    var DateStringEnd = GetDateStringFromDatePicker('DateEndId');

    if (DateStringStart != '' && DateStringEnd != '') {
        QualifObsPassStationGet(ActionBtnId, Icon, IsMargin, RegionId, LSId, StationNumber, DateStringStart, DateStringEnd);
    }
    else {
        ParamMessageErrorDisplay('Les dates de début et de fin sont obligatoires');
    };
}


function QualifObsPassStationSearch(Id) {

    var ActionBtnId = new String('QualifObsPassStationSearchBtnId' + Id);
    var Icon = 'fas fa-eye';
    var IsMargin = false;

    //hide some reports
    HideReport('QualifObsPassStation' + 'TableReportId');
    HideReport('QualifObsPassLane' + 'TableReportId');
    HideReport('QualifTrxLane' + 'TableReportId');
    HideReport('CertFilePlan' + 'TableReportId');

    var DateStringStart = new String(Id).substr(0, 8);
    var DateStringEnd = new String(Id).substr(0, 8);
    var RegionId = new String(Id).substr(8, 2);
    var LSId = '0';
    var StationNumber = '0';

    QualifObsPassStationGet(ActionBtnId, Icon, IsMargin, RegionId, LSId, StationNumber, DateStringStart, DateStringEnd)
}

function QualifObsPassStationGet(ActionBtnId, Icon, IsMargin, RegionId, LSId, StationNumber, DateStringStart, DateStringEnd) {

    //Spin
    ActionSpin(ActionBtnId, IsMargin);

    //init
    ParamMessageReset();

    var PatternTable = 'QualifObsPassStation';
    var PatternTableId = PatternTable + 'TableId'
    var PatternTableReportId = PatternTable + 'TableReportId';

    $('#' + PatternTableId).DataTable().destroy();
    $('#' + PatternTableId).DataTable({
        "dom": 'Bfrtip',
        "buttons": {
            buttons: [
                {
                    text: 'PDF',
                    action: function (e, dt, node, config) {
                        //alert('Activated!');
                        QualifTrxLaneStationExport(RegionId, LSId, StationNumber, DateStringStart, DateStringEnd, 'PDF');
                        //Export(\'RepoTraficStationDayAll\', \'Excel\')
                    }
                },
                {
                    text: 'Excel',
                    action: function (e, dt, node, config) {
                        //alert('Activated!');
                        QualifTrxLaneStationExport(RegionId, LSId, StationNumber, DateStringStart, DateStringEnd, 'Excel');
                        //Export(\'RepoTraficStationDayAll\', \'Excel\')
                    }
                }
            ]
        },
        "initComplete": function (settings, json) {
            ActionBtnIconSet(ActionBtnId, Icon);
            ShowReport(PatternTableReportId);
        },
        "ajax": {
            "url": "/Qualif/QualifObsPassStationGet",
            "type": "GET",
            "datatype": "json",
            "data": {
                RegionId: RegionId,
                LSId: LSId,
                StationNumber: StationNumber,
                DateStringStart: DateStringStart,
                DateStringEnd: DateStringEnd
            }
        },
        "columns": [
            { "data": "" },//0
            { "data": "StationName" },//1
            { "data": "TotalTrafic" },//2

            { "data": "ObsPassId3" },//3
            { "data": "ObsPassId3" },//4

            { "data": "ObsPassId6" },//5
            { "data": "ObsPassId6" },//6

            { "data": "ObsPassId7" },//7
            { "data": "ObsPassId7" },//8

            { "data": "ObsPassIdW" },//9
            { "data": "ObsPassIdW" },//10

            { "data": "ObsPassIdA" },//11
            { "data": "ObsPassIdA" },//12

            { "data": "ObsPassIdV" },//13
            { "data": "ObsPassIdV" },//14

            { "mData": function vehicle(data, type, dataToSet) { return GetDigits(data.Day, 2) + GetDigits(data.Month, 2) + data.Year + data.RegionId + data.LSId + data.StationNumber; } },//15
            { "mData": function vehicle(data, type, dataToSet) { return GetDigits(data.Day, 2) + GetDigits(data.Month, 2) + data.Year + data.RegionId + data.LSId + data.StationNumber; } },//16
        ],
        "columnDefs": [
            { "width": "3%", "className": "text-center", "targets": 0 },
            { "width": "3%", "className": "text-left", "targets": 1 },
            { "width": "3%", "className": "text-right", "targets": 2 },

            { "width": "3%", "className": "text-right", "targets": 3 },
            { "width": "3%", "className": "text-right", "targets": 4 },

            { "width": "3%", "className": "text-right", "targets": 5 },
            { "width": "3%", "className": "text-right", "targets": 6 },

            { "width": "3%", "className": "text-right", "targets": 7 },
            { "width": "3%", "className": "text-right", "targets": 8 },

            { "width": "3%", "className": "text-right", "targets": 9 },
            { "width": "3%", "className": "text-right", "targets": 10 },

            { "width": "3%", "className": "text-right", "targets": 11 },
            { "width": "3%", "className": "text-right", "targets": 12 },

            { "width": "3%", "className": "text-right", "targets": 13 },
            { "width": "3%", "className": "text-right", "targets": 14 },

            { "width": "3%", "className": "text-center", "targets": 15 },
            { "width": "3%", "className": "text-center", "targets": 16 },

            { "targets": 0, "render": function (data, type, row) { return DataTableCertifiedInfoGet(row['IsCertified']) + ' ' + DataTableDateValueFromRowGet(row); } },
            { "targets": 1, "render": function (data, type, row) { return data; } },
            { "targets": 2, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },

            { "targets": 3, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 4, "render": function (data, type, row) { return DataTablePercentageTwoThresholdsGet(data, row['TotalTrafic'], 2, 2, 5); } },

            { "targets": 5, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 6, "render": function (data, type, row) { return DataTablePercentageTwoThresholdsGet(data, row['TotalTrafic'], 2, 2, 5); } },

            { "targets": 7, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 8, "render": function (data, type, row) { return DataTablePercentageTwoThresholdsGet(data, row['TotalTrafic'], 2, 2, 5); } },

            { "targets": 9, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 10, "render": function (data, type, row) { return DataTablePercentageTwoThresholdsGet(data, row['TotalTrafic'], 2, 2, 5); } },

            { "targets": 11, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 12, "render": function (data, type, row) { return DataTablePercentageTwoThresholdsGet(data, row['TotalTrafic'], 2, 2, 5); } },

            { "targets": 13, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 14, "render": function (data, type, row) { return DataTablePercentageTwoThresholdsGet(data, row['TotalTrafic'], 2, 2, 5); } },

            { "targets": 15, "render": function (data, type, row) { return DataTableButtonGet('QualifObsPassLaneSearch', data, '\'' + data + '\'', '', 'dt-btn-cl gc-bc1-cl', 'fas fa-eye btn-icon-cl gc-c1-cl', '') } },
            { "targets": 16, "render": function (data, type, row) { return DataTableButtonGet('QualifObsPassOdSearch', data, '\'' + data + '\'', '', 'dt-btn-cl gc-bc1-cl', 'fas fa-eye btn-icon-cl gc-c1-cl', '') } },

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
        "iDisplayLength": 10,
        "processing": false,
        "responsive": true,
        "bFilter": true,
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

            DataTableTotalIntGet(api, intVal, 3);
            DataTableTotalIntGet(api, intVal, 5);
            DataTableTotalIntGet(api, intVal, 7);
            DataTableTotalIntGet(api, intVal, 9);
            DataTableTotalIntGet(api, intVal, 11);
            DataTableTotalIntGet(api, intVal, 13);


            DataTableTotalPercentageGet(api, intVal, 3, 2, 4);
            DataTableTotalPercentageGet(api, intVal, 5, 2, 6);
            DataTableTotalPercentageGet(api, intVal, 7, 2, 8);
            DataTableTotalPercentageGet(api, intVal, 9, 2, 10);
            DataTableTotalPercentageGet(api, intVal, 11, 2, 12);
            DataTableTotalPercentageGet(api, intVal, 13, 2, 14);
        }
    });
}


function QualifObsPassOdDisplay(ActionBtnId, Icon, IsMargin) {

    var RegionId = GetElementValue('RegionId');
    var LSId = GetElementValue('LSId');
    var StationNumber = GetElementValue('StationNumberId');
    var DateStringStart = GetDateStringFromDatePicker('DateStartId');
    var DateStringEnd = GetDateStringFromDatePicker('DateEndId');
    var OdId = '0';

    QualifAllReportsHide();
    ShowReport('ParamReportId');
    ParamMessageReset();

    if (DateStringStart != '' && DateStringEnd != '') {
        QualifObsPassOdGet(ActionBtnId, Icon, IsMargin, RegionId, LSId, StationNumber, OdId, DateStringStart, DateStringEnd);
    }
    else {
        ParamMessageErrorDisplay('Les dates de début et de fin sont obligatoires');
    };
}


function QualifObsPassOdSearch(Id) {

    var ActionBtnId = new String('QualifObsPassOdSearchBtnId' + Id);
    var Icon = 'fas fa-eye';

    HideTableReport('QualifObsPassOd');
    HideTableReport('QualifObsPassLane');
    HideTableReport('QualifTrxLane');
    HideTableReport('CertFilePlan');

    var DateStringStart = new String(Id).substr(0, 8);
    var DateStringEnd = new String(Id).substr(0, 8);
    var RegionId = new String(Id).substr(8, 2);
    var LSId = new String(Id).substr(10, 2);
    var StationNumber = '0';
    var IsMargin = false;
    var OdId = '0';
    QualifObsPassOdGet(ActionBtnId, Icon, IsMargin, RegionId, LSId, StationNumber, OdId, DateStringStart, DateStringEnd);
}


function QualifObsPassOdGet(ActionBtnId, Icon, IsMargin, RegionId, LSId, StationNumber, OdId, DateStringStart, DateStringEnd) {

    //Spin
    ActionSpin(ActionBtnId, IsMargin);

    //init
    ParamMessageReset();

    var PatternTable = 'QualifObsPassOd';
    var PatternTableId = PatternTable + 'TableId'
    var PatternTableReportId = PatternTable + 'TableReportId';

    $('#' + PatternTableId).DataTable().destroy();
    $('#' + PatternTableId).DataTable({
        //"dom": 'Bfrtip',
        ////"buttons": [
        ////    'excel'
        ////],
        //"buttons": {
        //    buttons: [
        //        {
        //            text: 'PDF',
        //            action: function (e, dt, node, config) {
        //                //alert('Activated!');
        //                QualifTrxLaneStationExport(AxleId, SiteId, BagContainerId, StationNumber, DateStringStart, DateStringEnd, 'PDF');
        //                //Export(\'RepoTraficStationDayAll\', \'Excel\')
        //            }
        //        },
        //        {
        //            text: 'Excel',
        //            action: function (e, dt, node, config) {
        //                //alert('Activated!');
        //                QualifTrxLaneStationExport(AxleId, SiteId, BagContainerId, StationNumber, DateStringStart, DateStringEnd, 'Excel');
        //                //Export(\'RepoTraficStationDayAll\', \'Excel\')
        //            }
        //        }
        //    ]
        //},
        "initComplete": function (settings, json) {
            ActionBtnIconSet(ActionBtnId, Icon);
            ShowReport(PatternTableReportId);
        },
        "ajax": {
            "url": "/Qualif/QualifObsPassOdGet",
            "type": "GET",
            "datatype": "json",
            "data": {
                RegionId: RegionId,
                LSId: LSId,
                StationNumber: StationNumber,
                OdId: OdId,
                DateStringStart: DateStringStart,
                DateStringEnd: DateStringEnd
            }
        },
        "columns": [
            { "data": "" },//0
            { "data": "StationNumberD" },//1
            { "data": "StationNumberO" },//2
            { "data": "TotalTrafic" },//3

            { "data": "ObsPassId3" },//4
            { "data": "ObsPassId3" },//5
            { "mData": function vehicle(data, type, dataToSet) { return GetDigits(data.Day, 2) + GetDigits(data.Month, 2) + data.Year + data.RegionIdD + data.LSIdD + data.StationNumberD + data.RegionIdO + data.LSIdO + data.StationNumberO + '-' + '--' + '3'; } },//6

            { "data": "ObsPassId6" },//7
            { "data": "ObsPassId6" },//8
            { "mData": function vehicle(data, type, dataToSet) { return GetDigits(data.Day, 2) + GetDigits(data.Month, 2) + data.Year + data.RegionIdD + data.LSIdD + data.StationNumberD + data.RegionIdO + data.LSIdO + data.StationNumberO + '-' + '--' + '6'; } },//9

            { "data": "ObsPassId7" },//10
            { "data": "ObsPassId7" },//11
            { "mData": function vehicle(data, type, dataToSet) { return GetDigits(data.Day, 2) + GetDigits(data.Month, 2) + data.Year + data.RegionIdD + data.LSIdD + data.StationNumberD + data.RegionIdO + data.LSIdO + data.StationNumberO + '-' + '--' + '7'; } },//12

            { "data": "ObsPassIdW" },//13
            { "data": "ObsPassIdW" },//14
            { "mData": function vehicle(data, type, dataToSet) { return GetDigits(data.Day, 2) + GetDigits(data.Month, 2) + data.Year + data.RegionIdD + data.LSIdD + data.StationNumberD + data.RegionIdO + data.LSIdO + data.StationNumberO + '-' + '--' + 'W'; } },//15

            { "data": "ObsPassIdA" },//16
            { "data": "ObsPassIdA" },//17
            { "mData": function vehicle(data, type, dataToSet) { return GetDigits(data.Day, 2) + GetDigits(data.Month, 2) + data.Year + data.RegionIdD + data.LSIdD + data.StationNumberD + data.RegionIdO + data.LSIdO + data.StationNumberO + '-' + '--' + 'A'; } },//18

            { "data": "ObsPassIdV" },//19
            { "data": "ObsPassIdV" },//20
            { "mData": function vehicle(data, type, dataToSet) { return GetDigits(data.Day, 2) + GetDigits(data.Month, 2) + data.Year + data.RegionIdD + data.LSIdD + data.StationNumberD + data.RegionIdO + data.LSIdO + data.StationNumberO + '-' + '--' + 'V'; } },//21

        ],
        "columnDefs": [
            { "width": "3%", "className": "text-center", "targets": 0 },
            { "width": "3%", "className": "text-center", "targets": 1 },
            { "width": "3%", "className": "text-center", "targets": 2 },
            { "width": "3%", "className": "text-right", "targets": 3 },

            { "width": "3%", "className": "text-right", "targets": 4 },
            { "width": "3%", "className": "text-right", "targets": 5 },
            { "width": "3%", "className": "text-center", "targets": 6 },

            { "width": "3%", "className": "text-right", "targets": 7 },
            { "width": "3%", "className": "text-right", "targets": 8 },
            { "width": "3%", "className": "text-center", "targets": 9 },

            { "width": "3%", "className": "text-right", "targets": 10 },
            { "width": "3%", "className": "text-right", "targets": 11 },
            { "width": "3%", "className": "text-center", "targets": 12 },

            { "width": "3%", "className": "text-right", "targets": 13 },
            { "width": "3%", "className": "text-right", "targets": 14 },
            { "width": "3%", "className": "text-center", "targets": 15 },

            { "width": "3%", "className": "text-right", "targets": 16 },
            { "width": "3%", "className": "text-right", "targets": 17 },
            { "width": "3%", "className": "text-center", "targets": 18 },

            { "width": "3%", "className": "text-right", "targets": 19 },
            { "width": "3%", "className": "text-right", "targets": 20 },
            { "width": "3%", "className": "text-center", "targets": 21 },

            { "targets": 0, "render": function (data, type, row) { return DataTableDateValueFromRowGet(row); } },
            { "targets": 1, "render": function (data, type, row) { return data; } },
            { "targets": 2, "render": function (data, type, row) { return data; } },
            { "targets": 3, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },

            { "targets": 4, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 5, "render": function (data, type, row) { return DataTablePercentageTwoThresholdsGet(data, row['TotalTrafic'], 2, 2, 5); } },
            { "targets": 6, "render": function (data, type, row) { return DataTableButtonGet('QualifTrxLaneFromOdSearch', data, '\'' + data + '\'', '', 'dt-btn-cl gc-bc1-cl', 'fas fa-eye btn-icon-cl gc-c1-cl', '') } },

            { "targets": 7, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 8, "render": function (data, type, row) { return DataTablePercentageTwoThresholdsGet(data, row['TotalTrafic'], 2, 2, 5); } },
            { "targets": 9, "render": function (data, type, row) { return DataTableButtonGet('QualifTrxLaneFromOdSearch', data, '\'' + data + '\'', '', 'dt-btn-cl gc-bc1-cl', 'fas fa-eye btn-icon-cl gc-c1-cl', '') } },

            { "targets": 10, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 11, "render": function (data, type, row) { return DataTablePercentageTwoThresholdsGet(data, row['TotalTrafic'], 2, 2, 5); } },
            { "targets": 12, "render": function (data, type, row) { return DataTableButtonGet('QualifTrxLaneFromOdSearch', data, '\'' + data + '\'', '', 'dt-btn-cl gc-bc1-cl', 'fas fa-eye btn-icon-cl gc-c1-cl', '') } },

            { "targets": 13, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 14, "render": function (data, type, row) { return DataTablePercentageTwoThresholdsGet(data, row['TotalTrafic'], 2, 2, 5); } },
            { "targets": 15, "render": function (data, type, row) { return DataTableButtonGet('QualifTrxLaneFromOdSearch', data, '\'' + data + '\'', '', 'dt-btn-cl gc-bc1-cl', 'fas fa-eye btn-icon-cl gc-c1-cl', '') } },

            { "targets": 16, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 17, "render": function (data, type, row) { return DataTablePercentageTwoThresholdsGet(data, row['TotalTrafic'], 2, 2, 5); } },
            { "targets": 18, "render": function (data, type, row) { return DataTableButtonGet('QualifTrxLaneFromOdSearch', data, '\'' + data + '\'', '', 'dt-btn-cl gc-bc1-cl', 'fas fa-eye btn-icon-cl gc-c1-cl', '') } },

            { "targets": 19, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 20, "render": function (data, type, row) { return DataTablePercentageTwoThresholdsGet(data, row['TotalTrafic'], 2, 2, 5); } },
            { "targets": 21, "render": function (data, type, row) { return DataTableButtonGet('QualifTrxLaneFromOdSearch', data, '\'' + data + '\'', '', 'dt-btn-cl gc-bc1-cl', 'fas fa-eye btn-icon-cl gc-c1-cl', '') } },

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
        "iDisplayLength": 10,
        "processing": false,
        "responsive": false,
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

            DataTableTotalIntGet(api, intVal, 4);
            DataTableTotalIntGet(api, intVal, 7);
            DataTableTotalIntGet(api, intVal, 10);
            DataTableTotalIntGet(api, intVal, 13);
            DataTableTotalIntGet(api, intVal, 16);
            DataTableTotalIntGet(api, intVal, 19);

            DataTableTotalPercentageGet(api, intVal, 4, 3, 5);
            DataTableTotalPercentageGet(api, intVal, 7, 3, 8);
            DataTableTotalPercentageGet(api, intVal, 10, 3, 11);
            DataTableTotalPercentageGet(api, intVal, 13, 3, 14);
            DataTableTotalPercentageGet(api, intVal, 16, 3, 17);
            DataTableTotalPercentageGet(api, intVal, 19, 3, 20);
        }
    });
}


function QualifObsPassLaneDisplay(ActionBtnId, Icon, IsMargin) {

    var RegionId = GetElementValue('RegionId');
    var LSId = GetElementValue('LSId');
    var StationNumber = GetElementValue('StationNumberId');
    var LaneName = GetElementValue('LaneNameId');
    var DateStringStart = GetDateStringFromDatePicker('DateStartId');
    var DateStringEnd = GetDateStringFromDatePicker('DateEndId');

    if (DateStringStart != '' && DateStringEnd != '') {
        QualifObsPassLaneGet(ActionBtnId, Icon, IsMargin, RegionId, LSId, StationNumber, LaneName, DateStringStart, DateStringEnd);
    }
    else {
        ParamMessageErrorDisplay('Les dates de début et de fin, la gare sont obligatoires');
    };
}


function QualifObsPassLaneSearch(Id) {
    var ActionBtnId = new String('QualifObsPassLaneSearchBtnId' + Id);
    var Icon = 'fas fa-eye';
    var IsMargin = false;

    var DateStringStart = new String(Id).substr(0, 8);
    var DateStringEnd = new String(Id).substr(0, 8);
    var RegionId = new String(Id).substr(8, 2);
    var LSId = new String(Id).substr(10, 2);
    var StationNumber = new String(Id).substr(12, 2);
    var LaneName = '0';

    QualifObsPassLaneGet(ActionBtnId, Icon, IsMargin, RegionId, LSId, StationNumber, LaneName, DateStringStart, DateStringEnd);
}


function QualifObsPassLaneGet(ActionBtnId, Icon, IsMargin, RegionId, LSId, StationNumber, LaneName, DateStringStart, DateStringEnd) {

    //Spin
    ActionSpin(ActionBtnId, IsMargin);

    //init
    ParamMessageReset();

    var PatternTable = 'QualifObsPassLane';
    var PatternTableId = PatternTable + 'TableId'
    var PatternTableReportId = PatternTable + 'TableReportId';

    $('#' + PatternTableId).DataTable().destroy();
    $('#' + PatternTableId).DataTable({
        "dom": 'Bfrtip',
        //"buttons": [
        //    'excel'
        //],
        //"buttons": {
        //    buttons: [
        //        {
        //            text: 'PDF',
        //            action: function (e, dt, node, config) {
        //                //alert('Activated!');
        //                QualifTrxLaneStationExport(AxleId, SiteId, BagContainerId, StationNumber, DateStringStart, DateStringEnd, 'PDF');
        //                //Export(\'RepoTraficStationDayAll\', \'Excel\')
        //            }
        //        },
        //        {
        //            text: 'Excel',
        //            action: function (e, dt, node, config) {
        //                //alert('Activated!');
        //                QualifTrxLaneStationExport(AxleId, SiteId, BagContainerId, StationNumber, DateStringStart, DateStringEnd, 'Excel');
        //                //Export(\'RepoTraficStationDayAll\', \'Excel\')
        //            }
        //        }
        //    ]
        //},
        "initComplete": function (settings, json) {
            ActionBtnIconSet(ActionBtnId, Icon);
            ShowReport(PatternTableReportId);
        },
        "ajax": {
            "url": "/Qualif/QualifObsPassLaneGet",
            "type": "GET",
            "datatype": "json",
            "data": {
                RegionId: RegionId,
                LSId: LSId,
                StationNumber: StationNumber,
                LaneName: LaneName,
                DateStringStart: DateStringStart,
                DateStringEnd: DateStringEnd
            }
        },
        "columns": [
            { "data": "" },//0
            { "data": "StationIdCe" },//1
            { "data": "LaneName" },//2
            { "data": "TotalTrafic" },//3

            { "data": "ObsPassId3" },//4
            { "data": "ObsPassId3" },//5
            { "mData": function vehicle(data, type, dataToSet) { return GetDigits(data.Day, 2) + GetDigits(data.Month, 2) + data.Year + data.RegionId + data.LSId + data.StationNumber + data.LaneName + '0' + '26' + '--' + '--'; } },//6

            { "data": "ObsPassId6" },//7
            { "data": "ObsPassId6" },//8
            { "mData": function vehicle(data, type, dataToSet) { return GetDigits(data.Day, 2) + GetDigits(data.Month, 2) + data.Year + data.RegionId + data.LSId + data.StationNumber + data.LaneName + '0' + '26' + '--' + '--'; } },//9

            { "data": "ObsPassId7" },//10
            { "data": "ObsPassId7" },//11
            { "mData": function vehicle(data, type, dataToSet) { return GetDigits(data.Day, 2) + GetDigits(data.Month, 2) + data.Year + data.RegionId + data.LSId + data.StationNumber + data.LaneName + '0' + '26' + '--' + '--'; } },//12

            { "data": "ObsPassIdW" },//13
            { "data": "ObsPassIdW" },//14
            { "mData": function vehicle(data, type, dataToSet) { return GetDigits(data.Day, 2) + GetDigits(data.Month, 2) + data.Year + data.RegionId + data.LSId + data.StationNumber + data.LaneName + '0' + '26' + '--' + '--'; } },//15

            { "data": "ObsPassIdA" },//16
            { "data": "ObsPassIdA" },//17
            { "mData": function vehicle(data, type, dataToSet) { return GetDigits(data.Day, 2) + GetDigits(data.Month, 2) + data.Year + data.RegionId + data.LSId + data.StationNumber + data.LaneName + '0' + '26' + '--' + '--'; } },//18

            { "data": "ObsPassIdV" },//19
            { "data": "ObsPassIdV" },//20
            { "mData": function vehicle(data, type, dataToSet) { return GetDigits(data.Day, 2) + GetDigits(data.Month, 2) + data.Year + data.RegionId + data.LSId + data.StationNumber + data.LaneName + '0' + '26' + '--' + '--'; } },//21

        ],
        "columnDefs": [
            { "width": "3%", "className": "text-center", "targets": 0 },
            { "width": "3%", "className": "text-center", "targets": 1 },
            { "width": "3%", "className": "text-center", "targets": 2 },
            { "width": "3%", "className": "text-right", "targets": 3 },

            { "width": "3%", "className": "text-right", "targets": 4 },
            { "width": "3%", "className": "text-right", "targets": 5 },
            { "width": "3%", "className": "text-center", "targets": 6 },

            { "width": "3%", "className": "text-right", "targets": 7 },
            { "width": "3%", "className": "text-right", "targets": 8 },
            { "width": "3%", "className": "text-center", "targets": 9 },

            { "width": "3%", "className": "text-right", "targets": 10 },
            { "width": "3%", "className": "text-right", "targets": 11 },
            { "width": "3%", "className": "text-center", "targets": 12 },

            { "width": "3%", "className": "text-right", "targets": 13 },
            { "width": "3%", "className": "text-right", "targets": 14 },
            { "width": "3%", "className": "text-center", "targets": 15 },

            { "width": "3%", "className": "text-right", "targets": 16 },
            { "width": "3%", "className": "text-right", "targets": 17 },
            { "width": "3%", "className": "text-center", "targets": 18 },

            { "width": "3%", "className": "text-right", "targets": 19 },
            { "width": "3%", "className": "text-right", "targets": 20 },
            { "width": "3%", "className": "text-center", "targets": 21 },

            { "targets": 0, "render": function (data, type, row) { return DataTableCertifiedInfoGet(row['IsCertified']) + ' ' + DataTableDateValueFromRowGet(row); } },
            { "targets": 1, "render": function (data, type, row) { return data; } },
            { "targets": 2, "render": function (data, type, row) { return data; } },
            { "targets": 3, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },

            { "targets": 4, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 5, "render": function (data, type, row) { return DataTablePercentageTwoThresholdsGet(data, row['TotalTrafic'], 2, 2, 5); } },
            { "targets": 6, "render": function (data, type, row) { return DataTableButtonGet('QualifTrxLaneSearch', data, '\'' + data + '\'', '', 'dt-btn-cl gc-bc1-cl', 'fas fa-eye btn-icon-cl gc-c1-cl', '') } },

            { "targets": 7, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 8, "render": function (data, type, row) { return DataTablePercentageTwoThresholdsGet(data, row['TotalTrafic'], 2, 2, 5); } },
            { "targets": 9, "render": function (data, type, row) { return DataTableButtonGet('QualifTrxLaneSearch', data, '\'' + data + '\'', '', 'dt-btn-cl gc-bc1-cl', 'fas fa-eye btn-icon-cl gc-c1-cl', '') } },

            { "targets": 10, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 11, "render": function (data, type, row) { return DataTablePercentageTwoThresholdsGet(data, row['TotalTrafic'], 2, 2, 5); } },
            { "targets": 12, "render": function (data, type, row) { return DataTableButtonGet('QualifTrxLaneSearch', data, '\'' + data + '\'', '', 'dt-btn-cl gc-bc1-cl', 'fas fa-eye btn-icon-cl gc-c1-cl', '') } },

            { "targets": 13, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 14, "render": function (data, type, row) { return DataTablePercentageTwoThresholdsGet(data, row['TotalTrafic'], 2, 2, 5); } },
            { "targets": 15, "render": function (data, type, row) { return DataTableButtonGet('QualifTrxLaneSearch', data, '\'' + data + '\'', '', 'dt-btn-cl gc-bc1-cl', 'fas fa-eye btn-icon-cl gc-c1-cl', '') } },

            { "targets": 16, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 17, "render": function (data, type, row) { return DataTablePercentageTwoThresholdsGet(data, row['TotalTrafic'], 2, 2, 5); } },
            { "targets": 18, "render": function (data, type, row) { return DataTableButtonGet('QualifTrxLaneSearch', data, '\'' + data + '\'', '', 'dt-btn-cl gc-bc1-cl', 'fas fa-eye btn-icon-cl gc-c1-cl', '') } },

            { "targets": 19, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 20, "render": function (data, type, row) { return DataTablePercentageTwoThresholdsGet(data, row['TotalTrafic'], 2, 2, 5); } },
            { "targets": 21, "render": function (data, type, row) { return DataTableButtonGet('QualifTrxLaneSearch', data, '\'' + data + '\'', '', 'dt-btn-cl gc-bc1-cl', 'fas fa-eye btn-icon-cl gc-c1-cl', '') } },

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
        "iDisplayLength": 10,
        "processing": false,
        "responsive": true,
        "bFilter": true,
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

            //DataTableTotalIntGet(api, intVal, 4);
            //DataTableTotalIntGet(api, intVal, 7);
            //DataTableTotalIntGet(api, intVal, 8);
            //DataTableTotalIntGet(api, intVal, 11);

            //DataTableTotalPercentageGet(api, intVal, 4, 3, 5);
            //DataTableTotalPercentageGet(api, intVal, 8, 3, 9);
            //DataTableTotalPercentageGet(api, intVal, 11, 3, 13);
        }
    });
}


function TopBarHistoryInsightGet(KeyWord) {

    


    //Set datatable patterns
    var PatternTable = 'TopBarHistoryHome';
    var PatternTableId = PatternTable + 'TableId';
    var PatternTableReportId = PatternTable + 'TableReportId';
    var PatternTableCardId = PatternTable + 'TableCardId';

    //style
    document.getElementById(PatternTableCardId).style.height = '700px';
    document.getElementById(PatternTableCardId).style.overflow = 'scroll';

    HideReport(PatternTableReportId);
    $('#' + PatternTableId).DataTable().destroy();
    $('#' + PatternTableId).DataTable({
        "initComplete": function (settings, json) {
            //$('#' + ActionBtnId).find('span').attr('class', Icon);
            ShowReport(PatternTableReportId);
            //NotiConnectionIdUpdate('Historique');
        },
        "ajax": {
            "url": "/Common/TopBarHistoryHomeGet",
            "type": "GET",
            "datatype": "json",
            "data": {
                "KeyWord": KeyWord
            }
        },
        "columns": [

            //{ "data": "UserId" }, //0
            {
                "mData": function vehicle(data, type, dataToSet) {
                    var diffInSeconds = Math.abs(Date.now() - new Date(data.YearM, data.MonthM - 1, data.DayM, data.HourM, data.MinuteM, data.SecondM)) / 1000;
                    var days = Math.floor(diffInSeconds / 60 / 60 / 24);
                    var hours = Math.floor(diffInSeconds / 60 / 60 % 24);
                    var minutes = Math.floor(diffInSeconds / 60);
                    if (days > 0) {
                        return 'Il y a ' + days + ' J ' + hours + 'heures';
                    }
                    else {
                        if (hours > 0) {
                            return 'Il y a ' + hours + 'heure(s)';
                        }
                        else {
                            return 'Il y a ' + minutes + ' minute(s)';
                        }
                    }
                }
            },//0
        ],
        "columnDefs": [
            { "width": "100%", "className": "text-center", "targets": 0 },//FullName 
            { "targets": 0, "render": function (data, type, row) { return TopBarHistFormGet(row['UserId'], row['FirstName'], row['LastName'], data, row['FeatureName']); } },
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
        "responsive": false,
        "bFilter": false,
        "autoWidth": false,
        "searching": false,
        "lengthChange": false,
        "showNEntries": false,
        "bInfo": false,
        "bPaginate": false,
        "ordering": false,
        "fnRowCallback": function (nRow, aData, iDisplayIndex, iDisplayIndexFull) {
            $('td', nRow).css('background-color', 'white');
            $('td', nRow).css('border-top', 'white');
            $('td', nRow).css('padding', '0px 0px');
            $('th', nRow).css('padding', '0px 0px');
        },
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

function QualifObsTickIdRealTimeBarUpdate(ObsTickIdP, ObsTickIdD, ObsTickIdI, ObsTickIdM, ObsTickIdJ, ObsTickId1) {

    var PatternChart = 'QualifObsTickIdRealTimeBar';

    //ChartDisplay
    var Title = 'Observations Ticket (Temps réel)';
    //HideReport(PatternChart + 'ChartReportId');
    new Chart(document.getElementById(PatternChart + 'CanevasId'), {
        type: 'bar',
        data: {
            labels: ['Disc. Plaque (P)', 'T.P. Dépassé (D)', 'Tick. perdu (I)', 'S.Tick. justifié (M)', 'Tick. Abîmé (J)', 'Tick. illisible (1)'],
            datasets: [{
                label: '',
                data: [ObsTickIdP, ObsTickIdD, ObsTickIdI, ObsTickIdM, ObsTickIdJ, ObsTickId1],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 205, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(153, 102, 255, 0.2)'
                ],
                borderColor: [
                    'rgb(255, 99, 132)',
                    'rgb(255, 159, 64)',
                    'rgb(255, 205, 86)',
                    'rgb(75, 192, 192)',
                    'rgb(54, 162, 235)',
                    'rgb(153, 102, 255)'
                ],
                borderWidth: 1
            }]
        },
        options: {

            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            },
            title: {
                display: true,
                text: Title,
                fontWeight: "bold",
                fontSize: 14
            },
            //legend: {
            //    position: 'bottom',
            //    labels: {
            //        fontColor: 'rgb(84, 84, 84)',
            //        fontSize: 12,
            //        usePointStyle: true,
            //        padding: 16
            //    }
            //},
            //tooltips: {
            //    enabled: false
            //},
            legend: {
                display: false
            },
            tooltips: {
                callbacks: {
                    label: function (tooltipItem) {
                        return tooltipItem.yLabel;
                    }
                }
            }


        }
    });
    //ShowReport(PatternChart + 'ChartReportId');
}


function QualifObsMpIdRealTimeBarUpdate(ObsMpId26, ObsMpId01, ObsMpId48) {

    var PatternChart = 'QualifObsMpIdRealTimeBar';

    //ChartDisplay
    var Title = 'Observations Moyen paiement (Temps réel)';
    //HideReport(PatternChart + 'ChartReportId');
    new Chart(document.getElementById(PatternChart + 'CanevasId'), {
        type: 'bar',
        data: {
            labels: ['Solde insuffisant (26)', 'MP en liste noire (01)', 'TAG non encodé en entrée (48)'],
            datasets: [{
                label: '',
                data: [ObsMpId26, ObsMpId01, ObsMpId48],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 205, 86, 0.2)'
                ],
                borderColor: [
                    'rgb(255, 99, 132)',
                    'rgb(255, 159, 64)',
                    'rgb(255, 205, 86)'
                ],
                borderWidth: 1
            }]
        },
        options: {

            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            },
            title: {
                display: true,
                text: Title,
                fontWeight: "bold",
                fontSize: 14
            },
            //legend: {
            //    position: 'bottom',
            //    labels: {
            //        fontColor: 'rgb(84, 84, 84)',
            //        fontSize: 12,
            //        usePointStyle: true,
            //        padding: 16
            //    }
            //},
            //tooltips: {
            //    enabled: false
            //},
            legend: {
                display: false
            },
            tooltips: {
                callbacks: {
                    label: function (tooltipItem) {
                        return tooltipItem.yLabel;
                    }
                }
            }


        }
    });
    //ShowReport(PatternChart + 'ChartReportId');
}


function QualifObsPassIdRealTimeBarUpdate(ObsPassId3, ObsPassId6, ObsPassId7, ObsPassIdW, ObsPassIdA, ObsPassIdV) {

    var PatternChart = 'QualifObsPassIdRealTimeBar';
    
    //ChartDisplay
    var Title = 'Observations Passage (Temps réel)';
    //HideReport(PatternChart + 'ChartReportId');
    new Chart(document.getElementById(PatternChart + 'CanevasId'), {
        type: 'bar',
        data: {
            labels: ['Violation(3)', 'Disc.Classe(6)', 'Simulation(7)', 'March.arrière / Sim.Présence(W)', 'Plaque détectée(A)', 'Tick.piéton(V)'],
            datasets: [{
                //label: '',
                data: [ObsPassId3, ObsPassId6, ObsPassId7, ObsPassIdW, ObsPassIdA, ObsPassIdV],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 205, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(153, 102, 255, 0.2)'
                ],
                borderColor: [
                    'rgb(255, 99, 132)',
                    'rgb(255, 159, 64)',
                    'rgb(255, 205, 86)',
                    'rgb(75, 192, 192)',
                    'rgb(54, 162, 235)',
                    'rgb(153, 102, 255)'
                ],
                borderWidth: 1
            }]
        },
        options: {

            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            },
            title: {
                display: true,
                text: Title,
                fontWeight: "bold",
                fontSize: 14
            },
            //legend: {
            //    position: 'bottom',
            //    labels: {
            //        fontColor: 'rgb(84, 84, 84)',
            //        fontSize: 12,
            //        usePointStyle: true,
            //        padding: 16
            //    }
            //},
            //tooltips: {
            //    enabled: false
            //},
            legend: {
                display: false
            },
            tooltips: {
                callbacks: {
                    label: function (tooltipItem) {
                        return tooltipItem.yLabel;
                    }
                }
            }


        }
    });
    //ShowReport(PatternChart + 'ChartReportId');
}


function QualifSearchRepeatByTagFormLoad(Pattern, PatternForm, ProductId,
    SerialNumber,
    BillingId,
    DhmExpiration,
    ClientCode,

    ClientCategory,
    ClientName,
    ClientPhone,

    Identifiant,
    IdentifiantType,

    ProductTypeCode,
    Email,
    TagStatus,
    QualifControlTypeId) {

    //Sert FormIndex
    var FormIndex = 2;

    var ActionBtnId = 'QualifSearchRepeatByTagBtnId' + ProductId;
    var Icon = 'fas fa-edit btn-icon-cl gc-c1-cl';

    //Spin
    ActionBtnSpin(ActionBtnId);

    HideReport('QualifSearchRepeatByTagEditModalDialogReportId');

    //HideTableReport
    //QualifPathFormAllHide();

    //Hide
    //HideParent('QualifControlId' + FormIndex);
    //HideParent('QualifReasonId' + FormIndex);
    //HideParent('SensId' + FormIndex);






    ////initialize
    
    //Style
    document.getElementById(Pattern + PatternForm + 'ModalDialogReportId').style.width = '95%';
    document.getElementById(Pattern + PatternForm + 'ModalDialogReportId').style.marginLeft = 'auto';
    document.getElementById(Pattern + PatternForm + 'ModalDialogReportId').style.marginTop = 'auto';
    document.getElementById(Pattern + PatternForm + 'ModalDialogReportId').style.maxWidth = '1900px';

    //Fill
    $('#SerialNumberId' + FormIndex).text(SerialNumber);
    $('#BillingId' + FormIndex).text(BillingId);
    $('#DhmExpirationId' + FormIndex).text(GetDhmValueNullableFromDataTableDate(DhmExpiration));
    $('#ClientCodeId' + FormIndex).text(ClientCode);
    $('#ClientCategoryId' + FormIndex).text(ClientCategory);
    $('#ClientNameId' + FormIndex).text(ClientName);
    $('#ClientPhoneId' + FormIndex).text(ClientPhone);
    $('#IdentifiantId' + FormIndex).text(Identifiant);
    $('#IdentifiantTypeId' + FormIndex).text(IdentifiantType);
    $('#ProductTypeCodeId' + FormIndex).text(ProductTypeCode);
    $('#EmailId' + FormIndex).text(Email);
    $('#TagStatusId' + FormIndex).text(TagStatus);


    ////Set inputs
    document.getElementById('CommentId' + FormIndex).value = '';

    //Test
    var Label = 'Mettre à jour';
    var IconIn = 'far fa-save';
    var PatternIn = Pattern + 'Edit';//QualifPathEdit
    var RowId = ProductId + ', ' + FormIndex + ', \'' + QualifControlTypeId + '\'';

    //Action
    var OnClick = PatternIn + '(' + RowId + ')';
    ModalActionBtnGet(PatternIn, Label, IconIn, OnClick);

    //Set drop down lists
    HtmlDropDownListNameOnlyXorFill('RepeatStatusId' + FormIndex, '99', '/Qualif/ParamRepeatStatusGet', 'RepeatStatusId', 'RepeatStatusName');

    //ShowParent
    ShowParent('RepeatStatusId' + FormIndex);

    //ShowTableReport
    ShowTableReport('QualifRepeatHandle');

    //Get
    QualifRepeatHandleGet(ProductId, QualifControlTypeId);
    //QualifPathLogsGet(RowIdTrxLane, ObsTickId);

    //Set OnChange
    //document.getElementById('QualifReasonId' + FormIndex).setAttribute("onChange", "QualifPathRequestsGet(" + RowIdTrxLane + ", " + FormIndex + ", \'" + ObsTickId + "\')");
    //document.getElementById('SensId' + FormIndex).setAttribute("onChange", "QualifPathRequestsGet(" + RowIdTrxLane + ", " + FormIndex + ", \'" + ObsTickId + "\')");

    //if (ObsTickId == 'D') {
    //    ShowTableReport('QualifPathOpe');
    //    QualifPathOpeGet(RowIdTrxLane);
    //}

    //if (ObsTickId == 'I') {
    //    QualifSearchRepeatByTagFormView(SerialNumber);
    //    QualifSearchRepeatByPlateFormView(LicensePlate);
    //}

    //ActionBtnIconSet(ActionBtnId, Icon);

    //document.getElementById('QualifPathEditModalContentId').style.overflow = 'scroll';
    //document.getElementById('QualifPathEditModalContentId').style.height = '1300px';
    ShowReport('QualifSearchRepeatByTagEditModalDialogReportId');
}

function QualifRepeatHandleGet(ProductId, QualifControlTypeId) {

    //var ActionBtnId = 'ParamActionBtnId0';
    //var Icon = 'fas fa-eye btn-icon-m-cl gc-c1-cl';

    //Spin
    //ActionBtnSpin(ActionBtnId);

    //Set datatable patterns
    var Pattern = 'QualifRepeatHandle';
    var PatternTableId = Pattern + 'TableId';
    var PatternTableReportId = Pattern + 'TableReportId';

    //Get
    HideReport(PatternTableReportId);
    $('#' + PatternTableId).DataTable().destroy();;
    $('#' + PatternTableId).DataTable({
        "initComplete": function (settings, json) {
            //ActionBtnIconSet(ActionBtnId, Icon);
            ShowReport(PatternTableReportId);
        },
        "ajax": {
            "url": "/Qualif/QualifRepeatHandleGet",
            "type": "GET",
            "datatype": "json",
            "data": {
                "ProductId": ProductId,
                "QualifControlTypeId": QualifControlTypeId
            }
        },
        "columns": [
            { "data": "SerialNumber" }, //0
            { "data": "RepeatStatusName" }, //1
            { "data": "RepeatComment" }, //2
            { "data": "DhmCreation" }, //3
            { "data": "CreatedBy" },//4
        ],
        "columnDefs": [
            { "width": "3%", "className": "text-center", "targets": 0 },
            { "width": "3%", "className": "text-center", "targets": 1 },
            { "width": "3%", "className": "text-center", "targets": 2 },
            { "width": "3%", "className": "text-center", "targets": 3 },
            { "width": "3%", "className": "text-left", "targets": 4 },

            { "targets": 0, "render": function (data, type, row) { return data; } },
            { "targets": 1, "render": function (data, type, row) { return data; } },
            { "targets": 2, "render": function (data, type, row) { return data; } },

            { "targets": 3, "render": function (data, type, row) { return GetDateValueNullableFromDataTableDate(data); } },
            { "targets": 4, "render": function (data, type, row) { return data; } },
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
        "iDisplayLength": 20,
        "processing": false,
        "responsive": true,
        "bFilter": true,
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

            //Total1 = api.column(8).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);
            //$(api.column(8).footer()).html(numFormat(Total1));

            //IntTotal1 = api.column(8).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);
            //IntTotal2 = api.column(9).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);

            //$(api.column(7).footer()).html(numFormat(DoubleTotal1));

            //$(api.column(9).footer()).html(numShortFormat(IntTotal2));
        }
    });
}

function QualifSearchRepeatByTagEdit(ProductId, FormIndex, QualifControlTypeId) {

    //Get input values
    var Comment = GetElementValue('CommentId' + FormIndex);
    var RepeatStatusId = GetElementDropDownListValue('RepeatStatusId' + FormIndex);
    
    //Edit
    var obj = {};
    obj.ProductId = ProductId;
    obj.RepeatStatusId = RepeatStatusId;
    obj.QualifControlTypeId = QualifControlTypeId;
    obj.Comment = Comment;

    $.ajax({
        url: "/Qualif/QualifSearchRepeatByTagEdit",
        method: "POST",
        data: JSON.stringify(obj),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            document.getElementById("QualifPath" + RowId).checked = true;
            //QualifPathSend(RowId, QualifReasonId);
        }
    });
}


function ParamProductUpdate(SerialNumber) {

    var ActionBtnId = 'ParamProductUpdateBtnId' + SerialNumber;
    var IsMargin = false;
    ActionSpin(ActionBtnId, IsMargin);

    var Icon = 'fas fa-redo-alt';
    var obj = {};
    obj.SerialNumber = SerialNumber;
    $.ajax({
        url: "/Cert/ParamProductUpdate",
        method: "POST",
        data: JSON.stringify(obj),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            ActionBtnSet(ActionBtnId, Icon, IsMargin);
        }
    });
}


function QualifObsTickIdDLaneDayOpen() {
    QualifAllReportsHide();
    QualifAllParametersHide();
    MenuBarNavHighlight(2, 1, 4);

    //ParamTitle
    ParamTitleSet('Temps de parcours dépassé par voie');
    ShowReport('ParamReportId');
    ParamMessageReset();

    //gloabl
    ShowReport('ParamReportId');
    ShowParent('DateStartId');
    ShowParent('DateEndId');
    ShowParent('TimeId');
    ShowParent('ZoneId');
    ShowParent('RegionId');
    ShowParent('LSId');
    ShowParent('StationNumberId');
    ShowParent('LaneNameId');
    ShowParent('IsChartId');

    ShowParent('ObsTickId');
    ShowParent('ObsMpId');
    ShowParent('ObsPassId');


    //Action
    ParamActionBtnGet(0, 'Afficher', 'fas fa-eye', "QualifObsTickIdDLaneDayDisplay()");
}


function QualifObsTickIdDLaneDayDisplay() {

    var ActionBtnId = 'ParamActionBtnId0';
    var Icon = 'fas fa-eye';
    var IsMargin = true;

    var DateStringStart = GetDateStringFromDatePicker('DateStartId');
    var DateStringEnd = GetDateStringFromDatePicker('DateEndId');
    var IsChart = ElementBooleanGet('IsChartId');
    var RegionId = GetElementValue('RegionId');
    var LSId = GetElementValue('LSId');
    var StationNumber = GetElementValue('StationNumberId');
    var LaneName = GetElementValue('LaneNameId');

    QualifAllReportsHide();
    ShowReport('ParamReportId');
    ParamMessageReset();

    QualifObsTickIdDLaneDayGet(ActionBtnId, Icon, IsMargin,
        DateStringStart, DateStringEnd, IsChart,
        RegionId, LSId, StationNumber, LaneName);
}


function QualifObsTickIdDLaneDaySearch(Id) {
    var ActionBtnId = new String('QualifObsTickIdDLaneDaySearch' + 'BtnId' + Id);
    var Icon = 'fas fa-eye';
    var IsMargin = false;
    var IsChart = false;

    var DateStringStart = new String(Id).substr(0, 8);
    var DateStringEnd = new String(Id).substr(0, 8);
    var RegionId = new String(Id).substr(8, 2);
    var LSId = new String(Id).substr(10, 2);
    var StationNumber = new String(Id).substr(12, 2);
    var LaneName = '0';

    QualifObsTickIdDLaneDayGet(ActionBtnId, Icon, IsMargin,
        DateStringStart, DateStringEnd, IsChart,
        RegionId, LSId, StationNumber, LaneName);
}


function QualifObsTickIdDLaneDayGet(ActionBtnId, Icon, IsMargin,
    DateStringStart, DateStringEnd, IsChart,
    RegionId, LSId, StationNumber, LaneName) {

    ActionSpin(ActionBtnId, IsMargin);

    //HideTableReport('QualifObsTickIdDStation');

    var PatternTable = 'QualifObsTickIdDLaneDay';
    var PatternTableId = PatternTable + 'TableId'
    var PatternTableReportId = PatternTable + 'TableReportId';

    var data00 = 0;
    var data01 = 0;

    var data10 = 0;
    var data11 = 0;

    var data20 = 0;
    var data21 = 0;
    var data22 = 0;
    var data23 = 0;

    var data30 = 0;
    var data31 = 0;

    var data40 = 0;
    var data41 = 0;

    var data50 = 0;
    var data51 = 0;
    var data52 = 0;
    var data53Bar = 0;
    var data53 = 0;

    var data60 = 0;
    var data61 = 0;
    var data62 = 0;
    var data63Bar = 0;
    var data63 = 0;

    var data70 = 0;
    var data71 = 0;
    var data72 = 0;
    var data73 = 0;
    var data74Bar = 0;
    var data74 = 0;


    $('#' + PatternTableId).DataTable().destroy();
    $('#' + PatternTableId).DataTable({
        //"dom": 'Bfrtip',
        //"buttons": [
        //    'excel'
        //],
        "dom": 'Bfrtip',
        "buttons": {
            buttons: [
                {
                    text: 'PDF',
                    action: function (e, dt, node, config) {
                        var ZoneId = '00';
                        var TimeId = '01';
                        var FileType = 'PDF';
                        QualifObsTickIdDTableExport(ZoneId, TimeId, DateStringStart, DateStringEnd, RegionId, LSId, StationNumber, LaneName, FileType);
                    }
                },
                {
                    text: 'Excel',
                    action: function (e, dt, node, config) {
                        var ZoneId = '00';
                        var TimeId = '01';
                        var FileType = 'Excel';
                        QualifObsTickIdDTableExport(ZoneId, TimeId, DateStringStart, DateStringEnd, RegionId, LSId, StationNumber, LaneName, FileType);
                    }
                }
            ]
        },
        "initComplete": function (settings, json) {
            ActionBtnSet(ActionBtnId, Icon, IsMargin);
            ShowReport(PatternTableReportId);

            if (IsChart == true && RegionId != '0' && StationNumber != '0') {

                var PatternChartCommon = 'QualifObsTickIdD';
                var PatternChartDiff = 'Gare par jour';

                var Title = 'Temps de parcours dépassé - ' + PatternChartDiff;
                var PatternChart = PatternChartCommon + 'TotalLine';
                var labels = GetColumnArray(PatternTableId, 18);
                var data1 = GetColumnArray(PatternTableId, 4);
                var data2 = GetColumnArray(PatternTableId, 5);
                var data3 = GetColumnArray(PatternTableId, 8);

                var label1 = 'TPD';
                var label2 = 'Qualifiable';
                var label3 = 'Qualifié';

                document.getElementById(PatternChart + 'ChartCardId').style.border = 'transparent';
                ChartJsLineThreeTraficHourDisplay(Title, PatternChart, labels, label1, data1, label2, data2, label3, data3, false);

                //
                var Title = 'Qualification du Temps de parcours dépassé - ' + PatternChartDiff;
                var PatternChart = PatternChartCommon + 'ControlLine';
                var labels = GetColumnArray(PatternTableId, 18);
                var data1 = GetColumnArray(PatternTableId, 10);
                var data2 = GetColumnArray(PatternTableId, 12);
                var data3 = GetColumnArray(PatternTableId, 14);
                var data4 = GetColumnArray(PatternTableId, 16);

                var label1 = 'TPD justifié';
                var label2 = 'TPD non-justifié';
                var label3 = 'Qualification impossible';
                var label4 = 'Parcours douteux';

                document.getElementById(PatternChart + 'ChartCardId').style.border = 'transparent';
                ChartJsLineFourTraficHourDisplay(Title, PatternChart, labels, label1, data1, label2, data2, label3, data3, label4, data4, false);

                var Title = 'Evolution du taux de fraude au parcours confirmée - ' + PatternChartDiff;
                var PatternChart = PatternChartCommon + 'RateLine';
                var labels = GetColumnArray(PatternTableId, 18);
                var data1 = GetColumnArray(PatternTableId, 11);
                var data2 = GetColumnArray(PatternTableId, 13);
                var data3 = GetColumnArray(PatternTableId, 15);

                var label1 = 'TPD justifié';
                var label2 = 'TPD non-justifié';
                var label3 = 'Qualification impossible';

                document.getElementById(PatternChart + 'ChartCardId').style.border = 'transparent';
                ChartJsLineThreeTraficHourDisplay(Title, PatternChart, labels, label1, data1, label2, data2, label3, data3, false);

                //Doughnut 0
                var Title = 'Taux du TPD par rapport au trafic - ' + PatternChartDiff;
                var PatternChart = PatternChartCommon + 'TotalDoughnut';
                var label00 = 'Temps de parcours dépassé';
                var label01 = '';

                var data = {
                    datasets: [{
                        data: [data00, data01],
                        backgroundColor: ['#03045e', '#adb5bd'],
                    }],

                    labels: [label00]
                };

                document.getElementById(PatternChart + 'ChartCardId').style.border = 'transparent';
                ChartJsDoughnutOneDisplay(Title, PatternChart, data);

                ////Doughnut 1
                var Title = 'Taux des transactions qualifiables - ' + PatternChartDiff;
                var PatternChart = PatternChartCommon + 'QualifiableDoughnut';
                var label10 = 'A qualier (Vitesse <= 30Km)';
                var label11 = '';
                var data = {
                    datasets: [{
                        data: [data10, data11],
                        backgroundColor: ['#0077b6', '#adb5bd'],
                    }],
                    labels: [label10]
                };
                document.getElementById(PatternChart + 'ChartCardId').style.border = 'transparent';
                ChartJsDoughnutOneDisplay(Title, PatternChart, data);

                //Doughnut 2
                var Title = 'Qualification du Temps de parcours dépassé - ' + PatternChartDiff;
                var PatternChart = PatternChartCommon + 'ControlDoughnut';
                var label20 = 'TPD justifié';
                var label21 = 'TPD non-justifié';
                var label22 = 'Qualification impossible';
                var label23 = 'Parcours douteux';

                var data = {
                    datasets: [{
                        data: [data20, data21, data22, data23],
                        backgroundColor: ['#38b000', '#d90429', '#adb5bd', '#D75F05'],
                    }],

                    labels: [label20, label21, label22, label23]
                };
                document.getElementById(PatternChart + 'ChartCardId').style.border = 'transparent';
                ChartJsDoughnutOneDisplay(Title, PatternChart, data);

                //Doughnut 3
                var Title = 'Taux de fraude par rapport au trafic SF - ' + PatternChartDiff;
                var PatternChart = PatternChartCommon + 'RateDoughnut';
                var label30 = 'Fraude confirmée';
                var label31 = '';
                var data = {
                    datasets: [{
                        data: [data30, data31],
                        backgroundColor: ['#d90429', '#adb5bd'],
                    }],
                    labels: [label30]
                };
                document.getElementById(PatternChart + 'ChartCardId').style.border = 'transparent';
                ChartJsDoughnutOneDisplay(Title, PatternChart, data);

                //Doughnut 4
                var Title = 'Taux de fraude par rapport au trafic SF - ' + PatternChartDiff;
                var PatternChart = PatternChartCommon + 'RateSumDoughnut';
                var label40 = 'Fraude confirmée + Qualification impossible + Parcours douteux';
                var label41 = '';
                var data = {
                    datasets: [{
                        data: [data40, data41],
                        backgroundColor: ['#d90429', '#adb5bd'],
                    }],
                    labels: [label40]
                };
                document.getElementById(PatternChart + 'ChartCardId').style.border = 'transparent';
                ChartJsDoughnutOneDisplay(Title, PatternChart, data);

                //Doughnut 5
                var Title = 'Fraude confirmée par classe - ' + PatternChartDiff;
                var PatternChart = PatternChartCommon + 'ControlClDoughnut';
                var label50 = 'VL';
                var label51 = 'PL1';
                var label52 = 'PL2';
                var label53 = '00';

                var data = {
                    datasets: [{
                        data: [data50, data51, data52, data53],
                        backgroundColor: ['#D71A04', '#A104CC', '#257BCC', '#D7A5A5'],
                    }],

                    labels: [label50, label51, label52, label53]
                };
                document.getElementById(PatternChart + 'ChartCardId').style.border = 'transparent';
                ChartJsDoughnutOneDisplay(Title, PatternChart, data);

                //Doughnut 6
                var Title = 'Fraude confirmée par MP - ' + PatternChartDiff;
                var PatternChart = PatternChartCommon + 'ControlMpDoughnut';
                var label60 = 'Espèce';
                var label61 = 'Tlp Pré';
                var label62 = 'Tlp Post';
                var label63 = 'Autres';

                var data = {
                    datasets: [{
                        data: [data60, data61, data62, data63],
                        backgroundColor: ['#EBE31D', '#EB7F35', '#BA5319', '#5E4D4B'],
                    }],

                    labels: [label60, label61, label62, label63]
                };
                document.getElementById(PatternChart + 'ChartCardId').style.border = 'transparent';
                ChartJsDoughnutOneDisplay(Title, PatternChart, data);

                //Doughnut 7
                var Title = 'Fraude confirmée par axe - ' + PatternChartDiff;
                var PatternChart = PatternChartCommon + 'ControlAxleDoughnut';
                var label70 = 'Kénitra Nord - Mdiq';
                var label71 = 'Sidi Allal Bahraoui - Oujda';
                var label72 = 'Agadir-Berrechid-Beni mellal';
                var label73 = 'Nassim-Safi';
                var label74 = 'Autres';

                var data = {
                    datasets: [{
                        data: [data70, data71, data72, data73, data74],
                        backgroundColor: ['#70d6ff', '#ff70a6', '#ff9770', '#5b8e7d', '#e9ff70'],
                    }],

                    labels: [label70, label71, label72, label73, label74]
                };
                document.getElementById(PatternChart + 'ChartCardId').style.border = 'transparent';
                ChartJsDoughnutOneDisplay(Title, PatternChart, data);

                ShowGridReport('Grid_0000');
                ShowGridReport('Grid_0001');
            }

        },
        "ajax": {
            "url": "/Qualif/QualifObsTickIdDLaneDayGet",
            "type": "GET",
            "datatype": "json",
            "data": {
                DateStringStart: DateStringStart,
                DateStringEnd: DateStringEnd,
                RegionId: RegionId,
                LSId: LSId,
                StationNumber: StationNumber,
                LaneName: LaneName,
            }
        },
        "columns": [
            { "data": "" },//0
            { "data": "LaneName" },//1
            { "data": "TotalTrafic" },//2

            { "data": "ObsTotal" },//3
            { "data": "ObsTotal" },//4                       

            { "data": "TotalToQualify" },//5
            { "data": "TotalToQualify" },//6
            { "data": "TotalToQualify" },//7

            { "data": "ObsQualified" },//8 
            { "data": "ObsQualified" },//9

            { "data": "ObsCtr04" },//10
            { "data": "ObsCtr04" },//11

            { "data": "ObsCtr06" },//12
            { "data": "ObsCtr06" },//13

            { "data": "ObsCtr03" },//14
            { "data": "ObsCtr03" },//15

            { "data": "ObsCtr99" },//16
            { "data": "ObsCtr99" },//17
                        
            { "mData": function vehicle(data, type, dataToSet) { return GetDigits(data.Day, 2) + GetDigits(data.Month, 2) + data.Year + data.RegionId + data.LSId + data.StationNumber + data.LaneName + 'D' + '--' + '--' + '--'; } },//18 Detail
            { "data": "ObsPriceLostMaxPath" },//19

            { "mData": function vehicle(data, type, dataToSet) { return GetDigits(data.Day, 2) + '/' + GetDigits(data.Month, 2); } },//20

            { "data": "ObsC01" },//21
            { "data": "ObsC02" },//22
            { "data": "ObsC03" },//23

            { "data": "ObsM01" },//24
            { "data": "ObsM40" },//25
            { "data": "ObsM41" },//26

            { "data": "ObsA1" },//27
            { "data": "ObsA3" },//28
            { "data": "ObsA4" },//29
            { "data": "ObsA5" },//30
        ],
        "columnDefs": [
            { "width": "3%", "className": "text-center", "targets": 0 },
            { "width": "3%", "className": "text-left", "targets": 1 },
            { "width": "3%", "className": "text-right", "targets": 2 },

            { "width": "3%", "className": "text-right", "targets": 3 },
            { "width": "3%", "className": "text-right", "targets": 4 },

            { "width": "3%", "className": "text-right", "targets": 5 },
            { "width": "3%", "className": "text-right", "targets": 6 },
            { "width": "3%", "className": "text-center", "targets": 7 },

            { "width": "3%", "className": "text-right", "targets": 8 },
            { "width": "3%", "className": "text-right", "targets": 9 },

            { "width": "3%", "className": "text-right", "targets": 10 },
            { "width": "3%", "className": "text-right", "targets": 11 },

            { "width": "3%", "className": "text-right", "targets": 12 },
            { "width": "3%", "className": "text-right", "targets": 13 },

            { "width": "3%", "className": "text-right", "targets": 14 },
            { "width": "3%", "className": "text-right", "targets": 15 },

            { "width": "3%", "className": "text-right", "targets": 16 },
            { "width": "3%", "className": "text-right", "targets": 17 },

            { "width": "3%", "className": "text-center", "targets": 18 },
            { "width": "3%", "className": "text-center", "targets": 19 },

            { "width": "3%", "className": "text-center none", "targets": 20 },

            { "width": "3%", "className": "text-right none", "targets": 21 },
            { "width": "3%", "className": "text-right none", "targets": 22 },
            { "width": "3%", "className": "text-right none", "targets": 23 },

            { "width": "3%", "className": "text-right none", "targets": 24 },
            { "width": "3%", "className": "text-right none", "targets": 25 },
            { "width": "3%", "className": "text-right none", "targets": 26 },

            { "width": "3%", "className": "text-right none", "targets": 27 },
            { "width": "3%", "className": "text-right none", "targets": 28 },
            { "width": "3%", "className": "text-right none", "targets": 29 },
            { "width": "3%", "className": "text-right none", "targets": 30 },

            { "targets": 0, "render": function (data, type, row) { return DataTableCertifiedInfoGet(row['IsCertified']) + ' ' + DataTableDateValueFromRowGet(row); } },
            { "targets": 1, "render": function (data, type, row) { return row['StationName'] + '' + row['LaneName']; } },
            { "targets": 2, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },

            { "targets": 3, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 4, "render": function (data, type, row) { return DataTablePercentageTwoThresholdsGet(data, row['TotalTrafic'], 2, 1, 3); } },

            { "targets": 5, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 6, "render": function (data, type, row) { return DataTableRateTwoThresholdsGet(data, row['ObsTotal'], 2, 70, 90); } },
            {
                "targets": 7, "render": function (data, type, row) {//Calculate-Qualif
                    var TaskId = '04';//Calculate
                    var SourceId = '19';//Counters
                    var FileTypeId = 'JB';//Qualifiable-Station
                    var DateString = GetDigits(row['Day'], 2) + GetDigits(row['Month'], 2) + row['Year'];
                    var SiteId = '--';
                    var LSId = row['LSId'];
                    var BagContainerId = '--';
                    var StationNumber = row['StationNumber'];
                    var LaneName = row['LaneName'];
                    var PdvId = '--';
                    var BillingId = '--';
                    var CategoryId = '--';
                    var ParamId = TaskId + SourceId + FileTypeId + DateString + SiteId + LSId + BagContainerId + StationNumber + LaneName + PdvId + BillingId + CategoryId;

                    var Pattern = 'CertTaskAdd';
                    var RowId = data + ParamId;
                    var argument = '\'' + RowId + '\', \'' + ParamId + '\'';
                    var text = '';
                    var BtnClass = 'dt-btn-cl gc-bc1-cl';
                    var SpanClass = 'fas fa-redo-alt btn-icon-cl gc-c1-cl';
                    var TextClass = 'dt-text-cl';
                    return DataTableButtonGet(Pattern, RowId, argument, text, BtnClass, SpanClass, TextClass);
                }
            },

            { "targets": 8, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 9, "render": function (data, type, row) { return DataTableRateTwoThresholdsGet(data, row['TotalToQualify'], 2, 50, 90); } },

            {
                "targets": 10, "render": function (data, type, row) {
                    var Value = data;
                    var Id = GetDigits(row['Day'], 2) + GetDigits(row['Month'], 2) + row['Year'] + row['RegionId'] + row['LSId'] + row['StationNumber'] + row['LaneName'] + 'D' + '--' + '04' + '--';
                    var OnClick = 'QualifTrxLaneSearch(\'' + Id + '\')';
                    return DataTableIntOnClickGet(Value, OnClick);
                    
                }
            },            
            { "targets": 11, "render": function (data, type, row) { return DataTableRateTwoThresholdsGet(data, row['ObsQualified'], 2, 80, 98); } },

            {
                "targets": 12, "render": function (data, type, row) {
                    var Value = data;
                    var Id = GetDigits(row['Day'], 2) + GetDigits(row['Month'], 2) + row['Year'] + row['RegionId'] + row['LSId'] + row['StationNumber'] + row['LaneName'] + 'D' + '--' + '06' + '--';
                    var OnClick = 'QualifTrxLaneSearch(\'' + Id + '\')';
                    return DataTableIntOnClickGet(Value, OnClick);

                }
            },
            { "targets": 13, "render": function (data, type, row) { return DataTablePercentageTwoThresholdsGet(data, row['ObsQualified'], 2, 1, 3); } },

            {
                "targets": 14, "render": function (data, type, row) {
                    var Value = data;
                    var Id = GetDigits(row['Day'], 2) + GetDigits(row['Month'], 2) + row['Year'] + row['RegionId'] + row['LSId'] + row['StationNumber'] + row['LaneName'] + 'D' + '--' + '03' + '--';
                    var OnClick = 'QualifTrxLaneSearch(\'' + Id + '\')';
                    return DataTableIntOnClickGet(Value, OnClick);

                }
            },
            { "targets": 15, "render": function (data, type, row) { return DataTablePercentageTwoThresholdsGet(data, row['ObsQualified'], 2, 5, 10); } },

            {
                "targets": 16, "render": function (data, type, row) {
                    var Value = data;
                    var Id = GetDigits(row['Day'], 2) + GetDigits(row['Month'], 2) + row['Year'] + row['RegionId'] + row['LSId'] + row['StationNumber'] + row['LaneName'] + 'D' + '--' + '99' + '--';
                    var OnClick = 'QualifTrxLaneSearch(\'' + Id + '\')';
                    return DataTableIntOnClickGet(Value, OnClick);

                }
            },
            { "targets": 17, "render": function (data, type, row) { return DataTablePercentageTwoThresholdsGet(row['ObsCtr99'], row['ObsQualified'], 2, 5, 10); } },

            {
                "targets": 18, "render": function (data, type, row) {

                    return DataTableButtonGet('QualifTrxLaneSearch', data, '\'' + data + '\'', '', 'dt-btn-cl gc-bc1-cl', 'fas fa-eye btn-icon-cl gc-c1-cl', '')
                }
            },
            { "targets": 19, "render": function (data, type, row) { return DataTableFormatDoubleGet(data); } },

            { "targets": 20, "render": function (data, type, row) { return data; } },

            { "targets": 21, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 22, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 23, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },

            { "targets": 24, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 25, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 26, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },

            { "targets": 27, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 28, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 29, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 30, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
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
        "iDisplayLength": 10,
        "processing": false,
        "responsive": false,
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

            DataTableTotalIntGet(api, intVal, 2);
            DataTableTotalIntGet(api, intVal, 3);
            DataTableTotalIntGet(api, intVal, 5);
            DataTableTotalIntGet(api, intVal, 8);
            DataTableTotalIntGet(api, intVal, 10);
            DataTableTotalIntGet(api, intVal, 12);
            DataTableTotalIntGet(api, intVal, 14);
            DataTableTotalIntGet(api, intVal, 16);

            DataTableTotalIntGet(api, intVal, 21);
            DataTableTotalIntGet(api, intVal, 22);
            DataTableTotalIntGet(api, intVal, 23);
            DataTableTotalIntGet(api, intVal, 24);
            DataTableTotalIntGet(api, intVal, 25);
            DataTableTotalIntGet(api, intVal, 26);
            DataTableTotalIntGet(api, intVal, 27);
            DataTableTotalIntGet(api, intVal, 28);
            DataTableTotalIntGet(api, intVal, 29);
            DataTableTotalIntGet(api, intVal, 30);

            DataTableTotalPercentageGet(api, intVal, 3, 2, 4);
            DataTableTotalPercentageGet(api, intVal, 5, 3, 6);
            DataTableTotalPercentageGet(api, intVal, 8, 5, 9);

            DataTableTotalPercentageGet(api, intVal, 10, 8, 11);
            DataTableTotalPercentageGet(api, intVal, 12, 8, 13);
            DataTableTotalPercentageGet(api, intVal, 14, 8, 15);
            DataTableTotalPercentageGet(api, intVal, 16, 8, 17);

            data00 = DataTableColumnPercentageGet(api, intVal, 3, 2);
            data01 = (100 - data00).toFixed(2);

            data10 = DataTableColumnPercentageGet(api, intVal, 5, 3);
            data11 = (100 - data10).toFixed(2);

            data20 = DataTableColumnPercentageGet(api, intVal, 10, 8);
            data21 = DataTableColumnPercentageGet(api, intVal, 12, 8);
            data22 = DataTableColumnPercentageGet(api, intVal, 14, 8);
            data23 = DataTableColumnPercentageGet(api, intVal, 16, 8);

            data30 = ((api.column(12).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0)) * 100 / (api.column(2).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0))).toFixed(1);
            data31 = (100 - data30).toFixed(2);

            data40 = ((api.column(12).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0)
                + api.column(14).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0)
                + api.column(16).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0)) * 100 / (api.column(2).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0))).toFixed(1);
            data41 = (100 - data40).toFixed(2);

            data50 = DataTableColumnPercentageGet(api, intVal, 21, 12);
            data51 = DataTableColumnPercentageGet(api, intVal, 22, 12);
            data52 = DataTableColumnPercentageGet(api, intVal, 23, 12);

            data53Bar = ((api.column(21).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0)
                + api.column(22).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0)
                + api.column(23).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0)) * 100 / (api.column(12).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0))).toFixed(1);

            data53 = (100 - data53Bar).toFixed(1);

            data60 = DataTableColumnPercentageGet(api, intVal, 24, 12);
            data61 = DataTableColumnPercentageGet(api, intVal, 25, 12);
            data62 = DataTableColumnPercentageGet(api, intVal, 26, 12);
            data63Bar = ((api.column(24).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0)
                + api.column(25).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0)
                + api.column(26).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0)) * 100 / (api.column(12).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0))).toFixed(1);

            data63 = (100 - data63Bar).toFixed(1);

            data70 = DataTableColumnPercentageGet(api, intVal, 27, 12);
            data71 = DataTableColumnPercentageGet(api, intVal, 28, 12);
            data72 = DataTableColumnPercentageGet(api, intVal, 29, 12);
            data73 = DataTableColumnPercentageGet(api, intVal, 30, 12);
            data74Bar = ((api.column(27).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0)
                + api.column(28).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0)
                + api.column(29).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0)
                + api.column(30).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0)) * 100 / (api.column(12).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0))).toFixed(1);

            data74 = (100 - data74Bar).toFixed(1);
        }
    });
}


function QualifExportOpen() {
    QualifAllReportsHide();
    QualifAllParametersHide();
    MenuBarNavHighlight(2, 1, 1);

    ParamTitleSet('Export de données');

    //gloabl
    ShowReport('ParamReportId');
    ShowParent('DateStartId');
    ShowParent('DateEndId');
    ShowParent('ExportId');
    
    //Action
    ParamActionBtnGet(0, 'Exporter', 'fas fa-file-export', "QualifExport()");

    //Connection
    NotiConnectionIdUpdate('Qualification - Analyse - Export');
}

function QualifSearchRepeatByTagExport(DateStringStart, DateStringEnd, SerialNumber, FileType) {

    var PrintLink = '/Qualif/QualifSearchRepeatByTagExport?' +
        'DateStringStart=' + DateStringStart +
        '&DateStringEnd=' + DateStringEnd +
        '&SerialNumber=' + SerialNumber +
        '&FileType=' + FileType;

    NavigateTo(PrintLink, true);
}

function QualifObsTickIdDPerfOpen() {
    QualifAllReportsHide();
    QualifAllParametersHide();
    MenuBarNavHighlight(4, 2, 2);

    ParamTitleSet('Performance des contrôleurs du TPD');

    //Reports
    ShowReport('ParamReportId');

    //Parents
    ShowParent('DateStartId');
    ShowParent('DateEndId');
    ShowParent('TimeId');

    //Actions
    ParamActionBtnGet(0, 'Afficher', 'fas fa-eye', 'QualifObsTickIdDPerfAllDisplay()');

    $.ajax({
        url: "/Common/RoleNameListGet",
        method: "POST",
        contentType: "application/json; charset=utf-8",
        async: true,
        success: function (data) {
            if (data.includes('Administrateur') || data.includes('QualifPathSupervisor')) {
                DropDownListSet('TimeId', '01');
                DateValueDefaultSet('DateStartId', 1);
                DateValueDefaultSet('DateEndId', 1);
            }
            else {
                if (data.includes('QualifPath')) {
                    DateValueDefaultSet('DateStartId', 1);
                    DateValueDefaultSet('DateEndId', 1);
                    DropDownListSet('TimeId', '07');
                }
            }
        }
    });

    //Connection
    NotiConnectionIdUpdate('Qualification - Performance');
}

function QualifObsTickIdDPerfAllDisplay() {

    var ActionBtnId = 'ParamActionBtnId0';
    var Icon = 'fas fa-eye';
    var IsMargin = true;

    var TimeId = GetElementValue('TimeId');

    if (TimeId == '01') {//Day
        QualifObsTickIdDPerfDayDisplay(ActionBtnId, Icon, IsMargin);
    }
    else {
        if (TimeId == '06') {//Cumul
            QualifObsTickIdDPerfCumulDisplay(ActionBtnId, Icon, IsMargin);
        }
        else {
            ParamMessageErrorDisplay('Ce niveau n\'est pas authorisé');
        }
    }
}

function QualifObsTickIdDPerfDayDisplay(ActionBtnId, Icon, IsMargin) {
    var DateStringStart = GetDateStringFromDatePicker('DateStartId');
    var DateStringEnd = GetDateStringFromDatePicker('DateEndId');

    QualifAllReportsHide();
    ShowReport('ParamReportId');

    if (DateStringStart != '' && DateStringEnd != '') {
        QualifObsTickIdDPerfDayGet(ActionBtnId, Icon, IsMargin, DateStringStart, DateStringEnd);
    }
    else {
        ParamMessageErrorDisplay('Les dates de début et de fin sont obligatoires');
    };
}

function QualifObsTickIdDPerfDayGet(ActionBtnId, Icon, IsMargin, DateStringStart, DateStringEnd) {

    //Spin    
    ActionSpin(ActionBtnId, IsMargin);

    //ParamReset
    ParamMessageReset();

    var PatternTable = 'QualifObsTickIdDPerfDay';
    var PatternTableId = PatternTable + 'TableId'
    var PatternTableReportId = PatternTable + 'TableReportId';

    $('#' + PatternTableId).DataTable().destroy();
    $('#' + PatternTableId).DataTable({
        "dom": 'Bfrtip',
        "buttons": [
            'excel'
        ],
        "initComplete": function (settings, json) {
            ActionBtnIconSet(ActionBtnId, Icon);
            ShowReport(PatternTableReportId);
        },
        "ajax": {
            "url": "/Qualif/QualifObsTickIdDPerfDayGet",
            "type": "GET",
            "datatype": "json",
            "data": {
                DateStringStart: DateStringStart,
                DateStringEnd: DateStringEnd
            }
        },
        "columns": [
            { "data": "" },//0
            { "data": "CreatedBy" },//1
            { "data": "FullName" },//2

            { "data": "ObsTickIdD" },//3

            { "data": "ObsTickIdD04" },//4
            { "data": "ObsTickIdD04" },//5

            { "data": "ObsTickIdD06" },//6
            { "data": "ObsTickIdD06" },//7

            { "data": "ObsTickIdD03" },//8
            { "data": "ObsTickIdD03" },//9

            { "data": "ObsTickIdD99" },//10
            { "data": "ObsTickIdD99" },//11
        ],
        "columnDefs": [
            { "width": "3%", "className": "text-center", "targets": 0 },
            { "width": "3%", "className": "text-center", "targets": 1 },
            { "width": "3%", "className": "text-center", "targets": 2 },

            { "width": "3%", "className": "text-right", "targets": 3 },

            { "width": "3%", "className": "text-right", "targets": 4 },
            { "width": "3%", "className": "text-right", "targets": 5 },

            { "width": "3%", "className": "text-right", "targets": 6 },
            { "width": "3%", "className": "text-right", "targets": 7 },

            { "width": "3%", "className": "text-right", "targets": 8 },
            { "width": "3%", "className": "text-right", "targets": 9 },

            { "width": "3%", "className": "text-right", "targets": 10 },
            { "width": "3%", "className": "text-right", "targets": 11 },

            { "targets": 0, "render": function (data, type, row) { return DataTableDateValueFromRowGet(row); } },
            { "targets": 1, "render": function (data, type, row) { return '<img class="dt-img-cl" src="/Images/Profil/' + data + row['ImageExtension'] + '" />'; } },
            { "targets": 2, "render": function (data, type, row) { return data; } },

            { "targets": 3, "render": function (data, type, row) { return DataTableFormatIntNullAlertGet(data); } },

            { "targets": 4, "render": function (data, type, row) { return DataTableFormatIntNullAlertGet(data); } },
            { "targets": 5, "render": function (data, type, row) { return DataTableRateTwoThresholdsGet(data, row['ObsTickIdD'], 2, 80, 98); } },

            { "targets": 6, "render": function (data, type, row) { return DataTableFormatIntNullAlertGet(data); } },
            { "targets": 7, "render": function (data, type, row) { return DataTableRateTwoThresholdsGet(data, row['ObsTickIdD'], 2, 80, 98); } },

            { "targets": 8, "render": function (data, type, row) { return DataTableFormatIntNullAlertGet(data); } },
            { "targets": 9, "render": function (data, type, row) { return DataTableRateTwoThresholdsGet(data, row['ObsTickIdD'], 2, 80, 98); } },

            { "targets": 10, "render": function (data, type, row) { return DataTableFormatIntNullAlertGet(data); } },
            { "targets": 11, "render": function (data, type, row) { return DataTableRateTwoThresholdsGet(data, row['ObsTickIdD'], 2, 80, 98); } },
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
        "iDisplayLength": 40,
        "processing": false,
        "responsive": true,
        "bFilter": true,
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


            //Total0 = api.column(1).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);
            //$(api.column(1).footer()).html(numShortFormat(Total0));

            //Total1 = api.column(3).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);
            //$(api.column(3).footer()).html(numShortFormat(Total1));

            //Total2 = api.column(5).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);
            //$(api.column(5).footer()).html(numShortFormat(Total2));
        }
    });
}

function QualifPerfHomeOpen() {
    QualifAllReportsHide();
    QualifAllParametersHide();
    MenuBarNavHighlight(4, 3, 2);

    HidePageReport('Page0_');
}

function QualifObsTickIdDPerfCumulDisplay(ActionBtnId, Icon, IsMargin) {
    var DateStringStart = GetDateStringFromDatePicker('DateStartId');
    var DateStringEnd = GetDateStringFromDatePicker('DateEndId');

    QualifAllReportsHide();
    ShowReport('ParamReportId');

    if (DateStringStart != '' && DateStringEnd != '') {
        QualifObsTickIdDPerfCumulGet(ActionBtnId, Icon, IsMargin, DateStringStart, DateStringEnd);
    }
    else {
        ParamMessageErrorDisplay('Les dates de début et de fin sont obligatoires');
    };
}


function QualifObsTickIdDPerfCumulGet(ActionBtnId, Icon, IsMargin, DateStringStart, DateStringEnd) {

    //Spin    
    ActionSpin(ActionBtnId, IsMargin);

    //ParamReset
    ParamMessageReset();

    var PatternTable = 'QualifObsTickIdDPerfCumul';
    var PatternTableId = PatternTable + 'TableId'
    var PatternTableReportId = PatternTable + 'TableReportId';

    $('#' + PatternTableId).DataTable().destroy();
    $('#' + PatternTableId).DataTable({
        "dom": 'Bfrtip',
        "buttons": [
            'excel'
        ],
        "initComplete": function (settings, json) {
            ActionBtnIconSet(ActionBtnId, Icon);
            ShowReport(PatternTableReportId);
        },
        "ajax": {
            "url": "/Qualif/QualifObsTickIdDPerfCumulGet",
            "type": "GET",
            "datatype": "json",
            "data": {
                DateStringStart: DateStringStart,
                DateStringEnd: DateStringEnd
            }
        },
        "columns": [
            { "data": "" },//0
            { "data": "" },//1
            { "data": "CreatedBy" },//2
            { "data": "FullName" },//3

            { "data": "ObsTickIdD" },//4

            { "data": "ObsTickIdD04" },//5
            { "data": "ObsTickIdD04" },//6

            { "data": "ObsTickIdD06" },//7
            { "data": "ObsTickIdD06" },//8

            { "data": "ObsTickIdD03" },//9
            { "data": "ObsTickIdD03" },//10

            { "data": "ObsTickIdD99" },//11
            { "data": "ObsTickIdD99" },//12
        ],
        "columnDefs": [
            { "width": "3%", "className": "text-center", "targets": 0 },
            { "width": "3%", "className": "text-center", "targets": 1 },
            { "width": "3%", "className": "text-center", "targets": 2 },
            { "width": "3%", "className": "text-center", "targets": 3 },

            { "width": "3%", "className": "text-right", "targets": 4 },

            { "width": "3%", "className": "text-right", "targets": 5 },
            { "width": "3%", "className": "text-right", "targets": 6 },

            { "width": "3%", "className": "text-right", "targets": 7 },
            { "width": "3%", "className": "text-right", "targets": 8 },

            { "width": "3%", "className": "text-right", "targets": 9 },
            { "width": "3%", "className": "text-right", "targets": 10 },

            { "width": "3%", "className": "text-right", "targets": 11 },
            { "width": "3%", "className": "text-right", "targets": 12 },

            { "targets": 0, "render": function (data, type, row) { return DataTableDateValueStartFromRowGet(row); } },
            { "targets": 1, "render": function (data, type, row) { return DataTableDateValueEndFromRowGet(row); } },
            { "targets": 2, "render": function (data, type, row) { return '<img class="dt-img-cl" src="/Images/Profil/' + data + row['ImageExtension'] + '" />'; } },
            { "targets": 3, "render": function (data, type, row) { return data; } },

            { "targets": 4, "render": function (data, type, row) { return DataTableFormatIntNullAlertGet(data); } },

            { "targets": 5, "render": function (data, type, row) { return DataTableFormatIntNullAlertGet(data); } },
            { "targets": 6, "render": function (data, type, row) { return DataTableRateTwoThresholdsGet(data, row['ObsTickIdD'], 2, 80, 98); } },

            { "targets": 7, "render": function (data, type, row) { return DataTableFormatIntNullAlertGet(data); } },
            { "targets": 8, "render": function (data, type, row) { return DataTableRateTwoThresholdsGet(data, row['ObsTickIdD'], 2, 80, 98); } },

            { "targets": 9, "render": function (data, type, row) { return DataTableFormatIntNullAlertGet(data); } },
            { "targets": 10, "render": function (data, type, row) { return DataTableRateTwoThresholdsGet(data, row['ObsTickIdD'], 2, 80, 98); } },

            { "targets": 11, "render": function (data, type, row) { return DataTableFormatIntNullAlertGet(data); } },
            { "targets": 12, "render": function (data, type, row) { return DataTableRateTwoThresholdsGet(data, row['ObsTickIdD'], 2, 80, 98); } },
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
        "iDisplayLength": 40,
        "processing": false,
        "responsive": true,
        "bFilter": true,
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


            //Total0 = api.column(1).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);
            //$(api.column(1).footer()).html(numShortFormat(Total0));

            //Total1 = api.column(3).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);
            //$(api.column(3).footer()).html(numShortFormat(Total1));

            //Total2 = api.column(5).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);
            //$(api.column(5).footer()).html(numShortFormat(Total2));
        }
    });
}


function QualifExport() {

    var ActionBtnId = 'ParamActionBtnId0';
    var Icon = 'fas fa-file-export';
    var IsMargin = true;

    var DateStringStart = GetDateStringFromDatePicker('DateStartId');
    var DateStringEnd = GetDateStringFromDatePicker('DateEndId');
    var ExportId = ElementDropDownListValueGet('ExportId');

    QualifAllReportsHide();
    ShowReport('ParamReportId');
    ParamMessageReset();

    ActionSpin(ActionBtnId, IsMargin);

    var obj = {};
    obj.DateStringStart = DateStringStart;
    obj.DateStringEnd = DateStringEnd;
    obj.ExportId = ExportId;

    $.ajax({
        url: "/Qualif/QualifExport",
        method: "POST",
        contentType: "application/json; charset=utf-8",
        dataType: "text",
        data: JSON.stringify(obj),
        success: function (data) {
            ActionBtnSet(ActionBtnId, Icon, IsMargin);
            if (new String(data).length >= 12) {

                var PrintLink = '/Uploads/' + data;
                NavigateTo(PrintLink, true);
                ParamMessageInfoDisplay('Merci de vérifier votre boite-mail.');
            }
            else {
                if (data == 'NOK') {
                    ParamMessageErrorDisplay('Vous n\'avez pas les autorisations nécessaires!');
                }
                else {
                    ParamMessageErrorDisplay('Erreur - Veuillez contacter votre administrateur!');
                }
            }
        }
    });
}


function QualifPortailObsTickIdDOpen() {
    QualifAllReportsHide();
    QualifAllParametersHide();
    MenuBarNavHighlight(0, 5, 5);

    ShowParent('DateStartId');
    ShowParent('DateEndId');
    ShowParent('LicensePlateId');
    ShowParent('SerialNumberId');
    ShowParent('ObsTickId');
    ShowParent('ObsMpId');
    ShowParent('ObsPassId');

    $('#ParamTitleId').text("Portail des PV");
    ShowReport('ParamReportId');

    DateValueDefaultSet('DateStartId', 8);
    DateValueDefaultSet('DateEndId', 0);

    ParamActionBtnGet(0, 'Afficher', 'fas fa-eye', 'QualifMinuteDisplay()');
}

function QualifMinuteDisplay() {

    //Define
    var ActionBtnId = 'ParamActionBtnId0';
    var Icon = 'fas fa-eye btn-icon-m-cl gc-c1-cl';
    var IsMargin = true;

    var DateStringStart = GetDateStringFromDatePicker('DateStartId');
    var DateStringEnd = GetDateStringFromDatePicker('DateEndId');
    var LicensePlate = GetElementValue('LicensePlateId');    
    var SerialNumber = GetElementValue('SerialNumberId');    

    var ObsTickId = ElementDropDownListValueGet('ObsTickId'); 
    var ObsMpId = ElementDropDownListValueGet('ObsMpId'); 
    var ObsPassId = ElementDropDownListValueGet('ObsPassId'); 

    if (ObsTickId == '0' && ObsMpId == '0' && ObsPassId == '0') {
        ParamMessageErrorDisplay('Vous deverz choisir un code observation.');
    }
    else {
        QualifMinuteGet(ActionBtnId, Icon, IsMargin, DateStringStart, DateStringEnd, SerialNumber, LicensePlate, ObsTickId, ObsMpId, ObsPassId);
    }    
}


function QualifMinuteGet(ActionBtnId, Icon, IsMargin, DateStringStart, DateStringEnd, SerialNumber, LicensePlate, ObsTickId, ObsMpId, ObsPassId) {

    QualifAllReportsHide();
    ShowReport('ParamReportId');
    ParamMessageReset();

    var PatternTable = 'QualifMinute';

    //Spin    
    ActionSpin(ActionBtnId, IsMargin);

    //ParamReset
    ParamMessageReset();

    var PatternTableId = PatternTable + 'TableId'
    var PatternTableReportId = PatternTable + 'TableReportId';

    $('#' + PatternTableId).DataTable().destroy();
    $('#' + PatternTableId).DataTable({
        "dom": 'Bfrtip',
        "buttons": [
            'excel'
        ],
        "initComplete": function (settings, json) {
            ActionBtnSet(ActionBtnId, Icon, IsMargin);
            ShowReport(PatternTableReportId);
        },
        "ajax": {
            "url": "/Qualif/QualifMinuteGet",
            "type": "GET",
            "datatype": "json",
            "data": {
                DateStringStart: DateStringStart,
                DateStringEnd: DateStringEnd,
                SerialNumber: SerialNumber, 
                LicensePlate: LicensePlate,
                ObsTickId: ObsTickId,
                ObsMpId: ObsMpId,
                ObsPassId: ObsPassId
            }
        },
        "columns": [
            { "data": "FileName" },//0
            { "data": "FilePath" },//1
        ],
        "columnDefs": [
            { "width": "3%", "className": "text-center", "targets": 0 },
            { "width": "3%", "className": "text-right", "targets": 1 },

            { "targets": 0, "render": function (data, type, row) { return data; } },
            {
                "targets": 1, "render": function (data, type, row) {
                    if (ObsTickId == 'D') {
                        var argument1 = '\'' + row['FilePath'] + '\'';
                        return DataTableButtonGet('QualifTpdMinuteExport', row['FilePath'], argument1, '', 'dt-btn-cl gc-bc3-cl', 'fas fa-file-pdf btn-icon-cl gc-c1-cl', '');
                    }
                    else {
                        return '';
                    }
                }
            },
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
        "iDisplayLength": 10,
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
        }
    });
}

function QualifRobotOpen() {
    QualifAllReportsHide();
    QualifAllParametersHide();
    MenuBarNavHighlight(1, 1, 2);

    $('#ParamTitleId').text("Qualification distribuée");
    ShowReport('ParamReportId');

    HideParent('RegionId');
    HideParent('LSId');
    HideParent('StationNumberId');

    HideParent('TimeId');
    HideParent('DateStartId');
    HideParent('DateEndId');
    ShowParent('ObsTickId');
    ShowParent('ObsMpId');
    ShowParent('ObsPassId');

    ElementDropDownListSet('ObsTickId', 'D');

    //OnChange   
    ElementOnChangeSet('ObsTickId', "QualifObsTickIdPresetGet()");
    ElementOnChangeSet('ObsMpId', "QualifObsMpIdPresetGet()");
    ElementOnChangeSet('ObsPassId', "QualifObsPassIdPresetGet()");

    ParamActionBtnGet(0, 'Afficher', 'fas fa-eye', 'QualifRobotDisplay()');    
}


function QualifRobotDisplay() {

    //Define
    var ActionBtnId = 'ParamActionBtnId0';
    var Icon = 'fas fa-eye btn-icon-m-cl gc-c1-cl';
    var ObsTickId = GetElementValue('ObsTickId');
    var ObsMpId = GetElementValue('ObsMpId');
    var ObsPassId = GetElementValue('ObsPassId');

    var IsMargin = new Boolean(true);

    QualifAllReportsHide();
    ShowReport('ParamReportId');

    if (ObsTickId == 'D' || ObsTickId == 'P' ||
        ObsMpId == '26' || ObsMpId == '01' || ObsMpId == '48' ||
        ObsPassId == '3' || ObsPassId == '6' || ObsPassId == '7' || ObsPassId == 'W' || ObsPassId == 'A' || ObsPassId == 'V')
    {
        QualifRobotGet(ActionBtnId, Icon, IsMargin, ObsTickId);
    }
    else {
        ParamMessageErrorDisplay('Certaines valeurs ne sont pas acceptées');
    }
}


function QualifPlanOpen() {
    QualifAllReportsHide();
    QualifAllParametersHide();
    MenuBarNavHighlight(1, 2, 2);

    ParamTitleSet('Plan de contrôle');

    ShowReport('ParamReportId');
        
    ShowParent('RegionId');
    ShowParent('LSId');
    ShowParent('StationNumberId');
    
    ShowParent('DateStartId');
    ShowParent('DateEndId');
    ShowParent('OdId');
    ShowParent('QualifTypeId');
    ShowParent('ControllerId');
    ShowParent('TargetNumberId'); 

    //OnChange   
    ElementOnChangeSet('RegionId', "ParamOdFromStationLSGet()");
    ElementOnChangeSet('LSId', "ParamOdFromStationLSGet()");
    ElementOnChangeSet('StationNumberId', "ParamOdFromStationLSGet()");

    //Actions
    ParamActionBtnGet(0, 'Afficher', 'fas fa-eye', 'QualifPlanDisplay()');
    ParamActionBtnGet(1, 'Ajouter', 'fas fa-plus-circle', 'QualifPlanAdd()');
}


function QualifPlanDisplay() {

    //Define
    var ActionBtnId = 'ParamActionBtnId0';
    var Icon = 'fas fa-eye btn-icon-m-cl gc-c1-cl';

    var RegionId = ElementDropDownListValueGet('RegionId');
    var LSId = ElementDropDownListValueGet('LSId');
    var StationNumberId = ElementDropDownListValueGet('StationNumberId');
    var OdId = ElementDropDownListValueGet('OdId');
    var UserId = ElementDropDownListValueGet('ControllerId');

    var IsMargin = new Boolean(true);

    QualifAllReportsHide();
    ShowReport('ParamReportId');

    QualifPlanGet(ActionBtnId, Icon, IsMargin, RegionId, LSId, StationNumberId, OdId, UserId);
}


function QualifPlanGet(ActionBtnId, Icon, IsMargin, RegionId, LSId, StationNumberId, OdId, UserId) {
    
    //Spin
    ActionSpin(ActionBtnId, IsMargin);

    //init
    ParamMessageReset();

    var PatternTable = 'QualifPlan';
    var PatternTableId = PatternTable + 'TableId'
    var PatternTableReportId = PatternTable + 'TableReportId';

    $('#' + PatternTableId).DataTable().destroy();
    $('#' + PatternTableId).DataTable({
        "dom": 'Bfrtip',
        "buttons": [
            'excel'
        ],
        //"dom": 'Bfrtip',
        //"buttons": {
        //    buttons: [
        //        {
        //            text: 'PDF',
        //            action: function (e, dt, node, config) {
        //                var AxleId = '0';
        //                var SiteId = '0';
        //                var BagContainerId = '0';
        //                var StationNumber = '0';
        //                QualifTrxLaneDayExport(AxleId, SiteId, BagContainerId, StationNumber, DateStringStart, DateStringEnd, 'PDF');
        //            }
        //        },
        //        {
        //            text: 'Excel',
        //            action: function (e, dt, node, config) {
        //                var AxleId = '0';
        //                var SiteId = '0';
        //                var BagContainerId = '0';
        //                var StationNumber = '0';
        //                QualifTrxLaneStationExport(AxleId, SiteId, BagContainerId, StationNumber, DateStringStart, DateStringEnd, 'Excel');
        //            }
        //        }
        //    ]
        //},
        "initComplete": function (settings, json) {
            ActionBtnIconSet(ActionBtnId, Icon);
            ShowReport(PatternTableReportId);
        },
        "ajax": {
            "url": "/Qualif/QualifPlanGet",
            "type": "GET",
            "datatype": "json",
            "data": {
                RegionId: RegionId,
                LSId: LSId,
                StationNumberId: StationNumberId,
                OdId: OdId,
                UserId: UserId
            }
        },
        "columns": [
            { "data": "QualifTypeName" },//0
            { "data": "FullName" },//1

            { "data": "DhmValueStart" },//2
            { "data": "DhmValueEnd" },//3
            { "data": "OdName" },//4

            { "data": "TargetNumber" },//5
        ],
        "columnDefs": [
            { "width": "3%", "className": "text-left", "targets": 0 },
            { "width": "3%", "className": "text-left", "targets": 1 },

            { "width": "3%", "className": "text-center", "targets": 2 },
            { "width": "3%", "className": "text-center", "targets": 3 },
            { "width": "3%", "className": "text-left", "targets": 4 },

            { "width": "3%", "className": "text-center", "targets": 5 },

            { "targets": 0, "render": function (data, type, row) { return data; } },
            { "targets": 1, "render": function (data, type, row) { return data; } },

            { "targets": 2, "render": function (data, type, row) { return DataTableDateValueStartFromRowGet(row); } },
            { "targets": 3, "render": function (data, type, row) { return DataTableDateValueEndFromRowGet(row); } },
            { "targets": 4, "render": function (data, type, row) { return data; } },

            { "targets": 5, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
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
        "iDisplayLength": 10,
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

            //DataTableTotalIntGet(api, intVal, 1);
            //DataTableTotalIntGet(api, intVal, 2);
            //DataTableTotalIntGet(api, intVal, 3);
            //DataTableTotalPercentageGet(api, intVal, 3, 2, 4);
        }
    });
}


function QualifPlanAdd() {

    //Define
    var ActionBtnId = 'ParamActionBtnId1';
    var Icon = 'fas fa-plus-circle';
    var IsMargin = true;

    var DateStringStart = GetDateStringFromDatePicker('DateStartId');
    var DateStringEnd = GetDateStringFromDatePicker('DateEndId');

    var OdId = ElementDropDownListValueGet('OdId');
    var QualifTypeId = ElementDropDownListValueGet('QualifTypeId');
    var UserId = ElementDropDownListValueGet('ControllerId');
    
    var TargetNumber = GetElementValue('TargetNumberId');  

    QualifAllReportsHide();
    ShowReport('ParamReportId');
    
    if (OdId != '0' && QualifTypeId != '0' && UserId != '0' && TargetNumber != '') {

        var obj = {};

        obj.DateStringStart = DateStringStart;
        obj.DateStringEnd = DateStringEnd;

        obj.OdId = OdId;
        obj.QualifTypeId = QualifTypeId;
        obj.UserId = UserId;
        obj.TargetNumber = TargetNumber;

        //Spin
        ActionSpin(ActionBtnId, IsMargin);

        var PatternTable = 'QualifPlan';
        var PatternTableReportId = PatternTable + 'TableReportId';

        HideReport(PatternTableReportId);

        $.ajax({
            url: "/Qualif/QualifPlanAdd",
            method: "POST",
            data: JSON.stringify(obj),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {
                ActionBtnIconSet(ActionBtnId, Icon);
                QualifPlanDisplay();
            }
        });
    }
    else {
        ParamMessageErrorDisplay();
    };
}

function QualifRobotGet(ActionBtnId, Icon, IsMargin) {

    var RegionId = '0';
    var LSId = '0';
    var StationNumber = '0';
    var LaneName = '0';

    var RegionIdO = '0';
    var LSIdO = '0';
    var StationNumberO = '0';
    var LaneNameO = '0';
    var DhmStringStartO = '0';
    var DhmStringEndO = '0';

    var ObsTickId = ElementDropDownListValueGet('ObsTickId');
    var ObsMpId = ElementDropDownListValueGet('ObsMpId');

    QualifAllReportsHide();
    ShowReport('ParamReportId');

    ParamMessageReset();
    ActionSpin(ActionBtnId, IsMargin);

    ActionSpin(ActionBtnId, IsMargin);

    var DhmStringStart = 'Robot';
    var DhmStringEnd = '';
    var IsImage = false;
    var IsImageIapi = false;

    var RegionIdO = '0';
    var LSIdO = '0';
    var StationNumberO = '0';
    var LaneNameO = '0';
    var DhmStringStartO = '010120210000';
    var DhmStringEndO = '010120280000';
    var IsImageO = false;
    var IsImageIapiO = false;

    var BillingId = '0';
    var CategoryId = '0';

    var PresetId = '0';
    var ObsPassId = '0';

    var QualifControlId = '0';

    var QualifReasonId = '0';

    var IsConvenientContext = false;
    var IsConvenientIapi = false;
    var IsConvenientClass = false;
    var IsPathQualified = false;

    var IsConvenientContextO = false;
    var IsConvenientIapiO = false;

    var IsContextOnly = false;
    var IsIapiOnly = false;
    var IsPathOnly = true;
    var IsSortieOnly = false;

    var RowIdTrxLane = 0;
    var ProductNumber = '';

    var IsLabel = false;
    var IsCyclopeClassify = false;
    var IsCyclopePath = false;
    var IsPathQualifiable = false;

    if (ObsTickId == 'P') {
        IsPathQualifiable = true;
    }
    if (ObsTickId == 'D' || ObsTickId == 'I') {
        IsPathQualifiable = false;
        IsPathOnly = false;
        IsSortieOnly = false;
    }

    if (ObsMpId == '26') {
        IsPathQualifiable = false;
        IsPathOnly = false;
        IsSortieOnly = true;
    }

    var OctalCode = '0';
    var IsLabeled = false;

    var SerialNumber = '';
    var LicensePlate = '';

    var IsCyclopeClassDiscId = false;
    var IsCyclopePathDiscId = false;

    //hide some reports
    HideReport('QualifPath' + 'TableReportId');

    QualifPathGet(ActionBtnId, Icon,
        RegionId, LSId, StationNumber, LaneName, DhmStringStart, DhmStringEnd, IsImage, IsImageIapi,
        RegionIdO, LSIdO, StationNumberO, LaneNameO, DhmStringStartO, DhmStringEndO, IsImageO, IsImageIapiO,
        BillingId, CategoryId,
        PresetId, ObsPassId, ObsTickId, ObsMpId,
        IsConvenientContext, IsConvenientIapi, IsConvenientClass, IsPathQualified,
        IsConvenientContextO, IsConvenientIapiO,
        IsContextOnly, IsIapiOnly, IsPathOnly, IsSortieOnly,
        RowIdTrxLane,
        ProductNumber,
        IsLabel, IsCyclopeClassify, IsCyclopePath,
        OctalCode,
        IsPathQualifiable,
        IsLabeled,
        SerialNumber, LicensePlate,
        QualifControlId, QualifReasonId,
        IsCyclopeClassDiscId, IsCyclopePathDiscId);

}


function CertTrxLaneLeapStationDisplay(ActionBtnId, Icon, IsMargin) {

    var RegionId = GetElementValue('RegionId');
    var LSId = GetElementValue('LSId');
    var StationNumber = GetElementValue('StationNumberId');
    var DateStringStart = GetDateStringFromDatePicker('DateStartId');
    var DateStringEnd = GetDateStringFromDatePicker('DateEndId');
    var IsGap = ElementBooleanGet('IsGapId');

    CertAllReportsHide();
    ParamMessageReset();
    ShowReport('ParamReportId');

    if (DateStringStart != '' && DateStringEnd != '') {

        CertTrxLaneLeapStationGet(ActionBtnId, Icon, IsMargin, RegionId, LSId, StationNumber, DateStringStart, DateStringEnd, IsGap);
    }
    else {
        ParamMessageErrorDisplay('Les dates de début et de fin sont obligatoires');
    };
}

function CertTrxLaneLeapStationSearch(Id) {

    var ActionBtnId = new String('CertTrxLaneLeapStationSearchBtnId' + Id);
    $('#' + ActionBtnId).find('span').attr('class', 'fa fa-spinner fa-spin btn-icon-cl gc-c1-cl');
    var Icon = 'fas fa-eye btn-icon-cl gc-c1-cl';
    var IsMargin = false;

    var DateStringStart = new String(Id).substr(0, 8);
    var DateStringEnd = new String(Id).substr(0, 8);
    var RegionId = '0';
    var LSId = '0';
    var StationNumber = '0';
    var IsGap = false;

    CertTrxLaneLeapStationGet(ActionBtnId, Icon, IsMargin, RegionId, LSId, StationNumber, DateStringStart, DateStringEnd, IsGap);
}


function CertTrxLaneLeapStationGet(ActionBtnId, Icon, IsMargin, RegionId, LSId, StationNumber, DateStringStart, DateStringEnd, IsGap) {

    ActionSpin(ActionBtnId, IsMargin);

    var Pattern = 'CertTrxLaneLeapStation';
    var PatternTableId = Pattern + 'TableId';
    var PatternTableReportId = Pattern + 'TableReportId';

    $('#' + PatternTableId).DataTable().destroy();
    $('#' + PatternTableId).DataTable({
        "initComplete": function (settings, json) {
            ActionBtnSet(ActionBtnId, Icon, IsMargin);
            ShowReport(PatternTableReportId);
        },
        "ajax": {
            "url": "/Cert/CertTrxLaneLeapStationGet",
            "type": "GET",
            "datatype": "json",
            "data": {
                RegionId: RegionId,
                LSId: LSId,
                StationNumber: StationNumber,
                DateStringStart: DateStringStart,
                DateStringEnd: DateStringEnd,
                IsGap: IsGap
            }
        },
        "columns": [
            { "data": "" },//0
            { "data": "LSName" },//1
            { "data": "StationName" },//2

            { "data": "TotalTrxLane" },//3
            { "data": "TotalLeap" },//4
            { "data": "" },//5

            {
                "mData": function vehicle(data, type, dataToSet) {
                    return GetDigits(data.Day, 2) + GetDigits(data.Month, 2) + data.Year + data.RegionId + data.LSId + data.StationNumber;
                }
            },//6
            {
                "mData": function vehicle(data, type, dataToSet) {
                    return GetDigits(data.Day, 2) + GetDigits(data.Month, 2) + data.Year + data.RegionId + data.LSId + data.StationNumber;
                }
            },//7 Detail
        ],
        "columnDefs": [
            { "width": "3%", "className": "text-center", "targets": 0 },
            { "width": "3%", "className": "text-center", "targets": 1 },
            { "width": "3%", "className": "text-center", "targets": 2 },

            { "width": "3%", "className": "text-right", "targets": 3 },
            { "width": "3%", "className": "text-right", "targets": 4 },
            { "width": "3%", "className": "text-right", "targets": 5 },

            { "width": "3%", "className": "text-center", "targets": 6 },
            { "width": "3%", "className": "text-center", "targets": 7 },

            { "targets": 0, "render": function (data, type, row) { return DataTableDateValueFromRowGet(row); } },
            { "targets": 1, "render": function (data, type, row) { return row['LSId'] + '-' + row['LSName']; } },
            { "targets": 2, "render": function (data, type, row) { return data; } },

            { "targets": 3, "render": function (data, type, row) { return DataTableFormatIntNullAlertGet(data); } },
            { "targets": 4, "render": function (data, type, row) { return DataTableFormatIntNullAlertGet(data); } },
            { "targets": 5, "render": function (data, type, row) { return DataTablePercentageTwoThresholdsGet(row['TotalLeap'], row['TotalTrxLane'], 2, 2, 5); } },

            {
                "targets": 6, "render": function (data, type, row) {//Calculate TrxLaneLeap
                    var TaskId = '04';
                    var SourceId = '11';
                    var FileTypeId = 'H6';
                    var DateString = GetDigits(row['Day'], 2) + GetDigits(row['Month'], 2) + row['Year'];
                    var SiteId = '--';
                    var LSId = row['LSId'];
                    var BagContainerId = '--';
                    var StationNumber = row['StationNumber'];
                    var LaneName = '---';
                    var PdvId = '--';
                    var BillingId = '--';
                    var CategoryId = '--';
                    var ParamId = TaskId + SourceId + FileTypeId + DateString + SiteId + LSId + BagContainerId + StationNumber + LaneName + PdvId + BillingId + CategoryId;

                    var Pattern = 'CertTaskAdd';
                    var RowId = data + ParamId;
                    var argument = '\'' + RowId + '\', \'' + ParamId + '\'';
                    var text = '';
                    var BtnClass = 'dt-btn-cl gc-bc1-cl';
                    var SpanClass = 'fas fa-redo-alt btn-icon-cl gc-c1-cl';
                    var TextClass = 'dt-text-cl';
                    return DataTableButtonGet(Pattern, RowId, argument, text, BtnClass, SpanClass, TextClass);
                }
            },
            {
                "targets": 7, "render": function (data, type, row) {
                    return DataTableButtonGet('CertTrxLaneLeapSearch', data, '\'' + data + '\', \'CertTrxLaneLeapStation\'', '', 'dt-btn-cl gc-bc1-cl', 'fas fa-eye btn-icon-cl gc-c1-cl', '')
                }
            },
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
        "iDisplayLength": 10,
        "processing": false,
        "responsive": true,
        "bFilter": true,
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

            DataTableTotalIntGet(api, intVal, 3);
            DataTableTotalIntGet(api, intVal, 4);
            DataTableTotalPercentageGet(api, intVal, 4, 3, 5);
        }

    });
}

function CertTrxLaneLeapSearch(Id, TableSource) {
    var ActionBtnId = new String('CertTrxLaneLeapSearch' + 'BtnId' + Id);
    var Icon = 'fas fa-eye btn-icon-cl gc-c1-cl';
    var IsMargin = false;
    $('#' + ActionBtnId).find('span').attr('class', 'fa fa-spinner fa-spin btn-icon-cl gc-c1-cl');

    CertTrxLaneLeapGet(ActionBtnId, Icon, IsMargin, Id, TableSource);
}

function CertTrxLaneLeapGet(ActionBtnId, Icon, IsMargin, Id, TableSource) {

    ActionSpin(ActionBtnId, IsMargin);

    var Pattern = 'CertTrxLaneLeap';
    var PatternTableId = Pattern + 'TableId';
    var PatternTableReportId = Pattern + 'TableReportId';

    $('#' + PatternTableId).DataTable().destroy();
    $('#' + PatternTableId).DataTable({
        "initComplete": function (settings, json) {
            ActionBtnSet(ActionBtnId, Icon, IsMargin);
            ShowReport(PatternTableReportId);
        },
        "ajax": {
            "url": "/Cert/CertTrxLaneLeapGet",
            "type": "GET",
            "datatype": "json",
            "data": {
                Id: Id,
                TableSource: TableSource
            }
        },
        "columns": [
            { "data": "" },//0
            { "data": "LSName" },//1
            { "data": "StationName" },//2

            { "data": "LaneName" },//3
            { "data": "PostNumber" },//4
            { "data": "TrxNumber" },//5

            {
                "mData": function vehicle(data, type, dataToSet) {
                    return GetDigits(data.Day, 2) + GetDigits(data.Month, 2) + data.Year + data.RegionId + data.LSId + data.StationNumber + data.LaneName + data.PostNumber + data.TrxNumber;
                }
            },//6 Trx
        ],
        "columnDefs": [
            { "width": "3%", "className": "text-center", "targets": 0 },
            { "width": "3%", "className": "text-center", "targets": 1 },
            { "width": "3%", "className": "text-center", "targets": 2 },

            { "width": "3%", "className": "text-center", "targets": 3 },
            { "width": "3%", "className": "text-center", "targets": 4 },
            { "width": "3%", "className": "text-center", "targets": 5 },

            { "width": "3%", "className": "text-center", "targets": 6 },

            { "targets": 0, "render": function (data, type, row) { return DataTableDateValueFromRowGet(row); } },
            { "targets": 1, "render": function (data, type, row) { return row['LSId'] + '-' + row['LSName']; } },
            { "targets": 2, "render": function (data, type, row) { return data; } },            

            { "targets": 3, "render": function (data, type, row) { return data; } }, 
            { "targets": 4, "render": function (data, type, row) { return data; } }, 
            { "targets": 5, "render": function (data, type, row) { return data; } }, 

            {
                "targets": 6, "render": function (data, type, row) {
                    return DataTableButtonGet('CerSearch', data, '\'' + data + '\'', '', 'dt-btn-cl gc-bc1-cl', 'fas fa-eye btn-icon-cl gc-c1-cl', '')
                }
            },
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
        "iDisplayLength": 10,
        "processing": false,
        "responsive": true,
        "bFilter": true,
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

            //DataTableTotalIntGet(api, intVal, 3);
            //DataTableTotalIntGet(api, intVal, 7);
            //DataTableTotalIntGet(api, intVal, 9);
        }

    });
}

function CertTrxLaneLeapPathSearch(Id) {
    var ActionBtnId = new String('QualifPathSearch' + 'BtnId' + Id);
    var Icon = 'fas fa-eye btn-icon-cl gc-c1-cl';

    $('#' + ActionBtnId).find('span').attr('class', 'fa fa-spinner fa-spin btn-icon-cl gc-c1-cl');

    var DateStringStart = new String(Id).substr(0, 8);
    var DateStringEnd = new String(Id).substr(0, 8);

    var RegionId = new String(Id).substr(8, 2);
    var LSId = new String(Id).substr(10, 2);
    var StationNumber = new String(Id).substr(12, 2);
    var LaneName = new String(Id).substr(14, 3);
    var PostNumber = new String(Id).substr(17, 2);
    var TrxNumber = new String(Id).substr(19, new String(Id).length - 19);
    

    //hide some tables
    HideReport('QualifPathCarousel' + 'TableReportId');

    //Spin
    ActionBtnSpin(ActionBtnId);

    var Pattern = 'CertTrxLaneLeapPath';
    var PatternTableId = Pattern + 'TableId';
    var PatternTableReportId = Pattern + 'TableReportId';

    //Get
    HideReport(PatternTableReportId);
    $('#' + PatternTableId).DataTable().destroy();;
    $('#' + PatternTableId).DataTable({
        "initComplete": function (settings, json) {
            ActionBtnIconSet(ActionBtnId, Icon);
            ShowReport(PatternTableReportId);
        },
        "ajax": {
            "url": "/Qualif/CertTrxLaneLeapPathGet",
            "type": "GET",
            "datatype": "json",
            "data": {
                "DateStringStart": DateStringStart,
                "DateStringEnd": DateStringEnd,

                "RegionId": RegionId,
                "LSId": LSId,
                "StationNumber": StationNumber,
                "PostNumber": PostNumber,
                "LaneName": LaneName,
                "TrxNumber": TrxNumber
            }
        },
        "columns": [
            { "data": "NetworkId" }, //0
            { "data": "StationNumber" }, //1
            { "data": "LaneName" }, //2           
            { "data": "DhmValue" },//3            
            { "data": "LicensePlate" },//4            
            { "data": "ProductNumber" },//5
            { "data": "TrxNumber" },//6
            { "data": "TrxIndex" },//7            
            { "data": "CategoryName" },//8
            { "data": "BillingId" },//9
            { "data": "CashierNumber" },//10
            { "data": "OctalCode" },//11
            { "data": "LicensePlate" },//12
            { "data": "ImagePath" },//13
            { "data": "ImageIapiPath" },//14

            { "data": "NetworkIdO" },//15
            { "data": "StationNumberO" },//16
            { "data": "LaneNameO" },//17
            { "data": "DhmValueO" },//18                                      
            { "data": "ReadTickNumber" },//19
            { "data": "LicensePlateO" },//20
            { "data": "ImagePathO" },//21
            { "data": "ImageIapiPathO" },//22

            { "data": "SerialNumber" },//23
            { "data": "SoldBefore" },//24
            { "data": "SoldAfter" },//25

            { "data": "ObsTickId" },//26
            { "data": "ObsMpId" },//27
            { "data": "ObsPassId" },//28

            { "data": "Speed" },//29
            { "data": "Duration" },//30

            { "data": "CertTrxLaneInterfaceRowId" },//31 IsPathQualified
            { "data": "CertTrxLaneInterfaceRowId" },//32 Edit
            { "data": "CertTrxLaneInterfaceRowId" },//33 Export

            { "data": "CertTrxLaneInterfaceRowId" },//34
            { "data": "CertTrxLaneInterfaceRowId" },//35
            { "data": "CertTrxLaneInterfaceRowId" },//36
        ],
        "columnDefs": [
            { "width": "3%", "className": "text-center none", "targets": 0 },
            { "width": "3%", "className": "text-center " + NoneIsCyclopePathDiscId, "targets": 1 },
            { "width": "3%", "className": "text-center " + NoneIsCyclopePathDiscId, "targets": 2 },
            { "width": "3%", "className": "text-center " + NoneIsCyclopePathDiscId, "targets": 3 },
            { "width": "3%", "className": "text-center " + NoneObsTickIdD + ' ' + NoneObsTickIdP + ' ' + NoneIsCyclopePathDiscId, "targets": 4 },
            { "width": "3%", "className": "text-center none", "targets": 5 },
            { "width": "3%", "className": "text-center " + NoneObsTickIdD, "targets": 6 },
            { "width": "3%", "className": "text-center " + NoneObsTickIdP + ' ' + NoneObsTickIdD + ' ' + NoneIsCyclopePathDiscId, "targets": 7 },
            { "width": "3%", "className": "text-center " + NoneObsTickIdP + ' ' + NoneObsTickIdD + ' ' + NoneIsCyclopePathDiscId, "targets": 8 },
            { "width": "3%", "className": "text-center " + NoneIsCyclopePathDiscId, "targets": 9 },
            { "width": "3%", "className": "text-center " + NoneObsTickIdD, "targets": 10 },
            { "width": "3%", "className": "text-center " + NoneObsTickIdP + ' ' + NoneObsTickIdD + ' ' + NoneIsCyclopePathDiscId, "targets": 11 },
            { "width": "3%", "className": "text-center " + NoneIsCyclopePathDiscId, "targets": 12 },
            { "width": "3%", "className": "text-center", "targets": 13 },
            { "width": "3%", "className": "text-center", "targets": 14 },

            { "width": "3%", "className": "text-center none", "targets": 15 },
            { "width": "3%", "className": "text-center " + NoneIsCyclopePathDiscId, "targets": 16 },
            { "width": "3%", "className": "text-center " + NoneIsCyclopePathDiscId, "targets": 17 },
            { "width": "3%", "className": "text-center", "targets": 18 },
            { "width": "3%", "className": "text-center " + NoneObsTickIdP, "targets": 19 },
            { "width": "3%", "className": "text-center", "targets": 20 },
            { "width": "3%", "className": "text-center", "targets": 21 },
            { "width": "3%", "className": "text-center", "targets": 22 },

            { "width": "3%", "className": "text-center", "targets": 23 },
            { "width": "3%", "className": "text-right none", "targets": 24 },
            { "width": "3%", "className": "text-right none", "targets": 25 },

            { "width": "3%", "className": "text-center " + NoneObsTickIdD + ' ' + NoneObsTickIdP + ' ' + NoneIsCyclopePathDiscId, "targets": 26 },
            { "width": "3%", "className": "text-center " + NoneObsTickIdD + ' ' + NoneObsTickIdP + ' ' + NoneIsCyclopePathDiscId, "targets": 27 },
            { "width": "3%", "className": "text-center " + NoneObsTickIdD + ' ' + NoneObsTickIdP + ' ' + NoneIsCyclopePathDiscId, "targets": 28 },

            { "width": "3%", "className": "text-right " + NoneObsTickIdP, "targets": 29 },
            { "width": "3%", "className": "text-right " + NoneObsTickIdP, "targets": 30 },

            { "width": "3%", "className": "text-center " + NoneIsCyclopePathDiscId, "targets": 31 },

            { "width": "3%", "className": "text-center " + NoneIsCyclopePathDiscId, "targets": 32 },
            { "width": "3%", "className": "text-center " + NoneIsCyclopePathDiscId, "targets": 33 },

            { "width": "3%", "className": "text-center", "targets": 34 },
            { "width": "3%", "className": "text-center", "targets": 35 },
            { "width": "3%", "className": "text-center", "targets": 36 },

            { "targets": 0, "render": function (data, type, row) { return data; } },
            { "targets": 1, "render": function (data, type, row) { return data; } },
            { "targets": 2, "render": function (data, type, row) { return data; } },
            { "targets": 3, "render": function (data, type, row) { return GetDhmValueFromDataTableDate(data); } },
            { "targets": 4, "render": function (data, type, row) { return data; } },
            { "targets": 5, "render": function (data, type, row) { return data; } },
            { "targets": 6, "render": function (data, type, row) { return data; } },
            { "targets": 7, "render": function (data, type, row) { return data; } },
            { "targets": 8, "render": function (data, type, row) { return data; } },
            { "targets": 9, "render": function (data, type, row) { return data; } },
            { "targets": 10, "render": function (data, type, row) { return data; } },
            { "targets": 11, "render": function (data, type, row) { return data; } },
            { "targets": 12, "render": function (data, type, row) { return data; } },
            { "targets": 13, "render": function (data, type, row) { return QualifImageGet(data); } },
            { "targets": 14, "render": function (data, type, row) { return QualifImageGet(data); } },

            { "targets": 15, "render": function (data, type, row) { return data; } },
            { "targets": 16, "render": function (data, type, row) { return data; } },
            { "targets": 17, "render": function (data, type, row) { return data; } },
            { "targets": 18, "render": function (data, type, row) { return GetDhmValueNulFromDataTableDate(data); } },
            { "targets": 19, "render": function (data, type, row) { return data; } },
            { "targets": 20, "render": function (data, type, row) { return data; } },
            { "targets": 21, "render": function (data, type, row) { return QualifImageGet(data); } },
            { "targets": 22, "render": function (data, type, row) { return QualifImageGet(data); } },

            { "targets": 23, "render": function (data, type, row) { return data; } },
            { "targets": 24, "render": function (data, type, row) { return data; } },
            { "targets": 25, "render": function (data, type, row) { return data; } },

            { "targets": 26, "render": function (data, type, row) { return data; } },
            { "targets": 27, "render": function (data, type, row) { return QualifObsMpSoldGet(data); } },
            { "targets": 28, "render": function (data, type, row) { return data; } },

            {
                "targets": 29, "render": function (data, type, row) {
                    if (ObsTickId == 'D') {
                        return DataTableDiffIntFourThresholdsLowGet(row['Speed'], 10, 40, 60, 80)
                    }
                    else {
                        return data;
                    }
                }
            },
            { "targets": 30, "render": function (data, type, row) { return data; } },

            {
                "targets": 31, "render": function (data, type, row) {

                    if (ObsTickId == 'P') {
                        return DataTableCheckBoxGet(Pattern, data, row['IsPathQualifiedObsTickIdP'], '');
                    }
                    else {
                        if (ObsTickId == 'D') {
                            return DataTableCheckBoxGet(Pattern, data, row['IsPathQualifiedObsTickIdD'], '');
                        }
                        else {
                            return '';
                        }
                    }
                }
            },
            {
                "targets": 32, "render": function (data, type, row) {

                    var PatternForm = 'Edit';
                    var Icon = 'fas fa-edit';
                    var Label = '';
                    var RowId = data;

                    var OnClick = 'QualifPathFormLoad(\'' +
                        Pattern + '\',\'' +
                        PatternForm + '\', ' +
                        RowId + ',' +
                        '\'' + row['ImagePath'] + '\', ' +
                        '\'' + row['ImageIapiPath'] + '\', ' +
                        '\'' + row['ImagePathO'] + '\', ' +
                        '\'' + row['ImageIapiPathO'] + '\', ' +

                        '\'' + row['StationName'] + '\', ' +
                        '\'' + row['LaneName'] + '\', ' +
                        row['DhmValue'] + ', ' +

                        '\'' + row['MpName'] + '\', ' +
                        '\'' + row['CategoryName'] + '\', ' +

                        '\'' + row['ObsPassName'] + '\', ' +
                        '\'' + row['ObsMpName'] + '\', ' +
                        '\'' + row['ObsTickName'] + '\', ' +

                        '\'' + row['StationNameO'] + '\', ' +
                        '\'' + row['LaneNameO'] + '\', ' +
                        row['DhmValueO'] + ', ' +


                        '\'' + ObsTickId + '\', ' +
                        '\'' + row['SerialNumber'] + '\', ' +
                        '\'' + row['LicensePlate'] + '\'' +
                        ')';


                    return DataTableFormBtnIdGet(Pattern, PatternForm, RowId, Label, OnClick, Icon);
                }
            },
            {
                "targets": 33, "render": function (data, type, row) {
                    //alert(row['QualifControlIdP'] + '-' + row['QualifControlIdD']);
                    if (row['QualifControlIdP'] == '02' || row['QualifControlIdD'] == '06') {

                        var QualifControlTypeId = row['ObsTickId'];
                        var argument = row['CertTrxLaneInterfaceRowId'] + ', ' +
                            '\'' + QualifControlTypeId + '\', ' +
                            '\'' + row['ImagePath'] + '\', ' +
                            '\'' + row['ImageIapiPath'] + '\', ' +
                            '\'' + row['ImagePathO'] + '\', ' +
                            '\'' + row['ImageIapiPathO'] + '\'';
                        /*return DataTableButtonGet('QualifPathExport', data, argument, '', 'dt-btn-cl gc-bc1-cl', 'fas fa-file-pdf btn-icon-cl gc-c1-cl', '');*/
                        //var Btn1 = DataTableButtonGet('QualifPathExport', data, argument, '', 'dt-btn-cl gc-bc1-cl', 'fas fa-cog btn-icon-cl gc-c1-cl', '');


                        var argument1 = row['CertTrxLaneInterfaceRowId'] + ', ' + '\'' + row['TpdMinutePath'] + '\'';
                        var Btn2 = DataTableButtonGet('QualifTpdMinuteExport', row['TpdMinutePath'], argument1, '', 'dt-btn-cl gc-bc3-cl', 'fas fa-file-pdf btn-icon-cl gc-c1-cl', '');

                        //if (row['QualifControlIdD'] == '06') {
                        //    return Btn1 + Btn2;
                        //}
                        //else {
                        //    return Btn1;
                        //}

                        return Btn2;
                    }
                    else {
                        return '';
                    }
                }
            },

            { "targets": 34, "render": function (data, type, row) { return DataTableButtonGet('CertImageFromLaneUpload', data, '\'' + data + '\'', '', 'dt-btn-cl gc-bc1-cl', 'fas fa-upload btn-icon-cl gc-c1-cl', '') } },
            { "targets": 35, "render": function (data, type, row) { return DataTableButtonGet('CertImageFrom165Upload', data, '\'' + data + '\'', '', 'dt-btn-cl gc-bc1-cl', 'fas fa-upload btn-icon-cl gc-c1-cl', '') } },
            { "targets": 36, "render": function (data, type, row) { return DataTableButtonGet('CertImageFrom23Upload', data, '\'' + data + '\'', '', 'dt-btn-cl gc-bc1-cl', 'fas fa-upload btn-icon-cl gc-c1-cl', '') } },


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
        "iDisplayLength": 10,
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

            //Total1 = api.column(8).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);
            //$(api.column(8).footer()).html(numFormat(Total1));

            //IntTotal1 = api.column(8).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);
            //IntTotal2 = api.column(9).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);

            //$(api.column(7).footer()).html(numFormat(DoubleTotal1));

            //$(api.column(9).footer()).html(numShortFormat(IntTotal2));
        }
    });
}