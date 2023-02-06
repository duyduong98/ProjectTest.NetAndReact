using System.ComponentModel.DataAnnotations;
using System;

namespace Project1.Models
{
    public class Speaker
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [StringLength(100)]
        [Display(Name = "Name")]
        public string SpeakerName { get; set; }

        [Required]
        [StringLength(100)]
        public string Qualification { get; set; }

        [Required]
        [StringLength(100)]
        public int Experience { get; set; }

        [Required]
        [Display(Name = "Image")]
        public string ProfilePicture { get; set; }
    }
}
