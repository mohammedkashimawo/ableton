import { bus } from "./main";


import {bus1} from './main';


export default {
 data() {
 return {
 title: 'Mixins are cooliiiii',
  boy:2,
  copyright: 'All rights reserved. Product of super awesome people'
      };
    },
    created: function() {
      this.greetings();
    },
    methods:{
      good:function(){
      
          this.plus=!this.plus
      
      console.log(this.plus);

      if(this.plus==true){
          this.ab="+";
          document.getElementById("iyami").style.top="80px";
          document.getElementById('appTri').style.top="700px"
          bus.$emit('sleepof','this is what your code has');

      
      }

      else if(this.plus==false){
          this.ab="-";
          document.getElementById("iyami").style.top="440px";
          document.getElementById("appTri").style.top="1300px;";
          bus1.$emit('sleepof','this is what your code has');


      
      

      }
     }
   
  },
  
  
   
  
  };
  