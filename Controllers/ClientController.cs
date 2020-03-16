using BMS.Models;
using BMS.ViewModels;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using PagedList.Mvc;
using PagedList;

namespace BMS.Controllers
{
    public class ClientController : Controller
    {
        
        BMSEntities db = new BMSEntities();
        string connectionstring = "data source=SQLDB;initial catalog=BMS;persist security info=True;user id=dev;password=dev123;MultipleActiveResultSets=True;App=EntityFramework";
        // GET: Client
        public ActionResult Index()
        {

            return View();
        }

   
        public JsonResult List()
        {
            int? fetch = 1;
            var data = db.CDD_CLIENT.ToList().ToPagedList(fetch ?? 1, 12);
            return Json(data, JsonRequestBehavior.AllowGet);
        }

        public JsonResult PageFwd(Client_Master_Con_VM client_Master_Con_VM)
        {
            int? fetch = Convert.ToInt32(client_Master_Con_VM.PAGINATION_CODE);
            fetch += 1;
            if (fetch <= 0)
            {
                fetch = 1;
                client_Master_Con_VM.PAGINATION_CODE = 1;
            }
            var data = db.CDD_CLIENT.ToList().ToPagedList(fetch ?? 1, 12);
            return Json(data, JsonRequestBehavior.AllowGet);
        }

        public JsonResult PageBwd(Client_Master_Con_VM client_Master_Con_VM)
        {
            int? fetch = Convert.ToInt32(client_Master_Con_VM.PAGINATION_CODE);
            fetch -= 1;
            if (fetch <= 0)
            {
                fetch = 1;
                client_Master_Con_VM.PAGINATION_CODE = 1;
            }
            var data = db.CDD_CLIENT.ToList().ToPagedList(fetch ?? 1, 12);
            return Json(data, JsonRequestBehavior.AllowGet);
        }

        public JsonResult ListBank(int ID)
        {
            
            var bank = db.CDD_CLIENT_BANK.ToList().FindAll(x => x.PARTY_CODE.Equals(ID));
            return Json(bank,JsonRequestBehavior.AllowGet);
        }
        public JsonResult ListCon(int ID)
        {
            var innerJoin = from e in db.CDD_CLIENT
                            join d in db.CDD_CLIENT_CON on e.PARTY_CODE equals d.PARTY_CODE
                            select new { e, d };
            var data =innerJoin.ToList().FindAll(x => x.e.PARTY_CODE.Equals(ID));

            var con = db.CDD_CLIENT_CON.ToList().FindAll(x => x.PARTY_CODE.Equals(ID));
            return Json(con.ToList(), JsonRequestBehavior.AllowGet);
        }

        public JsonResult ListNational(int ID)
        {

            var national = db.CDD_CLIENT_NATIONAL.ToList().FindAll(x => x.PARTY_CODE.Equals(ID));
            return Json(national, JsonRequestBehavior.AllowGet);
        }

        public JsonResult getbyID(int ID)
        {

            var Client = db.CDD_CLIENT.ToList().Find(x => x.PARTY_CODE.Equals(ID));
            return Json(Client, JsonRequestBehavior.AllowGet);
        }

        public JsonResult getClientType()
        {
            var client = from c in db.ADM_DEF_CLIENT_TYPE select new { c.CODE, c.TYPE };
            return Json(client.ToList(),JsonRequestBehavior.AllowGet);
        }

        public JsonResult getTitleType()
        {
            var title = from c in db.ADM_DEF_TITLE select new { c.CODE, c.DESC };
            return Json(title.ToList(), JsonRequestBehavior.AllowGet);
        }

        public JsonResult getMaritalType()
        {
            var marital = from c in db.ADM_DEF_MARITAL select new { c.CODE, c.DESC };
            return Json(marital.ToList(), JsonRequestBehavior.AllowGet);
        }

        public JsonResult getOccupationType()
        {
            var occ = from c in db.ADM_DEF_OCCUP select new { c.CODE, c.DESC };
            return Json(occ.ToList(), JsonRequestBehavior.AllowGet);
        }

        public JsonResult getCityType()
        {
            var city = from c in db.ADM_DEF_CITY select new { c.CODE, c.DESC };
            return Json(city.ToList(), JsonRequestBehavior.AllowGet);
        }

        public JsonResult getNationalType()
        {
            var na = from c in db.ADM_DEF_NATIONAL select new { c.CODE, c.DESC };
            return Json(na.ToList(), JsonRequestBehavior.AllowGet);
        }
        public JsonResult getEduType()
        {
            var edu = from c in db.ADM_DEF_EDU select new { c.CODE, c.DESC };
            return Json(edu.ToList(), JsonRequestBehavior.AllowGet);
        }

        public JsonResult getCountryType()
        {
            var cou = from c in db.ADM_DEF_COUNTRY select new { c.CODE, c.DESC };
            return Json(cou.ToList(), JsonRequestBehavior.AllowGet);
        }

        public JsonResult getDocType()
        {
            var doc = from c in db.ADM_DEF_DOC_TYPE select new { c.CODE, c.DESC };
            return Json(doc.ToList(), JsonRequestBehavior.AllowGet);
        }

        public JsonResult getBranchDetail()
        {
            var doc = from c in db.ADM_DEF_BRANCH select new { c.CODE, c.DESC };
            return Json(doc.ToList(), JsonRequestBehavior.AllowGet);
        }

        public JsonResult getRelationDetail()
        {
            var doc = from c in db.ADM_DEF_REL select new { c.CODE, c.DESC };
            return Json(doc.ToList(), JsonRequestBehavior.AllowGet);
        }

        public JsonResult AddBank(CDD_CLIENT_BANK bank)
        {
            SqlConnection con = new SqlConnection(connectionstring);
            SqlCommand bankcmd = new SqlCommand("", con);
            bankcmd.CommandText = "select MAX(CODE) from CDD_CLIENT_BANK";
            con.Open();
            var code =Convert.ToInt32( bankcmd.ExecuteScalar());
            con.Close();
            SqlCommand bankcmd1 = new SqlCommand("", con);
            bankcmd1.CommandText = "select MAX(DD_CODE) from CDD_CLIENT_BANK where PARTY_CODE ="+bank.PARTY_CODE;
            con.Open();
            var ddcode =Convert.ToInt32( bankcmd.ExecuteScalar());
            con.Close();
            ddcode = ddcode + 1;
            code = code + 1;
            bank.CODE = code;
            bank.DD_CODE = ddcode;
            db.CDD_CLIENT_BANK.Add(bank);
            db.SaveChanges();
            SqlConnection set = new SqlConnection(connectionstring);
            SqlCommand setcom = new SqlCommand("",con);
            SqlCommand setco = new SqlCommand("", con);
            setcom.CommandText = "DECLARE @ID DECIMAL(38)=0 UPDATE CDD_CLIENT_BANK SET @ID = DD_CODE = @ID + 1 where PARTY_CODE = "+bank.PARTY_CODE;
            setco.CommandText = "DECLARE @ID DECIMAL(38)=0 UPDATE CDD_CLIENT_BANK SET @ID = CODE = @ID + 1";
            con.Open();
            setcom.ExecuteScalar();
            setco.ExecuteScalar();
            con.Close();
            return Json(JsonRequestBehavior.AllowGet);
        }

        public JsonResult Forward(int id)
        {
            SqlConnection con = new SqlConnection(connectionstring);
            SqlCommand cmd = new SqlCommand("", con);
            cmd.CommandText = "SELECT MIN(PARTY_CODE) FROM CDD_CLIENT WHERE PARTY_CODE >" + id;
            con.Open();
            var code = cmd.ExecuteScalar();
            if (code == DBNull.Value)
            {
                code = id;
            }

            con.Close();
            code = Convert.ToInt32(code);
            code = Convert.ToDecimal(code);
            return Json(code, JsonRequestBehavior.AllowGet);
        }

        public JsonResult Backward(int id)
        {
            SqlConnection con = new SqlConnection(connectionstring);
            SqlCommand cmd = new SqlCommand("", con);
            cmd.CommandText = "SELECT MAX(PARTY_CODE) FROM CDD_CLIENT WHERE PARTY_CODE <" + id;
            con.Open();
            var code = cmd.ExecuteScalar();
            if (code == DBNull.Value)
            {
                code = id;
            }

            con.Close();
            code = Convert.ToInt32(code);
            code = Convert.ToDecimal(code);
            return Json(code, JsonRequestBehavior.AllowGet);
        }
        public JsonResult First(int id)
        {
            SqlConnection con = new SqlConnection(connectionstring);
            SqlCommand cmd = new SqlCommand("", con);
            cmd.CommandText = "SELECT MIN(PARTY_CODE) FROM CDD_CLIENT";
            con.Open();
            var code = cmd.ExecuteScalar();
            if (code == DBNull.Value)
            {
                code = id;
            }

            con.Close();
            code = Convert.ToInt32(code);
            code = Convert.ToDecimal(code);
            return Json(code, JsonRequestBehavior.AllowGet);
        }
        public JsonResult Last(int id)
        {
            SqlConnection con = new SqlConnection(connectionstring);
            SqlCommand cmd = new SqlCommand("", con);
            cmd.CommandText = "SELECT MAX(PARTY_CODE) FROM CDD_CLIENT";
            con.Open();
            var code = cmd.ExecuteScalar();
            if (code == DBNull.Value)
            {
                code = id;
            }

            con.Close();
            code = Convert.ToInt32(code);
            code = Convert.ToDecimal(code);
            return Json(code, JsonRequestBehavior.AllowGet);
        }
    }
}
