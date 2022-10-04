const counters = document.querySelectorAll(".counter");
const speed = 800; // speed of counting


window.addEventListener("scroll", handleScroll);

function handleScroll() {
    const scrolled = window.scrollY;
    if(scrolled > 480) {
        removeHandler();

        counters.forEach((counter) => {
            const updateCounter = () => {
              const target = +counter.getAttribute("data-target");
              const count = +counter.innerText;
          
              const increment = target / speed;
          
              if (count < target) {
                counter.innerText = Math.floor(count + increment);
                setTimeout(updateCounter, 10);
              } else {
                counter.innerText = target;
              }
            };
            updateCounter();
          });
    }
}

function removeHandler() {
    window.removeEventListener("scroll", handleScroll)
}
