// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.



$(function () {

 


  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

 
  $('.saveBtn').on('click', function(){
  
    var text = $(this).parent().children().eq(2)
    localStorage.setItem("key", text)
    var key = $(this).parent().attr('id')

    // rowThree.children().eq(0).text('O')

  })


  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

  var currentHour = dayjs().format('hA')
  var planHour = $('.container-lg px-5hourContainer').children()

  // this needs work. check the child stuff, fix the values for proper > = comparison
  for (var i = 0 ; i < $('.container-lg px-5hourContainer').children().length ; i++ ) {
    if (planHour > currentHour) {
      $(this).toggleClass('row time-block future');
    } else if (planHour == currentHour) {
      $(this).toggleClass('row time-block present');
    }  else {
        $(this).toggleClass('row time-block past');
      }
  }




  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //


  // TODO: Add code to display the current date in the header of the page.
  var today = dayjs();
  $('#currentDay').text(today.format('dddd, MMMM D'));
});
