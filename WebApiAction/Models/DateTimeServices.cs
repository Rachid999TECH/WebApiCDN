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
    public class DateTimeServices
    {

        public DateTime GetDateTimeFromDhmStringInverse12(string DhmStringInverse)
        {            
            if (DhmStringInverse.Length >= 12)
            {
                return new DateTime(int.Parse(DhmStringInverse.Substring(0, 4)),
                                int.Parse(DhmStringInverse.Substring(4, 2)),
                                int.Parse(DhmStringInverse.Substring(6, 2)),
                                int.Parse(DhmStringInverse.Substring(8, 2)),
                                int.Parse(DhmStringInverse.Substring(10, 2)),
                                0);
            }
            else
            {
                return new DateTime(1900, 1, 1);
            }
        }

        public DateTime GetDhmValueFromDhmStringInverse14(string DhmStringInverse)
        {
            if (DhmStringInverse.Length >= 14)
            {
                return new DateTime(int.Parse(DhmStringInverse.Substring(0, 4)),
                                int.Parse(DhmStringInverse.Substring(4, 2)),
                                int.Parse(DhmStringInverse.Substring(6, 2)),
                                int.Parse(DhmStringInverse.Substring(8, 2)),
                                int.Parse(DhmStringInverse.Substring(10, 2)),
                                int.Parse(DhmStringInverse.Substring(12, 2)));
            }
            else
            {
                return new DateTime(1900, 1, 1);
            }            
        }

        public DateTime GetDateValueFromDateStringInverse8(string DateStringInverse)
        {
            if (DateStringInverse.Length >= 8)
            {
                return new DateTime(int.Parse(DateStringInverse.Substring(0, 4)),
                                int.Parse(DateStringInverse.Substring(4, 2)),
                                int.Parse(DateStringInverse.Substring(6, 2)),
                                0, 0, 0);
            }
            else
            {
                return new DateTime(1900, 1, 1);
            }
        }

        public DateTime GetDhmValueFromDhmStringInverse8(string DhmStringInverse)
        {           
            if (DhmStringInverse.Length >= 8)
            {
                return new DateTime(int.Parse(DhmStringInverse.Substring(0, 4)),
                                int.Parse(DhmStringInverse.Substring(4, 2)),
                                int.Parse(DhmStringInverse.Substring(6, 2)),
                                0, 0, 0);
            }
            else
            {
                return new DateTime(1900, 1, 1);
            }
        }

        public DateTime GetDateTimeFromDateString(string DateString)
        {
            if (DateString.Length >= 8)
            {
                return new DateTime(int.Parse(DateString.Substring(4, 4)),
                                int.Parse(DateString.Substring(2, 2)),
                                int.Parse(DateString.Substring(0, 2)),
                                0, 0, 0);
            }
            else
            {
                return new DateTime(1900, 1, 1);
            }
        }

        public DateTime GetDhmValueFromDhmString14(string DhmString)
        {
            if (DhmString.Length >= 14)
            {
                return new DateTime(int.Parse(DhmString.Substring(4, 4)),
                                int.Parse(DhmString.Substring(2, 2)),
                                int.Parse(DhmString.Substring(0, 2)),
                                int.Parse(DhmString.Substring(8, 2)),
                                int.Parse(DhmString.Substring(10, 2)),
                                int.Parse(DhmString.Substring(12, 2)));
            }
            else
            {
                return new DateTime(1900, 1, 1);
            }            
        }

        public DateTime GetDhmValueFromDhmString17(string DhmString)
        {
            return new DateTime(int.Parse(DhmString.Substring(4, 4)),
                                int.Parse(DhmString.Substring(2, 2)),
                                int.Parse(DhmString.Substring(0, 2)),
                                int.Parse(DhmString.Substring(8, 2)),
                                int.Parse(DhmString.Substring(10, 2)),
                                int.Parse(DhmString.Substring(12, 2)),
                                int.Parse(DhmString.Substring(14, 3)));
        }

        public string GetDateStringInverseFromDhmValue(DateTime DhmValue)
        {
            string DateString = GetDateStringFromDhmValue(DhmValue);
            return DateString.Substring(4, 4) + DateString.Substring(2, 2) + DateString.Substring(0, 2);
        }

        public string GetDhmStringFromDhmValue(DateTime DhmValue)
        {
            return DhmValue.ToString().Replace("/", "").Replace("/", "").Replace(" ", "").Replace(":", "").Replace(":", "");
        }

        public string GetDateStringFromDhmValue(DateTime DhmValue)
        {
            return DhmValue.ToString().Replace("/", "").Replace("/", "").Substring(0, 8);
        }

        public string GetDhmStringShortFromDhmValue(DateTime DhmValue)
        {
            return DhmValue.ToString().Replace("/", "").Replace("/", "").Replace(" ", "").Replace(":", "").Replace(":", "");
        }








        public DateTime GetDateTimeFromDhmString14(string DhmString)
        {

            return new DateTime(int.Parse(DhmString.Substring(4, 4)),
                                int.Parse(DhmString.Substring(2, 2)),
                                int.Parse(DhmString.Substring(0, 2)),
                                int.Parse(DhmString.Substring(8, 2)),
                                int.Parse(DhmString.Substring(10, 2)),
                                int.Parse(DhmString.Substring(12, 2)));
        }

        public string GetDhmStringFullFromDhmValue(DateTime DhmValue)
        {
            return DhmValue.ToString("dd/MM/yyyy hh:mm:ss.fff").Replace("/", "").Replace("/", "").Replace(" ", "").Replace(":", "").Replace(":", "").Replace(".", "");
        }

        //public DateTime GetDateTimeFromDhmStringInverse12(string DhmStringInverse)
        //{
        //    return new DateTime(int.Parse(DhmStringInverse.Substring(0, 4)),
        //                        int.Parse(DhmStringInverse.Substring(4, 2)),
        //                        int.Parse(DhmStringInverse.Substring(6, 2)),
        //                        int.Parse(DhmStringInverse.Substring(8, 2)),
        //                        int.Parse(DhmStringInverse.Substring(10, 2)),
        //                        0);
        //}

        public DateTime GetDateTimeFromDhmStringInverse14(string DhmStringInverse)
        {
            return new DateTime(int.Parse(DhmStringInverse.Substring(0, 4)),
                                int.Parse(DhmStringInverse.Substring(4, 2)),
                                int.Parse(DhmStringInverse.Substring(6, 2)),
                                int.Parse(DhmStringInverse.Substring(8, 2)),
                                int.Parse(DhmStringInverse.Substring(10, 2)),
                                int.Parse(DhmStringInverse.Substring(12, 2))
                                );
        }

        public DateTime GetDhmValueStartFromDateString(string DateString)
        {
            return new DateTime(int.Parse(DateString.Substring(4, 4)),
                                int.Parse(DateString.Substring(2, 2)),
                                int.Parse(DateString.Substring(0, 2)),
                                0, 0, 0);
        }

        public DateTime GetDhmValueStartTraficHourFromDateString12(string DateString)
        {
            string HourString = DateString.Substring(8, 2);
            string MinuteString = DateString.Substring(10, 2);

            int Hour = 0;

            if (HourString == "23" && MinuteString == "59")
            {
                Hour = 23;
            }
            else
            {
                Hour = int.Parse(DateString.Substring(8, 2)) - 1;
            }
            return new DateTime(int.Parse(DateString.Substring(4, 4)),
                                int.Parse(DateString.Substring(2, 2)),
                                int.Parse(DateString.Substring(0, 2)),
                                Hour,
                                0,
                                0);
        }

        public DateTime GetDhmValueEndTraficHourFromDateString12(string DateString)
        {
            string HourString = DateString.Substring(8, 2);
            string MinuteString = DateString.Substring(10, 2);

            int Hour = 0;

            if (HourString == "23" && MinuteString == "59")
            {
                Hour = 23;
            }
            else
            {
                Hour = int.Parse(DateString.Substring(8, 2)) - 1;
            }
            return new DateTime(int.Parse(DateString.Substring(4, 4)),
                                int.Parse(DateString.Substring(2, 2)),
                                int.Parse(DateString.Substring(0, 2)),
                                Hour,
                                59,
                                0);
        }

        public DateTime GetDhmValueEndFromDateString(string DateString)
        {
            return new DateTime(int.Parse(DateString.Substring(4, 4)),
                                int.Parse(DateString.Substring(2, 2)),
                                int.Parse(DateString.Substring(0, 2)),
                                23, 59, 59);
        }
        //public DateTime GetDhmValueFromDhmStringInverse14(string DhmStringInverse)
        //{
        //    return new DateTime(int.Parse(DhmStringInverse.Substring(0, 4)),
        //                        int.Parse(DhmStringInverse.Substring(4, 2)),
        //                        int.Parse(DhmStringInverse.Substring(6, 2)),
        //                        int.Parse(DhmStringInverse.Substring(8, 2)),
        //                        int.Parse(DhmStringInverse.Substring(10, 2)),
        //                        int.Parse(DhmStringInverse.Substring(12, 2)));
        //}

        //public DateTime GetDhmValueFromDhmStringInverse8(string DhmStringInverse)
        //{
        //    return new DateTime(int.Parse(DhmStringInverse.Substring(0, 4)),
        //                        int.Parse(DhmStringInverse.Substring(4, 2)),
        //                        int.Parse(DhmStringInverse.Substring(6, 2)),
        //                        0, 0, 0);
        //}

        //public DateTime GetDateTimeFromDateString(string DateString)
        //{
        //    return new DateTime(int.Parse(DateString.Substring(4, 4)),
        //                        int.Parse(DateString.Substring(2, 2)),
        //                        int.Parse(DateString.Substring(0, 2)),
        //                        0, 0, 0);
        //}

        //public DateTime GetDhmValueFromDhmString14(string DhmString)
        //{
        //    return new DateTime(int.Parse(DhmString.Substring(4, 4)),
        //                        int.Parse(DhmString.Substring(2, 2)),
        //                        int.Parse(DhmString.Substring(0, 2)),
        //                        int.Parse(DhmString.Substring(8, 2)),
        //                        int.Parse(DhmString.Substring(10, 2)),
        //                        int.Parse(DhmString.Substring(12, 2)));
        //}

        public DateTime GetDhmValueFromDhmString12(string DhmString)
        {
            return new DateTime(int.Parse(DhmString.Substring(4, 4)),
                                int.Parse(DhmString.Substring(2, 2)),
                                int.Parse(DhmString.Substring(0, 2)),
                                int.Parse(DhmString.Substring(8, 2)),
                                int.Parse(DhmString.Substring(10, 2)),
                                0);
        }

        public DateTime GetDateValueFromDateString(string DateString)
        {
            return new DateTime(int.Parse(DateString.Substring(4, 4)),
                                int.Parse(DateString.Substring(2, 2)),
                                int.Parse(DateString.Substring(0, 2)),
                                0,
                                0,
                                0);
        }

        public DateTime GetDhmValueFromDhmString8(string DhmString)
        {
            return new DateTime(int.Parse(DhmString.Substring(4, 4)),
                                int.Parse(DhmString.Substring(2, 2)),
                                int.Parse(DhmString.Substring(0, 2)),
                                0, 0, 0);
        }
        //public string GetDhmStringFromDhmValue(DateTime DhmValue)
        //{
        //    return DhmValue.ToString().Replace("/", "").Replace("/", "").Replace(" ", "").Replace(":", "").Replace(":", "");
        //}

        //public string GetDateStringFromDhmValue(DateTime DhmValue)
        //{
        //    return DhmValue.ToString().Replace("/", "").Replace("/", "").Substring(0, 8);
        //}

        public DateTime GetDateTimeFromDhmString8(string DhmString)
        {
            return new DateTime(int.Parse(DhmString.Substring(4, 4)),
                                int.Parse(DhmString.Substring(2, 2)),
                                int.Parse(DhmString.Substring(0, 2)),
                                0, 0, 0);
        }

        public DateTime GetDateValueStartFromDateString(string DateString)
        {
            return new DateTime(int.Parse(DateString.Substring(4, 4)),
                                int.Parse(DateString.Substring(2, 2)),
                                int.Parse(DateString.Substring(0, 2)),
                                0, 0, 0);
        }

        public DateTime GetDateValueStartFromMonthString(string MonthString)
        {
            return new DateTime(int.Parse(MonthString.Substring(2, 4)),
                                int.Parse(MonthString.Substring(0, 2)),
                                1,
                                0, 0, 0);
        }

        //public DateTime GetDhmValueStartFromDateString(string DateString)
        //{
        //    return new DateTime(int.Parse(DateString.Substring(4, 4)),
        //                        int.Parse(DateString.Substring(2, 2)),
        //                        int.Parse(DateString.Substring(0, 2)),
        //                        0, 0, 0);
        //}
        public DateTime GetDateValueEndFromDateString(string DateString)
        {
            return new DateTime(int.Parse(DateString.Substring(4, 4)),
                                int.Parse(DateString.Substring(2, 2)),
                                int.Parse(DateString.Substring(0, 2)),
                                23, 59, 59);
        }

        public DateTime GetDateValueEndFromMonthString(string MonthString)
        {
            return new DateTime(int.Parse(MonthString.Substring(2, 4)),
                                int.Parse(MonthString.Substring(0, 2)),
                                0,
                                0, 0, 0).AddMonths(1).AddDays(-1);
        }

        //public DateTime GetDhmValueEndFromDateString(string DateString)
        //{
        //    return new DateTime(int.Parse(DateString.Substring(4, 4)),
        //                        int.Parse(DateString.Substring(2, 2)),
        //                        int.Parse(DateString.Substring(0, 2)),
        //                        23, 59, 59);
        //}


        //Oracle
        public string DateStringOracleFromDhmValue(DateTime DhmValue)
        {
            string DateString = DhmValue.ToString().Replace("/", "").Replace("/", "").Substring(0, 8);

            return DateString.Substring(0, 2) + "-" + DateString.Substring(2, 2) + "-" + DateString.Substring(4, 4);


        }
    }    
}