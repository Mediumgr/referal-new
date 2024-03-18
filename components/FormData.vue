<template>
  <ClientOnly>
    <section class="form-section">
      <div class="container">
        <h2 class="form-section_title heading-h2">
          Заявка <br class="only-desktop" />
          на рекомендацию
        </h2>

        <div class="form-section-flex">
          <form v-if="status.form" @submit.stop.prevent="submit()" class="form">
            <div class="form__wrapper form__wrapper_recommender">
              <h3 class="form__wrapper_title heading-h4">Рекомендатель</h3>

              <div class="form__inputs">
                <BaseInput
                  v-model="recommenderName"
                  type="text"
                  :error="errors['recommenderName']"
                  placeholder="Имя Фамилия"
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
                  &#171;Промсвязьбанк&#187;. С&nbsp;
                  <a
                    :class="[
                      'link',
                      { errorLink: errors['recProcessing'] === 'error' },
                    ]"
                    href="/docs/confirm_recomend.docx"
                    target="_blank"
                    download
                    >Согласием
                  </a>
                  на&nbsp;обработку персональных данных Рекомендателя Программы
                  &#171;Приведи друга в&nbsp;ИТ&#187;&nbsp;ООО &#171;ПСБ
                  Лаб&#187; ознакомлен&#187;
                </BaseCheckbox>
                <BaseCheckbox
                  v-model="checked[2]"
                  :error="errors['recSigning']"
                  id="recSigning"
                >
                  Я&nbsp;даю согласие на&nbsp;подписание договора
                  об&nbsp;оказании услуг для выплаты вознаграждения
                  неквалифицированной электронной подписью (НЭП), выпущенной АО
                  &#171;ПФ&#187; СКБ Контур&#187;, а&nbsp;также соглашаюсь на
                  обработку персональных данных АО &#171;ПФ &#171;СКБ
                  Контур&#187;, и&nbsp;предоставление данных для заключения
                  договора об&nbsp;оказании услуг, если рекомендованный мной
                  кандидат будет принят на&nbsp;работу и&nbsp;успешно пройдет
                  испытательный срок в&nbsp;ООО &#171;ПСБ Лаб&#187; или ПАО
                  &#171;Промсвязьбанк&#187;
                </BaseCheckbox>
              </div>
            </div>

            <div class="form__wrapper form__wrapper_candidate">
              <h3 class="form__wrapper_title heading-h4">Кандидат</h3>

              <div class="form__inputs">
                <BaseInput
                  v-model="candidateName"
                  type="text"
                  :error="errors['candidateName']"
                  placeholder="Имя Фамилия"
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
                  &#171;Промсвязьбанк&#187;. С&nbsp;
                  <a
                    :class="[
                      'link',
                      { errorLink: errors['candProcessing'] === 'error' },
                    ]"
                    href="/docs/confirm_candidate.docx"
                    target="_blank"
                    download
                    >Согласием
                  </a>
                  на&nbsp;обработку персональных данных Рекомендателя Программы
                  &#171;Приведи друга в&nbsp;ИТ&#187;&nbsp;ООО &#171;ПСБ
                  Лаб&#187; ознакомлен&#187;
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
                status.form = true
              }
            "
          />
        </div>
      </div>
    </section>
  </ClientOnly>
</template>

<script setup>
const checked = ref([true, true, true, true, true])
let recommenderName = ref({ text: '' })
let recommenderEmail = ref({ text: '' })
let recommenderPhone = ref({ text: '', textLength: '' })
let candidateName = ref({ text: '' })
let candidateEmail = ref({ text: '' })
let candidatePhone = ref({ text: '', textLength: '' })
let file = ref({})
const loader = ref(false)
const regExp = reactive({
  name: /^[a-zа-я]+\s[a-zа-я]+(\s[a-zа-я]+)?$/i,

  phone: /^((8|\+7)\s)\d{3}[\d\s]{10}$/,
  email: /^[\w.-]+@([\w-]+\.)+[\w-]+$/i,
})
let errors = reactive({})
const status = reactive({
  form: true,
  connection: true,
  server: { failure: false, message: '' },
})

const attachedFile = (resume) => {
  file.value = resume
}

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
  })

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
})
</script>

<style lang="scss" scoped>
.form {
  box-shadow: 0 0.5rem 2rem 0 rgba(0, 0, 0, 0.07);
  border-bottom: 1px solid var(--eggplant);
  border-radius: 2rem;
  background: var(--color-white);

  @include mq(1200) {
    display: flex;
    position: relative;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    border-radius: 5rem;
    width: 100%;
  }

  &-section {
    background: linear-gradient(
      180deg,
      #13144b 89.06%,
      rgba(19, 20, 75, 0) 100%
    );
    padding-bottom: 13rem;

    @include mq(768) {
      padding-bottom: 18rem;
    }

    &-flex {
      display: flex;
      justify-content: center;

      @include mq(1200) {
        flex-direction: row;
      }
    }

    &_title {
      padding-bottom: 6rem;
      color: var(--color-white);
    }
  }

  &__wrapper {
    padding: 2rem;

    @include mq(768) {
      margin: 0 auto;
      padding: 4rem;
    }

    @include mq(1200) {
      padding: 6rem 6rem 4rem;
      width: 50%;
    }

    &_title {
      padding-bottom: 1rem;
      color: var(--eggplant);

      @include mq(768) {
        padding-bottom: 3rem;
      }
    }

    &_candidate {
      box-shadow: 0 0.5rem 2rem 0 rgba(0, 0, 0, 0.07);

      @include mq(768) {
        box-shadow: none;
      }
    }

    &_recommender {
      position: relative;

      @include mq(768) {
        padding-bottom: 4.1rem;
      }

      @include mq(1200) {
        padding-bottom: 4rem;
      }

      &::after {
        @include mq(768) {
          position: absolute;
          right: 4rem;
          bottom: 0;
          left: 4rem;
          background: rgba(19, 20, 75, 0.2);
          height: 0.1rem;
          content: '';
        }

        @include mq(1200) {
          top: 6rem;
          right: 0;
          bottom: 4rem;
          left: auto;
          width: 0.1rem;
          height: auto;
        }
      }
    }
  }

  &__inputs {
    margin-bottom: 4rem;
  }

  &__button {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto 2rem;
    border-radius: 2rem;
    background: var(--eggplant);
    padding: 1rem;
    width: 30.5rem;

    @include mq(768) {
      margin: 0 auto 4rem;
      padding: 2rem;
      width: 60.8rem;
      height: 6rem;
    }
    @include mq(1200) {
      margin: 0 auto 6rem;
      padding: 2rem;
      width: 52rem;
      height: 6.2rem;
    }

    &_text {
      position: relative;
      font-size: 1.4rem;
      line-height: 120%;
      letter-spacing: -0.036rem;
      text-align: center;

      @include mq(768) {
        font-size: 1.6rem;
        letter-spacing: -0.032rem;
      }
      @include mq(1200) {
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
  animation: rotation 1s linear infinite;
  box-sizing: border-box;
  margin: 0 auto 4rem;
  border: 0.3rem solid;
  border-color: #424ed1 #424ed1 transparent transparent;
  border-radius: 50%;
  width: 4.8rem;
  height: 4.8rem;

  @include mq(1200) {
    position: absolute;
    bottom: 0;
    margin: 0 auto 5.5rem;
  }
}

.loader::after,
.loader::before {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transform-origin: center center;
  animation: rotationBack 0.5s linear infinite;
  box-sizing: border-box;
  box-sizing: border-box;
  margin: auto;
  border: 0.3rem solid;
  border-color: transparent transparent #ff4236 #ff3d00;
  border-radius: 50%;
  width: 4rem;
  height: 4rem;
  content: '';
}

.loader::before {
  animation: rotation 1.5s linear infinite;
  border-color: #ffb55c #ffb55c transparent transparent;
  width: 3.2rem;
  height: 3.2rem;
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
