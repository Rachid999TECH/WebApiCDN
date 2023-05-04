using System;
//using System.Collections.Generic;
using System.Linq;
//using System.Web;
//using System.Web.Mvc;
using WebApiAction.Models;
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

using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using Newtonsoft.Json;
using System.Collections.Generic;
using System.IO;
using System.Diagnostics;
using RabbitMQ.Client;
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
    public class CommonServices
    {
        //DB_A430F9_tollEntities1 db = new DB_A430F9_tollEntities1();
        //CredentialsServices CredentialsServices = new CredentialsServices();
        //TextServices TextServices = new TextServices();
        //DateTimeServices DateTimeServices = new DateTimeServices();
        //EmailServices EmailServices = new EmailServices();
        static readonly HttpClient client = new HttpClient();

        public void ClassLogTextUpdate(string LogCategory, string LogSubject, string LogDescription)
        {
            try
            {
                string FileName = LogCategory + "_" + LogSubject + "_" + DateTime.Now.ToString("dd/MM/yyyy hh:mm:ss.fff").Replace("/", "").Replace("/", "").Replace(" ", "").Replace(":", "").Replace(":", "").Replace(".", "");

                string Url = @"\\172.17.95.21\adm-toll-logs";
                string User = "adm-toll-share-user";
                string Password = "K_9iTQ/R4+A_pPk";

                FolderAccess(Url, User, Password);
                string FolderPath = Url;

                if (!Directory.Exists(FolderPath))
                {
                    Directory.CreateDirectory(FolderPath);
                }

                string FilePath = FolderPath + @"\" + FileName + ".txt";

                if (!File.Exists(FilePath))
                {
                    var ProcessCreate = System.IO.File.Create(FilePath);
                    ProcessCreate.Close();
                }

                List<string> ScriptList = new List<string>();
                ScriptList.Add(LogSubject);
                ScriptList.Add(LogDescription);
                string[] ScriptBatchLines = ScriptList.ToArray();
                File.WriteAllLines(FilePath, ScriptBatchLines);
            }
            catch
            {

            };
        }

        public string ClassQuotesRemove(string Word)
        {
            int WordLenght = Word.Length;
            if (Word != null && WordLenght >= 2)
            {
                if (Word.Substring(0, 1) == "\"" && Word.Substring(WordLenght - 1, 1) == "\"")
                {
                    Word = Word.Substring(1, WordLenght - 2);
                }
            }
            return Word.Replace("\\\"", "\"");
        }

        public CredentialsModel WebApiCredGet(string Pattern, string IpAddress)
        {
            CredentialsModel CredModel = null;
            string requestUri = "";

            try
            {
                string Uri = "http://172.17.95.21:1013/";
                client.DefaultRequestHeaders.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                requestUri = Uri + @"api/cred?" +
                        "Pattern=" + Pattern +
                        "&IpAddress=" + IpAddress;

                HttpResponseMessage Res = client.GetAsync(requestUri).Result;

                if (Res.IsSuccessStatusCode)
                {
                    var EmpResponse = Res.Content.ReadAsStringAsync().Result;
                    CredModel = JsonConvert.DeserializeObject<List<CredentialsModel>>(EmpResponse).FirstOrDefault();
                }
            }
            catch (Exception e)
            {
                string LogSubject = "Error_WebApiCredGet";
                string Issue = e.ToString() + Environment.NewLine +
                               "requestUri : " + requestUri;
                LogUpdate(LogSubject, Issue);
            }
            return CredModel;
        }

        public RabbitMQ.Client.IConnection RabbitMqConnectionFactoryGet()
        {
            string CredPattern = "RabbitMQ";
            string CredIpAddress = "";
            CredentialsModel CredModel = WebApiCredGet(CredPattern, CredIpAddress);

            var factory = new ConnectionFactory()
            {
                HostName = CredModel.Url,
                Port = CredModel.Port,
                VirtualHost = "/",
                UserName = CredModel.User,
                Password = CredModel.Password,
                AutomaticRecoveryEnabled = true,
                NetworkRecoveryInterval = TimeSpan.FromSeconds(5),
                TopologyRecoveryEnabled = true
            };

            return factory.CreateConnection();
        }

        public void LogUpdate(string LogSubject, string Issue)
        {
            try
            {
                string Pattern = "WebApiTask";
                string CredPattern = "adm-toll-logs";
                string CredIpAddress = "";
                CredentialsModel CredModel = WebApiCredGet(CredPattern, CredIpAddress);
                FolderAccess(CredModel.Url, CredModel.User, CredModel.Password);
                string FolderPath = CredModel.Url;

                string FileName = DateTime.Now.ToString("dd/MM/yyyy hh:mm:ss.fff").Replace("/", "").Replace("/", "").Replace(" ", "").Replace(":", "").Replace(":", "").Replace(".", "");
                string FilePath = FolderPath + @"\" + FileName + "_" + Pattern + "_" + LogSubject + ".txt";

                if (!File.Exists(FilePath))
                {
                    var ProcessCreate = System.IO.File.Create(FilePath);
                    ProcessCreate.Close();
                }

                List<string> ScriptList = new List<string>();
                ScriptList.Add(LogSubject);
                ScriptList.Add(Issue);
                string[] ScriptBatchLines = ScriptList.ToArray();
                File.WriteAllLines(FilePath, ScriptBatchLines);
            }
            catch (Exception e)
            {
                string value = e.ToString();
            }
        }

        public void FolderAccess(string Url, string UserName, string Password)
        {
            try
            {
                string CommandIn = "NET USE " + Url + " /user:" + UserName + " " + Password;
                ExecuteCommand(CommandIn, 5000);
            }
            catch (Exception e)
            {
                string Issue = e.ToString();
                Issue = Issue + Environment.NewLine;
            };
        }

        public static void ExecuteCommand(string command, int timeout)
        {
            try
            {
                var processInfo = new ProcessStartInfo("cmd.exe", "/C " + command)
                {
                    CreateNoWindow = true,
                    UseShellExecute = false,
                    WorkingDirectory = "C:\\",
                };

                var process = Process.Start(processInfo);
                process.WaitForExit(timeout);
                process.Close();
            }
            catch (Exception e)
            {
                string Issue = e.ToString();
                Issue = Issue + Environment.NewLine;
            };
        }

    }    
}