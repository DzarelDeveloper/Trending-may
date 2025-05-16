function toggleAttachMenu() {
  var menu = document.getElementById("attachMenu");
  if (menu.style.display === "none" || menu.style.display === "") {
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
  }
}

function toggleDropdown() {
  var dropdown = document.getElementById("dropdownMenu");
  dropdown.classList.toggle("active");
}

window.onclick = function(event) {
  if (!event.target.matches('.fa-ellipsis-v')) {
    var dropdowns = document.getElementsByClassName("dropdown-menu");
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('active')) {
        openDropdown.classList.remove('active');
      }
    }
  }
}

function sendMessage() {
  const chatContainer = document.getElementById('chatContainer');
  const sendButton = document.getElementById('sendButton');

  // Nonaktifkan tombol kirim untuk mencegah spam
  sendButton.disabled = true;

  // Tambah bubble pesan yang dikirim
  const sentBubble = document.createElement('div');
  sentBubble.className = 'message sent';
  sentBubble.innerHTML = 'Y<span class="time">19:12</span>';
  chatContainer.appendChild(sentBubble);

  // Debug untuk memastikan bubble ditambahkan
  console.log('Sent bubble added:', sentBubble);
  console.log('Bubble position:', sentBubble.getBoundingClientRect());

  // Paksa render dan scroll
  setTimeout(() => {
    chatContainer.scrollTop = chatContainer.scrollHeight;
    sentBubble.scrollIntoView({ behavior: 'smooth', block: 'end' });
    console.log('Scroll position after scroll:', chatContainer.scrollTop);
  }, 0); // Timeout 0 untuk memastikan DOM diperbarui sebelum scroll

  // Mainkan musik saat pesan Y terkirim
  const music = document.getElementById('backgroundMusic');
  music.play().catch(error => console.log('Autoplay dicegah:', error));

  // Gabungkan semua pesan otomatis 
  const autoMessage = [
    "youu can ask the flower's 💭🌷💐",
    "i sit for hoOur 🧘🏻‍♀️🕒",
    "telling all the bluee birds 🐦✨",
    "the bill and coo birds 🕊💁🏻‍♀️pretty little baby 🙆🏻‍♀️🍼🍥",
    "i'm so in loOovee with yoOoouu. . .🎀🤍🫵🏻"
  ].join('\n'); 

  const delay = 1000; // Jeda sebelum pesan muncul (dalam milidetik, 1 detik)
  setTimeout(() => {
    const autoBubble = document.createElement('div');
    autoBubble.className = 'message received';
    autoBubble.innerHTML = autoMessage + '<span class="time">19:12</span>';
    chatContainer.appendChild(autoBubble);
    chatContainer.scrollTop = chatContainer.scrollHeight;
    autoBubble.scrollIntoView({ behavior: 'smooth', block: 'end' });
    console.log('Auto bubble position:', autoBubble.getBoundingClientRect());
  }, delay);
}