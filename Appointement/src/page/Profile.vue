<template>
  <Container>
    <div class="profile">
      <div class="profile-header">
        <img class="profile-picture" :src="user.photo" alt="Profile Picture" />
        <h2>{{ user.name }}</h2>
      </div>
      <div class="profile-details">
        <p><strong>Numéro :</strong> {{ user.phoneNumber }}</p>
        <p><strong>Email :</strong> {{ user.email }}</p>
        <p><strong>Localisation :</strong> {{ user.location }}</p>
      </div>
      <div class="profile-actions">
        
        <button @click="changePassword"  class="ml-4 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Changer le mot de passe</button>
        <button @click="logout"  class="ml-4 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Déconnexion</button>
      </div>
    </div>
  </Container>
</template>

<script setup>
import Container from "../layout/Container.vue";
import { ref } from "vue";
import router from"../router/router"
const user = ref({
  name: "John Doe",
  photo: "path/to/profile-picture.jpg",
  phoneNumber: "123456789",
  email: "john.doe@example.com",
  location: "Paris, France",
});


const changePassword = () => {
  
  router.push({
    name: "Inscription",
    params: {
      name: user.value.name,
      photo: user.value.photo,
      phoneNumber: user.value.phoneNumber,
      email: user.value.email,
      location: user.value.location,
      changePassword: true, // Ajouter un indicateur pour le changement de mot de passe
    },
  });
};

const logout = () => {
  // Logique pour la déconnexion de l'utilisateur
};
</script>
<style>
.profile {
  text-align: center;
}

.profile-header {
  margin-bottom: 20px;
}

.profile-picture {
  width: 150px;
  height: 150px;
  border-radius: 50%;
}

.profile-actions {
  margin-top: 20px;
}

button {
  margin-right: 10px;
}
</style>
