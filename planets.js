//A1 
var Names= ["red","orange","yellow"]

var drawPlanets=function(data){
   var pDiv= d3.select("#A1")
   .append("p")
   .text(Names)
}

//A2 make spans not paragraphs
var drawPlanetsA2=function(){
    var twoDiv= d3.select("#A2")
    twoDiv.selectAll("span")
   .data(Names)
    .enter()
    .append("span")
    .text(function(d){
        return d
    })
     }
drawPlanetsA2()

//B1
var planetPromise = d3.json("planets.json");

planetPromise.then(
function(data)
{
    drawPlanetsB3(data);
    drawPlanetsB4(data);
    drawPlanetsC1(data);
    drawPlanetsC2(data);
    drawPlanetsC3(data);
    console.log("works",data);
},
function(err)
{
 console.log("broken",err)
//d3.select("h1").text("Something went wrong")
})

//B3
var drawPlanetsB3 = function(data)
{
    var pImage=d3.select("#B3")
    pImage.selectAll("img")
    .data(data)
    .enter()
    .append("img")
    .attr("src", function(planet){
        return planet.img
    })
}

//B4
var drawPlanetsB4 = function(data)
{
    var pList=d3.select("#B4").append("ol")
    var items= pList.selectAll("li")
        .data(data)
        .enter()
        .append("li")
    items.append("span")
        .text(function(d){
        return d.name
    })
}

//C1 it worked
var drawPlanetsC1 = function(data)
{
    var pTable=d3.select("#C1").append("table");
    
    var pRows= pTable.selectAll("tr")
    .data(data)
    .enter()
    .append("tr");
}

//C2
var drawPlanetsC2 = function(data)
{
    var pTableTwo=d3.select("#C2").append("table");
    
    var pRowsTwo= pTableTwo.selectAll("tr")
    .data(data)
    .enter()
    .append("tr");
    
    pRowsTwo.append("td")
    .text(function(d)
          {
        return d.name
    })
    }

//C3
//var tHeaders = ["Name", "Image", "Distance", "Radius", "Density", "Moons"]

var drawPlanetsC3 = function(data)
{
    var pTableAgain=d3.select("#C3").append("table");
    
    var pRowsAgain= pTableAgain.selectAll("tr")
    .data(data)
    .enter()
    .append("tr");
    
    pRowsAgain.append("td")
    .text(function(d)
          {
        return d.name
    })
    
    pRowsAgain.append("td")
    .append("img")
    .attr("src", function(d)
         {
        return d.img
    })
    
    pRowsAgain.append("td")
    .text(function(d)
         {
        return d.distance
    })
    
    pRowsAgain.append("td")
    .text(function(d)
         {
        return d.radius
    })
    
    pRowsAgain.append("td")
    .text(function(d)
         {
        return d.moons
    })
    
    /* var pHead = pTableAgain.selectAll("thead")
    .enter()
    .append("thead")
    
    var pHeaderRow= pHead.selectAll("tr")
    .enter()
    .append("tr")
    
    pHeaderRow.append("th")
    .data(tHeaders)
    .enter()
    .append("th")
    //We were trying to make a heading row*/
    }