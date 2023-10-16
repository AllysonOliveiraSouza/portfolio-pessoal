//Declarando variáveis globais

var btnContact = document.querySelector('.jl-btn-contact');
var ToggleModal = document.querySelectorAll('.jl-toggle-modal');
var ToggleMenu = document.querySelectorAll('.jl-toggle-menu');
var menuMobile = document.querySelector('.jl-menu-mob');
var btnMenuMobIcon = document.querySelector('.jl-btn-menu-mob ion-icon');

// Page preloader
window.addEventListener('load', function () {
    var Pagepreloader = this.document.querySelector('.jl-preloader');
    Pagepreloader.classList.add('jl-fade-out');

    setTimeout(function () {
        Pagepreloader.style.display = 'none';
    }, 2000);
});


btnContact.addEventListener('click', function () {
    var boxContact = document.querySelector('.jl-contact-info');
    boxContact.classList.toggle('jl-is-open');
    this.classList.toggle('jl-change-icon');
});

// Abrindo e fechando o menu mobile

for (var m = 0; m < ToggleMenu.length; m++) {
    ToggleMenu[m].addEventListener("click", function () {
        var overlay = document.querySelector('.jl-menu-overlay');
        overlay.classList.toggle('jl-is-open');
        menuMobile.classList.toggle("jl-menu-is-closed");
        menuMobile.classList.toggle("jl-menu-is-open");
        var icon = btnMenuMobIcon.getAttribute("name");
        if (icon == "menu-outline") {
            btnMenuMobIcon.setAttribute("name", "close");
        } else {
            btnMenuMobIcon.setAttribute("name", "menu-outline");
        }
    });
}


// Abrindo e fechando o modal de orçamento


for (var i = 0; i < ToggleModal.length; i++) {
    ToggleModal[i].addEventListener('click', function () {
        var ModalOrcamento = document.getElementById('jl-modal-orcamento');
        var overlay = document.querySelector('.jl-overlay');
        overlay.classList.toggle('jl-is-open');
        ModalOrcamento.classList.toggle('jl-is-open');
        ModalOrcamento.classList.toggle('jl-slide-top-in');
    });
}

// Animando elementos da topbar

var triggerTopbar = document.querySelector('.jl-trigger-topbar');
var topbar = document.querySelector(".jl-topbar");
var logo = document.querySelector(".jl-logo");
/*var waypoint = new Waypoint({
    element: triggerTopbar,
    handler: function () {
        topbar.classList.toggle("jl-topbar-bg");
        logo.classList.toggle("jl-logo-shorten");
        logo.classList.toggle("jl-logo-big");
    },
    offset: '50px'
}); */





