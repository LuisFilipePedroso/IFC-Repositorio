$(document).ready(function() {
  $(document).find('div#row-siape').hide();

  $('select#type').on('change', function() {
    if($(document).find('select#type').val() == 'PROFESSOR') {
      $(document).find('div#row-siape').show();
    } else {
      $(document).find('div#row-siape').hide();
    }
  });

  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    
    if (scroll >= $('div#container-search').offset().top-130) {
        $(".site header div#menu ul li a").removeClass("ativo");
        $('a#menu-pesquisar').addClass('ativo');
    }

    if (scroll >= $('div#container-sobre-nos').offset().top-140) {
        $(".site header div#menu ul li a").removeClass("ativo");
        $('a#menu-sobre-nos').addClass('ativo');
    }

    if (scroll >= $('div#container-time').offset().top-150) {
        $(".site header div#menu ul li a").removeClass("ativo");
        $('a#menu-a-equipe').addClass('ativo');
    }
  });

  $(document).on('click', 'ul#container-menu-item a', function(e) {
    e.preventDefault();
    var id = $(this).attr('id');
    var href = $(this).attr('href');
    $(".site header div#menu ul li a").removeClass("ativo");
    $('a#'+id).addClass('ativo');
    $('html, body').animate({
        scrollTop: $('div'+href).offset().top-120
    }, 1000);
  });
});