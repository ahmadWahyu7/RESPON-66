class AppBar extends HTMLElement {
  constructor() {
    super();
    this.render();
  }
  
  render() {
    this.innerHTML = `
    <nav class="navbar navbar-expand-lg  navbar-light py-lg-0 px-lg-5">
      <a href="/" class="logo me-auto"><img src="./images/logo/respon-logo1.png" alt="Respon Logo" class="img-fluid"></a>
      <button type="button" class="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav ms-auto p-4 p-lg-0">
          <li><a href="#/beranda" class="nav-item nav-link">Beranda</a></li>
          <li><a href="#/reservasi" class="nav-item nav-link">Reservasi</a></li>
          <li><a href="#/tentang-kami" class="nav-item nav-link">Tentang Kami</a></li>
          <li><a href="#/kontak" class="nav-item nav-link">Kontak</a></li>
        </ul>
        <ul class="navbar-nav ms-auto">
          <button class="btn rounded-pill btn-primary py-2 px-4"><a href="#/masuk">Masuk</a></button>
        </ul>
      </div>
    </nav>
      `;
  }
}
  
customElements.define('app-bar', AppBar);
