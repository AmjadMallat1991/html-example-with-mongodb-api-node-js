function getTutorial(){
    fetch('http://localhost:8080/api/all')
      .then(response => response.json())
      .then(json => {
        let ddl_tutorials=document.getElementById('ddl_tutorials');
        json.forEach(t => {
            let _opt=document.createElement('option');
            _opt.value=t._id;
            _opt.innerHTML=t.title;
            ddl_tutorials.appendChild(_opt);
        });
      })
}

getTutorial();