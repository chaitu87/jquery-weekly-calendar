(function ($) {
  module('jQuery.jqueryWeeklyCalendar');

  test('is jqueryWeeklyCalendar', function () {
    expect(2);
    strictEqual($.jqueryWeeklyCalendar(), 'jqueryWeeklyCalendar.', 'should be jqueryWeeklyCalendar');
    strictEqual($.jqueryWeeklyCalendar({punctuation: '!'}), 'jqueryWeeklyCalendar!', 'should be thoroughly jqueryWeeklyCalendar');
  });
  
}(jQuery));
