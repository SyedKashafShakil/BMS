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
    
    public partial class ADM_DAILY_KIBOR
    {
        public decimal CODE { get; set; }
        public Nullable<System.DateTime> RATE_DATE { get; set; }
        public Nullable<decimal> WEEK_1 { get; set; }
        public Nullable<decimal> WEEK_2 { get; set; }
        public Nullable<decimal> RATE_1 { get; set; }
        public Nullable<decimal> RATE_3 { get; set; }
        public Nullable<decimal> RATE_6 { get; set; }
        public Nullable<decimal> RATE_9 { get; set; }
        public Nullable<decimal> RATE_12 { get; set; }
        public Nullable<decimal> RATE_24 { get; set; }
        public Nullable<decimal> RATE_36 { get; set; }
        public string AUTH_STATUS { get; set; }
        public Nullable<System.DateTime> AUTH_DATE { get; set; }
        public Nullable<decimal> AUTH_BY { get; set; }
        public string AUTH_REMARKS { get; set; }
    }
}