using Microsoft.AspNetCore.Mvc;
using System.Data;
using System.Reflection.Metadata.Ecma335;
using users_management.Models;
using users_management.Services;

namespace users_management.Controllers
{
    

    [ApiController]
    [Route("[controller]")]
    public class UsersController : ControllerBase
    {

        private readonly IConfiguration _configuration;

        public UsersController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        private readonly UsersService usersService = new UsersService();


        [HttpGet]
        public JsonResult Get()
        {
            return usersService.GetUsers(connectionString: _configuration.GetConnectionString("Default"));
        }

        [HttpPost]
        public JsonResult Post([FromBody] string username)
        {
            return usersService.CreateUser(connectionString: _configuration.GetConnectionString("Default"), username);
        }
    }
}