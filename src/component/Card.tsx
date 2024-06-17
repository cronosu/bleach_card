

function Card({ src, position }: {
  src: string
  position: number
}) {
 

  return (
    <div className="item" style={{ '--position': position } as React.CSSProperties}>

      <div className="item-front">
        <img src={src} alt="" />
      </div>
      
      <div className="item-back" >
        <img src="https://sm.ign.com/ign_br/screenshot/default/poster-bleach-thousand-years_bz72.jpg" alt="" />
      </div>
    </div >
    
  )
}
 
export default Card


