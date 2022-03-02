<template>
  <div id="app">
    <b-navbar toggleable="md" type="light" variant="light">
      <b-container>
        <b-navbar-brand :to="{ name: 'Home' }"
          >
          <img src="./assets/dentimed_logo.png" alt=""/></b-navbar-brand
        >
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item :to="{ name: 'Products' }">productos</b-nav-item>
            <b-nav-item :to="{ name: 'Contacts' }">contáctanos</b-nav-item>
            <b-nav-item :to="{ name: 'ortodoncia' }">ortodoncia</b-nav-item>
            <b-nav-item :to="{ name: 'endodoncia' }">endodoncia</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
