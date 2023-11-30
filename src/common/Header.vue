<template>
  <header>
    <div class="menuContainer">
      <div>
        <router-link to="/">
          <img alt="Vue logo" src="../assets/logo.png" height="100" />
        </router-link>
      </div>
      <div class="itemContainer">
        <ul class="item">
          <li class="item_menu1 item_name">
            <router-link to="/menu1">메뉴1</router-link>
            <div class="item_menu1_contents item_contents">
              <div class="contents_menu">
                <router-link to="/menu1">메뉴1</router-link>
                <router-link to="/menu1">메뉴1</router-link>
                <router-link to="/menu1">메뉴1</router-link>
              </div>
            </div>
          </li>

          <li class="item_menu2 item_name">
            <router-link to="/menu2">메뉴2</router-link>
            <div class="item_menu2_contents item_contents">
              <div class="contents_menu">
                <router-link to="/menu2">메뉴2</router-link>
                <router-link to="/menu2">메뉴2</router-link>
                <router-link to="/menu2">메뉴2</router-link>
              </div>
            </div>
          </li>

          <li class="item_menu3 item_name">
            <router-link to="/menu3">메뉴3</router-link>
            <div class="item_menu3_contents item_contents">
              <div class="contents_menu">
                <router-link to="/menu3">메뉴3</router-link>
                <router-link to="/menu3">메뉴3</router-link>
                <router-link to="/menu3">메뉴3</router-link>
              </div>
            </div>
          </li>

          <li class="item_menu4 item_name">
            <router-link to="/menu4">메뉴4</router-link>
            <div class="item_menu4_contents item_contents">
              <div class="contents_menu">
                <router-link to="/menu4">메뉴4</router-link>
                <router-link to="/menu4">메뉴4</router-link>
                <router-link to="/menu4">메뉴4</router-link>
              </div>
            </div>
          </li>

          <li class="item_menu5 item_name">
            <router-link to="/main">메뉴</router-link>
            <div class="item_menu5_contents item_contents">
              <div class="contents_menu">
                <router-link to="/main">메인</router-link>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style>

header a {
  text-decoration: none;
}

header .menuContainer {
  background-color: #c69265;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  display: flex;
  width: 100%;
  border-bottom: 1px solid #35495e;
  justify-content: space-between;
}

header .itemContainer .item {
  display: flex;
  list-style-type: none;
  margin: 25px 10px 0px 10px;
}

header .menuContainer .item .item_name {
  height: 100%;
  padding: 20px 20px 35px 20px;
  font-size: 13px;
}

header .menuContainer .item .item_name a {
  color: #2c2a29;
}

header .menuContainer .item .item_name:hover a {
  color: #fff;
}

header .menuContainer .item .item_menu1:hover {
  background-color: #2c2a29;
  border-radius: 6px 6px 0 0;
}

header .menuContainer .item .item_menu1:hover .item_menu1_contents {
  display: block; /*hover하면 보이게*/
  background-color: #2c2a29;
}

header .menuContainer .item .item_menu2:hover {
  background-color: #2c2a29;
  border-radius: 6px 6px 0 0;
}

header .menuContainer .item .item_menu2:hover .item_menu2_contents {
  display: block; /*hover하면 보이게*/
  background-color: #2c2a29;
}

header .menuContainer .item .item_menu3:hover {
  background-color: #2c2a29;
  border-radius: 6px 6px 0 0;
}

header .menuContainer .item .item_menu3:hover .item_menu3_contents {
  display: block; /*hover하면 보이게*/
  background-color: #2c2a29;
}

header .menuContainer .item .item_menu4:hover {
  background-color: #2c2a29;
  border-radius: 6px 6px 0 0;
}

header .menuContainer .item .item_menu4:hover .item_menu4_contents {
  display: block; /*hover하면 보이게*/
  background-color: #2c2a29;
}

header .menuContainer .item .item_menu5:hover {
  background-color: #2c2a29;
  border-radius: 6px 6px 0 0;
}

header .menuContainer .item .item_menu5:hover .item_menu5_contents {
  display: block; /*hover하면 보이게*/
  background-color: #2c2a29;
}

header .menuContainer .item .item_contents {
  width: 100%;
  position: fixed;
  margin-top: 22px;
  left: 0;
  display: none; /*평소에는 보이지 않게*/
}

header .menuContainer .item .item_contents .contents_menu {
  padding: 20px 0;
}
</style>
