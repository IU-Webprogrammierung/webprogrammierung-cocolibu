$(function () {
  $(document).on('click', '#menu-toggle', function () {
      $('#main-nav').toggleClass('active');
      var isExpanded = $('#main-nav').hasClass('active');
      $('#menu-toggle').attr('aria-expanded', isExpanded ? 'true' : 'false');
      $(this).text(isExpanded ? '✕' : '☰');
  });
});