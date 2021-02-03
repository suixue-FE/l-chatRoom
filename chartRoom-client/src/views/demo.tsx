import { defineComponent,onMounted } from 'vue'
import HelloWord from '../components/HelloWorld'
export default defineComponent({
  name:'demo',
  setup(){
    onMounted(()=>{
      console.log(1111);
    })
    return ()=>(
        <HelloWord msg={'123'}></HelloWord>
    )
  }
})