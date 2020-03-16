using BMS.Models;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace BMS.Controllers
{
    public class DefBankController : Controller
    {
        string connectionstring = "data source=SQLDB;initial catalog=BMS;persist security info=True;user id=dev;password=dev123;MultipleActiveResultSets=True;App=EntityFramework";
        BMSEntities db = new BMSEntities();
        // GET: DefBank
        public ActionResult Index()
        {
            return View();
        }
        public JsonResult List()
        {

            return Json(db.ADM_DEF_BANK.ToList(), JsonRequestBehavior.AllowGet);
        }

        public JsonResult getbyID(int ID)
        {

            var Client = db.ADM_DEF_BANK.ToList().Find(x => x.CODE.Equals(ID));
            return Json(Client, JsonRequestBehavior.AllowGet);
        }
        public JsonResult Add(ADM_DEF_BANK bnkObj)
        {
            SqlConnection con = new SqlConnection(connectionstring);
            SqlCommand cmd = new SqlCommand("",con);
            cmd.CommandText = "SELECT MAX(CODE) FROM ADM_DEF_BANK";
            con.Open();
            var code = Convert.ToInt32(cmd.ExecuteScalar());
            con.Close();
            code = code + 1;
            bnkObj.CODE = code;
            db.ADM_DEF_BANK.Add(bnkObj);
            db.SaveChanges();
            return Json(JsonRequestBehavior.AllowGet);
        }

        public JsonResult Update(ADM_DEF_BANK bank)
        {
            ADM_DEF_BANK def = db.ADM_DEF_BANK.Find(bank.CODE);
            def.CODE = bank.CODE;
            def.DESC = bank.DESC;
            def.EMAIL = bank.EMAIL;
            def.ABRV = bank.ABRV;
            def.ADD = bank.ADD;
            def.AUTH_BY = bank.AUTH_BY;
            def.AUTH_DATE = bank.AUTH_DATE;
            def.AUTH_REMARKS = bank.AUTH_REMARKS;
            def.AUTH_STATUS = bank.AUTH_STATUS;
            def.BAL_REF_CODE = bank.BAL_REF_CODE;
            def.FBL_REF_CODE = bank.FBL_REF_CODE;
            def.TRF_REF_CODE = bank.TRF_REF_CODE;
            def.INACTIVE_IMS = bank.INACTIVE_IMS;
            def.INACTIVE_LMS = bank.INACTIVE_LMS;
            def.INACTIVE_MFL = bank.INACTIVE_MFL;
            def.UAN = bank.UAN;
            db.SaveChanges();

            return Json(JsonRequestBehavior.AllowGet);
        }

        public JsonResult Delete(ADM_DEF_BANK bnk)
        {
            ADM_DEF_BANK data = db.ADM_DEF_BANK.Find(bnk.CODE);
            db.ADM_DEF_BANK.Remove(data);
            db.SaveChanges();
            return Json(JsonRequestBehavior.AllowGet);
        }
        public JsonResult Forward(int id)
        {
            SqlConnection con = new SqlConnection(connectionstring);
            SqlCommand cmd = new SqlCommand("", con);
            cmd.CommandText = "SELECT MIN(CODE) FROM ADM_DEF_BANK WHERE CODE >" + id;
            con.Open();
            var code = cmd.ExecuteScalar();
            if (code == DBNull.Value || Convert.ToInt32(code) == 0)
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
            cmd.CommandText = "SELECT MAX(CODE) FROM ADM_DEF_BANK WHERE CODE <" + id;
            con.Open();
            var code = cmd.ExecuteScalar();
            if (code == DBNull.Value || Convert.ToInt32(code) == 0)
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
            cmd.CommandText = "SELECT MIN(CODE) FROM ADM_DEF_BANK";
            con.Open();
            var code = cmd.ExecuteScalar();
            if (code == DBNull.Value || Convert.ToInt32(code) == 0)
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
            cmd.CommandText = "SELECT MAX(CODE) FROM ADM_DEF_BANK";
            con.Open();
            var code = cmd.ExecuteScalar();
            if (code == DBNull.Value || Convert.ToInt32(code) == 0)
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