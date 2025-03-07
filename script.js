$(document).ready(function() {
    console.log("jQuery carregado corretamente!");

    const envelope = $('#envelope');
    const btnOpen = $('#open');
    const btnClose = $('#close');

    function openEnvelope() {
        console.log("Abrindo envelope...");
        envelope.addClass('open').removeClass('close');
    }

    function closeEnvelope() {
        console.log("Fechando envelope...");
        envelope.addClass('close').removeClass('open');
    }

    btnOpen.click(openEnvelope);
    btnClose.click(closeEnvelope);
});
