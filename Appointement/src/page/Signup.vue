<template>
  <div>
    <router-link :to="{ name: 'login' }">
      <div class="item-end">
        <button
          type="submit"
          class="p-2 py-1 m-2 bg-indigo-500 hover:bg-indigo-600  text-black text-base font-medium rounded "
        >
          Login
        </button>
      </div>
    </router-link>
    <div class="flex justify-center w-2xl items-center bg-gray-100 ">
      <div class=" max-w-2xl bg-white rounded-lg shadow-lg p-6">
        <h2 class="text-2xl font-bold text-center mb-6">Signup</h2>
        <form @submit="submitForm" class="mt-8 space-y-6 w-3xl max-w-4xl grid grid-cols-2 gap-4">
          <div class="space-y-2 space-x-4  w-3/5  pr-2">
            <label for="nom_entreprise" class="font-medium text-gray-700"
              >Nom de l'entreprise </label
            >
            <input
              type="text"
              id="nom_entreprise"
              v-model="entreprise.nom"
              class="block w-2xl rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 py-2 px-6 xl:text-xl"
              required
            /><br /><br />
          </div>

          <div class="space-y-2  w-3/5  pr-2">
            <label for="adresse" class="font-medium text-gray-700"
              >Adresse </label
            >
            <input
              type="text"
              id="adresse"
              v-model="entreprise.adresse"
              class="block w-2xl rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 py-2 px-4 sm:text-sm"
              required
            /><br /><br />
          </div>
          <div class="space-y-2 w-2/3  pl-2">
            <label for="ville" class="font-medium text-gray-700">Ville :</label>
            <input
              type="text"
              id="ville"
              v-model="entreprise.ville"
              class="block w-2xl rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 py-2 px-4 sm:text-sm"
              required
            /><br /><br />
          </div>
          <div class="space-y-2  w-3/5  pr-2">
            <label for="telephone" class="font-medium text-gray-700"
              >Téléphone </label
            >
            <input
              type="tel"
              id="telephone"
              v-model="entreprise.telephone"
              class="block w-2xl rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 py-2 px-4 sm:text-sm"
              required
            /><br /><br />
          </div>
          <div class="space-y-2 w-2/3 pl-2">
            <label for="categorie" class="font-medium text-gray-700"
              >Catégorie de l'entreprise </label
            >
            <select
              id="categorie"
              v-model="entreprise.categorie"
              class="block w-2xl rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 py-2 px-4 sm:text-sm"
              required
            >
              <option value=""   class="block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 py-2 px-4 sm:text-sm">Sélectionnez une catégorie</option>
              <option value="Informatique"   class="block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 py-2 px-4 sm:text-sm">Informatique</option>
              <option value="Finance"   class="block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 py-2 px-4 sm:text-sm">Finance</option>
              <option value="Santé"   class="block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 py-2 px-4 sm:text-sm">Santé</option>
              <!-- Ajoutez ici d'autres catégories selon vos besoins --></select
            ><br /><br />
          </div>
          <div class="space-y-2 w-3/5 pr-2">
            <label for="description" class="font-medium text-gray-700"
              >Description </label
            ><br />
            <textarea
              id="description"
              v-model="entreprise.description"
              class="block w-2xl rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 py-2 px-4 sm:text-sm"
              required
            ></textarea
            ><br /><br />
          </div>
          <div class="space-y-2 w-2/3 pl-2">
            <label for="email" class="font-medium text-gray-700">Email </label>
            <input
              type="email"
              id="email"
              v-model="entreprise.email"
              class="block w-2xl rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 py-2 px-4 sm:text-sm"
              required
            /><br /><br />
          </div>
          <div>
          <button
            type="submit"
            class="p-2 py-1 m-2 bg-indigo-500 hover:bg-indigo-600  text-black text-base font-medium rounded  "
          >
            Soumettre
          </button>
        </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const entreprise = ref({
  nom: "",
  adresse: "",
  ville: "",
  telephone: "",
  categorie: "",
  description: "",
  email: "",
});

function submitForm(event) {
  event.preventDefault();

  if (validateForm()) {
    console.log("Formulaire valide. Données :", entreprise.value);
  } else {
    console.log("Veuillez remplir tous les champs du formulaire.");
  }
}

function validateForm() {
  const { nom, adresse, ville, telephone, categorie, description, email } =
    entreprise.value;

  if (
    nom &&
    adresse &&
    ville &&
    telephone &&
    categorie &&
    description &&
    email
  ) {
    return true;
  } else {
    return false;
  }
}

function resetForm() {
  entreprise.value = {
    nom: "",
    adresse: "",
    ville: "",
    telephone: "",
    categorie: "",
    description: "",
    email: "",
  };
}
</script>
