function highlight(table) {

 for (let i = 0; i < table.rows.length; i++) {

   let tr = table.rows[i];
   let status = tr.cells[3].getAttribute('data-available');
   let gender = tr.cells[2].textContent;
   let age = tr.cells[1].textContent;
  


    if (status == "true") {
    tr.classList.add('available');
    } else if (status == "false") {
    tr.classList.add('unavailable');
    } else if (tr.cells[3].hasAttribute('data-available') == "") {
    tr.setAttribute('hidden', "");
    }
    
    if (gender === "m") {
    tr.classList.add('male');
    } else if (gender === "f") {
    tr.classList.add('female');
    }
     
    if (age < 18 ) {
    tr.setAttribute('style', 'text-decoration: line-through');
    }

 }
}
