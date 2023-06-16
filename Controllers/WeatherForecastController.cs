using Microsoft.AspNetCore.Mvc;
using System.Reflection.Metadata.Ecma335;

namespace users_management.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UsersController : ControllerBase
    {
        private static readonly IEnumerable<User> UserList = new[]
        {
            new User("hayase"),
            new User("cassandra")
        };


        [HttpGet]
        public List<User> Get()
        {
            return UserList.ToList();
        }
    }
}