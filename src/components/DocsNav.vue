<template>
    <div>
        <NavigationEntry :structure="structure" path="/docs" :indent="21" />
        <slot />
    </div>
</template>
<script>
import NavigationEntry from "./NavigationEntry";
import structure from "../assets/docs/structure.js";
export default {
    data: function(){
        return {
            structure,
            navigationOpened: false,
            mobile: false
        }
    },
    mounted(){
        window.onresize = ()=>{
            this.mobile = window.innerWidth < 720
        }
        window.onresize()
    },
    components: {
        NavigationEntry
    }
}  
</script>

<style lang="scss" scoped>
</style>