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
    
    public partial class CDD_CLIENT_NATIONAL
    {
        public decimal PARTY_CODE { get; set; }
        public decimal DD_CODE { get; set; }
        public decimal CODE { get; set; }
        public Nullable<decimal> COUNTRY_CODE { get; set; }
        public Nullable<decimal> ORIGIN { get; set; }
        public string CNIC { get; set; }
        public Nullable<System.DateTime> CNIC_EXPIRY { get; set; }
        public string NTN { get; set; }
        public Nullable<decimal> TAX_STATUS { get; set; }
        public Nullable<System.DateTime> TAX_FILE_DATE { get; set; }
        public string COMMENTS { get; set; }
    }
}
