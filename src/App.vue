<template>
  <div>
    <nav class="text-center mt-3">
      <router-link :to="{name:'home'}">Home</router-link> |
      <router-link :to="{name:'about'}">About</router-link> |
      <router-link to="/bookData">Books</router-link> |
      <router-link to="/register">Register</router-link> |
      <router-link to="/login">Login</router-link>
      <hr>
      <router-view></router-view>
    </nav>
  </div>
</template>

<script>
export default {};
</script>
