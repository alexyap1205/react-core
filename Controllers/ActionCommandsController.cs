using System;
using System.IO;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json.Linq;

namespace react_core.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ActionCommandsController : ControllerBase
    {
        private readonly IHostingEnvironment _env;

        public ActionCommandsController(IHostingEnvironment env)
        {
            _env = env;
        }

        [HttpGet()]
        public JArray Get()
        {
            var json = System.IO.File.ReadAllText(Path.Combine(_env.ContentRootPath,
                "data/RunActionCommands.json"));
            var obj = JArray.Parse(json);
            return obj;
        }
    }
}