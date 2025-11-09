import { useState, useCallback, useEffect, useRef } from 'react'


function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");
  
  //useRef hook
  const passwordRef = useRef(null);

  const passwordGenerator  = useCallback(()=>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numberAllowed) str+="0123456789";
    if(characterAllowed) str+="!@#$%^&*()_+[]{}|;:'";
    for (let index = 0; index < length; index++) {
      let char = Math.floor(Math.random() * str.length);
      console.log(char);
      
      pass += str.charAt(char);
    }
    
    setPassword(pass);
    console.log(pass);
    
    

  }, [length, numberAllowed, characterAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(()=>{
      window.navigator.clipboard.writeText(password);
      window.alert('Password copied');
    }, [password])


  useEffect(()=>{
    passwordGenerator()
  },[length, numberAllowed, characterAllowed, passwordGenerator])
  return (
    <>
      <div className='w-full max-w-md shadow-md rounded-lg text-orange-500 bg-gray-700 mx-auto px-4 my-10 py-1'>
        <h1 className='text-white text-center p-1'>Password generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text"
          value={password}
          className='outline-none w-full px-3 py-1 bg-white'
          placeholder='Password'
          readOnly
          ref={passwordRef} />
          <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0' onClick={copyPasswordToClipboard}>
            Copy
          </button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range"
            min={6}
            max={50}
            value={length}
            className='cursor-pointer'
            onChange={(e)=>{
              setLength(e.target.value)
            }} />
            <label htmlFor="">length: {length}</label>
            <input type="checkbox"
            id='numberInput'
            onChange={()=>{
              setNumberAllowed((prev)=> !prev);
            }}
            value={numberAllowed} />
            <label htmlFor='numberInput'>numbers</label>
            <input type="checkbox"
            id='characterInput'
            onChange={()=>{
              setCharacterAllowed((prev)=> !prev);
            }}
            value={characterAllowed} />
            <label htmlFor='characterInput'>Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
