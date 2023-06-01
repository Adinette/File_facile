<template>
  <Container>
    <div class="flex flex-col items-center mt-10">
      <form
        v-if="modeAjout || modeModification"
        @submit.prevent="validerFormulaire"
        class="w-full max-w-md items-center"
      >
        <div class="mb-4">
          <label for="nom" class="block text-gray-700 font-bold mb-2">Nom du service</label>
          <input
            type="text"
            class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            v-model="formulaireService.nom"
            required
          />
        </div>
        <div class="mb-4">
          <label for="description" class="block text-gray-700 font-bold mb-2">Description</label>
          <textarea
            class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            v-model="formulaireService.description"
            required
          ></textarea>
        </div>
        <div class="mb-4">
          <label for="nombrePoste" class="block text-gray-700 font-bold mb-2">Nombre de poste</label>
          <input
            type="number"
            class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            v-model="formulaireService.nombrePoste"
            required
          />
        </div>
        <div class="flex mb-4">
          <div class="w-1/2 mr-2">
            <label for="temp" class="block text-gray-700 font-bold mb-2">Temp de réception</label>
            <input
              type="number"
              min="0"
              max="59"
              step="1"
              class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              v-model="formulaireService.temp"
              required
            />
          </div>
          <div class="w-1/2 ml-2">
            <label for="heureDouverture" class="block text-gray-700 font-bold mb-2">Heure d'ouverture</label>
            <input
              type="time"
              class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              v-model="formulaireService.heureDouverture"
              required
            />
          </div>
        </div>
        <div class="flex mb-4">
          <div class="w-1/2 mr-2">
            <label for="heureFermeture" class="block text-gray-700 font-bold mb-2">Heure de fermeture</label>
            <input
              type="time"
              class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              v-model="formulaireService.heureFermeture"
              required
            />
          </div>
          <div class="w-1/2 ml-2">
            <label for="nomResponsable" class="block text-gray-700 font-bold mb-2">Nom du Responsable</label>
            <input
              type="text"
              class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              v-model="formulaireService.nomResponsable"
              required
            />
          </div>
        </div>
        <div class="flex mb-4">
          <div class="w-1/2 mr-2">
            <label for="prenomResponsable" class="block text-gray-700 font-bold mb-2">Prénom du Responsable</label>
            <input
              type="text"
              class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              v-model="formulaireService.prenomResponsable"
              required
            />
          </div>
          <div class="w-1/2 ml-2">
            <label for="emailResponsable" class="block text-gray-700 font-bold mb-2">Email du Responsable</label>
            <input
              type="email"
              class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              v-model="formulaireService.emailResponsable"
              required
            />
          </div>
        </div>
        <div class="flex justify-center">
          <button
            type="submit"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Valider
          </button>
          <button
            type="button"
            class="ml-4 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            @click="annulerModification"
          >
            Annuler
          </button>
        </div>
      </form>
      <button
        v-else
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        @click="ajouterService"
      >
        Ajouter un service
      </button>
    </div>
  </Container>
</template>

<script setup>
import { ref } from 'vue';
import Container from '../layout/Container.vue';


 
    const formulaireService = ref({
      id: null,
      nom: '',
      description: '',
      nombrePoste: 0,
      temp: '',
      heureDouverture: '',
      heureFermeture: '',
      nomResponsable: '',
      prenomResponsable: '',
      emailResponsable: '',
    });

    const modeAjout = ref(false);
    const modeModification = ref(false);

    const ajouterService = () => {
      modeAjout.value = true;
      modeModification.value = false;
      formulaireService.value.id = null;
      formulaireService.value.nom = '';
      formulaireService.value.description = '';
      formulaireService.value.nombrePoste = 0;
      formulaireService.value.temp = '';
      formulaireService.value.heureDouverture = '';
      formulaireService.value.heureFermeture = '';
      formulaireService.value.nomResponsable = '';
      formulaireService.value.prenomResponsable = '';
      formulaireService.value.emailResponsable = '';
    };

    const annulerModification = () => {
      modeAjout.value = false;
      modeModification.value = false;
      formulaireService.value.id = null;
      formulaireService.value.nom = '';
      formulaireService.value.description = '';
      formulaireService.value.nombrePoste = 0;
      formulaireService.value.temp = '';
      formulaireService.value.heureDouverture = '';
      formulaireService.value.heureFermeture = '';
      formulaireService.value.nomResponsable = '';
      formulaireService.value.prenomResponsable = '';
      formulaireService.value.emailResponsable = '';
    };

    const validerFormulaire = () => {
      // Ajouter ici le code de validation du formulaire
    };

    // return {
    //   formulaireService,
    //   modeAjout,
    //   modeModification,
    //   ajouterService,
    //   annulerModification,
    //   validerFormulaire,
    // };
 
</script>

<style>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

input[type='number'] {
  -moz-appearance: textfield;
}

input[type='number']::-webkit-inner-spin-button,
input[type='number']::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

button {
  cursor: pointer;
}
</style>
