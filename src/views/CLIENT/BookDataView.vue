<template>
  <div>
    <div class="container-fluid">
      <h1 class="text-danger my-4">This is book data view page</h1>
      <div class="row">
        <div class="col-4 offset-1 shadow-lg">
          <h3 class="my-3">Add New Book</h3>
          <hr />
          <!-- <h6 for="">ID</h6>
          <input
            type="number"
            class="form-control mb-3"
            v-model="postBookData.bookId"
            id="book_id"
          /> -->
          <h6 for="">Title</h6>
          <input
            type="text"
            class="form-control mb-3"
            v-model="postBookData.bookTitle"
            id="book_title"
          />
          <h6 for="">Author</h6>
          <input
            type="text"
            class="form-control mb-3"
            v-model="postBookData.bookAuthor"
            id="book_author"
          />
          <h6 for="">Image</h6>
          <input type="file" class="form-control mb-3" id="book_image" />
          <h6 for="">Description</h6>
          <textarea
            class="form-control mb-3"
            v-model="postBookData.bookDescription"
            id="book_description"
            cols="30"
            rows="5"
          ></textarea>
          <input
            type="submit"
            class="btn btn-danger"
            @click="saveBook"
            value="Save"
          />
        </div>

        <div class="col-5 offset-1">
          <!-- <h3>{{ getBookData[0] }}</h3> -->
          <div v-for="(item, index) in getBookData" :key="index">
            <h5><span class="text-primary">ID</span> : {{ item.id }}</h5>
            <h5><span class="text-primary">Title</span> : {{ item.title }}</h5>
            <h5>
              <span class="text-primary">Author</span> : {{ item.author }}
            </h5>
            <h5>{{ item.image }}</h5>
            <h5>
              <span class="text-primary">Description</span> :
              {{ item.description }}
            </h5>
            <button class="btn btn-warning me-2" @click="update(item.id)">Edit</button>
            <button class="btn btn-danger" @click="deleteBook(item.id)">Delete</button>
            <hr />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="../../assets/js/CLIENT/bookDataView.js"></script>
