function switchPostChart(){let e="light"===document.documentElement.getAttribute("data-theme")?"#4C4948":"rgba(255,255,255,0.7)";if(document.getElementById("posts-chart")&&postsOption)try{let t=postsOption;t.title.textStyle.color=e,t.xAxis.nameTextStyle.color=e,t.yAxis.nameTextStyle.color=e,t.xAxis.axisLabel.color=e,t.yAxis.axisLabel.color=e,t.xAxis.axisLine.lineStyle.color=e,t.yAxis.axisLine.lineStyle.color=e,t.series[0].markLine.data[0].label.color=e,postsChart.setOption(t)}catch(e){console.log(e)}if(document.getElementById("tags-chart")&&tagsOption)try{let t=tagsOption;t.title.textStyle.color=e,t.xAxis.nameTextStyle.color=e,t.yAxis.nameTextStyle.color=e,t.xAxis.axisLabel.color=e,t.yAxis.axisLabel.color=e,t.xAxis.axisLine.lineStyle.color=e,t.yAxis.axisLine.lineStyle.color=e,t.series[0].markLine.data[0].label.color=e,tagsChart.setOption(t)}catch(e){console.log(e)}if(document.getElementById("categories-chart")&&categoriesOption)try{let t=categoriesOption;t.title.textStyle.color=e,t.legend.textStyle.color=e,categoryParentFlag||(t.series[0].label.color=e),categoriesChart.setOption(t)}catch(e){console.log(e)}}function switchNightMode(){document.querySelector("body").insertAdjacentHTML("beforeend",'<div class="Cuteen_DarkSky"><div class="Cuteen_DarkPlanet"><div id="sun"></div><div id="moon"></div></div></div>'),setTimeout((function(){document.querySelector("body").classList.contains("DarkMode")?(document.querySelector("body").classList.remove("DarkMode"),localStorage.setItem("isDark","0"),document.getElementById("modeicon").setAttribute("xlink:href","#icon-moon")):(document.querySelector("body").classList.add("DarkMode"),localStorage.setItem("isDark","1"),document.getElementById("modeicon").setAttribute("xlink:href","#icon-sun")),setTimeout((function(){document.getElementsByClassName("Cuteen_DarkSky")[0].style.transition="opacity 3s",document.getElementsByClassName("Cuteen_DarkSky")[0].style.opacity="0",setTimeout((function(){document.getElementsByClassName("Cuteen_DarkSky")[0].remove()}),1e3)}),2e3)}));"light"===("dark"===document.documentElement.getAttribute("data-theme")?"dark":"light")?(document.getElementById("sun").style.opacity="1",document.getElementById("moon").style.opacity="0",setTimeout((function(){document.getElementById("sun").style.opacity="0",document.getElementById("moon").style.opacity="1"}),1e3),activateDarkMode(),saveToLocal.set("theme","dark",2),document.getElementById("modeicon").setAttribute("xlink:href","#icon-sun"),setTimeout((()=>{btf.snackbarShow("已切换为深色模式")}),2e3)):(document.getElementById("sun").style.opacity="0",document.getElementById("moon").style.opacity="1",setTimeout((function(){document.getElementById("sun").style.opacity="1",document.getElementById("moon").style.opacity="0"}),1e3),activateLightMode(),saveToLocal.set("theme","light",2),document.querySelector("body").classList.add("DarkMode"),document.getElementById("modeicon").setAttribute("xlink:href","#icon-moon"),setTimeout((()=>{btf.snackbarShow("已切换为浅色模式")}),2e3)),"function"==typeof utterancesTheme&&utterancesTheme(),"object"==typeof FB&&window.loadFBComment(),window.DISQUS&&document.getElementById("disqus_thread").children.length&&setTimeout((()=>window.disqusReset()),200)}function addLinkF(){document.querySelector(".el-textarea__inner").value="```yml \n  - name: \n    link: \n    avatar: \n    descr: \n```",document.querySelector(".el-textarea__inner").style.height="173px",document.querySelector(".el-textarea__inner").focus()}function getQueryVariable(e){for(var t=window.location.search.substring(1).split("&"),o=0;o<t.length;o++){var n=t[o].split("=");if(n[0]==e)return n[1]}return!1}document.getElementById("mode-button").addEventListener("click",(function(){setTimeout(switchPostChart,100)})),$(document).ready((function(){console.log("Loaded"),document.querySelector(".el-textarea__inner").style.height="130px",document.querySelector(".title-h2-a-left:last-child>h2").onclick=function(){var e=JSON.parse(localStorage.getItem("fdatalist")),t="",o="",n=e.apiurl,l=(e.initnumber,e.stepnumber,"created");if("undefined"!=typeof fdataUser)for(var i in fdataUser)fdataUser[i]&&(fdata[i]=fdataUser[i]);var a="",c="",s=(document.getElementById("fcircleContainer")||document.getElementById("cf-container"),localStorage.getItem("sortNow")),r=localStorage.getItem("urlNow");s&&r?(a=s,c=r):(a=l,c=t?n+"postjson?jsonlink="+t+"&":o?o+"all?":n+"all?",console.log("当前模式："+c),localStorage.setItem("urlNow",c),localStorage.setItem("sortNow",a)),document.getElementById("cf-more").remove(),document.getElementById("cf-footer").remove(),initFriendCircle(a)}}));