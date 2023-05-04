function MaintConfigAllReportsHide() {
    HideReport('ParamReportId');

    HideTableReport('MaintFeatures');
    HideTableReport('CertFilePlan');


    HideTableReport('MaintEventEquipmentDay');
    HideTableReport('MaintEventEquipmentRegion');
    HideTableReport('MaintEventEquipmentAxleDay');
    HideTableReport('MaintEventEquipmentScopeDay');
    HideTableReport('MaintEventEquipmentScopeCumul');
    HideTableReport('MaintEventEquipmentStationCumul');
    HideTableReport('MaintEventEquipmentStationDay');
    HideTableReport('MaintEventEquipmentLaneCumul');
    HideTableReport('MaintEventEquipmentLaneDay');
    HideTableReport('MaintEventEquipmentCounterDay');
    HideTableReport('MaintEvent');
    HideTableReport('MaintPing');
    HideTableReport('MaintCamera');
    HideTableReport('MaintBreak');
    HideTableReport('MaintPath');
    HideTableReport('MaintTollPrice');

    HidePageReport('Page0_');
}

function MaintConfigAllParametersHide() {
    HideParent('AxleId');
    HideParent('RegionId');
    HideParent('LSId');
    HideParent('StationNumberId');
    HideParent('LaneNameId');
    HideParent('ObjectId');


    HideParent('ItemId');
    HideParent('ItemCategoryId');
    HideParent('ItemFeatureId');

    HideParent('IsNotConformId');
    HideParent('IsMandatoryId');
    HideParent('IsActiveId');
    HideParent('IsNotPingId');
    HideParent('IsNotActiveId');
    HideParent('IsChartId');

    HideParent('EquipmentNumberId');
    HideParent('EventCodeId');

    HideParent('DateStartId');
    HideParent('DateEndId');

    HideParent('QualifControlTypeId');
    HideParent('QualifControlId');
    HideParent('QualifReasonId');
    HideParent('SensId');

    HideParent('ShiftId');
    HideParent('ItemId');
    HideParent('SeverityId');
    HideParent('BreakId');
    HideParent('TimeId');
    HideParent('ZoneId');

    HideReport('ParamActionContainerId0');
    HideReport('ParamActionContainerId1');
    HideReport('ParamActionContainerId2');
    HideReport('ParamActionContainerId3');
    HideReport('ParamActionContainerId4');
}


function MaintHomeOpen() {
    MaintConfigAllReportsHide();
    MaintConfigAllParametersHide();
    MenuBarNavHighlight(0, 2, 1);

    //home
    ShowReport('Page0_' + 'PageReportId');

    //Fill
    HtmlDropDownListWithInputNameOnlyXorFill('ZoneId', 0, '/Param/ParamZonesGet', 'ZoneId', 'ZoneName', '20');
    HtmlDropDownListWithInputNameOnlyXorFill('TimeId', 0, '/Param/ParamTimesGet', 'TimeId', 'TimeName', '20');

    HtmlDropDownListNameOnlyWithInputFill('RegionId', '', '/Param/ParamRegionsSecGet', 'RegionId', 'RegionNameShort', 'CertRegions');
    HtmlDropDownListFill('EquipmentNumberId', '0', '/Param/ParamEquipmentsGet', 'EquipmentNumber', 'EquipmentName');
    HtmlDropDownListNameOnlyWithInputFill('ItemCategoryId', '0', '/Param/ParamItemCategoriesGet', 'ItemCategoryId', 'ItemCategoryName', '0');

    HtmlDropDownListFill('QualifControlTypeId', '0', '/Param/ParamGetObsTick', 'ObsTickId', 'ObsTickName');
    HtmlDropDownListNameOnlyWithInputFill('QualifControlId', '0', '/Qualif/QualifControlsGet', 'QualifControlId', 'QualifControlName', '');
    HtmlDropDownListNameOnlyWithInputFill('QualifReasonId', '0', '/Qualif/QualifReasonsGet', 'QualifReasonId', 'QualifReasonName', '');
    HtmlDropDownListNameOnlyXorFill('SensId', 'S', '/Param/GetSens', 'SensId', 'SensName');

    HtmlDropDownListNameOnlyFill('ShiftId', '0', '/Param/ParamShiftsGet', 'ShiftId', 'ShiftName');
    HtmlDropDownListNameOnlyFill('ItemId', '0', '/Param/ParamItemsGet', 'ItemId', 'ItemName');
    HtmlDropDownListNameOnlyFill('SeverityId', '0', '/Param/ParamSeveritiesGet', 'SeverityId', 'SeverityName');

    //OnChange
    ElementOnChangeSet('RegionId', 'ParamLSFromRegionSecGet()');
    ElementOnChangeSet('LSId', 'ParamStationsFromLSGet()');
    ElementOnChangeSet('StationNumberId', "ParamLanesFromStationLSGet()");
    ElementOnChangeSet('AxleId', 'ParamLSFromAxleSecGet()');
    ElementOnChangeSet('ItemId', 'ParamItemCategoriesGet()');

    ElementOnChangeSet('ItemCategoryId', "ParamItemFeaturesGet()");
    ElementOnChangeSet('EquipmentNumberId', "ParamEventGet()");
    ElementOnChangeSet('TimeId', 'MaintEventPresetGet()');
    ElementOnChangeSet('ZoneId', 'MaintEventPresetGet()');

    //Reset
    //ParamResetDropDownList('RegionId');
    ParamResetDropDownList('AxleId');
    ParamResetDropDownList('LSId');
    ParamResetDropDownList('StationNumberId');
    ParamResetDropDownList('LaneNameId');
    ParamResetDropDownList('ItemCategoryId');
    ParamResetDropDownList('ItemFeatureId');
    ParamResetDropDownList('EventCodeId');
    ParamResetDropDownList('BreakId');

    //ParamStationsAllSecGet('0', '0');
    //ParamBagContainerAllSecGet('0');
    //ParamLanesAllGet('0', '0');

    ParamResetDropDownList('LaneFeatureId');
    ParamResetDropDownList('CamFeatureId');
}


function MaintConfigHomeOpen() {
    MaintConfigAllReportsHide();
    MaintConfigAllParametersHide();
    MenuBarNavHighlight(0, 3, 2);

    //onchange
    ElementOnChangeSet('ItemId', "ParamItemCategoriesGet()");

}

function MaintFeaturesOpen() {
    //Reset
    MaintConfigAllReportsHide();
    MaintConfigAllParametersHide();
    MenuBarNavHighlight(0, 0, 2);

    //Params
    $('#ParamTitleId').text("Liste des caractéristiques");
    ShowReport('ParamReportId');
    ShowReport('RegionId' + 'Parent');
    ShowParent('AxleId');
    ShowReport('LSId' + 'Parent');
    ShowReport('StationNumberId' + 'Parent');
    ShowReport('LaneNameId' + 'Parent');

    ShowReport('ItemId' + 'Parent');
    ShowReport('ItemCategoryId' + 'Parent');
    ShowReport('ItemFeatureId' + 'Parent');

    ShowReport('IsNotConformId' + 'Parent');
    ShowReport('IsMandatoryId' + 'Parent');
    ShowReport('IsActiveId' + 'Parent');

    //Actions
    ParamActionBtnGet(0, 'Afficher', 'fas fa-eye', 'MaintFeaturesDisplay()');
    ParamActionBtnGet(2, 'Charger', 'fas fa-upload', "CertUpdate('MaintFeatures')");
}





function MaintFeaturesDisplay() {
    var ActionBtnId = 'ParamActionBtnId0';
    var Icon = 'fas fa-eye btn-icon-m-cl gc-c1-cl';

    var RegionId = GetElementValue('RegionId');
    var AxleId = GetElementValue('AxleId');
    var LSId = GetElementValue('LSId');
    var StationNumber = GetElementValue('StationNumberId');
    var LaneName = GetElementValue('LaneNameId');

    var ItemId = GetElementValue('ItemId');
    var ItemCategoryId = GetElementValue('ItemCategoryId');
    var ItemFeatureId = GetElementValue('ItemFeatureId');

    var IsNotConform = new Boolean($("#IsNotConformId").is(":checked"));
    var IsMandatory = new Boolean($("#IsMandatoryId").is(":checked"));
    var IsActive = new Boolean($("#IsActiveId").is(":checked"));

    HideReport('LaneFeatures' + 'TableReportId');

    MaintFeaturesGet(ActionBtnId, Icon, RegionId, AxleId, LSId, StationNumber, LaneName, ItemId, ItemCategoryId, ItemFeatureId, IsNotConform, IsMandatory, IsActive);
}

function MaintFeaturesGet(ActionBtnId, Icon, RegionId, AxleId, LSId, StationNumber, LaneName, ItemId, ItemCategoryId, ItemFeatureId, IsNotConform, IsMandatory, IsActive) {
    $('#' + ActionBtnId).find('span').attr('class', 'fa fa-spinner fa-spin btn-icon-m-cl gc-c1-cl');
    ParamMessageReset();

    var Pattern = 'MaintFeatures';
    var PatternTableId = Pattern + 'TableId';
    var PatternTableReportId = Pattern + 'TableReportId';

    HideReport(PatternTableReportId);

    $('#' + PatternTableId).DataTable().destroy();
    $('#' + PatternTableId).DataTable({
        "dom": 'Bfrtip',
        "buttons": [
            'excel'
        ],
        "initComplete": function (settings, json) {
            $('#' + ActionBtnId).find('span').attr('class', Icon);
            ShowReport(PatternTableReportId);
        },
        "ajax": {
            "url": "/Maint/MaintFeaturesGet",
            "type": "GET",
            "datatype": "json",
            "data": {
                RegionId: RegionId,
                AxleId: AxleId,
                LSId: LSId,
                StationNumber: StationNumber,
                LaneName: LaneName,

                ItemId: ItemId,
                ItemCategoryId: ItemCategoryId,
                ItemFeatureId: ItemFeatureId,

                IsNotConform: IsNotConform,
                IsMandatory: IsMandatory,
                IsActive: IsActive
            }
        },
        "columns": [
            { "data": "RegionNameShort" },//0
            { "data": "StationNumber" },//1
            { "data": "LaneName" },//2
            { "data": "IpAddress" },//3

            { "data": "ItemName" },//4
            { "data": "ItemCategoryName" },//5
            { "data": "ItemFeatureName" },//6

            { "data": "ItemFeatureValue" },//7
            { "data": "ItemFeatureTargetValue" },//8

            { "mData": function vehicle(data, type, dataToSet) { return data.LaneItemId + data.LaneFeatureId + data.IpAddress; } },//9 IsActive
            { "mData": function vehicle(data, type, dataToSet) { return data.LaneItemId + data.LaneFeatureId + data.IpAddress; } },//10 IsMandatory
            { "data": "IsNotConforme" },//11 IsConforme

            { "mData": function vehicle(data, type, dataToSet) { return data.LaneItemId + data.LaneFeatureId + data.IpAddress; } },//12
            { "data": "DhmModification" },//13
            { "mData": function vehicle(data, type, dataToSet) { return data.LaneItemId + data.LaneFeatureId + data.IpAddress; } },//14
        ],
        "columnDefs": [
            { "width": "3%", "className": "text-left", "targets": 0 },
            { "width": "3%", "className": "text-left", "targets": 1 },
            { "width": "3%", "className": "text-center", "targets": 2 },
            { "width": "3%", "className": "text-center", "targets": 3 },

            { "width": "3%", "className": "text-left", "targets": 4 },
            { "width": "3%", "className": "text-left", "targets": 5 },
            { "width": "3%", "className": "text-left", "targets": 6 },

            { "width": "3%", "className": "text-left", "targets": 7 },
            { "width": "3%", "className": "text-left", "targets": 8 },
            { "width": "3%", "className": "text-center", "targets": 9 },
            { "width": "3%", "className": "text-center", "targets": 10 },
            { "width": "3%", "className": "text-center", "targets": 11 },

            { "width": "3%", "className": "text-center", "targets": 12 },
            { "width": "3%", "className": "text-center", "targets": 13 },
            { "width": "3%", "className": "text-center", "targets": 14 },

            { "targets": 0, "render": function (data, type, row) { return DataTableStringGet(data, 20); } },
            { "targets": 1, "render": function (data, type, row) { return DataTableStringGet(data, 20); } },
            { "targets": 2, "render": function (data, type, row) { return DataTableStringGet(data, 20); } },
            { "targets": 3, "render": function (data, type, row) { return DataTableStringGet(data, 20); } },
            { "targets": 4, "render": function (data, type, row) { return DataTableStringGet(data, 20); } },
            { "targets": 5, "render": function (data, type, row) { return DataTableStringGet(data, 20); } },
            { "targets": 6, "render": function (data, type, row) { return DataTableStringGet(data, 20); } },
            //{
            //    "targets": 6, "render": function (data, type, row) {
            //        return new String(DataTableStringGet(data, 20)).replace('\\ADM_2008\\VOIE\\', '...');
            //    }
            //},

            { "targets": 7, "render": function (data, type, row) { return data; } },
            //{
            //    "targets": 7, "render": function (data, type, row) {
            //        return new String(data).replace('\\ADM_2008\\VOIE\\', '...');
            //    }
            //},
            { "targets": 8, "render": function (data, type, row) { return data; } },
            //{
            //    "targets": 8, "render": function (data, type, row) {
            //        return new String(data).replace('\\ADM_2008\\VOIE\\', '...');
            //    }
            //},

            { "targets": 9, "render": function (data, type, row) { return DataTableCheckBoxIsValidGet(Pattern, data, row['IsActive']); } },
            { "targets": 10, "render": function (data, type, row) { return DataTableCheckBoxIsValidGet(Pattern, data, row['IsMandatory']); } },
            { "targets": 11, "render": function (data, type, row) { return GetCtrYesOrNoFromDataTable(data); } },

            {
                "targets": 12, "render": function (data, type, row) {
                    var TaskId = '05';
                    var SourceId = '23';
                    var FileTypeId = 'X2';
                    var DateString = '--------';
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
                    var SpanClass = 'fas fa-cog btn-icon-cl gc-c1-cl';
                    var TextClass = 'dt-text-cl';
                    return DataTableButtonGet(Pattern, RowId, argument, text, BtnClass, SpanClass, TextClass);
                }
            },
            { "targets": 13, "render": function (data, type, row) { return GetDateValueFromDataTableDate(data) } },
            {
                "targets": 14, "render": function (data, type, row) {
                    var TaskId = '00';
                    var SourceId = '24';
                    var FileTypeId = 'G1';
                    var DateString = '--------';
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
        "ordering": true
        //"footerCallback": function (row, data, start, end, display) {
        //    var api = this.api(), data;
        //    var intVal = function (i) {
        //        return typeof i === 'string' ?
        //            i.replace(/[\$,]/g, '') * 1 :
        //            typeof i === 'number' ?
        //                i : 0;
        //    };

        //    MpReceiptOpeTotal = api.column(2).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);
        //    MpReceiptCeTotal = api.column(3).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);
        //    MpReceiptGapTotal = api.column(4).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);

        //    $(api.column(2).footer()).html(numFormat(MpReceiptOpeTotal));
        //    $(api.column(3).footer()).html(numFormat(MpReceiptCeTotal));

        //    if ((MpReceiptGapTotal.toFixed(2) !== '0.00') && (MpReceiptGapTotal.toFixed(2) !== '-0.00'))
        //        $(api.column(4).footer()).html('<span  class="badge badge-danger">' + MpReceiptGapTotal.toFixed(2) + '</span>');
        //    else $(api.column(4).footer()).html('<span  class="badge badge-success">0.00</span>');



        //    MpNumberOpeTotal = api.column(5).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);
        //    MpNumberCeTotal = api.column(6).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);
        //    MpNumberGapTotal = api.column(7).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);

        //    $(api.column(5).footer()).html(MpNumberOpeTotal);
        //    $(api.column(6).footer()).html(MpNumberCeTotal);

        //    if (MpNumberGapTotal !== 0)
        //        $(api.column(7).footer()).html('<span  class="badge badge-danger">' + MpNumberGapTotal + '</span>');
        //    else $(api.column(7).footer()).html('<span  class="badge badge-success">' + MpNumberGapTotal + '</span>');

        //}
    });
}


function MaintPingTest(Id, IpAddress) {

    var ActionBtnId = 'MaintPingTestBtnId' + Id;
    $('#' + ActionBtnId).find('span').attr('class', 'fa fa-spinner fa-spin btn-icon-cl gc-c1-cl');


    var obj = {};
    obj.IpAddress = IpAddress;
    $.ajax({
        url: "/Maint/MaintPingTest",
        method: "POST",
        data: JSON.stringify(obj),
        contentType: "application/json; charset=utf-8",
        dataType: "text",
        success: function (data) {
            if (data == 'True') {
                var Icon = 'fas fa-check btn-icon-cl gc-c1-cl';
                $('#' + ActionBtnId).find('span').attr('class', Icon);
            }
            else {
                var Icon = 'fas fa-minus-circle btn-icon-cl gc-c1-cl';
                $('#' + ActionBtnId).find('span').attr('class', Icon);
            }
        }
    });
}


function MaintEventSearch(Id) {
    var ActionBtnId = new String('MaintEventSearch' + 'BtnId' + Id);
    var Icon = 'fas fa-eye';
    var IsMargin = false;


    var DateStringStart = new String(Id).substr(0, 8);
    var DateStringEnd = new String(Id).substr(0, 8);
    var EquipmentNumber = new String(Id).substr(8, 2);
    var EventCode = new String(Id).substr(10, 3);
    var RegionId = new String(Id).substr(13, 2);
    var AxleId = '0';
    var LSId = new String(Id).substr(15, 2);
    var StationNumber = new String(Id).substr(17, 2);
    var LaneName = new String(Id).substr(19, 3);

    MaintEventGet(ActionBtnId, Icon, IsMargin, DateStringStart, DateStringEnd,
        EquipmentNumber, EventCode,
        RegionId, AxleId, LSId, StationNumber, LaneName);
}


function MaintEventGet(ActionBtnId, Icon, IsMargin, DateStringStart, DateStringEnd,
    EquipmentNumber, EventCode,
    RegionId, AxleId, LSId, StationNumber, LaneName) {

    ActionSpin(ActionBtnId, IsMargin);
    ParamMessageReset();

    var Pattern = 'MaintEvent';
    var PatternTableId = Pattern + 'TableId';
    var PatternTableReportId = Pattern + 'TableReportId';

    HideReport(PatternTableReportId);

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
            "url": "/Maint/MaintEventGet",
            "type": "GET",
            "datatype": "json",
            "data": {
                DateStringStart: DateStringStart,
                DateStringEnd: DateStringEnd,
                EquipmentNumber: EquipmentNumber,
                EventCode: EventCode,
                RegionId: RegionId,
                AxleId: AxleId,
                LSId: LSId,
                StationNumber: StationNumber,
                LaneName: LaneName
            }
        },
        "columns": [
            { "data": "RegionNameShort" },//0
            { "data": "StationNumber" },//1
            { "data": "LaneName" },//2
            { "data": "DhmValue" },//3

            { "data": "EquipmentName" },//4
            { "data": "EventName" },//5
            { "data": "ParamEventId" },//6
            { "data": "Details" },//7            
        ],
        "columnDefs": [
            { "width": "3%", "className": "text-center", "targets": 0 },
            { "width": "3%", "className": "text-left", "targets": 1 },
            { "width": "3%", "className": "text-center", "targets": 2 },
            { "width": "3%", "className": "text-center", "targets": 3 },

            { "width": "3%", "className": "text-left", "targets": 4 },
            { "width": "3%", "className": "text-left", "targets": 5 },
            { "width": "3%", "className": "text-center", "targets": 6 },
            { "width": "3%", "className": "text-left", "targets": 7 },

            { "targets": 0, "render": function (data, type, row) { return data; } },
            { "targets": 1, "render": function (data, type, row) { return data; } },
            { "targets": 2, "render": function (data, type, row) { return data; } },
            { "targets": 3, "render": function (data, type, row) { return DataTableDhmValueFromRowGet(row); } },

            { "targets": 4, "render": function (data, type, row) { return data; } },
            { "targets": 5, "render": function (data, type, row) { return data; } },
            { "targets": 6, "render": function (data, type, row) { return data; } },
            { "targets": 7, "render": function (data, type, row) { return data; } },
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
        "ordering": true
        //"footerCallback": function (row, data, start, end, display) {
        //    var api = this.api(), data;
        //    var intVal = function (i) {
        //        return typeof i === 'string' ?
        //            i.replace(/[\$,]/g, '') * 1 :
        //            typeof i === 'number' ?
        //                i : 0;
        //    };

        //    MpReceiptOpeTotal = api.column(2).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);
        //    MpReceiptCeTotal = api.column(3).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);
        //    MpReceiptGapTotal = api.column(4).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);

        //    $(api.column(2).footer()).html(numFormat(MpReceiptOpeTotal));
        //    $(api.column(3).footer()).html(numFormat(MpReceiptCeTotal));

        //    if ((MpReceiptGapTotal.toFixed(2) !== '0.00') && (MpReceiptGapTotal.toFixed(2) !== '-0.00'))
        //        $(api.column(4).footer()).html('<span  class="badge badge-danger">' + MpReceiptGapTotal.toFixed(2) + '</span>');
        //    else $(api.column(4).footer()).html('<span  class="badge badge-success">0.00</span>');



        //    MpNumberOpeTotal = api.column(5).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);
        //    MpNumberCeTotal = api.column(6).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);
        //    MpNumberGapTotal = api.column(7).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);

        //    $(api.column(5).footer()).html(MpNumberOpeTotal);
        //    $(api.column(6).footer()).html(MpNumberCeTotal);

        //    if (MpNumberGapTotal !== 0)
        //        $(api.column(7).footer()).html('<span  class="badge badge-danger">' + MpNumberGapTotal + '</span>');
        //    else $(api.column(7).footer()).html('<span  class="badge badge-success">' + MpNumberGapTotal + '</span>');

        //}
    });
}


//function MaintPingDisplay(ActionBtnId, Icon, SiteId, BagContainerId, StationNumber) {
//    $('#' + ActionBtnId).find('span').attr('class', 'fa fa-spinner fa-spin');
//    ParamMessageReset();

//    var Pattern = 'MaintPing';
//    var PatternTableId = Pattern + 'TableId';
//    var PatternTableReportId = Pattern + 'TableReportId';

//    HideReport(PatternTableReportId);

//    $('#' + PatternTableId).DataTable().destroy();
//    $('#' + PatternTableId).DataTable({
//        "initComplete": function (settings, json) {
//            $('#' + ActionBtnId).find('span').attr('class', Icon);
//            ShowReport(PatternTableReportId);
//        },
//        "ajax": {
//            "url": "/Maint/ParamCertLanesDisplay",
//            "type": "GET",
//            "datatype": "json",
//            "data": {
//                SiteId: SiteId,
//                BagContainerId: BagContainerId,
//                StationNumber: StationNumber
//            }
//        },
//        "columns": [
//            { "data": "SiteName" },//0
//            { "data": "StationName" },//1
//            { "data": "LaneName" },//2
//            { "data": "LaneTypeId" },//3
//            { "data": "IpAddress" },//4

//            { "data": "RowIdLane" },//5 IsCamContext
//            { "data": "RowIdLane" },//6 IsCamIapi
//        ],
//        "columnDefs": [
//            { "width": "3%", "className": "text-left", "targets": 0 },
//            { "width": "3%", "className": "text-left", "targets": 1 },
//            { "width": "3%", "className": "text-left", "targets": 2 },
//            { "width": "3%", "className": "text-center", "targets": 3 },
//            { "width": "3%", "className": "text-center", "targets": 4 },

//            { "width": "3%", "className": "text-center", "targets": 5 },
//            { "width": "3%", "className": "text-center", "targets": 6 },

//            { "targets": 5, "render": function (data, type, row) { return CertLaneIsCamContextGet(data, row['IsCamContext']); } },
//            { "targets": 6, "render": function (data, type, row) { return CertLaneIsCamIapiGet(data, row['IsCamIapi']); } },
//        ],
//        "iDisplayLength": 10,
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
//        "processing": false,
//        "responsive": true,
//        "bFilter": false,
//        "autoWidth": false,
//        "searching": false,
//        "lengthChange": true,
//        "showNEntries": true,
//        "bInfo": true,
//        "bPaginate": true,
//        "ordering": true
//        //"footerCallback": function (row, data, start, end, display) {
//        //    var api = this.api(), data;
//        //    var intVal = function (i) {
//        //        return typeof i === 'string' ?
//        //            i.replace(/[\$,]/g, '') * 1 :
//        //            typeof i === 'number' ?
//        //                i : 0;
//        //    };

//        //    MpReceiptOpeTotal = api.column(2).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);
//        //    MpReceiptCeTotal = api.column(3).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);
//        //    MpReceiptGapTotal = api.column(4).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);

//        //    $(api.column(2).footer()).html(numFormat(MpReceiptOpeTotal));
//        //    $(api.column(3).footer()).html(numFormat(MpReceiptCeTotal));

//        //    if ((MpReceiptGapTotal.toFixed(2) !== '0.00') && (MpReceiptGapTotal.toFixed(2) !== '-0.00'))
//        //        $(api.column(4).footer()).html('<span  class="badge badge-danger">' + MpReceiptGapTotal.toFixed(2) + '</span>');
//        //    else $(api.column(4).footer()).html('<span  class="badge badge-success">0.00</span>');



//        //    MpNumberOpeTotal = api.column(5).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);
//        //    MpNumberCeTotal = api.column(6).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);
//        //    MpNumberGapTotal = api.column(7).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);

//        //    $(api.column(5).footer()).html(MpNumberOpeTotal);
//        //    $(api.column(6).footer()).html(MpNumberCeTotal);

//        //    if (MpNumberGapTotal !== 0)
//        //        $(api.column(7).footer()).html('<span  class="badge badge-danger">' + MpNumberGapTotal + '</span>');
//        //    else $(api.column(7).footer()).html('<span  class="badge badge-success">' + MpNumberGapTotal + '</span>');

//        //}
//    });
//}



//function CertLaneIsTestSwitch(LaneId) {
//    var obj = {};
//    obj.LaneId = LaneId;

//    $.ajax({
//        url: "/Cert/CertLaneIsTestSwitch",
//        method: "POST",
//        data: JSON.stringify(obj),
//        contentType: "application/json; charset=utf-8",
//        dataType: "json",
//        success: function (data) {

//        },
//        error: function (request, status, error) {
//            alert('Error!');
//        }
//    });
//}


function MaintDiHomeOpen() {
    MaintConfigAllReportsHide();
    MaintConfigAllParametersHide();
    MenuBarNavHighlight(2, 3, 2);

    ElementOnChangeSet('StationNumberId', "ParamLanesAllFromStationLSSensGet()");
    ElementOnChangeSet('SensId', "ParamLanesAllFromStationLSSensGet()");
}


function MaintPingOpen() {
    //Reset
    MaintConfigAllReportsHide();
    MaintConfigAllParametersHide();
    MenuBarNavHighlight(2, 0, 2);

    //Params
    $('#ParamTitleId').text("Demandes d'intervention - Communication");
    ShowReport('ParamReportId');
    ShowReport('RegionId' + 'Parent');
    ShowParent('AxleId');
    ShowReport('LSId' + 'Parent');
    ShowReport('StationNumberId' + 'Parent');
    ShowReport('LaneNameId' + 'Parent');
    ShowReport('IsNotActiveId' + 'Parent');
    ShowReport('IsNotPingId' + 'Parent');

    ElementOnChangeSet('StationNumberId', "ParamLanesFromStationLSGet()");
    ElementOnChangeSet('LaneNameId', "ParamLanesFromStationLSGet()");

    //Actions
    ParamActionBtnGet(0, 'Afficher', 'fas fa-eye', 'MaintPingDisplay()');
    ParamActionBtnGet(2, 'Actualiser', 'fas fa-redo-alt', "CertUpdate('MaintPing')");
    //MaintEventCountersDisplay();
}

function MaintPingDisplay() {
    var ActionBtnId = 'ParamActionBtnId0';
    var Icon = 'fas fa-eye btn-icon-m-cl gc-c1-cl';

    var RegionId = GetElementValue('RegionId');
    var AxleId = GetElementValue('AxleId');
    var LSId = GetElementValue('LSId');
    var StationNumber = GetElementValue('StationNumberId');
    var LaneName = GetElementValue('LaneNameId');
    var IsMargin = true;
    var IsNotActive = ElementBooleanGet('IsNotActiveId');
    var IsNotPing = ElementBooleanGet('IsNotPingId');

    MaintPingGet(ActionBtnId, Icon, IsMargin, RegionId, AxleId, LSId, StationNumber, LaneName, IsNotActive, IsNotPing);
}

function MaintPingGet(ActionBtnId, Icon, IsMargin, RegionId, AxleId, LSId, StationNumber, LaneName, IsNotActive, IsNotPing) {

    ActionSpin(ActionBtnId, IsMargin);
    ParamMessageReset();

    var Pattern = 'MaintPing';
    var PatternTableId = Pattern + 'TableId';
    var PatternTableReportId = Pattern + 'TableReportId';

    HideReport(PatternTableReportId);

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
            "url": "/Maint/MaintPingGet",
            "type": "GET",
            "datatype": "json",
            "data": {
                RegionId: RegionId,
                AxleId: AxleId,
                LSId: LSId,
                StationNumber: StationNumber,
                LaneName: LaneName,
                IsNotActive: IsNotActive,
                IsNotPing: IsNotPing
            }
        },
        "columns": [
            { "data": "RegionNameShort" },//0
            { "data": "StationNumber" },//1
            { "data": "LaneName" },//2
            { "data": "LaneTypeName" },//3

            { "data": "IpAddress" },//4
            { "data": "IsActive" },//5
            { "data": "IsPing" },//6
            { "data": "PingComment" },//7

            { "data": "LaneId" },//8
        ],
        "columnDefs": [
            { "width": "3%", "className": "text-center", "targets": 0 },
            { "width": "3%", "className": "text-left", "targets": 1 },
            { "width": "3%", "className": "text-center", "targets": 2 },
            { "width": "3%", "className": "text-center", "targets": 3 },

            { "width": "3%", "className": "text-center", "targets": 4 },
            { "width": "3%", "className": "text-center", "targets": 5 },
            { "width": "3%", "className": "text-center", "targets": 6 },
            { "width": "3%", "className": "text-left", "targets": 7 },

            { "width": "3%", "className": "text-center", "targets": 8 },

            { "targets": 0, "render": function (data, type, row) { return data; } },
            { "targets": 1, "render": function (data, type, row) { return data; } },
            { "targets": 2, "render": function (data, type, row) { return data; } },
            { "targets": 3, "render": function (data, type, row) { return data; } },

            { "targets": 4, "render": function (data, type, row) { return data; } },
            { "targets": 5, "render": function (data, type, row) { return MaintIsActiveGet(row['LaneId'], row['IsActive']); } },
            { "targets": 6, "render": function (data, type, row) { return DataTableBooleanFalseAlertGet(data); } },
            { "targets": 7, "render": function (data, type, row) { return data; } },

            {
                "targets": 8, "render": function (data, type, row) {
                    return DataTableButtonGet('MaintPingTest', data, '\'' + data + '\', \'' + row['IpAddress'] + '\'', '', 'dt-btn-cl gc-bc1-cl', 'fas fa-redo-alt btn-icon-cl gc-c1-cl', '')
                }
            },
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
        "ordering": true
        //"footerCallback": function (row, data, start, end, display) {
        //    var api = this.api(), data;
        //    var intVal = function (i) {
        //        return typeof i === 'string' ?
        //            i.replace(/[\$,]/g, '') * 1 :
        //            typeof i === 'number' ?
        //                i : 0;
        //    };

        //    MpReceiptOpeTotal = api.column(2).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);
        //    MpReceiptCeTotal = api.column(3).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);
        //    MpReceiptGapTotal = api.column(4).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);

        //    $(api.column(2).footer()).html(numFormat(MpReceiptOpeTotal));
        //    $(api.column(3).footer()).html(numFormat(MpReceiptCeTotal));

        //    if ((MpReceiptGapTotal.toFixed(2) !== '0.00') && (MpReceiptGapTotal.toFixed(2) !== '-0.00'))
        //        $(api.column(4).footer()).html('<span  class="badge badge-danger">' + MpReceiptGapTotal.toFixed(2) + '</span>');
        //    else $(api.column(4).footer()).html('<span  class="badge badge-success">0.00</span>');



        //    MpNumberOpeTotal = api.column(5).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);
        //    MpNumberCeTotal = api.column(6).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);
        //    MpNumberGapTotal = api.column(7).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);

        //    $(api.column(5).footer()).html(MpNumberOpeTotal);
        //    $(api.column(6).footer()).html(MpNumberCeTotal);

        //    if (MpNumberGapTotal !== 0)
        //        $(api.column(7).footer()).html('<span  class="badge badge-danger">' + MpNumberGapTotal + '</span>');
        //    else $(api.column(7).footer()).html('<span  class="badge badge-success">' + MpNumberGapTotal + '</span>');

        //}
    });
}


function MaintIsActiveGet(LaneId, IsActive) {
    var Id = LaneId;
    var onchange = 'MaintIsActiveSwitch(' + LaneId + ')';
    var Pattern = 'MaintIsActiveSwitch';
    var data = IsActive;
    return DataTableCheckBoxGet(Pattern, Id, data, onchange);
}


function MaintIsActiveSwitch(LaneId) {
    var obj = {};
    obj.LaneId = LaneId;

    $.ajax({
        url: "/Maint/MaintIsActiveSwitch",
        method: "POST",
        data: JSON.stringify(obj),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {

        },
        error: function (request, status, error) {
            alert('Error!');
        }
    });
}


function MaintCameraOpen() {
    //Reset
    MaintConfigAllReportsHide();
    MaintConfigAllParametersHide();
    MenuBarNavHighlight(2, 1, 2);

    //Params
    $('#ParamTitleId').text("Demandes d'intervention - Caméras");
    ShowReport('ParamReportId');
    ShowParent('RegionId');
    ShowParent('AxleId');
    ShowParent('LSId');
    ShowParent('StationNumberId');
    ShowParent('LaneNameId');
    ShowReport('DateStartId' + 'Parent');
    ShowReport('DateEndId' + 'Parent');

    ShowParent('QualifControlTypeId');
    ShowParent('QualifControlId');
    ShowParent('QualifReasonId');
    ShowParent('SensId');

    DateValueDefaultSet('DateStartId', 1);
    DateValueDefaultSet('DateEndId', 1);

    //Actions
    ParamActionBtnGet(0, 'Afficher', 'fas fa-eye', 'MaintCameraDisplay()');
    //ParamActionBtnGet(2, 'Actualiser', 'fas fa-redo-alt', "CertUpdate('MaintPing')");
    //MaintEventCountersDisplay();
}


function MaintCameraDisplay() {
    var ActionBtnId = 'ParamActionBtnId0';
    var Icon = 'fas fa-eye btn-icon-m-cl gc-c1-cl';

    var RegionId = GetElementValue('RegionId');
    var AxleId = GetElementValue('AxleId');
    var LSId = GetElementValue('LSId');
    var StationNumber = GetElementValue('StationNumberId');
    var LaneName = GetElementValue('LaneNameId');
    var Sens = GetElementValue('SensId');
    var IsMargin = true;

    var DateStringStart = GetDateStringFromDatePicker('DateStartId');
    var DateStringEnd = GetDateStringFromDatePicker('DateEndId');

    var QualifControlTypeId = GetElementDropDownListValue('QualifControlTypeId');
    var QualifControlId = GetElementDropDownListValue('QualifControlId');
    var QualifReasonId = GetElementDropDownListValue('QualifReasonId');

    if (DateStringStart != '' && DateStringEnd != '') {
        MaintCameraGet(ActionBtnId, Icon, IsMargin,
            RegionId, AxleId, LSId, StationNumber, Sens, LaneName, DateStringStart, DateStringEnd,
            QualifControlTypeId, QualifControlId, QualifReasonId);
    }
    else {
        ParamMessageErrorDisplay('Les dates de début et de fin sont obligatoires');
    };
}


function MaintCameraGet(ActionBtnId, Icon, IsMargin,
    RegionId, AxleId, LSId, StationNumber, Sens, LaneName, DateStringStart, DateStringEnd,
    QualifControlTypeId, QualifControlId, QualifReasonId) {

    //Spin
    ActionSpin(ActionBtnId, IsMargin);

    //Set datatable patterns
    var Pattern = 'MaintCamera';
    var PatternTableId = Pattern + 'TableId';
    var PatternTableReportId = Pattern + 'TableReportId';

    //Get
    HideReport(PatternTableReportId);
    $('#' + PatternTableId).DataTable().destroy();;
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
            "url": "/Maint/MaintCameraGet",
            "type": "GET",
            "datatype": "json",
            "data": {
                "RegionId": RegionId,
                "AxleId": AxleId,
                "LSId": LSId,
                "StationNumber": StationNumber,
                "Sens": Sens,
                "LaneName": LaneName,
                "DateStringStart": DateStringStart,
                "DateStringEnd": DateStringEnd,
                "QualifControlTypeId": QualifControlTypeId,
                "QualifControlId": QualifControlId,
                "QualifReasonId": QualifReasonId,
            }
        },
        "columns": [
            { "data": "DhmValue" }, //0
            { "data": "RegionNameShort" }, //1
            { "data": "StationNumber" }, //2
            { "data": "LaneName" }, //3

            { "data": "ObsTickName" },//4
            { "data": "QualifControlName" },//5
            { "data": "QualifReasonName" },//6
            { "data": "Comment" },//7

            { "data": "CreatedBy" },//8
            { "data": "SentTo" },//9
        ],
        "columnDefs": [
            { "width": "3%", "className": "text-center", "targets": 0 },
            { "width": "3%", "className": "text-center", "targets": 1 },
            { "width": "3%", "className": "text-center", "targets": 2 },
            { "width": "3%", "className": "text-center", "targets": 3 },

            { "width": "3%", "className": "text-left", "targets": 4 },
            { "width": "3%", "className": "text-left", "targets": 5 },
            { "width": "3%", "className": "text-left", "targets": 6 },
            { "width": "3%", "className": "text-left", "targets": 7 },

            { "width": "3%", "className": "text-left", "targets": 8 },
            { "width": "3%", "className": "text-left", "targets": 9 },

            { "targets": 0, "render": function (data, type, row) { return GetDhmValueFromDataTableDate(data); } },
            { "targets": 1, "render": function (data, type, row) { return data; } },
            { "targets": 2, "render": function (data, type, row) { return data; } },
            { "targets": 3, "render": function (data, type, row) { return data; } },

            { "targets": 4, "render": function (data, type, row) { return data; } },
            { "targets": 5, "render": function (data, type, row) { return data; } },
            { "targets": 6, "render": function (data, type, row) { return data; } },
            { "targets": 7, "render": function (data, type, row) { return DataTableStringGet(data, 40); } },

            { "targets": 8, "render": function (data, type, row) { return data; } },
            { "targets": 9, "render": function (data, type, row) { return data; } },
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
        }
    });
}

function MaintBreakOpen() {
    //Reset
    MaintConfigAllReportsHide();
    MaintConfigAllParametersHide();
    MenuBarNavHighlight(2, 2, 2);

    //Params
    $('#ParamTitleId').text("Demandes d'intervention - Pannes");
    ShowReport('ParamReportId');

    ShowParent('RegionId');
    ShowParent('AxleId');
    ShowParent('LSId');
    ShowParent('StationNumberId');
    ShowParent('LaneNameId');
    ShowParent('DateStartId');
    ShowParent('DateEndId');

    ShowParent('ShiftId');
    ShowParent('ItemId');
    ShowParent('SeverityId');
    ShowParent('BreakId');

    DateValueDefaultSet('DateStartId', 0);
    DateValueDefaultSet('DateEndId', 0);

    //onchange
    ElementOnChangeSet('ItemId', 'ParamBreaksGet()');

    //Actions
    ParamActionBtnGet(0, 'Afficher', 'fas fa-eye', 'MaintBreakDisplay()');

    MaintBreakDisplay();
}


function MaintBreakDisplay() {
    var ActionBtnId = 'ParamActionBtnId0';
    var Icon = 'fas fa-eye btn-icon-m-cl gc-c1-cl';

    var RegionId = ElementDropDownListValueGet('RegionId');
    var AxleId = ElementDropDownListValueGet('AxleId');
    var LSId = ElementDropDownListValueGet('LSId');
    var StationNumber = ElementDropDownListValueGet('StationNumberId');
    var LaneName = ElementDropDownListValueGet('LaneNameId');

    var ShiftId = ElementDropDownListValueGet('ShiftId');
    var ItemId = ElementDropDownListValueGet('ItemId');
    var SeverityId = ElementDropDownListValueGet('SeverityId');
    var BreakId = ElementDropDownListValueGet('BreakId');

    var DateStringStart = GetDateStringFromDatePicker('DateStartId');
    var DateStringEnd = GetDateStringFromDatePicker('DateEndId');

    if (DateStringStart != '' && DateStringEnd != '') {
        MaintBreakGet(ActionBtnId, Icon, RegionId, AxleId, LSId, ShiftId, DateStringStart, DateStringEnd, StationNumber, LaneName, ItemId, SeverityId, BreakId);
    }
    else {
        ParamMessageErrorDisplay('Les dates de début et de fin sont obligatoires');
    };
}


function MaintBreakGet(ActionBtnId, Icon, RegionId, AxleId, LSId, ShiftId, DateStringStart, DateStringEnd, StationNumber, LaneName, ItemId, SeverityId, BreakId) {
    //Spin
    ActionBtnMarginSpin(ActionBtnId);

    var Pattern = 'MaintBreak';
    var PatternTable = Pattern + 'TableId';
    var PatternTableReportId = Pattern + 'TableReportId';

    $('#' + PatternTable).DataTable().destroy();;
    $('#' + PatternTable).DataTable({
        "dom": 'Bfrtip',
        "buttons": [
            'excel'
        ],
        "initComplete": function (settings, json) {
            ShowReport(PatternTableReportId);
            $('#' + ActionBtnId).find('span').attr('class', Icon);
        },
        "ajax": {
            "url": "/Maint/MaintBreakGet",
            "type": "GET",
            "datatype": "json",
            "data": {
                RegionId: RegionId,
                AxleId: AxleId,
                LSId: LSId,
                ShiftId: ShiftId,
                DateStringStart: DateStringStart,
                DateStringEnd: DateStringEnd,

                StationNumber: StationNumber,
                LaneName: LaneName,
                ItemId: ItemId,
                SeverityId: SeverityId,
                BreakId: BreakId
            }
        },
        "columns": [
            { "data": "DhmValue" },//0
            { "data": "RegionNameShort" },//1
            { "data": "LSName" },//2
            { "data": "StationName" },//3
            { "data": "ShiftName" },//4

            { "data": "StationName" },//5
            { "data": "ItemName" },//6
            { "data": "SeverityName" },//7
            { "data": "BreakName" },//8
            { "data": "BreakDescription" },//9
            { "data": "FullName" },//10

            { "data": "SpcAffBreakId" },//11 Edit

            { "data": "BreakDescription" },//12
        ],
        "columnDefs": [
            { "width": "3%", "className": "text-center", "targets": 0 },
            { "width": "3%", "className": "text-left", "targets": 1 },
            { "width": "3%", "className": "text-left", "targets": 2 },
            { "width": "3%", "className": "text-left", "targets": 3 },
            { "width": "3%", "className": "text-center", "targets": 4 },

            { "width": "3%", "className": "text-center none", "targets": 5 },
            { "width": "3%", "className": "text-left", "targets": 6 },
            { "width": "3%", "className": "text-left", "targets": 7 },
            { "width": "3%", "className": "text-left", "targets": 8 },
            { "width": "3%", "className": "text-left", "targets": 9 },
            { "width": "3%", "className": "text-left", "targets": 10 },

            { "width": "3%", "className": "text-center", "targets": 11 },

            { "width": "3%", "className": "text-left none", "targets": 12 },

            { "targets": 0, "render": function (data, type, row) { return DataTableDateValueFromRowGet(row); } },
            { "targets": 1, "render": function (data, type, row) { return data; } },
            { "targets": 2, "render": function (data, type, row) { return data; } },
            { "targets": 3, "render": function (data, type, row) { return data; } },
            { "targets": 4, "render": function (data, type, row) { return data; } },

            { "targets": 5, "render": function (data, type, row) { return data; } },
            { "targets": 6, "render": function (data, type, row) { return data; } },
            { "targets": 7, "render": function (data, type, row) { return data; } },
            { "targets": 8, "render": function (data, type, row) { return data; } },
            { "targets": 9, "render": function (data, type, row) { return DataTableStringGet(data, 50); } },
            { "targets": 10, "render": function (data, type, row) { return data; } },

            { "targets": 11, "render": function (data, type, row) { return DataTableModalFormBtnEditGet(Pattern, data); } },

            { "targets": 12, "render": function (data, type, row) { return data; } },
        ],
        "iDisplayLength": 10,
        "language": {
            "lengthMenu": "Afficher _MENU_ lignes par page",
            "zeroRecords": "Veuillez patienter...",
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
        "autoWidth": true,
        "searching": false,
        "lengthChange": true,
        "showNEntries": true,
        "bInfo": true,
        "bPaginate": true,
        "ordering": false
    });

    //Connection
    NotiConnectionIdUpdate('DI-Pannes');
}


function MaintPathOpen() {
    //Reset
    MaintConfigAllReportsHide();
    MaintConfigAllParametersHide();
    MenuBarNavHighlight(0, 1, 2);

    //Params
    ParamTitleSet('Configuration - Trajets OPE');
    ShowReport('ParamReportId');

    ShowParent('RegionId');
    ShowParent('AxleId');
    ShowParent('LSId');
    ShowParent('StationNumberId');

    //Actions
    ParamActionBtnGet(0, 'Afficher', 'fas fa-eye', 'MaintPathDisplay()');
    ParamActionBtnGet(2, 'Actualiser', 'fas fa-redo-alt', "CertUpdate('MaintPath')");

    MaintPathDisplay();
}


function MaintPathDisplay() {
    var ActionBtnId = 'ParamActionBtnId0';
    var Icon = 'fas fa-eye btn-icon-m-cl gc-c1-cl';
    var IsMargin = true;

    var RegionId = GetElementValue('RegionId');
    var AxleId = GetElementValue('AxleId');
    var LSId = GetElementValue('LSId');
    var StationNumber = GetElementValue('StationNumberId');

    MaintPathGet(ActionBtnId, Icon, IsMargin, RegionId, AxleId, LSId, StationNumber);
}


function MaintPathGet(ActionBtnId, Icon, IsMargin, RegionId, AxleId, LSId, StationNumber) {

    ActionSpin(ActionBtnId, IsMargin);
    ParamMessageReset();

    var Pattern = 'MaintPath';
    var PatternTableId = Pattern + 'TableId';
    var PatternTableReportId = Pattern + 'TableReportId';

    HideReport(PatternTableReportId);

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
            "url": "/Maint/MaintPathGet",
            "type": "GET",
            "datatype": "json",
            "data": {
                RegionId: RegionId,
                AxleId: AxleId,
                LSId: LSId,
                StationNumber: StationNumber
            }
        },
        "columns": [
            { "data": "RegionNameShort" },//0
            { "data": "StationNameD" },//1
            { "data": "StationNameO" },//2

            { "data": "DistanceOpe" },//3
            { "data": "DhmValueMin" },//4
            { "data": "DhmValueMax" },//5

            { "data": "SpeedMin" },//6
            { "data": "SpeedMax" },//7

            { "data": "SpeedMin" },//8
            { "data": "SpeedMax" },//9

            { "data": "DhmModification" },//10
            { "data": "OdId" },//11
        ],
        "columnDefs": [
            { "width": "3%", "className": "text-center", "targets": 0 },
            { "width": "3%", "className": "text-left", "targets": 1 },
            { "width": "3%", "className": "text-left", "targets": 2 },

            { "width": "3%", "className": "text-right", "targets": 3 },
            { "width": "3%", "className": "text-center", "targets": 4 },
            { "width": "3%", "className": "text-center", "targets": 5 },

            { "width": "3%", "className": "text-right", "targets": 6 },
            { "width": "3%", "className": "text-right", "targets": 7 },

            { "width": "3%", "className": "text-right", "targets": 8 },
            { "width": "3%", "className": "text-right", "targets": 9 },

            { "width": "3%", "className": "text-center", "targets": 10 },
            { "width": "3%", "className": "text-center", "targets": 11 },

            { "targets": 0, "render": function (data, type, row) { return data; } },
            { "targets": 1, "render": function (data, type, row) { return data; } },
            { "targets": 2, "render": function (data, type, row) { return data; } },

            { "targets": 3, "render": function (data, type, row) { return data + ' Km'; } },
            { "targets": 4, "render": function (data, type, row) { return GetDigits(row['HourMin'], 2) + ':' + GetDigits(row['MinuteMin'], 2); } },
            { "targets": 5, "render": function (data, type, row) { return GetDigits(row['HourMax'], 2) + ':' + GetDigits(row['MinuteMax'], 2); } },

            { "targets": 6, "render": function (data, type, row) { return data + ' Km/h'; } },
            { "targets": 7, "render": function (data, type, row) { return data + ' Km/h'; } },

            { "targets": 8, "render": function (data, type, row) { return DataTableDiffIntGet(data, 30); } },
            { "targets": 9, "render": function (data, type, row) { return DataTableDiffIntGet(data, 126); } },

            { "targets": 10, "render": function (data, type, row) { return GetDhmValueFromDataTableDate(data); } },
            {
                "targets": 11, "render": function (data, type, row) {
                    var TaskId = '00';
                    var SourceId = '08';
                    var FileTypeId = '89';
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
        "ordering": true
        //"footerCallback": function (row, data, start, end, display) {
        //    var api = this.api(), data;
        //    var intVal = function (i) {
        //        return typeof i === 'string' ?
        //            i.replace(/[\$,]/g, '') * 1 :
        //            typeof i === 'number' ?
        //                i : 0;
        //    };

        //    MpReceiptOpeTotal = api.column(2).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);
        //    MpReceiptCeTotal = api.column(3).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);
        //    MpReceiptGapTotal = api.column(4).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);

        //    $(api.column(2).footer()).html(numFormat(MpReceiptOpeTotal));
        //    $(api.column(3).footer()).html(numFormat(MpReceiptCeTotal));

        //    if ((MpReceiptGapTotal.toFixed(2) !== '0.00') && (MpReceiptGapTotal.toFixed(2) !== '-0.00'))
        //        $(api.column(4).footer()).html('<span  class="badge badge-danger">' + MpReceiptGapTotal.toFixed(2) + '</span>');
        //    else $(api.column(4).footer()).html('<span  class="badge badge-success">0.00</span>');



        //    MpNumberOpeTotal = api.column(5).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);
        //    MpNumberCeTotal = api.column(6).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);
        //    MpNumberGapTotal = api.column(7).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);

        //    $(api.column(5).footer()).html(MpNumberOpeTotal);
        //    $(api.column(6).footer()).html(MpNumberCeTotal);

        //    if (MpNumberGapTotal !== 0)
        //        $(api.column(7).footer()).html('<span  class="badge badge-danger">' + MpNumberGapTotal + '</span>');
        //    else $(api.column(7).footer()).html('<span  class="badge badge-success">' + MpNumberGapTotal + '</span>');

        //}
    });
}

function MainEventAllDisplay() {
    //Define
    var ActionBtnId = 'ParamActionBtnId0';
    var Icon = 'fas fa-eye btn-icon-m-cl gc-c1-cl';
    var TimeId = GetElementValue('TimeId');
    var EquipmentNumber = GetElementValue('EquipmentNumberId');
    var IsMargin = new Boolean(true);

    //Display
    if (TimeId == '01') {//Day
        MaintEventDayDisplay(ActionBtnId, Icon, IsMargin);
    }
    else {
        if (TimeId == '09') {//Region
            DiscRegionDisplay(ActionBtnId, Icon, IsMargin);
        }
        else {
            if (TimeId == '07') {//Station
                DiscStationDisplay(ActionBtnId, Icon, IsMargin);
            }
            else {
                if (TimeId == '08') {//Lane
                    DiscLaneDisplay(ActionBtnId, Icon, IsMargin);
                }
            }
        }
    }
}

function MaintEventPresetGet() {
    var TimeId = ElementDropDownListValueGet('TimeId');
    var ZoneId = ElementDropDownListValueGet('ZoneId');
    var DateStringStart = GetDateStringFromDatePicker('DateStartId');
    var DateStringEnd = GetDateStringFromDatePicker('DateEndId');

    ParamMessageReset();

    if (ZoneId == '07') {//Global
        if (TimeId == '01') {//Day
            MaintEventDayOpen();
        }
        else {
            ParamMessageErrorDisplay('Ce pré-réglabe n\'est pas authorisé');
        }
    }
    else {
        if (ZoneId == '05') {//Région
            if (TimeId == '01') {//Day
                MaintEventRegionOpen();
            }
            else {
                ParamMessageErrorDisplay('Ce pré-réglabe n\'est pas authorisé');
            }
        }
        else {
            if (ZoneId == '03') {//Axle
                if (TimeId == '01') {//Day
                    MaintEventAxleDayOpen();
                }
                else {
                    ParamMessageErrorDisplay('Ce pré-réglabe n\'est pas authorisé');
                }
            }
            else {
                if (ZoneId == '01') {//Station
                    if (TimeId == '01') {//Day
                        MaintEventStationDayOpen();
                    }
                    else {
                        if (TimeId == '06') {//Cumul
                            MaintEventStationCumulOpen();
                        }
                        else {
                            ParamMessageErrorDisplay('Ce pré-réglabe n\'est pas authorisé');
                        }
                    }
                }
                else {
                    if (ZoneId == '00') {//Lane
                        if (TimeId == '01') {//Day
                            MaintEventEquipmentLaneDayOpen();
                        }
                        else {
                            if (TimeId == '06') {//Cumul
                                MaintEventEquipmentLaneCumulOpen();
                            }
                            else {
                                ParamMessageErrorDisplay('Ce pré-réglabe n\'est pas authorisé');
                            }
                        }
                    }
                    else {
                        if (ZoneId == '04') {//Scope
                            if (TimeId == '01') {//Day
                                MaintEventScopeDayOpen();
                            }
                            else {
                                if (TimeId == '06') {//Cumul
                                    MaintEventScopeCumulOpen();
                                }
                                else {
                                    ParamMessageErrorDisplay('Ce pré-réglabe n\'est pas authorisé');
                                }
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
}


function MaintEventDayOpen() {

    //Reset
    MaintConfigAllReportsHide();
    MaintConfigAllParametersHide();
    MenuBarNavHighlight(1, 0, 0);

    //Params
    ShowReport('ParamReportId');
    ParamTitleSet('Evènements par jour');

    //Parents
    ShowParent('TimeId');
    ShowParent('ZoneId');
    ShowParent('IsChartId');
    ShowParent('EquipmentNumberId')
    ShowReport('DateStartId' + 'Parent');
    ShowReport('DateEndId' + 'Parent');

    DateValueDefaultSet('DateStartId', 1);
    DateValueDefaultSet('DateEndId', 1);

    //Actions
    ParamActionBtnGet(0, 'Afficher', 'fas fa-eye', 'MaintEventEquipmentDayDisplay()');

    //MaintEventEquipmentDayDisplay();
}


function MaintEventRegionOpen() {

    //Reset
    MaintConfigAllReportsHide();
    MaintConfigAllParametersHide();
    MenuBarNavHighlight(1, 0, 0);

    //Params
    ShowReport('ParamReportId');
    ParamTitleSet('Evènements par région');

    //Parents
    ShowParent('TimeId');
    ShowParent('ZoneId');
    ShowParent('IsChartId');
    ShowParent('EquipmentNumberId')
    ShowParent('DateStartId');
    ShowParent('DateEndId');
    ShowParent('RegionId');

    DateValueDefaultSet('DateStartId', 1);
    DateValueDefaultSet('DateEndId', 1);

    //Actions
    ParamActionBtnGet(0, 'Afficher', 'fas fa-eye', 'MaintEventEquipmentRegionDisplay()');

    //MaintEventEquipmentDayDisplay();
}

function MaintEventHomeOpen() {
    MaintConfigAllReportsHide();
    MaintConfigAllParametersHide();
    MenuBarNavHighlight(1, 1, 0);


}

function MaintEventOpen() {
    //Reset
    MaintConfigAllReportsHide();
    MaintConfigAllParametersHide();
    MenuBarNavHighlight(1, 0, 0);

    //Params
    ParamTitleSet('Evènements');
    ShowReport('ParamReportId');

    ShowParent('TimeId');
    ShowParent('ZoneId');
}


function MaintEventEquipmentRegionDisplay() {
    var ActionBtnId = 'ParamActionBtnId0';
    var Icon = 'fas fa-eye btn-icon-m-cl gc-c1-cl';
    var IsMargin = true;

    var EquipmentNumber = GetElementValue('EquipmentNumberId');
    var DateStringStart = GetDateStringFromDatePicker('DateStartId');
    var DateStringEnd = GetDateStringFromDatePicker('DateEndId');
    var RegionId = GetElementValue('RegionId');

    MaintEventEquipmentRegionGet(ActionBtnId, Icon, IsMargin, EquipmentNumber, DateStringStart, DateStringEnd, RegionId);
}


function MaintEventEquipmentRegionSearch(Id) {

    var ActionBtnId = new String('MaintEventEquipmentRegionSearchBtnId' + Id);
    var Icon = 'fas fa-eye';
    var IsMargin = false;

    //hide some reports
    //HideTableReport('QualifTrxLaneLane');
    //HideTableReport('QualifTrxLane');
    //HideTableReport('CertFilePlan');

    var EquipmentNumber = new String(Id).substr(0, 2);
    var DateStringStart = new String(Id).substr(2, 8);
    var DateStringEnd = new String(Id).substr(2, 8);
    var RegionId = '0';

    MaintEventEquipmentRegionGet(ActionBtnId, Icon, IsMargin, EquipmentNumber, DateStringStart, DateStringEnd, RegionId);
}


function MaintEventEquipmentRegionGet(ActionBtnId, Icon, IsMargin, EquipmentNumber, DateStringStart, DateStringEnd, RegionId) {

    ActionSpin(ActionBtnId, IsMargin);
    ParamMessageReset();

    var Pattern = 'MaintEventEquipmentRegion';
    var PatternTableId = Pattern + 'TableId';
    var PatternTableReportId = Pattern + 'TableReportId';

    HideReport(PatternTableReportId);

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
            "url": "/Maint/MaintEventEquipmentRegionGet",
            "type": "GET",
            "datatype": "json",
            "data": {
                EquipmentNumber: EquipmentNumber,
                DateStringStart: DateStringStart,
                DateStringEnd: DateStringEnd,
                RegionId: RegionId
            }
        },
        "columns": [
            { "data": "DhmValue" },//0      
            { "data": "RegionNameShort" },//1

            { "data": "EquipmentName" },//2
            { "data": "Trafic" },//3
            { "data": "EventCount" },//4
            { "data": "EventCount" },//5

            { "mData": function vehicle(data, type, dataToSet) { return data.EquipmentNumber + GetDigits(data.Day, 2) + GetDigits(data.Month, 2) + data.Year + data.RegionId; } },//6 Detail
        ],
        "columnDefs": [
            { "width": "3%", "className": "text-center", "targets": 0 },
            { "width": "3%", "className": "text-left", "targets": 1 },

            { "width": "3%", "className": "text-left", "targets": 2 },
            { "width": "3%", "className": "text-right", "targets": 3 },
            { "width": "3%", "className": "text-right", "targets": 4 },
            { "width": "3%", "className": "text-right", "targets": 5 },

            { "width": "3%", "className": "text-center", "targets": 6 },

            { "targets": 0, "render": function (data, type, row) { return GetDateValueFromDataTableDate(data); } },

            { "targets": 1, "render": function (data, type, row) { return data; } },
            { "targets": 2, "render": function (data, type, row) { return data; } },
            { "targets": 3, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 4, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 5, "render": function (data, type, row) { return DataTablePercentageTwoThresholdsGet(data, row['Trafic'], 2, 1, 3); } },

            {
                "targets": 6, "render": function (data, type, row) {
                    return DataTableButtonGet('MaintEventEquipmentAxleSearch', data, '\'' + data + '\'', '', 'dt-btn-cl gc-bc1-cl', 'fas fa-eye btn-icon-cl gc-c1-cl', '');
                }
            },
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
        "ordering": true
        //"footerCallback": function (row, data, start, end, display) {
        //    var api = this.api(), data;
        //    var intVal = function (i) {
        //        return typeof i === 'string' ?
        //            i.replace(/[\$,]/g, '') * 1 :
        //            typeof i === 'number' ?
        //                i : 0;
        //    };

        //    MpReceiptOpeTotal = api.column(2).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);
        //    MpReceiptCeTotal = api.column(3).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);
        //    MpReceiptGapTotal = api.column(4).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);

        //    $(api.column(2).footer()).html(numFormat(MpReceiptOpeTotal));
        //    $(api.column(3).footer()).html(numFormat(MpReceiptCeTotal));

        //    if ((MpReceiptGapTotal.toFixed(2) !== '0.00') && (MpReceiptGapTotal.toFixed(2) !== '-0.00'))
        //        $(api.column(4).footer()).html('<span  class="badge badge-danger">' + MpReceiptGapTotal.toFixed(2) + '</span>');
        //    else $(api.column(4).footer()).html('<span  class="badge badge-success">0.00</span>');



        //    MpNumberOpeTotal = api.column(5).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);
        //    MpNumberCeTotal = api.column(6).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);
        //    MpNumberGapTotal = api.column(7).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);

        //    $(api.column(5).footer()).html(MpNumberOpeTotal);
        //    $(api.column(6).footer()).html(MpNumberCeTotal);

        //    if (MpNumberGapTotal !== 0)
        //        $(api.column(7).footer()).html('<span  class="badge badge-danger">' + MpNumberGapTotal + '</span>');
        //    else $(api.column(7).footer()).html('<span  class="badge badge-success">' + MpNumberGapTotal + '</span>');

        //}
    });
}


function MaintEventEquipmentAxleDayDisplay() {
    var ActionBtnId = 'ParamActionBtnId0';
    var Icon = 'fas fa-eye btn-icon-m-cl gc-c1-cl';
    var IsMargin = true;

    var DateStringStart = GetDateStringFromDatePicker('DateStartId');
    var DateStringEnd = GetDateStringFromDatePicker('DateEndId');
    var EquipmentNumber = GetElementValue('EquipmentNumberId');
    var RegionId = GetElementValue('RegionId');
    var AxleId = GetElementValue('AxleId');

    MaintEventEquipmentAxleDayGet(ActionBtnId, Icon, IsMargin, EquipmentNumber, DateStringStart, DateStringEnd, RegionId, AxleId);
}

function MaintEventEquipmentAxleDaySearch(Id) {

    var ActionBtnId = new String('MaintEventEquipmentAxleSearchBtnId' + Id);
    var Icon = 'fas fa-eye';
    var IsMargin = false;

    //hide some reports
    //HideTableReport('QualifTrxLaneLane');
    //HideTableReport('QualifTrxLane');
    //HideTableReport('CertFilePlan');

    var EquipmentNumber = new String(Id).substr(0, 2);
    var DateStringStart = new String(Id).substr(2, 8);
    var DateStringEnd = new String(Id).substr(2, 8);
    var RegionId = new String(Id).substr(10, 2);
    var AxleId = '0';

    MaintEventEquipmentAxleDayGet(ActionBtnId, Icon, IsMargin, EquipmentNumber, DateStringStart, DateStringEnd, RegionId, AxleId);
}


function MaintEventEquipmentAxleDayGet(ActionBtnId, Icon, IsMargin, EquipmentNumber, DateStringStart, DateStringEnd, RegionId, AxleId) {

    ActionSpin(ActionBtnId, IsMargin);
    ParamMessageReset();

    var Pattern = 'MaintEventEquipmentAxleDay';
    var PatternTableId = Pattern + 'TableId';
    var PatternTableReportId = Pattern + 'TableReportId';

    HideReport(PatternTableReportId);

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
            "url": "/Maint/MaintEventEquipmentAxleDayGet",
            "type": "GET",
            "datatype": "json",
            "data": {
                EquipmentNumber: EquipmentNumber,
                DateStringStart: DateStringStart,
                DateStringEnd: DateStringEnd,
                RegionId: RegionId,
                AxleId: AxleId
            }
        },
        "columns": [
            { "data": "DhmValue" },//0      
            { "data": "RegionNameShort" },//1
            { "data": "AxleName" },//2

            { "data": "EquipmentName" },//3
            { "data": "Trafic" },//4
            { "data": "EventCount" },//5
            { "data": "EventCount" },//6

            { "mData": function vehicle(data, type, dataToSet) { return data.EquipmentNumber + GetDigits(data.Day, 2) + GetDigits(data.Month, 2) + data.Year + data.RegionId + data.AxleId; } },//7 Detail
        ],
        "columnDefs": [
            { "width": "3%", "className": "text-center", "targets": 0 },
            { "width": "3%", "className": "text-left", "targets": 1 },
            { "width": "3%", "className": "text-left", "targets": 2 },

            { "width": "3%", "className": "text-left", "targets": 3 },
            { "width": "3%", "className": "text-right", "targets": 4 },
            { "width": "3%", "className": "text-right", "targets": 5 },
            { "width": "3%", "className": "text-right", "targets": 6 },

            { "width": "3%", "className": "text-center", "targets": 7 },

            { "targets": 0, "render": function (data, type, row) { return DataTableDateValueFromRowGet(row); } },
            { "targets": 1, "render": function (data, type, row) { return data; } },
            { "targets": 2, "render": function (data, type, row) { return data; } },

            { "targets": 3, "render": function (data, type, row) { return data; } },
            { "targets": 4, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 5, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 6, "render": function (data, type, row) { return DataTablePercentageTwoThresholdsGet(data, row['Trafic'], 2, 1, 3); } },

            {
                "targets": 7, "render": function (data, type, row) {
                    return DataTableButtonGet('MaintEventEquipmentStationSearch', data, '\'' + data + '\'', '', 'dt-btn-cl gc-bc1-cl', 'fas fa-eye btn-icon-cl gc-c1-cl', '');
                }
            },
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
        "ordering": true
        //"footerCallback": function (row, data, start, end, display) {
        //    var api = this.api(), data;
        //    var intVal = function (i) {
        //        return typeof i === 'string' ?
        //            i.replace(/[\$,]/g, '') * 1 :
        //            typeof i === 'number' ?
        //                i : 0;
        //    };

        //    MpReceiptOpeTotal = api.column(2).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);
        //    MpReceiptCeTotal = api.column(3).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);
        //    MpReceiptGapTotal = api.column(4).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);

        //    $(api.column(2).footer()).html(numFormat(MpReceiptOpeTotal));
        //    $(api.column(3).footer()).html(numFormat(MpReceiptCeTotal));

        //    if ((MpReceiptGapTotal.toFixed(2) !== '0.00') && (MpReceiptGapTotal.toFixed(2) !== '-0.00'))
        //        $(api.column(4).footer()).html('<span  class="badge badge-danger">' + MpReceiptGapTotal.toFixed(2) + '</span>');
        //    else $(api.column(4).footer()).html('<span  class="badge badge-success">0.00</span>');



        //    MpNumberOpeTotal = api.column(5).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);
        //    MpNumberCeTotal = api.column(6).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);
        //    MpNumberGapTotal = api.column(7).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);

        //    $(api.column(5).footer()).html(MpNumberOpeTotal);
        //    $(api.column(6).footer()).html(MpNumberCeTotal);

        //    if (MpNumberGapTotal !== 0)
        //        $(api.column(7).footer()).html('<span  class="badge badge-danger">' + MpNumberGapTotal + '</span>');
        //    else $(api.column(7).footer()).html('<span  class="badge badge-success">' + MpNumberGapTotal + '</span>');

        //}
    });
}


function MaintEventAxleDayOpen() {

    //Reset
    MaintConfigAllReportsHide();
    MaintConfigAllParametersHide();
    MenuBarNavHighlight(1, 0, 0);

    //Params
    ShowReport('ParamReportId');
    ParamTitleSet('Evènements par axe');

    //Parents
    ShowParent('TimeId');
    ShowParent('ZoneId');
    ShowParent('IsChartId');
    ShowParent('EquipmentNumberId')
    ShowParent('DateStartId');
    ShowParent('DateEndId');
    ShowParent('RegionId');
    ShowParent('AxleId');

    DateValueDefaultSet('DateStartId', 1);
    DateValueDefaultSet('DateEndId', 1);

    //OnChange
    ElementOnChangeSet('RegionId', 'ParamAxlesFromRegionSecGet()');

    //Actions
    ParamActionBtnGet(0, 'Afficher', 'fas fa-eye', 'MaintEventEquipmentAxleDayDisplay()');

    //MaintEventEquipmentDayDisplay();
}


function MaintEventStationDayOpen() {

    //Reset
    MaintConfigAllReportsHide();
    MaintConfigAllParametersHide();
    MenuBarNavHighlight(1, 0, 0);

    //Params
    ShowReport('ParamReportId');
    ParamTitleSet('Evènements par gare');

    //Parents
    ShowParent('TimeId');
    ShowParent('ZoneId');
    ShowParent('IsChartId');
    ShowParent('EquipmentNumberId')
    ShowParent('DateStartId');
    ShowParent('DateEndId');
    ShowParent('RegionId');
    ShowParent('LSId');
    ShowParent('StationNumberId');

    DateValueDefaultSet('DateStartId', 1);
    DateValueDefaultSet('DateEndId', 1);

    //OnChange
    ElementOnChangeSet('RegionId', 'ParamLSFromRegionSecGet()');
    ElementOnChangeSet('StationNumberId', "");

    //Actions
    ParamActionBtnGet(0, 'Afficher', 'fas fa-eye', 'MaintEventEquipmentStationDayDisplay()');

    //MaintEventEquipmentDayDisplay();
}


function MaintEventStationCumulOpen() {

    //Reset
    MaintConfigAllReportsHide();
    MaintConfigAllParametersHide();
    MenuBarNavHighlight(1, 0, 0);

    //Params
    ShowReport('ParamReportId');
    ParamTitleSet('Evènements - Cumulé par gare');

    //Parents
    ShowParent('TimeId');
    ShowParent('ZoneId');
    ShowParent('IsChartId');
    ShowParent('EquipmentNumberId');
    ShowParent('EventCodeId')
    ShowParent('DateStartId');
    ShowParent('DateEndId');
    ShowParent('RegionId');
    ShowParent('LSId');
    ShowParent('StationNumberId');

    DateValueDefaultSet('DateStartId', 1);
    DateValueDefaultSet('DateEndId', 1);

    //OnChange
    ElementOnChangeSet('RegionId', 'ParamLSFromRegionSecGet()');
    ElementOnChangeSet('StationNumberId', "");

    //Actions
    ParamActionBtnGet(0, 'Afficher', 'fas fa-eye', 'MaintEventEquipmentStationCumulDisplay()');

    //MaintEventEquipmentDayDisplay();
}

function MaintEventEquipmentStationDayDisplay() {
    var ActionBtnId = 'ParamActionBtnId0';
    var Icon = 'fas fa-eye btn-icon-m-cl gc-c1-cl';
    var IsMargin = true;

    var DateStringStart = GetDateStringFromDatePicker('DateStartId');
    var DateStringEnd = GetDateStringFromDatePicker('DateEndId');
    var EquipmentNumber = GetElementValue('EquipmentNumberId');
    var EventCode = GetElementValue('EventCodeId');
    var RegionId = GetElementValue('RegionId');
    var LSId = GetElementValue('LSId');
    var AxleId = '0';
    var StationNumber = GetElementValue('StationNumberId');
    var IsScope = false;

    MaintEventEquipmentStationDayGet(ActionBtnId, Icon, IsMargin, DateStringStart, DateStringEnd,
        EquipmentNumber, EventCode,
        RegionId, AxleId, LSId, StationNumber, IsScope);
}


function MaintEventEquipmentStationDaySearch(Id) {

    var ActionBtnId = new String('MaintEventEquipmentStationDaySearchBtnId' + Id);
    var Icon = 'fas fa-eye';
    var IsMargin = false;

    //hide some reports
    //HideTableReport('QualifTrxLaneLane');
    //HideTableReport('QualifTrxLane');
    //HideTableReport('CertFilePlan');

    var DateStringStart = new String(Id).substr(0, 8);
    var DateStringEnd = new String(Id).substr(0, 8);
    var EquipmentNumber = new String(Id).substr(8, 2);
    var EquipmentNumber = new String(Id).substr(10, 3);
    var RegionId = '0';
    var AxleId = '0';
    var LSId = '0';
    var StationNumber = '0';
    var IsScope = false;

    MaintEventEquipmentStationDayGet(ActionBtnId, Icon, IsMargin, DateStringStart, DateStringEnd,
        EquipmentNumber, EventCode,
        RegionId, AxleId, LSId, StationNumber, IsScope);
}


function MaintEventEquipmentStationDayFromScopeSearch(Id) {

    var ActionBtnId = new String('MaintEventEquipmentStationDayFromScopeSearchBtnId' + Id);
    var Icon = 'fas fa-eye';
    var IsMargin = false;

    //hide some reports
    //HideTableReport('QualifTrxLaneLane');
    //HideTableReport('QualifTrxLane');
    //HideTableReport('CertFilePlan');


    var DateStringStart = new String(Id).substr(0, 8);
    var DateStringEnd = new String(Id).substr(0, 8);
    var EquipmentNumber = new String(Id).substr(8, 2);
    var EventCode = new String(Id).substr(10, 3);
    var RegionId = '0';
    var AxleId = '0';
    var LSId = '0';
    var StationNumber = '0';
    var IsScope = true;
    MaintEventEquipmentStationDayGet(ActionBtnId, Icon, IsMargin, DateStringStart, DateStringEnd,
        EquipmentNumber, EventCode,
        RegionId, AxleId, LSId, StationNumber, IsScope);
}


function MaintEventEquipmentStationDayFromStationCumulSearch(Id) {

    var ActionBtnId = new String('MaintEventEquipmentStationDayFromStationCumulSearchBtnId' + Id);
    var Icon = 'fas fa-eye';
    var IsMargin = false;

    var DateStringStart = new String(Id).substr(0, 8);
    var DateStringEnd = new String(Id).substr(8, 8);
    var EquipmentNumber = new String(Id).substr(16, 2);
    var EventCode = new String(Id).substr(18, 3);
    var RegionId = new String(Id).substr(21, 2);
    var AxleId = '0';
    var LSId = new String(Id).substr(23, 2);
    var StationNumber = new String(Id).substr(25, 2);
    var IsScope = true;

    MaintEventEquipmentStationDayGet(ActionBtnId, Icon, IsMargin, DateStringStart, DateStringEnd,
        EquipmentNumber, EventCode,
        RegionId, AxleId, LSId, StationNumber, IsScope);
}

function MaintEventEquipmentStationCumulFromScopeCumulSearch(Id) {

    var ActionBtnId = new String('MaintEventEquipmentStationCumulFromScopeCumulSearchBtnId' + Id);
    var Icon = 'fas fa-eye';
    var IsMargin = false;

    var DateStringStart = new String(Id).substr(0, 8);
    var DateStringEnd = new String(Id).substr(8, 8);
    var EquipmentNumber = new String(Id).substr(16, 2);
    var EventCode = new String(Id).substr(18, 3);
    var RegionId = '0';
    var AxleId = '0';
    var LSId = '0';
    var StationNumber = '0';

    MaintEventEquipmentStationCumulGet(ActionBtnId, Icon, IsMargin, DateStringStart, DateStringEnd,
        EquipmentNumber, EventCode,
        RegionId, AxleId, LSId, StationNumber);
}

function MaintEventEquipmentStationDayGet(ActionBtnId, Icon, IsMargin, DateStringStart, DateStringEnd,
    EquipmentNumber, EventCode,
    RegionId, AxleId, LSId, StationNumber, IsScope) {

    ActionSpin(ActionBtnId, IsMargin);
    ParamMessageReset();

    //Hide
    HideTableReport('MaintEventEquipmentLaneCumul');
    HideTableReport('MaintEventEquipmentLaneDay');
    HideTableReport('MaintEvent');

    var Pattern = 'MaintEventEquipmentStationDay';
    var PatternTableId = Pattern + 'TableId';
    var PatternTableReportId = Pattern + 'TableReportId';

    HideReport(PatternTableReportId);

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
            "url": "/Maint/MaintEventEquipmentStationDayGet",
            "type": "GET",
            "datatype": "json",
            "data": {
                DateStringStart: DateStringStart,
                DateStringEnd: DateStringEnd,
                EquipmentNumber: EquipmentNumber,
                EventCode: EventCode,
                RegionId: RegionId,
                AxleId: AxleId,
                LSId: LSId,
                StationNumber: StationNumber,
                IsScope: IsScope
            }
        },
        "columns": [
            { "data": "DhmValue" },//0      
            { "data": "RegionNameShort" },//1
            { "data": "AxleName" },//2
            { "data": "StationName" },//3

            { "data": "EquipmentName" },//4
            { "data": "EventName" },//5

            { "data": "Trafic" },//6
            { "data": "EventCount" },//7
            { "data": "EventCount" },//8

            { "mData": function vehicle(data, type, dataToSet) { return GetDigits(data.Day, 2) + GetDigits(data.Month, 2) + data.Year + data.EquipmentNumber + data.EventCode + data.RegionId + data.LSId + data.StationNumber; } },//9 Detail
        ],
        "columnDefs": [
            { "width": "3%", "className": "text-center", "targets": 0 },
            { "width": "3%", "className": "text-left", "targets": 1 },
            { "width": "3%", "className": "text-left", "targets": 2 },
            { "width": "3%", "className": "text-left", "targets": 3 },

            { "width": "3%", "className": "text-left", "targets": 4 },
            { "width": "3%", "className": "text-left", "targets": 5 },
            { "width": "3%", "className": "text-right", "targets": 6 },
            { "width": "3%", "className": "text-right", "targets": 7 },
            { "width": "3%", "className": "text-right", "targets": 8 },

            { "width": "3%", "className": "text-center", "targets": 9 },

            { "targets": 0, "render": function (data, type, row) { return GetDateValueFromDataTableDate(data); } },
            { "targets": 1, "render": function (data, type, row) { return data; } },
            { "targets": 2, "render": function (data, type, row) { return data; } },
            { "targets": 3, "render": function (data, type, row) { return data; } },

            { "targets": 4, "render": function (data, type, row) { return data; } },
            { "targets": 5, "render": function (data, type, row) { return data; } },
            { "targets": 6, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 7, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 8, "render": function (data, type, row) { return DataTablePercentageTwoThresholdsGet(data, row['Trafic'], 2, 1, 3); } },

            {
                "targets": 9, "render": function (data, type, row) {
                    return DataTableButtonGet('MaintEventEquipmentLaneDaySearch', data, '\'' + data + '\'', '', 'dt-btn-cl gc-bc1-cl', 'fas fa-eye btn-icon-cl gc-c1-cl', '');
                }
            },
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

            DataTableTotalIntGet(api, intVal, 7);
        }
    });
}


function MaintEventEquipmentLaneDayDisplay() {
    var ActionBtnId = 'ParamActionBtnId0';
    var Icon = 'fas fa-eye btn-icon-m-cl gc-c1-cl';
    var IsMargin = true;

    var DateStringStart = GetDateStringFromDatePicker('DateStartId');
    var DateStringEnd = GetDateStringFromDatePicker('DateEndId');
    var EquipmentNumber = ElementDropDownListValueGet('EquipmentNumberId');
    var EventCode = ElementDropDownListValueGet('EventCodeId');
    var RegionId = ElementDropDownListValueGet('RegionId');
    var AxleId = '0';
    var LSId = ElementDropDownListValueGet('LSId');
    var StationNumber = ElementDropDownListValueGet('StationNumberId');
    var LaneName = ElementDropDownListValueGet('LaneNameId');

    MaintEventEquipmentLaneDayGet(ActionBtnId, Icon, IsMargin, DateStringStart, DateStringEnd,
        EquipmentNumber, EventCode,
        RegionId, AxleId, LSId, StationNumber, LaneName);
}


function MaintEventEquipmentLaneDaySearch(Id) {

    var ActionBtnId = new String('MaintEventEquipmentLaneDaySearchBtnId' + Id);
    var Icon = 'fas fa-eye';
    var IsMargin = false;

    //hide some reports
    //HideTableReport('QualifTrxLaneLane');
    //HideTableReport('QualifTrxLane');
    //HideTableReport('CertFilePlan');


    var DateStringStart = new String(Id).substr(0, 8);
    var DateStringEnd = new String(Id).substr(0, 8);
    var EquipmentNumber = new String(Id).substr(8, 2);
    var EventCode = new String(Id).substr(10, 3);
    var RegionId = new String(Id).substr(13, 2);
    var AxleId = '0';
    var LSId = new String(Id).substr(15, 2);
    var StationNumber = new String(Id).substr(17, 2);
    var LaneName = '0';

    MaintEventEquipmentLaneDayGet(ActionBtnId, Icon, IsMargin, DateStringStart, DateStringEnd,
        EquipmentNumber, EventCode,
        RegionId, AxleId, LSId, StationNumber, LaneName);
}


function MaintEventEquipmentLaneDayFromLaneCumulSearch(Id) {

    var ActionBtnId = new String('MaintEventEquipmentLaneDayFromLaneCumulSearchBtnId' + Id);
    var Icon = 'fas fa-eye';
    var IsMargin = false;

    //hide some reports
    //HideTableReport('QualifTrxLaneLane');
    //HideTableReport('QualifTrxLane');
    //HideTableReport('CertFilePlan');


    var DateStringStart = new String(Id).substr(0, 8);
    var DateStringEnd = new String(Id).substr(8, 8);
    var EquipmentNumber = new String(Id).substr(16, 2);
    var EventCode = new String(Id).substr(18, 3);
    var RegionId = new String(Id).substr(21, 2);
    var AxleId = '0';
    var LSId = new String(Id).substr(23, 2);
    var StationNumber = new String(Id).substr(25, 2);
    var LaneName = new String(Id).substr(27, 3);

    MaintEventEquipmentLaneDayGet(ActionBtnId, Icon, IsMargin, DateStringStart, DateStringEnd,
        EquipmentNumber, EventCode,
        RegionId, AxleId, LSId, StationNumber, LaneName);
}


function MaintEventEquipmentLaneDayFromScopeDaySearch(Id) {

    var ActionBtnId = new String('MaintEventEquipmentLaneDayFromScopeDaySearchBtnId' + Id);
    var Icon = 'fas fa-eye';
    var IsMargin = false;

    //hide some reports
    //HideTableReport('QualifTrxLaneLane');
    //HideTableReport('QualifTrxLane');
    //HideTableReport('CertFilePlan');


    var DateStringStart = new String(Id).substr(0, 8);
    var DateStringEnd = new String(Id).substr(0, 8);
    var EquipmentNumber = new String(Id).substr(8, 2);
    var EventCode = new String(Id).substr(10, 3);
    var RegionId = '0';
    var AxleId = '0';
    var LSId = '0';
    var StationNumber = '0';
    var LaneName = '0';

    MaintEventEquipmentLaneDayGet(ActionBtnId, Icon, IsMargin, DateStringStart, DateStringEnd,
        EquipmentNumber, EventCode,
        RegionId, AxleId, LSId, StationNumber, LaneName);
}

function MaintEventEquipmentLaneCumulFromStationCumulSearch(Id) {

    var ActionBtnId = new String('MaintEventEquipmentLaneCumulFromStationCumulSearchBtnId' + Id);
    var Icon = 'fas fa-eye';
    var IsMargin = false;

    //hide some reports
    //HideTableReport('QualifTrxLaneLane');
    //HideTableReport('QualifTrxLane');
    //HideTableReport('CertFilePlan');


    var DateStringStart = new String(Id).substr(0, 8);
    var DateStringEnd = new String(Id).substr(8, 8);
    var EquipmentNumber = new String(Id).substr(16, 2);
    var EventCode = new String(Id).substr(18, 3);
    var RegionId = new String(Id).substr(21, 2);
    var AxleId = '0';
    var LSId = new String(Id).substr(23, 2);
    var StationNumber = new String(Id).substr(25, 2);
    var LaneName = '0';

    MaintEventEquipmentLaneCumulGet(ActionBtnId, Icon, IsMargin, DateStringStart, DateStringEnd,
        EquipmentNumber, EventCode,
        RegionId, AxleId, LSId, StationNumber, LaneName);
}


function MaintEventEquipmentLaneCumulFromScopeCumulSearch(Id) {

    var ActionBtnId = new String('MaintEventEquipmentLaneCumulFromScopeCumulSearchBtnId' + Id);
    var Icon = 'fas fa-eye';
    var IsMargin = false;

    var DateStringStart = new String(Id).substr(0, 8);
    var DateStringEnd = new String(Id).substr(8, 8);
    var EquipmentNumber = new String(Id).substr(16, 2);
    var EventCode = new String(Id).substr(18, 3);
    var RegionId = '0';
    var AxleId = '0';
    var LSId = '0';
    var StationNumber = '0';
    var LaneName = '0';

    MaintEventEquipmentLaneCumulGet(ActionBtnId, Icon, IsMargin, DateStringStart, DateStringEnd,
        EquipmentNumber, EventCode,
        RegionId, AxleId, LSId, StationNumber, LaneName);
}

function MaintEventEquipmentLaneDayGet(ActionBtnId, Icon, IsMargin, DateStringStart, DateStringEnd,
    EquipmentNumber, EventCode,
    RegionId, AxleId, LSId, StationNumber, LaneName) {

    ActionSpin(ActionBtnId, IsMargin);
    ParamMessageReset();

    //Hide
    HideTableReport('MaintEvent');

    var Pattern = 'MaintEventEquipmentLaneDay';
    var PatternTableId = Pattern + 'TableId';
    var PatternTableReportId = Pattern + 'TableReportId';

    HideReport(PatternTableReportId);

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
            "url": "/Maint/MaintEventEquipmentLaneDayGet",
            "type": "GET",
            "datatype": "json",
            "data": {
                DateStringStart: DateStringStart,
                DateStringEnd: DateStringEnd,
                EquipmentNumber: EquipmentNumber,
                EventCode: EventCode,
                RegionId: RegionId,
                AxleId: AxleId,
                LSId: LSId,
                StationNumber: StationNumber,
                LaneName: LaneName
            }
        },
        "columns": [
            { "data": "" },//0 
            { "data": "DhmValue" },//1
            
            { "data": "RegionNameShort" },//2
            { "data": "AxleName" },//3
            { "data": "StationName" },//4
            { "data": "LaneName" },//5
            { "data": "EquipmentName" },//6
            { "data": "EventName" },//7

            { "data": "Trafic" },//8
            { "data": "EventCount" },//9
            { "data": "EventCount" },//10

            { "mData": function vehicle(data, type, dataToSet) { return GetDigits(data.Day, 2) + GetDigits(data.Month, 2) + data.Year + data.EquipmentNumber + data.EventCode + data.RegionId + data.LSId + data.StationNumber + data.LaneName; } },//11
        ],
        "columnDefs": [
            { "width": "3%", "className": "text-center", "targets": 0 },
            { "width": "3%", "className": "text-center", "targets": 1 },

            { "width": "3%", "className": "text-left", "targets": 2 },
            { "width": "3%", "className": "text-left", "targets": 3 },
            { "width": "3%", "className": "text-left", "targets": 4 },
            { "width": "3%", "className": "text-left", "targets": 5 },
            { "width": "3%", "className": "text-left", "targets": 6 },
            { "width": "3%", "className": "text-left", "targets": 7 },

            { "width": "3%", "className": "text-right", "targets": 8 },
            { "width": "3%", "className": "text-right", "targets": 9 },
            { "width": "3%", "className": "text-right", "targets": 10 },

            { "width": "3%", "className": "text-center", "targets": 11 },

            { "targets": 0, "render": function (data, type, row) { return DataTableIsValidInfoGet(row['IsValid']); } },
            { "targets": 1, "render": function (data, type, row) { return DataTableDateValueFromRowGet(row); } },

            { "targets": 2, "render": function (data, type, row) { return data; } },
            { "targets": 3, "render": function (data, type, row) { return data; } },
            { "targets": 4, "render": function (data, type, row) { return data; } },
            { "targets": 5, "render": function (data, type, row) { return data; } },
            { "targets": 6, "render": function (data, type, row) { return data; } },
            { "targets": 7, "render": function (data, type, row) { return data; } },

            { "targets": 8, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 9, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 10, "render": function (data, type, row) { return DataTablePercentageTwoThresholdsGet(data, row['Trafic'], 2, 1, 3); } },

            {
                "targets": 11, "render": function (data, type, row) {
                    return DataTableButtonGet('MaintEventSearch', data, '\'' + data + '\'', '', 'dt-btn-cl gc-bc1-cl', 'fas fa-eye btn-icon-cl gc-c1-cl', '');
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

            DataTableTotalIntGet(api, intVal, 9);
        }
    });
}


function MaintEventEquipmentLaneDayOpen() {

    //Reset
    MaintConfigAllReportsHide();
    MaintConfigAllParametersHide();
    MenuBarNavHighlight(1, 0, 0);

    //Params
    ShowReport('ParamReportId');
    ParamTitleSet('Evènements par gare');

    //Parents
    ShowParent('TimeId');
    ShowParent('ZoneId');
    ShowParent('IsChartId');
    ShowParent('EquipmentNumberId')
    ShowParent('DateStartId');
    ShowParent('DateEndId');
    ShowParent('RegionId');
    ShowParent('LSId');
    ShowParent('StationNumberId');
    ShowParent('LaneNameId');

    DateValueDefaultSet('DateStartId', 1);
    DateValueDefaultSet('DateEndId', 1);

    //OnChange
    ElementOnChangeSet('RegionId', 'ParamLSFromRegionSecGet()');
    ElementOnChangeSet('StationNumberId', "ParamLanesFromStationLSGet()");

    //Actions
    ParamActionBtnGet(0, 'Afficher', 'fas fa-eye', 'MaintEventEquipmentLaneDayDisplay()');


    //MaintEventEquipmentDayDisplay();
}

function MaintEventScopeDayOpen() {

    //Reset
    MaintConfigAllReportsHide();
    MaintConfigAllParametersHide();
    MenuBarNavHighlight(1, 0, 0);

    //Params
    ShowReport('ParamReportId');
    ParamTitleSet('Evènements par périmètre');

    //Parents
    ShowParent('TimeId');
    ShowParent('ZoneId');
    ShowParent('IsChartId');
    ShowParent('EquipmentNumberId');
    ShowParent('EventCodeId')
    ShowParent('DateStartId');
    ShowParent('DateEndId');

    DateValueDefaultSet('DateStartId', 1);
    DateValueDefaultSet('DateEndId', 1);

    //Actions
    ParamActionBtnGet(0, 'Afficher', 'fas fa-eye', 'MaintEventEquipmentScopeDayDisplay()');

    //MaintEventEquipmentDayDisplay();
}


function MaintEventEquipmentScopeDayDisplay() {
    var ActionBtnId = 'ParamActionBtnId0';
    var Icon = 'fas fa-eye btn-icon-m-cl gc-c1-cl';
    var IsMargin = true;

    var DateStringStart = GetDateStringFromDatePicker('DateStartId');
    var DateStringEnd = GetDateStringFromDatePicker('DateEndId');
    var EquipmentNumber = GetElementValue('EquipmentNumberId');
    var EventCode = GetElementValue('EventCodeId');
    var IsMyScope = true;

    MaintEventEquipmentScopeDayGet(ActionBtnId, Icon, IsMargin, DateStringStart, DateStringEnd,
        EquipmentNumber, EventCode, IsMyScope);
}


function MaintEventEquipmentScopeDaySearch(Id) {

    var ActionBtnId = new String('MaintEventEquipmentScopeDaySearchBtnId' + Id);
    var Icon = 'fas fa-eye';
    var IsMargin = false;

    //hide some reports
    //HideTableReport('QualifTrxLaneLane');
    //HideTableReport('QualifTrxLane');
    //HideTableReport('CertFilePlan');


    var DateStringStart = new String(Id).substr(0, 8);
    var DateStringEnd = new String(Id).substr(0, 8);
    var EquipmentNumber = new String(Id).substr(0, 2);
    var EventCode = '0';

    MaintEventEquipmentScopeDayGet(ActionBtnId, Icon, IsMargin, DateStringStart, DateStringEnd,
        EquipmentNumber, EventCode, IsMyScope);
}


function MaintEventEquipmentScopeDayFromScopeCumulSearch(Id) {

    var ActionBtnId = new String('MaintEventEquipmentScopeDayFromScopeCumulSearchBtnId' + Id);
    var Icon = 'fas fa-eye';
    var IsMargin = false;

    //hide some reports
    //HideTableReport('QualifTrxLaneLane');
    //HideTableReport('QualifTrxLane');
    //HideTableReport('CertFilePlan');

    var DateStringStart = new String(Id).substr(0, 8);
    var DateStringEnd = new String(Id).substr(8, 8);
    var EquipmentNumber = new String(Id).substr(16, 2);
    var EventCode = new String(Id).substr(18, 3);
    var IsMyScope = true;
    MaintEventEquipmentScopeDayGet(ActionBtnId, Icon, IsMargin, DateStringStart, DateStringEnd,
        EquipmentNumber, EventCode, IsMyScope);
}

function MaintEventEquipmentScopeDayGet(ActionBtnId, Icon, IsMargin, DateStringStart, DateStringEnd,
    EquipmentNumber, EventCode, IsMyScope) {

    ActionSpin(ActionBtnId, IsMargin);
    ParamMessageReset();

    //Hide    
    HideTableReport('MaintEventEquipmentStationDay');
    HideTableReport('MaintEventEquipmentLaneCumul');
    HideTableReport('MaintEventEquipmentLaneDay');
    HideTableReport('MaintEventEquipmentCounterDay');
    HideTableReport('MaintEvent');



    var Pattern = 'MaintEventEquipmentScopeDay';
    var PatternTableId = Pattern + 'TableId';
    var PatternTableReportId = Pattern + 'TableReportId';

    HideReport(PatternTableReportId);

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
            "url": "/Maint/MaintEventEquipmentScopeDayGet",
            "type": "GET",
            "datatype": "json",
            "data": {
                DateStringStart: DateStringStart,
                DateStringEnd: DateStringEnd,
                EquipmentNumber: EquipmentNumber,
                EventCode: EventCode,
                IsMyScope: IsMyScope
            }
        },
        "columns": [
            { "data": "DhmValue" },//0      

            { "data": "EquipmentName" },//1
            { "data": "EventName" },//2

            { "data": "Trafic" },//3
            { "data": "EventCount" },//4
            { "data": "EventCount" },//5

            { "mData": function vehicle(data, type, dataToSet) { return GetDigits(data.Day, 2) + GetDigits(data.Month, 2) + data.Year + data.EquipmentNumber + data.EventCode; } },//6 Station
            { "mData": function vehicle(data, type, dataToSet) { return GetDigits(data.Day, 2) + GetDigits(data.Month, 2) + data.Year + data.EquipmentNumber + data.EventCode; } },//7 Lane
        ],
        "columnDefs": [
            { "width": "3%", "className": "text-center", "targets": 0 },

            { "width": "3%", "className": "text-left", "targets": 1 },
            { "width": "3%", "className": "text-left", "targets": 2 },

            { "width": "3%", "className": "text-right", "targets": 3 },
            { "width": "3%", "className": "text-right", "targets": 4 },
            { "width": "3%", "className": "text-right", "targets": 5 },

            { "width": "3%", "className": "text-center", "targets": 6 },
            { "width": "3%", "className": "text-center", "targets": 7 },

            { "targets": 0, "render": function (data, type, row) { return DataTableDateValueFromRowGet(row); } },

            { "targets": 1, "render": function (data, type, row) { return data; } },
            { "targets": 2, "render": function (data, type, row) { return data; } },

            { "targets": 3, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 4, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 5, "render": function (data, type, row) { return DataTablePercentageTwoThresholdsGet(data, row['Trafic'], 2, 1, 3); } },

            {
                "targets": 6, "render": function (data, type, row) {
                    return DataTableButtonGet('MaintEventEquipmentStationDayFromScopeSearch', data, '\'' + data + '\'', '', 'dt-btn-cl gc-bc1-cl', 'fas fa-eye btn-icon-cl gc-c1-cl', '');
                }
            },
            {
                "targets": 7, "render": function (data, type, row) {
                    return DataTableButtonGet('MaintEventEquipmentLaneDayFromScopeDaySearch', data, '\'' + data + '\'', '', 'dt-btn-cl gc-bc1-cl', 'fas fa-eye btn-icon-cl gc-c1-cl', '');
                }
            },
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

            DataTableTotalIntGet(api, intVal, 4);
        }
    });
}

function MaintEventScopeCumulOpen() {

    //Reset
    MaintConfigAllReportsHide();
    MaintConfigAllParametersHide();
    MenuBarNavHighlight(1, 0, 0);

    //Params
    ShowReport('ParamReportId');
    ParamTitleSet('Evènements par périmètre');

    //Parents
    ShowParent('TimeId');
    ShowParent('ZoneId');
    ShowParent('EquipmentNumberId');
    ShowParent('EventCodeId');
    ShowParent('DateStartId');
    ShowParent('DateEndId');

    DateValueDefaultSet('DateStartId', 1);
    DateValueDefaultSet('DateEndId', 1);

    //Actions
    ParamActionBtnGet(0, 'Afficher', 'fas fa-eye', 'MaintEventEquipmentScopeCumulDisplay()');

    //MaintEventEquipmentDayDisplay();
}


function MaintEventEquipmentScopeCumulDisplay() {
    var ActionBtnId = 'ParamActionBtnId0';
    var Icon = 'fas fa-eye btn-icon-m-cl gc-c1-cl';
    var IsMargin = true;

    var DateStringStart = GetDateStringFromDatePicker('DateStartId');
    var DateStringEnd = GetDateStringFromDatePicker('DateEndId');
    var EquipmentNumber = GetElementValue('EquipmentNumberId');
    var EventCode = GetElementValue('EventCodeId');

    MaintEventEquipmentScopeCumulGet(ActionBtnId, Icon, IsMargin, DateStringStart, DateStringEnd, EquipmentNumber, EventCode);
}


function MaintEventEquipmentScopeCumulSearch(Id) {

    var ActionBtnId = new String('MaintEventEquipmentScopeCumulSearchBtnId' + Id);
    var Icon = 'fas fa-eye';
    var IsMargin = false;

    //hide some reports
    //HideTableReport('QualifTrxLaneLane');
    //HideTableReport('QualifTrxLane');
    //HideTableReport('CertFilePlan');

    var EquipmentNumber = new String(Id).substr(0, 2);
    var DateStringStart = new String(Id).substr(2, 8);
    var DateStringEnd = new String(Id).substr(2, 8);
    var EventCode = '0';

    MaintEventEquipmentScopeCumulGet(ActionBtnId, Icon, IsMargin, DateStringStart, DateStringEnd,
        EquipmentNumber, EventCode);
}


function MaintEventEquipmentScopeCumulGet(ActionBtnId, Icon, IsMargin, DateStringStart, DateStringEnd,
    EquipmentNumber, EventCode) {

    ActionSpin(ActionBtnId, IsMargin);
    ParamMessageReset();

    //Hide
    HideTableReport('MaintEventEquipmentScopeDay');
    HideTableReport('MaintEventEquipmentStationCumul');
    HideTableReport('MaintEventEquipmentStationDay');
    HideTableReport('MaintEventEquipmentLaneCumul');
    HideTableReport('MaintEventEquipmentLaneDay');
    HideTableReport('MaintEventEquipmentCounterDay');
    HideTableReport('MaintEvent');

    var Pattern = 'MaintEventEquipmentScopeCumul';
    var PatternTableId = Pattern + 'TableId';
    var PatternTableReportId = Pattern + 'TableReportId';

    HideReport(PatternTableReportId);

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
            "url": "/Maint/MaintEventEquipmentScopeCumulGet",
            "type": "GET",
            "datatype": "json",
            "data": {
                DateStringStart: DateStringStart,
                DateStringEnd: DateStringEnd,
                EquipmentNumber: EquipmentNumber,
                EventCode: EventCode
            }
        },
        "columns": [
            { "data": "" },//0
            { "data": "DhmValueStart" },//1
            { "data": "DhmValueEnd" },//2

            { "data": "EquipmentName" },//3
            { "data": "EventName" },//4

            { "data": "Trafic" },//5
            { "data": "EventCount" },//6
            { "data": "EventCount" },//7

            { "mData": function vehicle(data, type, dataToSet) { return GetDigits(data.DayS, 2) + GetDigits(data.MonthS, 2) + data.YearS + GetDigits(data.DayE, 2) + GetDigits(data.MonthE, 2) + data.YearE + data.EquipmentNumber + data.EventCode; } },//8 DAY
            { "mData": function vehicle(data, type, dataToSet) { return GetDigits(data.DayS, 2) + GetDigits(data.MonthS, 2) + data.YearS + GetDigits(data.DayE, 2) + GetDigits(data.MonthE, 2) + data.YearE + data.EquipmentNumber + data.EventCode; } },//9 Station
            { "mData": function vehicle(data, type, dataToSet) { return GetDigits(data.DayS, 2) + GetDigits(data.MonthS, 2) + data.YearS + GetDigits(data.DayE, 2) + GetDigits(data.MonthE, 2) + data.YearE + data.EquipmentNumber + data.EventCode; } },//10 Lane
        ],
        "columnDefs": [
            { "width": "3%", "className": "text-center", "targets": 0 },
            { "width": "3%", "className": "text-center", "targets": 1 },
            { "width": "3%", "className": "text-center", "targets": 2 },

            { "width": "3%", "className": "text-left", "targets": 3 },
            { "width": "3%", "className": "text-left", "targets": 4 },

            { "width": "3%", "className": "text-right", "targets": 5 },
            { "width": "3%", "className": "text-right", "targets": 6 },
            { "width": "3%", "className": "text-right", "targets": 7 },

            { "width": "3%", "className": "text-center", "targets": 8 },
            { "width": "3%", "className": "text-center", "targets": 9 },
            { "width": "3%", "className": "text-center", "targets": 10 },

            { "targets": 0, "render": function (data, type, row) { return DataTableIsValidInfoGet(row['IsValid']); } },
            { "targets": 1, "render": function (data, type, row) { return DataTableDateValueStartFromRowGet(row); } },
            { "targets": 2, "render": function (data, type, row) { return DataTableDateValueEndFromRowGet(row); } },

            { "targets": 3, "render": function (data, type, row) { return data; } },
            { "targets": 4, "render": function (data, type, row) { return data; } },

            { "targets": 5, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 6, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 7, "render": function (data, type, row) { return DataTablePercentageTwoThresholdsGet(data, row['Trafic'], 2, 1, 3); } },

            { "targets": 8, "render": function (data, type, row) { return DataTableButtonGet('MaintEventEquipmentScopeDayFromScopeCumulSearch', data, '\'' + data + '\'', '', 'dt-btn-cl gc-bc1-cl', 'fas fa-eye btn-icon-cl gc-c1-cl', ''); } },
            { "targets": 9, "render": function (data, type, row) { return DataTableButtonGet('MaintEventEquipmentStationCumulFromScopeCumulSearch', data, '\'' + data + '\'', '', 'dt-btn-cl gc-bc1-cl', 'fas fa-eye btn-icon-cl gc-c1-cl', ''); } },
            { "targets": 10, "render": function (data, type, row) { return DataTableButtonGet('MaintEventEquipmentLaneCumulFromScopeCumulSearch', data, '\'' + data + '\'', '', 'dt-btn-cl gc-bc1-cl', 'fas fa-eye btn-icon-cl gc-c1-cl', ''); } },
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

            DataTableTotalIntGet(api, intVal, 6);

        }
    });
}


function MaintEventEquipmentLaneCumulOpen() {

    //Reset
    MaintConfigAllReportsHide();
    MaintConfigAllParametersHide();
    MenuBarNavHighlight(1, 0, 0);

    //Params
    ShowReport('ParamReportId');
    ParamTitleSet('Evènements par gare');

    //Parents
    ShowParent('TimeId');
    ShowParent('ZoneId');
    ShowParent('IsChartId');
    ShowParent('EquipmentNumberId')
    ShowParent('DateStartId');
    ShowParent('DateEndId');
    ShowParent('RegionId');
    ShowParent('LSId');
    ShowParent('StationNumberId');
    ShowParent('LaneNameId');

    DateValueDefaultSet('DateStartId', 1);
    DateValueDefaultSet('DateEndId', 1);

    //OnChange
    ElementOnChangeSet('RegionId', 'ParamLSFromRegionSecGet()');
    ElementOnChangeSet('StationNumberId', "ParamLanesFromStationLSGet()");

    //Actions
    ParamActionBtnGet(0, 'Afficher', 'fas fa-eye', 'MaintEventEquipmentLaneCumulDisplay()');

    //MaintEventEquipmentDayDisplay();
}


function MaintEventEquipmentLaneCumulDisplay() {
    var ActionBtnId = 'ParamActionBtnId0';
    var Icon = 'fas fa-eye btn-icon-m-cl gc-c1-cl';
    var IsMargin = true;

    var DateStringStart = GetDateStringFromDatePicker('DateStartId');
    var DateStringEnd = GetDateStringFromDatePicker('DateEndId');
    var EquipmentNumber = ElementDropDownListValueGet('EquipmentNumberId');
    var RegionId = ElementDropDownListValueGet('RegionId');
    var AxleId = '0';
    var LSId = ElementDropDownListValueGet('LSId');
    var StationNumber = ElementDropDownListValueGet('StationNumberId');
    var LaneName = ElementDropDownListValueGet('LaneNameId');

    MaintEventEquipmentLaneCumulGet(ActionBtnId, Icon, IsMargin, EquipmentNumber, DateStringStart, DateStringEnd, RegionId, AxleId, LSId, StationNumber, LaneName);
}


function MaintEventEquipmentLaneCumulSearch(Id) {

    var ActionBtnId = new String('MaintEventEquipmentLaneCumulSearchBtnId' + Id);
    var Icon = 'fas fa-eye';
    var IsMargin = false;

    //hide some reports
    //HideTableReport('QualifTrxLaneLane');
    //HideTableReport('QualifTrxLane');
    //HideTableReport('CertFilePlan');

    var EquipmentNumber = new String(Id).substr(0, 2);
    var DateStringStart = new String(Id).substr(2, 8);
    var DateStringEnd = new String(Id).substr(2, 8);
    var RegionId = new String(Id).substr(10, 2);
    var AxleId = new String(Id).substr(12, 2);
    var LSId = '0';
    var StationNumber = new String(Id).substr(14, 2);
    var LaneName = '0';

    MaintEventEquipmentLaneCumulGet(ActionBtnId, Icon, IsMargin, EquipmentNumber, DateStringStart, DateStringEnd, RegionId, AxleId, LSId, StationNumber, LaneName);
}


function MaintEventEquipmentLaneCumulGet(ActionBtnId, Icon, IsMargin, DateStringStart, DateStringEnd,
    EquipmentNumber, EventCode,
    RegionId, AxleId, LSId, StationNumber, LaneName) {

    ActionSpin(ActionBtnId, IsMargin);
    ParamMessageReset();

    //Hide
    HideTableReport('MaintEventEquipmentLaneDay');
    HideTableReport('MaintEvent');

    var Pattern = 'MaintEventEquipmentLaneCumul';
    var PatternTableId = Pattern + 'TableId';
    var PatternTableReportId = Pattern + 'TableReportId';

    HideReport(PatternTableReportId);

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
            "url": "/Maint/MaintEventEquipmentLaneCumulGet",
            "type": "GET",
            "datatype": "json",
            "data": {                
                DateStringStart: DateStringStart,
                DateStringEnd: DateStringEnd,
                EquipmentNumber: EquipmentNumber,
                EventCode: EventCode,
                RegionId: RegionId,
                AxleId: AxleId,
                LSId: LSId,
                StationNumber: StationNumber,
                LaneName: LaneName
            }
        },
        "columns": [
            { "data": "" },//0
            { "data": "DhmValueStart" },//1
            { "data": "DhmValueEnd" },//2

            { "data": "RegionNameShort" },//3
            { "data": "AxleName" },//4
            { "data": "StationName" },//5
            { "data": "LaneName" },//6
            { "data": "EquipmentName" },//7
            { "data": "EventName" },//8

            { "data": "Trafic" },//9
            { "data": "EventCount" },//10
            { "data": "EventCount" },//11

            { "mData": function vehicle(data, type, dataToSet) { return GetDigits(data.DayS, 2) + GetDigits(data.MonthS, 2) + data.YearS + GetDigits(data.DayE, 2) + GetDigits(data.MonthE, 2) + data.YearE + data.EquipmentNumber + data.EventCode + data.RegionId + data.LSId + data.StationNumber + data.LaneName; } },//12
        ],
        "columnDefs": [
            { "width": "3%", "className": "text-center", "targets": 0 },
            { "width": "3%", "className": "text-center", "targets": 1 },
            { "width": "3%", "className": "text-center", "targets": 2 },

            { "width": "3%", "className": "text-left", "targets": 3 },
            { "width": "3%", "className": "text-left none", "targets": 4 },
            { "width": "3%", "className": "text-left", "targets": 5 },
            { "width": "3%", "className": "text-center", "targets": 6 },
            { "width": "3%", "className": "text-left", "targets": 7 },
            { "width": "3%", "className": "text-left", "targets": 8 },

            { "width": "3%", "className": "text-right", "targets": 9 },
            { "width": "3%", "className": "text-right", "targets": 10 },
            { "width": "3%", "className": "text-right", "targets": 11 },

            { "width": "3%", "className": "text-center", "targets": 12 },

            { "targets": 0, "render": function (data, type, row) { return DataTableIsValidInfoGet(row['IsValid']); } },
            { "targets": 1, "render": function (data, type, row) { return DataTableDateValueStartFromRowGet(row); } },
            { "targets": 2, "render": function (data, type, row) { return DataTableDateValueEndFromRowGet(row); } },

            { "targets": 3, "render": function (data, type, row) { return data; } },
            { "targets": 4, "render": function (data, type, row) { return data; } },
            { "targets": 5, "render": function (data, type, row) { return data; } },
            { "targets": 6, "render": function (data, type, row) { return data; } },
            { "targets": 7, "render": function (data, type, row) { return data; } },
            { "targets": 8, "render": function (data, type, row) { return data; } },

            { "targets": 9, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 10, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 11, "render": function (data, type, row) { return DataTablePercentageTwoThresholdsGet(data, row['Trafic'], 2, 1, 3); } },

            {
                "targets": 12, "render": function (data, type, row) {
                    return DataTableButtonGet('MaintEventEquipmentLaneDayFromLaneCumulSearch', data, '\'' + data + '\'', '', 'dt-btn-cl gc-bc1-cl', 'fas fa-eye btn-icon-cl gc-c1-cl', '');
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

            DataTableTotalIntGet(api, intVal, 10);
        }
    });
}

function MaintEventEquipmentScopeLaneCumulGet(ActionBtnId, Icon, IsMargin, EquipmentNumber, DateStringStart, DateStringEnd, RegionId, AxleId, LSId, StationNumber, LaneName) {

    ActionSpin(ActionBtnId, IsMargin);
    ParamMessageReset();

    var Pattern = 'MaintEventEquipmentScopeLaneCumul';
    var PatternTableId = Pattern + 'TableId';
    var PatternTableReportId = Pattern + 'TableReportId';

    HideReport(PatternTableReportId);

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
            "url": "/Maint/MaintEventEquipmentScopeLaneCumulGet",
            "type": "GET",
            "datatype": "json",
            "data": {
                EquipmentNumber: EquipmentNumber,
                DateStringStart: DateStringStart,
                DateStringEnd: DateStringEnd,
                RegionId: RegionId,
                AxleId: AxleId,
                LSId: LSId,
                StationNumber: StationNumber,
                LaneName: LaneName
            }
        },
        "columns": [
            { "data": "DhmValueStart" },//0     
            { "data": "DhmValueEnd" },//1

            { "data": "RegionNameShort" },//2
            { "data": "AxleName" },//3
            { "data": "StationName" },//4
            { "data": "LaneName" },//5

            { "data": "EquipmentName" },//6
            { "data": "Trafic" },//7
            { "data": "EventCount" },//8
            { "data": "EventCount" },//9

            { "mData": function vehicle(data, type, dataToSet) { return data.EquipmentNumber + GetDigits(data.Day, 2) + GetDigits(data.Month, 2) + data.Year + data.RegionId + data.AxleId + data.StationNumber + data.LaneName; } },//10 Detail
        ],
        "columnDefs": [
            { "width": "3%", "className": "text-center", "targets": 0 },
            { "width": "3%", "className": "text-center", "targets": 1 },

            { "width": "3%", "className": "text-left", "targets": 2 },
            { "width": "3%", "className": "text-left none", "targets": 3 },
            { "width": "3%", "className": "text-left", "targets": 4 },
            { "width": "3%", "className": "text-center", "targets": 5 },

            { "width": "3%", "className": "text-left", "targets": 6 },
            { "width": "3%", "className": "text-right", "targets": 7 },
            { "width": "3%", "className": "text-right", "targets": 8 },
            { "width": "3%", "className": "text-right", "targets": 9 },

            { "width": "3%", "className": "text-center", "targets": 10 },

            { "targets": 0, "render": function (data, type, row) { return GetDateValueFromDataTableDate(data); } },
            { "targets": 1, "render": function (data, type, row) { return GetDateValueFromDataTableDate(data); } },

            { "targets": 2, "render": function (data, type, row) { return data; } },
            { "targets": 3, "render": function (data, type, row) { return data; } },
            { "targets": 4, "render": function (data, type, row) { return data; } },
            { "targets": 5, "render": function (data, type, row) { return data; } },

            { "targets": 6, "render": function (data, type, row) { return data; } },
            { "targets": 7, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 8, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 9, "render": function (data, type, row) { return DataTablePercentageTwoThresholdsGet(data, row['Trafic'], 2, 1, 3); } },

            {
                "targets": 10, "render": function (data, type, row) {
                    return DataTableButtonGet('MaintEventEquipmentCounterSearch', data, '\'' + data + '\'', '', 'dt-btn-cl gc-bc1-cl', 'fas fa-eye btn-icon-cl gc-c1-cl', '');
                }
            },
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
        "ordering": true
        //"footerCallback": function (row, data, start, end, display) {
        //    var api = this.api(), data;
        //    var intVal = function (i) {
        //        return typeof i === 'string' ?
        //            i.replace(/[\$,]/g, '') * 1 :
        //            typeof i === 'number' ?
        //                i : 0;
        //    };

        //    MpReceiptOpeTotal = api.column(2).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);
        //    MpReceiptCeTotal = api.column(3).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);
        //    MpReceiptGapTotal = api.column(4).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);

        //    $(api.column(2).footer()).html(numFormat(MpReceiptOpeTotal));
        //    $(api.column(3).footer()).html(numFormat(MpReceiptCeTotal));

        //    if ((MpReceiptGapTotal.toFixed(2) !== '0.00') && (MpReceiptGapTotal.toFixed(2) !== '-0.00'))
        //        $(api.column(4).footer()).html('<span  class="badge badge-danger">' + MpReceiptGapTotal.toFixed(2) + '</span>');
        //    else $(api.column(4).footer()).html('<span  class="badge badge-success">0.00</span>');



        //    MpNumberOpeTotal = api.column(5).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);
        //    MpNumberCeTotal = api.column(6).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);
        //    MpNumberGapTotal = api.column(7).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);

        //    $(api.column(5).footer()).html(MpNumberOpeTotal);
        //    $(api.column(6).footer()).html(MpNumberCeTotal);

        //    if (MpNumberGapTotal !== 0)
        //        $(api.column(7).footer()).html('<span  class="badge badge-danger">' + MpNumberGapTotal + '</span>');
        //    else $(api.column(7).footer()).html('<span  class="badge badge-success">' + MpNumberGapTotal + '</span>');

        //}
    });
}


function MaintTollPriceOpen() {
    //Reset
    MaintConfigAllReportsHide();
    MaintConfigAllParametersHide();
    MenuBarNavHighlight(0, 2, 2);

    //Params
    ParamTitleSet('Configuration - Tarifs');
    ShowReport('ParamReportId');

    ShowParent('RegionId');
    ShowParent('LSId');
    ShowParent('StationNumberId');

    //Actions
    ParamActionBtnGet(0, 'Afficher', 'fas fa-eye', 'MaintTollPriceDisplay()');
    ParamActionBtnGet(2, 'Actualiser', 'fas fa-redo-alt', "CertUpdate('MaintTollPrice')");

    //MaintTollPriceDisplay();
}

function MaintTollPriceDisplay() {
    var ActionBtnId = 'ParamActionBtnId0';
    var Icon = 'fas fa-eye btn-icon-m-cl gc-c1-cl';
    var IsMargin = true;

    var RegionId = GetElementValue('RegionId');
    var AxleId = '0';
    var LSId = GetElementValue('LSId');
    var StationNumber = GetElementValue('StationNumberId');

    MaintTollPriceGet(ActionBtnId, Icon, IsMargin, RegionId, AxleId, LSId, StationNumber);
}


function MaintTollPriceGet(ActionBtnId, Icon, IsMargin, RegionId, AxleId, LSId, StationNumber) {

    ActionSpin(ActionBtnId, IsMargin);
    ParamMessageReset();

    var Pattern = 'MaintTollPrice';
    var PatternTableId = Pattern + 'TableId';
    var PatternTableReportId = Pattern + 'TableReportId';

    HideReport(PatternTableReportId);

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
            "url": "/Maint/MaintTollPriceGet",
            "type": "GET",
            "datatype": "json",
            "data": {
                RegionId: RegionId,
                AxleId: AxleId,
                LSId: LSId,
                StationNumber: StationNumber
            }
        },
        "columns": [
            { "data": "RegionNameShort" },//0
            { "data": "StationNumberD" },//1
            { "data": "StationNumberO" },//2

            { "data": "PriceC1DhOpe" },//3
            { "data": "PriceC2DhOpe" },//4
            { "data": "PriceC3DhOpe" },//5

            { "data": "PriceC1AbonOpe" },//6
            { "data": "PriceC2AbonOpe" },//7
            { "data": "PriceC3AbonOpe" },//8

            { "data": "PriceC1DhRef" },//9
            { "data": "PriceC2DhRef" },//10
            { "data": "PriceC3DhRef" },//11

            { "data": "PriceC1AbonRef" },//12
            { "data": "PriceC2AbonRef" },//13
            { "data": "PriceC3AbonRef" },//14

            { "data": "OdId" },//15
            { "data": "OdId" },//16
            { "data": "PriceC3DhOpe" },//17

            { "data": "OdId" },//18
            { "data": "OdId" },//19
            { "data": "OdId" },//20

            { "data": "DhmCreation" },//21
            { "data": "DhmUpdate" },//22
            { "data": "OdId" },//23
        ],
        "columnDefs": [
            { "width": "3%", "className": "text-center none", "targets": 0 },
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

            { "width": "3%", "className": "text-right", "targets": 12 },
            { "width": "3%", "className": "text-right", "targets": 13 },
            { "width": "3%", "className": "text-right", "targets": 14 },


            { "width": "3%", "className": "text-right", "targets": 15 },
            { "width": "3%", "className": "text-right", "targets": 16 },
            { "width": "3%", "className": "text-right", "targets": 17 },

            { "width": "3%", "className": "text-right", "targets": 18 },
            { "width": "3%", "className": "text-right", "targets": 19 },
            { "width": "3%", "className": "text-right", "targets": 20 },


            { "width": "3%", "className": "text-center none", "targets": 21 },
            { "width": "3%", "className": "text-center none", "targets": 22 },
            { "width": "3%", "className": "text-center", "targets": 23 },

            { "targets": 0, "render": function (data, type, row) { return data; } },
            { "targets": 1, "render": function (data, type, row) { return data; } },
            { "targets": 2, "render": function (data, type, row) { return data; } },

            //{ "targets": 3, "render": function (data, type, row) { return DataTableFormatDoubleAlertGet(data); } },
            //{ "targets": 4, "render": function (data, type, row) { return DataTableFormatDoubleAlertGet(data); } },
            //{ "targets": 5, "render": function (data, type, row) { return DataTableFormatDoubleAlertGet(data); } },

            //{ "targets": 6, "render": function (data, type, row) { return DataTableFormatDoubleAlertGet(data); } },
            //{ "targets": 7, "render": function (data, type, row) { return DataTableFormatDoubleAlertGet(data); } },
            //{ "targets": 8, "render": function (data, type, row) { return DataTableFormatDoubleAlertGet(data); } },

            //{ "targets": 9, "render": function (data, type, row) { return DataTableFormatDoubleAlertGet(data); } },
            //{ "targets": 10, "render": function (data, type, row) { return DataTableFormatDoubleAlertGet(data); } },
            //{ "targets": 11, "render": function (data, type, row) { return DataTableFormatDoubleAlertGet(data); } },

            { "targets": 12, "render": function (data, type, row) { return (row['PriceC1DhRef'] - row['PriceC1DhRef'] * 0.1).toFixed(1); } },
            { "targets": 13, "render": function (data, type, row) { return (row['PriceC2DhRef'] - row['PriceC2DhRef'] * 0.1).toFixed(1); } },
            { "targets": 14, "render": function (data, type, row) { return (row['PriceC3DhRef'] - row['PriceC3DhRef'] * 0.1).toFixed(1); } },

            { "targets": 15, "render": function (data, type, row) { return DataTableDiffDoubleGet(row['PriceC1DhOpe'], row['PriceC1DhRef']); } },
            { "targets": 16, "render": function (data, type, row) { return DataTableDiffDoubleGet(row['PriceC2DhOpe'], row['PriceC2DhRef']); } },
            { "targets": 17, "render": function (data, type, row) { return DataTableDiffDoubleGet(row['PriceC3DhOpe'], row['PriceC3DhRef']); } },

            { "targets": 18, "render": function (data, type, row) { return DataTableDiffDoubleGet(row['PriceC1AbonOpe'], row['PriceC1DhRef'] - row['PriceC1DhRef'] * 0.1); } },
            { "targets": 19, "render": function (data, type, row) { return DataTableDiffDoubleGet(row['PriceC2AbonOpe'], row['PriceC2DhRef'] - row['PriceC2DhRef'] * 0.1); } },
            { "targets": 20, "render": function (data, type, row) { return DataTableDiffDoubleGet(row['PriceC3AbonOpe'], row['PriceC3DhRef'] - row['PriceC3DhRef'] * 0.1); } },

            { "targets": 21, "render": function (data, type, row) { return GetDhmValueFromDataTableDate(data); } },
            { "targets": 22, "render": function (data, type, row) { return GetDhmValueFromDataTableDate(data); } },
            {
                "targets": 23, "render": function (data, type, row) {
                    var TaskId = '00';
                    var SourceId = '08';
                    var FileTypeId = '8B';
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
        "ordering": true
        //"footerCallback": function (row, data, start, end, display) {
        //    var api = this.api(), data;
        //    var intVal = function (i) {
        //        return typeof i === 'string' ?
        //            i.replace(/[\$,]/g, '') * 1 :
        //            typeof i === 'number' ?
        //                i : 0;
        //    };

        //    MpReceiptOpeTotal = api.column(2).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);
        //    MpReceiptCeTotal = api.column(3).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);
        //    MpReceiptGapTotal = api.column(4).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);

        //    $(api.column(2).footer()).html(numFormat(MpReceiptOpeTotal));
        //    $(api.column(3).footer()).html(numFormat(MpReceiptCeTotal));

        //    if ((MpReceiptGapTotal.toFixed(2) !== '0.00') && (MpReceiptGapTotal.toFixed(2) !== '-0.00'))
        //        $(api.column(4).footer()).html('<span  class="badge badge-danger">' + MpReceiptGapTotal.toFixed(2) + '</span>');
        //    else $(api.column(4).footer()).html('<span  class="badge badge-success">0.00</span>');



        //    MpNumberOpeTotal = api.column(5).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);
        //    MpNumberCeTotal = api.column(6).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);
        //    MpNumberGapTotal = api.column(7).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);

        //    $(api.column(5).footer()).html(MpNumberOpeTotal);
        //    $(api.column(6).footer()).html(MpNumberCeTotal);

        //    if (MpNumberGapTotal !== 0)
        //        $(api.column(7).footer()).html('<span  class="badge badge-danger">' + MpNumberGapTotal + '</span>');
        //    else $(api.column(7).footer()).html('<span  class="badge badge-success">' + MpNumberGapTotal + '</span>');

        //}
    });
}


function MaintEventEquipmentStationCumulDisplay() {
    var ActionBtnId = 'ParamActionBtnId0';
    var Icon = 'fas fa-eye btn-icon-m-cl gc-c1-cl';
    var IsMargin = true;

    var DateStringStart = GetDateStringFromDatePicker('DateStartId');
    var DateStringEnd = GetDateStringFromDatePicker('DateEndId');
    var EquipmentNumber = GetElementValue('EquipmentNumberId');
    var EventCode = GetElementValue('EventCodeId');
    var RegionId = GetElementValue('RegionId');
    var LSId = GetElementValue('LSId');
    var AxleId = '0';
    var StationNumber = GetElementValue('StationNumberId');
    var IsScope = false;

    MaintEventEquipmentStationCumulGet(ActionBtnId, Icon, IsMargin, DateStringStart, DateStringEnd,
        EquipmentNumber, EventCode,
        RegionId, AxleId, LSId, StationNumber, IsScope);
}


function MaintEventEquipmentStationCumulSearch(Id) {

    var ActionBtnId = new String('MaintEventEquipmentStationCumulSearchBtnId' + Id);
    var Icon = 'fas fa-eye';
    var IsMargin = false;

    //hide some reports
    //HideTableReport('QualifTrxLaneLane');
    //HideTableReport('QualifTrxLane');
    //HideTableReport('CertFilePlan');

    var DateStringStart = new String(Id).substr(0, 8);
    var DateStringEnd = new String(Id).substr(0, 8);
    var EquipmentNumber = new String(Id).substr(8, 2);
    var EquipmentNumber = new String(Id).substr(10, 3);
    var RegionId = '0';
    var AxleId = '0';
    var LSId = '0';
    var StationNumber = '0';

    MaintEventEquipmentStationCumulGet(ActionBtnId, Icon, IsMargin, DateStringStart, DateStringEnd,
        EquipmentNumber, EventCode,
        RegionId, AxleId, LSId, StationNumber);
}


function MaintEventEquipmentStationCumulGet(ActionBtnId, Icon, IsMargin, DateStringStart, DateStringEnd,
    EquipmentNumber, EventCode,
    RegionId, AxleId, LSId, StationNumber) {

    ActionSpin(ActionBtnId, IsMargin);
    ParamMessageReset();

    //Hide
    HideTableReport('MaintEventEquipmentStationDay');
    HideTableReport('MaintEventEquipmentLaneCumul');
    HideTableReport('MaintEventEquipmentLaneDay');
    HideTableReport('MaintEvent');

    var Pattern = 'MaintEventEquipmentStationCumul';
    var PatternTableId = Pattern + 'TableId';
    var PatternTableReportId = Pattern + 'TableReportId';


    HideReport(PatternTableReportId);

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
            "url": "/Maint/MaintEventEquipmentStationCumulGet",
            "type": "GET",
            "datatype": "json",
            "data": {
                DateStringStart: DateStringStart,
                DateStringEnd: DateStringEnd,
                EquipmentNumber: EquipmentNumber,
                EventCode: EventCode,
                RegionId: RegionId,
                AxleId: AxleId,
                LSId: LSId,
                StationNumber: StationNumber
            }
        },
        "columns": [
            { "data": "" },//0 
            { "data": "DhmValueStart" },//1  
            { "data": "DhmValueEnd" },//2

            { "data": "RegionNameShort" },//3
            { "data": "AxleName" },//4
            { "data": "StationName" },//5
            { "data": "EquipmentName" },//6
            { "data": "EventName" },//7

            { "data": "Trafic" },//8
            { "data": "EventCount" },//9
            { "data": "EventCount" },//10

            { "mData": function vehicle(data, type, dataToSet) { return GetDigits(data.DayS, 2) + GetDigits(data.MonthS, 2) + data.YearS + GetDigits(data.DayE, 2) + GetDigits(data.MonthE, 2) + data.YearE + data.EquipmentNumber + data.EventCode + data.RegionId + data.LSId + data.StationNumber; } },//11
            { "mData": function vehicle(data, type, dataToSet) { return GetDigits(data.DayS, 2) + GetDigits(data.MonthS, 2) + data.YearS + GetDigits(data.DayE, 2) + GetDigits(data.MonthE, 2) + data.YearE + data.EquipmentNumber + data.EventCode + data.RegionId + data.LSId + data.StationNumber; } },//12
        ],
        "columnDefs": [
            { "width": "3%", "className": "text-center", "targets": 0 },
            { "width": "3%", "className": "text-center", "targets": 1 },
            { "width": "3%", "className": "text-center", "targets": 2 },

            { "width": "3%", "className": "text-left", "targets": 3 },
            { "width": "3%", "className": "text-left", "targets": 4 },
            { "width": "3%", "className": "text-left", "targets": 5 },
            { "width": "3%", "className": "text-left", "targets": 6 },
            { "width": "3%", "className": "text-left", "targets": 7 },

            { "width": "3%", "className": "text-right", "targets": 8 },
            { "width": "3%", "className": "text-right", "targets": 9 },
            { "width": "3%", "className": "text-right", "targets": 10 },

            { "width": "3%", "className": "text-center", "targets": 11 },
            { "width": "3%", "className": "text-center", "targets": 12 },

            { "targets": 0, "render": function (data, type, row) { return DataTableIsValidInfoGet(row['IsValid']); } },
            { "targets": 1, "render": function (data, type, row) { return DataTableDateValueStartFromRowGet(row); } },
            { "targets": 2, "render": function (data, type, row) { return DataTableDateValueEndFromRowGet(row); } },

            { "targets": 3, "render": function (data, type, row) { return data; } },
            { "targets": 4, "render": function (data, type, row) { return data; } },
            { "targets": 5, "render": function (data, type, row) { return data; } },
            { "targets": 6, "render": function (data, type, row) { return data; } },
            { "targets": 7, "render": function (data, type, row) { return data; } },

            { "targets": 8, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 9, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 10, "render": function (data, type, row) { return DataTablePercentageTwoThresholdsGet(data, row['Trafic'], 2, 1, 3); } },

            {
                "targets": 11, "render": function (data, type, row) {
                    return DataTableButtonGet('MaintEventEquipmentStationDayFromStationCumulSearch', data, '\'' + data + '\'', '', 'dt-btn-cl gc-bc1-cl', 'fas fa-eye btn-icon-cl gc-c1-cl', '');
                }
            },
            {
                "targets": 12, "render": function (data, type, row) {
                    return DataTableButtonGet('MaintEventEquipmentLaneCumulFromStationCumulSearch', data, '\'' + data + '\'', '', 'dt-btn-cl gc-bc1-cl', 'fas fa-eye btn-icon-cl gc-c1-cl', '');
                }
            },
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

            DataTableTotalIntGet(api, intVal, 9);
        }
    });
}

