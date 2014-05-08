//  ########################################################################################
//   Replaces all Image and Div elements on a page with placeholders from http://placebox.es
//   Exclude elements by adding a class with the name: exclude
//  ########################################################################################

(function ($) {
    $.fn.placeboxes = function () {
        this.find('img').each(function (i, element) {
            if (element.nodeName == 'IMG' && $(this).hasClass('exclude') == false) {
                $(this).attr('src', 'http://placebox.es/' + $(this).width() + '/' + $(this).height() + '?ran=' + Math.floor(Math.random() * 101));
            } else if (element.nodeName == 'DIV' && $(this).hasClass('exclude') == false) {
                $(this).css('background-image', 'url(http://placebox.es/' + $(this).width() + '/' + $(this).height() + '?ran=' + Math.floor(Math.random() * 101) + ')');
            }
        });
    };
})(jQuery);