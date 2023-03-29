import style from "./Navbar.module.css"

export const Navbar = ( {color} ) => {
    return <div>
        <ul className={style.containerNavbar}>
            <li style={{backgroundColor : color}}>productos</li>
            <li>servicios</li>
            <li>contactos</li>
        </ul>
    </div>
}