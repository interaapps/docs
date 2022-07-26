<template>
    <div class="contents">
        <div id="big-title">
            <h1>
                Ulole-Framework
            </h1>
            <div>
                <router-link class="button" to="/docs/ulole">Docs</router-link>
                <a class="button" href="https://github.com/interaapps/ulole-framework">GitHub</a>
            </div>
        </div>
        <br><br><br><br>
        <div ref="firstCodeEditor"></div>
    </div>
</template>
<script>
import { CodeEditor } from 'petrel'
import PHPAutoComplete from 'petrel/src/languages/PHPAutoComplete'

import Prism from 'prismjs';
require('prismjs/components/prism-php')

export default {
    data: ()=>({
    }),
    mounted(){

        new CodeEditor(this.$refs.firstCodeEditor, {readonly: true})
            .setValue(`<?php
namespace com\\example\\myproject;

use com\\example\\myproject\\model\\User;
use de\\interaapps\\ulole\\orm\\UloleORM;
use de\\interaapps\\ulole\\core\\Environment;
use de\\interaapps\\ulole\\core\\WebApplication;
use de\\interaapps\\ulole\\core\\traits\\Singleton;

class App extends WebApplication {
    
    use Singleton;

    public static function main(Environment $environment){    
        self::setInstance( (new self())->start($environment) );
    }

    public function init() : void {
        $this->getConfig()
            ->loadENVFile(".env"); 
            
        $this->initDatabase("database", "main");
        UloleORM::register(User::class);
    }

    public function run() : void {
        $this->getRouter()
            ->addController(new UserController());
    }
}`)
            .setAutoCompleteHandler(new PHPAutoComplete())
            .setHighlighter(c => Prism.highlight(c, Prism.languages.php))
            .create()
    }
}
</script>