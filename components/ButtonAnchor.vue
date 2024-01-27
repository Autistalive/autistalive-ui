<template>
  <div class="group">
  <button
    class="text-indigo-300 transition duration-300"
  >
    <slot />
  </button>
  <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-indigo-300">
  </span>
  </div>
</template>
