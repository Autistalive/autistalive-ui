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
    class="inline-flex items-center px-4 py-2 transition duration-150 ease-in-out bg-transparent border-2 border-accent-primary rounded hover:bg-accent-primary hover:text-light-primary active:bg-accent-secondary focus:outline-none focus:border-indigo-900 focus:ring ring-indigo-300 disabled:opacity-25">
    <slot />
  </NuxtLink>
  <button v-else
    class="inline-flex items-center px-4 py-2 transition duration-150 ease-in-out bg-transparent border-2 border-accent-primary rounded hover:bg-accent-primary hover:text-light-primary active:bg-accent-secondary focus:outline-none focus:border-indigo-900 focus:ring ring-indigo-300 disabled:opacity-25">
    <slot />
  </button>
</template>
