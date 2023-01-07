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
    public class CredentialsModel
    {
        public string Url { get; set; }
        public int Port { get; set; }
        public string User { get; set; }
        public string Password { get; set; }
        public string DatabaseName { get; set; }
        public string ItemName { get; set; }
        public string ItemUsage { get; set; }
    }
}