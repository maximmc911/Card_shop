<template>
  <ul class="breadcrumb">
    <li v-for="(item, index) in routing">
      <a :href="item.href" v-if="(index + 1) !== routing.length">{{ item.name }} </a>
    <li v-else>{{ item.name }}</li>
    </li>
  </ul>
</template>

<script setup lang='ts'>
// constants

const routing: Array<router> = [
  {
    id: 1,
    href: '',
    name: 'Главная',
  },
  {
    id: 2,
    href: '',
    name: 'Системы хранения',
  },
  {
    id: 3,
    href: '',
    name: 'Комплекты стеллажных систем',
  },

]
</script>

<style scoped>
.breadcrumb {
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 15px;
  list-style: none;
}

ul.breadcrumb li {
  display: inline;
  font-size: 18px;
  cursor: pointer;
  font-family: 'SF UI Text';
  font-size: 16px;
  font-weight: 400;
  line-height: 16px;
  color: rgba(0, 0, 0, 1);
}

ul.breadcrumb li+li:before {
  padding: 8px;
  color: rgba(114, 119, 131, 1);
  content: "/\00a0";
}

ul.breadcrumb li a {
  color: rgba(114, 119, 131, 1);

  text-decoration: none;
  transition: 0.5s;
}

ul.breadcrumb li a:hover {
  color: rgba(0, 0, 0, 1);
  transition: 0.5s;
}
</style>