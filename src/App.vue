<script  setup lang="js">
// import Home from './views/Home.vue';
import productLink from './components/product-link.vue';
import navContent from './components/nav-content.vue';
import footerContent from './components/footer-content.vue';
import productCart from './components/product-cart.vue';
import products from './data/products';
import './views/style.css';


</script>

<template>
  <div class="relative">
    <div
      class="wrap-navbar text-white text-sm wrapper-bar-top p-3 flex justify-between bg-[url('https://wallpaperbat.com/img/202617-bts-dna-desktop-wallpaper-top-free-bts-dna-desktop-background.jpg')] h-[36rem] bg-cover bg-center"
    >
      <div class="left-side-bar flex">
        <div class="logo text-lg">CHEAHUN <span class="text-blue-600 bg-blue-200 p-1 rounded-es-2xl font-bold">STORE</span></div>
        <div class="navigation ml-6 space-x-2 text-[0.6rem] align-middle pt-[0.4rem] hidden sm:block">
          <a href="">Home</a>
          <a href="">Shop</a>
          <a href="">Feature</a>
          <a href="">About</a>
          <a href="">Contact</a>
        </div>
      </div>
      <div class="right-side-bar space-x-3 cursor-pointer text-white hidden sm:block">
        <span><i class="fa-solid fa-magnifying-glass"></i></span>
        <span class="relative"><i class="fa-brands fa-opencart"></i><span class="absolute text-white text-[0.5rem] bg-blue-500 p-[0.1rem] pr-[4px] pl-[4px] -translate-y-1 -translate-x-2 rounded-[50%]">0</span></span>
        <span><i class="fa-regular fa-heart"></i><span class="absolute text-white text-[0.5rem] bg-blue-500 p-[0.1rem] pr-[4px] pl-[4px] -translate-y-1 -translate-x-2 rounded-[50%]">0</span></span>
      </div>
    </div>
    <div class="absolute top-1/8 p-5 text-white text-start">
      <h1 class="-mb-8 text-4xl font-bold">New Boy-Group Albums</h1>
       <h1 class=" absolute text-xl -bottom-4">New Boy-Group Albums</h1>
      <div class="bg bg-blue-300 blur-lg">.</div>
      <div class="btn absolute -bottom-[5rem] bg-blue-600 p-1 rounded-sm hover:bg-white hover:text-black">
        <a href="#">
            Buy Now
        </a>
      </div>
    </div>
    <div class="productLink mt-10">
      <RouterView />
        <productLink/>
        <navContent />
        
       <div class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7">
        <productCart v-for="item in products" :key="item.id" :product="item" />
        
      </div>
        <footerContent/>
        <div>
  </div>
    </div>
  </div>
</template>