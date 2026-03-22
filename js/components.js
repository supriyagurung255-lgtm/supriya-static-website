class SiteHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <style>
        header {
          background-color: var(--bg-color);
          box-shadow: 0 2px 4px rgba(0,0,0,0.05);
          position: sticky;
          top: 0;
          z-index: 1000;
        }
        .header-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 1.5rem;
          max-width: 1200px;
          margin: 0 auto;
        }
        .logo a {
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--primary);
          text-decoration: none;
          letter-spacing: -0.5px;
        }
        .nav-links {
          display: flex;
          gap: 2rem;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .nav-links a {
          color: var(--text-dark);
          font-weight: 500;
          text-decoration: none;
          position: relative;
          padding-bottom: 4px;
        }
        .nav-links a::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: 0;
          left: 0;
          background-color: var(--primary);
          transition: width var(--transition-speed) ease;
        }
        .nav-links a:hover {
          color: var(--primary);
        }
        .nav-links a:hover::after,
        .nav-links a.active::after {
          width: 100%;
        }
        .hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          cursor: pointer;
        }
        .hamburger span {
          width: 25px;
          height: 3px;
          background-color: var(--text-dark);
          transition: all 0.3s;
        }
        @media (max-width: 768px) {
          .nav-links {
            display: none;
            flex-direction: column;
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            background-color: var(--bg-color);
            padding: 1rem;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
          }
          .nav-links.active {
            display: flex;
          }
          .hamburger {
            display: flex;
          }
        }
      </style>
      <header>
        <div class="header-container">
          <div class="logo">
            <a href="index.html">SysOp Portfolio</a>
          </div>
          <div class="hamburger">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul class="nav-links">
            <li><a href="index.html" class="nav-link">Home</a></li>
            <li><a href="skills.html" class="nav-link">Skills</a></li>
            <li><a href="contact.html" class="nav-link">Contact</a></li>
          </ul>
        </div>
      </header>
    `;

    // Active link highlighting
    const currentPath = window.location.pathname;
    const links = this.querySelectorAll('.nav-link');
    links.forEach(link => {
      if (link.getAttribute('href') === currentPath.split('/').pop() || 
         (currentPath.endsWith('/') && link.getAttribute('href') === 'index.html')) {
        link.classList.add('active');
      }
    });

    // Mobile menu toggle
    const hamburger = this.querySelector('.hamburger');
    const navLinks = this.querySelector('.nav-links');
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }
}

class SiteFooter extends HTMLElement {
  connectedCallback() {
    const year = new Date().getFullYear();
    this.innerHTML = `
      <style>
        footer {
          background-color: var(--text-dark);
          color: var(--text-light);
          padding: 3rem 0;
        }
        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          text-align: center;
        }
        .social-links {
          display: flex;
          gap: 1.5rem;
        }
        .social-links a {
          color: var(--bg-surface);
          font-size: 1.2rem;
          transition: color var(--transition-speed);
        }
        .social-links a:hover {
          color: var(--accent-light);
        }
        .footer-text {
          color: #a0a0a0;
          font-size: 0.9rem;
        }
        .footer-accent {
          color: var(--primary);
        }
      </style>
      <footer>
        <div class="footer-container">
          <h3>SysOp Portfolio</h3>
          <div class="social-links">
            <a href="#" aria-label="LinkedIn">LinkedIn</a>
            <a href="#" aria-label="GitHub">GitHub</a>
            <a href="#" aria-label="Email">Email</a>
          </div>
          <p class="footer-text">&copy; ${year} IT Student. Built for high performance.</p>
        </div>
      </footer>
    `;
  }
}

customElements.define('site-header', SiteHeader);
customElements.define('site-footer', SiteFooter);
