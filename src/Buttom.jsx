function Button() 
{
  function clickHandler(){
    console.log('saya diklik');
  }

return(
  <button onClick={clickHandler()}> klik saya senyum </button>
)
}
export default Button