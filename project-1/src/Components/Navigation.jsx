export const Navigation = () => {
    return <nav>
        <div className='logo'>
        <img src = "/images/brand_logo.png" alt="logoImage"/>
        </div>
        <ul>
          <li href="#">Menu</li>
          <li href="#">Location</li>
          <li href="#">About</li>
          <li href="#">Contact</li>
        </ul>
        <button className='loginButton'>Login</button>
      </nav>
}