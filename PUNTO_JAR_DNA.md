# 🍺 Punto Jar - Brand DNA & Design System

Este documento resume la identidad visual, estratégica y técnica de la plataforma **Punto Jar**, diseñada para transformar la cultura cervecera en Bogotá.

---

## 1. ADN de la Marca
**Punto Jar** no es solo una app de mapas; es un conector cultural.
- **Concepto Central:** "El Punto de Encuentro".
- **Propósito:** Visibilizar el talento local (cervecerías independientes) y facilitar el descubrimiento seguro y transparente para el usuario.
- **Valores:** Autenticidad, Transparencia, Comunidad (Barrio) y Curaduría Experta.

---

## 2. Identidad Visual (Look & Feel)

### Paleta de Colores
- **Marrón Punto Jar (`#5d2b12`):** Representa la tierra, la malta tostada y la solidez de la marca. Color principal para textos y elementos de estructura.
- **Oro Cerveza (`#f7b731` / `#d4a017`):** Color de acento que evoca el brillo de una buena jarra y la energía de la ciudad. Usado en botones, resaltados y estados activos.
- **Crema de Fondo (`#fdf6eb`):** Un tono cálido que evita la fatiga visual y da una sensación de "papel craft" o ambiente de pub artesanal.

### Tipografía
- **Títulos (Playfair Display):** Una Serif elegante y clásica para dar peso y autoridad (ADN "Experto").
- **Cuerpo (Montserrat):** Una Sans-serif moderna y limpia que asegura legibilidad en dispositivos móviles (ADN "Tecnológico").

---

## 3. Principios de Diseño UI/UX

- **Efecto Parallax Dinámico:** Implementado en el fondo (`Slide.tsx`) para generar profundidad. Los logos difuminados se mueven a distintas velocidades respecto al contenido, simbolizando el descubrimiento constante.
- **Suavidad y Bordes:** Uso de bordes extremadamente redondeados (`rounded-[3rem]`, `rounded-full`) para transmitir cercanía y amigabilidad.
- **Transparencia y Blur:** Capas con `backdrop-blur-md` y opacidades bajas para dar un aspecto de interfaz moderna y "glassmorphism" ligero.
- **Gamificación Visual:** Uso de iconos de estado, medallas y barras de progreso que refuerzan la idea de "Rutas" y recompensas.

---

## 4. Arquitectura Tecnológica

### Stack de Desarrollo
- **Frontend:** React + Tailwind CSS (para diseño ultra-rápido y responsive).
- **Animaciones:** CSS Keyframes personalizadas (`float`, `fade-in`, `slide-in`) y transiciones de estado de React.

### Inteligencia Artificial (Gemini API)
- **Motor de Afinidad:** Utilizamos el modelo `gemini-3-flash-preview` para procesar el lenguaje natural del usuario y convertirlo en rutas sugeridas en tiempo real.
- **Asistente de Pitch:** Configurado con instrucciones de sistema para responder como un experto en la marca, manteniendo el tono "aventurero y premium".

---

## 5. Activos y Herramientas

- **Logo Principal:** Integrado desde Firebase Storage para consistencia.
- **Iconografía:** Mix de emojis temáticos y el icono circular de la marca para reforzar el reconocimiento visual.
- **UX de Navegación:** Sistema de navegación por teclado (flechas) y controles táctiles flotantes para una experiencia tipo "Presentation Deck" fluida.

---

## 6. Tono de Comunicación
- **Voz:** Elocuente, conocedora, pero cercana.
- **Eslogan:** "Tu punto de encuentro cervecero."
- **Llamado a la acción:** "¡Hagamos Punto!" (Sustituyendo el tradicional "Hagamos barrio" para alinearse más con el nombre de la marca).

---
*Documento generado por el equipo de Ingeniería Senior de Punto Jar.*
