<template>
  <HeaderPage />
  <div class="content-containers">
    <component v-for="component in components" :key="component.name" :is="component.component" />
  </div>
</template>

<script>
import HeaderPage from '@/components/HeaderPage.vue';

export default {
  data() {
    return {
      components: [],
    };
  },
  components:{
    HeaderPage
  },
  created() {
    // Automatically import all Vue components from the Buttons directory
    const requireComponent = require.context(
      '@/components/Headers',
      false,
      /[\w-]+\.vue$/
    );

    requireComponent.keys().forEach((fileName) => {
      // Get the component config
      const componentConfig = requireComponent(fileName);

      // Extract the PascalCase name of the component
      const componentName = fileName
        // Remove the "./_" from the beginning
        .replace(/^\.\/_/, '')
        // Remove the file extension from the end
        .replace(/\.\w+$/, '')
        // Split up kebabs
        .split('-')
        // Upper case
        .map((kebab) => kebab.charAt(0).toUpperCase() + kebab.slice(1))
        // Concatenated
        .join('');

      this.components.push({
        name: componentName,
        component: componentConfig.default || componentConfig,
      });
    });
  },
};
</script>
