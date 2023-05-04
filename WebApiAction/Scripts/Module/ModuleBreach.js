
function BreachAllReportsHide() {

    HideReport('ParamReportId');

    //Tables
    HideTableReport('CertFilePlan');
    HideTableReport('Breach');
    HideTableReport('BreachPlate');
    HideTableReport('BreachRepeat');
    HideTableReport('BreachScopeCumul');
}


function BreachAllParametersHide() {

    //Parents
    HideParent('RegionId');
    HideParent('LSId');
    HideParent('StationNumberId');
    HideParent('LaneNameId');

    HideParent('DateStartId');
    HideParent('DateEndId');
    HideParent('DhmStartId');
    HideParent('DhmEndId');
    HideParent('TimeId');
    HideParent('ZoneId');

    HideParent('BreachStatusId');
    HideParent('CarBrandId');
    HideParent('BreachReasonId');
    HideParent('LicensePlateId');
    HideParent('CategoryId');
    HideParent('BreachRefId');

    HideParent('ExportId');
    HideParent('IsChartId');
    HideParent('RepeatStatusId');
    HideParent('LawyerId');
    
    //ParamAction
    HideReport('ParamActionContainerId0');
    HideReport('ParamActionContainerId1');
    HideReport('ParamActionContainerId2');
    HideReport('ParamActionContainerId3');
}

function BreachHomeOpen() {

    BreachAllReportsHide();
    BreachAllParametersHide();
    //MenuBarNavHighlight(0, 5, 4);

    //Fill
    HtmlDropDownListWithInputNameOnlyFill('ZoneId', 0, '/Param/ParamZonesGet', 'ZoneId', 'ZoneName', '37');
    HtmlDropDownListWithInputNameOnlyFill('TimeId', 0, '/Param/ParamTimesGet', 'TimeId', 'TimeName', '37');
    HtmlDropDownListWithInputNameOnlyFill('ExportId', 0, '/Param/ParamExportsGet', 'ExportId', 'ExportName', '37');
    HtmlDropDownListNameOnlyFill('RegionId', '0', '/Param/ParamRegionsSecGet', 'RegionId', 'RegionNameShort');
    HtmlDropDownListFill('CategoryId', 0, '/Param/ParamCategoriesGet', 'CategoryId', 'CategoryName');

    HtmlDropDownListNameOnlyFill('BreachStatusId', 0, '/Breach/ParamBreachStatusGet', 'BreachStatusId', 'BreachStatusName');
    HtmlDropDownListNameOnlyFill('CarBrandId', 0, '/Breach/ParamCarBrandsGet', 'CarBrandId', 'CarBrandName');
    HtmlDropDownListNameOnlyFill('BreachReasonId', 0, '/Breach/ParamBreachReasonsGet', 'BreachReasonId', 'BreachReasonName');

    HtmlDropDownListNameOnlyFill('RepeatStatusId', '0', '/Qualif/ParamRepeatStatusGet', 'RepeatStatusId', 'RepeatStatusName');
    HtmlDropDownListNameOnlyFill('LawyerId', 0, '/Qualif/ParamLawyersGet', 'LawyerId', 'LawyerFullName');

    //Reset
    ParamResetDropDownList('LSId');
    ParamResetDropDownList('StationNumberId');
    ParamResetDropDownList('LaneNameId');

    //OnChange
    ElementOnChangeSet('RegionId', 'ParamLSFromRegionSecGet()');
    ElementOnChangeSet('LSId', 'ParamStationsFromLSGet()');
    ElementOnChangeSet('StationNumberId', "ParamLanesFromStationLSGet()");

    ElementOnClickSet('RegionId', 'ParamLSFromRegionSecGet()');
    ElementOnClickSet('LSId', 'ParamStationsFromLSGet()');
    ElementOnClickSet('StationNumberId', "ParamLanesFromStationLSGet()");

    //$.ajax({
    //    url: "/Cert/RoleNameListGet",
    //    method: "POST",
    //    contentType: "application/json; charset=utf-8",
    //    async: true,
    //    success: function (data) {
    //        if (data.includes('Administrateur')) {
    //            DhmValueStartDefaultSet('DhmStartId', 1)
    //            DhmValueEndDefaultSet('DhmEndId', 1);
    //            DropDownListSet('TimeId', '01');                
    //        }
    //        else {
    //            if (data.includes('BreachSupervisor')) {
    //                DhmValueStartDefaultSet('DhmStartId', 1)
    //                DhmValueEndDefaultSet('DhmEndId', 1);
    //                DropDownListSet('TimeId', '09');
    //            }
    //            else {
    //                if (data.includes('Breach')) {
    //                    DhmValueStartDefaultSet('DhmStartId', 1)
    //                    DhmValueEndDefaultSet('DhmEndId', 1);
    //                    DropDownListSet('TimeId', '07');
    //                }
    //            }
    //        }
    //    }
    //});
}

function BreachSearchOpen() {
    BreachAllReportsHide();
    BreachAllParametersHide();
    MenuBarNavHighlight(0, 3, 2);
}

function BreachListOpen() {
    BreachAllReportsHide();
    BreachAllParametersHide();
    MenuBarNavHighlight(0, 0, 1);

    //Title
    ParamTitleSet('Liste de violations');

    //gloabl
    ShowReport('ParamReportId');

    //Parents
    ShowParent('RegionId');
    ShowParent('LSId');
    ShowParent('StationNumberId');
    ShowParent('LaneNameId');

    ShowParent('DhmStartId');
    ShowParent('DhmEndId');

    ShowParent('BreachStatusId');
    ShowParent('CarBrandId');
    ShowParent('BreachReasonId');
    ShowParent('LicensePlateId');
    ShowParent('CategoryId');
    ShowParent('BreachRefId');

    //Initialize
    DhmValueStartDefaultSet('DhmStartId', 1);
    DhmValueEndDefaultSet('DhmEndId', 1);
    DropDownListSet('TimeId', '01');   

    //ParamAction
    ParamActionBtnGet(0, 'Afficher', 'fas fa-eye', 'BreachListDisplay()');
}

function BreachListDisplay() {
    var ActionBtnId = 'ParamActionBtnId0';
    var Icon = 'fas fa-eye btn-icon-m-cl gc-c1-cl';
    var IsMargin = true;

    //Inputs
    var DhmStringStart = GetDhmStringFromDatePicker('DhmStartId');
    var DhmStringEnd = GetDhmStringFromDatePicker('DhmEndId');

    var RegionId = ElementDropDownListValueGet('RegionId');
    var LSId = ElementDropDownListValueGet('LSId');
    var StationNumber = ElementDropDownListValueGet('StationNumberId');
    var LaneName = ElementDropDownListValueGet('LaneNameId');
    var CategoryId = ElementDropDownListValueGet('CategoryId');
    var LicensePlate = GetElementValue('LicensePlateId');

    var BreachStatusId = ElementDropDownListValueGet('BreachStatusId');
    var CarBrandId = ElementDropDownListValueGet('CarBrandId');
    var BreachReasonId = ElementDropDownListValueGet('BreachReasonId');
    var BreachRef = GetElementValue('BreachRefId');

    if (DhmStringStart != '' && DhmStringEnd != '') {
        BreachListGet(ActionBtnId, Icon, IsMargin,
            DhmStringStart, DhmStringEnd, 
            RegionId, LSId, StationNumber, LaneName, CategoryId, LicensePlate, 
            BreachStatusId, CarBrandId, BreachReasonId, BreachRef);
    }
    else {
        ParamMessageErrorDisplay('Les dates de début et de fin sont obligatoires');
    };
}


function BreachListSearch(LicensePlate) {
    var ActionBtnId = new String('BreachListSearch' + 'BtnId' + LicensePlate);
    var Icon = 'fas fa-eye';
    var IsMargin = false;

    //Spin
    ActionBtnSpin(ActionBtnId);

    var DhmStringStart = '01012000000000';
    var DhmStringEnd = '31122099235959';
    var RegionId = '0';
    var LSId = '0';
    var StationNumber = '0';
    var LaneName = '0';
    var CategoryId = '0';
    var BreachStatusId = 0;
    var CarBrandId = 0;
    var BreachReasonId = 0;
    var BreachRef = '';

    BreachListGet(ActionBtnId, Icon, IsMargin,
        DhmStringStart, DhmStringEnd,
        RegionId, LSId, StationNumber, LaneName, CategoryId, LicensePlate,
        BreachStatusId, CarBrandId, BreachReasonId, BreachRef);
}

function BreachListGet(ActionBtnId, Icon, IsMargin,
    DhmStringStart, DhmStringEnd,
    RegionId, LSId, StationNumber, LaneName, CategoryId, LicensePlate,
    BreachStatusId, CarBrandId, BreachReasonId, BreachRef) {

    //Spin
    ActionSpin(ActionBtnId, IsMargin);

    //Set datatable patterns
    var Pattern = 'Breach';
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
            "url": "/Breach/BreachListGet",
            "type": "GET",
            "datatype": "json",
            "data": {
                "DhmStringStart": DhmStringStart,
                "DhmStringEnd": DhmStringEnd,

                "RegionId": RegionId,
                "LSId": LSId,
                "StationNumber": StationNumber,
                "LaneName": LaneName,
                "CategoryId": CategoryId,
                "LicensePlate": LicensePlate,                               

                "BreachStatusId": BreachStatusId,
                "CarBrandId": CarBrandId,
                "BreachReasonId": BreachReasonId,
                "BreachRef": BreachRef
            }
        },
        "columns": [
            { "data": "StationName" }, //0
            { "data": "LaneName" }, //1        
            { "data": "DhmValue" },//2 
            
            { "data": "CategoryId" },//3
            { "data": "LicensePlate" },//4

            { "data": "BreachStatusName" },//5
            { "data": "CarBrandName" },//6        
            { "data": "BreachReasonName" },//7
            { "data": "BreachRef" },//8

            { "data": "ControllerNumber" },//9
            { "data": "SupervisorNumber" },//10
            
            { "data": "DhmCreation" },//11
            { "data": "DhmClose" },//12

            { "data": "BreachPath" },//13
            { "data": "BreachRowId" },//14
        ],
        "columnDefs": [
            { "width": "3%", "className": "text-left", "targets": 0 },
            { "width": "3%", "className": "text-center", "targets": 1 },
            { "width": "3%", "className": "text-center", "targets": 2 },

            { "width": "3%", "className": "text-center", "targets": 3 },
            { "width": "3%", "className": "text-center", "targets": 4 },

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
            
            { "targets": 0, "render": function (data, type, row) { return data; } },
            { "targets": 1, "render": function (data, type, row) { return data; } },
            { "targets": 2, "render": function (data, type, row) { return DataTableDhmValueFromRowGet(row); } },

            { "targets": 3, "render": function (data, type, row) { return data; } },
            { "targets": 4, "render": function (data, type, row) { return data; } },

            { "targets": 5, "render": function (data, type, row) { return data; } },
            { "targets": 6, "render": function (data, type, row) { return data; } },
            { "targets": 7, "render": function (data, type, row) { return data; } },
            { "targets": 8, "render": function (data, type, row) { return data; } },

            { "targets": 9, "render": function (data, type, row) { return data; } },
            { "targets": 10, "render": function (data, type, row) { return data; } },

            { "targets": 11, "render": function (data, type, row) { return GetDhmValueFromDataTableDate(data); } },
            { "targets": 12, "render": function (data, type, row) { return GetDhmValueFromDataTableDate(data); } },

            {
                "targets": 13, "render": function (data, type, row) {
                    if (row['IsPdf']) {
                        var argument = row['BreachRowId'] + ', ' + '\'' + row['BreachPath'] + '\'';
                        return DataTableButtonGet('BreachMinuteExport', data, argument, '', 'dt-btn-cl gc-bc1-cl', 'fas fa-file-pdf btn-icon-cl gc-c1-cl', '');
                    }
                    else {
                        return '';
                    }
                }
            },
            {
                "targets": 14, "render": function (data, type, row) {

                    var PatternForm = 'Edit';
                    var Icon = 'fas fa-edit';
                    var Label = '';
                    var RowId = data;

                    var OnClick = 'BreachFormLoad(\'' +
                        Pattern + '\',\'' +
                        PatternForm + '\', ' +
                        RowId + ',' +
                        '\'' + row['StationName'] + '\', ' +
                        '\'' + row['LaneName'] + '\', ' +
                        '\'' + row['DhmValue'] + '\', ' +
                        '\'' + row['CategoryId'] + '\', ' +
                        '\'' + row['LicensePlate'] + '\', ' +
                        '\'' + row['BreachStatusName'] + '\', ' +
                        '\'' + row['CarBrandName'] + '\', ' +
                        '\'' + row['BreachReasonName'] + '\', ' +
                        '\'' + row['BreachRef'] + '\', ' +
                        '\'' + row['ControllerNumber'] + '\', ' +
                        '\'' + row['SupervisorNumber'] + '\', ' +
                        '\'' + row['DhmCreation'] + '\', ' +
                        '\'' + row['DhmClose'] + '\', ' +
                        '\'' + row['BreachPath'] + '\', ' +
                        ')';

                    return DataTableFormBtnIdGet(Pattern, PatternForm, RowId, Label, OnClick, Icon);
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


        }
    });
}

function BreachFormLoad(Pattern, PatternForm,
    BreachRowId,
    StationName, 
    LaneName, 
    DhmValue,

    CategoryId, 
    LicensePlate,

    BreachStatusName,
    CarBrandName,
    BreachReasonName,
    BreachRef,

    ControllerNumber,
    SupervisorNumber,

    DhmCreation,
    DhmClose,

    BreachPath) {

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





    ////Set inputs
    document.getElementById('CommentId' + FormIndex).value = '';





    //Test
    var Label = 'Qualifier';
    var IconIn = 'far fa-save';
    var PatternIn = Pattern + 'Edit';//QualifPathEdit
    var RowId = '\'' + RowIdTrxLane + '\'';

    //Action
    var OnClick = PatternIn + '(' + RowId + ', ' + FormIndex + ', \'' + ObsTickId + '\')';
    ModalActionBtnGet(PatternIn, Label, IconIn, OnClick);

    //Set drop down lists
    HtmlDropDownListNameOnlyXorWithInputFill('QualifControlId' + FormIndex, '01', '/Qualif/QualifControlsGet', 'QualifControlId', 'QualifControlName', ObsTickId);
    HtmlDropDownListNameOnlyXorWithInputFill('QualifReasonId' + FormIndex, '00', '/Qualif/QualifReasonsGet', 'QualifReasonId', 'QualifReasonName', ObsTickId);
    HtmlDropDownListNameOnlyXorFill('SensId' + FormIndex, 'S', '/Param/GetSens', 'SensId', 'SensName');

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


function BreachMinuteExport(BreachRowId, BreachPath) {

    var PrintLink = BreachPath;

    NavigateTo(PrintLink, true);
    
}



function BreachPresetGet() {

    var TimeId = ElementDropDownListValueGet('TimeId');
    var ZoneId = ElementDropDownListValueGet('ZoneId');

    //BreachAllReportsHide();
    //BreachAllParametersHide();
    //ShowReport('ParamReportId');

    //ShowParent('TimeId');
    //ShowParent('ZoneId');

    if (ZoneId == '04') {//Scope
        if (TimeId == '06') {//Cumul
            BreachScopeCumulOpen();
        }
        else {
            ParamMessageErrorDisplay('Ce pré-réglabe n\'est pas authorisé');
        }
    }
    else {
        ParamMessageErrorDisplay('Ce pré-réglabe n\'est pas authorisé');
    }
}


function BreachPreview(FileType) {

    var ZoneId = ElementDropDownListValueGet('ZoneId');
    var TimeId = ElementDropDownListValueGet('TimeId');
    var DateStringStart = GetDateStringFromDatePicker('DateStartId');
    var DateStringEnd = GetDateStringFromDatePicker('DateEndId');

    var FileType = 'PDF';
    var PrintLink = '/Breach/BreachPreview?' +
        'ZoneId=' + ZoneId +
        '&TimeId=' + TimeId +
        '&DateStringStart=' + DateStringStart +
        '&DateStringEnd=' + DateStringEnd +
        '&FileType=' + FileType;

    NavigateTo(PrintLink, true);
}

function BreachNotify(Destination) {

    var ActionBtnId = 'ParamActionBtnId1';
    
    if (Destination == 'Me') {
        ActionBtnId = 'ParamActionBtnId2';
    }
    else {
        if (Destination == 'Scope') {
            ActionBtnId = 'ParamActionBtnId3';
        }
    }

    var Icon = 'fas fa-paper-plane';
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
        url: "/Breach/BreachNotify",
        method: "POST",
        data: JSON.stringify(obj),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            ActionBtnSet(ActionBtnId, Icon, IsMargin);
        }
    });
}


function BreachScopeCumulOpen() {
    BreachAllReportsHide();
    BreachAllParametersHide();
    MenuBarNavHighlight(2, 1, 4);

    //ParamTitle
    ParamTitleSet('Violations par périmètre');
    ShowReport('ParamReportId');
    ParamMessageReset();

    //gloabl
    ShowReport('ParamReportId');
    ShowParent('DateStartId');
    ShowParent('DateEndId');
    ShowParent('TimeId');
    ShowParent('ZoneId');
    ShowParent('IsChartId');

    //Action
    ParamActionBtnGet(0, 'Afficher', 'fas fa-eye', "BreachScopeCumulDisplay()");
    ParamActionBtnGet(1, 'Exporter', 'fas fa-file-pdf', "BreachPreview()");
    ParamActionBtnGet(2, 'Tester', 'fas fa-paper-plane', "BreachNotify('Me')");
    ParamActionBtnGet(3, 'Notifier', 'fas fa-paper-plane', "BreachNotify('Scope')");
}


function BreachScopeCumulDisplay() {

    var ActionBtnId = 'ParamActionBtnId0';
    var Icon = 'fas fa-eye';
    var IsMargin = true;

    var DateStringStart = GetDateStringFromDatePicker('DateStartId');
    var DateStringEnd = GetDateStringFromDatePicker('DateEndId');
    var IsChart = ElementBooleanGet('IsChartId');

    BreachAllReportsHide();
    ShowReport('ParamReportId');
    ParamMessageReset();

    BreachScopeCumulGet(ActionBtnId, Icon, IsMargin, DateStringStart, DateStringEnd, IsChart);
}


function BreachScopeCumulGet(ActionBtnId, Icon, IsMargin,
    DateStringStart, DateStringEnd, IsChart) {

    ActionSpin(ActionBtnId, IsMargin);

    //Hide Tables

    var PatternTable = 'BreachScopeCumul';
    var PatternTableId = PatternTable + 'TableId'
    var PatternTableReportId = PatternTable + 'TableReportId';

    //var data00 = 0;
    //var data01 = 0;

    //var data10 = 0;
    //var data11 = 0;

    //var data20 = 0;
    //var data21 = 0;
    //var data22 = 0;
    //var data23 = 0;

    //var data30 = 0;
    //var data31 = 0;

    //var data40 = 0;
    //var data41 = 0;

    //var data50 = 0;
    //var data51 = 0;
    //var data52 = 0;
    //var data53Bar = 0;
    //var data53 = 0;

    //var data60 = 0;
    //var data61 = 0;
    //var data62 = 0;
    //var data63Bar = 0;
    //var data63 = 0;

    //var data70 = 0;
    //var data71 = 0;
    //var data72 = 0;
    //var data73 = 0;
    //var data74Bar = 0;
    //var data74 = 0;


    $('#' + PatternTableId).DataTable().destroy();
    $('#' + PatternTableId).DataTable({
        "dom": 'Bfrtip',
        "buttons": [
            'excel'
        ],
        "initComplete": function (settings, json) {
            ActionBtnSet(ActionBtnId, Icon, IsMargin);
            ShowReport(PatternTableReportId);

            //if (IsChart == true) {

            //    if (DateStringStart - DateStringEnd != 0) {
            //        var PatternChartCommon = 'QualifObsTickIdD';

            //        var Title = 'Temps de parcours dépassé';
            //        var PatternChart = PatternChartCommon + 'TotalLine';
            //        var labels = GetColumnArray(PatternTableId, 18);
            //        var data1 = GetColumnArray(PatternTableId, 4);
            //        var data2 = GetColumnArray(PatternTableId, 5);
            //        var data3 = GetColumnArray(PatternTableId, 8);

            //        var label1 = 'TPD';
            //        var label2 = 'Qualifiable';
            //        var label3 = 'Qualifié';

            //        document.getElementById(PatternChart + 'ChartCardId').style.border = 'transparent';
            //        ChartJsLineThreeTraficHourDisplay(Title, PatternChart, labels, label1, data1, label2, data2, label3, data3, false);

            //        //
            //        var Title = 'Qualification du Temps de parcours dépassé';
            //        var PatternChart = PatternChartCommon + 'ControlLine';
            //        var labels = GetColumnArray(PatternTableId, 18);
            //        var data1 = GetColumnArray(PatternTableId, 10);
            //        var data2 = GetColumnArray(PatternTableId, 12);
            //        var data3 = GetColumnArray(PatternTableId, 14);
            //        var data4 = GetColumnArray(PatternTableId, 16);

            //        var label1 = 'TPD justifié';
            //        var label2 = 'TPD non-justifié';
            //        var label3 = 'Qualification impossible';
            //        var label4 = 'Parcours douteux';

            //        document.getElementById(PatternChart + 'ChartCardId').style.border = 'transparent';
            //        ChartJsLineFourTraficHourDisplay(Title, PatternChart, labels, label1, data1, label2, data2, label3, data3, label4, data4, false);

            //        var Title = 'Evolution du taux de fraude au parcours confirmée';
            //        var PatternChart = PatternChartCommon + 'RateLine';
            //        var labels = GetColumnArray(PatternTableId, 18);
            //        var data1 = GetColumnArray(PatternTableId, 11);
            //        var data2 = GetColumnArray(PatternTableId, 13);
            //        var data3 = GetColumnArray(PatternTableId, 15);

            //        var label1 = 'TPD justifié';
            //        var label2 = 'TPD non-justifié';
            //        var label3 = 'Qualification impossible';

            //        document.getElementById(PatternChart + 'ChartCardId').style.border = 'transparent';
            //        ChartJsLineThreeTraficHourDisplay(Title, PatternChart, labels, label1, data1, label2, data2, label3, data3, false);

            //        ShowGridReport('Grid_0000');
            //    }

            //    //Doughnut 0
            //    var Title = 'Taux du TPD par rapport au trafic';
            //    var PatternChart = PatternChartCommon + 'TotalDoughnut';
            //    var label00 = 'Temps de parcours dépassé';
            //    var label01 = '';

            //    var data = {
            //        datasets: [{
            //            data: [data00, data01],
            //            backgroundColor: ['#03045e', '#adb5bd'],
            //        }],

            //        labels: [label00]
            //    };

            //    document.getElementById(PatternChart + 'ChartCardId').style.border = 'transparent';
            //    ChartJsDoughnutOneDisplay(Title, PatternChart, data);

            //    ////Doughnut 1
            //    var Title = 'Taux des transactions qualifiables';
            //    var PatternChart = PatternChartCommon + 'QualifiableDoughnut';
            //    var label10 = 'A qualier (Vitesse <= 30Km)';
            //    var label11 = '';
            //    var data = {
            //        datasets: [{
            //            data: [data10, data11],
            //            backgroundColor: ['#0077b6', '#adb5bd'],
            //        }],
            //        labels: [label10]
            //    };
            //    document.getElementById(PatternChart + 'ChartCardId').style.border = 'transparent';
            //    ChartJsDoughnutOneDisplay(Title, PatternChart, data);

            //    //Doughnut 2
            //    var Title = 'Qualification du Temps de parcours dépassé';
            //    var PatternChart = PatternChartCommon + 'ControlDoughnut';
            //    var label20 = 'TPD justifié';
            //    var label21 = 'TPD non-justifié';
            //    var label22 = 'Qualification impossible';
            //    var label23 = 'Parcours douteux';

            //    var data = {
            //        datasets: [{
            //            data: [data20, data21, data22, data23],
            //            backgroundColor: ['#38b000', '#d90429', '#adb5bd', '#D75F05'],
            //        }],

            //        labels: [label20, label21, label22, label23]
            //    };
            //    document.getElementById(PatternChart + 'ChartCardId').style.border = 'transparent';
            //    ChartJsDoughnutOneDisplay(Title, PatternChart, data);

            //    //Doughnut 3
            //    var Title = 'Taux de fraude par rapport au trafic SF';
            //    var PatternChart = PatternChartCommon + 'RateDoughnut';
            //    var label30 = 'TPD non justifié';
            //    var label31 = '';
            //    var data = {
            //        datasets: [{
            //            data: [data30, data31],
            //            backgroundColor: ['#d90429', '#adb5bd'],
            //        }],
            //        labels: [label30]
            //    };
            //    document.getElementById(PatternChart + 'ChartCardId').style.border = 'transparent';
            //    ChartJsDoughnutOneDisplay(Title, PatternChart, data);

            //    //Doughnut 4
            //    var Title = 'Taux de fraude par rapport au trafic SF';
            //    var PatternChart = PatternChartCommon + 'RateSumDoughnut';
            //    var label40 = 'Fraude confirmée + Qualification impossible + Parcours douteux';
            //    var label41 = '';
            //    var data = {
            //        datasets: [{
            //            data: [data40, data41],
            //            backgroundColor: ['#d90429', '#adb5bd'],
            //        }],
            //        labels: [label40]
            //    };
            //    document.getElementById(PatternChart + 'ChartCardId').style.border = 'transparent';
            //    ChartJsDoughnutOneDisplay(Title, PatternChart, data);

            //    //Doughnut 5
            //    var Title = 'Fraude confirmée par classe';
            //    var PatternChart = PatternChartCommon + 'ControlClDoughnut';
            //    var label50 = 'VL';
            //    var label51 = 'PL1';
            //    var label52 = 'PL2';
            //    var label53 = '00';

            //    var data = {
            //        datasets: [{
            //            data: [data50, data51, data52, data53],
            //            backgroundColor: ['#D71A04', '#A104CC', '#257BCC', '#D7A5A5'],
            //        }],

            //        labels: [label50, label51, label52, label53]
            //    };
            //    document.getElementById(PatternChart + 'ChartCardId').style.border = 'transparent';
            //    ChartJsDoughnutOneDisplay(Title, PatternChart, data);

            //    //Doughnut 6
            //    var Title = 'Fraude confirmée par MP';
            //    var PatternChart = PatternChartCommon + 'ControlMpDoughnut';
            //    var label60 = 'Espèce';
            //    var label61 = 'Tlp Pré';
            //    var label62 = 'Tlp Post';
            //    var label63 = 'Autres';

            //    var data = {
            //        datasets: [{
            //            data: [data60, data61, data62, data63],
            //            backgroundColor: ['#EBE31D', '#EB7F35', '#BA5319', '#5E4D4B'],
            //        }],

            //        labels: [label60, label61, label62, label63]
            //    };
            //    document.getElementById(PatternChart + 'ChartCardId').style.border = 'transparent';
            //    ChartJsDoughnutOneDisplay(Title, PatternChart, data);

            //    //Doughnut 7
            //    var Title = 'Fraude confirmée par axe';
            //    var PatternChart = PatternChartCommon + 'ControlAxleDoughnut';
            //    var label70 = 'Kénitra Nord - Mdiq';
            //    var label71 = 'Sidi Allal Bahraoui - Oujda';
            //    var label72 = 'Agadir-Berrechid-Beni mellal';
            //    var label73 = 'Nassim-Safi';
            //    var label74 = 'Autres';

            //    var data = {
            //        datasets: [{
            //            data: [data70, data71, data72, data73, data74],
            //            backgroundColor: ['#70d6ff', '#ff70a6', '#ff9770', '#5b8e7d', '#e9ff70'],
            //        }],

            //        labels: [label70, label71, label72, label73, label74]
            //    };
            //    document.getElementById(PatternChart + 'ChartCardId').style.border = 'transparent';
            //    ChartJsDoughnutOneDisplay(Title, PatternChart, data);

            //    ShowGridReport('Grid_0001');
            //}

        },
        "ajax": {
            "url": "/Breach/BreachScopeCumulGet",
            "type": "GET",
            "datatype": "json",
            "data": {
                DateStringStart: DateStringStart,
                DateStringEnd: DateStringEnd
            }
        },
        "columns": [
            { "data": "IsValid" },//0
            { "data": "" },//1
            { "data": "" },//2
            { "data": "TotalTrafic" },//3

            { "data": "TotalBreachCe" },//4
            { "data": "TotalBreachCe" },//5

            { "data": "TotalQualified" },//6
            { "data": "TotalQualified" },//7

            { "data": "BreachStatusId1" },//8
            { "data": "BreachStatusId1" },//9
            { "data": "BreachStatusId2" },//10
            { "data": "BreachStatusId2" },//11

            { "mData": function vehicle(data, type, dataToSet) { return GetDigits(data.Day, 2) + GetDigits(data.Month, 2) + data.Year; } },//12 Detail
            { "data": "Price" },//13

            { "data": "BreachCategoryId01" },//14
            { "data": "BreachCategoryId01" },//15
            { "data": "BreachCategoryId02" },//16
            { "data": "BreachCategoryId02" },//17
            { "data": "BreachCategoryId03" },//18
            { "data": "BreachCategoryId03" },//19

            { "data": "BreachAxleIdA1" },//20
            { "data": "BreachAxleIdA1" },//21
            { "data": "BreachAxleIdA2" },//22
            { "data": "BreachAxleIdA2" },//23
            { "data": "BreachAxleIdA3" },//24
            { "data": "BreachAxleIdA3" },//25
            { "data": "BreachAxleIdA4" },//26
            { "data": "BreachAxleIdA4" },//27
            { "data": "BreachAxleIdA5" },//28
            { "data": "BreachAxleIdA5" },//29

            { "mData": function vehicle(data, type, dataToSet) { return GetDigits(data.Day, 2) + '/' + GetDigits(data.Month, 2); } },//30 Label
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

            { "width": "3%", "className": "text-right", "targets": 8 },
            { "width": "3%", "className": "text-right", "targets": 9 },
            { "width": "3%", "className": "text-right", "targets": 10 },
            { "width": "3%", "className": "text-right", "targets": 11 },

            { "width": "3%", "className": "text-center", "targets": 12 },
            { "width": "3%", "className": "text-right", "targets": 13 },

            { "width": "3%", "className": "text-right", "targets": 14 },
            { "width": "3%", "className": "text-right", "targets": 15 },
            { "width": "3%", "className": "text-right", "targets": 16 },
            { "width": "3%", "className": "text-right", "targets": 17 },
            { "width": "3%", "className": "text-right", "targets": 18 },
            { "width": "3%", "className": "text-right", "targets": 19 },

            { "width": "3%", "className": "text-right", "targets": 20 },
            { "width": "3%", "className": "text-right", "targets": 21 },
            { "width": "3%", "className": "text-right", "targets": 22 },
            { "width": "3%", "className": "text-right", "targets": 23 },
            { "width": "3%", "className": "text-right", "targets": 24 },
            { "width": "3%", "className": "text-right", "targets": 25 },
            { "width": "3%", "className": "text-right", "targets": 26 },
            { "width": "3%", "className": "text-right", "targets": 27 },
            { "width": "3%", "className": "text-right", "targets": 28 },
            { "width": "3%", "className": "text-right", "targets": 29 },

            { "width": "3%", "className": "text-center", "targets": 30 },

            { "targets": 0, "render": function (data, type, row) { return DataTableCertifiedInfoGet(data); } },
            { "targets": 1, "render": function (data, type, row) { return DataTableDateValueStartFromRowGet(row); } },
            { "targets": 2, "render": function (data, type, row) { return DataTableDateValueEndFromRowGet(row); } },
            { "targets": 3, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },

            { "targets": 4, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 5, "render": function (data, type, row) { return DataTablePercentageTwoThresholdsGet(data, row['TotalTrafic'], 2, 1, 3); } },

            { "targets": 6, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 7, "render": function (data, type, row) { return DataTablePercentageTwoThresholdsGet(data, row['TotalBreachCe'], 2, 1, 3); } },

            { "targets": 8, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 9, "render": function (data, type, row) { return DataTablePercentageTwoThresholdsGet(data, row['TotalQualified'], 2, 1, 3); } },
            { "targets": 10, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 11, "render": function (data, type, row) { return DataTablePercentageTwoThresholdsGet(data, row['TotalQualified'], 2, 1, 3); } },

            { "targets": 12, "render": function (data, type, row) { return DataTableButtonGet('BreachScopeDaySearch', data, '\'' + data + '\'', '', 'dt-btn-cl gc-bc1-cl', 'fas fa-eye btn-icon-cl gc-c1-cl', '') } },
            { "targets": 13, "render": function (data, type, row) { return DataTableFormatDoubleGet(data); } },

            { "targets": 14, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 15, "render": function (data, type, row) { return DataTablePercentageTwoThresholdsGet(data, row['BreachStatusId1'], 2, 1, 3); } },
            { "targets": 16, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 17, "render": function (data, type, row) { return DataTablePercentageTwoThresholdsGet(data, row['BreachStatusId1'], 2, 1, 3); } },
            { "targets": 18, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 19, "render": function (data, type, row) { return DataTablePercentageTwoThresholdsGet(data, row['BreachStatusId1'], 2, 1, 3); } },

            { "targets": 20, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 21, "render": function (data, type, row) { return DataTablePercentageTwoThresholdsGet(data, row['BreachStatusId1'], 2, 1, 3); } },
            { "targets": 22, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 23, "render": function (data, type, row) { return DataTablePercentageTwoThresholdsGet(data, row['BreachStatusId1'], 2, 1, 3); } },
            { "targets": 24, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 25, "render": function (data, type, row) { return DataTablePercentageTwoThresholdsGet(data, row['BreachStatusId1'], 2, 1, 3); } },
            { "targets": 26, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 27, "render": function (data, type, row) { return DataTablePercentageTwoThresholdsGet(data, row['BreachStatusId1'], 2, 1, 3); } },
            { "targets": 28, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 29, "render": function (data, type, row) { return DataTablePercentageTwoThresholdsGet(data, row['BreachStatusId1'], 2, 1, 3); } },

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

            //DataTableTotalIntGet(api, intVal, 2);
            //DataTableTotalIntGet(api, intVal, 3);
            //DataTableTotalIntGet(api, intVal, 5);
            //DataTableTotalIntGet(api, intVal, 8);
            //DataTableTotalIntGet(api, intVal, 10);
            //DataTableTotalIntGet(api, intVal, 12);
            //DataTableTotalIntGet(api, intVal, 14);
            //DataTableTotalIntGet(api, intVal, 16);

            //DataTableTotalIntGet(api, intVal, 21);
            //DataTableTotalIntGet(api, intVal, 22);
            //DataTableTotalIntGet(api, intVal, 23);
            //DataTableTotalIntGet(api, intVal, 24);
            //DataTableTotalIntGet(api, intVal, 25);
            //DataTableTotalIntGet(api, intVal, 26);
            //DataTableTotalIntGet(api, intVal, 27);
            //DataTableTotalIntGet(api, intVal, 28);
            //DataTableTotalIntGet(api, intVal, 29);
            //DataTableTotalIntGet(api, intVal, 30);

            //DataTableTotalPercentageGet(api, intVal, 3, 2, 4);
            //DataTableTotalPercentageGet(api, intVal, 5, 3, 6);
            //DataTableTotalPercentageGet(api, intVal, 8, 5, 9);

            //DataTableTotalPercentageGet(api, intVal, 10, 8, 11);
            //DataTableTotalPercentageGet(api, intVal, 12, 8, 13);
            //DataTableTotalPercentageGet(api, intVal, 14, 8, 15);
            //DataTableTotalPercentageGet(api, intVal, 16, 8, 17);

            //data00 = DataTableColumnPercentageGet(api, intVal, 3, 2);
            //data01 = (100 - data00).toFixed(2);

            //data10 = DataTableColumnPercentageGet(api, intVal, 5, 3);
            //data11 = (100 - data10).toFixed(2);

            //data20 = DataTableColumnPercentageGet(api, intVal, 10, 8);
            //data21 = DataTableColumnPercentageGet(api, intVal, 12, 8);
            //data22 = DataTableColumnPercentageGet(api, intVal, 14, 8);
            //data23 = DataTableColumnPercentageGet(api, intVal, 16, 8);

            //data30 = ((api.column(12).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0)) * 100 / (api.column(2).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0))).toFixed(1);
            //data31 = (100 - data30).toFixed(2);

            //data40 = ((api.column(12).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0)
            //    + api.column(14).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0)
            //    + api.column(16).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0)) * 100 / (api.column(2).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0))).toFixed(1);
            //data41 = (100 - data40).toFixed(2);

            //data50 = DataTableColumnPercentageGet(api, intVal, 21, 12);
            //data51 = DataTableColumnPercentageGet(api, intVal, 22, 12);
            //data52 = DataTableColumnPercentageGet(api, intVal, 23, 12);

            //data53Bar = ((api.column(21).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0)
            //    + api.column(22).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0)
            //    + api.column(23).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0)) * 100 / (api.column(12).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0))).toFixed(1);

            //data53 = (100 - data53Bar).toFixed(1);

            //data60 = DataTableColumnPercentageGet(api, intVal, 24, 12);
            //data61 = DataTableColumnPercentageGet(api, intVal, 25, 12);
            //data62 = DataTableColumnPercentageGet(api, intVal, 26, 12);
            //data63Bar = ((api.column(24).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0)
            //    + api.column(25).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0)
            //    + api.column(26).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0)) * 100 / (api.column(12).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0))).toFixed(1);

            //data63 = (100 - data63Bar).toFixed(1);

            //data70 = DataTableColumnPercentageGet(api, intVal, 27, 12);
            //data71 = DataTableColumnPercentageGet(api, intVal, 28, 12);
            //data72 = DataTableColumnPercentageGet(api, intVal, 29, 12);
            //data73 = DataTableColumnPercentageGet(api, intVal, 30, 12);
            //data74Bar = ((api.column(27).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0)
            //    + api.column(28).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0)
            //    + api.column(29).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0)
            //    + api.column(30).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0)) * 100 / (api.column(12).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0))).toFixed(1);

            //data74 = (100 - data74Bar).toFixed(1);
        }
    });
}

function BreachAnalyticHomeOpen() {
    BreachAllReportsHide();
    BreachAllParametersHide();
    MenuBarNavHighlight(1, 1, 0);
}

function BreachDashOpen() {
    BreachAllReportsHide();
    BreachAllParametersHide();
    MenuBarNavHighlight(1, 0, 0);

    ParamTitleSet('Tableau de bord des violations');

    //gloabl
    ShowReport('ParamReportId');
    ShowParent('TimeId');
    ShowParent('ZoneId');

    //OnChange
    ElementOnChangeSet('TimeId', 'BreachPresetGet()');
    ElementOnChangeSet('ZoneId', 'BreachPresetGet()');

    DateValueDefaultSet('DateStartId', 2);
    DateValueDefaultSet('DateEndId', 2);

    //OnClick
    //ElementOnClickSet('TimeId', 'BreachPresetGet()');
    //ElementOnClickSet('ZoneId', 'BreachPresetGet()');

    //$.ajax({
    //    url: "/Cert/RoleNameListGet",
    //    method: "POST",
    //    contentType: "application/json; charset=utf-8",
    //    async: true,
    //    success: function (data) {
    //        if (data.includes('Administrateur') || data.includes('TollAdmin') || data.includes('QualifPathSupervisor')) {

    //            DateValueDefaultSet('DateStartId', 2);
    //            DateValueDefaultSet('DateEndId', 2);

    //            ElementDropDownListReset('RegionId');
    //            ElementDropDownListReset('LSId');
    //            ElementDropDownListReset('StationNumberId');

    //            //DropDownListSet('TimeId', '01');
    //            //QualifTimePreset();

    //            //Actions
    //            //ParamActionBtnGet(0, 'Afficher', 'fas fa-eye', 'QualifObsTickIdDAllDisplay()');
    //        }
    //        else {
    //            if (data.includes('QualifPath')) {

    //                //Actions
    //                ParamActionBtnGet(0, 'Afficher', 'fas fa-eye', 'QualifObsTickIdDAllDisplay()');

    //                DateValueDefaultSet('DateStartId', 2);
    //                DateValueDefaultSet('DateEndId', 2);

    //                //DropDownListSet('TimeId', '07');
    //                //QualifTimePreset();
    //                //QualifObsTickIdDAllDisplay();
    //            }
    //        }
    //    }
    //});

    //QualifRateDayDisplay();

    //Connection
    NotiConnectionIdUpdate('Violations - Analyses - Tableau de bord');
}


function BreachPlateOpen() {
    BreachAllReportsHide();
    BreachAllParametersHide();
    MenuBarNavHighlight(0, 2, 2);

    //Title
    ParamTitleSet('Données d\'immatriculations');

    //gloabl
    ShowReport('ParamReportId');

    //Parents
    ShowParent('DateStartId');
    ShowParent('DateEndId');
    ShowParent('LicensePlateId');

    //Initialize
    DhmValueStartDefaultSet('DateStartId', 1)
    DhmValueEndDefaultSet('DateEndId', 1);

    //ParamAction
    ParamActionBtnGet(0, 'Afficher', 'fas fa-eye', 'BreachPlateDisplay()');
}


function BreachPlateDisplay() {
    var ActionBtnId = 'ParamActionBtnId0';
    var Icon = 'fas fa-eye btn-icon-m-cl gc-c1-cl';
    var IsMargin = true;

    //Inputs
    var DateStringStart = GetDhmStringFromDatePicker('DateStartId');
    var DateStringEnd = GetDhmStringFromDatePicker('DateEndId');
    var LicensePlate = GetElementValue('LicensePlateId');

    if (DateStringStart != '' && DateStringEnd != '') {
        BreachPlateGet(ActionBtnId, Icon, IsMargin, DateStringStart, DateStringEnd, LicensePlate);
    }
    else {
        ParamMessageErrorDisplay('Les dates de début et de fin sont obligatoires');
    };
}


function BreachPlateGet(ActionBtnId, Icon, IsMargin, DateStringStart, DateStringEnd, LicensePlate) {

    //Spin
    ActionSpin(ActionBtnId, IsMargin);

    //Set datatable patterns
    var Pattern = 'BreachPlate';
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
            "url": "/Breach/BreachPlateGet",
            "type": "GET",
            "datatype": "json",
            "data": {
                "DateStringStart": DateStringStart,
                "DateStringEnd": DateStringEnd,
                "LicensePlate": LicensePlate
            }
        },
        "columns": [
            { "data": "DhmBreach" }, //0
            { "data": "LicensePlate" }, //1
                   
            { "data": "BrandName" },//2
            { "data": "CarTypeName" },//3
            { "data": "Chassis" },//4

            { "data": "DriverIdentity" },//5
            { "data": "DriverLastName" },//6        
            { "data": "DriverFirstName" },//7
            { "data": "DriverAddress" },//8

            { "data": "DhmDeposit" },//9
            { "data": "DriverIdentity2" },//10
        ],
        "columnDefs": [
            { "width": "3%", "className": "text-center", "targets": 0 },
            { "width": "3%", "className": "text-left", "targets": 1 },

            { "width": "3%", "className": "text-left", "targets": 2 },
            { "width": "3%", "className": "text-left", "targets": 3 },
            { "width": "3%", "className": "text-left", "targets": 4 },

            { "width": "3%", "className": "text-left", "targets": 5 },
            { "width": "3%", "className": "text-left", "targets": 6 },
            { "width": "3%", "className": "text-left", "targets": 7 },
            { "width": "3%", "className": "text-left", "targets": 8 },

            { "width": "3%", "className": "text-center", "targets": 9 },
            { "width": "3%", "className": "text-left", "targets": 10 },

            { "targets": 0, "render": function (data, type, row) { return DataTableDateValueFromRowGet(row); } },
            { "targets": 1, "render": function (data, type, row) { return data; } },
            { "targets": 2, "render": function (data, type, row) { return data; } },

            { "targets": 3, "render": function (data, type, row) { return data; } },
            { "targets": 4, "render": function (data, type, row) { return data; } },

            { "targets": 5, "render": function (data, type, row) { return data; } },
            { "targets": 6, "render": function (data, type, row) { return data; } },
            { "targets": 7, "render": function (data, type, row) { return data; } },
            { "targets": 8, "render": function (data, type, row) { return data; } },

            { "targets": 9, "render": function (data, type, row) { return GetDhmValueFromDataTableDate(data); } },
            { "targets": 10, "render": function (data, type, row) { return data; } },
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


        }
    });
}


function BreachRepeatOpen() {
    BreachAllReportsHide();
    BreachAllParametersHide();
    MenuBarNavHighlight(0, 1, 2);

    //Title
    ParamTitleSet('Liste des récidivistes par plaque');

    //gloabl
    ShowReport('ParamReportId');

    //Parents
    ShowParent('DateStartId');
    ShowParent('DateEndId');
    ShowParent('LicensePlateId');
    ShowParent('RepeatStatusId');    
    ShowParent('LawyerId');

    //Initialize
    DateValueDefaultSet('DateStartId', 7)
    DateValueDefaultSet('DateEndId', 1);

    //ParamAction
    ParamActionBtnGet(0, 'Afficher', 'fas fa-eye', 'BreachRepeatDisplay()');
}


function BreachRepeatDisplay() {
    var ActionBtnId = 'ParamActionBtnId0';
    var Icon = 'fas fa-eye';
    var IsMargin = true;

    //Inputs
    var DateStringStart = GetDateStringFromDatePicker('DateStartId');
    var DateStringEnd = GetDateStringFromDatePicker('DateEndId');
    var LicensePlate = GetElementValue('LicensePlateId');
    var RepeatStatusId = ElementDropDownListValueGet('RepeatStatusId');
    var LawyerId = ElementDropDownListValueGet('LawyerId');
    
    BreachRepeatGet(ActionBtnId, Icon, IsMargin, DateStringStart, DateStringEnd, LicensePlate, RepeatStatusId, LawyerId);
}


function BreachRepeatGet(ActionBtnId, Icon, IsMargin, DateStringStart, DateStringEnd, LicensePlate, RepeatStatusId, LawyerId) {

    //Spin
    ActionSpin(ActionBtnId, IsMargin);

    //Set datatable patterns
    var Pattern = 'BreachRepeat';
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
            "url": "/Breach/BreachRepeatGet",
            "type": "GET",
            "datatype": "json",
            "data": {
                "DateStringStart": DateStringStart,
                "DateStringEnd": DateStringEnd,
                "LicensePlate": LicensePlate,
                "RepeatStatusId": RepeatStatusId,
                "LawyerId": LawyerId                
            }
        },
        "columns": [
            { "data": "LicensePlate" }, //0

            { "data": "BreachCount" },//1
            { "data": "BreachCount01" },//2
            { "data": "BreachCount02" },//3
            { "data": "BreachDhmUpdate" },//4
            { "data": "DhmCloseLast" },//5
            { "data": "BreachSum" },//6  
            { "data": "Rate" },//7

            { "data": "Fees" },//8
            { "data": "Damage" },//9
            { "data": "Total" },//10

            { "data": "LicensePlate" },//11
            { "data": "LicensePlate" },//12

            { "data": "RepeatStatusName" },//13
            { "data": "DhmValue" },//14
            { "data": "CreatedBy" },//15
            { "data": "RepeatComment" },//16
            { "data": "LawyerFullName" },//17
        ],
        "columnDefs": [
            { "width": "3%", "className": "text-center", "targets": 0 },

            { "width": "3%", "className": "text-right", "targets": 1 },
            { "width": "3%", "className": "text-right", "targets": 2 },
            { "width": "3%", "className": "text-right", "targets": 3 },
            { "width": "3%", "className": "text-center", "targets": 4 },
            { "width": "3%", "className": "text-center", "targets": 5 },
            { "width": "3%", "className": "text-right", "targets": 6 },
            { "width": "3%", "className": "text-right none", "targets": 7 },

            { "width": "3%", "className": "text-right none", "targets": 8 },
            { "width": "3%", "className": "text-right none", "targets": 9 },
            { "width": "3%", "className": "text-right", "targets": 10 },

            { "width": "3%", "className": "text-center", "targets": 11 },
            { "width": "3%", "className": "text-center", "targets": 12 },

            { "width": "3%", "className": "text-left", "targets": 13 },
            { "width": "3%", "className": "text-center", "targets": 14 },
            { "width": "3%", "className": "text-left", "targets": 15 },
            { "width": "3%", "className": "text-left", "targets": 16 },
            { "width": "3%", "className": "text-left", "targets": 17 },

            { "targets": 0, "render": function (data, type, row) { return data; } },

            { "targets": 1, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 2, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 3, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 4, "render": function (data, type, row) { return GetDhmValueFromDataTableDate(data); } },
            { "targets": 5, "render": function (data, type, row) { return GetDhmValueFromDataTableDate(data); } },
            { "targets": 6, "render": function (data, type, row) { return data; } },
            { "targets": 7, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },

            { "targets": 8, "render": function (data, type, row) { return data; } },
            { "targets": 9, "render": function (data, type, row) { return data; } },
            { "targets": 10, "render": function (data, type, row) { return data; } },

            {
                "targets": 11, "render": function (data, type, row) {
                    return DataTableButtonGet('BreachListSearch', data, '\'' + data + '\'', '', 'dt-btn-cl gc-bc1-cl', 'fas fa-eye btn-icon-cl gc-c1-cl', '')
                }
            },
            {
                "targets": 12, "render": function (data, type, row) {
                    var PatternForm = 'Edit';
                    var Icon = 'fas fa-edit';
                    var Label = '';
                    var RowId = data;

                    var OnClick = 'BreachRepeatFormLoad(\'' + Pattern + '\',\'' + PatternForm + '\', \'' +  row['LicensePlate'] + '\')';

                    return DataTableFormBtnIdGet(Pattern, PatternForm, RowId, Label, OnClick, Icon);
                }
            },

            { "targets": 13, "render": function (data, type, row) { return data; } },
            { "targets": 14, "render": function (data, type, row) { return GetDateValueFromDataTableDate(data); } },
            { "targets": 15, "render": function (data, type, row) { return data; } },
            { "targets": 16, "render": function (data, type, row) { return data; } },
            { "targets": 17, "render": function (data, type, row) { return data; } },
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

            DataTableTotalIntGet(api, intVal, 6);
            DataTableTotalIntGet(api, intVal, 8);
            DataTableTotalIntGet(api, intVal, 9);
            DataTableTotalIntGet(api, intVal, 10);
        }
    });
}


function BreachRepeatFormLoad(Pattern, PatternForm, LicensePlate) {

    //Sert FormIndex
    var FormIndex = 1;

    var ActionBtnId = 'BreachRepeatBtnId' + LicensePlate;
    var Icon = 'fas fa-edit';

    //Spin
    ActionBtnSpin(ActionBtnId);

    HideReport('BreachRepeatEditModalDialogReportId');

    //Style
    document.getElementById(Pattern + PatternForm + 'ModalDialogReportId').style.width = '95%';
    document.getElementById(Pattern + PatternForm + 'ModalDialogReportId').style.marginLeft = 'auto';
    document.getElementById(Pattern + PatternForm + 'ModalDialogReportId').style.marginTop = 'auto';
    document.getElementById(Pattern + PatternForm + 'ModalDialogReportId').style.maxWidth = '1900px';

    //Fill
    $('#LicensePlateId' + FormIndex).text(LicensePlate);

    //Set inputs
    document.getElementById('CommentId' + FormIndex).value = '';

    //Test
    var Label = 'Mettre à jour';
    var IconIn = 'far fa-save';
    var PatternIn = Pattern + 'Edit';
    var RowId = LicensePlate + ', ' + FormIndex;

    //Action
    var OnClick = PatternIn + '(' + RowId + ')';
    ModalActionBtnGet(PatternIn, Label, IconIn, OnClick);

    //Set drop down lists
    HtmlDropDownListNameOnlyXorFill('RepeatStatusId' + FormIndex, '99', '/Qualif/ParamRepeatStatusGet', 'RepeatStatusId', 'RepeatStatusName');
    HtmlDropDownListNameOnlyXorFill('LawyerId' + FormIndex, 1, '/Qualif/ParamLawyersGet', 'LawyerId', 'LawyerFullName');

    //Parents
    ShowParent('RepeatStatusId' + FormIndex);
    ShowParent('LawyerId' + FormIndex);

    //Initialize
    DateValueDefaultSet('DateId' + FormIndex, 0);

    //ShowTableReport
    ShowTableReport('BreachRepeatHandle');

    //Get
    BreachRepeatHandleGet(LicensePlate);

    ShowReport('BreachRepeatEditModalDialogReportId');
}


function RepeatStatusOnChange() {

    var FormIndex = '1';
    var RepeatStatusId = ElementDropDownListValueGet('RepeatStatusId' + FormIndex);

    HideParent('LawyerId');

    if (RepeatStatusId == '07') {//Matrice
        ShowParent('LawyerId');
    }    
}


function BreachRepeatHandleGet(LicensePlate) {

    //Set datatable patterns
    var Pattern = 'BreachRepeatHandle';
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
            "url": "/Breach/BreachRepeatHandleGet",
            "type": "GET",
            "datatype": "json",
            "data": {
                "LicensePlate": LicensePlate
            }
        },
        "columns": [
            { "data": "LicensePlate" }, //0
            { "data": "RepeatStatusName" }, //1
            { "data": "RepeatComment" }, //2

            { "data": "DhmCreation" }, //3
            { "data": "CreatedBy" },//4
            { "data": "LawyerFullName" },//5
        ],
        "columnDefs": [
            { "width": "3%", "className": "text-center", "targets": 0 },
            { "width": "3%", "className": "text-center", "targets": 1 },
            { "width": "3%", "className": "text-center", "targets": 2 },
            { "width": "3%", "className": "text-center", "targets": 3 },
            { "width": "3%", "className": "text-left", "targets": 4 },
            { "width": "3%", "className": "text-left", "targets": 5 },

            { "targets": 0, "render": function (data, type, row) { return data; } },
            { "targets": 1, "render": function (data, type, row) { return data; } },
            { "targets": 2, "render": function (data, type, row) { return data; } },

            { "targets": 3, "render": function (data, type, row) { return GetDateValueNullableFromDataTableDate(data); } },
            { "targets": 4, "render": function (data, type, row) { return data; } },
            { "targets": 5, "render": function (data, type, row) { return data; } },
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

