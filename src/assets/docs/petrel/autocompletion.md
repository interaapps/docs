There are some official Auto Completions but you can write one yourself.

## Given Auto Completions
Full list of available auto completions: [here](https://github.com/interaapps/Petrel/tree/master/src/languages)
### JavaScript
```js
import { JavaScriptAutoComplete } from  'petrel'

codeEditor.setAutoCompleteHandler(new JavaScriptAutoComplete())
```
<code-editor style="min-height: 250px" lang="javascript" value="const helloWorld = ''
function test(){
    console.log(helloWorld)
}
test()"></code-editor>

### PHP
```js
import { PHPAutoComplete } from  'petrel'

codeEditor.setAutoCompleteHandler(new PHPAutoComplete())
```
<code-editor style="min-height: 250px" lang="php" value="$helloWorld = ''
function test(){
    echo $helloWorld
}
test()"></code-editor>
### Java
```js
import { JavaAutoComplete } from  'petrel'

codeEditor.setAutoCompleteHandler(new JavaAutoComplete())
```
<code-editor style="min-height: 250px" lang="java" value="class Test {
    public String hey;
    public String printHey(){
        System.out.println(hey);
    }
}"></code-editor>

## Creating autocompletion
<code-editor style="min-height: 250px" lang="javascript" paste="uEf3NMfe"></code-editor>