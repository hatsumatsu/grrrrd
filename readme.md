# grrrrd
## Fluid CSS grid system

Grrrrd is a partly fluid CSS grid system based on [LESS](http://lesscss.org/). 

Between `@breakpoint-fluid-lower` (default: 48em) and `@breakpoint-fluid-upper` (default: 64em) you get a fluid 12-column grid with a maximum total width of `@breakpoint-fluid-upper`.

`@gutter` (% of container width, default 1.66%) defines the margin between grid elements.

On screen widths smaller than `@breakpoint-fluid-lower` the grid linearizes and all items become full-width, except you define the smaller grid (see below).

### Widths
`grid-container` – centered container element.

`grid-1` ... `grid-12` – element widths based on the grid.

### Indentation
`indent-1` ... `indent-11` – indentation based on the grid.

### Layout 
`grid-start` – start new row.

### Visibility
`hide-smaller` – hide elements on screen widths smaller than `@breakpoint-fluid-lower`.

`hide-larger` – hide elements on screen widths greater than `@breakpoint-fluid-lower`. 

### Smaller grid
By default all grid items become full-widths on screen widths smaller than `@breakpoint-fluid-lower`, except you use the following classes that enable a smaller 4-column grid:

`grid-smaller-1` ... `grid-smaller-4` – element widths.

`indent-smaller-1` ... `indent-smaller-3` – indentation. 

`grid-smaller-start` – start new row.
### Demo 
[Default configuration](http://rawgithub.com/hatsumatsu/grrrrd/master/demo/index.html)

