<script setup></script>

<template>
   <header class="head">
    <div class="part">
      <span class="font-bold italic">File Facile</span>
    </div>
    <div class="text-gray-700 text-md">
      <ul class="menu flex justify-start space-x-6 ">
        <li class="px-1 border-b-2 border-transparent hover:border-green-400 duration-300">
          <router-link :to="{ name:'home' }" class="text-gray-700 text-md">Accueil</router-link>
        </li>
      </ul>
      <ul class="menu flex justify-end space-x-6">
        <li class="px-1 border-b-2 border-transparent hover:border-green-400 duration-300">
          <router-link :to="{ name:'singup' }" class="text-gray-700 text-md">Inscription</router-link>
        </li>
        <li class="px-1 border-b-2 border-transparent hover:border-green-400 duration-300">
          <router-link :to="{ name:'login' }" class="text-gray-700 text-md">Connexion</router-link>
        </li>
      </ul>
    </div>
  </header>

</template>

<style scoped>
/* ::-webkit-scrollbar {
  width: 12px;
  height: 12px;
}

::-webkit-scrollbar-track {
  background: #ffffff;
}

::-webkit-scrollbar-thumb {
  background: #4ade94;
}

::-webkit-scrollbar-thumb:hover {
  background: #15803d;
} */
.your {
  text-decoration-color: #15803d;
}
.part {
  font-size: 1.5rem;
  line-height: 2rem;
}
.head {
  width: 100%;
  height: 6rem;
  box-shadow: 0 4px 6px -1px rgb(0 0 0/ 0.1);
  align-items: center;
  justify-content: space-between;
  font-weight: 700;
  padding-left: 6rem;
  padding-right: 6rem;
}
</style>
