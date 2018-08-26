using System.IO;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json.Linq;

namespace react_core.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TriggerEventsController : ControllerBase
    {
        private readonly IHostingEnvironment _env;

        public TriggerEventsController(IHostingEnvironment env)
        {
            _env = env;
        }

        // GET: api/TriggerEvents
        [HttpGet]
        public JArray Get()
        {
            var json = System.IO.File.ReadAllText(Path.Combine(_env.ContentRootPath,
                "data/TriggerEvents.json"));
            var obj = JArray.Parse(json);
            return obj;
        }
    }
}
