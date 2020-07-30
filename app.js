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
