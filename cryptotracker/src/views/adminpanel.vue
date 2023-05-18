<template>
    ok
</template>

<script>
import userinfo from "../stores/userinfo";
import router from "@/router";
export default {
  name: "adminpanel",
  data: function () {
    return {
    userinfo,
    };
  },
mounted(){
  setTimeout(()=>{
    const admin = userinfo.currentUser === "adminn@gmail.com";
    console.log(userinfo.currentUser);
      if(!admin){
    router.push("Home");
  }  
    },500);  
},
}

</script>