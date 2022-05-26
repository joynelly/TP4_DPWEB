import React from "react";

export class FormInputData extends React.Component {
    render() {
        return(
            <div>
                <h2>Biodata</h2>
                <form onSubmit={this.props.eventSubmit}>
                    <div class="form-section">
                        <label>Nama Lengkap</label>
                        <input type="text" placeholder="Masukkan Nama" id="nama" name="nama" onChange={this.props.changeValue}/>
                    </div>

                    <div class="form-section">
                        <label>Tanggal Lahir</label>
                        <input type="date" name="tanggal" id="tanggal" onChange={this.props.changeValue}/>
                    </div>

                    <div class="form-section">
                        <label>Jenis Kelamin</label><br/>
                        <div class="rad-opt">
                            <input type="radio" name="radio" id="radio1" value="Laki-Laki" onChange={this.props.changeValue}/>
                            <label class="radio" for="radio1">Laki-Laki</label>
                            <input type="radio" name="radio" id="radio2" value="Perempuan" onChange={this.props.changeValue}/>
                            <label class="radio" for="radio2">Perempuan</label>
                            <input type="radio" name="radio" id="radio3" value="Others" onChange={this.props.changeValue}/>
                            <label class="radio" for="radio3">Others</label><br/>
                        </div>
                    </div>

                    <div class="form-section">
                        <label>Hobi</label> <br/>
                        <div class="cekbox-opt">
                            <input type="checkbox" name="hobi" id="cb1" value="Ngoding" onChange={this.props.checkboxValue}/>
                            <label for="cb1">Ngoding</label>
                        </div>
                        <div class="cekbox-opt">
                            <input type="checkbox" name="hobi" id="cb2" value="Rebahan" onChange={this.props.checkboxValue}/>
                            <label for="cb2">Rebahan</label>
                        </div>
                        <div class="cekbox-opt">
                            <input type="checkbox" name="hobi" id="cb3" value="Melamun" onChange={this.props.checkboxValue}/>
                            <label for="cb3">Melamun</label>
                        </div>
                        <div class="cekbox-opt">
                            <input type="checkbox" name="hobi" id="cb4" value="Baca Buku" onChange={this.props.checkboxValue}/>
                            <label for="cb4">Baca Buku</label>
                        </div>
                        <div class="cekbox-opt">
                            <input type="checkbox" name="hobi" id="cb5" value="Nonton YouTube" onChange={this.props.checkboxValue}/>
                            <label for="cb5">Nonton Youtube</label>
                        </div>
                        <div class="cekbox-opt">
                            <input type="checkbox" name="hobi" id="cb6" value="Mendengarkan Lagu" onChange={this.props.checkboxValue}/>
                            <label for="cb6">Dengerin Lagu</label>
                        </div>
                        <div class="cekbox-opt">
                            <input type="checkbox" name="hobi" id="cb7" value="Lainnya" onChange={this.props.checkboxValue}/>
                            <label for="cb7">Other</label>
                        </div>
                    </div>

                    <div class="form-section">
                        <label>Agama</label>
                        <select class="form-select" aria-label="Default select example" id="select1" name="agama" onChange={this.props.changeValue}>
                            <option value="-">Select one option</option>
                            <option value="Islam">Islam</option>
                            <option value="Kristen Protestan">Protestan</option>
                            <option value="Kristen Katholik">Katolik</option>
                            <option value="Khonghucu">Khonghucu</option>
                            <option value="Buddha">Buddha</option>
                            <option value="Hindu">Hindu</option>
                            <option value="Others">Others</option>
                        </select>
                    </div>

                    <div class="form-section">
                        <label>Pesan</label>
                        <textarea name="pesan" id="pesan" cols="30" rows="10" placeholder="Tuliskan Pesan..." onChange={this.props.changeValue}></textarea>
                    </div>

                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}
