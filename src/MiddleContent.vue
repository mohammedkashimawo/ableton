<template>

<div id="appTri">
  <div id="AppTri1" align="justify">
   <span class="eleru">We make Live, Push and Link — unique software and hardware for music creation and 
    performance.With these products, our community of users creates amazing things.   </span>   
    <span class="panadol">     <br>                                                  
Ableton was founded in 1999 and released the first version of Live in 2001. 
Our products are used by a community of dedicated musicians, sound designers, 
and artists from across the world.
We come from a wide range of cultural and professional backgrounds. 
      Some of us have PhDs, some are self-taught, and most of us are somewhere in between. 
      What connects us is the shared belief that each of us has the skills and knowledge to contribute to something big: helping to shape the future of music culture.
<br><br>
</span>
 </div>
    
 <div id="AppTri2" align="justify"></div>
   <span class="eleru2" align="justify">  
    Making music isn’t easy. 
    It takes time, effort, and learning. 
    But when you’re in the flow, it’s incredibly rewarding.    

</span>   
    <span class="panadol2" align="justify"> We feel the same way about making Ableton products. 
      The driving force behind Ableton is our passion for what we make,
       and the people we make it for.We come from a wide range of cultural and professional backgrounds. 
      Some of us have PhDs, some are self-taught, and most of us are somewhere in between. 
      What connects us is the shared belief that each of us has the skills and knowledge to contribute to something big: helping to shape the future of music culture.


                                                 

</span>

<div id="think"></div>
<span class="eleru3" align="justify">  
 
 <b style="text-transform:uppercase;"><br><br> We believe it takes focus to create truly outstanding instruments.
  We only work on a few products and we strive to make them great.
  We are more than 350 people from 30 different countries divided between our 
  headquarters in Berlin and our offices in Los Angeles and Tokyo.</b>
  <br><br>
  Most of us are active musicians, producers, and DJs, 
      and many of us use Live and Push every day. 
      We come from a wide range of cultural and professional backgrounds. 
      Some of us have PhDs, some are self-taught, and most of us are somewhere in between. 
      What connects us is the shared belief that each of us has the skills and knowledge to contribute to something big: helping to shape the future of music culture.



</span>   
    <span class="panadol3" align="justify"> 
    
    </span>

 </div>
    
  
</template>

<script>



import {bus} from './main';
//import {bus1} from './main';


export default {
  name: 'AppTri',
  data:function(){
    return{
      paul:'tonwa',
    }
  },
  created(){
        bus.$on('sleepof',(data)=>{this.paul=data;} );

   
    },
  
}
</script>

<style>

@import "./style.css";

</style>

<style scoped>


</style>