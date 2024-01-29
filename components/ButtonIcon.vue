<script>
export default {
  props: {
    href: {
      type: String,
      required: true
    }
  }
}
</script>

<template>
  <NuxtLink v-if="href" :href="href"
    class="inline-flex items-center p-2 bg-transparent border-2 border-accent-primary rounded font-semibold tracking-widest hover:bg-accent-primary hover:text-light-primary active:bg-accent-secondary active:border-accent-secondary focus:outline-none focus:border-accent-primary disabled:opacity-25 transition ease-in-out duration-150">
    <slot />
  </NuxtLink>
  <button v-else
    class="inline-flex items-center p-2 bg-transparent border-2 border-accent-primary rounded font-semibold tracking-widest hover:bg-accent-primary hover:text-light-primary active:bg-accent-secondary active:border-accent-secondary focus:outline-none focus:border-accent-primary disabled:opacity-25 transition ease-in-out duration-150">
    <slot />
  </button>
</template>
