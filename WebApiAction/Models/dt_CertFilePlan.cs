//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace WebApiAction.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class dt_CertFilePlan
    {
        public int CertFilePlanId { get; set; }
        public System.DateTime DhmCreation { get; set; }
        public System.DateTime DhmPlan { get; set; }
        public System.DateTime DhmModification { get; set; }
        public string Source { get; set; }
        public bool IsRunning { get; set; }
        public bool IsEveryDay { get; set; }
        public string FileTypeId { get; set; }
        public string SiteId { get; set; }
        public string BagContainerId { get; set; }
        public string StationNumber { get; set; }
        public string LaneName { get; set; }
        public string PdvId { get; set; }
        public string UserId { get; set; }
        public string LSId { get; set; }
        public System.DateTime DhmValueStart { get; set; }
        public System.DateTime DhmValueEnd { get; set; }
        public string CertFileId { get; set; }
        public bool IsPlanned { get; set; }
        public string TaskId { get; set; }
        public bool IsTrxLane { get; set; }
        public string BillingId { get; set; }
        public string CategoryId { get; set; }
        public bool IsFinnished { get; set; }
        public bool IsCron { get; set; }
        public bool IsEveryHour { get; set; }
        public int AddDaysStart { get; set; }
        public int AddDaysEnd { get; set; }
        public int ThreadTotal { get; set; }
        public string ServerPort { get; set; }
        public int ThreadDone { get; set; }
        public int LinesNumber { get; set; }
        public int CurrentLineNumber { get; set; }
    }
}