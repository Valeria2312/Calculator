const inputRub = document.querySelector('#rub'),
      inputUsd = document.querySelector('#usd');

inputRub.addEventListener('input', () => {
  const request = new XMLHttpRequest();
  // методы XMLHttpRequest
  // что делаем и где это лежит
  request.open('GET', 'js/current.json');
  // Http - загиловик: типо контента, тип json, кодировки
  request.setRequestHeader('Content-type', 'application/json; charset=utf-8' );
  // метод запроса
  request.send();
    // получение ответа от сервера
    request.addEventListener('readystatechange', () => {
      // проверка ответа
      if (request.status === 200) {
        // перевод обратно в js
        const data = JSON.parse(request.response);
        // калькулятор
        inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
      } else {
        inputUsd.value = ' что-то пошло не так';
      }
    });
});
