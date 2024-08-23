// javascript
function date_time1(){
    const today = new Date();
    // const currentDay = today.getDay();
    // const currentTime = today.getHours();
    const currentDay = today.toDateString(); // Converts the date to a string (e.g., "Wed Aug 15 2024")
    const currentTime = today.toLocaleTimeString(); // Converts time to a string (e.g., "10:30:00 AM")

    document.getElementById('date').innerHTML = currentDay;
    document.getElementById('time').innerHTML = currentTime;            
}

// JQuery
$(document).ready(function () {
    //  ye apun ka hai
    $('.cells').click(function () {
        if ($(this).children('.content').css('display') === 'none') {
            // all this for .cells element   | all this for child of that partciular .cells element
            // $('.cells').css({ 'flex-grow': '1', 'border': '1px solid black', 'background-color':' rgb(158, 83, 37)' ,'color':'black','padding':'0px' }).children('.content').css('display', 'none'); //other cells
            $('.cells').removeClass('active1').children('.content').css('display', 'none'); // if it was active before   -- chaining done

            // $(this).css({ 'flex-grow': '3', 'border': '3px solid rgb(108, 59, 17)', 'background-color':'rgb(108, 59, 17)' ,'color':'white', 'padding':'20px'}).children('.content').css('display', 'block'); // this cell     --- this method is inefficient to add styling
            $(this).addClass('active1').children('.content').css('display', 'block');
        }
        else {
            // if you click again, but the content is already visible, set all cells content display to none
            // $('.cells').css('flex-grow', '1').children('.content').css('display', 'none'); //other cells

            // $(this).css({ 'flex-grow': '1', 'border': '1px solid black', 'background-color':' rgb(158, 83, 37)' ,'color':'black','padding':'5px' }).children('.content').css('display', 'none'); // this cell  -- inefficient,
            // thus
            $(this).removeClass('active1').children('.content').css('display', 'none');
        }
    })
});

// ye copilot se leke thoda modify kiya, and then sab samaj ke upar implement kiya khud se
// $(document).ready(function () {
//     $('.cells').click(function () {
//         // Reset all cells to flex-grow: 1
//         // $('.cells').css('flex-grow', '1');
//         // // Set clicked cell to flex-grow: 3
//         // $(this).css('flex-grow', '3');
//         $('.cells').css('flex-grow', '1').children('.content').css('display', 'none');
//         // Set clicked cell to flex-grow: 3 and show content
//         $(this).css('flex-grow', '3').children('.content').css('display', 'block');
//     });
// });