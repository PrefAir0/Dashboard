import burger_menu from "../../public/icons/products.svg"


function Header() {
  
  return (
    <>
        <div className="sa">
            <button className="burger-menu">
                <img src={burger_menu} alt="" />
            </button>
        </div>
        <div className="">
            <button>
                <img src="" alt="" />
            </button>
            <input type="radio">
                <img src="" alt="" />
                <div className="">
                    <p></p>
                    <p></p>
                </div>
            </input>
            <div className="profil">
                <img src="" alt="" />
                <div className="">
                    <p></p>
                    <p></p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Header