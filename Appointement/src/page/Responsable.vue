<template>
  <Container>
    <div>
      <div
        v-for="(service, index) in services"
        :key="index"
        class="service-box"
      >
        <div class="service-details">
          <h3 class="service-name">Nom de l'entreprise :{{ service.nom }}</h3>
          <p class="service-description">Horaire :{{ service.description }}</p>
          <p class="service-info">Temp: {{ service.temp }}</p>
          <p class="service-info">
            Heure d'ouverture: {{ service.heureDouverture }}
          </p>
          <p class="service-info">
            Heure de fermeture: {{ service.heureFermeture }}
          </p>
          <p class="service-info">
            Nom Responsable: {{ service.nomResponsable }}
          </p>
          <p class="service-info">
            Prenom Responsable: {{ service.prenomResponsable }}
          </p>
          <p class="service-info">
            Email Responsable: {{ service.emailResponsable }}
          </p>
        </div>
        <div class="service-actions">
          <button @click="modifierService(index)" class="action-button">
            Modifier
          </button>
          <button @click="supprimerService(index)" class="action-button">
            Supprimer
          </button>
        </div>
      </div>
    </div>
  </Container>
</template>

<script setup>
import { ref } from "vue";
import router from '../router/router';
import Container from "../layout/Container.vue";
// import { reactive } from 'vue';



const services = ref([
  {
    nom: "",
    description: "",
    nombrePoste: "",
    heureDouverture: "",
    heureFermeture: "",
    nomResponsable: "",
    prenomResponsable: "",
    emailResponsable: "",
  },
]);
const modifierService = (index) => {
      const service = services.value[index];
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
      formulaireService.value.id = service.id;
      formulaireService.value.nom = service.nom;
      formulaireService.value.description = service.description;
      formulaireService.value.nombrePoste = service.nombrePoste;
      formulaireService.value.temp = service.temp;
      formulaireService.value.heureDouverture = service.heureDouverture;
      formulaireService.value.heureFermeture = service.heureFermeture;
      formulaireService.value.nomResponsable = service.nomResponsable;
      formulaireService.value.prenomResponsable = service.prenomResponsable;
      formulaireService.value.emailResponsable = service.emailResponsable;

     

      router.push('/service');
    };

    const supprimerService = (index) => {
  services.value.splice(index, 1);
};

</script>
<style>
.service-box {
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 10px;
}

.service-name {
  font-size: 18px;
  font-weight: bold;
  margin: 0;
}

.service-description {
  margin: 5px 0;
}

.service-info {
  margin-bottom: 5px;
}

.action-button {
  background-color: blue;
  color: #fff;
  border: none;
  border-radius: 3px;
  padding: 5px 10px;
  margin-right: 5px;
  cursor: pointer;
}
</style>
