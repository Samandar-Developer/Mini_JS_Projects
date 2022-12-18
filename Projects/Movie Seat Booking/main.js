const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat:not(.occupied)");
const amount = document.querySelector(".count");
const cost = document.querySelector(".cost");
const movie = document.getElementById("movie");
let ticketPrice = +movie.value;

populateUI();

function setMovie(movieIndex, movieCost){
    localStorage.setItem("selectedMovieIndex", movieIndex);
    localStorage.setItem("selectedMovieCost", movieCost);    
}

function showAmountOfSelectedSeats(){
    const selectedSeats = document.querySelectorAll(".row .seat.selected");

    const amountSelectedSeats = selectedSeats.length;

    const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));
    localStorage.setItem("selectedSeats", JSON.stringify(seatsIndex));

    amount.innerText = amountSelectedSeats;
    cost.innerText = amountSelectedSeats * ticketPrice ;
    
}

function populateUI(){
    const savedSeats = JSON.parse(localStorage.getItem("selectedSeats"));

    if(savedSeats !== null && savedSeats.length > 0){
        seats.forEach((seat, index) => {
            if(savedSeats.indexOf(index) > -1){
                seat.classList.add("selected");
            }
        });
    }

    const selectedMovieIndex = localStorage.getItem("selectedMovieIndex");

    if( selectedMovieIndex !== null){
        movie.selectedIndex = selectedMovieIndex;
    }

    const selectedMovieCost = localStorage.getItem("selectedMovieCost");

}

movie.addEventListener("change", e =>{
    ticketPrice = +e.target.value;
    setMovie(e.target.selectedIndex, e.target.value);
    showAmountOfSelectedSeats();
});

container.addEventListener("click", e => {
    if(e.target.classList.contains("seat") && !e.target.classList.contains("occupied")){
        e.target.classList.toggle("selected");

        showAmountOfSelectedSeats();
    }
});


showAmountOfSelectedSeats();