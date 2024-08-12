namespace WebE_Book.Models
{
    public class Book
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Genre { get; set; }
        public decimal Price { get; set; }
        public string CoverImageUrl { get; set; }
    }
}
