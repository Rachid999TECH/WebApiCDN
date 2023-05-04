function ContAllReportsHide() {

    //HideReport('HomeReportId');

    //HideReport('ParamReportId');

    //HideReport('CertReceiptStation' + 'TableReportId');
    //HideReport('CertReceiptBag' + 'TableReportId');

    //HideReport('CertNrSite' + 'TableReportId');
    //HideReport('CertNrMp' + 'TableReportId');

    //HideReport('CertPostStation' + 'TableReportId');
    //HideReport('CertPost' + 'TableReportId');

    //HideReport('CertTraficStation' + 'TableReportId');
    //HideReport('CertTraficHour' + 'TableReportId');

    //HideReport('CertTrxLaneStation' + 'TableReportId');
    //HideReport('CertTrxLaneLane' + 'TableReportId');
    //HideReport('CertTrxLaneSpecificLane' + 'TableReportId');
    //HideReport('CertTrxLaneSpecificBillingId' + 'TableReportId');
    //HideReport('CertTrxLaneBillingId' + 'TableReportId');
    //HideReport('CertTrxLane' + 'TableReportId');


    //HideReport('CertVers' + 'TableReportId');

    //HideReport('CertCtrTrxStation' + 'TableReportId');
    //HideReport('CertCtrTrxLane' + 'TableReportId');
    //HideReport('CertCtrTrxBillingId' + 'TableReportId');

    //HideReport('CertFile' + 'TableReportId');
    //HideReport('CertFileLane' + 'TableReportId');
    //HideReport('CertFileNr' + 'TableReportId');
    //HideReport('CertFilePlan' + 'TableReportId');
    //HideReport('CertFileCeStation' + 'TableReportId');

    //HideReport('CertRecoReceipt' + 'TableReportId');
    //HideReport('CertRecoPost' + 'TableReportId');
    //HideReport('CertRecoTrxLane' + 'TableReportId');
}



function ContAllParametersHide() {

    //HideReport('SourceId' + 'Parent');
    //HideReport('FileTypeId' + 'Parent');

    //HideReport('SiteId' + 'Parent');
    //HideReport('BagContainerId' + 'Parent');
    //HideReport('StationNumberId' + 'Parent');
    //HideReport('Sens' + 'Parent');

    //HideReport('DateStartId' + 'Parent');
    //HideReport('DateEndId' + 'Parent');
    //HideReport('CtrId' + 'Parent');

    //HideReport('ParamActionContainerId1');
}

function ContHomeOpen() {
    ContAllReportsHide();
    ContAllParametersHide();
    //MenuBarHighlight(0, 6);

    ShowReport('HomeReportId');
}

function ContProfilOpen() {
    CertLaneAllReportsHide();
    CertLaneAllParametersHide();
    MenuBarHighlight(1, 6);

    ShowReport('ParamReportId');

    ShowReport('CtrId' + 'Parent');
    ShowReport('SiteId' + 'Parent');
    ShowReport('BagContainerId' + 'Parent');
    ShowReport('StationNumberId' + 'Parent');
    ShowReport('DateStartId' + 'Parent');
    ShowReport('DateEndId' + 'Parent');

    document.getElementById('ParamActionBtnId').setAttribute("onClick", "CertReceiptStationDisplay('CertReceiptStation')");
    $('#ParamTitleId').text("Certification des redditions");
    document.getElementById('ParamActionIconId').setAttribute('Class', 'fas fa-eye');
    $('#ParamActionTextId').text("Afficher");
    HtmlDropDownListWithInputFill('CtrId', '0', '/Param/ParamCtrsGet', 'CtrId', 'CtrName', 'Redditions');
}


function CertNrStationOpen() {
    CertLaneAllReportsHide();
    CertLaneAllParametersHide();
    MenuBarHighlight(2, 6);

    ShowReport('ParamReportId');

    ShowReport('SiteId' + 'Parent');
    ShowReport('BagContainerId' + 'Parent');
    ShowReport('DateStartId' + 'Parent');
    ShowReport('DateEndId' + 'Parent');

    document.getElementById('ParamActionBtnId').setAttribute("onClick", "CertNrSiteDisplay()");
    $('#ParamTitleId').text("Certification des recettes par moyen de paiement");
    document.getElementById('ParamActionIconId').setAttribute('Class', 'fas fa-eye');
    $('#ParamActionTextId').text("Afficher");
}

//function CertPostStationOpen() {
//    CertLaneAllReportsHide();
//    CertLaneAllParametersHide();
//    MenuBarHighlight(3, 6);

//    ShowReport('ParamReportId');

//    ShowReport('SiteId' + 'Parent');
//    ShowReport('BagContainerId' + 'Parent');
//    ShowReport('StationNumberId' + 'Parent');
//    ShowReport('DateStartId' + 'Parent');
//    ShowReport('DateEndId' + 'Parent');
//    ShowReport('CtrId' + 'Parent');

//    document.getElementById('ParamActionBtnId').setAttribute("onClick", "CertPostStationDisplay()");
//    $('#ParamActionTextId').text("Certification de la liste des postes");
//    $('#ParamActionBtnId').find('span').attr('class', 'fas fa-eye');
//    document.getElementById('ParamActionIconId').setAttribute('Class', 'fas fa-eye');
//    $('#ParamActionTextId').text('Afficher');

//    HtmlDropDownListWithInputFill('CtrId', '0', '/Param/ParamCtrsGet', 'CtrId', 'CtrName', 'Fin de poste');
//}

function CertVersStationOpen() {
    CertLaneAllReportsHide();
    CertLaneAllParametersHide();
    MenuBarHighlight(4, 6);

    ShowReport('ParamReportId');
    ShowReport('SiteId' + 'Parent');
    ShowReport('BagContainerId' + 'Parent');
    ShowReport('StationNumberId' + 'Parent');
    ShowReport('DateStartId' + 'Parent');
    ShowReport('DateEndId' + 'Parent');

    document.getElementById('ParamActionBtnId').setAttribute("onClick", "CertVersDisplay()");
    $('#ParamTitleId').text("Certification des versements");
    document.getElementById('ParamActionIconId').setAttribute('Class', 'fas fa-eye');
    $('#ParamActionTextId').text("Afficher");

    $('#ParamActionBtnId').find('span').attr('class', 'fas fa-eye');
    $('#ParamActionTextId').text('Afficher');
}

//function CertTraficStationOpen() {
//    CertLaneAllReportsHide();
//    CertLaneAllParametersHide();
//    MenuBarHighlight(5, 6);

//    HideReport('HomeReportId');

//    ShowReport('ParamReportId');
//    ShowReport('SiteId' + 'Parent');
//    ShowReport('BagContainerId' + 'Parent');
//    ShowReport('StationNumberId' + 'Parent');
//    ShowReport('DateStartId' + 'Parent');
//    ShowReport('DateEndId' + 'Parent');

//    document.getElementById('ParamActionBtnId').setAttribute("onClick", "CertTraficStationDisplay()");
//    $('#ParamTitleId').text("Certification du trafic");
//    document.getElementById('ParamActionIconId').setAttribute('Class', 'fas fa-eye');
//    $('#ParamActionTextId').text("Afficher");

//    $('#ParamActionBtnId').find('span').attr('class', 'fas fa-eye');
//    $('#ParamActionTextId').text('Afficher');
//}

function CertTrxLaneStationOpen() {
    CertLaneAllReportsHide();
    CertLaneAllParametersHide();
    MenuBarHighlight(6, 6);

    ShowReport('ParamReportId');

    ShowReport('SiteId' + 'Parent');
    ShowReport('BagContainerId' + 'Parent');
    ShowReport('StationNumberId' + 'Parent');
    ShowReport('DateStartId' + 'Parent');
    ShowReport('DateEndId' + 'Parent');

    ShowReport('ParamActionBtnId1');

    document.getElementById('ParamActionBtnId').setAttribute("onClick", "CertCtrTrxStationDisplay()");
    $('#ParamTitleId').text("Contrôle d'exhaustivité des transactions");
    document.getElementById('ParamActionIconId').setAttribute('Class', 'fas fa-eye');
    $('#ParamActionTextId').text("Afficher");

    $('#ParamActionBtnId').find('span').attr('class', 'fas fa-eye');
    $('#ParamActionTextId').text('Afficher');

}




