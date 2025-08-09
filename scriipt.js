// Start dropdown
document.writeln('<div class="dropdown">');
document.writeln('<button class="dropbtn" onclick="location.href=\'start.html\'">start</button>');
document.writeln('<div class="dropdown-content">');
document.writeln('<a href="https://yahoo.de">yahoo</a>');
document.writeln('</div>');
document.writeln('</div>');

// About me dropdown
document.writeln('<div class="dropdown">');
document.writeln('<button class="dropbtn" onclick="location.href=\'whoiam.html\'">about me</button>');
document.writeln('<div class="dropdown-content">');
document.writeln('<a href="https://google.de">google</a>');
document.writeln('</div>');
document.writeln('</div>');

// med dropdown
document.writeln('<div class="dropdown">');
document.writeln('<button class="dropbtn" onclick="location.href=\'med.html\'">medicine</button>');
document.writeln('<div class="dropdown-content">');
document.writeln('<a href="https://www.kirsten-greene.com/">kirsten greene nd</a>');
document.writeln('</div>');
document.writeln('</div>');

// Music dropdown
document.writeln('<div class="dropdown">');
document.writeln('<button class="dropbtn" onclick="location.href=\'music.html\'">music</button>');
document.writeln('<div class="dropdown-content">');
document.writeln('<a href="https://www.stadt-freiburg.de">freiburg</a>');
document.writeln('</div>');
document.writeln('</div>');

// sm dropdown
document.writeln('<div class="dropdown">');
document.writeln('<button class="dropbtn" onclick="location.href=\'mysocialmedia.html\'">my social media</button>');
document.writeln('<div class="dropdown-content">');
document.writeln('<a href="">none</a>');
document.writeln('</div>');
document.writeln('</div>');

// personal links dropdown
document.writeln('<div class="dropdown">');
document.writeln('<button class="dropbtn" onclick="location.href=\'personallinks.html\'">personal links</button>');
document.writeln('<div class="dropdown-content">');
document.writeln('<a href="https://www.facebook.com/immanuel.vandriem">facebook</a>');
document.writeln('</div>');
document.writeln('</div>');

// baking dropdown
document.writeln('<div class="dropdown">');
document.writeln('<button class="dropbtn" onclick="location.href=\'brotbacken.html\'">baking</button>');
document.writeln('<div class="dropdown-content">');
document.writeln('<a href="https://immanuelvandriem.wixsite.com/baking">bread-wix-site</a>');
document.writeln('(on baking bread...)');
document.writeln('</div>');
document.writeln('</div>');

// log
document.writeln('<div class="dropdown">');
document.writeln('<button class="dropbtn" onclick="location.href=\'log.html\'">log</button>');
document.writeln('<div class="dropdown-content">');
document.writeln('<a href="aboutlog.html">about log</a>');
document.writeln('</div>');
document.writeln('</div>');

// grammatik
document.writeln('<div class="dropdown">');
document.writeln('<button class="dropbtn" onclick="location.href=\'grammatik.html\'">grammatik</button>');
document.writeln('<div class="dropdown-content">');
document.writeln('<a href="https://googletranslate.com">google translate</a>');
document.writeln('</div>');
document.writeln('</div>');



// Add this to a JS file or a <script> tag
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('commentForm');
  const input = document.getElementById('commentInput');
  const commentsDiv = document.getElementById('comments');

   // Load comments from localStorage
  let comments = JSON.parse(localStorage.getItem('comments')) || [];
  comments.forEach(function(comment) {
    const p = document.createElement('p');
    p.textContent = comment;
    commentsDiv.appendChild(p);
  });

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const comment = input.value.trim();
    if (comment) {
      comments.push(comment);
      localStorage.setItem('comments', JSON.stringify(comments));
      const p = document.createElement('p');
      p.textContent = comment;
      commentsDiv.appendChild(p);
      input.value = '';
    }
  });
});
