# Monitor-Economia-Uruguay-

⸻
# 🇺🇾 Monitor Económico Nacional – API RESTful

Un proyecto personal creado con el objetivo de centralizar y democratizar el acceso a los principales indicadores macroeconómicos de Uruguay.

📊 Como estudiante de Economía y Sistemas, me interesa la transparencia y el acceso a la información económica — especialmente en América Latina, donde muchas veces los datos públicos están fragmentados o son difíciles de analizar de forma integrada.

---

## 📌 Descripción del Proyecto

Esta es una API RESTful de backend que organiza y expone indicadores económicos esenciales de Uruguay, con posibilidad de expandirse a otros países de la región.

Está pensado para ser útil a:
- 📚 Estudiantes e investigadores
- 📰 Periodistas y analistas
- 🏛️ Gobiernos e instituciones públicas
- 🧑‍💻 Desarrolladores que trabajen con datos económicos

---

## 💡 Funcionalidades Principales

- ✅ API REST organizada por categoría (inflación, PBI, tasas de interés, reservas, etc.)
- 🌐 Endpoints claros y fáciles de consultar
- 🔄 Actualizaciones periódicas vía scraping o APIs públicas (BCU, INE, Banco Mundial, etc.)
- 📁 Respuestas en JSON listas para usar en dashboards, visualizaciones o análisis
- 🧪 Estructura limpia, escalable y bien documentada

---

## 🔧 Tecnologías Utilizadas

- Node.js + Express.js
- Axios / Cheerio para obtención de datos
- (Opcional) MySQL o SQLite para persistencia
- Docker (configuración futura)
- JWT si se extiende a usuarios
- Proyecto completamente open-source

---

## 📦 Ejemplo de Endpoint


GET /api/economia/inflacion

Devuelve:

{
  "pais": "Uruguay",
  "año": 2024,
  "mensual": [0.9, 0.7, 1.2, 0.8],
  "anual": 6.4,
  "fuente": "INE"
}

------


🚀 Objetivos del Proyecto
	•	✅ Unificar datos económicos clave en una sola API
	•	🧠 Aplicar conocimientos de economía y desarrollo backend
	•	📣 Promover la transparencia de datos en la región
	•	📈 Crear una base para proyectos futuros (simuladores, dashboards, análisis de políticas)

⸻

🤝 ¿Querés colaborar?

Si te interesa la economía, los datos o el desarrollo backend y querés aportar al proyecto o adaptarlo para otro país, ¡estás más que invitado/a a hacer fork, dejar una estrella ⭐ o contactar!

⸻

📬 Contacto

Hecho por Giuliano Sacco

🛡️ Licencia: Creative Commons BY-NC 4.0 © 2025 Giuliano Sacco  
Este proyecto es de código abierto solo para fines no comerciales.



