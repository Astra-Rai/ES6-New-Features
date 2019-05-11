//Let
let movie = 'Good Will Hunting';

function theNoteBook(){
  let movie = 'The Notebook';
  //note scope
  return movie;
  
}

//console.log(movie);
//expected output: 'Good Will Hunting'
//console.log(theNoteBook());
//above:the accesses of movie variable w/in thes scope of function
//theNotebook()
//expected output: "The Notebook"

function buckyFunction(){
  let isHorse = true;
  let saying = 'Bacon is good';
 
  console.log('\nBefore if:', saying);
  
  //buckyFunction();
  //expected output: "Bacon is good"
  
  if(isHorse){  
    let saying = 'I am a horse';
    console.log('Inside if:,' saying);
    } 
      console.log(saying);
      //no access so saying won't print
}
//unsure why code isn't working
