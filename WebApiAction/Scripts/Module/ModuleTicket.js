function CollabAllReportsHide() {
    HideReport('HomeReportId');
    HideReport('MenuReportId');
    HideReport('Page0_PageReportId');
    HideReport('ParamReportId');

    HideTableReport('CommMenu');
    HideTableReport('CommFeature');
    HideTableReport('HomeUpdateAdd');
    HideTableReport('CollabAction');
    HideTableReport('CollabAction1');
    HideTableReport('CollabTeam');
    HideTableReport('CollabAdminMember');
    HideTableReport('CollabTaskTeams');
    HideTableReport('CollabDetail');

    HideReport('Page0_PageReportId');
    HideReport('Page3_PageReportId');
    HideReport('Page4_PageReportId');
    HideReport('Page5_PageReportId');
    HideReport('Page6_PageReportId');
}

function CollabAllParametersHide() {
    HideParent('ClientNameId');
    HideParent('KeywordId');

    HideParent('ModuleId');
    HideParent('PluginId');
    HideParent('EmergencyId');
    HideParent('ChannelId');
    HideParent('DhmId');

    HideParent('UpdateStatusId');
    HideParent('MessageId');
    HideParent('TeamNameId');
    HideParent('FileId');
    HideParent('TeamId');
    HideParent('NameId');
    HideParent('VersionId');
    HideParent('HandledById');
    HideParent('IsToNotifyId');
    HideParent('ServerId');
    HideParent('AppId');

    HideParent('DhmValueNeedId');
    HideParent('DhmValueValidId');
    HideParent('DhmValueRealizeId');

    HideParent('QuantityPMId');
    HideParent('QuantityDevId');

    HideParent('ParamId');
    HideParent('UserIdAdmin');    

    HideParent('InfoSubTypeId');
    HideParent('InfoStatusId');
    HideParent('InfoSubTypeId');
    HideParent('AxleIdExpert');
    HideParent('AxleSenseId');
    HideParent('PkId');
    HideParent('PmId');

    HideReport('ParamActionContainerId0');
    HideReport('ParamActionContainerId1');
    HideReport('ParamActionContainerId2');
}

function CollabHomeOpen() {

    //Hide all
    CollabAllReportsHide();
    CollabAllParametersHide();
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
    CommMenusGet('50');

    //Fill
    var PluginId = '0';
    var Index = '';
    HtmlDropDownListNameOnlyLabelFill('EmergencyId', '0', '/Collab/CollabEmergenciesGet', 'EmergencyId', 'EmergencyName', 'Sélectionner Urgence');
    HtmlDropDownListNameOnlyLabelFill('EmergencyId1', '0', '/Collab/CollabEmergenciesGet', 'EmergencyId', 'EmergencyName', 'Sélectionner Urgence');
    HtmlDropDownListNameOnlyLabelFill('UpdateStatusId', '0', '/Collab/CollabUpdateStatusGet', 'UpdateStatusId', 'UpdateStatusName', 'Sélectionner Statut');
    HtmlDropDownListNameOnlyLabelFill('UpdateStatusId1', '0', '/Collab/CollabUpdateStatusGet', 'UpdateStatusId', 'UpdateStatusName', 'Sélectionner Statut');
    HtmlDropDownListNameOnlyLabelFill('TeamId', 0, '/Collab/CollabTeamsGet', 'TeamId', 'TeamName', 'Sélectionner Groupe');
    HtmlDropDownListNameOnlyLabelFill('TeamId1', 0, '/Collab/CollabTeamsGet', 'TeamId', 'TeamName', 'Sélectionner Group');
    HtmlDropDownListNameOnlyLabelFill('VersionId', '0', '/Collab/CollabVersionGet', 'VersionId', 'VersionNumber', 'Sélectionner Version');
    HtmlDropDownListNameOnlyLabelFill('VersionId1', '0', '/Collab/CollabVersionGet', 'VersionId', 'VersionNumber', 'Sélectionner Version');
    HtmlDropDownListNameOnlyLabelFill('HandledById', '0', '/Collab/CollabHandlersGet', 'UserId', 'FullName', 'Sélectionner Destinataire');
    HtmlDropDownListNameOnlyLabelFill('HandledById1', '0', '/Collab/CollabHandlersGet', 'UserId', 'FullName', 'Sélectionner Destinataire');
    HtmlDropDownListNameOnlyLabelFill('ServerId', '0', '/Collab/CollabServersGet', 'ServerId', 'ServerName', 'Sélectionner Serveur');
    HtmlDropDownListNameOnlyLabelFill('ServerId1', '0', '/Collab/CollabServersGet', 'ServerId', 'ServerName', 'Sélectionner Serveur');
    HtmlDropDownListNameOnlyLabelFill('ChannelId', '0', '/Collab/CollabChannelsGet', 'ChannelId', 'ChannelName', 'Sélectionner Canal');
    HtmlDropDownListNameOnlyLabelFill('ChannelId1', '0', '/Collab/CollabChannelsGet', 'ChannelId', 'ChannelName', 'Sélectionner Canal');

    HtmlDropDownListNameOnlyWithInputLabelFill('AppId', '0', '/Collab/CollabAppsGet', 'AppId', 'AppName', 0, 'Sélectionner Application');
    HtmlDropDownListNameOnlyWithInputLabelFill('AppId1', '0', '/Collab/CollabAppsGet', 'AppId', 'AppName', 0, 'Sélectionner Application');
    HtmlDropDownListWithTwoInputsNameOnlyLabelFill('ModuleId1', '0', '/Collab/CollabModulesGet', 'ModuleId', 'ModuleName', 0, 0, 'Sélectionner Module');
    HtmlDropDownListNameOnlyWithInputLabelFill('PluginId1', '0', '/Collab/CollabPluginsGet', 'PluginId', 'PluginName', 0, 'Sélectionner Menu');
    HtmlDropDownListWithInputNameOnlyLabelFill('ParamId', '0', '/Collab/CollabParamsGet', 'ParamId', 'ParamName', '22', 'Sélectionner Configuration');//

    HtmlDropDownListNameOnlyLabelFill('InfoTypeId', '0', '/Info/InfoTypesGet', 'InfoTypeId', 'InfoTypeName', 'Sélectionner type');
    HtmlDropDownListNameOnlyLabelFill('InfoStatusId', '0', '/Info/InfoStatusGet', 'InfoStatusId', 'InfoStatusName', 'Sélectionner Status');
    HtmlDropDownListNameOnlyLabelFill('InfoSubTypeId', '0', '/Info/InfoSubTypesGet', 'InfoSubTypeId', 'InfoSubTypeName', 'Sélectionner Sous-type');
    HtmlDropDownListNameOnlyLabelFill('AxleId', '0', '/Info/InfoAxlesGet', 'AxleIdExpert', 'AxleNameExpert', 'Sélectionner Axe');
    HtmlDropDownListNameOnlyLabelFill('AxleSensId', '0', '/Info/AxleSensGet', 'AxleSensId', 'AxleSensName', 'Sélectionner Sens');

    //Onchange
    //ElementOnChangeSet('KeywordId', "CollabActionDisplay('0')");    
    //ElementOnChangeSet('PluginId', "CollabActionDisplay('0')");
    //ElementOnChangeSet('EmergencyId', "CollabActionDisplay('0')");
    //ElementOnChangeSet('UpdateStatusId', "CollabActionDisplay('0')");
    //ElementOnChangeSet('ChannelId', "CollabActionDisplay('0')");
    //ElementOnChangeSet('TeamId', "CollabActionDisplay('0')");
    //ElementOnChangeSet('VersionId', "CollabActionDisplay('0')");
    //ElementOnChangeSet('HandledById', "CollabActionDisplay('0')");    
    ElementOnChangeSet('ServerId', "CollabPresetGet('')");
    ElementOnChangeSet('ServerId1', "CollabPresetGet('1')"); 
    ElementOnChangeSet('ModuleId', "CollabPluginsGet('0', '')");
    ElementOnChangeSet('ModuleId1', "CollabPluginsGet('0', '')");

    //OnClick    
    ElementOnClickSet('AppId', "CollabModulesGet('0', '')");
    ElementOnClickSet('AppId1', "CollabModulesGet('0', '1')");    
    ElementOnClickSet('tb-tour-id', 'CollabActionTourGet()');

    //Reset
    //ElementDropDownListLabelReset('AppId', 'Sélectionner Application');
    ElementDropDownListLabelReset('ModuleId', 'Sélectionner Module');
    ElementDropDownListLabelReset('PluginId', 'Sélectionner Menu');
    ElementDropDownListLabelReset('UserIdAdmin', 'Sélectionner Admin');

    CollabPresetGet('1');

    //Action
    ParamActionBtnGet(2, 'Initialiser', 'fas fa-power-off', 'CollabActionReset()');

    //style
    RightBarHide();  
    LeftBarHide();
}

function CollabDemandOpen() {

    //Set pattern
    //var Pattern = 'CollabAction';

    //Hide all
    CollabAllReportsHide();
    CollabAllParametersHide();
    MenuBarHighlight(1, 7);

    //Set title
    ParamTitleSet('Créer une demande');

    //Show Parameters
    ShowReport('ParamReportId');

    //Parents    
    ShowParent('MessageId');
   
    //Reset keyword
    CollabActionReset();

    ParamActionBtnGet(0, 'Rechercher', 'fas fa-search', "CollabActionSearch('1')");
    ParamActionBtnGet(1, 'Ajouter', 'fas fa-plus-circle', "CollabDemandAdd()");

    //CollabActionDisplay('0');
}

function CollabDemandAdd() {

    var ActionBtnId = 'ParamActionBtnId1';
    var Icon = 'fas fa-plus-circle btn-icon-m-cl gc-c1-c';

    var IdParent = 1;
    var PluginId = 22;
    var EmergencyId = '0';
    var UpdateStatusId = '0';
    var ChannelId = '0';
    var DhmString = '';
    var UpdateMessage = GetElementValue('MessageId');
    var TeamId = 0;
    var VersionId = '0';
    var HandledBy = '0';
    var IsToNotify = false;

    var DhmValueNeedString = GetDateStringFromDatePicker('DhmValueNeedId');
    var DhmValueValidString = GetDateStringFromDatePicker('DhmValueValidId');
    var DhmValueRealizeString = GetDateStringFromDatePicker('DhmValueRealizeId');

    var QuantityPM = 0;
    var QuantityDev = 0;

    ActionBtnMarginSpin(ActionBtnId);
        
    var files = $("#FileId").get(0).files;
    var data = new FormData();
    for (var i = 0; i < files.length; i++) {
        data.append("FileId", files[i]);
    };

    data.append("IdParent", IdParent);
    data.append("PluginId", PluginId);
    data.append("EmergencyId", EmergencyId);
    data.append("UpdateStatusId", UpdateStatusId);
    data.append("ChannelId", ChannelId);
    data.append("TeamId", TeamId);
    data.append("DhmString", DhmString);
    data.append("UpdateMessage", UpdateMessage);
    data.append("VersionId", VersionId);
    data.append("IsTopBarFix", false);
    data.append("UserId", '0');
    data.append("HandledBy", HandledBy);
    data.append("IsToNotify", IsToNotify);

    data.append("DhmValueNeedString", DhmValueNeedString);
    data.append("DhmValueValidString", DhmValueValidString);
    data.append("DhmValueRealizeString", DhmValueRealizeString);

    data.append("QuantityPM", QuantityPM);
    data.append("QuantityDev", QuantityDev);

    $.connection.hub.start({ jsonp: true }).done(function () {
        data.append("ConnectionId", $.connection.hub.id);
        $.ajax({
            url: "/Collab/CollabActionAdd",
            method: "POST",
            dataType: "json",
            contentType: false,
            processData: false,
            data: data,
            success: function (data) {
                ActionBtnIconMarginSet(ActionBtnId, Icon);
                if (data != '0') {
                    DataTableActionBtnIconSet(ActionBtnId, Icon);
                    CollabActionDisplay(data);
                }
            }
        });
    });
}

function CollabBugOpen() {

    //Set pattern
    //var Pattern = 'CollabAction';

    //Hide all
    CollabAllReportsHide();
    CollabAllParametersHide();
    MenuBarHighlight(1, 7);

    //Set title
    ParamTitleSet('Signaler un bug');

    //Show Parameters
    ShowReport('ParamReportId');

    //Parents
    //ShowParent('KeywordId');
    ShowParent('ServerId');
    ShowParent('AppId');
    ShowParent('ModuleId');
    ShowParent('PluginId');
    //ShowParent('EmergencyId');
    //ShowParent('UpdateStatusId');
    ShowParent('MessageId');
    //ShowParent('UpdateStatusId');
    //ShowParent('TeamId');
    //ShowParent('HandledById');
    //ShowParent('IsToNotifyId');
    ShowParent('FileId');

    //Reset keyword
    CollabActionReset();

    ParamActionBtnGet(0, 'Afficher', 'fas fa-eye', "CollabActionDisplay('1')");
    ParamActionBtnGet(1, 'Ajouter', 'fas fa-plus-circle', "CollabBugAdd('1', '')");
    ParamActionBtnGet(2, 'Initialiser', 'fas fa-power-off', 'CollabActionReset()');

    //CollabActionDisplay('0');
}


function CollabMonitorOpen() {

    //Set pattern
    //var Pattern = 'CollabAction';

    //Hide all
    CollabAllReportsHide();
    CollabAllParametersHide();
    MenuBarHighlight(1, 7);

    //Set title
    ParamTitleSet('Superviser les tickets');

    //Show Parameters
    ShowReport('ParamReportId');

    //Parents
    //ShowParent('KeywordId');
    ShowParent('ServerId');
    ShowParent('AppId');
    ShowParent('ModuleId');
    ShowParent('PluginId');
    ShowParent('EmergencyId');
    ShowParent('UpdateStatusId');
    //ShowParent('MessageId');
    ShowParent('TeamId');
    ShowParent('HandledById');
    //ShowParent('IsToNotifyId');
    //ShowParent('FileId');

    //Reset keyword
    CollabActionReset();

    ParamActionBtnGet(0, 'Afficher', 'fas fa-eye', "CollabActionDisplay('1')");
    //ParamActionBtnGet(1, 'Ajouter', 'fas fa-plus-circle', "CollabBugAdd('1', '')");
    ParamActionBtnGet(2, 'Initialiser', 'fas fa-power-off', 'CollabActionReset()');

    //CollabActionDisplay('0');

    //OnClick
    ElementOnClickSet('ServerId', "CollabAppsGet('', '')");
    ElementOnClickSet('AppId', "CollabModulesGet('', '')");
    ElementOnClickSet('ModuleId', "CollabPluginsGet('', '')");
    //ElementOnClickSet('PluginId', "CollabActionDisplay('1')");
    //ElementOnClickSet('EmergencyId', "CollabActionDisplay('1')");
    //ElementOnClickSet('UpdateStatusId', "CollabActionDisplay('1')");
    //ElementOnClickSet('TeamId', "CollabActionDisplay('1')");
    //ElementOnClickSet('HandledById', "CollabActionDisplay('1')");

    //OnChange
    ElementOnChangeSet('ServerId', "CollabActionDisplay('1')");
    ElementOnChangeSet('AppId', "CollabActionDisplay('1')");
    ElementOnChangeSet('ModuleId', "CollabActionDisplay('1')");
    ElementOnChangeSet('PluginId', "CollabActionDisplay('1')");
    ElementOnChangeSet('EmergencyId', "CollabActionDisplay('1')");
    ElementOnChangeSet('UpdateStatusId', "CollabActionDisplay('1')");
    ElementOnChangeSet('TeamId', "CollabActionDisplay('1')");
    ElementOnChangeSet('HandledById', "CollabActionDisplay('1')");
}


function CollabInfoOpen() {

    //Set pattern
    //var Pattern = 'CollabAction';

    //Hide all
    CollabAllReportsHide();
    CollabAllParametersHide();
    MenuBarHighlight(1, 7);

    //Set title
    ParamTitleSet('Signaler un accident');

    //Show Parameters
    ShowReport('ParamReportId');

    //Parents
    //ShowParent('KeywordId');
    //ShowParent('ServerId');
    //ShowParent('AppId');
    //ShowParent('ModuleId');
    //ShowParent('PluginId');
    ShowParent('EmergencyId');
    //ShowParent('UpdateStatusId');
    ShowParent('MessageId');
    //ShowParent('TeamId');
    //ShowParent('HandledById');
    //ShowParent('IsToNotifyId');
    //ShowParent('FileId');

    ShowParent('InfoSubTypeId');
    ShowParent('InfoStatusId');
    ShowParent('InfoSubTypeId');
    ShowParent('AxleIdExpert');
    ShowParent('AxleSenseId');
    ShowParent('PkId');
    ShowParent('PmId');

    //Reset keyword
    CollabActionReset();

    ParamActionBtnGet(0, 'Afficher', 'fas fa-eye', "CollabActionDisplay('1')");
    //ParamActionBtnGet(1, 'Ajouter', 'fas fa-plus-circle', "CollabBugAdd('1', '')");
    ParamActionBtnGet(2, 'Initialiser', 'fas fa-power-off', 'CollabActionReset()');

    //CollabActionDisplay('0');

    //OnClick
    ElementOnClickSet('ServerId', "CollabAppsGet('', '')");
    ElementOnClickSet('AppId', "CollabModulesGet('', '')");
    ElementOnClickSet('ModuleId', "CollabPluginsGet('', '')");
    //ElementOnClickSet('PluginId', "CollabActionDisplay('1')");
    //ElementOnClickSet('EmergencyId', "CollabActionDisplay('1')");
    //ElementOnClickSet('UpdateStatusId', "CollabActionDisplay('1')");
    //ElementOnClickSet('TeamId', "CollabActionDisplay('1')");
    //ElementOnClickSet('HandledById', "CollabActionDisplay('1')");

    //OnChange
    ElementOnChangeSet('ServerId', "CollabActionDisplay('1')");
    ElementOnChangeSet('AppId', "CollabActionDisplay('1')");
    ElementOnChangeSet('ModuleId', "CollabActionDisplay('1')");
    ElementOnChangeSet('PluginId', "CollabActionDisplay('1')");
    ElementOnChangeSet('EmergencyId', "CollabActionDisplay('1')");
    ElementOnChangeSet('UpdateStatusId', "CollabActionDisplay('1')");
    ElementOnChangeSet('TeamId', "CollabActionDisplay('1')");
    ElementOnChangeSet('HandledById', "CollabActionDisplay('1')");
}

function CollabTeamOpen() {
    CollabAllReportsHide();
    CollabAllParametersHide();
    MenuBarHighlight(2, 7);

    //Reports
    ShowReport('ParamReportId');

    //Parents
    ShowParent('NameId');
    ShowParent('FileId');

    //Actions
    ParamActionBtnGet(0, 'Afficher', 'fas fa-eye', "CollabTeamDisplay()");
    ParamActionBtnGet(1, 'Ajouter', 'fas fa-plus-circle', 'CollabTeamAdd()');

    //Display
    CollabTeamDisplay();
}




function CollabKanbanOpen() {
    CollabAllReportsHide();
    CollabAllParametersHide();
    MenuBarHighlight(3, 7);

    var ActionBtnId = 'ParamActionBtnId0';
    var Icon = 'fas fa-eye';
    ParamActionBtnGet(0, 'Afficher', 'fas fa-eye', "CollabKanbanOpen()");

    ShowReport('ParamReportId');
    ShowReport('ParamActionContainerId');
    HideReport('ParamLigne0Id');
    HideReport('ParamCardHeaderId');
    document.getElementById('ParamCardId').style.border = 'transparent';

    //document.getElementById('ParamActionBtnId').setAttribute("onClick", "HomeUpdateEditDisplay()");
    //$('#ParamTitleId').text("Metter à jour une action");
    //document.getElementById('ParamActionIconId').setAttribute('Class', 'fas fa-redo-alt');
    //$('#ParamActionTextId').text("");
    //ShowReport('ParamActionBtnId');

    //Page
    var HeaderIndex = '3';
    var TimeIndex = '';
    var PageIndex = '';
    ShowReport('Page' + HeaderIndex + TimeIndex + PageIndex + '_PageReportId');
    document.getElementById('Page' + HeaderIndex + TimeIndex + PageIndex + '_PageCardId').style.border = 'transparent';


    $('#' + 'ToDo' + 'TableCardHeaderId h5').text('Actions initialisées');
    $('#' + 'InProgress' + 'TableCardHeaderId h5').text('Actions prises en charges');
    $('#' + 'Review' + 'TableCardHeaderId h5').text('Actions en cours');
    $('#' + 'Complete' + 'TableCardHeaderId h5').text('Actions en instance');

    var Keyword = '';
    var IdParent = 0;
    var ModuleId = '0';
    var PluginId = '0';
    var UpdateStatusId = '0';
    var EmergencyId = '0';
    var ChannelId = '0';
    var VersionId = 0;
    
    var Pattern = '';
    var TeamId = '0';
    var DhmString = '';
    var HomeUpdateId = 0;

    $('#' + ActionBtnId).find('span').attr('class', 'fa fa-spinner fa-spin');
    HideReport('HomeUpdateEditTableReportId');
    
    UpdateStatusId = '02';
    Pattern = 'ToDo';
    CollabActionGet(ActionBtnId, Icon, Pattern, Keyword, IdParent, ModuleId, PluginId, UpdateStatusId, EmergencyId, ChannelId, DhmString, TeamId, HomeUpdateId, VersionId);

    UpdateStatusId = '01';
    Pattern = 'InProgress';
    CollabActionGet(ActionBtnId, Icon, Pattern, Keyword, IdParent, ModuleId, PluginId, UpdateStatusId, EmergencyId, ChannelId, DhmString, TeamId, HomeUpdateId, VersionId);

    UpdateStatusId = '08';
    Pattern = 'Review';
    CollabActionGet(ActionBtnId, Icon, Pattern, Keyword, IdParent, ModuleId, PluginId, UpdateStatusId, EmergencyId, ChannelId, DhmString, TeamId, HomeUpdateId, VersionId);

    UpdateStatusId = '07';
    Pattern = 'Complete';
    CollabActionGet(ActionBtnId, Icon, Pattern, Keyword, IdParent, ModuleId, PluginId, UpdateStatusId, EmergencyId, ChannelId, DhmString, TeamId, HomeUpdateId, VersionId);
}

function CollabChecklistOpen() {
    CollabAllReportsHide();
    CollabAllParametersHide();
    MenuBarHighlight(4, 7);

    var ActionBtnId = 'ParamActionBtnId0';
    var Icon = 'fas fa-eye';

    ParamActionBtnGet(0, 'Afficher', 'fas fa-eye', "CollabKanbanOpen()");

    //ShowReport('ParamReportId');
    //ShowReport('ParamActionContainerId');
    //HideReport('ParamLigne0Id');
    //HideReport('ParamCardHeaderId');
    //document.getElementById('ParamCardId').style.border = 'transparent';

    //document.getElementById('ParamActionBtnId').setAttribute("onClick", "");
    //$('#ParamTitleId').text("Metter à jour une action");
    //document.getElementById('ParamActionIconId').setAttribute('Class', 'fas fa-redo-alt btn-icon-cl gc-c1-cl');
    //$('#ParamActionTextId').text("");
    //ShowReport('ParamActionBtnId');

    //Page
    var HeaderIndex = '4';
    var TimeIndex = '';
    var PageIndex = '';
    ShowReport('Page' + HeaderIndex + TimeIndex + PageIndex + '_PageReportId');
    document.getElementById('Page' + HeaderIndex + TimeIndex + PageIndex + '_PageCardId').style.border = 'transparent';

    $('#' + 'ChecklistDay' + 'TableCardHeaderId h5').text('Actions journalières');
    $('#' + 'ChecklistMonth' + 'TableCardHeaderId h5').text('Actions mensuelles');

    var Keyword = '';
    var IdParent = 0;
    var ModuleId = '0';
    var PluginId = '0';
    var UpdateStatusId = '0';
    var EmergencyId = '0';
    var ChannelId = '0';
    var VersionId = 0;
    
    var Pattern = '';
    var TeamId = '0';

    $('#' + ActionBtnId).find('span').attr('class', 'fa fa-spinner fa-spin');
   // HideReport('HomeUpdateEditTableReportId');

    ModuleId = '08';
    PluginId = '25';
    Pattern = 'ChecklistDay';
    var DhmString = '';
    var HomeUpdateId = 0;

    CollabActionGet(ActionBtnId, Icon, Pattern, Keyword, IdParent, ModuleId, PluginId, UpdateStatusId, EmergencyId, ChannelId, DhmString, TeamId, HomeUpdateId, VersionId);

    ModuleId = '08';
    PluginId = '27';
    Pattern = 'ChecklistMonth';
    CollabActionGet(ActionBtnId, Icon, Pattern, Keyword, IdParent, ModuleId, PluginId, UpdateStatusId, EmergencyId, ChannelId, DhmString, TeamId, HomeUpdateId, VersionId);
}


function CollabCalendarOpen() {
    CollabAllReportsHide();
    CollabAllParametersHide();
    MenuBarHighlight(5, 7);

    ShowReport('Page5_PageReportId');

    CollabCalendarGet();
}

function CollabChannelOpen() {
    CollabAllReportsHide();
    CollabAllParametersHide();
    MenuBarHighlight(6, 7);

    //ShowReport('ParamReportId');
    //ShowReport('ParamActionContainerId');
    //HideReport('ParamLigne0Id');
    //HideReport('ParamCardHeaderId');
    //document.getElementById('ParamCardId').style.border = 'transparent';

    //document.getElementById('ParamActionBtnId0').setAttribute("onClick", "CollabChannelOpen()");
    //$('#ParamTitleId').text("Metter à jour une action");
    //document.getElementById('ParamActionIconId').setAttribute('Class', 'fas fa-redo-alt btn-icon-cl gc-c1-cl');
    //$('#ParamActionTextId').text("");
    //ShowReport('ParamActionBtnId');

    //Page
    var HeaderIndex = '6';
    var TimeIndex = '';
    var PageIndex = '';
    ShowReport('Page' + HeaderIndex + TimeIndex + PageIndex + '_PageReportId');
    document.getElementById('Page' + HeaderIndex + TimeIndex + PageIndex + '_PageCardId').style.border = 'transparent';


    $('#' + 'Call' + 'TableCardHeaderId h5').text('Appels à passer');
    $('#' + 'Email' + 'TableCardHeaderId h5').text('E-mail à envoyer');
    $('#' + 'Meeting' + 'TableCardHeaderId h5').text('Réunions à tenir');
    $('#' + 'Message' + 'TableCardHeaderId h5').text('Messages à envoyer');

    var Keyword = '';
    var IdParent = 0;
    var ModuleId = '0';
    var PluginId = '0';
    var UpdateStatusId = '0';
    var EmergencyId = '0';
    var ChannelId = '0';
    var ActionBtnId = 'ParamActionBtnId0';
    var Icon = 'fas fa-redo-alt';
    var Pattern = '';
    var DhmString = new String('');
    var TeamId = '0';
    var HomeUpdateId = 0;
    var VersionId = 0;

    $('#' + ActionBtnId).find('span').attr('class', 'fa fa-spinner fa-spin btn-icon-cl gc-c1-cl');
    //HideReport('HomeUpdateEditTableReportId');

    ChannelId = '2';
    Pattern = 'Call';
    CollabActionGet(ActionBtnId, Icon, Pattern, Keyword, IdParent, ModuleId, PluginId, UpdateStatusId, EmergencyId, ChannelId, DhmString, TeamId, HomeUpdateId, VersionId);

    ChannelId = '3';
    Pattern = 'Email';
    CollabActionGet(ActionBtnId, Icon, Pattern, Keyword, IdParent, ModuleId, PluginId, UpdateStatusId, EmergencyId, ChannelId, DhmString, TeamId, HomeUpdateId, VersionId);

    ChannelId = '4';
    Pattern = 'Meeting';
    CollabActionGet(ActionBtnId, Icon, Pattern, Keyword, IdParent, ModuleId, PluginId, UpdateStatusId, EmergencyId, ChannelId, DhmString, TeamId, HomeUpdateId, VersionId);

    ChannelId = '5';
    Pattern = 'Message';
    CollabActionGet(ActionBtnId, Icon, Pattern, Keyword, IdParent, ModuleId, PluginId, UpdateStatusId, EmergencyId, ChannelId, DhmString, TeamId, HomeUpdateId, VersionId);
}

function CollabCalendarGet() {
    //<span id="cal-badge-id05092020" class="badge">1</span>

    //var obj = {};
    //obj.PlaylistOrderMax = 7;

    $.ajax({
        url: "/Home/HomeUpdateCalendarGet",
        method: "POST",
        //data: JSON.stringify(obj),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: true,
        success: function (data) {
            jQuery.each(data, function (index, itemData) {
                //var i = 0;
                for (var i = 0; i < itemData.length; i++) {

                    var YearP = itemData[i].YearP;
                    var MonthP = itemData[i].MonthP;
                    var DayP = itemData[i].DayP;
                    var Total = itemData[i].Total;
                    var datestring = new String(GetDigits(DayP, 2) + GetDigits(MonthP, 2) + YearP);


                    var Element = $('#cal-badge-id' + datestring);
                    if (Element != null) {
                        document.getElementById('cal-badge-id' + datestring).innerHTML = Total;
                        //document.getElementById('cal-badge-id05092020').innerHTML = Total;
                    }


                };
            });
        }
    })
}

function CollabActionSearch(IdParent) {

    var HomeUpdateId = 0;
    var VersionId = 0;

    var ModuleId = '0';
    var PluginId = 0;
    var UpdateStatusId = '0';
    var EmergencyId = '0';
    var ChannelId = '0';
    var DhmString = GetDhmStringFromDatePicker('DhmId');
    var TeamId = 0;
    var HandledBy = '0';
    var ServerId = '0';
    var AppId = '0';
    var Keyword = GetElementValue('MessageId');

    var ActionBtnId = 'ParamActionBtnId0';
    var Icon = 'fas fa-eye';
    var Pattern = 'CollabAction';

    if (Keyword == '') {
        CollabActionGet(ActionBtnId, Icon, Pattern, Keyword, IdParent, ModuleId, PluginId, UpdateStatusId, EmergencyId, ChannelId, DhmString, TeamId, HomeUpdateId, VersionId, HandledBy, ServerId, AppId);
    }
    else {
        var ModuleId = '0';
        var PluginId = '0';
        var UpdateStatusId = '0';
        var EmergencyId = '0';
        var ChannelId = '0';
        var DhmString = GetDhmStringFromDatePicker('DhmId');
        var TeamId = '0';
        var HandledBy = '0';
        var ServerId = '0';
        var AppId = '0';
        CollabActionGet(ActionBtnId, Icon, Pattern, Keyword, IdParent, ModuleId, PluginId, UpdateStatusId, EmergencyId, ChannelId, DhmString, TeamId, HomeUpdateId, VersionId, HandledBy, ServerId, AppId);
    }

}

function CollabActionDisplay(IdParent) {

    var HomeUpdateId = 0;
    var VersionId = 0;

    var ModuleId = ElementDropDownListValueGet('ModuleId');
    var PluginId = ElementDropDownListValueGet('PluginId');
    var UpdateStatusId = ElementDropDownListValueGet('UpdateStatusId');
    var EmergencyId = ElementDropDownListValueGet('EmergencyId');        
    var ChannelId = ElementDropDownListValueGet('ChannelId');
    var DhmString = GetDhmStringFromDatePicker('DhmId');
    var TeamId = ElementDropDownListValueGet('TeamId');
    var HandledBy = ElementDropDownListValueGet('HandledById');
    var ServerId = ElementDropDownListValueGet('ServerId');
    var AppId = ElementDropDownListValueGet('AppId');
    var Keyword = GetElementValue('KeywordId');

    var ActionBtnId = 'ParamActionBtnId0';
    var Icon = 'fas fa-eye';
    var Pattern = 'CollabAction';

    if (Keyword == '') {
        CollabActionGet(ActionBtnId, Icon, Pattern, Keyword, IdParent, ModuleId, PluginId, UpdateStatusId, EmergencyId, ChannelId, DhmString, TeamId, HomeUpdateId, VersionId, HandledBy, ServerId, AppId);
    }
    else {
        var ModuleId = '0';
        var PluginId = '0';
        var UpdateStatusId = '0';
        var EmergencyId = '0';
        var ChannelId = '0';
        var DhmString = GetDhmStringFromDatePicker('DhmId');
        var TeamId = '0';
        var HandledBy = '0';
        var ServerId = '0';
        var AppId = '0';
        CollabActionGet(ActionBtnId, Icon, Pattern, Keyword, IdParent, ModuleId, PluginId, UpdateStatusId, EmergencyId, ChannelId, DhmString, TeamId, HomeUpdateId, VersionId, HandledBy, ServerId, AppId);
    }
    
}

function CollabActionGet(ActionBtnId, Icon, Pattern, Keyword, IdParent, ModuleId, PluginId, UpdateStatusId, EmergencyId, ChannelId, DateString, TeamId, HomeUpdateId, VersionId, HandledBy, ServerId, AppId) {

    //Spin
    ActionBtnMarginSpin(ActionBtnId);

    var PatternTableId = Pattern + 'TableId';
    var PatternTableReportId = Pattern + 'TableReportId';

    HideReport(PatternTableReportId);

    $('#' + PatternTableId).DataTable().destroy();;
    $('#' + PatternTableId).DataTable({  
        "scrollY": '790px',
        "scrollCollapse": true,
        "scrollX": true,
        //"searchPanes": {
        //    "viewTotal": true
        //},
        //"dom": 'Plfrtip',
        //"scrollY": '800px',
        //"scrollCollapse": true,
        //"dom": 'Bfrtip',
        //"buttons": [
        //    'excel'
        //],
        "initComplete": function (settings, json) {

            HideReport(Pattern + 'TableCardHeaderId');

            ShowReport(PatternTableReportId);
            ActionBtnIconMarginSet(ActionBtnId, Icon);

            //var table = $('#' + PatternTableId).DataTable({
            //    searchPanes: {
            //        viewTotal: true
            //    },
            //    dom: 'Plfrtip'
            //});
            //$('#' + PatternTableId + ' tfoot th').each(function () {
            //    var title = $(this).text();
            //    $(this).html('<input type="text" placeholder="Search ' + title + '" />');
            //});

            //$('#' + PatternTableId).DataTable().columns().every(function () {
            //    var that = this;

            //    $('input', this.footer()).on('keyup change', function () {
            //        if (that.search() !== this.value) {
            //            that
            //                .search(this.value)
            //                .draw();
            //        }
            //    });
            //});


            //$('#' + PatternTableId + ' tfoot th').each(function () {
            //    var title = $(this).text();
            //    $(this).html('<input type="text" placeholder="Search ' + title + '" />');
            //});

            //var table = $('#' + PatternTableId).DataTable({
            //    searchPanes: {
            //        viewTotal: true
            //    },
            //    dom: 'Plfrtip'
            //});

            //table.columns().every(function () {
            //    var that = this;

            //    $('input', this.footer()).on('keyup change', function () {
            //        if (that.search() !== this.value) {
            //            that
            //                .search(this.value)
            //                .draw();
            //        }
            //    });
            //});

            $('[data-toggle="tooltip"]').tooltip();
        },
        "ajax": {
            "url": "/Collab/CollabActionGet",
            "type": "GET",
            "datatype": "json",
            "data": {
                Keyword: Keyword,
                IdParent: IdParent,
                ModuleId: ModuleId,
                PluginId: PluginId,
                EmergencyId: EmergencyId,
                UpdateStatusId: UpdateStatusId,
                ChannelId: ChannelId,
                DateString: DateString,
                TeamId: TeamId,
                HomeUpdateId: HomeUpdateId,
                VersionId: VersionId,
                HandledBy: HandledBy,
                ServerId: ServerId,
                AppId: AppId
            }
        },
        "columns": [            
            { "data": "DhmModification" },//0
            { "data": "ModuleName" },//1
            { "data": "PluginName" },//2
            { "data": "UpdateMessage" },//3
            { "data": "ImagePath" },//4
            { "data": "Response" },//5

            { "data": "ChannelName" },//6
            { "data": "DhmPlan" },//7 

            { "data": "UpdateStatusName" },//8
            { "data": "EmergencyName" },//9

            { "data": "HomeUpdateId" },//10

            { "data": "HomeUpdateId" },//11

            { "data": "ClientFullName" },//12
            { "data": "SupportFullName" },//13
            { "data": "ResponseFullName" },//14

            { "data": "UpdateMessage" },//15

            { "data": "DhmValueNeed" },//16
            { "data": "DhmValueValid" },//17
            { "data": "DhmValueRealize" },//18

            { "data": "QuantityPM" },//19
            { "data": "ProjectManagerPrice" },//20

            { "data": "QuantityDev" },//21
            { "data": "DeveloperPrice" },//22

            { "data": "TotalPrice" },//23
        ],
        "columnDefs": [
            { "width": "3%", "className": "text-left", "targets": 0 },
            { "width": "3%", "className": "text-left", "targets": 1 },
            { "width": "3%", "className": "text-left", "targets": 2 },
            { "width": "3%", "className": "text-left", "targets": 3 },
            { "width": "3%", "className": "text-left", "targets": 4 },
            { "width": "3%", "className": "text-left", "targets": 5 },

            { "width": "3%", "className": "text-left none", "targets": 6 },
            { "width": "3%", "className": "text-center none", "targets": 7 },

            { "width": "3%", "className": "text-left", "targets": 8 },
            { "width": "3%", "className": "text-left", "targets": 9 },

            { "width": "3%", "className": "text-center", "targets": 10 },
            { "width": "3%", "className": "text-center", "targets": 11 },
            { "width": "3%", "className": "text-left", "targets": 12 },
            { "width": "3%", "className": "text-left", "targets": 13 },
            { "width": "3%", "className": "text-left none", "targets": 14 },

            { "width": "3%", "className": "text-left none", "targets": 15 },

            { "width": "3%", "className": "text-center none", "targets": 16 },
            { "width": "3%", "className": "text-center none", "targets": 17 },
            { "width": "3%", "className": "text-center none", "targets": 18 },

            { "width": "3%", "className": "text-right none", "targets": 19 },
            { "width": "3%", "className": "text-right none", "targets": 20 },

            { "width": "3%", "className": "text-right none", "targets": 21 },
            { "width": "3%", "className": "text-right none", "targets": 22 },

            { "width": "3%", "className": "text-right none", "targets": 23 },

            { "targets": 0, "orderable": false, "render": function (data, type, row) { return GetDateValueFromDataTableDate(data); } },
            { "targets": 1, "render": function (data, type, row) { return DataTableLongTextGet(data, 16); } },
            { "targets": 2, "render": function (data, type, row) { return DataTableLongTextGet(data, 16); } },
            { "targets": 3, "render": function (data, type, row) { return DataTableLongTextGet(data, 50); } },
            { "targets": 4, "render": function (data, type, row) { return CollabActionImageGet(row['ImagePath'], row['ImageExtension']); } },
            {
                "targets": 5, "render": function (data, type, row) {
                    var Response = row['ResponseFullName'] + ': ' + row['Response'];
                    return DataTableLongTextGet('Réponse', Response, 40);
                }
            },

            { "targets": 6, "render": function (data, type, row) { return data; } },
            { "targets": 7, "render": function (data, type, row) { return GetDhmValueNulFromDataTableDate(data); } },

            { "targets": 8, "render": function (data, type, row) { return DataTableStatusGet(data, row['StatusColor']); } },
            { "targets": 9, "render": function (data, type, row) { return DataTableStatusGet(data, row['EmergencyColor']); } },

            {
                "targets": 10,
                "render": function (data, type, row) {

                    var Id = row['HomeUpdateId'];

                    var GridReportId = Id + 'GridReportId';
                    var GridCardId = Id + 'GridCardId';
                    var GridCardBodyId = Id + 'GridCardBodyId';
                    var GridRowId = Id + 'GridRowId';
                    var GridCol0Id = Id + 'GridCol0Id';
                    var GridCol1Id = Id + 'GridCol1Id';

                    var PatternForm = '';
                    var OnClick = '';
                    var Icon = '';
                    var Label = '';
                    var Form = '';

                    var OnClick = '';
                    var Icon = '';
                    var Label = '';
                    var Form = '';

                    var UpdateTypeIdTmp = row['UpdateTypeId'];
                    var ModuleIdTmp = row['ModuleId'];
                    var PluginIdTmp = row['PluginId'];
                    var EmergencyIdTmp = row['EmergencyId'];
                    var UpdateStatusIdTmp = row['UpdateStatusId'];
                    var ChannelIdTmp = row['ChannelId'];
                    var MessageIdTmp = TextSpace(row['UpdateMessage']);
                    var DhmPlanTmp = row['YearP'] + '-' + GetDigits(row['MonthP'], 2) + '-' + GetDigits(row['DayP'], 2) + 'T' + GetDigits(row['HourP'], 2) + ':' + GetDigits(row['MinuteP'], 2);
                    var TeamIdTmp = row['TeamId'];
                    var ResponseTmp = TextSpace(row['Response']);

                    PatternForm = 'Edit';
                    var FormElement0 = DataTableModalFormButtonGet(Pattern, PatternForm, Id);

                    PatternForm = 'Add';
                    Form = DataTableFormGet(Pattern, PatternForm, row);
                    OnClick = DataTableFormOnClickGet(Pattern, PatternForm, Id, ModuleIdTmp, PluginIdTmp, EmergencyIdTmp, UpdateStatusIdTmp, ChannelIdTmp, MessageIdTmp, DhmPlanTmp, TeamIdTmp);
                    Icon = 'fas fa-plus-circle';
                    Label = '';
                    var FormElement1 = DataTableFormBtnGet(Pattern, PatternForm, Label, OnClick, Icon);

                    PatternForm = 'Comment';
                    Form = DataTableFormGet(Pattern, PatternForm, row);
                    OnClick = DataTableFormOnClickGet(Pattern, PatternForm, Id, ModuleIdTmp, PluginIdTmp, EmergencyIdTmp, UpdateStatusIdTmp, ChannelIdTmp, MessageIdTmp, DhmPlanTmp, TeamIdTmp);
                    Icon = 'far fa-comment';
                    Label = '';
                    var FormElement2 = DataTableFormBtnGet(Pattern, PatternForm, Label, OnClick, Icon);
                                        

                    PatternForm = 'Search';
                    var FormElement4 = DataTableModalFormButtonGet(Pattern, PatternForm, Id);

                    PatternForm = 'Child';
                    var FormElement5 = DataTableModalFormButtonGet(Pattern, PatternForm, Id);

                    return FormElement0 + FormElement1 + FormElement2 + FormElement4 + FormElement5;
                }
            },
            { "targets": 11, "render": function (data, type, row) { return CollabActionProfilGet(row['UserId'], row['TeamId']); } },
            { "targets": 12, "render": function (data, type, row) { return data; } },
            { "targets": 13, "render": function (data, type, row) { return data; } },
            { "targets": 14, "render": function (data, type, row) { return data; } },

            { "targets": 15, "render": function (data, type, row) { return data; } },

            { "targets": 16, "render": function (data, type, row) { return GetDhmValueNulFromDataTableDate(data); } },
            { "targets": 17, "render": function (data, type, row) { return GetDhmValueNulFromDataTableDate(data); } },
            { "targets": 18, "render": function (data, type, row) { return GetDhmValueNulFromDataTableDate(data); } },

            { "targets": 19, "render": function (data, type, row) { return DataTableFormatDoubleNullAlertGet(data); } },
            { "targets": 20, "render": function (data, type, row) { return DataTableFormatDoubleNullAlertGet(data); } },

            { "targets": 21, "render": function (data, type, row) { return DataTableFormatDoubleNullAlertGet(data); } },
            { "targets": 22, "render": function (data, type, row) { return DataTableFormatDoubleNullAlertGet(data); } },

            { "targets": 23, "render": function (data, type, row) { return DataTableFormatDoubleNullAlertGet(data); } },
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
        "lengthChange": false,
        "showNEntries": false,
        "bInfo": false,
        "bPaginate": true,
        //"order": [[0, 'asc'], [1, 'asc']]
        "ordering": false,
        //"scrollY": '400px',
        //"scrollCollapse": true,
    });
}

//Load
function CollabActionFormLoad(Pattern, PatternForm, RowId) {

    var FormReportId = Pattern + PatternForm + 'ModalDialogReportId';
    HideReport(FormReportId);

    //Sert FormIndex
    var FormIndex = '';

    var Keyword = '';
    var IdParent = 0;
    var ModuleId = '0';
    var PluginId = '0';   
    var UpdateStatusId = '0';
    var EmergencyId = '0';
    var ChannelId = '0';
    var DateString = '';
    var TeamId = '0';
    var HomeUpdateId = 0;
    var VersionId = '0';
    var HandledBy = '0';
    var ServerId = 0;
    var AppId = 0;

    var ActionBtnId = Pattern + PatternForm + 'BtnId' + RowId;
    var Icon = DataTableIconFromPatternFormGet(PatternForm);

    if (PatternForm == 'Child') {
        IdParent = RowId;
        CollabActionGet(ActionBtnId, Icon, Pattern, Keyword, IdParent, ModuleId, PluginId, UpdateStatusId, EmergencyId, ChannelId, DateString, TeamId, HomeUpdateId, VersionId, HandledBy, ServerId, AppId);
        //Show FormReport
        ShowReport(FormReportId);
        ActionBtnIconSet(ActionBtnId, Icon);
    }
    else {
        if (PatternForm == 'Search') {
            HomeUpdateId = RowId;
            CollabDetailGet(HomeUpdateId);
            //Show FormReport
            ShowReport(FormReportId);
            ActionBtnIconSet(ActionBtnId, Icon);
        }
        else {

            HideParent('ChannelId1');
            HideParent('VersionId1');

            var HomeUpdateId = RowId;
            //Spin
            ActionBtnSpin(ActionBtnId);

            //Hide Form           

            var obj = {};
            obj.Keyword = '';
            obj.IdParent = '0';
            obj.ModuleId = '0';
            obj.PluginId = '0';
            obj.EmergencyId = '0';
            obj.UpdateStatusId = '0';
            obj.ChannelId = '0';
            obj.DateString = '';
            obj.TeamId = '0';
            obj.HomeUpdateId = HomeUpdateId;
            obj.VersionId = 0;
            obj.HandledBy = '0';
            obj.ServerId = 0;
            obj.AppId = 0;
            
            $.ajax({
                url: "/Collab/CollabActionGet",
                method: "POST",
                data: JSON.stringify(obj),
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                async: true,
                success: function (data) {
                    jQuery.each(data, function (index, itemData) {

                        //Get features
                        var ModuleId = itemData[0].ModuleId;
                        var PluginId = itemData[0].PluginId;
                        var EmergencyId = itemData[0].EmergencyId;
                        var UpdateStatusId = itemData[0].UpdateStatusId;
                        var ChannelId = itemData[0].ChannelId;
                        var TeamId = itemData[0].TeamId;                        
                        var UpdateMessage = itemData[0].UpdateMessage;
                        var Response = itemData[0].Response;
                        var VersionId = itemData[0].VersionId;
                        var HandledBy = itemData[0].HandledBy;

                        var YearP = itemData[0].YearP;
                        var MonthP = itemData[0].MonthP;
                        var DayP = itemData[0].DayP;
                        var HourP = itemData[0].HourP;
                        var MinuteP = itemData[0].MinuteP;
                        var DhmPlan = YearP + '-' + GetDigits(MonthP, 2) + '-' + GetDigits(DayP, 2) + 'T' + GetDigits(HourP, 2) + ':' + GetDigits(MinuteP, 2);

                        //
                        var YearN = itemData[0].YearN;
                        var MonthN = itemData[0].MonthN;
                        var DayN = itemData[0].DayN;
                        var DhmValueNeed = YearN + '-' + GetDigits(MonthN, 2) + '-' + GetDigits(DayN, 2);

                        var YearV = itemData[0].YearV;
                        var MonthV = itemData[0].MonthV;
                        var DayV = itemData[0].DayV;
                        var DhmValueValid = YearV + '-' + GetDigits(MonthV, 2) + '-' + GetDigits(DayV, 2);

                        var YearR = itemData[0].YearR;
                        var MonthR = itemData[0].MonthR;
                        var DayR = itemData[0].DayR;
                        var DhmValueRealize = YearR + '-' + GetDigits(MonthR, 2) + '-' + GetDigits(DayR, 2);

                        if (PatternForm == 'Edit') {
                            FormIndex = '1';

                            HtmlDropDownListNameOnlyWithInputFill('AppId1', itemData[0].AppId, '/Collab/CollabAppsGet', 'AppId', 'AppName', 0);
                            HtmlDropDownListWithTwoInputsNameOnlyFill('ModuleId1', ModuleId, '/Collab/CollabModulesGet', 'ModuleId', 'ModuleName', 0, 0);
                            HtmlDropDownListWithInputFill('PluginId' + FormIndex, PluginId, '/Collab/CollabPluginsGet', 'PluginId', 'PluginName', '0');
                            //HtmlDropDownListFill('EmergencyId' + FormIndex, EmergencyId, '/Param/ParamEmergenciesGet', 'EmergencyId', 'EmergencyName');
                            //HtmlDropDownListFill('UpdateStatusId' + FormIndex, UpdateStatusId, '/Home/HomeUpdateGetUpdateStatus', 'UpdateStatusId', 'UpdateStatusName');

                            //HtmlDropDownListFill('ChannelId' + FormIndex, ChannelId, '/Collab/CollabChannelsGet', 'ChannelId', 'ChannelName');
                            //HtmlDropDownListFill('TeamId' + FormIndex, TeamId, '/Home/DimTeamsGet', 'TeamId', 'TeamName');
                            //HtmlDropDownListNameOnlyFill('VersionId' + FormIndex, VersionId, '/Common/ParamVersVersionGet', 'VersionId', 'VersionNumber');

                            ElementBooleanSet('IsToNotifyId1', false);
                            ElementDropDownListSet('TeamId' + FormIndex, TeamId);
                            //ElementDropDownListSet('ModuleId' + FormIndex, ModuleId);
                            //ElementDropDownListSet('PluginId' + FormIndex, PluginId);
                            ElementDropDownListSet('EmergencyId' + FormIndex, EmergencyId);
                            ElementDropDownListSet('UpdateStatusId' + FormIndex, UpdateStatusId);
                            ElementDropDownListSet('ChannelId' + FormIndex, ChannelId);                            
                            ElementDropDownListSet('VersionId' + FormIndex, VersionId);
                            ElementDropDownListSet('HandledById' + FormIndex, HandledBy);
                            ElementDropDownListSet('ServerId' + FormIndex, itemData[0].ServerId);
                            //ElementDropDownListSet('AppId' + FormIndex, itemData[0].AppId);

                            document.getElementById('DhmId' + FormIndex).value = DhmPlan;
                            document.getElementById('MessageId' + FormIndex).value = UpdateMessage;
                            /*document.getElementById('ResponseId' + FormIndex).value = Response;*/
                            document.getElementById('ResponseId' + FormIndex).value = '';

                            document.getElementById('DhmValueNeedId' + FormIndex).value = DhmValueNeed;
                            document.getElementById('DhmValueValidId' + FormIndex).value = DhmValueValid;
                            document.getElementById('DhmValueRealizeId' + FormIndex).value = DhmValueRealize;

                            ElementInputSet('QuantityPMId' + FormIndex, itemData[0].QuantityPM);
                            ElementInputSet('QuantityDevId' + FormIndex, itemData[0].QuantityDev);

                            //OnChange
                            document.getElementById('ModuleId' + FormIndex).setAttribute('onChange', 'CollabPluginsGet(\'' + PluginId + '\', \'' + FormIndex + '\')');


                            //Disable
                            //ElementDisable('ResponseId' + FormIndex);

                            //Set modal action buttons
                            ModalActionBtnEditGet(Pattern, RowId, FormIndex);     


                            CollabDetailGet(HomeUpdateId);
                        }

                        //Show FormReport
                        ShowReport(FormReportId);
                        ActionBtnIconSet(ActionBtnId, Icon);

                        ////Set drop down lists
                        //HtmlDropDownListNameOnlyXorFill('SqlDataTypeId' + FormIndex, SqlDataTypeId, '/Bi/BiParamSqlDataTypesGet', 'SqlDataTypeId', 'SqlDataTypeName');
                        //HtmlDropDownListNameOnlyXorFill('KeyTypeId' + FormIndex, KeyTypeId, '/Bi/BiParamKeyTypesGet', 'KeyTypeId', 'KeyTypeName');

                        ////Set OnChange

                        ////Set inputs
                        //document.getElementById('NameId' + FormIndex).value = ColumnName;
                        //document.getElementById('DescriptionId' + FormIndex).value = Description;
                        //document.getElementById('LenghtId' + FormIndex).value = Lenght;
                        //document.getElementById('IsNullableId' + FormIndex).checked = IsNullable;

                        ////Hide some inputs

                        ////Set modal action buttons
                        //ModalActionBtnEditGet(Pattern, RowId, FormIndex);

                        ////Set labels
                        //$('#NameId' + FormIndex + 'Label').text("Colonne");

                        ////Set styles
                        document.getElementById('CollabActionEditModalDialogReportId').style.maxWidth = '1600px';
                        //document.getElementById('DescriptionId' + FormIndex).style.fontWeight = 'bold';

                    });

                    
                }
            })
        }
    }
}

function DataTableFormLoad(Pattern, PatternForm, RowId, ModuleId, PluginId, EmergencyId, UpdateStatusId, ChannelId, MessageId, DhmPlan, TeamId, Response) {
    var FormIndex = '';

    if (PatternForm == 'Update') {
        var FormId = Pattern + PatternForm + RowId + 'FormId';
        DataTableElementDisplay(FormId);
        HomeUpdateEditShortDisplay(Id);
    };
    if (PatternForm == 'Add') {
        FormIndex = '2';
        HtmlDropDownListNameOnlyXorFill('ModuleId' + FormIndex, ModuleId, '/Home/HomeUpdateGetModules', 'ModuleId', 'ModuleName');
        HtmlDropDownListNameOnlyXorWithInputFill('PluginId' + FormIndex, PluginId, '/Home/ParamPluginsGet', 'PluginId', 'PluginName', '0');
        HtmlDropDownListNameOnlyXorFill('EmergencyId' + FormIndex, EmergencyId, '/Param/ParamEmergenciesGet', 'EmergencyId', 'EmergencyName');
        HtmlDropDownListNameOnlyXorFill('UpdateStatusId' + FormIndex, UpdateStatusId, '/Home/HomeUpdateGetUpdateStatus', 'UpdateStatusId', 'UpdateStatusName');
        HtmlDropDownListNameOnlyXorFill('ChannelId' + FormIndex, ChannelId, '/Home/ParamChannelsGet', 'ChannelId', 'ChannelName');
        HtmlDropDownListNameOnlyXorFill('TeamId' + FormIndex, TeamId, '/Home/DimTeamsGet', 'TeamId', 'TeamName');

        document.getElementById('ModuleId' + FormIndex).setAttribute('onChange', 'ParamPluginsGet(\'' + PluginId + '\', \'' + FormIndex + '\')');
        document.getElementById('MessageId' + FormIndex).value = "";
        document.getElementById('TeamId' + FormIndex).value = TeamId;

        //Set modal action buttons
        ModalActionButtonGet(Pattern, PatternForm, RowId, FormIndex)
    };
    if (PatternForm == 'Comment') {
        FormIndex = '3';

        document.getElementById('CommentId' + FormIndex).value = '';   

        //Set modal action buttons
        ModalActionBtnCommentGet(Pattern, RowId, FormIndex);
        ModalActionBtnNotifyGet(Pattern, RowId, FormIndex); 
    };
    //if (PatternForm == 'Search') {
    //    CollabActionDisplay(RowId);
    //};
}


function CollabActionEdit(RowId, FormIndex) {

    var ActionBtnId = 'ParamActionBtnId0';
    var Icon = 'fas fa-eye';

    //Spin
    ActionBtnMarginSpin(ActionBtnId);

     //Get input values
    var PluginId = GetElementDropDownListValue('PluginId' + FormIndex);
    var EmergencyId = GetElementDropDownListValue('EmergencyId' + FormIndex);
    var UpdateStatusId = GetElementDropDownListValue('UpdateStatusId' + FormIndex);
    var ChannelId = GetElementValue('ChannelId' + FormIndex);
    var DhmString = GetDhmStringFromDatePicker('DhmId' + FormIndex);
    var TeamId = GetElementDropDownListValue('TeamId' + FormIndex);
    var VersionId = GetElementDropDownListValue('VersionId' + FormIndex);
    var HandledBy = GetElementDropDownListValue('HandledById' + FormIndex);
    var UpdateMessage = GetElementValue('MessageId' + FormIndex);
    var Response = GetElementValue('ResponseId' + FormIndex);
    var IsToNotify = ElementBooleanGet('IsToNotifyId' + FormIndex);

    var DhmValueNeedString = GetDateStringFromDatePicker('DhmValueNeedId' + FormIndex);
    var DhmValueValidString = GetDateStringFromDatePicker('DhmValueValidId' + FormIndex);
    var DhmValueRealizeString = GetDateStringFromDatePicker('DhmValueRealizeId' + FormIndex);

    var QuantityPM = GetElementValue('QuantityPMId' + FormIndex);
    var QuantityDev = GetElementValue('QuantityDevId' + FormIndex);

    var obj = {};

    obj.HomeUpdateId = RowId;
    obj.PluginId = PluginId;
    obj.EmergencyId = EmergencyId;
    obj.UpdateStatusId = UpdateStatusId;
    obj.ChannelId = ChannelId;
    obj.DhmString = DhmString;
    obj.TeamId = TeamId;
    obj.VersionId = VersionId;
    obj.HandledBy = HandledBy;
    obj.UpdateMessage = UpdateMessage;
    obj.Response = Response;
    obj.IsToNotify = IsToNotify;

    obj.DhmValueNeedString = DhmValueNeedString;
    obj.DhmValueValidString = DhmValueValidString;
    obj.DhmValueRealizeString = DhmValueRealizeString;

    obj.QuantityPM = QuantityPM;
    obj.QuantityDev = QuantityDev;

    $.connection.hub.start({ jsonp: true }).done(function () {
        obj.ConnectionId = $.connection.hub.id;
        $.ajax({
            url: "/Collab/CollabActionEdit",
            method: "POST",
            data: JSON.stringify(obj),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {
                ActionBtnIconMarginSet(ActionBtnId, Icon);
                CollabActionDisplay('0');
            }
        });
    });

    
}


function CollabActionNotify(RowId, FormIndex) {

    var ActionBtnId = 'CollabActionNotifyActionBtnId';
    var Icon = 'fas fa-paper-plane';

    ActionBtnMarginSpin(ActionBtnId);

    //Get input values
    var Comment = GetElementValue('CommentId' + FormIndex);
    var Link = GetElementValue('LinkId' + FormIndex);

    var files = $("#FileId" + FormIndex).get(0).files;
    var data = new FormData();
    for (var i = 0; i < files.length; i++) {
        data.append("FileId" + FormIndex, files[i]);
    };

    data.append("HomeUpdateId", RowId);
    data.append("Comment", Comment);
    data.append("Link", Link);
    $.ajax({
        url: "/Collab/CollabActionNotify",
        method: "POST",
        dataType: "json",
        contentType: false,
        processData: false,
        data: data,
        success: function (data) {
            ActionBtnIconMarginSet(ActionBtnId, Icon);
            CollabActionDisplay('0');
        }
    });
}

function CollabActionComment(RowId, FormIndex) {

    //Get input values
    var Comment = GetElementValue('CommentId' + FormIndex);
    var Link = GetElementValue('LinkId' + FormIndex);

    var files = $("#FileId" + FormIndex).get(0).files;
    var data = new FormData();
    for (var i = 0; i < files.length; i++) {
        data.append("FileId" + FormIndex, files[i]);
    };

    data.append("HomeUpdateId", RowId);
    data.append("Comment", Comment);
    data.append("Link", Link);
    $.ajax({
        url: "/Collab/CollabActionComment",
        method: "POST",
        dataType: "json",
        contentType: false,
        processData: false,
        data: data,
        success: function (data) {
            CollabActionDisplay('0');
        }
    });
}




function CollabBugAdd(RowId, FormIndex) {

    var ActionBtnId = 'ParamActionBtnId1';
    var Icon = 'fas fa-plus-circle btn-icon-m-cl gc-c1-c';

    var IdParent = RowId;
    var PluginId = GetElementDropDownListValue('PluginId' + FormIndex);
    var EmergencyId = GetElementDropDownListValue('EmergencyId' + FormIndex);
    var UpdateStatusId = GetElementDropDownListValue('UpdateStatusId' + FormIndex);
    var ChannelId = GetElementDropDownListValue('ChannelId' + FormIndex);
    var DhmString = GetDhmStringFromDatePicker('DhmId' + FormIndex);
    var UpdateMessage = GetElementValue('MessageId' + FormIndex);
    var TeamId = GetElementValue('TeamId' + FormIndex);
    var VersionId = GetElementValue('VersionId' + FormIndex);
    var HandledBy = GetElementValue('HandledById' + FormIndex);
    var IsToNotify = ElementBooleanGet('IsToNotifyId');

    var DhmValueNeedString = GetDateStringFromDatePicker('DhmValueNeedId' + FormIndex);
    var DhmValueValidString = GetDateStringFromDatePicker('DhmValueValidId' + FormIndex);
    var DhmValueRealizeString = GetDateStringFromDatePicker('DhmValueRealizeId' + FormIndex);

    var QuantityPM = GetElementValue('QuantityPMId' + FormIndex);
    var QuantityDev = GetElementValue('QuantityDevId' + FormIndex);

    ActionBtnMarginSpin(ActionBtnId);

    var files = $("#FileId").get(0).files;
    var data = new FormData();
    for (var i = 0; i < files.length; i++) {
        data.append("FileId", files[i]);
    };

    data.append("IdParent", IdParent);
    data.append("PluginId", PluginId);
    data.append("EmergencyId", EmergencyId);
    data.append("UpdateStatusId", UpdateStatusId);
    data.append("ChannelId", ChannelId);
    data.append("TeamId", TeamId);
    data.append("DhmString", DhmString);
    data.append("UpdateMessage", UpdateMessage);
    data.append("VersionId", VersionId);
    data.append("IsTopBarFix", false);
    data.append("UserId", '0');
    data.append("HandledBy", HandledBy);
    data.append("IsToNotify", IsToNotify);

    data.append("DhmValueNeedString", DhmValueNeedString);
    data.append("DhmValueValidString", DhmValueValidString);
    data.append("DhmValueRealizeString", DhmValueRealizeString);

    data.append("QuantityPM", QuantityPM);
    data.append("QuantityDev", QuantityDev);

    $.connection.hub.start({ jsonp: true }).done(function () {
        data.append("ConnectionId", $.connection.hub.id);
        $.ajax({
            url: "/Collab/CollabActionAdd",
            method: "POST",
            dataType: "json",
            contentType: false,
            processData: false,
            data: data,
            success: function (data) {
                ActionBtnIconMarginSet(ActionBtnId, Icon);
                if (data != '0') {
                    DataTableActionBtnIconSet(ActionBtnId, Icon);
                    CollabActionDisplay(data);
                }
            }
        });
    });
}

function CollabActionReset() {
    DropDownListSet('ServerId', '0');
    DropDownListSet('AppId', '0');
    DropDownListSet('ModuleId', '0');
    DropDownListSet('PluginId', '0');
    DropDownListSet('EmergencyId', '0');
    DropDownListSet('UpdateStatusId', '0');
    DropDownListSet('ChannelId', '0');
    DropDownListSet('TeamId', '0');

    //Reset keyword
    document.getElementById('KeywordId').value = '';    
    document.getElementById('MessageId').value = '';
    document.getElementById('DhmId').value = ''; 
}


function CollabActionImageGet(ImagePath, ImageExtension) {    
    var NoImagePath = ImagesVDFolder + '/Camera/no-image.jpg';
    var image = new Image();
    image.src = ImagePath;    

    if (ImageExtension == '.xls' || ImageExtension == '.xlsx' || ImageExtension == '.XLS' || ImageExtension == '.XLSX') {
        return '<a href="' + ImagePath + '" target="_blank">' +
            '<img id="ImageId" class="tb-att-cl" src="' + ImagesVDFolder + '/Icons/Excel.jpg" alt="">' +
            '</a>';
    }
    else {
        if (ImageExtension == '.pdf' || ImageExtension == '.PDF') {
            return '<a href="' + ImagePath + '" target="_blank">' +
                '<img id="ImageId" class="tb-att-cl" src="' + ImagesVDFolder + '/Icons/PDF.jpg" alt="">' +
                '</a>';
        }
        else {
            if (image.width == 0) {
                return '<a href="' + NoImagePath + '" target="_blank">' +
                    '<img class="dt-img-cl" src="' + NoImagePath + '" />' +
                    '</a>';
            }
            else {
                return '<a href="' + ImagePath + '" target="_blank">' +
                    '<img class="dt-img-cl" src="' + ImagePath + '" />' +
                    '</a>';
            }

        }
    }
}


function CollabActionProfilGet(UserId, TeamId) {
    var ImageProfilPath = ImagesVDFolder + '/Profil/' + UserId + '.jpg';
    var ImageTeamPath = ImagesVDFolder + '/Teams/' + TeamId + '.jpg';
    var NoImagePath = ImagesVDFolder + '/Profil/4e86a862-7fc7-4ff6-9209-e609df3f79dc.jpg';
    var image = new Image();
    image.src = ImageProfilPath;

    if (TeamId == 1) {
        if (image.width == 0) {
            return '<a href="' + NoImagePath + '" target="_blank">' +
                '<img class="dt-img-team-cl" src="' + NoImagePath + '" />' +
                '</a>';
        }
        else {
            return '<img class="dt-img-team-cl" src="' + ImageProfilPath + '" />';            
        }
    }
    else {
        return '<img class="dt-img-team-cl" src="' + ImageTeamPath + '" />';
    };
         
}

//function CollabActionNotify(HomeUpdateId) {

//    //Define ActionBtnId
//    var ActionBtnId = 'CollabActionNotifyBtnId' + HomeUpdateId;

//    //Spin
//    DataTableActionBtnSpin(ActionBtnId);

//    var obj = {};
//    obj.HomeUpdateId = HomeUpdateId;
//    $.ajax({
//        url: "/Collab/CollabActionNotify",
//        method: "POST",
//        data: JSON.stringify(obj),
//        contentType: "application/json; charset=utf-8",
//        dataType: "json",
//        success: function (data) {
//            $('#' + ActionBtnId).find('span').attr('class', 'fas fa-paper-plane btn-icon-cl gc-c1-cl');
//        },
//        error: function (request, status, error) {
//            //alert('Vous ne disposez pas des autorisations nécessaires pour effectuer cette action');
//            //$('#' + ActionBtnId).find('span').attr('class', 'far fa-trash-alt btn-icon-cl gc-c1-cl');
//        }
//    });
//}


function CommMenusGet(PluginId) {

    //var ActionBtnId = 'tb-fix-id';
    //var Icon = 'fas fa-wrench tb-noti-cl gc-c1-cl';

   // $('#' + ActionBtnId).find('span').attr('class', 'fa fa-spinner fa-spin btn-icon-m-cl gc-c1-cl');

    //Set datatable patterns
    var Pattern = 'CommMenu';
    var PatternTableId = Pattern + 'TableId';
    var PatternTableReportId = Pattern + 'TableReportId';

    HideReport(PatternTableReportId);
    $('#' + PatternTableId).DataTable().destroy();
    $('#' + PatternTableId).DataTable({
        "initComplete": function (settings, json) {
            //$('#' + ActionBtnId).find('span').attr('class', Icon);
            ShowReport(PatternTableReportId);
            //NotiConnectionIdUpdate('Demandes');
        },
        "ajax": {
            "url": "/Common/CommMenusGet",
            "type": "GET",
            "datatype": "json",
            "data": {
                PluginId: PluginId
            }
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
            },
        ],
        "columnDefs": [
            {
                "targets": 0, "render": function (data, type, row) {
                    return CommMenuFormGet(
                        row['MenuName'],
                        row['Description'],
                        row['ImageExtension'],
                        row['MenuId']);
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


function CommMenuFormGet(MenuName, Description, ImageExtension, MenuId) {

    return '<div class="row mb-3 intro-report-cl">' +
        '<div class="col-md-12 intro-container">' +
        '<h4 class="menu-tl-cl">' + MenuName + '</h4>' +
        '<p class="intro-description">' + Description + '</p>' + 



        '<div class="row">' +
            '<div class="col">' + 
                '<span class="tb-acc-span-cl">' + 
                    '<img class="tb-acc-img-cl" src="/Images/Profil/@ViewBag.IntroManager">' + 
                            '</span>' +
                        '</div>' + 
                '<div class="col">' +
                            '<div class="text-left">' +
        '<button type="button" class="fas fa-edit btn-cl gc-bc1-cl" href="@ViewBag.IntroHref" target="_blank" style="margin-top: 8px;border-color: @ViewBag.IntroColor;" onClick="CommFeatureGet(' + MenuId + ')">' + 
                               '<div class="btn-txt-cl"></div>' + 
                            '</button>' +
                    '</div>' +
                '</div>' +
            '</div>' + 


        '</div>' +
        '</div>';
}


function CommFeatureGet(MenuId) {

    //var ActionBtnId = 'tb-fix-id';
    //var Icon = 'fas fa-wrench tb-noti-cl gc-c1-cl';

    // $('#' + ActionBtnId).find('span').attr('class', 'fa fa-spinner fa-spin btn-icon-m-cl gc-c1-cl');

    //Set datatable patterns
    var Pattern = 'CommFeature';
    var PatternTableId = Pattern + 'TableId';
    var PatternTableReportId = Pattern + 'TableReportId';

    HideReport(PatternTableReportId);
    $('#' + PatternTableId).DataTable().destroy();
    $('#' + PatternTableId).DataTable({
        "initComplete": function (settings, json) {
            //$('#' + ActionBtnId).find('span').attr('class', Icon);
            ShowReport(PatternTableReportId);
            //NotiConnectionIdUpdate('Demandes');
        },
        "ajax": {
            "url": "/Common/CommFeatureGet",
            "type": "GET",
            "datatype": "json",
            "data": {
                MenuId: MenuId
            }
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
            },
        ],
        "columnDefs": [
            {
                "targets": 0, "render": function (data, type, row) {
                    return CommMenuFormGet(
                        row['MenuName'],
                        row['Description'],
                        row['ImageExtension'],
                        row['MenuId']);
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


function CommFeatureFormGet(FeatureName, Description, FeatureId) {

    return '<div class="row mb-3 intro-report-cl">' +
        '<div class="col-md-12 intro-container">' +
        '<h4 class="menu-tl-cl">' + FeatureName + '</h4>' +
        '<p class="intro-description">' + Description + '</p>' +



        '<div class="row">' +
        '<div class="col">' +
        '<span class="tb-acc-span-cl">' +
        '<img class="tb-acc-img-cl" src="/Images/Profil/@ViewBag.IntroManager">' +
        '</span>' +
        '</div>' +
        '<div class="col">' +
        '<div class="text-left">' +
        '<button type="button" class="fas fa-edit btn-cl gc-bc1-cl" href="@ViewBag.IntroHref" target="_blank" style="margin-top: 8px;border-color: @ViewBag.IntroColor;" onClick="CommFeatureGet(' + FeatureId + ')">' +
        '<div class="btn-txt-cl"></div>' +
        '</button>' +
        '</div>' +
        '</div>' +
        '</div>' +


        '</div>' +
        '</div>';
}

function CollabActionTourGet() {
    var intro = introJs();
    intro.setOptions({
        steps: [
            {
                title: "Visite guidée",
                intro: "Bienvenue sur le module de collaboration! Nous vous proposons une visite guidée de l'ensemble des fonctionnalités. Pour en profiter, Cliquez sur Next."
            },
            {
                title: "Objectif du module",
                element: document.querySelector('.intro-desc-h-container'),
                intro: "",
                position: 'right'
            },
            {
                title: "Liste des fonctionnalités",
                element: '#collab-accordion-ct-id',
                intro: "Vous pouvez cliquer sur chacune des fonctionnalités pour plus de détails.",
                position: 'right'
            },
            {
                title: "Gestion des actions",
                element: '#menu-bar-ct-id1',
                intro: "Créer et suivre une action.",
                position: 'bottom'
            },
            {
                title: "Gestion des équipe",
                element: '#menu-bar-ct-id2',
                intro: "Créer un groupe de travail et lui attribuer des collaborateurs.",
                position: 'bottom'
            },
            {
                title: "Kanban",
                element: '#menu-bar-ct-id3',
                intro: "Organisez vos actions selon leur statuts d'avancement.",
                position: 'bottom'
            },
            {
                title: "Checklist",
                element: '#menu-bar-ct-id4',
                intro: "Souvenez-vous de vos actions périodiques.",
                position: 'bottom'
            },
            {
                title: "Calendrier",
                element: '#menu-bar-ct-id5',
                intro: "Planifier vos actions et soyez alertés des futures réunions ou échéances.",
                position: 'bottom'
            },
            {
                title: "Canaux de communication",
                element: '#menu-bar-ct-id6',
                intro: "Organisez vos actions selon les différents canaux de communication.",
                position: 'bottom'
            }
        ],
        tooltipClass: 'customTooltip',
        showProgress: true,

    }),
    intro.onbeforechange(function () {
        //if (this._currentStep === 2) {
        //    $('#action-accordion-collaps-id').collapse('toggle');
        //}
        //if (this._currentStep === 3) {
        //    $('#team-accordion-collaps-id').collapse('toggle');
        //}
        //if (this._currentStep === 4) {
        //    $('#kanban-accordion-collaps-id').collapse('toggle');
        //}
    });
    intro.start();
}

function HomeUpdateGetModules(DefaultIndex, Id) {
    var item = document.getElementById('ModuleId' + Id);
    item.options.length = 0;
    var node = document.createElement("option");
    node.value = 0;
    var textnode = document.createTextNode("--");
    node.appendChild(textnode);
    item.appendChild(node);
    $.get("/Home/HomeUpdateGetModules", function (data) {
        $.each(data, function (index, row) {
            node = document.createElement("option");
            node.value = row.ModuleId;
            textnode = document.createTextNode(row.ModuleName);
            node.appendChild(textnode);
            item.appendChild(node);
        });
        item.options[DefaultIndex].selected = 'selected';
    });
}


function HomeUpdateGetUpdateTypes(SelectedValue, Id) {
    var item = document.getElementById('UpdateTypeId' + Id);
    item.options.length = 0;
    var node = document.createElement("option");
    node.value = 0;
    var textnode = document.createTextNode("--");
    node.appendChild(textnode);
    item.appendChild(node);
    $.get("/Home/HomeUpdateGetUpdateTypes", function (data) {
        $.each(data, function (index, row) {
            node = document.createElement("option");
            node.value = row.UpdateTypeId;
            textnode = document.createTextNode(row.UpdateTypeName);
            node.appendChild(textnode);
            item.appendChild(node);
        });
        for (var j = 0, len = item.options.length; j < len; j++) {
            var opt = item.options[j];
            if (opt.value == SelectedValue) {
                item.options[j].selected = 'selected';
                break;
            }
        };
    });
}

function HomeUpdateAddDisplay() {

    var ActionBtnId = 'ParamActionBtnId';
    var Icon = 'fas fa-plus-circle btn-icon-cl gc-c1-cl';

    $('#' + ActionBtnId).find('span').attr('class', 'fa fa-spinner fa-spin btn-icon-cl gc-c-cl');
    HideReport('HomeUpdateAddTableReportId');

    var Pattern = 'HomeUpdateEdit';
    var PatternTableId = Pattern + 'TableId';
    var PatternTableReportId = Pattern + 'TableReportId';

    HideReport(PatternTableReportId);

    $('#' + PatternTableId).DataTable().destroy();;
    $('#' + PatternTableId).DataTable({
        "initComplete": function (settings, json) {
            ShowReport(PatternTableReportId);
            $('#' + ActionBtnId).find('span').attr('class', Icon);
        },
        "ajax": {
            "url": "/Home/HomeUpdateAddDisplay",
            "type": "GET",
            "datatype": "json"
        },
        "columns": [
            { "data": "UpdateMessage" },//0 UpdateMessage   
            { "data": "DhmPlan" },//1
            { "data": "HomeUpdateId" },//2
        ],
        "columnDefs": [
            { "width": "3%", "className": "text-left", "targets": 0 },
            { "width": "3%", "className": "text-center", "targets": 1 },
            { "width": "3%", "className": "text-center none", "targets": 2 },

            { "targets": 0, "render": function (data, type, row) { return DataTableDataWithButtonGet(DataTableFlagGet(row['StatusColor']), DataTableStatusGet(DataTableStringGet(data, 60), row['EmergencyColor'])); } },
            { "targets": 1, "render": function (data, type, row) { return GetDhmValueFromDataTableDate(data); } },
            {
                "targets": 2,
                "render": function (data, type, row) {

                    var Id = row['HomeUpdateId'];

                    var GridReportId = Id + 'GridReportId';
                    var GridCardId = Id + 'GridCardId';
                    var GridCardBodyId = Id + 'GridCardBodyId';
                    var GridRowId = Id + 'GridRowId';
                    var GridCol0Id = Id + 'GridCol0Id';
                    var GridCol1Id = Id + 'GridCol1Id';

                    var PatternForm = '';
                    var OnClick = '';
                    var Icon = '';
                    var Label = '';
                    var Form = '';

                    var OnClick = '';
                    var Icon = '';
                    var Label = '';
                    var Form = '';

                    var UpdateTypeIdTmp = row['UpdateTypeId'];
                    var ModuleIdTmp = row['ModuleId'];
                    var PluginIdTmp = row['PluginId'];
                    var EmergencyIdTmp = row['EmergencyId'];
                    var UpdateStatusIdTmp = row['UpdateStatusId'];
                    var MessageIdTmp = row['UpdateMessage'];

                    var PatternFix = 'HomeUpdateEdit';

                    PatternForm = 'Modify';
                    Form = DataTableFormGet(Pattern, PatternForm, row);
                    OnClick = DataTableFormOnClickGet(PatternFix, PatternForm, Id, ModuleIdTmp, PluginIdTmp, EmergencyIdTmp, UpdateStatusIdTmp, MessageIdTmp);
                    Icon = 'fas fa-edit';
                    Label = 'Modifier';
                    var FormElement0 = DataTableFormBtnGet(PatternFix, PatternForm, Label, OnClick, Icon);

                    PatternForm = 'Update';
                    Form = DataTableFormGet(Pattern, PatternForm, row);
                    OnClick = DataTableFormOnClickGet(Pattern, PatternForm, Id, UpdateTypeIdTmp, ModuleIdTmp, PluginIdTmp, EmergencyIdTmp, UpdateStatusIdTmp);
                    Icon = 'fas fa-redo-alt';
                    Label = 'Traiter';
                    var FormElement1 = DataTableFormElementGet(OnClick, Icon, Label, Form);


                    PatternForm = 'Members';
                    Form = DataTableFormGet(Pattern, PatternForm, row);
                    OnClick = DataTableFormOnClickGet(Pattern, PatternForm, Id, UpdateTypeIdTmp, ModuleIdTmp, PluginIdTmp, EmergencyIdTmp, UpdateStatusIdTmp);
                    Icon = 'fas fa-users';
                    Label = 'Membres';
                    var FormElement2 = DataTableFormElementGet(OnClick, Icon, Label, Form);

                    PatternForm = 'Communicate';
                    Form = DataTableFormGet(Pattern, PatternForm, row);
                    OnClick = DataTableFormOnClickGet(Pattern, PatternForm, Id, UpdateTypeIdTmp, ModuleIdTmp, PluginIdTmp, EmergencyIdTmp, UpdateStatusIdTmp);
                    Icon = 'fas fa-users';
                    Label = 'Envoyer';
                    var FormElement3 = DataTableFormElementGet(OnClick, Icon, Label, Form);

                    PatternForm = 'Plan';
                    Form = DataTableFormGet(Pattern, PatternForm, row);
                    OnClick = DataTableFormOnClickGet(Pattern, PatternForm, Id, UpdateTypeIdTmp, ModuleIdTmp, PluginIdTmp, EmergencyIdTmp, UpdateStatusIdTmp);
                    Icon = 'far fa-clock';
                    Label = 'Planifier';
                    var FormElement4 = DataTableFormElementGet(OnClick, Icon, Label, Form);

                    PatternForm = 'Add';
                    Form = DataTableFormGet(Pattern, PatternForm, row);
                    OnClick = DataTableFormOnClickGet(PatternFix, PatternForm, Id, ModuleIdTmp, PluginIdTmp, EmergencyIdTmp, UpdateStatusIdTmp, MessageIdTmp);
                    Icon = 'fas fa-plus-circle';
                    Label = 'Ajouter une sous-action';
                    var FormElement5 = DataTableFormBtnGet(PatternFix, PatternForm, Label, OnClick, Icon);

                    return '<div id="Grid' + GridReportId + '" class="row mb-3">' + FormElement0 + FormElement1 + FormElement2 + FormElement3 + FormElement4 + FormElement5 + '</div>';
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
        "processing": false,
        "responsive": true,
        "bFilter": true,
        "autoWidth": false,
        "searching": false,
        "lengthChange": false,
        "showNEntries": false,
        "bInfo": false,
        "bPaginate": true,
        "ordering": false
    });
}


function HomeUpdateGetUpdateStatus(DefaultIndex, Id) {
    var item = document.getElementById('UpdateStatusId' + Id);
    item.options.length = 0;
    var node = document.createElement("option");
    node.value = 0;
    var textnode = document.createTextNode("--");
    node.appendChild(textnode);
    item.appendChild(node);
    $.get("/Home/HomeUpdateGetUpdateStatus", function (data) {
        $.each(data, function (index, row) {
            node = document.createElement("option");
            node.value = row.UpdateStatusId;
            textnode = document.createTextNode(row.UpdateStatusName);
            node.appendChild(textnode);
            item.appendChild(node);
        });
        item.options[DefaultIndex].selected = 'selected';
    });
}


function DataTableFormOnClickGet(Pattern, PatternForm, Id, ModuleId, PluginId, EmergencyId, UpdateStatusId, ChannelId, MessageId, DhmPlan, TeamId, Response) {
    return 'DataTableFormLoad(\'' +
        Pattern + '\',\'' +
        PatternForm + '\',\'' +
        Id + '\',\'' +
        ModuleId + '\',\'' +
        PluginId + '\',\'' +
        EmergencyId + '\',\'' +
        UpdateStatusId + '\',\'' +
        ChannelId + '\',\'' +
        MessageId + '\',\'' +
        DhmPlan + '\',\'' +
        TeamId + '\',\'' +
        Response + '\')';
}


function HomeUpdateEditFormNewsGet(row) {
    return '<div id="HomeUpdateEditFormNewsId' + row['HomeUpdateId'] + '" style="display:none" class="card-body">' +
        DataTableFormButtonGet('HomeUpdateEditSave', row['HomeUpdateId'], 'fas fa-plus-circle', 'Ajouter', '#FFFFFF', '#8498D1') +
        DataTableFormInputTextAreaElementGet('ResponseId', row['HomeUpdateId'], 'Avancement', '100%', '100%', row['Response']) +
        DataTableFormTplTableGet('HomeUpdateEdit' + row['HomeUpdateId']) +
        '</div>';
}


function DataTableFormGet(Pattern, PatternForm, row) {
    var Id = row['HomeUpdateId'];
    var FormId = Pattern + PatternForm + Id + 'FormId';
    var Result = '';

    if (PatternForm == 'Modify') {
        Result = '<div class="row">' +

            '<div class="col param-col">' +
            DataTableFormInputDropDownElementGetNew('UpdateTypeId', Id, 'Type', '', row['UpdateTypeId']) +
            DataTableFormInputDropDownElementGetNew('ModuleId', Id, 'Catég.', 'ParamPluginsGet(' + row['PluginId'] + ', \'' + Id + '\')', row['ModuleId']) +
            DataTableFormInputDropDownElementGetNew('PluginId', Id, 'S.Caté.', '', row['PluginId']) +
            '</div>' +

            '<div class="col param-col">' +
            DataTableFormInputDropDownElementGet('EmergencyId', Id, 'Urgence', '') +
            DataTableFormInputDropDownElementGet('UpdateStatusId', Id, 'Statut', '') +
            DataTableFileGet('FileId', Id, 'Fichiers') +
            '</div>' +

            '</div>' +
            DataTableFormInputTextAreaElementGet('MessageId', Id, 'Objet', row['UpdateMessage']) +
            DataTableFormBtnDoneGet('HomeUpdateSave', Id, 'far fa-save', 'Enregistrer');
    }
    if (PatternForm == 'Update') {
        var PatternFormTable = 'HomeUpdateEdit' + Id;
        var Tbody = HomeUpdateEditShortTbodyGet(PatternFormTable);
        Result = '<div class="row">' +

            '<div class="col param-col">' +
            DataTableFormInputDateElementGet('DhmStartId', Id, 'Date Début', 'datetime-local') +
            DataTableFormInputDateElementGet('DhmEndId', Id, 'Date fin', 'datetime-local') +

            DataTableFormBtnDoneGet('HomeUpdateEditDhmStartGet', Id, 'fas fa-arrow-left', 'Début') +
            DataTableFormBtnDoneGet('HomeUpdateEditDhmEndGet', Id, 'fas fa-arrow-left', 'Fin') +

            DataTableFormInputTextAreaElementGet('ResponseId', Id, 'Avancement', '100%', '100%', row['Response']) +
            DataTableFormBtnDoneGet('HomeUpdateEditSave', Id, 'fas fa-plus-circle', 'Ajouter') +
            '</div>' +

            '<div class="col param-col">' +
            DataTableFormTplTableGet(PatternFormTable, Tbody) +
            '</div>' +

            '</div>';
    }
    if (PatternForm == 'Members') {
        var PatternFormTable = 'HomeUpdateMembers' + Id;
        var Tbody = HomeUpdateEditMembersTbodyGet(PatternFormTable);
        Result = '<div class="row">' +

            '<div class="col param-col">' +
            DataTableFormInputTextAreaElementGet('ResponseId', Id, 'Membre', '100%', '100%', row['Response']) +
            DataTableFormBtnDoneGet('HomeUpdateMemberAdd', Id, 'fas fa-plus-circle', 'Ajouter') +
            '</div>' +

            '<div class="col param-col">' +
            DataTableFormTplTableGet(PatternFormTable, Tbody) +
            '</div>' +

            '</div>';
    }
    if (PatternForm == 'Plan') {
        Result = '<div class="row">' +

            '<div class="col param-col">' +
            DataTableFormInputDateElementGet('DhmStartId', Id, 'Date Début', 'datetime-local') +
            DataTableFormInputDateElementGet('DhmEndId', Id, 'Date fin', 'datetime-local') +
            '</div>' +

            '<div class="col param-col">' +
            '</div>' +

            '</div>';
    }

    Result = '<div id="' + FormId + '" style="display:none" class="card-body">' + Result + '</div>';
    return Result;
};

function HomeUpdateEditShortTbodyGet(Pattern) {
    var TbodyId = Pattern + 'TbodyId';
    return '<thead>' +
        '<tr>' +
        '<th>Date</th>' +
        '<th>Historique</th>' +
        '<th>Durée</th>' +
        '</tr>' +
        '</thead>' +
        '<tbody id="' + TbodyId + '"></tbody>';
}

function HomeUpdateEditMembersTbodyGet(Pattern) {
    var TbodyId = Pattern + 'TbodyId';
    return '<thead>' +
        '<tr>' +
        '<th>Nome</th>' +
        '</tr>' +
        '</thead>' +
        '<tbody id="' + TbodyId + '"></tbody>';
}

function DataTableFormElementGet(OnClick, Icon, Label, FormElement) {
    return '<div class="col-md-12 myform-container">' +
        '<div class="text-left">' +
        '<button type="button" class="btn btn-secondary myform-btn" onclick="' + OnClick + '" >' +
        '<span class="' + Icon + '"></span>' +
        '<div class="text-right">' + Label +
        '</div>' +
        '</button>' +
        '</div>' +
        FormElement +
        '</div>';
}



function HomeUpdateEditDhmStartGet(Id) {

    var today = new Date();
    var date = today.getFullYear() + '-' + GetDigits(today.getMonth() + 1, 2) + '-' + GetDigits(today.getDate(), 2);
    var time = GetDigits(today.getHours(), 2) + ":" + GetDigits(today.getMinutes(), 2);
    var dateTime = date + 'T' + time;
    $('#' + 'DhmStartId' + Id).val(dateTime);
}

function HomeUpdateEditDhmEndGet(Id) {
    var today = new Date();
    var date = today.getFullYear() + '-' + GetDigits(today.getMonth() + 1, 2) + '-' + GetDigits(today.getDate(), 2);
    var time = GetDigits(today.getHours(), 2) + ":" + GetDigits(today.getMinutes(), 2);
    var dateTime = date + 'T' + time;
    $('#' + 'DhmEndId' + Id).val(dateTime);
}

function HomeUpdateEditMembersGet() {
    var KeyWord = GetElementValue('KeyWordId');

    if (KeyWord == '') {
        ContChatContactsDisplay();
    }
    else {
        HideReport('ContChatContacts' + 'CardHeaderId');
        HideReport('ContChatContactsTheadId');

        HideReport('ContChatContacts' + 'TableReportId');

        $('#ContChatContacts' + 'TableId').DataTable().destroy();;
        $('#ContChatContacts' + 'TableId').DataTable({
            "initComplete": function (settings, json) {
                ShowReport('ContChatContacts' + 'TableReportId');
                //$('#' + ActionBtnId).find('span').attr('class', Icon);
            },
            "ajax": {
                "url": "/Cont/ContChatSearch",
                "type": "GET",
                "datatype": "json",
                "data": {
                    KeyWord: KeyWord
                }
            },
            "columns": [
                { "data": "UserId" }, //0
            ],
            "columnDefs": [
                { "width": "100%", "className": "text-center", "targets": 0 },//FullName   
                { "targets": 0, "render": function (data, type, row) { return DataTableChatContactGet(row['UserId'], row['FirstName'], row['LastName'], row['IsConnected']); } },
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

}

function HomeUpdateEditShortDisplay(HomeUpdateId) {

    var Pattern = 'HomeUpdateEdit';

    var TbodyId = Pattern + HomeUpdateId + 'TbodyId';
    var tbody = document.getElementById(TbodyId);
    var obj = {};
    obj.HomeUpdateId = HomeUpdateId;
    $.ajax({
        url: "/Home/HomeUpdateEditShortDisplay",
        method: "POST",
        data: JSON.stringify(obj),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            $.each(data["data"], function (index, row) {
                var tr = document.createElement("tr");
                var td = document.createElement("td");
                var DhmModificationTmp = row.DhmModification;
                if (DhmModificationTmp === null) return "";
                var pattern = /Date\(([^)]+)\)/;
                var results = pattern.exec(DhmModificationTmp);
                var dhm = new Date(parseFloat(results[1]));
                var dhmt = dhm.toLocaleDateString() + ' ' + dhm.toLocaleTimeString();

                td.appendChild(document.createTextNode(dhmt));
                td.className = "text-left";

                tr.appendChild(td);

                var td0 = document.createElement("td");
                td0.appendChild(document.createTextNode(row.Response));
                tr.appendChild(td0);

                var td2 = document.createElement("td");
                td2.appendChild(document.createTextNode(row.Duration + ' min'));
                tr.appendChild(td2);

                tbody.appendChild(tr);
            });
        }
    });
}

function HomeUpdateEditShortLastDisplay(HomeUpdateId) {

    var Pattern = 'HomeUpdateEdit';

    var TbodyId = Pattern + HomeUpdateId + 'TbodyId';
    var tbody = document.getElementById(TbodyId);

    var obj = {};
    obj.HomeUpdateId = HomeUpdateId;
    $.ajax({
        url: "/Home/HomeUpdateEditShortDisplay",
        method: "POST",
        data: JSON.stringify(obj),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {

            $.each(data["data"], function (index, row) {

                if (index == 0) {
                    var tr = document.createElement("tr");
                    var td = document.createElement("td");
                    var DhmModificationTmp = row.DhmModification;
                    if (DhmModificationTmp === null) return "";
                    var pattern = /Date\(([^)]+)\)/;
                    var results = pattern.exec(DhmModificationTmp);
                    var dhm = new Date(parseFloat(results[1]));
                    var dhmt = dhm.toLocaleDateString() + ' ' + dhm.toLocaleTimeString();

                    td.appendChild(document.createTextNode(dhmt));
                    td.className = "text-left";
                    tr.appendChild(td);

                    var td0 = document.createElement("td");
                    td0.appendChild(document.createTextNode(row.Response));
                    tr.appendChild(td0);

                    var td2 = document.createElement("td");
                    td2.appendChild(document.createTextNode(row.Duration + ' min'));
                    tr.appendChild(td2);

                    tbody.insertBefore(tr, tbody.firstChild);
                }
            });
        }
    });
}

function HomeUpdateEditSave(Id) {

    $('#HomeUpdateEditSaveBtnId' + Id).find('span').attr('class', 'fa fa-spinner fa-spin');
    var Response = GetElementValue('ResponseId' + Id);
    var DhmStringStart = GetDhmStringFromDatePicker('DhmStartId' + Id);
    var DhmStringEnd = GetDhmStringFromDatePicker('DhmEndId' + Id);
    var TeamId = GetElementValue('TeamId' + Id);

    if (new String(DhmStringStart).length == 12 && new String(DhmStringEnd).length == 12) {

        var obj = {};
        obj.HomeUpdateId = Id;
        obj.DhmStringStart = DhmStringStart;
        obj.DhmStringEnd = DhmStringEnd;
        obj.Response = Response;
        obj.TeamId = TeamId;
        $.ajax({
            url: "/Home/HomeUpdateEditSave",
            method: "POST",
            data: JSON.stringify(obj),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {
                $('#HomeUpdateEditSaveBtnId' + Id).find('span').attr('class', 'far fa-save');
                $.each(data, function (index, row) {
                    //alert(row.ProgressValue);
                    //$('#ProgressValueId' + HomeUpdateId).attr('style', 'width: ' + row.ProgressValue + '; background-color:' + row.RgbValue + '');                
                    //$('#SupportFullNameId' + HomeUpdateId).text(row.SupportFullName);

                    //var DhmModification = row.DhmModification
                    //if (DhmModification === null) return "";
                    //var pattern = /Date\(([^)]+)\)/;
                    //var results = pattern.exec(DhmModification);
                    //var dt = new Date(parseFloat(results[1]));
                    //$('#DhmModificationId' + HomeUpdateId).text(dt.toLocaleDateString() + ' ' + dt.toLocaleTimeString());
                    HomeUpdateEditShortLastDisplay(Id);
                });
            }
        });
    }
    else {
        $('#HomeUpdateEditSaveBtnId' + Id).find('span').attr('class', 'far fa-save');
        alert('Date non valide');
    }



}


//Open
function CollabMemberOpen() {
    //Set pattern
    var Pattern = 'CollabMember';

    //Hide all
    CollabAllReportsHide();
    CollabAllParametersHide();
    MenuBarHighlight(7, 7);

    //Set title
    ParamTitleSet('Liste des membres');

    //Show Parameters
    ShowReport('ParamReportId');
    ShowReport('NameId' + 'Parent');

    //Set OnChange
    //ElementOnChangeSet('TeamId', 'CollabMemberDisplay()');

    //Set action buttons
    ParamActionBtnDisplayGet(0, Pattern);
    ParamActionBtnAddGet(1, Pattern);

    //Set Name
    ParamNameLabelNameSet('Membre');

    //Display
    CollabTeamDisplay();
}


//Display
function CollabMemberDisplay() {
    //Set action button
    var ActionBtnId = ParamActionBtnIdDisplayGet();
    var Icon = ParamActionIconDisplayGet();

    //Get data
    var Keyword = GetElementValue('KeywordId');
    var TeamId = GetElementValue('TeamId');
    var MemberId = 0;

    CollabMemberGet(ActionBtnId, Icon, Keyword, TeamId, MemberId);
};


function CollabMemberGet(ActionBtnId, Icon, Keyword, TeamId, MemberId) {
    //Spin
    ActionBtnSpin(ActionBtnId);

    //Hide some datatables
    HideReport('CollabTeam' + 'TableReportId');

    //Set datatable patterns
    var Pattern = 'CollabMember';
    var PatternTableId = Pattern + 'TableId';
    var PatternTableReportId = Pattern + 'TableReportId';

    HideReport(PatternTableReportId);

    $('#' + PatternTableId).DataTable().destroy();;
    $('#' + PatternTableId).DataTable({
        "initComplete": function (settings, json) {
            ShowReport(PatternTableReportId);
            $('#' + ActionBtnId).find('span').attr('class', Icon);
        },
        "ajax": {
            "url": "/Collab/CollabMemberGet",
            "type": "GET",
            "datatype": "json",
            "data": {
                "Keyword": Keyword,
                "TeamId": TeamId,
                "MemberId": MemberId
            }
        },
        "columns": [
            { "data": "TeamName" },//0 
            { "data": "MemberId" },//1 img
            { "data": "FullName" },//2

            { "data": "MemberId" },//3 Modify
            { "data": "MemberId" },//4 Delete
        ],
        "columnDefs": [
            { "width": "3%", "className": "text-left", "targets": 0 },
            { "width": "3%", "className": "text-left", "targets": 1 },
            { "width": "3%", "className": "text-left", "targets": 2 },

            { "width": "3%", "className": "text-center", "targets": 3 },
            { "width": "3%", "className": "text-center", "targets": 4 },

            { "targets": 0, "render": function (data, type, row) { return data; } },
            { "targets": 1, "render": function (data, type, row) { return '<img class="dt-img-cl" src="/Images/Profil/' + data + '.jpg" />'; } },
            { "targets": 2, "render": function (data, type, row) { return data; } },

            { "targets": 3, "render": function (data, type, row) { return DataTableModalFormBtnEditGet(Pattern, data); } },
            { "targets": 4, "render": function (data, type, row) { return DataTableBtnDeleteGet(Pattern, data); } },
        ],
        "iDisplayLength": 50,
        "language": {
            "lengthMenu": "Afficher _MENU_ lignes par page",
            "zeroRecords": "Aucun résultat",
            "info": "Page _PAGE_ / _PAGES_ &nbsp;<i>(Nombre de lignes : _TOTAL_)</i>",
            "infoEmpty": "---",
            "infoFiltered": "(Nombre de lignes filtrées : _MAX_ total)",
            "search": "Rechercher ",
            "oPaginate": {
                "sNext": "Suivant",
                "sPrevious": "Précédent"
            }
        },
        "processing": false,
        "responsive": false,
        "bFilter": true,
        "autoWidth": false,
        "searching": false,
        "lengthChange": false,
        "showNEntries": false,
        "bInfo": false,
        "bPaginate": false,
        "ordering": true
    });
}


//Load
function CollabMemberFormLoad(Pattern, PatternForm, RowId) {
    //Sert FormIndex
    var FormIndex = 10;

    //Load
    var obj = {};
    obj.Keyword = '';
    obj.SystemId = 0;
    obj.DatabaseId = 0;
    obj.DataTypeId = '0';
    obj.TableId = 0;
    obj.ColumnId = RowId;

    $.ajax({
        url: "/BiColumn/BiColumnGet",
        method: "POST",
        data: JSON.stringify(obj),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: true,
        success: function (data) {
            jQuery.each(data, function (index, itemData) {

                //Get features
                var ColumnName = itemData[0].ColumnName;
                var Description = itemData[0].Description;
                var SqlDataTypeId = itemData[0].SqlDataTypeId;
                var Lenght = itemData[0].Lenght;
                var IsNullable = itemData[0].IsNullable;
                var KeyTypeId = itemData[0].KeyTypeId;

                //Set drop down lists
                HtmlDropDownListNameOnlyXorFill('SqlDataTypeId' + FormIndex, SqlDataTypeId, '/Bi/BiParamSqlDataTypesGet', 'SqlDataTypeId', 'SqlDataTypeName');
                HtmlDropDownListNameOnlyXorFill('KeyTypeId' + FormIndex, KeyTypeId, '/Bi/BiParamKeyTypesGet', 'KeyTypeId', 'KeyTypeName');

                //Set OnChange

                //Set inputs
                document.getElementById('NameId' + FormIndex).value = ColumnName;
                document.getElementById('DescriptionId' + FormIndex).value = Description;
                document.getElementById('LenghtId' + FormIndex).value = Lenght;
                document.getElementById('IsNullableId' + FormIndex).checked = IsNullable;

                //Hide some inputs

                //Set modal action buttons
                ModalActionBtnEditGet(Pattern, RowId, FormIndex);

                //Set labels
                $('#NameId' + FormIndex + 'Label').text("Colonne");

                //Set styles
                document.getElementById('DescriptionId' + FormIndex).style.height = '160px';
                document.getElementById('DescriptionId' + FormIndex).style.fontWeight = 'bold';

            });
        }
    })
}




function CollabTeamFormOnClickGet(PatternFix, PatternForm, TeamId, TeamName) {
    return 'CollabTeamFormLoad(\'' +
        PatternFix + '\',\'' +
        PatternForm + '\',\'' +
        TeamId + '\',\'' +
        TeamName + '\')';
}

//Load
function CollabTeamFormLoad(Pattern, PatternForm, RowId) {
    //Sert FormIndex
    var FormIndex = 1;

    //Load
    var obj = {};
    obj.Keyword = '';
    obj.TeamId = RowId;

    $.ajax({
        url: "/Collab/CollabTeamGet",
        method: "POST",
        data: JSON.stringify(obj),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: true,
        success: function (data) {
            jQuery.each(data, function (index, itemData) {

                //Get features
                var TeamName = itemData[0].TeamName;

                //Set inputs
                document.getElementById('TeamNameId' + FormIndex).value = TeamName;

                //Set modal action buttons
                ModalActionBtnEditGet(Pattern, RowId, FormIndex);
            });
        }
    })
}

function CollabTeamDisplay() {

    var ActionBtnId = 'ParamActionBtnId0';
    var Icon = 'fas fa-eye';
    var IsMargin = true;

    var Keyword = '';
    var TeamId = 0;

    CollabTeamGet(ActionBtnId, Icon, IsMargin, Keyword, TeamId);
}

function CollabTeamGet(ActionBtnId, Icon, IsMargin, Keyword, TeamId) {

    ActionSpin(ActionBtnId, IsMargin);

    var Pattern = 'CollabTeam';
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
            "url": "/Collab/CollabTeamGet",
            "type": "GET",
            "datatype": "json",
            "data": {
                "Keyword": Keyword,
                "TeamId": TeamId
            }
        },
        "columns": [
            { "data": "TeamName" },//0 Image 
            { "data": "ImagePath" },//1
            { "data": "TeamId" },//2 Modify
            { "data": "TeamId" },//3 Delete
        ],
        "columnDefs": [
            { "width": "3%", "className": "text-center", "targets": 0 },
            { "width": "3%", "className": "text-left", "targets": 1 },
            { "width": "3%", "className": "text-center", "targets": 2 },
            { "width": "3%", "className": "text-center", "targets": 3 },

            { "targets": 0, "render": function (data, type, row) { return data; } },
            { "targets": 1, "render": function (data, type, row) { return '<img class="dt-img-cl" src="' + row['ImagePath'] + '" />'; } },
            { "targets": 2, "render": function (data, type, row) { return DataTableModalFormBtnEditGet(Pattern, data); } },
            {
                "targets": 3, "render": function (data, type, row) {
                    return DataTableBtnGet('DataTableRowDelete', data, data + '\', \'CollabTeam', '', 'dt-btn-cl', 'far fa-trash-alt btn-icon-cl gc-c1-cl', 'dt-text-cl');
                    //return DataTableButtonWithPatternGet('DataTableRowDelete', data, 'CollabTeam', 'far fa-trash-alt', '000000"');
                }
            },

        ],
        "iDisplayLength": 50,
        "language": {
            "lengthMenu": "Afficher _MENU_ lignes par page",
            "zeroRecords": "Aucun résultat",
            "info": "Page _PAGE_ / _PAGES_ &nbsp;<i>(Nombre de lignes : _TOTAL_)</i>",
            "infoEmpty": "---",
            "infoFiltered": "(Nombre de lignes filtrées : _MAX_ total)",
            "search": "Rechercher ",
            "oPaginate": {
                "sNext": "Suivant",
                "sPrevious": "Précédent"
            }
        },
        "processing": false,
        "responsive": false,
        "bFilter": true,
        "autoWidth": false,
        "searching": false,
        "lengthChange": false,
        "showNEntries": false,
        "bInfo": false,
        "bPaginate": false,
        "ordering": true
    });
}

function CollabTeamAdd() {
    var ActionBtnId = 'ParamActionBtnId1';
    var Icon = 'fas fa-plus-circle';
    var IsMargin = true;

    var TeamName = GetElementValue('NameId');

    if (TeamName != '') {
        CollabTeamInsert(ActionBtnId, Icon, IsMargin, TeamName);
    }
    else {
        ParamMessageErrorDisplay('Le champ nom est obligatoire');
    }
}

function CollabTeamInsert(ActionBtnId, Icon, IsMargin, TeamName) {

    ActionSpin(ActionBtnId, IsMargin);

    var files = $("#FileId").get(0).files;
    var data = new FormData();
    for (var i = 0; i < files.length; i++) {
        data.append("FileId", files[i]);
    };

    data.append("TeamName", TeamName);

    $.ajax({
        url: "/Collab/CollabTeamAdd",
        method: "POST",
        dataType: "json",
        contentType: false,
        processData: false,
        data: data,
        success: function (data) {
            ActionBtnSet(ActionBtnId, Icon, IsMargin);
            CollabTeamDisplay();
        }
    });
}

function CollabTeamModify(TeamId) {
    var ActionBtnId = 'CollabTeamModifyBtnId';
    $('#' + ActionBtnId).find('span').attr('class', 'fa fa-spinner fa-spin');
    var Icon = 'far fa-save';
    var TeamName = GetElementValue('TeamNameId1');

    var obj = {};

    obj.TeamId = TeamId;
    obj.TeamName = TeamName;

    $.ajax({
        url: "/Collab/CollabTeamModify",
        method: "POST",
        data: JSON.stringify(obj),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            $('#' + ActionBtnId).find('span').attr('class', Icon);

            //$.each(data, function (index, row) {
            //    //alert(row.ProgressValue);
            //    $('#ProgressValueId' + Id).attr('style', 'width: ' + row.ProgressValue + '; background-color:' + row.RgbValue + '');                
            //    $('#SupportFullNameId' + Id).text(row.SupportFullName);

            //    var DhmModification = row.DhmModification
            //    if (DhmModification === null) return "";
            //    var pattern = /Date\(([^)]+)\)/;
            //    var results = pattern.exec(DhmModification);
            //    var dt = new Date(parseFloat(results[1]));
            //    $('#DhmModificationId' + Id).text(dt.toLocaleDateString() + ' ' + dt.toLocaleTimeString());
            //});             
        }
    });
}

function CollabTeamMembersGet(TeamId) {
    var ActionBtnId = new String('CollabTeamMembersBtnId');
    var Icon = 'fas fa-edit btn-icon-cl gc-c1-cl';
    var Pattern = 'CollabTeamMembers';
    var PatternTableId = Pattern + 'TableId';
    var PatternTableReportId = Pattern + 'TableReportId';

    HideReport(PatternTableReportId);

    $('#' + PatternTableId).DataTable().destroy();;
    $('#' + PatternTableId).DataTable({
        "initComplete": function (settings, json) {
            ShowReport(PatternTableReportId);
            $('#' + ActionBtnId).find('span').attr('class', Icon);
        },
        "ajax": {
            "url": "/Collab/CollabTeamMembersGet",
            "type": "GET",
            "datatype": "json",
            "data": {
                "TeamId": TeamId
            }
        },
        "columns": [
            { "data": "FullName" },//0 
            { "data": "MemberId" },//1
        ],
        "columnDefs": [
            { "width": "80%", "className": "text-left", "targets": 0 },
            { "width": "10%", "className": "text-center", "targets": 1 },

            //{ "targets": 1, "render": function (data, type, row) { return DataTableBtnWithInputGet('CollabTeamMemberDelete', data, drow['TeamId'], 'far fa-trash-alt', 'dt-btn-cl', 'dt-icon-sm-cl'); } },
            { "targets": 1, "render": function (data, type, row) { return DataTableBtnGet('CollabTeamMembersDelete', data, data + '\', \'' + row['TeamId'] + '', '', 'dt-btn-cl', 'far fa-trash-alt btn-icon-cl gc-c1-cl', 'dt-text-cl'); } },

        ],
        "iDisplayLength": 50,
        "language": {
            "lengthMenu": "Afficher _MENU_ lignes par page",
            "zeroRecords": "Aucun résultat",
            "info": "Page _PAGE_ / _PAGES_ &nbsp;<i>(Nombre de lignes : _TOTAL_)</i>",
            "infoEmpty": "---",
            "infoFiltered": "(Nombre de lignes filtrées : _MAX_ total)",
            "search": "Rechercher ",
            "oPaginate": {
                "sNext": "Suivant",
                "sPrevious": "Précédent"
            }
        },
        "processing": false,
        "responsive": false,
        "bFilter": true,
        "autoWidth": false,
        "searching": false,
        "lengthChange": false,
        "showNEntries": false,
        "bInfo": false,
        "bPaginate": false,
        "ordering": true
    });
}

function CollabTeamMembersFill() {
    var ElementId = 'MemberId2';
    var JsonRequest = '/Collab/CollabTeamMembersFill';
    var Keyword = GetElementValue('KeywordId2');
    var OptionId = 'MemberId';
    var OptionName = 'FullName';

    $('#' + ElementId).empty();
    var item = document.getElementById(ElementId);
    item.options.length = 0;
    var node = document.createElement("option");
    //node.value = 0;
    //var textnode = document.createTextNode("--");
    //node.appendChild(textnode);
    //item.appendChild(node);
    $.get(JsonRequest, { Keyword: Keyword }, function (data) {
        $.each(data, function (index, row) {
            node = document.createElement("option");
            node.value = row[OptionId];
            textnode = document.createTextNode(row[OptionName]);
            node.appendChild(textnode);
            item.appendChild(node);
        });
        //for (var j = 0, len = item.options.length; j < len; j++) {
        //    var opt = item.options[j];
        //    if (opt.value == DefaultValue) {
        //        item.options[j].selected = 'selected';
        //        break;
        //    }
        //};
    });
}

function CollabTaskTeamsFill() {
    var ElementId = 'TeamId3';
    var JsonRequest = '/Collab/CollabTaskTeamsFill';
    var Keyword = GetElementValue('KeywordId3');
    var OptionId = 'TeamId';
    var OptionName = 'TeamName';

    $('#' + ElementId).empty();
    var item = document.getElementById(ElementId);
    item.options.length = 0;
    var node = document.createElement("option");
    //node.value = 0;
    //var textnode = document.createTextNode("--");
    //node.appendChild(textnode);
    //item.appendChild(node);
    $.get(JsonRequest, { Keyword: Keyword }, function (data) {
        $.each(data, function (index, row) {
            node = document.createElement("option");
            node.value = row[OptionId];
            textnode = document.createTextNode(row[OptionName]);
            node.appendChild(textnode);
            item.appendChild(node);
        });
        //for (var j = 0, len = item.options.length; j < len; j++) {
        //    var opt = item.options[j];
        //    if (opt.value == DefaultValue) {
        //        item.options[j].selected = 'selected';
        //        break;
        //    }
        //};
    });
}

function CollabTaskTeamsAdd(TaskId) {

    var ActionBtnId = 'CollabTaskTeamsAddBtnId';
    $('#' + ActionBtnId).find('span').attr('class', 'fa fa-spinner fa-spin');

    var TeamId = GetElementValue('TeamId3');

    var Icon = 'fas fa-plus-circle btn-icon-cl gc-c1-cl';
    var obj = {};
    obj.TaskId = TaskId;
    obj.TeamId = TeamId;
    $.ajax({
        url: "/Collab/CollabTaskTeamsAdd",
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

function CollabTaskTeamsDelete(TeamId, TaskId) {

    var ActionBtnId = 'CollabTaskTeamsDeleteBtnId' + TeamId;
    $('#' + ActionBtnId).find('span').attr('class', 'fa fa-spinner fa-spin btn-icon-cl gc-c1-cl');

    var Icon = 'fas fa-minus-circle btn-icon-cl gc-c1-cl';
    var obj = {};
    obj.TeamId = TeamId;
    obj.TaskId = TaskId;
    $.ajax({
        url: "/Collab/CollabTaskTeamsDelete",
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


function CollabModulesGet(DefaultValue, Index) {
    var ServerId = GetElementValue('ServerId' + Index);
    var AppId = GetElementValue('AppId' + Index);
    var item = document.getElementById('ModuleId' + Index);
    item.options.length = 0;
    var node = document.createElement("option");
    node.value = 0;
    var textnode = document.createTextNode("Sélectionner Module");
    node.appendChild(textnode);
    item.appendChild(node);
    $.get("/Collab/CollabModulesGet", { Input0: ServerId, Input1: AppId }, function (data) {
        $.each(data, function (index, row) {
            var node = document.createElement("option");
            node.value = row.ModuleId;
            var textnode = document.createTextNode(row.ModuleName);
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

function CollabPluginsGet(DefaultValue, Index) {
    var ModuleId = GetElementValue('ModuleId' + Index);
    var item = document.getElementById('PluginId' + Index);
    item.options.length = 0;
    var node = document.createElement("option");
    node.value = 0;
    var textnode = document.createTextNode("Sélectionner Menu");
    node.appendChild(textnode);
    item.appendChild(node);
    $.get("/Collab/CollabPluginsGet", { Input: ModuleId }, function (data) {
        $.each(data, function (index, row) {
            var node = document.createElement("option");
            node.value = row.PluginId;
            var textnode = document.createTextNode(row.PluginName);
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
    ShowReport('PluginId' + Index + 'Parent');

    if (Index == '') {
        //CollabActionDisplay('0');
    }
}

function CollabAppsGet(DefaultValue, Index) {
    var ServerId = GetElementValue('ServerId' + Index);
    var item = document.getElementById('AppId' + Index);
    item.options.length = 0;
    var node = document.createElement("option");
    node.value = 0;
    var textnode = document.createTextNode("Sélectionner Application");
    node.appendChild(textnode);
    item.appendChild(node);
    $.get("/Collab/CollabAppsGet", { Input: ServerId }, function (data) {
        $.each(data, function (index, row) {
            var node = document.createElement("option");
            node.value = row.AppId;
            var textnode = document.createTextNode(row.AppName);
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


function CollabPresetGet(Index) {

    var ServerId = ElementDropDownListValueGet('ServerId' + Index);
    CollabAppsGet('0', Index);

    if (ServerId == 8) {//NA

        //Parents
        //ShowParent('KeywordId' + Index);
        //ShowParent('ModuleId' + Index);
        //ShowParent('PluginId' + Index);
        //ShowParent('EmergencyId' + Index);
        //ShowParent('UpdateStatusId' + Index);
        //HideParent('ChannelId' + Index);
        //ShowParent('DhmId' + Index);
        //ShowParent('MessageId' + Index);
        //ShowParent('UpdateStatusId' + Index);
        //ShowParent('TeamId' + Index);
        //HideParent('VersionId' + Index);
        //HideParent('HandledById' + Index);
        //ShowParent('IsToNotifyId' + Index);
        //ShowParent('FileId' + Index);
        //ShowParent('ServerId' + Index);
        //ShowParent('AppId' + Index);

        //HideParent('DhmValueNeedId' + Index);
        //HideParent('DhmValueValidId' + Index);
        //HideParent('DhmValueRealizeId' + Index);

        //HideParent('QuantityPMId' + Index);
        //HideParent('QuantityDevId' + Index);

        //ElementDropDownListSet('VersionId' + Index, '0');
        //ElementDropDownListSet('AppId' + Index, '7');
        //ElementDropDownListSet('HandledById' + Index, '0');

        //ElementValueSet('DhmValueNeedId' + Index, '');
        //ElementValueSet('DhmValueValidId' + Index, '');
        //ElementValueSet('DhmValueRealizeId' + Index, '');

        //ElementValueSet('QuantityPMId' + Index, 0);
        //ElementValueSet('QuantityDevId' + Index, 0);

        /*CollabAppsGet('0', Index);*/

    }
    else {

        

        //Parents
        //ShowParent('KeywordId' + Index);
        //ShowParent('ModuleId' + Index);
        //ShowParent('PluginId' + Index);
        //ShowParent('EmergencyId' + Index);
        //ShowParent('UpdateStatusId' + Index);
        //HideParent('ChannelId' + Index);
        //ShowParent('DhmId' + Index);
        //ShowParent('MessageId' + Index);
        //ShowParent('UpdateStatusId' + Index);
        //ShowParent('TeamId' + Index);
        //HideParent('VersionId' + Index);
        //ShowParent('HandledById' + Index);
        //ShowParent('IsToNotifyId' + Index);
        //ShowParent('FileId' + Index);
        //ShowParent('ServerId' + Index);
        //ShowParent('AppId' + Index);

        //ShowParent('DhmValueNeedId' + Index);
        //ShowParent('DhmValueValidId' + Index);
        //ShowParent('DhmValueRealizeId' + Index);

        //ShowParent('QuantityPMId' + Index);
        //ShowParent('QuantityDevId' + Index);

        //CollabAppsGet('0', Index);
    }
}


function CollabAdminOpen() {
    CollabAllReportsHide();
    CollabAllParametersHide();
    MenuBarHighlight(8, 8);

    ParamTitleSet('Administration');
    ShowReport('ParamReportId');
    ShowParent('ParamId');

    //Fill
    //HtmlDropDownListNameOnlyFill('ProjectId', '0', '/Project/ProjectsGet', 'ProjectId', 'ProjectName');
    //HtmlDropDownListWithInputNameOnlyFill('FunctionId', '0', '/Project/ProjectFunctionsAllFromCategoryGet', 'FunctionId', 'FunctionName', '0');
    //ElementDropDownListReset('BuildingId');
    //ElementDropDownListReset('LotId');

    //OnChange
    ElementOnClickSet('KeywordId', 'CommonUsersGet()'); 
    ElementOnChangeSet('ParamId', 'CollabAdminDisplay()');

    //ElementOnChangeSet('ProjectId', "ProjectLotsGet('0', '')");
    //ElementOnChangeSet('FunctionCategoryId', "ProjectFunctionsAllFromCategoryIdGet('0', '')")

    //OnClick
    /*ElementOnClickSet('ProjectId', "ProjectBuildingsGet('0', '')");*/

    //Display
    //ProjectAdminDisplay();
}

function CollabAdminDisplay() {

    CollabAllReportsHide();
    CollabAllParametersHide();
    ParamMessageReset();

    ShowReport('ParamReportId');
    ShowParent('ParamId');

    var ParamId = ElementDropDownListValueGet('ParamId');

    if (ParamId == '013') {//Members

        //ShowParents   
        ShowParent('KeywordId');
        ShowParent('TeamId');
        ShowParent('UserIdAdmin');

        //OnCahange
        ElementOnChangeSet('TeamId', 'CollabAdminMemberDisplay()');
        ElementOnChangeSet('UserIdAdmin', 'CollabAdminMemberDisplay()');

        ParamActionBtnGet(0, 'Afficher', 'fas fa-eye', "CollabAdminMemberDisplay()");
        ParamActionBtnGet(1, 'Ajouter', 'fas fa-plus-circle', 'CollabAdminMemberAdd()');
    }
}

function CollabAdminMemberDisplay() {

    var ActionBtnId = 'ParamActionBtnId0';
    var Icon = 'fas fa-eye';
    var IsMargin = true;

    var TeamId = ElementDropDownListValueGet('TeamId');
    var UserIdAdmin = ElementDropDownListValueGet('UserIdAdmin');

    CollabAdminMemberGet(ActionBtnId, Icon, IsMargin, TeamId, UserIdAdmin);
}


function CollabAdminMemberGet(ActionBtnId, Icon, IsMargin, TeamId, UserIdAdmin) {

    //Spin
    ActionSpin(ActionBtnId, IsMargin);

    var Pattern = 'CollabAdminMember';
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
            "url": "/Collab/CollabAdminMemberGet",
            "type": "GET",
            "datatype": "json",
            "data": {
                TeamId: TeamId,
                UserIdAdmin: UserIdAdmin
            }
        },
        "columns": [
            { "data": "TeamName" },//0
            { "data": "FullName" },//1
            { "data": "TeamMemberId" },//2
        ],
        "columnDefs": [
            { "width": "3%", "className": "text-left", "targets": 0 },
            { "width": "3%", "className": "text-left", "targets": 1 },
            { "width": "3%", "className": "text-center", "targets": 2 },

            { "targets": 0, "render": function (data, type, row) { return data; } },
            { "targets": 1, "render": function (data, type, row) { return data; } },
            { "targets": 2, "render": function (data, type, row) { return DataTableGetButton('CollabAdminMemberDelete', data, 'far fa-trash-alt', 'fe1200'); } },
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

function CollabAdminMemberAdd() {
    //Set action button
    var ActionBtnId = ParamActionBtnIdAddGet();
    var Icon = ParamActionIconAddGet();
    var IsMargin = true;

    //Get input values
    var TeamId = ElementDropDownListValueGet('TeamId');
    var UserIdAdmin = ElementDropDownListValueGet('UserIdAdmin');

    if (TeamId != '0' && UserIdAdmin != '0') {

        ParamMessageReset();

        //Spin
        ActionSpin(ActionBtnId, IsMargin);

        //Insert
        var obj = {};
        obj.TeamId = TeamId;
        obj.UserIdAdmin = UserIdAdmin;

        $.ajax({
            url: "/Collab/CollabAdminMemberAdd",
            method: "POST",
            data: JSON.stringify(obj),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {
                ActionBtnSet(ActionBtnId, Icon, IsMargin);
                CollabAdminMemberDisplay();
            }
        });

        //Connection
        NotiConnectionIdUpdate('Collaboration-Administration-Ajouter un membre');
    }
    else {
        ParamMessageErrorDisplay('Certains champs sont obligatoire')
    }
}

function CollabAdminMemberDelete(TeamMemberId) {

    var ActionBtnId = 'CollabAdminMemberDeleteBtnId' + TeamMemberId;
    var IsMargin = false;
    ActionSpin(ActionBtnId, IsMargin);
    var Icon = 'fas fa-minus-circle';
    var obj = {};
    obj.TeamMemberId = TeamMemberId;
    $.ajax({
        url: "/Collab/CollabAdminMemberDelete",
        method: "POST",
        data: JSON.stringify(obj),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            ActionBtnSet(ActionBtnId, Icon, IsMargin);
        }
    });
}


function CollabDetailGet(HomeUpdateId) {

    var ActionBtnId = 'CollabDetailGetBtnId' + HomeUpdateId;
    var Icon = 'fas fa-check-circle';

    //Spin
    ActionBtnMarginSpin(ActionBtnId);

    var Pattern = 'CollabDetail';
    var PatternTableId = Pattern + 'TableId';
    var PatternTableReportId = Pattern + 'TableReportId';

    HideReport(PatternTableReportId);

    $('#' + PatternTableId).DataTable().destroy();;
    $('#' + PatternTableId).DataTable({
        //"searchPanes": {
        //    "viewTotal": true
        //},
        //"dom": 'Plfrtip',
        //"scrollY": '600px',
        //"scrollCollapse": true,
        //"dom": 'Bfrtip',
        //"buttons": [
        //    'excel'
        //],
        "initComplete": function (settings, json) {
            ShowReport(PatternTableReportId);
            ActionBtnIconMarginSet(ActionBtnId, Icon);

            //var table = $('#' + PatternTableId).DataTable({
            //    searchPanes: {
            //        viewTotal: true
            //    },
            //    dom: 'Plfrtip'
            //});
            //$('#' + PatternTableId + ' tfoot th').each(function () {
            //    var title = $(this).text();
            //    $(this).html('<input type="text" placeholder="Search ' + title + '" />');
            //});

            //$('#' + PatternTableId).DataTable().columns().every(function () {
            //    var that = this;

            //    $('input', this.footer()).on('keyup change', function () {
            //        if (that.search() !== this.value) {
            //            that
            //                .search(this.value)
            //                .draw();
            //        }
            //    });
            //});


            //$('#' + PatternTableId + ' tfoot th').each(function () {
            //    var title = $(this).text();
            //    $(this).html('<input type="text" placeholder="Search ' + title + '" />');
            //});

            //var table = $('#' + PatternTableId).DataTable({
            //    searchPanes: {
            //        viewTotal: true
            //    },
            //    dom: 'Plfrtip'
            //});

            //table.columns().every(function () {
            //    var that = this;

            //    $('input', this.footer()).on('keyup change', function () {
            //        if (that.search() !== this.value) {
            //            that
            //                .search(this.value)
            //                .draw();
            //        }
            //    });
            //});

            $('[data-toggle="tooltip"]').tooltip();
        },
        "ajax": {
            "url": "/Collab/CollabDetailGet",
            "type": "GET",
            "datatype": "json",
            "data": {
                HomeUpdateId: HomeUpdateId
            }
        },
        "columns": [
            { "data": "DhmModification" },//0 
            { "data": "ResponseFullName" },//1
            { "data": "Response" },//2
            { "data": "ImagePath" },//3
        ],
        "columnDefs": [
            { "width": "3%", "className": "text-left", "targets": 0 },
            { "width": "3%", "className": "text-left", "targets": 1 },
            { "width": "3%", "className": "text-left", "targets": 2 },
            { "width": "3%", "className": "text-left", "targets": 3 },

            { "targets": 0, "orderable": false, "render": function (data, type, row) { return GetDateValueFromDataTableDate(data); } },           
            { "targets": 1, "orderable": false, "render": function (data, type, row) { return data; } },    
            {
                "targets": 2, "render": function (data, type, row) {
                    return DataTableLongTextGet('Réponse', data, 300);
                }
            },
            { "targets": 3, "render": function (data, type, row) { return CollabActionImageGet(row['ImagePath'], row['ImageExtension']); } },
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
        "autoWidth": true,
        "searching": false,
        "lengthChange": false,
        "showNEntries": false,
        "bInfo": false,
        "bPaginate": false,
        //"order": [[0, 'asc'], [1, 'asc']]
        "ordering": false,
        //"scrollY": '400px',
        //"scrollCollapse": true,
    });
}

function CalendarDayGet(datestring) {
    var Keyword = ''
    var ModuleId = '0';
    var PluginId = '0';
    var UpdateStatusId = '0';
    var EmergencyId = '0';
    var ChannelId = '0';

    var IdParent = '0';

    var ActionBtnId = 'CalendarDayGetBtnId' + datestring;
    var Icon = 'btn-icon-cl gc-c1-cl';
    var Pattern = 'HomeUpdateEdit';
    var TeamId = '0';

    HomeUpdateEditGet(ActionBtnId, Icon, Pattern, Keyword, IdParent, ModuleId, PluginId, UpdateStatusId, EmergencyId, ChannelId, datestring, TeamId);
}