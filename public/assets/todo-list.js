//The .ready() method offers a way to run JavaScript code as soon as
//the page's Document Object Model (DOM) becomes safe to manipulate.
$(document).ready(() => {
    $('form').on('submit', (e) => {
        e.preventDefault(); //this is necessary here otherwise, the browser resubmits the form on page refresh or re-render
        const item = $('form input');
        const todo = {item: item.val()};
        $.ajax({
            type:"POST",
            url:"/todo",
            data:todo,
            success:function(data) {
                //reload the page when the request is successful
                location.reload();
            }
        })
    });

    $('li').on('click', function() {
        const item = $(this).text().trim().replace(/ /g, '-'); //this is done because spaces are not allowed in url
        console.log(item);
        $.ajax({
            type:'DELETE',
            url: '/todo/' + item,
            success: function(data) {
                location.reload();
            }
        })
    })
})
