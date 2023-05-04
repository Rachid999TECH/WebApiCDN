$(function () {

    var HubUrl = new String("/signalr");

    $.connection.hub.url = HubUrl;
    var notificationHub = $.connection.notificationHub;
    
    $.connection.hub.start({ jsonp: true }).done(function () {
        console.log("signalr on");
        //console.log($.connection.hub.id);
    });


    //$.connection.hub.start(({ transport: ['webSockets', 'serverSentEvents', 'longPolling'] })).done(function () {
    //    console.log("signalr on");
    //    //console.log($.connection.hub.id);
    //});

    //setTimeout(function () {
    //    $.connection.hub.start().done(function () {
    //        console.log("signalr on");
    //    });
    //}, 5000);

    //$.connection.hub.start().done(function (myHubConnection) {
    //    console.log(myHubConnection.state); // Should be 1 (connected)
    //    console.log($.connection.hub.state == myHubConnection.state); // They are both the same object, aka both should = 1, result = true
    //});





    //$.connection.hub.disconnected(function () {
    //    $.connection.hub.start();
    //    console.log('signalr restarted');
    //    if ($.connection.hub.lastError) { console.log("Disconnected. lastError : " + $.connection.hub.lastError.message); }
    //});



    notificationHub.client.fileDownloadProgressUpdate = function (ProgressValue) {
        var ProgressBarIdElement = $('#ProgressBarId');

        if (ProgressBarIdElement) {
            ProgressBarIdElement.text(ProgressValue + '%');           
            ProgressBarIdElement.attr('style', 'width: ' + ProgressValue + '%; background-color:#09c70d');
            if (ProgressValue == 100) {
                //DocMyDocumentsPathGet();
                ShowReport('DocFileReadBtnId');
            }
        }
    }

    notificationHub.client.ChatMessageSendNotify = function (UserIdFrom, UserIdTo, FriendFullName, ChatMessage, DhmValue) {

        var UserId = GetElementValue('UserId');
        if (UserId == UserIdTo) {
            PlayAudio("AudioChatId");
            TopBarChatCountGet('0');
            HideReport('tb-acc-id');
            HideReport('tb-noti-report-id');
            HideReport('tb-hist-report-id');
            HideReport('tb-conn-report-id');
            HideReport('tb-fix-report-id');
            ShowReport('tb-chat-report-id');

            ElementInputSet('KeyWordId', FriendFullName);
            TopBarChatGet();
            TopBarChatMsgGet(UserIdFrom, UserIdTo);
            TopBarChatMsgNotify(UserIdFrom, UserIdTo, ChatMessage);

            //var IconPath = new String("/Images/Profil/" + UserIdFrom + ".jpg")
            //$.notify({
            //    icon: new String(IconPath),
            //    title: "",
            //    message: new String(DhmValue + ' : ' + ChatMessage)
            //},
            //{
            //    type: 'minimalist',
            //    delay: 5000,
            //    icon_type: 'image',
            //    template: '<div data-notify="container" class="col-xs-6 col-sm-3 alert alert-{0}" role="alert" style="border-radius: .3rem;">' +
            //        '<img data-notify="icon" class="img-circle pull-left">' +
            //        '<span style="font-size:15px" data-notify="title">{1}</span>' +
            //        '<span style="font-size:13px" "data-notify ="message">{2} </span>' +
            //        '</div>'
            //});
        }

        TopBarChatCountGet('0');
    }

    //notificationHub.client.handleFileProgressNotify = function (CertFilePlanId, CertFileId, IsRunning, LinesNumber, CurrentLineNumber) {

    //    var CertFilePlayBtnIdElement = $('#CertFilePlayBtnId' + CertFilePlanId);
    //    var LinesNumberPlanIdElement = $('#LinesNumberId' + CertFilePlanId);
    //    var ProgressPercentPlanIdElement = $('#ProgressPercentId' + CertFilePlanId);

    //    var CurrentLineNumber = parseInt(CurrentLineNumber);
    //    var LinesNumber = parseInt(LinesNumber);
    //    //var ProgressValue = ((CurrentLineNumber / LinesNumber) * 100).toFixed(0);
    //    var ProgressValue = ((CurrentLineNumber / LinesNumber) * 100).toFixed(2);
    //    //var ProgressValue = CurrentLineNumber; //For debug
    //    var ProgressPercent = ProgressValue.toString() + '%';

    //    //progressBar
    //    var ProgressBarPlanIdElement = $('#ProgressBarId' + CertFilePlanId);
    //    if (ProgressBarPlanIdElement) {
    //        ProgressBarPlanIdElement.attr('style', 'width: ' + ProgressValue + '%; background-color:#09c70d');
    //    }

    //    if (IsRunning == false) {
    //        //Test
    //        if (CurrentLineNumber == LinesNumber) {
    //            if (CertFilePlayBtnIdElement) {
    //                CertFilePlayBtnIdElement.find('span').attr('class', 'fas fa-check');
    //            }
    //        }
    //        else {
    //            if (CertFilePlayBtnIdElement) {
    //                CertFilePlayBtnIdElement.find('span').attr('class', 'fas fa-exclamation-triangle');
    //            }
    //        }
            
    //        //old
    //        //if (CertFilePlayBtnIdElement) {
    //        //    CertFilePlayBtnIdElement.find('span').attr('class', 'fas fa-check');
    //        //}
    //    }
    //    else {
    //        if (CertFilePlayBtnIdElement) {
    //            CertFilePlayBtnIdElement.find('span').attr('class', 'fa fa-spinner fa-spin');
    //        }
    //    }

    //    if (LinesNumberPlanIdElement) {
    //        LinesNumberPlanIdElement.text(LinesNumber);
    //    }

    //    if (ProgressPercentPlanIdElement) {
    //        ProgressPercentPlanIdElement.text(ProgressPercent);
    //    }



    //    //Data

    //    if (new String(CertFileId).length >= 1) {
    //        var SiteId = new String(CertFileId).substr(8, 2);
    //        var StationNumber = new String(CertFileId).substr(10, 2);
    //        var LaneName = new String(CertFileId).substr(12, 3);
    //        var FileTypeId = new String(CertFileId).substr(15, 2);
    //        //var SourceId = new String(CertFileId).substr(17, 2);

    //        var BillingId = '--';
    //        var CategoryId = '--';

    //        if (new String(CertFileId).length >= 21) {
    //            BillingId = new String(CertFileId).substr(19, 2);
    //        }

    //        if (new String(CertFileId).length >= 23) {
    //            CategoryId = new String(CertFileId).substr(21, 2);
    //        }



    //        var DhmValueStartIdElement = $('#DhmValueStartId' + CertFilePlanId);
    //        var DhmValueEndIdElement = $('#DhmValueEndId' + CertFilePlanId);
    //        if (DhmValueStartIdElement && DhmValueEndIdElement) {
    //            var DayString = new String(CertFileId).substr(0, 2);
    //            var MonthString = new String(CertFileId).substr(2, 2);
    //            var YearString = new String(CertFileId).substr(4, 4);
    //            DhmValueStartIdElement.text(DayString + '/' + MonthString + '/' + YearString);
    //            DhmValueEndIdElement.text(DayString + '/' + MonthString + '/' + YearString);
    //        }

    //        var SiteIdIdElement = $('#SiteId' + CertFilePlanId);
    //        if (SiteIdIdElement) {
    //            SiteIdIdElement.text(SiteId);
    //        }

    //        var StationNumberElement = $('#StationNumber' + CertFilePlanId);
    //        if (StationNumberElement) {
    //            StationNumberElement.text(StationNumber);
    //        }

    //        var LaneNameElement = $('#LaneName' + CertFilePlanId);
    //        if (LaneNameElement) {
    //            LaneNameElement.text(LaneName);
    //        }

    //        var FileTypeIdElement = $('#FileTypeId' + CertFilePlanId);
    //        if (FileTypeIdElement) {
    //            FileTypeIdElement.text(FileTypeId);
    //        }

    //        var BillingIdElement = $('#BillingId' + CertFilePlanId);
    //        if (BillingIdElement) {
    //            BillingIdElement.text(BillingId);
    //        }

    //        var CategoryIdElement = $('#CategoryId' + CertFilePlanId);
    //        if (CategoryIdElement) {
    //            CategoryIdElement.text(CategoryId);
    //        }
    //    }        
    //}

    notificationHub.client.handleFileProgressionNotify = function (CertFilePlanId, CertFileId, IsRunning, LinesNumber, CurrentLineNumber, ThreadTotal, ThreadDone) {

        var CertFilePlayBtnIdElement = $('#CertFilePlayBtnId' + CertFilePlanId);
        var LinesNumberPlanIdElement = $('#LinesNumberId' + CertFilePlanId);       
        var CurrentLineNumber = parseInt(CurrentLineNumber);
        var LinesNumber = parseInt(LinesNumber);
        
        
        

        

        //progressBar
        var ProgressValue = ((CurrentLineNumber / LinesNumber) * 100).toFixed(2);
        var ProgressBarPlanIdElement = $('#ProgressBarId' + CertFilePlanId);
        if (ProgressBarPlanIdElement) {
            ProgressBarPlanIdElement.attr('style', 'width: ' + ProgressValue + '%; background-color:#09c70d');
        }

        //ProgressPercent
        var ProgressPercent = ProgressValue.toString() + '%';
        var ProgressPercentPlanIdElement = $('#ProgressPercentId' + CertFilePlanId);
        if (ProgressPercentPlanIdElement) {
            ProgressPercentPlanIdElement.text(ProgressPercent);
        }

        

        //if (IsRunning == false) {
            //Test
            //if (CurrentLineNumber == LinesNumber) {
            //    if (CertFilePlayBtnIdElement) {
            //        CertFilePlayBtnIdElement.find('span').attr('class', 'fas fa-check');
            //    }
            //}
            //else {
            //    if (CertFilePlayBtnIdElement) {
            //        CertFilePlayBtnIdElement.find('span').attr('class', 'fas fa-exclamation-triangle');
            //    }
            //}
        //}
        //else {
        //    if (CertFilePlayBtnIdElement) {
        //        CertFilePlayBtnIdElement.find('span').attr('class', 'fa fa-spinner fa-spin');
        //    }
        //}

        if (LinesNumberPlanIdElement) {
            LinesNumberPlanIdElement.text(LinesNumber);
        }
        
        if (CertFilePlayBtnIdElement) {
            CertFilePlayBtnIdElement.find('span').attr('class', 'fa fa-spinner fa-spin');
        }
        
        if (ThreadDone > 0) {
            //progressBarThread
            var ProgressThreadValue = ((ThreadDone / ThreadTotal) * 100).toFixed(2);
            var ProgressBarThreadPlanIdElement = $('#ProgressBarThreadId' + CertFilePlanId);
            if (ProgressBarThreadPlanIdElement) {
                ProgressBarThreadPlanIdElement.attr('style', 'width: ' + ProgressThreadValue + '%; background-color:#09c70d');
            }

            //ProgressThreadText
            var ThreadText = ThreadDone + '/' + ThreadTotal;
            var ProgressBarThreadPlanIdElement = $('#ProgressBarThreadId' + CertFilePlanId);
            if (ProgressBarThreadPlanIdElement) {
                ProgressBarThreadPlanIdElement.text(ThreadText);
            }

            if (ThreadDone == ThreadTotal) {
                if (CertFilePlayBtnIdElement) {
                    CertFilePlayBtnIdElement.find('span').attr('class', 'fas fa-check');
                }
            }          
        }
        

        //Data

        if (new String(CertFileId).length >= 1) {
            var SiteId = new String(CertFileId).substr(8, 2);
            var StationNumber = new String(CertFileId).substr(10, 2);
            var LaneName = new String(CertFileId).substr(12, 3);
            var FileTypeId = new String(CertFileId).substr(15, 2);
            //var SourceId = new String(CertFileId).substr(17, 2);

            var BillingId = '--';
            var CategoryId = '--';

            if (new String(CertFileId).length >= 21) {
                BillingId = new String(CertFileId).substr(19, 2);
            }

            if (new String(CertFileId).length >= 23) {
                CategoryId = new String(CertFileId).substr(21, 2);
            }



            var DhmValueStartIdElement = $('#DhmValueStartId' + CertFilePlanId);
            var DhmValueEndIdElement = $('#DhmValueEndId' + CertFilePlanId);
            if (DhmValueStartIdElement && DhmValueEndIdElement) {
                var DayString = new String(CertFileId).substr(0, 2);
                var MonthString = new String(CertFileId).substr(2, 2);
                var YearString = new String(CertFileId).substr(4, 4);
                DhmValueStartIdElement.text(DayString + '/' + MonthString + '/' + YearString);
                DhmValueEndIdElement.text(DayString + '/' + MonthString + '/' + YearString);
            }

            var SiteIdIdElement = $('#SiteId' + CertFilePlanId);
            if (SiteIdIdElement) {
                SiteIdIdElement.text(SiteId);
            }

            var StationNumberElement = $('#StationNumber' + CertFilePlanId);
            if (StationNumberElement) {
                StationNumberElement.text(StationNumber);
            }

            var LaneNameElement = $('#LaneName' + CertFilePlanId);
            if (LaneNameElement) {
                LaneNameElement.text(LaneName);
            }

            var FileTypeIdElement = $('#FileTypeId' + CertFilePlanId);
            if (FileTypeIdElement) {
                FileTypeIdElement.text(FileTypeId);
            }

            var BillingIdElement = $('#BillingId' + CertFilePlanId);
            if (BillingIdElement) {
                BillingIdElement.text(BillingId);
            }

            var CategoryIdElement = $('#CategoryId' + CertFilePlanId);
            if (CategoryIdElement) {
                CategoryIdElement.text(CategoryId);
            }
        }
    }

    notificationHub.client.handleFileProgressManNotify = function (CertFileId, IsHandled, LinesNumber, CurrentLineNumber) {

        var LinesNumberIdElement = $('#LinesNumberId' + CertFileId);
        var CurrentLineNumberIdElement = $('#CurrentLineNumberId' + CertFileId);
        var ProgressPercentIdElement = $('#ProgressPercentId' + CertFileId);
        var CertFileHandleBtnIdElement = $('#CertFileManPlayBtnId' + CertFileId);
        var ProgressBarIdElement = $('#ProgressBarId' + CertFileId);

        var CurrentLineNumberInt = parseInt(CurrentLineNumber);
        var LinesNumberInt = parseInt(LinesNumber);
        var ProgressValue = ((CurrentLineNumberInt / LinesNumberInt) * 100).toFixed(2);
        var ProgressPercent = ProgressValue.toString() + '%';              

        if (IsHandled == true) {
            if (CertFileHandleBtnIdElement) {
                CertFileHandleBtnIdElement.find('span').attr('class', 'fas fa-check');
            }
        }
        else {
            if (CertFileHandleBtnIdElement) {
                CertFileHandleBtnIdElement.find('span').attr('class', 'fa fa-spinner fa-spin');
            }
        }

        if (LinesNumberIdElement) {
            LinesNumberIdElement.text(LinesNumberInt);
        }

        if (CurrentLineNumberIdElement) {
            CurrentLineNumberIdElement.text(CurrentLineNumberInt);
        }

        if (ProgressPercentIdElement) {
            ProgressPercentIdElement.text(ProgressPercent);
        }
       
        if (ProgressBarIdElement) {
            ProgressBarIdElement.attr('style', 'width: ' + ProgressValue + '%; background-color:#09c70d');
        }
    }

    notificationHub.client.certReceiptPeriodLaunchedNotify = function () {
        console.log('in');
        PlayAudio("AudioLaunchId");
        document.getElementById('ParamActionBtnId').setAttribute("onClick", "CertReceiptPeriodDisplay()");
        $('#ParamActionBtnId').click();
    }

    notificationHub.client.certReceiptCexLaunchedNotify = function () {
        console.log('in');
        PlayAudio("AudioLaunchId");
        document.getElementById('ParamActionBtnId').setAttribute("onClick", "CertReceiptCexDisplay()");
        $('#ParamActionBtnId').click();
    }
    
    notificationHub.client.certDshDayLaunchedNotify = function () {
        console.log('in');
        PlayAudio("AudioLaunchId");
        document.getElementById('ParamActionBtnId').setAttribute("onClick", "CertDshDayDisplay()");
        $('#ParamActionBtnId').click();
    }

    notificationHub.client.certValidateNotify = function (Pattern, UserId, FullName, Journey, SiteName, StationName) {
        console.log('in');
        PlayAudio("AudioValidateId");

        var icon = ""
        var title = "";
        var message = "";

        if (Pattern == 'CertReceiptCex') {
            var icon = new String("/Images/Profil/" + UserId + ".jpg")
            var title = FullName;
            var message = new String('Je viens de valider les reddidtions du ' + SiteName + ' du ' + Journey);            
        }        
        if (Pattern == 'CertReceiptStation') {
            var icon = new String("/Images/Profil/" + UserId + ".jpg")
            var title = FullName;
            var message = new String('Validation RED de la gare ' + StationName + ' du ' + Journey);
        }
        if (Pattern == 'CertNrStation') {
            var icon = new String("/Images/Profil/" + UserId + ".jpg")
            var title = FullName;
            var message = new String('Validation MP de la gare ' + StationName + ' du ' + Journey);
        }
        if (Pattern == 'CertPostStation') {
            var icon = new String("/Images/Profil/" + UserId + ".jpg")
            var title = FullName;
            var message = new String('Validation FP de la gare ' + StationName + ' du ' + Journey);
        }
        if (Pattern == 'CertTraficStation') {
            var icon = new String("/Images/Profil/" + UserId + ".jpg")
            var title = FullName;
            var message = new String('Validation Trafic de la gare ' + StationName + ' du ' + Journey);
        }
        if (Pattern == 'CertVersStation') {
            var icon = new String("/Images/Profil/" + UserId + ".jpg")
            var title = FullName;
            var message = new String('Validation Vers. de la gare ' + StationName + ' du ' + Journey);
        }
        if (Pattern == 'CertTrxLaneStation') {
            var icon = new String("/Images/Profil/" + UserId + ".jpg")
            var title = FullName;
            var message = new String('Validation Trx. de la gare ' + StationName + ' du ' + Journey);
        }
        $.notify({
            icon: icon,
            title: title,
            message: message
        },
        {
            type: 'minimalist',
            delay: 10000,
            icon_type: 'image',
            template: '<div data-notify="container" class="col-xs-6 col-sm-3 alert alert-{0}" role="alert" style="border-radius: .3rem;">' +
                '<img data-notify="icon" class="img-circle pull-left">' +
                '<span style="font-size:15px" data-notify="title">{1}</span>' +
                '<span style="font-size:13px" "data-notify ="message">{2} </span>' +
                '</div>'
        });
    }

    notificationHub.client.topBarNotify = function (UserIdFrom, Title, Content, FullName, Journey) {
        //console.log('in');
        PlayAudio("AudioValidateId");

        var icon = ""
        var title = "";
        var message = "";

        var icon = new String("/Images/Profil/" + UserIdFrom + ".jpg")
        var title = FullName + ' | ' + Title;
        var message = new String(Journey + ' : ' + Content);
        
        $.notify({
            icon: icon,
            title: title,
            message: message
        },
            {
                type: 'minimalist',
                delay: 10000,
                icon_type: 'image',
                template: '<div data-notify="container" class="col-xs-6 col-sm-3 alert alert-{0}" role="alert" style="border-radius: .3rem;">' +
                    '<img data-notify="icon" class="img-circle pull-left">' +
                    '<span style="font-size:15px" data-notify="title">{1}</span>' +
                    '<span style="font-size:13px" "data-notify ="message">{2} </span>' +
                    '</div>'
            });

        TopBarNotiCountGet();
        TopBarConnCountGet();
        TopBarFixCountGet();
    }

    notificationHub.client.qualifInsightDayChartUpdate = function (ObsTickIdP, ObsTickIdD, ObsTickIdI, ObsTickIdM, ObsTickIdJ, ObsTickId1,
                                                                   ObsMpId26, ObsMpId01, ObsMpId48,
                                                                   ObsPassId3, ObsPassId6, ObsPassId7, ObsPassIdW, ObsPassIdA, ObsPassIdV) {
        QualifObsTickIdRealTimeBarUpdate(ObsTickIdP, ObsTickIdD, ObsTickIdI, ObsTickIdM, ObsTickIdJ, ObsTickId1);
        QualifObsMpIdRealTimeBarUpdate(ObsMpId26, ObsMpId01, ObsMpId48);
        QualifObsPassIdRealTimeBarUpdate(ObsPassId3, ObsPassId6, ObsPassId7, ObsPassIdW, ObsPassIdA, ObsPassIdV);
    }

    notificationHub.client.repoInsightDayChartUpdate = function (TraficH00, TraficH01, TraficH02, TraficH03, TraficH04, TraficH05,
                                                                 TraficH06, TraficH07, TraficH08, TraficH09, TraficH10, TraficH11,
                                                                 TraficH12, TraficH13, TraficH14, TraficH15, TraficH16, TraficH17,
                                                                 TraficH18, TraficH19, TraficH20, TraficH21, TraficH22, TraficH23,

                                                                 TraficTlpH00, TraficTlpH01, TraficTlpH02, TraficTlpH03, TraficTlpH04, TraficTlpH05,
                                                                 TraficTlpH06, TraficTlpH07, TraficTlpH08, TraficTlpH09, TraficTlpH10, TraficTlpH11,
                                                                 TraficTlpH12, TraficTlpH13, TraficTlpH14, TraficTlpH15, TraficTlpH16, TraficTlpH17,
                                                                 TraficTlpH18, TraficTlpH19, TraficTlpH20, TraficTlpH21, TraficTlpH22, TraficTlpH23) {

        RepoTraficAllRealTimeTotalUpdate(TraficH00, TraficH01, TraficH02, TraficH03, TraficH04, TraficH05,
                                         TraficH06, TraficH07, TraficH08, TraficH09, TraficH10, TraficH11,
                                         TraficH12, TraficH13, TraficH14, TraficH15, TraficH16, TraficH17,
                                         TraficH18, TraficH19, TraficH20, TraficH21, TraficH22, TraficH23,

                                         TraficTlpH00, TraficTlpH01, TraficTlpH02, TraficTlpH03, TraficTlpH04, TraficTlpH05,
                                         TraficTlpH06, TraficTlpH07, TraficTlpH08, TraficTlpH09, TraficTlpH10, TraficTlpH11,
                                         TraficTlpH12, TraficTlpH13, TraficTlpH14, TraficTlpH15, TraficTlpH16, TraficTlpH17,
                                         TraficTlpH18, TraficTlpH19, TraficTlpH20, TraficTlpH21, TraficTlpH22, TraficTlpH23);
        //QualifObsMpIdRealTimeBarUpdate(ObsMpId26, ObsMpId01, ObsMpId48);
        //QualifObsPassIdRealTimeBarUpdate(ObsPassId3, ObsPassId6, ObsPassId7, ObsPassIdW, ObsPassIdA, ObsPassIdV);
    }

    notificationHub.client.repoTraficStationHourDisplay = function () {
        RepoTraficStationHourDisplay();
    }

    notificationHub.client.alertNotify = function (message, DhmValue, IconPath) {
        PlayAudio("AudioLaunchId");
        //IconPath = "/Images/Icons/alert.jpg";
        $.notify({
            icon: new String(IconPath),
            title: "",
            message: new String(DhmValue + ' : ' + message)
        },
        {
            type: 'minimalist',
            delay: 60000,
            icon_type: 'image',
            template: '<div data-notify="container" class="col-xs-6 col-sm-3 alert alert-{0}" role="alert" style="border-radius: .3rem;">' +
                '<img data-notify="icon" class="img-circle pull-left">' +
                '<span style="font-size:15px" data-notify="title">{1}</span>' +
                '<span style="font-size:13px" "data-notify ="message">{2} </span>' +
                '</div>'
            });

        TopBarNotiCountGet();
        TopBarConnCountGet();
        TopBarFixCountGet();
        TopBarChatCountGet('0');
    }

    notificationHub.client.taskNotify = function (Title, message, DhmValue, IconPath) {
        PlayAudio("AudioTaskId");
        $.notify({
            icon: new String(IconPath),
            title: Title,
            message: new String(DhmValue + ' : ' + message)
        },
            {
                type: 'minimalist',
                delay: 20000,
                icon_type: 'image',
                template: '<div data-notify="container" class="col-xs-6 col-sm-3 alert alert-{0}" role="alert" style="border-radius: .3rem;">' +
                    '<img data-notify="icon" class="img-circle pull-left">' +
                    '<span style="font-size:15px" data-notify="title">{1}</span>' +
                    '<span style="font-size:13px" "data-notify ="message">{2} </span>' +
                    '</div>'
            });


        //$.notify({
        //    icon: new String(IconPath),
        //    title: Title,
        //    message: new String(DhmValue + ' : ' + message)
        //},
        //{
        //    type: 'minimalist',
        //    delay: 20000,
        //    icon_type: 'image',
        //    template: '<div aria-live="polite" aria-atomic="true" class="d-flex justify-content-center align-items-center" style="height: 200px;">' +
        //        '<div class="toast" role="alert" aria-live="assertive" aria-atomic="true">' +
        //        '<div class="toast-header">' +
        //        '<img src="..." class="rounded mr-2" alt="...">' +
        //        '<strong class="mr-auto">Bootstrap</strong>' +
        //        '<small>11 mins ago</small>' +
        //        '<button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">' +
        //        '<span aria-hidden="true">&times;</span>' +
        //        '</button>' +
        //        '</div>' +
        //        '<div class="toast-body">' +
        //        'Hello, world! This is a toast message.' +
        //        '</div>' +
        //        '</div>' +
        //        '</div>'
        //});

        
            

        TopBarNotiCountGet();
    }

    notificationHub.client.certReceiptStationValidateNotify = function (UserId, FullName, DhmValue, StationNumber) {
        console.log('in');
        PlayAudio("AudioValidateId");
        var Day = new String(DhmValue).replace('T00:00:00', '');

        var ProfilImgUrl = new String("/Images/Profil/" + UserId + ".jpg")
        var Action = new String('vient de valider la reddidtion du ' + Day + ' de la gare ' + StationNumber);

        $.notify({
            icon: ProfilImgUrl,
            title: FullName,
            message: Action
        },
        {
            type: 'minimalist',
            delay: 10000,
            icon_type: 'image',
            template: '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0}" role="alert" style="border-radius: .3rem;">' +
                '<img data-notify="icon" class="img-circle pull-left">' +
                '<span style="font-size:15px" data-notify="title">{1}</span>' +
                '<span style="font-size:13px" "data-notify ="message">{2} </span>' +
                '</div>'
        });
    }


    













    //Define function notify
    //notificationHub.client.notify = function (message) {
    //    //console.log("in");
    //    if (message.toLowerCase() == "added") {

    //        alert('in');
    //        UpdateNotiCount();
    //        PlayAudio("AudioValidateId");
            
            
            //$.ajax({
            //    url: "/Home/GetProfil",
            //    method: "POST",
            //    contentType: "application/json; charset=utf-8",
            //    dataType: "json",
            //    success: function (data) {
            //        var ProfilImgUrl = new String("/Images/Profil/" + data['UserId'] + ".jpg")
            //        var FullName = new String(data['LastName'] + " " + data['FirstName']);
            //        var Action = new String("Recette validée : G" + data['StationName'] + " , Jour: " + data['DayK'] + "/" + data['MonthK'] + "/" + data['YearK'] + "");
            //        $.notify({
            //            icon: ProfilImgUrl,
            //            title: FullName,
            //            message: Action
            //        },
            //            {
            //                type: 'minimalist',
            //                delay: 5000,
            //                icon_type: 'image',
            //                template: '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0}" role="alert" style="border-radius: .3rem;">' +
            //                    '<img data-notify="icon" class="img-circle pull-left">' +
            //                    '<span style="font-size:15px" data-notify="title">{1}</span>' +
            //                    '<span style="font-size:13px" "data-notify ="message">{2} </span>' +
            //                    '</div>'
            //            });
            //    }
            //});
    //    }
    //}








    




    //Define function
    

    


    
















    //else {
    //    HubUrl = new String('http://' + window.location.hostname + '/signalr')
    //}  




   //Define function addprogress
    //progress.client.addProgress = function (CertTrxLaneRecoId, CurrentLineNumber) {

    //    console.log(CertTrxLaneRecoId); 
    //    console.log(CurrentLineNumber); 
    //    $('#CurrentLineNumberId' + CertTrxLaneRecoId).text(CurrentLineNumber);
    //};




})


