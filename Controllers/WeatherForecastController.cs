using Microsoft.AspNetCore.Mvc;
using System.Reflection.Metadata.Ecma335;

namespace users_management.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UsersController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
        "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
    };

        private readonly ILogger<UsersController> _logger;


        [HttpGet]
        public int Get()
        {
            return 23;
        }
    }
}