<template>
    <div >
        <div id="nav">
            <svg @click="navigationOpened = !navigationOpened" id="open-sidebar" viewBox="0 0 16 16" class="bi bi-list" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path v-if="!navigationOpened" fill-rule="evenodd" d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
            <path v-else fill-rule="evenodd" d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
            </svg>
            <router-link id="logo" to="/">
                <img src="../assets/img/icon.svg">
                <span>
                    Developers
                </span>
            </router-link>
            <div class="links">
                <router-link to="/">Home</router-link>
            </div>
        </div>

        <div id="docs-sidenav" v-if="$route.meta.docs && !(!navigationOpened && mobile)">
            <NavigationEntry :structure="structure" path="/docs" :indent="21" />
        </div>

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
#nav {
    position: fixed;
    margin-top: 0px;
    max-width: 100%;
    width: 100%;
    top: 0px;
    left: 0px;
    padding: 10px 15px;
    background: #FFF;
    border-bottom: 2px #DDD solid;
    z-index: 100;

    #logo,
    #logo:visited {
        user-select: none;
        text-decoration: none;
        img {
            vertical-align: middle;
            width: 50px;
        }
        span {
            vertical-align: middle;
            margin-left: 24px;
            text-decoration: none;
            color: #292929;
            font-weight: 700;
            font-size: 23px;
        }
    }

    #open-sidebar {
        width:  35px;
        height: 35px;
        display: none;
        vertical-align: middle;
        margin-right: 15px;
    }

    .links {
        float: right;
        a, a:link {
            color: #292929;
            margin-right: 10px;
            text-decoration: none;
            font-size: 21px;
            line-height: 65px;
            font-weight: 600;
            line-height: 51px;
            font-size: 20px;
        }
    }
}

#docs-sidenav {
    border-radius: 8px;
    background: #EEEEEEAA;
    backdrop-filter: blur(8px);
    width: 300px;
    padding: 10px 0px;
    position: absolute;
    top: 100px;
    left: 20px;
    overflow: auto;
    
}

@media screen and (max-width: 720px){
    #logo {
        span {
            display: none;
        }
    }

    #nav.docs #open-sidebar {
        display: inline-block;
    }
}
</style>