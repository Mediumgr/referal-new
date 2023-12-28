export const useGradient = ({ animationAction, classElement }) => {
  const intersection = () => {
    let counter = 0;
    let options = {
      threshold: [0.5],
    };

    console.log(document.querySelector(`.${classElement.value}`));

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        /* при любом пересечении threshold должен срабатывать обработчик observer,  для корректной работоспособности подходит intersectionRatio, т.к. isIntersection не всегда становится true */
        const { intersectionRatio } = entry;

        if (!!intersectionRatio && counter === 0) {
          animationAction.value = true;
          counter++;
          return;
        }
        if (!!intersectionRatio && counter === 1) {
          animationAction.value = false;
          counter--;
          return;
        }
      });
    }, options);

    observer.observe(document.querySelector(`.${classElement.value}`));
  };

  onMounted(() => {
    intersection();
  });
};
