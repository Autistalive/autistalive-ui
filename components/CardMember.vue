<script lang="ts" setup>
import { PhLinkedinLogo, PhGithubLogo, PhEnvelopeOpen } from "@phosphor-icons/vue";

type Props = {
  personName: string;
  personRoles: string[];
  imageURI: string;
  linkedin?: string | null;
  github?: string | null;
  email?: string | null;
};

defineProps<Props>();

</script>
<template>
  <div class="grid gap-4 w-60 h-[18.5rem] justify-items-center border-2 px-4 py-6 border-accent-primary rounded-lg">
    <img class="w-24 h-24 rounded-full font-semibold object-cover border-4 border-accent-primary"
    :src="imageURI" :alt="`Foto de ${personName}`">
    <div class="grid text-center gap-4 w-[100%]">
      <p class="text-2xl">{{ personName }}</p>
      <div class="flex gap-2 justify-center">
        <span v-for="(item, index) in personRoles" class="text-sm">
          {{ item }}
        </span>
      </div>
      <div class="flex justify-between">
        <ButtonIcon class="w-10 h-10" :href="linkedin">
          <PhLinkedinLogo :size="24" />
        </ButtonIcon>
        <ButtonIcon class="w-10 h-10" :href="github">
          <PhGithubLogo :size="24" />
        </ButtonIcon>
        <ButtonIcon class="w-10 h-10" :href="`mailto:${email}`">
          <PhEnvelopeOpen :size="24" />
        </ButtonIcon>
      </div>
    </div>
  </div>
</template>
