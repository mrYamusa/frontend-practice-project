// var facebookUser1 ={
//     email: "Nana@example.com",
//     userName: "mr.Yamusa",
//     passwd: "*atm-236^",
//     followers: ["Dami","Yamusa","Ola","Saanu"],
//     postss: [],
//     dateOB: "12/02/1981"
// }
// var facebookUser2 ={
//     email: "Yamus@example.com",
//     userName: "mrs.Yamusa",
//     passwd: "*ftm-236^",
//     followers: ["yami","damusa","sla","oaanu"],
//     postss: [],
//     dateOB: "02/26/2003",
//     greet: function(){
//         console.log("Hello " + facebookUser2.userName)
//     }
// }

// facebookUser1.followers[facebookUser1.followers.length] = "Myles";
// console.log(facebookUser1);
// facebookUser1.followers.pop();
// delete facebookUser1.email;
// var post1 = {
//     content: "This is content!",
//     likes: 300, 
//     shares: 10
// }
// var post2 = {
//     content: "This is not content",
//     likes: 20,
//     shares: 2
// }
// var post3 = {
//     content: "This is Mrs Yamusa content",
//     likes: 20,
//     shares: 2
// } 
// facebookUser1.postss[facebookUser1.postss.length] = post1
// facebookUser1.postss[facebookUser1.postss.length] = post2
// facebookUser2.postss[facebookUser2.postss.length] = post3
// var flwn = 0;
// for (index in facebookUser1.followers) {
//     flwn++
//     console.log(flwn, facebookUser1.followers[index])
// }
// for (follower of facebookUser1.followers) {
//     console.log(follower)
// }
// function replaceLikesWReactions (User){
//     for (us of User){
//         console.log("Number of likes: " + us.likes);
//         us.reactions = us.likes;
//         console.log("Number of Reactions: " + us.reactions)
//         delete us.likes;   
//     }
// }
// var posts = [post1, post2]
// for (item of posts) {
//     //i = 0;
//     //i++
//     // console.log("Number of likes: " + item.likes);
//     // item.reactions = item.likes;
//     // console.log("Number of Reactions: " + item.reactions)
//     // delete item.likes;
// }
// var users = [facebookUser1, facebookUser2]
// for(userrt of users){
//     for(postt of userrt.postss)
//     userrt.postss.interests = [];
// replaceLikesWReactions(userrt.postss)
// }
// console.log(facebookUser1, facebookUser2);

// facebookUser2.greet();
// var someText = "Mr Maria is the best in the business. Maria owns maria.tech"
// someText = someText.replace(/Maria/g, "mario@02")
// var someArray = someText.split()
// console.log(someText, someArray)
// var nameList = ["Idris David", "Mairo Yamusa", "Pince Carlton"]
// var FandLnames = []

// for(item of nameList){
//     var x = item.split(/\s+/)
//     var fnl = {
//         FirstName: x[0],
//         SecName: x[1]
//     }
//     FandLnames.push(fnl)
// }
// function ageCalc(age){

//     var today = new Date()
//     var bday = new Date(age)
//     console.log(today, bday)
//     var yr = today.getFullYear() - bday.getFullYear()

//     var days = today.getDate() - today.getDate()
//     var bdaymnthfuture = today.getMonth < bday.getMonth;
//     var bdaymnththismnth = today.getMonth === bday.getMonth;
//     var dateinfuture = today.getDate < bday.getDate
//     if(bdaymnthfuture || (bdaymnththismnth && dateinfuture)){
//         yr--
//     }

//     console.log("You are", yr)
//     return yr;
// }
// for(item of users){
//     item.age = ageCalc(item.dateOB)
// }
// ageCalc(facebookUser2.dateOB)
// console.log(users)

function handleCreatePost(){
    console.log("You Created a Post")
}
//var postEl = document.getElementById("post-form-container")
//postEl.getElementsByTagName("div")
//var sideSection = document.getElementById("side-section")
//sideSection.getElementsByTagName("div")
var articleForm = document.getElementById("post-form-container")
function displayForm(){
    document.getElementById("post-form-container").style.display = "block"
}
function hideForm(){
    document.getElementById("post-form-container").style.display = "none"
}
