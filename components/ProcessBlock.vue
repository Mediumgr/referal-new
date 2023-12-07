<template>
  <div class="process">
    <div class="process-wrapper">
      <div class="process_item process_item_video show">
        <video poster="../assets/images/process/process-b1.jpg" id="background-video" autoplay loop muted playsinline>
          <source src="../assets/video/process/process-b1.mp4" type="video/mp4"/>
        </video>
        <div class="process_item-overlay50"></div>
        <div class="process_item_video-header">
          <div class="process_item_video-text">Как получить<br>бонус</div>
          <div class="process_item_video-text2"></div>
        </div>
      </div>
      <div class="process_item">
        <div class="process_item_header-num">01</div>
        <div class="process_item_description">
          <div class="process_item_header">Заполните форму заявки<br>на сайте вместе с другом</div>
        </div>
      </div>
      <div class="process_item">
        <div class="process_item_header-num">02</div>
        <div class="process_item_description">
          <div class="process_item_header">На ваши электронные адреса придет подтверждение. <br><br>Заявки
            рассматриваются до 5 рабочих дней
          </div>
        </div>
      </div>
      <div class="process_item">
        <div class="process_item_header-num">03</div>
        <div class="process_item_description">
          <div class="process_item_header">Если опыт в резюме друга будет релевантным, ему назначат одно техническое
            собеседование
          </div>
        </div>
      </div>
      <div class="process_item">
        <div class="process_item_header-num">04</div>
        <div class="process_item_description">
          <div class="process_item_header">В случае успешного собеседования друг получит оффер</div>
        </div>
      </div>
      <div class="process_item">
        <div class="process_item_header-num">05</div>
        <div class="process_item_description">
          <div class="process_item_header">Когда друг пройдет испытательный срок, мы вышлем тебе электронный договор.
            <br><br> В течение 7 рабочих дней после подписания договора ты получишь выплату
          </div>
        </div>
        <button
          class="resume__btn"
          @mousemove="mousemove($event)"
          @touchmove="mousemove($event)"
        >
          <span>Заполнить заявку</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import {onMounted} from 'vue';

const mousemove = (e) => {
  let btn = document.querySelector(".resume__btn");
  let x = e.pageX - btn.offsetLeft;
  let y = e.pageY - btn.offsetTop;
  btn.style.setProperty("--x", x / 10 + "rem");
  btn.style.setProperty("--y", y / 1000 + "rem");
};


var currentIndex = 0;
var isScrollingDown = true;
var lastScrollTop = 0;
var cardsArray = [];
let marginCard = 10;

const scrollTo = (value, e) => {
  var element = document.querySelector("." + value);
  if (element) {
    e.preventDefault();
    element.scrollIntoView();
  }
}

function onChangePosition(index) {
  let _cards = cardsArray.slice(0, index);

  if (_cards) {

    _cards.forEach((item, i) => {

      let scrolling = cardTop - ListTop - i * (cardHeight);

      // Считаем scale
      let scaling = i == cards.length - 1 ? 1 : (cardHeight - scrolling * 0.05) / cardHeight;

      item.style.transform = 'translateY(' + marginCard * i + 'px) scale(' + (scaling > 1 ? 1 : scaling) + ')';
      scaling = scaling + 0.05;
    })
  }
}



function onStack(index) {

  const stacked = cards[index];
  const moving = cards[index + 1];
  let overlapCard = '';

  // Получаем позицию предыдущей карточки
  if (moving && stacked) {

    let opacity = 1;
    let _cards = cardsArray.slice(0, index);

    _cards.forEach((item,) => {
      item.style.opacity = opacity;
      opacity = opacity - 0.1
    });

    // Получаем данные наложения
    overlapCard = (moving.getBoundingClientRect().top - stacked.getBoundingClientRect().top);

    if (Math.round(overlapCard) <= marginCard) {
      stacked.classList.remove('process_item-show');
      stacked.classList.add('process_item-hide');
      stacked.style.opacity = 1;

      currentIndex = currentIndex + 1;
    }
  }
}

function onRemoveStack(index) {
  const moving = cards[index];
  const stacked = cards[index - 1];

  let overlapCard = '';

  // Получаем позицию предыдущей карточки
  if (moving && stacked) {

    // Получаем данные наложения
    overlapCard = (moving.getBoundingClientRect().top - stacked.getBoundingClientRect().top);

    if (overlapCard > marginCard) {
      stacked.classList.add('process_item-show');

      currentIndex = currentIndex - 1;
    }
  }
}

function onAnimate(vars){

  const scrollTopPosition = window.pageYOffset || document.documentElement.scrollTop;
  isScrollingDown = (scrollTopPosition > lastScrollTop ? true : false);

  if(isScrollingDown){
    vars.onDown();
  }

  if(!isScrollingDown){
    vars.onUp();
  }

  lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;

}

function moduleAnimation() {

  waitingOnAnimRequest = true;

  //let index = currentIndex;

  ListTop = list.getBoundingClientRect().top;

  onAnimate({
    onDown: () => {
      onStack(currentIndex);
      onChangePosition(currentIndex + 1);
    },
    onUp: () => {
      onRemoveStack(currentIndex);
      onChangePosition(currentIndex + 1);
    },
  });

  waitingOnAnimRequest = false;
}

let waitingOnAnimRequest = false;

let cards = '';
let list = '';

let ListTop = '';
let firstCard = '';
let cardTop = '';
let cardHeight = '';


function scroll(){
  if (!waitingOnAnimRequest) {
    window.requestAnimationFrame(moduleAnimation);
  }
}

function setStackCards(){

  firstCard = cards[0];
  cardTop = Math.floor(parseFloat(getComputedStyle(firstCard).getPropertyValue('top')));
  cardHeight = parseInt(firstCard.offsetHeight);

  if(cards) {
    cards.forEach((item, i) => {
      item.style.transform = 'translateY(' + marginCard * i + 'px)';
    })
  }
}

function onResize(){
  setStackCards();
}

onMounted(async () => {

  list = document.querySelector(".process-wrapper");
  cards = list.querySelectorAll(".process_item");
  cardsArray = Array.from(cards);

  setStackCards();

  window.addEventListener('resize', setStackCards);

  let observerGallery = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      // получаем свойства, которые доступны в объекте entry
      const {isIntersecting} = entry;

      if (isIntersecting) {
        document.addEventListener('scroll', scroll, true);
      } else {
        document.removeEventListener('scroll', scroll, true);
      }
    });
  }, {threshold: [0, 1]});
  observerGallery.observe(list);

});
</script>

<style lang="scss" scoped>

:root {

  --space-unit: 1em;
  --space-sm: calc(0.75 * 1em);
  --space-md: calc(1.25 * 1em);
  --component-padding: var(--space-md);
}

.process .process_item-hide {
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.50);
}

.process .process_item-show {
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;
  background: rgb(255, 255, 255) !important;
  opacity: 1 !important;
}

.resume__btn {
  color: var(--color-white);
  transition: all 200ms ease;
  position: relative;
  background: #13144b;
  padding: 2rem;
  border-radius: 2rem;
  outline: none;
  border: none;
  cursor: pointer;
  overflow: hidden;
  box-shadow: 0.1rem 0.1rem 0 rgba(25, 25, 25, 0.25);
  font-size: 1.6rem;
  width: 100%;
  margin-top: 1rem;
  font-weight: 500;
  letter-spacing: -0.032rem;
  line-height: 1.92rem;
}

.resume__btn:hover {
  box-shadow: 0 1.1rem 3rem rgba(25, 25, 25, 0.25);
  background: #424ed1;
}

.resume__btn:hover::before {
  --size: 70vw;
}


.resume__btn::before {
  --size: 0;
  content: "";
  position: absolute;
  left: var(--x);
  top: var(--y);
  width: var(--size);
  height: var(--size);
  background: radial-gradient(
      15% 88.6% at 40.5% 25.85%,
      #ff4236 0%,
      rgba(142, 84, 245, 0) 155%
  ),
  #424ed1;
  transform: translate(-50%, -50%);
}

.resume__btn > span {
  position: relative;
}

.process {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  /*padding: 0 12rem 2rem;*/
  position: relative;
  align-items: center;
  flex: 0 0 auto;
  background-color: rgba(247, 247, 247, 1);
  width: 100%;
}

.process .process-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10rem;
  position: relative;
  flex: 0 0 auto;
  width: 33.5rem;
  --stack-cards-gap: calc(0.75 * 1em);
}

.process .process_item video {
  position: absolute;
  border-radius: 2rem;
  object-fit: cover;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  object-position: left;
}

.process .process_item .process_item-overlay50,
.process .process_item .process_item-overlay30 {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  margin: 0;
}

.process .process_item .process_item-overlay50 {
  background: rgba(0, 0, 0, 0.50);
}

.process .process_item .process_item-overlay30 {
  background: rgba(0, 0, 0, 0.30);
}

.process .process_item_video-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 0 2rem 0;
  position: relative;
  top: 18.3rem;
  margin: 0 auto;
}

.process .process_item_video-text {
  font-size: 4.8rem;
  letter-spacing: -0.288rem;
  position: relative;
  align-self: stretch;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
  text-align: center;
  font-style: normal;
  line-height: 90%;
}

.process .process_item_video-text2 {
  opacity: 0.6;
  font-size: 1.6rem;
  letter-spacing: -0.048rem;
  position: relative;
  align-self: stretch;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
  text-align: center;
  font-style: normal;
}

.process .process_item {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 54.4rem;
  align-items: flex-start;
  padding: 1rem 3rem;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 4rem;
  overflow: hidden;
  box-shadow: 0 0.5rem 2rem 0 rgba(0, 0, 0, 0.07);

  position: sticky;
  top: calc(1.25 * 1em);
  padding-bottom: 50%;
  -webkit-transform-origin: center top;
  transform-origin: center top;

  max-height: calc(var(--vh, 1vh) * 90);

  transition: all .2s linear;
}

.process .process_item-href {
  color: #DE745A;
}

.process .process_item_description {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
  position: relative;
  flex: 1;
  align-self: stretch;
  width: 100%;
}

.process .process_item_header-num {
  font-size: 17rem;
  font-style: normal;
  font-weight: 500;
  line-height: 120%;
  letter-spacing: -0.6799999999999999rem;
  background: linear-gradient(
      357deg,
      rgba(168, 182, 255, 0.1) 10%,
      #8e54f5 45.97%,
      #ff4236 61.03%,
      #ffb55c 84.91%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.process .process_item_header {
  position: relative;
  align-self: stretch;
  font-weight: 500;
  color: rgba(19, 20, 75, 1);
  font-size: 2.4rem;
  letter-spacing: -0.12rem;
  line-height: 2.6rem;
  font-style: normal;
}

.process .bonuses_video video {
  position: absolute;
  object-fit: cover;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}


@include mq(768) {
  .process {
    gap: 10rem;
    padding: 16rem 4rem;
  }

  .resume__btn {
    font-size: 1.6rem;
    line-height: 120%;
    letter-spacing: -0.032rem;
  }

  .process .process-wrapper {
    width: 68.8rem;
  }

  .process .process_item_video-header {
    gap: 3rem;
    padding: 0 2rem 0;
  }

  .process .process_item_video-text {
    font-size: 9.6rem;
    letter-spacing: -0.576rem;
    line-height: 90%;
  }

  .process .process_item_video-text2 {
    font-size: 2rem;
    letter-spacing: -0.06rem;
  }

  .process .process_item {
    height: 80rem;
    padding: 0 5rem 10rem;
    border-radius: 5rem;
  }

  .process .process_item_header-num {
    font-size: 30rem;
    letter-spacing: -1.2rem;
    background: linear-gradient(
        357deg,
        rgba(168, 182, 255, 0.1) 25%,
        #8e54f5 49.93%,
        #ff4236 67.57%,
        #ffb55c 84.91%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .process .process_item_header {
    font-size: 3.6rem;
    letter-spacing: -0.072rem;
    line-height: 3.96rem;
  }

}

@include mq(1440) {
  .process {
    gap: 10rem;
    padding: 20rem 14rem;
  }

  .resume__btn {
    line-height: 140%;
    letter-spacing: -0.064rem;
  }

  .process .process-wrapper {
    width: 128rem;
    gap: 12rem;
  }

  .process .process_item_video-header {
    gap: 5rem;
    padding: 0 0 0;
  }

  .process .process_item_video-text {
    font-size: 15rem;
    letter-spacing: -0.9rem;
  }

  .process .process_item_video-text2 {
    font-size: 3.2rem;
    letter-spacing: -0.096rem;
  }

  .process .process_item {
    height: 80rem;
    padding: 0 10rem 10rem;
    border-radius: 5rem;
  }

  .process .process_item_description {
    margin-top: -13rem;
  }

  .process .process_item_header-num {
    font-size: 40rem;
    letter-spacing: -1.6rem;
    background: linear-gradient(
        357deg,
        rgba(168, 182, 255, 0.1) 30.29%,
        #8e54f5 49.93%,
        #ff4236 67.57%,
        #ffb55c 84.91%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .process .process_item_header {
    font-size: 4.8rem;
    letter-spacing: -0.144rem;
    line-height: 5.28rem;
  }

  .process .overlap-group {
    height: 80rem;
    background-color: #00000080;
    border-radius: 5rem;
  }

  .resume__btn {
    margin-top: 6rem;
  }
}

.process .process_item {
  position: sticky;
}
</style>
