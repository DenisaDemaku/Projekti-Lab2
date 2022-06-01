import React, { Component, Fragment } from 'react'

class MegaMenu extends Component {
<<<<<<< HEAD
    
=======

     constructor(){
          super();
          this.MegaMenu = this.MegaMenu.bind(this);
     }

     componentDidMount(){
          this.MegaMenu();
     }



     MegaMenu(){
          var acc = document.getElementsByClassName("accordion");
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


>>>>>>> b9ef2911bec25f1a3f5734f3d0c1834cb76b1670
     render() {
          return (
              <div className="accordionMenuDiv">
                   <div className="accordionMenuDivInside">
           <button className="accordion">
                 <img className="accordionMenuIcon" src="https://image.flaticon.com/icons/png/128/739/739249.png" />&nbsp; Nurse's Clothing 
                        </button>
<div className="panel">
     <ul>
          <li><a href="#" className="accordionItem" > Nurse Tshirt 1</a></li>
          <li><a href="#" className="accordionItem" > Nurse Tshirt 2</a></li>
     </ul>
</div>
<button className="accordion">
                 <img className="accordionMenuIcon" src="https://image.flaticon.com/icons/png/128/739/739249.png" />&nbsp; Nurse's Clothing 
                        </button>
<div className="panel">
     <ul>
          <li><a href="#" className="accordionItem" > Nurse Tshirt 1</a></li>
          <li><a href="#" className="accordionItem" > Nurse Tshirt 2</a></li>
     </ul>
</div>
<button className="accordion">
                 <img className="accordionMenuIcon" src="https://image.flaticon.com/icons/png/128/739/739249.png" />&nbsp; Nurse's Clothing 
                        </button>
<div className="panel">
     <ul>
          <li><a href="#" className="accordionItem" > Nurse Tshirt 1</a></li>
          <li><a href="#" className="accordionItem" > Nurse Tshirt 2</a></li>
     </ul>
</div>
<button className="accordion">
                 <img className="accordionMenuIcon" src="https://image.flaticon.com/icons/png/128/739/739249.png" />&nbsp; Nurse's Clothing 
                        </button>
<div className="panel">
     <ul>
          <li><a href="#" className="accordionItem" > Nurse Tshirt 1</a></li>
          <li><a href="#" className="accordionItem" > Nurse Tshirt 2</a></li>
     </ul>
</div>
<button className="accordion">
                 <img className="accordionMenuIcon" src="https://image.flaticon.com/icons/png/128/739/739249.png" />&nbsp; Men's Clothing 
                        </button>
<div className="panel">
     <ul>
          <li><a href="#" className="accordionItem" > Nurse Tshirt 1</a></li>
          <li><a href="#" className="accordionItem" > Nurse Tshirt 2</a></li>
     </ul>
</div>
<button className="accordion">
                 <img className="accordionMenuIcon" src="https://image.flaticon.com/icons/png/128/739/739249.png" />&nbsp; Nurse's Clothing 
                        </button>
<div className="panel">
     <ul>
          <li><a href="#" className="accordionItem" > Nurse Tshirt 1</a></li>
          <li><a href="#" className="accordionItem" > Nurse Tshirt 2</a></li>
     </ul>
</div>
<button className="accordion">
                 <img className="accordionMenuIcon" src="https://image.flaticon.com/icons/png/128/739/739249.png" />&nbsp; Nurse's Clothing 
                        </button>
@@ -104,6 +134,90 @@
</div>


<button className="accordion">
                 <img className="accordionMenuIcon" src="https://image.flaticon.com/icons/png/128/739/739249.png" />&nbsp; Nurse's Clothing 
                        </button>
<div className="panel">
     <ul>
          <li><a href="#" className="accordionItem" > Nurse Tshirt 1</a></li>
          <li><a href="#" className="accordionItem" > Nurse Tshirt 2</a></li>
     </ul>
</div>



<button className="accordion">
                 <img className="accordionMenuIcon" src="https://image.flaticon.com/icons/png/128/739/739249.png" />&nbsp; Nurse's Clothing 
                        </button>
<div className="panel">
     <ul>
          <li><a href="#" className="accordionItem" > Nurse Tshirt 1</a></li>
          <li><a href="#" className="accordionItem" > Nurse Tshirt 2</a></li>
     </ul>
</div>



<button className="accordion">
                 <img className="accordionMenuIcon" src="https://image.flaticon.com/icons/png/128/739/739249.png" />&nbsp; Nurse's Clothing 
                        </button>
<div className="panel">
     <ul>
          <li><a href="#" className="accordionItem" > Nurse Tshirt 1</a></li>
          <li><a href="#" className="accordionItem" > Nurse Tshirt 2</a></li>
     </ul>
</div>



<button className="accordion">
                 <img className="accordionMenuIcon" src="https://image.flaticon.com/icons/png/128/739/739249.png" />&nbsp; Nurse's Clothing 
                        </button>
<div className="panel">
     <ul>
          <li><a href="#" className="accordionItem" > Nurse Tshirt 1</a></li>
          <li><a href="#" className="accordionItem" > Nurse Tshirt 2</a></li>
     </ul>
</div>



<button className="accordion">
                 <img className="accordionMenuIcon" src="https://image.flaticon.com/icons/png/128/739/739249.png" />&nbsp; Nurse's Clothing 
                        </button>
<div className="panel">
     <ul>
          <li><a href="#" className="accordionItem" > Nurse Tshirt 1</a></li>
          <li><a href="#" className="accordionItem" > Nurse Tshirt 2</a></li>
     </ul>
</div>



<button className="accordion">
                 <img className="accordionMenuIcon" src="https://image.flaticon.com/icons/png/128/739/739249.png" />&nbsp; Nurse's Clothing 
                        </button>
<div className="panel">
     <ul>
          <li><a href="#" className="accordionItem" > Nurse Tshirt 1</a></li>
          <li><a href="#" className="accordionItem" > Nurse Tshirt 2</a></li>
     </ul>
</div>



<button className="accordion">
                 <img className="accordionMenuIcon" src="https://image.flaticon.com/icons/png/128/739/739249.png" />&nbsp; Nurse's Clothing 
                        </button>
<div className="panel">
     <ul>
          <li><a href="#" className="accordionItem" > Nurse Tshirt 1</a></li>
          <li><a href="#" className="accordionItem" > Nurse Tshirt 2</a></li>
     </ul>
</div>
</div>

)

}

}


export default MegaMenu 