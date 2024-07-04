'use strict';
let password = '1111';
let input = document.querySelector('.osnova__input_1');
let habar = document.querySelector('.habar');
let openn = document.querySelector('.emodjila');
let opennn = document.querySelector('.emodjila2');
let globalArray_1 = [];
let globalArray_2 = [];
let xato = function () {
  document.querySelector('.label__input').style.color = 'red';
  document.querySelector('.osnova__input_1').style.borderBottom =
    '1px solid red';
  document.querySelector('.osnova__input_1').style.margin = '5px 0';
};
let togri = function () {
  document.querySelector('.osnova').style.left = '100%';
  input.value = '';
  document.querySelector('.label__input').style.color = 'rgb(47, 110, 165)';
  document.querySelector('.osnova__input_1').style.borderBottom =
    '1px solid gray';
  document.querySelector('.osnova__input_1').style.margin = '0';
};
let sms = function () {
  if (habar.value === ':love') {
    habar.value = document.querySelector('.q3').textContent;
  }
  if (habar.value === ':smile') {
    habar.value = document.querySelector('.q1').textContent;
  }
  let load = document.createElement('div');
  load.classList.add('righ');
  load.innerText = habar.value;
  document.querySelector('.orta1').appendChild(load);

  let load9 = document.createElement('div');
  load9.classList.add('righ9');
  load9.innerText = habar.value;
  document.querySelector('.center1').appendChild(load9);

  let currentDate = new Date();
  let soat = currentDate.getHours();
  if (soat < 10) {
    soat = '0' + soat;
  }
  let minut = currentDate.getMinutes();
  if (minut < 10) {
    minut = '0' + minut;
  }
  let vremya = document.createElement('div');
  vremya.classList.add('vremya');
  vremya.innerText = soat + ':' + minut;
  let time = soat + ':' + minut;
  document.querySelector('.orta1').appendChild(vremya);

  let vremya9 = document.createElement('div');
  vremya9.classList.add('vremya9');
  vremya9.innerText = soat + ':' + minut;
  document.querySelector('.center1').appendChild(vremya9);

  globalArray_1.push(habar.value, time);
  console.log(globalArray_1);
  localStorage.setItem('arr1', JSON.stringify(globalArray_1));
  console.log(JSON.stringify(globalArray_1));

  habar.value = '';
  document
    .querySelector('.orta1')
    .scrollTo(0, document.querySelector('.orta1').scrollHeight);
};

let back = function () {
  document.querySelector('.osnova').style.left = '0%';
  input.value = '';
  document.querySelector('.label__input').style.color = 'rgb(47, 110, 165)';
  document.querySelector('.osnova__input_1').style.borderBottom =
    '1px solid gray';
  document.querySelector('.osnova__input_1').style.margin = '0';
};
document
  .querySelector('.osnova__button_1')
  .addEventListener('click', function () {
    if (input.value === password) {
      togri();
    } else {
      xato();
    }
  });
document
  .querySelector('.osnova__button_2')
  .addEventListener('click', function () {
    window.close();
  });
document.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    if (input.value === password) {
      togri();
    } else {
      xato();
    }
  } else if (e.key === 'Escape') {
    back();
  }
});

document.querySelector('.zaebbal').addEventListener('click', function () {
  openn.classList.toggle('hidden');
});
document.querySelector('.zaebbal9').addEventListener('click', function () {
  opennn.classList.toggle('hidden');
});

let qs = [
  document.querySelector('.q1'),
  document.querySelector('.q2'),
  document.querySelector('.q3'),
  document.querySelector('.q4'),
  document.querySelector('.q5'),
  document.querySelector('.q6'),
  document.querySelector('.q7'),
  document.querySelector('.q8'),
  document.querySelector('.q9'),
  document.querySelector('.q10'),
];

qs.forEach(q => {
  q.addEventListener('click', function () {
    habar.value += this.textContent;
  });
});
document.querySelector('.sent').addEventListener('click', function () {
  if (habar.value != 0) {
    sms();
  }
});
document.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    if (habar.value != 0) {
      sms();
    }
  }
});
const classNames = [
  '.q12',
  '.q22',
  '.q32',
  '.q42',
  '.q52',
  '.q62',
  '.q72',
  '.q82',
  '.q92',
  '.q102',
];

// Add event listeners to each element
classNames.forEach(className => {
  const element = document.querySelector(className);
  element.addEventListener('click', function () {
    habba.value += element.textContent;
  });
});
//2

let smos = function () {
  if (habba.value === ':love') {
    habba.value = document.querySelector('.q32').textContent;
  }
  if (habba.value === ':smile') {
    habba.value = document.querySelector('.q12').textContent;
  }

  let loadd = document.createElement('div');
  loadd.classList.add('lef');
  loadd.innerText = habba.value;
  document.querySelector('.orta1').appendChild(loadd);

  let currentDate = new Date();
  let soat = currentDate.getHours();
  if (soat < 10) {
    soat = '0' + soat;
  }
  let minut = currentDate.getMinutes();
  if (minut < 10) {
    minut = '0' + minut;
  }
  let vremya2 = document.createElement('div');
  vremya2.classList.add('vremya2');
  vremya2.innerText = soat + ':' + minut;
  document.querySelector('.orta1').appendChild(vremya2);
  //2
  let loadd99 = document.createElement('div');
  loadd99.classList.add('righ99');
  loadd99.innerText = habba.value;
  document.querySelector('.center1').appendChild(loadd99);
  habba.value = '';
  let vremya99 = document.createElement('div');
  vremya99.classList.add('vremya99');
  vremya99.innerText = soat + ':' + minut;
  document.querySelector('.center1').appendChild(vremya99);
  document
    .querySelector('.center1')
    .scrollTo(0, document.querySelector('.center1').scrollHeight);
};

let habba = document.querySelector('.habba');
document.querySelector('.sent2').addEventListener('click', function () {
  if (habba.value != 0) {
    smos();
  }
});
document.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    if (habba.value != 0) {
      smos();
    }
  }
});
//
