<template>
  <section class="px-4 py-20 md:px-48 grid md:grid-cols-2 gap-28">
    <div class="flex flex-col gap-2">
      <h1 class="text-3xl md:text-5xl font-medium">Contato</h1>
      <p class="md:text-2xl">Em caso de dúvidas, sugestões ou relatar problemas relacionados ao site e ao processo de emissão da carteirinha
        digital envie uma mensagem.</p>
    </div>
    <form class="grid gap-4">
      <!-- 
        FIXME(roberto): component now doesn't allow to pass `ìd` and `name`
        to the HTML input.
      -->
      <div>
        <label for="name">Nome</label>
        <Input class="w-full" placeholder="Digite seu nome" />
      </div>
      <div>
        <label for="email">E-mail</label>
        <Input class="w-full" placeholder="Digite seu e-mail" />
      </div>
      <div>
        <label for="message">Mensagem</label>
        <Input class="w-full" placeholder="Como podemos ajudar?" />
      </div>
      <Button>Enviar Mensagem</Button>
    </form>
  </section>
</template>
