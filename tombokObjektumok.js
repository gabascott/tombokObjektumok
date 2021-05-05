$(function () {

//    var ember1 = {
//        nev: "Béla",
//        kor: 12,
//        iskola: "általános iskola"
//    };

    var tomb = [
        {
            nev: "Béla",
            kor: 12,
            iskola: "általános iskola"
        },
        {
            nev: "Jenő",
            kor: 23,
            iskola: "OKJ"
        },
        {
            nev: "Rozália",
            kor: 34,
            iskola: "hivatásos anya"
        }
    ];
    $("article").append("<table>");
    $("article table").append("<tr><th>Név</th><th>Kor</th><th>Iskola</th></tr>");
    for (var i = 0; i < tomb.length; i++) {
//        $("article table").append("<tr><td>" + tomb[i]["nev"] + "</td><td>" + tomb[i]["kor"] + "</td><td>" + tomb[i]["iskola"] + "</td></tr>");
        $("article table").append("<tr>");
        for (var item in tomb[i]) {
            $("article table tr").eq(i + 1).append("<td>" + tomb[i][item] + "</td>");
        }
    }
    tomb.sort();


});

/*              <table>
 <tr>
 <th>Név</th>
 </tr>
 <tr>
 <td>Név</td>
 </tr>
 <tr>
 <td>Név</td>
 </tr>
 <tr>
 <td>Név</td>
 </tr>
 </table>*/
function tombMetodusok() {
    $("article").append("Hello" + "<br>");
    var tomb = ["Béla", "Jenő", "Rozália"];
//    var tomb2 = new Array();
    $("article").append(tomb.join(" / ") + "<br>");
    tomb.push("Gizi");
    $("article").append(tomb.join(" / ") + "<br>");
    tomb.pop();
    $("article").append(tomb.join(" / ") + "<br>");
    tomb.shift();
    $("article").append(tomb.join(" / ") + "<br>");
    tomb.push("Gizi", "Géza");
    $("article").append(tomb.join(" / ") + "<br>");
//    var reszTomb = tomb.slice(1, 2);
//    $("article").append(reszTomb.join(" / ") + "<br>");
//    tomb.splice(1, 2);
//    $("article").append(tomb.join(" / ") + "<br>");
    //Tömbok rendezése
    tomb.sort();
    $("article").append(tomb.join(" / ") + "<br>");
    tomb.reverse();
    $("article").append(tomb.join(" / ") + "<br>");
    var szamTomb = [12, 3, -5, 345, 6];
    $("article").append(szamTomb.join(" / ") + "<br>");
    szamTomb.sort();
    $("article").append(szamTomb.join(" / ") + "<br>");
    szamTomb.sort(
            function (a, b) {
                console.log("a: " + a + " b: " + b);
                return a - b;
            }
    );
    $("article").append(szamTomb.join(" / ") + "<br>");
    szamTomb.sort(
            function (a, b) {
                console.log(Math.random() - 0.5);
                return Math.random() - 0.5;
            }
    );
    $("article").append(szamTomb.join(" / ") + "<br>");
}