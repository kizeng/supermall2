<template>
  <div class="nav-title">
    <div class="nav-title-left"><slot name="nav-title-left"></slot></div>
    <div class="nav-title-content"><slot name="nav-title-content"></slot></div>
    <div class="nav-title-right"><slot name="nav-title-right"></slot></div>
  </div>
</template>

<script>
export default {
  name: 'TopNav'
};
</script>

<style>
.nav-title {
  width: 100%;
  height: 40px;
  box-shadow: 0 0px 3px #868686;

  font-size: var(--font-size);

  position: fixed;
  display: flex;
  flex-direction: row;

  overflow-x: hidden;
}

.nav-title-left,
.nav-title-right {
  width: 60px;
}

.nav-title-content {
  flex: 1;
}

.nav-title-left,
.nav-title-content,
.nav-title-right {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
