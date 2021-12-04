<template>
  <div id="contents">
    <Navigation ref="navigation" />
    <div style="margin-top: 100px" :style="{'min-height': $route.meta.docs ? 'calc(100vh - 165px)' : 'calc(100vh - 318px)'}">
      <router-view :class="{docs: $route.meta.docs}" />
    </div>
    <Footer ref="footer" />
  </div>
</template>
<script>
import Navigation from "interaappswebsite/src/components/Navigation";
import Footer from "interaappswebsite/src/components/FooterComponent";
export default {
  components: {
    Navigation,
    Footer
  },
  mounted(){
  
    for (const url of [
      this.$refs.navigation.urls[2],
      ...this.$refs.footer.urls
    ]) {
      url.type = 'A'
      url.url = 'https://interaapps.de'+url.url
      console.log(url);
    }
    
  }
  
}
</script>