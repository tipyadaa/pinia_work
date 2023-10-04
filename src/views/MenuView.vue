<script setup>
import { ref } from 'vue' 
//import {menuList} from '@/stores/menu'
import { menuStore } from '../stores/menu';
const allmenu = menuStore()
const alist = allmenu.menuList

function del(i){
    allmenu.deleteManu(i);
}

function addMenu(){
    const aMenu = ref (
        {title:'ไก่ทอด',img:'',price:20,rating:5})
        allmenu.addMenu(aMenu.value)
}

</script>

<template>
    <div>
        <h1>Menu list</h1>

        <ul>
            <li v-for="(n,index) in alist" :key="index">
                ชื่อ:{{ n.title }}
                <p><img :src="n.img" class="menu-image"></p>
                <p>ราคา:{{ n.price }}</p>
                <button @click="del(index)">ลบ</button>
                
                </li>    

            
        </ul>
        <ul>
            <button @click="addMenu()">เพิ่ม</button>
        </ul>
    </div>
</template>
s
<style>
.menu-image {
  width: 100px;
  height: 100px;
}
</style>
