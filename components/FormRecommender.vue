<template>
  <section class="form-section">
    <p class="form-section_title">Заявка на рекомендацию</p>
    <!--    <template class="form-section-flex"> -->
    <form @submit.stop.prevent="submit()" class="form">
      <div class="form__wrapper">
        <h3 class="form__wrapper_title">Рекомендатель</h3>
        <BaseInput
          v-model="recommenderName"
          type="text"
          :error="regExpChecks['recommenderName']"
          label="text"
          text="Имя и&nbsp;фамилия"
        >
        </BaseInput>
        <BaseInput
          v-model="recommenderEmail"
          type="email"
          :error="regExpChecks['recommenderEmail']"
          label="email"
          text="Email"
        >
        </BaseInput>
        <BaseInput
          v-model="recommenderPhone"
          type="tel"
          :error="regExpChecks['recommenderPhone']"
          label="tel"
          text="Номер телефона"
        >
        </BaseInput>
        <BaseCheckbox
          v-model="checked[0]"
          :error="regExpChecks['recommenderParticipation']"
          type="checkbox"
          id="participation"
        >
          Я&nbsp;даю согласие на&nbsp;участие в&nbsp;Программе &#171;Приведи
          друга в&nbsp;ИТ&#187;&nbsp;ООО &#171;ПСБ Лаб&#187;, с&nbsp;условиями
          <a href="/docs/rules.docx" target="_blank" download>Программы</a>
          ознакомлен
        </BaseCheckbox>
        <BaseCheckbox
          v-model="checked[1]"
          :error="regExpChecks['recommenderProcessing']"
          type="checkbox"
          id="processing"
        >
          Я&nbsp;даю свое согласие на&nbsp;обработку своих персональных данных
          ООО &#171;ПСБ Лаб&#187; и&nbsp;ПАО &#171;Промсвязьбанк&#187;.
          С&nbsp;&#171;<a
            href="/docs/confirm_recomend.docx"
            target="_blank"
            download
            >Согласием</a
          >
          на&nbsp;обработку персональных данных Рекомендателя Программы
          &#171;Приведи друга в&nbsp;ИТ&#187;&nbsp;ООО &#171;ПСБ Лаб&#187;
          ознакомлен
        </BaseCheckbox>
        <BaseCheckbox
          v-model="checked[2]"
          :error="regExpChecks['recommenderSigning']"
          type="checkbox"
          id="signing"
        >
          Я&nbsp;даю согласие на&nbsp;подписание договора об&nbsp;оказании услуг
          для выплаты вознаграждения простой электронной подписью
          и&nbsp;предоставление данных для его заключения, если рекомендованный
          мною Кандидат будет принят на&nbsp;работу и&nbsp;успешно пройдет
          испытательный срок в&nbsp;ООО &#171;ПСБ Лаб&#187;
        </BaseCheckbox>
      </div>
    </form>
    <!--     </template> -->
  </section>
</template>

<script setup>
const checked = ref([false, false, false, false, false]);
const recommenderName = ref('');
const recommenderEmail = ref('');
const recommenderPhone = ref('');
let regExpChecks = ref({});

// onMounted(() => {});
</script>

<style lang="scss" scoped>
.form {
  padding: 2rem 2rem 4rem;
  border-bottom: 1px solid var(--eggplant);
  border-radius: 2rem;
  background: var(--color-white);
  box-shadow: 0 0.5rem 2rem 0 rgba(0, 0, 0, 0.07);

  &-section {
    padding: 0 2rem 13rem 2rem;
    background: linear-gradient(
      180deg,
      #13144b 89.06%,
      rgba(19, 20, 75, 0) 100%
    );
    &_title {
      color: var(--color-white);
      text-align: center;
      font-size: 4.8rem;
      line-height: 90%;
      letter-spacing: -0.288rem;
      padding: 0 0 10rem;
    }
  }

  &__wrapper {
    &_title {
      color: var(--eggplant);
      text-align: center;
      font-size: 2.4rem;
      line-height: 110%;
      letter-spacing: -0.048rem;
      padding-bottom: 1rem;
    }
  }
}

.loader {
  width: 4.8rem;
  height: 4.8rem;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  border: 0.3rem solid;
  border-color: #424ed1 #424ed1 transparent transparent;
  box-sizing: border-box;
  margin: 0 auto;
  animation: rotation 1s linear infinite;
}

.loader::after,
.loader::before {
  content: '';
  box-sizing: border-box;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  border: 0.3rem solid;
  border-color: transparent transparent #ff4236 #ff3d00;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  box-sizing: border-box;
  animation: rotationBack 0.5s linear infinite;
  transform-origin: center center;
}

.loader::before {
  width: 3.2rem;
  height: 3.2rem;
  border-color: #ffb55c #ffb55c transparent transparent;
  animation: rotation 1.5s linear infinite;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

@keyframes rotationBack {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(-360deg);
  }
}
</style>
