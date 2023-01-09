const wrapper = document.getElementById("bubble-wrapper");

const animateBubble = x => {
    console.log('x:', x)
    const bubble = document.createElement("div");

    bubble.classList = 'bubble';
    bubble.style.left = `${x}px`;

    wrapper.appendChild(bubble);

    setTimeout( _ => wrapper.removeChild(bubble) , 2000);
}

window.onmousemove = e => animateBubble(e.clientX)