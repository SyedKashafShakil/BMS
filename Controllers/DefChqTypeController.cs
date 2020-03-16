using BMS.Models;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace BMS.Controllers
{
    public class DefChqTypeController : Controller
    {
        string connectionstring = "data source=SQLDB;initial catalog=BMS;persist security info=True;user id=dev;password=dev123;MultipleActiveResultSets=True;App=EntityFramework";
        BMSEntities db = new BMSEntities();
        // GET: DefChqType
        public ActionResult Index()
        {
            return View();
        }
        public JsonResult List()
        {

            return Json(db.ADM_DEF_CHQ_TYPE.ToList(), JsonRequestBehavior.AllowGet);
        }

        public JsonResult getbyID(int ID)
        {

            var Client = db.ADM_DEF_CHQ_TYPE.ToList().Find(x => x.CODE.Equals(ID));
            return Json(Client, JsonRequestBehavior.AllowGet);
        }
        public JsonResult Add(ADM_DEF_CHQ_TYPE bnkObj)
        {
            SqlConnection con = new SqlConnection(connectionstring);
            SqlCommand cmd = new SqlCommand("", con);
            cmd.CommandText = "SELECT MAX(CODE) FROM ADM_DEF_CHQ_TYPE";
            con.Open();
            var code = cmd.ExecuteScalar();
            if (code == DBNull.Value)
            {
                code = 0;
            }

            con.Close();
            code = Convert.ToInt32(code) + 1;
            bnkObj.CODE = Convert.ToDecimal(code);
            db.ADM_DEF_CHQ_TYPE.Add(bnkObj);
            db.SaveChanges();
            return Json(JsonRequestBehavior.AllowGet);
        }

        public JsonResult Update(ADM_DEF_CHQ_TYPE bank)
        {
            ADM_DEF_CHQ_TYPE def = db.ADM_DEF_CHQ_TYPE.Find(bank.CODE);
            def.CODE = bank.CODE;
            def.DESC = bank.DESC;
            def.PAY_MODE = bank.PAY_MODE;
            def.CHQ_FROM = bank.CHQ_FROM;
            def.CHQ_TO = bank.CHQ_TO;
            def.AUTH_BY = bank.AUTH_BY;
            def.AUTH_DATE = bank.AUTH_DATE;
            def.AUTH_REMARKS = bank.AUTH_REMARKS;
            def.AUTH_STATUS = bank.AUTH_STATUS;
            def.INACTIVE_IMS = bank.INACTIVE_IMS;
            def.INACTIVE_LMS = bank.INACTIVE_LMS;
            def.INACTIVE_MFL = bank.INACTIVE_MFL;
            db.SaveChanges();

            return Json(JsonRequestBehavior.AllowGet);
        }

        public JsonResult Delete(ADM_DEF_CHQ_TYPE bnk)
        {
            ADM_DEF_CHQ_TYPE data = db.ADM_DEF_CHQ_TYPE.Find(bnk.CODE);
            db.ADM_DEF_CHQ_TYPE.Remove(data);
            db.SaveChanges();
            return Json(JsonRequestBehavior.AllowGet);
        }

        public JsonResult Forward(int id)
        {
            SqlConnection con = new SqlConnection(connectionstring);
            SqlCommand cmd = new SqlCommand("", con);
            cmd.CommandText = "SELECT MIN(CODE) FROM ADM_DEF_CHQ_TYPE WHERE CODE >" + id;
            con.Open();
            var code = cmd.ExecuteScalar();
            if (code == DBNull.Value || Convert.ToInt32(code)== 0)
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
            cmd.CommandText = "SELECT MAX(CODE) FROM ADM_DEF_CHQ_TYPE WHERE CODE <" + id;
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
            cmd.CommandText = "SELECT MIN(CODE) FROM ADM_DEF_CHQ_TYPE";
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
            cmd.CommandText = "SELECT MAX(CODE) FROM ADM_DEF_CHQ_TYPE";
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