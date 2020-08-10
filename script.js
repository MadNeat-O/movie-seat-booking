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

    localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex))

    const selectedSeatsCount = selectedSeats.length
    count.text(selectedSeatsCount)
    total.text(selectedSeatsCount * ticketPrice)
  }

  const setMovieData = (movieIndex, moviePrice) => {
    localStorage.setItem('selectedMovieIndex', movieIndex)
    localStorage.setItem('selectedMoviePrice', moviePrice)
  }

  const populateUI = () => {
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'))
    if (selectedSeats !== null && selectedSeats.length > 0) {
      seats.forEach(seat => console.log(seat))
      // seats.forEach((seat, index) => {
      //   if (selectedSeats.indexOf(index) > -1) {
      //     seat.classList.add('selected')
      //   }
      // })
    }
  }

  populateUI()

  // Event listeners
  movie.change(e => {
    ticketPrice = +e.target.value
    setMovieData(e.target.selectedIndex, e.target.value);
    updateSelectedCount()
  })

  container.click(e => {
    if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
      e.target.classList.toggle('selected')

      updateSelectedCount()
    }
  })

});
