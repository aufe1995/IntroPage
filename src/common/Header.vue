<template>
  <header>
    <div class="menuContainer">
      <div class="logo">
        <router-link to="/">
          <img alt="logo" src="../assets/logo.png" height="80" />
        </router-link>
      </div>
      <div class="itemContainer">
        <div class="itemName">
          <router-link class="itemLink" to="/menu1">메뉴1</router-link>
          <div class="itemContents">
            <router-link to="/menu1">메뉴1</router-link>
            <router-link to="/menu1">메뉴1</router-link>
            <router-link to="/menu1">메뉴1</router-link>
          </div>
        </div>

        <div class="itemName">
          <router-link class="itemLink" to="/menu2">메뉴2</router-link>
          <div class="itemContents">
            <router-link to="/menu2">메뉴2</router-link>
            <router-link to="/menu2">메뉴2</router-link>
            <router-link to="/menu2">메뉴2</router-link>
          </div>
        </div>

        <div class="itemName">
          <router-link class="itemLink" to="/menu3">메뉴3</router-link>
          <div class="itemContents">
            <router-link to="/menu3">메뉴3</router-link>
            <router-link to="/menu3">메뉴3</router-link>
            <router-link to="/menu3">메뉴3</router-link>
          </div>
        </div>

        <div class="itemName">
          <router-link class="itemLink" to="/menu4">메뉴4</router-link>
          <div class="itemContents">
            <router-link to="/menu4">메뉴4</router-link>
            <router-link to="/menu4">메뉴4</router-link>
            <router-link to="/menu4">메뉴4</router-link>
          </div>
        </div>

        <div class="itemName">
          <router-link class="itemLink" to="/main">메뉴</router-link>
          <div class="itemContents">
            <router-link to="/main">메인</router-link>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style>
.menuContainer {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  box-sizing: border-box;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  border-bottom: 1px solid #2c2a29;
  font-size: 0;
  background: #c69265;
}

.menuContainer .itemContainer {
  display: flex;
}
.menuContainer .itemContainer .itemName {
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 0 0 20px;
}
.menuContainer .itemContainer .itemName .itemLink {
  font-size: 14px;
  text-decoration: none;
  font-weight: bold;
  transition: all 0.3s;
  color: #000;
}
.menuContainer .itemContainer .itemName .itemLink:hover {
  color: #2c2a29;
}

.menuContainer .itemContainer .itemName .itemContents {
  position: absolute;
  top: 80px;
  right: 0;
  width: 100%;
  box-sizing: border-box;
  text-align: right;
  padding: 20px;
  background: #2c2a29;
  transition: all 0.3s;
  opacity: 0;
  visibility: hidden;
}
.menuContainer .itemContainer .itemName:hover .itemContents {
  opacity: 1;
  visibility: visible;
}
.menuContainer .itemContainer .itemName .itemContents a {
  font-size: 14px;
  text-decoration: none;
  font-weight: bold;
  display: inline-block;
  padding: 0 0 0 20px;
  color: #fff;
}
</style>
