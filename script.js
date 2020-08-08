$(document).ready(function(){
  // Get Elements
  const container = $('.container')
  const seats = $('.row .seat:not(.occupied)')
  const count = $('#count')
  const total = $('#total')
  const movie = $('#movie')
  let ticketPrice = +movie[0].value

  // Functions
  const updateSelectedCount = () => {
    const selectedSeats = $('.row .seat.selected')
    const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat))

    localStorag.setItem('selectedSeats', JSON.stringify(seatsIndex))

    const selectedSeatsCount = selectedSeats.length
    count.text(selectedSeatsCount)
    total.text(selectedSeatsCount * ticketPrice)
  }

  // Event listeners
  movie.change(e => {
    ticketPrice = +e.target.value
    updateSelectedCount()
  })

  container.click(e => {
    if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
      e.target.classList.toggle('selected')

      updateSelectedCount()
    }
  })

});
