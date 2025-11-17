let count = 0;

function pressNo() {
    count++;

    const yes = document.getElementById("yesBtn");
    const no = document.getElementById("noBtn");

    yes.style.fontSize = (30 + count * 10) + "px";
    yes.style.padding = (30 + count * 6) + "px";

    no.style.fontSize = (30 - count * 4) + "px";
    no.style.padding = (30 - count * 4) + "px";

    if (count >= 10) {
        no.style.display = "none";
        yes.style.fontSize = "80px";
        yes.style.padding = "200px";
    }
}

function goYes() {
    // <<<<< ใส่ลิงก์ YouTube ที่ต้องการตรงนี้!
    window.location.href = "https://www.youtube.com/watch?v=lqWP-nJF0kA";
}
