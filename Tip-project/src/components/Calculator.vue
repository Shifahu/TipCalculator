
<template>
<div>
    <input type="text" v-model="inputTotal"  placeholder="total bill" />
    <span v-if="!inputTotal">Cannot be zero</span>
    <input type="text" v-model="inputPeople"  placeholder="per person" />
    <span v-if="!inputPeople">Cannot be zero</span>
    <div class="tipCalc">
    <button type="calculator" v-for="percent in tipPercentages" :key="percent" @click="calculateTip(percent), totalAmount()">
      {{ percent }}%
    </button>
    <input type="customPercentage"
     v-model="customPercentage"  
     placeholder="Custom" 
     @keyup="calculateTip(customPercentage), totalAmount()"
     />
</div>
    <div>Tip Amount: {{this.tip}}</div>
    <div>Total Amount: {{this.bill}}</div>
    <button type="clear" @click="clearInput">RESET</button>
</div>

</template>

    <script>


    export default {
        name: 'Calculator',
        data(){
return{
inputTotal: 0,
inputPeople: 0,
tip: 0,
bill:0,
customPercentage:0,
tipPercentages: [5, 10, 15, 20, 25, 50],
}
        },

        methods: {
calculateTip(num){
    if(this.inputPeople){
        this.tip = (((num/100) * this.inputTotal)/this.inputPeople).toFixed(2)
    } else {
       this.tip = (((num/100) * this.inputTotal)).toFixed(2)
}

   console.log(num, "custom-tip")

}, 
totalAmount(){
    if(this.inputPeople){
        this.bill = (this.inputTotal / this.inputPeople).toFixed(2)
    } else {
        this.inputTotal.toFixed(2)
    }
},
clearInput(){
    this.tip =0, this.bill = 0, this.inputPeople = 0, this.inputTotal=0, this.customPercentage=0
}
        }
        
        
    }
    </script>


<style scoped>

</style>
