import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(){
    super();
    this.state={nama:'',usia:'',domisili:'',pegawai:[]}
  }
  klik(){
    this.setState({
      nama: this.refs.nama.value,
      usia: this.refs.usia.value,
      domisili:this.refs.domisili.value
    });
  }
  klik2(){
    var x = this.state.nama;
    var y = this.state.usia;
    var z = this.state.domisili;
    axios.post('http://localhost:2707/',{
      nama : x,
      usia : y,
      domisili : z
    })
  }
  klik3(){
    axios.get('http://localhost:2707/')
    .then((ambilData)=>{
      console.log(ambilData.data);
      this.setState({
        pegawai: ambilData.data,
      })
    })
  }

  render() {
    const data = this.state.pegawai.map((item, index)=>{
      var nama = [item.nama]
      var usia = [item.usia]
      var domisili = [item.domisili]
      return <tr key={index}><td>{nama}</td><td>{usia}</td><td>{domisili}</td></tr>;
    });
    return (
      <div>
      <center>
      <h1>DATA PEGAWAI</h1>
      <div className="row">
              <input className="form-control" ref="nama" type="text" placeholder="Masukkan Nama" onInput={()=>{this.klik();}}/><br/>
              <input className="form-control" ref="usia" type="number" placeholder="Masukkan Usia" onInput={()=>{this.klik();}}/><br/>
              <input className="form-control" ref="domisili" type="text" placeholder="Masukkan Domisili" onInput={()=>{this.klik();}}/><br/>
              <button type="submit" className="btn btn-primary btn-block" onClick={()=>{this.klik2();}}>POST</button>&nbsp;&nbsp;
              <button type="submit" className="btn btn-primary btn-block" onClick={()=>{this.klik3();}}>GET</button>
            </div>
      <br/>
      <tr className="head">
            <td>Nama</td>
            <td>Usia</td>
            <td>Domisili</td>
          </tr>
      {data}
    
      </center>
      </div>
    );
  }
}

export default App;

