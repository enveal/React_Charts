import React, { useState, useEffect } from "react";
import { Pie, Bar ,Line} from "react-chartjs-2";
import axios from "axios";

const App = () => {
  const [chartData, setChartData] = useState({});
 // const [employeeSalary, setEmployeeSalary] = useState([]);
  //const [employeeAge, setEmployeeAge] = useState([]);

  const chart =()=>{
    let rawd=[];
    let data={};
    axios
    .get("https://coronavirus-19-api.herokuapp.com/countries/INDIA")
    .then(res =>{
        console.log(res.data);
        data=res.data;
        console.log(data);
        rawd=[res.data.active,res.data.recovered,res.data.deaths]
        setChartData({
            labels: ['Active Cases','Recoverd cases','Total Deaths'],
            datasets:[
                {
                  label:'People',
                  data:rawd,
                  backgroundColor:[
                    'rgba(255, 51, 0, 0.6)',
                    'rgba(0, 153, 51, 0.6)',
                    'rgba(204, 0, 0,0.6)',
                  ]
                }
              ]
        });
    })
    .catch(err =>{
        console.log(err);
    });
    console.log(rawd)
}
useEffect(()=>{
    chart();
},[]);
return(
    <div className="App">
     <h1>Corona Cases In India</h1>
        <div>
        <Pie
          data={chartData}
          options={{
            title:{
              //display:this.props.displayTitle,
              text:'CORONA CASES IN India',
              fontSize:25
            },
            legend:{
              display:true,
              position:"right"
            }
          }}
        />  
        <br/>
        <Bar
          data={chartData}
          options={{
            title:{
              //display:this.props.displayTitle,
              text:'CORONA CASES IN India',
              fontSize:25
            },
            legend:{
              display:true,
              position:"right"
            }
          }}
        />  
        <br />
        <Line
          data={chartData}
          options={{
            title:{
              //display:this.props.displayTitle,
              text:'CORONA CASES IN India',
              fontSize:25
            },
            legend:{
              display:true,
              position:"right"
            }
          }}
        />  
        </div>   
    </div>
)
        }
export default App;