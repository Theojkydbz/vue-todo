<template>
  <div>
    <div
      @click="isOpen = true"
      class="app-button">
      Create
    </div>
    <div class="modal" :class="{'is-active': isOpen}">
      <div class="modal-content">
        <span @click="close" class="close">&times;</span>
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
      return {
        isOpen: false,
      }
    },
    methods:{
      close(){
        this.isOpen = false
      }
    }
}
</script>

<style scoped lang='scss'>

.close{
    color: #aaa;
    float: right;
    font-size:28px;
    font-weight: bold;
    line-height: 8px;
    &:hover{
        cursor: pointer;
        color: rgb(105, 105, 105)
    }
}

.modal{
  display: none;
  position: fixed;
  z-index: 9999;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto; // enable scroll if needed

  background-color: rgba(236, 236, 236, 0.664);
  &-content{
    margin: 15% auto;
    padding: 20px;
    width: 80%;

    background-color: #fefefe;
    //border: 1px solid #888;
    text-align: left;
    box-shadow: 0 3px 8px 0 rgba(154, 154, 154, 0.452);
    border-radius: 10px
  }

  &.is-active{
      display: block;
  }
}

</style>