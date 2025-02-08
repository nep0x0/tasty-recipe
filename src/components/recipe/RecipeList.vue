<template>
    <div class="recipe__list-recipe row">
      <!-- Menggunakan v-for untuk merender setiap resep dalam recipes -->
      <div v-for="recipe in recipes" :key="recipe.id" class="col-12 col-lg-3 col-sm-4 position-relative" style="padding-top: 12px; padding-bottom: 12px">
        <div class="card text-decoration-none" style="height: 398px">
          <!-- Binding src gambar menggunakan v-bind -->
          <img :src="recipe.imageLink" class="card-img-top" :alt="recipe.name" height="240" width="285" style="object-fit: cover" />
          <div class="card-body" style="color: #0a0a0a">
            <!-- Binding kategori resep -->
            <p class="mb-0">{{ recipe.category }}</p>
            <div class="h-50">
              <!-- Binding nama resep -->
              <h4 class="fs-5 mb-0">{{ recipe.name }}</h4>
            </div>
            <!-- Binding nama pengguna pembuat resep -->
            <p>Recipe By {{ recipe.username }}</p>
          </div>
        </div>
        <!-- Ikon like (tidak ada perubahan di bagian ini) -->
        <div class="position-absolute text-secondary bg-light px-2 py-1 rounded-circle top-0 end-0 m-4 like-icon">
          <i class="fas fa-heart"></i>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  defineProps({
    recipes: Array // menerima prop recipes yang berisi daftar resep
  })
  </script>
  