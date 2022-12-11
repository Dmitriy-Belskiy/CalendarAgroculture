import background from "./background3.png";
import logo from "./лого.png";


function Home() {
    return (
      <div className="homeauth">
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
                    <div className="modalWindow">
                        <form path="#" id="number" className="input-group">
                            <input type="text" className="input-field" placeholder="E-mail" required></input>
                            <input type="text" className="input-field" placeholder="Пароль" required></input>
                            <input type = "checkbox"></input>
                            <p>Запомнить меня</p>
                        </form>
                        <a href="./MainPage">
                            <button className="buttonC">Войти</button>
                        </a>
                        <div className="lineC"></div>
                        <p>Забыл пароль?</p>
                        <button>
                            <img src="" alt="google"></img>Продолжить с Google
                        </button>
                        <p>
                            У меня нет аккаунта?<a className="homereg2" href="./homereg">Зарегистрироваться</a>
                        </p> 
                    </div>   
                </div>        
            </div>
      </div>
    );
  }
  
  export default Home;