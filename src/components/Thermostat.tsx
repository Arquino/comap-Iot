import Counter from './Counter/Counter'
import { useState, useEffect } from 'react';
import { useHousingId } from '../hooks/useHousingId';
import { API } from 'aws-amplify'
import { ApiService } from '../utils/amplify'
import ModalTimer from '../components/ModalTimer';





interface ThermostatButtonProps {
  children: React.ReactNode;
  clicker: React.MouseEventHandler;
}

const temperatures = {
  presence_1: 16,
  presence_2: 18,
  presence_3: 20,
  presence_4: 22,
  away: 14,
  frost_protection: 12
}

var zoneID : string;

export default function Thermostat(): JSX.Element {

  const [valueTemperatur, setValueTemperatur] = useState(20)
  var housingId = useHousingId()


  function getTemperatureFirsZone() {

    console.log("Get Temperature and Zone")
    API.get(ApiService.Thermal, '/housings/' + housingId.data + '/thermal-details', {})
      .then((res) => {
        console.log("Zone: ", res.zones)
        zoneID = res.zones[0].id
        console.log("zoneId: ", zoneID)
        console.log("Temperature zoneId: ", res.zones[0].temperature)
        setValueTemperatur(res.zones[0].temperature)
      })
  }
  
  function postTemperature() {
    
    console.log("Post temperature")
    API.post(
      ApiService.Thermal,
      '/housings/'+ housingId.data+ '/thermal-control/zones/'+ zoneID+ '/temporary-instruction',
      { body: { duration: 110, set_point: { instruction: temperatures.presence_1} } }
    ).then((res) => console.log("Post response: ",res))
  }


  function deleteTemporaryInstruction() {
    console.log("Delete temperature")
    API.del(
      ApiService.Thermal,
      '/housings/'+housingId.data+'/thermal-control/zones/'+zoneID+'/temporary-instruction',
      {}
    )
  }

  useEffect(() => {
    
    getTemperatureFirsZone()
    
  }, [])
 
  return (
    <>
      <ThermostatButton clicker={decraseTemperatur}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
        </svg>
      </ThermostatButton>

      <svg viewBox="0 0 100 100" fill="#F3F3F3" className="w-96 h-96">
        <circle cx="50" cy="50" r="48" stroke="#F8F8F8" strokeWidth="2" />
        <circle cx="50" cy="50" r="45" stroke="#F8F8F8" strokeWidth="5" />
        <Counter value={valueTemperatur} color={'RED'}></Counter>
        
      </svg>

      <ThermostatButton clicker={increaseTemperatur}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6  text-gray-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4v16m8-8H4"
          />
        </svg>
      </ThermostatButton>


      <ModalTimer postAPi={postTemperature} delApi={deleteTemporaryInstruction} />
    </>
  )


  function increaseTemperatur  ()  {
    if (valueTemperatur < 28.0) {
      setValueTemperatur(valueTemperatur + 1)
    }
    
  };

  function decraseTemperatur() {
    if (valueTemperatur > 5.0 ) {
      setValueTemperatur(valueTemperatur - 1)
    }
  };
}

const ThermostatButton = ({children, clicker}: ThermostatButtonProps) => {
  
  return (
    <button className="w-24 h-24 bg-gray-100 rounded-full flex justify-center items-center" onClick={clicker}>
      {children}
    </button>
  )
}



