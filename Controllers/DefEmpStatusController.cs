﻿using BMS.Models;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace BMS.Controllers
{
    public class DefEmpStatusController : Controller
    {
        string connectionstring = "data source=SQLDB;initial catalog=BMS;persist security info=True;user id=dev;password=dev123;MultipleActiveResultSets=True;App=EntityFramework";
        BMSEntities db = new BMSEntities();
        // GET: DefEmpStatus
        public ActionResult Index()
        {
            return View();
        }
        public JsonResult List()
        {

            return Json(db.LMS_DEF_EMPL_STATUS.ToList(), JsonRequestBehavior.AllowGet);
        }

        public JsonResult getbyID(int ID)
        {

            var Client = db.LMS_DEF_EMPL_STATUS.ToList().Find(x => x.CODE.Equals(ID));
            return Json(Client, JsonRequestBehavior.AllowGet);
        }
        public JsonResult Add(LMS_DEF_EMPL_STATUS bnkObj)
        {
            SqlConnection con = new SqlConnection(connectionstring);
            SqlCommand cmd = new SqlCommand("", con);
            cmd.CommandText = "SELECT MAX(CODE) FROM LMS_DEF_EMPL_STATUS";
            con.Open();
            var code = cmd.ExecuteScalar();
            if (code == DBNull.Value)
            {
                code = 0;
            }

            con.Close();
            code = Convert.ToInt32(code) + 1;
            bnkObj.CODE = Convert.ToDecimal(code);
            db.LMS_DEF_EMPL_STATUS.Add(bnkObj);
            db.SaveChanges();
            return Json(JsonRequestBehavior.AllowGet);
        }

        public JsonResult Update(LMS_DEF_EMPL_STATUS bank)
        {
            LMS_DEF_EMPL_STATUS def = db.LMS_DEF_EMPL_STATUS.Find(bank.CODE);
            def.CODE = bank.CODE;
            def.DESC = bank.DESC;
            def.AUTH_BY = bank.AUTH_BY;
            def.AUTH_DATE = bank.AUTH_DATE;
            def.AUTH_REMARKS = bank.AUTH_REMARKS;
            def.AUTH_STATUS = bank.AUTH_STATUS;
            def.INACTIVE_IMS = bank.INACTIVE_IMS;
            def.INACTIVE_lMS = bank.INACTIVE_lMS;
            def.INACTIVE_MFL = bank.INACTIVE_MFL;
            db.SaveChanges();

            return Json(JsonRequestBehavior.AllowGet);
        }

        public JsonResult Delete(LMS_DEF_EMPL_STATUS bnk)
        {
            LMS_DEF_EMPL_STATUS data = db.LMS_DEF_EMPL_STATUS.Find(bnk.CODE);
            db.LMS_DEF_EMPL_STATUS.Remove(data);
            db.SaveChanges();
            return Json(JsonRequestBehavior.AllowGet);
        }
    }
}