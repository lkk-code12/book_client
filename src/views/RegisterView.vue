<template>
    <div>
      <div>
        <h3 class="mb-5">Register Page</h3>
        <div class="row">
          <form action="">
            <div class="col-6 offset-3">
              <label>Name</label>
              <input type="text" v-model="name" id="name" class="form-control" />
              <span class="text-danger mb-3">{{ emptyName }}</span><br>
              <label>Email</label>
              <input type="text" v-model="email" id="email" class="form-control" />
              <span class="text-danger mb-3">{{ emptyEmail }}</span><br>
              <label>Password</label>
              <input type="password" v-model="password" id="password" class="form-control" />
              <span class="text-danger mb-3">{{ emptyPassword }}</span><br>
              <input type="submit" class="btn btn-success mb-3" value="Register" v-on:click="register">
            </div>
          </form>
          <label class="mb-3">Already registered?</label>
              <router-link to="/login"><button class="btn btn-warning">Login</button></router-link>
        </div>
      </div>
    </div>
  </template>
  
  <script src="../assets/js/register.js"></script>
  