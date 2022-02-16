<template>
  <div id="sidebar">
    <ul>
      <li>
        <a href="/main/index"
          ><img
            width="50%"
            class="logo"
            src="../assets/log.png"
            alt="image"
          />
        </a>
      </li>
      <li><a href="/main/accounts">Estado de cuenta</a></li>
      <li><a href="/main/movements">Movimientos</a></li>
      <li><a href="#">Corte de estado de cuenta</a></li>
      <li><a href="/main/filtro">Record de cuenta</a></li>
      <li><a href="/main/reload">Recargas</a></li>
      <li><a href="/auth/logout">Salir</a></li>
    </ul>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
}

#sidebar {
  position: fixed;
  width: 200px;
  height: 100%;
  background: #151719;
  left: -200px;
  transition: all 500ms linear;
}

#container-bf-sidebar {
  margin-left: 0px;
  transition: all 500ms linear;
}

#container-bf-sidebar.active {
  margin-left: 200px;
  transition: all 500ms linear;
}

#sidebar.active {
  left: 0px;
}

#sidebar ul li {
  color: rgba(230, 230, 230, 0.9);
  text-align: center;
  list-style: none;
  border-bottom: 1px solid rgba(100, 100, 100, 0.3);
  padding: 15px 10px;
}

#sidebar a {
  color: rgba(230, 230, 230, 0.9);
  list-style: none;
  text-decoration: none;
}

#sidebar li:hover {
  color: #008a90;
  padding-left: 30px;
}

#sidebar a:hover {
  color: #008a90;
}

.logo {
  border-radius: 50%;
  display: block;
  margin: 0 auto;
}

#sidebar .toggle-btn {
  position: absolute;
  left: 230px;
  top: 20px;
  cursor: pointer;
}

#sidebar .toggle-btn span {
  display: block;
  width: 40px;
  text-align: center;
  font-size: 30px;
  border: 1px solid #000;
}

.overlay {
  background: rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  visibility: hidden;
  overflow: scroll;
}

.overlay.active {
  visibility: visible;
}

.overlay_hidden {
  background: #f8f8f8;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.3);
  border-radius: 3px;
  font-family: "Montserrat", sans-serif;
  padding: 15px;
  text-align: center;
  width: 600px;
  opacity: 0;
}

.overlay_hidden.active {
  opacity: 1;
}
</style>
