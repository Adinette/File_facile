<template>
  <div class="flex">
    <nav
      class="flex flex-col justify-start items-start bg-gray-600 p-10 h-full w-full"
    >
      <ul class="nav metismenu">
        <li class="nav-header">
          <div class="dropdown profile-element">
            <span>
              <img alt="image" class="rounded-full w-8 h-8 m-2" src="" />
            </span>
            <span class="clear">
              <span class="block mt-1">
                <strong class="font-bold text-white m-2"
                  >Nom d'utilisateur</strong
                >
              </span>
            </span>
          </div>
        </li>
      </ul>

      <router-link to="/edge" class="nav-link mb-4 text-white"
        >Tableau de bord</router-link
      >
      <router-link to="/profile" class="nav-link text-white mb-4"
        >Profil</router-link
      >
      <router-link to="/service" class="nav-link text-white mb-4"
        >Ajouter un service
      </router-link>
      <router-link to="/responsable" class="nav-link text-white mb-4"
        >Responsable
      </router-link>
      <router-link to="" class="nav-link mb-4 text-white">Logout </router-link>
    </nav>
  </div>
</template>

<script setup></script>

<style>
.nav-link {
  margin-right: 10px;
  margin-bottom: 8px;
  padding: 4px 8px;
  border-radius: 4px;

  color: white;
  text-decoration: none;
  margin-right: 10px;
  transition: background-color 0.3s ease;
}

.nav-link:hover {
  background-color: gray;
}
</style>
