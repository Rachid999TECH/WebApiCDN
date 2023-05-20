
function ProjectHomeOpen() {

    //Hide all
    ProjectAllReportsHide();
    ProjectAllParametersHide();
    MenuBarHighlight(0, 7);

    //Features
    ShowReport('Page0_PageReportId');
    //document.getElementById('Grid0_GridCol0Id').setAttribute('Class', 'col');
    //document.getElementById('Grid0_GridCol1Id').setAttribute('Class', 'col');
    //document.getElementById('Grid0_GridCol2Id').setAttribute('Class', '');

    //document.getElementById('Grid1_GridCol0Id').setAttribute('Class', 'col');
    //document.getElementById('Grid1_GridCol1Id').setAttribute('Class', 'col');
    //document.getElementById('Grid1_GridCol2Id').setAttribute('Class', '');

    //Menus
    //CommMenusGet('50');


    //Fill
    HtmlDropDownListNameOnlyLabelFill('ProjectId1', '0', '/Project/ProjectsGet', 'ProjectId', 'ProjectName', 'Select Project');

    HtmlDropDownListNameOnlyLabelFill('FunctionCategoryId4', '0', '/Project/ProjectFunctionCategoriesGet', 'FunctionCategoryId', 'FunctionCategoryName', 'Select Category');
    HtmlDropDownListNameOnlyLabelFill('FunctionTypeId4', '0', '/Project/ProjectFunctionTypesGet', 'FunctionTypeId', 'FunctionTypeName', 'Select Type');

    HtmlDropDownListNameOnlyLabelFill('ShiftId', '0', '/Project/ProjectShiftsGet', 'ShiftId', 'ShiftName', 'Select Post');
    HtmlDropDownListNameOnlyLabelFill('ManTypeId', '0', '/Project/ProjectManTypesGet', 'ManTypeId', 'ManTypeName', 'Select Type');
    HtmlDropDownListNameOnlyLabelFill('UnityId', '0', '/Common/ParamUnitiesGet', 'UnityId', 'UnityName', 'Select Unity');    
    HtmlDropDownListNameOnlyLabelFill('SponsorId', '0', '/Project/SpensorsGet', 'SponsorId', 'SponsorName', 'Select Sponsor');
    HtmlDropDownListNameOnlyLabelFill('ProjectManagerId', '0', '/Project/ProjectManagersGet', 'ProjectManagerId', 'ProjectManagerName', 'Select Project Manager');
    HtmlDropDownListNameOnlyLabelFill('CompanyId', '0', '/Project/CompaniesGet', 'CompanyId', 'CompanyName', 'Select Company');
    HtmlDropDownListNameOnlyLabelFill('DurationTimeId', '0', '/Project/DurationTimesGet', 'DurationTimeId', 'DurationTimeName', 'Select Duration');
    HtmlDropDownListNameOnlyLabelFill('UserIdProject', '0', '/Common/CommonUsersGet', 'UserId', 'UserName', 'Select User');
    HtmlDropDownListNameOnlyLabelFill('ContractorId', '0', '/Project/ProjectContractorsGet', 'ContractorId', 'ContractorName', 'Select Client');
    HtmlDropDownListNameOnlyLabelFill('EventCategoryId', '0', '/Project/ProjectEventCategoriesGet', 'EventCategoryId', 'EventCategoryName', 'Select Category');
    HtmlDropDownListNameOnlyLabelFill('ResponsibleId', '0', '/Project/ProjectResponsiblesGet', 'ResponsibleId', 'ResponsibleName', 'Select Responsible');
    HtmlDropDownListNameOnlyLabelFill('UpdateStatusId', '0', '/Param/ParamUpdateStatusGet', 'UpdateStatusId', 'UpdateStatusName', 'Select Status');

    HtmlDropDownListNameOnlyLabelFill('SponsorId5', '0', '/Project/SpensorsGet', 'SponsorId', 'SponsorName', 'Select Sponsor');    
    HtmlDropDownListNameOnlyLabelFill('ProjectManagerId5', '0', '/Project/ProjectManagersGet', 'ProjectManagerId', 'ProjectManagerName', 'Select Project Manager');    
    HtmlDropDownListNameOnlyLabelFill('CompanyId5', '0', '/Project/CompaniesGet', 'CompanyId', 'CompanyName', 'Select Company');    
    HtmlDropDownListNameOnlyLabelFill('DurationTimeId5', '0', '/Project/DurationTimesGet', 'DurationTimeId', 'DurationTimeName', 'Select Duration');
    
    
    HtmlDropDownListNameOnlyLabelFill('EventCategoryId2', '0', '/Project/ProjectEventCategoriesGet', 'EventCategoryId', 'EventCategoryName', 'Select Category');

    ElementDropDownListLabelReset('BuildingId1', 'All');
    ElementDropDownListLabelReset('BlockId1', 'All');
    ElementDropDownListLabelReset('SubBlockId1', 'All');
    ElementDropDownListLabelReset('StageId1', 'All');
    ElementDropDownListLabelReset('LotId1', 'All');
    ElementDropDownListLabelReset('ZoneId1', 'All');
    ElementDropDownListLabelReset('StepId1', 'All');
    ElementDropDownListLabelReset('DisciplineId1', 'All');
    ElementDropDownListLabelReset('PhaseId1', 'All');
    ElementDropDownListLabelReset('SubLotId1', 'All');
    ElementDropDownListLabelReset('SubPhaseId1', 'All');

    //Onchange
    ElementOnChangeSet('FunctionCategoryId', "ProjectFunctionsGet('0', '')");
    ElementOnChangeSet('ParamId', 'ProjectParamOpen()');

    ElementOnChangeSet('PhaseId1', "ProjectProgressInputsDisplay('1')");
    ElementOnChangeSet('SubPhaseId1', "ProjectProgressInputsDisplay('1')");
    ElementOnChangeSet('BuildingId1', "ProjectProgressInputsDisplay('1')");
    ElementOnChangeSet('BlockId1', "ProjectProgressInputsDisplay('1')");
    ElementOnChangeSet('SubBlockId1', "ProjectProgressInputsDisplay('1')");
    ElementOnChangeSet('ZoneId1', "ProjectProgressInputsDisplay('1')");
    ElementOnChangeSet('StageId1', "ProjectProgressInputsDisplay('1')");
    ElementOnChangeSet('LotId1', "ProjectProgressInputsDisplay('1')");
    ElementOnChangeSet('SubLotId1', "ProjectProgressInputsDisplay('1')");
    ElementOnChangeSet('DisciplineId1', "ProjectProgressInputsDisplay('1')");
    ElementOnChangeSet('StepId1', "ProjectProgressInputsDisplay('1')");
    
    //ElementOnChangeSet('FunctionCategoryId', "ProjectManReset()");
    //CollabActionOpen();

    //Tour
    /*ElementOnClickSet('tb-tour-id', 'CollabActionTourGet()');*/

    //Form
    //var FormIndex = '1';
    //HtmlDropDownListFill('ModuleId' + FormIndex, '0', '/Collab/CollabModulesGet', 'ModuleId', 'ModuleName');
    //HtmlDropDownListWithInputFill('PluginId' + FormIndex, '0', '/Collab/CollabPluginsGet', 'PluginId', 'PluginName', '0');
    //HtmlDropDownListFill('EmergencyId' + FormIndex, '0', '/Param/ParamEmergenciesGet', 'EmergencyId', 'EmergencyName');
    //HtmlDropDownListFill('UpdateStatusId' + FormIndex, '0', '/Home/HomeUpdateGetUpdateStatus', 'UpdateStatusId', 'UpdateStatusName');

    //HtmlDropDownListFill('ChannelId' + FormIndex, '0', '/Collab/CollabChannelsGet', 'ChannelId', 'ChannelName');
    //HtmlDropDownListFill('TeamId' + FormIndex, '0', '/Home/DimTeamsGet', 'TeamId', 'TeamName');
    //HtmlDropDownListNameOnlyFill('VersionId' + FormIndex, '0', '/Common/ParamVersVersionGet', 'VersionId', 'VersionNumber');
    //HtmlDropDownListNameOnlyFill('HandledById' + FormIndex, '0', '/Param/ParamUsersTollAdminGet', 'UserId', 'FullName');

    //$.ajax({
    //    url: "/Common/RoleNameListGet",
    //    method: "POST",
    //    contentType: "application/json; charset=utf-8",
    //    async: true,
    //    success: function (data) {
    //        if (data.includes('Administrateur') || data.includes('ProjectAdministrator')) {
    //            HtmlDropDownListNameOnlyFill('ProjectId', '0', '/Project/ProjectsGet', 'ProjectId', 'ProjectName');
    //        }
    //        else {
                
    //        }
    //    }
    //});


    //ProjectProgressInputsDisplay('1');
}



function ProjectAllReportsHide() {
    HideReport('HomeReportId');
    HideReport('Page0_PageReportId');
    HideReport('ParamReportId');

    //Tables
    HideTableReport('ProjectMan');
    HideTableReport('ProjectAdminProject');    

    HideTableReport('ProjectAdminZone');
    HideTableReport('ProjectAdminBuilding');
    HideTableReport('ProjectAdminCompany');
    HideTableReport('ProjectAdminSponsor');
    HideTableReport('ProjectAdminProjectManager');
    HideTableReport('ProjectAdminProjectFunction');
    HideTableReport('ProjectAdminStage');
    HideTableReport('ProjectAdminFunction');
    HideTableReport('ProjectProgress');
    HideTableReport('ProjectFunctionProjects');
    HideTableReport('ProjectAdminFunctionProjects');   
    HideTableReport('ProjectAdminFunctionLots');   
    HideTableReport('ProjectAdminUserProjects');
    HideTableReport('ProjectAdminUserBuildings');
    HideTableReport('ProjectAdminUserPhases');
    HideTableReport('ProjectSenior');
    HideTableReport('ProjectReport');
    HideTableReport('ProjectAdminUserFunctions');
    HideTableReport('ProjectAdminUserLots');
    HideTableReport('ProjectEvent');
    
    HideTableReport('ParamCalendar');

    HideTableReport('ProjectProgressProjectCumul');
    HideTableReport('ProjectProgressProjectWeek');
    HideTableReport('ProjectProgressBuildingCumul');
    HideTableReport('ProjectProgressBuildingWeek');    
    HideTableReport('ProjectProgressLotCumul');
    HideTableReport('ProjectProgressLotWeek');
    HideTableReport('ProjectProgressPhaseCumul');
    HideTableReport('ProjectProgressCompanyCumul');
    HideTableReport('ProjectProgressCompanyWeek');

    HideTableReport('ProjectManProjectDay');
    HideTableReport('ProjectManProjectCumul');
    HideTableReport('ProjectAdminCompanyLots');
    HideTableReport('ProjectEventDaily');
    
    HideReport('ProjectProgressFilterId');

    //Grids
    HideGridReport('Grid_0000');
    HideGridReport('Grid_0001');
    HideGridReport('Grid_0002');
    HideGridReport('Grid_0003');
    HideGridReport('Grid_0004');
    HideGridReport('Grid_0005');
    HideGridReport('Grid_0006');
    HideGridReport('Grid_0008');
    HideGridReport('Grid_0009');
    HideGridReport('Grid_0010');
    HideGridReport('Grid_0011');

    //Navs
    HideNavReport('Nav_0000');
}


function ProjectAllParametersHide() {

    HideParent('PerimeterId');
    HideParent('TimeId'); 

    HideParent('KeywordId');
    HideParent('ProjectId');
    HideParent('ZoneId');
    HideParent('BuildingId');
    HideParent('BlockId');
    HideParent('SubBlockId');
    HideParent('StageId');
    HideParent('FunctionId');
    HideParent('ShiftId');
    HideParent('ManTypeId');
    HideParent('UnityId');
    HideParent('NameId');
    HideParent('ParamId');
    HideParent('CodeId');
    HideParent('CommentId');
    HideParent('QuantityId');
    HideParent('DateId');
    HideParent('CompanyId');

    HideParent('BudgetMoneyId');
    HideParent('BudgetHoursId');
    HideParent('DhmValueStartThId');
    HideParent('DurationTimeId');
    HideParent('DurationNumberId');
    HideParent('DhmValueStartRealId');
    HideParent('DhmValueEndRealId');
    HideParent('SponsorId');
    HideParent('ProjectManagerId');
    HideParent('TaxRateId');
    HideParent('LotId');
    HideParent('ActivityId');

    HideParent('DateStartId');
    HideParent('DateEndId');
    HideParent('FunctionCategoryId');
    HideParent('UserIdProject');
    HideParent('FunctionTypeId');
    HideParent('ContractorId');
    HideParent('EventCategoryId');
    HideParent('StepId');
    HideParent('DisciplineId');
    HideParent('PhaseId');
    HideParent('SubPhaseId');
    HideParent('SubLotId');
    HideParent('IsChartId');
    HideParent('CalendarTypeId');
    HideParent('IsAppliedId');
    HideParent('FileId');   
    HideParent('UpdateStatusId');     
    HideParent('ResponsibleId');  
    HideParent('EventLocationId');  

    HideReport('ParamActionContainerId0');
    HideReport('ParamActionContainerId1');
    HideReport('ParamActionContainerId2');
}

function ProjectManHomeOpen() {
    ProjectAllReportsHide();
    ProjectAllParametersHide();
    MenuBarNavHighlight(2, 2, 1);

    //Reset
    ProjectProgressInputsMultipleReset(''); 

    HtmlDropDownListWithInputNameOnlyLabelFill('PerimeterId', 0, '/Param/ParamZonesGet', 'ZoneId', 'ZoneName', '011', 'Select Scope');
    HtmlDropDownListWithInputNameOnlyLabelFill('TimeId', 0, '/Param/ParamTimesGet', 'TimeId', 'TimeName', '011', 'Select Period');

    //Defautl
    ProjectManOpen();
}

function ProjectManOpen() {
    ProjectAllReportsHide();
    ProjectAllParametersHide();
    MenuBarNavHighlight(2, 0, 1);

    ParamTitleSet('ManPower');
    ShowReport('ParamReportId');

    //ShowParents
    ShowParent('DateStartId');
    ShowParent('DateEndId');
    ShowParent('ProjectId');
    ShowParent('FunctionCategoryId');
    ShowParent('FunctionTypeId');
    ShowParent('FunctionId');
    ShowParent('BuildingId');
    ShowParent('LotId');

    DateValueDefaultSet('DateStartId', 0);
    DateValueDefaultSet('DateEndId', 0);

    //Fill
    //ProjectsSecGet('0', '');

    //OnClick
    //ElementOnClickSet('ProjectId', "ProjectBuildingsSecGet('0', '')");
    //ElementOnClickSet('FunctionTypeId', "ProjectFunctionsSecGet('0', '')");

    //OnChange
    ElementOnChangeSet('FunctionId', "ProjectProgressInputsDisplay('')");
    //ElementOnChangeSet('ProjectId', "ProjectBuildingsSecGet('0', '')");
    //ElementOnChangeSet('ProjectId', "ProjectLotsSecGet('0', '')");

    //ElementOnChangeSet('FunctionTypeId', "ProjectFunctionsSecGet('0', '')");
    
    /*ElementOnChangeSet('FunctionCategoryId', "ProjectManReset()");*/

    //Action
    ParamActionBtnGet(0, 'Display', 'fas fa-eye', "ProjectManDisplay()");
    ParamActionBtnGet(2, 'Reset', 'fas fa-power-off', "ProjectProgressInputsMultipleReset('')");
    //
    //ElementDropDownListLabelReset('BuildingId', 'Bâtiment');
}


function ProjectManReset() {

    ParamMessageReset();

    var FunctionCategoryId = ElementDropDownListValueGet('FunctionCategoryId');  

    if (FunctionCategoryId == '1') {//Encadrement
        //ShowParents
        ShowParent('DateStartId');
        ShowParent('DateEndId');
        ShowParent('ProjectId');
        HideParent('BuildingId');
        ShowParent('FunctionCategoryId');
        ShowParent('FunctionTypeId');
        ShowParent('FunctionId');
        HideParent('ShiftId');

        DateValueDefaultSet('DateStartId', 6);
        DateValueDefaultSet('DateEndId', 0);

        //ProjectFunctionsSecGet('0', '');
    }
    else {
        //ShowParents
        ShowParent('DateStartId');
        ShowParent('DateEndId');
        ShowParent('ProjectId');
        ShowParent('BuildingId');
        ShowParent('FunctionCategoryId');
        HideParent('FunctionTypeId');
        ShowParent('FunctionId');
        ShowParent('ShiftId');
        //ShowParent('LotId');

        ElementDropDownListSet('FunctionTypeId', '1');
        DateValueDefaultSet('DateStartId', 0);
        DateValueDefaultSet('DateEndId', 0);

        //ProjectFunctionsSecGet('0', '');
    }  
}

function ProjectManDisplay() {

    var ProjectIds = ElementDropDownListValueMultipleGet('ProjectId');
    var FunctionCategoryIds = ElementDropDownListValueMultipleGet('FunctionCategoryId');
    var FunctionTypeIds = ElementDropDownListValueMultipleGet('FunctionTypeId');
    var FunctionIds = ElementDropDownListValueMultipleGet('FunctionId');

    var ShiftId = ElementDropDownListValueGet('ShiftId');
    var IsChart = ElementBooleanGet('IsChartId');
    
    var DateStartString = ElementDateStringFromDatePickerGet('DateStartId');
    var DateEndString = ElementDateStringFromDatePickerGet('DateEndId');

    var ActionBtnId = 'ParamActionBtnId0';
    var Icon = 'fas fa-eye';
    var IsMargin = true;

    if (FunctionCategoryIds.indexOf('1') !== -1) {
        ProjectSeniorGet(ActionBtnId, Icon, IsMargin, IsChart, DateStartString, DateEndString, ProjectIds, FunctionCategoryIds, FunctionTypeIds, FunctionIds);
    }
    if (FunctionCategoryIds.indexOf('2') !== -1 || FunctionCategoryIds.indexOf('3') !== -1) {
        var BuildingIds = ElementDropDownListValueMultipleGet('BuildingId');
        ProjectManGet(ActionBtnId, Icon, IsMargin, IsChart, DateStartString, DateEndString, ProjectIds, BuildingIds, FunctionCategoryIds, FunctionIds, ShiftId);
    }
}

function ProjectManGet(ActionBtnId, Icon, IsMargin, IsChart, DateStartString, DateEndString, ProjectIds, BuildingIds, FunctionCategoryIds, FunctionIds, ShiftId) {

    //Spin
    ActionSpin(ActionBtnId, IsMargin);

    var Pattern = 'ProjectMan';
    var PatternTableId = Pattern + 'TableId';
    var PatternTableReportId = Pattern + 'TableReportId';

    HideTableReport('ProjectSenior');
    HideReport(PatternTableReportId);


    //charts
    var data00 = 0;
    var data01 = 0;

    $('#' + PatternTableId).DataTable().destroy();;
    $('#' + PatternTableId).DataTable({
        "dom": 'Bfrtip',
        "buttons": {
            buttons: [
                {
                    text: 'Tout valider',
                    action: function (e, dt, node, config) {
                        ProjectManAllValidate(DateStartString, DateEndString, ProjectId, BuildingId, FunctionCategoryId, FunctionId, ShiftId);
                    }
                },
                {
                    text: 'PDF',
                    action: function (e, dt, node, config) {
                        var FileType = 'PDF';
                        ProjectManExport(DateStartString, DateEndString, ProjectId, BuildingId, FunctionCategoryId, FunctionId, ShiftId, FileType);
                    }
                },
                {
                    text: 'Excel',
                    action: function (e, dt, node, config) {
                        var FileType = 'Excel';
                        ProjectManExport(DateStartString, DateEndString, ProjectId, BuildingId, FunctionCategoryId, FunctionId, ShiftId, FileType);
                    }
                }
            ]
        },
        //"dom": 'Bfrtip',
        //"buttons": [
        //    'excel'
        //],
        "initComplete": function (settings, json) {
            ShowReport(PatternTableReportId);
            ActionBtnSet(ActionBtnId, Icon, IsMargin);

            //HideReport('ProjectManTableCardHeaderId');

            //if (IsChart == true) {
            //    var PatternChartCommon = 'ProjectMan';
            //    //Doughnut 0
            //    var Title = 'Taux de consommation';
            //    var PatternChart = PatternChartCommon + 'ManRateDoughnut';
            //    var label00 = 'Entreprise';
            //    var label01 = 'Particulier';

            //    var data = {
            //        datasets: [{
            //            data: [data00, data01],
            //            backgroundColor: ['#03045e', '#adb5bd'],
            //        }],

            //        labels: [label00, label01]
            //    };

            //    document.getElementById(PatternChart + 'ChartCardId').style.border = 'transparent';
            //    ChartJsDoughnutOneDisplay(Title, PatternChart, data);
            //}
        },
        "ajax": {
            "url": "/Project/ProjectManGet",
            "type": "GET",
            "datatype": "json",
            "data": {
                DateStartString: DateStartString,
                DateEndString: DateEndString,
                ProjectIds: ProjectIds,
                BuildingIds: BuildingIds,
               // LotId: LotId,
                FunctionCategoryIds: FunctionCategoryIds,
                FunctionIds: FunctionIds,
                ShiftId: ShiftId
            }
        },
        "columns": [
            { "data": "ProjectName" },//0
            { "data": "BuildingName" },//1
/*            { "data": "LotName" },//2*/
            { "data": "FunctionCategoryName" },//2       
            { "data": "FunctionName" },//3
            { "data": "DhmValue" },//4
            { "data": "ShiftName" },//5
            
            { "mData": function vehicle(data, type, dataToSet) { return GetDigits(data.Day, 2) + GetDigits(data.Month, 2) + data.Year; } },//6 QuantityD
            { "mData": function vehicle(data, type, dataToSet) { return GetDigits(data.Day, 2) + GetDigits(data.Month, 2) + data.Year; } },//7 QuantityI
            { "mData": function vehicle(data, type, dataToSet) { return GetDigits(data.Day, 2) + GetDigits(data.Month, 2) + data.Year; } },//8 Save

            { "data": "DhmCreation" },//9
            { "data": "DhmModification" },//10
            { "data": "DhmValidation" },//11

            { "data": "CreatedBy" },//12
            { "data": "ModifiedBy" },//13
            { "data": "ValidatedBy" },//14

            { "mData": function vehicle(data, type, dataToSet) { return GetDigits(data.Day, 2) + GetDigits(data.Month, 2) + data.Year; } },//15 IsValid
        ],
        "columnDefs": [
            { "width": "3%", "className": "text-left", "targets": 0 },
            { "width": "3%", "className": "text-left", "targets": 1 },
            /*{ "width": "3%", "className": "text-left", "targets": 2 },*/
            { "width": "3%", "className": "text-left", "targets": 2 },
            { "width": "3%", "className": "text-left", "targets": 3 },
            { "width": "3%", "className": "text-center", "targets": 4 },
            { "width": "3%", "className": "text-center", "targets": 5 },

            { "width": "3%", "className": "text-right", "targets": 6 },
            { "width": "3%", "className": "text-right", "targets": 7 },
            { "width": "3%", "className": "text-center none", "targets": 8 },

            { "width": "3%", "className": "text-left none", "targets": 9 },
            { "width": "3%", "className": "text-left none", "targets": 10 },
            { "width": "3%", "className": "text-left none", "targets": 11 },

            { "width": "3%", "className": "text-left", "targets": 12 },
            { "width": "3%", "className": "text-left none", "targets": 13 },
            { "width": "3%", "className": "text-left", "targets": 14 },

            { "width": "3%", "className": "text-center", "targets": 15 },

            { "targets": 0, "render": function (data, type, row) { return data; } },            
            { "targets": 1, "render": function (data, type, row) { return data; } },
            /*{ "targets": 2, "render": function (data, type, row) { return data; } },*/
            { "targets": 2, "render": function (data, type, row) { return data; } },
            { "targets": 3, "render": function (data, type, row) { return data; } },
            { "targets": 4, "render": function (data, type, row) { return DataTableDateValueFromRowGet(row); } },
            { "targets": 5, "render": function (data, type, row) { return data; } },

            {
                "targets": 6, "render": function (data, type, row) {
                    var DateString = data;
                    var Id = ''.concat(data, row['ProjectId'], row['BuildingId'], row['FunctionId'], row['ShiftId']);
                    var argument = '\'' + Id + '\'' + ', \'' + DateString + '\', ' + row['ProjectId'] + ', ' + row['BuildingId'] + ', ' + row['FunctionId'] + ', ' + row['ShiftId'];
                    var OnChange = 'ProjectManSave(' + argument + ')';
                    var QuantityElementD = '<input id="QuantityDId' + Id + '" class="form-control text-right" type="number" value="' + row['QuantityD'] + '" min="0" onchange="' + OnChange + '" style="height: 90%;font-size: 20px;text-align: right;">';
                    var QuantityElementN = '<input id="QuantityDId' + Id + '" class="form-control text-right" type="number" value="' + row['QuantityD'] + '" min="0" onchange="' + OnChange + '" style="height: 90%;font-size: 20px;text-align: right;background-color: #000000;color: white;">';

                    if (row['ShiftId'] == 1) {
                        return QuantityElementD;
                    }
                    else {
                        if (row['ShiftId'] == 2) {
                            return QuantityElementN;
                        }
                        else {
                            return '';
                        }
                    }                                    
                }
            },
            {
                "targets": 7, "render": function (data, type, row) {
                    var DateString = data;
                    var Id = ''.concat(data, row['ProjectId'], row['BuildingId'], row['FunctionId'], row['ShiftId']);
                    var argument = '\'' + Id + '\'' + ', \'' + DateString + '\', ' + row['ProjectId'] + ', ' + row['BuildingId'] + ', ' + row['FunctionId'] + ', ' + row['ShiftId'];
                    var OnChange = 'ProjectManSave(' + argument + ')';
                    var QuantityElementD = '<input id="QuantityIId' + Id + '" class="form-control text-right" type="number" value="' + row['QuantityI'] + '" min="0" onchange="' + OnChange + '" style="height: 90%;font-size: 20px;text-align: right;">';
                    var QuantityElementN = '<input id="QuantityIId' + Id + '" class="form-control text-right" type="number" value="' + row['QuantityI'] + '" min="0" onchange="' + OnChange + '" style="height: 90%;font-size: 20px;text-align: right;background-color: #000000;color: white;">';

                    if (row['ShiftId'] == 1) {
                        return QuantityElementD;
                    }
                    else {
                        if (row['ShiftId'] == 2) {
                            return QuantityElementN;
                        }
                        else {
                            return '';
                        }
                    }
                }
            },
            {
                "targets": 8, "render": function (data, type, row) {
                    var DateString = data;
                    var Id = ''.concat(DateString, row['ProjectId'], row['BuildingId'], row['FunctionId'], row['ShiftId']);
                    var argument = '\'' + Id + '\'' + ', \'' + DateString + '\', ' + row['ProjectId'] + ', ' + row['BuildingId'] + ', ' + row['FunctionId'] + ', ' + row['ShiftId'];
                    
                    return DataTableButtonGet('ProjectManSave', '\'' + Id + '\'', argument, '', 'dt-btn-cl gc-bc1-cl', 'far fa-save btn-icon-cl gc-c1-cl', '')
                }
            },
            
            { "targets": 9, "render": function (data, type, row) { return DataTableDhmValueFromData(data); } },
            { "targets": 10, "render": function (data, type, row) { return DataTableDhmValueFromData(data); } },
            { "targets": 11, "render": function (data, type, row) { return DataTableDhmValueFromData(data); } },
                        
            { "targets": 12, "render": function (data, type, row) { return data; } },
            { "targets": 13, "render": function (data, type, row) { return data; } },
            { "targets": 14, "render": function (data, type, row) { return data; } },

            {
                "targets": 15, "render": function (data, type, row) {
                    var DateString = data;
                    var Id = ''.concat(DateString, row['ProjectId'], row['BuildingId'], row['FunctionId'], row['ShiftId']);
                    var argument = '\'' + DateString + '\', ' + row['ProjectId'] + ', ' + row['BuildingId'] + ', ' + row['FunctionId'] + ', ' + row['ShiftId'] + '';
                    return ProjectManValidate(Id, argument, row['IsValid']);
                }
            },
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
        "bFilter": true,
        "autoWidth": true,
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

            //DataTableTotalIntGet(api, intVal, 6);
            //DataTableTotalIntGet(api, intVal, 7);

            //var Total00 = DataTableTotalDoubleReturn(api, intVal, 6) + DataTableTotalDoubleReturn(api, intVal, 7);
            //var Total01 = 30000;
            //data00 = (Total00 * 100 / Total00).toFixed(2);
            //data01 = (3000 - data00 * 100 / Total00).toFixed(2);
        }
    });
}

function ProjectManValidate(Id, argument, IsValid) {
    var onchange = 'ProjectManSwitch(' + argument + ')';
    var Pattern = 'ProjectManValidate';
    var data = IsValid;
    return DataTableCheckBoxGet(Pattern, Id, data, onchange);
}


function ProjectManPresetGet() {
    ProjectAllReportsHide();
    ProjectAllParametersHide();
    ShowReport('ParamReportId');

    ShowParent('PerimeterId');
    ShowParent('TimeId');

    var PerimeterId = ElementDropDownListValueGet('PerimeterId');
    var TimeId = ElementDropDownListValueGet('TimeId');

    if (PerimeterId == '01') {//Projet
        if (TimeId == '01') {//Cumul
            ProjectManProjectCumulOpen();
        }
        else {
            if (TimeId == '03') {//Day
                ProjectManProjectDayOpen();
            }
            else {
                ParamMessageErrorDisplay('Ce pré-réglabe n\'est pas authorisé');
            }
        }
    }
    else {
        if (PerimeterId == '02') {//Building
            if (TimeId == '01') {//Cumul
                ParamMessageReset();
                ProjectProgressBuildingCumulOpen();
            }
            else {
                ParamMessageErrorDisplay('Ce pré-réglabe n\'est pas authorisé');
            }
        }
        else {
            if (PerimeterId == '03') {//Lot
                if (TimeId == '01') {//Day
                    ParamMessageErrorDisplay('Ce pré-réglabe n\'est pas authorisé');
                }
                else {
                    ParamMessageErrorDisplay('Ce pré-réglabe n\'est pas authorisé');
                }
            }
            else {
                if (PerimeterId == '04') {//Phase
                    if (TimeId == '01') {//Day
                        ParamMessageErrorDisplay('Ce pré-réglabe n\'est pas authorisé');
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


function ProjectManAnalyticOpen() {
    ProjectAllReportsHide();
    ProjectAllParametersHide();
    MenuBarNavHighlight(2, 1, 1);

    ParamTitleSet('Manpower status');
    ShowReport('ParamReportId');

    //ShowParents
    ShowParent('PerimeterId');
    ShowParent('TimeId');

    //Fill
    //ProjectsSecGet('0', '');

    //OnClick
    //ElementOnClickSet('ProjectId', "");

    //OnChange
    //ElementOnChangeSet('ProjectId', "");
    ElementOnChangeSet('PerimeterId', 'ProjectManPresetGet()');
    ElementOnChangeSet('TimeId', 'ProjectManPresetGet()');

    //Action
    //ParamActionBtnGet(0, 'Afficher', 'fas fa-eye', "ProjectManAnalyticDayDisplay()");
}


function ProjectManProjectDayOpen() {
    ProjectAllReportsHide();
    ProjectAllParametersHide();

    //ParamTitleSet('Progress - Analyses');
    ShowReport('ParamReportId');

    //ShowParents
    ShowParent('DateStartId')
    ShowParent('DateEndId');
    ShowParent('ProjectId');
    ShowParent('IsChartId');
    ShowParent('PerimeterId');
    ShowParent('TimeId');

    DateValueDefaultSet('DateStartId', 0);
    DateValueDefaultSet('DateEndId', 0);

    //Fill
    //ProjectsSecGet('0', '');

    //OnClick
    ElementOnClickSet('ProjectId', "ProjectOnChangeGet('0', '')");
    //ElementOnClickSet('ProjectId', "");

    //OnChange
    //ElementOnChangeSet('ProjectId', "");

    //Action
    ParamActionBtnGet(0, 'Display', 'fas fa-eye', "ProjectManProjectDayDisplay()");
}


function ProjectManProjectCumulOpen() {
    ProjectAllReportsHide();
    ProjectAllParametersHide();

    //ParamTitleSet('Progress - Analyses');
    ShowReport('ParamReportId');

    //ShowParents
    ShowParent('DateEndId');
    ShowParent('ProjectId');
    ShowParent('IsChartId');
    ShowParent('PerimeterId');
    ShowParent('TimeId');

    DateValueDefaultSet('DateStartId', 0);
    DateValueDefaultSet('DateEndId', 0);

    //Fill
    //ProjectsSecGet('0', '');

    //OnClick
    ElementOnClickSet('ProjectId', "ProjectOnChangeGet('0', '')");
    //ElementOnClickSet('ProjectId', "");

    //OnChange
    //ElementOnChangeSet('ProjectId', "");

    //Action
    ParamActionBtnGet(0, 'Display', 'fas fa-eye', "ProjectManProjectCumulDisplay()");
}


function ProjectManProjectCumulDisplay() {

    var ActionBtnId = 'ParamActionBtnId0';
    var Icon = 'fas fa-eye';
    var IsMargin = true;

    var DateStringEnd = GetDateStringFromDatePicker('DateEndId');
    var ProjectId = ElementDropDownListValueGet('ProjectId');
    var IsChart = ElementBooleanGet('IsChartId');

    ProjectAllReportsHide();
    ShowReport('ParamReportId');
    ParamMessageReset();

    ProjectManProjectCumulGet(ActionBtnId, Icon, IsMargin, DateStringEnd, ProjectId, IsChart);
}


function ProjectManProjectCumulGet(ActionBtnId, Icon, IsMargin, DateStringEnd, ProjectId, IsChart) {

    ActionSpin(ActionBtnId, IsMargin);

    var PatternTable = 'ProjectManProjectCumul';
    var PatternTableId = PatternTable + 'TableId'
    var PatternTableReportId = PatternTable + 'TableReportId';

    //var data00 = 0;
    //var data01 = 0;

    //var data10 = 0;
    //var data11 = 0;

    //var data20 = 0;
    //var data21 = 0;

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
        //                var ZoneId = '07';
        //                var TimeId = '01';
        //                var RegionId = '0';
        //                var LSId = '0';
        //                var StationNumber = '0';
        //                var LaneName = '0';
        //                var FileType = 'PDF';
        //                QualifObsTickIdDTableExport(ZoneId, TimeId, DateStringStart, DateStringEnd, RegionId, LSId, StationNumber, LaneName, FileType);
        //            }
        //        },
        //        {
        //            text: 'Excel',
        //            action: function (e, dt, node, config) {
        //                var ZoneId = '07';
        //                var TimeId = '01';
        //                var RegionId = '0';
        //                var LSId = '0';
        //                var StationNumber = '0';
        //                var LaneName = '0';
        //                var FileType = 'Excel';
        //                QualifObsTickIdDTableExport(ZoneId, TimeId, DateStringStart, DateStringEnd, RegionId, LSId, StationNumber, LaneName, FileType);
        //            }
        //        }
        //    ]
        //},
        "initComplete": function (settings, json) {
            ActionBtnSet(ActionBtnId, Icon, IsMargin);
            ShowReport(PatternTableReportId);

            if (IsChart == true) {
                var PatternChartCommon = 'ProjectManProjectCumul01';
                //var PatternChartDiff = 'Global par jour';
                var Title = 'ManPower - Encadrement';
                var PatternChart = PatternChartCommon + 'Bar';
                var labels = GetColumnArray(PatternTableId, 0);
                var data1 = GetColumnArray(PatternTableId, 2);
                var data2 = GetColumnArray(PatternTableId, 3);

                var label1 = 'Budgeted';
                var label2 = 'Earned';

                document.getElementById(PatternChart + 'ChartCardId').style.border = 'transparent';
                ChartJsBarTwoDisplay(Title, PatternChart, labels, data1, label1, data2, label2, true)

                var PatternChartCommon = 'ProjectManProjectCumul02';
                //var PatternChartDiff = 'Global par jour';
                var Title = 'ManPower - Main d\'oeuvre';
                var PatternChart = PatternChartCommon + 'Bar';
                var labels = GetColumnArray(PatternTableId, 0);
                var data1 = GetColumnArray(PatternTableId, 5);
                var data2 = GetColumnArray(PatternTableId, 6);

                var label1 = 'Budgeted';
                var label2 = 'Earned';

                document.getElementById(PatternChart + 'ChartCardId').style.border = 'transparent';
                ChartJsBarTwoDisplay(Title, PatternChart, labels, data1, label1, data2, label2, true)

                var PatternChartCommon = 'ProjectManProjectCumul03';
                //var PatternChartDiff = 'Global par jour';
                var Title = 'ManPower - Matériel';
                var PatternChart = PatternChartCommon + 'Bar';
                var labels = GetColumnArray(PatternTableId, 0);
                var data1 = GetColumnArray(PatternTableId, 8);
                var data2 = GetColumnArray(PatternTableId, 9);

                var label1 = 'Budgeted';
                var label2 = 'Earned';

                document.getElementById(PatternChart + 'ChartCardId').style.border = 'transparent';
                ChartJsBarTwoDisplay(Title, PatternChart, labels, data1, label1, data2, label2, true)

                ShowGridReport('Grid_0001');

            }
        },
        "ajax": {
            "url": "/Project/ProjectManProjectCumulGet",
            "type": "GET",
            "datatype": "json",
            "data": {
                ProjectId: ProjectId, 
                DateStringEnd: DateStringEnd         
            }
        },
        "columns": [
            { "data": "ProjectName" },//0
            { "data": "ProjectName" },//1

            { "data": "Total01" },//2
            { "data": "Quantity01" },//3
            { "data": "Quantity01" },//4                       

            { "data": "Total02" },//5
            { "data": "Quantity02" },//6
            { "data": "Quantity02" },//7 

            { "data": "Total03" },//8
            { "data": "Quantity03" },//9
            { "data": "Quantity03" },//10

            { "mData": function vehicle(data, type, dataToSet) { return GetDigits(data.DayC, 2) + GetDigits(data.MonthC, 2) + data.YearC + data.ProjectId; } },//21
        ],
        "columnDefs": [
            { "width": "3%", "className": "text-left", "targets": 0 },
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

            { "targets": 0, "render": function (data, type, row) { return data; } },
            { "targets": 1, "render": function (data, type, row) { return DataTableDateValueGet(row['YearC'], row['MonthC'], row['DayC']); } },

            { "targets": 2, "render": function (data, type, row) { return DataTableFormatDoubleGet(data); } },
            { "targets": 3, "render": function (data, type, row) { return DataTableFormatDoubleGet(data); } },
            { "targets": 4, "render": function (data, type, row) { return DataTablePercentageTwoThresholdsGet(data, row['Total01'], 2, 1, 3); } },

            { "targets": 5, "render": function (data, type, row) { return DataTableFormatDoubleGet(data); } },
            { "targets": 6, "render": function (data, type, row) { return DataTableFormatDoubleGet(data); } },
            { "targets": 7, "render": function (data, type, row) { return DataTablePercentageTwoThresholdsGet(data, row['Total02'], 2, 1, 3); } },

            { "targets": 8, "render": function (data, type, row) { return DataTableFormatDoubleGet(data); } },
            { "targets": 9, "render": function (data, type, row) { return DataTableFormatDoubleGet(data); } },
            { "targets": 10, "render": function (data, type, row) { return DataTablePercentageTwoThresholdsGet(data, row['Total03'], 2, 1, 3); } },

            { "targets": 11, "render": function (data, type, row) { return DataTableButtonGet('ProjectManProjectCumulSearch', data, '\'' + data + '\'', '', 'dt-btn-cl gc-bc1-cl', 'fas fa-eye btn-icon-cl gc-c1-cl', '') } },
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
            DataTableTotalIntGet(api, intVal, 6);
            DataTableTotalIntGet(api, intVal, 8);
            DataTableTotalIntGet(api, intVal, 9);

            DataTableTotalPercentageGet(api, intVal, 3, 2, 4);
            DataTableTotalPercentageGet(api, intVal, 6, 5, 7);
            DataTableTotalPercentageGet(api, intVal, 9, 8, 10);

            ////data00 = DataTableColumnPercentageGet(api, intVal, 2, 1);
            ////data01 = (100 - data00).toFixed(2);

            ////data10 = DataTableColumnPercentageGet(api, intVal, 5, 4);
            ////data11 = (100 - data10).toFixed(2);

            ////data20 = DataTableColumnPercentageGet(api, intVal, 8, 7);
            ////data21 = (100 - data10).toFixed(2);
        }
    });
}

//function ProjectManProjectDayOpen() {
//    ProjectAllReportsHide();
//    ProjectAllParametersHide();

//    //ParamTitleSet('Progress - Analyses');
//    ShowReport('ParamReportId');

//    //ShowParents
//    ShowParent('DateStartId');
//    ShowParent('DateEndId');
//    ShowParent('ProjectId');
//    ShowParent('IsChartId');
//    ShowParent('PerimeterId');
//    ShowParent('TimeId');

//    DateValueDefaultSet('DateStartId', 0);
//    DateValueDefaultSet('DateEndId', 0);

//    //Fill
//    //ProjectsSecGet('0', '');

//    //OnClick
//    ElementOnClickSet('ProjectId', "ProjectOnChangeGet('0', '')");
//    //ElementOnClickSet('ProjectId', "");

//    //OnChange
//    //ElementOnChangeSet('ProjectId', "");

//    //Action
//    ParamActionBtnGet(0, 'Afficher', 'fas fa-eye', "ProjectManProjectDayDisplay()");
//}

function ProjectManProjectDayDisplay() {

    var ActionBtnId = 'ParamActionBtnId0';
    var Icon = 'fas fa-eye';
    var IsMargin = true;

    var DateStringStart = GetDateStringFromDatePicker('DateStartId');
    var DateStringEnd = GetDateStringFromDatePicker('DateEndId');
    var ProjectId = ElementDropDownListValueGet('ProjectId');
    var IsChart = ElementBooleanGet('IsChartId');

    ProjectAllReportsHide();
    ShowReport('ParamReportId');
    ParamMessageReset();

    ProjectManProjectDayGet(ActionBtnId, Icon, IsMargin, DateStringStart, DateStringEnd, ProjectId, IsChart);
}


function ProjectManProjectDayGet(ActionBtnId, Icon, IsMargin, DateStringStart, DateStringEnd, ProjectId, IsChart) {

    ActionSpin(ActionBtnId, IsMargin);

    var PatternTable = 'ProjectManProjectDay';
    var PatternTableId = PatternTable + 'TableId'
    var PatternTableReportId = PatternTable + 'TableReportId';

    var data00 = 0;
    var data01 = 0;

    var data10 = 0;
    var data11 = 0;

    var data20 = 0;
    var data21 = 0;
    
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
        //                var ZoneId = '07';
        //                var TimeId = '01';
        //                var RegionId = '0';
        //                var LSId = '0';
        //                var StationNumber = '0';
        //                var LaneName = '0';
        //                var FileType = 'PDF';
        //                QualifObsTickIdDTableExport(ZoneId, TimeId, DateStringStart, DateStringEnd, RegionId, LSId, StationNumber, LaneName, FileType);
        //            }
        //        },
        //        {
        //            text: 'Excel',
        //            action: function (e, dt, node, config) {
        //                var ZoneId = '07';
        //                var TimeId = '01';
        //                var RegionId = '0';
        //                var LSId = '0';
        //                var StationNumber = '0';
        //                var LaneName = '0';
        //                var FileType = 'Excel';
        //                QualifObsTickIdDTableExport(ZoneId, TimeId, DateStringStart, DateStringEnd, RegionId, LSId, StationNumber, LaneName, FileType);
        //            }
        //        }
        //    ]
        //},
        "initComplete": function (settings, json) {
            ActionBtnSet(ActionBtnId, Icon, IsMargin);
            ShowReport(PatternTableReportId);

            if (IsChart == true) {

                if (DateStringStart - DateStringEnd != 0) {


                    //var PatternChartCommon = 'QualifObsTickIdD';
                    //var PatternChartDiff = 'Global par jour';
                    //var Title = 'Temps de parcours dépassé';
                    //var PatternChart = PatternChartCommon + 'TotalLine';
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
                    //var Title = 'Qualification du Temps de parcours dépassé';
                    //var PatternChart = PatternChartCommon + 'ControlLine';
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
                    //var PatternChart = PatternChartCommon + 'RateLine';
                    //var labels = GetColumnArray(PatternTableId, 17);
                    //var data1 = GetColumnArray(PatternTableId, 10);
                    //var data2 = GetColumnArray(PatternTableId, 12);
                    //var data3 = GetColumnArray(PatternTableId, 14);

                    //var label1 = 'TPD justifié';
                    //var label2 = 'TPD non-justifié';
                    //var label3 = 'Qualification impossible';

                    //document.getElementById(PatternChart + 'ChartCardId').style.border = 'transparent';
                    //ChartJsLineThreeTraficHourDisplay(Title, PatternChart, labels, label1, data1, label2, data2, label3, data3, false);

                    //ShowGridReport('Grid_0000');
                }
            }
        },
        "ajax": {
            "url": "/Project/ProjectManProjectDayGet",
            "type": "GET",
            "datatype": "json",
            "data": {
                DateStringStart: DateStringStart,
                DateStringEnd: DateStringEnd,
                ProjectId: ProjectId
            }
        },
        "columns": [
            { "data": "" },//0

            { "data": "Total01" },//1
            { "data": "Quantity01" },//2
            { "data": "Quantity01" },//3                       

            { "data": "Total02" },//4
            { "data": "Quantity02" },//5
            { "data": "Quantity02" },//6 

            { "data": "Total03" },//7
            { "data": "Quantity03" },//8
            { "data": "Quantity03" },//9           
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

            { "targets": 0, "render": function (data, type, row) { return DataTableDateValueFromRowGet(row); } },

            { "targets": 1, "render": function (data, type, row) { return DataTableFormatDoubleGet(data); } },
            { "targets": 2, "render": function (data, type, row) { return DataTableFormatDoubleGet(data); } },
            { "targets": 3, "render": function (data, type, row) { return DataTablePercentageTwoThresholdsGet(data, row['Total01'], 2, 1, 3); } },

            { "targets": 4, "render": function (data, type, row) { return DataTableFormatDoubleGet(data); } },
            { "targets": 5, "render": function (data, type, row) { return DataTableFormatDoubleGet(data); } },
            { "targets": 6, "render": function (data, type, row) { return DataTablePercentageTwoThresholdsGet(data, row['Total02'], 2, 1, 3); } },

            { "targets": 7, "render": function (data, type, row) { return DataTableFormatDoubleGet(data); } },
            { "targets": 8, "render": function (data, type, row) { return DataTableFormatDoubleGet(data); } },
            { "targets": 9, "render": function (data, type, row) { return DataTablePercentageTwoThresholdsGet(data, row['Total03'], 2, 1, 3); } },
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
            DataTableTotalIntGet(api, intVal, 5);
            DataTableTotalIntGet(api, intVal, 7);
            DataTableTotalIntGet(api, intVal, 8);

            DataTableTotalPercentageGet(api, intVal, 2, 1, 3);
            DataTableTotalPercentageGet(api, intVal, 5, 4, 6);
            DataTableTotalPercentageGet(api, intVal, 8, 7, 9);

            data00 = DataTableColumnPercentageGet(api, intVal, 2, 1);
            data01 = (100 - data00).toFixed(2);

            data10 = DataTableColumnPercentageGet(api, intVal, 5, 4);
            data11 = (100 - data10).toFixed(2);

            data20 = DataTableColumnPercentageGet(api, intVal, 8, 7);
            data21 = (100 - data10).toFixed(2);            
        }
    });
}

function ProjectSeniorValidate(Id, argument, IsValid) {
    var onchange = 'ProjectSeniorSwitch(' + argument + ')';
    var Pattern = 'ProjectSeniorValidate';
    var data = IsValid;
    return DataTableCheckBoxGet(Pattern, Id, data, onchange);
}

function ProjectManSwitch(DateString, ProjectId, BuildingId, FunctionId, ShiftId) {
    var obj = {};
    obj.DateString = DateString;
    obj.ProjectId = ProjectId;
    obj.BuildingId = BuildingId;
    obj.FunctionId = FunctionId;
    obj.ShiftId = ShiftId;

    $.ajax({
        url: "/Project/ProjectManSwitch",
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

function ProjectSeniorSwitch(DateString, ProjectId, FunctionId) {
    var obj = {};
    obj.DateString = DateString;
    obj.ProjectId = ProjectId;
    obj.FunctionId = FunctionId;

    $.ajax({
        url: "/Project/ProjectSeniorSwitch",
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

function ProjectManSave(Id, DateString, ProjectId, BuildingId, FunctionId, ShiftId) {

    var ActionBtnId = 'ProjectManSaveBtnId' + Id;
    var Icon = 'far fa-check-circle';
    var IsMargin = false;

    var QuantityD = ElementValueGet('QuantityDId' + Id);
    var QuantityI = ElementValueGet('QuantityIId' + Id);

    var obj = {};
    obj.DateString = DateString;
    obj.ProjectId = ProjectId;
    obj.BuildingId = BuildingId;
    obj.FunctionId = FunctionId;
    obj.ShiftId = ShiftId;
    obj.QuantityD = QuantityD;
    obj.QuantityI = QuantityI;

    ActionSpin(ActionBtnId, IsMargin);

    $.ajax({
        url: "/Project/ProjectManSave",
        method: "POST",
        data: JSON.stringify(obj),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            ActionBtnSet(ActionBtnId, Icon, IsMargin);
        }
    });
}


function ProjectSeniorSave(Id, DateString, ProjectId, FunctionId) {

    var ActionBtnId = 'ProjectSeniorSaveBtnId' + Id;
    var Icon = 'far fa-check-circle';
    var IsMargin = false;

    var QuantityD = ElementValueGet('QuantityDId' + Id);

    var obj = {};
    obj.DateString = DateString;
    obj.ProjectId = ProjectId;
    obj.FunctionId = FunctionId;
    obj.QuantityD = QuantityD;

    $('#' + ActionBtnId).find('span').attr('class', 'fa fa-spinner fa-spin');

    $.ajax({
        url: "/Project/ProjectSeniorSave",
        method: "POST",
        data: JSON.stringify(obj),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            ActionBtnSet(ActionBtnId, Icon, IsMargin);
        }
    });
}

function ProjectAdminHomeOpen() {
    ProjectAllReportsHide();
    ProjectAllParametersHide();
    MenuBarNavHighlight(5, 3, 2);

    //Reset
    ProjectProgressInputsReset('');

    //Default
    ProjectAdminRelationOpen();
}

function ProjectAdminListOpen() {
    ProjectAllReportsHide();
    ProjectAllParametersHide();
    MenuBarNavHighlight(5, 0, 2);

    ParamTitleSet('Paramétrage');
    ShowReport('ParamReportId');
    ShowParent('ParamId');    

    //Fill    
    //HtmlDropDownListNameOnlyLabelFill('ProjectId', '0', '/Project/ProjectsGet', 'ProjectId', 'ProjectName', 'Projet');
    HtmlDropDownListWithInputNameOnlyLabelFill('FunctionId', '0', '/Project/ProjectFunctionsAllFromCategoryGet', 'FunctionId', 'FunctionName', '0', 'Select Function');
    HtmlDropDownListWithInputNameOnlyLabelFill('ParamId', '0', '/Common/ParamsGet', 'ParamId', 'ParamName', 'List', 'Select List');

    ElementDropDownListLabelReset('BuildingId', 'Bâtiment');
    ElementDropDownListLabelReset('LotId', 'Lot');

    //HtmlDropDownListWithInputNameOnlyFill('BuildingId', '0', '/Project/ProjectBuildingsGet', 'BuildingId', 'BuildingName', '0');

    //OnChange
    ElementOnChangeSet('ParamId', 'ProjectAdminListDisplay()');
    //ElementOnChangeSet('ProjectId', "ProjectLotsGet('0', '')");
    ElementOnChangeSet('FunctionCategoryId', "ProjectFunctionsAllFromCategoryIdGet('0', '')")
    ElementOnChangeSet('FunctionId', '');

    //OnClick
    //ElementOnClickSet('ProjectId', "ProjectBuildingsGet('0', '')");

    //Display
    //ProjectAdminDisplay();
}

function ProjectAdminListDisplay() {

    ProjectAllReportsHide();
    ProjectAllParametersHide();
    ParamMessageReset();

    ShowReport('ParamReportId');
    ShowParent('ParamId');

    var ParamId = ElementDropDownListValueGet('ParamId');

    if (ParamId == '001') {//Projects

        //ShowParents   
        ShowParent('KeywordId');
        ShowParent('NameId');
        ShowParent('CodeId');

        ShowParent('BudgetMoneyId');
        ShowParent('BudgetHoursId');
        ShowParent('DhmValueStartThId');
        ShowParent('DurationTimeId');
        ShowParent('DurationNumberId');
        ShowParent('DhmValueStartRealId');
        ShowParent('DhmValueEndRealId');
        ShowParent('SponsorId');
        ShowParent('ProjectManagerId');
        ShowParent('CompanyId');
        ShowParent('TaxRateId');

        ParamActionBtnGet(0, 'Display', 'fas fa-eye', "ProjectAdminProjectDisplay()");
        ParamActionBtnGet(1, 'Add', 'fas fa-plus-circle', 'ProjectAdminProjectAdd()');
        ParamActionBtnGet(2, 'Reset', 'fas fa-power-off', "ProjectProgressInputsReset('')");
    }
    if (ParamId == '002') {//Buildings

        //ShowParents   
        ShowParent('KeywordId');
        ShowParent('NameId');
        ShowParent('CodeId');

        ParamActionBtnGet(0, 'Display', 'fas fa-eye', "ProjectAdminBuildingDisplay()");
        ParamActionBtnGet(2, 'Reset', 'fas fa-power-off', "ProjectProgressInputsReset('')");
    }
    if (ParamId == '003') {//Zones

        //ShowParents   
        ShowParent('ProjectId');

        ParamActionBtnGet(0, 'Display', 'fas fa-eye', "ProjectAdminZoneDisplay()");
        //ParamActionBtnGet(1, 'Ajouter', 'fas fa-plus-circle', 'ProjectAdminZoneAdd()');
        ParamActionBtnGet(2, 'Reset', 'fas fa-power-off', "ProjectProgressInputsReset('')");
    }
    if (ParamId == '004') {//Companyies

        //ShowParents   
        ShowParent('KeywordId');
        ShowParent('NameId');
        ShowParent('CodeId');

        ParamActionBtnGet(0, 'Display', 'fas fa-eye', "ProjectAdminCompanyDisplay()");
        ParamActionBtnGet(1, 'Add', 'fas fa-plus-circle', 'ProjectAdminCompanyAdd()');
        ParamActionBtnGet(2, 'Reset', 'fas fa-power-off', "ProjectProgressInputsReset('')");
    }
    if (ParamId == '005') {//Sponsors

        //ShowParents   
        ShowParent('KeywordId');
        ShowParent('NameId');
        ShowParent('CodeId');

        ParamActionBtnGet(0, 'Display', 'fas fa-eye', "ProjectAdminSponsorDisplay()");
        ParamActionBtnGet(1, 'Add', 'fas fa-plus-circle', 'ProjectAdminSponsorAdd()');
        ParamActionBtnGet(2, 'Reset', 'fas fa-power-off', "ProjectProgressInputsReset('')");
    }
    if (ParamId == '006') {//ProjectManagers

        //ShowParents   
        ShowParent('KeywordId');
        ShowParent('NameId');
        ShowParent('CodeId');

        ParamActionBtnGet(0, 'Display', 'fas fa-eye', "ProjectAdminProjectManagerDisplay()");
        ParamActionBtnGet(1, 'Add', 'fas fa-plus-circle', 'ProjectAdminProjectManagerAdd()');
        ParamActionBtnGet(2, 'Reset', 'fas fa-power-off', "ProjectProgressInputsReset('')");
    }
    if (ParamId == '007') {//Stages

        //ShowParents   
        ShowParent('ProjectId');

        ParamActionBtnGet(0, 'Display', 'fas fa-eye', "ProjectAdminStageDisplay()");
        //ParamActionBtnGet(1, 'Ajouter', 'fas fa-plus-circle', 'ProjectAdminStageAdd()');
        ParamActionBtnGet(2, 'Reset', 'fas fa-power-off', "ProjectProgressInputsReset('')");
    }
    if (ParamId == '016') {//FunctionList

        ShowParent('FunctionCategoryId');
        ShowParent('FunctionTypeId');
        ShowParent('NameId');

        ParamActionBtnGet(0, 'Display', 'fas fa-eye', "ProjectAdminFunctionDisplay()");
        ParamActionBtnGet(1, 'Add', 'fas fa-plus-circle', 'ProjectAdminFunctionAdd()');
        ParamActionBtnGet(2, 'Reset', 'fas fa-power-off', "ProjectProgressInputsReset('')");
    }
}


function ProjectAdminRelationOpen() {
    ProjectAllReportsHide();
    ProjectAllParametersHide();
    MenuBarNavHighlight(5, 1, 2);

    ParamTitleSet('Paramétrage');
    ShowReport('ParamReportId');
    ShowParent('ParamId');

    //Fill    
    HtmlDropDownListNameOnlyLabelFill('ProjectId', '0', '/Project/ProjectsGet', 'ProjectId', 'ProjectName', 'Projet');
    HtmlDropDownListWithInputNameOnlyLabelFill('FunctionId', '0', '/Project/ProjectFunctionsAllFromCategoryGet', 'FunctionId', 'FunctionName', '0', 'Select Function');
    HtmlDropDownListWithInputNameOnlyLabelFill('ParamId', '0', '/Common/ParamsGet', 'ParamId', 'ParamName', 'Relation', 'Select Relation');

    ElementDropDownListLabelReset('BuildingId', 'Bâtiment');
    ElementDropDownListLabelReset('LotId', 'Lot');

    //HtmlDropDownListWithInputNameOnlyFill('BuildingId', '0', '/Project/ProjectBuildingsGet', 'BuildingId', 'BuildingName', '0');

    //OnChange
    ElementOnChangeSet('ParamId', 'ProjectAdminRelationDisplay()');
    //ElementOnChangeSet('ProjectId', "ProjectLotsGet('0', '')");
    ElementOnChangeSet('FunctionCategoryId', "ProjectFunctionsAllFromCategoryIdGet('0', '')")
    ElementOnChangeSet('FunctionId', '');

    //OnClick
    //ElementOnClickSet('ProjectId', "ProjectBuildingsGet('0', '')");

    //Display
    //ProjectAdminDisplay();
}

function ProjectAdminRest() {

    ElementDropDownListSet('ProjectId', '0');
    ElementDropDownListSet('BuildingId', '0');
    ElementDropDownListSet('StageId', '0');
    ElementDropDownListSet('LotId', '0');
    ElementDropDownListSet('StepId', '0');
    ElementDropDownListSet('DisciplineId', '0');
    ElementDropDownListSet('PhaseId', '0');
    ElementDropDownListSet('ZoneId', '0');
    ElementDropDownListSet('SubLotId', '0');
    ElementDropDownListSet('SubPhaseId', '0');
    ElementDropDownListSet('FunctionCategoryId', '0');
    ElementDropDownListSet('FunctionTypeId', '0');
}
function ProjectAdminRelationDisplay() {

    ProjectAllReportsHide();
    ProjectAllParametersHide();
    ParamMessageReset();

    ShowReport('ParamReportId');
    ShowParent('ParamId');

    ProjectAdminRest();

    var ParamId = ElementDropDownListValueGet('ParamId');
        
    if (ParamId == '008') {//FunctionProjects

        //ShowParents   
        ShowParent('ProjectId');
        ShowParent('FunctionCategoryId');
        ShowParent('FunctionId');

        ParamActionBtnGet(0, 'Display', 'fas fa-eye', "ProjectAdminFunctionProjectsDisplay()");
        ParamActionBtnGet(1, 'Add', 'fas fa-plus-circle', 'ProjectAdminFunctionProjectsAllAdd()');
        ParamActionBtnGet(2, 'Reset', 'fas fa-power-off', "ProjectProgressInputsReset('')");
    }
    if (ParamId == '009') {//UserProjects
        //ShowParents   
        ShowParent('ProjectId');
        ShowParent('UserIdProject');

        ParamActionBtnGet(0, 'Display', 'fas fa-eye', "ProjectAdminUserProjectsDisplay()");
        ParamActionBtnGet(1, 'Add', 'fas fa-plus-circle', 'ProjectAdminUserProjectsAllAdd()');
        ParamActionBtnGet(2, 'Reset', 'fas fa-power-off', "ProjectProgressInputsReset('')");
    }
    if (ParamId == '010') {//UserBuildings

        //ShowParents   
        ShowParent('ProjectId');
        ShowParent('BuildingId');
        ShowParent('UserIdProject');

        ParamActionBtnGet(0, 'Display', 'fas fa-eye', "ProjectAdminUserBuildingsDisplay()");
        ParamActionBtnGet(1, 'Add', 'fas fa-plus-circle', 'ProjectAdminUserBuildingsAllAdd()');
        ParamActionBtnGet(2, 'Reset', 'fas fa-power-off', "ProjectProgressInputsReset('')");
    }
    if (ParamId == '011') {//UserLots

        //ShowParents   
        ShowParent('ProjectId');
        ShowParent('BuildingId');
        ShowParent('LotId');
        ShowParent('UserIdProject');

        ParamActionBtnGet(0, 'Display', 'fas fa-eye', "ProjectAdminUserLotsDisplay()");
        ParamActionBtnGet(1, 'Add', 'fas fa-plus-circle', 'ProjectAdminUserLotsAllAdd()');
        ParamActionBtnGet(2, 'Reset', 'fas fa-power-off', "ProjectProgressInputsReset('')");
    }
    if (ParamId == '012') {//UserFunctions

        //ShowParents   
        ShowParent('ProjectId');
        ShowParent('FunctionCategoryId');
        ShowParent('FunctionId');
        ShowParent('UserIdProject');

        ParamActionBtnGet(0, 'Display', 'fas fa-eye', "ProjectAdminUserFunctionsDisplay()");
        ParamActionBtnGet(1, 'Add', 'fas fa-plus-circle', 'ProjectAdminUserFunctionsAllAdd()');
        ParamActionBtnGet(2, 'Reset', 'fas fa-power-off', "ProjectProgressInputsReset('')");
    }
    if (ParamId == '013') {//CompanyLots

        //ShowParents   
        ShowParent('ProjectId');
        ShowParent('BuildingId');
        ShowParent('LotId');
        ShowParent('CompanyId');

        ParamActionBtnGet(0, 'Display', 'fas fa-eye', "ProjectAdminCompanyLotsDisplay()");
        ParamActionBtnGet(1, 'Add', 'fas fa-plus-circle', 'ProjectAdminCompanyLotsAllAdd()');
        ParamActionBtnGet(2, 'Reset', 'fas fa-power-off', "ProjectProgressInputsReset('')");
    }
    if (ParamId == '014') {//FunctionLots

        ShowParent('ProjectId');
        ShowParent('BuildingId');
        ShowParent('LotId');
        ShowParent('FunctionCategoryId');
        ShowParent('FunctionId');

        ParamActionBtnGet(0, 'Display', 'fas fa-eye', "ProjectAdminFunctionLotsDisplay()");
        ParamActionBtnGet(1, 'Add', 'fas fa-plus-circle', 'ProjectAdminFunctionLotsAllAdd()');
        ParamActionBtnGet(2, 'Reset', 'fas fa-power-off', "ProjectProgressInputsReset('')");
    }
    if (ParamId == '015') {//UserPhase

        ShowParent('ProjectId');
        ShowParent('PhaseId');
        ShowParent('UserIdProject');

        ParamActionBtnGet(0, 'Display', 'fas fa-eye', "ProjectAdminUserPhasesDisplay()");
        ParamActionBtnGet(1, 'Add', 'fas fa-plus-circle', 'ProjectAdminUserPhasesAllAdd()');
        ParamActionBtnGet(2, 'Reset', 'fas fa-power-off', "ProjectProgressInputsReset('')");
    }
}

function ProjectAdminProjectAdd() {
    //Set action button
    var ActionBtnId = ParamActionBtnIdAddGet();
    var Icon = ParamActionIconAddGet();

    //Get input values
    
    var Code = ElementValueGet('CodeId');
    var Name = ElementValueGet('NameId');
    var BudgetMoney = ElementValueGet('BudgetMoneyId');
    var BudgetHours = ElementValueGet('BudgetHoursId');   
    var DhmValueStartThString = ElementDateStringFromDatePickerGet('DhmValueStartThId');
    var DurationTimeId = ElementDropDownListValueGet('DurationTimeId');
    var DurationNumber = ElementValueGet('DurationNumberId');
    var DhmValueStartRealString = ElementDateStringFromDatePickerGet('DhmValueStartRealId');
    var DhmValueEndRealString = ElementDateStringFromDatePickerGet('DhmValueEndRealId');
    var CompanyId = ElementDropDownListValueGet('CompanyId');
    var SponsorId = ElementDropDownListValueGet('SponsorId');
    var ProjectManagerId = ElementDropDownListValueGet('ProjectManagerId');
    var TaxRate = ElementValueGet('TaxRateId');

    //if (Code != '' && 
    //    Name != '' &&
    //    BudgetMoney != 0 &&
    //    BudgetHours != 0 &&
    //    DhmValueStartThString != '' &&
    //    DurationTimeId != '0' &&
    //    DurationNumber != 0 &&
    //    DhmValueStartRealString != '' &&
    //    DhmValueEndRealString != '' &&
    //    CompanyId != '0' &&
    //    SponsorId != '0' &&
    //    ProjectManagerId != '0' &&
    //    TaxRate != '0') {

        ParamMessageReset();

        //Spin
        ActionBtnSpin(ActionBtnId);

        //Insert
        var obj = {};
        obj.Code = Code;
        obj.Name = Name;
        obj.BudgetMoney = BudgetMoney;
        obj.BudgetHours = BudgetHours;
        obj.DhmValueStartThString = DhmValueStartThString;
        obj.DurationTimeId = DurationTimeId;
        obj.DurationNumber = DurationNumber;
        obj.DhmValueStartRealString = DhmValueStartRealString;
        obj.DhmValueEndRealString = DhmValueEndRealString;
        obj.CompanyId = CompanyId;
        obj.SponsorId = SponsorId;
        obj.ProjectManagerId = ProjectManagerId;
        obj.TaxRate = TaxRate;

        $.ajax({
            url: "/Project/ProjectAdminProjectAdd",
            method: "POST",
            data: JSON.stringify(obj),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {
                ActionBtnIconSet(ActionBtnId, Icon);
                ProjectAdminProjectDisplay();
                ElementInputSet('NameId', '');
                ElementInputSet('CodeId', '');
                ElementInputSet('CommentId', '');
            }
        });

        //Connection
        NotiConnectionIdUpdate('Project-Administration-Ajouter un projet');
    //}
    //else {
    //    ParamMessageErrorDisplay('Certains champs sont obligatoire')
    //}
}


function ProjectAdminProjectDisplay() {

    var ActionBtnId = 'ParamActionBtnId0';
    var Icon = 'fas fa-eye';
    var IsMargin = true;

    var Keyword = GetElementValue('KeywordId');
    var CompanyId = ElementDropDownListValueGet('CompanyId');
    var SponsorId = ElementDropDownListValueGet('SponsorId');
    var ProjectManagerId = ElementDropDownListValueGet('ProjectManagerId');

    ProjectAdminProjectGet(ActionBtnId, Icon, IsMargin, Keyword, CompanyId, SponsorId, ProjectManagerId);

}

function ProjectAdminProjectGet(ActionBtnId, Icon, IsMargin, Keyword, CompanyId, SponsorId, ProjectManagerId) {

    //Spin
    ActionSpin(ActionBtnId, IsMargin);

    var Pattern = 'ProjectAdminProject';
    var PatternTableId = Pattern + 'TableId';
    var PatternTableReportId = Pattern + 'TableReportId';

    HideReport(PatternTableReportId);

    $('#' + PatternTableId).DataTable().destroy();;
    $('#' + PatternTableId).DataTable({
        "initComplete": function (settings, json) {
            ShowReport(PatternTableReportId);
            ActionBtnSet(ActionBtnId, Icon, IsMargin);
        },
        "ajax": {
            "url": "/Project/ProjectAdminProjectGet",
            "type": "GET",
            "datatype": "json",
            "data": {
                Keyword: Keyword,
                CompanyId: CompanyId,
                SponsorId: SponsorId,
                ProjectManagerId: ProjectManagerId
            }
        },
        "columns": [
            { "data": "ProjectId" },//0
            { "data": "ProjectCode" },//1
            { "data": "ProjectName" },//2
            { "data": "BudgetMoney" },//3
            { "data": "BudgetHours" },//4
            { "data": "TaxRate" },//5
            { "data": "DhmValueStartTh" },//6
            { "data": "Duration" },//7    

            { "data": "CompanyName" },//8
            { "data": "SponsorName" },//9 
            { "data": "ProjectManagerName" },//10

            { "data": "DhmValueStartReal" },//11
            { "data": "DhmValueEndReal" },//12

            { "data": "LogoPath" },//13

            { "data": "CreatedBy" },//14
            { "data": "DhmCreation" },//15

            { "data": "ProjectId" },//16 Edit
            { "data": "ProjectId" },//17 Delete
        ],
        "columnDefs": [
            { "width": "3%", "className": "text-left", "targets": 0 },
            { "width": "3%", "className": "text-left", "targets": 1 },
            { "width": "3%", "className": "text-left", "targets": 2 },
            { "width": "3%", "className": "text-right", "targets": 3 },
            { "width": "3%", "className": "text-right", "targets": 4 },
            { "width": "3%", "className": "text-right", "targets": 5 },
            { "width": "3%", "className": "text-center", "targets": 6 },
            { "width": "3%", "className": "text-right", "targets": 7 },

            { "width": "3%", "className": "text-left", "targets": 8 },
            { "width": "3%", "className": "text-left", "targets": 9 },
            { "width": "3%", "className": "text-left", "targets": 10 },

            { "width": "3%", "className": "text-center", "targets": 11 },
            { "width": "3%", "className": "text-center", "targets": 12 },

            { "width": "3%", "className": "text-center", "targets": 13 },

            { "width": "3%", "className": "text-left none", "targets": 14 },
            { "width": "3%", "className": "text-center none", "targets": 15 },

            { "width": "3%", "className": "text-center", "targets": 16 },
            { "width": "3%", "className": "text-center", "targets": 17 },

            { "targets": 0, "render": function (data, type, row) { return data; } },
            { "targets": 1, "render": function (data, type, row) { return data; } },
            { "targets": 2, "render": function (data, type, row) { return data; } },
            { "targets": 3, "render": function (data, type, row) { return DataTableFormatDoubleNullAlertGet(data); } },
            { "targets": 4, "render": function (data, type, row) { return DataTableFormatIntNullAlertGet(data); } },
            { "targets": 5, "render": function (data, type, row) { return DataTableFormatDoubleNullAlertGet(data); } },
            { "targets": 6, "render": function (data, type, row) { return DataTableDateValueFromDate(data); } },
            { "targets": 7, "render": function (data, type, row) { return data; } },

            { "targets": 8, "render": function (data, type, row) { return data; } },
            { "targets": 9, "render": function (data, type, row) { return data; } },
            { "targets": 10, "render": function (data, type, row) { return data; } },

            { "targets": 11, "render": function (data, type, row) { return DataTableDhmValueFromData(data); } },
            { "targets": 12, "render": function (data, type, row) { return DataTableDhmValueFromData(data); } },

            { "targets": 13, "render": function (data, type, row) { return ProjectImageGet(data); } },

            { "targets": 14, "render": function (data, type, row) { return data; } },
            { "targets": 15, "render": function (data, type, row) { return DataTableDhmValueFromData(data); } },

            {
                "targets": 16, "render": function (data, type, row) {

                    var PatternForm = 'Edit';
                    var Icon = 'fas fa-edit';
                    var Label = '';
                    var RowId = data;

                    var OnClick = 'ProjectAdminProjectFormLoad(' +
                        row['ProjectId'] + ', ' +
                        '\'' + row['ProjectCode'] + '\', ' +
                        '\'' + row['ProjectName'] + '\', ' +
                        row['BudgetMoney'] + ', ' +
                        row['BudgetHours'] + ', ' +
                        row['TaxRate'] + ', ' +
                        row['YearTh'] + ', ' +
                        row['MonthTh'] + ', ' +
                        row['DayTh'] + ', ' +
                        
                        row['DurationNumber'] + ', ' +
                        row['DurationTimeId'] + ', ' + 
                        row['CompanyId'] + ', ' +
                        row['SponsorId'] + ', ' +
                        row['ProjectManagerId'] + ', ' +
                        row['YearRS'] + ', ' +
                        row['MonthRS'] + ', ' +
                        row['DayRS'] + ', ' +
                        row['YearRE'] + ', ' +
                        row['MonthRE'] + ', ' +
                        row['DayRE'] + ', ' +
                        '\'' + row['LogoPath'] + '\'' +
                        ')';

                    //var RowId = '';
                    return DataTableFormBtnIdGet(Pattern, PatternForm, RowId, Label, OnClick, Icon);
                }
            },
            { "targets": 17, "render": function (data, type, row) { return DataTableBtnDeleteGet(Pattern, data); } },
        ],
        "iDisplayLength": 20,
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
        "bFilter": true,
        "autoWidth": true,
        "searching": true,
        "lengthChange": true,
        "showNEntries": true,
        "bInfo": true,
        "bPaginate": true,
        "ordering": false
    });
}


function ProjectAdminProjectFormLoad(ProjectId,
    ProjectCode,
    ProjectName,
    BudgetMoney,
    BudgetHours,
    TaxRate,
    YearTh,
    MonthTh,
    DayTh,
    DurationNumber,
    DurationTimeId,
    CompanyId,
    SponsorId,
    ProjectManagerId,
    YearRS,
    MonthRS,
    DayRS,
    YearRE,
    MonthRE,
    DayRE,
    LogoPath) {

    HideReport('ProjectAdminProjectEditModalDialogReportId');

    ElementDropDownListSet('ProjectId5', ProjectId);
    ElementValueSet('CodeId5', ProjectCode);
    ElementValueSet('NameId5', ProjectName);
    ElementValueSet('BudgetMoneyId5', BudgetMoney);
    ElementValueSet('BudgetHoursId5', BudgetHours);
    ElementValueSet('TaxRateId5', TaxRate);
    ElementInputDateValueSet('DhmValueStartThId5', YearTh, MonthTh, DayTh);
    ElementValueSet('DurationNumberId5', DurationNumber);
    ElementDropDownListSet('DurationTimeId5', DurationTimeId);
    ElementDropDownListSet('CompanyId5', CompanyId);
    ElementDropDownListSet('SponsorId5', SponsorId);
    ElementDropDownListSet('ProjectManagerId5', ProjectManagerId);
    ElementInputDateValueSet('DhmValueStartRealId5', YearRS, MonthRS, DayRS);
    ElementInputDateValueSet('DhmValueEndRealId5', YearRE, MonthRE, DayRE);   

    //Fill
    document.getElementById('ImageId5').src = LogoPath;
    
    //action
    var Pattern = 'ProjectAdminProjectEdit';
    var Label = 'Save';
    var Icon = 'far fa-save';
    var OnClick = 'ProjectAdminProjectEdit(' + ProjectId + ')';
    ModalActionBtnGet(Pattern, Label, Icon, OnClick);

    //Style
    document.getElementById('ProjectAdminProjectEditModalDialogReportId').style.width = '70%';
    document.getElementById('ProjectAdminProjectEditModalDialogReportId').style.marginLeft = 'auto';
    document.getElementById('ProjectAdminProjectEditModalDialogReportId').style.marginTop = 'auto';
    document.getElementById('ProjectAdminProjectEditModalDialogReportId').style.maxWidth = '1900px';

    ShowReport('ProjectAdminProjectEditModalDialogReportId');
}


function ProjectAdminProjectEdit(ProjectId) {

    var ProjectCode = ElementValueGet('CodeId5');
    var ProjectName = ElementValueGet('NameId5');
    var BudgetMoney = ElementValueGet('BudgetMoneyId5');
    var BudgetHours = ElementValueGet('BudgetHoursId5');
    var DhmValueStartThString = ElementDateStringFromDatePickerGet('DhmValueStartThId5');
    var DurationTimeId = ElementDropDownListValueGet('DurationTimeId5');
    var DurationNumber = ElementValueGet('DurationNumberId5');
    var DhmValueStartRealString = ElementDateStringFromDatePickerGet('DhmValueStartRealId5');
    var DhmValueEndRealString = ElementDateStringFromDatePickerGet('DhmValueEndRealId5');
    var CompanyId = ElementDropDownListValueGet('CompanyId5');
    var SponsorId = ElementDropDownListValueGet('SponsorId5');
    var ProjectManagerId = ElementDropDownListValueGet('ProjectManagerId5');
    var TaxRate = ElementValueGet('TaxRateId5');
    
    var files = $("#FileId5").get(0).files;
    var data = new FormData();
    for (var i = 0; i < files.length; i++) {
        data.append("FileId5", files[i]);
    };

    data.append("ProjectId", ProjectId);
    data.append("ProjectCode", ProjectCode);
    data.append("ProjectName", ProjectName);
    data.append("BudgetMoney", BudgetMoney);
    data.append("BudgetHours", BudgetHours);
    data.append("DhmValueStartThString", DhmValueStartThString);
    data.append("DurationTimeId", DurationTimeId);
    data.append("DurationNumber", DurationNumber);
    data.append("DhmValueStartRealString", DhmValueStartRealString);
    data.append("DhmValueEndRealString", DhmValueEndRealString);
    data.append("CompanyId", CompanyId);
    data.append("SponsorId", SponsorId);
    data.append("ProjectManagerId", ProjectManagerId);
    data.append("TaxRate", TaxRate);

    $.ajax({
        url: "/Project/ProjectAdminProjectEdit",
        method: "POST",
        dataType: "json",
        contentType: false,
        processData: false,
        data: data,
        success: function (data) {
            ProjectAdminProjectDisplay();
        }
    });
}

function ProjectAdminBuildingDisplay() {

    var ActionBtnId = 'ParamActionBtnId0';
    var Icon = 'fas fa-eye';
    var IsMargin = true;

    var Keyword = GetElementValue('KeywordId');

    ProjectAdminBuildingGet(ActionBtnId, Icon, IsMargin, Keyword);
}

function ProjectAdminBuildingGet(ActionBtnId, Icon, IsMargin, Keyword, ProjectId) {

    //Spin
    ActionSpin(ActionBtnId, IsMargin);

    var Pattern = 'ProjectAdminBuilding';
    var PatternTableId = Pattern + 'TableId';
    var PatternTableReportId = Pattern + 'TableReportId';

    HideReport(PatternTableReportId);

    $('#' + PatternTableId).DataTable().destroy();;
    $('#' + PatternTableId).DataTable({
        "initComplete": function (settings, json) {
            ShowReport(PatternTableReportId);
            ActionBtnSet(ActionBtnId, Icon, IsMargin);
        },
        "ajax": {
            "url": "/Project/ProjectAdminBuildingGet",
            "type": "GET",
            "datatype": "json",
            "data": {
                Keyword: Keyword
            }
        },
        "columns": [
            { "data": "BuildingId" },//0
            { "data": "BuildingCode" },//1
            { "data": "BuildingName" },//2

            { "data": "BuildingId" },//3 Edit
            { "data": "BuildingId" },//4 Delete
        ],
        "columnDefs": [
            { "width": "3%", "className": "text-left", "targets": 0 },
            { "width": "3%", "className": "text-left", "targets": 1 },
            { "width": "3%", "className": "text-left", "targets": 2 },

            { "width": "3%", "className": "text-center", "targets": 3 },
            { "width": "3%", "className": "text-center", "targets": 4 },

            { "targets": 0, "render": function (data, type, row) { return data; } },
            { "targets": 1, "render": function (data, type, row) { return data; } },
            { "targets": 2, "render": function (data, type, row) { return data; } },

            {
                "targets": 3, "render": function (data, type, row) {

                    var PatternForm = 'Edit';
                    var Icon = 'fas fa-edit';
                    var Label = '';
                    var RowId = data;

                    var OnClick = 'ProjectAdminBuildingFormLoad(' +
                        row['BuildingId'] + ', ' +
                        '\'' + row['BuildingCode'] + '\', ' +
                        '\'' + row['BuildingName'] + '\')';

                    //var RowId = '';
                    return DataTableFormBtnIdGet(Pattern, PatternForm, RowId, Label, OnClick, Icon);
                }
            },
            { "targets": 4, "render": function (data, type, row) { return DataTableBtnDeleteGet(Pattern, data); } },
        ],
        "iDisplayLength": 20,
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
        "bFilter": true,
        "autoWidth": true,
        "searching": true,
        "lengthChange": true,
        "showNEntries": true,
        "bInfo": true,
        "bPaginate": true,
        "ordering": false
    });
}
         
function ProjectAdminBuildingAdd() {
    //Set action button
    var ActionBtnId = ParamActionBtnIdAddGet();
    var Icon = ParamActionIconAddGet();
    var IsMargin = true;

    //Get input values

    var Code = ElementValueGet('CodeId');
    var Name = ElementValueGet('NameId');
    var ZoneId = ElementDropDownListValueGet('ZoneId');
    
    if (Code != '' && Name != '' && ZoneId != '0') {

        ParamMessageReset();

        //Spin
        ActionSpin(ActionBtnId, IsMargin);

        //Insert
        var obj = {};
        obj.Code = Code;
        obj.Name = Name;
        obj.ZoneId = ZoneId;
        
        $.ajax({
            url: "/Project/ProjectAdminBuildingAdd",
            method: "POST",
            data: JSON.stringify(obj),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {
                ActionBtnSet(ActionBtnId, Icon, IsMargin);
                ProjectAdminBuildingDisplay();
                ElementInputSet('NameId', '');
                ElementInputSet('CodeId', '');
                ElementInputSet('CommentId', '');
            }
        });

        //Connection
        NotiConnectionIdUpdate('Project-Administration-Ajouter un bâtiment');
    }
    else {
        ParamMessageErrorDisplay('Certains champs sont obligatoire')
    }
}


function ProjectAdminBuildingFormLoad(BuildingId, BuildingCode, BuildingName) {

    HideReport('ProjectAdminBuildingEditModalDialogReportId');

    ElementValueSet('CodeId6', BuildingCode);
    ElementValueSet('NameId6', BuildingName);

    //action
    var Pattern = 'ProjectAdminBuildingEdit';
    var Label = 'Save';
    var Icon = 'far fa-save';
    var OnClick = 'ProjectAdminBuildingEdit(' + BuildingId + ')';
    ModalActionBtnGet(Pattern, Label, Icon, OnClick);

    ShowReport('ProjectAdminBuildingEditModalDialogReportId');
}


function ProjectAdminBuildingEdit(BuildingId) {

    var FunctionCategoryId = ElementDropDownListValueGet('FunctionCategoryId4');
    var FunctionTypeId = ElementDropDownListValueGet('FunctionTypeId4');
    var FunctionName = GetElementValue('NameId4');

    //Edit
    var obj = {};
    obj.FunctionId = FunctionId;
    obj.FunctionCategoryId = FunctionCategoryId;
    obj.FunctionTypeId = FunctionTypeId;
    obj.FunctionName = FunctionName;

    $.ajax({
        url: "/Project/ProjectAdminFunctionEdit",
        method: "POST",
        data: JSON.stringify(obj),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            ProjectAdminFunctionDisplay();
        }
    });
}

function ProjectAdminStageDisplay() {

    var ActionBtnId = 'ParamActionBtnId0';
    var Icon = 'fas fa-eye';
    var IsMargin = true;

    var ProjectId = ElementDropDownListValueGet('ProjectId');

    ProjectAdminStageGet(ActionBtnId, Icon, IsMargin, ProjectId);
}


function ProjectAdminStageGet(ActionBtnId, Icon, IsMargin, ProjectId) {

    //Spin
    ActionSpin(ActionBtnId, IsMargin);

    var Pattern = 'ProjectAdminStage';
    var PatternTableId = Pattern + 'TableId';
    var PatternTableReportId = Pattern + 'TableReportId';

    HideReport(PatternTableReportId);

    $('#' + PatternTableId).DataTable().destroy();;
    $('#' + PatternTableId).DataTable({
        "initComplete": function (settings, json) {
            ShowReport(PatternTableReportId);
            ActionBtnSet(ActionBtnId, Icon, IsMargin);
        },
        "ajax": {
            "url": "/Project/ProjectAdminStageGet",
            "type": "GET",
            "datatype": "json",
            "data": {
                ProjectId: ProjectId
            }
        },
        "columns": [
            { "data": "ProjectName" },//0            
            { "data": "StageName" },//1

            { "data": "StageId" },//2 Edit
            { "data": "StageId" },//3 Delete
        ],
        "columnDefs": [
            { "width": "3%", "className": "text-left", "targets": 0 },
            { "width": "3%", "className": "text-left", "targets": 1 },

            { "width": "3%", "className": "text-center", "targets": 2 },
            { "width": "3%", "className": "text-center", "targets": 3 },

            { "targets": 0, "render": function (data, type, row) { return data; } },           
            { "targets": 1, "render": function (data, type, row) { return data; } },

            { "targets": 2, "render": function (data, type, row) { return DataTableModalFormBtnEditGet(Pattern, data); } },
            { "targets": 3, "render": function (data, type, row) { return DataTableBtnDeleteGet(Pattern, data); } },
        ],
        "iDisplayLength": 20,
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
        "bFilter": true,
        "autoWidth": true,
        "searching": true,
        "lengthChange": true,
        "showNEntries": true,
        "bInfo": true,
        "bPaginate": true,
        "ordering": false
    });
}

function ProjectAdminStageAdd() {
    //Set action button
    var ActionBtnId = ParamActionBtnIdAddGet();
    var Icon = ParamActionIconAddGet();
    var IsMargin = true;

    //Get input values

    var Code = ElementValueGet('CodeId');
    var Name = ElementValueGet('NameId');
    var BuildingId = ElementDropDownListValueGet('BuildingId');

    if (Code != '' && Name != '' && BuildingId != '0') {

        ParamMessageReset();

        //Spin
        ActionSpin(ActionBtnId, IsMargin);

        //Insert
        var obj = {};
        obj.Code = Code;
        obj.Name = Name;
        obj.BuildingId = BuildingId;

        $.ajax({
            url: "/Project/ProjectAdminStageAdd",
            method: "POST",
            data: JSON.stringify(obj),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {
                ActionBtnSet(ActionBtnId, Icon, IsMargin);
                ProjectAdminStageDisplay();
                ElementInputSet('NameId', '');
                ElementInputSet('CodeId', '');
                ElementInputSet('CommentId', '');
            }
        });

        //Connection
        NotiConnectionIdUpdate('Project-Administration-Ajouter un étage');
    }
    else {
        ParamMessageErrorDisplay('Certains champs sont obligatoire')
    }
}

function ProjectAdminZoneDisplay() {

    var ActionBtnId = 'ParamActionBtnId0';
    var Icon = 'fas fa-eye';
    var IsMargin = true;

    var ProjectId = ElementDropDownListValueGet('ProjectId');

    ProjectAdminZoneGet(ActionBtnId, Icon, IsMargin, ProjectId);
}

function ProjectAdminZoneGet(ActionBtnId, Icon, IsMargin, ProjectId) {

    //Spin
    ActionSpin(ActionBtnId, IsMargin);

    var Pattern = 'ProjectAdminZone';
    var PatternTableId = Pattern + 'TableId';
    var PatternTableReportId = Pattern + 'TableReportId';

    HideReport(PatternTableReportId);

    $('#' + PatternTableId).DataTable().destroy();;
    $('#' + PatternTableId).DataTable({
        "initComplete": function (settings, json) {
            ShowReport(PatternTableReportId);
            ActionBtnSet(ActionBtnId, Icon, IsMargin);
        },
        "ajax": {
            "url": "/Project/ProjectAdminZoneGet",
            "type": "GET",
            "datatype": "json",
            "data": {
                ProjectId: ProjectId
            }
        },
        "columns": [
            { "data": "ProjectName" },//0
            { "data": "ZoneName" },//1

            { "data": "ZoneId" },//2 Edit
            { "data": "ZoneId" },//3 Delete
        ],
        "columnDefs": [
            { "width": "3%", "className": "text-left", "targets": 0 },
            { "width": "3%", "className": "text-left", "targets": 1 },

            { "width": "3%", "className": "text-center", "targets": 2 },
            { "width": "3%", "className": "text-center", "targets": 3 },

            { "targets": 0, "render": function (data, type, row) { return data; } },
            { "targets": 1, "render": function (data, type, row) { return data; } },

            { "targets": 2, "render": function (data, type, row) { return DataTableModalFormBtnEditGet(Pattern, data); } },
            { "targets": 3, "render": function (data, type, row) { return DataTableBtnDeleteGet(Pattern, data); } },
        ],
        "iDisplayLength": 20,
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
        "bFilter": true,
        "autoWidth": true,
        "searching": true,
        "lengthChange": true,
        "showNEntries": true,
        "bInfo": true,
        "bPaginate": true,
        "ordering": false
    });
}


function ProjectAdminZoneAdd() {

    //Set action button
    var ActionBtnId = ParamActionBtnIdAddGet();
    var Icon = ParamActionIconAddGet();
    var IsMargin = true;

    //Get input values
    var Code = ElementValueGet('CodeId');
    var Name = ElementValueGet('NameId');
    var ProjectId = ElementDropDownListValueGet('ProjectId');

    if (Code != '' && Name != '' && ProjectId != '0') {

        ParamMessageReset();

        //Spin
        ActionSpin(ActionBtnId, IsMargin);

        //Insert
        var obj = {};
        obj.Code = Code;
        obj.Name = Name;
        obj.ProjectId = ProjectId;

        $.ajax({
            url: "/Project/ProjectAdminZoneAdd",
            method: "POST",
            data: JSON.stringify(obj),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {
                ActionBtnSet(ActionBtnId, Icon, IsMargin);
                ProjectAdminZoneDisplay();
                ElementInputSet('NameId', '');
                ElementInputSet('CodeId', '');
                ElementInputSet('CommentId', '');
            }
        });

        //Connection
        NotiConnectionIdUpdate('Project-Administration-Ajouter une zone');
    }
    else {
        ParamMessageErrorDisplay('Certains champs sont obligatoire')
    }
}

function ProjectAdminCompanyDisplay() {

    var ActionBtnId = 'ParamActionBtnId0';
    var Icon = 'fas fa-eye';
    var IsMargin = true;

    var Keyword = GetElementValue('KeywordId');

    ProjectAdminCompanyGet(ActionBtnId, Icon, IsMargin, Keyword);
}

function ProjectAdminCompanyGet(ActionBtnId, Icon, IsMargin, Keyword, ProjectId, ZoneId) {

    //Spin
    ActionSpin(ActionBtnId, IsMargin);

    var Pattern = 'ProjectAdminCompany';
    var PatternTableId = Pattern + 'TableId';
    var PatternTableReportId = Pattern + 'TableReportId';

    HideReport(PatternTableReportId);

    $('#' + PatternTableId).DataTable().destroy();;
    $('#' + PatternTableId).DataTable({
        "initComplete": function (settings, json) {
            ShowReport(PatternTableReportId);
            ActionBtnSet(ActionBtnId, Icon, IsMargin);
        },
        "ajax": {
            "url": "/Project/ProjectAdminCompanyGet",
            "type": "GET",
            "datatype": "json",
            "data": {
                Keyword: Keyword
            }
        },
        "columns": [
            { "data": "CompanyId" },//0
            { "data": "CompanyName" },//1
            { "data": "CompanyCode" },//2

            { "data": "CompanyId" },//3 Edit
            { "data": "CompanyId" },//4 Delete
        ],
        "columnDefs": [
            { "width": "3%", "className": "text-left", "targets": 0 },
            { "width": "3%", "className": "text-left", "targets": 1 },
            { "width": "3%", "className": "text-left", "targets": 2 },

            { "width": "3%", "className": "text-center", "targets": 3 },
            { "width": "3%", "className": "text-center", "targets": 4 },

            { "targets": 0, "render": function (data, type, row) { return data; } },
            { "targets": 1, "render": function (data, type, row) { return data; } },
            { "targets": 2, "render": function (data, type, row) { return data; } },

            { "targets": 3, "render": function (data, type, row) { return DataTableModalFormBtnEditGet(Pattern, data); } },
            { "targets": 4, "render": function (data, type, row) { return DataTableGetButton('ProjectAdminCompanyDelete', data, 'far fa-trash-alt', 'fe1200'); } },
        ],
        "iDisplayLength": 20,
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
        "bFilter": true,
        "autoWidth": true,
        "searching": true,
        "lengthChange": true,
        "showNEntries": true,
        "bInfo": true,
        "bPaginate": true,
        "ordering": false
    });
}

function ProjectAdminCompanyAdd() {
    //Set action button
    var ActionBtnId = ParamActionBtnIdAddGet();
    var Icon = ParamActionIconAddGet();
    var IsMargin = true;

    //Get input values

    var Code = ElementValueGet('CodeId');
    var Name = ElementValueGet('NameId');

    if (Code != '' && Name != '') {

        ParamMessageReset();

        //Spin
        ActionSpin(ActionBtnId, IsMargin);

        //Insert
        var obj = {};
        obj.Code = Code;
        obj.Name = Name;

        $.ajax({
            url: "/Project/ProjectAdminCompanyAdd",
            method: "POST",
            data: JSON.stringify(obj),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {
                ActionBtnSet(ActionBtnId, Icon, IsMargin);
                ProjectAdminCompanyDisplay();
                ElementInputSet('NameId', '');
                ElementInputSet('CodeId', '');
                ElementInputSet('CommentId', '');
            }
        });

        //Connection
        NotiConnectionIdUpdate('Project-Administration-Ajouter une entreprise');
    }
    else {
        ParamMessageErrorDisplay('Certains champs sont obligatoire')
    }
}

function ProjectAdminSponsorDisplay() {

    var ActionBtnId = 'ParamActionBtnId0';
    var Icon = 'fas fa-eye';
    var IsMargin = true;

    var Keyword = GetElementValue('KeywordId');

    ProjectAdminSponsorGet(ActionBtnId, Icon, IsMargin, Keyword);
}


function ProjectAdminSponsorGet(ActionBtnId, Icon, IsMargin, Keyword) {

    //Spin
    ActionSpin(ActionBtnId, IsMargin);

    var Pattern = 'ProjectAdminSponsor';
    var PatternTableId = Pattern + 'TableId';
    var PatternTableReportId = Pattern + 'TableReportId';

    HideReport(PatternTableReportId);

    $('#' + PatternTableId).DataTable().destroy();;
    $('#' + PatternTableId).DataTable({
        "initComplete": function (settings, json) {
            ShowReport(PatternTableReportId);
            ActionBtnSet(ActionBtnId, Icon, IsMargin);
        },
        "ajax": {
            "url": "/Project/ProjectAdminSponsorGet",
            "type": "GET",
            "datatype": "json",
            "data": {
                Keyword: Keyword
            }
        },
        "columns": [
            { "data": "SponsorId" },//0
            { "data": "SponsorName" },//1
            { "data": "SponsorCode" },//2

            { "data": "SponsorId" },//3 Edit
            { "data": "SponsorId" },//4 Delete
        ],
        "columnDefs": [
            { "width": "3%", "className": "text-left", "targets": 0 },
            { "width": "3%", "className": "text-left", "targets": 1 },
            { "width": "3%", "className": "text-left", "targets": 2 },

            { "width": "3%", "className": "text-center", "targets": 3 },
            { "width": "3%", "className": "text-center", "targets": 4 },

            { "targets": 0, "render": function (data, type, row) { return data; } },
            { "targets": 1, "render": function (data, type, row) { return data; } },
            { "targets": 2, "render": function (data, type, row) { return data; } },

            { "targets": 3, "render": function (data, type, row) { return DataTableModalFormBtnEditGet(Pattern, data); } },
            { "targets": 4, "render": function (data, type, row) { return DataTableGetButton('ProjectAdminSponsorDelete', data, 'far fa-trash-alt', 'fe1200'); } },
        ],
        "iDisplayLength": 20,
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
        "bFilter": true,
        "autoWidth": true,
        "searching": true,
        "lengthChange": true,
        "showNEntries": true,
        "bInfo": true,
        "bPaginate": true,
        "ordering": false
    });
}

function ProjectAdminSponsorAdd() {
    //Set action button
    var ActionBtnId = ParamActionBtnIdAddGet();
    var Icon = ParamActionIconAddGet();
    var IsMargin = true;

    //Get input values

    var Code = ElementValueGet('CodeId');
    var Name = ElementValueGet('NameId');

    if (Code != '' && Name != '') {

        ParamMessageReset();

        //Spin
        ActionSpin(ActionBtnId, IsMargin);

        //Insert
        var obj = {};
        obj.Code = Code;
        obj.Name = Name;

        $.ajax({
            url: "/Project/ProjectAdminSponsorAdd",
            method: "POST",
            data: JSON.stringify(obj),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {
                ActionBtnSet(ActionBtnId, Icon, IsMargin);
                ProjectAdminSponsorDisplay();
                ElementInputSet('NameId', '');
                ElementInputSet('CodeId', '');
                ElementInputSet('CommentId', '');
            }
        });

        //Connection
        NotiConnectionIdUpdate('Project-Administration-Ajouter un mâitre d\'ouvrage');
    }
    else {
        ParamMessageErrorDisplay('Certains champs sont obligatoire')
    }
}

function ProjectAdminProjectManagerDisplay() {

    var ActionBtnId = 'ParamActionBtnId0';
    var Icon = 'fas fa-eye';
    var IsMargin = true;

    var Keyword = GetElementValue('KeywordId');

    ProjectAdminProjectManagerGet(ActionBtnId, Icon, IsMargin, Keyword);
}


function ProjectAdminProjectManagerGet(ActionBtnId, Icon, IsMargin, Keyword) {

    //Spin
    ActionSpin(ActionBtnId, IsMargin);

    var Pattern = 'ProjectAdminProjectManager';
    var PatternTableId = Pattern + 'TableId';
    var PatternTableReportId = Pattern + 'TableReportId';

    HideReport(PatternTableReportId);

    $('#' + PatternTableId).DataTable().destroy();;
    $('#' + PatternTableId).DataTable({
        "initComplete": function (settings, json) {
            ShowReport(PatternTableReportId);
            ActionBtnSet(ActionBtnId, Icon, IsMargin);
        },
        "ajax": {
            "url": "/Project/ProjectAdminProjectManagerGet",
            "type": "GET",
            "datatype": "json",
            "data": {
                Keyword: Keyword
            }
        },
        "columns": [
            { "data": "ProjectManagerId" },//0
            { "data": "ProjectManagerName" },//1
            { "data": "ProjectManagerCode" },//2

            { "data": "ProjectManagerId" },//3 Edit
            { "data": "ProjectManagerId" },//4 Delete
        ],
        "columnDefs": [
            { "width": "3%", "className": "text-left", "targets": 0 },
            { "width": "3%", "className": "text-left", "targets": 1 },
            { "width": "3%", "className": "text-left", "targets": 2 },

            { "width": "3%", "className": "text-center", "targets": 3 },
            { "width": "3%", "className": "text-center", "targets": 4 },

            { "targets": 0, "render": function (data, type, row) { return data; } },
            { "targets": 1, "render": function (data, type, row) { return data; } },
            { "targets": 2, "render": function (data, type, row) { return data; } },

            { "targets": 3, "render": function (data, type, row) { return DataTableModalFormBtnEditGet(Pattern, data); } },
            { "targets": 4, "render": function (data, type, row) { return DataTableGetButton('ProjectAdminProjectManagerDelete', data, 'far fa-trash-alt', 'fe1200'); } },
        ],
        "iDisplayLength": 20,
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
        "bFilter": true,
        "autoWidth": true,
        "searching": true,
        "lengthChange": true,
        "showNEntries": true,
        "bInfo": true,
        "bPaginate": true,
        "ordering": false
    });
}

function ProjectAdminProjectManagerAdd() {
    //Set action button
    var ActionBtnId = ParamActionBtnIdAddGet();
    var Icon = ParamActionIconAddGet();
    var IsMargin = true;

    //Get input values

    var Code = ElementValueGet('CodeId');
    var Name = ElementValueGet('NameId');

    if (Code != '' && Name != '') {

        ParamMessageReset();

        //Spin
        ActionSpin(ActionBtnId, IsMargin);

        //Insert
        var obj = {};
        obj.Code = Code;
        obj.Name = Name;

        $.ajax({
            url: "/Project/ProjectAdminProjectManagerAdd",
            method: "POST",
            data: JSON.stringify(obj),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {
                ActionBtnSet(ActionBtnId, Icon, IsMargin);
                ProjectAdminProjectManagerDisplay();
                ElementInputSet('NameId', '');
                ElementInputSet('CodeId', '');
                ElementInputSet('CommentId', '');
            }
        });

        //Connection
        NotiConnectionIdUpdate('Project-Administration-Ajouter un mâitre d\'oeuvre');
    }
    else {
        ParamMessageErrorDisplay('Certains champs sont obligatoire')
    }
}

function ProjectAdminProjectFunctionDisplay() {

    var ActionBtnId = 'ParamActionBtnId0';
    var Icon = 'fas fa-eye';
    var IsMargin = true;

    var Keyword = GetElementValue('KeywordId');

    ProjectAdminProjectFunctionGet(ActionBtnId, Icon, IsMargin, Keyword);
}

function ProjectAdminProjectFunctionGet(ActionBtnId, Icon, IsMargin, Keyword) {

    //Spin
    ActionSpin(ActionBtnId, IsMargin);

    var Pattern = 'ProjectAdminProjectFunction';
    var PatternTableId = Pattern + 'TableId';
    var PatternTableReportId = Pattern + 'TableReportId';

    HideReport(PatternTableReportId);

    $('#' + PatternTableId).DataTable().destroy();;
    $('#' + PatternTableId).DataTable({
        "initComplete": function (settings, json) {
            ShowReport(PatternTableReportId);
            ActionBtnSet(ActionBtnId, Icon, IsMargin);
        },
        "ajax": {
            "url": "/Project/ProjectAdminProjectFunction",
            "type": "GET",
            "datatype": "json",
            "data": {
                Keyword: Keyword
            }
        },
        "columns": [
            { "data": "ProjectFunctionId" },//0
            { "data": "ProjectFunctionName" },//1
            { "data": "ProjectFunctionCode" },//2

            { "data": "ProjectFunctionId" },//3 Edit
            { "data": "ProjectFunctionId" },//4 Delete
        ],
        "columnDefs": [
            { "width": "3%", "className": "text-left", "targets": 0 },
            { "width": "3%", "className": "text-left", "targets": 1 },
            { "width": "3%", "className": "text-left", "targets": 2 },

            { "width": "3%", "className": "text-center", "targets": 3 },
            { "width": "3%", "className": "text-center", "targets": 4 },

            { "targets": 0, "render": function (data, type, row) { return data; } },
            { "targets": 1, "render": function (data, type, row) { return data; } },
            { "targets": 2, "render": function (data, type, row) { return data; } },

            { "targets": 3, "render": function (data, type, row) { return DataTableModalFormBtnEditGet(Pattern, data); } },
            { "targets": 4, "render": function (data, type, row) { return DataTableGetButton('ProjectAdminProjectFunctionDelete', data, 'far fa-trash-alt', 'fe1200'); } },
        ],
        "iDisplayLength": 20,
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
        "bFilter": true,
        "autoWidth": true,
        "searching": true,
        "lengthChange": true,
        "showNEntries": true,
        "bInfo": true,
        "bPaginate": true,
        "ordering": false
    });
}


function ProjectAdminProjectFunctionAdd() {
    //Set action button
    var ActionBtnId = ParamActionBtnIdAddGet();
    var Icon = ParamActionIconAddGet();
    var IsMargin = true;

    //Get input values

    var Code = ElementValueGet('CodeId');
    var Name = ElementValueGet('NameId');

    if (Code != '' && Name != '') {

        ParamMessageReset();

        //Spin
        ActionSpin(ActionBtnId, IsMargin);

        //Insert
        var obj = {};
        obj.Code = Code;
        obj.Name = Name;

        $.ajax({
            url: "/Project/ProjectAdminProjectFunctionAdd",
            method: "POST",
            data: JSON.stringify(obj),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {
                ActionBtnSet(ActionBtnId, Icon, IsMargin);
                ProjectAdminProjectFunctionDisplay();
                ElementInputSet('NameId', '');
                ElementInputSet('CodeId', '');
                ElementInputSet('CommentId', '');
            }
        });

        //Connection
        NotiConnectionIdUpdate('Project-Administration-Ajouter une fonction');
    }
    else {
        ParamMessageErrorDisplay('Certains champs sont obligatoire')
    }
}



function ProjectProgressHomeOpen() {
    ProjectAllReportsHide();
    ProjectAllParametersHide();
    MenuBarNavHighlight(1, 2, 1);

    //Reset
    ProjectProgressInputsMultipleReset(''); 

    HtmlDropDownListWithInputNameOnlyLabelFill('PerimeterId', 0, '/Param/ParamZonesGet', 'ZoneId', 'ZoneName', '010', 'Select Scope');
    HtmlDropDownListWithInputNameOnlyLabelFill('TimeId', 0, '/Param/ParamTimesGet', 'TimeId', 'TimeName', '010', 'Select Period');

    //Defautl
    ProjectProgressOpen();
}


function ProjectProgressOpen() {
    ProjectAllReportsHide();
    ProjectAllParametersHide();
    MenuBarNavHighlight(1, 0, 1);

    ParamTitleSet('Progress');
    ShowReport('ParamReportId');
    ShowReport('ProjectProgressFilterId');

    //ShowParents
    ShowParent('DateId');
    ShowParent('ProjectId');
    ShowParent('BuildingId');
    ShowParent('BlockId');
    ShowParent('SubBlockId');
    ShowParent('StageId');
    ShowParent('LotId');

    ShowParent('StepId');
    ShowParent('DisciplineId');
    ShowParent('PhaseId');
    ShowParent('ZoneId');
    ShowParent('SubPhaseId');
    ShowParent('SubLotId');

    //ShowParent('ActivityId');

    DateValueDefaultSet('DateId', 0);

       

    //ElementDropDownListLabelReset('BuildingId', 'Select Building');
    //ElementDropDownListLabelReset('BlockId', 'Select Block');
    //ElementDropDownListLabelReset('SubBlockId', 'Select SubBlock');
    //ElementDropDownListLabelReset('StageId', 'Select Level');
    //ElementDropDownListLabelReset('LotId', 'Select Lot');



    //Action    
    ParamActionBtnGet(0, 'Display', 'fas fa-eye', "ProjectProgressDisplay()");
    ParamActionBtnGet(1, 'Export Primavera', 'far fa-file-excel', 'ProjectProgressPrimaveraExport()');
    ParamActionBtnGet(2, 'Reset', 'fas fa-power-off', "ProjectProgressInputsMultipleReset('')");

    //Edit
    ProjectProgressInputsDisplay('1');
}

function ProjectProgressInputsMultipleReset(Index) {
    ProjectMultipleSelectFill('ProjectId' + Index, '0', '/Project/ProjectsSecGet', 'ProjectId' + Index, 'ProjectName', 'Select All Projects', "");
    HtmlDropDowListMultipleCheckReset('PhaseId' + Index, 'Select All Phases', "", false);
    HtmlDropDowListMultipleCheckReset('SubPhaseId' + Index, 'Select All SubPahses', "", false);
    HtmlDropDowListMultipleCheckReset('BuildingId' + Index, 'Select All Buildings', "", true);
    HtmlDropDowListMultipleCheckReset('BlockId' + Index, 'Select All Blocks', "", false);
    HtmlDropDowListMultipleCheckReset('SubBlockId' + Index, 'Select All SubBlocks', "", false);
    HtmlDropDowListMultipleCheckReset('ZoneId' + Index, 'Select All Zones', "", false);
    HtmlDropDowListMultipleCheckReset('StageId' + Index, 'Select All Stages', "", true);
    HtmlDropDowListMultipleCheckReset('LotId' + Index, 'Select All Lots', "", true);
    HtmlDropDowListMultipleCheckReset('SubLotId' + Index, 'Select All SubLots', "", false);
    HtmlDropDowListMultipleCheckReset('DisciplineId' + Index, 'Select All Disciplines', "", false);
    HtmlDropDowListMultipleCheckReset('StepId' + Index, 'Select All Steps', "", false);

    HtmlDropDowListMultipleReset('FunctionCategoryId' + Index, 'Select All Categories', "");
    HtmlDropDowListMultipleReset('FunctionTypeId' + Index, 'Select All Types', "");
    HtmlDropDowListMultipleReset('FunctionId' + Index, 'Select All Functions', "");
    HtmlDropDowListMultipleReset('CompanyId' + Index, 'Select All Companies', "");
}

//function ProjectProgressInputsMultipleReset(Index) {
//    HtmlDropDowListRefresh('ProjectId' + Index, 'Select Project', "ProjectProgressInputsDisplay('')");
//    HtmlDropDownListNameOnlyLabelMultipleFill('ProjectId' + Index, '0', '/Project/ProjectsGet', 'ProjectId', 'ProjectName', 'Select Project');
//    HtmlDropDowListMultipleCheckRefresh('PhaseId' + Index, 'Select Phase', "ProjectProgressInputsDisplay('')", false);
//    HtmlDropDowListMultipleCheckRefresh('SubPhaseId' + Index, 'Select SubPahse', "ProjectProgressInputsDisplay('')", false);
//    HtmlDropDowListMultipleCheckRefresh('BuildingId' + Index, 'Select Building', "ProjectProgressInputsDisplay('')", true);
//    HtmlDropDowListMultipleCheckRefresh('BlockId' + Index, 'Select Block', "ProjectProgressInputsDisplay('')", false);
//    HtmlDropDowListMultipleCheckRefresh('SubBlockId' + Index, 'Select SubBlock', "ProjectProgressInputsDisplay('')", false);
//    HtmlDropDowListMultipleCheckRefresh('ZoneId' + Index, 'Select Zone', "ProjectProgressInputsDisplay('')", false);
//    HtmlDropDowListMultipleCheckRefresh('StageId' + Index, 'Select Stage', "ProjectProgressInputsDisplay('')", false);
//    HtmlDropDowListMultipleCheckRefresh('LotId' + Index, 'Select Lot', "ProjectProgressInputsDisplay('')", false);
//    HtmlDropDowListMultipleCheckRefresh('SubLotId' + Index, 'Select SubLot', "ProjectProgressInputsDisplay('')", false);
//    HtmlDropDowListMultipleCheckRefresh('DisciplineId' + Index, 'Select Discipline', "ProjectProgressInputsDisplay('')", false);
//    HtmlDropDowListMultipleCheckRefresh('StepId' + Index, 'Select Step', "ProjectProgressInputsDisplay('')", false);


//}


function ProjectProgressInputsReset(Index) {

    if (Index == '') {
        HtmlDropDowListLabelRefresh('ProjectId' + Index, 'Select Project', "ProjectProgressInputsDisplay('')");
        HtmlDropDownListNameOnlyLabelFill('ProjectId', '0', '/Project/ProjectsGet', 'ProjectId', 'ProjectName', 'Select Project');
        HtmlDropDowListLabelRefresh('PhaseId' + Index, 'Select Phase', "ProjectProgressInputsDisplay('')");
        HtmlDropDowListLabelRefresh('SubPhaseId' + Index, 'Select SubPahse', "ProjectProgressInputsDisplay('')");
        HtmlDropDowListLabelRefresh('BuildingId' + Index, 'Select Building', "ProjectProgressInputsDisplay('')");
        HtmlDropDowListLabelRefresh('BlockId' + Index, 'Select Block', "ProjectProgressInputsDisplay('')");
        HtmlDropDowListLabelRefresh('SubBlockId' + Index, 'Select SubBlock', "ProjectProgressInputsDisplay('')");
        HtmlDropDowListLabelRefresh('ZoneId' + Index, 'Select Zone', "ProjectProgressInputsDisplay('')");
        HtmlDropDowListLabelRefresh('StageId' + Index, 'Select Stage', "ProjectProgressInputsDisplay('')");
        HtmlDropDowListLabelRefresh('LotId' + Index, 'Select Lot', "ProjectProgressInputsDisplay('')");
        HtmlDropDowListLabelRefresh('SubLotId' + Index, 'Select SubLot', "ProjectProgressInputsDisplay('')");
        HtmlDropDowListLabelRefresh('DisciplineId' + Index, 'Select Discipline', "ProjectProgressInputsDisplay('')");
        HtmlDropDowListLabelRefresh('StepId' + Index, 'Select Step', "ProjectProgressInputsDisplay('')");

        HtmlDropDowListLabelRefresh('FunctionCategoryId' + Index, 'Select Category', "ProjectProgressInputsDisplay('')");
        HtmlDropDowListLabelRefresh('FunctionTypeId' + Index, 'Select Type', "ProjectProgressInputsDisplay('')");
        HtmlDropDowListLabelRefresh('FunctionId' + Index, 'Select Function', "ProjectProgressInputsDisplay('')");
        HtmlDropDowListLabelRefresh('CompanyId' + Index, 'Select Company', "ProjectProgressInputsDisplay('')");
    }
    if (Index == '1') {
        HtmlDropDowListRefresh('ProjectId' + Index, 'Project', "ProjectProgressInputsDisplay('')");
        HtmlDropDownListNameOnlyLabelFill('ProjectId', '0', '/Project/ProjectsGet', 'ProjectId', 'ProjectName', 'Select Project');
        HtmlDropDowListRefresh('PhaseId' + Index, 'Phase', "ProjectProgressInputsDisplay('')");
        HtmlDropDowListRefresh('SubPhaseId' + Index, 'SubPahse', "ProjectProgressInputsDisplay('')");
        HtmlDropDowListRefresh('BuildingId' + Index, 'Building', "ProjectProgressInputsDisplay('')");
        HtmlDropDowListRefresh('BlockId' + Index, 'Block', "ProjectProgressInputsDisplay('')");
        HtmlDropDowListRefresh('SubBlockId' + Index, 'SubBlock', "ProjectProgressInputsDisplay('')");
        HtmlDropDowListRefresh('ZoneId' + Index, 'Zone', "ProjectProgressInputsDisplay('')");
        HtmlDropDowListRefresh('StageId' + Index, 'Stage', "ProjectProgressInputsDisplay('')");
        HtmlDropDowListRefresh('LotId' + Index, 'Lot', "ProjectProgressInputsDisplay('')");
        HtmlDropDowListRefresh('SubLotId' + Index, 'SubLot', "ProjectProgressInputsDisplay('')");
        HtmlDropDowListRefresh('DisciplineId' + Index, 'Discipline', "ProjectProgressInputsDisplay('')");
        HtmlDropDowListRefresh('StepId' + Index, 'Step', "ProjectProgressInputsDisplay('')");
    }
}



function CommonJsonParse(data) {
    if (data != '[}') {
        return window.JSON && window.JSON.parse ? window.JSON.parse(data) : (new Function("return " + data))();
    }
    else {
        return '';
    }
}

function CommonMultipleSelectFill(JsonArray, ElementId, DefaultValue, Label) {

    HtmlDropDowListMultipleRefresh(ElementId, Label, "");

    $('#' + ElementId).empty();

    //select all
    var item = document.getElementById(ElementId);
    item.options.length = 0;
    var node = document.createElement("option");
    node.value = 0;
    var textnode = document.createTextNode(Label);
    node.appendChild(textnode);
    item.appendChild(node);

    //deselect all
    var node = document.createElement("option");
    node.value = 'D';
    var textnode = document.createTextNode('Deselect All');
    node.appendChild(textnode);
    item.appendChild(node);

    //Apply
    var node = document.createElement("option");
    node.value = 'OK';
    var textnode = document.createTextNode('Apply');
    node.appendChild(textnode);
    item.appendChild(node);

    var number = 0;
    if (JsonArray != '') {
        var JsonArray = JsonArray.split('},');
        var jmax = JsonArray.length;

        for (var j = 0; j < jmax; j++) {
            var element = JsonArray[j] + '}';
            element = element.replace('[{', '{').replace(']}', '}').replace('}}', '}');
            var obj = CommonJsonParse(element);

            if (obj != '') {
                var node = document.createElement("option");
                node.value = obj[Object.keys(obj)[0]];
                var textnode = document.createTextNode(obj[Object.keys(obj)[1]]);
                node.appendChild(textnode);
                item.appendChild(node);
            }
        };

        number = item.options.length;
        for (var j = 1, len = item.options.length; j < len; j++) {
            //var opt = item.options[j];
            //if (DefaultValue.indexOf(opt.value) !== -1) {
            //    item.options[j].selected = 'selected';
            //}
            item.options[j].selected = 'selected';
        };

    }
    else {
        item.options[0].selected = 'selected';
    }

    //var node = document.createElement("option");
    //node.value = 'OK';
    //var textnode = document.createTextNode('Apply');
    //node.appendChild(textnode);
    //item.appendChild(node);

    

    $('#' + ElementId).multiSelect();
    $('#' + ElementId).attr('title', Label);

    var element1 = document.querySelector('#' + ElementId + 'Parent > div > div > div > label:nth-child(1)');    
    element1.setAttribute('onclick', 'HtmlDropDownMultipleSelectAll(\'' + ElementId + '\', ' + number + ')');

    var element2 = document.querySelector('#' + ElementId + 'Parent > div > div > div > label:nth-child(2)');
    element2.setAttribute('onclick', 'HtmlDropDownMultipleDeselectAll(\'' + ElementId + '\', ' + number + ')');

    var element3 = document.querySelector('#' + ElementId + 'Parent > div > div > div > label:nth-child(3)');
    element3.setAttribute('onclick', 'ProjectProgressInputsMultipleDisplay(\'\')');

    var element10 = document.querySelector('#' + ElementId + 'Parent > div > div > div > label:nth-child(1) > input');
    element10.replaceWith('');

    var element20 = document.querySelector('#' + ElementId + 'Parent > div > div > div > label:nth-child(2) > input');
    element20.replaceWith('');

    var element30 = document.querySelector('#' + ElementId + 'Parent > div > div > div > label:nth-child(3) > input');
    element30.replaceWith('');
}

function CommonMultipleSelectCheckFill(JsonArray, ElementId, DefaultValue, Label, Checked) {

    HtmlDropDowListMultipleRefresh(ElementId, Label, "");

    $('#' + ElementId).empty();

    //select all
    var item = document.getElementById(ElementId);
    item.options.length = 0;
    var node = document.createElement("option");
    node.value = 0;
    var textnode = document.createTextNode(Label);
    node.appendChild(textnode);
    item.appendChild(node);

    //deselect all
    var node = document.createElement("option");
    node.value = 'D';
    var textnode = document.createTextNode('Deselect All');
    node.appendChild(textnode);
    item.appendChild(node);

    //Apply
    var node = document.createElement("option");
    node.value = 'OK';
    var textnode = document.createTextNode('Apply');
    node.appendChild(textnode);
    item.appendChild(node);

    var number = 0;
    if (JsonArray != '') {
        var JsonArray = JsonArray.split('},');
        var jmax = JsonArray.length;

        for (var j = 0; j < jmax; j++) {
            var element = JsonArray[j] + '}';
            element = element.replace('[{', '{').replace(']}', '}').replace('}}', '}');
            var obj = CommonJsonParse(element);

            if (obj != '') {
                var node = document.createElement("option");
                node.value = obj[Object.keys(obj)[0]];
                var textnode = document.createTextNode(obj[Object.keys(obj)[1]]);
                node.appendChild(textnode);
                item.appendChild(node);
            }
        };

        number = item.options.length;
        for (var j = 1, len = item.options.length; j < len; j++) {
            item.options[j].selected = 'selected';
        };

    }
    else {
        item.options[0].selected = 'selected';
    }


    $('#' + ElementId).multiSelect();
    $('#' + ElementId).attr('title', Label);

    var element1 = document.querySelector('#' + ElementId + 'Parent > div > div > div > label:nth-child(1)');
    element1.setAttribute('onclick', 'HtmlDropDownMultipleSelectAll(\'' + ElementId + '\', ' + number + ')');

    var element2 = document.querySelector('#' + ElementId + 'Parent > div > div > div > label:nth-child(2)');
    element2.setAttribute('onclick', 'HtmlDropDownMultipleDeselectAll(\'' + ElementId + '\', ' + number + ')');

    var element3 = document.querySelector('#' + ElementId + 'Parent > div > div > div > label:nth-child(3)');
    element3.setAttribute('onclick', 'ProjectProgressInputsMultipleDisplay(\'\')');

    var element10 = document.querySelector('#' + ElementId + 'Parent > div > div > div > label:nth-child(1) > input');
    element10.replaceWith('');

    var element20 = document.querySelector('#' + ElementId + 'Parent > div > div > div > label:nth-child(2) > input');
    element20.replaceWith('');

    var element30 = document.querySelector('#' + ElementId + 'Parent > div > div > div > label:nth-child(3) > input');
    element30.replaceWith('');


    var ElementParent = document.getElementById(ElementId + 'Parent');
    var node = document.createElement("div");
    node.className = "form-check";
    node.id = ElementId + "CheckParent";
    ElementParent.appendChild(node);

    var ElementCheckParent = document.getElementById(ElementId + 'CheckParent');
    var node = document.createElement("input");
    node.className = "form-check-input";
    node.type = "checkbox";
    node.id = ElementId + "Check";
    node.checked = Checked;
    ElementCheckParent.appendChild(node);
}

function ProjectMultipleSelectFill(ElementId, DefaultValue, JsonRequest, OptionId, OptionName, Label, OnChange) {

    HtmlDropDowListMultipleRefresh(ElementId, Label, OnChange);

    $('#' + ElementId).empty();

    //select all
    var item = document.getElementById(ElementId);
    item.options.length = 0;
    var node = document.createElement("option");
    node.value = 0;
    var textnode = document.createTextNode(Label);
    node.appendChild(textnode);
    item.appendChild(node);

    //deselect all
    var node = document.createElement("option");
    node.value = 'D';
    var textnode = document.createTextNode('Deselect All');
    node.appendChild(textnode);
    item.appendChild(node);

    //Apply
    var node = document.createElement("option");
    node.value = 'OK';
    var textnode = document.createTextNode('Apply');
    node.appendChild(textnode);
    item.appendChild(node);

    var number = 0;

    $.get(JsonRequest, function (data) {
        $.each(data, function (index, row) {
            node = document.createElement("option");
            node.value = row[OptionId];
            textnode = document.createTextNode(row[OptionName]);
            node.appendChild(textnode);
            item.appendChild(node);
        });

        number = item.options.length;
        for (var j = 1, len = item.options.length; j < len; j++) {
            var opt = item.options[j];
            if (opt.value == DefaultValue) {
                item.options[j].selected = 'selected';
                break;
            }
        };

        $('#' + ElementId).multiSelect();
        $('#' + ElementId).attr('title', Label);

        var element1 = document.querySelector('#' + ElementId + 'Parent > div > div > div > label:nth-child(1)');
        element1.setAttribute('onclick', 'HtmlDropDownMultipleSelectAll(\'' + ElementId + '\', ' + number + ')');

        var element2 = document.querySelector('#' + ElementId + 'Parent > div > div > div > label:nth-child(2)');
        element2.setAttribute('onclick', 'HtmlDropDownMultipleDeselectAll(\'' + ElementId + '\', ' + number + ')');

        var element3 = document.querySelector('#' + ElementId + 'Parent > div > div > div > label:nth-child(3)');
        element3.setAttribute('onclick', 'ProjectProgressInputsMultipleDisplay(\'\')');

        var element10 = document.querySelector('#' + ElementId + 'Parent > div > div > div > label:nth-child(1) > input');
        element10.replaceWith('');

        var element20 = document.querySelector('#' + ElementId + 'Parent > div > div > div > label:nth-child(2) > input');
        element20.replaceWith('');

        var element30 = document.querySelector('#' + ElementId + 'Parent > div > div > div > label:nth-child(3) > input');
        element30.replaceWith('');
    });
}

function CommonDropDowListFill(JsonArray, ElementId, DefaultValue, Label, Index) {

    if (Index == '') {
        HtmlDropDowListLabelRefresh(ElementId, Label, "ProjectProgressInputsDisplay('')");
    }
    else {
        HtmlDropDowListRefresh(ElementId, Label, "ProjectProgressInputsDisplay('')");
    }

    $('#' + ElementId).empty();

    var item = document.getElementById(ElementId);
    item.options.length = 0;
    var node = document.createElement("option");
    node.value = 0;
    var textnode = document.createTextNode(Label);
    node.appendChild(textnode);
    item.appendChild(node);

    if (JsonArray != '') {
        var JsonArray = JsonArray.split('},');
        var jmax = JsonArray.length;

        for (var j = 0; j < jmax; j++) {
            var element = JsonArray[j] + '}';
            element = element.replace('[{', '{').replace(']}', '}').replace('}}', '}');
            var obj = CommonJsonParse(element);

            if (obj != '') {
                var node = document.createElement("option");
                node.value = obj[Object.keys(obj)[0]];
                var textnode = document.createTextNode(obj[Object.keys(obj)[1]]);
                node.appendChild(textnode);
                item.appendChild(node);
            }
        };

        for (var j = 0, len = item.options.length; j < len; j++) {
            var opt = item.options[j];
            if (opt.value == DefaultValue) {
                item.options[j].selected = 'selected';
                break;
            }
        };
    }
}

function ProjectProgressInputsDisplay(Index) {

    var ActionBtnId = 'ParamActionBtnId2';
    var Icon = 'fas fa-power-off';

    //Spin
    ActionSpin(ActionBtnId, true);

    var ProjectIds = ElementDropDownListValueGet('ProjectId' + Index);
    var BuildingIds = ElementDropDownListValueGet('BuildingId' + Index);
    var BlockIds = ElementDropDownListValueGet('BlockId' + Index);
    var SubBlockIds = ElementDropDownListValueGet('SubBlockId' + Index);
    var StageIds = ElementDropDownListValueGet('StageId' + Index);
    var LotIds = ElementDropDownListValueGet('LotId' + Index);
    var StepIds = ElementDropDownListValueGet('StepId' + Index);
    var DisciplineIds = ElementDropDownListValueGet('DisciplineId' + Index);
    var PhaseIds = ElementDropDownListValueGet('PhaseId' + Index);
    var ZoneIds = ElementDropDownListValueGet('ZoneId' + Index);
    var SubLotIds = ElementDropDownListValueGet('SubLotId' + Index);
    var SubPhaseIds = ElementDropDownListValueGet('SubPhaseId' + Index);
    var FunctionCategoryIds = '0';
    var FunctionTypeIds = '0';
    var FunctionIds = '0';
    var CompanyIds = '0';

    if (Index == '') {
        var FunctionCategoryIds = ElementDropDownListValueGet('FunctionCategoryId' + Index);
        var FunctionTypeIds = ElementDropDownListValueGet('FunctionTypeId' + Index);
        var FunctionIds = ElementDropDownListValueGet('FunctionId' + Index);
        var CompanyIds = ElementDropDownListValueGet('CompanyId' + Index);
    }

    $.get("/Project/ProjectProgressInputsGet", {
        ProjectIds: ProjectIds,
        PhaseIds: PhaseIds,
        SubPhaseIds: SubPhaseIds,
        BuildingIds: BuildingIds,
        BlockIds: BlockIds,
        SubBlockIds: SubBlockIds,
        ZoneIds: ZoneIds,
        StageIds: StageIds,
        LotIds: LotIds,
        SubLotIds: SubLotIds,
        DisciplineIds: DisciplineIds,
        StepIds: StepIds,
        FunctionCategoryIds: FunctionCategoryIds,
        FunctionTypeIds: FunctionTypeIds,
        FunctionIds: FunctionIds,
        CompanyIds: CompanyIds,
        IsParam: true
    }, function (data) {

        $.each(data, function (index, row) {

            if (row.Pattern == 'ProjectList') {
                var JsonArray = row.JsonValue;
                CommonDropDowListFill(JsonArray, 'ProjectId' + Index, ProjectIds, 'Project', Index);
            }

            if (row.Pattern == 'PhaseList') {
                var JsonArray = row.JsonValue;
                CommonDropDowListFill(JsonArray, 'PhaseId' + Index, PhaseIds, 'Phase', Index);
            }

            if (row.Pattern == 'SubPhaseList') {
                var JsonArray = row.JsonValue;
                CommonDropDowListFill(JsonArray, 'SubPhaseId' + Index, SubPhaseIds, 'SubPhase', Index);
            }

            if (row.Pattern == 'BuildingList') {
                var JsonArray = row.JsonValue;
                CommonDropDowListFill(JsonArray, 'BuildingId' + Index, BuildingIds, 'Building', Index);
            }

            if (row.Pattern == 'BlockList') {
                var JsonArray = row.JsonValue;
                CommonDropDowListFill(JsonArray, 'BlockId' + Index, BlockIds, 'Block', Index);
            }

            if (row.Pattern == 'SubBlockList') {
                var JsonArray = row.JsonValue;
                CommonDropDowListFill(JsonArray, 'SubBlockId' + Index, SubBlockIds, 'SubBlock', Index);
            }

            if (row.Pattern == 'ZoneList') {
                var JsonArray = row.JsonValue;
                CommonDropDowListFill(JsonArray, 'ZoneId' + Index, ZoneIds, 'Zone', Index);
            }

            if (row.Pattern == 'StageList') {
                var JsonArray = row.JsonValue;
                CommonDropDowListFill(JsonArray, 'StageId' + Index, StageIds, 'Stage', Index);
            }

            if (row.Pattern == 'LotList') {
                var JsonArray = row.JsonValue;
                CommonDropDowListFill(JsonArray, 'LotId' + Index, LotIds, 'Lot', Index);
            }

            if (row.Pattern == 'SubLotList') {
                var JsonArray = row.JsonValue;
                CommonDropDowListFill(JsonArray, 'SubLotId' + Index, SubLotIds, 'SubLot', Index);
            }

            if (row.Pattern == 'DisciplineList') {
                var JsonArray = row.JsonValue;
                CommonDropDowListFill(JsonArray, 'DisciplineId' + Index, DisciplineIds, 'Discipline', Index);
            }

            if (row.Pattern == 'StepList') {
                var JsonArray = row.JsonValue;
                CommonDropDowListFill(JsonArray, 'StepId' + Index, StepIds, 'Step', Index);
            }

            if (Index == '') {
                if (row.Pattern == 'FunctionCategoryList') {
                    var JsonArray = row.JsonValue;
                    CommonDropDowListFill(JsonArray, 'FunctionCategoryId' + Index, FunctionCategoryIds, 'Select All Categories', Index);
                }

                if (row.Pattern == 'FunctionTypeList') {
                    var JsonArray = row.JsonValue;
                    CommonDropDowListFill(JsonArray, 'FunctionTypeId' + Index, FunctionTypeIds, 'Select All Types', Index);
                }

                if (row.Pattern == 'FunctionList') {
                    var JsonArray = row.JsonValue;
                    CommonDropDowListFill(JsonArray, 'FunctionId' + Index, FunctionIds, 'Select All Functions', Index);
                } 

                if (row.Pattern == 'CompanyList') {
                    var JsonArray = row.JsonValue;
                    CommonDropDowListFill(JsonArray, 'CompanyId' + Index, CompanyIds, 'Select All Companies', Index);
                }
            }              

            ActionBtnSet(ActionBtnId, Icon, true);
        });
    });
}


function ProjectProgressInputsMultipleDisplay(Index) {

    var ActionBtnId = 'ParamActionBtnId2';
    var Icon = 'fas fa-power-off';

    //Spin
    ActionSpin(ActionBtnId, true);

    var ProjectIds = ElementDropDownListValueMultipleGet('ProjectId' + Index);
    var PhaseIds = ElementDropDownListValueMultipleGet('PhaseId' + Index);
    var SubPhaseIds = ElementDropDownListValueMultipleGet('SubPhaseId' + Index);
    var BuildingIds = ElementDropDownListValueMultipleGet('BuildingId' + Index);
    var BlockIds = ElementDropDownListValueMultipleGet('BlockId' + Index);
    var SubBlockIds = ElementDropDownListValueMultipleGet('SubBlockId' + Index);
    var StageIds = ElementDropDownListValueMultipleGet('StageId' + Index);
    var LotIds = ElementDropDownListValueMultipleGet('LotId' + Index);
    var StepIds = ElementDropDownListValueMultipleGet('StepId' + Index);
    var DisciplineIds = ElementDropDownListValueMultipleGet('DisciplineId' + Index);
    
    var ZoneIds = ElementDropDownListValueMultipleGet('ZoneId' + Index);
    var SubLotIds = ElementDropDownListValueMultipleGet('SubLotId' + Index);
    
    var FunctionCategoryIds = '0';
    var FunctionTypeIds = '0';
    var FunctionIds = '0';
    var CompanyIds = '0';

    if (Index == '') {
        FunctionCategoryIds = ElementDropDownListValueMultipleGet('FunctionCategoryId' + Index);
        FunctionTypeIds = ElementDropDownListValueMultipleGet('FunctionTypeId' + Index);
        FunctionIds = ElementDropDownListValueMultipleGet('FunctionId' + Index);
        CompanyIds = ElementDropDownListValueMultipleGet('CompanyId' + Index);
    }

    //alert(BuildingIds);

    $.get("/Project/ProjectProgressInputsGet", {
        ProjectIds: ProjectIds,
        PhaseIds: PhaseIds,
        SubPhaseIds: SubPhaseIds,
        BuildingIds: BuildingIds,
        BlockIds: BlockIds,
        SubBlockIds: SubBlockIds,
        ZoneIds: ZoneIds,
        StageIds: StageIds,
        LotIds: LotIds,
        SubLotIds: SubLotIds,
        DisciplineIds: DisciplineIds,
        StepIds: StepIds,
        FunctionCategoryIds: FunctionCategoryIds,
        FunctionTypeIds: FunctionTypeIds,
        FunctionIds: FunctionIds,
        CompanyIds: CompanyIds,
        IsParam: false
    }, function (data) {

        $.each(data, function (index, row) {

            if (row.Pattern == 'ProjectList') {
                var JsonArray = row.JsonValue;
                CommonMultipleSelectFill(JsonArray, 'ProjectId' + Index, ProjectIds, 'Select All Projects');
            }

            if (row.Pattern == 'PhaseList') {
                var JsonArray = row.JsonValue;
                CommonMultipleSelectCheckFill(JsonArray, 'PhaseId' + Index, PhaseIds, 'Select All Phases', false);
            }

            if (row.Pattern == 'SubPhaseList') {
                var JsonArray = row.JsonValue;
                CommonMultipleSelectCheckFill(JsonArray, 'SubPhaseId' + Index, SubPhaseIds, 'Select All SubPhases', false);
            }

            if (row.Pattern == 'BuildingList') {
                var JsonArray = row.JsonValue;
                CommonMultipleSelectCheckFill(JsonArray, 'BuildingId' + Index, BuildingIds, 'Select All Buildings', true);
            }

            if (row.Pattern == 'BlockList') {
                var JsonArray = row.JsonValue;
                CommonMultipleSelectCheckFill(JsonArray, 'BlockId' + Index, BlockIds, 'Select All Blocks', false);
            }

            if (row.Pattern == 'SubBlockList') {
                var JsonArray = row.JsonValue;
                CommonMultipleSelectCheckFill(JsonArray, 'SubBlockId' + Index, SubBlockIds, 'Select All SubBlocks', false);
            }

            if (row.Pattern == 'ZoneList') {
                var JsonArray = row.JsonValue;
                CommonMultipleSelectCheckFill(JsonArray, 'ZoneId' + Index, ZoneIds, 'Select All Zones', false);
            }

            if (row.Pattern == 'StageList') {
                var JsonArray = row.JsonValue;
                CommonMultipleSelectCheckFill(JsonArray, 'StageId' + Index, StageIds, 'Select All Stages', true);
            }

            if (row.Pattern == 'LotList') {
                var JsonArray = row.JsonValue;
                CommonMultipleSelectCheckFill(JsonArray, 'LotId' + Index, LotIds, 'Select All Lots', true);
            }

            if (row.Pattern == 'SubLotList') {
                var JsonArray = row.JsonValue;
                CommonMultipleSelectCheckFill(JsonArray, 'SubLotId' + Index, SubLotIds, 'Select All SubLots', false);
            }

            if (row.Pattern == 'DisciplineList') {
                var JsonArray = row.JsonValue;
                CommonMultipleSelectCheckFill(JsonArray, 'DisciplineId' + Index, DisciplineIds, 'Select All Disciplines', false);
            }

            if (row.Pattern == 'StepList') {
                var JsonArray = row.JsonValue;
                CommonMultipleSelectCheckFill(JsonArray, 'StepId' + Index, StepIds, 'Select All Steps', false);
            }

            if (row.Pattern == 'FunctionCategoryList') {
                var JsonArray = row.JsonValue;
                CommonMultipleSelectFill(JsonArray, 'FunctionCategoryId' + Index, FunctionCategoryIds, 'Select All Categories');
            } 

            if (row.Pattern == 'FunctionTypeList') {
                var JsonArray = row.JsonValue;
                CommonMultipleSelectFill(JsonArray, 'FunctionTypeId' + Index, FunctionTypeIds, 'Select All Types');
            } 

            if (row.Pattern == 'FunctionList') {
                var JsonArray = row.JsonValue;
                CommonMultipleSelectFill(JsonArray, 'FunctionId' + Index, FunctionIds, 'Select All Functions');
            }                

            if (row.Pattern == 'CompanyList') {
                var JsonArray = row.JsonValue;
                CommonMultipleSelectFill(JsonArray, 'CompanyId' + Index, CompanyIds, 'Select All Companies');
            } 
            
            ActionBtnSet(ActionBtnId, Icon, true);
        });
    });
}

function ProjectProgressPrimaveraExport() {

    var DateString = ElementDateStringFromDatePickerGet('DateId');
    var ProjectId = ElementDropDownListValueGet('ProjectId');
    var BuildingId = ElementDropDownListValueGet('BuildingId');
    var BlockId = ElementDropDownListValueGet('BlockId');
    var SubBlockId = ElementDropDownListValueGet('SubBlockId');
    var StageId = ElementDropDownListValueGet('StageId');
    var LotId = ElementDropDownListValueGet('LotId');

    var StepId = ElementDropDownListValueGet('StepId');
    var DisciplineId = ElementDropDownListValueGet('DisciplineId');
    var PhaseId = ElementDropDownListValueGet('PhaseId');
    var ZoneId = ElementDropDownListValueGet('ZoneId');

    var SubLotId = ElementDropDownListValueGet('SubLotId');
    var SubPhaseId = ElementDropDownListValueGet('SubPhaseId');

    var ActionBtnId = 'ParamActionBtnId1';
    var Icon = 'far fa-file-excel';

    var FileType = 'Excel';
    ProjectProgressExport(DateString, ProjectId, BuildingId, BlockId, SubBlockId, StageId, LotId, StepId, DisciplineId, PhaseId, ZoneId, SubLotId, SubPhaseId, FileType);
}


function ProjectProgressDisplay() {

    var DateString = ElementDateStringFromDatePickerGet('DateId');

    var ProjectIds = ElementDropDownListValueMultipleGet('ProjectId');
    var BuildingIds = ElementDropDownListValueMultipleGet('BuildingId');
    var BlockIds = ElementDropDownListValueMultipleGet('BlockId');
    var SubBlockIds = ElementDropDownListValueMultipleGet('SubBlockId');
    var StageIds = ElementDropDownListValueMultipleGet('StageId');
    var LotIds = ElementDropDownListValueMultipleGet('LotId');
    var StepIds = ElementDropDownListValueMultipleGet('StepId');
    var DisciplineIds = ElementDropDownListValueMultipleGet('DisciplineId');
    var PhaseIds = ElementDropDownListValueMultipleGet('PhaseId');
    var ZoneIds = ElementDropDownListValueMultipleGet('ZoneId');
    var SubLotIds = ElementDropDownListValueMultipleGet('SubLotId');
    var SubPhaseIds = ElementDropDownListValueMultipleGet('SubPhaseId');

    var ActionBtnId = 'ParamActionBtnId0';
    var Icon = 'fas fa-eye';

    ProjectProgressGet(ActionBtnId, Icon, DateString, ProjectIds, BuildingIds, BlockIds, SubBlockIds, StageIds, LotIds, StepIds, DisciplineIds, PhaseIds, ZoneIds, SubLotIds, SubPhaseIds);

}

function ProjectProgressGet(ActionBtnId, Icon, DateString, ProjectIds, BuildingIds, BlockIds, SubBlockIds, StageIds, LotIds, StepIds, DisciplineIds, PhaseIds, ZoneIds, SubLotIds, SubPhaseIds) {

    //Spin
    ActionBtnMarginSpin(ActionBtnId);

    var Pattern = 'ProjectProgress';
    var PatternTableId = Pattern + 'TableId';
    var PatternTableReportId = Pattern + 'TableReportId';

    HideReport(PatternTableReportId);

    $('#' + PatternTableId).DataTable().destroy();;
    $('#' + PatternTableId).DataTable({
        "scrollY": '700px',
        "scrollCollapse": true,
        "scrollX": true,
        //"fixedColumns": {
        //    'left': 4,
        //    //'right': 1
        //},

        //"dom": 'Bfrtip',
        //"buttons": [
        //    'excel'
        //],
        //"buttons": {
        //    buttons: [
        //        {
        //            text: 'PDF Primavera',
        //            action: function (e, dt, node, config) {
        //                var FileType = 'PDF';
        //                ProjectProgressExport(DateString, ProjectId, BuildingId, StageId, LotId, StepId, DisciplineId, PhaseId, ZoneId, SubLotId, SubPhaseId, FileType);
        //            }
        //        },
        //        {
        //            text: 'Excel Primavera',
        //            action: function (e, dt, node, config) {
        //                var FileType = 'Excel';
        //                ProjectProgressExport(DateString, ProjectId, BuildingId, StageId, LotId, StepId, DisciplineId, PhaseId, ZoneId, SubLotId, SubPhaseId, FileType);
        //            }
        //        }
        //    ]
        //},
        "initComplete": function (settings, json) {

            HideReport(Pattern + 'TableCardHeaderId');

            ShowReport(PatternTableReportId);
            ActionBtnIconMarginSet(ActionBtnId, Icon);

            //Show or hide columne
            var table = $('#' + PatternTableId).DataTable();
            //$('div.toggle-vis').on('click', function (e) {
            //    e.preventDefault();
            //    var column = table.column($(this).attr('data-column'));
            //    column.visible(!column.visible());
            //});

            $('#BuildingIdCheck').on('click', function (e) {               

                //e.preventDefault();
                var column = table.column(1);
                column.visible(!column.visible());
            });
            $('#PhaseIdCheck').on('click', function (e) {
                var column = table.column(5);
                column.visible(!column.visible());
            });
            $('#SubPhaseIdCheck').on('click', function (e) {
                var column = table.column(6);
                column.visible(!column.visible());
            });
            $('#BuildingIdCheck').on('click', function (e) {
                var column = table.column(7);
                column.visible(!column.visible());
            });
            $('#BlockIdCheck').on('click', function (e) {
                var column = table.column(8);
                column.visible(!column.visible());
            });
            $('#SubBlockIdCheck').on('click', function (e) {
                var column = table.column(9);
                column.visible(!column.visible());
            });
            $('#ZoneIdCheck').on('click', function (e) {
                var column = table.column(10);
                column.visible(!column.visible());
            });
            $('#StageIdCheck').on('click', function (e) {
                var column = table.column(11);
                column.visible(!column.visible());
            });
            $('#LotIdCheck').on('click', function (e) {
                var column = table.column(12);
                column.visible(!column.visible());
            });
            $('#SubLotIdCheck').on('click', function (e) {
                var column = table.column(13);
                column.visible(!column.visible());
            });
            $('#DisciplineIdCheck').on('click', function (e) {
                var column = table.column(14);
                column.visible(!column.visible());
            });
            $('#StepIdCheck').on('click', function (e) {
                var column = table.column(15);
                column.visible(!column.visible());
            });

            //long texte
            $('[data-toggle="tooltip"]').tooltip();
        },
        "ajax": {
            "url": "/Project/ProjectProgressGet",
            "type": "GET",
            "datatype": "json",
            "data": {
                DateString: DateString,
                ProjectIds: ProjectIds,
                BuildingIds: BuildingIds,
                BlockIds: BlockIds,
                SubBlockIds: SubBlockIds,
                StageIds: StageIds,
                LotIds: LotIds,

                StepIds: StepIds,
                DisciplineIds: DisciplineIds,
                PhaseIds: PhaseIds,
                ZoneIds: ZoneIds,

                SubLotIds: SubLotIds,
                SubPhaseIds: SubPhaseIds
            }
        },
        "columns": [
            { "data": "DhmValue" },//0
            { "data": "ProjectName" },//1
            { "data": "WBSCode" },//2
            { "data": "ActivityCode" },//3
            { "data": "ActivityName" },//4

            { "data": "PhaseName" },//5
            { "data": "SubPhaseName" },//6
            { "data": "BuildingName" },//7
            { "data": "BlockName" },//8
            { "data": "SubBlockName" },//9
            { "data": "ZoneName" },//10
            { "data": "StageName" },//11
            { "data": "LotName" },//12
            { "data": "SubLotName" },//13
            { "data": "DisciplineName" },//14
            { "data": "StepName" },//15

            //budgeted
            { "data": "BudgetedManHours" },//16
            { "data": "BudgetedCost" },//17
            { "data": "QuantityPlanned" },//18

            //Planned
            { "data": "DhmValueStartPlanned" },//19
            { "data": "DhmValueEndPlanned" },//20           
            {
                "mData": function vehicle(data, type, dataToSet) {

                    var UpdateDay = new String(DateString).substr(0, 2);
                    var UpdateMonth = new String(DateString).substr(2, 2);
                    var UpdateYear = new String(DateString).substr(4, 4);
                    var UpdateDate = new Date(UpdateYear, UpdateMonth - 1, UpdateDay, 0, 0, 0);

                    var ProgressPlanned = 0;
                    var SecondsTillNow = (UpdateDate - new Date(data.YearPS, data.MonthPS - 1, data.DayPS, 0, 0, 0)) / 1000;
                    var SecondsFromEnd = (UpdateDate - new Date(data.YearPE, data.MonthPE - 1, data.DayPE, 0, 0, 0)) / 1000;
                    var DaysTillNow = Math.floor(SecondsTillNow / 60 / 60 / 24);

                    var SecondsPlanned = Math.abs(new Date(data.YearPE, data.MonthPE - 1, data.DayPE, 23, 59, 59) - new Date(data.YearPS, data.MonthPS - 1, data.DayPS, 0, 0, 0)) / 1000;
                    var DaysPlanned = Math.floor(SecondsPlanned / 60 / 60 / 24);

                    if (SecondsTillNow < 0) {
                        ProgressPlanned = 0;
                    }
                    else {
                        if (SecondsFromEnd > 0) {
                            ProgressPlanned = 100;
                        }
                        else {
                            var ProgressPlanned = (DaysTillNow / DaysPlanned).toFixed(2) * 100;
                        }
                    }
                    return ProgressPlanned;
                }
            },//21

            //Earned                       
            { "data": "DhmValueStartReal" },//22
            { "data": "DhmValueEndReal" },//23
            { "mData": function vehicle(data, type, dataToSet) { return GetDigits(data.Day, 2) + GetDigits(data.Month, 2) + data.Year; } },//24 ProgressLastUpdateList
            { "mData": function vehicle(data, type, dataToSet) { return GetDigits(data.Day, 2) + GetDigits(data.Month, 2) + data.Year; } },//25 ProgressLastUpdateValue
            { "mData": function vehicle(data, type, dataToSet) { return GetDigits(data.Day, 2) + GetDigits(data.Month, 2) + data.Year; } },//26 ProgressLastUpdateBar            
            //{ "data": "RemainingDuration" },//27
            { "mData": function vehicle(data, type, dataToSet) { return GetDigits(data.Day, 2) + GetDigits(data.Month, 2) + data.Year; } },//27 RemainingDuration
            { "data": "" },//28 Edit
            { "data": "ProgressComment" },//29

            { "data": "DhmCreation" },//30
            { "data": "DhmModification" },//31
            { "data": "DhmValidation" },//32

            { "data": "CreatedBy" },//33
            { "data": "ModifiedBy" },//34
            { "data": "ValidatedBy" },//35

            { "data": "ImagePath0" },//36
            { "data": "ImagePath1" },//37
            { "data": "ImagePath2" },//38
        ],
        "columnDefs": [
            { "width": "3%", "className": "text-left", "targets": 0 },
            { "width": "3%", "className": "text-left", "targets": 1 },
            { "width": "3%", "className": "text-left none", "targets": 2 },
            { "width": "3%", "className": "text-left none", "targets": 3 },
            { "width": "3%", "className": "text-left", "targets": 4 },

            { "width": "3%", "className": "text-left none", "targets": 5 },
            { "width": "3%", "className": "text-left none", "targets": 6 },
            { "width": "3%", "className": "text-center", "targets": 7 },
            { "width": "3%", "className": "text-center none", "targets": 8 },
            { "width": "3%", "className": "text-center none", "targets": 9 },
            { "width": "3%", "className": "text-left none", "targets": 10 },
            { "width": "3%", "className": "text-left", "targets": 11 },  
            { "width": "3%", "className": "text-left", "targets": 12 },
            { "width": "3%", "className": "text-left none", "targets": 13 },
            { "width": "3%", "className": "text-left none", "targets": 14 },
            { "width": "3%", "className": "text-left none", "targets": 15 },

            { "width": "3%", "className": "text-right", "targets": 16 },
            { "width": "3%", "className": "text-right", "targets": 17 },
            { "width": "3%", "className": "text-right", "targets": 18 },

            { "width": "3%", "className": "text-center", "targets": 19 },
            { "width": "3%", "className": "text-center", "targets": 20 },            
            { "width": "3%", "className": "text-left", "targets": 21 },

            { "width": "3%", "className": "text-left", "targets": 22 },
            { "width": "3%", "className": "text-left", "targets": 23 },  
            { "width": "3%", "className": "text-center", "targets": 24 },
            { "width": "3%", "className": "text-center", "targets": 25 },
            { "width": "3%", "className": "text-center", "targets": 26 },
            { "width": "3%", "className": "text-right", "targets": 27 },
            { "width": "3%", "className": "text-center", "targets": 28 },
            { "width": "3%", "className": "text-left none", "targets": 29 },

            { "width": "3%", "className": "text-left none", "targets": 30 },
            { "width": "3%", "className": "text-center none", "targets": 31 },
            { "width": "3%", "className": "text-center none", "targets": 32 },

            { "width": "3%", "className": "text-left none", "targets": 33 },
            { "width": "3%", "className": "text-left none", "targets": 34 },
            { "width": "3%", "className": "text-left none", "targets": 35 },

            { "width": "3%", "className": "text-left none", "targets": 36 },
            { "width": "3%", "className": "text-left none", "targets": 37 },
            { "width": "3%", "className": "text-left none", "targets": 38 },

            { "targets": 0, "render": function (data, type, row) { return DataTableDateValueFromRowGet(row); } },
            { "targets": 1, "render": function (data, type, row) { return data; } },
            { "targets": 2, "render": function (data, type, row) { return data; } },
            { "targets": 3, "render": function (data, type, row) { return data; } },
            { "targets": 4, "render": function (data, type, row) { return DataTableElementIdGet('ActivityNameId', row['ProgressRowId'], DataTableLongTextGet(data, 40)); } },

            { "targets": 5, "render": function (data, type, row) { return data; } },
            { "targets": 6, "render": function (data, type, row) { return data; } },
            { "targets": 7, "render": function (data, type, row) { return data; } },
            { "targets": 8, "render": function (data, type, row) { return data; } },
            { "targets": 9, "render": function (data, type, row) { return data; } },
            { "targets": 10, "render": function (data, type, row) { return data; } },
            { "targets": 11, "render": function (data, type, row) { return data; } },
            { "targets": 12, "render": function (data, type, row) { return data; } },

            { "targets": 13, "render": function (data, type, row) { return data; } },
            { "targets": 14, "render": function (data, type, row) { return data; } },
            { "targets": 15, "render": function (data, type, row) { return data; } },
            { "targets": 16, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },
            { "targets": 17, "render": function (data, type, row) { return DataTableFormatDoubleGet(data); } },
            { "targets": 18, "render": function (data, type, row) { return DataTableFormatIntGet(data); } },

            { "targets": 19, "render": function (data, type, row) { return DataTableDateValueGet(row['YearPS'], row['MonthPS'], row['DayPS']); } },
            { "targets": 20, "render": function (data, type, row) { return DataTableDateValueGet(row['YearPE'], row['MonthPE'], row['DayPE']); } },           

            {
                "targets": 21, "render": function (data, type, row) {
                    var ElementId = '';

                    if (row['ProgressLastUpdate'] >= data) {
                        return DataTableProgressionWithColorGet(ElementId, 100, data, '#28a745');
                    }
                    else {
                        return DataTableProgressionWithColorGet(ElementId, 100, data, '#ff6000');
                    }
                }
            },

            {
                "targets": 22, "render": function (data, type, row) {
                    var value = '';
                    if (row['ProgressLastUpdate'] > 0) {
                        value = DataTableDateValueGet(row['YearRS'], row['MonthRS'], row['DayRS']);
                    }
                    return DataTableElementIdGet('DhmValueStartRealId', row['ProgressRowId'], value);
                }
            },
            {
                "targets": 23, "render": function (data, type, row) {
                    var value = '';
                    if (row['ProgressLastUpdate'] == 100) {
                        value = DataTableDateValueGet(row['YearRE'], row['MonthRE'], row['DayRE']);
                    }
                    return DataTableElementIdGet('DhmValueEndRealId', row['ProgressRowId'], value);
                }
            },
            {
                "targets": 24, "render": function (data, type, row) {
                    var DateString = data;
                    var Id = ''.concat(DateString, row['ActivityId']);
                    return ProjectProgressFormGet(Id, row['ProgressLastUpdate'], '#9c9c9c');
                }
            },
            {
                "targets": 25, "render": function (data, type, row) {
                    var DateString = data;
                    var Id = ''.concat(DateString, row['ActivityId']);
                    var argument = '\'' + Id + '\'' + ', \'' + DateString + '\', ' + row['ActivityId'];
                    var OnChange = 'ProjectProgressFromInputSave(' + argument + ')';
                    var ProgressInput = '<input id="ProgressLastUpdateId' + Id + '" class="form-control text-right" type="number" value="' + row['ProgressLastUpdate'] + '" min="0" onchange="' + OnChange + '" style="font-size: 20px;width: 100px;text-align: right;">';

                    return ProgressInput;
                }
            },
            {
                "targets": 26, "render": function (data, type, row) {
                    var DateString = GetDigits(row['Day'], 2) + GetDigits(row['Month'], 2) + row['Year'];
                    var Id = ''.concat(DateString, row['ActivityId']);

                    if (row['ProgressId'] != '') {
                        return DataTableProgressionWithColorGet(Id, 100, row['ProgressLastUpdate'], '#28a745');
                    }
                    else {
                        return DataTableProgressionWithColorGet(Id, 100, row['ProgressLastUpdate'], '#000000');
                    }
                }
            },
            {
                "targets": 27, "render": function (data, type, row) {

                    if (row['ProgressLastUpdate'] < 100) {
                        var DateString = data;
                        //var Id = ''.concat(DateString, row['ActivityId']);
                        var argument = '\'' + row['ProgressRowId'] + '\'' + ', \'' + DateString + '\', ' + row['ActivityId'];
                        var OnChange = 'ProjectRemainingDurationFromInputSave(' + argument + ')';
                        var ProgressInput = '<input id="RemainingDurationId' + row['ProgressRowId'] + '" class="form-control text-right" type="number" value="' + row['RemainingDuration'] + '" min="0" onchange="' + OnChange + '" style="font-size: 20px;width: 100px;text-align: right;">';

                        return ProgressInput;
                    }
                    else {
                        return '';
                    }
                    
                }
            },
            {
                "targets": 28, "render": function (data, type, row) {

                    var PatternForm = 'Edit';
                    var Icon = 'fas fa-edit';
                    var Label = '';
                    var RowId = data;

                    var OnClick = 'ProjectProgressFormLoad(' +

                        //Activity  ProjectId
                        row['ProjectId'] + ', ' +
                        row['ActivityId'] + ', ' +
                        '\'' + row['ActivityCode'] + '\', ' +
                        '\'' + row['ActivityName'] + '\', ' +

                        //WBS
                        row['PhaseId'] + ', ' +
                        row['SubPhaseId'] + ', ' +
                        row['BuildingId'] + ', ' +
                        row['BlockId'] + ', ' +
                        row['SubBlockId'] + ', ' +
                        row['StageId'] + ', ' +
                        row['LotId'] + ', ' +
                        row['DisciplineId'] + ', ' +
                        row['StepId'] + ', ' +
                        row['SubLotId'] + ', ' +
                        row['ZoneId'] + ', ' +                                                                                              

                        //Planned
                        row['YearPS'] + ', ' +
                        row['MonthPS'] + ', ' +
                        row['DayPS'] + ', ' +

                        row['YearPE'] + ', ' +
                        row['MonthPE'] + ', ' +
                        row['DayPE'] + ', ' + 

                        row['BudgetedManHours'] + ', ' +
                        row['BudgetedCost'] + ', ' +
                        row['QuantityPlanned'] + ', ' +

                        //DhmValue
                        row['Year'] + ', ' +
                        row['Month'] + ', ' +
                        row['Day'] + ', ' +

                        row['YearRS'] + ', ' +
                        row['MonthRS'] + ', ' +
                        row['DayRS'] + ', ' +

                        row['YearRE'] + ', ' +
                        row['MonthRE'] + ', ' +
                        row['DayRE'] + ', ' +

                        row['ProgressLastUpdate'] + ', ' +
                        row['RemainingDuration'] + ', ' +

                        '\'' + row['ProgressComment'] + '\', ' +

                        '\'' + row['ImagePath0'] + '\', ' +
                        '\'' + row['ImagePath1'] + '\', ' +
                        '\'' + row['ImagePath2'] + '\' ' +
                        ')';

                    var RowId = '';
                    return DataTableFormBtnIdGet(Pattern, PatternForm, RowId, Label, OnClick, Icon);
                }
            },
            { "targets": 29, "render": function (data, type, row) { return DataTableElementIdGet('ProgressCommentId', row['ActivityId'], data);; } },
            
            { "targets": 30, "render": function (data, type, row) { return DataTableDhmValueFromData(data); } },
            { "targets": 31, "render": function (data, type, row) { return DataTableDhmValueFromData(data); } },
            { "targets": 32, "render": function (data, type, row) { return DataTableDhmValueFromData(data); } },

            { "targets": 33, "render": function (data, type, row) { return data; } },
            { "targets": 34, "render": function (data, type, row) { return data; } },
            { "targets": 35, "render": function (data, type, row) { return data; } },           

            { "targets": 36, "render": function (data, type, row) { return ProjectImageGet(data); } },
            { "targets": 37, "render": function (data, type, row) { return ProjectImageGet(data); } },
            { "targets": 38, "render": function (data, type, row) { return ProjectImageGet(data); } },
        ],
        "iDisplayLength": 200,
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
        "bFilter": true,
        "autoWidth": true,
        "searching": true,
        "lengthChange": true,
        "showNEntries": true,
        "bInfo": true,
        "bPaginate": true,
        "ordering": false
    });
}

function ProjectProgressFormGet(ElementId, ProgressLastUpdate, ProgressValueColor) {       

    var StatusElement = '';
    if (ProgressLastUpdate >= 0 && ProgressLastUpdate < 5) {
        StatusElement = '<p style="text-align: left" >' +
            '<select class="form-control" style="height: 30px;color: white;font-weight: bold;background-color: ' + ProgressValueColor + ';" id="ProgressValueId' + ElementId + '" onchange="ProjectProgressionUpdate(\'' + ElementId + '\')">' +
            '<option value="5">05 %</option>' +
            '<option value="10">10 %</option>' +
            '<option value="15">15 %</option>' +
            '<option value="20">20 %</option>' +
            '<option value="25">25 %</option>' +
            '<option value="30">30 %</option>' +
            '<option value="35">35 %</option>' +
            '<option value="40">40 %</option>' +
            '<option value="45">45 %</option>' +
            '<option value="50">50 %</option>' +
            '<option value="55">55 %</option>' +
            '<option value="60">60 %</option>' +
            '<option value="65">65 %</option>' +
            '<option value="70">70 %</option>' +
            '<option value="75">75 %</option>' +
            '<option value="80">80 %</option>' +
            '<option value="85">85 %</option>' +
            '<option value="90">90 %</option>' +
            '<option value="95">95 %</option>' +
            '<option value="100">100%</option>' +
            '</select>' + '</p>';
    }
    if (ProgressLastUpdate >= 5 && ProgressLastUpdate < 10) {
        StatusElement = '<p style="text-align: left" >' +
            '<select class="form-control" style="height: 30px;color: white;font-weight: bold;background-color: ' + ProgressValueColor + ';" id="ProgressValueId' + ElementId + '" onchange="ProjectProgressionUpdate(\'' + ElementId + '\')">' +
            '<option value="5">05 %</option>' +
            '<option value="10">10 %</option>' +
            '<option value="15">15 %</option>' +
            '<option value="20">20 %</option>' +
            '<option value="25">25 %</option>' +
            '<option value="30">30 %</option>' +
            '<option value="35">35 %</option>' +
            '<option value="40">40 %</option>' +
            '<option value="45">45 %</option>' +
            '<option value="50">50 %</option>' +
            '<option value="55">55 %</option>' +
            '<option value="60">60 %</option>' +
            '<option value="65">65 %</option>' +
            '<option value="70">70 %</option>' +
            '<option value="75">75 %</option>' +
            '<option value="80">80 %</option>' +
            '<option value="85">85 %</option>' +
            '<option value="90">90 %</option>' +
            '<option value="95">95 %</option>' +
            '<option value="100">100%</option>' +
            '</select>' + '</p>';
    }
    if (ProgressLastUpdate >= 10 && ProgressLastUpdate < 15) {
        StatusElement = '<p style="text-align: left" >' +
            '<select class="form-control" style="height: 30px;color: white;font-weight: bold;background-color: ' + ProgressValueColor + ';" id="ProgressValueId' + ElementId + '" onchange="ProjectProgressionUpdate(\'' + ElementId + '\')">' +
            '<option value="10">10 %</option>' +
            '<option value="15">15 %</option>' +
            '<option value="20">20 %</option>' +
            '<option value="25">25 %</option>' +
            '<option value="30">30 %</option>' +
            '<option value="35">35 %</option>' +
            '<option value="40">40 %</option>' +
            '<option value="45">45 %</option>' +
            '<option value="50">50 %</option>' +
            '<option value="55">55 %</option>' +
            '<option value="60">60 %</option>' +
            '<option value="65">65 %</option>' +
            '<option value="70">70 %</option>' +
            '<option value="75">75 %</option>' +
            '<option value="80">80 %</option>' +
            '<option value="85">85 %</option>' +
            '<option value="90">90 %</option>' +
            '<option value="95">95 %</option>' +
            '<option value="100">100%</option>' +
            '</select>' + '</p>';
    }  
    if (ProgressLastUpdate >= 15 && ProgressLastUpdate < 20) {
        StatusElement = '<p style="text-align: left" >' +
            '<select class="form-control" style="height: 30px;color: white;font-weight: bold;background-color: ' + ProgressValueColor + ';" id="ProgressValueId' + ElementId + '" onchange="ProjectProgressionUpdate(\'' + ElementId + '\')">' +
            '<option value="15">15 %</option>' +
            '<option value="20">20 %</option>' +
            '<option value="25">25 %</option>' +
            '<option value="30">30 %</option>' +
            '<option value="35">35 %</option>' +
            '<option value="40">40 %</option>' +
            '<option value="45">45 %</option>' +
            '<option value="50">50 %</option>' +
            '<option value="55">55 %</option>' +
            '<option value="60">60 %</option>' +
            '<option value="65">65 %</option>' +
            '<option value="70">70 %</option>' +
            '<option value="75">75 %</option>' +
            '<option value="80">80 %</option>' +
            '<option value="85">85 %</option>' +
            '<option value="90">90 %</option>' +
            '<option value="95">95 %</option>' +
            '<option value="100">100%</option>' +
            '</select>' + '</p>';
    }  
    if (ProgressLastUpdate >= 20 && ProgressLastUpdate < 25) {
        StatusElement = '<p style="text-align: left" >' +
            '<select class="form-control" style="height: 30px;color: white;font-weight: bold;background-color: ' + ProgressValueColor + ';" id="ProgressValueId' + ElementId + '" onchange="ProjectProgressionUpdate(\'' + ElementId + '\')">' +
            '<option value="20">20 %</option>' +
            '<option value="25">25 %</option>' +
            '<option value="30">30 %</option>' +
            '<option value="35">35 %</option>' +
            '<option value="40">40 %</option>' +
            '<option value="45">45 %</option>' +
            '<option value="50">50 %</option>' +
            '<option value="55">55 %</option>' +
            '<option value="60">60 %</option>' +
            '<option value="65">65 %</option>' +
            '<option value="70">70 %</option>' +
            '<option value="75">75 %</option>' +
            '<option value="80">80 %</option>' +
            '<option value="85">85 %</option>' +
            '<option value="90">90 %</option>' +
            '<option value="95">95 %</option>' +
            '<option value="100">100%</option>' +
            '</select>' + '</p>';
    }  
    if (ProgressLastUpdate >= 25 && ProgressLastUpdate < 30) {
        StatusElement = '<p style="text-align: left" >' +
            '<select class="form-control" style="height: 30px;color: white;font-weight: bold;background-color: ' + ProgressValueColor + ';" id="ProgressValueId' + ElementId + '" onchange="ProjectProgressionUpdate(\'' + ElementId + '\')">' +
            '<option value="25">25 %</option>' +
            '<option value="30">30 %</option>' +
            '<option value="35">35 %</option>' +
            '<option value="40">40 %</option>' +
            '<option value="45">45 %</option>' +
            '<option value="50">50 %</option>' +
            '<option value="55">55 %</option>' +
            '<option value="60">60 %</option>' +
            '<option value="65">65 %</option>' +
            '<option value="70">70 %</option>' +
            '<option value="75">75 %</option>' +
            '<option value="80">80 %</option>' +
            '<option value="85">85 %</option>' +
            '<option value="90">90 %</option>' +
            '<option value="95">95 %</option>' +
            '<option value="100">100%</option>' +
            '</select>' + '</p>';
    }  
    if (ProgressLastUpdate >= 30 && ProgressLastUpdate < 35) {
        StatusElement = '<p style="text-align: left" >' +
            '<select class="form-control" style="height: 30px;color: white;font-weight: bold;background-color: ' + ProgressValueColor + ';" id="ProgressValueId' + ElementId + '" onchange="ProjectProgressionUpdate(\'' + ElementId + '\')">' +
            '<option value="30">30 %</option>' +
            '<option value="35">35 %</option>' +
            '<option value="40">40 %</option>' +
            '<option value="45">45 %</option>' +
            '<option value="50">50 %</option>' +
            '<option value="55">55 %</option>' +
            '<option value="60">60 %</option>' +
            '<option value="65">65 %</option>' +
            '<option value="70">70 %</option>' +
            '<option value="75">75 %</option>' +
            '<option value="80">80 %</option>' +
            '<option value="85">85 %</option>' +
            '<option value="90">90 %</option>' +
            '<option value="95">95 %</option>' +
            '<option value="100">100%</option>' +
            '</select>' + '</p>';
    }  
    if (ProgressLastUpdate >= 35 && ProgressLastUpdate < 40) {
        StatusElement = '<p style="text-align: left" >' +
            '<select class="form-control" style="height: 30px;color: white;font-weight: bold;background-color: ' + ProgressValueColor + ';" id="ProgressValueId' + ElementId + '" onchange="ProjectProgressionUpdate(\'' + ElementId + '\')">' +
            '<option value="35">35 %</option>' +
            '<option value="40">40 %</option>' +
            '<option value="45">45 %</option>' +
            '<option value="50">50 %</option>' +
            '<option value="55">55 %</option>' +
            '<option value="60">60 %</option>' +
            '<option value="65">65 %</option>' +
            '<option value="70">70 %</option>' +
            '<option value="75">75 %</option>' +
            '<option value="80">80 %</option>' +
            '<option value="85">85 %</option>' +
            '<option value="90">90 %</option>' +
            '<option value="95">95 %</option>' +
            '<option value="100">100%</option>' +
            '</select>' + '</p>';
    }  
    if (ProgressLastUpdate >= 40 && ProgressLastUpdate < 45) {
        StatusElement = '<p style="text-align: left" >' +
            '<select class="form-control" style="height: 30px;color: white;font-weight: bold;background-color: ' + ProgressValueColor + ';" id="ProgressValueId' + ElementId + '" onchange="ProjectProgressionUpdate(\'' + ElementId + '\')">' +
            '<option value="40">40 %</option>' +
            '<option value="45">45 %</option>' +
            '<option value="50">50 %</option>' +
            '<option value="55">55 %</option>' +
            '<option value="60">60 %</option>' +
            '<option value="65">65 %</option>' +
            '<option value="70">70 %</option>' +
            '<option value="75">75 %</option>' +
            '<option value="80">80 %</option>' +
            '<option value="85">85 %</option>' +
            '<option value="90">90 %</option>' +
            '<option value="95">95 %</option>' +
            '<option value="100">100%</option>' +
            '</select>' + '</p>';
    }  
    if (ProgressLastUpdate >= 45 && ProgressLastUpdate < 50) {
        StatusElement = '<p style="text-align: left" >' +
            '<select class="form-control" style="height: 30px;color: white;font-weight: bold;background-color: ' + ProgressValueColor + ';" id="ProgressValueId' + ElementId + '" onchange="ProjectProgressionUpdate(\'' + ElementId + '\')">' +
            '<option value="45">45 %</option>' +
            '<option value="50">50 %</option>' +
            '<option value="55">55 %</option>' +
            '<option value="60">60 %</option>' +
            '<option value="65">65 %</option>' +
            '<option value="70">70 %</option>' +
            '<option value="75">75 %</option>' +
            '<option value="80">80 %</option>' +
            '<option value="85">85 %</option>' +
            '<option value="90">90 %</option>' +
            '<option value="95">95 %</option>' +
            '<option value="100">100%</option>' +
            '</select>' + '</p>';
    }  
    if (ProgressLastUpdate >= 50 && ProgressLastUpdate < 55) {
        StatusElement = '<p style="text-align: left" >' +
            '<select class="form-control" style="height: 30px;color: white;font-weight: bold;background-color: ' + ProgressValueColor + ';" id="ProgressValueId' + ElementId + '" onchange="ProjectProgressionUpdate(\'' + ElementId + '\')">' +
            '<option value="50">50 %</option>' +
            '<option value="55">55 %</option>' +
            '<option value="60">60 %</option>' +
            '<option value="65">65 %</option>' +
            '<option value="70">70 %</option>' +
            '<option value="75">75 %</option>' +
            '<option value="80">80 %</option>' +
            '<option value="85">85 %</option>' +
            '<option value="90">90 %</option>' +
            '<option value="95">95 %</option>' +
            '<option value="100">100%</option>' +
            '</select>' + '</p>';
    }  
    if (ProgressLastUpdate >= 55 && ProgressLastUpdate < 60) {
        StatusElement = '<p style="text-align: left" >' +
            '<select class="form-control" style="height: 30px;color: white;font-weight: bold;background-color: ' + ProgressValueColor + ';" id="ProgressValueId' + ElementId + '" onchange="ProjectProgressionUpdate(\'' + ElementId + '\')">' +
            '<option value="55">55 %</option>' +
            '<option value="60">60 %</option>' +
            '<option value="65">65 %</option>' +
            '<option value="70">70 %</option>' +
            '<option value="75">75 %</option>' +
            '<option value="80">80 %</option>' +
            '<option value="85">85 %</option>' +
            '<option value="90">90 %</option>' +
            '<option value="95">95 %</option>' +
            '<option value="100">100%</option>' +
            '</select>' + '</p>';
    }  
    if (ProgressLastUpdate >= 60 && ProgressLastUpdate < 65) {
        StatusElement = '<p style="text-align: left" >' +
            '<select class="form-control" style="height: 30px;color: white;font-weight: bold;background-color: ' + ProgressValueColor + ';" id="ProgressValueId' + ElementId + '" onchange="ProjectProgressionUpdate(\'' + ElementId + '\')">' +
            '<option value="60">60 %</option>' +
            '<option value="65">65 %</option>' +
            '<option value="70">70 %</option>' +
            '<option value="75">75 %</option>' +
            '<option value="80">80 %</option>' +
            '<option value="85">85 %</option>' +
            '<option value="90">90 %</option>' +
            '<option value="95">95 %</option>' +
            '<option value="100">100%</option>' +
            '</select>' + '</p>';
    }  
    if (ProgressLastUpdate >= 65 && ProgressLastUpdate < 70) {
        StatusElement = '<p style="text-align: left" >' +
            '<select class="form-control" style="height: 30px;color: white;font-weight: bold;background-color: ' + ProgressValueColor + ';" id="ProgressValueId' + ElementId + '" onchange="ProjectProgressionUpdate(\'' + ElementId + '\')">' +
            '<option value="65">65 %</option>' +
            '<option value="70">70 %</option>' +
            '<option value="75">75 %</option>' +
            '<option value="80">80 %</option>' +
            '<option value="85">85 %</option>' +
            '<option value="90">90 %</option>' +
            '<option value="95">95 %</option>' +
            '<option value="100">100%</option>' +
            '</select>' + '</p>';
    }  
    if (ProgressLastUpdate >= 70 && ProgressLastUpdate < 75) {
        StatusElement = '<p style="text-align: left" >' +
            '<select class="form-control" style="height: 30px;color: white;font-weight: bold;background-color: ' + ProgressValueColor + ';" id="ProgressValueId' + ElementId + '" onchange="ProjectProgressionUpdate(\'' + ElementId + '\')">' +
            '<option value="70">70 %</option>' +
            '<option value="75">75 %</option>' +
            '<option value="80">80 %</option>' +
            '<option value="85">85 %</option>' +
            '<option value="90">90 %</option>' +
            '<option value="95">95 %</option>' +
            '<option value="100">100%</option>' +
            '</select>' + '</p>';
    }  
    if (ProgressLastUpdate >= 75 && ProgressLastUpdate < 80) {
        StatusElement = '<p style="text-align: left" >' +
            '<select class="form-control" style="height: 30px;color: white;font-weight: bold;background-color: ' + ProgressValueColor + ';" id="ProgressValueId' + ElementId + '" onchange="ProjectProgressionUpdate(\'' + ElementId + '\')">' +
            '<option value="75">75 %</option>' +
            '<option value="80">80 %</option>' +
            '<option value="85">85 %</option>' +
            '<option value="90">90 %</option>' +
            '<option value="95">95 %</option>' +
            '<option value="100">100%</option>' +
            '</select>' + '</p>';
    }  
    if (ProgressLastUpdate >= 80 && ProgressLastUpdate < 85) {
        StatusElement = '<p style="text-align: left" >' +
            '<select class="form-control" style="height: 30px;color: white;font-weight: bold;background-color: ' + ProgressValueColor + ';" id="ProgressValueId' + ElementId + '" onchange="ProjectProgressionUpdate(\'' + ElementId + '\')">' +
            '<option value="80">80 %</option>' +
            '<option value="85">85 %</option>' +
            '<option value="90">90 %</option>' +
            '<option value="95">95 %</option>' +
            '<option value="100">100%</option>' +
            '</select>' + '</p>';
    }  
    if (ProgressLastUpdate >= 85 && ProgressLastUpdate < 90) {
        StatusElement = '<p style="text-align: left" >' +
            '<select class="form-control" style="height: 30px;color: white;font-weight: bold;background-color: ' + ProgressValueColor + ';" id="ProgressValueId' + ElementId + '" onchange="ProjectProgressionUpdate(\'' + ElementId + '\')">' +
            '<option value="85">85 %</option>' +
            '<option value="90">90 %</option>' +
            '<option value="95">95 %</option>' +
            '<option value="100">100%</option>' +
            '</select>' + '</p>';
    }  
    if (ProgressLastUpdate >= 90 && ProgressLastUpdate < 95) {
        StatusElement = '<p style="text-align: left" >' +
            '<select class="form-control" style="height: 30px;color: white;font-weight: bold;background-color: ' + ProgressValueColor + ';" id="ProgressValueId' + ElementId + '" onchange="ProjectProgressionUpdate(\'' + ElementId + '\')">' +
            '<option value="90">90 %</option>' +
            '<option value="95">95 %</option>' +
            '<option value="100">100%</option>' +
            '</select>' + '</p>';
    }  
    if (ProgressLastUpdate >= 95 && ProgressLastUpdate < 100) {
        StatusElement = '<p style="text-align: left" >' +
            '<select class="form-control" style="height: 30px;color: white;font-weight: bold;background-color: ' + ProgressValueColor + ';" id="ProgressValueId' + ElementId + '" onchange="ProjectProgressionUpdate(\'' + ElementId + '\')">' +
            '<option value="95">95 %</option>' +
            '<option value="100">100%</option>' +
            '</select>' + '</p>';
    }  
    return '<div class="friend-drawer friend-drawer--onhover" style="white-space: normal;" onclick="" >' +
        StatusElement +
        '</div>';
}


function ProjectProgressionUpdate(Id) {

    var ActionBtnId = 'RepoFdrEditModifyBtnId';
    var Icon = 'far fa-save';

    var DateString = new String(Id).substr(0, 8);
    var ActivityId = new String(Id).substr(8, new String(Id).length - 8); 
    var ProgressValueId = ElementDropDownListValueGet('ProgressValueId' + Id);

    var obj = {};
    obj.DateString = DateString;
    obj.ActivityId = ActivityId;
    obj.ProgressLastUpdate = ProgressValueId;

    $('#' + ActionBtnId).find('span').attr('class', 'fa fa-spinner fa-spin');

    $.ajax({
        url: "/Project/ProjectProgressionUpdate",
        method: "POST",
        data: JSON.stringify(obj),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {

            //progressBar
            var ProgressValue = ((ProgressValueId / 100) * 100).toFixed(2);
            var ProgressBarPlanIdElement = $('#ProgressBarId' + Id);
            if (ProgressBarPlanIdElement) {
                ProgressBarPlanIdElement.attr('style', 'width: ' + ProgressValue + '%; background-color:#09c70d');
            }

            //ProgressPercent
            var ProgressPercent = ProgressValue.toString() + '%';
            var ProgressPercentPlanIdElement = $('#ProgressPercentId' + Id);
            if (ProgressPercentPlanIdElement) {
                ProgressPercentPlanIdElement.text(ProgressPercent);
            }

        }
    });
}

function ProjectAdminFunctionProjectsDisplay() {

    var ActionBtnId = 'ParamActionBtnId0';
    var Icon = 'fas fa-eye';
    var IsMargin = true;

    var ProjectId = ElementDropDownListValueGet('ProjectId');
    var FunctionCategoryId = ElementDropDownListValueGet('FunctionCategoryId');
    var FunctionId = ElementDropDownListValueGet('FunctionId');

    ProjectAdminFunctionProjectsGet(ActionBtnId, Icon, IsMargin, ProjectId, FunctionCategoryId, FunctionId);
}


function ProjectAdminFunctionProjectsGet(ActionBtnId, Icon, IsMargin, ProjectId, FunctionCategoryId, FunctionId) {

    //Spin
    ActionSpin(ActionBtnId, IsMargin);

    var Pattern = 'ProjectAdminFunctionProjects';
    var PatternTableId = Pattern + 'TableId';
    var PatternTableReportId = Pattern + 'TableReportId';

    HideReport(PatternTableReportId);

    $('#' + PatternTableId).DataTable().destroy();;
    $('#' + PatternTableId).DataTable({
        "initComplete": function (settings, json) {
            ShowReport(PatternTableReportId);
            ActionBtnSet(ActionBtnId, Icon, IsMargin);
        },
        "ajax": {
            "url": "/Project/ProjectAdminFunctionProjectsGet",
            "type": "GET",
            "datatype": "json",
            "data": {
                ProjectId: ProjectId,
                FunctionCategoryId: FunctionCategoryId,
                FunctionId: FunctionId
            }
        },
        "columns": [
            { "data": "ProjectName" },//0
            { "data": "FunctionName" },//1

            { "data": "FunctionProjectId" },//2 Delete
        ],
        "columnDefs": [
            { "width": "3%", "className": "text-left", "targets": 0 },
            { "width": "3%", "className": "text-left", "targets": 1 },

            { "width": "3%", "className": "text-center", "targets": 2 },

            { "targets": 0, "render": function (data, type, row) { return data; } },
            { "targets": 1, "render": function (data, type, row) { return data; } },
            { "targets": 2, "render": function (data, type, row) { return DataTableGetButton('ProjectAdminFunctionProjectsDelete', data, 'far fa-trash-alt', 'fe1200'); } },
        ],
        "iDisplayLength": 20,
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
        "bFilter": true,
        "autoWidth": true,
        "searching": true,
        "lengthChange": true,
        "showNEntries": true,
        "bInfo": true,
        "bPaginate": true,
        "ordering": false
    });
}

function ProjectAdminFunctionProjectsAllAdd() {
    //Set action button
    var ActionBtnId = 'ParamActionBtnId1';
    var Icon = ParamActionIconAddGet();
    var IsMargin = true;

    //Get input values
    var ProjectId = ElementDropDownListValueGet('ProjectId');
    var FunctionCategoryId = ElementDropDownListValueGet('FunctionCategoryId');

    
    if (ProjectId != '0' && FunctionCategoryId != '0') {

        ParamMessageReset();

        //Spin
        ActionSpin(ActionBtnId, IsMargin);

        //Insert
        var obj = {};
        obj.ProjectId = ProjectId;
        obj.FunctionCategoryId = FunctionCategoryId;
        
        $.ajax({
            url: "/Project/ProjectAdminFunctionProjectsAllAdd",
            method: "POST",
            data: JSON.stringify(obj),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {
                ActionBtnSet(ActionBtnId, Icon, IsMargin);
                ProjectAdminFunctionProjectsDisplay();
            },
            error: function (request, status, error) {
                alert('Error!');
            }
        });

        //Connection
        //NotiConnectionIdUpdate('Project-Administration-Ajouter un étage');
    }
    else {
        ParamMessageErrorDisplay('Project and Category are mandatory!')
    }
}

function ProjectFunctionsGet(DefaultValue, Index) {

    $('#FunctionId' + Index).empty();
    var ProjectId = GetElementValue('ProjectId' + Index);
    var FunctionCategoryId = GetElementValue('FunctionCategoryId' + Index);
    var item = document.getElementById('FunctionId' + Index);
    item.options.length = 0;
    var node = document.createElement("option");
    node.value = 0;
    var textnode = document.createTextNode("Select Function");
    node.appendChild(textnode);
    item.appendChild(node);
    $.get("/Project/ProjectFunctionsGet", { Input0: ProjectId, Input1: FunctionCategoryId }, function (data) {
        $.each(data, function (index, row) {
            var node = document.createElement("option");
            node.value = row.FunctionId;
            var textnode = document.createTextNode(row.FunctionName);
            node.appendChild(textnode);
            item.appendChild(node);
        });
        for (var j = 0, len = item.options.length; j < len; j++) {
            var opt = item.options[j];
            if (opt.value == DefaultValue) {
                item.options[j].selected = 'selected';
                break;
            }
        };
    });
    //ShowReport('PluginId' + Index + 'Parent');

    //if (Index == '') {
    //    CollabActionDisplay('0');
    //}
}

function ProjectAdminUserProjectsDisplay() {

    var ActionBtnId = 'ParamActionBtnId0';
    var Icon = 'fas fa-eye';
    var IsMargin = true;

    var ProjectId = ElementDropDownListValueGet('ProjectId');
    var UserId = ElementDropDownListValueGet('UserIdProject');

    ProjectAdminUserProjectsGet(ActionBtnId, Icon, IsMargin, ProjectId, UserId);
}

function ProjectAdminUserProjectsGet(ActionBtnId, Icon, IsMargin, ProjectId, UserId) {

    //Spin
    ActionSpin(ActionBtnId, IsMargin);

    var Pattern = 'ProjectAdminUserProjects';
    var PatternTableId = Pattern + 'TableId';
    var PatternTableReportId = Pattern + 'TableReportId';

    HideReport(PatternTableReportId);

    $('#' + PatternTableId).DataTable().destroy();;
    $('#' + PatternTableId).DataTable({
        "initComplete": function (settings, json) {
            ShowReport(PatternTableReportId);
            ActionBtnSet(ActionBtnId, Icon, IsMargin);
        },
        "ajax": {
            "url": "/Project/ProjectAdminUserProjectsGet",
            "type": "GET",
            "datatype": "json",
            "data": {
                ProjectId: ProjectId,
                UserId: UserId
            }
        },
        "columns": [
            { "data": "ProjectName" },//0
            { "data": "UserName" },//1

            { "data": "UserProjectId" },//2 Delete
        ],
        "columnDefs": [
            { "width": "3%", "className": "text-left", "targets": 0 },
            { "width": "3%", "className": "text-left", "targets": 1 },

            { "width": "3%", "className": "text-center", "targets": 2 },

            { "targets": 0, "render": function (data, type, row) { return data; } },
            { "targets": 1, "render": function (data, type, row) { return data; } },

            { "targets": 2, "render": function (data, type, row) { return DataTableGetButton('ProjectAdminUserProjectsDelete', data, 'far fa-trash-alt', 'fe1200'); } },
        ],
        "iDisplayLength": 20,
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
        "bFilter": true,
        "autoWidth": true,
        "searching": true,
        "lengthChange": true,
        "showNEntries": true,
        "bInfo": true,
        "bPaginate": true,
        "ordering": false
    });
}

function ProjectAdminUserProjectsAllAdd() {
    //Set action button
    var ActionBtnId = 'ParamActionBtnId1';
    var Icon = ParamActionIconAddGet();
    var IsMargin = true;

    //Get input values
    var ProjectId = ElementDropDownListValueGet('ProjectId');

    if (ProjectId != '0') {

        ParamMessageReset();

        //Spin
        ActionSpin(ActionBtnId, IsMargin);

        //Insert
        var obj = {};
        obj.ProjectId = ProjectId;

        $.ajax({
            url: "/Project/ProjectAdminUserProjectsAllAdd",
            method: "POST",
            data: JSON.stringify(obj),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {
                ActionBtnSet(ActionBtnId, Icon, IsMargin);
                ProjectAdminUserProjectsDisplay();
            }
        });

        //Connection
        NotiConnectionIdUpdate('Project-Paramétrage-Ajouter une liaison utilisateur-projets');
    }
    else {
        ParamMessageErrorDisplay('Le champ projet est obligatoire')
    }
}

function ProjectAdminUserBuildingsDisplay() {

    var ActionBtnId = 'ParamActionBtnId0';
    var Icon = 'fas fa-eye';
    var IsMargin = true;

    var ProjectId = ElementDropDownListValueGet('ProjectId');
    var BuildingId = ElementDropDownListValueGet('BuildingId');
    var UserId = ElementDropDownListValueGet('UserIdProject');

    ProjectAdminUserBuildingsGet(ActionBtnId, Icon, IsMargin, ProjectId, BuildingId, UserId);
}


function ProjectAdminUserBuildingsGet(ActionBtnId, Icon, IsMargin, ProjectId, BuildingId, UserId) {

    //Spin
    ActionSpin(ActionBtnId, IsMargin);

    var Pattern = 'ProjectAdminUserBuildings';
    var PatternTableId = Pattern + 'TableId';
    var PatternTableReportId = Pattern + 'TableReportId';

    HideReport(PatternTableReportId);

    $('#' + PatternTableId).DataTable().destroy();;
    $('#' + PatternTableId).DataTable({
        "initComplete": function (settings, json) {
            ShowReport(PatternTableReportId);
            ActionBtnSet(ActionBtnId, Icon, IsMargin);
        },
        "ajax": {
            "url": "/Project/ProjectAdminUserBuildingsGet",
            "type": "GET",
            "datatype": "json",
            "data": {
                ProjectId: ProjectId,
                BuildingId: BuildingId,
                UserId: UserId
            }
        },
        "columns": [
            { "data": "ProjectName" },//0
            { "data": "BuildingName" },//1
            { "data": "UserName" },//2

            { "data": "UserBuildingId" },//3 Delete
        ],
        "columnDefs": [
            { "width": "3%", "className": "text-left", "targets": 0 },
            { "width": "3%", "className": "text-left", "targets": 1 },
            { "width": "3%", "className": "text-left", "targets": 2 },

            { "width": "3%", "className": "text-center", "targets": 3 },

            { "targets": 0, "render": function (data, type, row) { return data; } },
            { "targets": 1, "render": function (data, type, row) { return data; } },
            { "targets": 2, "render": function (data, type, row) { return data; } },

            { "targets": 3, "render": function (data, type, row) { return DataTableGetButton('ProjectAdminUserBuildingsDelete', data, 'far fa-trash-alt', 'fe1200'); } },
        ],
        "iDisplayLength": 20,
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
        "bFilter": true,
        "autoWidth": true,
        "searching": true,
        "lengthChange": true,
        "showNEntries": true,
        "bInfo": true,
        "bPaginate": true,
        "ordering": false
    });
}

function ProjectAdminUserBuildingsAllAdd() {

    //Set action button
    var ActionBtnId = 'ParamActionBtnId1';
    var Icon = ParamActionIconAddGet();
    var IsMargin = true;

    //Get input values
    var ProjectId = ElementDropDownListValueGet('ProjectId');
    var UserId = ElementDropDownListValueGet('UserIdProject');

    if (ProjectId != '0' && UserId != '0') {

        ParamMessageReset();

        //Spin
        ActionSpin(ActionBtnId, IsMargin);

        //Insert
        var obj = {};
        obj.ProjectId = ProjectId;
        obj.UserId = UserId;

        $.ajax({
            url: "/Project/ProjectAdminUserBuildingsAllAdd",
            method: "POST",
            data: JSON.stringify(obj),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {
                ActionBtnSet(ActionBtnId, Icon, IsMargin);
                ProjectAdminUserBuildingsDisplay();
            }
        });

        //Connection
        //NotiConnectionIdUpdate('Project-Paramétrage-Ajouter une liaison utilisateur-projets');
    }
    else {
        ParamMessageErrorDisplay('Les champs projet et utilisateur sont obligatoire')
    }
}

function ProjectBuildingsGet(DefaultValue, Index) {

    $('#BuildingId' + Index).empty();

    var ProjectId = GetElementValue('ProjectId' + Index);
    var item = document.getElementById('BuildingId' + Index);
    item.options.length = 0;
    var node = document.createElement("option");
    node.value = 0;
    var textnode = document.createTextNode("Bâtiment");
    node.appendChild(textnode);
    item.appendChild(node);
    $.get("/Project/ProjectBuildingsGet", { Input: ProjectId }, function (data) {
        $.each(data, function (index, row) {
            var node = document.createElement("option");
            node.value = row.BuildingId;
            var textnode = document.createTextNode(row.BuildingName);
            node.appendChild(textnode);
            item.appendChild(node);
        });
        for (var j = 0, len = item.options.length; j < len; j++) {
            var opt = item.options[j];
            if (opt.value == DefaultValue) {
                item.options[j].selected = 'selected';
                break;
            }
        };
    });
    //ShowReport('PluginId' + Index + 'Parent');

    //if (Index == '') {
    //    CollabActionDisplay('0');
    //}
}

function ProjectBuildingsSecGet(DefaultValue, Index) {

    $('#BuildingId' + Index).empty();

    var ProjectId = GetElementValue('ProjectId' + Index);
    var item = document.getElementById('BuildingId' + Index);
    item.options.length = 0;
    var node = document.createElement("option");
    node.value = 0;
    var textnode = document.createTextNode("Select Bâtiment");
    node.appendChild(textnode);
    item.appendChild(node);
    $.get("/Project/ProjectBuildingsSecGet", { Input: ProjectId }, function (data) {
        $.each(data, function (index, row) {
            var node = document.createElement("option");
            node.value = row.BuildingId;
            var textnode = document.createTextNode(row.BuildingName);
            node.appendChild(textnode);
            item.appendChild(node);
        });
        for (var j = 0, len = item.options.length; j < len; j++) {
            var opt = item.options[j];
            if (opt.value == DefaultValue) {
                item.options[j].selected = 'selected';
                break;
            }
        };

        ProjectLotsSecGet('0', '');
        ProjectStagesSecGet('0', '');

    });
    //ShowReport('PluginId' + Index + 'Parent');

    //if (Index == '') {
    //    CollabActionDisplay('0');
    //}
}

function ProjectSeniorGet(ActionBtnId, Icon, IsMargin, IsChart, DateStartString, DateEndString, ProjectIds, FunctionCategoryIds, FunctionTypeIds, FunctionIds) {

    //Spin
    ActionSpin(ActionBtnId, IsMargin);

    var Pattern = 'ProjectSenior';
    var PatternTableId = Pattern + 'TableId';
    var PatternTableReportId = Pattern + 'TableReportId';

    HideTableReport('ProjectMan');
    HideReport(PatternTableReportId);

    $('#' + PatternTableId).DataTable().destroy();;
    $('#' + PatternTableId).DataTable({
        "dom": 'Bfrtip',
        "buttons": {
            buttons: [
                {
                    text: 'Tout valider',
                    action: function (e, dt, node, config) {
                        ProjectSeniorAllValidate(DateStartString, DateEndString, ProjectId, FunctionCategoryId, FunctionTypeId, FunctionId);
                    }
                },
                {
                    text: 'PDF',
                    action: function (e, dt, node, config) {
                        var FileType = 'PDF';
                        ProjectSeniorExport(DateStartString, DateEndString, ProjectId, FunctionCategoryId, FunctionTypeId, FunctionId, FileType);
                    }
                },
                {
                    text: 'Excel',
                    action: function (e, dt, node, config) {
                        var FileType = 'Excel';
                        ProjectSeniorExport(DateStartString, DateEndString, ProjectId, FunctionCategoryId, FunctionTypeId, FunctionId, FileType);
                    }
                }
            ]
        },
        "initComplete": function (settings, json) {
            ShowReport(PatternTableReportId);
            ActionBtnSet(ActionBtnId, Icon, IsMargin);

            
        },
        "ajax": {
            "url": "/Project/ProjectSeniorGet",
            "type": "GET",
            "datatype": "json",
            "data": {
                DateStartString: DateStartString,
                DateEndString: DateEndString,
                ProjectIds: ProjectIds,
                FunctionCategoryIds: FunctionCategoryIds, 
                FunctionTypeIds: FunctionTypeIds,
                FunctionIds: FunctionIds
            }
        },
        "columns": [
            { "data": "ProjectName" },//0
            { "data": "FunctionCategoryName" },//1
            { "data": "FunctionTypeName" },//2            
            { "data": "FunctionName" },//3
            { "data": "DhmValue" },//4
            { "data": "ShiftName" },//5    

            { "mData": function vehicle(data, type, dataToSet) { return GetDigits(data.Day, 2) + GetDigits(data.Month, 2) + data.Year; } },//6 Quantity
            { "mData": function vehicle(data, type, dataToSet) { return GetDigits(data.Day, 2) + GetDigits(data.Month, 2) + data.Year; } },//7 Save

            { "data": "DhmCreation" },//8
            { "data": "DhmModification" },//9
            { "data": "DhmValidation" },//10

            { "data": "CreatedBy" },//11
            { "data": "ModifiedBy" },//12
            { "data": "ValidatedBy" },//13

            { "mData": function vehicle(data, type, dataToSet) { return GetDigits(data.Day, 2) + GetDigits(data.Month, 2) + data.Year; } },//14 IsValid
        ],
        "columnDefs": [
            { "width": "3%", "className": "text-left", "targets": 0 },
            { "width": "3%", "className": "text-left", "targets": 1 },
            { "width": "3%", "className": "text-left", "targets": 2 },
            { "width": "3%", "className": "text-left", "targets": 3 },
            { "width": "3%", "className": "text-center", "targets": 4 },
            { "width": "3%", "className": "text-center", "targets": 5 },

            { "width": "3%", "className": "text-center", "targets": 6 },
            { "width": "3%", "className": "text-center none", "targets": 7 },

            { "width": "3%", "className": "text-left none", "targets": 8 },
            { "width": "3%", "className": "text-left none", "targets": 9 },
            { "width": "3%", "className": "text-left none", "targets": 10 },

            { "width": "3%", "className": "text-left", "targets": 11 },
            { "width": "3%", "className": "text-left none", "targets": 12 },
            { "width": "3%", "className": "text-left", "targets": 13 },

            { "width": "3%", "className": "text-center", "targets": 14 },

            { "targets": 0, "render": function (data, type, row) { return data; } },
            { "targets": 1, "render": function (data, type, row) { return data; } },
            { "targets": 2, "render": function (data, type, row) { return data; } },
            { "targets": 3, "render": function (data, type, row) { return data; } },
            { "targets": 4, "render": function (data, type, row) { return DataTableDateValueFromRowGet(row); } },
            { "targets": 5, "render": function (data, type, row) { return data; } },

            {
                "targets": 6, "render": function (data, type, row) {

                    var DateString = data;
                    var Id = DateString + row['ProjectId'] + row['FunctionId'];
                    var argument = '\'' + Id + '\', \'' + DateString + '\', ' + row['ProjectId'] + ', ' + row['FunctionId'];
                    var OnChange = 'ProjectSeniorSave(' + argument + ')';
                    var QuantityElementD = '<input id="QuantityDId' + Id + '" class="form-control text-right" type="number" value="' + row['QuantityD'] + '" min="0" onchange="' + OnChange + '" style="height: 90%;font-size: 20px;text-align: right;">';

                    return QuantityElementD;     
                }
            },
            {
                "targets": 7, "render": function (data, type, row) {
                    var DateString = data;
                    var Id = DateString + row['ProjectId'] + row['FunctionId'];
                    var argument = '\'' + Id + '\', \'' + DateString + '\', ' + row['ProjectId'] + ', ' + row['FunctionId'];

                    return DataTableButtonGet('ProjectSeniorSave', Id, argument, '', 'dt-btn-cl gc-bc1-cl', 'far fa-save btn-icon-cl gc-c1-cl', '')
                }
            },

            { "targets": 8, "render": function (data, type, row) { return DataTableDhmValueFromData(data); } },
            { "targets": 9, "render": function (data, type, row) { return DataTableDhmValueFromData(data); } },
            { "targets": 10, "render": function (data, type, row) { return DataTableDhmValueFromData(data); } },

            { "targets": 11, "render": function (data, type, row) { return data; } },
            { "targets": 12, "render": function (data, type, row) { return data; } },
            { "targets": 13, "render": function (data, type, row) { return data; } },

            {
                "targets": 14, "render": function (data, type, row) {
                    var DateString = data;
                    var Id = DateString + row['ProjectId'] + row['FunctionId'];
                    var argument = '\'' + DateString + '\', ' + row['ProjectId'] + ', ' + row['FunctionId'];
                    return ProjectSeniorValidate(Id, argument, row['IsValid']);
                }
            },
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
        "bFilter": true,
        "autoWidth": true,
        "searching": true,
        "lengthChange": true,
        "showNEntries": true,
        "bInfo": true,
        "bPaginate": true,
        "ordering": false
    });
}

function ProjectFunctionsSecGet(DefaultValue, Index) {

    $('#FunctionId' + Index).empty();

    var ProjectId = GetElementValue('ProjectId' + Index);
    var FunctionCategoryId = GetElementValue('FunctionCategoryId' + Index);
    var FunctionTypeId = GetElementValue('FunctionTypeId' + Index);

    var item = document.getElementById('FunctionId' + Index);
    item.options.length = 0;
    var node = document.createElement("option");
    node.value = 0;
    var textnode = document.createTextNode("Select Function");
    node.appendChild(textnode);
    item.appendChild(node);
    $.get("/Project/ProjectFunctionsSecGet", { Input0: ProjectId, Input1: FunctionCategoryId, Input2: FunctionTypeId }, function (data) {
        $.each(data, function (index, row) {
            var node = document.createElement("option");
            node.value = row.FunctionId;
            var textnode = document.createTextNode(row.FunctionName);
            node.appendChild(textnode);
            item.appendChild(node);
        });
        for (var j = 0, len = item.options.length; j < len; j++) {
            var opt = item.options[j];
            if (opt.value == DefaultValue) {
                item.options[j].selected = 'selected';
                break;
            }
        };
    });
    //ShowReport('PluginId' + Index + 'Parent');

    //if (Index == '') {
    //    CollabActionDisplay('0');
    //}
}


function ProjectManAllValidate(DateStartString, DateEndString, ProjectId, BuildingId, FunctionCategoryId, FunctionId, ShiftId) {

    var ActionBtnId = 'ParamActionBtnId0';
    var Icon = 'fas fa-eye';

    //Spin
    ActionBtnMarginSpin(ActionBtnId);

    var obj = {};
    obj.DateStartString = DateStartString;
    obj.DateEndString = DateEndString;
    obj.ProjectId = ProjectId;
    obj.BuildingId = BuildingId;
    obj.FunctionCategoryId = FunctionCategoryId;
    obj.FunctionId = FunctionId;
    obj.ShiftId = ShiftId;

    $.ajax({
        url: "/Project/ProjectManAllValidate",
        method: "POST",
        data: JSON.stringify(obj),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            ActionBtnIconMarginSet(ActionBtnId, Icon);
            ProjectManDisplay();
        },
        error: function (request, status, error) {
            alert('Error!');
        }
    });
}


function ProjectManExport(DateStartString, DateEndString, ProjectId, BuildingId, FunctionCategoryId, FunctionId, ShiftId, FileType) {

    var PrintLink = '/Project/ProjectManExport?' +
        'DateStartString=' + DateStartString +
        '&DateEndString=' + DateEndString +
        '&ProjectId=' + ProjectId +
        '&BuildingId=' + BuildingId +
        '&FunctionCategoryId=' + FunctionCategoryId +
        '&FunctionId=' + FunctionId +
        '&ShiftId=' + ShiftId +
        '&FileType=' + FileType;

    NavigateTo(PrintLink, true);
}

function ProjectSeniorExport(DateStartString, DateEndString, ProjectId, FunctionCategoryId, FunctionTypeId, FunctionId, FileType) {

    var PrintLink = '/Project/ProjectSeniorExport?' +
        'DateStartString=' + DateStartString +
        '&DateEndString=' + DateEndString +
        '&ProjectId=' + ProjectId +
        '&FunctionCategoryId=' + FunctionCategoryId +
        '&FunctionTypeId=' + FunctionTypeId +
        '&FunctionId=' + FunctionId +
        '&FileType=' + FileType;

    NavigateTo(PrintLink, true);
}

function ProjectSeniorAllValidate(DateStartString, DateEndString, ProjectId, FunctionCategoryId, FunctionTypeId, FunctionId) {

    var ActionBtnId = 'ParamActionBtnId0';
    var Icon = 'fas fa-eye';

    //Spin
    ActionBtnMarginSpin(ActionBtnId);

    var obj = {};
    obj.DateStartString = DateStartString;
    obj.DateEndString = DateEndString;
    obj.ProjectId = ProjectId;
    obj.FunctionCategoryId = FunctionCategoryId;
    obj.FunctionTypeId = FunctionTypeId;
    obj.FunctionId = FunctionId;

    $.ajax({
        url: "/Project/ProjectSeniorAllValidate",
        method: "POST",
        data: JSON.stringify(obj),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            ActionBtnIconMarginSet(ActionBtnId, Icon);
            ProjectSeniorDisplay();
        },
        error: function (request, status, error) {
            alert('Error!');
        }
    });
}

function ProjectAdminUserLotsDisplay() {

    var ActionBtnId = 'ParamActionBtnId0';
    var Icon = 'fas fa-eye';
    var IsMargin = true;

    var ProjectId = ElementDropDownListValueGet('ProjectId');
    var BuildingId = ElementDropDownListValueGet('BuildingId');
    var LotId = ElementDropDownListValueGet('LotId');
    var UserId = ElementDropDownListValueGet('UserIdProject');

    ProjectAdminUserLotsGet(ActionBtnId, Icon, IsMargin, ProjectId, BuildingId, LotId, UserId);
}


function ProjectAdminUserLotsGet(ActionBtnId, Icon, IsMargin, ProjectId, BuildingId, LotId, UserId) {

    //Spin
    ActionSpin(ActionBtnId, IsMargin);

    var Pattern = 'ProjectAdminUserLots';
    var PatternTableId = Pattern + 'TableId';
    var PatternTableReportId = Pattern + 'TableReportId';

    HideReport(PatternTableReportId);

    $('#' + PatternTableId).DataTable().destroy();;
    $('#' + PatternTableId).DataTable({
        "scrollY": '700px',
        "scrollCollapse": true,
        "scrollX": true,
        "initComplete": function (settings, json) {
            HideReport(Pattern + 'TableCardHeaderId');
            ShowReport(PatternTableReportId);
            ActionBtnSet(ActionBtnId, Icon, IsMargin);
        },
        "ajax": {
            "url": "/Project/ProjectAdminUserLotsGet",
            "type": "GET",
            "datatype": "json",
            "data": {
                ProjectId: ProjectId,
                BuildingId: BuildingId,
                LotId: LotId,
                UserId: UserId
            }
        },
        "columns": [
            { "data": "ProjectName" },//0
            { "data": "BuildingName" },//1
            { "data": "LotName" },//2
            { "data": "UserName" },//3

            { "data": "UserLotId" },//4 Delete
        ],
        "columnDefs": [
            { "width": "3%", "className": "text-left", "targets": 0 },
            { "width": "3%", "className": "text-left", "targets": 1 },
            { "width": "3%", "className": "text-left", "targets": 2 },
            { "width": "3%", "className": "text-left", "targets": 3 },

            { "width": "3%", "className": "text-center", "targets": 4 },

            { "targets": 0, "render": function (data, type, row) { return data; } },
            { "targets": 1, "render": function (data, type, row) { return data; } },
            { "targets": 2, "render": function (data, type, row) { return data; } },
            { "targets": 3, "render": function (data, type, row) { return data; } },

            { "targets": 4, "render": function (data, type, row) { return DataTableGetButton('ProjectAdminUserLotsDelete', data, 'far fa-trash-alt', 'fe1200'); } },
        ],
        "iDisplayLength": 20,
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
        "bFilter": true,
        "autoWidth": true,
        "searching": true,
        "lengthChange": true,
        "showNEntries": true,
        "bInfo": true,
        "bPaginate": true,
        "ordering": false
    });
}


function ProjectAdminUserLotsAllAdd() {

    //Set action button
    var ActionBtnId = 'ParamActionBtnId1';
    var Icon = ParamActionIconAddGet();
    var IsMargin = true;

    //Get input values
    var ProjectId = ElementDropDownListValueGet('ProjectId');
    var BuildingId = ElementDropDownListValueGet('BuildingId');
    var LotId = ElementDropDownListValueGet('LotId');
    var UserId = ElementDropDownListValueGet('UserIdProject');

    if (ProjectId != '0' && UserId != '0') {

        ParamMessageReset();

        //Spin
        ActionSpin(ActionBtnId, IsMargin);

        //Insert
        var obj = {};
        obj.ProjectId = ProjectId;
        obj.BuildingId = BuildingId;
        obj.LotId = LotId;
        obj.UserId = UserId;

        $.ajax({
            url: "/Project/ProjectAdminUserLotsAllAdd",
            method: "POST",
            data: JSON.stringify(obj),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {
                ActionBtnSet(ActionBtnId, Icon, IsMargin);
                ProjectAdminUserLotsDisplay();
            }
        });

        //Connection
        //NotiConnectionIdUpdate('Project-Paramétrage-Ajouter une liaison utilisateur-lots');
    }
    else {
        ParamMessageErrorDisplay('Les champs projet et utilisateur sont obligatoire')
    }
}

function ProjectLotsSecGet(DefaultValue, Index) {

    $('#LotId' + Index).empty();

    var ProjectId = GetElementValue('ProjectId' + Index);
    var item = document.getElementById('LotId' + Index);
    item.options.length = 0;
    var node = document.createElement("option");
    node.value = 0;
    var textnode = document.createTextNode("Select Lot");
    node.appendChild(textnode);
    item.appendChild(node);
    $.get("/Project/ProjectLotsSecGet", { Input: ProjectId }, function (data) {
        $.each(data, function (index, row) {
            var node = document.createElement("option");
            node.value = row.LotId;
            var textnode = document.createTextNode(row.LotName);
            node.appendChild(textnode);
            item.appendChild(node);
        });
        for (var j = 0, len = item.options.length; j < len; j++) {
            var opt = item.options[j];
            if (opt.value == DefaultValue) {
                item.options[j].selected = 'selected';
                break;
            }
        };
    });
    //ShowReport('PluginId' + Index + 'Parent');

    //if (Index == '') {
    //    CollabActionDisplay('0');
    //}
}


function ProjectSubLotsSecGet(DefaultValue, Index) {

    $('#SubLotId' + Index).empty();

    var ProjectId = GetElementValue('ProjectId' + Index);
    var item = document.getElementById('SubLotId' + Index);
    item.options.length = 0;
    var node = document.createElement("option");
    node.value = 0;
    var textnode = document.createTextNode("Sous-lot");
    node.appendChild(textnode);
    item.appendChild(node);
    $.get("/Project/ProjectSubLotsSecGet", { Input: ProjectId }, function (data) {
        $.each(data, function (index, row) {
            var node = document.createElement("option");
            node.value = row.SubLotId;
            var textnode = document.createTextNode(row.SubLotName);
            node.appendChild(textnode);
            item.appendChild(node);
        });
        for (var j = 0, len = item.options.length; j < len; j++) {
            var opt = item.options[j];
            if (opt.value == DefaultValue) {
                item.options[j].selected = 'selected';
                break;
            }
        };
    });
    //ShowReport('PluginId' + Index + 'Parent');

    //if (Index == '') {
    //    CollabActionDisplay('0');
    //}
}

function ProjectLotsGet(DefaultValue, Index) {

    $('#LotId' + Index).empty();

    var ProjectId = GetElementValue('ProjectId' + Index);
    var item = document.getElementById('LotId' + Index);
    item.options.length = 0;
    var node = document.createElement("option");
    node.value = 0;
    var textnode = document.createTextNode("Lot");
    node.appendChild(textnode);
    item.appendChild(node);
    $.get("/Project/ProjectLotsGet", { Input: ProjectId }, function (data) {
        $.each(data, function (index, row) {
            var node = document.createElement("option");
            node.value = row.LotId;
            var textnode = document.createTextNode(row.LotName);
            node.appendChild(textnode);
            item.appendChild(node);
        });
        for (var j = 0, len = item.options.length; j < len; j++) {
            var opt = item.options[j];
            if (opt.value == DefaultValue) {
                item.options[j].selected = 'selected';
                break;
            }
        };
    });
    //ShowReport('PluginId' + Index + 'Parent');

    //if (Index == '') {
    //    CollabActionDisplay('0');
    //}
}

function ProjectReportHomeOpen() {
    ProjectAllReportsHide();
    ProjectAllParametersHide();
    MenuBarNavHighlight(4, 2, 1);

    //Reset
    ProjectProgressInputsMultipleReset(''); 

    //defautl
    ProjectReportOpen();
}


function ProjectReportOpen() {
    ProjectAllReportsHide();
    ProjectAllParametersHide();
    MenuBarNavHighlight(4, 0, 1);

    ParamTitleSet('Rapport journalier');
    ShowReport('ParamReportId');

    //ShowParents
    ShowParent('DateStartId');
    ShowParent('DateEndId');
    ShowParent('ProjectId');

    DateValueDefaultSet('DateStartId', 0);
    DateValueDefaultSet('DateEndId', 0);

    //Fill
    //HtmlDropDownListNameOnlyXorFill('ProjectId', '0', '/Project/ProjectsSecGet', 'ProjectId', 'ProjectName');

    //OnClick
    //ElementOnChangeSet('ProjectId', "ProjectReportDisplay()");

    //Action
    ParamActionBtnGet(0, 'Display', 'fas fa-eye', "ProjectReportDisplay()");
    ParamActionBtnGet(2, 'Reset', 'fas fa-power-off', "ProjectProgressInputsMultipleReset('')");

    //Display
    //ProjectManCostDisplay();
}

function ProjectReportDisplay() {

    var DateStartString = ElementDateStringFromDatePickerGet('DateStartId');
    var DateEndString = ElementDateStringFromDatePickerGet('DateEndId');
    var ProjectIds = ElementDropDownListValueMultipleGet('ProjectId');
    var CreatedByUserId = '0';

    var ActionBtnId = 'ParamActionBtnId0';
    var Icon = 'fas fa-eye';

    ProjectReportGet(ActionBtnId, Icon, DateStartString, DateEndString, ProjectIds, CreatedByUserId);
}


function ProjectReportGet(ActionBtnId, Icon, DateStartString, DateEndString, ProjectIds, CreatedByUserId) {

    //Spin
    ActionBtnMarginSpin(ActionBtnId);

    var Pattern = 'ProjectReport';
    var PatternTableId = Pattern + 'TableId';
    var PatternTableReportId = Pattern + 'TableReportId';

    HideReport(PatternTableReportId);

    $('#' + PatternTableId).DataTable().destroy();;
    $('#' + PatternTableId).DataTable({
        "dom": 'Bfrtip',
        "buttons": [
            'excel'
        ],
        "initComplete": function (settings, json) {
            ShowReport(PatternTableReportId);
            ActionBtnIconMarginSet(ActionBtnId, Icon);
        },
        "ajax": {
            "url": "/Project/ProjectReportGet",
            "type": "GET",
            "datatype": "json",
            "data": {
                DateStartString: DateStartString,
                DateEndString: DateEndString,
                ProjectIds: ProjectIds,
                CreatedByUserId: CreatedByUserId
            }
        },
        "columns": [
            { "data": "ProjectName" },//0
            { "data": "DhmValue" },//1

            { "data": "DhmCreation" },//2
            { "data": "CreatedBy" },//3
            { "data": "DhmModification" },//4
            { "data": "ModifiedBy" },//5
            { "data": "DhmValidation" },//6
            { "data": "ValidatedBy" },//7

            { "mData": function vehicle(data, type, dataToSet) { return GetDigits(data.Day, 2) + GetDigits(data.Month, 2) + data.Year; } },//8 IsValid

            { "mData": function vehicle(data, type, dataToSet) { return GetDigits(data.Day, 2) + GetDigits(data.Month, 2) + data.Year; } },//9
            { "mData": function vehicle(data, type, dataToSet) { return GetDigits(data.Day, 2) + GetDigits(data.Month, 2) + data.Year; } },//10

            { "mData": function vehicle(data, type, dataToSet) { return GetDigits(data.Day, 2) + GetDigits(data.Month, 2) + data.Year; } },//11
            { "mData": function vehicle(data, type, dataToSet) { return GetDigits(data.Day, 2) + GetDigits(data.Month, 2) + data.Year; } },//12

        ],
        "columnDefs": [
            { "width": "3%", "className": "text-left", "targets": 0 },
            { "width": "3%", "className": "text-center", "targets": 1 },

            { "width": "3%", "className": "text-center", "targets": 2 },
            { "width": "3%", "className": "text-center", "targets": 3 },
            { "width": "3%", "className": "text-center none", "targets": 4 },
            { "width": "3%", "className": "text-center", "targets": 5 },
            { "width": "3%", "className": "text-center none", "targets": 6 },
            { "width": "3%", "className": "text-center", "targets": 7 },

            { "width": "3%", "className": "text-center", "targets": 8 },

            { "width": "3%", "className": "text-center", "targets": 9 },
            { "width": "3%", "className": "text-center", "targets": 10 },

            { "width": "3%", "className": "text-center", "targets": 11 },
            { "width": "3%", "className": "text-center", "targets": 12 },  

            { "targets": 0, "render": function (data, type, row) { return data; } },
            { "targets": 1, "render": function (data, type, row) { return DataTableDateValueFromData(data); } },

            { "targets": 2, "render": function (data, type, row) { return DataTableDhmValueFromData(data); } },
            { "targets": 3, "render": function (data, type, row) { return data; } },
            { "targets": 4, "render": function (data, type, row) { return DataTableDhmValueFromData(data); } },
            { "targets": 5, "render": function (data, type, row) { return data; } },
            { "targets": 6, "render": function (data, type, row) { return DataTableDhmValueFromData(data); } },
            { "targets": 7, "render": function (data, type, row) { return data; } },

            {
                "targets": 8, "render": function (data, type, row) {
                    var DateString = data;
                    var Id = DateString + row['ProjectId'] + row['CreatedByUserId'];
                    var argument = '\'' + DateString + '\', ' + row['ProjectId'] + ', \'' + row['CreatedByUserId'] + '\'';
                    return ProjectReportValidate(Id, argument, row['IsValid']);
                }
            },

            {
                "targets": 9, "render": function (data, type, row) {
                    var DateString = data;
                    var Id = DateString + row['ProjectId'] + row['CreatedByUserId'];
                    var argument = '\'' + DateString + '\', ' + row['ProjectId'] + ', \'' + row['CreatedByUserId'] + '\'';
                    return DataTableButtonGet('ProjectReportExport', Id, argument + ', \'PDF\'', '', 'dt-btn-cl gc-bc1-cl', 'fas fa-file-pdf btn-icon-cl gc-c1-cl', '')
                }
            },
            {
                "targets": 10, "render": function (data, type, row) {
                    var DateString = data;
                    var Id = DateString + row['ProjectId'] + row['CreatedByUserId'];
                    var argument = '\'' + DateString + '\', ' + row['ProjectId'] + ', \'' + row['CreatedByUserId'] + '\', \'All\'';
                    return DataTableButtonGet('ProjectReportNotify', Id, argument, '', 'dt-btn-cl gc-bc1-cl', 'fas fa-paper-plane btn-icon-cl gc-c1-cl', '')
                }
            },

            {
                "targets": 11, "render": function (data, type, row) {
                    var DateString = data;
                    var Id = DateString + row['ProjectId'] + row['CreatedByUserId'];
                    //return DataTableModalFormBtnEditGet(Pattern, Id);
                    return ProjectReportFormBtnEditGet(Pattern, Id, DateString, row['ProjectId'], row['CreatedByUserId']);
                }
            },
            { "targets": 12, "render": function (data, type, row) { return DataTableBtnDeleteGet(Pattern, data); } },
        ],
        "iDisplayLength": 200,
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
        "bFilter": true,
        "autoWidth": true,
        "searching": true,
        "lengthChange": true,
        "showNEntries": true,
        "bInfo": true,
        "bPaginate": true,
        "ordering": false
    });
}

function ProjectReportValidate(Id, argument, IsValid) {
    var onchange = 'ProjectReportSwitch(' + argument + ')';
    var Pattern = 'ProjectReportValidate';
    var data = IsValid;
    return DataTableCheckBoxGet(Pattern, Id, data, onchange);
}

function ProjectReportSwitch(DateString, ProjectId, CreatedByUserId) {
    var obj = {};
    obj.DateString = DateString;
    obj.ProjectId = ProjectId;
    obj.CreatedByUserId = CreatedByUserId;

    $.ajax({
        url: "/Project/ProjectReportSwitch",
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

function ProjectReportExport(DateString, ProjectId, CreatedByUserId, FileType) {
    var PrintLink = '/Project/ProjectReportExport?' +
        'DateString=' + DateString +
        '&ProjectId=' + ProjectId +
        '&CreatedByUserId=' + CreatedByUserId +
        '&FileType=' + FileType;

    NavigateTo(PrintLink, true);
}


function ProjectReportNotify(DateString, ProjectId, CreatedByUserId, Destination) {
    var ActionBtnId = 'ProjectReportNotifyBtnId' + DateString + ProjectId + CreatedByUserId;
    $('#' + ActionBtnId).find('span').attr('class', 'fa fa-spinner fa-spin');

    var Icon = 'fas fa-paper-plane';
    var IsMargin = false;

    var obj = {};
    obj.DateString = DateString;
    obj.ProjectId = ProjectId;
    obj.CreatedByUserId = CreatedByUserId;
    obj.Destination = Destination;
    $.ajax({
        url: "/Project/ProjectReportNotify",
        method: "POST",
        data: JSON.stringify(obj),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            ActionBtnSet(ActionBtnId, Icon, IsMargin);
        }
    });
}


function ProjectAdminUserFunctionsDisplay() {

    var ActionBtnId = 'ParamActionBtnId0';
    var Icon = 'fas fa-eye';
    var IsMargin = true;

    var ProjectId = ElementDropDownListValueGet('ProjectId');
    var FunctionCategoryId = ElementDropDownListValueGet('FunctionCategoryId');
    var FunctionId = ElementDropDownListValueGet('FunctionId');
    var UserId = ElementDropDownListValueGet('UserIdProject');

    ProjectAdminUserFunctionsGet(ActionBtnId, Icon, IsMargin, ProjectId, FunctionCategoryId, FunctionId, UserId);  
}

function ProjectAdminUserFunctionsGet(ActionBtnId, Icon, IsMargin, ProjectId, FunctionCategoryId, FunctionId, UserId) {

    //Spin
    ActionSpin(ActionBtnId, IsMargin);

    var Pattern = 'ProjectAdminUserFunctions';
    var PatternTableId = Pattern + 'TableId';
    var PatternTableReportId = Pattern + 'TableReportId';

    HideReport(PatternTableReportId);

    $('#' + PatternTableId).DataTable().destroy();;
    $('#' + PatternTableId).DataTable({
        "initComplete": function (settings, json) {
            ShowReport(PatternTableReportId);
            ActionBtnSet(ActionBtnId, Icon, IsMargin);
        },
        "ajax": {
            "url": "/Project/ProjectAdminUserFunctionsGet",
            "type": "GET",
            "datatype": "json",
            "data": {
                ProjectId: ProjectId,
                FunctionCategoryId: FunctionCategoryId,
                FunctionId: FunctionId,
                UserId: UserId
            }
        },
        "columns": [
            { "data": "ProjectName" },//0
            { "data": "FunctionCategoryName" },//1
            { "data": "FunctionName" },//2
            { "data": "UserName" },//3

            { "data": "UserFunctionId" },//4 Delete
        ],
        "columnDefs": [
            { "width": "3%", "className": "text-left", "targets": 0 },
            { "width": "3%", "className": "text-left", "targets": 1 },
            { "width": "3%", "className": "text-left", "targets": 2 },
            { "width": "3%", "className": "text-left", "targets": 3 },

            { "width": "3%", "className": "text-center", "targets": 4 },

            { "targets": 0, "render": function (data, type, row) { return data; } },
            { "targets": 1, "render": function (data, type, row) { return data; } },
            { "targets": 2, "render": function (data, type, row) { return data; } },
            { "targets": 3, "render": function (data, type, row) { return data; } },

            { "targets": 4, "render": function (data, type, row) { return DataTableGetButton('ProjectAdminUserFunctionsDelete', data, 'far fa-trash-alt', 'fe1200'); } },
        ],
        "iDisplayLength": 20,
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
        "bFilter": true,
        "autoWidth": true,
        "searching": true,
        "lengthChange": true,
        "showNEntries": true,
        "bInfo": true,
        "bPaginate": true,
        "ordering": false
    });
}

function ProjectAdminUserFunctionsAllAdd() {
    //Set action button
    var ActionBtnId = 'ParamActionBtnId1';
    var Icon = ParamActionIconAddGet();
    var IsMargin = true;

    //Get input values
    var ProjectId = ElementDropDownListValueGet('ProjectId');
    var UserId = ElementDropDownListValueGet('UserIdProject');

    if (ProjectId != '0' && UserId != '0') {

        ParamMessageReset();

        //Spin
        ActionSpin(ActionBtnId, IsMargin);

        //Insert
        var obj = {};
        obj.ProjectId = ProjectId;
        obj.UserId = UserId;

        $.ajax({
            url: "/Project/ProjectAdminUserFunctionsAllAdd",
            method: "POST",
            data: JSON.stringify(obj),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {
                ActionBtnSet(ActionBtnId, Icon, IsMargin);
                ProjectAdminUserFunctionsDisplay();
            }
        });

        //Connection
        //NotiConnectionIdUpdate('Project-Paramétrage-Ajouter une liaison utilisateur-fonctions');
    }
    else {
        ParamMessageErrorDisplay('Les champs projet et utilisateur sont obligatoire')
    }
}

function ProjectAdminFunctionProjectsDelete(FunctionProjectId) {

    var ActionBtnId = 'ProjectAdminFunctionProjectsDeleteBtnId' + FunctionProjectId;
    var Icon = 'fas fa-minus-circle';
    var IsMargin = false;

    ActionSpin(ActionBtnId, IsMargin);
    
    var obj = {};
    obj.FunctionProjectId = FunctionProjectId;
    
    $.ajax({
        url: "/Project/ProjectAdminFunctionProjectsDelete",
        method: "POST",
        data: JSON.stringify(obj),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            ActionBtnSet(ActionBtnId, Icon, IsMargin);
        }
    });
}


function ProjectAdminSponsorDelete(SponsorId) {

    var ActionBtnId = 'ProjectAdminSponsorDeleteBtnId' + SponsorId;
    var Icon = 'fas fa-minus-circle';
    var IsMargin = false;

    ActionSpin(ActionBtnId, IsMargin);

    var obj = {};
    obj.SponsorId = SponsorId;

    $.ajax({
        url: "/Project/ProjectAdminSponsorDelete",
        method: "POST",
        data: JSON.stringify(obj),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            ActionBtnSet(ActionBtnId, Icon, IsMargin);
        }
    });
}


function ProjectAdminCompanyDelete(CompanyId) {

    var ActionBtnId = 'ProjectAdminCompanyDeleteBtnId' + CompanyId;
    var Icon = 'fas fa-minus-circle';
    var IsMargin = false;

    ActionSpin(ActionBtnId, IsMargin);

    var obj = {};
    obj.CompanyId = CompanyId;

    $.ajax({
        url: "/Project/ProjectAdminCompanyDelete",
        method: "POST",
        data: JSON.stringify(obj),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            ActionBtnSet(ActionBtnId, Icon, IsMargin);
        }
    });
}


function ProjectAdminProjectManagerDelete(ProjectManagerId) {

    var ActionBtnId = 'ProjectAdminProjectManagerDeleteBtnId' + ProjectManagerId;
    var Icon = 'fas fa-minus-circle';
    var IsMargin = false;

    ActionSpin(ActionBtnId, IsMargin);

    var obj = {};
    obj.ProjectManagerId = ProjectManagerId;

    $.ajax({
        url: "/Project/ProjectAdminCompanyDelete",
        method: "POST",
        data: JSON.stringify(obj),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            ActionBtnSet(ActionBtnId, Icon, IsMargin);
        }
    });
}


function ProjectAdminProjectFunctionDelete(FunctionId) {

    var ActionBtnId = 'ProjectAdminProjectFunctionDeleteBtnId' + FunctionId;
    var Icon = 'fas fa-minus-circle';
    var IsMargin = false;

    ActionSpin(ActionBtnId, IsMargin);

    var obj = {};
    obj.FunctionId = FunctionId;

    $.ajax({
        url: "/Project/ProjectAdminProjectFunctionDelete",
        method: "POST",
        data: JSON.stringify(obj),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            ActionBtnSet(ActionBtnId, Icon, IsMargin);
        }
    });
}


function ProjectAdminUserProjectsDelete(UserProjectId) {

    var ActionBtnId = 'ProjectAdminUserProjectsDeleteBtnId' + UserProjectId;
    var Icon = 'fas fa-minus-circle';
    var IsMargin = false;

    ActionSpin(ActionBtnId, IsMargin);

    var obj = {};
    obj.UserProjectId = UserProjectId;

    $.ajax({
        url: "/Project/ProjectAdminUserProjectsDelete",
        method: "POST",
        data: JSON.stringify(obj),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            ActionBtnSet(ActionBtnId, Icon, IsMargin);
        }
    });

}


function ProjectAdminUserBuildingsDelete(UserBuildingId) {

    var ActionBtnId = 'ProjectAdminUserBuildingsDeleteBtnId' + UserBuildingId;
    var Icon = 'fas fa-minus-circle';
    var IsMargin = false;

    ActionSpin(ActionBtnId, IsMargin);

    var obj = {};
    obj.UserBuildingId = UserBuildingId;

    $.ajax({
        url: "/Project/ProjectAdminUserBuildingsDelete",
        method: "POST",
        data: JSON.stringify(obj),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            ActionBtnSet(ActionBtnId, Icon, IsMargin);
        }
    });

}


function ProjectAdminUserLotsDelete(UserLotId) {

    var ActionBtnId = 'ProjectAdminUserLotsDeleteBtnId' + UserLotId;
    var Icon = 'fas fa-minus-circle';
    var IsMargin = false;

    ActionSpin(ActionBtnId, IsMargin);

    var obj = {};
    obj.UserLotId = UserLotId;

    $.ajax({
        url: "/Project/ProjectAdminUserLotsDelete",
        method: "POST",
        data: JSON.stringify(obj),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            ActionBtnSet(ActionBtnId, Icon, IsMargin);
        }
    });

}


function ProjectAdminUserFunctionsDelete(UserFunctionId) {

    var ActionBtnId = 'ProjectAdminUserFunctionsDeleteBtnId' + UserFunctionId;
    var Icon = 'fas fa-minus-circle';
    var IsMargin = false;

    ActionSpin(ActionBtnId, IsMargin);

    var obj = {};
    obj.UserFunctionId = UserFunctionId;

    $.ajax({
        url: "/Project/ProjectAdminUserLotsDelete",
        method: "POST",
        data: JSON.stringify(obj),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            ActionBtnSet(ActionBtnId, Icon, IsMargin);
        }
    });

}


function ProjectAdminCompanyLotsDisplay() {

    var ActionBtnId = 'ParamActionBtnId0';
    var Icon = 'fas fa-eye';
    var IsMargin = true;

    var ProjectId = ElementDropDownListValueGet('ProjectId');   
    var BuildingId = ElementDropDownListValueGet('BuildingId');
    var LotId = ElementDropDownListValueGet('LotId');
    var CompanyId = ElementDropDownListValueGet('CompanyId');

    ProjectAdminCompanyLotsGet(ActionBtnId, Icon, IsMargin, ProjectId, BuildingId, LotId, CompanyId);
}


function ProjectAdminCompanyLotsGet(ActionBtnId, Icon, IsMargin, ProjectId, BuildingId, LotId, CompanyId) {

    //Spin
    ActionSpin(ActionBtnId, IsMargin);

    var Pattern = 'ProjectAdminCompanyLots';
    var PatternTableId = Pattern + 'TableId';
    var PatternTableReportId = Pattern + 'TableReportId';

    HideReport(PatternTableReportId);

    $('#' + PatternTableId).DataTable().destroy();;
    $('#' + PatternTableId).DataTable({
        "scrollY": '700px',
        "scrollCollapse": true,
        "scrollX": true,
        "initComplete": function (settings, json) {
            HideReport(Pattern + 'TableCardHeaderId');
            ShowReport(PatternTableReportId);
            ActionBtnSet(ActionBtnId, Icon, IsMargin);
        },
        "ajax": {
            "url": "/Project/ProjectAdminCompanyLotsGet",
            "type": "GET",
            "datatype": "json",
            "data": {
                ProjectId: ProjectId,
                BuildingId: BuildingId,
                LotId: LotId,
                CompanyId: CompanyId
            }
        },
        "columns": [
            { "data": "ProjectName" },//0
            { "data": "BuildingName" },//1
            { "data": "LotName" },//2
            { "data": "CompanyName" },//3

            { "data": "CompanyLotId" },//4 Delete
        ],
        "columnDefs": [
            { "width": "3%", "className": "text-left", "targets": 0 },
            { "width": "3%", "className": "text-left", "targets": 1 },
            { "width": "3%", "className": "text-left", "targets": 2 },
            { "width": "3%", "className": "text-left", "targets": 3 },

            { "width": "3%", "className": "text-center", "targets": 4 },

            { "targets": 0, "render": function (data, type, row) { return data; } },
            { "targets": 1, "render": function (data, type, row) { return data; } },
            { "targets": 2, "render": function (data, type, row) { return data; } },
            { "targets": 3, "render": function (data, type, row) { return data; } },

            { "targets": 4, "render": function (data, type, row) { return DataTableGetButton('ProjectAdminCompanyLotsDelete', data, 'far fa-trash-alt', 'fe1200'); } },
        ],
        "iDisplayLength": 20,
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
        "bFilter": true,
        "autoWidth": true,
        "searching": true,
        "lengthChange": true,
        "showNEntries": true,
        "bInfo": true,
        "bPaginate": true,
        "ordering": false
    });
}


function ProjectAdminCompanyLotsAllAdd() {
    //Set action button
    var ActionBtnId = 'ParamActionBtnId1';
    var Icon = ParamActionIconAddGet();
    var IsMargin = true;

    //Get input values
    var ProjectId = ElementDropDownListValueGet('ProjectId');
    var BuildingId = ElementDropDownListValueGet('BuildingId');
    var LotId = ElementDropDownListValueGet('LotId');
    var CompanyId = ElementDropDownListValueGet('CompanyId');

    if (ProjectId != '0' && CompanyId != '0') {

        ParamMessageReset();

        //Spin
        ActionSpin(ActionBtnId, IsMargin);

        //Insert
        var obj = {};
        obj.ProjectId = ProjectId;
        obj.BuildingId = BuildingId;
        obj.LotId = LotId;
        obj.CompanyId = CompanyId;

        $.ajax({
            url: "/Project/ProjectAdminCompanyLotsAllAdd",
            method: "POST",
            data: JSON.stringify(obj),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {
                ActionBtnSet(ActionBtnId, Icon, IsMargin);
                ProjectAdminCompanyLotsDisplay();
            }
        });

        //Connection
        //NotiConnectionIdUpdate('Project-Paramétrage-Ajouter une liaison utilisateur-fonctions');
    }
    else {
        ParamMessageErrorDisplay('Les champs projet et utilisateur sont obligatoire')
    }
}


function ProjectAdminCompanyLotsDelete(CompanyLotId) {

    var ActionBtnId = 'ProjectAdminCompanyLotsDeleteBtnId' + CompanyLotId;
    var Icon = 'fas fa-minus-circle';
    var IsMargin = false;

    ActionSpin(ActionBtnId, IsMargin);

    var obj = {};
    obj.CompanyLotId = CompanyLotId;

    $.ajax({
        url: "/Project/ProjectAdminCompanyLotsDelete",
        method: "POST",
        data: JSON.stringify(obj),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            ActionBtnSet(ActionBtnId, Icon, IsMargin);
        }
    });

}

function ParamCalendarOpen() {
    ProjectAllReportsHide();
    ProjectAllParametersHide();
    MenuBarNavHighlight(5, 2, 2);

    ParamTitleSet('Calendrier');
    ShowReport('ParamReportId');

    ShowParent('DateStartId');
    ShowParent('DateEndId');
    ShowParent('CalendarTypeId');
    ShowParent('IsAppliedId');
    ShowParent('CommentId');

    //Fill
    HtmlDropDownListNameOnlyLabelFill('CalendarTypeId', '0', '/Project/ParamCalendarTypesGet', 'CalendarTypeId', 'CalendarTypeName', 'Type');
    //HtmlDropDownListWithInputNameOnlyFill('FunctionId', '0', '/Project/ProjectFunctionsAllFromCategoryGet', 'FunctionId', 'FunctionName', '0');
    //ElementDropDownListReset('BuildingId');
    //ElementDropDownListReset('LotId');
    //HtmlDropDownListWithInputNameOnlyFill('BuildingId', '0', '/Project/ProjectBuildingsGet', 'BuildingId', 'BuildingName', '0');

    //OnChange
    //ElementOnChangeSet('ParamId', 'ProjectAdminDisplay()');
    //ElementOnChangeSet('ProjectId', "ProjectLotsGet('0', '')");
    //ElementOnChangeSet('FunctionCategoryId', "ProjectFunctionsAllFromCategoryIdGet('0', '')")

    //OnClick
    //ElementOnClickSet('ProjectId', "ProjectBuildingsGet('0', '')");

    //Action
    ParamActionBtnGet(0, 'Display', 'fas fa-eye', "ParamCalendarDisplay()");
    ParamActionBtnGet(1, 'Add', 'fas fa-plus-circle', "ParamCalendarAdd()");

    //Display
    //ProjectAdminDisplay();
}


function ParamCalendarDisplay() {

    var DateStartString = ElementDateStringFromDatePickerGet('DateStartId');
    var DateEndString = ElementDateStringFromDatePickerGet('DateEndId');
    var CalendarTypeId = ElementDropDownListValueGet('CalendarTypeId');
   
    var ActionBtnId = 'ParamActionBtnId0';
    var Icon = 'fas fa-eye';

    ParamCalendarGet(ActionBtnId, Icon, DateStartString, DateEndString, CalendarTypeId);
}


function ParamCalendarGet(ActionBtnId, Icon, DateStartString, DateEndString, CalendarTypeId) {

    //Spin
    ActionBtnMarginSpin(ActionBtnId);

    var Pattern = 'ParamCalendar';
    var PatternTableId = Pattern + 'TableId';
    var PatternTableReportId = Pattern + 'TableReportId';

    //HideTableReport('ProjectMan');
    HideReport(PatternTableReportId);

    $('#' + PatternTableId).DataTable().destroy();;
    $('#' + PatternTableId).DataTable({
        "dom": 'Bfrtip',
        "initComplete": function (settings, json) {
            ShowReport(PatternTableReportId);
            ActionBtnIconMarginSet(ActionBtnId, Icon);
        },
        "ajax": {
            "url": "/Project/ParamCalendarGet",
            "type": "GET",
            "datatype": "json",
            "data": {
                DateStartString: DateStartString,
                DateEndString: DateEndString,
                CalendarTypeId: CalendarTypeId
            }
        },
        "columns": [
            { "data": "CalendarTypeName" },//0
            { "data": "DhmValueStart" },//1
            { "data": "DhmValueEnd" },//2            
            { "data": "CalendarName" },//3
            { "data": "IsApplied" },//4

            { "data": "CalendarId" },//5
        ],
        "columnDefs": [
            { "width": "3%", "className": "text-left", "targets": 0 },
            { "width": "3%", "className": "text-center", "targets": 1 },
            { "width": "3%", "className": "text-center", "targets": 2 },
            { "width": "3%", "className": "text-left", "targets": 3 },
            { "width": "3%", "className": "text-center", "targets": 4 },

            { "width": "3%", "className": "text-center", "targets": 5 },

            { "targets": 0, "render": function (data, type, row) { return data; } },
            { "targets": 1, "render": function (data, type, row) { return GetDateValueFromDataTableDate(data); } },
            { "targets": 2, "render": function (data, type, row) { return GetDateValueFromDataTableDate(data); } },
            { "targets": 3, "render": function (data, type, row) { return data; } },
            { "targets": 4, "render": function (data, type, row) { return data; } },

            {
                "targets": 5, "render": function (data, type, row) {

                    var PatternForm = 'Edit';
                    var Icon = 'fas fa-edit';
                    var Label = '';
                    var RowId = data;

                    var OnClick = 'ProjectEventFormLoad(' +
                        row['CalendarId'] + ', ' +
                        '\'' + row['CalendarName'] + '\', ' +
                        '\'' + row['CalendarTypeId'] + '\', ' +
                        row['YearS'] + ', ' +
                        row['MonthS'] + ', ' +
                        row['DayS'] + ', ' +
                        row['YearE'] + ', ' +
                        row['MonthE'] + ', ' +
                        row['DayE'] + ', ' +
                        ')';

                    var RowId = '';
                    return DataTableFormBtnIdGet(Pattern, PatternForm, RowId, Label, OnClick, Icon);
                }
            },
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
        "bFilter": true,
        "autoWidth": true,
        "searching": true,
        "lengthChange": true,
        "showNEntries": true,
        "bInfo": true,
        "bPaginate": true,
        "ordering": false
    });
}

function ParamCalendarAdd() {
    //Set action button
    var ActionBtnId = ParamActionBtnIdAddGet();
    var Icon = ParamActionIconAddGet();
    var IsMargin = true;

    //Get input values
    var DateStartString = ElementDateStringFromDatePickerGet('DateStartId');
    var DateEndString = ElementDateStringFromDatePickerGet('DateEndId');
    var CalendarTypeId = ElementDropDownListValueGet('CalendarTypeId');
    var CalendarName = ElementValueGet('CommentId');
    var IsApplied = ElementBooleanGet('IsAppliedId');

    if (CalendarTypeId != '0') {

        ParamMessageReset();

        //Spin
        ActionSpin(ActionBtnId, IsMargin);

        //Insert
        var obj = {};
        obj.DateStartString = DateStartString;
        obj.DateEndString = DateEndString;
        obj.CalendarTypeId = CalendarTypeId;
        obj.CalendarName = CalendarName;
        obj.IsApplied = IsApplied;

        $.ajax({
            url: "/Project/ParamCalendarAdd",
            method: "POST",
            data: JSON.stringify(obj),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {
                ActionBtnSet(ActionBtnId, Icon, IsMargin);
                ParamCalendarDisplay();
            }
        });

        //Connection
        //NotiConnectionIdUpdate('Project-Paramétrage-Ajouter une liaison utilisateur-projets');
    }
    else {
        ParamMessageErrorDisplay('Certains champs sont obligatoire')
    }
}


function ParamCalendarFormLoad(
    CalendarId,
    CalendarName,
    CalendarTypeId,
    YearS,
    MonthS,
    DayS,
    YearE,
    MonthE,
    DayE) {

    HideReport('ProjectEventEditModalDialogReportId');

    //Fill  
    $('#ProjectNameId2').text(ProjectName);

    ElementDropDownListSet('EventCategoryId2', EventCategoryId);

    var DateString = GetDigits(Day, 2) + GetDigits(Month, 2) + Year;
    var DateStringInverse = Year + GetDigits(Month, 2) + GetDigits(Day, 2);

    ElementInputDateValueSet('DhmValueId2', Year, Month, Day);
    ElementInputSet('EventCommentId2', Comment);


    //Set modal action buttons
    var Pattern = 'ProjectEventEdit';
    var Label = 'Enregistrer';
    var Icon = 'far fa-save';
    var OnClick = Pattern + '(' + ProjectEventId + ')';
    ModalActionBtnGet(Pattern, Label, Icon, OnClick);


    //image
    document.getElementById("FileId2").value = "";

    var ImageId0 = "CarouselId20";
    var ImageId1 = "CarouselId21";
    var ImageId2 = "CarouselId22";

    document.getElementById(ImageId0).src = ImagesFolderVD + '/Event/' + DateStringInverse + '-' + ProjectEventId + '-' + '0.jpg';
    document.getElementById(ImageId1).src = ImagesFolderVD + '/Event/' + DateStringInverse + '-' + ProjectEventId + '-' + '1.jpg';
    document.getElementById(ImageId2).src = ImagesFolderVD + '/Event/' + DateStringInverse + '-' + ProjectEventId + '-' + '2.jpg';

    ShowReport('ProjectEventEditModalDialogReportId');
}

function ProjectReportFormBtnEditGet(Pattern, RowId, DateString, ProjectId, CreatedByUserId) {
    var PatternForm = 'Edit';
    var Icon = 'fas fa-edit';
    var Label = '';
    var OnClick = 'ProjectReportFormLoad(\'' + Pattern + '\',\'' + PatternForm + '\', \'' + DateString + '\', ' + ProjectId + ', \'' + CreatedByUserId + '\')';
    var FormElement = DataTableFormBtnIdGet(Pattern, PatternForm, RowId, Label, OnClick, Icon);
    return FormElement;
}

function ProjectReportFormLoad(Pattern, PatternForm, DateString, ProjectId, CreatedByUserId) {

    //alert('in');
    //ModalActionBtnEditGet(Pattern, Id, '');
    ProjectReportBtnEditGet(Pattern, DateString, ProjectId, CreatedByUserId);

    //Load
    var obj = {};
    obj.DateStartString = DateString;
    obj.DateEndString = DateString;
    obj.ProjectId = ProjectId;
    obj.CreatedByUserId = CreatedByUserId;

    $.ajax({
        url: "/Project/ProjectReportGet",
        method: "POST",
        data: JSON.stringify(obj),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: true,
        success: function (data) {
            jQuery.each(data, function (index, itemData) {

                //Get features
                ElementBitSet('Option00IsCheckedId', itemData[0].Option00IsChecked);
                ElementBitSet('Option01IsCheckedId', itemData[0].Option01IsChecked);
                ElementBitSet('Option02IsCheckedId', itemData[0].Option02IsChecked);
                ElementBitSet('Option03IsCheckedId', itemData[0].Option03IsChecked);
                ElementBitSet('Option04IsCheckedId', itemData[0].Option04IsChecked);
                ElementBitSet('Option05IsCheckedId', itemData[0].Option05IsChecked);
                ElementBitSet('Option06IsCheckedId', itemData[0].Option06IsChecked);
                ElementBitSet('Option07IsCheckedId', itemData[0].Option07IsChecked);
                ElementBitSet('Option08IsCheckedId', itemData[0].Option08IsChecked);

                ElementInputSet('Option00CommentId', itemData[0].Option00Comment);
                ElementInputSet('Option01CommentId', itemData[0].Option01Comment);
                ElementInputSet('Option02CommentId', itemData[0].Option02Comment);
                ElementInputSet('Option03CommentId', itemData[0].Option03Comment);
                ElementInputSet('Option04CommentId', itemData[0].Option04Comment);
                ElementInputSet('Option05CommentId', itemData[0].Option05Comment);
                ElementInputSet('Option06CommentId', itemData[0].Option06Comment);
                ElementInputSet('Option07CommentId', itemData[0].Option07Comment);
                ElementInputSet('Option08CommentId', itemData[0].Option08Comment);

                ElementInputSet('ObservationId', itemData[0].Observation);

                //Style
                document.getElementById(Pattern + PatternForm + 'ModalDialogReportId').style.width = '80%';
                document.getElementById(Pattern + PatternForm + 'ModalDialogReportId').style.marginLeft = 'auto';
                document.getElementById(Pattern + PatternForm + 'ModalDialogReportId').style.marginTop = 'auto';
                document.getElementById(Pattern + PatternForm + 'ModalDialogReportId').style.maxWidth = '1600px';

                //ActionBtnSet(ActionBtnId, Icon, IsMargin);
                ShowReport('ProjectReportEditModalDialogReportId');

            });
        }
    })
}

function ProjectReportEdit(DateString, ProjectId, CreatedByUserId) {

    //Get input values
    var Option00IsChecked = ElementBooleanGet('Option00IsCheckedId');
    var Option01IsChecked = ElementBooleanGet('Option01IsCheckedId');
    var Option02IsChecked = ElementBooleanGet('Option02IsCheckedId');
    var Option03IsChecked = ElementBooleanGet('Option03IsCheckedId');
    var Option04IsChecked = ElementBooleanGet('Option04IsCheckedId');
    var Option05IsChecked = ElementBooleanGet('Option05IsCheckedId');
    var Option06IsChecked = ElementBooleanGet('Option06IsCheckedId');
    var Option07IsChecked = ElementBooleanGet('Option07IsCheckedId');
    var Option08IsChecked = ElementBooleanGet('Option08IsCheckedId');

    var Option00Comment = GetElementValue('Option00CommentId');
    var Option01Comment = GetElementValue('Option01CommentId');
    var Option02Comment = GetElementValue('Option02CommentId');
    var Option03Comment = GetElementValue('Option03CommentId');
    var Option04Comment = GetElementValue('Option04CommentId');
    var Option05Comment = GetElementValue('Option05CommentId');
    var Option06Comment = GetElementValue('Option06CommentId');
    var Option07Comment = GetElementValue('Option07CommentId');
    var Option08Comment = GetElementValue('Option08CommentId');

    var Observation = GetElementValue('ObservationId');

    //Edit
    var obj = {};
    obj.DateString = DateString;
    obj.ProjectId = ProjectId;
    obj.CreatedByUserId = CreatedByUserId;

    obj.Option00IsChecked = Option00IsChecked;
    obj.Option01IsChecked = Option01IsChecked;
    obj.Option02IsChecked = Option02IsChecked;
    obj.Option03IsChecked = Option03IsChecked;
    obj.Option04IsChecked = Option04IsChecked;
    obj.Option05IsChecked = Option05IsChecked;
    obj.Option06IsChecked = Option06IsChecked;
    obj.Option07IsChecked = Option07IsChecked;
    obj.Option08IsChecked = Option08IsChecked;

    obj.Option00Comment = Option00Comment;
    obj.Option01Comment = Option01Comment;
    obj.Option02Comment = Option02Comment;
    obj.Option03Comment = Option03Comment;
    obj.Option04Comment = Option04Comment;
    obj.Option05Comment = Option05Comment;
    obj.Option06Comment = Option06Comment;
    obj.Option07Comment = Option07Comment;
    obj.Option08Comment = Option08Comment;

    obj.Observation = Observation;

    $.ajax({
        url: "/Project/ProjectReportEdit",
        method: "POST",
        data: JSON.stringify(obj),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            //document.getElementById("ProjectReport" + Id).checked = true;
            //QualifPathSend(RowId, QualifReasonId);
        }
    });
}

function ProjectReportBtnEditGet(Pattern, DateString, ProjectId, CreatedByUserId) {
    var Pattern = 'ProjectReportEdit';
    var Label = 'Enregistrer';
    var Icon = 'far fa-save';
    var OnClick = 'ProjectReportEdit(\'' + DateString + '\', ' + ProjectId + ', \'' + CreatedByUserId + '\')';
    ModalActionBtnGet(Pattern, Label, Icon, OnClick);
}

function ProjectFunctionsAllFromCategoryIdGet(DefaultValue, Index) {

    $('#FunctionId' + Index).empty();
    //var ProjectId = GetElementValue('ProjectId' + Index);
    var FunctionCategoryId = GetElementValue('FunctionCategoryId' + Index);
    var item = document.getElementById('FunctionId' + Index);
    item.options.length = 0;
    var node = document.createElement("option");
    node.value = 0;
    var textnode = document.createTextNode("Select Function");
    node.appendChild(textnode);
    item.appendChild(node);
    $.get("/Project/ProjectFunctionsAllFromCategoryGet", { Input: FunctionCategoryId }, function (data) {
        $.each(data, function (index, row) {
            var node = document.createElement("option");
            node.value = row.FunctionId;
            var textnode = document.createTextNode(row.FunctionName);
            node.appendChild(textnode);
            item.appendChild(node);
        });
        for (var j = 0, len = item.options.length; j < len; j++) {
            var opt = item.options[j];
            if (opt.value == DefaultValue) {
                item.options[j].selected = 'selected';
                break;
            }
        };
    });
    //ShowReport('PluginId' + Index + 'Parent');

    //if (Index == '') {
    //    CollabActionDisplay('0');
    //}
}


function ProjectsSecGet(DefaultValue, Index) {

    $('#ProjectId' + Index).empty();

    var item = document.getElementById('ProjectId' + Index);
    item.options.length = 0;
    var node = document.createElement("option");
    node.value = 0;
    var textnode = document.createTextNode("Select Project");
    node.appendChild(textnode);
    item.appendChild(node);
    $.get("/Project/ProjectsSecGet", function (data) {
        $.each(data, function (index, row) {
            var node = document.createElement("option");
            node.value = row.ProjectId;
            var textnode = document.createTextNode(row.ProjectName);
            node.appendChild(textnode);
            item.appendChild(node);
        });
        for (var j = 0, len = item.options.length; j < len; j++) {
            var opt = item.options[j];
            if (opt.value == DefaultValue) {
                item.options[j].selected = 'selected';
                break;
            }
        };


        ProjectBuildingsSecGet('0', '');
        ProjectLotsSecGet('0', '');

    });
    //ShowReport('PluginId' + Index + 'Parent');

    //if (Index == '') {
    //    CollabActionDisplay('0');
    //}
}

function ProjectEventHomeOpen() {
    ProjectAllReportsHide();
    ProjectAllParametersHide();
    MenuBarNavHighlight(3, 2, 1);

    //Reset
    ProjectProgressInputsReset('');

    //Defautl
    ProjectEventOpen();
}

function ProjectEventOpen() {
    ProjectAllReportsHide();
    ProjectAllParametersHide();
    MenuBarNavHighlight(3, 0, 1);

    ParamTitleSet('Evènements');
    ShowReport('ParamReportId');

    //ShowParents
    ShowParent('DateStartId');
    ShowParent('DateEndId');
    ShowParent('ProjectId');
    ShowParent('EventCategoryId');
    ShowParent('CommentId');
    ShowParent('FileId');
    ShowParent('UpdateStatusId');   
    ShowParent('ResponsibleId');
    ShowParent('EventLocationId'); 

    DateValueDefaultSet('DateStartId', 0);
    DateValueDefaultSet('DateEndId', 0);

    //Fill
    //HtmlDropDownListNameOnlyXorFill('ProjectId', '0', '/Project/ProjectsSecGet', 'ProjectId', 'ProjectName');

    //OnClick
    //ElementOnClickSet('ProjectId', "ProjectEventsDisplay()");
    //ElementOnClickSet('EventCategoryId', "ProjectEventsDisplay()");

    //Action
    ParamActionBtnGet(0, 'Display', 'fas fa-eye', "ProjectEventsDisplay(0)");
    ParamActionBtnGet(1, 'Add', 'fas fa-plus-circle', 'ProjectEventAdd()');
    ParamActionBtnGet(2, 'Reset', 'fas fa-power-off', "ProjectProgressInputsMultipleReset('')");

    //Display
    //ProjectProgressDisplay();

    //Style
    document.getElementById('Grid_0006GridCol0Id').setAttribute('Class', 'col-8');
    document.getElementById('Grid_0006GridCol1Id').setAttribute('Class', 'col-4');
    document.getElementById('Grid_0006GridCol1Id').style.height = '3000px';

    //ProjectEventDailyGet();
}

function ProjectEventsDisplay(ProjectEventId) {

    var ActionBtnId = 'ParamActionBtnId0';
    var Icon = 'fas fa-eye';
    var IsMargin = true;

    var DateStringStart = ElementDateStringFromDatePickerGet('DateStartId');
    var DateStringEnd = ElementDateStringFromDatePickerGet('DateEndId');
    var ProjectId = ElementDropDownListValueGet('ProjectId');
    var EventCategoryId = ElementDropDownListValueGet('EventCategoryId');
    var UpdateStatusId = ElementDropDownListValueGet('UpdateStatusId');
    var ResponsibleId = ElementDropDownListValueGet('ResponsibleId');        

    ProjectEventsGet(ActionBtnId, Icon, IsMargin, DateStringStart, DateStringEnd, ProjectId, EventCategoryId, UpdateStatusId, ResponsibleId, ProjectEventId);
}

function ProjectEventsGet(ActionBtnId, Icon, IsMargin, DateStringStart, DateStringEnd, ProjectId, EventCategoryId, UpdateStatusId, ResponsibleId, ProjectEventId) {

    //Spin
    ActionBtnMarginSpin(ActionBtnId);

    var Pattern = 'ProjectEvent';
    var PatternTableId = Pattern + 'TableId';
    var PatternTableReportId = Pattern + 'TableReportId';

    HideReport(PatternTableReportId);

    $('#' + PatternTableId).DataTable().destroy();;
    $('#' + PatternTableId).DataTable({
        "dom": 'Bfrtip',
        "buttons": [
            'excel'
        ],
        "initComplete": function (settings, json) {
            ShowReport(PatternTableReportId);
            ActionBtnSet(ActionBtnId, Icon, IsMargin);
            ShowGridReport('Grid_0006');
        },
        "ajax": {
            "url": "/Project/ProjectEventsGet",
            "type": "GET",
            "datatype": "json",
            "data": {
                DateStringStart: DateStringStart,
                DateStringEnd: DateStringEnd,
                ProjectId: ProjectId,
                EventCategoryId: EventCategoryId,
                UpdateStatusId: UpdateStatusId,
                ResponsibleId: ResponsibleId,
                ProjectEventId: ProjectEventId
            }
        },
        "columns": [
            { "data": "ProjectName" },//0
            { "data": "" },//1
            { "data": "" },//2
            { "data": "EventCategoryName" },//3
            { "data": "ResponsibleName" },//4
            { "data": "UpdateStatusName" },//5

            { "data": "Comment" },//6
           
            { "data": "DhmCreation" },//7
            { "data": "DhmModification" },//8
            { "data": "DhmValidation" },//9

            { "data": "CreatedBy" },//10
            { "data": "ModifiedBy" },//11
            { "data": "ValidatedBy" },//12

            { "data": "Comment" },//13

            { "data": "ProjectEventId" },//14
            { "data": "ProjectEventId" },//15

            { "data": "ImagePath0" },//16
            { "data": "ImagePath1" },//17
            { "data": "ImagePath2" },//18

            { "data": "EventLocation" },//19
        ],
        "columnDefs": [
            { "width": "3%", "className": "text-left", "targets": 0 },
            { "width": "3%", "className": "text-center", "targets": 1 },
            { "width": "3%", "className": "text-center", "targets": 2 },
            { "width": "3%", "className": "text-left", "targets": 3 },
            { "width": "3%", "className": "text-left", "targets": 4 },
            { "width": "3%", "className": "text-left", "targets": 5 },

            { "width": "3%", "className": "text-left", "targets": 6 },

            { "width": "3%", "className": "text-left none", "targets": 7 },
            { "width": "3%", "className": "text-center none", "targets": 8 },
            { "width": "3%", "className": "text-center none", "targets": 9 },

            { "width": "3%", "className": "text-left", "targets": 10 },
            { "width": "3%", "className": "text-left none", "targets": 11 },
            { "width": "3%", "className": "text-left none", "targets": 12 },

            { "width": "3%", "className": "text-left none", "targets": 13 },

            { "width": "3%", "className": "text-center", "targets": 14 },
            { "width": "3%", "className": "text-center", "targets": 15 },

            { "width": "3%", "className": "text-center", "targets": 16 },
            { "width": "3%", "className": "text-center", "targets": 17 },
            { "width": "3%", "className": "text-center", "targets": 18 },

            { "width": "3%", "className": "text-left", "targets": 19 },

            { "targets": 0, "render": function (data, type, row) { return data; } },
            { "targets": 1, "render": function (data, type, row) { return DataTableDateValueStartFromRowGet(row); } },
            { "targets": 2, "render": function (data, type, row) { return DataTableDateValueEndFromRowGet(row); } },
            { "targets": 3, "render": function (data, type, row) { return data; } },
            { "targets": 4, "render": function (data, type, row) { return data; } },
            { "targets": 5, "render": function (data, type, row) { return DataTableStatusGet(data, row['RgbValue']); } },

            { "targets": 6, "render": function (data, type, row) { return DataTableStringGet(data, 100); } },

            { "targets": 7, "render": function (data, type, row) { return DataTableDhmValueFromData(data); } },
            { "targets": 8, "render": function (data, type, row) { return DataTableDhmValueFromData(data); } },
            { "targets": 9, "render": function (data, type, row) { return DataTableDhmValueFromData(data); } },

            { "targets": 10, "render": function (data, type, row) { return data; } },
            { "targets": 11, "render": function (data, type, row) { return data; } },
            { "targets": 12, "render": function (data, type, row) { return data; } },           

            { "targets": 13, "render": function (data, type, row) { return data; } },

            {
                "targets": 14, "render": function (data, type, row) {

                    var PatternForm = 'Edit';
                    var Icon = 'fas fa-edit';
                    var Label = '';
                    var RowId = data;

                    var OnClick = 'ProjectEventFormLoad(' +
                        row['ProjectEventId'] + ', ' +
                        '\'' + row['ProjectName'] + '\', ' +
                        row['EventCategoryId'] + ', ' +
                        row['Year'] + ', ' +
                        row['Month'] + ', ' +
                        row['Day'] + ', ' +
                        '\'' + row['Comment'] + '\'' +
                        ')';

                    var RowId = '';
                    return DataTableFormBtnIdGet(Pattern, PatternForm, RowId, Label, OnClick, Icon);
                }
            },
            { "targets": 15, "render": function (data, type, row) { return DataTableGetButton('ProjectEventDelete', data, 'far fa-trash-alt', 'fe1200'); } },  

            { "targets": 16, "render": function (data, type, row) { return ProjectImageGet(data); } },
            { "targets": 17, "render": function (data, type, row) { return ProjectImageGet(data); } },
            { "targets": 18, "render": function (data, type, row) { return ProjectImageGet(data); } },

            { "targets": 19, "render": function (data, type, row) { return data; } }, 
        ],
        "iDisplayLength": 200,
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
        "bFilter": true,
        "autoWidth": true,
        "searching": true,
        "lengthChange": true,
        "showNEntries": true,
        "bInfo": true,
        "bPaginate": true,
        "ordering": false
    });
}

function ProjectImageGet(ImagePath) {
    return '<a href="' + ImagePath + '" target="_blank">' +
        '<img class="dt-img-cl" src="' + ImagePath + '" />' +
        '</a>';
}

function ProjectEventDailyGet() {

    var Pattern = 'ProjectEventDaily';
    var PatternTableId = Pattern + 'TableId';
    var PatternTableReportId = Pattern + 'TableReportId';

    HideReport(PatternTableReportId);
    $('#' + PatternTableId).DataTable().destroy();
    $('#' + PatternTableId).DataTable({
        "scrollY": '600px',
        "scrollCollapse": true,
        "scrollX": true,
        "initComplete": function (settings, json) {
            //ActionBtnSet(ActionBtnId, Icon, IsMargin);
            ShowReport(PatternTableReportId);
            //NotiConnectionIdUpdate('Demandes');

            //$.ajax({
            //    url: "/Project/ProjectEventDailyGet",
            //    method: "POST",
            //    contentType: "application/json; charset=utf-8",
            //    async: true,
            //    success: function (data) {
            //        //ElementInputSet('FixMessageId', '');
            //        //if (data.includes('Administrateur') || data.includes('TollAdmin')) {
            //        //    ElementInputSet('KeywordIdFix', '');
            //        //    ShowParent('KeywordIdFix');
            //        //    ShowParent('UserIdFix');
            //        //    ElementOnChangeSet('KeywordIdFix', 'ParamUsersGet()');
            //        //    //ParamUsersGet();
            //        //}
            //    }
            //});
        },
        "ajax": {
            "url": "/Project/ProjectEventDailyGet",
            "type": "GET",
            "datatype": "json",
            //"data": {
            //    ModuleId: ModuleIdFix,
            //    PluginId: PluginIdFix,
            //    UpdateStatusId: UpdateStatusIdFix,
            //    HandledBy: HandledBy
            //}
        },
        "columns": [
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

            {
                "targets": 0, "render": function (data, type, row) {
                    return ProjectEventDailyFormGet(

                        row['ProjectName'],
                        row['DhmValue'],
                        row['EventCategoryName'],
                        TextSpace(row['Comment']),

                        row['DhmCreation'],
                        row['DhmModification'],
                        row['DhmValidation'],

                        row['CreatedBy'],
                        row['ModifiedBy'],
                        row['ValidatedBy'],
                        row['ImagePath0'],
                        row['ImagePath1'],
                        row['ImagePath2']
                    );
                }
            }
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
        "searching": true,
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


function ProjectEventDailyFormGet(ProjectName, DhmValue, EventCategoryName, Comment,
    DhmCreation, DhmModification, DhmValidation,
    CreatedBy, ModifiedBy, ValidatedBy,
    ImagePath0, ImagePath1, ImagePath2) {

    return '<div class="friend-drawer friend-drawer--onhover" style="white-space: normal;" onclick="" >' +

        '<div class="text" style="margin-right: 40px;width: 100%;" >' +
        '<p style="text-align: left" >' + '<img id="FriendImageToId" class="profile-image" src="' + ImagePath0 + '" alt="">&nbsp;&nbsp; </p>' +
        '<p style="text-align: left;font-size: 14px;" >' + Comment + '</p>' +
        '<p style="text-align: left;font-size: 12px;" >' + DhmCreation + '</p>' +

        '</div>' +
        '</div>' +
        '<hr>'
}

function ProjectEventAdd() {

    //Set action button
    var ActionBtnId = ParamActionBtnIdAddGet();
    var Icon = ParamActionIconAddGet();

    //Inputs
    var DateStringStart = ElementDateStringFromDatePickerGet('DateStartId');
    var DateStringEnd = ElementDateStringFromDatePickerGet('DateEndId');
    var ProjectId = ElementDropDownListValueGet('ProjectId');
    var EventCategoryId = ElementDropDownListValueGet('EventCategoryId');
    var UpdateStatusId = ElementDropDownListValueGet('UpdateStatusId');
    var ResponsibleId = ElementDropDownListValueGet('ResponsibleId');
    var EventLocation = ElementValueGet('EventLocationId');
    var Comment = ElementValueGet('CommentId');

    ParamMessageReset();

    //Spin
    ActionBtnSpin(ActionBtnId);

    var files = $("#FileId").get(0).files;
    var data = new FormData();
    for (var i = 0; i < files.length; i++) {
        data.append("FileId", files[i]);
    };

    if (ProjectId != '0' && EventCategoryId != '0' && UpdateStatusId != '0' && ResponsibleId != '0') {
        data.append("DateStringStart", DateStringStart);
        data.append("DateStringEnd", DateStringEnd);
        data.append("ProjectId", ProjectId);
        data.append("EventCategoryId", EventCategoryId);
        data.append("UpdateStatusId", UpdateStatusId);
        data.append("ResponsibleId", ResponsibleId);
        data.append("EventLocation", EventLocation);
        data.append("Comment", Comment);

        $.ajax({
            url: "/Project/ProjectEventAdd",
            method: "POST",
            dataType: "json",
            contentType: false,
            processData: false,
            data: data,
            success: function (data) {
                ActionBtnIconSet(ActionBtnId, Icon);
                ElementInputSet('CommentId', '');
                if (data != 0) {
                    ProjectEventsDisplay(data);
                }
            },
            error: function (request, status, error) {
                alert('Error!');
            }
        });
    }
    else {
        ActionBtnIconSet(ActionBtnId, Icon);
        ParamMessageErrorDisplay('Certains champs sont obligatoire')
    }
    




    //Insert
    //var obj = {};
    //obj.DateString = DateString;
    //obj.ProjectId = ProjectId;
    //obj.EventCategoryId = EventCategoryId;
    //obj.Comment = Comment;
    
    //$.ajax({
    //    url: "/Project/ProjectEventAdd",
    //    method: "POST",
    //    data: JSON.stringify(obj),
    //    contentType: "application/json; charset=utf-8",
    //    dataType: "json",
    //    success: function (data) {
    //        ActionBtnIconSet(ActionBtnId, Icon);
    //        ProjectEventsDisplay();
    //        ElementInputSet('CommentId', '');
    //    }
    //});

    //Connection
    //NotiConnectionIdUpdate('Project-Administration-Ajouter un projet');
    //}
    //else {
    //    ParamMessageErrorDisplay('Certains champs sont obligatoire')
    //}
}

function ProjectEventDelete(ProjectEventId) {

    var ActionBtnId = 'ProjectEventDeleteBtnId' + ProjectEventId;
    var Icon = 'fas fa-minus-circle';
    var IsMargin = false;

    ActionSpin(ActionBtnId, IsMargin);

    var obj = {};
    obj.ProjectEventId = ProjectEventId;

    $.ajax({
        url: "/Project/ProjectEventDelete",
        method: "POST",
        data: JSON.stringify(obj),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            ActionBtnSet(ActionBtnId, Icon, IsMargin);
        }
    });
}


function ProjectStagesSecGet(DefaultValue, Index) {

    $('#StageId' + Index).empty();

    var ProjectId = GetElementValue('ProjectId' + Index);
    var BuildingId = GetElementValue('BuildingId' + Index);

    var item = document.getElementById('StageId' + Index);
    item.options.length = 0;
    var node = document.createElement("option");
    node.value = 0;
    var textnode = document.createTextNode("Select Level");
    node.appendChild(textnode);
    item.appendChild(node);
    $.get("/Project/ProjectStagesSecGet", { Input0: ProjectId, Input1: BuildingId }, function (data) {
        $.each(data, function (index, row) {
            var node = document.createElement("option");
            node.value = row.StageId;
            var textnode = document.createTextNode(row.StageName);
            node.appendChild(textnode);
            item.appendChild(node);
        });
        for (var j = 0, len = item.options.length; j < len; j++) {
            var opt = item.options[j];
            if (opt.value == DefaultValue) {
                item.options[j].selected = 'selected';
                break;
            }
        };
    });
    //ShowReport('PluginId' + Index + 'Parent');

    //if (Index == '') {
    //    CollabActionDisplay('0');
    //}
}

function ProjectProgressFormLoad(

    //Activity
    ProjectId,
    ActivityId,
    ActivityCode,
    ActivityName,

    //WBS
    PhaseId,
    SubPhaseId,
    BuildingId,
    BlockId,
    SubBlockId,
    StageId,
    LotId,
    DisciplineId,
    StepId,
    SubLotId,
    ZoneId,

    //Planned
    YearPS,
    MonthPS,
    DayPS,

    YearPE,
    MonthPE,
    DayPE,

    BudgetedManHours,
    BudgetedCost,
    QuantityPlanned,

    //DhmValue
    Year,
    Month,
    Day,

    YearRS,
    MonthRS,
    DayRS,

    YearRE,
    MonthRE,
    DayRE,

    ProgressLastUpdate,
    RemainingDuration,

    ProgressComment,

    ImagePath0,
    ImagePath1,
    ImagePath2) {

    var Pattern = 'ProjectProgressEdit';

    //Activity
    ElementDropDownListSet('ProjectId1', ProjectId);    
    ElementInputSet('CodeId1', ActivityCode);
    ElementInputSet('NameId1', ActivityName);

    //WBS
    ElementDropDownListSet('PhaseId1', PhaseId);
    ElementDropDownListSet('SubPhaseId1', SubPhaseId);
    ElementDropDownListSet('BuildingId1', BuildingId);
    ElementDropDownListSet('BlockId1', BlockId);
    ElementDropDownListSet('SubBlockId1', SubBlockId);
    ElementDropDownListSet('StageId1', StageId);
    ElementDropDownListSet('LotId1', LotId);
    ElementDropDownListSet('DisciplineId1', DisciplineId);
    ElementDropDownListSet('StepId1', StepId);
    ElementDropDownListSet('SubLotId1', SubLotId);
    ElementDropDownListSet('ZoneId1', ZoneId);

    //Planned
    ElementInputDateValueSet('DhmValueStartPlannedId1', YearPS, MonthPS, DayPS);
    ElementInputDateValueSet('DhmValueEndPlannedId1', YearPE, MonthPE, DayPE);
    ElementValueSet('BudgetHoursId1', BudgetedManHours);
    ElementValueSet('BudgetCostId1', BudgetedCost);
    ElementValueSet('BudgetQuantityId1', QuantityPlanned);

    //Progress
    ElementInputDateValueSet('DhmValueId1', Year, Month, Day);    
    ElementInputDateValueSet('DhmValueStartRealId1', YearRS, MonthRS, DayRS);
    ElementInputDateValueSet('DhmValueEndRealId1', YearRE, MonthRE, DayRE);
    ElementValueSet('ProgressLastUpdateId1', ProgressLastUpdate);
    ElementValueSet('RemainingDurationId1', RemainingDuration);
    ElementValueSet('ProgressCommentId1', ProgressComment);

    ElementImageSet('CarouselId10', ImagePath0);
    ElementImageSet('CarouselId11', ImagePath1);
    ElementImageSet('CarouselId12', ImagePath2);

    HideParent('DhmValueStartRealId1');
    HideParent('DhmValueEndRealId1');

    if (ProgressLastUpdate > 0) {
        ShowParent('DhmValueStartRealId1');
    }
    if (ProgressLastUpdate == 100) {
        ShowParent('DhmValueEndRealId1');
    }

    //action
    var Pattern = 'ProjectProgressEdit';
    var Label = 'Enregistrer';
    var Icon = 'far fa-save';
    var OnClick = Pattern + '(' + ActivityId + ')';
    ModalActionBtnGet(Pattern, Label, Icon, OnClick);

    //Style
    document.getElementById(Pattern + 'ModalDialogReportId').style.width = '80%';
    document.getElementById(Pattern + 'ModalDialogReportId').style.marginLeft = 'auto';
    document.getElementById(Pattern + 'ModalDialogReportId').style.marginTop = 'auto';
    document.getElementById(Pattern + 'ModalDialogReportId').style.maxWidth = '1900px';

    //Disable
    ElementDisable('DhmValueId1');
    ElementDisable('ProjectId1');    
    ElementDisable('PhaseId1');
    ElementDisable('SubPhaseId1');
    ElementDisable('BuildingId1');
    ElementDisable('BlockId1');
    ElementDisable('SubBlockId1');
    ElementDisable('StageId1');
    ElementDisable('LotId1');
    ElementDisable('DisciplineId1');
    ElementDisable('StepId1');
    ElementDisable('SubLotId1');
    ElementDisable('ZoneId1');

    ElementDisable('CodeId1');
    ElementDisable('DhmValueStartPlannedId1');
    ElementDisable('DhmValueEndPlannedId1');
    ElementDisable('BudgetHoursId1');
    ElementDisable('BudgetCostId1');
    ElementDisable('BudgetQuantityId1');

    //report
    ShowReport('ProjectProgressEditModalDialogReportId');

    
}





function ProjectProgressEdit(ActivityId) {

    var DateString = ElementDateStringFromDatePickerGet('DhmValueId1');

    var ProgressRowId = DateString + ActivityId;

    //Activity
    var ProjectId = ElementDropDownListValueGet('ProjectId1');
    var ActivityCode = ElementValueGet('CodeId1');
    var ActivityName = ElementValueGet('NameId1');

    //WBS
    var PhaseId = ElementDropDownListValueGet('PhaseId1');
    var SubPhaseId = ElementDropDownListValueGet('SubPhaseId1');
    var BuildingId = ElementDropDownListValueGet('BuildingId1');
    var BlockId = ElementDropDownListValueGet('BlockId1');
    var SubBlockId = ElementDropDownListValueGet('SubBlockId1');
    var StageId = ElementDropDownListValueGet('StageId1');
    var LotId = ElementDropDownListValueGet('LotId1');
    var DisciplineId = ElementDropDownListValueGet('DisciplineId1');
    var StepId = ElementDropDownListValueGet('StepId1');
    var SubLotId = ElementDropDownListValueGet('SubLotId1');
    var ZoneId = ElementDropDownListValueGet('ZoneId1');

    //Planned
    var DhmValueStartPlannedString = ElementDateStringFromDatePickerGet('DhmValueStartPlannedId1');
    var DhmValueEndPlannedString = ElementDateStringFromDatePickerGet('DhmValueEndPlannedId1');
    var BudgetedManHours = ElementValueGet('BudgetHoursId1');
    var BudgetedCost = ElementValueGet('BudgetCostId1');
    var QuantityPlanned = ElementValueGet('BudgetQuantityId1');

    //Progress    
    var DhmValueStartRealString = ElementDateStringFromDatePickerGet('DhmValueStartRealId1');
    var DhmValueEndRealString = ElementDateStringFromDatePickerGet('DhmValueEndRealId1');
    var ProgressLastUpdate = ElementValueGet('ProgressLastUpdateId1');
    var RemainingDuration = ElementValueGet('RemainingDurationId1');
    var ProgressComment = ElementValueGet('ProgressCommentId1');

    var files = $("#FileId1").get(0).files;
    var data = new FormData();
    for (var i = 0; i < files.length; i++) {
        data.append("FileId1", files[i]);
    };

    //Activity
    data.append("ActivityId", ActivityId);
    data.append("ProjectId", ProjectId);
    data.append("ActivityCode", ActivityCode);
    data.append("ActivityName", ActivityName);

    //WBS
    data.append("PhaseId", PhaseId);
    data.append("SubPhaseId", SubPhaseId);
    data.append("BuildingId", BuildingId);
    data.append("BlockId", BlockId);
    data.append("SubBlockId", SubBlockId);
    data.append("StageId", StageId);
    data.append("LotId", LotId);
    data.append("DisciplineId", DisciplineId);
    data.append("StepId", StepId);
    data.append("SubLotId", SubLotId);
    data.append("ZoneId", ZoneId);

    //Planned
    data.append("DhmValueStartPlannedString", DhmValueStartPlannedString);
    data.append("DhmValueEndPlannedString", DhmValueEndPlannedString);
    data.append("BudgetedManHours", BudgetedManHours);
    data.append("BudgetedCost", BudgetedCost);
    data.append("QuantityPlanned", QuantityPlanned);

    //Progress
    data.append("DateString", DateString);
    data.append("DhmValueStartRealString", DhmValueStartRealString);
    data.append("DhmValueEndRealString", DhmValueEndRealString);
    data.append("ProgressLastUpdate", ProgressLastUpdate);
    data.append("RemainingDuration", RemainingDuration);
    data.append("ProgressComment", ProgressComment);


    $.ajax({
        url: "/Project/ProjectProgressEdit",
        method: "POST",
        dataType: "json",
        contentType: false,
        processData: false,
        data: data,
        success: function (data) {
            
            //progressBar
            var ProgressValue = ((ProgressLastUpdate / 100) * 100).toFixed(2);
            var ProgressBarPlanIdElement = $('#ProgressBarId' + ProgressRowId);
            if (ProgressBarPlanIdElement) {
                ProgressBarPlanIdElement.attr('style', 'width: ' + ProgressValue + '%; background-color:#09c70d');
            }

            //ProgressPercent
            var ProgressPercent = ProgressValue.toString() + '%';
            var ProgressPercentPlanIdElement = $('#ProgressPercentId' + ProgressRowId);
            if (ProgressPercentPlanIdElement) {
                ProgressPercentPlanIdElement.text(ProgressPercent);
            }

            //ProgressLastUpdate
            var ProgressLastUpdateIdElement = $('#ProgressLastUpdateId' + ProgressRowId);
            if (ProgressLastUpdateIdElement) {
                ElementValueSet('ProgressLastUpdateId' + ProgressRowId, ProgressLastUpdate);
            }

            //ActivityName
            var ActivityNameIdElement = $('#ActivityNameId' + ProgressRowId);
            if (ActivityNameIdElement) {
                ActivityNameIdElement.text(DataTableLongTextGet(ActivityName, 40));
            }

            //RemainingDuration
            var RemainingDurationIdElement = $('#RemainingDurationId' + ProgressRowId);
            if (RemainingDurationIdElement) {
                ElementInputSet('RemainingDurationId' + ProgressRowId, RemainingDuration);
            }

            if (ProgressLastUpdate > 0) {
                //DhmValueStartRealString
                var DhmValueStartRealIdElement = $('#DhmValueStartRealId' + ProgressRowId);
                if (DhmValueStartRealIdElement) {
                    DhmValueStartRealIdElement.text(DataTableDateValueFromDateStringGet(DhmValueStartRealString));
                }
            }
            if (ProgressLastUpdate == 100) {
                //DhmValueEndRealString
                var DhmValueEndRealIdElement = $('#DhmValueEndRealId' + ProgressRowId);
                if (DhmValueEndRealIdElement) {
                    DhmValueEndRealIdElement.text(DataTableDateValueFromDateStringGet(DhmValueEndRealString));
                }
            }

            

            

            //ProgressPercent
            //var ProgressPercentPlanIdElement = $('#ProgressPercentId' + ActivityId);
            //if (ProgressPercentPlanIdElement) {
            //    alert('DhmValueEndRealString ' + DhmValueEndRealString);
            //    ProgressPercentPlanIdElement.text(ProgressValue.toString() + '%');
            //}

            
        }
    });
}


function ProjectRemainingDurationFromInputSave(Id, DateString, ActivityId) {

    //var ActionBtnId = 'ProjectProgressFromInputSaveBtnId' + Id;
    //var Icon = 'far fa-check-circle';
    //var IsMargin = false;

    var RemainingDuration = ElementValueGet('RemainingDurationId' + Id);

    var obj = {};
    obj.DateString = DateString;
    obj.ActivityId = ActivityId;
    obj.RemainingDuration = RemainingDuration;

    //ActionSpin(ActionBtnId, IsMargin);

    $.ajax({
        url: "/Project/ProjectRemainingDurationUpdate",
        method: "POST",
        data: JSON.stringify(obj),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            //ActionBtnSet(ActionBtnId, Icon, IsMargin);

            //progressBar
            var ProgressValue = ((ProgressLastUpdate / 100) * 100).toFixed(2);
            var ProgressBarPlanIdElement = $('#ProgressBarId' + Id);
            if (ProgressBarPlanIdElement) {
                ProgressBarPlanIdElement.attr('style', 'width: ' + ProgressValue + '%; background-color:#09c70d');
            }

            //ProgressPercent
            var ProgressPercent = ProgressValue.toString() + '%';
            var ProgressPercentPlanIdElement = $('#ProgressPercentId' + Id);
            if (ProgressPercentPlanIdElement) {
                ProgressPercentPlanIdElement.text(ProgressPercent);
            }
        }
    });
}

function ProjectProgressPresetGet() {
    ProjectAllReportsHide();
    ProjectAllParametersHide();
    ShowReport('ParamReportId');

    ShowParent('PerimeterId');
    ShowParent('TimeId');

    var PerimeterId = ElementDropDownListValueGet('PerimeterId');
    var TimeId = ElementDropDownListValueGet('TimeId');

    if (PerimeterId == '01') {//Projet
        if (TimeId == '01') {//Cumul
            ParamMessageReset();
            ProjectProgressProjectCumulOpen();
        }
        else {
            if (TimeId == '04') {//Week
                ParamMessageReset();
                ProjectProgressProjectWeekOpen();
            }
            else {
                ParamMessageErrorDisplay('Ce pré-réglabe n\'est pas authorisé');
            }
        }
    }
    else {
        if (PerimeterId == '02') {//Building
            if (TimeId == '01') {//Cumul
                ParamMessageReset();
                ProjectProgressBuildingCumulOpen();
            }
            else {
                if (TimeId == '04') {//Week
                    ParamMessageReset();
                    ProjectProgressBuildingWeekOpen();
                }
                else {
                    ParamMessageErrorDisplay('Ce pré-réglabe n\'est pas authorisé');
                }
            }
        }
        else {
            if (PerimeterId == '03') {//Lot
                if (TimeId == '01') {//Cumul
                    ParamMessageReset();
                    ProjectProgressLotCumulOpen();
                }
                else {
                    if (TimeId == '04') {//Week
                        ParamMessageReset();
                        ProjectProgressLotWeekOpen();
                    }
                    else {
                        ParamMessageErrorDisplay('Ce pré-réglabe n\'est pas authorisé');
                    }
                }
            }
            else {
                if (PerimeterId == '04') {//Phase
                    if (TimeId == '01') {//Cumul
                        ParamMessageReset();
                        ProjectProgressPhaseCumulOpen();
                    }
                    else {
                        ParamMessageErrorDisplay('Ce pré-réglabe n\'est pas authorisé');
                    }
                }
                else {
                    if (PerimeterId == '05') {//Company
                        if (TimeId == '01') {//Cumul
                            ParamMessageReset();
                            ProjectProgressCompanyCumulOpen();
                        }
                        else {
                            if (TimeId == '04') {//Week
                                ParamMessageReset();
                                ProjectProgressCompanyWeekOpen();
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

function ProjectProgressAnalyticOpen() {
    ProjectAllReportsHide();
    ProjectAllParametersHide();
    MenuBarNavHighlight(1, 1, 1);

    ParamTitleSet('Progress status');
    ShowReport('ParamReportId');

    //ShowParents
    ShowParent('PerimeterId');
    ShowParent('TimeId');

    //ProjectProgressInputsReset('');

    //OnChange
    ElementOnChangeSet('PerimeterId', 'ProjectProgressPresetGet()');
    ElementOnChangeSet('TimeId', 'ProjectProgressPresetGet()');

    //Action

}


function ProjectProgressAnalyticAllDisplay() {
    //Define
    var ActionBtnId = 'ParamActionBtnId0';
    var Icon = 'fas fa-eye btn-icon-m-cl gc-c1-cl';
    var TimeId = GetElementValue('TimeId');
    var IsMargin = new Boolean(true);

    //Display
    if (TimeId == '01') {//Cumul
        ProjectProgressAnalyticCumulDisplay(ActionBtnId, Icon, IsMargin);
    }
    else {
        if (TimeId == '02') {//Période
            ProjectProgressAnalyticPeriodeDisplay(ActionBtnId, Icon, IsMargin);
        }
        else {
            if (TimeId == '03') {//Day
                ProjectProgressAnalyticDayDisplay(ActionBtnId, Icon, IsMargin);
            }
            else {
                if (TimeId == '04') {//Hebdomadaire
                    ProjectProgressAnalyticWeekDisplay(ActionBtnId, Icon, IsMargin);
                }
                else {
                    if (TimeId == '05') {//Mensuel
                        ProjectProgressAnalyticMonthDisplay(ActionBtnId, Icon, IsMargin);
                    }
                    else {
                        if (TimeId == '06') {//Annuel
                            ProjectProgressAnalyticYearDisplay(ActionBtnId, Icon, IsMargin);
                        }
                        else {
                            ParamMessageErrorDisplay('Ce niveau n\'est pas authorisé');
                        }
                    }
                }
            }
        }
    }
}


function ProjectProgressBuildingCumulDisplay() {

    var ActionBtnId = 'ParamActionBtnId0';
    var Icon = 'fas fa-eye';
    var IsMargin = true;

    var DateStringEnd = GetDateStringFromDatePicker('DateEndId');
    var ProjectIds = ElementDropDownListValueMultipleGet('ProjectId');
    var BuildingIds = ElementDropDownListValueMultipleGet('BuildingId');

    var IsChart = ElementBooleanGet('IsChartId');

    ProjectAllReportsHide();
    ShowReport('ParamReportId');
    ParamMessageReset();

    ProjectProgressBuildingCumulGet(ActionBtnId, Icon, IsMargin, DateStringEnd, ProjectIds, BuildingIds, IsChart);
}


function ProjectProgressBuildingCumulGet(ActionBtnId, Icon, IsMargin, DateStringEnd, ProjectIds, BuildingIds, IsChart) {

    ActionSpin(ActionBtnId, IsMargin);

    var PatternTable = 'ProjectProgressBuildingCumul';
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
        //                var ZoneId = '07';
        //                var TimeId = '01';
        //                var RegionId = '0';
        //                var LSId = '0';
        //                var StationNumber = '0';
        //                var LaneName = '0';
        //                var FileType = 'PDF';
        //                QualifObsTickIdDTableExport(ZoneId, TimeId, DateStringStart, DateStringEnd, RegionId, LSId, StationNumber, LaneName, FileType);
        //            }
        //        },
        //        {
        //            text: 'Excel',
        //            action: function (e, dt, node, config) {
        //                var ZoneId = '07';
        //                var TimeId = '01';
        //                var RegionId = '0';
        //                var LSId = '0';
        //                var StationNumber = '0';
        //                var LaneName = '0';
        //                var FileType = 'Excel';
        //                QualifObsTickIdDTableExport(ZoneId, TimeId, DateStringStart, DateStringEnd, RegionId, LSId, StationNumber, LaneName, FileType);
        //            }
        //        }
        //    ]
        //},
        "initComplete": function (settings, json) {
            ActionBtnSet(ActionBtnId, Icon, IsMargin);
            ShowReport(PatternTableReportId);

            if (IsChart == true) {

                var PatternChartCommon = 'ProjectProgressBuildingCumulCosts';
                var Title = 'Cost';
                var PatternChart = PatternChartCommon + 'Bar';
                var labels = GetColumnArray(PatternTableId, 2);
                var data1 = GetColumnArray(PatternTableId, 4);
                var data2 = GetColumnArray(PatternTableId, 5);
                var label1 = 'Planned Costs';
                var label2 = 'Earned Costs';
                document.getElementById(PatternChart + 'ChartCardId').style.border = 'transparent';
                ChartJsBarTwoDisplay(Title, PatternChart, labels, data1, label1, data2, label2, true);
                
                var PatternChartCommon = 'ProjectProgressBuildingCumulManHours';
                var Title = 'ManHours';
                var PatternChart = PatternChartCommon + 'Bar';
                var labels = GetColumnArray(PatternTableId, 2);
                var data1 = GetColumnArray(PatternTableId, 10);
                var data2 = GetColumnArray(PatternTableId, 11);
                var label1 = 'Planned ManHours';
                var label2 = 'Earned ManHours';
                document.getElementById(PatternChart + 'ChartCardId').style.border = 'transparent';
                ChartJsBarTwoDisplay(Title, PatternChart, labels, data1, label1, data2, label2, true);

                ShowGridReport('Grid_0000');                
            }
        },
        "ajax": {
            "url": "/Project/ProjectProgressBuildingCumulGet",
            "type": "GET",
            "datatype": "json",
            "data": {                
                ProjectIds: ProjectIds,
                BuildingIds: BuildingIds,
                DateStringEnd: DateStringEnd
            }
        },
        "columns": [
            { "data": "" },//0
            { "data": "ProjectName" },//1
            { "data": "BuildingName" },//2

            { "data": "BudgetedCosts" },//3
            { "data": "PlannedCosts" },//4
            { "data": "EarnedCosts" },//5
            { "data": "" },//6
            { "data": "" },//7
            { "data": "" },//8

            { "data": "BudgetedManHours" },//9
            { "data": "PlannedManHours" },//10
            { "data": "EarnedManHours" },//11
            { "data": "" },//12
            { "data": "" },//13
            { "data": "" },//14
        ],
        "columnDefs": [
            { "width": "3%", "className": "text-left", "targets": 0 },
            { "width": "3%", "className": "text-left", "targets": 1 },
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
            { "width": "3%", "className": "text-right", "targets": 12 },
            { "width": "3%", "className": "text-right", "targets": 13 },
            { "width": "3%", "className": "text-right", "targets": 14 },

            { "targets": 0, "render": function (data, type, row) { return DataTableDateValueFromRowGet(row); } }, 
            { "targets": 1, "render": function (data, type, row) { return data; } },
            { "targets": 2, "render": function (data, type, row) { return data; } },

            { "targets": 3, "render": function (data, type, row) { return DataTableFormatDoubleGet(data); } },
            { "targets": 4, "render": function (data, type, row) { return DataTableFormatDoubleGet(data); } },
            { "targets": 5, "render": function (data, type, row) { return DataTableFormatDoubleGet(data); } },
            { "targets": 6, "render": function (data, type, row) { return ProjectProgressPlannedGet(row['PlannedCosts'], row['BudgetedCosts']); } },
            { "targets": 7, "render": function (data, type, row) { return ProjectProgressEarnedGet(row['EarnedCosts'], row['BudgetedCosts'], row['PlannedCosts']); } },
            { "targets": 8, "render": function (data, type, row) { return ProjectProgressSpiGet(row['EarnedCosts'], row['PlannedCosts']); } },

            { "targets": 9, "render": function (data, type, row) { return DataTableFormatDoubleGet(data); } },
            { "targets": 10, "render": function (data, type, row) { return DataTableFormatDoubleGet(data); } },
            { "targets": 11, "render": function (data, type, row) { return DataTableFormatDoubleGet(data); } },
            { "targets": 12, "render": function (data, type, row) { return ProjectProgressPlannedGet(row['PlannedManHours'], row['BudgetedManHours']); } },
            { "targets": 13, "render": function (data, type, row) { return ProjectProgressEarnedGet(row['EarnedManHours'], row['BudgetedManHours'], row['PlannedManHours']); } },
            { "targets": 14, "render": function (data, type, row) { return ProjectProgressSpiGet(row['EarnedManHours'], row['PlannedManHours']); } },        
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

            //DataTableTotalIntGet(api, intVal, 3);
            //DataTableTotalIntGet(api, intVal, 4);

            //DataTableTotalIntGet(api, intVal, 6);
            //DataTableTotalIntGet(api, intVal, 7);

            //DataTableTotalPercentageGet(api, intVal, 4, 3, 5);
            //DataTableTotalPercentageGet(api, intVal, 7, 6, 8);
        }
    });
}


function ProjectProgressBuildingWeekOpen() {
    ProjectAllReportsHide();
    ProjectAllParametersHide();

    //ParamTitleSet('Progress - Analyses');
    ShowReport('ParamReportId');

    //ShowParents
    ShowParent('DateStartId');
    ShowParent('DateEndId');
    ShowParent('ProjectId');
    ShowParent('BuildingId');
    ShowParent('IsChartId');
    ShowParent('PerimeterId');
    ShowParent('TimeId');

    DateValueDefaultSet('DateStartId', 28);
    DateValueDefaultSet('DateEndId', 0);

    //OnClick
    //ElementOnClickSet('ProjectId', "ProjectOnChangeGet('0', '')");

    //Action
    ParamActionBtnGet(0, 'Display', 'fas fa-eye', "ProjectProgressBuildingWeekDisplay()");
    ParamActionBtnGet(2, 'Reset', 'fas fa-power-off', "ProjectProgressInputsMultipleReset('')");
}


function ProjectProgressBuildingWeekDisplay() {

    var ActionBtnId = 'ParamActionBtnId0';
    var Icon = 'fas fa-eye';
    var IsMargin = true;

    var DateStringStart = GetDateStringFromDatePicker('DateStartId');
    var DateStringEnd = GetDateStringFromDatePicker('DateEndId');
    var ProjectIds = ElementDropDownListValueMultipleGet('ProjectId');
    var BuildingIds = ElementDropDownListValueMultipleGet('BuildingId');
    var IsChart = ElementBooleanGet('IsChartId');

    ProjectAllReportsHide();
    ShowReport('ParamReportId');
    ParamMessageReset();


    ProjectProgressBuildingWeekGet(ActionBtnId, Icon, IsMargin, DateStringStart, DateStringEnd, ProjectIds, BuildingIds, IsChart);
}

function ProjectProgressBuildingWeekGet(ActionBtnId, Icon, IsMargin, DateStringStart, DateStringEnd, ProjectIds, BuildingIds, IsChart) {

    ActionSpin(ActionBtnId, IsMargin);

    var PatternTable = 'ProjectProgressBuildingWeek';
    var PatternTableId = PatternTable + 'TableId'
    var PatternTableReportId = PatternTable + 'TableReportId';

    var data00 = 0;
    var data01 = 0;
    var data02 = 0;

    var data10 = 0;
    var data11 = 0;
    var data12 = 0;

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
        //                var ZoneId = '07';
        //                var TimeId = '01';
        //                var RegionId = '0';
        //                var LSId = '0';
        //                var StationNumber = '0';
        //                var LaneName = '0';
        //                var FileType = 'PDF';
        //                QualifObsTickIdDTableExport(ZoneId, TimeId, DateStringStart, DateStringEnd, RegionId, LSId, StationNumber, LaneName, FileType);
        //            }
        //        },
        //        {
        //            text: 'Excel',
        //            action: function (e, dt, node, config) {
        //                var ZoneId = '07';
        //                var TimeId = '01';
        //                var RegionId = '0';
        //                var LSId = '0';
        //                var StationNumber = '0';
        //                var LaneName = '0';
        //                var FileType = 'Excel';
        //                QualifObsTickIdDTableExport(ZoneId, TimeId, DateStringStart, DateStringEnd, RegionId, LSId, StationNumber, LaneName, FileType);
        //            }
        //        }
        //    ]
        //},
        "initComplete": function (settings, json) {
            ActionBtnSet(ActionBtnId, Icon, IsMargin);
            ShowReport(PatternTableReportId);

            if (IsChart == true) {

                //Unities
                var PatternChartCommon = 'ProjectProgressBuildingWeekCost';
                var PatternChart = PatternChartCommon + 'Line';
                var labels = GetColumnArray(PatternTableId, 15);
                var data1 = GetColumnArray(PatternTableId, 4);
                var data2 = GetColumnArray(PatternTableId, 5);
                var label1 = 'Planned Costs';
                var label2 = 'Earned Costs';
                var IsFill = false;
                var Title = 'Costs';
                ChartJsLineTwoDisplay(Title, PatternChart, labels, data1, label1, data2, label2, IsFill);

                var PatternChartCommon = 'ProjectProgressBuildingWeekManHours';
                var PatternChart = PatternChartCommon + 'Line';
                var labels = GetColumnArray(PatternTableId, 15);
                var data1 = GetColumnArray(PatternTableId, 10);
                var data2 = GetColumnArray(PatternTableId, 11);
                var label1 = 'Planned Man Hours';
                var label2 = 'Earned Man Hours';
                var IsFill = false;
                var Title = 'Man Hours';
                ChartJsLineTwoDisplay(Title, PatternChart, labels, data1, label1, data2, label2, IsFill);

                //Ratio
                var PatternChartCommon = 'ProjectProgressBuildingWeekCostRatio';
                var PatternChart = PatternChartCommon + 'Line';
                var labels = GetColumnArray(PatternTableId, 15);
                var data1 = GetColumnArray(PatternTableId, 6);
                var data2 = GetColumnArray(PatternTableId, 7);
                var label1 = 'Planned Costs (%)';
                var label2 = 'Earned Costs (%)';
                var IsFill = false;
                var Title = 'Costs (%)';
                ChartJsLineTwoDisplay(Title, PatternChart, labels, data1, label1, data2, label2, IsFill);

                var PatternChartCommon = 'ProjectProgressBuildingWeekManHoursRatio';
                var PatternChart = PatternChartCommon + 'Line';
                var labels = GetColumnArray(PatternTableId, 15);
                var data1 = GetColumnArray(PatternTableId, 12);
                var data2 = GetColumnArray(PatternTableId, 13);
                var label1 = 'Planned Man Hours (%)';
                var label2 = 'Earned Man Hours (%)';
                var IsFill = false;
                var Title = 'Man Hours (%)';
                ChartJsLineTwoDisplay(Title, PatternChart, labels, data1, label1, data2, label2, IsFill);

                //Spi
                var PatternChartCommon = 'ProjectProgressBuildingWeekCostSpi';
                var PatternChart = PatternChartCommon + 'Line';
                var labels = GetColumnArray(PatternTableId, 15);
                var data1 = GetColumnArray(PatternTableId, 16);
                var data2 = GetColumnArray(PatternTableId, 8);
                var label1 = 'Refrence';
                var label2 = 'Costs (SPI)';
                var IsFill = false;
                var Title = 'Costs (SPI)';
                ProjectChartJsSpiDisplay(Title, PatternChart, labels, data1, label1, data2, label2, IsFill);

                var PatternChartCommon = 'ProjectProgressBuildingWeekManHoursSpi';
                var PatternChart = PatternChartCommon + 'Line';
                var labels = GetColumnArray(PatternTableId, 15);
                var data1 = GetColumnArray(PatternTableId, 16);
                var data2 = GetColumnArray(PatternTableId, 14);
                var label1 = 'Refrence';
                var label2 = 'Man Hours (SPI)';
                var IsFill = false;
                var Title = 'Man Hours (SPI)';
                ProjectChartJsSpiDisplay(Title, PatternChart, labels, data1, label1, data2, label2, IsFill);

                ShowGridReport('Grid_0009');
            }
        },
        "ajax": {
            "url": "/Project/ProjectProgressBuildingWeekGet",
            "type": "GET",
            "datatype": "json",
            "data": {
                ProjectIds: ProjectIds,
                BuildingIds: BuildingIds,
                DateStringStart: DateStringStart,
                DateStringEnd: DateStringEnd
            }
        },
        "columns": [
            { "data": "DhmValue" },//0
            { "data": "ProjectName" },//1
            { "data": "BuildingName" },//2

            { "data": "BudgetedCosts" },//3
            { "data": "PlannedCosts" },//4
            { "data": "EarnedCosts" },//5
            {
                "mData": function vehicle(data, type, dataToSet) {
                    if (data.BudgetedCosts != 0) {
                        return data.PlannedCosts / data.BudgetedCosts;
                    }
                    else {
                        return 0;
                    };
                }
            },//6
            {
                "mData": function vehicle(data, type, dataToSet) {
                    if (data.BudgetedCosts != 0) {
                        return data.EarnedCosts / data.BudgetedCosts;
                    }
                    else {
                        return 0;
                    };
                }
            },//7
            {
                "mData": function vehicle(data, type, dataToSet) {
                    if (data.PlannedCosts != 0) {
                        return data.EarnedCosts / data.PlannedCosts;
                    }
                    else {
                        return 0;
                    };
                }
            },//8

            { "data": "BudgetedManHours" },//9
            { "data": "PlannedManHours" },//10
            { "data": "EarnedManHours" },//11
            {
                "mData": function vehicle(data, type, dataToSet) {
                    if (data.BudgetedManHours != 0) {
                        return data.PlannedManHours / data.BudgetedManHours;
                    }
                    else {
                        return 0;
                    };
                }
            },//12
            {
                "mData": function vehicle(data, type, dataToSet) {
                    if (data.BudgetedManHours != 0) {
                        return data.EarnedManHours / data.BudgetedManHours;
                    }
                    else {
                        return 0;
                    };
                }
            },//13
            {
                "mData": function vehicle(data, type, dataToSet) {
                    if (data.PlannedManHours != 0) {
                        return (data.EarnedManHours / data.PlannedManHours).toFixed(2);
                    }
                    else {
                        return 0;
                    };
                }
            },//14

            {
                "mData": function vehicle(data, type, dataToSet) {
                    return GetDigits(data.Day, 2) + '/' + GetDigits(data.Month, 2);
                }
            },//15 Label
            {
                "mData": function vehicle(data, type, dataToSet) {
                    return 1;
                }
            },//16 Ref
        ],
        "columnDefs": [
            { "width": "3%", "className": "text-left", "targets": 0 },
            { "width": "3%", "className": "text-left none", "targets": 1 },
            { "width": "3%", "className": "text-left none", "targets": 2 },

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

            { "width": "3%", "className": "text-right none", "targets": 15 },
            { "width": "3%", "className": "text-right none", "targets": 16 },

            { "targets": 0, "render": function (data, type, row) { return DataTableDateValueFromRowGet(row); } },
            { "targets": 1, "render": function (data, type, row) { return data; } },
            { "targets": 2, "render": function (data, type, row) { return data; } },

            { "targets": 3, "render": function (data, type, row) { return DataTableFormatDoubleGet(data); } },
            { "targets": 4, "render": function (data, type, row) { return DataTableFormatDoubleGet(data); } },
            { "targets": 5, "render": function (data, type, row) { return DataTableFormatDoubleGet(data); } },
            { "targets": 6, "render": function (data, type, row) { return ProjectProgressPlannedGet(row['PlannedCosts'], row['BudgetedCosts']); } },
            { "targets": 7, "render": function (data, type, row) { return ProjectProgressEarnedGet(row['EarnedCosts'], row['BudgetedCosts'], row['PlannedCosts']); } },
            { "targets": 8, "render": function (data, type, row) { return ProjectProgressSpiGet(row['EarnedCosts'], row['PlannedCosts']); } },

            { "targets": 9, "render": function (data, type, row) { return DataTableFormatDoubleGet(data); } },
            { "targets": 10, "render": function (data, type, row) { return DataTableFormatDoubleGet(data); } },
            { "targets": 11, "render": function (data, type, row) { return DataTableFormatDoubleGet(data); } },
            { "targets": 12, "render": function (data, type, row) { return ProjectProgressPlannedGet(row['PlannedManHours'], row['BudgetedManHours']); } },
            { "targets": 13, "render": function (data, type, row) { return ProjectProgressEarnedGet(row['EarnedManHours'], row['BudgetedManHours'], row['PlannedManHours']); } },
            { "targets": 14, "render": function (data, type, row) { return ProjectProgressSpiGet(row['EarnedManHours'], row['PlannedManHours']); } },

            { "targets": 15, "render": function (data, type, row) { return data; } },
            { "targets": 16, "render": function (data, type, row) { return data; } },
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

            //DataTableTotalIntGet(api, intVal, 2);
            //DataTableTotalIntGet(api, intVal, 3);
            //DataTableTotalIntGet(api, intVal, 4);

            //DataTableTotalIntGet(api, intVal, 8);
            //DataTableTotalIntGet(api, intVal, 9);
            //DataTableTotalIntGet(api, intVal, 10);

            //DataTableTotalPercentageGet(api, intVal, 3, 2, 5);
            //DataTableTotalPercentageGet(api, intVal, 4, 2, 6);
            //DataTableTotalPercentageGet(api, intVal, 4, 3, 7);

            //DataTableTotalPercentageGet(api, intVal, 9, 8, 11);
            //DataTableTotalPercentageGet(api, intVal, 10, 8, 12);
            //DataTableTotalPercentageGet(api, intVal, 10, 9, 13);

            //data00 = DataTableColumnTotalGet(api, intVal, 2);
            //data01 = DataTableColumnTotalGet(api, intVal, 3);
            //data02 = DataTableColumnTotalGet(api, intVal, 4);

            //data10 = DataTableColumnTotalGet(api, intVal, 8);
            //data11 = DataTableColumnTotalGet(api, intVal, 9);
            //data12 = DataTableColumnTotalGet(api, intVal, 10);
        }
    });
}

function ProjectProgressProjectCumulDisplay() {

    var ActionBtnId = 'ParamActionBtnId0';
    var Icon = 'fas fa-eye';
    var IsMargin = true;

    var DateStringEnd = GetDateStringFromDatePicker('DateEndId');
    var ProjectIds = ElementDropDownListValueMultipleGet('ProjectId');
    var IsChart = ElementBooleanGet('IsChartId');

    ProjectAllReportsHide();
    ShowReport('ParamReportId');
    ParamMessageReset();

    
    ProjectProgressProjectCumulGet(ActionBtnId, Icon, IsMargin, DateStringEnd, ProjectIds, IsChart);
}


function ProjectProgressProjectWeekOpen() {
    ProjectAllReportsHide();
    ProjectAllParametersHide();

    //ParamTitleSet('Progress - Analyses');
    ShowReport('ParamReportId');

    //ShowParents
    ShowParent('DateStartId');
    ShowParent('DateEndId');
    ShowParent('ProjectId');
    ShowParent('IsChartId');
    ShowParent('PerimeterId');
    ShowParent('TimeId');

    DateValueDefaultSet('DateStartId', 28);
    DateValueDefaultSet('DateEndId', 0);

    //OnClick
    ElementOnClickSet('ProjectId', "ProjectOnChangeGet('0', '')");

    //Action
    ParamActionBtnGet(0, 'Display', 'fas fa-eye', "ProjectProgressProjectWeekDisplay()");
    ParamActionBtnGet(2, 'Reset', 'fas fa-power-off', "ProjectProgressInputsMultipleReset('')");
}

function ProjectProgressProjectCumulGet(ActionBtnId, Icon, IsMargin, DateStringEnd, ProjectIds, IsChart) {

    ActionSpin(ActionBtnId, IsMargin);

    var PatternTable = 'ProjectProgressProjectCumul';
    var PatternTableId = PatternTable + 'TableId'
    var PatternTableReportId = PatternTable + 'TableReportId';

    var data00 = 0;
    var data01 = 0;
    var data02 = 0;

    var data10 = 0;
    var data11 = 0;
    var data12 = 0;

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
        //                var ZoneId = '07';
        //                var TimeId = '01';
        //                var RegionId = '0';
        //                var LSId = '0';
        //                var StationNumber = '0';
        //                var LaneName = '0';
        //                var FileType = 'PDF';
        //                QualifObsTickIdDTableExport(ZoneId, TimeId, DateStringStart, DateStringEnd, RegionId, LSId, StationNumber, LaneName, FileType);
        //            }
        //        },
        //        {
        //            text: 'Excel',
        //            action: function (e, dt, node, config) {
        //                var ZoneId = '07';
        //                var TimeId = '01';
        //                var RegionId = '0';
        //                var LSId = '0';
        //                var StationNumber = '0';
        //                var LaneName = '0';
        //                var FileType = 'Excel';
        //                QualifObsTickIdDTableExport(ZoneId, TimeId, DateStringStart, DateStringEnd, RegionId, LSId, StationNumber, LaneName, FileType);
        //            }
        //        }
        //    ]
        //},
        "initComplete": function (settings, json) {
            ActionBtnSet(ActionBtnId, Icon, IsMargin);
            ShowReport(PatternTableReportId);

            if (IsChart == true) {

                var PatternChartCommon = 'ProjectProgressProjectCumulCosts';
                var PatternChart = PatternChartCommon + 'Gauge';
                var Title = 'Cost';
                var Total = data00;
                var Threshold = data01;
                var CurrentValue = data02;
               
                ChartJsGaugeTwoDisplay(Title, PatternChart, Total, CurrentValue, Threshold);                               

                var PatternChartCommon = 'ProjectProgressProjectCumulManHours';
                var PatternChart = PatternChartCommon + 'Gauge';
                var Title = 'ManHours';
                var Total = data10;
                var Threshold = data11;
                var CurrentValue = data12;
                ChartJsGaugeTwoDisplay(Title, PatternChart, Total, CurrentValue, Threshold);

                var PatternChartCommon = 'ProjectProgressProjectCumulCostsSpi';
                var PatternChart = PatternChartCommon + 'Gauge';
                var Title = 'Cost SPI';
                var Total = 1;
                var Threshold = 90 / 100;
                var CurrentValue = data02 / data01;
                ChartJsGaugeTwoDisplay(Title, PatternChart, Total, CurrentValue, Threshold);

                var PatternChartCommon = 'ProjectProgressProjectCumulManHoursSpi';
                var PatternChart = PatternChartCommon + 'Gauge';
                var Title = 'ManHours SPI';
                var Total = 1;
                var Threshold = 90 / 100;
                var CurrentValue = data12 / data11;
                ChartJsGaugeTwoDisplay(Title, PatternChart, Total, CurrentValue, Threshold);

                var PatternChartCommon = 'ProjectProgressProjectCumulCostsPercent';
                var PatternChart = PatternChartCommon + 'Gauge';
                var Title = 'Cost';
                var Total = 1;
                var Threshold = 0;
                if (data00 != 0) {
                    Threshold = data01 / data00;
                }
                var CurrentValue = data02 / data00;

                ChartJsGaugeTwoDisplay(Title, PatternChart, Total, CurrentValue, Threshold);

                var PatternChartCommon = 'ProjectProgressProjectCumulManHoursPercent';
                var PatternChart = PatternChartCommon + 'Gauge';
                var Title = 'ManHours';
                var Total = 1;
                var Threshold = 0;
                if (data10 != 0) {
                    Threshold = data11 / data10;
                }
                var CurrentValue = data12 / data10;
                ChartJsGaugeTwoDisplay(Title, PatternChart, Total, CurrentValue, Threshold);

                ShowGridReport('Grid_0002');
                ShowNavReport('Nav_0000');
            }
        },
        "ajax": {
            "url": "/Project/ProjectProgressProjectCumulGet",
            "type": "GET",
            "datatype": "json",
            "data": {
                ProjectIds: ProjectIds,
                DateStringEnd: DateStringEnd
            }
        },
        "columns": [
            { "data": "" },//0
            { "data": "ProjectName" },//1

            { "data": "BudgetedCosts" },//2
            { "data": "PlannedCosts" },//3
            { "data": "EarnedCosts" },//4
            { "data": "" },//5 
            { "data": "" },//6
            { "data": "" },//7

            { "data": "BudgetedManHours" },//8
            { "data": "PlannedManHours" },//9
            { "data": "EarnedManHours" },//10
            { "data": "" },//11
            { "data": "" },//12
            { "data": "" },//13
        ],
        "columnDefs": [
            { "width": "3%", "className": "text-left", "targets": 0 },
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

            { "targets": 0, "render": function (data, type, row) { return DataTableDateValueFromRowGet(row); } },
            { "targets": 1, "render": function (data, type, row) { return data; } },

            { "targets": 2, "render": function (data, type, row) { return DataTableFormatDoubleGet(data); } },
            { "targets": 3, "render": function (data, type, row) { return DataTableFormatDoubleGet(data); } },
            { "targets": 4, "render": function (data, type, row) { return DataTableFormatDoubleGet(data); } },
            { "targets": 5, "render": function (data, type, row) { return ProjectProgressPlannedGet(row['PlannedCosts'], row['BudgetedCosts']); } },            
            { "targets": 6, "render": function (data, type, row) { return ProjectProgressEarnedGet(row['EarnedCosts'], row['BudgetedCosts'], row['PlannedCosts']); } },
            { "targets": 7, "render": function (data, type, row) { return ProjectProgressSpiGet(row['EarnedCosts'], row['PlannedCosts']); } },

            { "targets": 8, "render": function (data, type, row) { return DataTableFormatDoubleGet(data); } },
            { "targets": 9, "render": function (data, type, row) { return DataTableFormatDoubleGet(data); } },
            { "targets": 10, "render": function (data, type, row) { return DataTableFormatDoubleGet(data); } },
            { "targets": 11, "render": function (data, type, row) { return ProjectProgressPlannedGet(row['PlannedManHours'], row['BudgetedManHours']); } },            
            { "targets": 12, "render": function (data, type, row) { return ProjectProgressEarnedGet(row['EarnedManHours'], row['BudgetedManHours'], row['PlannedManHours']); } },
            { "targets": 13, "render": function (data, type, row) { return ProjectProgressSpiGet(row['EarnedManHours'], row['PlannedManHours']); } },
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

            DataTableTotalIntGet(api, intVal, 8);
            DataTableTotalIntGet(api, intVal, 9);
            DataTableTotalIntGet(api, intVal, 10);

            DataTableTotalPercentageGet(api, intVal, 3, 2, 5);
            DataTableTotalPercentageGet(api, intVal, 4, 2, 6);
            DataTableTotalPercentageGet(api, intVal, 4, 3, 7);

            DataTableTotalPercentageGet(api, intVal, 9, 8, 11);
            DataTableTotalPercentageGet(api, intVal, 10, 8, 12);
            DataTableTotalPercentageGet(api, intVal, 10, 9, 13);

            data00 = DataTableColumnTotalGet(api, intVal, 2);
            data01 = DataTableColumnTotalGet(api, intVal, 3);
            data02 = DataTableColumnTotalGet(api, intVal, 4);

            data10 = DataTableColumnTotalGet(api, intVal, 8);
            data11 = DataTableColumnTotalGet(api, intVal, 9);
            data12 = DataTableColumnTotalGet(api, intVal, 10);
        }
    });
}

function ProjectProgressSpiGet(Value, Total) {
    var Threshold0 = 70;
    var Threshold1 = 85;
    var Decimal = 2;

    if (Total.toFixed(Decimal) != 0) {
        var evo = (Value / Total) * 100;
        var EvoDecimal = evo.toFixed(Decimal);

        if (Value == 0) {
            return '0 %';
        }
        else {
            if (EvoDecimal <= Threshold0) {
                return '<span  class="badge-alert badge-danger" style="background-color: #ff6000;">' + numFormat(EvoDecimal) + ' %</span>';
            }
            else {
                if (EvoDecimal >= Threshold0 && EvoDecimal <= Threshold1) {
                    return '<span  class="badge-alert badge-warning" style="background-color: #DADE05;" >' + numFormat(EvoDecimal) + ' %</span>';
                }
                else {
                    return '<span  class="badge-alert badge-secondary" style="background-color: #28a745;" >' + numFormat(EvoDecimal) + ' %</span>';
                }
            }
        }
    }
    else {
        return '0 %';
    }
}

function ProjectProgressEarnedGet(Earned, Budgeted, Planned) {

    var Threshold0 = 7;
    var Threshold1 = 15;
    var Threshold2 = 30;
    var Decimal = 2;

    if (Budgeted.toFixed(Decimal) != 0) {
        var evoEarned = (Earned / Budgeted) * 100;
        var EvoDecimalEarned = evoEarned.toFixed(Decimal);

        var evoPlanned = (Planned / Budgeted) * 100;
        var EvoDecimalPlanned = evoPlanned.toFixed(Decimal);

        var Diff = EvoDecimalEarned - EvoDecimalPlanned;

        if (Earned == 0) {
            return '0 %';
        }
        else {
            if (Diff <= Threshold0) {
                return '<span  class="badge-alert badge-danger" style="background-color: #28a745;">' + numFormat(evoEarned) + ' %</span>';
            }
            else {
                if (Diff >= Threshold0 && Diff <= Threshold1) {
                    return '<span  class="badge-alert badge-warning" style="background-color: #DADE05;" >' + numFormat(evoEarned) + ' %</span>';
                }
                else {
                    if (Diff >= Threshold1 && Diff <= Threshold2) {
                        return '<span  class="badge-alert badge-warning" style="background-color: #ff6000;" >' + numFormat(evoEarned) + ' %</span>';
                    }
                    else {
                        return '<span  class="badge-alert badge-secondary" style="background-color: #fe1200;" >' + numFormat(evoEarned) + ' %</span>';
                    }
                }
            }
        }
    }
    else {
        return '0 %';
    }
}

function ProjectProgressPlannedGet(Value, Total) {
    var Decimal = 2;

    if (Total.toFixed(Decimal) != 0) {
        var evo = (Value / Total) * 100;
        var EvoDecimal = evo.toFixed(Decimal);

        if (Value == 0) {
            return '0 %';
        }
        else {
            return '<span  class="badge-alert badge-danger" style="background-color: #F2F5FA; color: #000000">' + numFormat(EvoDecimal) + ' %</span>';           
        }
    }
    else {
        return '0 %';
    }
}

function ProjectProgressProjectWeekDisplay() {

    var ActionBtnId = 'ParamActionBtnId0';
    var Icon = 'fas fa-eye';
    var IsMargin = true;

    var DateStringStart = GetDateStringFromDatePicker('DateStartId');
    var DateStringEnd = GetDateStringFromDatePicker('DateEndId');
    var ProjectIds = ElementDropDownListValueMultipleGet('ProjectId');
    var IsChart = ElementBooleanGet('IsChartId');

    ProjectAllReportsHide();
    ShowReport('ParamReportId');
    ParamMessageReset();


    ProjectProgressProjectWeekGet(ActionBtnId, Icon, IsMargin, DateStringStart, DateStringEnd, ProjectIds, IsChart);
}


function ProjectProgressProjectWeekGet(ActionBtnId, Icon, IsMargin, DateStringStart, DateStringEnd, ProjectIds, IsChart) {

    ActionSpin(ActionBtnId, IsMargin);

    var PatternTable = 'ProjectProgressProjectWeek';
    var PatternTableId = PatternTable + 'TableId'
    var PatternTableReportId = PatternTable + 'TableReportId';

    var data00 = 0;
    var data01 = 0;
    var data02 = 0;

    var data10 = 0;
    var data11 = 0;
    var data12 = 0;

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
        //                var ZoneId = '07';
        //                var TimeId = '01';
        //                var RegionId = '0';
        //                var LSId = '0';
        //                var StationNumber = '0';
        //                var LaneName = '0';
        //                var FileType = 'PDF';
        //                QualifObsTickIdDTableExport(ZoneId, TimeId, DateStringStart, DateStringEnd, RegionId, LSId, StationNumber, LaneName, FileType);
        //            }
        //        },
        //        {
        //            text: 'Excel',
        //            action: function (e, dt, node, config) {
        //                var ZoneId = '07';
        //                var TimeId = '01';
        //                var RegionId = '0';
        //                var LSId = '0';
        //                var StationNumber = '0';
        //                var LaneName = '0';
        //                var FileType = 'Excel';
        //                QualifObsTickIdDTableExport(ZoneId, TimeId, DateStringStart, DateStringEnd, RegionId, LSId, StationNumber, LaneName, FileType);
        //            }
        //        }
        //    ]
        //},
        "initComplete": function (settings, json) {
            ActionBtnSet(ActionBtnId, Icon, IsMargin);
            ShowReport(PatternTableReportId);

            if (IsChart == true) {

                //Unities
                var PatternChartCommon = 'ProjectProgressProjectWeekCost';
                var PatternChart = PatternChartCommon + 'Line';
                var labels = GetColumnArray(PatternTableId, 14);
                var data1 = GetColumnArray(PatternTableId, 3);
                var data2 = GetColumnArray(PatternTableId, 4);
                var label1 = 'Planned Costs';
                var label2 = 'Earned Costs';
                var IsFill = false;
                var Title = 'Costs';
                ChartJsLineTwoDisplay(Title, PatternChart, labels, data1, label1, data2, label2, IsFill);

                var PatternChartCommon = 'ProjectProgressProjectWeekManHours';
                var PatternChart = PatternChartCommon + 'Line';
                var labels = GetColumnArray(PatternTableId, 14);
                var data1 = GetColumnArray(PatternTableId, 9);
                var data2 = GetColumnArray(PatternTableId, 10);
                var label1 = 'Planned Man Hours';
                var label2 = 'Earned Man Hours';
                var IsFill = false;
                var Title = 'Man Hours';
                ChartJsLineTwoDisplay(Title, PatternChart, labels, data1, label1, data2, label2, IsFill);

                //Ratio
                var PatternChartCommon = 'ProjectProgressProjectWeekCostRatio';
                var PatternChart = PatternChartCommon + 'Line';
                var labels = GetColumnArray(PatternTableId, 14);
                var data1 = GetColumnArray(PatternTableId, 5);
                var data2 = GetColumnArray(PatternTableId, 6);
                var label1 = 'Planned Costs (%)';
                var label2 = 'Earned Costs (%)';
                var IsFill = false;
                var Title = 'Costs (%)';
                ChartJsLineTwoDisplay(Title, PatternChart, labels, data1, label1, data2, label2, IsFill);

                var PatternChartCommon = 'ProjectProgressProjectWeekManHoursRatio';
                var PatternChart = PatternChartCommon + 'Line';
                var labels = GetColumnArray(PatternTableId, 14);
                var data1 = GetColumnArray(PatternTableId, 11);
                var data2 = GetColumnArray(PatternTableId, 12);
                var label1 = 'Planned Man Hours (%)';
                var label2 = 'Earned Man Hours (%)';
                var IsFill = false;
                var Title = 'Man Hours (%)';
                ChartJsLineTwoDisplay(Title, PatternChart, labels, data1, label1, data2, label2, IsFill);

                //Spi
                var PatternChartCommon = 'ProjectProgressProjectWeekCostSpi';
                var PatternChart = PatternChartCommon + 'Line';
                var labels = GetColumnArray(PatternTableId, 14);
                var data1 = GetColumnArray(PatternTableId, 15);
                var data2 = GetColumnArray(PatternTableId, 7);
                var label1 = 'Refrence';
                var label2 = 'Costs (SPI)';
                var IsFill = false;
                var Title = 'Costs (SPI)';
                ProjectChartJsSpiDisplay(Title, PatternChart, labels, data1, label1, data2, label2, IsFill);

                var PatternChartCommon = 'ProjectProgressProjectWeekManHoursSpi';
                var PatternChart = PatternChartCommon + 'Line';
                var labels = GetColumnArray(PatternTableId, 14);
                var data1 = GetColumnArray(PatternTableId, 15);
                var data2 = GetColumnArray(PatternTableId, 13);
                var label1 = 'Refrence';
                var label2 = 'Man Hours (SPI)';
                var IsFill = false;
                var Title = 'Man Hours (SPI)';
                ProjectChartJsSpiDisplay(Title, PatternChart, labels, data1, label1, data2, label2, IsFill);

                ShowGridReport('Grid_0008');
                //ShowNavReport('Nav_0000');
            }
        },
        "ajax": {
            "url": "/Project/ProjectProgressProjectWeekGet",
            "type": "GET",
            "datatype": "json",
            "data": {
                ProjectIds: ProjectIds,
                DateStringStart: DateStringStart,
                DateStringEnd: DateStringEnd
            }
        },
        "columns": [
            { "data": "DhmValue" },//0
            { "data": "ProjectName" },//1

            { "data": "BudgetedCosts" },//2
            { "data": "PlannedCosts" },//3
            { "data": "EarnedCosts" },//4
            {
                "mData": function vehicle(data, type, dataToSet) {
                    if (data.BudgetedCosts != 0) {
                        return data.PlannedCosts / data.BudgetedCosts;
                    }
                    else {
                        return 0;
                    };                    
                }
            },//5
            {
                "mData": function vehicle(data, type, dataToSet) {
                    if (data.BudgetedCosts != 0) {
                        return data.EarnedCosts / data.BudgetedCosts;
                    }
                    else {
                        return 0;
                    };                    
                }
            },//6
            {
                "mData": function vehicle(data, type, dataToSet) {
                    if (data.PlannedCosts != 0) {
                        return data.EarnedCosts / data.PlannedCosts;
                    }
                    else {
                        return 0;
                    };                    
                }
            },//7

            { "data": "BudgetedManHours" },//8
            { "data": "PlannedManHours" },//9
            { "data": "EarnedManHours" },//10
            {
                "mData": function vehicle(data, type, dataToSet) {
                    if (data.BudgetedManHours != 0) {
                        return data.PlannedManHours / data.BudgetedManHours;
                    }
                    else {
                        return 0;
                    };                   
                }
            },//11 planned
            {
                "mData": function vehicle(data, type, dataToSet) {
                    if (data.BudgetedManHours != 0) {
                        return data.EarnedManHours / data.BudgetedManHours;
                    }
                    else {
                        return 0;
                    };                    
                }
            },//12 earned
            {
                "mData": function vehicle(data, type, dataToSet) {
                    if (data.PlannedManHours != 0) {
                        return (data.EarnedManHours / data.PlannedManHours).toFixed(2);
                    }
                    else {
                        return 0;
                    };                   
                }
            },//13 spi

            {
                "mData": function vehicle(data, type, dataToSet) {
                    return GetDigits(data.Day, 2) + '/' + GetDigits(data.Month, 2);
                }
            },//14 Label
            {
                "mData": function vehicle(data, type, dataToSet) {
                    return 1;
                }
            },//15 Réf
        ],
        "columnDefs": [
            { "width": "3%", "className": "text-left", "targets": 0 },
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
            { "width": "3%", "className": "text-right none", "targets": 14 },
            { "width": "3%", "className": "text-right none", "targets": 15 },

            { "targets": 0, "render": function (data, type, row) { return DataTableDateValueFromRowGet(row); } },
            { "targets": 1, "render": function (data, type, row) { return DataTableStringTruncate(data, 50); } },

            { "targets": 2, "render": function (data, type, row) { return DataTableFormatDoubleGet(data); } },
            { "targets": 3, "render": function (data, type, row) { return DataTableFormatDoubleGet(data); } },
            { "targets": 4, "render": function (data, type, row) { return DataTableFormatDoubleGet(data); } },
            { "targets": 5, "render": function (data, type, row) { return ProjectProgressPlannedGet(row['PlannedCosts'], row['BudgetedCosts']); } },
            { "targets": 6, "render": function (data, type, row) { return ProjectProgressEarnedGet(row['EarnedCosts'], row['BudgetedCosts'], row['PlannedCosts']); } },
            { "targets": 7, "render": function (data, type, row) { return ProjectProgressSpiGet(row['EarnedCosts'], row['PlannedCosts']); } },

            { "targets": 8, "render": function (data, type, row) { return DataTableFormatDoubleGet(data); } },
            { "targets": 9, "render": function (data, type, row) { return DataTableFormatDoubleGet(data); } },
            { "targets": 10, "render": function (data, type, row) { return DataTableFormatDoubleGet(data); } },
            { "targets": 11, "render": function (data, type, row) { return ProjectProgressPlannedGet(row['PlannedManHours'], row['BudgetedManHours']); } },
            { "targets": 12, "render": function (data, type, row) { return ProjectProgressEarnedGet(row['EarnedManHours'], row['BudgetedManHours'], row['PlannedManHours']); } },
            { "targets": 13, "render": function (data, type, row) { return ProjectProgressSpiGet(row['EarnedManHours'], row['PlannedManHours']); } },
            { "targets": 14, "render": function (data, type, row) { return data; } },
            { "targets": 15, "render": function (data, type, row) { return data; } },
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

            DataTableTotalIntGet(api, intVal, 2);
            DataTableTotalIntGet(api, intVal, 3);
            DataTableTotalIntGet(api, intVal, 4);

            DataTableTotalIntGet(api, intVal, 8);
            DataTableTotalIntGet(api, intVal, 9);
            DataTableTotalIntGet(api, intVal, 10);

            DataTableTotalPercentageGet(api, intVal, 3, 2, 5);
            DataTableTotalPercentageGet(api, intVal, 4, 2, 6);
            DataTableTotalPercentageGet(api, intVal, 4, 3, 7);

            DataTableTotalPercentageGet(api, intVal, 9, 8, 11);
            DataTableTotalPercentageGet(api, intVal, 10, 8, 12);
            DataTableTotalPercentageGet(api, intVal, 10, 9, 13);

            data00 = DataTableColumnTotalGet(api, intVal, 2);
            data01 = DataTableColumnTotalGet(api, intVal, 3);
            data02 = DataTableColumnTotalGet(api, intVal, 4);

            data10 = DataTableColumnTotalGet(api, intVal, 8);
            data11 = DataTableColumnTotalGet(api, intVal, 9);
            data12 = DataTableColumnTotalGet(api, intVal, 10);
        }
    });
}

function ProjectProgressProjectCumulNav1Open() {
    ShowGridReport('Grid_0002');
    HideGridReport('Grid_0007');
}

function ProjectProgressProjectCumulNav2Open() {
    HideGridReport('Grid_0002');
    ShowGridReport('Grid_0007');
}


function ProjectProgressLotCumulDisplay() {

    var ActionBtnId = 'ParamActionBtnId0';
    var Icon = 'fas fa-eye';
    var IsMargin = true;

    var DateStringEnd = GetDateStringFromDatePicker('DateEndId');
    var ProjectIds = ElementDropDownListValueMultipleGet('ProjectId');
    var LotIds = ElementDropDownListValueMultipleGet('LotId');
    var IsChart = ElementBooleanGet('IsChartId');

    ProjectAllReportsHide();
    ShowReport('ParamReportId');
    ParamMessageReset();

    ProjectProgressLotCumulGet(ActionBtnId, Icon, IsMargin, DateStringEnd, ProjectIds, LotIds, IsChart);
}


function ProjectProgressLotCumulGet(ActionBtnId, Icon, IsMargin, DateStringEnd, ProjectIds, LotIds, IsChart) {

    ActionSpin(ActionBtnId, IsMargin);

    var PatternTable = 'ProjectProgressLotCumul';
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
        //                var ZoneId = '07';
        //                var TimeId = '01';
        //                var RegionId = '0';
        //                var LSId = '0';
        //                var StationNumber = '0';
        //                var LaneName = '0';
        //                var FileType = 'PDF';
        //                QualifObsTickIdDTableExport(ZoneId, TimeId, DateStringStart, DateStringEnd, RegionId, LSId, StationNumber, LaneName, FileType);
        //            }
        //        },
        //        {
        //            text: 'Excel',
        //            action: function (e, dt, node, config) {
        //                var ZoneId = '07';
        //                var TimeId = '01';
        //                var RegionId = '0';
        //                var LSId = '0';
        //                var StationNumber = '0';
        //                var LaneName = '0';
        //                var FileType = 'Excel';
        //                QualifObsTickIdDTableExport(ZoneId, TimeId, DateStringStart, DateStringEnd, RegionId, LSId, StationNumber, LaneName, FileType);
        //            }
        //        }
        //    ]
        //},
        "initComplete": function (settings, json) {
            ActionBtnSet(ActionBtnId, Icon, IsMargin);
            ShowReport(PatternTableReportId);

            if (IsChart == true) {

                //var PatternChartCommon = 'ProjectProgressLotCumulCosts';
                //var Title = 'Cost';
                //var PatternChart = PatternChartCommon + 'Bar';
                //var labels = GetColumnArray(PatternTableId, 2);
                //var data1 = GetColumnArray(PatternTableId, 3);
                //var data2 = GetColumnArray(PatternTableId, 4);
                //var label1 = 'Planned Costs';
                //var label2 = 'Earned Costs';
                //document.getElementById(PatternChart + 'ChartCardId').style.border = 'transparent';
                //ChartJsBarTwoDisplay(Title, PatternChart, labels, data1, label1, data2, label2, true);

                //var PatternChartCommon = 'ProjectProgressLotCumulManHours';
                //var Title = 'ManHours';
                //var PatternChart = PatternChartCommon + 'Bar';
                //var labels = GetColumnArray(PatternTableId, 2);
                //var data1 = GetColumnArray(PatternTableId, 6);
                //var data2 = GetColumnArray(PatternTableId, 7);
                //var label1 = 'Planned ManHours';
                //var label2 = 'Earned ManHours';
                //document.getElementById(PatternChart + 'ChartCardId').style.border = 'transparent';
                //ChartJsBarTwoDisplay(Title, PatternChart, labels, data1, label1, data2, label2, true);

                //ShowGridReport('Grid_0003');
            }
        },
        "ajax": {
            "url": "/Project/ProjectProgressLotCumulGet",
            "type": "GET",
            "datatype": "json",
            "data": {
                ProjectIds: ProjectIds,
                LotIds: LotIds,
                DateStringEnd: DateStringEnd
            }
        },
        "columns": [
            { "data": "" },//0
            { "data": "ProjectName" },//1
            { "data": "LotName" },//2

            { "data": "BudgetedCosts" },//3
            { "data": "PlannedCosts" },//4
            { "data": "EarnedCosts" },//5
            { "data": "" },//6
            { "data": "" },//7
            { "data": "" },//8

            { "data": "BudgetedManHours" },//9
            { "data": "PlannedManHours" },//10
            { "data": "EarnedManHours" },//11
            { "data": "" },//12
            { "data": "" },//13
            { "data": "" },//14
        ],
        "columnDefs": [
            { "width": "3%", "className": "text-left", "targets": 0 },

            { "width": "3%", "className": "text-left", "targets": 1 },
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
            { "width": "3%", "className": "text-right", "targets": 12 },
            { "width": "3%", "className": "text-right", "targets": 13 },
            { "width": "3%", "className": "text-right", "targets": 14 },

            { "targets": 0, "render": function (data, type, row) { return DataTableDateValueFromRowGet(row); } },
            { "targets": 1, "render": function (data, type, row) { return data; } },
            { "targets": 2, "render": function (data, type, row) { return data; } },

            { "targets": 3, "render": function (data, type, row) { return DataTableFormatDoubleGet(data); } },
            { "targets": 4, "render": function (data, type, row) { return DataTableFormatDoubleGet(data); } },
            { "targets": 5, "render": function (data, type, row) { return DataTableFormatDoubleGet(data); } },
            { "targets": 6, "render": function (data, type, row) { return ProjectProgressPlannedGet(row['PlannedCosts'], row['BudgetedCosts']); } },
            { "targets": 7, "render": function (data, type, row) { return ProjectProgressEarnedGet(row['EarnedCosts'], row['BudgetedCosts'], row['PlannedCosts']); } },
            { "targets": 8, "render": function (data, type, row) { return ProjectProgressSpiGet(row['EarnedCosts'], row['PlannedCosts']); } },

            { "targets": 9, "render": function (data, type, row) { return DataTableFormatDoubleGet(data); } },
            { "targets": 10, "render": function (data, type, row) { return DataTableFormatDoubleGet(data); } },
            { "targets": 11, "render": function (data, type, row) { return DataTableFormatDoubleGet(data); } },
            { "targets": 12, "render": function (data, type, row) { return ProjectProgressPlannedGet(row['PlannedManHours'], row['BudgetedManHours']); } },
            { "targets": 13, "render": function (data, type, row) { return ProjectProgressEarnedGet(row['EarnedManHours'], row['BudgetedManHours'], row['PlannedManHours']); } },
            { "targets": 14, "render": function (data, type, row) { return ProjectProgressSpiGet(row['EarnedManHours'], row['PlannedManHours']); } },
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

            //DataTableTotalIntGet(api, intVal, 3);
            //DataTableTotalIntGet(api, intVal, 4);

            //DataTableTotalIntGet(api, intVal, 6);
            //DataTableTotalIntGet(api, intVal, 7);

            //DataTableTotalPercentageGet(api, intVal, 4, 3, 5);
            //DataTableTotalPercentageGet(api, intVal, 7, 6, 8);
        }
    });
}


function ProjectProgressLotWeekOpen() {
    ProjectAllReportsHide();
    ProjectAllParametersHide();

    //ParamTitleSet('Progress - Analyses');
    ShowReport('ParamReportId');

    //ShowParents
    ShowParent('DateStartId');
    ShowParent('DateEndId');
    ShowParent('ProjectId');
    ShowParent('LotId');
    ShowParent('IsChartId');
    ShowParent('PerimeterId');
    ShowParent('TimeId');

    DateValueDefaultSet('DateStartId', 28);
    DateValueDefaultSet('DateEndId', 0);

    //OnClick
    //ElementOnClickSet('ProjectId', "ProjectOnChangeGet('0', '')");

    //Action
    ParamActionBtnGet(0, 'Display', 'fas fa-eye', "ProjectProgressLotWeekDisplay()");
    ParamActionBtnGet(2, 'Reset', 'fas fa-power-off', "ProjectProgressInputsMultipleReset('')");
}


function ProjectProgressLotWeekDisplay() {

    var ActionBtnId = 'ParamActionBtnId0';
    var Icon = 'fas fa-eye';
    var IsMargin = true;

    var DateStringStart = GetDateStringFromDatePicker('DateStartId');
    var DateStringEnd = GetDateStringFromDatePicker('DateEndId');
    var ProjectIds = ElementDropDownListValueMultipleGet('ProjectId');
    var LotIds = ElementDropDownListValueMultipleGet('LotId');
    var IsChart = ElementBooleanGet('IsChartId');

    ProjectAllReportsHide();
    ShowReport('ParamReportId');
    ParamMessageReset();


    ProjectProgressLotWeekGet(ActionBtnId, Icon, IsMargin, DateStringStart, DateStringEnd, ProjectIds, LotIds, IsChart);
}


function ProjectProgressLotWeekGet(ActionBtnId, Icon, IsMargin, DateStringStart, DateStringEnd, ProjectIds, LotIds, IsChart) {

    ActionSpin(ActionBtnId, IsMargin);

    var PatternTable = 'ProjectProgressLotWeek';
    var PatternTableId = PatternTable + 'TableId'
    var PatternTableReportId = PatternTable + 'TableReportId';

    var data00 = 0;
    var data01 = 0;
    var data02 = 0;

    var data10 = 0;
    var data11 = 0;
    var data12 = 0;

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
        //                var ZoneId = '07';
        //                var TimeId = '01';
        //                var RegionId = '0';
        //                var LSId = '0';
        //                var StationNumber = '0';
        //                var LaneName = '0';
        //                var FileType = 'PDF';
        //                QualifObsTickIdDTableExport(ZoneId, TimeId, DateStringStart, DateStringEnd, RegionId, LSId, StationNumber, LaneName, FileType);
        //            }
        //        },
        //        {
        //            text: 'Excel',
        //            action: function (e, dt, node, config) {
        //                var ZoneId = '07';
        //                var TimeId = '01';
        //                var RegionId = '0';
        //                var LSId = '0';
        //                var StationNumber = '0';
        //                var LaneName = '0';
        //                var FileType = 'Excel';
        //                QualifObsTickIdDTableExport(ZoneId, TimeId, DateStringStart, DateStringEnd, RegionId, LSId, StationNumber, LaneName, FileType);
        //            }
        //        }
        //    ]
        //},
        "initComplete": function (settings, json) {
            ActionBtnSet(ActionBtnId, Icon, IsMargin);
            ShowReport(PatternTableReportId);

            if (IsChart == true) {

                //Unities
                var PatternChartCommon = 'ProjectProgressLotWeekCost';
                var PatternChart = PatternChartCommon + 'Line';
                var labels = GetColumnArray(PatternTableId, 15);
                var data1 = GetColumnArray(PatternTableId, 4);
                var data2 = GetColumnArray(PatternTableId, 5);
                var label1 = 'Planned Costs';
                var label2 = 'Earned Costs';
                var IsFill = false;
                var Title = 'Costs';
                ChartJsLineTwoDisplay(Title, PatternChart, labels, data1, label1, data2, label2, IsFill);

                var PatternChartCommon = 'ProjectProgressLotWeekManHours';
                var PatternChart = PatternChartCommon + 'Line';
                var labels = GetColumnArray(PatternTableId, 15);
                var data1 = GetColumnArray(PatternTableId, 10);
                var data2 = GetColumnArray(PatternTableId, 11);
                var label1 = 'Planned Man Hours';
                var label2 = 'Earned Man Hours';
                var IsFill = false;
                var Title = 'Man Hours';
                ChartJsLineTwoDisplay(Title, PatternChart, labels, data1, label1, data2, label2, IsFill);

                //Ratio
                var PatternChartCommon = 'ProjectProgressLotWeekCostRatio';
                var PatternChart = PatternChartCommon + 'Line';
                var labels = GetColumnArray(PatternTableId, 15);
                var data1 = GetColumnArray(PatternTableId, 6);
                var data2 = GetColumnArray(PatternTableId, 7);
                var label1 = 'Planned Costs (%)';
                var label2 = 'Earned Costs (%)';
                var IsFill = false;
                var Title = 'Costs (%)';
                ChartJsLineTwoDisplay(Title, PatternChart, labels, data1, label1, data2, label2, IsFill);

                var PatternChartCommon = 'ProjectProgressLotWeekManHoursRatio';
                var PatternChart = PatternChartCommon + 'Line';
                var labels = GetColumnArray(PatternTableId, 15);
                var data1 = GetColumnArray(PatternTableId, 12);
                var data2 = GetColumnArray(PatternTableId, 13);
                var label1 = 'Planned Man Hours (%)';
                var label2 = 'Earned Man Hours (%)';
                var IsFill = false;
                var Title = 'Man Hours (%)';
                ChartJsLineTwoDisplay(Title, PatternChart, labels, data1, label1, data2, label2, IsFill);

                //Spi
                var PatternChartCommon = 'ProjectProgressLotWeekCostSpi';
                var PatternChart = PatternChartCommon + 'Line';
                var labels = GetColumnArray(PatternTableId, 15);
                var data1 = GetColumnArray(PatternTableId, 16);
                var data2 = GetColumnArray(PatternTableId, 8);
                var label1 = 'Refrence';
                var label2 = 'Costs (SPI)';
                var IsFill = false;
                var Title = 'Costs (SPI)';
                ProjectChartJsSpiDisplay(Title, PatternChart, labels, data1, label1, data2, label2, IsFill);

                var PatternChartCommon = 'ProjectProgressLotWeekManHoursSpi';
                var PatternChart = PatternChartCommon + 'Line';
                var labels = GetColumnArray(PatternTableId, 15);
                var data1 = GetColumnArray(PatternTableId, 16);
                var data2 = GetColumnArray(PatternTableId, 14);
                var label1 = 'Refrence';
                var label2 = 'Man Hours (SPI)';
                var IsFill = false;
                var Title = 'Man Hours (SPI)';
                ProjectChartJsSpiDisplay(Title, PatternChart, labels, data1, label1, data2, label2, IsFill);

                ShowGridReport('Grid_0010');
            }
        },
        "ajax": {
            "url": "/Project/ProjectProgressLotWeekGet",
            "type": "GET",
            "datatype": "json",
            "data": {
                ProjectIds: ProjectIds,
                LotIds: LotIds,
                DateStringStart: DateStringStart,
                DateStringEnd: DateStringEnd
            }
        },
        "columns": [
            { "data": "DhmValue" },//0
            { "data": "ProjectName" },//1
            { "data": "LotName" },//2

            { "data": "BudgetedCosts" },//3
            { "data": "PlannedCosts" },//4
            { "data": "EarnedCosts" },//5
            {
                "mData": function vehicle(data, type, dataToSet) {
                    if (data.BudgetedCosts != 0) {
                        return data.PlannedCosts / data.BudgetedCosts;
                    }
                    else {
                        return 0;
                    };
                }
            },//6
            {
                "mData": function vehicle(data, type, dataToSet) {
                    if (data.BudgetedCosts != 0) {
                        return data.EarnedCosts / data.BudgetedCosts;
                    }
                    else {
                        return 0;
                    };
                }
            },//7
            {
                "mData": function vehicle(data, type, dataToSet) {
                    if (data.PlannedCosts != 0) {
                        return data.EarnedCosts / data.PlannedCosts;
                    }
                    else {
                        return 0;
                    };
                }
            },//8

            { "data": "BudgetedManHours" },//9
            { "data": "PlannedManHours" },//10
            { "data": "EarnedManHours" },//11
            {
                "mData": function vehicle(data, type, dataToSet) {
                    if (data.BudgetedManHours != 0) {
                        return data.PlannedManHours / data.BudgetedManHours;
                    }
                    else {
                        return 0;
                    };
                }
            },//12
            {
                "mData": function vehicle(data, type, dataToSet) {
                    if (data.BudgetedManHours != 0) {
                        return data.EarnedManHours / data.BudgetedManHours;
                    }
                    else {
                        return 0;
                    };
                }
            },//13
            {
                "mData": function vehicle(data, type, dataToSet) {
                    if (data.PlannedManHours != 0) {
                        return (data.EarnedManHours / data.PlannedManHours).toFixed(2);
                    }
                    else {
                        return 0;
                    };
                }
            },//14

            {
                "mData": function vehicle(data, type, dataToSet) {
                    return GetDigits(data.Day, 2) + '/' + GetDigits(data.Month, 2);
                }
            },//15 Label
            {
                "mData": function vehicle(data, type, dataToSet) {
                    return 1;
                }
            },//16 Ref
        ],
        "columnDefs": [
            { "width": "3%", "className": "text-left", "targets": 0 },
            { "width": "3%", "className": "text-left none", "targets": 1 },
            { "width": "3%", "className": "text-left none", "targets": 2 },

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
            { "width": "3%", "className": "text-right none", "targets": 15 },
            { "width": "3%", "className": "text-right none", "targets": 16 },

            { "targets": 0, "render": function (data, type, row) { return DataTableDateValueFromRowGet(row); } },
            { "targets": 1, "render": function (data, type, row) { return data; } },
            { "targets": 2, "render": function (data, type, row) { return data; } },

            { "targets": 3, "render": function (data, type, row) { return DataTableFormatDoubleGet(data); } },
            { "targets": 4, "render": function (data, type, row) { return DataTableFormatDoubleGet(data); } },
            { "targets": 5, "render": function (data, type, row) { return DataTableFormatDoubleGet(data); } },
            { "targets": 6, "render": function (data, type, row) { return ProjectProgressPlannedGet(row['PlannedCosts'], row['BudgetedCosts']); } },
            { "targets": 7, "render": function (data, type, row) { return ProjectProgressEarnedGet(row['EarnedCosts'], row['BudgetedCosts'], row['PlannedCosts']); } },
            { "targets": 8, "render": function (data, type, row) { return ProjectProgressSpiGet(row['EarnedCosts'], row['PlannedCosts']); } },

            { "targets": 9, "render": function (data, type, row) { return DataTableFormatDoubleGet(data); } },
            { "targets": 10, "render": function (data, type, row) { return DataTableFormatDoubleGet(data); } },
            { "targets": 11, "render": function (data, type, row) { return DataTableFormatDoubleGet(data); } },
            { "targets": 12, "render": function (data, type, row) { return ProjectProgressPlannedGet(row['PlannedManHours'], row['BudgetedManHours']); } },
            { "targets": 13, "render": function (data, type, row) { return ProjectProgressEarnedGet(row['EarnedManHours'], row['BudgetedManHours'], row['PlannedManHours']); } },
            { "targets": 14, "render": function (data, type, row) { return ProjectProgressSpiGet(row['EarnedManHours'], row['PlannedManHours']); } },

            { "targets": 15, "render": function (data, type, row) { return data; } },
            { "targets": 16, "render": function (data, type, row) { return data; } },
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

            //DataTableTotalIntGet(api, intVal, 2);
            //DataTableTotalIntGet(api, intVal, 3);
            //DataTableTotalIntGet(api, intVal, 4);

            //DataTableTotalIntGet(api, intVal, 8);
            //DataTableTotalIntGet(api, intVal, 9);
            //DataTableTotalIntGet(api, intVal, 10);

            //DataTableTotalPercentageGet(api, intVal, 3, 2, 5);
            //DataTableTotalPercentageGet(api, intVal, 4, 2, 6);
            //DataTableTotalPercentageGet(api, intVal, 4, 3, 7);

            //DataTableTotalPercentageGet(api, intVal, 9, 8, 11);
            //DataTableTotalPercentageGet(api, intVal, 10, 8, 12);
            //DataTableTotalPercentageGet(api, intVal, 10, 9, 13);

            //data00 = DataTableColumnTotalGet(api, intVal, 2);
            //data01 = DataTableColumnTotalGet(api, intVal, 3);
            //data02 = DataTableColumnTotalGet(api, intVal, 4);

            //data10 = DataTableColumnTotalGet(api, intVal, 8);
            //data11 = DataTableColumnTotalGet(api, intVal, 9);
            //data12 = DataTableColumnTotalGet(api, intVal, 10);
        }
    });
}

function ProjectProgressPhaseCumulDisplay() {

    var ActionBtnId = 'ParamActionBtnId0';
    var Icon = 'fas fa-eye';
    var IsMargin = true;

    var DateStringEnd = GetDateStringFromDatePicker('DateEndId');
    var ProjectId = ElementDropDownListValueGet('ProjectId');
    var PhaseId = ElementDropDownListValueGet('PhaseId');
    var IsChart = ElementBooleanGet('IsChartId');

    ProjectAllReportsHide();
    ShowReport('ParamReportId');
    ParamMessageReset();

    ProjectProgressPhaseCumulGet(ActionBtnId, Icon, IsMargin, DateStringEnd, ProjectId, PhaseId, IsChart);
}


function ProjectProgressPhaseCumulGet(ActionBtnId, Icon, IsMargin, DateStringEnd, ProjectId, PhaseId, IsChart) {

    ActionSpin(ActionBtnId, IsMargin);

    var PatternTable = 'ProjectProgressPhaseCumul';
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
        //                var ZoneId = '07';
        //                var TimeId = '01';
        //                var RegionId = '0';
        //                var LSId = '0';
        //                var StationNumber = '0';
        //                var LaneName = '0';
        //                var FileType = 'PDF';
        //                QualifObsTickIdDTableExport(ZoneId, TimeId, DateStringStart, DateStringEnd, RegionId, LSId, StationNumber, LaneName, FileType);
        //            }
        //        },
        //        {
        //            text: 'Excel',
        //            action: function (e, dt, node, config) {
        //                var ZoneId = '07';
        //                var TimeId = '01';
        //                var RegionId = '0';
        //                var LSId = '0';
        //                var StationNumber = '0';
        //                var LaneName = '0';
        //                var FileType = 'Excel';
        //                QualifObsTickIdDTableExport(ZoneId, TimeId, DateStringStart, DateStringEnd, RegionId, LSId, StationNumber, LaneName, FileType);
        //            }
        //        }
        //    ]
        //},
        "initComplete": function (settings, json) {
            ActionBtnSet(ActionBtnId, Icon, IsMargin);
            ShowReport(PatternTableReportId);

            if (IsChart == true) {

                var PatternChartCommon = 'ProjectProgressPhaseCumulCosts';
                var Title = 'Cost';
                var PatternChart = PatternChartCommon + 'Bar';
                var labels = GetColumnArray(PatternTableId, 2);
                var data1 = GetColumnArray(PatternTableId, 3);
                var data2 = GetColumnArray(PatternTableId, 4);
                var label1 = 'Planned Costs';
                var label2 = 'Earned Costs';
                document.getElementById(PatternChart + 'ChartCardId').style.border = 'transparent';
                ChartJsBarTwoDisplay(Title, PatternChart, labels, data1, label1, data2, label2, true);

                var PatternChartCommon = 'ProjectProgressPhaseCumulManHours';
                var Title = 'Man Hours';
                var PatternChart = PatternChartCommon + 'Bar';
                var labels = GetColumnArray(PatternTableId, 2);
                var data1 = GetColumnArray(PatternTableId, 6);
                var data2 = GetColumnArray(PatternTableId, 7);
                var label1 = 'Planned ManHours';
                var label2 = 'Earned ManHours';
                document.getElementById(PatternChart + 'ChartCardId').style.border = 'transparent';
                ChartJsBarTwoDisplay(Title, PatternChart, labels, data1, label1, data2, label2, true);

                ShowGridReport('Grid_0004');
            }
        },
        "ajax": {
            "url": "/Project/ProjectProgressPhaseCumulGet",
            "type": "GET",
            "datatype": "json",
            "data": {
                ProjectId: ProjectId,
                PhaseId: PhaseId,
                DateStringEnd: DateStringEnd
            }
        },
        "columns": [
            { "data": "" },//0
            { "data": "ProjectName" },//1
            { "data": "PhaseName" },//2

            { "data": "PlannedCosts" },//3
            { "data": "EarnedCosts" },//4
            { "data": "" },//5

            { "data": "PlannedManHours" },//6
            { "data": "EarnedManHours" },//7
            { "data": "" },//8 
        ],
        "columnDefs": [
            { "width": "3%", "className": "text-left", "targets": 0 },

            { "width": "3%", "className": "text-left", "targets": 1 },
            { "width": "3%", "className": "text-left", "targets": 2 },

            { "width": "3%", "className": "text-right", "targets": 3 },
            { "width": "3%", "className": "text-right", "targets": 4 },
            { "width": "3%", "className": "text-right", "targets": 5 },

            { "width": "3%", "className": "text-right", "targets": 6 },
            { "width": "3%", "className": "text-right", "targets": 7 },
            { "width": "3%", "className": "text-right", "targets": 8 },

            { "targets": 0, "render": function (data, type, row) { return DataTableDateValueFromRowGet(row); } },
            { "targets": 1, "render": function (data, type, row) { return data; } },
            { "targets": 2, "render": function (data, type, row) { return data; } },

            { "targets": 3, "render": function (data, type, row) { return DataTableFormatDoubleGet(data); } },
            { "targets": 4, "render": function (data, type, row) { return DataTableFormatDoubleGet(data); } },
            { "targets": 5, "render": function (data, type, row) { return DataTablePercentageTwoThresholdsGet(row['EarnedCosts'], row['PlannedCosts'], 2, 60, 80); } },

            { "targets": 6, "render": function (data, type, row) { return DataTableFormatDoubleGet(data); } },
            { "targets": 7, "render": function (data, type, row) { return DataTableFormatDoubleGet(data); } },
            { "targets": 8, "render": function (data, type, row) { return DataTablePercentageTwoThresholdsGet(row['EarnedManHours'], row['PlannedManHours'], 2, 60, 80); } },
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

            DataTableTotalIntGet(api, intVal, 3);
            DataTableTotalIntGet(api, intVal, 4);

            DataTableTotalIntGet(api, intVal, 6);
            DataTableTotalIntGet(api, intVal, 7);

            DataTableTotalPercentageGet(api, intVal, 4, 3, 5);
            DataTableTotalPercentageGet(api, intVal, 7, 6, 8);
        }
    });
}


function ProjectProgressCompanyCumulDisplay() {

    var ActionBtnId = 'ParamActionBtnId0';
    var Icon = 'fas fa-eye';
    var IsMargin = true;

    var DateStringEnd = GetDateStringFromDatePicker('DateEndId');
    var ProjectIds = ElementDropDownListValueMultipleGet('ProjectId');
    var CompanyIds = ElementDropDownListValueMultipleGet('CompanyId');
    var IsChart = ElementBooleanGet('IsChartId');

    ProjectAllReportsHide();
    ShowReport('ParamReportId');
    ParamMessageReset();

    ProjectProgressCompanyCumulGet(ActionBtnId, Icon, IsMargin, DateStringEnd, ProjectIds, CompanyIds, IsChart);
}


function ProjectProgressCompanyCumulGet(ActionBtnId, Icon, IsMargin, DateStringEnd, ProjectIds, CompanyIds, IsChart) {

    ActionSpin(ActionBtnId, IsMargin);

    var PatternTable = 'ProjectProgressCompanyCumul';
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
        //                var ZoneId = '07';
        //                var TimeId = '01';
        //                var RegionId = '0';
        //                var LSId = '0';
        //                var StationNumber = '0';
        //                var LaneName = '0';
        //                var FileType = 'PDF';
        //                QualifObsTickIdDTableExport(ZoneId, TimeId, DateStringStart, DateStringEnd, RegionId, LSId, StationNumber, LaneName, FileType);
        //            }
        //        },
        //        {
        //            text: 'Excel',
        //            action: function (e, dt, node, config) {
        //                var ZoneId = '07';
        //                var TimeId = '01';
        //                var RegionId = '0';
        //                var LSId = '0';
        //                var StationNumber = '0';
        //                var LaneName = '0';
        //                var FileType = 'Excel';
        //                QualifObsTickIdDTableExport(ZoneId, TimeId, DateStringStart, DateStringEnd, RegionId, LSId, StationNumber, LaneName, FileType);
        //            }
        //        }
        //    ]
        //},
        "initComplete": function (settings, json) {
            ActionBtnSet(ActionBtnId, Icon, IsMargin);
            ShowReport(PatternTableReportId);

            if (IsChart == true) {

                var PatternChartCommon = 'ProjectProgressCompanyCumulCosts';
                var Title = 'Cost';
                var PatternChart = PatternChartCommon + 'Bar';
                var labels = GetColumnArray(PatternTableId, 2);
                var data1 = GetColumnArray(PatternTableId, 3);
                var data2 = GetColumnArray(PatternTableId, 4);
                var label1 = 'Planned Costs';
                var label2 = 'Earned Costs';
                document.getElementById(PatternChart + 'ChartCardId').style.border = 'transparent';
                ChartJsBarTwoDisplay(Title, PatternChart, labels, data1, label1, data2, label2, true);

                var PatternChartCommon = 'ProjectProgressCompanyCumulManHours';
                var Title = 'ManHours';
                var PatternChart = PatternChartCommon + 'Bar';
                var labels = GetColumnArray(PatternTableId, 2);
                var data1 = GetColumnArray(PatternTableId, 6);
                var data2 = GetColumnArray(PatternTableId, 7);
                var label1 = 'Planned ManHours';
                var label2 = 'Earned ManHours';
                document.getElementById(PatternChart + 'ChartCardId').style.border = 'transparent';
                ChartJsBarTwoDisplay(Title, PatternChart, labels, data1, label1, data2, label2, true);

                ShowGridReport('Grid_0005');
            }
        },
        "ajax": {
            "url": "/Project/ProjectProgressCompanyCumulGet",
            "type": "GET",
            "datatype": "json",
            "data": {
                ProjectIds: ProjectIds,
                CompanyIds: CompanyIds,
                DateStringEnd: DateStringEnd
            }
        },
        "columns": [
            { "data": "" },//0
            { "data": "ProjectName" },//1
            { "data": "CompanyName" },//2

            { "data": "PlannedCosts" },//3
            { "data": "EarnedCosts" },//4
            { "data": "" },//5

            { "data": "PlannedManHours" },//6
            { "data": "EarnedManHours" },//7
            { "data": "" },//8 
        ],
        "columnDefs": [
            { "width": "3%", "className": "text-left", "targets": 0 },

            { "width": "3%", "className": "text-left", "targets": 1 },
            { "width": "3%", "className": "text-left", "targets": 2 },

            { "width": "3%", "className": "text-right", "targets": 3 },
            { "width": "3%", "className": "text-right", "targets": 4 },
            { "width": "3%", "className": "text-right", "targets": 5 },

            { "width": "3%", "className": "text-right", "targets": 6 },
            { "width": "3%", "className": "text-right", "targets": 7 },
            { "width": "3%", "className": "text-right", "targets": 8 },

            { "targets": 0, "render": function (data, type, row) { return DataTableDateValueFromRowGet(row); } },
            { "targets": 1, "render": function (data, type, row) { return data; } },
            { "targets": 2, "render": function (data, type, row) { return data; } },

            { "targets": 3, "render": function (data, type, row) { return DataTableFormatDoubleGet(data); } },
            { "targets": 4, "render": function (data, type, row) { return DataTableFormatDoubleGet(data); } },
            { "targets": 5, "render": function (data, type, row) { return DataTablePercentageTwoThresholdsGet(row['EarnedCosts'], row['PlannedCosts'], 2, 60, 80); } },

            { "targets": 6, "render": function (data, type, row) { return DataTableFormatDoubleGet(data); } },
            { "targets": 7, "render": function (data, type, row) { return DataTableFormatDoubleGet(data); } },
            { "targets": 8, "render": function (data, type, row) { return DataTablePercentageTwoThresholdsGet(row['EarnedManHours'], row['PlannedManHours'], 2, 60, 80); } },
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

            DataTableTotalIntGet(api, intVal, 3);
            DataTableTotalIntGet(api, intVal, 4);

            DataTableTotalIntGet(api, intVal, 6);
            DataTableTotalIntGet(api, intVal, 7);

            DataTableTotalPercentageGet(api, intVal, 4, 3, 5);
            DataTableTotalPercentageGet(api, intVal, 7, 6, 8);
        }
    });
}


function ProjectProgressCompanyWeekOpen() {
    ProjectAllReportsHide();
    ProjectAllParametersHide();

    //ParamTitleSet('Progress - Analyses');
    ShowReport('ParamReportId');

    //ShowParents
    ShowParent('DateStartId');
    ShowParent('DateEndId');
    ShowParent('ProjectId');
    ShowParent('CompanyId');
    ShowParent('IsChartId');
    ShowParent('PerimeterId');
    ShowParent('TimeId');

    DateValueDefaultSet('DateStartId', 28);
    DateValueDefaultSet('DateEndId', 0);

    //OnClick
    //ElementOnClickSet('ProjectId', "ProjectOnChangeGet('0', '')");

    //Action
    ParamActionBtnGet(0, 'Display', 'fas fa-eye', "ProjectProgressCompanyWeekDisplay()");
    ParamActionBtnGet(2, 'Reset', 'fas fa-power-off', "ProjectProgressInputsMultipleReset('')");
}


function ProjectProgressCompanyWeekDisplay() {

    var ActionBtnId = 'ParamActionBtnId0';
    var Icon = 'fas fa-eye';
    var IsMargin = true;

    var DateStringStart = GetDateStringFromDatePicker('DateStartId');
    var DateStringEnd = GetDateStringFromDatePicker('DateEndId');
    var ProjectIds = ElementDropDownListValueMultipleGet('ProjectId');
    var CompanyIds = ElementDropDownListValueMultipleGet('CompanyId');
    var IsChart = ElementBooleanGet('IsChartId');

    ProjectAllReportsHide();
    ShowReport('ParamReportId');
    ParamMessageReset();

    ProjectProgressCompanyWeekGet(ActionBtnId, Icon, IsMargin, DateStringStart, DateStringEnd, ProjectIds, CompanyIds, IsChart);
}


function ProjectProgressCompanyWeekGet(ActionBtnId, Icon, IsMargin, DateStringStart, DateStringEnd, ProjectIds, CompanyIds, IsChart) {

    ActionSpin(ActionBtnId, IsMargin);

    var PatternTable = 'ProjectProgressCompanyWeek';
    var PatternTableId = PatternTable + 'TableId'
    var PatternTableReportId = PatternTable + 'TableReportId';

    var data00 = 0;
    var data01 = 0;
    var data02 = 0;

    var data10 = 0;
    var data11 = 0;
    var data12 = 0;

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
        //                var ZoneId = '07';
        //                var TimeId = '01';
        //                var RegionId = '0';
        //                var LSId = '0';
        //                var StationNumber = '0';
        //                var LaneName = '0';
        //                var FileType = 'PDF';
        //                QualifObsTickIdDTableExport(ZoneId, TimeId, DateStringStart, DateStringEnd, RegionId, LSId, StationNumber, LaneName, FileType);
        //            }
        //        },
        //        {
        //            text: 'Excel',
        //            action: function (e, dt, node, config) {
        //                var ZoneId = '07';
        //                var TimeId = '01';
        //                var RegionId = '0';
        //                var LSId = '0';
        //                var StationNumber = '0';
        //                var LaneName = '0';
        //                var FileType = 'Excel';
        //                QualifObsTickIdDTableExport(ZoneId, TimeId, DateStringStart, DateStringEnd, RegionId, LSId, StationNumber, LaneName, FileType);
        //            }
        //        }
        //    ]
        //},
        "initComplete": function (settings, json) {
            ActionBtnSet(ActionBtnId, Icon, IsMargin);
            ShowReport(PatternTableReportId);

            if (IsChart == true) {

                //Unities
                var PatternChartCommon = 'ProjectProgressCompanyWeekCost';
                var PatternChart = PatternChartCommon + 'Line';
                var labels = GetColumnArray(PatternTableId, 15);
                var data1 = GetColumnArray(PatternTableId, 4);
                var data2 = GetColumnArray(PatternTableId, 5);
                var label1 = 'Planned Costs';
                var label2 = 'Earned Costs';
                var IsFill = false;
                var Title = 'Costs';
                ChartJsLineTwoDisplay(Title, PatternChart, labels, data1, label1, data2, label2, IsFill);

                var PatternChartCommon = 'ProjectProgressCompanyWeekManHours';
                var PatternChart = PatternChartCommon + 'Line';
                var labels = GetColumnArray(PatternTableId, 15);
                var data1 = GetColumnArray(PatternTableId, 10);
                var data2 = GetColumnArray(PatternTableId, 11);
                var label1 = 'Planned Man Hours';
                var label2 = 'Earned Man Hours';
                var IsFill = false;
                var Title = 'Man Hours';
                ChartJsLineTwoDisplay(Title, PatternChart, labels, data1, label1, data2, label2, IsFill);

                //Ratio
                var PatternChartCommon = 'ProjectProgressCompanyWeekCostRatio';
                var PatternChart = PatternChartCommon + 'Line';
                var labels = GetColumnArray(PatternTableId, 15);
                var data1 = GetColumnArray(PatternTableId, 6);
                var data2 = GetColumnArray(PatternTableId, 7);
                var label1 = 'Planned Costs (%)';
                var label2 = 'Earned Costs (%)';
                var IsFill = false;
                var Title = 'Costs (%)';
                ChartJsLineTwoDisplay(Title, PatternChart, labels, data1, label1, data2, label2, IsFill);

                var PatternChartCommon = 'ProjectProgressCompanyWeekManHoursRatio';
                var PatternChart = PatternChartCommon + 'Line';
                var labels = GetColumnArray(PatternTableId, 15);
                var data1 = GetColumnArray(PatternTableId, 12);
                var data2 = GetColumnArray(PatternTableId, 13);
                var label1 = 'Planned Man Hours (%)';
                var label2 = 'Earned Man Hours (%)';
                var IsFill = false;
                var Title = 'Man Hours (%)';
                ChartJsLineTwoDisplay(Title, PatternChart, labels, data1, label1, data2, label2, IsFill);

                //Spi
                var PatternChartCommon = 'ProjectProgressCompanyWeekCostSpi';
                var PatternChart = PatternChartCommon + 'Line';
                var labels = GetColumnArray(PatternTableId, 15);
                var data1 = GetColumnArray(PatternTableId, 16);
                var data2 = GetColumnArray(PatternTableId, 8);
                var label1 = 'Refrence';
                var label2 = 'Costs (SPI)';
                var IsFill = false;
                var Title = 'Costs (SPI)';
                ProjectChartJsSpiDisplay(Title, PatternChart, labels, data1, label1, data2, label2, IsFill);

                var PatternChartCommon = 'ProjectProgressCompanyWeekManHoursSpi';
                var PatternChart = PatternChartCommon + 'Line';
                var labels = GetColumnArray(PatternTableId, 15);
                var data1 = GetColumnArray(PatternTableId, 16);
                var data2 = GetColumnArray(PatternTableId, 14);
                var label1 = 'Refrence';
                var label2 = 'Man Hours (SPI)';
                var IsFill = false;
                var Title = 'Man Hours (SPI)';
                ProjectChartJsSpiDisplay(Title, PatternChart, labels, data1, label1, data2, label2, IsFill);

                ShowGridReport('Grid_0011');
            }
        },
        "ajax": {
            "url": "/Project/ProjectProgressCompanyWeekGet",
            "type": "GET",
            "datatype": "json",
            "data": {
                ProjectIds: ProjectIds,
                CompanyIds: CompanyIds,
                DateStringStart: DateStringStart,
                DateStringEnd: DateStringEnd
            }
        },
        "columns": [
            { "data": "DhmValue" },//0
            { "data": "ProjectName" },//1
            { "data": "CompanyName" },//2

            { "data": "BudgetedCosts" },//3
            { "data": "PlannedCosts" },//4
            { "data": "EarnedCosts" },//5
            {
                "mData": function vehicle(data, type, dataToSet) {
                    if (data.BudgetedCosts != 0) {
                        return data.PlannedCosts / data.BudgetedCosts;
                    }
                    else {
                        return 0;
                    };
                }
            },//6
            {
                "mData": function vehicle(data, type, dataToSet) {
                    if (data.BudgetedCosts != 0) {
                        return data.EarnedCosts / data.BudgetedCosts;
                    }
                    else {
                        return 0;
                    };
                }
            },//7
            {
                "mData": function vehicle(data, type, dataToSet) {
                    if (data.PlannedCosts != 0) {
                        return data.EarnedCosts / data.PlannedCosts;
                    }
                    else {
                        return 0;
                    };
                }
            },//8

            { "data": "BudgetedManHours" },//9
            { "data": "PlannedManHours" },//10
            { "data": "EarnedManHours" },//11
            {
                "mData": function vehicle(data, type, dataToSet) {
                    if (data.BudgetedManHours != 0) {
                        return data.PlannedManHours / data.BudgetedManHours;
                    }
                    else {
                        return 0;
                    };
                }
            },//12
            {
                "mData": function vehicle(data, type, dataToSet) {
                    if (data.BudgetedManHours != 0) {
                        return data.EarnedManHours / data.BudgetedManHours;
                    }
                    else {
                        return 0;
                    };
                }
            },//13
            {
                "mData": function vehicle(data, type, dataToSet) {
                    if (data.PlannedManHours != 0) {
                        return (data.EarnedManHours / data.PlannedManHours).toFixed(2);
                    }
                    else {
                        return 0;
                    };
                }
            },//14

            {
                "mData": function vehicle(data, type, dataToSet) {
                    return GetDigits(data.Day, 2) + '/' + GetDigits(data.Month, 2);
                }
            },//15 Label
            {
                "mData": function vehicle(data, type, dataToSet) {
                    return 1;
                }
            },//16 Ref
        ],
        "columnDefs": [
            { "width": "3%", "className": "text-left", "targets": 0 },
            { "width": "3%", "className": "text-left none", "targets": 1 },
            { "width": "3%", "className": "text-left none", "targets": 2 },

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
            { "width": "3%", "className": "text-right none", "targets": 15 },
            { "width": "3%", "className": "text-right none", "targets": 16 },

            { "targets": 0, "render": function (data, type, row) { return DataTableDateValueFromRowGet(row); } },
            { "targets": 1, "render": function (data, type, row) { return data; } },
            { "targets": 2, "render": function (data, type, row) { return data; } },

            { "targets": 3, "render": function (data, type, row) { return DataTableFormatDoubleGet(data); } },
            { "targets": 4, "render": function (data, type, row) { return DataTableFormatDoubleGet(data); } },
            { "targets": 5, "render": function (data, type, row) { return DataTableFormatDoubleGet(data); } },
            { "targets": 6, "render": function (data, type, row) { return ProjectProgressPlannedGet(row['PlannedCosts'], row['BudgetedCosts']); } },
            { "targets": 7, "render": function (data, type, row) { return ProjectProgressEarnedGet(row['EarnedCosts'], row['BudgetedCosts'], row['PlannedCosts']); } },
            { "targets": 8, "render": function (data, type, row) { return ProjectProgressSpiGet(row['EarnedCosts'], row['PlannedCosts']); } },

            { "targets": 9, "render": function (data, type, row) { return DataTableFormatDoubleGet(data); } },
            { "targets": 10, "render": function (data, type, row) { return DataTableFormatDoubleGet(data); } },
            { "targets": 11, "render": function (data, type, row) { return DataTableFormatDoubleGet(data); } },
            { "targets": 12, "render": function (data, type, row) { return ProjectProgressPlannedGet(row['PlannedManHours'], row['BudgetedManHours']); } },
            { "targets": 13, "render": function (data, type, row) { return ProjectProgressEarnedGet(row['EarnedManHours'], row['BudgetedManHours'], row['PlannedManHours']); } },
            { "targets": 14, "render": function (data, type, row) { return ProjectProgressSpiGet(row['EarnedManHours'], row['PlannedManHours']); } },

            { "targets": 15, "render": function (data, type, row) { return data; } },
            { "targets": 16, "render": function (data, type, row) { return data; } },
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

            //DataTableTotalIntGet(api, intVal, 2);
            //DataTableTotalIntGet(api, intVal, 3);
            //DataTableTotalIntGet(api, intVal, 4);

            //DataTableTotalIntGet(api, intVal, 8);
            //DataTableTotalIntGet(api, intVal, 9);
            //DataTableTotalIntGet(api, intVal, 10);

            //DataTableTotalPercentageGet(api, intVal, 3, 2, 5);
            //DataTableTotalPercentageGet(api, intVal, 4, 2, 6);
            //DataTableTotalPercentageGet(api, intVal, 4, 3, 7);

            //DataTableTotalPercentageGet(api, intVal, 9, 8, 11);
            //DataTableTotalPercentageGet(api, intVal, 10, 8, 12);
            //DataTableTotalPercentageGet(api, intVal, 10, 9, 13);

            //data00 = DataTableColumnTotalGet(api, intVal, 2);
            //data01 = DataTableColumnTotalGet(api, intVal, 3);
            //data02 = DataTableColumnTotalGet(api, intVal, 4);

            //data10 = DataTableColumnTotalGet(api, intVal, 8);
            //data11 = DataTableColumnTotalGet(api, intVal, 9);
            //data12 = DataTableColumnTotalGet(api, intVal, 10);
        }
    });
}

function ProjectProgressProjectCumulOpen() {
    ProjectAllReportsHide();
    ProjectAllParametersHide();

    //ParamTitleSet('Progress - Analyses');
    ShowReport('ParamReportId');

    //ShowParents
    ShowParent('DateEndId');
    ShowParent('ProjectId');
    ShowParent('IsChartId');
    ShowParent('PerimeterId');
    ShowParent('TimeId');

    DateValueDefaultSet('DateEndId', 0);

    //Fill
    //ProjectsSecGet('0', '');

    //OnClick
    ElementOnClickSet('ProjectId', "ProjectOnChangeGet('0', '')");
    //ElementOnClickSet('ProjectId', "");

    //OnChange
    //ElementOnChangeSet('ProjectId', "");

    //Action
    ParamActionBtnGet(0, 'Display', 'fas fa-eye', "ProjectProgressProjectCumulDisplay()");
    ParamActionBtnGet(2, 'Reset', 'fas fa-power-off', "ProjectProgressInputsMultipleReset('')");
}


function ProjectProgressLotCumulOpen() {
    ProjectAllReportsHide();
    ProjectAllParametersHide();

    //ParamTitleSet('Progress - Analyses');
    ShowReport('ParamReportId');

    //ShowParents
    ShowParent('DateEndId');
    ShowParent('ProjectId');
    ShowParent('LotId');
    ShowParent('IsChartId');
    ShowParent('PerimeterId');
    ShowParent('TimeId');

    DateValueDefaultSet('DateEndId', 0);

    //Fill
    //ProjectsSecGet('0', '');

    //OnClick
    //ElementOnClickSet('ProjectId', "ProjectOnChangeGet('0', '')");
    //ElementOnClickSet('ProjectId', "");

    //OnChange
    //ElementOnChangeSet('ProjectId', "");

    //Action
    ParamActionBtnGet(0, 'Display', 'fas fa-eye', "ProjectProgressLotCumulDisplay()");
    ParamActionBtnGet(2, 'Reset', 'fas fa-power-off', "ProjectProgressInputsMultipleReset('')");
}


function ProjectProgressCompanyCumulOpen() {
    ProjectAllReportsHide();
    ProjectAllParametersHide();

    //ParamTitleSet('Progress - Analyses');
    ShowReport('ParamReportId');

    //ShowParents
    ShowParent('DateEndId');
    ShowParent('ProjectId');
    ShowParent('CompanyId');
    ShowParent('IsChartId');
    ShowParent('PerimeterId');
    ShowParent('TimeId');

    DateValueDefaultSet('DateEndId', 0);

    //Fill
    //ProjectsSecGet('0', '');

    //OnClick
    ElementOnClickSet('ProjectId', "ProjectOnChangeGet('0', '')");
    //ElementOnClickSet('ProjectId', "");

    //OnChange
    //ElementOnChangeSet('ProjectId', "");

    //Action
    ParamActionBtnGet(0, 'Display', 'fas fa-eye', "ProjectProgressCompanyCumulDisplay()");
}

function ProjectProgressPhaseCumulOpen() {
    ProjectAllReportsHide();
    ProjectAllParametersHide();

    //ParamTitleSet('Progress - Analyses');
    ShowReport('ParamReportId');

    //ShowParents
    ShowParent('DateEndId');
    ShowParent('ProjectId');
    ShowParent('PhaseId');
    ShowParent('IsChartId');
    ShowParent('PerimeterId');
    ShowParent('TimeId');

    DateValueDefaultSet('DateEndId', 0);

    //Fill
    //ProjectsSecGet('0', '');

    //OnClick
    ElementOnClickSet('ProjectId', "ProjectOnChangeGet('0', '')");
    //ElementOnClickSet('ProjectId', "");

    //OnChange
    //ElementOnChangeSet('ProjectId', "");

    //Action
    ParamActionBtnGet(0, 'Display', 'fas fa-eye', "ProjectProgressPhaseCumulDisplay()");
}

function ProjectProgressBuildingCumulOpen() {
    ProjectAllReportsHide();
    ProjectAllParametersHide();

    //ParamTitleSet('Progress - Analyses');
    ShowReport('ParamReportId');

    //ShowParents
    ShowParent('DateEndId');
    ShowParent('ProjectId');
    ShowParent('BuildingId');
    ShowParent('IsChartId');
    ShowParent('PerimeterId');
    ShowParent('TimeId');

    DateValueDefaultSet('DateEndId', 0);

    //Fill
    //ProjectsSecGet('0', '');

    //OnClick
    ElementOnClickSet('ProjectId', "ProjectOnChangeGet('0', '')");
    //ElementOnClickSet('ProjectId', "");

    //OnChange
    //ElementOnChangeSet('ProjectId', "");

    //Action
    ParamActionBtnGet(0, 'Display', 'fas fa-eye', "ProjectProgressBuildingCumulDisplay()");
    ParamActionBtnGet(2, 'Reset', 'fas fa-power-off', "ProjectProgressInputsMultipleReset('')");
}

function ProjectEventFormLoad(
    ProjectEventId, 
    ProjectName,
    EventCategoryId,   
    Year,
    Month,
    Day,
    Comment) {

    HideReport('ProjectEventEditModalDialogReportId');

    //Fill  
    $('#ProjectNameId2').text(ProjectName);
    
    ElementDropDownListSet('EventCategoryId2', EventCategoryId);

    var DateString = GetDigits(Day, 2) + GetDigits(Month, 2) + Year;
    var DateStringInverse = Year + GetDigits(Month, 2) + GetDigits(Day, 2);

    ElementInputDateValueSet('DhmValueId2', Year, Month, Day);
    ElementInputSet('EventCommentId2', Comment);


    //Set modal action buttons
    var Pattern = 'ProjectEventEdit';
    var Label = 'Enregistrer';
    var Icon = 'far fa-save';
    var OnClick = Pattern + '(' + ProjectEventId + ')';
    ModalActionBtnGet(Pattern, Label, Icon, OnClick);


    //image
    document.getElementById("FileId2").value = "";

    var ImageId0 = "CarouselId20";
    var ImageId1 = "CarouselId21";
    var ImageId2 = "CarouselId22";

    document.getElementById(ImageId0).src = ImagesFolderVD + '/Event/' + DateStringInverse + '-' + ProjectEventId + '-' + '0.jpg';
    document.getElementById(ImageId1).src = ImagesFolderVD + '/Event/' + DateStringInverse + '-' + ProjectEventId + '-' + '1.jpg';
    document.getElementById(ImageId2).src = ImagesFolderVD + '/Event/' + DateStringInverse + '-' + ProjectEventId + '-' + '2.jpg';

    ShowReport('ProjectEventEditModalDialogReportId');
}


function ProjectEventEdit(ProjectEventId) {

    //ActionBtnMarginSpin(ActionBtnId);

    var DateString = ElementDateStringFromDatePickerGet('DhmValueId2');
    var EventCategoryId = ElementDropDownListValueGet('EventCategoryId2');
    var EventComment = ElementValueGet('EventCommentId2');

    var files = $("#FileId2").get(0).files;
    var data = new FormData();
    for (var i = 0; i < files.length; i++) {
        data.append("FileId2", files[i]);
    };

    data.append("ProjectEventId", ProjectEventId);
    data.append("DateString", DateString);
    data.append("EventCategoryId", EventCategoryId);
    data.append("EventComment", EventComment);

    $.ajax({
        url: "/Project/ProjectEventEdit",
        method: "POST",
        dataType: "json",
        contentType: false,
        processData: false,
        data: data,
        success: function (data) {
            ProjectEventsDisplay();
        }
    });
}


function ProjectStepsSecGet(DefaultValue, Index) {

    $('#StepId' + Index).empty();

    var ProjectId = GetElementValue('ProjectId' + Index);

    var item = document.getElementById('StepId' + Index);
    item.options.length = 0;
    var node = document.createElement("option");
    node.value = 0;
    var textnode = document.createTextNode("Select Etape");
    node.appendChild(textnode);
    item.appendChild(node);
    $.get("/Project/ProjectStepsSecGet", { Input: ProjectId }, function (data) {
        $.each(data, function (index, row) {
            var node = document.createElement("option");
            node.value = row.StepId;
            var textnode = document.createTextNode(row.StepName);
            node.appendChild(textnode);
            item.appendChild(node);
        });
        for (var j = 0, len = item.options.length; j < len; j++) {
            var opt = item.options[j];
            if (opt.value == DefaultValue) {
                item.options[j].selected = 'selected';
                break;
            }
        };
    });
    //ShowReport('PluginId' + Index + 'Parent');

    //if (Index == '') {
    //    CollabActionDisplay('0');
    //}
}


function ProjectDisciplinesSecGet(DefaultValue, Index) {

    $('#DisciplineId' + Index).empty();

    var ProjectId = GetElementValue('ProjectId' + Index);

    var item = document.getElementById('DisciplineId' + Index);
    item.options.length = 0;
    var node = document.createElement("option");
    node.value = 0;
    var textnode = document.createTextNode("Select Discipline");
    node.appendChild(textnode);
    item.appendChild(node);
    $.get("/Project/ProjectDisciplinesSecGet", { Input: ProjectId }, function (data) {
        $.each(data, function (index, row) {
            var node = document.createElement("option");
            node.value = row.DisciplineId;
            var textnode = document.createTextNode(row.DisciplineName);
            node.appendChild(textnode);
            item.appendChild(node);
        });
        for (var j = 0, len = item.options.length; j < len; j++) {
            var opt = item.options[j];
            if (opt.value == DefaultValue) {
                item.options[j].selected = 'selected';
                break;
            }
        };
    });
    //ShowReport('PluginId' + Index + 'Parent');

    //if (Index == '') {
    //    CollabActionDisplay('0');
    //}
}

function ProjectPhasesSecGet(DefaultValue, Index) {

    $('#PhaseId' + Index).empty();

    var ProjectId = GetElementValue('ProjectId' + Index);

    var item = document.getElementById('PhaseId' + Index);
    item.options.length = 0;
    var node = document.createElement("option");
    node.value = 0;
    var textnode = document.createTextNode("Select Phase");
    node.appendChild(textnode);
    item.appendChild(node);
    $.get("/Project/ProjectPhasesSecGet", { Input: ProjectId }, function (data) {
        $.each(data, function (index, row) {
            var node = document.createElement("option");
            node.value = row.PhaseId;
            var textnode = document.createTextNode(row.PhaseName);
            node.appendChild(textnode);
            item.appendChild(node);
        });
        for (var j = 0, len = item.options.length; j < len; j++) {
            var opt = item.options[j];
            if (opt.value == DefaultValue) {
                item.options[j].selected = 'selected';
                break;
            }
        };
    });
    //ShowReport('PluginId' + Index + 'Parent');

    //if (Index == '') {
    //    CollabActionDisplay('0');
    //}
}


function ProjectSubPhasesSecGet(DefaultValue, Index) {

    $('#SubPhaseId' + Index).empty();

    var ProjectId = GetElementValue('ProjectId' + Index);

    var item = document.getElementById('SubPhaseId' + Index);
    item.options.length = 0;
    var node = document.createElement("option");
    node.value = 0;
    var textnode = document.createTextNode("Select Sous-phase");
    node.appendChild(textnode);
    item.appendChild(node);
    $.get("/Project/ProjectSubPhasesSecGet", { Input: ProjectId }, function (data) {
        $.each(data, function (index, row) {
            var node = document.createElement("option");
            node.value = row.SubPhaseId;
            var textnode = document.createTextNode(row.SubPhaseName);
            node.appendChild(textnode);
            item.appendChild(node);
        });
        for (var j = 0, len = item.options.length; j < len; j++) {
            var opt = item.options[j];
            if (opt.value == DefaultValue) {
                item.options[j].selected = 'selected';
                break;
            }
        };
    });
    //ShowReport('PluginId' + Index + 'Parent');

    //if (Index == '') {
    //    CollabActionDisplay('0');
    //}
}

function ProjectZonesSecGet(DefaultValue, Index) {

    $('#ZoneId' + Index).empty();

    var ProjectId = GetElementValue('ProjectId' + Index);

    var item = document.getElementById('ZoneId' + Index);
    item.options.length = 0;
    var node = document.createElement("option");
    node.value = 0;
    var textnode = document.createTextNode("Select Zone");
    node.appendChild(textnode);
    item.appendChild(node);
    $.get("/Project/ProjectZonesSecGet", { Input: ProjectId }, function (data) {
        $.each(data, function (index, row) {
            var node = document.createElement("option");
            node.value = row.ZoneId;
            var textnode = document.createTextNode(row.ZoneName);
            node.appendChild(textnode);
            item.appendChild(node);
        });
        for (var j = 0, len = item.options.length; j < len; j++) {
            var opt = item.options[j];
            if (opt.value == DefaultValue) {
                item.options[j].selected = 'selected';
                break;
            }
        };
    });
    //ShowReport('PluginId' + Index + 'Parent');

    //if (Index == '') {
    //    CollabActionDisplay('0');
    //}
}


function ProjectOnChangeGet(DefaultValue, Index) {
    ProjectBuildingsSecGet(DefaultValue, Index);
    ProjectStepsSecGet(DefaultValue, Index);
    ProjectDisciplinesSecGet(DefaultValue, Index);
    ProjectPhasesSecGet(DefaultValue, Index);
    ProjectZonesSecGet(DefaultValue, Index);
    ProjectLotsSecGet(DefaultValue, Index);

    ProjectSubLotsSecGet(DefaultValue, Index);
    ProjectSubPhasesSecGet(DefaultValue, Index);    
}


function ProjectProgressFromInputSave(Id, DateString, ActivityId) {

    //var ActionBtnId = 'ProjectProgressFromInputSaveBtnId' + Id;
    //var Icon = 'far fa-check-circle';
    //var IsMargin = false;

    var ProgressLastUpdate = ElementValueGet('ProgressLastUpdateId' + Id);

    var obj = {};
    obj.DateString = DateString;
    obj.ActivityId = ActivityId;
    obj.ProgressLastUpdate = ProgressLastUpdate;

    //ActionSpin(ActionBtnId, IsMargin);

    $.ajax({
        url: "/Project/ProjectProgressionUpdate",
        method: "POST",
        data: JSON.stringify(obj),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            //ActionBtnSet(ActionBtnId, Icon, IsMargin);

            //progressBar
            var ProgressValue = ((ProgressLastUpdate / 100) * 100).toFixed(2);
            var ProgressBarPlanIdElement = $('#ProgressBarId' + Id);
            if (ProgressBarPlanIdElement) {
                ProgressBarPlanIdElement.attr('style', 'width: ' + ProgressValue + '%; background-color:#09c70d');
            }

            //ProgressPercent
            var ProgressPercent = ProgressValue.toString() + '%';
            var ProgressPercentPlanIdElement = $('#ProgressPercentId' + Id);
            if (ProgressPercentPlanIdElement) {
                ProgressPercentPlanIdElement.text(ProgressPercent);
            }
        }
    });
}

function ProjectProgressExport(DateString, ProjectId, BuildingId, BlockId, SubBlockId, StageId, LotId, StepId, DisciplineId, PhaseId, ZoneId, SubLotId, SubPhaseId, FileType) {

    var PrintLink = '/Project/ProjectProgressExport?' +
        'DateString=' + DateString +
        '&ProjectId=' + ProjectId +
        '&BuildingId=' + BuildingId +
        '&BlockId=' + BlockId +
        '&SubBlockId=' + SubBlockId +
        '&StageId=' + StageId +
        '&LotId=' + LotId +
        '&StepId=' + StepId +
        '&DisciplineId=' + DisciplineId +
        '&PhaseId=' + PhaseId +
        '&ZoneId=' + ZoneId +
        '&SubLotId=' + SubLotId +
        '&SubPhaseId=' + SubPhaseId +
        '&FileType=' + FileType;

    NavigateTo(PrintLink, true);
}

function ProjectAdminFunctionLotsDisplay() {

    var ActionBtnId = 'ParamActionBtnId0';
    var Icon = 'fas fa-eye';
    var IsMargin = true;

    var ProjectId = ElementDropDownListValueGet('ProjectId');
    var BuildingId = ElementDropDownListValueGet('BuildingId');
    var LotId = ElementDropDownListValueGet('LotId');
    var FunctionCategoryId = ElementDropDownListValueGet('FunctionCategoryId');
    var FunctionId = ElementDropDownListValueGet('FunctionId');

    ProjectAdminFunctionLotsGet(ActionBtnId, Icon, IsMargin, ProjectId, BuildingId, LotId, FunctionCategoryId, FunctionId);
}


function ProjectAdminFunctionLotsGet(ActionBtnId, Icon, IsMargin, ProjectId, BuildingId, LotId, FunctionCategoryId, FunctionId) {

    //Spin
    ActionSpin(ActionBtnId, IsMargin);

    var Pattern = 'ProjectAdminFunctionLots';
    var PatternTableId = Pattern + 'TableId';
    var PatternTableReportId = Pattern + 'TableReportId';

    HideReport(PatternTableReportId);

    $('#' + PatternTableId).DataTable().destroy();;
    $('#' + PatternTableId).DataTable({
        "scrollY": '700px',
        "scrollCollapse": true,
        "scrollX": true,
        "initComplete": function (settings, json) {
            HideReport(Pattern + 'TableCardHeaderId');
            ShowReport(PatternTableReportId);
            ActionBtnSet(ActionBtnId, Icon, IsMargin);
        },
        "ajax": {
            "url": "/Project/ProjectAdminFunctionLotsGet",
            "type": "GET",
            "datatype": "json",
            "data": {
                ProjectId: ProjectId,
                BuildingId: BuildingId, 
                LotId: LotId, 
                FunctionCategoryId: FunctionCategoryId,
                FunctionId: FunctionId
            }
        },
        "columns": [
            { "data": "ProjectName" },//0
            { "data": "BuildingName" },//1
            { "data": "LotName" },//2
            { "data": "FunctionName" },//3

            { "data": "FunctionLotId" },//4 Delete
        ],
        "columnDefs": [
            { "width": "3%", "className": "text-left", "targets": 0 },
            { "width": "3%", "className": "text-left", "targets": 1 },
            { "width": "3%", "className": "text-left", "targets": 2 },
            { "width": "3%", "className": "text-left", "targets": 3 },

            { "width": "3%", "className": "text-center", "targets": 4 },

            { "targets": 0, "render": function (data, type, row) { return data; } },
            { "targets": 1, "render": function (data, type, row) { return data; } },
            { "targets": 2, "render": function (data, type, row) { return data; } },
            { "targets": 3, "render": function (data, type, row) { return data; } },

            { "targets": 4, "render": function (data, type, row) { return DataTableGetButton('ProjectAdminFunctionLotsDelete', data, 'far fa-trash-alt', 'fe1200'); } },
        ],
        "iDisplayLength": 20,
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
        "bFilter": true,
        "autoWidth": true,
        "searching": true,
        "lengthChange": true,
        "showNEntries": true,
        "bInfo": true,
        "bPaginate": true,
        "ordering": false
    });
}

function ProjectAdminFunctionLotsAllAdd() {
    //Set action button
    var ActionBtnId = 'ParamActionBtnId1';
    var Icon = ParamActionIconAddGet();
    var IsMargin = true;

    //Get input values
    var ProjectId = ElementDropDownListValueGet('ProjectId');
    var BuildingId = ElementDropDownListValueGet('BuildingId');
    var LotId = ElementDropDownListValueGet('LotId');
    var FunctionCategoryId = ElementDropDownListValueGet('FunctionCategoryId');
    var FunctionId = ElementDropDownListValueGet('FunctionId');


    if (ProjectId != '0') {

        ParamMessageReset();

        //Spin
        ActionSpin(ActionBtnId, IsMargin);

        //Insert
        var obj = {};
        obj.ProjectId = ProjectId;
        obj.BuildingId = BuildingId;
        obj.LotId = LotId;
        obj.FunctionCategoryId = FunctionCategoryId;
        obj.FunctionId = FunctionId;

        $.ajax({
            url: "/Project/ProjectAdminFunctionLotsAllAdd",
            method: "POST",
            data: JSON.stringify(obj),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {
                ActionBtnSet(ActionBtnId, Icon, IsMargin);
                ProjectAdminFunctionLotsDisplay();
            },
            error: function (request, status, error) {
                alert('Error!');
            }
        });

        //Connection
        //NotiConnectionIdUpdate('Project-Administration-Ajouter un étage');
    }
    else {
        ParamMessageErrorDisplay('Project, Lot and Category are mandatory!')
    }
}

function ProjectAdminFunctionLotsDelete(FunctionLotId) {

    var ActionBtnId = 'ProjectAdminFunctionLotsDeleteBtnId' + FunctionLotId;
    var Icon = 'fas fa-minus-circle';
    var IsMargin = false;

    ActionSpin(ActionBtnId, IsMargin);

    var obj = {};
    obj.FunctionLotId = FunctionLotId;

    $.ajax({
        url: "/Project/ProjectAdminFunctionLotsDelete",
        method: "POST",
        data: JSON.stringify(obj),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            ActionBtnSet(ActionBtnId, Icon, IsMargin);
        }
    });
}

function ProjectAdminUserPhasesDisplay() {

    var ActionBtnId = 'ParamActionBtnId0';
    var Icon = 'fas fa-eye';
    var IsMargin = true;

    var ProjectId = ElementDropDownListValueGet('ProjectId');
    var PhaseId = ElementDropDownListValueGet('PhaseId');
    var UserId = ElementDropDownListValueGet('UserIdProject');

    ProjectAdminUserPhasesGet(ActionBtnId, Icon, IsMargin, ProjectId, PhaseId, UserId);
}


function ProjectAdminUserPhasesGet(ActionBtnId, Icon, IsMargin, ProjectId, PhaseId, UserId) {

    //Spin
    ActionSpin(ActionBtnId, IsMargin);

    var Pattern = 'ProjectAdminUserPhases';
    var PatternTableId = Pattern + 'TableId';
    var PatternTableReportId = Pattern + 'TableReportId';

    HideReport(PatternTableReportId);

    $('#' + PatternTableId).DataTable().destroy();;
    $('#' + PatternTableId).DataTable({
        "initComplete": function (settings, json) {
            ShowReport(PatternTableReportId);
            ActionBtnSet(ActionBtnId, Icon, IsMargin);
        },
        "ajax": {
            "url": "/Project/ProjectAdminUserPhasesGet",
            "type": "GET",
            "datatype": "json",
            "data": {
                ProjectId: ProjectId,
                PhaseId: PhaseId,
                UserId: UserId
            }
        },
        "columns": [
            { "data": "ProjectName" },//0
            { "data": "PhaseName" },//1
            { "data": "UserName" },//2

            { "data": "UserPhaseId" },//3 Delete
        ],
        "columnDefs": [
            { "width": "3%", "className": "text-left", "targets": 0 },
            { "width": "3%", "className": "text-left", "targets": 1 },
            { "width": "3%", "className": "text-left", "targets": 2 },

            { "width": "3%", "className": "text-center", "targets": 3 },

            { "targets": 0, "render": function (data, type, row) { return data; } },
            { "targets": 1, "render": function (data, type, row) { return data; } },
            { "targets": 2, "render": function (data, type, row) { return data; } },

            { "targets": 3, "render": function (data, type, row) { return DataTableGetButton('ProjectAdminUserPhasesDelete', data, 'far fa-trash-alt', 'fe1200'); } },
        ],
        "iDisplayLength": 20,
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
        "bFilter": true,
        "autoWidth": true,
        "searching": true,
        "lengthChange": true,
        "showNEntries": true,
        "bInfo": true,
        "bPaginate": true,
        "ordering": false
    });
}


function ProjectAdminUserPhasesAllAdd() {

    //Set action button
    var ActionBtnId = 'ParamActionBtnId1';
    var Icon = ParamActionIconAddGet();
    var IsMargin = true;

    //Get input values
    var ProjectId = ElementDropDownListValueGet('ProjectId');
    var PhaseId = ElementDropDownListValueGet('PhaseId');
    var UserId = ElementDropDownListValueGet('UserIdProject');

    if (ProjectId != '0' && UserId != '0') {

        ParamMessageReset();

        //Spin
        ActionSpin(ActionBtnId, IsMargin);

        //Insert
        var obj = {};
        obj.ProjectId = ProjectId;
        obj.PhaseId = PhaseId;
        obj.UserId = UserId;

        $.ajax({
            url: "/Project/ProjectAdminUserPhasesAllAdd",
            method: "POST",
            data: JSON.stringify(obj),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {
                ActionBtnSet(ActionBtnId, Icon, IsMargin);
                ProjectAdminUserPhasesDisplay();
            }
        });

        //Connection
        //NotiConnectionIdUpdate('Project-Paramétrage-Ajouter une liaison utilisateur-projets');
    }
    else {
        ParamMessageErrorDisplay('Project and user are mandatory')
    }
}


function ProjectAdminUserPhasesDelete(UserPhaseId) {

    var ActionBtnId = 'ProjectAdminUserPhasesDeleteBtnId' + UserPhaseId;
    var Icon = 'fas fa-minus-circle';
    var IsMargin = false;

    ActionSpin(ActionBtnId, IsMargin);

    var obj = {};
    obj.UserPhaseId = UserPhaseId;

    $.ajax({
        url: "/Project/ProjectAdminUserPhasesDelete",
        method: "POST",
        data: JSON.stringify(obj),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            ActionBtnSet(ActionBtnId, Icon, IsMargin);
        }
    });

}


function ProjectAdminFunctionDisplay() {

    var ActionBtnId = 'ParamActionBtnId0';
    var Icon = 'fas fa-eye';
    var IsMargin = true;

    var FunctionCategoryId = ElementDropDownListValueGet('FunctionCategoryId');
    var FunctionTypeId = ElementDropDownListValueGet('FunctionTypeId');
    var FunctionId = ElementDropDownListValueGet('FunctionId');

    ProjectAdminFunctionGet(ActionBtnId, Icon, IsMargin, FunctionCategoryId, FunctionTypeId, FunctionId);
}


function ProjectAdminFunctionGet(ActionBtnId, Icon, IsMargin, FunctionCategoryId, FunctionTypeId, FunctionId) {

    //Spin
    ActionSpin(ActionBtnId, IsMargin);

    var Pattern = 'ProjectAdminFunction';
    var PatternTableId = Pattern + 'TableId';
    var PatternTableReportId = Pattern + 'TableReportId';

    HideReport(PatternTableReportId);

    $('#' + PatternTableId).DataTable().destroy();;
    $('#' + PatternTableId).DataTable({
        "initComplete": function (settings, json) {
            ShowReport(PatternTableReportId);
            ActionBtnSet(ActionBtnId, Icon, IsMargin);
        },
        "ajax": {
            "url": "/Project/ProjectAdminFunctionGet",
            "type": "GET",
            "datatype": "json",
            "data": {
                FunctionCategoryId: FunctionCategoryId,
                FunctionTypeId: FunctionTypeId,
                FunctionId: FunctionId
            }
        },
        "columns": [
            { "data": "FunctionCategoryName" },//0
            { "data": "FunctionTypeName" },//1
            { "data": "FunctionName" },//2 

            { "data": "FunctionId" },//3 Edit
            { "data": "FunctionId" },//4 Delete
        ],
        "columnDefs": [
            { "width": "3%", "className": "text-left", "targets": 0 },
            { "width": "3%", "className": "text-left", "targets": 1 },
            { "width": "3%", "className": "text-left", "targets": 2 },

            { "width": "3%", "className": "text-center", "targets": 3 },
            { "width": "3%", "className": "text-center", "targets": 4 },

            { "targets": 0, "render": function (data, type, row) { return data; } },
            { "targets": 1, "render": function (data, type, row) { return data; } },
            { "targets": 2, "render": function (data, type, row) { return data; } },

            {
                "targets": 3, "render": function (data, type, row) {

                    var PatternForm = 'Edit';
                    var Icon = 'fas fa-edit';
                    var Label = '';
                    var RowId = data;

                    var OnClick = 'ProjectAdminFunctionFormLoad(' +
                        row['FunctionId'] + ', ' +
                        row['FunctionCategoryId'] + ', ' +
                        row['FunctionTypeId'] + ', ' +
                        '\'' + row['FunctionName'] + '\')';

                    //var RowId = '';
                    return DataTableFormBtnIdGet(Pattern, PatternForm, RowId, Label, OnClick, Icon);
                }
            },
            { "targets": 4, "render": function (data, type, row) { return DataTableGetButton('ProjectAdminFunctionDelete', data, 'far fa-trash-alt', 'fe1200'); } },
        ],
        "iDisplayLength": 20,
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
        "bFilter": true,
        "autoWidth": true,
        "searching": true,
        "lengthChange": true,
        "showNEntries": true,
        "bInfo": true,
        "bPaginate": true,
        "ordering": false
    });
}


function ProjectAdminFunctionAdd() {
    //Set action button
    var ActionBtnId = ParamActionBtnIdAddGet();
    var Icon = ParamActionIconAddGet();
    var IsMargin = true;

    //Get input values
    var Name = ElementValueGet('NameId');
    var FunctionCategoryId = ElementDropDownListValueGet('FunctionCategoryId');
    var FunctionTypeId = ElementDropDownListValueGet('FunctionTypeId');

    if (Name != '' && FunctionCategoryId != '0' && FunctionTypeId != '0') {

        ParamMessageReset();

        //Spin
        ActionSpin(ActionBtnId, IsMargin);

        //Insert
        var obj = {};        
        obj.FunctionCategoryId = FunctionCategoryId;
        obj.FunctionTypeId = FunctionTypeId;
        obj.Name = Name;

        $.ajax({
            url: "/Project/ProjectAdminFunctionAdd",
            method: "POST",
            data: JSON.stringify(obj),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {
                ActionBtnSet(ActionBtnId, Icon, IsMargin);
                ProjectAdminFunctionDisplay();
                ElementInputSet('NameId', '');
                ElementInputSet('CodeId', '');
                ElementInputSet('CommentId', '');
            }
        });

        //Connection
        NotiConnectionIdUpdate('Project-Administration-Ajouter un bâtiment');
    }
    else {
        ParamMessageErrorDisplay('Certains champs sont obligatoire')
    }
}


function ProjectAdminFunctionDelete(FunctionId) {

    var ActionBtnId = 'ProjectAdminFunctionDeleteBtnId' + FunctionId;
    var Icon = 'fas fa-minus-circle';
    var IsMargin = false;

    ActionSpin(ActionBtnId, IsMargin);

    var obj = {};
    obj.FunctionId = FunctionId;

    $.ajax({
        url: "/Project/ProjectAdminProjectFunctionDelete",
        method: "POST",
        data: JSON.stringify(obj),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            ActionBtnSet(ActionBtnId, Icon, IsMargin);
        }
    });
}


function ProjectAdminFunctionFormLoad(FunctionId, FunctionCategoryId, FunctionTypeId, FunctionName) {

    HideReport('ProjectAdminFunctionEditModalDialogReportId');

    ElementDropDownListSet('FunctionCategoryId4', FunctionCategoryId);
    ElementDropDownListSet('FunctionTypeId4', FunctionTypeId);
    ElementValueSet('NameId4', FunctionName);

    
    //action
    var Pattern = 'ProjectAdminFunctionEdit';
    var Label = 'Save';
    var Icon = 'far fa-save';
    var OnClick = 'ProjectAdminFunctionEdit(' + FunctionId + ')';
    ModalActionBtnGet(Pattern, Label, Icon, OnClick);
    
    ShowReport('ProjectAdminFunctionEditModalDialogReportId');
}


function ProjectAdminFunctionEdit(FunctionId) {

    var FunctionCategoryId = ElementDropDownListValueGet('FunctionCategoryId4');
    var FunctionTypeId = ElementDropDownListValueGet('FunctionTypeId4');
    var FunctionName = GetElementValue('NameId4');

    //Edit
    var obj = {};
    obj.FunctionId = FunctionId;
    obj.FunctionCategoryId = FunctionCategoryId;
    obj.FunctionTypeId = FunctionTypeId;
    obj.FunctionName = FunctionName;
    
    $.ajax({
        url: "/Project/ProjectAdminFunctionEdit",
        method: "POST",
        data: JSON.stringify(obj),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            ProjectAdminFunctionDisplay();
        }
    });
}


//Charts
function ProjectChartJsSpiDisplay(Title, PatternChart, labels, data1, label1, data2, label2, IsFill) {
    var fontSize = 14;
    var padding = 20;
    if (screen.width < 400) {
        fontSize = 10;
        padding = 17;
    }

    HideReport(PatternChart + 'ChartReportId');

    $('#' + PatternChart + 'CanevasIdParent').replaceWith('<div id="' + PatternChart + 'CanevasIdParent" class="chart-area">' +
        '<canvas id = "' + PatternChart + 'CanevasId" height = "200" class= "box-cl" ></canvas>' +
        '</div>');

    new Chart(document.getElementById(PatternChart + 'CanevasId').getContext("2d"), {
        type: 'line',
        data: {
            labels: labels,
            datasets: [
                {
                    label: label1,
                    data: data1,
                    fill: IsFill,
                    backgroundColor: 'rgba(209,209,214,0.2)',
                    borderColor: 'rgba(209,209,214,1)',
                    borderWidth: 1
                },
                {
                    label: label2,
                    data: data2,
                    fill: IsFill,
                    backgroundColor: 'rgba(7,98,250,0.2)',
                    borderColor: 'rgba(7,98,250,1)',
                    borderWidth: 1
                }
            ]
        },
        options: {

            title: {
                display: true,
                text: Title,
                fontWeight: 400,
                fontSize: fontSize,
            },
            legend: {
                position: 'bottom',
                labels: {
                    fontColor: 'rgb(84, 84, 84)',
                    fontSize: fontSize,
                    usePointStyle: true,
                    padding: padding
                }
            },
            tooltips: {
                enabled: false
            },
            plugins: {
                datalabels: {
                    //formatter: (value, ctx) => {
                    //    let sum = 0;
                    //    let dataArr = ctx.chart.data.datasets[0].data;
                    //    dataArr.map(data => {
                    //        sum += data;
                    //    });
                    //    let percentage = (value * 100 / sum).toFixed(2) + "%";
                    //    return percentage;
                    //},
                    color: 'rgb(255, 255, 255, 0.0)',
                }
            }
        },
    });
    ShowReport(PatternChart + 'ChartReportId');
}
