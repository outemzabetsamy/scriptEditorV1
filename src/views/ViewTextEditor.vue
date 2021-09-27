<template>
  <div class="text:editor">
      <EditorToolbar v-model:type="selectedType" :toggles="selectedToggles"
      v-model:wrap="selectedWrap" v-model:viewHTML="viewHTML" :items="toolbarItems">
      </EditorToolbar>
      <EditorContent v-model="documentModel" :type="selectedType" :toggles="selectedToggles" :wrap="selectedWrap"/>
    <!--
    <div class="editor-content">
        <br/>
        <br/>
        Type/Block: {{selectedType}}<br/>
        Toggle Buttons: {{selectedToggles}}<br/>
        In wrap Elements: {{selectedWrap}}<br/>
        View HTML: {{viewHTML}}
    </div>
    -->
  </div>
</template>

<script>
import EditorToolbar from '../components/Editor/EditorToolbar.vue'
import EditorContent from '../components/Editor/EditorContent.vue'

export default {
name:'ViewTextEditor',
data(){
    return{
        selectedType: 'p',
        selectedToggles:[],
        selectedWrap:'',
        viewHTML: false,
        toolbarItems: [],
    }
},
computed:{
    selToggles(){
        return JSON.parse(JSON.stringify(this.selectedToggles));
    }
},
created(){
console.log(this.selectedToggles);
console.log(this.selectedType);
 this.emitter.on("eventToggles",e=>{
     this.selectedToggles=e.tg
 })
 this.emitter.on("eventWrap",e=>{
     this.selectedToggles=e.tg
 })
},
components:
{
EditorToolbar,
EditorContent,
},
}
</script>

<style>

</style>