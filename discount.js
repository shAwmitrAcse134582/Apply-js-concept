/* 
*1.If ticket numbers is less than 100,per ticket price :100
!2.If ticket numbers is more than 100,but less than 200.First 100 tickets will be 100/ticket.rest ticket  will be 90 tk per piece.
todo:3If you  purchase more than 200 tickets
*first 100---->100 tk
*101-200----->90 tk
*200+--->70 tk
*/
let ticketNumber = 200;
if (ticketNumber <= 100)
    console.log(ticketNumber * 100);
else if (ticketNumber > 100 && ticketNumber <= 200) {
    console.log(100 * 100 + (ticketNumber - 100) * 90);
}
else {
    console.log(100 * 100 + 100 * 90 + (ticketNumber - 200) * 70);
}