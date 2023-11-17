document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.ingresso__button').addEventListener('click', function (event) {
        event.preventDefault();

        var quantidadeIngressos = document.getElementById('quantidadeIngressos').value;
        alert('Ingresso(s) comprado(s): ' + quantidadeIngressos);
    });

    document.querySelectorAll('.hero__button .button')[1].addEventListener('click', function (event) {
        event.preventDefault();
        alert('Assistindo ao trailer!');
    });
});
