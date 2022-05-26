import './App.css';
import React from 'react';
import { FormInputData } from "./components/FormBiodata";
import { TableBiodata } from './components/TableBiodata';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nama: "",
      tanggal: "",
      radio: "",
      hobi: "",
      agama: "",
      pesan: ""
    }

    this.changeValue = this.changeValue.bind(this);
    this.showTable = this.showTable.bind(this);
    this.checkboxValue = this.checkboxValue.bind(this);
  }

  changeValue(e) {
    this.setState((state, props) => ({
      [e.target.name]: e.target.value,
    }))
  }

  checkboxValue(e) {
    var _hobi = document.getElementsByName('hobi');
    var _hasil = "";
    for(let i = 0; i < _hobi.length; i++) {
        if (_hobi[i].checked) {
            _hasil += _hobi[i].value + ", ";
        }
    }

    console.log(_hasil);

    this.setState({
      hobi: _hasil
    })
  }

  showTable(e) {
    e.preventDefault();
    // Set nilai checkbox
    
    // Menampilkan tabel
    document.getElementById("tabel").style.display = "block";
  }

  render() {
    return(
      <div>
        <FormInputData
          changeValue = {this.changeValue}
          checkboxValue = {this.checkboxValue}
          eventSubmit = {this.showTable}
        />
        <TableBiodata
          dataNama = {this.state.nama}
          dataTanggal = {this.state.tanggal}
          dataGender = {this.state.radio}
          dataHobi = {this.state.hobi}
          dataAgama = {this.state.agama}
          dataPesan = {this.state.pesan}
        />
      </div>
    )
  }
}