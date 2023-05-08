import axios from 'axios';
export default {
    name: 'UpdateView',
    data() {
        return {
            // name: 'Update View',
            getBookData: [],
            updateBook: {
                updateId: 0,
                bookTitle: "",
                bookAuthor: "",
                bookDescription: "",
            }
        }
    },
    mounted() {
        this.updateBook.updateId = this.$route.params.newId;
        // console.log(this.updateBook.updateId);
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
        update() {
            // alert('hello vue');
            axios.post("http://localhost:8000/api/update/book", this.updateBook);
            this.$router.push('/bookData');
        }
    }
}