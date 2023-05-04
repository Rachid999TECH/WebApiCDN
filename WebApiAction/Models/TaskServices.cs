using System;
using System.Linq;
using System.Data;
using System.Text;
using RabbitMQ.Client;
using System.Threading;
using System.Net.Http;

//using System.IO;
//using System.Windows.Forms;
//using System.Threading;
//using System.Collections.Generic;
//using System.Web;
//using System.Net;
//using System.IO.Compression;
//using System.Net.Mail;
//using System.Diagnostics;
//using System.Web.Mvc;
//using System.Net.Http;
//using System.Net.Http.Headers;
//using Newtonsoft.Json;
//using System.Threading.Tasks;
//using System.Globalization;
//using System.Management;


namespace WebApiAction.Models
{


    public class TaskServices
    {
        DB_A430F9_tollEntities db = new DB_A430F9_tollEntities();

        //DateTimeServices DateTimeServices = new DateTimeServices();
        CommonServices CommonServices = new CommonServices();
        //CertServices CertServices = new CertServices();

        //ExcelServices ExcelServices = new ExcelServices();
        //FtpServices FtpServices = new FtpServices();
        //CertJsonServices CertJsonServices = new CertJsonServices();
        //EmailServices EmailServices = new EmailServices();

        public void TaskAppPollAllRestart()
        {
            TaskHttpGet("http://172.17.95.21:5289/api/common/restart/172.17.95.21/WebApiCoreTrxLane-7004/WebApiCoreTrxLane-7004");
        }

        public void TaskAppIfDownRestart()
        {
            TaskHttpGet("http://172.17.95.21:5289/api/common/restart/172.17.95.21/WebApiCoreTrxLane-7004/WebApiCoreTrxLane-7004");

            //CommonServices.ClassLogTextUpdate("info", "task", "");
            //string requestUri = "http://172.17.95.21:5003/gateway/elastic/adm-toll-trxlane";
            //using (var client = new HttpClient())
            //{
            //    HttpResponseMessage Res = client.GetAsync(requestUri).Result;
            //    if (Res.IsSuccessStatusCode)
            //    {
            //        string response = CommonServices.ClassQuotesRemove(Res.Content.ReadAsStringAsync().Result);
            //        //CommonServices.ClassLogTextUpdate("info", response, "");
            //        if(response == "0")
            //        {
            //            TaskHttpGet("http://172.17.95.21:5289/api/common/restart/172.17.95.21/WebApiCoreTrxLane-7004/WebApiCoreTrxLane-7004");
            //        }                    
            //    }
            //}
        }

        public void TaskHttpGet(string requestUri)
        {
            using (var client = new HttpClient())
            {
                HttpResponseMessage Res = client.GetAsync(requestUri).Result;

            }
        }

        //public void TaskHttpGet(string ServerIpAddress, string LSIpAddress, int NotificationPortNumber)
        //{
        //    string requestUri = "http://" + ServerIpAddress + ":" + 7004 + "/api/trxlane/" + LSIpAddress + "/" + NotificationPortNumber;

        //    HttpResponseMessage Res = await client.GetAsync(requestUri);

        //    if (Res.IsSuccessStatusCode)
        //    {
        //        response = CommonServices.ClassQuotesRemove(Res.Content.ReadAsStringAsync().Result);
        //        ModelList = JsonConvert.DeserializeObject<List<ClassTicketResponseModel>>(response);
        //    }
        //}
        public void CertFileAdd(string ServerPort,
                                string TaskId, string Source, string FileTypeId,
                                int AddDaysStart, int AddDaysEnd,
                                string LSId, bool IsCron,
                                int Hour, int Minute, int Latency)
        {
            try
            {
                DateTime DhmNow = DateTime.Now;

                //Test Start
                DateTime DhmValueStart = new DateTime(DhmNow.Year, DhmNow.Month, DhmNow.Day, 0, 0, 0).AddDays(AddDaysStart);
                DateTime DhmValueEnd = new DateTime(DhmNow.Year, DhmNow.Month, DhmNow.Day, 23, 59, 59).AddDays(AddDaysEnd);
                                
                int ThreadTotal = CertFiletThreadTotal(DhmValueStart, DhmValueEnd, TaskId, Source, FileTypeId,
                                     "0", LSId, "0", "0", "0", "0", "0");

                int ThreadDone = 0;

                if (TaskId == "00" && Source == "08")
                {
                    Latency = 0;
                }

                if (Hour + Latency >= 24)
                {
                    Latency = 0;
                }

                string UserId = "11662250-3cda-47b4-88a7-0a17c16df5f1";
                dt_CertFilePlan CertFilePlan = new dt_CertFilePlan
                {
                    DhmCreation = DhmNow,
                    DhmPlan = new DateTime(1900, 1, 1, 0, 0, 0),
                    DhmModification = DhmNow,

                    IsRunning = false,
                    IsEveryDay = false,
                    IsEveryHour = false,

                    Source = Source,
                    FileTypeId = FileTypeId,

                    TaskId = TaskId,
                    SiteId = "0",
                    LSId = LSId,

                    BagContainerId = "0",
                    StationNumber = "0",
                    PdvId = "0",
                    LaneName = "0",
                    DhmValueStart = DhmValueStart,
                    DhmValueEnd = DhmValueEnd,

                    UserId = "11662250-3cda-47b4-88a7-0a17c16df5f1",

                    CertFileId = "",
                    IsPlanned = false,
                    IsTrxLane = false,
                    BillingId = "0",
                    CategoryId = "0",

                    IsFinnished = false,
                    IsCron = false,

                    AddDaysStart = AddDaysStart,
                    AddDaysEnd = AddDaysEnd,

                    ThreadTotal = ThreadTotal,
                    ThreadDone = ThreadDone,
                    ServerPort = ServerPort,
                    LinesNumber = 1,
                    CurrentLineNumber = 0
                };



                //Test
                

                int HourNow = DhmNow.Hour;
                int MinuteNow = DhmNow.Minute;
                dt_CertFilePlan ModePlanlOld = db.dt_CertFilePlan.Where(x => x.TaskId == TaskId &&
                                                                     x.Source == Source &&
                                                                     x.FileTypeId == FileTypeId &&
                                                                     x.SiteId == "0" &&
                                                                     x.BagContainerId == "0" &&
                                                                     x.LSId == LSId &&
                                                                     x.StationNumber == "0" &&
                                                                     x.BillingId == "0" &&
                                                                     x.CategoryId == "0" &&
                                                                     x.DhmValueStart == DhmValueStart &&
                                                                     x.DhmValueEnd == DhmValueEnd &&
                                                                     x.UserId == UserId &&
                                                                     x.DhmCreation.Hour == HourNow &&
                                                                     x.DhmCreation.Minute == MinuteNow).FirstOrDefault();

                if (ModePlanlOld == null)
                {
                    db.dt_CertFilePlan.Add(CertFilePlan);
                    db.SaveChanges();

                    //Thread.Sleep(3000);

                    //int CertFilePlanId = (from ModelOld in db.dt_CertFilePlan
                    //                      orderby ModelOld.CertFilePlanId descending
                    //                      select ModelOld.CertFilePlanId).FirstOrDefault();

                    //int ThreadTotal = CertFiletThreadTotal(CertFilePlanId);
                    //int ThreadDone = CertFileThreadDoneGet(CertFilePlanId);
                    //CertFileThreadTotalUpdate(CertFilePlanId, ThreadTotal, ThreadDone);

                    TaskPublish(ServerPort, CertFilePlan.CertFilePlanId);
                }
            }
            catch (Exception e)
            {
                string LogSubject = "Error_CertFileAdd";
                string Issue = e.ToString() + Environment.NewLine;
                CommonServices.LogUpdate(LogSubject, Issue);
            };
        }

        public void TaskPublish(string ServerPort, int CertFilePlanId)
        {
            RabbitMQ.Client.IConnection connection = CommonServices.RabbitMqConnectionFactoryGet();

            IModel channel = connection.CreateModel();

            string SendQueueName = "WebApiTask_" + ServerPort;
            channel.QueueDeclare(queue: SendQueueName,
                                 durable: true,
                                 exclusive: false,
                                 autoDelete: false,
                                 arguments: null);

            IBasicProperties props = channel.CreateBasicProperties();
            props.Persistent = true;

            try
            {
                var messageBytes = Encoding.UTF8.GetBytes(CertFilePlanId.ToString());
                channel.BasicPublish(
                exchange: "",
                routingKey: SendQueueName,
                basicProperties: props,
                body: messageBytes);
            }
            catch (Exception e)
            {
                string LogSubject = "Error_TaskPublish";
                string Issue = e.ToString() + Environment.NewLine;
                CommonServices.LogUpdate(LogSubject, Issue);
            };
        }

        //public int CertFiletThreadTotal(int CertFilePlanId)
        public int CertFiletThreadTotal(DateTime DhmValueStartPlan, DateTime DhmValueEndPlan, string TaskPlan, string SourcePlan, string FileTypeIdPlan,
                                        string RegionIdPlan, string LSIdPlan, string AxleIdPlan, string StationNumberPlan, string LaneNamePlan, string BillingIdPlan,
                                        string CategoryIdPlan)
        {
            int ThreadTotal = 0;

            try
            {
                //dt_CertFilePlan ModelOld = db.dt_CertFilePlan.Where(x => x.CertFilePlanId == CertFilePlanId).FirstOrDefault();

                //if (ModelOld != null)
                //{
                //DateTime DhmValueStartPlan = ModelOld.DhmValueStart;
                //DateTime DhmValueEndPlan = ModelOld.DhmValueEnd;

                //string TaskPlan = ModelOld.TaskId;
                //string SourcePlan = ModelOld.Source;
                //string FileTypeIdPlan = ModelOld.FileTypeId;
                //string RegionIdPlan = ModelOld.SiteId;
                //string LSIdPlan = ModelOld.LSId;
                //string AxleIdPlan = ModelOld.BagContainerId;
                //string StationNumberPlan = ModelOld.StationNumber;
                //string LaneNamePlan = ModelOld.LaneName;
                //string BillingIdPlan = ModelOld.BillingId;
                //string CategoryIdPlan = ModelOld.CategoryId;
                //bool IsPlannedPlan = ModelOld.IsPlanned;
                //bool IsCronPlan = ModelOld.IsCron;

                var StationsList = (from Stations in db.dt_Stations
                                    where Stations.LSId == (LSIdPlan != "0" ? LSIdPlan : Stations.LSId.ToString()) &&
                                            Stations.StationNumber == (StationNumberPlan != "0" ? StationNumberPlan : Stations.StationNumber.ToString()) &&
                                            Stations.IsActive
                                    select new
                                    {
                                        Stations.SiteId,
                                        Stations.StationNumber
                                    }).OrderBy(x => x.SiteId)
                                        .ThenBy(x => x.StationNumber)
                                        .ToList();

                var StationsANVList = (from Stations in db.dt_Stations
                                        where Stations.LSId == (LSIdPlan != "0" ? LSIdPlan : Stations.LSId.ToString()) &&
                                                Stations.StationNumber == (StationNumberPlan != "0" ? StationNumberPlan : Stations.StationNumber.ToString()) &&
                                                Stations.IsActive &&
                                                !Stations.IsVirtual
                                        select new
                                        {
                                            Stations.SiteId,
                                            Stations.StationNumber
                                        }).OrderBy(x => x.SiteId)
                                        .ThenBy(x => x.StationNumber)
                                        .ToList();

                var StationsLSANVList = (from Stations in db.dt_Stations
                                            join LS in db.dt_LS on Stations.LSId equals LS.LSId
                                            where Stations.LSId == (LSIdPlan != "0" ? LSIdPlan : Stations.LSId.ToString()) &&
                                                Stations.StationNumber == (StationNumberPlan != "0" ? StationNumberPlan : Stations.StationNumber.ToString()) &&
                                                Stations.IsActive &&
                                                !Stations.IsVirtual &&
                                                LS.IsActive &&
                                                !LS.IsVirtual
                                            select new
                                            {
                                                Stations.SiteId,
                                                Stations.StationNumber
                                            }).OrderBy(x => x.SiteId)
                                        .ThenBy(x => x.StationNumber)
                                        .ToList();

                var StationsLoyaltyList = (from Stations in db.dt_Stations
                                            join LS in db.dt_LS on Stations.LSId equals LS.LSId
                                            where Stations.LSId == (LSIdPlan != "0" ? LSIdPlan : Stations.LSId.ToString()) &&
                                                Stations.StationNumber == (StationNumberPlan != "0" ? StationNumberPlan : Stations.StationNumber.ToString()) &&
                                                Stations.IsActive == true &&
                                                Stations.IsVirtual == false &&
                                                Stations.IsLoyalty == true
                                            select new
                                            {
                                                Stations.SiteId,
                                                Stations.StationNumber
                                            }).OrderBy(x => x.SiteId)
                                    .ThenBy(x => x.StationNumber)
                                    .ToList();

                var StationsFList = (from Stations in db.dt_Stations
                                        join LS in db.dt_LS on Stations.LSId equals LS.LSId
                                        where Stations.LSId == (LSIdPlan != "0" ? LSIdPlan : Stations.LSId.ToString()) &&
                                            Stations.StationNumber == (StationNumberPlan != "0" ? StationNumberPlan : Stations.StationNumber.ToString()) &&
                                                Stations.IsActive &&
                                                !Stations.IsVirtual &&
                                                Stations.System == "F"
                                        select new
                                        {
                                            Stations.SiteId,
                                            Stations.StationNumber
                                        }).OrderBy(x => x.SiteId)
                                        .ThenBy(x => x.StationNumber)
                                        .ToList();

                var StationsPdvList = (from Stations in db.dt_Stations
                                        join LS in db.dt_LS on Stations.LSId equals LS.LSId
                                        where Stations.LSId == (LSIdPlan != "0" ? LSIdPlan : Stations.LSId.ToString()) &&
                                                Stations.StationNumber == (StationNumberPlan != "0" ? StationNumberPlan : Stations.StationNumber.ToString()) &&
                                                Stations.IsPdv == true &&
                                                Stations.IsActive == true
                                        select new
                                        {
                                            Stations.SiteId,
                                            Stations.StationNumber,
                                            Stations.Sens,
                                            Stations.IsPdv,
                                            Stations.SiteIdCe,
                                            Stations.BagContainerIdCe,
                                            Stations.StationCeNumber,
                                            Stations.StationIdCe
                                        }).OrderBy(x => x.SiteId)
                                                    .ThenBy(x => x.StationNumber)
                                                    .ThenBy(x => x.Sens)
                                                    .ToList();

                var StationsPdvVirtualList = (from Stations in db.dt_Stations
                                                join LS in db.dt_LS on Stations.LSId equals LS.LSId
                                                where Stations.LSId == (LSIdPlan != "0" ? LSIdPlan : Stations.LSId.ToString()) &&
                                                    Stations.StationNumber == (StationNumberPlan != "0" ? StationNumberPlan : Stations.StationNumber.ToString()) &&
                                                    Stations.IsPdv == true &&
                                                    Stations.IsActive == true &&
                                                    (Stations.StationNumber == "FT" || Stations.StationNumber == "LT")
                                                select new
                                                {
                                                    Stations.SiteId,
                                                    Stations.StationNumber,
                                                    Stations.Sens,
                                                    Stations.IsPdv,
                                                    Stations.SiteIdCe,
                                                    Stations.BagContainerIdCe,
                                                    Stations.StationCeNumber,
                                                    Stations.StationIdCe
                                                }).OrderBy(x => x.SiteId)
                                                .ThenBy(x => x.StationNumber)
                                                .ThenBy(x => x.Sens)
                                                .ToList();

                var LanesList = (from Lanes in db.dt_ParamLanes
                                    join Stations in db.dt_Stations on new { Lanes.SiteId, Lanes.StationNumber } equals new { Stations.SiteId, Stations.StationNumber }
                                    join LS in db.dt_LS on Stations.LSId equals LS.LSId
                                    where Stations.LSId == (LSIdPlan != "0" ? LSIdPlan : Stations.LSId.ToString()) &&
                                        Lanes.StationNumber == (StationNumberPlan != "0" ? StationNumberPlan : Lanes.StationNumber.ToString()) &&
                                        Lanes.LaneName == (LaneNamePlan != "0" ? LaneNamePlan : Lanes.LaneName.ToString()) &&
                                        Lanes.LaneTypeId == "1" &&
                                        Stations.IsVirtual == false &&
                                        Stations.IsActive == true
                                    select new
                                    {
                                        Lanes.SiteId,
                                        Lanes.StationNumber,
                                        Lanes.LaneName,
                                        IpAddressLane = Lanes.IpAddress,
                                    }).OrderBy(x => x.SiteId)
                                .ThenBy(x => x.StationNumber)
                                .ThenBy(x => x.LaneName)
                                .ToList();

                var LanesLoyList = (from Lanes in db.dt_ParamLanes
                                    join Stations in db.dt_Stations on new { Lanes.SiteId, Lanes.StationNumber } equals new { Stations.SiteId, Stations.StationNumber }
                                    join LS in db.dt_LS on Stations.LSId equals LS.LSId
                                    where Stations.LSId == (LSIdPlan != "0" ? LSIdPlan : Stations.LSId.ToString()) &&
                                            Lanes.StationNumber == (StationNumberPlan != "0" ? StationNumberPlan : Lanes.StationNumber.ToString()) &&
                                            Lanes.LaneName == (LaneNamePlan != "0" ? LaneNamePlan : Lanes.LaneName.ToString()) &&
                                            Stations.IsVirtual == false &&
                                            Stations.IsActive == true &&
                                            LS.IsActive == true &&
                                            Lanes.LaneTypeId == "1" &&
                                            Stations.IsLoyalty == true
                                    select new
                                    {
                                        Lanes.SiteId,
                                        Lanes.StationNumber,
                                        Lanes.LaneName,
                                        IpAddressLane = Lanes.IpAddress,
                                        LS.LSId,
                                        LS.IpAddressP,
                                        LS.IpAddressR,
                                        LS.IsPrincipal,
                                        LS.ZipLenght
                                    }).OrderBy(x => x.SiteId)
                                .ThenBy(x => x.StationNumber)
                                .ThenBy(x => x.LaneName)
                                .ToList();

                var LanesRealTimeList = (from Lanes in db.dt_ParamLanes
                                            join Stations in db.dt_Stations on new { Lanes.SiteId, Lanes.StationNumber } equals new { Stations.SiteId, Stations.StationNumber }
                                            join LS in db.dt_LS on Stations.LSId equals LS.LSId
                                            where Stations.LSId == (LSIdPlan != "0" ? LSIdPlan : Stations.LSId.ToString()) &&
                                                Lanes.StationNumber == (StationNumberPlan != "0" ? StationNumberPlan : Lanes.StationNumber.ToString()) &&
                                                Lanes.LaneName == (LaneNamePlan != "0" ? LaneNamePlan : Lanes.LaneName.ToString()) &&
                                                Stations.IsVirtual == false &&
                                                Stations.IsActive == true &&
                                                LS.IsActive == true &&
                                                Lanes.LaneTypeId == "1" &&
                                                Stations.IsRealTime == true
                                            select new
                                            {
                                                Lanes.SiteId,
                                                Lanes.StationNumber,
                                                Lanes.LaneName,
                                                IpAddressLane = Lanes.IpAddress,
                                                LS.LSId,
                                                LS.IpAddressP,
                                                LS.IpAddressR,
                                                LS.IsPrincipal,
                                                LS.ZipLenght
                                            }).OrderBy(x => x.SiteId)
                                .ThenBy(x => x.StationNumber)
                                .ThenBy(x => x.LaneName)
                                .ToList();

                var LanesImageList = (from Lanes in db.dt_ParamLanes
                                        join Stations in db.dt_Stations on new { Lanes.SiteId, Lanes.StationNumber } equals new { Stations.SiteId, Stations.StationNumber }
                                        where Stations.RegionId == (RegionIdPlan != "0" ? RegionIdPlan : Stations.RegionId.ToString()) &&
                                            Stations.LSId == (LSIdPlan != "0" ? LSIdPlan : Stations.LSId.ToString()) &&
                                            Stations.AxleId == (AxleIdPlan != "0" ? AxleIdPlan : Stations.AxleId.ToString()) &&
                                            Stations.StationNumber == (StationNumberPlan != "0" ? StationNumberPlan : Stations.StationNumber.ToString()) &&
                                            Lanes.LaneName == (LaneNamePlan != "0" ? LaneNamePlan : Lanes.LaneName.ToString()) &&
                                            Stations.IsActive &&
                                            !Stations.IsVirtual &&
                                            Stations.IsImage &&
                                            Lanes.LaneTypeId == "1"
                                        select new
                                        {
                                            Stations.NetworkId,
                                            Stations.RegionId,
                                            Stations.AxleId,
                                            Stations.LSId,
                                            Lanes.LaneTypeId,
                                            Lanes.SiteId,
                                            Lanes.StationNumber,
                                            Lanes.IpAddress,
                                            Lanes.LaneName,
                                            Lanes.IsCalculateOnContext
                                        }).OrderBy(x => x.RegionId)
                                        .ThenBy(x => x.AxleId)
                                        .ThenByDescending(x => x.LaneTypeId)
                                        .ThenBy(x => x.LSId)
                                        .ThenBy(x => x.StationNumber)
                                        .ThenBy(x => x.LaneName)
                                        .ToList();

                var LanesAllImageList = (from Lanes in db.dt_ParamLanes
                                            join Stations in db.dt_Stations on new { Lanes.SiteId, Lanes.StationNumber } equals new { Stations.SiteId, Stations.StationNumber }
                                            join LS in db.dt_LS on Stations.LSId equals LS.LSId
                                            where Stations.LSId == (LSIdPlan != "0" ? LSIdPlan : Stations.LSId.ToString()) &&

                                            Stations.RegionId == (RegionIdPlan != "0" ? RegionIdPlan : Stations.RegionId.ToString()) &&
                                            Stations.AxleId == (AxleIdPlan != "0" ? AxleIdPlan : Stations.AxleId.ToString()) &&

                                                Lanes.StationNumber == (StationNumberPlan != "0" ? StationNumberPlan : Lanes.StationNumber.ToString()) &&
                                                Lanes.LaneName == (LaneNamePlan != "0" ? LaneNamePlan : Lanes.LaneName.ToString()) &&
                                                Stations.IsVirtual == false &&
                                                Stations.IsActive == true &&
                                                LS.IsActive == true &&
                                                Stations.IsImage == true
                                            select new
                                            {
                                                Lanes.SiteId,
                                                Lanes.StationNumber,
                                                Lanes.LaneName,
                                                IpAddressLane = Lanes.IpAddress,
                                                LS.LSId,
                                                LS.IpAddressP,
                                                LS.IpAddressR,
                                                LS.IsPrincipal,
                                                LS.ZipLenght
                                            }).OrderBy(x => x.SiteId)
                                .ThenBy(x => x.StationNumber)
                                .ThenBy(x => x.LaneName)
                                .ToList();

                var LanesCamList = (from Lanes in db.dt_ParamLanes
                                    join Stations in db.dt_Stations on new { Lanes.SiteId, Lanes.StationNumber } equals new { Stations.SiteId, Stations.StationNumber }
                                    join LS in db.dt_LS on Stations.LSId equals LS.LSId
                                    where Stations.LSId == (LSIdPlan != "0" ? LSIdPlan : Stations.LSId.ToString()) &&
                                        Lanes.StationNumber == (StationNumberPlan != "0" ? StationNumberPlan : Lanes.StationNumber.ToString()) &&
                                        Lanes.LaneName == (LaneNamePlan != "0" ? LaneNamePlan : Lanes.LaneName.ToString()) &&
                                        Lanes.LaneTypeId == "1" &&
                                        Stations.IsVirtual == false &&
                                        Stations.IsActive == true &&
                                        LS.IsActive == true &&
                                        (Lanes.IsCamContext == true || Lanes.IsCamIapi == true)
                                    select new
                                    {
                                        Stations.NetworkId,
                                        Lanes.SiteId,
                                        Lanes.StationNumber,
                                        Lanes.LaneName,
                                        Lanes.IpAddress,
                                        Lanes.Rayon,
                                        Lanes.IsCamContext,
                                        Lanes.IsCamIapi,
                                        Lanes.IsHms,
                                        Lanes.IsWriteTime,
                                        Lanes.IsTrxNumber,
                                        Lanes.IsLicensePlate,
                                        Lanes.LaneTypeId,
                                        LS.LSId,
                                        LS.IpAddressP,
                                        LS.IpAddressR,
                                        LS.IsPrincipal,
                                        LS.ZipLenght
                                    }).OrderBy(x => x.SiteId)
                                .ThenBy(x => x.StationNumber)
                                .ThenBy(x => x.LaneName)
                                .ToList();

                var LanesAllList = (from Lanes in db.dt_ParamLanes
                                    join Stations in db.dt_Stations on new { Lanes.SiteId, Lanes.StationNumber } equals new { Stations.SiteId, Stations.StationNumber }
                                    join LS in db.dt_LS on Stations.LSId equals LS.LSId
                                    where Stations.LSId == (LSIdPlan != "0" ? LSIdPlan : Stations.LSId.ToString()) &&
                                        Lanes.StationNumber == (StationNumberPlan != "0" ? StationNumberPlan : Lanes.StationNumber.ToString()) &&
                                        Lanes.LaneName == (LaneNamePlan != "0" ? LaneNamePlan : Lanes.LaneName.ToString()) &&
                                        Stations.IsVirtual == false &&
                                        Stations.IsActive == true &&
                                        LS.IsActive == true
                                    select new
                                    {
                                        Stations.NetworkId,
                                        Lanes.SiteId,
                                        Lanes.StationNumber,
                                        Lanes.LaneName,
                                        Lanes.IpAddress,
                                        Lanes.Rayon,
                                        Lanes.IsCamContext,
                                        Lanes.IsCamIapi,
                                        Lanes.IsHms,
                                        Lanes.IsWriteTime,
                                        Lanes.IsTrxNumber,
                                        Lanes.IsLicensePlate,
                                        Lanes.LaneTypeId,
                                        LS.LSId,
                                        LS.IpAddressP,
                                        LS.IpAddressR,
                                        LS.IsPrincipal,
                                        LS.ZipLenght
                                    }).OrderBy(x => x.SiteId)
                                .ThenBy(x => x.StationNumber)
                                .ThenBy(x => x.LaneName)
                                .ToList();

                var LanesFList = (from Lanes in db.dt_ParamLanes
                                    join Stations in db.dt_Stations on new { Lanes.SiteId, Lanes.StationNumber } equals new { Stations.SiteId, Stations.StationNumber }
                                    join LS in db.dt_LS on Stations.LSId equals LS.LSId
                                    where Stations.LSId == (LSIdPlan != "0" ? LSIdPlan : Stations.LSId.ToString()) &&
                                        Lanes.StationNumber == (StationNumberPlan != "0" ? StationNumberPlan : Lanes.StationNumber.ToString()) &&
                                        Lanes.LaneName == (LaneNamePlan != "0" ? LaneNamePlan : Lanes.LaneName.ToString()) &&
                                        Stations.IsVirtual == false &&
                                        Stations.IsActive == true &&
                                        Stations.System == "F"
                                    select new
                                    {
                                        Lanes.LaneTypeId,
                                        Lanes.SiteId,
                                        Lanes.StationNumber,
                                        Lanes.LaneName,
                                        Lanes.IpAddress,
                                        LS.LSId,
                                        LS.IpAddressP,
                                        LS.IpAddressR,
                                        LS.IsPrincipal,
                                        LS.ZipLenght
                                    }).OrderBy(x => x.SiteId)
                            .ThenBy(x => x.StationNumber)
                            .ThenBy(x => x.LaneName)
                            .ToList();

                var LanesImageFList = (from Lanes in db.dt_ParamLanes
                                        join Stations in db.dt_Stations on new { Lanes.SiteId, Lanes.StationNumber } equals new { Stations.SiteId, Stations.StationNumber }
                                        join LS in db.dt_LS on Stations.LSId equals LS.LSId
                                        where Stations.RegionId == (RegionIdPlan != "0" ? RegionIdPlan : Stations.RegionId.ToString()) &&
                                            Stations.LSId == (LSIdPlan != "0" ? LSIdPlan : Stations.LSId.ToString()) &&
                                            Stations.AxleId == (AxleIdPlan != "0" ? AxleIdPlan : Stations.AxleId.ToString()) &&
                                            Lanes.StationNumber == (StationNumberPlan != "0" ? StationNumberPlan : Lanes.StationNumber.ToString()) &&
                                            Lanes.LaneName == (LaneNamePlan != "0" ? LaneNamePlan : Lanes.LaneName.ToString()) &&
                                            !Stations.IsVirtual &&
                                            Stations.IsActive &&
                                            Stations.System == "F" &&
                                            Lanes.LaneTypeId == "1" &&
                                            Stations.IsImage
                                        select new
                                        {
                                            Lanes.LaneTypeId,
                                            Lanes.SiteId,
                                            Lanes.StationNumber,
                                            Lanes.LaneName,
                                            Lanes.IpAddress,
                                            LS.LSId,
                                            LS.IpAddressP,
                                            LS.IpAddressR,
                                            LS.IsPrincipal,
                                            LS.ZipLenght
                                        }).OrderBy(x => x.SiteId)
                            .ThenBy(x => x.StationNumber)
                            .ThenBy(x => x.LaneName)
                            .ToList();

                var LanesCamContextList = (from Lanes in db.dt_ParamLanes
                                            join Stations in db.dt_Stations on new { Lanes.SiteId, Lanes.StationNumber } equals new { Stations.SiteId, Stations.StationNumber }
                                            join LS in db.dt_LS on Stations.LSId equals LS.LSId
                                            where Stations.LSId == (LSIdPlan != "0" ? LSIdPlan : Stations.LSId.ToString()) &&
                                                Lanes.StationNumber == (StationNumberPlan != "0" ? StationNumberPlan : Lanes.StationNumber.ToString()) &&
                                                Lanes.LaneName == (LaneNamePlan != "0" ? LaneNamePlan : Lanes.LaneName.ToString()) &&
                                                Stations.IsVirtual == false &&
                                                Stations.IsActive == true &&
                                                LS.IsActive == true &&
                                                Lanes.IsCamContext == true
                                            select new
                                            {
                                                Stations.NetworkId,
                                                Lanes.SiteId,
                                                Lanes.StationNumber,
                                                Lanes.LaneName,
                                                Lanes.IpAddress,
                                                Lanes.Rayon,
                                                Lanes.IsCamContext,
                                                Lanes.IsCamIapi,
                                                Lanes.IsHms,
                                                Lanes.IsWriteTime,
                                                Lanes.IsTrxNumber,
                                                Lanes.IsLicensePlate,
                                                Lanes.LaneTypeId,
                                                LS.LSId,
                                                LS.IpAddressP,
                                                LS.IpAddressR,
                                                LS.IsPrincipal,
                                                LS.ZipLenght
                                            }).OrderBy(x => x.SiteId)
                                .ThenBy(x => x.StationNumber)
                                .ThenBy(x => x.LaneName)
                                .ToList();

                var BornesList = (from Lanes in db.dt_ParamLanes
                                    join Stations in db.dt_Stations on new { Lanes.SiteId, Lanes.StationNumber } equals new { Stations.SiteId, Stations.StationNumber }
                                    join LS in db.dt_LS on Stations.LSId equals LS.LSId
                                    where Stations.LSId == (LSIdPlan != "0" ? LSIdPlan : Stations.LSId.ToString()) &&
                                        Lanes.StationNumber == (StationNumberPlan != "0" ? StationNumberPlan : Lanes.StationNumber.ToString()) &&
                                        Lanes.LaneName == (LaneNamePlan != "0" ? LaneNamePlan : Lanes.LaneName.ToString()) &&
                                        Lanes.LaneTypeId == "6" &&
                                        Stations.IsVirtual == false &&
                                        Stations.IsActive == true
                                    select new
                                    {
                                        Lanes.SiteId,
                                        Lanes.StationNumber,
                                        Lanes.LaneName,
                                        IpAddressLane = Lanes.IpAddress,
                                        LS.LSId,
                                        LS.IpAddressP,
                                        LS.IpAddressR,
                                        LS.IsPrincipal,
                                        LS.ZipLenght
                                    }).OrderBy(x => x.SiteId)
                                .ThenBy(x => x.StationNumber)
                                .ThenBy(x => x.LaneName)
                                .ToList();

                var BornesImageList = (from Lanes in db.dt_ParamLanes
                                        join Stations in db.dt_Stations on new { Lanes.SiteId, Lanes.StationNumber } equals new { Stations.SiteId, Stations.StationNumber }
                                        join LS in db.dt_LS on Stations.LSId equals LS.LSId
                                        where Stations.LSId == (LSIdPlan != "0" ? LSIdPlan : Stations.LSId.ToString()) &&
                                            Lanes.StationNumber == (StationNumberPlan != "0" ? StationNumberPlan : Lanes.StationNumber.ToString()) &&
                                            Lanes.LaneName == (LaneNamePlan != "0" ? LaneNamePlan : Lanes.LaneName.ToString()) &&
                                            Lanes.LaneTypeId == "6" &&
                                            Stations.IsVirtual == false &&
                                            Stations.IsActive == true &&
                                            Stations.IsImage == true
                                        select new
                                        {
                                            Lanes.SiteId,
                                            Lanes.StationNumber,
                                            Lanes.LaneName,
                                            IpAddressLane = Lanes.IpAddress,
                                            LS.LSId,
                                            LS.IpAddressP,
                                            LS.IpAddressR,
                                            LS.IsPrincipal,
                                            LS.ZipLenght
                                        }).OrderBy(x => x.SiteId)
                                .ThenBy(x => x.StationNumber)
                                .ThenBy(x => x.LaneName)
                                .ToList();

                var BornesCamList = (from Lanes in db.dt_ParamLanes
                                        join Stations in db.dt_Stations on new { Lanes.SiteId, Lanes.StationNumber } equals new { Stations.SiteId, Stations.StationNumber }
                                        join LS in db.dt_LS on Stations.LSId equals LS.LSId
                                        where Stations.LSId == (LSIdPlan != "0" ? LSIdPlan : Stations.LSId.ToString()) &&
                                            Lanes.StationNumber == (StationNumberPlan != "0" ? StationNumberPlan : Lanes.StationNumber.ToString()) &&
                                            Lanes.LaneName == (LaneNamePlan != "0" ? LaneNamePlan : Lanes.LaneName.ToString()) &&
                                            Lanes.LaneTypeId == "6" &&
                                            Stations.IsVirtual == false &&
                                            Stations.IsActive == true &&
                                            LS.IsActive == true &&
                                            (Lanes.IsCamContext == true || Lanes.IsCamIapi == true)
                                        select new
                                        {
                                            Stations.NetworkId,
                                            Lanes.SiteId,
                                            Lanes.StationNumber,
                                            Lanes.LaneName,
                                            Lanes.IpAddress,
                                            Lanes.Rayon,
                                            Lanes.IsCamContext,
                                            Lanes.IsCamIapi,
                                            Lanes.IsHms,
                                            Lanes.IsWriteTime,
                                            Lanes.IsTrxNumber,
                                            Lanes.IsLicensePlate,
                                            Lanes.LaneTypeId,
                                            LS.LSId,
                                            LS.IpAddressP,
                                            LS.IpAddressR,
                                            LS.IsPrincipal,
                                            LS.ZipLenght
                                        }).OrderBy(x => x.SiteId)
                                .ThenBy(x => x.StationNumber)
                                .ThenBy(x => x.LaneName)
                                .ToList();

                var BillingIdList = (from Mp in db.dt_Mp
                                        where Mp.MpId == (BillingIdPlan != "0" ? BillingIdPlan : Mp.MpId.ToString())
                                        select new
                                        {
                                            Mp.MpId
                                        }).OrderBy(x => x.MpId)
                                        .ToList();

                var BillingIdActiveList = (from Mp in db.dt_Mp
                                            where Mp.MpId == (BillingIdPlan != "0" ? BillingIdPlan : Mp.MpId.ToString()) &&
                                                    Mp.IsActive == true
                                            select new
                                            {
                                                Mp.MpId
                                            }).OrderBy(x => x.MpId)
                                        .ToList();

                var CategoriesList = (from ParamCategories in db.dt_ParamCategories
                                        where ParamCategories.CategoryId == (CategoryIdPlan != "0" ? CategoryIdPlan : ParamCategories.CategoryId.ToString())
                                        select new
                                        {
                                            ParamCategories.CategoryId
                                        }).OrderBy(x => x.CategoryId)
                                        .ToList();

                var BagContainerList = (from Stations in db.dt_Stations
                                        where Stations.LSId == (LSIdPlan != "0" ? LSIdPlan : Stations.LSId.ToString()) &&
                                                Stations.StationNumber == (StationNumberPlan != "0" ? StationNumberPlan : Stations.StationNumber.ToString()) &&
                                                Stations.IsActive == true
                                        group Stations by new
                                        {
                                            Stations.SiteId,
                                            Stations.SiteIdCe,
                                            Stations.BagContainerId,
                                            Stations.BagContainerIdCe,
                                            Stations.StationCeNumber
                                        } into g
                                        select new
                                        {
                                            g.Key.SiteId,
                                            g.Key.SiteIdCe,
                                            g.Key.BagContainerId,
                                            g.Key.BagContainerIdCe,
                                            g.Key.StationCeNumber

                                        }).OrderBy(x => x.SiteId)
                                                .ThenBy(x => x.BagContainerId)
                                                .ToList();

                var FileTypeList = (from ParamFileType in db.dt_ParamFileType
                                    where ParamFileType.IsVirtual == false &&
                                            ParamFileType.Source == SourcePlan &&
                                            ParamFileType.FileTypeId == (FileTypeIdPlan != "0" ? FileTypeIdPlan : ParamFileType.FileTypeId.ToString())
                                    select new
                                    {
                                        ParamFileType.FileTypeId
                                    }).OrderBy(x => x.FileTypeId)
                                                        .ToList();

                var LSList = (from LS in db.dt_LS
                                where LS.LSId == (LSIdPlan != "0" ? LSIdPlan : LS.LSId.ToString()) &&
                                    LS.IsActive == true &&
                                    LS.IsVirtual == false
                                select new
                                {
                                    LS.SiteId,
                                    LS.LSId,
                                    LS.IpAddressP,
                                    LS.IpAddressR
                                }).OrderBy(x => x.SiteId)
                                        .ThenBy(x => x.LSId)
                                        .ToList();

                var SitesList = (from Stations in db.dt_Stations
                                    where Stations.IsVirtual == false &&
                                        Stations.RegionId == (RegionIdPlan != "0" ? RegionIdPlan : Stations.RegionId.ToString()) &&
                                        Stations.LSId == (LSIdPlan != "0" ? LSIdPlan : Stations.LSId.ToString()) &&
                                        Stations.AxleId == (AxleIdPlan != "0" ? AxleIdPlan : Stations.AxleId.ToString()) &&
                                        Stations.StationNumber == (StationNumberPlan != "0" ? StationNumberPlan : Stations.StationNumber.ToString()) &&
                                        Stations.IsActive == true
                                    group Stations by new
                                    {
                                        Stations.SiteIdCe,
                                        Stations.SiteId
                                    } into g
                                    select new
                                    {
                                        g.Key.SiteIdCe,
                                        g.Key.SiteId
                                    }).OrderBy(x => x.SiteIdCe)
                                                .ToList();

                var SitesCeList = (from Sites in db.dt_Sites
                                    select new
                                    {
                                        Sites.SiteIdCe,
                                        Sites.SiteId
                                    }).OrderBy(x => x.SiteIdCe)
                                                .ToList();

                var StationsOdList = (from Stations in db.dt_Stations
                                        where Stations.LSId == (LSIdPlan != "0" ? LSIdPlan : Stations.LSId.ToString()) &&
                                            Stations.StationNumber == (StationNumberPlan != "0" ? StationNumberPlan : Stations.StationNumber.ToString()) &&
                                            Stations.IsActive &&
                                            !Stations.IsVirtual &&
                                            Stations.System == "F" &&
                                            Stations.StationId != 23 //Berrechid Nord Echangeur E
                                        select new
                                        {
                                            Stations.SiteId,
                                            Stations.LSId,
                                            Stations.StationNumber,
                                            Stations.Sens,
                                            Stations.SiteIdCe,
                                            Stations.BagContainerIdCe,
                                            Stations.StationCeNumber
                                        }).OrderBy(x => x.SiteId)
                                                        .ThenBy(x => x.LSId)
                                                        .ThenBy(x => x.StationNumber)
                                                        .ThenBy(x => x.Sens)
                                                        .ToList();



                DateTime DhmValueIn = DhmValueStartPlan;
                string FileTypeIdIn;

                string LoopNameIn;


                while (DhmValueIn <= DhmValueEndPlan)
                {
                    if (TaskPlan == "01")//Generate
                    {
                        ThreadTotal = 1;
                    }
                    else
                    {
                        if (TaskPlan == "04")//Calcul
                        {
                            if (SourcePlan == "10")//Interface
                            {
                                if (FileTypeIdPlan == "0")
                                {
                                    ThreadTotal = ThreadTotal + 1180;
                                }
                                else
                                {
                                    LoopNameIn = CertFileLoopNameGet(FileTypeIdPlan);
                                    if (LoopNameIn == "DaysList")
                                    {
                                        ThreadTotal = ThreadTotal + 1;
                                    }
                                    if (LoopNameIn == "StationsList")
                                    {
                                        foreach (var Model in StationsList)
                                        {
                                            ThreadTotal = ThreadTotal + 1;
                                        }
                                    }
                                    if (LoopNameIn == "StationsFList")
                                    {
                                        foreach (var Model in StationsFList)
                                        {
                                            ThreadTotal = ThreadTotal + 1;
                                        }
                                    }
                                    if (LoopNameIn == "LanesAllList")
                                    {
                                        foreach (var Model in LanesAllList)
                                        {
                                            ThreadTotal = ThreadTotal + 1;
                                        }
                                    }
                                    if (LoopNameIn == "LanesList")
                                    {
                                        foreach (var Model in LanesList)
                                        {
                                            ThreadTotal = ThreadTotal + 1;
                                        }
                                    }
                                    if (LoopNameIn == "LanesCamList")
                                    {
                                        foreach (var Model in LanesCamList)
                                        {
                                            ThreadTotal = ThreadTotal + 1;
                                        }
                                    }
                                    if (LoopNameIn == "LanesCamContextList")
                                    {
                                        foreach (var Model in LanesCamContextList)
                                        {
                                            ThreadTotal = ThreadTotal + 1;
                                        }
                                    }
                                    if (LoopNameIn == "BornesList")
                                    {
                                        foreach (var Model in BornesList)
                                        {
                                            ThreadTotal = ThreadTotal + 1;
                                        }
                                    }
                                    if (LoopNameIn == "BornesCamList")
                                    {
                                        foreach (var Model in BornesList)
                                        {
                                            ThreadTotal = ThreadTotal + 1;
                                        }
                                    }
                                    if (LoopNameIn == "BagContainerList")
                                    {
                                        foreach (var Model in BagContainerList)
                                        {
                                            ThreadTotal = ThreadTotal + 1;
                                        }
                                        //ThreadTotal = ThreadTotal + 91;
                                    }
                                    if (LoopNameIn == "StationsPdvList")
                                    {
                                        foreach (var Model in StationsPdvList)
                                        {
                                            ThreadTotal = ThreadTotal + 1;
                                        }
                                    }
                                    if (LoopNameIn == "StationsClList")
                                    {
                                        foreach (var Model in StationsANVList)
                                        {
                                            ThreadTotal = ThreadTotal + 3;
                                        }
                                    }
                                    if (LoopNameIn == "StationsSensList")
                                    {
                                        foreach (var Model in StationsANVList)
                                        {
                                            ThreadTotal = ThreadTotal + 2;
                                        }
                                    }
                                    if (LoopNameIn == "LSList")
                                    {
                                        foreach (var Model in LSList)
                                        {
                                            ThreadTotal = ThreadTotal + 1;
                                        }
                                    }
                                }
                            }
                            else
                            {
                                foreach (var FileTypeModel in FileTypeList)
                                {
                                    FileTypeIdIn = FileTypeModel.FileTypeId;
                                    LoopNameIn = CertFileLoopNameGet(FileTypeIdIn);

                                    if (LoopNameIn == "StationsLoyaltyList")
                                    {
                                        ThreadTotal = ThreadTotal + 1;
                                    }
                                    if (LoopNameIn == "DaysList")
                                    {
                                        ThreadTotal = ThreadTotal + 1;
                                    }
                                    if (LoopNameIn == "StationsList")
                                    {
                                        foreach (var Model in StationsList)
                                        {
                                            ThreadTotal = ThreadTotal + 1;
                                        }
                                    }
                                    if (LoopNameIn == "StationsANVList")
                                    {
                                        foreach (var Model in StationsList)
                                        {
                                            ThreadTotal = ThreadTotal + 1;
                                        }
                                    }
                                    if (LoopNameIn == "StationsFList")
                                    {
                                        foreach (var Model in StationsFList)
                                        {
                                            ThreadTotal = ThreadTotal + 1;
                                        }
                                    }
                                    if (LoopNameIn == "LanesAllList")
                                    {
                                        foreach (var Model in LanesAllList)
                                        {
                                            ThreadTotal = ThreadTotal + 1;
                                        }
                                    }
                                    if (LoopNameIn == "LanesList")
                                    {
                                        foreach (var Model in LanesList)
                                        {
                                            ThreadTotal = ThreadTotal + 1;
                                        }
                                    }
                                    if (LoopNameIn == "LanesCamList")
                                    {
                                        foreach (var Model in LanesCamList)
                                        {
                                            ThreadTotal = ThreadTotal + 1;
                                        }
                                    }
                                    if (LoopNameIn == "LanesFList")
                                    {
                                        ThreadTotal = ThreadTotal + LanesFList.Count;
                                    }
                                    if (LoopNameIn == "LanesImageFList")
                                    {
                                        ThreadTotal = ThreadTotal + LanesImageFList.Count;
                                    }
                                    if (LoopNameIn == "LanesImageList")
                                    {
                                        foreach (var Model in LanesImageList)
                                        {
                                            ThreadTotal = ThreadTotal + 1;
                                        }
                                    }

                                    if (LoopNameIn == "LanesCamContextList")
                                    {
                                        foreach (var Model in LanesCamContextList)
                                        {
                                            ThreadTotal = ThreadTotal + 1;
                                        }
                                    }
                                    if (LoopNameIn == "LanesRealTimeList")
                                    {
                                        foreach (var Model in LanesRealTimeList)
                                        {
                                            ThreadTotal = ThreadTotal + 1;
                                        }
                                    }
                                    if (LoopNameIn == "BornesList")
                                    {
                                        foreach (var Model in BornesList)
                                        {
                                            ThreadTotal = ThreadTotal + 1;
                                        }
                                    }
                                    if (LoopNameIn == "BornesCamList")
                                    {
                                        foreach (var Model in BornesList)
                                        {
                                            ThreadTotal = ThreadTotal + 1;
                                        }
                                    }
                                    if (LoopNameIn == "BagContainerList")
                                    {
                                        foreach (var Model in BagContainerList)
                                        {
                                            ThreadTotal = ThreadTotal + 1;
                                        }
                                        //ThreadTotal = ThreadTotal + 91;
                                    }
                                    if (LoopNameIn == "StationsPdvList")
                                    {
                                        foreach (var Model in StationsPdvList)
                                        {
                                            ThreadTotal = ThreadTotal + 1;
                                        }
                                    }
                                    if (LoopNameIn == "StationsClList")
                                    {
                                        foreach (var Model in StationsLSANVList)
                                        {
                                            ThreadTotal = ThreadTotal + 3;
                                        }
                                    }
                                    if (LoopNameIn == "StationsSensList")
                                    {
                                        foreach (var Model in StationsANVList)
                                        {
                                            ThreadTotal = ThreadTotal + 2;
                                        }
                                    }
                                    if (LoopNameIn == "LSList")
                                    {
                                        foreach (var Model in LSList)
                                        {
                                            ThreadTotal = ThreadTotal + 1;
                                        }
                                    }
                                }
                            }
                        }
                        else
                        {
                            if (TaskPlan == "00")//Upload
                            {
                                if (SourcePlan == "07")//Ce
                                {


                                    if (FileTypeIdPlan == "0")
                                    {
                                        ThreadTotal = ThreadTotal + 398;
                                    }
                                    else
                                    {
                                        LoopNameIn = CertFileLoopNameGet(FileTypeIdPlan);

                                        if (LoopNameIn == "StationsPdvVirtualList")
                                        {
                                            ThreadTotal = ThreadTotal + 1;
                                        }
                                        if (LoopNameIn == "DaysList")
                                        {
                                            ThreadTotal = ThreadTotal + 1;
                                        }
                                        if (LoopNameIn == "StationsList")
                                        {
                                            foreach (var Model in StationsList)
                                            {
                                                ThreadTotal = ThreadTotal + 1;
                                            }
                                        }
                                        if (LoopNameIn == "ProductsFilteredList")
                                        {
                                            foreach (var Model in LanesList)
                                            {
                                                foreach (var Model1 in BillingIdList)
                                                {
                                                    ThreadTotal = ThreadTotal + 1;
                                                }
                                            }
                                        }
                                        if (LoopNameIn == "SitesList")
                                        {
                                            foreach (var Model in SitesList)
                                            {
                                                ThreadTotal = ThreadTotal + 1;
                                            }
                                        }
                                        if (LoopNameIn == "SitesCeList")
                                        {
                                            foreach (var Model in SitesCeList)
                                            {
                                                ThreadTotal = ThreadTotal + 1;
                                            }
                                        }
                                        if (LoopNameIn == "StationsFList")
                                        {
                                            foreach (var Model in StationsFList)
                                            {
                                                ThreadTotal = ThreadTotal + 1;
                                            }
                                        }
                                        if (LoopNameIn == "LanesAllList")
                                        {
                                            foreach (var Model in LanesAllList)
                                            {
                                                ThreadTotal = ThreadTotal + 1;
                                            }
                                        }
                                        if (LoopNameIn == "LanesList")
                                        {
                                            foreach (var Model in LanesList)
                                            {
                                                ThreadTotal = ThreadTotal + 1;
                                            }
                                        }
                                        if (LoopNameIn == "LanesBillingIdList")
                                        {
                                            foreach (var Model in LanesList)
                                            {
                                                ThreadTotal = ThreadTotal + 13;
                                            }
                                        }
                                        if (LoopNameIn == "LanesCamList")
                                        {
                                            foreach (var Model in LanesCamList)
                                            {
                                                ThreadTotal = ThreadTotal + 1;
                                            }
                                        }
                                        if (LoopNameIn == "LanesCamContextList")
                                        {
                                            foreach (var Model in LanesCamContextList)
                                            {
                                                ThreadTotal = ThreadTotal + 1;
                                            }
                                        }
                                        if (LoopNameIn == "BornesList")
                                        {
                                            foreach (var Model in BornesList)
                                            {
                                                ThreadTotal = ThreadTotal + 1;
                                            }
                                        }
                                        if (LoopNameIn == "BornesCamList")
                                        {
                                            foreach (var Model in BornesList)
                                            {
                                                ThreadTotal = ThreadTotal + 1;
                                            }
                                        }
                                        if (LoopNameIn == "BagContainerList")
                                        {
                                            foreach (var Model in BagContainerList)
                                            {
                                                ThreadTotal = ThreadTotal + 1;
                                            }
                                            //ThreadTotal = ThreadTotal + 91;
                                        }
                                        if (LoopNameIn == "StationsPdvList")
                                        {
                                            foreach (var Model in StationsPdvList)
                                            {
                                                ThreadTotal = ThreadTotal + 1;
                                            }
                                        }
                                        if (LoopNameIn == "StationsClList")
                                        {
                                            foreach (var Model in StationsList)
                                            {
                                                ThreadTotal = ThreadTotal + 3;
                                            }
                                        }
                                        if (LoopNameIn == "StationsSensList")
                                        {
                                            foreach (var Model in StationsANVList)
                                            {
                                                ThreadTotal = ThreadTotal + 2;
                                            }
                                        }
                                        if (LoopNameIn == "LSList")
                                        {
                                            foreach (var Model in LSList)
                                            {
                                                ThreadTotal = ThreadTotal + 1;
                                            }
                                        }
                                    }
                                }
                                else
                                {
                                    foreach (var FileTypeModel in FileTypeList)
                                    {
                                        FileTypeIdIn = FileTypeModel.FileTypeId;
                                        LoopNameIn = CertFileLoopNameGet(FileTypeIdIn);
                                        if (LoopNameIn == "DaysList")
                                        {
                                            ThreadTotal = ThreadTotal + 1;
                                        }

                                        if (LoopNameIn == "StationsOdList")
                                        {
                                            foreach (var Model in StationsOdList)
                                            {
                                                ThreadTotal = ThreadTotal + 1;
                                            }
                                        }
                                        if (LoopNameIn == "StationsList")
                                        {
                                            foreach (var Model in StationsList)
                                            {
                                                ThreadTotal = ThreadTotal + 1;
                                            }
                                        }
                                        if (LoopNameIn == "StationsANVList")
                                        {
                                            foreach (var Model in StationsANVList)
                                            {
                                                ThreadTotal = ThreadTotal + 1;
                                            }
                                        }

                                        if (LoopNameIn == "StationsSensList")
                                        {
                                            foreach (var Model in StationsANVList)
                                            {
                                                ThreadTotal = ThreadTotal + 2;
                                            }
                                        }
                                        if (LoopNameIn == "StationsFList")
                                        {
                                            foreach (var Model in StationsFList)
                                            {
                                                ThreadTotal = ThreadTotal + 1;
                                            }
                                        }

                                        if (LoopNameIn == "LanesAllList")
                                        {
                                            foreach (var Model in LanesAllList)
                                            {
                                                ThreadTotal = ThreadTotal + 1;
                                            }
                                        }
                                        if (LoopNameIn == "LanesList")
                                        {
                                            foreach (var Model in LanesList)
                                            {
                                                ThreadTotal = ThreadTotal + 1;
                                            }
                                        }
                                        if (LoopNameIn == "LanesImageList")
                                        {
                                            foreach (var Model in LanesImageList)
                                            {
                                                ThreadTotal = ThreadTotal + 1;
                                            }
                                        }
                                        if (LoopNameIn == "LanesAllImageList")
                                        {
                                            foreach (var Model in LanesAllImageList)
                                            {
                                                ThreadTotal = ThreadTotal + 1;
                                            }
                                        }

                                        if (LoopNameIn == "LanesCamList")
                                        {
                                            foreach (var Model in LanesCamList)
                                            {
                                                ThreadTotal = ThreadTotal + 1;
                                            }
                                        }
                                        if (LoopNameIn == "LanesCamContextList")
                                        {
                                            foreach (var Model in LanesCamContextList)
                                            {
                                                ThreadTotal = ThreadTotal + 1;
                                            }
                                        }
                                        if (LoopNameIn == "LanesLoyList")
                                        {
                                            foreach (var Model in LanesLoyList)
                                            {
                                                ThreadTotal = ThreadTotal + 1;
                                            }
                                        }
                                        if (LoopNameIn == "LanesRealTimeList")
                                        {
                                            foreach (var Model in LanesRealTimeList)
                                            {
                                                ThreadTotal = ThreadTotal + 1;
                                            }
                                        }
                                        if (LoopNameIn == "BornesList")
                                        {
                                            foreach (var Model in BornesList)
                                            {
                                                ThreadTotal = ThreadTotal + 1;
                                            }
                                        }
                                        if (LoopNameIn == "BornesImageList")
                                        {
                                            foreach (var Model in BornesImageList)
                                            {
                                                ThreadTotal = ThreadTotal + 1;
                                            }
                                        }
                                        if (LoopNameIn == "BornesCamList")
                                        {
                                            foreach (var Model in BornesList)
                                            {
                                                ThreadTotal = ThreadTotal + 1;
                                            }
                                        }
                                        if (LoopNameIn == "BagContainerList")
                                        {
                                            foreach (var Model in BagContainerList)
                                            {
                                                ThreadTotal = ThreadTotal + 1;
                                            }
                                            //ThreadTotal = ThreadTotal + 91;
                                        }
                                        if (LoopNameIn == "StationsPdvList")
                                        {
                                            foreach (var Model in StationsPdvList)
                                            {
                                                ThreadTotal = ThreadTotal + 1;
                                            }
                                        }
                                        if (LoopNameIn == "LSList")
                                        {
                                            foreach (var Model in LSList)
                                            {
                                                ThreadTotal = ThreadTotal + 1;
                                            }
                                        }
                                        if (LoopNameIn == "StationsClList")
                                        {
                                            foreach (var Model in StationsANVList)
                                            {
                                                ThreadTotal = ThreadTotal + 3;
                                            }
                                        }
                                    }
                                }
                            }
                            else
                            {
                                foreach (var FileTypeModel in FileTypeList)
                                {
                                    FileTypeIdIn = FileTypeModel.FileTypeId;
                                    LoopNameIn = CertFileLoopNameGet(FileTypeIdIn);
                                    if (LoopNameIn == "DaysList")
                                    {
                                        ThreadTotal = ThreadTotal + 1;
                                    }
                                    if (LoopNameIn == "StationsList")
                                    {
                                        foreach (var Model in StationsList)
                                        {
                                            ThreadTotal = ThreadTotal + 1;
                                        }
                                    }
                                    if (LoopNameIn == "StationsFList")
                                    {
                                        foreach (var Model in StationsFList)
                                        {
                                            ThreadTotal = ThreadTotal + 1;
                                        }
                                    }
                                    if (LoopNameIn == "LanesAllList")
                                    {
                                        foreach (var Model in LanesAllList)
                                        {
                                            ThreadTotal = ThreadTotal + 1;
                                        }
                                    }
                                    if (LoopNameIn == "LanesList")
                                    {
                                        foreach (var Model in LanesList)
                                        {
                                            ThreadTotal = ThreadTotal + 1;
                                        }
                                    }
                                    if (LoopNameIn == "LanesImageList")
                                    {
                                        foreach (var Model in LanesImageList)
                                        {
                                            ThreadTotal = ThreadTotal + 1;
                                        }
                                    }
                                    if (LoopNameIn == "LanesCamList")
                                    {
                                        foreach (var Model in LanesCamList)
                                        {
                                            ThreadTotal = ThreadTotal + 1;
                                        }
                                    }
                                    if (LoopNameIn == "LanesCamContextList")
                                    {
                                        foreach (var Model in LanesCamContextList)
                                        {
                                            ThreadTotal = ThreadTotal + 1;
                                        }
                                    }
                                    if (LoopNameIn == "BornesList")
                                    {
                                        foreach (var Model in BornesList)
                                        {
                                            ThreadTotal = ThreadTotal + 1;
                                        }
                                    }
                                    if (LoopNameIn == "BornesImageList")
                                    {
                                        foreach (var Model in BornesImageList)
                                        {
                                            ThreadTotal = ThreadTotal + 1;
                                        }
                                    }
                                    if (LoopNameIn == "BornesCamList")
                                    {
                                        foreach (var Model in BornesList)
                                        {
                                            ThreadTotal = ThreadTotal + 1;
                                        }
                                    }
                                    if (LoopNameIn == "BagContainerList")
                                    {
                                        foreach (var Model in BagContainerList)
                                        {
                                            ThreadTotal = ThreadTotal + 1;
                                        }
                                        //ThreadTotal = ThreadTotal + 91;
                                    }
                                    if (LoopNameIn == "StationsPdvList")
                                    {
                                        foreach (var Model in StationsPdvList)
                                        {
                                            ThreadTotal = ThreadTotal + 1;
                                        }
                                    }
                                    if (LoopNameIn == "StationsClList")
                                    {
                                        foreach (var Model in StationsList)
                                        {
                                            ThreadTotal = ThreadTotal + 3;
                                        }
                                    }
                                    if (LoopNameIn == "StationsSensList")
                                    {
                                        foreach (var Model in StationsANVList)
                                        {
                                            ThreadTotal = ThreadTotal + 2;
                                        }
                                    }
                                    if (LoopNameIn == "LSList")
                                    {
                                        foreach (var Model in LSList)
                                        {
                                            ThreadTotal = ThreadTotal + 1;
                                        }
                                    }
                                }
                            }
                        }
                    }
                    DhmValueIn = DhmValueIn.AddDays(1);
                }

                if (FileTypeIdPlan == "7A")
                {
                    var ModelList = (from QualifTrxLane in db.dt_QualifTrxLane
                                        where !(from ParamProducts in db.dt_ParamProducts
                                                where ParamProducts.SerialNumber == QualifTrxLane.SerialNumber
                                                select ParamProducts.SerialNumber).Contains(QualifTrxLane.SerialNumber)
                                        group QualifTrxLane by new
                                        {
                                            QualifTrxLane.SerialNumber
                                        } into g
                                        select new
                                        {
                                            g.Key.SerialNumber
                                        }).ToList();

                    ThreadTotal = ModelList.Count();
                }
                if (FileTypeIdPlan == "3A")
                {
                    LoopNameIn = CertFileLoopNameGet(FileTypeIdPlan);
                    if (LoopNameIn == "LanesRealTimeList")
                    {
                        foreach (var Model in LanesRealTimeList)
                        {
                            ThreadTotal = ThreadTotal + 1;
                        }
                    }
                }
                if (FileTypeIdPlan == "JA")
                {
                    var LanesDiscPlateList = (from CertTrxLaneInterface in db.dt_CertTrxLaneInterface
                                                join QualifTrxLane in db.dt_QualifTrxLane on CertTrxLaneInterface.CertTrxLaneInterfaceRowId equals QualifTrxLane.QualifTrxLaneRowId
                                                join ParamLanes in db.dt_ParamLanes on new { CertTrxLaneInterface.SiteId, CertTrxLaneInterface.StationNumber, CertTrxLaneInterface.LaneName }
                                                                                    equals new { ParamLanes.SiteId, ParamLanes.StationNumber, ParamLanes.LaneName }
                                                join Stations in db.dt_Stations on new { ParamLanes.SiteId, ParamLanes.StationNumber } equals new { Stations.SiteId, Stations.StationNumber }
                                                where Stations.LSId == (LSIdPlan != "0" ? LSIdPlan : Stations.LSId.ToString()) &&
                                                    Stations.StationNumber == (StationNumberPlan != "0" ? StationNumberPlan : Stations.StationNumber.ToString()) &&
                                                    ParamLanes.LaneName == (LaneNamePlan != "0" ? LaneNamePlan : ParamLanes.LaneName.ToString()) &&

                                                        DateTime.Compare(CertTrxLaneInterface.DhmValue, DhmValueEndPlan) <= 0 &&
                                                        DateTime.Compare(CertTrxLaneInterface.DhmValue, DhmValueStartPlan) >= 0 &&
                                                        QualifTrxLane.ObsTickId == "P" &&
                                                        Stations.IsActive == true &&
                                                        Stations.IsVirtual == false &&
                                                        Stations.IsImage == true
                                                group ParamLanes by new
                                                {
                                                    ParamLanes.SiteId,
                                                    ParamLanes.StationNumber,
                                                    ParamLanes.IpAddress,
                                                    ParamLanes.LaneName
                                                } into g
                                                select new
                                                {
                                                    g.Key.SiteId,
                                                    g.Key.StationNumber,
                                                    g.Key.IpAddress,
                                                    g.Key.LaneName
                                                }).ToList();

                    var BornesDiscPlateList = (from CertTrxLaneInterface in db.dt_CertTrxLaneInterface
                                                join QualifTrxLane in db.dt_QualifTrxLane on CertTrxLaneInterface.CertTrxLaneInterfaceRowId equals QualifTrxLane.QualifTrxLaneRowId
                                                join ParamLanesO in db.dt_ParamLanes on CertTrxLaneInterface.StationNumberO equals ParamLanesO.StationNumber
                                                join StationsO in db.dt_Stations on CertTrxLaneInterface.StationNumberO equals StationsO.StationNumber
                                                join Stations in db.dt_Stations on new { CertTrxLaneInterface.SiteId, CertTrxLaneInterface.StationNumber } equals new { Stations.SiteId, Stations.StationNumber }
                                                where CertTrxLaneInterface.StationNumber == (StationNumberPlan != "0" ? StationNumberPlan : CertTrxLaneInterface.StationNumber.ToString()) &&
                                                    CertTrxLaneInterface.LaneName == (LaneNamePlan != "0" ? LaneNamePlan : CertTrxLaneInterface.LaneName.ToString()) &&

                                                    QualifTrxLane.LaneNameO == ParamLanesO.LaneName &&
                                                    QualifTrxLane.NetworkIdO == StationsO.NetworkId &&

                                                        DateTime.Compare(CertTrxLaneInterface.DhmValue, DhmValueEndPlan) <= 0 &&
                                                        DateTime.Compare(CertTrxLaneInterface.DhmValue, DhmValueStartPlan) >= 0 &&
                                                        QualifTrxLane.ObsTickId == "P" &&
                                                        Stations.IsActive == true &&
                                                        Stations.IsVirtual == false &&
                                                        Stations.IsImage == true
                                                group ParamLanesO by new
                                                {
                                                    ParamLanesO.SiteId,
                                                    ParamLanesO.StationNumber,
                                                    ParamLanesO.IpAddress,
                                                    ParamLanesO.LaneName
                                                } into g
                                                select new
                                                {
                                                    g.Key.SiteId,
                                                    g.Key.StationNumber,
                                                    g.Key.IpAddress,
                                                    g.Key.LaneName
                                                }).OrderBy(x => x.SiteId)
                        .ThenBy(x => x.StationNumber)
                        .ThenBy(x => x.LaneName)
                        .ToList();

                    ThreadTotal = LanesDiscPlateList.Count() + BornesDiscPlateList.Count() * 2;
                }
                if (FileTypeIdPlan == "7J")
                {
                    var CertCtrTrxList = (from CertCtrTrx in db.dt_CertCtrTrx
                                            join Stations in db.dt_Stations on new { CertCtrTrx.SiteId, CertCtrTrx.StationNumber } equals new { Stations.SiteId, Stations.StationNumber }
                                            where DateTime.Compare(CertCtrTrx.DhmValue, DhmValueEndPlan) <= 0 &&
                                                DateTime.Compare(CertCtrTrx.DhmValue, DhmValueStartPlan) >= 0 &&
                                                CertCtrTrx.StationNumber == (StationNumberPlan != "0" ? StationNumberPlan : CertCtrTrx.StationNumber.ToString()) &&
                                                CertCtrTrx.LaneName == (LaneNamePlan != "0" ? LaneNamePlan : CertCtrTrx.LaneName.ToString()) &&
                                                CertCtrTrx.Gap != 0
                                            select new
                                            {
                                                CertCtrTrx.SiteId,
                                                CertCtrTrx.StationNumber,
                                                CertCtrTrx.LaneName,
                                                CertCtrTrx.BillingId,
                                                Stations.BagContainerIdCe,
                                                Stations.StationCeNumber,
                                                Stations.SiteIdCe,
                                                Stations.StationIdCe,
                                            }).OrderBy(x => x.SiteId)
                            .ThenBy(x => x.StationNumber)
                            .ThenBy(x => x.LaneName)
                            .ToList();

                    ThreadTotal = CertCtrTrxList.Count();
                }

                if (FileTypeIdPlan == "HD" || FileTypeIdPlan == "HE")
                {
                    ThreadTotal = 2;
                }
                if (FileTypeIdPlan == "7H")
                {
                    var ModelList = (from ParamProducts in db.dt_ParamProducts
                                        where ParamProducts.ObsTickIdDCount >= 5
                                        select new
                                        {
                                            ParamProducts.SerialNumber
                                        }).ToList();

                    ThreadTotal = ModelList.Count();
                }
                if (FileTypeIdPlan == "Z1")
                {
                    var NotifTpdList = (from AdminUserNotifications in db.dt_AdminUserNotifications
                                        join AspNetUsersModel in db.AspNetUsers on AdminUserNotifications.UserId equals AspNetUsersModel.Id
                                        where AdminUserNotifications.NotifId == "04" //TPD
                                        select new
                                        {
                                            AdminUserNotifications.UserId,
                                            AspNetUsersModel.Email
                                        }).ToList();

                    ThreadTotal = NotifTpdList.Count;
                }
                if (FileTypeIdPlan == "Z2")
                {
                    var NotifTpdList = (from AdminUserNotifications in db.dt_AdminUserNotifications
                                        join AspNetUsersModel in db.AspNetUsers on AdminUserNotifications.UserId equals AspNetUsersModel.Id
                                        where AdminUserNotifications.NotifId == "05" //Breach
                                        select new
                                        {
                                            AdminUserNotifications.UserId,
                                            AspNetUsersModel.Email
                                        }).ToList();

                    ThreadTotal = NotifTpdList.Count;
                }
                if (FileTypeIdPlan == "B4" && TaskPlan == "00")
                {
                    ThreadTotal = 1;
                }
                if (FileTypeIdPlan == "Z3" || FileTypeIdPlan == "Z3")
                {
                    ThreadTotal = 1;
                }
                if (FileTypeIdPlan == "B5" || FileTypeIdPlan == "B5")
                {
                    ThreadTotal = 1;
                }
                //}
                //else
                //{
                //    ThreadTotal = 1;
                //}
            }
            catch (Exception e)
            {
                string LogSubject = "Error_CertFiletThreadTotal";
                string Issue = e.ToString() + Environment.NewLine;
                CommonServices.LogUpdate(LogSubject, Issue);
            };

            return ThreadTotal;
        }


        public string CertFileLoopNameGet(string FileTypeId)
        {
            string LoopName = "StationsList";
            dt_ParamFileType ModelOld = db.dt_ParamFileType.Where(x => x.FileTypeId == FileTypeId).FirstOrDefault();

            if (ModelOld != null)
            {
                LoopName = ModelOld.LoopName;
            }
            return LoopName;
        }


        public void CertFileThreadTotalUpdate(int CertFilePlanId, int ThreadTotal, int ThreadDone)
        {
            try
            {
                dt_CertFilePlan ModelOld = db.dt_CertFilePlan.Where(x => x.CertFilePlanId == CertFilePlanId).FirstOrDefault();

                if (ModelOld != null)
                {
                    ModelOld.ThreadTotal = ThreadTotal;
                    ModelOld.ThreadDone = ThreadDone;
                    ModelOld.DhmModification = DateTime.Now;
                    db.Entry(ModelOld).State = System.Data.Entity.EntityState.Modified;
                    db.SaveChanges();
                }
            }
            catch (Exception e)
            {
                string LogSubject = "Error_CertFileThreadTotalUpdate";
                string Issue = e.ToString() + Environment.NewLine;
                CommonServices.LogUpdate(LogSubject, Issue);
            };
        }

        public int CertFileThreadDoneGet(int CertFilePlanId)
        {
            int ThreadDone = 0;
            try
            {
                var ModelOld = (from ParamThreads in db.dt_ParamThreads
                                where ParamThreads.CertFilePlanId == CertFilePlanId &&
                                      ParamThreads.IsFinnished == true
                                group ParamThreads by new
                                {
                                    ParamThreads.CertFilePlanId
                                } into g
                                select new
                                {
                                    ThreadDone = g.Count()
                                }).FirstOrDefault();

                if (ModelOld != null)
                {
                    ThreadDone = ModelOld.ThreadDone;
                }
            }
            catch (Exception e)
            {
                string LogSubject = "Error_CertFileThreadDoneGet";
                string Issue = e.ToString() + Environment.NewLine;
                CommonServices.LogUpdate(LogSubject, Issue);
            };

            return ThreadDone;
        }




        public void TaskRestart()
        {
            try
            {
                DateTime DhmNow = DateTime.Now;
                CommonServices.LogUpdate("TaskRestart", DhmNow.ToString());

                DateTime DhmValueStart = new DateTime(DhmNow.Year, DhmNow.Month, DhmNow.Day, 0, 0, 0).AddDays(-1);
                DateTime DhmValueEnd = new DateTime(DhmNow.Year, DhmNow.Month, DhmNow.Day, 23, 59, 59).AddDays(0);

                DateTime DhmStart = DateTime.Now.AddMinutes(-14);

                var ModelList = (from CertFilePlan in db.dt_CertFilePlan
                                 where DateTime.Compare(CertFilePlan.DhmCreation, DhmValueStart) >= 0 &&
                                     DateTime.Compare(CertFilePlan.DhmCreation, DhmValueEnd) <= 0 &&
                                     //!CertFilePlan.IsPlanned &&
                                     //!CertFilePlan.IsFinnished &&
                                     ((CertFilePlan.ThreadDone < CertFilePlan.ThreadTotal && CertFilePlan.ThreadTotal != 0) || CertFilePlan.ThreadTotal == 0)
                                 select new
                                 {
                                     CertFilePlan.CertFilePlanId,
                                     CertFilePlan.ServerPort,
                                     IsRunning = (DateTime.Compare(CertFilePlan.DhmModification, DhmStart) >= 0) ? true : false
                                 }).ToList();

                foreach (var Model in ModelList)
                {
                    if (!Model.IsRunning)
                    {
                        TaskPublish(Model.ServerPort, Model.CertFilePlanId);
                    }
                }
            }
            catch (Exception e)
            {
                string LogSubject = "Error_TaskRestart";
                string Issue = e.ToString() + Environment.NewLine;
                CommonServices.LogUpdate(LogSubject, Issue);
            };            
        }




    }
}