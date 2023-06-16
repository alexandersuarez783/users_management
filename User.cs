using System.Reflection.Metadata;

namespace users_management
{
    public class User
    {
        public int Id { get; set; }
        public string Username { get; set; }

        public User(string username) {
            Username = username;
        }
    }
}
