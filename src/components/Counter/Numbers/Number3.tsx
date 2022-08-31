import React from 'react'
import { NumberFC } from './Number'

const Number3: NumberFC = (props) => {
  return (
    <>
      <title>3</title>
      <path
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        fillRule="evenodd"
        // tslint:disable-next-line: max-line-length
        d="M5.22794541,21.408 C5.80394541,26.688 9.73994541,27.552 13.2919454,27.552 C21.1159454,27.552 23.5639454,17.376 16.7479454,13.68 C16.0759454,13.392 15.1639454,13.2 14.4439454,13.2 C13.5319454,13.2 12.6679454,13.392 11.9479454,13.776 L12.0439454,13.728 C10.8919454,14.448 9.30794541,13.632 9.30794541,12.288 C9.30794541,11.856 9.49994541,11.28 9.88394541,10.944 L18.3319454,3.12 L4.55594541,3.12 C2.49194541,3.12 2.49194541,0 4.55594541,0 L21.5959454,0 C23.2759454,0 24.2839454,1.776 22.7959454,3.216 L16.5079454,9.36 L13.8679454,10.848 C20.0599454,9.312 24.0919454,14.736 24.0919454,19.968 C24.0919454,25.728 19.6759454,30.72 13.3399454,30.72 C7.62794541,30.72 2.68394541,28.656 2.01194541,21.936 C1.77194541,19.536 5.22794541,19.584 5.22794541,21.408 Z"
      />
    </>
  )
}

export default Number3
