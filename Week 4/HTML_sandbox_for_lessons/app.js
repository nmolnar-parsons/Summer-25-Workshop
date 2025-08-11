/* global d3 */

const getData = async () => {
    const data = await d3.json('https://data.cityofnewyork.us/resource/tg4x-b46p.json');

    const rolledup_data = d3.rollup(
        data,
        v => v.length,
        d => d['eventtype'],
    )

    rolledup_data.set("debug value", 350);

    return rolledup_data;
}

const main = async () => {
    const data = await getData();
    const chart = d3.select('#chart');

    const height = 300;
    const width = 500;

    const xScale = d3
        .scaleBand()
        .domain(data.keys()) // set the domain to the keys of the data
        .range([0, width]) // set the range of the scale to the width of
        .paddingInner(0.1) // padding between bars
        .paddingOuter(0.1); // padding on the edges of the chart

    const yScale = d3
        .scaleLinear() //mapping number value to another number value
        .domain([0, d3.max(data.values())])
        .range([0,height]);

    const fillScale = d3
        .scaleLinear()
        .domain([0, d3.max(data.values())])
        .range(['#001affff', '#93b8f0ff']);

    const colorScale = d3
        .scaleOrdinal()
        .domain(data.keys())
        .range(d3.schemeTableau10);

    const svg = chart.append('svg') // create SVG canvas
        .attr('viewBox', [0,0, width, height]) // set the viewBox to control the size of the SVG
        .attr('width', width)
        .attr('height', height)
        .style('border', '1px solid black'); 
    

    const bars = svg
        .selectAll('rect').data(data).join('rect')
        .attr("width", () => xScale.bandwidth())
        .attr("height", (d) => yScale(d[1])) // d[1] is the value of the data
        .attr('x', (d) => xScale(d[0]))
        .attr("y", (d) => height - yScale(d[1])) 
        .attr('fill', (d) => colorScale(d[0])) // d[1] is the value of the data
        // use ordinal scale because our values are categorical
        // band scale
            // gives location for each category
            // gives padding
        // linear scale for height


    console.log(data);

}

main()

