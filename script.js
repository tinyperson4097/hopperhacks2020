const btn = document.getElementById('start');

btn.addEventListener('click', () => window.scrollTo({
  top: 220,
  behavior: 'smooth',
}));


var objectInput= $(".userInput1");
var firstbutton= $(".button1");
var materialInput= $(".userInput2");
var secondbutton= $(".button2");
var mapbutton=$(".buttonmap");
var state;
var item;

mapbutton.on("click", firstStep);
firstbutton.on("click", secondStep);
secondbutton.on("click", thirdStep);

function firstStep(event){
  event.preventDefault()
  state=simplemaps_select.selected;
  console.log(simplemaps_select.selected);
  window.scrollBy(0, window.innerHeight);
};

function secondStep(event){
  event.preventDefault()
  item=objectInput.val()
  console.log(item)
  window.scrollBy(0, window.innerHeight);
};

var material;

function thirdStep(event){
  event.preventDefault()
  material=materialInput.val()
  console.log(material);
  window.scrollBy(0, window.innerHeight);
  displayResults();
}

var reuse=$(".reuse");
var resell=$(".resell");
var donate=$(".donate");
var recycle=$(".recycle2");
var recycleLinks=$(".recycleLinks");
var resellLinks=$(".resellLinks");
var donateLinks=$(".donateLinks");
var reuseLinks=$(".reuseLinks");

function displayResults(){
  recycleLinks.append(`<p>Use this link to see where you can recycle various items:</p>
  <a class="block" href="https://search.earth911.com/?utm_source=earth911-header&utm_medium=top-navigation-menu&utm_campaign=top-nav-recycle-search-button">Earth 911</a>
  <a class="block" href="https://search.earth911.com/?utm_source=earth911-header&utm_medium=top-navigation-menu&utm_campaign=top-nav-recycle-search-button">The Do's and Don'ts of Single-Stream Recycling</a>`)
  if (item==="clothing"){
    recycle.text("Here are some links to places that will take your clothing to make new clothing:")
    recycleLinks.append(`<a class="block" href="https://www.thenorthface.com/about-us/responsibility/product/clothes-the-loop.html">The North Face</a>
    <a class="block" href="https://wornwear.patagonia.com/">Patagonia</a>
    <a class="block" href="http://www.weardonaterecycle.org/">Wear Donate Recycle</a>
    <a class="block" href="https://www2.hm.com/en_us/index.html">H&M</a>
    <a class="block" href="http://www.donationtown.org/">Donation Town</a> 
    <a class="block" href="https://www.planetaid.org/faq">Planet Aid</a>`);
    donate.text("Even if you may think your old clothes are beyond salvation, you never know: it might just be enough to make someone's day. So, even if you are unsure about it, try taking your old clothes (after a good wash) to your local thrift store or Goodwill and make someone's day while emptying out your closet! Reference the links below to find out more ways you can donate your clothes:")
    donateLinks.append(`<a class="block" href="https://www.smartasn.org/resources/for-communities/">For Communities</a>
    <a class="block" href="https://www.terracycle.com/en-US/zero_waste_boxes/fabrics-and-clothing">Terracycle</a>
    <a class="block" href="http://www.weardonaterecycle.org/">Wear Donate Recycle</a>`)
    reuse.text("Just throw the clothing in the wash and cut away the parts of the clothing that are stained or torn, and you can use the left-over cloth to make bedsheets, bags, or other pieces of stylish clothing.");
    reuseLinks.append(`<p>Here are a few links to help you find ways to repurpose your clothing</p>
    <a class="block" href="https://www.lifehack.org/453113/27-creative-ways-to-reuse-old-clothing">Life Hack</a>
    <a class="block" href="https://www.goodhousekeeping.com/home/craft-ideas/how-to/g1336/upcycled-clothes/">Good Housekeeping</a>
    <a class="block" href="https://www.1millionwomen.com.au/blog/5-dog-toys-you-can-make-household-objects/">How to Make Dog Toys out of Old Clothing</a>`)
    resell.text("Here are some links to places where you can sell your clothing:")
    resellLinks.append(`<a class="block" href="https://poshmark.com/">Poshmark</a>`)
    resellLinks.append(`<a class="block" href="https://www.thredup.com">Thredup</a>`)
  }
  if(item==='clothing' && state[0]==='NY'){
       recycleLinks.append(`<a class="block" href="http://www.greentreetextiles.org/farmersmarkets/ ">Green Tree NY</a>`);
    } else if(item==='clothing' && state[0]==='WA"' || state[0]==='OR'){
       recycleLinks.append(`<a class="block" href="https://gemtextrecycling.com/locations/ ">Gem Text Recycling</a>`);
    }
  if (item==="clothing" && material==="cotton"){
    recycleLinks.append(`<p>You can also compost your clothing if it is made of natural fibers--it must be 100% natural though, no synthetic materials otherwise it won't biodegrade. Cut the cloth into thin strips and compost them. For cotton clothing, cut off any elastic parts before composting.</p>`)
  }
  if (item==="clothing" && material==="bamboo"){
    recycleLinks.append(`<p>You can also compost your clothing if it is made of natural fibers--it must be 100% natural though, no synthetic materials otherwise it won't biodegrade. Cut the cloth into thin strips and compost them. For bamboo clothing, cut off any elastic parts before composting.</p>`)
  }
  if (item==="clothing" && material==="linen"){
    recycleLinks.append(`<p>You can also compost your clothing if it is made of natural fibers--it must be 100% natural though, no synthetic materials otherwise it won't biodegrade. Cut the cloth into thin strips and compost them. For linen clothing, cut off any elastic parts before composting.</p>`)
  }
  if (item==="clothing" && material==="hemp"){
    recycleLinks.append(`<p>You can also compost your clothing if it is made of natural fibers--it must be 100% natural though, no synthetic materials otherwise it won't biodegrade. Cut the cloth into thin strips and compost them. For hemp clothing, cut off any elastic parts before composting.</p>`)
  }
  if (item==="bra"){
    donate.text("Even if you may think your old bras are beyond salvation, you never know: it might just be enough to make someone's day. So, even if you are unsure about it, try taking them (after a good wash) to your local thrift store or Goodwill and make someone's day while emptying out your closet! Reference the links below to find out more ways you can donate your bras:")
    donateLinks.append(`<a class="block" href="https://www.brarecycling.com/drop-off-locations">Bra Drop-Off Locations</a>
    <a class"block" href="https://isupportthegirls.org/">I Support the Girls</a>
    <a class="block" href="https://freethegirls.org/bras">Free the Girls</a>`)
    recyclingLinks.append(`<p>Here are some links to places where you can recycle your old bras</p>
    <a class="block" href="https://brarecyclingagency.com/">Bra Recycling Agency</a>`)
  }
  if (item==="shoes" || item==="shoe" || item==="sneakers" || item==="sandals"){
    donate.text("Even if you may think your old shoes are beyond salvation, you never know: it might just be enough to make someone's day. So, even if you are unsure about it, try taking them (after a good wash) to your local thrift store or Goodwill and make someone's day while emptying out your closet! Reference the links below to find out more ways you can donate your shoes:")
    donateLinks.append(`
    <a class"block" href="https://soles4souls.org/get-involved/give-shoes/donate/">Soles for Souls</a>`)
    recyclingLinks.append(`<p>Here are some links to places where you can recycle your old shoes</p>
    <a class="block" href="https://soles4souls.org/get-involved/give-shoes/donate/">Soles for Souls</a>
    <a class="block" href="https://www.nike.com/help">Nike</a>`)
  }
  if (item==="glasses" || item==="eyeglasses"){
    donate.text("Even if you may think your old glasses are beyond salvation, you never know: it might just be enough to make someone's day. Reference the links below to find out more ways you can donate your glasses:")
    donateLinks.append(`<a class="block" href=" https://temp.lionsclubs.org/EN/pdfs/iad403.pdf>Lions Clubs</a>
    <a class="block" href="https://vspglobal.com/cms/vspglobal-outreach/eyewear-donation.html">VSP Global</a>`)
    reuseLinks.append(`<a class="block" href="http://www.stuarthaygarth.com/works#/optical2009">How to convert glasses into a Chandelier</a>
    <a class="block" href="https://www.pinterest.com/pin/548876273307211399/">How to convert your glasses into Decor</a>`)
  }
  if (item==="jewelry"){
    resell.text("There are many places that would happily accept your jewelry, such as your local pawn shops, thrift stores, etc. So, once you've given your old jewelry a nice cleaning, go over to your local pawn/thrift shop and see what they're worth!")
    donate.text("The best places to donate your jewelry are nonprofit orgnaizations. Below are some links that could help you in donating your jewelry:")
    donateLinks.append(`<a class="block" href="https://ihavewings.org/donate-costume-jewelry/">I have Wings</a>
    <a class="block" href="https://dressforsuccess.org/affiliate-list/">Dress for Success</a>
    <a class="block" href="https://supportourtroops.org/jewelry">Support our Troops</a>`)
  }
if (item==="packaging" || item==="plastic bags" || item==="bags" && material==="plastic" || item==="flexible plastic" || material==="flexible plastic" || item==="bubble wrap" || item==="plastic film"){
  recycle.text("Unfortunately, you cannot recycle plastic films using single stream. Thus, use the below links or simply recycle your plastics at your local grocery store in order to recycle your plastics correctly:")
  recycleLinks.append(`<a class="block" href="https://how2recycle.info/sdo#:~:text=Plastic%20bags%2C%20wraps%2C%20and%20films,can%20be%20recycled%20this%20way.">How 2 Recycle</a>
  <a class="block" href="https://www.plasticfilmrecycling.org/recycling-bags-and-wraps/find-drop-off-location/>Plastic Film Recycling</a>
  <a class="block" href="https://s7d4.scene7.com/is/content/Trex/trex-participating-film-bag-recycling-partners-usapdf.pdf">Drop-Off Locations for Film Bags</a>`)
}
if (item==="plastic bottles" || item==="plastic bottle" || item==="bottle" && material==="plastic" || item==="waterbottles" || item==="water bottle" || item==="plastic cartons" || item==="plastic carton" || item==="carton" && material==="plastic"){
  reuse.text("Use the following links to get some ideas on how to repurpose your plastic jugs and cartons around your home:")
  reuseLinks.append(`<a class="block" href="https://www.familyhandyman.com/list/21-nifty-ways-to-reuse-plastic-jugs-and-bottles-at-home/">21 Ways to Reuse Plastic Jugs and Bottles</a>
  <a class="block" href="https://www.boredpanda.com/plastic-bottle-recycling-ideas/">Bored Panda</a>
  <a class="block" href="https://www.budgetdumpster.com/blog/diy-plastic-bottles-recycling/">DIY Plastic Carton Ideas</a>`)
  recycle.text("Even though plastic is what first comes to mind whenever we set out to recycle our trash, it must be done correctly in order to help out the environment effectively. For example, did you know that you CAN single-stream recycle plastic cartons and bottles, but not bags or film? Thus, use the below links or simply recycle your plastics at your local grocery store in order to recycle your plastics correctly:")
  recycleLinks.append(`<a class="block" href="https://how2recycle.info/sdo#:~:text=Plastic%20bags%2C%20wraps%2C%20and%20films,can%20be%20recycled%20this%20way.">How 2 Recycle</a>`)
}
if (item==="food containers") {
  recycle.text("Alert! Food containers can only be recycled if they are plastic, and even then they must be washed before they are recycled. However, if thy are cardboard, you can always compost them.")
  reuse.text("Use the following links to help you repurpose your food containers:")
  reuseLinks.append(`<a class="block" href="https://www.familyhandyman.com/list/21-nifty-ways-to-reuse-plastic-jugs-and-bottles-at-home/>21 Ways to Reuse Plastic Containers</a>`)
}
if (item==="toilet paper rolls" || item==="paper towel rolls" || item==="towel rolls"){
  reuse.text("Believe it or not, there are many ways to reuse paper towel rolls. Here are a few:")
  reuseLinks.append(`<a class="block" href="https://www.simplemost.com/11-genious-ways-reuse-toilet-paper-tubes/#:~:text=1.,to%20help%20them%20stand%20up">11 Genious Ways to Reuse Toilet Paper Tubes</a>
  <a class="block" href="https://homehacks.co/nifty-uses-toilet-paper-rolls/">Nifty Uses of Toilet Paper Rolls</a>`)
  recycle.text("Toilet paper rolls or paper towel rolls can be recycle single stream.")
}
if (material==="cardboard" || item==="carboard box"){
  reuse.text("Cardboard boxes can be made into anything, whether it simply be used for storage or a fascinating DIY project. Just to get you started, here are a few links:")
  reuseLinks.append(`<a class="block" href="https://www.trendhunter.com/slideshow/diy-cardboard">Trend Hunter</a>
  <a class="block" href="https://www.youtube.com/channel/UCNZMEiM-ZMYmEk2CG3mr1_Q">YouTube Channel</a>
  <a class="block" href="https://www.instructables.com/craft/cardboard/projects/">Cardboard Project</a>`)
  recycle.text("When you're recycling carboard boxes, make sure to flatten them. Other than that, you don't have much else to worry about--you can single-stream recycle them.")
}
if (material==="paper"){
  recycle.text("Paper is the simplest to recycle since you don't have much to worry about--just single-stream recycle them.")
}
if (item==="newspapers" || item==="newspaper"){
  reuse.text("Newspapers are really easy (and fun) to reuse in decor or utilities around the house. Not only do they add a little life to your walls, they can also be really handy. You can use them to create a collage, or cut them into strips to use in paper-mache projects! Look at these links to jog your creativity a litte: ")
  reuseLinks.append(`<a class="block" href=" https://www.thesprucecrafts.com/newspaper-crafts-4155824">Newspaper Crafts</a>`)
}
if (item==="egg carton" || item==="egg cartons"){
  reuse.text("Egg cartons are really easy (and fun) to reuse in decor or utilities around the house. Not only do they add a little texturs to your decor, they can also be really handy. Look at these links to jog your creativity a litte:")
  reuseLinks.append(`<a class="block" href=" https://www.thesprucecrafts.com/egg-carton-kids-crafts-4129406">Egg Carton Crafts</a>`)
}
if (item==="batteries"){
  recycle.text("Batteries can be really dangerous if they are handled incorrectly. Use this link to recycle your batteries correctly and safely:")
  recycleLinks.append(`<a class="block" href=" https://www.call2recycle.org/">Call 2 Recycle</a>`)
}
if (item==="empty pill containers" || item==="pill containers"){
  recycle.text("Pill containers are like any other plastic containers or bottles--try putting in plastic cartons in the input boxes above.")
  reuse.text("You probably never thought to reuse your empty pill containers, did you? Here is a link to help you get started:")
  reusesLinks.append(`<a class="blocks" href="https://www.diyncrafts.com/11126/repurpose/30-genius-ways-to-reuse-and-repurpose-empty-pill-bottles">30 Ways to Repurpose Your Empty Pill Bottles</a>`)
}
if (item==="medicine" || item==="pills" || item==="drugs"){
  recycle.text("Of course, there is no (legal) way to recycle (or resell, donate, or reuse) medicine and drugs, but you must knwo how to dispose of them correctly. Thus, you can either take them back or flush them down the toilet. However, some drugs can't be flsuehd down the toilet due to their chemical composition. Use the links below to learn how you can best dispose of your medicine or drugs:")
  recycleLinks.append(`<a class="block" href="https://www.fda.gov/drugs/disposal-unused-medicines-what-you-should-know/drug-disposal-drug-take-back-locations">Take Back Locations</a>
  <a class="block" href="https://www.fda.gov/drugs/disposal-unused-medicines-what-you-should-know/drug-disposal-flush-potentially-dangerous-medicine#FlushList">Drugs you CAN flush</a>
  <a class="block" href="https://www.fda.gov/drugs/disposal-unused-medicines-what-you-should-know/drug-disposal-dispose-non-flush-list-medicine-trash">Drugs you CAN'T flush</a>`)
}
if (item==="magazines"){
  reuse.text("Magazines are really easy (and fun) to reuse in decor or utilities around the house. Not only do they add a little life to your walls, they can also be really handy. Look at these links to jog your creativity a litte:")
  reuseLinks.append(`<a class="blocks" href="https://www.favecrafts.com/Green-Crafting/Top-10-Recycled-Magazine-Crafts">Top 10 Recycled Magazine Crafts</a>
  <a class="block" href="https://www.diyncrafts.com/27864/repurpose/30-crafty-ways-to-repurpose-old-magazines-trash-to-treasure">30 Ways to Repurpose Old Magazines</a>
  <a class="block" href="https://www.redtedart.com/easy-magazine-beads-diy/">Easy Magazine Beads</a>`)
}
}
/* Copyright 2017, Chris Youderian, SimpleMaps, http://simplemaps.com
 Released under MIT license - https://opensource.org/licenses/MIT 
 */ 

(function(plugin){
  
  //Start helper functions
    //IE8 support for index of
    if(!Array.prototype.indexOf) {
        Array.prototype.indexOf = function(needle) {
            for(var i = 0; i < this.length; i++) {
                if(this[i] === needle) {
                    return i;
                }
            }
            return -1;
        };
    }  
    //docReady in pure JavaScript, source: https://github.com/jfriend00/docReady/blob/master/docready.js, MIT
    (function (funcName, baseObj) {funcName = funcName || "docReady";baseObj = baseObj || window;var readyList = [];var readyFired = false;var readyEventHandlersInstalled = false;function ready() {if (!readyFired) {readyFired = true;for (var i = 0; i < readyList.length; i++) {readyList[i].fn.call(window, readyList[i].ctx);}readyList = [];}}function readyStateChange() {if (document.readyState === "complete") {ready();}}baseObj[funcName] = function (callback, context) {if (readyFired) {setTimeout(function () {callback(context);}, 1);return;} else {readyList.push({fn:callback, ctx:context});}if (document.readyState === "complete" || !document.attachEvent && document.readyState === "interactive") {setTimeout(ready, 1);} else if (!readyEventHandlersInstalled) {if (document.addEventListener) {document.addEventListener("DOMContentLoaded", ready, false);window.addEventListener("load", ready, false);} else {document.attachEvent("onreadystatechange", readyStateChange);window.attachEvent("onload", ready);}readyEventHandlersInstalled = true;}};})("docReady", window);
  //End helper functions
  
  window[plugin]=function(){
    return {
      map: false,
      on_shift: false,
      selected_color: false,      
    }
  }()  
    
  docReady(function(){
    var me=window[plugin];
    var map=me.map?me.map:simplemaps_usmap; //usmap is default
    var on_shift=me.on_shift;
    var selected_color=me.selected_color?me.selected_color:map.mapdata.main_settings.state_hover_color;
    var selected=[]; 
    var max=me.max?me.max:false;
    var original_mapdata=JSON.parse(JSON.stringify(map.mapdata));
    var main_settings={all_states_zoomable: 'no', state_url: ''};
    
    function check_mapdata(state){ //make sure a color exists for each state
        if (!map.mapdata.state_specific[state]){map.mapdata.state_specific[state]={};}         
        if (!original_mapdata.state_specific[state]){original_mapdata.state_specific[state]={}; original_mapdata.state_specific[state].color='default'}      
        else if (!original_mapdata.state_specific[state].color){original_mapdata.state_specific[state].color='default'}
    }
    
    var deselect=function(state){
        map.states[state].stop(); //prevents fade time from interfering with deselect
        var index=selected.indexOf(state);        
        if (index > -1){ //deselect state
          selected.splice(index, 1);   
          check_mapdata(state);
          map.mapdata.state_specific[state].color=original_mapdata.state_specific[state].color;
        }    
        done(state);
    }
    
    var check_max=function(state){
      if (me.max && selected.length>=me.max){
        var first=selected[0];
        me.deselect(first);
      }      
    }
    
    var select=function(state){
      var index=selected.indexOf(state);        
      if (index < 0){ //make sure a state is selectedable
        check_mapdata(state);
        check_max();
        map.mapdata.state_specific[state].color=me.selected_color;
        selected.push(state);
        done(state);
      }      
    }
    
    var select_all=function(){
      for (var state in simplemaps_usmap_mapinfo.paths){
        select(state);
      }
    }
    
    var deselect_all=function(){
      var length=selected.length
      for (var i = 1; i < length+1; i++){
        var id=length-i
        var state=selected[id];
        deselect(state);
      }
    }    
    
    function done(state){
        map.refresh_state(state);
        me.selected=selected; //update value    
    }
  
    var upon_click = function(state, e){   
      if (me.on_shift){ //select on shift+click
        var evt = e || w.event;
        var length=me.selected.length;
        var index=me.selected.indexOf(state);  
        var last_state=me.selected[length-1];
        if (length == 0){
            me.select(state);
        }        
        else if (length > 0){
          if(evt.shiftKey){
            if (index > -1){
              me.deselect(state);
            }
            else{
              me.select(state);
            }
          }
          else{ 
            me.deselect_all(last_state);
            me.select(state);
          }
        }        
      }
      else{ //select on click
        var index=selected.indexOf(state);   
        if (index > -1){ //deselect state
          deselect(state);
        }
        else{ //select state
          select(state);
        }
      }
    }
    
    map.plugin_hooks.click_state.push(upon_click);   
    
    window[plugin]=function(){
      return {
        //inputs
        map:map,
        on_shift: on_shift,
        selected_color: selected_color,
        max: max,
        //outputs
        selected: selected, 
        //methods
        select: select,
        deselect: deselect,
        select_all: select_all,
        deselect_all: deselect_all      
      } 
    }()    
    
    me=window[plugin];
  });
  
})('simplemaps_select');
 //change plugin name to use across multiple maps on the same page

 