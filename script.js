const input = document.querySelector("#guess");
const button = document.querySelector("#btn");
const buttonRules = document.querySelector('#rules');
const answer = Math.floor(Math.random() * 20) + 1;

input.addEventListener('keypress', function(e){
   if(e.keyCode === 13){
      play();
   }
})

buttonRules.addEventListener("click", () =>{
   Swal.fire('The computer guesses any number randomly and asks the user to guess this number. The user enters a number.  If his guess is wrong, then the computer must say whether the guessed number is greater or less than, and then prompt the user to try again. If the user guesses the number, the game is over.',
   )
})

button.addEventListener("click", play);



function play() {
      const useNumber = document.querySelector('#guess').value;

      if(useNumber < 1 || useNumber > 20){
         Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Enter a number from 1 to 20!',
          })
      }

      else if (isNaN (useNumber)){
         Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Enter a number from 1 to 20!',
          })
      }

      else {
         if (useNumber < answer) {
            Swal.fire('Try a higher number',
            'Computer wins!')
         }

         else if (useNumber > answer){
            Swal.fire('Try a smaller number',
            'Computer wins!')
         }

         else{
            Swal.fire({
               title: 'Victory!',
               imageUrl: '/assets/images/win.jpg',
               imageWidth: 700,
               imageHeight: 400,
               imageAlt: 'Custom image',
             })
         }
      }

}
