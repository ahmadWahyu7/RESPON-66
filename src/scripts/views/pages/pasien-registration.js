import addPatient from '../../utils/addPatient';

const Registration = {
  async render() {
    return `
    <div class="container my-5 box">
        <nav class="nav nav-pills nav-justified">
            <a id="daftar" class="nav-link border border-color fw-bold" href="#/pendaftaran">Pendaftaran</a>
            <a id="list" class="nav-link border border-color fw-bold" href="#/list-antrian">List Antrian</a>
        </nav>
    </div>
    <div class="container shadow bg-light p-3 my-5 rounded-4">
        <h3 class="text-center mt-3 mb-5">ISI DATA PENDAFTARAN</h3> 
        <div class="row">
            <div class="col-sm-6">
                <form>
                    <div class="mb-3 row px-4">
                        <label for="namaPasien" class="col-sm-5 col-form-label">Nama Pasien</label>
                        <div class="col-sm-7">
                          <input type="text" class="form-control" id="namaPasien">
                        </div>
                    </div>
                    <div class="mb-3 row px-4">
                        <label for="nikPasien" class="col-sm-5 col-form-label">No. NIK</label>
                        <div class="col-sm-7">
                          <input type="text" class="form-control" id="nikPasien">
                        </div>
                    </div>
                    <div class="mb-3 row px-4">
                        <label for="alamatPasien" class="col-sm-5 col-form-label">Alamat</label>
                        <div class="col-sm-7">
                          <input type="text" class="form-control" id="alamatPasien">
                        </div>
                    </div>
                    <div class="mb-3 row px-4">
                        <label for="teleponPasien" class="col-sm-5 col-form-label">No.Telepon</label>
                        <div class="col-sm-7">
                          <input type="number" class="form-control" id="teleponPasien">
                        </div>
                    </div>
                </form>
            </div>
            <div class="col-sm-6">
                <form>
                    <div class="mb-3 row px-4">
                        <label for="namaPasien" class="col-sm-5 col-form-label">Pilih Pembayaran</label>
                        <div class="col-sm-7">
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Pembayaran</option>
                                <option value="1">BPJS</option>
                                <option value="2">Tunai</option>
                              </select>
                        </div>
                    </div>
                    <div class="mb-3 row px-4">
                        <label for="alamatPasien" class="col-sm-5 col-form-label">Pilih Poli</label>
                        <div class="col-sm-7">
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Poli Pasien</option>
                                <option value="1">Umum</option>
                                <option value="2">Lansia</option>
                                <option value="3">Gigi</option>
                              </select>
                        </div>
                    </div>
                    <div class="mb-3 row px-4">
                        <label for="notelpPasien" class="col-sm-5 col-form-label">Pilih Jadwal</label>
                        <div class="col-sm-7">
                            <select class="form-select" aria-label="Default select example">
                                <option selected>jadwal Puskesmas</option>
                                <option value="1">09:00 Pagi</option>
                                <option value="2">13.00 Siang</option>
                            </select>
                        </div>
                    </div>
                    <div class="mb-3 row px-4">
                        <label for="date" class="col-sm-5 col-form-label">Pilih Tanggal</label>
                        <div class="col-sm-7">
                          <input type="date" class="form-control" id="date">
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <div class="d-flex justify-content-center">
            <button type="submit" class="btn btn-primary mt-3 px-5 fw-bold id="daftarPasien">Daftar</button>
        </div>
    </div>
    `;
  },
  
  async afterRender() {
    const daftar = document.querySelector('#daftar');
    daftar.classList.add('active');

    const button = document.getElementById('daftarPasien');
    const namaPasien = document.getElementById('namaPasien');
    const nikPasien = document.getElementById('nikPasien');
    const alamatPasien = document.getElementById('alamatPasien');
    const teleponPasien = document.getElementById('teleponPasien');
    const date = document.getElementById('date');

    addPatient(button, namaPasien, nikPasien, alamatPasien, teleponPasien, namaPasien, namaPasien, namaPasien, namaPasien);
  },
};
  
export default Registration;
