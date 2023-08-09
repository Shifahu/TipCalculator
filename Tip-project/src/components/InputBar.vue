<template>
    <div>
        <input type="text" v-model="input"  placeholder= {{inputtype}} />
        </div>
</template>

<script>

defineProps({
      inputtype: {
        type: String,
        required: true
      }
    })

export default {
    name: 'InputBar',
    data() {
        return {
            input: ''
        }
    },

    methods: {
     
    }
}



</script>