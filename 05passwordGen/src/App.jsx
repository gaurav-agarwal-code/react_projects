import { useCallback, useEffect, useState } from 'react'

function App() {

  const [length, setLength] = useState(8)
  const [number, setnumAllowed] = useState(false)
  const [special, setcharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const genPassword = useCallback(() => {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

    if (number) str += '0123456789'
    if (special) str += '~!@#$%^&*()_+{}|:"<>?'

    for (let i = 1; i <= length; i++) {
      let char = str.charAt(Math.floor(Math.random() * str.length))
      pass += char
    }
    setPassword(pass)

  }, [length, number, special])

  const CopyToClipboard = () => {
    window.navigator.clipboard.writeText(password)
  }

  useEffect(() => {
    genPassword()
  }, [length, number, special])

  return (

    <div className='flex flex-wrap h-screen w-full justify-center'
      style={{ backgroundColor: 'gray' }}>

      <div className='fixed top-12 justify-center p-8 rounded-3xl text-white text-lg'
        style={{ backgroundColor: 'black' }}>
        Password Generator
        <div>
          <input className='rounded-2xl px-3 py-1 w-full text-black'
            type="text" id="passShow"
            placeholder='password'
            value={password}
            readOnly />

          <button className='rounded-2xl px-3 py-2' 
          onClick={CopyToClipboard}
          style={{ backgroundColor: 'blue' }}>Copy</button>

          <div>
            <input type="range" id="range" className='cursor-pointer'
              min={6}
              max={20}
              value={length}
              onChange={(e) => { setLength(e.target.value) }}
            />
            <label htmlFor='range'>Length: {length}</label>

            <input type="checkbox" id="numip" defaultChecked={number}
              onChange={() => { setnumAllowed((prev) => !prev) }}
            />
            <label htmlFor='numip'>Numbers</label>

            <input type="checkbox" id="charip" defaultChecked={special}
              onChange={() => { setcharAllowed((prev) => !prev) }}
            />
            <label htmlFor='charip'>Special chars</label>
          </div>
        </div>
      </div>
    </div>

  )
}

export default App
