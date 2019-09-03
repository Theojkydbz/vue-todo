<template>
  <Modal ref="modal" >
      <form class="app-form">
          <div class="form-control">
            <label class="label">Title</label>
            <input 
              v-model="form.title"
              class="form-input" 
              type="text" name="">
          </div>
          <div class="form-control">
            <label class="label">Description</label>
            <textarea 
                v-model="form.description"
                class="form-input"
                name="" 
                id="" 
                cols="30" 
                rows="5">
            </textarea>
          </div>
          <div class="app-error">
              <div class="form-error">
                  {{formError}}
              </div>
          </div>
          <button 
            @click="submitForm"
            type="button" 
            class="app-button is-primary">Confirm</button>
        </form>
    </Modal>
</template>

<script>
import Modal from '@/components/Modal'
export default {
    components:{
        Modal
    },
    data(){
      return {
        form:{
          title: '',
          description: ''
        },
        formError: ''
      }
    },
    computed:{
        isFormValid() {
            return this.form.title.length > 8 && this.form.description.length > 10 ? true : false
        },
        modal() {
            return this.$refs.modal
        }
    },
    methods: {
      submitForm(){
        if (this.isFormValid) {
            this.formError= ''
            this.$emit('formSubmitted', {...this.form})
            this.modal.close()
            this.resetForm()
        } else {
            this.formError= 'Form Error! Title needs to be longer than 8 characters and description longer than 10 character'
        }
      },
      resetForm(){
        this.form = {
            title: '',
            description: ''
        }
      }
    }

}
</script>

<style lang='scss' scoped>
.form-error{
    margin-bottom: 15px;
}


</style>