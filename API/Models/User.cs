using PasswordEncryption.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using System.Security.Cryptography;
using System.Text;
using System.ComponentModel.DataAnnotations.Schema;

namespace PasswordEncryption
{
    public class User
    {
        
        public int Id;
        [Key]
        public string UserName { get; set; }
        private string _Password;
        public string Password
        {
            get { return _Password; }
            set
            {
                using (MD5 md5Hash = MD5.Create())
                {
                    byte[] data = md5Hash.ComputeHash(Encoding.UTF8.GetBytes(value));

                    StringBuilder sBuilder = new StringBuilder();

                    for (int i = 0; i < data.Length; i++)
                    {
                        sBuilder.Append(data[i].ToString("x2"));
                    }
                    _Password = sBuilder.ToString();
                }
            }
        }
    }


}

