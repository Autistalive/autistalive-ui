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
    class="inline-flex items-center px-4 py-2 transition duration-150 ease-in-out bg-transparent border-2 border-indigo-700 rounded hover:bg-indigo-700 hover:text-white active:bg-indigo-900 focus:outline-none focus:border-indigo-900 focus:ring ring-indigo-300 disabled:opacity-25">
    <slot />
  </NuxtLink>
  <button v-else
    class="inline-flex items-center px-4 py-2 transition duration-150 ease-in-out bg-transparent border-2 border-indigo-700 rounded hover:bg-indigo-700 hover:text-white active:bg-indigo-900 focus:outline-none focus:border-indigo-900 focus:ring ring-indigo-300 disabled:opacity-25">
    <slot />
  </button>
</template>
