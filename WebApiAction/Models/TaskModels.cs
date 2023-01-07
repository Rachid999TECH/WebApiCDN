using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Web;
//using System.Web.Mvc;
//using toll_c.Models;
//using System.Data;
//using OfficeOpenXml;
//using System.IO;
//using System.Windows.Forms;
//using System.Text;
//using System.Data.Entity.Core.Objects;
//using System.Globalization;
//using System.Data.Entity.SqlServer;
//using System.Data.Entity;
//using Microsoft.AspNet.Identity;
//using Newtonsoft.Json;
//using System.IO.Compression;

//using System.Net;
//using Spire.Xls;
//using System.Runtime.Serialization;
//using System.Threading;
//using System.Web.Services;
//using System.Threading.Tasks;
//using System.Web.Hosting;
//using System.Security.Principal;
//using System.Timers;
//using Timer = System.Windows.Forms.Timer;


namespace WebApiAction.Models
{
    public class TaskUpdateModel
    {
        public string TaskId { get; set; }
        public string Source { get; set; }
        public string FileTypeId { get; set; }
        public string RegionId { get; set; }
        public string LSId { get; set; }
        public string AxleId { get; set; }
        public string StationNumber { get; set; }
        public string LaneName { get; set; }
        public string PdvId { get; set; }

        public DateTime DhmValueStart { get; set; }
        public DateTime DhmValueEnd { get; set; }
        public DateTime DhmPlan { get; set; }


        public bool IsEveryDay { get; set; }
        public bool IsEveryHour { get; set; }
        public bool IsPlanned { get; set; }
        public bool IsCron { get; set; }

        public string BillingId { get; set; }
        public string CategoryId { get; set; }
        public int AddDaysStart { get; set; }
        public int AddDaysEnd { get; set; }

        public string UserId { get; set; }
        public string RoleNameList { get; set; }
        public string ServerPort { get; set; }
    }
}