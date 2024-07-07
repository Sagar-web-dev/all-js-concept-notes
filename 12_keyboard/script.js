//project 6

const insert = document.getElementById("insert");

window.addEventListener('keydown', (e) =>{
    insert.innerHTML = `
    <table>
  <tr>
    <th>key</th>
    <th>key.code</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key === '' ? 'Space' : e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
 
</table>
    `
});


// ${e.key === '' ? 'Space' : e.key} we write for check the empty space 
// how it is simple when you are comfortable with the thing but u have to learn how the thing work   project completed