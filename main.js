
var menuList = [
    "Pepperoni Pizza",
    "Meat Pizza",
    "Margherita Pizza",
    "BBQ Chicken Pizza",
    "Hawaiian Pizza",
    "Chicago Pizza"
];
function addItem() {
    var htmlData;
    var item = document.getElementById("newItem").value;
    menuList.push(item);
    menuList.sort();
        
    for (var i = 0; i < menuList.length; i++) {
        htmlData = htmlData + "<br><div class='con'><img src='pizza.png'><p>" + menuList[i] + "</p></div>";
        console.log(menuList[i]);
            
        document.getElementById("m").innerHTML = htmlData;
        console.log(htmlData);
    }
}
function getMenu() {
    var htmlData;
    htmlData = "<ol class='menu'>";
}