<template>
    <div>
        <h1>This is home page</h1>
        <!-- <form @submit.prevent="submit">
            <input type="file" @change="onChange">
            <input type="submit" value="Upload" @click="upload">
        </form> -->
        <input type="file" @change="onChange">
        <input type="submit" value="Upload" @click="upload">
    </div>
</template>

<script src="../../src/assets/js/home.js"></script>
