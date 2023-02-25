document.getElementById('apply-bg').addEventListener('click', function(){
    const friends = document.getElementsByClassName('friend');
    for(const friend of friends){
        friend.style.backgroundColor = 'lightblue';
    }
});

document.getElementById('center-third').addEventListener('click', function(){
    const third = document.getElementById('third-friend');
    third.style.textAlign = 'center';
});

document.getElementById('add-friend').addEventListener('click', function(){
    const friendContainer = document.getElementById('friends');
    const friend = document.createElement('div');
    friend.classList.add('friend');
    friend.innerHTML = `
    <h3 class="friend-name">New Friend</h3>
    <p>something new added</p>
    `
    friendContainer.appendChild(friend);
})


// utobe class 11
class book {
    constructor(BookName, price){
        this.BookName = BookName;
        this.price = price;
        
    }
}
let BookDetails = new book ("rich dad for dad", "300 tk" );
console.log(BookDetails);

// utobe class 11

let person = class{
    constructor(name, age, profe){
        this. name = name;
        this. age = age;
        this.profe= profe;

    }
}
let NewPerson = new person("bilkish", 20, "web developer");
console.log(NewPerson);