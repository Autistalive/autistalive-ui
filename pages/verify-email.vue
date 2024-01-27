<script setup lang="ts">
definePageMeta({ middleware: ["unverified"] });

const { logout, resendEmailVerification } = useAuth();
const verificationIsSent = ref(false);

async function handleResendVerification() {
  const status = (await resendEmailVerification()).status;
  if (status === "verification-link-sent") {
    verificationIsSent.value = true;
  }
}
</script>

<template>
  <AuthCard>
    <template #logo>
      <NuxtLink to="/">
        <ApplicationLogo class="w-20 h-20 text-gray-500 fill-current" />
      </NuxtLink>
    </template>
    <div class="mb-4 text-sm text-gray-600">
      Obrigado por se cadastrar! Antes de começar, confirme seu e-mail clickando
      no link que acabamos de te enviar. Caso não tenha recebido, podemos enviar novamente.
    </div>

    <template v-if="verificationIsSent">
      <div class="mb-4 text-sm font-medium text-green-600">
        Um novo link de verificação foi enviado para o seu endereço de e-mail.
      </div>
    </template>

    <div class="flex items-center justify-between mt-4">
      <Button @click="handleResendVerification" :disabled="verificationIsSent">
        Re-enviar e-mail de verificação.
      </Button>

      <button
        type="button"
        class="text-sm text-gray-600 underline hover:text-gray-900"
        @click="logout"
      >
        Logout
      </button>
    </div>
  </AuthCard>
</template>
