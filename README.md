# Autista.live
![GitHub License](https://img.shields.io/github/license/autistalive/autistalive-api)

Autista.live é uma solução de identificação digital desenvolvida para atender uma necessidade da comunidade autista. Este software foi projetado com o objetivo de oferecer uma maneira eficaz e personalizada de fornecer o laudo e uma identificação eletronica na palma da sua mão.
Com Autista.live, o usuário tem um perfil digital com foto, laudo e identificação digital, incluindo detalhes relevantes e necessidades de acordo com o laudo. 

<img src="https://raw.githubusercontent.com/Autistalive/autistalive-api/main/logo.png" alt="Logo Projeto" style="width:300px;"/>

## Instalação
### Instalando Back-end
```bash
git clone https://github.com/clys-man/autista-live-web.git -b feature/adding-laravel-breeze-api & cd autista-live-web

cp .env.example .env

docker run --rm \
    -u "$(id -u):$(id -g)" \
    -v ".:/var/www/html" \
    -w /var/www/html \
    laravelsail/php83-composer:latest \
    composer install --ignore-platform-reqs

./vendor/bin/sail artisan key:generate

./vendor/bin/sail artisan migrate
```

### Instalando Front-end
```bash
git clone https://github.com/clys-man/autistalive-ui.git -b feature/testing-next-breeze

yarn

cp .env.example .env.local

yarn dev

```


## Comunicação
Temos um grupo para comunicação em tempo real aonde discutimos sobre o projeto no MATRIX.
Favor participar!

```
https://matrix.to/#/#autistalive:matrix.org
```
Se você estiver usando Linux, você pode usar os seguintes clientes: [Matrix Clients](https://matrix.org/ecosystem/clients/)

## Projeto Figma

https://www.figma.com/file/Mt6krhHmm91ZmDdXogFNxe/Autista.live?type=design&node-id=0%3A1&mode=design&t=Al4dT2HqrsSPBEnF-1

## Esboço
Este é um esboço inicial para o front!

<img src="brain-img/1.jpg" alt="Logo Projeto" style="width:600px;"/>

<img src="brain-img/2.jpg" alt="Logo Projeto" style="width:600px;"/>

<img src="brain-img/3.jpg" alt="Logo Projeto" style="width:600px;"/>

<img src="brain-img/4.jpg" alt="Logo Projeto" style="width:600px;"/>

<img src="brain-img/5.jpg" alt="Logo Projeto" style="width:600px;"/>

<img src="brain-img/6.jpg" alt="Logo Projeto" style="width:600px;"/>


## Obrigado aos contribuidores ❤

<a href = "https://github.com/Autistalive/web/graphs/contributors">
  <img src = "https://contrib.rocks/image?repo=Autistalive/autistalive-ui"/>
</a>
