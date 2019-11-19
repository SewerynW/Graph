<template>
  <div ref="chartdiv" class="hello"></div>
</template>

<script>
export default {
  mounted() {
    const { am4core, am4charts, am4themesAnimated, material } = this.$am4core()

    am4core.useTheme(am4themesAnimated)
    am4core.useTheme(material)

    const chart = am4core.create(this.$refs.chartdiv, am4charts.XYChart)

    chart.paddingRight = 20
    chart.data = this.$store.getters.convertInfo
    console.log(this.$store.getters.convertInfo)

    const dateAxis = chart.xAxes.push(new am4charts.DateAxis())
    dateAxis.renderer.grid.template.location = 0

    const valueAxis = chart.yAxes.push(new am4charts.ValueAxis())
    valueAxis.tooltip.disabled = true
    valueAxis.renderer.minWidth = 35

    const series = chart.series.push(new am4charts.LineSeries())
    series.dataFields.dateX = 'date'
    series.dataFields.valueY = 'value'
    series.strokeWidth = 2
    series.tooltip.background.fillOpacity = 0.5
    series.tooltip.label.padding(12, 12, 12, 12)
    series.tooltipText = ``
    series.adapter.add('tooltipText', (text, target) => {
      const data = target.tooltipDataItem.dataContext
      text = ` 
      [bold]Rate: {valueY.value}
      ----------------
      [bold]Variation: ${data.variation}`
      return text
    })

    chart.cursor = new am4charts.XYCursor()
    // chart.cursor.xAxis = dateAxis
    // chart.cursor.snapToSeries = series

    const scrollbarX = new am4charts.XYChartScrollbar()
    scrollbarX.series.push(series)
    chart.scrollbarX = scrollbarX

    // Set up cursor's events to update the label
    // chart.cursor.events.on('cursorpositionchanged', (ev) => {
    //   const dataItem = dateAxis.getSeriesDataItem(
    //     series,
    //     dateAxis.toAxisPosition(chart.cursor.xPosition),
    //     true
    //   )
    // const prevDataItem = chart.data[dataItem.index - 1]

    // dataItem.nowy = prevDataItem.value
    // series.dataFields.now = prevDataItem.value

    // console.log('najechany item', dataItem)
    // console.log('poprzedni item', prevDataItem)
    // console.log('poprzedni item', this.currseDifference)
    // })

    this.chart = chart
  },

  beforeDestroy() {
    if (this.chart) {
      this.chart.dispose()
    }
  }
}
</script>
<style lang="scss" scoped>
.hello {
  width: 100%;
  height: 500px;
  padding: 1em;
}
</style>
