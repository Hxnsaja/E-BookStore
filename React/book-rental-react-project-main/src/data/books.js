const data = [
    {
        "id": crypto.randomUUID(),
        "cover": "https://cdn.britannica.com/21/182021-050-666DB6B1/book-cover-To-Kill-a-Mockingbird-many-1961.jpg",
        "title": "To Kill a Mockingbird",
        "description": " Set in the racially charged atmosphere of the American South in the 1930s, this novel follows young Scout Finch and her brother Jem as their father, Atticus Finch, defends a black man falsely accused of raping a white woman. Through the children's eyes, the book explores themes of racial injustice, moral growth, and compassion.",
        "genre": "Historical Fiction, Coming-of-Age, Social Commentary",
        "rating": 3,
        "price": 90,
        "createdAt": "2024-06-07"
    },
    {
        "id": crypto.randomUUID(),
        "cover": "https://m.media-amazon.com/images/I/81StSOpmkjL._AC_UF1000,1000_QL80_.jpg",
        "title": "1984",
        "description": "A dystopian novel set in a totalitarian society ruled by Big Brother, where surveillance, propaganda, and censorship are rampant. The story follows Winston Smith, a low-ranking member of the ruling Party, who begins to question the system. The book explores themes of government control, individualism, and the nature of truth.",
        "genre": "Dystopian Fiction, Political Fiction, Science Fiction",
        "rating": 4,
        "price": 100,
        "createdAt": "2024-05-14"
    },
    {
        "id": crypto.randomUUID(),
        "cover": "https://readaloudrevival.com/wp-content/uploads/2016/05/Pride-and-Prejudice.png.webp",
        "title": "Pride and Prejudice",
        "description": "A classic romantic novel that explores the manners and matrimonial machinations among the British gentry of the early 19th century. The story follows Elizabeth Bennet as she navigates issues of marriage, morality, and misunderstandings with the enigmatic Mr. Darcy, ultimately finding love and self-discovery.",
        "genre": "Classic Literature, Romance, Social Commentary",
        "rating": 5,
        "price": 140,
        "createdAt": "2024-05-30"
    },
    {
        "id": crypto.randomUUID(),
        "cover": "https://target.scene7.com/is/image/Target/GUEST_253ed78d-97e3-47cd-b139-e76b1a895e85?wid=488&hei=488&fmt=pjpeg",
        "title": "The Great Gatsby",
        "description": "Set in the Jazz Age of the 1920s, this novel tells the story of the enigmatic Jay Gatsby and his unrequited love for Daisy Buchanan. Through the eyes of narrator Nick Carraway, the book explores themes of the American Dream, wealth, and social class, revealing the emptiness and moral decay beneath the glittering surface of society.",
        "genre": "Classic Literature, Tragedy, Social Commentary",
        "rating": 4,
        "price": 250,
        "createdAt": "2024-06-10"
    },
    {
        "id": crypto.randomUUID(),
        "cover": "https://m.media-amazon.com/images/I/8125BDk3l9L._AC_UF1000,1000_QL80_.jpg",
        "title": "The Catcher in the Rye",
        "description": " This novel follows the journey of Holden Caulfield, a disillusioned teenager who has just been expelled from his prep school. As he wanders through New York City, he grapples with the phoniness of the adult world, his feelings of alienation, and his desire to protect the innocence of childhood. The book is a poignant exploration of teenage angst and rebellion.",
        "genre": "Literary Fiction, Coming-of-Age, Social Commentary",
        "rating": 5,
        "price": 100,
        "createdAt": "2024-05-19",
    },
    {
        "id": crypto.randomUUID(),
        "cover": "https://images.penguinrandomhouse.com/cover/9780345534835",
        "title": "The Hobbit",
        "description": "A fantasy adventure that follows the journey of Bilbo Baggins, a hobbit who is reluctantly swept into a quest to reclaim the lost Dwarf Kingdom of Erebor from the fearsome dragon Smaug. Along the way, Bilbo encounters trolls, elves, goblins, and the creature Gollum, discovering his own courage and resourcefulness. The book is a precursor to Tolkien's epic The Lord of the Rings trilogy.",
        "genre": "Fantasy, Adventure, Children's Literature",
        "rating": 5,
        "price": 100,
        "createdAt": "2024-04-19",
        "upcoming": true
    }
]

function getAllBooks() {
    return data;
}

export { getAllBooks };