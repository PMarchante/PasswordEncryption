using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PasswordEncryption.Models;

namespace PasswordEncryption.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : Controller
    {
        private readonly UserContext _context;

        public UserController(UserContext context)
        {
            _context = context;

            if (_context.Users.Count() == 0)
            {
                _context.Users.Add(new User { UserName = "Fuzzy-Kitty47", Password = "test" });
                _context.Users.Add(new User { UserName = "SoupOrTurtle", Password = "test" });
                _context.Users.Add(new User { UserName = "PotatoesNSyrup", Password = "test" });
                _context.Users.Add(new User { UserName = "OptimalPossum", Password = "test" });
                _context.SaveChangesAsync();
            }
        }

        [HttpGet]
        public async Task<ActionResult<List<User>>> GetUsers()
        {
            return await _context.Users.ToListAsync<User>();
        }

        [HttpPost("login")]
        public async Task<ActionResult<User>> GetSpecificUser(User user)
        {
            try
            {
                var person = await _context.Users.FindAsync(user.UserName);

                if (user.Password == person.Password)
                    return new User { UserName = user.UserName, Password = user.Password };

                else
                    throw new Exception("Passwords do not match");

            }
            catch (Exception e)
            {
                e.ToString();
            }

            return null;
        }

        [HttpPost]
        public async Task<ActionResult<User>> Create(User user)
        {
            if(user.UserName!=""){

            _context.Users.Add(user);
            await _context.SaveChangesAsync();
            }
            return CreatedAtAction(nameof(GetUsers), new { id = user.UserName }, user);
                
        }

        //// POST: User/Create
        //[HttpPost]

        //public ActionResult Create(IFormCollection collection)
        //{
        //    try
        //    {
        //        // TODO: Add insert logic here

        //        return RedirectToAction(nameof(Index));
        //    }
        //    catch
        //    {
        //        return View();
        //    }
        //}

        //// GET: User/Edit/5
        //public ActionResult Edit(int id)
        //{
        //    return View();
        //}

        //// POST: User/Edit/5
        //[HttpPost]

        //public ActionResult Edit(int id, IFormCollection collection)
        //{
        //    try
        //    {
        //        // TODO: Add update logic here

        //        return RedirectToAction(nameof(Index));
        //    }
        //    catch
        //    {
        //        return View();
        //    }
        //}

        //// GET: User/Delete/5
        //public ActionResult Delete(int id)
        //{
        //    return View();
        //}

        //// POST: User/Delete/5
        //[HttpPost]

        //public ActionResult Delete(int id, IFormCollection collection)
        //{
        //    try
        //    {
        //        // TODO: Add delete logic here

        //        return RedirectToAction(nameof(Index));
        //    }
        //    catch
        //    {
        //        return View();
        //    }
        //}
    }
}