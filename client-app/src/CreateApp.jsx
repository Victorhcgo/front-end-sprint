import React from 'react'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

import { useRef } from 'react'



export default function CreateApp() {

  const Ancho = useRef(null);
  const Largo = useRef(null);
  const Alto = useRef(null);
  const Peso = useRef(null);
  const DireccionRemitente = useRef(null);
  const CiudadRemitente= useRef(null);
  const NombreRemitente = useRef(null);
  const CedulaRemitente = useRef(null);
  const DireccionDestinatario = useRef(null);
  const CiudadDestinatario = useRef(null);
  const NombreDestinatario = useRef(null);
  const CedulaDestinatario = useRef(null);
  const SensitiveMerchandise = useRef(null);



  const enviar = (e) =>{
    e.preventDefault();
    let ancho = Ancho.current.value
    let largo = Largo.current.value
    let alto = Alto.current.value
    let peso = Peso.current.value
    let direccionRemitente = DireccionRemitente.current.value
    let ciudadRemitente = CiudadRemitente.current.value
    let nombreRemitente = NombreRemitente.current.value
    let cedulaRemitente = CedulaRemitente.current.value
    let direccionDestinatario = DireccionDestinatario.current.value
    let ciudadDestinatario = CiudadDestinatario.current.value
    let nombreDestinatario = NombreDestinatario.current.value
    let cedulaDestinatario = CedulaDestinatario.current.value
    let sensitiveMerchandise = SensitiveMerchandise.current.value

  }

  return (
    <>
      <NavBar />

      <main className='pb-5'>
        <form className='from-create center' onSubmit={enviar}>
          <div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1" className="form-label mt-4">Fecha</label>
              <input type="date" className="form-control-create" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
            </div>

              <p>Datos del paquete</p>
            <div className='d-grid'>
              <div className="input-group mb-3 ">
              <label htmlFor="ancho" className=''>Ancho</label>
                <input type="number" id='ancho' className="form-control-create" aria-label="Amount (to the nearest dollar)" ref ={Ancho}/>
              </div>
              <div className="input-group mb-3 ">
                <label htmlFor="largo" className=''>Largo</label>
                <input type="number" id='largo' className="form-control-create" aria-label="Amount (to the nearest dollar)" ref ={Ancho}/>
              </div>
              <div className="input-group mb-3 ">
                <label htmlFor="alto" className=''>Alto</label>
                <input type="number" id='alto' className="form-control-create" aria-label="Amount (to the nearest dollar)" />
              </div>
            </div>
            <div className='d-flex'>
              <div className='d-flex align-items-center'>
                <label htmlFor="weight" className=''>Peso</label>
                <input type="number" className="form-control-create" id='weight' aria-label="Amount (to the nearest dollar)" />
              </div>
              
            </div>
            <br />
            <p>Datos de quien Remitente</p>
            <div className='d-grid'>
              <div className='d-flex align-items-center mt-3'>
                <label htmlFor="address" className=''>Direccion</label>
                <input type="text" className="form-control-create" id='address' aria-label="Amount (to the nearest dollar)" />
              </div>
              <div className='d-flex align-items-center mt-3'>
                <label htmlFor="city" className=''>Ciudad</label>
                <input type="text" className="form-control-create" id='city' aria-label="Amount (to the nearest dollar)" />
              </div>
              <div className='d-flex align-items-center mt-3'>
                <label htmlFor="name" className=''>Nombre</label>
                <input type="text" className="form-control-create" id='name' aria-label="Amount (to the nearest dollar)" />
              </div>
              <div className='d-flex align-items-center mt-3'>
                <label htmlFor="cc" className=''>Cedula</label>
                <input type="text" className="form-control-create" id='cc' aria-label="Amount (to the nearest dollar)" />
              </div>
            </div>
            
            <br />
            <p>Datos de quien Destinatario</p>
            <div className='d-grid'>
              <div className='d-flex align-items-center mt-3'>
                <label htmlFor="address" className=''>Direccion</label>
                <input type="text" className="form-control-create" id='address' aria-label="Amount (to the nearest dollar)" />
              </div>
              <div className='d-flex align-items-center mt-3'>
                <label htmlFor="city" className=''>Ciudad</label>
                <input type="text" className="form-control-create" id='city' aria-label="Amount (to the nearest dollar)" />
              </div>
              <div className='d-flex align-items-center mt-3'>
                <label htmlFor="name" className=''>Nombre</label>
                <input type="text" className="form-control-create" id='name' aria-label="Amount (to the nearest dollar)" />
              </div>
              <div className='d-flex align-items-center mt-3'>
                <label htmlFor="cc" className=''>Cedula</label>
                <input type="text" className="form-control-create" id='cc' aria-label="Amount (to the nearest dollar)" />
              </div>
             
              <div className='d-flex  align-items-center mx-5'>
                <input className="form-check-input" type="checkbox" id="flexCheckChecked"  />
                <label className="form-check-label" htmlFor="flexCheckChecked">
                  Sensitive Merchandise
                </label>
              </div>
            </div>
            <button type="submit" class="btn btn-outline-success">Enviar</button>
          </div>

        </form>
      </main>

      <Footer />
    </>
  )
}
