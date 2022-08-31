
import React from 'react'



interface apiCall {
  postAPi: ()=> void;
  delApi: ()=> void;
}

export default function ModalTimer({postAPi, delApi} : apiCall): JSX.Element {

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openAndCloseModal() {
    setIsOpen(!modalIsOpen);
  }
  function closeModal() {
    setIsOpen(false);
  }


  const hours = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24
  ]
  const minutes =[0, 15, 30, 45]

  const [selectHour, setSelectHour] = React.useState('')

  const [selectMinute, setSelectMinute] = React.useState('')


  const selectHourFC = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;

    console.log(typeof parseInt(value))
    
    setSelectHour(value);
  };
  const selectMinuteFC = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    console.log(value)
    setSelectMinute(value);
  };


  const cancel = () => {

  }

  return (
    <div>

        <button onClick={openAndCloseModal} className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" data-modal-toggle="authentication-modal">
            valider
        </button>
      
      {modalIsOpen ?
      <div id="authentication-modal" tabIndex={1}  className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center flex" aria-modal="true" role="dialog">
      <div className="relative p-4 w-full max-w-md h-full md:h-auto">
        
      <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <button onClick={openAndCloseModal} type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="authentication-modal">
              <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
              <span className="sr-only">Close modal</span>
          </button>
          <div className="py-6 px-6 lg:px-8">
              <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">Choisissez une heure</h3>
              <form className="space-y-6" action="#">
                  <div>

                    <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">heure</label>
                   
                  <select value={selectHour} onChange={selectHourFC} className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white">
                    
                      {hours.map((h) => {
                        return (
                          <option key={h}> {h}</option>
                        )
                      })}
                  </select>
                  </div>
                  <div>
                      <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">minutes</label>
                      <select value={selectMinute} onChange={selectMinuteFC}  className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white">
                    
                      {minutes.map((m) => {
                        return (
                          <option key={m}> {m}</option>
                        )
                      })}
                  </select>
                    
                  </div>
                  <button onClick={postAPi} className="w-full text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">confirmer</button>
                  <button  onClick={delApi}className="w-full text-white bg-blue-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-red-800">annuler</button>
                 
              </form>
          </div>
      </div>
  </div>
</div>  : null}

        

    </div>
  );
}
