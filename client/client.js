fetch("http://127.0.0.1:5000").then(res => res.json()).then(data => showdata(data) )
fetch("http://127.0.0.1:5000/hello").then(res => res.json()).then(data => showhello(data) )

function showdata(data){

    const dataContainer = document.getElementById('data-container');
    console.log(data)

    dataContainer.innerHTML = `
    <h1>Name: ${data.data.username}</h1>
    <p>Location: ${data.data.password}</p>
    `;
}

function showhello(data){
    const dataHello = document.getElementById('data-hello');
    console.log(data)
    dataHello.innerHTML = `
    <h1>${data.msg}</h1>
    `;

}

    
