

export const PriceInput = ({ label, id, value, setValue }) => {

     return (
          <>
               <label className='label' htmlFor={id}>{label}</label>
               <input
                    className="input-small"
                    type="number"
                    value={value}
                    name={id}
                    id={id}
                    onChange={(e) => setValue(e.target.value)}
                    min='1' />
          </>
     )
}