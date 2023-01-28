<template>
  <div class="container">
    <section id="christmas">
      <router-link to="/all">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/ezclothes-vue.appspot.com/o/Main%20Page%20Images%2Fchristmas.jpg?alt=media&token=1a6ef897-c72b-45ff-b7a8-c904839eda60"
          alt="Christmas"
        />
      </router-link>
    </section>
    <section id="banner">
      <div class="banner--img">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/ezclothes-vue.appspot.com/o/Main%20Page%20Images%2Fbanner.jpg?alt=media&token=c92d0393-fdb7-4ea1-bef6-1ed2c3c64246"
          alt="Banner"
        />
      </div>
      <div class="banner--text">
        <h1>¡Bienvenido a EzClothes!</h1>
        <p>
          En EzClothes encontrarás todo lo que necesitas para vestirte de la
          mejor manera. Tenemos una gran variedad de productos para que puedas
          elegir lo que más te guste.
        </p>
        <button id="seeAllProductsButton">
          <router-link to="/all">Ver todo</router-link>
        </button>
      </div>
    </section>
    <section id="carrousel">
      <img
        src="../assets/media/carrousel/couple.jpg"
        id="carrousel-img"
        alt="Imagen Carrousel"
      />
    </section>
    <section id="follow_us">
      <img
        src="https://firebasestorage.googleapis.com/v0/b/ezclothes-vue.appspot.com/o/Main%20Page%20Images%2Ffollow_us_1.jpg?alt=media&token=9cebef86-5075-4e6d-bc5a-713e7d398d0a"
        alt="Follow Us First Image"
        id="FU1"
        class="FU"
      />
      <img
        src="https://firebasestorage.googleapis.com/v0/b/ezclothes-vue.appspot.com/o/Main%20Page%20Images%2Ffollow_us_2.jpg?alt=media&token=4306511f-1dd6-4dee-af16-96fd25428e65"
        alt="Follow Us First Image"
        id="FU2"
        class="FU"
      />
      <img
        src="https://firebasestorage.googleapis.com/v0/b/ezclothes-vue.appspot.com/o/Main%20Page%20Images%2Ffollow_us_3.jpg?alt=media&token=bb0953e4-16e0-4d22-8510-0d55c040db96"
        alt="Follow Us First Image"
        id="FU3"
        class="FU"
      />
      <div class="follow-us--text">
        <h1>¡Síguenos!</h1>
        <p>
          Te esperamos en nuestras redes sociales. Aquí sucede todo. No te lo
          pierdas.
        </p>
        <div class="social-media">
          <a href="https://www.instagram.com/ezclothes/" target="_blank"><i class="fab fa-instagram"></i></a>
          <a href="https://www.facebook.com/ezclothes" target="_blank"><i class="fab fa-facebook-f"></i></a>
          <a href="https://twitter.com/ezclothes" target="_blank"><i class="fab fa-twitter"></i></a>
        </div>
      </div>
    </section>
    <section id="news">
      <div class="news--text">
        <h1>¡Suscríbete a nuestro newsletter!</h1>
        <p>Recibe las últimas novedades y ofertas de EzClothes.</p>
        <form class="NL_form">
          <input
            type="email"
            name="NL_mail"
            placeholder="Introduce tu email"
            required
          />
          <button type="submit">Suscribirse</button>
        </form>
      </div>
    </section>
  </div>
</template>
