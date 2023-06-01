<script setup></script>

<template>
  <header class="head">
    <div class="text-gray-700 text-md">
      <div class="flex justify-between items-end">
        <div class="flex items-end">
          <input
            type="text"
            class="border border-gray-300 rounded-lg px-2 py-2 mr-4"
            placeholder="Rechercher..."
          />
          <div class="menu flex justify-between space-x-6">
            <p>Bienvenu sur wayi</p>
            <router-link to="/signup">
            <button
              class="btn-logout"
            >
              Inscription
            </button>
          </router-link>
            <router-link to="/dashAdmin">
            <button
              class="btn-logout"
            >
              Get Started
            </button>
          </router-link>
            <button class="btn-logout">Logout</button>
          </div>
        
        </div>
        </div>
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

.head {
  width: 100%;
  height: 4rem;
  box-shadow: 0 4px 6px -1px rgb(0 0 0/ 0.1);
  align-items: center;
  justify-content: space-between;
  font-weight: 700;
  padding-left: 6rem;
  padding-right: 6rem;
}

.btn-logout {
  padding: 0.5rem 0.5rem;
  background-color: blue;
  color: white;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  text-align: end;
}
</style>
