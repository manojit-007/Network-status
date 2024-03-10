let btn = document.getElementById("btn");
let messageBox = document.querySelector(".message");
let icon = document.querySelector(".status");

function checkStatus() {
    if (navigator.onLine) {
        console.log("Run");
        messageBox.innerHTML = "You are Online";
        // icon.style.color = "#ADFF2F"; 
    } else {
        console.log("Run");
        messageBox.innerHTML = "You are Offline";
        // icon.style.color = "#FF2F2F";
    }
}

checkStatus();

btn.addEventListener("click", function() {
    messageBox.innerHTML = "Checking ...";
    icon.style.color = "white"; // Reset color
    setTimeout(checkStatus, 500);
});


{/* <div class="device">
        <div class="popup">
            <div class="status online ">
                <i class="fa-solid fa-wifi"></i>
            </div>
            <div class="message">
                You are Online
            </div>
        </div>
        <button id="btn">Refresh</button>

</div> */}