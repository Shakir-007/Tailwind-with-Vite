
import './App.css'

function App() {

  return (
    <>
    <div className='bg-slate-700 h-auto w-full'>

      {/* <!-- Navbar starts here --> */}
      <nav className='width-full h-14 flex justify-between items-center px-4 md:px-4 bg-gray-500'>
        <div className='text-2xl font-bold text-white'>PW skills</div>
        <ul className='md:flex hidden font-semibold '>
          <li className='mx-[10px] cursor-pointer'>Home</li>
          <li className='mx-[10px] cursor-pointer'>About Us</li>
          <li className='mx-[10px] cursor-pointer'>Contact Us</li>
        </ul>
        <div className='hidden md:block bg-indigo-500 text-white px-4 py-2 rounded font-bold cursor-pointer'>Login/Signup</div>
        <div className='md:hidden '>
          <a className='text-4xl' href="#">&#8801;</a>
        </div>
      </nav>
      {/* <!-- Navbar ends here --> */}


      {/* <!-- Image section starts here -->  */}
      <header className='h-auto w-full '>
        <img className='w-full h-screen hidden md:block' src="https://images.unsplash.com/photo-1576967590891-07995d029da5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHNlbnRlbmNlfGVufDB8fDB8fHww" alt="" />
      </header>
      {/* <!-- Image section starts here -->  */}


      {/* <!-- Student section starts here --> */}
      <div className='h-auto w-100 flex flex-wrap  flex-col items-center text-center p-10'>
        <div className='w-full h-auto flex flex-wrap flex-col items-center'>
          <p className='text-indigo-400 font-bold text-3xl md:text-4xl text-center '>Pure hardwork no shortcuts</p>
          <div className='w-36 h-1 border-b-4  border-yellow-300 mt-2 rounded-2xl md:mt-4 mb-12'></div>
        </div>
        <div className='w-full flex  flex-wrap justify-evenly  '>
            <div className='w-46 flex flex-col items-center mb-12'>
                <img className='w-20 h-20' src="https://www.svgrepo.com/show/418869/book-computer-hardware.svg" alt="" />
                <p className='text-3xl text-blue-400 font-bold' >600+</p>
                <p className='text-[20px] font-bold text-white'>Different courses</p>
            </div>
            <div className='w-46 flex flex-col items-center mb-12'>
              <img className='w-20 h-20' src="https://www.svgrepo.com/show/418910/book-education-food.svg" alt="" />
              <p className='text-3xl text-blue-400 font-bold' >700,000+</p>
              <p className='text-[20px] font-bold text-white'>Students enrolled</p>
            </div>
            <div className='w-46 flex flex-col items-center mb-12'>
              <img className='w-20 h-20' src="https://www.svgrepo.com/show/418911/bank-campus-court.svg" alt="" />
              <p className='text-3xl text-blue-400 font-bold' >10,000+</p>
              <p className='text-[20px] font-bold text-white'>Successful Transitions</p>
            </div>
            <div className='w-46 flex flex-col items-center mb-12'>
              <img className='w-20 h-20' src="https://www.svgrepo.com/show/418907/education-graduation-key.svg" alt="" />
              <p className='text-3xl text-blue-400 font-bold' >1000+</p>
              <p className='text-[20px] font-bold text-white'>Different courses</p>
            </div>
        </div>
      </div>
      {/* <!-- Student section ends here --> */}


      {/* <!-- Products section starts here --> */}
      <div className='h-auto w-100 flex flex-wrap flex-col items-center text-center p-10'>
        <div className='w-full h-auto flex flex-wrap flex-col items-center'>
          <p className='text-indigo-400 font-bold text-3xl md:text-4xl text-center '>Our Products</p>
          <div className='w-36 h-1 border-b-4  border-yellow-300 mt-2 rounded-2xl md:mt-4 mb-12'></div>
        </div>
        <div className='w-[90%] h-auto flex flex-wrap justify-around  '>
            <div className='w-64 flex flex-col items-center mb-12 border-2 border-green-300 rounded-lg p-4'>
                <img className='w-20 h-20' src="https://www.svgrepo.com/show/418888/atom-chemistry-laboratory.svg" alt="" />
                <p className='text-3xl text-blue-400 font-bold' >PW Skills</p>
                <p className='text-xl font-bold  text-white'> In client-side scripting, scripts simply run on a device. Often, client-side scripts run in a browser. </p>
            </div>
          
            <div className='w-60  flex flex-col items-center mb-12'>
                <img className='w-10 h-10' src="https://www.svgrepo.com/show/418885/bulb-energy-idea.svg" alt="" />
                <p className='text-3xl  text-blue-400 font-bold' >700,000+</p>
                <p className=' font-bold  text-white'> In client-side scripting, scripts simply run on a device. Often, client-side scripts run in a browser. </p>
            </div>

            <div className='w-60  flex flex-col items-center mb-12'>
                <img className='w-10 h-10' src=" https://www.svgrepo.com/show/418893/education-line-pen.svg" alt="" />
                <p className='text-3xl  text-blue-400 font-bold' >10,000+</p>
                <p className=' font-bold  text-white'> In client-side scripting, scripts simply run on a device. Often, client-side scripts run in a browser. </p>
            </div>

            <div className='w-60  flex flex-col items-center mb-12'>
                <img className='w-10 h-10' src="https://www.svgrepo.com/show/418865/astronomy-education-learning.svg" alt="" />
                <p className='text-3xl  text-blue-400 font-bold' >1000+</p>
                <p className=' font-bold  text-white'> In client-side scripting, scripts simply run on a device. Often, client-side scripts run in a browser. </p>
            </div>

            
        </div>
      </div>
      {/* <!-- Products section ends here --> */}

      {/* <!-- Footer section starts here --> */}
      <footer className='w-full bg-gray-500 px-4 text-white pt-8 flex flex-col md:flex-row flex-wrap justify-between md:px-12'>
        <div className='w-80  text-[20px] font-bold text-white  '>
          <img className='h-14 w-14' src="https://www.svgrepo.com/show/418912/board-education-mouse.svg" alt="" />
          <p className='my-4 font-medium '>Web servers are used to execute server-side scripting.</p>
          <img className='h-14 w-14' src="https://www.svgrepo.com/show/418898/code-education-learning.svg" alt="" />
        </div>

        <div className='flex flex-col items-center'>
          <h2 className='text-xl mt-4 font-medium'>PW Skills</h2>
          <div className='w-24 h-1 border-b-2 border-yellow-400 rounded-2xl my-2'></div>
          <div>
              <p>About us</p>
              <p>FAQs</p>
              <p>Privacy Policy</p>
          </div>
        </div>
        <div className='flex flex-col items-center'>
          <h2 className='text-xl mt-4 font-medium'>Explore</h2>
          <div className='w-24 h-1 border-b-2 border-yellow-400 rounded-2xl my-2'></div>
          <div>
              <p>Challenges</p>
              <p>Solutions</p>
              <p>Articles</p>
              <p>Privacy Policy</p>
          </div>
        </div>
        <div className='flex flex-col items-center'>
          <h2 className='text-xl mt-4 font-medium'>Links</h2>
          <div className='w-24 h-1 border-b-2 border-yellow-400 rounded-2xl my-2'></div>
          <div className='ml-8'>
              <p>Guidelines</p>
              <p>Discord</p>
              <p>Become a partner</p>
              <p>Unlock Pro</p>
              <p>Learning paths</p>
          </div>
        </div>
      </footer>
      {/* <!-- Footer section ends here --> */}

    </div>
    </>
      
  )
}

export default App



