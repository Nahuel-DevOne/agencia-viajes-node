import express from 'express';
import { 
    paginaInicio, 
    paginaNosotros, 
    paginaViajes, 
    paginaTestimoniales, 
    paginaDetalleViaje 
} from '../controllers/paginasControllers.js';

import {
    guardarTestimonial
} from '../controllers/testimonialController.js'

const router = express.Router();

// req: lo que el cliente envia o pide al servidor, res: lo que el servidor envia al cliente
router.get('/', paginaInicio)

router.get('/nosotros', paginaNosotros)

router.get('/viajes', paginaViajes)

router.get('/viajes/:slug', paginaDetalleViaje)

router.get('/testimoniales', paginaTestimoniales)

router.get('/testimoniales', guardarTestimonial)

export default router;