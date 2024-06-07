<template>
  <div class="Main" id="main">
    <video
      class="inner-video"
      src="../../public/video/[TFT] TRAILER TFT SET 11 _ ĐẤU TRƯỜNG CHÂN LÝ _ MÙA 11.mp4"
      type="video/mp4"
      autoplay
      muted
      loop
    ></video>
    <div class="container">
      <div class="inner-main">
        <div class="row">
          <div class="col-6">
            <div class="inner-content">
              <h1 class="inner-title">
                CHÀO MỪNG ĐẾN VỚI ĐẤU TRƯỜNG CHÂN LÝ
                <strong>TEAMFIGHT TACTICS</strong>
              </h1>
              <div class="inner-button">
                <a href="#">
                  CHƠI NGAY
                  <i class="fa-solid fa-circle-chevron-right"></i
                ></a>
              </div>
            </div>
          </div>
          <div class="col-6">
            <div class="inner-img">
              <img src="../../public/img/yone-ta-anh-song-kiem-ti-ni-Photoroom.png" alt="conma" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Main'
}
</script>
<style scoped>
.Main {
  position: relative;
}

.Main .inner-video {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -1;
  object-fit: cover;
}
.Main::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  background: #000;
  width: 100%;
  height: 100%;
  opacity: 0.3;
}
.Main .inner-video video {
  object-fit: cover;
}
.Main .inner-main {
  padding: 100px 0;
}
.Main .inner-main .inner-content {
  padding: 100px 0;
  justify-content: center;
  align-items: center;
}
.Main .inner-main .inner-title {
  color: #ffffff;
  font-size: 70px;
  font-weight: 800;
  margin-bottom: 20px;
}
.Main .inner-main .inner-title strong {
  color: red;
}
.Main .inner-main .inner-desc {
  color: #ffffff;
  font-size: 20px;
  margin-bottom: 25px;
}
.Main .inner-main .inner-button a {
  font-size: 26px;
  color: #ffffff;
  padding: 10px 25px;
  background: transparent;
  margin-top: 30px;
  border: 1px solid black;
  border-radius: 5px;
}
.Main .inner-main .inner-button a:hover {
  background: #718659;
  transition: all 0.7s;
}
.Main .inner-main .inner-button i {
  margin-left: 5px;
}
.Main .inner-main .inner-img img {
  width: 120%;
  height: auto;
  object-fit: cover;
}
a {
  text-decoration: none;
}
a:hover {
  text-decoration: none;
}
</style>
