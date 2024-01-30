<script lang="ts" setup>
import { PhPersonArmsSpread, PhList } from "@phosphor-icons/vue";

const isOpened = ref(false);

function toggle() {
  isOpened.value = !isOpened.value
}
</script>

<template>
  <header class="flex flex-wrap justify-center items-center w-auto p-2 gap-[77px]">
    <NuxtLink href="/" class="flex flex-col items-center justify-center">
      <img class="h-[60px] w-[60px]" src="/logo-autistalive.png" alt="Logo Autista Live">
      <h1 class="flex-none text-[16px] font-bold">Autista live</h1>
    </NuxtLink>

    <div class="flex items-center flex-initial gap-2 font-semibold">
      <PhPersonArmsSpread />
      Acessibilidade
    </div>

    <nav class="inline-flex items-center gap-6">
      <NuxtLink href="/">Início</NuxtLink>
      <NuxtLink href="/#sobre">Sobre o Projeto</NuxtLink>
      <NuxtLink href="/#contato">Contato</NuxtLink>
      <ButtonOutline href="/register">
        Criar Conta
      </ButtonOutline>
      <Button href="/login">
        Entrar
      </Button>
    </nav>

  </header>
</template>

<style>
header {
  font-family: Inter, system-ui, sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}
</style>
