$( ".btn" ).click(function() {
    alert( "" );
  });
  $(function(){
    var input = $('.input');
    var button = $('.button');
    var textarea = $('.textarea');

    button.on('click', function(){
        var inputVal = input.val()+'\n';
        textarea.val(textarea.val() + inputVal);
    });
});

var number = 0;

document.getElementById("submit").addEventListener("click", function () {
  number++;
  var input1 = document.querySelector("#input1");
  var result = input1.value;
  var checkbox = document.createElement("input");
  checkbox.className = "custom-control-input";
  checkbox.setAttribute("type", "checkbox");

  var checkboxdiv = document.createElement("div");
  checkboxdiv.className = "col-xs-1 custom-control custom-checkbox";
  checkboxdiv.appendChild(checkbox);

  if (result == "") {
    alert("入力してくださいばーし");
  } else if (result.length > 21) {
    alert("20文字以下で入力してくださいばーし");

  } else {
    var list = document.createElement("p");
    list.className = "list";
    list.innerHTML = result;

    var listdiv = document.createElement("div");
    listdiv.className = "col-xs-8";
    listdiv.appendChild(list);

    var deleteButton = document.createElement("button");
    var deleteid = "delete" + number;
    deleteButton.className = "delete";
    deleteButton.setAttribute("id", deleteid);
    deleteButton.setAttribute("value", number);
    deleteButton.innerHTML = "削除";

    var deletediv = document.createElement("div");
    deletediv.className = "col-xs-3";
    deletediv.appendChild(deleteButton);

    var div = document.createElement("div");
    var todolist = "todolist" + number;
    div.className = "row";
    div.setAttribute("id", todolist);
    div.setAttribute("value", number);
    div.appendChild(checkboxdiv);
    div.appendChild(listdiv);
    div.appendChild(deletediv);

    document.getElementById("todolist_unit").appendChild(div);

    var line = document.createElement("hr");
    var listline = "listline" + number;
    line.setAttribute("id", listline);
    document.getElementById("todolist_unit").appendChild(line);

    var reset = document.getElementById("input1");
    reset.value = "";

    document.getElementById(deleteid).addEventListener("click", function () {
      document.getElementById(todolist).remove(todolist);
      document.getElementById(listline).remove(listline);
      
    });
    
  }
});

$(function() {
	// テーブルの行の並び替え
	$('todolist_unit').sortable({
		opacity: 0.5,
		placeholder: "ph1",
		update: function(event,ui){
			//現在の並び順を取得
			$('#t4').text($('#t3').sortable("toArray"));
		}
	});
});