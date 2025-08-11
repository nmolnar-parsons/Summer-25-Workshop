var dataArray = [5, 11, 18];

var svg = d3.select("body").append("svg")
    .attr("width", "100%")
    .attr("height", "100%")

svg.selectAll("rect").data(dataArray)
    .enter().append("rect")
    .attr("fill", "lightblue")
    .attr("width","50px")
    .attr("height", function(d,i) {
        return d*15; 
    })
    .attr("x",function(d, i) {
        return i * 60 + "px";
    })
    .attr("y",function(d, i) {
        return 300 - (d * 15) + "px";
    })
