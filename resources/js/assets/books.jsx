import b3 from './book.jpg';

const images = [
    {
        id : 1,
        image : 'https://i.pinimg.com/736x/2a/04/ae/2a04ae4983816379ebb63440e9e55744.jpg',
        title : 'They Both Die At The End',
        author : 'Adam Silvera',
        price : 19.99
    },
    {
        id : 2,
        image : 'https://i.pinimg.com/736x/4d/3e/f4/4d3ef46348d44e957bf82914732a8b9b.jpg',
        title : 'Realm of the Forgotten',
        author : 'Michael Lewis',
        price : 19.99
    },
    {
        id : 3,
        image : 'https://i.pinimg.com/736x/35/84/bc/3584bc3d895ab842b4d1333651f810ae.jpg',
        title : 'Cage the Raven',
        author : 'Paperback',
        price : 19.99
    },
    {
        id : 4,
        image : 'https://m.media-amazon.com/images/I/81-zw2gGCGL._SY466_.jpg',
        title : 'The First Gentleman',
        author : 'James Patterson',
        price : 19.99
    },
    // {
    //     id : 5,
    //     image : 'https://m.media-amazon.com/images/I/41JZrpvUFpL._SY445_SX342_.jpg',
    //     title : 'Behind the Badge',
    //     author : 'Johnny Joey Jones',
    //     price : 19.99
    // },
    // {
    //     id : 6,
    //     image : 'https://m.media-amazon.com/images/I/91kValBddTL._SY466_.jpg',
    //     title : 'The Light Years (The Cazalet Chronicles)',
    //     author : 'Elizabeth Jane Howard',
    //     price : 19.99
    // },
    // {
    //     id : 7,
    //     image : b3,
    //     title : 'Frankenstein',
    //     author : 'Mary Shelley',
    //     price : 19.99
    // },
    // {
    //     id : 8,
    //     image : 'https://i.pinimg.com/736x/2a/04/ae/2a04ae4983816379ebb63440e9e55744.jpg',
    //     title : 'They Both Die At The End',
    //     author : 'Adam Silvera',
    //     price : 19.99
    // },
    // {
    //     id : 9,
    //     image : 'https://i.pinimg.com/736x/4d/3e/f4/4d3ef46348d44e957bf82914732a8b9b.jpg',
    //     title : 'Realm of the Forgotten',
    //     author : 'Michael Lewis',
    //     price : 19.99
    // },
    // {
    //     id : 10,
    //     image : 'https://i.pinimg.com/736x/35/84/bc/3584bc3d895ab842b4d1333651f810ae.jpg',
    //     title : 'Cage the Raven',
    //     author : 'Paperback',
    //     price : 19.99
    // },
    // {
    //     id : 11,
    //     image : 'https://m.media-amazon.com/images/I/81-zw2gGCGL._SY466_.jpg',
    //     title : 'The First Gentleman',
    //     author : 'James Patterson',
    //     price : 19.99
    // },
    // {
    //     id : 12,
    //     image : 'https://m.media-amazon.com/images/I/41JZrpvUFpL._SY445_SX342_.jpg',
    //     title : 'Behind the Badge',
    //     author : 'Johnny Joey Jones',
    //     price : 19.99
    // },
    // {
    //     id : 13,
    //     image : 'https://m.media-amazon.com/images/I/91kValBddTL._SY466_.jpg',
    //     title : 'The Light Years (The Cazalet Chronicles)',
    //     author : 'Elizabeth Jane Howard',
    //     price : 19.99
    // },
    // {
    //     id : 14,
    //     image : b3,
    //     title : 'Frankenstein',
    //     author : 'Mary Shelley',
    //     price : 19.99
    // },
    // {
    //     id : 15,
    //     image : 'https://i.pinimg.com/736x/2a/04/ae/2a04ae4983816379ebb63440e9e55744.jpg',
    //     title : 'They Both Die At The End',
    //     author : 'Adam Silvera',
    //     price : 19.99
    // },
    // {
    //     id : 16,
    //     image : 'https://i.pinimg.com/736x/4d/3e/f4/4d3ef46348d44e957bf82914732a8b9b.jpg',
    //     title : 'Realm of the Forgotten',
    //     author : 'Michael Lewis',
    //     price : 19.99
    // },
    // {
    //     id : 17,
    //     image : 'https://i.pinimg.com/736x/35/84/bc/3584bc3d895ab842b4d1333651f810ae.jpg',
    //     title : 'Cage the Raven',
    //     author : 'Paperback',
    //     price : 19.99
    // },
    // {
    //     id : 18,
    //     image : 'https://m.media-amazon.com/images/I/81-zw2gGCGL._SY466_.jpg',
    //     title : 'The First Gentleman',
    //     author : 'James Patterson',
    //     price : 19.99
    // },
    // {
    //     id : 19,
    //     image : 'https://m.media-amazon.com/images/I/41JZrpvUFpL._SY445_SX342_.jpg',
    //     title : 'Behind the Badge',
    //     author : 'Johnny Joey Jones',
    //     price : 19.99
    // },
    // {
    //     id : 20,
    //     image : 'https://m.media-amazon.com/images/I/91kValBddTL._SY466_.jpg',
    //     title : 'The Light Years (The Cazalet Chronicles)',
    //     author : 'Elizabeth Jane Howard',
    //     price : 19.99
    // },
    // {
    //     id : 21,
    //     image : b3,
    //     title : 'Frankenstein',
    //     author : 'Mary Shelley',
    //     price : 19.99
    // },
    // {
    //     id : 22,
    //     image : 'https://i.pinimg.com/736x/2a/04/ae/2a04ae4983816379ebb63440e9e55744.jpg',
    //     title : 'They Both Die At The End',
    //     author : 'Adam Silvera',
    //     price : 19.99
    // },
    // {
    //     id : 23,
    //     image : 'https://i.pinimg.com/736x/4d/3e/f4/4d3ef46348d44e957bf82914732a8b9b.jpg',
    //     title : 'Realm of the Forgotten',
    //     author : 'Michael Lewis',
    //     price : 19.99
    // },
    // {
    //     id : 24,
    //     image : 'https://i.pinimg.com/736x/35/84/bc/3584bc3d895ab842b4d1333651f810ae.jpg',
    //     title : 'Cage the Raven',
    //     author : 'Paperback',
    //     price : 19.99
    // },
    // {
    //     id : 25,
    //     image : 'https://m.media-amazon.com/images/I/81-zw2gGCGL._SY466_.jpg',
    //     title : 'The First Gentleman',
    //     author : 'James Patterson',
    //     price : 19.99
    // },
    // {
    //     id : 26,
    //     image : 'https://m.media-amazon.com/images/I/41JZrpvUFpL._SY445_SX342_.jpg',
    //     title : 'Behind the Badge',
    //     author : 'Johnny Joey Jones',
    //     price : 19.99
    // },
    // {
    //     id : 27,
    //     image : 'https://m.media-amazon.com/images/I/91kValBddTL._SY466_.jpg',
    //     title : 'The Light Years (The Cazalet Chronicles)',
    //     author : 'Elizabeth Jane Howard',
    //     price : 19.99
    // },
    // {
    //     id : 28,
    //     image : b3,
    //     title : 'Frankenstein',
    //     author : 'Mary Shelley',
    //     price : 19.99
    // }
]

export default images;