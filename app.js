function submit_message(){
    alert('Submitted')
}
var firebaseConfig = {
    apiKey: "AIzaSyC0KfP1NSYspOzA_9dW588XzemfN6RpLv0",
    authDomain: "nie-internship-7f904.firebaseapp.com",
    databaseURL: "https://nie-internship-7f904.firebaseio.com",
    projectId: "nie-internship-7f904",
    storageBucket: "nie-internship-7f904.appspot.com",
    messagingSenderId: "1044524262530",
    appId: "1:1044524262530:web:1e7634b1a5a731c85bc09b",
    measurementId: "G-8S19DVNCZQ"
  };
  firebase.initializeApp(firebaseConfig);
  //firebase.analytics();

const db=firebase.firestore();
//const dataList=document.querySelector('#internee-list');
const form=document.querySelector('#add-internee-form');
/*
function renderFunc(doc){
    let li=document.createElement('li');
    let name=document.createElement('span');
    let surName=document.createElement('span');
    let university=document.createElement('span');
    let lab=document.createElement('span');
    //let new_line=document.createElement('p');
    li.setAttribute('data-id',doc.id);
    name.textContent=doc.data().name;
    surName.textContent=doc.data().surname;
    university.textContent=doc.data().university;
    lab.textContent=doc.data().lab;
    //new_line.innerText="hadi bux";
    li.appendChild(name);
    li.appendChild(surName);
    li.appendChild(university);
    li.appendChild(lab);
    //li.appendChild(new_line);
    dataList.appendChild(li);
    
}
*/
// get data
db.collection('Internee').get().then((snapshot)=>{
    snapshot.docs.forEach(doc=>{
        renderFunc(doc);
    })
})

// save data
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    db.collection('Internee').add({
        name:form.name.value,
        surname:form.surname.value,
        contact:form.contact.value,
        message:form.message.value
    });
    form.name.value='';
    form.surname.value='';
    form.contact.value='';
    form.message.value='';
})
