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
    
    public partial class dt_LS
    {
        public string LSId { get; set; }
        public string SiteId { get; set; }
        public string LSName { get; set; }
        public long pmid { get; set; }
        public string IpAddressP { get; set; }
        public string IpAddressR { get; set; }
        public string IpAddressOpe { get; set; }
        public string IpAddressRed { get; set; }
        public bool IsVirtual { get; set; }
        public string UserIdOpe { get; set; }
        public string PasswordOpe { get; set; }
        public string CexId { get; set; }
        public string RegionId { get; set; }
        public int LSOrder { get; set; }
        public bool IsPrincipal { get; set; }
        public bool IsActive { get; set; }
        public int ZipLenght { get; set; }
        public bool IsActiveMode { get; set; }
        public bool IsActiveModeR { get; set; }
        public string AxleId { get; set; }
    
        public virtual dt_Sites dt_Sites { get; set; }
    }
}
