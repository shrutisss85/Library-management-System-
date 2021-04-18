var options = {
    series: [
        {
            name: "Book Issue",
            data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
        },
        {
            name: "Book Return",
            data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
        },
        {
            name: "Online Book Readers",
            data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
        },
    ],
    chart: {
        type: "bar",
        height: 250,
        sparkline: {
            enabled: true,
        },
    },
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: 55,
            endingShape: "rounded",
        },
    },
    dataLabels: {
        enabled: false,
    },
    stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
    },
    xaxis: {
        categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
    },
    yaxis: {
        title: {
            text: "$(thousands)",
        },
    },
    fill: {
        opacity: 1,
    },
    tooltip: {
        y: {
            formatter: function(val) {
                return  val;
            },
        },
    },
};

var chart = new ApexCharts(document.querySelector("#apex1"), options);
chart.render();
