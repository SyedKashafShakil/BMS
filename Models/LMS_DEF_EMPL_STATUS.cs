//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace BMS.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class LMS_DEF_EMPL_STATUS
    {
        public decimal CODE { get; set; }
        public string DESC { get; set; }
        public string AUTH_STATUS { get; set; }
        public Nullable<System.DateTime> AUTH_DATE { get; set; }
        public Nullable<decimal> AUTH_BY { get; set; }
        public string AUTH_REMARKS { get; set; }
        public Nullable<decimal> INACTIVE_lMS { get; set; }
        public Nullable<decimal> INACTIVE_IMS { get; set; }
        public Nullable<decimal> INACTIVE_MFL { get; set; }
    }
}
