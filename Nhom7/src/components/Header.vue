<template>
  <header class="header">
    <div class="container">
      <div class="row">
        <div class="col-xl-12">
          <div class="inner-main">
            <div class="inner-logo">
              <a href="index.html"><img src="../../public/img/TFT_Logomark_Gold.png" alt="" /></a>
            </div>
            <div class="inner-menu">
              <ul>
                <li>
                  <a><router-link to="/">Trang chủ</router-link></a>
                </li>
                <li>
                  <a><router-link to="#">Sự kiện</router-link></a>
                </li>
                <li>
                  <a><router-link to="/tin-tuc1" @click="hideMain">Tin tức</router-link></a>
                </li>
                <li>
                  <a><router-link to="#">Liên hệ</router-link></a>
                </li>
                <li>
                  <a href="#" @click="showLoginModal">{{ isLoggedIn ? username : 'Đăng nhập' }}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div v-if="isModalVisible" class="modal">
      <div class="modal-content">
        <span class="close" @click="hideLoginModal">&times;</span>
        <div class="inner-modal">
          <h2>Đăng nhập</h2>
          <form @submit.prevent="login">
            <label for="username">Username:</label>
            <input type="text" id="username" v-model="form.username" required />
            <label for="password">Password:</label>
            <input type="password" id="password" v-model="form.password" required />
            <button type="submit" class="btn">Login</button>
          </form>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      isModalVisible: false,
      isLoggedIn: false,
      username: '',
      form: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    showLoginModal() {
      this.isModalVisible = true
    },
    hideLoginModal() {
      this.isModalVisible = false
    },
    hideMain() {
      document.getElementById('main').style.display = 'none'
      document.getElementById('footer').style.display = 'none'
    },

    login() {
      // Giả lập quá trình kiểm tra đăng nhập, thay bằng kiểm tra thực tế nếu cần
      if (this.form.username === 'Haicute' && this.form.password === '123456789') {
        this.isLoggedIn = true
        this.username = this.form.username
        this.hideLoginModal()
        alert('Đăng nhập thành công')
      } else {
        alert('Sai username hoặc password')
      }
    }
  }
}
</script>

<style scoped>
.header {
  background: black;
  position: sticky;
  z-index: 999;
  top: 0;
}

.header .inner-main {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 0;
}

.header .inner-logo {
  font-size: 30px;
  font-weight: 800;
}

.header .inner-logo a {
  color: aliceblue;
}

.header .inner-menu ul {
  display: flex;
}

.header .inner-menu ul li a {
  color: #ffffff;
  padding: 47px 30px;
}

.header .inner-menu ul li a:hover {
  background: #718659;
  /* transition: all 1s; */
}

.header .inner-menu ul #loginButton {
  border-color: transparent;
  background-color: black;
  color: white;
}

a {
  text-decoration: none;
}

a:hover {
  text-decoration: none;
}

ul {
  list-style: none;
}

.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
}

.modal-content {
  background-color: white;
  padding: 30px;
  border-radius: 10px;
  width: 500px;
  max-width: 90%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  position: relative;
}

.close {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
}
.inner-modal {
  display: flex;
  flex-direction: column;
}

.inner-modal h2 {
  margin-bottom: 20px;
  text-align: center;
}

.inner-modal label {
  margin-bottom: 5px;
}

.inner-modal input {
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: calc(100% - 22px); /* Adjust for padding and border */
}

.inner-modal .btn {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-align: center;
}

.inner-modal .btn:hover {
  background-color: #0056b3;
}
</style>
