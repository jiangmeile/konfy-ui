(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{239:function(t,a,s){"use strict";s.r(a);var n={props:["slot-key"],mounted:function(){this.$nextTick(function(){this.$vuepress.$emit("AsyncMarkdownContentMounted",this.slotKey)})}},e=s(6),v=Object(e.a)(n,function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.slotKey}},[s("h1",{attrs:{id:"vue-input-date"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue-input-date","aria-hidden":"true"}},[t._v("#")]),t._v(" vue-input-date")]),t._v(" "),s("Badge",{attrs:{text:t.$page.frontmatter.version}}),t._v(" "),s("ul",[s("li",[t._v("very versatile date input, supporting date and time")]),t._v(" "),s("li",[t._v("based on native javascript date features, no dependencies")]),t._v(" "),s("li",[t._v("works great in mobile")]),t._v(" "),s("li",[t._v("no date picker attached, but can easily work with one")]),t._v(" "),s("li",[t._v("customize order, appearance, and separators of every date element")]),t._v(" "),s("li",[t._v("slots available before every date element")]),t._v(" "),s("li",[t._v("locale")]),t._v(" "),s("li",[t._v("possible to force timezone")]),t._v(" "),s("li",[t._v("Use ← → to move between date elements, ↑ ↓ to increase or decrease")]),t._v(" "),s("li",[t._v("Auto-complete and auto-correct on typing")]),t._v(" "),s("li",[t._v("custom validation functions accepted")])]),t._v(" "),s("vp-holder",[s("vue-input-date",{attrs:{label:"Default date input:"}}),t._v(" "),s("vue-input-date",{attrs:{label:"With validator (>= today)",required:"","clear-button":"",format:"d/m/y",validator:function(t){return new Date(t).setHours(0,0,0,0)>=(new Date).setHours(0,0,0,0)}}}),t._v(" "),s("vue-input-date",{attrs:{label:"Timezone, Slots for year and hour, clear button","clear-button":"",format:"y/MM/d hh:ii a 5 z",hour12:""}},[s("span",{staticClass:"date label",attrs:{slot:"year"},slot:"year"},[t._v("📆")]),s("span",{staticClass:"date label",attrs:{slot:"hour"},slot:"hour"},[t._v("   🕰")])]),t._v(" "),s("vue-input-date",{attrs:{label:"Russian Locale:",locale:"ru-RU",format:"y/MMM/d"}}),t._v(" "),s("vue-input-date",{attrs:{label:"Force timezone:","clear-button":"",format:"y/MM/d 20 hh:ii a 20 z",hour12:"",tz:"Europe/Madrid"}}),t._v(" "),s("vue-input-date",{attrs:{label:"12H clock:",format:"hh:ii a",hour12:""}}),t._v(" "),s("vue-input-date",{attrs:{label:"With weekday:",format:"y/MMM/d 📆 WWW"}}),t._v(" "),s("vue-input-date",{attrs:{label:"No initial input:",date:null}}),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("vue-input-date")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("label")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("Default date input:"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("vue-input-date")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("label")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("With validator (>= today)"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("required")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("clear-button")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("format")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("m/d/y"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v(":validator")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("(d) => new Date(d).setHours(0,0,0,0) >= new Date().setHours(0,0,0,0)"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("vue-input-date")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("label")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("Timezone, Slots for year and hour, clear button"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("clear-button")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("format")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("y/MM/d hh:ii a 5 z"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("hour12")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("span")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("slot")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("year"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("📆"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("span")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("span")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("slot")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("hour"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("   🕰"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("span")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("vue-input-date")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("vue-input-date")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("label")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("Russian Locale:"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("locale")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("ru-RU"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("format")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("y/MMM/d"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("vue-input-date")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("label")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("Force timezone:"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("clear-button")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("format")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("y/MM/d 20 hh:ii a 20 z"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("hour12")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("tz")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("Europe/Madrid"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("vue-input-date")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("label")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("12H clock:"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("format")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("hh:ii a"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("hour12")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("vue-input-date")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("label")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("With weekday:"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("format")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("y/MMM/d  📆 WWW"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("vue-input-date")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("label")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("No initial input:"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v(":date")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("null"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])])],1),t._v(" "),s("h2",{attrs:{id:"props"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#props","aria-hidden":"true"}},[t._v("#")]),t._v(" props")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("property")]),t._v(" "),s("th",[t._v("type")]),t._v(" "),s("th",[t._v("default")]),t._v(" "),s("th",[t._v("comment")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("name")])]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("name of the input (for serialization etc)")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("label")])]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("Input label")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("required")])]),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("is required")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("disabled")])]),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("is disabled")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("clearButton")])]),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("should include a clear button")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("tz")])]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("Force a specific timezone. You can use "),s("a",{attrs:{href:"https://www.iana.org/time-zones",target:"_blank",rel:"noopener noreferrer"}},[t._v("IANA time zone database"),s("OutboundLink")],1),t._v(" for reference. E.g: "),s("code",[t._v("Europe/London")]),t._v(", "),s("code",[t._v("America/New_York")])])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("locale")])]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[s("code",[t._v("en-EN")])]),t._v(" "),s("td",[t._v("For the general form and interpretation of the "),s("code",[t._v("locale")]),t._v(" argument, see the MDN "),s("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#Locale_identification_and_negotiation",target:"_blank",rel:"noopener noreferrer"}},[t._v("Intl page"),s("OutboundLink")],1),t._v(".")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("hour12")])]),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td",[s("code",[t._v("false")])]),t._v(" "),s("td",[t._v("Should use a 12 hour clock instead of 24.")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("date")])]),t._v(" "),s("td",[t._v("Date")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("Initial date")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("validator")])]),t._v(" "),s("td",[t._v("Function")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("takes current input value ("),s("code",[t._v("Date")]),t._v(" object) as an argument. Should return "),s("code",[t._v("true")]),t._v(" or "),s("code",[t._v("false")])])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("format")])]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[s("code",[t._v("'y/mm/d 20 hh:ii:ss’")])]),t._v(" "),s("td",[t._v("Format of date input. You can use date tokens to represent fields. Everything else will be interpreted as separators. if a separator is a number, it will mean spacing in pixels."),s("br"),t._v("For full list of date tokens see "),s("a",{attrs:{href:"#format-prop-date-tokens"}},[t._v("table below")]),t._v(".")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("placeholders")])]),t._v(" "),s("td",[t._v("Object")]),t._v(" "),s("td",[t._v("See "),s("code",[t._v("placeholders")]),t._v(" prop table")]),t._v(" "),s("td",[t._v("Text placeholders for each field. Key represents field name, value is a placeholder string. "),s("br"),t._v("See "),s("code",[t._v("placeholders")]),t._v(" prop table for available and default values.")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("errors")])]),t._v(" "),s("td",[t._v("Object")]),t._v(" "),s("td",[t._v("See "),s("code",[t._v("errors")]),t._v(" prop table")]),t._v(" "),s("td",[t._v("Object of error strings. Keys: "),s("code",[t._v("invalid")]),t._v(", "),s("code",[t._v("required")]),t._v(", "),s("code",[t._v("custom")]),t._v("."),s("br"),t._v(" See "),s("code",[t._v("errors")]),t._v(" prop table for available and default values.")])])])]),t._v(" "),s("h3",{attrs:{id:"format-prop-date-tokens"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#format-prop-date-tokens","aria-hidden":"true"}},[t._v("#")]),t._v(" "),s("code",[t._v("format")]),t._v(" prop - date tokens")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("token")]),t._v(" "),s("th",[t._v("example value")]),t._v(" "),s("th",[t._v("comment")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("y")])]),t._v(" "),s("td",[t._v("2019")]),t._v(" "),s("td",[t._v("Year full")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("yy")])]),t._v(" "),s("td",[t._v("19")]),t._v(" "),s("td",[t._v("Year 2 digits")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("m")])]),t._v(" "),s("td",[t._v("2")]),t._v(" "),s("td",[t._v("Month number")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("mm")])]),t._v(" "),s("td",[t._v("02")]),t._v(" "),s("td",[t._v("Month 2 digits")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("M")])]),t._v(" "),s("td",[t._v("F")]),t._v(" "),s("td",[t._v("Month name, first letter")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("MM")])]),t._v(" "),s("td",[t._v("Feb")]),t._v(" "),s("td",[t._v("Month name abbreviated")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("MMM")])]),t._v(" "),s("td",[t._v("February")]),t._v(" "),s("td",[t._v("Month name full")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("d")])]),t._v(" "),s("td",[t._v("3")]),t._v(" "),s("td",[t._v("Day number")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("dd")])]),t._v(" "),s("td",[t._v("03")]),t._v(" "),s("td",[t._v("Day 2 digits")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("W")])]),t._v(" "),s("td",[t._v("M")]),t._v(" "),s("td",[t._v("Weekday name, first letter")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("WW")])]),t._v(" "),s("td",[t._v("Mon")]),t._v(" "),s("td",[t._v("Weekday name abbreviated")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("WWW")])]),t._v(" "),s("td",[t._v("Monday")]),t._v(" "),s("td",[t._v("Weekday name full")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("h")])]),t._v(" "),s("td",[t._v("9")]),t._v(" "),s("td",[t._v("Hour number")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("hh")])]),t._v(" "),s("td",[t._v("09")]),t._v(" "),s("td",[t._v("Hour 2 digits")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("i")])]),t._v(" "),s("td",[t._v("5")]),t._v(" "),s("td",[t._v("Minute number")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("ii")])]),t._v(" "),s("td",[t._v("05")]),t._v(" "),s("td",[t._v("Minute 2 digits")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("s")])]),t._v(" "),s("td",[t._v("3")]),t._v(" "),s("td",[t._v("Second number")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("ss")])]),t._v(" "),s("td",[t._v("03")]),t._v(" "),s("td",[t._v("Second 2 digits")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("a")])]),t._v(" "),s("td",[t._v("AM")]),t._v(" "),s("td",[t._v("Meridiem")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("z")])]),t._v(" "),s("td",[t._v("Europe/Paris")]),t._v(" "),s("td",[t._v("Timezone")])])])]),t._v(" "),s("h3",{attrs:{id:"placeholders-prop"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#placeholders-prop","aria-hidden":"true"}},[t._v("#")]),t._v(" "),s("code",[t._v("placeholders")]),t._v(" prop")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("key")]),t._v(" "),s("th",[t._v("default")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("day")])]),t._v(" "),s("td",[s("code",[t._v("'Day'")])])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("weekday")])]),t._v(" "),s("td",[s("code",[t._v("null")])])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("month")])]),t._v(" "),s("td",[s("code",[t._v("'Month'")])])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("year")])]),t._v(" "),s("td",[s("code",[t._v("'Year'")])])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("hour")])]),t._v(" "),s("td",[s("code",[t._v("'H'")])])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("minute")])]),t._v(" "),s("td",[s("code",[t._v("'m'")])])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("second")])]),t._v(" "),s("td",[s("code",[t._v("'s'")])])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("am")])]),t._v(" "),s("td",[s("code",[t._v("null")])])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("timezone")])]),t._v(" "),s("td",[s("code",[t._v("null")])])])])]),t._v(" "),s("h2",{attrs:{id:"data"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#data","aria-hidden":"true"}},[t._v("#")]),t._v(" data")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("property")]),t._v(" "),s("th",[t._v("type")]),t._v(" "),s("th",[t._v("comment")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("value")])]),t._v(" "),s("td",[t._v("Date or null")]),t._v(" "),s("td",[t._v("Current date value")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("valid")])]),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td",[t._v("Is valid")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("selected")])]),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td",[t._v("Is input selected")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("input")])]),t._v(" "),s("td",[t._v("Object")]),t._v(" "),s("td",[t._v("Object of current input fields values")])])])]),t._v(" "),s("h2",{attrs:{id:"computed"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#computed","aria-hidden":"true"}},[t._v("#")]),t._v(" computed")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("property")]),t._v(" "),s("th",[t._v("type")]),t._v(" "),s("th",[t._v("comment")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("tzOffset")])]),t._v(" "),s("td",[t._v("Int")]),t._v(" "),s("td",[t._v("timezone offset relative to UTC")])])])]),t._v(" "),s("h2",{attrs:{id:"methods"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#methods","aria-hidden":"true"}},[t._v("#")]),t._v(" methods")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("method")]),t._v(" "),s("th",[t._v("args")]),t._v(" "),s("th",[t._v("comment")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("dateAdd(key, val)")])]),t._v(" "),s("td",[s("code",[t._v("key:<String>")]),t._v(" "),s("br"),s("code",[t._v("val:<Number>")])]),t._v(" "),s("td",[t._v("Add or subtract a number from date field"),s("br"),t._v("Add 2 days: "),s("code",[t._v("dateAdd('day', 2)")]),t._v(" "),s("br"),t._v("Subtract 1 hour: "),s("code",[t._v("dateAdd(‘hour’, -1)")])])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("switchAM(v)")])]),t._v(" "),s("td",[s("code",[t._v("v: <Boolean>")])]),t._v(" "),s("td",[t._v("Switch clock to A.M. ("),s("code",[t._v("true")]),t._v(") or P.M.("),s("code",[t._v("false")]),t._v(")")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("validate()")])]),t._v(" "),s("td",[t._v("–")]),t._v(" "),s("td",[t._v("Validate")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("clear()")])]),t._v(" "),s("td",[t._v("–")]),t._v(" "),s("td",[t._v("Clear input value")])])])]),t._v(" "),s("h2",{attrs:{id:"events"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#events","aria-hidden":"true"}},[t._v("#")]),t._v(" events")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("event")]),t._v(" "),s("th",[t._v("payload")]),t._v(" "),s("th",[t._v("comment")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("change")])]),t._v(" "),s("td",[t._v("value: "),s("code",[t._v("Date")])]),t._v(" "),s("td",[t._v("on value change")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("input:focus")])]),t._v(" "),s("td",[t._v("input name: "),s("code",[t._v("String")])]),t._v(" "),s("td",[t._v("on focus of one of the input fields")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("input:blur")])]),t._v(" "),s("td",[t._v("input name: "),s("code",[t._v("String")])]),t._v(" "),s("td",[t._v("on blur of one of the input fields")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("selected")])]),t._v(" "),s("td",[t._v("is selected: "),s("code",[t._v("Boolean")])]),t._v(" "),s("td",[t._v("whether the component is selected")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("error")])]),t._v(" "),s("td",[t._v("error type: "),s("code",[t._v("String")])]),t._v(" "),s("td",[t._v("on Error")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("valid")])]),t._v(" "),s("td",[t._v("is valid: "),s("code",[t._v("Boolean")])]),t._v(" "),s("td",[t._v("on Valid status changed")])])])]),t._v(" "),s("h2",{attrs:{id:"css-variables"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#css-variables","aria-hidden":"true"}},[t._v("#")]),t._v(" css variables")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n \t"),s("span",{attrs:{class:"token property"}},[t._v("--vue-input-error-color")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" red"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),s("span",{attrs:{class:"token property"}},[t._v("--vue-input-text-color")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" black"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),s("span",{attrs:{class:"token property"}},[t._v("--vue-input-select-color")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" blue"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),s("span",{attrs:{class:"token property"}},[t._v("--vue-input-blur-color")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("rgba")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("black, .8"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),s("span",{attrs:{class:"token property"}},[t._v("--vue-input-font-family")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" system-ui, sans-serif"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),s("span",{attrs:{class:"token property"}},[t._v("--vue-input-label-font-family")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" system-ui, sans-serif"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),s("span",{attrs:{class:"token property"}},[t._v("--vue-input-background-color")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" transparent"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),s("span",{attrs:{class:"token property"}},[t._v("--vue-input-hover-background-color")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("rgba")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("black, .05"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),s("span",{attrs:{class:"token property"}},[t._v("--vue-input-focus-background-color")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("rgba")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("black, .1"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),s("span",{attrs:{class:"token property"}},[t._v("--vue-input-border-color")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("  "),s("span",{attrs:{class:"token function"}},[t._v("rgba")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("black, .5"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),s("span",{attrs:{class:"token property"}},[t._v("--vue-input-border-color-active")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("var")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("--vue-input-select-color"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),s("span",{attrs:{class:"token property"}},[t._v("--vue-input-border-color-error")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("var")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("--vue-input-error-color"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])],1)},[],!1,null,null,null);v.options.__file="vue-input-date.md";a.default=v.exports}}]);