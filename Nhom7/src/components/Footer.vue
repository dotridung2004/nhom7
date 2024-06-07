<template>
  <footer class="footer" id="footer">
    <div class="container">
      <div class="row">
        <div class="col-xl-9">
          <h3 class="inner-title">Copyright 2024 HaiCutee(^/^) - All Rights Reserved</h3>
        </div>
        <div class="col-xl-3">
          <div class="inner-icon">
            <ul>
              <li>
                <a href="https://www.facebook.com/DTCLVN"><i class="fa-brands fa-facebook"></i></a>
              </li>
              <li>
                <a href="https://www.instagram.com/teamfighttactics/"
                  ><i class="fa-brands fa-instagram"></i
                ></a>
              </li>
              <li>
                <a href="https://github.com/topics/teamfight-tactics"
                  ><i class="fa-brands fa-github"></i
                ></a>
              </li>
              <li>
                <a href="https://discord.com/invite/teamfighttactics"
                  ><i class="fa-brands fa-discord"></i
                ></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
.footer {
  padding: 20px 0;
  background: linear-gradient(to right, #f8ba45, #885127);
}
.footer .inner-title {
  font-size: 20px;
  font-weight: 400;
  color: #ffffff;
  text-align: center;
  margin-top: 15px;
}
.footer .inner-icon ul {
  display: flex;
  justify-content: center;
  align-items: center;
}
.footer .inner-icon ul li i {
  font-size: 30px;
  margin: 10px;
  color: #253118;
}
.footer .inner-icon ul li {
  list-style: none;
  text-decoration: none;
}
</style>
