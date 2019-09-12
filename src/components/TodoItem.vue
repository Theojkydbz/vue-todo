<template>
	<div v-if="!editMode" class="todo-item">
		<div class="todo-item-content">
			<div class="todo-item-content-title">
				{{title}}
			</div>
			<div class="todo-item-content-description">
				{{description}}
			</div>
		</div>
		<button 
			@click='editMode = true' 
			class="app-button is-warning">Edit
		</button>
		<button 
			@click='deleteTodo' 
			class="app-button is-danger">Delete
		</button>
		
	</div>


	<div v-else class="todo-item">
		<div class="todo-item-content">

			<form class="app-form">
				<div class="form-control">
					<label class="label">Title</label>
					<input 
						v-model="todo.title"
						class="form-input" 
						type="text" name="">
				</div>
				<div class="form-control">
					<label class="label">Description</label>
					<textarea 
						v-model="todo.description"
						class="form-input"
						name="" 
						id="" 
						cols="30" 
						rows="3">
					</textarea>
				</div>
				<button @click.prevent='editTodo' class="app-button is-warning">Update</button>
				<button @click.prevent='editMode = false' class="app-button is-danger">Cancel</button>
			</form>
		</div>
	</div>
</template>

<script>
import store from '@/store'
export default {
	// props: ['title', 'description'],
	props: {
		title:{
			type: String,
			required:true,
			default:'Default title'
		},
		description:{
			type: String,
			required: false
		},
		_id:{
			type: String,
			required: true
		}
		// Array, Object, String, Number, Boolean, Function
	},
	data() {
		return {
			editMode: false,
			todo: {
				_id: this._id,
				title: this.title,
				description: this.description
			}
		}
	},
	methods: {
		editTodo(){
			store.dispatch('updateTodo', {...this.todo})
			this.editMode = false
		},
		deleteTodo(){
			store.dispatch('deleteTodo', {...this.todo})
		}
	}
}
</script>

<style lang='scss'>
.todo{
        &-item{
            min-height: 70px;
            margin: 10px;
            padding: 10px;

            background-color: rgb(255, 255, 255);
            color: rgb(153, 153, 153);
            border-radius: 5px;
            font-size: 23px;
			box-shadow: 0 3px 8px 0 rgba(154,154,154,.32);
            &-content{
				margin-bottom: 10px;

                &-title{
                    font-weight: bold
                }
                &-description{
                    font-weight: 100;
                    font-size: 19px;
                }
            }
        }
    }
</style>