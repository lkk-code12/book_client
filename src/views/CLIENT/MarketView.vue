<template>
  <div>
    <div class="container-fluid">
      <div>
        <h1 class="text-success">Countries of the World</h1>
        <span v-if="loadingStatus == false">Hello</span>
        <span v-if="loadingStatus == true">Loading...</span>
      </div>
      <div class="row bg-warning">
        <div v-for="(item, index) in getData" :key="index">
          <div class="col-3 bg-success">
            <div>
              <img :src="item.flag" style="width:'100px; height:70px" alt="" />
            </div>
            <h3>{{ item.name }}</h3>
            <h5>{{ item.capital[0] }}</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="../../assets/js/CLIENT/marketView.js"></script>
