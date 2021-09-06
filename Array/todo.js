// add todo's
var add_todo_btn = document.getElementById('add-btn');
var todo_input = document.getElementById('todo-input');
var list = document.getElementById('list');
add_todo_btn.addEventListener('click',function(){
    var todo = todo_input.value;

    var item = document.createElement('Div');
    item.classList.add('item');

    var item_text = document.createElement('Div');
    item_text.classList.add('item-text');
    item_text.textContent=todo;

    var edit_input = document.createElement('INPUT');
    edit_input.classList.add('edit-input');
    edit_input.classList.add('hide');
    edit_input.name = 'edit-input';
    edit_input.type = 'text';
    edit_input.value= todo;

    //Edit todo's

    var edit_input_btn = document.createElement('BUTTON');
    edit_input_btn.textContent= 'UPDATE';
    edit_input_btn.classList.add('action-btn');
    edit_input_btn.classList.add('update-btn');
    edit_input_btn.classList.add('hide');
    edit_input_btn.type='button';
    

    var action_btns = document.createElement('Div');
    action_btns.classList.add('action-btns');

    var edit_btn = document.createElement('BUTTON');
    edit_btn.classList.add('action-btns');
    edit_btn.classList.add('edit-btn');
    edit_btn.textContent='EDIT';

    //Edit todo's

    edit_btn.addEventListener('click', function(){
        edit_input.classList.remove('hide');
        item_text.classList.add('hide');
        edit_input_btn.classList.remove('hide');
        edit_input_btn.addEventListener('click', function(){
            item_text.textContent= edit_input.value;
            edit_input.classList.add('hide');
            item_text.classList.remove('hide');
            edit_input_btn.classList.add('hide');
        });
    });

    var remove_btn = document.createElement('BUTTON');
    remove_btn.classList.add('action-btn');
    remove_btn.classList.add('remove-btn');
    remove_btn.textContent='REMOVE';

    remove_btn.addEventListener('click', function(){
        item.parentNode.removeChild(item);
    });

    action_btns.append(edit_input_btn);
    action_btns.append(edit_btn);
    action_btns.append(remove_btn);
    item.append(item_text);
    item.append(edit_input);
    item.append(action_btns);
    list.append(item);

    var cancel_btn = document.getElementById('can=btn');
    cancel_btn.classList.add('action-btn');
    cancel_btn.classList.add('remove-btn');
    
    cancel_btn.addEventListener('click', function(){
        item.parentNode.removeChild(item);
    })

    todo_input.value='';
});