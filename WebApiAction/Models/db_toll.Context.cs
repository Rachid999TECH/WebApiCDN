﻿//------------------------------------------------------------------------------
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
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    
    public partial class DB_A430F9_tollEntities : DbContext
    {
        public DB_A430F9_tollEntities()
            : base("name=DB_A430F9_tollEntities")
        {
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
        public virtual DbSet<dt_HomeUpdate> dt_HomeUpdate { get; set; }
        public virtual DbSet<dt_HomeUpdateEdit> dt_HomeUpdateEdit { get; set; }
        public virtual DbSet<dt_ParamChannels> dt_ParamChannels { get; set; }
        public virtual DbSet<dt_ParamEmergencies> dt_ParamEmergencies { get; set; }
        public virtual DbSet<dt_ParamModules> dt_ParamModules { get; set; }
        public virtual DbSet<dt_ParamPlugins> dt_ParamPlugins { get; set; }
        public virtual DbSet<dt_ParamTeams> dt_ParamTeams { get; set; }
        public virtual DbSet<dt_TaskTeams> dt_TaskTeams { get; set; }
        public virtual DbSet<dt_TeamMembers> dt_TeamMembers { get; set; }
        public virtual DbSet<dt_Profils> dt_Profils { get; set; }
        public virtual DbSet<dt_ParamUpdateStatus> dt_ParamUpdateStatus { get; set; }
        public virtual DbSet<AspNetUserRoles> AspNetUserRoles { get; set; }
        public virtual DbSet<AspNetRoles> AspNetRoles { get; set; }
        public virtual DbSet<dt_CommVersions> dt_CommVersions { get; set; }
        public virtual DbSet<dt_CertFilePlan> dt_CertFilePlan { get; set; }
        public virtual DbSet<dt_Stations> dt_Stations { get; set; }
        public virtual DbSet<dt_LS> dt_LS { get; set; }
        public virtual DbSet<dt_ParamLanes> dt_ParamLanes { get; set; }
        public virtual DbSet<dt_Mp> dt_Mp { get; set; }
        public virtual DbSet<dt_ParamCategories> dt_ParamCategories { get; set; }
        public virtual DbSet<dt_ParamFileType> dt_ParamFileType { get; set; }
        public virtual DbSet<dt_Sites> dt_Sites { get; set; }
        public virtual DbSet<dt_QualifTrxLane> dt_QualifTrxLane { get; set; }
        public virtual DbSet<dt_ParamProducts> dt_ParamProducts { get; set; }
        public virtual DbSet<dt_CertTrxLaneInterface> dt_CertTrxLaneInterface { get; set; }
        public virtual DbSet<dt_CertCtrTrx> dt_CertCtrTrx { get; set; }
        public virtual DbSet<dt_AdminUserNotifications> dt_AdminUserNotifications { get; set; }
        public virtual DbSet<AspNetUsers> AspNetUsers { get; set; }
        public virtual DbSet<dt_ParamThreads> dt_ParamThreads { get; set; }
    }
}
