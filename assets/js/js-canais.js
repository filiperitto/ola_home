(function(){
    function ver_maisToggle() {
        this.classList.toggle('active');
        document.getElementById("ver-mais-cont").classList.toggle('open');
    }
    
    // Select all the elements with example class.
    var Toggleviewvermais = document.querySelectorAll('.cta-vermais');
    // Loop through the elements.
    for (var i = 0; i < Toggleviewvermais.length; i++) {
    // Add the class margin to the individual elements.
    Toggleviewvermais[i].addEventListener('click', ver_maisToggle);
    }
})();
//------------------------ Toggle ver-mais hero


(function(){
    function viewPlaylistToggle() {
        document.getElementById("view-square").classList.toggle('active');
        document.getElementById("view-list").classList.toggle('active');
        document.getElementById("view-listID").classList.toggle('list-view');
        

    }
    // Select all the elements with example class.
    var ToggleviewPlaylist = document.querySelectorAll('.cta-view');
    // Loop through the elements.
    for (var i = 0; i < ToggleviewPlaylist.length; i++) {
    // Add the class margin to the individual elements.
    ToggleviewPlaylist[i].addEventListener('click', viewPlaylistToggle);
    }


    
})();
//------------------------ Toggle view playlist Canal


    
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

function openTab(evt, canalSwitch) {
    // Declare all variables
    var i, tab_painel, tablinks;
  
    // Get all elements with class="tab-painel" and hide them
    tab_painel = document.getElementsByClassName("tab_painel");
    for (i = 0; i < tab_painel.length; i++) {
      tab_painel[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(canalSwitch).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
$(function () {
  $.contextMenu({
      selector: '.cta-menu-epi',
      trigger: 'left',
      items: $.contextMenu.fromMenu($('#contextMenu-episode')),
  });
});
$(function () {
  $.contextMenu({
      selector: '.cta-share',
      trigger: 'left',
      items: $.contextMenu.fromMenu($('#contextMenu-share')),
  });
  $('.context-menu-list').css({
      top: y + 50,
      left: x
  });
});
//------------------------ ContextMenu