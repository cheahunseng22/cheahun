<script setup>
// Import the products data
import products from "../data/products.js";
import productCart from "../components/product-cart.vue";
import footerContent from "../components/footer-content.vue";
// Define the props for the route parameter
const props = defineProps({
  id: {
    type: String,
    required: true,
  },
});

// Find the product based on the id from the route
const product = products.find((p) => p.id.toString() === props.id); // Ensure both are strings

console.log("Product ID from route:", props.id); // This will log the id parameter from the route
console.log("Found product:", product);
</script>

<template>
  <div class="wrap bg-white z-50 absolute h-[120rem] w-full top-0">
    <div class="pd-detail grid grid-cols-[1fr_3fr_3fr] p-5">
      <!-- product left -->
      <div
        class="image space-x-5 block space-y-3 mr-2 overflow-x-hidden h-[10rem]"
      >
        <img :src="product.img" alt="Product Image" class="product-image" />
        <img :src="product.img" alt="Product Image" class="product-image" />
        <img :src="product.img" alt="Product Image" class="product-image" />
        <img :src="product.img" alt="Product Image" class="product-image" />
        <img :src="product.img" alt="Product Image" class="product-image" />
        <img :src="product.img" alt="Product Image" class="product-image" />
      </div>
      <!-- end  -->
      <!-- product mid -->
      <div class="">
        <img :src="product.img" alt="Product Image" class="product-image" />
      </div>
      <!-- end -->
      <!-- product right -->
      <div class="ml-5 space-y-2">
        <h1 class="text-blue-600 font-bold">
          {{ product.title }}
        </h1>
        <p class="text-sm">{{ product.description }}</p>
        <p class="text-blue-600">${{ product.price }}</p>
        <hr />
        <div class="genre-wrap">
          <h1>Choose TYPE:</h1>
          <div class="genre flex space-x-2 text-[0.8rem] p-1 text-blue-600">
            <p>
              CD
              <input type="radio" name="type" value="cd" id="cd" />
            </p>
            <p>
              VCD
              <input type="radio" name="type" value="vcd" id="vcd" />
            </p>
          </div>
        </div>
        <div class="quantity flex space-x-2">
          <select
            id="number"
            name="number"
            class="bg-gray-100 rounded-sm cursor-pointer"
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          <div class="btn bg-blue-500 p-1 rounded-sm">
            <button class="cursor-pointer">ADD TO CART</button>
          </div>
        </div>
      </div>
      <!-- end -->
    </div>
    <!-- list product  -->
    <div class="pl-2">
      <h1>GET MORE</h1>
      <hr />
      <div
        class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7"
      >
        <productCart v-for="item in products" :key="item.id" :product="item" />
      </div>
      <div class="banner mt-10 space-y-14 p-3">
        <img src="https://wallpapercat.com/w/full/b/c/4/183842-3840x2160-desktop-4k-bts-wallpaper-photo.jpg" alt="">
        <img src="https://4kwallpapers.com/images/wallpapers/blackpink-pubg-mobile-pink-background-3413x1920-3105.jpg" alt="">
        <img src="https://assets.teenvogue.com/photos/663be1206643af0e4eab9ed1/16:9/w_2560%2Cc_limit/04_4234+04_4111.jpg" alt="">
      </div>
      <footerContent class="relative !bottom-0"/>
    </div>
  </div>
</template>
