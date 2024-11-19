$(document).ready(function () {
    var envelope = $('#envelope');
    var btn_open = $('#open');
    var btn_reset = $('#reset');
    var messageContainer = $('#message-container');

    envelope.click(function () {
        open();
    });
    btn_open.click(function () {
        open();
    });
    btn_reset.click(function () {
        close();
    });

    function open() {
        envelope.addClass('open').removeClass('close');
        
        // Adiciona a classe 'open' no body para mudar o fundo
        $('body').addClass('open');
  
        setTimeout(function () {
            showMessage();
        }, 1000); 
    }

    function close() {
        envelope.addClass('close').removeClass('open');
        
        $('body').removeClass('open');
        
        hideMessage();
    }

    function showMessage() {
        messageContainer.addClass('show');
    }

    function hideMessage() {
        messageContainer.removeClass('show');
    }
});
