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
    
    public partial class dt_ParamFileType
    {
        public string FileTypeId { get; set; }
        public string FileTypeName { get; set; }
        public long pmid { get; set; }
        public string FileExtension { get; set; }
        public int StartLineNumber { get; set; }
        public int DiffLineNumber { get; set; }
        public string Source { get; set; }
        public string PluginId { get; set; }
        public bool IsVirtual { get; set; }
        public bool IsActive { get; set; }
        public string TaskId { get; set; }
        public string LoopName { get; set; }
        public int PurgeInDays { get; set; }
    }
}
