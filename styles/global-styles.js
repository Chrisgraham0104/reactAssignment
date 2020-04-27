import { injectGlobal } from 'styled-components'

injectGlobal`
  ul {
    margin: 0;
    padding: 0;
  }
  
  .bootstrap-touchspin .input-group-btn-vertical {
  position: relative;
  white-space: nowrap;
  width: 1%;
  vertical-align: middle;
  display: table-cell;
}

.bootstrap-touchspin .input-group-btn-vertical>.btn {
  display: block;
  float: none;
  width: 100%;
  max-width: 100%;
  padding: 8px 10px;
  margin-left: -1p/*!
 * Bootstrap v4.3.1 (https://getbootstrap.com/)
 * Copyright 2011-2019 The Bootstrap Authors
 * Copyright 2011-2019 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */:root{--blue:#007bff;
  --indigo: #6610f2;
  --purple: #6f42c1;
  --pink: #e83e8c;
  --red: #dc3545;
  --orange: #fd7e14;
  --yellow: #ffc107;
  --green: #28a745;
  --teal: #20c997;
  --cyan: #17a2b/*!
 * Bootstrap v4.3.1 (https://getbootstrap.com/)
 * Copyright 2011-2019 The Bootstrap Authors
 * Copyright 2011-2019 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */:root{--blue:#007bff;
  --indigo: #6610f2;
  --purple: #6f42c1;
  --pink: #e83e8c;
  --red: #dc3545;
  --orange: #fd7e14;
  --yellow: #ffc107;
  --green: #28a745;
  --teal: #20c997;
  --cyan: #17a2b8;
  --white: #fff;
  --gray: #6c757d;
  --gray-dark: #343a40;
  --primary: #007bff;
  --secondary: #6c757d;
  --success: #28a745;
  --info: #17a2b8;
  --warning: #ffc107;
  --danger: #dc3545;
  --light: #f8f9fa;
  --dark: #343a40;
  --breakpoint-xs: 0;
  --breakpoint-sm: 576px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 992px;
  --breakpoint-xl: 1200px;
  --font-family-sans-serif: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
  --font-family-monospace: SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;
}

*,::after,::before {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
  line-height: 1.15;
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: transparent;
}

article,aside,figcaption,figure,footer,header,hgroup,main,nav,section {
  display: block;
}

body {
  margin: 0;
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  text-align: left;
  background-color: #fff;
}

[tabindex="-1"]:focus {
  outline: 0!important;
}

h1,h2,h3,h4,h5,h6 {
  margin-top: 0;
}

dl,ol,p,ul {
  margin-top: 0;
  margin-bottom: 1rem;
}

abbr[data-original-title],abbr[title] {
  text-decoration: underline;
  -webkit-text-decoration: underline dotted;
  text-decoration: underline dotted;
  cursor: help;
  border-bottom: 0;
  -webkit-text-decoration-skip-ink: none;
  text-decoration-skip-ink: none;
}

address {
  margin-bottom: 1rem;
  font-style: normal;
  line-height: inherit;
}

ol ol,ol ul,ul ol,ul ul {
  margin-bottom: 0;
}

dt {
  font-weight: 700;
}

dd {
  margin-bottom: .5rem;
  margin-left: 0;
}

blockquote,figure {
  margin: 0 0 1rem;
}

b,strong {
  font-weight: bolder;
}

sub,sup {
  position: relative;
  font-size: 75%;
  line-height: 0;
  vertical-align: baseline;
}

sub {
  bottom: -.25em;
}

sup {
  top: -.5em;
}

a {
  color: #007bff;
  text-decoration: none;
  background-color: transparent;
}

a:hover {
  color: #0056b3;
  text-decoration: underline;
}

a:not([href]):not([tabindex]),a:not([href]):not([tabindex]):focus,a:not([href]):not([tabindex]):hover {
  color: inherit;
  text-decoration: none;
}

a:not([href]):not([tabindex]):focus {
  outline: 0;
}

code,kbd,pre,samp {
  font-family: SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;
  font-size: 1em;
}

pre {
  margin-top: 0;
  margin-bottom: 1rem;
  overflow: auto;
}

img {
  vertical-align: middle;
  border-style: none;
}

svg {
  overflow: hidden;
  vertical-align: middle;
}

table {
  border-collapse: collapse;
}

caption {
  padding-top: .75rem;
  padding-bottom: .75rem;
  color: #6c757d;
  text-align: left;
  caption-side: bottom;
}

th {
  text-align: inherit;
}

label {
  display: inline-block;
  margin-bottom: .5rem;
}

button {
  border-radius: 0;
}

button:focus {
  outline: dotted 1px;
  outline: -webkit-focus-ring-color auto 5px;
}

button,input,optgroup,select,textarea {
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
}

button,input {
  overflow: visible;
}

button,select {
  text-transform: none;
}

select {
  word-wrap: normal;
}

[type=button],[type=reset],[type=submit],button {
  -webkit-appearance: button;
}

[type=button]:not(:disabled),[type=reset]:not(:disabled),[type=submit]:not(:disabled),button:not(:disabled) {
  cursor: pointer;
}

[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner {
  padding: 0;
  border-style: none;
}

input[type=checkbox],input[type=radio] {
  box-sizing: border-box;
  padding: 0;
}

input[type=date],input[type=datetime-local],input[type=month],input[type=time] {
  -webkit-appearance: listbox;
}

textarea {
  overflow: auto;
  resize: vertical;
}

fieldset {
  min-width: 0;
  padding: 0;
  margin: 0;
  border: 0;
}

legend {
  display: block;
  width: 100%;
  max-width: 100%;
  padding: 0;
  margin-bottom: .5rem;
  font-size: 1.5rem;
  line-height: inherit;
  color: inherit;
  white-space: normal;
}

progress {
  vertical-align: baseline;
}

[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button {
  height: auto;
}

[type=search] {
  outline-offset: -2px;
  -webkit-appearance: none;
}

[type=search]::-webkit-search-decoration {
  -webkit-appearance: none;
}

::-webkit-file-upload-button {
  font: inherit;
  -webkit-appearance: button;
}

output {
  display: inline-block;
}

summary {
  display: list-item;
  cursor: pointer;
}

template {
  display: none;
}

[hidden] {
  display: none!important;
}

.h1,.h2,.h3,.h4,.h5,.h6,h1,h2,h3,h4,h5,h6 {
  margin-bottom: .5rem;
  font-weight: 500;
  line-height: 1.2;
}

.h1,h1 {
  font-size: 2.5rem;
}

.h2,h2 {
  font-size: 2rem;
}

.h3,h3 {
  font-size: 1.75rem;
}

.h4,h4 {
  font-size: 1.5rem;
}

.h5,h5 {
  font-size: 1.25rem;
}

.h6,h6 {
  font-size: 1rem;
}

.lead {
  font-size: 1.25rem;
  font-weight: 300;
}

.display-1 {
  font-size: 6rem;
  font-weight: 300;
  line-height: 1.2;
}

.display-2 {
  font-size: 5.5rem;
  font-weight: 300;
  line-height: 1.2;
}

.display-3 {
  font-size: 4.5rem;
  font-weight: 300;
  line-height: 1.2;
}

.display-4 {
  font-size: 3.5rem;
  font-weight: 300;
  line-height: 1.2;
}

hr {
  box-sizing: content-box;
  height: 0;
  overflow: visible;
  margin-top: 1rem;
  margin-bottom: 1rem;
  border: 0;
  border-top: 1px solid rgba(0,0,0,.1);
}

.small,small {
  font-size: 80%;
  font-weight: 400;
}

.mark,mark {
  padding: .2em;
  background-color: #fcf8e3;
}

.list-inline,.list-unstyled {
  padding-left: 0;
  list-style: none;
}

.list-inline-item {
  display: inline-block;
}

.list-inline-item:not(:last-child) {
  margin-right: .5rem;
}

.initialism {
  font-size: 90%;
  text-transform: uppercase;
}

.blockquote {
  margin-bottom: 1rem;
  font-size: 1.25rem;
}

.blockquote-footer {
  display: block;
  font-size: 80%;
  color: #6c757d;
}

.blockquote-footer::before {

}

.img-fluid {
  max-width: 100%;
  height: auto;
}

.img-thumbnail {
  padding: .25rem;
  background-color: #fff;
  border: 1px solid #dee2e6;
  border-radius: .25rem;
  max-width: 100%;
  height: auto;
}

.figure {
  display: inline-block;
}

.figure-img {
  margin-bottom: .5rem;
  line-height: 1;
}

.figure-caption {
  font-size: 90%;
  color: #6c757d;
}

code {
  font-size: 87.5%;
  color: #e83e8c;
  word-break: break-word;
}

a>code {
  color: inherit;
}

kbd {
  padding: .2rem .4rem;
  font-size: 87.5%;
  color: #fff;
  background-color: #212529;
  border-radius: .2rem;
}

kbd kbd {
  padding: 0;
  font-size: 100%;
  font-weight: 700;
}

pre {
  display: block;
  font-size: 87.5%;
  color: #212529;
}

pre code {
  font-size: inherit;
  color: inherit;
  word-break: normal;
}

.pre-scrollable {
  max-height: 340px;
  overflow-y: scroll;
}

.container {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}

@media (min-width:576px) {
  .container {
    max-width: 540px;
  }
}

@media (min-width:768px) {
  .container {
    max-width: 720px;
  }
}

@media (min-width:992px) {
  .container {
    max-width: 960px;
  }
}

@media (min-width:1200px) {
  .container {
    max-width: 1140px;
  }
}

.container-fluid {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}

.row {
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
}

.no-gutters {
  margin-right: 0;
  margin-left: 0;
}

.no-gutters>.col,.no-gutters>[class*=col-] {
  padding-right: 0;
  padding-left: 0;
}

.col,.col-1,.col-10,.col-11,.col-12,.col-2,.col-3,.col-4,.col-5,.col-6,.col-7,.col-8,.col-9,.col-auto,.col-lg,.col-lg-1,.col-lg-10,.col-lg-11,.col-lg-12,.col-lg-2,.col-lg-3,.col-lg-4,.col-lg-5,.col-lg-6,.col-lg-7,.col-lg-8,.col-lg-9,.col-lg-auto,.col-md,.col-md-1,.col-md-10,.col-md-11,.col-md-12,.col-md-2,.col-md-3,.col-md-4,.col-md-5,.col-md-6,.col-md-7,.col-md-8,.col-md-9,.col-md-auto,.col-sm,.col-sm-1,.col-sm-10,.col-sm-11,.col-sm-12,.col-sm-2,.col-sm-3,.col-sm-4,.col-sm-5,.col-sm-6,.col-sm-7,.col-sm-8,.col-sm-9,.col-sm-auto,.col-xl,.col-xl-1,.col-xl-10,.col-xl-11,.col-xl-12,.col-xl-2,.col-xl-3,.col-xl-4,.col-xl-5,.col-xl-6,.col-xl-7,.col-xl-8,.col-xl-9,.col-xl-auto {
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
}

.col {
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;
}

.col-auto {
  flex: 0 0 auto;
  width: auto;
  max-width: 100%;
}

.col-1 {
  flex: 0 0 8.333333%;
  max-width: 8.333333%;
}

.col-2 {
  flex: 0 0 16.666667%;
  max-width: 16.666667%;
}

.col-3 {
  flex: 0 0 25%;
  max-width: 25%;
}

.col-4 {
  flex: 0 0 33.333333%;
  max-width: 33.333333%;
}

.col-5 {
  flex: 0 0 41.666667%;
  max-width: 41.666667%;
}

.col-6 {
  flex: 0 0 50%;
  max-width: 50%;
}

.col-7 {
  flex: 0 0 58.333333%;
  max-width: 58.333333%;
}

.col-8 {
  flex: 0 0 66.666667%;
  max-width: 66.666667%;
}

.col-9 {
  flex: 0 0 75%;
  max-width: 75%;
}

.col-10 {
  flex: 0 0 83.333333%;
  max-width: 83.333333%;
}

.col-11 {
  flex: 0 0 91.666667%;
  max-width: 91.666667%;
}

.col-12 {
  flex: 0 0 100%;
  max-width: 100%;
}

.order-first {
  order: -1;
}

.order-last {
  order: 13;
}

.order-0 {
  order: 0;
}

.order-1 {
  order: 1;
}

.order-2 {
  order: 2;
}

.order-3 {
  order: 3;
}

.order-4 {
  order: 4;
}

.order-5 {
  order: 5;
}

.order-6 {
  order: 6;
}

.order-7 {
  order: 7;
}

.order-8 {
  order: 8;
}

.order-9 {
  order: 9;
}

.order-10 {
  order: 10;
}

.order-11 {
  order: 11;
}

.order-12 {
  order: 12;
}

.offset-1 {
  margin-left: 8.333333%;
}

.offset-2 {
  margin-left: 16.666667%;
}

.offset-3 {
  margin-left: 25%;
}

.offset-4 {
  margin-left: 33.333333%;
}

.offset-5 {
  margin-left: 41.666667%;
}

.offset-6 {
  margin-left: 50%;
}

.offset-7 {
  margin-left: 58.333333%;
}

.offset-8 {
  margin-left: 66.666667%;
}

.offset-9 {
  margin-left: 75%;
}

.offset-10 {
  margin-left: 83.333333%;
}

.offset-11 {
  margin-left: 91.666667%;
}

@media (min-width:576px) {
  .col-sm {
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;
  }

  .col-sm-auto {
    flex: 0 0 auto;
    width: auto;
    max-width: 100%;
  }

  .col-sm-1 {
    flex: 0 0 8.333333%;
    max-width: 8.333333%;
  }

  .col-sm-2 {
    flex: 0 0 16.666667%;
    max-width: 16.666667%;
  }

  .col-sm-3 {
    flex: 0 0 25%;
    max-width: 25%;
  }

  .col-sm-4 {
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
  }

  .col-sm-5 {
    flex: 0 0 41.666667%;
    max-width: 41.666667%;
  }

  .col-sm-6 {
    flex: 0 0 50%;
    max-width: 50%;
  }

  .col-sm-7 {
    flex: 0 0 58.333333%;
    max-width: 58.333333%;
  }

  .col-sm-8 {
    flex: 0 0 66.666667%;
    max-width: 66.666667%;
  }

  .col-sm-9 {
    flex: 0 0 75%;
    max-width: 75%;
  }

  .col-sm-10 {
    flex: 0 0 83.333333%;
    max-width: 83.333333%;
  }

  .col-sm-11 {
    flex: 0 0 91.666667%;
    max-width: 91.666667%;
  }

  .col-sm-12 {
    flex: 0 0 100%;
    max-width: 100%;
  }

  .order-sm-first {
    order: -1;
  }

  .order-sm-last {
    order: 13;
  }

  .order-sm-0 {
    order: 0;
  }

  .order-sm-1 {
    order: 1;
  }

  .order-sm-2 {
    order: 2;
  }

  .order-sm-3 {
    order: 3;
  }

  .order-sm-4 {
    order: 4;
  }

  .order-sm-5 {
    order: 5;
  }

  .order-sm-6 {
    order: 6;
  }

  .order-sm-7 {
    order: 7;
  }

  .order-sm-8 {
    order: 8;
  }

  .order-sm-9 {
    order: 9;
  }

  .order-sm-10 {
    order: 10;
  }

  .order-sm-11 {
    order: 11;
  }

  .order-sm-12 {
    order: 12;
  }

  .offset-sm-0 {
    margin-left: 0;
  }

  .offset-sm-1 {
    margin-left: 8.333333%;
  }

  .offset-sm-2 {
    margin-left: 16.666667%;
  }

  .offset-sm-3 {
    margin-left: 25%;
  }

  .offset-sm-4 {
    margin-left: 33.333333%;
  }

  .offset-sm-5 {
    margin-left: 41.666667%;
  }

  .offset-sm-6 {
    margin-left: 50%;
  }

  .offset-sm-7 {
    margin-left: 58.333333%;
  }

  .offset-sm-8 {
    margin-left: 66.666667%;
  }

  .offset-sm-9 {
    margin-left: 75%;
  }

  .offset-sm-10 {
    margin-left: 83.333333%;
  }

  .offset-sm-11 {
    margin-left: 91.666667%;
  }
}

@media (min-width:768px) {
  .col-md {
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;
  }

  .col-md-auto {
    flex: 0 0 auto;
    width: auto;
    max-width: 100%;
  }

  .col-md-1 {
    flex: 0 0 8.333333%;
    max-width: 8.333333%;
  }

  .col-md-2 {
    flex: 0 0 16.666667%;
    max-width: 16.666667%;
  }

  .col-md-3 {
    flex: 0 0 25%;
    max-width: 25%;
  }

  .col-md-4 {
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
  }

  .col-md-5 {
    flex: 0 0 41.666667%;
    max-width: 41.666667%;
  }

  .col-md-6 {
    flex: 0 0 50%;
    max-width: 50%;
  }

  .col-md-7 {
    flex: 0 0 58.333333%;
    max-width: 58.333333%;
  }

  .col-md-8 {
    flex: 0 0 66.666667%;
    max-width: 66.666667%;
  }

  .col-md-9 {
    flex: 0 0 75%;
    max-width: 75%;
  }

  .col-md-10 {
    flex: 0 0 83.333333%;
    max-width: 83.333333%;
  }

  .col-md-11 {
    flex: 0 0 91.666667%;
    max-width: 91.666667%;
  }

  .col-md-12 {
    flex: 0 0 100%;
    max-width: 100%;
  }

  .order-md-first {
    order: -1;
  }

  .order-md-last {
    order: 13;
  }

  .order-md-0 {
    order: 0;
  }

  .order-md-1 {
    order: 1;
  }

  .order-md-2 {
    order: 2;
  }

  .order-md-3 {
    order: 3;
  }

  .order-md-4 {
    order: 4;
  }

  .order-md-5 {
    order: 5;
  }

  .order-md-6 {
    order: 6;
  }

  .order-md-7 {
    order: 7;
  }

  .order-md-8 {
    order: 8;
  }

  .order-md-9 {
    order: 9;
  }

  .order-md-10 {
    order: 10;
  }

  .order-md-11 {
    order: 11;
  }

  .order-md-12 {
    order: 12;
  }

  .offset-md-0 {
    margin-left: 0;
  }

  .offset-md-1 {
    margin-left: 8.333333%;
  }

  .offset-md-2 {
    margin-left: 16.666667%;
  }

  .offset-md-3 {
    margin-left: 25%;
  }

  .offset-md-4 {
    margin-left: 33.333333%;
  }

  .offset-md-5 {
    margin-left: 41.666667%;
  }

  .offset-md-6 {
    margin-left: 50%;
  }

  .offset-md-7 {
    margin-left: 58.333333%;
  }

  .offset-md-8 {
    margin-left: 66.666667%;
  }

  .offset-md-9 {
    margin-left: 75%;
  }

  .offset-md-10 {
    margin-left: 83.333333%;
  }

  .offset-md-11 {
    margin-left: 91.666667%;
  }
}

@media (min-width:992px) {
  .col-lg {
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;
  }

  .col-lg-auto {
    flex: 0 0 auto;
    width: auto;
    max-width: 100%;
  }

  .col-lg-1 {
    flex: 0 0 8.333333%;
    max-width: 8.333333%;
  }

  .col-lg-2 {
    flex: 0 0 16.666667%;
    max-width: 16.666667%;
  }

  .col-lg-3 {
    flex: 0 0 25%;
    max-width: 25%;
  }

  .col-lg-4 {
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
  }

  .col-lg-5 {
    flex: 0 0 41.666667%;
    max-width: 41.666667%;
  }

  .col-lg-6 {
    flex: 0 0 50%;
    max-width: 50%;
  }

  .col-lg-7 {
    flex: 0 0 58.333333%;
    max-width: 58.333333%;
  }

  .col-lg-8 {
    flex: 0 0 66.666667%;
    max-width: 66.666667%;
  }

  .col-lg-9 {
    flex: 0 0 75%;
    max-width: 75%;
  }

  .col-lg-10 {
    flex: 0 0 83.333333%;
    max-width: 83.333333%;
  }

  .col-lg-11 {
    flex: 0 0 91.666667%;
    max-width: 91.666667%;
  }

  .col-lg-12 {
    flex: 0 0 100%;
    max-width: 100%;
  }

  .order-lg-first {
    order: -1;
  }

  .order-lg-last {
    order: 13;
  }

  .order-lg-0 {
    order: 0;
  }

  .order-lg-1 {
    order: 1;
  }

  .order-lg-2 {
    order: 2;
  }

  .order-lg-3 {
    order: 3;
  }

  .order-lg-4 {
    order: 4;
  }

  .order-lg-5 {
    order: 5;
  }

  .order-lg-6 {
    order: 6;
  }

  .order-lg-7 {
    order: 7;
  }

  .order-lg-8 {
    order: 8;
  }

  .order-lg-9 {
    order: 9;
  }

  .order-lg-10 {
    order: 10;
  }

  .order-lg-11 {
    order: 11;
  }

  .order-lg-12 {
    order: 12;
  }

  .offset-lg-0 {
    margin-left: 0;
  }

  .offset-lg-1 {
    margin-left: 8.333333%;
  }

  .offset-lg-2 {
    margin-left: 16.666667%;
  }

  .offset-lg-3 {
    margin-left: 25%;
  }

  .offset-lg-4 {
    margin-left: 33.333333%;
  }

  .offset-lg-5 {
    margin-left: 41.666667%;
  }

  .offset-lg-6 {
    margin-left: 50%;
  }

  .offset-lg-7 {
    margin-left: 58.333333%;
  }

  .offset-lg-8 {
    margin-left: 66.666667%;
  }

  .offset-lg-9 {
    margin-left: 75%;
  }

  .offset-lg-10 {
    margin-left: 83.333333%;
  }

  .offset-lg-11 {
    margin-left: 91.666667%;
  }
}

@media (min-width:1200px) {
  .col-xl {
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;
  }

  .col-xl-auto {
    flex: 0 0 auto;
    width: auto;
    max-width: 100%;
  }

  .col-xl-1 {
    flex: 0 0 8.333333%;
    max-width: 8.333333%;
  }

  .col-xl-2 {
    flex: 0 0 16.666667%;
    max-width: 16.666667%;
  }

  .col-xl-3 {
    flex: 0 0 25%;
    max-width: 25%;
  }

  .col-xl-4 {
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
  }

  .col-xl-5 {
    flex: 0 0 41.666667%;
    max-width: 41.666667%;
  }

  .col-xl-6 {
    flex: 0 0 50%;
    max-width: 50%;
  }

  .col-xl-7 {
    flex: 0 0 58.333333%;
    max-width: 58.333333%;
  }

  .col-xl-8 {
    flex: 0 0 66.666667%;
    max-width: 66.666667%;
  }

  .col-xl-9 {
    flex: 0 0 75%;
    max-width: 75%;
  }

  .col-xl-10 {
    flex: 0 0 83.333333%;
    max-width: 83.333333%;
  }

  .col-xl-11 {
    flex: 0 0 91.666667%;
    max-width: 91.666667%;
  }

  .col-xl-12 {
    flex: 0 0 100%;
    max-width: 100%;
  }

  .order-xl-first {
    order: -1;
  }

  .order-xl-last {
    order: 13;
  }

  .order-xl-0 {
    order: 0;
  }

  .order-xl-1 {
    order: 1;
  }

  .order-xl-2 {
    order: 2;
  }

  .order-xl-3 {
    order: 3;
  }

  .order-xl-4 {
    order: 4;
  }

  .order-xl-5 {
    order: 5;
  }

  .order-xl-6 {
    order: 6;
  }

  .order-xl-7 {
    order: 7;
  }

  .order-xl-8 {
    order: 8;
  }

  .order-xl-9 {
    order: 9;
  }

  .order-xl-10 {
    order: 10;
  }

  .order-xl-11 {
    order: 11;
  }

  .order-xl-12 {
    order: 12;
  }

  .offset-xl-0 {
    margin-left: 0;
  }

  .offset-xl-1 {
    margin-left: 8.333333%;
  }

  .offset-xl-2 {
    margin-left: 16.666667%;
  }

  .offset-xl-3 {
    margin-left: 25%;
  }

  .offset-xl-4 {
    margin-left: 33.333333%;
  }

  .offset-xl-5 {
    margin-left: 41.666667%;
  }

  .offset-xl-6 {
    margin-left: 50%;
  }

  .offset-xl-7 {
    margin-left: 58.333333%;
  }

  .offset-xl-8 {
    margin-left: 66.666667%;
  }

  .offset-xl-9 {
    margin-left: 75%;
  }

  .offset-xl-10 {
    margin-left: 83.333333%;
  }

  .offset-xl-11 {
    margin-left: 91.666667%;
  }
}

.table {
  width: 100%;
  margin-bottom: 1rem;
  color: #212529;
}

.table td,.table th {
  padding: .75rem;
  vertical-align: top;
  border-top: 1px solid #dee2e6;
}

.table thead th {
  vertical-align: bottom;
  border-bottom: 2px solid #dee2e6;
}

.table tbody+tbody {
  border-top: 2px solid #dee2e6;
}

.table-sm td,.table-sm th {
  padding: .3rem;
}

.table-bordered,.table-bordered td,.table-bordered th {
  border: 1px solid #dee2e6;
}

.table-bordered thead td,.table-bordered thead th {
  border-bottom-width: 2px;
}

.table-borderless tbody+tbody,.table-borderless td,.table-borderless th,.table-borderless thead th {
  border: 0;
}

.table-striped tbody tr:nth-of-type(odd) {
  background-color: rgba(0,0,0,.05);
}

.table-hover tbody tr:hover {
  color: #212529;
  background-color: rgba(0,0,0,.075);
}

.table-primary,.table-primary>td,.table-primary>th {
  background-color: #b8daff;
}

.table-primary tbody+tbody,.table-primary td,.table-primary th,.table-primary thead th {
  border-color: #7abaff;
}

.table-hover .table-primary:hover,.table-hover .table-primary:hover>td,.table-hover .table-primary:hover>th {
  background-color: #9fcdff;
}

.table-secondary,.table-secondary>td,.table-secondary>th {
  background-color: #d6d8db;
}

.table-secondary tbody+tbody,.table-secondary td,.table-secondary th,.table-secondary thead th {
  border-color: #b3b7bb;
}

.table-hover .table-secondary:hover,.table-hover .table-secondary:hover>td,.table-hover .table-secondary:hover>th {
  background-color: #c8cbcf;
}

.table-success,.table-success>td,.table-success>th {
  background-color: #c3e6cb;
}

.table-success tbody+tbody,.table-success td,.table-success th,.table-success thead th {
  border-color: #8fd19e;
}

.table-hover .table-success:hover,.table-hover .table-success:hover>td,.table-hover .table-success:hover>th {
  background-color: #b1dfbb;
}

.table-info,.table-info>td,.table-info>th {
  background-color: #bee5eb;
}

.table-info tbody+tbody,.table-info td,.table-info th,.table-info thead th {
  border-color: #86cfda;
}

.table-hover .table-info:hover,.table-hover .table-info:hover>td,.table-hover .table-info:hover>th {
  background-color: #abdde5;
}

.table-warning,.table-warning>td,.table-warning>th {
  background-color: #ffeeba;
}

.table-warning tbody+tbody,.table-warning td,.table-warning th,.table-warning thead th {
  border-color: #ffdf7e;
}

.table-hover .table-warning:hover,.table-hover .table-warning:hover>td,.table-hover .table-warning:hover>th {
  background-color: #ffe8a1;
}

.table-danger,.table-danger>td,.table-danger>th {
  background-color: #f5c6cb;
}

.table-danger tbody+tbody,.table-danger td,.table-danger th,.table-danger thead th {
  border-color: #ed969e;
}

.table-hover .table-danger:hover,.table-hover .table-danger:hover>td,.table-hover .table-danger:hover>th {
  background-color: #f1b0b7;
}

.table-light,.table-light>td,.table-light>th {
  background-color: #fdfdfe;
}

.table-light tbody+tbody,.table-light td,.table-light th,.table-light thead th {
  border-color: #fbfcfc;
}

.table-hover .table-light:hover,.table-hover .table-light:hover>td,.table-hover .table-light:hover>th {
  background-color: #ececf6;
}

.table-dark,.table-dark>td,.table-dark>th {
  background-color: #c6c8ca;
}

.table-dark tbody+tbody,.table-dark td,.table-dark th,.table-dark thead th {
  border-color: #95999c;
}

.table-hover .table-dark:hover,.table-hover .table-dark:hover>td,.table-hover .table-dark:hover>th {
  background-color: #b9bbbe;
}

.table-active,.table-active>td,.table-active>th,.table-hover .table-active:hover,.table-hover .table-active:hover>td,.table-hover .table-active:hover>th {
  background-color: rgba(0,0,0,.075);
}

.table .thead-dark th {
  color: #fff;
  background-color: #343a40;
  border-color: #454d55;
}

.table .thead-light th {
  color: #495057;
  background-color: #e9ecef;
  border-color: #dee2e6;
}

.table-dark {
  color: #fff;
  background-color: #343a40;
}

.table-dark td,.table-dark th,.table-dark thead th {
  border-color: #454d55;
}

.table-dark.table-bordered {
  border: 0;
}

.table-dark.table-striped tbody tr:nth-of-type(odd) {
  background-color: rgba(255,255,255,.05);
}

.table-dark.table-hover tbody tr:hover {
  color: #fff;
  background-color: rgba(255,255,255,.075);
}

@media (max-width:575.98px) {
  .table-responsive-sm {
    display: block;
    width: 100%;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }

  .table-responsive-sm>.table-bordered {
    border: 0;
  }
}

@media (max-width:767.98px) {
  .table-responsive-md {
    display: block;
    width: 100%;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }

  .table-responsive-md>.table-bordered {
    border: 0;
  }
}

@media (max-width:991.98px) {
  .table-responsive-lg {
    display: block;
    width: 100%;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }

  .table-responsive-lg>.table-bordered {
    border: 0;
  }
}

@media (max-width:1199.98px) {
  .table-responsive-xl {
    display: block;
    width: 100%;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }

  .table-responsive-xl>.table-bordered {
    border: 0;
  }
}

.table-responsive {
  display: block;
  width: 100%;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}

.table-responsive>.table-bordered {
  border: 0;
}

.form-control {
  display: block;
  width: 100%;
  height: calc(1.5em + .75rem + 2px);
  padding: .375rem .75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: .25rem;
  transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}

@media (prefers-reduced-motion:reduce) {
  .form-control {
    transition: none;
  }
}

.form-control::-ms-expand {
  background-color: transparent;
  border: 0;
}

.form-control:focus {
  color: #495057;
  background-color: #fff;
  border-color: #80bdff;
  outline: 0;
  box-shadow: 0 0 0 .2rem rgba(0,123,255,.25);
}

.form-control::-webkit-input-placeholder {
  color: #6c757d;
  opacity: 1;
}

.form-control::-moz-placeholder {
  color: #6c757d;
  opacity: 1;
}

.form-control::-ms-input-placeholder {
  color: #6c757d;
  opacity: 1;
}

.form-control::placeholder {
  color: #6c757d;
  opacity: 1;
}

.form-control:disabled,.form-control[readonly] {
  background-color: #e9ecef;
  opacity: 1;
}

select.form-control:focus::-ms-value {
  color: #495057;
  background-color: #fff;
}

.form-control-file,.form-control-range {
  display: block;
  width: 100%;
}

.col-form-label {
  padding-top: calc(.375rem + 1px);
  padding-bottom: calc(.375rem + 1px);
  margin-bottom: 0;
  font-size: inherit;
  line-height: 1.5;
}

.col-form-label-lg {
  padding-top: calc(.5rem + 1px);
  padding-bottom: calc(.5rem + 1px);
  font-size: 1.25rem;
  line-height: 1.5;
}

.col-form-label-sm {
  padding-top: calc(.25rem + 1px);
  padding-bottom: calc(.25rem + 1px);
  font-size: .875rem;
  line-height: 1.5;
}

.form-control-plaintext {
  display: block;
  width: 100%;
  padding-top: .375rem;
  padding-bottom: .375rem;
  margin-bottom: 0;
  line-height: 1.5;
  color: #212529;
  background-color: transparent;
  border: solid transparent;
  border-width: 1px 0;
}

.form-control-plaintext.form-control-lg,.form-control-plaintext.form-control-sm {
  padding-right: 0;
  padding-left: 0;
}

.form-control-sm {
  height: calc(1.5em + .5rem + 2px);
  padding: .25rem .5rem;
  font-size: .875rem;
  line-height: 1.5;
  border-radius: .2rem;
}

.form-control-lg {
  height: calc(1.5em + 1rem + 2px);
  padding: .5rem 1rem;
  font-size: 1.25rem;
  line-height: 1.5;
  border-radius: .3rem;
}

select.form-control[multiple],select.form-control[size],textarea.form-control {
  height: auto;
}

.form-group {
  margin-bottom: 1rem;
}

.form-text {
  display: block;
  margin-top: .25rem;
}

.form-row {
  display: flex;
  flex-wrap: wrap;
  margin-right: -5px;
  margin-left: -5px;
}

.form-row>.col,.form-row>[class*=col-] {
  padding-right: 5px;
  padding-left: 5px;
}

.form-check {
  position: relative;
  display: block;
  padding-left: 1.25rem;
}

.form-check-input {
  position: absolute;
  margin-top: .3rem;
  margin-left: -1.25rem;
}

.form-check-input:disabled~.form-check-label {
  color: #6c757d;
}

.form-check-label {
  margin-bottom: 0;
}

.form-check-inline {
  display: inline-flex;
  align-items: center;
  padding-left: 0;
  margin-right: .75rem;
}

.form-check-inline .form-check-input {
  position: static;
  margin-top: 0;
  margin-right: .3125rem;
  margin-left: 0;
}

.valid-feedback {
  display: none;
  width: 100%;
  margin-top: .25rem;
  font-size: 80%;
  color: #28a745;
}

.valid-tooltip {
  position: absolute;
  top: 100%;
  z-index: 5;
  display: none;
  max-width: 100%;
  padding: .25rem .5rem;
  margin-top: .1rem;
  font-size: .875rem;
  line-height: 1.5;
  color: #fff;
  background-color: rgba(40,167,69,.9);
  border-radius: .25rem;
}

.form-control.is-valid,.was-validated .form-control:valid {
  border-color: #28a745;
  padding-right: calc(1.5em + .75rem);
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%2328a745' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: center right calc(.375em + .1875rem);
  background-size: calc(.75em + .375rem) calc(.75em + .375rem);
}

.form-control.is-valid:focus,.was-validated .form-control:valid:focus {
  border-color: #28a745;
  box-shadow: 0 0 0 .2rem rgba(40,167,69,.25);
}

.form-control.is-valid~.valid-feedback,.form-control.is-valid~.valid-tooltip,.was-validated .form-control:valid~.valid-feedback,.was-validated .form-control:valid~.valid-tooltip {
  display: block;
}

.was-validated textarea.form-control:valid,textarea.form-control.is-valid {
  padding-right: calc(1.5em + .75rem);
  background-position: top calc(.375em + .1875rem) right calc(.375em + .1875rem);
}

.custom-select.is-valid,.was-validated .custom-select:valid {
  border-color: #28a745;
  padding-right: calc((1em + .75rem) * 3 / 4 + 1.75rem);
  background: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3e%3cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3e%3c/svg%3e") right .75rem center/8px 10px no-repeat,url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%2328a745' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e") center right 1.75rem/calc(.75em + .375rem) calc(.75em + .375rem) no-repeat #fff;
}

.custom-select.is-valid:focus,.was-validated .custom-select:valid:focus {
  border-color: #28a745;
  box-shadow: 0 0 0 .2rem rgba(40,167,69,.25);
}

.custom-select.is-valid~.valid-feedback,.custom-select.is-valid~.valid-tooltip,.was-validated .custom-select:valid~.valid-feedback,.was-validated .custom-select:valid~.valid-tooltip {
  display: block;
}

.form-control-file.is-valid~.valid-feedback,.form-control-file.is-valid~.valid-tooltip,.was-validated .form-control-file:valid~.valid-feedback,.was-validated .form-control-file:valid~.valid-tooltip {
  display: block;
}

.form-check-input.is-valid~.form-check-label,.was-validated .form-check-input:valid~.form-check-label {
  color: #28a745;
}

.form-check-input.is-valid~.valid-feedback,.form-check-input.is-valid~.valid-tooltip,.was-validated .form-check-input:valid~.valid-feedback,.was-validated .form-check-input:valid~.valid-tooltip {
  display: block;
}

.custom-control-input.is-valid~.custom-control-label,.was-validated .custom-control-input:valid~.custom-control-label {
  color: #28a745;
}

.custom-control-input.is-valid~.custom-control-label::before,.was-validated .custom-control-input:valid~.custom-control-label::before {
  border-color: #28a745;
}

.custom-control-input.is-valid~.valid-feedback,.custom-control-input.is-valid~.valid-tooltip,.was-validated .custom-control-input:valid~.valid-feedback,.was-validated .custom-control-input:valid~.valid-tooltip {
  display: block;
}

.custom-control-input.is-valid:checked~.custom-control-label::before,.was-validated .custom-control-input:valid:checked~.custom-control-label::before {
  border-color: #34ce57;
  background-color: #34ce57;
}

.custom-control-input.is-valid:focus~.custom-control-label::before,.was-validated .custom-control-input:valid:focus~.custom-control-label::before {
  box-shadow: 0 0 0 .2rem rgba(40,167,69,.25);
}

.custom-control-input.is-valid:focus:not(:checked)~.custom-control-label::before,.was-validated .custom-control-input:valid:focus:not(:checked)~.custom-control-label::before {
  border-color: #28a745;
}

.custom-file-input.is-valid~.custom-file-label,.was-validated .custom-file-input:valid~.custom-file-label {
  border-color: #28a745;
}

.custom-file-input.is-valid~.valid-feedback,.custom-file-input.is-valid~.valid-tooltip,.was-validated .custom-file-input:valid~.valid-feedback,.was-validated .custom-file-input:valid~.valid-tooltip {
  display: block;
}

.custom-file-input.is-valid:focus~.custom-file-label,.was-validated .custom-file-input:valid:focus~.custom-file-label {
  border-color: #28a745;
  box-shadow: 0 0 0 .2rem rgba(40,167,69,.25);
}

.invalid-feedback {
  display: none;
  width: 100%;
  margin-top: .25rem;
  font-size: 80%;
  color: #dc3545;
}

.invalid-tooltip {
  position: absolute;
  top: 100%;
  z-index: 5;
  display: none;
  max-width: 100%;
  padding: .25rem .5rem;
  margin-top: .1rem;
  font-size: .875rem;
  line-height: 1.5;
  color: #fff;
  background-color: rgba(220,53,69,.9);
  border-radius: .25rem;
}

.form-control.is-invalid,.was-validated .form-control:invalid {
  border-color: #dc3545;
  padding-right: calc(1.5em + .75rem);
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23dc3545' viewBox='-2 -2 7 7'%3e%3cpath stroke='%23dc3545' d='M0 0l3 3m0-3L0 3'/%3e%3ccircle r='.5'/%3e%3ccircle cx='3' r='.5'/%3e%3ccircle cy='3' r='.5'/%3e%3ccircle cx='3' cy='3' r='.5'/%3e%3c/svg%3E");
  background-repeat: no-repeat;
  background-position: center right calc(.375em + .1875rem);
  background-size: calc(.75em + .375rem) calc(.75em + .375rem);
}

.form-control.is-invalid:focus,.was-validated .form-control:invalid:focus {
  border-color: #dc3545;
  box-shadow: 0 0 0 .2rem rgba(220,53,69,.25);
}

.form-control.is-invalid~.invalid-feedback,.form-control.is-invalid~.invalid-tooltip,.was-validated .form-control:invalid~.invalid-feedback,.was-validated .form-control:invalid~.invalid-tooltip {
  display: block;
}

.was-validated textarea.form-control:invalid,textarea.form-control.is-invalid {
  padding-right: calc(1.5em + .75rem);
  background-position: top calc(.375em + .1875rem) right calc(.375em + .1875rem);
}

.custom-select.is-invalid,.was-validated .custom-select:invalid {
  border-color: #dc3545;
  padding-right: calc((1em + .75rem) * 3 / 4 + 1.75rem);
  background: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3e%3cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3e%3c/svg%3e") right .75rem center/8px 10px no-repeat,url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23dc3545' viewBox='-2 -2 7 7'%3e%3cpath stroke='%23dc3545' d='M0 0l3 3m0-3L0 3'/%3e%3ccircle r='.5'/%3e%3ccircle cx='3' r='.5'/%3e%3ccircle cy='3' r='.5'/%3e%3ccircle cx='3' cy='3' r='.5'/%3e%3c/svg%3E") center right 1.75rem/calc(.75em + .375rem) calc(.75em + .375rem) no-repeat #fff;
}

.custom-select.is-invalid:focus,.was-validated .custom-select:invalid:focus {
  border-color: #dc3545;
  box-shadow: 0 0 0 .2rem rgba(220,53,69,.25);
}

.custom-select.is-invalid~.invalid-feedback,.custom-select.is-invalid~.invalid-tooltip,.was-validated .custom-select:invalid~.invalid-feedback,.was-validated .custom-select:invalid~.invalid-tooltip {
  display: block;
}

.form-control-file.is-invalid~.invalid-feedback,.form-control-file.is-invalid~.invalid-tooltip,.was-validated .form-control-file:invalid~.invalid-feedback,.was-validated .form-control-file:invalid~.invalid-tooltip {
  display: block;
}

.form-check-input.is-invalid~.form-check-label,.was-validated .form-check-input:invalid~.form-check-label {
  color: #dc3545;
}

.form-check-input.is-invalid~.invalid-feedback,.form-check-input.is-invalid~.invalid-tooltip,.was-validated .form-check-input:invalid~.invalid-feedback,.was-validated .form-check-input:invalid~.invalid-tooltip {
  display: block;
}

.custom-control-input.is-invalid~.custom-control-label,.was-validated .custom-control-input:invalid~.custom-control-label {
  color: #dc3545;
}

.custom-control-input.is-invalid~.custom-control-label::before,.was-validated .custom-control-input:invalid~.custom-control-label::before {
  border-color: #dc3545;
}

.custom-control-input.is-invalid~.invalid-feedback,.custom-control-input.is-invalid~.invalid-tooltip,.was-validated .custom-control-input:invalid~.invalid-feedback,.was-validated .custom-control-input:invalid~.invalid-tooltip {
  display: block;
}

.custom-control-input.is-invalid:checked~.custom-control-label::before,.was-validated .custom-control-input:invalid:checked~.custom-control-label::before {
  border-color: #e4606d;
  background-color: #e4606d;
}

.custom-control-input.is-invalid:focus~.custom-control-label::before,.was-validated .custom-control-input:invalid:focus~.custom-control-label::before {
  box-shadow: 0 0 0 .2rem rgba(220,53,69,.25);
}

.custom-control-input.is-invalid:focus:not(:checked)~.custom-control-label::before,.was-validated .custom-control-input:invalid:focus:not(:checked)~.custom-control-label::before {
  border-color: #dc3545;
}

.custom-file-input.is-invalid~.custom-file-label,.was-validated .custom-file-input:invalid~.custom-file-label {
  border-color: #dc3545;
}

.custom-file-input.is-invalid~.invalid-feedback,.custom-file-input.is-invalid~.invalid-tooltip,.was-validated .custom-file-input:invalid~.invalid-feedback,.was-validated .custom-file-input:invalid~.invalid-tooltip {
  display: block;
}

.custom-file-input.is-invalid:focus~.custom-file-label,.was-validated .custom-file-input:invalid:focus~.custom-file-label {
  border-color: #dc3545;
  box-shadow: 0 0 0 .2rem rgba(220,53,69,.25);
}

.form-inline {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
}

.form-inline .form-check {
  width: 100%;
}

@media (min-width:576px) {
  .form-inline label {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 0;
  }

  .form-inline .form-group {
    display: flex;
    flex: 0 0 auto;
    flex-flow: row wrap;
    align-items: center;
    margin-bottom: 0;
  }

  .form-inline .form-control {
    display: inline-block;
    width: auto;
    vertical-align: middle;
  }

  .form-inline .form-control-plaintext {
    display: inline-block;
  }

  .form-inline .custom-select,.form-inline .input-group {
    width: auto;
  }

  .form-inline .form-check {
    display: flex;
    align-items: center;
    justify-content: center;
    width: auto;
    padding-left: 0;
  }

  .form-inline .form-check-input {
    position: relative;
    flex-shrink: 0;
    margin-top: 0;
    margin-right: .25rem;
    margin-left: 0;
  }

  .form-inline .custom-control {
    align-items: center;
    justify-content: center;
  }

  .form-inline .custom-control-label {
    margin-bottom: 0;
  }
}

.btn {
  display: inline-block;
  font-weight: 400;
  color: #212529;
  text-align: center;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-color: transparent;
  border: 1px solid transparent;
  padding: .375rem .75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: .25rem;
  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}

@media (prefers-reduced-motion:reduce) {
  .btn {
    transition: none;
  }
}

.btn:hover {
  color: #212529;
  text-decoration: none;
}

.btn.focus,.btn:focus {
  outline: 0;
  box-shadow: 0 0 0 .2rem rgba(0,123,255,.25);
}

.btn.disabled,.btn:disabled {
  opacity: .65;
}

a.btn.disabled,fieldset:disabled a.btn {
  pointer-events: none;
}

.btn-primary {
  color: #fff;
  background-color: #007bff;
  border-color: #007bff;
}

.btn-primary:hover {
  color: #fff;
  background-color: #0069d9;
  border-color: #0062cc;
}

.btn-primary.focus,.btn-primary:focus {
  box-shadow: 0 0 0 .2rem rgba(38,143,255,.5);
}

.btn-primary.disabled,.btn-primary:disabled {
  color: #fff;
  background-color: #007bff;
  border-color: #007bff;
}

.btn-primary:not(:disabled):not(.disabled).active,.btn-primary:not(:disabled):not(.disabled):active,.show>.btn-primary.dropdown-toggle {
  color: #fff;
  background-color: #0062cc;
  border-color: #005cbf;
}

.btn-primary:not(:disabled):not(.disabled).active:focus,.btn-primary:not(:disabled):not(.disabled):active:focus,.show>.btn-primary.dropdown-toggle:focus {
  box-shadow: 0 0 0 .2rem rgba(38,143,255,.5);
}

.btn-secondary {
  color: #fff;
  background-color: #6c757d;
  border-color: #6c757d;
}

.btn-secondary:hover {
  color: #fff;
  background-color: #5a6268;
  border-color: #545b62;
}

.btn-secondary.focus,.btn-secondary:focus {
  box-shadow: 0 0 0 .2rem rgba(130,138,145,.5);
}

.btn-secondary.disabled,.btn-secondary:disabled {
  color: #fff;
  background-color: #6c757d;
  border-color: #6c757d;
}

.btn-secondary:not(:disabled):not(.disabled).active,.btn-secondary:not(:disabled):not(.disabled):active,.show>.btn-secondary.dropdown-toggle {
  color: #fff;
  background-color: #545b62;
  border-color: #4e555b;
}

.btn-secondary:not(:disabled):not(.disabled).active:focus,.btn-secondary:not(:disabled):not(.disabled):active:focus,.show>.btn-secondary.dropdown-toggle:focus {
  box-shadow: 0 0 0 .2rem rgba(130,138,145,.5);
}

.btn-success {
  color: #fff;
  background-color: #28a745;
  border-color: #28a745;
}

.btn-success:hover {
  color: #fff;
  background-color: #218838;
  border-color: #1e7e34;
}

.btn-success.focus,.btn-success:focus {
  box-shadow: 0 0 0 .2rem rgba(72,180,97,.5);
}

.btn-success.disabled,.btn-success:disabled {
  color: #fff;
  background-color: #28a745;
  border-color: #28a745;
}

.btn-success:not(:disabled):not(.disabled).active,.btn-success:not(:disabled):not(.disabled):active,.show>.btn-success.dropdown-toggle {
  color: #fff;
  background-color: #1e7e34;
  border-color: #1c7430;
}

.btn-success:not(:disabled):not(.disabled).active:focus,.btn-success:not(:disabled):not(.disabled):active:focus,.show>.btn-success.dropdown-toggle:focus {
  box-shadow: 0 0 0 .2rem rgba(72,180,97,.5);
}

.btn-info {
  color: #fff;
  background-color: #17a2b8;
  border-color: #17a2b8;
}

.btn-info:hover {
  color: #fff;
  background-color: #138496;
  border-color: #117a8b;
}

.btn-info.focus,.btn-info:focus {
  box-shadow: 0 0 0 .2rem rgba(58,176,195,.5);
}

.btn-info.disabled,.btn-info:disabled {
  color: #fff;
  background-color: #17a2b8;
  border-color: #17a2b8;
}

.btn-info:not(:disabled):not(.disabled).active,.btn-info:not(:disabled):not(.disabled):active,.show>.btn-info.dropdown-toggle {
  color: #fff;
  background-color: #117a8b;
  border-color: #10707f;
}

.btn-info:not(:disabled):not(.disabled).active:focus,.btn-info:not(:disabled):not(.disabled):active:focus,.show>.btn-info.dropdown-toggle:focus {
  box-shadow: 0 0 0 .2rem rgba(58,176,195,.5);
}

.btn-warning {
  color: #212529;
  background-color: #ffc107;
  border-color: #ffc107;
}

.btn-warning:hover {
  color: #212529;
  background-color: #e0a800;
  border-color: #d39e00;
}

.btn-warning.focus,.btn-warning:focus {
  box-shadow: 0 0 0 .2rem rgba(222,170,12,.5);
}

.btn-warning.disabled,.btn-warning:disabled {
  color: #212529;
  background-color: #ffc107;
  border-color: #ffc107;
}

.btn-warning:not(:disabled):not(.disabled).active,.btn-warning:not(:disabled):not(.disabled):active,.show>.btn-warning.dropdown-toggle {
  color: #212529;
  background-color: #d39e00;
  border-color: #c69500;
}

.btn-warning:not(:disabled):not(.disabled).active:focus,.btn-warning:not(:disabled):not(.disabled):active:focus,.show>.btn-warning.dropdown-toggle:focus {
  box-shadow: 0 0 0 .2rem rgba(222,170,12,.5);
}

.btn-danger {
  color: #fff;
  background-color: #dc3545;
  border-color: #dc3545;
}

.btn-danger:hover {
  color: #fff;
  background-color: #c82333;
  border-color: #bd2130;
}

.btn-danger.focus,.btn-danger:focus {
  box-shadow: 0 0 0 .2rem rgba(225,83,97,.5);
}

.btn-danger.disabled,.btn-danger:disabled {
  color: #fff;
  background-color: #dc3545;
  border-color: #dc3545;
}

.btn-danger:not(:disabled):not(.disabled).active,.btn-danger:not(:disabled):not(.disabled):active,.show>.btn-danger.dropdown-toggle {
  color: #fff;
  background-color: #bd2130;
  border-color: #b21f2d;
}

.btn-danger:not(:disabled):not(.disabled).active:focus,.btn-danger:not(:disabled):not(.disabled):active:focus,.show>.btn-danger.dropdown-toggle:focus {
  box-shadow: 0 0 0 .2rem rgba(225,83,97,.5);
}

.btn-light {
  color: #212529;
  background-color: #f8f9fa;
  border-color: #f8f9fa;
}

.btn-light:hover {
  color: #212529;
  background-color: #e2e6ea;
  border-color: #dae0e5;
}

.btn-light.focus,.btn-light:focus {
  box-shadow: 0 0 0 .2rem rgba(216,217,219,.5);
}

.btn-light.disabled,.btn-light:disabled {
  color: #212529;
  background-color: #f8f9fa;
  border-color: #f8f9fa;
}

.btn-light:not(:disabled):not(.disabled).active,.btn-light:not(:disabled):not(.disabled):active,.show>.btn-light.dropdown-toggle {
  color: #212529;
  background-color: #dae0e5;
  border-color: #d3d9df;
}

.btn-light:not(:disabled):not(.disabled).active:focus,.btn-light:not(:disabled):not(.disabled):active:focus,.show>.btn-light.dropdown-toggle:focus {
  box-shadow: 0 0 0 .2rem rgba(216,217,219,.5);
}

.btn-dark {
  color: #fff;
  background-color: #343a40;
  border-color: #343a40;
}

.btn-dark:hover {
  color: #fff;
  background-color: #23272b;
  border-color: #1d2124;
}

.btn-dark.focus,.btn-dark:focus {
  box-shadow: 0 0 0 .2rem rgba(82,88,93,.5);
}

.btn-dark.disabled,.btn-dark:disabled {
  color: #fff;
  background-color: #343a40;
  border-color: #343a40;
}

.btn-dark:not(:disabled):not(.disabled).active,.btn-dark:not(:disabled):not(.disabled):active,.show>.btn-dark.dropdown-toggle {
  color: #fff;
  background-color: #1d2124;
  border-color: #171a1d;
}

.btn-dark:not(:disabled):not(.disabled).active:focus,.btn-dark:not(:disabled):not(.disabled):active:focus,.show>.btn-dark.dropdown-toggle:focus {
  box-shadow: 0 0 0 .2rem rgba(82,88,93,.5);
}

.btn-outline-primary {
  color: #007bff;
  border-color: #007bff;
}

.btn-outline-primary:hover {
  color: #fff;
  background-color: #007bff;
  border-color: #007bff;
}

.btn-outline-primary.focus,.btn-outline-primary:focus {
  box-shadow: 0 0 0 .2rem rgba(0,123,255,.5);
}

.btn-outline-primary.disabled,.btn-outline-primary:disabled {
  color: #007bff;
  background-color: transparent;
}

.btn-outline-primary:not(:disabled):not(.disabled).active,.btn-outline-primary:not(:disabled):not(.disabled):active,.show>.btn-outline-primary.dropdown-toggle {
  color: #fff;
  background-color: #007bff;
  border-color: #007bff;
}

.btn-outline-primary:not(:disabled):not(.disabled).active:focus,.btn-outline-primary:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-primary.dropdown-toggle:focus {
  box-shadow: 0 0 0 .2rem rgba(0,123,255,.5);
}

.btn-outline-secondary {
  color: #6c757d;
  border-color: #6c757d;
}

.btn-outline-secondary:hover {
  color: #fff;
  background-color: #6c757d;
  border-color: #6c757d;
}

.btn-outline-secondary.focus,.btn-outline-secondary:focus {
  box-shadow: 0 0 0 .2rem rgba(108,117,125,.5);
}

.btn-outline-secondary.disabled,.btn-outline-secondary:disabled {
  color: #6c757d;
  background-color: transparent;
}

.btn-outline-secondary:not(:disabled):not(.disabled).active,.btn-outline-secondary:not(:disabled):not(.disabled):active,.show>.btn-outline-secondary.dropdown-toggle {
  color: #fff;
  background-color: #6c757d;
  border-color: #6c757d;
}

.btn-outline-secondary:not(:disabled):not(.disabled).active:focus,.btn-outline-secondary:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-secondary.dropdown-toggle:focus {
  box-shadow: 0 0 0 .2rem rgba(108,117,125,.5);
}

.btn-outline-success {
  color: #28a745;
  border-color: #28a745;
}

.btn-outline-success:hover {
  color: #fff;
  background-color: #28a745;
  border-color: #28a745;
}

.btn-outline-success.focus,.btn-outline-success:focus {
  box-shadow: 0 0 0 .2rem rgba(40,167,69,.5);
}

.btn-outline-success.disabled,.btn-outline-success:disabled {
  color: #28a745;
  background-color: transparent;
}

.btn-outline-success:not(:disabled):not(.disabled).active,.btn-outline-success:not(:disabled):not(.disabled):active,.show>.btn-outline-success.dropdown-toggle {
  color: #fff;
  background-color: #28a745;
  border-color: #28a745;
}

.btn-outline-success:not(:disabled):not(.disabled).active:focus,.btn-outline-success:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-success.dropdown-toggle:focus {
  box-shadow: 0 0 0 .2rem rgba(40,167,69,.5);
}

.btn-outline-info {
  color: #17a2b8;
  border-color: #17a2b8;
}

.btn-outline-info:hover {
  color: #fff;
  background-color: #17a2b8;
  border-color: #17a2b8;
}

.btn-outline-info.focus,.btn-outline-info:focus {
  box-shadow: 0 0 0 .2rem rgba(23,162,184,.5);
}

.btn-outline-info.disabled,.btn-outline-info:disabled {
  color: #17a2b8;
  background-color: transparent;
}

.btn-outline-info:not(:disabled):not(.disabled).active,.btn-outline-info:not(:disabled):not(.disabled):active,.show>.btn-outline-info.dropdown-toggle {
  color: #fff;
  background-color: #17a2b8;
  border-color: #17a2b8;
}

.btn-outline-info:not(:disabled):not(.disabled).active:focus,.btn-outline-info:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-info.dropdown-toggle:focus {
  box-shadow: 0 0 0 .2rem rgba(23,162,184,.5);
}

.btn-outline-warning {
  color: #ffc107;
  border-color: #ffc107;
}

.btn-outline-warning:hover {
  color: #212529;
  background-color: #ffc107;
  border-color: #ffc107;
}

.btn-outline-warning.focus,.btn-outline-warning:focus {
  box-shadow: 0 0 0 .2rem rgba(255,193,7,.5);
}

.btn-outline-warning.disabled,.btn-outline-warning:disabled {
  color: #ffc107;
  background-color: transparent;
}

.btn-outline-warning:not(:disabled):not(.disabled).active,.btn-outline-warning:not(:disabled):not(.disabled):active,.show>.btn-outline-warning.dropdown-toggle {
  color: #212529;
  background-color: #ffc107;
  border-color: #ffc107;
}

.btn-outline-warning:not(:disabled):not(.disabled).active:focus,.btn-outline-warning:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-warning.dropdown-toggle:focus {
  box-shadow: 0 0 0 .2rem rgba(255,193,7,.5);
}

.btn-outline-danger {
  color: #dc3545;
  border-color: #dc3545;
}

.btn-outline-danger:hover {
  color: #fff;
  background-color: #dc3545;
  border-color: #dc3545;
}

.btn-outline-danger.focus,.btn-outline-danger:focus {
  box-shadow: 0 0 0 .2rem rgba(220,53,69,.5);
}

.btn-outline-danger.disabled,.btn-outline-danger:disabled {
  color: #dc3545;
  background-color: transparent;
}

.btn-outline-danger:not(:disabled):not(.disabled).active,.btn-outline-danger:not(:disabled):not(.disabled):active,.show>.btn-outline-danger.dropdown-toggle {
  color: #fff;
  background-color: #dc3545;
  border-color: #dc3545;
}

.btn-outline-danger:not(:disabled):not(.disabled).active:focus,.btn-outline-danger:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-danger.dropdown-toggle:focus {
  box-shadow: 0 0 0 .2rem rgba(220,53,69,.5);
}

.btn-outline-light {
  color: #f8f9fa;
  border-color: #f8f9fa;
}

.btn-outline-light:hover {
  color: #212529;
  background-color: #f8f9fa;
  border-color: #f8f9fa;
}

.btn-outline-light.focus,.btn-outline-light:focus {
  box-shadow: 0 0 0 .2rem rgba(248,249,250,.5);
}

.btn-outline-light.disabled,.btn-outline-light:disabled {
  color: #f8f9fa;
  background-color: transparent;
}

.btn-outline-light:not(:disabled):not(.disabled).active,.btn-outline-light:not(:disabled):not(.disabled):active,.show>.btn-outline-light.dropdown-toggle {
  color: #212529;
  background-color: #f8f9fa;
  border-color: #f8f9fa;
}

.btn-outline-light:not(:disabled):not(.disabled).active:focus,.btn-outline-light:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-light.dropdown-toggle:focus {
  box-shadow: 0 0 0 .2rem rgba(248,249,250,.5);
}

.btn-outline-dark {
  color: #343a40;
  border-color: #343a40;
}

.btn-outline-dark:hover {
  color: #fff;
  background-color: #343a40;
  border-color: #343a40;
}

.btn-outline-dark.focus,.btn-outline-dark:focus {
  box-shadow: 0 0 0 .2rem rgba(52,58,64,.5);
}

.btn-outline-dark.disabled,.btn-outline-dark:disabled {
  color: #343a40;
  background-color: transparent;
}

.btn-outline-dark:not(:disabled):not(.disabled).active,.btn-outline-dark:not(:disabled):not(.disabled):active,.show>.btn-outline-dark.dropdown-toggle {
  color: #fff;
  background-color: #343a40;
  border-color: #343a40;
}

.btn-outline-dark:not(:disabled):not(.disabled).active:focus,.btn-outline-dark:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-dark.dropdown-toggle:focus {
  box-shadow: 0 0 0 .2rem rgba(52,58,64,.5);
}

.btn-link {
  font-weight: 400;
  color: #007bff;
  text-decoration: none;
}

.btn-link:hover {
  color: #0056b3;
  text-decoration: underline;
}

.btn-link.focus,.btn-link:focus {
  text-decoration: underline;
  box-shadow: none;
}

.btn-link.disabled,.btn-link:disabled {
  color: #6c757d;
  pointer-events: none;
}

.btn-group-lg>.btn,.btn-lg {
  padding: .5rem 1rem;
  font-size: 1.25rem;
  line-height: 1.5;
  border-radius: .3rem;
}

.btn-group-sm>.btn,.btn-sm {
  padding: .25rem .5rem;
  font-size: .875rem;
  line-height: 1.5;
  border-radius: .2rem;
}

.btn-block {
  display: block;
  width: 100%;
}

.btn-block+.btn-block {
  margin-top: .5rem;
}

input[type=button].btn-block,input[type=reset].btn-block,input[type=submit].btn-block {
  width: 100%;
}

.fade {
  transition: opacity .15s linear;
}

@media (prefers-reduced-motion:reduce) {
  .fade {
    transition: none;
  }
}

.fade:not(.show) {
  opacity: 0;
}

.collapse:not(.show) {
  display: none;
}

.collapsing {
  position: relative;
  height: 0;
  overflow: hidden;
  transition: height .35s ease;
}

.dropdown,.dropleft,.dropright,.dropup {
  position: relative;
}

.dropdown-toggle {
  white-space: nowrap;
}

.dropdown-toggle::after {
  display: inline-block;
  margin-left: .255em;
  vertical-align: .255em;
  content: "";
  border-top: .3em solid;
  border-right: .3em solid transparent;
  border-bottom: 0;
  border-left: .3em solid transparent;
}

.dropdown-toggle:empty::after {
  margin-left: 0;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1000;
  display: none;
  float: left;
  min-width: 10rem;
  padding: .5rem 0;
  margin: .125rem 0 0;
  font-size: 1rem;
  color: #212529;
  text-align: left;
  list-style: none;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(0,0,0,.15);
  border-radius: .25rem;
}

.dropdown-menu-left {
  right: auto;
  left: 0;
}

.dropdown-menu-right {
  right: 0;
  left: auto;
}

@media (min-width:576px) {
  .dropdown-menu-sm-left {
    right: auto;
    left: 0;
  }

  .dropdown-menu-sm-right {
    right: 0;
    left: auto;
  }
}

@media (min-width:768px) {
  .dropdown-menu-md-left {
    right: auto;
    left: 0;
  }

  .dropdown-menu-md-right {
    right: 0;
    left: auto;
  }
}

@media (min-width:992px) {
  .dropdown-menu-lg-left {
    right: auto;
    left: 0;
  }

  .dropdown-menu-lg-right {
    right: 0;
    left: auto;
  }
}

@media (min-width:1200px) {
  .dropdown-menu-xl-left {
    right: auto;
    left: 0;
  }

  .dropdown-menu-xl-right {
    right: 0;
    left: auto;
  }
}

.dropup .dropdown-menu {
  top: auto;
  bottom: 100%;
  margin-top: 0;
  margin-bottom: .125rem;
}

.dropup .dropdown-toggle::after {
  display: inline-block;
  margin-left: .255em;
  vertical-align: .255em;
  content: "";
  border-top: 0;
  border-right: .3em solid transparent;
  border-bottom: .3em solid;
  border-left: .3em solid transparent;
}

.dropup .dropdown-toggle:empty::after {
  margin-left: 0;
}

.dropright .dropdown-menu {
  top: 0;
  right: auto;
  left: 100%;
  margin-top: 0;
  margin-left: .125rem;
}

.dropright .dropdown-toggle::after {
  display: inline-block;
  margin-left: .255em;
  content: "";
  border-top: .3em solid transparent;
  border-right: 0;
  border-bottom: .3em solid transparent;
  border-left: .3em solid;
  vertical-align: 0;
}

.dropright .dropdown-toggle:empty::after {
  margin-left: 0;
}

.dropleft .dropdown-menu {
  top: 0;
  right: 100%;
  left: auto;
  margin-top: 0;
  margin-right: .125rem;
}

.dropleft .dropdown-toggle::after {
  margin-left: .255em;
  vertical-align: .255em;
  content: "";
  display: none;
}

.dropleft .dropdown-toggle::before {
  display: inline-block;
  margin-right: .255em;
  content: "";
  border-top: .3em solid transparent;
  border-right: .3em solid;
  border-bottom: .3em solid transparent;
  vertical-align: 0;
}

.dropleft .dropdown-toggle:empty::after {
  margin-left: 0;
}

.dropdown-menu[x-placement^=bottom],.dropdown-menu[x-placement^=left],.dropdown-menu[x-placement^=right],.dropdown-menu[x-placement^=top] {
  right: auto;
  bottom: auto;
}

.dropdown-divider {
  height: 0;
  margin: .5rem 0;
  overflow: hidden;
  border-top: 1px solid #e9ecef;
}

.dropdown-item {
  display: block;
  width: 100%;
  padding: .25rem 1.5rem;
  clear: both;
  font-weight: 400;
  color: #212529;
  text-align: inherit;
  white-space: nowrap;
  background-color: transparent;
  border: 0;
}

.dropdown-item:focus,.dropdown-item:hover {
  color: #16181b;
  text-decoration: none;
  background-color: #f8f9fa;
}

.dropdown-item.active,.dropdown-item:active {
  color: #fff;
  text-decoration: none;
  background-color: #007bff;
}

.dropdown-item.disabled,.dropdown-item:disabled {
  color: #6c757d;
  pointer-events: none;
  background-color: transparent;
}

.dropdown-menu.show {
  display: block;
}

.dropdown-header {
  display: block;
  padding: .5rem 1.5rem;
  margin-bottom: 0;
  font-size: .875rem;
  color: #6c757d;
  white-space: nowrap;
}

.dropdown-item-text {
  display: block;
  padding: .25rem 1.5rem;
  color: #212529;
}

.btn-group,.btn-group-vertical {
  position: relative;
  display: inline-flex;
  vertical-align: middle;
}

.btn-group-vertical>.btn,.btn-group>.btn {
  position: relative;
  flex: 1 1 auto;
}

.btn-group-vertical>.btn.active,.btn-group-vertical>.btn:active,.btn-group-vertical>.btn:focus,.btn-group-vertical>.btn:hover,.btn-group>.btn.active,.btn-group>.btn:active,.btn-group>.btn:focus,.btn-group>.btn:hover {
  z-index: 1;
}

.btn-toolbar {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}

.btn-toolbar .input-group {
  width: auto;
}

.btn-group>.btn-group:not(:first-child),.btn-group>.btn:not(:first-child) {
  margin-left: -1px;
}

.btn-group>.btn-group:not(:last-child)>.btn,.btn-group>.btn:not(:last-child):not(.dropdown-toggle) {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.btn-group>.btn-group:not(:first-child)>.btn,.btn-group>.btn:not(:first-child) {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.dropdown-toggle-split {
  padding-right: .5625rem;
  padding-left: .5625rem;
}

.dropdown-toggle-split::after,.dropright .dropdown-toggle-split::after,.dropup .dropdown-toggle-split::after {
  margin-left: 0;
}

.dropleft .dropdown-toggle-split::before {
  margin-right: 0;
}

.btn-group-sm>.btn+.dropdown-toggle-split,.btn-sm+.dropdown-toggle-split {
  padding-right: .375rem;
  padding-left: .375rem;
}

.btn-group-lg>.btn+.dropdown-toggle-split,.btn-lg+.dropdown-toggle-split {
  padding-right: .75rem;
  padding-left: .75rem;
}

.btn-group-vertical {
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}

.btn-group-vertical>.btn,.btn-group-vertical>.btn-group {
  width: 100%;
}

.btn-group-vertical>.btn-group:not(:first-child),.btn-group-vertical>.btn:not(:first-child) {
  margin-top: -1px;
}

.btn-group-vertical>.btn-group:not(:last-child)>.btn,.btn-group-vertical>.btn:not(:last-child):not(.dropdown-toggle) {
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.btn-group-vertical>.btn-group:not(:first-child)>.btn,.btn-group-vertical>.btn:not(:first-child) {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.btn-group-toggle>.btn,.btn-group-toggle>.btn-group>.btn {
  margin-bottom: 0;
}

.btn-group-toggle>.btn input[type=checkbox],.btn-group-toggle>.btn input[type=radio],.btn-group-toggle>.btn-group>.btn input[type=checkbox],.btn-group-toggle>.btn-group>.btn input[type=radio] {
  position: absolute;
  clip: rect(0,0,0,0);
  pointer-events: none;
}

.input-group {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  width: 100%;
}

.input-group>.custom-file,.input-group>.custom-select,.input-group>.form-control,.input-group>.form-control-plaintext {
  position: relative;
  flex: 1 1 auto;
  width: 1%;
  margin-bottom: 0;
}

.input-group>.custom-file+.custom-file,.input-group>.custom-file+.custom-select,.input-group>.custom-file+.form-control,.input-group>.custom-select+.custom-file,.input-group>.custom-select+.custom-select,.input-group>.custom-select+.form-control,.input-group>.form-control+.custom-file,.input-group>.form-control+.custom-select,.input-group>.form-control+.form-control,.input-group>.form-control-plaintext+.custom-file,.input-group>.form-control-plaintext+.custom-select,.input-group>.form-control-plaintext+.form-control {
  margin-left: -1px;
}

.input-group>.custom-file .custom-file-input:focus~.custom-file-label,.input-group>.custom-select:focus,.input-group>.form-control:focus {
  z-index: 3;
}

.input-group>.custom-file .custom-file-input:focus {
  z-index: 4;
}

.input-group>.custom-select:not(:last-child),.input-group>.form-control:not(:last-child) {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.input-group>.custom-select:not(:first-child),.input-group>.form-control:not(:first-child) {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.input-group>.custom-file {
  display: flex;
  align-items: center;
}

.input-group>.custom-file:not(:last-child) .custom-file-label,.input-group>.custom-file:not(:last-child) .custom-file-label::after {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.input-group>.custom-file:not(:first-child) .custom-file-label {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.input-group-append,.input-group-prepend {
  display: flex;
}

.input-group-append .btn,.input-group-prepend .btn {
  position: relative;
  z-index: 2;
}

.input-group-append .btn:focus,.input-group-prepend .btn:focus {
  z-index: 3;
}

.input-group-append .btn+.btn,.input-group-append .btn+.input-group-text,.input-group-append .input-group-text+.btn,.input-group-append .input-group-text+.input-group-text,.input-group-prepend .btn+.btn,.input-group-prepend .btn+.input-group-text,.input-group-prepend .input-group-text+.btn,.input-group-prepend .input-group-text+.input-group-text {
  margin-left: -1px;
}

.input-group-prepend {
  margin-right: -1px;
}

.input-group-append {
  margin-left: -1px;
}

.input-group-text {
  display: flex;
  align-items: center;
  padding: .375rem .75rem;
  margin-bottom: 0;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  text-align: center;
  white-space: nowrap;
  background-color: #e9ecef;
  border: 1px solid #ced4da;
  border-radius: .25rem;
}

.input-group-text input[type=checkbox],.input-group-text input[type=radio] {
  margin-top: 0;
}

.input-group-lg>.custom-select,.input-group-lg>.form-control:not(textarea) {
  height: calc(1.5em + 1rem + 2px);
}

.input-group-lg>.custom-select,.input-group-lg>.form-control,.input-group-lg>.input-group-append>.btn,.input-group-lg>.input-group-append>.input-group-text,.input-group-lg>.input-group-prepend>.btn,.input-group-lg>.input-group-prepend>.input-group-text {
  padding: .5rem 1rem;
  font-size: 1.25rem;
  line-height: 1.5;
  border-radius: .3rem;
}

.input-group-sm>.custom-select,.input-group-sm>.form-control:not(textarea) {
  height: calc(1.5em + .5rem + 2px);
}

.input-group-sm>.custom-select,.input-group-sm>.form-control,.input-group-sm>.input-group-append>.btn,.input-group-sm>.input-group-append>.input-group-text,.input-group-sm>.input-group-prepend>.btn,.input-group-sm>.input-group-prepend>.input-group-text {
  padding: .25rem .5rem;
  font-size: .875rem;
  line-height: 1.5;
  border-radius: .2rem;
}

.input-group-lg>.custom-select,.input-group-sm>.custom-select {
  padding-right: 1.75rem;
}

.input-group>.input-group-append:last-child>.btn:not(:last-child):not(.dropdown-toggle),.input-group>.input-group-append:last-child>.input-group-text:not(:last-child),.input-group>.input-group-append:not(:last-child)>.btn,.input-group>.input-group-append:not(:last-child)>.input-group-text,.input-group>.input-group-prepend>.btn,.input-group>.input-group-prepend>.input-group-text {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.input-group>.input-group-append>.btn,.input-group>.input-group-append>.input-group-text,.input-group>.input-group-prepend:first-child>.btn:not(:first-child),.input-group>.input-group-prepend:first-child>.input-group-text:not(:first-child),.input-group>.input-group-prepend:not(:first-child)>.btn,.input-group>.input-group-prepend:not(:first-child)>.input-group-text {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.custom-control {
  position: relative;
  display: block;
  min-height: 1.5rem;
  padding-left: 1.5rem;
}

.custom-control-inline {
  display: inline-flex;
  margin-right: 1rem;
}

.custom-control-input {
  position: absolute;
  z-index: -1;
  opacity: 0;
}

.custom-control-input:checked~.custom-control-label::before {
  color: #fff;
  border-color: #007bff;
  background-color: #007bff;
}

.custom-control-input:focus~.custom-control-label::before {
  box-shadow: 0 0 0 .2rem rgba(0,123,255,.25);
}

.custom-control-input:focus:not(:checked)~.custom-control-label::before {
  border-color: #80bdff;
}

.custom-control-input:not(:disabled):active~.custom-control-label::before {
  color: #fff;
  background-color: #b3d7ff;
  border-color: #b3d7ff;
}

.custom-control-input:disabled~.custom-control-label {
  color: #6c757d;
}

.custom-control-input:disabled~.custom-control-label::before {
  background-color: #e9ecef;
}

.custom-control-label {
  position: relative;
  margin-bottom: 0;
  vertical-align: top;
}

.custom-control-label::before {
  position: absolute;
  top: .25rem;
  left: -1.5rem;
  display: block;
  width: 1rem;
  height: 1rem;
  pointer-events: none;
  content: "";
  background-color: #fff;
  border: 1px solid #adb5bd;
}

.custom-control-label::after {
  position: absolute;
  top: .25rem;
  left: -1.5rem;
  display: block;
  width: 1rem;
  height: 1rem;
  content: "";
  background: 50%/50% 50% no-repeat;
}

.custom-checkbox .custom-control-label::before {
  border-radius: .25rem;
}

.custom-checkbox .custom-control-input:checked~.custom-control-label::after {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e");
}

.custom-checkbox .custom-control-input:indeterminate~.custom-control-label::before {
  border-color: #007bff;
  background-color: #007bff;
}

.custom-checkbox .custom-control-input:indeterminate~.custom-control-label::after {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 4'%3e%3cpath stroke='%23fff' d='M0 2h4'/%3e%3c/svg%3e");
}

.custom-checkbox .custom-control-input:disabled:checked~.custom-control-label::before {
  background-color: rgba(0,123,255,.5);
}

.custom-checkbox .custom-control-input:disabled:indeterminate~.custom-control-label::before {
  background-color: rgba(0,123,255,.5);
}

.custom-radio .custom-control-label::before {
  border-radius: 50%;
}

.custom-radio .custom-control-input:checked~.custom-control-label::after {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e");
}

.custom-radio .custom-control-input:disabled:checked~.custom-control-label::before {
  background-color: rgba(0,123,255,.5);
}

.custom-switch {
  padding-left: 2.25rem;
}

.custom-switch .custom-control-label::before {
  left: -2.25rem;
  width: 1.75rem;
  pointer-events: all;
  border-radius: .5rem;
}

.custom-switch .custom-control-label::after {
  top: calc(.25rem + 2px);
  left: calc(-2.25rem + 2px);
  width: calc(1rem - 4px);
  height: calc(1rem - 4px);
  background-color: #adb5bd;
  border-radius: .5rem;
  transition: transform .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}

.custom-switch .custom-control-input:checked~.custom-control-label::after {
  background-color: #fff;
  transform: translateX(.75rem);
}

.custom-switch .custom-control-input:disabled:checked~.custom-control-label::before {
  background-color: rgba(0,123,255,.5);
}

.custom-select {
  display: inline-block;
  width: 100%;
  height: calc(1.5em + .75rem + 2px);
  padding: .375rem 1.75rem .375rem .75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  vertical-align: middle;
  background: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3e%3cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3e%3c/svg%3e") right .75rem center/8px 10px no-repeat #fff;
  border: 1px solid #ced4da;
  border-radius: .25rem;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

.custom-select:focus {
  border-color: #80bdff;
  outline: 0;
  box-shadow: 0 0 0 .2rem rgba(0,123,255,.25);
}

.custom-select:focus::-ms-value {
  color: #495057;
  background-color: #fff;
}

.custom-select[multiple],.custom-select[size]:not([size="1"]) {
  height: auto;
  padding-right: .75rem;
  background-image: none;
}

.custom-select:disabled {
  color: #6c757d;
  background-color: #e9ecef;
}

.custom-select::-ms-expand {
  display: none;
}

.custom-select-sm {
  height: calc(1.5em + .5rem + 2px);
  padding-top: .25rem;
  padding-bottom: .25rem;
  padding-left: .5rem;
  font-size: .875rem;
}

.custom-select-lg {
  height: calc(1.5em + 1rem + 2px);
  padding-top: .5rem;
  padding-bottom: .5rem;
  padding-left: 1rem;
  font-size: 1.25rem;
}

.custom-file {
  position: relative;
  display: inline-block;
  width: 100%;
  height: calc(1.5em + .75rem + 2px);
  margin-bottom: 0;
}

.custom-file-input {
  position: relative;
  z-index: 2;
  width: 100%;
  height: calc(1.5em + .75rem + 2px);
  margin: 0;
  opacity: 0;
}

.custom-file-input:focus~.custom-file-label {
  border-color: #80bdff;
  box-shadow: 0 0 0 .2rem rgba(0,123,255,.25);
}

.custom-file-input:disabled~.custom-file-label {
  background-color: #e9ecef;
}

.custom-file-input:lang(en)~.custom-file-label::after {
  content: "Browse";
}

.custom-file-input~.custom-file-label[data-browse]::after {
  content: attr(data-browse);
}

.custom-file-label {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1;
  height: calc(1.5em + .75rem + 2px);
  padding: .375rem .75rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  border: 1px solid #ced4da;
  border-radius: .25rem;
}

.custom-file-label::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 3;
  display: block;
  height: calc(1.5em + .75rem);
  padding: .375rem .75rem;
  line-height: 1.5;
  color: #495057;
  content: "Browse";
  background-color: #e9ecef;
  border-left: inherit;
  border-radius: 0 .25rem .25rem 0;
}

.custom-range {
  width: 100%;
  height: calc(1rem + .4rem);
  padding: 0;
  background-color: transparent;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

.custom-range:focus {
  outline: 0;
}

.custom-range:focus::-webkit-slider-thumb {
  box-shadow: 0 0 0 1px #fff,0 0 0 .2rem rgba(0,123,255,.25);
}

.custom-range:focus::-moz-range-thumb {
  box-shadow: 0 0 0 1px #fff,0 0 0 .2rem rgba(0,123,255,.25);
}

.custom-range:focus::-ms-thumb {
  box-shadow: 0 0 0 1px #fff,0 0 0 .2rem rgba(0,123,255,.25);
}

.custom-range::-moz-focus-outer {
  border: 0;
}

.custom-range::-webkit-slider-thumb {
  width: 1rem;
  height: 1rem;
  margin-top: -.25rem;
  background-color: #007bff;
  border: 0;
  border-radius: 1rem;
  transition: background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  -webkit-appearance: none;
  appearance: none;
}

@media (prefers-reduced-motion:reduce) {
  .collapsing,.custom-switch .custom-control-label::after {
    transition: none;
  }

  .custom-range::-webkit-slider-thumb {
    transition: none;
  }
}

.custom-range::-webkit-slider-thumb:active {
  background-color: #b3d7ff;
}

.custom-range::-webkit-slider-runnable-track {
  width: 100%;
  height: .5rem;
  color: transparent;
  cursor: pointer;
  background-color: #dee2e6;
  border-color: transparent;
  border-radius: 1rem;
}

.custom-range::-moz-range-thumb {
  width: 1rem;
  height: 1rem;
  background-color: #007bff;
  border: 0;
  border-radius: 1rem;
  transition: background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  -moz-appearance: none;
  appearance: none;
}

@media (prefers-reduced-motion:reduce) {
  .custom-range::-moz-range-thumb {
    transition: none;
  }
}

.custom-range::-moz-range-thumb:active {
  background-color: #b3d7ff;
}

.custom-range::-moz-range-track {
  width: 100%;
  height: .5rem;
  color: transparent;
  cursor: pointer;
  background-color: #dee2e6;
  border-color: transparent;
  border-radius: 1rem;
}

.custom-range::-ms-thumb {
  width: 1rem;
  height: 1rem;
  margin-top: 0;
  margin-right: .2rem;
  margin-left: .2rem;
  background-color: #007bff;
  border: 0;
  border-radius: 1rem;
  transition: background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  appearance: none;
}

@media (prefers-reduced-motion:reduce) {
  .custom-range::-ms-thumb {
    transition: none;
  }
}

.custom-range::-ms-thumb:active {
  background-color: #b3d7ff;
}

.custom-range::-ms-track {
  width: 100%;
  height: .5rem;
  color: transparent;
  cursor: pointer;
  background-color: transparent;
  border-color: transparent;
  border-width: .5rem;
}

.custom-range::-ms-fill-lower {
  background-color: #dee2e6;
  border-radius: 1rem;
}

.custom-range::-ms-fill-upper {
  margin-right: 15px;
  background-color: #dee2e6;
  border-radius: 1rem;
}

.custom-range:disabled::-webkit-slider-thumb {
  background-color: #adb5bd;
}

.custom-range:disabled::-webkit-slider-runnable-track {
  cursor: default;
}

.custom-range:disabled::-moz-range-thumb {
  background-color: #adb5bd;
}

.custom-range:disabled::-moz-range-track {
  cursor: default;
}

.custom-range:disabled::-ms-thumb {
  background-color: #adb5bd;
}

.custom-control-label::before,.custom-file-label,.custom-select {
  transition: background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}

@media (prefers-reduced-motion:reduce) {
  .custom-control-label::before,.custom-file-label,.custom-select {
    transition: none;
  }
}

.nav {
  display: flex;
  flex-wrap: wrap;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
}

.nav-link {
  display: block;
  padding: .5rem 1rem;
}

.nav-link:focus,.nav-link:hover {
  text-decoration: none;
}

.nav-link.disabled {
  color: #6c757d;
  pointer-events: none;
  cursor: default;
}

.nav-tabs {
  border-bottom: 1px solid #dee2e6;
}

.nav-tabs .nav-item {
  margin-bottom: -1px;
}

.nav-tabs .nav-link {
  border: 1px solid transparent;
  border-top-left-radius: .25rem;
  border-top-right-radius: .25rem;
}

.nav-tabs .nav-link:focus,.nav-tabs .nav-link:hover {
  border-color: #e9ecef #e9ecef #dee2e6;
}

.nav-tabs .nav-link.disabled {
  color: #6c757d;
  background-color: transparent;
  border-color: transparent;
}

.nav-tabs .nav-item.show .nav-link,.nav-tabs .nav-link.active {
  color: #495057;
  background-color: #fff;
  border-color: #dee2e6 #dee2e6 #fff;
}

.nav-tabs .dropdown-menu {
  margin-top: -1px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.nav-pills .nav-link {
  border-radius: .25rem;
}

.nav-pills .nav-link.active,.nav-pills .show>.nav-link {
  color: #fff;
  background-color: #007bff;
}

.nav-fill .nav-item {
  flex: 1 1 auto;
  text-align: center;
}

.nav-justified .nav-item {
  flex-basis: 0;
  flex-grow: 1;
  text-align: center;
}

.tab-content>.tab-pane {
  display: none;
}

.tab-content>.active {
  display: block;
}

.navbar {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: .5rem 1rem;
}

.navbar>.container,.navbar>.container-fluid {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
}

.navbar-brand {
  display: inline-block;
  padding-top: .3125rem;
  padding-bottom: .3125rem;
  margin-right: 1rem;
  font-size: 1.25rem;
  line-height: inherit;
  white-space: nowrap;
}

.navbar-brand:focus,.navbar-brand:hover {
  text-decoration: none;
}

.navbar-nav {
  display: flex;
  flex-direction: column;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
}

.navbar-nav .nav-link {
  padding-right: 0;
  padding-left: 0;
}

.navbar-nav .dropdown-menu {
  position: static;
  float: none;
}

.navbar-text {
  display: inline-block;
  padding-top: .5rem;
  padding-bottom: .5rem;
}

.navbar-collapse {
  flex-basis: 100%;
  flex-grow: 1;
  align-items: center;
}

.navbar-toggler {
  padding: .25rem .75rem;
  font-size: 1.25rem;
  line-height: 1;
  background-color: transparent;
  border: 1px solid transparent;
  border-radius: .25rem;
}

.navbar-toggler:focus,.navbar-toggler:hover {
  text-decoration: none;
}

.navbar-toggler-icon {
  display: inline-block;
  width: 1.5em;
  height: 1.5em;
  vertical-align: middle;
  content: "";
  background: center center/100% 100% no-repeat;
}

@media (max-width:575.98px) {
  .navbar-expand-sm>.container,.navbar-expand-sm>.container-fluid {
    padding-right: 0;
    padding-left: 0;
  }
}

@media (min-width:576px) {
  .navbar-expand-sm {
    flex-flow: row nowrap;
    justify-content: flex-start;
  }

  .navbar-expand-sm .navbar-nav {
    flex-direction: row;
  }

  .navbar-expand-sm .navbar-nav .dropdown-menu {
    position: absolute;
  }

  .navbar-expand-sm .navbar-nav .nav-link {
    padding-right: .5rem;
    padding-left: .5rem;
  }

  .navbar-expand-sm>.container,.navbar-expand-sm>.container-fluid {
    flex-wrap: nowrap;
  }

  .navbar-expand-sm .navbar-collapse {
    display: flex!important;
    flex-basis: auto;
  }

  .navbar-expand-sm .navbar-toggler {
    display: none;
  }
}

@media (max-width:767.98px) {
  .navbar-expand-md>.container,.navbar-expand-md>.container-fluid {
    padding-right: 0;
    padding-left: 0;
  }
}

@media (min-width:768px) {
  .navbar-expand-md {
    flex-flow: row nowrap;
    justify-content: flex-start;
  }

  .navbar-expand-md .navbar-nav {
    flex-direction: row;
  }

  .navbar-expand-md .navbar-nav .dropdown-menu {
    position: absolute;
  }

  .navbar-expand-md .navbar-nav .nav-link {
    padding-right: .5rem;
    padding-left: .5rem;
  }

  .navbar-expand-md>.container,.navbar-expand-md>.container-fluid {
    flex-wrap: nowrap;
  }

  .navbar-expand-md .navbar-collapse {
    display: flex!important;
    flex-basis: auto;
  }

  .navbar-expand-md .navbar-toggler {
    display: none;
  }
}

@media (max-width:991.98px) {
  .navbar-expand-lg>.container,.navbar-expand-lg>.container-fluid {
    padding-right: 0;
    padding-left: 0;
  }
}

@media (min-width:992px) {
  .navbar-expand-lg {
    flex-flow: row nowrap;
    justify-content: flex-start;
  }

  .navbar-expand-lg .navbar-nav {
    flex-direction: row;
  }

  .navbar-expand-lg .navbar-nav .dropdown-menu {
    position: absolute;
  }

  .navbar-expand-lg .navbar-nav .nav-link {
    padding-right: .5rem;
    padding-left: .5rem;
  }

  .navbar-expand-lg>.container,.navbar-expand-lg>.container-fluid {
    flex-wrap: nowrap;
  }

  .navbar-expand-lg .navbar-collapse {
    display: flex!important;
    flex-basis: auto;
  }

  .navbar-expand-lg .navbar-toggler {
    display: none;
  }
}

@media (max-width:1199.98px) {
  .navbar-expand-xl>.container,.navbar-expand-xl>.container-fluid {
    padding-right: 0;
    padding-left: 0;
  }
}

@media (min-width:1200px) {
  .navbar-expand-xl {
    flex-flow: row nowrap;
    justify-content: flex-start;
  }

  .navbar-expand-xl .navbar-nav {
    flex-direction: row;
  }

  .navbar-expand-xl .navbar-nav .dropdown-menu {
    position: absolute;
  }

  .navbar-expand-xl .navbar-nav .nav-link {
    padding-right: .5rem;
    padding-left: .5rem;
  }

  .navbar-expand-xl>.container,.navbar-expand-xl>.container-fluid {
    flex-wrap: nowrap;
  }

  .navbar-expand-xl .navbar-collapse {
    display: flex!important;
    flex-basis: auto;
  }

  .navbar-expand-xl .navbar-toggler {
    display: none;
  }
}

.navbar-expand {
  flex-flow: row nowrap;
  justify-content: flex-start;
}

.navbar-expand .navbar-nav {
  flex-direction: row;
}

.navbar-expand .navbar-nav .dropdown-menu {
  position: absolute;
}

.navbar-expand .navbar-nav .nav-link {
  padding-right: .5rem;
  padding-left: .5rem;
}

.navbar-expand>.container,.navbar-expand>.container-fluid {
  padding-right: 0;
  padding-left: 0;
  flex-wrap: nowrap;
}

.navbar-expand .navbar-collapse {
  display: flex!important;
  flex-basis: auto;
}

.navbar-expand .navbar-toggler {
  display: none;
}

.navbar-light .navbar-brand,.navbar-light .navbar-brand:focus,.navbar-light .navbar-brand:hover {
  color: rgba(0,0,0,.9);
}

.navbar-light .navbar-nav .nav-link {
  color: rgba(0,0,0,.5);
}

.navbar-light .navbar-nav .nav-link:focus,.navbar-light .navbar-nav .nav-link:hover {
  color: rgba(0,0,0,.7);
}

.navbar-light .navbar-nav .nav-link.disabled {
  color: rgba(0,0,0,.3);
}

.navbar-light .navbar-nav .active>.nav-link,.navbar-light .navbar-nav .nav-link.active,.navbar-light .navbar-nav .nav-link.show,.navbar-light .navbar-nav .show>.nav-link {
  color: rgba(0,0,0,.9);
}

.navbar-light .navbar-toggler {
  color: rgba(0,0,0,.5);
  border-color: rgba(0,0,0,.1);
}

.navbar-light .navbar-toggler-icon {
  background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3e%3cpath stroke='rgba(0, 0, 0, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
}

.navbar-light .navbar-text {
  color: rgba(0,0,0,.5);
}

.navbar-light .navbar-text a,.navbar-light .navbar-text a:focus,.navbar-light .navbar-text a:hover {
  color: rgba(0,0,0,.9);
}

.navbar-dark .navbar-brand,.navbar-dark .navbar-brand:focus,.navbar-dark .navbar-brand:hover {
  color: #fff;
}

.navbar-dark .navbar-nav .nav-link {
  color: rgba(255,255,255,.5);
}

.navbar-dark .navbar-nav .nav-link:focus,.navbar-dark .navbar-nav .nav-link:hover {
  color: rgba(255,255,255,.75);
}

.navbar-dark .navbar-nav .nav-link.disabled {
  color: rgba(255,255,255,.25);
}

.navbar-dark .navbar-nav .active>.nav-link,.navbar-dark .navbar-nav .nav-link.active,.navbar-dark .navbar-nav .nav-link.show,.navbar-dark .navbar-nav .show>.nav-link {
  color: #fff;
}

.navbar-dark .navbar-toggler {
  color: rgba(255,255,255,.5);
  border-color: rgba(255,255,255,.1);
}

.navbar-dark .navbar-toggler-icon {
  background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3e%3cpath stroke='rgba(255, 255, 255, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
}

.navbar-dark .navbar-text {
  color: rgba(255,255,255,.5);
}

.navbar-dark .navbar-text a,.navbar-dark .navbar-text a:focus,.navbar-dark .navbar-text a:hover {
  color: #fff;
}

.card {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0,0,0,.125);
  border-radius: .25rem;
}

.card>hr {
  margin-right: 0;
  margin-left: 0;
}

.card>.list-group:first-child .list-group-item:first-child {
  border-top-left-radius: .25rem;
  border-top-right-radius: .25rem;
}

.card>.list-group:last-child .list-group-item:last-child {
  border-bottom-right-radius: .25rem;
  border-bottom-left-radius: .25rem;
}

.card-body {
  flex: 1 1 auto;
  padding: 1.25rem;
}

.card-title {
  margin-bottom: .75rem;
}

.card-subtitle {
  margin-top: -.375rem;
  margin-bottom: 0;
}

.card-text:last-child {
  margin-bottom: 0;
}

.card-link:hover {
  text-decoration: none;
}

.card-link+.card-link {
  margin-left: 1.25rem;
}

.card-header {
  padding: .75rem 1.25rem;
  margin-bottom: 0;
  background-color: rgba(0,0,0,.03);
  border-bottom: 1px solid rgba(0,0,0,.125);
}

.card-header:first-child {
  border-radius: calc(.25rem - 1px) calc(.25rem - 1px) 0 0;
}

.card-header+.list-group .list-group-item:first-child {
  border-top: 0;
}

.card-footer {
  padding: .75rem 1.25rem;
  background-color: rgba(0,0,0,.03);
  border-top: 1px solid rgba(0,0,0,.125);
}

.card-footer:last-child {
  border-radius: 0 0 calc(.25rem - 1px) calc(.25rem - 1px);
}

.card-header-tabs {
  margin-right: -.625rem;
  margin-bottom: -.75rem;
  margin-left: -.625rem;
  border-bottom: 0;
}

.card-header-pills {
  margin-right: -.625rem;
  margin-left: -.625rem;
}

.card-img-overlay {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 1.25rem;
}

.card-img {
  width: 100%;
  border-radius: calc(.25rem - 1px);
}

.card-img-top {
  width: 100%;
  border-top-left-radius: calc(.25rem - 1px);
  border-top-right-radius: calc(.25rem - 1px);
}

.card-img-bottom {
  width: 100%;
  border-bottom-right-radius: calc(.25rem - 1px);
  border-bottom-left-radius: calc(.25rem - 1px);
}

.card-deck {
  display: flex;
  flex-direction: column;
}

.card-deck .card {
  margin-bottom: 15px;
}

@media (min-width:576px) {
  .card-deck {
    flex-flow: row wrap;
    margin-right: -15px;
    margin-left: -15px;
  }

  .card-deck .card {
    display: flex;
    flex: 1 0 0%;
    flex-direction: column;
    margin-right: 15px;
    margin-bottom: 0;
    margin-left: 15px;
  }
}

.card-group {
  display: flex;
  flex-direction: column;
}

.card-group>.card {
  margin-bottom: 15px;
}

@media (min-width:576px) {
  .card-group {
    flex-flow: row wrap;
  }

  .card-group>.card {
    flex: 1 0 0%;
    margin-bottom: 0;
  }

  .card-group>.card+.card {
    margin-left: 0;
    border-left: 0;
  }

  .card-group>.card:not(:last-child) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  .card-group>.card:not(:last-child) .card-header,.card-group>.card:not(:last-child) .card-img-top {
    border-top-right-radius: 0;
  }

  .card-group>.card:not(:last-child) .card-footer,.card-group>.card:not(:last-child) .card-img-bottom {
    border-bottom-right-radius: 0;
  }

  .card-group>.card:not(:first-child) {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  .card-group>.card:not(:first-child) .card-header,.card-group>.card:not(:first-child) .card-img-top {
    border-top-left-radius: 0;
  }

  .card-group>.card:not(:first-child) .card-footer,.card-group>.card:not(:first-child) .card-img-bottom {
    border-bottom-left-radius: 0;
  }

  .card-columns {
    -moz-column-count: 3;
    column-count: 3;
    -moz-column-gap: 1.25rem;
    column-gap: 1.25rem;
    orphans: 1;
    widows: 1;
  }

  .card-columns .card {
    display: inline-block;
    width: 100%;
  }
}

.card-columns .card {
  margin-bottom: .75rem;
}

.accordion>.card {
  overflow: hidden;
}

.accordion>.card:not(:first-of-type) .card-header:first-child {
  border-radius: 0;
}

.accordion>.card:not(:first-of-type):not(:last-of-type) {
  border-bottom: 0;
  border-radius: 0;
}

.accordion>.card:first-of-type {
  border-bottom: 0;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.accordion>.card:last-of-type {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.accordion>.card .card-header {
  margin-bottom: -1px;
}

.breadcrumb {
  display: flex;
  flex-wrap: wrap;
  padding: .75rem 1rem;
  margin-bottom: 1rem;
  list-style: none;
  background-color: #e9ecef;
  border-radius: .25rem;
}

.breadcrumb-item+.breadcrumb-item {
  padding-left: .5rem;
}

.breadcrumb-item+.breadcrumb-item::before {
  display: inline-block;
  padding-right: .5rem;
  color: #6c757d;
  content: "/";
}

.breadcrumb-item+.breadcrumb-item:hover::before {
  text-decoration: none;
}

.breadcrumb-item.active {
  color: #6c757d;
}

.pagination {
  display: flex;
  padding-left: 0;
  list-style: none;
  border-radius: .25rem;
}

.page-link {
  position: relative;
  display: block;
  padding: .5rem .75rem;
  margin-left: -1px;
  line-height: 1.25;
  color: #007bff;
  background-color: #fff;
  border: 1px solid #dee2e6;
}

.page-link:hover {
  z-index: 2;
  color: #0056b3;
  text-decoration: none;
  background-color: #e9ecef;
  border-color: #dee2e6;
}

.page-link:focus {
  z-index: 2;
  outline: 0;
  box-shadow: 0 0 0 .2rem rgba(0,123,255,.25);
}

.page-item:first-child .page-link {
  margin-left: 0;
  border-top-left-radius: .25rem;
  border-bottom-left-radius: .25rem;
}

.page-item:last-child .page-link {
  border-top-right-radius: .25rem;
  border-bottom-right-radius: .25rem;
}

.page-item.active .page-link {
  z-index: 1;
  color: #fff;
  background-color: #007bff;
  border-color: #007bff;
}

.page-item.disabled .page-link {
  color: #6c757d;
  pointer-events: none;
  cursor: auto;
  background-color: #fff;
  border-color: #dee2e6;
}

.pagination-lg .page-link {
  padding: .75rem 1.5rem;
  font-size: 1.25rem;
  line-height: 1.5;
}

.pagination-lg .page-item:first-child .page-link {
  border-top-left-radius: .3rem;
  border-bottom-left-radius: .3rem;
}

.pagination-lg .page-item:last-child .page-link {
  border-top-right-radius: .3rem;
  border-bottom-right-radius: .3rem;
}

.pagination-sm .page-link {
  padding: .25rem .5rem;
  font-size: .875rem;
  line-height: 1.5;
}

.pagination-sm .page-item:first-child .page-link {
  border-top-left-radius: .2rem;
  border-bottom-left-radius: .2rem;
}

.pagination-sm .page-item:last-child .page-link {
  border-top-right-radius: .2rem;
  border-bottom-right-radius: .2rem;
}

.badge {
  display: inline-block;
  padding: .25em .4em;
  font-size: 75%;
  font-weight: 700;
  line-height: 1;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: .25rem;
  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}

@media (prefers-reduced-motion:reduce) {
  .badge {
    transition: none;
  }
}

a.badge:focus,a.badge:hover {
  text-decoration: none;
}

.badge:empty {
  display: none;
}

.btn .badge {
  position: relative;
  top: -1px;
}

.badge-pill {
  padding-right: .6em;
  padding-left: .6em;
  border-radius: 10rem;
}

.badge-primary {
  color: #fff;
  background-color: #007bff;
}

a.badge-primary:focus,a.badge-primary:hover {
  color: #fff;
  background-color: #0062cc;
}

a.badge-primary.focus,a.badge-primary:focus {
  outline: 0;
  box-shadow: 0 0 0 .2rem rgba(0,123,255,.5);
}

.badge-secondary {
  color: #fff;
  background-color: #6c757d;
}

a.badge-secondary:focus,a.badge-secondary:hover {
  color: #fff;
  background-color: #545b62;
}

a.badge-secondary.focus,a.badge-secondary:focus {
  outline: 0;
  box-shadow: 0 0 0 .2rem rgba(108,117,125,.5);
}

.badge-success {
  color: #fff;
  background-color: #28a745;
}

a.badge-success:focus,a.badge-success:hover {
  color: #fff;
  background-color: #1e7e34;
}

a.badge-success.focus,a.badge-success:focus {
  outline: 0;
  box-shadow: 0 0 0 .2rem rgba(40,167,69,.5);
}

.badge-info {
  color: #fff;
  background-color: #17a2b8;
}

a.badge-info:focus,a.badge-info:hover {
  color: #fff;
  background-color: #117a8b;
}

a.badge-info.focus,a.badge-info:focus {
  outline: 0;
  box-shadow: 0 0 0 .2rem rgba(23,162,184,.5);
}

.badge-warning {
  color: #212529;
  background-color: #ffc107;
}

a.badge-warning:focus,a.badge-warning:hover {
  color: #212529;
  background-color: #d39e00;
}

a.badge-warning.focus,a.badge-warning:focus {
  outline: 0;
  box-shadow: 0 0 0 .2rem rgba(255,193,7,.5);
}

.badge-danger {
  color: #fff;
  background-color: #dc3545;
}

a.badge-danger:focus,a.badge-danger:hover {
  color: #fff;
  background-color: #bd2130;
}

a.badge-danger.focus,a.badge-danger:focus {
  outline: 0;
  box-shadow: 0 0 0 .2rem rgba(220,53,69,.5);
}

.badge-light {
  color: #212529;
  background-color: #f8f9fa;
}

a.badge-light:focus,a.badge-light:hover {
  color: #212529;
  background-color: #dae0e5;
}

a.badge-light.focus,a.badge-light:focus {
  outline: 0;
  box-shadow: 0 0 0 .2rem rgba(248,249,250,.5);
}

.badge-dark {
  color: #fff;
  background-color: #343a40;
}

a.badge-dark:focus,a.badge-dark:hover {
  color: #fff;
  background-color: #1d2124;
}

a.badge-dark.focus,a.badge-dark:focus {
  outline: 0;
  box-shadow: 0 0 0 .2rem rgba(52,58,64,.5);
}

.jumbotron {
  padding: 2rem 1rem;
  margin-bottom: 2rem;
  background-color: #e9ecef;
  border-radius: .3rem;
}

@media (min-width:576px) {
  .jumbotron {
    padding: 4rem 2rem;
  }
}

.jumbotron-fluid {
  padding-right: 0;
  padding-left: 0;
  border-radius: 0;
}

.alert {
  position: relative;
  padding: .75rem 1.25rem;
  margin-bottom: 1rem;
  border: 1px solid transparent;
  border-radius: .25rem;
}

.alert-heading {
  color: inherit;
}

.alert-link {
  font-weight: 700;
}

.alert-dismissible {
  padding-right: 4rem;
}

.alert-dismissible .close {
  position: absolute;
  top: 0;
  right: 0;
  padding: .75rem 1.25rem;
  color: inherit;
}

.alert-primary {
  color: #004085;
  background-color: #cce5ff;
  border-color: #b8daff;
}

.alert-primary hr {
  border-top-color: #9fcdff;
}

.alert-primary .alert-link {
  color: #002752;
}

.alert-secondary {
  color: #383d41;
  background-color: #e2e3e5;
  border-color: #d6d8db;
}

.alert-secondary hr {
  border-top-color: #c8cbcf;
}

.alert-secondary .alert-link {
  color: #202326;
}

.alert-success {
  color: #155724;
  background-color: #d4edda;
  border-color: #c3e6cb;
}

.alert-success hr {
  border-top-color: #b1dfbb;
}

.alert-success .alert-link {
  color: #0b2e13;
}

.alert-info {
  color: #0c5460;
  background-color: #d1ecf1;
  border-color: #bee5eb;
}

.alert-info hr {
  border-top-color: #abdde5;
}

.alert-info .alert-link {
  color: #062c33;
}

.alert-warning {
  color: #856404;
  background-color: #fff3cd;
  border-color: #ffeeba;
}

.alert-warning hr {
  border-top-color: #ffe8a1;
}

.alert-warning .alert-link {
  color: #533f03;
}

.alert-danger {
  color: #721c24;
  background-color: #f8d7da;
  border-color: #f5c6cb;
}

.alert-danger hr {
  border-top-color: #f1b0b7;
}

.alert-danger .alert-link {
  color: #491217;
}

.alert-light {
  color: #818182;
  background-color: #fefefe;
  border-color: #fdfdfe;
}

.alert-light hr {
  border-top-color: #ececf6;
}

.alert-light .alert-link {
  color: #686868;
}

.alert-dark {
  color: #1b1e21;
  background-color: #d6d8d9;
  border-color: #c6c8ca;
}

.alert-dark hr {
  border-top-color: #b9bbbe;
}

.alert-dark .alert-link {
  color: #040505;
}

@-webkit-keyframes progress-bar-stripes {
  from {
    background-position: 1rem 0;
  }

  to {
    background-position: 0 0;
  }
}

@keyframes progress-bar-stripes {
  from {
    background-position: 1rem 0;
  }

  to {
    background-position: 0 0;
  }
}

.progress {
  display: flex;
  height: 1rem;
  overflow: hidden;
  font-size: .75rem;
  background-color: #e9ecef;
  border-radius: .25rem;
}

.progress-bar {
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #fff;
  text-align: center;
  white-space: nowrap;
  background-color: #007bff;
  transition: width .6s ease;
}

.progress-bar-striped {
  background-image: linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);
  background-size: 1rem 1rem;
}

.progress-bar-animated {
  -webkit-animation: 1s linear infinite progress-bar-stripes;
  animation: 1s linear infinite progress-bar-stripes;
}

.media {
  display: flex;
  align-items: flex-start;
}

.media-body {
  flex: 1;
}

.list-group {
  display: flex;
  flex-direction: column;
  padding-left: 0;
  margin-bottom: 0;
}

.list-group-item-action {
  width: 100%;
  color: #495057;
  text-align: inherit;
}

.list-group-item-action:focus,.list-group-item-action:hover {
  z-index: 1;
  color: #495057;
  text-decoration: none;
  background-color: #f8f9fa;
}

.list-group-item-action:active {
  color: #212529;
  background-color: #e9ecef;
}

.list-group-item {
  position: relative;
  display: block;
  padding: .75rem 1.25rem;
  margin-bottom: -1px;
  background-color: #fff;
  border: 1px solid rgba(0,0,0,.125);
}

.list-group-item:first-child {
  border-top-left-radius: .25rem;
  border-top-right-radius: .25rem;
}

.list-group-item:last-child {
  margin-bottom: 0;
  border-bottom-right-radius: .25rem;
  border-bottom-left-radius: .25rem;
}

.list-group-item.disabled,.list-group-item:disabled {
  color: #6c757d;
  pointer-events: none;
  background-color: #fff;
}

.list-group-item.active {
  z-index: 2;
  color: #fff;
  background-color: #007bff;
  border-color: #007bff;
}

.list-group-horizontal {
  flex-direction: row;
}

.list-group-horizontal .list-group-item {
  margin-right: -1px;
  margin-bottom: 0;
}

.list-group-horizontal .list-group-item:first-child {
  border-top-left-radius: .25rem;
  border-bottom-left-radius: .25rem;
  border-top-right-radius: 0;
}

.list-group-horizontal .list-group-item:last-child {
  margin-right: 0;
  border-top-right-radius: .25rem;
  border-bottom-right-radius: .25rem;
  border-bottom-left-radius: 0;
}

@media (min-width:576px) {
  .list-group-horizontal-sm {
    flex-direction: row;
  }

  .list-group-horizontal-sm .list-group-item {
    margin-right: -1px;
    margin-bottom: 0;
  }

  .list-group-horizontal-sm .list-group-item:first-child {
    border-top-left-radius: .25rem;
    border-bottom-left-radius: .25rem;
    border-top-right-radius: 0;
  }

  .list-group-horizontal-sm .list-group-item:last-child {
    margin-right: 0;
    border-top-right-radius: .25rem;
    border-bottom-right-radius: .25rem;
    border-bottom-left-radius: 0;
  }
}

@media (min-width:768px) {
  .list-group-horizontal-md {
    flex-direction: row;
  }

  .list-group-horizontal-md .list-group-item {
    margin-right: -1px;
    margin-bottom: 0;
  }

  .list-group-horizontal-md .list-group-item:first-child {
    border-top-left-radius: .25rem;
    border-bottom-left-radius: .25rem;
    border-top-right-radius: 0;
  }

  .list-group-horizontal-md .list-group-item:last-child {
    margin-right: 0;
    border-top-right-radius: .25rem;
    border-bottom-right-radius: .25rem;
    border-bottom-left-radius: 0;
  }
}

@media (min-width:992px) {
  .list-group-horizontal-lg {
    flex-direction: row;
  }

  .list-group-horizontal-lg .list-group-item {
    margin-right: -1px;
    margin-bottom: 0;
  }

  .list-group-horizontal-lg .list-group-item:first-child {
    border-top-left-radius: .25rem;
    border-bottom-left-radius: .25rem;
    border-top-right-radius: 0;
  }

  .list-group-horizontal-lg .list-group-item:last-child {
    margin-right: 0;
    border-top-right-radius: .25rem;
    border-bottom-right-radius: .25rem;
    border-bottom-left-radius: 0;
  }
}

@media (min-width:1200px) {
  .list-group-horizontal-xl {
    flex-direction: row;
  }

  .list-group-horizontal-xl .list-group-item {
    margin-right: -1px;
    margin-bottom: 0;
  }

  .list-group-horizontal-xl .list-group-item:first-child {
    border-top-left-radius: .25rem;
    border-bottom-left-radius: .25rem;
    border-top-right-radius: 0;
  }

  .list-group-horizontal-xl .list-group-item:last-child {
    margin-right: 0;
    border-top-right-radius: .25rem;
    border-bottom-right-radius: .25rem;
    border-bottom-left-radius: 0;
  }
}

.list-group-flush .list-group-item {
  border-right: 0;
  border-left: 0;
  border-radius: 0;
}

.list-group-flush .list-group-item:last-child {
  margin-bottom: -1px;
}

.list-group-flush:first-child .list-group-item:first-child {
  border-top: 0;
}

.list-group-flush:last-child .list-group-item:last-child {
  margin-bottom: 0;
  border-bottom: 0;
}

.list-group-item-primary {
  color: #004085;
  background-color: #b8daff;
}

.list-group-item-primary.list-group-item-action:focus,.list-group-item-primary.list-group-item-action:hover {
  color: #004085;
  background-color: #9fcdff;
}

.list-group-item-primary.list-group-item-action.active {
  color: #fff;
  background-color: #004085;
  border-color: #004085;
}

.list-group-item-secondary {
  color: #383d41;
  background-color: #d6d8db;
}

.list-group-item-secondary.list-group-item-action:focus,.list-group-item-secondary.list-group-item-action:hover {
  color: #383d41;
  background-color: #c8cbcf;
}

.list-group-item-secondary.list-group-item-action.active {
  color: #fff;
  background-color: #383d41;
  border-color: #383d41;
}

.list-group-item-success {
  color: #155724;
  background-color: #c3e6cb;
}

.list-group-item-success.list-group-item-action:focus,.list-group-item-success.list-group-item-action:hover {
  color: #155724;
  background-color: #b1dfbb;
}

.list-group-item-success.list-group-item-action.active {
  color: #fff;
  background-color: #155724;
  border-color: #155724;
}

.list-group-item-info {
  color: #0c5460;
  background-color: #bee5eb;
}

.list-group-item-info.list-group-item-action:focus,.list-group-item-info.list-group-item-action:hover {
  color: #0c5460;
  background-color: #abdde5;
}

.list-group-item-info.list-group-item-action.active {
  color: #fff;
  background-color: #0c5460;
  border-color: #0c5460;
}

.list-group-item-warning {
  color: #856404;
  background-color: #ffeeba;
}

.list-group-item-warning.list-group-item-action:focus,.list-group-item-warning.list-group-item-action:hover {
  color: #856404;
  background-color: #ffe8a1;
}

.list-group-item-warning.list-group-item-action.active {
  color: #fff;
  background-color: #856404;
  border-color: #856404;
}

.list-group-item-danger {
  color: #721c24;
  background-color: #f5c6cb;
}

.list-group-item-danger.list-group-item-action:focus,.list-group-item-danger.list-group-item-action:hover {
  color: #721c24;
  background-color: #f1b0b7;
}

.list-group-item-danger.list-group-item-action.active {
  color: #fff;
  background-color: #721c24;
  border-color: #721c24;
}

.list-group-item-light {
  color: #818182;
  background-color: #fdfdfe;
}

.list-group-item-light.list-group-item-action:focus,.list-group-item-light.list-group-item-action:hover {
  color: #818182;
  background-color: #ececf6;
}

.list-group-item-light.list-group-item-action.active {
  color: #fff;
  background-color: #818182;
  border-color: #818182;
}

.list-group-item-dark {
  color: #1b1e21;
  background-color: #c6c8ca;
}

.list-group-item-dark.list-group-item-action:focus,.list-group-item-dark.list-group-item-action:hover {
  color: #1b1e21;
  background-color: #b9bbbe;
}

.list-group-item-dark.list-group-item-action.active {
  color: #fff;
  background-color: #1b1e21;
  border-color: #1b1e21;
}

.close {
  float: right;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1;
  color: #000;
  text-shadow: 0 1px 0 #fff;
  opacity: .5;
}

.close:hover {
  color: #000;
  text-decoration: none;
}

.close:not(:disabled):not(.disabled):focus,.close:not(:disabled):not(.disabled):hover {
  opacity: .75;
}

button.close {
  padding: 0;
  background-color: transparent;
  border: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

a.close.disabled {
  pointer-events: none;
}

.toast {
  max-width: 350px;
  overflow: hidden;
  font-size: .875rem;
  background-color: rgba(255,255,255,.85);
  background-clip: padding-box;
  border: 1px solid rgba(0,0,0,.1);
  box-shadow: 0 .25rem .75rem rgba(0,0,0,.1);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  opacity: 0;
  border-radius: .25rem;
}

.toast:not(:last-child) {
  margin-bottom: .75rem;
}

.toast.showing {
  opacity: 1;
}

.toast.show {
  display: block;
  opacity: 1;
}

.toast.hide {
  display: none;
}

.toast-header {
  display: flex;
  align-items: center;
  padding: .25rem .75rem;
  color: #6c757d;
  background-color: rgba(255,255,255,.85);
  background-clip: padding-box;
  border-bottom: 1px solid rgba(0,0,0,.05);
}

.toast-body {
  padding: .75rem;
}

.modal-open {
  overflow: hidden;
}

.modal-open .modal {
  overflow-x: hidden;
  overflow-y: auto;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1050;
  display: none;
  width: 100%;
  height: 100%;
  overflow: hidden;
  outline: 0;
}

.modal-dialog {
  position: relative;
  width: auto;
  margin: .5rem;
  pointer-events: none;
}

.modal.fade .modal-dialog {
  transition: transform .3s ease-out;
  transform: translate(0,-50px);
}

@media (prefers-reduced-motion:reduce) {
  .progress-bar {
    transition: none;
  }

  .progress-bar-animated {
    -webkit-animation: none;
    animation: none;
  }

  .modal.fade .modal-dialog {
    transition: none;
  }
}

.modal.show .modal-dialog {
  transform: none;
}

.modal-dialog-scrollable {
  display: flex;
  max-height: calc(100% - 1rem);
}

.modal-dialog-scrollable .modal-content {
  max-height: calc(100vh - 1rem);
  overflow: hidden;
}

.modal-dialog-scrollable .modal-footer,.modal-dialog-scrollable .modal-header {
  flex-shrink: 0;
}

.modal-dialog-scrollable .modal-body {
  overflow-y: auto;
}

.modal-dialog-centered {
  display: flex;
  align-items: center;
  min-height: calc(100% - 1rem);
}

.modal-dialog-centered::before {
  display: block;
  height: calc(100vh - 1rem);
  content: "";
}

.modal-dialog-centered.modal-dialog-scrollable {
  flex-direction: column;
  justify-content: center;
  height: 100%;
}

.modal-dialog-centered.modal-dialog-scrollable .modal-content {
  max-height: none;
}

.modal-dialog-centered.modal-dialog-scrollable::before {
  content: none;
}

.modal-content {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  pointer-events: auto;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(0,0,0,.2);
  border-radius: .3rem;
  outline: 0;
}

.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1040;
  width: 100vw;
  height: 100vh;
  background-color: #000;
}

.modal-backdrop.fade {
  opacity: 0;
}

.modal-backdrop.show {
  opacity: .5;
}

.modal-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 1rem;
  border-bottom: 1px solid #dee2e6;
  border-top-left-radius: .3rem;
  border-top-right-radius: .3rem;
}

.modal-header .close {
  padding: 1rem;
  margin: -1rem -1rem -1rem auto;
}

.modal-title {
  margin-bottom: 0;
  line-height: 1.5;
}

.modal-body {
  position: relative;
  flex: 1 1 auto;
  padding: 1rem;
}

.modal-footer {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 1rem;
  border-top: 1px solid #dee2e6;
  border-bottom-right-radius: .3rem;
  border-bottom-left-radius: .3rem;
}

.modal-footer>:not(:first-child) {
  margin-left: .25rem;
}

.modal-footer>:not(:last-child) {
  margin-right: .25rem;
}

.modal-scrollbar-measure {
  position: absolute;
  top: -9999px;
  width: 50px;
  height: 50px;
  overflow: scroll;
}

@media (min-width:576px) {
  .modal-dialog {
    max-width: 500px;
    margin: 1.75rem auto;
  }

  .modal-dialog-scrollable {
    max-height: calc(100% - 3.5rem);
  }

  .modal-dialog-scrollable .modal-content {
    max-height: calc(100vh - 3.5rem);
  }

  .modal-dialog-centered {
    min-height: calc(100% - 3.5rem);
  }

  .modal-dialog-centered::before {
    height: calc(100vh - 3.5rem);
  }

  .modal-sm {
    max-width: 300px;
  }
}

@media (min-width:992px) {
  .modal-lg,.modal-xl {
    max-width: 800px;
  }
}

@media (min-width:1200px) {
  .modal-xl {
    max-width: 1140px;
  }
}

.tooltip {
  position: absolute;
  z-index: 1070;
  display: block;
  margin: 0;
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
  text-align: left;
  text-align: start;
  text-decoration: none;
  text-shadow: none;
  text-transform: none;
  letter-spacing: normal;
  word-break: normal;
  word-spacing: normal;
  white-space: normal;
  line-break: auto;
  font-size: .875rem;
  word-wrap: break-word;
  opacity: 0;
}

.tooltip.show {
  opacity: .9;
}

.tooltip .arrow {
  position: absolute;
  display: block;
  width: .8rem;
  height: .4rem;
}

.tooltip .arrow::before {
  position: absolute;
  content: "";
  border-color: transparent;
  border-style: solid;
}

.bs-tooltip-auto[x-placement^=top],.bs-tooltip-top {
  padding: .4rem 0;
}

.bs-tooltip-auto[x-placement^=top] .arrow,.bs-tooltip-top .arrow {
  bottom: 0;
}

.bs-tooltip-auto[x-placement^=top] .arrow::before,.bs-tooltip-top .arrow::before {
  top: 0;
  border-width: .4rem .4rem 0;
  border-top-color: #000;
}

.bs-tooltip-auto[x-placement^=right],.bs-tooltip-right {
  padding: 0 .4rem;
}

.bs-tooltip-auto[x-placement^=right] .arrow,.bs-tooltip-right .arrow {
  left: 0;
  width: .4rem;
  height: .8rem;
}

.bs-tooltip-auto[x-placement^=right] .arrow::before,.bs-tooltip-right .arrow::before {
  right: 0;
  border-width: .4rem .4rem .4rem 0;
  border-right-color: #000;
}

.bs-tooltip-auto[x-placement^=bottom],.bs-tooltip-bottom {
  padding: .4rem 0;
}

.bs-tooltip-auto[x-placement^=bottom] .arrow,.bs-tooltip-bottom .arrow {
  top: 0;
}

.bs-tooltip-auto[x-placement^=bottom] .arrow::before,.bs-tooltip-bottom .arrow::before {
  bottom: 0;
  border-width: 0 .4rem .4rem;
  border-bottom-color: #000;
}

.bs-tooltip-auto[x-placement^=left],.bs-tooltip-left {
  padding: 0 .4rem;
}

.bs-tooltip-auto[x-placement^=left] .arrow,.bs-tooltip-left .arrow {
  right: 0;
  width: .4rem;
  height: .8rem;
}

.bs-tooltip-auto[x-placement^=left] .arrow::before,.bs-tooltip-left .arrow::before {
  left: 0;
  border-width: .4rem 0 .4rem .4rem;
  border-left-color: #000;
}

.tooltip-inner {
  max-width: 200px;
  padding: .25rem .5rem;
  color: #fff;
  text-align: center;
  background-color: #000;
  border-radius: .25rem;
}

.popover {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1060;
  display: block;
  max-width: 276px;
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
  text-align: left;
  text-align: start;
  text-decoration: none;
  text-shadow: none;
  text-transform: none;
  letter-spacing: normal;
  word-break: normal;
  word-spacing: normal;
  white-space: normal;
  line-break: auto;
  font-size: .875rem;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(0,0,0,.2);
  border-radius: .3rem;
}

.popover .arrow {
  position: absolute;
  display: block;
  width: 1rem;
  height: .5rem;
  margin: 0 .3rem;
}

.popover .arrow::after,.popover .arrow::before {
  position: absolute;
  display: block;
  content: "";
  border-color: transparent;
  border-style: solid;
}

.bs-popover-auto[x-placement^=top],.bs-popover-top {
  margin-bottom: .5rem;
}

.bs-popover-auto[x-placement^=top]>.arrow,.bs-popover-top>.arrow {
  bottom: calc((.5rem + 1px) * -1);
}

.bs-popover-auto[x-placement^=top]>.arrow::before,.bs-popover-top>.arrow::before {
  bottom: 0;
  border-width: .5rem .5rem 0;
  border-top-color: rgba(0,0,0,.25);
}

.bs-popover-auto[x-placement^=top]>.arrow::after,.bs-popover-top>.arrow::after {
  bottom: 1px;
  border-width: .5rem .5rem 0;
  border-top-color: #fff;
}

.bs-popover-auto[x-placement^=right],.bs-popover-right {
  margin-left: .5rem;
}

.bs-popover-auto[x-placement^=right]>.arrow,.bs-popover-right>.arrow {
  left: calc((.5rem + 1px) * -1);
  width: .5rem;
  height: 1rem;
  margin: .3rem 0;
}

.bs-popover-auto[x-placement^=right]>.arrow::before,.bs-popover-right>.arrow::before {
  left: 0;
  border-width: .5rem .5rem .5rem 0;
  border-right-color: rgba(0,0,0,.25);
}

.bs-popover-auto[x-placement^=right]>.arrow::after,.bs-popover-right>.arrow::after {
  left: 1px;
  border-width: .5rem .5rem .5rem 0;
  border-right-color: #fff;
}

.bs-popover-auto[x-placement^=bottom],.bs-popover-bottom {
  margin-top: .5rem;
}

.bs-popover-auto[x-placement^=bottom]>.arrow,.bs-popover-bottom>.arrow {
  top: calc((.5rem + 1px) * -1);
}

.bs-popover-auto[x-placement^=bottom]>.arrow::before,.bs-popover-bottom>.arrow::before {
  top: 0;
  border-width: 0 .5rem .5rem;
  border-bottom-color: rgba(0,0,0,.25);
}

.bs-popover-auto[x-placement^=bottom]>.arrow::after,.bs-popover-bottom>.arrow::after {
  top: 1px;
  border-width: 0 .5rem .5rem;
  border-bottom-color: #fff;
}

.bs-popover-auto[x-placement^=bottom] .popover-header::before,.bs-popover-bottom .popover-header::before {
  position: absolute;
  top: 0;
  left: 50%;
  display: block;
  width: 1rem;
  margin-left: -.5rem;
  content: "";
  border-bottom: 1px solid #f7f7f7;
}

.bs-popover-auto[x-placement^=left],.bs-popover-left {
  margin-right: .5rem;
}

.bs-popover-auto[x-placement^=left]>.arrow,.bs-popover-left>.arrow {
  right: calc((.5rem + 1px) * -1);
  width: .5rem;
  height: 1rem;
  margin: .3rem 0;
}

.bs-popover-auto[x-placement^=left]>.arrow::before,.bs-popover-left>.arrow::before {
  right: 0;
  border-width: .5rem 0 .5rem .5rem;
  border-left-color: rgba(0,0,0,.25);
}

.bs-popover-auto[x-placement^=left]>.arrow::after,.bs-popover-left>.arrow::after {
  right: 1px;
  border-width: .5rem 0 .5rem .5rem;
  border-left-color: #fff;
}

.popover-header {
  padding: .5rem .75rem;
  margin-bottom: 0;
  font-size: 1rem;
  background-color: #f7f7f7;
  border-bottom: 1px solid #ebebeb;
  border-top-left-radius: calc(.3rem - 1px);
  border-top-right-radius: calc(.3rem - 1px);
}

.popover-header:empty {
  display: none;
}

.popover-body {
  padding: .5rem .75rem;
  color: #212529;
}

.carousel {
  position: relative;
}

.carousel.pointer-event {
  touch-action: pan-y;
}

.carousel-inner {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.carousel-inner::after {
  display: block;
  clear: both;
  content: "";
}

.carousel-item {
  position: relative;
  display: none;
  float: left;
  width: 100%;
  margin-right: -100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  transition: transform .6s ease-in-out;
}

.carousel-item-next,.carousel-item-prev,.carousel-item.active {
  display: block;
}

.active.carousel-item-right,.carousel-item-next:not(.carousel-item-left) {
  transform: translateX(100%);
}

.active.carousel-item-left,.carousel-item-prev:not(.carousel-item-right) {
  transform: translateX(-100%);
}

.carousel-fade .carousel-item {
  opacity: 0;
  transition-property: opacity;
  transform: none;
}

.carousel-fade .carousel-item-next.carousel-item-left,.carousel-fade .carousel-item-prev.carousel-item-right,.carousel-fade .carousel-item.active {
  z-index: 1;
  opacity: 1;
}

.carousel-fade .active.carousel-item-left,.carousel-fade .active.carousel-item-right {
  z-index: 0;
  opacity: 0;
  transition: 0s .6s opacity;
}

@media (prefers-reduced-motion:reduce) {
  .carousel-fade .active.carousel-item-left,.carousel-fade .active.carousel-item-right,.carousel-item {
    transition: none;
  }
}

.carousel-control-next,.carousel-control-prev {
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15%;
  color: #fff;
  text-align: center;
  opacity: .5;
  transition: opacity .15s ease;
}

.carousel-control-next:focus,.carousel-control-next:hover,.carousel-control-prev:focus,.carousel-control-prev:hover {
  color: #fff;
  text-decoration: none;
  outline: 0;
  opacity: .9;
}

.carousel-control-prev {
  left: 0;
}

.carousel-control-next {
  right: 0;
}

.carousel-control-next-icon,.carousel-control-prev-icon {
  display: inline-block;
  width: 20px;
  height: 20px;
  background: 50%/100% 100% no-repeat;
}

.carousel-control-prev-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 8 8'%3e%3cpath d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3e%3c/svg%3e");
}

.carousel-control-next-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 8 8'%3e%3cpath d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3e%3c/svg%3e");
}

.carousel-indicators {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 15;
  display: flex;
  justify-content: center;
  padding-left: 0;
  margin-right: 15%;
  margin-left: 15%;
  list-style: none;
}

.carousel-indicators li {
  box-sizing: content-box;
  flex: 0 1 auto;
  width: 30px;
  height: 3px;
  margin-right: 3px;
  margin-left: 3px;
  text-indent: -999px;
  cursor: pointer;
  background-color: #fff;
  background-clip: padding-box;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  opacity: .5;
  transition: opacity .6s ease;
}

@media (prefers-reduced-motion:reduce) {
  .carousel-control-next,.carousel-control-prev,.carousel-indicators li {
    transition: none;
  }
}

.carousel-indicators .active {
  opacity: 1;
}

.carousel-caption {
  position: absolute;
  right: 15%;
  bottom: 20px;
  left: 15%;
  z-index: 10;
  padding-top: 20px;
  padding-bottom: 20px;
  color: #fff;
  text-align: center;
}

@-webkit-keyframes spinner-border {
  to {
    transform: rotate(360deg);
  }
}

@keyframes spinner-border {
  to {
    transform: rotate(360deg);
  }
}

.spinner-border {
  display: inline-block;
  width: 2rem;
  height: 2rem;
  vertical-align: text-bottom;
  border: .25em solid currentColor;
  border-right-color: transparent;
  border-radius: 50%;
  -webkit-animation: .75s linear infinite spinner-border;
  animation: .75s linear infinite spinner-border;
}

.spinner-border-sm {
  width: 1rem;
  height: 1rem;
  border-width: .2em;
}

@-webkit-keyframes spinner-grow {
  0% {
    transform: scale(0);
  }

  50% {
    opacity: 1;
  }
}

@keyframes spinner-grow {
  0% {
    transform: scale(0);
  }

  50% {
    opacity: 1;
  }
}

.spinner-grow {
  display: inline-block;
  width: 2rem;
  height: 2rem;
  vertical-align: text-bottom;
  background-color: currentColor;
  border-radius: 50%;
  opacity: 0;
  -webkit-animation: .75s linear infinite spinner-grow;
  animation: .75s linear infinite spinner-grow;
}

.spinner-grow-sm {
  width: 1rem;
  height: 1rem;
}

.align-baseline {
  vertical-align: baseline!important;
}

.align-top {
  vertical-align: top!important;
}

.align-middle {
  vertical-align: middle!important;
}

.align-bottom {
  vertical-align: bottom!important;
}

.align-text-bottom {
  vertical-align: text-bottom!important;
}

.align-text-top {
  vertical-align: text-top!important;
}

.bg-primary {
  background-color: #007bff!important;
}

a.bg-primary:focus,a.bg-primary:hover,button.bg-primary:focus,button.bg-primary:hover {
  background-color: #0062cc!important;
}

.bg-secondary {
  background-color: #6c757d!important;
}

a.bg-secondary:focus,a.bg-secondary:hover,button.bg-secondary:focus,button.bg-secondary:hover {
  background-color: #545b62!important;
}

.bg-success {
  background-color: #28a745!important;
}

a.bg-success:focus,a.bg-success:hover,button.bg-success:focus,button.bg-success:hover {
  background-color: #1e7e34!important;
}

.bg-info {
  background-color: #17a2b8!important;
}

a.bg-info:focus,a.bg-info:hover,button.bg-info:focus,button.bg-info:hover {
  background-color: #117a8b!important;
}

.bg-warning {
  background-color: #ffc107!important;
}

a.bg-warning:focus,a.bg-warning:hover,button.bg-warning:focus,button.bg-warning:hover {
  background-color: #d39e00!important;
}

.bg-danger {
  background-color: #dc3545!important;
}

a.bg-danger:focus,a.bg-danger:hover,button.bg-danger:focus,button.bg-danger:hover {
  background-color: #bd2130!important;
}

.bg-light {
  background-color: #f8f9fa!important;
}

a.bg-light:focus,a.bg-light:hover,button.bg-light:focus,button.bg-light:hover {
  background-color: #dae0e5!important;
}

.bg-dark {
  background-color: #343a40!important;
}

a.bg-dark:focus,a.bg-dark:hover,button.bg-dark:focus,button.bg-dark:hover {
  background-color: #1d2124!important;
}

.bg-white {
  background-color: #fff!important;
}

.bg-transparent {
  background-color: transparent!important;
}

.border {
  border: 1px solid #dee2e6!important;
}

.border-top {
  border-top: 1px solid #dee2e6!important;
}

.border-right {
  border-right: 1px solid #dee2e6!important;
}

.border-bottom {
  border-bottom: 1px solid #dee2e6!important;
}

.border-left {
  border-left: 1px solid #dee2e6!important;
}

.border-0 {
  border: 0!important;
}

.border-top-0 {
  border-top: 0!important;
}

.border-right-0 {
  border-right: 0!important;
}

.border-bottom-0 {
  border-bottom: 0!important;
}

.border-left-0 {
  border-left: 0!important;
}

.border-primary {
  border-color: #007bff!important;
}

.border-secondary {
  border-color: #6c757d!important;
}

.border-success {
  border-color: #28a745!important;
}

.border-info {
  border-color: #17a2b8!important;
}

.border-warning {
  border-color: #ffc107!important;
}

.border-danger {
  border-color: #dc3545!important;
}

.border-light {
  border-color: #f8f9fa!important;
}

.border-dark {
  border-color: #343a40!important;
}

.border-white {
  border-color: #fff!important;
}

.rounded-sm {
  border-radius: .2rem!important;
}

.rounded {
  border-radius: .25rem!important;
}

.rounded-top {
  border-top-left-radius: .25rem!important;
  border-top-right-radius: .25rem!important;
}

.rounded-right {
  border-top-right-radius: .25rem!important;
  border-bottom-right-radius: .25rem!important;
}

.rounded-bottom {
  border-bottom-right-radius: .25rem!important;
  border-bottom-left-radius: .25rem!important;
}

.rounded-left {
  border-top-left-radius: .25rem!important;
  border-bottom-left-radius: .25rem!important;
}

.rounded-lg {
  border-radius: .3rem!important;
}

.rounded-circle {
  border-radius: 50%!important;
}

.rounded-pill {
  border-radius: 50rem!important;
}

.rounded-0 {
  border-radius: 0!important;
}

.clearfix::after {
  display: block;
  clear: both;
  content: "";
}

.d-none {
  display: none!important;
}

.d-inline {
  display: inline!important;
}

.d-inline-block {
  display: inline-block!important;
}

.d-block {
  display: block!important;
}

.d-table {
  display: table!important;
}

.d-table-row {
  display: table-row!important;
}

.d-table-cell {
  display: table-cell!important;
}

.d-flex {
  display: flex!important;
}

.d-inline-flex {
  display: inline-flex!important;
}

@media (min-width:576px) {
  .d-sm-none {
    display: none!important;
  }

  .d-sm-inline {
    display: inline!important;
  }

  .d-sm-inline-block {
    display: inline-block!important;
  }

  .d-sm-block {
    display: block!important;
  }

  .d-sm-table {
    display: table!important;
  }

  .d-sm-table-row {
    display: table-row!important;
  }

  .d-sm-table-cell {
    display: table-cell!important;
  }

  .d-sm-flex {
    display: flex!important;
  }

  .d-sm-inline-flex {
    display: inline-flex!important;
  }
}

@media (min-width:768px) {
  .d-md-none {
    display: none!important;
  }

  .d-md-inline {
    display: inline!important;
  }

  .d-md-inline-block {
    display: inline-block!important;
  }

  .d-md-block {
    display: block!important;
  }

  .d-md-table {
    display: table!important;
  }

  .d-md-table-row {
    display: table-row!important;
  }

  .d-md-table-cell {
    display: table-cell!important;
  }

  .d-md-flex {
    display: flex!important;
  }

  .d-md-inline-flex {
    display: inline-flex!important;
  }
}

@media (min-width:992px) {
  .d-lg-none {
    display: none!important;
  }

  .d-lg-inline {
    display: inline!important;
  }

  .d-lg-inline-block {
    display: inline-block!important;
  }

  .d-lg-block {
    display: block!important;
  }

  .d-lg-table {
    display: table!important;
  }

  .d-lg-table-row {
    display: table-row!important;
  }

  .d-lg-table-cell {
    display: table-cell!important;
  }

  .d-lg-flex {
    display: flex!important;
  }

  .d-lg-inline-flex {
    display: inline-flex!important;
  }
}

@media (min-width:1200px) {
  .d-xl-none {
    display: none!important;
  }

  .d-xl-inline {
    display: inline!important;
  }

  .d-xl-inline-block {
    display: inline-block!important;
  }

  .d-xl-block {
    display: block!important;
  }

  .d-xl-table {
    display: table!important;
  }

  .d-xl-table-row {
    display: table-row!important;
  }

  .d-xl-table-cell {
    display: table-cell!important;
  }

  .d-xl-flex {
    display: flex!important;
  }

  .d-xl-inline-flex {
    display: inline-flex!important;
  }
}

@media print {
  .d-print-none {
    display: none!important;
  }

  .d-print-inline {
    display: inline!important;
  }

  .d-print-inline-block {
    display: inline-block!important;
  }

  .d-print-block {
    display: block!important;
  }

  .d-print-table {
    display: table!important;
  }

  .d-print-table-row {
    display: table-row!important;
  }

  .d-print-table-cell {
    display: table-cell!important;
  }

  .d-print-flex {
    display: flex!important;
  }

  .d-print-inline-flex {
    display: inline-flex!important;
  }
}

.embed-responsive {
  position: relative;
  display: block;
  width: 100%;
  padding: 0;
  overflow: hidden;
}

.embed-responsive::before {
  display: block;
  content: "";
}

.embed-responsive .embed-responsive-item,.embed-responsive embed,.embed-responsive iframe,.embed-responsive object,.embed-responsive video {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
}

.embed-responsive-21by9::before {
  padding-top: 42.857143%;
}

.embed-responsive-16by9::before {
  padding-top: 56.25%;
}

.embed-responsive-4by3::before {
  padding-top: 75%;
}

.embed-responsive-1by1::before {
  padding-top: 100%;
}

.flex-row {
  flex-direction: row!important;
}

.flex-column {
  flex-direction: column!important;
}

.flex-row-reverse {
  flex-direction: row-reverse!important;
}

.flex-column-reverse {
  flex-direction: column-reverse!important;
}

.flex-wrap {
  flex-wrap: wrap!important;
}

.flex-nowrap {
  flex-wrap: nowrap!important;
}

.flex-wrap-reverse {
  flex-wrap: wrap-reverse!important;
}

.flex-fill {
  flex: 1 1 auto!important;
}

.flex-grow-0 {
  flex-grow: 0!important;
}

.flex-grow-1 {
  flex-grow: 1!important;
}

.flex-shrink-0 {
  flex-shrink: 0!important;
}

.flex-shrink-1 {
  flex-shrink: 1!important;
}

.justify-content-start {
  justify-content: flex-start!important;
}

.justify-content-end {
  justify-content: flex-end!important;
}

.justify-content-center {
  justify-content: center!important;
}

.justify-content-between {
  justify-content: space-between!important;
}

.justify-content-around {
  justify-content: space-around!important;
}

.align-items-start {
  align-items: flex-start!important;
}

.align-items-end {
  align-items: flex-end!important;
}

.align-items-center {
  align-items: center!important;
}

.align-items-baseline {
  align-items: baseline!important;
}

.align-items-stretch {
  align-items: stretch!important;
}

.align-content-start {
  align-content: flex-start!important;
}

.align-content-end {
  align-content: flex-end!important;
}

.align-content-center {
  align-content: center!important;
}

.align-content-between {
  align-content: space-between!important;
}

.align-content-around {
  align-content: space-around!important;
}

.align-content-stretch {
  align-content: stretch!important;
}

.align-self-auto {
  align-self: auto!important;
}

.align-self-start {
  align-self: flex-start!important;
}

.align-self-end {
  align-self: flex-end!important;
}

.align-self-center {
  align-self: center!important;
}

.align-self-baseline {
  align-self: baseline!important;
}

.align-self-stretch {
  align-self: stretch!important;
}

.float-left {
  float: left!important;
}

.float-right {
  float: right!important;
}

.float-none {
  float: none!important;
}

.overflow-auto {
  overflow: auto!important;
}

.overflow-hidden {
  overflow: hidden!important;
}

.position-static {
  position: static!important;
}

.position-relative {
  position: relative!important;
}

.position-absolute {
  position: absolute!important;
}

.position-fixed {
  position: fixed!important;
}

.position-sticky {
  position: -webkit-sticky!important;
  position: sticky!important;
}

.fixed-top {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1030;
}

.fixed-bottom {
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1030;
}

@supports ((position:-webkit-sticky) or (position:sticky)) {
  .sticky-top {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 1020;
  }
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0,0,0,0);
  white-space: nowrap;
  border: 0;
}

.sr-only-focusable:active,.sr-only-focusable:focus {
  position: static;
  width: auto;
  height: auto;
  overflow: visible;
  clip: auto;
  white-space: normal;
}

.shadow-sm {
  box-shadow: 0 .125rem .25rem rgba(0,0,0,.075)!important;
}

.shadow {
  box-shadow: 0 .5rem 1rem rgba(0,0,0,.15)!important;
}

.shadow-lg {
  box-shadow: 0 1rem 3rem rgba(0,0,0,.175)!important;
}

.shadow-none {
  box-shadow: none!important;
}

.w-25 {
  width: 25%!important;
}

.w-50 {
  width: 50%!important;
}

.w-75 {
  width: 75%!important;
}

.w-100 {
  width: 100%!important;
}

.w-auto {
  width: auto!important;
}

.h-25 {
  height: 25%!important;
}

.h-50 {
  height: 50%!important;
}

.h-75 {
  height: 75%!important;
}

.h-100 {
  height: 100%!important;
}

.h-auto {
  height: auto!important;
}

.mw-100 {
  max-width: 100%!important;
}

.mh-100 {
  max-height: 100%!important;
}

.min-vw-100 {
  min-width: 100vw!important;
}

.min-vh-100 {
  min-height: 100vh!important;
}

.vw-100 {
  width: 100vw!important;
}

.vh-100 {
  height: 100vh!important;
}

.stretched-link::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  pointer-events: auto;
  content: "";
  background-color: rgba(0,0,0,0);
}

.m-0 {
  margin: 0!important;
}

.mt-0,.my-0 {
  margin-top: 0!important;
}

.mr-0,.mx-0 {
  margin-right: 0!important;
}

.mb-0,.my-0 {
  margin-bottom: 0!important;
}

.ml-0,.mx-0 {
  margin-left: 0!important;
}

.m-1 {
  margin: .25rem!important;
}

.mt-1,.my-1 {
  margin-top: .25rem!important;
}

.mr-1,.mx-1 {
  margin-right: .25rem!important;
}

.mb-1,.my-1 {
  margin-bottom: .25rem!important;
}

.ml-1,.mx-1 {
  margin-left: .25rem!important;
}

.m-2 {
  margin: .5rem!important;
}

.mt-2,.my-2 {
  margin-top: .5rem!important;
}

.mr-2,.mx-2 {
  margin-right: .5rem!important;
}

.mb-2,.my-2 {
  margin-bottom: .5rem!important;
}

.ml-2,.mx-2 {
  margin-left: .5rem!important;
}

.m-3 {
  margin: 1rem!important;
}

.mt-3,.my-3 {
  margin-top: 1rem!important;
}

.mr-3,.mx-3 {
  margin-right: 1rem!important;
}

.mb-3,.my-3 {
  margin-bottom: 1rem!important;
}

.ml-3,.mx-3 {
  margin-left: 1rem!important;
}

.m-4 {
  margin: 1.5rem!important;
}

.mt-4,.my-4 {
  margin-top: 1.5rem!important;
}

.mr-4,.mx-4 {
  margin-right: 1.5rem!important;
}

.mb-4,.my-4 {
  margin-bottom: 1.5rem!important;
}

.ml-4,.mx-4 {
  margin-left: 1.5rem!important;
}

.m-5 {
  margin: 3rem!important;
}

.mt-5,.my-5 {
  margin-top: 3rem!important;
}

.mr-5,.mx-5 {
  margin-right: 3rem!important;
}

.mb-5,.my-5 {
  margin-bottom: 3rem!important;
}

.ml-5,.mx-5 {
  margin-left: 3rem!important;
}

.p-0 {
  padding: 0!important;
}

.pt-0,.py-0 {
  padding-top: 0!important;
}

.pr-0,.px-0 {
  padding-right: 0!important;
}

.pb-0,.py-0 {
  padding-bottom: 0!important;
}

.pl-0,.px-0 {
  padding-left: 0!important;
}

.p-1 {
  padding: .25rem!important;
}

.pt-1,.py-1 {
  padding-top: .25rem!important;
}

.pr-1,.px-1 {
  padding-right: .25rem!important;
}

.pb-1,.py-1 {
  padding-bottom: .25rem!important;
}

.pl-1,.px-1 {
  padding-left: .25rem!important;
}

.p-2 {
  padding: .5rem!important;
}

.pt-2,.py-2 {
  padding-top: .5rem!important;
}

.pr-2,.px-2 {
  padding-right: .5rem!important;
}

.pb-2,.py-2 {
  padding-bottom: .5rem!important;
}

.pl-2,.px-2 {
  padding-left: .5rem!important;
}

.p-3 {
  padding: 1rem!important;
}

.pt-3,.py-3 {
  padding-top: 1rem!important;
}

.pr-3,.px-3 {
  padding-right: 1rem!important;
}

.pb-3,.py-3 {
  padding-bottom: 1rem!important;
}

.pl-3,.px-3 {
  padding-left: 1rem!important;
}

.p-4 {
  padding: 1.5rem!important;
}

.pt-4,.py-4 {
  padding-top: 1.5rem!important;
}

.pr-4,.px-4 {
  padding-right: 1.5rem!important;
}

.pb-4,.py-4 {
  padding-bottom: 1.5rem!important;
}

.pl-4,.px-4 {
  padding-left: 1.5rem!important;
}

.p-5 {
  padding: 3rem!important;
}

.pt-5,.py-5 {
  padding-top: 3rem!important;
}

.pr-5,.px-5 {
  padding-right: 3rem!important;
}

.pb-5,.py-5 {
  padding-bottom: 3rem!important;
}

.pl-5,.px-5 {
  padding-left: 3rem!important;
}

.m-n1 {
  margin: -.25rem!important;
}

.mt-n1,.my-n1 {
  margin-top: -.25rem!important;
}

.mr-n1,.mx-n1 {
  margin-right: -.25rem!important;
}

.mb-n1,.my-n1 {
  margin-bottom: -.25rem!important;
}

.ml-n1,.mx-n1 {
  margin-left: -.25rem!important;
}

.m-n2 {
  margin: -.5rem!important;
}

.mt-n2,.my-n2 {
  margin-top: -.5rem!important;
}

.mr-n2,.mx-n2 {
  margin-right: -.5rem!important;
}

.mb-n2,.my-n2 {
  margin-bottom: -.5rem!important;
}

.ml-n2,.mx-n2 {
  margin-left: -.5rem!important;
}

.m-n3 {
  margin: -1rem!important;
}

.mt-n3,.my-n3 {
  margin-top: -1rem!important;
}

.mr-n3,.mx-n3 {
  margin-right: -1rem!important;
}

.mb-n3,.my-n3 {
  margin-bottom: -1rem!important;
}

.ml-n3,.mx-n3 {
  margin-left: -1rem!important;
}

.m-n4 {
  margin: -1.5rem!important;
}

.mt-n4,.my-n4 {
  margin-top: -1.5rem!important;
}

.mr-n4,.mx-n4 {
  margin-right: -1.5rem!important;
}

.mb-n4,.my-n4 {
  margin-bottom: -1.5rem!important;
}

.ml-n4,.mx-n4 {
  margin-left: -1.5rem!important;
}

.m-n5 {
  margin: -3rem!important;
}

.mt-n5,.my-n5 {
  margin-top: -3rem!important;
}

.mr-n5,.mx-n5 {
  margin-right: -3rem!important;
}

.mb-n5,.my-n5 {
  margin-bottom: -3rem!important;
}

.ml-n5,.mx-n5 {
  margin-left: -3rem!important;
}

.m-auto {
  margin: auto!important;
}

.mt-auto,.my-auto {
  margin-top: auto!important;
}

.mr-auto,.mx-auto {
  margin-right: auto!important;
}

.mb-auto,.my-auto {
  margin-bottom: auto!important;
}

.ml-auto,.mx-auto {
  margin-left: auto!important;
}

.text-monospace {
  font-family: SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace!important;
}

.text-justify {
  text-align: justify!important;
}

.text-wrap {
  white-space: normal!important;
}

.text-nowrap {
  white-space: nowrap!important;
}

.text-truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.text-left {
  text-align: left!important;
}

.text-right {
  text-align: right!important;
}

.text-center {
  text-align: center!important;
}

@media (min-width:576px) {
  .flex-sm-row {
    flex-direction: row!important;
  }

  .flex-sm-column {
    flex-direction: column!important;
  }

  .flex-sm-row-reverse {
    flex-direction: row-reverse!important;
  }

  .flex-sm-column-reverse {
    flex-direction: column-reverse!important;
  }

  .flex-sm-wrap {
    flex-wrap: wrap!important;
  }

  .flex-sm-nowrap {
    flex-wrap: nowrap!important;
  }

  .flex-sm-wrap-reverse {
    flex-wrap: wrap-reverse!important;
  }

  .flex-sm-fill {
    flex: 1 1 auto!important;
  }

  .flex-sm-grow-0 {
    flex-grow: 0!important;
  }

  .flex-sm-grow-1 {
    flex-grow: 1!important;
  }

  .flex-sm-shrink-0 {
    flex-shrink: 0!important;
  }

  .flex-sm-shrink-1 {
    flex-shrink: 1!important;
  }

  .justify-content-sm-start {
    justify-content: flex-start!important;
  }

  .justify-content-sm-end {
    justify-content: flex-end!important;
  }

  .justify-content-sm-center {
    justify-content: center!important;
  }

  .justify-content-sm-between {
    justify-content: space-between!important;
  }

  .justify-content-sm-around {
    justify-content: space-around!important;
  }

  .align-items-sm-start {
    align-items: flex-start!important;
  }

  .align-items-sm-end {
    align-items: flex-end!important;
  }

  .align-items-sm-center {
    align-items: center!important;
  }

  .align-items-sm-baseline {
    align-items: baseline!important;
  }

  .align-items-sm-stretch {
    align-items: stretch!important;
  }

  .align-content-sm-start {
    align-content: flex-start!important;
  }

  .align-content-sm-end {
    align-content: flex-end!important;
  }

  .align-content-sm-center {
    align-content: center!important;
  }

  .align-content-sm-between {
    align-content: space-between!important;
  }

  .align-content-sm-around {
    align-content: space-around!important;
  }

  .align-content-sm-stretch {
    align-content: stretch!important;
  }

  .align-self-sm-auto {
    align-self: auto!important;
  }

  .align-self-sm-start {
    align-self: flex-start!important;
  }

  .align-self-sm-end {
    align-self: flex-end!important;
  }

  .align-self-sm-center {
    align-self: center!important;
  }

  .align-self-sm-baseline {
    align-self: baseline!important;
  }

  .align-self-sm-stretch {
    align-self: stretch!important;
  }

  .float-sm-left {
    float: left!important;
  }

  .float-sm-right {
    float: right!important;
  }

  .float-sm-none {
    float: none!important;
  }

  .m-sm-0 {
    margin: 0!important;
  }

  .mt-sm-0,.my-sm-0 {
    margin-top: 0!important;
  }

  .mr-sm-0,.mx-sm-0 {
    margin-right: 0!important;
  }

  .mb-sm-0,.my-sm-0 {
    margin-bottom: 0!important;
  }

  .ml-sm-0,.mx-sm-0 {
    margin-left: 0!important;
  }

  .m-sm-1 {
    margin: .25rem!important;
  }

  .mt-sm-1,.my-sm-1 {
    margin-top: .25rem!important;
  }

  .mr-sm-1,.mx-sm-1 {
    margin-right: .25rem!important;
  }

  .mb-sm-1,.my-sm-1 {
    margin-bottom: .25rem!important;
  }

  .ml-sm-1,.mx-sm-1 {
    margin-left: .25rem!important;
  }

  .m-sm-2 {
    margin: .5rem!important;
  }

  .mt-sm-2,.my-sm-2 {
    margin-top: .5rem!important;
  }

  .mr-sm-2,.mx-sm-2 {
    margin-right: .5rem!important;
  }

  .mb-sm-2,.my-sm-2 {
    margin-bottom: .5rem!important;
  }

  .ml-sm-2,.mx-sm-2 {
    margin-left: .5rem!important;
  }

  .m-sm-3 {
    margin: 1rem!important;
  }

  .mt-sm-3,.my-sm-3 {
    margin-top: 1rem!important;
  }

  .mr-sm-3,.mx-sm-3 {
    margin-right: 1rem!important;
  }

  .mb-sm-3,.my-sm-3 {
    margin-bottom: 1rem!important;
  }

  .ml-sm-3,.mx-sm-3 {
    margin-left: 1rem!important;
  }

  .m-sm-4 {
    margin: 1.5rem!important;
  }

  .mt-sm-4,.my-sm-4 {
    margin-top: 1.5rem!important;
  }

  .mr-sm-4,.mx-sm-4 {
    margin-right: 1.5rem!important;
  }

  .mb-sm-4,.my-sm-4 {
    margin-bottom: 1.5rem!important;
  }

  .ml-sm-4,.mx-sm-4 {
    margin-left: 1.5rem!important;
  }

  .m-sm-5 {
    margin: 3rem!important;
  }

  .mt-sm-5,.my-sm-5 {
    margin-top: 3rem!important;
  }

  .mr-sm-5,.mx-sm-5 {
    margin-right: 3rem!important;
  }

  .mb-sm-5,.my-sm-5 {
    margin-bottom: 3rem!important;
  }

  .ml-sm-5,.mx-sm-5 {
    margin-left: 3rem!important;
  }

  .p-sm-0 {
    padding: 0!important;
  }

  .pt-sm-0,.py-sm-0 {
    padding-top: 0!important;
  }

  .pr-sm-0,.px-sm-0 {
    padding-right: 0!important;
  }

  .pb-sm-0,.py-sm-0 {
    padding-bottom: 0!important;
  }

  .pl-sm-0,.px-sm-0 {
    padding-left: 0!important;
  }

  .p-sm-1 {
    padding: .25rem!important;
  }

  .pt-sm-1,.py-sm-1 {
    padding-top: .25rem!important;
  }

  .pr-sm-1,.px-sm-1 {
    padding-right: .25rem!important;
  }

  .pb-sm-1,.py-sm-1 {
    padding-bottom: .25rem!important;
  }

  .pl-sm-1,.px-sm-1 {
    padding-left: .25rem!important;
  }

  .p-sm-2 {
    padding: .5rem!important;
  }

  .pt-sm-2,.py-sm-2 {
    padding-top: .5rem!important;
  }

  .pr-sm-2,.px-sm-2 {
    padding-right: .5rem!important;
  }

  .pb-sm-2,.py-sm-2 {
    padding-bottom: .5rem!important;
  }

  .pl-sm-2,.px-sm-2 {
    padding-left: .5rem!important;
  }

  .p-sm-3 {
    padding: 1rem!important;
  }

  .pt-sm-3,.py-sm-3 {
    padding-top: 1rem!important;
  }

  .pr-sm-3,.px-sm-3 {
    padding-right: 1rem!important;
  }

  .pb-sm-3,.py-sm-3 {
    padding-bottom: 1rem!important;
  }

  .pl-sm-3,.px-sm-3 {
    padding-left: 1rem!important;
  }

  .p-sm-4 {
    padding: 1.5rem!important;
  }

  .pt-sm-4,.py-sm-4 {
    padding-top: 1.5rem!important;
  }

  .pr-sm-4,.px-sm-4 {
    padding-right: 1.5rem!important;
  }

  .pb-sm-4,.py-sm-4 {
    padding-bottom: 1.5rem!important;
  }

  .pl-sm-4,.px-sm-4 {
    padding-left: 1.5rem!important;
  }

  .p-sm-5 {
    padding: 3rem!important;
  }

  .pt-sm-5,.py-sm-5 {
    padding-top: 3rem!important;
  }

  .pr-sm-5,.px-sm-5 {
    padding-right: 3rem!important;
  }

  .pb-sm-5,.py-sm-5 {
    padding-bottom: 3rem!important;
  }

  .pl-sm-5,.px-sm-5 {
    padding-left: 3rem!important;
  }

  .m-sm-n1 {
    margin: -.25rem!important;
  }

  .mt-sm-n1,.my-sm-n1 {
    margin-top: -.25rem!important;
  }

  .mr-sm-n1,.mx-sm-n1 {
    margin-right: -.25rem!important;
  }

  .mb-sm-n1,.my-sm-n1 {
    margin-bottom: -.25rem!important;
  }

  .ml-sm-n1,.mx-sm-n1 {
    margin-left: -.25rem!important;
  }

  .m-sm-n2 {
    margin: -.5rem!important;
  }

  .mt-sm-n2,.my-sm-n2 {
    margin-top: -.5rem!important;
  }

  .mr-sm-n2,.mx-sm-n2 {
    margin-right: -.5rem!important;
  }

  .mb-sm-n2,.my-sm-n2 {
    margin-bottom: -.5rem!important;
  }

  .ml-sm-n2,.mx-sm-n2 {
    margin-left: -.5rem!important;
  }

  .m-sm-n3 {
    margin: -1rem!important;
  }

  .mt-sm-n3,.my-sm-n3 {
    margin-top: -1rem!important;
  }

  .mr-sm-n3,.mx-sm-n3 {
    margin-right: -1rem!important;
  }

  .mb-sm-n3,.my-sm-n3 {
    margin-bottom: -1rem!important;
  }

  .ml-sm-n3,.mx-sm-n3 {
    margin-left: -1rem!important;
  }

  .m-sm-n4 {
    margin: -1.5rem!important;
  }

  .mt-sm-n4,.my-sm-n4 {
    margin-top: -1.5rem!important;
  }

  .mr-sm-n4,.mx-sm-n4 {
    margin-right: -1.5rem!important;
  }

  .mb-sm-n4,.my-sm-n4 {
    margin-bottom: -1.5rem!important;
  }

  .ml-sm-n4,.mx-sm-n4 {
    margin-left: -1.5rem!important;
  }

  .m-sm-n5 {
    margin: -3rem!important;
  }

  .mt-sm-n5,.my-sm-n5 {
    margin-top: -3rem!important;
  }

  .mr-sm-n5,.mx-sm-n5 {
    margin-right: -3rem!important;
  }

  .mb-sm-n5,.my-sm-n5 {
    margin-bottom: -3rem!important;
  }

  .ml-sm-n5,.mx-sm-n5 {
    margin-left: -3rem!important;
  }

  .m-sm-auto {
    margin: auto!important;
  }

  .mt-sm-auto,.my-sm-auto {
    margin-top: auto!important;
  }

  .mr-sm-auto,.mx-sm-auto {
    margin-right: auto!important;
  }

  .mb-sm-auto,.my-sm-auto {
    margin-bottom: auto!important;
  }

  .ml-sm-auto,.mx-sm-auto {
    margin-left: auto!important;
  }

  .text-sm-left {
    text-align: left!important;
  }

  .text-sm-right {
    text-align: right!important;
  }

  .text-sm-center {
    text-align: center!important;
  }
}

@media (min-width:768px) {
  .flex-md-row {
    flex-direction: row!important;
  }

  .flex-md-column {
    flex-direction: column!important;
  }

  .flex-md-row-reverse {
    flex-direction: row-reverse!important;
  }

  .flex-md-column-reverse {
    flex-direction: column-reverse!important;
  }

  .flex-md-wrap {
    flex-wrap: wrap!important;
  }

  .flex-md-nowrap {
    flex-wrap: nowrap!important;
  }

  .flex-md-wrap-reverse {
    flex-wrap: wrap-reverse!important;
  }

  .flex-md-fill {
    flex: 1 1 auto!important;
  }

  .flex-md-grow-0 {
    flex-grow: 0!important;
  }

  .flex-md-grow-1 {
    flex-grow: 1!important;
  }

  .flex-md-shrink-0 {
    flex-shrink: 0!important;
  }

  .flex-md-shrink-1 {
    flex-shrink: 1!important;
  }

  .justify-content-md-start {
    justify-content: flex-start!important;
  }

  .justify-content-md-end {
    justify-content: flex-end!important;
  }

  .justify-content-md-center {
    justify-content: center!important;
  }

  .justify-content-md-between {
    justify-content: space-between!important;
  }

  .justify-content-md-around {
    justify-content: space-around!important;
  }

  .align-items-md-start {
    align-items: flex-start!important;
  }

  .align-items-md-end {
    align-items: flex-end!important;
  }

  .align-items-md-center {
    align-items: center!important;
  }

  .align-items-md-baseline {
    align-items: baseline!important;
  }

  .align-items-md-stretch {
    align-items: stretch!important;
  }

  .align-content-md-start {
    align-content: flex-start!important;
  }

  .align-content-md-end {
    align-content: flex-end!important;
  }

  .align-content-md-center {
    align-content: center!important;
  }

  .align-content-md-between {
    align-content: space-between!important;
  }

  .align-content-md-around {
    align-content: space-around!important;
  }

  .align-content-md-stretch {
    align-content: stretch!important;
  }

  .align-self-md-auto {
    align-self: auto!important;
  }

  .align-self-md-start {
    align-self: flex-start!important;
  }

  .align-self-md-end {
    align-self: flex-end!important;
  }

  .align-self-md-center {
    align-self: center!important;
  }

  .align-self-md-baseline {
    align-self: baseline!important;
  }

  .align-self-md-stretch {
    align-self: stretch!important;
  }

  .float-md-left {
    float: left!important;
  }

  .float-md-right {
    float: right!important;
  }

  .float-md-none {
    float: none!important;
  }

  .m-md-0 {
    margin: 0!important;
  }

  .mt-md-0,.my-md-0 {
    margin-top: 0!important;
  }

  .mr-md-0,.mx-md-0 {
    margin-right: 0!important;
  }

  .mb-md-0,.my-md-0 {
    margin-bottom: 0!important;
  }

  .ml-md-0,.mx-md-0 {
    margin-left: 0!important;
  }

  .m-md-1 {
    margin: .25rem!important;
  }

  .mt-md-1,.my-md-1 {
    margin-top: .25rem!important;
  }

  .mr-md-1,.mx-md-1 {
    margin-right: .25rem!important;
  }

  .mb-md-1,.my-md-1 {
    margin-bottom: .25rem!important;
  }

  .ml-md-1,.mx-md-1 {
    margin-left: .25rem!important;
  }

  .m-md-2 {
    margin: .5rem!important;
  }

  .mt-md-2,.my-md-2 {
    margin-top: .5rem!important;
  }

  .mr-md-2,.mx-md-2 {
    margin-right: .5rem!important;
  }

  .mb-md-2,.my-md-2 {
    margin-bottom: .5rem!important;
  }

  .ml-md-2,.mx-md-2 {
    margin-left: .5rem!important;
  }

  .m-md-3 {
    margin: 1rem!important;
  }

  .mt-md-3,.my-md-3 {
    margin-top: 1rem!important;
  }

  .mr-md-3,.mx-md-3 {
    margin-right: 1rem!important;
  }

  .mb-md-3,.my-md-3 {
    margin-bottom: 1rem!important;
  }

  .ml-md-3,.mx-md-3 {
    margin-left: 1rem!important;
  }

  .m-md-4 {
    margin: 1.5rem!important;
  }

  .mt-md-4,.my-md-4 {
    margin-top: 1.5rem!important;
  }

  .mr-md-4,.mx-md-4 {
    margin-right: 1.5rem!important;
  }

  .mb-md-4,.my-md-4 {
    margin-bottom: 1.5rem!important;
  }

  .ml-md-4,.mx-md-4 {
    margin-left: 1.5rem!important;
  }

  .m-md-5 {
    margin: 3rem!important;
  }

  .mt-md-5,.my-md-5 {
    margin-top: 3rem!important;
  }

  .mr-md-5,.mx-md-5 {
    margin-right: 3rem!important;
  }

  .mb-md-5,.my-md-5 {
    margin-bottom: 3rem!important;
  }

  .ml-md-5,.mx-md-5 {
    margin-left: 3rem!important;
  }

  .p-md-0 {
    padding: 0!important;
  }

  .pt-md-0,.py-md-0 {
    padding-top: 0!important;
  }

  .pr-md-0,.px-md-0 {
    padding-right: 0!important;
  }

  .pb-md-0,.py-md-0 {
    padding-bottom: 0!important;
  }

  .pl-md-0,.px-md-0 {
    padding-left: 0!important;
  }

  .p-md-1 {
    padding: .25rem!important;
  }

  .pt-md-1,.py-md-1 {
    padding-top: .25rem!important;
  }

  .pr-md-1,.px-md-1 {
    padding-right: .25rem!important;
  }

  .pb-md-1,.py-md-1 {
    padding-bottom: .25rem!important;
  }

  .pl-md-1,.px-md-1 {
    padding-left: .25rem!important;
  }

  .p-md-2 {
    padding: .5rem!important;
  }

  .pt-md-2,.py-md-2 {
    padding-top: .5rem!important;
  }

  .pr-md-2,.px-md-2 {
    padding-right: .5rem!important;
  }

  .pb-md-2,.py-md-2 {
    padding-bottom: .5rem!important;
  }

  .pl-md-2,.px-md-2 {
    padding-left: .5rem!important;
  }

  .p-md-3 {
    padding: 1rem!important;
  }

  .pt-md-3,.py-md-3 {
    padding-top: 1rem!important;
  }

  .pr-md-3,.px-md-3 {
    padding-right: 1rem!important;
  }

  .pb-md-3,.py-md-3 {
    padding-bottom: 1rem!important;
  }

  .pl-md-3,.px-md-3 {
    padding-left: 1rem!important;
  }

  .p-md-4 {
    padding: 1.5rem!important;
  }

  .pt-md-4,.py-md-4 {
    padding-top: 1.5rem!important;
  }

  .pr-md-4,.px-md-4 {
    padding-right: 1.5rem!important;
  }

  .pb-md-4,.py-md-4 {
    padding-bottom: 1.5rem!important;
  }

  .pl-md-4,.px-md-4 {
    padding-left: 1.5rem!important;
  }

  .p-md-5 {
    padding: 3rem!important;
  }

  .pt-md-5,.py-md-5 {
    padding-top: 3rem!important;
  }

  .pr-md-5,.px-md-5 {
    padding-right: 3rem!important;
  }

  .pb-md-5,.py-md-5 {
    padding-bottom: 3rem!important;
  }

  .pl-md-5,.px-md-5 {
    padding-left: 3rem!important;
  }

  .m-md-n1 {
    margin: -.25rem!important;
  }

  .mt-md-n1,.my-md-n1 {
    margin-top: -.25rem!important;
  }

  .mr-md-n1,.mx-md-n1 {
    margin-right: -.25rem!important;
  }

  .mb-md-n1,.my-md-n1 {
    margin-bottom: -.25rem!important;
  }

  .ml-md-n1,.mx-md-n1 {
    margin-left: -.25rem!important;
  }

  .m-md-n2 {
    margin: -.5rem!important;
  }

  .mt-md-n2,.my-md-n2 {
    margin-top: -.5rem!important;
  }

  .mr-md-n2,.mx-md-n2 {
    margin-right: -.5rem!important;
  }

  .mb-md-n2,.my-md-n2 {
    margin-bottom: -.5rem!important;
  }

  .ml-md-n2,.mx-md-n2 {
    margin-left: -.5rem!important;
  }

  .m-md-n3 {
    margin: -1rem!important;
  }

  .mt-md-n3,.my-md-n3 {
    margin-top: -1rem!important;
  }

  .mr-md-n3,.mx-md-n3 {
    margin-right: -1rem!important;
  }

  .mb-md-n3,.my-md-n3 {
    margin-bottom: -1rem!important;
  }

  .ml-md-n3,.mx-md-n3 {
    margin-left: -1rem!important;
  }

  .m-md-n4 {
    margin: -1.5rem!important;
  }

  .mt-md-n4,.my-md-n4 {
    margin-top: -1.5rem!important;
  }

  .mr-md-n4,.mx-md-n4 {
    margin-right: -1.5rem!important;
  }

  .mb-md-n4,.my-md-n4 {
    margin-bottom: -1.5rem!important;
  }

  .ml-md-n4,.mx-md-n4 {
    margin-left: -1.5rem!important;
  }

  .m-md-n5 {
    margin: -3rem!important;
  }

  .mt-md-n5,.my-md-n5 {
    margin-top: -3rem!important;
  }

  .mr-md-n5,.mx-md-n5 {
    margin-right: -3rem!important;
  }

  .mb-md-n5,.my-md-n5 {
    margin-bottom: -3rem!important;
  }

  .ml-md-n5,.mx-md-n5 {
    margin-left: -3rem!important;
  }

  .m-md-auto {
    margin: auto!important;
  }

  .mt-md-auto,.my-md-auto {
    margin-top: auto!important;
  }

  .mr-md-auto,.mx-md-auto {
    margin-right: auto!important;
  }

  .mb-md-auto,.my-md-auto {
    margin-bottom: auto!important;
  }

  .ml-md-auto,.mx-md-auto {
    margin-left: auto!important;
  }

  .text-md-left {
    text-align: left!important;
  }

  .text-md-right {
    text-align: right!important;
  }

  .text-md-center {
    text-align: center!important;
  }
}

@media (min-width:992px) {
  .flex-lg-row {
    flex-direction: row!important;
  }

  .flex-lg-column {
    flex-direction: column!important;
  }

  .flex-lg-row-reverse {
    flex-direction: row-reverse!important;
  }

  .flex-lg-column-reverse {
    flex-direction: column-reverse!important;
  }

  .flex-lg-wrap {
    flex-wrap: wrap!important;
  }

  .flex-lg-nowrap {
    flex-wrap: nowrap!important;
  }

  .flex-lg-wrap-reverse {
    flex-wrap: wrap-reverse!important;
  }

  .flex-lg-fill {
    flex: 1 1 auto!important;
  }

  .flex-lg-grow-0 {
    flex-grow: 0!important;
  }

  .flex-lg-grow-1 {
    flex-grow: 1!important;
  }

  .flex-lg-shrink-0 {
    flex-shrink: 0!important;
  }

  .flex-lg-shrink-1 {
    flex-shrink: 1!important;
  }

  .justify-content-lg-start {
    justify-content: flex-start!important;
  }

  .justify-content-lg-end {
    justify-content: flex-end!important;
  }

  .justify-content-lg-center {
    justify-content: center!important;
  }

  .justify-content-lg-between {
    justify-content: space-between!important;
  }

  .justify-content-lg-around {
    justify-content: space-around!important;
  }

  .align-items-lg-start {
    align-items: flex-start!important;
  }

  .align-items-lg-end {
    align-items: flex-end!important;
  }

  .align-items-lg-center {
    align-items: center!important;
  }

  .align-items-lg-baseline {
    align-items: baseline!important;
  }

  .align-items-lg-stretch {
    align-items: stretch!important;
  }

  .align-content-lg-start {
    align-content: flex-start!important;
  }

  .align-content-lg-end {
    align-content: flex-end!important;
  }

  .align-content-lg-center {
    align-content: center!important;
  }

  .align-content-lg-between {
    align-content: space-between!important;
  }

  .align-content-lg-around {
    align-content: space-around!important;
  }

  .align-content-lg-stretch {
    align-content: stretch!important;
  }

  .align-self-lg-auto {
    align-self: auto!important;
  }

  .align-self-lg-start {
    align-self: flex-start!important;
  }

  .align-self-lg-end {
    align-self: flex-end!important;
  }

  .align-self-lg-center {
    align-self: center!important;
  }

  .align-self-lg-baseline {
    align-self: baseline!important;
  }

  .align-self-lg-stretch {
    align-self: stretch!important;
  }

  .float-lg-left {
    float: left!important;
  }

  .float-lg-right {
    float: right!important;
  }

  .float-lg-none {
    float: none!important;
  }

  .m-lg-0 {
    margin: 0!important;
  }

  .mt-lg-0,.my-lg-0 {
    margin-top: 0!important;
  }

  .mr-lg-0,.mx-lg-0 {
    margin-right: 0!important;
  }

  .mb-lg-0,.my-lg-0 {
    margin-bottom: 0!important;
  }

  .ml-lg-0,.mx-lg-0 {
    margin-left: 0!important;
  }

  .m-lg-1 {
    margin: .25rem!important;
  }

  .mt-lg-1,.my-lg-1 {
    margin-top: .25rem!important;
  }

  .mr-lg-1,.mx-lg-1 {
    margin-right: .25rem!important;
  }

  .mb-lg-1,.my-lg-1 {
    margin-bottom: .25rem!important;
  }

  .ml-lg-1,.mx-lg-1 {
    margin-left: .25rem!important;
  }

  .m-lg-2 {
    margin: .5rem!important;
  }

  .mt-lg-2,.my-lg-2 {
    margin-top: .5rem!important;
  }

  .mr-lg-2,.mx-lg-2 {
    margin-right: .5rem!important;
  }

  .mb-lg-2,.my-lg-2 {
    margin-bottom: .5rem!important;
  }

  .ml-lg-2,.mx-lg-2 {
    margin-left: .5rem!important;
  }

  .m-lg-3 {
    margin: 1rem!important;
  }

  .mt-lg-3,.my-lg-3 {
    margin-top: 1rem!important;
  }

  .mr-lg-3,.mx-lg-3 {
    margin-right: 1rem!important;
  }

  .mb-lg-3,.my-lg-3 {
    margin-bottom: 1rem!important;
  }

  .ml-lg-3,.mx-lg-3 {
    margin-left: 1rem!important;
  }

  .m-lg-4 {
    margin: 1.5rem!important;
  }

  .mt-lg-4,.my-lg-4 {
    margin-top: 1.5rem!important;
  }

  .mr-lg-4,.mx-lg-4 {
    margin-right: 1.5rem!important;
  }

  .mb-lg-4,.my-lg-4 {
    margin-bottom: 1.5rem!important;
  }

  .ml-lg-4,.mx-lg-4 {
    margin-left: 1.5rem!important;
  }

  .m-lg-5 {
    margin: 3rem!important;
  }

  .mt-lg-5,.my-lg-5 {
    margin-top: 3rem!important;
  }

  .mr-lg-5,.mx-lg-5 {
    margin-right: 3rem!important;
  }

  .mb-lg-5,.my-lg-5 {
    margin-bottom: 3rem!important;
  }

  .ml-lg-5,.mx-lg-5 {
    margin-left: 3rem!important;
  }

  .p-lg-0 {
    padding: 0!important;
  }

  .pt-lg-0,.py-lg-0 {
    padding-top: 0!important;
  }

  .pr-lg-0,.px-lg-0 {
    padding-right: 0!important;
  }

  .pb-lg-0,.py-lg-0 {
    padding-bottom: 0!important;
  }

  .pl-lg-0,.px-lg-0 {
    padding-left: 0!important;
  }

  .p-lg-1 {
    padding: .25rem!important;
  }

  .pt-lg-1,.py-lg-1 {
    padding-top: .25rem!important;
  }

  .pr-lg-1,.px-lg-1 {
    padding-right: .25rem!important;
  }

  .pb-lg-1,.py-lg-1 {
    padding-bottom: .25rem!important;
  }

  .pl-lg-1,.px-lg-1 {
    padding-left: .25rem!important;
  }

  .p-lg-2 {
    padding: .5rem!important;
  }

  .pt-lg-2,.py-lg-2 {
    padding-top: .5rem!important;
  }

  .pr-lg-2,.px-lg-2 {
    padding-right: .5rem!important;
  }

  .pb-lg-2,.py-lg-2 {
    padding-bottom: .5rem!important;
  }

  .pl-lg-2,.px-lg-2 {
    padding-left: .5rem!important;
  }

  .p-lg-3 {
    padding: 1rem!important;
  }

  .pt-lg-3,.py-lg-3 {
    padding-top: 1rem!important;
  }

  .pr-lg-3,.px-lg-3 {
    padding-right: 1rem!important;
  }

  .pb-lg-3,.py-lg-3 {
    padding-bottom: 1rem!important;
  }

  .pl-lg-3,.px-lg-3 {
    padding-left: 1rem!important;
  }

  .p-lg-4 {
    padding: 1.5rem!important;
  }

  .pt-lg-4,.py-lg-4 {
    padding-top: 1.5rem!important;
  }

  .pr-lg-4,.px-lg-4 {
    padding-right: 1.5rem!important;
  }

  .pb-lg-4,.py-lg-4 {
    padding-bottom: 1.5rem!important;
  }

  .pl-lg-4,.px-lg-4 {
    padding-left: 1.5rem!important;
  }

  .p-lg-5 {
    padding: 3rem!important;
  }

  .pt-lg-5,.py-lg-5 {
    padding-top: 3rem!important;
  }

  .pr-lg-5,.px-lg-5 {
    padding-right: 3rem!important;
  }

  .pb-lg-5,.py-lg-5 {
    padding-bottom: 3rem!important;
  }

  .pl-lg-5,.px-lg-5 {
    padding-left: 3rem!important;
  }

  .m-lg-n1 {
    margin: -.25rem!important;
  }

  .mt-lg-n1,.my-lg-n1 {
    margin-top: -.25rem!important;
  }

  .mr-lg-n1,.mx-lg-n1 {
    margin-right: -.25rem!important;
  }

  .mb-lg-n1,.my-lg-n1 {
    margin-bottom: -.25rem!important;
  }

  .ml-lg-n1,.mx-lg-n1 {
    margin-left: -.25rem!important;
  }

  .m-lg-n2 {
    margin: -.5rem!important;
  }

  .mt-lg-n2,.my-lg-n2 {
    margin-top: -.5rem!important;
  }

  .mr-lg-n2,.mx-lg-n2 {
    margin-right: -.5rem!important;
  }

  .mb-lg-n2,.my-lg-n2 {
    margin-bottom: -.5rem!important;
  }

  .ml-lg-n2,.mx-lg-n2 {
    margin-left: -.5rem!important;
  }

  .m-lg-n3 {
    margin: -1rem!important;
  }

  .mt-lg-n3,.my-lg-n3 {
    margin-top: -1rem!important;
  }

  .mr-lg-n3,.mx-lg-n3 {
    margin-right: -1rem!important;
  }

  .mb-lg-n3,.my-lg-n3 {
    margin-bottom: -1rem!important;
  }

  .ml-lg-n3,.mx-lg-n3 {
    margin-left: -1rem!important;
  }

  .m-lg-n4 {
    margin: -1.5rem!important;
  }

  .mt-lg-n4,.my-lg-n4 {
    margin-top: -1.5rem!important;
  }

  .mr-lg-n4,.mx-lg-n4 {
    margin-right: -1.5rem!important;
  }

  .mb-lg-n4,.my-lg-n4 {
    margin-bottom: -1.5rem!important;
  }

  .ml-lg-n4,.mx-lg-n4 {
    margin-left: -1.5rem!important;
  }

  .m-lg-n5 {
    margin: -3rem!important;
  }

  .mt-lg-n5,.my-lg-n5 {
    margin-top: -3rem!important;
  }

  .mr-lg-n5,.mx-lg-n5 {
    margin-right: -3rem!important;
  }

  .mb-lg-n5,.my-lg-n5 {
    margin-bottom: -3rem!important;
  }

  .ml-lg-n5,.mx-lg-n5 {
    margin-left: -3rem!important;
  }

  .m-lg-auto {
    margin: auto!important;
  }

  .mt-lg-auto,.my-lg-auto {
    margin-top: auto!important;
  }

  .mr-lg-auto,.mx-lg-auto {
    margin-right: auto!important;
  }

  .mb-lg-auto,.my-lg-auto {
    margin-bottom: auto!important;
  }

  .ml-lg-auto,.mx-lg-auto {
    margin-left: auto!important;
  }

  .text-lg-left {
    text-align: left!important;
  }

  .text-lg-right {
    text-align: right!important;
  }

  .text-lg-center {
    text-align: center!important;
  }
}

@media (min-width:1200px) {
  .flex-xl-row {
    flex-direction: row!important;
  }

  .flex-xl-column {
    flex-direction: column!important;
  }

  .flex-xl-row-reverse {
    flex-direction: row-reverse!important;
  }

  .flex-xl-column-reverse {
    flex-direction: column-reverse!important;
  }

  .flex-xl-wrap {
    flex-wrap: wrap!important;
  }

  .flex-xl-nowrap {
    flex-wrap: nowrap!important;
  }

  .flex-xl-wrap-reverse {
    flex-wrap: wrap-reverse!important;
  }

  .flex-xl-fill {
    flex: 1 1 auto!important;
  }

  .flex-xl-grow-0 {
    flex-grow: 0!important;
  }

  .flex-xl-grow-1 {
    flex-grow: 1!important;
  }

  .flex-xl-shrink-0 {
    flex-shrink: 0!important;
  }

  .flex-xl-shrink-1 {
    flex-shrink: 1!important;
  }

  .justify-content-xl-start {
    justify-content: flex-start!important;
  }

  .justify-content-xl-end {
    justify-content: flex-end!important;
  }

  .justify-content-xl-center {
    justify-content: center!important;
  }

  .justify-content-xl-between {
    justify-content: space-between!important;
  }

  .justify-content-xl-around {
    justify-content: space-around!important;
  }

  .align-items-xl-start {
    align-items: flex-start!important;
  }

  .align-items-xl-end {
    align-items: flex-end!important;
  }

  .align-items-xl-center {
    align-items: center!important;
  }

  .align-items-xl-baseline {
    align-items: baseline!important;
  }

  .align-items-xl-stretch {
    align-items: stretch!important;
  }

  .align-content-xl-start {
    align-content: flex-start!important;
  }

  .align-content-xl-end {
    align-content: flex-end!important;
  }

  .align-content-xl-center {
    align-content: center!important;
  }

  .align-content-xl-between {
    align-content: space-between!important;
  }

  .align-content-xl-around {
    align-content: space-around!important;
  }

  .align-content-xl-stretch {
    align-content: stretch!important;
  }

  .align-self-xl-auto {
    align-self: auto!important;
  }

  .align-self-xl-start {
    align-self: flex-start!important;
  }

  .align-self-xl-end {
    align-self: flex-end!important;
  }

  .align-self-xl-center {
    align-self: center!important;
  }

  .align-self-xl-baseline {
    align-self: baseline!important;
  }

  .align-self-xl-stretch {
    align-self: stretch!important;
  }

  .float-xl-left {
    float: left!important;
  }

  .float-xl-right {
    float: right!important;
  }

  .float-xl-none {
    float: none!important;
  }

  .m-xl-0 {
    margin: 0!important;
  }

  .mt-xl-0,.my-xl-0 {
    margin-top: 0!important;
  }

  .mr-xl-0,.mx-xl-0 {
    margin-right: 0!important;
  }

  .mb-xl-0,.my-xl-0 {
    margin-bottom: 0!important;
  }

  .ml-xl-0,.mx-xl-0 {
    margin-left: 0!important;
  }

  .m-xl-1 {
    margin: .25rem!important;
  }

  .mt-xl-1,.my-xl-1 {
    margin-top: .25rem!important;
  }

  .mr-xl-1,.mx-xl-1 {
    margin-right: .25rem!important;
  }

  .mb-xl-1,.my-xl-1 {
    margin-bottom: .25rem!important;
  }

  .ml-xl-1,.mx-xl-1 {
    margin-left: .25rem!important;
  }

  .m-xl-2 {
    margin: .5rem!important;
  }

  .mt-xl-2,.my-xl-2 {
    margin-top: .5rem!important;
  }

  .mr-xl-2,.mx-xl-2 {
    margin-right: .5rem!important;
  }

  .mb-xl-2,.my-xl-2 {
    margin-bottom: .5rem!important;
  }

  .ml-xl-2,.mx-xl-2 {
    margin-left: .5rem!important;
  }

  .m-xl-3 {
    margin: 1rem!important;
  }

  .mt-xl-3,.my-xl-3 {
    margin-top: 1rem!important;
  }

  .mr-xl-3,.mx-xl-3 {
    margin-right: 1rem!important;
  }

  .mb-xl-3,.my-xl-3 {
    margin-bottom: 1rem!important;
  }

  .ml-xl-3,.mx-xl-3 {
    margin-left: 1rem!important;
  }

  .m-xl-4 {
    margin: 1.5rem!important;
  }

  .mt-xl-4,.my-xl-4 {
    margin-top: 1.5rem!important;
  }

  .mr-xl-4,.mx-xl-4 {
    margin-right: 1.5rem!important;
  }

  .mb-xl-4,.my-xl-4 {
    margin-bottom: 1.5rem!important;
  }

  .ml-xl-4,.mx-xl-4 {
    margin-left: 1.5rem!important;
  }

  .m-xl-5 {
    margin: 3rem!important;
  }

  .mt-xl-5,.my-xl-5 {
    margin-top: 3rem!important;
  }

  .mr-xl-5,.mx-xl-5 {
    margin-right: 3rem!important;
  }

  .mb-xl-5,.my-xl-5 {
    margin-bottom: 3rem!important;
  }

  .ml-xl-5,.mx-xl-5 {
    margin-left: 3rem!important;
  }

  .p-xl-0 {
    padding: 0!important;
  }

  .pt-xl-0,.py-xl-0 {
    padding-top: 0!important;
  }

  .pr-xl-0,.px-xl-0 {
    padding-right: 0!important;
  }

  .pb-xl-0,.py-xl-0 {
    padding-bottom: 0!important;
  }

  .pl-xl-0,.px-xl-0 {
    padding-left: 0!important;
  }

  .p-xl-1 {
    padding: .25rem!important;
  }

  .pt-xl-1,.py-xl-1 {
    padding-top: .25rem!important;
  }

  .pr-xl-1,.px-xl-1 {
    padding-right: .25rem!important;
  }

  .pb-xl-1,.py-xl-1 {
    padding-bottom: .25rem!important;
  }

  .pl-xl-1,.px-xl-1 {
    padding-left: .25rem!important;
  }

  .p-xl-2 {
    padding: .5rem!important;
  }

  .pt-xl-2,.py-xl-2 {
    padding-top: .5rem!important;
  }

  .pr-xl-2,.px-xl-2 {
    padding-right: .5rem!important;
  }

  .pb-xl-2,.py-xl-2 {
    padding-bottom: .5rem!important;
  }

  .pl-xl-2,.px-xl-2 {
    padding-left: .5rem!important;
  }

  .p-xl-3 {
    padding: 1rem!important;
  }

  .pt-xl-3,.py-xl-3 {
    padding-top: 1rem!important;
  }

  .pr-xl-3,.px-xl-3 {
    padding-right: 1rem!important;
  }

  .pb-xl-3,.py-xl-3 {
    padding-bottom: 1rem!important;
  }

  .pl-xl-3,.px-xl-3 {
    padding-left: 1rem!important;
  }

  .p-xl-4 {
    padding: 1.5rem!important;
  }

  .pt-xl-4,.py-xl-4 {
    padding-top: 1.5rem!important;
  }

  .pr-xl-4,.px-xl-4 {
    padding-right: 1.5rem!important;
  }

  .pb-xl-4,.py-xl-4 {
    padding-bottom: 1.5rem!important;
  }

  .pl-xl-4,.px-xl-4 {
    padding-left: 1.5rem!important;
  }

  .p-xl-5 {
    padding: 3rem!important;
  }

  .pt-xl-5,.py-xl-5 {
    padding-top: 3rem!important;
  }

  .pr-xl-5,.px-xl-5 {
    padding-right: 3rem!important;
  }

  .pb-xl-5,.py-xl-5 {
    padding-bottom: 3rem!important;
  }

  .pl-xl-5,.px-xl-5 {
    padding-left: 3rem!important;
  }

  .m-xl-n1 {
    margin: -.25rem!important;
  }

  .mt-xl-n1,.my-xl-n1 {
    margin-top: -.25rem!important;
  }

  .mr-xl-n1,.mx-xl-n1 {
    margin-right: -.25rem!important;
  }

  .mb-xl-n1,.my-xl-n1 {
    margin-bottom: -.25rem!important;
  }

  .ml-xl-n1,.mx-xl-n1 {
    margin-left: -.25rem!important;
  }

  .m-xl-n2 {
    margin: -.5rem!important;
  }

  .mt-xl-n2,.my-xl-n2 {
    margin-top: -.5rem!important;
  }

  .mr-xl-n2,.mx-xl-n2 {
    margin-right: -.5rem!important;
  }

  .mb-xl-n2,.my-xl-n2 {
    margin-bottom: -.5rem!important;
  }

  .ml-xl-n2,.mx-xl-n2 {
    margin-left: -.5rem!important;
  }

  .m-xl-n3 {
    margin: -1rem!important;
  }

  .mt-xl-n3,.my-xl-n3 {
    margin-top: -1rem!important;
  }

  .mr-xl-n3,.mx-xl-n3 {
    margin-right: -1rem!important;
  }

  .mb-xl-n3,.my-xl-n3 {
    margin-bottom: -1rem!important;
  }

  .ml-xl-n3,.mx-xl-n3 {
    margin-left: -1rem!important;
  }

  .m-xl-n4 {
    margin: -1.5rem!important;
  }

  .mt-xl-n4,.my-xl-n4 {
    margin-top: -1.5rem!important;
  }

  .mr-xl-n4,.mx-xl-n4 {
    margin-right: -1.5rem!important;
  }

  .mb-xl-n4,.my-xl-n4 {
    margin-bottom: -1.5rem!important;
  }

  .ml-xl-n4,.mx-xl-n4 {
    margin-left: -1.5rem!important;
  }

  .m-xl-n5 {
    margin: -3rem!important;
  }

  .mt-xl-n5,.my-xl-n5 {
    margin-top: -3rem!important;
  }

  .mr-xl-n5,.mx-xl-n5 {
    margin-right: -3rem!important;
  }

  .mb-xl-n5,.my-xl-n5 {
    margin-bottom: -3rem!important;
  }

  .ml-xl-n5,.mx-xl-n5 {
    margin-left: -3rem!important;
  }

  .m-xl-auto {
    margin: auto!important;
  }

  .mt-xl-auto,.my-xl-auto {
    margin-top: auto!important;
  }

  .mr-xl-auto,.mx-xl-auto {
    margin-right: auto!important;
  }

  .mb-xl-auto,.my-xl-auto {
    margin-bottom: auto!important;
  }

  .ml-xl-auto,.mx-xl-auto {
    margin-left: auto!important;
  }

  .text-xl-left {
    text-align: left!important;
  }

  .text-xl-right {
    text-align: right!important;
  }

  .text-xl-center {
    text-align: center!important;
  }
}

.text-lowercase {
  text-transform: lowercase!important;
}

.text-uppercase {
  text-transform: uppercase!important;
}

.text-capitalize {
  text-transform: capitalize!important;
}

.font-weight-light {
  font-weight: 300!important;
}

.font-weight-lighter {
  font-weight: lighter!important;
}

.font-weight-normal {
  font-weight: 400!important;
}

.font-weight-bold {
  font-weight: 700!important;
}

.font-weight-bolder {
  font-weight: bolder!important;
}

.font-italic {
  font-style: italic!important;
}

.text-white {
  color: #fff!important;
}

.text-primary {
  color: #007bff!important;
}

a.text-primary:focus,a.text-primary:hover {
  color: #0056b3!important;
}

.text-secondary {
  color: #6c757d!important;
}

a.text-secondary:focus,a.text-secondary:hover {
  color: #494f54!important;
}

.text-success {
  color: #28a745!important;
}

a.text-success:focus,a.text-success:hover {
  color: #19692c!important;
}

.text-info {
  color: #17a2b8!important;
}

a.text-info:focus,a.text-info:hover {
  color: #0f6674!important;
}

.text-warning {
  color: #ffc107!important;
}

a.text-warning:focus,a.text-warning:hover {
  color: #ba8b00!important;
}

.text-danger {
  color: #dc3545!important;
}

a.text-danger:focus,a.text-danger:hover {
  color: #a71d2a!important;
}

.text-light {
  color: #f8f9fa!important;
}

a.text-light:focus,a.text-light:hover {
  color: #cbd3da!important;
}

.text-dark {
  color: #343a40!important;
}

a.text-dark:focus,a.text-dark:hover {
  color: #121416!important;
}

.text-body {
  color: #212529!important;
}

.text-muted {
  color: #6c757d!important;
}

.text-black-50 {
  color: rgba(0,0,0,.5)!important;
}

.text-white-50 {
  color: rgba(255,255,255,.5)!important;
}

.text-hide {
  font: 0/0 a;
  color: transparent;
  text-shadow: none;
  background-color: transparent;
  border: 0;
}

.text-decoration-none {
  text-decoration: none!important;
}

.text-break {
  word-break: break-word!important;
  overflow-wrap: break-word!important;
}

.text-reset {
  color: inherit!important;
}

.visible {
  visibility: visible!important;
}

.invisible {
  visibility: hidden!important;
}

@media print {
  *,::after,::before {
    text-shadow: none!important;
    box-shadow: none!important;
  }

  a:not(.btn) {
    text-decoration: underline;
  }

  abbr[title]::after {
    content: " (" attr(title) ")";
  }

  pre {
    white-space: pre-wrap!important;
  }

  blockquote,pre {
    border: 1px solid #adb5bd;
    page-break-inside: avoid;
  }

  thead {
    display: table-header-group;
  }

  img,tr {
    page-break-inside: avoid;
  }

  h2,h3,p {
    orphans: 3;
    widows: 3;
  }

  h2,h3 {
    page-break-after: avoid;
  }@  page {
    size: a3;
  }

  .container,body {
    min-width: 992px!important;
  }

  .navbar {
    display: none;
  }

  .badge {
    border: 1px solid #000;
  }

  .table {
    border-collapse: collapse!important;
  }

  .table td,.table th {
    background-color: #fff!important;
  }

  .table-bordered td,.table-bordered th {
    border: 1px solid #dee2e6!important;
  }

  .table-dark {
    color: inherit;
  }

  .table-dark tbody+tbody,.table-dark td,.table-dark th,.table-dark thead th {
    border-color: #dee2e6;
  }

  .table .thead-dark th {
    color: inherit;
    border-color: #dee2e6;
  }
}

8;--white:#fff;--gray:#6c757d;--gray-dark:#343a40;--primary:#007bff;--secondary:#6c757d;--success:#28a745;--info:#17a2b8;--warning:#ffc107;--danger:#dc3545;--light:#f8f9fa;--dark:#343a40;--breakpoint-xs:0;--breakpoint-sm:576px;--breakpoint-md:768px;--breakpoint-lg:992px;--breakpoint-xl:1200px;--font-family-sans-serif:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--font-family-monospace:SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;
}

*,::after,::before {
box-sizing: border-box;
}

html {
font-family: sans-serif;
line-height: 1.15;
-webkit-text-size-adjust: 100%;
-webkit-tap-highlight-color: transparent;
}

article,aside,figcaption,figure,footer,header,hgroup,main,nav,section {
display: block;
}

body {
margin: 0;
font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
font-size: 1rem;
font-weight: 400;
line-height: 1.5;
color: #212529;
text-align: left;
background-color: #fff;
}

[tabindex="-1"]:focus {
outline: 0!important;
}

h1,h2,h3,h4,h5,h6 {
margin-top: 0;
}

dl,ol,p,ul {
margin-top: 0;
margin-bottom: 1rem;
}

abbr[data-original-title],abbr[title] {
text-decoration: underline;
-webkit-text-decoration: underline dotted;
text-decoration: underline dotted;
cursor: help;
border-bottom: 0;
-webkit-text-decoration-skip-ink: none;
text-decoration-skip-ink: none;
}

address {
margin-bottom: 1rem;
font-style: normal;
line-height: inherit;
}

ol ol,ol ul,ul ol,ul ul {
margin-bottom: 0;
}

dt {
font-weight: 700;
}

dd {
margin-bottom: .5rem;
margin-left: 0;
}

blockquote,figure {
margin: 0 0 1rem;
}

b,strong {
font-weight: bolder;
}

sub,sup {
position: relative;
font-size: 75%;
line-height: 0;
vertical-align: baseline;
}

sub {
bottom: -.25em;
}

sup {
top: -.5em;
}

a {
color: #007bff;
text-decoration: none;
background-color: transparent;
}

a:hover {
color: #0056b3;
text-decoration: underline;
}

a:not([href]):not([tabindex]),a:not([href]):not([tabindex]):focus,a:not([href]):not([tabindex]):hover {
color: inherit;
text-decoration: none;
}

a:not([href]):not([tabindex]):focus {
outline: 0;
}

code,kbd,pre,samp {
font-family: SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;
font-size: 1em;
}

pre {
margin-top: 0;
margin-bottom: 1rem;
overflow: auto;
}

img {
vertical-align: middle;
border-style: none;
}

svg {
overflow: hidden;
vertical-align: middle;
}

table {
border-collapse: collapse;
}

caption {
padding-top: .75rem;
padding-bottom: .75rem;
color: #6c757d;
text-align: left;
caption-side: bottom;
}

th {
text-align: inherit;
}

label {
display: inline-block;
margin-bottom: .5rem;
}

button {
border-radius: 0;
}

button:focus {
outline: dotted 1px;
outline: -webkit-focus-ring-color auto 5px;
}

button,input,optgroup,select,textarea {
margin: 0;
font-family: inherit;
font-size: inherit;
line-height: inherit;
}

button,input {
overflow: visible;
}

button,select {
text-transform: none;
}

select {
word-wrap: normal;
}

[type=button],[type=reset],[type=submit],button {
-webkit-appearance: button;
}

[type=button]:not(:disabled),[type=reset]:not(:disabled),[type=submit]:not(:disabled),button:not(:disabled) {
cursor: pointer;
}

[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner {
padding: 0;
border-style: none;
}

input[type=checkbox],input[type=radio] {
box-sizing: border-box;
padding: 0;
}

input[type=date],input[type=datetime-local],input[type=month],input[type=time] {
-webkit-appearance: listbox;
}

textarea {
overflow: auto;
resize: vertical;
}

fieldset {
min-width: 0;
padding: 0;
margin: 0;
border: 0;
}

legend {
display: block;
width: 100%;
max-width: 100%;
padding: 0;
margin-bottom: .5rem;
font-size: 1.5rem;
line-height: inherit;
color: inherit;
white-space: normal;
}

progress {
vertical-align: baseline;
}

[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button {
height: auto;
}

[type=search] {
outline-offset: -2px;
-webkit-appearance: none;
}

[type=search]::-webkit-search-decoration {
-webkit-appearance: none;
}

::-webkit-file-upload-button {
font: inherit;
-webkit-appearance: button;
}

output {
display: inline-block;
}

summary {
display: list-item;
cursor: pointer;
}

template {
display: none;
}

[hidden] {
display: none!important;
}

.h1,.h2,.h3,.h4,.h5,.h6,h1,h2,h3,h4,h5,h6 {
margin-bottom: .5rem;
font-weight: 500;
line-height: 1.2;
}

.h1,h1 {
font-size: 2.5rem;
}

.h2,h2 {
font-size: 2rem;
}

.h3,h3 {
font-size: 1.75rem;
}

.h4,h4 {
font-size: 1.5rem;
}

.h5,h5 {
font-size: 1.25rem;
}

.h6,h6 {
font-size: 1rem;
}

.lead {
font-size: 1.25rem;
font-weight: 300;
}

.display-1 {
font-size: 6rem;
font-weight: 300;
line-height: 1.2;
}

.display-2 {
font-size: 5.5rem;
font-weight: 300;
line-height: 1.2;
}

.display-3 {
font-size: 4.5rem;
font-weight: 300;
line-height: 1.2;
}

.display-4 {
font-size: 3.5rem;
font-weight: 300;
line-height: 1.2;
}

hr {
box-sizing: content-box;
height: 0;
overflow: visible;
margin-top: 1rem;
margin-bottom: 1rem;
border: 0;
border-top: 1px solid rgba(0,0,0,.1);
}

.small,small {
font-size: 80%;
font-weight: 400;
}

.mark,mark {
padding: .2em;
background-color: #fcf8e3;
}

.list-inline,.list-unstyled {
padding-left: 0;
list-style: none;
}

.list-inline-item {
display: inline-block;
}

.list-inline-item:not(:last-child) {
margin-right: .5rem;
}

.initialism {
font-size: 90%;
text-transform: uppercase;
}

.blockquote {
margin-bottom: 1rem;
font-size: 1.25rem;
}

.blockquote-footer {
display: block;
font-size: 80%;
color: #6c757d;
}

.blockquote-footer::before {

}

.img-fluid {
max-width: 100%;
height: auto;
}

.img-thumbnail {
padding: .25rem;
background-color: #fff;
border: 1px solid #dee2e6;
border-radius: .25rem;
max-width: 100%;
height: auto;
}

.figure {
display: inline-block;
}

.figure-img {
margin-bottom: .5rem;
line-height: 1;
}

.figure-caption {
font-size: 90%;
color: #6c757d;
}

code {
font-size: 87.5%;
color: #e83e8c;
word-break: break-word;
}

a>code {
color: inherit;
}

kbd {
padding: .2rem .4rem;
font-size: 87.5%;
color: #fff;
background-color: #212529;
border-radius: .2rem;
}

kbd kbd {
padding: 0;
font-size: 100%;
font-weight: 700;
}

pre {
display: block;
font-size: 87.5%;
color: #212529;
}

pre code {
font-size: inherit;
color: inherit;
word-break: normal;
}

.pre-scrollable {
max-height: 340px;
overflow-y: scroll;
}

.container {
width: 100%;
padding-right: 15px;
padding-left: 15px;
margin-right: auto;
margin-left: auto;
}

@media (min-width:576px) {
.container {
  max-width: 540px;
}}

@media (min-width:768px) {
  .container {
    max-width: 720px;
  }
}

@media (min-width:992px) {
  .container {
    max-width: 960px;
  }
}

@media (min-width:1200px) {
  .container {
    max-width: 1140px;
  }
}

.container-fluid {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}

.row {
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
}

.no-gutters {
  margin-right: 0;
  margin-left: 0;
}

.no-gutters>.col,.no-gutters>[class*=col-] {
  padding-right: 0;
  padding-left: 0;
}

.col,.col-1,.col-10,.col-11,.col-12,.col-2,.col-3,.col-4,.col-5,.col-6,.col-7,.col-8,.col-9,.col-auto,.col-lg,.col-lg-1,.col-lg-10,.col-lg-11,.col-lg-12,.col-lg-2,.col-lg-3,.col-lg-4,.col-lg-5,.col-lg-6,.col-lg-7,.col-lg-8,.col-lg-9,.col-lg-auto,.col-md,.col-md-1,.col-md-10,.col-md-11,.col-md-12,.col-md-2,.col-md-3,.col-md-4,.col-md-5,.col-md-6,.col-md-7,.col-md-8,.col-md-9,.col-md-auto,.col-sm,.col-sm-1,.col-sm-10,.col-sm-11,.col-sm-12,.col-sm-2,.col-sm-3,.col-sm-4,.col-sm-5,.col-sm-6,.col-sm-7,.col-sm-8,.col-sm-9,.col-sm-auto,.col-xl,.col-xl-1,.col-xl-10,.col-xl-11,.col-xl-12,.col-xl-2,.col-xl-3,.col-xl-4,.col-xl-5,.col-xl-6,.col-xl-7,.col-xl-8,.col-xl-9,.col-xl-auto {
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
}

.col {
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;
}

.col-auto {
  flex: 0 0 auto;
  width: auto;
  max-width: 100%;
}

.col-1 {
  flex: 0 0 8.333333%;
  max-width: 8.333333%;
}

.col-2 {
  flex: 0 0 16.666667%;
  max-width: 16.666667%;
}

.col-3 {
  flex: 0 0 25%;
  max-width: 25%;
}

.col-4 {
  flex: 0 0 33.333333%;
  max-width: 33.333333%;
}

.col-5 {
  flex: 0 0 41.666667%;
  max-width: 41.666667%;
}

.col-6 {
  flex: 0 0 50%;
  max-width: 50%;
}

.col-7 {
  flex: 0 0 58.333333%;
  max-width: 58.333333%;
}

.col-8 {
  flex: 0 0 66.666667%;
  max-width: 66.666667%;
}

.col-9 {
  flex: 0 0 75%;
  max-width: 75%;
}

.col-10 {
  flex: 0 0 83.333333%;
  max-width: 83.333333%;
}

.col-11 {
  flex: 0 0 91.666667%;
  max-width: 91.666667%;
}

.col-12 {
  flex: 0 0 100%;
  max-width: 100%;
}

.order-first {
  order: -1;
}

.order-last {
  order: 13;
}

.order-0 {
  order: 0;
}

.order-1 {
  order: 1;
}

.order-2 {
  order: 2;
}

.order-3 {
  order: 3;
}

.order-4 {
  order: 4;
}

.order-5 {
  order: 5;
}

.order-6 {
  order: 6;
}

.order-7 {
  order: 7;
}

.order-8 {
  order: 8;
}

.order-9 {
  order: 9;
}

.order-10 {
  order: 10;
}

.order-11 {
  order: 11;
}

.order-12 {
  order: 12;
}

.offset-1 {
  margin-left: 8.333333%;
}

.offset-2 {
  margin-left: 16.666667%;
}

.offset-3 {
  margin-left: 25%;
}

.offset-4 {
  margin-left: 33.333333%;
}

.offset-5 {
  margin-left: 41.666667%;
}

.offset-6 {
  margin-left: 50%;
}

.offset-7 {
  margin-left: 58.333333%;
}

.offset-8 {
  margin-left: 66.666667%;
}

.offset-9 {
  margin-left: 75%;
}

.offset-10 {
  margin-left: 83.333333%;
}

.offset-11 {
  margin-left: 91.666667%;
}

@media (min-width:576px) {
  .col-sm {
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;
  }

  .col-sm-auto {
    flex: 0 0 auto;
    width: auto;
    max-width: 100%;
  }

  .col-sm-1 {
    flex: 0 0 8.333333%;
    max-width: 8.333333%;
  }

  .col-sm-2 {
    flex: 0 0 16.666667%;
    max-width: 16.666667%;
  }

  .col-sm-3 {
    flex: 0 0 25%;
    max-width: 25%;
  }

  .col-sm-4 {
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
  }

  .col-sm-5 {
    flex: 0 0 41.666667%;
    max-width: 41.666667%;
  }

  .col-sm-6 {
    flex: 0 0 50%;
    max-width: 50%;
  }

  .col-sm-7 {
    flex: 0 0 58.333333%;
    max-width: 58.333333%;
  }

  .col-sm-8 {
    flex: 0 0 66.666667%;
    max-width: 66.666667%;
  }

  .col-sm-9 {
    flex: 0 0 75%;
    max-width: 75%;
  }

  .col-sm-10 {
    flex: 0 0 83.333333%;
    max-width: 83.333333%;
  }

  .col-sm-11 {
    flex: 0 0 91.666667%;
    max-width: 91.666667%;
  }

  .col-sm-12 {
    flex: 0 0 100%;
    max-width: 100%;
  }

  .order-sm-first {
    order: -1;
  }

  .order-sm-last {
    order: 13;
  }

  .order-sm-0 {
    order: 0;
  }

  .order-sm-1 {
    order: 1;
  }

  .order-sm-2 {
    order: 2;
  }

  .order-sm-3 {
    order: 3;
  }

  .order-sm-4 {
    order: 4;
  }

  .order-sm-5 {
    order: 5;
  }

  .order-sm-6 {
    order: 6;
  }

  .order-sm-7 {
    order: 7;
  }

  .order-sm-8 {
    order: 8;
  }

  .order-sm-9 {
    order: 9;
  }

  .order-sm-10 {
    order: 10;
  }

  .order-sm-11 {
    order: 11;
  }

  .order-sm-12 {
    order: 12;
  }

  .offset-sm-0 {
    margin-left: 0;
  }

  .offset-sm-1 {
    margin-left: 8.333333%;
  }

  .offset-sm-2 {
    margin-left: 16.666667%;
  }

  .offset-sm-3 {
    margin-left: 25%;
  }

  .offset-sm-4 {
    margin-left: 33.333333%;
  }

  .offset-sm-5 {
    margin-left: 41.666667%;
  }

  .offset-sm-6 {
    margin-left: 50%;
  }

  .offset-sm-7 {
    margin-left: 58.333333%;
  }

  .offset-sm-8 {
    margin-left: 66.666667%;
  }

  .offset-sm-9 {
    margin-left: 75%;
  }

  .offset-sm-10 {
    margin-left: 83.333333%;
  }

  .offset-sm-11 {
    margin-left: 91.666667%;
  }
}

@media (min-width:768px) {
  .col-md {
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;
  }

  .col-md-auto {
    flex: 0 0 auto;
    width: auto;
    max-width: 100%;
  }

  .col-md-1 {
    flex: 0 0 8.333333%;
    max-width: 8.333333%;
  }

  .col-md-2 {
    flex: 0 0 16.666667%;
    max-width: 16.666667%;
  }

  .col-md-3 {
    flex: 0 0 25%;
    max-width: 25%;
  }

  .col-md-4 {
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
  }

  .col-md-5 {
    flex: 0 0 41.666667%;
    max-width: 41.666667%;
  }

  .col-md-6 {
    flex: 0 0 50%;
    max-width: 50%;
  }

  .col-md-7 {
    flex: 0 0 58.333333%;
    max-width: 58.333333%;
  }

  .col-md-8 {
    flex: 0 0 66.666667%;
    max-width: 66.666667%;
  }

  .col-md-9 {
    flex: 0 0 75%;
    max-width: 75%;
  }

  .col-md-10 {
    flex: 0 0 83.333333%;
    max-width: 83.333333%;
  }

  .col-md-11 {
    flex: 0 0 91.666667%;
    max-width: 91.666667%;
  }

  .col-md-12 {
    flex: 0 0 100%;
    max-width: 100%;
  }

  .order-md-first {
    order: -1;
  }

  .order-md-last {
    order: 13;
  }

  .order-md-0 {
    order: 0;
  }

  .order-md-1 {
    order: 1;
  }

  .order-md-2 {
    order: 2;
  }

  .order-md-3 {
    order: 3;
  }

  .order-md-4 {
    order: 4;
  }

  .order-md-5 {
    order: 5;
  }

  .order-md-6 {
    order: 6;
  }

  .order-md-7 {
    order: 7;
  }

  .order-md-8 {
    order: 8;
  }

  .order-md-9 {
    order: 9;
  }

  .order-md-10 {
    order: 10;
  }

  .order-md-11 {
    order: 11;
  }

  .order-md-12 {
    order: 12;
  }

  .offset-md-0 {
    margin-left: 0;
  }

  .offset-md-1 {
    margin-left: 8.333333%;
  }

  .offset-md-2 {
    margin-left: 16.666667%;
  }

  .offset-md-3 {
    margin-left: 25%;
  }

  .offset-md-4 {
    margin-left: 33.333333%;
  }

  .offset-md-5 {
    margin-left: 41.666667%;
  }

  .offset-md-6 {
    margin-left: 50%;
  }

  .offset-md-7 {
    margin-left: 58.333333%;
  }

  .offset-md-8 {
    margin-left: 66.666667%;
  }

  .offset-md-9 {
    margin-left: 75%;
  }

  .offset-md-10 {
    margin-left: 83.333333%;
  }

  .offset-md-11 {
    margin-left: 91.666667%;
  }
}

@media (min-width:992px) {
  .col-lg {
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;
  }

  .col-lg-auto {
    flex: 0 0 auto;
    width: auto;
    max-width: 100%;
  }

  .col-lg-1 {
    flex: 0 0 8.333333%;
    max-width: 8.333333%;
  }

  .col-lg-2 {
    flex: 0 0 16.666667%;
    max-width: 16.666667%;
  }

  .col-lg-3 {
    flex: 0 0 25%;
    max-width: 25%;
  }

  .col-lg-4 {
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
  }

  .col-lg-5 {
    flex: 0 0 41.666667%;
    max-width: 41.666667%;
  }

  .col-lg-6 {
    flex: 0 0 50%;
    max-width: 50%;
  }

  .col-lg-7 {
    flex: 0 0 58.333333%;
    max-width: 58.333333%;
  }

  .col-lg-8 {
    flex: 0 0 66.666667%;
    max-width: 66.666667%;
  }

  .col-lg-9 {
    flex: 0 0 75%;
    max-width: 75%;
  }

  .col-lg-10 {
    flex: 0 0 83.333333%;
    max-width: 83.333333%;
  }

  .col-lg-11 {
    flex: 0 0 91.666667%;
    max-width: 91.666667%;
  }

  .col-lg-12 {
    flex: 0 0 100%;
    max-width: 100%;
  }

  .order-lg-first {
    order: -1;
  }

  .order-lg-last {
    order: 13;
  }

  .order-lg-0 {
    order: 0;
  }

  .order-lg-1 {
    order: 1;
  }

  .order-lg-2 {
    order: 2;
  }

  .order-lg-3 {
    order: 3;
  }

  .order-lg-4 {
    order: 4;
  }

  .order-lg-5 {
    order: 5;
  }

  .order-lg-6 {
    order: 6;
  }

  .order-lg-7 {
    order: 7;
  }

  .order-lg-8 {
    order: 8;
  }

  .order-lg-9 {
    order: 9;
  }

  .order-lg-10 {
    order: 10;
  }

  .order-lg-11 {
    order: 11;
  }

  .order-lg-12 {
    order: 12;
  }

  .offset-lg-0 {
    margin-left: 0;
  }

  .offset-lg-1 {
    margin-left: 8.333333%;
  }

  .offset-lg-2 {
    margin-left: 16.666667%;
  }

  .offset-lg-3 {
    margin-left: 25%;
  }

  .offset-lg-4 {
    margin-left: 33.333333%;
  }

  .offset-lg-5 {
    margin-left: 41.666667%;
  }

  .offset-lg-6 {
    margin-left: 50%;
  }

  .offset-lg-7 {
    margin-left: 58.333333%;
  }

  .offset-lg-8 {
    margin-left: 66.666667%;
  }

  .offset-lg-9 {
    margin-left: 75%;
  }

  .offset-lg-10 {
    margin-left: 83.333333%;
  }

  .offset-lg-11 {
    margin-left: 91.666667%;
  }
}

@media (min-width:1200px) {
  .col-xl {
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;
  }

  .col-xl-auto {
    flex: 0 0 auto;
    width: auto;
    max-width: 100%;
  }

  .col-xl-1 {
    flex: 0 0 8.333333%;
    max-width: 8.333333%;
  }

  .col-xl-2 {
    flex: 0 0 16.666667%;
    max-width: 16.666667%;
  }

  .col-xl-3 {
    flex: 0 0 25%;
    max-width: 25%;
  }

  .col-xl-4 {
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
  }

  .col-xl-5 {
    flex: 0 0 41.666667%;
    max-width: 41.666667%;
  }

  .col-xl-6 {
    flex: 0 0 50%;
    max-width: 50%;
  }

  .col-xl-7 {
    flex: 0 0 58.333333%;
    max-width: 58.333333%;
  }

  .col-xl-8 {
    flex: 0 0 66.666667%;
    max-width: 66.666667%;
  }

  .col-xl-9 {
    flex: 0 0 75%;
    max-width: 75%;
  }

  .col-xl-10 {
    flex: 0 0 83.333333%;
    max-width: 83.333333%;
  }

  .col-xl-11 {
    flex: 0 0 91.666667%;
    max-width: 91.666667%;
  }

  .col-xl-12 {
    flex: 0 0 100%;
    max-width: 100%;
  }

  .order-xl-first {
    order: -1;
  }

  .order-xl-last {
    order: 13;
  }

  .order-xl-0 {
    order: 0;
  }

  .order-xl-1 {
    order: 1;
  }

  .order-xl-2 {
    order: 2;
  }

  .order-xl-3 {
    order: 3;
  }

  .order-xl-4 {
    order: 4;
  }

  .order-xl-5 {
    order: 5;
  }

  .order-xl-6 {
    order: 6;
  }

  .order-xl-7 {
    order: 7;
  }

  .order-xl-8 {
    order: 8;
  }

  .order-xl-9 {
    order: 9;
  }

  .order-xl-10 {
    order: 10;
  }

  .order-xl-11 {
    order: 11;
  }

  .order-xl-12 {
    order: 12;
  }

  .offset-xl-0 {
    margin-left: 0;
  }

  .offset-xl-1 {
    margin-left: 8.333333%;
  }

  .offset-xl-2 {
    margin-left: 16.666667%;
  }

  .offset-xl-3 {
    margin-left: 25%;
  }

  .offset-xl-4 {
    margin-left: 33.333333%;
  }

  .offset-xl-5 {
    margin-left: 41.666667%;
  }

  .offset-xl-6 {
    margin-left: 50%;
  }

  .offset-xl-7 {
    margin-left: 58.333333%;
  }

  .offset-xl-8 {
    margin-left: 66.666667%;
  }

  .offset-xl-9 {
    margin-left: 75%;
  }

  .offset-xl-10 {
    margin-left: 83.333333%;
  }

  .offset-xl-11 {
    margin-left: 91.666667%;
  }
}

.table {
  width: 100%;
  margin-bottom: 1rem;
  color: #212529;
}

.table td,.table th {
  padding: .75rem;
  vertical-align: top;
  border-top: 1px solid #dee2e6;
}

.table thead th {
  vertical-align: bottom;
  border-bottom: 2px solid #dee2e6;
}

.table tbody+tbody {
  border-top: 2px solid #dee2e6;
}

.table-sm td,.table-sm th {
  padding: .3rem;
}

.table-bordered,.table-bordered td,.table-bordered th {
  border: 1px solid #dee2e6;
}

.table-bordered thead td,.table-bordered thead th {
  border-bottom-width: 2px;
}

.table-borderless tbody+tbody,.table-borderless td,.table-borderless th,.table-borderless thead th {
  border: 0;
}

.table-striped tbody tr:nth-of-type(odd) {
  background-color: rgba(0,0,0,.05);
}

.table-hover tbody tr:hover {
  color: #212529;
  background-color: rgba(0,0,0,.075);
}

.table-primary,.table-primary>td,.table-primary>th {
  background-color: #b8daff;
}

.table-primary tbody+tbody,.table-primary td,.table-primary th,.table-primary thead th {
  border-color: #7abaff;
}

.table-hover .table-primary:hover,.table-hover .table-primary:hover>td,.table-hover .table-primary:hover>th {
  background-color: #9fcdff;
}

.table-secondary,.table-secondary>td,.table-secondary>th {
  background-color: #d6d8db;
}

.table-secondary tbody+tbody,.table-secondary td,.table-secondary th,.table-secondary thead th {
  border-color: #b3b7bb;
}

.table-hover .table-secondary:hover,.table-hover .table-secondary:hover>td,.table-hover .table-secondary:hover>th {
  background-color: #c8cbcf;
}

.table-success,.table-success>td,.table-success>th {
  background-color: #c3e6cb;
}

.table-success tbody+tbody,.table-success td,.table-success th,.table-success thead th {
  border-color: #8fd19e;
}

.table-hover .table-success:hover,.table-hover .table-success:hover>td,.table-hover .table-success:hover>th {
  background-color: #b1dfbb;
}

.table-info,.table-info>td,.table-info>th {
  background-color: #bee5eb;
}

.table-info tbody+tbody,.table-info td,.table-info th,.table-info thead th {
  border-color: #86cfda;
}

.table-hover .table-info:hover,.table-hover .table-info:hover>td,.table-hover .table-info:hover>th {
  background-color: #abdde5;
}

.table-warning,.table-warning>td,.table-warning>th {
  background-color: #ffeeba;
}

.table-warning tbody+tbody,.table-warning td,.table-warning th,.table-warning thead th {
  border-color: #ffdf7e;
}

.table-hover .table-warning:hover,.table-hover .table-warning:hover>td,.table-hover .table-warning:hover>th {
  background-color: #ffe8a1;
}

.table-danger,.table-danger>td,.table-danger>th {
  background-color: #f5c6cb;
}

.table-danger tbody+tbody,.table-danger td,.table-danger th,.table-danger thead th {
  border-color: #ed969e;
}

.table-hover .table-danger:hover,.table-hover .table-danger:hover>td,.table-hover .table-danger:hover>th {
  background-color: #f1b0b7;
}

.table-light,.table-light>td,.table-light>th {
  background-color: #fdfdfe;
}

.table-light tbody+tbody,.table-light td,.table-light th,.table-light thead th {
  border-color: #fbfcfc;
}

.table-hover .table-light:hover,.table-hover .table-light:hover>td,.table-hover .table-light:hover>th {
  background-color: #ececf6;
}

.table-dark,.table-dark>td,.table-dark>th {
  background-color: #c6c8ca;
}

.table-dark tbody+tbody,.table-dark td,.table-dark th,.table-dark thead th {
  border-color: #95999c;
}

.table-hover .table-dark:hover,.table-hover .table-dark:hover>td,.table-hover .table-dark:hover>th {
  background-color: #b9bbbe;
}

.table-active,.table-active>td,.table-active>th,.table-hover .table-active:hover,.table-hover .table-active:hover>td,.table-hover .table-active:hover>th {
  background-color: rgba(0,0,0,.075);
}

.table .thead-dark th {
  color: #fff;
  background-color: #343a40;
  border-color: #454d55;
}

.table .thead-light th {
  color: #495057;
  background-color: #e9ecef;
  border-color: #dee2e6;
}

.table-dark {
  color: #fff;
  background-color: #343a40;
}

.table-dark td,.table-dark th,.table-dark thead th {
  border-color: #454d55;
}

.table-dark.table-bordered {
  border: 0;
}

.table-dark.table-striped tbody tr:nth-of-type(odd) {
  background-color: rgba(255,255,255,.05);
}

.table-dark.table-hover tbody tr:hover {
  color: #fff;
  background-color: rgba(255,255,255,.075);
}

@media (max-width:575.98px) {
  .table-responsive-sm {
    display: block;
    width: 100%;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }

  .table-responsive-sm>.table-bordered {
    border: 0;
  }
}

@media (max-width:767.98px) {
  .table-responsive-md {
    display: block;
    width: 100%;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }

  .table-responsive-md>.table-bordered {
    border: 0;
  }
}

@media (max-width:991.98px) {
  .table-responsive-lg {
    display: block;
    width: 100%;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }

  .table-responsive-lg>.table-bordered {
    border: 0;
  }
}

@media (max-width:1199.98px) {
  .table-responsive-xl {
    display: block;
    width: 100%;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }

  .table-responsive-xl>.table-bordered {
    border: 0;
  }
}

.table-responsive {
  display: block;
  width: 100%;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}

.table-responsive>.table-bordered {
  border: 0;
}

.form-control {
  display: block;
  width: 100%;
  height: calc(1.5em + .75rem + 2px);
  padding: .375rem .75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: .25rem;
  transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}

@media (prefers-reduced-motion:reduce) {
  .form-control {
    transition: none;
  }
}

.form-control::-ms-expand {
  background-color: transparent;
  border: 0;
}

.form-control:focus {
  color: #495057;
  background-color: #fff;
  border-color: #80bdff;
  outline: 0;
  box-shadow: 0 0 0 .2rem rgba(0,123,255,.25);
}

.form-control::-webkit-input-placeholder {
  color: #6c757d;
  opacity: 1;
}

.form-control::-moz-placeholder {
  color: #6c757d;
  opacity: 1;
}

.form-control::-ms-input-placeholder {
  color: #6c757d;
  opacity: 1;
}

.form-control::placeholder {
  color: #6c757d;
  opacity: 1;
}

.form-control:disabled,.form-control[readonly] {
  background-color: #e9ecef;
  opacity: 1;
}

select.form-control:focus::-ms-value {
  color: #495057;
  background-color: #fff;
}

.form-control-file,.form-control-range {
  display: block;
  width: 100%;
}

.col-form-label {
  padding-top: calc(.375rem + 1px);
  padding-bottom: calc(.375rem + 1px);
  margin-bottom: 0;
  font-size: inherit;
  line-height: 1.5;
}

.col-form-label-lg {
  padding-top: calc(.5rem + 1px);
  padding-bottom: calc(.5rem + 1px);
  font-size: 1.25rem;
  line-height: 1.5;
}

.col-form-label-sm {
  padding-top: calc(.25rem + 1px);
  padding-bottom: calc(.25rem + 1px);
  font-size: .875rem;
  line-height: 1.5;
}

.form-control-plaintext {
  display: block;
  width: 100%;
  padding-top: .375rem;
  padding-bottom: .375rem;
  margin-bottom: 0;
  line-height: 1.5;
  color: #212529;
  background-color: transparent;
  border: solid transparent;
  border-width: 1px 0;
}

.form-control-plaintext.form-control-lg,.form-control-plaintext.form-control-sm {
  padding-right: 0;
  padding-left: 0;
}

.form-control-sm {
  height: calc(1.5em + .5rem + 2px);
  padding: .25rem .5rem;
  font-size: .875rem;
  line-height: 1.5;
  border-radius: .2rem;
}

.form-control-lg {
  height: calc(1.5em + 1rem + 2px);
  padding: .5rem 1rem;
  font-size: 1.25rem;
  line-height: 1.5;
  border-radius: .3rem;
}

select.form-control[multiple],select.form-control[size],textarea.form-control {
  height: auto;
}

.form-group {
  margin-bottom: 1rem;
}

.form-text {
  display: block;
  margin-top: .25rem;
}

.form-row {
  display: flex;
  flex-wrap: wrap;
  margin-right: -5px;
  margin-left: -5px;
}

.form-row>.col,.form-row>[class*=col-] {
  padding-right: 5px;
  padding-left: 5px;
}

.form-check {
  position: relative;
  display: block;
  padding-left: 1.25rem;
}

.form-check-input {
  position: absolute;
  margin-top: .3rem;
  margin-left: -1.25rem;
}

.form-check-input:disabled~.form-check-label {
  color: #6c757d;
}

.form-check-label {
  margin-bottom: 0;
}

.form-check-inline {
  display: inline-flex;
  align-items: center;
  padding-left: 0;
  margin-right: .75rem;
}

.form-check-inline .form-check-input {
  position: static;
  margin-top: 0;
  margin-right: .3125rem;
  margin-left: 0;
}

.valid-feedback {
  display: none;
  width: 100%;
  margin-top: .25rem;
  font-size: 80%;
  color: #28a745;
}

.valid-tooltip {
  position: absolute;
  top: 100%;
  z-index: 5;
  display: none;
  max-width: 100%;
  padding: .25rem .5rem;
  margin-top: .1rem;
  font-size: .875rem;
  line-height: 1.5;
  color: #fff;
  background-color: rgba(40,167,69,.9);
  border-radius: .25rem;
}

.form-control.is-valid,.was-validated .form-control:valid {
  border-color: #28a745;
  padding-right: calc(1.5em + .75rem);
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%2328a745' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: center right calc(.375em + .1875rem);
  background-size: calc(.75em + .375rem) calc(.75em + .375rem);
}

.form-control.is-valid:focus,.was-validated .form-control:valid:focus {
  border-color: #28a745;
  box-shadow: 0 0 0 .2rem rgba(40,167,69,.25);
}

.form-control.is-valid~.valid-feedback,.form-control.is-valid~.valid-tooltip,.was-validated .form-control:valid~.valid-feedback,.was-validated .form-control:valid~.valid-tooltip {
  display: block;
}

.was-validated textarea.form-control:valid,textarea.form-control.is-valid {
  padding-right: calc(1.5em + .75rem);
  background-position: top calc(.375em + .1875rem) right calc(.375em + .1875rem);
}

.custom-select.is-valid,.was-validated .custom-select:valid {
  border-color: #28a745;
  padding-right: calc((1em + .75rem) * 3 / 4 + 1.75rem);
  background: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3e%3cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3e%3c/svg%3e") right .75rem center/8px 10px no-repeat,url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%2328a745' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e") center right 1.75rem/calc(.75em + .375rem) calc(.75em + .375rem) no-repeat #fff;
}

.custom-select.is-valid:focus,.was-validated .custom-select:valid:focus {
  border-color: #28a745;
  box-shadow: 0 0 0 .2rem rgba(40,167,69,.25);
}

.custom-select.is-valid~.valid-feedback,.custom-select.is-valid~.valid-tooltip,.was-validated .custom-select:valid~.valid-feedback,.was-validated .custom-select:valid~.valid-tooltip {
  display: block;
}

.form-control-file.is-valid~.valid-feedback,.form-control-file.is-valid~.valid-tooltip,.was-validated .form-control-file:valid~.valid-feedback,.was-validated .form-control-file:valid~.valid-tooltip {
  display: block;
}

.form-check-input.is-valid~.form-check-label,.was-validated .form-check-input:valid~.form-check-label {
  color: #28a745;
}

.form-check-input.is-valid~.valid-feedback,.form-check-input.is-valid~.valid-tooltip,.was-validated .form-check-input:valid~.valid-feedback,.was-validated .form-check-input:valid~.valid-tooltip {
  display: block;
}

.custom-control-input.is-valid~.custom-control-label,.was-validated .custom-control-input:valid~.custom-control-label {
  color: #28a745;
}

.custom-control-input.is-valid~.custom-control-label::before,.was-validated .custom-control-input:valid~.custom-control-label::before {
  border-color: #28a745;
}

.custom-control-input.is-valid~.valid-feedback,.custom-control-input.is-valid~.valid-tooltip,.was-validated .custom-control-input:valid~.valid-feedback,.was-validated .custom-control-input:valid~.valid-tooltip {
  display: block;
}

.custom-control-input.is-valid:checked~.custom-control-label::before,.was-validated .custom-control-input:valid:checked~.custom-control-label::before {
  border-color: #34ce57;
  background-color: #34ce57;
}

.custom-control-input.is-valid:focus~.custom-control-label::before,.was-validated .custom-control-input:valid:focus~.custom-control-label::before {
  box-shadow: 0 0 0 .2rem rgba(40,167,69,.25);
}

.custom-control-input.is-valid:focus:not(:checked)~.custom-control-label::before,.was-validated .custom-control-input:valid:focus:not(:checked)~.custom-control-label::before {
  border-color: #28a745;
}

.custom-file-input.is-valid~.custom-file-label,.was-validated .custom-file-input:valid~.custom-file-label {
  border-color: #28a745;
}

.custom-file-input.is-valid~.valid-feedback,.custom-file-input.is-valid~.valid-tooltip,.was-validated .custom-file-input:valid~.valid-feedback,.was-validated .custom-file-input:valid~.valid-tooltip {
  display: block;
}

.custom-file-input.is-valid:focus~.custom-file-label,.was-validated .custom-file-input:valid:focus~.custom-file-label {
  border-color: #28a745;
  box-shadow: 0 0 0 .2rem rgba(40,167,69,.25);
}

.invalid-feedback {
  display: none;
  width: 100%;
  margin-top: .25rem;
  font-size: 80%;
  color: #dc3545;
}

.invalid-tooltip {
  position: absolute;
  top: 100%;
  z-index: 5;
  display: none;
  max-width: 100%;
  padding: .25rem .5rem;
  margin-top: .1rem;
  font-size: .875rem;
  line-height: 1.5;
  color: #fff;
  background-color: rgba(220,53,69,.9);
  border-radius: .25rem;
}

.form-control.is-invalid,.was-validated .form-control:invalid {
  border-color: #dc3545;
  padding-right: calc(1.5em + .75rem);
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23dc3545' viewBox='-2 -2 7 7'%3e%3cpath stroke='%23dc3545' d='M0 0l3 3m0-3L0 3'/%3e%3ccircle r='.5'/%3e%3ccircle cx='3' r='.5'/%3e%3ccircle cy='3' r='.5'/%3e%3ccircle cx='3' cy='3' r='.5'/%3e%3c/svg%3E");
  background-repeat: no-repeat;
  background-position: center right calc(.375em + .1875rem);
  background-size: calc(.75em + .375rem) calc(.75em + .375rem);
}

.form-control.is-invalid:focus,.was-validated .form-control:invalid:focus {
  border-color: #dc3545;
  box-shadow: 0 0 0 .2rem rgba(220,53,69,.25);
}

.form-control.is-invalid~.invalid-feedback,.form-control.is-invalid~.invalid-tooltip,.was-validated .form-control:invalid~.invalid-feedback,.was-validated .form-control:invalid~.invalid-tooltip {
  display: block;
}

.was-validated textarea.form-control:invalid,textarea.form-control.is-invalid {
  padding-right: calc(1.5em + .75rem);
  background-position: top calc(.375em + .1875rem) right calc(.375em + .1875rem);
}

.custom-select.is-invalid,.was-validated .custom-select:invalid {
  border-color: #dc3545;
  padding-right: calc((1em + .75rem) * 3 / 4 + 1.75rem);
  background: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3e%3cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3e%3c/svg%3e") right .75rem center/8px 10px no-repeat,url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23dc3545' viewBox='-2 -2 7 7'%3e%3cpath stroke='%23dc3545' d='M0 0l3 3m0-3L0 3'/%3e%3ccircle r='.5'/%3e%3ccircle cx='3' r='.5'/%3e%3ccircle cy='3' r='.5'/%3e%3ccircle cx='3' cy='3' r='.5'/%3e%3c/svg%3E") center right 1.75rem/calc(.75em + .375rem) calc(.75em + .375rem) no-repeat #fff;
}

.custom-select.is-invalid:focus,.was-validated .custom-select:invalid:focus {
  border-color: #dc3545;
  box-shadow: 0 0 0 .2rem rgba(220,53,69,.25);
}

.custom-select.is-invalid~.invalid-feedback,.custom-select.is-invalid~.invalid-tooltip,.was-validated .custom-select:invalid~.invalid-feedback,.was-validated .custom-select:invalid~.invalid-tooltip {
  display: block;
}

.form-control-file.is-invalid~.invalid-feedback,.form-control-file.is-invalid~.invalid-tooltip,.was-validated .form-control-file:invalid~.invalid-feedback,.was-validated .form-control-file:invalid~.invalid-tooltip {
  display: block;
}

.form-check-input.is-invalid~.form-check-label,.was-validated .form-check-input:invalid~.form-check-label {
  color: #dc3545;
}

.form-check-input.is-invalid~.invalid-feedback,.form-check-input.is-invalid~.invalid-tooltip,.was-validated .form-check-input:invalid~.invalid-feedback,.was-validated .form-check-input:invalid~.invalid-tooltip {
  display: block;
}

.custom-control-input.is-invalid~.custom-control-label,.was-validated .custom-control-input:invalid~.custom-control-label {
  color: #dc3545;
}

.custom-control-input.is-invalid~.custom-control-label::before,.was-validated .custom-control-input:invalid~.custom-control-label::before {
  border-color: #dc3545;
}

.custom-control-input.is-invalid~.invalid-feedback,.custom-control-input.is-invalid~.invalid-tooltip,.was-validated .custom-control-input:invalid~.invalid-feedback,.was-validated .custom-control-input:invalid~.invalid-tooltip {
  display: block;
}

.custom-control-input.is-invalid:checked~.custom-control-label::before,.was-validated .custom-control-input:invalid:checked~.custom-control-label::before {
  border-color: #e4606d;
  background-color: #e4606d;
}

.custom-control-input.is-invalid:focus~.custom-control-label::before,.was-validated .custom-control-input:invalid:focus~.custom-control-label::before {
  box-shadow: 0 0 0 .2rem rgba(220,53,69,.25);
}

.custom-control-input.is-invalid:focus:not(:checked)~.custom-control-label::before,.was-validated .custom-control-input:invalid:focus:not(:checked)~.custom-control-label::before {
  border-color: #dc3545;
}

.custom-file-input.is-invalid~.custom-file-label,.was-validated .custom-file-input:invalid~.custom-file-label {
  border-color: #dc3545;
}

.custom-file-input.is-invalid~.invalid-feedback,.custom-file-input.is-invalid~.invalid-tooltip,.was-validated .custom-file-input:invalid~.invalid-feedback,.was-validated .custom-file-input:invalid~.invalid-tooltip {
  display: block;
}

.custom-file-input.is-invalid:focus~.custom-file-label,.was-validated .custom-file-input:invalid:focus~.custom-file-label {
  border-color: #dc3545;
  box-shadow: 0 0 0 .2rem rgba(220,53,69,.25);
}

.form-inline {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
}

.form-inline .form-check {
  width: 100%;
}

@media (min-width:576px) {
  .form-inline label {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 0;
  }

  .form-inline .form-group {
    display: flex;
    flex: 0 0 auto;
    flex-flow: row wrap;
    align-items: center;
    margin-bottom: 0;
  }

  .form-inline .form-control {
    display: inline-block;
    width: auto;
    vertical-align: middle;
  }

  .form-inline .form-control-plaintext {
    display: inline-block;
  }

  .form-inline .custom-select,.form-inline .input-group {
    width: auto;
  }

  .form-inline .form-check {
    display: flex;
    align-items: center;
    justify-content: center;
    width: auto;
    padding-left: 0;
  }

  .form-inline .form-check-input {
    position: relative;
    flex-shrink: 0;
    margin-top: 0;
    margin-right: .25rem;
    margin-left: 0;
  }

  .form-inline .custom-control {
    align-items: center;
    justify-content: center;
  }

  .form-inline .custom-control-label {
    margin-bottom: 0;
  }
}

.btn {
  display: inline-block;
  font-weight: 400;
  color: #212529;
  text-align: center;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-color: transparent;
  border: 1px solid transparent;
  padding: .375rem .75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: .25rem;
  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}

@media (prefers-reduced-motion:reduce) {
  .btn {
    transition: none;
  }
}

.btn:hover {
  color: #212529;
  text-decoration: none;
}

.btn.focus,.btn:focus {
  outline: 0;
  box-shadow: 0 0 0 .2rem rgba(0,123,255,.25);
}

.btn.disabled,.btn:disabled {
  opacity: .65;
}

a.btn.disabled,fieldset:disabled a.btn {
  pointer-events: none;
}

.btn-primary {
  color: #fff;
  background-color: #007bff;
  border-color: #007bff;
}

.btn-primary:hover {
  color: #fff;
  background-color: #0069d9;
  border-color: #0062cc;
}

.btn-primary.focus,.btn-primary:focus {
  box-shadow: 0 0 0 .2rem rgba(38,143,255,.5);
}

.btn-primary.disabled,.btn-primary:disabled {
  color: #fff;
  background-color: #007bff;
  border-color: #007bff;
}

.btn-primary:not(:disabled):not(.disabled).active,.btn-primary:not(:disabled):not(.disabled):active,.show>.btn-primary.dropdown-toggle {
  color: #fff;
  background-color: #0062cc;
  border-color: #005cbf;
}

.btn-primary:not(:disabled):not(.disabled).active:focus,.btn-primary:not(:disabled):not(.disabled):active:focus,.show>.btn-primary.dropdown-toggle:focus {
  box-shadow: 0 0 0 .2rem rgba(38,143,255,.5);
}

.btn-secondary {
  color: #fff;
  background-color: #6c757d;
  border-color: #6c757d;
}

.btn-secondary:hover {
  color: #fff;
  background-color: #5a6268;
  border-color: #545b62;
}

.btn-secondary.focus,.btn-secondary:focus {
  box-shadow: 0 0 0 .2rem rgba(130,138,145,.5);
}

.btn-secondary.disabled,.btn-secondary:disabled {
  color: #fff;
  background-color: #6c757d;
  border-color: #6c757d;
}

.btn-secondary:not(:disabled):not(.disabled).active,.btn-secondary:not(:disabled):not(.disabled):active,.show>.btn-secondary.dropdown-toggle {
  color: #fff;
  background-color: #545b62;
  border-color: #4e555b;
}

.btn-secondary:not(:disabled):not(.disabled).active:focus,.btn-secondary:not(:disabled):not(.disabled):active:focus,.show>.btn-secondary.dropdown-toggle:focus {
  box-shadow: 0 0 0 .2rem rgba(130,138,145,.5);
}

.btn-success {
  color: #fff;
  background-color: #28a745;
  border-color: #28a745;
}

.btn-success:hover {
  color: #fff;
  background-color: #218838;
  border-color: #1e7e34;
}

.btn-success.focus,.btn-success:focus {
  box-shadow: 0 0 0 .2rem rgba(72,180,97,.5);
}

.btn-success.disabled,.btn-success:disabled {
  color: #fff;
  background-color: #28a745;
  border-color: #28a745;
}

.btn-success:not(:disabled):not(.disabled).active,.btn-success:not(:disabled):not(.disabled):active,.show>.btn-success.dropdown-toggle {
  color: #fff;
  background-color: #1e7e34;
  border-color: #1c7430;
}

.btn-success:not(:disabled):not(.disabled).active:focus,.btn-success:not(:disabled):not(.disabled):active:focus,.show>.btn-success.dropdown-toggle:focus {
  box-shadow: 0 0 0 .2rem rgba(72,180,97,.5);
}

.btn-info {
  color: #fff;
  background-color: #17a2b8;
  border-color: #17a2b8;
}

.btn-info:hover {
  color: #fff;
  background-color: #138496;
  border-color: #117a8b;
}

.btn-info.focus,.btn-info:focus {
  box-shadow: 0 0 0 .2rem rgba(58,176,195,.5);
}

.btn-info.disabled,.btn-info:disabled {
  color: #fff;
  background-color: #17a2b8;
  border-color: #17a2b8;
}

.btn-info:not(:disabled):not(.disabled).active,.btn-info:not(:disabled):not(.disabled):active,.show>.btn-info.dropdown-toggle {
  color: #fff;
  background-color: #117a8b;
  border-color: #10707f;
}

.btn-info:not(:disabled):not(.disabled).active:focus,.btn-info:not(:disabled):not(.disabled):active:focus,.show>.btn-info.dropdown-toggle:focus {
  box-shadow: 0 0 0 .2rem rgba(58,176,195,.5);
}

.btn-warning {
  color: #212529;
  background-color: #ffc107;
  border-color: #ffc107;
}

.btn-warning:hover {
  color: #212529;
  background-color: #e0a800;
  border-color: #d39e00;
}

.btn-warning.focus,.btn-warning:focus {
  box-shadow: 0 0 0 .2rem rgba(222,170,12,.5);
}

.btn-warning.disabled,.btn-warning:disabled {
  color: #212529;
  background-color: #ffc107;
  border-color: #ffc107;
}

.btn-warning:not(:disabled):not(.disabled).active,.btn-warning:not(:disabled):not(.disabled):active,.show>.btn-warning.dropdown-toggle {
  color: #212529;
  background-color: #d39e00;
  border-color: #c69500;
}

.btn-warning:not(:disabled):not(.disabled).active:focus,.btn-warning:not(:disabled):not(.disabled):active:focus,.show>.btn-warning.dropdown-toggle:focus {
  box-shadow: 0 0 0 .2rem rgba(222,170,12,.5);
}

.btn-danger {
  color: #fff;
  background-color: #dc3545;
  border-color: #dc3545;
}

.btn-danger:hover {
  color: #fff;
  background-color: #c82333;
  border-color: #bd2130;
}

.btn-danger.focus,.btn-danger:focus {
  box-shadow: 0 0 0 .2rem rgba(225,83,97,.5);
}

.btn-danger.disabled,.btn-danger:disabled {
  color: #fff;
  background-color: #dc3545;
  border-color: #dc3545;
}

.btn-danger:not(:disabled):not(.disabled).active,.btn-danger:not(:disabled):not(.disabled):active,.show>.btn-danger.dropdown-toggle {
  color: #fff;
  background-color: #bd2130;
  border-color: #b21f2d;
}

.btn-danger:not(:disabled):not(.disabled).active:focus,.btn-danger:not(:disabled):not(.disabled):active:focus,.show>.btn-danger.dropdown-toggle:focus {
  box-shadow: 0 0 0 .2rem rgba(225,83,97,.5);
}

.btn-light {
  color: #212529;
  background-color: #f8f9fa;
  border-color: #f8f9fa;
}

.btn-light:hover {
  color: #212529;
  background-color: #e2e6ea;
  border-color: #dae0e5;
}

.btn-light.focus,.btn-light:focus {
  box-shadow: 0 0 0 .2rem rgba(216,217,219,.5);
}

.btn-light.disabled,.btn-light:disabled {
  color: #212529;
  background-color: #f8f9fa;
  border-color: #f8f9fa;
}

.btn-light:not(:disabled):not(.disabled).active,.btn-light:not(:disabled):not(.disabled):active,.show>.btn-light.dropdown-toggle {
  color: #212529;
  background-color: #dae0e5;
  border-color: #d3d9df;
}

.btn-light:not(:disabled):not(.disabled).active:focus,.btn-light:not(:disabled):not(.disabled):active:focus,.show>.btn-light.dropdown-toggle:focus {
  box-shadow: 0 0 0 .2rem rgba(216,217,219,.5);
}

.btn-dark {
  color: #fff;
  background-color: #343a40;
  border-color: #343a40;
}

.btn-dark:hover {
  color: #fff;
  background-color: #23272b;
  border-color: #1d2124;
}

.btn-dark.focus,.btn-dark:focus {
  box-shadow: 0 0 0 .2rem rgba(82,88,93,.5);
}

.btn-dark.disabled,.btn-dark:disabled {
  color: #fff;
  background-color: #343a40;
  border-color: #343a40;
}

.btn-dark:not(:disabled):not(.disabled).active,.btn-dark:not(:disabled):not(.disabled):active,.show>.btn-dark.dropdown-toggle {
  color: #fff;
  background-color: #1d2124;
  border-color: #171a1d;
}

.btn-dark:not(:disabled):not(.disabled).active:focus,.btn-dark:not(:disabled):not(.disabled):active:focus,.show>.btn-dark.dropdown-toggle:focus {
  box-shadow: 0 0 0 .2rem rgba(82,88,93,.5);
}

.btn-outline-primary {
  color: #007bff;
  border-color: #007bff;
}

.btn-outline-primary:hover {
  color: #fff;
  background-color: #007bff;
  border-color: #007bff;
}

.btn-outline-primary.focus,.btn-outline-primary:focus {
  box-shadow: 0 0 0 .2rem rgba(0,123,255,.5);
}

.btn-outline-primary.disabled,.btn-outline-primary:disabled {
  color: #007bff;
  background-color: transparent;
}

.btn-outline-primary:not(:disabled):not(.disabled).active,.btn-outline-primary:not(:disabled):not(.disabled):active,.show>.btn-outline-primary.dropdown-toggle {
  color: #fff;
  background-color: #007bff;
  border-color: #007bff;
}

.btn-outline-primary:not(:disabled):not(.disabled).active:focus,.btn-outline-primary:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-primary.dropdown-toggle:focus {
  box-shadow: 0 0 0 .2rem rgba(0,123,255,.5);
}

.btn-outline-secondary {
  color: #6c757d;
  border-color: #6c757d;
}

.btn-outline-secondary:hover {
  color: #fff;
  background-color: #6c757d;
  border-color: #6c757d;
}

.btn-outline-secondary.focus,.btn-outline-secondary:focus {
  box-shadow: 0 0 0 .2rem rgba(108,117,125,.5);
}

.btn-outline-secondary.disabled,.btn-outline-secondary:disabled {
  color: #6c757d;
  background-color: transparent;
}

.btn-outline-secondary:not(:disabled):not(.disabled).active,.btn-outline-secondary:not(:disabled):not(.disabled):active,.show>.btn-outline-secondary.dropdown-toggle {
  color: #fff;
  background-color: #6c757d;
  border-color: #6c757d;
}

.btn-outline-secondary:not(:disabled):not(.disabled).active:focus,.btn-outline-secondary:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-secondary.dropdown-toggle:focus {
  box-shadow: 0 0 0 .2rem rgba(108,117,125,.5);
}

.btn-outline-success {
  color: #28a745;
  border-color: #28a745;
}

.btn-outline-success:hover {
  color: #fff;
  background-color: #28a745;
  border-color: #28a745;
}

.btn-outline-success.focus,.btn-outline-success:focus {
  box-shadow: 0 0 0 .2rem rgba(40,167,69,.5);
}

.btn-outline-success.disabled,.btn-outline-success:disabled {
  color: #28a745;
  background-color: transparent;
}

.btn-outline-success:not(:disabled):not(.disabled).active,.btn-outline-success:not(:disabled):not(.disabled):active,.show>.btn-outline-success.dropdown-toggle {
  color: #fff;
  background-color: #28a745;
  border-color: #28a745;
}

.btn-outline-success:not(:disabled):not(.disabled).active:focus,.btn-outline-success:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-success.dropdown-toggle:focus {
  box-shadow: 0 0 0 .2rem rgba(40,167,69,.5);
}

.btn-outline-info {
  color: #17a2b8;
  border-color: #17a2b8;
}

.btn-outline-info:hover {
  color: #fff;
  background-color: #17a2b8;
  border-color: #17a2b8;
}

.btn-outline-info.focus,.btn-outline-info:focus {
  box-shadow: 0 0 0 .2rem rgba(23,162,184,.5);
}

.btn-outline-info.disabled,.btn-outline-info:disabled {
  color: #17a2b8;
  background-color: transparent;
}

.btn-outline-info:not(:disabled):not(.disabled).active,.btn-outline-info:not(:disabled):not(.disabled):active,.show>.btn-outline-info.dropdown-toggle {
  color: #fff;
  background-color: #17a2b8;
  border-color: #17a2b8;
}

.btn-outline-info:not(:disabled):not(.disabled).active:focus,.btn-outline-info:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-info.dropdown-toggle:focus {
  box-shadow: 0 0 0 .2rem rgba(23,162,184,.5);
}

.btn-outline-warning {
  color: #ffc107;
  border-color: #ffc107;
}

.btn-outline-warning:hover {
  color: #212529;
  background-color: #ffc107;
  border-color: #ffc107;
}

.btn-outline-warning.focus,.btn-outline-warning:focus {
  box-shadow: 0 0 0 .2rem rgba(255,193,7,.5);
}

.btn-outline-warning.disabled,.btn-outline-warning:disabled {
  color: #ffc107;
  background-color: transparent;
}

.btn-outline-warning:not(:disabled):not(.disabled).active,.btn-outline-warning:not(:disabled):not(.disabled):active,.show>.btn-outline-warning.dropdown-toggle {
  color: #212529;
  background-color: #ffc107;
  border-color: #ffc107;
}

.btn-outline-warning:not(:disabled):not(.disabled).active:focus,.btn-outline-warning:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-warning.dropdown-toggle:focus {
  box-shadow: 0 0 0 .2rem rgba(255,193,7,.5);
}

.btn-outline-danger {
  color: #dc3545;
  border-color: #dc3545;
}

.btn-outline-danger:hover {
  color: #fff;
  background-color: #dc3545;
  border-color: #dc3545;
}

.btn-outline-danger.focus,.btn-outline-danger:focus {
  box-shadow: 0 0 0 .2rem rgba(220,53,69,.5);
}

.btn-outline-danger.disabled,.btn-outline-danger:disabled {
  color: #dc3545;
  background-color: transparent;
}

.btn-outline-danger:not(:disabled):not(.disabled).active,.btn-outline-danger:not(:disabled):not(.disabled):active,.show>.btn-outline-danger.dropdown-toggle {
  color: #fff;
  background-color: #dc3545;
  border-color: #dc3545;
}

.btn-outline-danger:not(:disabled):not(.disabled).active:focus,.btn-outline-danger:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-danger.dropdown-toggle:focus {
  box-shadow: 0 0 0 .2rem rgba(220,53,69,.5);
}

.btn-outline-light {
  color: #f8f9fa;
  border-color: #f8f9fa;
}

.btn-outline-light:hover {
  color: #212529;
  background-color: #f8f9fa;
  border-color: #f8f9fa;
}

.btn-outline-light.focus,.btn-outline-light:focus {
  box-shadow: 0 0 0 .2rem rgba(248,249,250,.5);
}

.btn-outline-light.disabled,.btn-outline-light:disabled {
  color: #f8f9fa;
  background-color: transparent;
}

.btn-outline-light:not(:disabled):not(.disabled).active,.btn-outline-light:not(:disabled):not(.disabled):active,.show>.btn-outline-light.dropdown-toggle {
  color: #212529;
  background-color: #f8f9fa;
  border-color: #f8f9fa;
}

.btn-outline-light:not(:disabled):not(.disabled).active:focus,.btn-outline-light:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-light.dropdown-toggle:focus {
  box-shadow: 0 0 0 .2rem rgba(248,249,250,.5);
}

.btn-outline-dark {
  color: #343a40;
  border-color: #343a40;
}

.btn-outline-dark:hover {
  color: #fff;
  background-color: #343a40;
  border-color: #343a40;
}

.btn-outline-dark.focus,.btn-outline-dark:focus {
  box-shadow: 0 0 0 .2rem rgba(52,58,64,.5);
}

.btn-outline-dark.disabled,.btn-outline-dark:disabled {
  color: #343a40;
  background-color: transparent;
}

.btn-outline-dark:not(:disabled):not(.disabled).active,.btn-outline-dark:not(:disabled):not(.disabled):active,.show>.btn-outline-dark.dropdown-toggle {
  color: #fff;
  background-color: #343a40;
  border-color: #343a40;
}

.btn-outline-dark:not(:disabled):not(.disabled).active:focus,.btn-outline-dark:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-dark.dropdown-toggle:focus {
  box-shadow: 0 0 0 .2rem rgba(52,58,64,.5);
}

.btn-link {
  font-weight: 400;
  color: #007bff;
  text-decoration: none;
}

.btn-link:hover {
  color: #0056b3;
  text-decoration: underline;
}

.btn-link.focus,.btn-link:focus {
  text-decoration: underline;
  box-shadow: none;
}

.btn-link.disabled,.btn-link:disabled {
  color: #6c757d;
  pointer-events: none;
}

.btn-group-lg>.btn,.btn-lg {
  padding: .5rem 1rem;
  font-size: 1.25rem;
  line-height: 1.5;
  border-radius: .3rem;
}

.btn-group-sm>.btn,.btn-sm {
  padding: .25rem .5rem;
  font-size: .875rem;
  line-height: 1.5;
  border-radius: .2rem;
}

.btn-block {
  display: block;
  width: 100%;
}

.btn-block+.btn-block {
  margin-top: .5rem;
}

input[type=button].btn-block,input[type=reset].btn-block,input[type=submit].btn-block {
  width: 100%;
}

.fade {
  transition: opacity .15s linear;
}

@media (prefers-reduced-motion:reduce) {
  .fade {
    transition: none;
  }
}

.fade:not(.show) {
  opacity: 0;
}

.collapse:not(.show) {
  display: none;
}

.collapsing {
  position: relative;
  height: 0;
  overflow: hidden;
  transition: height .35s ease;
}

.dropdown,.dropleft,.dropright,.dropup {
  position: relative;
}

.dropdown-toggle {
  white-space: nowrap;
}

.dropdown-toggle::after {
  display: inline-block;
  margin-left: .255em;
  vertical-align: .255em;
  content: "";
  border-top: .3em solid;
  border-right: .3em solid transparent;
  border-bottom: 0;
  border-left: .3em solid transparent;
}

.dropdown-toggle:empty::after {
  margin-left: 0;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1000;
  display: none;
  float: left;
  min-width: 10rem;
  padding: .5rem 0;
  margin: .125rem 0 0;
  font-size: 1rem;
  color: #212529;
  text-align: left;
  list-style: none;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(0,0,0,.15);
  border-radius: .25rem;
}

.dropdown-menu-left {
  right: auto;
  left: 0;
}

.dropdown-menu-right {
  right: 0;
  left: auto;
}

@media (min-width:576px) {
  .dropdown-menu-sm-left {
    right: auto;
    left: 0;
  }

  .dropdown-menu-sm-right {
    right: 0;
    left: auto;
  }
}

@media (min-width:768px) {
  .dropdown-menu-md-left {
    right: auto;
    left: 0;
  }

  .dropdown-menu-md-right {
    right: 0;
    left: auto;
  }
}

@media (min-width:992px) {
  .dropdown-menu-lg-left {
    right: auto;
    left: 0;
  }

  .dropdown-menu-lg-right {
    right: 0;
    left: auto;
  }
}

@media (min-width:1200px) {
  .dropdown-menu-xl-left {
    right: auto;
    left: 0;
  }

  .dropdown-menu-xl-right {
    right: 0;
    left: auto;
  }
}

.dropup .dropdown-menu {
  top: auto;
  bottom: 100%;
  margin-top: 0;
  margin-bottom: .125rem;
}

.dropup .dropdown-toggle::after {
  display: inline-block;
  margin-left: .255em;
  vertical-align: .255em;
  content: "";
  border-top: 0;
  border-right: .3em solid transparent;
  border-bottom: .3em solid;
  border-left: .3em solid transparent;
}

.dropup .dropdown-toggle:empty::after {
  margin-left: 0;
}

.dropright .dropdown-menu {
  top: 0;
  right: auto;
  left: 100%;
  margin-top: 0;
  margin-left: .125rem;
}

.dropright .dropdown-toggle::after {
  display: inline-block;
  margin-left: .255em;
  content: "";
  border-top: .3em solid transparent;
  border-right: 0;
  border-bottom: .3em solid transparent;
  border-left: .3em solid;
  vertical-align: 0;
}

.dropright .dropdown-toggle:empty::after {
  margin-left: 0;
}

.dropleft .dropdown-menu {
  top: 0;
  right: 100%;
  left: auto;
  margin-top: 0;
  margin-right: .125rem;
}

.dropleft .dropdown-toggle::after {
  margin-left: .255em;
  vertical-align: .255em;
  content: "";
  display: none;
}

.dropleft .dropdown-toggle::before {
  display: inline-block;
  margin-right: .255em;
  content: "";
  border-top: .3em solid transparent;
  border-right: .3em solid;
  border-bottom: .3em solid transparent;
  vertical-align: 0;
}

.dropleft .dropdown-toggle:empty::after {
  margin-left: 0;
}

.dropdown-menu[x-placement^=bottom],.dropdown-menu[x-placement^=left],.dropdown-menu[x-placement^=right],.dropdown-menu[x-placement^=top] {
  right: auto;
  bottom: auto;
}

.dropdown-divider {
  height: 0;
  margin: .5rem 0;
  overflow: hidden;
  border-top: 1px solid #e9ecef;
}

.dropdown-item {
  display: block;
  width: 100%;
  padding: .25rem 1.5rem;
  clear: both;
  font-weight: 400;
  color: #212529;
  text-align: inherit;
  white-space: nowrap;
  background-color: transparent;
  border: 0;
}

.dropdown-item:focus,.dropdown-item:hover {
  color: #16181b;
  text-decoration: none;
  background-color: #f8f9fa;
}

.dropdown-item.active,.dropdown-item:active {
  color: #fff;
  text-decoration: none;
  background-color: #007bff;
}

.dropdown-item.disabled,.dropdown-item:disabled {
  color: #6c757d;
  pointer-events: none;
  background-color: transparent;
}

.dropdown-menu.show {
  display: block;
}

.dropdown-header {
  display: block;
  padding: .5rem 1.5rem;
  margin-bottom: 0;
  font-size: .875rem;
  color: #6c757d;
  white-space: nowrap;
}

.dropdown-item-text {
  display: block;
  padding: .25rem 1.5rem;
  color: #212529;
}

.btn-group,.btn-group-vertical {
  position: relative;
  display: inline-flex;
  vertical-align: middle;
}

.btn-group-vertical>.btn,.btn-group>.btn {
  position: relative;
  flex: 1 1 auto;
}

.btn-group-vertical>.btn.active,.btn-group-vertical>.btn:active,.btn-group-vertical>.btn:focus,.btn-group-vertical>.btn:hover,.btn-group>.btn.active,.btn-group>.btn:active,.btn-group>.btn:focus,.btn-group>.btn:hover {
  z-index: 1;
}

.btn-toolbar {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}

.btn-toolbar .input-group {
  width: auto;
}

.btn-group>.btn-group:not(:first-child),.btn-group>.btn:not(:first-child) {
  margin-left: -1px;
}

.btn-group>.btn-group:not(:last-child)>.btn,.btn-group>.btn:not(:last-child):not(.dropdown-toggle) {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.btn-group>.btn-group:not(:first-child)>.btn,.btn-group>.btn:not(:first-child) {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.dropdown-toggle-split {
  padding-right: .5625rem;
  padding-left: .5625rem;
}

.dropdown-toggle-split::after,.dropright .dropdown-toggle-split::after,.dropup .dropdown-toggle-split::after {
  margin-left: 0;
}

.dropleft .dropdown-toggle-split::before {
  margin-right: 0;
}

.btn-group-sm>.btn+.dropdown-toggle-split,.btn-sm+.dropdown-toggle-split {
  padding-right: .375rem;
  padding-left: .375rem;
}

.btn-group-lg>.btn+.dropdown-toggle-split,.btn-lg+.dropdown-toggle-split {
  padding-right: .75rem;
  padding-left: .75rem;
}

.btn-group-vertical {
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}

.btn-group-vertical>.btn,.btn-group-vertical>.btn-group {
  width: 100%;
}

.btn-group-vertical>.btn-group:not(:first-child),.btn-group-vertical>.btn:not(:first-child) {
  margin-top: -1px;
}

.btn-group-vertical>.btn-group:not(:last-child)>.btn,.btn-group-vertical>.btn:not(:last-child):not(.dropdown-toggle) {
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.btn-group-vertical>.btn-group:not(:first-child)>.btn,.btn-group-vertical>.btn:not(:first-child) {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.btn-group-toggle>.btn,.btn-group-toggle>.btn-group>.btn {
  margin-bottom: 0;
}

.btn-group-toggle>.btn input[type=checkbox],.btn-group-toggle>.btn input[type=radio],.btn-group-toggle>.btn-group>.btn input[type=checkbox],.btn-group-toggle>.btn-group>.btn input[type=radio] {
  position: absolute;
  clip: rect(0,0,0,0);
  pointer-events: none;
}

.input-group {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  width: 100%;
}

.input-group>.custom-file,.input-group>.custom-select,.input-group>.form-control,.input-group>.form-control-plaintext {
  position: relative;
  flex: 1 1 auto;
  width: 1%;
  margin-bottom: 0;
}

.input-group>.custom-file+.custom-file,.input-group>.custom-file+.custom-select,.input-group>.custom-file+.form-control,.input-group>.custom-select+.custom-file,.input-group>.custom-select+.custom-select,.input-group>.custom-select+.form-control,.input-group>.form-control+.custom-file,.input-group>.form-control+.custom-select,.input-group>.form-control+.form-control,.input-group>.form-control-plaintext+.custom-file,.input-group>.form-control-plaintext+.custom-select,.input-group>.form-control-plaintext+.form-control {
  margin-left: -1px;
}

.input-group>.custom-file .custom-file-input:focus~.custom-file-label,.input-group>.custom-select:focus,.input-group>.form-control:focus {
  z-index: 3;
}

.input-group>.custom-file .custom-file-input:focus {
  z-index: 4;
}

.input-group>.custom-select:not(:last-child),.input-group>.form-control:not(:last-child) {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.input-group>.custom-select:not(:first-child),.input-group>.form-control:not(:first-child) {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.input-group>.custom-file {
  display: flex;
  align-items: center;
}

.input-group>.custom-file:not(:last-child) .custom-file-label,.input-group>.custom-file:not(:last-child) .custom-file-label::after {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.input-group>.custom-file:not(:first-child) .custom-file-label {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.input-group-append,.input-group-prepend {
  display: flex;
}

.input-group-append .btn,.input-group-prepend .btn {
  position: relative;
  z-index: 2;
}

.input-group-append .btn:focus,.input-group-prepend .btn:focus {
  z-index: 3;
}

.input-group-append .btn+.btn,.input-group-append .btn+.input-group-text,.input-group-append .input-group-text+.btn,.input-group-append .input-group-text+.input-group-text,.input-group-prepend .btn+.btn,.input-group-prepend .btn+.input-group-text,.input-group-prepend .input-group-text+.btn,.input-group-prepend .input-group-text+.input-group-text {
  margin-left: -1px;
}

.input-group-prepend {
  margin-right: -1px;
}

.input-group-append {
  margin-left: -1px;
}

.input-group-text {
  display: flex;
  align-items: center;
  padding: .375rem .75rem;
  margin-bottom: 0;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  text-align: center;
  white-space: nowrap;
  background-color: #e9ecef;
  border: 1px solid #ced4da;
  border-radius: .25rem;
}

.input-group-text input[type=checkbox],.input-group-text input[type=radio] {
  margin-top: 0;
}

.input-group-lg>.custom-select,.input-group-lg>.form-control:not(textarea) {
  height: calc(1.5em + 1rem + 2px);
}

.input-group-lg>.custom-select,.input-group-lg>.form-control,.input-group-lg>.input-group-append>.btn,.input-group-lg>.input-group-append>.input-group-text,.input-group-lg>.input-group-prepend>.btn,.input-group-lg>.input-group-prepend>.input-group-text {
  padding: .5rem 1rem;
  font-size: 1.25rem;
  line-height: 1.5;
  border-radius: .3rem;
}

.input-group-sm>.custom-select,.input-group-sm>.form-control:not(textarea) {
  height: calc(1.5em + .5rem + 2px);
}

.input-group-sm>.custom-select,.input-group-sm>.form-control,.input-group-sm>.input-group-append>.btn,.input-group-sm>.input-group-append>.input-group-text,.input-group-sm>.input-group-prepend>.btn,.input-group-sm>.input-group-prepend>.input-group-text {
  padding: .25rem .5rem;
  font-size: .875rem;
  line-height: 1.5;
  border-radius: .2rem;
}

.input-group-lg>.custom-select,.input-group-sm>.custom-select {
  padding-right: 1.75rem;
}

.input-group>.input-group-append:last-child>.btn:not(:last-child):not(.dropdown-toggle),.input-group>.input-group-append:last-child>.input-group-text:not(:last-child),.input-group>.input-group-append:not(:last-child)>.btn,.input-group>.input-group-append:not(:last-child)>.input-group-text,.input-group>.input-group-prepend>.btn,.input-group>.input-group-prepend>.input-group-text {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.input-group>.input-group-append>.btn,.input-group>.input-group-append>.input-group-text,.input-group>.input-group-prepend:first-child>.btn:not(:first-child),.input-group>.input-group-prepend:first-child>.input-group-text:not(:first-child),.input-group>.input-group-prepend:not(:first-child)>.btn,.input-group>.input-group-prepend:not(:first-child)>.input-group-text {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.custom-control {
  position: relative;
  display: block;
  min-height: 1.5rem;
  padding-left: 1.5rem;
}

.custom-control-inline {
  display: inline-flex;
  margin-right: 1rem;
}

.custom-control-input {
  position: absolute;
  z-index: -1;
  opacity: 0;
}

.custom-control-input:checked~.custom-control-label::before {
  color: #fff;
  border-color: #007bff;
  background-color: #007bff;
}

.custom-control-input:focus~.custom-control-label::before {
  box-shadow: 0 0 0 .2rem rgba(0,123,255,.25);
}

.custom-control-input:focus:not(:checked)~.custom-control-label::before {
  border-color: #80bdff;
}

.custom-control-input:not(:disabled):active~.custom-control-label::before {
  color: #fff;
  background-color: #b3d7ff;
  border-color: #b3d7ff;
}

.custom-control-input:disabled~.custom-control-label {
  color: #6c757d;
}

.custom-control-input:disabled~.custom-control-label::before {
  background-color: #e9ecef;
}

.custom-control-label {
  position: relative;
  margin-bottom: 0;
  vertical-align: top;
}

.custom-control-label::before {
  position: absolute;
  top: .25rem;
  left: -1.5rem;
  display: block;
  width: 1rem;
  height: 1rem;
  pointer-events: none;
  content: "";
  background-color: #fff;
  border: 1px solid #adb5bd;
}

.custom-control-label::after {
  position: absolute;
  top: .25rem;
  left: -1.5rem;
  display: block;
  width: 1rem;
  height: 1rem;
  content: "";
  background: 50%/50% 50% no-repeat;
}

.custom-checkbox .custom-control-label::before {
  border-radius: .25rem;
}

.custom-checkbox .custom-control-input:checked~.custom-control-label::after {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e");
}

.custom-checkbox .custom-control-input:indeterminate~.custom-control-label::before {
  border-color: #007bff;
  background-color: #007bff;
}

.custom-checkbox .custom-control-input:indeterminate~.custom-control-label::after {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 4'%3e%3cpath stroke='%23fff' d='M0 2h4'/%3e%3c/svg%3e");
}

.custom-checkbox .custom-control-input:disabled:checked~.custom-control-label::before {
  background-color: rgba(0,123,255,.5);
}

.custom-checkbox .custom-control-input:disabled:indeterminate~.custom-control-label::before {
  background-color: rgba(0,123,255,.5);
}

.custom-radio .custom-control-label::before {
  border-radius: 50%;
}

.custom-radio .custom-control-input:checked~.custom-control-label::after {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e");
}

.custom-radio .custom-control-input:disabled:checked~.custom-control-label::before {
  background-color: rgba(0,123,255,.5);
}

.custom-switch {
  padding-left: 2.25rem;
}

.custom-switch .custom-control-label::before {
  left: -2.25rem;
  width: 1.75rem;
  pointer-events: all;
  border-radius: .5rem;
}

.custom-switch .custom-control-label::after {
  top: calc(.25rem + 2px);
  left: calc(-2.25rem + 2px);
  width: calc(1rem - 4px);
  height: calc(1rem - 4px);
  background-color: #adb5bd;
  border-radius: .5rem;
  transition: transform .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}

.custom-switch .custom-control-input:checked~.custom-control-label::after {
  background-color: #fff;
  transform: translateX(.75rem);
}

.custom-switch .custom-control-input:disabled:checked~.custom-control-label::before {
  background-color: rgba(0,123,255,.5);
}

.custom-select {
  display: inline-block;
  width: 100%;
  height: calc(1.5em + .75rem + 2px);
  padding: .375rem 1.75rem .375rem .75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  vertical-align: middle;
  background: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3e%3cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3e%3c/svg%3e") right .75rem center/8px 10px no-repeat #fff;
  border: 1px solid #ced4da;
  border-radius: .25rem;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

.custom-select:focus {
  border-color: #80bdff;
  outline: 0;
  box-shadow: 0 0 0 .2rem rgba(0,123,255,.25);
}

.custom-select:focus::-ms-value {
  color: #495057;
  background-color: #fff;
}

.custom-select[multiple],.custom-select[size]:not([size="1"]) {
  height: auto;
  padding-right: .75rem;
  background-image: none;
}

.custom-select:disabled {
  color: #6c757d;
  background-color: #e9ecef;
}

.custom-select::-ms-expand {
  display: none;
}

.custom-select-sm {
  height: calc(1.5em + .5rem + 2px);
  padding-top: .25rem;
  padding-bottom: .25rem;
  padding-left: .5rem;
  font-size: .875rem;
}

.custom-select-lg {
  height: calc(1.5em + 1rem + 2px);
  padding-top: .5rem;
  padding-bottom: .5rem;
  padding-left: 1rem;
  font-size: 1.25rem;
}

.custom-file {
  position: relative;
  display: inline-block;
  width: 100%;
  height: calc(1.5em + .75rem + 2px);
  margin-bottom: 0;
}

.custom-file-input {
  position: relative;
  z-index: 2;
  width: 100%;
  height: calc(1.5em + .75rem + 2px);
  margin: 0;
  opacity: 0;
}

.custom-file-input:focus~.custom-file-label {
  border-color: #80bdff;
  box-shadow: 0 0 0 .2rem rgba(0,123,255,.25);
}

.custom-file-input:disabled~.custom-file-label {
  background-color: #e9ecef;
}

.custom-file-input:lang(en)~.custom-file-label::after {
  content: "Browse";
}

.custom-file-input~.custom-file-label[data-browse]::after {
  content: attr(data-browse);
}

.custom-file-label {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1;
  height: calc(1.5em + .75rem + 2px);
  padding: .375rem .75rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  border: 1px solid #ced4da;
  border-radius: .25rem;
}

.custom-file-label::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 3;
  display: block;
  height: calc(1.5em + .75rem);
  padding: .375rem .75rem;
  line-height: 1.5;
  color: #495057;
  content: "Browse";
  background-color: #e9ecef;
  border-left: inherit;
  border-radius: 0 .25rem .25rem 0;
}

.custom-range {
  width: 100%;
  height: calc(1rem + .4rem);
  padding: 0;
  background-color: transparent;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

.custom-range:focus {
  outline: 0;
}

.custom-range:focus::-webkit-slider-thumb {
  box-shadow: 0 0 0 1px #fff,0 0 0 .2rem rgba(0,123,255,.25);
}

.custom-range:focus::-moz-range-thumb {
  box-shadow: 0 0 0 1px #fff,0 0 0 .2rem rgba(0,123,255,.25);
}

.custom-range:focus::-ms-thumb {
  box-shadow: 0 0 0 1px #fff,0 0 0 .2rem rgba(0,123,255,.25);
}

.custom-range::-moz-focus-outer {
  border: 0;
}

.custom-range::-webkit-slider-thumb {
  width: 1rem;
  height: 1rem;
  margin-top: -.25rem;
  background-color: #007bff;
  border: 0;
  border-radius: 1rem;
  transition: background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  -webkit-appearance: none;
  appearance: none;
}

@media (prefers-reduced-motion:reduce) {
  .collapsing,.custom-switch .custom-control-label::after {
    transition: none;
  }

  .custom-range::-webkit-slider-thumb {
    transition: none;
  }
}

.custom-range::-webkit-slider-thumb:active {
  background-color: #b3d7ff;
}

.custom-range::-webkit-slider-runnable-track {
  width: 100%;
  height: .5rem;
  color: transparent;
  cursor: pointer;
  background-color: #dee2e6;
  border-color: transparent;
  border-radius: 1rem;
}

.custom-range::-moz-range-thumb {
  width: 1rem;
  height: 1rem;
  background-color: #007bff;
  border: 0;
  border-radius: 1rem;
  transition: background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  -moz-appearance: none;
  appearance: none;
}

@media (prefers-reduced-motion:reduce) {
  .custom-range::-moz-range-thumb {
    transition: none;
  }
}

.custom-range::-moz-range-thumb:active {
  background-color: #b3d7ff;
}

.custom-range::-moz-range-track {
  width: 100%;
  height: .5rem;
  color: transparent;
  cursor: pointer;
  background-color: #dee2e6;
  border-color: transparent;
  border-radius: 1rem;
}

.custom-range::-ms-thumb {
  width: 1rem;
  height: 1rem;
  margin-top: 0;
  margin-right: .2rem;
  margin-left: .2rem;
  background-color: #007bff;
  border: 0;
  border-radius: 1rem;
  transition: background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  appearance: none;
}

@media (prefers-reduced-motion:reduce) {
  .custom-range::-ms-thumb {
    transition: none;
  }
}

.custom-range::-ms-thumb:active {
  background-color: #b3d7ff;
}

.custom-range::-ms-track {
  width: 100%;
  height: .5rem;
  color: transparent;
  cursor: pointer;
  background-color: transparent;
  border-color: transparent;
  border-width: .5rem;
}

.custom-range::-ms-fill-lower {
  background-color: #dee2e6;
  border-radius: 1rem;
}

.custom-range::-ms-fill-upper {
  margin-right: 15px;
  background-color: #dee2e6;
  border-radius: 1rem;
}

.custom-range:disabled::-webkit-slider-thumb {
  background-color: #adb5bd;
}

.custom-range:disabled::-webkit-slider-runnable-track {
  cursor: default;
}

.custom-range:disabled::-moz-range-thumb {
  background-color: #adb5bd;
}

.custom-range:disabled::-moz-range-track {
  cursor: default;
}

.custom-range:disabled::-ms-thumb {
  background-color: #adb5bd;
}

.custom-control-label::before,.custom-file-label,.custom-select {
  transition: background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}

@media (prefers-reduced-motion:reduce) {
  .custom-control-label::before,.custom-file-label,.custom-select {
    transition: none;
  }
}

.nav {
  display: flex;
  flex-wrap: wrap;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
}

.nav-link {
  display: block;
  padding: .5rem 1rem;
}

.nav-link:focus,.nav-link:hover {
  text-decoration: none;
}

.nav-link.disabled {
  color: #6c757d;
  pointer-events: none;
  cursor: default;
}

.nav-tabs {
  border-bottom: 1px solid #dee2e6;
}

.nav-tabs .nav-item {
  margin-bottom: -1px;
}

.nav-tabs .nav-link {
  border: 1px solid transparent;
  border-top-left-radius: .25rem;
  border-top-right-radius: .25rem;
}

.nav-tabs .nav-link:focus,.nav-tabs .nav-link:hover {
  border-color: #e9ecef #e9ecef #dee2e6;
}

.nav-tabs .nav-link.disabled {
  color: #6c757d;
  background-color: transparent;
  border-color: transparent;
}

.nav-tabs .nav-item.show .nav-link,.nav-tabs .nav-link.active {
  color: #495057;
  background-color: #fff;
  border-color: #dee2e6 #dee2e6 #fff;
}

.nav-tabs .dropdown-menu {
  margin-top: -1px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.nav-pills .nav-link {
  border-radius: .25rem;
}

.nav-pills .nav-link.active,.nav-pills .show>.nav-link {
  color: #fff;
  background-color: #007bff;
}

.nav-fill .nav-item {
  flex: 1 1 auto;
  text-align: center;
}

.nav-justified .nav-item {
  flex-basis: 0;
  flex-grow: 1;
  text-align: center;
}

.tab-content>.tab-pane {
  display: none;
}

.tab-content>.active {
  display: block;
}

.navbar {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: .5rem 1rem;
}

.navbar>.container,.navbar>.container-fluid {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
}

.navbar-brand {
  display: inline-block;
  padding-top: .3125rem;
  padding-bottom: .3125rem;
  margin-right: 1rem;
  font-size: 1.25rem;
  line-height: inherit;
  white-space: nowrap;
}

.navbar-brand:focus,.navbar-brand:hover {
  text-decoration: none;
}

.navbar-nav {
  display: flex;
  flex-direction: column;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
}

.navbar-nav .nav-link {
  padding-right: 0;
  padding-left: 0;
}

.navbar-nav .dropdown-menu {
  position: static;
  float: none;
}

.navbar-text {
  display: inline-block;
  padding-top: .5rem;
  padding-bottom: .5rem;
}

.navbar-collapse {
  flex-basis: 100%;
  flex-grow: 1;
  align-items: center;
}

.navbar-toggler {
  padding: .25rem .75rem;
  font-size: 1.25rem;
  line-height: 1;
  background-color: transparent;
  border: 1px solid transparent;
  border-radius: .25rem;
}

.navbar-toggler:focus,.navbar-toggler:hover {
  text-decoration: none;
}

.navbar-toggler-icon {
  display: inline-block;
  width: 1.5em;
  height: 1.5em;
  vertical-align: middle;
  content: "";
  background: center center/100% 100% no-repeat;
}

@media (max-width:575.98px) {
  .navbar-expand-sm>.container,.navbar-expand-sm>.container-fluid {
    padding-right: 0;
    padding-left: 0;
  }
}

@media (min-width:576px) {
  .navbar-expand-sm {
    flex-flow: row nowrap;
    justify-content: flex-start;
  }

  .navbar-expand-sm .navbar-nav {
    flex-direction: row;
  }

  .navbar-expand-sm .navbar-nav .dropdown-menu {
    position: absolute;
  }

  .navbar-expand-sm .navbar-nav .nav-link {
    padding-right: .5rem;
    padding-left: .5rem;
  }

  .navbar-expand-sm>.container,.navbar-expand-sm>.container-fluid {
    flex-wrap: nowrap;
  }

  .navbar-expand-sm .navbar-collapse {
    display: flex!important;
    flex-basis: auto;
  }

  .navbar-expand-sm .navbar-toggler {
    display: none;
  }
}

@media (max-width:767.98px) {
  .navbar-expand-md>.container,.navbar-expand-md>.container-fluid {
    padding-right: 0;
    padding-left: 0;
  }
}

@media (min-width:768px) {
  .navbar-expand-md {
    flex-flow: row nowrap;
    justify-content: flex-start;
  }

  .navbar-expand-md .navbar-nav {
    flex-direction: row;
  }

  .navbar-expand-md .navbar-nav .dropdown-menu {
    position: absolute;
  }

  .navbar-expand-md .navbar-nav .nav-link {
    padding-right: .5rem;
    padding-left: .5rem;
  }

  .navbar-expand-md>.container,.navbar-expand-md>.container-fluid {
    flex-wrap: nowrap;
  }

  .navbar-expand-md .navbar-collapse {
    display: flex!important;
    flex-basis: auto;
  }

  .navbar-expand-md .navbar-toggler {
    display: none;
  }
}

@media (max-width:991.98px) {
  .navbar-expand-lg>.container,.navbar-expand-lg>.container-fluid {
    padding-right: 0;
    padding-left: 0;
  }
}

@media (min-width:992px) {
  .navbar-expand-lg {
    flex-flow: row nowrap;
    justify-content: flex-start;
  }

  .navbar-expand-lg .navbar-nav {
    flex-direction: row;
  }

  .navbar-expand-lg .navbar-nav .dropdown-menu {
    position: absolute;
  }

  .navbar-expand-lg .navbar-nav .nav-link {
    padding-right: .5rem;
    padding-left: .5rem;
  }

  .navbar-expand-lg>.container,.navbar-expand-lg>.container-fluid {
    flex-wrap: nowrap;
  }

  .navbar-expand-lg .navbar-collapse {
    display: flex!important;
    flex-basis: auto;
  }

  .navbar-expand-lg .navbar-toggler {
    display: none;
  }
}

@media (max-width:1199.98px) {
  .navbar-expand-xl>.container,.navbar-expand-xl>.container-fluid {
    padding-right: 0;
    padding-left: 0;
  }
}

@media (min-width:1200px) {
  .navbar-expand-xl {
    flex-flow: row nowrap;
    justify-content: flex-start;
  }

  .navbar-expand-xl .navbar-nav {
    flex-direction: row;
  }

  .navbar-expand-xl .navbar-nav .dropdown-menu {
    position: absolute;
  }

  .navbar-expand-xl .navbar-nav .nav-link {
    padding-right: .5rem;
    padding-left: .5rem;
  }

  .navbar-expand-xl>.container,.navbar-expand-xl>.container-fluid {
    flex-wrap: nowrap;
  }

  .navbar-expand-xl .navbar-collapse {
    display: flex!important;
    flex-basis: auto;
  }

  .navbar-expand-xl .navbar-toggler {
    display: none;
  }
}

.navbar-expand {
  flex-flow: row nowrap;
  justify-content: flex-start;
}

.navbar-expand .navbar-nav {
  flex-direction: row;
}

.navbar-expand .navbar-nav .dropdown-menu {
  position: absolute;
}

.navbar-expand .navbar-nav .nav-link {
  padding-right: .5rem;
  padding-left: .5rem;
}

.navbar-expand>.container,.navbar-expand>.container-fluid {
  padding-right: 0;
  padding-left: 0;
  flex-wrap: nowrap;
}

.navbar-expand .navbar-collapse {
  display: flex!important;
  flex-basis: auto;
}

.navbar-expand .navbar-toggler {
  display: none;
}

.navbar-light .navbar-brand,.navbar-light .navbar-brand:focus,.navbar-light .navbar-brand:hover {
  color: rgba(0,0,0,.9);
}

.navbar-light .navbar-nav .nav-link {
  color: rgba(0,0,0,.5);
}

.navbar-light .navbar-nav .nav-link:focus,.navbar-light .navbar-nav .nav-link:hover {
  color: rgba(0,0,0,.7);
}

.navbar-light .navbar-nav .nav-link.disabled {
  color: rgba(0,0,0,.3);
}

.navbar-light .navbar-nav .active>.nav-link,.navbar-light .navbar-nav .nav-link.active,.navbar-light .navbar-nav .nav-link.show,.navbar-light .navbar-nav .show>.nav-link {
  color: rgba(0,0,0,.9);
}

.navbar-light .navbar-toggler {
  color: rgba(0,0,0,.5);
  border-color: rgba(0,0,0,.1);
}

.navbar-light .navbar-toggler-icon {
  background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3e%3cpath stroke='rgba(0, 0, 0, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
}

.navbar-light .navbar-text {
  color: rgba(0,0,0,.5);
}

.navbar-light .navbar-text a,.navbar-light .navbar-text a:focus,.navbar-light .navbar-text a:hover {
  color: rgba(0,0,0,.9);
}

.navbar-dark .navbar-brand,.navbar-dark .navbar-brand:focus,.navbar-dark .navbar-brand:hover {
  color: #fff;
}

.navbar-dark .navbar-nav .nav-link {
  color: rgba(255,255,255,.5);
}

.navbar-dark .navbar-nav .nav-link:focus,.navbar-dark .navbar-nav .nav-link:hover {
  color: rgba(255,255,255,.75);
}

.navbar-dark .navbar-nav .nav-link.disabled {
  color: rgba(255,255,255,.25);
}

.navbar-dark .navbar-nav .active>.nav-link,.navbar-dark .navbar-nav .nav-link.active,.navbar-dark .navbar-nav .nav-link.show,.navbar-dark .navbar-nav .show>.nav-link {
  color: #fff;
}

.navbar-dark .navbar-toggler {
  color: rgba(255,255,255,.5);
  border-color: rgba(255,255,255,.1);
}

.navbar-dark .navbar-toggler-icon {
  background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3e%3cpath stroke='rgba(255, 255, 255, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
}

.navbar-dark .navbar-text {
  color: rgba(255,255,255,.5);
}

.navbar-dark .navbar-text a,.navbar-dark .navbar-text a:focus,.navbar-dark .navbar-text a:hover {
  color: #fff;
}

.card {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0,0,0,.125);
  border-radius: .25rem;
}

.card>hr {
  margin-right: 0;
  margin-left: 0;
}

.card>.list-group:first-child .list-group-item:first-child {
  border-top-left-radius: .25rem;
  border-top-right-radius: .25rem;
}

.card>.list-group:last-child .list-group-item:last-child {
  border-bottom-right-radius: .25rem;
  border-bottom-left-radius: .25rem;
}

.card-body {
  flex: 1 1 auto;
  padding: 1.25rem;
}

.card-title {
  margin-bottom: .75rem;
}

.card-subtitle {
  margin-top: -.375rem;
  margin-bottom: 0;
}

.card-text:last-child {
  margin-bottom: 0;
}

.card-link:hover {
  text-decoration: none;
}

.card-link+.card-link {
  margin-left: 1.25rem;
}

.card-header {
  padding: .75rem 1.25rem;
  margin-bottom: 0;
  background-color: rgba(0,0,0,.03);
  border-bottom: 1px solid rgba(0,0,0,.125);
}

.card-header:first-child {
  border-radius: calc(.25rem - 1px) calc(.25rem - 1px) 0 0;
}

.card-header+.list-group .list-group-item:first-child {
  border-top: 0;
}

.card-footer {
  padding: .75rem 1.25rem;
  background-color: rgba(0,0,0,.03);
  border-top: 1px solid rgba(0,0,0,.125);
}

.card-footer:last-child {
  border-radius: 0 0 calc(.25rem - 1px) calc(.25rem - 1px);
}

.card-header-tabs {
  margin-right: -.625rem;
  margin-bottom: -.75rem;
  margin-left: -.625rem;
  border-bottom: 0;
}

.card-header-pills {
  margin-right: -.625rem;
  margin-left: -.625rem;
}

.card-img-overlay {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 1.25rem;
}

.card-img {
  width: 100%;
  border-radius: calc(.25rem - 1px);
}

.card-img-top {
  width: 100%;
  border-top-left-radius: calc(.25rem - 1px);
  border-top-right-radius: calc(.25rem - 1px);
}

.card-img-bottom {
  width: 100%;
  border-bottom-right-radius: calc(.25rem - 1px);
  border-bottom-left-radius: calc(.25rem - 1px);
}

.card-deck {
  display: flex;
  flex-direction: column;
}

.card-deck .card {
  margin-bottom: 15px;
}

@media (min-width:576px) {
  .card-deck {
    flex-flow: row wrap;
    margin-right: -15px;
    margin-left: -15px;
  }

  .card-deck .card {
    display: flex;
    flex: 1 0 0%;
    flex-direction: column;
    margin-right: 15px;
    margin-bottom: 0;
    margin-left: 15px;
  }
}

.card-group {
  display: flex;
  flex-direction: column;
}

.card-group>.card {
  margin-bottom: 15px;
}

@media (min-width:576px) {
  .card-group {
    flex-flow: row wrap;
  }

  .card-group>.card {
    flex: 1 0 0%;
    margin-bottom: 0;
  }

  .card-group>.card+.card {
    margin-left: 0;
    border-left: 0;
  }

  .card-group>.card:not(:last-child) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  .card-group>.card:not(:last-child) .card-header,.card-group>.card:not(:last-child) .card-img-top {
    border-top-right-radius: 0;
  }

  .card-group>.card:not(:last-child) .card-footer,.card-group>.card:not(:last-child) .card-img-bottom {
    border-bottom-right-radius: 0;
  }

  .card-group>.card:not(:first-child) {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  .card-group>.card:not(:first-child) .card-header,.card-group>.card:not(:first-child) .card-img-top {
    border-top-left-radius: 0;
  }

  .card-group>.card:not(:first-child) .card-footer,.card-group>.card:not(:first-child) .card-img-bottom {
    border-bottom-left-radius: 0;
  }

  .card-columns {
    -moz-column-count: 3;
    column-count: 3;
    -moz-column-gap: 1.25rem;
    column-gap: 1.25rem;
    orphans: 1;
    widows: 1;
  }

  .card-columns .card {
    display: inline-block;
    width: 100%;
  }
}

.card-columns .card {
  margin-bottom: .75rem;
}

.accordion>.card {
  overflow: hidden;
}

.accordion>.card:not(:first-of-type) .card-header:first-child {
  border-radius: 0;
}

.accordion>.card:not(:first-of-type):not(:last-of-type) {
  border-bottom: 0;
  border-radius: 0;
}

.accordion>.card:first-of-type {
  border-bottom: 0;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.accordion>.card:last-of-type {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.accordion>.card .card-header {
  margin-bottom: -1px;
}

.breadcrumb {
  display: flex;
  flex-wrap: wrap;
  padding: .75rem 1rem;
  margin-bottom: 1rem;
  list-style: none;
  background-color: #e9ecef;
  border-radius: .25rem;
}

.breadcrumb-item+.breadcrumb-item {
  padding-left: .5rem;
}

.breadcrumb-item+.breadcrumb-item::before {
  display: inline-block;
  padding-right: .5rem;
  color: #6c757d;
  content: "/";
}

.breadcrumb-item+.breadcrumb-item:hover::before {
  text-decoration: none;
}

.breadcrumb-item.active {
  color: #6c757d;
}

.pagination {
  display: flex;
  padding-left: 0;
  list-style: none;
  border-radius: .25rem;
}

.page-link {
  position: relative;
  display: block;
  padding: .5rem .75rem;
  margin-left: -1px;
  line-height: 1.25;
  color: #007bff;
  background-color: #fff;
  border: 1px solid #dee2e6;
}

.page-link:hover {
  z-index: 2;
  color: #0056b3;
  text-decoration: none;
  background-color: #e9ecef;
  border-color: #dee2e6;
}

.page-link:focus {
  z-index: 2;
  outline: 0;
  box-shadow: 0 0 0 .2rem rgba(0,123,255,.25);
}

.page-item:first-child .page-link {
  margin-left: 0;
  border-top-left-radius: .25rem;
  border-bottom-left-radius: .25rem;
}

.page-item:last-child .page-link {
  border-top-right-radius: .25rem;
  border-bottom-right-radius: .25rem;
}

.page-item.active .page-link {
  z-index: 1;
  color: #fff;
  background-color: #007bff;
  border-color: #007bff;
}

.page-item.disabled .page-link {
  color: #6c757d;
  pointer-events: none;
  cursor: auto;
  background-color: #fff;
  border-color: #dee2e6;
}

.pagination-lg .page-link {
  padding: .75rem 1.5rem;
  font-size: 1.25rem;
  line-height: 1.5;
}

.pagination-lg .page-item:first-child .page-link {
  border-top-left-radius: .3rem;
  border-bottom-left-radius: .3rem;
}

.pagination-lg .page-item:last-child .page-link {
  border-top-right-radius: .3rem;
  border-bottom-right-radius: .3rem;
}

.pagination-sm .page-link {
  padding: .25rem .5rem;
  font-size: .875rem;
  line-height: 1.5;
}

.pagination-sm .page-item:first-child .page-link {
  border-top-left-radius: .2rem;
  border-bottom-left-radius: .2rem;
}

.pagination-sm .page-item:last-child .page-link {
  border-top-right-radius: .2rem;
  border-bottom-right-radius: .2rem;
}

.badge {
  display: inline-block;
  padding: .25em .4em;
  font-size: 75%;
  font-weight: 700;
  line-height: 1;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: .25rem;
  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}

@media (prefers-reduced-motion:reduce) {
  .badge {
    transition: none;
  }
}

a.badge:focus,a.badge:hover {
  text-decoration: none;
}

.badge:empty {
  display: none;
}

.btn .badge {
  position: relative;
  top: -1px;
}

.badge-pill {
  padding-right: .6em;
  padding-left: .6em;
  border-radius: 10rem;
}

.badge-primary {
  color: #fff;
  background-color: #007bff;
}

a.badge-primary:focus,a.badge-primary:hover {
  color: #fff;
  background-color: #0062cc;
}

a.badge-primary.focus,a.badge-primary:focus {
  outline: 0;
  box-shadow: 0 0 0 .2rem rgba(0,123,255,.5);
}

.badge-secondary {
  color: #fff;
  background-color: #6c757d;
}

a.badge-secondary:focus,a.badge-secondary:hover {
  color: #fff;
  background-color: #545b62;
}

a.badge-secondary.focus,a.badge-secondary:focus {
  outline: 0;
  box-shadow: 0 0 0 .2rem rgba(108,117,125,.5);
}

.badge-success {
  color: #fff;
  background-color: #28a745;
}

a.badge-success:focus,a.badge-success:hover {
  color: #fff;
  background-color: #1e7e34;
}

a.badge-success.focus,a.badge-success:focus {
  outline: 0;
  box-shadow: 0 0 0 .2rem rgba(40,167,69,.5);
}

.badge-info {
  color: #fff;
  background-color: #17a2b8;
}

a.badge-info:focus,a.badge-info:hover {
  color: #fff;
  background-color: #117a8b;
}

a.badge-info.focus,a.badge-info:focus {
  outline: 0;
  box-shadow: 0 0 0 .2rem rgba(23,162,184,.5);
}

.badge-warning {
  color: #212529;
  background-color: #ffc107;
}

a.badge-warning:focus,a.badge-warning:hover {
  color: #212529;
  background-color: #d39e00;
}

a.badge-warning.focus,a.badge-warning:focus {
  outline: 0;
  box-shadow: 0 0 0 .2rem rgba(255,193,7,.5);
}

.badge-danger {
  color: #fff;
  background-color: #dc3545;
}

a.badge-danger:focus,a.badge-danger:hover {
  color: #fff;
  background-color: #bd2130;
}

a.badge-danger.focus,a.badge-danger:focus {
  outline: 0;
  box-shadow: 0 0 0 .2rem rgba(220,53,69,.5);
}

.badge-light {
  color: #212529;
  background-color: #f8f9fa;
}

a.badge-light:focus,a.badge-light:hover {
  color: #212529;
  background-color: #dae0e5;
}

a.badge-light.focus,a.badge-light:focus {
  outline: 0;
  box-shadow: 0 0 0 .2rem rgba(248,249,250,.5);
}

.badge-dark {
  color: #fff;
  background-color: #343a40;
}

a.badge-dark:focus,a.badge-dark:hover {
  color: #fff;
  background-color: #1d2124;
}

a.badge-dark.focus,a.badge-dark:focus {
  outline: 0;
  box-shadow: 0 0 0 .2rem rgba(52,58,64,.5);
}

.jumbotron {
  padding: 2rem 1rem;
  margin-bottom: 2rem;
  background-color: #e9ecef;
  border-radius: .3rem;
}

@media (min-width:576px) {
  .jumbotron {
    padding: 4rem 2rem;
  }
}

.jumbotron-fluid {
  padding-right: 0;
  padding-left: 0;
  border-radius: 0;
}

.alert {
  position: relative;
  padding: .75rem 1.25rem;
  margin-bottom: 1rem;
  border: 1px solid transparent;
  border-radius: .25rem;
}

.alert-heading {
  color: inherit;
}

.alert-link {
  font-weight: 700;
}

.alert-dismissible {
  padding-right: 4rem;
}

.alert-dismissible .close {
  position: absolute;
  top: 0;
  right: 0;
  padding: .75rem 1.25rem;
  color: inherit;
}

.alert-primary {
  color: #004085;
  background-color: #cce5ff;
  border-color: #b8daff;
}

.alert-primary hr {
  border-top-color: #9fcdff;
}

.alert-primary .alert-link {
  color: #002752;
}

.alert-secondary {
  color: #383d41;
  background-color: #e2e3e5;
  border-color: #d6d8db;
}

.alert-secondary hr {
  border-top-color: #c8cbcf;
}

.alert-secondary .alert-link {
  color: #202326;
}

.alert-success {
  color: #155724;
  background-color: #d4edda;
  border-color: #c3e6cb;
}

.alert-success hr {
  border-top-color: #b1dfbb;
}

.alert-success .alert-link {
  color: #0b2e13;
}

.alert-info {
  color: #0c5460;
  background-color: #d1ecf1;
  border-color: #bee5eb;
}

.alert-info hr {
  border-top-color: #abdde5;
}

.alert-info .alert-link {
  color: #062c33;
}

.alert-warning {
  color: #856404;
  background-color: #fff3cd;
  border-color: #ffeeba;
}

.alert-warning hr {
  border-top-color: #ffe8a1;
}

.alert-warning .alert-link {
  color: #533f03;
}

.alert-danger {
  color: #721c24;
  background-color: #f8d7da;
  border-color: #f5c6cb;
}

.alert-danger hr {
  border-top-color: #f1b0b7;
}

.alert-danger .alert-link {
  color: #491217;
}

.alert-light {
  color: #818182;
  background-color: #fefefe;
  border-color: #fdfdfe;
}

.alert-light hr {
  border-top-color: #ececf6;
}

.alert-light .alert-link {
  color: #686868;
}

.alert-dark {
  color: #1b1e21;
  background-color: #d6d8d9;
  border-color: #c6c8ca;
}

.alert-dark hr {
  border-top-color: #b9bbbe;
}

.alert-dark .alert-link {
  color: #040505;
}

@-webkit-keyframes progress-bar-stripes {
  from {
    background-position: 1rem 0;
  }

  to {
    background-position: 0 0;
  }
}

@keyframes progress-bar-stripes {
  from {
    background-position: 1rem 0;
  }

  to {
    background-position: 0 0;
  }
}

.progress {
  display: flex;
  height: 1rem;
  overflow: hidden;
  font-size: .75rem;
  background-color: #e9ecef;
  border-radius: .25rem;
}

.progress-bar {
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #fff;
  text-align: center;
  white-space: nowrap;
  background-color: #007bff;
  transition: width .6s ease;
}

.progress-bar-striped {
  background-image: linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);
  background-size: 1rem 1rem;
}

.progress-bar-animated {
  -webkit-animation: 1s linear infinite progress-bar-stripes;
  animation: 1s linear infinite progress-bar-stripes;
}

.media {
  display: flex;
  align-items: flex-start;
}

.media-body {
  flex: 1;
}

.list-group {
  display: flex;
  flex-direction: column;
  padding-left: 0;
  margin-bottom: 0;
}

.list-group-item-action {
  width: 100%;
  color: #495057;
  text-align: inherit;
}

.list-group-item-action:focus,.list-group-item-action:hover {
  z-index: 1;
  color: #495057;
  text-decoration: none;
  background-color: #f8f9fa;
}

.list-group-item-action:active {
  color: #212529;
  background-color: #e9ecef;
}

.list-group-item {
  position: relative;
  display: block;
  padding: .75rem 1.25rem;
  margin-bottom: -1px;
  background-color: #fff;
  border: 1px solid rgba(0,0,0,.125);
}

.list-group-item:first-child {
  border-top-left-radius: .25rem;
  border-top-right-radius: .25rem;
}

.list-group-item:last-child {
  margin-bottom: 0;
  border-bottom-right-radius: .25rem;
  border-bottom-left-radius: .25rem;
}

.list-group-item.disabled,.list-group-item:disabled {
  color: #6c757d;
  pointer-events: none;
  background-color: #fff;
}

.list-group-item.active {
  z-index: 2;
  color: #fff;
  background-color: #007bff;
  border-color: #007bff;
}

.list-group-horizontal {
  flex-direction: row;
}

.list-group-horizontal .list-group-item {
  margin-right: -1px;
  margin-bottom: 0;
}

.list-group-horizontal .list-group-item:first-child {
  border-top-left-radius: .25rem;
  border-bottom-left-radius: .25rem;
  border-top-right-radius: 0;
}

.list-group-horizontal .list-group-item:last-child {
  margin-right: 0;
  border-top-right-radius: .25rem;
  border-bottom-right-radius: .25rem;
  border-bottom-left-radius: 0;
}

@media (min-width:576px) {
  .list-group-horizontal-sm {
    flex-direction: row;
  }

  .list-group-horizontal-sm .list-group-item {
    margin-right: -1px;
    margin-bottom: 0;
  }

  .list-group-horizontal-sm .list-group-item:first-child {
    border-top-left-radius: .25rem;
    border-bottom-left-radius: .25rem;
    border-top-right-radius: 0;
  }

  .list-group-horizontal-sm .list-group-item:last-child {
    margin-right: 0;
    border-top-right-radius: .25rem;
    border-bottom-right-radius: .25rem;
    border-bottom-left-radius: 0;
  }
}

@media (min-width:768px) {
  .list-group-horizontal-md {
    flex-direction: row;
  }

  .list-group-horizontal-md .list-group-item {
    margin-right: -1px;
    margin-bottom: 0;
  }

  .list-group-horizontal-md .list-group-item:first-child {
    border-top-left-radius: .25rem;
    border-bottom-left-radius: .25rem;
    border-top-right-radius: 0;
  }

  .list-group-horizontal-md .list-group-item:last-child {
    margin-right: 0;
    border-top-right-radius: .25rem;
    border-bottom-right-radius: .25rem;
    border-bottom-left-radius: 0;
  }
}

@media (min-width:992px) {
  .list-group-horizontal-lg {
    flex-direction: row;
  }

  .list-group-horizontal-lg .list-group-item {
    margin-right: -1px;
    margin-bottom: 0;
  }

  .list-group-horizontal-lg .list-group-item:first-child {
    border-top-left-radius: .25rem;
    border-bottom-left-radius: .25rem;
    border-top-right-radius: 0;
  }

  .list-group-horizontal-lg .list-group-item:last-child {
    margin-right: 0;
    border-top-right-radius: .25rem;
    border-bottom-right-radius: .25rem;
    border-bottom-left-radius: 0;
  }
}

@media (min-width:1200px) {
  .list-group-horizontal-xl {
    flex-direction: row;
  }

  .list-group-horizontal-xl .list-group-item {
    margin-right: -1px;
    margin-bottom: 0;
  }

  .list-group-horizontal-xl .list-group-item:first-child {
    border-top-left-radius: .25rem;
    border-bottom-left-radius: .25rem;
    border-top-right-radius: 0;
  }

  .list-group-horizontal-xl .list-group-item:last-child {
    margin-right: 0;
    border-top-right-radius: .25rem;
    border-bottom-right-radius: .25rem;
    border-bottom-left-radius: 0;
  }
}

.list-group-flush .list-group-item {
  border-right: 0;
  border-left: 0;
  border-radius: 0;
}

.list-group-flush .list-group-item:last-child {
  margin-bottom: -1px;
}

.list-group-flush:first-child .list-group-item:first-child {
  border-top: 0;
}

.list-group-flush:last-child .list-group-item:last-child {
  margin-bottom: 0;
  border-bottom: 0;
}

.list-group-item-primary {
  color: #004085;
  background-color: #b8daff;
}

.list-group-item-primary.list-group-item-action:focus,.list-group-item-primary.list-group-item-action:hover {
  color: #004085;
  background-color: #9fcdff;
}

.list-group-item-primary.list-group-item-action.active {
  color: #fff;
  background-color: #004085;
  border-color: #004085;
}

.list-group-item-secondary {
  color: #383d41;
  background-color: #d6d8db;
}

.list-group-item-secondary.list-group-item-action:focus,.list-group-item-secondary.list-group-item-action:hover {
  color: #383d41;
  background-color: #c8cbcf;
}

.list-group-item-secondary.list-group-item-action.active {
  color: #fff;
  background-color: #383d41;
  border-color: #383d41;
}

.list-group-item-success {
  color: #155724;
  background-color: #c3e6cb;
}

.list-group-item-success.list-group-item-action:focus,.list-group-item-success.list-group-item-action:hover {
  color: #155724;
  background-color: #b1dfbb;
}

.list-group-item-success.list-group-item-action.active {
  color: #fff;
  background-color: #155724;
  border-color: #155724;
}

.list-group-item-info {
  color: #0c5460;
  background-color: #bee5eb;
}

.list-group-item-info.list-group-item-action:focus,.list-group-item-info.list-group-item-action:hover {
  color: #0c5460;
  background-color: #abdde5;
}

.list-group-item-info.list-group-item-action.active {
  color: #fff;
  background-color: #0c5460;
  border-color: #0c5460;
}

.list-group-item-warning {
  color: #856404;
  background-color: #ffeeba;
}

.list-group-item-warning.list-group-item-action:focus,.list-group-item-warning.list-group-item-action:hover {
  color: #856404;
  background-color: #ffe8a1;
}

.list-group-item-warning.list-group-item-action.active {
  color: #fff;
  background-color: #856404;
  border-color: #856404;
}

.list-group-item-danger {
  color: #721c24;
  background-color: #f5c6cb;
}

.list-group-item-danger.list-group-item-action:focus,.list-group-item-danger.list-group-item-action:hover {
  color: #721c24;
  background-color: #f1b0b7;
}

.list-group-item-danger.list-group-item-action.active {
  color: #fff;
  background-color: #721c24;
  border-color: #721c24;
}

.list-group-item-light {
  color: #818182;
  background-color: #fdfdfe;
}

.list-group-item-light.list-group-item-action:focus,.list-group-item-light.list-group-item-action:hover {
  color: #818182;
  background-color: #ececf6;
}

.list-group-item-light.list-group-item-action.active {
  color: #fff;
  background-color: #818182;
  border-color: #818182;
}

.list-group-item-dark {
  color: #1b1e21;
  background-color: #c6c8ca;
}

.list-group-item-dark.list-group-item-action:focus,.list-group-item-dark.list-group-item-action:hover {
  color: #1b1e21;
  background-color: #b9bbbe;
}

.list-group-item-dark.list-group-item-action.active {
  color: #fff;
  background-color: #1b1e21;
  border-color: #1b1e21;
}

.close {
  float: right;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1;
  color: #000;
  text-shadow: 0 1px 0 #fff;
  opacity: .5;
}

.close:hover {
  color: #000;
  text-decoration: none;
}

.close:not(:disabled):not(.disabled):focus,.close:not(:disabled):not(.disabled):hover {
  opacity: .75;
}

button.close {
  padding: 0;
  background-color: transparent;
  border: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

a.close.disabled {
  pointer-events: none;
}

.toast {
  max-width: 350px;
  overflow: hidden;
  font-size: .875rem;
  background-color: rgba(255,255,255,.85);
  background-clip: padding-box;
  border: 1px solid rgba(0,0,0,.1);
  box-shadow: 0 .25rem .75rem rgba(0,0,0,.1);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  opacity: 0;
  border-radius: .25rem;
}

.toast:not(:last-child) {
  margin-bottom: .75rem;
}

.toast.showing {
  opacity: 1;
}

.toast.show {
  display: block;
  opacity: 1;
}

.toast.hide {
  display: none;
}

.toast-header {
  display: flex;
  align-items: center;
  padding: .25rem .75rem;
  color: #6c757d;
  background-color: rgba(255,255,255,.85);
  background-clip: padding-box;
  border-bottom: 1px solid rgba(0,0,0,.05);
}

.toast-body {
  padding: .75rem;
}

.modal-open {
  overflow: hidden;
}

.modal-open .modal {
  overflow-x: hidden;
  overflow-y: auto;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1050;
  display: none;
  width: 100%;
  height: 100%;
  overflow: hidden;
  outline: 0;
}

.modal-dialog {
  position: relative;
  width: auto;
  margin: .5rem;
  pointer-events: none;
}

.modal.fade .modal-dialog {
  transition: transform .3s ease-out;
  transform: translate(0,-50px);
}

@media (prefers-reduced-motion:reduce) {
  .progress-bar {
    transition: none;
  }

  .progress-bar-animated {
    -webkit-animation: none;
    animation: none;
  }

  .modal.fade .modal-dialog {
    transition: none;
  }
}

.modal.show .modal-dialog {
  transform: none;
}

.modal-dialog-scrollable {
  display: flex;
  max-height: calc(100% - 1rem);
}

.modal-dialog-scrollable .modal-content {
  max-height: calc(100vh - 1rem);
  overflow: hidden;
}

.modal-dialog-scrollable .modal-footer,.modal-dialog-scrollable .modal-header {
  flex-shrink: 0;
}

.modal-dialog-scrollable .modal-body {
  overflow-y: auto;
}

.modal-dialog-centered {
  display: flex;
  align-items: center;
  min-height: calc(100% - 1rem);
}

.modal-dialog-centered::before {
  display: block;
  height: calc(100vh - 1rem);
  content: "";
}

.modal-dialog-centered.modal-dialog-scrollable {
  flex-direction: column;
  justify-content: center;
  height: 100%;
}

.modal-dialog-centered.modal-dialog-scrollable .modal-content {
  max-height: none;
}

.modal-dialog-centered.modal-dialog-scrollable::before {
  content: none;
}

.modal-content {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  pointer-events: auto;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(0,0,0,.2);
  border-radius: .3rem;
  outline: 0;
}

.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1040;
  width: 100vw;
  height: 100vh;
  background-color: #000;
}

.modal-backdrop.fade {
  opacity: 0;
}

.modal-backdrop.show {
  opacity: .5;
}

.modal-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 1rem;
  border-bottom: 1px solid #dee2e6;
  border-top-left-radius: .3rem;
  border-top-right-radius: .3rem;
}

.modal-header .close {
  padding: 1rem;
  margin: -1rem -1rem -1rem auto;
}

.modal-title {
  margin-bottom: 0;
  line-height: 1.5;
}

.modal-body {
  position: relative;
  flex: 1 1 auto;
  padding: 1rem;
}

.modal-footer {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 1rem;
  border-top: 1px solid #dee2e6;
  border-bottom-right-radius: .3rem;
  border-bottom-left-radius: .3rem;
}

.modal-footer>:not(:first-child) {
  margin-left: .25rem;
}

.modal-footer>:not(:last-child) {
  margin-right: .25rem;
}

.modal-scrollbar-measure {
  position: absolute;
  top: -9999px;
  width: 50px;
  height: 50px;
  overflow: scroll;
}

@media (min-width:576px) {
  .modal-dialog {
    max-width: 500px;
    margin: 1.75rem auto;
  }

  .modal-dialog-scrollable {
    max-height: calc(100% - 3.5rem);
  }

  .modal-dialog-scrollable .modal-content {
    max-height: calc(100vh - 3.5rem);
  }

  .modal-dialog-centered {
    min-height: calc(100% - 3.5rem);
  }

  .modal-dialog-centered::before {
    height: calc(100vh - 3.5rem);
  }

  .modal-sm {
    max-width: 300px;
  }
}

@media (min-width:992px) {
  .modal-lg,.modal-xl {
    max-width: 800px;
  }
}

@media (min-width:1200px) {
  .modal-xl {
    max-width: 1140px;
  }
}

.tooltip {
  position: absolute;
  z-index: 1070;
  display: block;
  margin: 0;
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
  text-align: left;
  text-align: start;
  text-decoration: none;
  text-shadow: none;
  text-transform: none;
  letter-spacing: normal;
  word-break: normal;
  word-spacing: normal;
  white-space: normal;
  line-break: auto;
  font-size: .875rem;
  word-wrap: break-word;
  opacity: 0;
}

.tooltip.show {
  opacity: .9;
}

.tooltip .arrow {
  position: absolute;
  display: block;
  width: .8rem;
  height: .4rem;
}

.tooltip .arrow::before {
  position: absolute;
  content: "";
  border-color: transparent;
  border-style: solid;
}

.bs-tooltip-auto[x-placement^=top],.bs-tooltip-top {
  padding: .4rem 0;
}

.bs-tooltip-auto[x-placement^=top] .arrow,.bs-tooltip-top .arrow {
  bottom: 0;
}

.bs-tooltip-auto[x-placement^=top] .arrow::before,.bs-tooltip-top .arrow::before {
  top: 0;
  border-width: .4rem .4rem 0;
  border-top-color: #000;
}

.bs-tooltip-auto[x-placement^=right],.bs-tooltip-right {
  padding: 0 .4rem;
}

.bs-tooltip-auto[x-placement^=right] .arrow,.bs-tooltip-right .arrow {
  left: 0;
  width: .4rem;
  height: .8rem;
}

.bs-tooltip-auto[x-placement^=right] .arrow::before,.bs-tooltip-right .arrow::before {
  right: 0;
  border-width: .4rem .4rem .4rem 0;
  border-right-color: #000;
}

.bs-tooltip-auto[x-placement^=bottom],.bs-tooltip-bottom {
  padding: .4rem 0;
}

.bs-tooltip-auto[x-placement^=bottom] .arrow,.bs-tooltip-bottom .arrow {
  top: 0;
}

.bs-tooltip-auto[x-placement^=bottom] .arrow::before,.bs-tooltip-bottom .arrow::before {
  bottom: 0;
  border-width: 0 .4rem .4rem;
  border-bottom-color: #000;
}

.bs-tooltip-auto[x-placement^=left],.bs-tooltip-left {
  padding: 0 .4rem;
}

.bs-tooltip-auto[x-placement^=left] .arrow,.bs-tooltip-left .arrow {
  right: 0;
  width: .4rem;
  height: .8rem;
}

.bs-tooltip-auto[x-placement^=left] .arrow::before,.bs-tooltip-left .arrow::before {
  left: 0;
  border-width: .4rem 0 .4rem .4rem;
  border-left-color: #000;
}

.tooltip-inner {
  max-width: 200px;
  padding: .25rem .5rem;
  color: #fff;
  text-align: center;
  background-color: #000;
  border-radius: .25rem;
}

.popover {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1060;
  display: block;
  max-width: 276px;
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
  text-align: left;
  text-align: start;
  text-decoration: none;
  text-shadow: none;
  text-transform: none;
  letter-spacing: normal;
  word-break: normal;
  word-spacing: normal;
  white-space: normal;
  line-break: auto;
  font-size: .875rem;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(0,0,0,.2);
  border-radius: .3rem;
}

.popover .arrow {
  position: absolute;
  display: block;
  width: 1rem;
  height: .5rem;
  margin: 0 .3rem;
}

.popover .arrow::after,.popover .arrow::before {
  position: absolute;
  display: block;
  content: "";
  border-color: transparent;
  border-style: solid;
}

.bs-popover-auto[x-placement^=top],.bs-popover-top {
  margin-bottom: .5rem;
}

.bs-popover-auto[x-placement^=top]>.arrow,.bs-popover-top>.arrow {
  bottom: calc((.5rem + 1px) * -1);
}

.bs-popover-auto[x-placement^=top]>.arrow::before,.bs-popover-top>.arrow::before {
  bottom: 0;
  border-width: .5rem .5rem 0;
  border-top-color: rgba(0,0,0,.25);
}

.bs-popover-auto[x-placement^=top]>.arrow::after,.bs-popover-top>.arrow::after {
  bottom: 1px;
  border-width: .5rem .5rem 0;
  border-top-color: #fff;
}

.bs-popover-auto[x-placement^=right],.bs-popover-right {
  margin-left: .5rem;
}

.bs-popover-auto[x-placement^=right]>.arrow,.bs-popover-right>.arrow {
  left: calc((.5rem + 1px) * -1);
  width: .5rem;
  height: 1rem;
  margin: .3rem 0;
}

.bs-popover-auto[x-placement^=right]>.arrow::before,.bs-popover-right>.arrow::before {
  left: 0;
  border-width: .5rem .5rem .5rem 0;
  border-right-color: rgba(0,0,0,.25);
}

.bs-popover-auto[x-placement^=right]>.arrow::after,.bs-popover-right>.arrow::after {
  left: 1px;
  border-width: .5rem .5rem .5rem 0;
  border-right-color: #fff;
}

.bs-popover-auto[x-placement^=bottom],.bs-popover-bottom {
  margin-top: .5rem;
}

.bs-popover-auto[x-placement^=bottom]>.arrow,.bs-popover-bottom>.arrow {
  top: calc((.5rem + 1px) * -1);
}

.bs-popover-auto[x-placement^=bottom]>.arrow::before,.bs-popover-bottom>.arrow::before {
  top: 0;
  border-width: 0 .5rem .5rem;
  border-bottom-color: rgba(0,0,0,.25);
}

.bs-popover-auto[x-placement^=bottom]>.arrow::after,.bs-popover-bottom>.arrow::after {
  top: 1px;
  border-width: 0 .5rem .5rem;
  border-bottom-color: #fff;
}

.bs-popover-auto[x-placement^=bottom] .popover-header::before,.bs-popover-bottom .popover-header::before {
  position: absolute;
  top: 0;
  left: 50%;
  display: block;
  width: 1rem;
  margin-left: -.5rem;
  content: "";
  border-bottom: 1px solid #f7f7f7;
}

.bs-popover-auto[x-placement^=left],.bs-popover-left {
  margin-right: .5rem;
}

.bs-popover-auto[x-placement^=left]>.arrow,.bs-popover-left>.arrow {
  right: calc((.5rem + 1px) * -1);
  width: .5rem;
  height: 1rem;
  margin: .3rem 0;
}

.bs-popover-auto[x-placement^=left]>.arrow::before,.bs-popover-left>.arrow::before {
  right: 0;
  border-width: .5rem 0 .5rem .5rem;
  border-left-color: rgba(0,0,0,.25);
}

.bs-popover-auto[x-placement^=left]>.arrow::after,.bs-popover-left>.arrow::after {
  right: 1px;
  border-width: .5rem 0 .5rem .5rem;
  border-left-color: #fff;
}

.popover-header {
  padding: .5rem .75rem;
  margin-bottom: 0;
  font-size: 1rem;
  background-color: #f7f7f7;
  border-bottom: 1px solid #ebebeb;
  border-top-left-radius: calc(.3rem - 1px);
  border-top-right-radius: calc(.3rem - 1px);
}

.popover-header:empty {
  display: none;
}

.popover-body {
  padding: .5rem .75rem;
  color: #212529;
}

.carousel {
  position: relative;
}

.carousel.pointer-event {
  touch-action: pan-y;
}

.carousel-inner {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.carousel-inner::after {
  display: block;
  clear: both;
  content: "";
}

.carousel-item {
  position: relative;
  display: none;
  float: left;
  width: 100%;
  margin-right: -100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  transition: transform .6s ease-in-out;
}

.carousel-item-next,.carousel-item-prev,.carousel-item.active {
  display: block;
}

.active.carousel-item-right,.carousel-item-next:not(.carousel-item-left) {
  transform: translateX(100%);
}

.active.carousel-item-left,.carousel-item-prev:not(.carousel-item-right) {
  transform: translateX(-100%);
}

.carousel-fade .carousel-item {
  opacity: 0;
  transition-property: opacity;
  transform: none;
}

.carousel-fade .carousel-item-next.carousel-item-left,.carousel-fade .carousel-item-prev.carousel-item-right,.carousel-fade .carousel-item.active {
  z-index: 1;
  opacity: 1;
}

.carousel-fade .active.carousel-item-left,.carousel-fade .active.carousel-item-right {
  z-index: 0;
  opacity: 0;
  transition: 0s .6s opacity;
}

@media (prefers-reduced-motion:reduce) {
  .carousel-fade .active.carousel-item-left,.carousel-fade .active.carousel-item-right,.carousel-item {
    transition: none;
  }
}

.carousel-control-next,.carousel-control-prev {
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15%;
  color: #fff;
  text-align: center;
  opacity: .5;
  transition: opacity .15s ease;
}

.carousel-control-next:focus,.carousel-control-next:hover,.carousel-control-prev:focus,.carousel-control-prev:hover {
  color: #fff;
  text-decoration: none;
  outline: 0;
  opacity: .9;
}

.carousel-control-prev {
  left: 0;
}

.carousel-control-next {
  right: 0;
}

.carousel-control-next-icon,.carousel-control-prev-icon {
  display: inline-block;
  width: 20px;
  height: 20px;
  background: 50%/100% 100% no-repeat;
}

.carousel-control-prev-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 8 8'%3e%3cpath d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3e%3c/svg%3e");
}

.carousel-control-next-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 8 8'%3e%3cpath d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3e%3c/svg%3e");
}

.carousel-indicators {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 15;
  display: flex;
  justify-content: center;
  padding-left: 0;
  margin-right: 15%;
  margin-left: 15%;
  list-style: none;
}

.carousel-indicators li {
  box-sizing: content-box;
  flex: 0 1 auto;
  width: 30px;
  height: 3px;
  margin-right: 3px;
  margin-left: 3px;
  text-indent: -999px;
  cursor: pointer;
  background-color: #fff;
  background-clip: padding-box;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  opacity: .5;
  transition: opacity .6s ease;
}

@media (prefers-reduced-motion:reduce) {
  .carousel-control-next,.carousel-control-prev,.carousel-indicators li {
    transition: none;
  }
}

.carousel-indicators .active {
  opacity: 1;
}

.carousel-caption {
  position: absolute;
  right: 15%;
  bottom: 20px;
  left: 15%;
  z-index: 10;
  padding-top: 20px;
  padding-bottom: 20px;
  color: #fff;
  text-align: center;
}

@-webkit-keyframes spinner-border {
  to {
    transform: rotate(360deg);
  }
}

@keyframes spinner-border {
  to {
    transform: rotate(360deg);
  }
}

.spinner-border {
  display: inline-block;
  width: 2rem;
  height: 2rem;
  vertical-align: text-bottom;
  border: .25em solid currentColor;
  border-right-color: transparent;
  border-radius: 50%;
  -webkit-animation: .75s linear infinite spinner-border;
  animation: .75s linear infinite spinner-border;
}

.spinner-border-sm {
  width: 1rem;
  height: 1rem;
  border-width: .2em;
}

@-webkit-keyframes spinner-grow {
  0% {
    transform: scale(0);
  }

  50% {
    opacity: 1;
  }
}

@keyframes spinner-grow {
  0% {
    transform: scale(0);
  }

  50% {
    opacity: 1;
  }
}

.spinner-grow {
  display: inline-block;
  width: 2rem;
  height: 2rem;
  vertical-align: text-bottom;
  background-color: currentColor;
  border-radius: 50%;
  opacity: 0;
  -webkit-animation: .75s linear infinite spinner-grow;
  animation: .75s linear infinite spinner-grow;
}

.spinner-grow-sm {
  width: 1rem;
  height: 1rem;
}

.align-baseline {
  vertical-align: baseline!important;
}

.align-top {
  vertical-align: top!important;
}

.align-middle {
  vertical-align: middle!important;
}

.align-bottom {
  vertical-align: bottom!important;
}

.align-text-bottom {
  vertical-align: text-bottom!important;
}

.align-text-top {
  vertical-align: text-top!important;
}

.bg-primary {
  background-color: #007bff!important;
}

a.bg-primary:focus,a.bg-primary:hover,button.bg-primary:focus,button.bg-primary:hover {
  background-color: #0062cc!important;
}

.bg-secondary {
  background-color: #6c757d!important;
}

a.bg-secondary:focus,a.bg-secondary:hover,button.bg-secondary:focus,button.bg-secondary:hover {
  background-color: #545b62!important;
}

.bg-success {
  background-color: #28a745!important;
}

a.bg-success:focus,a.bg-success:hover,button.bg-success:focus,button.bg-success:hover {
  background-color: #1e7e34!important;
}

.bg-info {
  background-color: #17a2b8!important;
}

a.bg-info:focus,a.bg-info:hover,button.bg-info:focus,button.bg-info:hover {
  background-color: #117a8b!important;
}

.bg-warning {
  background-color: #ffc107!important;
}

a.bg-warning:focus,a.bg-warning:hover,button.bg-warning:focus,button.bg-warning:hover {
  background-color: #d39e00!important;
}

.bg-danger {
  background-color: #dc3545!important;
}

a.bg-danger:focus,a.bg-danger:hover,button.bg-danger:focus,button.bg-danger:hover {
  background-color: #bd2130!important;
}

.bg-light {
  background-color: #f8f9fa!important;
}

a.bg-light:focus,a.bg-light:hover,button.bg-light:focus,button.bg-light:hover {
  background-color: #dae0e5!important;
}

.bg-dark {
  background-color: #343a40!important;
}

a.bg-dark:focus,a.bg-dark:hover,button.bg-dark:focus,button.bg-dark:hover {
  background-color: #1d2124!important;
}

.bg-white {
  background-color: #fff!important;
}

.bg-transparent {
  background-color: transparent!important;
}

.border {
  border: 1px solid #dee2e6!important;
}

.border-top {
  border-top: 1px solid #dee2e6!important;
}

.border-right {
  border-right: 1px solid #dee2e6!important;
}

.border-bottom {
  border-bottom: 1px solid #dee2e6!important;
}

.border-left {
  border-left: 1px solid #dee2e6!important;
}

.border-0 {
  border: 0!important;
}

.border-top-0 {
  border-top: 0!important;
}

.border-right-0 {
  border-right: 0!important;
}

.border-bottom-0 {
  border-bottom: 0!important;
}

.border-left-0 {
  border-left: 0!important;
}

.border-primary {
  border-color: #007bff!important;
}

.border-secondary {
  border-color: #6c757d!important;
}

.border-success {
  border-color: #28a745!important;
}

.border-info {
  border-color: #17a2b8!important;
}

.border-warning {
  border-color: #ffc107!important;
}

.border-danger {
  border-color: #dc3545!important;
}

.border-light {
  border-color: #f8f9fa!important;
}

.border-dark {
  border-color: #343a40!important;
}

.border-white {
  border-color: #fff!important;
}

.rounded-sm {
  border-radius: .2rem!important;
}

.rounded {
  border-radius: .25rem!important;
}

.rounded-top {
  border-top-left-radius: .25rem!important;
  border-top-right-radius: .25rem!important;
}

.rounded-right {
  border-top-right-radius: .25rem!important;
  border-bottom-right-radius: .25rem!important;
}

.rounded-bottom {
  border-bottom-right-radius: .25rem!important;
  border-bottom-left-radius: .25rem!important;
}

.rounded-left {
  border-top-left-radius: .25rem!important;
  border-bottom-left-radius: .25rem!important;
}

.rounded-lg {
  border-radius: .3rem!important;
}

.rounded-circle {
  border-radius: 50%!important;
}

.rounded-pill {
  border-radius: 50rem!important;
}

.rounded-0 {
  border-radius: 0!important;
}

.clearfix::after {
  display: block;
  clear: both;
  content: "";
}

.d-none {
  display: none!important;
}

.d-inline {
  display: inline!important;
}

.d-inline-block {
  display: inline-block!important;
}

.d-block {
  display: block!important;
}

.d-table {
  display: table!important;
}

.d-table-row {
  display: table-row!important;
}

.d-table-cell {
  display: table-cell!important;
}

.d-flex {
  display: flex!important;
}

.d-inline-flex {
  display: inline-flex!important;
}

@media (min-width:576px) {
  .d-sm-none {
    display: none!important;
  }

  .d-sm-inline {
    display: inline!important;
  }

  .d-sm-inline-block {
    display: inline-block!important;
  }

  .d-sm-block {
    display: block!important;
  }

  .d-sm-table {
    display: table!important;
  }

  .d-sm-table-row {
    display: table-row!important;
  }

  .d-sm-table-cell {
    display: table-cell!important;
  }

  .d-sm-flex {
    display: flex!important;
  }

  .d-sm-inline-flex {
    display: inline-flex!important;
  }
}

@media (min-width:768px) {
  .d-md-none {
    display: none!important;
  }

  .d-md-inline {
    display: inline!important;
  }

  .d-md-inline-block {
    display: inline-block!important;
  }

  .d-md-block {
    display: block!important;
  }

  .d-md-table {
    display: table!important;
  }

  .d-md-table-row {
    display: table-row!important;
  }

  .d-md-table-cell {
    display: table-cell!important;
  }

  .d-md-flex {
    display: flex!important;
  }

  .d-md-inline-flex {
    display: inline-flex!important;
  }
}

@media (min-width:992px) {
  .d-lg-none {
    display: none!important;
  }

  .d-lg-inline {
    display: inline!important;
  }

  .d-lg-inline-block {
    display: inline-block!important;
  }

  .d-lg-block {
    display: block!important;
  }

  .d-lg-table {
    display: table!important;
  }

  .d-lg-table-row {
    display: table-row!important;
  }

  .d-lg-table-cell {
    display: table-cell!important;
  }

  .d-lg-flex {
    display: flex!important;
  }

  .d-lg-inline-flex {
    display: inline-flex!important;
  }
}

@media (min-width:1200px) {
  .d-xl-none {
    display: none!important;
  }

  .d-xl-inline {
    display: inline!important;
  }

  .d-xl-inline-block {
    display: inline-block!important;
  }

  .d-xl-block {
    display: block!important;
  }

  .d-xl-table {
    display: table!important;
  }

  .d-xl-table-row {
    display: table-row!important;
  }

  .d-xl-table-cell {
    display: table-cell!important;
  }

  .d-xl-flex {
    display: flex!important;
  }

  .d-xl-inline-flex {
    display: inline-flex!important;
  }
}

@media print {
  .d-print-none {
    display: none!important;
  }

  .d-print-inline {
    display: inline!important;
  }

  .d-print-inline-block {
    display: inline-block!important;
  }

  .d-print-block {
    display: block!important;
  }

  .d-print-table {
    display: table!important;
  }

  .d-print-table-row {
    display: table-row!important;
  }

  .d-print-table-cell {
    display: table-cell!important;
  }

  .d-print-flex {
    display: flex!important;
  }

  .d-print-inline-flex {
    display: inline-flex!important;
  }
}

.embed-responsive {
  position: relative;
  display: block;
  width: 100%;
  padding: 0;
  overflow: hidden;
}

.embed-responsive::before {
  display: block;
  content: "";
}

.embed-responsive .embed-responsive-item,.embed-responsive embed,.embed-responsive iframe,.embed-responsive object,.embed-responsive video {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
}

.embed-responsive-21by9::before {
  padding-top: 42.857143%;
}

.embed-responsive-16by9::before {
  padding-top: 56.25%;
}

.embed-responsive-4by3::before {
  padding-top: 75%;
}

.embed-responsive-1by1::before {
  padding-top: 100%;
}

.flex-row {
  flex-direction: row!important;
}

.flex-column {
  flex-direction: column!important;
}

.flex-row-reverse {
  flex-direction: row-reverse!important;
}

.flex-column-reverse {
  flex-direction: column-reverse!important;
}

.flex-wrap {
  flex-wrap: wrap!important;
}

.flex-nowrap {
  flex-wrap: nowrap!important;
}

.flex-wrap-reverse {
  flex-wrap: wrap-reverse!important;
}

.flex-fill {
  flex: 1 1 auto!important;
}

.flex-grow-0 {
  flex-grow: 0!important;
}

.flex-grow-1 {
  flex-grow: 1!important;
}

.flex-shrink-0 {
  flex-shrink: 0!important;
}

.flex-shrink-1 {
  flex-shrink: 1!important;
}

.justify-content-start {
  justify-content: flex-start!important;
}

.justify-content-end {
  justify-content: flex-end!important;
}

.justify-content-center {
  justify-content: center!important;
}

.justify-content-between {
  justify-content: space-between!important;
}

.justify-content-around {
  justify-content: space-around!important;
}

.align-items-start {
  align-items: flex-start!important;
}

.align-items-end {
  align-items: flex-end!important;
}

.align-items-center {
  align-items: center!important;
}

.align-items-baseline {
  align-items: baseline!important;
}

.align-items-stretch {
  align-items: stretch!important;
}

.align-content-start {
  align-content: flex-start!important;
}

.align-content-end {
  align-content: flex-end!important;
}

.align-content-center {
  align-content: center!important;
}

.align-content-between {
  align-content: space-between!important;
}

.align-content-around {
  align-content: space-around!important;
}

.align-content-stretch {
  align-content: stretch!important;
}

.align-self-auto {
  align-self: auto!important;
}

.align-self-start {
  align-self: flex-start!important;
}

.align-self-end {
  align-self: flex-end!important;
}

.align-self-center {
  align-self: center!important;
}

.align-self-baseline {
  align-self: baseline!important;
}

.align-self-stretch {
  align-self: stretch!important;
}

.float-left {
  float: left!important;
}

.float-right {
  float: right!important;
}

.float-none {
  float: none!important;
}

.overflow-auto {
  overflow: auto!important;
}

.overflow-hidden {
  overflow: hidden!important;
}

.position-static {
  position: static!important;
}

.position-relative {
  position: relative!important;
}

.position-absolute {
  position: absolute!important;
}

.position-fixed {
  position: fixed!important;
}

.position-sticky {
  position: -webkit-sticky!important;
  position: sticky!important;
}

.fixed-top {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1030;
}

.fixed-bottom {
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1030;
}

@supports ((position:-webkit-sticky) or (position:sticky)) {
  .sticky-top {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 1020;
  }
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0,0,0,0);
  white-space: nowrap;
  border: 0;
}

.sr-only-focusable:active,.sr-only-focusable:focus {
  position: static;
  width: auto;
  height: auto;
  overflow: visible;
  clip: auto;
  white-space: normal;
}

.shadow-sm {
  box-shadow: 0 .125rem .25rem rgba(0,0,0,.075)!important;
}

.shadow {
  box-shadow: 0 .5rem 1rem rgba(0,0,0,.15)!important;
}

.shadow-lg {
  box-shadow: 0 1rem 3rem rgba(0,0,0,.175)!important;
}

.shadow-none {
  box-shadow: none!important;
}

.w-25 {
  width: 25%!important;
}

.w-50 {
  width: 50%!important;
}

.w-75 {
  width: 75%!important;
}

.w-100 {
  width: 100%!important;
}

.w-auto {
  width: auto!important;
}

.h-25 {
  height: 25%!important;
}

.h-50 {
  height: 50%!important;
}

.h-75 {
  height: 75%!important;
}

.h-100 {
  height: 100%!important;
}

.h-auto {
  height: auto!important;
}

.mw-100 {
  max-width: 100%!important;
}

.mh-100 {
  max-height: 100%!important;
}

.min-vw-100 {
  min-width: 100vw!important;
}

.min-vh-100 {
  min-height: 100vh!important;
}

.vw-100 {
  width: 100vw!important;
}

.vh-100 {
  height: 100vh!important;
}

.stretched-link::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  pointer-events: auto;
  content: "";
  background-color: rgba(0,0,0,0);
}

.m-0 {
  margin: 0!important;
}

.mt-0,.my-0 {
  margin-top: 0!important;
}

.mr-0,.mx-0 {
  margin-right: 0!important;
}

.mb-0,.my-0 {
  margin-bottom: 0!important;
}

.ml-0,.mx-0 {
  margin-left: 0!important;
}

.m-1 {
  margin: .25rem!important;
}

.mt-1,.my-1 {
  margin-top: .25rem!important;
}

.mr-1,.mx-1 {
  margin-right: .25rem!important;
}

.mb-1,.my-1 {
  margin-bottom: .25rem!important;
}

.ml-1,.mx-1 {
  margin-left: .25rem!important;
}

.m-2 {
  margin: .5rem!important;
}

.mt-2,.my-2 {
  margin-top: .5rem!important;
}

.mr-2,.mx-2 {
  margin-right: .5rem!important;
}

.mb-2,.my-2 {
  margin-bottom: .5rem!important;
}

.ml-2,.mx-2 {
  margin-left: .5rem!important;
}

.m-3 {
  margin: 1rem!important;
}

.mt-3,.my-3 {
  margin-top: 1rem!important;
}

.mr-3,.mx-3 {
  margin-right: 1rem!important;
}

.mb-3,.my-3 {
  margin-bottom: 1rem!important;
}

.ml-3,.mx-3 {
  margin-left: 1rem!important;
}

.m-4 {
  margin: 1.5rem!important;
}

.mt-4,.my-4 {
  margin-top: 1.5rem!important;
}

.mr-4,.mx-4 {
  margin-right: 1.5rem!important;
}

.mb-4,.my-4 {
  margin-bottom: 1.5rem!important;
}

.ml-4,.mx-4 {
  margin-left: 1.5rem!important;
}

.m-5 {
  margin: 3rem!important;
}

.mt-5,.my-5 {
  margin-top: 3rem!important;
}

.mr-5,.mx-5 {
  margin-right: 3rem!important;
}

.mb-5,.my-5 {
  margin-bottom: 3rem!important;
}

.ml-5,.mx-5 {
  margin-left: 3rem!important;
}

.p-0 {
  padding: 0!important;
}

.pt-0,.py-0 {
  padding-top: 0!important;
}

.pr-0,.px-0 {
  padding-right: 0!important;
}

.pb-0,.py-0 {
  padding-bottom: 0!important;
}

.pl-0,.px-0 {
  padding-left: 0!important;
}

.p-1 {
  padding: .25rem!important;
}

.pt-1,.py-1 {
  padding-top: .25rem!important;
}

.pr-1,.px-1 {
  padding-right: .25rem!important;
}

.pb-1,.py-1 {
  padding-bottom: .25rem!important;
}

.pl-1,.px-1 {
  padding-left: .25rem!important;
}

.p-2 {
  padding: .5rem!important;
}

.pt-2,.py-2 {
  padding-top: .5rem!important;
}

.pr-2,.px-2 {
  padding-right: .5rem!important;
}

.pb-2,.py-2 {
  padding-bottom: .5rem!important;
}

.pl-2,.px-2 {
  padding-left: .5rem!important;
}

.p-3 {
  padding: 1rem!important;
}

.pt-3,.py-3 {
  padding-top: 1rem!important;
}

.pr-3,.px-3 {
  padding-right: 1rem!important;
}

.pb-3,.py-3 {
  padding-bottom: 1rem!important;
}

.pl-3,.px-3 {
  padding-left: 1rem!important;
}

.p-4 {
  padding: 1.5rem!important;
}

.pt-4,.py-4 {
  padding-top: 1.5rem!important;
}

.pr-4,.px-4 {
  padding-right: 1.5rem!important;
}

.pb-4,.py-4 {
  padding-bottom: 1.5rem!important;
}

.pl-4,.px-4 {
  padding-left: 1.5rem!important;
}

.p-5 {
  padding: 3rem!important;
}

.pt-5,.py-5 {
  padding-top: 3rem!important;
}

.pr-5,.px-5 {
  padding-right: 3rem!important;
}

.pb-5,.py-5 {
  padding-bottom: 3rem!important;
}

.pl-5,.px-5 {
  padding-left: 3rem!important;
}

.m-n1 {
  margin: -.25rem!important;
}

.mt-n1,.my-n1 {
  margin-top: -.25rem!important;
}

.mr-n1,.mx-n1 {
  margin-right: -.25rem!important;
}

.mb-n1,.my-n1 {
  margin-bottom: -.25rem!important;
}

.ml-n1,.mx-n1 {
  margin-left: -.25rem!important;
}

.m-n2 {
  margin: -.5rem!important;
}

.mt-n2,.my-n2 {
  margin-top: -.5rem!important;
}

.mr-n2,.mx-n2 {
  margin-right: -.5rem!important;
}

.mb-n2,.my-n2 {
  margin-bottom: -.5rem!important;
}

.ml-n2,.mx-n2 {
  margin-left: -.5rem!important;
}

.m-n3 {
  margin: -1rem!important;
}

.mt-n3,.my-n3 {
  margin-top: -1rem!important;
}

.mr-n3,.mx-n3 {
  margin-right: -1rem!important;
}

.mb-n3,.my-n3 {
  margin-bottom: -1rem!important;
}

.ml-n3,.mx-n3 {
  margin-left: -1rem!important;
}

.m-n4 {
  margin: -1.5rem!important;
}

.mt-n4,.my-n4 {
  margin-top: -1.5rem!important;
}

.mr-n4,.mx-n4 {
  margin-right: -1.5rem!important;
}

.mb-n4,.my-n4 {
  margin-bottom: -1.5rem!important;
}

.ml-n4,.mx-n4 {
  margin-left: -1.5rem!important;
}

.m-n5 {
  margin: -3rem!important;
}

.mt-n5,.my-n5 {
  margin-top: -3rem!important;
}

.mr-n5,.mx-n5 {
  margin-right: -3rem!important;
}

.mb-n5,.my-n5 {
  margin-bottom: -3rem!important;
}

.ml-n5,.mx-n5 {
  margin-left: -3rem!important;
}

.m-auto {
  margin: auto!important;
}

.mt-auto,.my-auto {
  margin-top: auto!important;
}

.mr-auto,.mx-auto {
  margin-right: auto!important;
}

.mb-auto,.my-auto {
  margin-bottom: auto!important;
}

.ml-auto,.mx-auto {
  margin-left: auto!important;
}

.text-monospace {
  font-family: SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace!important;
}

.text-justify {
  text-align: justify!important;
}

.text-wrap {
  white-space: normal!important;
}

.text-nowrap {
  white-space: nowrap!important;
}

.text-truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.text-left {
  text-align: left!important;
}

.text-right {
  text-align: right!important;
}

.text-center {
  text-align: center!important;
}

@media (min-width:576px) {
  .flex-sm-row {
    flex-direction: row!important;
  }

  .flex-sm-column {
    flex-direction: column!important;
  }

  .flex-sm-row-reverse {
    flex-direction: row-reverse!important;
  }

  .flex-sm-column-reverse {
    flex-direction: column-reverse!important;
  }

  .flex-sm-wrap {
    flex-wrap: wrap!important;
  }

  .flex-sm-nowrap {
    flex-wrap: nowrap!important;
  }

  .flex-sm-wrap-reverse {
    flex-wrap: wrap-reverse!important;
  }

  .flex-sm-fill {
    flex: 1 1 auto!important;
  }

  .flex-sm-grow-0 {
    flex-grow: 0!important;
  }

  .flex-sm-grow-1 {
    flex-grow: 1!important;
  }

  .flex-sm-shrink-0 {
    flex-shrink: 0!important;
  }

  .flex-sm-shrink-1 {
    flex-shrink: 1!important;
  }

  .justify-content-sm-start {
    justify-content: flex-start!important;
  }

  .justify-content-sm-end {
    justify-content: flex-end!important;
  }

  .justify-content-sm-center {
    justify-content: center!important;
  }

  .justify-content-sm-between {
    justify-content: space-between!important;
  }

  .justify-content-sm-around {
    justify-content: space-around!important;
  }

  .align-items-sm-start {
    align-items: flex-start!important;
  }

  .align-items-sm-end {
    align-items: flex-end!important;
  }

  .align-items-sm-center {
    align-items: center!important;
  }

  .align-items-sm-baseline {
    align-items: baseline!important;
  }

  .align-items-sm-stretch {
    align-items: stretch!important;
  }

  .align-content-sm-start {
    align-content: flex-start!important;
  }

  .align-content-sm-end {
    align-content: flex-end!important;
  }

  .align-content-sm-center {
    align-content: center!important;
  }

  .align-content-sm-between {
    align-content: space-between!important;
  }

  .align-content-sm-around {
    align-content: space-around!important;
  }

  .align-content-sm-stretch {
    align-content: stretch!important;
  }

  .align-self-sm-auto {
    align-self: auto!important;
  }

  .align-self-sm-start {
    align-self: flex-start!important;
  }

  .align-self-sm-end {
    align-self: flex-end!important;
  }

  .align-self-sm-center {
    align-self: center!important;
  }

  .align-self-sm-baseline {
    align-self: baseline!important;
  }

  .align-self-sm-stretch {
    align-self: stretch!important;
  }

  .float-sm-left {
    float: left!important;
  }

  .float-sm-right {
    float: right!important;
  }

  .float-sm-none {
    float: none!important;
  }

  .m-sm-0 {
    margin: 0!important;
  }

  .mt-sm-0,.my-sm-0 {
    margin-top: 0!important;
  }

  .mr-sm-0,.mx-sm-0 {
    margin-right: 0!important;
  }

  .mb-sm-0,.my-sm-0 {
    margin-bottom: 0!important;
  }

  .ml-sm-0,.mx-sm-0 {
    margin-left: 0!important;
  }

  .m-sm-1 {
    margin: .25rem!important;
  }

  .mt-sm-1,.my-sm-1 {
    margin-top: .25rem!important;
  }

  .mr-sm-1,.mx-sm-1 {
    margin-right: .25rem!important;
  }

  .mb-sm-1,.my-sm-1 {
    margin-bottom: .25rem!important;
  }

  .ml-sm-1,.mx-sm-1 {
    margin-left: .25rem!important;
  }

  .m-sm-2 {
    margin: .5rem!important;
  }

  .mt-sm-2,.my-sm-2 {
    margin-top: .5rem!important;
  }

  .mr-sm-2,.mx-sm-2 {
    margin-right: .5rem!important;
  }

  .mb-sm-2,.my-sm-2 {
    margin-bottom: .5rem!important;
  }

  .ml-sm-2,.mx-sm-2 {
    margin-left: .5rem!important;
  }

  .m-sm-3 {
    margin: 1rem!important;
  }

  .mt-sm-3,.my-sm-3 {
    margin-top: 1rem!important;
  }

  .mr-sm-3,.mx-sm-3 {
    margin-right: 1rem!important;
  }

  .mb-sm-3,.my-sm-3 {
    margin-bottom: 1rem!important;
  }

  .ml-sm-3,.mx-sm-3 {
    margin-left: 1rem!important;
  }

  .m-sm-4 {
    margin: 1.5rem!important;
  }

  .mt-sm-4,.my-sm-4 {
    margin-top: 1.5rem!important;
  }

  .mr-sm-4,.mx-sm-4 {
    margin-right: 1.5rem!important;
  }

  .mb-sm-4,.my-sm-4 {
    margin-bottom: 1.5rem!important;
  }

  .ml-sm-4,.mx-sm-4 {
    margin-left: 1.5rem!important;
  }

  .m-sm-5 {
    margin: 3rem!important;
  }

  .mt-sm-5,.my-sm-5 {
    margin-top: 3rem!important;
  }

  .mr-sm-5,.mx-sm-5 {
    margin-right: 3rem!important;
  }

  .mb-sm-5,.my-sm-5 {
    margin-bottom: 3rem!important;
  }

  .ml-sm-5,.mx-sm-5 {
    margin-left: 3rem!important;
  }

  .p-sm-0 {
    padding: 0!important;
  }

  .pt-sm-0,.py-sm-0 {
    padding-top: 0!important;
  }

  .pr-sm-0,.px-sm-0 {
    padding-right: 0!important;
  }

  .pb-sm-0,.py-sm-0 {
    padding-bottom: 0!important;
  }

  .pl-sm-0,.px-sm-0 {
    padding-left: 0!important;
  }

  .p-sm-1 {
    padding: .25rem!important;
  }

  .pt-sm-1,.py-sm-1 {
    padding-top: .25rem!important;
  }

  .pr-sm-1,.px-sm-1 {
    padding-right: .25rem!important;
  }

  .pb-sm-1,.py-sm-1 {
    padding-bottom: .25rem!important;
  }

  .pl-sm-1,.px-sm-1 {
    padding-left: .25rem!important;
  }

  .p-sm-2 {
    padding: .5rem!important;
  }

  .pt-sm-2,.py-sm-2 {
    padding-top: .5rem!important;
  }

  .pr-sm-2,.px-sm-2 {
    padding-right: .5rem!important;
  }

  .pb-sm-2,.py-sm-2 {
    padding-bottom: .5rem!important;
  }

  .pl-sm-2,.px-sm-2 {
    padding-left: .5rem!important;
  }

  .p-sm-3 {
    padding: 1rem!important;
  }

  .pt-sm-3,.py-sm-3 {
    padding-top: 1rem!important;
  }

  .pr-sm-3,.px-sm-3 {
    padding-right: 1rem!important;
  }

  .pb-sm-3,.py-sm-3 {
    padding-bottom: 1rem!important;
  }

  .pl-sm-3,.px-sm-3 {
    padding-left: 1rem!important;
  }

  .p-sm-4 {
    padding: 1.5rem!important;
  }

  .pt-sm-4,.py-sm-4 {
    padding-top: 1.5rem!important;
  }

  .pr-sm-4,.px-sm-4 {
    padding-right: 1.5rem!important;
  }

  .pb-sm-4,.py-sm-4 {
    padding-bottom: 1.5rem!important;
  }

  .pl-sm-4,.px-sm-4 {
    padding-left: 1.5rem!important;
  }

  .p-sm-5 {
    padding: 3rem!important;
  }

  .pt-sm-5,.py-sm-5 {
    padding-top: 3rem!important;
  }

  .pr-sm-5,.px-sm-5 {
    padding-right: 3rem!important;
  }

  .pb-sm-5,.py-sm-5 {
    padding-bottom: 3rem!important;
  }

  .pl-sm-5,.px-sm-5 {
    padding-left: 3rem!important;
  }

  .m-sm-n1 {
    margin: -.25rem!important;
  }

  .mt-sm-n1,.my-sm-n1 {
    margin-top: -.25rem!important;
  }

  .mr-sm-n1,.mx-sm-n1 {
    margin-right: -.25rem!important;
  }

  .mb-sm-n1,.my-sm-n1 {
    margin-bottom: -.25rem!important;
  }

  .ml-sm-n1,.mx-sm-n1 {
    margin-left: -.25rem!important;
  }

  .m-sm-n2 {
    margin: -.5rem!important;
  }

  .mt-sm-n2,.my-sm-n2 {
    margin-top: -.5rem!important;
  }

  .mr-sm-n2,.mx-sm-n2 {
    margin-right: -.5rem!important;
  }

  .mb-sm-n2,.my-sm-n2 {
    margin-bottom: -.5rem!important;
  }

  .ml-sm-n2,.mx-sm-n2 {
    margin-left: -.5rem!important;
  }

  .m-sm-n3 {
    margin: -1rem!important;
  }

  .mt-sm-n3,.my-sm-n3 {
    margin-top: -1rem!important;
  }

  .mr-sm-n3,.mx-sm-n3 {
    margin-right: -1rem!important;
  }

  .mb-sm-n3,.my-sm-n3 {
    margin-bottom: -1rem!important;
  }

  .ml-sm-n3,.mx-sm-n3 {
    margin-left: -1rem!important;
  }

  .m-sm-n4 {
    margin: -1.5rem!important;
  }

  .mt-sm-n4,.my-sm-n4 {
    margin-top: -1.5rem!important;
  }

  .mr-sm-n4,.mx-sm-n4 {
    margin-right: -1.5rem!important;
  }

  .mb-sm-n4,.my-sm-n4 {
    margin-bottom: -1.5rem!important;
  }

  .ml-sm-n4,.mx-sm-n4 {
    margin-left: -1.5rem!important;
  }

  .m-sm-n5 {
    margin: -3rem!important;
  }

  .mt-sm-n5,.my-sm-n5 {
    margin-top: -3rem!important;
  }

  .mr-sm-n5,.mx-sm-n5 {
    margin-right: -3rem!important;
  }

  .mb-sm-n5,.my-sm-n5 {
    margin-bottom: -3rem!important;
  }

  .ml-sm-n5,.mx-sm-n5 {
    margin-left: -3rem!important;
  }

  .m-sm-auto {
    margin: auto!important;
  }

  .mt-sm-auto,.my-sm-auto {
    margin-top: auto!important;
  }

  .mr-sm-auto,.mx-sm-auto {
    margin-right: auto!important;
  }

  .mb-sm-auto,.my-sm-auto {
    margin-bottom: auto!important;
  }

  .ml-sm-auto,.mx-sm-auto {
    margin-left: auto!important;
  }

  .text-sm-left {
    text-align: left!important;
  }

  .text-sm-right {
    text-align: right!important;
  }

  .text-sm-center {
    text-align: center!important;
  }
}

@media (min-width:768px) {
  .flex-md-row {
    flex-direction: row!important;
  }

  .flex-md-column {
    flex-direction: column!important;
  }

  .flex-md-row-reverse {
    flex-direction: row-reverse!important;
  }

  .flex-md-column-reverse {
    flex-direction: column-reverse!important;
  }

  .flex-md-wrap {
    flex-wrap: wrap!important;
  }

  .flex-md-nowrap {
    flex-wrap: nowrap!important;
  }

  .flex-md-wrap-reverse {
    flex-wrap: wrap-reverse!important;
  }

  .flex-md-fill {
    flex: 1 1 auto!important;
  }

  .flex-md-grow-0 {
    flex-grow: 0!important;
  }

  .flex-md-grow-1 {
    flex-grow: 1!important;
  }

  .flex-md-shrink-0 {
    flex-shrink: 0!important;
  }

  .flex-md-shrink-1 {
    flex-shrink: 1!important;
  }

  .justify-content-md-start {
    justify-content: flex-start!important;
  }

  .justify-content-md-end {
    justify-content: flex-end!important;
  }

  .justify-content-md-center {
    justify-content: center!important;
  }

  .justify-content-md-between {
    justify-content: space-between!important;
  }

  .justify-content-md-around {
    justify-content: space-around!important;
  }

  .align-items-md-start {
    align-items: flex-start!important;
  }

  .align-items-md-end {
    align-items: flex-end!important;
  }

  .align-items-md-center {
    align-items: center!important;
  }

  .align-items-md-baseline {
    align-items: baseline!important;
  }

  .align-items-md-stretch {
    align-items: stretch!important;
  }

  .align-content-md-start {
    align-content: flex-start!important;
  }

  .align-content-md-end {
    align-content: flex-end!important;
  }

  .align-content-md-center {
    align-content: center!important;
  }

  .align-content-md-between {
    align-content: space-between!important;
  }

  .align-content-md-around {
    align-content: space-around!important;
  }

  .align-content-md-stretch {
    align-content: stretch!important;
  }

  .align-self-md-auto {
    align-self: auto!important;
  }

  .align-self-md-start {
    align-self: flex-start!important;
  }

  .align-self-md-end {
    align-self: flex-end!important;
  }

  .align-self-md-center {
    align-self: center!important;
  }

  .align-self-md-baseline {
    align-self: baseline!important;
  }

  .align-self-md-stretch {
    align-self: stretch!important;
  }

  .float-md-left {
    float: left!important;
  }

  .float-md-right {
    float: right!important;
  }

  .float-md-none {
    float: none!important;
  }

  .m-md-0 {
    margin: 0!important;
  }

  .mt-md-0,.my-md-0 {
    margin-top: 0!important;
  }

  .mr-md-0,.mx-md-0 {
    margin-right: 0!important;
  }

  .mb-md-0,.my-md-0 {
    margin-bottom: 0!important;
  }

  .ml-md-0,.mx-md-0 {
    margin-left: 0!important;
  }

  .m-md-1 {
    margin: .25rem!important;
  }

  .mt-md-1,.my-md-1 {
    margin-top: .25rem!important;
  }

  .mr-md-1,.mx-md-1 {
    margin-right: .25rem!important;
  }

  .mb-md-1,.my-md-1 {
    margin-bottom: .25rem!important;
  }

  .ml-md-1,.mx-md-1 {
    margin-left: .25rem!important;
  }

  .m-md-2 {
    margin: .5rem!important;
  }

  .mt-md-2,.my-md-2 {
    margin-top: .5rem!important;
  }

  .mr-md-2,.mx-md-2 {
    margin-right: .5rem!important;
  }

  .mb-md-2,.my-md-2 {
    margin-bottom: .5rem!important;
  }

  .ml-md-2,.mx-md-2 {
    margin-left: .5rem!important;
  }

  .m-md-3 {
    margin: 1rem!important;
  }

  .mt-md-3,.my-md-3 {
    margin-top: 1rem!important;
  }

  .mr-md-3,.mx-md-3 {
    margin-right: 1rem!important;
  }

  .mb-md-3,.my-md-3 {
    margin-bottom: 1rem!important;
  }

  .ml-md-3,.mx-md-3 {
    margin-left: 1rem!important;
  }

  .m-md-4 {
    margin: 1.5rem!important;
  }

  .mt-md-4,.my-md-4 {
    margin-top: 1.5rem!important;
  }

  .mr-md-4,.mx-md-4 {
    margin-right: 1.5rem!important;
  }

  .mb-md-4,.my-md-4 {
    margin-bottom: 1.5rem!important;
  }

  .ml-md-4,.mx-md-4 {
    margin-left: 1.5rem!important;
  }

  .m-md-5 {
    margin: 3rem!important;
  }

  .mt-md-5,.my-md-5 {
    margin-top: 3rem!important;
  }

  .mr-md-5,.mx-md-5 {
    margin-right: 3rem!important;
  }

  .mb-md-5,.my-md-5 {
    margin-bottom: 3rem!important;
  }

  .ml-md-5,.mx-md-5 {
    margin-left: 3rem!important;
  }

  .p-md-0 {
    padding: 0!important;
  }

  .pt-md-0,.py-md-0 {
    padding-top: 0!important;
  }

  .pr-md-0,.px-md-0 {
    padding-right: 0!important;
  }

  .pb-md-0,.py-md-0 {
    padding-bottom: 0!important;
  }

  .pl-md-0,.px-md-0 {
    padding-left: 0!important;
  }

  .p-md-1 {
    padding: .25rem!important;
  }

  .pt-md-1,.py-md-1 {
    padding-top: .25rem!important;
  }

  .pr-md-1,.px-md-1 {
    padding-right: .25rem!important;
  }

  .pb-md-1,.py-md-1 {
    padding-bottom: .25rem!important;
  }

  .pl-md-1,.px-md-1 {
    padding-left: .25rem!important;
  }

  .p-md-2 {
    padding: .5rem!important;
  }

  .pt-md-2,.py-md-2 {
    padding-top: .5rem!important;
  }

  .pr-md-2,.px-md-2 {
    padding-right: .5rem!important;
  }

  .pb-md-2,.py-md-2 {
    padding-bottom: .5rem!important;
  }

  .pl-md-2,.px-md-2 {
    padding-left: .5rem!important;
  }

  .p-md-3 {
    padding: 1rem!important;
  }

  .pt-md-3,.py-md-3 {
    padding-top: 1rem!important;
  }

  .pr-md-3,.px-md-3 {
    padding-right: 1rem!important;
  }

  .pb-md-3,.py-md-3 {
    padding-bottom: 1rem!important;
  }

  .pl-md-3,.px-md-3 {
    padding-left: 1rem!important;
  }

  .p-md-4 {
    padding: 1.5rem!important;
  }

  .pt-md-4,.py-md-4 {
    padding-top: 1.5rem!important;
  }

  .pr-md-4,.px-md-4 {
    padding-right: 1.5rem!important;
  }

  .pb-md-4,.py-md-4 {
    padding-bottom: 1.5rem!important;
  }

  .pl-md-4,.px-md-4 {
    padding-left: 1.5rem!important;
  }

  .p-md-5 {
    padding: 3rem!important;
  }

  .pt-md-5,.py-md-5 {
    padding-top: 3rem!important;
  }

  .pr-md-5,.px-md-5 {
    padding-right: 3rem!important;
  }

  .pb-md-5,.py-md-5 {
    padding-bottom: 3rem!important;
  }

  .pl-md-5,.px-md-5 {
    padding-left: 3rem!important;
  }

  .m-md-n1 {
    margin: -.25rem!important;
  }

  .mt-md-n1,.my-md-n1 {
    margin-top: -.25rem!important;
  }

  .mr-md-n1,.mx-md-n1 {
    margin-right: -.25rem!important;
  }

  .mb-md-n1,.my-md-n1 {
    margin-bottom: -.25rem!important;
  }

  .ml-md-n1,.mx-md-n1 {
    margin-left: -.25rem!important;
  }

  .m-md-n2 {
    margin: -.5rem!important;
  }

  .mt-md-n2,.my-md-n2 {
    margin-top: -.5rem!important;
  }

  .mr-md-n2,.mx-md-n2 {
    margin-right: -.5rem!important;
  }

  .mb-md-n2,.my-md-n2 {
    margin-bottom: -.5rem!important;
  }

  .ml-md-n2,.mx-md-n2 {
    margin-left: -.5rem!important;
  }

  .m-md-n3 {
    margin: -1rem!important;
  }

  .mt-md-n3,.my-md-n3 {
    margin-top: -1rem!important;
  }

  .mr-md-n3,.mx-md-n3 {
    margin-right: -1rem!important;
  }

  .mb-md-n3,.my-md-n3 {
    margin-bottom: -1rem!important;
  }

  .ml-md-n3,.mx-md-n3 {
    margin-left: -1rem!important;
  }

  .m-md-n4 {
    margin: -1.5rem!important;
  }

  .mt-md-n4,.my-md-n4 {
    margin-top: -1.5rem!important;
  }

  .mr-md-n4,.mx-md-n4 {
    margin-right: -1.5rem!important;
  }

  .mb-md-n4,.my-md-n4 {
    margin-bottom: -1.5rem!important;
  }

  .ml-md-n4,.mx-md-n4 {
    margin-left: -1.5rem!important;
  }

  .m-md-n5 {
    margin: -3rem!important;
  }

  .mt-md-n5,.my-md-n5 {
    margin-top: -3rem!important;
  }

  .mr-md-n5,.mx-md-n5 {
    margin-right: -3rem!important;
  }

  .mb-md-n5,.my-md-n5 {
    margin-bottom: -3rem!important;
  }

  .ml-md-n5,.mx-md-n5 {
    margin-left: -3rem!important;
  }

  .m-md-auto {
    margin: auto!important;
  }

  .mt-md-auto,.my-md-auto {
    margin-top: auto!important;
  }

  .mr-md-auto,.mx-md-auto {
    margin-right: auto!important;
  }

  .mb-md-auto,.my-md-auto {
    margin-bottom: auto!important;
  }

  .ml-md-auto,.mx-md-auto {
    margin-left: auto!important;
  }

  .text-md-left {
    text-align: left!important;
  }

  .text-md-right {
    text-align: right!important;
  }

  .text-md-center {
    text-align: center!important;
  }
}

@media (min-width:992px) {
  .flex-lg-row {
    flex-direction: row!important;
  }

  .flex-lg-column {
    flex-direction: column!important;
  }

  .flex-lg-row-reverse {
    flex-direction: row-reverse!important;
  }

  .flex-lg-column-reverse {
    flex-direction: column-reverse!important;
  }

  .flex-lg-wrap {
    flex-wrap: wrap!important;
  }

  .flex-lg-nowrap {
    flex-wrap: nowrap!important;
  }

  .flex-lg-wrap-reverse {
    flex-wrap: wrap-reverse!important;
  }

  .flex-lg-fill {
    flex: 1 1 auto!important;
  }

  .flex-lg-grow-0 {
    flex-grow: 0!important;
  }

  .flex-lg-grow-1 {
    flex-grow: 1!important;
  }

  .flex-lg-shrink-0 {
    flex-shrink: 0!important;
  }

  .flex-lg-shrink-1 {
    flex-shrink: 1!important;
  }

  .justify-content-lg-start {
    justify-content: flex-start!important;
  }

  .justify-content-lg-end {
    justify-content: flex-end!important;
  }

  .justify-content-lg-center {
    justify-content: center!important;
  }

  .justify-content-lg-between {
    justify-content: space-between!important;
  }

  .justify-content-lg-around {
    justify-content: space-around!important;
  }

  .align-items-lg-start {
    align-items: flex-start!important;
  }

  .align-items-lg-end {
    align-items: flex-end!important;
  }

  .align-items-lg-center {
    align-items: center!important;
  }

  .align-items-lg-baseline {
    align-items: baseline!important;
  }

  .align-items-lg-stretch {
    align-items: stretch!important;
  }

  .align-content-lg-start {
    align-content: flex-start!important;
  }

  .align-content-lg-end {
    align-content: flex-end!important;
  }

  .align-content-lg-center {
    align-content: center!important;
  }

  .align-content-lg-between {
    align-content: space-between!important;
  }

  .align-content-lg-around {
    align-content: space-around!important;
  }

  .align-content-lg-stretch {
    align-content: stretch!important;
  }

  .align-self-lg-auto {
    align-self: auto!important;
  }

  .align-self-lg-start {
    align-self: flex-start!important;
  }

  .align-self-lg-end {
    align-self: flex-end!important;
  }

  .align-self-lg-center {
    align-self: center!important;
  }

  .align-self-lg-baseline {
    align-self: baseline!important;
  }

  .align-self-lg-stretch {
    align-self: stretch!important;
  }

  .float-lg-left {
    float: left!important;
  }

  .float-lg-right {
    float: right!important;
  }

  .float-lg-none {
    float: none!important;
  }

  .m-lg-0 {
    margin: 0!important;
  }

  .mt-lg-0,.my-lg-0 {
    margin-top: 0!important;
  }

  .mr-lg-0,.mx-lg-0 {
    margin-right: 0!important;
  }

  .mb-lg-0,.my-lg-0 {
    margin-bottom: 0!important;
  }

  .ml-lg-0,.mx-lg-0 {
    margin-left: 0!important;
  }

  .m-lg-1 {
    margin: .25rem!important;
  }

  .mt-lg-1,.my-lg-1 {
    margin-top: .25rem!important;
  }

  .mr-lg-1,.mx-lg-1 {
    margin-right: .25rem!important;
  }

  .mb-lg-1,.my-lg-1 {
    margin-bottom: .25rem!important;
  }

  .ml-lg-1,.mx-lg-1 {
    margin-left: .25rem!important;
  }

  .m-lg-2 {
    margin: .5rem!important;
  }

  .mt-lg-2,.my-lg-2 {
    margin-top: .5rem!important;
  }

  .mr-lg-2,.mx-lg-2 {
    margin-right: .5rem!important;
  }

  .mb-lg-2,.my-lg-2 {
    margin-bottom: .5rem!important;
  }

  .ml-lg-2,.mx-lg-2 {
    margin-left: .5rem!important;
  }

  .m-lg-3 {
    margin: 1rem!important;
  }

  .mt-lg-3,.my-lg-3 {
    margin-top: 1rem!important;
  }

  .mr-lg-3,.mx-lg-3 {
    margin-right: 1rem!important;
  }

  .mb-lg-3,.my-lg-3 {
    margin-bottom: 1rem!important;
  }

  .ml-lg-3,.mx-lg-3 {
    margin-left: 1rem!important;
  }

  .m-lg-4 {
    margin: 1.5rem!important;
  }

  .mt-lg-4,.my-lg-4 {
    margin-top: 1.5rem!important;
  }

  .mr-lg-4,.mx-lg-4 {
    margin-right: 1.5rem!important;
  }

  .mb-lg-4,.my-lg-4 {
    margin-bottom: 1.5rem!important;
  }

  .ml-lg-4,.mx-lg-4 {
    margin-left: 1.5rem!important;
  }

  .m-lg-5 {
    margin: 3rem!important;
  }

  .mt-lg-5,.my-lg-5 {
    margin-top: 3rem!important;
  }

  .mr-lg-5,.mx-lg-5 {
    margin-right: 3rem!important;
  }

  .mb-lg-5,.my-lg-5 {
    margin-bottom: 3rem!important;
  }

  .ml-lg-5,.mx-lg-5 {
    margin-left: 3rem!important;
  }

  .p-lg-0 {
    padding: 0!important;
  }

  .pt-lg-0,.py-lg-0 {
    padding-top: 0!important;
  }

  .pr-lg-0,.px-lg-0 {
    padding-right: 0!important;
  }

  .pb-lg-0,.py-lg-0 {
    padding-bottom: 0!important;
  }

  .pl-lg-0,.px-lg-0 {
    padding-left: 0!important;
  }

  .p-lg-1 {
    padding: .25rem!important;
  }

  .pt-lg-1,.py-lg-1 {
    padding-top: .25rem!important;
  }

  .pr-lg-1,.px-lg-1 {
    padding-right: .25rem!important;
  }

  .pb-lg-1,.py-lg-1 {
    padding-bottom: .25rem!important;
  }

  .pl-lg-1,.px-lg-1 {
    padding-left: .25rem!important;
  }

  .p-lg-2 {
    padding: .5rem!important;
  }

  .pt-lg-2,.py-lg-2 {
    padding-top: .5rem!important;
  }

  .pr-lg-2,.px-lg-2 {
    padding-right: .5rem!important;
  }

  .pb-lg-2,.py-lg-2 {
    padding-bottom: .5rem!important;
  }

  .pl-lg-2,.px-lg-2 {
    padding-left: .5rem!important;
  }

  .p-lg-3 {
    padding: 1rem!important;
  }

  .pt-lg-3,.py-lg-3 {
    padding-top: 1rem!important;
  }

  .pr-lg-3,.px-lg-3 {
    padding-right: 1rem!important;
  }

  .pb-lg-3,.py-lg-3 {
    padding-bottom: 1rem!important;
  }

  .pl-lg-3,.px-lg-3 {
    padding-left: 1rem!important;
  }

  .p-lg-4 {
    padding: 1.5rem!important;
  }

  .pt-lg-4,.py-lg-4 {
    padding-top: 1.5rem!important;
  }

  .pr-lg-4,.px-lg-4 {
    padding-right: 1.5rem!important;
  }

  .pb-lg-4,.py-lg-4 {
    padding-bottom: 1.5rem!important;
  }

  .pl-lg-4,.px-lg-4 {
    padding-left: 1.5rem!important;
  }

  .p-lg-5 {
    padding: 3rem!important;
  }

  .pt-lg-5,.py-lg-5 {
    padding-top: 3rem!important;
  }

  .pr-lg-5,.px-lg-5 {
    padding-right: 3rem!important;
  }

  .pb-lg-5,.py-lg-5 {
    padding-bottom: 3rem!important;
  }

  .pl-lg-5,.px-lg-5 {
    padding-left: 3rem!important;
  }

  .m-lg-n1 {
    margin: -.25rem!important;
  }

  .mt-lg-n1,.my-lg-n1 {
    margin-top: -.25rem!important;
  }

  .mr-lg-n1,.mx-lg-n1 {
    margin-right: -.25rem!important;
  }

  .mb-lg-n1,.my-lg-n1 {
    margin-bottom: -.25rem!important;
  }

  .ml-lg-n1,.mx-lg-n1 {
    margin-left: -.25rem!important;
  }

  .m-lg-n2 {
    margin: -.5rem!important;
  }

  .mt-lg-n2,.my-lg-n2 {
    margin-top: -.5rem!important;
  }

  .mr-lg-n2,.mx-lg-n2 {
    margin-right: -.5rem!important;
  }

  .mb-lg-n2,.my-lg-n2 {
    margin-bottom: -.5rem!important;
  }

  .ml-lg-n2,.mx-lg-n2 {
    margin-left: -.5rem!important;
  }

  .m-lg-n3 {
    margin: -1rem!important;
  }

  .mt-lg-n3,.my-lg-n3 {
    margin-top: -1rem!important;
  }

  .mr-lg-n3,.mx-lg-n3 {
    margin-right: -1rem!important;
  }

  .mb-lg-n3,.my-lg-n3 {
    margin-bottom: -1rem!important;
  }

  .ml-lg-n3,.mx-lg-n3 {
    margin-left: -1rem!important;
  }

  .m-lg-n4 {
    margin: -1.5rem!important;
  }

  .mt-lg-n4,.my-lg-n4 {
    margin-top: -1.5rem!important;
  }

  .mr-lg-n4,.mx-lg-n4 {
    margin-right: -1.5rem!important;
  }

  .mb-lg-n4,.my-lg-n4 {
    margin-bottom: -1.5rem!important;
  }

  .ml-lg-n4,.mx-lg-n4 {
    margin-left: -1.5rem!important;
  }

  .m-lg-n5 {
    margin: -3rem!important;
  }

  .mt-lg-n5,.my-lg-n5 {
    margin-top: -3rem!important;
  }

  .mr-lg-n5,.mx-lg-n5 {
    margin-right: -3rem!important;
  }

  .mb-lg-n5,.my-lg-n5 {
    margin-bottom: -3rem!important;
  }

  .ml-lg-n5,.mx-lg-n5 {
    margin-left: -3rem!important;
  }

  .m-lg-auto {
    margin: auto!important;
  }

  .mt-lg-auto,.my-lg-auto {
    margin-top: auto!important;
  }

  .mr-lg-auto,.mx-lg-auto {
    margin-right: auto!important;
  }

  .mb-lg-auto,.my-lg-auto {
    margin-bottom: auto!important;
  }

  .ml-lg-auto,.mx-lg-auto {
    margin-left: auto!important;
  }

  .text-lg-left {
    text-align: left!important;
  }

  .text-lg-right {
    text-align: right!important;
  }

  .text-lg-center {
    text-align: center!important;
  }
}

@media (min-width:1200px) {
  .flex-xl-row {
    flex-direction: row!important;
  }

  .flex-xl-column {
    flex-direction: column!important;
  }

  .flex-xl-row-reverse {
    flex-direction: row-reverse!important;
  }

  .flex-xl-column-reverse {
    flex-direction: column-reverse!important;
  }

  .flex-xl-wrap {
    flex-wrap: wrap!important;
  }

  .flex-xl-nowrap {
    flex-wrap: nowrap!important;
  }

  .flex-xl-wrap-reverse {
    flex-wrap: wrap-reverse!important;
  }

  .flex-xl-fill {
    flex: 1 1 auto!important;
  }

  .flex-xl-grow-0 {
    flex-grow: 0!important;
  }

  .flex-xl-grow-1 {
    flex-grow: 1!important;
  }

  .flex-xl-shrink-0 {
    flex-shrink: 0!important;
  }

  .flex-xl-shrink-1 {
    flex-shrink: 1!important;
  }

  .justify-content-xl-start {
    justify-content: flex-start!important;
  }

  .justify-content-xl-end {
    justify-content: flex-end!important;
  }

  .justify-content-xl-center {
    justify-content: center!important;
  }

  .justify-content-xl-between {
    justify-content: space-between!important;
  }

  .justify-content-xl-around {
    justify-content: space-around!important;
  }

  .align-items-xl-start {
    align-items: flex-start!important;
  }

  .align-items-xl-end {
    align-items: flex-end!important;
  }

  .align-items-xl-center {
    align-items: center!important;
  }

  .align-items-xl-baseline {
    align-items: baseline!important;
  }

  .align-items-xl-stretch {
    align-items: stretch!important;
  }

  .align-content-xl-start {
    align-content: flex-start!important;
  }

  .align-content-xl-end {
    align-content: flex-end!important;
  }

  .align-content-xl-center {
    align-content: center!important;
  }

  .align-content-xl-between {
    align-content: space-between!important;
  }

  .align-content-xl-around {
    align-content: space-around!important;
  }

  .align-content-xl-stretch {
    align-content: stretch!important;
  }

  .align-self-xl-auto {
    align-self: auto!important;
  }

  .align-self-xl-start {
    align-self: flex-start!important;
  }

  .align-self-xl-end {
    align-self: flex-end!important;
  }

  .align-self-xl-center {
    align-self: center!important;
  }

  .align-self-xl-baseline {
    align-self: baseline!important;
  }

  .align-self-xl-stretch {
    align-self: stretch!important;
  }

  .float-xl-left {
    float: left!important;
  }

  .float-xl-right {
    float: right!important;
  }

  .float-xl-none {
    float: none!important;
  }

  .m-xl-0 {
    margin: 0!important;
  }

  .mt-xl-0,.my-xl-0 {
    margin-top: 0!important;
  }

  .mr-xl-0,.mx-xl-0 {
    margin-right: 0!important;
  }

  .mb-xl-0,.my-xl-0 {
    margin-bottom: 0!important;
  }

  .ml-xl-0,.mx-xl-0 {
    margin-left: 0!important;
  }

  .m-xl-1 {
    margin: .25rem!important;
  }

  .mt-xl-1,.my-xl-1 {
    margin-top: .25rem!important;
  }

  .mr-xl-1,.mx-xl-1 {
    margin-right: .25rem!important;
  }

  .mb-xl-1,.my-xl-1 {
    margin-bottom: .25rem!important;
  }

  .ml-xl-1,.mx-xl-1 {
    margin-left: .25rem!important;
  }

  .m-xl-2 {
    margin: .5rem!important;
  }

  .mt-xl-2,.my-xl-2 {
    margin-top: .5rem!important;
  }

  .mr-xl-2,.mx-xl-2 {
    margin-right: .5rem!important;
  }

  .mb-xl-2,.my-xl-2 {
    margin-bottom: .5rem!important;
  }

  .ml-xl-2,.mx-xl-2 {
    margin-left: .5rem!important;
  }

  .m-xl-3 {
    margin: 1rem!important;
  }

  .mt-xl-3,.my-xl-3 {
    margin-top: 1rem!important;
  }

  .mr-xl-3,.mx-xl-3 {
    margin-right: 1rem!important;
  }

  .mb-xl-3,.my-xl-3 {
    margin-bottom: 1rem!important;
  }

  .ml-xl-3,.mx-xl-3 {
    margin-left: 1rem!important;
  }

  .m-xl-4 {
    margin: 1.5rem!important;
  }

  .mt-xl-4,.my-xl-4 {
    margin-top: 1.5rem!important;
  }

  .mr-xl-4,.mx-xl-4 {
    margin-right: 1.5rem!important;
  }

  .mb-xl-4,.my-xl-4 {
    margin-bottom: 1.5rem!important;
  }

  .ml-xl-4,.mx-xl-4 {
    margin-left: 1.5rem!important;
  }

  .m-xl-5 {
    margin: 3rem!important;
  }

  .mt-xl-5,.my-xl-5 {
    margin-top: 3rem!important;
  }

  .mr-xl-5,.mx-xl-5 {
    margin-right: 3rem!important;
  }

  .mb-xl-5,.my-xl-5 {
    margin-bottom: 3rem!important;
  }

  .ml-xl-5,.mx-xl-5 {
    margin-left: 3rem!important;
  }

  .p-xl-0 {
    padding: 0!important;
  }

  .pt-xl-0,.py-xl-0 {
    padding-top: 0!important;
  }

  .pr-xl-0,.px-xl-0 {
    padding-right: 0!important;
  }

  .pb-xl-0,.py-xl-0 {
    padding-bottom: 0!important;
  }

  .pl-xl-0,.px-xl-0 {
    padding-left: 0!important;
  }

  .p-xl-1 {
    padding: .25rem!important;
  }

  .pt-xl-1,.py-xl-1 {
    padding-top: .25rem!important;
  }

  .pr-xl-1,.px-xl-1 {
    padding-right: .25rem!important;
  }

  .pb-xl-1,.py-xl-1 {
    padding-bottom: .25rem!important;
  }

  .pl-xl-1,.px-xl-1 {
    padding-left: .25rem!important;
  }

  .p-xl-2 {
    padding: .5rem!important;
  }

  .pt-xl-2,.py-xl-2 {
    padding-top: .5rem!important;
  }

  .pr-xl-2,.px-xl-2 {
    padding-right: .5rem!important;
  }

  .pb-xl-2,.py-xl-2 {
    padding-bottom: .5rem!important;
  }

  .pl-xl-2,.px-xl-2 {
    padding-left: .5rem!important;
  }

  .p-xl-3 {
    padding: 1rem!important;
  }

  .pt-xl-3,.py-xl-3 {
    padding-top: 1rem!important;
  }

  .pr-xl-3,.px-xl-3 {
    padding-right: 1rem!important;
  }

  .pb-xl-3,.py-xl-3 {
    padding-bottom: 1rem!important;
  }

  .pl-xl-3,.px-xl-3 {
    padding-left: 1rem!important;
  }

  .p-xl-4 {
    padding: 1.5rem!important;
  }

  .pt-xl-4,.py-xl-4 {
    padding-top: 1.5rem!important;
  }

  .pr-xl-4,.px-xl-4 {
    padding-right: 1.5rem!important;
  }

  .pb-xl-4,.py-xl-4 {
    padding-bottom: 1.5rem!important;
  }

  .pl-xl-4,.px-xl-4 {
    padding-left: 1.5rem!important;
  }

  .p-xl-5 {
    padding: 3rem!important;
  }

  .pt-xl-5,.py-xl-5 {
    padding-top: 3rem!important;
  }

  .pr-xl-5,.px-xl-5 {
    padding-right: 3rem!important;
  }

  .pb-xl-5,.py-xl-5 {
    padding-bottom: 3rem!important;
  }

  .pl-xl-5,.px-xl-5 {
    padding-left: 3rem!important;
  }

  .m-xl-n1 {
    margin: -.25rem!important;
  }

  .mt-xl-n1,.my-xl-n1 {
    margin-top: -.25rem!important;
  }

  .mr-xl-n1,.mx-xl-n1 {
    margin-right: -.25rem!important;
  }

  .mb-xl-n1,.my-xl-n1 {
    margin-bottom: -.25rem!important;
  }

  .ml-xl-n1,.mx-xl-n1 {
    margin-left: -.25rem!important;
  }

  .m-xl-n2 {
    margin: -.5rem!important;
  }

  .mt-xl-n2,.my-xl-n2 {
    margin-top: -.5rem!important;
  }

  .mr-xl-n2,.mx-xl-n2 {
    margin-right: -.5rem!important;
  }

  .mb-xl-n2,.my-xl-n2 {
    margin-bottom: -.5rem!important;
  }

  .ml-xl-n2,.mx-xl-n2 {
    margin-left: -.5rem!important;
  }

  .m-xl-n3 {
    margin: -1rem!important;
  }

  .mt-xl-n3,.my-xl-n3 {
    margin-top: -1rem!important;
  }

  .mr-xl-n3,.mx-xl-n3 {
    margin-right: -1rem!important;
  }

  .mb-xl-n3,.my-xl-n3 {
    margin-bottom: -1rem!important;
  }

  .ml-xl-n3,.mx-xl-n3 {
    margin-left: -1rem!important;
  }

  .m-xl-n4 {
    margin: -1.5rem!important;
  }

  .mt-xl-n4,.my-xl-n4 {
    margin-top: -1.5rem!important;
  }

  .mr-xl-n4,.mx-xl-n4 {
    margin-right: -1.5rem!important;
  }

  .mb-xl-n4,.my-xl-n4 {
    margin-bottom: -1.5rem!important;
  }

  .ml-xl-n4,.mx-xl-n4 {
    margin-left: -1.5rem!important;
  }

  .m-xl-n5 {
    margin: -3rem!important;
  }

  .mt-xl-n5,.my-xl-n5 {
    margin-top: -3rem!important;
  }

  .mr-xl-n5,.mx-xl-n5 {
    margin-right: -3rem!important;
  }

  .mb-xl-n5,.my-xl-n5 {
    margin-bottom: -3rem!important;
  }

  .ml-xl-n5,.mx-xl-n5 {
    margin-left: -3rem!important;
  }

  .m-xl-auto {
    margin: auto!important;
  }

  .mt-xl-auto,.my-xl-auto {
    margin-top: auto!important;
  }

  .mr-xl-auto,.mx-xl-auto {
    margin-right: auto!important;
  }

  .mb-xl-auto,.my-xl-auto {
    margin-bottom: auto!important;
  }

  .ml-xl-auto,.mx-xl-auto {
    margin-left: auto!important;
  }

  .text-xl-left {
    text-align: left!important;
  }

  .text-xl-right {
    text-align: right!important;
  }

  .text-xl-center {
    text-align: center!important;
  }
}

.text-lowercase {
  text-transform: lowercase!important;
}

.text-uppercase {
  text-transform: uppercase!important;
}

.text-capitalize {
  text-transform: capitalize!important;
}

.font-weight-light {
  font-weight: 300!important;
}

.font-weight-lighter {
  font-weight: lighter!important;
}

.font-weight-normal {
  font-weight: 400!important;
}

.font-weight-bold {
  font-weight: 700!important;
}

.font-weight-bolder {
  font-weight: bolder!important;
}

.font-italic {
  font-style: italic!important;
}

.text-white {
  color: #fff!important;
}

.text-primary {
  color: #007bff!important;
}

a.text-primary:focus,a.text-primary:hover {
  color: #0056b3!important;
}

.text-secondary {
  color: #6c757d!important;
}

a.text-secondary:focus,a.text-secondary:hover {
  color: #494f54!important;
}

.text-success {
  color: #28a745!important;
}

a.text-success:focus,a.text-success:hover {
  color: #19692c!important;
}

.text-info {
  color: #17a2b8!important;
}

a.text-info:focus,a.text-info:hover {
  color: #0f6674!important;
}

.text-warning {
  color: #ffc107!important;
}

a.text-warning:focus,a.text-warning:hover {
  color: #ba8b00!important;
}

.text-danger {
  color: #dc3545!important;
}

a.text-danger:focus,a.text-danger:hover {
  color: #a71d2a!important;
}

.text-light {
  color: #f8f9fa!important;
}

a.text-light:focus,a.text-light:hover {
  color: #cbd3da!important;
}

.text-dark {
  color: #343a40!important;
}

a.text-dark:focus,a.text-dark:hover {
  color: #121416!important;
}

.text-body {
  color: #212529!important;
}

.text-muted {
  color: #6c757d!important;
}

.text-black-50 {
  color: rgba(0,0,0,.5)!important;
}

.text-white-50 {
  color: rgba(255,255,255,.5)!important;
}

.text-hide {
  font: 0/0 a;
  color: transparent;
  text-shadow: none;
  background-color: transparent;
  border: 0;
}

.text-decoration-none {
  text-decoration: none!important;
}

.text-break {
  word-break: break-word!important;
  overflow-wrap: break-word!important;
}

.text-reset {
  color: inherit!important;
}

.visible {
  visibility: visible!important;
}

.invisible {
  visibility: hidden!important;
}

@media print {
  *,::after,::before {
    text-shadow: none!important;
    box-shadow: none!important;
  }

  a:not(.btn) {
    text-decoration: underline;
  }

  abbr[title]::after {
    content: " (" attr(title) ")";
  }

  pre {
    white-space: pre-wrap!important;
  }

  blockquote,pre {
    border: 1px solid #adb5bd;
    page-break-inside: avoid;
  }

  thead {
    display: table-header-group;
  }

  img,tr {
    page-break-inside: avoid;
  }

  h2,h3,p {
    orphans: 3;
    widows: 3;
  }

  h2,h3 {
    page-break-after: avoid;
  }@  page {
    size: a3;
  }

  .container,body {
    min-width: 992px!important;
  }

  .navbar {
    display: none;
  }

  .badge {
    border: 1px solid #000;
  }

  .table {
    border-collapse: collapse!important;
  }

  .table td,.table th {
    background-color: #fff!important;
  }

  .table-bordered td,.table-bordered th {
    border: 1px solid #dee2e6!important;
  }

  .table-dark {
    color: inherit;
  }

  .table-dark tbody+tbody,.table-dark td,.table-dark th,.table-dark thead th {
    border-color: #dee2e6;
  }

  .table .thead-dark th {
    color: inherit;
    border-color: #dee2e6;
  }
}

x;position:relative;
}

.bootstrap-touchspin .input-group-btn-vertical .bootstrap-touchspin-up {
border-radius: 0;
border-top-right-radius: 4px;
}

.bootstrap-touchspin .input-group-btn-vertical .bootstrap-touchspin-down {
margin-top: -2px;
border-radius: 0;
border-bottom-right-radius: 4px;
}

.bootstrap-touchspin .input-group-btn-vertical i {
position: absolute;
top: 3px;
left: 5px;
font-size: 9px;
font-weight: 400;
}/*!
 * Bootstrap v4.0.0-alpha.4 (http://getbootstrap.com)
 * Copyright 2011-2016 The Bootstrap Authors
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 *//*! normalize.css v4.0.0 | MIT License | github.com/necolas/normalize.css.box_banner_product .product_right_content */html {
font-family: sans-serif;
-ms-text-size-adjust: 100%;
-webkit-text-size-adjust: 100%;
}

body {
margin: 0;
}

article,aside,details,figcaption,figure,footer,header,main,menu,nav,section,summary {
display: block;
}

audio,canvas,progress,video {
display: inline-block;
}

audio:not([controls]) {
display: none;
height: 0;
}

progress {
vertical-align: baseline;
}

[hidden],template {
display: none;
}

a {
background-color: transparent;
}

a:active,a:hover {
outline-width: 0;
}

abbr[title] {
border-bottom: none;
text-decoration: underline;
text-decoration: underline dotted;
}

b,strong {
font-weight: inherit;
font-weight: bolder;
}

dfn {
font-style: italic;
}

h1 {
font-size: 2em;
margin: .67em 0;
}

mark {
background-color: #ff0;
color: #000;
}

small {
font-size: 80%;
}

sub,sup {
font-size: 75%;
line-height: 0;
position: relative;
vertical-align: baseline;
}

sub {
bottom: -.25em;
}

sup {
top: -.5em;
}

img {
border-style: none;
}

svg:not(:root) {
overflow: hidden;
}

code,kbd,pre,samp {
font-family: monospace,monospace;
font-size: 1em;
}

figure {
margin: 1em 40px;
}

hr {
box-sizing: content-box;
height: 0;
overflow: visible;
}

button,input,select,textarea {
font: inherit;
}

optgroup {
font-weight: 700;
}

button,input,select {
overflow: visible;
}

button,select {
text-transform: none;
}

[type=button],[type=reset],[type=submit],button {
cursor: pointer;
}

[disabled] {
cursor: default;
}

[type=reset],[type=submit],button,html [type=button] {
-webkit-appearance: button;
}

button::-moz-focus-inner,input::-moz-focus-inner {
border: 0;
padding: 0;
}

button:-moz-focusring,input:-moz-focusring {
outline: 1px dotted ButtonText;
}

fieldset {
border: 1px solid silver;
margin: 0 2px;
padding: .35em .625em .75em;
}

legend {
box-sizing: border-box;
color: inherit;
display: table;
max-width: 100%;
white-space: normal;
}

textarea {
overflow: auto;
}

[type=checkbox],[type=radio] {
box-sizing: border-box;
padding: 0;
}

[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button {
height: auto;
}

[type=search] {
-webkit-appearance: textfield;
}

[type=search]::-webkit-search-cancel-button,[type=search]::-webkit-search-decoration {
-webkit-appearance: none;
}

@media print {
*,:after,:before,:first-letter,:first-line {
  text-shadow: none!important;
  box-shadow: none!important;
}

a,a:visited {
  text-decoration: underline;
}

abbr[title]:after {
  content: " (" attr(title) ")";
}

blockquote,pre {
  border: 1px solid #999;
  page-break-inside: avoid;
}

thead {
  display: table-header-group;
}

img,tr {
  page-break-inside: avoid;
}

h2,h3,p {
  orphans: 3;
  widows: 3;
}

h2,h3 {
  page-break-after: avoid;
}

.navbar {
  display: none;
}

.btn>.caret,.dropup>.btn>.caret {
  border-top-color: #000!important;
}

.tag {
  border: 1px solid #000;
}

.table {
  border-collapse: collapse!important;
}

.table td,.table th {
  background-color: #fff!important;
}

.table-bordered td,.table-bordered th {
  border: 1px solid #ddd!important;
}}

html {
  box-sizing: border-box;
}

*,:after,:before {
  box-sizing: inherit;
}

@-ms-viewport {
  width:device-width;
}

html {
  font-size: 16px;
  -ms-overflow-style: scrollbar;
  -webkit-tap-highlight-color: transparent;
}

body {
  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;
  line-height: 1.5;
  color: #878787;
  background-color: #fff;
}

[tabindex="-1"]:focus {
  outline: none!important;
}

h1,h2,h3,h4,h5,h6 {
  margin-top: 0;
  margin-bottom: .5rem;
}

p {
  margin-top: 0;
  margin-bottom: 1rem;
}

abbr[data-original-title],abbr[title] {
  cursor: help;
  border-bottom: 1px dotted #ebebeb;
}

address {
  font-style: normal;
  line-height: inherit;
}

address,dl,ol,ul {
  margin-bottom: 1rem;
}

dl,ol,ul {
  margin-top: 0;
}

ol ol,ol ul,ul ol,ul ul {
  margin-bottom: 0;
}

dt {
  font-weight: 700;
}

dd {
  margin-bottom: .5rem;
  margin-left: 0;
}

blockquote {
  margin: 0 0 1rem;
}

a {
  color: #2fb5d2;
  text-decoration: none;
}

a:focus,a:hover {
  color: #208094;
  text-decoration: underline;
}

a:focus {
  outline: 5px auto -webkit-focus-ring-color;
  outline-offset: -2px;
}

a:not([href]):not([tabindex]),a:not([href]):not([tabindex]):focus,a:not([href]):not([tabindex]):hover {
  color: inherit;
  text-decoration: none;
}

a:not([href]):not([tabindex]):focus {
  outline: none;
}

pre {
  overflow: auto;
}

figure {
  margin: 0 0 1rem;
}

img {
  vertical-align: middle;
}

[role=button] {
  cursor: pointer;
}

[role=button],a,area,button,input,label,select,summary,textarea {
  touch-action: manipulation;
}

table {
  border-collapse: collapse;
  background-color: transparent;
}

caption {
  padding-top: .75rem;
  padding-bottom: .75rem;
  color: #acaaa6;
  caption-side: bottom;
}

caption,th {
  text-align: left;
}

label {
  display: inline-block;
  margin-bottom: .5rem;
}

button:focus {
  outline: 1px dotted;
  outline: 5px auto -webkit-focus-ring-color;
}

button,input,select,textarea {
  margin: 0;
  line-height: inherit;
  border-radius: 0;
}

input[type=checkbox]:disabled,input[type=radio]:disabled {
  cursor: not-allowed;
}

input[type=date],input[type=datetime-local],input[type=month],input[type=time] {
  -webkit-appearance: listbox;
}

textarea {
  resize: vertical;
}

fieldset {
  min-width: 0;
  padding: 0;
  margin: 0;
  border: 0;
}

legend {
  display: block;
  width: 100%;
  padding: 0;
  margin-bottom: .5rem;
  font-size: 1.5rem;
  line-height: inherit;
}

input[type=search] {
  -webkit-appearance: none;
}

output {
  display: inline-block;
}

[hidden] {
  display: none!important;
}

.h1,.h2,.h3,.h4,.h5,.h6,h1,h2,h3,h4,h5,h6 {
  margin-bottom: .5rem;
  font-family: inherit;
  font-weight: 700;
  line-height: 1.1;
  color: inherit;
}

.h1,h1 {
  font-size: 1.375rem;
}

.h2,h2 {
  font-size: 1.25rem;
}

.h3,.h4,h3,h4 {
  font-size: 1.125rem;
}

.h5,h5 {
  font-size: 1rem;
}

.h6,h6 {
  font-size: .9375rem;
}

.lead {
  font-size: 1.25rem;
  font-weight: 300;
}

.display-1 {
  font-size: 3.125rem;
  font-weight: 600;
}

.display-2 {
  font-size: 2.1875rem;
  font-weight: 400;
}

.display-3 {
  font-size: 1.5625rem;
  font-weight: 400;
}

.display-4 {
  font-size: 1.25rem;
  font-weight: 400;
}

hr {
  margin-top: 1rem;
  margin-bottom: 1rem;
  border: 0;
  border-top: 1px solid rgba(0,0,0,.1);
}

.small,small {
  font-size: 80%;
  font-weight: 400;
}

.mark,mark {
  padding: .2em;
  background-color: #fcf8e3;
}

.list-inline,.list-unstyled {
  padding-left: 0;
  list-style: none;
}

.list-inline-item {
  display: inline-block;
}

.list-inline-item:not(:last-child) {
  margin-right: 5px;
}

.initialism {
  font-size: 90%;
  text-transform: uppercase;
}

.blockquote {
  padding: .5rem 1rem;
  margin-bottom: 1rem;
  font-size: 1.25rem;
  border-left: .25rem solid #f6f6f6;
}

.blockquote-footer {
  display: block;
  font-size: 80%;
  color: #ebebeb;
}

.blockquote-footer:before {
  
}

.blockquote-reverse {
  padding-right: 1rem;
  padding-left: 0;
  text-align: right;
  border-right: .25rem solid #f6f6f6;
  border-left: 0;
}

.blockquote-reverse .blockquote-footer:before {
  content: "";
}

.blockquote-reverse .blockquote-footer:after {
  
}

dl.row>dd+dt {
  clear: left;
}

.carousel-inner>.carousel-item>a>img,.carousel-inner>.carousel-item>img,.img-fluid {
  display: block;
  max-width: 100%;
  height: auto;
}

.img-rounded {
  border-radius: .3rem;
}

.img-thumbnail {
  padding: .25rem;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 0;
  transition: all .2s ease-in-out;
  display: inline-block;
  max-width: 100%;
  height: auto;
}

.img-circle {
  border-radius: 50%;
}

.figure {
  display: inline-block;
}

.figure-img {
  margin-bottom: .5rem;
  line-height: 1;
}

.figure-caption {
  font-size: 90%;
  color: #ebebeb;
}

code,kbd,pre,samp {
  font-family: Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;
}

code {
  color: #bd4147;
  background-color: #f7f7f9;
  border-radius: 0;
}

code,kbd {
  padding: .2rem .4rem;
  font-size: 90%;
}

kbd {
  color: #fff;
  background-color: #333;
  border-radius: .2rem;
}

kbd kbd {
  padding: 0;
  font-size: 100%;
  font-weight: 700;
}

pre {
  display: block;
  margin-top: 0;
  margin-bottom: 1rem;
  font-size: 90%;
  color: #878787;
}

pre code {
  padding: 0;
  font-size: inherit;
  color: inherit;
  background-color: transparent;
  border-radius: 0;
}

.pre-scrollable {
  max-height: 340px;
  overflow-y: scroll;
}

.container {
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
}

.container:after {
  content: "";
  display: table;
  clear: both;
}

@media (min-width:544px) {
  .container {
    max-width: 576px;
  }
}

@media (min-width:768px) {
  .container {
    max-width: 720px;
  }
}

@media (min-width:992px) {
  .container {
    max-width: 940px;
  }
}

@media (min-width:1200px) {
  .container {
    max-width: 1140px;
  }
}

.container-fluid {
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
}

.container-fluid:after {
  content: "";
  display: table;
  clear: both;
}

.row {
  margin-left: -15px;
  margin-right: -15px;
}

.row:after {
  content: "";
  display: table;
  clear: both;
}

.col-lg-1,.col-lg-2,.col-lg-3,.col-lg-4,.col-lg-5,.col-lg-6,.col-lg-7,.col-lg-8,.col-lg-9,.col-lg-10,.col-lg-11,.col-lg-12,.col-md-1,.col-md-2,.col-md-3,.col-md-4,.col-md-5,.col-md-6,.col-md-7,.col-md-8,.col-md-9,.col-md-10,.col-md-11,.col-md-12,.col-sm-1,.col-sm-2,.col-sm-3,.col-sm-4,.col-sm-5,.col-sm-6,.col-sm-7,.col-sm-8,.col-sm-9,.col-sm-10,.col-sm-11,.col-sm-12,.col-xl-1,.col-xl-2,.col-xl-3,.col-xl-4,.col-xl-5,.col-xl-6,.col-xl-7,.col-xl-8,.col-xl-9,.col-xl-10,.col-xl-11,.col-xl-12,.col-xs-1,.col-xs-2,.col-xs-3,.col-xs-4,.col-xs-5,.col-xs-6,.col-xs-7,.col-xs-8,.col-xs-9,.col-xs-10,.col-xs-11,.col-xs-12 {
  position: relative;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
}

.col-xs-1 {
  float: left;
  width: 8.33333%;
}

.col-xs-2 {
  float: left;
  width: 16.66667%;
}

.col-xs-3 {
  float: left;
  width: 25%;
}

.col-xs-4 {
  float: left;
  width: 33.33333%;
}

.col-xs-5 {
  float: left;
  width: 41.66667%;
}

.col-xs-6 {
  float: left;
  width: 50%;
}

.col-xs-7 {
  float: left;
  width: 58.33333%;
}

.col-xs-8 {
  float: left;
  width: 66.66667%;
}

.col-xs-9 {
  float: left;
  width: 75%;
}

.col-xs-10 {
  float: left;
  width: 83.33333%;
}

.col-xs-11 {
  float: left;
  width: 91.66667%;
}

.col-xs-12 {
  float: left;
  width: 100%;
}

.pull-xs-0 {
  right: auto;
}

.pull-xs-1 {
  right: 8.33333%;
}

.pull-xs-2 {
  right: 16.66667%;
}

.pull-xs-3 {
  right: 25%;
}

.pull-xs-4 {
  right: 33.33333%;
}

.pull-xs-5 {
  right: 41.66667%;
}

.pull-xs-6 {
  right: 50%;
}

.pull-xs-7 {
  right: 58.33333%;
}

.pull-xs-8 {
  right: 66.66667%;
}

.pull-xs-9 {
  right: 75%;
}

.pull-xs-10 {
  right: 83.33333%;
}

.pull-xs-11 {
  right: 91.66667%;
}

.pull-xs-12 {
  right: 100%;
}

.push-xs-0 {
  left: auto;
}

.push-xs-1 {
  left: 8.33333%;
}

.push-xs-2 {
  left: 16.66667%;
}

.push-xs-3 {
  left: 25%;
}

.push-xs-4 {
  left: 33.33333%;
}

.push-xs-5 {
  left: 41.66667%;
}

.push-xs-6 {
  left: 50%;
}

.push-xs-7 {
  left: 58.33333%;
}

.push-xs-8 {
  left: 66.66667%;
}

.push-xs-9 {
  left: 75%;
}

.push-xs-10 {
  left: 83.33333%;
}

.push-xs-11 {
  left: 91.66667%;
}

.push-xs-12 {
  left: 100%;
}

.offset-xs-1 {
  margin-left: 8.33333%;
}

.offset-xs-2 {
  margin-left: 16.66667%;
}

.offset-xs-3 {
  margin-left: 25%;
}

.offset-xs-4 {
  margin-left: 33.33333%;
}

.offset-xs-5 {
  margin-left: 41.66667%;
}

.offset-xs-6 {
  margin-left: 50%;
}

.offset-xs-7 {
  margin-left: 58.33333%;
}

.offset-xs-8 {
  margin-left: 66.66667%;
}

.offset-xs-9 {
  margin-left: 75%;
}

.offset-xs-10 {
  margin-left: 83.33333%;
}

.offset-xs-11 {
  margin-left: 91.66667%;
}

@media (min-width:544px) {
  .col-sm-1 {
    float: left;
    width: 8.33333%;
  }

  .col-sm-2 {
    float: left;
    width: 16.66667%;
  }

  .col-sm-3 {
    float: left;
    width: 25%;
  }

  .col-sm-4 {
    float: left;
    width: 33.33333%;
  }

  .col-sm-5 {
    float: left;
    width: 41.66667%;
  }

  .col-sm-6 {
    float: left;
    width: 50%;
  }

  .col-sm-7 {
    float: left;
    width: 58.33333%;
  }

  .col-sm-8 {
    float: left;
    width: 66.66667%;
  }

  .col-sm-9 {
    float: left;
    width: 75%;
  }

  .col-sm-10 {
    float: left;
    width: 83.33333%;
  }

  .col-sm-11 {
    float: left;
    width: 91.66667%;
  }

  .col-sm-12 {
    float: left;
    width: 100%;
  }

  .pull-sm-0 {
    right: auto;
  }

  .pull-sm-1 {
    right: 8.33333%;
  }

  .pull-sm-2 {
    right: 16.66667%;
  }

  .pull-sm-3 {
    right: 25%;
  }

  .pull-sm-4 {
    right: 33.33333%;
  }

  .pull-sm-5 {
    right: 41.66667%;
  }

  .pull-sm-6 {
    right: 50%;
  }

  .pull-sm-7 {
    right: 58.33333%;
  }

  .pull-sm-8 {
    right: 66.66667%;
  }

  .pull-sm-9 {
    right: 75%;
  }

  .pull-sm-10 {
    right: 83.33333%;
  }

  .pull-sm-11 {
    right: 91.66667%;
  }

  .pull-sm-12 {
    right: 100%;
  }

  .push-sm-0 {
    left: auto;
  }

  .push-sm-1 {
    left: 8.33333%;
  }

  .push-sm-2 {
    left: 16.66667%;
  }

  .push-sm-3 {
    left: 25%;
  }

  .push-sm-4 {
    left: 33.33333%;
  }

  .push-sm-5 {
    left: 41.66667%;
  }

  .push-sm-6 {
    left: 50%;
  }

  .push-sm-7 {
    left: 58.33333%;
  }

  .push-sm-8 {
    left: 66.66667%;
  }

  .push-sm-9 {
    left: 75%;
  }

  .push-sm-10 {
    left: 83.33333%;
  }

  .push-sm-11 {
    left: 91.66667%;
  }

  .push-sm-12 {
    left: 100%;
  }

  .offset-sm-0 {
    margin-left: 0;
  }

  .offset-sm-1 {
    margin-left: 8.33333%;
  }

  .offset-sm-2 {
    margin-left: 16.66667%;
  }

  .offset-sm-3 {
    margin-left: 25%;
  }

  .offset-sm-4 {
    margin-left: 33.33333%;
  }

  .offset-sm-5 {
    margin-left: 41.66667%;
  }

  .offset-sm-6 {
    margin-left: 50%;
  }

  .offset-sm-7 {
    margin-left: 58.33333%;
  }

  .offset-sm-8 {
    margin-left: 66.66667%;
  }

  .offset-sm-9 {
    margin-left: 75%;
  }

  .offset-sm-10 {
    margin-left: 83.33333%;
  }

  .offset-sm-11 {
    margin-left: 91.66667%;
  }
}

@media (min-width:768px) {
  .col-md-1 {
    float: left;
    width: 8.33333%;
  }

  .col-md-2 {
    float: left;
    width: 16.66667%;
  }

  .col-md-3 {
    float: left;
    width: 25%;
  }

  .col-md-4 {
    float: left;
    width: 33.33333%;
  }

  .col-md-5 {
    float: left;
    width: 41.66667%;
  }

  .col-md-6 {
    float: left;
    width: 50%;
  }

  .col-md-7 {
    float: left;
    width: 58.33333%;
  }

  .col-md-8 {
    float: left;
    width: 66.66667%;
  }

  .col-md-9 {
    float: left;
    width: 75%;
  }

  .col-md-10 {
    float: left;
    width: 83.33333%;
  }

  .col-md-11 {
    float: left;
    width: 91.66667%;
  }

  .col-md-12 {
    float: left;
    width: 100%;
  }

  .pull-md-0 {
    right: auto;
  }

  .pull-md-1 {
    right: 8.33333%;
  }

  .pull-md-2 {
    right: 16.66667%;
  }

  .pull-md-3 {
    right: 25%;
  }

  .pull-md-4 {
    right: 33.33333%;
  }

  .pull-md-5 {
    right: 41.66667%;
  }

  .pull-md-6 {
    right: 50%;
  }

  .pull-md-7 {
    right: 58.33333%;
  }

  .pull-md-8 {
    right: 66.66667%;
  }

  .pull-md-9 {
    right: 75%;
  }

  .pull-md-10 {
    right: 83.33333%;
  }

  .pull-md-11 {
    right: 91.66667%;
  }

  .pull-md-12 {
    right: 100%;
  }

  .push-md-0 {
    left: auto;
  }

  .push-md-1 {
    left: 8.33333%;
  }

  .push-md-2 {
    left: 16.66667%;
  }

  .push-md-3 {
    left: 25%;
  }

  .push-md-4 {
    left: 33.33333%;
  }

  .push-md-5 {
    left: 41.66667%;
  }

  .push-md-6 {
    left: 50%;
  }

  .push-md-7 {
    left: 58.33333%;
  }

  .push-md-8 {
    left: 66.66667%;
  }

  .push-md-9 {
    left: 75%;
  }

  .push-md-10 {
    left: 83.33333%;
  }

  .push-md-11 {
    left: 91.66667%;
  }

  .push-md-12 {
    left: 100%;
  }

  .offset-md-0 {
    margin-left: 0;
  }

  .offset-md-1 {
    margin-left: 8.33333%;
  }

  .offset-md-2 {
    margin-left: 16.66667%;
  }

  .offset-md-3 {
    margin-left: 25%;
  }

  .offset-md-4 {
    margin-left: 33.33333%;
  }

  .offset-md-5 {
    margin-left: 41.66667%;
  }

  .offset-md-6 {
    margin-left: 50%;
  }

  .offset-md-7 {
    margin-left: 58.33333%;
  }

  .offset-md-8 {
    margin-left: 66.66667%;
  }

  .offset-md-9 {
    margin-left: 75%;
  }

  .offset-md-10 {
    margin-left: 83.33333%;
  }

  .offset-md-11 {
    margin-left: 91.66667%;
  }
}

@media (min-width:992px) {
  .col-lg-1 {
    float: left;
    width: 8.33333%;
  }

  .col-lg-2 {
    float: left;
    width: 16.66667%;
  }

  .col-lg-3 {
    float: left;
    width: 25%;
  }

  .col-lg-4 {
    float: left;
    width: 33.33333%;
  }

  .col-lg-5 {
    float: left;
    width: 41.66667%;
  }

  .col-lg-6 {
    float: left;
    width: 50%;
  }

  .col-lg-7 {
    float: left;
    width: 58.33333%;
  }

  .col-lg-8 {
    float: left;
    width: 66.66667%;
  }

  .col-lg-9 {
    float: left;
    width: 75%;
  }

  .col-lg-10 {
    float: left;
    width: 83.33333%;
  }

  .col-lg-11 {
    float: left;
    width: 91.66667%;
  }

  .col-lg-12 {
    float: left;
    width: 100%;
  }

  .pull-lg-0 {
    right: auto;
  }

  .pull-lg-1 {
    right: 8.33333%;
  }

  .pull-lg-2 {
    right: 16.66667%;
  }

  .pull-lg-3 {
    right: 25%;
  }

  .pull-lg-4 {
    right: 33.33333%;
  }

  .pull-lg-5 {
    right: 41.66667%;
  }

  .pull-lg-6 {
    right: 50%;
  }

  .pull-lg-7 {
    right: 58.33333%;
  }

  .pull-lg-8 {
    right: 66.66667%;
  }

  .pull-lg-9 {
    right: 75%;
  }

  .pull-lg-10 {
    right: 83.33333%;
  }

  .pull-lg-11 {
    right: 91.66667%;
  }

  .pull-lg-12 {
    right: 100%;
  }

  .push-lg-0 {
    left: auto;
  }

  .push-lg-1 {
    left: 8.33333%;
  }

  .push-lg-2 {
    left: 16.66667%;
  }

  .push-lg-3 {
    left: 25%;
  }

  .push-lg-4 {
    left: 33.33333%;
  }

  .push-lg-5 {
    left: 41.66667%;
  }

  .push-lg-6 {
    left: 50%;
  }

  .push-lg-7 {
    left: 58.33333%;
  }

  .push-lg-8 {
    left: 66.66667%;
  }

  .push-lg-9 {
    left: 75%;
  }

  .push-lg-10 {
    left: 83.33333%;
  }

  .push-lg-11 {
    left: 91.66667%;
  }

  .push-lg-12 {
    left: 100%;
  }

  .offset-lg-0 {
    margin-left: 0;
  }

  .offset-lg-1 {
    margin-left: 8.33333%;
  }

  .offset-lg-2 {
    margin-left: 16.66667%;
  }

  .offset-lg-3 {
    margin-left: 25%;
  }

  .offset-lg-4 {
    margin-left: 33.33333%;
  }

  .offset-lg-5 {
    margin-left: 41.66667%;
  }

  .offset-lg-6 {
    margin-left: 50%;
  }

  .offset-lg-7 {
    margin-left: 58.33333%;
  }

  .offset-lg-8 {
    margin-left: 66.66667%;
  }

  .offset-lg-9 {
    margin-left: 75%;
  }

  .offset-lg-10 {
    margin-left: 83.33333%;
  }

  .offset-lg-11 {
    margin-left: 91.66667%;
  }
}

@media (min-width:1200px) {
  .col-xl-1 {
    float: left;
    width: 8.33333%;
  }

  .col-xl-2 {
    float: left;
    width: 16.66667%;
  }

  .col-xl-3 {
    float: left;
    width: 25%;
  }

  .col-xl-4 {
    float: left;
    width: 33.33333%;
  }

  .col-xl-5 {
    float: left;
    width: 41.66667%;
  }

  .col-xl-6 {
    float: left;
    width: 50%;
  }

  .col-xl-7 {
    float: left;
    width: 58.33333%;
  }

  .col-xl-8 {
    float: left;
    width: 66.66667%;
  }

  .col-xl-9 {
    float: left;
    width: 75%;
  }

  .col-xl-10 {
    float: left;
    width: 83.33333%;
  }

  .col-xl-11 {
    float: left;
    width: 91.66667%;
  }

  .col-xl-12 {
    float: left;
    width: 100%;
  }

  .pull-xl-0 {
    right: auto;
  }

  .pull-xl-1 {
    right: 8.33333%;
  }

  .pull-xl-2 {
    right: 16.66667%;
  }

  .pull-xl-3 {
    right: 25%;
  }

  .pull-xl-4 {
    right: 33.33333%;
  }

  .pull-xl-5 {
    right: 41.66667%;
  }

  .pull-xl-6 {
    right: 50%;
  }

  .pull-xl-7 {
    right: 58.33333%;
  }

  .pull-xl-8 {
    right: 66.66667%;
  }

  .pull-xl-9 {
    right: 75%;
  }

  .pull-xl-10 {
    right: 83.33333%;
  }

  .pull-xl-11 {
    right: 91.66667%;
  }

  .pull-xl-12 {
    right: 100%;
  }

  .push-xl-0 {
    left: auto;
  }

  .push-xl-1 {
    left: 8.33333%;
  }

  .push-xl-2 {
    left: 16.66667%;
  }

  .push-xl-3 {
    left: 25%;
  }

  .push-xl-4 {
    left: 33.33333%;
  }

  .push-xl-5 {
    left: 41.66667%;
  }

  .push-xl-6 {
    left: 50%;
  }

  .push-xl-7 {
    left: 58.33333%;
  }

  .push-xl-8 {
    left: 66.66667%;
  }

  .push-xl-9 {
    left: 75%;
  }

  .push-xl-10 {
    left: 83.33333%;
  }

  .push-xl-11 {
    left: 91.66667%;
  }

  .push-xl-12 {
    left: 100%;
  }

  .offset-xl-0 {
    margin-left: 0;
  }

  .offset-xl-1 {
    margin-left: 8.33333%;
  }

  .offset-xl-2 {
    margin-left: 16.66667%;
  }

  .offset-xl-3 {
    margin-left: 25%;
  }

  .offset-xl-4 {
    margin-left: 33.33333%;
  }

  .offset-xl-5 {
    margin-left: 41.66667%;
  }

  .offset-xl-6 {
    margin-left: 50%;
  }

  .offset-xl-7 {
    margin-left: 58.33333%;
  }

  .offset-xl-8 {
    margin-left: 66.66667%;
  }

  .offset-xl-9 {
    margin-left: 75%;
  }

  .offset-xl-10 {
    margin-left: 83.33333%;
  }

  .offset-xl-11 {
    margin-left: 91.66667%;
  }
}

.table {
  width: 100%;
  max-width: 100%;
  margin-bottom: 1rem;
}

.table td,.table th {
  padding: .75rem;
  vertical-align: top;
  border-top: 1px solid #f6f6f6;
}

.table thead th {
  vertical-align: bottom;
  border-bottom: 2px solid #f6f6f6;
}

.table tbody+tbody {
  border-top: 2px solid #f6f6f6;
}

.table .table {
  background-color: #fff;
}

.table-sm td,.table-sm th {
  padding: .3rem;
}

.table-bordered,.table-bordered td,.table-bordered th {
  border: 1px solid #f6f6f6;
}

.table-bordered thead td,.table-bordered thead th {
  border-bottom-width: 2px;
}

.table-striped tbody tr:nth-of-type(odd) {
  background-color: rgba(0,0,0,.05);
}

.table-active,.table-active>td,.table-active>th,.table-hover .table-active:hover,.table-hover .table-active:hover>td,.table-hover .table-active:hover>th,.table-hover tbody tr:hover {
  background-color: rgba(0,0,0,.075);
}

.table-success,.table-success>td,.table-success>th {
  background-color: #dff0d8;
}

.table-hover .table-success:hover,.table-hover .table-success:hover>td,.table-hover .table-success:hover>th {
  background-color: #d0e9c6;
}

.table-info,.table-info>td,.table-info>th {
  background-color: #d9edf7;
}

.table-hover .table-info:hover,.table-hover .table-info:hover>td,.table-hover .table-info:hover>th {
  background-color: #c4e3f3;
}

.table-warning,.table-warning>td,.table-warning>th {
  background-color: #fcf8e3;
}

.table-hover .table-warning:hover,.table-hover .table-warning:hover>td,.table-hover .table-warning:hover>th {
  background-color: #faf2cc;
}

.table-danger,.table-danger>td,.table-danger>th {
  background-color: #f2dede;
}

.table-hover .table-danger:hover,.table-hover .table-danger:hover>td,.table-hover .table-danger:hover>th {
  background-color: #ebcccc;
}

.thead-inverse th {
  color: #fff;
  background-color: #878787;
}

.thead-default th {
  color: #acaaa6;
  background-color: #f6f6f6;
}

.table-inverse {
  color: #f6f6f6;
  background-color: #878787;
}

.table-inverse td,.table-inverse th,.table-inverse thead th {
  border-color: #acaaa6;
}

.table-inverse.table-bordered {
  border: 0;
}

.table-responsive {
  display: block;
  width: 100%;
  min-height: .01%;
  overflow-x: auto;
}

.table-reflow thead {
  float: left;
}

.table-reflow tbody {
  display: block;
  white-space: nowrap;
}

.table-reflow td,.table-reflow th {
  border-top: 1px solid #f6f6f6;
  border-left: 1px solid #f6f6f6;
}

.table-reflow td:last-child,.table-reflow th:last-child {
  border-right: 1px solid #f6f6f6;
}

.table-reflow tbody:last-child tr:last-child td,.table-reflow tbody:last-child tr:last-child th,.table-reflow tfoot:last-child tr:last-child td,.table-reflow tfoot:last-child tr:last-child th,.table-reflow thead:last-child tr:last-child td,.table-reflow thead:last-child tr:last-child th {
  border-bottom: 1px solid #f6f6f6;
}

.table-reflow tr {
  float: left;
}

.table-reflow tr td,.table-reflow tr th {
  display: block!important;
  border: 1px solid #f6f6f6;
}

.form-control {
  display: block;
  width: 100%;
  padding: .5rem .75rem;
  font-size: 1rem;
  line-height: 1.25;
  background-color: #fff;
  background-image: none;
  background-clip: padding-box;
  border: 1px solid rgba(0,0,0,.15);
  border-radius: 0;
}

.form-control::-ms-expand {
  background-color: transparent;
  border: 0;
}

.form-control:focus {
  color: #acaaa6;
  border-color: #66afe9;
  outline: none;
}

.form-control::placeholder {
  color: #999;
  opacity: 1;
}

.form-control:disabled,.form-control[readonly] {
  background-color: #f6f6f6;
  opacity: 1;
}

.form-control:disabled {
  cursor: not-allowed;
}

select.form-control:not([size]):not([multiple]) {
  height: 2.5rem;
}

select.form-control:focus::-ms-value {
  color: #acaaa6;
  background-color: #fff;
}

.form-control-file,.form-control-range {
  display: block;
}

.col-form-label {
  padding-top: .5rem;
  padding-bottom: .5rem;
  margin-bottom: 0;
}

.col-form-label-lg {
  padding-top: .75rem;
  padding-bottom: .75rem;
  font-size: .9375rem;
}

.col-form-label-sm {
  padding-top: .25rem;
  padding-bottom: .25rem;
  font-size: .875rem;
}

.col-form-legend {
  font-size: 1rem;
}

.col-form-legend,.form-control-static {
  padding-top: .5rem;
  padding-bottom: .5rem;
  margin-bottom: 0;
}

.form-control-static {
  min-height: 2.5rem;
}

.form-control-static.form-control-lg,.form-control-static.form-control-sm,.input-group-lg>.form-control-static.form-control,.input-group-lg>.form-control-static.input-group-addon,.input-group-lg>.input-group-btn>.form-control-static.btn,.input-group-sm>.form-control-static.form-control,.input-group-sm>.form-control-static.input-group-addon,.input-group-sm>.input-group-btn>.form-control-static.btn {
  padding-right: 0;
  padding-left: 0;
}

.form-control-sm,.input-group-sm>.form-control,.input-group-sm>.input-group-addon,.input-group-sm>.input-group-btn>.btn {
  padding: .25rem .5rem;
  font-size: .875rem;
  border-radius: .2rem;
}

.input-group-sm>.input-group-btn>select.btn:not([size]):not([multiple]),.input-group-sm>select.form-control:not([size]):not([multiple]),.input-group-sm>select.input-group-addon:not([size]):not([multiple]),select.form-control-sm:not([size]):not([multiple]) {
  height: 1.8125rem;
}

.form-control-lg,.input-group-lg>.form-control,.input-group-lg>.input-group-addon,.input-group-lg>.input-group-btn>.btn {
  padding: .75rem 1.5rem;
  font-size: .9375rem;
  border-radius: .3rem;
}

.input-group-lg>.input-group-btn>select.btn:not([size]):not([multiple]),.input-group-lg>select.form-control:not([size]):not([multiple]),.input-group-lg>select.input-group-addon:not([size]):not([multiple]),select.form-control-lg:not([size]):not([multiple]) {
  height: 2.75rem;
}

.form-group {
  margin-bottom: 1rem;
}

.form-text {
  display: block;
  margin-top: .25rem;
}

.form-check {
  position: relative;
  display: block;
  margin-bottom: .75rem;
}

.form-check+.form-check {
  margin-top: -.25rem;
}

.form-check.disabled .form-check-label {
  color: #acaaa6;
  cursor: not-allowed;
}

.form-check-label {
  padding-left: 1.25rem;
  margin-bottom: 0;
  cursor: pointer;
}

.form-check-input {
  position: absolute;
  margin-top: .25rem;
  margin-left: -1.25rem;
}

.form-check-input:only-child {
  position: static;
}

.form-check-inline {
  position: relative;
  display: inline-block;
  padding-left: 1.25rem;
  margin-bottom: 0;
  vertical-align: middle;
  cursor: pointer;
}

.form-check-inline+.form-check-inline {
  margin-left: .75rem;
}

.form-check-inline.disabled {
  cursor: not-allowed;
}

.form-control-feedback {
  margin-top: .25rem;
}

.form-control-danger,.form-control-success,.form-control-warning {
  padding-right: 2.25rem;
  background-repeat: no-repeat;
  background-position: center right .625rem;
  background-size: 1.25rem 1.25rem;
}

.has-success .custom-control,.has-success .form-check-inline,.has-success .form-check-label,.has-success .form-control-feedback,.has-success .form-control-label {
  color: #4cbb6c;
}

.has-success .form-control {
  border-color: #4cbb6c;
}

.has-success .input-group-addon {
  color: #4cbb6c;
  border-color: #4cbb6c;
  background-color: #e0f3e5;
}

.has-success .form-control-feedback {
  color: #4cbb6c;
}

.has-success .form-control-success {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='%235cb85c' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3E%3C/svg%3E");
}

.has-warning .custom-control,.has-warning .form-check-inline,.has-warning .form-check-label,.has-warning .form-control-feedback,.has-warning .form-control-label {
  color: #ff9a52;
}

.has-warning .form-control {
  border-color: #ff9a52;
}

.has-warning .input-group-addon {
  color: #ff9a52;
  border-color: #ff9a52;
  background-color: #fff;
}

.has-warning .form-control-feedback {
  color: #ff9a52;
}

.has-warning .form-control-warning {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='%23f0ad4e' d='M4.4 5.324h-.8v-2.46h.8zm0 1.42h-.8V5.89h.8zM3.76.63L.04 7.075c-.115.2.016.425.26.426h7.397c.242 0 .372-.226.258-.426C6.726 4.924 5.47 2.79 4.253.63c-.113-.174-.39-.174-.494 0z'/%3E%3C/svg%3E");
}

.has-danger .custom-control,.has-danger .form-check-inline,.has-danger .form-check-label,.has-danger .form-control-feedback,.has-danger .form-control-label {
  color: #ff4c4c;
}

.has-danger .form-control {
  border-color: #ff4c4c;
}

.has-danger .input-group-addon {
  color: #ff4c4c;
  border-color: #ff4c4c;
  background-color: #fff;
}

.has-danger .form-control-feedback {
  color: #ff4c4c;
}

.has-danger .form-control-danger {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23d9534f' viewBox='-2 -2 7 7'%3E%3Cpath stroke='%23d9534f' d='M0 0l3 3m0-3L0 3'/%3E%3Ccircle r='.5'/%3E%3Ccircle cx='3' r='.5'/%3E%3Ccircle cy='3' r='.5'/%3E%3Ccircle cx='3' cy='3' r='.5'/%3E%3C/svg%3E");
}

@media (min-width:544px) {
  .form-inline .form-group {
    display: inline-block;
    margin-bottom: 0;
    vertical-align: middle;
  }

  .form-inline .form-control {
    display: inline-block;
    width: auto;
    vertical-align: middle;
  }

  .form-inline .form-control-static {
    display: inline-block;
  }

  .form-inline .input-group {
    display: inline-table;
    vertical-align: middle;
  }

  .form-inline .input-group .form-control,.form-inline .input-group .input-group-addon,.form-inline .input-group .input-group-btn {
    width: auto;
  }

  .form-inline .input-group>.form-control {
    width: 100%;
  }

  .form-inline .form-check,.form-inline .form-control-label {
    margin-bottom: 0;
    vertical-align: middle;
  }

  .form-inline .form-check {
    display: inline-block;
    margin-top: 0;
  }

  .form-inline .form-check-label {
    padding-left: 0;
  }

  .form-inline .form-check-input {
    position: relative;
    margin-left: 0;
  }

  .form-inline .has-feedback .form-control-feedback {
    top: 0;
  }
}

.btn {
  display: inline-block;
  font-weight: 400;
  line-height: 1.25;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  cursor: pointer;
  user-select: none;
  border: 1px solid transparent;
  padding: .5rem 1rem;
  font-size: 1rem;
  border-radius: 0;
}

.btn.active.focus,.btn.active:focus,.btn.focus,.btn:active.focus,.btn:active:focus,.btn:focus {
  outline: 5px auto -webkit-focus-ring-color;
  outline-offset: -2px;
}

.btn.focus,.btn:focus,.btn:hover {
  text-decoration: none;
}

.btn.active,.btn:active {
  background-image: none;
  outline: 0;
}

.btn.disabled,.btn:disabled {
  cursor: not-allowed;
  opacity: .65;
}

a.btn.disabled,fieldset[disabled] a.btn {
  pointer-events: none;
}

.btn-primary {
  color: #fff;
  background-color: #2fb5d2;
  border-color: transparent;
}

.btn-primary.focus,.btn-primary:focus,.btn-primary:hover {
  color: #fff;
  background-color: #2592a9;
  border-color: transparent;
}

.btn-primary.active,.btn-primary:active,.open>.btn-primary.dropdown-toggle {
  color: #fff;
  background-color: #2592a9;
  border-color: transparent;
  background-image: none;
}

.btn-primary.active.focus,.btn-primary.active:focus,.btn-primary.active:hover,.btn-primary:active.focus,.btn-primary:active:focus,.btn-primary:active:hover,.open>.btn-primary.dropdown-toggle.focus,.open>.btn-primary.dropdown-toggle:focus,.open>.btn-primary.dropdown-toggle:hover {
  color: #fff;
  background-color: #1e788c;
  border-color: transparent;
}

.btn-primary.disabled.focus,.btn-primary.disabled:focus,.btn-primary.disabled:hover,.btn-primary:disabled.focus,.btn-primary:disabled:focus,.btn-primary:disabled:hover {
  background-color: #2fb5d2;
  border-color: transparent;
}

.btn-secondary,.btn-tertiary {
  color: #414141;
  background-color: #f6f6f6;
  border-color: transparent;
}

.btn-secondary.focus,.btn-secondary:focus,.btn-secondary:hover,.btn-tertiary:focus,.btn-tertiary:hover,.focus.btn-tertiary {
  color: #414141;
  background-color: #ddd;
  border-color: transparent;
}

.active.btn-tertiary,.btn-secondary.active,.btn-secondary:active,.btn-tertiary:active,.open>.btn-secondary.dropdown-toggle,.open>.dropdown-toggle.btn-tertiary {
  color: #414141;
  background-color: #ddd;
  border-color: transparent;
  background-image: none;
}

.active.btn-tertiary:focus,.active.btn-tertiary:hover,.active.focus.btn-tertiary,.btn-secondary.active.focus,.btn-secondary.active:focus,.btn-secondary.active:hover,.btn-secondary:active.focus,.btn-secondary:active:focus,.btn-secondary:active:hover,.btn-tertiary:active.focus,.btn-tertiary:active:focus,.btn-tertiary:active:hover,.open>.btn-secondary.dropdown-toggle.focus,.open>.btn-secondary.dropdown-toggle:focus,.open>.btn-secondary.dropdown-toggle:hover,.open>.dropdown-toggle.btn-tertiary:focus,.open>.dropdown-toggle.btn-tertiary:hover,.open>.dropdown-toggle.focus.btn-tertiary {
  color: #414141;
  background-color: #cbcbcb;
  border-color: transparent;
}

.btn-secondary.disabled.focus,.btn-secondary.disabled:focus,.btn-secondary.disabled:hover,.btn-secondary:disabled.focus,.btn-secondary:disabled:focus,.btn-secondary:disabled:hover,.btn-tertiary:disabled.focus,.btn-tertiary:disabled:focus,.btn-tertiary:disabled:hover,.disabled.btn-tertiary:focus,.disabled.btn-tertiary:hover,.disabled.focus.btn-tertiary {
  background-color: #f6f6f6;
  border-color: transparent;
}

.btn-info {
  color: #fff;
  background-color: #5bc0de;
  border-color: #5bc0de;
}

.btn-info.focus,.btn-info:focus,.btn-info:hover {
  color: #fff;
  background-color: #31b0d5;
  border-color: #2aabd2;
}

.btn-info.active,.btn-info:active,.open>.btn-info.dropdown-toggle {
  color: #fff;
  background-color: #31b0d5;
  border-color: #2aabd2;
  background-image: none;
}

.btn-info.active.focus,.btn-info.active:focus,.btn-info.active:hover,.btn-info:active.focus,.btn-info:active:focus,.btn-info:active:hover,.open>.btn-info.dropdown-toggle.focus,.open>.btn-info.dropdown-toggle:focus,.open>.btn-info.dropdown-toggle:hover {
  color: #fff;
  background-color: #269abc;
  border-color: #1f7e9a;
}

.btn-info.disabled.focus,.btn-info.disabled:focus,.btn-info.disabled:hover,.btn-info:disabled.focus,.btn-info:disabled:focus,.btn-info:disabled:hover {
  background-color: #5bc0de;
  border-color: #5bc0de;
}

.btn-success {
  color: #fff;
  background-color: #4cbb6c;
  border-color: #4cbb6c;
}

.btn-success.focus,.btn-success:focus,.btn-success:hover {
  color: #fff;
  background-color: #3a9a56;
  border-color: #389252;
}

.btn-success.active,.btn-success:active,.open>.btn-success.dropdown-toggle {
  color: #fff;
  background-color: #3a9a56;
  border-color: #389252;
  background-image: none;
}

.btn-success.active.focus,.btn-success.active:focus,.btn-success.active:hover,.btn-success:active.focus,.btn-success:active:focus,.btn-success:active:hover,.open>.btn-success.dropdown-toggle.focus,.open>.btn-success.dropdown-toggle:focus,.open>.btn-success.dropdown-toggle:hover {
  color: #fff;
  background-color: #318047;
  border-color: #256237;
}

.btn-success.disabled.focus,.btn-success.disabled:focus,.btn-success.disabled:hover,.btn-success:disabled.focus,.btn-success:disabled:focus,.btn-success:disabled:hover {
  background-color: #4cbb6c;
  border-color: #4cbb6c;
}

.btn-warning {
  color: #fff;
  background-color: #ff9a52;
  border-color: #ff9a52;
}

.btn-warning.focus,.btn-warning:focus,.btn-warning:hover {
  color: #fff;
  background-color: #ff7c1f;
  border-color: #ff7615;
}

.btn-warning.active,.btn-warning:active,.open>.btn-warning.dropdown-toggle {
  color: #fff;
  background-color: #ff7c1f;
  border-color: #ff7615;
  background-image: none;
}

.btn-warning.active.focus,.btn-warning.active:focus,.btn-warning.active:hover,.btn-warning:active.focus,.btn-warning:active:focus,.btn-warning:active:hover,.open>.btn-warning.dropdown-toggle.focus,.open>.btn-warning.dropdown-toggle:focus,.open>.btn-warning.dropdown-toggle:hover {
  color: #fff;
  background-color: #fa6800;
  border-color: #d25700;
}

.btn-warning.disabled.focus,.btn-warning.disabled:focus,.btn-warning.disabled:hover,.btn-warning:disabled.focus,.btn-warning:disabled:focus,.btn-warning:disabled:hover {
  background-color: #ff9a52;
  border-color: #ff9a52;
}

.btn-danger {
  color: #fff;
  background-color: #ff4c4c;
  border-color: #ff4c4c;
}

.btn-danger.focus,.btn-danger:focus,.btn-danger:hover {
  color: #fff;
  background-color: #ff1919;
  border-color: #ff0f0f;
}

.btn-danger.active,.btn-danger:active,.open>.btn-danger.dropdown-toggle {
  color: #fff;
  background-color: #ff1919;
  border-color: #ff0f0f;
  background-image: none;
}

.btn-danger.active.focus,.btn-danger.active:focus,.btn-danger.active:hover,.btn-danger:active.focus,.btn-danger:active:focus,.btn-danger:active:hover,.open>.btn-danger.dropdown-toggle.focus,.open>.btn-danger.dropdown-toggle:focus,.open>.btn-danger.dropdown-toggle:hover {
  color: #fff;
  background-color: #f40000;
  border-color: #c00;
}

.btn-danger.disabled.focus,.btn-danger.disabled:focus,.btn-danger.disabled:hover,.btn-danger:disabled.focus,.btn-danger:disabled:focus,.btn-danger:disabled:hover {
  background-color: #ff4c4c;
  border-color: #ff4c4c;
}

.btn-outline-primary {
  color: #2fb5d2;
  background-image: none;
  background-color: transparent;
  border-color: #2fb5d2;
}

.btn-outline-primary.active,.btn-outline-primary.focus,.btn-outline-primary:active,.btn-outline-primary:focus,.btn-outline-primary:hover,.open>.btn-outline-primary.dropdown-toggle {
  color: #fff;
  background-color: #2fb5d2;
  border-color: #2fb5d2;
}

.btn-outline-primary.active.focus,.btn-outline-primary.active:focus,.btn-outline-primary.active:hover,.btn-outline-primary:active.focus,.btn-outline-primary:active:focus,.btn-outline-primary:active:hover,.open>.btn-outline-primary.dropdown-toggle.focus,.open>.btn-outline-primary.dropdown-toggle:focus,.open>.btn-outline-primary.dropdown-toggle:hover {
  color: #fff;
  background-color: #1e788c;
  border-color: #175c6a;
}

.btn-outline-primary.disabled.focus,.btn-outline-primary.disabled:focus,.btn-outline-primary.disabled:hover,.btn-outline-primary:disabled.focus,.btn-outline-primary:disabled:focus,.btn-outline-primary:disabled:hover {
  border-color: #83d3e4;
}

.btn-outline-secondary {
  color: transparent;
  background-image: none;
  background-color: transparent;
  border-color: transparent;
}

.btn-outline-secondary.active,.btn-outline-secondary.active.focus,.btn-outline-secondary.active:focus,.btn-outline-secondary.active:hover,.btn-outline-secondary.focus,.btn-outline-secondary:active,.btn-outline-secondary:active.focus,.btn-outline-secondary:active:focus,.btn-outline-secondary:active:hover,.btn-outline-secondary:focus,.btn-outline-secondary:hover,.open>.btn-outline-secondary.dropdown-toggle,.open>.btn-outline-secondary.dropdown-toggle.focus,.open>.btn-outline-secondary.dropdown-toggle:focus,.open>.btn-outline-secondary.dropdown-toggle:hover {
  color: #fff;
  background-color: transparent;
  border-color: transparent;
}

.btn-outline-secondary.disabled.focus,.btn-outline-secondary.disabled:focus,.btn-outline-secondary.disabled:hover,.btn-outline-secondary:disabled.focus,.btn-outline-secondary:disabled:focus,.btn-outline-secondary:disabled:hover {
  border-color: rgba(51,51,51,0);
}

.btn-outline-info {
  color: #5bc0de;
  background-image: none;
  background-color: transparent;
  border-color: #5bc0de;
}

.btn-outline-info.active,.btn-outline-info.focus,.btn-outline-info:active,.btn-outline-info:focus,.btn-outline-info:hover,.open>.btn-outline-info.dropdown-toggle {
  color: #fff;
  background-color: #5bc0de;
  border-color: #5bc0de;
}

.btn-outline-info.active.focus,.btn-outline-info.active:focus,.btn-outline-info.active:hover,.btn-outline-info:active.focus,.btn-outline-info:active:focus,.btn-outline-info:active:hover,.open>.btn-outline-info.dropdown-toggle.focus,.open>.btn-outline-info.dropdown-toggle:focus,.open>.btn-outline-info.dropdown-toggle:hover {
  color: #fff;
  background-color: #269abc;
  border-color: #1f7e9a;
}

.btn-outline-info.disabled.focus,.btn-outline-info.disabled:focus,.btn-outline-info.disabled:hover,.btn-outline-info:disabled.focus,.btn-outline-info:disabled:focus,.btn-outline-info:disabled:hover {
  border-color: #b0e1ef;
}

.btn-outline-success {
  color: #4cbb6c;
  background-image: none;
  background-color: transparent;
  border-color: #4cbb6c;
}

.btn-outline-success.active,.btn-outline-success.focus,.btn-outline-success:active,.btn-outline-success:focus,.btn-outline-success:hover,.open>.btn-outline-success.dropdown-toggle {
  color: #fff;
  background-color: #4cbb6c;
  border-color: #4cbb6c;
}

.btn-outline-success.active.focus,.btn-outline-success.active:focus,.btn-outline-success.active:hover,.btn-outline-success:active.focus,.btn-outline-success:active:focus,.btn-outline-success:active:hover,.open>.btn-outline-success.dropdown-toggle.focus,.open>.btn-outline-success.dropdown-toggle:focus,.open>.btn-outline-success.dropdown-toggle:hover {
  color: #fff;
  background-color: #318047;
  border-color: #256237;
}

.btn-outline-success.disabled.focus,.btn-outline-success.disabled:focus,.btn-outline-success.disabled:hover,.btn-outline-success:disabled.focus,.btn-outline-success:disabled:focus,.btn-outline-success:disabled:hover {
  border-color: #96d7a9;
}

.btn-outline-warning {
  color: #ff9a52;
  background-image: none;
  background-color: transparent;
  border-color: #ff9a52;
}

.btn-outline-warning.active,.btn-outline-warning.focus,.btn-outline-warning:active,.btn-outline-warning:focus,.btn-outline-warning:hover,.open>.btn-outline-warning.dropdown-toggle {
  color: #fff;
  background-color: #ff9a52;
  border-color: #ff9a52;
}

.btn-outline-warning.active.focus,.btn-outline-warning.active:focus,.btn-outline-warning.active:hover,.btn-outline-warning:active.focus,.btn-outline-warning:active:focus,.btn-outline-warning:active:hover,.open>.btn-outline-warning.dropdown-toggle.focus,.open>.btn-outline-warning.dropdown-toggle:focus,.open>.btn-outline-warning.dropdown-toggle:hover {
  color: #fff;
  background-color: #fa6800;
  border-color: #d25700;
}

.btn-outline-warning.disabled.focus,.btn-outline-warning.disabled:focus,.btn-outline-warning.disabled:hover,.btn-outline-warning:disabled.focus,.btn-outline-warning:disabled:focus,.btn-outline-warning:disabled:hover {
  border-color: #ffd6b8;
}

.btn-outline-danger {
  color: #ff4c4c;
  background-image: none;
  background-color: transparent;
  border-color: #ff4c4c;
}

.btn-outline-danger.active,.btn-outline-danger.focus,.btn-outline-danger:active,.btn-outline-danger:focus,.btn-outline-danger:hover,.open>.btn-outline-danger.dropdown-toggle {
  color: #fff;
  background-color: #ff4c4c;
  border-color: #ff4c4c;
}

.btn-outline-danger.active.focus,.btn-outline-danger.active:focus,.btn-outline-danger.active:hover,.btn-outline-danger:active.focus,.btn-outline-danger:active:focus,.btn-outline-danger:active:hover,.open>.btn-outline-danger.dropdown-toggle.focus,.open>.btn-outline-danger.dropdown-toggle:focus,.open>.btn-outline-danger.dropdown-toggle:hover {
  color: #fff;
  background-color: #f40000;
  border-color: #c00;
}

.btn-outline-danger.disabled.focus,.btn-outline-danger.disabled:focus,.btn-outline-danger.disabled:hover,.btn-outline-danger:disabled.focus,.btn-outline-danger:disabled:focus,.btn-outline-danger:disabled:hover {
  border-color: #ffb2b2;
}

.btn-link {
  font-weight: 400;
  color: #2fb5d2;
  border-radius: 0;
}

.btn-link,.btn-link.active,.btn-link:active,.btn-link:disabled {
  background-color: transparent;
}

.btn-link,.btn-link:active,.btn-link:focus,.btn-link:hover {
  border-color: transparent;
}

.btn-link:focus,.btn-link:hover {
  color: #208094;
  text-decoration: underline;
  background-color: transparent;
}

.btn-link:disabled:focus,.btn-link:disabled:hover {
  color: #ebebeb;
  text-decoration: none;
}

.btn-group-lg>.btn,.btn-lg {
  padding: .75rem 1.5rem;
  font-size: .9375rem;
  border-radius: .3rem;
}

.btn-group-sm>.btn,.btn-sm {
  padding: .25rem .5rem;
  font-size: .875rem;
  border-radius: .2rem;
}

.btn-block {
  display: block;
  width: 100%;
}

.btn-block+.btn-block {
  margin-top: .5rem;
}

input[type=button].btn-block,input[type=reset].btn-block,input[type=submit].btn-block {
  width: 100%;
}

.fade {
  opacity: 0;
  transition: opacity .15s linear;
}

.fade.in {
  opacity: 1;
}

.collapse {
  display: none;
}

.collapse.in {
  display: block;
}

.collapsing {
  height: 0;
  overflow: hidden;
  transition-timing-function: ease;
  transition-duration: .35s;
  transition-property: height;
}

.collapsing,.dropdown,.dropup {
  position: relative;
}

.dropdown-toggle:after {
  display: inline-block;
  width: 0;
  height: 0;
  margin-left: .3em;
  vertical-align: middle;
  content: "";
  border-top: .3em solid;
  border-right: .3em solid transparent;
  border-left: .3em solid transparent;
}

.dropdown-toggle:focus {
  outline: 0;
}

.dropup .dropdown-toggle:after {
  border-top: 0;
  border-bottom: .3em solid;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1000;
  display: none;
  float: left;
  min-width: 160px;
  padding: 5px 0;
  margin: 2px 0 0;
  font-size: 1rem;
  color: #878787;
  text-align: left;
  list-style: none;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(0,0,0,.15);
  border-radius: 0;
}

.dropdown-divider {
  height: 1px;
  margin: .5rem 0;
  overflow: hidden;
  background-color: #e5e5e5;
}

.dropdown-item {
  display: block;
  width: 100%;
  padding: 3px 20px;
  clear: both;
  font-weight: 400;
  color: #878787;
  text-align: inherit;
  white-space: nowrap;
  background: none;
  border: 0;
}

.dropdown-item:focus,.dropdown-item:hover {
  color: #7a7a7a;
  background-color: #f5f5f5;
}

.dropdown-item.active,.dropdown-item.active:focus,.dropdown-item.active:hover {
  color: #fff;
  text-decoration: none;
  background-color: #2fb5d2;
  outline: 0;
}

.dropdown-item.disabled,.dropdown-item.disabled:focus,.dropdown-item.disabled:hover {
  color: #ebebeb;
}

.dropdown-item.disabled:focus,.dropdown-item.disabled:hover {
  text-decoration: none;
  cursor: not-allowed;
  background-color: transparent;
  background-image: none;
  filter: "progid:DXImageTransform.Microsoft.gradient(enabled = false)";
}

.open>.dropdown-menu {
  display: block;
}

.open>a {
  outline: 0;
}

.dropdown-menu-right {
  right: 0;
  left: auto;
}

.dropdown-menu-left {
  right: auto;
  left: 0;
}

.dropdown-header {
  display: block;
  padding: 5px 20px;
  font-size: .875rem;
  color: #ebebeb;
  white-space: nowrap;
}

.dropdown-backdrop {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 990;
}

.dropup .caret,.navbar-fixed-bottom .dropdown .caret {
  content: "";
  border-top: 0;
  border-bottom: .3em solid;
}

.dropup .dropdown-menu,.navbar-fixed-bottom .dropdown .dropdown-menu {
  top: auto;
  bottom: 100%;
  margin-bottom: 2px;
}

.btn-group,.btn-group-vertical {
  position: relative;
  display: inline-block;
  vertical-align: middle;
}

.btn-group-vertical>.btn,.btn-group>.btn {
  position: relative;
  float: left;
}

.btn-group-vertical>.btn.active,.btn-group-vertical>.btn:active,.btn-group-vertical>.btn:focus,.btn-group-vertical>.btn:hover,.btn-group>.btn.active,.btn-group>.btn:active,.btn-group>.btn:focus,.btn-group>.btn:hover {
  z-index: 2;
}

.btn-group .btn+.btn,.btn-group .btn+.btn-group,.btn-group .btn-group+.btn,.btn-group .btn-group+.btn-group {
  margin-left: -1px;
}

.btn-toolbar {
  margin-left: -.5rem;
}

.btn-toolbar:after {
  content: "";
  display: table;
  clear: both;
}

.btn-toolbar .btn-group,.btn-toolbar .input-group {
  float: left;
}

.btn-toolbar>.btn,.btn-toolbar>.btn-group,.btn-toolbar>.input-group {
  margin-left: .5rem;
}

.btn-group>.btn:not(:first-child):not(:last-child):not(.dropdown-toggle) {
  border-radius: 0;
}

.btn-group>.btn:first-child {
  margin-left: 0;
}

.btn-group>.btn:first-child:not(:last-child):not(.dropdown-toggle) {
  border-bottom-right-radius: 0;
  border-top-right-radius: 0;
}

.btn-group>.btn:last-child:not(:first-child),.btn-group>.dropdown-toggle:not(:first-child) {
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
}

.btn-group>.btn-group {
  float: left;
}

.btn-group>.btn-group:not(:first-child):not(:last-child)>.btn {
  border-radius: 0;
}

.btn-group>.btn-group:first-child:not(:last-child)>.btn:last-child,.btn-group>.btn-group:first-child:not(:last-child)>.dropdown-toggle {
  border-bottom-right-radius: 0;
  border-top-right-radius: 0;
}

.btn-group>.btn-group:last-child:not(:first-child)>.btn:first-child {
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
}

.btn-group .dropdown-toggle:active,.btn-group.open .dropdown-toggle {
  outline: 0;
}

.btn+.dropdown-toggle-split {
  padding-right: .75rem;
  padding-left: .75rem;
}

.btn+.dropdown-toggle-split:after {
  margin-left: 0;
}

.btn-group-sm>.btn+.dropdown-toggle-split,.btn-sm+.dropdown-toggle-split {
  padding-right: .375rem;
  padding-left: .375rem;
}

.btn-group-lg>.btn+.dropdown-toggle-split,.btn-lg+.dropdown-toggle-split {
  padding-right: 1.125rem;
  padding-left: 1.125rem;
}

.btn .caret {
  margin-left: 0;
}

.btn-group-lg>.btn .caret,.btn-lg .caret {
  border-width: .3em .3em 0;
  border-bottom-width: 0;
}

.dropup .btn-group-lg>.btn .caret,.dropup .btn-lg .caret {
  border-width: 0 .3em .3em;
}

.btn-group-vertical>.btn,.btn-group-vertical>.btn-group,.btn-group-vertical>.btn-group>.btn {
  display: block;
  float: none;
  width: 100%;
  max-width: 100%;
}

.btn-group-vertical>.btn-group:after {
  content: "";
  display: table;
  clear: both;
}

.btn-group-vertical>.btn-group>.btn {
  float: none;
}

.btn-group-vertical>.btn+.btn,.btn-group-vertical>.btn+.btn-group,.btn-group-vertical>.btn-group+.btn,.btn-group-vertical>.btn-group+.btn-group {
  margin-top: -1px;
  margin-left: 0;
}

.btn-group-vertical>.btn:not(:first-child):not(:last-child) {
  border-radius: 0;
}

.btn-group-vertical>.btn:first-child:not(:last-child) {
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.btn-group-vertical>.btn:last-child:not(:first-child) {
  border-top-right-radius: 0;
  border-top-left-radius: 0;
}

.btn-group-vertical>.btn-group:not(:first-child):not(:last-child)>.btn {
  border-radius: 0;
}

.btn-group-vertical>.btn-group:first-child:not(:last-child)>.btn:last-child,.btn-group-vertical>.btn-group:first-child:not(:last-child)>.dropdown-toggle {
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.btn-group-vertical>.btn-group:last-child:not(:first-child)>.btn:first-child {
  border-top-right-radius: 0;
  border-top-left-radius: 0;
}

[data-toggle=buttons]>.btn-group>.btn input[type=checkbox],[data-toggle=buttons]>.btn-group>.btn input[type=radio],[data-toggle=buttons]>.btn input[type=checkbox],[data-toggle=buttons]>.btn input[type=radio] {
  position: absolute;
  clip: rect(0,0,0,0);
  pointer-events: none;
}

.input-group {
  position: relative;
  width: 100%;
  display: table;
  border-collapse: separate;
}

.input-group .form-control {
  position: relative;
  z-index: 2;
  float: left;
  width: 100%;
  margin-bottom: 0;
}

.input-group .form-control:active,.input-group .form-control:focus,.input-group .form-control:hover {
  z-index: 3;
}

.input-group-addon,.input-group-btn,.input-group .form-control {
  display: table-cell;
}

.input-group-addon:not(:first-child):not(:last-child),.input-group-btn:not(:first-child):not(:last-child),.input-group .form-control:not(:first-child):not(:last-child) {
  border-radius: 0;
}

.input-group-addon,.input-group-btn {
  width: 1%;
  white-space: nowrap;
  vertical-align: middle;
}

.input-group-addon {
  padding: .5rem .75rem;
  margin-bottom: 0;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.25;
  color: #acaaa6;
  text-align: center;
  background-color: #f6f6f6;
  border: 1px solid rgba(0,0,0,.15);
  border-radius: 0;
}

.input-group-addon.form-control-sm,.input-group-sm>.input-group-addon,.input-group-sm>.input-group-btn>.input-group-addon.btn {
  padding: .25rem .5rem;
  font-size: .875rem;
  border-radius: .2rem;
}

.input-group-addon.form-control-lg,.input-group-lg>.input-group-addon,.input-group-lg>.input-group-btn>.input-group-addon.btn {
  padding: .75rem 1.5rem;
  font-size: .9375rem;
  border-radius: .3rem;
}

.input-group-addon input[type=checkbox],.input-group-addon input[type=radio] {
  margin-top: 0;
}

.input-group-addon:not(:last-child),.input-group-btn:not(:first-child)>.btn-group:not(:last-child)>.btn,.input-group-btn:not(:first-child)>.btn:not(:last-child):not(.dropdown-toggle),.input-group-btn:not(:last-child)>.btn,.input-group-btn:not(:last-child)>.btn-group>.btn,.input-group-btn:not(:last-child)>.dropdown-toggle,.input-group .form-control:not(:last-child) {
  border-bottom-right-radius: 0;
  border-top-right-radius: 0;
}

.input-group-addon:not(:last-child) {
  border-right: 0;
}

.input-group-addon:not(:first-child),.input-group-btn:not(:first-child)>.btn,.input-group-btn:not(:first-child)>.btn-group>.btn,.input-group-btn:not(:first-child)>.dropdown-toggle,.input-group-btn:not(:last-child)>.btn-group:not(:first-child)>.btn,.input-group-btn:not(:last-child)>.btn:not(:first-child),.input-group .form-control:not(:first-child) {
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
}

.form-control+.input-group-addon:not(:first-child) {
  border-left: 0;
}

.input-group-btn {
  font-size: 0;
  white-space: nowrap;
}

.input-group-btn,.input-group-btn>.btn {
  position: relative;
}

.input-group-btn>.btn+.btn {
  margin-left: -1px;
}

.input-group-btn>.btn:active,.input-group-btn>.btn:focus,.input-group-btn>.btn:hover {
  z-index: 3;
}

.input-group-btn:not(:last-child)>.btn,.input-group-btn:not(:last-child)>.btn-group {
  margin-right: -1px;
}

.input-group-btn:not(:first-child)>.btn,.input-group-btn:not(:first-child)>.btn-group {
  z-index: 2;
  margin-left: -1px;
}

.input-group-btn:not(:first-child)>.btn-group:active,.input-group-btn:not(:first-child)>.btn-group:focus,.input-group-btn:not(:first-child)>.btn-group:hover,.input-group-btn:not(:first-child)>.btn:active,.input-group-btn:not(:first-child)>.btn:focus,.input-group-btn:not(:first-child)>.btn:hover {
  z-index: 3;
}

.custom-control {
  position: relative;
  display: inline;
  padding-left: 1.5rem;
  cursor: pointer;
}

.custom-control+.custom-control {
  margin-left: 1rem;
}

.custom-control-input {
  position: absolute;
  z-index: -1;
  opacity: 0;
}

.custom-control-input:checked~.custom-control-indicator {
  color: #fff;
  background-color: #0074d9;
}

.custom-control-input:focus~.custom-control-indicator {
  box-shadow: 0 0 0 .075rem #fff,0 0 0 .2rem #0074d9;
}

.custom-control-input:active~.custom-control-indicator {
  color: #fff;
  background-color: #84c6ff;
}

.custom-control-input:disabled~.custom-control-indicator {
  cursor: not-allowed;
  background-color: #eee;
}

.custom-control-input:disabled~.custom-control-description {
  color: #767676;
  cursor: not-allowed;
}

.custom-control-indicator {
  position: absolute;
  top: .0625rem;
  left: 0;
  display: block;
  width: 1rem;
  height: 1rem;
  pointer-events: none;
  user-select: none;
  background-color: #ddd;
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: 50% 50%;
}

.custom-checkbox .custom-control-indicator {
  border-radius: 0;
}

.custom-checkbox .custom-control-input:checked~.custom-control-indicator {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3E%3C/svg%3E");
}

.custom-checkbox .custom-control-input:indeterminate~.custom-control-indicator {
  background-color: #0074d9;
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 4'%3E%3Cpath stroke='%23fff' d='M0 2h4'/%3E%3C/svg%3E");
}

.custom-radio .custom-control-indicator {
  border-radius: 50%;
}

.custom-radio .custom-control-input:checked~.custom-control-indicator {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3E%3Ccircle r='3' fill='%23fff'/%3E%3C/svg%3E");
}

.custom-controls-stacked .custom-control {
  display: inline;
}

.custom-controls-stacked .custom-control:after {
  display: block;
  margin-bottom: .25rem;
  content: "";
}

.custom-controls-stacked .custom-control+.custom-control {
  margin-left: 0;
}

.custom-select {
  display: inline-block;
  max-width: 100%;
  padding: .375rem 1.75rem .375rem .75rem;
 
  color: #acaaa6;
  vertical-align: middle;
  background: #fff url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3E%3Cpath fill='%23333' d='M2 0L0 2h4zm0 5L0 3h4z'/%3E%3C/svg%3E") no-repeat right .75rem center;
 
  background-size: 8px 10px;
  border: 1px solid rgba(0,0,0,.15);
  border-radius: 0;
  -moz-appearance: none;
  -webkit-appearance: none;
}

.custom-select:focus {
  border-color: #51a7e8;
  outline: none;
}

.custom-select:focus::-ms-value {
  color: #acaaa6;
  background-color: #fff;
}

.custom-select:disabled {
  color: #ebebeb;
  cursor: not-allowed;
  background-color: #f6f6f6;
}

.custom-select::-ms-expand {
  opacity: 0;
}

.custom-select-sm {
  padding-top: .375rem;
  padding-bottom: .375rem;
  font-size: 75%;
}

.custom-file {
  position: relative;
  display: inline-block;
  max-width: 100%;
  height: 2.5rem;
  cursor: pointer;
}

.custom-file-input {
  min-width: 14rem;
  max-width: 100%;
  margin: 0;
  filter: alpha(opacity=0);
  opacity: 0;
}

.custom-file-control {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: 5;
  height: 2.5rem;
  padding: .5rem 1rem;
  line-height: 1.5;
  color: #555;
  user-select: none;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 0;
}

.custom-file-control:lang(en):after {
  content: "Choose file...";
}

.custom-file-control:before {
  position: absolute;
  top: -1px;
  right: -1px;
  bottom: -1px;
  z-index: 6;
  display: block;
  height: 2.5rem;
  padding: .5rem 1rem;
  line-height: 1.5;
  color: #555;
  background-color: #eee;
  border: 1px solid #ddd;
  border-radius: 0 0 0 0;
}

.custom-file-control:lang(en):before {
  content: "Browse";
}

.nav {
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
}

.nav-link {
  display: inline-block;
}

.nav-link:focus,.nav-link:hover {
  text-decoration: none;
}

.nav-link.disabled {
  color: #ebebeb;
}

.nav-link.disabled,.nav-link.disabled:focus,.nav-link.disabled:hover {
  color: #ebebeb;
  cursor: not-allowed;
  background-color: transparent;
}

.nav-inline .nav-item {
  display: inline-block;
}

.nav-inline .nav-item+.nav-item,.nav-inline .nav-link+.nav-link {
  margin-left: 1rem;
}

.nav-tabs {
  border-bottom: 1px solid #ddd;
}

.nav-tabs:after {
  content: "";
  display: table;
  clear: both;
}

.nav-tabs .nav-item {
  float: left;
  margin-bottom: -1px;
}

.nav-tabs .nav-item+.nav-item {
  margin-left: .2rem;
}

.nav-tabs .nav-link {
  display: block;
  padding: .5em 1em;
  border: 1px solid transparent;
  border-top-right-radius: 0;
  border-top-left-radius: 0;
}

.nav-tabs .nav-link:focus,.nav-tabs .nav-link:hover {
  border-color: #f6f6f6 #f6f6f6 #ddd;
}

.nav-tabs .nav-link.disabled,.nav-tabs .nav-link.disabled:focus,.nav-tabs .nav-link.disabled:hover {
  color: #ebebeb;
  background-color: transparent;
  border-color: transparent;
}

.nav-tabs .nav-item.open .nav-link,.nav-tabs .nav-item.open .nav-link:focus,.nav-tabs .nav-item.open .nav-link:hover,.nav-tabs .nav-link.active,.nav-tabs .nav-link.active:focus,.nav-tabs .nav-link.active:hover {
  color: #acaaa6;
  background-color: #fff;
  border-color: #ddd #ddd transparent;
}

.nav-tabs .dropdown-menu {
  margin-top: -1px;
  border-top-right-radius: 0;
  border-top-left-radius: 0;
}

.nav-pills:after {
  content: "";
  display: table;
  clear: both;
}

.nav-pills .nav-item {
  float: left;
}

.nav-pills .nav-item+.nav-item {
  margin-left: .2rem;
}

.nav-pills .nav-link {
  display: block;
  padding: .5em 1em;
  border-radius: 0;
}

.nav-pills .nav-item.open .nav-link,.nav-pills .nav-item.open .nav-link:focus,.nav-pills .nav-item.open .nav-link:hover,.nav-pills .nav-link.active,.nav-pills .nav-link.active:focus,.nav-pills .nav-link.active:hover {
  color: #fff;
  cursor: default;
  background-color: #2fb5d2;
}

.nav-stacked .nav-item {
  display: block;
  float: none;
}

.nav-stacked .nav-item+.nav-item {
  margin-top: .2rem;
  margin-left: 0;
}

.tab-content>.tab-pane {
  display: none;
}

.tab-content>.active {
  display: block;
}

.navbar {
  position: relative;
  padding: .5rem 1rem;
}

.navbar:after {
  content: "";
  display: table;
  clear: both;
}

@media (min-width:544px) {
  .navbar {
    border-radius: 0;
  }
}

.navbar-full {
  z-index: 1000;
}

@media (min-width:544px) {
  .navbar-full {
    border-radius: 0;
  }
}

.navbar-fixed-bottom,.navbar-fixed-top {
  position: fixed;
  right: 0;
  left: 0;
  z-index: 1030;
}

@media (min-width:544px) {
  .navbar-fixed-bottom,.navbar-fixed-top {
    border-radius: 0;
  }
}

.navbar-fixed-top {
  top: 0;
}

.navbar-fixed-bottom {
  bottom: 0;
}

.navbar-sticky-top {
  position: sticky;
  top: 0;
  z-index: 1030;
  width: 100%;
}

@media (min-width:544px) {
  .navbar-sticky-top {
    border-radius: 0;
  }
}

.navbar-brand {
  float: left;
  padding-top: .25rem;
  padding-bottom: .25rem;
  margin-right: 1rem;
  font-size: .9375rem;
}

.navbar-brand:focus,.navbar-brand:hover {
  text-decoration: none;
}

.navbar-brand>img {
  display: block;
}

.navbar-divider {
  float: left;
  width: 1px;
  padding-top: .425rem;
  padding-bottom: .425rem;
  margin-right: 1rem;
  margin-left: 1rem;
  overflow: hidden;
}

.navbar-divider:before {
  
}

.navbar-toggler {
  padding: .5rem .75rem;
  font-size: .9375rem;
  line-height: 1;
  background: none;
  border: 1px solid transparent;
  border-radius: 0;
}

.navbar-toggler:focus,.navbar-toggler:hover {
  text-decoration: none;
}

.navbar-nav .nav-item {
  float: left;
}

.navbar-nav .nav-link {
  display: block;
  padding-top: .425rem;
  padding-bottom: .425rem;
}

.navbar-nav .nav-item+.nav-item,.navbar-nav .nav-link+.nav-link {
  margin-left: 1rem;
}

.navbar-light .navbar-brand,.navbar-light .navbar-brand:focus,.navbar-light .navbar-brand:hover {
  color: rgba(0,0,0,.8);
}

.navbar-light .navbar-nav .nav-link {
  color: rgba(0,0,0,.3);
}

.navbar-light .navbar-nav .nav-link:focus,.navbar-light .navbar-nav .nav-link:hover {
  color: rgba(0,0,0,.6);
}

.navbar-light .navbar-nav .active>.nav-link,.navbar-light .navbar-nav .active>.nav-link:focus,.navbar-light .navbar-nav .active>.nav-link:hover,.navbar-light .navbar-nav .nav-link.active,.navbar-light .navbar-nav .nav-link.active:focus,.navbar-light .navbar-nav .nav-link.active:hover,.navbar-light .navbar-nav .nav-link.open,.navbar-light .navbar-nav .nav-link.open:focus,.navbar-light .navbar-nav .nav-link.open:hover,.navbar-light .navbar-nav .open>.nav-link,.navbar-light .navbar-nav .open>.nav-link:focus,.navbar-light .navbar-nav .open>.nav-link:hover {
  color: rgba(0,0,0,.8);
}

.navbar-light .navbar-divider {
  background-color: rgba(0,0,0,.075);
}

.navbar-dark .navbar-brand,.navbar-dark .navbar-brand:focus,.navbar-dark .navbar-brand:hover {
  color: #fff;
}

.navbar-dark .navbar-nav .nav-link {
  color: hsla(0,0%,100%,.5);
}

.navbar-dark .navbar-nav .nav-link:focus,.navbar-dark .navbar-nav .nav-link:hover {
  color: hsla(0,0%,100%,.75);
}

.navbar-dark .navbar-nav .active>.nav-link,.navbar-dark .navbar-nav .active>.nav-link:focus,.navbar-dark .navbar-nav .active>.nav-link:hover,.navbar-dark .navbar-nav .nav-link.active,.navbar-dark .navbar-nav .nav-link.active:focus,.navbar-dark .navbar-nav .nav-link.active:hover,.navbar-dark .navbar-nav .nav-link.open,.navbar-dark .navbar-nav .nav-link.open:focus,.navbar-dark .navbar-nav .nav-link.open:hover,.navbar-dark .navbar-nav .open>.nav-link,.navbar-dark .navbar-nav .open>.nav-link:focus,.navbar-dark .navbar-nav .open>.nav-link:hover {
  color: #fff;
}

.navbar-dark .navbar-divider {
  background-color: hsla(0,0%,100%,.075);
}

.navbar-toggleable-xs:after {
  content: "";
  display: table;
  clear: both;
}

@media (max-width:543px) {
  .navbar-toggleable-xs .navbar-nav .nav-item {
    float: none;
    margin-left: 0;
  }
}

@media (min-width:544px) {
  .navbar-toggleable-xs {
    display: block!important;
  }
}

.navbar-toggleable-sm:after {
  content: "";
  display: table;
  clear: both;
}

@media (max-width:767px) {
  .navbar-toggleable-sm .navbar-nav .nav-item {
    float: none;
    margin-left: 0;
  }
}

@media (min-width:768px) {
  .navbar-toggleable-sm {
    display: block!important;
  }
}

.navbar-toggleable-md:after {
  content: "";
  display: table;
  clear: both;
}

@media (max-width:991px) {
  .navbar-toggleable-md .navbar-nav .nav-item {
    float: none;
    margin-left: 0;
  }
}

@media (min-width:992px) {
  .navbar-toggleable-md {
    display: block!important;
  }
}

.card {
  position: relative;
  display: block;
  margin-bottom: .75rem;
  background-color: #fff;
  border-radius: 0;
  border: 1px solid rgba(0,0,0,.125);
}

.card-block {
  padding: 1.25rem;
}

.card-block:after {
  content: "";
  display: table;
  clear: both;
}

.card-title {
  margin-bottom: .75rem;
}

.card-subtitle {
  margin-top: -.375rem;
}

.card-subtitle,.card-text:last-child {
  margin-bottom: 0;
}

.card-link:hover {
  text-decoration: none;
}

.card-link+.card-link {
  margin-left: 1.25rem;
}

.card>.list-group:first-child .list-group-item:first-child {
  border-top-right-radius: 0;
  border-top-left-radius: 0;
}

.card>.list-group:last-child .list-group-item:last-child {
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.card-header {
  padding: .75rem 1.25rem;
  background-color: #f5f5f5;
  border-bottom: 1px solid rgba(0,0,0,.125);
}

.card-header:after {
  content: "";
  display: table;
  clear: both;
}

.card-header:first-child {
  border-radius: 0 0 0 0;
}

.card-footer {
  padding: .75rem 1.25rem;
  background-color: #f5f5f5;
  border-top: 1px solid rgba(0,0,0,.125);
}

.card-footer:after {
  content: "";
  display: table;
  clear: both;
}

.card-footer:last-child {
  border-radius: 0 0 0 0;
}

.card-header-tabs {
  margin-bottom: -.75rem;
  border-bottom: 0;
}

.card-header-pills,.card-header-tabs {
  margin-right: -.625rem;
  margin-left: -.625rem;
}

.card-primary {
  background-color: #2fb5d2;
  border-color: #2fb5d2;
}

.card-primary .card-footer,.card-primary .card-header {
  background-color: transparent;
}

.card-success {
  background-color: #4cbb6c;
  border-color: #4cbb6c;
}

.card-success .card-footer,.card-success .card-header {
  background-color: transparent;
}

.card-info {
  background-color: #5bc0de;
  border-color: #5bc0de;
}

.card-info .card-footer,.card-info .card-header {
  background-color: transparent;
}

.card-warning {
  background-color: #ff9a52;
  border-color: #ff9a52;
}

.card-warning .card-footer,.card-warning .card-header {
  background-color: transparent;
}

.card-danger {
  background-color: #ff4c4c;
  border-color: #ff4c4c;
}

.card-danger .card-footer,.card-danger .card-header,.card-outline-primary {
  background-color: transparent;
}

.card-outline-primary {
  border-color: #2fb5d2;
}

.card-outline-secondary {
  background-color: transparent;
  border-color: transparent;
}

.card-outline-info {
  background-color: transparent;
  border-color: #5bc0de;
}

.card-outline-success {
  background-color: transparent;
  border-color: #4cbb6c;
}

.card-outline-warning {
  background-color: transparent;
  border-color: #ff9a52;
}

.card-outline-danger {
  background-color: transparent;
  border-color: #ff4c4c;
}

.card-inverse .card-footer,.card-inverse .card-header {
  border-color: hsla(0,0%,100%,.2);
}

.card-inverse .card-blockquote,.card-inverse .card-footer,.card-inverse .card-header,.card-inverse .card-title {
  color: #fff;
}

.card-inverse .card-blockquote .blockquote-footer,.card-inverse .card-link,.card-inverse .card-subtitle,.card-inverse .card-text {
  color: hsla(0,0%,100%,.65);
}

.card-inverse .card-link:focus,.card-inverse .card-link:hover {
  color: #fff;
}

.card-blockquote {
  padding: 0;
  margin-bottom: 0;
  border-left: 0;
}

.card-img {
  border-radius: .25rem;
}

.card-img-overlay {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 1.25rem;
}

.card-img-top {
  border-top-right-radius: 0;
  border-top-left-radius: 0;
}

.card-img-bottom {
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

@media (min-width:544px) {
  .card-deck {
    display: table;
    width: 100%;
    margin-bottom: .75rem;
    table-layout: fixed;
    border-spacing: 1.25rem 0;
  }

  .card-deck .card {
    display: table-cell;
    margin-bottom: 0;
    vertical-align: top;
  }

  .card-deck-wrapper {
    margin-right: -1.25rem;
    margin-left: -1.25rem;
  }
}

@media (min-width:544px) {
  .card-group {
    display: table;
    width: 100%;
    table-layout: fixed;
  }

  .card-group .card {
    display: table-cell;
    vertical-align: top;
  }

  .card-group .card+.card {
    margin-left: 0;
    border-left: 0;
  }

  .card-group .card:first-child {
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
  }

  .card-group .card:first-child .card-img-top {
    border-top-right-radius: 0;
  }

  .card-group .card:first-child .card-img-bottom {
    border-bottom-right-radius: 0;
  }

  .card-group .card:last-child {
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
  }

  .card-group .card:last-child .card-img-top {
    border-top-left-radius: 0;
  }

  .card-group .card:last-child .card-img-bottom {
    border-bottom-left-radius: 0;
  }

  .card-group .card:not(:first-child):not(:last-child),.card-group .card:not(:first-child):not(:last-child) .card-img-bottom,.card-group .card:not(:first-child):not(:last-child) .card-img-top {
    border-radius: 0;
  }
}

@media (min-width:544px) {
  .card-columns {
    column-count: 3;
    column-gap: 1.25rem;
  }

  .card-columns .card {
    width: 100%;
  }
}

.breadcrumb {
  padding: .75rem 1rem;
  margin-bottom: 1rem;
  list-style: none;
  background-color: #f6f6f6;
  border-radius: 0;
}

.breadcrumb:after {
  content: "";
  display: table;
  clear: both;
}

.breadcrumb-item {
  float: left;
}

.breadcrumb-item+.breadcrumb-item:before {
  display: inline-block;
  padding-right: .5rem;
  padding-left: .5rem;
  color: #ebebeb;
  content: "/";
}

.breadcrumb-item+.breadcrumb-item:hover:before {
  text-decoration: underline;
  text-decoration: none;
}

.breadcrumb-item.active {
  color: #ebebeb;
}

.pagination {
  display: inline-block;
  padding-left: 0;
  margin-top: 1rem;
  margin-bottom: 1rem;
  border-radius: 0;
}

.page-item {
  display: inline;
}

.page-item:first-child .page-link {
  margin-left: 0;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
}

.page-item:last-child .page-link {
  border-bottom-right-radius: 0;
  border-top-right-radius: 0;
}

.page-item.active .page-link,.page-item.active .page-link:focus,.page-item.active .page-link:hover {
  z-index: 2;
  color: #fff;
  cursor: default;
  background-color: #2fb5d2;
  border-color: #2fb5d2;
}

.page-item.disabled .page-link,.page-item.disabled .page-link:focus,.page-item.disabled .page-link:hover {
  color: #ebebeb;
  pointer-events: none;
  cursor: not-allowed;
  background-color: #fff;
  border-color: #ddd;
}

.page-link {
  position: relative;
  float: left;
  padding: .5rem .75rem;
  margin-left: -1px;
  color: #2fb5d2;
  text-decoration: none;
  background-color: #fff;
  border: 1px solid #ddd;
}

.page-link:focus,.page-link:hover {
  color: #208094;
  background-color: #f6f6f6;
  border-color: #ddd;
}

.pagination-lg .page-link {
  padding: .75rem 1.5rem;
  font-size: .9375rem;
}

.pagination-lg .page-item:first-child .page-link {
  border-bottom-left-radius: .3rem;
  border-top-left-radius: .3rem;
}

.pagination-lg .page-item:last-child .page-link {
  border-bottom-right-radius: .3rem;
  border-top-right-radius: .3rem;
}

.pagination-sm .page-link {
  padding: .275rem .75rem;
  font-size: .875rem;
}

.pagination-sm .page-item:first-child .page-link {
  border-bottom-left-radius: .2rem;
  border-top-left-radius: .2rem;
}

.pagination-sm .page-item:last-child .page-link {
  border-bottom-right-radius: .2rem;
  border-top-right-radius: .2rem;
}

.tag {
  display: inline-block;
  padding: .25em .4em;
  font-size: 75%;
  font-weight: 700;
  line-height: 1;
  color: #fff;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: 0;
}

.tag:empty {
  display: none;
}

.btn .tag {
  position: relative;
  top: -1px;
}

a.tag:focus,a.tag:hover {
  color: #fff;
  text-decoration: none;
  cursor: pointer;
}

.tag-pill {
  padding-right: .6em;
  padding-left: .6em;
  border-radius: 10rem;
}

.tag-default {
  background-color: #ebebeb;
}

.tag-default[href]:focus,.tag-default[href]:hover {
  background-color: #d2d2d2;
}

.tag-primary {
  background-color: #2fb5d2;
}

.tag-primary[href]:focus,.tag-primary[href]:hover {
  background-color: #2592a9;
}

.tag-success {
  background-color: #4cbb6c;
}

.tag-success[href]:focus,.tag-success[href]:hover {
  background-color: #3a9a56;
}

.tag-info {
  background-color: #5bc0de;
}

.tag-info[href]:focus,.tag-info[href]:hover {
  background-color: #31b0d5;
}

.tag-warning {
  background-color: #ff9a52;
}

.tag-warning[href]:focus,.tag-warning[href]:hover {
  background-color: #ff7c1f;
}

.tag-danger {
  background-color: #ff4c4c;
}

.tag-danger[href]:focus,.tag-danger[href]:hover {
  background-color: #ff1919;
}

.jumbotron {
  padding: 2rem 1rem;
  margin-bottom: 2rem;
  background-color: #f6f6f6;
  border-radius: .3rem;
}

@media (min-width:544px) {
  .jumbotron {
    padding: 4rem 2rem;
  }
}

.jumbotron-hr {
  border-top-color: #ddd;
}

.jumbotron-fluid {
  padding-right: 0;
  padding-left: 0;
  border-radius: 0;
}

.alert {
  padding: 1rem;
  margin-bottom: 1rem;
  border: 1px solid transparent;
  border-radius: 0;
}

.alert-heading {
  color: inherit;
}

.alert-link {
  font-weight: 700;
}

.alert-dismissible {
  padding-right: 2rem;
}

.alert-dismissible .close {
  position: relative;
  top: -.125rem;
  right: -1rem;
  color: inherit;
}

.alert-success {
  background-color: #dff0d8;
  border-color: #d0e9c6;
  color: #3c763d;
}

.alert-success hr {
  border-top-color: #c1e2b3;
}

.alert-success .alert-link {
  color: #2b542c;
}

.alert-info {
  background-color: #d9edf7;
  border-color: #bcdff1;
  color: #31708f;
}

.alert-info hr {
  border-top-color: #a6d5ec;
}

.alert-info .alert-link {
  color: #245269;
}

.alert-warning {
  background-color: rgba(255,154,82,.3);
  border-color: #ff9a52;
  color: #414141;
}

.alert-warning hr {
  border-top-color: #ff8b39;
}

.alert-warning .alert-link {
  color: #282828;
}

.alert-danger {
  background-color: #f2dede;
  border-color: #ebcccc;
  color: #a94442;
}

.alert-danger hr {
  border-top-color: #e4b9b9;
}

.alert-danger .alert-link {
  color: #843534;
}

@keyframes progress-bar-stripes {
  0% {
    background-position: 1rem 0;
  }

  to {
    background-position: 0 0;
  }
}

.progress {
  display: block;
  width: 100%;
  height: 1rem;
  margin-bottom: 1rem;
}

.progress[value] {
  background-color: #eee;
  border: 0;
  appearance: none;
  border-radius: 0;
}

.progress[value]::-ms-fill {
  background-color: #0074d9;
  border: 0;
}

.progress[value]::-moz-progress-bar {
  background-color: #0074d9;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
}

.progress[value]::-webkit-progress-value {
  background-color: #0074d9;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
}

.progress[value="100"]::-moz-progress-bar {
  border-bottom-right-radius: 0;
  border-top-right-radius: 0;
}

.progress[value="100"]::-webkit-progress-value {
  border-bottom-right-radius: 0;
  border-top-right-radius: 0;
}

.progress[value]::-webkit-progress-bar {
  background-color: #eee;
  border-radius: 0;
}

.progress[value],base::-moz-progress-bar {
  background-color: #eee;
  border-radius: 0;
}

@media screen and (min-width:0) {
  .progress {
    background-color: #eee;
    border-radius: 0;
  }

  .progress-bar {
    display: inline-block;
    height: 1rem;
    text-indent: -999rem;
    background-color: #0074d9;
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
  }

  .progress[width="100%"] {
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
  }
}

.progress-striped[value]::-webkit-progress-value {
  background-image: linear-gradient(45deg,hsla(0,0%,100%,.15) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.15) 0,hsla(0,0%,100%,.15) 75%,transparent 0,transparent);
  background-size: 1rem 1rem;
}

.progress-striped[value]::-moz-progress-bar {
  background-image: linear-gradient(45deg,hsla(0,0%,100%,.15) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.15) 0,hsla(0,0%,100%,.15) 75%,transparent 0,transparent);
  background-size: 1rem 1rem;
}

.progress-striped[value]::-ms-fill {
  background-image: linear-gradient(45deg,hsla(0,0%,100%,.15) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.15) 0,hsla(0,0%,100%,.15) 75%,transparent 0,transparent);
  background-size: 1rem 1rem;
}

@media screen and (min-width:0) {
  .progress-bar-striped {
    background-image: linear-gradient(45deg,hsla(0,0%,100%,.15) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.15) 0,hsla(0,0%,100%,.15) 75%,transparent 0,transparent);
    background-size: 1rem 1rem;
  }
}

.progress-animated[value]::-webkit-progress-value {
  animation: progress-bar-stripes 2s linear infinite;
}

.progress-animated[value]::-moz-progress-bar {
  animation: progress-bar-stripes 2s linear infinite;
}

@media screen and (min-width:0) {
  .progress-animated .progress-bar-striped {
    animation: progress-bar-stripes 2s linear infinite;
  }
}

.progress-success[value]::-webkit-progress-value {
  background-color: #4cbb6c;
}

.progress-success[value]::-moz-progress-bar {
  background-color: #4cbb6c;
}

.progress-success[value]::-ms-fill {
  background-color: #4cbb6c;
}

@media screen and (min-width:0) {
  .progress-success .progress-bar {
    background-color: #4cbb6c;
  }
}

.progress-info[value]::-webkit-progress-value {
  background-color: #5bc0de;
}

.progress-info[value]::-moz-progress-bar {
  background-color: #5bc0de;
}

.progress-info[value]::-ms-fill {
  background-color: #5bc0de;
}

@media screen and (min-width:0) {
  .progress-info .progress-bar {
    background-color: #5bc0de;
  }
}

.progress-warning[value]::-webkit-progress-value {
  background-color: #ff9a52;
}

.progress-warning[value]::-moz-progress-bar {
  background-color: #ff9a52;
}

.progress-warning[value]::-ms-fill {
  background-color: #ff9a52;
}

@media screen and (min-width:0) {
  .progress-warning .progress-bar {
    background-color: #ff9a52;
  }
}

.progress-danger[value]::-webkit-progress-value {
  background-color: #ff4c4c;
}

.progress-danger[value]::-moz-progress-bar {
  background-color: #ff4c4c;
}

.progress-danger[value]::-ms-fill {
  background-color: #ff4c4c;
}

@media screen and (min-width:0) {
  .progress-danger .progress-bar {
    background-color: #ff4c4c;
  }
}

.media,.media-body {
  overflow: hidden;
}

.media-body {
  width: 10000px;
}

.media-body,.media-left,.media-right {
  display: table-cell;
  vertical-align: top;
}

.media-middle {
  vertical-align: middle;
}

.media-bottom {
  vertical-align: bottom;
}

.media-object {
  display: block;
}

.media-object.img-thumbnail {
  max-width: none;
}

.media-right {
  padding-left: 10px;
}

.media-left {
  padding-right: 10px;
}

.media-heading {
  margin-top: 0;
  margin-bottom: 5px;
}

.media-list {
  padding-left: 0;
  list-style: none;
}

.list-group {
  padding-left: 0;
  margin-bottom: 0;
}

.list-group-item {
  position: relative;
  display: block;
  padding: .75rem 1.25rem;
  margin-bottom: -1px;
  background-color: #fff;
  border: 1px solid #ddd;
}

.list-group-item:first-child {
  border-top-right-radius: 0;
  border-top-left-radius: 0;
}

.list-group-item:last-child {
  margin-bottom: 0;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.list-group-item.disabled,.list-group-item.disabled:focus,.list-group-item.disabled:hover {
  color: #ebebeb;
  cursor: not-allowed;
  background-color: #f6f6f6;
}

.list-group-item.disabled .list-group-item-heading,.list-group-item.disabled:focus .list-group-item-heading,.list-group-item.disabled:hover .list-group-item-heading {
  color: inherit;
}

.list-group-item.disabled .list-group-item-text,.list-group-item.disabled:focus .list-group-item-text,.list-group-item.disabled:hover .list-group-item-text {
  color: #ebebeb;
}

.list-group-item.active,.list-group-item.active:focus,.list-group-item.active:hover {
  z-index: 2;
  color: #fff;
  text-decoration: none;
  background-color: #2fb5d2;
  border-color: #2fb5d2;
}

.list-group-item.active .list-group-item-heading,.list-group-item.active .list-group-item-heading>.small,.list-group-item.active .list-group-item-heading>small,.list-group-item.active:focus .list-group-item-heading,.list-group-item.active:focus .list-group-item-heading>.small,.list-group-item.active:focus .list-group-item-heading>small,.list-group-item.active:hover .list-group-item-heading,.list-group-item.active:hover .list-group-item-heading>.small,.list-group-item.active:hover .list-group-item-heading>small {
  color: inherit;
}

.list-group-item.active .list-group-item-text,.list-group-item.active:focus .list-group-item-text,.list-group-item.active:hover .list-group-item-text {
  color: #d7f1f6;
}

.list-group-flush .list-group-item {
  border-radius: 0;
}

.list-group-item-action {
  width: 100%;
  color: #555;
  text-align: inherit;
}

.list-group-item-action .list-group-item-heading {
  color: #333;
}

.list-group-item-action:focus,.list-group-item-action:hover {
  color: #555;
  text-decoration: none;
  background-color: #f5f5f5;
}

.list-group-item-success {
  color: #3c763d;
  background-color: #dff0d8;
}

a.list-group-item-success,button.list-group-item-success {
  color: #3c763d;
}

a.list-group-item-success .list-group-item-heading,button.list-group-item-success .list-group-item-heading {
  color: inherit;
}

a.list-group-item-success:focus,a.list-group-item-success:hover,button.list-group-item-success:focus,button.list-group-item-success:hover {
  color: #3c763d;
  background-color: #d0e9c6;
}

a.list-group-item-success.active,a.list-group-item-success.active:focus,a.list-group-item-success.active:hover,button.list-group-item-success.active,button.list-group-item-success.active:focus,button.list-group-item-success.active:hover {
  color: #fff;
  background-color: #3c763d;
  border-color: #3c763d;
}

.list-group-item-info {
  color: #31708f;
  background-color: #d9edf7;
}

a.list-group-item-info,button.list-group-item-info {
  color: #31708f;
}

a.list-group-item-info .list-group-item-heading,button.list-group-item-info .list-group-item-heading {
  color: inherit;
}

a.list-group-item-info:focus,a.list-group-item-info:hover,button.list-group-item-info:focus,button.list-group-item-info:hover {
  color: #31708f;
  background-color: #c4e3f3;
}

a.list-group-item-info.active,a.list-group-item-info.active:focus,a.list-group-item-info.active:hover,button.list-group-item-info.active,button.list-group-item-info.active:focus,button.list-group-item-info.active:hover {
  color: #fff;
  background-color: #31708f;
  border-color: #31708f;
}

.list-group-item-warning {
  color: #8a6d3b;
  background-color: #fcf8e3;
}

a.list-group-item-warning,button.list-group-item-warning {
  color: #8a6d3b;
}

a.list-group-item-warning .list-group-item-heading,button.list-group-item-warning .list-group-item-heading {
  color: inherit;
}

a.list-group-item-warning:focus,a.list-group-item-warning:hover,button.list-group-item-warning:focus,button.list-group-item-warning:hover {
  color: #8a6d3b;
  background-color: #faf2cc;
}

a.list-group-item-warning.active,a.list-group-item-warning.active:focus,a.list-group-item-warning.active:hover,button.list-group-item-warning.active,button.list-group-item-warning.active:focus,button.list-group-item-warning.active:hover {
  color: #fff;
  background-color: #8a6d3b;
  border-color: #8a6d3b;
}

.list-group-item-danger {
  color: #a94442;
  background-color: #f2dede;
}

a.list-group-item-danger,button.list-group-item-danger {
  color: #a94442;
}

a.list-group-item-danger .list-group-item-heading,button.list-group-item-danger .list-group-item-heading {
  color: inherit;
}

a.list-group-item-danger:focus,a.list-group-item-danger:hover,button.list-group-item-danger:focus,button.list-group-item-danger:hover {
  color: #a94442;
  background-color: #ebcccc;
}

a.list-group-item-danger.active,a.list-group-item-danger.active:focus,a.list-group-item-danger.active:hover,button.list-group-item-danger.active,button.list-group-item-danger.active:focus,button.list-group-item-danger.active:hover {
  color: #fff;
  background-color: #a94442;
  border-color: #a94442;
}

.list-group-item-heading {
  margin-top: 0;
  margin-bottom: 5px;
}

.list-group-item-text {
  margin-bottom: 0;
  line-height: 1.3;
}

.embed-responsive {
  position: relative;
  display: block;
  height: 0;
  padding: 0;
  overflow: hidden;
}

.embed-responsive .embed-responsive-item,.embed-responsive embed,.embed-responsive iframe,.embed-responsive object,.embed-responsive video {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
}

.embed-responsive-21by9 {
  padding-bottom: 42.85714%;
}

.embed-responsive-16by9 {
  padding-bottom: 56.25%;
}

.embed-responsive-4by3 {
  padding-bottom: 75%;
}

.embed-responsive-1by1 {
  padding-bottom: 100%;
}

.close {
  float: right;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1;
  color: #000;
  text-shadow: 0 1px 0 #fff;
  opacity: .2;
}

.close:focus,.close:hover {
  color: #000;
  text-decoration: none;
  cursor: pointer;
  opacity: .5;
}

button.close {
  padding: 0;
  cursor: pointer;
  background: transparent;
  border: 0;
  -webkit-appearance: none;
}

.modal,.modal-open {
  overflow: hidden;
}

.modal {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1050;
  display: none;
  outline: 0;
  -webkit-overflow-scrolling: touch;
}

.modal.fade .modal-dialog {
  transition: transform .3s ease-out;
  transform: translateY(-25%);
}

.modal.in .modal-dialog {
  transform: translate(0);
}

.modal-open .modal {
  overflow-x: hidden;
  overflow-y: auto;
}

.modal-dialog {
  position: relative;
  width: auto;
  margin: 10px;
}

.modal-content {
  position: relative;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(0,0,0,.2);
  border-radius: .3rem;
  outline: 0;
}

.modal-backdrop {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1040;
  background-color: #000;
}

.modal-backdrop.fade {
  opacity: 0;
}

.modal-backdrop.in {
  opacity: .5;
}

.modal-header {
  padding: 15px;
  border-bottom: 1px solid #e5e5e5;
}

.modal-header:after {
  content: "";
  display: table;
  clear: both;
}

.modal-header .close {
  margin-top: -2px;
}

.modal-title {
  margin: 0;
  line-height: 1.5;
}

.modal-body {
  position: relative;
  padding: 15px;
}

.modal-footer {
  padding: 15px;
  text-align: right;
  border-top: 1px solid #e5e5e5;
}

.modal-footer:after {
  content: "";
  display: table;
  clear: both;
}

.modal-scrollbar-measure {
  position: absolute;
  top: -9999px;
  width: 50px;
  height: 50px;
  overflow: scroll;
}

@media (min-width:544px) {
  .modal-dialog {
    max-width: 600px;
    margin: 30px auto;
  }

  .modal-sm {
    max-width: 300px;
  }
}

@media (min-width:992px) {
  .modal-lg {
    max-width: 900px;
  }
}

.tooltip {
  position: absolute;
  z-index: 1070;
  display: block;
  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;
  font-style: normal;
  font-weight: 400;
  letter-spacing: normal;
  line-break: auto;
  line-height: 1.5;
  text-align: left;
  text-align: start;
  text-decoration: none;
  text-shadow: none;
  text-transform: none;
  white-space: normal;
  word-break: normal;
  word-spacing: normal;
  font-size: .875rem;
  word-wrap: break-word;
  opacity: 0;
}

.tooltip.in {
  opacity: .9;
}

.tooltip.bs-tether-element-attached-bottom,.tooltip.tooltip-top {
  padding: 5px 0;
  margin-top: -3px;
}

.tooltip.bs-tether-element-attached-bottom .tooltip-arrow,.tooltip.tooltip-top .tooltip-arrow {
  bottom: 0;
  left: 50%;
  margin-left: -5px;
  border-width: 5px 5px 0;
  border-top-color: #ff4c4c;
}

.tooltip.bs-tether-element-attached-left,.tooltip.tooltip-right {
  padding: 0 5px;
  margin-left: 3px;
}

.tooltip.bs-tether-element-attached-left .tooltip-arrow,.tooltip.tooltip-right .tooltip-arrow {
  top: 50%;
  left: 0;
  margin-top: -5px;
  border-width: 5px 5px 5px 0;
  border-right-color: #ff4c4c;
}

.tooltip.bs-tether-element-attached-top,.tooltip.tooltip-bottom {
  padding: 5px 0;
  margin-top: 3px;
}

.tooltip.bs-tether-element-attached-top .tooltip-arrow,.tooltip.tooltip-bottom .tooltip-arrow {
  top: 0;
  left: 50%;
  margin-left: -5px;
  border-width: 0 5px 5px;
  border-bottom-color: #ff4c4c;
}

.tooltip.bs-tether-element-attached-right,.tooltip.tooltip-left {
  padding: 0 5px;
  margin-left: -3px;
}

.tooltip.bs-tether-element-attached-right .tooltip-arrow,.tooltip.tooltip-left .tooltip-arrow {
  top: 50%;
  right: 0;
  margin-top: -5px;
  border-width: 5px 0 5px 5px;
  border-left-color: #ff4c4c;
}

.tooltip-inner {
  max-width: 200px;
  padding: 3px 8px;
  color: #fff;
  text-align: center;
  background-color: #ff4c4c;
  border-radius: 0;
}

.tooltip-arrow {
  position: absolute;
  width: 0;
  height: 0;
  border-color: transparent;
  border-style: solid;
}

.popover {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1060;
  display: block;
  max-width: 276px;
  padding: 1px;
  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;
  font-style: normal;
  font-weight: 400;
  letter-spacing: normal;
  line-break: auto;
  line-height: 1.5;
  text-align: left;
  text-align: start;
  text-decoration: none;
  text-shadow: none;
  text-transform: none;
  white-space: normal;
  word-break: normal;
  word-spacing: normal;
  font-size: .875rem;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(0,0,0,.2);
  border-radius: .3rem;
}

.popover.bs-tether-element-attached-bottom,.popover.popover-top {
  margin-top: -10px;
}

.popover.bs-tether-element-attached-bottom .popover-arrow,.popover.popover-top .popover-arrow {
  bottom: -11px;
  left: 50%;
  margin-left: -11px;
  border-top-color: rgba(0,0,0,.25);
  border-bottom-width: 0;
}

.popover.bs-tether-element-attached-bottom .popover-arrow:after,.popover.popover-top .popover-arrow:after {
  bottom: 1px;
  margin-left: -10px;
  content: "";
  border-top-color: #fff;
  border-bottom-width: 0;
}

.popover.bs-tether-element-attached-left,.popover.popover-right {
  margin-left: 10px;
}

.popover.bs-tether-element-attached-left .popover-arrow,.popover.popover-right .popover-arrow {
  top: 50%;
  left: -11px;
  margin-top: -11px;
  border-right-color: rgba(0,0,0,.25);
  border-left-width: 0;
}

.popover.bs-tether-element-attached-left .popover-arrow:after,.popover.popover-right .popover-arrow:after {
  bottom: -10px;
  left: 1px;
  content: "";
  border-right-color: #fff;
  border-left-width: 0;
}

.popover.bs-tether-element-attached-top,.popover.popover-bottom {
  margin-top: 10px;
}

.popover.bs-tether-element-attached-top .popover-arrow,.popover.popover-bottom .popover-arrow {
  top: -11px;
  left: 50%;
  margin-left: -11px;
  border-top-width: 0;
  border-bottom-color: rgba(0,0,0,.25);
}

.popover.bs-tether-element-attached-top .popover-arrow:after,.popover.popover-bottom .popover-arrow:after {
  top: 1px;
  margin-left: -10px;
  content: "";
  border-top-width: 0;
  border-bottom-color: #fff;
}

.popover.bs-tether-element-attached-right,.popover.popover-left {
  margin-left: -10px;
}

.popover.bs-tether-element-attached-right .popover-arrow,.popover.popover-left .popover-arrow {
  top: 50%;
  right: -11px;
  margin-top: -11px;
  border-right-width: 0;
  border-left-color: rgba(0,0,0,.25);
}

.popover.bs-tether-element-attached-right .popover-arrow:after,.popover.popover-left .popover-arrow:after {
  right: 1px;
  bottom: -10px;
  content: "";
  border-right-width: 0;
  border-left-color: #fff;
}

.popover-title {
  padding: 8px 14px;
  margin: 0;
  font-size: 1rem;
  background-color: #f7f7f7;
  border-bottom: 1px solid #ebebeb;
  border-radius: .2375rem .2375rem 0 0;
}

.popover-title:empty {
  display: none;
}

.popover-content {
  padding: 9px 14px;
}

.popover-arrow,.popover-arrow:after {
  position: absolute;
  display: block;
  width: 0;
  height: 0;
  border-color: transparent;
  border-style: solid;
}

.popover-arrow {
  border-width: 11px;
}

.popover-arrow:after {
  content: "";
  border-width: 10px;
}

.carousel,.carousel-inner {
  position: relative;
}

.carousel-inner {
  width: 100%;
  overflow: hidden;
}

.carousel-inner>.carousel-item {
  position: relative;
  display: none;
  transition: left .6s ease-in-out;
}

.carousel-inner>.carousel-item>a>img,.carousel-inner>.carousel-item>img {
  line-height: 1;
}

@media (-webkit-transform-3d),(transform-3d) {
  .carousel-inner>.carousel-item {
    transition: transform .6s ease-in-out;
    backface-visibility: hidden;
    perspective: 1000px;
  }

  .carousel-inner>.carousel-item.active.right,.carousel-inner>.carousel-item.next {
    left: 0;
    transform: translate3d(100%,0,0);
  }

  .carousel-inner>.carousel-item.active.left,.carousel-inner>.carousel-item.prev {
    left: 0;
    transform: translate3d(-100%,0,0);
  }

  .carousel-inner>.carousel-item.active,.carousel-inner>.carousel-item.next.left,.carousel-inner>.carousel-item.prev.right {
    left: 0;
    transform: translateZ(0);
  }
}

.carousel-inner>.active,.carousel-inner>.next,.carousel-inner>.prev {
  display: block;
}

.carousel-inner>.active {
  left: 0;
}

.carousel-inner>.next,.carousel-inner>.prev {
  position: absolute;
  top: 0;
  width: 100%;
}

.carousel-inner>.next {
  left: 100%;
}

.carousel-inner>.prev {
  left: -100%;
}

.carousel-inner>.next.left,.carousel-inner>.prev.right {
  left: 0;
}

.carousel-inner>.active.left {
  left: -100%;
}

.carousel-inner>.active.right {
  left: 100%;
}

.carousel-control {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 15%;
  font-size: 20px;
  color: #fff;
  text-align: center;
  text-shadow: 0 1px 2px rgba(0,0,0,.6);
  opacity: .5;
}

.carousel-control.left {
  background-image: linear-gradient(90deg,rgba(0,0,0,.5) 0,rgba(0,0,0,.0001));
  background-repeat: repeat-x;
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#80000000",endColorstr="#00000000",GradientType=1);
}

.carousel-control.right {
  right: 0;
  left: auto;
  background-image: linear-gradient(90deg,rgba(0,0,0,.0001) 0,rgba(0,0,0,.5));
  background-repeat: repeat-x;
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#00000000",endColorstr="#80000000",GradientType=1);
}

.carousel-control:focus,.carousel-control:hover {
  color: #fff;
  text-decoration: none;
  outline: 0;
  opacity: .9;
}

.carousel-control .icon-next,.carousel-control .icon-prev {
  position: absolute;
  top: 50%;
  z-index: 5;
  display: inline-block;
  width: 20px;
  height: 20px;
  margin-top: -10px;
  font-family: serif;
  line-height: 1;
}

.carousel-control .icon-prev {
  left: 50%;
  margin-left: -10px;
}

.carousel-control .icon-next {
  right: 50%;
  margin-right: -10px;
}

.carousel-control .icon-prev:before {
 
}

.carousel-control .icon-next:before {
  
}

.carousel-indicators {
  position: absolute;
  bottom: 10px;
  left: 50%;
  z-index: 15;
  width: 60%;
  padding-left: 0;
  margin-left: -30%;
  text-align: center;
  list-style: none;
}

.carousel-indicators li {
  display: inline-block;
  width: 10px;
  height: 10px;
  margin: 1px;
  text-indent: -999px;
  cursor: pointer;
  background-color: transparent;
  border: 1px solid #fff;
  border-radius: 10px;
}

.carousel-indicators .active {
  width: 12px;
  height: 12px;
  margin: 0;
  background-color: #fff;
}

.carousel-caption {
  position: absolute;
  right: 15%;
  bottom: 20px;
  left: 15%;
  z-index: 10;
  padding-top: 20px;
  padding-bottom: 20px;
  color: #fff;
  text-align: center;
  text-shadow: 0 1px 2px rgba(0,0,0,.6);
}

.carousel-caption .btn {
  text-shadow: none;
}

@media (min-width:544px) {
  .carousel-control .icon-next,.carousel-control .icon-prev {
    width: 30px;
    height: 30px;
    margin-top: -15px;
    font-size: 30px;
  }

  .carousel-control .icon-prev {
    margin-left: -15px;
  }

  .carousel-control .icon-next {
    margin-right: -15px;
  }

  .carousel-caption {
    right: 20%;
    left: 20%;
    padding-bottom: 30px;
  }

  .carousel-indicators {
    bottom: 20px;
  }
}

.bg-faded {
  background-color: #f7f7f9;
}

.bg-primary {
  color: #fff!important;
  background-color: #2fb5d2!important;
}

a.bg-primary:focus,a.bg-primary:hover {
  background-color: #2592a9!important;
}

.bg-success {
  color: #fff!important;
  background-color: #4cbb6c!important;
}

a.bg-success:focus,a.bg-success:hover {
  background-color: #3a9a56!important;
}

.bg-info {
  color: #fff!important;
  background-color: #5bc0de!important;
}

a.bg-info:focus,a.bg-info:hover {
  background-color: #31b0d5!important;
}

.bg-warning {
  color: #fff!important;
  background-color: #ff9a52!important;
}

a.bg-warning:focus,a.bg-warning:hover {
  background-color: #ff7c1f!important;
}

.bg-danger {
  color: #fff!important;
  background-color: #ff4c4c!important;
}

a.bg-danger:focus,a.bg-danger:hover {
  background-color: #ff1919!important;
}

.bg-inverse {
  color: #fff!important;
  background-color: #878787!important;
}

a.bg-inverse:focus,a.bg-inverse:hover {
  background-color: #6e6e6e!important;
}

.clearfix:after {
  content: "";
  display: table;
  clear: both;
}

.d-block {
  display: block!important;
}

.d-inline-block {
  display: inline-block!important;
}

.d-inline {
  display: inline!important;
}

.pull-xs-left {
  float: left!important;
}

.pull-xs-right {
  float: right!important;
}

.pull-xs-none {
  float: none!important;
}

@media (min-width:544px) {
  .pull-sm-left {
    float: left!important;
  }

  .pull-sm-right {
    float: right!important;
  }

  .pull-sm-none {
    float: none!important;
  }
}

@media (min-width:768px) {
  .pull-md-left {
    float: left!important;
  }

  .pull-md-right {
    float: right!important;
  }

  .pull-md-none {
    float: none!important;
  }
}

@media (min-width:992px) {
  .pull-lg-left {
    float: left!important;
  }

  .pull-lg-right {
    float: right!important;
  }

  .pull-lg-none {
    float: none!important;
  }
}

@media (min-width:1200px) {
  .pull-xl-left {
    float: left!important;
  }

  .pull-xl-right {
    float: right!important;
  }

  .pull-xl-none {
    float: none!important;
  }
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0,0,0,0);
  border: 0;
}

.sr-only-focusable:active,.sr-only-focusable:focus {
  position: static;
  width: auto;
  height: auto;
  margin: 0;
  overflow: visible;
  clip: auto;
}

.w-100 {
  width: 100%!important;
}

.m-x-auto {
  margin-right: auto!important;
  margin-left: auto!important;
}

.m-a-0 {
  margin: 0!important;
}

.m-t-0 {
  margin-top: 0!important;
}

.m-r-0 {
  margin-right: 0!important;
}

.m-b-0 {
  margin-bottom: 0!important;
}

.m-l-0,.m-x-0 {
  margin-left: 0!important;
}

.m-x-0 {
  margin-right: 0!important;
}

.m-y-0 {
  margin-top: 0!important;
  margin-bottom: 0!important;
}

.m-a-1 {
  margin: 1rem!important;
}

.m-t-1 {
  margin-top: 1rem!important;
}

.m-r-1 {
  margin-right: 1rem!important;
}

.m-b-1 {
  margin-bottom: 1rem!important;
}

.m-l-1,.m-x-1 {
  margin-left: 1rem!important;
}

.m-x-1 {
  margin-right: 1rem!important;
}

.m-y-1 {
  margin-top: 1rem!important;
  margin-bottom: 1rem!important;
}

.m-a-2 {
  margin: 1.5rem!important;
}

.m-t-2 {
  margin-top: 1.5rem!important;
}

.m-r-2 {
  margin-right: 1.5rem!important;
}

.m-b-2 {
  margin-bottom: 1.5rem!important;
}

.m-l-2,.m-x-2 {
  margin-left: 1.5rem!important;
}

.m-x-2 {
  margin-right: 1.5rem!important;
}

.m-y-2 {
  margin-top: 1.5rem!important;
  margin-bottom: 1.5rem!important;
}

.m-a-3 {
  margin: 3rem!important;
}

.m-t-3 {
  margin-top: 3rem!important;
}

.m-r-3 {
  margin-right: 3rem!important;
}

.m-b-3 {
  margin-bottom: 3rem!important;
}

.m-l-3,.m-x-3 {
  margin-left: 3rem!important;
}

.m-x-3 {
  margin-right: 3rem!important;
}

.m-y-3 {
  margin-top: 3rem!important;
  margin-bottom: 3rem!important;
}

.p-a-0 {
  padding: 0!important;
}

.p-t-0 {
  padding-top: 0!important;
}

.p-r-0 {
  padding-right: 0!important;
}

.p-b-0 {
  padding-bottom: 0!important;
}

.p-l-0,.p-x-0 {
  padding-left: 0!important;
}

.p-x-0 {
  padding-right: 0!important;
}

.p-y-0 {
  padding-top: 0!important;
  padding-bottom: 0!important;
}

.p-a-1 {
  padding: 1rem!important;
}

.p-t-1 {
  padding-top: 1rem!important;
}

.p-r-1 {
  padding-right: 1rem!important;
}

.p-b-1 {
  padding-bottom: 1rem!important;
}

.p-l-1,.p-x-1 {
  padding-left: 1rem!important;
}

.p-x-1 {
  padding-right: 1rem!important;
}

.p-y-1 {
  padding-top: 1rem!important;
  padding-bottom: 1rem!important;
}

.p-a-2 {
  padding: 1.5rem!important;
}

.p-t-2 {
  padding-top: 1.5rem!important;
}

.p-r-2 {
  padding-right: 1.5rem!important;
}

.p-b-2 {
  padding-bottom: 1.5rem!important;
}

.p-l-2,.p-x-2 {
  padding-left: 1.5rem!important;
}

.p-x-2 {
  padding-right: 1.5rem!important;
}

.p-y-2 {
  padding-top: 1.5rem!important;
  padding-bottom: 1.5rem!important;
}

.p-a-3 {
  padding: 3rem!important;
}

.p-t-3 {
  padding-top: 3rem!important;
}

.p-r-3 {
  padding-right: 3rem!important;
}

.p-b-3 {
  padding-bottom: 3rem!important;
}

.p-l-3,.p-x-3 {
  padding-left: 3rem!important;
}

.p-x-3 {
  padding-right: 3rem!important;
}

.p-y-3 {
  padding-top: 3rem!important;
  padding-bottom: 3rem!important;
}

.pos-f-t {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1030;
}

.text-justify {
  text-align: justify!important;
}

.text-nowrap {
  white-space: nowrap!important;
}

.text-truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.text-xs-left {
  text-align: left!important;
}

.text-xs-right {
  text-align: right!important;
}

.text-xs-center {
  text-align: center!important;
}

@media (min-width:544px) {
  .text-sm-left {
    text-align: left!important;
  }

  .text-sm-right {
    text-align: right!important;
  }

  .text-sm-center {
    text-align: center!important;
  }
}

@media (min-width:768px) {
  .text-md-left {
    text-align: left!important;
  }

  .text-md-right {
    text-align: right!important;
  }

  .text-md-center {
    text-align: center!important;
  }
}

@media (min-width:992px) {
  .text-lg-left {
    text-align: left!important;
  }

  .text-lg-right {
    text-align: right!important;
  }

  .text-lg-center {
    text-align: center!important;
  }
}

@media (min-width:1200px) {
  .text-xl-left {
    text-align: left!important;
  }

  .text-xl-right {
    text-align: right!important;
  }

  .text-xl-center {
    text-align: center!important;
  }
}

.text-lowercase {
  text-transform: lowercase!important;
}

.text-uppercase {
  text-transform: uppercase!important;
}

.text-capitalize {
  text-transform: capitalize!important;
}

.font-weight-normal {
  font-weight: 400;
}

.font-weight-bold {
  font-weight: 700;
}

.font-italic {
  font-style: italic;
}

.text-muted {
  color: #acaaa6!important;
}

a.text-muted:focus,a.text-muted:hover {
  color: #93918c!important;
}

.text-primary {
  color: #2fb5d2!important;
}

a.text-primary:focus,a.text-primary:hover {
  color: #2592a9!important;
}

.text-success {
  color: #4cbb6c!important;
}

a.text-success:focus,a.text-success:hover {
  color: #3a9a56!important;
}

.text-info {
  color: #5bc0de!important;
}

a.text-info:focus,a.text-info:hover {
  color: #31b0d5!important;
}

.text-warning {
  color: #ff9a52!important;
}

a.text-warning:focus,a.text-warning:hover {
  color: #ff7c1f!important;
}

.text-danger {
  color: #ff4c4c!important;
}

a.text-danger:focus,a.text-danger:hover {
  color: #ff1919!important;
}

.text-hide {
  font: 0/0 a;
  color: transparent;
  text-shadow: none;
  background-color: transparent;
  border: 0;
}

.invisible {
  visibility: hidden!important;
}

.hidden-xs-up {
  display: none!important;
}

@media (max-width:543px) {
  .hidden-xs-down {
    display: none!important;
  }
}

@media (min-width:544px) {
  .hidden-sm-up {
    display: none!important;
  }
}

@media (max-width:767px) {
  .hidden-sm-down {
    display: none!important;
  }
}

@media (min-width:768px) {
  .hidden-md-up {
    display: none!important;
  }
}

@media (max-width:991px) {
  .hidden-md-down {
    display: none!important;
  }
}

@media (min-width:992px) {
  .hidden-lg-up {
    display: none!important;
  }
}

@media (max-width:1199px) {
  .hidden-lg-down {
    display: none!important;
  }
}

@media (min-width:1200px) {
  .hidden-xl-up {
    display: none!important;
  }
}

.hidden-xl-down,.visible-print-block {
  display: none!important;
}

@media print {
  .visible-print-block {
    display: block!important;
  }
}

.visible-print-inline {
  display: none!important;
}

@media print {
  .visible-print-inline {
    display: inline!important;
  }
}

.visible-print-inline-block {
  display: none!important;
}

@media print {
  .visible-print-inline-block {
    display: inline-block!important;
  }
}

@media print {
  .hidden-print {
    display: none!important;
  }
}

@font-face {
  font-family:Material Icons;font-style:normal;font-weight:400;src:url(../css/MaterialIcons-Regular.eot);src:local("Material Icons"),local("MaterialIcons-Regular"),url(../css/MaterialIcons-Regular.woff2) format("woff2"),url(../css/MaterialIcons-Regular.woff) format("woff"),url(../css/MaterialIcons-Regular.ttf) format("truetype");
}

.material-icons {
  font-family: Material Icons;
  font-weight: 400;
  font-style: normal;
  font-size: 24px;
  display: inline-block;
  vertical-align: middle;
  width: 1em;
  height: 1em;
  line-height: 1;
  text-transform: none;
  letter-spacing: normal;
  word-wrap: normal;
  white-space: nowrap;
  direction: ltr;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  -moz-osx-font-smoothing: grayscale;
  font-feature-settings: "liga";
}

.lang-rtl * {
  direction: rtl!important;
}

.lang-rtl main {
  text-align: right!important;
}

body,html {
  height: 100%;
}

body {
  font-family: Noto Sans,sans-serif;
  font-size: 1rem;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #414141;
  line-height: 1.25em;
}

ul {
  list-style: none;
  padding-left: 0;
}

a:hover {
  color: #2fb5d2;
  text-decoration: none;
}

p {
  font-size: .9375rem;
  color: #878787;
  font-weight: 400;
}

.color,.custom-checkbox input[type=checkbox]+span.color {
  width: 1.25rem;
  height: 1.25rem;
  display: inline-block;
  margin: .3125rem;
  box-shadow: 0 0 3px 0 rgba(0,0,0,.15);
  border: 1px solid rgba(0,0,0,.05);
  cursor: pointer;
  background-size: contain;
}

.color.active,.color:hover,.custom-checkbox input[type=checkbox]+span.color.active,.custom-checkbox input[type=checkbox]+span.color:hover,.facet-label.active .custom-checkbox span.color,.facet-label:hover .custom-checkbox span.color {
  border: 2px solid #414141;
}

.h1,.h2,.h3 {
  text-transform: uppercase;
  color: #414141;
}

.h4 {
  font-weight: 700;
  color: #414141;
}

.btn-primary,.btn-secondary,.btn-tertiary {
  box-shadow: 2px 2px 11px 0 rgba(0,0,0,.1);
  text-transform: uppercase;
  font-weight: 600;
  padding: .5rem 1.25rem;
}

.btn-primary .material-icons,.btn-secondary .material-icons,.btn-tertiary .material-icons {
  margin-right: .625rem;
}

.btn-tertiary {
  text-transform: lowercase;
  color: #acaaa6;
  box-shadow: .0625rem .0625rem .0625rem 0 rgba(0,0,0,.1);
  padding: .25rem;
  margin: .25rem 0;
  font-weight: 400;
  font-size: .875rem;
}

.btn-tertiary .material-icons {
  font-size: 1rem;
}

.card {
  box-shadow: 2px 2px 11px 0 rgba(0,0,0,.1);
}

.label,label {
  color: #414141;
  text-align: right;
  font-size: .875rem;
}

small.label,small.value {
  font-size: .8125rem;
}

.form-control-label {
  padding-top: .625rem;
}

.form-control {
  background: #ebebeb;
  color: #acaaa6;
  border: none;
  padding: .5rem 1rem;
}

.form-control:focus {
  background-color: #fff;
}

.form-control:focus,.input-group.focus {
  outline: .1875rem solid #2fb5d2;
}

.input-group .form-control:focus {
  outline: none;
}

.input-group .input-group-btn>.btn {
  border: 0;
  box-shadow: none;
  color: #fff;
  font-size: .6875rem;
  font-weight: 400;
  margin-left: 0;
  padding: .65625rem 1rem;
  text-transform: uppercase;
}

.form-control-select {
  height: 2.625rem;
  -moz-appearance: none;
  -webkit-appearance: none;
  background: #ebebeb url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAQAAAD9CzEMAAAAPklEQVR4Ae3TwREAEBQD0V/6do4SXPZg7EsBhsQ8IEmSMOsiuEfg3gL3oXC7wK0bd1G4o8X9F4yIkyQfSrIByQBjp7QuND8AAAAASUVORK5CYII=") no-repeat scroll right .5rem center/1.25rem 1.25rem;
  padding-right: 2rem;
}

.form-control-valign {
  padding-top: .5rem;
}

.form-control-comment {
  font-size: .875rem;
  padding-top: .5rem;
  color: #878787;
}

.form-control-submit.disabled {
  background: #5bc0de;
  color: #fff;
}

.form-group.has-error input,.form-group.has-error select {
  outline: .1875rem solid #ff4c4c;
}

.form-group.has-error .help-block {
  color: #ff4c4c;
}

.group-span-filestyle label {
  margin: 0;
}

.bootstrap-touchspin .group-span-filestyle .btn-touchspin,.group-span-filestyle .bootstrap-touchspin .btn-touchspin,.group-span-filestyle .btn-default {
  background: #2fb5d2;
  color: #fff;
  text-transform: uppercase;
  border-radius: 0;
  font-size: .875rem;
  padding: .5rem 1rem;
}

.bootstrap-touchspin input:focus {
  outline: none;
}

.bootstrap-touchspin input.form-control {
  border: 1px solid rgba(0,0,0,.15);
}

.bootstrap-touchspin .btn-touchspin {
  background-color: #fff;
  border: 1px solid rgba(0,0,0,.15);
  height: 1.3125rem;
}

.bootstrap-touchspin .btn-touchspin:hover {
  background-color: #ebebeb;
}

.bootstrap-touchspin .input-group-btn-vertical {
  color: #414141;
}

.bootstrap-touchspin .input-group-btn-vertical .bootstrap-touchspin-down,.bootstrap-touchspin .input-group-btn-vertical .bootstrap-touchspin-up {
  border-radius: 0;
}

.bootstrap-touchspin .input-group-btn-vertical .touchspin-up:after {
  
}

.bootstrap-touchspin .input-group-btn-vertical .touchspin-down:after {
 
}

.bootstrap-touchspin .input-group-btn-vertical i {
  top: .0625rem;
  left: .1875rem;
  font-size: .9375rem;
}

.custom-radio {
  display: inline-block;
  position: relative;
  width: 20px;
  height: 20px;
  vertical-align: middle;
  cursor: pointer;
  border-radius: 50%;
  border: 2px solid #acaaa6;
  background: #fff;
  margin-right: 1.25rem;
}

.custom-radio input[type=radio] {
  opacity: 0;
  cursor: pointer;
}

.custom-radio input[type=radio]:checked+span {
  display: block;
  background-color: #2fb5d2;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  position: absolute;
  left: .125rem;
  top: .125rem;
}

.custom-checkbox {
  position: relative;
}

.custom-checkbox input[type=checkbox] {
  margin-top: .25rem;
  opacity: 0;
  cursor: pointer;
  position: absolute;
}

.custom-checkbox input[type=checkbox]+span {
  margin-right: 3px;
  display: inline-block;
  width: .9375rem;
  height: .9375rem;
  vertical-align: middle;
  cursor: pointer;
  border: 2px solid #414141;
}

.custom-checkbox input[type=checkbox]+span .checkbox-checked {
  display: none;
  margin: -.25rem -.125rem;
  font-size: 1.1rem;
  color: #414141;
}

.custom-checkbox input[type=checkbox]:checked+span .checkbox-checked {
  display: block;
}

.custom-checkbox label {
  text-align: left;
}

.text-muted {
  font-size: .875rem;
}

.done {
  color: #4cbb6c;
  display: inline-block;
  padding: 0 .8125rem;
  margin-right: 1.5625rem;
}

.thumb-mask>.mask {
  position: relative;
  width: 3.4375rem;
  height: 3.4375rem;
  overflow: hidden;
  border: 1px solid #ebebeb;
  margin: .625rem 0;
}

.thumb-mask>.mask img {
  width: 55px;
  height: 55px;
}

.definition-list dl {
  display: -webkit-box;
  display: -moz-box;
  display: box;
  display: -moz-flex;
  display: -ms-flexbox;
  -js-display: flex;
  display: flex;
  -webkit-box-lines: multiple;
  -moz-box-lines: multiple;
  box-lines: multiple;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}

.definition-list dl dt {
  font-weight: 400;
}

.definition-list dl dd,.definition-list dl dt {
  -webkit-box-flex: 0;
  box-flex: 0;
  -moz-flex: 0 0 45%;
  -ms-flex: 0 0 45%;
  flex: 0 0 45%;
  background: #ebebeb;
  padding: .625rem;
  margin: .125rem;
}

.definition-list dl dd:nth-of-type(2n),.definition-list dl dt:nth-of-type(2n) {
  background: #f6f6f6;
}

.help-block {
  margin-top: .625rem;
}

.btn.disabled,.btn.disabled:hover {
  background: #acaaa6;
}

.alert-warning .material-icons {
  color: #ff9a52;
  font-size: 2rem;
  margin-right: .625rem;
  padding-top: .3125rem;
}

.alert-warning .alert-text {
  font-size: .9375rem;
  padding-top: .625rem;
}

.alert-warning .alert-link {
  border-radius: 2px;
  border-width: 2px;
  margin-left: .625rem;
  padding: .3125rem 1.25rem;
  font-weight: 600;
  font-size: .8125rem;
  color: #6c868e;
}

.alert-warning ul li:last-child .alert-link {
  color: #fff;
}

.alert-warning .warning-buttons {
  margin-top: .3125rem;
}

.btn-tertiary-outline {
  color: #6c868e;
  background-image: none;
  background-color: transparent;
  border-color: #6c868e;
  border: .15rem solid #6c868e;
}

.btn-tertiary-outline:hover {
  border-color: #bbcdd2;
  color: #bbcdd2;
}

.alert {
  font-size: .8125rem;
}

.nav-item .nav-link,.nav-item .nav-separtor {
  color: #acaaa6;
  font-weight: 700;
}

.nav-item .nav-link.active,.nav-item .nav-separtor.active {
  color: #414141;
}

.ps-alert-error {
  margin-bottom: 0;
}

.ps-alert-error .item,.ps-alert-success .item {
  align-items: center;
  border: 2px solid #ff4c4c;
  -js-display: flex;
  display: flex;
  background-color: #ff4c4c;
  margin-bottom: 1rem;
}

.ps-alert-error .item i,.ps-alert-success .item i {
  border: 15px solid #ff4c4c;
  -js-display: flex;
  display: flex;
}

.ps-alert-error .item i svg,.ps-alert-success .item i svg {
  background-color: #ff4c4c;
  width: 24px;
  height: 24px;
}

.ps-alert-error .item p,.ps-alert-success .item p {
  background-color: #fff;
  margin: 0;
  padding: 18px 20px;
  width: 100%;
}

.ps-alert-success {
  padding: .25rem .25rem 2.75rem;
}

.ps-alert-success .item {
  border-color: #4cbb6c;
  background-color: #4cbb6c;
}

.ps-alert-success .item i {
  border-color: #4cbb6c;
}

.ps-alert-success .item i svg {
  background-color: #4cbb6c;
}

.dropdown {
  color: #acaaa6;
}

.dropdown:hover .expand-more {
  color: #2fb5d2;
}

.dropdown .expand-more {
  color: #414141;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.dropdown .active {
  max-height: 200px;
  overflow-y: hidden;
  visibility: visible;
}

.dropdown select {
  -moz-appearance: none;
  border: 0 none;
  outline: 0 none;
  color: #414141;
  background: #fff;
}

.dropdown-item:focus,.dropdown-item:hover {
  background: none;
  text-decoration: none;
  color: #2fb5d2;
}

.search-widget {
  float: right;
}

.search-widget form {
  position: relative;
}

.search-widget form input[type=text] {
  border: none;
  padding: 10px;
  min-width: 255px;
  background: #ebebeb;
  color: #acaaa6;
}

.search-widget form input[type=text]:focus {
  outline: 3px solid #2fb5d2;
  color: #414141;
  background: #fff;
}

.search-widget form input[type=text]:focus+button .search {
  color: #2fb5d2;
}

.search-widget form input[type=text]::-webkit-input-placeholder {
  color: hsla(40,3%,66%,.5);
  text-indent: .625rem;
}

.search-widget form input[type=text]:-moz-placeholder,.search-widget form input[type=text]::-moz-placeholder {
  color: hsla(40,3%,66%,.5);
  text-indent: .625rem;
}

.search-widget form input[type=text]:-ms-input-placeholder {
  color: hsla(40,3%,66%,.5);
  text-indent: .625rem;
}

.search-widget form button[type=submit] {
  position: absolute;
  background: none;
  border: none;
  bottom: .3125rem;
  right: .125rem;
  color: #878787;
}

.search-widget form button[type=submit] .search:hover {
  color: #2fb5d2;
}

.header-top .search-widget form input[type=text] {
  min-width: inherit;
  width: 100%;
}

#checkout #search_widget {
  display: none;
}

#pagenotfound .page-content #search_widget {
  width: 100%;
}

.page-not-found .search-widget form {
  display: inline-block;
}

@media (max-width:767px) {
  .header-top .search-widget {
    float: none;
    padding: 0 .9375rem;
  }

  .header-top .search-widget form {
    margin: 0 auto;
  }

  .header-top .search-widget form input[type=text] {
    min-width: inherit;
    background: #fff;
  }
}

.top-menu[data-depth="1"] {
  margin: .625rem;
}

.top-menu a:not([data-depth="0"]) {
  display: block;
  padding: .625rem;
  color: #acaaa6;
  font-weight: 400;
}

.top-menu a.dropdown-submenu {
  color: #414141;
  text-transform: uppercase;
  font-weight: 600;
}

.top-menu a[data-depth="0"] {
  font-weight: 600;
  padding: .1875rem .625rem .375rem;
}

#header .top-menu a[data-depth="0"]:hover {
  color: #2fb5d2;
  text-decoration: none;
}

.top-menu a[data-depth="1"],.top-menu a[data-depth="2"] {
  padding: 0 .625rem .625rem 0;
}

.top-menu .collapse {
  display: inherit;
}

.top-menu .sub-menu {
  box-shadow: 2px 1px 11px 2px rgba(0,0,0,.1);
  border: none;
  margin-left: .9375rem;
  width: calc(100% - 30px);
  min-width: calc(100% - 30px);
  z-index: 18;
  display: none;
}

.top-menu .sub-menu.collapse {
  display: none;
}

.top-menu .sub-menu ul[data-depth="1"]>li {
  float: left;
  margin: 0 1.25rem;
}

.top-menu .sub-menu a:hover {
  color: #2fb5d2;
}

.top-menu .popover {
  max-width: inherit;
}

.popover.bs-tether-element-attached-top {
  margin-top: 0;
}

#mobile_top_menu_wrapper {
  margin-top: .625rem;
  padding-bottom: .625rem;
  background: #fff;
}

#mobile_top_menu_wrapper #top-menu {
  margin-bottom: .625rem;
}

#mobile_top_menu_wrapper .top-menu {
  color: #414141;
}

#mobile_top_menu_wrapper .top-menu .collapse-icons[aria-expanded=true] .add {
  display: none;
}

#mobile_top_menu_wrapper .top-menu .collapse-icons[aria-expanded=true] .remove {
  display: block;
}

#mobile_top_menu_wrapper .top-menu .collapse-icons .remove {
  display: none;
}

#mobile_top_menu_wrapper .top-menu .navbar-toggler {
  display: inline-block;
  padding: 0;
}

#mobile_top_menu_wrapper .top-menu a[data-depth="0"] {
  padding: .625rem;
  border-bottom: 1px solid #f6f6f6;
}

#mobile_top_menu_wrapper .top-menu .collapse {
  display: none;
}

#mobile_top_menu_wrapper .top-menu .collapse.in {
  display: block;
}

#mobile_top_menu_wrapper .top-menu .sub-menu {
  box-shadow: none;
  z-index: inherit;
  display: block;
  position: static;
  overflow: hidden;
  margin-left: 0;
  width: 100%;
  min-width: 100%;
  background: #f6f6f6;
}

#mobile_top_menu_wrapper .top-menu .sub-menu.collapse {
  display: none;
}

#mobile_top_menu_wrapper .top-menu .sub-menu.collapse.in {
  display: block;
}

#mobile_top_menu_wrapper .top-menu .sub-menu ul[data-depth="0"]>li {
  border-bottom: 1px solid #acaaa6;
}

#mobile_top_menu_wrapper .top-menu .sub-menu ul[data-depth="1"] {
  margin: 0;
}

#mobile_top_menu_wrapper .top-menu .sub-menu ul[data-depth="1"]>li {
  float: none;
  margin: 0;
}

#mobile_top_menu_wrapper .top-menu .sub-menu ul[data-depth="1"]>li a {
  text-transform: none;
}

#mobile_top_menu_wrapper .top-menu .sub-menu ul {
  padding: 0;
}

#mobile_top_menu_wrapper .top-menu .sub-menu li>a {
  padding: .625rem;
  border-bottom: 1px solid #fff;
  font-weight: 700;
}

#mobile_top_menu_wrapper .top-menu .sub-menu ul[data-depth="2"] li a {
  padding-left: 1.25rem;
}

#mobile_top_menu_wrapper .top-menu .sub-menu ul[data-depth="3"] li a {
  padding-left: 2.5rem;
}

#mobile_top_menu_wrapper .top-menu .sub-menu ul[data-depth="4"] li a {
  padding-left: 3.75rem;
}

#mobile_top_menu_wrapper .top-menu .popover {
  border-radius: 0;
}

#mobile_top_menu_wrapper .js-top-menu-bottom a {
  color: #acaaa6;
}

#mobile_top_menu_wrapper .js-top-menu-bottom .language-selector-wrapper {
  padding: .625rem;
}

#mobile_top_menu_wrapper .js-top-menu-bottom .language-selector-wrapper .language-selector {
  display: inline;
}

#mobile_top_menu_wrapper .js-top-menu-bottom #contact-link,#mobile_top_menu_wrapper .js-top-menu-bottom .currency-selector {
  padding: .625rem;
}

#mobile_top_menu_wrapper .js-top-menu-bottom .user-info {
  padding: 0 .625rem;
}

#mobile_top_menu_wrapper .js-top-menu-bottom .user-info a {
  padding: .625rem 0;
  display: block;
  width: 100%;
}

body#checkout {
  color: #414141;
}

body#checkout #header .header-nav {
  max-height: none;
  padding: 5rem 0 .9375rem;
  border: none;
  margin-bottom: 0;
  box-shadow: 2px 2px 11px 0 rgba(0,0,0,.1);
}

body#checkout #header .header-nav .logo {
  max-height: 4.375rem;
  width: auto;
}

body#checkout [data-action=show-password] {
  background: #878787;
}

body#checkout .custom-checkbox {
  display: -webkit-box;
  display: -moz-box;
  display: box;
  display: -moz-flex;
  display: -ms-flexbox;
  -js-display: flex;
  display: flex;
}

body#checkout .custom-checkbox span {
  -webkit-box-flex: 0;
  box-flex: 0;
  -moz-flex: 0 0 15px;
  -ms-flex: 0 0 15px;
  flex: 0 0 15px;
  margin-top: .1875rem;
}

body#checkout a:hover {
  color: #1a8196;
}

body#checkout section#content {
  margin-bottom: 1.5625rem;
}

body#checkout .container {
  min-height: 100%;
}

body#checkout section.checkout-step {
  box-shadow: 2px 2px 11px 0 rgba(0,0,0,.1);
  background-color: #fff;
  border: 1px solid #ebebeb;
  padding: .9375rem;
}

body#checkout section.checkout-step .step-title {
  text-transform: uppercase;
  cursor: pointer;
  margin-bottom: 0;
}

body#checkout section.checkout-step .content {
  padding: 0 2.3125rem;
}

body#checkout section.checkout-step .step-edit {
  text-transform: lowercase;
  font-weight: 400;
}

body#checkout section.checkout-step .step-edit .edit {
  font-size: 1rem;
}

body#checkout section.checkout-step .not-allowed {
  cursor: not-allowed;
  opacity: .5;
}

body#checkout section.checkout-step .content,body#checkout section.checkout-step .done,body#checkout section.checkout-step .step-edit {
  display: none;
}

body#checkout section.checkout-step.-current .content {
  display: block;
}

body#checkout section.checkout-step.-current.-reachable.-complete .done,body#checkout section.checkout-step.-current.-reachable.-complete .step-edit {
  display: none;
}

body#checkout section.checkout-step.-current.-reachable.-complete .step-number {
  display: inline-block;
}

body#checkout section.checkout-step.-current.-reachable.-complete .content {
  display: block;
}

body#checkout section.checkout-step.-reachable.-complete h1 .done {
  display: inline-block;
}

body#checkout section.checkout-step.-reachable.-complete h1 .step-number {
  display: none;
}

body#checkout section.checkout-step.-reachable.-complete h1 .step-edit {
  cursor: pointer;
  display: block;
  float: right;
  margin-right: .125rem;
  color: #acaaa6;
}

body#checkout section.checkout-step.-reachable.-complete .content {
  display: none;
}

body#checkout section.checkout-step small {
  color: #acaaa6;
}

body#checkout section.checkout-step .default-input {
  min-width: 40%;
}

body#checkout section.checkout-step .default-input[name=address1],body#checkout section.checkout-step .default-input[name=address2] {
  min-width: 60%;
}

body#checkout section.checkout-step .radio-field {
  margin-top: 1.875rem;
}

body#checkout section.checkout-step .radio-field label {
  display: inline;
}

body#checkout section.checkout-step .checkbox-field div {
  margin-top: 3.75rem;
}

body#checkout section.checkout-step .checkbox-field+.checkbox-field div {
  margin-top: 0;
}

body#checkout section.checkout-step .select-field div {
  background: #f6f6f6;
  padding: .625rem 3.125rem;
}

body#checkout section.checkout-step .form-footer {
  text-align: center;
}

body#checkout section.checkout-step #conditions-to-approve {
  padding-top: 1rem;
}

body#checkout section.checkout-step .payment-options label {
  display: table-cell;
}

body#checkout section.checkout-step .payment-options .custom-radio {
  margin-right: 1.25rem;
}

body#checkout section.checkout-step .payment-options .payment-option {
  margin-bottom: .5rem;
}

body#checkout section.checkout-step .step-number {
  display: inline-block;
  padding: .625rem;
}

body#checkout section.checkout-step .address-selector {
  display: -webkit-box;
  display: -moz-box;
  display: box;
  display: -moz-flex;
  display: -ms-flexbox;
  -js-display: flex;
  display: flex;
  -webkit-box-pack: justify;
  box-pack: justify;
  -moz-justify-content: space-between;
  -ms-justify-content: space-between;
  -o-justify-content: space-between;
  justify-content: space-between;
  -ms-flex-pack: justify;
  -webkit-box-align: start;
  box-align: start;
  -moz-align-items: flex-start;
  -ms-align-items: flex-start;
  -o-align-items: flex-start;
  align-items: flex-start;
  -ms-flex-align: start;
  -webkit-box-lines: multiple;
  -moz-box-lines: multiple;
  box-lines: multiple;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}

body#checkout section.checkout-step .address-item {
  background: #f6f6f6;
  -webkit-box-flex: 0;
  box-flex: 0;
  -moz-flex: 0 0 49%;
  -ms-flex: 0 0 49%;
  flex: 0 0 49%;
  margin-bottom: .625rem;
}

body#checkout section.checkout-step .address-item.selected {
  background: #fff;
  border: 3px solid #2fb5d2;
}

body#checkout section.checkout-step .address-alias {
  display: inline-block;
  font-weight: 600;
  margin-bottom: .625rem;
}

body#checkout section.checkout-step .address {
  margin-left: 1.5625rem;
  font-weight: 400;
}

body#checkout section.checkout-step .radio-block {
  padding: .9375rem;
  text-align: left;
}

body#checkout section.checkout-step .custom-radio {
  margin-right: 0;
}

body#checkout section.checkout-step .custom-radio input[type=radio] {
  height: 1.25rem;
  width: 1.25rem;
}

body#checkout section.checkout-step .delete-address,body#checkout section.checkout-step .edit-address {
  color: #acaaa6;
  display: inline-block;
  margin: 0 .3125rem;
}

body#checkout section.checkout-step .delete-address .delete,body#checkout section.checkout-step .delete-address .edit,body#checkout section.checkout-step .edit-address .delete,body#checkout section.checkout-step .edit-address .edit {
  font-size: 1rem;
}

body#checkout section.checkout-step hr {
  margin: 0;
}

body#checkout section.checkout-step .address-footer {
  text-align: center;
  padding: .625rem;
}

body#checkout section.checkout-step #delivery-addresses,body#checkout section.checkout-step #invoice-addresses,body#checkout section.checkout-step .add-address {
  margin-top: 1.25rem;
}

body#checkout section.checkout-step .add-address a {
  color: #414141;
}

body#checkout section.checkout-step .add-address a i {
  font-size: .9375rem;
}

body#checkout section.checkout-step .delivery-option {
  background: #f6f6f6;
  padding: .9375rem 0;
  margin-bottom: .9375rem;
}

body#checkout section.checkout-step .delivery-option label {
  text-align: inherit;
}

body#checkout section.checkout-step .carrier-delay,body#checkout section.checkout-step .carrier-name {
  display: inline-block;
  word-break: break-word;
  text-align: left;
}

body#checkout section.checkout-step #customer-form,body#checkout section.checkout-step #delivery-address,body#checkout section.checkout-step #invoice-address,body#checkout section.checkout-step #login-form {
  margin-left: .3125rem;
  margin-top: 1.5625rem;
}

body#checkout section.checkout-step #customer-form .form-control-label,body#checkout section.checkout-step #delivery-address .form-control-label,body#checkout section.checkout-step #invoice-address .form-control-label,body#checkout section.checkout-step #login-form .form-control-label {
  text-align: left;
}

body#checkout section.checkout-step #customer-form .radio-inline,body#checkout section.checkout-step #delivery-address .radio-inline,body#checkout section.checkout-step #invoice-address .radio-inline,body#checkout section.checkout-step #login-form .radio-inline {
  padding: 0;
}

body#checkout section.checkout-step .sign-in {
  font-size: .875rem;
}

body#checkout section.checkout-step .forgot-password {
  margin-left: 14.375rem;
}

body#checkout .additional-information {
  font-size: .875rem;
  margin-left: 2.875rem;
  margin-top: 1.25rem;
}

body#checkout .condition-label {
  margin-left: 2.5rem;
  margin-top: .625rem;
}

body#checkout .condition-label label {
  text-align: inherit;
}

body#checkout .cancel-address {
  margin: .625rem;
  display: block;
  color: #878787;
  text-decoration: underline;
}

body#checkout .modal-content {
  padding: 1.25rem;
  background-color: #ebebeb;
}

body#checkout #cart-summary-product-list {
  font-size: .875rem;
}

body#checkout #cart-summary-product-list img {
  border: 1px solid #ebebeb;
  width: 3.125rem;
}

body#checkout #cart-summary-product-list .media-body {
  vertical-align: middle;
}

body#checkout #order-summary-content {
  padding-top: .9375rem;
}

body#checkout #order-summary-content h4.h4 {
  margin-top: .625rem;
  margin-bottom: 1.25rem;
  color: #414141;
}

body#checkout #order-summary-content h4.black {
  color: #000;
}

body#checkout #order-summary-content h4.addresshead {
  margin-top: .1875rem;
}

body#checkout #order-summary-content .noshadow {
  box-shadow: none;
}

body#checkout #order-summary-content #order-items {
  border-right: 0;
}

body#checkout #order-summary-content #order-items h3.h3 {
  color: #414141;
  margin-top: 1.25rem;
}

body#checkout #order-summary-content #order-items table tr:first-child td {
  border-top: 0;
}

body#checkout #order-summary-content .order-confirmation-table {
  padding: 1rem;
  margin-bottom: 2rem;
  background-color: #fff;
  border: 3px solid #e5e5e5;
  border-radius: 0;
}

body#checkout #order-summary-content .summary-selected-carrier {
  margin-bottom: .75rem;
  background-color: #fff;
  border: 1px solid #e5e5e5;
  border-radius: 0;
  padding: 1rem;
}

body#checkout #order-summary-content .step-edit {
  display: inline;
  color: #acaaa6;
}

body#checkout #order-summary-content .step-edit:hover {
  cursor: pointer;
}

body#checkout #order-summary-content a .step-edit {
  color: #acaaa6;
}

body#checkout #gift_message {
  max-width: 100%;
  border-color: #414141;
}

#order-details {
  padding-left: 1.875rem;
}

#order-details>.card-title {
  margin-bottom: 1.875rem;
}

#order-details ul {
  margin-bottom: 1.25rem;
}

#order-details ul li {
  margin-bottom: .625rem;
}

#order-items {
  border-right: 1px solid #ebebeb;
}

#order-items hr {
  border-top-color: #414141;
}

#order-items table {
  width: 100%;
}

#order-items table tr {
  height: 1.875rem;
}

#order-items table tr td:last-child {
  text-align: right;
}

#order-items .order-line {
  margin-top: 1rem;
}

#order-items .image img {
  width: 100%;
  border: 1px solid gray-lighter;
  margin-bottom: 1rem;
}

#order-items .details {
  margin-bottom: 1rem;
}

#order-items .details .customizations {
  margin-top: .625rem;
}

#order-items .qty {
  margin-bottom: 1rem;
}

#order-confirmation #registration-form {
  width: 50%;
  margin: 0 auto 1rem;
}

@media (max-width:991px) {
  .done {
    margin: 0;
    padding: 0;
  }

  body#checkout section.checkout-step .address-item {
    -moz-flex-grow: 1;
    flex-grow: 1;
    -ms-flex-positive: 1;
  }

  body#checkout section.checkout-step .delivery-option-2 {
    -webkit-box-orient: vertical;
    box-orient: vertical;
    -webkit-box-direction: normal;
    box-direction: normal;
    -moz-flex-direction: column;
    flex-direction: column;
    -ms-flex-direction: column;
  }

  .delivery-option {
    display: -webkit-box;
    display: -moz-box;
    display: box;
    display: -moz-flex;
    display: -ms-flexbox;
    -js-display: flex;
    display: flex;
    margin: auto;
  }

  .delivery-option .custom-radio {
    -webkit-box-flex: 0;
    box-flex: 0;
    -moz-flex: 0 0 auto;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
  }

  .condition-label label[for="conditions_to_approve[terms-and-conditions]"] {
    text-align: left;
  }

  #order-confirmation #registration-form {
    width: 100%;
  }
}

@media (max-width:767px) {
  body#checkout section.checkout-step.-reachable.-complete h1 .step-edit {
    float: none;
    margin-top: .25rem;
    margin-left: 1.25rem;
  }

  body#checkout #header .header-nav {
    max-height: none;
    padding: 0;
  }

  body#checkout section.checkout-step .content {
    padding: .9375rem;
  }

  body#checkout .form-group {
    margin-bottom: .5rem;
  }

  #order-items {
    border-right: 0;
    margin-bottom: 2.5rem;
  }

  #order-items .card-title {
    border-bottom: 1px solid #ebebeb;
    margin-bottom: 1rem;
    padding-bottom: 1rem;
  }

  #order-items hr {
    border-top-color: #ebebeb;
  }

  .bold {
    font-weight: 700;
  }

  #order-details {
    padding-left: .9375rem;
  }

  #order-details .card-title {
    border-bottom: 1px solid #ebebeb;
    margin-bottom: 1rem;
    padding-bottom: 1rem;
  }
}

@media (max-width:543px) {
  body#checkout section.checkout-step .content {
    padding: .9375rem 0;
  }

  #payment-confirmation button {
    font-size: .875rem;
  }

  #payment-confirmation button.btn {
    white-space: normal;
  }
}

.js-payment-binary,.js-payment-binary .accept-cgv {
  display: none;
}

.js-payment-binary.disabled {
  opacity: .6;
  cursor: not-allowed;
}

.js-payment-binary.disabled:before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  pointer-events: none;
}

.js-payment-binary.disabled .accept-cgv {
  display: block;
}

.table-labeled td,.table-labeled th {
  vertical-align: middle;
}

.table-labeled .label {
  font-weight: 400;
  border-radius: 3px;
  font-size: inherit;
  padding: .25rem .375rem;
  margin: .125rem;
  color: #fff;
  white-space: nowrap;
}

.page-order .table {
  margin-bottom: 0;
}

.page-order table td,.page-order table th {
  padding: .5rem;
}

.page-order table thead th {
  text-align: center;
}

#authentication .tooltip.tooltip-bottom {
  padding: 0;
  margin: 0;
}

#authentication .custom-checkbox {
  display: -webkit-box;
  display: -moz-box;
  display: box;
  display: -moz-flex;
  display: -ms-flexbox;
  -js-display: flex;
  display: flex;
}

#authentication .custom-checkbox span {
  flex: 0 0 .9375rem;
}

#authentication .custom-checkbox label {
  padding-left: .625rem;
}

#authentication [data-action=show-password] {
  background: #878787;
}

#authentication .radio-inline,#identity .radio-inline {
  padding: 0;
}

#authentication .radio-inline .custom-radio,#identity .radio-inline .custom-radio {
  margin-right: 0;
}

.page-customer-account #content {
  box-shadow: 2px 2px 11px 0 rgba(0,0,0,.1);
  background: #fff;
  padding: 1rem;
  font-size: .875rem;
  color: #878787;
}

.page-customer-account #content .order-actions a {
  padding: 0 .125rem;
}

.page-customer-account #content .forgot-password {
  text-align: center;
  font-size: .875rem;
  margin-top: 1rem;
  padding-bottom: .9375rem;
}

.page-customer-account #content .no-account {
  text-align: center;
  font-size: 1rem;
}

.page-authentication #content {
  padding: 1rem;
  max-width: 640px;
  margin: 0 auto;
}

.page-addresses .address,.page-authentication #content {
  box-shadow: 2px 2px 11px 0 rgba(0,0,0,.1);
  background: #fff;
}

.page-addresses .address {
  margin-bottom: 1.875rem;
  font-size: .875rem;
  color: #414141;
}

.page-addresses .address .address-body {
  padding: 1rem;
}

.page-addresses .address .address-body h4 {
  font-size: 1rem;
  font-weight: 700;
}

.page-addresses .address .address-body address {
  min-height: 9rem;
}

.page-addresses .address .address-footer {
  border-top: 1px solid #acaaa6;
  padding: .5rem 1rem;
}

.page-addresses .address .address-footer a {
  color: #878787;
  margin-right: .5rem;
}

.page-addresses .address .address-footer a:hover {
  color: #414141;
}

.page-addresses .address .address-footer a i {
  font-size: 1rem;
}

.page-addresses .address .address-footer a span {
  font-size: .9375rem;
  vertical-align: middle;
}

.page-addresses .addresses-footer {
  margin: 0 .9375rem;
}

.page-addresses .addresses-footer a,.page-addresses .addresses-footer a:hover {
  color: #414141;
}

.page-addresses .addresses-footer a i {
  font-size: 1rem;
}

.page-addresses .addresses-footer a span {
  font-size: 1rem;
  vertical-align: middle;
  margin-top: .625rem;
}

.page-order-detail {
  font-size: .875rem;
  color: #878787;
}

.page-order-detail .box {
  box-shadow: 2px 2px 11px 0 rgba(0,0,0,.1);
  background: #fff;
  padding: 1rem;
  margin-bottom: 1rem;
}

.page-order-detail h3 {
  font-size: 1rem;
  font-weight: 700;
  text-transform: uppercase;
  color: #414141;
  margin-bottom: 1rem;
}

.page-order-detail #order-infos ul {
  margin: 0;
}

.page-order-detail #order-history .history-lines .history-line {
  padding: .5rem 0;
  border-bottom: 1px solid #f6f6f6;
}

.page-order-detail #order-history .history-lines .history-line:last-child {
  border-bottom: 0;
}

.page-order-detail #order-history .history-lines .history-line .label {
  display: inline-block;
  margin: .25rem 0;
  padding: .25rem .375rem;
  color: #fff;
  border-radius: 3px;
}

.page-order-detail .addresses {
  margin: 0 -.9375rem;
}

.page-order-detail .addresses h4 {
  font-size: 1rem;
  font-weight: 700;
}

.page-order-detail #order-products.return {
  margin-bottom: 1rem;
}

.page-order-detail #order-products.return th.head-checkbox {
  width: 30px;
}

.page-order-detail #order-products.return td {
  padding: 1.375rem .75rem;
}

.page-order-detail #order-products.return td.qty {
  min-width: 125px;
}

.page-order-detail #order-products.return td.qty .current {
  width: 30%;
  float: left;
  text-align: right;
  padding-right: .5rem;
}

.page-order-detail #order-products.return td.qty .select {
  width: 70%;
  float: left;
  margin: -.625rem 0;
  padding-left: .25rem;
}

.page-order-detail #order-products.return td.qty .select select {
  text-align: center;
}

.page-order-detail .order-items {
  padding: 0!important;
}

.page-order-detail .order-items .order-item {
  padding: 1rem 1rem 0;
  border-bottom: 1px solid #f6f6f6;
}

.page-order-detail .order-items .order-item .checkbox {
  width: 30px;
  float: left;
  padding: 0 .9375rem;
}

.page-order-detail .order-items .order-item .content {
  width: calc(100% - 30px);
  float: left;
  padding: 0 .9375rem;
}

.page-order-detail .order-items .order-item .desc {
  margin-bottom: 1rem;
}

.page-order-detail .order-items .order-item .desc .name {
  font-weight: 700;
}

.page-order-detail .order-items .order-item .qty {
  margin-bottom: 1rem;
}

.page-order-detail .order-items .order-item .qty .q,.page-order-detail .order-items .order-item .qty .s {
  margin-bottom: .25rem;
}

.page-order-detail .messages .message {
  margin-top: .5rem;
  border-bottom: 1px solid #f6f6f6;
}

.page-order-detail .messages .message:last-child {
  border-bottom: 0;
}

.page-order-detail .messages .message>div {
  margin-bottom: .5rem;
}

.page-order-detail .customization {
  margin-top: .75rem;
}

#order-return-infos .thead-default th {
  color: #414141;
}

#order-return-infos .customization {
  margin-top: .75rem;
}

.page-my-account #content .links {
  display: -webkit-box;
  display: -moz-box;
  display: box;
  display: -moz-flex;
  display: -ms-flexbox;
  -js-display: flex;
  display: flex;
  -webkit-box-lines: multiple;
  -moz-box-lines: multiple;
  box-lines: multiple;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-pack: start;
  box-pack: start;
  -moz-justify-content: flex-start;
  -ms-justify-content: flex-start;
  -o-justify-content: flex-start;
  justify-content: flex-start;
  -ms-flex-pack: start;
}

.page-my-account #content .links a {
  text-align: center;
  display: inline-block;
  font-size: 1rem;
  font-weight: 700;
  text-transform: uppercase;
  color: #878787;
  padding: 0 .9375rem;
  margin-bottom: 1.875rem;
}

.page-my-account #content .links a span.link-item {
  display: block;
  height: 100%;
  box-shadow: 2px 2px 11px 0 rgba(0,0,0,.1);
  background: #fff;
  padding: 1rem;
}

.page-my-account #content .links a i {
  display: block;
  font-size: 2.6rem;
  width: 100%;
  color: #414141;
  padding-bottom: 3.4rem;
}

.page-my-account #content .links a:hover {
  color: #414141;
}

.page-my-account #content .links a:hover i {
  color: #2fb5d2;
}

#history .orders {
  margin: 0 -1rem;
}

#history .orders .order {
  padding: .75rem 1rem;
  border-bottom: 1px solid #f6f6f6;
}

#history .orders .order a h3 {
  color: #878787;
}

#history .orders .order .label {
  display: inline-block;
  margin: .25rem 0;
  padding: .25rem .375rem;
  color: #fff;
  border-radius: 3px;
}

#history .orders .order:last-child {
  border-bottom: 0;
}

.page-footer .account-link {
  margin-right: 1rem;
}

.page-footer .account-link i {
  font-size: 1rem;
}

.page-footer .account-link span {
  font-size: .875rem;
  vertical-align: middle;
}

.login-form {
  margin-top: 15px;
}

.forgotten-password {
  padding: 4px;
}

.forgotten-password .form-fields .center-email-fields {
  -js-display: flex;
  display: flex;
  justify-content: center;
}

.forgotten-password .form-fields .email {
  padding-left: 0;
  padding-right: 0;
  width: 430px;
}

.forgotten-password .form-fields .email input {
  height: 38px;
}

.forgotten-password .form-fields label.required {
  width: 130px;
}

.send-renew-password-link {
  padding-left: 10px;
  padding-right: 10px;
}

.renew-password {
  margin-left: 10px;
}

.renew-password .email {
  padding-bottom: 30px;
}

.renew-password [type=submit] {
  margin-left: 50px;
}

.carousel {
  box-shadow: 1px 1px 7px 0 rgba(0,0,0,.15);
  margin-bottom: 1.5rem;
}

.carousel .direction {
  z-index: auto;
}

.carousel .carousel-inner {
  height: 340px;
}

.carousel .carousel-item {
  height: 100%;
}

.carousel .carousel-item img {
  width: 100%;
  margin-left: 0;
}

.carousel .carousel-item .caption {
  position: absolute;
  bottom: 28px;
  left: 90px;
  color: #fff;
  max-width: 340px;
}

.carousel .carousel-item .caption .caption-description p {
  color: #fff;
}

.carousel .carousel-control {
  opacity: 1;
}

.carousel .carousel-control .icon-next:before,.carousel .carousel-control .icon-prev:before {
  content: "";
}

.carousel .carousel-control .icon-next i,.carousel .carousel-control .icon-prev i {
  font-size: 3.125rem;
  color: #fff;
}

.carousel .carousel-control .icon-next:hover i,.carousel .carousel-control .icon-prev:hover i {
  color: #2fb5d2;
}

.carousel .carousel-control .icon-prev {
  left: 1rem;
}

.carousel .carousel-control .icon-next {
  right: 2rem;
}

.carousel .carousel-control.left,.carousel .carousel-control.right {
  background: none;
}

#products .products,.featured-products .products,.product-accessories .products,.product-miniature .products {
  display: -webkit-box;
  display: -moz-box;
  display: box;
  display: -moz-flex;
  display: -ms-flexbox;
  -js-display: flex;
  display: flex;
  -webkit-box-lines: multiple;
  -moz-box-lines: multiple;
  box-lines: multiple;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-pack: start;
  box-pack: start;
  -moz-justify-content: flex-start;
  -ms-justify-content: flex-start;
  -o-justify-content: flex-start;
  justify-content: flex-start;
  -ms-flex-pack: start;
}

#products .product-thumbnail,.featured-products .product-thumbnail,.product-accessories .product-thumbnail,.product-miniature .product-thumbnail {
  display: block;
}

#products .product-title a,.featured-products .product-title a,.product-accessories .product-title a,.product-miniature .product-title a {
  color: #acaaa6;
  font-size: .875rem;
  text-decoration: none;
  text-align: center;
  font-weight: 400;
}

#products .thumbnail-container,.featured-products .thumbnail-container,.product-accessories .thumbnail-container,.product-miniature .thumbnail-container {
  position: relative;
  margin-bottom: 1.5625em;
  height: 318px;
  width: 257px;
  background: #fff;
  box-shadow: 0 0 5px 3px rgba(0,0,0,.05);
}

#products .thumbnail-container:hover,.featured-products .thumbnail-container:hover,.product-accessories .thumbnail-container:hover,.product-miniature .thumbnail-container:hover {
  box-shadow: 2px 2px 11px 0 rgba(0,0,0,.1);
}

#products .thumbnail-container:hover .highlighted-informations,.featured-products .thumbnail-container:hover .highlighted-informations,.product-accessories .thumbnail-container:hover .highlighted-informations,.product-miniature .thumbnail-container:hover .highlighted-informations {
  bottom: 5.625rem;
}

#products .thumbnail-container:hover .highlighted-informations:after,.featured-products .thumbnail-container:hover .highlighted-informations:after,.product-accessories .thumbnail-container:hover .highlighted-informations:after,.product-miniature .thumbnail-container:hover .highlighted-informations:after {
  opacity: 1;
}

#products .thumbnail-container:hover .highlighted-informations.no-variants,.featured-products .thumbnail-container:hover .highlighted-informations.no-variants,.product-accessories .thumbnail-container:hover .highlighted-informations.no-variants,.product-miniature .thumbnail-container:hover .highlighted-informations.no-variants {
  bottom: 4.375rem;
}

#products .thumbnail-container:hover .product-description,.featured-products .thumbnail-container:hover .product-description,.product-accessories .thumbnail-container:hover .product-description,.product-miniature .thumbnail-container:hover .product-description {
  box-shadow: 0 -5px 10px -5px rgba(0,0,0,.2);
}

#products .products-section-title,.featured-products .products-section-title,.product-accessories .products-section-title,.product-miniature .products-section-title {
  text-align: center;
  margin-bottom: 1.5rem;
}

#products .product-title,.featured-products .product-title,.product-accessories .product-title,.product-miniature .product-title {
  text-align: center;
  text-transform: capitalize;
  margin-top: 1rem;
}

#products .variant-links,.featured-products .variant-links,.product-accessories .variant-links,.product-miniature .variant-links {
  background: #ebebeb;
  position: relative;
  text-align: center;
  width: 100%;
  top: .25em;
  padding-top: .1875rem;
  min-height: 2.5rem;
}

#products .highlighted-informations,.featured-products .highlighted-informations,.product-accessories .highlighted-informations,.product-miniature .highlighted-informations {
  position: absolute;
  bottom: 1.25rem;
  z-index: 0;
  background: #fff;
  text-align: center;
  width: 257px;
  height: 3.125rem;
  padding-top: .3125rem;
  box-shadow: 0 -5px 10px -5px rgba(0,0,0,.2);
  transition: bottom .3s;
}

#products .highlighted-informations .quick-view,.featured-products .highlighted-informations .quick-view,.product-accessories .highlighted-informations .quick-view,.product-miniature .highlighted-informations .quick-view {
  color: #878787;
  font-size: 1rem;
}

#products .highlighted-informations .quick-view:hover,.featured-products .highlighted-informations .quick-view:hover,.product-accessories .highlighted-informations .quick-view:hover,.product-miniature .highlighted-informations .quick-view:hover {
  color: #2fb5d2;
}

#products .product-miniature .discount,.featured-products .product-miniature .discount,.product-accessories .product-miniature .discount,.product-miniature .product-miniature .discount {
  display: none;
}

#products .product-miniature .discount-percentage,#products .product-miniature .on-sale,#products .product-miniature .online-only,#products .product-miniature .product-flags .new,.featured-products .product-miniature .discount-percentage,.featured-products .product-miniature .on-sale,.featured-products .product-miniature .online-only,.featured-products .product-miniature .product-flags .new,.product-accessories .product-miniature .discount-percentage,.product-accessories .product-miniature .on-sale,.product-accessories .product-miniature .online-only,.product-accessories .product-miniature .product-flags .new,.product-miniature .product-miniature .discount-percentage,.product-miniature .product-miniature .on-sale,.product-miniature .product-miniature .online-only,.product-miniature .product-miniature .product-flags .new {
  display: block;
  position: absolute;
  left: -.4375rem;
  top: .4375rem;
  padding: .3125rem .4375rem;
  color: #fff;
  background: #2fb5d2;
  text-transform: uppercase;
  min-width: 3.125rem;
  min-height: 1.875rem;
  font-size: 1rem;
  font-weight: 600;
  box-shadow: 2px 2px 11px 0 rgba(0,0,0,.1);
}

#products .product-miniature .discount-percentage.discount-percentage,#products .product-miniature .on-sale.discount-percentage,#products .product-miniature .online-only.discount-percentage,#products .product-miniature .product-flags .new.discount-percentage,.featured-products .product-miniature .discount-percentage.discount-percentage,.featured-products .product-miniature .on-sale.discount-percentage,.featured-products .product-miniature .online-only.discount-percentage,.featured-products .product-miniature .product-flags .new.discount-percentage,.product-accessories .product-miniature .discount-percentage.discount-percentage,.product-accessories .product-miniature .on-sale.discount-percentage,.product-accessories .product-miniature .online-only.discount-percentage,.product-accessories .product-miniature .product-flags .new.discount-percentage,.product-miniature .product-miniature .discount-percentage.discount-percentage,.product-miniature .product-miniature .on-sale.discount-percentage,.product-miniature .product-miniature .online-only.discount-percentage,.product-miniature .product-miniature .product-flags .new.discount-percentage {
  z-index: 2;
  background: #f39d72;
}

#products .product-miniature .discount-percentage.on-sale,#products .product-miniature .on-sale.on-sale,#products .product-miniature .online-only.on-sale,#products .product-miniature .product-flags .new.on-sale,.featured-products .product-miniature .discount-percentage.on-sale,.featured-products .product-miniature .on-sale.on-sale,.featured-products .product-miniature .online-only.on-sale,.featured-products .product-miniature .product-flags .new.on-sale,.product-accessories .product-miniature .discount-percentage.on-sale,.product-accessories .product-miniature .on-sale.on-sale,.product-accessories .product-miniature .online-only.on-sale,.product-accessories .product-miniature .product-flags .new.on-sale,.product-miniature .product-miniature .discount-percentage.on-sale,.product-miniature .product-miniature .on-sale.on-sale,.product-miniature .product-miniature .online-only.on-sale,.product-miniature .product-miniature .product-flags .new.on-sale {
  background: #f39d72;
  width: 100%;
  text-align: center;
  left: 0;
  top: 0;
}

#products .product-miniature .discount-percentage.online-only,#products .product-miniature .on-sale.online-only,#products .product-miniature .online-only.online-only,#products .product-miniature .product-flags .new.online-only,.featured-products .product-miniature .discount-percentage.online-only,.featured-products .product-miniature .on-sale.online-only,.featured-products .product-miniature .online-only.online-only,.featured-products .product-miniature .product-flags .new.online-only,.product-accessories .product-miniature .discount-percentage.online-only,.product-accessories .product-miniature .on-sale.online-only,.product-accessories .product-miniature .online-only.online-only,.product-accessories .product-miniature .product-flags .new.online-only,.product-miniature .product-miniature .discount-percentage.online-only,.product-miniature .product-miniature .on-sale.online-only,.product-miniature .product-miniature .online-only.online-only,.product-miniature .product-miniature .product-flags .new.online-only {
  font-size: .8125rem;
  margin-top: 13rem;
  margin-left: 8.6875rem;
}

#products .product-miniature .discount-percentage.online-only:before,#products .product-miniature .on-sale.online-only:before,#products .product-miniature .online-only.online-only:before,#products .product-miniature .product-flags .new.online-only:before,.featured-products .product-miniature .discount-percentage.online-only:before,.featured-products .product-miniature .on-sale.online-only:before,.featured-products .product-miniature .online-only.online-only:before,.featured-products .product-miniature .product-flags .new.online-only:before,.product-accessories .product-miniature .discount-percentage.online-only:before,.product-accessories .product-miniature .on-sale.online-only:before,.product-accessories .product-miniature .online-only.online-only:before,.product-accessories .product-miniature .product-flags .new.online-only:before,.product-miniature .product-miniature .discount-percentage.online-only:before,.product-miniature .product-miniature .on-sale.online-only:before,.product-miniature .product-miniature .online-only.online-only:before,.product-miniature .product-miniature .product-flags .new.online-only:before {
 
  font-family: Material Icons;
  vertical-align: middle;
  margin: .3125rem;
}

#products .comments_note,.featured-products .comments_note,.product-accessories .comments_note,.product-miniature .comments_note {
  text-align: center;
  color: #acaaa6;
}

#products .regular-price,.featured-products .regular-price,.product-accessories .regular-price,.product-miniature .regular-price {
  color: #acaaa6;
  text-decoration: line-through;
  font-size: .875rem;
}

#products .count,.featured-products .count,.product-accessories .count,.product-miniature .count {
  color: #878787;
  font-weight: 700;
  position: relative;
  bottom: .5rem;
}

#products .all-product-link,.featured-products .all-product-link,.product-accessories .all-product-link,.product-miniature .all-product-link {
  clear: both;
  color: #878787;
  font-weight: 700;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
}

@media (max-width:767px) {
  #products .thumbnail-container,.featured-products .thumbnail-container,.product-accessories .thumbnail-container {
    box-shadow: 2px 2px 11px 0 rgba(0,0,0,.1);
  }

  #products .thumbnail-container .product-description,.featured-products .thumbnail-container .product-description,.product-accessories .thumbnail-container .product-description {
    box-shadow: 0 -5px 10px -5px rgba(0,0,0,.2);
  }
}

#custom-text {
  background: #fff;
  border-radius: 2px;
  margin-bottom: 1.5rem;
  padding: 3.125rem;
  text-align: center;
}

#custom-text h3 {
  text-transform: uppercase;
  color: #414141;
  font-size: 1.5625rem;
  font-weight: 700;
}

#custom-text p {
  color: #414141;
  font-weight: 400;
  font-size: 1.1em;
}

#custom-text p .dark {
  color: #acaaa6;
  font-weight: 400;
}

.page-content.page-cms {
  background: #fff;
  padding: 1.25rem;
  text-align: justify;
}

.page-content.page-cms .cms-box img {
  max-width: 100%;
}

@media (max-width:991px) {
  #block-cmsinfo {
    padding: 1.25rem 1.875rem;
  }
}

#products {
  color: #878787;
}

#products .products-select {
  display: -webkit-box;
  display: -moz-box;
  display: box;
  display: -moz-flex;
  display: -ms-flexbox;
  -js-display: flex;
  display: flex;
  -webkit-box-align: baseline;
  box-align: baseline;
  -moz-align-items: baseline;
  -ms-align-items: baseline;
  -o-align-items: baseline;
  align-items: baseline;
  -ms-flex-align: baseline;
  -webkit-box-pack: justify;
  box-pack: justify;
  -moz-justify-content: space-between;
  -ms-justify-content: space-between;
  -o-justify-content: space-between;
  justify-content: space-between;
  -ms-flex-pack: justify;
}

#products .up {
  margin-bottom: 1rem;
}

#products .up .btn-secondary,#products .up .btn-tertiary {
  color: #acaaa6;
  text-transform: inherit;
}

#products .up .btn-secondary .material-icons,#products .up .btn-tertiary .material-icons {
  margin-right: 0;
}

.block-category {
  min-height: 13.75rem;
  margin-bottom: 1.5625rem;
}

.block-category #category-description p,.block-category #category-description strong {
  font-weight: 400;
  color: #acaaa6;
}

.block-category #category-description p {
  color: #414141;
  margin-bottom: 0;
}

.block-category #category-description p:first-child {
  margin-bottom: 1.25rem;
}

.block-category .category-cover {
  position: absolute;
  right: .75rem;
  bottom: 0;
}

.block-category .category-cover img {
  width: 141px;
  height: 180px;
}

.products-selection .sort-by-row {
  display: -webkit-box;
  display: -moz-box;
  display: box;
  display: -moz-flex;
  display: -ms-flexbox;
  -js-display: flex;
  display: flex;
  align-items: center;
}

.products-selection .sort-by {
  white-space: normal;
  word-break: break-word;
  margin-right: -.9375rem;
  margin-left: .9375rem;
  text-align: right;
}

.products-selection .total-products,.products-selection h1 {
  padding-top: .625rem;
}

.products-sort-order {
  color: #878787;
}

.products-sort-order .select-title {
  display: inline-block;
  margin-left: .375rem;
  width: 100%;
  color: #414141;
  background: #fff;
  padding: .625rem;
  cursor: pointer;
}

.products-sort-order .select-list {
  display: block;
  color: #414141;
  padding: .625rem 1.25rem;
}

.products-sort-order .select-list:hover {
  background: #2fb5d2;
  color: #fff;
  text-decoration: none;
}

.products-sort-order .dropdown-menu {
  left: auto;
  width: 16.875rem;
  background: #f6f6f6;
  border: none;
  border-radius: 0;
}

.facet-dropdown {
  color: #878787;
  padding-left: 0;
  padding-right: 0;
  background: #ebebeb;
  border: 3px solid transparent;
  box-sizing: border-box;
  box-shadow: 1px 1px 1px 1px #ebebeb;
}

.facet-dropdown.open {
  border: 0;
}

.facet-dropdown.open>.select-title {
  border: 3px solid #2fb5d2;
  background: #f6f6f6;
}

.facet-dropdown .select-title {
  display: inline-flex;
  align-items: center;
  margin-left: 0;
  width: 100%;
  color: #414141;
  background: #ebebeb;
  padding: .625rem .625rem .625rem 1.25rem;
  cursor: pointer;
}

.facet-dropdown .select-title>i {
  margin-left: auto;
}

.facet-dropdown .select-list {
  display: block;
  color: #414141;
  background: #f6f6f6;
  padding: .625rem 1.25rem;
}

.facet-dropdown .select-list:hover {
  background: #2fb5d2;
  color: #fff;
  text-decoration: none;
}

.facet-dropdown .dropdown-menu {
  padding: 0;
  margin-top: 3px;
  left: auto;
  width: 100%;
  background: #f6f6f6;
  border: none;
  box-shadow: 1px 1px 1px 1px #ebebeb;
}

#search_filters,#search_filters_brands,#search_filters_suppliers {
  box-shadow: 2px 2px 11px 0 rgba(0,0,0,.1);
  margin-bottom: 1.5625rem;
  background: #fff;
  padding: 1.5625rem 1.25rem;
}

#search_filters .facet,#search_filters_brands .facet,#search_filters_suppliers .facet {
  padding-top: .625rem;
}

#search_filters .facet .collapse,#search_filters_brands .facet .collapse,#search_filters_suppliers .facet .collapse {
  display: block;
}

#search_filters .facet .facet-title,#search_filters_brands .facet .facet-title,#search_filters_suppliers .facet .facet-title {
  color: #acaaa6;
}

#search_filters .facet .facet-label,#search_filters_brands .facet .facet-label,#search_filters_suppliers .facet .facet-label {
  margin-bottom: 0;
}

#search_filters .facet .facet-label a,#search_filters_brands .facet .facet-label a,#search_filters_suppliers .facet .facet-label a {
  margin-top: .4375rem;
  color: #414141;
  display: inline-block;
  font-size: .9375rem;
}

#search_filters_brands .facet,#search_filters_suppliers .facet {
  padding-top: 0;
}

#search_filters_brands .facet .facet-label,#search_filters_suppliers .facet .facet-label {
  margin-bottom: .3125rem;
}

.pagination {
  width: 100%;
}

.pagination>div:first-child {
  line-height: 2.5rem;
}

.pagination .page-list {
  background: #fff;
  padding: .625rem 1.25rem;
  margin-bottom: 0;
}

.pagination .page-list li {
  display: inline;
}

.pagination a {
  color: #000;
  font-weight: 600;
}

.pagination .previous {
  float: left;
}

.pagination .next {
  float: right;
}

.pagination .disabled {
  color: #acaaa6;
}

.pagination .current a {
  color: #2fb5d2;
  text-decoration: none;
}

.active_filters {
  background: #dededd;
  padding: .625rem 1.875rem 0;
  margin-bottom: 1.25rem;
}

.active_filters .active-filter-title {
  display: inline;
  margin-right: .625rem;
  font-weight: 600;
}

.active_filters ul {
  display: inline;
}

.active_filters .filter-block {
  box-shadow: 2px 2px 11px 0 rgba(0,0,0,.1);
  color: #414141;
  margin-right: .625rem;
  margin-bottom: .625rem;
  background: #fff;
  padding: .625rem;
  display: inline-block;
  font-size: .8125rem;
}

.active_filters .filter-block .close {
  color: #414141;
  font-size: .9375rem;
  opacity: 1;
  margin-top: .1875rem;
  margin-left: .3125rem;
}

.block-categories {
  box-shadow: 2px 2px 11px 0 rgba(0,0,0,.1);
  background: #fff;
  padding: 1.5625rem 1.25rem;
  margin-bottom: 1.5625rem;
}

.block-categories .category-sub-menu {
  margin-top: .625rem;
}

.block-categories .category-sub-menu .category-sub-link {
  font-size: .875rem;
}

.block-categories .category-sub-menu li {
  position: relative;
}

.block-categories .category-sub-menu li[data-depth="1"] {
  margin-bottom: .625rem;
}

.block-categories .category-sub-menu li[data-depth="0"]>a {
  font-weight: 600;
  border-bottom: 2px solid #ebebeb;
  width: 100%;
  display: inline-block;
  margin: .3125rem 0 0;
  padding-bottom: .1875rem;
}

.block-categories .category-sub-menu li:not([data-depth="0"]):not([data-depth="1"]) {
  padding-left: .3125rem;
}

.block-categories .category-sub-menu li:not([data-depth="0"]):not([data-depth="1"]):before {
  content: "-";
  margin-right: .3125rem;
}

.block-categories a {
  color: #414141;
}

.block-categories .collapse-icons {
  position: absolute;
  right: 0;
  top: 0;
  padding: 0;
  cursor: pointer;
}

.block-categories .collapse-icons[aria-expanded=true] .add {
  display: none;
}

.block-categories .collapse-icons[aria-expanded=true] .remove {
  display: block;
}

.block-categories .collapse-icons .add:hover,.block-categories .collapse-icons .remove:hover {
  color: #2fb5d2;
}

.block-categories .collapse-icons .remove {
  display: none;
}

.block-categories .arrows .arrow-down,.block-categories .arrows .arrow-right {
  font-size: .875rem;
  cursor: pointer;
  margin-left: 2px;
}

.block-categories .arrows .arrow-down:hover,.block-categories .arrows .arrow-right:hover {
  color: #2fb5d2;
}

.block-categories .arrows .arrow-down,.block-categories .arrows[aria-expanded=true] .arrow-right {
  display: none;
}

.block-categories .arrows[aria-expanded=true] .arrow-down {
  display: inline-block;
}

.facets-title {
  color: #414141;
}

.products-selection .filter-button .btn-secondary,.products-selection .filter-button .btn-tertiary {
  padding: .75rem .5rem .6875rem;
}

@media (max-width:767px) {
  #category #left-column {
    width: 100%;
  }

  #category #left-column #search_filters_wrapper {
    margin-left: -30px;
    margin-right: -30px;
  }

  #category #left-column #search_filter_controls {
    text-align: center;
    margin-bottom: 1rem;
  }

  #category #left-column #search_filter_controls button {
    margin: 0 .5rem;
  }

  #category #left-column #search_filters {
    margin-bottom: 0;
    box-shadow: none;
    padding: 0;
    border-top: 1px solid #f6f6f6;
  }

  #category #left-column #search_filters .facet {
    padding-top: 0;
    border-bottom: 1px solid #f6f6f6;
  }

  #category #left-column #search_filters .facet .title {
    cursor: pointer;
  }

  #category #left-column #search_filters .facet .title .collapse-icons .remove,#category #left-column #search_filters .facet .title[aria-expanded=true] .collapse-icons .add {
    display: none;
  }

  #category #left-column #search_filters .facet .title[aria-expanded=true] .collapse-icons .remove {
    display: block;
  }

  #category #left-column #search_filters .facet .facet-title {
    color: #414141;
    text-transform: uppercase;
  }

  #category #left-column #search_filters .facet .h6 {
    margin-bottom: 0;
    padding: .625rem;
    display: inline-block;
  }

  #category #left-column #search_filters .facet .navbar-toggler {
    display: inline-block;
    padding: .625rem .625rem 0 0;
  }

  #category #left-column #search_filters .facet .collapse {
    display: none;
  }

  #category #left-column #search_filters .facet .collapse.in {
    display: block;
  }

  #category #left-column #search_filters .facet .facet-label a {
    margin-top: 0;
  }

  #category #left-column #search_filters .facet ul {
    margin-bottom: 0;
  }

  #category #left-column #search_filters .facet ul li {
    border-top: 1px solid #f6f6f6;
    padding: .625rem;
  }

  #category #content-wrapper,#category #search_filter_toggler {
    width: 100%;
  }

  .products-sort-order .select-title {
    margin-left: 0;
  }

  .products-selection h1 {
    padding-top: 0;
    text-align: center;
    margin-bottom: 1rem;
  }

  .products-selection .showing {
    padding-top: 1rem;
  }

  #best-sales #content-wrapper,#new-products #content-wrapper,#prices-drop #content-wrapper {
    width: 100%;
  }
}

@media (max-width:543px) {
  .products-selection .filter-button {
    padding-left: 0;
  }

  #category #left-column #search_filters_wrapper {
    margin-left: -15px;
    margin-right: -15px;
  }
}

#product #content {
  position: relative;
  max-width: 452px;
  margin: 0 auto;
}

.product-price {
  color: #2fb5d2;
  display: inline-block;
}

#product-description-short {
  color: #414141;
}

.product-information {
  font-size: .9375rem;
  color: #414141;
}

.product-information .manufacturer-logo {
  height: 35px;
}

.input-color {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 1.25rem;
  width: 1.25rem;
}

.input-container {
  position: relative;
}

.input-radio {
  position: absolute;
  top: 0;
  cursor: pointer;
  opacity: 0;
  width: 100%;
  height: 100%;
}

.input-color:checked+span,.input-color:hover+span,.input-radio:checked+span,.input-radio:hover+span {
  border: 2px solid #414141;
}

.radio-label {
  box-shadow: 2px 2px 11px 0 rgba(0,0,0,.1);
  background: #fff;
  display: inline-block;
  padding: .125rem .625rem;
  font-weight: 600;
  border: 2px solid #fff;
}

.product-actions .control-label {
  margin-bottom: .375rem;
  display: block;
  width: 100%;
}

.product-actions .add-to-cart {
  height: 2.75rem;
  line-height: inherit;
  padding-top: .625rem;
}

.product-actions .add-to-cart .material-icons {
  line-height: inherit;
}

.product-quantity .qty {
  width: 80px;
}

.product-quantity .add,.product-quantity .qty {
  float: left;
  margin-bottom: .5rem;
}

.product-quantity #quantity_wanted {
  color: #414141;
  background-color: #fff;
  height: 2.75rem;
  padding: .175rem .5rem;
  width: 3rem;
}

.product-quantity .input-group-btn-vertical {
  float: left;
}

.product-quantity .input-group-btn-vertical .btn {
  padding: .5rem .6875rem;
}

.product-quantity .input-group-btn-vertical .btn i {
  font-size: 1rem;
  top: .125rem;
  left: .1875rem;
}

.product-quantity .btn-touchspin {
  height: 1.4375rem;
}

.product-discounts {
  margin-bottom: 1.5rem;
}

.product-discounts>.product-discounts-title {
  font-weight: 400;
  font-size: .875rem;
}

.product-discounts>.table-product-discounts thead tr th {
  width: 33%;
  padding: .625rem 1.25rem;
  background: #fff;
  border: .3125rem solid #ebebeb;
  text-align: center;
}

.product-discounts>.table-product-discounts tbody tr {
  background: #f6f6f6;
}

.product-discounts>.table-product-discounts tbody tr:nth-of-type(2n) {
  background: #fff;
}

.product-discounts>.table-product-discounts tbody tr td {
  padding: .625rem 1.25rem;
  text-align: center;
  border: .3125rem solid #ebebeb;
}

.product-prices {
  margin-top: 1.25rem;
}

.product-prices div {
  margin-bottom: .625rem;
}

.product-prices .tax-shipping-delivery-label {
  font-size: .8125rem;
  color: #878787;
}

.product-discount {
  color: #acaaa6;
}

.product-discount .regular-price {
  text-decoration: line-through;
  font-weight: 400;
  margin-right: .625rem;
}

.has-discount.product-price,.has-discount p {
  color: #f39d72;
}

.has-discount .discount {
  background: #f39d72;
  color: #fff;
  font-weight: 600;
  padding: .3125rem .625rem;
  font-size: 1rem;
  margin-left: .625rem;
  text-transform: uppercase;
  display: inline-block;
}

.product-unit-price {
  font-size: .8125rem;
  margin-bottom: 0;
}

.tabs {
  box-shadow: 2px 2px 11px 0 rgba(0,0,0,.1);
  margin-top: 2rem;
  background: #fff;
  padding: 1.25rem 1.875rem;
}

.tabs .tab-pane {
  padding-top: 1.25rem;
}

.tabs .nav-tabs {
  border: none;
  border-bottom: 2px solid #ebebeb;
}

.tabs .nav-tabs .nav-link {
  color: #878787;
  border: 0 solid transparent;
}

.tabs .nav-tabs .nav-link.active {
  color: #2fb5d2;
}

.tabs .nav-tabs .nav-link.active,.tabs .nav-tabs .nav-link:hover {
  border: none;
  border-bottom: 3px solid #2fb5d2;
}

.tabs .nav-tabs .nav-item {
  float: left;
  margin-bottom: -.125rem;
}

.product-cover {
  margin-bottom: 1.25rem;
  position: relative;
}

.product-cover img {
  box-shadow: 2px 2px 11px 0 rgba(0,0,0,.1);
  background: #fff;
}

.product-cover .layer {
  display: -webkit-box;
  display: -moz-box;
  display: box;
  display: -moz-flex;
  display: -ms-flexbox;
  -js-display: flex;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: #fff;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
  background: hsla(0,0%,100%,.7);
  text-align: center;
  cursor: pointer;
}

.product-cover .layer:hover {
  opacity: 1;
}

.product-cover .layer .zoom-in {
  font-size: 6.25rem;
  color: #fff;
}

#product-modal .modal-content {
  background: transparent;
  border: none;
  padding: 0;
}

#product-modal .modal-content .modal-body {
  display: -webkit-box;
  display: -moz-box;
  display: box;
  display: -moz-flex;
  display: -ms-flexbox;
  -js-display: flex;
  display: flex;
  margin-left: -30%;
}

#product-modal .modal-content .modal-body .product-cover-modal {
  background: #fff;
}

#product-modal .modal-content .modal-body .image-caption {
  background: #fff;
  width: 800px;
  padding: .625rem 1.25rem;
  border-top: 1px solid #ebebeb;
}

#product-modal .modal-content .modal-body .image-caption p {
  margin-bottom: 0;
}

#product-modal .modal-content .modal-body .thumbnails {
  position: relative;
}

#product-modal .modal-content .modal-body .mask {
  position: relative;
  overflow: hidden;
  max-height: 49.375rem;
  margin-top: 2.1875rem;
  z-index: 1;
}

#product-modal .modal-content .modal-body .mask.nomargin {
  margin-top: 0;
}

#product-modal .modal-content .modal-body .product-images {
  margin-left: 2.5rem;
}

#product-modal .modal-content .modal-body .product-images img {
  width: 9.25rem;
  cursor: pointer;
  background: #fff;
}

#product-modal .modal-content .modal-body .product-images img:hover {
  border: 3px solid #2fb5d2;
}

#product-modal .modal-content .modal-body .arrows {
  height: 100%;
  width: 100%;
  text-align: center;
  position: absolute;
  top: 0;
  color: #fff;
  right: 1.875rem;
  z-index: 0;
  cursor: pointer;
}

#product-modal .modal-content .modal-body .arrows .arrow-up {
  position: absolute;
  top: -2rem;
  opacity: .2;
}

#product-modal .modal-content .modal-body .arrows .arrow-down {
  position: absolute;
  bottom: -2rem;
}

#product-modal .modal-content .modal-body .arrows i {
  font-size: 6.25rem;
  display: inline;
}

#blockcart-modal {
  color: #414141;
}

#blockcart-modal .modal-header {
  background: #4cbb6c;
}

#blockcart-modal .modal-body {
  background: #ebebeb;
  padding: 3.125rem 1.875rem;
}

#blockcart-modal .modal-body .divide-right span {
  display: inline-block;
  margin-bottom: .3125rem;
}

#blockcart-modal .modal-dialog {
  max-width: 1140px;
  width: 100%;
}

#blockcart-modal .product-image {
  width: 100%;
}

#blockcart-modal .modal-title {
  font-weight: 600;
  color: #fff;
  font-size: 1.125rem;
}

#blockcart-modal .modal-title i.material-icons {
  margin-right: 1.875rem;
}

#blockcart-modal .product-name {
  color: #2fb5d2;
  font-size: 1.125rem;
}

#blockcart-modal .cart-products-count {
  font-size: 1.125rem;
}

#blockcart-modal .cart-content {
  padding-left: 2.5rem;
}

#blockcart-modal .cart-content .cart-content-btn {
  display: inline-flex;
}

#blockcart-modal .cart-content .cart-content-btn button {
  margin-right: .3125rem;
}

#blockcart-modal .cart-content .cart-content-btn .btn {
  white-space: inherit;
}

#blockcart-modal .divide-right {
  border-right: 1px solid #acaaa6;
}

.product-images>li.thumb-container {
  display: inline;
}

.product-images>li.thumb-container>.thumb {
  box-shadow: 2px 2px 11px 0 rgba(0,0,0,.1);
  cursor: pointer;
  margin-bottom: .625rem;
}

.images-container .product-images>li.thumb-container>.thumb {
  margin-right: .8125rem;
}

.product-images>li.thumb-container>.thumb.selected,.product-images>li.thumb-container>.thumb:hover {
  border: 3px solid #2fb5d2;
}

#main .images-container .js-qv-mask {
  white-space: nowrap;
  overflow: hidden;
}

#main .images-container .js-qv-mask.scroll {
  width: calc(100% - 60px);
  margin: 0 auto;
}

.scroll-box-arrows {
  display: none;
}

.scroll-box-arrows.scroll {
  display: block;
}

.scroll-box-arrows i {
  position: absolute;
  bottom: 1.625rem;
  height: 100px;
  line-height: 100px;
  cursor: pointer;
}

.scroll-box-arrows .left {
  left: 0;
}

.scroll-box-arrows .right {
  right: 0;
}

#product-availability {
  display: inline-block;
  font-weight: 700;
  margin-left: .625rem;
}

#product-availability .material-icons {
  line-height: inherit;
}

#product-availability .product-available {
  color: #4cbb6c;
}

#product-availability .product-last-items,#product-availability .product-unavailable {
  color: #ff9a52;
}

#product-details .label {
  font-size: 1rem;
  color: #414141;
  font-weight: 700;
}

.product-features {
  margin-top: 1.25rem;
  margin-left: .3125rem;
}

.product-features>dl.data-sheet {
  display: -webkit-box;
  display: -moz-box;
  display: box;
  display: -moz-flex;
  display: -ms-flexbox;
  -js-display: flex;
  display: flex;
  -webkit-box-lines: multiple;
  -moz-box-lines: multiple;
  box-lines: multiple;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-align: start;
  box-align: start;
  -moz-align-items: flex-start;
  -ms-align-items: flex-start;
  -o-align-items: flex-start;
  align-items: flex-start;
  -ms-flex-align: start;
}

.product-features>dl.data-sheet dd.value,.product-features>dl.data-sheet dt.name {
  -webkit-box-flex: 1;
  box-flex: 1;
  -moz-flex: 1 0 40%;
  -ms-flex: 1 0 40%;
  flex: 1 0 40%;
  font-weight: 400;
  background: #ebebeb;
  padding: .625rem;
  margin-right: .625rem;
  min-height: 2.5rem;
  word-break: break-all;
}

.product-features>dl.data-sheet dd.value:nth-of-type(2n),.product-features>dl.data-sheet dt.name:nth-of-type(2n) {
  background: #f6f6f6;
}

.product-features>dl.data-sheet dt.name {
  text-transform: capitalize;
}

.product-variants>.product-variants-item {
  margin: 1.25rem 0;
}

.product-variants>.product-variants-item select {
  border: 1px solid #ebebeb;
  height: 2.5rem;
  width: 3.75rem;
}

.product-variants>.product-variants-item ul li {
  margin-right: .625rem;
}

.product-variants>.product-variants-item .color {
  margin-left: 0;
  margin-top: 0;
}

.product-flags {
  position: absolute;
  top: 0;
  width: 100%;
}

li.product-flag {
  display: block;
  position: absolute;
  background: #2fb5d2;
  font-weight: 700;
  padding: .3125rem .4375rem;
  text-transform: uppercase;
  color: #fff;
  margin-top: .625rem;
  margin-left: -.3125rem;
  z-index: 2;
}

li.product-flag.online-only {
  top: 25rem;
  right: 0;
  font-size: .8125rem;
}

li.product-flag.online-only:before {
  
  font-family: Material Icons;
  vertical-align: middle;
  margin: .3125rem;
}

li.product-flag.discount {
  display: none;
}

li.product-flag.on-sale {
  background: #f39d72;
  width: 100%;
  text-align: center;
  margin: 0;
  left: 0;
  top: 0;
}

.product-customization {
  box-shadow: 2px 2px 11px 0 rgba(0,0,0,.1);
  margin: 2.5rem 0;
}

.product-customization .product-customization-item {
  margin: 1.25rem 0;
}

.product-customization .product-message {
  background: #ebebeb;
  border: none;
  width: 100%;
  height: 3.125rem;
  resize: none;
  padding: .625rem;
}

.product-customization .product-message::-webkit-input-placeholder {
  color: #acaaa6;
}

.product-customization .product-message:-moz-placeholder,.product-customization .product-message::-moz-placeholder {
  color: #acaaa6;
}

.product-customization .product-message:-ms-input-placeholder {
  color: #acaaa6;
}

.product-customization .file-input {
  width: 100%;
  opacity: 0;
  left: 0;
  z-index: 1;
  cursor: pointer;
  height: 2.625rem;
  overflow: hidden;
  position: absolute;
}

.product-customization .customization-message {
  margin-top: 20px;
}

.product-customization .custom-file {
  position: relative;
  background: #ebebeb;
  width: 100%;
  height: 2.625rem;
  line-height: 2.625rem;
  text-indent: .625rem;
  display: block;
  color: #acaaa6;
  margin-top: 1.25rem;
}

.product-customization .custom-file button {
  z-index: 0;
  position: absolute;
  right: 0;
  top: 0;
}

.product-customization small {
  color: #acaaa6;
}

.product-pack {
  margin-top: 2.5rem;
}

.product-pack .pack-product-container {
  display: -webkit-box;
  display: -moz-box;
  display: box;
  display: -moz-flex;
  display: -ms-flexbox;
  -js-display: flex;
  display: flex;
  justify-content: space-around;
}

.product-pack .pack-product-container .pack-product-name {
  -webkit-box-flex: 0;
  box-flex: 0;
  -moz-flex: 0 0 50%;
  -ms-flex: 0 0 50%;
  flex: 0 0 50%;
  font-size: .875rem;
  color: #acaaa6;
}

.product-pack .pack-product-container .pack-product-quantity {
  border-left: 2px solid #ebebeb;
  padding-left: .625rem;
}

.product-pack .pack-product-container .pack-product-name,.product-pack .pack-product-container .pack-product-price,.product-pack .pack-product-container .pack-product-quantity {
  display: -webkit-box;
  display: -moz-box;
  display: box;
  display: -moz-flex;
  display: -ms-flexbox;
  -js-display: flex;
  display: flex;
  align-items: center;
}

.product-refresh {
  margin-top: 1.25rem;
}

.social-sharing {
  width: 100%;
  display: -webkit-box;
  display: -moz-box;
  display: box;
  display: -moz-flex;
  display: -ms-flexbox;
  -js-display: flex;
  display: flex;
  -webkit-box-align: center;
  box-align: center;
  -moz-align-items: center;
  -ms-align-items: center;
  -o-align-items: center;
  align-items: center;
  -ms-flex-align: center;
  margin-top: 1.5rem;
}

.social-sharing ul {
  margin-bottom: 0;
}

.social-sharing li {
  box-shadow: 2px 2px 11px 0 rgba(0,0,0,.1);
  height: 2.5rem;
  width: 2.5rem;
  border-radius: 50%;
  display: inline-block;
  background-color: #fff;
  background-repeat: no-repeat;
  background-size: 2rem 2rem;
  background-position: .25rem .25rem;
  cursor: pointer;
  margin-left: .5rem;
}

.social-sharing li a {
  display: block;
  width: 100%;
  height: 100%;
  white-space: nowrap;
  text-indent: 100%;
  overflow: hidden;
}

.social-sharing li a:hover {
  color: transparent;
}

.products-selection {
  margin-bottom: 1.25rem;
}

.products-selection .title {
  color: #878787;
}

#blockcart-modal .cart-content .btn {
  margin-bottom: .625rem;
}

@media (max-width:991px) {
  .product-cover img {
    width: 100%;
  }

  #product-modal .modal-content .modal-body {
    -webkit-box-orient: vertical;
    box-orient: vertical;
    -webkit-box-direction: normal;
    box-direction: normal;
    -moz-flex-direction: column;
    flex-direction: column;
    -ms-flex-direction: column;
    margin-left: 0;
  }

  #product-modal .modal-content .modal-body img.product-cover-modal {
    width: 100%;
  }

  #product-modal .modal-content .modal-body .arrows {
    display: none;
  }

  #product-modal .modal-content .modal-body .image-caption {
    width: 100%;
  }

  #blockcart-modal .modal-body {
    padding: 1.875rem;
  }
}

@media (max-width:767px) {
  #blockcart-modal .divide-right {
    border-right: none;
  }

  #blockcart-modal .modal-body {
    padding: 1rem;
  }
}

.cart-grid {
  margin-bottom: 1rem;
}

.cart-items {
  margin-bottom: 0;
}

.cart-item {
  padding: 1rem 0;
}

.cart-summary-line {
  clear: both;
}

.cart-summary-line:after {
  content: "";
  display: table;
  clear: both;
}

.cart-summary-line .label {
  padding-left: 0;
  font-weight: 400;
  white-space: inherit;
}

.cart-summary-line .value {
  color: #414141;
  float: right;
}

.cart-summary-line.cart-summary-subtotals .label,.cart-summary-line.cart-summary-subtotals .value {
  font-weight: 400;
}

.cart-grid-body {
  margin-bottom: .75rem;
}

.cart-grid-body a.label:hover {
  color: #2fb5d2;
}

.cart-grid-body .card-block {
  padding: 1rem;
}

.cart-grid-body .card-block h1 {
  margin-bottom: 0;
}

.cart-grid-body hr {
  margin: 0;
}

.cart-grid-body .cart-overview {
  padding: 1rem;
}

.cart-grid-right hr {
  margin: 0;
}

.cart-grid-right .promo-discounts {
  margin-bottom: 0;
}

.cart-grid-right .promo-discounts .cart-summary-line .label {
  color: #878787;
}

.cart-grid-right .promo-discounts .cart-summary-line .label .code {
  text-decoration: underline;
  cursor: pointer;
}

.block-promo .promo-code {
  padding: 1.6rem;
  background: #ebebeb;
}

.block-promo .promo-code .alert-danger {
  position: relative;
  margin-top: 1.25rem;
  background: #ff4c4c;
  color: #fff;
  display: none;
}

.block-promo .promo-code .alert-danger:after {
  bottom: 100%;
  left: 10%;
  border: solid transparent;
  content: " ";
  height: 0;
  width: 0;
  position: absolute;
  pointer-events: none;
  border-bottom-color: #ff4c4c;
  border-width: 10px;
  margin-left: -10px;
}

.block-promo .promo-input {
  color: #414141;
  border: 1px solid #acaaa6;
  height: 2.5rem;
  text-indent: .625rem;
  width: 60%;
}

.block-promo .promo-input+button {
  margin-top: -4px;
  text-transform: capitalize;
}

.block-promo .cart-summary-line .label,.block-promo .promo-name {
  color: #ff9a52;
  font-weight: 600;
}

.block-promo .cart-summary-line .label a,.block-promo .promo-name a {
  font-weight: 400;
  color: #414141;
  display: inline-block;
}

.block-promo .promo-code-button {
  padding-left: 1.25rem;
  margin-bottom: 1.25rem;
  display: inline-block;
}

.block-promo.promo-highlighted {
  padding: 1.25rem;
  padding-bottom: 0;
  margin-bottom: 0;
}

.product-line-grid-left img {
  max-width: 100%;
}

.product-line-grid-body>.product-line-info>.label {
  padding: 0;
  line-height: inherit;
  text-align: left;
  white-space: inherit;
}

.product-line-grid-body>.product-line-info>.out-of-stock {
  color: red;
}

.product-line-grid-body>.product-line-info>.available {
  color: #4cbb6c;
}

.product-line-grid-body>.product-line-info>.unit-price-cart {
  padding-left: .3125rem;
  font-size: .875rem;
  color: #878787;
}

.product-line-grid-right .bootstrap-touchspin {
  width: 4.25rem;
  float: left;
  box-shadow: 2px 2px 3px 0 rgba(0,0,0,.15);
}

.product-line-grid-right .bootstrap-touchspin>.form-control,.product-line-grid-right .bootstrap-touchspin>.input-group {
  color: #414141;
  background-color: #fff;
  height: 2.5rem;
  padding: .175rem .5rem;
  width: 3rem;
}

.product-line-grid-right .bootstrap-touchspin>.input-group-btn-vertical {
  width: auto;
}

.product-line-grid-right .cart-line-product-actions,.product-line-grid-right .product-price {
  color: #414141;
  line-height: 36px;
}

.product-line-grid-right .cart-line-product-actions .remove-from-cart,.product-line-grid-right .product-price .remove-from-cart {
  color: #414141;
  display: inline-block;
  margin-top: .3125rem;
}

@media (max-width:767px) {
  .product-line-grid-body {
    margin-bottom: 1rem;
  }
}

@media (max-width:543px) {
  .cart-items {
    padding: 1rem 0;
  }

  .cart-item {
    border-bottom: 1px solid #ebebeb;
  }

  .cart-item:last-child {
    border-bottom: 0;
  }

  .cart-grid-body .cart-overview {
    padding: 0;
  }

  .cart-grid-body .no-items {
    padding: 1rem;
    display: inline-block;
  }

  .product-line-grid-left {
    padding-right: 0!important;
  }
}

@media (max-width:360px) {
  .product-line-grid-right .price,.product-line-grid-right .qty {
    width: 100%;
  }
}

#block-reassurance {
  margin-top: 2rem;
}

#block-reassurance img {
  opacity: .7;
  width: 1.5625rem;
  margin-right: .625rem;
}

#block-reassurance li {
  border-bottom: 1px solid rgba(0,0,0,.1);
}

#block-reassurance li:last-child {
  border: 0;
}

#block-reassurance li .block-reassurance-item {
  padding: 1rem 1.5rem;
}

#product #block-reassurance {
  box-shadow: 2px 2px 11px 0 rgba(0,0,0,.1);
  background: #fff;
}

#product #block-reassurance span {
  font-weight: 700;
}

.quickview .modal-dialog {
  width: calc(100% - 30px);
  max-width: 64rem;
}

.quickview .modal-content {
  background: #ebebeb;
  min-height: 28.125rem;
}

.quickview .modal-header {
  border: none;
  padding: .625rem;
}

.quickview .modal-body {
  min-height: 23.75rem;
}

.quickview .modal-footer {
  border-top: 1px solid hsla(40,3%,66%,.3);
}

.quickview .layer {
  display: none;
}

.quickview .product-cover img {
  width: 95%;
}

.quickview .images-container {
  display: -webkit-box;
  display: -moz-box;
  display: box;
  display: -moz-flex;
  display: -ms-flexbox;
  -js-display: flex;
  display: flex;
  z-index: 1;
  min-height: 21.875rem;
}

.quickview .images-container .product-images>li.thumb-container>.thumb {
  width: 4.9375rem;
  margin-bottom: .8125rem;
  background: #fff;
}

.quickview .mask {
  width: 35%;
  height: 22.5rem;
  overflow: hidden;
  margin-left: .625rem;
}

.quickview .arrows {
  position: absolute;
  top: 0;
  height: 22.5rem;
  right: 5rem;
  z-index: 0;
}

.quickview .arrows .arrow-up {
  margin-top: -3.125rem;
  cursor: pointer;
  opacity: .2;
}

.quickview .arrows .arrow-down {
  position: absolute;
  bottom: -1.875rem;
  cursor: pointer;
}

.quickview .social-sharing {
  margin-top: 0;
  margin-left: 2.5rem;
}

#stores .page-stores {
  width: 85%;
  margin: 0 auto;
}

#stores .page-stores .store-item {
  padding-left: .75rem;
  padding-right: .75rem;
}

#stores .page-stores .store-picture img {
  max-width: 100%;
}

#stores .page-stores .store-item-container {
  display: -webkit-box;
  display: -moz-box;
  display: box;
  display: -moz-flex;
  display: -ms-flexbox;
  -js-display: flex;
  display: flex;
  -webkit-box-pack: distribute;
  box-pack: distribute;
  -moz-justify-content: space-around;
  -ms-justify-content: space-around;
  -o-justify-content: space-around;
  justify-content: space-around;
  -ms-flex-pack: distribute;
  -webkit-box-align: center;
  box-align: center;
  -moz-align-items: center;
  -ms-align-items: center;
  -o-align-items: center;
  align-items: center;
  -ms-flex-align: center;
  padding: 1.875rem 0;
}

#stores .page-stores .store-item-container ul {
  margin-bottom: 0;
  font-size: .9375rem;
}

#stores .page-stores .store-item-container .divide-left {
  border-left: 1px solid #ebebeb;
}

#stores .page-stores .store-item-container .divide-left tr {
  height: 1.5625rem;
}

#stores .page-stores .store-item-container .divide-left td {
  padding-left: .375rem;
}

#stores .page-stores .store-item-container .divide-left th {
  text-align: right;
}

#stores .page-stores .store-item-container .store-description {
  font-size: 1rem;
}

#stores .page-stores .store-item-footer {
  margin-top: .5rem;
  padding-top: .5rem;
  display: -webkit-box;
  display: -moz-box;
  display: box;
  display: -moz-flex;
  display: -ms-flexbox;
  -js-display: flex;
  display: flex;
  -webkit-box-pack: distribute;
  box-pack: distribute;
  -moz-justify-content: space-around;
  -ms-justify-content: space-around;
  -o-justify-content: space-around;
  justify-content: space-around;
  -ms-flex-pack: distribute;
}

#stores .page-stores .store-item-footer.divide-top {
  border-top: 1px solid #ebebeb;
}

#stores .page-stores .store-item-footer div:first-child {
  -webkit-box-flex: 0;
  box-flex: 0;
  -moz-flex: 0 0 65%;
  -ms-flex: 0 0 65%;
  flex: 0 0 65%;
}

#stores .page-stores .store-item-footer i.material-icons {
  margin-right: .625rem;
  color: #acaaa6;
  font-size: 1rem;
}

#stores .page-stores .store-item-footer li {
  margin-bottom: .625rem;
}

@media (max-width:767px) {
  #stores .page-stores {
    width: 100%;
  }

  #stores .page-stores .store-item-container {
    padding: 1rem 0;
  }
}

@media (max-width:543px) {
  #stores .page-stores .store-item-container {
    display: block;
  }

  #stores .page-stores .store-item-container .divide-left {
    border-left: none;
  }

  #stores .page-stores .store-item-container .store-description a,#stores .page-stores .store-item-container .store-description address {
    margin-bottom: .5rem;
  }

  #stores .page-stores .store-item-footer {
    display: block;
  }

  #stores .page-stores .store-item-footer.divide-top {
    border-top: 1px solid #ebebeb;
  }

  #stores .page-stores .store-item-footer li {
    margin-bottom: .625rem;
  }

  #stores .page-stores .store-item-footer .card-block {
    padding: .75rem .75rem 0;
  }
}

.block_newsletter {
  font-size: .875rem;
  margin-bottom: .625rem;
}

.block_newsletter form {
  position: relative;
}

.block_newsletter form input[type=text] {
  border: none;
  padding: 10px;
  min-width: 255px;
  background: #ebebeb;
  color: #acaaa6;
}

.block_newsletter form input[type=text]:focus {
  outline: 3px solid #2fb5d2;
  color: #414141;
  background: #fff;
}

.block_newsletter form input[type=text]:focus+button .search {
  color: #2fb5d2;
}

.block_newsletter form input[type=text]::-webkit-input-placeholder {
  color: hsla(40,3%,66%,.5);
  text-indent: .625rem;
}

.block_newsletter form input[type=text]:-moz-placeholder,.block_newsletter form input[type=text]::-moz-placeholder {
  color: hsla(40,3%,66%,.5);
  text-indent: .625rem;
}

.block_newsletter form input[type=text]:-ms-input-placeholder {
  color: hsla(40,3%,66%,.5);
  text-indent: .625rem;
}

.block_newsletter form button[type=submit] {
  position: absolute;
  background: none;
  border: none;
  bottom: .3125rem;
  right: .125rem;
  color: #878787;
}

.block_newsletter form button[type=submit] .search:hover {
  color: #2fb5d2;
}

.block_newsletter p {
  padding-top: .625rem;
}

.block_newsletter form .input-wrapper {
  overflow: hidden;
}

.block_newsletter form input[type=text] {
  padding: 11px;
  width: 100%;
}

.block_newsletter form input[type=text]:focus {
  border: 3px solid #2fb5d2;
  padding: 8px 8px 9px;
  outline: 0;
}

.block_newsletter form input {
  height: 42px;
}

.block-contact {
  border-left: 2px solid #ebebeb;
  padding-left: 3rem;
  color: #acaaa6;
}

.block-contact .block-contact-title,.linklist .blockcms-title a {
  color: #414141;
}

.account-list a {
  color: #acaaa6;
}

.account-list a:hover {
  color: #2fb5d2;
}

.block-contact-title,.blockcms-title,.myaccount-title,.myaccount-title a {
  font-weight: 700;
  font-size: 1rem;
}

.block-social {
  text-align: right;
}

.block-social li {
  height: 2.5rem;
  width: 2.5rem;
  background-color: #ebebeb;
  background-repeat: no-repeat;
  display: inline-block;
  margin: .125rem;
  cursor: pointer;
}

.block-social li:hover {
  background-color: #2fb5d2;
}

.block-social li a {
  display: block;
  height: 100%;
  white-space: nowrap;
  text-indent: 100%;
  overflow: hidden;
}

.block-social li a:hover {
  color: transparent;
}

.facebook {
  background-image: url(../css/3935e107ea61866e60d7946dc6a962f1.svg);
}

.facebook:before {
  content: "";
  background-image: url(../css/8b05d51ede908907d65695558974d86f.svg);
}

.facebook.icon-gray {
  background-image: url(../css/d3fbae74a276a9f6cf1d6241f29b61a3.svg);
}

.facebook.icon-gray:hover {
  background-image: url(../css/8b05d51ede908907d65695558974d86f.svg);
}

.twitter {
  background-image: url(../css/a67175d1ea11389d9107bd8c08f9d7d7.svg);
}

.twitter:before {
  content: "";
  background-image: url(../css/ffddcb3736980b23405b31142a324b62.svg);
}

.twitter.icon-gray {
  background-image: url(../css/d1a435fd2571e67858a31ee954b52278.svg);
}

.twitter.icon-gray:hover {
  background-image: url(../css/ffddcb3736980b23405b31142a324b62.svg);
}

.rss {
  background-image: url(../css/cf2f3c1d5c7cb02c29f61964313148e1.svg);
}

.youtube {
  background-image: url(../css/22c0528acb6d9cd5bf4c8f96381bc05c.svg);
}

.googleplus {
  background-image: url(../css/36bff72dcba3098b4b70b482b22c29ab.svg);
}

.googleplus:before {
  content: "";
  background-image: url(../css/c1a65805f759901a39d10eb854c1dcf2.svg);
}

.googleplus.icon-gray {
  background-image: url(../css/7c24d4275efcbe8891f78378b7c808e0.svg);
}

.googleplus.icon-gray:hover {
  background-image: url(../css/c1a65805f759901a39d10eb854c1dcf2.svg);
}

#block_myaccount_infos .myaccount-title a {
  color: #414141;
}

.pinterest {
  background-image: url(../css/afb2ed6d67613a724a420a39b4fe5b0d.svg);
}

.pinterest:before {
  content: "";
  background-image: url(../css/b1db819132e64a3e01911a1413c33acf.svg);
}

.pinterest.icon-gray {
  background-image: url(../css/7988be8b63edf9c4accebf94d5db7927.svg);
}

.pinterest.icon-gray:hover {
  background-image: url(../css/b1db819132e64a3e01911a1413c33acf.svg);
}

.vimeo {
  background-image: url(../css/f255af0bbbe837e79f7821827f9c6f10.svg);
}

.instagram {
  background-image: url(../css/0266b05265f317a7409560b751cd61e8.svg);
}

.footer-container {
  margin-top: 1.25rem;
  padding-top: 1.25rem;
  overflow: hidden;
  box-shadow: 2px 2px 11px 0 rgba(0,0,0,.3);
}

.footer-container li {
  margin-bottom: .3125rem;
}

.footer-container li a {
  color: #878787;
  cursor: pointer;
  font-size: .875rem;
}

.footer-container li a:hover {
  color: #2fb5d2;
}

.footer-container .links .collapse {
  display: inherit;
}

@media (max-width:767px) {
  .block_newsletter {
    padding-bottom: .625rem;
    border-bottom: 1px solid #f6f6f6;
  }

  .footer-container {
    box-shadow: none;
    margin-top: 0;
  }

  .footer-container .wrapper {
    padding-left: 0!important;
    padding-right: 0!important;
  }

  .footer-container .links .h3 {
    line-height: 1.5;
    font-size: 1rem;
  }

  .footer-container .links .title {
    padding: .625rem;
    border-bottom: 1px solid #f6f6f6;
    cursor: pointer;
  }

  .footer-container .links .title .collapse-icons .remove,.footer-container .links .title[aria-expanded=true] .collapse-icons .add {
    display: none;
  }

  .footer-container .links .title[aria-expanded=true] .collapse-icons .remove {
    display: block;
  }

  .footer-container .links .navbar-toggler {
    display: inline-block;
    padding: 0;
  }

  .footer-container .links .collapse {
    display: none;
  }

  .footer-container .links .collapse.in {
    display: block;
  }

  .footer-container .links ul {
    background-color: #f6f6f6;
    margin-bottom: 0;
  }

  .footer-container .links ul>li {
    padding: .625rem;
    border-bottom: 1px solid #fff;
    font-weight: 700;
  }

  .footer-container .links ul>li a {
    color: #414141;
  }
}

@media (max-width:991px) {
  .block-social {
    text-align: center;
  }

  .block-contact {
    padding-left: 1.5rem;
  }
}

.contact-rich {
  color: #878787;
  margin-bottom: 2rem;
  word-wrap: break-word;
}

.contact-rich h4 {
  text-transform: uppercase;
  color: #414141;
  margin-bottom: 2rem;
}

.contact-rich .block {
  height: auto;
  overflow: hidden;
}

.contact-rich .block .icon {
  float: left;
  width: 3.5rem;
}

.contact-rich .block .icon i {
  font-size: 2rem;
}

.contact-rich .block .data {
  color: #414141;
  font-size: .875rem;
  width: auto;
  overflow: hidden;
}

.contact-rich .block .data.email {
  padding-top: .375rem;
}

.contact-form {
  background: #fff;
  padding: 1rem;
  color: #878787;
  width: 100%;
}

.contact-form h3 {
  text-transform: uppercase;
  color: #414141;
}

#pagenotfound #main .page-header,#products #main .page-header {
  margin: 2rem 0 3rem;
}

#pagenotfound #main .page-content,#products #main .page-content {
  margin-bottom: 10rem;
}

#pagenotfound .page-not-found,#products .page-not-found {
  box-shadow: 2px 2px 11px 0 rgba(0,0,0,.1);
  background: #fff;
  padding: 1rem;
  font-size: .875rem;
  color: #878787;
  max-width: 570px;
  margin: 0 auto;
}

#pagenotfound .page-not-found h4,#products .page-not-found h4 {
  font-size: 1rem;
  font-weight: 700;
  margin: .5rem 0 1rem;
}

#pagenotfound .page-not-found .search-widget,#products .page-not-found .search-widget {
  float: none;
}

#pagenotfound .page-not-found .search-widget input,#products .page-not-found .search-widget input {
  width: 100%;
}

.customization-modal .modal-content {
  border-radius: 0;
  border: 1px solid #f6f6f6;
}

.customization-modal .modal-content .modal-body {
  padding-top: 0;
}

.customization-modal .modal-content .modal-body .product-customization-line {
  padding-bottom: .9375rem;
  padding-top: .9375rem;
  border-bottom: 1px solid #f6f6f6;
}

.customization-modal .modal-content .modal-body .product-customization-line .label {
  font-weight: 700;
  text-align: right;
}

.customization-modal .modal-content .modal-body .product-customization-line:last-child {
  padding-bottom: 0;
  border-bottom: 0;
}

.sitemap-title {
  text-transform: capitalize;
}

.sitemap {
  margin-top: .9375rem;
}

.sitemap h2 {
  color: #414141;
  text-transform: uppercase;
  font-size: 1.1rem;
  font-weight: 600;
  border-bottom: 1px solid #acaaa6;
  margin-left: -15px;
  width: 100%;
  height: 35px;
}

.sitemap ul {
  margin-left: -15px;
  margin-top: 20px;
}

.sitemap ul.nested {
  margin-left: 20px;
}

.sitemap ul li {
  font-size: .9rem;
  margin-bottom: 1rem;
}

@media (max-width:543px) {
  .sitemap {
    margin-top: 0;
  }
}

#header {
  background: #fff;
  color: #acaaa6;
}

#header .logo {
  max-width: 100%;
}

#header a {
  color: #414141;
}

#header a:hover {
  text-decoration: none;
  color: #2fb5d2;
}

#header .header-nav {
  border-bottom: 2px solid #ebebeb;
  max-height: 50px;
  margin-bottom: 30px;
}

#header .header-nav #menu-icon {
  vertical-align: middle;
  cursor: pointer;
  margin-left: 1rem;
}

#header .header-nav #menu-icon .material-icons {
  line-height: 50px;
}

#header .header-nav .right-nav {
  display: -webkit-box;
  display: -moz-box;
  display: box;
  display: -moz-flex;
  display: -ms-flexbox;
  -js-display: flex;
  display: flex;
  -webkit-box-lines: single;
  -moz-box-lines: single;
  box-lines: single;
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap;
  -webkit-box-pack: end;
  box-pack: end;
  -moz-justify-content: flex-end;
  -ms-justify-content: flex-end;
  -o-justify-content: flex-end;
  justify-content: flex-end;
  -ms-flex-pack: end;
}

#header .header-nav .currency-selector {
  margin-top: .9375rem;
  margin-left: .9375rem;
  white-space: nowrap;
}

#header .header-nav .user-info {
  margin-left: 2.5rem;
  margin-top: .9375rem;
  text-align: right;
  white-space: nowrap;
}

#header .header-nav .user-info .account {
  margin-left: .625rem;
}

#header .header-nav .language-selector {
  margin-top: .9375rem;
  white-space: nowrap;
}

#header .header-nav .cart-preview.active {
  background: #2fb5d2;
}

#header .header-nav .cart-preview.active a {
  color: #fff;
}

#header .header-nav .cart-preview.active i {
  color: hsla(0,0%,100%,.6);
}

#header .header-nav .cart-preview .shopping-cart {
  vertical-align: middle;
}

#header .header-nav .cart-preview .body {
  display: none;
}

#header .header-nav .blockcart {
  background: #ebebeb;
  height: 3rem;
  padding: .75rem;
  margin-left: .9375rem;
  text-align: center;
  white-space: nowrap;
}

#header .header-nav .blockcart a {
  color: #acaaa6;
}

#header .header-nav .blockcart a:hover {
  color: #2fb5d2;
}

#header .header-nav .blockcart.active a:hover {
  color: #fff;
}

#header .header-nav .blockcart .header {
  margin-top: .125rem;
}

#header .header-nav #contact-link {
  margin-top: .9375rem;
}

#header .header-nav .material-icons {
  line-height: inherit;
}

#header .header-nav .material-icons.expand-more {
  margin-left: -.375rem;
}

#header .header-top {
  padding-bottom: 1.25rem;
}

#header .header-top>.container {
  position: relative;
}

#header .header-top .menu {
  padding-left: 15px;
  margin-bottom: .375rem;
}

#header .header-top .menu>ul>li {
  float: left;
}

#header .header-top .position-static {
  position: static;
}

#header .header-top a[data-depth="0"] {
  color: #acaaa6;
  text-transform: uppercase;
}

#header .top-menu-link {
  margin-left: 1.25rem;
}

.popover {
  font-family: inherit;
}

#wrapper {
  background: #ebebeb;
  box-shadow: inset 0 2px 5px 0 rgba(0,0,0,.11);
  padding-top: 1.5625rem;
}

#wrapper .banner {
  margin-bottom: 1.5rem;
  display: block;
}

#wrapper .banner img {
  box-shadow: 1px 1px 7px 0 rgba(0,0,0,.15);
}

#wrapper .breadcrumb {
  background: transparent;
  padding: 0;
}

#wrapper .breadcrumb[data-depth="1"] {
  display: none;
}

#wrapper .breadcrumb ol {
  padding-left: 0;
  margin-bottom: 0;
}

#wrapper .breadcrumb li {
  display: inline;
}

#wrapper .breadcrumb li:after {
  content: "/";
  color: #878787;
  margin: .3125em;
}

#wrapper .breadcrumb li:last-child {
  content: "/";
  color: #878787;
  margin: 0;
}

#wrapper .breadcrumb li:last-child:after {
  content: "";
}

#wrapper .breadcrumb li a {
  color: #414141;
}

#main .page-content,#main .page-header {
  margin-bottom: 1.5625rem;
}

#main .page-content h6 {
  margin-bottom: 1.125rem;
}

#main .page-content #notifications {
  margin-left: -15px;
  margin-right: -15px;
}

#main .page-footer {
  margin-bottom: 1.5625rem;
}

#notifications ul {
  margin-bottom: 0;
}

#footer {
  padding-top: 2.5rem;
}

@media (max-width:767px) {
  #wrapper {
    box-shadow: none;
  }

  #checkout-cart-summary {
    float: none;
    width: 100%;
    margin-top: 1rem;
  }

  #header {
    background: #ebebeb;
  }

  #header .header-nav {
    background: #fff;
    margin-bottom: .625rem;
    color: #414141;
  }

  #header .header-nav .top-logo {
    line-height: 50px;
    vertical-align: middle;
    width: 200px;
    margin: 0 auto;
  }

  #header .header-nav .top-logo a img {
    max-height: 50px;
    max-width: 100%;
  }

  #header .header-nav .right-nav {
    -webkit-box-orient: vertical;
    box-orient: vertical;
    -webkit-box-direction: normal;
    box-direction: normal;
    -moz-flex-direction: column;
    flex-direction: column;
    -ms-flex-direction: column;
  }

  #header .header-nav .user-info {
    text-align: left;
    margin-left: 0;
  }

  #header .header-nav .user-info .logged {
    color: #2fb5d2;
  }

  #header .header-nav .blockcart {
    margin-left: 0;
    background: inherit;
  }

  #header .header-nav .blockcart.active {
    margin-left: .5rem;
  }

  #header .header-nav .blockcart.inactive .cart-products-count {
    display: none;
  }

  #header .header-top {
    background: #ebebeb;
    padding-bottom: 0;
  }

  #header .header-top a[data-depth="0"] {
    color: #414141;
  }

  section.checkout-step {
    width: 100%;
  }

  .default-input {
    min-width: 100%;
  }

  label {
    clear: both;
  }

  #products .product-miniature,.featured-products .product-miniature {
    margin: 0 auto;
  }

  .block-contact {
    padding-left: .9375rem;
    border: none;
  }

  .dropdown-item,.menu {
    padding-left: 0;
  }

  #footer {
    padding-top: .5rem;
  }
}

@media (max-width:991px) {
  .container {
    max-width: 100%;
  }

  #header .logo {
    width: auto;
  }

  #products .product-miniature,.featured-products .product-miniature {
    margin: 0 auto;
  }

  .sub-menu {
    left: 0;
    min-width: 100%;
  }

  #blockcart-modal .product-image {
    width: 100%;
    display: block;
    max-width: 250px;
    margin: 0 auto .9375rem;
  }

  #blockcart-modal .cart-content {
    padding-left: 0;
  }

  #blockcart-modal .product-name,#product-availability {
    margin-top: .625rem;
  }

  #search_filters .facet .facet-label {
    text-align: left;
  }

  .block-category .category-cover {
    position: relative;
    text-align: center;
  }

  .block-category {
    padding-bottom: 0;
  }
}

@media (max-width:543px) {
  #content-wrapper,#left-column {
    padding-left: 0!important;
    padding-right: 0!important;
  }
}

  
`
