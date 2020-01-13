import React from 'react';
import ReactFileReader from 'react-file-reader';
import Axios from "axios";
import logo from './logo.svg';
import './App.css';

import Example from "./Example";

export  default class App extends React.Component {

    state = {
        file: []
    }
    populateSate =(result) =>{
        this.setState({file: result});
    }

    handleFiles = files => {
        var reader = new FileReader();
        let result = [];

        reader.onload = function(e) {
            // Use reader.result
            var csv = reader.result;
            var lines = csv.split("\n");
            result=[];

            for(var i=1;i<lines.length;i++){
                result.push(lines[i]);
            }

            // result= JSON.stringify(result); //JSON


        }
        reader.onloadend=(e) => {
            this.populateSate(result);
            console.log("loaded:" + result);
        }
        reader.readAsText(files[0]);
    }

    handleSubmit = (event)=> {
        event.preventDefault();

        Axios.get(`api/v1/retrieve`)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
            .catch(error=>
            {
                console.log(error.response.data);
            });

        // Axios.post(`/api/v1/update`, { user })
        //     .then(res => {
        //         console.log(res);
        //         console.log(res.data);
        //     })
        //     .catch(error=>
        //     {
        //         console.log(error.response.data);
        //     });
    }

    arrayAsString=(ary) =>
    {
       let output = "";
        ary.forEach((number) => {
                console.log(number);
                output += '<p>'+number+'</p>';

            }
        );
        return output;
    }

   render(){
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

          <div>
              <ReactFileReader handleFiles={this.handleFiles} fileTypes={'.*'}>
                  <button className='btn'>Upload</button>
              </ReactFileReader>
              <input type={"Button"} name={"Update"}  value={"Test restful get"} onClick={this.handleSubmit} onChange={this.handleSubmit}/>
          </div>

          <div>
              {this.arrayAsString(this.state.file)}

          </div>
      </header>


        <form>
            <Example/>


        </form>

    </div>
  )
}}

