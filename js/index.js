let cartCount = 0;
const buttons = document.querySelectorAll(".product button"); // Target all "Add to Cart" buttons
function handleClick(event) {
    // Access the clicked button from the event
    const button = event.target;
    // Change the button text
    button.textContent = "✔";
    cartCount++;
    const carttag = document.getElementById("cartcounter");
    if(cartCount == 1){
      carttag.textContent = cartCount + " Item Added";
    }
    else{
      carttag.textContent = cartCount + " Items Added";
  }
  }

  
buttons.forEach(button => button.addEventListener("click", handleClick));
// function handleClick(button) {
//     button.textContent = "✔";
//   }

  
