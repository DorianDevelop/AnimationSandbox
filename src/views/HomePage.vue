<template>
  <HeaderPage />
  <div class="grid-container">
    <div v-for="item in items" :key="item.name" @click="navigate(item.route)">
      {{ item.name }}
    </div>
  </div>
</template>

<script>
import HeaderPage from '@/components/HeaderPage.vue';

export default {
    name : "HomePage",
    data() {
        return {
        items: [
            { name: 'Buttons', route: '/buttons' },
            { name: 'Menus', route: '/menus' },
            { name: 'Cards', route: '/cards' },
            { name: 'Others', route: '/others' },
            { name: 'Headers', route: '/headers' },
            // ... other items
        ]
        };
    },
    components:{
      HeaderPage
    },
    methods: {
        navigate(route) {
        this.$router.push(route);
        }
    }
};
</script>

<style lang="scss">
.grid-container {
    margin-top: 4rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem;
    justify-content: center;

    padding: 1rem 3rem;

    div{
      border: 1px solid white;
      padding: 2rem 3rem;

      display: flex;
      justify-content: center;
      align-items: center;

      font-size:4rem;

      cursor: pointer;
      transition: opacity 0.2s ease;
    }

    div:hover{
      opacity: 0.4;
    }

    div:active{
      opacity: 0.9;
    }
}
</style>
