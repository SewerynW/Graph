import * as am4core from '@amcharts/amcharts4/core'
import * as am4charts from '@amcharts/amcharts4/charts'
import am4themesAnimated from '@amcharts/amcharts4/themes/animated'
import material from '@amcharts/amcharts4/themes/material'
// import Vue from 'vue'

export default ({ app }, inject) => {
  inject('am4core', () => {
    return {
      am4core,
      am4charts,
      am4themesAnimated,
      material
    }
  })
}
