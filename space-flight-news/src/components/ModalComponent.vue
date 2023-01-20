<template>
  <b-modal size="xl" :id="id" hide-footer centered>
    <b-row>
    <slot name="img"></slot>
    <b-col md="6">
      <slot name="content"></slot>
      <b-button class="btn-action" style="margin: auto;display: flex;"
      @click="goToSite(site)">Ir para o site</b-button>
    </b-col>
    </b-row>
  </b-modal>
</template>

<script>
export default {
  name: 'ModalComponent',
  props: {
    id: {
      type: Number,
      required: true
    },
    site: {
      type: String,
      required: true
    }
  },
  methods: {
    goToSite (site) {
      window.open(site, '_blank')
    }
  }
}
</script>

<style scoped>
.section:hover {
  transform: scale(1.1) !important;
  transition: transform 500ms ease 0s, opacity 500ms ease 0s,
    visibility 500ms ease 0s;
}

.section {
  background: whitesmoke;
  border-color: slategrey;
  border-radius: 15px;
  position: relative;
  opacity: 0.9;
  margin: 3% auto;
}
.btn-action{
  background-color: #d07017;
}

.btn-action:hover{
  background-color: #302e53;
}

.badge-site{
  background-color: #302e53;
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
</style>
