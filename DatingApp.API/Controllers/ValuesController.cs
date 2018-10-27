﻿using DatingApp.API.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;

namespace DatingApp.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ValuesController : ControllerBase
    {
        private readonly DataContext _db;
        public ValuesController(DataContext db)
        {
            _db = db;
        }
        // GET api/values
        [HttpGet]
        public async Task<IActionResult> GetValues()
        {
            var result = await _db.Values.ToListAsync();
            return Ok(result);
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetValues(int id)
        {
            var result = await _db.Values.FirstOrDefaultAsync(x => x.Id == id);
            return Ok(result);
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
