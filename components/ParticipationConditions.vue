<template>
  <div class="participation">
    <p class="participation__title">Условия участия</p>
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
  </div>
  <div class="wrapper__expectations">
    <div class="expectations">
      <p class="expectations__title">Что ждет друга после трудоустройства</p>
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
  document.querySelector(".direction").scrollIntoView({
    behavior: "smooth",
  });
};
</script>

<style lang="scss" scoped>
.participation {
  padding: 1rem 2rem 4rem;

  @include mq(768) {
    padding: 6rem 3rem 6rem;
  }
  @include mq(1024) {
    padding: 6rem calc(50% - 34.8rem) 6rem;
  }
  @include mq(1440) {
    padding: 10rem 8rem 8rem;
  }

  &__title {
    color: var(--eggplant);
    text-align: center;
    font-size: 4.8rem;
    line-height: 90%;
    letter-spacing: -0.0288rem;
    font-weight: 500;
    padding: 0 0 4.8rem;

    @include mq(768) {
      font-size: 8.6rem;
      letter-spacing: -0.0576rem;
      padding: 0 0 8rem;
    }
    @include mq(1440) {
      font-size: 15rem;
      letter-spacing: -0.9rem;
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
    @include mq(1440) {
      flex-direction: row;
      width: auto;
    }

    &_first {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      padding: 2rem;
      border-radius: 2rem;
      background: var(--color-white);
      box-shadow: 0 0.5rem 2rem 0 rgba(0, 0, 0, 0.07);
      margin-bottom: 2rem;
      box-sizing: border-box;

      @include mq(768) {
        width: 83.8rem;
        height: 21.6rem;
        align-items: flex-start;
        padding: 3rem;
        margin-right: 2rem;
      }
      @include mq(1440) {
        width: 41.3rem;
        height: 27rem;
        padding: 4rem;
        margin-bottom: 0;
      }
    }
    &_second {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      padding: 2rem;
      border-radius: 2rem;
      background: var(--color-white);
      box-shadow: 0 0.5rem 2rem 0 rgba(0, 0, 0, 0.07);
      margin-bottom: 2rem;
      box-sizing: border-box;

      @include mq(768) {
        padding: 3rem;
        height: 21.6rem;
      }
      @include mq(1440) {
        width: 41.3rem;
        height: 27rem;
        padding: 4rem;
        margin-bottom: 0;
        margin-right: 2rem;
      }
    }
    &_third {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      width: 100%;
      padding: 2rem;
      border-radius: 2rem;
      background: var(--color-white);
      box-shadow: 0 0.5rem 2rem 0 rgba(0, 0, 0, 0.07);
      box-sizing: border-box;

      @include mq(768) {
        padding: 3rem;
      }
      @include mq(1440) {
        width: 41.3rem;
        height: 27rem;
        padding: 4rem;
      }
    }

    &_span {
      color: var(--active-color);
      cursor: pointer;
    }

    &_number {
      font-size: 4.8rem;
      line-height: 110%;
      font-weight: 700;
      letter-spacing: -0.048rem;
      margin-bottom: 2rem;
      background: linear-gradient(
        355.5deg,
        #8e54f5 21.86%,
        #ff4236 54.22%,
        #ffb55c 86.58%
      );
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;

      @include mq(768) {
        letter-spacing: -0.072rem;
      }
      @include mq(1440) {
        letter-spacing: -0.144rem;
      }
    }
    &_text {
      color: #13144bcc;
      font-size: 1.6rem;
      letter-spacing: -0.048rem;
      line-height: 1.92rem;

      @include mq(768) {
        font-size: 2rem;
        letter-spacing: -0.06rem;
      }
      @include mq(1440) {
        font-size: 2.4rem;
        letter-spacing: -0.072rem;
        line-height: 2.88rem;
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
    @include mq(1440) {
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
  @include mq(1440) {
    padding: 0 calc(50% - 64rem) 20rem;
  }
}

.expectations {
  display: flex;
  flex-direction: column;
  padding: 2rem;
  border-radius: 4rem;
  background: var(--color-white);
  box-shadow: 0 0.5rem 2rem 0 rgba(0, 0, 0, 0.07);

  @include mq(768) {
    padding: 4rem;
  }

  @include mq(1440) {
    padding: 4rem 6rem;
  }

  &__title {
    padding: 0 calc(50% - 10rem) 0;
    color: var(--eggplant);
    text-align: center;
    font-size: 3rem;
    line-height: 100%;
    letter-spacing: -0.12rem;
    margin-bottom: 2rem;

    @include mq(768) {
      padding: 0 calc(50% - 25rem) 0;
      font-size: 4.8rem;
      letter-spacing: -0.096rem;
      margin-bottom: 3rem;
    }

    @include mq(1440) {
      padding: 0;
      font-size: 6.4rem;
      letter-spacing: -0.13rem;
      margin-bottom: 5rem;
    }
  }
  &__content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    @include mq(1440) {
      flex-direction: row;
    }
  }
  &__info {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    position: relative;
    margin-bottom: 2rem;
    width: 100%;

    @include mq(1440) {
      margin: 0 1rem 0 0;
    }

    &_overlay {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.3);
      border-radius: 2rem;
    }

    &_title {
      position: absolute;
      color: var(--color-white);
      font-size: 2.4rem;
      letter-spacing: -0.048rem;
      line-height: 110%;
      z-index: 1;
      padding: 1.6rem;

      @include mq(768) {
        font-size: 3.6rem;
        letter-spacing: -0.072rem;
        padding: 0 20rem 3rem 3rem;
      }

      @include mq(1440) {
        font-size: 4.8rem;
        letter-spacing: -0.03rem;
        padding: 3rem;
      }
    }

    > video {
      height: 18.5rem;
      border-radius: 2rem;
      background: rgba(0, 0, 0, 0.3);
      object-fit: cover;

      @include mq(768) {
        height: 24.2rem;
      }

      @include mq(1440) {
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
      overflow: hidden;
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

      @include mq(768) {
        flex-direction: row !important;
        align-items: center;
      }

      @include mq(1440) {
        height: 28.3rem !important;
        width: 100% !important;
        padding: 4rem !important;
        align-items: flex-start;
      }
    }

    &_textInGradient {
      color: var(--color-white);
      font-size: 1.8rem;
      letter-spacing: -0.036rem;
      line-height: 120%;

      @include mq(768) {
        font-size: 2.4rem;
        letter-spacing: -0.048rem;
      }

      @include mq(1440) {
        font-size: 3.2rem;
        letter-spacing: -0.072rem;
      }
    }

    &_text {
      color: var(--eggplant);
      font-size: 1.3rem;
      letter-spacing: -0.026rem;
      margin-top: 1.1rem;

      @include mq(768) {
        font-size: 1.6rem;
        letter-spacing: -0.032rem;
      }

      @include mq(1440) {
        font-size: 1.8rem;
        letter-spacing: -0.036rem;
        margin-top: 2rem;
      }
    }
  }

  &__icon {
    height: 2.3rem;
    width: 2.3rem;

    @include mq(1440) {
      width: 3.4rem;
      height: 3.4rem;
    }
  }
}

.advantage {
  display: flex;
  padding: 1.6rem;
  flex-direction: column;
  border-radius: 2rem;
  width: 48%;
  height: 13rem;
  background: #f7f7f7;

  @include mq(768) {
    width: 49%;
    padding: 2rem;
    height: 11.6rem;
  }

  @include mq(1440) {
    width: 18rem;
    height: 18.7rem;
    justify-content: flex-start;
  }

  > img {
    width: 2.4rem;
    height: 2.4rem;
    margin-bottom: 1.2rem;

    @include mq(1440) {
      width: 3.36rem;
      height: 3.36rem;
    }
  }
  &_lower {
    display: flex;
    padding: 1.6rem;
    flex-direction: column;
    border-radius: 2rem;
    width: 48%;
    height: 11.4rem;
    background: #f7f7f7;

    @include mq(768) {
      width: 49%;
      padding: 2rem;
      height: 11.6rem;
    }

    @include mq(1440) {
      width: 18.1rem;
      height: 18.7rem;
      justify-content: flex-start;
    }
  }
}

.laptop {
  display: block;
  position: relative;
  left: 3.8rem;
  top: -1.5rem;
  width: 13rem;
  height: auto;

  @include mq(768) {
    left: 3rem;
    top: -0.5rem;
  }

  @include mq(1024) {
    left: 2.4rem;
  }

  @include mq(1440) {
    left: 7.5rem;
    top: -3.8rem;
    width: 27rem;
    height: 27rem;
  }
}
</style>
