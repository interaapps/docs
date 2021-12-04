<template>
  <div class="contents">
    <div id="big-title">
        <h1>
          Developers
        </h1>
        <div>
          <a class="button" href="#libraries">Libraries</a>
          <a class="button" href="#github-repos">Github Repos</a>
          <a class="button" href="#we-contributed-to">Our Contributions</a>
        </div>
      </div>

    <div id="example">
      <div id="docs">
        <div class="repository-list">
          <!---->
          <div class="repository">
            <div class="top">
              <img src="https://cdn.interaapps.de/icon/interaapps/interaapps.svg">
              <h1>Accounts</h1>
            </div>
            <p>You can use InteraApps Accounts for authentication and more for your website or app</p>
            <div class="buttons">
              <router-link to="/docs/accounts">Docs</router-link>
            </div>
          </div>
          <!---->
          <div class="repository">
            <div class="top">
              <img src="https://cdn.interaapps.de/icon/interaapps/pastefy.png">
              <h1>Pastefy</h1>
            </div>
            <p>Pastefy is a pasting-tool which with an API which allows you to save pastes, create folder and access data.</p>
            <div class="buttons">
              <a href="https://github.com/interaapps/pastefy" target="_blank">GitHub</a>
              <router-link to="/docs/pastefy">Docs</router-link>
            </div>
          </div>
          <!---->
          <div class="repository">
            <div class="top">
              <img src="https://cdn.interaapps.de/icon/interaapps/punyshort.svg">
              <h1>Punyshort</h1>
            </div>
            <p>Punyshort is an URL-Shortener with an API which allows you to access statistics or create an shortened link</p>
            <div class="buttons">
              <a href="https://github.com/interaapps/punyshort" target="_blank">GitHub</a>
              <router-link to="/docs/punyshort">Docs</router-link>
            </div>
          </div>
        </div>
        <h1 id="libraries">Libraries</h1>
        <div class="repository-list">
          <!---->
          <div class="repository">
            <div class="top">
              <img src="https://cdn.interaapps.de/icon/interaapps/cajax.svg">
              <h1>JDom</h1>
            </div>
            <p>JDom is a really easy and light dom editor for Javascript</p>
            <div class="buttons">
              <a href="https://github.com/interaapps/jdom" target="_blank">GitHub</a>
              <router-link to="/docs/jdom">Docs</router-link>
            </div>
          </div>
          <!---->
          <div class="repository">
            <div class="top">
              <img src="https://cdn.interaapps.de/icon/interaapps/cajax.svg">
              <h1>Cajax</h1>
            </div>
            <p>Cajax/Prajax is a really simple Javascript HTTP-Client</p>
            <div class="buttons">
              <a href="https://github.com/interaapps/cajax" target="_blank">GitHub</a>
              <router-link to="/docs/cajax">Docs</router-link>
            </div>
          </div>
          <!---->
          <div class="repository">
            <div class="top">
              <img src="https://cdn.interaapps.de/icon/interaapps/ulole.svg">
              <h1>Ulole-Framework</h1>
            </div>
            <p>Ulole-Framework is a really simple PHP-Framework</p>
            <div class="buttons">
              <a href="https://github.com/interaapps/ulole-framework" target="_blank">GitHub</a>
              <a href="/docs/cajax">Docs</a>
            </div>
          </div>
          <!---->
          <div class="repository">
            <div class="top">
              <img src="https://cdn.interaapps.de/icon/interaapps/ulole.svg">
              <h1>Ulole-ORM</h1>
            </div>
            <p>Ulole-Framework is a really simple PHP-ORM which allows you to easily access your MySQL-Databases</p>
            <div class="buttons">
              <a href="https://github.com/interaapps/ulole-framework" target="_blank">GitHub</a>
              <a href="https://github.com/interaapps/ulole-framework#readme">Docs</a>
            </div>
          </div>
          <!---->
          <div class="repository">
            <div class="top">
              <img src="https://cdn.interaapps.de/icon/interaapps/ulole.svg">
              <h1>Deverm-Router</h1>
            </div>
            <p>The Deverm-Router allows you to route easily in PHP</p>
            <div class="buttons">
              <a href="https://github.com/interaapps/deverm-router" target="_blank">GitHub</a>
              <a href="https://github.com/interaapps/deverm-router#readme">Docs</a>
            </div>
          </div>
          <!---->
          <div class="repository">
            <div class="top">
              <img src="https://cdn.interaapps.de/icon/interaapps/interaapps.svg">
              <h1>Accounts Java Client</h1>
            </div>
            <p>A accounts.interaapps.de java api client.</p>
            <div class="buttons">
              <a href="https://github.com/interaapps/accounts-java-client" target="_blank">GitHub</a>
              <a href="https://github.com/interaapps/accounts-java-client#readme">Docs</a>
            </div>
          </div>
          <!---->
          <div class="repository">
            <div class="top">
              <img src="https://cdn.interaapps.de/icon/interaapps/passwords.svg">
              <h1>Passwords Java Client</h1>
            </div>
            <p>An Java API-Client for Passwords</p>
            <div class="buttons">
              <a href="https://github.com/interaapps/passwords-java-client" target="_blank">GitHub</a>
              <a href="https://github.com/interaapps/passwords-java-client#readme">Docs</a>
            </div>
          </div>
          <!---->
          <div class="repository">
            <div class="top">
              <img src="https://cdn.interaapps.de/icon/interaapps/punyshort.svg">
              <h1>Punyshort Java Client</h1>
            </div>
            <p>A simple Punyshort API-Client for Java</p>
            <div class="buttons">
              <a href="https://github.com/interaapps/punyshort-java-client" target="_blank">GitHub</a>
              <a href="https://github.com/interaapps/punyshort-java-client#readme">Docs</a>
            </div>
          </div>
          <!---->
          <div class="repository">
            <div class="top">
              <img src="https://cdn.interaapps.de/icon/interaapps/pastefy.png">
              <h1>Pastefy Java Client</h1>
            </div>
            <p>A Pastefy API-Client for Java</p>
            <div class="buttons">
              <a href="https://github.com/interaapps/pastefy-java-apiclient" target="_blank">GitHub</a>
              <a href="https://github.com/interaapps/pastefy-java-apiclient#readme">Docs</a>
            </div>
          </div>
        </div>

        <h1 id="github-repos">GitHub Repositories</h1>
        <div class="repository-list">
          <div v-for="githubRepo in githubRepos" :key="githubRepo.id" class="repository">
            <div class="top">
              <img src="../assets/icons/repository.svg" style="width: 16px !important">
              <h1>{{githubRepo.name}}</h1>
              <a class="stargazers" :href="githubRepo.html_url+'/stargazers'">
                <span>{{githubRepo.stargazers_count}}</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16"><path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.523-3.356c.329-.314.158-.888-.283-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767l-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288l1.847-3.658 1.846 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.564.564 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/></svg>
              </a>
            </div>
            <p>
              {{githubRepo.description}}
            </p>
            <div class="buttons">
              <a :href="githubRepo.html_url" target="_blank">GitHub</a>
              <!-- <router-link :to="'/docs/'+githubRepo.name">Docs</router-link> -->
            </div>
          </div>
        </div>
        <h1 id="we-contributed-to">We contributed in and use</h1>
        <div class="repository-list">
          <!---->
          <div class="repository">
            <div class="top">
              <img src="https://javawebstack.org/assets/img/icon-dark.svg">
              <h1>JavaWebStack</h1>
            </div>
            <p>JWS allows you to create a Java Web-Application with ease in a few minutes. IA is using it for nearly everything</p>
            <div class="buttons">
              <a href="https://github.com/javawebstack" target="_blank">GitHub</a>
              <a href="https://javawebstack.org/">Docs</a>
            </div>
          </div>
        </div>
      </div>


    </div>
  </div>
</template>

<script>
import { Prajax } from "cajaxjs";

export default {
  name: 'Home',
  data:()=>({
    githubRepos: []
  }),
  mounted(){
    Prajax.get("https://api.github.com/orgs/interaapps/repos")
      .then(res => this.githubRepos = res.json())
  },
  components: {
  }
}
</script>
<style lang="scss" scoped>
#top {
  max-width: 1000px;
  margin: auto;
  text-align: center;
  margin-top: 210px;
  h1 {
    font-size: 70px;
    margin-bottom: 20px;
    font-weight: 500;
    color: #323232;
  }
 
}

#example {
  width: 100%;
  margin-top: 100px;
  margin-bottom: 100px;
  #description {
    width: 47%;
    h1 {
      font-size: 40px;
      margin-bottom: 20px;
      color: #434343;
    }
    p {
      color: #434343;
      font-size: 26px;
      font-weight: 700;
    }
  }
  #code-block {
    background: #252539;
    overflow: auto;
    left: 50%;
    color: #FFF;
    border-radius: 10px;
    padding: 15px;
    width: 600px;
    float: right;
    position: absolute;
    margin-left: 120px;
    margin-top: 20px;
    code {
      pre {
        font-size: 21px;
      }
    }
  }
}

#docs {
  h1 {
    text-align: center;
    font-size: 40px;
    color: #545454;
    margin-bottom: 50px;
    margin-top: 40px;
  }

  .repository-list {
    text-align: center;
    margin: auto;
  }

  .repository {
    text-align: left;
    display: inline-block;
    text-decoration: none;
    color: #545454;
    border-radius: 10px;
    border: 2px #CCCCCC solid;
    padding: 8px;
    width: calc(33% - 6px);
    max-width: 100%;
    vertical-align: top;
    margin: 5px;

    .top {
      margin-bottom: 5px;
      img, svg {
        width: 25px;
        display: inline-block;
        vertical-align: middle;
      }
      h1 {
        display: inline-block;
        vertical-align: middle;
        text-align: right;
        font-size: 18px;
        margin-left: 10px;
        margin-bottom: 0px;
        margin-top: 0px;
        color: #747474;
      }
      .stargazers {
        display: inline-block;
        float: right;
        color: #767676;
        text-decoration: none;
        svg {
          margin-left: 4px;
          vertical-align: middle;
          margin-bottom: 1px;
          color: #767676;
        }

        span {
          vertical-align: middle;
          font-weight: 600;
        }

        &:hover {
          color: #434343;
          svg {
            color: #434343;
          }
        }
      }

      .stargazers {
        display: inline-block;
        float: right;
        color: #767676;
        text-decoration: none;
        svg {
          margin-left: 4px;
          vertical-align: middle;
          margin-bottom: 1px;
          color: #767676;
        }

        span {
          vertical-align: middle;
          font-weight: 600;
        }

        &:hover {
          color: #434343;
          svg {
            color: #434343;
          }
        }
      }
    }
    p {
      min-height: 80px;
      font-weight: 500;
      font-size: 18px;
    }
    .buttons {
      a, a:link, a:visited {
        color: #434343;
        margin-right: 7px;
        font-weight: 500;
        text-decoration: none;
      }

      a:hover {
        text-decoration: underline;
      }
    }
  }
}


#block1 {
  position: relative;
  animation: block1anim 10s infinite;
}

#block2 {
  position: relative;
  animation: block2anim 10s infinite;
  
}

#block3 {
  position: relative;
  animation: block3anim 10s infinite;
}

@keyframes block1anim {
  0% {
    transform: none;
  }
  50% {
    transform: translateY(-2px) translateX(2.3px);
  }
  100%{
    transform: none;
  }
}

@keyframes block2anim {
  0%{
    transform: none;
  }
  50%{
    transform: translateY(-2px) translateX(-2.3px);
  }
  100%{
    transform: none;
  }
}

@keyframes block3anim {
  0%{
    transform: none;
  }
  50%{
    transform: translateY(2.3px);
  }
  100%{
    transform: none;
  }
}

@media screen and (max-width: 720px){
  #example {
  width: 100%;
  margin-top: 100px;
  margin-bottom: 100px;
  #description {
    width: 100%;
    h1 {
      text-align: center;
    }
  }


  .repository {
    width: 100%;
    display: block;
    margin-left: 0px;
  }
  
  #code-block {
    float: none;
    width: 100%;
    position: static;
    margin-left: 0px;
    margin-top: 0px;
    margin-bottom: 50px;
    code {
      pre {
        font-size: 21px;
      }
    }
  }
}
}
</style>