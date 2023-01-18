<template>
  <div class="fadeIn">
   <!--  <section :class="'hero-body hero-bgimg-' + imageTitle">
       <figure class="image is-128x128">
          <img class="is-rounded" :src="image" :alt="alt" />
        </figure>
      <section class="hero is-light is-large hero-opacity">
        <h1 class="hero-opacity title">
          {{ title }}
        </h1>
        <br />
        <p class="hero-opacity subtitle is-size-5">
          {{ desc }}
        </p>
      </section>
    </section> -->
    <b-card
    :title="title"
    :img-src="image"
    :img-alt="alt"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="image-card "
  >
    <b-card-text>
     {{desc}}
    </b-card-text>
  </b-card>
  </div>

  <!--  <b-card
    :title="title"
    :img-src="image"
    :img-alt="alt"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="image-card "
  >
    <b-card-text>
     {{desc}}
    </b-card-text>
  </b-card> -->
</template>
<script>
export default {
  props: ["title", "imageTitle", "image", "alt", "card_class", "desc"]
};
</script>
<style scoped>
.section:hover {
  /*  border: 1px solid transparent !important; */
  transform: scale(1.1) !important;
  /*   box-shadow: 0 5px slategrey !important; */
  transition: transform 500ms ease 0s, opacity 500ms ease 0s,
    visibility 500ms ease 0s;
}

.section {
  background: whitesmoke;
  /*   border: 0.9px solid; */
  border-color: slategrey;
  border-radius: 15px;
  position: relative;
  opacity: 0.9;
  display: inline-flex !important;
  /*  height: 130px !important; */
  width: auto;
  margin: auto auto 2% auto;
}

.media-content {
  padding: 3%;
}

.image img {
  display: block;
  height: 128px !important;
  width: 100%;
  border-radius: 15px !important;
}

.fadeIn {
  opacity: 1;
  animation-name: FadeIn;
  animation-iteration-count: 1;
  animation-timing-function: ease-in;
  animation-duration: 1s;
}

@keyframes FadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.hero-opacity,
.hero-opacity.title,
.hero-opacity.subtitle {
  opacity: 100% !important;
}

.hero-bgimg-residencia {
  background-image: url(https://drive.google.com/uc?export=view&id=1rl3RgWFu_VYUlNlj9Y2XYG3SCz0uDpt-);
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  opacity: 0.8;
}

.hero-bgimg-predio {
  background-image: url(https://drive.google.com/uc?export=view&id=1H9XSbGNxIUGKlxeAP8wXlRm5r8ttWPwu);
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  opacity: 0.8;
}

.hero-bgimg-comercio {
  background-image: url(https://drive.google.com/uc?export=view&id=19mSrBevky7pAqtFF2bqCgfNhlQ5j3kHC);
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  opacity: 0.8;
}
</style>
