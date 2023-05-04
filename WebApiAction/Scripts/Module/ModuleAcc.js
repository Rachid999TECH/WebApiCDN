function AccOpen() {

    $.ajax({
        url: "/Acc/AccContentGet",
        method: "POST",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: true,
        success: function (data) {

            jQuery.each(data, function (index, itemData) {

                //Profil
                var UserId = itemData[0].UserId;
                ElementOnClickSet('ParamActionBtnId', "AccProfilEdit('" + UserId + "')")

                var FirstName = itemData[0].FirstName;
                var LastName = itemData[0].LastName;                
                var IsMale = itemData[0].IsMale;               
                var ImageExtension = itemData[0].ImageExtension;               
                var ImagePath = '/Images/Profil/' + UserId + ImageExtension;
                var PhoneNumber = itemData[0].PhoneNumber;
                var PhoneFix = itemData[0].PhoneFix;
                var Email = itemData[0].Email;

                document.getElementById('acc-pr-img-id').src = ImagePath;
                document.getElementById('acc-fn-id').value = FirstName;
                document.getElementById('acc-ln-id').value = LastName;            
                document.getElementById('acc-mobile-id').value = PhoneNumber;
                document.getElementById('acc-fix-id').value = PhoneFix;
                document.getElementById('acc-email-id').value = Email;

                if (IsMale) {
                    document.getElementById('acc-gen-h-id').checked = true;
                    document.getElementById('acc-gen-f-id').checked = false;
                }
                else {
                    document.getElementById('acc-gen-h-id').checked = false;
                    document.getElementById('acc-gen-f-id').checked = true;
                }

                //Preference
                //var IsNotificationActive = itemData[0].IsNotificationActive;
                //var IsDefaultMode = itemData[0].IsDefaultMode;
                //if (IsNotificationActive) {
                //    document.getElementById('acc-noti-id').setAttribute('Class', 'success');
                //}
                //else {
                //    document.getElementById('acc-noti-id').setAttribute('Class', '');
                //}
                
                //if (IsDefaultMode) {
                //    document.getElementById('acc-mode-id').setAttribute('Class', 'success');
                //}
                //else {
                //    document.getElementById('acc-mode-id').setAttribute('Class', '');
                //}

                
                //document.getElementById('AccActionBtnId').setAttribute("onClick", "AccProfilEdit(" + UserId + ")");
                //document.getElementById('playlist-play-icon-id').setAttribute('Class', 'far fa-play-circle');
                //$('#playlist-play-icon-txt-id').text("Ecouter");
            });
        }
    })
}

function AccProfilEdit(UserId) {
    var ActionBtnId = 'ParamActionBtnId';
    var Icon = 'far fa-save btn-icon-m-cl gc-c1-cl';

    var FirstName = GetElementValue('acc-fn-id');
    var LastName = GetElementValue('acc-ln-id');
    var IsMale = new Boolean($("#acc-gen-h-id").is(":checked"));
    var PhoneNumber = GetElementValue('acc-mobile-id');
    var PhoneFix = GetElementValue('acc-fix-id');

    ActionBtnMarginSpin(ActionBtnId);

    var files = $("#acc-img-file-id").get(0).files;
    var data = new FormData();
    for (var i = 0; i < files.length; i++) {
        data.append("FileId", files[i]);
    };

    data.append("UserId", UserId);
    data.append("FirstName", FirstName);
    data.append("LastName", LastName);
    data.append("IsMale", IsMale);
    data.append("PhoneNumber", PhoneNumber);
    data.append("PhoneFix", PhoneFix);

    $.ajax({
        url: "/Acc/AccProfilEdit",
        method: "POST",
        dataType: "json",
        contentType: false,
        processData: false,
        data: data,
        success: function (data) {
            ActionBtnIconMarginSet(ActionBtnId, Icon);
        }
    });
}

function AccStatsGet() {

    NotiConnectionIdUpdate('Mon compte > Messages');

    var Pattern = 'AccStat';
    var PatternTableId = Pattern + 'TableId';
    var PatternTableReportId = Pattern + 'TableReportId';

    HideReport(PatternTableReportId);


    HideReport(PatternTableReportId);

    $('#' + PatternTableId).DataTable().destroy();;
    $('#' + PatternTableId).DataTable({
        "initComplete": function (settings, json) {
            ShowReport(PatternTableReportId);
            ActionBtnIconSet(ActionBtnId, Icon);
        },
        "ajax": {
            "url": "/Acc/AccStatsGet",
            "type": "GET",
            "datatype": "json"
        },
        "columns": [
            { "data": "FullName" },//0
            { "data": "FeatureName" },//1
            { "data": "Number" },//2            
        ],
        "columnDefs": [
            { "width": "40%", "className": "text-left", "targets": 0 },
            { "width": "40%", "className": "text-left", "targets": 1 },
            { "width": "20%", "className": "text-left", "targets": 2 },
            
            { "targets": 0, "render": function (data, type, row) { return data; } },
            { "targets": 1, "render": function (data, type, row) { return data; } },
            { "targets": 2, "render": function (data, type, row) { return data; } },

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
        "autoWidth": false,
        "searching": false,
        "lengthChange": false,
        "showNEntries": false,
        "bInfo": false,
        "bPaginate": true,
        "ordering": false
    });
}