let collection= {
  title:'Flashback',
  artist:'After School',
  year:2012,//properties of Collection
}

let collection2={
  title: 'Fantastic Baby',
  artist: 'Big Bang',
  year: 2013,//properties of collection2
}

function isKpop(addToCollection){
  console.log('in isKpop:', addToCollection);
  if(addToCollection.title ==='Flashback'|| addToCollection.artist ==='After School' || addToCollection.year === 2012){
  return true;
}//test to see if the result is true or false
  else {
    return false;
  }
}

console.log(isKpop(collection));
console.log(isKpop(collection2));
//shows if the function is true or false
