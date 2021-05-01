
function newItem() {

//javascript
//1. Adding a new item to the list of items:
   let li = $('<li></li>');
   let inputValue = $('#input').val();
   li.append(inputValue);

   if (inputValue === '') {
     alert("You must write something!");
   } else {
     $('#list').append(li);
     $('#input').val('');
   }

// Adding a new item to the list by hitting Enter:
  $('#input').keypress(function(e) {
    if (e.which === 13) {
      e.preventDefault();
      $('#button').click();
      $('#input').val('');
    }
  });

 //2. Crossing out an item from the list of items:
 	li.on('click', function crossOut() {
    li.toggleClass('strike');
  });

 //3(i). Adding the delete button "X":
   let crossOutButton = $('<crossOutButton></crossOutButton>');
   	crossOutButton.append(document.createTextNode('X'));
   	li.append(crossOutButton);

 	  crossOutButton.on('click', deleteListItem);
 //3(ii). Adding CLASS DELETE (DISPLAY: NONE) from the css:
   function deleteListItem() {
 		li.addClass('delete')
 	}
 // 4. Reordering the items:
   $('#list').sortable();

}
