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
    
    public partial class dt_CommVersions
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public dt_CommVersions()
        {
            this.dt_HomeUpdate = new HashSet<dt_HomeUpdate>();
        }
    
        public int VersionId { get; set; }
        public string VersionNumber { get; set; }
        public string Description { get; set; }
        public System.DateTime DhmModification { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<dt_HomeUpdate> dt_HomeUpdate { get; set; }
    }
}
