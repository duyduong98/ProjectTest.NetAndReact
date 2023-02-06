using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Project1.Data;
//using Project1.Migrations;
using Project1.Models;

namespace Project1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SpeakerController : ControllerBase
    {
        private readonly ApplicationDbContext _dbContext;

        public SpeakerController(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        [HttpGet]
        [Route("GetSpeaker")]
        public IActionResult GetSpeaker()
        {
            List<Speaker> speaker = _dbContext.Speaker.ToList();

            return StatusCode(StatusCodes.Status200OK, speaker);

        }
    }
}
