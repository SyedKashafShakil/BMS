﻿using BMS.Models;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace BMS.Controllers
{
    public class DefGroupController : Controller
    {
        string connectionstring = "data source=SQLDB;initial catalog=BMS;persist security info=True;user id=dev;password=dev123;MultipleActiveResultSets=True;App=EntityFramework";
        BMSEntities db = new BMSEntities();
        // GET: DefGroup
        public ActionResult Index()
        {
            return View();
        }
        public JsonResult List()
        {

            return Json(db.ADM_DEF_GROUP.ToList(), JsonRequestBehavior.AllowGet);
        }

        public JsonResult getbyID(int ID)
        {

            var Client = db.ADM_DEF_GROUP.ToList().Find(x => x.CODE.Equals(ID));
            return Json(Client, JsonRequestBehavior.AllowGet);
        }
        public JsonResult Add(ADM_DEF_GROUP bnkObj)
        {
            SqlConnection con = new SqlConnection(connectionstring);
            SqlCommand cmd = new SqlCommand("", con);
            cmd.CommandText = "SELECT MAX(CODE) FROM ADM_DEF_GROUP";
            con.Open();
            var code = cmd.ExecuteScalar();
            if (code == DBNull.Value)
            {
                code = 0;
            }

            con.Close();
            code = Convert.ToInt32(code) + 1;
            bnkObj.CODE = Convert.ToDecimal(code);
            db.ADM_DEF_GROUP.Add(bnkObj);
            db.SaveChanges();
            return Json(JsonRequestBehavior.AllowGet);
        }

        public JsonResult Update(ADM_DEF_GROUP bank)
        {
            ADM_DEF_GROUP def = db.ADM_DEF_GROUP.Find(bank.CODE);
            def.CODE = bank.CODE;
            def.DESC = bank.DESC;
            def.REL_DATE = bank.REL_DATE;
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

        public JsonResult Delete(ADM_DEF_GROUP bnk)
        {
            ADM_DEF_GROUP data = db.ADM_DEF_GROUP.Find(bnk.CODE);
            db.ADM_DEF_GROUP.Remove(data);
            db.SaveChanges();
            return Json(JsonRequestBehavior.AllowGet);
        }
    }
}