using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;
using System.Web.Script.Serialization;

namespace services
{
    [WebService]
    public class person1 : System.Web.Services.WebService
    {
        kishoreDBDataContext db = new kishoreDBDataContext();
        JavaScriptSerializer js = new JavaScriptSerializer();
        [WebMethod]
        public void personName()
        {
            var query = from persons in db.people select persons;
            Context.Response.Write(js.Serialize(query));
        }
        [WebMethod]
        public void personDetails(int pid)
        {
            var query = from person in db.people where (person.pid==pid) select person ;
            Context.Response.Write(js.Serialize(query));
        }
        [WebMethod]
        public void personDetailsByName(string pname)
        {
            var query = from person in db.people where (person.pname.Contains(pname)) select person;
            Context.Response.Write(js.Serialize(query));
        }
        [WebMethod]
        public void GetPersonTotals()
        {
            personTotals totals = new personTotals();
            var q1 = (from person in db.people select person).Count();
            var qm = (from person in db.people where person.gender=="male" select person).Count();
            //var query = from person in db.people group person by person.gender into grouping select new { key = grouping.Key, Count = grouping.Count() };
            var qf = (from person in db.people where person.gender == "female" select person).Count();
            totals.total = q1;
            totals.males = qm;
            totals.females = qf;
            Context.Response.Write(js.Serialize(totals));
        }
    }
}
