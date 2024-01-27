<script setup lang="ts">
definePageMeta({ middleware: ["guest"] });

const { forgotPassword } = useAuth();

const email = ref("");
const resetEmailSent = ref(false);
const status = ref("");

const {
  submit,
  inProgress,
  validationErrors: errors,
} = useSubmit(
  () => {
    status.value = "";
    return forgotPassword(email.value);
  },
  {
    onSuccess: (result) => {
      status.value = result?.status ?? "";
      resetEmailSent.value = true;
    },
  }
);
</script>

<template>
  <AuthCard>
    <template #logo>
      <NuxtLink to="/">
        <ApplicationLogo class="w-20 h-20 text-gray-500 fill-current" />
      </NuxtLink>
    </template>

    <div class="mb-4 text-sm text-gray-600">
      Esqueceu sua senha? Sem problemas. Apenas informe seu endereço de email e
      enviaremos um link para resetar sua senha e permitir que escolha uma nova.
    </div>

    <!-- Session Status -->
    <AuthSessionStatus class="mb-4" :status="status" />

    <form @submit.prevent="submit">
      <!-- Email Address -->
      <div>
        <Label for="email">Email</Label>
        <Input
          id="email"
          type="email"
          class="block w-full mt-1"
          v-model="email"
          :errors="errors.email"
          :disabled="resetEmailSent"
          required
          autoFocus
        />
      </div>

      <div class="flex items-center justify-end mt-4">
        <Button class="ml-3" :disabled="inProgress || resetEmailSent">
          Email para reset da senha
        </Button>
      </div>
    </form>
  </AuthCard>
</template>
