<script setup lang="ts">
definePageMeta({ middleware: ["auth"] });
</script>

<template>
  <NuxtLayout name="app-layout">

    <Head>
      <Title>Autista.live - Dashboard</Title>
    </Head>

    <template #header>
      <h2 class="text-xl font-semibold leading-tight text-gray-800">
        Dashboard
      </h2>
    </template>

    <div class="my-12">
      <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="overflow-hidden bg-white shadow-sm sm:rounded-lg">
          <div class="p-6 bg-white border-b border-gray-200">
            Você está logado!
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>
