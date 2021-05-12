<template>
    <div class="tabbar">
      <slot></slot>
    </div>
</template>

<script>
</script>

<style>

  .tabbar{
    width: 100%;
    height: 48px;
    box-shadow: 0px -1px 1px rgba(145, 145, 145, 0.1);

    overflow-x: hidden;

    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;

    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;

  }
</style>
