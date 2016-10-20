/*
 * 
 * 
 *
 * Copyright (c) 2016 Chaithanya Padi
 * Licensed under the MIT license.
 */
(function($) {
    $.jqueryWeeklyCalendar = function(options) {
        // Override default options with passed-in options.
        options = $.extend({}, $.jqueryWeeklyCalendar.options, options);
        // Return the name of your plugin plus a punctuation character.
        return 'jqueryWeeklyCalendar' + options.punctuation;
    };

    // Default options.
    $.jqueryWeeklyCalendar.options = {
        punctuation: '.'
    };
}(jQuery));
