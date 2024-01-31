<template>
  <section class="max-w-screen-xl flex items-start justify-around self-center overflow-hidden">
    <img src="/puzzle-background.png" alt="Imagem de quebra-cabeça"/>
    <div class="grid gap-8">
      <div class="grid gap-2">
        <h1 class="text-5xl text-dark-secondary leading-normal">O Projeto Autista Live</h1>
        <p class="text-2xl leading-tight">O Autista Live é uma iniciativa dedicada a oferecer uma solução inclusiva e
          acessível para
          pessoas com autismo.</p>
        <p class="text-2xl leading-tight">Nosso projeto visa fornecer uma plataforma onde indivíduos autistas possam obter
          uma carteirinha
          digital que comprove seu diagnóstico, oferecendo uma maneira fácil e confiável de demonstrar sua condição em
          diversas situações cotidianas.</p>
      </div>
      <div class="grid gap-2">
        <h2 class="text-3xl text-dark-secondary leading-normal">Quem faz o Autista Live</h2>
        <p class="leading-tight">O Autista Live é construído por uma equipe apaixonada e comprometida com a causa da
          inclusão e do apoio às
          pessoas com autismo.</p>
        <p class="leading-tight text-base">Nossa equipe é composta por desenvolvedores, designers e profissionais dedicados que
          trabalham juntos para criar
          e manter uma plataforma segura, funcional e amigável para nossos usuários.</p>
      </div>
      <ul class="flex gap-8 list-none overflow-auto scrollbar-shift-fix">
        <li v-for="person in persons">
          <CardMember :personName="person.name" :personRoles="person.roles" :imageURI="person.imageURI"
          :github="person.github ?? ''" :linkedin="person.linkedin ?? ''"
          :email="person.email ? `mailto:${person.email}` : ''"/>
        </li>
      </ul>
    </div>
    <img src="/puzzle-background2.png" alt="Imagem de quebra-cabeça" class="translate-y-16" />
  </section>
</template>

<script lang="ts" setup>

  const persons = [
    {
      name: "Jefferson Carneiro",
      roles: ['Fundador', 'Back-end', 'Sysadmin'],
      imageURI: '/members-01.png',
      linkedin: 'https://www.linkedin.com/in/oslackjeff/',
      github: 'https://github.com/slackjeff',
      email: 'slackjeff@riseup.net',
    },
    {
      name: "Dener Garcia",
      roles: ['UX/UI Designer', 'Front-end'],
      imageURI: '/members-03.png',
      linkedin: 'https://www.linkedin.com/in/denergarcia/',
      github: 'https://github.com/Dener-Garcia',
      email: 'dener.criarbr@gmail.com',
    },
    {
      name: "Heron X.",
      roles: ['Front-end'],
      imageURI: '/members-02.png',
      linkedin: 'https://www.linkedin.com/in/heron-x',
      github: 'https://github.com/nellfs',
      email: 'heron.x.dev@gmail.com',
    },
    {
      name: "Roberto Esteves",
      roles: ['Front-end', 'Back-end'],
      imageURI: '/members-04.png',
      linkedin: 'https://www.linkedin.com/in/roberto-esteves/',
      github: 'https://github.com/robertoesteves13',
      email: 'contact@robertoesteves.dev',
    },
    {
      name: "Heitor Quaglia",
      roles: ['Back-end'],
      imageURI: '/members-06.png',
      linkedin: 'https://www.linkedin.com/in/heitor-bernardes-quaglia-376784129',
      github: 'https://github.com/HeitorQuaglia',
      email: 'heitor.bq@hotmail.com',
    },
    {
      name: "Vinicius de Oliveira",
      roles: ['Front-end'],
      imageURI: '/members-07.png',
      linkedin: 'https://www.linkedin.com/in/vinicius149/',
      github: 'https://github.com/Vinicius149',
      email: 'vindeoli@gmail.com',
    },
    {
      name: "Gabriel de Souza",
      roles: ['Front-end'],
      imageURI: '/members-08.png',
      linkedin: 'https://www.linkedin.com/in/gabriellkdesouza',
      github: 'https://github.com/aleatoreo22',
      email: 'gabriellucaskilliandesouza@gmail.com',
    },
    {
      name: "Lucas Veiga",
      roles: ['Front-end', 'Back-end'],
      imageURI: '/members-09.png',
      linkedin: 'https://www.linkedin.com/in/maotovisk/',
      github: 'https://github.com/maotovisk',
      email: 'me@maot.dev',
    },
    {
      name: "Gabriel Medeiros",
      roles: ['Back-end'],
      imageURI: '/members-05.png',
      linkedin: '',
      github: 'https://github.com/norththefirst',
      email: '',
    },
  ]
</script>
