using System;
using WebApiAction.Models;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web;
//using System.Collections.Generic;
//using System.Linq;
//using System.Web;
//using System.Web.Mvc;
//using Microsoft.AspNet.Identity;
//using System.Windows.Forms;
//using toll_c.Models;
//using System.Data;
//using System.IO;
//using System.Net.Mail;
//using Newtonsoft.Json;
//using System.Net.Http;
//using System.Net;
//using System.Text;
//using System.Windows.Forms;
//using Microsoft.AspNet.SignalR;


namespace WebApiAction.Controllers
{
    public class TaskController : ApiController
    {
        //DB_A430F9_tollEntities db = new DB_A430F9_tollEntities();
        //DateTimeServices DateTimeServices = new DateTimeServices();
        CommonServices CommonServices = new CommonServices();
        TaskServices TaskServices = new TaskServices();       

       
        //[HttpGet]
        //public IHttpActionResult GetHtmlContent()
        //{
        //    dynamic model = new { Name = "John Doe" }; // Example model to pass to the template

        //    string templatePath = "Path/To/Your/Template.cshtml"; // Replace with the actual path to your CSHTML template

        //    string renderedContent = RenderTemplate(templatePath, model);

        //    IHtmlString htmlString = new HtmlString(renderedContent);

        //    return Ok(new HtmlResponse { HtmlContent = htmlString.ToString() });
        //}
    }
}