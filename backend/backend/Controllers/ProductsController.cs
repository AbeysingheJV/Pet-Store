using backend.Context;
using backend.Dtos;
using backend.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace backend.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class ProductsController : ControllerBase
	{
		private readonly ApplicationDbContext _context;

		public ProductsController(ApplicationDbContext context)
		{
			_context = context;
		}
		//Creating products
		[HttpPost]
		public async Task<IActionResult> CreateProduct([FromBody] CreateUpdateProductDto dto)
		{
			var newProduct = new Product()
			{
				Brand = dto.Brand,
				Title = dto.Title,
			};
			await _context.Products.AddAsync(newProduct);
			await _context.SaveChangesAsync();
			return Ok("Product created successfully");
		}

		//Getting all products
		[HttpGet]
		public async Task<ActionResult<List<Product>>> GetAllProducts()
		{
			var allProducts = await _context.Products.ToListAsync();
			return Ok(allProducts);
		}

		//Getting a single product
		[HttpGet]
		[Route("{id}")]
		public async Task<ActionResult<Product>> GetOneProduct([FromRoute] long id)
		{
			var product = await _context.Products.FirstOrDefaultAsync(p => p.Id == id);
			if (product == null)
			{
				return NotFound("Product not found");
			}
			return Ok(product);
		}

		//Updating a product
		[HttpPut]
		[Route("{id}")]
		public async Task<IActionResult> UpdateProduct([FromRoute] long id, [FromBody] CreateUpdateProductDto dto)
		{
			var product = await _context.Products.FirstOrDefaultAsync(p => p.Id == id);
			if (product == null)
			{
				return NotFound("Product not found");
			}

			product.Title = dto.Title;
			product.Brand = dto.Brand;
			product.UpdatedAt =	DateTime.Now;

			_context.Products.Update(product);
			await _context.SaveChangesAsync();
			return Ok("Product updated successfully");
		}

		//Deleting a product
		[HttpDelete]
		[Route("{id}")]
		public async Task<IActionResult> DeleteProduct([FromRoute] long id)
		{
			var product = await _context.Products.FirstOrDefaultAsync(p => p.Id == id);
			if (product == null)
			{
				return NotFound("Product not found");
			}

			_context.Products.Remove(product);
			await _context.SaveChangesAsync();
			return Ok("Product deleted successfully");
		}
	}
}
