
// Duration parameters

function main(isCycling){
  const day = 86400000; // 24 hours in milliseconds
  const interval = 30 * 1000;

  if(typeof isCycling != 'boolean'){
    throw new Error('Parameter is not a boolean.');
  }

  if(isCycling){
    setInterval( () => { cycle() }, interval )
  } else {
    cycle();
  }
}

function cycle(){
  
}

export {main};
