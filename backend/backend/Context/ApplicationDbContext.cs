﻿using backend.Entities;
using Microsoft.EntityFrameworkCore;

namespace backend.Context
{
	public class ApplicationDbContext : DbContext
	{
		public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
		{
		}

        public DbSet<Product> Products { get; set; }
    }
}
