$(function () {

  $('.saveBtn').on('click', function () {
    var text = $(this).parent().children().eq(1).val()
    var key = $(this).parent().attr('id')
    localStorage.setItem(key, text)
  })

  $('.container-lg').children().each(function () {
    var currentHour = 10
    var blockID = $(this).attr('id').split('-')[1];
    var planHour = parseInt(blockID)

    if (planHour == currentHour) {
      $(this).addClass('present');
    } else if (planHour < currentHour) {
      $(this).addClass('past');
    } else {
      $(this).addClass('future')
    }
  })
  
  $('.container-lg').children().each(function () {
    var key = $(this).attr('id')
    var storedText = localStorage.getItem(key)
    if (storedText != null)
      $(this).children().eq(1).val(storedText)
  })

  function date() {
    var today = dayjs();
    $('#currentDay').text(today.format('dddd, MMMM D'));
  }
  setInterval(date, 1000);
});

