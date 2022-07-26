import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Doc from '../views/Doc'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {
      title: "Homepage"
    },
    component: Home
  },
  {
    path: '/cajax',
    name: 'Cajax',
    component: ()=>import("@/views/pages/Cajax")
  },
  {
    path: '/ping',
    name: 'Ping',
    component: ()=>import("@/views/pages/Ping")
  },
  {
    path: '/petrel',
    name: 'Petrel',
    component: ()=>import("@/views/pages/Petrel")
  },
  {
    path: '/ulole',
    name: 'Ulole',
    component: ()=>import("@/views/pages/ulole/Framework")
  }
]


const structure = require("../assets/docs/structure.js").default
let tableIndex = 0
function createTableFromSpec(obj, jsonable = false){
  let table = 'key|type|description|example\n'
             +'---|---|---|---\n'
  console.log(obj);
  for (const key in obj) {
    const struct = obj[key]

    table += key
      +"|"+struct.type+(struct.type == 'enum' ? '('+struct.values.join(', ')+')' : '')+(struct.required ? '<span style="color: #EE3333">*</span>' : '')
      +"|"+struct.description
      +"|"+(struct.type=='boolean' ? (struct.example ? 'true' : 'false') : struct.example)+"\n"
  }

  if (jsonable){
    const obj2 = {}
    for (const key in obj) {
      obj2[key] =  obj[key].jsonExample || obj[key].example
    }
    table += `
<a onclick='document.getElementById("tbljson${++tableIndex}").style.display = "block"; return false' href='#'>Show as json</a>

<pre id='tbljson${tableIndex}' class=" language-json" style='display: none'>
<code class=" language-json">${JSON.stringify(obj2, null, 4)}</code>
</pre>`
}

  return table
}

function walkStructure(basePath, structure) {
  if(structure.content !== undefined){
    let title = structure.title
    let content = structure.content

    if (structure.type == 'spec') {
      const spec = structure.content
      content = ''
      
      const links = {}
      let linksIndex = 0
      console.log(spec);
      spec.urls.forEach(url => {
        const link = 'title-'+(++linksIndex)
        if (typeof url == 'string'){
          content += `<h1 id="${link}">${url}</h1>`
          links[link] = url
        } else {
          links[link] = url.name
          content += `<h2 id="${link}" style='margin-bottom: -30px'>${url.name}</h2>
<h3><req-method class='${url.method}'>${url.method}</req-method> ${url.url}</h3>
${url.description ? url.description : ''}

${url.query ? '#### Query Parameters\n' + createTableFromSpec(url.query) : ''}

${url.request ? '#### Request\n' + createTableFromSpec(url.request, true) : ''}

${url.headers ? '#### Request-Headers\n' + createTableFromSpec(url.headers) : ''}

${url.response ? '#### Response\n' + createTableFromSpec(url.response, true) : ''}

---
`
        }
      })
      
      for (const [link, name] of Object.entries(links).reverse()) {
        content = `- [${name}](#${link})` + "\n" + content
      }
      content = "<h2>Table of contents</h2>\n" + content

      content = "`Base-Url`: "+spec.baseUrl+ "<br><br>" + (structure.description ? "<h2>Description</h2>" + structure.description+'<br><br>' : '') + content
    }

    routes.push({
      path: basePath + '/' + structure.name,
      meta: {
        docs: true,
        title,
        content
      },
      component: Doc
    })

  }
  if(structure.children){
    structure.children.forEach(c => {
      walkStructure(basePath + '/' + structure.name, c)
    })
  }
}

walkStructure("", structure)


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.afterEach(()=>{
  window.scrollTo(0, 0)
})

router.beforeEach((to, from, next)=>{
  document.title = (to.meta.title || "404") + " | InteraApps Developers"
  next()
})

export default router
