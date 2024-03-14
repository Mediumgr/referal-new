<template>
  <section class="participation container">
    <h2 class="participation__title heading-h2">Условия участия</h2>

    <div class="participation__content">
      <div class="participation__section">
        <div class="participation__content_first">
          <p class="participation__content_number">01</p>
          <p class="participation__content_text">
            Твой друг&nbsp;&mdash; специалист <br />с&nbsp;опытом работы
            в&nbsp;IT&nbsp;более <br />2&nbsp;лет в&nbsp;одном из&nbsp;
            <span class="participation__content_span" @click.stop="scrollTo()">
              наших направлений
            </span>
          </p>
        </div>
        <div class="participation__content_second">
          <p class="participation__content_number">02</p>
          <p class="participation__content_text">
            Твой друг не&nbsp;проходил собеседования в&nbsp;ПСБ в&nbsp;течение
            6&nbsp;месяцев до&nbsp;рекомендации
          </p>
        </div>
      </div>
      <div class="participation__content_third">
        <p class="participation__content_number">03</p>
        <p class="participation__content_text">
          Ты&nbsp;не&nbsp;работаешь <br />
          в&nbsp;ПСБ или в&nbsp;ПСБ Лаб
        </p>
      </div>
    </div>
  </section>
  <div class="wrapper__expectations">
    <div class="expectations">
      <h3 class="expectations__title heading-h3">
        Что ждет <br class="only-mobile" />
        друга после <br class="only-mobile" />
        <br class="show-tablet-and-more" />
        трудоустройства
      </h3>
      <div class="expectations__content">
        <div class="expectations__info">
          <video
            autoplay
            muted
            playsinline
            loop
            preload="auto"
            poster="/images/participation/poster.jpg"
          >
            <source src="/video/expectations.webm" type="video/webm" />
            <source src="/video/expectations.mp4" type="video/mp4" />
          </video>
          <div class="expectations__info_overlay"></div>
          <p class="expectations__info_title">
            Конкурентная зарплата и&nbsp;премии
          </p>
        </div>
        <div class="expectations__advantages">
          <div class="expectations__advantages_firstBlock advantage">
            <p class="expectations__advantages_textInGradient">
              Техника <br />для работы
            </p>
            <picture>
              <source
                srcset="/images/participation/laptop.avif"
                type="image/avif"
              />
              <source
                srcset="/images/participation/laptop.webp"
                type="image/webp"
              />
              <img
                class="laptop"
                src="/images/participation/laptop.png"
                alt="photo"
              />
            </picture>
          </div>
          <div class="expectations__advantages_thirdBlock advantage">
            <svg-icon class="expectations__icon" name="cross" />
            <p class="expectations__advantages_text">
              Льготные условия по&nbsp;продуктам банка
            </p>
          </div>
          <div class="expectations__advantages_secondBlock advantage_lower">
            <svg-icon class="expectations__icon" name="cross" />
            <p class="expectations__advantages_text">
              ДМС со&nbsp;стоматологией
            </p>
          </div>
          <div class="expectations__advantages_forthBlock advantage_lower">
            <svg-icon class="expectations__icon" name="cross" />
            <p class="expectations__advantages_text">
              Компенсация фитнеса и&nbsp;путешествий
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const scrollTo = () => {
  document.querySelector('.direction').scrollIntoView({
    behavior: 'smooth',
  })
}
</script>

<style lang="scss" scoped>
.participation {
  padding-top: 1rem;
  padding-bottom: 4rem;

  @include mq(768) {
    padding-top: 6rem;
    padding-bottom: 6rem;
  }

  @include mq(1200) {
    padding-top: 10rem;
    padding-bottom: 8rem;
  }

  &__title {
    padding: 0 0 4.8rem;
    color: var(--eggplant);

    @include mq(768) {
      padding: 0 0 8rem;
    }

    @include mq(1200) {
      padding: 0 0 10rem;
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @include mq(768) {
      margin: 0 auto;
    }
    @include mq(1200) {
      flex-direction: row;
      width: auto;
    }

    &_first {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      box-sizing: border-box;
      margin-bottom: 2rem;
      box-shadow: 0 0.5rem 2rem 0 rgba(0, 0, 0, 0.07);
      border-radius: 2rem;
      background: var(--color-white);
      padding: 2rem;

      @include mq(768) {
        align-items: flex-start;
        margin-right: 2rem;
        padding: 3rem;
        width: 83.8rem;
        height: 21.6rem;
      }
      @include mq(1200) {
        margin-bottom: 0;
        padding: 4rem;
        width: 41.3rem;
        height: 27rem;
      }
    }

    &_second {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      box-sizing: border-box;
      margin-bottom: 2rem;
      box-shadow: 0 0.5rem 2rem 0 rgba(0, 0, 0, 0.07);
      border-radius: 2rem;
      background: var(--color-white);
      padding: 2rem;

      @include mq(768) {
        padding: 3rem;
        height: 21.6rem;
      }
      @include mq(1200) {
        margin-right: 2rem;
        margin-bottom: 0;
        padding: 4rem;
        width: 41.3rem;
        height: 27rem;
      }
    }

    &_third {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      box-sizing: border-box;
      box-shadow: 0 0.5rem 2rem 0 rgba(0, 0, 0, 0.07);
      border-radius: 2rem;
      background: var(--color-white);
      padding: 2rem;
      width: 100%;

      @include mq(768) {
        padding: 3rem;
      }
      @include mq(1200) {
        padding: 4rem;
        width: 41.3rem;
        height: 27rem;
      }
    }

    &_span {
      cursor: pointer;
      color: var(--active-color);
    }

    &_number {
      margin-bottom: 2rem;
      background: linear-gradient(
        355.5deg,
        #8e54f5 21.86%,
        #ff4236 54.22%,
        #ffb55c 86.58%
      );
      background-clip: text;
      -webkit-background-clip: text;
      font-weight: 700;
      font-size: 4.8rem;
      line-height: 110%;
      letter-spacing: -0.048rem;
      -webkit-text-fill-color: transparent;

      @include mq(768) {
        letter-spacing: -0.072rem;
      }
      @include mq(1200) {
        letter-spacing: -0.144rem;
      }
    }

    &_text {
      color: #13144bcc;
      font-size: 1.6rem;
      line-height: 1.92rem;
      letter-spacing: -0.048rem;

      @include mq(768) {
        font-size: 2rem;
        letter-spacing: -0.06rem;
      }
      @include mq(1200) {
        font-size: 2.4rem;
        line-height: 2.88rem;
        letter-spacing: -0.072rem;
      }
    }
  }

  &__section {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    @include mq(768) {
      flex-direction: row;
      justify-content: space-between;
    }
    @include mq(1200) {
      width: auto;
    }
  }
}

.wrapper__expectations {
  padding: 0 2rem 12rem;

  @include mq(768) {
    padding: 0 3rem 16rem;
  }
  @include mq(1024) {
    padding: 0 calc(50% - 34.8rem) 16rem;
  }
  @include mq(1200) {
    padding: 0 calc(50% - 64rem) 20rem;
  }
}

.expectations {
  display: flex;
  flex-direction: column;
  box-shadow: 0 0.5rem 2rem 0 rgba(0, 0, 0, 0.07);
  border-radius: 4rem;
  background: var(--color-white);
  padding: 2rem;

  @include mq(768) {
    border-radius: 5rem;
    padding: 4rem;
  }

  @include mq(1200) {
    padding: 4rem 5.4rem;
  }

  &__title {
    margin-bottom: 2rem;
    padding: 0;
    color: var(--eggplant);

    @include mq(768) {
      margin-bottom: 3rem;
    }

    @include mq(1200) {
      margin-bottom: 5rem;
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    @include mq(1200) {
      flex-direction: row;
    }
  }

  &__info {
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: flex-end;
    margin-bottom: 2rem;
    width: 100%;

    @include mq(1200) {
      flex-shrink: 0;
      margin: 0 1rem 0 0;
      //width: 58.1rem;
      width: 49.5734%;
    }

    &_overlay {
      position: absolute;
      right: 0;
      bottom: 0;
      left: 0;
      border-radius: 2rem;
      background: rgba(0, 0, 0, 0.3);
      width: 100%;
      height: 100%;
    }

    &_title {
      position: absolute;
      z-index: 1;
      padding: 1.6rem;
      color: var(--color-white);
      font-size: 2.4rem;
      line-height: 110%;
      letter-spacing: -0.02em;

      @include mq(768) {
        padding: 0 20rem 3rem 3rem;
        font-size: 3.6rem;
      }

      @include mq(1200) {
        padding: 4rem;
        font-size: 4.8rem;
        letter-spacing: -0.03em;
      }
    }

    > video {
      border-radius: 2rem;
      background: rgba(0, 0, 0, 0.3);
      height: 18.5rem;
      object-fit: cover;

      @include mq(768) {
        height: 24.2rem;
      }

      @include mq(1200) {
        height: 48rem;
      }
    }
  }

  &__advantages {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    &_firstBlock {
      margin-bottom: 1.1rem;
      background: var(
        --Radial,
        radial-gradient(
          182.79% 156.21% at 7.63% -11.7%,
          #ffa848 0%,
          #ff954d 15.63%,
          #f94037 39.58%,
          #7e24cc 70.62%,
          #13144b 100%
        )
      ) !important;
      overflow: hidden;

      @include mq(768) {
        flex-direction: row !important;
        align-items: center;
      }

      @include mq(1200) {
        align-items: flex-start;
        background-image: url("data:image/svg+xml,%3Csvg width='582' height='283' viewBox='0 0 582 283' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='url(%23a)' d='M0 0h581.5v283H0z'/%3E%3Cdefs%3E%3CradialGradient id='a' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='matrix(234.51607 -157.99973 157.4935 233.76469 12.608 283)'%3E%3Cstop stop-color='%23FFB55C'/%3E%3Cstop offset='.5' stop-color='%23FF4236'/%3E%3Cstop offset='1' stop-color='%238E54F5'/%3E%3C/radialGradient%3E%3C/defs%3E%3C/svg%3E") !important;
        background-size: cover;
        padding: 4rem !important;
        width: 100% !important;
        height: 28.3rem !important;
      }
    }

    &_textInGradient {
      color: var(--color-white);
      font-size: 1.8rem;
      line-height: 120%;
      letter-spacing: -0.036rem;

      @include mq(768) {
        font-size: 2.4rem;
        letter-spacing: -0.048rem;
      }

      @include mq(1200) {
        font-size: 3.2rem;
        letter-spacing: -0.072rem;
      }
    }

    &_text {
      margin-top: 1.1rem;
      color: var(--eggplant);
      font-size: 1.3rem;
      letter-spacing: -0.026rem;

      @include mq(768) {
        font-size: 1.6rem;
        letter-spacing: -0.032rem;
      }

      @include mq(1200) {
        margin-top: 2rem;
        font-size: 1.8rem;
        letter-spacing: -0.036rem;
      }
    }
  }

  &__icon {
    width: 2.3rem;
    height: 2.3rem;

    @include mq(1200) {
      width: 3.4rem;
      height: 3.4rem;
    }
  }
}

.advantage {
  display: flex;
  flex-direction: column;
  border-radius: 2rem;
  background: #f7f7f7;
  padding: 1.6rem;
  width: 48%;
  height: 13rem;

  @include mq(768) {
    padding: 2rem;
    width: 49%;
    height: 11.6rem;
  }

  @include mq(1200) {
    justify-content: flex-start;
    width: 18rem;
    height: 18.7rem;
  }

  > img {
    margin-bottom: 1.2rem;
    width: 2.4rem;
    height: 2.4rem;

    @include mq(1200) {
      width: 3.36rem;
      height: 3.36rem;
    }
  }

  &_lower {
    display: flex;
    flex-direction: column;
    border-radius: 2rem;
    background: #f7f7f7;
    padding: 1.6rem;
    width: 48%;
    height: 11.4rem;

    @include mq(768) {
      padding: 2rem;
      width: 49%;
      height: 11.6rem;
    }

    @include mq(1200) {
      justify-content: flex-start;
      width: 18.1rem;
      height: 18.7rem;
    }
  }
}

.laptop {
  display: block;
  position: relative;
  top: -1.5rem;
  left: 3.8rem;
  width: 13rem;
  height: auto;

  @include mq(768) {
    top: -0.5rem;
    left: 3rem;
  }

  @include mq(1024) {
    left: 2.4rem;
  }

  @include mq(1200) {
    top: -3.8rem;
    left: 8rem;
    width: 29.4rem;
    height: 26.5rem;
  }
}
</style>
