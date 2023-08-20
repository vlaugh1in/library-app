var books = (function(){
  let myLibrary = {
    id: 1, 
    title:"Harry Potter", 
    author: "JK Rowling", 
    pages: 200, 
    description: "The boy who lived...", 
    shelfNum: "1111", 
    genre: "Children's Lit/Fantasy", 
    read: false, 
    deleted: false 
  };

  //cache dom

  //table dom
  let $tbl =  $('#tableModule');
  let $tr = $tbl.find('tr');
  let $tbody = $tbl.find('tbody');
  let headerTemp = $tbl.find('#header-template').html();
  let listTemp = $tbl.find('#list-template').html();

  //modal dom
  let $mdl = $('#addBookModule');
  let $submitBtn = $mdl.find('#submitBookBtn');
  let errorTemp = $mdl.find('#error-template').html();

  //bind events
  //$submitBtn.on('click', addBook);
  //$tbody.delegate('td.del', 'click', deletePerson);

  _render();

  function _render() {
    let btnArray = [];
    let listArray = [];
    let obj = Object.values(myLibrary);
    
    $tr.html(Mustache.render(headerTemp, {header: Object.keys(myLibrary)}));
    for(let i=0; i< obj.length; i++){
      let objVal = obj[i];
      if (objVal === true || objVal === false){
        btnArray.push(objVal);
      } else {
        listArray.push(objVal);
      }
    }
    
    $tbody.html(Mustache.render(listTemp, {list: listArray}));
    $tbody.html(Mustache.render(listTemp, {listBtn: btnArray}));
         
  }


})();