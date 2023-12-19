<template>
  <ClientOnly>
    <section class="form-section">
      <p class="form-section_title heading-h2">Заявка на рекомендацию</p>
      <template class="form-section-flex">
        <transition name="form-fade" mode="out-in">
          <form v-if="status.form" @submit.stop.prevent="submit()" class="form">
            <div class="form__wrapper form__wrapper_recommender">
              <h3 class="form__wrapper_title">Рекомендатель</h3>
              <div class="form__inputs">
                <BaseInput
                  v-model="recommenderName"
                  type="text"
                  :error="errors['recommenderName']"
                  placeholder="Имя Фамилия Отчество"
                >
                </BaseInput>
                <BaseInput
                  v-model="recommenderEmail"
                  type="email"
                  :error="errors['recommenderEmail']"
                  placeholder="Email"
                >
                </BaseInput>
                <BaseInput
                  v-model="recommenderPhone"
                  type="tel"
                  :error="errors['recommenderPhone']"
                  placeholder="Телефон"
                >
                </BaseInput>
              </div>
              <div class="form__checkboxes">
                <BaseCheckbox
                  v-model="checked[0]"
                  :error="errors['recParticipation']"
                  id="recParticipation"
                >
                  Я&nbsp;даю согласие на&nbsp;участие в&nbsp;Программе
                  &#171;Приведи друга в&nbsp;ИТ&#187;&nbsp;ООО &#171;ПСБ
                  Лаб&#187;, с&nbsp;условиями
                  <a
                    :class="[
                      'link',
                      { errorLink: errors['recParticipation'] === 'error' },
                    ]"
                    href="/docs/rules.docx"
                    target="_blank"
                    download
                  >
                    Программы
                  </a>
                  ознакомлен
                </BaseCheckbox>
                <BaseCheckbox
                  v-model="checked[1]"
                  :error="errors['recProcessing']"
                  id="recProcessing"
                >
                  Я&nbsp;даю свое согласие на&nbsp;обработку своих персональных
                  данных ООО &#171;ПСБ Лаб&#187; и&nbsp;ПАО
                  &#171;Промсвязьбанк&#187;. С&nbsp;&#171;
                  <a
                    :class="[
                      'link',
                      { errorLink: errors['recProcessing'] === 'error' },
                    ]"
                    href="/docs/confirm_recomend.docx"
                    target="_blank"
                    download
                  >
                    Согласием
                  </a>
                  на&nbsp;обработку персональных данных Рекомендателя Программы
                  &#171;Приведи друга в&nbsp;ИТ&#187;&nbsp;ООО &#171;ПСБ
                  Лаб&#187; ознакомлен
                </BaseCheckbox>
                <BaseCheckbox
                  v-model="checked[2]"
                  :error="errors['recSigning']"
                  id="recSigning"
                >
                  Я&nbsp;даю согласие на&nbsp;подписание договора
                  об&nbsp;оказании услуг для выплаты вознаграждения простой
                  электронной подписью и&nbsp;предоставление данных для его
                  заключения, если рекомендованный мною Кандидат будет принят
                  на&nbsp;работу и&nbsp;успешно пройдет испытательный срок
                  в&nbsp;ООО &#171;ПСБ Лаб&#187;
                </BaseCheckbox>
              </div>
            </div>
            <div class="form__divider"></div>
            <div class="form__wrapper form__wrapper_candidate">
              <h3 class="form__wrapper_title">Кандидат</h3>
              <div class="form__inputs">
                <BaseInput
                  v-model="candidateName"
                  type="text"
                  :error="errors['candidateName']"
                  placeholder="Имя Фамилия Отчество"
                >
                </BaseInput>
                <BaseInput
                  v-model="candidateEmail"
                  type="email"
                  :error="errors['candidateEmail']"
                  placeholder="Email"
                >
                </BaseInput>
                <BaseInput
                  v-model="candidatePhone"
                  type="tel"
                  :error="errors['candidatePhone']"
                  placeholder="Телефон"
                >
                </BaseInput>
                <BaseAttachFile
                  :error="errors['file']"
                  @attachedFile="attachedFile($event)"
                ></BaseAttachFile>
              </div>
              <div class="form__checkboxes">
                <BaseCheckbox
                  v-model="checked[3]"
                  :error="errors['candParticipation']"
                  id="candParticipation"
                >
                  Я&nbsp;даю согласие на&nbsp;участие в&nbsp;Программе
                  &#171;Приведи друга в&nbsp;ИТ&#187;&nbsp;ООО &#171;ПСБ
                  Лаб&#187;, с&nbsp;условиями
                  <a
                    :class="[
                      'link',
                      { errorLink: errors['candParticipation'] === 'error' },
                    ]"
                    href="/docs/rules.docx"
                    target="_blank"
                    download
                  >
                    Программы
                  </a>
                  ознакомлен
                </BaseCheckbox>
                <BaseCheckbox
                  v-model="checked[4]"
                  :error="errors['candProcessing']"
                  id="candProcessing"
                >
                  Я&nbsp;даю свое согласие на&nbsp;обработку своих персональных
                  данных ООО &#171;ПСБ Лаб&#187; и&nbsp;ПАО
                  &#171;Промсвязьбанк&#187;. С&nbsp;&#171;
                  <a
                    :class="[
                      'link',
                      { errorLink: errors['candProcessing'] === 'error' },
                    ]"
                    href="/docs/confirm_candidate.docx"
                    target="_blank"
                    download
                  >
                    Согласием
                  </a>
                  на&nbsp;обработку персональных данных Рекомендателя Программы
                  &#171;Приведи друга в&nbsp;ИТ&#187;&nbsp;ООО &#171;ПСБ
                  Лаб&#187; ознакомлен
                </BaseCheckbox>
              </div>
            </div>
            <BaseButton class="form__button" v-if="!loader">
              <span class="form__button_text">Отправить</span>
            </BaseButton>
            <span class="loader" v-if="loader"></span>
          </form>
          <FormStatus
            v-else
            :status="status"
            @resend="
              () => {
                status.form = true;
              }
            "
          ></FormStatus>
        </transition>
      </template>
    </section>
  </ClientOnly>
</template>

<script setup>
const checked = ref([false, false, false, false, false]);
let recommenderName = ref({ text: "" });
let recommenderEmail = ref({ text: "" });
let recommenderPhone = ref({ text: "", textLength: "" });
let candidateName = ref({ text: "" });
let candidateEmail = ref({ text: "" });
let candidatePhone = ref({ text: "", textLength: "" });
let file = ref({});
const loader = ref(false);
const regExp = reactive({
  name: /^[A-Za-zА-Яа-я]+ [A-Za-zА-Яа-я]+(?: [A-Za-zА-Яа-я]+)?$/,

  phone: /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/,
  email: /^[\w._-]+@\w+\.[a-z]{2,4}$/i,
});
let errors = reactive({});
const status = reactive({
  form: true,
  connection: true,
  server: { failure: false, message: "" },
});

const attachedFile = (resume) => {
  file.value = resume;
};

const submit = async () =>
  await useSubmit({
    errors,
    loader,
    recommenderName,
    recommenderEmail,
    recommenderPhone,
    checked,
    candidateName,
    candidateEmail,
    candidatePhone,
    file,
    status,
    regExp,
  });

useWatchers({
  errors,
  recommenderName,
  recommenderEmail,
  recommenderPhone,
  checked,
  candidateName,
  candidateEmail,
  candidatePhone,
  file,
  status,
  regExp,
});
</script>

<style lang="scss" scoped>
.form {
  border-bottom: 1px solid var(--eggplant);
  border-radius: 2rem;
  background: var(--color-white);
  box-shadow: 0 0.5rem 2rem 0 rgba(0, 0, 0, 0.07);

  @include mq(1440) {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    height: 79.3rem;
  }

  &-section {
    padding: 0 2rem 13rem;
    background: linear-gradient(
      180deg,
      #13144b 89.06%,
      rgba(19, 20, 75, 0) 100%
    );

    &-flex {
      display: flex;
      justify-content: center;

      @include mq(1440) {
        flex-direction: row;
      }
    }

    &_title {
      color: var(--color-white);
      text-align: center;
      line-height: 90%;
      letter-spacing: -0.288rem;
      padding-bottom: 10rem;
    }
  }

  &__wrapper {
    padding: 2rem 2rem 4rem;
    box-sizing: content-box;

    @include mq(768) {
      width: 60.8rem;
      margin: 0 auto;
      padding: 4rem;
    }
    @include mq(1440) {
      width: 51.95rem;
    }

    &_title {
      color: var(--eggplant);
      text-align: center;
      font-size: 2.4rem;
      line-height: 110%;
      font-weight: 500;
      letter-spacing: -0.048rem;
      padding-bottom: 1rem;

      @include mq(768) {
        font-size: 3.6rem;
        letter-spacing: -0.072rem;
        padding-bottom: 3rem;
      }
      @include mq(1440) {
        font-size: 4.8rem;
        letter-spacing: -0.144rem;
      }
    }

    &_candidate {
      padding-top: 4rem;

      @include mq(1440) {
        padding: 6rem 6rem 4rem;
      }
    }

    &_recommender {
      @include mq(1440) {
        padding: 0 6rem;
        margin: 6rem 0 4rem;
        border-right: 0.1rem solid rgba(19, 20, 75, 0.2);
      }
    }
  }

  &__inputs {
    margin-bottom: 4rem;
  }

  &__divider {
    margin: 0 auto;
    border: 1px solid rgba(19, 20, 75, 0.2);
    width: 29.5rem;

    @include mq(768) {
      width: 60.8rem;
    }

    @include mq(1440) {
      display: none;
    }
  }

  &__button {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto 2rem;
    width: 30.5rem;
    padding: 1rem;
    border-radius: 2rem;
    background: var(--eggplant);

    @include mq(768) {
      width: 60.8rem;
      height: 6rem;
      padding: 2rem;
      margin: 0 auto 4rem;
    }
    @include mq(1440) {
      position: absolute;
      bottom: 0;
      padding: 2rem;
      width: 52rem;
      height: 6.2rem;
      margin: 0 auto 5.5rem;
    }

    &_text {
      text-align: center;
      font-size: 1.3rem;
      letter-spacing: -0.036rem;
      position: relative;

      @include mq(768) {
        font-size: 1.6rem;
        letter-spacing: -0.032rem;
      }
      @include mq(1440) {
        line-height: 140%;
        letter-spacing: -0.064rem;
      }
    }
  }
}

.link {
  color: var(--eggplant);
  text-decoration-line: underline;
}

.errorLink {
  color: #f00;
}

.loader {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4.8rem;
  height: 4.8rem;
  border-radius: 50%;
  border: 0.3rem solid;
  border-color: #424ed1 #424ed1 transparent transparent;
  box-sizing: border-box;
  margin: 0 auto 4rem;
  animation: rotation 1s linear infinite;

  @include mq(1440) {
    position: absolute;
    bottom: 0;
    margin: 0 auto 5.5rem;
  }
}

.loader::after,
.loader::before {
  content: "";
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

.form-fade-enter-from,
.form-fade-leave-to {
  opacity: 0;
}

.form-fade-enter-active,
.form-fade-leave-active {
  transition: opacity 0.25s ease-out;
}
</style>
