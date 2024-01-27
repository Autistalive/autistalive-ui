<script lang="ts" setup>
import { PhPersonArmsSpread, PhList } from "@phosphor-icons/vue";

const isOpened = ref(false);

function toggle() {
  isOpened.value = !isOpened.value
}
</script>

<template>
  <header class="flex w-auto justify-between items-center p-2">
    <img class="flex-none" src="/logo-autistalive.png" alt="Logo Autista Live">
    <div class="flex-initial flex gap-3 items-center font-semibold">
      <PhPersonArmsSpread />
      Acessibilidade
    </div>
    <ButtonIcon @click="isOpened = !isOpened">
      <PhList :size="20" />
    </ButtonIcon>
  </header>

  <div class="w-auto h-auto">
    a
  </div>
</template>
