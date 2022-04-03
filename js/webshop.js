class slave{
    constructor(name, price, amount){
        this.name = name;
        this.price = price;
        this.amount = amount;
    }
}

const slave1 = new slave("Lance", 25000, 10);
const slave2 = new slave("Mercedes", 10000, 10);
const slave3 = new slave("Audi", 100000, 1);
const slave4 = new slave("Dodge", 10000, 10);

var slavelist = [slave1, slave2, slave3, slave4];
var idlist = [];
var namelist = [];
var amountlist = [];
var boollist = [];
var totalitems = 0;

for(let x = 0; x < slavelist.length; x++){
    idlist.push("slave" + x);
    namelist.push("slavename" + x);
    amountlist.push("slaveamount" + x);
    boollist.push(false);
    console.log(namelist[x]);
}

for(let x = 0; x < slavelist.length; x++){
    document.getElementById(namelist[x]).innerText = slavelist[x].name;
    document.getElementById(amountlist[x]).innerText = "Amount : " +slavelist[x].amount;
    document.getElementById(idlist[x]).innerText = "Price is € " + slavelist[x].price;
}





function buyItem(number){
    var id = slavelist[number];
    if(id.amount == 1){
    id.amount--;
    document.getElementById(amountlist[number]).innerHTML = "OUT OF STOCK";
    boollist[number] = true;
    totalitems += id.price;
    document.getElementById("btn" + number).style.display = "none";
    }
    else if(!boollist[number]){
        id.amount--;
        document.getElementById(amountlist[number]).innerHTML = "Amount : " +slavelist[number].amount;
        totalitems += id.price;
    }
    console.log(totalitems);
}

function checkOut(){
    document.getElementById("totalprice").innerHTML = "€" + totalitems + ",00 " + "|" + "+ 21% BTW = " + totalitems / 100 * 21 + " | " + "total = € " + totalitems / 100 * 121 + ",00";
    document.getElementById("check").style.display = "block";
    for(let x = 0; x < slavelist.length; x++){
        document.getElementById("btn" + x).style.display = "none";
    }

}

