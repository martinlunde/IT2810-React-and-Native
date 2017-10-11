import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import ToDoBanner from './TodoBanner';
import ToDoForm from './TodoForm';
import ToDoList from './TodoList';
import ToDoListItem from './TodoListItem';
import ToDoFilter from './TodoFilter';
import ToDoCatelogForm from './TodoCatelogForm';

var ToDoCatelog  = React.createClass({
		changeTodo : function(e){
			this.props.onSelected( e.currentTarget.dataset.id);
		},
		checkActive:function(i){
	
			if (i == this.props.selectedID)
			{
				return "list-group-item active";
			}
			else
			{
				return "list-group-item ";
			}
		},
		render: function(){	
		    var selectedID = this .props.selectedID;
		
			var allitems =this.props.Todos;

			return <div className="list-group">
			{
				allitems.map(function(item,i){ 
				var _class = "";
				if (i == this.props.selectedID)
                {
                    _class =  "list-group-item active";
                }
                else
                {
                    _class =  "list-group-item ";
                }
				return(
			
					 <a href="#" key={i} data-id={i} className={_class} onClick={this.changeTodo} ><span className="badge" >{item.items.length}</span>{item.name}</a>
				)
			},this)}</div>;
		}
	});

export default ToDoCatelog;