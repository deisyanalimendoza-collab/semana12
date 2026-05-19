// --- PROTOCOLO DE SALIDA INDUSTRIAL (DRY) ---
const mostrarResultado = (mensaje) => {
    const contenedor = document.getElementById("resul");
    contenedor.innerHTML = `⚡ [SISTEMA]: ${mensaje}`;
};

// --- 3.1: PROTOCOLO DE VOTACIÓN ---
// Estación 1: Comprobación booleana rápida
const puedeVotar = () => {
    const edadInput = document.getElementById("edad").value;
    if (edadInput === "") return mostrarResultado("⚠ Ingrese edad.");

    const edad = parseInt(edadInput);
    const mensaje = (edad >= 18) 
        ? "ACCESO CONCEDIDO: Ciudadano apto para votar." 
        : "ACCESO DENEGADO: Edad insuficiente.";
    
    mostrarResultado(mensaje);
};

// --- 3.2: NÓMINA DE SUELDO SEMANAL ---
// Lógica con horas extra al doble
const calcularSueldo = () => {
    const hrs = parseFloat(document.getElementById("horas").value);
    const pago = parseFloat(document.getElementById("pago").value);

    if (isNaN(hrs) || isNaN(pago)) return mostrarResultado("⚠ Protocolo fallido: Datos incompletos.");

    let sueldoTotal = (hrs <= 40) 
        ? (hrs * pago) 
        : (40 * pago) + ((hrs - 40) * (pago * 2));

    mostrarResultado(`Nómina procesada. Total: $${sueldoTotal.toFixed(2)}`);
};

// --- 3.3: SELECTOR DE REGALO (14 FEBRERO) ---
// Estación 1: Múltiples casos para la misma variable
const determinarRegalo = () => {
    const p = parseFloat(document.getElementById("presupuesto").value);
    if (isNaN(p)) return mostrarResultado("⚠ Ingrese presupuesto.");

    let opcion;
    if (p <= 10) opcion = "Tarjeta";
    else if (p <= 100) opcion = "Chocolates";
    else if (p <= 250) opcion = "Flores";
    else opcion = "Anillo";

    mostrarResultado(`Sugerencia de regalo: ${opcion}`);
};

// --- 3.4: TARIFA DE ESTACIONAMIENTO ---
// Lógica de escala industrial (Uso de Math.ceil para horas completas)
const calcularEstacionamiento = () => {
    const hrsInput = document.getElementById("horas").value;
    if (hrsInput === "") return mostrarResultado("⚠ Ingrese tiempo de estancia.");

    const hrs = Math.ceil(parseFloat(hrsInput)); // El usuario paga hora completa
    let total = 0;

    if (hrs <= 2) total = hrs * 5;
    else if (hrs <= 5) total = (2 * 5) + (hrs - 2) * 4;
    else if (hrs <= 10) total = (2 * 5) + (3 * 4) + (hrs - 5) * 3;
    else total = (2 * 5) + (3 * 4) + (5 * 3) + (hrs - 10) * 2;

    mostrarResultado(`Ticket de salida: $${total.toFixed(2)} (${hrs} hrs)`);
};

// --- 3.5: IDENTIFICADOR DE MENOR EDAD ---
// Comparación de 3 nodos (Uso de lógica estricta)
const hallarMenor = () => {
    const n1 = document.getElementById("nom1").value;
    const e1 = parseInt(document.getElementById("ed1").value);
    const n2 = document.getElementById("nom2").value;
    const e2 = parseInt(document.getElementById("ed2").value);
    const n3 = document.getElementById("nom3").value;
    const e3 = parseInt(document.getElementById("ed3").value);

    if (isNaN(e1) || isNaN(e2) || isNaN(e3)) return mostrarResultado("⚠ Ingrese todas las edades.");

    let menorNombre, menorEdad;

    if (e1 < e2 && e1 < e3) {
        menorNombre = n1; menorEdad = e1;
    } else if (e2 < e3) {
        menorNombre = n2; menorEdad = e2;
    } else {
        menorNombre = n3; menorEdad = e3;
    }

    mostrarResultado(`👤 La persona de menor edad es: ${menorNombre} (${menorEdad} años)`);
};

// --- 3.6: DESCUENTO DE ARTÍCULO ---
// Lógica de umbrales industriales
const calcularDescuentoArt = () => {
    const precio = parseFloat(document.getElementById("precio").value);
    if (isNaN(precio)) return mostrarResultado("⚠ Ingrese el precio base.");

    let descuento = 0;
    if (precio >= 200) descuento = 0.15;
    else if (precio >= 100) descuento = 0.12;
    else descuento = 0.10;

    const total = precio - (precio * descuento);
    mostrarResultado(`Descuento aplicado: ${descuento * 100}% | Total: $${total.toFixed(2)}`);
};

// --- 3.7: ESTÍMULO DE BECAS ---
// Uso de operadores lógicos (&&) para filtrar el rendimiento
const asignarBeca = () => {
    const edad = parseInt(document.getElementById("edad").value);
    const promedio = parseFloat(document.getElementById("promedio").value);
    
    if (isNaN(edad) || isNaN(promedio)) return mostrarResultado("⚠ Datos académicos incompletos.");

    let monto = 0;

    if (promedio >= 9) {
        monto = (edad > 18) ? 2000 : 3000;
    } else if (promedio >= 8) {
        monto = (edad > 18) ? 1000 : 2000;
    } else if (promedio >= 6) {
        monto = (edad > 18) ? 500 : 100;
    } else {
        monto = 0; // Carta de invitación a estudiar más
    }

    const msj = (monto > 0) 
        ? `Beca asignada satisfactoriamente: $${monto}.00` 
        : "No cumple con el promedio mínimo para el programa de estímulos.";
    
    mostrarResultado(msj);
};

// --- 3.8: BONO MENSUAL (Años vs Sueldo) ---
// Regla Clean Code: Funciones que comparan y eligen el máximo
const calcularBono = () => {
    const sueldo = parseFloat(document.getElementById("sueldo").value);
    const anti = parseInt(document.getElementById("antiguedad").value);

    if (isNaN(sueldo) || isNaN(anti)) return mostrarResultado("⚠ Ingrese datos de nómina.");

    // Cálculo por antigüedad
    let bonoAnti = (anti > 2 && anti < 5) ? (sueldo * 0.20) : (anti >= 5 ? sueldo * 0.30 : 0);
    
    // Cálculo por sueldo
    let bonoSueldo = (sueldo <= 1000) ? (sueldo * 0.25) : (sueldo <= 3500 ? sueldo * 0.15 : sueldo * 0.10);

    // El sistema otorga el bono mayor (Lógica Industrial Eficiente)
    const bonoFinal = Math.max(bonoAnti, bonoSueldo);
    
    mostrarResultado(`Bono máximo detectado: $${bonoFinal.toFixed(2)}`);
};

// --- 3.9: COTIZADOR DE PÓLIZA DE SEGUROS ---
// El "Panel de Control" con múltiples estados booleanos
const cotizarSeguro = () => {
    const tipo = document.getElementById("tipo").value;
    const edad = parseInt(document.getElementById("edad").value);
    
    // Captura de checkboxes (true/false)
    const bebe = document.getElementById("alcohol").checked;
    const lentes = document.getElementById("lentes").checked;
    const enf = document.getElementById("enfermo").checked;

    let costoBase = (tipo === "A") ? 1200 : 950;
    let recargos = 0;

    // Aplicando cargos incrementales
    if (bebe) recargos += costoBase * 0.10;
    if (lentes) recargos += costoBase * 0.05;
    if (enf) recargos += costoBase * 0.05;
    
    // Recargo por edad (UX Storytelling: Perfiles de riesgo)
    recargos += (edad > 40) ? (costoBase * 0.20) : (costoBase * 0.10);

    const totalFinal = costoBase + recargos;
    mostrarResultado(`Póliza procesada (Plan ${tipo}). Cuota final: $${totalFinal.toFixed(2)}`);
};

// --- 3.10: DESTINOS DE VIAJES "LA TORTUGA" ---
// Lógica de presupuesto basada en costos por kilómetro
const planearViaje = () => {
    const p = parseFloat(document.getElementById("presupuesto").value);
    if (isNaN(p)) return mostrarResultado("⚠ Ingrese presupuesto de viaje.");

    let destino;
    // Costos basados en distancias estándar (UX Storytelling)
    if (p >= 1200) destino = "Cancún (Plan de Lujo)";
    else if (p >= 800) destino = "Acapulco (Plan Estándar)";
    else if (p >= 750) destino = "Puerto Vallarta (Plan Turista)";
    else if (p >= 400) destino = "México (Plan Express)";
    else destino = "Estadía local (Presupuesto insuficiente para transporte)";

    mostrarResultado(`Destino sugerido: ${destino}`);
};

// --- 3.11: BONO POR ANTIGÜEDAD (TIENDA) ---
// Estación 1: Estructura de decisión por años de servicio
const calcularBonoTienda = () => {
    const anos = parseInt(document.getElementById("antiguedad").value);
    if (isNaN(anos)) return mostrarResultado("⚠ Ingrese años de servicio.");

    let bono = 0;
    // Escalafón industrial de recompensas
    if (anos === 1) bono = 100;
    else if (anos === 2) bono = 200;
    else if (anos === 3) bono = 300;
    else if (anos === 4) bono = 400;
    else if (anos === 5) bono = 500;
    else if (anos > 5)   bono = 1000; // Tope máximo por lealtad
    else bono = 0;

    mostrarResultado(` Bono asignado por ${anos} años: $${bono}.00`);
};

// --- 3.12: SUELDO CON EXCEDENTES (Doblado y Triplicado) ---
// Estación 4: Implementación de lógica compleja en Arrow Function
const calcularSueldoComplejo = () => {
    const hrs = parseFloat(document.getElementById("horas").value);
    const pago = parseFloat(document.getElementById("pago").value);

    if (isNaN(hrs) || isNaN(pago)) return mostrarResultado("⚠ Error de nómina: Faltan parámetros.");

    let totalSueldo = 0;

    if (hrs <= 40) {
        totalSueldo = hrs * pago;
    } else if (hrs <= 45) {
        // 40 base + excedentes al doble
        totalSueldo = (40 * pago) + ((hrs - 40) * (pago * 2));
    } else if (hrs <= 50) {
        // 40 base + 5 dobles + excedentes al triple
        totalSueldo = (40 * pago) + (5 * (pago * 2)) + ((hrs - 45) * (pago * 3));
    } else {
        // Regla de seguridad industrial: No se procesan más de 50 horas
        return mostrarResultado("⚠ PROTOCOLO DE SEGURIDAD: Jornada excede el límite legal.");
    }

    mostrarResultado(`Sueldo Total Semanal: $${totalSueldo.toFixed(2)}`);
};

// --- 3.13: COSTOS DE VIAJE DE ESTUDIOS ---
// Aplicando la Interfaz del Microondas: Lógica clara y sin ambigüedad
const calcularCostoViaje = () => {
    const alumnos = parseInt(document.getElementById("alumnos").value);
    if (isNaN(alumnos) || alumnos <= 0) return mostrarResultado("⚠ Ingrese cantidad de alumnos.");

    let costoIndividual = 0;

    if (alumnos >= 100) costoIndividual = 65.00;
    else if (alumnos >= 50) costoIndividual = 70.00;
    else if (alumnos >= 30) costoIndividual = 95.00;
    else costoIndividual = 4000 / alumnos; // Renta fija de autobús para grupos pequeños

    const totalViaje = (alumnos < 30) ? 4000 : (alumnos * costoIndividual);

    mostrarResultado(`Individual: $${costoIndividual.toFixed(2)} | Total Empresa: $${totalViaje.toFixed(2)}`);
};