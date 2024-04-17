let toggleBtn = document.getElementById('toggle-btn');
let body = document.body;
let darkMode = localStorage.getItem('dark-mode');

const enableDarkMode = () =>{
   toggleBtn.classList.replace('fa-sun', 'fa-moon');
   body.classList.add('dark');
   localStorage.setItem('dark-mode', 'enabled');
}

const disableDarkMode = () =>{
   toggleBtn.classList.replace('fa-moon', 'fa-sun');
   body.classList.remove('dark');
   localStorage.setItem('dark-mode', 'disabled');
}

if(darkMode === 'enabled'){
   enableDarkMode();
}

toggleBtn.onclick = (e) =>{
   darkMode = localStorage.getItem('dark-mode');
   if(darkMode === 'disabled'){
      enableDarkMode();
   }else{
      disableDarkMode();
   }
}

let profile = document.querySelector('.header .flex .profile');

document.querySelector('#user-btn').onclick = () =>{
   profile.classList.toggle('active');
   search.classList.remove('active');
}

let search = document.querySelector('.header .flex .search-form');

document.querySelector('#search-btn').onclick = () =>{
   search.classList.toggle('active');
   profile.classList.remove('active');
}

let sideBar = document.querySelector('.side-bar');

document.querySelector('#menu-btn').onclick = () =>{
   sideBar.classList.toggle('active');
   body.classList.toggle('active');
}

document.querySelector('#close-btn').onclick = () =>{
   sideBar.classList.remove('active');
   body.classList.remove('active');
}

window.onscroll = () =>{
   profile.classList.remove('active');
   search.classList.remove('active');

   if(window.innerWidth < 1200){
      sideBar.classList.remove('active');
      body.classList.remove('active');
   }
}

// Announcement System
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('announcementForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission
        var announcement = document.getElementById('announcement').value;
        if (announcement.trim() !== '') {
            addAnnouncement(announcement);
            document.getElementById('announcementForm').reset();
        } else {
            alert("Please enter an announcement.");
        }
    });

    function addAnnouncement(announcement) {
        var announcementsDiv = document.getElementById('announcements');
        var newAnnouncementDiv = document.createElement('div');
        newAnnouncementDiv.classList.add('announcement');

        var announcementText = document.createElement('p');
        announcementText.textContent = announcement;

        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function() {
            announcementsDiv.removeChild(newAnnouncementDiv);
        });

        newAnnouncementDiv.appendChild(announcementText);
        newAnnouncementDiv.appendChild(deleteButton);
        announcementsDiv.appendChild(newAnnouncementDiv);
    }
    function search() {
      var input = document.getElementById('searchInput').value.toLowerCase();
      var resultsContainer = document.getElementById('results');
      resultsContainer.innerHTML = ''; // Clear previous results
  
      // Your dataset or codes to search through
      var dataset = [
          "Code 1",
          "Code 2",
          "Code 3",
          // Add more codes here
      ];
  
      var matches = dataset.filter(function(item) {
          return item.toLowerCase().includes(input);
      });
  
      if (matches.length > 0) {
          var ul = document.createElement('ul');
          matches.forEach(function(match) {
              var li = document.createElement('li');
              li.textContent = match;
              ul.appendChild(li);
          });
          resultsContainer.appendChild(ul);
      } else {
          resultsContainer.textContent = "No results found";
      }
  }
  
});
