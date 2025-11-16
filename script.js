// small helper: simulate download CV (creates a simple CV file on the fly)
    function downloadCV() {
      const cvText = `Asma Dgham\nFront-End Developer\nEmail: dghamasma659@gmail.com\nSkills: HTML, CSS, JavaScript, Responsive Design\nAvailable for freelance projects.`;
      const blob = new Blob([cvText], {type:'text/plain'});
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'Asma-Dgham-CV.txt';
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    }
   
