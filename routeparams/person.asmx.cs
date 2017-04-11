using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;
using System.Web.Script.Serialization;
using routeparams;
namespace routeparams
{
   
    [WebService]
    public class person : System.Web.Services.WebService
    {
        kishoreDBDataContext db = new kishoreDBDataContext();
        JavaScriptSerializer js = new JavaScriptSerializer();
        [WebMethod]
        public void personName()
        {
            var query = from person in db.people select person;
            Context.Response.Write(js.Serialize(query));
        }
        
    }
}
