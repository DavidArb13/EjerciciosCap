<template>
  <body class="red todo">
    <div class="content">
        <div class="imgs">
            <img src="../assets/img/img1.jpg"  alt="Product image">
            <img src="../assets/img/img2.jpg"  alt="Product image">
            <img src="../assets/img/img3.jpg"  alt="Product image">
            <img src="../assets/img/img4.jpg" class="imgs--4" alt="Product image">
        </div>

        <div class="info">
            <div class="colors" @click="shop()">
                <button id="yellow"></button>
                <button id="blue"></button>
                <button id="green"></button>
                <button id="red"></button>
            </div>
            <p class="name">Adidas Originals</p>
            <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores laudantium sapiente asperiores sint magnam, expedita nihil rem explicabo et sunt.</p>
            <div class="cart">
                <p class="price">24 $</p>
                <button class="action">Add to cart</button>
            </div>
        </div>
    </div>
  </body>
</template>

<script>
export default {
  methods: {
    shop(){
      const colorButtons = document.querySelectorAll('.colors button');
      colorButtons.forEach(item => {
        item.addEventListener('click', function() {
          const colorSelectedId = this.id;
          document.body.className = colorSelectedId;
        })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .bod {
  margin: 0;
  padding: 0;
  min-height: 100vh;
  background-color: rgb(0, 0, 0);
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: sans-serif;
  background-color: #f1f1f1;
}

.cont {
  width: 1000px;
  position: relative;
  display: flex;
  justify-content: space-between;

.card{
    position: relative;
    border-radius: 10px;
}

.icon{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      transition: 0.7s;
      z-index: 1;
}
.container .card:nth-child(1) .icon {
        background: #ff0000;
}
 .container .card:nth-child(2) .icon {
        background: #4267b2;
      }
.container .card:nth-child(3) .icon {
        background: #00aced;
      }
  
  
}

.container .card:nth-child(1) .icon {
  background: #ff0000;
}
.container .card:nth-child(2) .icon {
  background: #4267b2;
}
.container .card:nth-child(3) .icon {
  background: #00aced;
}

i {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 80px;
  color: #fff;
  transition: 0.7s;
}

.container .card .face {
  width: 300px;
  height: 200px;
  transition: 0.5s;
}

.container .card .face.face1 {
  position: relative;
  background: #333;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  transform: translateY(140px);
}

.container .card:hover .face.face1 {
  background: #ff0057;
  transform: translateY(0);
}

.container .card:hover .face.face1 .content {
  opacity: 1;
  transition: 0.5s;
}

.container .card .face.face1 .content i {
  max-width: 100px;
}

.container .card .face.face2 {
  position: relative;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.8);
  transform: translateY(-60px);
}

.container .card:hover .face.face2 {
  transform: translateY(0);
}

.container .card .face.face2 .content p {
  margin: 0;
  padding: 0;
  text-align: center;
  color: #414141;
}

.container .card .face.face2 .content h3 {
  margin: 0 0 10px 0;
  padding: 0;
  color: #fff;
  font-size: 24px;
  text-align: center;
}

.container a {
  text-decoration: none;
  color: #414141;
} 
</style>