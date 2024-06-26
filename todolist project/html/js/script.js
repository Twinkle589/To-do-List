let todoele = document.getElementById("taskinfo");
        let tasklist = document.getElementById("tasklist");

        document.getElementById("add").onclick = function(){
            if(todoele.value.length == 0){
                alert("Enter a task details");
            } else {
                tasklist.innerHTML += `
                <div class="task"> 
                    <input type="text" class="task-input" value="${todoele.value}" readonly>
                    <button class="favorite"><i class="far fa-heart"></i></button>
                    <button class="edit"><i class="fas fa-edit"></i></button>
                    <button class="del"><i class="fa fa-trash"></i></button>
                </div>`;

                // Add event listeners to edit buttons
                var editButtons = document.querySelectorAll('.edit');
                editButtons.forEach(function(button) {
                    button.addEventListener('click', function() {
                        var taskInput = this.parentNode.querySelector('.task-input');
                        taskInput.removeAttribute('readonly');
                        taskInput.focus(); // Focus the input field
                    });
                });

                // Add event listener to task input fields
                var taskInputs = document.querySelectorAll('.task-input');
                taskInputs.forEach(function(input) {
                    input.addEventListener('blur', function() {
                        this.setAttribute('readonly', true);
                    });
                });

                // Add event listener to delete buttons
                var delButtons = document.querySelectorAll('.del');
                delButtons.forEach(function(button) {
                    button.addEventListener('click', function() {
                        this.parentNode.remove();
                    });
                });

                // Add event listener to favorite buttons
                var favoriteButtons = document.querySelectorAll('.favorite');
                favoriteButtons.forEach(function(button) {
                    button.addEventListener('click', function() {
                          this.classList.toggle('favorited'); // Toggle favorited class on click
                    });
                });
                // Add event listener to favorite buttons
var favoriteButtons = document.querySelectorAll('.favorite');
favoriteButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        var heartIcon = this.querySelector('i');

        // Toggle between hollow and filled heart icons
        if (heartIcon.classList.contains('far')) {
            heartIcon.classList.remove('far');
            heartIcon.classList.add('fas'); // Add filled heart class
        } else {
            heartIcon.classList.remove('fas'); // Remove filled heart class
            heartIcon.classList.add('far');
        }
    });
});




                todoele.value = "";
            }
        };