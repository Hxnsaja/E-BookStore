using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebE_Book.Models;

namespace WebE_Book.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CartController : ControllerBase
    {
        private const string CartSessionKey = "Cart";

        public IActionResult Index()
        {
            var cart = GetCart();
            return View(cart);
        }

        public IActionResult AddToCart(int bookId)
        {
            var book = GetBookById(bookId); // Replace with actual data fetching logic
            if (book != null)
            {
                var cart = GetCart();
                var cartItem = cart.FirstOrDefault(c => c.Book.Id == book.Id);
                if (cartItem != null)
                {
                    cartItem.Quantity++;
                }
                else
                {
                    cart.Add(new CartItem { Book = book, Quantity = 1 });
                }
                SaveCart(cart);
            }
            return RedirectToAction("Index");
        }

        public IActionResult RemoveFromCart(int bookId)
        {
            var cart = GetCart();
            var cartItem = cart.FirstOrDefault(c => c.Book.Id == bookId);
            if (cartItem != null)
            {
                cart.Remove(cartItem);
                SaveCart(cart);
            }
            return RedirectToAction("Index");
        }

        private List<CartItem> GetCart()
        {
            var cart = HttpContext.Session.GetObjectFromJson<List<CartItem>>(CartSessionKey) ?? new List<CartItem>();
            return cart;
        }

        private void SaveCart(List<CartItem> cart)
        {
            HttpContext.Session.SetObjectAsJson(CartSessionKey, cart);
        }

        private Book GetBookById(int bookId)
        {
            // Replace this with actual data fetching logic
            return new Book
            {
                Id = bookId,
                Title = "Sample Book",
                Genre = "Fiction",
                Price = 19.99m,
                CoverImageUrl = "https://example.com/sample-cover.jpg"
            };
        }
    }
}