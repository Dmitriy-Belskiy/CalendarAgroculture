import background from "./background3.png";
import logo from "./лого.png";


function Profile() {
    return (
      <div className="homereg">
            <div className="back">
                <img className="background" src={background} alt="бекграунд" />
            </div>
            <div className="fr">
                <div className="form">    
                    <table>
                            <tr>
                                <td><img className="logo" src={logo} alt="лого" /></td>
                                <td> 
                                    <div className="buttonsAuthReg">
                                        <nav> 
                                            <a className="logButton" href="/">Вход</a> 
                                            <a className="regButton" href="/Profile">Регистрация</a> 
                                        </nav>
                                    </div>
                                </td> 
                            </tr>
                        </table>
                        <div className="reg"> 
                            <form id="reg" className="regestr-input">
                                <input type="text" className="input-field" placeholder="Имя" required></input>
                                <input type="text" className="input-field" placeholder="Фамилия" required></input>
                                <input type="text" className="input-field" placeholder="E-mail" required></input>
                                <input type="text" className="input-field" placeholder="Пароль" required></input>
                                <input type="text" className="input-field" placeholder="Подтвердите пароль" required></input>
                            </form>
                            <button className="profileButton">Регистрация</button>
                            <div className="line"></div>
                            <button><img src="" alt="google"></img>Продолжить с Google</button>
                        </div>
                </div>        
            </div>
        
      </div>
    );
  }
  
  export default Profile;