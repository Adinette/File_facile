<template>
  <div class="flex justify-center items-center bg-gray-100 min-h-screen">
    <div class="w-full max-w-md bg-slate-200 rounded-lg shadow-lg p-6">
      <h2 class="text-2xl font-bold text-center mb-6">Login</h2>
      <form
        name="login_form"
        method="post"
        action="/login_check"
        class="mt-8 space-y-6"
      >
        <div class="mb-4">
          <label class="block font-medium text-gray-700" for="username"
            >Email</label
          >
          <input
            type="text"
            id="login_form__username"
            name="login_form[_username]"
            required="required"
            class="block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 py-2 px-4 sm:text-sm"
          />
        </div>
        <div class="mb-4">
          <label class="block font-medium text-gray-700" for="password"
            >Password</label
          >
          <input
            type="password"
            id="login_form__password"
            name="login_form[_password]"
            required="required"
            class="block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 py-2 px-4 sm:text-sm"
          />
        </div>
        <div class="mb-4">
          <label class="flex items-center">
            <input
              type="checkbox"
              id="remember_me"
              name="_remember_me"
              value="on"
              class="form-checkbox"
            />
            <span class="ml-2">Remember me</span>
          </label>
        </div>
        <router-link :to="{name:'dashAdmin'}"
          class="block w-full py-2 px-4 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold rounded-lg text-center"
          
          >Login</router-link
        >
        <a
          href=""
          class="text-sm text-gray-600 hover:underline"
          >Forgot password?</a
        >
        <p class="text-muted text-center mt-4">Already have an account?</p>
        <router-link :to="{name:'/signup'}"
          class="block w-full py-2 px-4 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold rounded-lg text-center"
          
          >Create an account</router-link
        >
      </form>
    </div>
  </div>
</template>

<script setup></script>

<style></style>
