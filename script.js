var lista = document.querySelectorAll('.lista li');
var animais = document.querySelectorAll('.c32 p');
var animaisInteiro = document.querySelectorAll('.c32 div');
lista.forEach(function (conteudo, index) {
  conteudo.addEventListener('mouseover', function () {
    criarEvento(index);
  });
  conteudo.addEventListener('mouseout', function () {
    remove();
  });
});
function remove() {
  animais.forEach(function (conteudo2) {
    conteudo2.classList.remove('color');
  });
}
function criarEvento(index2) {
  animais.forEach(function (conteudo, index) {
    if (index == index2) {
      conteudo.classList.add('color');
    } else {
      conteudo.classList.remove('color');
    }
  });
}

lista.forEach(function (conteudo, index6) {
  conteudo.addEventListener('click', function () {
    click(index6);
  });
});

var remover2 = document.querySelectorAll('.remover');
function click(index6) {
  remover2.forEach(function (conteudo) {
    conteudo.style.display = 'inline-block';
  });
  animaisInteiro.forEach(function (conteudo, index3) {
    conteudo.classList.remove('animacao');
    if (index6 != index3) {
      conteudo.style.display = 'none';
    } else {
      conteudo.style.display = 'block';
      conteudo.classList.add('animacao');
      conteudo.children[0].classList.remove('laranja');
      conteudo.children[0].classList.add('azul');
      animais.forEach(function (conteudo4) {
        conteudo4.classList.remove('color');
      });
    }
  });
}
function remover(conteudo) {
  remover2.forEach(function (conteudo) {
    conteudo.style.display = 'none';
  });
  animaisInteiro.forEach(function (conteudo, index) {
    conteudo.children[0].classList.remove('azul');
    conteudo.children[0].classList.add('laranja');
    conteudo.style.display = 'block';
  });
}
//scroll suave

var link = document.querySelectorAll('.c11 a[href^="#"]');
link.forEach(function (conteudo) {
  conteudo.addEventListener('click', scroll2);
});
function scroll2(event) {
  event.preventDefault();
  var href = event.currentTarget.getAttribute('href');
  var teste = document.querySelector(href);
  teste.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
}
//aparecer e sumir elemento de FAQ
var c42h3 = document.querySelectorAll('.c42 h3');
c42h3.forEach(function (conteudo) {
  var proximo2 = conteudo.nextElementSibling;
  proximo2.classList.add('sumir');
  conteudo.addEventListener('click', function () {
    var proximo = this.nextElementSibling;
    proximo.classList.toggle('sumir');
    proximo.classList.toggle('aparecer');
    conteudo.classList.toggle('virar');
  });
});

// scrollativo

var teste3 = document.querySelector('.c1');
var divs = document.querySelectorAll('.scroll');

function animacao2() {
  var window3 = window.innerHeight * 0.7;
  divs.forEach(function (conteudo, index) {
    var topo = conteudo.getBoundingClientRect().top - window3;
    if (topo < 0) {
      conteudo.classList.remove('scroll');
      conteudo.classList.add('scrollativo');
    }
  });
}
window.addEventListener('scroll', animacao2);
divs.forEach(function (conteudo, index) {
  if (index == 0 || index == 1) {
    conteudo.classList.add('scrollativo');
    conteudo.classList.remove('scroll');
  }
});

//tooltip

var imagem = document.querySelector('.c51 img');
var tooltip = document.createElement('div');
tooltip.id = 'tooltip';
tooltip.textContent = 'Endereço proximo ao estacionamento';
document.body.appendChild(tooltip);

imagem.addEventListener('mousemove', function (e) {
  tooltip.style.display = 'block';
  tooltip.style.left = e.pageX + 'px';
  tooltip.style.top = e.pageY + 'px';
});

imagem.addEventListener('mouseout', function () {
  tooltip.style.display = 'none';
});

// dropwdown menu

var elementos = document.querySelectorAll('.sobre');
var dropdown = document.querySelectorAll('.dropdown');
elementos.forEach(function (conteudo, index) {
  conteudo.addEventListener('mouseover', function (conteudo2, index2) {
    dropdown[index].classList.add('ativo');
  });
  conteudo.addEventListener('mouseout', function () {
    dropdown[index].classList.remove('ativo');
  });
});

// menu mobile

var menu = document.querySelector('.menu');
var menu2 = document.querySelector('.menu2');
var virar = document.querySelector('.menu span');
menu.addEventListener('click', function (conteudo) {
  menu2.classList.toggle('ativar');
});

// menu mobile - dropdown
var itenspai = document.querySelectorAll('.seletor');
var dropdownMenu = document.querySelectorAll('.drop-menu');

itenspai.forEach(function (conteudo, index) {
  conteudo.addEventListener('click', function (contuedo2, index2) {
    dropdownMenu[index].classList.toggle('drop');
  });
});
document.addEventListener('click', (e) => {
  if (!menu2.contains(e.target) && e.target !== menu) {
    menu2.classList.remove('ativar');
    dropdownMenu.forEach(function (conteudo, index) {
      conteudo.classList.remove('drop');
    });
  }
});

// numeros animados
var divNum = document.querySelector('.numeros');
function numeros2() {
  var numeros = document.querySelectorAll('.numeros p');
  numeros.forEach(function (conteudo) {
    const total = +conteudo.textContent;
    const incremento = Math.floor(total / 110);
    let start = 0;
    const timer = setInterval(() => {
      start = start + incremento;
      conteudo.innerHTML = start;
      if (start > total) {
        clearInterval(timer);
      }
    }, 10);
    conteudo.innerHTML = total;
  });
}
var config = { attributes: true };
var observer = new MutationObserver(handleMutation);
function handleMutation(mutation) {
  if (mutation[0].target.classList.contains('scrollativo')) {
    observer.disconnect();
    numeros2();
  }
}
observer.observe(divNum, config);
observer.observe(divNum, { attributes: true });

//
