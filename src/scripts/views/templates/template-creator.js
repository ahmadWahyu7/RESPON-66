const tablePasien = (pasien) => `
    <tr>
        <th>${pasien.id}</th>
        <td>${pasien.NamaPasien}</td>
        <td>${pasien.Poli}</td>
        <td>${pasien.Pembayaran}</td>
    </tr>
`;

export { tablePasien };