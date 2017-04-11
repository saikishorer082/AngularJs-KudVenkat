using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;
using System.Data;
using System.Data.SqlClient;
using System.Web.Script.Serialization;
using System.Configuration;
using Angular;

namespace Angular
{
    [WebService]
    public class EmployeeService : System.Web.Services.WebService
    {

        [WebMethod]
        public void GetAllEmployees()
        {
            List<Employees> employee = new List<Employees>();
            string cs = ConfigurationManager.ConnectionStrings["cs1"].ConnectionString;
            SqlConnection cn = new SqlConnection(cs);
            cn.Open();
            SqlCommand cmd = new SqlCommand("select * from tblEmployee", cn);
            SqlDataReader dr = cmd.ExecuteReader();

            while(dr.Read())
            {
                Employees e = new Employees();
                e.eid = Convert.ToInt32(dr["eid"]);
                e.ename = dr["ename"].ToString();
                e.erole = dr["erole"].ToString();
                e.esalary = dr["esalary"].ToString();
                employee.Add(e);
            }
            JavaScriptSerializer js = new JavaScriptSerializer();
            Context.Response.Write(js.Serialize(employee));
        }
    }
}
