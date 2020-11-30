(function(){
    function ver_maisToggle() {
        this.classList.toggle('active');
        document.getElementById("ver-mais-cont").classList.toggle('open');
    }
    document.querySelector('.cta-vermais').addEventListener('click', ver_maisToggle);
})();
//------------------------ Toggle ver-mais hero