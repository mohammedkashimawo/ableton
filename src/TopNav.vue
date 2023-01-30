<template>
    <div id="AppTwo" class="AppTwo">


<span class="logo">
    <img src="./disg.png" width="140px" height="140px" />

</span>   



    <ul>
<li class="list"><a href="#">

    <span class="icon"> <ion-icon name="home-outline"></ion-icon></span>
    <span class="text">Live</span>
        </a>
    </li>

    
<li class="list"><a href="#">

<span class="icon"><ion-icon name="person-circle-outline"></ion-icon></span>
<span class="text">Push</span>
    </a>
</li>

<li class="list"><a href="#">

<span class="icon"><ion-icon name="speedometer-outline"></ion-icon></span>
<span class="text">Note</span>
    </a>
</li>

<li class="list"><a href="#">

<span class="icon"><ion-icon name="people-circle-outline"></ion-icon></span>
<span class="text">Link</span>
    </a>
</li>



<li class="list"><a href="#">

<span class="icon"><ion-icon name="laptop-outline"></ion-icon></span>
<span class="text">Shop </span>
    </a>
</li>

<li class="list"><a href="#">

<span class="icon"><ion-icon name="bookmarks-outline"></ion-icon></span>
<span class="text">Packs</span>
    </a>
</li>

<li class="list"><a href="#">

<span class="icon"><ion-icon name="contract-outline"></ion-icon></span>
<span class="text">help</span>
    </a>
</li>

<li class="list"><a href="#" @click="good">

<span class="icon"><ion-icon name="contract-outline"></ion-icon></span>
<span class="text">More{{ab}}</span>
    </a>
</li>
    </ul>


    <span class="gaskia">

        <a href class="niran">Go live</a>
    <a href="#" class="niran">&nbsp;&nbsp;Sign-Up</a>
    <a href="#" class="niran">&nbsp;&nbsp;Sign In</a>

    </span>
    <div id="tohide" v-if="!plus">
        <span class="teal">More on Ableton.com:-</span>
        <br>   
        
            <span  class="tea">Blog</span>
            <span class="tea">Ableton for Classroom</span>
            <span  class="tea">Ableton for colleges and universities</span>
            <span class="tea">Certified Trainings</span>
            <span  class="tea">About Ableton</span>
            <span class="tea">Jobs</span>
            <span class="tea">Apprenticeship</span>
        
    <br><br>

    <span class="Spanna">More from Ableton.com:-</span>
        <br>   
        <div class="teaml">
        
            <span  class="team"  align="justify"><b><br>Loop</b><br>
Watch Talks, Performances and Features from Ableton's Summit for Music Makers.</span>
            <span class="team" align="justify"><B>Learning music</B><br>Learn fundamentals of muic making right in 
                your browser without breaking the bank.</span>
            <span  class="team"  align="justify"><B>Learn Synths</B><br>Getting started with synthesis using a browser based Synths
                 and accompanying lessons.
            </span>
            <span class="team"  align="justify"><B>Making musics</B><br>
                Get some importants tips on making music from our top instructors just the way you love.</span>
            
        </div>
    </div>


<br><br>
<div class="sharp" id="iyami">
    
    <span class="korope"><a href="#" class="tellU"> About</a> </span>
    <span class="korope"><a href="#" class="tellU">Job</a></span>
    <span class="korope"><a href="#" class="tellU">Apprenticeship</a></span>
 

<div id="dide">

<span id="israel" >ABLEGOD ENTERTAINMENT</span>

</div>

    </div>



    
    </div>
    

    
    
  </template>
  
  <script>
   import myMixin from "./myMixins.js";

   import { bus } from "./main";


//import {bus1} from './main';


  export default {
    name: 'AppTwo',
    mounted:function(){
        

    },
    data:function(){
        return{
            plus:true,
            ab:"",
            bc:'+',

            cd:'-',

        }

    },
    

    methods:{
        good:function(){
        
            this.plus=!this.plus
        
        console.log(this.plus);

        if(this.plus==true){
            this.ab="+";
            document.getElementById("iyami").style.top="80px";
            document.getElementById('appTri').style.top="800px"
            
        
        }

        else if(this.plus==false){
            this.ab="-";
            document.getElementById("iyami").style.top="440px";
            document.getElementById("appTri").style.top="1000px";
           

        
        

        }
        bus.$emit('sleepof','this is what your code has');

       }
     
    },
    
    
  mixins: [myMixin],}
  </script>

  <style>

@import "./style.css";

</style>
  