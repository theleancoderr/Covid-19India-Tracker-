let confirmed = document.getElementById('confirmed-cases');
let active = document.getElementById('active-cases');
let recovered = document.getElementById('recovered-cases');
let deaths = document.getElementById('deaths-cases');
let tested = document.getElementById('tested-cases');
let tabulardata = document.getElementById('tabular-data');

const getData = async () => {
    fetch("https://api.covid19india.org/data.json")
      .then(res => res.json())
      .then(data => {
        confirmed.innerText = data.statewise[0].confirmed;
        active.innerText = data.statewise[0].active;
        recovered.innerText = data.statewise[0].recovered;
        deaths.innerText = data.statewise[0].deaths;
        tested.innerText = data.tested[data.tested.length-1].totalsamplestested;

        data.statewise.forEach(tableData => {
          if (tableData.state === "Total") {
            return;
          } else {
            tabulardata.innerHTML += `
                <tr>
                <th>${tableData.state}</th>
                <td>${tableData.confirmed}</td>
                <td>${tableData.active}</td>
                <td>${tableData.recovered}</td>
                <td>${tableData.deaths}</td>
                </tr>`;
          }
        });
      });
  };
getData().then(() => null);
  
