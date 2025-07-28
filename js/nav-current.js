$(function () {
    $('#header').load('components/header.html', function () {
      const currentPath = window.location.pathname.split("/").pop() || "index.html";
  
      $('#header nav a').each(function () {
        const linkPath = $(this).attr('href');
        if (linkPath === currentPath) {
          $(this).attr('aria-current', 'page');
        } else {
          $(this).removeAttr('aria-current');
        }
      });
    });
  });