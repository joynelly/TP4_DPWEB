import React from "react";

export class TableBiodata extends React.Component {
    render() {
        return(
            <div>
                <table class="table" id="tabel">
                <thead>
                  <tr>
                    <th class="col1" scope="col">Label</th>
                    <th class="col2" scope="col">Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Nama</th>
                    <td> {this.props.dataNama} </td>
                  </tr>
                  <tr>
                    <th scope="row">Tanggal Lahir</th>
                    <td> {this.props.dataTanggal} </td>
                  </tr>
                  <tr>
                    <th scope="row">Jenis Kelamin</th>
                    <td> {this.props.dataGender} </td>
                  </tr>
                  <tr>
                    <th scope="row">Hobi</th>
                    <td> {this.props.dataHobi} </td>
                  </tr>
                  <tr>
                    <th scope="row">Agama</th>
                    <td> {this.props.dataAgama} </td>
                  </tr>
                  <tr>
                    <th scope="row">Pesan</th>
                    <td> {this.props.dataPesan} </td>
                  </tr>
                </tbody>
                </table>
            </div>
        )
    }
}