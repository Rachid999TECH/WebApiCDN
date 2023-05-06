function AdminAllReportsHide() {
    //HideReport('HomeReportId');
    HideReport('ParamReportId');

    HideTableReport('AdminUserInfos');
    HideTableReport('AdminUserRegions');
    HideTableReport('AdminUserLS');
    HideTableReport('AdminUserStation');
    HideTableReport('AdminUserRoles');
    HideTableReport('AdminUserNotif');
    HideTableReport('AdminUserCell');
    HideTableReport('AdminServers');
    HideTableReport('AdminApps');
}

function AdminAllParametersHide() {

    HideParent('EmailKeyId');
    HideParent('EmailId');
    HideParent('LastNameId');
    HideParent('FirstNameId');
    HideParent('RegionId');
    HideParent('LSId');
    HideParent('CellId');
    HideParent('JobCodeId');
    HideParent('RoleId');
    HideParent('ServerId');
    HideParent('AppId');
    HideParent('StationNumberId');
    HideParent('NotifId');

    HideReport('ParamActionContainerId0');
    HideReport('ParamActionContainerId1');
}

function AdminHomeOpen() {
    AdminAllReportsHide();
    AdminAllParametersHide();
    MenuBarNavHighlight(0, 7, 6);    

    //set drop down list    
    HtmlDropDownListNameOnlyWithInputFill('EmailId', '0', '/Param/ParamEmailsGet', 'UserId', 'Email', '');
    HtmlDropDownListNameOnlyFill('JobCodeId', '0', '/Param/ParamJobsGet', 'JobCode', 'JobName');
    HtmlDropDownListNameOnlyFill('RegionId', '0', '/Param/ParamRegionsSecGet', 'RegionId', 'RegionNameShort');
    HtmlDropDownListNameOnlyFill('RoleId', '0', '/Param/ParamUserRolesGet', 'RoleId', 'RoleName');
    HtmlDropDownListNameOnlyFill('ServerId', '0', '/Admin/ParamServersGet', 'ServerId', 'LocalIpAddress');
    HtmlDropDownListNameOnlyFill('NotifId', '0', '/Admin/ParamNotifGet', 'NotifId', 'NotifName');
    HtmlDropDownListNameOnlyWithInputFill('AppId', '0', '/Admin/ParamAppsGet', 'AppId', 'AppName', '0');

    //Reste
    ElementDropDownListReset('LSId');
    ElementDropDownListReset('CellId');
    ElementDropDownListReset('StationNumberId');

    //Set OnChange
    ElementOnClickSet('EmailKeyId', 'ParamEmailsGet()');    
    ElementOnClickSet('JobCodeId', 'AdminUserInfosDisplay()');
    ElementOnClickSet('LSId', 'ParamStationsFromLSGet()');
    ParamLSFromRegionSecGet();

    //Connection
    NotiConnectionIdUpdate('Administration > Accueil');
}

function ParamEmailsGet() {
    var Keyword = GetElementValue('EmailKeyId');
    $("#EmailId").empty();
    $.get("/Param/ParamEmailsGet", { Input: Keyword }, function (data) {
        $.each(data, function (index, row) {
            $("#EmailId").append("<option value='" + row.UserId + "'>" + row.Email + "</option>")
        });
    });
    $("#EmailId").append("<option value='" + 0 + "'>" + "--" + "</option>");
    $("#EmailId").val('0');
}

function AdminUsersOpen() {
    AdminAllReportsHide();
    AdminAllParametersHide();
    MenuBarNavHighlight(0, 3, 2);

    //Connection
    NotiConnectionIdUpdate('Admin-Utilisateurs');
}

function AdminUserInfosOpen() {
    AdminAllReportsHide();
    AdminAllParametersHide();
    MenuBarNavHighlight(0, 0, 6);

    

    //Title
    ParamTitleSet('Informations utilisateur');

    //Params
    ShowReport('ParamReportId');
    ShowParent('EmailKeyId');
    ShowParent('EmailId');
    ShowParent('LastNameId');
    ShowParent('FirstNameId');
    ShowParent('JobCodeId');

    //OnChange
    ElementOnChangeSet('EmailId', 'AdminUserInfosDisplay()');

    //Actions
    ParamActionBtnGet(0, 'Afficher', 'fas fa-eye', 'AdminUserInfosDisplay()');
    ParamActionBtnGet(1, 'Ajouter', 'fas fa-plus-circle', 'AdminUserInfosAdd()');

    AdminUserInfosDisplay();

    //Connection
    NotiConnectionIdUpdate('Administration > Utilisateurs > Infos');
}


function AdminUserInfosDisplay() {
    //Set action button
    var ActionBtnId = ParamActionBtnIdDisplayGet();
    var Icon = ParamActionIconDisplayGet();

    //Get input values
    var UserId = GetElementValue('EmailId');
    var LastName = GetElementValue('LastNameId');
    var FirstName = GetElementValue('FirstNameId');
    var JobCode = GetElementValue('JobCodeId');

    AdminUserInfosGet(ActionBtnId, Icon, UserId, LastName, FirstName, JobCode);
}

function AdminUserInfosGet(ActionBtnId, Icon, UserId, LastName, FirstName, JobCode) {
    //Spin
    ActionBtnMarginSpin(ActionBtnId);

    //Hide some reports
    AdminAllReportsHide();
    ShowReport('ParamReportId');
    ParamMessageReset();

    var Pattern = 'AdminUserInfos';
    var PatternTable = Pattern + 'TableId';
    var PatternTableReportId = Pattern + 'TableReportId';

    $('#' + PatternTable).DataTable().destroy();;
    $('#' + PatternTable).DataTable({
        "dom": 'Bfrtip',
        "buttons": [
            'copy', 'csv', 'excel', 'pdf', 'print'
        ],
        "initComplete": function (settings, json) {
            ShowReport(PatternTableReportId);
            $('#' + ActionBtnId).find('span').attr('class', Icon);
        },
        "ajax": {
            "url": "/Admin/AdminUserInfosGet",
            "type": "GET",
            "datatype": "json",
            "data": {
                UserId: UserId,
                LastName: LastName,
                FirstName: FirstName,
                JobCode: JobCode
            }
        },
        "columns": [
            { "data": "UserId" },//0
            { "data": "LastName" },//1
            { "data": "FirstName" },//2
            { "data": "Email" },//3

            { "data": "AxleIds" },//4
            { "data": "RegionIds" },//5
            { "data": "LSIds" },//6

            { "mData": function vehicle(data, type, dataToSet) { return data.UserId + data.ImageExtension; } },//7
            
            { "data": "UserId" },//8
            { "data": "UserId" },//9
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

            { "width": "3%", "className": "text-center", "targets": 8 },
            { "width": "3%", "className": "text-center", "targets": 9 },

            { "targets": 0, "render": function (data, type, row) { return data; } },
            { "targets": 1, "render": function (data, type, row) { return data; } },
            { "targets": 2, "render": function (data, type, row) { return data; } },
            { "targets": 3, "render": function (data, type, row) { return data; } },

            { "targets": 4, "render": function (data, type, row) { return data; } },
            { "targets": 5, "render": function (data, type, row) { return data; } },
            { "targets": 6, "render": function (data, type, row) { return data; } },

            { "targets": 7, "render": function (data, type, row) { return AdminUserImageGet(row['UserId'], row['ImageExtension']); } },

            { "targets": 8, "render": function (data, type, row) { return DataTableModalFormBtnEditGet(Pattern, data); } },
            {
                "targets": 9, "render": function (data, type, row) {
                    var Id = row['UserId'];
                    var argument = row['UserId'];
                    var text = '';
                    var BtnClass = 'dt-btn-cl gc-bc1-cl';
                    var SpanClass = 'far fa-trash-alt btn-icon-cl gc-c1-cl';
                    var TextClass = 'dt-text-cl';

                    return DataTableButtonGet('AdminUserInfosDelete', Id, argument, text, BtnClass, SpanClass, TextClass);
                }
            },
        ],
        "iDisplayLength": 100,
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
        "bFilter": true,
        "autoWidth": false,
        "searching": true,
        "lengthChange": false,
        "showNEntries": true,
        "bInfo": true,
        "bPaginate": true,
        "ordering": false
    });

    //Connection
    NotiConnectionIdUpdate('Admin-Utilisateur-Infos-Afficher');
}

function AdminUserImageGet(UserId, ImageExtension) {

    var ProfilImgUrl = '/Images/Profil/' + UserId + ImageExtension;
    return '<a href="' + ProfilImgUrl + '" target="_blank">' +
        '<img id="FriendImageToId" class="profile-image" src="' + ProfilImgUrl + '" alt="">' +
        '</a>';
}

function AdminUserInfosAdd() {
    //Set action button
    var ActionBtnId = ParamActionBtnIdAddGet();
    var Icon = ParamActionIconAddGet();

    //Get input values
    var UserId = GetElementValue('EmailId');
    var LastName = GetElementValue('LastNameId');
    var FirstName = GetElementValue('FirstNameId');
    var JobCode = GetElementValue('JobCodeId');

    
    if (UserId != '0' &&
        LastName != '' &&
        FirstName != '' &&
        JobCode != '0'
    ) {
        ParamMessageReset();
        AdminUserInfosInsert(ActionBtnId, Icon, UserId, LastName, FirstName, JobCode);
    }
    else {
        ParamMessageErrorDisplay('Certains champs sont obligatoire')
    }
}

function AdminUserInfosInsert(ActionBtnId, Icon, UserId, LastName, FirstName, JobCode) {
    //Spin
    ActionBtnSpin(ActionBtnId);

    //Insert
    var obj = {};
    obj.UserId = UserId;
    obj.LastName = LastName;
    obj.FirstName = FirstName;
    obj.JobCode = JobCode;

    $.ajax({
        url: "/Admin/AdminUserInfosInsert",
        method: "POST",
        data: JSON.stringify(obj),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            ActionBtnIconSet(ActionBtnId, Icon);
            AdminUserInfosDisplay();
            ElementInputSet('LastNameId', '');
            ElementInputSet('FirstNameId', '');
        }
    });

    //Connection
    NotiConnectionIdUpdate('Admin-Utilisateur-Infos-Ajouter');
}

function AdminUserRegionsOpen() {
    AdminAllReportsHide();
    AdminAllParametersHide();
    MenuBarNavHighlight(0, 1, 6);

    //Title
    ParamTitleSet('Régions utilisateur');

    //Params
    ShowReport('ParamReportId');
    ShowParent('EmailKeyId');
    ShowParent('EmailId');
    ShowParent('RegionId');

    //OnChange
    ElementOnChangeSet('EmailId', 'AdminUserRegionsDisplay()');
    ElementOnChangeSet('RegionId', 'AdminUserRegionsDisplay()');


    //Actions
    ParamActionBtnGet(0, 'Afficher', 'fas fa-eye', 'AdminUserRegionsDisplay()');
    ParamActionBtnGet(1, 'Ajouter', 'fas fa-plus-circle', 'AdminUserRegionsAdd()');

    AdminUserRegionsDisplay();

    //Connection
    NotiConnectionIdUpdate('Administration > Utilisateurs > Régions');
}


function AdminUserRegionsDisplay() {
    //Set action button
    var ActionBtnId = ParamActionBtnIdDisplayGet();
    var Icon = ParamActionIconDisplayGet();

    //Get input values
    var UserId = GetElementValue('EmailId');
    var RegionId = GetElementValue('RegionId');

    AdminUserRegionsGet(ActionBtnId, Icon, UserId, RegionId);
}


function AdminUserRegionsGet(ActionBtnId, Icon, UserId, RegionId) {
    //Spin
    ActionBtnMarginSpin(ActionBtnId);

    //Hide some reports
    AdminAllReportsHide();
    ShowReport('ParamReportId');
    ParamMessageReset();

    var Pattern = 'AdminUserRegions';
    var PatternTable = Pattern + 'TableId';
    var PatternTableReportId = Pattern + 'TableReportId';

    $('#' + PatternTable).DataTable().destroy();;
    $('#' + PatternTable).DataTable({
        "dom": 'Bfrtip',
        "buttons": [
            'copy', 'csv', 'excel', 'pdf', 'print'
        ],
        "initComplete": function (settings, json) {
            ShowReport(PatternTableReportId);
            $('#' + ActionBtnId).find('span').attr('class', Icon);
        },
        "ajax": {
            "url": "/Admin/AdminUserRegionsGet",
            "type": "GET",
            "datatype": "json",
            "data": {
                UserId: UserId,
                RegionId: RegionId
            }
        },
        "columns": [
            { "data": "RegionId" },//0
            { "data": "RegionNameShort" },//1
            { "data": "RegionName" },//2

            { "data": "UserId" },//3
        ],
        "columnDefs": [
            { "width": "3%", "className": "text-center", "targets": 0 },
            { "width": "3%", "className": "text-left", "targets": 1 },
            { "width": "3%", "className": "text-left", "targets": 2 },

            { "width": "3%", "className": "text-center", "targets": 3 },

            { "targets": 0, "render": function (data, type, row) { return data; } },
            { "targets": 1, "render": function (data, type, row) { return data; } },
            { "targets": 2, "render": function (data, type, row) { return data; } },

            {
                "targets": 3, "render": function (data, type, row) {
                    var Id = row['UserId'];
                    var argument = row['UserId'];
                    var text = '';
                    var BtnClass = 'dt-btn-cl gc-bc1-cl';
                    var SpanClass = 'far fa-trash-alt btn-icon-cl gc-c1-cl';
                    var TextClass = 'dt-text-cl';

                    return DataTableButtonGet('AdminUserRegionsDelete', Id, argument, text, BtnClass, SpanClass, TextClass);
                }
            },
        ],
        "iDisplayLength": 100,
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
        "bFilter": true,
        "autoWidth": false,
        "searching": true,
        "lengthChange": false,
        "showNEntries": true,
        "bInfo": true,
        "bPaginate": true,
        "ordering": false
    });

    //Connection
    NotiConnectionIdUpdate('Administration > Utilisateur > Régions > Afficher');
}


function AdminUserRegionsAdd() {
    //Set action button
    var ActionBtnId = ParamActionBtnIdAddGet();
    var Icon = ParamActionIconAddGet();

    //Get input values
    var UserId = GetElementValue('EmailId');
    var RegionId = GetElementValue('RegionId');

    if (UserId != '0' &&
        RegionId != '0'
    ) {
        ParamMessageReset();
        AdminUserRegionsInsert(ActionBtnId, Icon, UserId, RegionId);
    }
    else {
        ParamMessageErrorDisplay('Certains champs sont obligatoire')
    }
}


function AdminUserRegionsInsert(ActionBtnId, Icon, UserId, RegionId) {
    //Spin
    ActionBtnSpin(ActionBtnId);

    //Insert
    var obj = {};
    obj.UserId = UserId;
    obj.RegionId = RegionId;

    $.ajax({
        url: "/Admin/AdminUserRegionsInsert",
        method: "POST",
        data: JSON.stringify(obj),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            ActionBtnIconSet(ActionBtnId, Icon);
            AdminUserRegionsDisplay();
        }
    });

    //Connection
    NotiConnectionIdUpdate('Admin-Utilisateur-Régions-Ajouter');
}

function AdminUserLSOpen() {
    AdminAllReportsHide();
    AdminAllParametersHide();
    MenuBarNavHighlight(0, 2, 6);

    //Title
    ParamTitleSet('LS utilisateur');

    //Params
    ShowReport('ParamReportId');
    ShowParent('EmailKeyId');
    ShowParent('EmailId');
    ShowParent('RegionId');
    ShowParent('LSId');

    //OnChange
    ElementOnChangeSet('EmailId', 'AdminUserLSDisplay()');
    ElementOnChangeSet('RegionId', 'AdminUserLSDisplay()');
    ElementOnChangeSet('LSId', 'AdminUserLSDisplay()');

    //OnClick
    ElementOnClickSet('RegionId', 'ParamLSFromRegionSecGet()');

    //Actions
    ParamActionBtnGet(0, 'Afficher', 'fas fa-eye', 'AdminUserLSDisplay()');
    ParamActionBtnGet(1, 'Ajouter', 'fas fa-plus-circle', 'AdminUserLSAdd()');

    AdminUserLSDisplay();

    //Connection
    NotiConnectionIdUpdate('Administration > Utilisateurs > LS');
}


function AdminUserLSDisplay() {
    //Set action button
    var ActionBtnId = ParamActionBtnIdDisplayGet();
    var Icon = ParamActionIconDisplayGet();

    //Get input values
    var UserId = GetElementValue('EmailId');
    var RegionId = GetElementValue('RegionId');
    var LSId = GetElementValue('LSId');

    AdminUserLSGet(ActionBtnId, Icon, UserId, RegionId, LSId);
}


function AdminUserLSGet(ActionBtnId, Icon, UserId, RegionId, LSId) {
    //Spin
    ActionBtnMarginSpin(ActionBtnId);

    //Hide some reports
    AdminAllReportsHide();
    ShowReport('ParamReportId');
    ParamMessageReset();

    var Pattern = 'AdminUserLS';
    var PatternTable = Pattern + 'TableId';
    var PatternTableReportId = Pattern + 'TableReportId';

    $('#' + PatternTable).DataTable().destroy();;
    $('#' + PatternTable).DataTable({
        "dom": 'Bfrtip',
        "buttons": [
            'copy', 'csv', 'excel', 'pdf', 'print'
        ],
        "initComplete": function (settings, json) {
            ShowReport(PatternTableReportId);
            $('#' + ActionBtnId).find('span').attr('class', Icon);
        },
        "ajax": {
            "url": "/Admin/AdminUserLSGet",
            "type": "GET",
            "datatype": "json",
            "data": {
                UserId: UserId,
                RegionId: RegionId,
                LSId: LSId
            }
        },
        "columns": [
            { "data": "LSId" },//0
            { "data": "LSName" },//1

            { "data": "UserId" },//2
        ],
        "columnDefs": [
            { "width": "3%", "className": "text-center", "targets": 0 },
            { "width": "3%", "className": "text-left", "targets": 1 },

            { "width": "3%", "className": "text-center", "targets": 2 },

            { "targets": 0, "render": function (data, type, row) { return data; } },
            { "targets": 1, "render": function (data, type, row) { return data; } },

            {
                "targets": 2, "render": function (data, type, row) {
                    var Id = row['UserId'] + row['LSId'];
                    var argument = '\'' + row['UserId'] + '\' , \'' + row['LSId'] + '\'';
                    var text = '';
                    var BtnClass = 'dt-btn-cl gc-bc1-cl';
                    var SpanClass = 'far fa-trash-alt btn-icon-cl gc-c1-cl';
                    var TextClass = 'dt-text-cl';

                    return DataTableButtonGet('AdminUserLSDelete', Id, argument, text, BtnClass, SpanClass, TextClass);
                }
            },
        ],
        "iDisplayLength": 100,
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
        "bFilter": true,
        "autoWidth": false,
        "searching": true,
        "lengthChange": false,
        "showNEntries": true,
        "bInfo": true,
        "bPaginate": true,
        "ordering": false
    });

    //Connection
    NotiConnectionIdUpdate('Administration > Utilisateur > LS > Afficher');
}


function AdminUserLSAdd() {
    //Set action button
    var ActionBtnId = ParamActionBtnIdAddGet();
    var Icon = ParamActionIconAddGet();

    //Get input values
    var UserId = GetElementValue('EmailId');
    var LSId = GetElementValue('LSId');

    if (UserId != '0' &&
        LSId != '0' 
    ) {
        ParamMessageReset();
        AdminUserLSInsert(ActionBtnId, Icon, UserId, LSId);
    }
    else {
        ParamMessageErrorDisplay('Certains champs sont obligatoire')
    }
}


function AdminUserLSInsert(ActionBtnId, Icon, UserId, LSId) {
    //Spin
    ActionBtnSpin(ActionBtnId);

    //Insert
    var obj = {};
    obj.UserId = UserId;
    obj.LSId = LSId;

    $.ajax({
        url: "/Admin/AdminUserLSInsert",
        method: "POST",
        data: JSON.stringify(obj),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            ActionBtnIconSet(ActionBtnId, Icon);
            AdminUserLSDisplay();
        }
    });

    //Connection
    NotiConnectionIdUpdate('Administration > Utilisateur > LS > Ajouter');
}


function AdminUserLSDelete(UserId, LSId) {

    var ActionBtnId = 'AdminUserLSDeleteBtnId' + UserId + LSId;
    var IsMargin = false;
    var Icon = 'fas fa-minus-circle';
    ActionSpin(ActionBtnId, IsMargin);

    var obj = {};
    obj.UserId = UserId;
    obj.LSId = LSId;
    $.ajax({
        url: "/Admin/AdminUserLSDelete",
        method: "POST",
        data: JSON.stringify(obj),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            ActionBtnSet(ActionBtnId, Icon, IsMargin);
        },
        error: function (request, status, error) {
            alert('Vous ne disposez pas des autorisations nécessaires pour effectuer cette action');
        }
    });
}

function AdminUserRoleOpen() {
    AdminAllReportsHide();
    AdminAllParametersHide();
    MenuBarNavHighlight(0, 3, 6);

    //Title
    ParamTitleSet('Rôles utilisateur');

    //Params
    ShowReport('ParamReportId');
    ShowParent('EmailKeyId');
    ShowParent('EmailId');
    ShowParent('RoleId');

    //OnChange
    ElementOnChangeSet('EmailId', 'AdminUserRolesDisplay()');
    ElementOnChangeSet('RoleId', 'AdminUserRolesDisplay()');

    //Actions
    ParamActionBtnGet(0, 'Afficher', 'fas fa-eye', 'AdminUserRolesDisplay()');
    ParamActionBtnGet(1, 'Ajouter', 'fas fa-plus-circle', 'AdminUserRolesAdd()');

    AdminUserRolesDisplay();

    //Connection
    NotiConnectionIdUpdate('Administration > Utilisateur > Rôles');
}


function AdminUserRolesDisplay() {
    //Set action button
    var ActionBtnId = ParamActionBtnIdDisplayGet();
    var Icon = ParamActionIconDisplayGet();

    //Get input values
    var UserId = GetElementValue('EmailId');
    var RoleId = GetElementValue('RoleId');

    AdminUserRolesGet(ActionBtnId, Icon, UserId, RoleId);
}


function AdminUserRolesGet(ActionBtnId, Icon, UserId, RoleId) {
    //Spin
    ActionBtnMarginSpin(ActionBtnId);

    //Hide some reports
    AdminAllReportsHide();
    ShowReport('ParamReportId');
    ParamMessageReset();

    var Pattern = 'AdminUserRoles';
    var PatternTable = Pattern + 'TableId';
    var PatternTableReportId = Pattern + 'TableReportId';

    $('#' + PatternTable).DataTable().destroy();;
    $('#' + PatternTable).DataTable({
        "dom": 'Bfrtip',
        "buttons": [
            'copy', 'csv', 'excel', 'pdf', 'print'
        ],
        "initComplete": function (settings, json) {
            ShowReport(PatternTableReportId);
            $('#' + ActionBtnId).find('span').attr('class', Icon);
        },
        "ajax": {
            "url": "/Admin/AdminUserRolesGet",
            "type": "GET",
            "datatype": "json",
            "data": {
                UserId: UserId,
                RoleId: RoleId
            }
        },
        "columns": [
            { "data": "RoleId" },//0
            { "data": "RoleName" },//1

            { "data": "UserId" },//2
        ],
        "columnDefs": [
            { "width": "3%", "className": "text-center", "targets": 0 },
            { "width": "3%", "className": "text-left", "targets": 1 },

            { "width": "3%", "className": "text-center", "targets": 2 },

            { "targets": 0, "render": function (data, type, row) { return data; } },
            { "targets": 1, "render": function (data, type, row) { return data; } },

            {
                "targets": 2, "render": function (data, type, row) {
                    var Id = row['UserId'];
                    var argument = row['UserId'];
                    var text = '';
                    var BtnClass = 'dt-btn-cl gc-bc1-cl';
                    var SpanClass = 'far fa-trash-alt btn-icon-cl gc-c1-cl';
                    var TextClass = 'dt-text-cl';

                    return DataTableButtonGet('AdminUserRolesDelete', Id, argument, text, BtnClass, SpanClass, TextClass);
                }
            },
        ],
        "iDisplayLength": 100,
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
        "bFilter": true,
        "autoWidth": false,
        "searching": true,
        "lengthChange": false,
        "showNEntries": true,
        "bInfo": true,
        "bPaginate": true,
        "ordering": false
    });

    //Connection
    NotiConnectionIdUpdate('Administration > Utilisateur > Rôles > Afficher');
}


function AdminUserRolesAdd() {
    //Set action button
    var ActionBtnId = ParamActionBtnIdAddGet();
    var Icon = ParamActionIconAddGet();

    //Get input values
    var UserId = GetElementValue('EmailId');
    var RoleId = GetElementValue('RoleId');

    if (UserId != '0' &&
        RoleId != '0'
    ) {
        ParamMessageReset();
        AdminUserRolesInsert(ActionBtnId, Icon, UserId, RoleId);
    }
    else {
        ParamMessageErrorDisplay('Certains champs sont obligatoire')
    }
}


function AdminUserRolesInsert(ActionBtnId, Icon, UserId, RoleId) {
    //Spin
    ActionBtnSpin(ActionBtnId);

    //Insert
    var obj = {};
    obj.UserId = UserId;
    obj.RoleId = RoleId;

    $.ajax({
        url: "/Admin/AdminUserRolesInsert",
        method: "POST",
        data: JSON.stringify(obj),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            ActionBtnIconSet(ActionBtnId, Icon);
            AdminUserRolesDisplay();
        }
    });

    //Connection
    NotiConnectionIdUpdate('Administration > Utilisateur > Rôles > Ajouter');
}


function AdminSupervisionHomeOpen() {
    AdminAllReportsHide();
    AdminAllParametersHide();
    MenuBarNavHighlight(1, 2, 1);

    //Connection
    NotiConnectionIdUpdate('Administration > Serveurs > Accueil');
}

function AdminServersOpen() {
    AdminAllReportsHide();
    AdminAllParametersHide();
    MenuBarNavHighlight(1, 0, 1);

    //Title
    ParamTitleSet('Gestion des serveurs');

    //Params

    //Actions
    ParamActionBtnGet(0, 'Afficher', 'fas fa-eye', 'AdminServersDisplay()');

    AdminServersDisplay();

    //Connection
    NotiConnectionIdUpdate('Administration > Supervision > Serveurs');
}

function AdminServersDisplay() {
    //Set action button
    var ActionBtnId = ParamActionBtnIdDisplayGet();
    var Icon = ParamActionIconDisplayGet();

    AdminServersGet(ActionBtnId, Icon);
}

function AdminServersGet(ActionBtnId, Icon) {
    //Spin
    ActionBtnMarginSpin(ActionBtnId);

    //Hide some reports
    AdminAllReportsHide();
    ShowReport('ParamReportId');
    ParamMessageReset();

    var Pattern = 'AdminServers';
    var PatternTable = Pattern + 'TableId';
    var PatternTableReportId = Pattern + 'TableReportId';

    $('#' + PatternTable).DataTable().destroy();;
    $('#' + PatternTable).DataTable({
        "initComplete": function (settings, json) {
            ShowReport(PatternTableReportId);
            $('#' + ActionBtnId).find('span').attr('class', Icon);
        },
        "ajax": {
            "url": "/Admin/AdminServersGet",
            "type": "GET",
            "datatype": "json",
            //"data": {
            //    UserId: UserId,
            //    LastName: LastName,
            //    FirstName: FirstName
            //}
        },
        "columns": [
            { "data": "LocalIpAddress" },//0
            { "data": "VpnIpAddress" },//1

            { "data": "ServerName" },//2
            { "data": "Usage" },//3

            { "data": "ServerId" },//4
            { "data": "ServerId" },//5
            { "data": "ServerId" },//6

            { "data": "ServerId" },//7
            { "data": "ServerId" },//8
            { "data": "ServerId" },//9

            { "data": "DhmUpdate" },//10
        ],
        "columnDefs": [
            { "width": "3%", "className": "text-center", "targets": 0 },
            { "width": "3%", "className": "text-left", "targets": 1 },

            { "width": "3%", "className": "text-left", "targets": 2 },
            { "width": "3%", "className": "text-left", "targets": 3 },

            { "width": "3%", "className": "text-left", "targets": 4 },
            { "width": "3%", "className": "text-left", "targets": 5 },
            { "width": "3%", "className": "text-left", "targets": 6 },

            { "width": "1%", "className": "text-left", "targets": 7 },
            { "width": "1%", "className": "text-left", "targets": 8 },
            { "width": "1%", "className": "text-left", "targets": 9 },

            { "width": "3%", "className": "text-left", "targets": 10 },

            { "targets": 0, "render": function (data, type, row) { return data; } },
            { "targets": 1, "render": function (data, type, row) { return data; } },

            { "targets": 2, "render": function (data, type, row) { return data; } },
            { "targets": 3, "render": function (data, type, row) { return data; } },

            { "targets": 4, "render": function (data, type, row) { return AdminDiskSpaceGet(data, row['DriveLetter1'], row['DriveTotalSpace1'], row['DriveFreeSpace1']); } },
            { "targets": 5, "render": function (data, type, row) { return AdminDiskSpaceGet(data, row['DriveLetter2'], row['DriveTotalSpace2'], row['DriveFreeSpace2']); } },
            { "targets": 6, "render": function (data, type, row) { return AdminDiskSpaceGet(data, row['DriveLetter3'], row['DriveTotalSpace3'], row['DriveFreeSpace3']); } },

            {
                "targets": 7, "render": function (data, type, row) {
                    return DataTableButtonGet('AdminServerTaskRun', data, data + ', \'disc-space-read\'', '', 'dt-btn-cl gc-bc1-cl', 'fas fa-redo-alt btn-icon-cl gc-c1-cl', '')
                }
            },
            {
                "targets": 8, "render": function (data, type, row) {
                    return DataTableButtonGet('AdminServerTaskRun', data, data + ', \'clean\'', '', 'dt-btn-cl gc-bc1-cl', 'fas fa-redo-alt btn-icon-cl gc-c1-cl', '')
                }
            },
            {
                "targets": 9, "render": function (data, type, row) {
                    return DataTableButtonGet('AdminServerTaskRun', data, data + ', \'restart\'', '', 'dt-btn-cl gc-bc1-cl', 'fas fa-redo-alt btn-icon-cl gc-c1-cl', '')
                }
            },
            { "targets": 10, "render": function (data, type, row) { return GetDhmValueFromDataTableDate(data); } },
        ],
        "iDisplayLength": 100,
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
        "bFilter": true,
        "autoWidth": false,
        "searching": true,
        "lengthChange": false,
        "showNEntries": true,
        "bInfo": true,
        "bPaginate": true,
        "ordering": false
    });

    //Connection
    NotiConnectionIdUpdate('Administration > Supervision > Serveurs');
}

function AdminDiskSpaceGet(ServerId, DriveLetter, TotalSpace, FreeSpace) {
    var UserdSpace = TotalSpace - FreeSpace;
    var Label = FreeSpace.toFixed(2) + ' GB libre de ' + TotalSpace.toFixed(2) + ' GB';
    var ProgressValue = ((UserdSpace / TotalSpace) * 100).toFixed(2);

    if (TotalSpace == 0) {
        return '';
        //return '<div class="progress">' +
        //    '<div id="ProgressBarThreadId' + Id + '"' +
        //    'class="progress-bar progress-bar-striped " role = "progressbar" style = "width: ' + ProgressValue + '%; background-color:#A5A5A5" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100" >' + ThreadValue + '</div>' +
        //    '</div>'
    }
    else {
        if (ProgressValue >= 80) {
            return 'Disque (' + DriveLetter + '): <div class="progress" style= "background-color:#E6E6E6;">' +
                '<div id="ProgressBarThreadId' + ServerId + '"' +
                'class="progress-bar progress-bar-striped " role = "progressbar" style = "width: ' + ProgressValue + '%; background-color:#DA2626" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100" >' + ProgressValue + '%</div>' +
                '</div>' + Label;
        }
        else {
            return 'Disque (' + DriveLetter + '): <div class="progress" style= "background-color:#E6E6E6;">' +
                '<div id="ProgressBarThreadId' + ServerId + '"' +
                'class="progress-bar progress-bar-striped " role = "progressbar" style = "width: ' + ProgressValue + '%; background-color:#26A0DA" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100" >' + ProgressValue + '%</div>' +
                '</div>' + Label;
        }
    }
}

function AdminAppsOpen() {
    AdminAllReportsHide();
    AdminAllParametersHide();
    MenuBarNavHighlight(1, 1, 1);

    ElementOnChangeSet('ServerId', 'AdminAppsDisplay()');

    //Title
    ParamTitleSet('Gestion des applications');

    //Params
    ShowReport('ParamReportId');
    ShowParent('ServerId');
    ShowParent('AppId');

    //Actions
    ParamActionBtnGet(0, 'Afficher', 'fas fa-eye', 'AdminAppsDisplay()');
    //ParamActionBtnGet(1, 'Ajouter', 'fas fa-plus-circle', 'AdminUserRegionsAdd()');

    AdminAppsDisplay();

    //Connection
    NotiConnectionIdUpdate('Administration > Applications > Accueil');
}

function AdminAppsDisplay() {
    //Set action button
    var ActionBtnId = ParamActionBtnIdDisplayGet();
    var Icon = ParamActionIconDisplayGet();

    var ServerId = ElementDropDownListValueGet('ServerId');
    var AppId = ElementDropDownListValueGet('AppId');

    AdminAppsGet(ActionBtnId, Icon, ServerId, AppId);
}


function AdminAppsGet(ActionBtnId, Icon, ServerId, AppId) {
    //Spin
    ActionBtnMarginSpin(ActionBtnId);

    //Hide some reports
    AdminAllReportsHide();
    ShowReport('ParamReportId');
    ParamMessageReset();

    var Pattern = 'AdminApps';
    var PatternTable = Pattern + 'TableId';
    var PatternTableReportId = Pattern + 'TableReportId';

    $('#' + PatternTable).DataTable().destroy();;
    $('#' + PatternTable).DataTable({
        "initComplete": function (settings, json) {
            ShowReport(PatternTableReportId);
            $('#' + ActionBtnId).find('span').attr('class', Icon);
        },
        "ajax": {
            "url": "/Admin/AdminAppsGet",
            "type": "GET",
            "datatype": "json",
            "data": {
                ServerId: ServerId,
                AppId: AppId
            }
        },
        "columns": [
            { "data": "LocalIpAddress" },//0

            { "data": "AppName" },//1
            { "data": "AppPort" },//2
            { "data": "AppDescription" },//3
            { "data": "AppPoolName" },//4

            { "data": "AppId" },//5
            { "data": "AppId" },//6
            { "data": "AppId" },//7

            { "data": "LastRestart" },//8
        ],
        "columnDefs": [
            { "width": "3%", "className": "text-center", "targets": 0 },
            { "width": "3%", "className": "text-left", "targets": 1 },
            { "width": "3%", "className": "text-left", "targets": 2 },
            { "width": "3%", "className": "text-left", "targets": 3 },
            { "width": "3%", "className": "text-left", "targets": 4 },

            { "width": "1%", "className": "text-left", "targets": 5 },
            { "width": "1%", "className": "text-left", "targets": 6 },
            { "width": "1%", "className": "text-left", "targets": 7 },

            { "width": "3%", "className": "text-left", "targets": 8 },

            { "targets": 0, "render": function (data, type, row) { return data; } },
            { "targets": 1, "render": function (data, type, row) { return data; } },
            { "targets": 2, "render": function (data, type, row) { return data; } },
            { "targets": 3, "render": function (data, type, row) { return data; } },
            { "targets": 4, "render": function (data, type, row) { return data; } },

            {
                "targets": 5, "render": function (data, type, row) {
                    return DataTableButtonGet('AdminAppTaskRun', data, data  + ', \'stop\'', '', 'dt-btn-cl gc-bc1-cl', 'fas fa-redo-alt btn-icon-cl gc-c1-cl', '')
                }
            },

            {
                "targets": 6, "render": function (data, type, row) {
                    return DataTableButtonGet('AdminAppTaskRun', data, data + ', \'start\'', '', 'dt-btn-cl gc-bc1-cl', 'fas fa-redo-alt btn-icon-cl gc-c1-cl', '')
                }
            },
            {
                "targets": 7, "render": function (data, type, row) {
                    return DataTableButtonGet('AdminAppTaskRun', data, data + ', \'restart\'', '', 'dt-btn-cl gc-bc1-cl', 'fas fa-redo-alt btn-icon-cl gc-c1-cl', '')
                }
            },

            { "targets": 8, "render": function (data, type, row) { return GetDhmValueFromDataTableDate(data); } },
        ],
        "iDisplayLength": 100,
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
        "bFilter": true,
        "autoWidth": false,
        "searching": true,
        "lengthChange": false,
        "showNEntries": true,
        "bInfo": true,
        "bPaginate": true,
        "ordering": false
    });

    //Connection
    NotiConnectionIdUpdate('Administration > Application > Affichage');
}


function AdminAppTaskRun(AppId, TaskName) {
    var ActionBtnId = 'AdminAppTaskRunBtnId' + AppId;
    var Icon = 'fas fa-redo-alt';
    var IsMargin = false;
    ActionSpin(ActionBtnId, IsMargin);
    
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
            ActionBtnSet(ActionBtnId, Icon, IsMargin);
        }
    });
}


function AdminServerTaskRun(ServerId, TaskName) {
    var ActionBtnId = 'AdminServerTaskRunBtnId' + ServerId;
    var Icon = 'fas fa-redo-alt';
    var IsMargin = false;
    ActionSpin(ActionBtnId, IsMargin);

    var obj = {};
    obj.ServerId = ServerId;
    obj.TaskName = TaskName;
    $.ajax({
        url: "/Admin/AdminServerTaskRun",
        method: "POST",
        data: JSON.stringify(obj),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            ActionBtnSet(ActionBtnId, Icon, IsMargin);
        }
    });
}


function AdminUserStationOpen() {
    AdminAllReportsHide();
    AdminAllParametersHide();
    MenuBarNavHighlight(0, 4, 6);

    //Title
    ParamTitleSet('Gares utilisateurs (Exclues)');

    //Params
    ShowReport('ParamReportId');
    ShowParent('EmailKeyId');
    ShowParent('EmailId');
    ShowParent('RegionId');
    ShowParent('LSId');
    ShowParent('StationNumberId');

    //OnChange
    ElementOnChangeSet('EmailId', 'AdminUserStationDisplay()');
    ElementOnChangeSet('RegionId', 'AdminUserStationDisplay()');
    ElementOnChangeSet('LSId', 'AdminUserStationDisplay()');
    ElementOnChangeSet('StationNumberId', 'AdminUserStationDisplay()');

    //OnClick
    ElementOnClickSet('RegionId', 'ParamLSFromRegionSecGet()');

    //Actions
    ParamActionBtnGet(0, 'Afficher', 'fas fa-eye', 'AdminUserStationDisplay()');
    ParamActionBtnGet(1, 'Ajouter', 'fas fa-plus-circle', 'AdminUserStationAdd()');

    AdminUserStationDisplay();

    //Connection
    NotiConnectionIdUpdate('Administration > Utilisateurs > Gare');
}


function AdminUserStationDisplay() {
    //Set action button
    var ActionBtnId = ParamActionBtnIdDisplayGet();
    var Icon = ParamActionIconDisplayGet();

    //Get input values
    var UserId = GetElementValue('EmailId');
    var RegionId = GetElementValue('RegionId');
    var LSId = GetElementValue('LSId');
    var StationNumber = GetElementValue('StationNumberId');

    AdminUserStationGet(ActionBtnId, Icon, UserId, RegionId, LSId, StationNumber);
}


function AdminUserStationAdd() {
    //Set action button
    var ActionBtnId = ParamActionBtnIdAddGet();
    var Icon = ParamActionIconAddGet();

    //Get input values
    var UserId = ElementDropDownListValueGet('EmailId');
    var LSId = ElementDropDownListValueGet('LSId');
    var StationNumber = ElementDropDownListValueGet('StationNumberId');

    if (UserId != '0' &&
        LSId != '0' && StationNumber != '0') {
        ParamMessageReset();
        AdminUserStationInsert(ActionBtnId, Icon, UserId, LSId, StationNumber);
    }
    else {
        ParamMessageErrorDisplay('Certains champs sont obligatoire')
    }
}


function AdminUserStationInsert(ActionBtnId, Icon, UserId, LSId, StationNumber) {
    //Spin
    ActionBtnSpin(ActionBtnId);

    //Insert
    var obj = {};
    obj.UserId = UserId;
    obj.LSId = LSId;
    obj.StationNumber = StationNumber;

    $.ajax({
        url: "/Admin/AdminUserStationInsert",
        method: "POST",
        data: JSON.stringify(obj),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            ActionBtnIconSet(ActionBtnId, Icon);
            AdminUserStationDisplay();
        }
    });

    //Connection
    NotiConnectionIdUpdate('Administration > Utilisateur > Gare > Ajouter');
}


function AdminUserStationGet(ActionBtnId, Icon, UserId, RegionId, LSId, StationNumber) {
    //Spin
    ActionBtnMarginSpin(ActionBtnId);

    //Hide some reports
    AdminAllReportsHide();
    ShowReport('ParamReportId');
    ParamMessageReset();

    var Pattern = 'AdminUserStation';
    var PatternTable = Pattern + 'TableId';
    var PatternTableReportId = Pattern + 'TableReportId';

    $('#' + PatternTable).DataTable().destroy();;
    $('#' + PatternTable).DataTable({
        "dom": 'Bfrtip',
        "buttons": [
            'copy', 'csv', 'excel', 'pdf', 'print'
        ],
        "initComplete": function (settings, json) {
            ShowReport(PatternTableReportId);
            $('#' + ActionBtnId).find('span').attr('class', Icon);
        },
        "ajax": {
            "url": "/Admin/AdminUserStationGet",
            "type": "GET",
            "datatype": "json",
            "data": {
                UserId: UserId,
                RegionId: RegionId,
                LSId: LSId,
                StationNumber: StationNumber
            }
        },
        "columns": [
            { "data": "LSId" },//0
            { "data": "LSName" },//1
            { "data": "StationName" },//2

            { "data": "UserId" },//3
        ],
        "columnDefs": [
            { "width": "3%", "className": "text-center", "targets": 0 },
            { "width": "3%", "className": "text-left", "targets": 1 },
            { "width": "3%", "className": "text-left", "targets": 2 },

            { "width": "3%", "className": "text-center", "targets": 3 },

            { "targets": 0, "render": function (data, type, row) { return data; } },
            { "targets": 1, "render": function (data, type, row) { return data; } },
            { "targets": 2, "render": function (data, type, row) { return data; } },

            {
                "targets": 3, "render": function (data, type, row) {
                    var Id = row['UserId'];
                    var argument = row['UserId'];
                    var text = '';
                    var BtnClass = 'dt-btn-cl gc-bc1-cl';
                    var SpanClass = 'far fa-trash-alt btn-icon-cl gc-c1-cl';
                    var TextClass = 'dt-text-cl';

                    return DataTableButtonGet('AdminUserStationDelete', Id, argument, text, BtnClass, SpanClass, TextClass);
                }
            },
        ],
        "iDisplayLength": 100,
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
        "bFilter": true,
        "autoWidth": false,
        "searching": true,
        "lengthChange": false,
        "showNEntries": true,
        "bInfo": true,
        "bPaginate": true,
        "ordering": false
    });

    //Connection
    NotiConnectionIdUpdate('Administration > Utilisateur > LS > Afficher');
}


function AdminUserNotifOpen() {
    AdminAllReportsHide();
    AdminAllParametersHide();
    MenuBarNavHighlight(0, 5, 6);

    //Title
    ParamTitleSet('Notifications utilisateur');

    //Params
    ShowReport('ParamReportId');
    ShowParent('EmailKeyId');
    ShowParent('EmailId');
    ShowParent('NotifId');

    //OnChange
    ElementOnChangeSet('EmailId', 'AdminUserNotifDisplay()');
    ElementOnChangeSet('NotifId', 'AdminUserNotifDisplay()');

    //Actions
    ParamActionBtnGet(0, 'Afficher', 'fas fa-eye', 'AdminUserNotifDisplay()');
    ParamActionBtnGet(1, 'Ajouter', 'fas fa-plus-circle', 'AdminUserNotifAdd()');

    AdminUserNotifDisplay();

    //Connection
    NotiConnectionIdUpdate('Administration > Utilisateurs > Notif');
}


function AdminUserNotifDisplay() {
    //Set action button
    var ActionBtnId = ParamActionBtnIdDisplayGet();
    var Icon = ParamActionIconDisplayGet();

    //Get input values
    var UserId = GetElementValue('EmailId');
    var NotifId = GetElementValue('NotifId');

    AdminUserNotifGet(ActionBtnId, Icon, UserId, NotifId);
}


function AdminUserNotifGet(ActionBtnId, Icon, UserId, NotifId) {
    //Spin
    ActionBtnMarginSpin(ActionBtnId);

    //Hide some reports
    AdminAllReportsHide();
    ShowReport('ParamReportId');
    ParamMessageReset();

    var Pattern = 'AdminUserNotif';
    var PatternTable = Pattern + 'TableId';
    var PatternTableReportId = Pattern + 'TableReportId';

    $('#' + PatternTable).DataTable().destroy();;
    $('#' + PatternTable).DataTable({
        "dom": 'Bfrtip',
        "buttons": [
            'copy', 'csv', 'excel', 'pdf', 'print'
        ],
        "initComplete": function (settings, json) {
            ShowReport(PatternTableReportId);
            $('#' + ActionBtnId).find('span').attr('class', Icon);
        },
        "ajax": {
            "url": "/Admin/AdminUserNotifGet",
            "type": "GET",
            "datatype": "json",
            "data": {
                UserId: UserId,
                NotifId: NotifId
            }
        },
        "columns": [
            { "data": "FullName" },//0
            { "data": "NotifName" },//1
            { "data": "UserId" },//2
        ],
        "columnDefs": [
            { "width": "3%", "className": "text-center", "targets": 0 },
            { "width": "3%", "className": "text-left", "targets": 1 },
            { "width": "3%", "className": "text-left", "targets": 2 },

            { "targets": 0, "render": function (data, type, row) { return data; } },
            { "targets": 1, "render": function (data, type, row) { return data; } },

            {
                "targets": 2, "render": function (data, type, row) {
                    var Id = row['UserId'];
                    var argument = row['UserId'];
                    var text = '';
                    var BtnClass = 'dt-btn-cl gc-bc1-cl';
                    var SpanClass = 'far fa-trash-alt btn-icon-cl gc-c1-cl';
                    var TextClass = 'dt-text-cl';

                    return DataTableButtonGet('AdminUserNotifDelete', Id, argument, text, BtnClass, SpanClass, TextClass);
                }
            },
        ],
        "iDisplayLength": 100,
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
        "bFilter": true,
        "autoWidth": false,
        "searching": true,
        "lengthChange": false,
        "showNEntries": true,
        "bInfo": true,
        "bPaginate": true,
        "ordering": false
    });

    //Connection
    NotiConnectionIdUpdate('Administration > Utilisateur > Notif > Afficher');
}


function AdminUserNotifAdd() {
    //Set action button
    var ActionBtnId = ParamActionBtnIdAddGet();
    var Icon = ParamActionIconAddGet();

    //Get input values
    var UserId = ElementDropDownListValueGet('EmailId');
    var NotifId = ElementDropDownListValueGet('NotifId');

    if (UserId != '0' && NotifId != '0') {
        ParamMessageReset();
        AdminUserNotifInsert(ActionBtnId, Icon, UserId, NotifId);
    }
    else {
        ParamMessageErrorDisplay('Certains champs sont obligatoire')
    }
}


function AdminUserNotifInsert(ActionBtnId, Icon, UserId, NotifId) {
    //Spin
    ActionBtnSpin(ActionBtnId);

    //Insert
    var obj = {};
    obj.UserId = UserId;
    obj.NotifId = NotifId;

    $.ajax({
        url: "/Admin/AdminUserNotifInsert",
        method: "POST",
        data: JSON.stringify(obj),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            ActionBtnIconSet(ActionBtnId, Icon);
            AdminUserNotifDisplay();
        }
    });

    //Connection
    NotiConnectionIdUpdate('Administration > Utilisateur > Notif > Ajouter');
}


function AdminUserCellOpen() {
    AdminAllReportsHide();
    AdminAllParametersHide();
    MenuBarNavHighlight(0, 6, 6);

    //Title
    ParamTitleSet('Cellules');

    //Params
    ShowReport('ParamReportId');
    ShowParent('EmailKeyId');
    ShowParent('EmailId');
    ShowParent('RegionId');
    ShowParent('CellId');

    //OnChange
    ElementOnChangeSet('EmailId', 'AdminUserCellDisplay()');
    ElementOnChangeSet('RegionId', 'AdminUserCellDisplay()');
    ElementOnChangeSet('CellId', 'AdminUserCellDisplay()');

    //OnClick
    ElementOnClickSet('RegionId', 'ParamCellsFromRegionSecGet()');

    //Actions
    ParamActionBtnGet(0, 'Afficher', 'fas fa-eye', 'AdminUserCellDisplay()');
    ParamActionBtnGet(1, 'Ajouter', 'fas fa-plus-circle', 'AdminUserCellAdd()');

    AdminUserCellDisplay();

    //Connection
    NotiConnectionIdUpdate('Administration > Utilisateurs > Cellules');
}


function AdminUserCellDisplay() {
    //Set action button
    var ActionBtnId = ParamActionBtnIdDisplayGet();
    var Icon = ParamActionIconDisplayGet();

    //Get input values
    var UserId = GetElementValue('EmailId');
    var RegionId = GetElementValue('RegionId');
    var CellId = GetElementValue('CellId');

    AdminUserCellGet(ActionBtnId, Icon, UserId, RegionId, CellId);
}


function AdminUserCellGet(ActionBtnId, Icon, UserId, RegionId, CellId) {
    //Spin
    ActionBtnMarginSpin(ActionBtnId);

    //Hide some reports
    AdminAllReportsHide();
    ShowReport('ParamReportId');
    ParamMessageReset();

    var Pattern = 'AdminUserCell';
    var PatternTable = Pattern + 'TableId';
    var PatternTableReportId = Pattern + 'TableReportId';

    $('#' + PatternTable).DataTable().destroy();;
    $('#' + PatternTable).DataTable({
        "dom": 'Bfrtip',
        "buttons": [
            'copy', 'csv', 'excel', 'pdf', 'print'
        ],
        "initComplete": function (settings, json) {
            ShowReport(PatternTableReportId);
            $('#' + ActionBtnId).find('span').attr('class', Icon);
        },
        "ajax": {
            "url": "/Admin/AdminUserCellGet",
            "type": "GET",
            "datatype": "json",
            "data": {
                UserId: UserId,
                RegionId: RegionId,
                CellId: CellId
            }
        },
        "columns": [
            { "data": "CellId" },//0
            { "data": "CellName" },//1

            { "data": "UserId" },//2
        ],
        "columnDefs": [
            { "width": "3%", "className": "text-center", "targets": 0 },
            { "width": "3%", "className": "text-left", "targets": 1 },

            { "width": "3%", "className": "text-center", "targets": 2 },

            { "targets": 0, "render": function (data, type, row) { return data; } },
            { "targets": 1, "render": function (data, type, row) { return data; } },

            {
                "targets": 2, "render": function (data, type, row) {
                    var Id = row['UserId'] + row['CellId'];
                    var argument = '\'' + row['UserId'] + '\' , \'' + row['CellId'] + '\'';
                    var text = '';
                    var BtnClass = 'dt-btn-cl gc-bc1-cl';
                    var SpanClass = 'far fa-trash-alt btn-icon-cl gc-c1-cl';
                    var TextClass = 'dt-text-cl';

                    return DataTableButtonGet('AdminUserCellDelete', Id, argument, text, BtnClass, SpanClass, TextClass);
                }
            },
        ],
        "iDisplayLength": 100,
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
        "bFilter": true,
        "autoWidth": false,
        "searching": true,
        "lengthChange": false,
        "showNEntries": true,
        "bInfo": true,
        "bPaginate": true,
        "ordering": false
    });

    //Connection
    NotiConnectionIdUpdate('Administration > Utilisateur > Cellule > Afficher');
}


function AdminUserCellAdd() {
    //Set action button
    var ActionBtnId = ParamActionBtnIdAddGet();
    var Icon = ParamActionIconAddGet();

    //Get input values
    var UserId = GetElementValue('EmailId');
    var CellId = GetElementValue('CellId');

    if (UserId != '0' &&
        CellId != '0'
    ) {
        ParamMessageReset();
        AdminUserCellInsert(ActionBtnId, Icon, UserId, CellId);
    }
    else {
        ParamMessageErrorDisplay('Certains champs sont obligatoire')
    }
}


function AdminUserCellInsert(ActionBtnId, Icon, UserId, CellId) {
    //Spin
    ActionBtnSpin(ActionBtnId);

    //Insert
    var obj = {};
    obj.UserId = UserId;
    obj.CellId = CellId;

    $.ajax({
        url: "/Admin/AdminUserCellInsert",
        method: "POST",
        data: JSON.stringify(obj),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            ActionBtnIconSet(ActionBtnId, Icon);
            AdminUserCellDisplay();
        }
    });

    //Connection
    NotiConnectionIdUpdate('Administration > Utilisateur > Cellule > Ajouter');
}


function AdminUserCellDelete(UserId, CellId) {

    var ActionBtnId = 'AdminUserCellDeleteBtnId' + UserId + CellId; 
    var IsMargin = false;
    var Icon = 'fas fa-minus-circle';
    ActionSpin(ActionBtnId, IsMargin);
    
    var obj = {};
    obj.UserId = UserId;
    obj.CellId = CellId;
    $.ajax({
        url: "/Admin/AdminUserCellDelete",
        method: "POST",
        data: JSON.stringify(obj),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            ActionBtnSet(ActionBtnId, Icon, IsMargin);
        },
        error: function (request, status, error) {
            alert('Vous ne disposez pas des autorisations nécessaires pour effectuer cette action');
        }
    });
}

