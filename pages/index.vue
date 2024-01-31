<script lang="ts" setup>
const { isLoggedIn } = useAuth();
</script>

<template>
  <NuxtLayout name="website-layout">

    <Head>
      <Title>Autista live</Title>
    </Head>

    <HeroSection />
    <AboutProjectSection />
    <MissionSection />
  </NuxtLayout>
</template>
