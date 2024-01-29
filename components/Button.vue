<script>
export default {
  props: {
    href: {
      type: String,
      required: false
    }
  }
}
</script>
<template>
  <NuxtLink v-if="href" :href="href"
    class="inline-flex items-center px-4 py-2 tracking-widest text-light-primary transition duration-150 ease-in-out bg-accent-primary border-transparent border-transparent rounded hover:bg-accent-secondary active:bg-indigo-900 focus:outline-none focus:border-indigo-900 focus:ring ring-indigo-300 disabled:opacity-25">
    <slot />
  </NuxtLink>
  <button v-else
    class="inline-flex items-center px-4 py-2 tracking-widest text-light-primary transition duration-150 ease-in-out bg-accent-primary border-transparent border-transparent rounded hover:bg-accent-secondary active:bg-indigo-900 focus:outline-none focus:border-indigo-900 focus:ring ring-indigo-300 disabled:opacity-25">
    <slot />
  </button>
</template>
