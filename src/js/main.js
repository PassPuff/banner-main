// Функция для анимации чисел
const launchCountUp = (item) => {
  // Находим все элементы для анимации
  const items = document.querySelectorAll(item);

  if (!items.length) return;

  items.forEach((element) => {
    // Читаем значение для анимации
    const endValue = parseInt(element.getAttribute("data-count-up"), 10);

    // Используем GSAP для анимации
    gsap.to(element, {
      // Продолжительность анимации в секундах
      duration: 2,
      // Свойство innerHTML будет анимироваться от 0 до endValue
      innerHTML: endValue,
      // Позволяет изменять значение в процессе анимации
      snap: "innerHTML",
      stagger: 1,
      // Изменяем значение в процессе анимации, добавляя префикс "+"
      onUpdate: function () {
        element.innerHTML =
          gsap.utils.snap(1, this.targets()[0].innerHTML) + "+";
      },
      // Устанавливаем стартовое значение
      onStart: function () {
        element.innerHTML = "0+";
      },
      // Эффект ускорения/замедления для более естественного движения
      ease: "power1.out"
    });
  });
};

// Вызываем функцию анимации

launchCountUp(".js-banner-about-ponty-value");


