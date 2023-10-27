/* Every function has a default prop which we can use it as variable to change the property of the component

Here we are creating two props called username and buttonname and will change the props in the main components we have called this function Card

When we pass the prop in the function as an argument we have to destrcuture it in curly bracket 

for example: Function Card({Username, buttonname})
or
for example: Function Card({Username="Default name", buttonname="Visit ME"})

Here we passed a default value to the prop so that incase we missed / or need not have to edit the prop the default value will refleact 
*/



import React from 'react'


function Card({Username, buttonname}) {
  return (
    <>
    <h1 className="bg-green-300 text-black p-4 rounded-md ">Tailwind</h1>
    <div className="relative h-[400px] w-[300px] rounded-md">
      <img
        src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
        alt="AirMax Pro"
        className="z-0 h-full w-full rounded-md object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
      <div className="absolute bottom-4 left-4 text-left">
        <h1 className="text-lg font-semibold text-white">{Username}</h1>
        <p className="mt-2 text-sm text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
          debitis?
        </p>
        <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
         {buttonname}
        </button>
      </div>
    </div>
    </>
  )
}

export default Card