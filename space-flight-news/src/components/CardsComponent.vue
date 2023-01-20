<template>
  <div class="fadeIn">
  <b-card :id="id" class="overflow-hidden section" style="max-width: 70%;">
    <b-row>
      <b-col md="6">
        <b-card-img :src="image" :alt="alt" class="rounded-0" style="height: -webkit-fill-available"></b-card-img>
      </b-col>
      <b-col md="6">
        <b-card-body :title="title">
          <b-card-sub-title>{{ date }}</b-card-sub-title>
          <b-badge class="badge-site">{{site}}</b-badge>
          <b-card-text>
            {{desc}}
          </b-card-text>
          <b-button class="btn-action" v-b-modal.modal-xl @click="$bvModal.show(modal.toString())">Ver mais</b-button>
        </b-card-body>
      </b-col>
    </b-row>
  </b-card>
  </div>
</template>
<script>
export default {
  props: ['id', 'title', 'site', 'image', 'alt', 'date', 'desc', 'modal']
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
