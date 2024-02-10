﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SimpleTask.BAL.DTOs
{
    public class AuthModel
    {
        public string? Message { get; set; }
        public bool IsAuthenticated { get; set; }
        public string? Email { get; set; }
        public List<string>? Roles { get; set; }
        public string? Token { get; set; }
    }
}