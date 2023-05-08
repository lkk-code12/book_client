import axios from 'axios';
export default {
    name: "BookDataView",
    data() {
        return {
            getBookData: [],
            postBookData: {
                bookTitle: "",
                bookAuthor: "",
                bookDescription: "",
            },
        };
    },
    mounted() {
        axios.get("http://localhost:8000/api/get/book").then((response) => {
            let bookData = response.data.posts;
            // console.log(bookData);
            for (let i = 0; i < bookData.length; i++) {
                // console.log(bookData[i]);
                let book_id = bookData[i].id;
                let book_title = bookData[i].title;
                let book_author = bookData[i].author;
                let book_image = bookData[i].image;
                let book_description = bookData[i].description;

                this.getBookData.push({
                    id: book_id,
                    title: book_title,
                    author: book_author,
                    image: book_image,
                    description: book_description,
                });
                // console.log(this.getBookData);
            }
        });
    },
    methods: {
        saveBook() {
            // console.log(typeof(this.postBookData));
            axios
                .post("http://localhost:8000/api/post/book", this.postBookData)
                .then((response) => {
                    console.log(response.data);
                })

            this.postBookData = '';
        },
        update(id) {
            this.$router.push({
                name: 'updateBook',
                params: {
                    newId: id
                }
            });
        },
        deleteBook(id) {
            axios
                .post("http://localhost:8000/api/delete/book", { deleteId: id });
        }
    }
}