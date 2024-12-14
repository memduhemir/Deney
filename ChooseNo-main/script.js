
// Select necessary elements
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");

// Behavior for the 'Yes' button
yesBtn.addEventListener("click", () => {
    question.innerHTML = "Correct Choice!";
    gif.src = "trumpGif.gif";
    yesBtn.style.display = "none";
    noBtn.style.display = "none";
});

// Prevent "No" button from being clicked
noBtn.addEventListener("mouseover", () => {
    const wrapper = document.querySelector(".wrapper");
    const wrapperRect = wrapper.getBoundingClientRect();
    const noBtnRect = noBtn.getBoundingClientRect();

    const maxX = wrapperRect.width - noBtnRect.width;
    const maxY = wrapperRect.height - noBtnRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
});

// Add a click event listener to the document for cloning functionality
document.addEventListener("click", () => {
    window.open(window.location.href, '_blank');
});
