using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using WebE_Book.Models;
using System.Data.SqlClient;
using System.Data;

namespace WebE_Book.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RegistrationController : ControllerBase
    {
        private readonly IConfiguration configuration;
        public RegistrationController(IConfiguration _configuration)
        {
            _configuration = configuration;
        }

        [HttpPost]
        [Route("registration")]

        public string registration(Registration registration)
        {

            SqlConnection con = new SqlConnection(configuration.GetConnectionString("BookSHopCon").ToString());


            SqlCommand cmd = new SqlCommand("INSERT INTO Registration (UserName, Password, Email, IsActive) VALUES (@UserName, @Password, @Email, @IsActive)", con);


            cmd.Parameters.AddWithValue("@UserName", registration.UserName);
            cmd.Parameters.AddWithValue("@Password", registration.Password);
            cmd.Parameters.AddWithValue("@Email", registration.Email);
            cmd.Parameters.AddWithValue("@IsActive", registration.IsActive);


            con.Open();
            int i = cmd.ExecuteNonQuery();
            con.Close();

            if (i > 0)
            {
                return "Data inserted";
            }
            else
            {
                return "Error";
            }
        }

        [HttpPost]
        [Route("login")]
        public string Login(Registration registration)
        {
            // Corrected the SQL query syntax and added proper command execution
            using (SqlConnection con = new SqlConnection(configuration.GetConnectionString("ToysCon").ToString()))
            {
                string query = "SELECT * FROM Registration WHERE Email = @Email AND Password = @Password";
                SqlDataAdapter da = new SqlDataAdapter(query, con);
                da.SelectCommand.Parameters.AddWithValue("@Email", registration.Email);
                da.SelectCommand.Parameters.AddWithValue("@Password", registration.Password);

                DataTable dt = new DataTable();
                da.Fill(dt);

                if (dt.Rows.Count > 0)
                {
                    return "User authenticated successfully";
                }
                else
                {
                    return "Invalid User";
                }
            }
        }

        }
    }
