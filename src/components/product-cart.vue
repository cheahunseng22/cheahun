<script setup>




const props = defineProps({
  product: Object
});

// Define the logId function and access the product through the props
const logId = () => {
  console.log("Product ID clicked:", props.product.id); // Access the product through 'props'
}
</script>

<template>
  <div class="gap-4 m-4">
    <div class="wrap cursor-pointer">
      <!-- Image -->
      <div class="cart1 text-white rounded-sm w-full h-[10rem] bg-cover bg-center">
        <img class="h-full rounded-sm w-full" :src="props.product.img" :alt="props.product.title">
      </div>

      <!-- Title & Price -->
      <div class="title grid grid-cols-2">
        <div class="title">
          <!-- Dynamically pass product id to the router link -->
          <RouterLink 
            :to="`/product/${props.product.id}`" 
            class="text-blue-500" 
            @click="logId"
          >
            View Details
          </RouterLink>

          <h1 class="text-[0.6rem] font-normal">{{ props.product.title }}</h1>
          <span class="text-[0.5rem] font-bold absolute">${{ props.product.price }}</span>
        </div>
        <div class="heart mt-1 text-[0.8rem] flex justify-end">
          <i class="fa-regular fa-heart"></i>
        </div>
      </div>
    </div>
  </div>
</template>
