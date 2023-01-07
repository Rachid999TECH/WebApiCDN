using System;
using System.Collections.Generic;
using System.Linq;
using System.Timers;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;
using System.Threading;
using WebApiAction.Models;

namespace WebApiAction
{
    public class WebApiApplication : System.Web.HttpApplication
    {

        private static System.Timers.Timer aTimer001;
        private static System.Timers.Timer aTimer002;
        private static System.Timers.Timer aTimer003;
        private static System.Timers.Timer aTimer004;
        private static System.Timers.Timer aTimer005;
        private static System.Timers.Timer aTimer006;
        private static System.Timers.Timer aTimer007;
        private static System.Timers.Timer aTimer008;
        private static System.Timers.Timer aTimer009;


        private static System.Timers.Timer aTimer010;
        private static System.Timers.Timer aTimer011;
        private static System.Timers.Timer aTimer012;
        private static System.Timers.Timer aTimer013;
        private static System.Timers.Timer aTimer014;
        private static System.Timers.Timer aTimer015;
        private static System.Timers.Timer aTimer016;
        private static System.Timers.Timer aTimer017;
        private static System.Timers.Timer aTimer018;
        private static System.Timers.Timer aTimer019;
        private static System.Timers.Timer aTimer020;
        private static System.Timers.Timer aTimer021;
        private static System.Timers.Timer aTimer022;
        private static System.Timers.Timer aTimer023;
        private static System.Timers.Timer aTimer024;
        private static System.Timers.Timer aTimer025;
        //private static System.Timers.Timer aTimer026;
        //private static System.Timers.Timer aTimer027;
        private static System.Timers.Timer aTimer028;
        private static System.Timers.Timer aTimer029;
        private static System.Timers.Timer aTimer030;
        private static System.Timers.Timer aTimer031;
        private static System.Timers.Timer aTimer032;
        private static System.Timers.Timer aTimer033;
        private static System.Timers.Timer aTimer034;
        private static System.Timers.Timer aTimer035;
        private static System.Timers.Timer aTimer036;
        //private static System.Timers.Timer aTimer037;
        private static System.Timers.Timer aTimer038;
        private static System.Timers.Timer aTimer039;
        private static System.Timers.Timer aTimer040;
        private static System.Timers.Timer aTimer041;
        private static System.Timers.Timer aTimer042;
        private static System.Timers.Timer aTimer043;
        private static System.Timers.Timer aTimer044;
        private static System.Timers.Timer aTimer045;
        private static System.Timers.Timer aTimer046;

        private static TaskServices TaskServices = new TaskServices();

        protected void Application_Start()
        {
            AreaRegistration.RegisterAllAreas();
            GlobalConfiguration.Configure(WebApiConfig.Register);
            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            BundleConfig.RegisterBundles(BundleTable.Bundles);

            string ServerPort;
            string TaskId;
            string Source;
            string FileTypeId;
            int AddDaysStart;
            int AddDaysEnd;
            string LSId;
            bool IsCron;
            int Hour;
            int Minute;

            int Latency = 0;

            //Test
            //ServerPort = "5050";
            //TaskId = "00"; //Upload
            //Source = "19"; //Images
            //FileTypeId = "J1"; //ImagesLane
            //AddDaysStart = -1;
            //AddDaysEnd = -1;
            //LSId = "07";
            //IsCron = false;
            //Hour = 11;//0
            //Minute = 17;//15
            //TaskOnTimePerDayPlan(aTimer046, ServerPort, TaskId, Source, FileTypeId, AddDaysStart, AddDaysEnd, LSId, IsCron, Hour, Minute);












            //5050
            //ServerPort = "5050";
            //TaskId = "00"; //Upload
            //Source = "08"; //Ope
            //FileTypeId = "80"; //TraficHour
            //AddDaysStart = 0;
            //AddDaysEnd = 0;
            //LSId = "0";
            //IsCron = false;
            //Hour = 1;//0
            //Minute = 4;//4
            //TaskOneTimePerHourPlan(aTimer001, ServerPort, TaskId, Source, FileTypeId, AddDaysStart, AddDaysEnd, LSId, IsCron, Hour, Minute, Latency);

            //ServerPort = "5050";
            //TaskId = "00"; //Upload
            //Source = "08"; //Ope
            //FileTypeId = "86"; //TraficHourMp
            //AddDaysStart = 0;
            //AddDaysEnd = 0;
            //LSId = "0";
            //IsCron = false;
            //Hour = 1;//0
            //Minute = 7;//7
            //TaskOneTimePerHourPlan(aTimer002, ServerPort, TaskId, Source, FileTypeId, AddDaysStart, AddDaysEnd, LSId, IsCron, Hour, Minute, Latency);

            ServerPort = "5050";
            TaskId = "00"; //Upload
            Source = "08"; //Ope
            FileTypeId = "85"; //TraficOd
            AddDaysStart = -1;
            AddDaysEnd = -1;
            LSId = "0";
            IsCron = false;
            Hour = 1;//0
            Minute = 5;//5
            TaskOnTimePerDayPlan(aTimer029, ServerPort, TaskId, Source, FileTypeId, AddDaysStart, AddDaysEnd, LSId, IsCron, Hour, Minute, Latency);

            ServerPort = "5050";
            TaskId = "00"; //Upload
            Source = "19"; //Images
            FileTypeId = "J1"; //ImagesLane
            AddDaysStart = -1;
            AddDaysEnd = -1;
            LSId = "07";
            IsCron = false;
            Hour = 1;//0
            Minute = 15;//15
            TaskOnTimePerDayPlan(aTimer010, ServerPort, TaskId, Source, FileTypeId, AddDaysStart, AddDaysEnd, LSId, IsCron, Hour, Minute, Latency);

            ServerPort = "5050";
            TaskId = "00"; //Upload
            Source = "19"; //Images
            FileTypeId = "J1"; //ImagesLane
            AddDaysStart = -1;
            AddDaysEnd = -1;
            LSId = "11";
            IsCron = false;
            Hour = 1;//0
            Minute = 20;//20
            TaskOnTimePerDayPlan(aTimer011, ServerPort, TaskId, Source, FileTypeId, AddDaysStart, AddDaysEnd, LSId, IsCron, Hour, Minute, Latency);

            ServerPort = "5050";
            TaskId = "00"; //Upload
            Source = "19"; //Images
            FileTypeId = "J1"; //ImagesLane
            AddDaysStart = -1;
            AddDaysEnd = -1;
            LSId = "14";
            IsCron = false;
            Hour = 1;//0
            Minute = 25;//25
            TaskOnTimePerDayPlan(aTimer012, ServerPort, TaskId, Source, FileTypeId, AddDaysStart, AddDaysEnd, LSId, IsCron, Hour, Minute, Latency);

            ServerPort = "5050";
            TaskId = "00"; //Upload
            Source = "19"; //Images
            FileTypeId = "J1"; //ImagesLane
            AddDaysStart = -1;
            AddDaysEnd = -1;
            LSId = "21";
            IsCron = false;
            Hour = 1;//0
            Minute = 30;//30
            TaskOnTimePerDayPlan(aTimer013, ServerPort, TaskId, Source, FileTypeId, AddDaysStart, AddDaysEnd, LSId, IsCron, Hour, Minute, Latency);

            ServerPort = "5050";
            TaskId = "00"; //Upload
            Source = "19"; //Images
            FileTypeId = "J1"; //ImagesLane
            AddDaysStart = -1;
            AddDaysEnd = -1;
            LSId = "26";
            IsCron = false;
            Hour = 1;//0
            Minute = 35;//35
            TaskOnTimePerDayPlan(aTimer014, ServerPort, TaskId, Source, FileTypeId, AddDaysStart, AddDaysEnd, LSId, IsCron, Hour, Minute, Latency);

            ServerPort = "5050";
            TaskId = "00"; //Upload
            Source = "19"; //Images
            FileTypeId = "J1"; //ImagesLane
            AddDaysStart = -1;
            AddDaysEnd = -1;
            LSId = "32";
            IsCron = false;
            Hour = 1;//0
            Minute = 40;//40
            TaskOnTimePerDayPlan(aTimer015, ServerPort, TaskId, Source, FileTypeId, AddDaysStart, AddDaysEnd, LSId, IsCron, Hour, Minute, Latency);

            ServerPort = "5050";
            TaskId = "00"; //Upload
            Source = "19"; //Images
            FileTypeId = "J1"; //ImagesLane
            AddDaysStart = -1;
            AddDaysEnd = -1;
            LSId = "37";
            IsCron = false;
            Hour = 1;//0
            Minute = 45;//45
            TaskOnTimePerDayPlan(aTimer016, ServerPort, TaskId, Source, FileTypeId, AddDaysStart, AddDaysEnd, LSId, IsCron, Hour, Minute, Latency);

            ServerPort = "5050";
            TaskId = "00"; //Upload
            Source = "19"; //Images
            FileTypeId = "J1"; //ImagesLane
            AddDaysStart = -1;
            AddDaysEnd = -1;
            LSId = "39";
            IsCron = false;
            Hour = 1;//0
            Minute = 50;//50
            TaskOnTimePerDayPlan(aTimer017, ServerPort, TaskId, Source, FileTypeId, AddDaysStart, AddDaysEnd, LSId, IsCron, Hour, Minute, Latency);

            ServerPort = "5050";
            TaskId = "00"; //Upload
            Source = "19"; //Images
            FileTypeId = "J1"; //ImagesLane
            AddDaysStart = -1;
            AddDaysEnd = -1;
            LSId = "46";
            IsCron = false;
            Hour = 1;//0
            Minute = 55;//55
            TaskOnTimePerDayPlan(aTimer018, ServerPort, TaskId, Source, FileTypeId, AddDaysStart, AddDaysEnd, LSId, IsCron, Hour, Minute, Latency);

            ServerPort = "5050";
            TaskId = "00"; //Upload
            Source = "19"; //Images
            FileTypeId = "J1"; //ImagesLane
            AddDaysStart = -1;
            AddDaysEnd = -1;
            LSId = "48";
            IsCron = false;
            Hour = 2;//1
            Minute = 0;//0
            TaskOnTimePerDayPlan(aTimer019, ServerPort, TaskId, Source, FileTypeId, AddDaysStart, AddDaysEnd, LSId, IsCron, Hour, Minute, Latency);

            ServerPort = "5050";
            TaskId = "00"; //Upload
            Source = "19"; //Images
            FileTypeId = "J1"; //ImagesLane
            AddDaysStart = -1;
            AddDaysEnd = -1;
            LSId = "53";
            IsCron = false;
            Hour = 2;//1
            Minute = 5;//5
            TaskOnTimePerDayPlan(aTimer020, ServerPort, TaskId, Source, FileTypeId, AddDaysStart, AddDaysEnd, LSId, IsCron, Hour, Minute, Latency);

            ServerPort = "5050";
            TaskId = "00"; //Upload
            Source = "19"; //Images
            FileTypeId = "J1"; //ImagesLane
            AddDaysStart = -1;
            AddDaysEnd = -1;
            LSId = "76";
            IsCron = false;
            Hour = 2;//1
            Minute = 10;//10
            TaskOnTimePerDayPlan(aTimer021, ServerPort, TaskId, Source, FileTypeId, AddDaysStart, AddDaysEnd, LSId, IsCron, Hour, Minute, Latency);

            ServerPort = "5050";
            TaskId = "11"; //Purge
            Source = "19"; //Images
            FileTypeId = "JG"; //Server165
            AddDaysStart = -46;
            AddDaysEnd = -46;
            LSId = "0";
            IsCron = false;
            Hour = 2;//1
            Minute = 15;//30
            TaskOnTimePerDayPlan(aTimer005, ServerPort, TaskId, Source, FileTypeId, AddDaysStart, AddDaysEnd, LSId, IsCron, Hour, Minute, Latency);

            ServerPort = "5050";
            TaskId = "00"; //Upload
            Source = "19"; //Images
            FileTypeId = "J1"; //ImagesLane
            AddDaysStart = -1;
            AddDaysEnd = -1;
            LSId = "88";
            IsCron = false;
            Hour = 2;//1
            Minute = 20;//15
            TaskOnTimePerDayPlan(aTimer022, ServerPort, TaskId, Source, FileTypeId, AddDaysStart, AddDaysEnd, LSId, IsCron, Hour, Minute, Latency);

            ServerPort = "5050";
            TaskId = "00"; //Upload
            Source = "19"; //Images
            FileTypeId = "J1"; //ImagesLane
            AddDaysStart = -1;
            AddDaysEnd = -1;
            LSId = "89";
            IsCron = false;
            Hour = 2;//1
            Minute = 25;//20
            TaskOnTimePerDayPlan(aTimer023, ServerPort, TaskId, Source, FileTypeId, AddDaysStart, AddDaysEnd, LSId, IsCron, Hour, Minute, Latency);                                                //

            ServerPort = "5050";
            TaskId = "11"; //Purge
            Source = "19"; //Images
            FileTypeId = "JC"; //ImagesServer
            AddDaysStart = -32;
            AddDaysEnd = -32;
            LSId = "0";
            IsCron = false;
            Hour = 2;//1
            Minute = 30;//30
            TaskOnTimePerDayPlan(aTimer004, ServerPort, TaskId, Source, FileTypeId, AddDaysStart, AddDaysEnd, LSId, IsCron, Hour, Minute, Latency);

            ServerPort = "5050";
            TaskId = "11"; //Purge
            Source = "16"; //Toll
            FileTypeId = "S2"; //TrxLane
            AddDaysStart = -32;
            AddDaysEnd = -32;
            LSId = "0";
            IsCron = false;
            Hour = 2;//1
            Minute = 35;//45
            TaskOnTimePerDayPlan(aTimer030, ServerPort, TaskId, Source, FileTypeId, AddDaysStart, AddDaysEnd, LSId, IsCron, Hour, Minute, Latency);

            ServerPort = "5050";
            TaskId = "00"; //Upload
            Source = "05"; //Zip
            FileTypeId = "5A"; //Files Zipdata
            AddDaysStart = 0;
            AddDaysEnd = 0;
            LSId = "0";
            IsCron = false;
            Hour = 6;//6
            Minute = 0;//0
            TaskOnTimePerDayPlan(aTimer031, ServerPort, TaskId, Source, FileTypeId, AddDaysStart, AddDaysEnd, LSId, IsCron, Hour, Minute, Latency);

            //ServerPort = "5050";
            //TaskId = "09"; //Notif
            //Source = "25"; //Notif
            //FileTypeId = "Z1"; //Tpd
            //AddDaysStart = -9;
            //AddDaysEnd = -2;
            //LSId = "0";
            //IsCron = false;
            //Hour = 8;//8
            //Minute = 0;//0
            //TaskOnTimePerDayPlan(aTimer027, ServerPort, TaskId, Source, FileTypeId, AddDaysStart, AddDaysEnd, LSId, IsCron, Hour, Minute, Latency);

            ServerPort = "5050";
            TaskId = "09"; //Notif
            Source = "25"; //Notif
            FileTypeId = "Z3"; //TpdBlacklist
            AddDaysStart = -1;
            AddDaysEnd = -1;
            LSId = "0";
            IsCron = false;
            Hour = 9;//9
            Minute = 0;//0
            TaskOnTimePerDayPlan(aTimer028, ServerPort, TaskId, Source, FileTypeId, AddDaysStart, AddDaysEnd, LSId, IsCron, Hour, Minute, Latency);

            //ServerPort = "5050";
            //TaskId = "09"; //Notif
            //Source = "25"; //Notif
            //FileTypeId = "Z2"; //Breach
            //AddDaysStart = -9;
            //AddDaysEnd = -2;
            //LSId = "0";
            //IsCron = false;
            //Hour = 10;//10
            //Minute = 0;//0
            //TaskOnTimePerDayPlan(aTimer026, ServerPort, TaskId, Source, FileTypeId, AddDaysStart, AddDaysEnd, LSId, IsCron, Hour, Minute, Latency);

            ServerPort = "5050";
            TaskId = "11"; //Purge
            Source = "31"; //Logs
            FileTypeId = "L2"; //Logs 21
            AddDaysStart = -1;
            AddDaysEnd = 0;
            LSId = "0";
            IsCron = false;
            Hour = 8;//12
            Minute = 10;//0
            TaskOnTimePerDayPlan(aTimer003, ServerPort, TaskId, Source, FileTypeId, AddDaysStart, AddDaysEnd, LSId, IsCron, Hour, Minute, Latency);

            ServerPort = "5050";
            TaskId = "04"; //Calculate
            Source = "34"; //Milestone
            FileTypeId = "B2"; //Breach
            AddDaysStart = -1;
            AddDaysEnd = -1;
            LSId = "0";
            IsCron = false;
            Hour = 17;//17
            Minute = 0;//0
            TaskOnTimePerDayPlan(aTimer024, ServerPort, TaskId, Source, FileTypeId, AddDaysStart, AddDaysEnd, LSId, IsCron, Hour, Minute, Latency);

            ServerPort = "5050";
            TaskId = "04"; //Calculate
            Source = "34"; //Milestone
            FileTypeId = "B4"; //Minute
            AddDaysStart = -1;
            AddDaysEnd = -1;
            LSId = "0";
            IsCron = false;
            Hour = 17;//17
            Minute = 5;//5
            TaskOnTimePerDayPlan(aTimer025, ServerPort, TaskId, Source, FileTypeId, AddDaysStart, AddDaysEnd, LSId, IsCron, Hour, Minute, Latency);

            ServerPort = "5050";
            TaskId = "04"; //Calculate
            Source = "11"; //Counters
            FileTypeId = "HE"; //PlateCounters
            AddDaysStart = -3;
            AddDaysEnd = -3;
            LSId = "0";
            IsCron = false;
            Hour = 18;//18
            Minute = 0;//0
            TaskOnTimePerDayPlan(aTimer006, ServerPort, TaskId, Source, FileTypeId, AddDaysStart, AddDaysEnd, LSId, IsCron, Hour, Minute, Latency);

            ServerPort = "5050";
            TaskId = "04"; //Calculate
            Source = "11"; //Counters
            FileTypeId = "HD"; //TagCounters
            AddDaysStart = -3;
            AddDaysEnd = -3;
            LSId = "0";
            IsCron = false;
            Hour = 20;//20
            Minute = 0;//0
            TaskOnTimePerDayPlan(aTimer008, ServerPort, TaskId, Source, FileTypeId, AddDaysStart, AddDaysEnd, LSId, IsCron, Hour, Minute, Latency);

            ServerPort = "5050";
            TaskId = "00"; //Upload
            Source = "07"; //Ce
            FileTypeId = "7H"; //Products
            AddDaysStart = -3;
            AddDaysEnd = -3;
            LSId = "0";
            IsCron = false;
            Hour = 5;//21
            Minute = 0;//0
            TaskOnTimePerDayPlan(aTimer009, ServerPort, TaskId, Source, FileTypeId, AddDaysStart, AddDaysEnd, LSId, IsCron, Hour, Minute, Latency);

            //
            //CertFileAutoRestart(aTimer007);//aTimer007          

            ServerPort = "5050";
            TaskId = "11"; //Purge
            Source = "16"; //Toll
            FileTypeId = "S3"; //TrxBorne
            AddDaysStart = -32;
            AddDaysEnd = -32;
            LSId = "0";
            IsCron = false;
            Hour = 3;//3
            Minute = 0;//0
            TaskOnTimePerDayPlan(aTimer040, ServerPort, TaskId, Source, FileTypeId, AddDaysStart, AddDaysEnd, LSId, IsCron, Hour, Minute, Latency);

            ServerPort = "5050";
            TaskId = "01"; //Generate
            Source = "04"; //Msg
            FileTypeId = "46"; //Event
            AddDaysStart = -1;
            AddDaysEnd = 0;
            LSId = "0";
            IsCron = false;
            Hour = 3;//3
            Minute = 0;//0
            TaskOnTimePerDayPlan(aTimer044, ServerPort, TaskId, Source, FileTypeId, AddDaysStart, AddDaysEnd, LSId, IsCron, Hour, Minute, Latency);

            ServerPort = "5050";
            TaskId = "00"; //Upload
            Source = "04"; //Msg
            FileTypeId = "4A"; //Files Event
            AddDaysStart = -1;
            AddDaysEnd = -1;
            LSId = "0";
            IsCron = false;
            Hour = 3;//3
            Minute = 30;//30
            TaskOnTimePerDayPlan(aTimer042, ServerPort, TaskId, Source, FileTypeId, AddDaysStart, AddDaysEnd, LSId, IsCron, Hour, Minute, Latency);

            ServerPort = "5050";
            TaskId = "11"; //Purge
            Source = "16"; //Toll
            FileTypeId = "S4"; //Event
            AddDaysStart = -32;
            AddDaysEnd = -32;
            LSId = "0";
            IsCron = false;
            Hour = 4;//4
            Minute = 0;//0
            TaskOnTimePerDayPlan(aTimer041, ServerPort, TaskId, Source, FileTypeId, AddDaysStart, AddDaysEnd, LSId, IsCron, Hour, Minute, Latency);

            //CertFileMsgEventUploadBatch
            ServerPort = "5050";
            TaskId = "00"; //Upload
            Source = "04"; //Zip
            FileTypeId = "46"; //Event
            AddDaysStart = -1;
            AddDaysEnd = -1;
            LSId = "0";
            IsCron = false;
            Hour = 4;//4
            Minute = 0;//0
            TaskOnTimePerDayPlan(aTimer043, ServerPort, TaskId, Source, FileTypeId, AddDaysStart, AddDaysEnd, LSId, IsCron, Hour, Minute, Latency);

            //CertFileZipGenerateBatch
            ServerPort = "5050";
            TaskId = "01"; //Generate
            Source = "05"; //Zip
            FileTypeId = "0";
            AddDaysStart = 0;
            AddDaysEnd = 0;
            LSId = "0";
            IsCron = false;
            Hour = 6;//6
            Minute = 10;//10
            TaskOnTimePerDayPlan(aTimer038, ServerPort, TaskId, Source, FileTypeId, AddDaysStart, AddDaysEnd, LSId, IsCron, Hour, Minute, Latency);

            //CertFileCeReportingUploadBatch(aTimer034, 7, 45);//aTimer034, 7, 45
            ServerPort = "5050";
            TaskId = "00"; //Upload
            Source = "07"; //Ce
            FileTypeId = "N1"; //Reporting
            AddDaysStart = -2;
            AddDaysEnd = -1;
            LSId = "0";
            IsCron = false;
            Hour = 7;//7
            Minute = 45;//45
            TaskOnTimePerDayPlan(aTimer034, ServerPort, TaskId, Source, FileTypeId, AddDaysStart, AddDaysEnd, LSId, IsCron, Hour, Minute, Latency);

            //CertFileCeAllUploadBatch(aTimer032, 8, 0);//aTimer032, 8, 0
            ServerPort = "5050";
            TaskId = "00"; //Upload
            Source = "07"; //Ce
            FileTypeId = "0"; 
            AddDaysStart = -1;
            AddDaysEnd = -1;
            LSId = "0";
            IsCron = false;
            Hour = 8;//8
            Minute = 0;//0
            TaskOnTimePerDayPlan(aTimer032, ServerPort, TaskId, Source, FileTypeId, AddDaysStart, AddDaysEnd, LSId, IsCron, Hour, Minute, Latency);

            //CertFileCeInterfaceUploadBatch(aTimer033, 8, 15);//aTimer033, 8, 15  
            ServerPort = "5050";
            TaskId = "00"; //Upload
            Source = "07"; //Ce
            FileTypeId = "N2"; //Interface
            AddDaysStart = -1;
            AddDaysEnd = -1;
            LSId = "0";
            IsCron = false;
            Hour = 8;//8
            Minute = 15;//15
            TaskOnTimePerDayPlan(aTimer033, ServerPort, TaskId, Source, FileTypeId, AddDaysStart, AddDaysEnd, LSId, IsCron, Hour, Minute, Latency);




            //2020

            //CertFileZipTrxLaneInterfaceUploadBatch, 2020
            ServerPort = "2020";
            TaskId = "00"; //Upload
            Source = "05"; //Zip
            FileTypeId = "58"; //Files Zipdata
            AddDaysStart = -1;
            AddDaysEnd = -1;
            LSId = "0";
            IsCron = false;
            Hour = 7;//7
            Minute = 30;//30
            TaskOnTimePerDayPlan(aTimer035, ServerPort, TaskId, Source, FileTypeId, AddDaysStart, AddDaysEnd, LSId, IsCron, Hour, Minute, Latency);

            ServerPort = "2020";
            TaskId = "00"; //Upload
            Source = "05"; //Zip
            FileTypeId = "5B"; //Files Zipdata
            AddDaysStart = -1;
            AddDaysEnd = -1;
            LSId = "0";
            IsCron = false;
            Hour = 11;//11
            Minute = 30;//30
            TaskOnTimePerDayPlan(aTimer045, ServerPort, TaskId, Source, FileTypeId, AddDaysStart, AddDaysEnd, LSId, IsCron, Hour, Minute, Latency);

            //CertFileZipTrxBorneUploadBatch, 2020
            ServerPort = "2020";
            TaskId = "00"; //Upload
            Source = "05"; //Zip
            FileTypeId = "52"; //Files Zipdata
            AddDaysStart = -1;
            AddDaysEnd = -1;
            LSId = "0";
            IsCron = false;
            Hour = 12;//12
            Minute = 30;//30
            TaskOnTimePerDayPlan(aTimer036, ServerPort, TaskId, Source, FileTypeId, AddDaysStart, AddDaysEnd, LSId, IsCron, Hour, Minute, Latency);

            //CertFileZipEventUploadBatch, 2020
            ServerPort = "2020";
            TaskId = "00"; //Upload
            Source = "05"; //Zip
            FileTypeId = "56"; //Event
            AddDaysStart = -1;
            AddDaysEnd = -1;
            LSId = "0";
            IsCron = false;
            Hour = 13;//13
            Minute = 30;//30
            TaskOnTimePerDayPlan(aTimer039, ServerPort, TaskId, Source, FileTypeId, AddDaysStart, AddDaysEnd, LSId, IsCron, Hour, Minute, Latency);
        }


                       
            

        static void CertFileAutoRestart(System.Timers.Timer aTimer)
        {
            aTimer = new System.Timers.Timer(60000);
            aTimer.Elapsed += (sender1, e1) => CertFileAutoRestartElapsed(sender1, e1, aTimer);
            aTimer.Start();
        }

        public static void CertFileAutoRestartElapsed(Object source, System.Timers.ElapsedEventArgs e, System.Timers.Timer aTimer)
        {//0
            if (DateTime.Now.Minute % 15 == 0)
            {                
                aTimer.Stop();
                TaskServices.TaskRestart();
                CertFileAutoRestart(aTimer);
            }
        }
        
        static void TaskOnTimePerDayPlan(System.Timers.Timer aTimer, string ServerPort, 
                                         string TaskId, string Source, string FileTypeId, 
                                         int AddDaysStart, int AddDaysEnd, 
                                         string LSId, bool IsCron, 
                                         int Hour, int Minute, int Latency)
        {
            //
            DateTime DhmNow = DateTime.Now;
            //DateTime DhmValueStart = new DateTime(DhmNow.Year, DhmNow.Month, DhmNow.Day, 0, 0, 0).AddDays(AddDaysStart);
            //DateTime DhmValueEnd = new DateTime(DhmNow.Year, DhmNow.Month, DhmNow.Day, 23, 59, 59).AddDays(AddDaysEnd);

            //TaskUpdateModel ModelNew = new TaskUpdateModel()
            //{
            //    TaskId = TaskId,
            //    Source = Source,
            //    FileTypeId = FileTypeId,
            //    RegionId = "0",
            //    LSId = LSId,
            //    AxleId = "0",
            //    StationNumber = "0",
            //    LaneName = "0",
            //    PdvId = "0",

            //    DhmValueStart = DhmValueStart,
            //    DhmValueEnd = DhmValueEnd,
            //    DhmPlan = new DateTime(1900, 1, 1, 0, 0, 0),

            //    IsEveryDay = false,
            //    IsEveryHour = false,
            //    IsPlanned = false,
            //    IsCron = IsCron,

            //    BillingId = "0",
            //    CategoryId = "0",
            //    AddDaysStart = 0,
            //    AddDaysEnd = 0,

            //    UserId = "11662250-3cda-47b4-88a7-0a17c16df5f1",
            //    RoleNameList = "",
            //    ServerPort = ServerPort,
            //};

            //if(Hour + Latency >= 24)
            //{
            //    Latency = 0;
            //}


            //DateTime oneAmTime = new DateTime(DhmNow.Year, DhmNow.Month, DhmNow.Day, Hour + Latency, Minute, 0);
            //if (DhmNow > oneAmTime)
            //{
            //    oneAmTime = oneAmTime.AddDays(1);
            //}
            //double tickTime = (oneAmTime - DhmNow).TotalMilliseconds;

            //aTimer = new System.Timers.Timer(tickTime);

            aTimer = new System.Timers.Timer(60000);
            aTimer.Elapsed += (sender1, e1) => TaskOnTimePerDayPlanElapsed(sender1, e1,
                                                                              aTimer, ServerPort,
                                                                              TaskId, Source, FileTypeId,
                                                                              AddDaysStart, AddDaysEnd,
                                                                              LSId, IsCron,
                                                                              Hour, Minute, Latency);
            aTimer.Start();
        }

        public static void TaskOnTimePerDayPlanElapsed(Object source, System.Timers.ElapsedEventArgs e, 
                                                      System.Timers.Timer aTimer, string ServerPort,
                                                         string TaskId, string Source, string FileTypeId,
                                                         int AddDaysStart, int AddDaysEnd,
                                                         string LSId, bool IsCron,
                                                         int Hour, int Minute, int Latency)
        {
            if (DateTime.Now.Hour + Latency == Hour && DateTime.Now.Minute == Minute)
            {
                aTimer.Stop();
                TaskServices.CertFileAdd(ServerPort,
                                TaskId, Source, FileTypeId,
                                AddDaysStart, AddDaysEnd,
                                LSId, IsCron,
                                Hour, Minute, Latency);

                Thread.Sleep(60000);
                TaskOnTimePerDayPlan(aTimer, ServerPort,
                                     TaskId, Source, FileTypeId,
                                     AddDaysStart, AddDaysEnd,
                                     LSId, IsCron,
                                     Hour, Minute, Latency);
            }

            
        }

        static void TaskOneTimePerHourPlan(System.Timers.Timer aTimer, string ServerPort,
                                         string TaskId, string Source, string FileTypeId,
                                         int AddDaysStart, int AddDaysEnd,
                                         string LSId, bool IsCron,
                                         int Hour, int Minute, int Latency)
        {
            //
            DateTime DhmNow = DateTime.Now;
            

            aTimer = new System.Timers.Timer(60000);
            aTimer.Elapsed += (sender1, e1) => TaskOneTimePerHourPlanElapsed(sender1, e1, 
                                                                              aTimer, ServerPort,
                                                                              TaskId, Source, FileTypeId,
                                                                              AddDaysStart, AddDaysEnd,
                                                                              LSId, IsCron,
                                                                              Hour, Minute, Latency);
            aTimer.Start();
        }

        public static void TaskOneTimePerHourPlanElapsed(Object source, System.Timers.ElapsedEventArgs e,
                                                       System.Timers.Timer aTimer, string ServerPort,
                                                         string TaskId, string Source, string FileTypeId,
                                                         int AddDaysStart, int AddDaysEnd,
                                                         string LSId, bool IsCron,
                                                         int Hour, int Minute, int Latency)
        {//7
            if (DateTime.Now.Minute == Minute)
            {
                aTimer.Stop();
                TaskServices.CertFileAdd(ServerPort,
                                TaskId, Source, FileTypeId,
                                AddDaysStart, AddDaysEnd,
                                LSId, IsCron,
                                Hour, Minute, Latency);
                Thread.Sleep(60000);
                TaskOneTimePerHourPlan(aTimer, ServerPort,
                                 TaskId, Source, FileTypeId,
                                 AddDaysStart, AddDaysEnd,
                                 LSId, IsCron,
                                 Hour, Minute, Latency);
            }
        }
    }
}
