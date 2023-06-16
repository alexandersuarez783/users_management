using Microsoft.AspNetCore.Mvc;
using System.Reflection.Metadata;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace users_management.Models
{
    public class User
    {
        [JsonPropertyName("id")]
        [BindProperty]
        public int Id { get; set; }

        [JsonPropertyName("username")]
        [BindProperty]
        public string Username { get; set; }

        public User(int id, string username)
        {
            Id = id;
            Username = username;
        }

        public override string ToString()
        {
            return JsonSerializer.Serialize(this);
        }
    }
}
