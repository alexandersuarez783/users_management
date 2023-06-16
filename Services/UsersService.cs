using System.Reflection.Metadata.Ecma335;
using users_management.Models;
using System.Data.SqlClient;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using System.Data;
using MySqlConnector;

namespace users_management.Services
{
    public class UsersService
    {   
         
        internal JsonResult GetUsers(string connectionString)
        {
            var users = new List<User>();
            string queryString = @"SELECT id, username FROM user;";
            using var connection = new MySqlConnection(connectionString);

            connection.Open();
            using var command = connection.CreateCommand();
            command.CommandText = queryString;

            var reader = command.ExecuteReader();

            while (reader.Read())
            {
                var id = reader.GetInt32("id");
                var username = reader.GetString("username");
                users.Add(new User(id, username));
            }
            return new JsonResult(users);
        }

        internal JsonResult CreateUser(string connectionString, string username)
        {
            DataTable result = new DataTable();
            string queryString = @"INSERT INTO user(username) values (@username)";

            using var connection = new MySqlConnection(connectionString);

            connection.Open();
            using var command = connection.CreateCommand();
            command.CommandText = queryString;
            command.Parameters.AddWithValue("@username", username);

            var reader = command.ExecuteReader();
            result.Load(reader);
            return new JsonResult(result);

        }
    }
}
