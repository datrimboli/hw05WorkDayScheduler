

// Date display
$('#currentDay').html(moment().format('dddd, MMMM Do, YYYY'));

const currentTime = moment().format('h');
console.log(currentTime)

let hours = [9, 10, 11, 12, 1, 2, 3, 4, 5]
let currentIndex = hours.indexOf(parseInt(currentTime))


// Determines if times are in the past, present, or future
for (let i = 0; i < hours.length; i++) {
  if (i < currentIndex) {
    $(`.hour-${hours[i]}`).addClass('past')
  } else if (i > currentIndex) {
    $(`.hour-${hours[i]}`).addClass('future')
  } else {
    $(`.hour-${hours[i]}`).addClass('present')
  }
}

$(".saveBtn").click(function () {
  var userInput = $(this).siblings('textarea').val()
  console.log($(this).siblings('textarea').attr('id'))
  var hour = $(this).siblings('textarea').attr('id')
  localStorage.setItem(hour, userInput)

})
$('#9').val(localStorage.getItem('9'))
$('#10').val(localStorage.getItem('10'))
$('#11').val(localStorage.getItem('11'))
$('#12').val(localStorage.getItem('12'))
$('#1').val(localStorage.getItem('1'))
$('#2').val(localStorage.getItem('2'))
$('#3').val(localStorage.getItem('3'))
$('#4').val(localStorage.getItem('4'))
$('#5').val(localStorage.getItem('5'))