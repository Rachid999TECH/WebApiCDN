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
    
    public partial class dt_ParamProducts
    {
        public int ProductId { get; set; }
        public string SerialNumber { get; set; }
        public string BillingId { get; set; }
        public Nullable<System.DateTime> DhmExpiration { get; set; }
        public string ClientCode { get; set; }
        public string ClientCategory { get; set; }
        public string ClientName { get; set; }
        public string ClientPhone { get; set; }
        public string Identifiant { get; set; }
        public string IdentifiantType { get; set; }
        public string ProductTypeCode { get; set; }
        public string Email { get; set; }
        public int ObsTickIdPCount { get; set; }
        public int ObsTickIdDCount { get; set; }
        public int ObsTickIdICount { get; set; }
        public int ObsMpId26Count { get; set; }
        public System.DateTime DhmUpdate { get; set; }
        public System.DateTime ObsTickIdPLastQualifDate { get; set; }
        public System.DateTime ObsTickIdDLastQualifDate { get; set; }
        public System.DateTime ObsTickIdPDhmUpdate { get; set; }
        public System.DateTime ObsTickIdDDhmUpdate { get; set; }
        public string TagStatus { get; set; }
        public string MpName { get; set; }
        public double Sold { get; set; }
        public int ObsTickIdDCount01 { get; set; }
        public int ObsTickIdDCount02 { get; set; }
    }
}