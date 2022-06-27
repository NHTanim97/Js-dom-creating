    
    // js file

    // root id select
    let root = document.getElementById('root');

    // create div
    let squreDiv = document.createElement('div');
    squreDiv.className = 'squreOne';//set className
    squreDiv.setAttribute = ('id', 'squreOne')//set id

    let h1 = document.createElement('h1');//create h1
    h1.className = 'text';//set class name
    h1.innerHTML = 'My name is Tanim';//set html

    // squreDiv এর ভিতরে h1 set করা হয়েছে ।
    squreDiv.appendChild(h1);

    // root id এর ভিতরে squreDiv set করা হয়েছে ।
    root.appendChild(squreDiv);
