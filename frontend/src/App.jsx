import { useEffect, useState } from 'react'
import './App.css'
import { Header } from './components/header'
import { createClient } from "@supabase/supabase-js"

const supabase = createClient(
  "https://vgidudfdpwojlgacqznb.supabase.co",
   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZnaWR1ZGZkcHdvamxnYWNxem5iIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQwODc0ODIsImV4cCI6MTk5OTY2MzQ4Mn0.V66kRX8V58fFZ84ekm7NdIXGok6JXqxq2J1iHLf5B-M"
   );

   console.log(supabase)

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    getCountries();
  }, []);

  async function getCountries() {
    const { data } = await supabase
    .from("countries")
    .select();
    setCountries(data);
  }
  
  const [count, setCount]= useState(0)

  return (
    <>
    <Header></Header>
      <div className="card">
        <button 
          onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <ul>
        {countries.map((country) => (
          <li key={country.name}>{country.name}</li>
        ))}
      </ul>
    </>
  )
}

export default App
