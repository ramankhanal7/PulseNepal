
function autoGrow(element) {
    element.style.height = "auto";
    element.style.height = (element.scrollHeight) + "px";
}


document.getElementById("contactForm").addEventListener("submit", function (event) {
    const emailInput = document.getElementById("email").value;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}$/;


    if (!emailPattern.test(emailInput)) {
        alert("Please enter a valid email address.");
        event.preventDefault();
    }
});
