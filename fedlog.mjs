console.log(`fedlog.mjs loaded at /n${Date()}`);

import plotly from 'https://cdn.jsdelivr.net/npm/plotly@1.0.6/+esm'
import {epibox as epibox} from 'https://episphere.github.io/epibox/export.js'
//let epibox = (await import('https://episphere.github.io/epibox/export.js')).epibox
//import fminsearch from 'https://jonasalmeida.github.io/fminsearch/fminsearch.mjs'
//import fminsearch from './fminsearch/fminsearch.mjs'
//function fminsearch = import('http:8000/fminsearch/fminsearch.mjs')

const loaded = Date()

export{
    loaded,
    epibox,
    plotly,
    //fminsearch
}