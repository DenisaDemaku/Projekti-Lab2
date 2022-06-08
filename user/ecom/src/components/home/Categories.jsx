import React, { Component, Fragment } from 'react'
import {Container,Row,Col,Card} from 'react-bootstrap'

class Categories extends Component {
     render() {
          return (
               <Fragment>
                  <Container className="text-center" fluid={true}>
          <div className="section-title text-center mb-55"><h2> CATEGORIES</h2>
          <p>Some of our exclusive collection, you may Like</p>
          </div>

          <Row>
               
               
               <Col key={1} xl={6} lg={6} md={2} sm={12} xs={12}>
                    <Row>
           <Col className="p-0" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
          <Card className="h-100 w-100 text-center">          
          <Card.Body> 
          <img className="center" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAPDxAQDxEVFRAQFhUVFhgVFhUSGRcVFRUWGRYXFhgbHSggGhslGxYVIjEiJSkrLi4vFyAzODMtNygtLysBCgoKDg0OGxAQGy8lICUvLS8tLy0vLTAtLS0vLS0tLysvLy0tLzAtLy0vLS0tLS0rLS0tLS0tLS8rLS0tLy0tLf/AABEIAOAA4QMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAAAgcBAwYEBQj/xAA+EAABAwIDBgMFBgQGAwEAAAABAAIDBBEGITEFEkFRcYEiYZETMkKhsQcUI1JywRZigvAzQ1OSorLR0uEk/8QAGwEAAQUBAQAAAAAAAAAAAAAAAAECAwUGBAf/xAA4EQABAwIEAgcGBQUBAQAAAAABAAIDBBESITFRBUFhcYGRocHwEyIysdHhBhQVUvEjYnKi4rIk/9oADAMBAAIRAxEAPwC8UREIRERCEREQhEREIRERCEREQhc7ijETaNoa0B0zhcA6NHM/sFXddtmpmP4srj5XNh0AyClt6qM1TLITfecSOnwj0AXzitBTUrI2AkXKxvEOISzSkAkNBIABtodTvfw0HO/rptqzw5xSuafImx68D3XfYTxR97PsZbCcC4tkHjjYcHAcO6rQrZS1DopGSsNnMIcOoN/ROqKVkrbWz5FMo6+WB4JJLeYOeXR661eaKETw5ocNHAH1U1nVtUREQhEREIRERCEREQhEREIRERCEREQhEREIRERCEREQhEREIsiIiEKl9rwOiqJY3atcRnxF8j3Fj3XgKsrGmHfvDDPEPxmDMD4wP3Hz05KtVo6acSsBGo19dKw9fSup5iDobkdX2WCpQxOke1jBdziGtHMuNh81ArvsC4c3d2rmGZF4m8gRbePMkadb8rE84iZiPZ1pKOldUyYBpzOw9afyu3hj3Wtb+UAegstiIs4tyiIiEWRERCEREQhEREIRERCEREQhERfBxJiBlG0ADeleLtboLcyeScxjnuDWi5KjllZEwvebAL7yKpavElXKbmZzRyadwD/br3uo02IqyM3bO4+Tjvj0N1YfpclviHj9FTnj9Pe2F3h9VbiLm8M4lbVjceA2YC9gciOJHI+X/wBt0i4JI3RuwuGat4ZmTMD4zcFFz+JsQNo2hrQHTPHhByAHEk8vLyXQKnds1vt6iWW/vE9hoB6ALpooBK/3tAuHitY6mhGD4nZDo3PrfsWa3bNTMTvyuIPC5A7AZLXS7VqITeKVze5I78D3XiWVeezZa1hbqCyH5iUuxF5vvc371ZGF8TCqPspQGzgXFtHAakcj5d11KpKmndFIyRhs5pDh1BurpikDmtcNHAH1F1SVtOInAt0K1nCa11RGWv8Aibz3B88jdbFUmMtninq5A0WZJZ7RyDr37XDlba4D7T4gHUz+JEjT0aWEf9iigfhmtvf6+SdxmIOpS79pB8bea5jDtD95qooz7rneL9IbvOHcC3dXKFW32aw3qZHfkj+bi39r+qspLxB95bbD5pnBYg2mx/uJ8Mvr3oubxXiRtE0NADpni7WnQDTeJ5X4cbLpFSG364z1U0rj7zjbyF7NHoAo6SASv97QKfiVU6niGHUmw6Nys7R25VVBJlmcQfhBIHZoyXno9q1EBBhmcy3Jxt3boe4XjKwrrA0C1hbqWWM0hdiLjfe5urUwfi372fYzANnAuCMg8DWw4OAzI6kch16oGkqXQyMlYbPY4OHUG/or5gmD2NeNHtDh0IuqesgEbgW6FabhlW6dhD9W89wfRW1ERcas0Rc/inEkdBGC4b0r77jL2yGrnHg0fP1tWe0MW10xJM72Dg1hMYHl4cz3JXRDTPkFxkFxVNfFAcJuTsFdiKkKPFVdEQRUvPk53tAfKzr/ACViYTxcyuHs3gMqAL2HuvHEtvxHI/POyy0r4xi1HQm0/EYZnYRcHp5rq0RFzLvRU3teuNTPJMTk9x7AZAellcThcEHjkqWqqd0Uj43e8wlp6g2VrwsDE488vv5LP/iBzhHGBpc367Zea1IiK3WWW+hq3QSslZ70bg4edtQfIi47q4qedsjGvYbteA4dCLhUsu3wLtzL7rKbZ3jJ43ObfXMdSOSruIwl7Q8ajXq+yveB1YjkMLjk7T/Lbt067LuVTW1aQwTyxcWEj1zB73B7q5VzWKsO/em78dhOwEC+QcPM8COB7HmOCinET/e0PoFXHFqN1TCMHxNNx07j5d1lWaLfVUskLtyVhY7k4EenMea0K9BBzCxhaWmxFisFdZNjmRrGRwxNbuta3eJLzkLZAWA+a5MrBUMkTJLYxey6Keqlgv7M2va/Z/K+lVYjrJPeqHdBZg9BZfOqJ3vN3uLiOJJd9VrKwU5rGt+EAdgSOmkf8biesk/NZimcw7zHFruYJafUL3U+IayPNlQ/pfeHobhfNKiUOa12oBTo5ZGfC4jqJHyXZUH2hTMynibIOYO47vqD6BcXI65J0uSVgrBUccTIyS0WuppqqWYASG9tFEqJWSp09O+VwZGxz3HQNBcfQKQ5KMC5sFinhdI9sbBd7yGtHMk2HzV90sAjjZGNGNa0f0gD9lx+CsImmIqKgD21vAzI7lxmSeLs7ZZDvl2ypqycSOAboFqOF0joWFz9XWy2A80UXOABJNgMypLiPtExAIYjSxO/FlHjt8DDqD5uGVuV/Jc0cZkcGhd80zYWF7tB6suCxNtU1lVLNfwk7rByY3JvS+vUlfKRYV81oaLDRY17y9xc7U5ot9HVPhkZLGbPjcHDqDx8loUo4y9wa0Xc4gADiSbADulPSkFwbjXl1q5v4ug5FF4f4Nd/q/36IqK0W5WyxT7BdguSxfhs1H40I/FAs5um+BoR5jTzHTPrUSRSuicHNRUU7J4zG8ZH1dUjLG5ri1wLXDIixBHUHRQV0VNJHJlIxrv1NDvqEp6OKP3I2t6Na36Ky/VMs2Z9f2VAfw8b5S5f45/+lS4IUgrtc0EWIBHnmvkV+HaWceKIAnizwd7DI9wUreJtv7zbdt/IJkn4eeB7kgJ6Rbxufkuc2DjEtAjqruAyDxmf6gNfr1XZxVcb4/atc0x2vvXysNbnhZV7trCE0F3xfiRjgBYtHm3j1HyXwGzPDSwOIY7VoJF+o0KR9LFN70Rtv/HIpzOJ1NH/AE6ll9jzPbzHTrvmvt4pxEat25HlAw3HAuPM8vL+7c6srC7442xtwtGSop6iSd5kkNyfVhsAsFYKkVApyiWColZKwUl09QUSpKJSJ4UColSKiUieFAr7uFcRvoZMxvQvtvt/cfzD0OnIj4aiU17GvGF2inhlfE7Gw2Kvuiq2TxtkicHMeLgj+8j5cFtllaxpc9wa1uZLiAAOZJ0VHbK25U0l/u8paHG5Fg5pP6SCL+eq17V2zU1ZBqJXPtoMmtHmGiwv52VZ+Qdi1y8VffrLMFy04vDv+y7zE2PmM3oqPxP0MhGTf0g+8fM5dVW80rnuL3uLnOJJJNySdSSugw7hCprbP/woT8bh7w/lb8XXIeasTZWD6KnA/CD3fmk8Xo0+EdgpfaQ0/utzPP8AlQewqq0h7/dby+w59ZKpYuHNLr9ERsDRZoAHICy89TQwy/4sTH/rY131Cb+of2+P2Uh4LtJ/r/0qCYwuIa0EuOQAFyTyAGqsnA2DnRObU1TbSDOOM/Cfzv8APkOGuunaUtBDDcxRMYTrusay/WwXrUM1YXtwtFl00vC2ROxvNyNNkREXGrREREIRERCEREQiy+ViLaP3amfIPePhb+p2npmeyqZdh9odYTJHCNGtLj+p2noB/wAlxyuqGPDFi39DzWO45UGSo9mNGjxOZ8h2LBWCpIV2KnUFgqRWCkSrWVgqZUCkT1ErWthUChOCiVAqZUCkUgUColZKihPCiuu+znYsdVPJJMA5kAad06Fzyd2/MDddl0XJFdf9mVf7KsdET4ahpA/U3xN+W96qCpJ9kbLuoA01DA7S/jY28VbKIio1rkREQhEREIRERCEREQhc3irEQpAGRgOmcL56NHC/MngO/XgKzaU05/FkLr8za3Tl2WNpVZnmklOshJ6W0HbIdl5Vf09O2Joyz5rDcQ4hJUSGx9zkBpbc731z00C9FLWywneieWH+W+fUce67jD2LGy2jqCGyaB2gd14N+h8tFX6JZqdko97Xfmo6PiE1K73TccwdPt1jxX1MSz+0rJ38N6w6NFh9F8tZRPaMLQNlyzSGSRzzzJPebrBWCpqKVRqJUVMqCS6cFEqBWwqBQnhRKgVJyiUieFrKgVsKg5CkC1qK2OWtCeFgr07JqvYVEMt7ezexx6BwuPS68xUCEhAIsVI1xacQ1Gfcv0WirF32lzbgDaZgeAASXucCba7thbpdfD2pjGtqQWmXcYfhjG4PX3j0uqltFKdcvXQtPJxWnb8JJ6gfOy7vFuMo6QGOEtfPoeLWdbany9bcay2htipqSTPM59+BNm9mjwjsF4UVhDTsjGWu/rRUdTXSTnPIbDz3XrodpzwEGGVzCPyuIHcaHurLwXjH70RBPYT28LhkJANcuDrZ8jnoqpW2mqHRSMkYbOjcHNPm03CJoGyC3PdFLWPgdr7vMeua/QqLm/4wh/K7++ywqbC7ZazGz9wXSoiJqVU3tKkME0kR1jJHW/Hvke68qsnFGHRVD2kdhM0Wz0dyvyI4HsfKv6yilhduysLD/MLX6HQ9lf09Q2Vozz5rC8QoH00hy9zkeVtjtbp11XmWVupaWSU7sTC88gC76Lt8O4TEdpKkAv1DODf1cD00/YmnZEM9duaio6CaqdZgy5uOn36h22Ga4JSX0sR0/s6udnDey6EXHyK+antcHAEc1zSxmORzDyJHcbLCiVNYQo1EqBUyolInBRK1lbSoFInhQKgVMqBQnhQK1lTcolCkCg5RKmVrSqQLBUSslenZlJ7aeKIf5jms7OcAfki4GZUjWlxDRqcl1zvs0n3Gls7C8gEtIc0A8g4Xv1svh7UwhW0wLnQlzB8TD7QdSBmB5kK7VgKpbWyDWxWnk4TTu+EEdv1X52RWzi3BkdVeWC0c+pGjZP1cnefrzFZbQ2TUU5Inhcy2Vy02PR2h7FWEVQyQZa7KiqaKSA55jcadu3avGtkELpHtYwXe8hrRzLjYD1UqSlkmduxRue7k1pJ+Ss3BGD/upE9QB7a3gZkRHfUk8XcMsh3yWeZsQz12RSUj6h1h8PM+ua9H8EN/1PksrrkVN7R+61XsY/2hERExSIsWWUQi6wFlEQluSuB+0Km3ZYpB/mBwPVts/Qj/AGrkl1+PdoscY4WkEsJLyM7O0Deut+y5BXNLf2QusJxjD+cfhO1+uwv67ERZRTqsUFEqSFCcFArWVsKiUieFrKgVsK1uQpAoFQKmVApU8KBUCtpUEqkBUCttHVPhkbLE7dkZm02BtlbjloVrKiUWupGktNwvRXbSnnN5pXP/AFONh0Gg7KFFXSwO3oZHMP8AK4j1tr3XnRGEWty8E/G7Fiub73z79VauCMYGrPsKi3trXa4WAkAGYtwdbPLI56WXar89UtQ6KRkjDZ7HBzT5g3Cv+mmEjGPGj2hw6OF1U1cIjcC3QrScMqnTMLXat59H1W2yyiLkVldEREIRaKipZGLyPa0c3ED6r4GKcQfdR7OO3tnC99Q3llxPIKvZ53yOL5HFzjqXE3XZBSOkGImwVPX8YjpnezaMTuedgOvXPoVw09THJ7j2u/S4H6LcqU3VJ1zrYqU8P/u8PuuEfiPLOL/b/lWrX7dpoATJIL8m+I/LTvZcdtvFcs12Q3jj5g+J3UjToPUrmgF2GwcHlwElTdoOYYMndz8P16J3sYoBifn62UP5+t4g72cIwjnY6dbvIC56RdcxRUUs7tyFhe7yGnXgB1W+v2PUU4Dpoi1p8w4X5EgkBWnT07I2hkbQ1o4Af3mpTRNe0seAWuFiDoQozXOxZDLxXS38PRiOxecXRa3da9u0Km1hdBiXD7qV2/HcwOOR1LTyPNfAXax4eLtWbngfBIY5BYj1cbgqJWCpFYKeolAqBUyolInha1Fy2FQKVPC1laythUShSBayolTK+zhrDslbJl4Ymnxv5eQ5u+iRzwwYnaKeGJ0rwxguSvVgfDgrHvfM0mBgINiW7zzoLjPIG5/p5r4e3dnGlqZYT/lusCeIObT3BCu2go44I2xRN3WMFgPqTzJ1uvgYywuK5okjIbPGLC+jm67pPA30PmeeXAyr/qEuyafBaGbhdqcNZm8Z333H06utVCVFe3aOzJ6Z27PEWH+YZHo7Q9itFLSyTO3ImOe7kwEn5KyDha/JUWBwOEjPa2fdqsUtO6WRkbBd73BrR5k2C/QFNCI2MYNGNDR0aLLjsDYQNKfb1AHtrWY3I7gIsSToXEZZaC/NdsqmrmEjgG6BaXhlK6Fhc/V3LYfVERFyKyRERCFT+16j2s8knF7r9r6dsh2XkX0Nv0piqZo7ZA5dD7vyIXz1oIyMAtsF5zU3Ezw7XE6/XcoiL0UFK6aVkTPefYDytr2tc9kpIAuVE1pcQ1upyHWV1mCNig//AKZRcg2YDwI953rkOhXbrRTwtjY1jBZrAAOgFlvVFLIZHYivQqSmbTRCNvadzzPrlkiIuIxnt1wcaaI6e+RqSbENHlbXnpwN0jjMjsIRV1TKaIyP/k7etBmvs7XxBSRtLHuDybjdHiB5i+n7quKgtc5xYzcaTk33suV+K1WUlaRQiPQrFV3EZKwjEAANLa9+vyG40tEqJXop4954adHfuV01fgiRtzDIHjkfC7pyPyTnysYbOKip6KedpfE24Hr1ZcgVEr6dRsKqj9+B/W1x6jJfPkjLTZwIPSycHA6FMfDJH8bSOsEfMLSVArc1hcbAEk8BmV7Itg1bz4IHnz0HrkE4uA1KdHE9/wADSeoEr5LlArsqDAdQ+xleIhyyefQZfNdbsfDFNS2c1m88fE7O36Ro3sLrnfVxt0zVtT8IqJPjGEdOvdr32VOlXPhiohkpInU7QyO1t0Z7rh7wJ1JvxOt78VyH2i7E3HiqYPBJZrwPz2yPQgeo814cB7dFNMYZTaGYixOjX6Bx5A6HtyTJv68Qe3ly+f2XVRf/ABVRhk0dYX+R6L6Eb9AurVREVatIsIABoFlEJblEREJEREQhEREIXwcSbAZVtDgQ2VgO645i3EH/AMrhKrYVVEbPhd1HiHrorZRdEVU+MYdQqys4TBUuxm4duLZ9frytUsGw6t5syF/0HqbBdvhjDoprvks6Yi2WQaPLmTxPbnfo0Sy1T5BbQJtJwiCmf7QEk8r2y7gPHsRERcytUVO1kxfI57tXkuPU3KuJVZiXZ5gqXi3geS5h4Frs7ft2XZRkYiFn/wARMcYWOGgOfaMvp2r5SwiKwWRRyuOleXRscdXNBPUgKq9i7PdUztiGhNyeTRqf74kK2ALCw4LgrHC4HWtT+HI3Bsj+RsB2Xv8ANSXC/aU8b1M3iBIfXcA+hXdKrsZ1olrHgZiMBg/pFz/yLlFStvIDsrDjUmGkLf3EDxv8gvZ9ncoFRI06uZl1Babel/RWKqg2HW/d6mKU6Ncd7pazvkSFbrSCLjQp1W2z77j5KPgUodTYP2k9xzHn3FSREXKrleLatE2ogkhdpI0jofhPY2PZUfIwtJBFiDYjkRqr9VJ4jaBWVIGntZP+5XfQuzLe1UXHIxhY/ne3Yc/Cy6DC2NTCGw1V3RjJrxm5o5EfE35jz4WFRVsc7A+J7XtPFpB7HkfJUSVspaqSF2/E9zHDi0lp+Wo8lLLRtebtyPh9ly0nFpIwGyDEPH79ver8RcXgzF5qiIKiwmt4XCwElhmCNA62eWRz0XaKukjcx2Fy0UMzJmB7DkiIiYpUREQhEREIRERCEREQhEREIReDamzo6mPclGXAjIg8wV70SgkZhNc0OBa4XB1Cr6swVO0/hua9vD4fUHL5rFNguocRvuawcTcO9ANfkrCRT/mpLa+Cqv0OjxXseq5t9fFfN2RsmOlZuxi5PvOPE/sPJfSRFASSblWscbWNDGCwGgC5nFm3/u7fZRH8Zw1/KP8A2PD15KuCvo7anMtTLIfidl+w7AAdl4CrWCMMb0nVYXiVY6onJOjSQOrft+3Jayu6wTt/fDaWU+JotG7na/hPIgaeWXDPhykUrmOa9ps5hBB8wbhPljEjcJ7Eyhq3U0okGnMbj6jUfS6u1Frhk3mtcPiAPqLrYqZb9FRe05vaTSP/ADuLv9xJ/dXoqT27RmCpmicLbrnW8xe7T6ELuobYndSo+OA+zYeVz8v5XyyolTKiVZLOBZp53RPZIw2ewhzT5g3CvunmD2MeNHtDh3F1QtPA6V7I2C73uDWjzcbBX1DEGMawaNAaOgFlXV9vd3z8louCYrP2y78/Ky2oiLgV6iIiEIiIhCIiIQiIiEIiIhCIiIQiIiEIiIhCqTbtMYqmWO2jgB04H0IXgKsvEmwRVtDmkNlaLAnMEHUH9j5rgKzZk8JPtYy3r+1teytYZmuaAdVh+JcOlhlc4C7SSQQDl0Ha3jqOYHgKnT07pXsjYLufYDqTZeml2bPN/hRudflf58u67jC+Gvux9rLYzWyAzDAdc+Jsllnawa5ptFw6WoeAWkN5k5C3RuerTmumiYGta0aNAHoFNEVSt0i5zFWG21rQ5pDZ2CzXHMOHI+XnwuujROa4tNwo5YmSsLHi4Ko/aey56ZxbNG5vmRcHodCvPR0Ms7t2GMvd/KDl15d1fCwF2CuNvhz9clTngbMVw822sL9+nguMwdhE0rhPUWM1vC0ZhlxmSeJtllkPPh2iIuSSRz3YnK3hhZCwMYMkRETFKiIiEIiIhC//2Q==" />  
          <h5 className="category-name">Infection Control </h5>  
          </Card.Body>
          </Card> 
          </Col>

          <Col className="p-0" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
          <Card className="h-100 w-100 text-center">          
          <Card.Body> 
          <img className="center" src="https://5.imimg.com/data5/LU/TA/WA/SELLER-7159894/single-head-stethoscope-500x500.jpg" />  
          <h5 className="category-name">Diagnostic Equipment </h5>  
          </Card.Body>
          </Card> 
          </Col>


          <Col className="p-0" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
          <Card className="h-100 w-100 text-center">          
          <Card.Body> 
          <img className="center" src="https://cdn-icons-png.flaticon.com/512/2927/2927567.png" />  
          <h5 className="category-name">Demo Dose</h5>  
          </Card.Body>
          </Card> 
          </Col>


          <Col className="p-0" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
          <Card className="h-100 w-100 text-center">          
          <Card.Body> 
          <img className="center" src="https://icon-library.com/images/medical-bag-icon/medical-bag-icon-7.jpg" />  
          <h5 className="category-name">Totes & Accessories</h5>  
          </Card.Body>
          </Card> 
          </Col> 
                    </Row>
               
               </Col> 



               <Col key={1} xl={6} lg={6} md={2} sm={12} xs={12}>
                    <Row>
           <Col className="p-0" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
          <Card className="h-100 w-100 text-center">          
          <Card.Body> 
          <img className="center" src="data:image/jpeg;base64,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" />  
          <h5 className="category-name">Simulators & Manikins </h5>  
          </Card.Body>
          </Card> 
          </Col>

          <Col className="p-0" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
          <Card className="h-100 w-100 text-center">          
          <Card.Body> 
          <img className="center" src="https://cdn0.iconfinder.com/data/icons/medical-services-set-2-2/64/x-17-512.png" />  
          <h5 className="category-name">Furniture </h5>  
          </Card.Body>
          </Card> 
          </Col>


          <Col className="p-0" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
          <Card className="h-100 w-100 text-center">          
          <Card.Body> 
          <img className="center" src="https://png.pngitem.com/pimgs/s/361-3613261_uci-green-lab-round-bottom-flask-and-flask.png" />  
          <h5 className="category-name">Laboratory</h5>  
          </Card.Body>
          </Card> 
          </Col>


          <Col className="p-0" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
          <Card className="h-100 w-100 text-center">          
          <Card.Body> 
          <img className="center" src="https://rukminim1.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100" />  
          <h5 className="category-name">Beauty</h5>  
          </Card.Body>
          </Card> 
          </Col> 
                    </Row>
               
               </Col> 
          </Row>




          <Row>
               
               
               <Col key={1} xl={6} lg={6} md={2} sm={12} xs={12}>
                    <Row>
           <Col className="p-0" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
          <Card className="h-100 w-100 text-center">          
          <Card.Body> 
          <img className="center" src="data:image/jpeg;base64,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" />  
          <h5 className="category-name">Infection Control </h5>  
          </Card.Body>
          </Card> 
          </Col>

          <Col className="p-0" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
          <Card className="h-100 w-100 text-center">          
          <Card.Body> 
          <img className="center" src="https://5.imimg.com/data5/LU/TA/WA/SELLER-7159894/single-head-stethoscope-500x500.jpg" />  
          <h5 className="category-name">Diagnostic Equipment </h5>  
          </Card.Body>
          </Card> 
          </Col>


          <Col className="p-0" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
          <Card className="h-100 w-100 text-center">          
          <Card.Body> 
          <img className="center" src="https://cdn-icons-png.flaticon.com/512/2927/2927567.png" />  
          <h5 className="category-name">Demo Dose</h5>  
          </Card.Body>
          </Card> 
          </Col>


          <Col className="p-0" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
          <Card className="h-100 w-100 text-center">          
          <Card.Body> 
          <img className="center" src="https://icon-library.com/images/medical-bag-icon/medical-bag-icon-7.jpg" />  
          <h5 className="category-name">Totes & Accessories</h5>  
          </Card.Body>
          </Card> 
          </Col> 
                    </Row>
               
               </Col> 



               <Col key={1} xl={6} lg={6} md={2} sm={12} xs={12}>
                    <Row>
           <Col className="p-0" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
          <Card className="h-100 w-100 text-center">          
          <Card.Body> 
          <img className="center" src="data:image/jpeg;base64,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" />  
          <h5 className="category-name">Simulators & Manikins </h5>  
          </Card.Body>
          </Card> 
          </Col>

          <Col className="p-0" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
          <Card className="h-100 w-100 text-center">          
          <Card.Body> 
          <img className="center" src="https://cdn0.iconfinder.com/data/icons/medical-services-set-2-2/64/x-17-512.png" />  
          <h5 className="category-name">Furniture </h5>  
          </Card.Body>
          </Card> 
          </Col>


          <Col className="p-0" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
          <Card className="h-100 w-100 text-center">          
          <Card.Body> 
          <img className="center" src="https://png.pngitem.com/pimgs/s/361-3613261_uci-green-lab-round-bottom-flask-and-flask.png" />  
          <h5 className="category-name">Laboratory</h5>  
          </Card.Body>
          </Card> 
          </Col>


          <Col className="p-0" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
          <Card className="h-100 w-100 text-center">          
          <Card.Body> 
          <img className="center" src="https://cdn1.iconfinder.com/data/icons/health-conditions-diseases-3/256/40-512.png" />  
          <h5 className="category-name">Physiotherapy & Rehabilitation </h5>  
          </Card.Body>
          </Card> 
          </Col> 
                    </Row>
               
               </Col> 
          </Row>

          
                    </Container>
               </Fragment>
          )
     }
}

export default Categories
