<template>
    <div>
        <h1 class="text-danger">This is update view page.</h1>
        <div class="col-6 offset-3 p-3 my-5 shadow-lg">
          <h3 class="my-3">Add New Book</h3>
          <hr />
          <h6 for="">Title</h6>
          <input
            type="text"
            class="form-control mb-3"
            id="book_title"
            v-model="updateBook.bookTitle"
          />
          <h6 for="">Author</h6>
          <input
            type="text"
            class="form-control mb-3"
            id="book_author"
            v-model="updateBook.bookAuthor"
          />
          <h6 for="">Image</h6>
          <input type="file" class="form-control mb-3" id="book_image" />
          <h6 for="">Description</h6>
          <textarea
            class="form-control mb-3"
            id="book_description"
            v-model="updateBook.bookDescription"
            cols="30"
            rows="5"
          ></textarea>
          <input
            type="submit"
            class="btn btn-danger"
            @click="update"
            value="Update"
          />
        </div>
    </div>
</template>

<script src="../../assets/js/CLIENT/updateView.js"></script>
