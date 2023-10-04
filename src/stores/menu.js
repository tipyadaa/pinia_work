import { defineStore } from "pinia"
import { ref } from "vue"

//เมนูอาหาร
export const menuStore = defineStore('menu',()=>{

const menuList=ref([
{title:'ขนมจีนน้ำเงี้ยว  ',img:'https://www.toke-tong.com/wp-content/uploads/2021/02/%E0%B8%82%E0%B8%99%E0%B8%A1%E0%B8%88%E0%B8%B5%E0%B8%99%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B9%80%E0%B8%87%E0%B8%B5%E0%B9%89%E0%B8%A2%E0%B8%A7.jpg',price:50,rating:5},
{title:'ไส้อั่ว',img:'https://www.toke-tong.com/wp-content/uploads/2021/02/%E0%B9%84%E0%B8%AA%E0%B9%89%E0%B8%AD%E0%B8%B1%E0%B9%88%E0%B8%A7.jpg',price:55,rating:5},
{title:'แกงกระด้าง',img:'https://www.toke-tong.com/wp-content/uploads/2021/02/%E0%B9%81%E0%B8%81%E0%B8%87%E0%B8%81%E0%B8%A3%E0%B8%B0%E0%B8%94%E0%B9%89%E0%B8%B2%E0%B8%87.jpg',price:60,rating:4},
{title:' แกงผักหละไข่มดแดง',img:'https://www.toke-tong.com/wp-content/uploads/2021/02/%E0%B9%81%E0%B8%81%E0%B8%87%E0%B8%9C%E0%B8%B1%E0%B8%81%E0%B8%AB%E0%B8%A5%E0%B8%B0.jpg',price:55,rating:5},
{title:'แกงหน่อไม้ปลาดุก',img:'https://www.toke-tong.com/wp-content/uploads/2021/02/%E0%B9%81%E0%B8%81%E0%B8%87%E0%B8%AB%E0%B8%99%E0%B9%88%E0%B8%AD%E0%B9%84%E0%B8%A1%E0%B9%89.jpg',price:40,rating:5},
{title:'แกงอ่อม',img:'https://www.toke-tong.com/wp-content/uploads/2021/02/%E0%B9%81%E0%B8%81%E0%B8%87%E0%B8%AD%E0%B9%88%E0%B8%AD%E0%B8%A1.jpg',price:50,rating:5}
])

function deleteManu(i){
    menuList.value.splice(i,1);
}
function addMenu(x){
    menuList.value.push(x)
}

return{menuList, deleteManu, addMenu}
})

