<template>
  <div class="home">
    <HelloWorld msg=""/>
    <div v-for="(card, index) in cards" :key="index">
      <CardsComponent :title="card.title" :desc="card.text"/>
    </div>
    <button type="submit">carregar mais</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import CardsComponent from '@/components/CardsComponent.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    CardsComponent
  },
  data () {
    return {
      cards: [
        {
          title: 'Gaste menos com entregas',
          text: 'Não gaste uma fortuna com frota própria. Deixe suas entregas com a gente e pague apenas pelo que usar.'
        },
        {
          title: 'Entregas do seu jeito',
          text: 'Estamos sempre prontos para conectar seu negócio a motoristas parceiros, auditados e confiavéis.'
        },
        {
          title: 'Deixe seus clientes felizes',
          text: 'Entregue os pedidos no mesmo dia e ofereça uma experiência de compra única aos seus consumidores!'
        }
      ]
    }
  }
}
</script>
<style scoped>
.home{
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    align-items: center;
}
</style>
