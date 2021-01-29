menu_list_array = ["Chicken Tandoori Pizza",
"Veg Supreme Pizza",
"Panner Tikka Pizza",
"Deluxe Veggie Pizza",
"Veg Extravaganza Pizza"];
function getmenu(){
    var htmldata;
    htmldata="<ol class='menulist'>"
    menu_list_array.sort();
    for(var i=0;i<menu_list_array.legth;i++){
        htmldata=htmldata+ '<li>' + menu_list_array[i] +'</li>'
    }
     htmldata=htmldata+"</ol>"
     document.getElementById("disply_menu").innerHTML= htmldata;
     
}
function additem(){
    var htmldata;
    var item-document.getElementById("add_item").value;
    menu_list_array.push(item);
    menu_list_array.sort();
    htmldata="selection 'class=cards'>"
    for(var i=0,i<menu_list_array.legth;i++){
        htmldata=htmldata+'<div class="card">'+'<img src="pizzaImg.png"/>' + menu_list_array + '</div>'
    }
    htmldata=htmldata+"</selection>"
    document.getElementById("display_addmenu").innerHTML = htmldata;
}