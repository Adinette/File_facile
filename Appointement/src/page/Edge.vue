<template>
  <Container>
    <div class="flex grid-cols-1 gap-4">
      <div v-if="selectedItem" class="mt-4">
        <h2 class="text-lg font-semibold"> Horaire :{{ selectedItem.horaire }}</h2>
        <p class="text-gray-600">Service: {{ selectedItem.service }}</p>
        <p class="text-gray-600">
          Nom du poste: {{ selectedItem.nom_du_poste }}
        </p>
        <p class="text-gray-600">
          Nom du client: {{ selectedItem.nom_du_client }}
        </p>
        <p class="text-gray-600">
          Prénom du client: {{ selectedItem.prenom_du_poste }}
        </p>
        <p class="text-gray-600">
          Contact du client: {{ selectedItem.contact_du_poste }}
        </p>
      </div>
    </div>
  </Container>
</template>

<script setup>
import Container from "../layout/Container.vue";
import { ref, onMounted } from "vue";
const selectedItem = ref(null);
onMounted(() => {
  console.log("ok");
});
// const selectedItem= ref(null)
const items = ref([
  {
    id: 1,
    horaire: "Valeur 1",
    service: "Valeur 2",
    nom_du_poste: "Valeur 3",
    nom_du_client: "Valeur 4",
    prenom_du_poste: "valeur 5",
    contact_du_poste: "valeur 6",
  },
]);

// const voirPlus = (itemId) => {
//   selectedItem.value = items.value.find((item) => item.id === itemId);
// };

// const toggleDetails = (itemId) => {
//   this.selectedItem = this.items.find((item) => item.id === itemId);
// };
</script>

<style>
table {
  border-collapse: collapse;
}

th,
td {
  padding: 10px;
}

th {
  background-color: #f2f2f2;
}
</style>
