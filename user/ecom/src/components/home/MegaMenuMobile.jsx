import React, { Component, Fragment } from 'react'

class MegaMenuMobile extends Component {

     constructor(){
          super();
          this.MegaMenu = this.MegaMenu.bind(this);
     }

     componentDidMount(){
          this.MegaMenu();
     }



     MegaMenu(){
          var acc = document.getElementsByClassName("accordionMobile");
          var accNum = acc.length;
          var i;
          for(i=0;i<accNum;i++){
               acc[i].addEventListener("click",function (){
                    this.classList.toggle("active");
                    var panel = this.nextElementSibling;
                    if(panel.style.maxHeight){
                         panel.style.maxHeight = null;
                    }else{
                         panel.style.maxHeight= panel.scrollHeight+ "px"
                    }
               })
          }
     }


     render() {
          return (
              <div className="accordionMenuDivMobile">
                   <div className="accordionMenuDivInsideMobile">


           <button className="accordionMobile">
                 <img className="accordionMenuIconMobile" src="https://cdn.iconscout.com/icon/free/png-256/grid-select-selection-app-application-menu-interface-3-14061.png" />&nbsp; Category 
                        </button>
<div className="panelMobile">
     <ul>
          <li><a href="#" className="accordionItemMobile" > Subcategory 1</a></li>
          <li><a href="#" className="accordionItemMobile" > Subcategory 2</a></li>
     </ul>
</div>


<button className="accordionMobile">
                 <img className="accordionMenuIconMobile" src="https://cdn.iconscout.com/icon/free/png-256/grid-select-selection-app-application-menu-interface-3-14061.png" />&nbsp; Category 
                        </button>
<div className="panelMobile">
     <ul>
          <li><a href="#" className="accordionItemMobile" > Subcategory 1</a></li>
          <li><a href="#" className="accordionItemMobile" > Subcategory 2</a></li>
     </ul>
</div>



<button className="accordionMobile">
                 <img className="accordionMenuIconMobile" src="https://cdn.iconscout.com/icon/free/png-256/grid-select-selection-app-application-menu-interface-3-14061.png" />&nbsp; Category 
                        </button>
<div className="panelMobile">
     <ul>
          <li><a href="#" className="accordionItemMobile" > Subcategory 1</a></li>
          <li><a href="#" className="accordionItemMobile" > Subcategory 2</a></li>
     </ul>
</div>



<button className="accordionMobile">
                 <img className="accordionMenuIconMobile" src="https://cdn.iconscout.com/icon/free/png-256/grid-select-selection-app-application-menu-interface-3-14061.png" />&nbsp; Category 
                        </button>
<div className="panelMobile">
     <ul>
          <li><a href="#" className="accordionItemMobile" > Subcategory 1</a></li>
          <li><a href="#" className="accordionItemMobile" > Subcategory 2</a></li>
     </ul>
</div>



<button className="accordionMobile">
                 <img className="accordionMenuIconMobile" src="https://cdn.iconscout.com/icon/free/png-256/grid-select-selection-app-application-menu-interface-3-14061.png" />&nbsp; Category 
                        </button>
<div className="panelMobile">
     <ul>
          <li><a href="#" className="accordionItemMobile" > Subcategory 1</a></li>
          <li><a href="#" className="accordionItemMobile" > Subcategory 2</a></li>
     </ul>
</div>




<button className="accordionMobile">
                 <img className="accordionMenuIconMobile" src="https://cdn.iconscout.com/icon/free/png-256/grid-select-selection-app-application-menu-interface-3-14061.png" />&nbsp; Category 
                        </button>
<div className="panelMobile">
     <ul>
          <li><a href="#" className="accordionItemMobile" > Subcategory 1</a></li>
          <li><a href="#" className="accordionItemMobile" > Subcategory 2</a></li>
     </ul>
</div>



<button className="accordionMobile">
                 <img className="accordionMenuIconMobile" src="https://cdn.iconscout.com/icon/free/png-256/grid-select-selection-app-application-menu-interface-3-14061.png" />&nbsp; Category 
                        </button>
<div className="panelMobile">
     <ul>
          <li><a href="#" className="accordionItemMobile" > Subcategory 1</a></li>
          <li><a href="#" className="accordionItemMobile" > Subcategory 2</a></li>
     </ul>
</div>



<button className="accordionMobile">
                 <img className="accordionMenuIconMobile" src="https://cdn.iconscout.com/icon/free/png-256/grid-select-selection-app-application-menu-interface-3-14061.png" />&nbsp; Category 
                        </button>
<div className="panelMobile">
     <ul>
          <li><a href="#" className="accordionItemMobile" > Subcategory 1</a></li>
          <li><a href="#" className="accordionItemMobile" > Subcategory 2</a></li>
     </ul>
</div>


<button className="accordionMobile">
                 <img className="accordionMenuIconMobile" src="https://cdn.iconscout.com/icon/free/png-256/grid-select-selection-app-application-menu-interface-3-14061.png" />&nbsp; Category 
                        </button>
<div className="panelMobile">
     <ul>
          <li><a href="#" className="accordionItemMobile" > Subcategory 1</a></li>
          <li><a href="#" className="accordionItemMobile" > Subcategory 2</a></li>
     </ul>
</div>


<button className="accordionMobile">
                 <img className="accordionMenuIconMobile" src="https://cdn.iconscout.com/icon/free/png-256/grid-select-selection-app-application-menu-interface-3-14061.png" />&nbsp; Category 
                        </button>
<div className="panelMobile">
     <ul>
          <li><a href="#" className="accordionItemMobile" > Subcategory 1</a></li>
          <li><a href="#" className="accordionItemMobile" > Subcategory 2</a></li>
     </ul>
</div>


<button className="accordionMobile">
                 <img className="accordionMenuIconMobile" src="https://cdn.iconscout.com/icon/free/png-256/grid-select-selection-app-application-menu-interface-3-14061.png" />&nbsp; Category 
                        </button>
<div className="panelMobile">
     <ul>
          <li><a href="#" className="accordionItemMobile" > Subcategory 1</a></li>
          <li><a href="#" className="accordionItemMobile" > Subcategory 2</a></li>
     </ul>
</div>



<button className="accordionMobile">
                 <img className="accordionMenuIconMobile" src="https://cdn.iconscout.com/icon/free/png-256/grid-select-selection-app-application-menu-interface-3-14061.png" />&nbsp; Category 
                        </button>
<div className="panelMobile">
     <ul>
          <li><a href="#" className="accordionItemMobile" > Subcategory 1</a></li>
          <li><a href="#" className="accordionItemMobile" > Subcategory 2</a></li>
     </ul>
</div>





<button className="accordionMobile">
                 <img className="accordionMenuIconMobile" src="https://cdn.iconscout.com/icon/free/png-256/grid-select-selection-app-application-menu-interface-3-14061.png" />&nbsp; Category 
                        </button>
<div className="panelMobile">
     <ul>
          <li><a href="#" className="accordionItemMobile" > Subcategory 1</a></li>
          <li><a href="#" className="accordionItemMobile" > Subcategory 2</a></li>
     </ul>
</div>



<button className="accordionMobile">
                 <img className="accordionMenuIconMobile" src="https://cdn.iconscout.com/icon/free/png-256/grid-select-selection-app-application-menu-interface-3-14061.png" />&nbsp; Category 
                        </button>
<div className="panelMobile">
     <ul>
          <li><a href="#" className="accordionItemMobile" > Subcategory 1</a></li>
          <li><a href="#" className="accordionItemMobile" > Subcategory 2</a></li>
     </ul>
</div>




<button className="accordionMobile">
                 <img className="accordionMenuIconMobile" src="https://cdn.iconscout.com/icon/free/png-256/grid-select-selection-app-application-menu-interface-3-14061.png" />&nbsp; Category 
                        </button>
<div className="panelMobile">
     <ul>
          <li><a href="#" className="accordionItemMobile" > Subcategory 1</a></li>
          <li><a href="#" className="accordionItemMobile" > Subcategory 2</a></li>
     </ul>
</div>



<button className="accordionMobile">
                 <img className="accordionMenuIconMobile" src="https://cdn.iconscout.com/icon/free/png-256/grid-select-selection-app-application-menu-interface-3-14061.png" />&nbsp; Category 
                        </button>
<div className="panelMobile">
     <ul>
          <li><a href="#" className="accordionItemMobile" > Subcategory 1</a></li>
          <li><a href="#" className="accordionItemMobile" > Subcategory 2</a></li>
     </ul>
</div>



                   </div>

              </div>
          )
     }
}

export default MegaMenuMobile
