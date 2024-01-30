<script lang="ts" setup></script>

<template>
  <Head>
    <Link href="https://fonts.bunny.net/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet" />
  </Head>

  <Body class="antialiased">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </Body>
</template>

<style>
/* INFO(roberto): Make scrollbar prettier on chrome */
:root {
  --color-accent-primary: #1818B4;
  --color-accent-secondary: #131390;
}

body {
  scrollbar-color: var(--color-accent-primary) transparent;
}

::-webkit-scrollbar {
  height: 0.33rem;
  width: 0.33rem;
}

::-webkit-scrollbar-thumb {
  background: var(--color-accent-primary);
  -webkit-border-radius: 1ex;
  -webkit-box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.75);
}
</style>
