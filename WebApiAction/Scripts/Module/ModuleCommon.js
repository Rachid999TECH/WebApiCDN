//Version 20.04.2023 23:04

var ImagesVDFolder = 'http://172.17.95.21:1010/Images';
var numFormat = $.fn.dataTable.render.number(' ', ',', 2).display;
var numShortFormat = $.fn.dataTable.render.number(' ', '', 0).display;
var numFormatOnDecimal = $.fn.dataTable.render.number(' ', ',', 1).display;


function RightBarHide() {
    HideElement('rb-chev-right-id');
    ShowElement('rb-chev-left-id');
    document.getElementById('Grid_0000GridCol2Id').setAttribute('Class', '');
    HideReport('TicketHistoryId');
}

function RightBarShow() {
    ShowElement('rb-chev-right-id');
    HideElement('rb-chev-left-id');
    document.getElementById('Grid_0000GridCol2Id').setAttribute('Class', 'col');
    ShowElement('TicketHistoryId');
}

function LeftBarHide() {
    ShowElement('lb-chev-right-id');
    HideElement('lb-chev-left-id');
    document.getElementById('Grid_0000GridCol0Id').setAttribute('Class', '');
    HideReport('MobileReportId');
}

function LeftBarShow() {
    HideElement('lb-chev-right-id');
    ShowElement('lb-chev-left-id');
    document.getElementById('Grid_0000GridCol0Id').setAttribute('Class', 'col');
    ShowElement('MobileReportId');
}

function startIntro() {
    var intro = introJs();
    intro.setOptions({
        steps: [
            //{
            //    title: "Visite guidée",
            //    intro: "Bienvenue sur ADM-TOLL! Afin d'améliorer votre expérience client, nous vous proposons une visite guidée de l'ensemble de nos modules et fonctionnalités. Pour en profiter, Cliquez sur Next."
            //},
            //{
            //    title: "Notre vision",
            //    element: document.querySelector('.intro-desc-h-container'),
            //    intro: "Notre vision est de vous aider à améliorer votre productivité.",
            //    position: 'bottom'
            //},
            //{
            //    title: "Menu-droit",
            //    element: '#leftbar-id',
            //    //intro: "Naviguer aisément entre les différents modules et les différentes fonctionnalités.",
            //    intro: '<p>Naviguer aisément entre les différents modules et les différentes fonctionnalités.</p><img src="/Images/Tour/leftbar.png" alt="">',
            //    position: 'right'
            //},
            //{
            //    title: "Nos modules",
            //    element: '#modules-id',
            //    intro: "Expérimentez les modules opérationnels mis à votre disposition.",
            //    position: 'bottom'
            //},
            //{
            //    title: "Notre équipe",
            //    element: '#team-id',
            //    intro: "Prendre connaissance des membres de notre équipe.",
            //    position: 'top'
            //},
            //{
            //    title: "Utilisateurs connectés",
            //    element: '#tb-conn-id',
            //    //intro: 'Prendre connaissance des utilisateurs connectés durant les 24 heurs',
            //    intro: '<p>Prendre connaissance des utilisateurs connectés durant les 24 heures</p><img src="/Images/Tour/conn.png" alt="">',
            //    position: 'left'
            //},
            //{
            //    title: "Demandes d'intervention",
            //    element: '#tb-fix-id',
            //    intro: "En cas de bug ou si vous désirez proposer une amélioration de votre expérience client, utiliser cet espace pour envoyer des demandes d'intervention.",
            //    position: 'left'
            //},
            //{
            //    title: "Historique de navigation",
            //    element: '#tb-hist-id',
            //    intro: "Afficher l'historique de navigation",
            //    position: 'left'
            //},
            //{
            //    title: "Notification",
            //    element: '#tb-noti-id',
            //    intro: "Afficher les notifications relatives aux réponses à vos demandes d'intervention ou des mises à jour système.",
            //    position: 'left'
            //},
            //{
            //    title: "Mon compte",
            //    element: '#tb-user-id',
            //    intro: "Accéder à votre compte pour modifier vos informations personnelles et vos choix de navigation.",
            //    position: 'left'
            //},                  
        ],
        tooltipClass: 'customTooltip',
        showProgress: true,
    });
    intro.start();
}

function HomeTourGet() {
    startIntro();
}

function DataTableGetButton(Pattern, Id, Icon, color) {
    //return '<button id="' + Pattern + 'BtnId' + Id + '" ' +
    //    'class="' + Pattern + ' dt-btn-cl gc-bc1-cl" ' +
    //    'style="background-color: Transparent;border: none;"' +
    //    'onclick="' + Pattern + '(\'' + Id + '\')" >' +
    //    '<span class="' + Icon + ' btn-icon-cl gc-c1-cl" ></span></button>';


    var text = '';
    var argument = '\'' + Id + '\'';
    var RowId = Id;
    var BtnClass = 'dt-btn-cl gc-bc1-cl';
    var SpanClass = Icon + ' btn-icon-cl gc-c1-cl';
    var TextClass = 'dt-text-cl';
    return DataTableButtonGet(Pattern, RowId, argument, text, BtnClass, SpanClass, TextClass);

}

function DataTableButtonWithPatternGet(Name, Id, input, Icon, color) {
    //return '<button id="' + Name + 'BtnId' + Id + '" ' +
    //    'class="' + Name + '" ' +
    //    'style="background-color: Transparent;border: none;"' +
    //    'onclick="' + Name + '(\'' + Id + '\' , \'' + input + '\')" >' +
    //    '<span class="' + Icon + '" style="color:#' + color + '" ></span></button>';

    var text = '';
    var argument = '\'' + Id + '\' , \'' + input + '\'';
    var RowId = Id;
    var BtnClass = 'dt-btn-cl gc-bc1-cl';
    var SpanClass = Icon + ' btn-icon-cl gc-c1-cl';
    var TextClass = 'dt-text-cl';
    return DataTableButtonGet(Name, RowId, argument, text, BtnClass, SpanClass, TextClass);
}

function DataTableButtonCtrGet(Pattern, Id, Icon, color, CtrTypeId) {
    return '<button id="' + Pattern + 'BtnId' + Id + '" ' +
        'class="' + Pattern + '" ' +
        'style="background-color: Transparent;border: none;"' +
        'onclick="' + Pattern + '(\'' + Id + '\', \'' + CtrTypeId + '\')" >' +
        '<span class="' + Icon + '" style="color:#' + color + '" ></span></button>'
}

function DataTableFormButtonActionGet(Pattern, Id, Icon, label) {
    return '<div class="text-left">' +
        '<button id="' + Pattern + 'BtnId' + Id + '" type="button" class="btn btn-secondary" style="float: right;margin-left: 10px;font-size: 12px;background-color:transparent;border:1px solid #ced4da;" onclick="' + Pattern + '(\'' + Id + '\')" >' +
        '<span class="' + Icon + '" style="font-size: 16px;margin-right: 15px;color:#000000"></span>' +
        '<div class="text-right" style="float:right;color:#495057;">' + label + '</div>' +
        '</button>' +
        '</div>';
}


function DataTableFormButtonGet(Pattern, Id, Icon, label, color, backgroundcolor) {
    return '<div class="text-left">' +
        '<button id="' + Pattern + 'BtnId' + Id + '" type="button" class="btn btn-secondary" onclick="' + Pattern + '(\'' + Id + '\')" >' +
        '<span class="' + Icon + '"></span>' +
        '<div class="text-right" style="float:right;color:' + color + ';font-weight:bold;font-size:0.9rem;">' + label + '</div>' +
        '</button>' +
        '</div>';
}

function DataTableFormBtnDoneGet(Pattern, Id, Icon, label) {
    return '<div class="myform-btn-done">' +
        '<button id="' + Pattern + 'BtnId' + Id + '" type="button" class="btn btn-secondary" onclick="' + Pattern + '(\'' + Id + '\')" >' +
        '<span class="' + Icon + '"></span>' +
        '<div class="text-right">' + label + '</div>' +
        '</button>' +
        '</div>';
}

function DataTableFormTitleGet(Pattern, Id, Icon, label) {
    return '<div class="text-left">' +
        '<button id="' + Pattern + 'BtnId' + Id + '" type="button" class="btn btn-secondary" style="font-size: 12px;background-color:transparent;border:1px solid #ced4da;" onclick="' + Pattern + '(\'' + Id + '\')" >' +
        '<span class="' + Icon + '" style="font-size: 16px;margin-right: 15px;color:#000000"></span>' +
        '<div class="text-right">' + label + '</div>' +
        '</button>' +
        '</div>'
}



function DataTableDataWithButtonGet(data, button) {
    return '&nbsp;' + data + '&nbsp;&nbsp;' + button;
}


function DataTableGetButtonValidate(Pattern, Id, IsValidString) {
    var IsValid = new Boolean(IsValidString);
    if (IsValid == false) {
        return '<button id="CertValidateBtnId' + Pattern + Id + '" ' +
            'style="background-color: Transparent;border: none;"' +
            'onclick="CertValidate(\'' + Pattern + '\',' + '\'' + Id + '\', ' + IsValid + ')" >' +
            '<span class="fas fa-clock" style="color:#ff6000" ></span></button>';
    }
    else {
        return '<button id="CertValidateBtnId' + Pattern + Id + '" ' +
            'style="background-color: Transparent;border: none;"' +
            'onclick="CertValidate(\'' + Pattern + '\',' + '\'' + Id + '\', ' + IsValid + ')" >' +
            '<span class="fas fa-unlock-alt" style="color:#28a745" ></span></button>';
    }
}

function DataTableGetButtonUnvalidate(Pattern, Id) {
    return '<button id="CertValidatBtnId' + Id + '" ' +
        'style="background-color: Transparent;border: none;"' +
        'onclick="CertUnvalidate(\'' + Pattern + '\',' + '\'' + Id + '\')" >' +
        '<span class="fas fa-unlock-alt" style="color:#28a745" ></span></button>'
}

function DataTableButtonFileHandleGet(CertFileId, IsRunning, IsHandled) {
    if (IsRunning == true) {
        return DataTableGetButton('CertFileHandle', CertFileId, 'fa fa-spinner fa-spin', '28a745');
    }
    else {
        if (IsHandled == true) {
            return DataTableGetButton('CertFileUnhandle', CertFileId, 'fas fa-unlock-alt', '28a745');
        }
        else {
            return DataTableGetButton('CertFileHandle', CertFileId, 'fas fa-clock', 'a3a3a3');
        }
    }
}

function DataTableGetExclamationTriangle() {
    return '<button style="background-color: Transparent;border: none;"><span class="fas fa-exclamation-triangle" style="color:red"></span></button>';
}

function DataTableGetButtonValidateBlock(data, gap, IsValid, Pattern) {
    if ($('<div/>').text(gap).html() == '0')
        return DataTableGetButtonValidate(Pattern, data, IsValid);
    else {
        return DataTableGetExclamationTriangle();
    }
}




function DataTableGetButtonValidateBlockTwo(data, gap1, gap2, IsValid, Pattern) {
    if (gap1 == 0 && gap2 == 0)
        return DataTableGetButtonValidate(Pattern, data, IsValid);
    else {
        return DataTableGetExclamationTriangle();
    }
}

function DataTableGetButtonValidateBlockThree(data, gap1, gap2, gap3, IsValid, Pattern) {
    if (gap1 == 0 && gap2 == 0 && gap3 == 0)
        return DataTableGetButtonValidate(Pattern, data, IsValid);
    else {
        return DataTableGetExclamationTriangle();
    }
}

function DataTableGetButtonValidateBlockFour(data, gap1, gap2, gap3, gap4, IsValid, Pattern) {
    if (gap1.toFixed(0) == 0 && gap2.toFixed(0) == 0 && gap3.toFixed(0) == 0 && gap4.toFixed(0) == 0)
        return DataTableGetButtonValidate(Pattern, data, IsValid);
    else {
        return DataTableGetExclamationTriangle();
    }
}

function DataTableGetButtonValidateBlockSix(data, gap1, gap2, gap3, gap4, gap5, gap6, IsValid, Pattern) {
    if (gap1 == 0 && gap2 == 0 && gap3 == 0 && gap4 == 0 && gap5 == 0 && gap6 == 0)
        return DataTableGetButtonValidate(Pattern, data, IsValid);
    else {
        return DataTableGetExclamationTriangle();
    }
}

function DataTableGetElementId(Pattern, Id, data) {
    return '<span id="' + Pattern + Id + '">' + data + '</span>';
}

function DataTableElementIdGet(Pattern, Id, data) {
    return '<span id="' + Pattern + Id + '">' + data + '</span>';
}

function DataTableFormMessageGet(Id) {
    return '<div class="container" style="width: 100%;margin-left: 0px">' +
        '<div id="MessageContainerId' + Id + '">' +
        '<span id="MessageIconId' + Id + '"></span>' +
        '<span id="MessageTextId' + Id + '"></span>' +
        '</div>' +
        '</div>'
}

function DataTableFormInputDropDownElementGet(Pattern, Id, label, onchange) {
    return '<div class="form-group row mb-1"> ' +
        '<label for="' + Pattern + Id + '" class= "col-4 col-form-label">' + label + '</label>' +
        '<div class="col-8">' +
        '<select ' +
        'id="' + Pattern + Id + '"' +
        'class="form-control ' + Pattern + Id + '"' +
        'style="font-size: 0.8rem; padding: .1rem .1rem;"' +
        'onchange="' + onchange + '"' +
        '>' +
        '<option value="' + Pattern + Id + '" selected ></option >' +
        '</select>' +
        '</div>' +
        '</div>'
}


function DataTableFileGet(Pattern, Id, label) {
    return '<div class="form-group row mb-1"> ' +
        '<label for="' + Pattern + Id + '" class= "col-4 col-form-label">' + label + '</label>' +
        '<div class="col-8">' +

        '<input id="' + Pattern + Id + '" ' +
        'style="font-size: 0.8rem;background-color: transparent;border: transparent;padding: .1rem .1rem;" ' +
        'class="form-control" multiple="multiple" type="file" name="UploadFiles" >' +


        '</div>' +
        '</div>'
}

function DataTableFormInputDropDownElementGetNew(Pattern, Id, label, onchange, DefaultValue) {
    return '<div class="form-group row mb-1"> ' +
        '<label for="' + Pattern + Id + '" class= "col-4 col-form-label">' + label + '</label>' +
        '<div class="col-8">' +
        '<select ' +
        'id="' + Pattern + Id + '"' +
        'class="form-control ' + Pattern + '"' +
        'style="font-size: 0.8rem; padding: .1rem .1rem;"' +
        'onchange="' + onchange + '"' +
        '>' +
        '<option value="' + DefaultValue + '" selected ></option >' +
        '</select>' +
        '</div>' +
        '</div>'
}

function DataTableFormInputDateElementGet(Pattern, Id, label, type) {
    return '<div class="form-group row ">' +
        '<label for= "' + Pattern + Id + '" class= "col-4 col-form-label" >' + label + '</label>' +
        '<div class="col-8">' +
        '<input id="' + Pattern + Id + '" class="form-control" type="' + type + '" value="" >' +
        '</div>' +
        '</div>'
}

//function DataTableFormInputTextAreaElementGet(Pattern, Id, label) {
//    return '<div class="form-group row mb-1" style="height:60%">' +
//        '<label for= "' + Pattern + Id + '" class= "col-3 col-form-label" >' + label + '</label>' +
//        '<div class="col-sm-8">' +
//        '<textarea id="' + Pattern + Id + '" class="form-control myform-tarea" style="height:180%"></textarea>' +
//        '</div>' +
//        '</div>'
//}

function DataTableFormInputTextAreaElementGet(Pattern, Id, label, DefaultValue) {
    return '<div class="form-group mb-1">' +
        '<label for= "' + Pattern + Id + '" class= "col-form-label" >' + label + '</label>' +
        '<div>' +
        '<textarea id="' + Pattern + Id + '" class="form-control col myform-tarea" >' + DefaultValue + '</textarea>' +
        '</div>' +
        '</div>' +
        '<br>'
}

function DataTableFormInputTextElementGet(Pattern, Id, label, DefaultValue) {
    return '<div class="form-group mb-1">' +
        '<label for= "' + Pattern + Id + '" class= "col-form-label" >' + label + '</label>' +
        '<div>' +
        '<input id="' + Pattern + Id + '" type="text" class="form-control col" value="' + DefaultValue + '">' +
        '</div>' +
        '</div>' +
        '<br>'
}


function DataTableFormInputTextDisabledElementGet(Pattern, Id, label, DefaultValue) {
    return '<div class="form-group mb-1">' +
        '<label for= "' + Pattern + Id + '" class= "col-form-label" >' + label + '</label>' +
        '<div>' +
        '<input id="' + Pattern + Id + '" type="text" class="form-control col" value="' + DefaultValue + '" disabled>' +
        '</div>' +
        '</div>' +
        '<br>'
}

function DataTableFormTplTableGet(Pattern, Tbody) {
    var TableReportId = Pattern + 'TableReportId';
    var TableId = Pattern + 'TableId';
    var TableCardId = Pattern + 'TableCardId';
    var TableCardHeaderId = Pattern + 'TableCardHeaderId';

    return '<div id="' + TableReportId + '" class="row mb-3" style="height:300px;overflow:auto;">' +
        '<div class="col-md-12">' +
        '<div id="' + TableCardId + '" class="card">' +
        '<div id="' + TableCardHeaderId + '" class="card-header">' +
        '<h5></h5>' +
        '</div>' +
        '<div class="card-body">' +
        '<span class="counter pull-right"></span>' +
        '<div class="table-responsive">' +
        '<table id="' + TableId + '" class="display responsive nowrap" cellspacing="0" style="width:100%">' +

        Tbody +


        '</table>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>';
}

function DataTableFormTplGidGet(Pattern, Id, label) {
    return '<div class="form-group row mb-1" style="height:60%">' +
        '<label for= "' + Pattern + Id + '" class= "col-3 col-form-label" >' + label + '</label>' +
        '<div class="col-sm-8">' +
        '<textarea id="' + Pattern + Id + '" class="form-control" style="height:180%"></textarea>' +
        '</div>' +
        '</div>'
}

function DataTableFormBtnGet(PatternFix, PatternForm, Label, OnClick, Icon) {
    return '<button ' +
        'type="button" class="dt-btn-cl gc-bc1-cl" ' +

        'data-toggle="modal" ' +
        'data-target="#' + PatternFix + PatternForm + 'ModalReportId" ' +
        'data-whatever="xxx" ' +

        'onclick="' + OnClick + '" >' +
        '<span class="' + Icon + ' dt-icon-cl gc-c1-cl"></span>' +
        '<div class="text-right">' + Label +
        '</div>' +
        '</button>';
}

function DataTableFormBtnIdGet(PatternFix, PatternForm, Id, Label, OnClick, Icon) {
    return '<button ' +

        'id="' + PatternFix + PatternForm + 'BtnId' + Id + '" ' +
        'type="button" class="dt-btn-cl gc-bc1-cl" ' +

        'data-toggle="modal" ' +
        'data-target="#' + PatternFix + PatternForm + 'ModalReportId" ' +
        'data-whatever="xxx" ' +

        'onclick="' + OnClick + '" >' +
        '<span class="' + Icon + ' dt-icon-cl gc-c1-cl"></span>' +
        '<div class="text-right">' + Label +
        '</div>' +
        '</button>';
}

function DataTableInputNumberElementGet(Pattern, Id, data, onchange) {
    return '<input id="' + Pattern + Id + '" type="number" value="' + data + '" style="direction: rtl;" onchange="' + onchange + '">';
}

function DataTableFormInputNumberElementGet(Pattern, Id, data, onchange, label) {

    return '<div class="form-group row mb-1">' +
        '<label for="' + Pattern + Id + '" class="col-3 col-form-label">' + label + '</label>' +
        '<div class="col-4">' +
        '<input id="' + Pattern + Id + '" class="form-control text-right" type="number" value="' + data + '" onchange="' + onchange + '" >' +
        '</div>' +
        '</div>'
}



//function DataTableFormInputDropDownElementGet(Pattern, Id, label, onchange) {
//    return '<div class="form-group row mb-1"> ' +
//        '<label for="' + Pattern + Id + '" class= "col-3 col-form-label">' + label + '</label>' +
//        '<div class="col-sm-8">' +
//        '<select ' +
//        'id="' + Pattern + Id + '"' +
//        'class="form-control ' + Pattern + Id + '"' +
//        'style="font-size: 0.8rem; padding: .1rem .1rem;"' +
//        'onchange="' + onchange + '"' +
//        '>' +
//        '<option value="' + Pattern + Id + '" selected ></option >' +
//        '</select>' +
//        '</div>' +
//        '</div>'
//}

function DataTableFormInputNumberDisabledElementGet(Pattern, Id, data, onchange, label) {

    return '<div class="form-group row mb-1">' +
        '<label for="' + Pattern + Id + '" class="col-3 col-form-label">' + label + '</label>' +
        '<div class="col-4">' +
        '<input id="' + Pattern + Id + '" class="form-control text-right" type="number" value="' + data + '" onchange="' + onchange + '" disabled >' +
        '</div>' +
        '</div>'
}



function DataTableInputDoubleGet(data, id) {
    if (data == 0) {
        return '<input id="ReceiptVOpeId' + id + '" type="number" >'
    }
    else {
        return DataTableFormatDoubleGet(data);
    }
}

function DataTableInputFileGet(data, id) {
    if (data == 0) {
        return '<input id="UploadFilesId' + id + '" ' +
            'style="font-size: 0.6rem;background-color: transparent;border: transparent;" ' +
            'class="form-control" type="file" name="UploadFiles" >';
    }
    else {
        return '';
    }
}

function DataTableInputDropDownElementGet(Pattern, Id) {
    return '<div class="form-group row mb-0 mt-0">' +
        '<div>' +
        '<select id="' + Pattern + Id + '"' +
        'class="form-control ' + Pattern + '"' +
        'style="font-size: 0.8rem; padding: .1rem .1rem;">' +
        '<option value="' + Id + '" selected id="' + Id + '">' +
        '</option >' +
        '</select>' +
        '</div>' +
        '</div>'
}

function DataTableGetContact(row, Id) {
    return DataTableGetElementId('FullNameId', Id, row['FullName']) +
        ' | Fix : ' + DataTableGetElementId('IpNumberId', Id, row['IpNumber']) +
        ' | Mobile: ' + DataTableGetElementId('PhoneNumberId', Id, row['PhoneNumber']);
}

//function DataTableGetContact(row, Id) {
//    return 'Nom: ' + DataTableGetElementId('FullNameId', Id, row['FullName']) +
//        ' | Tél IP: ' + DataTableGetElementId('IpNumberId', Id, row['IpNumber']) +
//        ' | Tél Fix: ' + DataTableGetElementId('PhoneNumberId', Id, row['PhoneNumber']) +
//        ' | Date Modification: ' + DataTableGetElementId('DhmModificationId', Id, GetDhmValueFromDataTableDate(row['DhmModification']))
//}

//function DataTableButtonGet(Pattern, Id, argument, Icon, color) {
//    return '<button id="' + Pattern + 'BtnId' + Id + '" ' +
//                    'style="background-color: Transparent;border: none;"' +
//                    'onclick="' + Pattern + '(' + argument + ')" >' +
//                    '<span ' +
//                        'class="' + Icon + '" ' +
//                        'style="color:#' + color + '" >' +
//                    '</span>' +
//           '</button>'
//}

function DataTableBtnGet(Pattern, Id, argument, text, BtnClass, SpanClass, TextClass) {
    return '<button id="' + Pattern + 'BtnId' + Id + '" ' +
        'class="' + BtnClass + '" ' +
        'onclick="' + Pattern + '(\'' + argument + '\')" >' +
        '<span ' +
        'class="' + SpanClass + '" >' +
        '</span>' +
        '<div class="' + TextClass + '">' + text + '</div>' +
        '</button>';
}

function DataTableButtonGet(Pattern, Id, argument, text, BtnClass, SpanClass, TextClass) {
    return '<button id="' + Pattern + 'BtnId' + Id + '" ' +
        'class="' + BtnClass + '" ' +
        'onclick="' + Pattern + '(' + argument + ')" >' +
        '<span ' +
        'class="' + SpanClass + '" >' +
        '</span>' +
        '<div class="' + TextClass + '">' + text + '</div>' +
        '</button>';
}

function DataTableBtnInArgumentGet(Pattern, Id, argument, text, BtnClass, SpanClass, TextClass) {
    return '<button id="' + Pattern + 'BtnId' + Id + '" ' +
        'class="' + BtnClass + '" ' +
        'onclick="' + Pattern + '(' + argument + ')" >' +
        '<span ' +
        'class="' + SpanClass + '" >' +
        '</span>' +
        '<div class="' + TextClass + '">' + text + '</div>' +
        '</button>';
}
//<button id="@ViewBag.Id" type="button" class="btn-cl gc-bc1-cl" onclick="@ViewBag.OnClick">
//    <span class="@ViewBag.IconName btn-icon-cl gc-c1-cl"></span>
//    <div class="btn-txt-cl gc-c1-cl">@ViewBag.Label</div>
//</button>

function DataTableRowDelete(Pattern, RowId) {
    //Define ActionBtnId
    var ActionBtnId = 'DataTableRowDeleteBtnId' + RowId;

    //Spin
    DataTableActionBtnSpin(ActionBtnId);

    var obj = {};
    obj.Pattern = Pattern;
    obj.RowId = RowId;
    $.ajax({
        url: '/DataTable/DataTableRowDelete',
        method: "POST",
        data: JSON.stringify(obj),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            $('#' + ActionBtnId).find('span').attr('class', 'fas fa-minus-circle btn-icon-cl gc-c1-cl');
            $('#' + ActionBtnId).find('span').attr('style', 'color:#fe1200');
            $('#' + ActionBtnId).attr('onclick', '');
        },
        error: function (request, status, error) {
            alert('Vous ne disposez pas des autorisations nécessaires pour effectuer cette action');
            $('#' + ActionBtnId).find('span').attr('class', 'far fa-trash-alt btn-icon-cl gc-c1-cl');
        }
    });
}

function HtmlDropDownListFill(ElementId, DefaultValue, JsonRequest, OptionId, OptionName) {
    $('#' + ElementId).empty();
    var item = document.getElementById(ElementId);
    item.options.length = 0;
    var node = document.createElement("option");
    node.value = 0;
    var textnode = document.createTextNode("--");
    node.appendChild(textnode);
    item.appendChild(node);
    $.get(JsonRequest, function (data) {
        $.each(data, function (index, row) {
            node = document.createElement("option");
            node.value = row[OptionId];
            textnode = document.createTextNode(row[OptionId] + ' - ' + row[OptionName]);
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
}

function HtmlDropDownListLabelFill(ElementId, DefaultValue, JsonRequest, OptionId, OptionName, Label) {
    $('#' + ElementId).empty();
    var item = document.getElementById(ElementId);
    item.options.length = 0;
    var node = document.createElement("option");
    node.value = 0;
    var textnode = document.createTextNode(Label);
    node.appendChild(textnode);
    item.appendChild(node);
    $.get(JsonRequest, function (data) {
        $.each(data, function (index, row) {
            node = document.createElement("option");
            node.value = row[OptionId];
            textnode = document.createTextNode(row[OptionId] + ' - ' + row[OptionName]);
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
}

function HtmlDropDownListXorFill(ElementId, DefaultValue, JsonRequest, OptionId, OptionName) {
    $('#' + ElementId).empty();
    var item = document.getElementById(ElementId);
    item.options.length = 0;
    //var node = document.createElement("option");
    //node.value = 0;
    //var textnode = document.createTextNode("--");
    //node.appendChild(textnode);
    //item.appendChild(node);
    $.get(JsonRequest, function (data) {
        $.each(data, function (index, row) {
            node = document.createElement("option");
            node.value = row[OptionId];
            textnode = document.createTextNode(row[OptionId] + ' - ' + row[OptionName]);
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
}

function HtmlDropDownListConnIdFill(ElementId, DefaultValue, JsonRequest, OptionId, OptionName) {
    var ConnectionId = $.connection.hub.id;
    $('#' + ElementId).empty();
    var item = document.getElementById(ElementId);
    item.options.length = 0;
    var node = document.createElement("option");
    node.value = 0;
    var textnode = document.createTextNode("--");
    node.appendChild(textnode);
    item.appendChild(node);
    $.get(JsonRequest, { ConnectionId: ConnectionId }, function (data) {
        $.each(data, function (index, row) {
            node = document.createElement("option");
            node.value = row[OptionId];
            textnode = document.createTextNode(row[OptionId] + ' - ' + row[OptionName]);
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

    if (ElementId == 'CtrTypeId') {
        node = document.createElement("option");
        node.value = 99;
        textnode = document.createTextNode("Les écarts seulement");
        node.appendChild(textnode);
        item.appendChild(node);
    }
}


function HtmlDropDownListWithInputFill(ElementId, DefaultValue, JsonRequest, OptionId, OptionName, Input) {
    $('#' + ElementId).empty();
    var item = document.getElementById(ElementId);
    item.options.length = 0;
    var node = document.createElement("option");
    node.value = 0;
    var textnode = document.createTextNode("--");
    node.appendChild(textnode);
    item.appendChild(node);
    $.get(JsonRequest, { Input: Input }, function (data) {
        $.each(data, function (index, row) {
            node = document.createElement("option");
            node.value = row[OptionId];
            textnode = document.createTextNode(row[OptionId] + ' - ' + row[OptionName]);
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

    if (ElementId == 'CtrTypeId') {
        node = document.createElement("option");
        node.value = 99;
        textnode = document.createTextNode("Les écarts seulement");
        node.appendChild(textnode);
        item.appendChild(node);
    }
}


function HtmlDropDownListWithInputLabelFill(ElementId, DefaultValue, JsonRequest, OptionId, OptionName, Input, label) {
    $('#' + ElementId).empty();
    var item = document.getElementById(ElementId);
    item.options.length = 0;
    var node = document.createElement("option");
    node.value = 0;
    var textnode = document.createTextNode(label);
    node.appendChild(textnode);
    item.appendChild(node);
    $.get(JsonRequest, { Input: Input }, function (data) {
        $.each(data, function (index, row) {
            node = document.createElement("option");
            node.value = row[OptionId];
            textnode = document.createTextNode(row[OptionId] + ' - ' + row[OptionName]);
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

    if (ElementId == 'CtrTypeId') {
        node = document.createElement("option");
        node.value = 99;
        textnode = document.createTextNode("Les écarts seulement");
        node.appendChild(textnode);
        item.appendChild(node);
    }
}

function HtmlDropDownListWithInputNameOnlyFill(ElementId, DefaultValue, JsonRequest, OptionId, OptionName, Input) {
    $('#' + ElementId).empty();
    var item = document.getElementById(ElementId);
    item.options.length = 0;
    var node = document.createElement("option");
    node.value = 0;
    var textnode = document.createTextNode("--");
    node.appendChild(textnode);
    item.appendChild(node);
    $.get(JsonRequest, { Input: Input }, function (data) {
        $.each(data, function (index, row) {
            node = document.createElement("option");
            node.value = row[OptionId];
            textnode = document.createTextNode(row[OptionName]);
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

    if (ElementId == 'CtrTypeId') {
        node = document.createElement("option");
        node.value = 99;
        textnode = document.createTextNode("Les écarts seulement");
        node.appendChild(textnode);
        item.appendChild(node);
    }
}

function HtmlDropDownListWithInputNameOnlyLabelFill(ElementId, DefaultValue, JsonRequest, OptionId, OptionName, Input, label) {
    $('#' + ElementId).empty();
    var item = document.getElementById(ElementId);
    item.options.length = 0;
    var node = document.createElement("option");
    node.value = 0;
    var textnode = document.createTextNode(label);
    node.appendChild(textnode);
    item.appendChild(node);
    $.get(JsonRequest, { Input: Input }, function (data) {
        $.each(data, function (index, row) {
            node = document.createElement("option");
            node.value = row[OptionId];
            textnode = document.createTextNode(row[OptionName]);
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

    if (ElementId == 'CtrTypeId') {
        node = document.createElement("option");
        node.value = 99;
        textnode = document.createTextNode("Les écarts seulement");
        node.appendChild(textnode);
        item.appendChild(node);
    }
}

function HtmlDropDownListWithInputNameOnlyXorFill(ElementId, DefaultValue, JsonRequest, OptionId, OptionName, Input) {
    $('#' + ElementId).empty();
    var item = document.getElementById(ElementId);
    item.options.length = 0;
    //var node = document.createElement("option");
    //node.value = 0;
    //var textnode = document.createTextNode("--");
    //node.appendChild(textnode);
    //item.appendChild(node);
    $.get(JsonRequest, { Input: Input }, function (data) {
        $.each(data, function (index, row) {
            node = document.createElement("option");
            node.value = row[OptionId];
            textnode = document.createTextNode(row[OptionName]);
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

    if (ElementId == 'CtrTypeId') {
        node = document.createElement("option");
        node.value = 99;
        textnode = document.createTextNode("Les écarts seulement");
        node.appendChild(textnode);
        item.appendChild(node);
    }
}

function HtmlDropDownListWithTwoInputsFill(ElementId, DefaultValue, JsonRequest, OptionId, OptionName, Input0, Input1) {
    $('#' + ElementId).empty();
    var item = document.getElementById(ElementId);
    item.options.length = 0;
    var node = document.createElement("option");
    node.value = 0;
    var textnode = document.createTextNode("--");
    node.appendChild(textnode);
    item.appendChild(node);
    $.get(JsonRequest, { Input0: Input0, Input1: Input1 }, function (data) {
        $.each(data, function (index, row) {
            node = document.createElement("option");
            node.value = row[OptionId];
            textnode = document.createTextNode(row[OptionId] + ' - ' + row[OptionName]);
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
}

function HtmlDropDownListWithTwoInputsNameOnlyFill(ElementId, DefaultValue, JsonRequest, OptionId, OptionName, Input0, Input1) {
    $('#' + ElementId).empty();
    var item = document.getElementById(ElementId);
    item.options.length = 0;
    var node = document.createElement("option");
    node.value = 0;
    var textnode = document.createTextNode("--");
    node.appendChild(textnode);
    item.appendChild(node);
    $.get(JsonRequest, { Input0: Input0, Input1: Input1 }, function (data) {
        $.each(data, function (index, row) {
            node = document.createElement("option");
            node.value = row[OptionId];
            textnode = document.createTextNode(row[OptionName]);
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
}


function HtmlDropDownListWithTwoInputsNameOnlyLabelFill(ElementId, DefaultValue, JsonRequest, OptionId, OptionName, Input0, Input1, label) {
    $('#' + ElementId).empty();
    var item = document.getElementById(ElementId);
    item.options.length = 0;
    var node = document.createElement("option");
    node.value = 0;
    var textnode = document.createTextNode(label);
    node.appendChild(textnode);
    item.appendChild(node);
    $.get(JsonRequest, { Input0: Input0, Input1: Input1 }, function (data) {
        $.each(data, function (index, row) {
            node = document.createElement("option");
            node.value = row[OptionId];
            textnode = document.createTextNode(row[OptionName]);
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
}

function HtmlDropDownListNameOnlyFill(ElementId, DefaultValue, JsonRequest, OptionId, OptionName) {
    $('#' + ElementId).empty();
    var item = document.getElementById(ElementId);
    item.options.length = 0;
    var node = document.createElement("option");
    node.value = 0;
    var textnode = document.createTextNode("--");
    node.appendChild(textnode);
    item.appendChild(node);
    $.get(JsonRequest, function (data) {
        $.each(data, function (index, row) {
            node = document.createElement("option");
            node.value = row[OptionId];
            textnode = document.createTextNode(row[OptionName]);
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
}

function HtmlDropDownListNameOnlyLabelFill(ElementId, DefaultValue, JsonRequest, OptionId, OptionName, label) {
    $('#' + ElementId).empty();
    var item = document.getElementById(ElementId);
    item.options.length = 0;
    var node = document.createElement("option");
    node.value = 0;
    var textnode = document.createTextNode(label);
    node.appendChild(textnode);
    item.appendChild(node);
    $.get(JsonRequest, function (data) {
        $.each(data, function (index, row) {
            node = document.createElement("option");
            node.value = row[OptionId];
            textnode = document.createTextNode(row[OptionName]);
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
}

function HtmlDropDownListNameOnlyLabelMultipleFill(ElementId, DefaultValue, JsonRequest, OptionId, OptionName, label) {
    $('#' + ElementId).empty();
    var item = document.getElementById(ElementId);
    item.options.length = 0;
    var node = document.createElement("option");
    node.value = 0;
    var textnode = document.createTextNode(label);
    node.appendChild(textnode);
    item.appendChild(node);
    $.get(JsonRequest, function (data) {
        $.each(data, function (index, row) {
            node = document.createElement("option");
            node.value = row[OptionId];
            textnode = document.createTextNode(row[OptionName]);
            node.appendChild(textnode);
            item.appendChild(node);
        });

        var node = document.createElement("option");
        node.value = 'OK';
        node.Id = 'ProjectIdBtn';
        node.onclick = "ProjectProgressInputsDisplay('')";
        var textnode = document.createTextNode('Apply');
        node.appendChild(textnode);
        item.appendChild(node);

        for (var j = 0, len = item.options.length; j < len; j++) {
            var opt = item.options[j];
            if (opt.value == DefaultValue) {
                item.options[j].selected = 'selected';
                break;
            }
        };

        $('#' + ElementId).multiSelect();
    });
}

function HtmlDropDowListMultipleReset(ElementId, Label, OnChange) {
    HtmlDropDowListMultipleRefresh(ElementId, Label, OnChange);
    $('#' + ElementId).multiSelect();
}

function HtmlDropDowListMultipleRefresh(ElementId, Label, OnChange) {

    var DisplayValue = $('#' + ElementId + 'Parent').css('display');

    $('#' + ElementId + 'Parent').replaceWith(
        '<div id="' + ElementId + 'Parent" class="form-group row mb-1 el-mul-ct-cl" style="display: ' + DisplayValue + '">' +
        '<span class="col-form-label">' + Label + '</span>' +
        '<select class= "form-control mod-inp-cl" id = "' + ElementId + '" onchange = "' + OnChange + '" multiple = "multiple" >' +

        //test
        //'<i class="fa fa-th-list el-mul-op-cl"></i>' +
        //'<i class="fa fa-bars el-mul-op-cl"></i>' +
        //'<i class="fa fa-check-circle el-mul-op-cl"></i>' +
        //'<i class="fa fa-chevron-circle-left el-mul-op-cl"></i>' +

        '<option value="0" selected>' + Label + '</option></select>' +
        '</div>'
    );



}

function HtmlDropDowListRefresh(ElementId, Label, OnChange) {

    var DisplayValue = $('#' + ElementId + 'Parent').css('display');

    $('#' + ElementId + 'Parent').replaceWith('<div id="' + ElementId + 'Parent" class="form-group row mb-1" style="margin-right: 10px; display: ' + DisplayValue + '">' +
        '<label for="' + ElementId + '" id="' + ElementId + 'Label" class="col-4 col-form-label">' + Label + '</label>' +
        '<div class="col-8">' +
        '<select class= "form-control mod-inp-cl" id = "' + ElementId + '" onchange = "' + OnChange + '" >' +
        '<option value="0">' + Label + '</option></select>' +
        '</div>' +
        '</div>');
}

function HtmlDropDowListLabelRefresh(ElementId, Label, OnChange) {

    var DisplayValue = $('#' + ElementId + 'Parent').css('display');

    $('#' + ElementId + 'Parent').replaceWith('<div id="' + ElementId + 'Parent" class="form-group row mb-1" style="margin-right: 10px; display: ' + DisplayValue + '">' +
        '<select class= "form-control mod-inp-cl" id = "' + ElementId + '" onchange = "' + OnChange + '" >' +
        '<option value="0">' + Label + '</option></select>' +
        '</div>');
}

function HtmlDropDowListMultipleCheckReset(ElementId, Label, OnChange, Checked) {

    HtmlDropDowListMultipleCheckRefresh(ElementId, Label, OnChange, Checked);

    $('#' + ElementId).multiSelect();
}

function HtmlDropDowListMultipleCheckRefresh(ElementId, Label, OnChange, Checked) {

    var DisplayValue = $('#' + ElementId + 'Parent').css('display');

    var checked = '';

    if (Checked == true) {
        checked = 'checked';
    }

    $('#' + ElementId + 'Parent').replaceWith(
        '<div id="' + ElementId + 'Parent" class="form-group row mb-1 el-mul-ct-cl" style="display: ' + DisplayValue + '">' +
        '<span class="col-form-label">' + Label + '</span>' +
        '<select class= "form-control mod-inp-cl" id = "' + ElementId + '" onchange = "' + OnChange + '" multiple = "multiple" >' +
        '<option value="0" selected></option></select>' +
        '<div class="form-check" style="display:none">' +
        '<input class="form-check-input" type="checkbox" value="" id="' + ElementId + 'Check" ' + checked + '>' +
        '</div>' +
        '</div>');

    //Test

}

function HtmlDropDownMultipleDeselectAll(ElementId, number) {
    for (var j = 2; j <= number; j++) {
        document.querySelector('#' + ElementId + 'Parent > div > div > div > label:nth-child(' + j + ') > input').checked = false;
    };
}

function HtmlDropDownMultipleSelectAll(ElementId, number) {
    for (var j = 2; j <= number; j++) {
        document.querySelector('#' + ElementId + 'Parent > div > div > div > label:nth-child(' + j + ') > input').checked = true;
    };
}


function HtmlDropDowListCheckRefresh(ElementId, Label, OnChange, Checked) {

    var DisplayValue = $('#' + ElementId + 'Parent').css('display');

    var checked = '';

    if (Checked == true) {
        checked = 'checked';
    }

    $('#' + ElementId + 'Parent').replaceWith('<div id="' + ElementId + 'Parent" class="form-group row mb-1" style="margin-right: 10px; display: ' + DisplayValue + '">' +
        '<select class= "form-control mod-inp-cl" id = "' + ElementId + '" onchange = "' + OnChange + '" >' +
        '<option value="0">' + Label + '</option></select>' +
        '<div class="form-check">' +
        '<input class="form-check-input" type="checkbox" value="" id="' + ElementId + 'Check" ' + checked + '>' +
        '</div>' +
        '</div>');
}

function HtmlDropDownListNameOnlyXorFill(ElementId, DefaultValue, JsonRequest, OptionId, OptionName) {
    $('#' + ElementId).empty();
    var item = document.getElementById(ElementId);
    item.options.length = 0;
    var node = document.createElement("option");
    //node.value = 0;
    //var textnode = document.createTextNode("--");
    //node.appendChild(textnode);
    //item.appendChild(node);
    $.get(JsonRequest, function (data) {
        $.each(data, function (index, row) {
            node = document.createElement("option");
            node.value = row[OptionId];
            textnode = document.createTextNode(row[OptionName]);
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
}

function HtmlDropDownListNameOnlyXorLabelFill(ElementId, DefaultValue, JsonRequest, OptionId, OptionName, label) {
    $('#' + ElementId).empty();
    var item = document.getElementById(ElementId);
    item.options.length = 0;
    var node = document.createElement("option");
    node.value = 99;
    var textnode = document.createTextNode(label);
    node.appendChild(textnode);
    item.appendChild(node);
    $.get(JsonRequest, function (data) {
        $.each(data, function (index, row) {
            node = document.createElement("option");
            node.value = row[OptionId];
            textnode = document.createTextNode(row[OptionName]);
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
}

function HtmlDropDownListNameOnlyXorWithInputFill(ElementId, DefaultValue, JsonRequest, OptionId, OptionName, Input) {
    $('#' + ElementId).empty();
    var item = document.getElementById(ElementId);
    item.options.length = 0;
    var node = document.createElement("option");
    $.get(JsonRequest, { Input: Input }, function (data) {
        $.each(data, function (index, row) {
            node = document.createElement("option");
            node.value = row[OptionId];
            textnode = document.createTextNode(row[OptionName]);
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
}


function HtmlDropDownListNameOnlyWithInputFill(ElementId, DefaultValue, JsonRequest, OptionId, OptionName, Input) {
    $('#' + ElementId).empty();
    var item = document.getElementById(ElementId);
    item.options.length = 0;
    var node = document.createElement("option");

    node.value = 0;
    var textnode = document.createTextNode("--");
    node.appendChild(textnode);
    item.appendChild(node);

    $.get(JsonRequest, { Input: Input }, function (data) {
        $.each(data, function (index, row) {
            node = document.createElement("option");
            node.value = row[OptionId];
            textnode = document.createTextNode(row[OptionName]);
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
}


function HtmlDropDownListNameOnlyWithInputLabelFill(ElementId, DefaultValue, JsonRequest, OptionId, OptionName, Input, Label) {
    $('#' + ElementId).empty();
    var item = document.getElementById(ElementId);
    item.options.length = 0;
    var node = document.createElement("option");

    node.value = 0;
    var textnode = document.createTextNode(Label);
    node.appendChild(textnode);
    item.appendChild(node);

    $.get(JsonRequest, { Input: Input }, function (data) {
        $.each(data, function (index, row) {
            node = document.createElement("option");
            node.value = row[OptionId];
            textnode = document.createTextNode(row[OptionName]);
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
}

function DataTableRowReset(Id, TableName) {
    $('#DataTableRowResetBtnId' + Id).find('span').attr('class', 'fa fa-spinner fa-spin');
    var obj = {};
    obj.TableName = TableName;
    obj.Id = Id;
    $.ajax({
        url: "/Cert/DataTableRowReset",
        method: "POST",
        data: JSON.stringify(obj),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            $('#DataTableRowResetBtnId' + Id).find('span').attr('class', 'fas fa-minus-circle');
            $('#DataTableRowResetBtnId' + Id).find('span').attr('style', 'color:#fe1200');
            $('#DataTableRowResetBtnId' + Id).attr('onclick', '');
        }
    });
}

function DataTableIconGet(Icon) {
    return '<div><span class="' + Icon + '"></span></div>'
}

function DataTableIconGet(Icon, color) {
    return '<div><span class="' + Icon + '" style="color:#' + color + '; font-size:22px; margin-right: 6px;"></span></div>'
}

function DataTableStringGet(data, lenght) {
    if (new String(data).length > lenght) {
        return data.substr(0, lenght) + '...';
    }
    else {
        return data;
    };
}


function DataTableStepGet(RowOrder) {
    return '<div class="circle">' + RowOrder + '</div>';
}

function DataTableLongTextGet(data, lenght) {
    var datashort;
    if (new String(data).length > lenght) {
        datashort = data.substr(0, lenght) + '...';
        //return '<a href="#" data-toggle="tooltip" data-placement="bottom" title="' + datashort + '">' + data + '</a>';
        return '<span href="#" data-toggle="tooltip" data-placement="bottom" title="' + data + '">' + datashort + '</span>';
        //return '<div class="tooltip">' + datashort + '<span class="tooltiptext">' + data + '</span></div >';
        //return '<div data-toggle="tooltip" data-placement="bottom" >' + datashort + '<span class="tooltiptext">' + data + '</span></div >';  'data-toggle="tooltip" data-placement="bottom" title="Hooray!"'
    }
    else {
        return data;
    }
};

function DataTableElementDisplay(ElementId) {
    var Element = document.getElementById(ElementId);
    if (Element.style.display === "none") {
        Element.style.display = "block";
    } else {
        Element.style.display = "none";
    }
}

function DataTableProgressPercentGet(CertFileId, LinesNumber, CurrentLineNumber) {
    var ProgressValue = '';
    if (LinesNumber == 0) {
        ProgressValue = 0;
    }
    else {
        ProgressValue = ((CurrentLineNumber / LinesNumber) * 100).toFixed(2);
    }
    var ProgressPercent = new String(ProgressValue) + '%';
    return '<span id="ProgressPercentId' + CertFileId + '">' + ProgressPercent + '</span>';
}

function DataTableProgressionGet(Id, LinesNumber, CurrentLineNumber) {
    var ProgressElement = DataTableProgressPercentGet(Id, LinesNumber, CurrentLineNumber);
    var ProgressValue = '';
    if (LinesNumber == 0) {
        ProgressValue = 0;
    }
    else {
        ProgressValue = ((CurrentLineNumber / LinesNumber) * 100).toFixed(2);
    }
    return '<div class="progress">' +
        '<div id="ProgressBarId' + Id + '"' +
        'class="progress-bar progress-bar-striped " role = "progressbar" style = "width: ' + ProgressValue + '%; background-color:#A5A5A5" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100" >' + ProgressElement + '</div>' +
        '</div>';
}

function DataTableProgressionWithColorGet(Id, LinesNumber, CurrentLineNumber, Color) {
    var ProgressElement = DataTableProgressPercentGet(Id, LinesNumber, CurrentLineNumber);
    var ProgressValue = '';
    if (LinesNumber == 0) {
        ProgressValue = 0;
    }
    else {
        ProgressValue = ((CurrentLineNumber / LinesNumber) * 100).toFixed(2);
    }
    return '<div class="progress">' +
        '<div id="ProgressBarId' + Id + '"' +
        'class="progress-bar progress-bar-striped " role = "progressbar" style = "width: ' + ProgressValue + '%; background-color:' + Color + '" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100" >' + ProgressElement + '</div>' +
        '</div>';
}

function DataTableProgressBarGet(Id, LinesNumber, CurrentLineNumber) {
    var ProgressValue = ((CurrentLineNumber / LinesNumber) * 100).toFixed(0);
    return '<div class="progress">' +
        '<div id="ProgressBarId' + Id + '"' +
        'class="progress-bar progress-bar-striped " role = "progressbar" style = "width: ' + ProgressValue + '%; background-color:#09c70d" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100" ></div>' +
        '</div>'
}

function DataTableProgressValueGet(Id, ProgressValue, RgbValue) {
    return '<div class="progress">' +
        '<div id="ProgressBarId' + Id + '"' +
        'class="progress-bar progress-bar-striped " role = "progressbar" style = "width: ' + ProgressValue + '; background-color:' + RgbValue + '" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100" ></div>' +
        '</div>'
}

function DataTableThreadProgressBarGet(Id, ThreadTotal, ThreadDone) {
    var ThreadValue = ThreadDone + '/' + ThreadTotal;
    var ProgressValue = ((ThreadDone / ThreadTotal) * 100).toFixed(0);


    if (ThreadDone == 0) {
        return '<div class="progress">' +
            '<div id="ProgressBarThreadId' + Id + '"' +
            'class="progress-bar progress-bar-striped " role = "progressbar" style = "width: ' + ProgressValue + '%; background-color:#A5A5A5" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100" >' + ThreadValue + '</div>' +
            '</div>'
    }
    else {
        if (ThreadDone >= ThreadTotal) {
            return '<div class="progress">' +
                '<div id="ProgressBarThreadId' + Id + '"' +
                'class="progress-bar progress-bar-striped " role = "progressbar" style = "width: ' + ProgressValue + '%; background-color:#A5A5A5" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100" >' + ThreadValue + '</div>' +
                '</div>';
        }
        else {
            return '<div class="progress">' +
                '<div id="ProgressBarThreadId' + Id + '"' +
                'class="progress-bar progress-bar-striped " role = "progressbar" style = "width: ' + ProgressValue + '%; background-color:#ED7D31" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100" >' + ThreadValue + '</div>' +
                '</div>';
        }
    }
}

function DataTableButtonDeleteGet(Pattern, Id) {
    return '<button id="CertStationDeleteBtnId' + Id + '" ' +
        'style="background-color: Transparent;border: none;"' +
        'onclick="CertStationDelete(\'' + Pattern + '\',' + '\'' + Id + '\')" >' +
        '<span class="far fa-trash-alt" style="color:#fe1200" ></span></button>';
}

function DataTableFormatDoubleGet(data) {
    return numFormat(data) + '</span>';
}

function DataTableFormatDoubleNullAlertGet(data) {
    if (data.toFixed(0) == 0) {
        return '<span  class="badge-alert badge-danger">' + numFormat(data) + '</span>';
    }
    else {
        return numFormat(data);
    }
}

function DataTableFormatDoubleAlertGet(data, Gap) {
    if (Gap.toFixed(0) != 0) {
        return '<span  class="badge-alert badge-danger">' + numFormat(data) + '</span>';
    }
    else {
        return DataTableFormatDoubleNullAlertGet(data);
    }
}

function DataTableFormatIntAlertGet(data, Gap) {
    if (Gap.toFixed(0) != 0) {
        return '<span  class="badge-alert badge-danger">' + numShortFormat(data) + '</span>';
    }
    else {
        return DataTableFormatIntNullAlertGet(data);
    }
}

function DataTableEmergencyGet(EmergencyId, EmergencyName) {
    if (EmergencyId == '00') {
        return '<span  class="badge badge-secondary">' + EmergencyName + '</span>';
    }
    if (EmergencyId == '01') {
        return '<span  class="badge badge-primary">' + EmergencyName + '</span>';
    }
    if (EmergencyId == '02') {
        return '<span  class="badge badge-warning">' + EmergencyName + '</span>';
    }
    if (EmergencyId == '03') {
        return '<span  class="badge badge-danger">' + EmergencyName + '</span>';
    }
}

function DataTableStatusGet(StatusName, StatusColor) {
    //return '<span style="background-color: ' + StatusColor + ';">' + StatusName + '</span>';

    return '<a>' +
        '<span class="fas fa-bookmark" style="color: ' + StatusColor + ';">&nbsp;</span>' +
        StatusName +
        '</a>';
}

function DataTableBadgeGet(StatusName, StatusColor) {
    return '<span  class="badge" style="background-color: ' + StatusColor + ';">' + StatusName + '</span>';
}

function DataTableFormatRateGet(data) {
    if (data == 0) {
        return data;
    }
    else {
        if (data > 0) {
            return '<span  class="badge-alert badge-success" >' + data + ' %</span>';
        }
        else {
            return '<span  class="badge-alert badge-danger">' + data + ' %</span>';
        }
    }
}

function DataTableFormatIntGet(data) {
    return numShortFormat(data);
}

function DataTableFormatIntDividedGet(data, denominator) {
    return numFormat(data / denominator);
}

function DataTableFormatIntNullAlertGet(data) {
    if (data.toFixed(0) == 0) {
        return '<span  class="badge-alert badge-danger">' + numShortFormat(data) + '</span>';
    }
    else {
        return numShortFormat(data);
    }
}

function QualifObsMpSoldGet(data) {
    if (data == '26') {
        return '<span  class="badge-alert badge-danger">' + data + '</span>';
    }
    else {
        return data;
    }
}

function DataTableInputCheckBoxElementGet(Pattern, Id, data, onchange) {

    if (data == true) {
        return '<input id="' + Pattern + Id + '" type="checkbox" onchange="' + onchange + '" checked>'
    }
    else {
        return '<input id="' + Pattern + Id + '" type="checkbox" onchange="' + onchange + '">'
    };
}

function DataTableIsValidSwitch(Pattern, RowId, IsValid) {
    var obj = {};
    obj.Pattern = Pattern;
    obj.RowId = RowId;
    obj.IsValid = IsValid;
    $.ajax({
        url: "/DataTable/DataTableIsValidSwitch",
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

function DataTableCheckBoxIsValidGet(Pattern, RowId, IsValid) {
    var Id = RowId;
    var data = IsValid;
    var onchange = 'DataTableIsValidSwitch(\'' + Pattern + '\', \'' + RowId + '\', ' + IsValid + ')';
    var Pattern = 'DataTableIsValidSwitch' + Pattern;
    return DataTableCheckBoxGet(Pattern, Id, data, onchange);
}



function DataTableCheckBoxGet(Pattern, Id, data, onchange) {
    if (data == true) {
        return '<label for="' + Pattern + Id + '" class="switch" style="float:left;margin-top: 8px;">' +
            '<input id = "' + Pattern + Id + '" type = "checkbox" class="success form-control" onchange="' + onchange + '" checked>' +
            '<span class="slider round"></span>' +
            '</label>';
    }
    else {
        return '<label for="' + Pattern + Id + '" class="switch" style="float:left;margin-top: 8px;">' +
            '<input id="' + Pattern + Id + '" type="checkbox" class="success form-control" onchange="' + onchange + '">' +
            '<span class="slider round"></span>' +
            '</label>';
    }
}

function DataTableCellValueGet(DataTableId, RowIndex, columnIndex) {
    var CellValue = 0;
    var column = $('#' + DataTableId + '').DataTable().cells(RowIndex, columnIndex);
    column.data().each(function (d, j) {
        CellValue = d;
    });
    return CellValue;
}

function ArrayThreeGet(product, j) {
    var RowArray = [];
    RowArray.length = 3;
    RowArray = ReplaceAtArray(RowArray, 0, product[j][0]);
    RowArray = ReplaceAtArray(RowArray, 1, product[j][1]);
    RowArray = ReplaceAtArray(RowArray, 2, parseInt(product[j][2]));
    return RowArray;
}

function DataTableRowThreeValuesGet(DataTableId, RowIndex, ColumnIndex0, ColumnIndex1, ColumnIndex2) {
    var RowArray = [];
    RowArray.length = 3;
    RowArray = ReplaceAtArray(RowArray, 0, DataTableCellValueGet(DataTableId, RowIndex, ColumnIndex0));
    RowArray = ReplaceAtArray(RowArray, 1, DataTableCellValueGet(DataTableId, RowIndex, ColumnIndex1));
    RowArray = ReplaceAtArray(RowArray, 2, DataTableCellValueGet(DataTableId, RowIndex, ColumnIndex2));
    return RowArray;
}

function DataTableRowsFiveGet(DataTableId, RowIndex, ColumnIndex0, ColumnIndex1, ColumnIndex2, ColumnIndex3, ColumnIndex4) {
    var RowArray = [];
    RowArray.length = 5;
    RowArray = ReplaceAtArray(RowArray, 0, DataTableCellValueGet(DataTableId, RowIndex, ColumnIndex0));
    RowArray = ReplaceAtArray(RowArray, 1, DataTableCellValueGet(DataTableId, RowIndex, ColumnIndex1));
    RowArray = ReplaceAtArray(RowArray, 2, DataTableCellValueGet(DataTableId, RowIndex, ColumnIndex2));
    RowArray = ReplaceAtArray(RowArray, 3, DataTableCellValueGet(DataTableId, RowIndex, ColumnIndex3));
    RowArray = ReplaceAtArray(RowArray, 4, DataTableCellValueGet(DataTableId, RowIndex, ColumnIndex4));
    return RowArray;
}

function DataTableRowsSixGet(DataTableId, RowIndex, ColumnIndex0, ColumnIndex1, ColumnIndex2, ColumnIndex3, ColumnIndex4, ColumnIndex5) {
    var RowArray = [];
    RowArray.length = 6;
    RowArray = ReplaceAtArray(RowArray, 0, DataTableCellValueGet(DataTableId, RowIndex, ColumnIndex0));
    RowArray = ReplaceAtArray(RowArray, 1, DataTableCellValueGet(DataTableId, RowIndex, ColumnIndex1));
    RowArray = ReplaceAtArray(RowArray, 2, DataTableCellValueGet(DataTableId, RowIndex, ColumnIndex2));
    RowArray = ReplaceAtArray(RowArray, 3, DataTableCellValueGet(DataTableId, RowIndex, ColumnIndex3));
    RowArray = ReplaceAtArray(RowArray, 4, DataTableCellValueGet(DataTableId, RowIndex, ColumnIndex4));
    RowArray = ReplaceAtArray(RowArray, 5, DataTableCellValueGet(DataTableId, RowIndex, ColumnIndex5));
    return RowArray;
}

function DataTableRowsSevenGet(DataTableId, RowIndex, ColumnIndex0, ColumnIndex1, ColumnIndex2, ColumnIndex3, ColumnIndex4, ColumnIndex5, ColumnIndex6) {
    var RowArray = [];
    RowArray.length = 7;
    RowArray = ReplaceAtArray(RowArray, 0, DataTableCellValueGet(DataTableId, RowIndex, ColumnIndex0));
    RowArray = ReplaceAtArray(RowArray, 1, DataTableCellValueGet(DataTableId, RowIndex, ColumnIndex1));
    RowArray = ReplaceAtArray(RowArray, 2, DataTableCellValueGet(DataTableId, RowIndex, ColumnIndex2));
    RowArray = ReplaceAtArray(RowArray, 3, DataTableCellValueGet(DataTableId, RowIndex, ColumnIndex3));
    RowArray = ReplaceAtArray(RowArray, 4, DataTableCellValueGet(DataTableId, RowIndex, ColumnIndex4));
    RowArray = ReplaceAtArray(RowArray, 4, DataTableCellValueGet(DataTableId, RowIndex, ColumnIndex5));
    RowArray = ReplaceAtArray(RowArray, 4, DataTableCellValueGet(DataTableId, RowIndex, ColumnIndex6));
    return RowArray;
}

function GetColumnArray(DataTableId, Index) {
    var i = 1;
    var ColumnArray = [];
    var column = $('#' + DataTableId + '').DataTable().column(Index);
    column.data().each(function (d, j) {
        ColumnArray.length = i - 1;
        ColumnArray = ReplaceAtArray(ColumnArray, i - 1, d);
        i = i + 1;
    });
    return ColumnArray;
}

function DataTableColumnValuesGet(DataTableId, ColumnIndex) {
    var i = 1;
    var ColumnArray = [];
    var column = $('#' + DataTableId + '').DataTable().column(ColumnIndex);
    column.data().each(function (d, j) {
        ColumnArray.length = i - 1;
        ColumnArray = ReplaceAtArray(ColumnArray, i - 1, d);
        i = i + 1;
    });
    return ColumnArray;
}

function SupUploadGetStatus(data) {
    var DiffDefault = Math.abs(new Date(2019, 1, 1, 0, 0, 0) - GetDateJsFromDataTableDate(data));
    var diffInSeconds = Math.abs(Date.now() - GetDateJsFromDataTableDate(data)) / 1000;
    var days = Math.floor(diffInSeconds / 60 / 60 / 24);

    if (days < 2) {
        return '<span><i class="fa fa-circle" style="font-size: 0.7rem;color: green;"></i></span >'
    }
    if (days >= 2 && days < 200) {
        return '<span><i class="fa fa-circle" style="font-size: 0.7rem;color: red;"></i></span >'
    }
    else {
        return ''
    }
}

function UpdateProgressBar(Id, LinesNumber, CurrentLineNumberNew, TimeRemainingNew) {
    $('#CurrentLineNumberId' + Id).text(CurrentLineNumberNew);
    var ProgressValue = ((CurrentLineNumberNew / LinesNumber) * 100).toFixed(2);
    var ProgressPercent = ProgressValue.toString() + '%';
    //var LinesGap = int.Parse(CurrentLineNumberNew - LinesNumber);
    $('#ProgressValueId' + Id).attr('style', 'width: ' + ProgressValue + '%; background-color:#09c70d');
    $('#ProgressPercentId' + Id).text(ProgressPercent);
    $('#TimeRemainingId' + Id).text(TimeRemainingNew);
    //$('#LinesGapId' + Id).text(LinesGap);
}

function GetTimeRemaining(DateOld, LinesNumber, CurrentLineNumberOld, CurrentLineNumberNew) {
    var TimeRemainingNew = "";
    var DateNew = Date.now();
    var diffInSeconds = Math.floor(((Math.abs(DateNew - DateOld) / 1000) / (CurrentLineNumberNew - CurrentLineNumberOld)) * (LinesNumber - CurrentLineNumberNew));
    var hours = Math.floor(diffInSeconds / 60 / 60);
    var minutes = Math.floor(diffInSeconds / 60);


    if (hours > 0) {
        TimeRemainingNew = hours + ' H';
    }
    else {
        if (minutes > 0) {
            TimeRemainingNew = minutes + ' Min';
        }
        else {
            TimeRemainingNew = diffInSeconds + ' Sec';
        }
    }
    return TimeRemainingNew;
}

function GetLinesNumberPart(LinesNumber) {
    var Part = 10;
    if (LinesNumber <= 10) {
        Part = 2;
    }
    if (LinesNumber > 10 && LinesNumber <= 100) {
        Part = 5;
    }
    if (LinesNumber > 100 && LinesNumber <= 1000) {
        Part = Math.round(LinesNumber * 0.1);
    }
    if (LinesNumber > 1000) {
        Part = Math.round(LinesNumber * 0.05);
    }
    return Part;
}

function CertValidate(Pattern, Id, IsValidString) {
    $('#CertValidateBtnId' + Pattern + Id).find('span').attr('class', 'fa fa-spinner fa-spin');
    var IsValid = new Boolean(IsValidString);
    var obj = {};
    obj.Pattern = Pattern;
    obj.Id = Id;
    obj.IsValid = IsValid;
    $.ajax({
        url: "/Cert/CertValidate",
        method: "POST",
        data: JSON.stringify(obj),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {

            if (IsValid == false) {
                $('#CertValidateBtnId' + Pattern + Id).find('span').attr('class', 'fas fa-unlock-alt');
                $('#CertValidateBtnId' + Pattern + Id).find('span').attr('style', 'color:#28a745');
                $('#CertValidateBtnId' + Pattern + Id).attr('onclick', 'CertValidate(\'' + Pattern + '\',' + '\'' + Id + '\', ' + true + ')');
            }
            else {
                $('#CertValidateBtnId' + Pattern + Id).find('span').attr('class', 'fas fa-clock');
                $('#CertValidateBtnId' + Pattern + Id).find('span').attr('style', 'color:#ff6000');
                $('#CertValidateBtnId' + Pattern + Id).attr('onclick', 'CertValidate(\'' + Pattern + '\',' + '\'' + Id + '\', ' + false + ')');
            }
        }
    });

}

function DateTimeNowGet() {
    var now = new Date();
    var year = now.getFullYear();
    var month = now.getMonth() + 1;
    var day = now.getDate();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    if (month.toString().length == 1) {
        month = '0' + month;
    }
    if (day.toString().length == 1) {
        day = '0' + day;
    }
    if (hour.toString().length == 1) {
        hour = '0' + hour;
    }
    if (minute.toString().length == 1) {
        minute = '0' + minute;
    }
    if (second.toString().length == 1) {
        second = '0' + second;
    }


    var dateTime = day + '/' + month + '/' + year + ' ' + hour + ':' + minute + ':' + second;
    return dateTime;
}

function DateValueYesterdaySet(Id) {
    var d = new Date();
    d.setDate(d.getDate() - 1);
    d.setTime(d.getTime() - d.getHours() * 3600 * 1000 - d.getMinutes() * 60 * 1000);
    var year = d.getFullYear();
    var month = d.getMonth() + 1;
    var day = d.getDate();

    document.getElementById(Id).value = year + '-' + GetDigits(month, 2) + '-' + GetDigits(day, 2);
}

function DateValueTheDayBeforeSet(Id) {
    var d = new Date();
    d.setDate(d.getDate() - 2);
    d.setTime(d.getTime() - d.getHours() * 3600 * 1000 - d.getMinutes() * 60 * 1000);
    var year = d.getFullYear();
    var month = d.getMonth() + 1;
    var day = d.getDate();

    document.getElementById(Id).value = year + '-' + GetDigits(month, 2) + '-' + GetDigits(day, 2);
}

function DateValueDefaultSet(Id, BackDaysNumber) {
    var d = new Date();
    d.setDate(d.getDate() - BackDaysNumber);
    d.setTime(d.getTime() - d.getHours() * 3600 * 1000 - d.getMinutes() * 60 * 1000);
    var year = d.getFullYear();
    var month = d.getMonth() + 1;
    var day = d.getDate();

    document.getElementById(Id).value = year + '-' + GetDigits(month, 2) + '-' + GetDigits(day, 2);
}

function DhmValueStartDefaultSet(Id, BackDaysNumber) {
    var d = new Date();
    d.setDate(d.getDate() - BackDaysNumber);
    d.setTime(d.getTime() - d.getHours() * 3600 * 1000 - d.getMinutes() * 60 * 1000);
    var year = d.getFullYear();
    var month = d.getMonth() + 1;
    var day = d.getDate();

    document.getElementById(Id).value = year + '-' + GetDigits(month, 2) + '-' + GetDigits(day, 2) + 'T00:00';
}

function DhmValueEndDefaultSet(Id, BackDaysNumber) {
    var d = new Date();
    d.setDate(d.getDate() - BackDaysNumber);
    d.setTime(d.getTime() - d.getHours() * 3600 * 1000 - d.getMinutes() * 60 * 1000);
    var year = d.getFullYear();
    var month = d.getMonth() + 1;
    var day = d.getDate();

    document.getElementById(Id).value = year + '-' + GetDigits(month, 2) + '-' + GetDigits(day, 2) + 'T23:59';
}

function DateStringYesterdayGet() {
    var d = new Date();
    d.setDate(d.getDate() - 1);
    d.setTime(d.getTime() - d.getHours() * 3600 * 1000 - d.getMinutes() * 60 * 1000);
    var year = d.getFullYear();
    var month = d.getMonth() + 1;
    var day = d.getDate();

    return GetDigits(day, 2) + GetDigits(month, 2) + year;
}

function DateStringLastWeekGet() {
    var d = new Date();
    d.setDate(d.getDate() - 8);
    d.setTime(d.getTime() - d.getHours() * 3600 * 1000 - d.getMinutes() * 60 * 1000);
    var year = d.getFullYear();
    var month = d.getMonth() + 1;
    var day = d.getDate();

    return GetDigits(day, 2) + GetDigits(month, 2) + year;
}

function MenuBarHighlight(Index, IndexMax) {
    for (i = 0; i <= IndexMax; i++) {
        if (document.getElementById('MenuBarId' + i) != null) {
            //document.getElementById('MenuBarId' + i).style.color = "#d1d1d6";
            document.getElementById('MenuBarId' + i).classList.remove('gc-c1-cl');
            document.getElementById('MenuBarId' + i).classList.add('gc-c0-cl');
        }

        if (i == Index) {
            if (document.getElementById('MenuBarId' + i) != null) {
                document.getElementById('MenuBarId' + i).classList.remove('gc-c0-cl');
                document.getElementById('MenuBarId' + i).classList.add('gc-c1-cl');
            }
        }
    }
}

function MenuBarNavHighlight(PageIndex, NavIndex, IndexMax) {
    for (i = 0; i <= IndexMax; i++) {
        if (document.getElementById('MenuBarId' + PageIndex + i) != null) {
            document.getElementById('MenuBarId' + PageIndex + i).classList.remove('gc-c1-cl');
            document.getElementById('MenuBarId' + PageIndex + i).classList.add('gc-c0-cl');
        }

        if (i == NavIndex) {
            if (document.getElementById('MenuBarId' + PageIndex + i) != null) {
                document.getElementById('MenuBarId' + PageIndex + i).classList.remove('gc-c0-cl');
                document.getElementById('MenuBarId' + PageIndex + i).classList.add('gc-c1-cl');
            }
        }
    }
}

function MenuBarFormNavHighlight(PageIndex, NavIndex, IndexMax) {
    for (i = 0; i <= IndexMax; i++) {
        if (document.getElementById('ModalMenuBarId' + PageIndex + i) != null) {
            document.getElementById('ModalMenuBarId' + PageIndex + i).classList.remove('gc-c1-cl');
            document.getElementById('ModalMenuBarId' + PageIndex + i).classList.add('gc-c0-cl');
        }

        if (i == NavIndex) {
            if (document.getElementById('ModalMenuBarId' + PageIndex + i) != null) {
                document.getElementById('ModalMenuBarId' + PageIndex + i).classList.remove('gc-c0-cl');
                document.getElementById('ModalMenuBarId' + PageIndex + i).classList.add('gc-c1-cl');
            }
        }
    }
}

function JsSleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}

function NavigateTo(href, newTab) {
    var a = document.createElement('a');
    a.href = href;
    if (newTab) {
        a.setAttribute('target', '_blank');
    }
    a.click();
}





function RabbitQueueCountCheck(Url, QueueName) {

    var ActionBtnId = 'ParamActionBtnId2';
    $('#' + ActionBtnId).find('span').attr('class', 'fa fa-spinner fa-spin btn-icon-m-cl gc-c1-cl');

    var Icon = 'fas fa-list-ol btn-icon-m-cl gc-c1-cl';
    var obj = {};
    obj.Url = Url;
    obj.QueueName = QueueName;
    $.ajax({
        url: "/Rabbit/RabbitQueueCountCheck",
        method: "POST",
        data: JSON.stringify(obj),
        contentType: "application/json; charset=utf-8",
        dataType: "text",
        success: function (data) {
            $('#' + ActionBtnId).find('span').attr('class', Icon);
            alert('Vous avez ' + data + ' en cours de chargement! Merci de patienter.');
        }
    });
}

function RabbitQueueCountCheck(QueueName) {
    var obj = {};
    obj.QueueName = QueueName;
    $.ajax({
        url: "/Rabbit/RabbitQueueCountCheck",
        method: "POST",
        data: JSON.stringify(obj),
        contentType: "application/json; charset=utf-8",
        dataType: "text",
        success: function (data) {
            $('#' + ActionBtnId).find('span').attr('class', Icon);
            alert('Vous avez ' + data + ' en cours de chargement! Merci de patienter.');
        }
    });
}


function DataTableHourFormatGet(Hour) {
    return GetDigits(Hour, 2) + 'H';
}

function TextParamValueGet(ParamValue) {
    if (new String(ParamValue).substr(0, 2) == '--') {
        return '0';
    }
    else {
        return ParamValue;
    }
}

function TextParamValueDashGet(ParamValue) {
    if (ParamValue == '0') {
        return '--';
    }
    else {
        return ParamValue;
    }
}

function TextParamValueDashThreeGet(ParamValue) {
    if (ParamValue == '0') {
        return '---';
    }
    else {
        return ParamValue;
    }
}






function ElementDisable(ElementId) {
    document.getElementById(ElementId).disabled = true;
    document.getElementById(ElementId).style.backgroundColor = '#D1D1D6';
}

function ElementEnable(ElementId) {
    document.getElementById(ElementId).disabled = false;
    document.getElementById(ElementId).style.backgroundColor = 'white';
}

function DataTableBtnOrderGet(Pattern, PatternOrder, RowId, RowParentId) {
    var Id = RowId;
    var argument = '\'' + Pattern + '\', \'' + PatternOrder + '\', \'' + RowId + '\', \'' + RowParentId + '\'';
    var text = '';

    var Icon = '';
    if (PatternOrder == 'Up') {
        Icon = 'fas fa-angle-up';
    }
    if (PatternOrder == 'Down') {
        Icon = 'fas fa-angle-down';
    }
    if (PatternOrder == 'First') {
        Icon = 'fas fa-angle-double-up';
    }
    if (PatternOrder == 'Last') {
        Icon = 'fas fa-angle-double-down';
    }

    var BtnClass = 'dt-btn-cl gc-bc1-cl';
    var SpanClass = Icon + ' btn-icon-cl gc-c1-cl';
    var TextClass = 'dt-text-cl';

    return DataTableButtonGet('DataTableRowOrder', Id, argument, text, BtnClass, SpanClass, TextClass);
}

function SqlIsNotNullGet(IsNotNul) {
    if (IsNotNul == true) {
        return "<p style='color:red;font-weight:bold'>NOT NULL</p>";
    }
    else {
        return '';
    }
}

function SqlIsNullableGet(IsNullable) {
    if (IsNullable == true) {
        return '';
    }
    else {
        return "<p style='color:red;font-weight:bold'>NO</p>";
    }
}

function DataTableRowOrder(Pattern, PatternOrder, RowId, RowParentId) {

    //Set action button
    var ActionBtnId = 'DataTableRowOrderBtnId' + RowId;
    var Icon = '';
    if (PatternOrder == 'Up') {
        Icon = 'fas fa-angle-up';
    }
    if (PatternOrder == 'Down') {
        Icon = 'fas fa-angle-down';
    }
    if (PatternOrder == 'First') {
        Icon = 'fas fa-angle-double-up';
    }
    if (PatternOrder == 'Last') {
        Icon = 'fas fa-angle-double-down';
    }

    Icon = Icon + ' btn-icon-cl gc-c1-cl';

    //Spin
    DataTableActionBtnSpin(ActionBtnId);

    var obj = {};
    obj.Pattern = Pattern;
    obj.PatternOrder = PatternOrder;
    obj.RowId = RowId;
    obj.RowParentId = RowParentId;
    $.ajax({
        url: "/DataTable/DataTableRowOrder",
        method: "POST",
        data: JSON.stringify(obj),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            ActionBtnIconSet(ActionBtnId, Icon);
            if (Pattern == 'BiColumn') {
                BiColumnDisplay();
            }
            if (Pattern == 'BiAttribute') {
                BiAttributeDisplay();
            }
            if (Pattern == 'BiMapCompoAttribute') {
                BiMapCompoAttributeDisplay();
            }
        },
        error: function (request, status, error) {
            alert('Vous ne disposez pas des autorisations nécessaires pour effectuer cette action');
        }
    });
}



function DataTableBtnDeleteGet(Pattern, RowId) {
    var Id = RowId;
    var argument = '\'' + Pattern + '\', \'' + RowId + '\'';
    var text = '';
    var BtnClass = 'dt-btn-cl gc-bc1-cl';
    var SpanClass = 'far fa-trash-alt btn-icon-cl gc-c1-cl';
    var TextClass = 'dt-text-cl';

    return DataTableButtonGet('DataTableRowDelete', Id, argument, text, BtnClass, SpanClass, TextClass);
}

function DataTableModalFormBtnEditGet(Pattern, RowId) {
    var PatternForm = 'Edit';
    var Icon = 'fas fa-edit';
    var Label = '';
    var OnClick = ModalFormOnClickGet(Pattern, PatternForm, RowId);
    //var FormElement = DataTableModalFormBtnGet(RowId, Pattern, PatternForm, Icon, Label);
    var FormElement = DataTableFormBtnIdGet(Pattern, PatternForm, RowId, Label, OnClick, Icon);
    return FormElement;
}

function DataTableModalFormButtonGet(Pattern, PatternForm, RowId) {

    var Icon = '';
    var Label = '';

    if (PatternForm == 'Edit') {
        Icon = 'fas fa-edit';
    }
    if (PatternForm == 'Add') {
        Icon = 'fas fa-plus-circle';
    }
    if (PatternForm == 'Search') {
        Icon = 'fas fa-eye';
    }
    if (PatternForm == 'Child') {
        Icon = 'fas fa-anchor';
    }

    var OnClick = ModalFormOnClickGet(Pattern, PatternForm, RowId);
    var FormElement = DataTableFormBtnIdGet(Pattern, PatternForm, RowId, Label, OnClick, Icon);
    return FormElement;
}


function DataTableIconFromPatternFormGet(PatternForm) {

    var Icon = '';

    if (PatternForm == 'Edit') {
        Icon = 'fas fa-edit';
    }
    if (PatternForm == 'Add') {
        Icon = 'fas fa-plus-circle';
    }
    if (PatternForm == 'Search') {
        Icon = 'fas fa-eye';
    }
    if (PatternForm == 'Child') {
        Icon = 'fas fa-anchor';
    }
    return Icon;
}


function ElementIconFromPatternFormGet(PatternForm) {

    var Icon = '';

    if (PatternForm == 'Edit') {
        Icon = 'fas fa-edit btn-icon-cl gc-c1-cl';
    }
    if (PatternForm == 'Add') {
        Icon = 'fas fa-plus-circle btn-icon-cl gc-c1-cl';
    }
    if (PatternForm == 'Search') {
        Icon = 'fas fa-eye btn-icon-cl gc-c1-cl';
    }
    if (PatternForm == 'Child') {
        Icon = 'fas fa-anchor btn-icon-cl gc-c1-cl';
    }
    if (PatternForm == 'Display') {
        Icon = 'fas fa-eye btn-icon-cl gc-c1-cl';
    }
    return Icon;
}


function ElementIconMarginFromPatternFormGet(PatternForm) {

    var Icon = '';

    if (PatternForm == 'Edit') {
        Icon = 'fas fa-edit btn-icon-cl gc-c1-cl';
    }
    if (PatternForm == 'Add') {
        Icon = 'fas fa-plus-circle btn-icon-cl gc-c1-cl';
    }
    if (PatternForm == 'Search') {
        Icon = 'fas fa-eye btn-icon-cl gc-c1-cl';
    }
    if (PatternForm == 'Child') {
        Icon = 'fas fa-anchor btn-icon-cl gc-c1-cl';
    }
    if (PatternForm == 'Display') {
        Icon = 'fas fa-eye btn-icon-cl gc-c1-cl';
    }
    return Icon;
}

function DataTableModalFormBtnGet(RowId, Pattern, PatternForm, Icon, Label) {
    var OnClick = ModalFormOnClickGet(Pattern, PatternForm, RowId);
    //var FormElement = DataTableFormBtnGet(Pattern, PatternForm, Label, OnClick, Icon);
    var FormElement = DataTableFormBtnIdGet(Pattern, PatternForm, RowId, Label, OnClick, Icon);
    return FormElement;
}

function ActionBtnSpin(ActionBtnId) {
    ActionBtnIconSet(ActionBtnId, 'fa fa-spinner fa-spin btn-icon-cl gc-c1-cl')
}

function ActionSpin(ActionBtnId, IsMargin) {
    if (IsMargin) {
        ActionBtnMarginSpin(ActionBtnId);
    }
    else {
        ActionBtnSpin(ActionBtnId);
    }
}

function ActionBtnMarginSpin(ActionBtnId) {
    ActionBtnIconSet(ActionBtnId, 'fa fa-spinner fa-spin btn-icon-m-cl gc-c1-cl')
}

function DataTableActionBtnSpin(ActionBtnId) {
    DataTableActionBtnIconSet(ActionBtnId, 'fa fa-spinner fa-spin btn-icon-cl gc-c1-cl')
}

function ActionBtnSet(ActionBtnId, Icon, IsMargin) {
    if (IsMargin) {
        ActionBtnIconMarginSet(ActionBtnId, Icon);
    }
    else {
        ActionBtnIconSet(ActionBtnId, Icon);
    }
}

function ActionBtnIconSet(ActionBtnId, Icon) {
    $('#' + ActionBtnId).find('span').attr('class', Icon + ' btn-icon-cl gc-c1-cl');
}

function ActionBtnIconMarginSet(ActionBtnId, Icon) {
    $('#' + ActionBtnId).find('span').attr('class', Icon + ' btn-icon-m-cl gc-c1-cl');
}

function ElementIconMarginSet(ActionBtnId, Icon) {
    $('#' + ActionBtnId).find('span').attr('class', Icon + ' btn-icon-m-cl gc-c1-cl');
}

function DataTableActionBtnIconSet(ActionBtnId, Icon) {
    $('#' + ActionBtnId).find('span').attr('class', Icon + ' btn-icon-cl gc-c1-cl');
}

function ModalActionBtnEditGet(Pattern, RowId, FormIndex) {
    var Pattern = Pattern + 'Edit';
    var Label = 'Enregistrer';
    var Icon = 'far fa-save';
    var OnClick = Pattern + '(' + RowId + ', ' + FormIndex + ')';
    ModalActionBtnGet(Pattern, Label, Icon, OnClick);
}

function ModalActionBtnNotifyGet(Pattern, RowId, FormIndex) {
    var PatternFull = Pattern + 'Notify';
    var Label = 'Enregistrer et Notifier';
    var Icon = 'fas fa-paper-plane';
    var OnClick = PatternFull + '(' + RowId + ', ' + FormIndex + ')';
    ModalActionBtnGet(PatternFull, Label, Icon, OnClick);
}

function ModalActionBtnAddGet(Pattern, RowId, FormIndex) {
    var Pattern = Pattern + 'Add';
    var Label = 'Ajouter';
    var Icon = 'fas fa-plus-circle';
    var OnClick = Pattern + '(' + RowId + ', ' + FormIndex + ')';
    ModalActionBtnGet(Pattern, Label, Icon, OnClick);
}

function ModalActionBtnCommentGet(Pattern, RowId, FormIndex) {
    var Pattern = Pattern + 'Comment';
    var Label = 'Enregistrer';
    var Icon = 'far fa-save';
    var OnClick = Pattern + '(' + RowId + ', ' + FormIndex + ')';
    ModalActionBtnGet(Pattern, Label, Icon, OnClick);
}

function ModalActionButtonGet(Pattern, PatternForm, RowId, FormIndex) {
    var Pattern = Pattern + PatternForm;

    var Label = 'Enregistrer';
    var Icon = 'far fa-save';

    if (PatternForm == 'Add') {
        Label = 'Ajouter';
        Icon = 'fas fa-plus-circle';
    }

    var OnClick = Pattern + '(' + RowId + ', ' + FormIndex + ')';
    ModalActionBtnGet(Pattern, Label, Icon, OnClick);
}

function ModalBtnEditGet(Pattern, RowId, FormIndex) {
    var PatternForm = Pattern + 'Edit';
    var Label = 'Enregistrer';
    var Icon = 'far fa-save';
    var OnClick = PatternForm + '(' + RowId + ', ' + FormIndex + ', \'' + Pattern + '\')';
    ModalActionBtnGet(PatternForm, Label, Icon, OnClick);
}

function ModalActionBtnGet(Pattern, Label, Icon, OnClick) {
    ShowReport(Pattern + 'ActionContainerId');
    document.getElementById(Pattern + 'ActionBtnId').setAttribute("onClick", OnClick);
    document.getElementById(Pattern + 'ActionIconId').setAttribute('Class', Icon + ' btn-icon-m-cl gc-c1-cl');
    $('#' + Pattern + 'ActionTextId').text(Label);
}



function ParamActionBtnIdDisplayGet() {
    return 'ParamActionBtnId0';
}

function ParamActionBtnIdAddGet() {
    return 'ParamActionBtnId1';
}

function ParamActionBtnIdFillGet() {
    return 'ParamActionBtnId2';
}

function ParamActionBtnIdUploadGet() {
    return 'ParamActionBtnId2';
}

function ParamActionBtnIdAllDeleteGet() {
    return 'ParamActionBtnId3';
}

function ParamActionBtnIdAllValidateGet() {
    return 'ParamActionBtnId4';
}

function ParamActionIconDisplayGet() {
    return 'fas fa-eye btn-icon-m-cl gc-c1-cl';
}


function ParamActionIconAddGet() {
    return 'fas fa-plus-circle btn-icon-m-cl gc-c1-cl';
}
function ParamActionIconFillGet() {
    return 'fas fa-edit btn-icon-m-cl gc-c1-cl';
}
function ParamActionIconImportGet() {
    return 'fas fa-upload btn-icon-m-cl gc-c1-cl';
}
function ParamActionIconUploadGet() {
    return 'fas fa-upload btn-icon-m-cl gc-c1-cl';
}

function ParamActionIconAllDeleteGet() {
    return 'far fa-trash-alt btn-icon-m-cl gc-c1-cl';
}

function ParamActionIconAllValidateGet() {
    return 'fas fa-check btn-icon-m-cl gc-c1-cl';
}

function ParamTitleSet(Title) {
    $('#ParamTitleId').text(Title);
}

function ElementOnChangeSet(ElementId, OnChange) {
    document.getElementById(ElementId).setAttribute("onChange", OnChange);
}

function ElementOnClickSet(ElementId, onClick) {
    document.getElementById(ElementId).setAttribute("onClick", onClick);
}

function ModalFormOnClickGet(Pattern, PatternForm, RowId) {
    return Pattern + 'FormLoad(\'' + Pattern + '\',\'' + PatternForm + '\', ' + RowId + ')';
}

function ParamActionBtnAddGet(BtnIndex, Pattern) {
    var Label = 'Ajouter';
    var Icon = 'fas fa-plus-circle';
    var OnClick = Pattern + 'Add()';
    ParamActionBtnGet(BtnIndex, Label, Icon, OnClick);
}

function ParamNameLabelNameSet(Name) {
    $('#NameIdLabel').text(Name);
}


function ParamActionBtnAllDeleteGet(BtnIndex, Pattern) {
    var Label = 'Tout Supprimer';
    var Icon = 'far fa-trash-alt';
    var OnClick = Pattern + 'AllDelete()';
    ParamActionBtnGet(BtnIndex, Label, Icon, OnClick);
}

function ParamBtnAddGet(BtnIndex, Pattern) {
    var Label = 'Ajouter';
    var Icon = 'fas fa-plus-circle';
    var OnClick = Pattern + 'Add(\'' + Pattern + '\')';
    ParamActionBtnGet(BtnIndex, Label, Icon, OnClick);
}

function ParamActionBtnUploadGet(BtnIndex, Pattern) {
    var Label = 'Charger';
    var Icon = 'fas fa-upload';
    var OnClick = Pattern + 'Upload()';
    ParamActionBtnGet(BtnIndex, Label, Icon, OnClick);
}

function ParamActionBtnDisplayGet(BtnIndex, Pattern) {
    var Label = 'Afficher';
    var Icon = 'fas fa-eye';
    var OnClick = Pattern + 'Display()';
    ParamActionBtnGet(BtnIndex, Label, Icon, OnClick);
}

function ParamActionBtnAllValidateGet(BtnIndex, Pattern) {
    var Label = 'Tout valider';
    var Icon = 'fas fa-check';
    var OnClick = Pattern + 'AllValidate()';
    ParamActionBtnGet(BtnIndex, Label, Icon, OnClick);
}

function ParamBtnDisplayGet(BtnIndex, Pattern) {
    var Label = 'Afficher';
    var Icon = 'fas fa-eye';
    var OnClick = Pattern + 'Display(\'' + Pattern + '\')';
    ParamActionBtnGet(BtnIndex, Label, Icon, OnClick);
}

function ParamActionBtnGet(BtnIndex, Label, Icon, OnClick) {
    ShowReport('ParamActionContainerId' + BtnIndex);
    document.getElementById('ParamActionBtnId' + BtnIndex).setAttribute("onClick", OnClick);
    document.getElementById('ParamActionIconId' + BtnIndex).setAttribute('Class', Icon + ' btn-icon-m-cl gc-c1-cl');
    $('#ParamActionTextId' + BtnIndex).text(Label);
}

function ParamActionFormBtnGet(BtnIndex, Label, Icon, OnClick) {
    ShowReport('ParamActionFormContainerId' + BtnIndex);
    document.getElementById('ParamActionFormBtnId' + BtnIndex).setAttribute("onClick", OnClick);
    document.getElementById('ParamActionFormIconId' + BtnIndex).setAttribute('Class', Icon + ' btn-icon-m-cl gc-c1-cl');
    $('#ParamActionFormTextId' + BtnIndex).text(Label);
}

function LeftMenuHide() {
    //document.getElementsByClassName('page-wrapper toggled').item(0).setAttribute('class', 'page-wrapper chiller-theme');
    //ShowReport('show-sidebar');
}


function SecRoleNameGet() {
    var RoleName = '';
    $.ajax({
        url: "/Cert/RoleNameGet",
        method: "POST",
        contentType: "application/json; charset=utf-8",
        async: true,
        success: function (data) {
            RoleName = data;
        },
        error: function (request, status, error) {
            RoleName = '';
        }
    });

    return RoleName;
}


function RoleNameSet() {
    var RoleName = SecRoleNameGet();
    $.ajax({
        url: "/Cert/RoleNameGet",
        method: "POST",
        contentType: "application/json; charset=utf-8",
        async: true,
        success: function (data) {
            document.getElementById('RoleNameId').value = data;
        },
        error: function (request, status, error) {
            document.getElementById('RoleNameId').value = data;
        }
    });
    return RoleName;
}


function ContentSecGet(data,
    RoleName0,
    RoleName1,
    RoleName2,
    RoleName3,
    RoleName4,
    RoleName5,
    RoleName6,
    RoleName7,
    RoleName8,
    RoleName9) {

    var RoleName = GetElementValue('RoleNameId');

    if (RoleName == RoleName0 ||
        RoleName == RoleName1 ||
        RoleName == RoleName2 ||
        RoleName == RoleName3 ||
        RoleName == RoleName4 ||
        RoleName == RoleName5 ||
        RoleName == RoleName6 ||
        RoleName == RoleName7 ||
        RoleName == RoleName8 ||
        RoleName == RoleName9) {
        return data;
    }
    else {
        return '';
    }
}

function DataTableEvoRalativeGet(Value, ValueOld) {
    if (ValueOld.toFixed(2) != 0) {
        var evo = ((Value - ValueOld) / ValueOld) * 100;
        return DataTableFormatRateGet(evo.toFixed(2));
    }
    else {
        return 'NA';
    }
}

function DataTablePercentageGet(Value, Total, Decimal) {
    if (Total.toFixed(Decimal) != 0) {
        var evo = (Value / Total) * 100;
        return evo.toFixed(Decimal) + '%';
    }
    else {
        return '∞';
    }
}

function DataTablePercentageThresholdGet(Value, Total, Decimal, Threshold) {
    if (Total.toFixed(Decimal) != 0) {
        var evo = (Value / Total) * 100;

        if (evo.toFixed(Decimal) > Threshold || evo.toFixed(Decimal) < - Threshold) {
            return '<span  class="badge-alert badge-danger" >' + numFormat(evo.toFixed(Decimal)) + ' %</span>';
        }
        else {
            return '<span  class="badge-alert badge-secondary" >' + numFormat(evo.toFixed(Decimal)) + ' %</span>';
        }
    }
    else {
        return '∞';
    }
}

function DataTablePercentageTwoThresholdsGet(Value, Total, Decimal, Threshold1, Threshold2) {
    if (Total.toFixed(Decimal) != 0) {
        var evo = (Value / Total) * 100;

        if (Value == 0) {
            return '0 %';
        }
        else {
            if (evo.toFixed(Decimal) > Threshold2 || evo.toFixed(Decimal) < - Threshold2) {
                return '<span  class="badge-alert badge-danger" >' + numFormat(evo.toFixed(Decimal)) + ' %</span>';
            }
            else {
                if (evo.toFixed(Decimal) > Threshold1 || evo.toFixed(Decimal) < - Threshold1) {
                    return '<span  class="badge-alert badge-warning" >' + numFormat(evo.toFixed(Decimal)) + ' %</span>';
                }
                else {
                    return '<span  class="badge-alert badge-secondary" >' + numFormat(evo.toFixed(Decimal)) + ' %</span>';
                }
            }
        }
    }
    else {
        return '0 %';
    }
}

function DataTableProgressionTwoThresholdsGet(Value, ValueRef, Decimal, Threshold1, Threshold2) {
    if (ValueRef.toFixed(Decimal) != 0) {
        var evo = ((Value - ValueRef) / ValueRef) * 100;

        if (Value == 0) {
            return '0 %';
        }
        else {
            if (evo.toFixed(Decimal) > Threshold2 || evo.toFixed(Decimal) < - Threshold2) {
                return '<span  class="badge-alert badge-danger" >' + numFormat(evo.toFixed(Decimal)) + ' %</span>';
            }
            else {
                if (evo.toFixed(Decimal) > Threshold1 || evo.toFixed(Decimal) < - Threshold1) {
                    return '<span  class="badge-alert badge-warning" >' + numFormat(evo.toFixed(Decimal)) + ' %</span>';
                }
                else {
                    return '<span  class="badge-alert badge-secondary" >' + numFormat(evo.toFixed(Decimal)) + ' %</span>';
                }
            }
        }
    }
    else {
        return '∞';
    }
}

function DataTableIntValueTwoThresholdsGet(Value, ValueRef, Decimal, MultipleNumber, Threshold1, Threshold2) {
    if (ValueRef.toFixed(Decimal) != 0) {
        var evo = ((Value - ValueRef) / ValueRef) * 100;

        if (Value == 0) {
            return '0';
        }
        else {
            if (evo.toFixed(Decimal) > Threshold2 || evo.toFixed(Decimal) < - Threshold2) {
                return '<span  class="badge-alert badge-danger" >' + numShortFormat(Value.toFixed(Decimal) / MultipleNumber) + '</span>';
            }
            else {
                if (evo.toFixed(Decimal) > Threshold1 || evo.toFixed(Decimal) < - Threshold1) {
                    return '<span  class="badge-alert badge-warning" >' + numShortFormat(Value.toFixed(Decimal) / MultipleNumber) + '</span>';
                }
                else {
                    return numShortFormat(Value.toFixed(Decimal) / MultipleNumber);
                }
            }
        }
    }
    else {
        return '∞';
    }
}

function DataTableIntValueTwoThresholdsOnClickGet(Value, ValueRef, Decimal, MultipleNumber, Threshold1, Threshold2, OnClick) {
    if (ValueRef.toFixed(Decimal) != 0) {
        var evo = ((Value - ValueRef) / ValueRef) * 100;

        if (Value == 0) {
            return '<span onclick= ' + OnClick + '>0</span>';
        }
        else {
            if (evo.toFixed(Decimal) > Threshold2) {
                return '<span  class="badge-alert badge-success" onclick= ' + OnClick + '>' + numShortFormat(Value.toFixed(Decimal) / MultipleNumber) + '</span>';
            }
            else {
                if (evo.toFixed(Decimal) < - Threshold2) {
                    return '<span  class="badge-alert badge-danger" onclick= ' + OnClick + '>' + numShortFormat(Value.toFixed(Decimal) / MultipleNumber) + '</span>';
                }
                else {
                    if (evo.toFixed(Decimal) > Threshold1) {
                        return '<span  class="badge-alert badge-info" onclick= ' + OnClick + '>' + numShortFormat(Value.toFixed(Decimal) / MultipleNumber) + '</span>';
                    }
                    else {
                        if (evo.toFixed(Decimal) < - Threshold1) {
                            return '<span  class="badge-alert badge-warning" onclick= ' + OnClick + '>' + numShortFormat(Value.toFixed(Decimal) / MultipleNumber) + '</span>';
                        }
                        else {
                            return '<span onclick= ' + OnClick + '>' + numShortFormat(Value.toFixed(Decimal) / MultipleNumber) + '</span>';
                        }
                    }
                }
            }
        }
    }
    else {
        return '<span onclick= ' + OnClick + '>∞</span>';
    }
}




function DataTableRateGet(Value, Total, Decimal) {
    if (Total != 0) {
        var rate = (Value / Total) * 100;

        if (Value == 0) {
            return 0;
        }
        else {
            return rate.toFixed(Decimal);
        }
    }
    else {
        return 100;
    }
}

function DataTableRateTwoThresholdsGet(Value, Total, Decimal, Threshold1, Threshold2) {
    if (Total.toFixed(Decimal) != 0) {
        var rate = (Value / Total) * 100;

        if (Value == 0) {
            return '0 %';
        }
        else {
            if (rate.toFixed(Decimal) < Threshold1) {
                return '<span  class="badge-alert badge-danger" >' + numFormat(rate.toFixed(Decimal)) + ' %</span>';
            }
            else {
                if (rate.toFixed(Decimal) >= Threshold1 && rate.toFixed(Decimal) < Threshold2) {
                    return '<span  class="badge-alert badge-info" >' + numFormat(rate.toFixed(Decimal)) + ' %</span>';
                }
                else {
                    return '<span  class="badge-alert badge-success" >' + numFormat(rate.toFixed(Decimal)) + ' %</span>';
                }
            }
        }
    }
    else {
        return '∞';
    }
}

function DataTableRateTwoThresholdsWithColorsGet(Value, Total, Decimal, Threshold1, Threshold2, BackGroundColor0, BackGroundColor1, BackGroundColor2) {
    if (Total.toFixed(Decimal) != 0) {
        var rate = (Value / Total) * 100;

        if (Value == 0) {
            return '0 %';
        }
        else {
            if (rate.toFixed(Decimal) < Threshold1) {
                return '<span  class="badge-alert badge-danger" style="background-color: ' + BackGroundColor0 + ';" >' + numFormat(rate.toFixed(Decimal)) + ' %</span>';
            }
            else {
                if (rate.toFixed(Decimal) >= Threshold1 && rate.toFixed(Decimal) < Threshold2) {
                    return '<span  class="badge-alert badge-info" style="background-color: ' + BackGroundColor1 + ';" >' + numFormat(rate.toFixed(Decimal)) + ' %</span>';
                }
                else {
                    return '<span  class="badge-alert badge-success" style="background-color: ' + BackGroundColor2 + ';" >' + numFormat(rate.toFixed(Decimal)) + ' %</span>';
                }
            }
        }
    }
    else {
        return '∞';
    }
}

function JsDateValueFromDateString(DateString) {
    return new String(DateString).substr(0, 2) + '/' + new String(DateString).substr(2, 2) + '/' + new String(DateString).substr(4, 4);
}

//function ExportRepoCert(FileType, DataName, Portion) {
//    var TimeId = GetElementValue('TimeId');
//    var DateStringStart = GetDateStringFromDatePicker('DateStartId');
//    var DateStringEnd = GetDateStringFromDatePicker('DateEndId');

//    var CexId = '';
//    var BagContainerId = '';
//    var StationNumber = '';

//    if (DataName == 'TraficOd') {
//        CexId = GetElementValue('CexId');
//        BagContainerId = GetElementValue('BagContainerId');
//        StationNumber = GetElementValue('StationNumberId');
//    }

//    var ExportLink = '/Export/ExportRepoCert?' +
//        'FileType=' + FileType +
//        '&DataName=' + DataName +
//        '&Portion=' + Portion +
//        '&TimeId=' + TimeId +
//        '&CexId=' + CexId +
//        '&BagContainerId=' + BagContainerId +
//        '&StationNumber=' + StationNumber +
//        '&DateStringStart=' + DateStringStart +
//        '&DateStringEnd=' + DateStringEnd;

//    NavigateTo(ExportLink, true);
//}


function DataTableGapThresholdGet(Total, TotalRef, Threshold, ThresholdMiliem) {
    if (TotalRef.toFixed(2) != 0 && TotalRef != 0) {
        var evo = ((Total - TotalRef) / TotalRef) * ThresholdMiliem;
        if (evo.toFixed(2) > Threshold || evo.toFixed(2) < - Threshold) {
            return '<span  class="badge-alert badge-danger" >' + numFormat(evo.toFixed(2)) + ' %</span>';
        }
        else {
            return '<span class="badge-alert badge-success" >' + numFormat(evo.toFixed(2)) + ' %</span>';
        }
    }
    else {
        return 'NA';
    }
}

function DataTableRateThresholdLowGet(Total, TotalRef, Threshold, ThresholdMiliem) {
    if (TotalRef.toFixed(2) != 0) {
        var rate = (Total / TotalRef) * ThresholdMiliem;
        if (rate.toFixed(2) <= Threshold) {
            return '<span  class="badge-alert badge-danger" >' + numFormat(rate.toFixed(2)) + ' %</span>';
        }
        else {
            return '<span class="badge-alert badge-success" >' + numFormat(rate.toFixed(2)) + ' %</span>';
        }
    }
    else {
        return 'NA';
    }
}

function DataTableRateThresholdHightGet(Total, TotalRef, Threshold, ThresholdMiliem) {
    if (TotalRef.toFixed(2) != 0) {
        var rate = (Total / TotalRef) * ThresholdMiliem;
        if (rate.toFixed(2) >= Threshold) {
            return '<span  class="badge-alert badge-danger" >' + numFormat(rate.toFixed(2)) + ' %</span>';
        }
        else {
            return '<span class="badge-alert badge-success" >' + numFormat(rate.toFixed(2)) + ' %</span>';
        }
    }
    else {
        return 'NA';
    }
}

function DataTableTlpGet(Total, Tlp) {
    if (Total.toFixed(2) != 0) {
        var rate = (Tlp / Total) * 100;
        if (rate.toFixed(2) > 0) {
            return '<span  class="badge-alert badge-warning" >' + numFormat(rate.toFixed(2)) + ' %</span>';
        }
        else {
            return '';
        }
    }
    else {
        return '';
    }
}

function DataTableAvgThresholdGet(Total, TotalRef, Threshold, ThresholdMiliem) {
    //if (TotalRef.toFixed(2) != 0) {
    var evo = ((Total - TotalRef) / TotalRef) * ThresholdMiliem;
    if (evo.toFixed(2) > Threshold || evo.toFixed(2) < - Threshold) {
        return '<span  class="badge-alert badge-danger" >' + numShortFormat(Total) + '</span>';
    }
    else {
        return '<span class="badge-alert badge-success" >' + numShortFormat(Total) + '</span>';
    }
    //}
    //else {
    //    return numShortFormat(Total);
    //}
}

function CertFilePlanDelete(CertFilePlanId) {

    var ActionBtnId = 'CertFilePlanDeleteBtnId' + CertFilePlanId;
    var Icon = 'far fa-trash-alt';

    var obj = {};
    obj.CertFilePlanId = CertFilePlanId;

    $('#' + ActionBtnId).find('span').attr('class', 'fa fa-spinner fa-spin');

    $.ajax({
        url: "/Cert/CertFilePlanDelete",
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

function DateValueDefaultFirstDaySet(Id) {
    var d = new Date();
    d.setDate(d.getDate());
    d.setTime(d.getTime() - d.getHours() * 3600 * 1000 - d.getMinutes() * 60 * 1000);
    var year = d.getFullYear();
    var month = d.getMonth() + 1;
    document.getElementById(Id).value = year + '-' + GetDigits(month, 2) + '-' + '01';
}

function MonthValueFirstSet(Id) {
    var d = new Date();
    d.setDate(d.getDate());
    d.setTime(d.getTime() - d.getHours() * 3600 * 1000 - d.getMinutes() * 60 * 1000);
    var year = d.getFullYear();
    var month = d.getMonth() + 1;
    document.getElementById(Id).value = year + '-01';
}

function MonthValueLastSet(Id) {
    var d = new Date();
    d.setDate(d.getDate());
    d.setTime(d.getTime() - d.getHours() * 3600 * 1000 - d.getMinutes() * 60 * 1000);
    var year = d.getFullYear();
    var month = d.getMonth() + 1;
    document.getElementById(Id).value = year + '-' + GetDigits(month, 2);
}

//TopBar
$('#nb-user-id')
    .on('mouseover', function () {
        ShowReport('nb-acc-report-id');
    });
$('#nb-acc-report-id')
    .on('mouseover', function () {
        ShowReport('nb-acc-report-id');
    });
$('#nb-acc-report-id')
    .on('mouseout', function () {
        HideReport('nb-acc-report-id');
    });







$(document).ready(function () {


    var readURL = function (input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('.avatar').attr('src', e.target.result);
            }

            reader.readAsDataURL(input.files[0]);
        }
    }


    $(".file-upload").on('change', function () {
        readURL(this);
    });
});




function ParamBillingIdGet() {
    var TaskId = new String($("#TaskId").val());
    $("#BillingId").empty();
    $.get("/Param/ParamBillingIdGet", { TaskId: TaskId }, function (data) {
        $.each(data, function (index, row) {
            $("#BillingId").append("<option value='" + row.MpId + "'>" + row.MpId + ' - ' + row.MpName + "</option>")
        });
    });
    ParamResetDropDownList('BillingId');

    ShowReport('BillingId' + 'Parent');
}

function ParamFlowsGet() {
    $("#FlowId").empty();
    $.get("/Param/ParamFlowsGet", function (data) {
        $.each(data, function (index, row) {
            $("#FlowId").append("<option value='" + row.FlowId + "'>" + row.FlowId + ' - ' + row.FlowName + "</option>")
        });
    });
    ParamResetDropDownList('FlowId');
    ShowReport('FlowCategoryId' + 'Parent');
}

function ParamFlowCategoriesGet() {
    $("#FlowCategoryId").empty();
    var FlowId = GetElementValue('FlowId');
    $.get("/Param/ParamFlowCategoriesGet", { FlowId: FlowId }, function (data) {
        $.each(data, function (index, row) {
            $("#FlowCategoryId").append("<option value='" + row.FlowCategoryId + "'>" + row.FlowCategoryId + '-' + row.CategoryName + "</option>")
        });
    });
    ParamResetDropDownList('FlowCategoryId');
    ShowReport('FlowCategoryId' + 'Parent');
}


function TextAdjust(data) {
    return new String(data).replace('\'', '\\\'');
}


function DateTimeInputFormatGet() {
    var TimeId = GetElementValue('TimeId');

    if (TimeId == '00')//Hour
    {
        ShowReport('DateStartId' + 'Parent');
        ShowReport('DateEndId' + 'Parent');
        HideReport('MonthStartId' + 'Parent');
        HideReport('MonthEndId' + 'Parent');
    }
    if (TimeId == '01' || TimeId == '06')//Day, Cumul
    {
        ShowReport('DateStartId' + 'Parent');
        ShowReport('DateEndId' + 'Parent');
        HideReport('MonthStartId' + 'Parent');
        HideReport('MonthEndId' + 'Parent');
    }
    if (TimeId == '02')//Month
    {
        HideReport('DateStartId' + 'Parent');
        HideReport('DateEndId' + 'Parent');
        ShowReport('MonthStartId' + 'Parent');
        ShowReport('MonthEndId' + 'Parent');
    }
}

function DataTableImageGet(ImagePath) {
    //return ImageName = "I0108S0920210301112446.JPG";
    //return 'I' + row['NetworkId'] + row['StationNumber'] + row['LaneName'] + row['Year'] + GetDigits(row['Month'], 2) + GetDigits(row['Day'], 2) +
    //    GetDigits(row['Hour'], 2) + GetDigits(row['Minute'], 2) + GetDigits(row['Second'], 2) + '.JPG';

    //return '<img class="dt-img-cl" src="http://localhost:1010/Lanes/' + row['IpAddress'] + '/' + row['ImageName'] + '" />';

    return '<a href="' + ImagePath + '" target="_blank">' +
        '<img class="dt-img-cl" src="' + ImagePath + '" />' +
        '</a>';
}

function TextSpace(text) {
    return new String(text).replace('\'', ' ').replace('\'', ' ').replace('\'', ' ').replace('\'', ' ')
        .replace('"', ' ').replace('"', ' ').replace('"', ' ').replace('"', ' ')
        .replace(';', ' ').replace(';', ' ').replace(';', ' ').replace(';', ' ')
        .replace(':', ' ')
        .replace(/(\r\n|\n|\r)/gm, " ").replace(/(\r\n|\n|\r)/gm, " ");
}

function ParamOnChangeGet(ElementId, OnChange) {
    document.getElementById(ElementId).setAttribute("onChange", OnChange);
}

function DataTableBooleanFalseAlertGet(data) {
    if (data) {
        return '<button style="background-color: Transparent;border: none;"><span class="fas fa-check" style="color:#28a745"></span></button>';
    }
    else {
        return '<button style="background-color: Transparent;border: none;"><span class="fas fa-exclamation-triangle" style="color:red"></span></button>';
    }
}

function ElementIfExistsCheck(ElementId) {
    if (document.getElementById(ElementId)) {
        return true;
    } else {
        return false;
    }
}

function DataTableTotalIntGet(api, intVal, ColumnIndex) {
    var Total = api.column(ColumnIndex).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);
    $(api.column(ColumnIndex).footer()).html(numShortFormat(Total));
}

function DataTableTotalDoubleGet(api, intVal, ColumnIndex) {
    var Total = api.column(ColumnIndex).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);
    $(api.column(ColumnIndex).footer()).html(numFormat(Total));
}

function DataTableTotalPercentageGet(api, intVal, ColumnIndexN, ColumnIndexD, ColumnIndex) {
    var TotalN = api.column(ColumnIndexN).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);
    var TotalD = api.column(ColumnIndexD).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);
    //$(api.column(ColumnIndex).footer()).html(numFormatOnDecimal(((TotalN * 100) / TotalD)) + ' %');

    $(api.column(ColumnIndex).footer()).html((TotalN * 100 / TotalD).toFixed(2) + ' %')
    //return (TotalN * 100 / TotalD).toFixed(2) + ' %';
}

function DataTableColumnTotalIntGet(api, intVal, ColumnIndex) {
    return numShortFormat(api.column(ColumnIndex).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0));
}

function DataTableColumnTotalDoubleGet(api, intVal, ColumnIndex) {
    return numFormat(api.column(ColumnIndex).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0));
}

function DataTableColumnTotalGet(api, intVal, ColumnIndex) {
    return api.column(ColumnIndex).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);
}

function DataTableTotalDoubleReturn(api, intVal, ColumnIndex) {
    return api.column(ColumnIndex).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);
}

function DataTableColumnPercentageGet(api, intVal, ColumnIndexN, ColumnIndexD) {
    var TotalN = api.column(ColumnIndexN).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);
    var TotalD = api.column(ColumnIndexD).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);
    return (TotalN * 100 / TotalD).toFixed(2);
}

let map;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
    });
}

window.initMap = initMap;



$('#tb-tour-id')
    .on('click', function () {
        var selectedValues = $('#ProjectId').val();
        alert('Selected values: ' + selectedValues);
    });

//account or user
$('#tb-user-id')
    .on('click', function () {
        ShowReport('tb-acc-id');
        HideReport('tb-noti-report-id');
        HideReport('tb-hist-report-id');
        HideReport('tb-conn-report-id');
        HideReport('tb-fix-report-id');
        HideReport('tb-log-report-id');
        HideReport('tb-chat-report-id');
    });
$('#tb-acc-id')
    .on('mouseover', function () {
        ShowReport('tb-acc-id');
    });
$('#tb-acc-id')
    .on('mouseout', function () {
        HideReport('tb-acc-id');
    });

//Notification
$('#tb-noti-id')
    .on('click', function () {
        HideReport('tb-acc-id');
        ShowReport('tb-noti-report-id');
        HideReport('tb-hist-report-id');
        HideReport('tb-conn-report-id');
        HideReport('tb-fix-report-id');
        HideReport('tb-log-report-id');
        HideReport('tb-chat-report-id');

        TopBarNotifGet();
    });

//History
$('#tb-hist-id')
    .on('click', function () {
        HideReport('tb-acc-id');
        HideReport('tb-noti-report-id');
        //ShowReport('tb-hist-report-id');
        HideReport('tb-conn-report-id');
        HideReport('tb-fix-report-id');
        HideReport('tb-log-report-id');
        HideReport('tb-chat-report-id');

        //TopBarHistoryGet();
        TopBarRecycle();
    });

//Connected
$('#tb-conn-id')
    .on('click', function () {
        HideReport('tb-acc-id');
        HideReport('tb-noti-report-id');
        HideReport('tb-hist-report-id');
        ShowReport('tb-conn-report-id');
        HideReport('tb-fix-report-id');
        HideReport('tb-log-report-id');
        HideReport('tb-chat-report-id');

        TopBarConnGet();
    });

//Fix
$('#tb-fix-id')
    .on('click', function () {
        HideReport('tb-acc-id');
        HideReport('tb-noti-report-id');
        HideReport('tb-hist-report-id');
        HideReport('tb-conn-report-id');
        ShowReport('tb-fix-report-id');
        HideReport('tb-log-report-id');
        HideReport('tb-chat-report-id');

        document.getElementById('FixMessageId').value = '';
        document.getElementById('FixFileId').value = null;

        //Fill
        //HtmlDropDownListNameOnlyFill('ModuleIdFix', '0', '/Collab/CollabModulesGet', 'ModuleId', 'ModuleName');
        //HtmlDropDownListWithInputNameOnlyFill('PluginIdFix', 0, '/Collab/CollabPluginsGet', 'PluginId', 'PluginName', '0');
        //HtmlDropDownListNameOnlyFill('UpdateStatusIdFix', '0', '/Home/HomeUpdateGetUpdateStatus', 'UpdateStatusId', 'UpdateStatusName');
        //HtmlDropDownListNameOnlyFill('HandledByIdFix', '0', '/Param/ParamUsersTollAdminGet', 'UserId', 'FullName');

        TopBarFixDisplay();

        ElementDropDownListReset('UserIdFix');
    });

//Fix
$('#tb-log-id')
    .on('click', function () {
        HideReport('tb-acc-id');
        HideReport('tb-noti-report-id');
        HideReport('tb-hist-report-id');
        HideReport('tb-conn-report-id');
        HideReport('tb-fix-report-id');
        ShowReport('tb-log-report-id');
        HideReport('tb-chat-report-id');

        TopBarLogDisplay();
    });

//common
//$('#SideBarWrapper')
//    .on('click', function () {
//        HideReport('tb-acc-id');
//        HideReport('tb-noti-report-id');
//        HideReport('tb-hist-report-id');
//        HideReport('tb-conn-report-id');
//        //HideReport('tb-fix-report-id');
//        HideReport('tb-log-report-id');
//        HideReport('tb-chat-report-id');
//    });

//Chat
$('#tb-chat-id')
    .on('click', function () {
        HideReport('tb-acc-id');
        HideReport('tb-noti-report-id');
        HideReport('tb-hist-report-id');
        HideReport('tb-conn-report-id');
        HideReport('tb-fix-report-id');
        HideReport('tb-log-report-id');
        ShowReport('tb-chat-report-id');

        TopBarChatGet();
    });

//var input = document.getElementById("ContChatMessageId");
//document.getElementById("ContChatMessageId").addEventListener("keyup", function (event) {
//    if (event.keyCode === 13) {
//        event.preventDefault();
//        document.getElementById("ContChatMessageSendBtnId").click();
//    }
//});


function TopBarNotiRead(DataId) {
    var obj = {};
    obj.DataId = DataId;
    $.ajax({
        url: "/Common/TopBarNotiRead",
        method: "POST",
        data: JSON.stringify(obj),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            //$('#' + ActionBtnId).find('span').attr('class', 'fas fa-minus-circle btn-icon-cl gc-c1-cl');
            //$('#' + ActionBtnId).find('span').attr('style', 'color:#fe1200');
            //$('#' + ActionBtnId).attr('onclick', '');
            document.getElementById("container-" + DataId).style.backgroundColor = "white";
            TopBarNotiCountGet();
        },
        error: function (request, status, error) {
            //alert('Vous ne disposez pas des autorisations nécessaires pour effectuer cette action');
            //$('#' + ActionBtnId).find('span').attr('class', 'far fa-trash-alt btn-icon-cl gc-c1-cl');
        }
    });
}


function TopBarNotiAllRead() {

    $.ajax({
        url: "/Common/TopBarNotiAllRead",
        method: "POST",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            //$('#' + ActionBtnId).find('span').attr('class', 'fas fa-minus-circle btn-icon-cl gc-c1-cl');
            //$('#' + ActionBtnId).find('span').attr('style', 'color:#fe1200');
            //$('#' + ActionBtnId).attr('onclick', '');
            //document.getElementById("container-" + DataId).style.backgroundColor = "white";
            TopBarNotiGet();
            TopBarNotiCountGet();
        },
        error: function (request, status, error) {
            //alert('Vous ne disposez pas des autorisations nécessaires pour effectuer cette action');
            //$('#' + ActionBtnId).find('span').attr('class', 'far fa-trash-alt btn-icon-cl gc-c1-cl');
        }
    });
}


function TopBarLogAllDelete() {

    $.ajax({
        url: "/Common/TopBarLogAllDelete",
        method: "POST",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            TopBarLogGet();
            TopBarLogCountGet();
        },
        error: function (request, status, error) {
        }
    });
}

function TopBarNotiCountGet() {
    $.ajax({
        url: "/Common/TopBarNotiCountGet",
        method: "POST",
        contentType: "application/json; charset=utf-8",
        async: true,
        dataType: "text",
        success: function (data) {
            $('#tb-noti-count-id').text(data);
            if (data == "0") {
                document.getElementById('tb-noti-count-id').style.backgroundColor = 'white';
            }
            else {
                document.getElementById('tb-noti-count-id').style.backgroundColor = 'red';
            }

        }
    });
}

function TopBarFixCountGet() {
    $.ajax({
        url: "/Common/TopBarFixCountGet",
        method: "POST",
        contentType: "application/json; charset=utf-8",
        async: true,
        dataType: "text",
        success: function (data) {
            $('#tb-fix-count-id').text(data);
            if (data == "0") {
                document.getElementById('tb-fix-count-id').style.backgroundColor = 'white';
            }
            else {
                document.getElementById('tb-fix-count-id').style.backgroundColor = 'orange';
            }

        }
    });
}

function TopBarLogCountGet() {
    $.ajax({
        url: "/Common/TopBarLogCountGet",
        method: "POST",
        contentType: "application/json; charset=utf-8",
        async: true,
        dataType: "text",
        success: function (data) {
            $('#tb-log-count-id').text(data);
            if (data == "0") {
                document.getElementById('tb-log-count-id').style.backgroundColor = 'white';
            }
            else {
                document.getElementById('tb-log-count-id').style.backgroundColor = 'red';
            }

        }
    });
}

function TopBarConnCountGet() {
    $.ajax({
        url: "/Common/TopBarConnCountGet",
        method: "POST",
        contentType: "application/json; charset=utf-8",
        async: true,
        dataType: "text",
        success: function (data) {
            $('#tb-conn-count-id').text(data);
            if (data == "0") {
                document.getElementById('tb-conn-count-id').style.backgroundColor = 'white';
            }
            else {
                document.getElementById('tb-conn-count-id').style.backgroundColor = 'green';
            }
        }
    });
}


function TopBarFixSearch(ModuleIdFix, PluginIdFix, UpdateStatusIdFix) {

    HideReport('tb-acc-id');
    HideReport('tb-noti-report-id');
    HideReport('tb-hist-report-id');
    HideReport('tb-conn-report-id');
    ShowReport('tb-fix-report-id');
    HideReport('tb-chat-report-id');

    document.getElementById('FixMessageId').value = '';
    document.getElementById('FixFileId').value = null;

    ElementDropDownListSet('ModuleIdFix', ModuleIdFix);
    ElementDropDownListSet('PluginIdFix', PluginIdFix);
    ElementDropDownListSet('UpdateStatusIdFix', UpdateStatusIdFix);

    HideParent('KeywordIdFix');
    HideParent('UserIdFix');
    ElementDropDownListReset('UserIdFix');

    var ActionBtnId = 'tb-fix-id';
    var Icon = 'fas fa-wrench tb-noti-cl gc-c1-cl';
    var IsMargin = false;

    ActionSpin(ActionBtnId, IsMargin);
    TopBarFixGet(ActionBtnId, Icon, IsMargin, ModuleIdFix, PluginIdFix, UpdateStatusIdFix);
}

function TopBarFixReset() {

    HideReport('tb-acc-id');
    HideReport('tb-noti-report-id');
    HideReport('tb-hist-report-id');
    HideReport('tb-conn-report-id');
    ShowReport('tb-fix-report-id');
    HideReport('tb-chat-report-id');

    document.getElementById('FixMessageId').value = '';
    document.getElementById('FixFileId').value = null;

    HideParent('KeywordIdFix');
    HideParent('UserIdFix');
    ElementDropDownListReset('UserIdFix');

    TopBarFixDisplay();
}


function TopBarFixDisplay() {

    var ActionBtnId = 'tb-fix-id';
    var Icon = 'fas fa-wrench tb-noti-cl gc-c1-cl';
    var IsMargin = false;

    ActionSpin(ActionBtnId, IsMargin);

    var ModuleIdFix = ElementDropDownListValueGet('ModuleIdFix');
    var PluginIdFix = ElementDropDownListValueGet('PluginIdFix');
    var UpdateStatusIdFix = ElementDropDownListValueGet('UpdateStatusIdFix');
    var HandledBy = ElementDropDownListValueGet('HandledByIdFix');

    TopBarFixGet(ActionBtnId, Icon, IsMargin, ModuleIdFix, PluginIdFix, UpdateStatusIdFix, HandledBy);
}

function TopBarLogDisplay() {

    var ActionBtnId = 'tb-log-id';
    var Icon = 'fas fa-bug tb-noti-cl gc-c1-cl';
    var IsMargin = false;

    ActionSpin(ActionBtnId, IsMargin);

    TopBarLogGet(ActionBtnId, Icon, IsMargin);
}

function TopBarFixInsightDisplay(ModuleId) {

    var PatternTable = 'TopBarFixHome';
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
            ShowReport(PatternTableReportId);
        },
        "ajax": {
            "url": "/Common/TopBarFixHomeGet",
            "type": "GET",
            "datatype": "json",
            "data": {
                ModuleId: ModuleId
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
            },//0
        ],
        "columnDefs": [
            { "width": "100%", "className": "text-center", "targets": 0 },//FullName 
            {
                "targets": 0, "render": function (data, type, row) {
                    return TopBarFixHomeFormGet(
                        row['HomeUpdateId'],
                        row['UserId'],
                        row['FirstName'],
                        row['LastName'],
                        data,
                        TextSpace(row['UpdateMessage']),
                        row['HomeUpdateEditId'],
                        row['ImageExtension'],
                        row['UpdateStatusId'],
                        row['StatusColor'],
                        TextSpace(row['Response']),
                        row['ModuleName'],
                        row['PluginName'],
                        row['IsAdmin'],
                        row['UpdateStatusName'],
                        row['HandledBy']);
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
        }
    });
}

function TopBarFixGet(ActionBtnId, Icon, IsMargin, ModuleIdFix, PluginIdFix, UpdateStatusIdFix, HandledBy) {

    var Pattern = 'TopBarFix';
    var PatternTableId = Pattern + 'TableId';
    var PatternTableReportId = Pattern + 'TableReportId';

    HideReport(PatternTableReportId);
    $('#' + PatternTableId).DataTable().destroy();
    $('#' + PatternTableId).DataTable({
        "initComplete": function (settings, json) {
            ActionBtnSet(ActionBtnId, Icon, IsMargin);
            ShowReport(PatternTableReportId);
            NotiConnectionIdUpdate('Demandes');

            $.ajax({
                url: "/Cert/RoleNameListGet",
                method: "POST",
                contentType: "application/json; charset=utf-8",
                async: true,
                success: function (data) {
                    //ElementInputSet('FixMessageId', '');
                    if (data.includes('Administrateur') || data.includes('TollAdmin')) {
                        ElementInputSet('KeywordIdFix', '');
                        ShowParent('KeywordIdFix');
                        ShowParent('UserIdFix');
                        ElementOnChangeSet('KeywordIdFix', 'ParamUsersGet()');
                        //ParamUsersGet();
                    }
                }
            });
        },
        "ajax": {
            "url": "/Common/TopBarFixGet",
            "type": "GET",
            "datatype": "json",
            "data": {
                ModuleId: ModuleIdFix,
                PluginId: PluginIdFix,
                UpdateStatusId: UpdateStatusIdFix,
                HandledBy: HandledBy
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
            },//0
        ],
        "columnDefs": [
            { "width": "100%", "className": "text-center", "targets": 0 },//FullName 
            {
                "targets": 0, "render": function (data, type, row) {
                    return TopBarFixFormGet(
                        row['HomeUpdateId'],
                        row['UserId'],
                        row['FirstName'],
                        row['LastName'],
                        data,
                        TextSpace(row['UpdateMessage']),
                        row['HomeUpdateEditId'],
                        row['ImageExtension'],
                        row['UpdateStatusId'],
                        row['StatusColor'],
                        TextSpace(row['Response']),
                        row['ModuleName'],
                        row['PluginName'],
                        row['IsAdmin'],
                        row['UpdateStatusName'],
                        row['HandledBy'],
                        row['ImagesVDFolder']);
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


function TopBarLogGet(ActionBtnId, Icon, IsMargin) {

    var Pattern = 'TopBarLog';
    var PatternTableId = Pattern + 'TableId';
    var PatternTableReportId = Pattern + 'TableReportId';

    HideReport(PatternTableReportId);
    $('#' + PatternTableId).DataTable().destroy();
    $('#' + PatternTableId).DataTable({
        "dom": 'Bfrtip',
        "buttons": {
            buttons: [
                {
                    text: 'Tout supprimer',
                    action: function (e, dt, node, config) {
                        TopBarLogAllDelete();
                    }
                }
            ]
        },
        "initComplete": function (settings, json) {
            ActionBtnSet(ActionBtnId, Icon, IsMargin);
            ShowReport(PatternTableReportId);
            NotiConnectionIdUpdate('Logs');
        },
        "ajax": {
            "url": "/Common/TopBarLogGet",
            "type": "GET",
            "datatype": "json"
        },
        "columns": [
            {
                "mData": function vehicle(data, type, dataToSet) {
                    var diffInSeconds = Math.abs(Date.now() - new Date(data.YearC, data.MonthC - 1, data.DayC, data.HourC, data.MinuteC, data.SecondC)) / 1000;
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
            { "width": "100%", "className": "text-center", "targets": 0 },

            {
                "targets": 0, "render": function (data, type, row) {
                    return TopBarLogFormGet(row['FileName'], data);
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
        }
    });
}

function TopBarFixEdit(HomeUpdateId) {

    var ActionBtnId = 'SendBtnId' + HomeUpdateId;
    var Icon = 'fa fa-spinner fa-spin btn-icon-m-cl gc-c1-cl';
    ActionBtnMarginSpin(ActionBtnId);

    //Get input values
    var UpdateStatusId = GetElementDropDownListValue('UpdateStatusId' + HomeUpdateId);
    var Response = TextSpace(GetElementValue('ResponseId' + HomeUpdateId));

    //var obj = {};

    //obj.HomeUpdateId = HomeUpdateId;
    //obj.UpdateStatusId = UpdateStatusId;
    //obj.Response = Response;

    //$.connection.hub.start({ jsonp: true }).done(function () {
    //    obj.ConnectionId = $.connection.hub.id;
    //    $.ajax({
    //        url: "/Collab/TopBarFixEdit",
    //        method: "POST",
    //        data: JSON.stringify(obj),
    //        contentType: "application/json; charset=utf-8",
    //        dataType: "json",
    //        success: function (data) {
    //            TopBarFixGet();
    //            TopBarNotiCountGet();
    //        }
    //    });
    //});






    var files = $("#FixFileId" + HomeUpdateId).get(0).files;
    var data = new FormData();
    for (var i = 0; i < files.length; i++) {
        data.append("FixFileId", files[i]);
    };

    data.append("HomeUpdateId", HomeUpdateId);
    data.append("UpdateStatusId", UpdateStatusId);
    data.append("Response", Response);

    $.connection.hub.start({ jsonp: true }).done(function () {
        data.append("ConnectionId", $.connection.hub.id);
        $.ajax({
            url: "/Collab/TopBarFixEdit",
            method: "POST",
            dataType: "json",
            contentType: false,
            processData: false,
            data: data,
            success: function (data) {
                ActionBtnIconMarginSet(ActionBtnId, Icon);
                TopBarFixDisplay();
                TopBarNotiCountGet();
            }
        });
    });
}

function TopBarFixRemind(HomeUpdateId) {

    var ActionBtnId = 'SendBtnId' + HomeUpdateId;

    ActionBtnMarginSpin(ActionBtnId);

    var obj = {};

    obj.HomeUpdateId = HomeUpdateId;

    $.connection.hub.start({ jsonp: true }).done(function () {
        obj.ConnectionId = $.connection.hub.id;
        $.ajax({
            url: "/Collab/TopBarFixRemind",
            method: "POST",
            data: JSON.stringify(obj),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {
                TopBarFixDisplay();
            }
        });
    });
}

function CollabPluginsGet(DefaultValue, Index) {
    var ModuleId = GetElementValue('ModuleId' + Index);
    var item = document.getElementById('PluginId' + Index);
    item.options.length = 0;
    var node = document.createElement("option");
    node.value = 0;
    var textnode = document.createTextNode("--");
    node.appendChild(textnode);
    item.appendChild(node);
    $.get("/Collab/CollabPluginsGet", { Input: ModuleId }, function (data) {
        $.each(data, function (index, row) {
            var node = document.createElement("option");
            node.value = row.PluginId;
            var textnode = document.createTextNode(row.PluginId + ' - ' + row.PluginName);
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
        CollabActionDisplay('0');
    }
}


function CollabPluginsXorGet(DefaultValue, Index) {
    var ModuleId = GetElementValue('ModuleId' + Index);
    var item = document.getElementById('PluginId' + Index);
    item.options.length = 0;
    //var node = document.createElement("option");
    //node.value = 0;
    //var textnode = document.createTextNode("--");
    //node.appendChild(textnode);
    //item.appendChild(node);
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
        CollabActionDisplay('0');
    }
}

function TopBarFixAdd() {
    var ActionBtnId = 'ParamActionBtnIdFix';
    var Icon = 'far fa-paper-plane btn-icon-m-cl gc-c1-cl';


    var PluginId = GetElementValue('PluginIdFix');
    var FixMessage = TextSpace(GetElementValue('FixMessageId'));
    var UserId = GetElementDropDownListValue('UserIdFix');
    var HandledBy = GetElementDropDownListValue('HandledByIdFix');

    ActionBtnMarginSpin(ActionBtnId);

    var files = $("#FixFileId").get(0).files;
    var data = new FormData();
    for (var i = 0; i < files.length; i++) {
        data.append("FixFileId", files[i]);
    };

    data.append("PluginId", PluginId);
    data.append("FixMessage", FixMessage);
    data.append("UserId", UserId);
    data.append("HandledBy", HandledBy);

    $.connection.hub.start({ jsonp: true }).done(function () {
        data.append("ConnectionId", $.connection.hub.id);
        $.ajax({
            url: "/Collab/TopBarFixAdd",
            method: "POST",
            dataType: "json",
            contentType: false,
            processData: false,
            data: data,
            success: function (data) {
                ActionBtnIconMarginSet(ActionBtnId, Icon);
                TopBarFixDisplay();
                TopBarNotiCountGet();
            }
        });
    });
}

function TopBarHistFormGet(UserId, FirstName, LastName, Dhm, FeatureName) {

    var FullName = FirstName + ' ' + LastName;
    var online = '';
    //var color = '#fe1200';
    //var color = '#5cb85c';

    var ProfilImgUrl = 'ViewBag.ImagesVDFolder/Profil/' + UserId + '.jpg';
    var NameId = 'NameId' + UserId;
    var FeatureNameId = 'FeatureNameId' + UserId;
    var DhmId = 'DhmId' + UserId;
    return '<div class="friend-drawer friend-drawer--onhover" onclick="ContChatMessagesGet(\'' + UserId + '\')">' + online +
        '<img id="FriendImageToId" class="profile-image" src="' + ProfilImgUrl + '" alt="">' +
        '<div class="text" style="margin-right: 40px" >' +
        '<p id=\"' + NameId + '\" style="text-align: left" >' + FullName + '&nbsp;&nbsp; | &nbsp; ' + FeatureName + '</p>' +

        '<p id=\"' + DhmId + '\" style="text-align: left;font-size: 12px;" >' + Dhm + '</p>' +
        //'<p class="text-muted">Hey, youre xxx!</p>' +
        '</div>' +
        //'<span class="time text-muted small">13:21</span>' +
        '</div>' +
        '<hr>'
}

function TopBarUserNameGet() {
    $.ajax({
        url: "/Common/TopBarUserNameGet",
        method: "POST",
        contentType: "application/json; charset=utf-8",
        async: true,
        dataType: "text",
        success: function (data) {
            $('#tb-user-name-id').text(data);
        }
    });
}

function LogOut() {
    document.getElementById('logoutForm').submit();
}

function UrlOpen(Url) {
    window.open(Url, '_blank');
}

function TopBarChatGet() {

    var KeyWord = GetElementValue('KeyWordId');
    TopBarChatFriendsGet(KeyWord);
}


function TopBarChatFriendsGet(KeyWord) {


    var ActionBtnId = 'tb-chat-id';
    var Icon = 'fas fa-comments tb-noti-cl gc-c1-cl';

    $('#' + ActionBtnId).find('span').attr('class', 'fa fa-spinner fa-spin btn-icon-m-cl gc-c1-cl');

    //Set datatable patterns
    var Pattern = 'ContChatContacts';
    var PatternTableId = Pattern + 'TableId';
    var PatternTableReportId = Pattern + 'TableReportId';

    HideReport(PatternTableReportId);
    $('#' + PatternTableId).DataTable().destroy();
    $('#' + PatternTableId).DataTable({
        "initComplete": function (settings, json) {
            $('#' + ActionBtnId).find('span').attr('class', Icon);
            ShowReport(PatternTableReportId);
            NotiConnectionIdUpdate('Chat');
        },
        "ajax": {
            "url": "/Common/TopBarChatGet",
            "type": "GET",
            "datatype": "json",
            "data": {
                KeyWord: KeyWord
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
                        return GetDigits(data.DayM, 2) + '-' + GetDigits(data.MonthM, 2) + '-' + data.YearM;
                    }
                    else {
                        return GetDigits(data.HourM, 2) + ':' + GetDigits(data.MinuteM, 2);
                    }
                }
            },//0
        ],
        "columnDefs": [
            { "width": "100%", "className": "text-center", "targets": 0 },//FullName 
            { "targets": 0, "render": function (data, type, row) { return TopBarChatFormGet(row['MyUserId'], row['FriendUserId'], row['FirstName'], row['LastName'], data, row['IsConnected'], row['count'], row['LastMessage']); } },
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

function TopBarChatMsgGet(MyUserId, FiendUserId) {
    document.getElementById('FriendImageId').setAttribute('src', 'ViewBag.ImagesVDFolder/Profil/' + FiendUserId + '.jpg');

    //document.getElementById('FriendImageId').setAttribute('src', document.getElementById('FriendImageToId').getAttribute('src'));
    //document.getElementById('FriendNameId').innerHTML = document.getElementById('FriendNameToId' + UserIdTo).innerHTML;

    document.getElementById('ContChatMessageSendBtnId').setAttribute("onClick", 'TopBarChatMsgSend(\'' + MyUserId + '\' , \'' + FiendUserId + '\')');
    document.getElementById('ContChatMessageId').setAttribute("onSubmit", 'TopBarChatMsgSend(\'' + MyUserId + '\', \'' + FiendUserId + '\')');

    HideReport('ContChatMessages' + 'CardHeaderId');
    HideReport('ContChatTheadId');
    HideReport('ContChatMessages' + 'TableReportId');

    document.getElementById('ContChatMessagesTbodyId').setAttribute('class', MyUserId + '-' + FiendUserId);
    //document.getElementById('ContChatMessagesTableId').style.borderBottom = "white";
    //document.getElementById('ContChatMessagesCardId').style.border = "white";

    $('#ContChatMessages' + 'TableId').DataTable().destroy();;
    $('#ContChatMessages' + 'TableId').DataTable({
        "initComplete": function (settings, json) {
            ShowReport('ContChatMessages' + 'TableReportId');
            //$('#ChatMessagesTFootId').focus(); 
            var objDiv = document.getElementById("ContChatMessagesId");
            objDiv.scrollTop = objDiv.scrollHeight;

            var elements = document.getElementById('ContChatMessages' + 'TableId').getElementsByTagName("td");
            // x[0].style.backgroundColor = "#E5DDD5";

            //for (var i = 0; i < elements.length; i++) {
            //    x[i].style.backgroundColor = "#E5DDD5";
            //}

            for (var i = elements.length - 1; i >= 0; i--) {
                elements[i].style.backgroundColor = "#E5DDD5";
            }

            //$("tr:first").css("background-color", "#E5DDD5");

            //$("td").each(function () {
            //    var i = $(this).attr("id");
            //    $(i).css("background-color", "#E5DDD5");

            //});
        },
        "ajax": {
            "url": "/Common/TopBarChatMsgGet",
            "type": "GET",
            "datatype": "json",
            "data": {
                "MyUserId": MyUserId,
                "FiendUserId": FiendUserId
            }
        },
        "columns": [
            { "data": "ChatMessage" }, //0
        ],
        "columnDefs": [
            { "width": "100%", "className": "text-center", "targets": 0 },//ChatMessage   
            { "targets": 0, "render": function (data, type, row) { return TopBarChatMsgFormGet(row['MyUserId'], row['UserIdFrom'], row['ChatMessage'], row['ChatHour'], row['ChatMinute'], row['DateString']); } },
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

function TopBarConnFormGet(UserId, FirstName, LastName, Dhm, IsConnected, ServerPort) {

    var FullName = FirstName + ' ' + LastName;
    var online = '';
    var Status = '';
    var Title = '';
    //var color = '#fe1200';
    //var color = '#5cb85c';

    if (IsConnected) {
        online = '<span class="fa fa-circle" style="' +
            'font-size: 8px;' +
            'margin-right: 4px;' +
            'background: #5cb85c;' +
            'position: absolute;' +
            'margin: -2px 0 0 -2px;' +
            'width: 10px;' +
            'height: 10px;' +
            'border-radius: 50%;' +
            'color: #5cb85c;' +
            'margin-top: 8px;' +
            '"></span>';
        Title = FullName;
    }
    else {
        online = '<span class="fa fa-circle" style="' +
            'font-size: 8px;' +
            'margin-right: 4px;' +
            'background: #fe1200;' +
            'position: absolute;' +
            'margin: -2px 0 0 -2px;' +
            'width: 10px;' +
            'height: 10px;' +
            'border-radius: 50%;' +
            'color: #fe1200;' +
            'margin-top: 8px;' +
            '"></span>';
        Title = FullName;
    }

    var ProfilImgUrl = 'ViewBag.ImagesVDFolder/Profil/' + UserId + '.jpg';
    var NameId = 'NameId' + UserId;
    var DhmId = 'DhmId' + UserId;
    return '<div class="friend-drawer friend-drawer--onhover" onclick="ContChatMessagesGet(\'' + UserId + '\')">' + online +
        '<img id="FriendImageToId" class="profile-image" src="' + ProfilImgUrl + '" alt="">' +
        '<div class="text" style="margin-right: 40px" >' +
        '<p id=\"' + NameId + '\" style="text-align: left" >' + Title + '</p>' +

        '<p id=\"' + DhmId + '\" style="text-align: left;font-size: 12px;" >' + Dhm + '</p>' +
        //'<p class="text-muted">Hey, youre xxx!</p>' +
        '</div>' +
        //'<span class="time text-muted small">13:21</span>' +
        '</div>' +
        '<hr>'
}

function TopBarChatFormGet(MyUserId, FriendUserId, FirstName, LastName, Dhm, IsConnected, count, LastMessage) {

    var FullName = LastName + ' ' + FirstName;
    var online = '';
    var Status = '';
    var Title = '';
    //var color = '#fe1200';
    //var color = '#5cb85c';

    if (IsConnected) {
        online = '<span class="fa fa-circle" style="' +
            'font-size: 8px;' +
            'margin-right: 4px;' +
            'background: #5cb85c;' +
            'position: absolute;' +
            'margin: -2px 0 0 -2px;' +
            'width: 10px;' +
            'height: 10px;' +
            'border-radius: 50%;' +
            'color: #5cb85c;' +
            'margin-top: 8px;' +
            '"></span>';
        Title = FullName;
    }
    else {
        online = '<span class="fa fa-circle" style="' +
            'font-size: 8px;' +
            'margin-right: 4px;' +
            'background: #fe1200;' +
            'position: absolute;' +
            'margin: -2px 0 0 -2px;' +
            'width: 10px;' +
            'height: 10px;' +
            'border-radius: 50%;' +
            'color: #fe1200;' +
            'margin-top: 8px;' +
            '"></span>';
        Title = FullName;
    }

    var ProfilImgUrl = 'ViewBag.ImagesVDFolder/Profil/' + FriendUserId + '.jpg';
    var NameId = 'NameId' + FriendUserId;
    var DhmId = 'DhmId' + FriendUserId;
    var CountId = 'CountId' + FriendUserId;
    var CountElement = '';

    if (count > 0) {
        CountElement = '<span class="badge badge-pill badge-success" style="margin-left: 5px;position: absolute;">' + count + '</span>';
    }

    return '<div class="friend-drawer friend-drawer--onhover" style="" onclick="TopBarChatMsgGet(\'' + MyUserId + '\', \'' + FriendUserId + '\')">' + online +
        '<img id="FriendImageToId" class="profile-image" src="' + ProfilImgUrl + '" alt="">' +
        '<div class="text" style="margin-right: 40px" >' +
        '<p id=\"' + NameId + '\" style="text-align:left;font-weight:bold;color:black;">' + Title + '</p>' +

        '<p id=\"' + DhmId + '\" style="text-align: left;font-size: 12px;" >' + Dhm + CountElement + '</p>' +
        '<p class="text-muted" style="text-align: left;">' + LastMessage + '</p>' +

        //'<p id=\"' + CountId + '\" class="tb-count-chat-cl">' + count + '</p>' +

        '</div>' +
        //'<span class="time text-muted small">13:21</span>' +
        '</div>' +
        '<hr>'
}

function TopBarNotiFormGet(UserId, FirstName, LastName, Dhm, Title, Content, IsRead, DataId) {

    var FullName = FirstName + ' ' + LastName;
    var online = '';
    //var color = '#fe1200';
    //var color = '#5cb85c';

    var ProfilImgUrl = 'ViewBag.ImagesVDFolder/Profil/' + UserId + '.jpg';
    var NameId = 'NameId' + UserId;
    var ContentId = 'ContentId' + UserId;
    var DhmId = 'DhmId' + UserId;
    var ContainerId = 'container-' + DataId;
    var background = '';
    if (IsRead) {
        background = 'white';
    }
    else {
        background = '#F5F7F7';
    }

    return '<div id=\"' + ContainerId + '\" class="friend-drawer friend-drawer--onhover" style="cursor:pointer;background: ' + background + '" onclick="TopBarNotiRead(\'' + DataId + '\')" >' + online +
        '<img id="FriendImageToId" class="profile-image" src="' + ProfilImgUrl + '" alt="">' +
        '<div class="text" style="white-space: pre-wrap;" >' +
        '<p id=\"' + NameId + '\" style="text-align: left" >' + FullName + '&nbsp;&nbsp; | &nbsp; ' + Title + '</p>' +
        '<p id=\"' + ContentId + '\" style="text-align: left;font-size: 12px;" >' + Content + '</p>' +
        '<p id=\"' + DhmId + '\" style="text-align: left;font-size: 12px;" >' + Dhm + '</p>' +
        //'<p class="text-muted">Hey, youre xxx!</p>' +
        '</div>' +
        //'<span class="time text-muted small">13:21</span>' +
        '</div>' +
        '<hr>'
}


function TopBarFixFormGet(HomeUpdateId, UserId, FirstName, LastName, Dhm, UpdateMessage, HomeUpdateEditId, ImageExtension, UpdateStatusId, StatusColor, Response, ModuleName, PluginName, IsAdmin, UpdateStatusName, HandledBy, ImagesVDFolder) {

    //test
    //var UpdateStatusId = '08';
    //HtmlDropDownListFill('UpdateStatusId' + HomeUpdateEditId, UpdateStatusId, '/Home/HomeUpdateGetUpdateStatus', 'UpdateStatusId', 'UpdateStatusName');

    var FileElement = '';
    var FullName = FirstName + ' ' + LastName;

    //var color = '#fe1200';
    //var color = '#5cb85c';

    var ProfilImgUrl = ImagesVDFolder + '/Profil/' + UserId + '.jpg';

    var ImageElement = '';
    if (ImageExtension != '') {
        ImageElement = TopBarImageGet(HomeUpdateEditId, ImageExtension, ImagesVDFolder);
    }
    var NameId = 'NameId' + UserId;
    var ContentId = 'ContentId' + UserId;
    var DhmId = 'DhmId' + UserId;
    var background = 'white';

    var selected0 = '';
    var selected02 = '';
    var selected03 = '';
    var selected01 = '';
    var selected08 = '';
    var selected07 = '';
    var selected04 = '';
    var selected05 = '';
    var selected06 = '';
    var selected09 = '';
    var selected10 = '';

    if (UpdateStatusId == '0') {
        selected0 = 'selected';
    }
    if (UpdateStatusId == '02') {
        selected02 = 'selected';
    }
    if (UpdateStatusId == '03') {
        selected03 = 'selected';
    }
    if (UpdateStatusId == '01') {
        selected01 = 'selected';
    }
    if (UpdateStatusId == '08') {
        selected08 = 'selected';
    }
    if (UpdateStatusId == '07') {
        selected07 = 'selected';
    }
    if (UpdateStatusId == '04') {
        selected04 = 'selected';
    }
    if (UpdateStatusId == '05') {
        selected05 = 'selected';
    }
    if (UpdateStatusId == '06') {
        selected06 = 'selected';
    }
    if (UpdateStatusId == '09') {
        selected09 = 'selected';
    }
    if (UpdateStatusId == '10') {
        selected10 = 'selected';
    }

    //var StatusElement = '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + DataTableFlagGet(StatusColor) + StatusName;

    var online = '<span class="fa fa-circle" style="' +
        'font-size: 8px;' +
        'margin-right: 4px;' +
        //'background: #5cb85c;' +
        'position: absolute;' +
        'margin: -2px 0 0 -2px;' +
        'width: 10px;' +
        'height: 10px;' +
        'border-radius: 50%;' +
        'color: ' + StatusColor + ';' +
        'margin-top: 8px;' +
        '"></span>';

    //var ResponseElement = '<p style="text-align: left;font-size: 12px;" >Réponse : ' + Response + '</p>';
    Response = '';
    var ResponseElement = '';
    var SendBtnElement = '';
    var StatusElement = '';
    var IsMineElement = '';

    ResponseElement = '<div class="form-group mb-1" style="margin-top: 6px;">' +
        '<div>' +
        '<textarea id="ResponseId' + HomeUpdateId + '" class="form-control col myform-tarea">' + Response + '</textarea>' +
        '</div>' +
        '</div>';

    SendBtnElement = '<p style="text-align: left;margin-top: 6px;" >' +
        '<button id="SendBtnId' + HomeUpdateId + '" type="button" class="btn-cl gc-bc1-cl" onclick="TopBarFixEdit(' + HomeUpdateId + ')">' +
        '<span class="fas fa-paper-plane btn-icon-m-cl gc-c1-cl"></span>' +
        '<div class="btn-txt-cl gc-c1-cl">Envoyer</div>' +
        '</button>' +
        '</p>';

    StatusElement = '<p style="text-align: left" >' +
        '<select class="form-control" style="height: 30px;color: white;font-weight: bold;background-color: ' + StatusColor + ';" id="UpdateStatusId' + HomeUpdateId + '" onchange="">' +
        '<option value="0" ' + selected0 + '>--</option>' +
        '<option value="02" ' + selected02 + '>02 - Initialisée</option>' +
        '<option value="01" ' + selected01 + '>01 - Acceptée</option>' +
        '<option value="03" ' + selected03 + '>03 - Relancée</option>' +
        '<option value="06" ' + selected06 + '>06 - Attente complément</option>' +
        '<option value="08" ' + selected08 + '>08 - En cours de traitement</option>' +
        '<option value="07" ' + selected07 + '>07 - En instance</option>' +
        '<option value="04" ' + selected04 + '>04 - Traitée</option>' +
        '<option value="05" ' + selected05 + '>05 - Annulée</option>' +
        '<option value="09" ' + selected09 + '>09 - Archivée</option>' +
        '<option value="10" ' + selected09 + '>10 - Traitée dans la prochaine version</option>' +
        '</select>' + '</p>';

    FileElement = '<div id="FixFileIdParent' + HomeUpdateId + '" class="form-group row mb-1" style="margin-top: 5px;" >' +
        '<input id="FixFileId' + HomeUpdateId + '" type="file" class="form-control" name="ProfilImgUploadedFile" style="font-size: 0.9rem;margin-left: 15px;margin-right: 15px;">' +
        '</div>';

    //var chechedValue = ''
    //if (IsMine) {
    //    chechedValue = 'checked';
    //};

    //IsMineElement = '<label for="TopBarIsMineSwitch' + HomeUpdateId + '" class="col-6 col-form-label">Me l\'affecter</label>' +
    //    '<label for="TopBarIsMineSwitch' + HomeUpdateId + '" class="switch" style="float:left;margin-top: 8px;"><input id="TopBarIsMineSwitch' + HomeUpdateId + '"' +
    //    ' type="checkbox" class="success form-control" onchange="TopBarIsMineSwitch(' + HomeUpdateId + ')" ' + chechedValue + '=""><span class="slider round"></span></label>';

    var Handledselected0 = '';
    var Handledselected01 = '';
    var Handledselected02 = '';
    var Handledselected03 = '';

    if (HandledBy == '9ff77de5-7d2c-4c10-b6dc-c5cc8e145b91') {
        Handledselected0 = 'selected';
    }
    if (HandledBy == '771f9f25-620f-4f44-9328-57e8c3819ec9') {
        Handledselected01 = 'selected';
    }
    if (HandledBy == 'cae0cdda-9154-45ba-aa23-e230ebd2c56a') {
        Handledselected02 = 'selected';
    }
    if (HandledBy == '5a9d2d0d-8d65-4e52-a9b0-0b8c65b87321') {
        Handledselected03 = 'selected';
    }

    var HandledByElement = '<p style="text-align: left" >' +
        '<select class="form-control" style="height: 30px;color: white;font-weight: bold;background-color: ' + StatusColor + ';" id="HandledById' + HomeUpdateId + '" onchange="HandledBySwitch(' + HomeUpdateId + ')">' +
        '<option value="9ff77de5-7d2c-4c10-b6dc-c5cc8e145b91" ' + Handledselected0 + '>--</option>' +
        '<option value="771f9f25-620f-4f44-9328-57e8c3819ec9" ' + Handledselected01 + '>Ouahmane Rachid</option>' +
        '<option value="cae0cdda-9154-45ba-aa23-e230ebd2c56a" ' + Handledselected02 + '>Sakri Othmane</option>' +
        '<option value="5a9d2d0d-8d65-4e52-a9b0-0b8c65b87321" ' + Handledselected03 + '>Chehboune Brahim</option>' +
        '</select>' + '</p>';

    //return '<div class="friend-drawer friend-drawer--onhover" style="white-space: normal;" onclick="" >' + online +
    //    '<img id="FriendImageToId" class="profile-image" src="' + ProfilImgUrl + '" alt="">' +

    //    '<div class="text" style="margin-right: 40px" >' +
    //    '<p id=\"' + NameId + '\" style="text-align: left" >' + FullName + '</p>' +
    //    '<p style="text-align: left;font-size: 14px;" >' + ModuleName + ' | ' + PluginName + '</p>' +
    //    '<p id=\"' + ContentId + '\" style="text-align: left;font-size: 14px;" >' + UpdateMessage + '</p>' +
    //    //IsMineElement +
    //    HandledByElement +
    //    ResponseElement +
    //    ImageElement +
    //    FileElement +
    //    StatusElement +
    //    SendBtnElement +
    //    '<p id=\"' + DhmId + '\" style="text-align: left;font-size: 12px;" >' + Dhm + '</p>' +

    //    '</div>' +
    //    //'<span class="time text-muted small">13:21</span>' +
    //    '</div>' +
    //    '<hr>'

    return '<div class="friend-drawer friend-drawer--onhover" style="white-space: normal;" onclick="" >' +


        '<div class="text" style="margin-right: 40px;width: 100%;" >' +
        //online +
        //'<img id="FriendImageToId" class="profile-image" src="' + ProfilImgUrl + '" alt="">' +
        '<p id=\"' + NameId + '\" style="text-align: left" >' + '<img id="FriendImageToId" class="profile-image" src="' + ProfilImgUrl + '" alt="">&nbsp;&nbsp;' +
        FullName + '</p>' +
        //'<span style="margin-bottom: 5px">' + FullName + '</span>' + '</p>' +
        //'<p id=\"' + NameId + '\" style="text-align: left" >' + FullName + '</p>' +
        '<p style="text-align: left;font-size: 14px;" >' + ModuleName + ' | ' + PluginName + '</p>' +
        '<p id=\"' + ContentId + '\" style="text-align: left;font-size: 14px;" >' + UpdateMessage + '</p>' +
        //IsMineElement + 
        HandledByElement +
        ResponseElement +
        ImageElement +
        FileElement +
        StatusElement +
        SendBtnElement +
        '<p id=\"' + DhmId + '\" style="text-align: left;font-size: 12px;" >' + Dhm + '</p>' +

        '</div>' +
        //'<span class="time text-muted small">13:21</span>' +
        '</div>' +
        '<hr>'
}


function TopBarLogFormGet(FileName, Dhm) {

    var FileNameShort = new String(FileName).substr(24, new String(FileName).length - 4 - 24)
    //var SendBtnElement = '';

    //SendBtnElement = '<p style="text-align: left;margin-top: 6px;" >' +
    //    '<button type="button" class="btn-cl gc-bc1-cl" onclick="CertFileLogsDownload(\'' + FileName + '\', \'Server_21\')">' +
    //    '<span class="fas fa-eye btn-icon-m-cl gc-c1-cl"></span>' +
    //    '<div class="btn-txt-cl gc-c1-cl"></div>' +
    //    '</button>' +
    //    '</p>';

    return '<div class="friend-drawer friend-drawer--onhover" style="white-space: normal;width: 430px;cursor: pointer;" onclick="TopBarLogView(\'' + FileName + '\', \'Server_21\')" >' +
        '<div class="text" style="margin-right: 40px" >' +
        '<p style="text-align: left" >' + FileNameShort + '</p>' +
        '<p style="text-align: left;font-size: 12px;" >' + Dhm + '</p>' +
        '</div>' +
        '</div>' +
        '<hr>'
}


function TopBarLogView(LogFileName, ServerName) {

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

function TopBarFixHomeFormGet(HomeUpdateId, UserId, FirstName, LastName, Dhm, UpdateMessage, HomeUpdateEditId, ImageExtension, UpdateStatusId, StatusColor, Response, ModuleName, PluginName, IsAdmin, UpdateStatusName, HandledBy) {

    //test
    //var UpdateStatusId = '08';
    //HtmlDropDownListFill('UpdateStatusId' + HomeUpdateEditId, UpdateStatusId, '/Home/HomeUpdateGetUpdateStatus', 'UpdateStatusId', 'UpdateStatusName');

    var FileElement = '';
    var FullName = FirstName + ' ' + LastName;

    //var color = '#fe1200';
    //var color = '#5cb85c';

    var ProfilImgUrl = 'ViewBag.ImagesVDFolder/Profil/' + UserId + '.jpg';

    var ImageElement = '';
    if (ImageExtension != '') {
        ImageElement = TopBarImageGet(HomeUpdateEditId, ImageExtension);
    }
    var NameId = 'NameId' + UserId;
    var ContentId = 'ContentId' + UserId;
    var DhmId = 'DhmId' + UserId;
    var background = 'white';

    var online = '<span class="fa fa-circle" style="' +
        'font-size: 8px;' +
        'margin-right: 4px;' +
        //'background: #5cb85c;' +
        'position: absolute;' +
        'margin: -2px 0 0 -2px;' +
        'width: 10px;' +
        'height: 10px;' +
        'border-radius: 50%;' +
        'color: ' + StatusColor + ';' +
        'margin-top: 8px;' +
        '"></span>';


    return '<div class="friend-drawer friend-drawer--onhover" style="white-space: normal;" onclick="" >' + online +
        '<img id="FriendImageToId" class="profile-image" src="' + ProfilImgUrl + '" alt="">' +

        '<div class="text" >' +
        '<p id=\"' + NameId + '\" style="text-align: left" >' + FullName + '</p>' +
        '<p id=\"' + ContentId + '\" style="text-align: left;font-size: 14px;" >' + UpdateMessage + '</p>' +
        ImageElement +
        '<p id=\"' + DhmId + '\" style="text-align: left;font-size: 12px;" >' + Dhm + '</p>' +

        '</div>' +
        //'<span class="time text-muted small">13:21</span>' +
        '</div>' +
        '<hr>';
}

function TopBarIsMineSwitch(HomeUpdateId) {
    var obj = {};
    obj.HomeUpdateId = HomeUpdateId;

    $.ajax({
        url: "/Collab/TopBarIsMineSwitch",
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


function HandledBySwitch(HomeUpdateId) {

    var HandledBy = GetElementValue('HandledById' + HomeUpdateId);

    var obj = {};
    obj.HomeUpdateId = HomeUpdateId;
    obj.HandledBy = HandledBy;

    $.ajax({
        url: "/Collab/HandledBySwitch",
        method: "POST",
        data: JSON.stringify(obj),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            document.getElementById("HandledById" + HomeUpdateId).style.backgroundColor = "green";
        },
        error: function (request, status, error) {
            alert('Error!');
        }
    });
}

function TopBarImageGet(HomeUpdateEditId, ImageExtension, ImagesVDFolder) {
    var ImagePath = ImagesVDFolder + '/Requests/' + HomeUpdateEditId + ImageExtension;
    if (ImageExtension == '.xls' || ImageExtension == '.xlsx') {
        return '<a href="' + ImagePath + '" target="_blank">' +
            '<img id="ImageId" class="tb-att-cl" src="' + ImagesVDFolder + '/Icons/Excel.jpg" alt="">' +
            '</a>';
    }
    else {
        if (ImageExtension == '.pdf') {
            return '<a href="' + ImagePath + '" target="_blank">' +
                '<img id="ImageId" class="tb-att-cl" src="' + ImagesVDFolder + '/Icons/PDF.jpg" alt="">' +
                '</a>';
        }
        else {
            return '<a href="' + ImagePath + '" target="_blank">' +
                '<img id="ImageId" class="tb-att-cl" src="' + ImagePath + '" alt="">' +
                '</a>';

        }
    }

}

function TopBarChatMsgSend(MyUserId, FriendUserId) {
    $('#ContChatMessageSendBtnId').attr('class', 'fa fa-spinner fa-spin');

    var ChatMessage = GetElementValue('ContChatMessageId');
    var obj = {};
    obj.MyUserId = MyUserId;
    obj.FriendUserId = FriendUserId;
    obj.ChatMessage = ChatMessage;

    $.connection.hub.start({ jsonp: true }).done(function () {
        obj.ConnectionId = $.connection.hub.id;
        $.ajax({
            url: "/Common/TopBarChatMsgSend",
            method: "POST",
            data: JSON.stringify(obj),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {
                $('#ContChatMessageSendBtnId').attr('class', 'fas fa-paper-plane');
                $('#ContChatMessageId').val('');

                PlayAudio("AudioChatId");
                TopBarChatMsgNotify(MyUserId, FriendUserId, ChatMessage);
            }
        });
    });


}

function TopBarChatMsgFormGet(MyUserId, UserIdFrom, ChatMessage, ChatHour, ChatMinute, DateString) {

    var HourMinute = GetDigits(ChatHour, 2) + ':' + GetDigits(ChatMinute, 2);


    if (DateString != '') {
        DateString = '<div class="row no-gutters">' +
            '<div class="col-md-12">' +
            '<div class="datemsg">' +
            '<p class="chat-bubble chat-bubble--right">' + DateString + '</p>' +
            '</div>' +
            '</div>' +
            '</div>';
    }

    if (MyUserId == UserIdFrom) {
        return DateString + '<div class="row no-gutters">' +
            '<div class="col-md-12">' +
            '<div class="sentmsg">' +
            '<p class="chat-bubble chat-bubble--right">' + ChatMessage + '</p>' +
            '<span class="time_date">' + HourMinute + '</span>' +
            '</div>' +
            '</div>' +
            '</div>';
    }
    else {
        return DateString + '<div class="row no-gutters">' +
            '<div class="col-md-12">' +
            '<div class="receivedmsg">' +
            '<p class="chat-bubble chat-bubble--left">' + ChatMessage + '</p>' +
            '<span class="time_date">' + HourMinute + '</span>' +
            '</div>' +

            '</div>' +
            '</div>';
    }




    //'<div class="chat-bubble chat-bubble--left">'

}

function TopBarChatMsgNotify(UserIdFrom, UserIdTo, ChatMessage) {




    var tbdy = document.getElementById('ContChatMessagesTbodyId');
    var pClass = '';
    var div3Class = '';

    if (tbdy.className == UserIdFrom + '-' + UserIdTo) {
        pClass = new String('chat-bubble chat-bubble--right');
        div3Class = new String('sentmsg');
    }

    if (tbdy.className == UserIdTo + '-' + UserIdFrom) {
        pClass = new String('chat-bubble chat-bubble--left');
        div3Class = new String('receivedmsg');
    }

    var tr = document.createElement('tr');
    tr.setAttribute('class', 'even');
    tr.setAttribute('role', 'row');

    var td = document.createElement('td');
    td.setAttribute('class', 'text-center');
    td.style.backgroundColor = 'white';
    td.style.borderTop = 'white';

    var div1 = document.createElement('div');
    div1.setAttribute('class', 'row no-gutters');

    var div2 = document.createElement('div');
    div2.setAttribute('class', 'col-md-12');

    var div3 = document.createElement('div');
    div3.setAttribute('class', div3Class);

    var p = document.createElement('p');
    p.setAttribute('class', pClass);
    p.appendChild(document.createTextNode(ChatMessage))



    var span = document.createElement('span');
    span.setAttribute('class', 'time_date');
    var datenow = new Date();
    var hour = new String(datenow.getHours());
    var minute = new String(datenow.getMinutes());
    var HM = GetDigits(hour, 2) + ':' + GetDigits(minute, 2);
    span.appendChild(document.createTextNode(HM))

    div3.appendChild(p);
    div3.appendChild(span);
    div2.appendChild(div3);
    div1.appendChild(div2);
    td.appendChild(div1);
    tr.appendChild(td);
    tbdy.appendChild(tr);


    var objDiv = document.getElementById("ContChatMessagesId");
    objDiv.scrollTop = objDiv.scrollHeight;
}

function UserIdGet() {
    var UserId = '';

    $.ajax({
        url: "/Common/UserIdGet",
        method: "POST",
        contentType: "application/json; charset=utf-8",
        async: true,
        success: function (data) {

            UserId = data;
        }
    });

    return UserId;
}


function TopBarVersionGet() {

    $.ajax({
        url: "/Common/TopBarVersionGet",
        method: "POST",
        contentType: "application/json; charset=utf-8",
        async: true,
        dataType: "text",
        success: function (data) {
            $('#tb-version-id').text('V' + data);
        }
    });
}

function TopBarClientGet() {

    $.ajax({
        url: "/Common/TopBarClientGet",
        method: "POST",
        contentType: "application/json; charset=utf-8",
        async: true,
        dataType: "text",
        success: function (data) {
            ElementInputSet('ClientId', data);
        }
    });
}

function TopBarUserImageSrcGet() {

    $.ajax({
        url: "/Common/TopBarUserImageSrcGet",
        method: "POST",
        contentType: "application/json; charset=utf-8",
        async: true,
        dataType: "text",
        success: function (data) {
            document.getElementById('tb-user-image-id').src = data;
            //document.getElementById('acc-pr-img-id').src = data;
        }
    });
}


function TopBarChatCountGet(FriendUserId) {

    var obj = {};
    obj.FriendUserId = FriendUserId;

    $.ajax({
        url: "/Common/TopBarChatCountGet",
        method: "POST",
        data: JSON.stringify(obj),
        contentType: "application/json; charset=utf-8",
        async: true,
        dataType: "text",
        success: function (data) {
            $('#tb-chat-count-id').text(data);
            if (data == "0") {
                document.getElementById('tb-chat-count-id').style.backgroundColor = 'transparent';
            }
            else {
                document.getElementById('tb-chat-count-id').style.backgroundColor = 'red';
            }
        }
    });
}

function TopBarChatSearch() {
    var KeyWord = GetElementValue('KeyWordId');

    if (KeyWord == '') {
        TopBarChatGet();
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
                "url": "/Common/TopBarChatSearch",
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


function TopBarModulesGet() {


    $.ajax({
        url: "/Common/TopBarModulesGet",
        method: "POST",
        //data: JSON.stringify(obj),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: true,
        success: function (data) {

            jQuery.each(data, function (index, itemData) {

                var imax = itemData.length;

                for (let i = 0; i < imax; i++) {
                    var ModuleId = itemData[i].ModuleId;
                    var Total = itemData[i].Total;
                    var Count01 = itemData[i].Count01;
                    var Count02 = itemData[i].Count02;
                    var Count03 = itemData[i].Count03;
                    var Count04 = itemData[i].Count04;
                    var Count05 = itemData[i].Count05;
                    var Count06 = itemData[i].Count06;
                    var Count07 = itemData[i].Count07;
                    var Count08 = itemData[i].Count08;
                    var Count09 = itemData[i].Count09;
                    var Count10 = itemData[i].Count10;

                    var Percentage = ((Count09 + Count04 + Count05 + Count10) * 100 / Total).toFixed(0) + '%';

                    if (ElementIfExistsCheck('IntroProgressId' + ModuleId)) {
                        $('#IntroProgressId' + ModuleId).text(Percentage);
                    }
                    if (ElementIfExistsCheck('IntroProgressBarId' + ModuleId)) {
                        document.getElementById('IntroProgressBarId' + ModuleId).style.width = Percentage;
                    }

                    TopBarStatusUpdate(Count01, ModuleId, '01');
                    TopBarStatusUpdate(Count02, ModuleId, '02');
                    TopBarStatusUpdate(Count03, ModuleId, '03');
                    TopBarStatusUpdate(Count04, ModuleId, '04');
                    TopBarStatusUpdate(Count05, ModuleId, '05');
                    TopBarStatusUpdate(Count06, ModuleId, '06');
                    TopBarStatusUpdate(Count07, ModuleId, '07');
                    TopBarStatusUpdate(Count08, ModuleId, '08');
                    TopBarStatusUpdate(Count09, ModuleId, '09');
                    TopBarStatusUpdate(Count10, ModuleId, '10');

                    if (ElementIfExistsCheck('IntroDiBtnId' + ModuleId)) {
                        var UpdateStatusId = '0';
                        var PluginId = 0;
                        var OnClick = "TopBarFixSearch(\'" + ModuleId + "\', " + PluginId + ", \'" + UpdateStatusId + "\')";
                        ElementOnClickSet('IntroDiBtnId' + ModuleId, OnClick);
                    }
                }
            });


        }
    })
}

function TopBarStatusUpdate(Count, ModuleId, UpdateStatusId) {
    var ElementId = 'IntroStatus' + UpdateStatusId + 'Id' + ModuleId;
    var ElementOnClickId = 'IntroStatus' + UpdateStatusId + 'ClickId' + ModuleId;
    var PluginId = '0';
    if (ElementIfExistsCheck(ElementId)) {
        $('#' + ElementId).text(Count);
        var OnClick = "TopBarFixSearch(\'" + ModuleId + "\', " + PluginId + ", \'" + UpdateStatusId + "\')";
        ElementOnClickSet(ElementOnClickId, OnClick);
    }
}

function TopBarFixClose() {
    HideReport('tb-fix-report-id');
}

function TopBarDakrModeSet() {
    var element = document.body;
    element.classList.toggle("tb-dark-mode");
    document.getElementById('page-content-row-id').classList.toggle("tb-dark-mode");

    //pages
    var elements = document.getElementsByClassName('card page-card tb-df-md');
    for (var i = 0; i < elements.length; i++) { //loop of length = 2
        elements[i].classList.toggle("tb-dark-mode");
    };

    //grids
    var elements = document.getElementsByClassName('row mb-3 tb-df-md');
    for (var i = 0; i < elements.length; i++) {
        elements[i].classList.toggle("tb-dark-mode");
    };

    var elements = document.getElementsByClassName('col-md-12 tb-df-md');
    for (var i = 0; i < elements.length; i++) {
        elements[i].classList.toggle("tb-dark-mode");
    };

    var elements = document.getElementsByClassName('card-body tb-df-md');
    for (var i = 0; i < elements.length; i++) {
        elements[i].classList.toggle("tb-dark-mode");
    };

    var elements = document.getElementsByClassName('card grid-card');
    for (var i = 0; i < elements.length; i++) {
        elements[i].classList.toggle("tb-dark-mode");
    };

    var elements = document.getElementsByClassName('card-body intro-card-body');
    for (var i = 0; i < elements.length; i++) {
        elements[i].classList.toggle("tb-dark-mode");
    };

    //Table
    var elements = document.getElementsByClassName('card-body');
    for (var i = 0; i < elements.length; i++) {
        elements[i].classList.toggle("tb-dark-mode");
    };

    var elements = document.getElementsByTagName('tr');
    for (var i = 0; i < elements.length; i++) {
        elements[i].classList.toggle("tb-dark-mode");
    };


}

function TopBarRecycle() {
    var AppId = 2;
    var TaskName = 'recycle';

    var ActionBtnId = 'tb-hist-id';
    var Icon = 'far fa-check-circle tb-noti-cl gc-c1-cl';
    var IsMargin = false;
    ActionSpin(ActionBtnId, IsMargin);

    //var ActionBtnId = 'ParamActionBtnId1';
    //$('#' + ActionBtnId).find('span').attr('class', 'fa fa-spinner fa-spin btn-icon-cl gc-c1-cl');

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
            JsSleep(60000);
            $('#' + ActionBtnId).find('span').attr('class', Icon);
            //AdminMusTrackSearch('', 'Param');
        }
    });

}

function TopBarHistoryGet(Keyword) {

    var ActionBtnId = 'tb-hist-id';
    var Icon = 'fas fa-history tb-noti-cl gc-c1-cl';

    $('#' + ActionBtnId).find('span').attr('class', 'fa fa-spinner fa-spin btn-icon-m-cl gc-c1-cl');

    //Set datatable patterns
    var Pattern = 'TopBarHistory';
    var PatternTableId = Pattern + 'TableId';
    var PatternTableReportId = Pattern + 'TableReportId';

    HideReport(PatternTableReportId);
    $('#' + PatternTableId).DataTable().destroy();
    $('#' + PatternTableId).DataTable({
        "initComplete": function (settings, json) {
            $('#' + ActionBtnId).find('span').attr('class', Icon);
            ShowReport(PatternTableReportId);
            NotiConnectionIdUpdate('Historique');
        },
        "ajax": {
            "url": "/Common/TopBarHistoryGet",
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

function nextTab(elem) {
    $(elem).next().find('a[data-toggle="tab"]').click();
}
function prevTab(elem) {
    $(elem).prev().find('a[data-toggle="tab"]').click();
}


function StepsGet(PluginId, FolderId, StepNumber) {
    StepActionsGet(PluginId, StepNumber);
    StepFilesGet(FolderId, StepNumber);
}

function StepActionsGet(PluginId, StepNumber) {
    var Keyword = '';
    var ModuleId = '0';
    var UpdateStatusId = '0';
    var EmergencyId = '0';
    var ChannelId = '0';
    var TeamId = '0';

    var IdParent = '0';

    var ActionBtnId = 'SpecSpanId' + StepNumber;
    var Icon = '';
    var Pattern = 'HomeUpdateEdit';
    var DateString = '';
    var TableSource = 'Step';

    HomeUpdateEditGet(ActionBtnId, Icon, Pattern, Keyword, IdParent, ModuleId, PluginId, UpdateStatusId, EmergencyId, ChannelId, DateString, TeamId, TableSource);
}

function StepFilesGet(FolderId, StepNumber) {
    var ActionBtnId = 'SpecSpanId' + StepNumber;
    var Icon = '';
    var Keyword = '';
    var CollectionId = '0';
    var TableSource = 'Step';

    DocFileGet(ActionBtnId, Icon, Keyword, CollectionId, FolderId, TableSource);
};

function TopBarConnGet() {

    var ActionBtnId = 'tb-conn-id';
    var Icon = 'fas fa-wifi tb-noti-cl gc-c1-cl';

    $('#' + ActionBtnId).find('span').attr('class', 'fa fa-spinner fa-spin btn-icon-m-cl gc-c1-cl');

    //Set datatable patterns
    var Pattern = 'TopBarConn';
    var PatternTableId = Pattern + 'TableId';
    var PatternTableReportId = Pattern + 'TableReportId';

    HideReport(PatternTableReportId);
    $('#' + PatternTableId).DataTable().destroy();
    $('#' + PatternTableId).DataTable({
        "initComplete": function (settings, json) {
            $('#' + ActionBtnId).find('span').attr('class', Icon);
            ShowReport(PatternTableReportId);
            NotiConnectionIdUpdate('Connexions');
        },
        "ajax": {
            "url": "/Common/TopBarConnGet",
            "type": "GET",
            "datatype": "json"
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
            { "targets": 0, "render": function (data, type, row) { return TopBarConnFormGet(row['UserId'], row['FirstName'], row['LastName'], data, row['IsConnected'], row['ServerPort']); } },
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

function TopBarNotifGet() {

    var ActionBtnId = 'tb-noti-id';
    var Icon = 'fas fa-bell tb-noti-cl gc-c1-cl';

    $('#' + ActionBtnId).find('span').attr('class', 'fa fa-spinner fa-spin btn-icon-m-cl gc-c1-cl');

    //Set datatable patterns
    var Pattern = 'TopBarNoti';
    var PatternTableId = Pattern + 'TableId';
    var PatternTableReportId = Pattern + 'TableReportId';

    HideReport(PatternTableReportId);
    $('#' + PatternTableId).DataTable().destroy();
    $('#' + PatternTableId).DataTable({
        "dom": 'Bfrtip',
        "buttons": {
            buttons: [
                {
                    text: 'Tout marquer comme lu',
                    action: function (e, dt, node, config) {
                        TopBarNotiAllRead();
                    }
                }
            ]
        },
        "initComplete": function (settings, json) {
            $('#' + ActionBtnId).find('span').attr('class', Icon);
            ShowReport(PatternTableReportId);
            NotiConnectionIdUpdate('Notifications');
        },
        "ajax": {
            "url": "/Common/TopBarNotiGet",
            "type": "GET",
            "datatype": "json"
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
            { "targets": 0, "render": function (data, type, row) { return TopBarNotiFormGet(row['UserId'], row['FirstName'], row['LastName'], data, row['Title'], row['Content'], row['IsRead'], row['DataId']); } },
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


function CommVersAllReportsHide() {
    HideReport('ParamReportId');
    HideReport('CommVersion' + 'TableReportId');
    HideReport('CommRelease' + 'TableReportId');
}

function CommVersParametersHide() {
    HideReport('NameId' + 'Parent');
    HideReport('VersionId' + 'Parent');
    HideReport('ModuleId' + 'Parent');
    HideReport('PluginId' + 'Parent');
    HideReport('DescriptionId' + 'Parent');
}

function CommVersHomeOpen() {
    CommVersAllReportsHide();
    CommVersParametersHide();
    MenuBarNavHighlight(0, 2, 1);

    //Set drop down lists  
    HtmlDropDownListFill('ModuleId', '', '/Collab/CollabModulesGet', 'ModuleId', 'ModuleName');
    HtmlDropDownListNameOnlyFill('VersionId', '', '/Common/ParamVersVersionGet', 'VersionId', 'VersionNumber');

    //OnChange
    ElementOnChangeSet('ModuleId', "CollabPluginsGet('0', '')");

    ElementOnChangeSet('VersionId', "CommReleaseDisplay()");
    ElementOnChangeSet('PluginId', "CommReleaseDisplay()");

    //Reset
    ElementDropDownListReset('PluginId');
}


function CommVersVersionOpen() {
    CommVersAllReportsHide();
    CommVersParametersHide();
    MenuBarNavHighlight(0, 0, 1);

    ParamTitleSet('Liste des versions')

    ShowReport('ParamReportId');
    ShowReport('NameId' + 'Parent');
    ShowReport('DescriptionId' + 'Parent');

    ParamActionBtnGet(0, 'Afficher', 'fas fa-eye', 'CommVersionDisplay()');
    ParamActionBtnGet(1, 'Ajouter', 'fas fa-plus-circle', 'CommVersionAdd()');
    ParamActionBtnGet(2, 'Visualiser', 'fas fa-file-pdf', "CommVersionExport(0, 'PDF')");

    //Display
    CommVersionGet();
}

//Display
function CommVersionDisplay() {
    CommVersionGet();
}

//Alert
function CommVersionNotify(VersionId) {
    var ActionBtnId = 'CommVersionNotifyBtnId' + VersionId;
    $('#' + ActionBtnId).find('span').attr('class', 'fa fa-spinner fa-spin');

    var Icon = 'fas fa-paper-plane btn-icon-cl gc-c1-cl';
    var obj = {};
    obj.VersionId = VersionId;
    $.ajax({
        url: "/Common/CommVersionNotify",
        method: "POST",
        data: JSON.stringify(obj),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            $('#' + ActionBtnId).find('span').attr('class', Icon);
        }
    });
}

//Get
function CommVersionGet() {

    //Set action button
    var ActionBtnId = 'ParamActionBtnId0';
    var Icon = ParamActionIconDisplayGet();

    ActionBtnMarginSpin(ActionBtnId);

    //Set datatable patterns
    var Pattern = 'CommVersion';
    var PatternTableId = Pattern + 'TableId';
    var PatternTableReportId = Pattern + 'TableReportId';

    HideReport(PatternTableReportId);
    $('#' + PatternTableId).DataTable().destroy();
    $('#' + PatternTableId).DataTable({
        "initComplete": function (settings, json) {
            $('#' + ActionBtnId).find('span').attr('class', Icon);
            ShowReport(PatternTableReportId);
            NotiConnectionIdUpdate('Versions');
            ElementIconMarginSet(ActionBtnId, Icon);
        },
        "ajax": {
            "url": "/Common/CommVersionGet",
            "type": "GET",
            "datatype": "json"
        },
        "columns": [
            { "data": "VersionNumber" }, //0
            { "data": "DhmModification" }, //1
            { "data": "Description" }, //2 
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
            },//3
            { "data": "VersionId" },//4 
            { "data": "VersionId" },//5
            { "data": "VersionId" },//6
        ],
        "columnDefs": [
            { "width": "3%", "className": "text-center", "targets": 0 },
            { "width": "3%", "className": "text-center", "targets": 1 },
            { "width": "3%", "className": "text-center", "targets": 2 },
            { "width": "3%", "className": "text-center", "targets": 3 },
            { "width": "3%", "className": "text-center", "targets": 4 },
            { "width": "3%", "className": "text-center", "targets": 5 },
            { "width": "3%", "className": "text-center", "targets": 6 },

            { "targets": 0, "render": function (data, type, row) { return data; } },
            { "targets": 1, "render": function (data, type, row) { return GetDhmValueFromDataTableDate(data); } },
            { "targets": 2, "render": function (data, type, row) { return data; } },
            { "targets": 3, "render": function (data, type, row) { return data; } },
            {
                "targets": 4, "render": function (data, type, row) {
                    return DataTableButtonGet('CommReleaseGet', data, '\'' + data + '\'', '', 'dt-btn-cl gc-bc1-cl', 'fas fa-eye btn-icon-cl gc-c1-cl', '');
                }
            },
            { "targets": 5, "render": function (data, type, row) { return DataTableButtonGet('CommVersionExport', data, '\'' + data + '\', \'PDF\'', '', 'dt-btn-cl gc-bc1-cl', 'fas fa-file-pdf btn-icon-cl gc-c1-cl', '') } },
            {
                "targets": 6, "render": function (data, type, row) {
                    return DataTableButtonGet('CommVersionNotify', data, '\'' + data + '\'', '', 'dt-btn-cl gc-bc1-cl', 'fas fa-paper-plane btn-icon-cl gc-c1-cl', '');
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

function CommVersionExport(VersionId, FileType) {
    var PrintLink = '/Common/CommVersionExport?' +
        'VersionId=' + VersionId +
        '&FileType=' + FileType;

    NavigateTo(PrintLink, true);
}


//Display
function CommReleaseDisplay() {
    //Set action button
    var ActionBtnId = ParamActionBtnIdDisplayGet();
    var Icon = ParamActionIconDisplayGet();

    //Get input values
    var Keyword = GetElementValue('KeywordId');
    var VersionId = GetElementValue('VersionId');
    var ModuleId = GetElementValue('ModuleId');
    var PluginId = GetElementValue('PluginId');

    CommReleaseGet(ActionBtnId, Icon, Keyword, VersionId, ModuleId, PluginId);
}

//Add
function CommVersionAdd() {

    //Set action button
    var ActionBtnId = ParamActionBtnIdAddGet();
    var Icon = ParamActionIconAddGet();

    ActionBtnMarginSpin(ActionBtnId);

    //Get input values
    var VersionNumber = GetElementValue('NameId');
    var Description = GetElementValue('DescriptionId');

    if (VersionNumber != '') {
        ParamMessageReset();
        CommVersionInsert(ActionBtnId, Icon, VersionNumber, Description);
    }
    else {
        ParamMessageErrorDisplay('Le champ version est obligatoire')
    }
}

//Insert
function CommVersionInsert(ActionBtnId, Icon, VersionNumber, Description) {

    //Insert
    var obj = {};
    obj.VersionNumber = VersionNumber;
    obj.Description = Description;

    $.ajax({
        url: "/Common/CommVersionInsert",
        method: "POST",
        data: JSON.stringify(obj),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            ActionBtnIconMarginSet(ActionBtnId, Icon);
            CommVersionDisplay();
        }
    });
}





//Add
function CommReleaseAdd() {

    //Set action button
    var ActionBtnId = ParamActionBtnIdAddGet();
    var Icon = ParamActionIconAddGet();

    ActionBtnMarginSpin(ActionBtnId);

    //Get input values 
    var VersionId = GetElementValue('VersionId');
    var PluginId = GetElementValue('PluginId');
    var Description = GetElementValue('DescriptionId');

    if (PluginId != '0') {
        ParamMessageReset();
        CommReleaseInsert(ActionBtnId, Icon, VersionId, PluginId, Description);
    }
    else {
        ParamMessageErrorDisplay('Le champ Extension est obligatoire')
    }
}

//Insert
function CommReleaseInsert(ActionBtnId, Icon, VersionId, PluginId, Description) {

    //Insert
    var obj = {};
    obj.VersionId = VersionId;
    obj.PluginId = PluginId;
    obj.Description = Description;

    $.ajax({
        url: "/Common/CommReleaseInsert",
        method: "POST",
        data: JSON.stringify(obj),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            ActionBtnIconMarginSet(ActionBtnId, Icon);
            CommReleaseDisplay();
        }
    });
}

function CommReleaseGet(ActionBtnId, Icon, Keyword, VersionId, ModuleId, PluginId) {

    //Spin
    ActionBtnMarginSpin(ActionBtnId);

    var Pattern = 'CommRelease';
    var PatternTableId = Pattern + 'TableId';
    var PatternTableReportId = Pattern + 'TableReportId';

    HideReport(PatternTableReportId);

    $('#' + PatternTableId).DataTable().destroy();;
    $('#' + PatternTableId).DataTable({
        "initComplete": function (settings, json) {
            ShowReport(PatternTableReportId);
            ActionBtnIconMarginSet(ActionBtnId, Icon);
        },
        "ajax": {
            "url": "/Common/CommReleaseGet",
            "type": "GET",
            "datatype": "json",
            "data": {
                Keyword: Keyword,
                VersionId: VersionId,
                ModuleId: ModuleId,
                PluginId: PluginId
            }
        },
        "columns": [
            { "data": "DhmModification" },//0
            { "data": "ModuleName" },//1
            { "data": "PluginName" },//2
            { "data": "UpdateMessage" },//3
            { "data": "ImagePath" },//4
            { "data": "Response" },//5

            { "data": "UpdateStatusName" },//6
            { "data": "EmergencyName" },//7
            { "data": "HomeUpdateId" },//8

        ],
        "columnDefs": [
            { "width": "3%", "className": "text-left", "targets": 0 },
            { "width": "3%", "className": "text-left", "targets": 1 },
            { "width": "3%", "className": "text-left", "targets": 2 },
            { "width": "3%", "className": "text-left", "targets": 3 },
            { "width": "3%", "className": "text-left", "targets": 4 },
            { "width": "3%", "className": "text-left", "targets": 5 },

            { "width": "3%", "className": "text-left", "targets": 6 },
            { "width": "3%", "className": "text-left", "targets": 7 },
            { "width": "3%", "className": "text-left", "targets": 8 },

            { "targets": 0, "render": function (data, type, row) { return GetDateValueFromDataTableDate(data); } },
            { "targets": 1, "render": function (data, type, row) { return data; } },
            { "targets": 2, "render": function (data, type, row) { return data; } },
            { "targets": 3, "render": function (data, type, row) { return DataTableStringGet(data, 40); } },
            { "targets": 4, "render": function (data, type, row) { return DataTableImageGet(data); } },
            { "targets": 5, "render": function (data, type, row) { return DataTableStringGet(data, 40); } },

            { "targets": 6, "render": function (data, type, row) { return DataTableFlagGet(row['StatusColor']) + data; } },
            { "targets": 7, "render": function (data, type, row) { return DataTableStatusGet(data, row['EmergencyColor']); } },
            {
                "targets": 8, "render": function (data, type, row) {

                    if (row['TeamId'] == 1) {
                        return '<img class="dt-img-team-cl" src="/Images/Profil/' + row['UserId'] + '.jpg" />';
                    }
                    else {
                        return '<img class="dt-img-team-cl" src="/Images/Teams/' + row['TeamId'] + '.jpg" />' + '<img class="dt-img-team-cl" src="/Images/Profil/' + row['UserId'] + '.jpg" />';
                    };

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


function CommVersionFormGet(VersionId, VersionNumber, DhmModification, Description, Dhm) {

    var VersionNumberElement = '<strong class="d-block text-gray-dark">' + VersionNumber + '</strong>';
    var DescriptionElment = Description;
    var DhmElment = '<p style="text-align: left;font-size: 12px;" >' + Dhm + '</p>';

    return '<div class="media text-muted pt-3">' +
        '<p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">' +
        VersionNumberElement +
        DescriptionElment +
        Dhm +
        '</p>' +

        '</div>';
}



function CommVersReleaseOpen() {
    CommVersAllReportsHide();
    CommVersParametersHide();
    MenuBarNavHighlight(0, 1, 1);

    ParamTitleSet('Liste des corrections')

    ShowReport('ParamReportId');
    ShowReport('VersionId' + 'Parent');
    ShowReport('ModuleId' + 'Parent');
    ShowReport('PluginId' + 'Parent');
    ShowReport('DescriptionId' + 'Parent');

    ParamActionBtnGet(0, 'Afficher', 'fas fa-eye', 'CommReleaseDisplay()');
    ParamActionBtnGet(1, 'Ajouter', 'fas fa-plus-circle', 'CommReleaseAdd()');

    //Display
    CommReleaseDisplay();
}

function CertFileTaskKill() {
    var ActionBtnId = 'TaskKillBtnId';
    $('#' + ActionBtnId).find('span').attr('class', 'fa fa-spinner fa-spin');
    $.ajax({
        url: "/Cert/CertFileTaskKill",
        method: "POST",
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            $('#' + ActionBtnId).find('span').attr('class', 'fas fa-eraser');
        },
        error: function (request, status, error) {
            alert("Vous n'avez pas les droits nécessaires pour effectuer cette action");
        }
    });
}

var numFormat = $.fn.dataTable.render.number(' ', ',', 2).display;
var numShortFormat = $.fn.dataTable.render.number(' ', '', 0).display;
var numFormatOnDecimal = $.fn.dataTable.render.number(' ', ',', 1).display;


function ParamCexSecGet() {
    $("#CexId").empty();
    var RegionId = GetElementValue('RegionId');
    $.get("/Param/ParamCexSecGet", { Input: RegionId }, function (data) {
        $.each(data, function (index, row) {
            $("#CexId").append("<option value='" + row.CexId + "'>" + row.CexNameShort + "</option>")
        });
    });
    $("#CexId").append("<option value='" + 0 + "'>" + "--" + "</option>");
    $("#CexId").val('0');
}

function ParamLSFromCexGet() {
    var CexId = new String($("#CexId").val());
    $("#LSId").empty();
    $.get("/Param/ParamLSFromCexGet", { CexId: CexId }, function (data) {
        $.each(data, function (index, row) {
            $("#LSId").append("<option value='" + row.LSId + "'>" + row.LSName + "</option>")
        });
    });
    $("#LSId").append("<option value='" + 0 + "'>" + "--" + "</option>");
    $("#LSId").val('0');
}

function ParamLSFromRegionGet() {
    var RegionId = GetElementValue('RegionId');
    $("#LSId").empty();
    $.get("/Param/ParamLSFromRegionGet", { RegionId: RegionId }, function (data) {
        $.each(data, function (index, row) {
            $("#LSId").append("<option value='" + row.LSId + "'>" + row.LSName + "</option>")
        });
    });
    $("#LSId").append("<option value='" + 0 + "'>" + "--" + "</option>");
    $("#LSId").val('0');
}

function ParamLSSecGet() {
    var CexId = GetElementValue('CexId');
    $("#LSId").empty();
    $.get("/Param/ParamLSSecGet", { Input: CexId }, function (data) {
        $.each(data, function (index, row) {
            $("#LSId").append("<option value='" + row.LSId + "'>" + row.LSName + "</option>")
        });
    });
    $("#LSId").append("<option value='" + 0 + "'>" + "--" + "</option>");
    $("#LSId").val('0');
}

function ParamLSFromRegionSecGet() {
    var RegionId = GetElementValue('RegionId');
    $("#LSId").empty();
    $.get("/Param/ParamLSFromRegionSecGet", { RegionId: RegionId }, function (data) {
        $.each(data, function (index, row) {
            $("#LSId").append("<option value='" + row.LSId + "'>" + row.LSId + '-' + row.LSName + "</option>")
        });
    });
    $("#LSId").append("<option value='" + 0 + "'>" + "--" + "</option>");
    $("#LSId").val('0');
    $("#StationNumberId").val('0');
    $("#LaneNameId").val('0');
}

function ParamCellsFromRegionSecGet() {
    var RegionId = GetElementValue('RegionId');
    $("#CellId").empty();
    $.get("/Param/ParamCellsFromRegionSecGet", { RegionId: RegionId }, function (data) {
        $.each(data, function (index, row) {
            $("#CellId").append("<option value='" + row.CellId + "'>" + row.CellId + '-' + row.CellName + "</option>")
        });
    });
    $("#CellId").append("<option value='" + 0 + "'>" + "--" + "</option>");
    $("#CellId").val('0');
    $("#StationNumberId").val('0');
    $("#LaneNameId").val('0');
}

function ParamSectionFromAxleSecGet() {
    var AxleId = GetElementValue('AxleId');
    $("#SectionId").empty();
    $.get("/Param/ParamSectionFromAxleSecGet", { AxleId: AxleId }, function (data) {
        $.each(data, function (index, row) {
            $("#SectionId").append("<option value='" + row.SectionId + "'>" + row.SectionId + '-' + row.SectionName + "</option>")
        });
    });
    $("#SectionId").append("<option value='" + 0 + "'>" + "--" + "</option>");
    $("#SectionId").val('0');
}


function ParamLSFromAxleSecGet() {
    var AxleId = GetElementValue('AxleId');
    $("#LSId").empty();
    $.get("/Param/ParamLSFromAxleSecGet", { AxleId: AxleId }, function (data) {
        $.each(data, function (index, row) {
            $("#LSId").append("<option value='" + row.LSId + "'>" + row.LSId + '-' + row.LSName + "</option>")
        });
    });
    $("#LSId").append("<option value='" + 0 + "'>" + "--" + "</option>");

    ElementDropDownListSet('LSId', '0');
    ElementDropDownListSet('StationNumberId', '0');
    ElementDropDownListSet('LaneNameId', '0');
}

function ParamLSFromAxleSecXorGet() {
    var AxleId = GetElementValue('AxleId');
    $("#LSId").empty();
    $.get("/Param/ParamLSFromAxleSecGet", { AxleId: AxleId }, function (data) {
        $.each(data, function (index, row) {
            $("#LSId").append("<option value='" + row.LSId + "'>" + row.LSId + '-' + row.LSName + "</option>")
        });
    });
}

function ParamAxlesFromRegionSecGet() {
    var RegionId = GetElementValue('RegionId');
    $("#AxleId").empty();
    $.get("/Param/ParamAxlesFromRegionSecGet", { RegionId: RegionId }, function (data) {
        $.each(data, function (index, row) {
            $("#AxleId").append("<option value='" + row.AxleId + "'>" + row.AxleId + '-' + row.AxleName + "</option>")
        });
    });
    $("#AxleId").append("<option value='" + 0 + "'>" + "--" + "</option>");

    ElementDropDownListSet('AxleId', '0');
    ElementDropDownListSet('LSId', '0');
    ElementDropDownListSet('StationNumberId', '0');
    ElementDropDownListSet('LaneNameId', '0');
}


function ParamAxlesFromRegionSecXorGet() {
    var RegionId = GetElementValue('RegionId');
    $("#AxleId").empty();
    $.get("/Param/ParamAxlesFromRegionSecGet", { RegionId: RegionId }, function (data) {
        $.each(data, function (index, row) {
            $("#AxleId").append("<option value='" + row.AxleId + "'>" + row.AxleId + '-' + row.AxleName + "</option>")
        });
    });
    $("#AxleId").append("<option value='" + 0 + "'>" + "--" + "</option>");

    ElementDropDownListSet('AxleId', '0');
    ElementDropDownListSet('LSId', '0');
    ElementDropDownListSet('StationNumberId', '0');
    ElementDropDownListSet('LaneNameId', '0');
}

function ParamLSOFromRegionOSecGet() {
    var RegionId = GetElementValue('RegionIdO');
    $("#LSIdO").empty();
    $.get("/Param/ParamLSFromRegionSecGet", { RegionId: RegionId }, function (data) {
        $.each(data, function (index, row) {
            $("#LSIdO").append("<option value='" + row.LSId + "'>" + row.LSId + '-' + row.LSName + "</option>")
        });
    });
    $("#LSIdO").append("<option value='" + 0 + "'>" + "--" + "</option>");
    $("#LSIdO").val('0');
    $("#StationNumberIdO").val('0');
    $("#LaneNameIdO").val('0');
}

function ParamStationsFromRegionSecGet() {
    var RegionId = GetElementValue('RegionId');
    $("#StationNumberId").empty();
    $.get("/Param/ParamStationsFromRegionSecGet", { RegionId: RegionId }, function (data) {
        $.each(data, function (index, row) {
            $("#StationNumberId").append("<option value='" + row.StationId + "'>" + row.StationName + "</option>")
        });
    });
    $("#StationNumberId").append("<option value='" + 0 + "'>" + "--" + "</option>");
    $("#StationNumberId").val('0');
    $("#LaneNameId").val('0');
}

function ParamStationsFromRegionSecXorGet() {
    var RegionId = GetElementValue('RegionId');
    $("#StationNumberId").empty();
    $.get("/Param/ParamStationsFromRegionSecGet", { RegionId: RegionId }, function (data) {
        $.each(data, function (index, row) {
            $("#StationNumberId").append("<option value='" + row.StationId + "'>" + row.StationName + "</option>")
        });
    });
    $("#LaneNameId").val('0');
}

function ParamLSFromRegionSecXorGet() {
    var RegionId = GetElementValue('RegionId');
    $("#LSId").empty();
    $.get("/Param/ParamLSFromRegionSecGet", { RegionId: RegionId }, function (data) {
        $.each(data, function (index, row) {
            $("#LSId").append("<option value='" + row.LSId + "'>" + row.LSId + '-' + row.LSName + "</option>")
        });
    });
}

function ParamCellsFromRegionSecXorGet() {
    var RegionId = GetElementValue('RegionId');
    $("#CellId").empty();
    $.get("/Param/ParamCellsFromRegionSecGet", { RegionId: RegionId }, function (data) {
        $.each(data, function (index, row) {
            $("#CellId").append("<option value='" + row.CellId + "'>" + row.CellId + '-' + row.CellName + "</option>")
        });
    });
}

function ParamShiftsGet() {
    var item = document.getElementById('ShiftId');
    item.options.length = 0;
    var node = document.createElement("option");
    node.value = 0;
    var textnode = document.createTextNode("--");
    node.appendChild(textnode);
    item.appendChild(node);
    $.get("/Param/ParamShiftsGet", function (data) {
        $.each(data, function (index, row) {
            node = document.createElement("option");
            node.value = row.ShiftId;
            textnode = document.createTextNode(row.ShiftName);
            node.appendChild(textnode);
            item.appendChild(node);
        });
    });
}

function ParamCashiersGet() {
    var CellId = GetElementValue('CellId');
    var CashierNumberKey = GetElementValue('CashierNumberKeyId');
    var CashierNameKey = GetElementValue('CashierNameKeyId');
    $("#CashierRowId").empty();
    $.get("/Param/ParamCashiersGet", { CellId: CellId, CashierNumberKey: CashierNumberKey, CashierNameKey: CashierNameKey }, function (data) {
        $.each(data, function (index, row) {
            $("#CashierRowId").append("<option value='" + row.CashierRowId + "'>" + row.CashierNumber + ' ' + row.CashierName + "</option>")
        });
    });
    $("#CashierRowId").append("<option value='" + 0 + "'>" + "--" + "</option>");
    $("#CashierRowId").val('0');
}

function ParamCashiersFromCellGet() {
    var CellId = GetElementValue('CellId');
    var CashierNumberKey = GetElementValue('CashierNumberKeyId');
    var CashierNameKey = GetElementValue('CashierNameKeyId');
    $("#CashierRowId").empty();
    $.get("/Param/ParamCashiersFromCellGet", { CellId: CellId, CashierNumberKey: CashierNumberKey, CashierNameKey: CashierNameKey }, function (data) {
        $.each(data, function (index, row) {
            $("#CashierRowId").append("<option value='" + row.CashierRowId + "'>" + row.CashierNumber + ' ' + row.CashierName + "</option>")
        });
    });
    $("#CashierRowId").append("<option value='" + 0 + "'>" + "--" + "</option>");
    $("#CashierRowId").val('0');
}

function ParamUsersGet() {
    var Keyword = GetElementValue('KeywordIdFix');
    $("#UserIdFix").empty();
    $.get("/Param/ParamUsersGet", { Keyword: Keyword }, function (data) {
        $.each(data, function (index, row) {
            $("#UserIdFix").append("<option value='" + row.UserId + "'>" + row.FullName + "</option>")
        });
    });
    $("#UserIdFix").append("<option value='" + 0 + "'>" + "--" + "</option>");
    $("#UserIdFix").val('0');
}

function ParamBreaksGet() {
    var ItemId = GetElementValue('ItemId');
    $("#BreakId").empty();
    $.get("/Param/ParamBreaksGet", { Input: ItemId }, function (data) {
        $.each(data, function (index, row) {
            $("#BreakId").append("<option value='" + row.BreakId + "'>" + row.BreakId + ' ' + row.BreakName + "</option>")
        });
    });
    $("#BreakId").append("<option value='" + 0 + "'>" + "--" + "</option>");
    $("#BreakId").val('0');

    //ShowReport('StationNumberId' + 'Parent');
    //HideReport('LaneNameId' + 'Parent');
    //HideReport('PdvId' + 'Parent');

    //ParamResetDropDownList('LaneNameId');
    //ParamResetDropDownList('PdvId');
}

function ParamZonesGet(ModuleId) {
    $("#ZoneId").empty();
    $.get("/Param/ParamZonesGet", { Input: ModuleId }, function (data) {
        $.each(data, function (index, row) {
            $("#ZoneId").append("<option value='" + row.ZoneId + "'>" + row.ZoneName + "</option>")
        });
    });
    //$("#StationNumberId").append("<option value='" + 0 + "'>" + "--" + "</option>");
    //$("#StationNumberId").val('0');
    //$("#LaneNameId").val('0');
    //ShowReport('StationNumberId' + 'Parent');
    //HideReport('LaneNameId' + 'Parent');
    //HideReport('PdvId' + 'Parent');

    //ParamResetDropDownList('LaneNameId');
    //ParamResetDropDownList('PdvId');
}

function ParamLanesGet() {
    $("#LaneNameId").empty();
    var SiteId = GetElementValue('SiteId');
    var StationNumber = GetElementValue('StationNumberId');
    $.get("/Param/ParamLanesGet", { SiteId: SiteId, StationNumber: StationNumber }, function (data) {
        $.each(data, function (index, row) {
            $("#LaneNameId").append("<option value='" + row.LaneName + "'>" + row.LaneName + "</option>")
        });
    });
    $("#LaneNameId").append("<option value='" + 0 + "'>" + "--" + "</option>");
    $("#LaneNameId").val('0');
    ShowReport('LaneNameId' + 'Parent');
}


function ParamLanesAllFromStationLSGet() {
    $("#LaneNameId").empty();
    var LSId = GetElementValue('LSId');
    var StationNumber = GetElementValue('StationNumberId');
    $.get("/Param/ParamLanesAllFromStationLSGet", { LSId: LSId, StationNumber: StationNumber }, function (data) {
        $.each(data, function (index, row) {
            $("#LaneNameId").append("<option value='" + row.LaneName + "'>" + row.LaneName + "</option>")
        });
    });
    $("#LaneNameId").append("<option value='" + 0 + "'>" + "--" + "</option>");
    $("#LaneNameId").val('0');
    ShowReport('LaneNameId' + 'Parent');
}

function ParamLanesAllFromStationCellGet() {
    $("#LaneNameId").empty();
    var CellId = GetElementValue('CellId');
    var StationNumber = GetElementValue('StationNumberId');
    $.get("/Param/ParamLanesAllFromStationCellGet", { CellId: CellId, StationNumber: StationNumber }, function (data) {
        $.each(data, function (index, row) {
            $("#LaneNameId").append("<option value='" + row.LaneName + "'>" + row.LaneName + "</option>")
        });
    });
    $("#LaneNameId").append("<option value='" + 0 + "'>" + "--" + "</option>");
    $("#LaneNameId").val('0');
    ShowReport('LaneNameId' + 'Parent');
}

function ParamLanesAllFromStationLSSensGet() {
    $("#LaneNameId").empty();
    var LSId = GetElementValue('LSId');
    var StationNumber = GetElementDropDownListValue('StationNumberId');
    var Sens = GetElementDropDownListValue('SensId');
    $.get("/Param/ParamLanesAllFromStationLSSensGet", { LSId: LSId, StationNumber: StationNumber, Sens: Sens }, function (data) {
        $.each(data, function (index, row) {
            $("#LaneNameId").append("<option value='" + row.LaneName + "'>" + row.LaneName + "</option>")
        });
    });
    $("#LaneNameId").append("<option value='" + 0 + "'>" + "--" + "</option>");
    $("#LaneNameId").val('0');
    //ShowReport('LaneNameId' + 'Parent');
}


function ParamLanesAllFromStationLSSensXorGet() {
    $("#LaneNameId").empty();
    var LSId = GetElementValue('LSId');
    var StationNumber = GetElementDropDownListValue('StationNumberId');
    var Sens = GetElementDropDownListValue('SensId');
    $.get("/Param/ParamLanesAllFromStationLSSensGet", { LSId: LSId, StationNumber: StationNumber, Sens: Sens }, function (data) {
        $.each(data, function (index, row) {
            $("#LaneNameId").append("<option value='" + row.LaneName + "'>" + row.LaneName + "</option>")
        });
    });
    //$("#LaneNameId").append("<option value='" + 0 + "'>" + "--" + "</option>");
    //$("#LaneNameId").val('0');
    //ShowReport('LaneNameId' + 'Parent');
}

function ParamBornesFromStationLSGet() {
    $("#LaneNameIdO").empty();
    var LSId = GetElementValue('LSIdO');
    var StationNumber = GetElementValue('StationNumberIdO');
    $.get("/Param/ParamBornesFromStationLSGet", { LSId: LSId, StationNumber: StationNumber }, function (data) {
        $.each(data, function (index, row) {
            $("#LaneNameIdO").append("<option value='" + row.LaneName + "'>" + row.LaneName + "</option>")
        });
    });
    $("#LaneNameIdO").append("<option value='" + 0 + "'>" + "--" + "</option>");
    $("#LaneNameIdO").val('0');
    //ShowReport('LaneNameId' + 'Parent');
}

function ParamLanesOutFromStationLSGet() {
    $("#LaneNameId").empty();
    var LSId = GetElementValue('LSId');
    var StationNumber = GetElementValue('StationNumberId');
    $.get("/Param/ParamLanesOutFromStationLSGet", { LSId: LSId, StationNumber: StationNumber }, function (data) {
        $.each(data, function (index, row) {
            $("#LaneNameId").append("<option value='" + row.LaneName + "'>" + row.LaneName + "</option>")
        });
    });
    $("#LaneNameId").append("<option value='" + 0 + "'>" + "--" + "</option>");
    $("#LaneNameId").val('0');
    //ShowReport('LaneNameId' + 'Parent');
}

function ParamLanesLaneGet() {
    $("#LaneNameId").empty();
    var SiteId = GetElementValue('SiteId');
    var StationNumber = GetElementValue('StationNumberId');
    $.get("/Param/ParamLanesLaneGet", { SiteId: SiteId, StationNumber: StationNumber }, function (data) {
        $.each(data, function (index, row) {
            $("#LaneNameId").append("<option value='" + row.LaneName + "'>" + row.LaneName + "</option>")
        });
    });
    $("#LaneNameId").append("<option value='" + 0 + "'>" + "--" + "</option>");
    $("#LaneNameId").val('0');
    //ShowReport('LaneNameId' + 'Parent');
}


function ParamLanesAllGet(SiteId, StationNumber) {
    $("#LaneNameId").empty();
    $.get("/Param/ParamLanesGet", { SiteId: SiteId, StationNumber: StationNumber }, function (data) {
        $.each(data, function (index, row) {
            $("#LaneNameId").append("<option value='" + row.LaneName + "'>" + row.LaneName + "</option>")
        });
    });
    $("#LaneNameId").append("<option value='" + 0 + "'>" + "--" + "</option>");
    //$("#LaneNameId").val('0');
    //ShowReport('LaneNameId' + 'Parent');
}

function ParamLanesOrigineAllGet(SiteId, StationNumber) {
    $("#LaneNameIdO").empty();
    $.get("/Param/ParamLanesGet", { SiteId: SiteId, StationNumber: StationNumber }, function (data) {
        $.each(data, function (index, row) {
            $("#LaneNameIdO").append("<option value='" + row.LaneName + "'>" + row.LaneName + "</option>")
        });
    });
    $("#LaneNameIdO").append("<option value='" + 0 + "'>" + "--" + "</option>");
    //$("#LaneNameId").val('0');
    //ShowReport('LaneNameId' + 'Parent');
}

function ParamLanesGetOrigine() {
    $("#LaneNameIdO").empty();
    var SiteIdO = GetElementValue('SiteIdO');
    var StationNumberO = GetElementValue('StationNumberIdO');
    $.get("/Param/ParamLanesGet", { SiteId: SiteIdO, StationNumber: StationNumberO }, function (data) {
        $.each(data, function (index, row) {
            $("#LaneNameIdO").append("<option value='" + row.LaneName + "'>" + row.LaneName + "</option>")
        });
    });
    $("#LaneNameIdO").append("<option value='" + 0 + "'>" + "--" + "</option>");
    $("#LaneNameIdO").val('0');
    ShowReport('LaneNameIdO' + 'Parent');
}


function ParamCexGet() {
    $("#CexId").empty();
    var RegionId = GetElementValue('RegionId');
    $.get("/Param/ParamCexGet", { Input: RegionId }, function (data) {
        $.each(data, function (index, row) {
            $("#CexId").append("<option value='" + row.CexId + "'>" + row.CexNameShort + "</option>")
        });
    });
    //$("#CexId").append("<option value='" + 0 + "'>" + "--" + "</option>");
    //$("#LaneNameId").val('0');
    //ShowReport('LaneNameId' + 'Parent');
}

function ParamLanesFromCexGet() {
    $("#LaneNameId").empty();
    var CexId = GetElementValue('CexId');
    var StationNumber = GetElementValue('StationNumberId');
    $.get("/Param/ParamLanesFromCexGet", { CexId: CexId, StationNumber: StationNumber }, function (data) {
        $.each(data, function (index, row) {
            $("#LaneNameId").append("<option value='" + row.LaneName + "'>" + row.LaneName + "</option>")
        });
    });
    //$("#LaneNameId").append("<option value='" + 0 + "'>" + "--" + "</option>");
    //$("#LaneNameId").val('0');
    //ShowReport('LaneNameId' + 'Parent');
}

function ParamStationsGet() {
    $("#StationNumberId").empty();
    $.get("/Param/ParamStationsGet", { CexId: $("#CexId").val(), BagContainerId: $("#BagContainerId").val() }, function (data) {
        $.each(data, function (index, row) {
            $("#StationNumberId").append("<option value='" + row.StationNumber + "'>" + row.StationName + "</option>")
        });
    });
    $("#StationNumberId").append("<option value='" + 0 + "'>" + "--" + "</option>");
    $("#StationNumberId").val('0');

    ShowReport('StationNumberId' + 'Parent');
    //HideReport('LaneNameId' + 'Parent');
    //HideReport('PdvId' + 'Parent');

    ParamResetDropDownList('LaneNameId');
    ParamResetDropDownList('PdvId');
}


function ParamStationsAllGet(SiteId, BagContainerId) {
    $("#StationNumberId").empty();
    $.get("/Param/GetStations", { SiteId: SiteId, BagContainerId: BagContainerId }, function (data) {
        $.each(data, function (index, row) {
            $("#StationNumberId").append("<option value='" + row.StationNumber + "'>" + row.StationName + " (" + row.StationCeNumber + ")</option>")
        });
    });
    $("#StationNumberId").append("<option value='" + 0 + "'>" + "--" + "</option>");
}

function ParamStationsAllSecGet(SiteId, BagContainerId) {
    $("#StationNumberId").empty();
    $.get("/Param/ParamStationsAllSecGet", { SiteId: SiteId, BagContainerId: BagContainerId }, function (data) {
        $.each(data, function (index, row) {
            $("#StationNumberId").append("<option value='" + row.StationNumber + "'>" + row.StationName + " (" + row.StationCeNumber + ")</option>")
        });
    });
    //$("#StationNumberId").append("<option value='" + 0 + "'>" + "--" + "</option>");
}

function ParamStationsAllSecWithZeroGet(SiteId, BagContainerId, IsZero) {
    $("#StationNumberId").empty();
    $.get("/Param/ParamStationsAllSecGet", { SiteId: SiteId, BagContainerId: BagContainerId }, function (data) {
        $.each(data, function (index, row) {
            $("#StationNumberId").append("<option value='" + row.StationNumber + "'>" + row.StationName + " (" + row.StationCeNumber + ")</option>")
        });
    });

    if (IsZero) {
        $("#StationNumberId").append("<option value='" + 0 + "'>" + "--" + "</option>");
    }
}

function ParamStationsOAllSecGet(SiteId, BagContainerId) {
    $("#StationNumberIdO").empty();
    $.get("/Param/ParamStationsAllSecGet", { SiteId: SiteId, BagContainerId: BagContainerId }, function (data) {
        $.each(data, function (index, row) {
            $("#StationNumberIdO").append("<option value='" + row.StationNumber + "'>" + row.StationName + " (" + row.StationCeNumber + ")</option>")
        });
    });
    //$("#StationNumberId").append("<option value='" + 0 + "'>" + "--" + "</option>");
}

function ParamStationsOAllSecWithZeroGet(SiteId, BagContainerId, IsZero) {
    $("#StationNumberIdO").empty();
    $.get("/Param/ParamStationsAllSecGet", { SiteId: SiteId, BagContainerId: BagContainerId }, function (data) {
        $.each(data, function (index, row) {
            $("#StationNumberIdO").append("<option value='" + row.StationNumber + "'>" + row.StationName + " (" + row.StationCeNumber + ")</option>")
        });
    });
    if (IsZero) {
        $("#StationNumberIdO").append("<option value='" + 0 + "'>" + "--" + "</option>");
    }
}

function ParamStationsOrigineAllGet(SiteId, BagContainerId) {
    $("#StationNumberId").empty();
    $.get("/Param/GetStations", { SiteId: SiteId, BagContainerId: BagContainerId }, function (data) {
        $.each(data, function (index, row) {
            $("#StationNumberIdO").append("<option value='" + row.StationNumber + "'>" + row.StationName + " (" + row.StationCeNumber + ")</option>")
        });
    });
    $("#StationNumberIdO").append("<option value='" + 0 + "'>" + "--" + "</option>");
}

function ParamStationsFromCexGet() {
    $("#StationNumberId").empty();
    $.get("/Param/ParamStationsGet", { CexId: $("#CexId").val(), BagContainerId: $("#BagContainerId").val() }, function (data) {
        $.each(data, function (index, row) {
            $("#StationNumberId").append("<option value='" + row.StationNumber + "'>" + row.StationName + "</option>")
        });
    });
    $("#StationNumberId").append("<option value='" + 0 + "'>" + "--" + "</option>");
    $("#StationNumberId").val('0');

    ShowReport('StationNumberId' + 'Parent');
    HideReport('LaneNameId' + 'Parent');
    HideReport('PdvId' + 'Parent');

    ParamResetDropDownList('LaneNameId');
    ParamResetDropDownList('PdvId');
}


function ParamStationsFromLSXorGet(FormIndex, CexId, LSId) {
    $("#StationNumberId").empty();
    $.get("/Param/ParamStationsFromLSGet", { CexId: CexId, LSId: LSId }, function (data) {
        $.each(data, function (index, row) {
            $("#StationNumberId" + FormIndex).append("<option value='" + row.StationNumber + "'>" + row.StationName + "</option>")
        });
    });
    //$("#StationNumberId").append("<option value='" + 0 + "'>" + "--" + "</option>");
    //$("#StationNumberId").val('0');

    //ShowReport('StationNumberId' + 'Parent');
    // HideReport('LaneNameId' + 'Parent');
    //HideReport('PdvId' + 'Parent');

    ParamResetDropDownList('LaneNameId' + FormIndex);
    ParamResetDropDownList('PdvId' + FormIndex);
}

function ParamStationsFromLSSecGet() {
    var LSId = ElementDropDownListValueGet('LSId');
    $("#StationNumberId").empty();
    $.get("/Param/ParamStationsFromLSGet", { "LSId": LSId }, function (data) {
        $.each(data, function (index, row) {
            $("#StationNumberId").append("<option value='" + row.StationNumber + "'>" + row.StationName + "</option>")
        });
    });
    $("#StationNumberId").append("<option value='" + 0 + "'>" + "--" + "</option>");
    $("#StationNumberId").val('0');
    $("#LaneNameId").val('0');
    //ShowReport('StationNumberId' + 'Parent');
    //HideReport('LaneNameId' + 'Parent');
    //HideReport('PdvId' + 'Parent');

    //ParamResetDropDownList('LaneNameId');
    //ParamResetDropDownList('PdvId');
}

function ParamStationsOFromLSOGet() {
    var LSId = GetElementValue('LSIdO');
    $("#StationNumberIdO").empty();
    $.get("/Param/ParamStationsFromLSGet", { LSId: LSId }, function (data) {
        $.each(data, function (index, row) {
            $("#StationNumberIdO").append("<option value='" + row.StationNumber + "'>" + row.StationName + "</option>")
        });
    });
    $("#StationNumberIdO").append("<option value='" + 0 + "'>" + "--" + "</option>");
    $("#StationNumberIdO").val('0');
    $("#LaneNameIdO").val('0');

    //ShowReport('StationNumberId' + 'Parent');
    //HideReport('LaneNameId' + 'Parent');
    //HideReport('PdvId' + 'Parent');

    //ParamResetDropDownList('LaneNameId');
    //ParamResetDropDownList('PdvId');
}

function GetElementValue(Id) {
    var item = document.getElementById(Id);
    var value = item.value;
    return value;
}

function ElementValueGet(Id) {
    var item = document.getElementById(Id);
    var value = item.value;
    return value;
}

function ElementBooleanGet(ElementId) {
    return new Boolean($('#' + ElementId + '').is(":checked"));
}

function ElementBooleanSet(ElementId, Value) {
    document.getElementById(ElementId).checked = Value;
}

function ElementBitSet(ElementId, Value) {

    var checked = false;
    if (Value == 1) {
        checked = true;
    }

    document.getElementById(ElementId).checked = checked;
}

function ElementInputSet(ElementId, Value) {
    document.getElementById(ElementId).value = Value;
}

function ElementInputDateValueSet(ElementId, Year, Month, Day) {
    document.getElementById(ElementId).value = Year + '-' + GetDigits(Month, 2) + '-' + GetDigits(Day, 2);
}

function GetElementDropDownListValue(Id) {
    var item = document.getElementById(Id);
    var value = item.options[item.selectedIndex].value;
    return value;
}

function ElementDropDownListValueGet(Id) {
    var item = document.getElementById(Id);
    var value = item.options[item.selectedIndex].value;
    return value;
}

function ElementDropDownListValueMultipleGet(Id) {
    /*return '\'' + $('#' + Id).val() + '\'';*/
    return encodeURIComponent($('#' + Id).val());
    /* return $('#' + Id).val();*/
    /*return '"' + $('#' + Id).val() + '"';*/
    //return new String($('#' + Id).val());
}

function GetElementDateString(Id) {
    //Get YYYYMMDD from date-picker
    var item = document.getElementById(Id);
    var value = item.value.replace('-', '').replace('-', '');
    return value;
}

function GetDigits(OldValue, DigitsNumber) {
    var len = parseInt(new String(OldValue).length);
    var lenmax = parseInt(DigitsNumber);
    var gap = lenmax - len;
    var NewValue = new String(OldValue);
    //alert(gap);
    if (gap > 0) {
        for (i = 0; i < gap; i++) {
            NewValue = "0" + new String(NewValue);
        }
    }
    return NewValue;
}

function DisplayHtmlRawParam(HtmlRaw, Pattern, ColNumber) {
    var JsHtmlRaw = HtmlRaw;
    $('#' + Pattern + 'ParamCol' + ColNumber + 'Id').append(JsHtmlRaw.html);
};

function DisplayHtmlRaw(HtmlRaw, ElementParentId) {
    var Element = HtmlRaw;
    $('#' + ElementParentId).append(Element.html);
};


function DataTableAdd(HtmlRaw, ElementParentId) {
    var Element = HtmlRaw;
    $('#' + ElementParentId).append(Element.html);
};

function RemoveElement(ElementId) {
    var Element = document.getElementById(ElementId);
    $("label[for='" + ElementId + "']").hide();
    Element.parentNode.removeChild(Element);
}

function AddInputElement(ParentId, ElementId, ElementLabel, ElementType) {
    var HtmlParent = document.getElementById(ParentId);
    var InputElement =
        '<div id="' + ElementId + 'ParentId' + '" class="form-group row mb-1">' +
        '<label for= "' + ElementId + '" class="col-2 col-form-label" >' + ElementLabel + '</label >' +
        '<div class="col-sm-6">' +
        '<input class="form-control" type="' + ElementType + '" id="' + ElementId + '">' +
        '</div>' +
        '</div>'
    HtmlParent.innerHTML = InputElement;
}

function AddElement(ParentId, elementTag, elementId, html) {
    // Adds an element to the document
    var p = document.getElementById(ParentId);
    var newElement = document.createElement(elementTag);
    newElement.setAttribute('id', elementId);
    newElement.innerHTML = html;
    p.appendChild(newElement);
}

//-----------------leftbar
jQuery(function ($) {

    $(".sidebar-dropdown > a").click(function () {
        $(".sidebar-submenu").slideUp(200);
        if (
            $(this)
                .parent()
                .hasClass("active")
        ) {
            $(".sidebar-dropdown").removeClass("active");
            $(this)
                .parent()
                .removeClass("active");
        } else {
            $(".sidebar-dropdown").removeClass("active");
            $(this)
                .next(".sidebar-submenu")
                .slideDown(200);
            $(this)
                .parent()
                .addClass("active");
        }
    });

    $("#close-sidebar").click(function () {
        $(".page-wrapper").removeClass("toggled");
    });
    $("#show-sidebar").click(function () {
        $(".page-wrapper").addClass("toggled");
    });
});









function ShowReport(Pattern) {
    $('#' + Pattern).show();
}

function ShowParent(Pattern) {
    $('#' + Pattern + 'Parent').show();
}

function ShowTableReport(TableId) {
    $('#' + TableId + 'TableReportId').show();
}

function ShowNavReport(NavId) {
    $('#' + NavId + 'NavReportId').show();
}

function ShowGridReport(GridId) {
    $('#' + GridId + 'GridReportId').show();
}

function ShowPageReport(PageId) {
    $('#' + PageId + 'PageReportId').show();
}

function ActivateReport(Pattern, flag) {
    if (flag == true) {
        $('#' + Pattern).show();
    }
    else {
        $('#' + Pattern).hide();
    }

}

function DhmValue12Set(ElementId, Year, Month, Day, Hour, Minute) {
    document.getElementById(ElementId).value = Year + '-' + GetDigits(Month, 2) + '-' + GetDigits(Day, 2) + 'T' + GetDigits(Hour, 2) + ':' + GetDigits(Minute, 2);
}

function ShowPage(HeaderIndex, TimeIndex) {
    ShowReport('Page' + HeaderIndex + TimeIndex + '_PageReportId');
}

function ShowGrid(HeaderIndex, TimeIndex, PageIndex, PageRowIndex, PatternIndex) {
    ShowReport('Grid' + HeaderIndex + TimeIndex + PageIndex + PageRowIndex + PatternIndex + '_GridReportId');
}

function ShowControl(ControlPattern) {
    $('#' + ControlPattern + '').show();
    $("label[for='" + ControlPattern + "']").show();
}

function HideReport(ReportId) {
    $('#' + ReportId).hide();
}

function HideParent(ElementId) {
    $('#' + ElementId + 'Parent').hide();
}

function HideTableReport(TableId) {
    $('#' + TableId + 'TableReportId').hide();
}

function HideNavReport(NavId) {
    $('#' + NavId + 'NavReportId').hide();
}

function HideGridReport(GridId) {
    $('#' + GridId + 'GridReportId').hide();
}

function HidePageReport(PageId) {
    $('#' + PageId + 'PageReportId').hide();
}

function HideChartReport(TableId) {
    $('#' + TableId + 'ChartReportId').hide();
}

function HideElement(ElementId) {
    $('#' + ElementId).hide();
}

function ShowElement(ElementId) {
    $('#' + ElementId).show();
}

function HideControl(ControlPattern) {
    $('#' + ControlPattern + '').hide();
    $("label[for='" + ControlPattern + "']").hide();
}

function SetButtonIcon(ButtonId, IconName) {
    $('#' + ButtonId).find('span').attr('class', IconName);
}

function GetDateFormat(dateObj, format) {
    //var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var curr_date = dateObj.getDate();
    var curr_month = dateObj.getMonth();
    curr_month = curr_month + 1;
    var curr_year = dateObj.getFullYear();
    var curr_min = dateObj.getMinutes();
    var curr_hr = dateObj.getHours();
    var curr_sc = dateObj.getSeconds();
    if (curr_month.toString().length == 1)
        curr_month = '0' + curr_month;
    if (curr_date.toString().length == 1)
        curr_date = '0' + curr_date;
    if (curr_hr.toString().length == 1)
        curr_hr = '0' + curr_hr;
    if (curr_min.toString().length == 1)
        curr_min = '0' + curr_min;

    if (format == 1)//dd-mm-yyyy
    {
        return curr_date + "-" + curr_month + "-" + curr_year;
    }
    else if (format == 2)//yyyy-mm-dd
    {
        return curr_year + "-" + curr_month + "-" + curr_date;
    }
    else if (format == 3)//dd/mm/yyyy
    {
        return curr_date + "/" + curr_month + "/" + curr_year;
    }
    else if (format == 4)// MM/dd/yyyy HH:mm:ss
    {
        return curr_date + "/" + curr_month + "/" + curr_year + " " + curr_hr + ":" + curr_min + ":" + curr_sc;
    }
}



function GetColumnArraySub(DataTableId, Index, LabelLenght) {
    var i = 1;
    var ColumnArray = [];
    var column = $('#' + DataTableId + '').DataTable().column(Index);
    column.data().each(function (d, j) {
        ColumnArray.length = i - 1;
        ColumnArray = ReplaceAtArray(ColumnArray, i - 1, new String(d).substr(0, LabelLenght));
        i = i + 1;
    });
    return ColumnArray;
}

function GetColumnArrayDate(DataTableId, Index, LabelLenght) {
    var i = 1;
    var ColumnArray = [];
    var column = $('#' + DataTableId + '').DataTable().column(Index);
    var Rowdate;
    column.data().each(function (d, j) {
        ColumnArray.length = i - 1;
        if (d === null) {
            Rowdate = "";
        }
        else {
            var pattern = /Date\(([^)]+)\)/;//date format from server side
            var results = pattern.exec(d);
            var dt = new Date(parseFloat(results[1]));
            Rowdate = dt.toLocaleDateString() + " " + dt.toLocaleTimeString();
        }
        ColumnArray = ReplaceAtArray(ColumnArray, i - 1, Rowdate);
        i = i + 1;
    });
    return ColumnArray;
}

function GetColumnArrayTwoTime(DataTableId, TimeIndex, DataIndex) {
    var i = 1;
    var ColumnArray = [];
    var Couple = ['', ''];
    var columnTime = $('#' + DataTableId + '').DataTable().column(TimeIndex);
    var columnData = $('#' + DataTableId + '').DataTable().column(DataIndex);
    columnTime.data().each(function (t, j) {
        ColumnArray.length = i - 1;
        Couple = [t, ''];
        ColumnArray = ReplaceAtArray(ColumnArray, i - 1, Couple);
        i = i + 1;
    });
    return ColumnArray;
}

function ReplaceAtArray(array, index, value) {
    const ret = array.slice(0);
    ret[index] = value;
    return ret;
}

function FormatArrayFourGet(Value0, Value1, Value2, Value3) {
    var RowArray = [];
    RowArray.length = 4;
    RowArray = ReplaceAtArray(RowArray, 0, Value0);
    RowArray = ReplaceAtArray(RowArray, 1, Value1);
    RowArray = ReplaceAtArray(RowArray, 2, Value2);
    RowArray = ReplaceAtArray(RowArray, 3, Value3);
    return RowArray;
}

function FormatArrayFiveGet(Value0, Value1, Value2, Value3, Value4) {
    var RowArray = [];
    RowArray.length = 5;
    RowArray = ReplaceAtArray(RowArray, 0, Value0);
    RowArray = ReplaceAtArray(RowArray, 1, Value1);
    RowArray = ReplaceAtArray(RowArray, 2, Value2);
    RowArray = ReplaceAtArray(RowArray, 3, Value3);
    RowArray = ReplaceAtArray(RowArray, 4, Value4);
    return RowArray;
}

function FormatArraySixGet(Value0, Value1, Value2, Value3, Value4, Value5) {
    var RowArray = [];
    RowArray.length = 6;
    RowArray = ReplaceAtArray(RowArray, 0, Value0);
    RowArray = ReplaceAtArray(RowArray, 1, Value1);
    RowArray = ReplaceAtArray(RowArray, 2, Value2);
    RowArray = ReplaceAtArray(RowArray, 3, Value3);
    RowArray = ReplaceAtArray(RowArray, 4, Value4);
    RowArray = ReplaceAtArray(RowArray, 5, Value5);
    return RowArray;
}

function FormatArraySevenGet(Value0, Value1, Value2, Value3, Value4) {
    var RowArray = [];
    RowArray.length = 5;
    RowArray = ReplaceAtArray(RowArray, 0, Value0);
    RowArray = ReplaceAtArray(RowArray, 1, Value1);
    RowArray = ReplaceAtArray(RowArray, 2, Value2);
    RowArray = ReplaceAtArray(RowArray, 3, Value3);
    RowArray = ReplaceAtArray(RowArray, 4, Value4);
    return RowArray;
}

function FormatArrayEightGet(Value0, Value1, Value2, Value3, Value4, Value5, Value6, Value7, Value8) {
    var RowArray = [];
    RowArray.length = 8;
    RowArray = ReplaceAtArray(RowArray, 0, Value0);
    RowArray = ReplaceAtArray(RowArray, 1, Value1);
    RowArray = ReplaceAtArray(RowArray, 2, Value2);
    RowArray = ReplaceAtArray(RowArray, 3, Value3);
    RowArray = ReplaceAtArray(RowArray, 4, Value4);
    RowArray = ReplaceAtArray(RowArray, 5, Value4);
    RowArray = ReplaceAtArray(RowArray, 6, Value4);
    RowArray = ReplaceAtArray(RowArray, 7, Value4);
    RowArray = ReplaceAtArray(RowArray, 8, Value4);
    return RowArray;
}

function FormatArrayThreeGet(Value0, Value1, Value2) {
    var RowArray = [];
    RowArray.length = 3;
    RowArray = ReplaceAtArray(RowArray, 0, Value0);
    RowArray = ReplaceAtArray(RowArray, 1, Value1);
    RowArray = ReplaceAtArray(RowArray, 2, Value2);
    return RowArray;
}

function GetBackgroundColor(DataTableId) {
    var i = 1;
    var BackgroundColor = [];
    var column = $('#' + DataTableId + '').DataTable().column(0);
    column.data().each(function (d, j) {
        BackgroundColor.length = i - 1;
        BackgroundColor = ReplaceAtArray(BackgroundColor, i - 1, GetDynamicColor());
        i = i + 1;
    });
    return BackgroundColor;
}

function GetDynamicColor() {
    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    return "rgb(" + r + "," + g + "," + b + ")";
}

function GetDateStringFromDatePicker(DatePickerId) {
    var DateStringDatePicker = new String($('#' + DatePickerId).val().replace("-", "").replace("-", ""));
    var YearS = new String(DateStringDatePicker).substr(0, 4);
    var MonthS = new String(DateStringDatePicker).substr(4, 2);
    var DayS = new String(DateStringDatePicker).substr(6, 2);

    var DateString = new String(DayS + MonthS + YearS);
    return DateString;
}

function ElementDateStringFromDatePickerGet(DatePickerId) {
    var DateStringDatePicker = new String($('#' + DatePickerId).val().replace("-", "").replace("-", ""));
    var YearS = new String(DateStringDatePicker).substr(0, 4);
    var MonthS = new String(DateStringDatePicker).substr(4, 2);
    var DayS = new String(DateStringDatePicker).substr(6, 2);

    var DateString = new String(DayS + MonthS + YearS);
    return DateString;
}

function GetDhmStringFromDatePicker(DatePickerId) {


    var DateStringDatePicker = new String($('#' + DatePickerId).val().replace("-", "").replace("-", "").replace(" ", "").replace(":", "").replace("T", ""));

    var i = DateStringDatePicker.length;
    var YearS = '';
    var MonthS = '';
    var DayS = '';
    var HourS = '';
    var MinuteS = '';
    var DateString = '';

    if (i == 8) {
        YearS = new String(DateStringDatePicker).substr(0, 4);
        MonthS = new String(DateStringDatePicker).substr(4, 2);
        DayS = new String(DateStringDatePicker).substr(6, 2);

        DateString = new String(DayS + MonthS + YearS);
    }
    if (i == 12) {
        YearS = new String(DateStringDatePicker).substr(0, 4);
        MonthS = new String(DateStringDatePicker).substr(4, 2);
        DayS = new String(DateStringDatePicker).substr(6, 2);
        HourS = new String(DateStringDatePicker).substr(8, 2);
        MinuteS = new String(DateStringDatePicker).substr(10, 2);

        DateString = new String(DayS + MonthS + YearS + HourS + MinuteS);
    }

    if (i == 4) {
        HourS = new String(DateStringDatePicker).substr(0, 2);
        MinuteS = new String(DateStringDatePicker).substr(2, 2);

        DateString = new String(HourS) + '' + new String(MinuteS);
    }

    return DateString;
}

function GetMonhtStringFromDatePicker(DatePickerId) {
    var MonthStringDatePicker = new String($('#' + DatePickerId).val().replace("-", ""));
    var YearS = new String(MonthStringDatePicker).substr(0, 4);
    var MonthS = new String(MonthStringDatePicker).substr(4, 2);

    var MonthString = new String(MonthS + YearS);
    return MonthString;
}

function GetDateValueFromDateString(DateString) {
    var YearS = parseInt(DateString.substr(4, 4));
    var MonthS = parseInt(DateString.substr(2, 2));
    var DayS = parseInt(DateString.substr(0, 2));
    var DateValue = new Date(YearS, MonthS, DayS, 0, 0, 0, 0);
    //alert(DateValue);
    return DateValue;
}

function DataTableDateValueFromDateStringGet(DateString) {
    var YearS = parseInt(DateString.substr(4, 4));
    var MonthS = parseInt(DateString.substr(2, 2));
    var DayS = parseInt(DateString.substr(0, 2));
    var DateValue = GetDigits(new String(DayS), 2) + '/' + GetDigits(new String(MonthS), 2) + '/' + new String(YearS);
    //alert(DateValue);
    return DateValue;
}

function GetDhmStringFromDhmPicker(DatePickerId) {


    var DateStringDatePicker = new String($('#' + DatePickerId).val().replace("-", "").replace("-", "").replace("T", "").replace(":", ""));

    var YearS = new String(DateStringDatePicker).substr(0, 4);
    var MonthS = new String(DateStringDatePicker).substr(4, 2);
    var DayS = new String(DateStringDatePicker).substr(6, 2);
    var HourS = new String(DateStringDatePicker).substr(8, 2);
    var MinuteS = new String(DateStringDatePicker).substr(10, 2);

    var DateString = new String(DayS + MonthS + YearS + HourS + MinuteS);
    return DateString;
}

function DataTableDhmStringFromDhmValueGet(DhmValue) {
    var DhmString = new String(DhmValue).replace("/", "").replace("/", "").replace(":", "").replace(":", "");
    return DhmString;
}

function GetFirstCellValue(TableId, ColumnIndex) {
    var value = 0;
    $('#' + TableId).DataTable().column(ColumnIndex).data().each(function (d, j) {
        value = d;
    });;
    return value;
}

function GetFirstCellPercentageValue(TableId, ColumnIndex, TotalColumnIndex) {

    var value = 0;
    var total = 0;
    var percentage = 0;

    $('#' + TableId).DataTable().column(ColumnIndex).data().each(function (d, j) {
        value = d;
    });;

    $('#' + TableId).DataTable().column(TotalColumnIndex).data().each(function (d, j) {
        total = d;
    });;

    if (total != 0 && total != null) {
        //percentage = (value / total * 100).toFixed(2);
        percentage = (value / total * 100).toFixed(2);
    };

    return percentage;

}

function GetDhmValueFromDataTableDate(data) {
    if (data === null) return "";
    var pattern = /Date\(([^)]+)\)/;
    var results = pattern.exec(data);
    var dt = new Date(parseFloat(results[1]));
    return dt.toLocaleDateString() + ' ' + dt.toLocaleTimeString();

    if (screen.width <= 400) {//iPhone6/7/8
        return dt.toLocaleDateString();
    }
    else {
        return dt.toLocaleDateString() + ' ' + dt.toLocaleTimeString();
    }
}

function DataTableDhmValueFromData(data) {
    if (data === null) return "";
    var pattern = /Date\(([^)]+)\)/;
    var results = pattern.exec(data);
    var dt = new Date(parseFloat(results[1]));
    var date = dt.toLocaleDateString() + ' ' + dt.toLocaleTimeString();

    //if (screen.width <= 400) {//iPhone6/7/8
    //    return dt.toLocaleDateString();
    //}
    //else {
    //    return dt.toLocaleDateString() + ' ' + dt.toLocaleTimeString();
    //}

    if (new String(date).substr(0, 10) == "31/12/1899" || new String(date).substr(0, 10) == "01/01/1900") {
        return '';
    }
    else {
        return date;
    }
}

function DataTableDateValueFromData(data) {
    if (data === null) return "";
    var pattern = /Date\(([^)]+)\)/;
    var results = pattern.exec(data);
    var dt = new Date(parseFloat(results[1]));
    var date = dt.toLocaleDateString();

    //if (screen.width <= 400) {//iPhone6/7/8
    //    return dt.toLocaleDateString();
    //}
    //else {
    //    return dt.toLocaleDateString() + ' ' + dt.toLocaleTimeString();
    //}

    if (new String(date).substr(0, 10) == "31/12/1899" || new String(date).substr(0, 10) == "01/01/1900") {
        return '';
    }
    else {
        return date;
    }
}

function GetDateValueFromDataTableDate(data) {
    if (data === null) return "";
    var pattern = /Date\(([^)]+)\)/;
    var results = pattern.exec(data);
    var dt = new Date(parseFloat(results[1]));
    return dt.toLocaleDateString();
}

function DataTableDateValueFromDate(data) {
    if (data === null) return "";
    var pattern = /Date\(([^)]+)\)/;
    var results = pattern.exec(data);
    var dt = new Date(parseFloat(results[1]));
    return dt.toLocaleDateString();
}

function DataTableDateValueFromRowGet(row) {
    if (screen.width <= 400) {//iPhone6/7/8
        return GetDigits(row['Day'], 2) + '/' + GetDigits(row['Month'], 2);
    }
    else {
        return GetDigits(row['Day'], 2) + '/' + GetDigits(row['Month'], 2) + '/' + GetDigits(row['Year'], 2);
    }
}

function DataTableDateValueStartFromRowGet(row) {
    if (screen.width <= 400) {//iPhone6/7/8
        return GetDigits(row['DayS'], 2) + '/' + GetDigits(row['MonthS'], 2);
    }
    else {
        return GetDigits(row['DayS'], 2) + '/' + GetDigits(row['MonthS'], 2) + '/' + GetDigits(row['YearS'], 2);
    }
}

function DataTableDateValueEndFromRowGet(row) {
    if (screen.width <= 400) {//iPhone6/7/8
        return GetDigits(row['DayE'], 2) + '/' + GetDigits(row['MonthE'], 2);
    }
    else {
        return GetDigits(row['DayE'], 2) + '/' + GetDigits(row['MonthE'], 2) + '/' + GetDigits(row['YearE'], 2);
    }
}

function DataTableDhmValueFromRowGet(row) {
    return GetDigits(row['Day'], 2) + '/' + GetDigits(row['Month'], 2) + '/' + GetDigits(row['Year'], 2) + ' '
        + GetDigits(row['Hour'], 2) + ':' + GetDigits(row['Minute'], 2) + ':' + GetDigits(row['Second'], 2);
}

function DataTableDhmValueGet(Year, Month, Day, Hour, Minute, Second) {
    var date = GetDigits(Day, 2) + '/' + GetDigits(Month, 2) + '/' + GetDigits(Year, 2) + ' '
        + GetDigits(Hour, 2) + ':' + GetDigits(Minute, 2) + ':' + GetDigits(Second, 2);

    if (date == '31/12/1899 00:00:00' || date == '01/01/1900 00:00:00') {
        return '';
    }
    else {
        return date;
    }
}

function DataTableDateValueGet(Year, Month, Day) {
    var date = GetDigits(Day, 2) + '/' + GetDigits(Month, 2) + '/' + GetDigits(Year, 2);
    if (date == '31/12/1899' || date == '01/01/1900') {
        return '';
    }
    else {
        return date;
    }
}

function GetDateValueNullableFromDataTableDate(data) {
    if (data === null) return "";
    var pattern = /Date\(([^)]+)\)/;
    var results = pattern.exec(data);
    var dt = new Date(parseFloat(results[1]));

    var date = dt.toLocaleDateString();

    if (date == "31/12/1899") {
        date = "";
    }

    return date;
}

function GetDhmValueNulFromDataTableDate(data) {
    if (data === null) return "";
    var pattern = /Date\(([^)]+)\)/;
    var results = pattern.exec(data);
    var dt = new Date(parseFloat(results[1]));

    var date = dt.toLocaleDateString();

    if (date == "31/12/1899") {
        date = "";
    }
    else {
        date = dt.toLocaleDateString() + ' ' + dt.toLocaleTimeString();
    }

    return date;
}

function GetDhmValueNullableFromDataTableDate(data) {
    if (data === null) return "";
    var pattern = /Date\(([^)]+)\)/;
    var results = pattern.exec(data);
    var dt = new Date(parseFloat(results[1]));

    var date = dt.toLocaleDateString() + ' ' + dt.toLocaleTimeString();

    if (new String(date).substr(0, 10) == "31/12/1899") {
        //return '<button style="background-color: Transparent;border: none;"><span class="fas fa-exclamation-triangle" style="color:red"></span></button>';
        return '';
    }
    else {
        return date;
    }
}




function DataTableDhmValueGet(Pattern, Id, data) {
    if (data === null) return "";
    var pattern = /Date\(([^)]+)\)/;
    var results = pattern.exec(data);
    var dt = new Date(parseFloat(results[1]));
    return '<span id="' + Pattern + Id + '" > ' + dt.toLocaleDateString() + ' ' + dt.toLocaleTimeString() + '</span>';
}

function GetHmFromDataTableDate(data) {
    if (data === null) return "";
    var pattern = /Date\(([^)]+)\)/;
    var results = pattern.exec(data);
    var dt = new Date(parseFloat(results[1]));

    var HM = dt.toLocaleTimeString().substr(0, 5);

    if (HM == "23:59") {
        return "--:--"
    }
    else {
        return HM;
    }
}


function GetDateJsFromDataTableDate(data) {
    if (data === null) return "";
    var pattern = /Date\(([^)]+)\)/;
    var results = pattern.exec(data);
    return new Date(parseFloat(results[1]));
}

function GetGapFromDataTable(data) {
    if (($('<div/>').text(data.toFixed(2)).html() !== "0.00") && ($('<div/>').text(data.toFixed(2)).html() !== "-0.00"))
        return '<span  class="badge badge-danger">' + data.toFixed(2) + '</span>';
    else return '<button style="background-color: Transparent;border: none;"><span class="fas fa-check" style="color:#28a745"></span></button>';
}


function GetGapInfoFromDataTable(data) {
    if (data.toFixed(2) == 0)
        return '<i class="fa fa-circle" style="font-size: 8px; margin-right: 4px; color: #28a745;"></i>';
    else return '<i class="fa fa-circle" style="font-size: 8px; margin-right: 4px; color: orange;"></i>';
}

function DataTableGapInfoGet(ValueOld, ValueNew) {
    var Gap = ValueNew.toFixed(0) - ValueOld.toFixed(0);
    if (Gap.toFixed(0) == 0) {
        return '<i class="fa fa-circle" style="font-size: 8px; margin-right: 4px; color: #28a745;"></i>';
    }
    else {
        return '<i class="fa fa-circle" style="font-size: 8px; margin-right: 4px; color: red;"></i>';
    }
}

function DataTableCertifiedInfoGet(IsCertified) {
    if (IsCertified) {
        return '<i class="fa fa-circle" style="font-size: 8px; margin-right: 4px; color: #28a745;"></i>';
    }
    else {
        return '<i class="fa fa-circle" style="font-size: 8px; margin-right: 4px; color: red;"></i>';
    }
}

function DataTableIsValidInfoGet(IsValid) {
    if (IsValid) {
        return '<i class="fa fa-circle" style="font-size: 8px; margin-right: 4px; color: #28a745;"></i>';
    }
    else {
        return '<i class="fa fa-circle" style="font-size: 8px; margin-right: 4px; color: red;"></i>';
    }
}

function DataTableGapWithValueInfoGet(ValueOld, ValueNew) {
    var Gap = ValueNew.toFixed(0) - ValueOld.toFixed(0);
    //if (Gap.toFixed(0) >= 0) {
    //    return DataTableGapInfoGet(ValueOld, ValueNew) + DataTableFormatIntGet(ValueNew);
    //}
    //else {
    //    return '(' + Gap + ') ' + DataTableGapInfoGet(ValueOld, ValueNew) + DataTableFormatIntGet(ValueNew);
    //} 
    if (Gap.toFixed(0) == 0) {
        return DataTableGapInfoGet(ValueOld, ValueNew) + DataTableFormatIntGet(ValueNew);
    }
    else {
        return '(' + Gap + ') ' + DataTableGapInfoGet(ValueOld, ValueNew) + DataTableFormatIntGet(ValueNew);
    }
}

function DataTableGapWithoutValueInfoGet(ValueOld, ValueNew) {
    var Gap = ValueNew.toFixed(0) - ValueOld.toFixed(0);
    if (Gap.toFixed(0) == 0) {
        return DataTableGapInfoGet(ValueOld, ValueNew);
    }
    else {
        return Gap;
    }
}

function DataTableGapWithoutValueInfoThresholdGet(ValueOld, ValueNew, Threshold) {
    var Gap = ValueNew.toFixed(0) - ValueOld.toFixed(0);
    if (Gap.toFixed(0) <= Threshold) {
        return '<i class="fa fa-circle" style="font-size: 8px; margin-right: 4px; color: #28a745;"></i>';;
    }
    else {
        return '<span style="color: red;">' + Gap + '</span>';
    }
}

function GetGapDoubleFromDataTable(data) {
    if (($('<div/>').text(data.toFixed(2)).html() !== "0.00") && ($('<div/>').text(data.toFixed(2)).html() !== "-0.00"))
        return '<span  class="badge badge-danger">' + numFormat(data.toFixed(2)) + '</span>';
    else return '<i class="fa fa-circle" style="font-size: 8px; margin-right: 4px; color: #28a745;"></i>';
}


function GetGapNumberFromDataTable(data) {
    if (data !== 0)
        return '<span  class="badge badge-danger">' + data + '</span>';
    else return '<button style="background-color: Transparent;border: none;"><span class="fas fa-check" style="color:#28a745"></span></button>';
}

function GetGapHandledFromDataTable(data, Gap) {
    if (Gap == 0)
        return '<span  class="badge badge-success" >' + data + '</span>';
    else return '<span  class="badge badge-danger" >' + data + '</span>';
}

function DataTableDayGapGet(rate, Gap, onclick) {
    if (Gap == 0)
        return '<span  class="badge badge-success" >' + rate + '</span>';
    else return '<span  class="badge badge-danger" onclick="' + onclick + '" >' + rate + '</span>';
}

function GetGapBooleanFromDataTable(data) {
    if (data == 1)
        return '<button style="background-color: Transparent;border: none;"><span class="fas fa-check" style="color:#28a745"></span></button>';
    else return '<button style="background-color: Transparent;border: none;"><span class="fas fa-exclamation-triangle" style="color:red"></span></button>';
}


function GetGapStringFromDataTable(data, value) {
    if (data == value)
        return '<span  class="badge badge-danger">' + data + '</span>';
    else return '<span  class="badge badge-success" >' + data + '</span>';
}

function GetGapPostWithoutReceiptFromDataTable(BagNumber, CashierNumber, ModeName) {
    if (CashierNumber !== '999999' && ModeName == 'Normal') {
        if (BagNumber == '') {
            return '<button style="background-color: Transparent;border: none;"><span class="fas fa-exclamation-triangle" style="color:red"></span></button>';
        }
        else {
            return BagNumber;
        }
    }
    return BagNumber;
}


function GetGapCtrFromDataTable(data, CtrValue) {
    if (CtrValue == 1)
        return '<span  class="badge badge-danger">' + numFormat(data) + '</span>';
    else return '<button style="background-color: Transparent;border: none;"><span class="fas fa-check" style="color:#28a745"></span></button>';
}

function GetGapCtrSumFromDataTable(CtrValue) {
    if (CtrValue == 0)
        return '<i class="fa fa-circle" style="font-size: 8px; margin-right: 4px; color: #28a745;"></i>';
    else return '<button style="background-color: Transparent;border: none;"><span class="fas fa-exclamation-triangle" style="color:red"></span></button>';
}


function DataTableCtrGet(CtrFlag, CtrValue) {
    if (CtrFlag == 1)
        return '<span  class="badge badge-danger">' + CtrValue + '</span>';
    else return '<button style="background-color: Transparent;border: none;"><span class="fas fa-check" style="color:#28a745"></span></button>';
}

function GetCtrYesOrNoFromDataTable(CtrValue) {
    if (CtrValue == 0) {
        return '<button style="background-color: Transparent;border: none;"><span class="fas fa-check" style="color:#28a745"></span></button>';
    }
    else {
        if (CtrValue == 1) {
            return '<button style="background-color: Transparent;border: none;"><span class="fas fa-exclamation-triangle" style="color:red"></span></button>';
        }
        else {
            return '';
        }
    }
}

function GetGapIntFromDataTable(Gap) {
    if (Gap == 0)
        return '<i class="fa fa-circle" style="font-size: 8px; margin-right: 4px; color: #28a745;"></i>';
    else return '<span  class="badge badge-danger">' + Gap + '</span>';
}

function CertCtrFlagGet(Ctr01, Ctr02, Ctr03, Ctr04) {
    if (Ctr01.toFixed(2) == 0 && Ctr02.toFixed(2) == 0 && Ctr03.toFixed(2) == 0 && Ctr04.toFixed(2) == 0)
        return '<i class="fa fa-circle" style="font-size: 8px; margin-right: 4px; color: #28a745;"></i>';
    else return '<i class="fa fa-circle" style="font-size: 8px; margin-right: 4px; color: red;"></i>';
}

function CertCtrFlagBooleanGet(IsCtr01, IsCtr02, IsCtr03, IsCtr04) {
    if (IsCtr01 == 1 && IsCtr02 == 1 && IsCtr03 == 1 && IsCtr04 == 1)
        return '<i class="fa fa-circle" style="font-size: 8px; margin-right: 4px; color: #28a745;"></i>';
    else return '<i class="fa fa-circle" style="font-size: 8px; margin-right: 4px; color: red;"></i>';
}

//function CertCtrFlagBooleanMultipleGetFour(IsCtr01, IsCtr02, IsCtr03, IsCtr04) {
//    if (IsCtr01 == 1 && IsCtr02 == 1 && IsCtr03 == 1 && IsCtr04)
//        return '<i class="fa fa-circle" style="font-size: 8px; margin-right: 4px; color: #28a745;"></i>' + ;
//    else return '<i class="fa fa-circle" style="font-size: 8px; margin-right: 4px; color: red;"></i>';
//}

function CertStationOkNumberGet(StationsOkNumber) {
    if (StationsOkNumber.toFixed(2) == 0)
        return '<i class="fa fa-circle" style="font-size: 8px; margin-right: 4px; color: red;"></i>';
    else return '<i class="fa fa-circle" style="font-size: 8px; margin-right: 4px; color: #28a745;"></i>';
}

function DataTableStringTruncate(data, lenght) {
    if (data.length <= lenght) {
        return data;
    }
    else {
        return data.slice(0, lenght) + '...'
    }
}

function DataTableGapDetailGetGap(data, type, Pattern, Id) {

    if (type == 'Int') {
        if (data == 0) {
            return '<button style="background-color: Transparent;border: none;"><span class="fas fa-check" style="color:#28a745"></span></button>';
        }
        else {
            return '<span  class="badge badge-danger" onclick="' + Pattern + '(\'' + Id + '\')" >' + data + '</span>';
        }
    }
    if (type == 'Double') {

    }
}

function DataTableEvoGet(data) {
    if (data.toFixed(2) >= 0) {
        return '<span  class="badge badge-success" >' + data.toFixed(2) + '%</span>';
    }
    else {
        return '<span  class="badge badge-danger">' + data.toFixed(2) + '%</span>';
    }
}

function DataTableEvolutionGet(dataOld, data) {
    var evo = 0;
    if (dataOld.toFixed(2) != 0) {
        var evoTmp = ((data - dataOld) / dataOld) * 100;
        evo = evoTmp.toFixed(2);
    }

    if (evo >= 0) {
        return '<span  class="badge badge-success" >' + evo + '%</span>';
    }
    else {
        return '<span  class="badge badge-danger">' + evo + '%</span>';
    }
}

function DataTableEvoADoubleGet(data) {
    if (data.toFixed(2) > 0) {
        return '<span  class="badge badge-success" >' + numFormat(data.toFixed(2)) + ' DH</span>';
    }
    else {
        if (data.toFixed(2) == 0) {
            return data.toFixed(2);
        }
        else {
            return '<span  class="badge badge-danger">' + numFormat(data.toFixed(2)) + ' DH</span>';
        }

    }
}

function DataTableGapAbsoluteGet(data) {
    if (data.toFixed(0) > 0 || data.toFixed(0) < 0) {
        return '<span  class="badge-alert badge-danger" >' + numShortFormat(data.toFixed(0)) + '</span>';
    }
    else {
        return '<span class="badge-alert badge-success" >' + numShortFormat(data.toFixed(0)) + '</span>';
    }
}

function DataTableDiffIntGet(dataSource, dataTarget) {
    var Diff = dataTarget.toFixed(0) - dataSource.toFixed(0);
    if (Diff.toFixed(0) > 0 || Diff.toFixed(0) < 0) {
        return '<span  class="badge-alert badge-danger" >' + numShortFormat(Diff) + '</span>';
    }
    else {
        return '<span class="badge-alert badge-success" >' + numShortFormat(Diff) + '</span>';
    }
}

function DataTableDiffIntThresholdGet(dataSource, dataTarget, Threshold) {
    var Diff = dataTarget.toFixed(0) - dataSource.toFixed(0);
    if (Diff.toFixed(0) > Threshold || Diff.toFixed(0) < - Threshold) {
        return '<span  class="badge-alert badge-danger" >' + numShortFormat(Diff) + '</span>';
    }
    else {
        return '<span class="badge-alert badge-success" >' + numShortFormat(Diff) + '</span>';
    }
}

function DataTableDiffIntFourThresholdsLowGet(dataSource, Threshold0, Threshold1, Threshold2, Threshold3) {
    var Value = dataSource.toFixed(0);
    if (Value <= Threshold0) {
        return '<span  class="badge-alert badge-danger" >' + numShortFormat(Value) + '</span>';
    }
    else {
        if (Value <= Threshold1) {
            return '<span  class="badge-alert badge-warning" >' + numShortFormat(Value) + '</span>';
        }
        else {
            if (Value <= Threshold2) {
                return '<span  class="badge-alert badge-info" >' + numShortFormat(Value) + '</span>';
            }
            else {
                if (Value <= Threshold3) {
                    return '<span  class="badge-alert badge-info" >' + numShortFormat(Value) + '</span>';
                }
                else {
                    return '<span class="badge-alert badge-Success" >' + numShortFormat(Value) + '</span>';
                }
            }
        }
    }
}

function DataTableDiffIntXorGet(dataSource, dataTarget) {
    var Diff = dataTarget.toFixed(0) - dataSource.toFixed(0);
    if (Diff.toFixed(0) > 0 || Diff.toFixed(0) < 0) {
        return '<span  class="badge-alert badge-danger" >' + numShortFormat(Diff) + '</span>';
    }
    else {
        return '';
    }
}

function DataTableDiffIntWithFlagGet(dataSource, dataTarget, IsActive) {
    if (IsActive) {
        var Diff = dataTarget.toFixed(0) - dataSource.toFixed(0);
        if (Diff.toFixed(0) > 0 || Diff.toFixed(0) < 0) {
            return '<span  class="badge-alert badge-danger" >' + numShortFormat(Diff) + '</span>';
        }
        else {
            return '<span class="badge-alert badge-success" >' + numShortFormat(Diff) + '</span>';
        }
    }
    else {
        return '0';
    }

}

function DataTableDiffDoubleGet(dataSource, dataTarget) {
    var Diff = dataTarget.toFixed(2) - dataSource.toFixed(2);
    if (Diff.toFixed(2) > 0 || Diff.toFixed(2) < 0) {
        return '<span  class="badge-alert badge-danger" >' + numFormat(Diff) + '</span>';
    }
    else {
        return '<span class="badge-alert badge-success" >' + numFormat(Diff) + '</span>';
    }
}

function DataTableDifferenceIntGet(dataSource, dataTarget) {
    var Diff = dataTarget.toFixed(0) - dataSource.toFixed(0);
    return numShortFormat(Diff);
}

function DataTableEvoRGet(data) {
    if (data.toFixed(2) > 0) {
        return '<span  class="badge badge-success" >' + numFormat(data.toFixed(2)) + ' %</span>';
    }
    else {
        if (data.toFixed(2) == 0) {
            return '0%';
        }
        else {
            return '<span  class="badge badge-danger">' + numFormat(data.toFixed(2)) + ' %</span>';
        }

    }
}


function DataTableGapRelativeGet(data) {
    if (data.toFixed(2) > 6 || data.toFixed(2) < -6) {
        return '<span  class="badge badge-danger" >' + numFormat(data.toFixed(2)) + ' /10 000</span>';
    }
    else {
        return '<span  class="badge badge-success" >' + numFormat(data.toFixed(2)) + ' /10 000</span>';
    }
}


function DataTableGapRelativeIntGet(data) {
    if (data > 6 || data < -6) {
        return '<span  class="badge badge-danger" >' + numShortFormat(data) + ' /10 000</span>';
    }
    else {
        return '<span  class="badge badge-success" >' + numShortFormat(data) + ' /10 000</span>';
    }
}

function DataTableFlagGet(color) {
    return '<i class="fa fa-circle" style="font-size: 8px; margin-right: 4px; color: ' + color + ';"></i>';
}

function DataTableTextHighlightGet(text, color) {
    return '<span class="" style="border-radius: .25rem;background-color: ' + color + ';">' +
        '<span class="" style="font-size: 12px;">' + text + '</span>'
        + '</span>';
}

function CertCtrBitGet(Ctr01) {
    if (Ctr01 == 0)
        return '<i class="fa fa-circle" style="font-size: 8px; margin-right: 4px; color: #28a745;"></i>';
    else return '<i class="fa fa-circle" style="font-size: 8px; margin-right: 4px; color: red;"></i>';
}

function ParamResetDropDownList(ElementId) {
    $('#' + ElementId).append("<option value='" + 0 + "'>" + "--" + "</option>");
    $('#' + ElementId).val('0');
}

function ElementDropDownListReset(ElementId) {
    $('#' + ElementId).empty();
    $('#' + ElementId).append("<option value='" + 0 + "'>" + "--" + "</option>");
    $('#' + ElementId).val('0');
}

function ElementDropDownListLabelReset(ElementId, label) {
    $('#' + ElementId).empty();
    $('#' + ElementId).append("<option value='" + 0 + "'>" + label + "</option>");
    $('#' + ElementId).val('0');
}

function ElementDropDownListMultipleReset(ElementId, label) {
    $('#' + ElementId).empty();
    $('#' + ElementId).append("<option value='" + 0 + "'>" + label + "</option>");
    $('#' + ElementId).append("<option value='OK'>Apply</option>");
    $('#' + ElementId).val('0');
    $('#' + ElementId).multiSelect();
}

function ParamResetToZeroDropDownList(ElementId) {
    $('#' + ElementId).val('0');
}

function DropDownListSet(ElementId, OptionValue) {
    $('#' + ElementId).val(OptionValue);
}

function InputDefaultValueSet(ElementId, OptionValue) {
    $('#' + ElementId).val(OptionValue);
}

function ElementDropDownListSet(ElementId, OptionValue) {
    $('#' + ElementId).val(OptionValue);
}

function ElementValueSet(ElementId, OptionValue) {
    $('#' + ElementId).val(OptionValue);
}

function ElementImageSet(ElementId, ImagePath) {
    document.getElementById(ElementId).src = ImagePath;
}

function DataTableIntOnClickGet(Value, OnClick) {
    //return '<button onclick= ' + OnClick + '>' + DataTableFormatIntGet(Value) + '</span>';

    return '<button type="button" class="btn-cl gc-bc1-cl" onclick="' + OnClick + '">' +
        '<div class="btn-txt-cl gc-c1-cl">' + DataTableFormatIntGet(Value) + '</div>' +
        '</button>';
}

function ParamCexSecGet() {
    $("#CexId").empty();
    var RegionId = GetElementValue('RegionId');
    $.get("/Param/ParamCexSecGet", { Input: RegionId }, function (data) {
        $.each(data, function (index, row) {
            $("#CexId").append("<option value='" + row.CexId + "'>" + row.CexNameShort + "</option>")
        });
    });
    $("#CexId").append("<option value='" + 0 + "'>" + "--" + "</option>");
    $("#CexId").val('0');
}

function ParamLSFromCexGet() {
    var CexId = new String($("#CexId").val());
    $("#LSId").empty();
    $.get("/Param/ParamLSFromCexGet", { CexId: CexId }, function (data) {
        $.each(data, function (index, row) {
            $("#LSId").append("<option value='" + row.LSId + "'>" + row.LSName + "</option>")
        });
    });
    $("#LSId").append("<option value='" + 0 + "'>" + "--" + "</option>");
    $("#LSId").val('0');
}

function ParamLSFromRegionGet() {
    var RegionId = GetElementValue('RegionId');
    $("#LSId").empty();
    $.get("/Param/ParamLSFromRegionGet", { RegionId: RegionId }, function (data) {
        $.each(data, function (index, row) {
            $("#LSId").append("<option value='" + row.LSId + "'>" + row.LSName + "</option>")
        });
    });
    $("#LSId").append("<option value='" + 0 + "'>" + "--" + "</option>");
    $("#LSId").val('0');
}

function ParamLSSecGet() {
    var CexId = GetElementValue('CexId');
    $("#LSId").empty();
    $.get("/Param/ParamLSSecGet", { Input: CexId }, function (data) {
        $.each(data, function (index, row) {
            $("#LSId").append("<option value='" + row.LSId + "'>" + row.LSName + "</option>")
        });
    });
    $("#LSId").append("<option value='" + 0 + "'>" + "--" + "</option>");
    $("#LSId").val('0');
}

function ParamLSFromRegionSecGet() {
    var RegionId = GetElementValue('RegionId');
    $("#LSId").empty();
    $.get("/Param/ParamLSFromRegionSecGet", { RegionId: RegionId }, function (data) {
        $.each(data, function (index, row) {
            $("#LSId").append("<option value='" + row.LSId + "'>" + row.LSId + '-' + row.LSName + "</option>")
        });
    });
    $("#LSId").append("<option value='" + 0 + "'>" + "--" + "</option>");
    $("#LSId").val('0');
    $("#StationNumberId").val('0');
    $("#LaneNameId").val('0');
}

function ParamCellsFromRegionSecGet() {
    var RegionId = GetElementValue('RegionId');
    $("#CellId").empty();
    $.get("/Param/ParamCellsFromRegionSecGet", { RegionId: RegionId }, function (data) {
        $.each(data, function (index, row) {
            $("#CellId").append("<option value='" + row.CellId + "'>" + row.CellId + '-' + row.CellName + "</option>")
        });
    });
    $("#CellId").append("<option value='" + 0 + "'>" + "--" + "</option>");
    $("#CellId").val('0');
    $("#StationNumberId").val('0');
    $("#LaneNameId").val('0');
}

function ParamSectionFromAxleSecGet() {
    var AxleId = GetElementValue('AxleId');
    $("#SectionId").empty();
    $.get("/Param/ParamSectionFromAxleSecGet", { AxleId: AxleId }, function (data) {
        $.each(data, function (index, row) {
            $("#SectionId").append("<option value='" + row.SectionId + "'>" + row.SectionId + '-' + row.SectionName + "</option>")
        });
    });
    $("#SectionId").append("<option value='" + 0 + "'>" + "--" + "</option>");
    $("#SectionId").val('0');
}


function ParamLSFromAxleSecGet() {
    var AxleId = GetElementValue('AxleId');
    $("#LSId").empty();
    $.get("/Param/ParamLSFromAxleSecGet", { AxleId: AxleId }, function (data) {
        $.each(data, function (index, row) {
            $("#LSId").append("<option value='" + row.LSId + "'>" + row.LSId + '-' + row.LSName + "</option>")
        });
    });
    $("#LSId").append("<option value='" + 0 + "'>" + "--" + "</option>");

    ElementDropDownListSet('LSId', '0');
    ElementDropDownListSet('StationNumberId', '0');
    ElementDropDownListSet('LaneNameId', '0');
}

function ParamLSFromAxleSecXorGet() {
    var AxleId = GetElementValue('AxleId');
    $("#LSId").empty();
    $.get("/Param/ParamLSFromAxleSecGet", { AxleId: AxleId }, function (data) {
        $.each(data, function (index, row) {
            $("#LSId").append("<option value='" + row.LSId + "'>" + row.LSId + '-' + row.LSName + "</option>")
        });
    });
}

function ParamAxlesFromRegionSecGet() {
    var RegionId = GetElementValue('RegionId');
    $("#AxleId").empty();
    $.get("/Param/ParamAxlesFromRegionSecGet", { RegionId: RegionId }, function (data) {
        $.each(data, function (index, row) {
            $("#AxleId").append("<option value='" + row.AxleId + "'>" + row.AxleId + '-' + row.AxleName + "</option>")
        });
    });
    $("#AxleId").append("<option value='" + 0 + "'>" + "--" + "</option>");

    ElementDropDownListSet('AxleId', '0');
    ElementDropDownListSet('LSId', '0');
    ElementDropDownListSet('StationNumberId', '0');
    ElementDropDownListSet('LaneNameId', '0');
}


function ParamAxlesFromRegionSecXorGet() {
    var RegionId = GetElementValue('RegionId');
    $("#AxleId").empty();
    $.get("/Param/ParamAxlesFromRegionSecGet", { RegionId: RegionId }, function (data) {
        $.each(data, function (index, row) {
            $("#AxleId").append("<option value='" + row.AxleId + "'>" + row.AxleId + '-' + row.AxleName + "</option>")
        });
    });
    $("#AxleId").append("<option value='" + 0 + "'>" + "--" + "</option>");

    ElementDropDownListSet('AxleId', '0');
    ElementDropDownListSet('LSId', '0');
    ElementDropDownListSet('StationNumberId', '0');
    ElementDropDownListSet('LaneNameId', '0');
}

function ParamLSOFromRegionOSecGet() {
    var RegionId = GetElementValue('RegionIdO');
    $("#LSIdO").empty();
    $.get("/Param/ParamLSFromRegionSecGet", { RegionId: RegionId }, function (data) {
        $.each(data, function (index, row) {
            $("#LSIdO").append("<option value='" + row.LSId + "'>" + row.LSId + '-' + row.LSName + "</option>")
        });
    });
    $("#LSIdO").append("<option value='" + 0 + "'>" + "--" + "</option>");
    $("#LSIdO").val('0');
    $("#StationNumberIdO").val('0');
    $("#LaneNameIdO").val('0');
}

function ParamStationsFromRegionSecGet() {
    var RegionId = GetElementValue('RegionId');
    $("#StationNumberId").empty();
    $.get("/Param/ParamStationsFromRegionSecGet", { RegionId: RegionId }, function (data) {
        $.each(data, function (index, row) {
            $("#StationNumberId").append("<option value='" + row.StationId + "'>" + row.StationName + "</option>")
        });
    });
    $("#StationNumberId").append("<option value='" + 0 + "'>" + "--" + "</option>");
    $("#StationNumberId").val('0');
    $("#LaneNameId").val('0');
}

function ParamStationsFromRegionSecXorGet() {
    var RegionId = GetElementValue('RegionId');
    $("#StationNumberId").empty();
    $.get("/Param/ParamStationsFromRegionSecGet", { RegionId: RegionId }, function (data) {
        $.each(data, function (index, row) {
            $("#StationNumberId").append("<option value='" + row.StationId + "'>" + row.StationName + "</option>")
        });
    });
    $("#LaneNameId").val('0');
}

function ParamLSFromRegionSecXorGet() {
    var RegionId = GetElementValue('RegionId');
    $("#LSId").empty();
    $.get("/Param/ParamLSFromRegionSecGet", { RegionId: RegionId }, function (data) {
        $.each(data, function (index, row) {
            $("#LSId").append("<option value='" + row.LSId + "'>" + row.LSId + '-' + row.LSName + "</option>")
        });
    });
}

function ParamCellsFromRegionSecXorGet() {
    var RegionId = GetElementValue('RegionId');
    $("#CellId").empty();
    $.get("/Param/ParamCellsFromRegionSecGet", { RegionId: RegionId }, function (data) {
        $.each(data, function (index, row) {
            $("#CellId").append("<option value='" + row.CellId + "'>" + row.CellId + '-' + row.CellName + "</option>")
        });
    });
}

function ParamShiftsGet() {
    var item = document.getElementById('ShiftId');
    item.options.length = 0;
    var node = document.createElement("option");
    node.value = 0;
    var textnode = document.createTextNode("--");
    node.appendChild(textnode);
    item.appendChild(node);
    $.get("/Param/ParamShiftsGet", function (data) {
        $.each(data, function (index, row) {
            node = document.createElement("option");
            node.value = row.ShiftId;
            textnode = document.createTextNode(row.ShiftName);
            node.appendChild(textnode);
            item.appendChild(node);
        });
    });
}

function ParamCashiersGet() {
    var CellId = GetElementValue('CellId');
    var CashierNumberKey = GetElementValue('CashierNumberKeyId');
    var CashierNameKey = GetElementValue('CashierNameKeyId');
    $("#CashierRowId").empty();
    $.get("/Param/ParamCashiersGet", { CellId: CellId, CashierNumberKey: CashierNumberKey, CashierNameKey: CashierNameKey }, function (data) {
        $.each(data, function (index, row) {
            $("#CashierRowId").append("<option value='" + row.CashierRowId + "'>" + row.CashierNumber + ' ' + row.CashierName + "</option>")
        });
    });
    $("#CashierRowId").append("<option value='" + 0 + "'>" + "--" + "</option>");
    $("#CashierRowId").val('0');
}

function ParamCashiersFromCellGet() {
    var CellId = GetElementValue('CellId');
    var CashierNumberKey = GetElementValue('CashierNumberKeyId');
    var CashierNameKey = GetElementValue('CashierNameKeyId');
    $("#CashierRowId").empty();
    $.get("/Param/ParamCashiersFromCellGet", { CellId: CellId, CashierNumberKey: CashierNumberKey, CashierNameKey: CashierNameKey }, function (data) {
        $.each(data, function (index, row) {
            $("#CashierRowId").append("<option value='" + row.CashierRowId + "'>" + row.CashierNumber + ' ' + row.CashierName + "</option>")
        });
    });
    $("#CashierRowId").append("<option value='" + 0 + "'>" + "--" + "</option>");
    $("#CashierRowId").val('0');
}

function ParamUsersGet() {
    var Keyword = GetElementValue('KeywordIdFix');
    $("#UserIdFix").empty();
    $.get("/Param/ParamUsersGet", { Keyword: Keyword }, function (data) {
        $.each(data, function (index, row) {
            $("#UserIdFix").append("<option value='" + row.UserId + "'>" + row.FullName + "</option>")
        });
    });
    $("#UserIdFix").append("<option value='" + 0 + "'>" + "--" + "</option>");
    $("#UserIdFix").val('0');
}

function ParamBreaksGet() {
    var ItemId = GetElementValue('ItemId');
    $("#BreakId").empty();
    $.get("/Param/ParamBreaksGet", { Input: ItemId }, function (data) {
        $.each(data, function (index, row) {
            $("#BreakId").append("<option value='" + row.BreakId + "'>" + row.BreakId + ' ' + row.BreakName + "</option>")
        });
    });
    $("#BreakId").append("<option value='" + 0 + "'>" + "--" + "</option>");
    $("#BreakId").val('0');

    //ShowReport('StationNumberId' + 'Parent');
    //HideReport('LaneNameId' + 'Parent');
    //HideReport('PdvId' + 'Parent');

    //ParamResetDropDownList('LaneNameId');
    //ParamResetDropDownList('PdvId');
}

function ParamZonesGet(ModuleId) {
    $("#ZoneId").empty();
    $.get("/Param/ParamZonesGet", { Input: ModuleId }, function (data) {
        $.each(data, function (index, row) {
            $("#ZoneId").append("<option value='" + row.ZoneId + "'>" + row.ZoneName + "</option>")
        });
    });
    //$("#StationNumberId").append("<option value='" + 0 + "'>" + "--" + "</option>");
    //$("#StationNumberId").val('0');
    //$("#LaneNameId").val('0');
    //ShowReport('StationNumberId' + 'Parent');
    //HideReport('LaneNameId' + 'Parent');
    //HideReport('PdvId' + 'Parent');

    //ParamResetDropDownList('LaneNameId');
    //ParamResetDropDownList('PdvId');
}

function ParamLanesGet() {
    $("#LaneNameId").empty();
    var SiteId = GetElementValue('SiteId');
    var StationNumber = GetElementValue('StationNumberId');
    $.get("/Param/ParamLanesGet", { SiteId: SiteId, StationNumber: StationNumber }, function (data) {
        $.each(data, function (index, row) {
            $("#LaneNameId").append("<option value='" + row.LaneName + "'>" + row.LaneName + "</option>")
        });
    });
    $("#LaneNameId").append("<option value='" + 0 + "'>" + "--" + "</option>");
    $("#LaneNameId").val('0');
    ShowReport('LaneNameId' + 'Parent');
}

function ParamLanesFromStationLSGet() {
    $("#LaneNameId").empty();
    var RegionId = GetElementValue('RegionId');
    var LSId = GetElementValue('LSId');
    var StationNumber = GetElementValue('StationNumberId');
    $.get("/Param/ParamLanesFromStationLSGet", { RegionId: RegionId, LSId: LSId, StationNumber: StationNumber }, function (data) {
        $.each(data, function (index, row) {
            $("#LaneNameId").append("<option value='" + row.LaneName + "'>" + row.LaneName + "</option>")
        });
    });
    $("#LaneNameId").append("<option value='" + 0 + "'>" + "--" + "</option>");
    $("#LaneNameId").val('0');
    //ShowReport('LaneNameId' + 'Parent');
}

function ParamLanesAllFromStationLSGet() {
    $("#LaneNameId").empty();
    var LSId = GetElementValue('LSId');
    var StationNumber = GetElementValue('StationNumberId');
    $.get("/Param/ParamLanesAllFromStationLSGet", { LSId: LSId, StationNumber: StationNumber }, function (data) {
        $.each(data, function (index, row) {
            $("#LaneNameId").append("<option value='" + row.LaneName + "'>" + row.LaneName + "</option>")
        });
    });
    $("#LaneNameId").append("<option value='" + 0 + "'>" + "--" + "</option>");
    $("#LaneNameId").val('0');
    ShowReport('LaneNameId' + 'Parent');
}

function ParamLanesAllFromStationCellGet() {
    $("#LaneNameId").empty();
    var CellId = GetElementValue('CellId');
    var StationNumber = GetElementValue('StationNumberId');
    $.get("/Param/ParamLanesAllFromStationCellGet", { CellId: CellId, StationNumber: StationNumber }, function (data) {
        $.each(data, function (index, row) {
            $("#LaneNameId").append("<option value='" + row.LaneName + "'>" + row.LaneName + "</option>")
        });
    });
    $("#LaneNameId").append("<option value='" + 0 + "'>" + "--" + "</option>");
    $("#LaneNameId").val('0');
    ShowReport('LaneNameId' + 'Parent');
}

function ParamLanesAllFromStationLSSensGet() {
    $("#LaneNameId").empty();
    var LSId = GetElementValue('LSId');
    var StationNumber = GetElementDropDownListValue('StationNumberId');
    var Sens = GetElementDropDownListValue('SensId');
    $.get("/Param/ParamLanesAllFromStationLSSensGet", { LSId: LSId, StationNumber: StationNumber, Sens: Sens }, function (data) {
        $.each(data, function (index, row) {
            $("#LaneNameId").append("<option value='" + row.LaneName + "'>" + row.LaneName + "</option>")
        });
    });
    $("#LaneNameId").append("<option value='" + 0 + "'>" + "--" + "</option>");
    $("#LaneNameId").val('0');
    //ShowReport('LaneNameId' + 'Parent');
}


function ParamLanesAllFromStationLSSensXorGet() {
    $("#LaneNameId").empty();
    var LSId = GetElementValue('LSId');
    var StationNumber = GetElementDropDownListValue('StationNumberId');
    var Sens = GetElementDropDownListValue('SensId');
    $.get("/Param/ParamLanesAllFromStationLSSensGet", { LSId: LSId, StationNumber: StationNumber, Sens: Sens }, function (data) {
        $.each(data, function (index, row) {
            $("#LaneNameId").append("<option value='" + row.LaneName + "'>" + row.LaneName + "</option>")
        });
    });
    //$("#LaneNameId").append("<option value='" + 0 + "'>" + "--" + "</option>");
    //$("#LaneNameId").val('0');
    //ShowReport('LaneNameId' + 'Parent');
}

function ParamBornesFromStationLSGet() {
    $("#LaneNameIdO").empty();
    var LSId = GetElementValue('LSIdO');
    var StationNumber = GetElementValue('StationNumberIdO');
    $.get("/Param/ParamBornesFromStationLSGet", { LSId: LSId, StationNumber: StationNumber }, function (data) {
        $.each(data, function (index, row) {
            $("#LaneNameIdO").append("<option value='" + row.LaneName + "'>" + row.LaneName + "</option>")
        });
    });
    $("#LaneNameIdO").append("<option value='" + 0 + "'>" + "--" + "</option>");
    $("#LaneNameIdO").val('0');
    //ShowReport('LaneNameId' + 'Parent');
}

function ParamLanesOutFromStationLSGet() {
    $("#LaneNameId").empty();
    var LSId = GetElementValue('LSId');
    var StationNumber = GetElementValue('StationNumberId');
    $.get("/Param/ParamLanesOutFromStationLSGet", { LSId: LSId, StationNumber: StationNumber }, function (data) {
        $.each(data, function (index, row) {
            $("#LaneNameId").append("<option value='" + row.LaneName + "'>" + row.LaneName + "</option>")
        });
    });
    $("#LaneNameId").append("<option value='" + 0 + "'>" + "--" + "</option>");
    $("#LaneNameId").val('0');
    //ShowReport('LaneNameId' + 'Parent');
}

function ParamLanesLaneGet() {
    $("#LaneNameId").empty();
    var SiteId = GetElementValue('SiteId');
    var StationNumber = GetElementValue('StationNumberId');
    $.get("/Param/ParamLanesLaneGet", { SiteId: SiteId, StationNumber: StationNumber }, function (data) {
        $.each(data, function (index, row) {
            $("#LaneNameId").append("<option value='" + row.LaneName + "'>" + row.LaneName + "</option>")
        });
    });
    $("#LaneNameId").append("<option value='" + 0 + "'>" + "--" + "</option>");
    $("#LaneNameId").val('0');
    //ShowReport('LaneNameId' + 'Parent');
}


function ParamLanesAllGet(SiteId, StationNumber) {
    $("#LaneNameId").empty();
    $.get("/Param/ParamLanesGet", { SiteId: SiteId, StationNumber: StationNumber }, function (data) {
        $.each(data, function (index, row) {
            $("#LaneNameId").append("<option value='" + row.LaneName + "'>" + row.LaneName + "</option>")
        });
    });
    $("#LaneNameId").append("<option value='" + 0 + "'>" + "--" + "</option>");
    //$("#LaneNameId").val('0');
    //ShowReport('LaneNameId' + 'Parent');
}

function ParamLanesOrigineAllGet(SiteId, StationNumber) {
    $("#LaneNameIdO").empty();
    $.get("/Param/ParamLanesGet", { SiteId: SiteId, StationNumber: StationNumber }, function (data) {
        $.each(data, function (index, row) {
            $("#LaneNameIdO").append("<option value='" + row.LaneName + "'>" + row.LaneName + "</option>")
        });
    });
    $("#LaneNameIdO").append("<option value='" + 0 + "'>" + "--" + "</option>");
    //$("#LaneNameId").val('0');
    //ShowReport('LaneNameId' + 'Parent');
}

function ParamLanesGetOrigine() {
    $("#LaneNameIdO").empty();
    var SiteIdO = GetElementValue('SiteIdO');
    var StationNumberO = GetElementValue('StationNumberIdO');
    $.get("/Param/ParamLanesGet", { SiteId: SiteIdO, StationNumber: StationNumberO }, function (data) {
        $.each(data, function (index, row) {
            $("#LaneNameIdO").append("<option value='" + row.LaneName + "'>" + row.LaneName + "</option>")
        });
    });
    $("#LaneNameIdO").append("<option value='" + 0 + "'>" + "--" + "</option>");
    $("#LaneNameIdO").val('0');
    ShowReport('LaneNameIdO' + 'Parent');
}


function ParamCexGet() {
    $("#CexId").empty();
    var RegionId = GetElementValue('RegionId');
    $.get("/Param/ParamCexGet", { Input: RegionId }, function (data) {
        $.each(data, function (index, row) {
            $("#CexId").append("<option value='" + row.CexId + "'>" + row.CexNameShort + "</option>")
        });
    });
    //$("#CexId").append("<option value='" + 0 + "'>" + "--" + "</option>");
    //$("#LaneNameId").val('0');
    //ShowReport('LaneNameId' + 'Parent');
}

function ParamLanesFromCexGet() {
    $("#LaneNameId").empty();
    var CexId = GetElementValue('CexId');
    var StationNumber = GetElementValue('StationNumberId');
    $.get("/Param/ParamLanesFromCexGet", { CexId: CexId, StationNumber: StationNumber }, function (data) {
        $.each(data, function (index, row) {
            $("#LaneNameId").append("<option value='" + row.LaneName + "'>" + row.LaneName + "</option>")
        });
    });
    //$("#LaneNameId").append("<option value='" + 0 + "'>" + "--" + "</option>");
    //$("#LaneNameId").val('0');
    //ShowReport('LaneNameId' + 'Parent');
}

function ParamStationsGet() {
    $("#StationNumberId").empty();
    $.get("/Param/ParamStationsGet", { CexId: $("#CexId").val(), BagContainerId: $("#BagContainerId").val() }, function (data) {
        $.each(data, function (index, row) {
            $("#StationNumberId").append("<option value='" + row.StationNumber + "'>" + row.StationName + "</option>")
        });
    });
    $("#StationNumberId").append("<option value='" + 0 + "'>" + "--" + "</option>");
    $("#StationNumberId").val('0');

    ShowReport('StationNumberId' + 'Parent');
    //HideReport('LaneNameId' + 'Parent');
    //HideReport('PdvId' + 'Parent');

    ParamResetDropDownList('LaneNameId');
    ParamResetDropDownList('PdvId');
}


function ParamStationsAllGet(SiteId, BagContainerId) {
    $("#StationNumberId").empty();
    $.get("/Param/GetStations", { SiteId: SiteId, BagContainerId: BagContainerId }, function (data) {
        $.each(data, function (index, row) {
            $("#StationNumberId").append("<option value='" + row.StationNumber + "'>" + row.StationName + " (" + row.StationCeNumber + ")</option>")
        });
    });
    $("#StationNumberId").append("<option value='" + 0 + "'>" + "--" + "</option>");
}

function ParamStationsAllSecGet(SiteId, BagContainerId) {
    $("#StationNumberId").empty();
    $.get("/Param/ParamStationsAllSecGet", { SiteId: SiteId, BagContainerId: BagContainerId }, function (data) {
        $.each(data, function (index, row) {
            $("#StationNumberId").append("<option value='" + row.StationNumber + "'>" + row.StationName + " (" + row.StationCeNumber + ")</option>")
        });
    });
    //$("#StationNumberId").append("<option value='" + 0 + "'>" + "--" + "</option>");
}

function ParamStationsAllSecWithZeroGet(SiteId, BagContainerId, IsZero) {
    $("#StationNumberId").empty();
    $.get("/Param/ParamStationsAllSecGet", { SiteId: SiteId, BagContainerId: BagContainerId }, function (data) {
        $.each(data, function (index, row) {
            $("#StationNumberId").append("<option value='" + row.StationNumber + "'>" + row.StationName + " (" + row.StationCeNumber + ")</option>")
        });
    });

    if (IsZero) {
        $("#StationNumberId").append("<option value='" + 0 + "'>" + "--" + "</option>");
    }
}

function ParamStationsOAllSecGet(SiteId, BagContainerId) {
    $("#StationNumberIdO").empty();
    $.get("/Param/ParamStationsAllSecGet", { SiteId: SiteId, BagContainerId: BagContainerId }, function (data) {
        $.each(data, function (index, row) {
            $("#StationNumberIdO").append("<option value='" + row.StationNumber + "'>" + row.StationName + " (" + row.StationCeNumber + ")</option>")
        });
    });
    //$("#StationNumberId").append("<option value='" + 0 + "'>" + "--" + "</option>");
}

function ParamStationsOAllSecWithZeroGet(SiteId, BagContainerId, IsZero) {
    $("#StationNumberIdO").empty();
    $.get("/Param/ParamStationsAllSecGet", { SiteId: SiteId, BagContainerId: BagContainerId }, function (data) {
        $.each(data, function (index, row) {
            $("#StationNumberIdO").append("<option value='" + row.StationNumber + "'>" + row.StationName + " (" + row.StationCeNumber + ")</option>")
        });
    });
    if (IsZero) {
        $("#StationNumberIdO").append("<option value='" + 0 + "'>" + "--" + "</option>");
    }
}

function ParamStationsOrigineAllGet(SiteId, BagContainerId) {
    $("#StationNumberId").empty();
    $.get("/Param/GetStations", { SiteId: SiteId, BagContainerId: BagContainerId }, function (data) {
        $.each(data, function (index, row) {
            $("#StationNumberIdO").append("<option value='" + row.StationNumber + "'>" + row.StationName + " (" + row.StationCeNumber + ")</option>")
        });
    });
    $("#StationNumberIdO").append("<option value='" + 0 + "'>" + "--" + "</option>");
}

function ParamStationsFromCexGet() {
    $("#StationNumberId").empty();
    $.get("/Param/ParamStationsGet", { CexId: $("#CexId").val(), BagContainerId: $("#BagContainerId").val() }, function (data) {
        $.each(data, function (index, row) {
            $("#StationNumberId").append("<option value='" + row.StationNumber + "'>" + row.StationName + "</option>")
        });
    });
    $("#StationNumberId").append("<option value='" + 0 + "'>" + "--" + "</option>");
    $("#StationNumberId").val('0');

    ShowReport('StationNumberId' + 'Parent');
    HideReport('LaneNameId' + 'Parent');
    HideReport('PdvId' + 'Parent');

    ParamResetDropDownList('LaneNameId');
    ParamResetDropDownList('PdvId');
}


function ParamStationsFromLSXorGet(FormIndex, CexId, LSId) {
    $("#StationNumberId").empty();
    $.get("/Param/ParamStationsFromLSGet", { CexId: CexId, LSId: LSId }, function (data) {
        $.each(data, function (index, row) {
            $("#StationNumberId" + FormIndex).append("<option value='" + row.StationNumber + "'>" + row.StationName + "</option>")
        });
    });
    //$("#StationNumberId").append("<option value='" + 0 + "'>" + "--" + "</option>");
    //$("#StationNumberId").val('0');

    //ShowReport('StationNumberId' + 'Parent');
    // HideReport('LaneNameId' + 'Parent');
    //HideReport('PdvId' + 'Parent');

    ParamResetDropDownList('LaneNameId' + FormIndex);
    ParamResetDropDownList('PdvId' + FormIndex);
}

function ParamStationsFromLSGet() {
    var LSId = ElementDropDownListValueGet('LSId');
    $("#StationNumberId").empty();
    $.get("/Param/ParamStationsFromLSGet", { "LSId": LSId }, function (data) {
        $.each(data, function (index, row) {
            $("#StationNumberId").append("<option value='" + row.StationNumber + "'>" + row.StationName + "</option>")
        });
    });
    $("#StationNumberId").append("<option value='" + 0 + "'>" + "--" + "</option>");
    $("#StationNumberId").val('0');
    $("#LaneNameId").val('0');
    //ShowReport('StationNumberId' + 'Parent');
    //HideReport('LaneNameId' + 'Parent');
    //HideReport('PdvId' + 'Parent');

    //ParamResetDropDownList('LaneNameId');
    //ParamResetDropDownList('PdvId');
}

function ParamStationsFromCellGet() {
    var RegionId = ElementDropDownListValueGet('RegionId');
    var CellId = ElementDropDownListValueGet('CellId');
    $("#StationNumberId").empty();
    $.get("/Param/ParamStationsFromCellGet", { "CellId": CellId }, function (data) {
        $.each(data, function (index, row) {
            $("#StationNumberId").append("<option value='" + row.StationNumber + "'>" + row.StationName + "</option>")
        });
    });
    $("#StationNumberId").append("<option value='" + 0 + "'>" + "--" + "</option>");
    $("#StationNumberId").val('0');
    $("#LaneNameId").val('0');
    //ShowReport('StationNumberId' + 'Parent');
    //HideReport('LaneNameId' + 'Parent');
    //HideReport('PdvId' + 'Parent');

    //ParamResetDropDownList('LaneNameId');
    //ParamResetDropDownList('PdvId');
}


function ParamStationsOFromLSOGet() {
    var LSId = GetElementValue('LSIdO');
    $("#StationNumberIdO").empty();
    $.get("/Param/ParamStationsFromLSGet", { LSId: LSId }, function (data) {
        $.each(data, function (index, row) {
            $("#StationNumberIdO").append("<option value='" + row.StationNumber + "'>" + row.StationName + "</option>")
        });
    });
    $("#StationNumberIdO").append("<option value='" + 0 + "'>" + "--" + "</option>");
    $("#StationNumberIdO").val('0');
    $("#LaneNameIdO").val('0');

    //ShowReport('StationNumberId' + 'Parent');
    //HideReport('LaneNameId' + 'Parent');
    //HideReport('PdvId' + 'Parent');

    //ParamResetDropDownList('LaneNameId');
    //ParamResetDropDownList('PdvId');
}

function GetElementValue(Id) {
    var item = document.getElementById(Id);
    var value = item.value;
    return value;
}



function ElementBooleanGet(ElementId) {
    return new Boolean($('#' + ElementId + '').is(":checked"));
}

function ElementBooleanSet(ElementId, Value) {
    document.getElementById(ElementId).checked = Value;
}

function GetElementDropDownListValue(Id) {
    var item = document.getElementById(Id);
    var value = item.options[item.selectedIndex].value;
    return value;
}

function ElementDropDownListValueGet(Id) {
    var item = document.getElementById(Id);
    var value = item.options[item.selectedIndex].value;
    return value;
}

function GetElementDateString(Id) {
    //Get YYYYMMDD from date-picker
    var item = document.getElementById(Id);
    var value = item.value.replace('-', '').replace('-', '');
    return value;
}

function GetDigits(OldValue, DigitsNumber) {
    var len = parseInt(new String(OldValue).length);
    var lenmax = parseInt(DigitsNumber);
    var gap = lenmax - len;
    var NewValue = new String(OldValue);
    //alert(gap);
    if (gap > 0) {
        for (i = 0; i < gap; i++) {
            NewValue = "0" + new String(NewValue);
        }
    }
    return NewValue;
}

function DisplayHtmlRawParam(HtmlRaw, Pattern, ColNumber) {
    var JsHtmlRaw = HtmlRaw;
    $('#' + Pattern + 'ParamCol' + ColNumber + 'Id').append(JsHtmlRaw.html);
};

function DisplayHtmlRaw(HtmlRaw, ElementParentId) {
    var Element = HtmlRaw;
    $('#' + ElementParentId).append(Element.html);
};


function DataTableAdd(HtmlRaw, ElementParentId) {
    var Element = HtmlRaw;
    $('#' + ElementParentId).append(Element.html);
};

function RemoveElement(ElementId) {
    var Element = document.getElementById(ElementId);
    $("label[for='" + ElementId + "']").hide();
    Element.parentNode.removeChild(Element);
}

function AddInputElement(ParentId, ElementId, ElementLabel, ElementType) {
    var HtmlParent = document.getElementById(ParentId);
    var InputElement =
        '<div id="' + ElementId + 'ParentId' + '" class="form-group row mb-1">' +
        '<label for= "' + ElementId + '" class="col-2 col-form-label" >' + ElementLabel + '</label >' +
        '<div class="col-sm-6">' +
        '<input class="form-control" type="' + ElementType + '" id="' + ElementId + '">' +
        '</div>' +
        '</div>'
    HtmlParent.innerHTML = InputElement;
}

function AddElement(ParentId, elementTag, elementId, html) {
    // Adds an element to the document
    var p = document.getElementById(ParentId);
    var newElement = document.createElement(elementTag);
    newElement.setAttribute('id', elementId);
    newElement.innerHTML = html;
    p.appendChild(newElement);
}

function ShowReport(Pattern) {
    $('#' + Pattern).show();
}

function ShowParent(Pattern) {
    $('#' + Pattern + 'Parent').show();
}

function ShowTableReport(TableId) {
    $('#' + TableId + 'TableReportId').show();
}

function ShowGridReport(GridId) {
    $('#' + GridId + 'GridReportId').show();
}

function ShowPageReport(PageId) {
    $('#' + PageId + 'PageReportId').show();
}

function ActivateReport(Pattern, flag) {
    if (flag == true) {
        $('#' + Pattern).show();
    }
    else {
        $('#' + Pattern).hide();
    }

}

function DhmValue12Set(ElementId, Year, Month, Day, Hour, Minute) {
    document.getElementById(ElementId).value = Year + '-' + GetDigits(Month, 2) + '-' + GetDigits(Day, 2) + 'T' + GetDigits(Hour, 2) + ':' + GetDigits(Minute, 2);
}

function ShowPage(HeaderIndex, TimeIndex) {
    ShowReport('Page' + HeaderIndex + TimeIndex + '_PageReportId');
}

function ShowGrid(HeaderIndex, TimeIndex, PageIndex, PageRowIndex, PatternIndex) {
    ShowReport('Grid' + HeaderIndex + TimeIndex + PageIndex + PageRowIndex + PatternIndex + '_GridReportId');
}

function ShowControl(ControlPattern) {
    $('#' + ControlPattern + '').show();
    $("label[for='" + ControlPattern + "']").show();
}

function HideReport(ReportId) {
    $('#' + ReportId).hide();
}

function HideParent(ElementId) {
    $('#' + ElementId + 'Parent').hide();
}

function HideTableReport(TableId) {
    $('#' + TableId + 'TableReportId').hide();
}

function HideGridReport(GridId) {
    $('#' + GridId + 'GridReportId').hide();
}

function HidePageReport(PageId) {
    $('#' + PageId + 'PageReportId').hide();
}

function HideChartReport(TableId) {
    $('#' + TableId + 'ChartReportId').hide();
}

function HideElement(ElementId) {
    $('#' + ElementId).hide();
}

function HideControl(ControlPattern) {
    $('#' + ControlPattern + '').hide();
    $("label[for='" + ControlPattern + "']").hide();
}

function SetButtonIcon(ButtonId, IconName) {
    $('#' + ButtonId).find('span').attr('class', IconName);
}

function GetDateFormat(dateObj, format) {
    //var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var curr_date = dateObj.getDate();
    var curr_month = dateObj.getMonth();
    curr_month = curr_month + 1;
    var curr_year = dateObj.getFullYear();
    var curr_min = dateObj.getMinutes();
    var curr_hr = dateObj.getHours();
    var curr_sc = dateObj.getSeconds();
    if (curr_month.toString().length == 1)
        curr_month = '0' + curr_month;
    if (curr_date.toString().length == 1)
        curr_date = '0' + curr_date;
    if (curr_hr.toString().length == 1)
        curr_hr = '0' + curr_hr;
    if (curr_min.toString().length == 1)
        curr_min = '0' + curr_min;

    if (format == 1)//dd-mm-yyyy
    {
        return curr_date + "-" + curr_month + "-" + curr_year;
    }
    else if (format == 2)//yyyy-mm-dd
    {
        return curr_year + "-" + curr_month + "-" + curr_date;
    }
    else if (format == 3)//dd/mm/yyyy
    {
        return curr_date + "/" + curr_month + "/" + curr_year;
    }
    else if (format == 4)// MM/dd/yyyy HH:mm:ss
    {
        return curr_date + "/" + curr_month + "/" + curr_year + " " + curr_hr + ":" + curr_min + ":" + curr_sc;
    }
}



function GetColumnArraySub(DataTableId, Index, LabelLenght) {
    var i = 1;
    var ColumnArray = [];
    var column = $('#' + DataTableId + '').DataTable().column(Index);
    column.data().each(function (d, j) {
        ColumnArray.length = i - 1;
        ColumnArray = ReplaceAtArray(ColumnArray, i - 1, new String(d).substr(0, LabelLenght));
        i = i + 1;
    });
    return ColumnArray;
}

function GetColumnArrayDate(DataTableId, Index, LabelLenght) {
    var i = 1;
    var ColumnArray = [];
    var column = $('#' + DataTableId + '').DataTable().column(Index);
    var Rowdate;
    column.data().each(function (d, j) {
        ColumnArray.length = i - 1;
        if (d === null) {
            Rowdate = "";
        }
        else {
            var pattern = /Date\(([^)]+)\)/;//date format from server side
            var results = pattern.exec(d);
            var dt = new Date(parseFloat(results[1]));
            Rowdate = dt.toLocaleDateString() + " " + dt.toLocaleTimeString();
        }
        ColumnArray = ReplaceAtArray(ColumnArray, i - 1, Rowdate);
        i = i + 1;
    });
    return ColumnArray;
}

function GetColumnArrayTwoTime(DataTableId, TimeIndex, DataIndex) {
    var i = 1;
    var ColumnArray = [];
    var Couple = ['', ''];
    var columnTime = $('#' + DataTableId + '').DataTable().column(TimeIndex);
    var columnData = $('#' + DataTableId + '').DataTable().column(DataIndex);
    columnTime.data().each(function (t, j) {
        ColumnArray.length = i - 1;
        Couple = [t, ''];
        ColumnArray = ReplaceAtArray(ColumnArray, i - 1, Couple);
        i = i + 1;
    });
    return ColumnArray;
}

function ReplaceAtArray(array, index, value) {
    const ret = array.slice(0);
    ret[index] = value;
    return ret;
}

function FormatArrayFourGet(Value0, Value1, Value2, Value3) {
    var RowArray = [];
    RowArray.length = 4;
    RowArray = ReplaceAtArray(RowArray, 0, Value0);
    RowArray = ReplaceAtArray(RowArray, 1, Value1);
    RowArray = ReplaceAtArray(RowArray, 2, Value2);
    RowArray = ReplaceAtArray(RowArray, 3, Value3);
    return RowArray;
}

function FormatArrayFiveGet(Value0, Value1, Value2, Value3, Value4) {
    var RowArray = [];
    RowArray.length = 5;
    RowArray = ReplaceAtArray(RowArray, 0, Value0);
    RowArray = ReplaceAtArray(RowArray, 1, Value1);
    RowArray = ReplaceAtArray(RowArray, 2, Value2);
    RowArray = ReplaceAtArray(RowArray, 3, Value3);
    RowArray = ReplaceAtArray(RowArray, 4, Value4);
    return RowArray;
}

function FormatArraySixGet(Value0, Value1, Value2, Value3, Value4, Value5) {
    var RowArray = [];
    RowArray.length = 6;
    RowArray = ReplaceAtArray(RowArray, 0, Value0);
    RowArray = ReplaceAtArray(RowArray, 1, Value1);
    RowArray = ReplaceAtArray(RowArray, 2, Value2);
    RowArray = ReplaceAtArray(RowArray, 3, Value3);
    RowArray = ReplaceAtArray(RowArray, 4, Value4);
    RowArray = ReplaceAtArray(RowArray, 5, Value5);
    return RowArray;
}

function FormatArraySevenGet(Value0, Value1, Value2, Value3, Value4) {
    var RowArray = [];
    RowArray.length = 5;
    RowArray = ReplaceAtArray(RowArray, 0, Value0);
    RowArray = ReplaceAtArray(RowArray, 1, Value1);
    RowArray = ReplaceAtArray(RowArray, 2, Value2);
    RowArray = ReplaceAtArray(RowArray, 3, Value3);
    RowArray = ReplaceAtArray(RowArray, 4, Value4);
    return RowArray;
}

function FormatArrayEightGet(Value0, Value1, Value2, Value3, Value4, Value5, Value6, Value7, Value8) {
    var RowArray = [];
    RowArray.length = 8;
    RowArray = ReplaceAtArray(RowArray, 0, Value0);
    RowArray = ReplaceAtArray(RowArray, 1, Value1);
    RowArray = ReplaceAtArray(RowArray, 2, Value2);
    RowArray = ReplaceAtArray(RowArray, 3, Value3);
    RowArray = ReplaceAtArray(RowArray, 4, Value4);
    RowArray = ReplaceAtArray(RowArray, 5, Value4);
    RowArray = ReplaceAtArray(RowArray, 6, Value4);
    RowArray = ReplaceAtArray(RowArray, 7, Value4);
    RowArray = ReplaceAtArray(RowArray, 8, Value4);
    return RowArray;
}

function FormatArrayThreeGet(Value0, Value1, Value2) {
    var RowArray = [];
    RowArray.length = 3;
    RowArray = ReplaceAtArray(RowArray, 0, Value0);
    RowArray = ReplaceAtArray(RowArray, 1, Value1);
    RowArray = ReplaceAtArray(RowArray, 2, Value2);
    return RowArray;
}

function GetBackgroundColor(DataTableId) {
    var i = 1;
    var BackgroundColor = [];
    var column = $('#' + DataTableId + '').DataTable().column(0);
    column.data().each(function (d, j) {
        BackgroundColor.length = i - 1;
        BackgroundColor = ReplaceAtArray(BackgroundColor, i - 1, GetDynamicColor());
        i = i + 1;
    });
    return BackgroundColor;
}

function GetDynamicColor() {
    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    return "rgb(" + r + "," + g + "," + b + ")";
}

function GetDateStringFromDatePicker(DatePickerId) {
    var DateStringDatePicker = new String($('#' + DatePickerId).val().replace("-", "").replace("-", ""));
    var YearS = new String(DateStringDatePicker).substr(0, 4);
    var MonthS = new String(DateStringDatePicker).substr(4, 2);
    var DayS = new String(DateStringDatePicker).substr(6, 2);

    var DateString = new String(DayS + MonthS + YearS);
    return DateString;
}


function GetDhmStringFromDatePicker(DatePickerId) {


    var DateStringDatePicker = new String($('#' + DatePickerId).val().replace("-", "").replace("-", "").replace(" ", "").replace(":", "").replace("T", ""));

    var i = DateStringDatePicker.length;
    var YearS = '';
    var MonthS = '';
    var DayS = '';
    var HourS = '';
    var MinuteS = '';
    var DateString = '';

    if (i == 8) {
        YearS = new String(DateStringDatePicker).substr(0, 4);
        MonthS = new String(DateStringDatePicker).substr(4, 2);
        DayS = new String(DateStringDatePicker).substr(6, 2);

        DateString = new String(DayS + MonthS + YearS);
    }
    if (i == 12) {
        YearS = new String(DateStringDatePicker).substr(0, 4);
        MonthS = new String(DateStringDatePicker).substr(4, 2);
        DayS = new String(DateStringDatePicker).substr(6, 2);
        HourS = new String(DateStringDatePicker).substr(8, 2);
        MinuteS = new String(DateStringDatePicker).substr(10, 2);

        DateString = new String(DayS + MonthS + YearS + HourS + MinuteS);
    }

    if (i == 4) {
        HourS = new String(DateStringDatePicker).substr(0, 2);
        MinuteS = new String(DateStringDatePicker).substr(2, 2);

        DateString = new String(HourS) + '' + new String(MinuteS);
    }

    return DateString;
}

function GetMonhtStringFromDatePicker(DatePickerId) {
    var MonthStringDatePicker = new String($('#' + DatePickerId).val().replace("-", ""));
    var YearS = new String(MonthStringDatePicker).substr(0, 4);
    var MonthS = new String(MonthStringDatePicker).substr(4, 2);

    var MonthString = new String(MonthS + YearS);
    return MonthString;
}

function GetDateValueFromDateString(DateString) {
    var YearS = parseInt(DateString.substr(4, 4));
    var MonthS = parseInt(DateString.substr(2, 2));
    var DayS = parseInt(DateString.substr(0, 2));
    var DateValue = new Date(YearS, MonthS, DayS, 0, 0, 0, 0);
    //alert(DateValue);
    return DateValue;
}

function DataTableDateValueFromDateStringGet(DateString) {
    var YearS = parseInt(DateString.substr(4, 4));
    var MonthS = parseInt(DateString.substr(2, 2));
    var DayS = parseInt(DateString.substr(0, 2));
    var DateValue = GetDigits(new String(DayS), 2) + '/' + GetDigits(new String(MonthS), 2) + '/' + new String(YearS);
    //alert(DateValue);
    return DateValue;
}

function GetDhmStringFromDhmPicker(DatePickerId) {


    var DateStringDatePicker = new String($('#' + DatePickerId).val().replace("-", "").replace("-", "").replace("T", "").replace(":", ""));

    var YearS = new String(DateStringDatePicker).substr(0, 4);
    var MonthS = new String(DateStringDatePicker).substr(4, 2);
    var DayS = new String(DateStringDatePicker).substr(6, 2);
    var HourS = new String(DateStringDatePicker).substr(8, 2);
    var MinuteS = new String(DateStringDatePicker).substr(10, 2);

    var DateString = new String(DayS + MonthS + YearS + HourS + MinuteS);
    return DateString;
}

function DataTableDhmStringFromDhmValueGet(DhmValue) {
    var DhmString = new String(DhmValue).replace("/", "").replace("/", "").replace(":", "").replace(":", "");
    alert(DhmString);
    return DhmString;
}

function GetFirstCellValue(TableId, ColumnIndex) {
    var value = 0;
    $('#' + TableId).DataTable().column(ColumnIndex).data().each(function (d, j) {
        //alert(d);
        value = d;
    });;
    return value;
}

function GetFirstCellPercentageValue(TableId, ColumnIndex, TotalColumnIndex) {

    var value = 0;
    var total = 0;
    var percentage = 0;

    $('#' + TableId).DataTable().column(ColumnIndex).data().each(function (d, j) {
        value = d;
    });;

    $('#' + TableId).DataTable().column(TotalColumnIndex).data().each(function (d, j) {
        total = d;
    });;

    //alert(total);

    if (total != 0 && total != null) {
        //percentage = (value / total * 100).toFixed(2);
        percentage = (value / total * 100).toFixed(2);
    };

    //alert(percentage);
    return percentage;

}

function GetDhmValueFromDataTableDate(data) {
    if (data === null) return "";
    var pattern = /Date\(([^)]+)\)/;
    var results = pattern.exec(data);
    var dt = new Date(parseFloat(results[1]));
    return dt.toLocaleDateString() + ' ' + dt.toLocaleTimeString();

    if (screen.width <= 400) {//iPhone6/7/8
        return dt.toLocaleDateString();
    }
    else {
        return dt.toLocaleDateString() + ' ' + dt.toLocaleTimeString();
    }
}

function GetDateValueFromDataTableDate(data) {
    if (data === null) return "";
    var pattern = /Date\(([^)]+)\)/;
    var results = pattern.exec(data);
    var dt = new Date(parseFloat(results[1]));
    return dt.toLocaleDateString();
}

function DataTableDateValueFromRowGet(row) {
    if (screen.width <= 400) {//iPhone6/7/8
        return GetDigits(row['Day'], 2) + '/' + GetDigits(row['Month'], 2);
    }
    else {
        return GetDigits(row['Day'], 2) + '/' + GetDigits(row['Month'], 2) + '/' + GetDigits(row['Year'], 2);
    }
}

function DataTableDateValueStartFromRowGet(row) {
    if (screen.width <= 400) {//iPhone6/7/8
        return GetDigits(row['DayS'], 2) + '/' + GetDigits(row['MonthS'], 2);
    }
    else {
        return GetDigits(row['DayS'], 2) + '/' + GetDigits(row['MonthS'], 2) + '/' + GetDigits(row['YearS'], 2);
    }
}

function DataTableDateValueEndFromRowGet(row) {
    if (screen.width <= 400) {//iPhone6/7/8
        return GetDigits(row['DayE'], 2) + '/' + GetDigits(row['MonthE'], 2);
    }
    else {
        return GetDigits(row['DayE'], 2) + '/' + GetDigits(row['MonthE'], 2) + '/' + GetDigits(row['YearE'], 2);
    }
}

function DataTableDhmValueFromRowGet(row) {
    return GetDigits(row['Day'], 2) + '/' + GetDigits(row['Month'], 2) + '/' + GetDigits(row['Year'], 2) + ' '
        + GetDigits(row['Hour'], 2) + ':' + GetDigits(row['Minute'], 2) + ':' + GetDigits(row['Second'], 2);
}

function DataTableDhmValueGet(Year, Month, Day, Hour, Minute, Second) {
    return GetDigits(Day, 2) + '/' + GetDigits(Month, 2) + '/' + GetDigits(Year, 2) + ' '
        + GetDigits(Hour, 2) + ':' + GetDigits(Minute, 2) + ':' + GetDigits(Second, 2);
}

function GetDateValueNullableFromDataTableDate(data) {
    if (data === null) return "";
    var pattern = /Date\(([^)]+)\)/;
    var results = pattern.exec(data);
    var dt = new Date(parseFloat(results[1]));

    var date = dt.toLocaleDateString();

    if (date == "31/12/1899") {
        date = "";
    }

    return date;
}

function GetDhmValueNulFromDataTableDate(data) {
    if (data === null) return "";
    var pattern = /Date\(([^)]+)\)/;
    var results = pattern.exec(data);
    var dt = new Date(parseFloat(results[1]));

    var date = dt.toLocaleDateString();

    if (date == "31/12/1899") {
        date = "";
    }
    else {
        date = dt.toLocaleDateString() + ' ' + dt.toLocaleTimeString();
    }

    return date;
}

function GetDhmValueNullableFromDataTableDate(data) {
    if (data === null) return "";
    var pattern = /Date\(([^)]+)\)/;
    var results = pattern.exec(data);
    var dt = new Date(parseFloat(results[1]));

    var date = dt.toLocaleDateString() + ' ' + dt.toLocaleTimeString();

    if (new String(date).substr(0, 10) == "31/12/1899") {
        //return '<button style="background-color: Transparent;border: none;"><span class="fas fa-exclamation-triangle" style="color:red"></span></button>';
        return '';
    }
    else {
        return date;
    }
}




function DataTableDhmValueGet(Pattern, Id, data) {
    if (data === null) return "";
    var pattern = /Date\(([^)]+)\)/;
    var results = pattern.exec(data);
    var dt = new Date(parseFloat(results[1]));
    return '<span id="' + Pattern + Id + '" > ' + dt.toLocaleDateString() + ' ' + dt.toLocaleTimeString() + '</span>';
}

function GetHmFromDataTableDate(data) {
    if (data === null) return "";
    var pattern = /Date\(([^)]+)\)/;
    var results = pattern.exec(data);
    var dt = new Date(parseFloat(results[1]));

    var HM = dt.toLocaleTimeString().substr(0, 5);

    if (HM == "23:59") {
        return "--:--"
    }
    else {
        return HM;
    }
}


function GetDateJsFromDataTableDate(data) {
    if (data === null) return "";
    var pattern = /Date\(([^)]+)\)/;
    var results = pattern.exec(data);
    return new Date(parseFloat(results[1]));
}

function GetGapFromDataTable(data) {
    if (($('<div/>').text(data.toFixed(2)).html() !== "0.00") && ($('<div/>').text(data.toFixed(2)).html() !== "-0.00"))
        return '<span  class="badge badge-danger">' + data.toFixed(2) + '</span>';
    else return '<button style="background-color: Transparent;border: none;"><span class="fas fa-check" style="color:#28a745"></span></button>';
}


function GetGapInfoFromDataTable(data) {
    if (data.toFixed(2) == 0)
        return '<i class="fa fa-circle" style="font-size: 8px; margin-right: 4px; color: #28a745;"></i>';
    else return '<i class="fa fa-circle" style="font-size: 8px; margin-right: 4px; color: orange;"></i>';
}

function DataTableGapInfoGet(ValueOld, ValueNew) {
    var Gap = ValueNew.toFixed(0) - ValueOld.toFixed(0);
    if (Gap.toFixed(0) == 0) {
        return '<i class="fa fa-circle" style="font-size: 8px; margin-right: 4px; color: #28a745;"></i>';
    }
    else {
        return '<i class="fa fa-circle" style="font-size: 8px; margin-right: 4px; color: red;"></i>';
    }
}

function DataTableCertifiedInfoGet(IsCertified) {
    if (IsCertified) {
        return '<i class="fa fa-circle" style="font-size: 8px; margin-right: 4px; color: #28a745;"></i>';
    }
    else {
        return '<i class="fa fa-circle" style="font-size: 8px; margin-right: 4px; color: red;"></i>';
    }
}

function DataTableIsValidInfoGet(IsValid) {
    if (IsValid) {
        return '<i class="fa fa-circle" style="font-size: 8px; margin-right: 4px; color: #28a745;"></i>';
    }
    else {
        return '<i class="fa fa-circle" style="font-size: 8px; margin-right: 4px; color: red;"></i>';
    }
}

function DataTableGapWithValueInfoGet(ValueOld, ValueNew) {
    var Gap = ValueNew.toFixed(0) - ValueOld.toFixed(0);
    //if (Gap.toFixed(0) >= 0) {
    //    return DataTableGapInfoGet(ValueOld, ValueNew) + DataTableFormatIntGet(ValueNew);
    //}
    //else {
    //    return '(' + Gap + ') ' + DataTableGapInfoGet(ValueOld, ValueNew) + DataTableFormatIntGet(ValueNew);
    //} 
    if (Gap.toFixed(0) == 0) {
        return DataTableGapInfoGet(ValueOld, ValueNew) + DataTableFormatIntGet(ValueNew);
    }
    else {
        return '(' + Gap + ') ' + DataTableGapInfoGet(ValueOld, ValueNew) + DataTableFormatIntGet(ValueNew);
    }
}

function DataTableGapWithoutValueInfoGet(ValueOld, ValueNew) {
    var Gap = ValueNew.toFixed(0) - ValueOld.toFixed(0);
    if (Gap.toFixed(0) == 0) {
        return DataTableGapInfoGet(ValueOld, ValueNew);
    }
    else {
        return Gap;
    }
}

function DataTableGapWithoutValueInfoThresholdGet(ValueOld, ValueNew, Threshold) {
    var Gap = ValueNew.toFixed(0) - ValueOld.toFixed(0);
    if (Gap.toFixed(0) <= Threshold) {
        return '<i class="fa fa-circle" style="font-size: 8px; margin-right: 4px; color: #28a745;"></i>';;
    }
    else {
        return '<span style="color: red;">' + Gap + '</span>';
    }
}

function GetGapDoubleFromDataTable(data) {
    if (($('<div/>').text(data.toFixed(2)).html() !== "0.00") && ($('<div/>').text(data.toFixed(2)).html() !== "-0.00"))
        return '<span  class="badge badge-danger">' + numFormat(data.toFixed(2)) + '</span>';
    else return '<i class="fa fa-circle" style="font-size: 8px; margin-right: 4px; color: #28a745;"></i>';
}


function GetGapNumberFromDataTable(data) {
    if (data !== 0)
        return '<span  class="badge badge-danger">' + data + '</span>';
    else return '<button style="background-color: Transparent;border: none;"><span class="fas fa-check" style="color:#28a745"></span></button>';
}

function GetGapHandledFromDataTable(data, Gap) {
    if (Gap == 0)
        return '<span  class="badge badge-success" >' + data + '</span>';
    else return '<span  class="badge badge-danger" >' + data + '</span>';
}

function DataTableDayGapGet(rate, Gap, onclick) {
    if (Gap == 0)
        return '<span  class="badge badge-success" >' + rate + '</span>';
    else return '<span  class="badge badge-danger" onclick="' + onclick + '" >' + rate + '</span>';
}

function GetGapBooleanFromDataTable(data) {
    if (data == 1)
        return '<button style="background-color: Transparent;border: none;"><span class="fas fa-check" style="color:#28a745"></span></button>';
    else return '<button style="background-color: Transparent;border: none;"><span class="fas fa-exclamation-triangle" style="color:red"></span></button>';
}


function GetGapStringFromDataTable(data, value) {
    if (data == value)
        return '<span  class="badge badge-danger">' + data + '</span>';
    else return '<span  class="badge badge-success" >' + data + '</span>';
}

function GetGapPostWithoutReceiptFromDataTable(BagNumber, CashierNumber, ModeName) {
    if (CashierNumber !== '999999' && ModeName == 'Normal') {
        if (BagNumber == '') {
            return '<button style="background-color: Transparent;border: none;"><span class="fas fa-exclamation-triangle" style="color:red"></span></button>';
        }
        else {
            return BagNumber;
        }
    }
    return BagNumber;
}


function GetGapCtrFromDataTable(data, CtrValue) {
    if (CtrValue == 1)
        return '<span  class="badge badge-danger">' + numFormat(data) + '</span>';
    else return '<button style="background-color: Transparent;border: none;"><span class="fas fa-check" style="color:#28a745"></span></button>';
}

function GetGapCtrSumFromDataTable(CtrValue) {
    if (CtrValue == 0)
        return '<i class="fa fa-circle" style="font-size: 8px; margin-right: 4px; color: #28a745;"></i>';
    else return '<button style="background-color: Transparent;border: none;"><span class="fas fa-exclamation-triangle" style="color:red"></span></button>';
}


function DataTableCtrGet(CtrFlag, CtrValue) {
    if (CtrFlag == 1)
        return '<span  class="badge badge-danger">' + CtrValue + '</span>';
    else return '<button style="background-color: Transparent;border: none;"><span class="fas fa-check" style="color:#28a745"></span></button>';
}

function GetCtrYesOrNoFromDataTable(CtrValue) {
    if (CtrValue == 0) {
        return '<button style="background-color: Transparent;border: none;"><span class="fas fa-check" style="color:#28a745"></span></button>';
    }
    else {
        if (CtrValue == 1) {
            return '<button style="background-color: Transparent;border: none;"><span class="fas fa-exclamation-triangle" style="color:red"></span></button>';
        }
        else {
            return '';
        }
    }
}

function GetGapIntFromDataTable(Gap) {
    if (Gap == 0)
        return '<i class="fa fa-circle" style="font-size: 8px; margin-right: 4px; color: #28a745;"></i>';
    else return '<span  class="badge badge-danger">' + Gap + '</span>';
}

function CertCtrFlagGet(Ctr01, Ctr02, Ctr03, Ctr04) {
    if (Ctr01.toFixed(2) == 0 && Ctr02.toFixed(2) == 0 && Ctr03.toFixed(2) == 0 && Ctr04.toFixed(2) == 0)
        return '<i class="fa fa-circle" style="font-size: 8px; margin-right: 4px; color: #28a745;"></i>';
    else return '<i class="fa fa-circle" style="font-size: 8px; margin-right: 4px; color: red;"></i>';
}

function CertCtrFlagBooleanGet(IsCtr01, IsCtr02, IsCtr03, IsCtr04) {
    if (IsCtr01 == 1 && IsCtr02 == 1 && IsCtr03 == 1 && IsCtr04 == 1)
        return '<i class="fa fa-circle" style="font-size: 8px; margin-right: 4px; color: #28a745;"></i>';
    else return '<i class="fa fa-circle" style="font-size: 8px; margin-right: 4px; color: red;"></i>';
}

//function CertCtrFlagBooleanMultipleGetFour(IsCtr01, IsCtr02, IsCtr03, IsCtr04) {
//    if (IsCtr01 == 1 && IsCtr02 == 1 && IsCtr03 == 1 && IsCtr04)
//        return '<i class="fa fa-circle" style="font-size: 8px; margin-right: 4px; color: #28a745;"></i>' + ;
//    else return '<i class="fa fa-circle" style="font-size: 8px; margin-right: 4px; color: red;"></i>';
//}

function CertStationOkNumberGet(StationsOkNumber) {
    if (StationsOkNumber.toFixed(2) == 0)
        return '<i class="fa fa-circle" style="font-size: 8px; margin-right: 4px; color: red;"></i>';
    else return '<i class="fa fa-circle" style="font-size: 8px; margin-right: 4px; color: #28a745;"></i>';
}

function DataTableStringTruncate(data, lenght) {
    if (data.length <= lenght) {
        return data;
    }
    else {
        return data.slice(0, lenght) + '...'
    }
}

function DataTableGapDetailGetGap(data, type, Pattern, Id) {

    if (type == 'Int') {
        if (data == 0) {
            return '<button style="background-color: Transparent;border: none;"><span class="fas fa-check" style="color:#28a745"></span></button>';
        }
        else {
            return '<span  class="badge badge-danger" onclick="' + Pattern + '(\'' + Id + '\')" >' + data + '</span>';
        }
    }
    if (type == 'Double') {

    }
}

function DataTableEvoGet(data) {
    if (data.toFixed(2) >= 0) {
        return '<span  class="badge badge-success" >' + data.toFixed(2) + '%</span>';
    }
    else {
        return '<span  class="badge badge-danger">' + data.toFixed(2) + '%</span>';
    }
}

function DataTableEvolutionGet(dataOld, data) {
    var evo = 0;
    if (dataOld.toFixed(2) != 0) {
        var evoTmp = ((data - dataOld) / dataOld) * 100;
        evo = evoTmp.toFixed(2);
    }

    if (evo >= 0) {
        return '<span  class="badge badge-success" >' + evo + '%</span>';
    }
    else {
        return '<span  class="badge badge-danger">' + evo + '%</span>';
    }
}

function DataTableEvoADoubleGet(data) {
    if (data.toFixed(2) > 0) {
        return '<span  class="badge badge-success" >' + numFormat(data.toFixed(2)) + ' DH</span>';
    }
    else {
        if (data.toFixed(2) == 0) {
            return data.toFixed(2);
        }
        else {
            return '<span  class="badge badge-danger">' + numFormat(data.toFixed(2)) + ' DH</span>';
        }

    }
}

function DataTableGapAbsoluteGet(data) {
    if (data.toFixed(0) > 0 || data.toFixed(0) < 0) {
        return '<span  class="badge-alert badge-danger" >' + numShortFormat(data.toFixed(0)) + '</span>';
    }
    else {
        return '<span class="badge-alert badge-success" >' + numShortFormat(data.toFixed(0)) + '</span>';
    }
}

function DataTableDiffIntGet(dataSource, dataTarget) {
    var Diff = dataTarget.toFixed(0) - dataSource.toFixed(0);
    if (Diff.toFixed(0) > 0 || Diff.toFixed(0) < 0) {
        return '<span  class="badge-alert badge-danger" >' + numShortFormat(Diff) + '</span>';
    }
    else {
        return '<span class="badge-alert badge-success" >' + numShortFormat(Diff) + '</span>';
    }
}

function DataTableDiffIntThresholdGet(dataSource, dataTarget, Threshold) {
    var Diff = dataTarget.toFixed(0) - dataSource.toFixed(0);
    if (Diff.toFixed(0) > Threshold || Diff.toFixed(0) < - Threshold) {
        return '<span  class="badge-alert badge-danger" >' + numShortFormat(Diff) + '</span>';
    }
    else {
        return '<span class="badge-alert badge-success" >' + numShortFormat(Diff) + '</span>';
    }
}

function DataTableDiffIntFourThresholdsLowGet(dataSource, Threshold0, Threshold1, Threshold2, Threshold3) {
    var Value = dataSource.toFixed(0);
    if (Value <= Threshold0) {
        return '<span  class="badge-alert badge-danger" >' + numShortFormat(Value) + '</span>';
    }
    else {
        if (Value <= Threshold1) {
            return '<span  class="badge-alert badge-warning" >' + numShortFormat(Value) + '</span>';
        }
        else {
            if (Value <= Threshold2) {
                return '<span  class="badge-alert badge-info" >' + numShortFormat(Value) + '</span>';
            }
            else {
                if (Value <= Threshold3) {
                    return '<span  class="badge-alert badge-info" >' + numShortFormat(Value) + '</span>';
                }
                else {
                    return '<span class="badge-alert badge-Success" >' + numShortFormat(Value) + '</span>';
                }
            }
        }
    }
}

function DataTableDiffIntXorGet(dataSource, dataTarget) {
    var Diff = dataTarget.toFixed(0) - dataSource.toFixed(0);
    if (Diff.toFixed(0) > 0 || Diff.toFixed(0) < 0) {
        return '<span  class="badge-alert badge-danger" >' + numShortFormat(Diff) + '</span>';
    }
    else {
        return '';
    }
}

function DataTableDiffIntWithFlagGet(dataSource, dataTarget, IsActive) {
    if (IsActive) {
        var Diff = dataTarget.toFixed(0) - dataSource.toFixed(0);
        if (Diff.toFixed(0) > 0 || Diff.toFixed(0) < 0) {
            return '<span  class="badge-alert badge-danger" >' + numShortFormat(Diff) + '</span>';
        }
        else {
            return '<span class="badge-alert badge-success" >' + numShortFormat(Diff) + '</span>';
        }
    }
    else {
        return '0';
    }

}

function DataTableDiffDoubleGet(dataSource, dataTarget) {
    var Diff = dataTarget.toFixed(2) - dataSource.toFixed(2);
    if (Diff.toFixed(2) > 0 || Diff.toFixed(2) < 0) {
        return '<span  class="badge-alert badge-danger" >' + numFormat(Diff) + '</span>';
    }
    else {
        return '<span class="badge-alert badge-success" >' + numFormat(Diff) + '</span>';
    }
}

function DataTableDifferenceIntGet(dataSource, dataTarget) {
    var Diff = dataTarget.toFixed(0) - dataSource.toFixed(0);
    return numShortFormat(Diff);
}

function DataTableEvoRGet(data) {
    if (data.toFixed(2) > 0) {
        return '<span  class="badge badge-success" >' + numFormat(data.toFixed(2)) + ' %</span>';
    }
    else {
        if (data.toFixed(2) == 0) {
            return '0%';
        }
        else {
            return '<span  class="badge badge-danger">' + numFormat(data.toFixed(2)) + ' %</span>';
        }

    }
}


function DataTableGapRelativeGet(data) {
    if (data.toFixed(2) > 6 || data.toFixed(2) < -6) {
        return '<span  class="badge badge-danger" >' + numFormat(data.toFixed(2)) + ' /10 000</span>';
    }
    else {
        return '<span  class="badge badge-success" >' + numFormat(data.toFixed(2)) + ' /10 000</span>';
    }
}


function DataTableGapRelativeIntGet(data) {
    if (data > 6 || data < -6) {
        return '<span  class="badge badge-danger" >' + numShortFormat(data) + ' /10 000</span>';
    }
    else {
        return '<span  class="badge badge-success" >' + numShortFormat(data) + ' /10 000</span>';
    }
}

function DataTableFlagGet(color) {
    return '<i class="fa fa-circle" style="font-size: 8px; margin-right: 4px; color: ' + color + ';"></i>';
}

function DataTableTextHighlightGet(text, color) {
    return '<span class="" style="border-radius: .25rem;background-color: ' + color + ';">' +
        '<span class="" style="font-size: 12px;">' + text + '</span>'
        + '</span>';
}

function CertCtrBitGet(Ctr01) {
    if (Ctr01 == 0)
        return '<i class="fa fa-circle" style="font-size: 8px; margin-right: 4px; color: #28a745;"></i>';
    else return '<i class="fa fa-circle" style="font-size: 8px; margin-right: 4px; color: red;"></i>';
}

function ParamResetDropDownList(ElementId) {
    $('#' + ElementId).append("<option value='" + 0 + "'>" + "--" + "</option>");
    $('#' + ElementId).val('0');
}

function ElementDropDownListReset(ElementId) {
    $('#' + ElementId).append("<option value='" + 0 + "'>" + "--" + "</option>");
    $('#' + ElementId).val('0');
}

function ParamResetToZeroDropDownList(ElementId) {
    $('#' + ElementId).val('0');
}

function DropDownListSet(ElementId, OptionValue) {
    $('#' + ElementId).val(OptionValue);
}

function InputDefaultValueSet(ElementId, OptionValue) {
    $('#' + ElementId).val(OptionValue);
}

function ElementDropDownListSet(ElementId, OptionValue) {
    $('#' + ElementId).val(OptionValue);
}

function ElementValueSet(ElementId, OptionValue) {
    $('#' + ElementId).val(OptionValue);
}

function DataTableIntOnClickGet(Value, OnClick) {
    //return '<button onclick= ' + OnClick + '>' + DataTableFormatIntGet(Value) + '</span>';

    return '<button type="button" class="btn-cl gc-bc1-cl" onclick="' + OnClick + '" style="width: 100%;">' +
        '<div class="btn-txt-cl gc-c1-cl">' + DataTableFormatIntGet(Value) + '</div>' +
        '</button>';
}

function ParamGetSites() {

    $("#SiteId").empty();
    $.get("/Param/GetSites", function (data) {
        $.each(data, function (index, row) {
            $("#SiteId").append("<option value='" + row.SiteId + "'>" + row.SiteId + ' - ' + row.SiteName + "</option>")
        });
    });
    ParamResetDropDownList('SiteId');

    //var Source = GetElementValue('SourceId');
    //if (Source == '01' || Source == '08') //Ope
    //{
    //    ShowReport('SiteId' + 'Parent');
    //    ShowReport('LSId' + 'Parent');
    //    HideReport('BagContainerId' + 'Parent');
    //    HideReport('StationNumberId' + 'Parent');
    //    HideReport('LaneNameId' + 'Parent');
    //    HideReport('PdvId' + 'Parent');

    //    ParamResetDropDownList('BagContainerId');
    //    ParamResetDropDownList('StationNumberId');
    //    ParamResetDropDownList('LaneNameId');
    //    ParamResetDropDownList('PdvId');
    //}
}

function ParamTimesGet() {

    $("#TimeId").empty();
    $.get("/Param/ParamTimesGet", function (data) {
        $.each(data, function (index, row) {
            $("#TimeId").append("<option value='" + row.TimeId + "'>" + row.TimeName + "</option>")
        });
    });
    //ParamResetDropDownList('TimeId');
}


function ParamTimesOnChangeGet() {
    var TimeId = GetElementDropDownListValue('TimeId');
    if (TimeId == '01') {//Day
        HideParent('RegionId'); ElementDropDownListReset('RegionId');
        HideParent('LSId'); ElementDropDownListReset('LSId');
        HideParent('StationNumberId'); ElementDropDownListReset('StationNumberId');
        HideParent('LaneNameId'); ElementDropDownListReset('LaneNameId');
    }
    if (TimeId == '07') {//Station
        ShowParent('RegionId');
        ShowParent('LSId');
        ShowParent('StationNumberId');
        HideParent('LaneNameId');
    }
    if (TimeId == '08') {//Lane
        ShowParent('RegionId');
        ShowParent('LSId');
        ShowParent('StationNumberId');
        ShowParent('LaneNameId');
    }
}

function ParamGetLS() {

    var SiteId = new String($("#SiteId").val());
    var item = document.getElementById('LSId');
    item.options.length = 0;
    var node = document.createElement("option");
    node.value = 0;
    var textnode = document.createTextNode("--");
    node.appendChild(textnode);
    item.appendChild(node);
    $.get("/Param/GetLS", { SiteId: SiteId }, function (data) {
        $.each(data, function (index, row) {
            var node = document.createElement("option");
            node.value = row.LSId;
            var textnode = document.createTextNode(row.LSId + ' - ' + row.LSName);
            node.appendChild(textnode);
            item.appendChild(node);
        });
        //item.options[DefaultIndex].selected = 'selected';
    });

    ShowReport('LSId' + 'Parent');
    HideReport('BagContainerId' + 'Parent');
    HideReport('StationNumberId' + 'Parent');
    HideReport('LaneNameId' + 'Parent');
    HideReport('PdvId' + 'Parent');

    ParamResetDropDownList('BagContainerId');
    ParamResetDropDownList('StationNumberId');
    ParamResetDropDownList('LaneNameId');
    ParamResetDropDownList('PdvId');
}

function ParamLSGet(ElementIndex) {
    var SiteId = GetElementValue('SiteId' + ElementIndex);
    var item = document.getElementById('LSId' + ElementIndex);
    item.options.length = 0;
    var node = document.createElement("option");
    node.value = 0;
    var textnode = document.createTextNode("--");
    node.appendChild(textnode);
    item.appendChild(node);
    $.get("/Param/ParamLSGet", { Input: SiteId }, function (data) {
        $.each(data, function (index, row) {
            var node = document.createElement("option");
            node.value = row.LSId;
            var textnode = document.createTextNode(row.LSId + ' - ' + row.LSName);
            node.appendChild(textnode);
            item.appendChild(node);
        });
        //item.options[DefaultIndex].selected = 'selected';
    });
}

function ParamMessageReset() {
    $("#ParamMessageContainerId").attr("class", "");
    $("#ParamMessageIconId").attr("class", "");
    $("#ParamMessageTextId").html("");
}

function ParamMessageErrorDisplay(message) {
    $("#ParamMessageContainerId").attr("class", "badge badge-danger");
    $("#ParamMessageIconId").attr("class", "fas fa-exclamation-triangle");
    $("#ParamMessageTextId").html(message);
    ShowReport('ParamMessageContainerId');
}

function ParamMessageInfoDisplay(message) {
    $("#ParamMessageContainerId").attr("class", "badge badge-success");
    $("#ParamMessageIconId").attr("class", "fas fa-copy");
    $("#ParamMessageTextId").html(message);
    ShowReport('ParamMessageContainerId');
}

function DataTableMessageErroDisplay(Id, badge, Text) {
    $('#MessageContainerId' + Id).attr("class", badge);
    $('#MessageIconId' + Id).attr("class", "fas fa-exclamation-triangle");
    $('#MessageTextId' + Id).html(Text);
}

function ParamGetTrxLaneFilter() {
    $.get("/Param/ParamGetTrxLaneFilter", function (data) {
        $("#TrxLaneFilterId").empty();
        $("#TrxLaneFilterId").append("<option value='" + 0 + "'>" + "--" + "</option>");
        $.each(data, function (index, row) {
            $("#TrxLaneFilterId").append("<option value='" + row.TrxLaneFilterId + "'>" + row.TrxLaneFilterId + ' - ' + row.TrxLaneFilterName + "</option>")
        });
    });
}

function ParamPdvStationsGet() {
    var SiteId = GetElementValue('SiteId');
    $("#StationNumberId").empty();
    $.get("/Param/ParamPdvStationsGet", { SiteId: SiteId }, function (data) {
        $.each(data, function (index, row) {
            $("#StationNumberId").append("<option value='" + row.StationNumber + "'>" + row.StationName + "</option>")
        });
    });
    $("#StationNumberId").append("<option value='" + 0 + "'>" + "--" + "</option>");
    $("#StationNumberId").val('0');

    $("#PdvId").empty();
    $("#PdvId").append("<option value='" + 0 + "'>" + "--" + "</option>");
    $("#PdvId").val('0');
}

function ParamGetBagContainer() {
    var SiteId = new String($("#SiteId").val());
    $("#BagContainerId").empty();
    $.get("/Param/GetBagContainer", { SiteId: SiteId }, function (data) {
        $.each(data, function (index, row) {
            $("#BagContainerId").append("<option value='" + row.BagContainerId + "'>" + row.BagContainerName + " (" + row.BagContainerCeNumber + ")</option>")
        });
    });
    $("#BagContainerId").append("<option value='" + 0 + "'>" + "--" + "</option>");
    $("#BagContainerId").val('0');

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
    ShowReport('BagContainerId' + 'Parent');
}


function ParamGetBagContainerOrigine() {
    var SiteIdO = new String($("#SiteIdO").val());
    $("#BagContainerIdO").empty();
    $.get("/Param/GetBagContainer", { SiteId: SiteIdO }, function (data) {
        $.each(data, function (index, row) {
            $("#BagContainerIdO").append("<option value='" + row.BagContainerId + "'>" + row.BagContainerName + " (" + row.BagContainerCeNumber + ")</option>")
        });
    });
    $("#BagContainerIdO").append("<option value='" + 0 + "'>" + "--" + "</option>");
    $("#BagContainerIdO").val('0');

    ShowReport('BagContainerIdO' + 'Parent');
}

function ParamBagContainersAllGet(SiteId) {
    $("#BagContainerId").empty();
    $.get("/Param/GetBagContainer", { SiteId: SiteId }, function (data) {
        $.each(data, function (index, row) {
            $("#BagContainerId").append("<option value='" + row.BagContainerId + "'>" + row.BagContainerName + " (" + row.BagContainerCeNumber + ")</option>")
        });
    });
    $("#BagContainerId").append("<option value='" + 0 + "'>" + "--" + "</option>");
}

function ParamBagContainerAllSecGet(SiteId) {
    $("#BagContainerId").empty();
    $.get("/Param/ParamBagContainerAllSecGet", { SiteId: SiteId }, function (data) {
        $.each(data, function (index, row) {
            $("#BagContainerId").append("<option value='" + row.BagContainerId + "'>" + row.BagContainerName + " (" + row.BagContainerCeNumber + ")</option>")
        });
    });
    //$("#BagContainerId").append("<option value='" + 0 + "'>" + "--" + "</option>");
}

function ParamBagContainerAllSecWithZeroGet(SiteId, IsZero) {
    $("#BagContainerId").empty();
    $.get("/Param/ParamBagContainerAllSecGet", { SiteId: SiteId }, function (data) {
        $.each(data, function (index, row) {
            $("#BagContainerId").append("<option value='" + row.BagContainerId + "'>" + row.BagContainerName + " (" + row.BagContainerCeNumber + ")</option>")
        });
    });
    if (IsZero) {
        $("#BagContainerId").append("<option value='" + 0 + "'>" + "--" + "</option>");
    }
}

function ParamBagContainerOAllSecGet(SiteId) {
    $("#BagContainerIdO").empty();
    $.get("/Param/ParamBagContainerAllSecGet", { SiteId: SiteId }, function (data) {
        $.each(data, function (index, row) {
            $("#BagContainerIdO").append("<option value='" + row.BagContainerId + "'>" + row.BagContainerName + " (" + row.BagContainerCeNumber + ")</option>")
        });
    });
    //$("#BagContainerId").append("<option value='" + 0 + "'>" + "--" + "</option>");
}

function ParamBagContainerOAllSecWithZeroGet(SiteId) {
    $("#BagContainerIdO").empty();
    $.get("/Param/ParamBagContainerAllSecGet", { SiteId: SiteId }, function (data) {
        $.each(data, function (index, row) {
            $("#BagContainerIdO").append("<option value='" + row.BagContainerId + "'>" + row.BagContainerName + " (" + row.BagContainerCeNumber + ")</option>")
        });
    });
    if (IsZero) {
        $("#BagContainerIdO").append("<option value='" + 0 + "'>" + "--" + "</option>");
    }
}

function ParamBagContainersOrigineAllGet(SiteId) {
    $("#BagContainerId").empty();
    $.get("/Param/GetBagContainer", { SiteId: SiteId }, function (data) {
        $.each(data, function (index, row) {
            $("#BagContainerIdO").append("<option value='" + row.BagContainerId + "'>" + row.BagContainerName + " (" + row.BagContainerCeNumber + ")</option>")
        });
    });
    $("#BagContainerIdO").append("<option value='" + 0 + "'>" + "--" + "</option>");
}

function ParamBagContainerFromCexGet() {
    var CexId = new String($("#CexId").val());
    $("#BagContainerId").empty();
    $.get("/Param/ParamBagContainerFromCexGet", { CexId: CexId }, function (data) {
        $.each(data, function (index, row) {
            $("#BagContainerId").append("<option value='" + row.BagContainerId + "'>" + row.BagContainerName + "</option>")
        });
    });
    $("#BagContainerId").append("<option value='" + 0 + "'>" + "--" + "</option>");
    $("#BagContainerId").val('0');

    ParamResetDropDownList('StationNumberId');

    var ParamIdElement = $('#ParamId');
    if (ParamIdElement != null) {
        var ParamId = GetElementValue('ParamId');
        if (ParamId == '00' || ParamId == '01') {
            ShowReport('BagContainerId' + 'Parent');
        }
    }

    var TaskIdElement = $('#TaskId');
    if (TaskIdElement != null) {
        var TaskId = GetElementValue('TaskId');
        if (TaskId == '01' || TaskId == '02' || TaskId == '03' || TaskId == '04') {
            var Source = GetElementValue('SourceId');
            if (Source != '05') {
                ShowReport('BagContainerId' + 'Parent');
            }
        }
    }


}

function ParamGetBagContainerPdv() {
    var SiteId = new String($("#SiteId").val());
    $("#BagContainerId").empty();
    $.get("/Param/GetBagContainerPdv", { Input: SiteId }, function (data) {
        $.each(data, function (index, row) {
            $("#BagContainerId").append("<option value='" + row.BagContainerId + "'>" + row.BagContainerName + "</option>")
        });
    });
    $("#BagContainerId").append("<option value='" + 0 + "'>" + "--" + "</option>");
    $("#BagContainerId").val('0');

    $("#StationId").empty();
    $("#StationId").append("<option value='" + 0 + "'>" + "--" + "</option>");
    $("#StationId").val('0');
}

function ParamGetStations() {
    $("#StationNumberId").empty();
    $.get("/Param/GetStations", { SiteId: $("#SiteId").val(), BagContainerId: $("#BagContainerId").val() }, function (data) {
        $.each(data, function (index, row) {
            $("#StationNumberId").append("<option value='" + row.StationNumber + "'>" + row.StationName + " (" + row.StationCeNumber + ")</option>")
        });
    });
    $("#StationNumberId").append("<option value='" + 0 + "'>" + "--" + "</option>");
    $("#StationNumberId").val('0');

    ShowReport('StationNumberId' + 'Parent');
    //HideReport('LaneNameId' + 'Parent');
    //HideReport('PdvId' + 'Parent');

    ParamResetDropDownList('LaneNameId');
    ParamResetDropDownList('PdvId');
}


function ParamGetStationsOrigine() {
    $("#StationNumberIdO").empty();
    $.get("/Param/GetStations", { SiteId: $("#SiteIdO").val(), BagContainerId: $("#BagContainerIdO").val() }, function (data) {
        $.each(data, function (index, row) {
            $("#StationNumberIdO").append("<option value='" + row.StationNumber + "'>" + row.StationName + " (" + row.StationCeNumber + ")</option>")
        });
    });
    $("#StationNumberIdO").append("<option value='" + 0 + "'>" + "--" + "</option>");
    $("#StationNumberIdO").val('0');

    ShowReport('StationNumberIdO' + 'Parent');
    //HideReport('LaneNameIdO' + 'Parent');
    //HideReport('PdvId' + 'Parent');

    ParamResetDropDownList('LaneNameIdO');
    //ParamResetDropDownList('PdvId');
}

function ParamGetStationsPdv() {
    $("#StationNumberId").empty();

    $.get("/Param/GetStationsPdv", { SiteId: $("#SiteId").val(), BagContainerId: $("#BagContainerId").val() }, function (data) {
        $.each(data, function (index, row) {
            $("#StationNumberId").append("<option value='" + row.StationNumber + "'>" + row.StationNumber + ' - ' + row.StationName + "</option>")
        });
    });
    $("#StationNumberId").append("<option value='" + 0 + "'>" + "--" + "</option>");
    $("#StationNumberId").val('0');
}

function ParamBagContainersFromLSGet() {
    var TaskId = GetElementValue('TaskId');
    var SourceId = GetElementValue('SourceId');
    var SiteId = GetElementValue('SiteId');
    var LSId = GetElementValue('LSId');

    if (TaskId == '03' && SourceId == '05')//Visualize, Zipdata
    {
        //Nothing
    }
    else {
        $("#BagContainerId").empty();

        $.get("/Param/ParamBagConatinerFromLSGet", { SiteId: SiteId, LSId: LSId }, function (data) {
            $.each(data, function (index, row) {
                $("#BagContainerId").append("<option value='" + row.BagContainerId + "'>" + row.BagContainerId + ' - ' + row.BagContainerName + "</option>")
            });
        });
        $("#BagContainerId").append("<option value='" + 0 + "'>" + "--" + "</option>");
        $("#BagContainerId").val('0');


        $("#StationNumberId").empty();
        $("#StationNumberId").append("<option value='" + 0 + "'>" + "--" + "</option>");
        $("#StationNumberId").val('0');

        ShowReport('BagContainerId' + 'Parent');
        HideReport('StationNumberId' + 'Parent');
        HideReport('LaneNameId' + 'Parent');
        HideReport('PdvId' + 'Parent');

        ParamResetDropDownList('StationNumberId');
        ParamResetDropDownList('LaneNameId');
        ParamResetDropDownList('PdvId');
    }
}

function ParamGetSens() {
    $.get("/Param/GetSens", function (data) {
        $("#Sens").empty();
        $("#Sens").append("<option value='" + 0 + "'>" + "Sélectionnez--" + "</option>");
        $.each(data, function (index, row) {
            $("#Sens").append("<option value='" + row.Sens + "'>" + row.Sens + "</option>")
        });
    });
}

function ParamPdvsGet() {
    $("#PdvId").empty();
    var SiteId = GetElementValue('SiteId');
    var StationNumber = GetElementValue('StationNumberId');
    $.get("/Param/ParamPdvsGet", { SiteId: SiteId, StationNumber: StationNumber }, function (data) {
        $.each(data, function (index, row) {
            $("#PdvId").append("<option value='" + row.PdvId + "'>" + row.PdvId + ' - ' + row.PdvName + "</option>")
        });
    });
    $("#PdvId").append("<option value='" + 0 + "'>" + "--" + "</option>");
    $("#PdvId").val('0');
}

function ParamFdrsGet() {
    var item = document.getElementById('FdrId');
    item.options.length = 0;
    var node = document.createElement("option");
    node.value = 0;
    var textnode = document.createTextNode("--");
    node.appendChild(textnode);
    item.appendChild(node);
    $.get("/Param/ParamFdrsGet", function (data) {
        $.each(data, function (index, row) {
            node = document.createElement("option");
            node.value = row.FdrId;
            textnode = document.createTextNode(row.FdrName);
            node.appendChild(textnode);
            item.appendChild(node);
        });
    });
}

function ParamCtrsGet(DataName) {
    var item = document.getElementById('CtrId');
    item.options.length = 0;
    var node = document.createElement("option");
    node.value = 0;
    var textnode = document.createTextNode("--");
    node.appendChild(textnode);
    item.appendChild(node);
    $.get("/Param/ParamCtrsGet", { DataName: DataName }, function (data) {
        $("#CtrId").empty();
        $.each(data, function (index, row) {
            node = document.createElement("option");
            node.value = row.CtrId;
            textnode = document.createTextNode(row.CtrId + ' - ' + row.CtrName);
            node.appendChild(textnode);
            item.appendChild(node);
        });

        //node = document.createElement("option");
        //node.value = 99;
        //textnode = document.createTextNode("Tous les écarts");
        //node.appendChild(textnode);
        //item.appendChild(node);
    });
}

function ParamEmergenciesGet(DefaultIndex, Id) {
    var item = document.getElementById('EmergencyId' + Id);
    item.options.length = 0;
    var node = document.createElement("option");
    node.value = 0;
    var textnode = document.createTextNode("--");
    node.appendChild(textnode);
    item.appendChild(node);
    $.get("/Param/ParamEmergenciesGet", function (data) {
        $.each(data, function (index, row) {
            node = document.createElement("option");
            node.value = row.EmergencyId;
            textnode = document.createTextNode(row.EmergencyId + ' - ' + row.EmergencyName);
            node.appendChild(textnode);
            item.appendChild(node);
        });
        item.options[DefaultIndex].selected = 'selected';
    });
}

function ParamGetYears() {
    $('#EvoYearId').empty();
    $('#EvoYearId').append("<option value='" + 0 + "'>" + "Sélectionnez--" + "</option>");
    $('#EvoYearId').append("<option value='2018'>2018</option>");
    $('#EvoYearId').append("<option value='2019'>2019</option>");
}

function ParamGetLanes() {
    $("#LaneName").empty();
    $.get("/Param/ParamGetLanes", { StationId: $("#StationId").val() }, function (data) {
        $.each(data, function (index, row) {
            $("#LaneName").append("<option value='" + row.LaneName + "'>" + row.LaneName + "</option>")
        });
    });
    $("#LaneName").append("<option value='" + 0 + "'>" + "--" + "</option>");
    $("#LaneName").val('0');
}

function ParamGetMp() {
    $.get("/Param/ParamGetMp", function (data) {
        $("#BillingId").empty();
        $("#BillingId").append("<option value='" + 0 + "'>" + "--" + "</option>");
        $.each(data, function (index, row) {
            $("#BillingId").append("<option value='" + row.MpId + "'>" + row.MpId + ' - ' + row.MpName + "</option>")
        });
    });
}

function ParamGetObsMp() {
    $.get("/Param/ParamGetObsMp", function (data) {
        $("#ObsMpId").empty();
        $("#ObsMpId").append("<option value='" + 0 + "'>" + "--" + "</option>");
        $.each(data, function (index, row) {
            $("#ObsMpId").append("<option value='" + row.ObsMpId + "'>" + row.ObsMpId + ' - ' + row.ObsMpName + "</option>")
        });
    });
}

function ParamGetObsTick() {
    $.get("/Param/ParamGetObsTick", function (data) {
        $("#ObsTickId").empty();
        $("#ObsTickId").append("<option value='A'>" + "--" + "</option>");
        $.each(data, function (index, row) {
            $("#ObsTickId").append("<option value='" + row.ObsTickId + "'>" + row.ObsTickId + ' - ' + row.ObsTickName + "</option>")
        });
    });
}

function ParamGetObsSequ() {
    $.get("/Param/ParamGetObsSequ", function (data) {
        $("#ObsSequId").empty();
        $("#ObsSequId").append("<option value='A'>" + "--" + "</option>");
        $.each(data, function (index, row) {
            $("#ObsSequId").append("<option value='" + row.ObsSequId + "'>" + row.ObsSequId + ' - ' + row.ObsSequName + "</option>")
        });
    });
}

function ParamGetObsPass() {
    $.get("/Param/ParamGetObsPass", function (data) {
        $("#ObsPassId").empty();
        $("#ObsPassId").append("<option value='A'>" + "--" + "</option>");
        $.each(data, function (index, row) {
            $("#ObsPassId").append("<option value='" + row.ObsPassId + "'>" + row.ObsPassId + ' - ' + row.ObsPassName + "</option>")
        });
    });
}

function ParamGetObsOcr() {
    $.get("/Param/ParamGetObsOcr", function (data) {
        $("#ObsOcrId").empty();
        $("#ObsOcrId").append("<option value='" + 0 + "'>" + "--" + "</option>");
        $.each(data, function (index, row) {
            $("#ObsOcrId").append("<option value='" + row.ObsOcrId + "'>" + row.ObsOcrId + ' - ' + row.ObsOcrName + "</option>")
        });
    });
}

function ParamFileTypeGet() {
    var Source = new String($("#SourceId").val());
    var TaskId = new String($("#TaskId").val());

    $("#FileTypeId").empty();
    $.get("/Param/ParamFileTypesGet", { Source: Source, TaskId: TaskId, }, function (data) {
        $.each(data, function (index, row) {
            $("#FileTypeId").append("<option value='" + row.FileTypeId + "'>" + row.FileTypeId + ' - ' + row.FileTypeName + "</option>")
        });
    });
    ParamResetDropDownList('FileTypeId');
    ShowReport('FileTypeId' + 'Parent');
    ShowReport('SiteId' + 'Parent');

    if (IsPlanned == true) {
        $('#ParamTitleId').text("Planification des jobs");
        document.getElementById('ParamActionBtnId').setAttribute("onClick", "CertFilePlanAdd()");
        document.getElementById('ParamActionIconId').setAttribute('Class', 'fas fa-plus-circle');
        $('#ParamActionTextId').text("Ajouter le Job");


        if (Source == '01' || Source == '08' || Source == '02' || Source == '07' || Source == '03' || Source == '04') {
            document.getElementById('SiteId').setAttribute("onChange", "ParamGetLS(0)");
            document.getElementById('LSId').setAttribute("onChange", "ParamBagContainersFromLSGet()");
            document.getElementById('BagContainerId').setAttribute("onChange", "ParamGetStations()");
            document.getElementById('StationNumberId').setAttribute("onChange", "ParamLanesGet()");

            ShowReport('FileTypeId' + 'Parent');
            ShowReport('SiteId' + 'Parent');
            HideReport('LSId' + 'Parent');
            HideReport('BagContainerId' + 'Parent');
            HideReport('StationNumberId' + 'Parent');
            HideReport('LaneNameId' + 'Parent');
            HideReport('PdvId' + 'Parent');
        }

        if (Source == '05')//Zip
        {
            document.getElementById('SiteId').setAttribute("onChange", "ParamGetLS(0)");
            document.getElementById('LSId').setAttribute("onChange", "ParamBagContainersFromLSGet()");
            document.getElementById('BagContainerId').setAttribute("onChange", "ParamGetStations()");
            document.getElementById('StationNumberId').setAttribute("onChange", "ParamLanesGet()");

            ShowReport('FileTypeId' + 'Parent');
            ShowReport('SiteId' + 'Parent');
            HideReport('LSId' + 'Parent');
            HideReport('BagContainerId' + 'Parent');
            HideReport('StationNumberId' + 'Parent');
            HideReport('LaneNameId' + 'Parent');
            HideReport('PdvId' + 'Parent');
        }

        if (Source == '10')//Toll
        {
            document.getElementById('SiteId').setAttribute("onChange", "ParamGetLS(0)");
            document.getElementById('LSId').setAttribute("onChange", "ParamBagContainersFromLSGet()");
            document.getElementById('BagContainerId').setAttribute("onChange", "ParamGetStations()");
            document.getElementById('StationNumberId').setAttribute("onChange", "ParamLanesGet()");

            ShowReport('FileTypeId' + 'Parent');
            ShowReport('SiteId' + 'Parent');
            HideReport('LSId' + 'Parent');
            HideReport('BagContainerId' + 'Parent');
            HideReport('StationNumberId' + 'Parent');
            HideReport('LaneNameId' + 'Parent');
            HideReport('PdvId' + 'Parent');
        }
    }
    else {
        if (TaskId == '03')//Visualize
        {
            if (Source == '04')//Msg
            {
                document.getElementById('SiteId').setAttribute("onChange", "ParamGetLS(0)");
                document.getElementById('LSId').setAttribute("onChange", "ParamBagContainersFromLSGet()");
                document.getElementById('BagContainerId').setAttribute("onChange", "ParamGetStations()");
                document.getElementById('StationNumberId').setAttribute("onChange", "ParamLanesGet()");

                ShowReport('CertFileUploadId' + 'Parent');
                ShowReport('FileTypeId' + 'Parent');

                ShowReport('SiteId' + 'Parent');
                HideReport('LSId' + 'Parent');
                HideReport('BagContainerId' + 'Parent');
                HideReport('StationNumberId' + 'Parent');
                HideReport('LaneNameId' + 'Parent');
                HideReport('PdvId' + 'Parent');
                ShowReport('DateStartId' + 'Parent');
                ShowReport('DateEndId' + 'Parent');

                document.getElementById('ParamActionBtnId1').setAttribute("onClick", "CertFileDayVisualize()");
                $('#ParamTitleId').text("Visualisation des fichiers");
                document.getElementById('ParamActionIconId1').setAttribute('Class', 'fas fa-eye');
                $('#ParamActionTextId1').text('Visualiser');
                ShowReport('ParamActionContainerId1');
            }
            if (Source == '05')//Zip
            {


                document.getElementById('SiteId').setAttribute("onChange", "ParamGetLS(0)");
                document.getElementById('LSId').setAttribute("onChange", "ParamBagContainersFromLSGet()");

                HideReport('CertFileUploadId' + 'Parent');
                HideReport('FileTypeId' + 'Parent');
                ShowReport('SiteId' + 'Parent');
                HideReport('LSId' + 'Parent');
                HideReport('BagContainerId' + 'Parent');
                HideReport('StationNumberId' + 'Parent');
                HideReport('LaneNameId' + 'Parent');
                HideReport('PdvId' + 'Parent');
                HideReport('CertFileUploadId' + 'Parent');
                ShowReport('DateStartId' + 'Parent');
                ShowReport('DateEndId' + 'Parent');

                HideReport('ParamActionContainerId1');
                HideReport('ParamActionContainerId2');
                HideReport('ParamActionContainerId3');

                if (document.getElementById('ParamActionBtnId') != null) {
                    ShowReport('ParamActionContainerId');
                    ShowReport('ParamActionBtnId');
                    document.getElementById('ParamActionBtnId').setAttribute("onClick", "CertFileZipDayVisualize()");
                    document.getElementById('ParamActionIconId').setAttribute('Class', 'fas fa-eye');
                    $('#ParamActionTextId').text("Afficher");
                }

                DateValueDefaultSet('DateStartId', 1);
                DateValueDefaultSet('DateEndId', 0);
                //CertFileZipVisualize();
            }
        }
        else {
            if (Source == '09') //Pdv
            {
                document.getElementById('SiteId').setAttribute("onChange", "ParamGetBagContainerPdv()");
                document.getElementById('BagContainerId').setAttribute("onChange", "ParamGetStationsPdv()");
                document.getElementById('StationNumberId').setAttribute("onChange", "ParamPdvsGet()");

                ShowReport('FileTypeId' + 'Parent');
                ShowReport('SiteId' + 'Parent');
                HideReport('LSId' + 'Parent');
                HideReport('BagContainerId' + 'Parent');
                HideReport('StationNumberId' + 'Parent');
                HideReport('LaneNameId' + 'Parent');
                HideReport('PdvId' + 'Parent');

                HideReport('ParamActionContainerId1');

                document.getElementById('ParamActionBtnId').setAttribute("onClick", "CertFileAutoDisplay()");
                document.getElementById('ParamActionIconId').setAttribute('Class', 'fas fa-eye');
                $('#ParamActionTextId').text("Afficher");

                document.getElementById('ParamActionBtnId1').setAttribute("onClick", "CertFileAutoAdd()");
                document.getElementById('ParamActionIconId1').setAttribute('Class', 'fas fa-plus-circle');
                $('#ParamActionTextId1').text("Charger");

            }
            if (Source == '01' || Source == '08' || Source == '02' || Source == '07' || Source == '03' || Source == '04') //Ope
            {
                document.getElementById('SiteId').setAttribute("onChange", "ParamGetLS(0)");
                document.getElementById('LSId').setAttribute("onChange", "ParamBagContainersFromLSGet()");
                document.getElementById('BagContainerId').setAttribute("onChange", "ParamGetStations()");
                document.getElementById('StationNumberId').setAttribute("onChange", "ParamLanesGet()");

                ShowReport('FileTypeId' + 'Parent');
                ShowReport('SiteId' + 'Parent');
                HideReport('LSId' + 'Parent');
                HideReport('BagContainerId' + 'Parent');
                HideReport('StationNumberId' + 'Parent');
                HideReport('LaneNameId' + 'Parent');
                HideReport('PdvId' + 'Parent');


                document.getElementById('ParamActionBtnId').setAttribute("onClick", "CertFileAutoDisplay()");
                document.getElementById('ParamActionIconId').setAttribute('Class', 'fas fa-eye');
                $('#ParamActionTextId').text("Afficher");
                ShowReport('ParamActionContainerId');
                ShowReport('ParamActionBtnId');

                document.getElementById('ParamActionBtnId1').setAttribute("onClick", "CertFileAutoAdd()");
                document.getElementById('ParamActionIconId1').setAttribute('Class', 'fas fa-plus-circle');
                $('#ParamActionTextId1').text("Charger");
                ShowReport('ParamActionContainerId1');
                ShowReport('ParamActionBtnId1');
            }

            if (Source == '03' || Source == '05')//Lane
            {
                document.getElementById('SiteId').setAttribute("onChange", "ParamGetLS(0)");
                document.getElementById('LSId').setAttribute("onChange", "ParamBagContainersFromLSGet()");
                document.getElementById('BagContainerId').setAttribute("onChange", "ParamGetStations()");
                document.getElementById('StationNumberId').setAttribute("onChange", "ParamLanesGet()");

                HideReport('FileTypeId' + 'Parent');
                ShowReport('SiteId' + 'Parent');
                HideReport('LSId' + 'Parent');
                HideReport('BagContainerId' + 'Parent');
                HideReport('StationNumberId' + 'Parent');
                HideReport('LaneNameId' + 'Parent');
                HideReport('PdvId' + 'Parent');


                document.getElementById('ParamActionBtnId').setAttribute("onClick", "CertFileAutoDisplay()");
                document.getElementById('ParamActionIconId').setAttribute('Class', 'fas fa-eye');
                $('#ParamActionTextId').text("Afficher");
                ShowReport('ParamActionContainerId');
                ShowReport('ParamActionBtnId');

                document.getElementById('ParamActionBtnId1').setAttribute("onClick", "CertFileAutoAdd()");
                document.getElementById('ParamActionIconId1').setAttribute('Class', 'fas fa-plus-circle');
                $('#ParamActionTextId1').text("Charger");
                ShowReport('ParamActionContainerId1');
                ShowReport('ParamActionBtnId1');
            }



            if (Source == '05')//Zip
            {
                document.getElementById('SiteId').setAttribute("onChange", "ParamGetLS(0)");
                document.getElementById('LSId').setAttribute("onChange", "ParamBagContainersFromLSGet()");
                document.getElementById('BagContainerId').setAttribute("onChange", "ParamGetStations()");
                document.getElementById('StationNumberId').setAttribute("onChange", "ParamLanesGet()");

                ShowReport('FileTypeId' + 'Parent');
                ShowReport('SiteId' + 'Parent');
                HideReport('LSId' + 'Parent');
                HideReport('BagContainerId' + 'Parent');
                HideReport('StationNumberId' + 'Parent');
                HideReport('LaneNameId' + 'Parent');
                HideReport('PdvId' + 'Parent');




                document.getElementById('ParamActionBtnId').setAttribute("onClick", "CertFileAutoDisplay()");
                document.getElementById('ParamActionIconId').setAttribute('Class', 'fas fa-eye');
                $('#ParamActionTextId').text("Afficher");
                ShowReport('ParamActionContainerId');
                ShowReport('ParamActionBtnId');

                document.getElementById('ParamActionBtnId1').setAttribute("onClick", "CertFileAutoAdd()");
                document.getElementById('ParamActionIconId1').setAttribute('Class', 'fas fa-plus-circle');
                $('#ParamActionTextId1').text("Charger");
                ShowReport('ParamActionContainerId1');
                ShowReport('ParamActionBtnId1');
            }

            if (Source == '10')//Toll
            {
                document.getElementById('SiteId').setAttribute("onChange", "ParamGetLS(0)");
                document.getElementById('LSId').setAttribute("onChange", "ParamBagContainersFromLSGet()");
                document.getElementById('BagContainerId').setAttribute("onChange", "ParamGetStations()");
                document.getElementById('StationNumberId').setAttribute("onChange", "ParamLanesGet()");

                ShowReport('FileTypeId' + 'Parent');
                ShowReport('SiteId' + 'Parent');
                HideReport('LSId' + 'Parent');
                HideReport('BagContainerId' + 'Parent');
                HideReport('StationNumberId' + 'Parent');
                HideReport('LaneNameId' + 'Parent');
                HideReport('PdvId' + 'Parent');




                document.getElementById('ParamActionBtnId').setAttribute("onClick", "CertFileAutoDisplay()");
                document.getElementById('ParamActionIconId').setAttribute('Class', 'fas fa-eye');
                $('#ParamActionTextId').text("Afficher");
                ShowReport('ParamActionContainerId');
                ShowReport('ParamActionBtnId');

                document.getElementById('ParamActionBtnId1').setAttribute("onClick", "CertFileAutoAdd()");
                document.getElementById('ParamActionIconId1').setAttribute('Class', 'fas fa-plus-circle');
                $('#ParamActionTextId1').text("Charger");
                ShowReport('ParamActionContainerId1');
                ShowReport('ParamActionBtnId1');
            }

            if (Source == '23')//Bosch
            {
                document.getElementById('SiteId').setAttribute("onChange", "ParamGetLS(0)");
                document.getElementById('LSId').setAttribute("onChange", "ParamBagContainersFromLSGet()");
                document.getElementById('BagContainerId').setAttribute("onChange", "ParamGetStations()");
                document.getElementById('StationNumberId').setAttribute("onChange", "ParamLanesGet()");

                ShowReport('FileTypeId' + 'Parent');
                ShowReport('SiteId' + 'Parent');
                HideReport('LSId' + 'Parent');
                HideReport('BagContainerId' + 'Parent');
                HideReport('StationNumberId' + 'Parent');
                HideReport('LaneNameId' + 'Parent');
                HideReport('PdvId' + 'Parent');




                document.getElementById('ParamActionBtnId').setAttribute("onClick", "CertFileAutoDisplay()");
                document.getElementById('ParamActionIconId').setAttribute('Class', 'fas fa-eye');
                $('#ParamActionTextId').text("Afficher");
                ShowReport('ParamActionContainerId');
                ShowReport('ParamActionBtnId');

                document.getElementById('ParamActionBtnId1').setAttribute("onClick", "CertFileAutoAdd()");
                document.getElementById('ParamActionIconId1').setAttribute('Class', 'fas fa-plus-circle');
                $('#ParamActionTextId1').text("Charger");
                ShowReport('ParamActionContainerId1');
                ShowReport('ParamActionBtnId1');
            }
        }
    }
}

function ParamSourcesGet() {
    var TaskId = new String($("#TaskId").val());
    $("#SourceId").empty();
    $.get("/Param/ParamSourcesGet", { TaskId: TaskId }, function (data) {
        $.each(data, function (index, row) {
            $("#SourceId").append("<option value='" + row.SourceId + "'>" + row.SourceId + ' - ' + row.SourceName + "</option>")
        });
    });
    ParamResetDropDownList('SourceId');

    ShowReport('SourceId' + 'Parent');

    HideReport('CertFilePlanTableReportId');

    var IsPlanned = new Boolean($("#IsPlannedId").is(":checked"));

    if (IsPlanned == true) {
        $('#ParamTitleId').text("Planification des jobs");
        HideReport('CertFileUploadId' + 'Parent');

        document.getElementById('ParamActionBtnId').setAttribute("onClick", "CertFilePlanAdd()");
        document.getElementById('ParamActionIconId').setAttribute('Class', 'fas fa-plus-circle btn-icon-m-cl gc-c1-cl');
        $('#ParamActionTextId').text("Ajouter le Job");
    }
    else {
        if (TaskId == '03')//Visualize
        {
            $('#ParamTitleId').text("Visualisation des fichiers");
            HideReport('FileId' + 'Parent');

            ShowReport('ParamActionContainerId1');
            document.getElementById('ParamActionBtnId1').setAttribute("onClick", "CertFileDayVisualize()");
            document.getElementById('ParamActionIconId1').setAttribute('Class', 'fas fa-eye btn-icon-m-cl gc-c1-cl');
            $('#ParamActionTextId1').text("Visualiser");
        }
        if (TaskId == '00') //Upload
        {
            $('#ParamTitleId').text("Chargement des fichiers");
            HideReport('FileId' + 'Parent');

            ShowReport('ParamActionContainerId1');
            document.getElementById('ParamActionBtnId1').setAttribute("onClick", "CertFileAutoAdd()");
            document.getElementById('ParamActionIconId1').setAttribute('Class', 'fas fa-plus-circle btn-icon-m-cl gc-c1-cl');
            $('#ParamActionTextId1').text("Charger");

        }
        if (TaskId == '01') //Generate
        {
            $('#ParamTitleId').text("Génération des scripts");
            HideReport('FileId' + 'Parent');

            ShowReport('ParamActionContainerId1');
            document.getElementById('ParamActionBtnId1').setAttribute("onClick", "CertFileAutoAdd()");
            document.getElementById('ParamActionIconId1').setAttribute('Class', 'fas fa-plus-circle btn-icon-m-cl gc-c1-cl');
            $('#ParamActionTextId1').text("Générer");
        }
        if (TaskId == '06')//Read
        {
            $('#ParamTitleId').text("Lecture des fichiers");
            ShowReport('FileId' + 'Parent');

            ShowReport('ParamActionContainerId1');
            document.getElementById('ParamActionBtnId1').setAttribute("onClick", "CertFileRead()");
            document.getElementById('ParamActionIconId1').setAttribute('Class', 'fas fa-eye btn-icon-m-cl gc-c1-cl');
            $('#ParamActionTextId1').text("Lire");
        }
    }
}

function ParamTasksGet() {

    $("#TaskId").empty();
    $.get("/Param/ParamTasksGet", function (data) {
        $.each(data, function (index, row) {
            $("#TaskId").append("<option value='" + row.TaskId + "'>" + row.TaskId + ' - ' + row.TaskName + "</option>")
        });
    });
    ParamResetDropDownList('TaskId');

    HideReport('SourceId' + 'Parent');
    HideReport('FileTypeId' + 'Parent');
    HideReport('LSId' + 'Parent');
    HideReport('BagContainerId' + 'Parent');
    HideReport('StationNumberId' + 'Parent');
    HideReport('LaneNameId' + 'Parent');
}

function ParamAgentsFromLSXorGet(FormIndex, CexId, LSId) {
    $("#StationNumberId").empty();
    $.get("/Param/ParamAgentsFromLSGet", { CexId: CexId, LSId: LSId }, function (data) {
        $.each(data, function (index, row) {
            $("#AgentId" + FormIndex).append("<option value='" + row.AgentId + "'>" + row.AgentId + ' - ' + row.AgentName + "</option>")
        });
    });
    //$("#StationNumberId").append("<option value='" + 0 + "'>" + "--" + "</option>");
    //$("#StationNumberId").val('0');

    //ShowReport('StationNumberId' + 'Parent');
    // HideReport('LaneNameId' + 'Parent');
    //HideReport('PdvId' + 'Parent');
}

function ParamItemCategoriesGet() {
    $("#ItemCategoryId").empty();
    var ItemId = GetElementValue('ItemId');
    $.get("/Param/ParamItemCategoriesGet", { Input: ItemId }, function (data) {
        $.each(data, function (index, row) {
            $("#ItemCategoryId").append("<option value='" + row.ItemCategoryId + "'>" + row.ItemCategoryId + ' - ' + row.ItemCategoryName + "</option>")
        });
    });
    $("#ItemCategoryId").append("<option value='" + 0 + "'>" + "--" + "</option>");
    $("#ItemCategoryId").val('0');
    $("#ItemFeatureId").val('0');
}

function ParamEventGet() {
    $("#EventCodeId").empty();
    var EquipmentNumber = GetElementValue('EquipmentNumberId');
    $.get("/Param/ParamEventGet", { Input: EquipmentNumber }, function (data) {
        $.each(data, function (index, row) {
            $("#EventCodeId").append("<option value='" + row.EventCode + "'>" + row.EventCode + ' - ' + row.EventName + "</option>")
        });
    });
    $("#EventCodeId").append("<option value='" + 0 + "'>" + "--" + "</option>");
    $("#EventCodeId").val('0');
    ShowReport('EventCodeId' + 'Parent');
}

function ParamItemFeaturesGet() {
    $("#ItemFeatureId").empty();
    var ItemId = GetElementValue('ItemId');
    var ItemCategoryId = GetElementValue('ItemCategoryId');
    $.get("/Param/ParamItemFeaturesGet", { ItemId: ItemId, ItemCategoryId: ItemCategoryId }, function (data) {
        $.each(data, function (index, row) {
            $("#ItemFeatureId").append("<option value='" + row.ItemFeatureId + "'>" + row.ItemFeatureId + ' - ' + row.ItemFeatureName + "</option>")
        });
    });
    $("#ItemFeatureId").append("<option value='" + 0 + "'>" + "--" + "</option>");
    $("#ItemFeatureId").val('0');
    ShowReport('ItemFeatureId' + 'Parent');
}

function ParamListGet() {
    $("#ParamId").empty();
    $.get("/Param/ParamListGet", function (data) {
        $.each(data, function (index, row) {
            $("#ParamId").append("<option value='" + row.ParamId + "'>" + row.ParamId + ' - ' + row.ParamName + "</option>")
        });
    });
    ParamResetDropDownList('ParamId');

    var ParamId = GetElementValue('ParamId');
    if (ParamId != null) {
        if (ParamId == '00') {
            HideReport('SiteId');
        }
    }
}

function ParamListUpdate() {
    var ParamId = GetElementValue('ParamId');
    if (ParamId != null) {
        ShowReport('SiteId' + 'Parent');
    }
}

function RepoCrmParamGetStatus(DefaultIndex) {
    var item = document.getElementById('CrmStatusId');
    item.options.length = 0;
    var node = document.createElement("option");
    node.value = 0;
    var textnode = document.createTextNode("Sélectionnez--");
    node.appendChild(textnode);
    item.appendChild(node);
    $.get("/Repo/GetCrmStatus", function (data) {
        $.each(data, function (index, row) {
            var node = document.createElement("option");
            node.value = row.CrmStatusId;
            var textnode = document.createTextNode(row.CrmStatusId + " - " + row.CrmStatusName);
            node.appendChild(textnode);
            item.appendChild(node);
        });
        item.options[DefaultIndex].selected = 'selected';
    });
}

function RepoParamDisplay() {

    //Common
    //HideControl("PluginId");
    //HideControl("GroupId");
    //HideControl("CategoryId");
    HideControl("RequestIdParent");
    HideControl("SiteIdParent");
    HideControl("LSIdParent");
    HideControl("BagContainerIdParent");
    HideControl("StationIdParent");
    HideControl("StartDateIdParent");
    HideControl("EndDateIdParent");

    //Certification    
    HideControl("BagNumberIdParent");
    HideControl("CashierNumberIdParent");
    HideControl("SensParent");
    HideControl("OnlyGapIdParent");
    HideControl("RayonPostParent");
    HideControl("RayonReceiptParent");
    HideControl("RayonTraficParent");
    HideControl("PaymentIdParent");

    //Repo
    HideControl("YearCrmParent");
    HideControl("MonthCrmParent");
    HideControl("CrmStatusIdParent");
    HideControl("DateIdParent");
    HideControl("CommentIdParent");

    //Fatourati
    HideControl("bank_nameParent");
}

function RepoParamHide(Pattern) {
    HideReport('tb-report-id');
    HideReport('MenuReportId');
    HideReport('ParamReportId');
    HideReport('ExportReportId');
    //HideReport('CertReportId');
    //ShowReport('Grid0000_GridReportId');//Cover
    //document.getElementsByClassName('page-wrapper chiller-theme toggled').item(0).setAttribute('class', 'page-wrapper chiller-theme');
    window.print();
}

function RepoPrint(Pattern) {

    var HeaderIndex = '';
    var TimeIndex = '';
    var PageIndex = '';
    var PageRowIndex = '';
    var PatternIndex = '';

    HideReport('MenuReportId');
    HideReport('ParamReportId');
    HideReport('CertReportId');
    ShowReport('Grid0000_GridReportId');//Cover
    //document.getElementsByClassName('page-wrapper chiller-theme toggled').item(0).setAttribute('class', 'page-wrapper chiller-theme');

    HeaderIndex = '0';
    TimeIndex = '0';
    PageIndex = '0';
    PageRowIndex = '0';

    TplGridModelGet(HeaderIndex, TimeIndex, PageIndex, PageRowIndex, PatternIndex, '', 'col', '', '3160px', 'transparent');
    HideReport('Grid' + HeaderIndex + TimeIndex + PageIndex + PageRowIndex + PatternIndex + '_GridCol0Id');
    HideReport('Grid' + HeaderIndex + TimeIndex + PageIndex + PageRowIndex + PatternIndex + '_GridCol2Id');

    if (Pattern == 'RepoTraficStationHour') {
        HeaderIndex = '1';
        TimeIndex = '0';
        PageIndex = '';

        PageRowIndex = '0';
        for (var PatternIndex = 0; PatternIndex <= 52; PatternIndex++) {
            TplGridModelGet(HeaderIndex, TimeIndex, PageIndex, PageRowIndex, PatternIndex, 'col-6', 'col-6', 'col', '1580px', 'transparent');
        }

        PageRowIndex = '1';
        for (var PatternIndex = 0; PatternIndex <= 52; PatternIndex++) {
            TplGridModelGet(HeaderIndex, TimeIndex, PageIndex, PageRowIndex, PatternIndex, 'col-6', 'col-6', 'col', '1580px', 'transparent');
        }
    }

    if (Pattern == 'RepoTraficCexHour') {
        HeaderIndex = '1';
        TimeIndex = '0';
        PageIndex = '';

        PageRowIndex = '0';
        for (var PatternIndex = 0; PatternIndex <= 52; PatternIndex++) {
            TplGridModelGet(HeaderIndex, TimeIndex, PageIndex, PageRowIndex, PatternIndex, 'col-6', 'col-6', 'col', '1580px', 'transparent');
        }

        PageRowIndex = '1';
        for (var PatternIndex = 0; PatternIndex <= 52; PatternIndex++) {
            TplGridModelGet(HeaderIndex, TimeIndex, PageIndex, PageRowIndex, PatternIndex, 'col-6', 'col-6', 'col', '1580px', 'transparent');
        }
    }

    if (Pattern == 'RepoTraficOd') {
        HeaderIndex = '1';
        TimeIndex = '0';
        PageIndex = '';

        PageRowIndex = '0';
        for (var PatternIndex = 0; PatternIndex <= 58; PatternIndex++) {
            TplGridModelGet(HeaderIndex, TimeIndex, PageIndex, PageRowIndex, PatternIndex, 'col-8', 'col-4', 'col', '1580px', 'transparent');
        }
    }
}

function RepoUpdate(Pattern) {
    var ActionBtnId = 'ParamActionBtnId1';
    var Icon = 'fas fa-redo-alt';
    $('#' + ActionBtnId).find('span').attr('class', 'fa fa-spinner fa-spin');

    var CexId = GetElementValue('CexId');
    var BagContainerId = '0';
    var StationNumber = '0';

    if (Pattern == 'TraficStation') {
        BagContainerId = GetElementValue('BagContainerId');
        StationNumber = GetElementValue('StationNumberId');
        Pattern = 'Trafic';
    }
    if (Pattern == 'TraficCex') {
        Pattern = 'Trafic';
    }

    if (Pattern == 'NrSite') {
        BagContainerId = GetElementValue('BagContainerId');
        Pattern = 'Nr';
    }
    if (Pattern == 'NrCex') {
        Pattern = 'Nr';
    }

    var DateStringStart = GetDateStringFromDatePicker('DateStartId');
    var DateStringEnd = GetDateStringFromDatePicker('DateEndId');

    if (DateStringStart != '' && DateStringEnd != '') {
        var obj = {};
        obj.Pattern = Pattern;
        obj.CexId = CexId;
        obj.BagContainerId = BagContainerId;
        obj.StationNumber = StationNumber;
        obj.Sens = '0';
        obj.DateStringStart = DateStringStart;
        obj.DateStringEnd = DateStringEnd;

        $.ajax({
            url: "/Repo/RepoUpdate",
            method: "POST",
            data: JSON.stringify(obj),
            contentType: "application/json; charset=utf-8",
            async: true,
            success: function (data) {
                $('#' + ActionBtnId).find('span').attr('class', Icon);
            }
        })
    }
    else {
        $("#ParamMessageTextId").html("Certains champs sont obligatoires");
    };
}

function AddInputElement(ParentId, ElementId, ElementLabel, ElementType) {

    var InputElement =
        '<div id="' + ElementId + 'ParentId' + '" class="form-group row mb-1">' +
        '<label for= "' + ElementId + '" class="col-2 col-form-label" >' + ElementLabel + '</label >' +
        '<div class="col-sm-6">' +
        '<input class="form-control" type="' + ElementType + '" id="' + ElementId + '">' +
        '</div>' +
        '</div>';

    return InputElement;
    //var HtmlParent = document.getElementById(ParentId);

    //var InputElement =
    //    '<div id="' + ElementId + 'ParentId' + '" class="form-group row mb-1">' +
    //    '<label for= "' + ElementId + '" class="col-2 col-form-label" >' + ElementLabel + '</label >' +
    //    '<div class="col-sm-6">' +
    //    '<input class="form-control" type="' + ElementType + '" id="' + ElementId + '">' +
    //    '</div>' +
    //    '</div>'
    //var HtmlElement = document.createElement(InputElement);
    //HtmlParent.appendChild(HtmlElement);
}

function TplPageModelGet(HeaderIndex, TimeIndex, PageIndex, height, border) {
    document.getElementById('Page' + HeaderIndex + TimeIndex + PageIndex + '_PageReportId').style.height = height;
    document.getElementById('Page' + HeaderIndex + TimeIndex + PageIndex + '_PageCardId').style.border = border;
    ShowReport('Page' + HeaderIndex + TimeIndex + PageIndex + '_PageReportId');
}

//function TplGridModelGet(HeaderIndex, TimeIndex, PageIndex, PageRowIndex, GridCol0Class, GridCol1Class, GridCol2Class, height, border) {
//    document.getElementById('Grid' + HeaderIndex + TimeIndex + PageIndex + PageRowIndex + '_GridCol0Id').setAttribute('Class', GridCol0Class);
//    document.getElementById('Grid' + HeaderIndex + TimeIndex + PageIndex + PageRowIndex + '_GridCol1Id').setAttribute('Class', GridCol1Class);
//    document.getElementById('Grid' + HeaderIndex + TimeIndex + PageIndex + PageRowIndex + '_GridCol2Id').setAttribute('Class', GridCol2Class);
//    document.getElementById('Grid' + HeaderIndex + TimeIndex + PageIndex + PageRowIndex + '_GridReportId').style.height = height;
//    document.getElementById('Grid' + HeaderIndex + TimeIndex + PageIndex + PageRowIndex + '_GridCardId').style.border = border;
//    ShowReport('Grid' + HeaderIndex + TimeIndex + PageIndex + PageRowIndex + '_GridReportId');
//}

function TplGridModelGet(HeaderIndex, TimeIndex, PageIndex, PageRowIndex, PatternIndex, GridCol0Class, GridCol1Class, GridCol2Class, height, border) {
    document.getElementById('Grid' + HeaderIndex + TimeIndex + PageIndex + PageRowIndex + PatternIndex + '_GridReportId').style.height = height;
    document.getElementById('Grid' + HeaderIndex + TimeIndex + PageIndex + PageRowIndex + PatternIndex + '_GridCardId').style.border = border;
    document.getElementById('Grid' + HeaderIndex + TimeIndex + PageIndex + PageRowIndex + PatternIndex + '_GridCol0Id').setAttribute('Class', GridCol0Class);
    document.getElementById('Grid' + HeaderIndex + TimeIndex + PageIndex + PageRowIndex + PatternIndex + '_GridCol1Id').setAttribute('Class', GridCol1Class);
    document.getElementById('Grid' + HeaderIndex + TimeIndex + PageIndex + PageRowIndex + PatternIndex + '_GridCol2Id').setAttribute('Class', GridCol2Class);
}


function TplGridModelColSet(HeaderIndex, TimeIndex, PageIndex, PageRowIndex, PatternIndex, GridCol0Class, GridCol1Class, GridCol2Class, border) {
    document.getElementById('Grid' + HeaderIndex + TimeIndex + PageIndex + PageRowIndex + PatternIndex + '_GridCardId').style.border = border;
    document.getElementById('Grid' + HeaderIndex + TimeIndex + PageIndex + PageRowIndex + PatternIndex + '_GridCol0Id').setAttribute('Class', GridCol0Class);
    document.getElementById('Grid' + HeaderIndex + TimeIndex + PageIndex + PageRowIndex + PatternIndex + '_GridCol1Id').setAttribute('Class', GridCol1Class);
    document.getElementById('Grid' + HeaderIndex + TimeIndex + PageIndex + PageRowIndex + PatternIndex + '_GridCol2Id').setAttribute('Class', GridCol2Class);
}

function TplGridModelMediaGet(MediaMaxWidth, HeaderIndex, TimeIndex, PageIndex, PageRowIndex, PatternIndex, GridCol0Class, GridCol1Class, GridCol2Class, height, border) {
    if (screen.width < MediaMaxWidth) {
        TplGridModelGet(HeaderIndex, TimeIndex, PageIndex, PageRowIndex, PatternIndex, GridCol0Class, GridCol1Class, GridCol2Class, height, border);
    }
}

function TplPageModelGet(HeaderIndex, TimeIndex, PageIndex, PageRowIndex, PatternIndex, height, border) {
    document.getElementById('Page' + HeaderIndex + TimeIndex + PageIndex + PageRowIndex + PatternIndex + '_PageReportId').style.height = height;
    document.getElementById('Page' + HeaderIndex + TimeIndex + PageIndex + PageRowIndex + PatternIndex + '_PageCardId').style.border = border;
}

function UpdateNotiCount() {
    var count = 0;
    count = parseInt($('#SpanCountId').html()) || 0;
    count++;
    $('#SpanCountId').html(count);
}

function SendValidation() {

    $.ajax({
        type: 'GET',
        url: '/Notify/Index',
        success: function (response) {
            //$('#notiContent').empty();
            //if (response.length == 0) {
            //    $('#notiContent').append($('<li>No data available</li>'));
            //    //alert("empty");
            //}
            //$.each(response, function (index, value) {
            //    //alert(value.CommentId);
            //    $('#notiContent').append($('<li>CommentId : ' + value.CommentId + '</li>'));
            //});
        },
        error: function (error) {
            console.log(error);
        }
    })
}

function UpdateNoti() {
    $('#notiContent').empty();
    $('#notiContent').append($('<li>Veuillez patienter...</li>'));
    $.ajax({
        type: 'GET',
        url: '/home/GetNotificationContacts',
        success: function (data) {

            //var ProfilImgUrl = new String("/Images/Profil/" + data['UserId'] + ".jpg")
            //var FullName = new String(data['LastName'] + " " + data['FirstName']);
            //var Action = new String("Recette validée : G" + data['StationName'] + " , Jour: " + data['DayK'] + "/" + data['MonthK'] + "/" + data['YearK'] + "");




            $('#notiContent').empty();
            if (data.length == 0) {
                $('#notiContent').append($('<li>No data available</li>'));
            }
            $.each(data, function (index, value) {
                $('#notiContent').append($('<li>' + data['LastName'] + ' ' + data['FirstName'] + '<br/>' +
                    'Recette validée <br/>' +
                    'Gare: ' + data['StationName'] + '<br/>' +
                    'Journée: ' + data['DayK'] + '/' + data['MonthK'] + '/' + data['YearK'] + '<br/>' +
                    'Le: ' + data['DayM'] + '/' + data['MonthM'] + '/' + data['YearM'] + ' ' + data['HourM'] + ':' + data['MinuteM'] + ':' + data['SecondM'] +
                    '</li>'));
            });
        },
        error: function (error) {
            console.log(error);
        }
    })
}


function TopBarNotificationUpdate() {
    $('#tb-noti-ul-id').empty();
    $('#tb-noti-ul-id').append($('<li>Veuillez patienter...</li>'));
    $.ajax({
        type: 'GET',
        url: '/Common/TopBarNotificationUpdate',
        success: function (data) {

            //var ProfilImgUrl = new String("/Images/Profil/" + data['UserId'] + ".jpg")
            //var FullName = new String(data['LastName'] + " " + data['FirstName']);
            //var Action = new String("Recette validée : G" + data['StationName'] + " , Jour: " + data['DayK'] + "/" + data['MonthK'] + "/" + data['YearK'] + "");




            $('#tb-noti-ul-id').empty();
            if (data.length == 0) {
                $('#tb-noti-ul-id').append($('<li>Aucune notification</li>'));
            }
            $.each(data, function (index, value) {
                $('#tb-noti-ul-id').append($('<li>' + data['LastName'] + ' ' + data['FirstName'] + '<br/>' +
                    'Recette validée <br/>' +
                    'Gare: ' + data['StationName'] + '<br/>' +
                    'Journée: ' + data['DayK'] + '/' + data['MonthK'] + '/' + data['YearK'] + '<br/>' +
                    'Le: ' + data['DayM'] + '/' + data['MonthM'] + '/' + data['YearM'] + ' ' + data['HourM'] + ':' + data['MinuteM'] + ':' + data['SecondM'] +
                    '</li>'));
            });
        },
        error: function (error) {
            console.log(error);
        }
    })
}


$('#SpanNotiId').click(function (e) {
    //alert("in");
    e.stopPropagation();
    $('.noti-content').show();
    var count = 0;
    count = parseInt($('span.count').html()) || 0;
    //only load notification if not already loaded
    //if (count > 0) {
    UpdateNoti();
    //}
    $('span.count', this).html('&nbsp;');
})


$('html').click(function () {
    $('.noti-content').hide();
})

function PlayAudio(AudioId) {
    var x = document.getElementById(AudioId)
    x.play();
    //$('#' + AudioId + '').play();
}

function NotiConnectionIdGet(HubUrl) {
    var ConnectionId = '';
    $.connection.hub.url = HubUrl;
    $.connection.hub.start({ jsonp: true }).done(function () {
        ConnectionId = $.connection.hub.id;;
    });
    return ConnectionId;
}

function NotiConnectionIdUpdate(FeatureName) {
    $.connection.hub.start({ jsonp: true }).done(function () {
        var obj = {};
        obj.ConnectionId = $.connection.hub.id;
        obj.FeatureName = FeatureName;
        $.ajax({
            url: "/Common/NotiConnectionIdUpdate",
            method: "POST",
            data: JSON.stringify(obj),
            contentType: "application/json; charset=utf-8",
            dataType: "text",
            async: true
            //success: function (response) {
            //    if (response == "IsNotConnected") {
            //        window.close();
            //    }
            //}
        });
    });
}

function CertStationDelete(Pattern, Id) {

    var ActionBtnId = 'CertStationDeleteBtnId' + Id;
    var Icon = 'far fa-trash-alt';
    $('#CertStationDeleteBtnId' + Id).find('span').attr('class', 'fa fa-spinner fa-spin');

    var obj = {};
    obj.Pattern = Pattern;
    obj.Id = Id;

    $.ajax({
        url: "/Cert/CertStationDelete",
        method: "POST",
        contentType: "application/json; charset=utf-8",
        dataType: "text",
        data: JSON.stringify(obj),
        success: function (data) {
            if (data == 'CertInterfaceStation') {

                Icon = 'fas fa-minus-circle';
                var TaskId = '00';
                var Source = '07';
                var FileTypeId = 'N2';
                var DateString = TextParamValueGet(new String(Id).substr(0, 8));
                var RegionId = '0';
                var LSId = TextParamValueGet(new String(Id).substr(8, 2));
                var AxleId = '0';
                var StationNumber = TextParamValueGet(new String(Id).substr(10, 2));
                var LaneName = '0';
                var PdvId = '0';
                var BillingId = '0';
                var CategoryId = '0';

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
            if (data == 'CertReceiptBag') {

                Icon = 'fas fa-minus-circle';
                var TaskId = '00';
                var Source = '07';
                var FileTypeId = '72';//ReceiptBag
                var DateString = TextParamValueGet(new String(Id).substr(0, 8));
                var RegionId = '0';
                var LSId = TextParamValueGet(new String(Id).substr(14, 2));
                var AxleId = '0';
                var StationNumber = TextParamValueGet(new String(Id).substr(16, 2));
                var LaneName = '0';
                var PdvId = '0';
                var BillingId = '0';
                var CategoryId = '0';

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
            $('#CertStationDeleteBtnId' + Id).find('span').attr('class', 'fas fa-minus-circle');
            $('#CertStationDeleteBtnId' + Id).find('span').attr('style', 'color:#ff0000');
            $('#CertStationDeleteBtnId' + Id).attr('onclick', '');
        },
        error: function (request, status, error) {
            alert('Vous ne disposez pas des autorisations nécessaires pour effectuer cette action');
            $('#CertStationDeleteBtnId' + Id).find('span').attr('class', 'far fa-trash-alt');
        }
    });
}

function ReportView(Pattern) {

    var CexId = '0';
    var BagContainerId = '0';
    var StationNumber = '0';
    var TimeId = '0';
    var IsPrincipal = false;

    var DateStringStart = GetDateStringFromDatePicker('DateStartId');
    var DateStringEnd = GetDateStringFromDatePicker('DateEndId');
    var Sens = '0';

    if (Pattern == 'RepoTraficStation') {
        CexId = GetElementValue('CexId');
        BagContainerId = GetElementValue('BagContainerId');
        StationNumber = GetElementValue('StationNumberId');
        TimeId = GetElementValue('TimeId');
        IsPrincipal = new Boolean($("#IsPrincipalId").is(":checked"));
    }




    if (DateStringStart != '' && DateStringEnd != '') {

        var obj = {};
        obj.Pattern = Pattern;

        obj.CexId = CexId;
        obj.BagContainerId = BagContainerId;
        obj.StationNumber = StationNumber;
        obj.Sens = Sens;
        obj.IsPrincipal = IsPrincipal;

        obj.TimeId = TimeId;
        obj.DateStringStart = DateStringStart;
        obj.DateStringEnd = DateStringEnd;

        var PrintLink = '/Report/ReportView?' +
            'Pattern=' + Pattern +
            '&CexId=' + CexId +
            '&BagContainerId=' + BagContainerId +
            '&StationNumber=' + StationNumber +
            '&Sens=' + Sens +
            '&IsPrincipal=' + IsPrincipal +

            '&TimeId=' + TimeId +
            '&DateStringStart=' + DateStringStart +
            '&DateStringEnd=' + DateStringEnd;

        navigate(PrintLink, true);
    }
    else {
        ParamMessageErrorDisplay();
    };
}


function navigate(href, newTab) {
    var a = document.createElement('a');
    a.href = href;
    if (newTab) {
        a.setAttribute('target', '_blank');
    }
    a.click();
}

function Export(Pattern, FileType) {

    if (Pattern == 'RepoFdrDsh') {
        var SiteId = GetElementValue('SiteId');
        var LSId = GetElementValue('LSId');
        var FdrId = GetElementValue('FdrId');

        var obj = {};
        obj.FileType = FileType;

        obj.SiteId = SiteId;
        obj.LSId = LSId;
        obj.FdrId = FdrId;

        var PrintLink = '/Export/ExportRepoFdrDsh?' +
            'FileType=' + FileType +
            '&SiteId=' + SiteId +
            '&LSId=' + LSId +
            '&FdrId=' + FdrId;

        NavigateTo(PrintLink, true);
    }

    if (Pattern == 'RepoTraficCompany') {

        var TimeId = GetElementValue('TimeId');
        var DateStringStart = GetDateStringFromDatePicker('DateStartId');
        var DateStringEnd = GetDateStringFromDatePicker('DateEndId');

        var obj = {};
        obj.FileType = FileType;

        obj.TimeId = TimeId;
        obj.DateStringStart = DateStringStart;
        obj.DateStringEnd = DateStringEnd;

        var PrintLink = '/Export/ExportRepoTraficCompany?' +
            'FileType=' + FileType +
            '&TimeId=' + TimeId +
            '&DateStringStart=' + DateStringStart +
            '&DateStringEnd=' + DateStringEnd;

        NavigateTo(PrintLink, true);
    }

    if (Pattern == 'RepoNrCompany') {
        var TimeId = GetElementValue('TimeId');
        var DateStringStart = GetDateStringFromDatePicker('DateStartId');
        var DateStringEnd = GetDateStringFromDatePicker('DateEndId');

        var PrintLink = '/Export/ExportRepoCert?' +
            'FileType=' + FileType +
            '&Pattern=' + Pattern +
            '&TimeId=' + TimeId +
            '&DateStringStart=' + DateStringStart +
            '&DateStringEnd=' + DateStringEnd;

        NavigateTo(PrintLink, true);
    }

    if (Pattern == 'QualifTrxLane') {
        var SiteId = GetElementValue('SiteId');
        var LSId = GetElementValue('LSId');
        var FdrId = GetElementValue('FdrId');

        var obj = {};
        obj.FileType = FileType;

        obj.SiteId = SiteId;
        obj.LSId = LSId;
        obj.FdrId = FdrId;

        var PrintLink = '/Export/ExportRepoFdrDsh?' +
            'SiteId=' + SiteId +
            '&BagContainerId=' + BagContainerId +
            '&StationNumber=' + StationNumber +
            '&LaneName=' + LaneName +
            '&DhmStringStart=' + DhmStringStart +
            '&DhmStringEnd=' + DhmStringEnd +

            '&SiteIdO=' + SiteIdO +
            '&BagContainerIdO=' + BagContainerIdO +
            '&StationNumberO=' + StationNumberO +
            '&LaneNameO=' + LaneNameO +
            '&DhmStringStartO=' + DhmStringStartO +
            '&DhmStringEndO=' + DhmStringEndO +

            '&BillingId=' + BillingId +
            '&CategoryId=' + CategoryId +
            '&IsImageDisc=' + IsImageDisc +
            '&IsImageDiscO=' + IsImageDiscO +
            '&ObsPassId=' + ObsPassId +
            '&IsToSend=' + IsToSend +
            '&IsSent=' + IsSent;

        NavigateTo(PrintLink, true);
    }

    if (Pattern == 'RepoTraficStationDayAll') {
        var SiteId = GetElementValue('SiteId');
        var StationNumber = GetElementValue('StationNumberId');
        var DateStringStart = GetDateStringFromDatePicker('DateStartId');
        var DateStringEnd = GetDateStringFromDatePicker('DateEndId');

        var PrintLink = '/Repo/RepoTraficStationDayExport?' +
            'SiteId=' + SiteId +
            '&StationNumber=' + StationNumber +
            '&DateStringStart=' + DateStringStart +
            '&DateStringEnd=' + DateStringEnd +
            '&FileType=' + FileType;

        NavigateTo(PrintLink, true);
    }



    if (Pattern == 'RepoTraficSectionCumulCl') {
        var AxleId = GetElementValue('AxleId');
        var DateStringStart = GetDateStringFromDatePicker('DateStartId');
        var DateStringEnd = GetDateStringFromDatePicker('DateEndId');

        var PrintLink = '/Repo/RepoTraficSectionCumulClExport?' +
            'AxleId=' + AxleId +
            '&DateStringStart=' + DateStringStart +
            '&DateStringEnd=' + DateStringEnd +
            '&FileType=' + FileType;

        NavigateTo(PrintLink, true);
    }
}

function ExportRepoCert(FileType, DataName, Portion) {
    var TimeId = GetElementValue('TimeId');
    var DateStringStart = GetDateStringFromDatePicker('DateStartId');
    var DateStringEnd = GetDateStringFromDatePicker('DateEndId');

    var CexId = '';
    var BagContainerId = '';
    var StationNumber = '';

    if (DataName == 'TraficOd') {
        CexId = GetElementValue('CexId');
        BagContainerId = GetElementValue('BagContainerId');
        StationNumber = GetElementValue('StationNumberId');
    }

    if (DataName == 'Trafic') {
        if (Portion == 'Cex') {
            CexId = GetElementValue('CexId');
        }
    }

    var ExportLink = '/Export/ExportRepoCert?' +
        'FileType=' + FileType +
        '&DataName=' + DataName +
        '&Portion=' + Portion +
        '&TimeId=' + TimeId +
        '&CexId=' + CexId +
        '&BagContainerId=' + BagContainerId +
        '&StationNumber=' + StationNumber +
        '&DateStringStart=' + DateStringStart +
        '&DateStringEnd=' + DateStringEnd;

    NavigateTo(ExportLink, true);
}


function ResetParams() {

    //alert("in");
    //$("#SiteId").val('01');
    //alert($("#SiteId").val());
    //$("#BagContainerId").val('0');
    //$("#StationId").val('0');
    //$("#StartDateId").val();
    //$("#EndDateId").val('0');

    //$(".StartDateId").datepicker("setDate", "-1d");
    //$("#StartDateId").datepicker("setDate", "-1d");
    //$("#StartDateId").datepicker({ defaultDate: -1 });
    //$(".StartDateId").datepicker("setDate", -1);

    //var CurrentDay = Date(Date.now());
    //$("#StartDateId").val(CurrentDay);


    //var dateString = CurrentDay.Year();
    //alert(dateString);




    //var dateString = this.getFullYear() + "-" +
    //    ("0" + (this.getMonth() + 1)).slice(-2) + "-" +
    //    ("0" + this.getDate()).slice(-2) + " ";

    //alert(dateString);


    //alert(yesterday);

    //var output = d.ddmmyyyy();
    //alert(output);

}

function ParamGetSites() {

    $("#SiteId").empty();
    $.get("/Param/GetSites", function (data) {
        $.each(data, function (index, row) {
            $("#SiteId").append("<option value='" + row.SiteId + "'>" + row.SiteId + ' - ' + row.SiteName + "</option>")
        });
    });
    ParamResetDropDownList('SiteId');

    //var Source = GetElementValue('SourceId');
    //if (Source == '01' || Source == '08') //Ope
    //{
    //    ShowReport('SiteId' + 'Parent');
    //    ShowReport('LSId' + 'Parent');
    //    HideReport('BagContainerId' + 'Parent');
    //    HideReport('StationNumberId' + 'Parent');
    //    HideReport('LaneNameId' + 'Parent');
    //    HideReport('PdvId' + 'Parent');

    //    ParamResetDropDownList('BagContainerId');
    //    ParamResetDropDownList('StationNumberId');
    //    ParamResetDropDownList('LaneNameId');
    //    ParamResetDropDownList('PdvId');
    //}
}

function HideAllParameterControls() {

    //Common
    //HideControl("PluginId");
    //HideControl("GroupId");
    //HideControl("CategoryId");
    HideControl("RequestIdParent");
    HideControl("SiteIdParent");
    HideControl("LSIdParent");
    HideControl("BagContainerIdParent");
    HideControl("StationIdParent");
    HideControl("StartDateIdParent");
    HideControl("EndDateIdParent");

    //Certification    
    HideControl("BagNumberIdParent");
    HideControl("CashierNumberIdParent");
    HideControl("SensParent");
    HideControl("OnlyGapIdParent");
    HideControl("RayonPostParent");
    HideControl("RayonReceiptParent");
    HideControl("RayonTraficParent");
    HideControl("PaymentIdParent");

    //Repo
    HideControl("YearCrmParent");
    HideControl("MonthCrmParent");
    HideControl("CrmStatusIdParent");
    HideControl("DateIdParent");
    HideControl("CommentIdParent");

    //Fatourati
    HideControl("bank_nameParent");
}

function DisplayParamEvt() {
    HideAllReports();
    HideAllParameterControls();
    ShowControl("ParametersReport");
    ShowControl("SiteId");
    ShowControl("BagContainerId");
    ShowControl("StationId");
    ShowControl("StartDateId");
    ShowControl("EndDateId");
    ShowControl("DisplayReconciliationBtn");
}

function TopBarUpdate() {

    var ActionBtnId = 'tb-update-id';
    var Icon = 'fas fa-redo-alt tb-noti-cl gc-c1-cl';

    $('#' + ActionBtnId).find('span').attr('class', 'fa fa-spinner fa-spin btn-icon-m-cl gc-c1-cl');

    $.ajax({
        url: '/Common/CommonTopBarUpdate',
        method: "POST",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            $('#' + ActionBtnId).find('span').attr('class', Icon);
        },
        error: function (request, status, error) {
            alert('Update error');
            $('#' + ActionBtnId).find('span').attr('class', 'far fa-trash-alt btn-icon-cl gc-c1-cl');
        }
    });
}