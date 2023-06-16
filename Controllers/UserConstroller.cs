using Microsoft.AspNetCore.Mvc;

namespace users_management.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserConstroller : ControllerBase
    {
        private static readonly IEnumerable<User> Users = new[]
        {
            new User("hayase"),
            new User("cassandra")
        };


        [HttpGet]
        public List<User> Get()
        {
            return Users.ToList();
    }
    }


}
