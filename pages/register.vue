<script setup lang="ts">
definePageMeta({ middleware: ["guest"] });

const router = useRouter();
const { register } = useAuth();

const data = reactive({
  name: "",
  email: "",
  password: "",
  password_confirmation: "",
});

const {
  submit,
  inProgress,
  validationErrors: errors,
} = useSubmit(() => register(data), {
  onSuccess: () => router.push("/dashboard"),
});
</script>

<template>
  <AuthCard>
    <template #logo>
      <NuxtLink href="/">
        <ApplicationLogo class="w-20 h-20 text-gray-500 fill-current" />
      </NuxtLink>
    </template>

    <form @submit.prevent="submit">
      <!-- Name -->
      <div>
        <Label for="name">Nome</Label>
        <Input
          id="name"
          type="text"
          class="block w-full mt-1"
          v-model="data.name"
          :errors="errors.name"
          required
          autoFocus
        />
      </div>

      <!-- Email Address -->
      <div class="mt-4">
        <Label for="email">Email</Label>
        <Input
          id="email"
          type="email"
          class="block w-full mt-1"
          v-model="data.email"
          :errors="errors.email"
          required
        />
      </div>

      <!-- Password -->
      <div class="mt-4">
        <Label for="password">Senha</Label>
        <Input
          id="password"
          type="password"
          class="block w-full mt-1"
          v-model="data.password"
          :errors="errors.password"
          required
          autoComplete="new-password"
        />
      </div>

      <!-- Confirm Password -->
      <div class="mt-4">
        <Label for="password_confirmation">Confirmar Senha</Label>
        <Input
          id="password_confirmation"
          type="password"
          class="block w-full mt-1"
          v-model="data.password_confirmation"
          :errors="errors.password_confirmation"
          required
        />
      </div>

      <div class="flex items-center justify-end mt-4">
        <NuxtLink
          href="/login"
          class="text-sm text-gray-600 underline hover:text-gray-900"
        >
          Já está cadastrado?
        </NuxtLink>

        <Button class="ml-3" :disabled="inProgress">Cadastrar</Button>
      </div>
    </form>
  </AuthCard>
</template>
