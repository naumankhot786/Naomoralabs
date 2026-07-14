// ===============================
// Naomora Labs Script
// ===============================

// Smooth Scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

anchor.addEventListener("click", function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});

// Scroll Reveal

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:0.2
});

document.querySelectorAll(
".about-card,.service-card,.portfolio-card"
).forEach(item=>{

observer.observe(item);

});

// Back To Top Button

const topBtn=document.createElement("button");

topBtn.innerHTML="↑";

topBtn.id="topBtn";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};
// ===============================
// EmailJS Setup
// ===============================

// Public Key
emailjs.init({
    publicKey: "Zd-S6X6Hje-jPBQQd"
});

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const btn = contactForm.querySelector("button");
        btn.disabled = true;
        btn.innerText = "Sending...";

        emailjs.send(
  "service_nwihw2m",
  "template_aksmtgs",
  {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value
  }
)
        .then(function () {

            alert("✅ Message Sent Successfully!");

            contactForm.reset();

        })
        .catch(function (error) {

            console.error("EmailJS Error:", error);

            alert(
                "❌ Failed!\nStatus: " +
                error.status +
                "\nMessage: " +
                error.text
            );

        })
        .finally(function () {

            btn.disabled = false;
            btn.innerText = "Send Message";

        });

    });

}
// AI Chat Toggle

const chatToggle = document.getElementById("chat-toggle");
const chatBox = document.getElementById("chat-box");

if (chatToggle && chatBox) {

    chatToggle.onclick = function () {

        if (chatBox.style.display === "block") {
            chatBox.style.display = "none";
        } else {
            chatBox.style.display = "block";
        }

    };

    }
async function sendMessage(message) {
  const response = await fetch("/api/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      message: message
    })
  });

  const data = await response.json();
  return data.reply;
                }
